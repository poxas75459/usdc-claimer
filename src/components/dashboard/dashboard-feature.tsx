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
    "3eYzJjTFZA9FgGQFpq3SA3YwjEU349xVut5pjNJB3VpgzLLn14WrCfE4SqsNStXoxXJu4mvMzfxjn2ypBbf2gZL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HAvTcCCrnpiCX6K12N6kmChTjMJLKBvqSs85DyvWUhgPDiAbFuDAVT2NctC6eu85uzrng86UG7b2rzMbQ4vFLg6",
  "key1": "4gXMvmR2zJMcjMRx4cpnReTvUKb2xzTHVvAGiVooywgmQkXsaL6gJ6w2GLYVKizHUZm2bTegZZijrCgAN4RGPPMu",
  "key2": "5xTpPMWLBXXemLkX3ZDvsDxoMU8fRmxC84cbjc1K7eHKJJk9WU7GN1WeYN7MkCttxymQydtyM8sro8XiMtCihPoc",
  "key3": "3LErC9D5o3HEqmvyFW4pUVsDhFKndZfNDAC3Nmf5pXtca7yP8zuz3dsZ9QbatEkKixAXfL4ww9cXfUgBtbDhtGty",
  "key4": "2ZH5HcS5gVHAN2KnWN8JyKnjFNXEApkVZ3j2Zv9JmbiKoRGZVngaKZor6QtTeXQS6R5apipK1Gp2ZUCDo4rmxDdh",
  "key5": "3rUXXKdqe4ZXD8mGuqcvFohUeP6kdHm3KvpL5hf4Y8eBXLF5DC6gEq51VCNPEWJ67tr4E4Z77zi5p4M4tozjkcyw",
  "key6": "4YiFkvPhB23LFDsLmZzF6ZoXS3MfnbSygoiZBYfrDnuDbvNCVjW3YfkkEGJuYkCwpRZFhuJTp92C284GNxpZdS6V",
  "key7": "4wSubssv1WckAJJgFbJb4Qpwswfv95W7XoMAoeWQkk6MvDuEq3vQpENhpU1puPVG8kXT39egBTEo5axPhLuoztCh",
  "key8": "3ihCygJJycrWVkJK3KbdMTFf53zLaTEtM4LafJpYDaUMxE6e8os66QYaLtjNRsH6M5PZ2DAkFEASj88HwsXBktDn",
  "key9": "4iXVwhoLbDPFqdYfzoqw3uB7h6QHzA6QtYujX39VBVPFoXWmUj2VAdXTcy6kRooyeX3SQi16FEQ2Mb6Y5oTcJcTw",
  "key10": "4dR5dSZDbuFVKQ3915idWiiSS2KKc5vWiGVQnrurxPrrCMnRJ6Ymzo6Y8SzqnZekoux7spGe47r5DmY7n2XgMUTE",
  "key11": "4QzyNhuNjr72TcXaUx1kf3xCrVosfK3Lpaf4nN9iJCnA6ptjTyrH4MSfn5KZwXtjsaDu7ksqUYnbE8FN5dycYB3u",
  "key12": "5HCP5SbrjJre3jkTKARDUCDNZ6DTjmEA917WDwBkHSnxcP54iJYdFYkHjzdoigytYQyUJ4dcQ9fn4osQJuBtTW6e",
  "key13": "2SvKXT18SJgFSe31tsPV7LSrBfxBbzUQ4bCeQmzCcFAVFU7AWPSLZx7mQHeVcb8ZeyXeMST561dipfg1TEq1NgL3",
  "key14": "5S98XdYUMdg1MrygpwESNqQdnhRQy1vG7ZSnWbJjbsfLKuM5hz8uh1wEtHwrSeC1sww1KWzofS83rBJ1t3rkoy4K",
  "key15": "4gZ3YHbmFc1HXnpfEWGGMfZRt1vyzb7CbgiQUSrA5oBmV6w5EgYtiGhqKSWZJmA4wthJgypk6isLdSRAx9a67z3N",
  "key16": "274vTn5eVNNteBT7FQZQHNX45ZD5pfgc8hPmuwzC7nY1yiAZs733u7MiwSEf3DeJ8CWkgKZuFAHkjAJ1BMTz29bX",
  "key17": "3zCUP7GvpZ5Vfrfpz62gX5n9quswG7maWBA9Lz91BFDDzoQEzS3V4UMM8C1VB62nx8sAQLjEtt6pACs66FeoGF8H",
  "key18": "3Q1UdLzN1RLrk6WcpWs6ZxrhwsPqC9NqQAHmYv8hEChu4uHmFEs7XJN5k9e1McKoBaT7CEKuHuZ5vcFndz26LUCp",
  "key19": "4etW1dVMBAPdG3yZQKN3ihhwgrNtdo3AxrCKwoDeazwwyZPDWUxu3kuh26x6NjBE8Yx1SrRF16Vogs2LCf8767TQ",
  "key20": "XS7S223pcT9GU7XD7aZSjd6oPiWSz8ZCGKqZn32CxGQ2Br4PctTC8evSnqxT8ogEXh5Y2knaA2RqeGXGh2cK2Ux",
  "key21": "4NsDB3dLd6KoZTBrrjrNTuLDhZcSYL8Z3T26ZGxGq84nMZkS563iMm8hJFoX1CRmS9DjegxVHcUuckA2NozFXAg7",
  "key22": "4KkiN4fjMysey96wf9r9hqDSqyQm5p2tBQa2enBSZe1M1r1TMQn63VgMyYQxRbuPVhSstbDP8wosvziLBp7EFZgD",
  "key23": "4HnaRdcxHfSpeoSwtyywLJYpjkq5VWKreLr9iVcXNNwMjkopSKN6qd8yzpGQdifahjHF8C4sAfVBUDLfYiE839mE",
  "key24": "4C8VoVyJVUxDfzK9gc9Mw17PkcUajf1u1WXacQJH6Xvb97dhuwH7kDxyQJugKQHStKwfZnpaaPWnjACQ5y7GKVTQ",
  "key25": "56xv6cRBBg64pbuKof7ATfucTk4WjNvbqX2MSKiB1KJAaWDme38QvsRGMwrcmYEXJxKFgg4uX6wRtzteR1NywHE4",
  "key26": "52VmAf7b7NK5xTiiQVgMf2hwDKP9jrayRzMZU5uzVLJwNrnKggYtM6jpe1aC9wznXkEmT3o5fq4LMnfXA6MsZh3B",
  "key27": "3Qg4hCh6ZgGLeKfcfNNDwafD9NTtja5SD5UVqGXqEQ45bivpehvJz9h4r9tH5qspbjjqGLNWZpUdY5cvYpepJVND",
  "key28": "34tPeTjyFpJmXTLWiMouEjUoEJNkKDXoBcUMiPM3voPHnkFYcFqhh3z8mff2ALvSYAfprEM1zTCWpKnc4VM7dNyo",
  "key29": "PgZ3WvzF2aP4eagnsB8JhDRtJWRR4ftm54RyxoRA2PsC8FfyruXtPGZHcA6vFxBr8eDyt5bvgct3UQHJFN8BcqA",
  "key30": "4UC19mayWSGSAJipiY96LZEFBS5iWVZYhLRGegTzMTonfqcxWU8FXjeonY8vTQgdBK6FL4eUjqoov3o7g3cMcRXV",
  "key31": "4kTm2xCJoXXajkxKcb7YtxPQocMtSHYu54Nj2pi7tRMQpyhgedcZJdHKCKKZQ8myjeH5DmpkEZ6E59h16TkpkNew",
  "key32": "2ZTqc94pwJ6rPeR9pCC6TtgvMuMg8UAh2UoMqC3YYoGbTBoVVSFmY9TnNiyNnLCtpKABQ77e8PoAJKumopZQuoDU",
  "key33": "62PVnCdKtvK3vJYsmqeDx47qorScwXxcyn3e3Qs61yeGM3EtyGjr6wuJUKW2QZKWYYQQ4shGXGZ78nXbr9PfvqiQ"
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
