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
    "5XWnGwrj5UVfbhLjjjtQbDUeZ9umLvADQVvW49brjUZ9GXsGsfxp2irtgSSjEuc63vySd6EG2uCqNigvv6jnJAZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52fyrvW8ToQRcxaoULFj2UxLn311dQDU2BiZ2vAB1kr7mvWWEUb6bNpFG59W3uRhL2GaVKtcKWqGccKYDWPN7jy7",
  "key1": "5eA685U7kVsB5P5XU5PZP7SKdztnhgQZpVjQt7MCm4p4FefQF5AY91PXX1QV4LQtSEE8Qwap2JJjcwXYErPZR3sH",
  "key2": "3qUQnGrW3noM59yrFxu54C7uhrBKmJr99SQvRL8vcXWjfZKUsuBuvTEsjqbTMSpvghntAk1WvLUgmPGuLahARP7U",
  "key3": "4hwu6PvZZSVmNk6eu5MosNmGeNrnqTdtLHcatnTG4XcfrK2hWu6AmHvjzns2axEcDyE1cwMPXaEPodA2Uoa9BaMB",
  "key4": "48XsXrGAYuT8HHcZt8WkmJnSvCcs1nDK1iKBRDwV4BjvjY2KoJFQchAMMsowSoLmTdBarRKBRb2a5A8NVFUCkxTA",
  "key5": "4ZiAn4M6R8HbSC4mHUMJsTDmvE5LrGP1NcCCpPCpxcP4LZ5K1tFnZG1DS49M1LMpV6c6jGWwjCd3XAbST9U99NLY",
  "key6": "3338cfXd8qDwHZ9E9RQHVEn9uj6Wb9RCswcqkPUcPU3TNKB2UXiNNULDeHbnZ3hTE6cnTEzgCTePPyvrNe28vNrh",
  "key7": "JkBPGrfbYxYBLFZffjnPmJSLZujpRjHi4WTpLqndqnobiz7kvi25wjYHSHReuefCh4kQiMEM9schsnkFaUPWU3Z",
  "key8": "2JqhFzXVZZxU8NyNjfoDxNCSpRU4cR2KjD7rM5JKPPnysJTBuFDmP5fqooE1hihYFcDux1jbuB7Hetukg95F2pQo",
  "key9": "4stgZmRzz5XxPvWmibNL7WMdKQ51zeFR6JxKodxLwwnoeWRWK3jnP1p7drcia66hDTtpN8mJNfkxXfb17WdWQHUp",
  "key10": "2G2877bNAdr57RhsT4RUkcArZjBdgihN1pnkwtYWj4RikacAtfffNQoHohABnRrtBxiPdTpQM2DTjDP2csY239HR",
  "key11": "5CYZs4ngeUQUAYXSjHdJmb3n5q3r7Hn4u5xTrwT3q11obb5gEDWkS1SDQyzSCJPe5baFgcg7avbEj8MirVD4JiMf",
  "key12": "5Ziu5TaHsJE7CPKNqcPdF4GmzeoYR1Rp7FRhdgvC6Hba1BLNP7Y4qLftGu5JdFNAAZhQ4A61bqwkdjd5mtzsDFu2",
  "key13": "2haxFg5k53WzWrfpNrXnmWAHuSzSS3FrcBq94wGP1cBL5CvkmeNL914PT8oBbG664nFwW69Yuk8baeSfJFdywZw1",
  "key14": "92eTYqmmcDcF1Pygn3edAdm3P753Ffcs4qQobgS72YEZa6JWNg3vpNAkNF3HERPwnv474qdme8gAczct9rYX2p8",
  "key15": "3sEGMopnZ9w1e5FbgBkY881nLzpXMU4ugNGj47L94o43kkNU3ipVrUTLTeQv6tnvVxeXTUtggSnvFVnygSQCdh7K",
  "key16": "3sKbkyerqSpzcRCpbNGEFgpKkXVNh57UHdXmEd51cLRGkSjRk3Z35HapsxoLb2xYESuLJSRxAkbQqVinTeZX8Yi9",
  "key17": "3J7X9fvVtM5A39vLot3PN6xptw61Ltt7jykvArCek643H5NQAhnKQCr5qDinkr8LCd4kbwurB3tWio4h9F3WjtH3",
  "key18": "VwEfcgZHrbePhKKVbjvdmJdMGKaFtD7CWZJiPNsurjK48m2fMVZYofT53Micv1jPYD7xP2ELhr5kUdhC3JKoBAC",
  "key19": "3kSnwG6dejD3rQLFKhWgzK5Qg1R9CcK9BHdGhbae3B8QaCCRDatgyghtDZNuEtYYS1ayER5MgXp3nJr6XzYdPJhn",
  "key20": "5T4EtsJExrKiUK1Ps3bCa8CK8AXYJH3TKGag2xKnDKw4xaZ1azNfUwHnyeG1Rhb1iXRjLzGJPmBdKU592NUmJJjx",
  "key21": "3UiKhKvAwdx6Yvp2ZBxdEZQKXSF1Zs6ZSJNtWHnds7gn2JC93fHkPgRhB9sFtrzdnqconTX4K8M3z47utneUSNks",
  "key22": "2cFe2snK6qnBpUw9Wc2jci4CrXhxuG7TYkjBJ1BvNysyXEGSGjo7uDhVN4oFr2Lhsa3V7ZcQU1SPtQyxWYcc3uwm",
  "key23": "3dSnHyboecXNQUC2zkTHyGGhxysqQgj7NHPAnfkHAuDGe7yA7xsEFtMUG5YjZLcCjN2deFJERpRnRpRZ6CpZ6umb",
  "key24": "2r5Z4p7D1st1fXvki9Gjn2L22C5hXqoBgjfRZ5VbWVGGf3mBu9LVkwhVDcdutWgcmtNS8LuusjRQGfDe1Yyno6ap",
  "key25": "PHUFuNqXdwjzhN4P67DMcEBLkTpjdW567v2NoK6zn3jmKJGhjmpaCo481jxK378bkjKdtLhuFdR5ABve3YPSnGi"
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
