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
    "3avhaYKbguhV2LYFtW7VbjxyRM3TLhZFHjhDLiHLcfX5TxDQrU8jREVu5QMm5waJuEk8fix4gS3wbgfSNoskb42s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PaRgNb4meRTZWhGc8f7dk9sVnPAif4FSdhvoWfgweoAFZQTF2qdNAokwtXVeNoqiKzftEWks5aKcPwYwG2bsQCS",
  "key1": "oYscxNFoZ2twaz1tb2CNHHw7cP6RwiAMtyLi7jJxhHFJTCCAXE9AUjZYteT9tNuAuZyHkGaDhhCnCBnWdT8UXsb",
  "key2": "3PMLUkSeXoSFb37fcKXx7DqbgVcBRgs4yc4yds9yS4LG2RJo8524EHRKCJGvkXGoLZRs2QL1LzS8pkU4VTvd1ahh",
  "key3": "2afuZ2HAoBHacc3SB1vpCa5WZfKbAP1mrJpYqgWr4QYre7u6Xh2rkwSPigs1URJmRG4AyrzrxLBUddvtCfz7x9P7",
  "key4": "3V2sS8xuJvYUfcySqwPffGPPzDwa3XnrNsyciMaa7AFKgNmpV2nnkHTRKYBcU8igNWHv3zHRfhDUJQ9jBajgyMM1",
  "key5": "4s5xUJ2XPxNiNdpNXv8iUC3gPayD4ZEMiRYfvPZzsHt1Q5HmGRbPRnrYHPUNtVfYvRBTENn8pcSzoYLcoQeig334",
  "key6": "3extqaSQTy2L2mX9cje8QGdV7AtrErjMzTiMjNbavSY9ncLT8MqygFtozve1zEHdWV9BoixUdvyTNJad2t3kxdHG",
  "key7": "5LAFNqDsRravKoqRBQr7cDQ8BBjPpNfWyw315Evv99VHTYSpAvgoRkEmHK9uZWWHP9SDoR95pCTA7rKFgtnRZCWp",
  "key8": "4AXWLS2kmKvDzcGJnt3NEe8afmVqtLyWKd7fA26bkjXAAAAYv5sKL4akKvMRJyL3GgcLrDUKW3oQjGYVmHKDhunC",
  "key9": "hAXqEQUXJ3M4TqvfqTf9RTvhF53myb8M4ktztAGzoDZh8eHZFsNee43p9p5fKKSD5AuLtu5DGbJR9v6sdpTuTbh",
  "key10": "3fTAYNocKciNZfoNAci81VGp9FcpQ3pEdiiaztZ2UDNVicqukPKfMMRrLZEFMJBVgSb1pPeJMT4jgxa5X4ECeYZ6",
  "key11": "RqSpi5RA4113T2onph6K3JjSBVDDY8ftPuH566eeePdNRVYgF3WW3kj4z14KM7zhZ9b8p7MwBJDQUnDaE68mFQM",
  "key12": "3o5f1HKHVYbzbm8oDYdiBKiiSQdmEKpmcRfaymCgrqiewfVjyyRoNaHQZcWTnyEvnT7Un8qWkNjKsF1SsT9f7n1U",
  "key13": "38MdT5mi9CF32scDT9ZcQ8nKN4Awbe3c2z29Jy4vizgY4nejvnBXfRFVZkxdQRcsNysQvmVEDxBsS11Rdtk6D4BP",
  "key14": "cbdhf2jEpzxKrhvv2XmLXBeiKxRAenGUeAME7yQVMmm71VywTuA96gYgKmfKkyPnRKQkGVSrqL5ZSMEG8HwL93F",
  "key15": "r1NE5F5qUHGuMt1dbti7Q5gaiHVr3wZwRAgWXwQKbss93zPcA1icJAvaAr91HEFC6NaStmaVhpwjmMC89YR8U5h",
  "key16": "45kXqBXPh1drGadJasJ5HsV7pPFCyFrXtB9Hr6aXDerHW1N9CS6oMwGB8uAX4gQgaZGBqrFPsqvrNgYQrkKMhg96",
  "key17": "28oXCAssGgADrFDDzvrqUeTYDpdt4X2SxKarMzNieXnSo6xg3yKzMrPiW3TQYUNcNVtPXSZP58MeLCwx1xBzsy5S",
  "key18": "4EkSgLNdS1eH9cgtaxsApTVLqHchF85fmodRx4AgpXbJg9DzsuEPoV6VZ4gNARPHycu8cY62snAqAG6Kyy63Jc4A",
  "key19": "3eCXJR921gcTw2GRxSqrYGGmjEcBUWG93rsHTquhBH2oTKzNdHE8r6zS2bHNSEeQ2nScRVgRPCuaCJ1NRmvsaDzR",
  "key20": "25aEJ6s1PQ7WmWDKg42enPFWEZWn5a5o76CrCj3QrhkRY9p6KGmq8HoHgfPW6inrpk431osGQqfKozhtQLWjJsYG",
  "key21": "2CopCszKh3BT5qxntQ1i2SDX8V8MFWChu5UeppFGreA3LQRx8mvGjrUSqGXUkG3p8HdDDgQFKomEPJiLqvZ7Tzw7",
  "key22": "3xoua2LU874WQ5w9sV33JbW6NLwcgDqfmoQaS4mcCTuubMPfTju9QgdvnQ5w2HDK5sHvHSjDmRofrjLp1WDL3JvC",
  "key23": "5VjMxTPvyEezUhjTtnNAbbJ6kf4nBoTbBVct5Td2xQxVf71kuTrjo1uUMed7EwDZRhY5NbRRYBHmHMCDijoDJZUy",
  "key24": "48GJkg14SJ2aQsHB6HF1oc8rjxwNyZjyPesxZhv1sRqnp3wDaeLXW7LvfWyhNgYEExSnUKqXkR2cj5KYPkshhwmW",
  "key25": "25VwrqzxKVKsqsYEARhij8nywtfA1Tsbhh6nYxgEhbfMAK3v58MirfSdr6qGEpLYV8SqkzoDGrLgb2ezwAMRzUSf"
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
