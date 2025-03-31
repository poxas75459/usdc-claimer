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
    "CggomP265k134QccGxXZFCcmDdtDVNb8U59k43fTfSWFpWjSm8KGPStvDNvTEmjooSFio52KJTmVpF3aZQGL16k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gqwS8Mw4ztARpCLe63KqxqB8eKV2mS65HkjMXpaJbREiQSgGj9keGSXAER4SjcTp4eTQnCWXQ7LiZqMdb7nrzWz",
  "key1": "3JMcbPbSQQPhoEkteYNk3GXoFF4znKuHUh6nXHae6byngK9TYPivBNNxNVWWgCJXRLPqzJH44mvG577qL44Y1H51",
  "key2": "5dHnTQTQhQ9h7UfFLNjbia8SMALWCe16WHK9GkbQQeyQ6FLPWRcwkuJ1e2XvqMqir7dGXywGmPbU6MGDsfNpPt9B",
  "key3": "2oQEPYYMyaFTDLtfxnZqbVwPymTtYnU3QPA5f1a5oRxBUS93RQHbeDU99ioF8pcpqoh1Qu9g2dofyUMBdeGFkVSY",
  "key4": "4Q1jarN815ZoDSnLoSNFVPyFvHUHR8BK8krB9r1k3osVEDhzJN58YxpSRUeLtzQiL7165hARCPxDoajnJKSc5FQ1",
  "key5": "3e5Hmn26MbuLG86Pe1ZKefpzVQeCWaDnRE7x127NQAhXLCrRdJmMWVnf5k3VwSFriYkwuQvU7hBPKWgL3Xy4FU7t",
  "key6": "hoj67uz6jG9CZRXGAWPaJFRrYt2k8JfNCZewL4waW9rHoEZJXqiTo5uc1gHMdE6wm2moZNLW1w3hDoS9PdXA8W2",
  "key7": "5s9cY2shXC6Uv51Xt9o9ipvcxRM4GzSNgNC7JDuP99Rf64kvuDLh8fAboFBiUcFe2iPHVhASbRX8bXoFQAxDJpEk",
  "key8": "UGiizCbkRh2p5v7uZKdupTohCbtyWtPtsge2DMKDiyKWMzvfX5jJ7fZ9cSMfB198KXgnUavRtefYgbFZFKbRjQn",
  "key9": "31xofzQvHUDrCPXyr9x8ZGmPfV6avegjrUuwFh4M8E6XmfEekMrp5Tbpaww2onMjsVtx7cRx5ZYggG19W9cg9qJ3",
  "key10": "33iHh3fCZiEYuYSBa4KNLZzr54FiEKs8mc2iDY1DphF13Nk17ScowfaY1mj5EB6pKEDVa1GPELXqA81o48Ado4uq",
  "key11": "3SoZ7mzdwukrVU9B3Uq5Uo3QaBC3DWTy7o3odLEwaXg75jXZmdcfCckWqnLryrgH5hJ8SFHoWWifyF5NBjMTFAGh",
  "key12": "47BLQoYLBYPYNYKKxRjtzpXgTSb7HhNgtJruwG1M1LqoEFa1LG1B2X5aRrn7uHAiTHuF9nxtfUmtq5AKL7SLQjAj",
  "key13": "LwoBCFNVxuqca2vhaCe9mFKU7F9spH47iEQM241xxqMV9eUjTWJkeAM4S1SyuRwNsq1J32dsB6KRJwAUwdmqaSN",
  "key14": "2Z3Lx2FXnVDoALdhCc1kpArAB5ek57BoLAhpTHWxwXwVZG4wLkjPUesQtSSNgLa1zjenhv6q1ZV7N6RdtoY3b2fk",
  "key15": "5CyD83pru8krsWPyaEtdzW5aA3Wip5fjnrpTxVkoDSn9pwrFHM6h1kApNMxn81dWduwVcTosypgd5F9c3nfrjFjc",
  "key16": "4gpXgpQFdXBCHVab13LEWe4h9kSS7nhtqPUGhM4H1Zps3TSUoBL2fjvXCQAp2BEQgxVuWmtpJsyugFtGZyeXdC85",
  "key17": "3PHoDQXALyMZJosdnQZDMS3n4KhmQTL2nkj6L5QzaPtxXaoEDvACJvEUgeG73egKtZJph7Ye8A3c9Qn8fcMCteca",
  "key18": "5q2aDsVFG2YHHUqtxQbvkeYDs9ouxJkPszXnyUd39KGCQ8KxcAWmWsx2FQDdoBeTyzJ2xNpvGNAdXnBtuBu7rRPf",
  "key19": "LqftAY2SRyp5jzjbVcN3WETCow3ySSbTgVexRaM4DB38BfGJARgr3ndDNzwaeNwCmC1zLR4Qhzm4vakSbfNw17K",
  "key20": "2Hwg1iHHYmjQR8ygBc3b9MAqt7QbHbLDnCPv6xVxg8n98sKtoRH9kwcRSpRbt1NtJoJuLthqBzrY2VEnbM8h7XZA",
  "key21": "63ZcD46dsCBTnjunb62N23Nr291Wo6WwvjW2zND6rscGtnV1tMbaRYXZUUG6f8qci9yFiEhGV3hncZqAPknjR4HC",
  "key22": "5JpjP6ak1h7G1ssnJjkbp9ujPaPp5dr1prtgoPAFdzzajESRW2vwBszPvXsDUyr5sEn3YbH2qcZ2gcS5yCg7tJNE",
  "key23": "2FVXHoVWa1WiJjgF1EyTJLRvGGmQjL4Czc3nz88BxhdBgiRQBqBXL6x7iK6aVuiTAUnPDjkcrza8dWLUc5FAT6qL",
  "key24": "2o244NMWxAv1qpB1WhMfEacTudEWXBrT1kLDFs3yZ98VpfuAHJ19uBHdTi9pVT3xiW6Qu5AFBB6GbJoHczSpqend",
  "key25": "43zrvNdg7PtJ1mP3Bf2L44yaAK1dUTFLvZP9cqFwMGeq9Km9guALbXwFrMNwksv4EVei4QWN3MoJS2e6wJouD8gS",
  "key26": "5U9rs5a2vP3qYEzRRKoZjkuibS8ZjL8QToKa8nk5L9uVA1DbjEMEqwBwCsdkEbLN4aj7fKzckdqthKLWJSPCdxfh",
  "key27": "2nyB4bMVs5yrcLvFC9M4onvo44YiWQnNizjndfjBGYBWXrFzBGXioFd2TkupAv5AjdSLFaSAtBJkAQ8k1Rqr1zdv",
  "key28": "46ycx7PwfcU9YjdTkq2UAjnPmoRc1QWe5cYA8uRErPtZpvNu3LV2pdLxhTuyHaLSwsGAmQ1xA1CgpvEfiAQMQkbE",
  "key29": "hJNNAfue3jr5685NjwfKoZvHTUJVrHkgJ75BVHcCZr1GMneQV5rJGtaHAEGrvgrQkLBE3yP1P8qYcK4M61TGMKA",
  "key30": "436yQSoyZWQEsEFeUHVLG3k6KAoDtKCzCQgTzP3Sso4PkdDwPWCmjXAew3i4BRxw34pPcYW36aaGVmTP8Y4skpPP",
  "key31": "4g7m7LfKeUwr5rQwQdRwSWr6ZzvLJ2bvpgGD5dJ7XHM9r7hSDLaBQMnifAQq373jMqDdDaWkve5QGLGB1r8vXPRx",
  "key32": "2f6JCpQj6kU2A8tTRm3bwwpdpEkgjZLVpYqjAW1QAyXbf9g5nRyh2NZXkkP12hpqMJjvW83gTAokx1FjoHUv9Hwb",
  "key33": "3oeV3SuiCn2ZNp9HHfSBTDNYnbVm6i1F8PsHtDBkpnSvVe4eboYr6fLuTj9YCFY7453isSMBfNVqCxDQsK7zSjRA",
  "key34": "2zBxwnBHszWfYbdJsZs844Ld3NVp7Vu3QVfAF9F9NF2tHwWGCQWpFfbDCz6RijCq3cQVrbmcAMLabnhD4BqeBjYH",
  "key35": "5H7Piia1F4eUSuRn98AP3AyryK2gGSMefFU59FogrooSxUDHvPiKUeQ3sg61mZowougLsExtXLWTyMWNLDZohz2J",
  "key36": "2NSbFUNqHKEMTVZWqpgwFFsecziQWQwZ3H4AWLbUMseXfVVGbJpgti396HtXqWdp5WWa3mekdyrwr35jMqKDN2d2",
  "key37": "5oPxxsUyME2CSyAhbYiKKtCvXLLQUSrVooUW2fm1kYgyBvtnQXNrUae4GqoSBMZJ17djZBgqLLbeg3WF2Dp4KX9W",
  "key38": "4em3vYqobKFz7768UzT4JT76xCNrA8ZV3dKqfZSKXuh4RsScFRpknDsB73s4zS7DnKsZWoNEik2hYFmkpunYr5S6",
  "key39": "41hU9BtLNQtY9DyhtaDyAtimSTvFqzMRR6QH193n7855WX1tNzPogS4XbTMB5bJxVVnvQPhR4vpQDn5nWBvVHQN9",
  "key40": "8oexW1AuNsvvQUJQWJaiEg2LDSpF8vQD7ohJs2eRXzyLmtXmmSn9TcAnm7ezdVHV1ByFdPn7XWF471sFh8Yra5L",
  "key41": "2GJP641YUL3nB9fTqFPBd81AFuyC6WKUATmCXdpgezVAmLBhb2FnPAtWuJpVkPwcSU57CDiH7fVwJ1t4QiwPkkQk",
  "key42": "4qwuaJNHhuSTHYrJeAPgmWNkH7uepbmZfJy2M4hhkYET5kopgnwxipU1cYk5j1e9ZUBQEdaCz6ZHZC4h8K6pBYeb",
  "key43": "5NjjiRxt898DyXv1zNDmKoMoRip6ieLzpw6zdL4q5DCKohM1mFrzUAbX4eBtNidieWnL9JWny5Yo8KChdvEQx5pn",
  "key44": "ZpGYBdbHCUm3jnwo8yZ3HQoYBYHvwJea7Ps4KxbA6xVQXqhTUeD3eHSbFJTxg7Yo9azVsFWjFZCKLRQub2oea9o",
  "key45": "5e2Y9ig8gm8XcKWYoAu6jeZ75JAANvysnmEYGigxt3FUo3wxXigc1dtGdpSwdFzS63ktHZvQNjgyDJRn4HWEDFGF",
  "key46": "2YocYnhgujhPwaQjGdwNfJvQEFMkawZc46PpW8AEp98u4i6Qwm5mw9vfUcNq9HQk6BUtrL45YcED225azyn4ShWS",
  "key47": "3rCLCyg9a7KbAVATHq525nEFyNSCx86Ej9C9tUdzm3pSg5FQRcNoCPw5U8oVN6yJ56SzXtJ7iKtKrG1fpx6RJgMF",
  "key48": "3MziL6g4AdqzRRLBAtNDxsRKxkvXhXF7LcVA9jTQ9Lh6mXjjAm7oEhViKuc5SpFaYs5Ls3NX7tbAXcAPPvygZBx"
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
