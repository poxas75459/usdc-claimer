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
    "3NghDYD6RkHN9jhjcFMEeUKb45mArkLuqHcrY4aR36pPytN5Gj3DoWB8LgBnJgKyjD4G7VYHWfScB2tK1DJFLckJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9vg6JRaY9LBURyFVnSEm4mKEKB4L1Uf8z77ALn87nhyB9KjFDqyz4ZQg4NkjR3Xqp9ANsHxhjAACapFnASYCGZq",
  "key1": "4XfWxnPGnNavuToJFhbutr3PawRbkotHPEMfToitWmZY5UDFYmWTUdyk5uLqiMQS8yZzxJx49FFzTSs7LByCLfig",
  "key2": "2MDX8narLgyN9YwShbFUuFMstYwy52YkNVfRDsHoiSyveyaF2Q3MYJ6Fg1CEatTcM6F4cjyZVQXaRdF7SNRDMKCK",
  "key3": "4fGQgUfvrspNdCPDqSoAAhzansyG2Jyn33pDU7KFThVvco2Xy7CbK3SbFgQZMbAYvfmqCTiKVKoYgtFvdRtNTU9",
  "key4": "5S6ixzanRSbtgMW5Hjc5fUJHMtGq5UYccruEquHu9noRouhPCL6CWNBqjvLaASJpbjAtWDzVp4T5syqo3SrB2sHj",
  "key5": "3meBGJpxLETXFJUZiWTN2MM9eHMrSUbd2v6iENkn2EDDjwqnWZCHn5egZvrxrC9gciNShWVGDEjCacKAANw93Lwj",
  "key6": "46UgqXWUMMksRZjC1qVtJTCoC1bm4aUKChzDS6gGwjpQJDz38fcARw2CF9ScwaZegbT3ZPDvE8ZN9ZktJ3o5PSjL",
  "key7": "rVe9siMpd5AuaMoUDM4iBdcEeVSTHYsMBmvFZ1Ev6tYjt6iNLZsMVFeXgZjaHq7SVrNkYRoHNMetFeX6SpUdcUi",
  "key8": "5vUoGEVRaju6HFyqXwsg8x46vV54xknhKXSUGLAsmvR3tdHAUgXpJvsXM191cc6367URksTBYrNSJsV46nRaJTf3",
  "key9": "57GnvNaVAEPrEqL2b9nf2nA4HG2gs1NQrJ5rEJEUX14MtctYh4epNt3Dc1Dc125X2gtF84jtyQrzbmrWt7jgHMsu",
  "key10": "5ZUEvP1zaZRHwvWgYjevUoCtyCs49xgRLRQ69phsRhZEkVYxKLs1Q7gKPRC5r7PpeoxS2DvoF2catgSF55nMi5vV",
  "key11": "3K11SUsjb2uxA2r9C89F4cCLc3YTigc84PemgGfuuDck19L8WQk68Eu2pqSJBYPqg8gPBZe2fpzyC9FiGvqxFmb8",
  "key12": "2hPeHR4T9aEQiTSAf3YA4c6Wq2hVkdfEZpHcWsC2CbeveH2cMZWy2nDzxJB6js3PueTx1MNrLS2J2g2Lb3NoShRL",
  "key13": "5VNpdbatzwEYAR1cHv1SCP6FkZVnSsHKPpz5vgXMhNNVemRwzgkAZ4xEsUdiLhpAEHE4Xzvq39LhGXjSrKqz8CF",
  "key14": "3fnyrNPeWGHBSj6LiAjv96G3MtZfmDtsgMe26AZKZW56Fe4jYJxoJSKNHDANWjzBfpWbjkeGaCY687RGTPzkyB16",
  "key15": "3wV8ve3Hydg7SVHRrJxuu9EANRANC5EAyq4UNZsbSoQRgStYHzboLXpmLxdwpESRP6UNAknyfFHPzWUYstnY6T9L",
  "key16": "2qA11wrDQung51sxy8f621U3LMgVrprdw5aS3VsYGQA9dgHE92FjDNDszr6CCd7A8WEsiiK6mPraJtfQwsHNtmqC",
  "key17": "28SAeAUn8w6bKdqAkw7PYvpYDVPKUyvg87zjPqmniK5BM6VsuRxLAGaofxBQHf2bDYt7HaYfRk35uGb5Huhr4Btk",
  "key18": "3aELTXu12n9bgDsNmZY7NQTFjbpbGxCni3yYFH46noLdCjvJKomMtTyWVuTZrdCLyBYCAi1xptyAgpesJ8MofFbp",
  "key19": "4YUzUMYHJSXj5MzaESQDhbKoTvN2ePRHiQbaDcZ6conVs6QNf5WMKbZXCU3dCLkSwu7RtcifH7RghTKcZR7k7MeL",
  "key20": "2TKTopoC16vbu2ZMMvxmZQARYrUUn2TbUjuUSwEVmth6b9nwvYpVgwaieR1Zsk9WjjEGZMcwsg33GuhAV7SW1N4m",
  "key21": "5AZBK9wxgw9cxdhvfDBfPCerBon9urvceerHaqjgSpTGj7stMWYaK8LgYqFxpAW4dNBxyqvRhuSw3zohygQ3DTyH",
  "key22": "4SBwbo2sJrrZdNa5nsYfPALBU33bbbaH2vkG8Y5j9UsYQot8oMWNQqmQH7C5LJr7jzbLWecUMYZt5dznaci7abkT",
  "key23": "5XtMkcUF5HLawoiw2WCWqpZM6NQ9MrQ6GHnsE6KAjY6oubMmn5txogmXY9ovBsc8iY43jz4nbswjD8i46WvJV1HX",
  "key24": "3oRp4du6gWcys8vYGrLKaN8hwVihYPQLH8Hkh9nhjRdvP9QeNneM7G5eCv9rEYJNa2dhwBR9mx3fLcvmfjYZftL3",
  "key25": "BUunb52iqNPo1qan58uvWyG3u79S8Abgvsk6zXKciWRGsdt8htbGVeJCiPsiNn8X9NCsyDNSdoK7ac2QrmsDjBK",
  "key26": "4iFEepxiZYLs4LHnQkBBgkAMhUQqxXVGENzutJVBLrgNLScGPh63kCEmRkZeKDwzkymynxBcJe5cpFbRuUPDh6Jb",
  "key27": "3B22qZ57Hu17rj6cAn2UjtAebPsu1yJBoAQ2K33Wkar52SVH1RVbVrDniejujSLTnaJm7n7UdY44f7YmjWNEbbWc",
  "key28": "26FmjYTEXXbUTKvPYjXW3pEzN6CTBBp55J8MgctMj5Dqx5AFb421mULYVdux3Q9sBTcSP2zK3xx5f8SHxYC7A6Kn",
  "key29": "4dDNgLyCwuMwJ1H387NHtEr1nCiSBvFNFqtjLUaVXZrXEwh8WjqrPmnFdZUy97Z2g64g7QQMmMpVfUqBHtTBxUDd",
  "key30": "65QnFUB3u2oswzoLRsBEUqkV4NcHmF9v3UGyzLJL2XBed2t4XWNkEMk5VDMvP6f4CL7KG7TFsDv8kacqEe33Qie5",
  "key31": "5QkirnTFpYuPrWoQafWgkqeYfmJ86WJZXsHaTG92L43oQemqoftCYfPF5DESxsmTDA2UbAp2mAWGgQgmnpjmR2aS"
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
