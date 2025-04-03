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
    "4SP7upUJxcP9PvbkvE2MSYhSL32himFaV1cDqvMqM24dHg4nhMgx4v3wmA5Y8pHKvPbyQy9bdyxCVzEZuaisgVdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TzTQsKUvqf49QWN5WP6ycymixLbfhSvqCZpVXgVp5eA8pw5UHdPbwKuUFCxXadn8dxntHGvHuTuCmzmoFftxnkQ",
  "key1": "34gbkwk77w7pXhJYgbi14tB3myP9v7aaTcbBAWDfLFZp9G1im8S9yXn4bydjMCCRgqothyuFEb9sWrEb9N7jj1Ne",
  "key2": "NmiTFRYE2hhQ1WaPp6U6FTFo5N7tSdxNtaMj2d1eit8iv5qpfFfNg7mG6jv1UZRNUxNxf8KdjAeYBjDhJRDrzBi",
  "key3": "5yEM42qcm3WrZZfRH4CTMR3EigimpemJTUD2PDirNvMNpHXHVUTLDstNGkcKU1vZ7LyTrcNR7VFbTU8JKYTjWcMx",
  "key4": "3oyKwyZPvH5V8Yn4H6dohqDJYtDvjygKTJspm5S6cpHgGpyjadztTJ37uR3QdLSHrEGrVMnkBsXqA63CCtD817sW",
  "key5": "5j76k8zB2So33FM11mfzsgBFYDZXTEvCTW3twsrRnB995qKfYrXUEk7AVBXD3xvKtCGrqwDXmCv76iwrZyX2nMLS",
  "key6": "2YH9yoEdtu2eFVNvNzocYyaEUf8Z6mYqCShkMiNn2Lhxnr18kdNsDbosmDp4xBFfz8HTYt2aQeDuG3TDRqDiEg9p",
  "key7": "WM8m7KANgY6Zo4ZhBwTrxwkMfQ13oJSH9tPUtR3ySs7g89aY7CDaYXq54fSMny9JP4Yec2Z4T8oitk4z8mod9Bh",
  "key8": "3W3mro3z7HW4aBEhyJ3dHn1E9brJzTGLSZ5vyxGCaH8KEQgFxsAjNvuY5ii7gEJTfUzrYVEmeLk7Fh8QHvjAHDrn",
  "key9": "2p2U2UMKkp8GQxLMwQdMVirgMrFGjtFKLcNkhJoHasQ9eYA1mzcpe3dHWP77fuExab93zNwZbdZZcEgpsVk27o4a",
  "key10": "35YhL1d45SLcU6S5j8DbxJdj7SV4Ay8cPX1KoqporGdTzDPA3wLEruhqFn1hin3MEo32cGfEVcD4RKbCva38LCAY",
  "key11": "43vc3Sh3zEwiaNcfhW3DpiRqbfFvgoKERy9aLuqShXfhR9tsgSRbnNERHuWc1xDyBAL5rtwAEeiy1rhci3J3V5ni",
  "key12": "4LL6dVRMPTLmchzvUb2T9TMzUDj6wXZnmJccLcxndpUPPTEeKSBVUsFewgFntaiTUcVaeitSz3LaoxAZdzFstSRf",
  "key13": "2Ptcqpe37dcKofHJUxrUBfEGXGCdD6xZrPDZsn2kViB4wYZzLpnjrVwUfFz13ey3MaXn4XXBoDDJFfmieBq2WWBN",
  "key14": "4vyBVcvSNsEsNw8iSb8aReU2QUgHaCfTTVignCjNomMEVUZu7kWytNH1izg4sefPXk14pB3DtCSbTnPU3WKUzcqY",
  "key15": "4sQP8uvUS5SMFmF1A4dy8FeTRy4S1aHRSkauMs57ikp1fw9BMMiYCgeE1V6NYd4RjnTgFbsScNwMrgjq3vc7hkpn",
  "key16": "3p4nNT9cMtZBZR2XgfVzsoBtya7Bpk32MpM4JoSifycfGBYa5yaptGhqFMHUFPibLBCEHaJ8feLvwYqkZw5Xejnd",
  "key17": "38kgMMZF6tHec4oGWGTbRSS5cGU93tCQmuyh62MQYij61VXKdsVJYzD7JymqD8MLpXRyPauBy4eh1tnH3aaU3zx2",
  "key18": "HHdmEngvxcf13mC4oq76twE56B2v9Ky2mkzKQSH45QeVXv6hi51gqxgkbUdJf7aPLMR7WUiTM6Kgoc7d4Lvy5h3",
  "key19": "FoESDhkfRNsnVPx6JHP5PqcDwMg229ZERoPKonFtD6DdkKgLbRB5Fe2rCVQrjkJMowzFMyAEy4kRZCV9tFzcbr3",
  "key20": "3xLbgGcp3BQYKCCQwa863YxekeSFZTxFrvS5WP8EjuwVp8UpCjsmhy3DGQ6wtiRxhpPBndY4hMgFAPHA8yEcbFxn",
  "key21": "4t9tT4P1x1w7FSpKD3dAW5KSZnmCvkeDrp9behXbJVr8WykFhuwrsVVeA6VTr7gBBauHtaX66KKh2YQ4EBKhYCEk",
  "key22": "3NfrnXZGcNzX58AG8PyqCmRRfY21SnV6HPv2CMV1opZG6fnkKuL7peZTDPutBdFP8GvVsApMYLWgesrVkf36BsF5",
  "key23": "3BdifjySZJaM5uwMcT2UE5SQTaSfEk24dwhv388qBtc4XtexuW1NQE23PhqGthREM3yXje3uzm7prtfdLiJ9kBVb",
  "key24": "4DaaQ2gutK9GPkTjZsh1CrxLYAaUYkp3WYcmF9cV2qo2SdQgaihSR1Afpi1mtkjix4jzjjKUSBtxfe94sDLcxUBt",
  "key25": "5NGzgfuoH7QrVUbAgDu3yf8SSG7CXeNs8r617GPnfffY1F45uh3HM14QF7MChQF3oPgVEy2PuBjURfSS2uWLyYbo",
  "key26": "3B2nqhtzaV3hJZEife7EjcHuiEvW4EQKQAAtKVb1MC3QN9hr2oPC1tx1nhuckBSJHenwzqpoN2gdQAWjnZvUz1BN",
  "key27": "3BVdCnr2ushZxfvvredJsZRwYDpstEgWxw4vNV2sVicBXdxruV6tRYWPbGpNX4JMBxW9AsCvnxH2y4pd6LSmjtmo",
  "key28": "58mzGB8gLZfnK6YsufqtdKPcoWBJjix6uU67MTis9edzGAoEw9irKycG2UGAQmo9fjPCjVD3aqsFScMx4Xd1Cafx"
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
