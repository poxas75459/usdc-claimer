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
    "3NY7EUdaKogP9eYyKz9j1pGw43jMs94uzipgDRwRfCGDcHhtfZE2PAvLNPz7pE9BYkTQXZEqGkrkicPTFVscc3LV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nm3gGeMUdZNBca7sD52LimkNj62j34aG6nkgyKiqDceM7YJ3NGV7zmhFyajGCSBmZ5uagFkN6HDeacum1KLM71p",
  "key1": "2nHXxPFus21V2HRp3mus3ZWSStcVWNukA9TDcrCMA8SG8ZPTFmEBqN95Capo75gdxqnpzbMyj8rHHbBorZVre4pu",
  "key2": "5WL3cbqNcWwvMehJaWXUAhdRUKNMa4NRjV5bzBHmeGTCvphoeUVLMzUEFkdg6HeHxzbmdaSjUQRFXLEmXdDLgqzk",
  "key3": "4EikzFj67S19N65P1fkzas5JJP4R8UeKtCwbJ3Jz7eFFzG96yXF8Zk4LBGJ3UjBof7nUQgGqDcDJthvDRjToJkNL",
  "key4": "3CFn6uZufiCzSGkmbj4tfhqmqzZe73GZBWoWJCEiZ99pgXHGp85UvBwXZnKca8pNkuCx1BisiLMGvrVnx36tVWQL",
  "key5": "yigGTrGvjnZdLMf55QYTqMeMLqc1ChRQ9njN7upzKvJ6EV31urLWAJ65TLHTcp9TGQStmVYxMMcx2W3Au4b6fhE",
  "key6": "3Ec5TmC7cWbVwJ9gkWGXFyrnwoffwvhTsJw3sNknTFJtEfh8D2XzgCUzt9v9uXZaoe2J9kAp82Q4HmDbTddH5FS",
  "key7": "2hpyM4NERYabCVZR39hcUmfnWVAqx7N42974bqghpkskvDhZ3szDtA5tAaFmDfnUMx2fwUbpnveK6gFoaxHMrb6e",
  "key8": "3TqvPhLafP9RR63gfNxkZLYDe1ibLrfigHRThBFyH8V7TPBsUcoByhADrdvYjaiQ7nc9ZoyVfFdhGMkwREygWyLc",
  "key9": "kcG2a2cTue5aY9rhB6CHFY4W9jU9X9FSKHnbJUndr7BpstPmJHMkBawQbD3i6chmAhtkDhyLYdAUwNhsNTYgzFk",
  "key10": "23dVakkKepfUX2YkE4cN8hWMKxkhA9VUi2daoVsXnJQQxCkjeZYCPoJuz3ca54v71r2kD7W4iYJe6DVngrK18wFb",
  "key11": "2juXVy9MqCfzAJEmjDaewLHp4HWVY9LzwiSsYTCRtVpQ8Ngadkt3rnLgAhV19UTag2p2YpEdUjEMK5pjuqjRTx4D",
  "key12": "3McQb4J2G2TV1QnCsAjjyyrH8PGVXRHoHAnHnUnjRPzSd16A8sCHSMRTkagGNvyU5yMBFbctdHz2xYBumA6YE4gH",
  "key13": "4zAJDmKpJKyZtngvmZuhGhwAjmwpY31e1t6SoJPdg97hChc5zeMFCwYucNhSUuwufvzgDV7q87xYyjzMU51kJUDv",
  "key14": "5XgU5DQNqQ1RUW9qziXwYZnS5AhkCr1wHocUesDm6PvSMcSKvCFEFDW7kkhJDB9tyFbmp6PBZSFY5ZKENCTWAVm6",
  "key15": "5L9DAUb5wkw7G45Lo6CTS48DRMPWJ8rHukyuD32Whcux4z9XMspAHiiKYeVB3vk5iiPiqNzGF5vjwrtpHtqfaids",
  "key16": "3MJG5NL2hVPZaCSoXe87EPysfF6XHRacuzVVuxhgD2kjudV3GJLqgKthphqcW4MT9VW6tLhyHW5SZrDPHVqxBG5F",
  "key17": "5JBbdqTXqSQHFZPgJjT7j3CPVRejrK31gC5iz5HY3ZVjNxf51ZA2n7MUa2XT5T2qhSSFXEFbTAGJg3tk1QBoZGPQ",
  "key18": "3FD4F1cdu6XCQvanR7qbPajhFGruK8zsNBpuqaDEdVLzQy3wnBTkDGtVMEh9bgi6VmmHUQ9xxqnRrm2UmvaGzJ16",
  "key19": "334t9LcUGVaMpQanr6ZDLH6wPbNdx5wpsJT7EBGrsGWQWSKfNJScKhdypfEHDUG9hs116tjt18KPb7bZ2bT8CGyd",
  "key20": "5WggZdC3CM6QBBKkurDULHnpaQ6MmgfjhHWfMmFas9TnAEHsAJKd63pbb8Gud3ffgz7YLUzmsmsWSkYj3hq23Lp4",
  "key21": "2J5WQcpXjXEUEpdYr9DQqZUZsf4WP6QDzHYYhBynuadbbDk5tVx4Y3fX74PG4AjudZ6YfvkCsVwddJ7uaaX6Jgcv",
  "key22": "wFDN8qPfSrMBj5mXWecL1Bj3qwBgsfjPwa4D428uU6HeKrW7unsbVLVYwWDNoTiUJUgY37d4D2QCqMsi7bLPUJ7",
  "key23": "xck8jLeMC8uHVsuSRvZQGav4Sy2kXvHCG3t3eYNjr3XTPBjPrCP1yaPtVsYqvFjajrRpCQhTQXXNkzL1wv3uswT",
  "key24": "23Vk5z2Q6jJtVoA7mRd1zDGskANVbb7sm2y3ypHLH2rmagiS8NmWGH8hNfDB39xMFTxswm8zuSRPR8H9aq2wAiVi",
  "key25": "5Rd5UT9ndzCsndxrjqDMKFuumjE9QtennwC1bJ5n8LEpsyigyZtFXyyBwuNLgWkv2SVspjEwMcxmHPFrL9rTquM9",
  "key26": "53ZCFBdz2uCqxy2ZLRQH8KAZgh3gf2rRoVEdPeGi4asj2kRz4Z2xQyZFNz28nV14c2JeTfrMz4Uq5duzup7wQjDM",
  "key27": "3rGqEJpVnjcnf35MDmZom8BDhp8ULVagdW3D8rNnagoxwU5WAZipppuZ4zF1kE9HLdMM4JgjbVpvJxoSBCsCKrhK",
  "key28": "5wMyMBoA1vZvJtnWz6C1Y4yFKuUkb5B7Lkx6CPviE3xyLioGjbWZ2XV3x9DrUWB8Peqe7cSLcqwXnTDsc8Qw1RWr",
  "key29": "5SMncMFxTQ24butY7n6NuJqz4eibGnnF5VypPk93ap8JYzq1BnANpdGZifwhiaDwFpcK5rEzopzfrJUEZryRmfHg",
  "key30": "637C6R3oDkFZ41cqVpUPtNEJW3b82MNhzMLQtAKLGr1GaSqZcnhGFfdwRGnacfcgZT3eMVpjNWnsDukfuHFCJBrQ",
  "key31": "bFprGmzSyQax7TagH7uGzSVbr28uS4pN69HKgXvdn6Xr5HkwTLFYYAMM9tHRbspPjoq1afcY5kaZS7AZiAs35YR",
  "key32": "3LNFDDpjr3WwkDKd83m98PVZY5T2QdWHL71fSgSpVXWBeztPzY58j9DRLShRh6EjGpxLZYtAe3DNgAtEWXrAeWby",
  "key33": "5U4iXHE6uwdBDxyNvKwxgrCfSXZfpD9P95t5a4issv8kDF4anNRGwNrRY94wwui6Ny2buQJDadfhQcAfZx9DWA3A",
  "key34": "2XPviPeynCJwrKGAjsj7mXwwYFHfxfwvKJrYfUY3twGeWPCAfK8xKFexSBvoC2fE8HfbfTZonz21gvg3kgXkK1Hm",
  "key35": "ic1jUNMxhZBhQhxj77Bem5gseiaqHQo4Pi7repp9wzySCL8h5i9riDihooKbW8KU4VNAcKdVybgBiwpyp87LxML",
  "key36": "2zYPBYjBSjiHQfxzN9QeWEkiXJdxvLAVU7WJMYFWzmg8i5MVXxaYii1JsGcP27F2BKxTo6bcfknVK3LZHArw24M7",
  "key37": "4aSeJJsx6FeHzBCfZWfvwLAavSLYHVu6oiT2B7zotVTFt2qsNJ3x5qyhpRptwHXdGnL9C9YJN3J6ocGUzGKa2VN5",
  "key38": "2TaCSo3dumidhGK7UkEP2tqE9bzoYJ6S13WeoP11dMVnnG49AeVnkXTEKFhYNb7XW8iE4pqXHQ9cmfsTgyfWmqPH",
  "key39": "3JxAJXHpzEh6XYFENCrpUnjcx5wuWzKXsWvqdBny4TeTUUPKYbiWRywPBg1MDcjrSVomqAhaUKCF36jRKVrhNCYX",
  "key40": "5kthtN7ppejYbcqNK3KAJFANtJuBC9xFqJDerk2PWkWDP1pX3xvXPzaejNxnHTyBZnLxfvrZdeNQ5MsNigFPMJXS",
  "key41": "N7AXvNnQ4WrhNHheemP3GPwN73JRsjUb1SAVw6hywjBadNAvXHgWk8bt5jG359QNLTH18UKMqXJk2zKe3ALQMCH",
  "key42": "3LHAVxCwvtV8uVsnug4tpcoW1w5bz54A4KoYhqCDL8VLb4DYVqy2bCvXBGaehbZViaTa8doeTdSHSdWjQki8hun9",
  "key43": "3tSBG91FRQkoY1kxpsMMgCF6NAzUZcswN6BWX9LgbtLw5P3dZtVsdsdMNch5AXBucmHZMNSyPkBsYw9ApqQpYuTs"
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
