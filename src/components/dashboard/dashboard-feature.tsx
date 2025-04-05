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
    "EKtTuixLFiF5LU7x957brnV8qCrpksAMFzpjZ784QiG6o1wdu3r5zE6AXLz8GrzvESks5PJkS2btpcXyxnAQFGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pbxEyw9NdLZHQQNwUbd7SDyANoxcmsZTuQuEGbeemxfaBhME2X12DyHhYe4TS6KuwgptwGE79inyaghrxZT8asL",
  "key1": "3apm7hCCSJqACmzkCCK97XJ7ML2iZyg2irM7RHC2JFXK5S4BAiE9o2ZZjEUy3oZKqyFFMYYNqhCvTMWosBScWxPF",
  "key2": "4oSAb11sZXCiGpf184kYyajYyGbhCnG6Xii3HP6KvEDuZKh3VFSSxiHojtp2kNrzAgY3LC24swCtGaDZhPp9K5WK",
  "key3": "3ELr2zZ6Bd1aqnrscPpi3dfVxRFipzvxj18oRXu7dzs8ZFVsL2fnsnNmBHHsqD8GFThuCZNN7jBPTvbnX3AVWGNr",
  "key4": "2iiqusXPP6QrToPkRFMU4RvQvzzWPEkYDvzRNwVSTQLVmTMGZppxvH7KEpzqYXPPXcE3NXp1tS6aJbt2CmhCj9C7",
  "key5": "4rQtbDrMjKz9KARH3wnEknHTtZzy1ZM3NPH2qd2A66YRM5scrQJauQ8iM7qvTSbs1mikrEgo6cauSH7ryp64a4uB",
  "key6": "UjYkF1Aq4z3wMpnQY51wxwQuqD9ajqniQe6ZadZz677aiSrGV5wtRN3jkEBhJEYTo7jeU6Pr7XankBAXAtFfUJX",
  "key7": "3Ve6BPFFsgEbdsZBaHQefhw9NvrypyZHTMy3kNzHn9kouGw5ThtzSeCLJmh2sA6pe66CKf5zsrEiwDxTUqscmYBa",
  "key8": "4pbuJeiWyiByLUud8Tpn9BLJk25rkgTj9hGBpe7kErhVNpGuRRFzDgU2FXpFM87TzCTtCugdE6zea4sZg7FBzu5q",
  "key9": "615PpMTz3HTKtqt5BytHHZu376dRYGN94oS4bWoK4WtU4UCds24u7bzkVR5MKfMeQiCzYzcWvxsDnJXvx41xqhmR",
  "key10": "3Ed3V77LSr37M5F8eaHueKyHABakrmnbQddw3GVT66c8UVkyQW1fGccSFSyjKp2gcv2sHCwbwj6bv4D5w3sL7gxu",
  "key11": "5TLN2JPUg9Bbxo6GkTw7v9xfLvkUizCMsSDgxcH6Si7ubR4nLpnbUUSgUfHhhcQW12bGBDtP9fJBYHtXgrv18gui",
  "key12": "52fKwn316MaKCeEUgdRc7364SpKDyYpBbuwTgUJgvaUsuzWqg2SVgtt3zFrVszLBjTExup7VxqxGchmuhgCPpU4B",
  "key13": "4GXGXzhWqvsTuvKEdhyq61HGmmCPqWR4xxCQgzYEnXvKEiApv2Wk7mwy6fLbS9mqEM41faVsnZdbJip2uHdjoLEJ",
  "key14": "WXrPqSTQPqYcpJwkHw7Wmuq1kPbnDzXJBeHrE7iH5wwByYWQWC2eP7YHeiiDMFXFiTgvxgYnZ1KpymdkDwozM4i",
  "key15": "cReDkFfneEtjDSfsCPjGNej72c2kkWNiwFTWUEvBBjGaWL1KL4PMFYSLFx5yVyWxZYUCbt3QZE55gu4DuwWgVWJ",
  "key16": "3oGinFFbFEg9LqDCBrVwx1tDQizYb2eaTDN84fCdvFUtREaVmxhsfvpbEoDPPzWZcEkGymhRgFQ9PXSm3WbD3dDu",
  "key17": "2yNbFp8SxcTF5FqquRkvmfQ5jxa2xdjrQ4DbDwnaxvAnz9zhv2vhrRBLMtq5dYipzQANEVrqNz1eVzBspDPQhgr8",
  "key18": "2B5r2PHEP3rjdCDXu2hyHtU6idQG6u2hX2zfGJrXK1vu32hkAFUoCnS88hv4pnz9WTEwy8brLvTbZs3y5yEquVeE",
  "key19": "4U2JDWRStMPmDg94j6rov86n3qsBbyzWp62VT3cfx5N7MNQkExcyE283corJkt6yLL8t1TRJUyThaWrxKdiy6CDL",
  "key20": "5yZaECdTwjSSqZGYNBuaV23RnnbFkKYZAaHNK5iLsNh7CT5Uj4PqXz5YtmNVtTD2p1QrHTvpeB5vhV9SRr18nhFh",
  "key21": "3Ld3dAmQZ8y8vchqEGv3rvJWcVfMtp8LHqV1gMz6hzTxGSvtz1cWGkGqMHEEGR9atwBnUKjvFdjMdrMRrDAYiZR9",
  "key22": "5xTNhgSCWBG3An5MJABVJvE9kcQH1TTD6wd8qt7QdLJMJ15cbVihvLSoxcytd63YCLhxdTJqJRTkrQJ8E1aAQa9r",
  "key23": "3k4WDSWsXxaYgQMrBbqx1CEe5AW9u753FiBSyaz8hfRupEmqkre1gBznY5J7LM4wk1NzT98gkVTHvBMuVE6wSWMy",
  "key24": "4Q2cZQH4cDWhVFdgeoT1Cqeqnjiccmwm8oxZrcy9SnyfAux7PB7SRh3VFufs1BdyZN5FLNgsFPSAHCNP931KiU86",
  "key25": "3xZkCPivWEPAzwNDH7naU94XGWXM5PZ1XR8vJUcnv6oBa576PkEmSt6H8jLeMYD7322kWdNCnR8ZgcJSxCwEhSAz",
  "key26": "3FjpLnmkWdbFytzZESdxTfj3JegZEWKfSedRB8QGhom7iPH1cnL2MTbmbXXpGpLYAE5VW1nVkhiJxAbSnX9JWXUD",
  "key27": "5pgbED1zXiQU4QaReRebG8yoz5yUag1EQffYb9LzL1dnt7Pjc6K8gPyg8JYmtAKd3avfN3sKRAJSz5h4vRZpZRTW",
  "key28": "5VjJDfFyiMTMojLgDHB8sbUQG12YnMoRwhbVj6idYZjYJZHWpCm7faRLg7dHA7moJkgagsQgBNni9wuNtHBJsBUX"
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
