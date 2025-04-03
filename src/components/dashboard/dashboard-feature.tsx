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
    "31dpP4LiyGFgE58e2QRbAdxyuBijTHWHBD5ZJan3LEkFujhPQtFQQySxehGCbgdSVfe8N4rqMjMDckCyZPLhYiUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LHzp9gbzzyFdiQPgWikpvqSb3rJbDLokwDuaubeCJH6uzW9W3PFiJ1pJUoWExzQzctdQzAVbwYGzUN2T5ghQFKy",
  "key1": "2v12pt2pFDz7tKJqTeTZcTFDdDB2zMPjrV4ry67E1Mz5Em7BdZFJz4aCP1ab8KyVEhRxfKfSCsoHQNnGXbmCmL1s",
  "key2": "4du2rWUZsCWA7VSzY3z28KBzWAohn9Z8pMPRWrAxgc37QpFRMQQx5s8DQNBzPVKdhEdzC6wpuBD49MPZMPTrykwA",
  "key3": "3xFG1FtkxELjWHGmUE8KhBdqqHDhMys6YiXySUgDYdRcKnHkwUSMW8UPkyv98s4VFc1LmVSSojScfBvg5YLsPfMQ",
  "key4": "4rg3JxoLxYU1hcHjVcDaVptUQrjsMRYDayN4bz1rkL3iD6anU3XFrrs8CEh18azQCeTpkqqm4kQR6YMZyMsBXYX9",
  "key5": "4asVnx7AYWKoQce9G3bmuFsdNkSTd6Bp9dZkkn1SsqMyn2G59FwWXYJskoPs8YfeGmS84WaR9a2bAGToboLXwt8T",
  "key6": "2EkJgNdJsYH6pXCr97krxVTMJ8g2AyVFL5ho5H3cU2vNLD4DBDtf7zGcCrx4o9v9mzn4uESXJDAkeEaCoUmNRc25",
  "key7": "4YwQtG1yPR7Bx1UbZ7miDTS8rWQswTHhgrsmdxpBnmZhp1X8BYpToFQH8YSdHmDtr9UB2ikhmR464vkdqftA4JdY",
  "key8": "4474bBR3wWN5iuMeCQGnPtjZkNNVffCq1CTCcXBkhQokgdZR1BPZneXJxJW3xY7NPUXevqHb9aRT8gwYWUSAbHQu",
  "key9": "4ED12889ZQiZ9QyyvsZR9eBg5pU4vzWyBz6BY7aAbFMh7i7is6dkbAtsfYsaiJ1w3APzaPPHaGoKHr6SEsUSQF2d",
  "key10": "39gyec95KoAYqBAJgVocS5UxYobVizsrJhAkvJj2RgdNyyNZaRzfpdXVGeFx7ziN2wuuXc3Y87nygDQAQpVwu78S",
  "key11": "4REdzdFPNarGTofB6voJ1wCeL512brXytdABHM82VLkin4JdV6xWHJ9dX5665U2LMQTxu1GWnakgNqHCAfmEBbMG",
  "key12": "3mP8Xigk1Cqv2b9HXDw9TGMDWWFoGByNtNsx9VeLx8UmGXX7VBMgGSkDpZU8o8f14uA3BD6tJ5QahDdnv52dAAeL",
  "key13": "3QgbzLtosibCjBmBr66g9gWeAvJ6mYFsncbiXCQSiVRTzzCSz712fMD4eZzYEW5Aa2XznHsStrcTN6z5cZGGEGwK",
  "key14": "2jf81NDixbWh9xyukHHMdgMMPZ77vAQRKAQgiM4Mn9hkxg1N2Uv4nX2CKYDkA3topUghqhkDsJjMHwksY9uvRfbM",
  "key15": "2jRGbkMwz8TK7nBW653LyPFuBHAmy8K16H5RzuL1PG9WFCmLP5poDozADXsbVkVyu88qcpB6zT1e8YWzNw8DBpwy",
  "key16": "52h2H4Rgw18z9RAjq5s9sSPeoJ6kU9h9HfH8GndLc3CqYNYceQPBP7v8sHQnifojTEE8G7mqgPMLCkGBcXARVTWc",
  "key17": "5zxhTfekUL51Sw2yUriMRvgmREK2bbU1k8bEPGyg8wmQaAdJ7wNGzcdZL33tRE17CgM6JoWqM1xRa9XWuxLVbMhc",
  "key18": "2hEEC4QtWWDDsi69EdFVEGYTMXQdub7QJBG7c6ToGVCAuBbjYKusxyDNgU8emFNoWCY87Qb6yf63n6W2fXH4oC5N",
  "key19": "4GyWFnWcLPCWKKxgcMmTvWwuV7PFYtHb2ASRVG7BomtVVteyWLjwfwZwEPbh95wTcegDYu1TK2EZnsWFYjodeeF",
  "key20": "2tnyNZAQd5Nnub2ABD2YKGduvdcVmpzGnyw5MZJ2AfQJApHRAFRa9Z7SENCBT14EgaxkDC2Z2GiZid3KkUuesDyN",
  "key21": "3wwBGQMKcB52sLzDg3MQByuewALh8QoiHQCu5oEXGYy2p7bqzuF9Ew7MrzDHxCprAtf1hZY8jLnohDGuYSFtWzn3",
  "key22": "5jYWpLebtoNgwcpZUYW6bcuUKoWSJNE1F5YKu3uGvnLsCERs7xFw6KZt54XfyECHiXK1CGkiMhVNj4mtkLFwyGAP",
  "key23": "CjibGVTSPsNhwd3cqQDh1q2LyEqRySG68aGtG9ep6Tg2ZBas7yd66twV7JnizZWmNpceoMjRiiwZ3C7TVwdeius",
  "key24": "4Qs4Vj3NTYAwvickcg15yMPYsYGYzSfKPTi5zrn1opEerpjs2k8osa7XnBqCzaMyrssQ2hkXrV3ZBubrfGHT8yma"
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
