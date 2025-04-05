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
    "4qQJiLjQvDGe4nEqi8tk9L1Md5ryY6F5qG1ZcLLPfirWLT1Fa2cRyzC3b1biAEbMiTcif79Gcg8MVyWxYZUmLcUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C8TiCMH9ESgbBBfmA7qrxk7XsFuBnJzuD75XTH49LLavZzuoabotMBJDaqPa8RRSNBRxYrDYMHMAt5M7btxYqEd",
  "key1": "31QUVtRmGZ732GzMM8ZBLhR3hm8xPp2c1KaALX5LTaq9aHE8WAfYYrkZphYubQLTb2z8hCMzurB2U4BtSfhwMBx1",
  "key2": "5J3bMJmrBJLoDXiYAyMBvPojLNLCabeRPuB5TRpCAkShM7RL8oQ3dxeozmaoFk2LDsZ9mJWgN36if3dL2Uk6y2BS",
  "key3": "64fomkta6opzXCqqQL81riPTZEAqRi2ookL9QUctb4bAcPFzMCXuybX4gj9Wxpf2DoZp9pKtwuw39KxZbAi6eHAS",
  "key4": "4dfYnEH52DXgA1fTiyxW6nMxjzZsmAGXhjffHsBfNCqtq6wdLWW9ELB8eLwJns3wTf447KQoeMSzp484pwQvtUcW",
  "key5": "296CwbdeA7w9cohf7pUH2GpcJNeCv8pRZt28Nvq7sPRM848E3vDwMGp2cC4ZrZxE4CeiNhSaJu8xpkzEMkXX5hZD",
  "key6": "nNzcoZsyQeBhK3aFQ2Fs2FeoxFpZv4XaQGk9CbGMxDDu59pfBBCH6G9dX3atLxy2eM2Uy6SJkYPQ6AkmMqKcteH",
  "key7": "VFsJBVPogpEhroU1rcBcSQwPv4n2CCMCKuzudrUd3pFxx2AdEbnNbTWH2h9YMkdGxeJGSq85pi8NfSKHfuRbkuo",
  "key8": "4ZGGwRXNZtvH2mk41VYjKU5oLvkhAuVQayt6NdssGEvPmDxfZt4zcWHyvXsg794iX5LBT2kxZpYZwutGsWMC1ope",
  "key9": "ak8iiTHHxduzFzHmjc1Cq3FfCbEDc3Jqza48wing1RphNmCtaJLNQ6TDfMwidz1jGoms8bbSiypQL7E8zaAMYPD",
  "key10": "2fcczNDHCVxTQasapBGV1BPdtmcfYiptTHsNSFWhgnTp8inVpUm31DSxE3PJqoVQnQgCzb2ERTZwXkJ4nio9gEQv",
  "key11": "3k3HRKrEaTkEeZbEA3YypWXnCx2m4BJfT341cnfTpgZdJMnYjX3DNR6c5YYa2f3HephXoHorSjLvB4rHLuhvhwBt",
  "key12": "Ay8Gaor5qqYvMT34pj2w5VN7qU2qAfDXJELwTDyb5ZQnYp7SBvQbdVUAnzTod28eeiSKqkfSztm8s9JtAtrccjD",
  "key13": "4Gdu5wKSav14vwLyzdvU8eHGyRdAyP4iqfxz6H43HBPKWbG87mJYWJTR5FJsKyQjky1NKbheCTUiLzNM76jPve1H",
  "key14": "5ce7JtoHpR24byeKx7oU57zKP2xo8qCCjYkpuE9M58426dbHXNPG2ZDwjCUcy9tTSnX75MCrWyfTUnW3MYSKo5GK",
  "key15": "uWQwmXQkir2EuwdQ3tFpicuS9cLvC3orKpGSjcovv13yNNtiUijGfKhvz1fB9RrE2huqM5fArFXFRbAq5H3Js9K",
  "key16": "V5PkuriEVoZ6pmSXgZToKkjtgqNeAgsEn5fvFxaU5bbdeKkgurBmHDb7KjSMSp1uLcy8h7x3UEfUFotqWQ36eS2",
  "key17": "3pfyfvdXzb61v4szgpiCN4Wj2xGJQUYHciCgGAmwpheYSVWY3Ku5sk5xQGSuWgjPK6L54v97q9XRZDn1xREo4fo3",
  "key18": "3WywbVctk9koBBXsoFEYhBEe7fg3NpMUnfUnCgC61oqyzmfd3tWb8X8BW74CoLv5uVq4s8hYPJ8AXf3LouHe6jVg",
  "key19": "4t9E47a6eUZHPwiUt5vUeRgMreCcLpA1zgXQ46vNLyz7YgUFybKuwMj18m2Tqkdv5uaiudP7oztce4wnA1T2fqcR",
  "key20": "3AMixiXGUyj2asmv2P6L174NRjE75DR6K9TkQWe55CPbaHabM2Trt4ZWficEXB87WTeZVQ7mP6UPmaiaVWLAofrF",
  "key21": "3L1ASbidNR2NpK6XWH9wjdVU45VKf4HCNjw8iZSpKKHwMa85wt9yNs95Gsmz8WY1dhpGWGPtywEsB1YNjiFRxeLz",
  "key22": "4uuhqVqKjRm6xyapcPsDgptDMEcpTDrD7sxdLzNx7DobBZQ6yh92RLnW7EDvx7qQ1zM4AKVmCpSLGNTmzZ6EcU3k",
  "key23": "495F5YVNvwfkLrCMUN5fGwYFVNsyTFY6c9jCPRvNpjXMd6EmnLMwpFVqF1UA1vRsDgPZuysQimThbgMitbTfrGP8",
  "key24": "Js4CyAeuvBepi1XqQVRQ4f4BAbf1sGjdZMSW9pjXw2BG4brvLGXvziy1b8FmAkXcKJ2nV5dCRL2uLF7KbTBB2WK",
  "key25": "4HTx28D5dnyFTuB3fTPJZi2GKkQE7Ukfgp2nuyt89piwK6rhnuA8Boh6FUzdCLk4pwgpkYZbzUcrKaUsgCtp1HeX",
  "key26": "5FFPMYD68HbbVFhrr8oTiBnLb1Jhw8ofgxjPtGoxRkTw1UBxCT4YrmzK6SCMiy2G9Kwj36mUU1xPs5hxQEjjphAk",
  "key27": "59zFhjdDC5ygXXW16gZyHfJbcW3RirmVsRGcz3gTL42c7mbtw9v9RCgxiQDgHutuBVAF75R6svoDQcT5mCRKxaJe",
  "key28": "652b9uGgkAt1qsqRQSFxmackjhvMr5pdd4NNeVMkV2kKK6QmEWz4vm9u4JHe5acgsvNnaPwBQa2ahYRAaxFKhRXk",
  "key29": "5TdUZeohppEbrjm2xRbGqZ9X1TKWwNBLukmZbMacVvz8kaYwyovodicDZpqtn2DvWUNYqKaWivJDSrNv9RqrF8iQ",
  "key30": "wSZuhUM6KTLLbtHdZtKfHV8PpXGUNWeMHFVC7Bj3Pvu2GLMyqTsjTXqcfsGTqQDhkUe2Euz8CbbYuuHWwTmZkEE",
  "key31": "2HSbn7e8VuHDQEgxx9BnaxefJCLLNjg4HTsNnJbTohnCiXNsHL8bedVv7uCAf7WpkrjxUucyV1mzL4JLr7GY5XMQ",
  "key32": "4ma1tWVdfxtv8xx5ni5HqxJSCvf3jVWUiAaQPAY7Akfu7sD5vHv1HUGYzTFnR1kUP8MF1dNX1hCdmNs2QFYnT9Pj",
  "key33": "5C5SXHX7Az8TxoGFRs7C2LAnwtxx41qPvW91d9j1s7M8HYMv7pbmt15L2nu1VhFk35UQhEFjzSYf35chsp1dMFiG",
  "key34": "3YcDkHrTVEhxsLhuRSA7SH4xrYQZEn8K9HvW1YWK1gTJTUfbjhSJgRJZDV3rX6ycg2dVtp3W9MbSq3jE2e39GCc4",
  "key35": "2c3YMRqEHQnqUirzJ7aXYBrFSbREAG3KrkcA9rJPBdXuT64XBBgNdpgeTGt8RxkZgjbbyjVNF5rAGhvCoJPDkNfv",
  "key36": "C19iqc4vhzMoWVZxMpijxEzQ37Zr89xKBZYJkh1tNS5ibjm5yyYMg3oWE2b8BKUDhPEn3noFrdxnvQmcDMFnpDc",
  "key37": "3naEczHDc164Jr1uWZcYy6jhbDHkk74YrEs4WW2bJFvcBVUPBe5Wc3WKUMFL2N5SJC9qLVtc8P5JTYLMaHkk4Z7P",
  "key38": "5JaipPLZNzhc3oHGbqrMQxUcJhKmpAYe5w73r7rificZYhK13MLJXQFy1sD4vMzFX1hNgR8gmLDtQAqyFZ8qqfsK",
  "key39": "3rNFJgEsdMLpMmbzoM2bFZaAyGpcs4pgvogzCQJNXrPPMwCyviQ5X1rmQ7bgByxEdzPw6B2Wm4iNUMj3CQpY8GEa",
  "key40": "27Ut354wVjFFJKTeX4x18G24MKuoX2DqdGqgGPb9JMVJp8nBBX3YWBoBAm6BTav53EHcpJHNA1Ntcyvuh2d54a94",
  "key41": "3jEaQUuaDZkxfxzjhoWLTXGtMFkZRmmZhAUgJEaod4erQjs21zwqmYZjR9qSMiCdqx54JufpsiCbBLkgmMakNM6R",
  "key42": "3kJDr8eZGRGXmavZfjPRwnn9CFk9LHfHkATRooCaTBJKnEEhxRj7D879aXHL1xn2VVWTBgkCJ5oMZPbAZ2kxdtNL",
  "key43": "4Dbq6z89VeYfVzndNcFFeuP7EFpM1bkkFU2RAzSV9VvY3zSQ8vgfGKA7UGgYcsuTFm1LG6R3m4jcmaQbFF5pDGGh",
  "key44": "5hatxWxcD1Ma5BYez4XnVRfq3nWaMRwDuvR5w5PAu8Bz7aMyCF5em19sUiWZjeR59gCHwoc7J2b3MYk2SNjTNbrC",
  "key45": "2vgcTtCsv6bN7zQN7ig36vhAVx23dNRgYYKB6ZKkJxwWUGwipqFcaTZDBcZ1fEeedAQRAsFgXYdax3qRqd58qShw",
  "key46": "3UXjsNgNmLzGrNKQYb24cLhpAqdKBoK8HV424jyZPMMzp9Tn95hF8W8buPfqn8vpnh8DVv9zbZtNw6GyK5XH9Z92",
  "key47": "2rxZmhuCxnT6fuqbz9fUnPgkQvuDadJJRW2jJkgXAJ6Q4bVJExH6JcmL9ANeyVraWpM7LJ9pt86KNRX6LVFgbokJ"
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
