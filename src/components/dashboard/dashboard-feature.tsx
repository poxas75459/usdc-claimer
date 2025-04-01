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
    "5VHR4fg3BCSFPFBLjj7cY1gTgczwVNDnu3FEShAF68ao1nQUbaxFHPPrB6u7a7DWyBUTxTeUJGHCLnbaKavi23hV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NpZh9UMyshujcX6XKe4R2NnuNRDjq3uQt4nunyMuBgWLkUHMBm9jAt7RYKggLWYbwprNaw1srgJFNWi7zwyknx3",
  "key1": "RKFbVzDP73ss4PfDR51Jo8vvDJPAs3VSxfFR7z4Jy5GFyrZ6Zi3wnadpDZ41aBSNT63njHSVPYZVpmrxgJoP9je",
  "key2": "3GVWQ4znPzDTX74pU5AYe7dhyRDCUTxmgwJq43hUFZ2g9eZ2pyt1exNZL5XxiAHwcUzyaTNKUPtQktKzWrqak78b",
  "key3": "54Q8EsWMMYD4LX6jXXLLfYZU4MpR6HEF24NTNDrT87sikk6zKpu3rvwXKSsQWSW1eeoAhr6cPrSz32cjCtGWNN67",
  "key4": "3PRoAMWgWhGYKoGDfb9jgbhwYmDtAqz7XKaagUVcf6iYrSVcp3mHo4gUbP4EyTmUTq7B916HLoGDfcMLRhEZoGuo",
  "key5": "29ud5Z1piJGXP4d9niWf7vZFzkR74HFGP5myECxcXqd315LuroYweUG3a5BCexJVbPnL1UAWpz8bWmjgb8dgQTm3",
  "key6": "3wTA5M2x97xsqQxf45MwU1HXuY5Qa9TvuoEJALkMcdAdmqVw3UpHgRoKcegPcFyzCwvxEV9BjyKo1tRX4zh1rJot",
  "key7": "4WWiE8QtJRUj8Zdd5f9smSZ8MoRyuf5xXDUB7a3Dz8T8VoUZKdueH2vGEtTiHxygnhKHbFgTTTaAjfBomKNWShe6",
  "key8": "9rnskxFxhnK3dijXvVGibvynN7NL8b6RzQBfznLzzzubTRG4QF82UaM6jWw9EZ5N1XoaXY73TnMo7sF2a4YpuFv",
  "key9": "3z3DZJa5hMyeWmE9FX6psjnnbULUJ1Ei7M3d17BUDumeEiYVdUKDnLVXTbWALXGLSmf2NJcLqHhTBxuhpD8JvqWU",
  "key10": "4nfzDd1By9rbbvvHHZbFhHe7d8pNb4djK6hXfGUVZTxuwgoJkPZyjMbgfJ4LXesjNmbVvmMsSihbF6k2175oKa63",
  "key11": "474YWWFAncb1TQJShVxgTS64ZYUkEJPL4RVD6K7HJnWsFCoo4WgwLAdfCfCNHPs8EDDM4ehghCRnL7Rdw3xBStxk",
  "key12": "55TXexM1u3cKVAFnCL3itZEiF8CRKp2tPvvueLpvGXK34sAqr82VXqHgiRQ2A61YT8rzedL9a6PZrpmQoSZNxyT",
  "key13": "2Wx8bkHU7X1JYXwrctzWzaQUfgn6WkGzCVmsU8Bg79MRNtvyBsnrnbwZC3AAFch5Kphjm4XUDiDu4Hf5ZwZZeiSZ",
  "key14": "2gyrUg7SH8vDzfL36KvCtvyEgfn1PV14Cvokb8CU36gaMQcYKJGUhoK5xYAV1uDiaL1bVuaHeNdZeFwzXNLdLFXb",
  "key15": "4Rf5jeCEpYG1XJs1L8SXzdc73xkBK4F64RBw9K4HSpY5PcbeJ7PTaEkomqx4M1Wwcd8h1hU7AaL684yCPQFBFkRi",
  "key16": "4vT2rBpEN4EKuhbR63q9FnXo13Bo7TEnHn5vzqz8q64q3pn3JdW1AMzc7id4W1ZYK62iWVfk6TDa1YWN8iaumKqx",
  "key17": "5PFN3S9Z6b6whcXnaLwwQLVyeS3a5DpCvdqJT6xvRdZ7aCuJj5KRKX2Mx9HFqKPri3UeETT7wPEE5XbtyysfeeiY",
  "key18": "26EFrD6SkTzZEdDbi2FJvXw3GboVdSem3TrVNP2aYbxk4xjf15qaPEiugunTwFtM86xpcesDMj5Cb2cJdq5BrUqH",
  "key19": "5J55bH1X237RXC56uYFNeqVv6ui5j5yTn6ESgHPT6eBDjanG9oBxCRNNRUt32oHWDv19Jy4qCPKwaZc6wVamKD8Y",
  "key20": "uj2CcNNCi2GEQix8Q2EAu3ukjsahwgxjbSeeSq8jU37wtzpFcmLnHNTStAAoL46iNs5bHAbpLvHSWArkGQkXSNy",
  "key21": "3JR8zgKG3hrjW1ieM1mikTFsyvZBctgbCYWRHqAte2u1DTXRmtoM8gmregJ1cEUVu67NQqaVwiizJsQJF2mh5CsY",
  "key22": "bPSrLjxrK74MeemRh9yjgoeutncKnCBsiTsr6v55ByVVgn5GoM5Nduwg3HHv7k4CTZuqY37BekKmvmoKivqeE1D",
  "key23": "4S6u3aZrQWsT5ryMmA7Ax4rBVxaFASfEG3f5zmAeZiFTLeYANzSmUodg3BPRdFa7ipS6mpy9F8tYcJBsc5oRjHt4",
  "key24": "4K4Joru7xhoBnrRgHuNhtudarcjW732112PhLVnyC7Xd7XV8fDRbCAvGL5RmN5PMYogjgAXjXWGuzih9UKWoM5WQ",
  "key25": "4EtMW6AqGVfK5GtUBS28GQNVzrsteKNywkxX9ZAoN9ehcfQnrs1aKkN2QeMyui8nva1hRWWpfejXgi4vGu2cq5Ra"
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
