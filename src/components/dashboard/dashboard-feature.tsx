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
    "4idoAfwy27fJkAAciKuX2Lk46qaYbVm2jnU7XKnQfQMwcURA9mnvPLES4W6HCXGLFeoPGebZE8vT9LDt4EQWo2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w2hikvdrTKMh2T3ShNKxPbLP4gw6dHkM4oppne5YqXWYdCS8915Km6qDk6CM3EEqPfwAhhDSn9bgwRrfmKcKzNp",
  "key1": "2AjyHxT6BAJkddgtyYCBmd2XXLggaEV4SqmfV8GpQKdfsBkrAfdGjKsTbkcoev6szUCWDsvZ8bnmfCTNXfcfyq5T",
  "key2": "62tmyy9NmaoXXjKmuDpmuidQVNuuP98tkUkxujKwgQ6EB1dTo7uNSwwHqe5PqZvfy38tJCHymVfuyzJvwZcABaei",
  "key3": "3sS8Tq21L6xsTRC4291Ltomx4ZpcBQgg4J4aZdterjoqwEiFwDiCdq2AtnfmkGUFJZjLfuNcRTnFF2zz38b33baK",
  "key4": "5E98GrJeyy611KktezftKR5FyeENL2MWgpxNa8nXV1as1oqsM5WkiGMduEq7yTgdmPFjWRJtCYpSnhswLMtYFHJR",
  "key5": "49j5rjzWwZCzJtGj6Udp8u59HFsgVtQoeWyfKcP8G98W7CEK4FgS2r6k5QusBhBKdKqd5zF2zF6waM7udjBRsYbX",
  "key6": "65bRwm4KLsVwtkteMVVq7v7xP2BABhu27Nf7VoZp7ifxQBS1SfxJzyfG4QYymRCNgLkyp3C8qSQKK6QxxbLwdTnv",
  "key7": "4LGRpntuoTALsbKnxGb2HRWsG18KKNz8o76pbHvj9WNnWiyEp7sGfVRRG4GeGeuWcG1FnYMQLk5h4HvaSsE6ZJt6",
  "key8": "5p3Q4UBPQ6RgL2L2D31NNiPyaFoMXCYXNvzLocnnW6b7mdqYzuHG7BhhkvJXznWybAGiAghaAvuESKowjKXdMcro",
  "key9": "4FFVqcZ659h3CrRvvgmJnFpzcsNAwEpjJpshdKEW6AQ1Y6vNuWJjTng1KgfNGXoD4j9M9dXx15obpMooe5QjMkRU",
  "key10": "2x91zbTRqQDUnUmKBbDGQyMg4Hd6HMKSqS8hgkzZnqQvytw9nZ5eefawCtJpb8oSYp8MbJ6jCzZF8JNJPGiZdYty",
  "key11": "5LfpucFPcYhYtJK3JdRmrSZrBQ9KxiWY7Tj3YQBpR2wvJyAXoNLHmWFcb2so9UTsEJJG3oBuxYff1wHDMrjhPgwJ",
  "key12": "43RSbYu8HdBTJSe1aajhDi37PX9rnLWBmTNAxWzVmddNB5xK83bb9JEduUXgmCjrf5Zuin6MRSYP6aRwAhDDm13o",
  "key13": "HjDEprj8dkPwZAoDSwvQGjhBRgN3y5RBMF1iky59VS51B1o4EousW1gpc9whgaBPnAa3dAB3o21Mayi3Rwgvh7t",
  "key14": "5QRE5MbSSm3i6cBJhn7MMxKCvVtGhkfbNatoYRNPhSmJBDY5y3xYKFvKVzbvUQXXMWPdpW6qry927f1VQHHoMJpw",
  "key15": "25EL9JChC9diKZZTknMaF3oyKRhvRGN4WTVgjzax25gPUKZLY6bkZFuG5yS2bjXuggQEFWnXqwiF7XS7Ub4hd2Kx",
  "key16": "5gWDDxzkccAbnFRCP6T5oEJgGGT46meqeXAqFTJLPnLZuo5AzpnYadcaJK8dbenoSwxaR2ESiBsiVxeAUhSvHG3c",
  "key17": "4BxBHWXD7Jn4BPujDH5gGSq4NAgMPHQwPBJZpSoXKEf7HgAcSqcZ8opc8kK2q5mNz5duFTC4ng2pHED5oxn7P3p3",
  "key18": "2YchUaqN3UHfedSHaXbx1errcFSnyMki6orNH6wjaWygnhRoDVNE45vrVcEPRipyezcoeaW6tSLjhJkhSAPDEYtB",
  "key19": "4jj1UrdyezHNsdHPyEHf2QTJuUasHEykWKBDh3TbEzrWHsYnJ3BtbFksqiG4qzoPpwNKBPa5VJHAoMMovwWZcZzN",
  "key20": "NLngq7iMsAhe1fraatapDy9GS1UuHc7DCSabus6FAYRwDKStQQTkCEJ3X3ndkS2Rf29k9CcSN3cpWFJkVgu3WDn",
  "key21": "25NRZDXhhTe6XUZPqLwNjXasUaf6qLHSYmwSwEDwCKQr43G2vrAC7zGWgQPHPvJwVQcEPqL8uFWnTxEX9Y72fDRo",
  "key22": "f1oJ25JVBbjjUX3Q9FEJQbuoyhoiLb2Z4G9QRZ8E2Fq8xuD2zoAa317wqNjZyCqdbDYNLWeKBMLKEjgG8MQgqNX",
  "key23": "4yiWYcHUtdskrQa5HK9pzxpFzRLQ8x8viSgSVDRjs4j4rmMKWYVLYfiKcBQVC1GXo4pcAk82UNssTq1Qgfx3d3bd",
  "key24": "2sjJouudB4wxorv9K2BsZPxtRYkozriwa2muQ3S9WVmv46bffLNeZw8UqTnuzJEbKBz9pX2gP5Rpkd6Zy8S6k2G5",
  "key25": "5daqZphstHhVXZZSXCTECCbgJ2ZkR3GV6hLyuy8Kk58boBE2xzsGP1d4E9NQYfYQKN7D2uwpmhKbYKdErPUk4xAr",
  "key26": "5G18NaEEENkRhPNHAU3g2urtfYsMrTgQcVrRqQ6pxfmMmLwWyonn2183ErBh1MMzvDPE7qmABpkbqSQ1AnxszcFe",
  "key27": "3Kv4dvDhUS4Kft1B8WiwJTdukAYrTPu3UJTzn1SCqwwNEghJFRFvAoezPrq4xgfEbkCwwf2QfAmQQMqBzLNuPJ6Z",
  "key28": "233SeQU2JVJjEtmzg8rRVJCHG4Dn68AwoadphX5ezDnYjf2rrrVNKELCAHjDSfJTwh25ynbJ62kiYjmw2wLpp6YQ",
  "key29": "2J7FhJuYeuw2iVxRPM3cG4FLYyybNR2bqJwaVCkcQG91SqmqUjnDgbZYbMFq3JBJDhzTELPKcVGthghB81WsUuNu",
  "key30": "o9uNdbzWbnMCZvuFgTm7TmM2D4WChwMxvRs3iHCPhFtjm9pCAKZrgsoGU5xA7BKmhWFN76p7hZwAckREkTdKKbJ",
  "key31": "XPanFgexYJb6StcioFwgCbJVqJqeawmh8VLaFrgs8mGoAkGdQkK6BTj6QfgS7AoRc4DAA3jpBv9L8NtYw2tLFx3",
  "key32": "5vX1oeRjTc7g3Vg18uK1bdqxVjyaWL7FrjNowycGBYNzWEMNqo5Pv84tZRK6Wht8j9qWBjmACbY4EJncUCC8zu5i",
  "key33": "vQY1ixVMzxkF3679RCh1TxwnLE1wLwcZDDXsbLu3F7GWaFW36LrRxcc3sSFNZwDPKvgYpSkb327yTV3CkAiuYq4",
  "key34": "3qC3gHh2BW1MG5jjj4Ep6Sgwran11i8Xyasv9VxeKuKXS2nBbY4DDBpRp8eEsZAiMkkjByPyKnkoCrJd4hqmfjKM",
  "key35": "5cHZBmvfv4f6ywtKufoB2dMrCw8UFsvb8QPQBaGdrVhQ3btbwVMy44fm4CERFhprxgYSLpHNu6qcrSgj1pc3HFe7",
  "key36": "KzcpKarkgFo98hsdrkDXyrsZReBQAz2K8DXPdkF2Nf4jnBDBanHK8awGGEkpGwfZ5Woz44kVBH6hNusxfHBR9Uh",
  "key37": "3kxHi9hXnBEWcoYdYNJkPG9GZau4neT2Ntm1ADdKCvL1E1g1J1DKpjv5oNxzmTCCiYkbMEWxQ71CLS1ucsaMetdi",
  "key38": "3GwQSLRG1rWAxiuT4WMXEw61DyYPoLLZ1ZasJvU4KGQWEafU92YScYes5Cp6rRSEyQPHy8SdABYfw3NqewJ8z6MN",
  "key39": "4X3TWXnLHHnfkV2pV7F5H2PtDkjxrhCoj9vuSU2z7fRPnYiLjdMQhiMvhuFQo6X3yroZt2fT8ZAmVECp7voiCCtu",
  "key40": "hF2YJdxMcbJooymvYbMjJGqRCD42e4XnRkWBHtShTd6biUmq688upuYnmRG4cenXQjpqqAJ59dYLRDmCmW1829d",
  "key41": "3hAEfMkQSHwZqwg9VDJmf5mossvbwxkqBnYeLyo7TTrwmrdbLBoKe3zhZDK5P7B58xqkMpKUKLWQK1LNVmo1toi7",
  "key42": "k6dvx2a7k9VVi6nzMPX573qCrnR9it2FKQweE7fvwnYo8vtxSqHDzWUWNxGVaDgXLK8RqXLPtHxEGgorFfXL4JW",
  "key43": "3Vz29YDGneGZCcBmB4huP11hC3RtZVtrdbuvuJU3C19ygXHNAc9Yt5kuxHNZ2p4jzUmR5oT4jCZSZGbSdHFDeKG1",
  "key44": "3XX8N8GnUJJsHNagi6ESRJcNUVjpsSUnX7cW8qm8uA8vMc941qoPJJMFG8mcoP6MFScy81WQj9kAGomuLXQcAGHP",
  "key45": "2dnPhU7CpsXBNAippcpeWjGah4oeNiqCV2Z6AX4qt1W72mCLNpRXFKnPHD3NWzS61RHk92FL3pjF45WDcobtctoU",
  "key46": "5dUvP95RKftWBNZNdZFuVVnQFfsSa9W3ScJrCwYZiGV9B8JADXuChMmwgMBhNWVmAS7L6qyV7YzcPBnhDVWDZ3Yy",
  "key47": "2whCtK37ZdxWkgjBpXeMfSCyPYBFYPXcnqSoAt2vLSFuEAykrnaXodTYZxRNnT6ELQ3A34RiNCUvrcaz8JWxGqqJ",
  "key48": "2xy46cTWoLUvybqt7NSFZNe2CRvxJeNyNYFHBHX9KxqfcUCEGTv7SLGUvffKK1gyvDhgEWcHGiC1194ZeEG7GLn8"
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
