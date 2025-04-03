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
    "BSz12sBpr8h4C5uj3HurC6HioQoeV9mE2QvEJXLXuHnD7xM9EaUZFfEfbNA3xnGXhWxHYedTKgVQM4iGcxhSrRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DWVeXw9MJSokLQyYPQ8DKozb1GMuEt7wXnnFCxXMR2n6W3w47eALrvPF1BKw3wt4g57B2ZoW3J17FTUrCdxiXBS",
  "key1": "5gLwvg81wuNWoUnn4nz1zwGcGuLsUT9err4D2GgLjVQuJWqPxQDj6TXka7A9CjsMeu81vZMtLoA6XxZHcDgds67w",
  "key2": "4JfmHUFY8Ps3TExL9aUFJBoswKiBRLGoNk4jS6RfZXmQnimUzDQ9Qn4br6543ahsjkEja7iY1Q5Kr23rEBPw7yoN",
  "key3": "54Embc8wK5ERXPFXmzjKo45cuXQG7GcCCuP9sp1vKndPgi81hVm19XVfpaGp3EJU1eTbFDEFMjNsP16WKvrbHu5p",
  "key4": "4X84d1XNqBcmhFC7zgnnuqY5DvRyGWMupe4C224EBS2PYB5kyhM2L2KwaoRvL2EpSjwAG4ayPnhrMRJsGU8L6Lpq",
  "key5": "5mrdBRQPnD9HXuk4cySHFTGozuuZy5vC84w5SNTTgbsCdYtXzXnKZU3ozdJ9nfMCRxRk3QXLeau8VkaMpWPKCYMG",
  "key6": "DS8detfX8ZDemBA8kvYemgmkKoo43UisRsLBKJymNCGyqvSxPVKCg6b4ATovZrxSDTFCcAqTakDkGyhGJKZe7yP",
  "key7": "3kY72LFJx17WcbvdAgZunaSY2hkTLnwvsK7SNtRq9wEopNiQgjWJaLGNfiLG12FDVmujxzUALRCYfswUec6sYVsA",
  "key8": "2tnZeSr5yCfWsaG7LHZJpFaZn4wAdfUzRysqkdwpg4R7i83CAvVWB17hHqg2HJNksBUQJbGEwcERKTkGksK2DqBw",
  "key9": "JSsiCePozTddgXQZ1hoRdo9ofqFTeEUbo3qSj2yTpbXmkFHeGuZc24z8KquYpDCC5un7Gi3dc7TPYj7rAFyrqiV",
  "key10": "2b24gHLz5JCA4uRFwvFNvYLLisBMDT4G5WhHUL1Yg2pLC51stxQQSpQqE9TzGxt5bHPFvTHfzupzfXGVbDStcUJn",
  "key11": "3gbKN4LK4w5i3wFivDJVxucu99BHqph6KjHx32n3UDvWceadbHxTeEWh3xNas1YVi1CbuhyCUbY66Btf8rAHFHLK",
  "key12": "2mLMb11uMeatnPbpnN7yWhMLqQZ1p7F2VKDMmnXxvBFV9KkgWcSyWtFTJUEsLZmmSUrqo2hsdH3dVRKRDFckcWJ4",
  "key13": "CrWZum1rFtVeBhmsFHaTEZJgHEFQdNRSbrsJ1U1Txs5aeV2aKeeTx1WHFArtW6LRM7vHDL3e7MopNavrx1WcnKe",
  "key14": "49nJguv2HAqybbuMfqgCiTZAyLXu7VAa8FhCWX3FHnZoMFbkFvVcXHQ7893eAYV516GnquLiedzUgpbnjW6e6uMo",
  "key15": "4qsH89dVA23y8qKkequwuBxYxU6Dh1YQgdxtYATVrvTqJj8b7K1J5t2Qh1gRe4bV3JvrjsEmA8EAeUNXK6wZUGRK",
  "key16": "L9orSyXoRnq5nt17VMiLz9WTsyB8nehMj6RnatEwhdDCJkKa7uHVnEDYJg2ztbc7QGQiDczQ4eB17dJFxktu3nb",
  "key17": "Pa7TVHmfGgUmnbQvZLcBKqcV1C3tw3TEEuG26w6cKmfzwiLg1mcWy46quRh7QSC4SJ7K8gbGwUdXqBevnYoUaGk",
  "key18": "2PmEAEn883tCXbUSWDyXFRSWTkXKL9hitqUJThGS7adWj6F1wViqNpgqxruCqyvA34TaqYMkQXPi9dTE7Gfiv7BX",
  "key19": "3A1RGuNBDGd4JfbuvxUzPm1WiUddDmpjuhasoUjTUJF5sHgyi4Eq6SqY3uvYDkcwFaUT6rxGSMUVxepbHFSwCdBk",
  "key20": "wQqczvx5dzkd4hvheMkithvaavCZ27WXnng7BBmW4hyrr57AmZ8QimXZ3srjybHz313w7y3JHQgbpsE6sYhvpQw",
  "key21": "2TKvVwWzxKzLVW5RLVSoaBqjjrwgedc4qR4mTsd8wMnusWBmRXSt6sBQxR3WwGr2jnh6xBipEip1GHphUioyPNjh",
  "key22": "4BdhQZDK7cqxd9am3aEPWCcbZJsS7iWGtuBBynrrNxg1iA8aYiUBgHCVMeVv566cuyXrQt7JX92FB1SuLJpaVPzd",
  "key23": "yHda9TaNfFxxsBxMZWAxUrjsxMWxZiK5qTQHnY6p8ChYgHDeBoXv3vivbXVBU3QSiZNKqzXEHaE5nQXhGAPR7kX",
  "key24": "5LdFR7iBwU4V86wtFv7JoUaQu5BmQSqXMf7qQTUTyvrdJgno6dQfXA2mGMeiKcg7zHYJTYRiontXKUfWgSJCxwcf",
  "key25": "4rgt7N7LZumuw5E6y57zGt6bTArb12wCDF7rTGRoQfd2b7g3pxAVH2vcntXvJz7vcoZjb32eCCtdoFz448CUDiac",
  "key26": "4ArtEATQssyFEgzpbYQ6pcvmrtijjXuQFW3Rwmkdp1vtqYLNhakZbuutLBaYp1hvWThvZmStNZVX9JJaWvV7EEer",
  "key27": "3Ga9RtevajYhKnbJUiV1dqY4uXBongBWPhP8wa3nwWvVNJJJ5DE1Dq1kArxTirQNB8Ty47RitAbZXv9Lkg3B7tFR",
  "key28": "3Gyb7uNtrwMBXhiriSBJKc5emh4CUhGivwBjzcoLU3vFAJ3BaWE3ac9i89MBFNNfaB5CXBmLxmHnEauDuVPzY1Pd",
  "key29": "2AignR7Eg1nSANAfxauefDA1ZRc6b1Lg6X2RgSrXYK1ux5Sqm6Zk9vDw7MzgLsw2TpVouiyS7TWw4MqtHnyN4PUP",
  "key30": "3YnQck1x2cW3Kbk2m316HeRBMLfLMDZRG2ZYbsXa6aaxYnT8cgTZpQgdWitQvWKdKPmgzb2eVYrsqoE5uXb3RF2Y",
  "key31": "2rBrFxzEZrFbaLXs1E3dcqVLDVQxRYESmWgow7g6Do5RqcqWjS2FTnUfKvNvVMfbntCJdxd9ayoD7fTQQ5YsBxbw",
  "key32": "53uwBQmdox96fUzYQLdfG26BJRZkDYhHQcGcWkznZAoAJ7XyFGfVqA9wmbVMyNCHR163ioyV63RqmcpBNxHwHaA5",
  "key33": "5vHNpZXyDZSuWJN3hVGCorxNSGgLDc4thimk8Wjbv4RFFMo8RHuBp4bucGXumGw9AziiNtGLLiS3VEybVhn1tokg",
  "key34": "56rLmLuUUFGkBNQWjFfMNpthdR2KfsGdq3beJxjsFGDKvbjh3AsrXNNxosjrwpr5vUCNaTEV4SEvwbrYPJgVYx4A",
  "key35": "2wH4mm3WXizYJnAfvDHcZ4uE9bQyX2bksR1p6kUwzEpdcQwedy2t4z3DmnP4nBpTVCrUbte1GCxyLzQiUSh452qa",
  "key36": "2QdPg5oyZvGk6txqBXgpWV8h6jXF5k2zhfx7KpQNxDw9YPLX87wrnPC583rz1vbFtL83AmpHGURr1unRFMr9uCkw",
  "key37": "arwWonAe7PKmL3Lrbcvo6LsZrdEGHw8qkuBiJVwbvs9FEJZwwepzQ1m7E7LqGYsZZr1HTk6jMW2aDepUZucXqy3",
  "key38": "59auQ5jGghjGnvtomAepiAzgirZANHXGYYAD7abudGmjVpZPUtegjxHeE3ujZnb8T451sPiYgcq6yvWMnNWPCwJS"
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
