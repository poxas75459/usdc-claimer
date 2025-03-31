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
    "5CiTnEQP9PaqXakvCxYeMLbKoKBTdJL6DZzLsZxLWZ6YDPZjTGhtiEYtjGaF65EEUm4CLsuPa84iRQyJB1WvKbE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FutPwEVbQybmnbAn22GcH2xqK9FDKPwy3anJTGDa7PxzUiEan7gCQ5ByJ3Hrr3C1uZWqjrVBMgtkF1twzwHWLHZ",
  "key1": "2rLsyp41jMp8kb9excvbP7buyiUdKQWht7q6ZJKjkV1AuC3gc23Dfpxe8s3eBoJuuSE74fQMKm8yiLDpFsdMwr2r",
  "key2": "5HJp4pWi2Dm5SCnj4LQv8Nrugm2tZATeAV7Wo3MTEhzoJ8mhqdpBvSK58JhkeVUSt4sZtGgykQqH6GHBiBg9VYPS",
  "key3": "2xVNxat6dQDGZwQDTmb5QywgZc4LnszWoZUr6KLndBo9nBoJRfvA2snuThVF7dxiVrFBPfsbmBQeovLuUZtjocod",
  "key4": "4ksD9CRyUfRxamB3Wp7n3AcZZNxMq6mbqDf9QbzSYh4ZGcnkHSYCbS3v15DsAWjCqEk63JzjhNViYKkkggLgdhYq",
  "key5": "32moU5iPs95FEHRgkBxjMgcz3RFXpQL9p8T6Zz7K2wxzFzS1QyoJdvMHiFi1SDPknTN46qD3AKWTwtYKgq4w1LQe",
  "key6": "2atRbXFuhqPKt5dcjkCYsS1SANMCQtfLVkEkLwMwnCpz2ABJ4XTKp2zqpzvHh4dXiLCSWnJp1FYA4ETWbjGSs55e",
  "key7": "3WVZj43qi2BAj7xzDa1aECGKptt2rDe5ninQA4PX4kZLEEMJ97TpgL3PwaZdz48vSJqCSUSzRYhivV79hXWq8T59",
  "key8": "5QKgccZv3DZZVsycJYgmSYugP8LFnoKS1F9YjtQbVe2renh8JxmbYBHFyLuGvPFzM7tBKgeXdzwfT8LN1VPLUuUt",
  "key9": "CNSZQmd3b9rU4uC6mV4bK3P45rVjrMx3ywczGxYcpFBogNTm5NGAYabt6sofGRYoUwnSDARuM8odfHyLy1H1AcX",
  "key10": "hyFrhn9LUpyL5ng8aibnLuTgFghp4DFgQcg7WX83CEDPQhwq8L7mU1HFoLfV5TknfMg8DatXVdhUQEA6RwkNP3z",
  "key11": "2YbhEmpUqQPgupgp2NVi6E4PPcEKHHyPKKMGABTyJhCnXq1voXrkZXk3C7z8draYmauvVoQ9oAcTbdiqCFrDKjsL",
  "key12": "3f9wDytpF7H1s2VaMXyFR7JSoyFEpzu2Qt3BSRFs9vMtihd8eaHzMyh3NCgyMHEH2JMds1r4N17T2s4Wxmmrs25j",
  "key13": "4Nyjqt823kxdmWkDZ8SpS8nMbBNRkeASPSggFGnR1BT7mBkcLkq5PsN2dk5ctnYW8uudjRMS6mNtZZNAY2sonmg7",
  "key14": "442Zeq2DhZRqosgSMRnceZyPLy2ffgDGUL1ym6NUbQvtKhdxzZy7sWYpyphPVY4B9XM5eVEr7fvuKbCwMghC9Noy",
  "key15": "4mJYyH5oNAhv5TRv1T6KfVpL3sVTQ2xRsW8s7njj8AXmEi2zStpNg4RoLfBq7BQJi9oDXHHU7WhJay1TnxHKT55a",
  "key16": "2jDT13XZ6TctgW96Dp7LJ9m5Zw1qeyHtgkB1oQXeSDCvb2gWDj7MaMFNRjBdphTrJjd5TZVvotyKPGfv5exnuWtR",
  "key17": "4AWrbDA3XYPkmJBtTAqPvK5k68TV4CQfjyNDXHo73x7jKz6SQnKe1hwBHnyKJYQsAjfibKtKardHdQFiymPPQfk4",
  "key18": "2Xe55gEZwmjL7BFZ7kxspY5bAX3P8wkd8bgXtQSgp89SnGzk92Y53XNDeBGgsJw2eeCPcTvhuW7wr2a8u8bCyXuF",
  "key19": "2GiGtWnHweDfwze6yU2qcNcNWkFCFsYcQ23xwabUiQzd5jF4K3sVp12kj23q479szmcKiHky1Mc5uGzWX8Td3dCB",
  "key20": "1Hu6S3TcHtCZEqxpzSFnddoKdxiDtUgLZqiqnxuTZ8TPd19zWobtsM1Ueaf3K2qWjzkgWXZAwEADnDdL4Fcd6rU",
  "key21": "42DAJXUEScUBVivPBkaB7TvfmxAEbTjRdQD9A84fpoRyTd28gDcdoaV8GuS3fPaEPpj4yNoG4t6MPBxkhGkPLc5j",
  "key22": "4vs46gE2Gs7u7wkAAwoV2hZAEH6xMum1hBmMXS9JDFFZigcZYWq6yVwkuGhHMZeA45xFevob7dVceVrpKg3hPUeK",
  "key23": "6794ZnKLcdqcV5p7tMrYgadbcytd73igy9CnLeEjtnPzDFXmRLcEG2fwZhkkDVUrDFcBiahjRQCHHc2QDuWTJsPn",
  "key24": "41WAc4udtfg1Hk7GaxDNYvvdnt2XbZKU7Ww5WKD4cCeUDxjggfoNszADT91fFRSfS9AvBejNEHAJNswsiXd3skRH",
  "key25": "ztvmLMEEAPGpRRuSihE83KZr1jTJoB79CCn946vkifEupukvhN7JfidzjzvBhGGF1f3u66sSjDzfkG9BGbojbVr",
  "key26": "5LyFN4mWMrdG6a1M5jX55pZp54nJvDRf9u3vvy7iQuSDjV6Ezn5jgYWC41csxTRSY8rQSpCRJkJxgEfrwZZQEC4e",
  "key27": "2qj1V6o4xhyLSwKwUF3EuCyAgodUPE7qaVAdw985KyD5HjjzdHYXbGsF3hYbTVyKbYcR8G433f3PPSw6H2YYaCXd",
  "key28": "5AuK3XcCvNmngmizrnpngf6uRziPfaWGxeRtat63zt7zRPWh9rcecibkGKLM6F2ubZMxcRVBzp2vTK2T7GbF2hHA",
  "key29": "3LgcFUifGTmD8byFVYfcZJuQcxXML5ESCnfrFN5G1FbxoygXgH6dn1xnQ4d3vnyhUsbZmMNKgw3GpGLUcEiMs8f6",
  "key30": "d6GpbPPN7z3JtiqY8QTrGoJmGD9krmq9eGs8is2TVDf3KUdxS4miRZjAkzwm1pZuhXRRzKaNTMVQhD2V9EpEmdK"
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
