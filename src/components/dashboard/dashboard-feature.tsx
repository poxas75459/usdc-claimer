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
    "vJ5W1whAKzuvqUe6GtZzRCiT2zSySJFB1PJA9XVk7Znb4e2r5Ad8zmCK9NBzpBKCKu34fwTCmj2CDExa5Za8ybU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZbHFEtSPZh7H2ELu5zPxCapPZTbzvsdv4TcBj1icc9UUMAzY2cYhcnWBr8U77iawiBaCszTdTWubXeBsux5Jxq",
  "key1": "3NbGTTRbV6Vs1asbkSQ3J8SPPwkfT75CHXpRg1mqhkmNZDbTXZStU1KvQoT5zrtrTqZQJAEiZQbR8XLXpKRLzNUc",
  "key2": "Diws64GVmtWeaN1LtqaUrQ1L4JGJA9mRqRMp2xtfA3TXs2TZ7UwTkgzraLZPSbUkk9Lng8HPdJNfYsyjTDLthzq",
  "key3": "51RV7Dxr27guchgfcVBniwoDss6bv8uD6Npw4MUAobX83oMrJ5J2HMEyPcDacapAq9o1qKCwVEEgyghPhiDAwsgy",
  "key4": "4asABTpm18PQ8AetWMC6KUTFVSrX29KSgksBQQG3TmCXMiiss3By7wYhbro6RANrD6f8CMurrcN1hHEMUHubCp4E",
  "key5": "sca4PCAMbacsFMnsQYg91qVPMpqDZZfJXaNZ7RRuwkuay4bQnbdbuG8EofZRpUBQxkt5vzAxc8LPpjDkm17ycm8",
  "key6": "5K19zjWdqkymBpX9PC7PXt7Qohobu2tWzmpQsJGE3hXvdjdDNGMuFJHRy4SYpc6ff8aa1S8njzLUYHFuw74rgXYv",
  "key7": "59D8kuzW7vTrMo3VMefHx5rXbsmTuJth2J1S9V3JTvVpALZ1sFSvfTS4gAEzhKcRcd4EcgFp1LSgJqDiA8NoN4SF",
  "key8": "4ocBvwmHDCCTZoso7R1jvkWdqRdoRuCQEtt5bLhmGrYKrrBKTeJaLraASgWoCoc1avua5g568LtFsxDmjenEMkjp",
  "key9": "2Xkz2vAckSRmnaLLDT59zkaAhCyXHhDdjuJS8r86yfadAQLCTH2PokCsgj276SWL6jYFcEJxAhD12vrniR2Bgky4",
  "key10": "462efj7FpT5NsBHRTecgg2dXo7tehfXteGiSz1PmnXujVr97tpS5SgSHD6rAHZJvwLkuUgjAGg5V8aNkxRJFMGx6",
  "key11": "iBe6A7b2EtNVgg7ruawEnd4LGiFCWZp92c7kS4n5Y3Ke5p81sgwf6GbZCcdRTUxz7D472EK23hyvAq7cQeHfNq3",
  "key12": "yTzSgBR5RmZHZdynXPiYecN8vv2tgYi6CXL55qHHMYpSuWyHDrNtACt4eJo4qeiQwjLUBqFbux3MLpzDa6JNhqE",
  "key13": "5zWi8zXMzutjgh75i4KYTaj9bwz9T3BBR3fGtbfv5F5D3xVN2T8G5eAE8t4vxLhyiyYbS5CtmKxBirkd6GTc3Qyc",
  "key14": "25xcXjt5M6KuFQGkNbBoEREz8GVaRALGAd3zwgSvh2ZgsBiTLbK4y7M6m4NtDar735E1GCNLVhQaCQtXAZE96RBY",
  "key15": "CatmKxzJsEi4BNztv52S4hZT5wAqGSHtmqrvoQvBiWrb4nHWFDbKMpKJmTfhjttrMy5PPbXXQJt89vgmEW2JUzG",
  "key16": "3xty2cARa75SZUMmihve3mbeMbERLDy62qn8xR5j1sfNzyQuLUW6EMzRR9PQUW9nBAYeTkj4oDa66Ep73mEsc415",
  "key17": "4AXoSmwVB2RzECSjbvEFDJG3cZB1qbsCuVvbkEjPNkkrE1YaXBVCCcqs376m5JS7oehHsFUwsC7gHHJuBdAnFM1y",
  "key18": "2doeq9ajskirf7XHjXsNLxJmq9ZeqMopEyCjNTT4bEaSMTrMwEwQuJJuf7V6JjLnAuSomVXZHUK4pPEe3fihMfs7",
  "key19": "3Ej7GPNg18vZ9o5X1QL37hMb1wbxjAL4i4sHU8KBpy3d8haLQXP3cdKZZGC4a8Xi8CKNYiD1DnvQXhdzXPiSutd",
  "key20": "3AmzdLw4aDHWLHgHnDLeRBpvYN3Y6ihiMC3C8JAuLQ9RiNiS5rLuELGH9Pc4hxtQToLB2VNS36uTKHQ9iZFMmih4",
  "key21": "28uHo26ZouZbDrXV5gJYRWoVd8hthpBgotYcaB6WEEN3pV77GEYmVjpLvTYvvKcHkg1zS6qg3Ziy5giMt9VevEcg",
  "key22": "2BrR3Dvcs9aM9BArcFdVh5VNiTWkxWe1SePd2LGReMD6ZKk5RVU3Eohf3Jv6NgrX2viBqPnq9XiaCTa2MLeqgnxS",
  "key23": "2T1jXcJLT7wD3YKHrNS1cjkicd4DJiJnLrJeaC3NR6iwFVCGPGWGTYHs6AVfCMr4nGsdtWQGugNwfe25vBdwWZwd",
  "key24": "5JVm58pzogtaXXNHQHWFM9Wqefs57VpYUuhRuu6n41mdE4S2kKNpHgxE7x8U7QuP1Xhx2VhRQ8K1czVVBrzKuT9D",
  "key25": "2cqBtm2KPLBKebzzDEMm2RqbrJEyuqLhQL6T34iuQxG94bhMJMC8aEvcj9t77nDKhntmoZToEWzdJ7TddAaKZ4ki",
  "key26": "5qtwFFCev2NGjEzv98PhVzHNBvuuXzbPkvw6MPoR8ns1dHhb7yyzxuydsMspFmJ57Cyw8CJM11Ga32FV4DqZ3Vby",
  "key27": "2wiSuTiX6Ar14sJvSyKrv6YdLMQjic3LGUuM55onnprXa52Rpu4zwcrVE5jsVUhrpijUJqVJZ2z6pYadVLB4ZkwG",
  "key28": "2155WyPs3GbSiwUY61LrKkhDS5agWwZFHiC5xENnBbyfLBfPxY1t8Bq8m15ncyeRr6zMQNQBNQysfts9Lu6udyQv",
  "key29": "3EFcUuFrsstmVsKB4gXPdfUAZbgpAXS3mqLZsQVbArQbkPTfzxuXXFLjawgHaE1Z9jqankT1CChXjxF9DfjUL6vx"
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
