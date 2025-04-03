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
    "EgWmnXQMsBTuRaQ16pTsDB2f1d3ogjr17WBjYEYXZEpad33ta7tV12NZbFtQ8kShP4LJGX2Aj1pvNVgG8QC4Vmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yd6uwaRzns9paiAGE6YhXRX1HchNdA7yXheCWAzYajgfxAtK5ixJbN42DwWiRH4ktJyPwfmuT5hovCcHwAh793p",
  "key1": "5bfewPKcQKKp4tCLgyvP8FrVfBPMDmxWyJHXgoXWdmMPhayPxm18UPEXegDje47SmGe9RVDF6nShgS9brZ47KEpi",
  "key2": "4M9F2xWChpfBoZcnM5Y4gdPYyP3TfFePucFNJXGde7KYEBzuYXD3D5cE1JYtxNE3oSF9TuAQnFVBeYLrM24qenAe",
  "key3": "271C8WBtUeK2SrFRQaREq2yh7JCwTGMK5Lv9753azNPEL3rsuA5RwrWpDNvy6b332wKgT3SNRt3Fp2ygS1T4x9RD",
  "key4": "2yBeNYdCR4kbPuXdfMFoEdbmZF1TasQLFne9y3M3tuVHEfcf6sAxKxUHnqp1xsEKnAbPe5GaB6YLKG142kGHRuac",
  "key5": "4y2Bs87ZzL9bzDukE5dnsyRCQBCciz8rKY7XD3weSMRCjbZ6NuEHdvo5kiM5drr5RxrB9q1iUtts81K1eBn8hso4",
  "key6": "2mzDUpTANZUjsHggiExs675qwj8nfQUBWLeHRENbRpzwsUsioUA7Cguiup4ikQHZohFADJ7MJjnofbGEymqpRgRb",
  "key7": "5X8cin2jo3uonGFeGFJ9ZXieBF5uKDt4RQuj3rLUwnxfcFJqUASUvtkhA3zDpzRuB8doumUy7JxmR3fhmrdM9p5",
  "key8": "2AJgiDdpZM8kjTxkuCsDthdLSxNFZbHK32wF4HfRBhqtm3aZTM8HEcsLBs28vJeK3LgFahnsWhem9LmVPynbFFBd",
  "key9": "337e7yF75Smnpi5PR9SQXkcvvF3tp284hLrd3kUxJTE2HCyhwC7N7fV2uEeEwLwfawVtURaijsBEdfLVxENEzi3y",
  "key10": "5BewoCU2dixy2zkweWknsxxQyx3sGHzwGQb6YxscPtWrHAd3HdwV4SAa6bP9PL2MyCRdtVukBXN75nhZo5mJ3jX9",
  "key11": "4sjqsoyHQFr8qQ4K9EE41ayDwyDhS6DFZNhEUk633a89HWEaMAdRUZTHEjZ9XkKeMRK6Cw1qxq8WjsSiXwerhe9b",
  "key12": "549YJmDUPHvkgZLNscvjeHx588Wh6YdURCyTQvvfoaF2CERu9T815SyfgA6k1nnDB8Axr9QsGhyyWPeUnoTPgEZQ",
  "key13": "53F13CVTbf3enNi9ibpg6drWdqP6YtrXFpeLih5JP4tYD1xAoFjMztC27vUr4BpyxsCQpGEF1gXR87bHpuVrQoeo",
  "key14": "AxbNQRg9xqapj3EFYZPBXJgKH2PwYTLVo2FXmoiPdHHuXu11Mt93iiXEamdN8YcEcvij6ct351JA5CaSmKMyxJd",
  "key15": "326ZVokk2QtrYHKQnkNLa8ijxZZaiqgBKFhs3k6hfqYv4NjSwLEaDFVnMeeCVQhA3E1qTX7ZGQj5tHiTvMrWc352",
  "key16": "4srVChLstnCw7F6sQ1v1yLjjvLCDVKcM1ZYq9w48KhJQW86oDBK4RtUXHHo6epPsi2Zfkd6NEvJpaASWiiPec7mp",
  "key17": "5eUxWiVuFYdaYwZ1eQVB6Rtyuhg6fZkZfLNUbuudvZ1xu5yQHfJA1cj7JLsAzRUBzESKAmMpR1yKaZgduYh7z9pD",
  "key18": "5rAMxraGgCNHT88ep1tfbftemm8u1ppMXnqAPwKUZz3JDGEP9eLWodPn3AtWbejTLv6qkAr3on9mJZM5Kowc3rHL",
  "key19": "4FLmmpjXiKSUwEeEyYatcFHqqyEKTP99HyZkiUeF3T99JmwdRJDig1eVENqM3mP3rCoPmRokLniSvPdmZBnVstNH",
  "key20": "rFsvxggFuyzan4v6BswghxMdPYioigPQQGDLWRmiXqyu3XSNxDpDUbxcxtxNTndX1Fva4kJR2VWPgzrGGVJsMeX",
  "key21": "3Dqc2omohWBzh5V1tcDWq6o1aXtZaQzvKukFC8dprq3XuoFpNJSdeK95861zAf2jmG1VKwe9LzQXzTLTHApzPmY",
  "key22": "3q4bN9sGRc1qe4ZYPrUWhE57RxezsW6ZWGCLp6xBe3Q9ydqzdQGmUEk6Xa9Ph2fNeJHjhC7MZmNQ18E3jC1EC9fw",
  "key23": "3KDBNzs7wFcM9VcbMyhtdzA1MLrb5hcXGc2x2AC1qVJMaRDGcUAYL1bcrWRrrauwqzvTnSaLB58ziXCxbNytffrn",
  "key24": "4khocp55q5DE5ycLaJZRabcua8YjVMsoJ9Qy7resTvTZRcMfAM8u8giFRvUbUWcrRuukK9T4BGguKJN4d7KVQXGM",
  "key25": "1MRjdZHZYmv7GsE5N9tiRNJyX84SaJGcgfwpievACC4Ujn9tKxXHquJaW4935bdHPBGtTKhuBUccyWWUht4ziXh",
  "key26": "3XRMTUZo2tFCYcrURtDz6XcktMJEVfNMh4XJBbwYGYAwy2FmnfXjPrAykTqwBcBW3Agp7UrrmnjJBShnCqKS7qw7",
  "key27": "37BwBGecee7KqBXLt2eerbrfd4biYPrDjpbqv8tDDPzZVvT83Rai6uWL2HP8QSc3RGHM1KVB5VtYQAUdfJuA1g77",
  "key28": "2bBnxbrWSj2ykFbsh73ZYLVRwRpku7GZDAnqfRsN9PbCXhL9j9ZzGAzm5XwvsWPj4JzWmFZDt3jJXkpbUUN3pxj3",
  "key29": "2SRofaWLHyfwY8EFnfLTz1PFN2CtvyFtdeMLS2HecdqhfKuwtXnSZ8eYpFaJXc81uYTEKzZ3CfhppnFai2CrMZrV",
  "key30": "3LGsZsbb4FkkEss7Bw8YeYKCD236F91nJBPKdzKVNdQ7D7WRDRNPbarsrFiicEyxgfRUa8W286CApEw4t8FrwG9E",
  "key31": "5yqpr4RuJY5pAUpX3NdXcqvUt4WfH4mQQXGd1mtrSWhG9Q932zzg749FJs31N3Sn1rkEJLe2fUn2W3n7roHEkwn1",
  "key32": "2y9KaFgS7ovwS4oBCQ5vA39rYSvq5i4qP2jsZrJ1tP19uep929Pzs51A72k4SYLsMiRNg2NGVBQ5QaocJystzwyg",
  "key33": "61J7AxL6i1MaQyZb86oNSYfX43729tqKsKGnFTBSLer7FCxRPLDjxYnvGxZpgrvnGAohfsUA9RRb1N7Wi612utPe",
  "key34": "2qHeZfguvFSLxNssa6CUmEdNvhrf9i7EAWJstFyKNLnet8qNZxjebbPx65SXZsp2tKkbF9iqgKyECvVtzaZ6cGgn",
  "key35": "3mpnwfRnWBBnQfpgJJ52Eqp6z2fjyTY8fv7dQmH5hq6gsuQuAn4FUdjEX1cr5nq9b72vZoQMUL3xGcVDngN5zmVQ",
  "key36": "3QnyvscuroQ3TkZVuF4DjktuvLiKjY9CHt2UgKqe1nHNaspuH8LcEkh1DurPmeKVhry9hq1XQncAFMxz7tdVJa3e",
  "key37": "3XkRdZdXYsMqSh5R1rLtu39TizA6y7xv3ryDDCqjueeoVjS9HJn3BTpA15thBF6azYsHtkHLEffuiZTRtpDKSE9E",
  "key38": "52pGmvNtyC8BPxaTotEaKDbFVuqtJ8GjueNyzTxuMG5apZRPXmmnDzBrP6RPypyy7P7xxhc4iwcD89T9GwwCz8Xb",
  "key39": "2kycATYWgehtCeqJYo6xbJK65PQN8oEyxX1Z6E4qGhxf4KY8uaVK5DhtTnx8hrzS7zHUhobu4LMuiChUK4CA1uFi",
  "key40": "57dMAP6CvwbMZviiq7znf1i9PzDat3s1mHvqvigZWwcHY6EHppQVkXSbiVaGbzNPF4aihMHJ8gawCVmmhotd1EKt",
  "key41": "5g8XJyy9EUM7c8s6CoyrvqjV9YBQdBac6NH9B8suB731ztdQpuus8R42m7nAFtycn4K7jEGAK9zkAa3MaMNmdBmt",
  "key42": "5owSctCZau1s2MQBKzoS9Tzrjf6Em8wgvAcvsQPUCfuyrBVPpG76NkiDgor3xw2Nah342oqyrVu1246SVSFNqLbH",
  "key43": "5yqD688uif1ewk3XD57qenfidPX8231ZpyqERDcFzVk6x264DpiqwicgA5gQt8yNWTWkEPSydr9QQ2r3yniKAnTR",
  "key44": "5cxQEUGe5o7LHAWmBdfnQoVDK1MELyFYcehMmPgmd1xK6FJbmJXqWzzXKcvDcNbSjGV2FuWj7PudWX8vhCuzo7ne",
  "key45": "2ANQeM6HpipmvNhBRwYXaHKdJTbkCmFwqL7MGXGkJCdgQ9Tkhn6JMFj9dvxwrRRGMCyBr3VtxEYYL9Z4s9Xm2beV"
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
