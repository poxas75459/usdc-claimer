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
    "3RBEdJ9sySr5SQ7pWQHnbRBAe8t2piqKje8FomTFcJy3pxLTFjJoPW67w8Q44axkiUSKbbUFyTH5VUiDbCk5KQS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dKwApFrYpFP5oZjMYhwhNhqAhFmTsxBt9hAqwAaHitcpZ4QYXG9TZxjdQNtGtW7Aj2H4zXQ5STN8HrbQEzhRWKs",
  "key1": "44wsu2iHB28TfHv6Nr8yBtvQRV6zGhV7saY7JFp2QzFEgR4J9x8NP4sxdhFT3B4PFRgLe9XsAp7kphrdTzw9w5jX",
  "key2": "4Asb9fcRmJXDqNer7zJekmw19UAyt45T1nzy5uFGUF6rsfxdM1izmUe9g7cdE32bpwqufXL35RtgqxqhBTGuk3Hs",
  "key3": "4TV34KzxY2QAeXq5UaP3esL5FrJUmUUrYSKX3UFWKMSoXTaEuY7UjQZwKpPrEqN7aYFKHrG6kaEKwgwc3c47NhML",
  "key4": "3mBSru4Yn8wYAJ6bmrddtvFn6cmdwwxTGmkNvA1UCehR8r6i6TzfUuPDjVVvjaZJgetrcThocVywqty6sAjkRk1U",
  "key5": "5oeYvSXWJe1tdVhCnQGpLeRL9zixBK5F2TXRtUEmuDDUdYnu7gxaQYyGJGskwGEsyfsotCwmTHt4Cjga1uDCob4y",
  "key6": "5eY27k38a2cnP5KKP6pgpLRGWE1rRRVgvBCeSkEQW72hscPV2kn9bffXYozrDrLGZyegeqmyV5cuG3SLuCREKneH",
  "key7": "32cNEzsKuzU46LRffX52taKQh4ujEGQwvjZVh2njiUWdRMmWdCP9LNFfdGQ9sKAsZGMRhipiKDtdBRVH1zH9q4Z6",
  "key8": "4HUcFwUEVNSXMtvZd44W1vzZEe1ek3SYBEGFn9M6gQPLe9ad84o8fj2HPbMCnQtuEGPf5eQCCitA5TLycM8GwD12",
  "key9": "qPrudCKAC9hyFV9T9vYcsmCN1W26DjHitfkgBC1WCvFvS515GzXe4rP81fDG7pSLV37EQA7RAosXupCSxXs35pa",
  "key10": "SM6FsnuS44XTypEGBqWZugND8rgrsLEgskGUiHsVvS2Z9YYtgvB6JinSZPN9WWEt84739aaJzQHadcrDQz2DZpz",
  "key11": "4fqoPvhBmYJSyWWDEnkjuNrYpqJsZgDeQmhaAdu79oEUsEeqcKAakhQoKSejtJMG5v82FzMrivHXUCfdRBDfyGL5",
  "key12": "3JjHKoPMsnsS27BFuv67ocDN4z8sjgdfASmWpxhrvbJ5wVzTBDXa3598c7zNuHedDS4pBv8nkkoCWafUodoRXQos",
  "key13": "47fqzujhHYvY4wtPk9grbnNTo6xV7n9KQVc8UijyqY35U7NstaKgPh5GbKS1QyGuP2E6niNBK9Ti43bEnewLvYLZ",
  "key14": "2JyCMZQmUt26hNqPqATRk2eeoenmPujue2PkK9LxKJfFQqrQDjMk1AFHY1948pwAYoYazQ3rtshz7Q8QySFtHkSz",
  "key15": "5HSD2217XD4qipK9y7NyU1mfX3Uia4GR1FbE6kEPnVYMNppGAWp45oZFfFrp6Vf9m5aFE6fBTxyD8Vg6EHX9qGxT",
  "key16": "5SS3rZ3hfyhiDYqGPAPHn1eD4Fcq4qyJzKqDfh5VZTMh5mthU6XA4SZe5Xf1tfgC2PLGxfMcQmVSefL8nK5BdwfY",
  "key17": "3dUPMwCUEicHB4JLV5MDoS4Ks8zyaRjLa5UdrpzK1Vr2yTTJuw5JBFq8fjir5FPFFwqbq2yoh72UVVRUoeB5nCRu",
  "key18": "3aJwi1BhnseUaJjsdW2yb5QrbgnvA2csTELTSzudee5hrbkrVTSrSccx4SvdGpwwWxUTY9vtrxvVAc4nBX6t1H8J",
  "key19": "3as6f968bWcihXQvTGz21Wn6Vv1K1AF82bDm838tJWryxbmK7AjvynkaNhSxuC6eUTktMRyrcsysRqEyB1G9peh",
  "key20": "5vycySgNqQv8rYyaFAgjimDQhKMknJ8GEF1i29GB7qZyEjdakTNRejFGiiYnXbcRvJufw9vYLAMQbCcupu1pYv7H",
  "key21": "TzMk2UaxmzoNbRnwRRk8ZPv2JPi4hi2qCf4mDtDUfUgu89E9NL1ErZjTDSrgv3uXYDgnrA6EzW9FG6S3cNd99Zm",
  "key22": "2d8BdzwkL74Ty5sGWuSZeufmpH2djMH6AEkFTw8Zq4NzobnTeWQDEULkpk5smbFM9U8ovWbXYn7C9a3uyn8hcwqD",
  "key23": "4sRR3LRQFnN7STnhe25cTsLwp9PN2HhpNyEKQZhQ1XUjtJKY9DHWyDg3JFYpqAd4p6D5eKiiyhQKHnpEGeMXjPW6",
  "key24": "52KtY551Kpu2VHKDA49TNB5srFZMjbaAjk7GX11seiCW139McwTVQDFMrm53bKFZKwf64tpv5QXEvLrAgW4zzQM5",
  "key25": "TQGG8mWXeUctgzEaj8pZua7oK3cYpVripvVm5S4NPCMuJvSTdQhG9RAobHNurTmBNyqJZX3jvuxCjkZsu1bwhtd",
  "key26": "2F1Ki3Tr4Wp3UxqHdtGt3wxPMjaFnpU95yYTpGQUZC7MYuWRqTeik8UtLAdpSatbfFSnNh7HTjYWdZwXTVsMEVPd",
  "key27": "4nZ5x9mzmajhSyQDgbcUfTNtDHUP5LK6DXg53rfvJhBCc7pSyYPCeXAnuTvQFM9LLkGWF1WsVqFY8uPoJ5pcnvfX",
  "key28": "5RQZBcQLjnQHqygNsTdnP4QHUWwTb7LcfMaWbjhikeXWcHEo8R65pBihzDcwBkStY6p6up9viziEK2o1PrJiwB6j",
  "key29": "3FisogXYuVLnqKZ2bHk5h4tVkxggTwnotgm2JSkcb3q3jyj5TFwQnoYdxDrrct8ri1uGYHJr3Gw7F6Q2PbV7f3hu",
  "key30": "2YYaYw9TVtkLy8WzxW4ypQFqvrCe5cbweXqW23VL52Ma21zHvoqDYPjaiSC2o8mrr3o3oRHhyLePj8fxPejpB6HN",
  "key31": "5yTcsLUZjD3GxUmwfxgT6GL7J8csHHJ7P2RgoBLT2TF7XaxDesXSKcgd3h6c2dNZk9JSBipC3XpnHgFAitBeh6aY",
  "key32": "3DN8ZaeiXuZARtZATEPSVqMWrRsMrRGzvYzBssVQF43Lgk7g15mEB23RaZRdLwpjo2Y8H6deXETEmc6CFvWSUMTB",
  "key33": "3wniHmCAhnm4Q7X92UzKW4Vo6uBDP4rz6azJ8cd3rzsfeXa8WQtspjyM7Aphq6U6Qg3tGyGUoEMGwXRWHuZdZoYN",
  "key34": "2Y9BLoKrfeLyPkGJqaKjwdKnDtZ1NjDqAHgJo5a2cFQkxRHEZmmkQmH8deiyZXCBag4AcmBBFiNEDYnNpZjJYE4C",
  "key35": "47pnJ4b3Y7npjxsRFMkQU6TAuukz3T3UxhyeqofAAEwyP3EivnF1uwFPcsfAyWC8knRZ4NfqoRLL4tJH5iondRD7",
  "key36": "2r5P5nhzkiQwqDUAHpqkV2P6jLawpTqLMj5ztNxVQ6o77eCr5rboiZcqfomxpqbxvFFVqoiDmcWa3493peYNUM4G",
  "key37": "2umeU6JkjbF34GYpqy14Xnb1rTLPTL3awqiGmq8euXeBNfD5wHuYVLNNBxHc7zz6P4H4dtJt8zt7GfMvQde9Pj7X",
  "key38": "5Pik6iQJj5gjmvETGbMQMK9TYdzV8XcFHGoMkFWvgqw17hAHWQsbCBwVovNZHzVQokJXKnJQXSZeynFAhC4xjNHR",
  "key39": "GgXtq8HV1VC8Bu7QpDnb8w7cGBSGrLQ6AHtea3oXgjLTc4PJ6CkVz9yoLeGSdLykYWPLumh6kHN3r13ztYh4ghk",
  "key40": "5JuWQHo7WiVs7aKTqsM3eqjprNYDojFNF1QGh1DXxEDYi4YBPD5sEyFX9zbTd3pz35pfRGaLQtvwrEL6C5Cy9wVu",
  "key41": "vY9f6THwsXu7FktpctYXU8nNJRLoUgu9ArbxufmKS2K3iTe5Je1DxwqBWeYdj5tmb59iQuF3keoVvisT8n5aD1R",
  "key42": "yfCWbiYkMqn8tpHSZWHtKgnpQNzoDKTcqoetcjZNNogGGK2LJFNZZBP1EkRAMrDKAmXBkixqTxPxbCeQ4ujxkxj",
  "key43": "2yeodcqVRG9UYyA5hAPjRNzUBVzr1Kw7MsWsvRJA2ciLxqMB3ywqR7ZXWRQKGoAGhzSwQBw3g7Bq9sZaoRvedxFk",
  "key44": "5V17h7azVSZAYknppBtQNnyZtEykq9qNnqQtFfgamRY2cXXRotAzQaeSY8DE4U43Tc55HWEeMThbLRPjRtaMcV2e",
  "key45": "5jSWQ8ibtAHTsWbizNJtnkoYd8nLLfXJ9Lf8ntqASzR5WZrK394rFqzacG3ybp2CS4fAHpq32Uhk7ftffva3zeZQ",
  "key46": "4Xt8GdpJ6YKtZRCbhzE9Y5Sp1cUGobfx3oGXbzht33zTPQjyVbunwsqf5fQeBcpPJ3Rs9MEEKjGQTTvSojh5izag",
  "key47": "5UX4fEdbMBeWzobh5eBNnmcYp9Lfkd7nohzwbCdc6v3Qkmh8o6A3HwDXXAB2mVhgYZoApQmP3aSfVfcD5HqqHj9e",
  "key48": "5qf2z8yMZbQx5XBBz5kEAwWxdHqAG9gwmbqW5VUoW8Mn9ovQCY9L3DgtzuprFCUTPFxMPhPHNGfs8GYaTK6p6L8P",
  "key49": "5hWzURZrMBfaL6h81q2uQR93gwtwFVccLyCZdfSJCnSuyaW65LMitPUeEa1M6D4RSQ8qkSaf61P8heP9FvZMLXag"
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
