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
    "BV6R93egrqLiTZwFhTdPDaErjwX2Xx69s7eyjtmqZiUdYrBNNDjXKsbzikJRckqn93fvG9kfnpJHg4fcvFQfLFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M4H2vEo85PrDgKAVZZwHM8WtHCA1uDnqrScA9p8kegweXs4oTxMoggvNHbmnBiUVWKe4Mdrjxk9cXr1TGUxhWWm",
  "key1": "2so3kbijfSa1wjwxUyZUmc9hsfHJhuaDoqgzV4H8dudnes3Lu56v9QXuLyqAr6gWxVVFBdwo8gQ5tVaW39xXzEJt",
  "key2": "5b3bLBopu9t2gPioQHrD7ZeYkdPcfx5SaGhb2pG7fywCgG7SJynaFtn14Km6o3PwuLsMSQTJG49MfAf7hrWnsZCe",
  "key3": "bY7NMkXqbJAyszJqf7Tt2h6RqiJ3rpeP3xQbHbTkTYVei16b6vs8DpgNVL9mRMoUyoVeYpCFvrXVFjzEoKJzwsy",
  "key4": "4orTVX9rWZzVifcRCXfvoekFztSKV9yUrGJAMxYjosiZ76Zd4bQorcCDwNTGTyr4XJYQs8LL5cuFz5AVqVF7HuPo",
  "key5": "53Cj9kpfvNPTj7RHvsZxFv7rXhbHzMw1WArPXkWv1ht27cLe51zUghuUFaAugVzHQbmDYtSAkMEwPv2pPr8ji1T7",
  "key6": "2NSTbtLpWPwzHobuvpRXmvjyyTQ7ZSvigM7CvoYYYG2keY5ZMSKtVYwAuJ2cgzepWty7g3hLj44K4iw1a4z7xY4W",
  "key7": "4SrqFKbcVwPru1eQ9qwC9bVifaUss34gFmVWDkPM3CmL3e2HU1Zu3WksK7JhWfkPJy7s5hrNjyMsLfesfK3cw5K",
  "key8": "4nQc7ZKtfeKnwa3dXz2irXH5PWbkq5Akrsscaa67smAFJjppKbnoAEJ8E9jpp2j2S1Lxme9ZEh4BxetgWDJyr1pe",
  "key9": "3h47JXFLpioLWXdx7f4ANDmtLzLF7M696n9ehDyC6wwxtGnX3wTKh7ByAXGpESAadc8XdGC6JVZ8KGfBvuzR1aqv",
  "key10": "126NavwV5bJXqwLAQmEF5toxhp6F3tC141ZaqSf6uvfSR3R6iLuCYD7ZHBmv64EU5E47mhBTay43bmevZYJxTaHQ",
  "key11": "4LP2UzzhD9fFKYtgrD67h3ghbrDrQ7pJvwPVFTTHjZyrwbzrZcQxtrsNQZ7TGr1tNnpgQD7QQAShGkGu2F3RpGMh",
  "key12": "vhM5NVaEFZsjsVrKqRL33DSgnbA6BSXUFycXdUvpi3MtyqhyQ6favaxiRSHuFgjiXdainhBH4q6WgNwxKCroFX6",
  "key13": "5RavNLGC2WkCB9oN3J5WMCtXMyroEZ8oQpQnVpTxJzUf55ioAxGys4xEJEXXeS8ApjbSnEJyJag3N5sHXNzR1MhD",
  "key14": "sW3T4kBHUE7VSo7up4Vr31c4PpdRPizME6iPcPsquYv4Zc19fB2j27CTcmPBUvjVjHrfY6TRD8dLgD67YFK632E",
  "key15": "5P3dzBCztPFfP2TmDFsdVUnKYX4V53XXjjMk8P6ZSCF46HituS9GZV3zHLbo6sFokiDWtad6tQvzZLyAVsXuRJbH",
  "key16": "GfwM6RKaQAQbTgG7rEWQ2Ck7TMvNYKABchRrR5sj6zJ5yKmWLZs9RtDnZtpPSFix2jpy2LAQfsi5mJQzHUiHp1f",
  "key17": "22Focz535n7QHSXXNAEjHc67SZFRcCfzTVzcoharBG9FEVkdcuStsLN39gDYBv9Ur6WddvB6BRe3D9HUpLqCE8nr",
  "key18": "65hEfzupD3C8XxXkChj7hxoF7tdbHXS5azBkRC6DFmz1NdUWn1F1KCQ93qtUyqR7yx2HeJUJJwKY2WwSsvZ5gAZ6",
  "key19": "3pQK5jEFPaQBQDXHJt4ehjoaS1ve2STPHwYBnvUoLnBaUazRZKvKGTeoeHRCxNpVggckL59JFQMPrTKp6dTkFkXf",
  "key20": "3UmPAvwAUs49R4jxK7t7zqBhDehdKi4PfBixwhHt8XGFiFT1t8f9FAMuLdaTfonYGfygAAJVCYCMpxDRNKJQKTJ4",
  "key21": "WttjMyDDNPZdmWSABAi3JxjVcBFhvft2AKgrP7JPomW9q9QQPJfp6S2J14FTpGumXPLfhuXoWk1bfYbc7WUrgvH",
  "key22": "2Tk47AcR127bRGaLRuzdEvH3rsA27dnuCQgVExPVVfVGcJ6nZXj6agDXfG6AZz88M8yBm2eKvBmto5GDFhkadJG9",
  "key23": "5zQndngNW3U4R6q5pXJUmUwQipEJA9TwBU2iRbYJ1CcSEUj1mcYovsSrtK7RxoAJbNcpBZoQJNjFm8qjikzCLhjG",
  "key24": "2EjztHggaTfgvJ4DM3FGdtozV2rkmihSVgLy3Rf9qLenpYVksczUmN5DprP7PUUNXoTYFZK1M6aSkVsukTxAqvXT",
  "key25": "3tvYMbyZUVuafUMo32ZP3USwquLihgtyKxrBqs76N6z9UszWWTbrHZqSyP8FUeDCtcEWxdbVpnF1ztKPhKtxHWPX",
  "key26": "59G82jhP2nAaiNCVDQc9N695Z6cNGa7u8vxsRF6e9w4Z47Z4LaASpp6cAoAPGb81FGzamx59QPrXTgzk5fsPtLAF",
  "key27": "5VunBgmeYwyKY5Wd6jACu17JAs5NuhJpTUsbPSmf8xYeeCC7VEFYPPEgySP4on3U39wfm3HCAY6mQu2Ap6388gut",
  "key28": "3Wi63Urufc7qYppmW1N461e4cebWjbK9vTekFX33tDsR1e1G9MUQQjkk91oVH29SrRKK1beBzLBoc1qABmkcGLmt",
  "key29": "4WCj7RTdYaAwhCrKXnAG89vyEWyRRcuSd3rUpssbh8f6aqafgX9vyyzcyoJqQCQeQKt2CEdHVmFhVXCvSkfAAssx",
  "key30": "HnByC7MPWhjdh1eFCAEYG4NUXuhPg4YW2Rxt9hZf1RUysKKtAFkSGRmYavLw1UHfMte27kcF2yQciCBkXcXraBk",
  "key31": "4pAFtABSDNZmfaHXtL13Z7nhCDnTMvimXpxt86PFkYCLGSjSj9KRfFe5TxRvMcdCdx5egBem6pbDGEyxAbXo63jr",
  "key32": "4bbp8ErGEkGbBKAFUTbjU4Es4jKfFyVovaYwc54NNbYGMcwarFqWAmYVggSRjBzjbFkeTkeG7rDnbTiNLci1Skdx",
  "key33": "5Y9GQN4Epkaddf2Bc4f4ET4TrCwrXVH6vo95PQnfWF2TBXBqsdM2ibmku8Xw7Zoeum9AsSR1fvVXhj5MjyQkP1pZ",
  "key34": "3Hz9Npsmco3EeVvKvC638LsTCL8bvzc2UfufXCzL7GeRJeNCGUSTfURoi2byLwKdE4d4yyuMRJPyRCJsRZCynZ6S",
  "key35": "5HZtycbtCZLhpSSMVt3PJMhbcGD41duXRbB6B1LiTSbKcRYGbBAhNJQszRbmc469hpQiHhSB4y7XDysiVz15k8SR",
  "key36": "4FfEhPzykEG3zxMDb5cy84h4bvzAij4bX1FFzdja1QnBSBXwm92jKY7nMLHw53q1rbVkwfhL1Hh2PdRhnvgkwKeU",
  "key37": "36nur6UYZsAbh2t5SYTgfZiNunmLw4V9qQsA6ax24zxukSLhi53hyGvULt6FFK9RgjF2RmEVcCQ2yjMqe7bGrrMe",
  "key38": "4JVEdT2qFcy2r9MSAnULQiYsuFNJFQUMaYXNpsFJoa7123EQxSEtrkojKb3rsK9wA8HdU7sjyb7NbDyCYeimWH7L",
  "key39": "5Rajff1VFjdLNdPBD5spnyagUWCpswSL4TpvugyK4FzAXmQeLpWUbpq7HETgeLP7PuDTXvcm9WTAW79vcgQZrApf",
  "key40": "2oASBvaNvVrbgAU5Bd5u5fY4iwL7AsTPzYowQtQQR9mPkR27jEBZigEjfbuqXP4f5qjty5JSNeyTmyJq5gnwWyS5",
  "key41": "mBKXJ6AKjr89oPjswd7BXBpctibupJ7kSB1jjJxoLBbotsM2zYKSwhoGp5eP3MtEJ1wb3uU7a6nb7Nhx9qjruoR",
  "key42": "4RMAK77oNaPwZhjt9wtDiHWSod8hDpDDqthduHYUrbMiqj1Ja9AGEKSqRRpXDFtMh3vJxxz2dbVjgNw71wtb2K1d",
  "key43": "27UFetyvBwcpcyDpoL5xZ9xLNnqXaTaduSCpiH6VCWMLVjQ8f6nqtBYetG14PwA6CkjNzyeQbs34PRsaAHwgoPe7",
  "key44": "67nDtxZnS1S7k4hZQLyyskfY2isG3bemaZfk9Ad5xfnFNRy1vyZDpmrwjEWUNqy8hhTqh7Tj9e4vSfD71zCcfkuy",
  "key45": "dL3o8mW5t1ztrQ42ENzdMrHfiXHbuaDnSuGMw8ysUYZF2m4LNEtgQJGnoiZNjk4sZ8un5pWUXiL6tKeEse9DB7L",
  "key46": "krgUSWQssynxj1fD4rJdLyqdxQ4Lsf5Ubi5vM5EEBp27dipgQVYzt4ZEwKDRF5rfRSeTAEJMgdmme1LXarBWBBG",
  "key47": "t2Ud7ZTiGHx9VXcgPK4UemHpzomkPQoNfs9pTenWvPWqW1NYx5e9FiqRSRjRWiU1ynsK9aLefUNLbiB9ammQMNW",
  "key48": "3SzHMFC31JuZGFyxASdyVbnT6Z8ao3t27WWGkiuJWfJx4yDeDxXaVyNhZpva2vubK3DKbhEAzQBFJ5h5ruzD7j7y"
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
