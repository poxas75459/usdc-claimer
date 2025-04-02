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
    "4cxZUrpQ2k2ptYErUe3GVH5y1kjXEwxiN9i9hpvqMTSUvSN3mkQrqaRZZ9UW4UkTTYSFEZf73ESKX4oXbruMFusa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xMFT5oJxsuTSrrAyFzL3Tf3YAjXwpyocRJeNJCGetXrYdZjS3KZg4N3VhM29yUt3wdHzGVo8A6eAAZ2zwdkvgYT",
  "key1": "XBqTkmgQpfb3bi5mCijhV7KsWwu97VfXPn6fNGhRsmTY8e1rPndAANiXe9pdvSKiGHxyEnotBME1gw63SndV7xJ",
  "key2": "yQ6k1jpVcEoH5W9cHzbrY3DeGi976aB5fRhCJ4duBTTbTrBMBww2i1Q7kxjpozQgZAN5iwQUQwhQHaYBJQnMgza",
  "key3": "42MMJv3T5ZA4mFPCYve144rmAJkKi69ZbvwU8NXXtKMfq6mGTT7qHH2aNgBA2PR53xBFHRjMzxguer9RpNKxZWaE",
  "key4": "5XGnfYPa1CVgiHQZb6pJtNnzKQTzwv9iQ6mgiipcwt1wY48ZuaXcvJdnQw3kb3bcduAhw9zUNbtY1RMa4JBZBHWi",
  "key5": "5PHHXU3s4YGse4xwz9oq4GsEFebqk5BgDbVxhGJ6788dMzdSbU8MotfdV3YXKrfRfrodjeyAyCFeDL8SErnDqMej",
  "key6": "4FVdtkrKBLXCeshSmAtDe3CtVHP416jZXzpfn96zeHsDSLc4tUy54Pq2aHfWkVb3gZDq6xZZBwnMZ2ze2MZiJz9v",
  "key7": "2FJmVAAWofvcVAfPpELKQ1z4M4yiiZiCjiaPCwvtqhwycLWE6nR1nT6bHjr4g4sgpUZMZ6RitouTimSsFm4MMfrV",
  "key8": "2zKa6mk4DeBZciBuHWG4bXaXGz2EGvmVpvRbX35YTbwwJsvm9gSu54tXoefqkGjkNCTdFmQW7Lk3YkRi5aGB4PFZ",
  "key9": "4whGyuYJM82wF7jQi45nVXRdrnNqcQ4YFSsE2Zrw395jZQ9BCfWALJVpfRGJsjcfsvaBdrUXgesPSEUPrbjFtyx5",
  "key10": "5Ng4MZwRrHrUxpwxQocu4yS8YJZumuBgH3gLVSSdpg13HB5z2k1Wqqs6eWu8QfcgQig5sxEToxE93TvXxGYQ8jcE",
  "key11": "3KamzTDXi4pkMSKfnhSJUuPRF1WpXZMW5DnRGkKsE1KjLa9wxYzUUmcT7h4SVLGtGKJRuFzA96kvhb37jn4VngVZ",
  "key12": "6kzrg3TBz4N5kXFxX8WMUYwzYgs2ENAL3sCanGgzhccwUZMiR8ZHdj742nWX37JUvDUnXvFXJyLERsPMkErgMxa",
  "key13": "2sWVHewDcdmUVkk1kJJqvkausu63Wf6ZMEHvfieth8y6tUQqTceaorepJuLgRBBsj1M5LyKZpRGszBk3Moj8ro2t",
  "key14": "4QhdXnFCRyGVMSiRmcLYAPir5L9KR2V2RWX7oZkUnDdVLRjoEZGs8CQhDaccjs9PSSFphc2RNtwo2TNmk8psoL5j",
  "key15": "3pjF8NgqZgebJeMqoniKTbMFZcZ9CGudWgsXh7iHt7tuwPozvCqm84yhGM5oiWNNet2PKEA9z5D6X4d5jFsRfbWG",
  "key16": "2iFWg7qYQEi7TWEgYM6pNXxMaBZtHyFNAKgAc1cdaWBD1CxpT9JSe8TRuy2gH8wiMssi52C98QMFCsHzwPh7tsfV",
  "key17": "5qaJzw5MB6xcyWx6XFK2WZXi1LCpuhLpfFgsUzwmQdEfhP3ZhEN86CPCwjMbApKDRYSq3STSdh9PPz3R7PNvv2h9",
  "key18": "zGHjRpnEpcQwWPiJKjABDovVCqRU33QLEwyiX1khfTUc5opQmn194m6szFr8FsKb2F4BU1r6qfbWh7B9HEKR6EC",
  "key19": "23PWDScC5QYeeLhcFG7v8yNFn1w7XXKHioBXr3MEDLkMFDj171MuzKGUZ88zLzHRc5xHfXG4ovP6TStoxYbArUUK",
  "key20": "wTXEee3cMypk89SVz6d8Yj2SZuRznKHN1nAdaCZQVAmV7WnBFawPcmBbmRfn3YYmBuF3NYdN9WvjzDCjvZ844gP",
  "key21": "2HFs28npcJckmpNqskvZicXE5VEtahL9UiMyJcq6foevKENt2RRQijubD7oMEMRsQCzNJZPGLKBdMcJpBn1cjJFt",
  "key22": "5wZf6qQCQ2pmsvRaHSNWyb9ux74zfAL9yLUKXkahVrVDTEV9YaXcYGs3TEtgZJx18mcH6JVpTao1MpZn71DmAC7K",
  "key23": "2hTPPBgdRr1SLDqCqb15qBHyyC1YqrBAW3WtE1NVp1p92XPDkhMDxGHE9p73wHC4s5EV7MAZ1KfWLTK15Ns5w14F",
  "key24": "66pwd8jhJa4SkYpe43U5Tbp7kaxqy4pi7cYTuSAFufZ15YDt3uVPgeZP2k2sMHsTAmkHufAcEL9azj9Ha6cjkA1G",
  "key25": "3pTrnP5yPBmZ2vpzNV2RvhpGQA6iU73SRgyLyx5htx845Z9rrDuhR4w6MGfANzaRD8xivE6Tyo9WbLVkY76cAaQc",
  "key26": "5r3F3DZJv75FFxqzTTaecZVLTiWxHrGN3GDGqkjJ4PyPvMFjV8LhEddnMtDer2KPUeE7hfhQhWoQby9HV3YhxsDg",
  "key27": "3Mx6doTMrjUEb29ixMQh2jumYEuMHWXKtYNry1CfWVwb3rsYKhbygVozwZV45r58tkZ5vN6Zdboqf4gyH8uLgX9u",
  "key28": "5LjeUepDG9ttmiWC3mUYxD3YwEonDuiXs8tW9jffWQU6gSorsUDMn7wCZjYrE2sgYWHvnAKMqKZnF4EANTj5GsLg",
  "key29": "3o6UTBVs9P6syuEeQup3dG9o2ZxyXW3dL9DPp8aWLMTVmH64SFunaHKVvAuHiNsxrrLsiWpyH2R7inUSD7daJkBD"
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
