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
    "2DZbm34KQuoWMY41Gq1amBxd5cMJigBDfNJCwp1wp753fDTbVHa16sXKW5tuafBuXqZudzfoDvbTxSbwsgvHGmCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZtQYHVwMZB8373y7DNvUnfcimJiLmaBzstQdZnZL2LMrzX2EPsbZH9MS2XgE3yDCMchdpGav75Uba3istst2x2y",
  "key1": "5ikJ62773s96pGijCEBSngr2WdRSPyCg7ZHmef6cdYA1GXEDBSuFWrEzwaJnC469rKYdq4EYjFYiVKZUHTZsUxGu",
  "key2": "38eYZHZwTTBdHfxQ8eFH4E9K9fMbuqT6ebwWk6QosPHRjsB3QCPjgyEu8TTKVtAVRktdnVpyFXe9ga9wsQrgxrAW",
  "key3": "63PM6UJcU6Taz4c5AX9QAzrnoWCaxcy4phk8NbxrU82drn5uxSM2zLHVmuZ1mngshk1JgDPRzAaMZpW6CE6KVKV6",
  "key4": "3VtCffyUKALNtxt5VLamAhEJVcss7fdCrM416dbQDJoLcQeYbPr6x9tZZEwDzWaauHKnj1rCNVBUgXrSxX42gXfH",
  "key5": "2Tq6RZoeYzv5cX24ozpTCA2X1F4m4Ksx1jp36XNamMgjQ6jTJ3JtwSRtqA5fZi9DcFY1h1rZ1iym7VNNrju87qjj",
  "key6": "5WNHez6ie1jWzNgKPgNFFqFdSgocVPrBTuUmg4M2g7LTXjGHEf5mgxwPcr6RcomF1tXuiNRvoYXq6hdPLiGRPC13",
  "key7": "5jbgPsdPu5G5XRnfkVmFyGCVoRdjgHnYm9bxTbLWkQLqHZmnY2bQs1THXku3p43onaSpcukZ6Q9hhNbjqJTYK5Cp",
  "key8": "81Cnh7MtVsv6k7KgkhPLcurmSBesKCCWiS4j2ZJJENVnDHUxhzzrLC6dBWXc4uB2UXR2UNsUj8gbz3YsS6377vd",
  "key9": "2FWzvgYT91LjsSX3NHn5X4HZG9i53Stc4dno4EgNxqsDnymeWbxbeiYVpRNXi3UXeLYP426fD5rrQinRvvRDe5Ax",
  "key10": "3QU2PBDp7A4vvZugqFLxA5Xbbyb1j9L2DZJB9knRD2RHbhsu33z2q9PPQQDoMrSFAUkkSLwbPQwjAMP5x6SnWCHC",
  "key11": "4ce6UYPdB9ejUgiY5eaGjY8zDijJNaRPjhrMnBSVmX7JhPTQ1eucRUiZi7cg67F1tZ7h9GFutNw9MAvE1VwLYYMC",
  "key12": "27493WoVpGqKHeJXV4p9n9gmB2jyuPBXxCsCPZBV7ABQkoCnGJepN2nU6Bb7SBPvV69Ab4E8C5JNem9VsJKtGxUN",
  "key13": "2rZhypWUyRkX2cgRf1kxb49RXdS9unAqgbyzPf8sA2qXFHau3JgdEdB6TBpCXcESy9W2R3PjY39KTKJTtmLDCE4G",
  "key14": "5msvV66WBBG1LnECg5kSp8dvuL74Q6hPbzVzUn6ZeKPNTguMms8Vz8wqKoqaFR3K1xjLiVGYx6ZB7S5d1Lvu7sFv",
  "key15": "1g5T28Xgdg3RWeTDBatkWS4mhmRFXTNi8ZnrKkLV8uHCYbnKVcomrF7SjbDV1VjiJXtm6gdEctLbYTZjcVGjAfr",
  "key16": "4JZ2ks4tkBkD4EJm2P4iAfEw9Y8KRSrnRs5Bv1RXRLvFirXJeDLBYmhMiAsd5rrcWz3AvdwySTAyBc29SEgh2Yhd",
  "key17": "uc6pDXqzWT1MieEma4rRuob7Szfnh7yLuSTkYHeyTRy8b2KzrMTzLJLq73PPaKBAdqQf519eLMZmhf1DqfCxT6D",
  "key18": "3qCpMxqoDgx6kFm1JdJAsSAT1n958C36tXXfpfqbTt59KpQUeiALfH9owBpx8kKygaDy8481bNex2BgGMAG5wWQf",
  "key19": "HrjukNJ8nBujwduPgFLD9HdVQnybVB1yznSV77JPXwgyCRFkjhEKTqRSEsjkSXDFiMnADq4qU6UwM9ApqAipFqb",
  "key20": "HnaYAs4Tc4koD6oTFCV2r8Dozu2vhqDA25JffXDPGhyJmYYWSHYZTNZGmhk4r2GHBk1hEjCxC71ijDzrUGzTQWX",
  "key21": "MgeT73ruRPQHjCph9AY6h6WexV96BYzkXknjLktwPGNEqYAKM91ygU6h3fNepdQN4dPS8ik1VbD2fjqtmdHxp6R",
  "key22": "2LGXZcF5yjyWgxDTNpdbqyRMhLtcnoY2CgGdy88hgy9549bpfT9hAXnLK9Un16ZsSWA6KECnUADNbEiwTVaMwN7h",
  "key23": "3fqhHGtRVFHV9Ah35yuJ3BqLBtVY2YXPwmUdT1FoXP69DZzcbgS7rmYDGrYtR6TbPiDGEHcmVcB2FimEHLrhXjQZ",
  "key24": "3pJtsmrys9tRG63GKtJ6CJhXPXBeZxdBZq6JhLswnEoJjsEEgU8eXiSNqnTjfrGxaAqU2TtxktEi9iPN9vqxJadN",
  "key25": "66krdPUqHgXM3Q5466DTtBYskMyTK9xcCHx5PwdwsbK8FkHQ1vGH7S9uRfXKAdYRCLfaqupFzP555fv7vCd1otia",
  "key26": "2Qo9mRwdUcN8a7xgvV4cahvo6GQ5CeT8qZoUuxLDtDCfjmuSdwkhsM36YFmARSaJuzfxkU6dLfWwVtL2tUwifhAn",
  "key27": "2KwjWcAUr5sbDPGYibfuVwnJTgxt9jHGnEAN2W7FPEURRM6coF6tREJAoh7RDszHDy7GUPP2bXoDsbivgrRhh7bH",
  "key28": "2ErDG56FQkPEchnZfDiWiJUB2apCLGMo8Z1pagCjjo9ftaL9sL6vhTJo9BB17GJ74oXGwuHoBvdRDsQKoJijxNjp",
  "key29": "u8ivfimtGWk6fnCLZrphzeQeDv4j2YwymRonFpqUzAcoGpE4ExHTSg1GFx4aozEafh35ppNjBfJyF3bYJdUd72g",
  "key30": "5M1HZRWZKfPH6G4WPJWPKsxu6JYxF1LJWmzNFY9K18oBoosycce7qzKruS2omJp7p5VA4wkMnP9PJeBNnP8Tc1gU",
  "key31": "3QgQT4YLf1YHtB83bZdeEsLaJ6EfThFYF3DKj24TM5K2KPQsT6VERAXPbJf7teVEDPgiUQYzm36vEHhMVrNohvBn",
  "key32": "3Fuhh2a7dnvWXUYUtMW7boi4xBjA2sL8bgPJ48A8e31ZWcWRpeJLVtakwKjYgCu1yV8f8LBZChWFeVFLB8BBAHH9",
  "key33": "3JMUUCk2a8DAfeccLDdTUXrPJppKYuZv1jpCsE7wiHjqdLbWLLiX9vH1r9uFs91PhToFzFrmuY2inursP3kb771y",
  "key34": "3tGtGgZxdaw4FGeyik4AaRsDdLwPaHRvjLpjXiugLKAtRumASkJhTDAWQCJuV6GNQAqW8nLphbfpVqHx8FgimVpK",
  "key35": "3iQm7YfpDTvQRrNp5VtTMo2ZbmY29A4qG4iUuMZjU3TD3SkqKMu4vaz2ewznXkw8T3by1UEn9WAGGJUJLDuLh5sd",
  "key36": "btN9J88XVHJhNZGvd3UJUzdtCUnsZoG4RKENjYmJvWLqcGf1zqEr18Bhe1FYkTFHwzw15DMGa4L64eNnYhavurs",
  "key37": "3WpWfc2wjbeXz1cp3eVALJPqVnAZF9TZyhv6FqXfdy4c3bJUkKfLo2EeYJ9v3UJEAxKGH2seJmffk6EMFRDodwGn",
  "key38": "3pCwS3fpLvuKXoRxXf9nqnLkT2XcWJwZhGMpHgJzdbtzCpzF5Pn7c5Sc74bwvCdyZTMaQoCG9j261QoYU5mDbjMC",
  "key39": "3pc4XUgGqUcdJ2LDEEdkYS4NTa9wSQ58h3cBTTDkPqj5m2vyeiJYZyZmjUpQCmbAovo5jFzbUJGjDesewkXrkEb",
  "key40": "zBhpJBZ7Dv2Ae8xT2n44Ru8zyrVSD8UJ9inAJKDUwtWesGm6nFUF9u9h7oZvcN6hoxyDYLH1kZVAFCXH5E1f6nN",
  "key41": "2XE1CGkiJLS4rZ7nBmishv3KmF2vvF4KeevG3BxH1tzq8kiA51CCdiZbb5jsP3w7xRCBoo91rideruSqFFbvse36",
  "key42": "2a82XUDcYsGxGo6RXJqcfEe6XQgpfLKmynzRicJ5q3kSSddVdvQC612aGrMWf1uyA5vcF1qQQgvB38RH3mn32i1G"
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
