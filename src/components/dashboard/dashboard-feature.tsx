/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5gTw7ZyQxQ89DvJYgryj7sc3krWEh2ppK2vtRCXt8wrRzeZvect5gayjEaqoRp5fC1NJau7tWsmEC9tqRrv8UuxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bHJjbou4LqSZw5ouTVh3zzgm65xA9f6T1WnEAJd5JA4kKE9dajcvURCbbu6QfF6szxuRnq4K9dejRqgiFRyaCMz",
  "key1": "25ZFxWGJDu8UepBhcD25yx9pVcShHQgLABoGrcf5kZJktcPXqWTFuKP3oVgYbahDsry4YtiiRwyB7oa75HJ8xKuq",
  "key2": "2GBN3cq9tDJix3F5Wt6prj9FgwyFVsQj1HCZpar1ANLQGDn1gD79Aa1AnsvqLpDgUMiWJAsgYQziWXbUrHh6jaxo",
  "key3": "4KsAUiKac8iVQvsXJFKMDJuoDU9sW6N91ecMuUKFwBUoHqZGmsDSsZpaeHs5yubChVLrfHRuye7i5fmpbZ1f4WzJ",
  "key4": "49wwbPefqKJh2nqqGeACbErwtLzMvnvCSXewZMzJVTpan55hU8p3jf5sfgtnrYwS1aP1EtYwHdrnQ7btSaaEEk68",
  "key5": "34rhcTpo7qt7VsEzJNgjkBttb2DaPMB8tJXvP5d5BayoWZVG1faqhHpDo7GFa3wDx2T2KgxcttYaruwyYca98ERw",
  "key6": "2unvgCCqCAVv3BG9BgwAB7SXmbrqFBucnPuqq2Uzn1QWCsEewnBir86bdXw2avV2pagSiEr6D9RRbQcdfKgj1cHY",
  "key7": "63bBkCgXKadbQqDePdvj4Bkhry7a8rdU5WP7vPR5G9dDPCNfLoXiTTkLWJH4tiztVcHVVkpvvjCzAztALPckCN7E",
  "key8": "4FiHAEMDVH6enuzpqbe94SWGK6ZXBJfcnf177fmuJRhNcjeNpaT3TBY8wVn65hLTnu2biwHvw54kWgRESTUzr4ux",
  "key9": "4Vb6E8yszcntNMLcEqnq8DBJyJyffFiUXCnFPaCkBSMLZw1EQn7UBKEAw2Tyz3wPigqAmMzzNMDFPwWxp4oUvCb",
  "key10": "2FzDC144sjwRhPiA86TyEqvc9oqLJfSjgYvD4kCS3RofzfKHGPYadBQVtTL6Csa2dTrTbRRegSNcTgneAxvNsHqF",
  "key11": "5rQ7JHvjYdcz8U8VaKq6wBy8LsqDaPo4ehELAcfzL3hT3BCVX8vk8fdwUf5BGWvDrjy8D86VejPer2PMPWdXVYHM",
  "key12": "3xav34xyvFV7HoB6x94o3f2eSDKt7UQ8ksF5CnT3r7Pns4VjfRzoEFTQn9BUateQEnnWNdXcPPKQBjmUwkqtMavf",
  "key13": "2u1LRPEkCkwaMbTRnNNDfXQQMYKk9W2ZqXspcb6Za8uyD8eNsX9UHUykozUA453FahyvSqA9ALb5W3zYrQiCnFRr",
  "key14": "3R7GRLWednUQbvfm74XrB4zxrVw7kq2ZdnvJGD3fWjdXUniCEkujbK6KbRhRkviSUsmtuSyNuizvzxLKB2bqduYd",
  "key15": "5AfT6Jqs9Lzv14obhY2X36qjEamc5fzUn9hysY6kMHHt1vU3mSGMbEmKGctMWg47PZTsAR7wLdNcNM8TgwbnbNoV",
  "key16": "5kTnQhGrh84555ecxHRaaRSx6a8XVfV6B32PiAqXPSJ84WPz95RJmeu5vJnqkP8hnoBUPUCeWGoR7MTcaUNEoabC",
  "key17": "257rbzRhTiGgjuyjBRPo222gWbTzzSDKhqNteTgJHrF7pKie9ZSkyKpuq3DvrsdjxzpsLMpTipJCxXUZ449kUpj7",
  "key18": "9NSPLAAbWuWzrVc42p4CWM9hKsb7cfAmsKYX919cdPGe62KHxXvUTYcavL2Q4BRiyQjkmduuKUe5GXLZp1VAQYq",
  "key19": "SnUM1DDYujkM2VXMgcjvUBhhpSxs8YF82rHxjnPfun7eGmGb1p8rdvuBop8ek1L1RHasEUYZZBmZTXHaip1Lwwh",
  "key20": "5EWZFp6dEQ7jCQrNtoMrvHXhwcboeuwM9RkX7VQ7rrCHZiaYnDuUBa1ShSycaRbSDUKZQNNiMrTcXAR7Rw7GoA7i",
  "key21": "4vLBbydX8P98LKbe11ygLwe6f8aeKUP6J16xFUyatsFB5EQtxmfhLegdfNEu9P9uTnGGTfVi1pnknB8huELDNZa2",
  "key22": "3Muz228DNy1hherNVt3UAQX3PQGW2RXLw6KupSNoSkVSc2Rt5YctVeicUSLBf262XgAmjSy6Bc5xanmrqeekSKGg",
  "key23": "5NgK2jhvnXPJe81VkHPcLeYgDB4KwNxfj7WTk9wBk74gKzcgeJkRSi1QTV9jTiNG1EBmWUAmLyVnGh5rWQeiWZHk",
  "key24": "1K44CA4MkXdYt7GvcU6mMreyCbvNh2bZTrTKzp7vuT7uARNnwFCu7gnDBWSNEet7JoWYkYEg43z4U4dLstHfVf6",
  "key25": "5fgqmNiGJP3AWcAg6dQfoAnutXQDjr2MFMz9PB3z7BMNBsSX6489GVsMsmBBeeqam63MHPwA126CMiFQujvCCRMk",
  "key26": "4phVbwXb96ZZ3RDGQyDacYTSX9Z5P167J6kEN7A4E9bXCgrgGxVvPfHmdB31DJ1Pom3apcwsL4V3a5TS6ZF918GW",
  "key27": "3vKD8QgEivKGAjjHavAFYB9RU8A4vebo2aemWHYjKtC2RWWYKhGMvGBPsgYSGSgHWwcYkpzt17N1TgBPb6E8tSo4",
  "key28": "576ay7ESo7jKghzJML6RRYCCTuEuHmM6gqn1mNCZRSkFB5zncV4fo4YqKGsjE6vqyrXQ2btfqwB2xCW2h8ws4Rqp",
  "key29": "2AD32m2ErRDKCqpimS5UaFeBDtfYTTjcnGDU776cpCNYQxAZ21uvM7DDrMpH9g8GVPtH8wyC5rHBuyu4qTuG3Lfa",
  "key30": "5rtaVCx6R5khGQ5GviVDEts7y7teDwdgSce3GJ4BYzW9KCJ1Juoy2KoqXC56SmhLUj4TLGRbgA2narwi2Rnn5y2M",
  "key31": "4AGZtawCRK1VZyfJR7GTUEMqpvi3n1LwQWrSD2wkJYeDkiaGthD6tHMxzVNLt9TtQa72WBtb6MYRs3bXZc5ex76C",
  "key32": "JGARXS4sErFWDJWcUe1wFbpiZNK5A4Ltn7UY3wXqZ4xqgrLE9oXfcbgnt1NfYTJ2VUVj18mebvR8w8EXrrfsVEc",
  "key33": "5MJkcvxLzpX3u9QnZGHZZzw8PURh14szm2P5N2dNy6iezLMxsL5MKhfTV9weGkf19PEsZzA9MTQzHrxHpdKn3efa",
  "key34": "3w8pwGPHLdBKL24FNZdTkQJ7JfDuWWm6M7c4VT3AQbdpFbux6s46F694JfSRm1ptGRsMAZTvjHbc8pufGiBSbDAY",
  "key35": "3GMCqSM2AWLMyKDPwm6LkheiFWni8kmxcxhWDpJnfeCXbvFJicF8wfUG6PQyoLDZD3Qz7wDSky9iBHiXV1rw7nSK",
  "key36": "4GpZWBmoqN1RWiTcjnLGVHZoKz5vhhvf4MfQ3Dnp2LrUAcRsL5rEMSWiJmQoYTGngxkRSffsjk1DufH97Sk7KVUi",
  "key37": "5AAdeZdQy21MecyPp1u6ex4ehsL7p5MFHnkJZkYcMLaSfJWTJEP7Pcf7f6Nt3HtLu1PGMJEYm3qiCR941pEM4PoC",
  "key38": "2GPPng26xXpUs39h1JmoftBYofexYkqBvFPXKThFoLsZvWVPhQfZEPY7jExnfJvj8xqQs9fwxJxzmZpjV435p9eh",
  "key39": "624XrQG69SkSMHm2UVBe9wycp4UGaasEsaj5RuSkTeBppD3ag4vE4YmNinhT3EuHiMu7xrCeuS2XwSYiBZs7Revw",
  "key40": "n8XUofhpuHH3mLkWyUhsnDiw2k9Wakg8wrXw3nbs8B5AwU9fCFQsXvALdP862CJ5dr4bUsHf7oitMHiEoRrRGcj"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
