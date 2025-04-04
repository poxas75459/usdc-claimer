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
    "4oev2ERLttgNttdzCaQwymEmiFar9E8MzNCXJAQLcdoqMccmcGLBtbE3AL3j1d9HsM2fWpTvT2baQhHU7H7JbAwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53zQsW4YeHNJLUcTUkr3qf5z7mF8C8Pm7DLUuAYfhkYgeih11oak3tkDbLw8Ce5WQNgtp9bZXTb6kd52cb68NVLo",
  "key1": "p2Fby2kVDmj274bow99E9678mXgCroAHxW3cqeQEMGqWcadWqxrFw6xBYsf6iLH2Afxj8o4CZwi7bX8BnQM6Jvf",
  "key2": "4nxu87WgsyVxZXDFMBLmfHRS7cCoBjSH6HZ3ceVGgmf5wQLYwuZVzKWE7qNQitGeazUjxBXHwFAafDaHJrHZirJn",
  "key3": "4yV63t6ffiPWoEr4L2toA9AjeuwknP96vtGnWzEHZYQgDTmXmqXGYtNWCdLGvKgJe4Qfm62GhCHz3YgearDA8DbT",
  "key4": "PjHUGaiRqbDHH9yFgEdErcFgFAVsn8AA7gEftApnEF3LpvqBzggPERbfBECuS3cFDk7DTLckHEhbsxANZLBcbNo",
  "key5": "jVdrNvstL3zCBAkuCjgkk6s5u2WhAXG4SgAZhNTZD17TRmaniq4gChvhe9XJnfVCrP78QcqSrxANdAhpNCmRNRS",
  "key6": "4b2ATG9WTKx7q7Fr7WPEswsfiYA2QJ6a987mAEWg9w5L771xPt5hWV5t8TWe8ChEUXF4x1h6WaURTTAfZQMx9W4C",
  "key7": "3J1Yhv8VxPMKTDXZF58Zk63Lzs1zJnt7AzJu99Yx4jFZbq61xZyAtP6kpUWUgerSgMBmcQ3Gofowxnvakvpr61GB",
  "key8": "22RmbJBHwJiaZeRatket9NfL9B6xBn6KEXxuNuVxUkp99HVpGA4thzReD3Y6UbADnx4yB3F6VW4XXh5my7XrADaW",
  "key9": "4odphv8VT8qqCWPJi6i1fBGesPUeYHcKimwRv9V2RjXy8wmRTPNZNaDWG7owGWUkcLPbe6iofrUviFL4UZKxuKCs",
  "key10": "272thBFfRcTmDJhmiiCtVm52yBk4BheVRRx2LseTqq1KCgeibbnMuaPRSGduRuaALPJDE7zNNmaG22PBW5mUVdti",
  "key11": "4gRLWdEeSkZ2Xsk5K7rUHYb4H3TEhzRU11eUTFkny1skYwajroftw7VsvDmEGZr2ftKGTSPn3LmKPFsbhqwkR6zX",
  "key12": "5Bc9LF2XdexbCjVRFWPSxkddvvQq5THBN9k8saBfDaxEj6n3yCPrfm6CwZB47BFc7FSGXXBJbjgbfGbHJYHoCaSc",
  "key13": "2YDc24FZuBLgcjwWqYGFJNryj2TTmYB14BZWTYiMPxqyvzD1Ywvymao8asS592PinBEm56UZktrcCcuB3kiYNQxY",
  "key14": "4txnBm538CtbAPai8XanyVxNk2JeBUoykFCBvD17VPkiUQYKQx77asxWaT8uLScjzCK31XyXZyzFxRaTqF54nBMo",
  "key15": "4a3DGRC1XmWWKR9C3XRtxMTXuHKEwysK5ir8XoLdTkVwvotaadGFgvMn9es5RkbZFjVcvwxLU3QZU36mvoWwcw1C",
  "key16": "2hV4WMZ4PFnEsoSw7SEY8ezCQGEbFbYVtZTNGZwhVhUHTjtkDZbswhevHn5msLwTgffw1FFtB9NtqPRfQ4T2xux9",
  "key17": "4UKwxvxX2sGSKkwqP79XM6g3Pfp4zFRssa46cBsJwu9BuoUfhS21nxhoFTTHTnASdLVin5fKrqBfh1r3QKiHesf6",
  "key18": "46ecnSwya2c4cUhRf1VrYDSCjZ51aTmtz4v3CVhKH5UKnnQZ5HWfDYwY9s3vKmtgk4ae6iSDQxNPKWFSxNm2XT2q",
  "key19": "WMTqunS5U9XVDSYiyojt84M8oxVk6A5YF3BgcJCaHD4aXxmx6vpfCL1oNCeNkWusnmN1PV8s5MS3uaQPBBBTgbe",
  "key20": "578fd5fKpvDekBdeJqiUE4zG3j28b9ARPzGLCCmLBW9Mtd13T8s5KhzN36QWQvyZcamsRkVyyGBaHNZEifjWQu4N",
  "key21": "sy3bVgoewu9YfbdBkRfruHzZMyVSsiaVN27Dvonoa5TVqyzCE1GPH6zncWMsTEUxw7LBGJrqqnLTuSfYhb3Nprv",
  "key22": "4CMmp5jkQijcHCjzHoUHXaWKo91Vy28hVX5QtCq6W3is4NspVmB7VHaXUP2H1XsHjdNNXAn9BHnrnKiSQ1NBL7rc",
  "key23": "4oYgp9G4k81GTAqsL26Yai5ti2Cn7wLaguo22U4LSkVuTjJjgrVU5NPdMCh8cdGncqr9RYhq6bZeoPVs3xmnwfxi",
  "key24": "L5G5D5ciNqHQfexDf6Hiz6ebrrp9SDE3pttygqz4YSvhdLaFAwefJGJxccgtwB9RzXFWaip7HFU6ddNCS93UnJE",
  "key25": "46AH2jJsMqAinzKPFNj1PXA2ejg7kdynkri1kuaCDpwSELo16iCbyhAeB1tDMAFpNeKF6yg2Q3ryEgJ3aTQjiiW5",
  "key26": "5xpJPQoTzsAd5qhHAfPwsj9XXzen88DNzvYws7ffJxZeoqVGT7Rsutx7nVGAWsHo72Z3tekkAT1DyQWqDjtQeTzG",
  "key27": "33oEsoo4pVhgNF2m6pVxLh1TmRJeUCo3vfnrej9T1BxHYbybgKycLqhsCM3vx9DxSJgnEcPXY9ZTP8a2ws2KjHKz",
  "key28": "3JY6WwM41bUaafXQhA5js62Bf4Wwa2fAXrJ1u5MH5ZepmGiBsn3ppZLMZdmdhWFEbXn55bvy34E8g63YWwf1bfag",
  "key29": "59FnnpmDPrnayZWMBRemD3abRWA4LprqKGa8sisTK8oTNTVSLAVe5ofqw9fxMm3NG5qbpkwnwm7mfd8RkQc8Rtc8",
  "key30": "5W5vVXfhwn8i8S7ufzRcUPVaccWwvgw2yi1kefHLcBL9d8wdkzBGWrRmxD56EwzXtkPDe43HrxTsNrjZuVofPVuj",
  "key31": "57McQmbt4JoKe3AZbdNh4pCbMjxUaFWq3NMtgjLbtJz26fxM7NRtJKfcwDsCv4uCX3C1reabRekhqDQpvB2gJ8Vy",
  "key32": "3otvzMAsrJwnSihJKyJKhmWy7av5YTFBShG6d51knCuoVQLubhBRTCkpSmbHZ7mVmVJMbybfszvbCiWMHkQNhfqy",
  "key33": "3rgi5a2ikDPpbqFeDoTu1RqDa9cbj9aXNUHRw9ASbLPEM1BTTGwxnkT7Znni2fCnGgSBrkdBo9tvH8WNGKo8kMvr",
  "key34": "4r3eAYjviTYkm6HwRjLS3LyKZTn2R8NDQFq5u91XHzSs9qEoWLpB2m6YU5SB86xCYBuQegx2wZMdHKip5QVprem9",
  "key35": "2xzqdinFVhCr8hyNQ2hd3xGYayAxxY4KqVV3ZJQxZdSByXK1BZ4QuiQMYFXiqMu26fpJwDhBe7xN4DUUFsL8SzHP",
  "key36": "4hLwiEcarfWZnfsPPNQ8mnvyBmaFsJ9JhFkg66Nkdfyf263mY9Eavgi89626gXDCLQK9ymcbMvPQwXFdz8xiE6x",
  "key37": "4GZy3mNAAUZQdKdxf1fS3yMnsHcMRwk63bJhQfABb1rkwXcUqCsic2w58US22dGSrY4nmTRRqi6M3wvMe2LJ8dpT",
  "key38": "3hL8g1nfPd8Y62NNDhYy1ktSa5i7AwdcvspkyAX8tV4ug3JiPgqSJKJ5N4uegTGVjihe5BovXH5BpmrSAwkdCn8j",
  "key39": "2deqJxDtEoTHJkvaYjgvZ7JTDtV9RcsBwGhYTEReqYDE4ovYsvkBWeCYjqEPjaMkChJcBQ6ihVLUbnEHz7YAPRfT",
  "key40": "3RmJSeVTyTRPTf1RyE4CrWaZGDfKm6RrDz8oq49Q9vgwTm5K5wKfy6ntNexwjLbvcovTbcGJXTSS1bVgLDsQavKb",
  "key41": "mEwvuaKFKbwgS6LsefYf2JGLntGbjskYuw4rUJNA82gyRyVnKLjcBS9GbMvy4S2BXjkwxZahySFp6h6M9MbS4T6",
  "key42": "4haCBdgKyAvVRKgno9dCdCcpohw4irfgBaP7pWk336GZQQ7DfWgn9ufJDKbzGh9YyMXio3dyKaWDNNgvmcVmk1Jw",
  "key43": "sTFxsmLBQ3SuNpFffLDyYjEyBPkXKNJuHakrc1SvEgQixfXcM51s5pTMSAdZeL8m6uMAcHNhNAV4AsmJTV3iUdL",
  "key44": "6Dt9Ue9vhUAz6AqaCjSzNyyzJf1Yn3EQhacSS3QV5ac1ywdMB55uceR9uk3TRc9WC21XYo16EH9PRiFt4doUvdz",
  "key45": "k5W9shA1gaK1vqCPp8tMNgGVj9qihfAu2QZLwpqQYkqeR5gWZw485HKgrMGH4LTTMg5juR5n9aCHLcQvVwphMcn",
  "key46": "4aYZZoCwcUSbnY5Lb9FzYZUnrKF8frwiXb7WehhucB6rNh9zEASjcWV342GV9ZcYddFhsjhgStTGpwwHPCisqoDb",
  "key47": "2CfiorLYZ4ENWHpR5qDXTjtjBcgV4rGvdWrUkMCj8U8eYjkNrWEhRPsuL6xk2RjdeePQfkvg13AeofMqqCtcwgRg",
  "key48": "4G6RHdNnFz1CnDX1RpnbHxgtJgLJLGARtH3e3eLNCXbgM2tubzzQKRJkrFpMZ7MpFYfY2F4VsXmGnDvtpMUtL7nx",
  "key49": "t27M9oHEg2Cxmz4UpvuRAxpXpM2WNZkHdp6yMD5mphXnSGPEM1DWTpNrxe9CnNtUYGvpnJfxfLh7VLFRMmbrvLC"
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
