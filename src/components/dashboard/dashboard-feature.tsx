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
    "5CFh6VUxWviGu9sWTavTLAkxLsNjYJy9DSzH2x3pyq24kRvwppCiD1q59XMBf2icUUue9JpSH3hNtymwqRLtvcfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49JUFbzrgbvgXSPiY8QCTGfMDi5f658GWuS581HAMEEe2RHi2H53WHqdEFyW7UnEP3iEWahyvtLBMqSTLgbN8Jhz",
  "key1": "578Lfk8cM5fbBaUi42uet3Ad8epspAgvj8Bp8bqwoP3aH1kAhUh3wJpCQBFp9wC1pzUzLh2y9fcnq3XaaQcUqT1p",
  "key2": "FhFobDXw55Ae7boFRdSK3otWJvtXNCpQ9HMNFn1Dq1qJVdoi1A1dzurBsFUWj3Boe2iBmCQhwVLHArHK2d1AYmK",
  "key3": "3SybcEm5LkvwJvJv2Xcx1J6bfsCzgRkPe6fM929zUt9Jw3RJdPr3rbPhS6ZZXojSciyWzW4FZ5ZyGpGxtW5RvYrK",
  "key4": "53Bxzta5XFo9RfAPMLgbo1DvRP7wKKroKk7xXQh2y7gJBBykutHkqggw4aqXX7mxcQqN6CDd7xSkhAHLk8rLvJnU",
  "key5": "5gkEBWf8Zwh88p3pV5JDwHt25KmiBurEqu1Cfdz3293HpYcPDsLTqrYsk5ERuxJmbCMQqQGVCpMgyjeuqq2opEtV",
  "key6": "vPAgrhoNJ2KRPHDnRPkDRSnApTY1FKG5zR11VqWa2FK69UmvcC1fQAF8naNEJVU5H6KBnj4at28sQ3dBTDehb5U",
  "key7": "3196YEmbvodP1ALKQMW87DGaPttXxoym1fTm1cVsCM5daVzrBNZZgQQADgWWCLxMLcoczBJcTUZKa1ZxhHLyF3VX",
  "key8": "36quDptvn955fh2Ybto5QXtk2vkJukzA4Jw2hsaRNpuQjax5n1XERqrs3SwnNaC1kWAgHMdp4BaxwPhb8BrDTp8U",
  "key9": "2nYhDPWvuVpuEwMHzLLpR1ebyaX9K6YBjYqYq1LigE8TLbZheC2J5FG61xkL4srppehoEBvQzgoje4rLPKNHupVG",
  "key10": "2NYpvHJwhqvWZfa8jA5US43SE2P6KQ4pw4kiz9CA9Rg9sYdNuVtj6gx5m4RPghYUfBaf9fjRD21CYS722XPgAkfi",
  "key11": "5SMgfUWZ6y6BhTNfrPdPhrmGaPRH4SbBSsk7HfGwjbsTPMiNMVVFN8y5SPHy4vDgfvhudG3ePBTPjP3JAqNSakBu",
  "key12": "4CHwTy7eBLyL8XswCQZN8V36CYgSERhtF1TgPVkmL8wAB7jT2srpGtLRPP7RLf3Mm9mtJAmwq8AmocmQomwr2dfr",
  "key13": "36bvigsQCefpuzXrBkxHyDKdvrPc1WN27m2zE9jSt8vnyikcaSFYMHQ7dLUzgCZBi4edAsuYfDFHCwBbd7NVWn3M",
  "key14": "4Rr6WcR8gR1U66hNbPgFawKj52swTudoZvSbuNGdmhBSZRyLmqKMYtYZMLcgdoYJDiTCYmNJqRdtVCk1LGC7DEmJ",
  "key15": "21oaNvbdB6fCPWhtmPJUiXGQc8PCgkeWUnc8HGZpdMLB5RpjtEvaZYbQm4KxWpWk1zTjnbk9XdhLdaBuoYLpa1sp",
  "key16": "2ZabfT1zVGyuz33V7mnqdcsnWZJ4AMmPdZGMLgc7PqNqTK2Q6M9mhzbmq1YL3a4xQPDjZASQ6ZBUueEJuHpwFwoY",
  "key17": "5usyukfs7dW1ZmZvq39ctHnPPBgcXpX4K9B9qSixyejRi2byPtY8wnWPL6AC17cKME88DCbum77MkQw4V31vYrgg",
  "key18": "5h2ckeSQXEZr42iHqmbdxzEg4bfnnGMiTXTHxr8WwiFNWVk4iVzJzqMPWNkqXPZTaPNWMkXKxttFHqtZcWhAD4R",
  "key19": "3zPZYwHVT786njE4TEW8rhHGQjxhHboWYyD5D6NhSxi4eFbmpG8Lafmj9kJzVYzGe4SFQfgw8CcL8jayHzMgFMw",
  "key20": "38stYLgPYGkeaKvkMdevC8s7h8ZxDYY5kyi5eB8BLAr3VQLw2uWcyZPWRqNpwqX2o45WCPpcnsmqVDxvXUytzY6f",
  "key21": "fMkcsKLc2k2ZYMse98TCp8JvFN6GeJLzpr8LMrinGKnrHFxb69QqiuBxHTYem4U15AYWT2ds4xee1PTmrjSDHMT",
  "key22": "wpFS44m8VjsQCPH5eQx5Cym7uMGLfa7Jnd5XUMfDq81gQ6eDQBjtwJzgrVqNH7cgzJzHXpmG4m6e8hhKUDq5ymq",
  "key23": "btG6ddFedNYqSpWnK88rvGWaqUifxQRes4ggo8SBZy8LTFkDYQQsNUAUE71rZQ2qWBEUrhi8GqVgz8wZjWvu9ZB",
  "key24": "3c5tea59DQSfbv4hdizwAXSWNhd3R3oMzDn5uLoeCt5MAAVRiTKXuMwZbtJzNy7T3QFQaHr8tdoC7QvNYRpq2AXh",
  "key25": "29Kc6FfLu2u2Ezt4oa3KToixLSUxGP8c8LtahRFuu4uF5FoLub1HeK667Sc89cEdGidGEQnphdxEz2bfhNZbdvCC",
  "key26": "3FhxRSHihV6W5PsN7EwayMUq77t8JRuJzRJ8nEskpUJHkEPe5j17rht8du1qkt9p4dLp2rLhmU94fiVa7AavVabw",
  "key27": "5HUYdPxV3axS14Enm3DQegZtdSVaXEvyUBn4VouT1cUhDzhMtMEuqUT1YpgCupQ4bPsPKez9KWscLYW1wZEJyhzV",
  "key28": "brEKkEDatU8Wb3RVqKpSdJFdq1XZfNPpfmXjWacnB9JkcRM8CkCCqvcD4BR1x97gvUoj7bHeT8EoLN86XQmhbod",
  "key29": "5VhMZnv8Ys71icaXiQCrNHeXe62wSwypGXoAhPq2PsRSmu368oeij1PHUkG5hkwfRu5HgwWd9iJiAt3hihCyz95m",
  "key30": "EqS5Ex7g3uA39PcH5xdqBos91LS38jCNTQpVKfsidPgrsMvm4TzmQNqBwBNdE1aLi4dV8pVkLMLqUidrD67Qnys",
  "key31": "5bQBHZySYVpAcqHcGh1pbVJ9bXrpAsQpMxMEP3WPxuzg7LwGm858Cbj2veYQGPwceThNJtEBVDnXuPCHcEP8PsyM",
  "key32": "2QE2pYyoosYR3UoKfmHPVzYfTmVB76QuukGAm2jE9mQ6nx2M4uZPx6UGw99ivAu2GnEt7SerWZ3V35v2VQXSrnZ4",
  "key33": "NDwT4JbMJaeysonNnv2dVW6wqSGNtXUjGm9csGPTUCeeHY2MxmHWPSmE9artizRUDjvEwwBinvNeoUoxeGzpaxH",
  "key34": "57PKGrmw53euYi7Rbx1rFwNwcvs4Teu1C2tsTepv5uyFvREWLBT43eCaa2knLFodmX7yh8vnf1qXYCm34K1MLKbq",
  "key35": "3H2bmY267iup4Z9qcqUg9wpaYn79Hgr8sHTMxcQuGYXzzaZXiXLeZdgBSpa5Th9XT8gSbWCpoh2xjV9goQcZ4ivG",
  "key36": "5hCwJJ3AUtvnz4Kv94zEaXxg82orYMLG87jui3fHhjh7aTsdkaSvdC6N5GHQK8wpnn8Y15WyGxjcqyRxDmSpyyZd",
  "key37": "34xRwRLPMF7icRMZJYsn9TqPZJyWET3xoNa14AE3RV6CSAKo8Y4fz7Kr64FM1wP2saJtZ7tj3F4rwAbmZpN4x614",
  "key38": "4v8cUAhAjhnuQD5D8MAgiT8xJmL3HaoE4qckhcFmMLWFhJvYXcMnfuRPa2XcFzoqagqRu5ivmMxiBPvAUw5ea6fA",
  "key39": "CfJrabaRoe3Pwnj1xQnPcRPu6Sen4KUe7RcgmS3tHgPtzPHm3PvTKGVZ8EDPvHbyA5QsLR4aXCCz4HEU5bnnpBb",
  "key40": "wzRGdV6FaMUBh2X4ddznjkTTQsC5Lk9wd3zdQq1ZRjptq6J2wzodhR7xwUxL6JtBJ9Vftgki1QFkAcvT5vm38N5",
  "key41": "2QxNkHW3j6NfrqajquPn1XwKur4yART2YQKYiLxXsxNW91Jt9bVVseNao3AJbvbPLWy5hR2Vx5wJkenq96bgVhVv",
  "key42": "3CL6TxwnH9Q3ANcLQyEm1kouGjJghjAuGTLVXtHfSrRrSo2sGQdysip72tWVJzV3vS9DPUyaHeWjpWV3smVkjXvt",
  "key43": "TkiZZ2o9vN98AiTLaBYyYFDtce9Eg7qDDZipkMYTkqZPs2qw3537sFnytD7YQ46mjavDbrTbWQj18dhP9rYXT1F"
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
