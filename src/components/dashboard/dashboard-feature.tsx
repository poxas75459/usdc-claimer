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
    "5aFNvPLxgou7ywXoDhaof5tFPJ4ieCthpNbuvLzQ5Jq72JMHRFnQpZ4NAPCWtApJP73fnaU2NUuf4LXA7u3QqBy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66vQjpG9q1zu1XrmQ6SDAyy6PfKUrULM7oN4JrSXDfnZXyD7fLvof1snQ91t4g3B5E8vQBV3VS27fnX5HgdFT318",
  "key1": "HYwzyingmJ5rK5snAgttjRFgseqCAUDr6bEiSqfLSnCjJ3N5YYois1rgYH9TBVj4CqbvUTY8dqiZexZTqE5W6nd",
  "key2": "aEfUubUBtmmM4vnmiqg2sGfBZw8ZkYAJuSrfutCGerEx2KLr2xrdaW4g5RoYE7yutLJnrMuz4765CMhWrEUFFNG",
  "key3": "5hyMtjPdw1TuYKKV3aNiSaMRyEhVsJVQw73maAgcm98dVr7fovE7apLFew8hJj4cNHGihtVWKTBDFDQSx1UK6fBG",
  "key4": "25dZ1CC4rY2nwDwnbLA86s4o8QivRw52syBHNHhoj525f3epqqaGHaTySZAEafJ8kyKQJSep1xA1jiS19TWAXm3J",
  "key5": "3LH7DSQYZsZbsnCrGSotQYssRT2EdHu5PpYVAgDTyyE98SGMEeTuy7ECPwLTfCcNSex9dRDYvT7q6NDGXQcbZq7H",
  "key6": "2QcV5Uop12jKLmLJJbGenLfSSHAo3JrxPMUv5rYSbJ6YQtAMZyYGZrnPznF2PcoGTF61M6oLf9fyPNheAXsMPV15",
  "key7": "3hs1S1vu2v7rwPJtwhTQxbwdcrV9TfUX9JoiYfgmkkaQ4Ttr4K1z5gnX7tB8v1JofErgmcRSRj9xD2niWgxESEsR",
  "key8": "5tf43VecMPPoWWR3aRDkzpuZsTtJVnzPCXToXFuRxpC9F74mZsAXe6wThfipd3iqmXj6vvaBFdXXJyNTutmumLa8",
  "key9": "5ysNYaGCWCCXcU74rewEr1Gq95uFA29kf6kKMAPWmmejMXWqFr5gsfToe77uwewVBpyRiauzcVbFmmkmyxBEGg24",
  "key10": "5aeTvs1V1AekpTiX6WfnwzfgDqa8qnn9FwLLQbTWYKVibx7P1rwFrqFJpoP2iPk1hV98J3smYhg5B9TeUov2AKLj",
  "key11": "5htFven6vtxAqEyVLwaiEwrgwSbvaRkw5vJEZFP2hHXRu5woJTa1FkT8nS43rM59T37E27qQccTVRBJwyug24DqN",
  "key12": "2iLuDcHqjGPg51R3J7G3DXB1WMugdxVoNZsWvVWyM5Bi8zZhyid95YXk5pPJDVZeudczNQ4EiVymL5jVaYgpueyC",
  "key13": "33CSkNfadeg6VRitm3a77XLP8D2j1SGc4dMZ34JbSRzz2jQbzh4xDABtKZ3SWs5MPcq4XGAm6aLoSLXrz9ab4x7Z",
  "key14": "sqtWQRwPr3vzMzz4xC5TT7eU874J9DPpxZkDVfq9fY5dZQAPyAUoDC9HNPZ1sKwG4VC13miTnboVhESTcaiHtCf",
  "key15": "4jw5g8PYXcypnC9Y2je7WfaQKQSpRUEj2FmHEVDVzkQJ5mYQAit5U5bbQRemVGb1NyQJC2hA9nYZparRf8HtyBLR",
  "key16": "2S3uAiFyPD4emJyA11srCJkiFbdxGMUhbsymJP8P8XUSTa3AiRLLZEaHVQyKJXKhzot2t8A428KqM91xq9rkFBHm",
  "key17": "3PgnxayxL24Tz6Vvv3vhbAX47K9fvnRsBPVnziAnqbK2wAHfiqFRRDR36VfVuLwsX5bjj3UBF6LyqdRVppWH5LFd",
  "key18": "22ekVSBaUnxqPhHL6PGinbfaARZ67Ywr2ggZEuBdfx1NhnfGUe7BmRSKzj6jLxthrgS3hfvP41R9Sj2niBRHPXWF",
  "key19": "5oMUvvqqSrYdHimcdgERUauamNi8r3XTGVf1rdTjSif8rmg25xZrpVhmWedX8QCZdKXBNwVUakET3pomLr3VrV18",
  "key20": "5sGpMLJkBsRs9XJhZbbqPYZoCEcca8k4Ko6HdRT9Gbf8FXjPJ42oNTrpFvsbJ2K7Q3gurhjCpnf6t343dMvRD2WV",
  "key21": "2VfujCHRkRQ7wJYMiC6KrDT837J8FaNv8FYfjp9w9p67yYzFiJLvPCVR6qPAnRtDPfgAik88wCNNuvwap6kuLCnd",
  "key22": "5aUNC6V29w54YFs4sixe8ASTCb3dd4UTzKn9AajRVUoMc1P1htXWSqSCET2Z16VVgy8V3utb4DhNMd1yXEfzkGRM",
  "key23": "3VfHkEQ2iJGAdHi7uvsB8jpuMULKs5Hscn4tFqFdFzw6x96ZrHbStmT991dRwUBjV3jL9axMApeuQvnNL6yWFMzy",
  "key24": "4wxZWba1y3cFSwontHy5cRkSx5GKmSNtiJ1YeonRChdsiqVw7qH6XSoH1RRac2rw2PJ1En5Tm5Bb6qrXcsFzpkRe",
  "key25": "4N71bzE9jFU2auP16mu7QsGFCJrLa7x4SwiMDzmxFofBPNsMHWa6gFegis1zk4DPgLxXqQXw1LhtiFk9TMQuCfq6",
  "key26": "ZbBDFaxzFjhST8xzfetqHsGJvozEWHs4yYkcmiYUHHJ8PZ9gWEAhMWKsr7yLPhAfNdQVJKJ9nCnRm3BFLpRm37c",
  "key27": "515RHAiTpENo6WJRBtMPPLYa4P6tcpLW8FJ8ccQvG4N1RT1KHxfVx2qRUfbuLorV7WbKwhMhbbWmA9VnR3zDXbB3",
  "key28": "53JjQxRZdb5gPwmcWUCMK5G9e33U6ypFjTyuUVWovzWkKfTNkPvCnkEVXw4Ju3wZhvvUXdMH7CVPbT9LzLxph4ZF"
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
