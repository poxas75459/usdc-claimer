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
    "2vbtno89fTHDUegsdGszB11zVvKpJFEXACP3N78ucjHvYpB7kMgnDbmc6a1Lo3CWLEC4ALE228dWCQVnZTbE2n4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZfxLxEP8fvi92q7qmbS791zwGdz24A8KYvmwhyDFZsGoYNsN3y36HXoHsSfFHHwPj2aybzqbs6FdP5kPBt3roLM",
  "key1": "4SyJMFVbFdaYDJmaA2zzMPanDJFjea8tJqQBvLzaUBq3jGwpsjw8a4EVUNxoBJJoL1WQkDysY7ekdona8s2aXr5",
  "key2": "5SmRbB8ti8CMya95Qo3C6WDmqQGnhNRcdJoBjgDCTf9BaWgKMbyVdHPi1jrtJzFb2vkzz8abYiWDVDvTc8XujP53",
  "key3": "2Pu7zNmZRZBqocgUsE1h5mDVMfMKQtJCiB7JSeLRZPHC2EuijwKy1fKi4GPJfjTVivunki8g1u9WZbjW7swK2Uec",
  "key4": "64Kky8rBR1tMbRgCvS5z43VLBW1DMu3MjgMWFU2LLoP7HVzTdxZ1kRupsy2eC7eC2aKmGR7AKeEb9pF5HHpf2Vm2",
  "key5": "3biFuKmxADicuZzCMXSSYF7Rq3MtkgREksmgn4rgDuUUrz9PKstoWUinCBg8fU1xxinGxwK2smdMTd1T5ffJBiSB",
  "key6": "34L45i6SMi9oesQSPaKxcQ9QmMqWDuiEMqEmdhxAm41gEHRx8QyZwUVrTFFrLor6mTnAnAuGTWxWinFc4BYPb4rj",
  "key7": "4yaGSXoPiKv6ZC6QFoiuysUeoB8L9g6U1eYcS1kM7JZSmAAL835EtArWEfKqArVBLAG9KZhrraUJcg5XUR1gmnqw",
  "key8": "2v3aSjxrBDxDmBy79oERtgasLnjRqDtNXJuzJeBLwHqeC62yPXWzHZUbVfeb7Pv2tvHuVBNxqiVBFr9En3RerFti",
  "key9": "34ZFVKaaMdxrXvjEbTQ5qdsyZeihjkvdCQNaTmp523n2oAXbkDKbQWyViNV2Qtnh44byyjdT4Et5yrGxz2cvZZDz",
  "key10": "2Zb4x16WimESfhQTV82RFH8r9Pda1YzX8BraYGbtXzo7Vt2sbRiAtJmbDRGACnpJniqS1jimKikzhBk1VfCWssBQ",
  "key11": "5ThmJbjN6AGYskArJGww7Y7HeNkvViyEbBhjMkXrsRqVK4tM7pdBEKR3gsrCqWZoMUwbSbfXzzKy6XjmtCfpf9Tm",
  "key12": "g1ht1mUdyGqu5LEczVqHe1mZpDQNcmsDoesvnRAgD6RZdJe6wVBcp3Qixet62Apxr9fwjFr44C3YMRvfDfBn6Bb",
  "key13": "5jDz9jrXa1u66LuXsgZfeoNe8qVJXVwaoDpZgCrcyXZfm6F6u9H9zbpB7GtGgXwMoGqa7ct5Kb2c8BYdh9BRQ4te",
  "key14": "5TDtiJTMVN1E9rARaUzttL3nrycvN2RAFHJMjJdRoaAQGqviqcXqU6fWQ6DiUkgzcPh7XBB1fFvV8XEUuthUaXh8",
  "key15": "21BrKE1qsnEj3BnXP2NGBtoshexy6kho8DP7QvaAEAREkz6pLXDbc3txFPATJ788JBfPoph6xpqHcNJFGNvX4m73",
  "key16": "4yN9DLXsMvj7gQSHXHQjNSjx4hBoKWQfHLxK61H8sbwH7CrnL3TYhAaw4b8g6QaSiFLpauCP5XUY2DTrwU8vNsfV",
  "key17": "2LJ76MhVH7CmicsWS3kz1xHBeFhDEjGswiymQQJvZcYmL1BTkLAdhDPK6yjySiR5mNgBt6xZ8tPcSUxwqPUYNTUV",
  "key18": "5cy22e1YLyMjfeXG75ei7BtBY3txkQX96kY4YnmuaSjpJWrm7XKtateLhxJcHunh4y7zM2Z916pAoeR9WS2mJske",
  "key19": "5ita1bmcNYrjeoFzEBfixjfwcgf922z78EHQoqTwfiNpQi5bZoscTC7JDNw8pAf8oT3RpBYpTBG3PLwbMVUwfrki",
  "key20": "4XJKqxoArEg5wqaFeQa6z6tSXgEJMGrQJfgrKkmCTyUh6K6GhF2gZrWEHuBkRZYKc3ZzkbAFghKoEf7ViC6yuc2t",
  "key21": "55vXngeEptBYKdgu9qTjNxVrhFxz6a8yx7PFdZwKb2WAz8gRRwTkt3AyHxdyJbzDojro9WCmkNjuJNxjp1RiDnuK",
  "key22": "2qbHjjFjDzsFHkZKyVeDjzHS4ShvPh2NUeMKeeUekmNAovoWL4sj5J5B9PbNYTaiYvvKhBvLNeDW95yWZZx4AXSt",
  "key23": "32w8AenaGq2nEqZobpBj72ZkpTog4V5vxCkWPViuRKoGz3nqpvB72rTFysFUu4RsiUQWmfTHcubN4S5DVShVAfbG",
  "key24": "TQY7iTwyFyaKG6SUg6cpfKs2ZCLo6dN9khe8MUnPShaFf4G2tktWqc7pnsWRQZdzKPwk9kWSPUhSM3geZxLt2ek",
  "key25": "4ZwtqfC8vA73mD8heShz3XpmtmpSzXPFSZ1Fo2u5RG1RVQTjerzEbAtW9FUVwGikzgQ7F4zt5BpVCgecNtqtbMZx"
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
