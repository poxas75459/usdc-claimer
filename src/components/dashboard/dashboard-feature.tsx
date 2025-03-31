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
    "2mDtpineqcNZz58dGZFr8zeh42ciPdKQfR9knkWMwbNX5upMUKPDLkxivCpptxmmju2w5geLx7Hm4cYYBGMMLBJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NoDkciiDiGtdwm3qDebUtcsad6Gb4Z4yhWbmLfVxi9DBmQ37GgZ1fCWj8dtjnWvfRrTpGuCppjpeyrPypfKTuZw",
  "key1": "ULeKisrF69KJH7t68QTCmdJ9Hv9ZToR5RuW22MSMqWvJ27znui42zvAEV6UALPx8gTQTtrfFPMZWVGEhGN3VTtN",
  "key2": "4ZZ5muoFyEyUYcvX37ZNNQkmLUGXcc5H1pdKzfYXy8e4VRQUej93gP1fDwV3fDRKVSZSagkMK118mu4S8WvvQnha",
  "key3": "5SM871UrU5koLPjw67sLc1VMiy16y29LuAZxqtKJ1pve72K4SmQxbmDnhMC2Eb16X79WQ41gAv2TXik9Kxk5EtpS",
  "key4": "2PUS8xkMfyx48VFtKoMWZawfZP4BMieGgvrFm7yMXhixURaR2UG4ZWPfbjCv3sdj27Yj8xRhT8GNesvg9nScyc6E",
  "key5": "4xMJqqRe9fmCcy8GXMdSkdmD4KaUXRVCNfkEZVh34nu78LG3G5AdGxNuKK9vJvEj1YNSUmtEwuknJ4kKe6kkJLFF",
  "key6": "52awiHBFnocy8BiBWGdXgtasapnwvZLgxNGBM2TqwjVQBchCvGpS7R1xnJxrpgu25NRjG1T6qkr1xrEd2K381xif",
  "key7": "vgwhTdWC386HyfW3HbFLtSvXog5f86JRC7mZheTt6yRigwKPXFfRF4sWnptPEGHviA17se8yHqapUAcwe1QJncx",
  "key8": "fG4vEqSFETJ9sFTfePH43Gv5Y6g9TFq8gRj9KAfhhJyTCi8x7Zc8gTKJWYNGnPDJL1CVHhw9bMQKBYij2nBM1Dm",
  "key9": "5iNzsraN8r7VmsPMadVVyf3mtpCsNYA9cnJ5qBy2TAmaefMkCnTMLZWCE5xohNP25SzvhAHnLW2Mtr3T7iQJuiRo",
  "key10": "58J5fvLDqid28gxiWeTzRv7XnjNcw69Lexf6dBDEpHejHZEHbbr9QDtHgETZ93oErXcmApuC6nsAbd3K3HNcPWtP",
  "key11": "4JxjLc43FShJdQiMQqVz2kzApnMXtVFVkCVBey52pjZSivbRTFKVbw6rLWkdRPTWg1QLrmwXED2WJA9QbZwFnccj",
  "key12": "5RzodKsqWd1ahJwowwqyNi54DGxJUMWra2zuE7pqfTis926N4ZAc99EGFKN3SUD9fMRHsaQcegJZaYynmE7kqbND",
  "key13": "2w8pGzvRYVDxbSZhdUBs8ifMabjZahYTJcoGRa67ZaRnXFs1EkSfd16jLmXSnpuWxu4zCZ8SrjUk6dGD7dnAXC7k",
  "key14": "QdoNb33wkiYMyJGNTczvYwfSAREtKnA8bcrFNZ6qC5G1RvHTFaUPGRTLm5uZ6U2AcnACcG3ZbJxgEu2NxBfnc63",
  "key15": "4mrVXWby6c7d9wmchmjEkHQavcWdFK3fju4rmbHa2mmAeB6Bb4LWJH8iMTnGUCF3JE9vx2hNTfGsyGJHRxtbxHy6",
  "key16": "577w8EKuz2vProXc6azZQHTEfy1BLGthw4j1zdMVXCCybS5frzvBvoNFwf2DerArrWFJ3MomDCQxi2CKVoXsbw7r",
  "key17": "2nuQDUmwCR59VSaoQ4QxuVSnr8bMwJEAyj7UNDitRpVTHT57SePKUnsE2WWfYghGjGLWaGPdMhUng2GXk9trk2qp",
  "key18": "2uu5a66rJ6Aa6g93yPPGRrTrjSYBQioGi4EKtCCpFK8HeJfYtzVDMyUGMPJ412Rv8WTYGLTuinfXjVNo75aDswSg",
  "key19": "4kVxZY1zNf6VHkh8EuEjojdUzQjkKhrN5HHLNYMtVaLuuq5zJn5myYwJwoLdFTfMSQRqcThcxsv2fro5HSeQtmSc",
  "key20": "aHQqBMiqxMAHtQFwJreK5MziGnFscrMyHhz5T2A8xCdfumnpNeZ4dby5bnT3XBNnWbV4Nj6Y7LPQfZy1oHXX853",
  "key21": "2p2sauunZBALrCqiVYyKxXruTafHgndDyPGPPNtNYpeRgF3u49pjYes626nnuzGm14YxoFMoobD7zJwzp9mgyQZf",
  "key22": "vyk6DdGLrAgm5zdrm4YqgsCfR8b9vf4gNWZgMDMev4bquijCGkWE91BVtBV8fgKfgP7JaVqnVaSrEUYChGhb52P",
  "key23": "3FUGc48ktpquTSQpJa6oNUdkaSa3Yp52V1fcz7yCdL18FnZNMjL5BuUi181DKTUJevNn6fTzzSJNF5qRyrHq7BWq",
  "key24": "PiEDAUpRp4TYkCygFMAzzkP7JfpL53Rc15Us4C4RXnzAFfXpaCYRhtbcLN4Faurjbbu63y66rYsV3QvHFcnG7ZV",
  "key25": "dXmSAQBDMQPhD2FbetdFBsWwEFNdZgyB3sWikJTg9gxKEqRtosWFYDyxLazn6XNhu7ZAir3PvbNmbnxnimNoHP7",
  "key26": "38dCi5aXTeEK8SQKyJyRX42S2sX2GRHEUHouLpCCmXCgEM1UYJw88cpz7LN8htEatumWwxwcKjwVtL4wkPPYD6Jc",
  "key27": "3igChhKBDHDvMNM3KwBLyQ3ayYYNy3fK9xZQQ9NRtnSBWmHJGAwuNmMyLJgsmVLcbMWkfH1oLV35KVt4rjUYVHWb",
  "key28": "4mDRWnjUJeYAKwAy3ui8JruLjTfNHNiiVWmnXSXjGz7aomfrsWM6Q956qc8tp7k81Y1dRFt5WauLFn6xC8y7aVW2"
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
