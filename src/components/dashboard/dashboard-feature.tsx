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
    "61LvSm2ZA2a4jtDS7VyJvofHgi3bpMavgLWNcqVQ364DpGqPvewG1QvBzhHrCmm6p5BsBP1xmp6dxfU2fvM31V3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jXeCTMroV67uyVCArjhTNCZN12Mdhe3ZKREXnxQqiUqCUZWZEp7YRQ49UCeMhHWtQYFtDo5eHAZnheH2iTHac5v",
  "key1": "45sVW1uZEgDmZXTofeFwRf7RK6xXMyB7eRBTpZwr6w9Ksnz6j5nH4xiJd5eo27xiut6GFDALTDsV4F7uXUvPeqDG",
  "key2": "Ef7Qvkvb7rmDrBYyWEmpkMThCZLLEkNW9yy6VAYVNWEZM9oTozoqzAnhjmj3txCXM7bVuMoWe22MUGzmTFCgUAR",
  "key3": "WpgKPhWE3fQjYYakKJEFn13RWkyE2ayH26KWCDaLRthHT8qHrqZZxTPuxQ2WDkvtmMPJWQGRiN7foL34rsqDsYY",
  "key4": "2r42gEze5jZxWR9vkGyfigF6yCY2P5RWPjKnA4W7ASwgex2FBYJDxhCRwPWsZJCzTm5CJn4KQUcFcN4WVeZPoz4s",
  "key5": "tqaSJsnjBQZLmo1kuw1Bmc2KtzgpYRciMJUKaY6B6A9c4T11Cuzuz1YfDJ74wFy97WVXKrPafD6m6CKwx9Ykg74",
  "key6": "5uPu6nQQVibRXQb1j5pkgUtrWGfG81RdsmDpxi3DzPjmCxaqezSC1vXchPve4KgHgTCyYVSpRJSRawRnV9babj5o",
  "key7": "2v6aJEW2CxPag3JX45mPk9EffZ3uR1Nu7CMoEzmsqNdx681Fm1eDDhhWCUUTjCWsj33c2SkurUHeiHL1zC6H2vme",
  "key8": "2A41nyGUDKkrRxENypd43GkN1bFehFWMpBKCoVsQwp36aJcQp3qHbxWpveCNszy317NhfzTSMxch6921f4dX18HJ",
  "key9": "4U9Tk1yd7zucRX9Y4vpGky6aq4B2SQfCz77wDGBwEV9Q7QdGFtuNgE6hq8iUDpsFsLVpj4VodeTmJjDA2ub8Y2cA",
  "key10": "2iQhf4LKK1pQoQNan9KDM5osDM9iWyrEY3FYf1uXEd3qbajYuPcYpDcYvX94Ku1Vcgayn3AsnncBod1pmUbrpUqQ",
  "key11": "4Bt4NrGqaBjAMwmy36cQ69XToqa89mXythRRnu7ypXJzQNVJLkMpa2VG922EGtpYKb4AzCvWJqL4vPDNBwE7Pvrx",
  "key12": "3JGfCS5yRNPVQCpQMhmqqqWqyGz785ypahrBF4mn3t1xeZjiZTuci25ChtQdQXEWAVsLyQ7WkjfkRCuiTpYVA5v7",
  "key13": "3L7EvLU9KhDkXrMDDearBTxA8TAPwnZKMYA8jcLMaCrh7BiiTYSAfRXReTj73ixgPFeniCyNSx6ycsJYaL7ZTTV5",
  "key14": "56pKxZDZ3NKxa7ZRQ9dBfwCZdPR2fLbUzhgJsMb5arnVNzWGZPcFjauEv4nsyvoxhWixmB2HvSEXmt3FJBzzmLDG",
  "key15": "5v9sZyAv4QLoMFuTYvyvHxbCa5J1m1iWapFYNdi9JRY4NZsWGopfrtmj1zh36Lr8GXWfpB7izEanPL4SWAvan6iP",
  "key16": "212hy2mmTUXZDkX7EH7WKqVe2RvyXYwshMBpGaXRg2ow6ADMVP8iBjzSnQ52qFNfNLfvQY2AMrevMwdr2NUB7jJS",
  "key17": "5Sn8U3aAMLYT9EGkg1wAaGUHypNFMpgZMntetksqkiqLBHVvJvWcdz9JUgrxqEMfRdV74wS1c8WjzVmtqpn2zw4W",
  "key18": "x7X8DfgUDQWhyPR9rWoU5jo7s4nbiqSVHCRZ34WqHJijKWVTDgtf9EAZWKysasus1yoX1CgqsAzJQAJt1inKkhE",
  "key19": "2DQu3BLuD4HYyT58WzsgRZaU2xHw6gbVJNNCuMhhc76Aczh8MPyYb132ht4RNEiwrRao2yJiWmfdh6nFAmNPzYwc",
  "key20": "3SAXwNYJJjkwh8JHpRopiqUnoMvu82ywJu8HRddeqCRXUTrvu7ewuvNgvnh8Wb4E2vuhzdCMeFecxJfNgBneAz1o",
  "key21": "yGh1rXFoyZqsWxYcp4S6KX8iM32xDnG8gQL2TswRD3YyRtDBghTjk7ewad5B4qyyevCuS7gKSHQikkTdtyjw4h9",
  "key22": "5Nm8y6T9vwKDtp6qDAbeVjmBjALx5Tw13eJKGeVayA6AwqQwavf5qgxsbWsAWr6zMpUW8QXw1XWvbCLuq2Lm4tZ5",
  "key23": "23dVKwUm15eBDJsTzQjcvam8wVZ2VSTe1huoVkSx9wBydfpZfzs8APAXFZwmJDr3PmVPt88Ykrk26NZUiaTdpxty",
  "key24": "4VMo82L6EXHFVHgPeHJGbwZomumpXHybKfCA1Ng28ymBnYYL4Qzpm3Pp6tpHjx12GjQAkfkDLsDv7eCNehzfh6BU",
  "key25": "3cJEz62GRbC743WkHTLTNMxn8a4Zsyhsdci4aBCjMgaMhaFhq5uipzmkE8upknhdGWxbwgSah3bQfidW9JiMSFuC",
  "key26": "42CFoN6omdVWgpoMKZTkEoP3z2i4XvDQQ3P1ZMhCfcLQtSTpZUCa9itkhMtZbWY96BkLB3P11LivYdpwXqFhaq6Q",
  "key27": "33KZrF252eiLh7tdgGKxDLCwXrFLw8Du9gdXjANtBFkK5Q4QECTVw4kY7xi2mhRQjbHxndNa7GpxXbfgZowjSjWm"
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
