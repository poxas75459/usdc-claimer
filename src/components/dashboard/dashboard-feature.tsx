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
    "3fUK4HFfdFMe9kJ4s2wagwksP15cfZedv1iRxG3VEKc4Se9wueyWiXJtgEPi4LDcCqrxjBBuSgxtVLgPwodF2scb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aNGAo5T6CQehKZkLrhF9mRmmY5DgpE42YYYasb7BaxXZUx4MMnRCAb239ZRpUafsxZegALeegQ7d6FeExWCUbN",
  "key1": "4Ai1bVHsrp2F5cobvVH2JMs9MeJiqi3CaApbACRjuNGSo4PysXh1QE1QGvknW9nFC2pSpPw6e39SwePFioJnJAqX",
  "key2": "3fX5WLuyABZjJzdWZxZ6anVrmVqyK9LotRausZmWJHuWQwTGsvHRMLfu6qjKNCm7H4Ln3vtQfcguJMoRKz6EAJK8",
  "key3": "4wvJzhY2SkkPg3znFN7Tn1b5xuPNc6uDZK5CZwqNNDTboa8UaVAMwu4KctGmLufrrWJqB9jQ3gWHADiqTVPUiYCT",
  "key4": "4qjEkrFhSkPNf1f8shH5MNMpu6epAD4PLYd1joUtztSy5akRq79XdYDwfjxs4fzQUABUioUmYWVAm1A6X83b1J6p",
  "key5": "5t5rLK23uuJsTBNxzzReX8mJDZeDWjjT2nwU1tkynrEASAHNhfjFZQZK3Gh5EaRp5mTKa3URH39BqncbfGRqbrng",
  "key6": "61jJ9Jd69a68pPSf9JNA3PDPfpbDsC9QNN922dFwoK85QkWFVsUiC4e5uSE6Si7GYS8Sj2D6GEMEZB2ZdBECjZmj",
  "key7": "2QbRQVupJmS9rX2AbuSVWp2wC6wbj9H5FTbJ1YNjNmYepGwn8svBWtNLbkHtxupSDtYSmC4QBFeVMbwVvdt4MSWN",
  "key8": "3dEuWEDRhzNYUdpzL4AGAXHBVEPBTvRro4e7QeAYddGGCh2WQhwW26FbVduLoRM9yYQLNbo5soW1KzcViK51NHaw",
  "key9": "66HVxn1bZgdXX5MppjabfJh4YMoDvpqZjfEFP2h7evFyJMxYDx1G7m2adHXiFxhXRQJidqXTjorpoPhAQx7XBeHV",
  "key10": "4zWwnZjh4oTa23V8HAPD1pSakVrxhXNqYLyPbuPK3QqMaRhGWnuhxNiRmuqcmKftX86Bo9pQbPcgixASdHx38YPt",
  "key11": "5xto9gzp5jRDxeBHyQ9nfQh5NPxeL1HHGRd9CUe77a3NT48DD1k2KkMeEbF5pSR5iVMWj4tvVhGWDSa7AwhtSPjH",
  "key12": "2Hn1T8t4g47tzK5PFujnLbQAjSSVGS6CLMjwV9FKuQ39DPSHY64gFZxfCJtDTB6kbHkxg9h47Wzn4UKagKAGvjC",
  "key13": "47WiZC9wYdKWpDwuWVTmJ3KeNQCyUJVsLFsebcpZ2qy6DVHpYpN8ebr4umFrXciPy4Foq7gPa9w6rdYDhG9ojEGi",
  "key14": "5hzdqPZ99taDKwwEP2UnjetBG6ENJEQHFBYJNR6DEM9USwm6WNosDA7QmHVKYp4tzedckJPEfQpR8kfScTQmKmWv",
  "key15": "3zcsgVpGVXYobHEUYfowegQBWAib4BfJ5DBBDt4xWvLaUwemXMg8scXkbEaGazpkQTxvEeX7Hv7vJG9u4REpNrUo",
  "key16": "4hyEKwFoFNtoFSxyCa1vDhwYBGpLbwC85qZqJBumzRFB3rMpHCLj8Rf4H4B7iRG1hm2X7NsXvwya4csVwG7MkND",
  "key17": "4LJXTGpU47FHPs1jtXp2YvReRSkSdRcf77GXFhBr3tiEjD32Er7iSDAsrPhRHzQgq3d1fZN65kpa7X8iMimMpgZs",
  "key18": "Y7WJQS7dGzRuVh97cCdzubuijsgyyD45LLbBQkL3aMyiSaDs3LS68NCyM71yyGkrThgR5rxwLppHyexFecrtbiQ",
  "key19": "ELyaVKTLvKp5R3PgqmLwAE1MsLKAtW6Z7c9FRK38EL1exRk7114o7MrWRPm3zeZJ74iWKVTLXNGeBSt32BgwJRC",
  "key20": "5qbX5pFfCFLNMo5nzP2xGBYMxy8UqexPcpmK32HnRKVYTu1PP63fGvwyRzAWL7FugxswmaFGvgusmNTJAm3g9rJy",
  "key21": "4bZg4XhKgutBTHXjpYq4moPLBDQ5PJvuCszVAfceBYwR1xKNE6Wbuu53BDnTVyixJ2hSEtRVtu7cbcnoS6xGbkH4",
  "key22": "4dVBsuYD1RGe1KokkC17XHTwjaH8JaoAqCNZAM1KVvZXA467vVAXHdALPrYo7XwZc2KZnEfAxEsSgg4J223BSjY",
  "key23": "4VSB1Fjt3i3ST41cgE8YnTzomkBeDmVYfjM9NNhMtFnJkAJwsXa9u6EridjnwT2tn5WJYZaDb1jy1b5iJYD31gVm",
  "key24": "3tgT3mwwNW4i6rczJMwjg9e7GeKaJoUh3emJkR6nbHqgLw3dFPrr3HCzTxNUJWLAFZgyouRYezsFk6oaeBN3fpTW",
  "key25": "5fdk2pDRf232xtBwsgRLQnKngyx15As7yaniBQa3WVTiRASXxgavUbowkeoXyHyfagAX9nTgovv2dqzcDnWzWVcj",
  "key26": "3h3XgEA8pkEwLU5Ni8fSAYBshaaisjCdkzUQx44RkyiBSo3yjfUVPncAioURQA3eDfY91B91xjrJkb8mdV5fyHBQ",
  "key27": "54fi2Yk24hzvwZ8kUNDQaJifBzWYaaonWSptLGxrDwB4b9ZyAaQfNCtSz8Sue8cpNDtKh6nJWAwfeuSsGAx311Ls"
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
