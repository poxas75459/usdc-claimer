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
    "RtgxQb3jBVyrgBi35TH444epGt3aZKREpfbPxPUFJQpGMmonUB11yqwfzs9CzjW2WAmYMu6XNExJUcLfS3ccQVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GQDmm8DHf6dxyWGetAHGi7xpJXRhwkHTzNFwvr9egm7GtqKNHu2oxbni4aFWd33pad5BwExS3TAJY6ML6fGaL1S",
  "key1": "2m3ScdRK2x1aV1nBN3C8TuFicc985MMuBAZ9E1VCwfFoLEzAu3B62VyuVjMrAW7CSVjCdnkwpYWA2BUpXyW3y7PY",
  "key2": "2pYoNQF5ZayYWUrbNasV1fkvqs4HNVEH2EFF1Ks9GgpyBZujXAFzUGFKbhzZUzkZubofzvcwSqyKGEa763wj8qnE",
  "key3": "2wsStuNbm99ZCG9e6CKsPweHyJpx72CQtZdwEtmbjVDsAHiNTLUY92npchbmygVjgN54K7FwWSquTg7ydj2LhCAV",
  "key4": "2hm7JM6Wa9Ytmp7WGwoWgBezrqP2Jx6Qs5NJV4w1icDJ9mwz7XfrToea7eeHoRjQngGMCrSpeQcNdULARJbxmWCb",
  "key5": "2ncCA6tiAyT1icEYgCkXP46TmtP9ecWnFpXxj3p52MDhjo4FFLYj5e4V9t1fG41vVG9GgRg5snhw4RtHm3JKWCN1",
  "key6": "3eC64mDN9ZkUJgJvTLhybe5gW9Z6tqx3RmwjiibUb86EwFRNgjdw46KEQ964cotb33r7x5t1YSNCkazDa5bGtq7o",
  "key7": "2jctVNZ6nTH15nxZDkbePGJRnujS18kTRNZLaLV3QTuVitPKpcAVyy7sJKJZebKqjdkZNFQ3c1xVyV3X3FWMcaH4",
  "key8": "3w8x1KEmojNaVi9c6tF1FmFpn2BPva1weQT1hhK6PEi4m2kiqwjepS7oWj7vzHg3aWyR6HW8WDEj2GVPTBMZ4Rmn",
  "key9": "377ooEFNN8P1YMgi5FHQ2eaY1LKTwUU1vD82WbdR3BqzCf9BxiWr19avJrtvEZPtXpdEr1ypCq7rkmMC8GsPQwXa",
  "key10": "264P3jnpYqgQNBaHkL6tPpnGhS9Tp66wFtwpnpfwxjtX2xBtbNdUZG98bTTDNNwXTNo1EhrvbmQx4gg8FAjPxNkx",
  "key11": "jnxMjpf4aQxPGo7PS1Y6rDCqiNKzjXtWFL9JotwL82wK2eGdBLSSG9XrriofCy3RGzPdth2n9dCv1wBV9i4tqPR",
  "key12": "3PLFnSkvc6SQH26yNrxmBsb1kNkfbM7B7sheLEa2wWX6nLQpWH1HxT4FDGcDRqcdAhRk3DjiiQSEitFoEyxHJu9S",
  "key13": "3u668mtm4737bK5CtpLwxtiARB5jGdFLEmdNtb8jTupznvPyBokAiiC5RCHeZYqmXr7SZpb8CEXPsn8ussC4sgSn",
  "key14": "4vBJPaE3tuBMGQYNZrs3ntaw6wbbMMNdN1eX9STBovDfT1BNBoBjMXTemRRj1RU9E5sbHJEjzd3MNxtZucSLdNfo",
  "key15": "3e4GYKMnMwz3ziaPY6qYPVsG3BhcdQSGua2wHoD7WjJRg3LK2ZfPfPwfajAHMpWQgG661vn1YVCKjb7YGSt2dZPi",
  "key16": "5LADJfn3vaAmCwWcbgEkXbEsE3Y1ahfgJ2NtZxEc2S9AAAYDhnDjhqZgn3toe48Safh7zHWh6Jh1wgVHGp5eGqWF",
  "key17": "31RyYFobYuJnfLyqA9WXKawpsD5BDasJn4fHKJGh9efyRy3nLAHHEdbD7BQR8Arnw6rFsNWMh7LN7kc9q9MJCpb8",
  "key18": "28phKRwMuhMviSidAgu6N4iWJAZZp1zt2JSM4qj8gJnabLh71xLZAG9E4jRkuWYpZSSzFe74w86GmdESUgyWkZ3z",
  "key19": "noKRMntWJgKg194qW95wkC15worQ4CpXe1uu2yaeUkikv3ALCJLwPMruiwPUEy8URGZvGMmaK6UHzWbhqufFHEf",
  "key20": "4zeugScKgiRTE3bdNYYnnsX4jtYsHeVFcjDNM13mJF2PzWTEuprhKQPsfxvoA8aFT3xPmJYydjY2z6rUPY5FhASW",
  "key21": "U9ahxHFnEuTJG4Qpm2iXw8soHCxg2NSp58v9LTgKMA87fk8DRLKBEv7HCaYEvJSat9dQozxnJEnw8VacR1S8Brd",
  "key22": "3oraKrV4XMwpzePdRtQ3HDrxc2QHebEGc4HA1sDAXZSfuR1iSxFbCcfzspccgLj5fopqdi4faoGnb21gX12Z3cT5",
  "key23": "2cmP6S231t3h58j3NTApDMECWrGZNp9q3tbZMxndQDvqmdBGMSWk8cXEH21eavxUVFm7yQxrNYENCdkGyn7hkiVb",
  "key24": "4LjoZopPtiznsQRty32RUdpz5baAnXzn8A3zXCAmtE4rQ7YVk79gGT7gQijrkJz2UL2xAfVcMm2YbVEpYxErn4X5",
  "key25": "RWqRbnbhozJxEUkbErAoMDzGQ6A3suRPfk3g1fhLpjrMZ6eLkdtnoa8rmAMzmjcQ3Lr4KyjqmrAVchXoajLeEPF",
  "key26": "5fATxbwL8hwkC9kgqPuBtYh2d9z8cPCB3KCtdreecaBJ9xLsefNy9fMZGVj7qor7CAeSPq4qCBdoLHwd1Tpfa4Ca",
  "key27": "GqDrCTA4ATMtPSZce19BsBNCr2mgFq9mNfJWrCuUBXVN3P9pFhkXwTVcmnGPf7TQcjUJNzfzih2eJ3oSoQ2qFeW",
  "key28": "3aXZYzSGiJnZFsu5A5dmbeDuaqBTULibniP8wWW4xzCAxLAe5CkyVP7PhsUcX8pZhLoeLce46BMv5F6i2YFQUkvB",
  "key29": "3RBid7KejNa7XqHPw1kSPNVaKukSpSWjH6bKqmYenmciS4da7EKvy4ZkAmhcpPYqHWYsp6BHdxX3tKWQUdqNqNwk",
  "key30": "5fyNmn7KdBuaCXDZDowmjNQxt3NGqgbkDR7hoCRXF68CJvsJfqJK32jJnPP1jB3KhK88gLRnhknpsTGydocbqoAb",
  "key31": "ndXbBYbQ79tUNhkAAkZMkzqCtb6PRmdmDcBm1PaWWSKkMAqsm1pK4GUiFvS8q87tvipYTDeQL4D3MX4G5ZeADtt",
  "key32": "2Yy8V7hH18Y8w4SE59kiukJa9PKVJiJADvDqtUzBpU7qe9fwU8o5MNVasPqQkUmtZTtaGi73yY59oPruHe4njWgm"
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
