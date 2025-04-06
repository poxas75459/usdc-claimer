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
    "2rj8BpLkRGVRDw5CN3ktK6f6FFqWAQFwbeumodsxb3QzmvJ1t3YGFfrDsr3AXSQ2kfxJ7sTdaAzshQZJ8fMnYt1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FMgzpgw1VZTFsiivrejuZ8dZKPWm7zP1UMTNY334WG6HfWXCFArVNtu8bS1oJ1ZCnjjuJosKmyux2VN8YzFibS7",
  "key1": "2DcGaumH6zpeNKCJWnJCdYtvf8Yp4mUAVxTPfCKwxdLFtzWKAViGui2S4XxTYminpkGbUFjLrHjExawkH5XT9Ufq",
  "key2": "3iNmEX9J3ipZdzmHPZnAMh8QYqar36jwJBE1DG85bXJWKZJb8qKZeWEfuMm5yD8z8Jiv5nQGcqXAWjekXvTRcY91",
  "key3": "5GcqtP1qn4HjDfQ94Vcf5hKK5hbmsoTbQxsstjDwpAEXYWwZKnoCwMg97xnKsN3GK2dgsEggUxceoUzDmGE4UPxR",
  "key4": "2BeGkrY836mGBgZKWk84Eg1KuammMq5amtqUGKYvqiLcQpA2TTyHD7DXPojrKquK8f1Huf6RVMw17uDHwdhC98Ef",
  "key5": "4WfpYyxHEy5w2WHY8BZcKcK7GDRyNb7Bc5Sp2BfPf5vMXABempiTog58fZEUP5PQb7qV4jMPLaui8EkGxRceqZZj",
  "key6": "3ZSdqPUAfdfFcMyRNmaXpVYw9tfqEevRThBQ9ZDszTgvKkLJ2pxrNptGdVD7hxNG27pLpAr2xBouLGfuTSbNvJG5",
  "key7": "eiHS7Gu1nc1Afiyttcth18eULbVJDv7k1ZSkPS9k6GdAmYSycfu6LUuhr3tYAcjgXJuJrjsYWQ2Wz7xg9v12h2N",
  "key8": "5xnEEF3JnZwCRYkfxxv4Yh6hC6tcPCEhAZwabR1UAPsafC4D2FuPhmHeuXmDEBxf1u1SxpAaGJZKT52Ep1xLjjgx",
  "key9": "fmTerMggZsd1nTZbQFVWmsWBeEhkhVjrLJsP5rvYFqSyQJ4DVUiqM3NLPw7CKYFRRokYHHoPXLbPiceGrpAbxUa",
  "key10": "2dvbot3bGJBLo81ZApQm1MHnYD3RyYea39NTcViAkR5ZyVmb9ez7yYnszbAd9YEq9BLDbrqYG2XviyPTKs7rPUMH",
  "key11": "3kgDfCaEW2N5vZMYSzuXsdiTn8smSY57zM6oBNEcFCA6C2cWKfyUUCZBMZfpjRLgxXnM6A5ZPeXx15rHVvenB7nc",
  "key12": "39Gco3F15QTeSR8p6zfsTfTjDy3pej9oVHkSftmMv2cQJtgmGpKmES9a8X3p6wvfUBZpDEq1Uj71Y8NF4PKDsNyx",
  "key13": "W2CTPrrdopcritcxAabn1eiK5vjjCLEYSvdti8q5zSiGyNC9izwoS3pk1z3Fy2zZC9J6qc25znZt6ZgbwjreChD",
  "key14": "3VhRfa8mrUjCZfhKW6MYsZmrQUHHmmFxEcYx4o8JGmg9VakFy5PMkRuUjbu1HnT4MpCGiFsPEQ7LvAkwKBMjtjfc",
  "key15": "2q4inZid5ibXtgMmzpSWdAFuvnDeaK8hbZTy7uTyNhPjXtUGsXx1xEMy41mxLV7Sa4HHEQd3p9TSEZ3KPAY5EMkL",
  "key16": "5zXJBzsLEEUZqtiy6eNJtvKdj4EEpAdjbqMRfi6NMKNH39EDAYEDjaxNaxeu62XcQogefPe4yhg93P1Bh1LczGuC",
  "key17": "38v3r4suv1po4L64McdES968gFrAB3TDTu87knN42FdHyqvbHoN4GfDjoDnHH9faHQtqjFEVNJxtEb3R23hkZXbX",
  "key18": "3y4EvYNGueWaGBBiiYAfGCGMXKYAjJmMQFGLgeoCREP6UBrComNgg5CS2W3Lqs4bWh1hv5LctYRhwsx8bReAtVJQ",
  "key19": "33LG2XFNgftPxvkDHkPGm3aBmW58DnZELviehfNoFyNhV1rAhxeFYn8nzS5LfrStTR4FsgTxEhpd3P5vf6Uz3usq",
  "key20": "ZBjuFgo86gm97JtRYH2NHqRXhkp6GfoNSVSEnoSfasv4DFQA5p7iDA3wdVfinTbzqosr2BiAur5NR85uVXR3W33",
  "key21": "yprXzsHziwZCTZsR1suFWQciqzRvBPPqfLX3AyZC7XvmH8VHMjD74oQTiX15sdNDeB2JQqETX7gaFkHUJuxkevW",
  "key22": "PGSrGjUFJyfdnhCKbZpTs4bgEu1uNAaT9exJPVSdPYPq1sma45M9NbJLxT4sdR2tB6hEHCTenBECLiZqY1is1LU",
  "key23": "2sr3urjr8x95T5797gJXBXwnnjeS78mNgmJLYSEwyxULF5tsscWXwRuUUZRXuXGSTCfGDvcGqm45o7PDC9LmGvdg",
  "key24": "GQ4rXjoXwN7XbMRLf6pPRJgTXLxZesb5DZdgczqLzc2KVuFKmNAxPCbyNBUELihGE3DQcoT2F3bkuVvKueiKHP5",
  "key25": "3dxU8VrLA19c5ezQ5WBFw1VodDakag6kS1P5BEdBm8X84U2Hu8quggjSpH2QbGAB3ez4CBvLj1Uze8FxRmYbMkvd"
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
