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
    "4SSMABUwUsrrQyZUf8HxVguxRUuRAU1ndmT3tGmijkWJraSvNQfYEGJgBpPCv6VKZVG6zqNpYCJojKVMa4nV1Ws4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p3pEE8pk2dAKkrWz3t7YVDWuXFV1CV77uFfqffGHbH3pcPsVzznHKriXhesLjNQDFQswWoX4YGzZX5xygcSvzsx",
  "key1": "4we4x9n8YCAFhP8GGNgmBSdre5qmxE3j79Rw6okeSMfS4hfN5otgneeqaHvHqXjNkvhRTPdYMktLaTs54VZbmpx5",
  "key2": "31Wciv21DaQX7vsPEGaAVy1PvuHgnN9PKReNh254zyGQDDwurgZM4EHGy83e1JALUSo2oasHA7D4uBjXegfa7Zx4",
  "key3": "2D6zHirjWxNYt9b3bXRtwJP9ayhP6x3QRM4SEt1RDsfd1b9Nzdsbzxngzdf5KVDyrp5hsE6bUnviNiZFGuoZW9rL",
  "key4": "2qyATENWtXovFHHonSDmACTwtMMksctk55GXzDEj3ARZ14aGRGUihfCgnb4jXatvP2mvadiRxX6WYs58qmNvU2VA",
  "key5": "2nQYnaKuekVcL6r2HtFLEGe6gNrYVLP3ztPZMMtBzB6PNw5nuhjeqyqaSCop42GZdTZshUs48m3NkNAFLt9h3o2W",
  "key6": "5D6wcuwcidbq2t8i9qWd18iWvk7KsjizTWWTN68tjjMj8SRLWrwBjqY9s7fjTqD6EeceqTBKoeMhEcFEV9AGxRKf",
  "key7": "2FRotJEQbX8Wo4BfNVEvvcLVnQZMHioRt2khxuxBi8XEuygQ5445FZzdaAwYKu2aWaz4f7JTTTaWbe1yUz1ZLGta",
  "key8": "3E6SXm9JnVnHzhjEVbB11Pjkt5r6GNcgsr5wd9UXtUtMFvE93BSkhAeQ6k3gkhmJn9uxxbQLRz7yeanKNTBVm17Z",
  "key9": "3M5usUDGvqfVgaunJ9Vy3tfdXHHx6eDVmwpVfxiJRjfcKFoWbmpKGko8RxyDhfw319ee7AEySVYCYAe66dzby23n",
  "key10": "4JPh6jtJUcAWc83noE1RjqUVfAsfzYDFX1AnMh6VeqBNGoTAd2g6GxeJwQzfhaToDMisUqek3YbRsr28DBS5BPSN",
  "key11": "25pHJ9SQzrMehSyzEsR7741Vr4aaKDwAWKXejxuxxMjViht9erBNRNiDNmMsTQ6LUFx88rhtzbUf83EdVz92nNYH",
  "key12": "4fVkCwDz2psFsAdkXkyvnvotgKm5hhohP6UaK13WabM9DqskvJoghbMmmyQvgYthGQFXRfwMGaGXap2ARhGCX26p",
  "key13": "syLqRDvxG4zebPVjNdYWQsBvY1agirHAbh1tuSA9CyKddnJtTEBxGVTApUAgBWqoeqjP8WSyK4BYx6KA19cHdid",
  "key14": "2jPrRKd1pMSTLenXMdpPLaXgntY5uC7oiCNXgmw9n7adDe5vT7F3AQjdocjU7zpVqNrq5BFgkWeHejMq5v14oHka",
  "key15": "3QLPmcjUE8FFo8nJKYVfee2WDi4zY1Tz4kr9yagAG3YSd9E3aanG28nWEAVZjWMZFkSV4pmUJ9TQv2dxyQDrj22A",
  "key16": "4bawTPzHBN6eDmMo8s67AgH33nU5bNUsJ4gFd8G1FpatRg1UK8PdAityFsq16WEHkZTy4eGW2AZd5R6ApcsxTEza",
  "key17": "4HGqnEhDycYgKCgTJq1Rn518SnNYhf7wEGuXgBWiFHDsDeqdKd4HiPgc2MRMA1FCdqBg6E9fDahPFkT8afAb3GKZ",
  "key18": "5smZws2GrMa7A12EHeeaNP3kN8sSKLDZGH3B8MNQVBA7GKydZsWpuXVVww4ftLkCGJBL45MgppYvpmaeEQFVKe73",
  "key19": "3zLx6LjC7GVrMGyKVqhM96SsbT4ZUZYwhvADUh26shJLxk3H2s86JZy3ngoTBucTX7vg5vkW9syQfo9B7yZh4NJN",
  "key20": "5GWLyAc9EMwLAjF5aaACegSvTXGi4ADxJTXVpQGxJcm82i5Z4rc4eim9EgcPwT1UVVMt2UXBLHbrG5A3HdBCih6z",
  "key21": "2CD8hEeQ4cKnbA1Lkkad2y9AxHcrv1EeEQMWfTToQf1GVBjtanhxx7JycxRFf7AtwpMqmQBaeFFJSgp6gfteunn1",
  "key22": "2UigAKfoHjck9MA78PgbMCbpe4uzX69fh21gybH1xZnDHp2wLxqZvRhKfxBiVBZLyCXKhvRPZHSH58AsvCcW87wz",
  "key23": "2W3djms5H41NQTrWNEJQZui7jmidjuotV7HoqoMe9h5LBPA2eDqSApxxauVSzrkovsn4Lc9GZvamS9okKX14hU67",
  "key24": "4JpLHyw4CbWHJCuT1GESTcp2qCWpysTRV1ZEGdXu8Sq1fkApVispJZJEKg6qTYpP2j8FYeaQaSGsb2fZX1QM3Jds",
  "key25": "3Dk76BDsppcnJDxDU5xrQQQzPgs2uqdMWAwqrFHPZCE7EohMkGW3xnPQUk84ftdKKvES7hQFRkrYqXvi5on6c5FB",
  "key26": "2pYFJGMM8sBpEhRKjHN521PfbLewKKsSJM1s1FHBRR5QNri9Zj3nWBXTPcNzK9AMrG7i3u3noXBRL4vEoBA166Rx",
  "key27": "4LUCwc2aznxBJi2TAT6EKyQqypuBqAbsndd3mpZNMM1pPX2ugNAoEXiCWZqDgzHV8rUfnEJTXzX3t8QVivYx9gTk",
  "key28": "56WU3rAUY419rocXx1aGxFsGpHUXdYk8dB6bYS4A5R9MHoRkfbk8ChWf94brLXD2EgydS6QSwtsiuDFon4i9xbrp",
  "key29": "5LfmdAnrNsgPvyEtXYD6XTk9yup7E3s939qJ4bWfu7JykFx8ndfDgQXyXDHpbFWmudF3N64mqSLxBK2HM2C3zBTm",
  "key30": "4UjY8pLCBg4cbea8Wm6xDbnNtyjoQwH5LbjT5gmV6qUWcRLHGEizGgYUBn9rvshCbyaohJkLnKgkQn11LUGeTB85",
  "key31": "5P9ReJhvzR4yAKYa5q14kbHUprBCXTBxdGQVUqyDnvHVdz9r73Vn44gXrW5UCV8coNnA7RxMWVWTYmMsuabanGs4",
  "key32": "2dW2JwS5a6xMa7XQWFUtoHY2cAjCDsRSeqxeELzH6uCWyWpv38cYx4AtA58TD7GPNcD3K7R8zSjTqB91ZjWFypsG",
  "key33": "uB61GoiaYHxC9Kf6uW7qyEdNYUBfA1SRP5efMXRLFZ8jpooJtT3BrbGXmqwCRco1mSrVXsqUz6fqYHw5SKrVqYt",
  "key34": "4j9FkQi457dyQ9vzAk7f9acCAJCSoVeKkExcds8QU3pZAd8UGZ87c35EMgBRTC5hS42z2dv3XDqhnxKURaoJmZmY",
  "key35": "2TRTu1UgJEmU1xPDgPLXGwp2T89Fcsyd23oGcmPnhogajC6bNdTvArnRSk4ji1CfrKByTzsDvJTNJbpLiuQGHb2b",
  "key36": "5fh3DhTpo1RN22PSLiEqAVKrKPW6RGtR8ko4QpZSMJfPySu7ru5xL8C2PTfYusN9wkYHX5mewEN95ecbkhGuvfNe",
  "key37": "PXd63DuqexzMedtWXz2mT8AgrD3k8pPJiDxZbGctG3yvYJrmgMzNgEYjNHeaPirALB5CHfr7wsC3hkooSxjxkYb",
  "key38": "2BWRPUMAwGdk8mQX4NVPW1BHxDhrU6WcQQRkzmmicrdLaZXANeMjSiXYRF69bH1GnjySroiXHV1NfXDubu6ntD1Z",
  "key39": "JvhCMC2djWSAz3SHfVUQG3veEDbroBUU3MAPNx7YN4dM6syXvCdtvMgFKJDBf8tTMR9hADm9aWz9muzAP7jKHD4",
  "key40": "gSnVo5SpghngK9iMEKMukbdcQJJXkRJd3Kn9jurxiJd3ZqeykCUdtwLF4UoaK8xHut8CV4LTjmsbCzTFa8UgCwY"
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
