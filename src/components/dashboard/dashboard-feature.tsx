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
    "4PMbmKiZkhgcd2iFkVHpgDv8Z8vi6WeYTjw2gXsmFNspMYsg3UAkDGU6VRk2ZF1m7guHXdLAbg4ZMR3mnUKMa83U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ebjgeDMRW7XCkVK7FpbLqQARYLQN1K4VfPm9uPga7rQJydcuH7WCf3fmh8NAeMjRsBwfSsABCkEmPUBaxA29cS8",
  "key1": "VBXwFz7oPnbigrcu3HbqJvxKhC5YB9CWJe9PYDvDr61EWy4MqdJ3ffpnzofAZv1p2eZZxEu3bLPR7RpEywH5un7",
  "key2": "V8Xt1RcyNyZTgBMabw8YXQwCeR5Wa2Q1j5LzkFenp8drLN9q7ihTaob9EZMDZ1rYEEW7EYWwbcjQdbew9pEHneM",
  "key3": "3EZKapYEJzwLYeuSpHnxDEu8kJQd9Dtwy7uWFHeQX3qBjtYFMDwmLGBzVLrBfgz9Mm68SzVWDmDmVLaRK1k5ZTp6",
  "key4": "P6bB4WQk69RAUYSq9MVvua3SjxxeWoLa9ZmX8A2N7SvqRKREkfsNAse6BagjrT9HF6Pw2gUEtRXumX4qvVrVeeK",
  "key5": "5drYySWU7c8MWtBCNb15987y66wx9YfUXdF9cLCRbEQTp9EwFVmiXXfk5aWkGgxioRFkZNBpAiGxnhFXNipshgy9",
  "key6": "4LzP4wWSnRggtTB4E664fNRDUpDecfqjLxMB7kDnxJr1QfArTLUoHYenNxERGLbtJt9DsxSaMZ7m6f5SmaUqjXqH",
  "key7": "5F1SQELUoDF7C1HhUDuDKyJyE8sKvdPFmcXmeS5XpMh34wgpjxTjDPj6v2FZp7HrrWVrCWWomCASbkTWU5doxyxF",
  "key8": "2X8uUTuhxzV5u244ThfZxEhBG2J8gihTaSZPy7bjiRuLqyNHZsZRDYP6ryYkkpg3SQpncdEGucKACxtKC9CLPbbw",
  "key9": "4xEu44SffFiCbJFAfWnW7Sb9yLuwZYhnpudSsrTLw1s41c4EiGJnnSfN7Xj3MPUXU9gSPUUpqaHjS5C46TsBF2fS",
  "key10": "2ezAEDasxjzxdXw71v9kSHKEuXWGMHGqBgNMuCvU6ptsAHfqU4ZxjbFugxNEsfFF4LtEvtxxTBo1tJAidRJXx63z",
  "key11": "5NMhWeUakpcKg4TsaeVSRGDhB77SSzFHNiqzESj5gneu26yDEr3ZnGxuZTaekwvNhKNAgvXMDhVPw8mcqA7dSVYx",
  "key12": "5E7AxbBfJCPxM6VMbnpaz3qKomwBWPmzYcQfNKQXqytEc6tBbWFcSVyMhFSjc5Gn5cZUDVVSmJcXdjbdbmyyBPSe",
  "key13": "4i24YV9SNiUWZg6QGydeCXCEe4eP8xYpWPRdhTicrLaUYV8AbbZuu9SBuzRnddo8wCazfumnSKkoLpCw8XizqvD2",
  "key14": "3EgDkqBs5dYFAqhUFpJmdu2aE5a6PhW3Jt8jzqa5GNVTpakkqZJT1FxupD96v1kkF496FxWxS3bcvEsD6BJJ8PyC",
  "key15": "4Bau9xYZdEw4Af7LLMt37DmVG8Bkf4RkZgfiNKAhNufzrjVxYwV8WuEcCf8iWncnQobtdpnh22EJ5c2gqKVLDvXb",
  "key16": "PvfrFjZZ8B5aN3patsxYw84uA5vrsRepCMcUt6xCmQX69U4jcmsJfua67YWgd5dUzEDfd9kLiX9S9PhEMeok5Sd",
  "key17": "5yenqCMgXkQng7iyUXkV6bvdLANMbAkBzZLwxMrBLuMYhq7Ryt2L7NizPyg12DL2Y3rcdtT97Gf5kXPYGB7FaUZk",
  "key18": "c5vV2QbSCwKmLZ36kPfA46Q8Utz4aWzdSTxQ6ydR7nPC7Kcq1cqK7i6uDNosedn5zN27R1NS8Y6TLNdWmEwWAEP",
  "key19": "2zECF2An725KuoYcjoF2PsH9Q2fKk3nquvV5eM6mHiqmEcydbAj2YtnbKbi9NjyB6A5v8sBLpNjXsdpiLLyJNRKj",
  "key20": "22gAebDyYrhzH6eedrNAeGRB4ZChdTSCjnqQ5p84RmArFSeJpyUooHuEhsPMftGxAFxhrQYRdATVnFvBGw928EaN",
  "key21": "3tPv5EJMtHAjJ95bGpTHQoiuEt8jLj44jjBsN75nRTCerTmmeE2yqBZHfN5PVzykea9LbShs9fzagSWUaPqRG3ML",
  "key22": "3cM9aQ2eq46oJgsLp18ZjMNbi8RC6KNC3WpYoj8Tvju6gnMgnPvYzZywQVUqX8J2vVebc57oMRB7Ue1eV4y15EnA",
  "key23": "MxtFH8G92iqEuLhWMAnRs6xEAkkhAwLADSMLzdUJsaYq3WpN5veHqBfAtdXavbcgxRQr695pceZWPUy4U1WZdqE",
  "key24": "3YnXZU7vd7D6neERwBiJJ9R52yGwjgPFtSSM8phkmd964D6NLzw9mQmEBC28ZZWsaxzLFrgCHA3ockAPNRekP2R9",
  "key25": "2vVjHvnGCQg9Dj5mh77mJimzjBASzBTX6hYNHdHiciQ6x49Nbi9ix5iGbAKGacjDQMGAj6amS2FUijE6t5SSNcXW",
  "key26": "pLVqYw1NvGRGPycZxfwg8hmB5GYhXmdibwbzEndDHN3ZBz8dCjXvfHVsRhvR7SovHjuG9XHmrAoTuNFyQi4NNMe",
  "key27": "p7Efq6vnGWF2DLUBEXebhQ4yuPRCFdenw6w8W8r7qxBDK8tVUyvPimsutRA38GN9fzdhvZG5Y57PcgEUy7RearA",
  "key28": "fK3CVBZoN5Rc3nwR7VvHkke8fYzsAr9cscw9qPf8C2tzYhVdZZms4cwMedS16TASDyKDMVNPpZCFX4ZceVcXHEP",
  "key29": "3V5QBLnQFxHw62ceRLetXgYcQTWP73thNLaioMpmmXt1ArhVMRymREd2YfRTe7mchfJMmHTgq47RMBfGRxTg82b2",
  "key30": "5R7PpwintSiwm4jZZyERhQvPcDgdM5qX3Ebr11E4iKseGzfYRLDxumGHEKET7tj3iipQsaSPYep5To9RPDZK9yNF",
  "key31": "57emj8v6cmqaMS66f41QKABUNEK5sjpVVQgusut2itFtgsPcpwVMSXHVexxTfzNR8XLSBz8SEW586idyEH974fJo"
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
