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
    "5togU3Rao2348UjgnzJgE2HbetMoqCM2htJEeyAv81hjcpQ9r1f1CW3AkSDdXCfkjK7FnW9xNUFcp5iudtKjfFFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a8QqvWtQuv731z2QGVyAnicsk2rBfoTFZSiWYXKSH7vXCJ2DK5QnnKWL9XAmiGC7vnQ1tZSQBgYcUMKddcQt6nv",
  "key1": "5AWUML6MmN5RGqX69MfBrsnardoa1zrar3pT18YcLDrUfhjZ5GP9gmbodwXFStsyi9GoXeVQVEtCvFSvYFUM384E",
  "key2": "2gC8xUyMee5gps626UVciPBTSFUyej4tJE3bFTBirUGsc5ZJjyJjvoVJ9VaRyAB9fK3i9NFiCiYyTf1fYZgTPjH5",
  "key3": "3b8i6oRjeUjyc4NkpLMD8AvVjF8To1AwD1ppfw6oDhK9E4z7s28GgrrjVtc6LW9MMbX7zj6vj4i4K6m1NJTUAxaA",
  "key4": "2Xi7pbmJbfMAVQx9k2Qt2XpnrKnqgnhAeRVJAfZ7AmTh7k8zPzUxttBGWmiywkfxDENewxX1kyidttFoHmHGu95b",
  "key5": "5owkQCxWpYhjTWDraTe52YqdBw1N698v2YXx1kdj9o5N5yAtgsk5ti4CenU7b4jwMZucuimvdbFeHdXgZ9iCdGpF",
  "key6": "4Vr2SuZAuZder6J4bAmrW2P65zbRCjHKY3eRodeWu29pxFEiYzUax9RK1LqDpwzif3gBBsMYa5K3sg4FVjHE7HJ2",
  "key7": "4GQy8py17KUaoKjvAE44B9F7UrFL64kGeFGNcPspALk6Qpt2sqsgRaXR2Lz2k6navQfjFPFxALYGCBQjYtmrKJFS",
  "key8": "cSN1bMJf9HRRqnJPnWWUgdN43hmMtFpvVcgwDcvmtz1FMwppZ9zFCW9qm3sws8esufRk2jR3Qh5EgoGzv22BAUD",
  "key9": "5vPNotzdnmWmKqXgtFyhkajSYtTd9zdoizZiJb2JLS8MLhrgE79WSfaVdSDsYyUACcmsb6xvQhzdQZX3FY9Rfewq",
  "key10": "4UX1X1FXuwyzGVvvmikxoRV58JdBnpDmypW8ZPfnoeNZXqtQH5jADrfkZAeR8pqt9d3gEfkyFEs8QoPPCUQTXKBh",
  "key11": "47gtJ7xdcNKgywfNfFMk9rCB95aUhNfdmfB1EuNNA8AbbbSWa7pZvnkWAqTzcFPgTDa4Lj1dHXeemZzLmhkzR7Fa",
  "key12": "3YD2ypeWKfunqeNkMX6yanAHVxoWAUT4f8KSBMmNVABb76LhQz4hjYCPPC5JigTzGFyuTCVbgNqmso4N7SNBndiC",
  "key13": "5BZtefMsGFPGj6GJqg7Tz1nwNonUYF265C6sNmfHbG693VBSfp7VpoqMm8NneyiMkL9ECSb5rBC9YpRCbhHd84V6",
  "key14": "2ghhj6Vc9SfeEVzSUmGu9rxW61m1gFdCt6KvMPaRYjkxLC1rfq6ogERopTZrjaeba9gmMShZCAf6qEdfKQhXW5j5",
  "key15": "5MHQt8FMDPypjF2D7R9CU2Sm8igJPWr6iK9f1p7gVvT4mv2LyPe346pujGqdqggf8yFwGqhYeguXxqs8GnN1b7jj",
  "key16": "4pyWXTv13n26XUSM3eoVt3ys8ExSR3amPSB6yJxerVWC7GrPTeSChyVCaPg1KHKAnQBDiNCpdXxgYCG23AJ2j4Bb",
  "key17": "3jkFLPtLCxmu6KG2Uorn8BVCGQV5RKcNMwvRfqm6ETLe32r9tR28sN4Dns3LsgjtArGYBEQJtqYgP49ntHnKRNty",
  "key18": "53ajxu44YSkXtDBS8HUdJ8UUxvA6eLTQheVLPaUA6GYzTVvPpfdHYQvsvhoqdBCqaXz73XoufmNrXtRqPYHsXkVW",
  "key19": "3JjKCpMYuF98bZLiNPhuP9Q3amaF6nueuMUbYSMjN2WG95V9nR8PpQvGvedvwsVw7UJvUtxogx8D83Hx76EDqsu",
  "key20": "4FqCRD63c3ySfArQW6vg3VBoC4SUohD7sxBXYjtR5xSJfyZsp29V3abtDjsQSMow2kiYdYZGBjLVRXmQFYoFnjdK",
  "key21": "3mpUDwh9Riv3KjpFu868WnnRsJNL8M6VbAaMN4RyqUqysGGGEJzK8tSS2nDyc4gam2fXBS1itnFRhHwRCaDN21PG",
  "key22": "3nVmtAoV2zQG8RUPzTC8QSr9XZYDuahsMR3hazt5acoBwmmMwGSTCmMGbq3Z23hL4H9oefs5CtaoUwv2gEc2xxcE",
  "key23": "67hEBa4rpwXfnZTfePXmKYUyv4fbk4sxYveEwCWKfwaxuNt812m8oHHFeZqCoHfZGfpVMA88a4DEGQMprrP4G3oA",
  "key24": "5D9NT1u1cmeW5H9jS2PVjR51RDNXj3XKPhg6GrWqTEadYm6XpW6U5ASEodW3pmLLjyfhJZE1pX75mHLdeUjUobV5",
  "key25": "4fL5KgV6PT64z5xuFefYq6uyiEJQtcneSL6h1994Gh79zHMJNwjmp2cFXL3bvuDQYCtE35jbqQyWJyQrbfGwWwAt",
  "key26": "4AAvHgxK1bRTNYypCGkZVTGxntAH7Zw8zQdpdCNrff75M7maB3vUyVtA4xL1djS6aa5mw1qxaWfgU5s8oo6Q5t77",
  "key27": "4SFtnkSo9cg1Up6SWWzYm1zhkopeyfZ3bkcTDriQitMzKTFy6KvCjrhqEo2xdqXgZoHFCCt5nTSTLuQkgvowPuV5",
  "key28": "5KQVp5XyrKS5Yycm9fEWZVugSMPxekn82TPyUzNqtrqgCZwZ6hXL3NCidrmRf2D7Lf5YmAHq5aC9eCVdsyvi3Uu7",
  "key29": "5JLhbD7D4mgHik5f5bnewFwDyRkaBHkoZPsTLX5WkcCmeKentrN3onwejsBVxKaPReUyqsPAzKVg73yeFEJZ8q4N",
  "key30": "2rJ78xxRYnW8G2czGzi5MMtMNCRFxDMEYaYxUZpF4mvmwF8NayNVCuj2UBpyY1aPeT6Qh2hqb5UN2S1ZSnKCzBKq",
  "key31": "24C3gbj2JMy4zRe22PTWD4haddAZ9fp3ixpcSszMSeQ49DyvCRZc2iACRh34FaBbTo4vG255SD5Q4ier4LMMSCZn",
  "key32": "3UXW7aYJ87pF1AWsacoLvbf4KrpNLzegML1qM4HTAW1kcXNAjGaCCXLTDAUDgHM4XRLZyGuXwxugrYEFVpPc2Sq7",
  "key33": "2H3Tw6PuDqY4aEYmG3CY8ifkmXYnXRi9aXsdQYtX8G3SSe61aX9ATtA3pyaCyzAuhsy4ACBcKLHBYb3Aj4SuVa7v",
  "key34": "26Mxh6Bk4M95bbvfGFZJ6qG47xSfqj9JaQzosKaqUj6LS25HjG1AAq3RxYPXxRJ9WyyJbGSzF8bYfbXJy6kgU6UU",
  "key35": "2q5YDg1QEHE52BbasRnh3drGnGs8LSkGiiTZaGNiQwbkYKtqm9HpajViUyPSfDcit4MzbupLyJ1rZGjLhQAhxER",
  "key36": "5EjPF9zonUc8nDLT5XiT8qxe2imc2vb53S1kW2msDLMyRRm9YSkANFNPA6YJTHgNLNKNwbnUWAXGFuyGsRLsUf1s",
  "key37": "3LjC4GByLcHEC5pBxpsTvuRNwURx4oDS9D4HC5BfGtErTaweemqZdWQgWcVooSDThLiamq6q5GhfHjUX132HE15P",
  "key38": "Ro1beWDZKX7jS1tAwQeASnYjaoRZegAFNb28xhyJgVWUpfsRdmoMnPf1y9rYEAspP6KEkvCmYEai4Vr9RJWDwGJ",
  "key39": "5Y771BSanq55SUW7mivusuS1wsp8sGK1AVV8qYRqqYgXBAcMRaivPjSnWRe133d6w9BWSJiCr3ZbWx5qTTNHYJUT",
  "key40": "2CG1U12BnYCBE9QFrSw1G2ViqecaAZH3ys4r79PUdLnERxUWd3hs6ZjnPP5JT2fzQcYGxD8zaAktVMnrVio6A6L8",
  "key41": "5bphm7xhhoPiQuW7dgo9DeNn28psSJ2mUsJFK5aBYHDhoHRmmvSeFBfvAztSHNAea8sVUvpGB3w3NqYCPounnVUT",
  "key42": "4snbv5wErysDqXfRV7wM9oyaQndhJw3qSrNxzhdRTiR9DZa5okFD42HzjssKpTn7zF963Pxkawr2yy36kGQi9MLv",
  "key43": "5NiesqiKmTxEgWCEbY3PEFZoTScuhdyGe4P5TGNyYuCvYKwYuCY9tWhtnzKuNDL6JSdzPqy71jdKrWwSTFFrjFRh",
  "key44": "5ithbmmW1ZbaezTkZCGg5QXoZy2p7edQUtWqDkWK6CjUssbaMhTMsvzD2GES6T6fajxjy1PcfcwDY4aW1KcThBHa",
  "key45": "2FBQuV3DbQg4ymXaQFFHTBheuB6qMn7MDyCXtS2yQMWKSxRy3WFC42xSPSjrHcMJBpF6Ft9tRsTZ7fs7niPR9R19",
  "key46": "2596nvBSP4ZzwJrA9JvmxAtzu8dECg6mpoHobmXFGZhE9arMrvVJMC74R1sSkRaCNsKULDQt6sLx1nks9hAaTxbb",
  "key47": "4ttT61iWjFoe92bgAPmWW22ganSn2Ngc4zkkpU5tMyQfNKd7NxEbSwqngRVXCKZxZGX9b2kuuSLLVoiokVf7vTT",
  "key48": "4MxznzKH2AabVMbRu7w7ETy8UoSk2Q1oPGsMnVxsC4R11VC7f6ku8Dd1VKRfteQGLRNtYLiETACjyHxfdg7nbZhf"
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
