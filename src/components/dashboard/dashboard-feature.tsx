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
    "2zrK8aykY4o8pks8kgZfQzaX9TR32BxPRar9RWjgCnwSVychmySz2EF1DdLQiNangd64ehqbevoKrR2ash5iTjcX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HAJkNng2mNz4fp87LEYdd7JcfK9omVY5ESzs5vk7cew6uGGhYPUhjEhkYzBQS6conheVvQ6cAh2qQL9QGiGtM5x",
  "key1": "5rJ8TSAUFVjZUx62zTLmeJLXG46R5mu615Zfrkh2ZwKTurUDzekPXqxyAunvGdcUL9ntpF2iX9hYYgZTAybNjQdx",
  "key2": "3nW6Aq8JxkCxHbYe4Mv1fNAcQKx24QpnR8smcHDkD5Yzju88ACkdwJ2vqi1eTRwCY2623eKccbLXRd9YKhu8PHYA",
  "key3": "48nNYayZptZQhygVnTi9nwWBE5m9srpmT2AN3qyfaAoSPgWVgB2Pcte3dqJfFYpgTMPxB2dgcrkpCA5aBr5SfxaU",
  "key4": "2besbhgtYnKYh1YFexTgAhFa2hfCREAUUQ7TVXN48JFWVkR1cLFSXj91cEjUfvU9LsZ3jzKDS1cfALojM1rvsmPk",
  "key5": "2sxEvqNkbcEpX1iE2BvYgHGn6s1RLwT6BeDp5LVq2DMSikRucESu4gnNYCMnf5Cp5CdwoMLsDENbnZvu7SwxJcrh",
  "key6": "4H495YXwHmiLkhkszfnk8tA57B4GHP2CMfGxPevVr2BJc2nMdm8QrdTA8V9u51r2owMMtR3NJfv3TefirmqdiwD6",
  "key7": "3w1tM7niUFG5uQKhw1puFUdrF1KBzDTwvkUEBUnTz7ooBgvXs1o4kD6GfE3DWvZ7ZkwvpYFJDFLFqnbcifg2g2Za",
  "key8": "2kcy71HTxLmJpvEAkbnm2HZMRj8RPj8132EvBhbDzTfznwi3Mw7x1Ag3cSYm5GmHMLqLCUSMa1buJnahbeCHvTGr",
  "key9": "67Lmi4ePq2cZjkKW1aHrx7uMiTvqtcosibVaM316FFGHNDcS8Cdr8ZtLHnQ2m4xLfJ1Njcyva6YpHV9Z7CZfYvQ3",
  "key10": "3oKh3t6yFrb5HtpGZh7YDPjD3Tjn78Li266HJUhp9ZDJiunPjNNv9uaNrTH5oY84wSbSDTTvYxskuA2dnsB6h7ko",
  "key11": "oLJYh18KfAnSFxzXMFEiXsWszwwVbekhwhDGy4Xc1TEsbFdK6GPYQjhB5qnorVNXsb8YvLTZe6LQCBWgwuL7vZc",
  "key12": "QY3A7AREXoKmReVf4TkwxzjGBYHABdnTWLxQZ3uRG4o4Mb2X8CKnyAhcYkmNGRy4F9SpkuQHsQHS5WyemhQM2e9",
  "key13": "5FThFuEqv5C3M9hcB7H1mfJYxmm1bek1vJH3TwKzQwmbUDMg2Xh7pLbwRLkGniFXQWFZT4E6Zxxp3PCwGK1W2Nyd",
  "key14": "64K48pjVN5CB6uZo4ZeaN5yivv7g797KNrX4oV9cvCyJC6d6qHHnwKYPHEzmAYyEf2MGHE3vew1kWQEo3ksS5BkV",
  "key15": "3vZ683rNXGYw4AxbsJ6SFtb18JS8roMnNB3YgpZpMcF6VSqwxTpGo5Gd9uYhQEV7qNGhuA3DPpL83inpHjaWSDPX",
  "key16": "4WUp27j77iJxiDmEhMa169BdbqWFnn9tJvTJPc9YpT4Ptabp8u6NwVk8f96QoresatnoKjF8Mjnd8TtnqFV3TQbL",
  "key17": "fgqMn5ToeyaQNeAnzq8Cuhu25ygZS2WLtvGUBqXtqfVEYAjSpnbCrJdWWQMgumzkxmetcTVxj5M3FXwWzf9ycVZ",
  "key18": "4XMttQMEUY6WCr6RBGSLCJ9rGAkoHrUMAuqCy82cVnicws1aPANLMWCMJxs38bWVp2e6xBvyKpuwdPH3NCAQxyEN",
  "key19": "5FCNpNyWoykB5Q88MQomDiCdQWi5aj7fssrRfmKTCqUZfz2PqXMfTEZViC439N74N5JaQf8UMKpXEhSZWB7uHgfH",
  "key20": "xThNtei2vUzaKmWbP1TJwRBSCkWdBmhf9zPrKeMhu6nQqYJhqsTVCSiLRzSCFeCfWh8XtKDHpwtM88fBbLicF7K",
  "key21": "mRaqAjYQU7BUVMjK6YSBRi1PngVaGNBKDMnGrwwcsiXAqmnEEnuptK8oSy1tRWMSfW1sYm115AQVYeaVPYUbmp2",
  "key22": "faHNLoc8KMN31k6NjVWRCNNCra1C57mCxP3nADZNRTSKQYvWiG5yXspvYsXo1JxckCgZRSQkj9a6eU972oMod9v",
  "key23": "3W1RCromBkHCzmihXwPZ7C1w3xu3iywYpkaixswNUWhDL9vPyoQkYLjhh4Jnn7exw1fzrXToVUFvi6JaMX4RN9nM",
  "key24": "2jv6HS6VpARwRUEbHroW79y5o7dCCmmRw3Sms1YSP85Vwy6WrND4y6LLNgbkcjBakvapTF32cqtcH4FUgGzXYqBb",
  "key25": "647rN4Mxp3guGUU6CERGqHD4D78qS4qEJ1sjh2t2kR6MTQ9mY9StCSgASVMfJgCqT1w2zreUtmsyweXBNM3xJrYU",
  "key26": "kjNXWvv7CAWFdfBGFu6985LecfWFMJjjmMFEXUrP6tggCd9B5MhVjT5ToFX3bVENvDu5B1RBfAUqrec5EFitCoT",
  "key27": "2FNZz2bXWyLu5mZnBanFqT8CC2ETf5vGYqLpzmiq4twBcqP8TgrVZ37deqnVLc2zrccjZTqcWJt26FCQ8nbxLVFh",
  "key28": "2PvqcgLkoEnWhxhzyKBk2jmmym1MZkxa1WjugZSWFXck1he2SU8h8sfr7UbB1JJZbGndxFrAbGMLpcojydXJWT74",
  "key29": "5644PPWfNJrf8jV3bcxzrouJERfeqvgNhSGRnyV4fv1FnN9NZttdAjrGtwGHA5dyhsJa2SSqRs7PJqbUdc2XFn9V",
  "key30": "2SxtWRAxzrc5QDWuCKPmTLDHfhx8wKD9tahmsgAhmTxjMzj557mnuTg4SVB2U87PwGFjFmRYspN1sFw9C9frc93k",
  "key31": "5QvRcFGscFGDeVMTew4rQn9nRoKQ5w2wo72Vo3TqrEMB1w4EBF7YTB2LttkjFMeg88BK3Lzcgguz45R9XKBYnGMh"
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
