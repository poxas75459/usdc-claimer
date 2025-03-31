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
    "iTNSGAxkfZp1A2HMW82ag8FGDs96oCb94YRtKBiTqscMuScWb3aVRZyqh8BVrTgL9AsrMjrichkJs2JqvGoKEVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dWshnHGoPBgnwi2rfvtgcLnB8NurbBMSLfPogYHM1vkX6u4KMuhmRe1tSjkifXHHDGQVZTYaAwjsmVmVa5GN6YX",
  "key1": "2J4A3M1v8SVpSndhyG9cGZKx4XdZ3WAow5i9WM54Qj1GHGCrDdn6n7PSPWqhxKd3ExZ2DwzYaetupzyxS4iqF9B",
  "key2": "42cq4Up7qZ5oWiHfstj3dgCQNTahGqCEkKN21c8SBKw8hccCA2Cmo4C9vV9MXacFSn1nJ4ETeDTFfUh1Tt4VhoM1",
  "key3": "4rNtiNJ2LXxfdnKGjcroJFzoD3VzNGGRSchdbr8t6oLsuemFn1H1wHckQKxLCmh5DCSp3oTiqrWTEnJn3tEcriry",
  "key4": "4Pz3sDK9todkQS1gGirDJhQamDpSCDm2MdNZ2RfLm6ThxUQfjkX5EYDU8kim3wNpo2WhPwr8zSUokETENrp4F3yY",
  "key5": "1WmFnFCyDqfesszFtqjHTFGKwqvvemGgirBaEJ8KiX4yW1ACKRuZqoea54vyt1TA5ZfCs56oW6oe7K13BNwcQwf",
  "key6": "5L1pUHFAwRGwadeMoQpbgprhgSvsU98bmXFeL3Y4qzGyffw7HnfC59iTNHi5qfxrmnNEAYbaaakJ8ohgjDv2AB2s",
  "key7": "2C1ZdeSmqdknepDgXcPanZtX29weijAqpeaET6SHSVUz5Hfadd2RzZhndbMChCpCqPZbsaHwx3JkKzNNiR5P4Wnj",
  "key8": "ipsAGZujSUwUn19yh3g6uZFHvgFzcW2eWBio5MWeDYwrKfvscYCPtWcMQJtpU8S1VV9Kr9yeVGPxKFf4ewMQnGx",
  "key9": "2DxMkiGYZFBq23KLtAmSBU7JxwLTKvG5wfw5FdzkimxogHTJMps32dj8vsRbFA3Ci1fBHLgtYdgSQwSatBU8mom4",
  "key10": "3TftcMdXmnsUoBVJP2jRyDniBWLmLqWurBrCZPWVoNcot2xK4bYa4RuA92xYnhaTAqaiGy8b4J9GWmh1aGzb63wa",
  "key11": "vUE8zqArbAEfZYLT9DNQvwDvcnGjzksc8TXbkMuNPNxwS3sCruiffH8n5w5DEu7i6vSBDJpCS4ZpwMuJTzD3SWW",
  "key12": "64cSgpfALVBUuJJkz6RfEugQfwNFGKacCJTchuvceyM58A1MmtHx6UD6VfuunBFHoKEULpwCH36mK7P4UPSmpxxf",
  "key13": "5dR4BBEKd3GBHpHh7i9NsQnEKJ2X8KxQUQWSnt9mW277QdNUbnfEGirK1KdJiZaUB8Tkokz8uYDnrr8xPtXfqoUK",
  "key14": "sP2ddGESf8hipGupGS9SSjK1cg3ETUbrWBftyDo2m4pLYpqvRGK3MuW1DsjEBhwUxDeCttDxLCchMmW7BoESobp",
  "key15": "5FgUDBnw3t47eF9ngQVtMLto6itPYdT9xfGzcPxiFHheuMCT5GSQobyyZmdkBTW5xm91m9xzGnWfaopgn4jVqmPL",
  "key16": "6zTZ7pACCW2BBhkExXHC2u9Nag2GsYrrt5SPxvPh5oSUFfZ4aBwhqEyWmYSNwV2KGqLsfoKfK4Dsaqt1kAwrzfM",
  "key17": "4UgtJCvw6A3oHSfHx4KhpjQmKpb62HBfa7M8fg5pZsohr6gs7D3PBnbKNB63GtSrw7i6EQNccghz1JLiUHbFxumo",
  "key18": "4vp99qZXUTgJRxhMVcJU2kV3AHU39sEvi6qs7BFk1mJEtndtVGSgCqxsrDApsaG7Tqv4LFkaKP1hwWGEA65h7PKX",
  "key19": "3pZ3oJ4gp7G41GafM5MxMk5hFc9doWWLtiP4SWzT7sjZcv19r48FzBR2WY5uMWUPjmSxaMZb3X649tBYMV4nmS2y",
  "key20": "4S5zUt2qxQQdBibrEFKgMKSYtBE7Hapz2zkRjJBTyVmG46f3GbHw7Dx3c4gk5TtSUJUZuY1LC141qoLAoZQ5BTgU",
  "key21": "cx44EFy4TbmGS3R4EVD16p2aUK5tMQGvjyjC1vEnVWp2iB7CwTkmxeqJ8FZvPqaiDrjppo1XaidusZ9YJ25C28V",
  "key22": "628hxJFd2xAuXe3sChXemNYMnxZR3Kwaou9zn6CyTv6gc7ZJrbbp9umTYuEXU8pc6w5fA1y9JZ2DowhaXZw8KnwQ",
  "key23": "3NrCddS2ZT1p7RxFzW4jroSd4ZGdYuczSrBhDJc8aLT2KzHJi97zoAcAQwEaYpE8NZpbPWG7s6NuU2K31fstKLTK",
  "key24": "CFaHYxWEc78kzkae98AjoefKgt1d4qWMaWmiyafHo4TjVD2YtxNrQ5PMbvhqbuv5aeVP21J1MmwcPurD478RAw1",
  "key25": "2BBrEJsg7FBVEBD93kPmZ3gbrJw2bp4foHqvXy1i7of3KY1vKn6r9CcJuyhZgKp8JBPMkPo8nx5jKtovNMiM6DUn",
  "key26": "3roKoL5WLRaDrpnGD2E5mjjByr1Pa5qkXmer2FfvuQQUntaX3kUJVfQcP3VCbWhxUn9ePn64654MFsYVcmBCNA8Z",
  "key27": "4bAHAKT5k7mRKPuzohdGryMiov5wR5mCTXHRcEgkCmkajxKowQpbQURcKyDMDTKKRPFXRC8haf5guS4nmhmivBQ4",
  "key28": "4nLfAMJF9G2hAHXCwtVQcixzcrEaqWYmAgfpfn4raWtgnQ4uEKzfbZ4c3baLLfmdJuAmTsRi2cYiay3BcLtCuGJ",
  "key29": "5qynZBT6ARwt3LJgHKHn1g7wg2SJ6ACk6nbraPDNcezW1aqZ68cPk5kefXGnDdgEcigdVGykdhetJRmVW7gVE2tj",
  "key30": "678uM6tYtefvDdK6soZRdMk24ASkcNdxv1icSXAoJGohyLh2b8NoVvxTxv3256tZ7TEfL5uLhVd8xvMYVZAERcGX",
  "key31": "3pBrzT1km2Y6iAxhu86c8AAxM3CYs11X1wyoVyrZvZHGPTfL8zZURFXrawUX83NR93FJVwFT6nzvCJNAwQTXgpVK",
  "key32": "3UFod9jRzUNBBH55rMfvs1Pb7oComSAqtq88rCGGaJMSEaKQrCesfm2PB9B7GYh57jkvG1zzkEDCNAuiK8bdca1x",
  "key33": "dVwwpfsSaXHZVdPTfktzo75PfmCCTbEfQusGzfGnzoTSgefkVcXSqm8ECvRNeErGv7y56UgMTVmH59NbGCWyV24",
  "key34": "2wz4Bc9z2nYydgBYSVkbuGsCozRJWWMnpQCLrX4niC2pE5NRGEF2mamURjp5fiV6AwVNH1RuTbux69fGG2M3MCvh",
  "key35": "2xDLSXEjsNJGki7opYRiE3Xp39NkJrFcMe7sA4iSfCMdWaFfpYXEqMzRGBRTBYerDecUXv4CAxx8C56wwRQRppVW",
  "key36": "54hMKzyCCGoWRA6rkmVEJJSQheTyrXwgV9teUFBarnV95rmQHubBMmtEhf27R1JaQYwJFe5avSidENPrYu7kSS6T",
  "key37": "2uJodtjzRhUTo9rLFbQpcY42kGij85YWqoemWHgeD16fM8kWX6ui3w5LgcC1jBZXsvGBQTtyshstWwnzNisaUb4Z",
  "key38": "3V7zJxwGP2eVNtAeHdjroEU48bRD91sEmFEwDucf8sY68RgM37hGwqiJG8EcCBQiKd9e5Wk4qX8ktYYHDC6gxUKG",
  "key39": "38K7PDpus2Qo1fuZYKvEPmBFujPSp5UnXf7aV7EaunqsZBffdkCprF8KmbPFPW3N7uHWWDsvkg4ph1Qk8W6LuCb8"
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
