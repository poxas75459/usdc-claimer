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
    "5kVVJFFw5D5PSRkKVrPJLHgM3Bop6Hopm1vxHHHWZ9i43eHfVPr6TKspnAyyVpnephfGDmckWY1n3Z8MwHr3N57n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v2Q6wEe9o5dgvPHZj3s76HF16GdYrpuGeZjVPiPqaiGtNPQLpvVSAc5HUayU7TYaH9Z1RWtnmMyjcVqMddegv7x",
  "key1": "3kaPyqfdWgASUiqgs4iexCAxdzu9g8jH5iRniaYPmH94RqT1VWwjQgPaYJoAtAyVPEM2ofKqphfG2r5jbgjKNqZM",
  "key2": "5kSLsV3k3rEdMhqaeSAn18ip5dLg9Bj7u5fCqARwujuUUZPSxgvk3M11L6vohu8GaiJiSMwJqf9jieQc719CnBrW",
  "key3": "3Qwj5StJ1ce23iuHFWQtGkkMHhYZRoeS4XtHEvkBZVT4FRrGMvMFetLLxD6hMRy84LxshrVpmt1Q4SsiHbr1dA3k",
  "key4": "47j24WWQpEn7SKADxUZzj5gjj8xqyzfea83xz8W7xgBLFtfMMGtj4kwXGMt3VvqwCTY8zjEFfs4Lv7knhHoAtfw",
  "key5": "4FDpwbtWPRQLYb4C43NwLwTj154xT1kno7z3amp9HcQPPcR7ZEjzPKyvsB9Jzp9qLGw7X7qxofgEkT39EWDSQRsD",
  "key6": "3V6TCGP8dtjc6DJaLH1FXW4kMMYt9XGtoL4p6jtpwmndHCTZstnMCqxWduENTshe5UUqNiMKc5FLjDWhQUiQJijL",
  "key7": "56wgus5KQ1F8bKzsX2Um5B18i2sCKf3XgTs6sZjbht1qM1J9uTGPpaWf9uviX1PpUfZb6dDTjSbEUsRtM73bYfGT",
  "key8": "3CDLQ2ETyUgd6indZ4XAzvuzbwNPTpdsauSEL8yFTnQWKdS3N9FDNRXgkrZqwFVNRDPwYYBKRQs572W64YLBcTLK",
  "key9": "2Jn5kZzCqg8Ybg48uF7yGf9pUAi2b1emQqp3U3dTADJ2nL1ZzQkCT2g7T8Q675NBkp5EJFdGTSLtsNHF6WCPKMi6",
  "key10": "5qMvBSh8DknBB1NRfBeYocVN4Vc4UR9jDdDU5X6dhoZmG1GN3D3CoVqwz488RVLMSea96VNjFhZP5QVJ99H7w3gs",
  "key11": "2Npxu9tLMLgahXypisj6g3vuQVexhoxbPTJ7eBnTgGhq7q7FTf1geXmMnyPDd7QwrnLgh4hbxCQJM7u83d3ptGBo",
  "key12": "3isd1tMSp4JRiLXZDTKgdZBShion9vWtBw23hrs3Gbv7ASS9DPfvcDncprdNdT2qH5TyuLFJEMDRZTAvHkKiyybt",
  "key13": "2yQn5dGUTbQwTP7gghZWqAtW1UP6ZeVMefLdG35SgyVZXTgnVbJ8asPyVhUpCKXFD4EKfMhBuyUBVkTrJ1rsngaf",
  "key14": "4MLGLzzAjBwqq7hmhjYBwT8nXrTpm655Hu5zWymWjmrXv5WHQvKqW2aCYQKGK8k6WdBndnKMu9uMpaXc4DvVHoPf",
  "key15": "3TQzpCXttwUiirwcTgDFJo4FsqxbqJKrPHsqvK4gVisFFp9cQeuXzs3RjPT2SBxWwua1FZGCdN5aUskAsdBaGfm2",
  "key16": "29dVbMvmipXj6AagJHdi6EVX5jvvyXWjDruyH1LmfWLakeXLS6S15wLo8FiNGKYMAd89pC2kz6c7H6bqFqngPNGL",
  "key17": "Ug4yCXWN1SQ17FQcnboDU3Mpq2afdMVTQMz3DF9kmEbhnXufnVTFowPXod1hHwAE86uHLwnZHw8jeyTWm7by3Ju",
  "key18": "4YFdsSb8Hv3UN5zi3PiTcoV86qvFJRKnUTm3huSWWCHHt8FVPHtckapSAEpGd7p2Dos5LUTWZWb4N6x58SVkFM51",
  "key19": "5u64voXYp1Kj6KsxEJKZ4sCrohmA1nRsoRxj7GKo8aAhMU1ro7Qmbkwjs1SnwuGqWgjU87HahUdNv24qBppEw67E",
  "key20": "52b7Q3UCcEAXXPz68QPCL3KA35nkfzf1p2jjaHNqTjNPjgrw1a4oHCjfyoCg1xaDKjNxYVb3D98yecCtviU44AUy",
  "key21": "46EwRnCQDMCAXsZHw9n5hnewNRmoPN2JWJKbvRW3TQQ5MZYYEp2xzFGDkWCB6vN7jdpMdgouTrj1LTp1XP8e7ynD",
  "key22": "5P1eQ8XFAJJE7F9eptrhgGgGKkxFm6MRijacbchmRnMBJGakkcuwuYYZnRKKwxcxi8Fuv25xybkwBQidZHWx3KJT",
  "key23": "4xVeCtz8vSaf1aaanp13sjeaYxBoFYtXS4mcQoXxYVPXVF1KBgwbStRNXuAh1XiBXaaddzPU2DrvTCE91KkYMiyy",
  "key24": "4AE75iRCQTvE7g4EX7Hv2pXrLdpgEgUStxmVfGkox9peHngbq6ZDrqF8xMRBik7ucXVgxRHgMWttt2csmvhdcze7",
  "key25": "5hwnj32GMJ89EZF1vmUXqr2pSfF1ya8SnobbegoopjqUeZG3tYyKC77uq6ZSqTCnckNHP7Px8bGQHQUxYMscwwjn",
  "key26": "5PuoL7Dgrdf53mBLrEqsuKnuVmYz3CxQQmK79pnW9u3oW8SdFJRRmuYnyvF43U1w8MJSCj3XEFKSKM2fnngAjuaR",
  "key27": "5DphRinFuSg7hM73t7kML3QfFRJQjxhMCfVt1UnoaCPsRjvcmVkhXhsqRgSJwLKbM7HBhkS7AEKVfDbbpSeavy48",
  "key28": "L5ayBRGNupBMSid7RCAmcB4vNb1M8nMRcNcGECvtc1rmFuv23and4VSsN9pC2Vg4cGFDCLimW6V8623ewni7Dsr",
  "key29": "2j1P9Z5TYMBWuayqwPBevmjq9CKCZzytun2WjDRpDMAgVdvLWFD5RHZ5NMFQ6KFTzoYpwK1GWda5Njq6R1VAC4Wz",
  "key30": "65pP2rNKVz4PUCQSBQi3M5iUx2gJpxXUnqV9Lh8yxhEPPpV1bKPby1puWK2jW1sSnzPWr3reuJEqxZyNuDTgNUyk",
  "key31": "4nFfiVEBa44eui8He9VM1Y2CwnejRq8ahjPXWjPy45zYdmokJKhd2Zp1yQjydExerGFPAr6ZjGcAywNPFcgBkmYt",
  "key32": "65GSrcVKz9FYHXn7yFNt97xhNERAgvBmfyjzmF8CeG4eSTiCkL5ftbsFHSm5goNUn4jfyxfxp6ukA2kyryDZeKqz"
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
