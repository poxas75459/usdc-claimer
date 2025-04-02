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
    "35VDrGWWZMxP6E1U2WmbwMegxbs9opAWpvX5ivRq6Rgk1Pw2LgfxirZavCeYGsdH2Kfguiz3Rq59ckk3J4GpzA9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aZn4Mb2mx3VfYJeC3q8bakxCDbAKG2ny2jdnhiCh3V1E1Eb99GHZnovCEBnHYzuvk7ppwmJmUcbbiwCBpe2vcx1",
  "key1": "Kxjzy8EmAoyEG7iezSAmq1WN1XBtyLqSsr7uW8qEXnXoThacPxY6vL8E1U7q26eiRDWhZHNNpX1Khpzot6VZ3BE",
  "key2": "r6bzyPT47uP5V62ZkHDNpQMuvYDzvNndhnhL1EZ4ijsvBsBwFogpnuhDorUf6QumCBJCDdhgtrakeQJnYKP58fh",
  "key3": "44rBJehze3hn3btfkfLro9TdLYJUV7noJ2LFwaj9F6LqMSVzMuoWsr2g1vG42JTZw3FjhyTHbyjvf92yzCjd9xD2",
  "key4": "HjXrrRv9PM5DDKZJLsvEULW5xA6kQdcUpKMYGem1iyJUJYkcvSSuJSMJqPpegcr1m919o2PkmPxTFK2Vv4VSmYv",
  "key5": "5haSAfi3ZXKYiq17xgbGvnLUNZFyiUw98pNiZKnV6eARqvUvfrYkb969DSnCuyDJEnJGFFjetoLrzBRrAyjBWGNQ",
  "key6": "6CyhQFsLt54qfdnt3ki2WeU8TV8XUvmpbmTH6UJGUbpMhcbj5pQ66zMuqavhdRC3TWuiXHSWxWQ1Wsy83bEFPvS",
  "key7": "4K9XfTB6V6HWoh7hunukh1U7JTjjouxa5ZM3fjd6WW8kL3ZD2Zz9e8ooN3vQjVVhrGmCFhwQdRBKyJVvr7PCcpHc",
  "key8": "2dqzGRS9LyrTLXXxEfyizz4m4nbopDPDrQ4jP7MwKVc2dk8rPRPgSw1EdxkpA3fVdU2FqNKNXR3RPU5XNXtX2Ymi",
  "key9": "dg2kmCSwhHbP1iupdV8uMPjbJoHsRZaYKiWKfi38mMeoUgEfkpsngUPam8Jiosw4a3ch3cc1iybL8rZmD36LzMd",
  "key10": "3Ak9xkX552p53a7cCf9eVvMwYzFkcHyWjTc46paoRswhUqKk87cYZC6EiHxhh2yquirxmZcoBPrteK7NTMWM8Hin",
  "key11": "5qWSPKqQ39av98bzVnmy44PmoB2JrRoHSPN5qvDJuE1Sffa5MNvrD9qoPRbwuKGffF5kh3T7vWfPH6tsMHwhcj3y",
  "key12": "4r6TzPPCPGtE5rCpr5doQuwiYh8GrmKiszfhk22TLj7BVsHXWAmk5NahgU854CgiNoKH7PP9u4uXbJ7ayXuu7aKG",
  "key13": "4My6rzxvXoRY425Nh6q5wdzvk2yaujRDF3FdVNMU2pn9AeV7n2UCNjTQiB3GYwSnyNKVCek3TWDTAyNwYv6DsPgx",
  "key14": "3C8gceXzcd3y8ufq6cGeqFSrqhJkg6s8rDCd4DxLjtjogMjSQpZBNjhM3N2KvfkazkMnHyJqwZGLPe9gDMGM5rdc",
  "key15": "dnMDCURGeChJuzKKipWGfhjsVx1tX4hTx3hbvyDv2HSj4prMukaKCpSYTY5EmYC8wY7DcYbUQY4CgMbLs3aWyUz",
  "key16": "2LMzWLrPyNEqkFxzhXsN5R84iJyYc9Us5m2qeNScQxU9VRq4CCPagMapw4FVtmD31U8S4fe22XBLUXPbekLnXSzz",
  "key17": "aQkhNsdB2Wq839ui8hWk3V9JpmmGhbsD95EwFWGSkLQ7KQvvkx4CK5nS1PFTucNcmtYMNXmARJhWdYCB8p7Vfyu",
  "key18": "3MpoP5S3ctJ3YAXC1eifuyv8ahpd6KoY5LMhoj7RRF1kXv2RQFxxxxSMyPVVaZrCe6hcDMD9P98dFNqCeNLCyPxj",
  "key19": "4tUxuRhaCvU5Wecnrc3uUmiqnbJJXqdVBbmy6uduPAR9fYL6CxB32qkzt6ciQfz4wUMHXYzGN5Mrn46TfpUot77d",
  "key20": "vFBXcP75YGD2vikfanYSrKXTYxShdNq7yqfA49ZXF9G3J2dcQvmJPZsQg2LABrnfnNoWpQrCCaFhntftzYfU1sX",
  "key21": "4X2U3KiqK22tm8JEruT88skSM1rKCRZjL1xi6c2D2RGhodD2spegHSt1aw6HT3WxNYYfTvvRSjLNAoiEzXTyFZB5",
  "key22": "3aEdWfK12sbENKUvnbJq6HsgsGc3ZY4bgMpkHWTpk4JRcEit3Lr6AzbkAaBkvnczkW6AsRaqWrLwrTPGjmDUeNMY",
  "key23": "5nin6amcNhhPRHorxM1qCVgJHQr7NNvGmW1UA9Dx2jH4599xBEa883ab96FDM6SGZcn2Ad7dsEU5GpEmTQAH311b",
  "key24": "4jiGftV7k7577K6Vn1cHY6NcT9g1CLvKow9yaYzmKsByw8eqBBc8wr6dHxX61wA9Vjbmu5tL1rAZKC6PAsndo989",
  "key25": "3pbij5rpzgUESS3cwFAvaotEeHSq14uY2XJHxNmNLodjGQtGxJfXa5n8M1UUgGVAxxHcuwWn2kR17fbqPSS54VUq",
  "key26": "64C6trM7JhZZtcBFDA99ubmyCRfTNDufR1FtcNFWjcZMoBFK8gYVsmbjPGKHJi9RwHsEinM4AezCvVmz8cKxnFNz",
  "key27": "2JNfACvVQwdQGWXnkiC34SvmfMrWZbHhzeyxLbrCfYSRyKzWtKrGLyPoUqHDZWvU1UwMQYpyHRZoXL8Lh2MhyDrQ",
  "key28": "2aVR2ErmrR2Wf7jEs8zYw8XSXnEBUTS4yDsVAZpgMrFFF2349psMkqfEjrW8SiRdUZhKpRK1UEoU9kRQYDojXwtv",
  "key29": "3g5eEFdwzZST8kd3Lxr6ydPdnbHSKL7iKgAhAHrmgstXwXLL55rmJz2923FXY4LN8W6YmXvxsQ5XkdcsK7ZJPA5p",
  "key30": "511aNv4Tuu8BW6T2jDijUV2aULyZYdCmhQj1t1Df4uZHCSAVPMbssJSADQGiChWxpiRpzkLnTqNm7tcoXLdSqftf",
  "key31": "G7SwahszqJHSGboKo9sQDWvQpUsLBfgyYmVmJtV3s62c3okzA3dMnxTdJFeFhoM7dHjZZRYWfNb4XW4m3zgMmf4",
  "key32": "dzUwYcd3xRD94DALUoAuWy7wZiwV5kThtSNQgCLSwP7fQdB1XrPrij7ZPqhgezZNFeVFaXosC5MXhP7FsPia7Vi",
  "key33": "5XgKSbXdUZkdjHnmCLeGmgqjn1Nz2wFaguuEMM8UPZYH2DFj41amxyYfUWAeQZ7HrfL37iLJoi44FFXKLeT5b5KE",
  "key34": "37mgmobsrucW195VrimQWzBPHruEuz1Nvb2AW5uHDdmQbn5AsZdyv1bsH338FqYvbPzbBS7hdFf2u5VthBsodQaS",
  "key35": "2NrySTXaSHjRdVjQokDFMLRb11MhUSndUSAh8LH4uWsPFkdsaGz6Z9MvF6tvUYngwPuDP1Bxoso19W3CKgqQFUoR",
  "key36": "8iaD9E1KmkxcueNc1rSTKMf3G2wNUbcbZNaMqr6vYrEJXNubuVGCbwwvEAnHuyrQPD8kx68CFwPx1Q3Ht3tbwmK",
  "key37": "3knNty6fDywBAfwyk8PmFJUqEV6QzpLXuHpPixMCek7rbqm6G35sbhBb5jvJBpVUnkHY8nZU23VngEvtwQZ9Y8Q",
  "key38": "uE1DhEVnMfWEt6DmkNBEM4L8zAxqNQRxAAs5nUxKeANsAp65XxjvuQsLT51tp9rkPSwsJE1sGyeHiiYXmHjV92S"
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
