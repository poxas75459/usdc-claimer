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
    "5w7NdWCv19k9sNAyybCKhbU5V4a6xin4WJcZ7Hnoi1sHNuCxAc7rKq3kQKLdx4rKEZpDEa7PK8fRYZ73UT4cgrD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66MbHVBauJ6LMXh2sPZ2BuXVWG8mjm8N3MYfAHf7935HT1WDYbKyUR2VHoYPsMiMkHPKULMqMm92vj3yi5ntVxwn",
  "key1": "V9Unh9JVhCM5XpBULz36qagc2AfRXapUs7LNsa8g3LZFSMpcBjy4vJSa74cn5NRGrBRtUGFkfnCMq2RSjYpNSMk",
  "key2": "22u1rF4DEzBwnjxtU84vQbmtcBeKPMoAfRmEVJcXwP4y9ozab9pF7g4jqV1scxXuWyR584D3F9a9MrwH42w1179c",
  "key3": "3Wbtx9DGbBUnVk5RSP4aJFWP6ZQn5oMUCsR3xgC9JAS3njKqzDzaQg4uWgW6EkfA4r25uedLCL8Bu9EiFruZB3eB",
  "key4": "34owNFHj9rQY8Wy11DvKbZy38iaK7sPaVPtdKCbYHGs2ko9kh9uj4zyExmXsRf51xUf8U75oL18aYu6UDgkkUfCC",
  "key5": "5i1D66cbPsYZVKcAJZUGCJ7BPQ648sLHpveqgYxry4maPc6sPtkykoG9CE7xgZbc4E6unARkKQX8RMnB9zEhHW4M",
  "key6": "5dc2J2Cy987uBUvju5smCSdYSVguX2z1xL3X21AwzKK3GjV1tiSRwV6AXhEnwA7ZEMTTfVavcF91bZnekNyiY85w",
  "key7": "gxBj6eopVoEUVKz9Rf2pGbWMc12AqGMD3HRn15fv4ZmMGbWdz2ZYxEPxgQVVKAAwmZAE6V9Qujwqb9ThfibEKXL",
  "key8": "DMWYJYg5quxB7Bump8BGQd4JvZFqk2xviyVKJrfMSLAUa8WbqNWjbdAJRxMmPyJNwqkieEKexEAJ145Hrk7Gss6",
  "key9": "43SXhK47TEDrNXTiwUebzQeyxfqdwxtAtzwsonnti3PcvMipcyu2jnp4XGW4pRPnkQefkJ6zyFGC7oD85AfVG9Ci",
  "key10": "5rAXGq7w7y6xX733GQNQARk3Hr8KjiEzgZmqQvwc3tKeXb6WN7UoZpdJrxnbDAP4vVvJeYHvoNFm33QrP4XcjwMu",
  "key11": "Sh8ZuUm8kN6VinW4JMf4SWRTbxZm2XBL3uGnXdh8fjB2igkAAJykJ9UGK8EiUx9Dnv7ojg2ywehoiq59r3aWGoR",
  "key12": "4tfFSocbaG9mNRNCHtsSTKK6Rrxr1WHbwNd7oCaJb7fMWTTGfLZiVM7njD9HpsPG8QRBksUk2qJU4pxsfEzdWUM4",
  "key13": "3ZvUkCoYqE5YAV1WBRY8tCyM4KW4BsCvhAJ5EaqmR3qdB5fXqpmToE4YQWmnUZCTRSguS67hPHb4D782XwqrpNcq",
  "key14": "2E2wB87AgRxz27YTeYEHLW7M8bimA2xqm6TDqtmBuCGGn7ekd69wYahJQWtMJWLWq2avJF1twkBHdUyw9tfueN1q",
  "key15": "35QhTZDa2PVMbbYXjLJypYt1fabsXfGtaL8UH9LeLXByrRvZLWktJRZntZFNV6EBgPXycm1HFSkrQN4DyozPsPEb",
  "key16": "2TiBMDKs72qT1V1YsNiNH7UJCMQ1BvFkkZcmnb3Tk5jFEccHZFouXXSXYJS8jKQxx8qWDu8CmFnsrdBZQmPko4cR",
  "key17": "22NbUmYyUjWHiLGH4vk4tAidX8nftGqtZ5sM4rNuPJgwh9uKKXpTJ6XxyckRhe9yD9eJ74bqQyeoewWLK29t3ied",
  "key18": "46C64jjrbRv7W7QGLfEsvD84mDWuuv8wAcYswH5VD4o6XN6LCJ7ahFTBVLzCrbN1W4rmvnBT2aftjXESfGwtULKN",
  "key19": "4QD2pkiRqizxicC9xdvyPN2KsRppRk9YVttmf7CkKNDZVNarxGiAb8gahdG6yeMWH5DSffeLgrbE3dkc5NMD29or",
  "key20": "ebdKJho8yF566oSRc2ixurUvzAkxuPY48XHhRd4edo9YYSYRnzh4cwceUR8TCfAPa6fCSJa6yS2DQAzAEzLk7mw",
  "key21": "2sBnPCcWb5KtuU8Yn9pT8izT3skT8NFdPk4q2rJbaG4VBFPTFqPJCHwhghJEBLrQn917issyvgreuzqaCuqgz7bH",
  "key22": "yH8ramaYxFGZpCmN7nonrf6wiEQ9wThGG3xRFVHifVT87JLC6vZ3xWZZ12usiYxJzdUYiEMv4Nj7Xdwefz8DBz4",
  "key23": "5BsVz3s1jhuWoH4hjHLqUYTrYqga5DMR2koFTA1DR6DuFFonPkptu6uhU2YS4jKvPB1GxRuEfkdaY2kB81cTswgG",
  "key24": "4JyF4t7GfCvWU1erXsv4cuk6SrpPnFrmMUxQ3awSpuDgBCD1QBJ3jpLB4ZtvMGtGYrfA7efMwE3LATnGj2MiUdfm",
  "key25": "2QDHLpEc3nj1h5rj5PJeEfffRAfRaBZebWaYFfNr5Knxu2FtAkzZoCz59njtGtNpfBS7ayCDwk3Z7WAhcQBV2pat",
  "key26": "2VsB5HcRebw4dj9pEnrBWPh2SPkdRT75LBRK48P9C3VzEMy2AZZCDGGmPVUEacX4gPNWaqz73L2Gca2PdhdTW8c9",
  "key27": "4VStHtxN8ehHdFA6fpTiwHpW8mmWMSgUHR3PHKdPCx3M2FJNbWf7TzeajdBFHHednS9mzz3ccpEUmanSi5Ckhyv4",
  "key28": "2ynhRpuWJiaLUPTsX14fLSyrsa84ARwD95o8Lr1ek3pbqFCQwbY654foGaHHwRCW6BrHXfFqFP3MQ4pqnVegvZBF",
  "key29": "2ojQf4t9dvHKLYY27bnaVkTTXBH12fyzytC9StCDfK4qYrFF9PMD2S2FRvtNDFg1ZkE65JqToUMVzNavGAaCHPo1",
  "key30": "2KbpbpVe7a1LcqThacCYPWJjw7HFwe2pZ3Kpx98SmtVaWTCHotYnYQ2jp7mkpA6op9JarKdjJvTXxaJyKFizVxJ1",
  "key31": "5f9E1cfQTrdiTUwS4mwjK8ryzz7pVRfgYh8GK1qXChDdsfaC9HyZxWbhYXfku9rsVKYgPeeDECgCafmhFVA5RyzB"
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
