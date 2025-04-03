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
    "3TdA9N6XX8L51jkAwmnMfai23d3eEE82t1oNT3nLt5srMGZJboYb2SKpBEw7UAjjrTwh5M4giUfRP8TXUTuXZYFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pq13Q3fcrSaAN3ZkWnrxUXqxBdfqK1y3L2HhEdFeUUgv9rmiK7ezscZuGhtB5yyLkve1PhvAFCsdfS6Lo5mCrCU",
  "key1": "59F1teh7965puwn4NbRLd2XYgGWncZcMYshVFh3pQ5wmNQ6AexympiH4Bi1JiW6RLHsT7FoVSXTYHP6C4cQf3fqG",
  "key2": "3MVyQTr26q1dBN9siLR3w46wQDdgZ8rNGax6HsZ3pT1i84sm9XfMjx52E9oPnDXZe92FtKDv8gsK9vrVwxdsAShz",
  "key3": "AAkdMr1cv3HQX2qSzaHa8mrGwciKkAeT9LJK4Xx4WFG19QjvqhSAYjvFvCmgBFNGhVo5hJtc4ALv9dhQdv8K1dR",
  "key4": "2SbjGeFy9XBE22hpY1u9Y8FnhGy2oqtfbq4ygTAML7Yh5BGWJjChB1hVidgk5eQCtcHsP9cZDomRd7RSerNtrELN",
  "key5": "2xzhu95YdtRM8fTqkf1WFPm6goSo3md87ACNAMTcMtGyFodmx6E2BCd35CV8V3t17CqUP3q87qUaA7Y5GiNF8B1v",
  "key6": "5RBGESbPKvk9Pjr5QeM16wX5WgvyNbNtw7T9ZSndXG9Rf5BDVWywRd877wstpFjsHK33oQHk5vXzhYxnLcqcrT4W",
  "key7": "45qykicVfNRuGLhUReWa5qy7JuuxaneQw5jfYJuY4gqNoLZJ8ckEdnUikiDuyzV4kWXbUJyydWNTraiFgj64rVvD",
  "key8": "44A7oMYaewAkaZ6BZzBGmpVLBGjHTRgw5gBhhP3JxGicw3hD4qh5s5mrxdZA2A82PwES7h5zHL3CJbJs2mRqBW6P",
  "key9": "39cXhgnVpP4NTDmwNWQEGprwLj94tPoSzR4aKMVHXpA5ujT4rZDneE2gp4KX365Rv2ogrrZDX9dAcXCJvuezWnz9",
  "key10": "Ek6mqjE3KpJmShporihjTgHLQWry7GpADH2ait2DNDHcKVszfX4prtTXub9VZR94z5hquyVVrMr5QrzP2HFNrpj",
  "key11": "4H37MktgctRPaWd8LPqGhu9hZsTYpuNwxKeD1VuFWs66a55envCi5P8zrWd52NYwyUYRHjSuethyr7t1bQmWgt2M",
  "key12": "4cWA6SaM61138agBmj7oqPDMenqF6rbNiaWD6oEcXo3nsJPoY9dpgWB2mCQx6NrXx9KLorGPfqyTBw4iPBpF2SzT",
  "key13": "5R6ZSotegPZ3kYCnE1ezEUizYH5PANer548sgoU6Sh5kxKxCEkKeaZ1rUJd2iJruURsLrPzjStneCuePBk5jFtEH",
  "key14": "3a9rh1DxDKDqn1e44rjgLpiypUD13g3as8JqTiMgXTbBwQdXjVnQCnf72QdqZ7XxpabMu26Gr7EwnDVB7jxmhnxC",
  "key15": "268mgpimM4DBkLVhTyvWe1HjiZ165FqsxCzLXwLAwLeppoFtb6FBMRMPCqDAzQ4oTAkEPCsDPUKMJYgebJrHJ2qj",
  "key16": "J824gRT9XmZK7GQbaaM15Ew2KJkj5k3auPJMCuSDe1XddxEhaqJmW2p895CwSCkUPpjDbW1VGQgYwymtQEaNFZ1",
  "key17": "3CbQTw2Ebr7xiFuL2VjTFja11sZcyzVfEJVd3XVXqPKbiX36TWAswz1Lq2ze1FXkiqPCrsuzuhk9gwMS3gkB7w1q",
  "key18": "35eCcXnbzL3WfEsDe1iH2QEDVYuqzmMsKBabcLjCKbrwTYmHXKnTBL3kqrwCq78A1A5wQdzieezNAByXbFq5ggqk",
  "key19": "3zwyLfW9hR1iPo9cd928TA2WdLhrcMWpaaX7B4Tkw62T8RPLEZ1mWRJD96vv7PVteE2yzfA8rxGAZBmk69S11RQp",
  "key20": "2HnhjsVf9t97EpMdAHQJB8qtAdGHeo9qr4prGJXDEh8esGJXDRgnCBSBbbFsSSy8kasiWj8PPJihBPhHaZbVJseq",
  "key21": "zFwvDj7GXnQ8SceuE4SaueGzgPw1R79geR6iFpKNCb6kBS7Cfutb29WyUDt2G2HgVFEUKLeQjvjRFnRktAPqo4E",
  "key22": "2BC6xa4nzGpJ6mRSLA8pdpdMPtbnGW8QVDgzB16gYWaiWr5YhaGr2etWU3FrtByUoMNMuy9esiDZH7E41NroLBpE",
  "key23": "5eq9QiCRBZzZwwmTHuZwTr5cnm5CTbw2E1qt8qwXPPcuS11Bq4UrbVxoarp8sBtrmsqiD9eazXGtiYU8KniCS6tN",
  "key24": "5PxDhDKrZAyJoDJKCN8sUMoWUUhB4xiXetSeXSnzzrqxR5UNcVJTAKqTUj9X4DT7R7KnznkhDizgM5Y9Ms4RUxx5",
  "key25": "4JvBgPaKcqBCwT14b244aJMGNE2DDiJcp8y5Ax4BaLnxst9ZxfY2SVKuG8KxKtzkapbC9iMwDAjsK66Nfw8HwFK5",
  "key26": "56rbP2XEgKR2unjmT45U75muhqCU7oriiBWN8ixFE9wGeNedwkbAFkVqMTdFh3Q7yrcQsXYSduVqf5yFjUvAi1No",
  "key27": "QseTBixdkdN4RwRyANVvLfQivUMQLng4KDfNJ3YZ2KK7QiPyvZpNgQJtqe6qWQCKSFy3boUS7eDw7xrSmdwcuop",
  "key28": "63bWFhTD1GknkvVvfecA2x2Hm3yjtF9JW2hoYAjLeXCXawoBbULEqbtSYBRmJDNC1FwCMdQhDDzo5dCgKyuLTBuT",
  "key29": "5Agv4Jv4ojoAYJJNKC1MGpFETHYGnLyjixpqusy1dynSegFMvtYDC1BL21SjamnmQV1bzMhSjUWw99o2u96ZfvyS",
  "key30": "65h6kBLGbi1zrihqKsMLbjtsAiQPRpVrU67vgc6SFfNQknZ7MChbVEn8w9YxLTUL48Ct823DKazr5yAktJhGgRkA",
  "key31": "2N8uZD54DAJstHxSQt3pQL9kFSwbbXRuUQPzZsqVMd7Cigcc1AqsAHyrGoZoZfFAoSZVoFsvVZAiskBczLyjEbfF",
  "key32": "4k7QLXEYH4JQ8yZnsrgKSQC65WsyHsiMyf83PSBvrExGTECo7rcuU7dCCFK9BnbMSM6QZ71nsCSH2VBpAdE9Xyug",
  "key33": "5dVzooHvRDiWE7HWuJXm4Qkpt1dqHGkNo5aVii1XBZ6mU4BNF41Qt2u5pfY6uTJZc1PkpZwGvD8Bv4WCkjko4ZcV",
  "key34": "2QfPN88VSeZ2NzQp49dUiMCmyNgEkL9oCd3c2s78okwxbn59CvdgSMJoLMQaRzCWxCV1XPuor2Ve3RxR5ryDokQ5",
  "key35": "4AMo7cWnBKUKGguvjjnu1N9rP3gRRDHYTVMe9JGLMPQgr1kMkNv6pjr9Fi2d9ismFKVGAcVjR4JXGbjRUifKSZ7j",
  "key36": "4AKCXZhc8A3p8w5BsdevJtNEhf8smg9ysn6MQy4kN9WSo5H1gHbAfqM4uRyjDP1Dqze9pboiwwcjsLKQ6hmUZmAB",
  "key37": "4eDyhWkHPwrK9QTg4KkgQdun7swjkeJZ8jMv7dUjgCbSHpT7gKWucStNuL42NHNmraYz9CxtZhkkeAuwq3sAYgtk"
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
