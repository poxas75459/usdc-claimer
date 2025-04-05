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
    "2jxv9F7A3ywR44aYtVZRtFDUQo8kd4wYNVmmtFwQCEKobE35MrjtdAcVSsfvKZ4UNZdBXtnWNNmt7pPNYFYb1UWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TqXy9YNtb6r6pukfNaq8sKaV4nJnFBY8n2Sdm8kprimHuPcBi4Qt5dYiv4q2Wc8msPB3gGyUDnTPDYvhX2927iD",
  "key1": "2GSwTf1whLnkPuDLy3Uyk23trtd2e3wkSp9sGaJpfWuzotca13gvsHL1kCAXVyWzUKTZ2bz99Y5hx6vuoWtViLay",
  "key2": "3wjwWfPqrcbZra1eeUF4CATzCR8GQoKr7yUTRzcLxMgL1ZSujCb7mcLqE9cq7Ws1tMMDSyrC7DHQetGDwd4gPWSD",
  "key3": "2UdTj7b318PL3nbobco6sLkSRar8ervE2EMiP8NkeDmTFXxJjNt7HjeA2AC9N8sLQ7VkuF7jhWxjTrc7fVXfSmpA",
  "key4": "4T7Jj6vBiKbKUMmkJJhWohrstL15k7ptcw3LNEnbMnmpLFoHXjKd8tnen4SsWezJ27XngARysKdVYr4mo9Rn6viN",
  "key5": "daqebEYidwnuaBdW3zVk8nfG9W11oZeQ6ugMQm677DDifoNqHLqoxkLKMpHhb6ijcg4MDgWpAvEwBQB8KKcrNMf",
  "key6": "4nT7QW4T1uoHgSyHsL8Fmf8HgfSATUuPPv7QPs6gy4STRokdj7FHRdmE2MT61GxEYWuy1umAjkN3dgGfnyZYtwYQ",
  "key7": "8yL2QH6iikpWidimZbKArPV3iV5MsvbiSGUQgnhgzeX3t9fUF6LgXcWLHhFQ9xvFbHnwZ9CTsXDgbbp2DKDchHP",
  "key8": "1Ui5b3Kvq174CiSVD1pxdGyc36spwct1MNo4S6nap2CHtu6rmBVMeUnzB1y3vScgNSxcRRy3u2giWggZm4Jxsg",
  "key9": "4PC3dvHTz1ZbzCNDgZrCjbGeYqajsSXqhUMuMqiCAepwCdGWtdFjnzTjT2KzFctcRWhMHN9s1LS8b42RQZ5iAT6b",
  "key10": "3tC12rHnhuhLCDCErAcsRwED6UV2ibFpNkZXF2CQoGa5cZENtrm5R2gN85ACCMP36KDDgA3GbYwqirKNrGGeq7kJ",
  "key11": "3fiyQRUR6ARx4ndAtMgHytSBL63ZFnd16hy6PE7WPfTtDwTnuPaaxwe36535o3Dfoz9Ui9gZbvKweHsBUtrgddGF",
  "key12": "2HkzRc2jRfzUSDEnhvZv7GYWndf39pxLWArTgDC3KpQbsxQsiLbMHqNU3TpxQESQA7awy9PqFRtWnx43SuL3niWf",
  "key13": "4ZNtHNwGbb6PMAbrvAvAvKLpS7L1Mk44ibfwFmRizL1o53677sUBwVEHjPcyPePfmyCUJNBwXfDiLJZvj37w1rT6",
  "key14": "5eSLy4wcrEYfTZxwMCqnxQ1Ezc3pVq4cyd8neYyunsPNE9WikKw2KttgVQeManpgGG9dBLz991wNYzBRDU4NH7BF",
  "key15": "4B2Xbqh6mZQnQFfsZLuL8V6QRQByasnDGsKt5m3y47vLLczpgbmt6QRQ4rRo3EUPfN5yyKhnfSeEKQQzt9XZdPVt",
  "key16": "4zkb5tU5UzjXaZ27ENrtQmHwd6tTCZZqj8wW1icyScgEFXHLdrBDCVrxgvPhGJ6977iXsFDPTqkgYMF2zCJmDWBi",
  "key17": "3K8KVdFEzpfEMTdFpRgHJCjaUmd5cq5gP6H6WKtnZZYzkwkkFKRpEDfhnD3GUcYKGujrDoYSENvQbmsFDbMNNyNL",
  "key18": "4r3y8mFVyBU1uzoZk6kFCn1KpLDQT3UU7YYqzpDpALoN7urbk1fDyCeJVgQLMrUVAAqigcjt8vqHsbVu4dSkzJs9",
  "key19": "54HZacQrZBuxiVmrdQgx1TVRgWsdeLjDxnaj1k7KaDyM3Zv4mpmXGNsX1aTEMr2e2NCVW8ZUkHrL3FRCWTxn2eUz",
  "key20": "nXwc9hp6vTSsRARZ9YsL2X3LizbF3TQqFj468AvvTDABfBqTdiKmMNXjqWGhG33opbhGJNXxtqjGkfRgdkospfA",
  "key21": "eT7xyASCmtRJzRWuNQoz98jxaRdSXjsZbr4Gc5rVFTCFRbqXb5GgP66yuPeqAqmstyguL9ahHtUo11dHuijePT4",
  "key22": "nD3pkH6DGVdvwbnFH1HdGcQn8azTVMw3cHvtcdL8DY6pnGGLzdiDpd2A7hyCZsBd3yoqieZSQprHpxxygKz9jtd",
  "key23": "382rxwBMpW3qK6Vd3aFTWovKjGp5jKqrkf8oHdox26Hg6Drn1yZJR5iXxUdmLfrMFKnQ5cxETb6GPWACT1tLtPU5",
  "key24": "2b7JEq6TvUctbc3Wv52uV4MU9yuYx2t2YMB8KjptLoU2fHiBo3B2RMuUedmNavzpFqffe5PfhxfQDuLQgfFdSpf9",
  "key25": "2TPsPrahrmswdDyZx25fQ7DHhn59Jv1N16ayYLU7Spz3J9bwSwpsbpZwHsv32CEcS3uPgSJZ7m5qyB6M7kFYECUr",
  "key26": "37dsM3JfaPjJ7tWanoBzeVFzvoXUL749nDt1rz6GaNGmQhaqkKoHp5tfE6BhYT199N3uNSXpBJGBapsCipb7erSf",
  "key27": "42VPuaKe61bEnimZkeJ3BYWUM1PwXHscsuspeqGnQYDAdY9YCs77GKt5QXEkdCJYy4hkFAnu4J5auWqX8eYLtxMq",
  "key28": "4gRxbKTgCADieZFWkdLM2eCnGpzjFgANF1T8r2a6jLUzDqkzscff2Cz2VScVYd8wFUD3djH16PeqtoswHAdMjkgz",
  "key29": "4U4v296e6emo9zvPP3SWU1mdDLFdeyHrHN3EQJswV5zZkYab3GiWQVeGg4uLAfSzNrVfR4Ri6vk9dwkfyMxtQ72q"
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
