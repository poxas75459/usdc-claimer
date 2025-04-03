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
    "5Pz2VF2g7GCgkSk4TJ52doeCvL6H6KJwjMxFaasACFAEtr1psFa6RGBcvgG4cmREmerZFTo322PkGTr1zbcZfDQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tqQjPnDahq3yiRG1eFF56spVYjepNkCNMAQftXndsWfTQi3SJK1CwYZuLMxE1KrXqRfu2doar1HNHd2mv8Sv28F",
  "key1": "3egRftxdc9QwYkpRdDAS3aGws7kxmvpFda8Q2QDFetJ3PRaC9GFmihymG7F5pRJbYraCuM2SPcQawhKrLAArprgW",
  "key2": "LVCEWnQRvjrUn49Ttt87DgdQZBrYpvf3VQEeHMRDRpunaAxdtxQsfe2j8cAJtGBKtoSvaDGgjmDJNQTdqLZyrjz",
  "key3": "3pDxYSrb9SkoBeSwrnhdTP5yR7g37WDsqKoUcV4cT6Gu3aPTLodvFa5YAYtVXb5ZRWDt8LLSoaEbEAp3viwzjT4S",
  "key4": "4ctr4dw7WDKE3rDWWcqrX1ZmybJDWUn5embUupJWQDvxAsyM2YYRytFUNBTUqsMUQXJXzfzEu2ozinHtJxd4wH1x",
  "key5": "4hDLryb2e58uSYapCikXNVweDiGxcFqGrt7rVzuc3CFQQZ8CJFcnu89XHepX6Wuz5T7QJYu37H5yd9dzHZjzBjDk",
  "key6": "3v2wmA4MgFouibwqX4yLRyvNz1aWUvuzoAWuJo6xXXKCrVL7YPaJmoEz9YbGppD6ZHKhrJ5Q8Jzi4EWsphUmZJtF",
  "key7": "4eNm1yZkykEb2rVZAvv2CAUCXvkt6AJSJ7VGa5CVpUC1BNbYCgZqdwH8K98xue31YgQBDZ5osy8ZHH3U4GWsStfZ",
  "key8": "4XvnpkKcqkTFPTFwKkag1bw1Xi1WRNyfy4DFULXdEb53JjK9otxBnQfQpitFHfrERoituZPoBm4vftUPjzMyJ9oD",
  "key9": "273eiifiij7guGo11nsSi3gYrdAL81KRASkUziChiW4BUpL827k2JCpjYgvkYJruh1nTnAssf5rDb2tmDMKraerz",
  "key10": "hJyPTUua3yAs8tUmonsXJfD1XGd5E5NE2eVCc57tK2QfTx3GHRPTbouJ83Mn7x8ei2gvbrhUk6cCkLLuatYniNh",
  "key11": "3LH4cneDkTPZbhN9mtfMTQrfiJ6XizBa7fnJxeVrCY5to9foaWw4Eg3g6Mer7fnbBsEpUCZu4Mb5AuE6D63cbB37",
  "key12": "44vafYdezHMRYx4HMyoQCzjpcsb8pvHUnfAuDaTg9EaoKvix9xSizXGdsBPHH6Z1J5wCoTe2wUJvDhBLdyHCnpAF",
  "key13": "4TCw4Fb17r7Vabd5aLEKLenDziDEhsCziPDGJZP6GT5FrZRvVCqSeVtb9focLvCdNtECYD8wtCf2h8AERKfq9n5V",
  "key14": "2aPbSSSywsMWJPLg4LBzuuAJFyaAyhbXNtDgsXPsPeTqQB2MicDE9fm6TmLaT2YL24hGfvL6u5A9gHjkonpfyhm8",
  "key15": "2vPkxg6T74aBuWLNhsMo5SxGxiygdsb6SRuANuWi2GgZUQ1PoX9cGqLWCFAb1X5uoL34GoURvG9TziLswcPK4JSD",
  "key16": "51xUoXQPxqptEexBhDQWC7yh66iGZTMnmr3Js4KBDJ3zJGrMrWUvvx2nhcGpm8HPiGyRdCNyib8n7PLuBJ3Xkr5V",
  "key17": "3rwFKQySJ63dLVrpDVaEdoSjLyJJdcCAT53rywJLCouwpRMd7iptxJo5XXYGTVV8EY6uefqkwYpQquXDX1XcAx7P",
  "key18": "2tVaFkNkHhbVhLUkCHUTSuZ9giM5jkfRZTKu8g3WoRZ9gEuhhUgG81zSh2RSx4VLW2o6nKtEZ9DFkcLSTzuLWdLR",
  "key19": "54k55kurjycnijAJZKXNQ6r4DWvVoKzReArHADFYvCxL5t6F5r2oSeJzwvNNDLpqHXEF1CuNZMu7MhNbPBUKptHX",
  "key20": "KMzMRMWJCCxcGwuhG1k2zzaesY7E6UQ7q1HQv3vx4o1hbXczwYWMqbsxU1uNA4tKighMw1MKfZnW37thhaThfqd",
  "key21": "5XfZNHmtWotsrCknrQu5KbgCDYy8peoTn5DcqvvxWRodyoubJet6LyueGEJmtdoJL2NFoTPhYdTNaFJUT8MGB16i",
  "key22": "3rSg1o6KJPoXBcYfPVy6Lqw7wyqHJatxUdAmfBEKd9CTSz5nf7kR1vUUwD3SVUDovenBDPoDPrrCTSxSojfbkpYm",
  "key23": "9g1VbdnRSYYbtZJYnGWnwckats8UuTmeUmXBDLLPp9YHV3LssBvRm6CtjjXdLXPZC8y7TfagZywbdTKaLCiWt8U",
  "key24": "3Hbgx4Pbz5HeKe979Gc1tvagf5rCqp8nUXZVQ4QYVwio9NvdStvEwcfuqzbXxdi9kpbKX2nfwutLuke6f5n2eh82",
  "key25": "3mdji1FsnXS4tFrCuWkBq6x3k874pZwDsLvsPEBREpWiwazHHMsjy1XTMBw6aSW6cSStKTJCk2SczweWoF97UN7u",
  "key26": "4TStgMLWcKSoqeGF6e2f8DXuQsHWsz9okjZeg29aiddvhwmMMdYMJycETdkBz2GHe6RtbDBN5DTDUYzHYag2Aq4r",
  "key27": "5FZfyvJSmkJH3siH5d74bqXGfAw3mbQFu2UDh5FDaASVyoGuX6Y9UxrQSa3JCzuBEbGmGkRQaKQFBMabu3G986jm",
  "key28": "2Lq5g1JyAxmKisvgVkzodQQ6vN1kb6RFRr1nPeWsskWqbbprtmNQtWCyGSJ5ewD6gBQzCJxdVKKjbkn6CZ2kxeS1",
  "key29": "2EK7jNqjDT21FnUFGYb5Tc1cY9Sr54ir8r7vyaeE48V7d2VtHfVFTZTh9CbRkuEDBtmHyEaiNioaB2CpUqdKjQgm",
  "key30": "3FMLoBn3FeD8JZKtwq1xE52eN9Wj7ZWpagU6YURY2EkW6K1phpdE9bV8hPjVyciXmrSyoGmDa2LJ2HmYVyu8d9aL",
  "key31": "3hfDn3ypb9dQWredDVTbuQ1rjespJ6T23PqZZhnrmKH9QsSSSGMgcMEH8qYBh9BW5xqX32mG6ZRkMbBS55R1fF5U",
  "key32": "5UymSXs4PR5uJX339oBW7M85deUCaXLNW2pMv51JJdH93UzniwgUQngaXa9LpDrqjyrqMUUSviR9V1fcWgJjbJM6",
  "key33": "3jfuP4tgnoSupZKwFrd4acCcLNjW2HJj9s7zUjP3CWityChqRXFEcPQdRw5uT3sHbARWwakdkqexW6eFa64CYvE6",
  "key34": "4BmXSdvjqtLSntYKi93Zo2NeoJjLm6H9SA2L9iNtacUG1LCyHzcMeKdKUg64ctsA9bioy82Lwbk9Ekta4sGe5i2o",
  "key35": "2e8HpA6RzhMBDRSjiFs6gdsaLKvYYQby6opQNUhmvKbb4uEgoLep49weeJx1j2KbiZ9NH2yr5VDECdmRApMbJRLN",
  "key36": "5Cu9C2amN9EzuKeu8VSekKmQWuZvYf4CzRMMkuiviWt1fHCAvUw4aDihaygJu283qvWpAY4y1YNDWE1DuYDAb2ro",
  "key37": "L1hFGD8iWotrt5yrP9Wq4CkTzze2LtafHffgDsp75gETDpzoUNZLT5CaCZL7vQpyD7JUNyUtqqavwJuGrBSNaeG"
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
