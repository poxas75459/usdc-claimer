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
    "xk8suPJBnhGHe87eYwsnAd8Dn1pA8knWBLQpmBuW7srP4koxWv1KepVbT6PZmDVzSkWPCzjXEUAcbcW497zPCxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sGyzgobGkoNZmKbGGpNAKREvsp4tWbcFXm2ocQi4HUGj2rSo6KjbE92m4ughKtd9ZdbCQEU3q9QzHh9tuBHxQbM",
  "key1": "eDtvHuCKLidfiiYMgJtpzdHcHyh2j51ifhppPBxcNYLHnd1pafRzuu332SVMo4NzQj9NeguSbuV2Dje77cDUds8",
  "key2": "VuqjdL3YMksYyVbYCX8fZaT9hKZtvwPsaFTdPj1NqQfBysdJANhdXqgoYejHUngUYy1urH6aRnB9sRLz1hewcsW",
  "key3": "5bHCSZ3jE9qYSbfDjxE9JuHwPe6ooXfFqSAS6co5BjJTbzMWW3v7UuJNyWkSE8xo4ahvZnEtfetPNu3gmkM2vqj3",
  "key4": "5SemwuSd35xCwWCshu4VUgxekWpvnbqqoRf1AHLZr8KcpFzBTS893Sep9Fy23wGmDJw6qxtWeUfPJ3KGH2N8j2ip",
  "key5": "sUrtUA74zpdXMzxVmres3BKYV6YjyyAjkiPEUAunSAaC5Hv4y2DJq3dfHFuowUXHPPv9SjMKWQqWYecGjK56vaR",
  "key6": "4xK7ePrKousZ211a13J8K9szPRWMxkt9PvwF9SBAxfGXCh1obyWKuSeMTUZfWRRTecPgKH1jwqXWpddRkQR8LhGJ",
  "key7": "49C2Nxfgx78iPwr6TY51TiD7yQxEsqSFPpSBBGYn94dR9kUm4LN8okGZwkG5SDnYRZbGXk5y2xJtNSBfYEXS1GUh",
  "key8": "2Gc5RuWEfVBnXsDe5x3JoFL7iPRtzsrGWxQTrYnuKGcJMJaMrsykm5jr6RhTmzQLXtk3s472y9wVWgnXwmwcb4J7",
  "key9": "2eu5UvEUvujv9V6ygggW92rqgEUd4aAtbe5Pu6KRuhNgZ7desFwwLGM9GTTb4QjBCedeo7z5z5YAqhfJzgDrjvfY",
  "key10": "4RkedBgQjBeyD6cc142m2sF1NeobXBghwbDcwcXLyk913hWfyfYyowjTeekwKVb8VD8pcYLePWAqcCyZk6rupNm6",
  "key11": "46452eT1dssnErhhJ6vqYmKhYqu7XQTWp5Jw4e4NmtNwk65iBxN6mHETMpV5dYfVXdwc514AH8Dme9wJJ5GuzQzp",
  "key12": "5e942pbxaVcjPtzgLeXKWjxiwdGyStgd2k28WMmS2LGRjp6Gx7EisVicXa78rUKecMbWq6jFDAoAMTaCAJiqyXNm",
  "key13": "2WJMJNmcEtbJ34TYTrV4LLR1Z6TiW5X2dRkxDWf3xbC53oxtoY6fwGBZcf6qKh9UBvtYbG4gK2obJLsrzbF2WRvB",
  "key14": "5NGnNr7x1QS1TRUVfx4LNekx2dMaZeNT2fdrS9wdCScz7dwoKdXDJvxbxoxcjnNuTq8AzCvCFXNazVU6XGFtADE9",
  "key15": "2Zbehm61ESJ2MCR2D7WeVqL9gmfytqxJQuuEKZqL74KkcFRCveVUmqhrRt18AeYW1BtS3k2ynt2ineUqX4t363VH",
  "key16": "4N5Byxh55QvUqY158sGpFvadaFBFVFm3oPtEkBk9ZaPiG5UVFEp1fe2YEnzFWXuvpZwXzx1YNtupPkjnjaGynV1w",
  "key17": "4mYkivuwLL3uESwpeaUU5LPmzuqeoffENTWaPr2iGdQ7f7Cf8peaLbtoAq3Gi98LVAYvAxbVUbAWa5FaVjQBDvV5",
  "key18": "2mrgXgdVVqdNsST6aPJzg21NVedqyYiwAXTNvQAtYwhNwZ2roEqthG8HyUnZXA7Dm45vsER24RB2LwRDxMYhWDy7",
  "key19": "4fT9WJszGQFo8jwjE6fZ1PYw3xVaniKAkxz8HZZRLMbefbKgGPTpCsMdAiXDq7jJfVpFFA75ZG3p6TSPSYiFzHaz",
  "key20": "5GiPsGNQ74Srq8DjCp1iWWcsrzovSwkR7caF4Sp1NvpAzT1FQ1s8HV6VJDWJ3FR57pWovkA33rMTWR2AwJygXppp",
  "key21": "21ZEcDzqqUu8upKxT9LCQZtyhYdSieRRd3DaHJFZfyezLnx14Eg7V8j1jscTB1GpVy4G5bwXCZg5LjrEBLn8887w",
  "key22": "2Kdku7rrQmx4TNtfhio714nkQscrzZwqcUZJWvwo9hDG4LS7kFucda1vvV3p6U3R5zthgcPgEaf2x9wmTXAVsTk2",
  "key23": "4zruR8qkWMVcHfkCvSDAC7MGkQjrwNmpnXp8RTEAGicbtUHf4fifmt7BH39fRghQ1hGP8XgTspUJhqWieqbneLbb",
  "key24": "5FQqhU1a6xi4niAYk7639aLDLnWgoFoMymbpNUn6SAonQsfrFT9muTcNBwTSvvcLnc6c1iLSdttdM332ukR6kEJB",
  "key25": "47BSTDjppnqvZ6NpS1ZKf8NT56w5t8ywCjfx14D9CNVwCWQjXv31yfFScVThneT16B9jw2u5QZqqwLeeg58KC9u8",
  "key26": "3ALpuxdAyG4FnkaWvQ5grTmJrtnHX9wWVAnXWimZUttVxarZCPHthRxLGcNo6bGZF4q3SGyVnRadYhApZB4uarKT",
  "key27": "126XrFJYJtR9hSaoQADQk1Jhp14rhG1mxDF5y5iQuidtZFzgSnbtzuEhFhMAy2DnUys43M2NezymsfpA4zC6sXcn",
  "key28": "2hiEqpUC9rx6DEd3ZpWdcr2zyLXxtjoDb41W4pYjDVirF6sUX7tSKLaBTazdbQNnrQna6fLhSQg9hKSFzATSmgNU",
  "key29": "5pBV3ACWzLfwzSnT6anfZRYhgPFcMn4wNPPNrjDte2Q1Kr6NSVymXvsNtX7qciTXq3sTAg727LVdNP3WCMsR8DqD",
  "key30": "3eVXZYBLtp7QHXHAzmSQ1wFX93hAKyfGBTwzXfiW5vKqrmYJRwTg7ix99PSPWEp9BKGA7SW6pYXfxrYCLtZ88ePP",
  "key31": "hi5r1WGGsHDFaPYPbiQRsjxg34Lb5jTVJ2F5EGiLhYR9LUnXGxYr3fqpqwLsXB9rsXYkT75dv7NuvfLTooA5Uy7",
  "key32": "3VyMz1Bhey916zgfkNWVQhq7hFUSF4EMKrd5vhVPoDSxBKYFx7PeS2pVfCQ2eC5z94mTefkucKymxkNVHScjWsBZ",
  "key33": "zzGpkMzHoCM37MDUbrBwmx6UobjbFYZFdrXBhB8kJwxeew7xXrVWgFC9XqMvmNZgpTBMgZmBki3UrcAdLLDi8JB",
  "key34": "4cdcqFnYWfT1GTv1h5rRDAto523EjrgCwQnoQmSJ5Ja7uwJ23yr57n6VUpZpgNtFjPkq2EYbPQ1WB3H6natVhw8S",
  "key35": "4xddjSrg7vu6PRFdtt5NJBEF9ySKeCWBFKzVHe7bN6PuDvP6ivVKt2gzeaJP3Sh7wZwYa6TE1xUQgm5Y5Z6cfT4G",
  "key36": "2piWiUZYVmELdEVMcy8Zojfr3uCN5yoW7UmdqUmAqCXR7UYB288DzyhKajWwWZsJ72XZEoP6vQkbPEgAsLgVMZ7G",
  "key37": "3HjM1GML2UzyiNjKGwrSAM3AVZiditRxv4fmy4Pznr7rwGMe6jcpARSzYF7LTFy4FxMgFYwxEBs8WoxFAnBCVt9Q",
  "key38": "5mHRrCp7Gx2cVSE4FrR8GiqcjFaLuWWGCuKuHi4Yfe4HGcfgrzFo9C7tRY2d1T583rj52JRMi2ii32adv1pnAmSH",
  "key39": "5e2uu19wLAb58oBT46ZzrhQRpWxpd7bZFkkALhBUvHwDcBtZ6KX3TsLntn6Tv41NwzcWmd3fP9KxaxijaBSeLW8H",
  "key40": "4fUDBQpjQXrCoPMAFWjXRgo2xPfyEZXxbe8hQQfpE6fk1u9gry8y5bmqk2fk9pCuteyTdsjXycJzKxTq9HQANE4N",
  "key41": "2a9TjNsgajMHchebsnB4dmycr6991rZbwCenshKyqTREdqTsXwVzXo5TBWyneSwTvxkZ7LWA4TMMgM6Dr9PD9Fae",
  "key42": "553EjGofWGnzeh8Vzb5W9mL6UTghaZTUh8ARLBYkyr9HYnrwbjFWQ5vK4F6o45FVWVZFqHd4y1feVDunoTAax5FB",
  "key43": "4SWiwYH6uQrYBBYDwAHF1PbHhPYGmX4ZiP1B5fhbot7YSBSpx2MAprYTZ7vci4okWdrRFxk1Ypwy3WvWwEW2rwVt",
  "key44": "5iWWQQX6mkfRveF1ZMn6bfMXqW7bARLbrBdPBYj862rz96gmkWYjsG81Fn4nM55bMcVYL7KsF4NUMjwcorG2qtrA",
  "key45": "4sK6qMGJnfkdXhRnGxRjctSbwLRTYVUrDzMuwobvC8xLccctth8srdDnZ94g2N3hAhcaCS3pHT1Do14MqQGnowGU",
  "key46": "4Rrupz3w5V1qjy9RWnmK1PmZrC2FRkcsuSadMsKaXQ3dyKCThK6RqAfBWQ4DhZKYuzFMaTyK2rpXW3mB7Foj2HiY"
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
