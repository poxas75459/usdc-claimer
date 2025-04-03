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
    "2A6xGWg2KVFriKEnFmcYAcp8e8FBb5FaCwKzxGSE76sX9BebW2675FwcsrVcYPA7sNbf1NmDeFWJ4ts3mGepZhmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cyjVWyxauZnUtMW1rxWcpnk2o4tGkL9QZq8BYUsroMKuqhJa3MS2Byi2VNVVvaA49SFkLUzG5vw1YPNVh188vYo",
  "key1": "3ea4AZ7GD5yTEnQF7TaCFaSyZ8YhTNfPJiMbgV9jbXHE5GFn39tua5YsdvswecEes5mReWxfUQNnkbBjTmWzQPwQ",
  "key2": "34RwkGXWg1q3DmcHN5RjinXXjZLzQZ2rrrUB2Wi9CBDtEYrL91ZnwipA8abHkoE5RfeqwmuxHopye7oegNMjyheq",
  "key3": "5BQTRdMMjCrJJyzPEjwCCkkzReyHqybmev3tn8Po2GampRVkf5W3ZDPDqCuBRPy6HxSWx41FgBcMrQC36xNCSBbR",
  "key4": "3T4jjFVoPrFZFp9bahqmE8HriABVtBuExuMtCKqUGJdYFQ6vww7NZgM7GC97ETVUZ97ZiYLfCi5WJhCW5iyFQM6n",
  "key5": "4tUVr371QkvtnmHwpWC71G4syzmqJmWjqZ6V3ftMi3ZakoS54m5zm5iEGeeqaYksfc5dXf1xmVB8e3WiBrRkia7n",
  "key6": "b6Vf36udZsZx2BJuDDghtUQtZC2qr14anZB5FGyaEVDjfPPZq4AtEEVFJNwECo7zehy8dv7zY354ebkSNBYwEBk",
  "key7": "21eMxM87kz11g5ZdtwiSeN2i7yceRh7X86qSvtBYrd5VMimMxD9azScAByH9hBb3oevVt7mMNdeRBuGPM1Rrf6Bj",
  "key8": "Qfb2Jx2dfdifJ2KqPNtpQHQkpvSRu3Qcpa17kyWSyghSp48kMVrfHDM61FumUBV2GMBGxFesfZiRbJJ7PeSedTQ",
  "key9": "4aNcU9qGVbMG8vN7PFgFaaffy9cFLF5eqAuVa4uNn2sxVGNZf4R6FPqiNMMWQbs5pqv8fGcmN7ktSBLVZDzyP41h",
  "key10": "gnzoEq4gBKBYTPqKEyhrVDBaMo1h5HHCce6dSSV7Jf4AtZW2hLoBApveaTbBHjdjbsZ5ewbdAWxejttwEVq4SKN",
  "key11": "Q19xXdbbXtXcNvXWAE2Uy6oqdMzWcmr6ns7PuNGapCMNdNym8cRkh1kUUPztRT9PGX9RuQwsDgyyQkr8g1M1pBo",
  "key12": "4yj5n2CZcdXy74P999WNscP2RKT4UdhCCY1V86HWesW8tJpdaSC5XMgqT2HBxwMxeYPaN1wq8PUrUftbQfognGEX",
  "key13": "4HTKGZKVRMcuc9hw38ysD3vgkGP7E89yrgLdKzBd41An7pdBXbz6P47m2uD7k13Tuu6Y46JFYjyJ3Uaz7VEN2tfp",
  "key14": "3CoqUnYWoEoSKECWMEiRhQ1RLWmni66o63DwcVwc2A5AZpPFABXQnRkv6uypr91e65tUdzK2WQrfRw3kQsdQthou",
  "key15": "2Xi4wSQZVfCq3PVqddFyGfnS8RaoJL3zJoamJ1vFVU1NwrNcsJbuCfRW1zquX53zGsd8Gkb1QPe6PTfHaovft7sG",
  "key16": "65sYnteF3juUcwgyHkAk16kg7pE9WeLYr2e3oRvhUQ7ANr1j2w5WbcoLZjg3twdA5jiKsLQU53bEMvma6B8ZrkYG",
  "key17": "2u9Ptr54XPDQ8KJSNmvmmPkiNQ1o5BB53RDwu3ZbeJj44NXDRDRTsRDKdLHfaWaCg1yQxvh6j8xtMYWnjjZ4X9tY",
  "key18": "3fD97v97u3ZUc14UZQCjkJENFmT3vkHBqVcUzKHQngJ9kXzNodtc3uQ4gWyEsWSLW6tzhX5JjnZhwkLXffZozMwi",
  "key19": "5kXpvH1J778XSrtkeitEWLWGP1hSzVnp6cZDa591qyzrFk9ee8aJSWXy4Ws46FGwPvQVR3ypT1mvoSDW71PFyf3P",
  "key20": "c7kETFnbHJ2WGpdUvxQtrX5sNpspE3JpP11kZ5GgEWZ434S44nyntYso7SbPbiXzBW2Z9ZePtxzxkSh3J8etVgS",
  "key21": "5qdab7jWkfq783nQEPrgb2248hYrp7M177oFVpZUAQxvmP4JGeHv6Jzkc1rB3Vt4uihBAuBEB6VJPTe4dR8Z6Sy4",
  "key22": "2mjY5vpMCv5Mb3X9hze8yWxncssbTjWLXoSCLfUUXWkzPQXw46HUGhiqjoWAxrroVAd9aKm3QDfKomXnSuqC7WQt",
  "key23": "3Hb1oVKPc1W5v1eL9Ftaz4HapiczpDtm18xuUGbzdvcYLWmrnbtYETEkqDJ6Cz6bozjxEdSUnwUryGptRa8JAvuR",
  "key24": "2AfEjnwh3upQRc4nLffQuvWcoJnz28qjYVQ5kwXPPXCfFH3J7s2K2eKBk6tw2awGmxHmBoYYmDkRHZfHgW3N3vkP",
  "key25": "3TQuGoq8SSQTtDpFG9U65k14tJfCAFw1kxHwoEQGgTximWYDW95FzU8hskF2Rh3X9UfPtTBVCzvZ4cx1XompRwxK",
  "key26": "3oBGH7RfUevG2YcSJXQPR7NdRDLh2EUeti3qf7asCf2hdcq4W2zquR6rwJx3k2HLMzUCRXBBvmoe2w4GaWq3Uiju",
  "key27": "5kB87srGzpKciRUZFmqLctNRNS45bPbVyK4qYLCCSTjHNK1a2h15NAdWBw6zbtyvEF7Ag1nJopUrixsqxA1haUYG",
  "key28": "4ghAi7sEj6uDNeL2xTtgrPwThtfyUX7azs825ST8GhWsae6QhB95YgjmKkSzKx8gB2WcTUzTEiFKhCJsB1d3aWJj",
  "key29": "5cuEoeRyquY9fxXAayihTcCW4mUWMf31iUXVe3ZkybDs71aF1qdmxFpeTzhXy8ELfbqg5uNLjaUwWV8KEE1xmB7B",
  "key30": "i5fWS77Syxjbc2AFLR3Kq9vfwcfsmXA9EXjMH9K112mqtLuLq39oVCjF8U3DySctbcTbdsCfkGTFfo4rc4jzASP",
  "key31": "4BNv2ymFKugvnsdPVntWj6o3xw53ioYzhXPpYmh4LBJdKGFpMqE99i8b7GQwLchiLEUm6MZDbtNdxYHwJdr47adw",
  "key32": "2vcL2Lz3WgDUdGbmHJMcduRmpVpvGE8orSwMAKfsDGKh8dzk5yBTKGFAgjBvGqEyBcGW4f4WHEGmXVdUVs2afnbD",
  "key33": "49KqyUCgfZ9EqcZiy7jdV1m3fusMhFvjopWtocvaucycF5WS1LXWo4aDjWjPfKVHodjGJCZkLQSfk3s1bbDFujEy",
  "key34": "5dmJr7HXG36YNGo6BCr3stxHFrihR4Vp7TQutuqDaup5CvqLk7ESgiY8WrokKsvEGkp2Uf6y4hWgQ3oseu8Wz64J",
  "key35": "2xQtMXBfUvGx6ukDRhzQzHx2dJu5K8AEw45tGXoMtkY4Vzb17xnTNrHvwERgcQNPnpDGS8SPaLT8JAPzteXrsJkw",
  "key36": "3sXhudqY4gVA9s9MPRa6MngEpjKjQEmznBu686CoemQsXFLf3D9N1Ec9f1jCDkjQFxMnjukqHUbN9WVxgw2DWAaK",
  "key37": "327Q1fFaoc4dLTEBZWnrPj2U5pf43mkF6QjxtxNA4ptRpmukgZQz4WKuzk5JxjdHFiWd2oQxTgBrBjdQm6mK7JwN",
  "key38": "2DDC3pfb4Ygr1H8G52szb6ASHMCA2JzEJuJ1RSgufpMmniEgEwVmLX1pz2H29NsN9C3beFSBxus8quoDsj18snqB",
  "key39": "5mqnBcPmU8JoYgKc62n2r7ZapvHuXtTcr7mJo3Fd1cKQTo2bqUEUYEVpUpGosyaSoksbLaDvZHe1CKBtDAZzxXsV",
  "key40": "4SaVuDwzsgA8QShPVR2geNG2kYhL2R9gQrG1EhTU4V9eFt5eAvKuchkGyjscGVhhKcG6FHKwNiXZvDYkQtcZp2Y4",
  "key41": "ExtCbLsjF1bBfUix6SqmBBNXhE9AbJgAzvMuQEH6dVfemg6SracHbAMc8bTNz19FfyTFq77aJZqF3dj6tEYAnTX",
  "key42": "46iqkv2419z6669tgcxq1DbMFWxofhMthUqMSHxMDoH1Ef3kUp9QcCna3cNaMPBzn6SnYYMan1p2w3Tw6YbRS8rh",
  "key43": "5NEUkZbvWvvz1v6QJeSYgnD4UD3YQM42wRrTiigZeHow1q9gZz9GEP7CsH86QJNiWQFCWx7756EBzeiaBy92NDgF",
  "key44": "4kV7uHjThWvLASBtbTcs1fmELSWGGGCAG6CxVASpJMrhGhsYukcQ9gtuu4E48EKP1Jm9GNnQj2buhBbLe6os24tz",
  "key45": "2N198j2D62thJzx92JA2xeqVvfoseATsVYfmbrfU1Uu1CiF4tA9ngumptqMYxEkP4k5RYgAJCVaLGK5iWmajt1xL",
  "key46": "3WqA4NE5A8pXKsajBEH61SwqbvMWZSw1fR9U4u1mum8Bj3b1XHM1c6R2fywikFX6XqwjN8VeEdxGHiD3sM5dSTEP",
  "key47": "5x4FBYX1SxRjEbCHtSEhZ3vwxj2yH8AkLSjfw6yiAjhP3GoHPJ13EAUajYth9i9oUPuq7VpQdCLBXxK131C61My2"
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
