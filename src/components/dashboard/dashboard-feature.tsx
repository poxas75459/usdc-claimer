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
    "2AdVy24AbaDicELwHj41TsrHPsViXE3BKsU2bdK3XV5U6GDh1q2KtDXbe3WEyATLmdJxC1MZEujdMQupgHQHNB92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dFWPn58CT1BcyN6TUJ8GbneeypYvCDvG2pytmYfEn7RX5hiEa7wEJAnCaWzK7R5YY5fxM6qaAAjYUUB5kEkiXQg",
  "key1": "3oLNfsVC7UBks8omJUeeDDcujARF54KqgmaFtVzKcRiqJ2xaethKTXTtrQ7EC5o7oL19xoK4d6ku83XgDgSrBv4o",
  "key2": "3uVJxq49mQBE986WUByn2EHXxFxJ1oKBVePtNKAYQwLfpyb61qZ4wASd1X4Rmnk8MNDWW8w9d2pw35aBoQNYM82P",
  "key3": "jf4WNvzjc25yfCjHNgESUunLTuw5oxeXpyu2nYyPmhwpfRJs6rGUq3iguGuFbL7pLQGgeoT1sYyCDuve1xfPxkc",
  "key4": "4pN8ndH5sMqcpkY2DsWa5vm2pcEHDzALc9N6kaPPKaNB43vr141mibjZK2tZqG72NuKbWNB2DHqbBg4krmHGALCa",
  "key5": "5fnV1XAD7gjxXvoX1GqvswxS2QdTUq6k6VEC6PdiVpsTfpoXiQb8vF4M9Ntx4rNgxgEzx5BxXoi8ZwEJDCFGKtui",
  "key6": "4pijVBuNAPJvxsYytUSqhtC2qJxCbrsAKN4KbepQ9j7uH2u27SiCWgSFidbMVg9nJkDwKykMqCJzfuhAjogeNf2U",
  "key7": "46gtrBvf3wFxu5NwVWvhU7gmfSzqgTpisxgHofNFkqKdLtveziZ1DZXnPnyMqdHMypcm8vF4KrxaV1M5SciNPmCR",
  "key8": "53YU9F673ytnHYkXGdPnoeV4CZV5N3xsmwYhcqb11v7XwRggZMSNgfPh4yTp1CxU373vanpqQMXCDTReFfobN8Sb",
  "key9": "uDWjUxb9HQqx44VSDbeLirj5ybWxVWJGFZVjwt1CLsJ7zrvWdt8JakMUeTyUVsoPTtp2zCanApaP6CYhoFpK6tM",
  "key10": "3Y7X28ta6YZirDnirarZcA1C9UZTXruiiTtY91HFf5rNjBDuDgWAetMNNL3DNegWqQuMX28XEH3FPwS3QNK2Ryin",
  "key11": "5Sm4xnM3THLbNUcNqonvqNo4iozUVYYcGBMCv4LoegZZjUBwTFhczA3oPPPcEX6xM5EauRn8MtcVKEEerpdPuEF6",
  "key12": "YiACw26MNjXVBDk6MkqDNneooUyPyKWbxakQrc8utmmxnU3y1xbVrjZ79bHorfbWwCNbN7f3wUPYyHd4EskqFC2",
  "key13": "5PCRGhXfuM7KpGzYaESFQKeEfDujyzrkjgBUXxRWh8PQWvXcHWdMUQtN2jzCGtmurPq8hg1Fhp38nqGfQti9AjGX",
  "key14": "67PyWC2pVuWSD7rQYY7XUGZJpZd57jypUEpjSpnWdVESpUDhuNtVos9jRtJLLGJd9YNcxoL3s7cptkMr6ZyXv87n",
  "key15": "3jsuw5Pam8Ht23W2DoZ8u1q2XacvtqhG3ZA5AM7HsvcLeN4p4oQGJvH1BiRtUheNd9WtTkenUGGibmDJxiJcFxcL",
  "key16": "4Yw5B3SyXZatPevdw8wtCSvvf1gDipzfkPF6Ts89R2iueyvmwmHUqx1kMUQAd7KgBev6T4vLYP4fmmtqQTaQHbSN",
  "key17": "5c3w4AGV4J9JXBkpcwByyZ8RiSiLSf3d7osSpbEpcr5AitDaQr2M2U3LcLo1JifrH4si23f8bEDdKntVjwN9RGTU",
  "key18": "4uFC6YymQLapgGP36rP1fesSNse9rdvunCCFs1EJEoNaMX6f7wHeN1Q28WtBFnRDaaQPo8rDVt6yctucmx8p38mA",
  "key19": "4ua1DRppj2Kmdgvdt19peX8q3ZYwxE9zpVU6VkuvzckdocbSJpNuYBM4bwP6zQqieLpQDEVFJHSL5p3squNMQ39w",
  "key20": "3hteUnF9QLtjoqCuRSgQETEyFPxaWML6XnM1iMaC7quuRNXgkpw4PGhdfKDL6xS1igXawewV5aRh1AA5B3DvtYwZ",
  "key21": "5VehGn35rkBQBDkxs2XBhJZZfftEggngC4mhEM1xgsa2qoWVSNsFpyM9hHNGGFqKAhNtZJQQRGxyMvyoJjGtptzt",
  "key22": "3TwCKKtaBFnBCsBZ3S6ts6uAji2wPkp7vBipAeXrnML985VsMo1M9ckTu5KAtNdKScs64HGVpULtKWCPKTTGDrnY",
  "key23": "5xdzMgegsLy3vKqSLdNknNB519Meg2dAKR7P99eJWG4tzxmUUPyZZMow2ZUNMAUEbLPDAjKtWg45Suxv9M1Fywqj",
  "key24": "2oQADdEqU4iwVGxygjfAUB4x6ssAN67giJuRrapKKChvpinx4CZB6p5dyXEEufjimekcXf5VGoq3TC3ZhkGbrNuV",
  "key25": "5sxrZLAXzDMjtPtycoEXsEm5MRMRFQWUzHhbXYR2acELeTe3ip5mP4FpprUc8rH2Bmym83rCVRb4jEVKbQ4ExPgT",
  "key26": "33FyqFoYD54bhSTScKUK3GY7BrrZCR5HtbqhRZrU4rvpuJRYbx8wjm1RAHK39ZvTSgAQ8jATecQpwJUcSk2HrtMt",
  "key27": "4gdQrg7Z7gzXUjtzmXVpHxfyiBdDNqiq2aMSa7mkmjhppH14kS4drcL4MoyzKXLMUXqFgaraXAUrxwYzWD88wks3"
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
