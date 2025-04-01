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
    "quSdPkqKbLLNZieojnYQKFFWupwP2bFB94R1tMrX6qGjAu5jKoifyRxbMFjtKzMepkEXah5c6jTsH32oh4419S5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cUufa7Uz3YzhCCtURuKXNxC73Ekjf3AP89zZrGJXWry5yjw43x542JgxfDHk3zcHmhAi8cS1obi4hrMNudvLpxb",
  "key1": "3e3R6Vk8xZxbrWGBpu5rFw83zVWMn4AKt6NqSLTysPP9peZUDtyzB9fgX7Bw6VPtPjiysuhVD3m7fpydSq7QA4gZ",
  "key2": "43AKLvxhnFW8tPGZNgkE38o2fTfu3GXsoxi7qyJFMFWyRvLoT7BQaprdxg8KTuSnUvonZzNf2sJXz9CNEWgjCsha",
  "key3": "48YcebLTRRNa7yy4U7PhYTP982aAVrvTxSr7SuYZvEsJW8YG53eBLPDKcfVTvbKhXwA57GumjCHwWWzCqmi5SWdT",
  "key4": "35gHeRdbzD9ur8MpKiGiQZtj6djnHnM2N9UBDSBNQYttA9STGhjzUN5eRjUcRh3bwX1uEuFcmjCuErntgBdakCjD",
  "key5": "5Cb84kEnMrF1YiDBmv1vivxrzKBde1T5u2phjtj5WAbio3FoVBr9kWPcv6EpGpSYwbq3mT6h4cGihXsj6hUS5m6T",
  "key6": "5cieBWyvCXphZCupLYcmLeN6JFgtWvYNgXt4JYnX1yS7tkd6hD7zpHQdrVFF3DD9PSMAgF9fLnLiqVzunf9T9Hrd",
  "key7": "31NsbRGTrhgxw2HTmXgUt68MhQicAcQDzXHsVxYh23qcGf4NysqmY8oVDPeiWyUkrymj17puA4VZj8T3wUPm5R9Q",
  "key8": "dLag8jUYJn2rqH3sA2wNtdDELxu9BXitgNocShuu38XeGuosUeMFVdsuocsAMXmgaSLBR2nz3MegjtywRw6R7G1",
  "key9": "Be4ciuy4GyVZvs72DYK3YRjTzePPpWVUXqJExjXZyDAtdRob4H22vJSrSFiR2XHBfY8LvkeogqYifevKQm4s3Rk",
  "key10": "4mKYcKxco88jgbwZGmZk77Yiyvc7oj3dXYd38gdaQXSvzQj6KQmGq2pDHQRPaPM3cg9kRCCN2TNPm6FaVJ4FsDxS",
  "key11": "MCAFwuJPnjBjdvz1jhC5GaiVULx1JefqchUSQiF5E3Z2NwCC1ZcdXpVHRZqoMRRws8vuwXhWFKLjrmWGH4Ce4NG",
  "key12": "23SdCw7mQ9CrZz27ciX9zFCcoAqbNtSP3S7KAYdP5AVktMnmUtg5kAc7tSHqhAfeVbm21xiNM49vNUFR9obzRGx6",
  "key13": "53uaMTvA9gEXu9ZWkA4TYSQLCF7oNokvpvHUVhf2fX67hoCC71XxFNNuY2crq96GEPkdigxNiPhLTH6SRAQCCzuw",
  "key14": "PMXPBMCdACXcaPodBXTzLvW6S6vQTXDDrqvryuh2EiG3ChPYDkBfqqcZQ8oVQW4uUB4KXKbFm7WPN3gdiEYYE4F",
  "key15": "AZ1wzh7UNdbxTc9QFScN4TKikTFU5GxSHj4zSPcGtJ4YxDD5wecPh4PpFN8DKiDzqKeyRdJoYonkzHVXoQVzhA5",
  "key16": "49JkM5T7ZkkjiCLBgWAGRYe6rYGEpuuaPZfRKYKfnEbaFapdVkTxRA9qKMp5UvmnjyX7BtdwY3BNoXiNcWyfZNyN",
  "key17": "5MVP1fAAumb1zH1AVieKAjzXvuw6wfjrJrfpm6myHUeZnJ47LJd43TvcoUJY8XVUwc6M5NsbnuN1Ex4aTbUbPqYr",
  "key18": "295TQs8swqRLghjR3KVhgqj4eBMYdnzX7vPmmBxENzEZSQQocvVYXxFgpCaCNG83jz1z5gyMWhuq8MxYRGMxDh7U",
  "key19": "4YR8Ycthp9fxWhhb6JPJVpvBa7f1PoxZKZXRYKcV9jMSf1ZPA6hxMC5KSyGdBCS77onzeGKKHXeP76ZoYRPSroKs",
  "key20": "43j9Wvn8NJCK77uU33LsCfExh4a2DUox5B27upRDBUAreMyxoUsio7iMfCHENjuTJschSRoGrP3C1tumDiNU5DUR",
  "key21": "4Khhk1KFsFxzwPPFzHABrGzPeXf9cnTAb8Dm9RFvTwZN5rEgqfxdKHz6c7tWmtr8phJ2PSsaGUVUpR8rzkmWavoA",
  "key22": "51akHdzxgDY6DuEreWpAtsVzfVQbte986YiTy8xDgdQhxFTqtWczkRgqJKC9hscXPhyNhbDxQap5Wd9vpLuuNCbP",
  "key23": "37JaS553HYsPcBhXGLB4rLTTNsRDEr5JTY6gww8sxkDkFLvz2aYak5e2nFvigepKJePR4RNboFicUQuJt4ovZNyD",
  "key24": "5azccYKnYf6UYayLUycgW7M6pqU2B5fcwhYu9ug1vSkto2f5upFjhoEob6VthzX3noyYyJWaK6ozTXR8Y1SZ4kBp",
  "key25": "2axGC6BsmKpRrGi3ca3zkCToSXpP5ksZUFuAgbwAT46ZM9M8PewRzgrDcR9dGtcFpPjBxcwTrSUAf3gVih1WArdC",
  "key26": "585f7g49ffE1iKsjxDiz4acAznbVFVNmLwFfikzkDLQx6XYNtVEAeT7aB1RmVs3wXBdWEA5vPwWrcUNyw5fkzGUD",
  "key27": "39qCS4XNiJTrYKnYMrR5EnxhumpAjP3tEWmyjzpQzrPrBS1iyndwebChb1dqkinzCwvbL3GL22edwNF9SEyeQ9do",
  "key28": "2c7hDfFUujPS6b2s6XxqwtYLaN36dtLDybEvr4YvgELizr1qdj9dVRKiZVQjiYSAk2FDnTx8maKKiuC92T62FfRm"
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
