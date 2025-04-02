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
    "2Lptdc3N3Ggfzi6EAUctuW4SthGmbsVmyxn1dygpALqkAAnxmXQEPcBdRvPC2br8v3qQTiKWdGctdqqHQe3Y3SQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UBJ7FWCp2JP8vHHpXu4FKtBxs3XVMWCLQHNiZyDuqQDK8v7dZ6sL9oYA6NcWSJLKCerrTYzANCZrdATGkzpmXtP",
  "key1": "EuBdWSSj1myvs53gBSPmbA9sSGA1T7gy3QVHAnM2WCkgBcYQr5fLhg4unuq74RaShZHkedBxaCcjJ7PLqmYCuSv",
  "key2": "2D4u8Xt1686NwBDsWYTciNhpwuTm867QUvPdMpcDB3k8Hw9qXP29wiUS5RQTf2eAv889W1QVFPCvpHCUS4jdYihW",
  "key3": "5oipsCr29A965KQ67ifTy3nVjRy3m5RWGJ1yncamKxnXZJCLU4ZphGEFJtwR5vjhYr7ChzsTcrY72wa7shRm9ewv",
  "key4": "2Pc2XWnXAcDUJ2gkjvUtXfKoic8tbaJUgYJaitTDT34ycjBocii4KdFvqgLh8muF5sqzfhbconV7ZV1bacxuQ1mM",
  "key5": "4B7G8whcB39sEW1sZnM23nRjaB5vhq1VtUt7ptVKwt1pBEVJAyvddtBpRXBQBNypgFdfdmMSPaRwe5Ca79LhKNwT",
  "key6": "34Q4FrRVV6riMeuipgxshJJH1yYG8J43nQU82ix7KzNrre9vdv6WRXv2kSDsLDxtpMTZaQBsY1JCVNUZ2iMTyr7s",
  "key7": "JMJqbVJ9WCYr7HqtvVDFbGKqyHjXJbs95JcYYJSqeJET8u99DMbZMGFfB82gGki9rP3snVTzeV86AWf6nZwRgY6",
  "key8": "47M6F1j39gLWPNdZmvtYAZCwptVnpgxc2163grrLqNyLjQ716PRNHPYNY5Rao9dW8woFstntexeH4rhJkzPHtG9v",
  "key9": "3rkVso2uY1nu5kDnuosYQNNe3yaqh4enwdV7cWV7GTMWv5FsV9zHBAjQMxw4E9yzCfXUfxV3smprkuEPqeiDwYZt",
  "key10": "4QqgUpYWQaQfZBLCaaS7ake17zvJzz3vet7C3zP8qRANJxvu4XhkueiY37USmrotopSqSwwXjmtQEKphfvwURxeA",
  "key11": "44ZXkPmfNLM63wjhfq3JupiWhQCfT9UqRFpvMEEeFttYocov5RvwpsuSfF4ZbRYfzeqzuY5hzgyap1H8wxvVEdyU",
  "key12": "PZKpd3TREc9Lfe7K1Yt4LiZiqpd67NsH3pBo9PUAPYM3c7mbwcH4T4nxK5eTjgbG6rxYFG3G1feToV7xb1z55dv",
  "key13": "4KYaGMm5sHVYVUznaomB7KfDCH5iMDSKnauUka5NMbGipErrKQF6cd9iGQB2nUJirW8X1sh2FsSN8C3wV7XeceHZ",
  "key14": "oVoNUiRwzx5UZzp5jakYXgJySczM9pFdXxpATwYi4NS32v76H9jsAxxSg411gQV3AWgGmWdxDYn9byQHXBjy86u",
  "key15": "4AEySuTACh4dRVJfeRmKJ3cMbnZW5AvonZ2xaZD7xE6KcR5REguvztysLXGq9jrUu5QYk8MtvnQr1H51DL3Mw34x",
  "key16": "2Mo2qVGzW9CwbArH9PQgBBBs83taZDnoHGZtcn8qkEy1rzegNWo9U6hyFhEbEcmqCkLykGRZ9cjvNZVqsqxUP6W8",
  "key17": "36YAG7SHQqiY3ZTyxVPuaCyRwxXNJXUhtxeiJZagcUCrXAjmsaQ7hU8CNV94CHReXjcqmmM4aQ5w5gt1yphUCy6s",
  "key18": "CACgAktf6HXV6zHSveHBw1on1kmjgPeSEzxatBqoWy3W1JCN1gvF5DhGHnru6s1n9fWQRhba93FFn69dPqy9fZ5",
  "key19": "p795gBNMZt6VjPPRLqqDStoUXD6zvcCVcho6MwvranijwybH5hhjE2jN8r97iNFkpUqgzVn1V2JewE4m3F6P31D",
  "key20": "49sLFcRgNS6WhtZWuasWw3Y5wFStPGUmxiG7mvoDJnCmh5CbE9cRM93uC72gg6SMmhekm5vPYHysMtKz3ueqDfNN",
  "key21": "4wp5h4txXYuYDR6MRygokBUFtQq4uirG7swR2cVZQqTPZteHrWYrYRAVXtbcM5ciYwbUTKpTD3aHn87hLkSPVWuw",
  "key22": "G38m7KpA2dfvZuKEmWHcU22xQiEECq91bqDF5Yyo2qLjsiF537WfuEWyrz6JGEw2N1Ciu5pamGxtXKafoFhcV3i",
  "key23": "4jrsjR6LxDGswW8KBshZWWjmSJkupRDqFtvpgq3fTCrRFZwr2ncJCYqbsq6VPwkM2h3cReAo9QKuSKqfNaPJoSdP",
  "key24": "4CzJdahz5ZPhSU2g2bkX8dn5jqy8jNH3KN6Pvt85yK4hoUp1bhUguSifSV6fyGsQKBf3ExN9CQfRN1h4vDZTFuPo",
  "key25": "4tgwY1zbQZDN2GaUGEjX86VD1AR4YURrkvotueEebVccuvP9rUKVWxcKsQnedjWc6jaFbBnMyL7vhdUBGQhorKs",
  "key26": "3gLbm59xzSTht769BPKB3b4SevcHgJwoUDpfWQ2FQwY9RAskrRzRRc4DJoUjccwU9Lncv4mAWsAdobVgshXp1N89",
  "key27": "MQ1hoQguYAiZHnef98gsynmaWTYm7UPu6AL7Jnxzw1Ew5RjiWRpJnog232GrBkFD9KBsQ3FFrzW45S3rjTGZ8BZ",
  "key28": "3dkzBqnVbLEFMufyiVpY9NvEepiCqGLE3mCRnaHxvKsyVZdbNYAvrnCQtsE2h8MavhgnQpcx9VDpGYkMMhS67zBD",
  "key29": "38mwxWQFxgFNVqCw1AdAZrXfww2kqEYj2gEPenT8YMmM5dMC4pXqBEwR8uwJpW1oHDVHc2uX4e5a5dHprW26HMnp",
  "key30": "4exe1PnAtQFKpKUYkLq4qX1KtmqNF5VRQWQ3spQr2Dn1SUTtaZSCXF9Ai7epeQbaVDqgkZo6SpgvL5jVJQ3ecXRy",
  "key31": "7npMuk2bJ1JfhjQ3SFir4SsERcqabWGKAPZwBQNDTQRTu2v9xdDkac4pJ9NwMjVoSPuhYFRUjYmtQzE9bhEBFrw",
  "key32": "5FuXUWCmmT3d9Gq4Lbtj6zspFwhPLxPB8BKupdR13YDsQh5nt5JsttMAZGHaC6bH5qvVvrV8DxP74f8g28QihsRu",
  "key33": "3ZZAudromdW4D2HQXipr7v7CKvy5KbyQPa9s8poSwTs82JG1Ny4xcNNXzzPDFCD7msVQbfKaWnr23T26XUJtTSmg",
  "key34": "zzzY8XeZAdmMR28AGNPoCoBTXH4JqZLPtzYieyNnjpkNurpRjzUpLctCNRxJPQboRTqkTV1P9bd34k4uXKk9Cis",
  "key35": "4aDhj9syAKreXTTv9rhNZYnyBD18CreswcvuFXRqUFsYFArESdFoQT1kL4muFghxC5RHj38rYVcQipjeNutAFuqE",
  "key36": "3hE8dFNXsfdpYaJWrABZQevQYnpefqBhTna8fhwbWQU1A31JADnSfgZTRoYCgLakAoRTojfz6jojKm9DkJv37sT6",
  "key37": "3nMypm44G9ygfi8jeMUcriFUU8JXJWSeSRPT28EUQCxZS3kXemotMzViNvrCtABmK2QKze8RPQsBwAd5TCLYXYUY",
  "key38": "214wQLNhA2V8apMmpqDVQHPSFJGCRHL7cpJE5dsSukUFrqX9hGNpxT4TNN6UztTLe6gUjqWqXbULxcy5ARmXmtCU",
  "key39": "2DhKzDkMqdBy3aWdNdDMpxQHfKQxapivE6vYenUWEa5Ar828wbwA6oe2GUV6MEpMPcpNX6CHhmBxHEMF2CCsY5vc",
  "key40": "315qtVjyDPf1AoqYYNsTf5ExwxqjXEEPeTbYPZAnRRgTWg9Br1queA2Cz7npWcb6wc7f5s9SnK1jkFB5VG1Gd3xe",
  "key41": "kppY7h75yRyNQcBJ2ZAQeek7S9sXawLRDTQuuNdssfGasmyh4EAcPu9P8WaWHwHHUWgPk1LXFZKaKezvrWdNYZk",
  "key42": "5Mc39VsW6kPYYSkvBh2e59denNaL42Y6hZfCHow1tN17R5mAZ3pfacfPATkcQ5gfwXYZHQHbF2gAJ6SvBoYMLB8H",
  "key43": "2d7pw9Xtya1e2KdmnphRRBHxDQbAAVbDXe9pcfMUmauC7pAKnHgVbrf1AbFJ2dKP2bihSpXqJb9QaRvQpBx6Uydb",
  "key44": "4VtZ6RpXVSqaCAnEqMJ4DDyXpKcKPfmRURAR1nSAdsfXUkxPTEAMprhxMXnJJsZ9bEQmb5cZQaDEstSMmLFndcud",
  "key45": "4L74rK1DM17974DnJJ2DZVXaw8Le7LaVzQSe5Bs8zyFA5XY3xv2WrEqA8fYAxRCTfxLpc4nEwXha7hfASnacRKZc",
  "key46": "4y7PPFdHgyG2AsiZYCHoLMrqKa1GMqH8HTXqJic9v8KbxvsqFVrvtpCZJPdDKUXegJbEt7UHadkmsWb7cfC1eSZA",
  "key47": "2Roca1nuAW8poHTG4VbJRJYBcTkjruXpKZy1iGosi9rahkbqWyD3sg2NDnTL3dnf9k3xfPMCr3ELkTbAWSwXac3b",
  "key48": "4Gg4yZ9Sujr1MEede48YPhbBZaB8CUcsZgMRS4AFHgNi6BdcTRDPiboW3kbqdsnFCwDg6Jgi3EdZy4fVJkAxAtz8",
  "key49": "nKLLzxEC6t3Hucfgyw73qVHxbwWp4vNdTAhPxfsPZfHwed1o5FwmLRLZPK7BRQSknEavsXSoo8AiJ3Wz8UG5MdP"
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
