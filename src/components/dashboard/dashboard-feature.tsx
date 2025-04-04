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
    "5rv2h9hPEGWe7Gki1Q9uPUdBjSuYCpXgvhaHwrHgMVqniez7bFS9CSfMKWrxzWsynC4vKwL16TmXtRQAwrXPnvy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ze3CoZugNDPKYhmtrnMvZxdHFG8RDxRdF8HTCGkV68rGSyJ3HHRhZem4Xz23MSFtJToF1eehH5mbeYQzA9Pf95m",
  "key1": "2UE7YrEQdQdJ3F22gkWBQ7YdrpixRMLSFFjR3oim9UQE5MeYY8bByH66sSceL5NPqW16YpAvAweJQAxg1SLdhRsm",
  "key2": "3YYxxR7SijLaTgCLiecBVUC6Ez53VDgd7NAd5WtAtygE2QhDXVRPxxwudBKHKd74uHeQhoQDUHhTw4CziJqTQghs",
  "key3": "45c3wvgqi34dzsHQDXhiJFdYCC2R9u6bgJTPBRWX5zo6w69ZRCaxD4h3GqAAwLgbFzz5hKwNcn6n8F1Z4z5vkRV7",
  "key4": "5BTnd3fRHDTVLooYGuurSYaSzGB9EFviKDtutRa7WQfRUrWSgBE5ifnj5KEEKYb7zy1zKimf1QnzcoiCLqUforbf",
  "key5": "5bP87nsr6XMi5itbSVg1MJPMKYPJQbFb2M7iojFdDSCFDAXVFdNeESrt333aMNA2mkvv8sKYjCTGmdcPf4s1vfcX",
  "key6": "4hJnny9ijuEAM6krVeYADFCUsnfvoKCp6Xgz2AHR7b3mj3553GzRU6w8WnXzHmX95x6UzavP7gtXDh88B9oNYS9v",
  "key7": "3trmRp3S8puAVfPsTSZa3tpUdGAkNjb2uF6gHYvoqYpvLt3LZykPC3Ca29t2vypa44tycGe4GKMFX3qnuk62Po5D",
  "key8": "4zDy96bkyr7axcMUyJo5vsLEkbeSbGK59tCNtszAo9YeKJ6KzZKomnDpqYrzsJcuWTdXpzfqBtJVxc1B5MZZL4PS",
  "key9": "2VoBPrgZzoH1NR6oU1yjhx627VFGSewScWDgYPEtf99yoDYM39fqzCv1kYcKx7xWHUYn8SidgdmBB4x9PYKCSzZc",
  "key10": "Ze83DdpM4ZaoYvy9sWroxE3JJd618HH7ZZrkeLvx82epKPp9a6SBJyG16N6a5LmEsuKhr4HwDcf7miQLGrTmenA",
  "key11": "3eMCQMVFTRutrX6EoMPo9t6hPd1k9A1gxnoGwAJgmNmk7WHSfngmDGQfd7aE5aWxst8oQ3fo7QKSeq2zapSMZK8k",
  "key12": "2ruvVY5jDLg53feNZ1VNi7XUDLScc4mXZ7mYzgxjkJU5kbnw8me5ZfG4kFA2z7E5Ag8fQWo44eGYZYRnZLF5THi3",
  "key13": "2g6k4hZxyaGYkcLkqS73Zmw2Z7PW3qEi1g8XSRgXmB5THA81qcEFj2bsm7tbQ4bBSTej4LVLEp9vNk7gHwP9gGX1",
  "key14": "3jAaLfuh1jt7UDg9T8a9NNmpfPA7B5t9RZuXTCDiu9oJWcKqFk1K4gsp2C2nmN7PQEnYANX9CCF4BPdjwegigjiU",
  "key15": "4r7NMWG3YcFg5rfdHtxNuTQNuaxXTcxhz8ycPCuKvqTydaoEwdudHDWyapk1JCHxvJD2cMmzq2eYzsSdr3EjMYFM",
  "key16": "57T5QeqoN96ZnJXypxGhUsxKAfdDbb9BxfUDEek9L5fuJLz5xFuTcoKuMZBeGQb13RSACGhcHFu7zsSnraV4Z6mr",
  "key17": "2dHsAghzqAoihmTUjQRZPK8h62FxaYMVfXCivTmW91QxiaZSoJyCwVLUy1qY4XhJ7r2LJc5oR2YzJJWmzwBchx8S",
  "key18": "3BeW9Yj916Frh95TLw4EFQteNvW9KQwt5iDUATwyYYX8HDw4y8q1g9y5R5ihD6TnyKmQMpeb7vRwXbSTEht8fxd7",
  "key19": "47hHxULuwkfxc13t3NwL4oSRBckTPkDNhhKMGi8stFyDHaen55UvVmHeaUt6QEG4XCyLS4zRjrm1fD9qg69qneYN",
  "key20": "4b9F5wp3Q3fixuqy7SRbEUyk7Qhf8YLi3awYsFsJQA9R58mEt8BBwv1wyAuZkFtVu99PgEJ1fYWEGc4nMPPAnwrE",
  "key21": "28mnVQP2XPczVVwotDaLdt32CBSXPDRzXoYbdC7xbzVm6sywFZzvKu3NoLdM4VFMk2vKGRk2weWxXeoXuGeevwgL",
  "key22": "AcZqygbxmCL2cMiviuUTjxgPmMKkGC8L9kDeevCHTj91A8om4o6qXhLMNrTtwPwFS2w9cWXtZtV8MXztbRxH9z2",
  "key23": "HcUfefNr5kvq4kZ5LxyxaSrcmRCmpcA1rXVY3EJNRjZ6hjnLf11uv3WyPAHJmB28siQrNr9t5HMALWHA5vA5HEV",
  "key24": "3zHWf5wWbZLDM3ksUzkwGs2PobWqCpMiqwAj9d9EYUkfT7k7TzyyHBicGV7tMDPjZFHzCwyad6Nw9CGFQ4993Y4z",
  "key25": "v6asQ4UNiG3phV4nm3i9CLAKskp9mDGtukP25QPQdA59qy6Ctcjovghx9ggVPCFyx1FqkSvomo45qBjZJaH1Fyn",
  "key26": "4jSqAaaWNcyhfTWdpGGvkDioGWgKQus5AFsQTAhQHwNZsJhs1gdLyUifnge2trr37My5JUMqkw6sHhii6dH6pE1C",
  "key27": "3oWSvNQ3GBnJH9MUXVnRqGg4FvaQKV24wu2rtiLgGfugpFYUZyqAFfeytD59xT9twAxToiGDG1iGuzmPLDA8w2qm",
  "key28": "3nMX7uLkVqQapizom55YgHhzZsURcNsnYNh19nTQFYNTu5RKKvaMtQDvs4fJjYJvbMrtNVJSW24vkimTZNtyCTNC",
  "key29": "5VmK6jGm9Rsx36PGpAhkD3nP6u1qE7jUta65qyXmdkzqZ43jUVozfZrKsKmLApGPTE8rSSH1cjCm8bcEsu26ctN9",
  "key30": "vESd29f8nxiymNiqz4DQf6GBobhDYYjkAoYPJMomja4mNVT9RdZKCVNjDPAm6WsYEveXxKZUjqYQC1YKLp3KYH5",
  "key31": "4HszK5DLDq4AKkKrbJi9x9inkrCaysZrsboJifMxHCySFJmLnquyXL8JMvwpjjb2RctDucT233QN8o6qkUyRo9Pm",
  "key32": "46Y8W5bkDTkgM7xHyE7PcJkaFTfxKh9o3g42k9eHLDDMudCqg9cSMXFrmg3E7fYtHnbc8MBNcdxrXH5xXZnx7NPX",
  "key33": "A1vKywkwYUtQt8hJH54VN4WuwKSVWczogyTayMX9uT5kSTQjZEbL33Yyfm39q2By28zBfALpjWDrbsQGWrvD6um",
  "key34": "4iPJ2DK7QkikicPqRm9mwpvQPqCcninv1d87nikEcYjExsbgAP3oqhfsQCMxXd8qGPyrtGoLtqQnfVm4YTSMXD6V",
  "key35": "36nQhCvJSEEbXwV2TUsMMQjui3deSRtQywWwcVkpzYcnbJ4RaXmqL1fEb9Qn1QqwdWEiw2ZAYndApe5LDtqiYu4v",
  "key36": "4ptkpXy11u1Ny1vjaeYC2CYA59K9gVLjwGkYNTtYx38FcXfE3Vb9aRv33zh1pQqv3f7RcioARWQJ4m4SjVPKACCc",
  "key37": "4bG2SQ1k4Uh7LumS2Y5ZR815nAAVh4jbB65YJA4FFeJtGiC8ZbDVv3h2BxoVFHAJJeWKMVChswKign6F6E3x54Dt",
  "key38": "5CuY9rkdMtTL8q6RKEMNLHxdjc4AsQkxQqYZZ1XqFnJzZZxC3bqXVuyTaSTXXnREFSKswcC3ESQg1hwfGi3RJxD4",
  "key39": "5yre39ce1esNWgFq3r3KPMXKkx3f6n3E5RXf5GTH5zUwzd1TEP4hgS1YzfA9EsSHrG1oyKd9BJdMe5JbHw8m2jzz",
  "key40": "3CtbwDBKqabj54FDvnqME8REt7rXtDoBL1PQpNRr4BTjfrYAa3qUSkcRgdjn7fsJkmW4CLDNhy51kQDACyCdCYEM",
  "key41": "3eDnimcdmWSXDbjK7CWyhdcYghRiedpZtsmq5FUZ6QC8JMeuE89n5vk3CLijYg44jyWvBcrdJCe1BnpdH46BA1Cy",
  "key42": "ZWRZqhKZjZMoUCKLHuKhk9cog1iKJ1cGZKPAYL3vNEpGQpFkTLqMYdQzs2cNdrPfB9WpFdo5HhLjcGyZkuEn8sn"
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
