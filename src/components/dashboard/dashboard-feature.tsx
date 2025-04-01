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
    "2SQjLN4mSVe9t8j7bNZE1gz6dZ92utSJPKnptxh3j4Cw66VR8FYBAbNLbNLJ5Uo8vNuGWWzVGZK48DsRjJuPfyna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51zJGUuegsboL5d8kdVzeC33Y83MKBQauwEQVZghM8SJRGSarrt6UEAKnm5nny5U4WiDsDDpxU6ciCeEd4MyTkVT",
  "key1": "4XnjYbxVWFbkTbtq74GqeAzaUAzuVbSjYWbszm3ahxB2rg5Nb9RHXoJmLKcym11L4AsmZrpuBNqVNWBZfnH2Pzjh",
  "key2": "262LMtY7RegD6fvbtkpyzvt1eFcTS1Fc2G5w2wU5GTvWvP2EtwANyg5aASUYA9W5nL5wKie2YFxhF4wzq3YhL53A",
  "key3": "rSEDkUiktqaCa3FmQpfT852iBNavNPN3DvZW2MMnWqUnGVmEcbXf2CkiJWFPBKD4uUraMdL694DMtedGYfCskcN",
  "key4": "3GG6PNw4jqT95WXcqcQNmERYTRXHv2cM8yxeNFp3E4zjXRuXvjvhGAzVMXsRQmudc9KrPN2b5KTkvSCfnMAVaoU6",
  "key5": "kq96UXz6Hs9WPH99v768xSDu1D7q6E3wd8ExJZcxUeHShzGLixcHsgyz7dRmDvFAqMjLYC7ricjcVi9Vx1fFJ2h",
  "key6": "2L9Bht9M5Ecwm2FKBjcqymSuBe6ZUXNicd3fkp9J2SCP9P8564j4XwhKE1bSn861DiUTBs7N5W9SFqMf4NNNsRSC",
  "key7": "2cB7a3ZA5SPUrHPayYXxjze2FCgReo2iPbsTCgWYno9c6wb2jJfYQeSmMUjBAUibJc5k9Ze786rSxr69mfG297Eq",
  "key8": "5Mv6K2uGGKPUjLXXbTZio4ASBzYgRAdJaeUtTgNpQmXqhLT9gteaoWAjFLaHRfSRPqZ8SZpM7e7CsAVvU1YocrL4",
  "key9": "52VnzWMW9QPyWoyU3sZgKnHvCcg874wmDEPWZsaEENAo464a1b3MTzxLKCtfCuWfa6wNsEMxQ3fEGmaGeMdboeJ9",
  "key10": "4AsTUdYWfd2pXDm9k9vHnErmvYWM4g1E3iVNyc6z3kAxYMm6xvoaXboBgupq6KjS1NoJCcgskH8JWsT8o4prrtQU",
  "key11": "VC9x7uapSEzhAnjrTj8ozZDUThnZe6KVXmBVe5XGY2G9z5wQZj9DxbprCTiPHDo83oG5KBGJC3mWxNRccgRsdSU",
  "key12": "5Z6JtioG5Uwx1Gdbhkd7bLLm5FjpZeCQ5Zk8rvvMw9LoM6kWHCLeSWJz23Y9EmaBNWDLaq1QEqsiCEHHiqwFxt37",
  "key13": "4gf4PDYiqTtx2EPFf8erNEkEhptmk76cNmdncZXoijDq8uw4K81zV3twTycc9x7bpAfCKYYRN5fvtd25FzPtwnAU",
  "key14": "2H5uiWmX99KFMvwGX5L3D6GwniMuFMxRDL1LkSgehGwbuj9gdadMYwNkP1rhqzsWMPRwjJAqo41xgYhE8M2JULyG",
  "key15": "5K3eBZANgv4TSv3PYCvdkHU6CwGfqVoLK4PAwwT1s8f16TD6rwXKfNKwMPhybQWLp9LEZn58ix35noyg45e8Z1U8",
  "key16": "2Yx88QWTDDCvFfGJ27xustETbuiD4qkG1VZyjEHTqquLPJLwaFXXWNrEAqpaXmC74xQyQNYjU4EYpbtypdzGUV2t",
  "key17": "4zwSpcpFXvwm6dEymY8AmbyzQrvWn27BMEtWPxY2C5p6xvCzeY6ykrMrz2RkcgTAc5WzpkpDkHyuCuHhVF3F12ru",
  "key18": "4GSczdDMswSdDq1wruD1R11kdKu2od2omjQKUYwV7TYeC29JQyFudHF6ki2pEJQcHAKdiSnfxYHMm1uaPpfWUn3X",
  "key19": "44G7j4BAHpgMgRSWy6C5zpLhHsWTGTPnZ7ezMRmnayrnHpdtiUDHqavjXyJgTGvBtYhtqK8szh83ex8qeBcdCwqe",
  "key20": "5faw6i1hCMY3JEv9mVvzQR6iZu2WtnVttdjYw2hQFFb3xhwy2S4w7uiDFJeJKoriubtmjoX5rrYhqqCpq7KJUvFk",
  "key21": "5ACw5sJHxHY1m5TR4XapM1LF9hbJXVGJqc65U1SLuUAqMpmVqfa9QHQBPeJPeWjRid5czobcTwyQMjM6RYR4w7Sf",
  "key22": "44rLfDcDPyzgXG6a3ujxkuNHF6zEJhpxjvSCxwbZAMD7kH1iUGnMZvttvFXWCgCWETvgcErmFWBMCJPAdCtd4bCU",
  "key23": "4eXw8kgS4LKKkyLQZf5MPSB9R5EMFtkUgG4RkecnWf4XR43fJVoYMpmqrxJjR1sUWXENky3P4LDaVKQchdd8A7Rd",
  "key24": "2J4b1x4hUyjahzLXF3NfwwpUY1xyAiM3HBPatPjE9zLa1H9TMcgZWh1D9iYrBXX2DhM6sF2X4oGjK4tazSbxmfe7",
  "key25": "4a9JB8tGH35MYh6Wcwxie1Ckkbhbz8fLyxPsSRKBs9PNtPbjMFLB7UnGJXJR2c8Ert3HHLjW3nm11gE5PAgvuavj",
  "key26": "3bp4sQWX9GcxgkR57JRZ63HVXoeWW7KxagQWmH92evZHBxPfHnB9MBhHunghiLoDNHMBv2Az3rysm5obSoHqbKLb",
  "key27": "mMZoppqRMafs812wDWt3ZwZxS4DXkCp1eaZFXwHMHG67nRNS8ahHJQajXHdZpD8Rf9TePrpxkPcH7jfBgKCiX61",
  "key28": "5kwZRQ1mJteeqsXKJnKBph234bqqg1QNXcECefuY9rEuatZwTigPbnsyctnu6Der1Q3UG6UVbLMAEVWu1ecARic4",
  "key29": "6Az1bJEsbFo2EbPC4Au9w3sVPPmkA2eknB6nnERcjju3cgsx1Gyh96NQbfRWYdKXSVST6qqZKAdcy9ZkHC1MQm1",
  "key30": "5HDmajAMyCoGjQpn6ksNPb28f9Bu1CjygY7ZwKKMr967PEi6m5SzH9JcXTBZs2ZzbT53fbFeE9pZgU5ks99kYey2",
  "key31": "sL7fohHjNx8Z7J2U2y6EMJ4Pnk6KtjQ9HazWLEK5LYKkbib6yVXSK6R7TjBquwXR8QqKit43BcdcGHUYUdxeg6n",
  "key32": "3R3E8YDYCRf7TmB2GKjnpHoi742BF21e8pnWavT7tH1E8mGteJqEMhMSeMB7wkkhGLQmtDpJqovPXUVsCBuEjEtN",
  "key33": "4PEiZEwz87sfn7ytXy1bHbMrEMM8EZbk9CGzFq11ApjPqq3Ek1BL3t98y8PbTmZM3S6aWicDvii4dPrCs5VQ82GC",
  "key34": "5ogPxWqtzw5BkzK5WGuUCGArXqwfkpxSAkDPpxb7BVr8TqVatFcnYXoCACvQKzM2mzxaNQatihfrK6L6jNHD4yF1",
  "key35": "3LEUiEDrkJQnQQytEtuqYwN6MxG5DVHVQ7NvohfTH3Sh7L7ccJxRGTSNLbU3SpyYk9u1jL9UtQsLiRqSibvMNXqR",
  "key36": "4A7jf4ZKeA8w7t5QCEv1ovrq8BERUbtgg4Jyt4ZLmiUGNn4XkVWFkbuQcGwyTpSz8t4Gv4979aUzb8RRURXxoce1",
  "key37": "ZEXDLF8KrHXkocHZBVEdeJZFJWFAj8RnaPR9Kcozg7XpdUX7zqCgnSQE1Pf9p8ZbezpXG1jhHjA4aypbkFYsEKj",
  "key38": "Z4SrMzhwYFkggWa1F4rq3vuNJc8hjPW3UJpwn1uN1qHezVbjSx3pz2gBKv5GMCxycLW5LVWXNJmwCGkVLHie2VY",
  "key39": "REpKunKfRdyFssbn4gKw9xRt8QidcBujzQqp8F2WtsjYhxGtr2qAc42n7FoYcXYzJUReJRShAAiRZbEYCgLrDrK",
  "key40": "5ExrRu4hzACdx9RSNibpQyr1Ee3nicoGenKA5vSFLxo7W7gmswQJ5bWAGiyEQWWFWwuWQpZpiyH8CZ7C69baZBin",
  "key41": "5EuV7ZwrPxoiU7H9MWp4ZAffwyHLeYJFjYpJhbaFzV9pWHLZgv7PULoHWVqYiw36KBK9UUQ5vUwjHwiwL5oF6D1D",
  "key42": "4vJkiZgQcMinoeqmGfxNs6aP24yzi69PcPNrP2rM9CCtfigvC2sYoJsf2fS6tB1cVbTNpzA53SmxxoESozpKzAkd",
  "key43": "3A3NHupB73jGb9ANnykWWpve2jTxUoFJHJhyxnc2LUJo5HtcL3Tu3Pqi8X5BM8LyNzK5gvg3Xd4aLKu7vZmvQoMF"
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
