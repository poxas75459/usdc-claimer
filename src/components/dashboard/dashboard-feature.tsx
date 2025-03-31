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
    "3g8WUwB5jJtVyvcGoNb2FqBzgVs57qSCfb2NU6DiEfUdGKNg3XXt1DhM94ybajrscKJdCiA65h1vUXttg98Rk71o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bj94PCF67AXq7dMR5LaVxitvYKyewx9g78Um1UKrrRHAPSBPQdckw8vc1uaNLBUuLgBe1Acrc9MJGyiNFf9A6Rf",
  "key1": "3vW6qyRwAn6dCuD9mJ3bsYUqsWi74Yg65FHrNw7ZrYpyDNQqs2N2MMLCWjCqWMzERZnCxg21JWKrwD4oLKsS1MkD",
  "key2": "5BrFcZQs2odS79PhZu5DAg34PWhKtU2pJZGfHucFT5iQRwXaM2Qn6ywUDheGyNRiznFwgvdwCt31aNpbU9zxWjSj",
  "key3": "dSEYTNoK5gdVnPvP4kghzgMdYmfq3c4dks72xdNCjuoCEbXfpXyp28Hdkffmferc88Snb4L7JD15tsPCcpX9c7H",
  "key4": "4f5tRCPvhwQjWNivQNgCFTVZNM7iJy1mYtCpPR7Ugu16XNoJBfSptNFf5WX3GrQ732b26rcrTpZGemxBqUzxQ4uM",
  "key5": "4XfinbCvEhUCuH8GGzoDQTTujyCqhVMCVhGh9YiPUarMka1gGPfVsGcaAgGkkcKGf3RynbUke7Mstfy7qorGn5Xt",
  "key6": "2Smg6xmUkdXqczK7qNGB964bAACSuTqPMtgADuoveDrEGbLYvasowMxsEsnLUJKn8pdBenJhrFqkjageRrNJyM7J",
  "key7": "2fm4KnxaBF7ZS63Bg7cyjy3Wvn7oQzrNRRR9tMHfpqTxcnZcdxFhkxhR9XV2r7HajjE5rbGRDb1gFKKuyoj6QU5m",
  "key8": "2QyVHZx8EqM5wANT6RpnoAE2uYwdETKh3oPQcBtfxYR9P1nNZanGZeL7kUYsgkaobGPuF11q55NAxgYav5buaJS",
  "key9": "311W5LF5MCd4DXjMRf3eojhdV8k84i5iVRL8phapF7w2H592yghrGVxLsTcP6nbAeW2F4etHKxsX8kUZbLyNNFcz",
  "key10": "Cxmmk6VjFem3EbPxhrkgheRgooJweqtVaoDcWaA5NGd6LRBV4Tobnro1TXUuSYae3DGyoNsQ1e2jr2qccTqu81P",
  "key11": "41Qu2ExAjK2rRXXkkfGZaY56MtF2jMzjosZLae3LyVGaeMfFv5voyFiLqkXoFCk1Xn7TbNufbK8rS4tNVZrdvWte",
  "key12": "3nXFS7ahxK6oFS5hP2H7YJeC5fsELQgJxWcCVP929TQz3NMaD3ha6r63fkB5Dt3KHmLr6TaNJbhZxWTjzGrwE9Rq",
  "key13": "n5PgEpQUEiKuX3ZMLb2PdxpZfPiaRUkXvKkamvdMdhwoQMbskT6TeJhmtWABjX4AX4C9vh8orjW34YwMJGWqrJo",
  "key14": "49F57t3cprgbFAwhcqkTJ7jmdwJ2T57bvW7htpX9G22BajCT5JNYimKELMd8g3dqYU4DUpTFfxzG7zJAbLx8drV",
  "key15": "31GAsJuxdc8BubzVfpTHhgc58Ltbx4zRgbtEeabE8JecQCzKvgdyZ86bGvcBzHZTE2UL6cR6fbhseCw2D4JbonYW",
  "key16": "58Cis1mbqQNLEjKjXDUKyciKWTTGCQJ2aTQ5SXcJLFpqJc2gqTESARQe93S48Q855Vhy8AcsrZi1YSjZGLfxdajd",
  "key17": "4GJ9z1zU7eYVCS5xPbNN6sDTJjifV2EeHQfH1kdEB3FDVdK9NWZePXyCaCE6H7xktitC3UhaLhzRxHq8vGXkmV31",
  "key18": "62mQG3bbvSuyDHKbKdm6Y7fSSRifaqSTMLDnQUnUHGA6WpB29kU3xCgXPKm9sXZjZLKPVfLv9gdgSPSLuJwsAjVB",
  "key19": "5UNsn5PNZPnUP7HU38MFTWNUbMchvjYaciFjoq797YNomSjaBhLVt3NoSsH7bDjY28BUak6egWi5iwaiwPgdZXoQ",
  "key20": "4rctvEHbcaZusmtcMPvhgHtU1WArynhVMAxWvVRyVgyTmjV2UauR9n5eQrGkNxeyyW3zhPvc48gcS9UfRPPjuszF",
  "key21": "4z9JhBHsERPgTaexN6TkSB8CVSQutGsb5A9CEqj4GUbbW16ys8gDAwAo4aYyNqvYiKkmWTUVrja1CNpF26MCSGy3",
  "key22": "3EwZfnbmWY31SNKgWJQ1m8n2DEiGFF3W1hkmxd9g1xn4xD7xHzXKX1A4bDookBtdbj3g9qSGTWBAmPJ59256ffm9",
  "key23": "4dq5xDz5H4gvXAMdg6C6wUMvbcMyckKkid1qaDoyHLarfqgrnL5EsjMYqei9nRFHPwoiSs79jkZV5PNBpNyL5CiW",
  "key24": "5YoLsNNgGAsvHabweGvRdcfLxmhcrqDFugujAj8RCMy21wWF91qNiD68A69WamW1syA3LHCdEco1mhnoVrs5K6Bp",
  "key25": "2GTiVWAzQ8u2AoNEXkpQoRKthoZhqkNZFTvpniHQdUgJYui5KGRUBVg71NEpmFBiPUBigzHsfyZZAVanHwf3LJJB",
  "key26": "3FFBYWf5q7hdP4uMhF1B2cztv7CVYW74Rme2NWMyK44fiN3suUKhZJ5WZELann6YSUnChHd3SA7CLK755FazuMRP",
  "key27": "5ALt7V4mrpBV4AMWHF1LLrCiEYSEkd4oeS95kvF6DFkXNyi6qsEyf3itA61JKcKJVRwps88x48wVYcDcFgZTSdew",
  "key28": "yyGcZjM2pZ7XzqMyw7bvst3yzvVikvgef3MNA5vpQQLNPzAKVK5ijwnFJwDAJGc4G7bE3isLzjJikLBW5UAHNEw",
  "key29": "36npKv7153Wwodch3W8XY5z5dRQnBRWVs18NgJ71v4U2TLbmPAXSGsVzC8UcHwYv6dph3sSDfXe6h2uBGQVyasKv",
  "key30": "2Edcdyps8TgB37fhjCYLzXagCMBEU88CYkteNF559aBbAvZaZoQQ2DmR3ZkmixrFqLaT9N4c77neYuX65X2Li73s",
  "key31": "2RewsFQ6eCByak63G4vXryz6cLYJnvUZDYM9HfzS8MtPGeD3NfFK5VRfXUQ88dTHPEfMdP9TiqQA93kEtBXKvNnK",
  "key32": "2wLkbLfJ8BxL6Gn65vkqCTFJsZPzw1GrRqsWM3jXBG2NqE5ndHtzaixFMSA3CH5pvtME3s4aAbze2ECLHKcJTpv7",
  "key33": "3iHxpFsKNDamK5Jhqxkwduned23ZUZnCGaHw72kvBiJJkXNFoa23quZNLdVKbXPuWkPS51uHLBnucmFKPy5kbPVL",
  "key34": "24Zd2sMAgavptmm6P8oAYXF2BUyg2Xpqog7m9gYc8r6DPxNEaFtKxBCC4WKL7jLDAkKYRGr3V9kaqr4JXwc4N7Pd",
  "key35": "3KHhwr6b6cqGpX4ZfpUfoC3k9JswisNkuoLNaQUNu9wCdRzwVehJkFnEdQSpCzGievWfbJcCS5sMTZWCUkdRVAbz",
  "key36": "5hhN9NDdtDbKZdfex2cqjsvYqB24iWDXUECFXab3DBKf2hFsk7D5kRxhWJWb7Y6SybVRZS44vnatMjF3zAxdanD1",
  "key37": "uzb6jJiXg2RCwTNgHP9kg182mbBUdQqgyUNCnVg52SqN2nTivHxCnbuQ9qfD4TdsMzYUKFkgvFPLyQQ54UgZrwE",
  "key38": "4nuWNsHb7zZ5eZydUMJFMms6Nq8ygQwM58VeF9azcwiUJc8msT6q2CrxcjMRC2kz37mPzqcWtHsczVRzMx6jgeHb",
  "key39": "3K3uFxdv7w9HWeisRuSQDkPsMCjeM9SAxqxRnEKeXJY8zWLkXZPfBuaHvwLqZDxmnC4YW4C2LRrvj5CrYVSKhuvQ",
  "key40": "3E82z3Sjxs1fzTwLkjZE6Tir5hMF6StxeAxJnhj7iqoNaBccpRzQUhuTForV6KCHziLV15wWZzbViXMe8StjrWEn",
  "key41": "2uQyT1KugKo2K6xBovQCCDNNZJECNQJxNR6NVjh4pkoVkYHdyXGhvGxkAdDp4HkGjwNu7MnWHa8RmZHBoAj9oce2",
  "key42": "SYFfM5EVwLKAteTGS4oMj2W4A6opAMA7EhXXZMA36ZMbio7X3gA39kED8rQ132c18EnuKmeUANpv5wKuEc3ZVCJ",
  "key43": "KR1UB5nqeWFTDJEtAxdsfCH7WGc19cTY9YHWMcvKwi3mdb6AqG65xt52hfUTyYRy6UcXBXqXREvojP3VBBDPc8A",
  "key44": "Rat4QBStVM3Zwkzi5DgriubrWaoVNDTo1rTGhFFFbTYagS3nX4ZBjhY4ejH1JdytFMAeJEMYk9Z9gHDyk3XsGbi",
  "key45": "4MCcQENc2Z7CR8GGxTo9cpRzgEZFmpAkdpmFpjtiLttdhFxg6ZLRfNgxq9m5SUGxfbX8f4rQZkwYSCYrybZThJdM",
  "key46": "42iCyXrcsaTR16Ktt7JNcTZ9szSQQ6q24EBVTXQcwPDQjeLzEniEXRUX59HkGPDQW4PCSDv4b9sZoxMWSH6yp1Vh"
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
