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
    "aFXZMCnu67exwsfAD3AV482GcN8gogpRYesNHykUuzLLnUWbKYk5WgptvhQsgzzbJVW6LxSesPqG66rLfPdpkWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RGG3jwH7a9BZB1VS7ER46VV2WDgKwcQjyhcCR9ox9uHS72c44hp2ZZxVUQ3SECV9WLQZt9xjzoacAKd1Ky3PWH1",
  "key1": "27zUMTpmKzvzaggSTWLfV1FQETWDz1zhBYh5iW1Jt2be25dGrHXBKkhaEGHra18gVRvkDaN6Eiw4PNoEQ96HVMVa",
  "key2": "644WDRpqLEjLb1A8jY6tVGswFC4iG2UggmSotuNYAmKvBqRP4UhvCsoRbuC6mEnhdXCzpdsNycoV82VoypgJKQTB",
  "key3": "Vtm8brB1hXYTGQrEByTD7L8f14YZZyAhWZNM2F75PosDR96RQyfaP4hzgjNMbd12X1qmChf1D8GcHpaT3c2QM6C",
  "key4": "pEqV7Hok3vT5EHaQsXyuQBgVj8dimQYxyzT5nnXw28zap8Prf9VdapFf7p6rDR1p8frxwFyhYSWGmsXcExvszBT",
  "key5": "5mzNZM8GbAHWT3iYDHGQRyAerUcpW8qdZ1WQHk4V4GLjciZApBeRpJ9LttMwfo2mr1z7ZKmVRGdbaSM7jtRwyScz",
  "key6": "31PX1ZCfPPwQXg5Hsg56KvwTVonGJZuvRFgrLWcpvcWhmhExN1Dyq9V4VvuE92Tb76zqE5EBHvZWcjQZvQQEoobA",
  "key7": "ZbrvFrAdCBKiYsFWMkqthhLgxs9f8k9VjMDgbLQceahZDAD4rNrwzpyNoT76ndUr7natX4RRfkRxxBNvfJtM6DJ",
  "key8": "GRkdAoY1cugbwK59kLiCjzq23bEmSDgzdoHUHkYvzytH5uPX8yY22qf9k7smpXG8EN7W8KzCdeDZndTQaZfsevo",
  "key9": "595GyGJKvefP8pyx6Po7rmLhdLhPTcrkCnV85qmkvva1j1gkJYvp5J7tgqamJAzz5XZCfMrbD5MRkbU1XuCGrDY1",
  "key10": "38cdtrKrGK5HJHGHdQjZzro9CWNoSmrKAjeT52xjCxaiXiK2yrrFrNvk1iVT6FeZnhVU2q433bgbEBs16CkRsKQ4",
  "key11": "2uK3bKVETTnGLnEfKEb3kTheXzdALfhC5Ue358s31kaacmgJw93gMsDhbte6TyXMd6mh43mh6cHfF1VL6VJgLSCC",
  "key12": "3F5xoJ5bBxKJZXKYF2v659Vi45vRMXBYCQKkoUhYDhghxaBzzqdkBYaNqKyykw4d1cSCWcFoJ2pJKkYCTNS8t629",
  "key13": "67AHkLkXHBBmsg12AHQtijKwaQT2HGSnwK5cyZwXBMcBWgpJcLXkNyZw1Gv94NA5WqGwpUJutcqBTyu7pkFsSBC1",
  "key14": "Q78wm611qAkX6x36DSGeLyBHziXz4kxUtd5HrC7E9tfF2ojmE8LGz29fJjXWUCPZRapkSZeXaY8mDJ8rb27G32s",
  "key15": "53GVXajt2K6AWkyJf5Bp2Gh1KFVSbPmETRAWsaHryAis2okzac7Uxv5mvCDyan8uWrqwzAzqj9Ejb8pumw2t8Tzw",
  "key16": "3eWiRdHeUUJVzVj3872vrM11XqHo5kAMcBz4qNFz6XcsSE3VgN1kzvwENcwHGovKzwT5geqH63Tvdeski2g2XSgn",
  "key17": "3y36rgNCxHQL2TjUHRzZbWdNEVZmR2kLDTfjwkydnZDKG5ERRf7pthDUYj7QrcRrjmy1WdkwjzFcLCepQ5MwBS1f",
  "key18": "4WrFo7X8PT3KBzrkiwKTiw2N9KabgzCxzFkmJrFpXyFbwRkxuzMwduQ7kiXbZYRUBkwSj2W8fFpKYAviE5E3U9kY",
  "key19": "678LcgejxmfLiC4XwWt2D5FWWXPzwmNgZ7zrzqAzxVrmtfZMRgdjvC5ZpZzuJ897i53MovPCLtFRyop9QTEZbQXL",
  "key20": "2qijuRkdKKAxq6FE3JaozzhYLM3gxnx2mXDiEeLF1jDAUiciz7SZ99xu2Bqya2ervnY5EMRtChzN7T1hAY2PYf4t",
  "key21": "2cphthvBSDu89QTeC81M89xSF7YJGCiTeiiUXofo5GZ79Z5HeASn5p6e1dXWZ2sWb2vhwA5acqV7agsDXfC6RGLi",
  "key22": "2jmqKLoC6wywqYgxLQWXJ9KWFTjxVzF1qXNkweUZoWBBbKG88KxvM7fMJNYAnzABD8nFfP1RkkHg83PBj7rVYTE8",
  "key23": "37WWPmvFCKW7yiDGDf5tBd8XfZYJL14dyrZb9QYEX3ZVGQHAqyFrfobRh3GJih4PiZ9NzEEwJ8pmdNWkGWoAGq7r",
  "key24": "35wbMrdy4LyCnfRbtgG9v8Kk2a5mxJ6cvL7rkMAYyJYcms9LbkYmQKuWmwBgqvMCMyR5vJ2bpMpufRh4h6FmVcsu",
  "key25": "58FxtTUNZtcchdf9v6d7fN1spb5ZRLcQtQF3hL5YjMF9UfbXNS5ez5neWfaYMuiAcLXcZuoffNte79BQSFGRcCoC",
  "key26": "2EBWNyCn2Xb5zyPFhozmUkhU5wCH6nVBkwrXeo8AMaWYYtT3SCNJdu71yrbw3nJkvyApE7im1bsGb6Q3pYmkXBtc",
  "key27": "sfoJfqQzrzwhZyBhKjKA71kVap5GL9Vq7yAX23z9djbBeiPmBf1VpMB8LpRAQSRQjYQ7PfsJx4XedsVPZUmfa5V",
  "key28": "4LLMMDrromzZene3Hc4LT9tAfDskHcjwVowepXWcari4YPiT2kK6WN1K6757YwGfnWYNRiSS7y5FvrP5b9bx5WT6",
  "key29": "1SUjfvKSHS4CSW7rcoamqAEmwbLhrAbCPzpheVF3rygZF8XCUUKz3UEusmj6defqX15s42FZymFjc8RHSAZjoKE",
  "key30": "3cf6G8FnNus8fZ5xRQcHWvo3EbVqbZgYmLeMprKKZxcrd2AKJu2MeYeC6P4W5BL7xZMrPtRdLJhpeQExhgq8dn3q",
  "key31": "3vi49LPKM44MHDU1K4SQKkGTnyrCbau7Yez9h8n2WjEyQzHjFaLQZjn6KQFnJXcTGF5BWozj7bzUCwA6DmQoQLAv",
  "key32": "2vB1EVeA5GZPdRwoRhvT35P7i7L1PSRYsZBUNAMR6frjSSkwhDkZetNWsj66USsSw44bTJK2VXvD8BwpkWwESKL3"
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
