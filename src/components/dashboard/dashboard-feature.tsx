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
    "2KbuJR2wDDJmLTEnMZkiMLhWhyerF3c1yXvN8jcMvrYeLARNH6zgYUvC8MetRTe6myKyr81iQRUz5pn46xZKppTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yKmi97Qoo5ApzXUBqEVohvg1aiNfxH9pWHfsKnXfTMQhSrLZPencfXKWjsJ8bbvfgQ5Dhv24yjjG4j8RB3mV7jW",
  "key1": "38rDfUv3HmtVCrGEmA96prZnPStKMZxjfgBsyRuVouCqfjgn6hDRrrw6AooQ9VNzwBKCt8wH73EnMJirh2ufB6Je",
  "key2": "3dz8qGNs99ojSm8SvyuF6DEpYBeEgcKa2FotBK3ooyRyVGJtRHTRPyy1ZgBvE7kUvkfBcobKKUm4PZUuabaHmHdF",
  "key3": "4S8x6YXTh8Xukk3SEUnw2p1tGGJmYcHZdFWpZ8m1afRxGqrwN1f26FFTVtLkyr95iuUeWTK7rXdSpEHBXwHFyPcv",
  "key4": "3naBbbCwm8HDN9W3TeHv12BspMYdhvXbb7MKj2PE3jiKV3psAen55uVkEAwKKaBcngGhymhBRpPyyQ6TCJX5oEVK",
  "key5": "5AGFw9nirVxs2VivLjX34UxbZM7pcJz4vVn837fx2bgQH1bX3KKSCPQ8UTFeCBAD8LR2D9CS3S7CB9KeSs6W6h81",
  "key6": "a1h7dZFmAd4DJkUSZdRp3QssEQYRSsaMtQPoR6fmdKCA46cfLonLMc1U4mGeEKWzX6ZgPqR73HNPbC51ZacG3kk",
  "key7": "3ZnwJLcGiGmDjsDaGo9uMzeFLiJc7k5RUCwxMoab3dyfhNjNBBJTAnVGTSZXGTSJwwFA1BYvNVtpuVLvn1Udk7v8",
  "key8": "2t9kMmgU523hvi9GJoJV2BFGE5k9eXSaxAEKacGEKhbF5CgxGjrNuUCUhdrxzriETi1scramSRsfcfQ2Ewi5y8HR",
  "key9": "59FWAepYdBu2weiEdCPYBXLNASWmAw3EUxhR7jZxtZ1DBBWjPJ5kg7Bo2PcmC2cjoNtLnhkon4uhv9UBZ86VuGc9",
  "key10": "213bKn2tYhox4YEX1KJpJbzoMt9SwdezKM4s3JTsnr4Vz4AiNnUcqESikJT8VBoQ8xVaK1sSfCrX9WhRVeBm15nw",
  "key11": "5qQcWLhNWTezeuGTSqp1eY3sa8zPNRihhxZcbm6WqoZkz8YDYpE1eX5ja87XHvMzGVJBCFUVbi4KHw2LMobKCHYJ",
  "key12": "51aYzocE5zvWWtgJmXkW4rNGHo2AXG8PmurKu5CpupJQHGyp9nLDSiPxeTcMphrwijqrqxRRxjN9sVM8xZLfqeMx",
  "key13": "QXXUHQzidsq64u68vfY6GG5G4FGJsnv9up4gpcJrKBT3V1y31PA3Fmfx4SSKpkbQmLjCE9okhgpUDdeJEWLB1YA",
  "key14": "35S4c6K8f3wFsiLD2WpcdjhwqTynMF4zW5aw6zTqEEzqi33mcCE5Nu3xdtGqDqSYpYU2yMmqTzr8aYfKV852V537",
  "key15": "4ZnaFuTLhv1D9YF4CFVZAxdWhVp2wqMPEgG9ES8CvtpNW9vuqp5UGRdFBUaR92GyV9VAXTfDiQBq3msW6qsRXu9E",
  "key16": "63i5HFS3BsDFKQsMBDeByLVNqy8BbrLNi7v47NTChAoPe3nLhmdyuMBC7BGHM2fqS5cWWbXcoXVBkL9zFakffaNT",
  "key17": "51cPSupbLY83ZE6mgndL2cEDyqtu43PKFhf5dBAWQoHYo1fp3CsK5p6ZstZwomN1oDwmRF7PgW5KpexRTcaom7BA",
  "key18": "2J1hR8Jz61vFEzEszLqdQmtLW3ycepyDpSwmvAr9S2uyYJqJQ5xmyuT1qB2dNTKfucoHcjK51mMXGLTKFRQtxKnx",
  "key19": "2As2SYN1riVPhaJp1V5xYs5oMgcttBVC3fjYUUVmYxudYJHLmQKGxk9dF3h8SCMQZTpvMdzpTfE3gJYavBP5reXU",
  "key20": "2aWy3E9udMvNn7jCJq77Up3P47UBp9BhDHr6LNyjgYu9RZVt3Seox3ijNmbxnKdRhVvzNNDeaT7rk5EkdMr61DfD",
  "key21": "S7cUNZrW9eCVqv4gRBiEv4oeRc2gKE4BmkaXEinGHtTLWu7eLjFhs6KzJMTmCC47ArA2VBfX1Jtc6Wv55ZGZxZu",
  "key22": "4E7S7tNAZmE5WxozByo42zSBkn5ebukHoaAayJLzzi8AZierJsJ4nFED52ZFf2j7ujGcZr5H2tKpUDp24gpNCoto",
  "key23": "3yNL47TgFyULFi5bL2sP1fiW9GK9shoZstMERA7kTeFMzoqypPzmnYUC6bTZiSCPv3bz5fgwyiSLH8Mu37a4WNXb",
  "key24": "21XYMW58PzoB6ZNtUfG95jPzw1MmPVDSrJ3bLBEKoJJQDN8im5N1FfC6jNri4LKz3Am3yFZqsh6wPKTA6aHfxRHo",
  "key25": "2F4y29nnT6ra5ggTLMeZNJGVFFwfUi3LuHCmS8te84vnAhP9n48L1AGoC1zVpgUT9DDHEZAMiVtrEgjeuPJSYEe2"
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
