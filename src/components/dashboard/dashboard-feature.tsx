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
    "467EjUvkEs7f5awssLXUuv3ych6Gg2TiTQ5r3sKi3TK1sZEi4k6chUVm6uqAEy4vjVyrywW6dbgnUFkFpAbBTdXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a18GEGyjcNt6vdK3F4nQSdAb8sYAdePJJJRBitpmxxxFsn1NwY7jBPt62d6gvwPPeB3cuuejV9EBFxivoAs2UaJ",
  "key1": "2X3hQzddVotkqQryZzejBRBGdsYB3aJFiyFrSCmazbYeFp5eWs5v1AcpdB5JBVnpWAM1aHYSn5wEpSqhW3877tKA",
  "key2": "eFPmbujWMDoaV42Do2qmGyJQ9fe5xwLgEHUa3G9KY83xjxKxWfpyvwxMGp6M6AMHXm5eYYbjCLQDFK9mZN5ckjC",
  "key3": "2NRiw2WnmTufzsFCuXdpPvn8v9yyvfz6KwkYAZaRuDTUWk7WvT2FakonriCtXGXP1Ug6fGBbWX32nhHaNX34DLLG",
  "key4": "3yeiS65oxMyDLbdgaNV97kY6G3nk2c3NC8WBrCXns9jEWPB1BRuePDcA7wSXndUXuvYnKovqb94MJLAgpW91yAkc",
  "key5": "2HAyJ5SaQ9x1DiJAAXGwB27KRRBkiUtdtQTXLwdumL6Eh5eD3XRrTm8fzjEVpAovcSaZ7tovZk6ky18SJoXgJG1L",
  "key6": "2b9xEFNHmYpuLGXkVEm2KaTM3LtBukBapjaFb3zAoyahQiySp7VsHwCNVPEa5APPkZm8MUP2pxgUK1zdbcNrfyHN",
  "key7": "5XbomDqFHoxTEHyjjRyvwcTdwiJrYwoHBX6S5JjCjbpzmJrhuA9iJ6wfY6eqSLZQvpuUpJANVYWb5Nja3J4eunsb",
  "key8": "gJ3Jekmr2q649jkmtaaEEvbEVpEKiS3WoP9xXWMEhVbPmxebwBHtNKtvtmNgS2sz8QdDT3BKhqQ7xMGQueanwKb",
  "key9": "gET3AhzBozdGcfC2oW3RYh12mFFu87ami5AmK3wiyxqbaMdh4UXWoJKMjoBsttgACdHtBGnv4Fa3KBJ997qiTxC",
  "key10": "2MhG4hkPSNXW64cFveWDbGFh45jshxRFUCDDmf6JtRuHzPeVEWqxGZNB7hSuT7fLARS2XV7KvKbjAAfzJoAANSoG",
  "key11": "65jSodvD6BceWe2T1VunYdcJPjmpk3Ca7sQx9w8My7u6qnSqVgHMXYDzK4KfBZ6MK8WjeG19cAMg4L9hq1sVg8hq",
  "key12": "3xpQAJUWdhzwo7uo4bU8TTeE5yCKviJGce8f64gEDd1vPTmJNLAjcpU5Vo7eBkwrHv1feqDpgzs37RnXTgno5PJq",
  "key13": "43yv5Zj8SrSySjDNSTJ9zHstteTuX9Jr9Chv7jDcKXWuEbvTXUUVdVdeL7MQQbUnsAq9HAi6MhHaS3aHhQAcukVi",
  "key14": "54tCndafSY39V2LaSQMWe41t2VpyshrDNkWQJgzqvc4s83A8SWSfaegbz8vGC6mkey2kBbbEYMDjZ5QHSnpzZDcp",
  "key15": "5bu5qwUFuuXKn4spGPAiaqQdnKtdcCFaG7YStuM1th8NdfjKjbw5Hrd2zM3Tp6a2tH5izMRRAnyr4sZGZHjQypKE",
  "key16": "m5Qz5kqpHzqtjZeu62HacGHbrHo1UPg2jz2xqaZgABGwsDDE43WiiQiaHEsFVfQn8JA8wwTSJN9H5Jc8vbQqQJ4",
  "key17": "2Sew3w75CUrXMMopFh2UehfoJs7HjxJkPbiR6sQ1Ca1zKLydAckzvnetVTWicKomrAcADoQUoHpwxo6r8keh1yNo",
  "key18": "4QnAjbpgV6wB9KAM6E5n6Vd8TjASzywME2FkcLJsm9d2aeP7rJsV8H58QowGFc6TY6VNgnZS4wn5uJGTN9YUDuPo",
  "key19": "4uxX7Qg1H1CWP67mtDuC1EbVfkxgtVcv3kNyFXYkyk82ugjPS8iKVg5zyMSy6Yv4AKep2xRNZR6EqNccuTY2yxnw",
  "key20": "yUm33DJpPG8dudh18wrpTSXTv2NVzcsnanWVmKLM8M4o9f2QaXj36XLxv3yUYcncNponshSyjBsmvVgch5rJQtV",
  "key21": "2dhStytbCNLe5nPT8yc7fJ8xSxmNMEeZeGd5phtwtXorUqXjEaLviimP8TAgP19Kw6EGBBER8dD1QoVkQ2aFzXco",
  "key22": "2BrfkvuujCGkZVQNsNJY4Na4e9PL1ayKPkhBRC7eaHsnwnaNU7rrAgFtYJ6f6aS3mqf1U5pk5FF7rQfPMFedggzQ",
  "key23": "3JoMtReEZhqk9U9Zzo4VCjxWjQvLRLiL1FaV3aA9FnLwtGDuvZGmdrQyojqfBsbUbbhAEqQnWJB5xxrxfdBp2xRq",
  "key24": "5FRjzu786HWA55c3AwnZEAGiCqzfGzMtWchaURroCU4Jk4eKWyVv1LbR5cZXYPfTaP99GbtVvMcTK52E2VZ41T81"
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
