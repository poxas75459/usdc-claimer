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
    "5Vj84ZEDPjB7y11267xpNcgk6pAdd2wk1dH4u9ZD9CcAbvXRqG2RYrbfa3pvrB2spEBDV4fQBSND8XqA6w1SQaa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S8DjAk2agzFFS9HASbagQbZbe6Xhvncncy5Bf62nZAK5hswu88YpELJU4UsTNwnRs7ofJYDDgXQbcLtovHjhUqA",
  "key1": "3Nixrm6XFCwweoHxPx2FaXaeTMA9FxmCSbp7szc19TwesZjmyDiZu3yxuoxytWCrmdXAwVGKQ91N7MReJ3K7FrNj",
  "key2": "3SMi7VAZcN8vpF3pUHha5sKTJNMKo9NAspE5G5gGdsFXcCzFogxoscZMR9jhPsofoMoAZN4jLoLwKtEwyBLrPtMY",
  "key3": "4ZBMgv7advpkfPxaeFxc6oLQa6WNL5pAyNb6JNeGg4Z71CmPFztjJPDWiZyq1fDtyuvtjyjEMurtYjQuiixdGaCt",
  "key4": "2ngMNQyFYMksxX9TmW2GCd2S4PhkTFyBeuuUmV7UXzw5pCwWai1Rjic4Dt28VXUgr3LnThXgoAJN8HVNyepSFLHC",
  "key5": "23ntj7JZ4Xj8mYEiDfVnRuAEuj6xen3F4wbntkwvqJ2215i6RhTu5nsWpKzYcReDMTYXWam7EWM1rCyQvXMf6qng",
  "key6": "4sgAVtx6qjPwMcQENK3GzVNsZtVmAtwhEEcxy77B57MX5qb45gwrhgzxu9gDizxDw5vkSubJfBW6ChkkGotukb3Y",
  "key7": "23u9zaXg3hU8THfhh66rK9H1Cg9P5hGAWWcxpbdTaXT87sV2Bcpgi5MyDVjM7AHyiquYnFiFXN1tQAjRgoKqySGX",
  "key8": "55eJPW2p7cckYdAXsiMXZo5yuU2qNEZZL5a321TVPPsvJvYwaqg48auN7EVE5AYYvBTnqngKB2AaWDwtEsjde1mU",
  "key9": "4BZsEocTkLCDXRNLTiB6NH4UkNYQV3Vyz6rnB7LrajMrAZAEmmAQr6KxmrSoXgdeZirLqGBzPcTjHtTy3tEBE4Ur",
  "key10": "54A7bTTHufNtvDP7TSD9ki1bgrsQYMDKEHV9A8W7JXDwPDNWDZHWvscKkFRmvhSfE3j4Uk1tBS1Go6WwDSgy1ESn",
  "key11": "5W8ULvXsPpg3bYhh1qjBdN9NdrLNdyyoNCgKo4MwDZrshZp9kN9Pu5fYN2fbViNnrpDzVKvFBbwCLVyhbs4hFd8h",
  "key12": "53HpcKHF8wntMbd88a2uBkQbobCbCHCRnLDWUCmPA1qwwB2rVeCDfBSgmM719MFSX19GUbdbzH4iHwEZUehRAkcF",
  "key13": "414MNY4N3W5zFdHR5Va27CWxEh6dda5NQ4xmehmEaU1LQAiir3kyhDZ1i8H7cYy31XDGzSMShsUV7xa2offuJG7E",
  "key14": "eDKTHC4iNon76RyzTPDV6xEM2xobZ6TbLidKYyRWRYW7msTjna5JJzunXDkadRBVinjcjwS9GpgP7j5hdBYCmkE",
  "key15": "wy8sRiXjkGnbNfH4f8y9Kpfhr2awXZR4ZXSJap7Y17g93s2894WoCLaZKd7C3PpYGAZgi3KbUm6n7zg2j4vxLn7",
  "key16": "2VzwRBaMPteY8mavYy5zLQ5j2nHCx6BEY7yuR7cfJBDvufcnYuekLvBCRXWob7rjqqRPKpS2pVhhCuHjw5tHiG4Q",
  "key17": "1FRrgkcZ1s6ipyCK59GTxGWrV9rrs7jSn9WRfEuAWaWaLuUjsgyymdosCUpCmxVMfBiGsJ8PmCL6KVy6vqhiSAB",
  "key18": "2jaM4DAdUbxrZEwgTjPcmNiWitVTPH3HE6UL1yGFvjaCvjkxTFsSg12ET2nLoc2uG83ms3miNtZdVhmFA64KYUwi",
  "key19": "5ESv8vKYEkkX8jJ2xGecbCQwGxR7294EkpPjrZ3ZvgstDM76wHKWL6miQ67Rf5BPVXSs767ibetRonyHQCivGHxa",
  "key20": "vm3uaYVKSmeBTV2LpuWFMTRVFjMhf6DsM5K9VXWjaMkYJa3U3eadBhxrn1kyHEFF37feFjyxZehYHZVDiVQK7gs",
  "key21": "1MnzFLttMdpYpD7ZNitsy3SJMih5Msc5z7tYuUTQ3sW4QPw7kDc6egMu4qFsPqGdTAyHKX3VQHEi9FmcrTAdpM3",
  "key22": "2PsjG5Zw7TMgrCko1WmLUKrKGWmBxninfMPUY1m5nVautqhvuyMuCZvgst3C24VVihBUZriQbnHVdgz75aDx75tJ",
  "key23": "5BSVTf7HMeoBPGdw7YK5YD5Yc3j1q5RCuf1iABPSH1C42GmNzKJTUPmD95eSzGMkZwd7g5DZALnav4HvFcq1C3kF",
  "key24": "2vHatoXcgRLa9GGKnTpxmq5jAGDbiQa1CjUd7TByme5id8B5RSkC6Yo8qFXe28s2eEwbSyi8tsuas4oEgafTJ1mq",
  "key25": "2zQPp61WtfmZPCkWw8uSQ1ABvMSnA2aPaPYB5EKecNN1iFCLkrjxSQR1UoSdvoG2JSjNUd5GC8nPi4nKFQq9ZfzU",
  "key26": "3waeHKu2z8s5J6thVaaz33DDemd4kLopncsTiNJwxnCzKHtitNNy8iRfpWsWCyCzfD4vj1qCfPypkxAjDQ6bKXzd",
  "key27": "4ZJEvVReicsAxDCTp2BKns4cvZUWZ8vjRhiVwJUJRoJAW2jRedcb5gAWDzFzTqQ5U2eX7JZDe1uAERBLzvWh7Hgm",
  "key28": "2asJnJkNiPdHo8KaEGWt4U73H5dFFoJUFWLGe9MoDrC5JJG5vqfzsd1cc4CK6qZAwJM9H2dpbJeyqSGo4hbEQBDg"
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
