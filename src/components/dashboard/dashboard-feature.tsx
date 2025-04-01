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
    "2FHAJqycfq4a8mdTWGDhPo4YUrTX2kNHYX7hWZLBf94u3CDaiBnkfMJmHJ1wovkhQbXxWQ9uY467aMX3TUDXDyu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BNNu22hDpK4ZHgNxvN89AWeWxXefLodN3Qm3587RDBPD8sCWh5xeKTPj7F2eCDkb1WBeZqXBk6adBE6ztroXtQK",
  "key1": "5EonXvNAR5MrcAwPomnHK41trX8g9HNMfPaW8MtqtG9bJrksUqGpHNuaw6sSFwkK9qph9vvs7iTEedZFCYixaefA",
  "key2": "5b8RdBhk3AazUR37EmjA3V2FrChR22T3LKHZyCrS1DowdwQojBRGSXuqnkeDEUMcZ6T8NbERYpCZzPi4zdoZibxu",
  "key3": "kWGBrEgqkAtBQZwEwCFihCfxMVGoNJn5zfb1tARPncSQ44pVhmo2QA15iuJyEgk7t9NECVf3XuqA1abypNbNMNL",
  "key4": "5pamgtfEbDxKDoysKk8wZLpmTU2enkuopaScWSjqQaHcCr8LvH2byTDszBopzcHNngQq1j9ZkcnppknDpUmjiS8U",
  "key5": "4s6fnruJKMztbWCGbd1MxgNkADcHN3gUG6YZnHufeeC5JJGgosodmn49kcNFqV29PcMJE8u3PpWFxvc8TYifBP5r",
  "key6": "22w9X6L2M8cPdHomghxoPWZxmbbiLMp6EY1f5jQYbgc4Jikd1K8xh4dGtoMjZGHZa519R7c33uQSVaM74ZZBVbCS",
  "key7": "5LbQEVzp3qeqgLsjzioDU1888SpV7pX1hHeQKcSd2t2P6S4EDUYUARKhKQbqFQFmM9bNMRK9xNZZfmCoySg8RiQP",
  "key8": "32ex7kB2NV4ttFch8gtV7DA1MLLFaVqP2SXWRTAbvUKLryR9XTEJdcrw5nMpkAB4poDAQBzGvRfKpmyp9bD5M2N2",
  "key9": "61Pepry1hC6gH5knkfboLHTGQ2otwoEGb35WEcTDPyxKQ6n5wH3f5sYyFmiHhVjoErzNNfBSS2vUhUmT3UbtwKBb",
  "key10": "5XV4wxupKYtzNnwbP8Xhi9scAMPmy2kaBUXg5hKzXtQvocCBxUruPv48efmCjNw1ZuAN9LJ8J7QX9C9Z1wRHXE1B",
  "key11": "3Y1RAdqfpaWToQeNUjj5M45ERmV6TGot1QvvToHa2Ymg8RAvgZ8Ws7hTMQL8FW3atxJYLy2sjRrnvTq6iKCZJ2xU",
  "key12": "3su9K3zAXx2uLVFQoC7fSrgbDChzpKA3koKsssqM7fvQjVZfhmexmhyeF1r1HgLNXYMeWt8pv1WnrgY3ffTHadZh",
  "key13": "2qAqNtPm4PsbHfgtn1ZSb8X5homLaKVa5Pm8rEd66s3Dzg17C63x3ctJJFxrDihWCwHPnDhpRg3MD1qSHFMt4FbU",
  "key14": "84hWeUdtYw3zx5DnQNyKFpeymcUxSctrtNgymQnMvR3qXVb7yJ1D42PFhVwPnP46rh9onW4oHif4eLF3zvxxkh3",
  "key15": "3MP1uSCtaPTUQ2JBMFZoiMEs7teMEQChwzdFeQXYmB3aa1UQW5NBWujCHa1N1KhPuZM3Y4o6WmRbQmCFHpHZ7Z1h",
  "key16": "4DE4HbnriYAy1etRjzfc2jN3vFX9P4LZgrZw9SyXYJE1nAq1BjW1iK72Zr58KAbLQAkRuCr42d8SCr3xvZrEcdwT",
  "key17": "2tg5YDtQ3QQK7WYCQ1vfBq2GZRGa9LrqiSVVEZHdNSenRNR4KncTVrauSFgDJkm1oGU2xiNp58ecToWfs963V13A",
  "key18": "TBHsnofpCRv2FBNLJhutnpqDgxXTrrcPxhvLfZEW4hb8c1ZSmCtujR2iSAdZ6iooB3EbgUL7sZbL77ueVv3GSEV",
  "key19": "49y24Qj3ygAeGj8SZm5KgT2hpSGLwwcsneCTEFXMBWY4u7ureUj9Jewut8odfqZpozUgsZqwArHs5PNAiz3XVUvw",
  "key20": "67n6UEyJ8rr4NfyL5aPdUJ73kLs5243NLwYMjtWef5TmLp21DKPPauxQgBugfcvokmBwV1926QmiWQAfwJj9zdia",
  "key21": "kBusbDT4S97uNXz1SQRpDzCyjRCEd9r8M3fLmRum37U4rZYYus3SiSyvAEZZg6JhrsfCWsiQ2AWe5uyXWU6J5a9",
  "key22": "gBRHbUEmHBWGqbGKzm6FWjXCheemAfFBYCMsik3yFRoFcoEUw8oMecPT2P3iaRRgEMbqx3KWjDgSobeRSyJ11wY",
  "key23": "5oScHwDF9xxpTpSUiSDAqCkJu18718VH6KDsEwbsusHGqDJp3QL7g4huhkBzUdo8jmhRTNmJSWnwpvooMf1FoSJD",
  "key24": "q2NpsNBhXZtEiKi8fkYqsmMNcK963KyCzW2YLxaSfuh8GGMXm4Z3KvUnSaZU9NqJFrzRWDrPpqMCwMUcFDWxQs6",
  "key25": "3ANP84Fh7P8Sb4NQxtdbqju48tVYrN2qBLGtwUMG2JMJnRHu82LfUka8k98jjxZgnrUoWhxkGDXoAN9NSMgk4aPH",
  "key26": "e1rYyjk4ypJcSnmJ9Gc2RymZocUdhWNmqCKnfSRYR4ci9R1aSwLhKswYqFvH5Bmu14d3AYq4sydhvgVEeqxeMaT",
  "key27": "4ewRoL7qFBP9Rpz1guDcFENanpwZadTCGuPxCAscMBnA3eVZ2WqKxDHXfBTvRh4SXbv3cotAFesPuBYDtnMTJ6VK",
  "key28": "3XqXrC8gZuxMNpJ2jMLBjrca5kLDRQt6XBhaZZTt6KjmYLMp3bvLjv8PqBBnzCorYiPmJzs8weUtb9ay1aZ4Dv3s",
  "key29": "4DVwtpABw74EE3CFcJiHm96ZTTSphGMZ7DADTirSrTuN6ATRueGtr3u6SXpHCoC1SKzxrZx3D11YqcwTJBVM2gRb",
  "key30": "2zjjzdnJrAXcFJvsYkdm1NgBk8dVnmg9pVp55zwNCJDCjM396ukSN2UNNCrPWd1Dd9JhoJY6xqR4K4mkGhiCqUKk",
  "key31": "MmfrDXeuJqLvfJH9t2LqGdjRwkQYHEottA9d4orMMmo2PWn8vPUdBavxJiHxgH9FLS5otCyF2qWqhyYkitRGMtr",
  "key32": "2Nsdm4T11NrDwdvwbJbbxejfbCfxC7fa1zoTbw8fFAS7GEHmVcwyY7pHh9aoxVD5hqFkLDap6aX1LECizXdDf9y3",
  "key33": "AfmJzzvKRZkQ4kux6VzDCxnghA5d2BwNWh3SH2NhsUFwGNK7r7thhbSqJ7HrBDS6aTwdm1EL5r59cAczp3PLuXt",
  "key34": "24PUWbHDrionhx55ZiB7GrrjbnpEZjCdTnpXXf18fgSxTSU4aR5mPZ1GyYK7quAtb3jtyHJpKc4oinuLzfTH5sNA"
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
