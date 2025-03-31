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
    "6LrgCyqXRLJc1rS8sNqNb3VHzT2bYn91PzHTfPBzfYKNofbGMe7bq6cWBAGANvwznA1JHxv4sh4s22MQWubtCRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X4kkiUwXX8wwN6XZX7xLQviV77j86UpY1uBW9kPHuFBKYNoZjc4ZfzCVxteFQxjCrG8q15FSUithtMrGMtUhGju",
  "key1": "3GfJiAGshBz5UGQs9aZ4nFY4DR5ZTnc97nWLocCBnBvjV7d3cmtdhyJasdN29cWCeMVt3N3MA4Pakmj6y4pmMX9A",
  "key2": "3BDDtQHS7R3P2AL3nyXxHbqbPHyewiC97fSmjSZHot68B5yaToRUWuWifQnTQSNnLqk6MvCwW53oASrdS9DbDLHA",
  "key3": "5obzJqa1PswxpRMzDKTs1LviCYrrEK1iLFo6eaeMBHayrykkwjx9MMyyejDQD5CEyUuiSzP7eYJmkp2pvC4A6o66",
  "key4": "5wFLuFammHFWX28c9QEP1cAonujUGoh9xZy1PbkHWZNaDRvueYtYP6wnFzuxFwuiYFcQE7syBufT2y7QfZ5FcCJM",
  "key5": "dDchMSNbD3MQjFsoyzNEfcUh3DExEGY8STiiCHfW79pkhixxi5SFDCGEmrrzfSokzsrHgTMARSMMpDzZbcFXuvg",
  "key6": "ZR8h4omHqZjzGBw9R3Pr2Zq2NDwvpLAGb6JbabyLqLv9WA8Pt82466JRoasxPv4GeuLfzsbyieuND5JH8tpywHT",
  "key7": "5decdduTRnDLQ44NZvg8Vrhv6395DwfqbdF38kuf5QYLHrDzsFNxS8CdkdG6UiUK4BnKjcidVWabdpqQBS6idz78",
  "key8": "4Ttxc5WQDopoEY1zrTuHqGtQGTSDp9kL43T28qUGgfZBsZKhR8PGxFuy6KaQorgYLpbad6jigam39ELuegteXHtE",
  "key9": "5mAVQeASTojs2nzZtYDcZXwzEqzfPtziBob3g3JxWtAeiefo9PCwMgdCWPYp5oQAWsQpACDCkpDza9mscXuYnGUb",
  "key10": "r5gcFbBvo5ULR7Hgw9YtuT48ERn6aBEZ8FQD4LNLFk1A8BXVBch3G6Jskhsi7MqKqN7L3jWMj1sYiVMjMUPNR6G",
  "key11": "A5A3Uxg5X8beKFPr2ggGRQvS5D1taNYFVyBPXLxZhEkpErCihH95MAidQNX2hRP3ffjpcWc2vPmRkMBdSrBCC28",
  "key12": "2bBqovavhZZDM982RD6QBYPf9rVHw4bUzfZnj38ocVoTWfo2kvR7kRCGZRK9uY6R8L5SXPnUgAkcGdxpPqqy4FA3",
  "key13": "4jKz7sxwduLR9Sg1WJ6sYbXoX6HwbZaizNY2i5Y5ECagPdYemheRaHoNfhbp3tZCoRbJwLTpdAdBH8kiAPZZutTY",
  "key14": "5K6xHYQxXgVzTXcfWrMuv4KiGQGwnogoPJy8rBrGqZZBwWx97nApy3kE4HoqUZN2rPy1NDr63BzG1y3DxzT94Jky",
  "key15": "hannef9wLmPPhzGZVuZBwXjtqybzRHJ7hDvSwLhwUVrum8aa6H8i5WL4eP5CiUFSYjrHqQpbPLLYtTB7UYDKEcs",
  "key16": "2CNScY9s1LZwyDSqW1rk8UJoemAUUpGJYd6S7PpUsnT8zPK9ATRfnFEif4ACqKP94GTp75MBMGkMSrojRkH356jK",
  "key17": "5hvpUUCVYMTQWzBC415b9t7Zoc7xNFVFfiWUUoAJC32PjBpP7byQ7rCuXJ1izp8v9UvH5pXTixwacQv5DkpZ2noM",
  "key18": "4Ado2vBjHhd2CXjWqKQTZe4htk7Eh9cxFkrKzTRnXjVPEwn7MeZoMHhZufc2MqJBkqbpv9ZDLoDKw6AKGVeRbb5P",
  "key19": "bpJmZXgbpoeYZR82FqoYnv6DoCXfHfWaiyGumYsPix7VNGPAJrZQAyhE2TrBthuxhWim78VS8ZBSHNUnxCYpbUN",
  "key20": "4H3VUN1Z8Qz3L6JNjJ3JuJW9jgrJ5Kou97zVcFM6MhjgXAw8KrcTAYKgJRa3JJBbudMTTteSPuQYW2m1cXnpQaTg",
  "key21": "4yitbYYDhpF2k3dKou9suCkCB8JuPUb1h6qrndppwgPsSc2aS2FcrnNUaLwFKVLXs4cr6BQoZq3F1pyAcvTCggUC",
  "key22": "4kBuNNDj7TRzeTStRJ4MRtZGKfLYMkxV9Kbg7uF4mWpbT8t7oR4bSZ2tkjiaE6jaxmy8ctSo1hsQWTNXzBnrA4yh",
  "key23": "4UeHCHPXiNsd3hNqU7KhApX29ZY9dEV2DEQLoBXFLEtwbPWdRCDUJn1Sd2bwzfp33Tu84xZsyArbTraM5YGnDq4W",
  "key24": "3cTwxtXKrtMZBQsSVa17XbHdmBVtYdR3Jh3GDEkf2owkCmeuT19CpFPbyxAXyw2Mi1cJNoVyvDYzxzRRvCnyJK5B"
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
