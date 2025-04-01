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
    "3PPpJttnC25d5j1RCcDSb5n2qsHT8AvrUMjvLPC8y1QZZ8tWnrnk4wtYK4stfqh8ACpuSmttpncx15E7e85VEAW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f18MyrXqS4a2fxfXVmJiqnTY6DprbYEJ5t2puZQh8idAGke9kWRMSFExfpKucF5gcsY2ST8RPhbpMBw63bgwFeh",
  "key1": "Ew3nrBKZPnyJUiijD7ntSztWUCRXoLcqbU624pxZZHE7zyENhqTuXZftkAibee8KBzQvq16xuFtck1FQj8zxG8x",
  "key2": "2dVJCZdzmUJFexThAN7NSLQmLo7u74tBS3CWbSXCEWks6TE47JMGvSByawaNMeL9Uz8LPZa39xcWTpH3hnvqYYNQ",
  "key3": "3QRF2bAj7KbUgJ9n4kUZG38JLdxpUDjTXny6Ck8rfQovWKjripxLVP99JawFFZ4fjJop7sjNhqm3nGrs2PnVy1Xv",
  "key4": "2f6u17ZdsTQhUmQU4BpNvwTrycbHarryVCSpxbYZidbLrcGTJJQN4HmisdXifZg9pEQSCBf1Zomx8ZL9F6kv8Guj",
  "key5": "9q1j1M1qYtoeQM9NbTEpYLv9jo6KK6NCotsprLZjMKfZej651fjR2JWF3iwJnZ4swJ6ZY6nyVYQykFzdyhedYbL",
  "key6": "2QiYzGBfebACM9iHnaRX2bcRaxJVRhNhpB4vEsjLdtQAL9156mfZLnSG49KTQqw7QBrSePT879QwFFCEhiNNRiQD",
  "key7": "5AWUQv88WzqsCid1CzSok3vrvnYyo5fF2sb8GJ5gvAkxdUwwgXDdfgEhCvpTkaxvLQJ2pHD7rodNfv2UznNxWyYA",
  "key8": "2cg86geQhyxrpRhgNyJ5QLwRcmRWAe97FYeFvCrJmWJWkDEVXXU3rZ4K7Lj5Xs9kDLp5EBKz1QbGf4MfSQ3iPQhi",
  "key9": "fvu3cgfeECeTuKJsKuvpWUH595RF7n36ppVUR6asZdeZVqC8rZRpsuNcRaznacdycWRoUawq211Aug3ZEK7Uiz2",
  "key10": "5RnwktZmvgAvrN5ReRPh3ws1SE2b7cxsPgP4XSx1sKK5Ji4QXweDWTMMs6tGSkWZfSQHCAKLmo7dX59ZVPGWrqj2",
  "key11": "4Yn8hYKq71RMWybNWL8uzwUfr1TBTpVV5mLvSPuLmeg3kwKR9bayLXCXmhc8bu9jf3Knm2CKYjHunwmg9d2u9FfG",
  "key12": "4pQKjYYjnAC4QWqXTUhRBRJzVRLu9asJ8PYShv3KGJKoqss2huXj8wRyDhZ5wx6tES7XkmvefEks4q8hB2W8oNS8",
  "key13": "2vLybtCrjiYgGvLqJW46BKiNrjJDH4JU2ngqnWc2RPoyiSm3BbKer1isuNvZa5Psc3HWKiKEpkifdQL14jQYeyqY",
  "key14": "3L52ZCdHk6SFWjqy3GafQ6Dc9J6iMtnpvwYvpTSExtJfqX3WaeDacnCX1DhuwLaLePcuYCgHM9QipdwVPDvQconL",
  "key15": "KRsqVWwwzkWxwWaGufnVhoi5KtFY5ZzT2Ha4CRNqTLVVbNYThHcVWfD2bMdppxuNEpZkbPRxiLhs8LhDikHedF4",
  "key16": "STKSnMLsP9uxyCzhUZ3RNfiUXH86BC2dLzqk8piB5ujJmr17s3fJA1DTtynaBw94NUmFaNBZnFicuhPk3YWwLRR",
  "key17": "2L64zjFMXtvmhsogANkbqiEGZ3q4hAhp76CMtoYZzfuFZicFuL1sZXMyx8jM7JrPEYqjh4kj5e4bid9pTMauKidJ",
  "key18": "2yv9HUfiXmHTiMVp3E9yAaLgJMEU8HsbezkxZLYuo4UvfdMrbsMEzEcpifxPZiTtoeF4dRTWmfRetncRFXmpjzYL",
  "key19": "grRYnVq7yZR5HHMWUBNS8PhDrwWNSfHifx8Bk9ZyrcDmoz1kp1J5ZHFSFzubAg9b451nrfLSJwj2QZKNNGudnsT",
  "key20": "46ASxE8VkUFvD7AdJ3bGDs7PzhWhNiKmZF5sJhvk3cq5f9RuiDPHdcGaJy6y2v17w9QbW7NVB2JVW9DfgHCqhSs8",
  "key21": "66Hynt72uHPYbJuzjiFufEZR4Lp3XGKYD2jU6LRtjX7JPPb4JQaLuaSKRoE2KhUaf9UgLcTAMNtDH1DZ5UnneTAi",
  "key22": "5wsLtymtyvAhnsgQ635xBwQHJtM4oGSBC5VpJc64ch3TJHeqDxUTUJ2uN8WgHwV3Zxz7GgfVhyg5oALikFX9mAKX",
  "key23": "3qS4uAQx1JDrsG6VjD7R4qnSrDQ1JK7jt1hXN4TwQyh2WbLFhBsETkKd2QUirPSkqNyemt9bMGCGDdx96UqNA3fk",
  "key24": "4V9T9XqghGqtrsekMVquojh8HzKMTczR7k9c5kAenHcrQyBbW24ed3wFAQT5JpM4HtHDS8abCDqGR3U5FZGx8QHE",
  "key25": "2i6VYD2rMHjMrB4TE8b3kxWrWaRtfSbHSrTWk3fHzfGziV3xzpnFjBefe6MYeyh6hAJuxbmknikMSbRRqGASFJPi",
  "key26": "66sdaZGWch3tb6Uj19dncwebqkVv3CK5T7SGQt9eBuzwjvKdmUidQDAdzW5WMDA6HDd8HnxtSNysNMGFJ9nLZfYR",
  "key27": "263DJw7iM8bECmeAoHGNDZvV49ansi9PQc6yWJcabZJJqV2ewBvYXHn36mMcMaoXFYpDuxUtAVjoVQuqD4Cgqirm",
  "key28": "3wJdzabW1Ggq3RfpwH5imEdf7ixsEFSpjxxuFBvgDT68iMLjiyZFe7Pwubem6tGdRHbnjBWeXU1R4ETVzxc58Ten",
  "key29": "23GKxgHeyV32wowDiuk8Vc4psXBebPsWT1twkXi5btrGxLpRCSEP2HgzzmawfQ5mtA4iwAF5YTh7zj7AAc2nCgqR",
  "key30": "3wQwP33px4ZZyK3eBrXDttxesWa4gLwQcgruktP987FXvH5ktJgaCFup3uPYcfY5BrJTR3zuamUyH2PnhEh9RKTu",
  "key31": "5BmXudJRHb5CfYJtGxgmSCRqrH5DSL1eKUZtzHSpC78kAL3X2R24QcYaU5MKtM2tDhBbAFZVwT4KrMhftYBjetV6",
  "key32": "4U12xofempnVWU4ar5nDhQKFQcbmAoMVDg6Jk9sTewLhA4Mzzj6QWPMFeFy7HE7MqhvSEzv4o3ZfgqDG1FNxo3QJ",
  "key33": "2QqtwwzCzr9f39GaC8BMNjUp8rZEAShwYaDtFvUByGKSbe4RDpeLMwS1WczwkxcAGtoLtMFGjx414TC2uLBRFHDz",
  "key34": "4ubtnveWwdrmBv9oLsWzg5u6BexBPBJFW24t9LoDAUW45CoeNbm2dGSdavQyaQ98jDzXFEiMMVLbn4wGukRnMu78",
  "key35": "4zSTjZX6gQ1KRfbGyprkJce2fV39RksD2hUMJf9G7hog5W8mNmhkz9dSAgutmPzpD5Zk18uehLf8Xt3RRf5CjZ8w"
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
