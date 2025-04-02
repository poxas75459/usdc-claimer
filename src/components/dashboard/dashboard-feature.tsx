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
    "5tfMmczY7cLTLk9Syd4ccJCphAyiT8GMjPPGSco7dNLTmDtx4gjPESzShT5CpaDExps4wCWWe5NuZAG27Fy8HuqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VuURRCpZeYJazSuvLEXheBA6FHUAJ7aHpENQHCpLDGqmXP8ZxyrpKC3hqHyPsCjK93Gj1tcVx4cPKxcG48TE73m",
  "key1": "3eaV5kppN3jRF1djFLU9XVt4xczGV4J7iRy67KsMga1mkaCeGJQ1kwbqARXgdevy4yUbsvomVC7vXNk1zz9pbJid",
  "key2": "2f6UBtre52Pxnn3johU4kfCWEpAJjymHynZzsDrXfKHv6Wzupfxtq3hQgXy77RrAUt5VNzFp7RPMbSEQ8Vt9kvC9",
  "key3": "2wkAt7Bb5bFsBWktgAXeGezBVDzfej3JwKkERQBVRxy4fSLTV6hir4yaXff6PWLVyx1EnExComcWV3BcJFwRWhyf",
  "key4": "3oiMxQFezaZ9kfNT3fS7pyrnAXxwkx1E7gXzHt9jY1oPqhw7ZisBj5FrvwYuriUQGRn3TUVeaYgERbWRf2vdva4D",
  "key5": "2BEg3uveuYFcFSpSGPBC4jTLfhSgGzJDXfHXNfbtUV75A4sk3TKkr2GWqqN8d7SR6oSP3Avaj8T6pLdTKb4BvpWW",
  "key6": "RbaYDqavtQTA2HhyLsnGyxLG7sEsAnYd4DZfnPdmWMWiQNB9DqC6sXxPLHEXvoHD5Bephkp1wWr1MZyqU9PBRiw",
  "key7": "4KTn3Q2HQ8GueWXqGiAW49jVuLAidTCMeXtQDv1hTGdY5BLzDzX2CWZpi4SSFoWXAGzmfC7EBsWepwf2pEtNGdAo",
  "key8": "tzKth5kNMxT4SeicsaHPYDTcJfD8iYcsZHQQngWTaqKWbGPyCzsuSq9vkd2HxgKqPd3SYQBsXVYw1Na1T7Kd3sA",
  "key9": "3g9h8AymRfM6m3bQXm6cJsKfUysTNZqJyu74WybLzDAkdCcZ9W8Hiyfdq3RWJP8UdGdPo4MfTkSrzJMfSPEpbNRd",
  "key10": "4pGEyVzB71hH7bYex51Y79Wk2iqsD1jcQbadsgETPrjb14dSQr5zDpVBQ87boiwxM7AZMs95rQmkMhswik3i9kee",
  "key11": "4oyLGVpEZW2Ksm1iTZueycMz9rocmQkPfMvrqRSEB4L4wWhE4qYF1SWiSiKtUs6dtJwg6uH9gz58H2YXJj2eR618",
  "key12": "5nRKetwJ2Anfh98kMEDsT6qHvu8u7j8wvzHjqCm4YAxna3igDKadsR15zSgP95jYWKDAunZg1qwtZ9cap8uBXgkz",
  "key13": "5ia3Z3Ftusvg9FKrq2F7nL1zLPQZSHNpBXgg2wQrjuFJ3N3zTLoqYxwMZji7Vr5rFJ7WkQVnQZLHYTvSVh7SaAXH",
  "key14": "2AyD935gy8sDq3iwnyQaHixCcxMyrnpwpQdpmLvNtrhDSySio5oDHyMQNYxLtX4Jj7CcptGJ4LqNzddz2ksJU1GU",
  "key15": "3pN7DsfNtdJRTudqi64Ct4rooH4N6zLTDSjyGiGr6Pc6vbRJh2p8HwPqTkg24oTW623iKBiwKGn9od8mDvCDTbvG",
  "key16": "59nC1Vk469jfcSxxQJJ8WdUj7Y45hT1jXeXQefcmGyA7VDrTYymHNu9P2YUDwSWo8BLM9LnfNHK8N7xhhWKocYG8",
  "key17": "djP89sENZRPqWnw1A43C5pKr5xjaWw78xvor7wd1kMWUG639xPy9TNUZhUKUDGDidzfhopcqsvhPP26992SSxvh",
  "key18": "5tEMatngYceMEomZxFCGS9XkQBjmie6ceVfaJG7XjFP96Sp8QguEYm1Hzk6ixnVeAAJoTXykpchGr9xGektN55na",
  "key19": "4MdgKoCRRZsAtYVWaPeLcqx3X285STwyka6zRhD7TMNNdWnZxmCdzraCmfzRGbA52ShG2vgarUgg8XqqBj9D5euV",
  "key20": "XGEgiqVJv9EN7JME5uJt6XicZK61wkJkiXzLv7RRB5s47KcWG3exZToJrTpDCFvqqSNVuh6aB4kdT6CD7v6X89Y",
  "key21": "2Bfp2FMS9y9NWHm44kgUWvXky2GMorATUV9F75frHYQePUNhRYtfrPrcFWbVnRJ4GEy5gx1EPvZNFumKXdMS7sDG",
  "key22": "4aNJuGWbQTWSoMm4iriCNyhvA8w7jxXzBCy3m49ZRqqHT63PJ9pZvMdjmvf9C5pR3Tcu7BvLFgRuwXqi7V8b4Qe2",
  "key23": "36Py513XHofUWhna2LdfZhbKqdo1PgK7uMxjMVw8pQy4aRL26iTzrCtBuNwcJAmVZQqvBXuqdaDTSFt4utGDRPo8",
  "key24": "4VeMyqEJjGYJsTaWKUKE3y1YgUkMew316DdWj2PKWrWAzx8Gfqsr5aySjsmuT2tAPykUGRzMEp2RA85RttjTZBvG",
  "key25": "57HkPuYFMjd75oLC4RJdW2Te2bKmJYGX2nuWeb8GMnQSzu9qRHJVE1BuVUrWJgydww7hcb47ejhwsNDC42CPY5R7",
  "key26": "3E8Hg4RQGWUzEGMWkEL22RzdhZDKTKML36oiRma6hkKsUQf1iohgf8YYzFkcD6WqHd7mpuZXg6bdTpw23BRn2qqm",
  "key27": "4tG4jJjg26ocZJBEbyjtDK1rwC9DyA5hBgkLtGdNFr5WsbEY4Y8UdypKApnHQvGbWWh4vjpo63zhXk6Vx7nEXKFg",
  "key28": "3iQe7vWBVcxdXavcsAfv36Dqc9UWaykdR7KWs25vu9A35e36H3jUWhtfdCPXdGcZmf2VngJAPukna1HyPiuX1KaK",
  "key29": "4y7Au7xSRR5mYPcfQjPYnmtovthGaCroR59ghkmDueGkHzos8o7LYKQEUPmTqpf5Y33rrsV3LjEUSGqqhgwFEZFb",
  "key30": "DbFGUoMayPFVyterDZ3ZepWvpJXohGqF6MuRG2HzFZBrGyLrGCGM3KGGz6Y2wuHmrBXgKAsqxYsovVEuaAsRkKb",
  "key31": "3y73fxvnZd7WBTfvZxr98gJbdaiBAVFx1h6zmSWwN8dGnMKB711ntXj5J94HT2us2SGsjkzufk2moPGvzW4F3nh7",
  "key32": "4GezrAoZwjK67d5tNxUvPrg8omqyRuFLzgA4KhpkegfBMjJhv2AczWNWwDoxahpXcYs11BZ7Vo11ebt7faroGvJd"
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
