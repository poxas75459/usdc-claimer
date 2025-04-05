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
    "4Ykg4biaDFrHYSxdWorm8ebQZ6KxDmA2UxzxFqJsMJRDZVS4JxfF5961EDcysqpEhEgonfxyWJsVFZceyBJKMbmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FWMUKawZDEuMPGgP21VYoU4yYxY876q4Fc2jHaG7v1fWCU4gGMwCcLimmeQ2fSXapFbkhHvbCiPbuerwWQru59X",
  "key1": "4XLci2uTRAMUSv5rFfYpswzAZca6GqAc83juJdvC59FQAtp9S8iAvSMUhfUFsDirkjkZKYyR1PuxnA3RuWTafYsK",
  "key2": "4Q2F9esvbx5ox8obQQo6NpQDnqKRa4oajGeNYTCwGudk9LjCc37PyoFnLUzFnzb8AAvEEo3qKyamAJiKAxUVrxXe",
  "key3": "4MNerbURWoQfvUtGPXYR1FhiDX9sLGskbscZBBA78EDURhiuofdr8LnDnSXqac856Vg6UhrfLqjphLCod4UD222Y",
  "key4": "sPAVj1UxsmWcLkRozCnGWVMBTN97z8BKZgrSHSYD9psq4w3VuCEdPErVgf1ZLHFBfAmvH3CSXwgBX2cQaRF2FwP",
  "key5": "3CizHYJXYMba5UMdKgHWK2DVzS4ZwDDAFxTHVzMBnXGCdxsGrXGKEE12sLxTTW49cDGkmQR1R5NoENyrkJqx2eGW",
  "key6": "4SWLwYL8Q2BKqf4DBHFcNUUFVwEHkkesbLekfPDM9eCsp1pgtK2AkLTzR4TVhTubiv8VA84ppXdcxomnQsff61wV",
  "key7": "4hv9i6dWr8FH668koCFY7SQVjDuCU42e6MS2jfzypFqx2FB7F3Qwj5mZQCfj2K1wjquDegHHZdRFjHdmiPaXEDcA",
  "key8": "2uKZmr34S5gUb36PQpoy8BVUW4G3qpCRYrgED472vpi5MDADvnfw1o8CQzp1R3RkqJz8cFecmfmTcLX1FXECJSX3",
  "key9": "29i458n8WviKG7xgxmKc1XwdjpHh5jeXjjR5PUoAGjqTV9hFr4rTjELBKdWDpJYUdjCcH68DyXzzwrs6156DfKq8",
  "key10": "vBX5XcWF6dEy4j2X1ZD2eVsB5f2aysW4WywEv1zS5uyjKXVsZHENLbkyFQxViNyyAyBPPzqiVTsopkmMoyHXRNn",
  "key11": "5rZ9J4nGzTBx7w4MkEsTHQzctEZkqQC6pv6UAqNy7v3zbjiYzL6jgf6V9wjUnXWwTeD5TJs2c3TunFuDXv85keNE",
  "key12": "4ppqtjHxfW7ECokEHMT21UkoKHtra1v9uTU2Uo2YgEWszkuApJznTWStKAHLSS5LSgykBTi86GpbNs8ZpdgafcQT",
  "key13": "33xKG7jccL36ja1oAdwoWrFYKXszo3SdaFe6Z8CtqB6mvSwy2gPiqSxTYemaAj2wPUvtWmUWeeU4Gi1gYoAY7DjY",
  "key14": "62fyFrdZ9ZsXqTA8exzjvtXXXTYBt4GbPDk3gQtuauiy29mwfsD5AWQnKyxHQAazvX94eTcxvKzHoaVqr1PHBjTW",
  "key15": "5Cn2oRigzb97ao4cA542proEj7psgNAFBhSG5acbGWX21RKqbFDsqEc1MfugqHrYAwM2NmKBhbsXXe9VEuYAA8mk",
  "key16": "4bgqkjYLm698n3byrKut5Y6iycz6hRKSdTPtmi4dr3m79Kw9XxSM8S88DRAQCGqFE7yGhBstT2enPXVd8dt6gbnn",
  "key17": "4fXsYHzBNtGkWAAspi49GArS41vUEEtTyJ6dRvuPSgCBmSrZVo3dtQHV9Hzv73jQJRUzs6rY97cszSUsq2YNE3w2",
  "key18": "288WpG7RkkDdNgBsQCoG7MZRkJ3Lu7XsxQLPfVti32yKfXxxMTiTVPeLGtdq3VUYmJwYcbiQXW7BqqvmwsHMs9ry",
  "key19": "3fGijP6zRTySP8oCi1eoZWDB7JnPuMYgrdhAcDWjGW9a6dgCUTAUUDgkxP4Rqr7h6hF1y7YAHenvH2cRhvZuyge1",
  "key20": "PrN64By3cwJhow9BRWX82J4JDjDBNW3poRzCLFotg6ABkESND6nEp1c2K62qFJbQxvwNMwSccd5NvadUHApiwGv",
  "key21": "2eTv3AMRogdaeAfpqVNsMsDhqWP3zFHt6c2w3vuWPkjDMKs9J6BLXCXXGac4drEvkBYA8ozsBxNxABgBBc2bnhsm",
  "key22": "3GV3JqWB7mz22LSwne8mZTpUwbCpQKQSxvKUYwti7uxUAez8aPF2J9dFmZbsTNttUQeAJah6BAXU8eziXcTVnH4T",
  "key23": "5PJ18SxKFTpESMdwLfWKUPuH4iwiJDXiSo8SMmHhHK7ssAGUuF2NTHiqYAamUYEr5RErC7Bp2WjUmH4qW4SGTXrj",
  "key24": "4cpPfxKRFzrsTDGkjeQzozXHUCy1AqLe4aQ7NZFfyXMQbkxa3tevMcATZ2nzLtDNzSs6vnPHfiKn5jAeeretEEuL"
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
