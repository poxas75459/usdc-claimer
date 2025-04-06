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
    "2mqSFDeQpiBM8u4xuDzJmxdB7amwsDeBX1GUD2vfbstdGf1MsmZ7GRnN6JwUVipvXk74zUKwAf7PGBxwysg4VqNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WxUtuYNpRwmg7qmzhdfe6qqZ4ZQ1j5AScUCmvQtUsKDamYDz2i9UaPE1kchs1h9ZFRf1EocUaQHsAApyQR9zyDz",
  "key1": "5zLrGxZpzNzEVr8ABrgjKTn4pWwMvz8TB72fqJ9jiWCWT3ayVYtysmEwFCgLLbBBitCF51QFSUg9Sk6prYyinNjt",
  "key2": "2ysYvwLQr5hcqxoUp64dfmdjMRsorNbzATuXJPrYJKuKmCGUy27vVF53Y5ydN6swwoP8zxrzt6DTyqm5XbrjUjjW",
  "key3": "4fNveUkgzwiS6zXoRhc5gFfFv7sABHY6bcNfJa2LZk2N4brthp7MsJnP7Qa2MjdsAXeJ6RRHkrzdPD1DUjuCPdhs",
  "key4": "4AsTWZbwP8K6bQDsiNsynvdUSjRdLgbKELZ9MadcMB6Dg7tqeqrN78srmLhZkDexs423HvDdibDCReFLL3r2KhE1",
  "key5": "3f3JAtTcFPUKKCzWfvru13d7zEjfk7BYtQqVh3ajFKTjtGyeSsvXPjxV7XoWdgSvvP1RTEhPov3jbAuZVTBpU4o5",
  "key6": "5xDT4EBjwUUyNFCZPxLgT6nhDkXpdPyQ88Jix2FZw516JeRL6mkqtPUKU1qkKTWMJKprHqvxo4sWsyQowaNV4uPC",
  "key7": "MnhNbMDWrwhcJGehQnKyPrud1iEMqN1wipknwwhf1ayeTyAntdVt5VPcnNmbfhPhTNPD7ZuJKrmCunQHkNBSowg",
  "key8": "3Gpf4gb19PA33zhxCRqp2cKU8a2EDvvd87HkCka5af2FSXqeSyjWsppzuhw9eWtmQ6iR45geijmHe1gTgHQqydtf",
  "key9": "216ojAQSc2jcTANqA482D7SPEd1gUz3wXZuJQUH8WR3ZEAbTH4Cf8UZcadDeJWHv8aXPhTu5gF4zws7ehmXDstYb",
  "key10": "4Ad6vH7R88WFs1qcbg6vweNJabTiBndSxLMX4Tue8zQ8sAXtvtQBjMUj7JpKLyteZkFC6QrPA6c5iGcjLC7YDfqt",
  "key11": "2BtafBbqGgzCi2BsdqcvxKioi2oQUByjF6SfDiy7ucukiqtiZvFZPnQKzFiZAbz6xpDnsifvEdhbJsAdp5MWFxMJ",
  "key12": "WZBXLcH2W6jSGAZw7pifqfWpRCQg44VpNWdEwhe2VUoUbir1Neq9GqWZeLzCDLyRMsS4wpMSaz2ifhwVVA1fzK1",
  "key13": "5bpSRRrQLiGjaaZ7KEygvZ7SNRasoUDutemHTwNeNMUod9RLiSs9YfVJVhMKhDocVkEBSRfZjjScjwH5dDJeBQv7",
  "key14": "29mC2pjnsBDXbpRLqDhZiMunF2q3hFtJsVP2U9u6Bx2jsffuQgESMjDNqwMm94HwdwHGMaAakBhCX39sRD8zycSb",
  "key15": "3f4Zh87ZWxb6QD3zN3egPwSqFsDT36ZGQLhftKoSo45WPKmmULoqs3Nqm4Rw8o3JdL6cZfLHDFu3n4akvqjhL2T2",
  "key16": "4vGgfevrLxpcLtvoPE9oFRrna93WE7N839jynpfbdjLgNp6ACBcTVySK4qKv7LNe4w2DDbSRUkHog1FT79AxiaU9",
  "key17": "35tURWK1517M3GUkSVomdwvfc7LStMktTL2WFNriRvFMD61nAg1q8YvJRck7xDRKAs71fZpd22aaGoM8ZYzDHy7D",
  "key18": "3akvPg98s59nk8sdrGyCQW8sK3szmStiJErqFTKnn3H4gUr9oG6pmqfWFWkSHvbvJZ6B9dtGNRD2oJC8vHoRgkde",
  "key19": "5PehAhsNZHb3VxPr6N9hC57QQk4jMLVhy3XexQXf81MzaAyW8ZB9JvrTXtbRECyzW6xNodCiPirzKDMPCVmb3QB6",
  "key20": "5DyUJ5FZTEhzB2arJfSGhBM1xwqnBJSCXSrkosD2XpVCMgDFTVmNAnCQ8SvRcqid6Nn6G7K7kdKoZASG81zrubnP",
  "key21": "2CvCVNhsg1XauAUhV6HC3xHni4rQnk8X1jrEQjvD18uxPvyrq7oEdSfXjbTMeVQMSjkjrKNC3jyeez4RuA1GWaXA",
  "key22": "3wDh16cMwDjH3UCLwUYGawdejqeVtsuVvUSxcausQe7RBhPDJ7pJ1kZrRRypZScFFziqSqSaWtgdkFgXnbNy6bz9",
  "key23": "62e9rHDKvajGqTLcbYdZt8FNBtf7dsux2m3cHxgqLsuBspUTQ4cK8RBWmmfsdnwxnc6uicYJMisQXtVdgyfTbT8C",
  "key24": "5GR6v4GLeGYDhHTn6bQBEnJHsHQJAXX4Fc9R3uBzA2r6sEJR2ZyaRQMa9KD5VR813U2pt4WtpvxcMiLKyNEcPe2y",
  "key25": "5GYWStJuzVehUQKu9itKrDg7yE1PubkAYUdgPsbq8W2YmMLves3EjFzsRANzNY7jgrcegzxUtS8ZoC3Umes7jn57",
  "key26": "VrPtAoyfQVpFaos9LZE4TvJj3GHkahcZ9nAmnqSymVWL5jvgHGSCDoC165gRrJ2Pok5DzLBNTk4AUdbyWdtMxTi",
  "key27": "4SF3Ea6xaEC3m4SuNsaKfGTxkDGoXdftQPVJ83hmYjjy3cT8Xp4LMAn8e5pUMZaG3porSWkkNx5myc9yoNv5vFzX",
  "key28": "4redL4c4j5tT5SswdRt1r5NtsQF3cAuCPgntzkMXmm9QJs7asp5dMk13xs4RCdJX9KtJuWDm3wWmdSbGo5Fg2KGK",
  "key29": "3mspARfkhDdzzHZZqBVAGag6ThX1quu9PsoMYttDCLJWLNeRhALJ9PckJyLkdnrWNt1T7SEPabTMSVPj7s8pUvRx",
  "key30": "5oawufBiU5dYHngz53gn9syeJnznuGgY5MwtH8CWVQyA8AdQbwXNy4RcEA4fH8hzXQpAziKpr2V8Z2o5vdumFE6G",
  "key31": "4Se5EeUGNX6DngPBP42HMonkSBxcz3RvwddfrCzWHSEMTiQQTLGK5jBLw5ehrxFzDvu6rftHDs5bwA3cEh82kVqu",
  "key32": "23XvM13BGLDjSdrdS4imHp8rFKnTiZoBWA6TEhznvLU5QAqPoHfjy9qvY1GiDxW14XBodyVH6RJR5bpKKUwteffT",
  "key33": "4K4tqERisLhfycKqXtCymvghvydc3E3LbmmroZGGeJFSB9Z2u9r5mBZmNN1SZ4Q91tJgRpwKq7dvwudiBkBw1Eaz",
  "key34": "275vBxwmDCSaMUBH8duf1jkXQP6onxwyhw4Tbr4idkieJKeMcvzP2oYk8RPgZzUfon7KC4HaAxQyfSym4HHh3JgL",
  "key35": "2HZ47XEp1pvxKPUBwfpMLtNmH5ZDKGKDZvB69hx1PiFJ7UvimM5ProQnHjJWaPrFf5mrURDXfae5Bixv9GTKKbu2",
  "key36": "5NshRNJUS7ufSPGNquADiersRfiqQVQitfs3zLSHMdn1UDhedxs5opt7aaTTwQUWdoM9RWaeB1iHhhKzYbergio5",
  "key37": "4155P7ZGMW1ffRRwx4pKJnZQ8azvAhit5JFxfy8DVLj7AECGASwUo263ACog8pDfmexFQC55ne3QpgqoGsKwFMDQ"
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
