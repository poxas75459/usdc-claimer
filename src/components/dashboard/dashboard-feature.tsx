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
    "5WHFdsPGwMfrCFG2DPn68CepBMvF3JjCpyx9EaakkwSDomR5qr3cHo1CRZhGDnZSicaecWkdg8KggHyYLkcCwSec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w2FehHfdZrtQJCvVVrQTcw7oTT1RCJcFj3suFekeKuGQyoFwUPUigbVsVZ4zTZf5XRXdFKVT24Dm61jBfAYq7or",
  "key1": "3a4UciQNCvgjCyYKNWPpDDCXMfYnnKFqfpwE1kCZg4RVQj2rSnMWc3vbffbctPLt4RqGoqij55RmH7Z1dZP7RMht",
  "key2": "54eyzRevTdpy3dCq8KQdWfruRg1nYYxiZHRYB16dj1fL7yTusiKLdad3RyNpbUNvEAiC2AGGbMAHgGgepq7uF4Ab",
  "key3": "WRFTurALSbB3VnzocLs5AEPYo1c8tKiEdjhWU9yU7LUQPT9wLiXtMexb1VTjqX2z5mjRSL4HaK1yR2H2TfrossL",
  "key4": "3D9Qw8HEDM6AqGi1an3mjNTVYRnFcLbNz42ouacHowbVF6qRso758kbKCE6D6aPBSMTS7HnFS6NW9CNdSFU3eghu",
  "key5": "4iaLAfvR81u99jwJz7QD8GGLdwx5r17dvQZdNzyfu8aorJoEteMewJDZ4spJNnATscn3AAayMuSbKTiqgVJ5ZZZ7",
  "key6": "LrkxLfdfSaR1xkq8xFctJriHH24x1zqaVkcS4XFers1emVsVhra5Ujg7ugDfQTGbkLyysiNzB1mfzD7f7wjEfW8",
  "key7": "rbApM5B1LATAXnRUN1T5FPnZBVqK2KjsdMGDaxz8xvKJwH6BDeQTerK7uT1wXBr1nGwtMouQDqD6WijrH1d2UCQ",
  "key8": "2Xria4ME5MiJQT8DbaR8Xy8ii5kgfPgcjiJWY2r7qRVhnDLk6NrLFeYyUkhfeZAMjUTqTpPHLgVWg7LvUDdHXkgx",
  "key9": "59dkSPxTNWZ8FWKUqMK7LFbw4Z2QbAqypJ7PCT9xxBqEvEwLoRGjDfK3tiV3xr3fHV5SSdxMaHupTs44H5gWxeL",
  "key10": "2jqecGxABYohbaNw4DG4ZGB8puaBbmfBehpx8iKyyTvT7XdBWJcTfSASrRQar51qVqUB8pkWhjRdBgzHkngFCLsp",
  "key11": "kNxHrh5N98erS8xKijzs51yu8akEZGFQz62U3r4VcNTUbByqvGiDEieGKy7Gp1HDSicd6wTCRcsqspmeKmGtAM2",
  "key12": "5yndubnZQ5VNQnggh71CedwH4r9FnQrZD8axDQHpcbejW4KphMAfGruZP3h6dwUkSwvLLYS3iH9QnGwBejYELELC",
  "key13": "obTXZUwrtLrjPmV1ETWxvyywSP5fWQexHd7L32z8BxFye5177Afs1aGugwFC6VC5TFVS2fZMS7NQtTD5t2nSRLB",
  "key14": "4fVCPNA2Q8PDfoMynyjwWib1uHH5y6RVz1fLiv2xSc3EEBXhmqExyfuUjiw9NNeg1sw1hyvLzEVhXW5ghiCUZy3a",
  "key15": "5sACkN2LfN1NmX6gr6QPi7hryU8hFCGeGUiWcpk1WZwPM4jqQVwFAYLC5oc5pPJ4S16D9eKcQQtX5gUBbScLwMXC",
  "key16": "2krro8A68kU9SDS75iaWAPZE2ZA5WAFcLNt5PaWUurUg451iqeCoA7V2iW7U2WE2oDDQcfN1FDadNqcBduMSBAau",
  "key17": "3Cr2UWUZvasYGQgVVYT9C8Lg9driZ1MCjqJEzj7vpgCXwdjRb2ghkDpArq2FXzvf1atxTPAm52ySUhFanVPLtdRN",
  "key18": "36sFsL8QS6rkE2wSU3dzHGF8hduixpbhULdUVqL3zUVUuEoMh6kdc9TEXHPSacQ8GdexUY35zR1eNF8pwTqTKGKg",
  "key19": "4PeSJLGo8b42sBg3yEbjMXi2AhxbE7PeSmWB5eNKoUyzLKqUejCo9f4yrXyZBs6FZsRaiTdcdC17U2pzjBx6cdrK",
  "key20": "5ZSJezGtN6L3YaL7SmiQbjeL2MYmAMx2MMWJ8ketWuM8sJpd8rHWPufSpm87qT7xbxZAdQ62B31R9rxLUc33Dw6g",
  "key21": "SKTj31puaa3epJNW98hmxHDaT3aH6pqCWQ5fp5rjT73AxK2YQxziSrhweecTWaY6RXUrK52htSpwJ6sY6zSkTj8",
  "key22": "4hP8seRKPE6n11kRn6w2x6hLtgJbqnocib6NfZGcKzmwpn77VUP5QRmjVY8ofVvK3jUJz53VFuaHKooSuwY2Znvq",
  "key23": "4CQ9ub46mSbVxb6uLbES9Rezh6tAWhgZ6fgqLgQTuE1oYTQChNf4vcJ2Z6CMN4CLZBv5rehHCvke9U4Pt2TTrghM",
  "key24": "5EgnhMYce1RqQzR3ynGuEHCgPYYZrEHMHAfvVWSsWqm7q4b9K8aGLxCPc7KDsMBbHFdLbYnQiAtktGQav8KTpSV7",
  "key25": "xMkqpKM4QXXkjC7J9aLeSPUVT4SUk8FfSk4M8vqkSbySCEmwm8UDfcKeZLeJ9k1sGfE3j9T6cYKYSBj1NfzHGjm",
  "key26": "3qQQ6Hm8uCWUbq8Wjm1nGEyPLTSvJsT3Hsruae8Aie5CdhmnFe5XqxtzGi9WA7GDN5wwjbHou3KuhKVUWSmLFDGA",
  "key27": "2ZZWHjy6vTkqmygFszPSLtXdj6ndaFCvXQz7zu7hRiD5REGCxCa5UXpB99wi8fwibCEbzrKKQtjk5kqiQ4yNvARx",
  "key28": "4zqtzgdfH2NnRUAqyTeDS8MMdNEVu1gPvWXUQmBAWutBaTafoQqC2x1PwMfg3LNtsEKhxuB2KJ9rJsRBfgTWten6",
  "key29": "2fCukBDsBiTRwJndBo8T24anvYFdAhJ6PP8wEwxg4T3d2LsNp6vZWnVrga5bNkD54WkHK4JLppMsNZne2W2ye54k",
  "key30": "3QJWnJRYxpqn5NrwWXZyTkTnXh8LhydthbX5pr6gcj3DtUKPJB79riDG1f6RbpafHwNgzdf9uxdknZni71yDtydF",
  "key31": "5p38tU94NMSpJTckLzcKeQu7ssoSgorpu3SR2gC1Jm3QfCfLLk75pr3JUvH6ENAwN2p3esRbJvNW1aWGbu9PVcgb",
  "key32": "2FW3SYnezCsMLrBYo3HwpesDGLC6GUMBGMp3btCUhsaHz2zyznpDdtS3HPErSLXx3UrrdrMRbiEnGjqymJsWC5h3",
  "key33": "62C5pSFrw6yE4eLjX1YGavwQbKcnAewwoZWhrh3LAPFQ5CvnRZLd3DUnJb8avNTmXFTpKSiWeF5PkMcgv8tY1SCE",
  "key34": "nZLdUpEwNoj6PxhXqVd8KAUe7DWpDVAVzgXrMfbyHNNo1qqB1qyZVvWLNHVu5C4XwKjxcXQPu2Uqrwq45sNBvBM",
  "key35": "2SBaNnMuzdJEcDmNg3zQSHntmPTSeuzPPkJ6uwXyJi3yHpTPCsqAp5FqGe3UfD793DgSmTgYg8BDdCce7fYkvP4k",
  "key36": "4EAyLDmDtDYvN16oASKGoCR66p9ocM9vhuQ8ewNBEHmQKcHjunD7jgrRbY4KDHwBv5yDJ9QEvxsYK4VtjYisktew",
  "key37": "5woPejuHAPnbKU2VT3T1Q4tKtVhjhofTJXf8PKHb1VG7fStGUuBrfKv51JbBQBajRu8NafdWhEvS55FpjCvYnNKX",
  "key38": "5HvnSD3kV3AywjBqyFqn6G4FjwBBfgT9b87KYVM9Z83bdLGCLBw5789MHYbmtLMtLpnjuUqPEMjc94SZRvFEMyqV",
  "key39": "3S6EkHdYjmoAdRyZnpCjV71qTtakwviMsoR4rUsGwvYLHgtdbUC4im3cbqWBKKVAFCwEnwtWYxNJWwQtFqw1YPdH",
  "key40": "4isz63zoUxvD8XysJE5c13nSN3tSKKdDajabJRtAnGNMkx3eFMhhTACzq6xhd3sBBong4NZxFT4URyamWNDeoSBj",
  "key41": "2mK6gZJxv5BHSbQuTAqub8PAAMXWefZaowHpkbVxnnHvFpMK9Ci6nyYEDBE5ViBLJrNQCbbGQnGowaPVTiLPyjRw",
  "key42": "3riay7ciEvTx4cFJaufz5djCAqdKqhPuLJ21CwVdHYA3D2R4NUCixUnb46ZqWhEx1K3yKP2FkpmD34MVYng5VEa7",
  "key43": "wySG6KyFvLKc9tKe73t9zUnp8PdFTKmWQZcguBBEo2jeyytcNfuEDvKnHatb8zSbA83RaJFbL6jALXBBrvzFns3",
  "key44": "5Vjsjv1AmahEifRuJKsSYUJwZHK3Pd8mPyaDYdWRDC3cXbDM38ppMJRQL1wwmRehyknwwYmemAX5qMio5vXBwanK",
  "key45": "fHpU3gjLuLkGTAsKhQQspyoG8ezd2GbafEuSBq5EfbjxqpFdSGiH2umyzbUhZiYQ1jbtE7N5QqCpBWZe5RCrLPf",
  "key46": "mnPPtYp66s1QF68FbdJirC62Z9oojvd9bU3AnFdp7jzsbzLZPfhG5GdztJUcP7Qaf33WZX7vioDPW2wZWvrRzkg"
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
