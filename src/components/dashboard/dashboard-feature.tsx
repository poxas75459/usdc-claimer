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
    "2MgkZr4s3QSWwxRjUhHX1b5Dwf4FhEJNpcqhPkpuReYaKEYNmiVSxLg4Qii17qvQoTAuTMkTKAsWEMPkEUNbY6p6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2espX58S8zmbCBMSAig76645rXiRDzfySAz1SHDECtw13XdRWoqZB6WnsBZr3dSp87fsWqWWb43aYK3gtxavnEkq",
  "key1": "2ZWsq3fLaLumXhzyii7v3AQf1VKgA3BHt1eKkH37cD3Ph51xsvyS5sKXGp5KJTdPGNSNZpNkxZRRUas8FFxLViQX",
  "key2": "4QfX8JCb5SJRbWsRQpF1QLdtK2bLWLqiaAmorWkyhvueGmQ4thcwWhQ656vqTNRzHfNmXhywxKwNcyFsGRL3wjQK",
  "key3": "41qRoUYH2S4WkfGXFu4wUUgbX258YYhhqRGqoT4mKZPFjLuNnoNrh3LoDHsWZwcSsaxuAnNDchjTwB2XUxyFcPsi",
  "key4": "p5eKKq5k4MgGrPQBGA2o8to369HXUF1uNFQpEusjnK2MthnwMmdEX9nvPAsBsgr7RQYZYUbAf3KYaSo3K1Di17z",
  "key5": "ikDfsHg5PsubhA87LHuKn5NanVvGJRtgvMAmxbHszJKcedUuL5GgBNi7WaKXhJbTe3ww9UaLcox8bHCTeUWxrJj",
  "key6": "2cMHqrxLhk3m7aGLdTUtJuLK81YYCZyKXCnCXq8YXx9bDcrof8EqwGvc57G9hSAJxnftwZkinH4GEzv8cPwGxLw9",
  "key7": "4oP7Ub9UWVija95hfLJjkift2j6sNJkRGSJwt33Zj78SbqySnpr5XmtLzWaxXrUtFijRQLGaUdez8Kzu2PxoQjFy",
  "key8": "4TLepjMFTVZHGcgD5tTnYK5WdkKYqgwJoDtn4ZtLQbif4y5sgSkGJUW29YcsdTamNrXt8SsPHE6YdcFvcajFGyUe",
  "key9": "5TyNg8PUR24yYLScKvvapbhphHhquxqYXgJ4i8Wo7L4oVbrzaVypFPsGc9khPM6JhFbvb7PAa96hAVDff7WHmog9",
  "key10": "3zjERNWYsPLwxB9sj86Ae13b4MHYLZgsnHf6hQDSF6t79U4fq7GnbDb7nAFok47SRZvD8NRyvar677RjXHwa3KkR",
  "key11": "3tiePfQmM1EMv3PzAmKWmAUD4P2x9xUVwfb9Mck96gghqq4KrtcTpFpN8pZLVL6piViBVPS67FNyDKUgcXvAdrik",
  "key12": "3MGzvSLtFoywyMWZ4RA7F6i8xfh1iWZJHEpNfiYtTHd45rdnTSjkA3jytciz5t9HKndb5dzdtTMXeHy3GHPMXaf9",
  "key13": "i56k3q8wseDoZPs3vpyVjwohnJVv9MzuWe66YNYRPo4QLLGzfcxAorThaSPYnck383SC4ApCwDAWv9hvug63bDj",
  "key14": "36J3KQqc8XJsoC75Jw53xPmuBAFqP3hBdSpDfyyBsWqdfGS9YnwhP328oympWka4Xeb5vA3bXweSgcFrkenxxU7f",
  "key15": "48hK8jiwDbot8UKCVx38gRwJaXMWaVjbe1g6XhV3JqpmigeR1SnvePWF3jC22MXUTDpfPsECLu18HzHWLshrSbHV",
  "key16": "zLLMw5vwrgmRboHFVtMG4q6NFNzjq9srD3hAjb5ukL6gHroTaVWu2dohkC4ZY7mSxWjZPgodJ1hUATvevwdxqdM",
  "key17": "3kRsGcTQDZ2gwE882wguwY7oZgCUwSUWRwphxzMxTgUxfoeQjV77UrEErVdw9A6pP1JHJCFUPTVDRBv8a6smTXkB",
  "key18": "22agWCi3p4hVsiDD8Dd5B6eEvHCQxeNrNkpwtW1o5BVKXdW2KzQUfbSx5kUSUNXW99ot9wBJUSPApVczCnUjcmjs",
  "key19": "rdZhmWvbbb9xuwtFVcvDX77UuRfs7F1mYCj4T1n6keiRtsCqLQA6DNEJ64wd85ktQVq39jzsoGe6vdQGGMdHSWL",
  "key20": "4H264sYD7K889oFUj8Yfa5j5ojTrHLG8nYrU1g3s9kKD83VtnNxxo9unNNzHWjVLxNedQ9RBWw91dHg4qYBfcqaH",
  "key21": "5gYmDMcVYpEpARSChj2LcxWG9zqk9XzoPAL3S3EY7enYVYsCsyUGJsk57wJ8dsyPCN3m9WtZnUPXPVHvFLBzanLJ",
  "key22": "1UpZKLpizFGmn88Kb7ykYgDV2x1NcyWQRait3qCwy96wRU5w6HTCWTLpScBGQhyagPkPezJVtnshymhgXR8UdAr",
  "key23": "23YXRUrbk6y3GgSCm2dUr4ACXz1euhVSMPHbbHmFMDP3ehRh9BwNHcJEiJmaHiEM1ejp9B5UtZcemD1Uvm7MbHNw",
  "key24": "4d4mYmPvS2L5vNvLCQwPyK7LP2HF5XAtAEtNBnoBjxm9353WpXnMsTpUNtdsQ4bUFrGqVHatq4TcXJaPUqHe8Vb8"
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
