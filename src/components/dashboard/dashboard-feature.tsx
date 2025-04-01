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
    "TUaRRhKh1zY5FjnMYpSSekuKUvUgeRFDGNPQH5sDreLDdxfSEh5cPBDTB4oaXUPEBRke6p9MrUchii4G67Usq2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KWVYNJT4gxBfUwWceV5Cj91H9Tfy6grNczSMwmMp9B71FJFMeZnkjUW3ijH9pac9Gevx1Wc3UcVjYywXqJWV1nD",
  "key1": "5dMu5zSnJhpjQRHhop8EDHpKeqjmESAXEMBYsXvXCdcBpgemg5x97xqVtZBpJCtqfofan1T8AB7ZCuNEf4tx5AcX",
  "key2": "5bq1WnAgwU8vZW2mKC5kPyKWpU5ARi28nYf5GbkhXs2A4uqtxSsT5C9aQBu3T8AX4PoPXMHecmtk7GTUrsy6C4Dg",
  "key3": "3oudRdxnPc91iKjs7gRt4nZMgNvkETBGdb5e6PzusZC51ssprPF6yx1Kcc7BbGGpKSqycEYDHt2kxEfL1i5pkuSR",
  "key4": "4gLLtfZoXViCQxt5bB387emMuNKv6r9W4GaH9HVrjuRciMXrfp14S9gCi5awWjMinxSqW1SPzhm1ku8sB7RDTktr",
  "key5": "4Z2LvKgb95kMimgLrx1VkAABRJ35nwsb18xAuTHXCnMpVGPVL7UKc5Dnd9i8oBsWeL5DcxL5gF3rcs8bx3JzcKQj",
  "key6": "3mUPPGipU3yMuVwoiBYuwJpY1zhK1mA85DF3saM8SFu2bnRgwKEQVf6JtxxLqJ1WPkTNydoeefk2zw8o9VwVgRzy",
  "key7": "2EKD8ZZSNDwUZSamwdagTaMqQKZWoRq7gP4mo41RvBhS1sDTN9GvXgdxEb49cYcDr5zN5xwpZj3zfE1dHc3M1z14",
  "key8": "yt3nM8WtcpAqa4ASWtprg46LAcKjVySTag3Nw2PpZRiQLfKw3d5nQLeCNJKm2VoYCNpZHiJzZQbgMX8HgJcxE3G",
  "key9": "2Pp2hwpGhwtZegmSmosERdM4Q4LCLQtBHpCjfBNtnUCYNLPh2mCiuwpWWuSBFzEz7Zbk74dGVmtj6QNYwfx3Mj4V",
  "key10": "UJYMu1RSVRzyj6auC2sf8tEtJZ3DCtKr83GpuKixq7uShn3zpjZaZj1FMh3tHuhJQEuZ1R7eTs1ywcXTTKBoD4q",
  "key11": "3whoL9d36SY1UiWPPnbqt8DhfGuH6A2uCY8289EitimcL7gyyyGgnwJFoEz29MpLWJ6gpEsJS4z7dC26GPrWS8VN",
  "key12": "4zF9mSsW3NLUkEPSiRTZZHu6tCZm1UP9oWhzBvRL4XqFaUvFiyzpvWVhoe8Avwfte1v9sLwJ7JLHgKSG75qfoz68",
  "key13": "RjwBnwzxvPk1LbAaPJN2Ws9VEV9XffYcvoj3g7Tc1DYC7Y2zTiGuAqrHHzqxo7Linh4aN1SmSoWzvdP4VdN6GzR",
  "key14": "seaKSMypA1pegXCogbocuiCaWW1B37SHfzsorXLK5sYZSaecq5gB5V3dDLzYvKxMMrQA4pJGGp7F1piAXTNv33C",
  "key15": "5aBVKCxiQLC8TStUaYnEDQGKHS9HV9Y9BQXTgGfkLJM53Fn7qk7NS9rSaGXAAmYVtKzLPeAddNXWQCzbPSa9bAZ3",
  "key16": "2KX7mEBvugebVRxeXJfzojcUDas5doe43Vq4udxXJyKTsoLVq92rAtuKnZtRwuwCRupJEUArfRhhEMnhDY3YR11J",
  "key17": "3sU2knPR4hwEsKwk1Lc4LG7fNq5vfCKjUizBNQvrWSmWoGBdvQN7GTTsejWRypu1MmyRq5yMewJWbeD1X5eHdGd6",
  "key18": "Wp5Nxnpqf7PRMCLAxkdphXxyCrtYLt8d3vd5UPe3DTawx22Bbv7NdbzXzCANAeV4M6DKAftK8s1fUae2dnF7JM7",
  "key19": "5wfdguS8w8nTj558rjddoCxgeCF7JTUrCTHMTnjY7yWHmTr7aoSPnequhWm96yAkxnXL8yKEeJgcn9Qw6Aj6v4xA",
  "key20": "4YdbLo44nbamfai9FBFSjCPRY3famb1yifDAhv3ob8bDPcpBjRrVrsQSLpdVScHtt3ibsYHFV3chB4UcrKNDUktL",
  "key21": "5HZruf4ymypEQt86CSZN3VYG1GMr7EcFzMDtFW7X9YuVKjmZ5sEU9z6rnqTvKbqqk3Wn9LGp3Gbz8CVHDqC2Y1VB",
  "key22": "KMgi6nT5WF7vtFbFgWKUqGYPPkyPfTCtGipjSCm1deMjvnAbJ7YyUMkjgyCwDM4yLJSvSbxncptZnDX8cBenusC",
  "key23": "3RRgC3YpkS5mJYgK38bvzojvwSQqxeycD33nyiUeT8XzzjPE8jJ3Qjq9TzGm2MKqf6bx7CtKKrG6PqEVC8EbASej",
  "key24": "2kR5d3hY9NncbEWjt6hYFvauAqC4ryquG9hALty2c2CqiSXv6PeijRSWCqWkFjXG6XXLQNSwgUL21h1CBVCHeg6g",
  "key25": "2Uvd3sX4gzyAB6L94X1VCffSWnbAwfccQJvwb3yLPZjBAwMqz3GQs7uUEMGZpjBtRRFRooMr49WvpWCVnutZ8vho",
  "key26": "64Jdd4i2rFehqVMjH4LPgLa4rXYhSpk11UJd8BApkdVbY1scwtsi7b5ALRSJx8yH6CnQhyGm7NeV2y8irbX4h3Wp",
  "key27": "3j1e6rUti7FGi6S2EQzJApb5J6GSYKfmPrSoUBmfvDcabWFEyeoXYUmtdvtjBrQj2dBqiqanYHr6vEFYcLndfDQV",
  "key28": "b7BCEj9TaVvF6VLpmPKc8mkzALmiVkaBfzcvdN8vopSv79tzMZgD6hA8EFkYjGVapoa6K4CQkDKrJKPs1EXZ7Sc",
  "key29": "Ds6HQix54tjLRt4AjRPfQyzAs4Mtrfk1eXu2kZhLcekWYbvWDtuFBiww6QBU3NxvQ9ra1wp6etXAEdp9RWV7WfJ",
  "key30": "3tVVTTVJ2x91FeWeLWGGtM8uFCLELHLyhnNSDZeGDDP6YY1aUmQqkAhPJLJt6XRhrNcDHYQczeTiPvo66zGuA7kH",
  "key31": "BwtvQTFk9Ya3xrKv2beMVfYPXJPyjaEzziQf4mJe5nZzSvzFShfiPYdJYFRzaQQCyFCca69rYvVf4bWhuLcWKD5",
  "key32": "LzvDTGc5KWWjTLVJCUeDtX83mzi1ARJRcPs6bNhCfEZ4tCqk2a2LBUaCuBg1b25RLSq7vhx2sb83zGpYXPCGpHS",
  "key33": "4ZjHYVyauJvcMz8cmgz1WxVZKHFcPB6p6DZeADKSjxGHa2VUadwW7RdKjNrNJEjfLot132vYeZgE3KfyFUt9csUy",
  "key34": "14PYQsvRp51UmcL3ccmdqtShGSBJvchBddu3nhLshHj4UdawoPcMr3APDk747ctRTDqLX8KfM1iQfxyaSWrsrBb"
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
