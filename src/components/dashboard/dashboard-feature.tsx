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
    "4r1Jb38xkXUd31rD9pFunr8Pb4AqM3ezNGX7MCCehLVnpHU5PHziDdVCGKgEAvv4fRdWTniTcEJPsTZFCBJeVgtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bh8WXtB3Mb2RPmvN2smSWeBWJ65j2n1kjxFrca5FUcfyJTDvMrxgzksmUS532vbWcR5KRrtRNPVDgXS9Aa7aWrJ",
  "key1": "4u5SkMWq3ZytZdL6d24pmqomt3DV67nzYBSGmDv6pvTEsb2FeQ71DkfWr6k9c9vgXZfiaNngvFuwNAzqxEfd7ho9",
  "key2": "4ahKVadQyg5vY3BZDWR2eLeixD1Df7A5vyZR6R6JwrqZKPvVCCv4WYFfjBtycfkXUujen9nVC3LHVXijX8M9XvAT",
  "key3": "42aPRNV4Z3Yg2EqQf2hUmpnDL7828CQc99dDebXWK3DQCBzRK1t6DY2VKFpBYeEBgXbFvsbqzzswT13dMqrpbsg6",
  "key4": "2u7A2DPhse1izwSDgdhnk61agtMg1Lbvsr8t4itsphHEMkXhftwQEKTTFQVDmTTwh2xdGCd77tYNe78unSzZVn42",
  "key5": "x18kWyxKhNE8u93prhDsnVHZAjQZ1hzCivByF85uFCAhU53JqCK8S6ZbRy7e7QeJpnVmT41U8CVbtpKybo4YeC2",
  "key6": "3EVfTjhoTyNAYsdnXGDtSz1t61YZ4DaGTEE7yHSCFUXu1sgEka9tGDzePnLVmBSUxdB2QD2zeTUpUwsA2qaG8T7n",
  "key7": "4HChpvoRYfYbUHHXd7gShfzt1Mqahaz7nvFCoXi1Go6mxyPJHeHVoyNCumQsrXbsA2kKUpmKAomcEANnzTPharJc",
  "key8": "2mKy44bs6fVa67PPSgjwBMSoyi5nm6xKNRWBpfDcoRqzqhTR2LyTpxwzSaGJ3J2Su5jP8EriNeiVE3SxWkdorwLH",
  "key9": "339UR15ZSDwu9GUP9vwKrwWnJX6BahXYSjtdT3K4acDaJSNk3kopvePZCNiLFuxnJoW4BMyfwGHoLqyd9j5thPhj",
  "key10": "4ej6gJps4vq3HPKY3QMC7Rq3Re6miWSmz32ppnonLoVZNXb6qDYeXFo9U9KvhU2U9CsJCfgbosnHvLGdHxqfg6G",
  "key11": "wNuvAKNcAwCpyFYTqAumJrkpC2pJv6sDViyE6yQnbGLRBoP1YE7s1Kfe2BwY6nd3eTdtAjooJ139w7GF4UyH83K",
  "key12": "4DgddriMBUSBDeY42egfN8VZFikUhu7XNrVJYSBxSbKbKTjaRcamadfnqvVDf29VoU6R6dcC3P3nEATjKNs4WjA3",
  "key13": "3MuqUKn7yqW7wYHLsPzEWTWn2qo7tkJdkZWiTV2qqAfPd8TF1BxgJtsU7aSiaf8fYQJbZQ7hWzydQgciv6mWha49",
  "key14": "7TzNREtizz8ub53HVS7KoZr9hSkumXpeCZkjAX9UoLScpxMXJofzXP1nnVZeb4R6gnsceVbReesFpLr95N54xu9",
  "key15": "5NCoAs64EUxDteSrZxs9pBtHdNkNs2iX1Xiku1ibhREc2NaoX9WnbnTqUBPkwuvSGSuvT4g2EZEjphfH9oUCpbUH",
  "key16": "4n4uaDAwQANz5dbXWzYKCa55YCs5S9ojoH1eHuJcrfZLPzEbevVfNRA8jv8zvNH5d9uQGyoorPMLncpiGuJRnDeu",
  "key17": "3CmKjiH41LjfvUPK3zb11KtkRDhuo4wGX5pRoBGSRmXMh22vqJNpJyaNMsdzu7TAMjxJwpxR5tZ8mt8XxMBGgcc9",
  "key18": "3kE3oaU49UEa5g41Tdgx9WXupH7jfjSHGdewgA6Vpx5vHkUjLdRg61Bk5edvMq7g1kWW5mehHVqGie5aaobvK2wp",
  "key19": "4FexvTrXvnbDHuFkNoTnH2ycdXkEfPrXwmTVeR2PZkWgd73eU4sFGqmZrYctC65k61HRz59mCwF7oymwEaoeWtN7",
  "key20": "32Lb18JWh5U9i7KU1daaMmLxGMj1mJKMncrvN7Cn2hDwpD9u9U1pD6m9J91DzCBHkXiGXeuHJgAeJbTaHbXJBwBD",
  "key21": "3KcDtH1DCJNTXrUhjp1fLUodNFZzqj75qmwWtA8e1W3XkpgzT6cZ1AzYZ5S2eqdRRdHUUtmPPNeavudoUAm41PJS",
  "key22": "43STcBbNL1JxZPotvFRDeTDQy69aYjA9p15eWAsS2oNq5vdCD2cABTRW58rG8WaqWyQwhVZJxVyctSH84rm4KZKL",
  "key23": "3PKx49NCst7LHHj4w6MKjjKCjaMyW8c1jQXjZsBfiN8vGnSZPokJHDWAnHFZsbpbTKYuyBtJeddCMh2e9kf7HpCD",
  "key24": "2gPJaLtpWCjSymGfKAN7tT9DDcLXLsEoDgqvRxyLUVKBs5uVy3Tbw44WHcmCJ9jvzK4gw5T3rSa2Y29P5JPJpuuq",
  "key25": "5cL2W9GwPBhrzdWTU5Ca7XWhugZrZjTifVjQUzhNz86JmWTLxPTtvNJEpLz9L4WoLrPZmEXaJV9uwHciioZko2FU",
  "key26": "5qbpnX3bbk544hBF65FgzCGE4DndkpRsa8PojrXVoVdfpfXTrPD8juf2541iQAuNz1QocdmBD2RD6zKFxey4BY1v",
  "key27": "cmqSSeth4nW1dmN16StpqGart9ckPLALwZq2ntWYiZhDoamFHtrdK7ZawcYhFooAt6AFXMQCJsRKPhymdnHPU8s",
  "key28": "2mvnHoYVErJ3Zw9AJMHjKbHTWbAkRXKbX2xaHu6Lh8gpWRnKDCScDe7dM47dBhFNaXtcB9Fq4VJoMJNpPvrYN3LX",
  "key29": "3Mz33G2RJdN5CKhCMZv6c8WL6xdooT5b4BvSKPirDD52jVstajmVZL9sGWu5YQLzDAt3ZArHopPqXsgUwABTG2Lu",
  "key30": "5AorGQb5hNEoMQ5wMjoZNcGsafU7otcQnh2tBkr9USvmQ1ovGg6xpCohjZo4ZSQXdUXJsFLYUXHxXcaQKrk53eVA",
  "key31": "3rXm1BhoeqsTugjnD6EFo2WJdQXYWMScFwu39yRzBmjiYdkhLgukKmF1wkAYJ3VR6HPKyNnzUNkZbDuRS4P4QJBF",
  "key32": "46352nhVJqSbCKVr78AXSZLjfz9R5CLWJffkG2uwCSR2knf7PCWwUYv7ioAf5GhGAhE9DHvra16Jc7GNzynzf9Je",
  "key33": "4gXjCAevixa3WEM9JVoS8RZn1ruUqpFoM5Q3BcH1PDtHxdK5Pv6KRbxaamEjA8PzrLoZvSges4F7hfWJHNnVM7rX",
  "key34": "5MWwiLJiqTTA6fMUCgxasTyVvxLteFfnXGc8Z5V1P7QEkeoQg37ohtZ5jTjrFUPVznytD1yCk5fh9EnBwqhWdPCo",
  "key35": "4roDfRfzKcTbJ6ivVfnwVfdkSTx96FaYQioEQ6HgBTA5NfQBmSKhfmMjjmeVMVZkLB5jxktyEnphd2ZYdgPEUu46",
  "key36": "5M2iTRnXxFrvhqaQVKYpuE3e7fbXmbVKDmwCc9oqkLXRwJhLwFiQ4rGNXzW3DQi9xgT6KwsLzowyhYHuDBJ8LPZ9",
  "key37": "4riq76P4s5QtmADsxLGd6H8Z7NLh73Nscb3s7JFE4dPfZjsf1f6729LQUVYcHFx2mZ5NtEJtx5QcE9wiUCcFL9oK",
  "key38": "51rEBKE9v3Jsa3dmsAg6NRZeuysihsHoWDaY4XFFUSk3JQY5eRsxv3FKKGvCv2rWnphUgEqHFuMF7vmiBsPoW6UN",
  "key39": "4MVq7xEKLHzgcadp6PgfxDPjzYCSKsMGgF2qhKy459kWT3pnkAvEs9BPo5gdbR2K6H4gUEB2AzLyvisrMoAs8oX5",
  "key40": "4pQnWQt2k2vUrN7qcpRyAN6TehJ56NZf1Ncsjo8CWSF4h6LJdxHmYmRxx3ReqxKWRDVqSraVCZSW4JHbGnHwmTiT",
  "key41": "3XxZb5L5qN2qFoBGZxERftobw2WyWH7cvREv4JN8MXuNko4f2Y8qAsVrsXRFwLUyKU2fncKmEaLGiMyQy1q8P5PL",
  "key42": "2GMGUJLVb2dHoL4xYR6MLhtpYzsukrqhP8XmzxpgfS5vWjZKZfEEdcw4mcnabEggZ7Td5e2hbqomTT8WhLkYVerr",
  "key43": "3cfKaGr7F86bFtEuiGt4E8EHbqcitHshruZRneQDxUPKiAMjnAmCrW49X3eLkFRXjJQveRowWPNGd7PRZv4hNxrg",
  "key44": "3ZiufpftTwo1gKmHCpLWxUTMv26j499N2RTQsML1vUYx2PWxcrAN2ZaAzy2YeizMz3tU1FxwGxaQGLApXTUcsoJ5",
  "key45": "2qq5yYALRhqVa3wvUaTixEiyvgRDzoe7KyyCEhys3f9Z31TCAz3q14Yt6LppQ1tuSdXkr2hWakF5q6C1oK3UTb7G",
  "key46": "5QKiNieQthxUSPfoixKLgPiJBtDeaWYRic8taC6x4nBp7gr9WJNBZA4EU5rzoz79FrN8ACLwJ4LurPqh5bLtFjmu",
  "key47": "5T8DWuzFGvwkx4nYQjpV1dBvmQkGhmayHNjfjZZ9UBW8Xpcj6z433XVoVXe7kkiYPhhptxGMGonjoMcZqiUzipWA",
  "key48": "3TAD26ybssPQXGAai32hUfQgvztm79FdBLQ6rZPpbdp3vZ8wcm8tjR1srwKFWh9jfQrJCipqHKqeLDkZF4bPKgHU",
  "key49": "5kgbPmxQw1DtdRTNNF7kHfFU5E9swVvHgVAUcM2Ebf3YKFZN1qhfdjm3uTGK1T6fEF5TrU269a3XX3DhMqn1CprL"
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
