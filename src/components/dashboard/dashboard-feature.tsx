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
    "34dZF1B92iqh3RQD1goso96RnaTsmw1dPERw1LjySSTs62Bo1dyQYy8JtF7XisAxVbkVkkhY4khSsxULL27sQZKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tLpH8DL3Uk7C9LDw5rSzXP4JtKRyhcQq2ukiYjKmC5J7ZqLNEMvW3jKeTDui31a1kMDbirtx7KoV1uxYuEbeqEB",
  "key1": "67cY3Mu74KCukHuP4yUdCngnb4fy9G8G9MwpRqMZ6PQc71t5P19NgpThjJDo1ZwV4rcnW3K6Nqx4S7Xt39VKQHcV",
  "key2": "8tc3mLjERiVA7jDLyNZAiMVDaksfCxgNyzLUtLExDr5ZUX5AcXzR2cDgd6rg72a9dB2F6izqteh46jfV3ut638k",
  "key3": "4ySVRiGB77ECG3RXWpsCeN7sG5yKeyEbqDGKyqSLnWoqTue883XjRcf36rZsaUApQ2VHszhHiz7MYjquRi1VyvSe",
  "key4": "3voiGrwRKeApH6SgwxLdwZvsmguRqcbqrVTaZ87sjPY6cK5QHV9829Rix7aqWzxXVieLxkB5LWgWQ6dmUb4DFaax",
  "key5": "YmkZNGLhCsuYDm3h69FhtSSmTonXJVvZkwYzYeKJ15HemW3V7mH9AnWydAtUAEvHJ9nCECbc2VBTUeUBkm7V47o",
  "key6": "1JvALatoGniMyzqMGkT2dwGJES6mk4Lp3kRxs94Vh2nJE52QqtKt6H9LCwfXNbw94Y5yk826QpVD6GbB4NCZkJ2",
  "key7": "3pV8aAS4M7T24HjeSMyrVR4WDT4UZm6mL1GTB4Aq9NVr7ms7BPoAbPquN1Dw8Z8rfx2GF6fSrMwgXKgvbsDNr4i5",
  "key8": "CQr1yaVu6gzZSKvefQswtAEZkKPAFMSpfPH9ezUrSNYwVr7o7Je4ZboP6dp29QPfkYa7KmkLSNUSLY4sWhLVv5Q",
  "key9": "xNKMwdmaEwMMtqFPJXcnkTvw5DpSQTeUX8GpCodfHwPwAjTzfjyD36eoXkXw8sVwh9Ef4NzeAXuaZfqEKHH2reB",
  "key10": "3mTkH7t563PGFmB5x3dWHs3c2Ugmrbpv98tJFa2DBnXHhffoAyfi9q9p1BPAqTGQWVzPsNC5hbDuUyxEx5QiRbvE",
  "key11": "52mGWVMton11mEg4Z8mCm1qEut7zfnhZ2xqHjyYkijecuU4S6S4WQhm69WSAV8u2amxEuKEBDXWukewT619VynX7",
  "key12": "5Gw6wjtjjSDVm6A7SsKVsJwd246Q2VYKoww4V8TgN9SwLAzjawuj7UNKTszhCrksd5jf9n3Sdwia5NeCJEiwcdRu",
  "key13": "ZUz2uwS7rmE4QQiHvebeGviykdyp2VWXgWwKfuxV5exuCZqCrQct5zU2cQodJncw2s2RtzoWRnpCy2yKQ5bgh11",
  "key14": "2jA8Dd8hMt19XufTf8Mgkv7tMPYUXwk1TfSZj1HAXgvsugGvZ7Ry2QPDYsQLzkEeG6gmWtXG4ADLMyTVPaKFFaPb",
  "key15": "5ry2p8HKXxZJ7rB2NhoVXRFr1EXWZeV3sh4X7jid6Rrvpe7ZnxyX424fUWnLJnaYYb1BxXfmhh1Ctv4A2YAHECRm",
  "key16": "g8B4PNPse4Ccd2yaCeVHjJG41cwEA5RBH9upzeBcdYh3WN3ErMqmvkYZcFFZAWgwWfBDyUi5MXg3XTPUWpi5h7r",
  "key17": "mcHZZXvy734iWeFeUce9MEYsT5duWh6mAiZeNVyUNV6SXTau6zDsW5sRrBP1SttwJsocJCzfSApvs8eM2jDDNMf",
  "key18": "3NtJ12oUm8J2LjxZXRWxe9u8v8sQmKRgEK6yVGVimp65oQgRKtqYuT6pvstgH72pJ5fkewtuYY4KrTtnsEwY6nT3",
  "key19": "4NBjBXjHbDaBtVkCwry5cn5NYhq2vRKx39aT7p4ooWnV5vPtEmEvtrBNPL7d4UYsicBArjJG9pS29ei85oerwQ1p",
  "key20": "3aUEYqk7xcjpzceSLarosxXxc7ogV2AUdnajLCcUx3EtEDpxfPLdTPw3gKHnnkFojctrHcsAcArkKQSNzbvQoPJH",
  "key21": "2Q9EWBrxKJcjnQxivRB8BkJtrPFFNnkGpd2D2ti33jqZruxAde9xcSTGVxWmfpvGt1bcGgRf9ajhuRCWSZEw9y4q",
  "key22": "F3e99H1d6UUh7YHvxP4DWEGi2a37LorXBaXwsgz22pP45fLb5Nq3erTdYMeL1LENQnVZLCwfdUXGEEMKZ3EX7d6",
  "key23": "3KJZZghUkRxBTGYbCq1escPGc4QvsWH1UTfmBCFYgeoHRRZb52fCLt8HB3FRfjgebWaeM32weYoBn4UG12ouWtVn",
  "key24": "31NX3MNH7vBRJz3GJy7aJHNbWLy5pJoskmcJM4kAVKAK6wvorhzsLfJqBCisABbs43Uaisd6FmmqVsWxWZYMUqFm",
  "key25": "2A8rMexEMpaSgMyK5ZwacP3QRWjhG7XUtCKfr7eQYWqWvJsqogg3VRLVgmoSBTr6SzxdZM9QbtcHVLzTgFmR4QEA",
  "key26": "hPtREnnwEh8qJQNmndbLzbPBZkNA7t82BVQwK5MVh3SgdwgzhhaZ1KuCUKhQBwHr2hT9xo5NSrakJ5Fw7MeeMaN",
  "key27": "4Lic2NRzqvcwE7rFqb3TBUxo8QLVM29YoaNjM91Y8qxySUmTHRa9CPDjww8CvjFjbPzErVDZk2wyj1JYMibWyFRb",
  "key28": "2Bj6YoKewixgCTaDiZnXNQcXmQYxvcvEk9zxHRstKgoktoA417N8FA5eCRJhqmJSKrSv99wacpBmazwgmPAwRx5t"
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
