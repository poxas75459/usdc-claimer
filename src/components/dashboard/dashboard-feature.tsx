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
    "4tGEp6e5qfRTKJZ5yxXsi1vJyfvTi3RpGhFRQDwCryu6YH3zxdPvzxzvhYAL4Ua18jJir1k5JTM8LFXJ7n6zqNnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zKFAoWguoSbyeqd9kdBUT3bAGza5txWhZeeg5yaRd1fATmVAwdYevcu6fVBqbxeG1dyfGTAXDEA5FQ2ry3Uswxv",
  "key1": "AGCDSw1DAcgMqtcuEjRXV4tDRPkd7Kvfj1tLDfLSbwDmRS3Jo33ynCQsCyHspRNKVrv994SwAc7uX45HoSQd7wP",
  "key2": "5CrLp9zVJK1Zop22uLFSuDqvvmpZRrNgae4ZE382EgzGMBevaidDuEThSivBTSnXywuz9EJNFMadg8an6nKnR5Yk",
  "key3": "3EchZ1q6EwPvQVQLjvcX51TtQe7fux2LEnnvbhw6LXnwyUkBrt65ZGcfKddwYeB7DukHzyXHxqzPwQSJsbM2eTKR",
  "key4": "2f9jJuFnrNZh3SghsSetAf6kuXhYJWpxL72u4tFQeNyotqJrq5wWAHV5HNepYPVvQjoquPU1grt2rVY2MAfTgr7e",
  "key5": "3PcSH3LWgTXKiyaQx27jJGmbpAsu4nAGNK8hUFnNoiiryJJc6pbdqiwYqQJYSEFwUoMsAkCZfF7Sjky4dE8iQzsq",
  "key6": "s4Lyqc5QZxgjEs9MsMsXRj36NQSTQKQ7DSHWYfe6ZrF8RNHb2a5s8UqNqJ3F1ixHHgwAFzyDLZQBNp6iKr4QWVv",
  "key7": "58nmqWPjBZ4Jop5Q21qQu7DXqU8B7WH1CdTav6vnJmv72AYdM3seRu9UhF5Y9Pbf3JMSChYQZ2k1zBq9NB7VxBx",
  "key8": "ZMfnMCso6LB7Waq75TodqvooEMwCmYpZ8urkAn2DSxSS3NWLNDv6VjFKyVXufDEkn9XkyXx7DCUB4TiCvAS1u1E",
  "key9": "5vStp1Bd7773jx3ngq4FsxcfGEUSmRbayov4uXaCzeVK9L63ddfcFFxh2RHiH4FJyAPF5CcnLCgarFRjGgdSXwmi",
  "key10": "2DDFyMGs3LESDmWSJ2dvbr4kRRRQQa9AyLK5ueHFn8moDXDadyaxBpitxRHe8DjGNqWsnGz8np2ocDRFm1zrNQBx",
  "key11": "3bhpAUiepfvYPAEeiewEXYFPTm1JRm5F6h3JiK19qN7mo5bd9S3dA8NEMgAP3GcYx35jKEVk1YG5uD3s2FCppTNv",
  "key12": "26MemkH5CwLd1NbZ2hMqLpVC9x2nefCRSazbckqRhZLc3EZwGAj5BEmpuwEDbKJ6nBPHBSV88YSzmzfgC2nsAc32",
  "key13": "oPuiFgdfZvaLfFcQNsRHvRHM7c3Qquk4zdnEohfGDJ7PvB57uoFWZkjiPfLfVdwPQzCcKyx9fg9FYg5G6KQrLpp",
  "key14": "4Rk2A3Et4jrhJLFQw7deWaNy2kt8EHYdMdnBKC7wC9nt48f13gxqabddXWeDhvL49vVMrawteZNqZjV3jx3mxHTy",
  "key15": "64oFNFRX4GPuxJ3j8t72kpa4yiZJzkiwPDeQZARs2ADU3YLJnfKG9RM1jjHf5VEpd9AhkosX914n1C8tcMMTFVXC",
  "key16": "GcaNdTdv62e2ZjZZASRZT7jX3S6GDXpBp2HxkHEcwj7DXfnGCxbTRXBPTLfXM7EAm7Pjok2GffT4XQ5z5HaBXjz",
  "key17": "5srCx3RXwtjFsBRMNxujBthJt9mrDrtJVDWyg5ETKYHDJMmRTYm7jZgin1vDvK9iBR2B2z7FJM9puRdziV8MjTRk",
  "key18": "5NDtiKDpkbXzzkTeKf18LJkPnjEX1MuXvmGJKsnPtvuHQuggsnMjRybSMF4uavxKQ2EwTPVWGt7LVQnnzP8Za1DK",
  "key19": "3jhg5gvj49Pd9TUVAt5dpyVtdrwehAG4bT2Moe2ZdHusrJ6tCcooLPptExv9rY1whBckXK8tNvohpMpdjuNPkBj8",
  "key20": "YaXiwbUkZte4utXH6CCJmKYppApkZQei1cuAeGsbyGsMnhJEGNR9PUH99why1R1EQ48nxFX2PGJzSzk6RLtCwbr",
  "key21": "36ywjhNLEML8c4tCzntiwZssi4xTPbZnDAyGYAAH9C43iwfxeGLC9BrStrXe3VNCJkQYuLmNaVqEkuRXG1DcQj1j",
  "key22": "4hWP2o8EuxmtYcxnx6g4aZq2hEUdcmQ9cQgVjPAXZpHq89us8FpdUVbjyhm1ka9256YqZtcYKLPJkSAdFzzVBQkR",
  "key23": "4vKdqKAN2taP9uvPD2v2LkZpp3fXNJmmGVpuaDgZfCKjdyiyMdUZJ7Ty3cYoVEE9t1rgu8uE4T9yqCgDB42vqy9x",
  "key24": "2qxXkM4Td6DSn92rtJ6aeyvntaeraNGQ5ap8wJjY5AB8znKvkFm6FhDFNTUofyLArHL5p1bKYzR2RLjs1ZQZzo5B",
  "key25": "5kMPPwFSUqb5DXAmNuiN6hEUJdgtCrfKcgcJ9CEq56BLKhExXxnjkKfjRUF8chsyeTk5suLqytYq4MtZ6sZ1zYcU",
  "key26": "4gxRK21tZNPk11M147kHEagNh88gg6UT5RyRetZRtLvfnGPRD7duwrbA3QKximnNX2SoBt5uuN5ffKtpn5vCqkhT",
  "key27": "4y1vSfi3Md12KNDGn4caKsrULBdo6aUknxgwqLz28qzz9P6Hi96rqQkhfVQLMriyPoivPGvLyX4iMwG33Ci5KpgV",
  "key28": "5bXyuX7gmRQ9t3yLkGiQm4EaVz7ns2UrC1xCKwpuUiDvsK4t4rq5Zu9HcV5U8oXyvCDxnKvZm8UF3C8871yCjs3T",
  "key29": "5MHmMsWzAFzNuZiY6W7xtbT6BudC5xzYcNc4HpYkFJJhBzoTPfgk6waBYhjwsmYhzrKDKj5b13NWPpqYCrzR2Jn1",
  "key30": "4UJujpMUNJBVNaFJBsBaG2nhdHM2cE1rQtueLiaN9SEaCZVRdVLng9j8zmZxUYc6a6fgskJGK4C31rmzfBWqSP6S",
  "key31": "3rW1td22JXapAg9acZTa5gLWN6LZpGxD6n68r5oymibbJpDfgPKmBwqqzQTx2uXm1RxEicsSYVtvHM7Au9prtTXH",
  "key32": "3ZemfgK6Qv5prCNg1zVYfM51X9JTnVujsWKbEFZSDUirXy6ezt6RCMUFGZDRAL8hpoMUzFAVym3j4NAqitTaGFsa",
  "key33": "P6cPtY6mVZwTm3EQojq54eQJMjfXW6qh5WR4NGAJJrPWix88SefjEYCQLaYKtSVHeJLUAzyHoSCQa9jyXHwciSY",
  "key34": "VFXzPjBHbTa5LUbgMKS1rVnCPrKUT8s2v8KUtur1xPyoUY8JBKN649P6SFyJSb9A4HbVkP1Mpt1TdsQqGwvYb7n",
  "key35": "4KnaRANhtGQxAF2iHWM6r4uNBKFUkArK42HPcqN9gTbigdMsMX6UVyVBYTUbMdddPjs3P18Fqxn6RhRwavwL8Wzc",
  "key36": "5VtecJcQfdeBxxk95ZAMxyrPdY6mQU2iLPpqiwhACukjeH4oXtz13K8DcBDH8JHjmV8Y6yzVp7sRbrNUAJk9QjRL",
  "key37": "4Jz2LV6nZkSG2f4mAdPek9tvh56wWa5Rkhiu81b62jG11xNz4AuRx73bQbigD9x16cjthiLPMYQHcAeXq9JQKWAN",
  "key38": "2a4JXEKsj2zxiWNejGdaZFvQjjNPgPeVt89dZK2CWuye7TtQhVtMpg7v2LjMiXU5M7SRLSsMzkj545HQ6f6rrDYw",
  "key39": "2vvFeZkJzeoJ8LggMSpqNudWHYwojvsm4h4juY5mJg8cBr4PBo1n9HKTgzih9iC1WBJDRd7iP82x1kZgU1JhMZ9T",
  "key40": "46HBqzyhyXpSgeLKAw4grsDEX64CTtYPYLzFi856ERqN66rp1Psfr9oRWXrShab2ue5taW19oKUKvzVgsQiArNKp",
  "key41": "4paRiPrzoN5WdpPcxwcVSURKKUxSD6oiE5naejaE837saT9b4iwqnSyjSdpEcJtrWJ6XhJHBQtsyFNrJPPXdeQQM",
  "key42": "4NRi8GGnVW4VGKNosoF9c8mB14x9dyaFsa2aCD5YwVz9EBS6iCMKmx1Lwt7PW2pG1BUWD4RgLPE6pjghpAXUfS2C",
  "key43": "T12qTiWgZ74r3TM2nzwDNexiMQeFkadZ82tgpEZR2GmNvA3hwCKni9ijDhVYp7eZP3SqV5bnTDcrTs14uiUiP9X",
  "key44": "4FwiTsz8dohkVPmvSHzRBVH9KDz2cny81TXxdPbPT4Fnkvy1Yms5QoUCaCxL4mUnDJAMWwQXdjn9GZ8JvZcMRD7s",
  "key45": "36ckPNGJ8HbmixvA7WFn4thiPLV86L8JSQQWfhHWtNoPBp1j8YhZXTEfobXHQodRsznAvKRHRmRmwZLF9uAVdaJe"
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
