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
    "dHg2v84xJr6LwpRb2obiZWpsQoS1sLnEGa3gKLTDh8w6kQy65yorbFdudBTAxaBjhyXjMYtecqhDUvgZYnS6osn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iPJjtANQrK9Bu1HwwoyivQKLwnYFvFwSQd3MNyvPLWdv8bmoLh9qYYEENJWuKtrfncskNT3DnUtm7Z1xUxb2HRz",
  "key1": "5XB2brfKp4JJhJGaxMP2x2R6u4XTkCxzXyhyLQr119vPK5vw93Ts9AJDLjEfKR41CPUav5UV1BsUua4UzmmzwNGA",
  "key2": "3F4UyaJeyBHsTQLb2seEizny72jQ8wiTEBCHy2StrGt51nwddjU7J832m5KfHCbqd6g7bjpadSXWPt2YeDMmYXRC",
  "key3": "Rumg5HGRdGU9CC987VZyrGsSyrkckhZP6qGtUXDHLhqxkT8XWREhtPjbZASvMf2N69ckLMhLMiLBePAmqzuXebb",
  "key4": "2iPGSAjuz1Tvh27CquDMhvLvKuaBE6xrMesMJJ2a4mvrKuEmZKNftxtMey9Fa1xAJjDY7fM8gogsDQDEzdcmPaKL",
  "key5": "39hz9uAbUnFSKQXE8xhnUoUZWmTvpbBzgd1SrguDKqbLLprVTepQQUi8RtWexGioknxirtFbKaRCLsQTd1EXGNe4",
  "key6": "2ConuQzKoW758Je2c4Kc79yyiMw9FtKiwcKwV59iKJWykRFvungazAK2655q7GKmo8JcYNsmLVNALJMonfigHXpp",
  "key7": "3VdXxPYEqFWDBJes3JDUviDeRctZGn3v86BKrvF7aTb1CJMqXce2VRfbweUP3Cb1ZtA4v95znoaSdx6hxJtx3rhZ",
  "key8": "45S1Yak3MwnPFcTjR5FGaPJUQcBYo49m88sjNtscs1S6fMNzexk71ZJoBv7EGgM3NekXUT1njoRquBPvR5ur7PrY",
  "key9": "4sWbQozMuSVYQ6XbtK4ZRmMfpfBemsdHKFf3PY8yghvUow6Y4A6TMkmvZU4XgH9qPNcnVb6v54dTX3zz7iLL7Ua1",
  "key10": "4pmfw5JZRvKe9WoXRw8uMrTMiK15g6FePQ7L94szSEKedh5q88UcpBCjBzwzeAXoRwpmXcTd5DGZn4n7EHnDgWBb",
  "key11": "2Asft6VSA3i4jXGgwkkqHiEoLQuJrDDtBJh9ga7cWtL2MkZS4cAL8QU5B2S7SSnmg7u7FqnqL1ozgGK4isP9PMp1",
  "key12": "2fsGzYWme3X5r9sgXni62X1mRmHA6mdSeCvZZ1CXDUuCdAMUUjatw1Qh8sLKt1pwroPrhd4DsRaamwwjetCeiQZH",
  "key13": "pKMvQfHz1ukBPegvtgjHmSZXxmabsCHmTMGT663RTNEkBufGHFqomSMKQKgZhJXZJFcPHgdpz7W5uJypteXSd5N",
  "key14": "31TRxHD5NA9RViBFFUHU7BPUu3HypeEgpKcY8EQhsG1kbmRwPkiioiLLYG9N8ZuByL8q3M81bJ7auLQtUaMXPrnw",
  "key15": "oXaaQsu7aKDgrZLXWjQbXdKWWJ8vdVavqR66okBhcxex5P6UG132mKu59LDGVqnNMGFBvXjUK2b5VvC331jFdvT",
  "key16": "63iC8cHBooD9xXHvM3T5cg9BUgoKAtx1ai8HzcdQuuUpGdYycrJ2YLY51McRC9JoUBxcZeu2p8TCGyWbgJDwgh14",
  "key17": "48TBkhpeB5sZSBnZNZzvFNdptnrpvGnC3WXXHqbBndFbVzcmeZstR695WgUGLxy6o2RYjF9QvCDvvPT4Zxe7muzv",
  "key18": "fKWAnxBTQ6qei9zEqk5ULs87yX8rQYtvr2AVuFQKHovRb6iy1btpLkGoft4pf2K3Zsp3omHCFnzxMJjGU5vDWLQ",
  "key19": "5GYbz9287QTDz7Q2cSH9xtVybkvBgiLWkSfVUvgnqxYXYZwyMjSbT95swWg3Xwu5p8nPnfp8SnbKFmya3UNu1DHX",
  "key20": "adFc6ztKF25oFsZD1Bg3p8USaPzkUdaZX5zxKDeehiaEFkNvSLEPYkFxvebjig8xrczrJk3jJWzawCkx4YRn8Af",
  "key21": "4FkR3gZ5D6L7ppL6EiQEAjppMr8TDEWZ9dTg1J5YiU3YifVYLN8xtfEjhDhpZGUeqPwgWWBDNpshVbuxxYo4gazT",
  "key22": "3k2keQRwWXZY34QbyMiP8iHWKiCd2hZWqFHsr75XTM1Ao4paipFKRGZwybd8bSTuksxzTZ37aoCyYr6sAbrEwQwY",
  "key23": "2N5KAzGMd8dmVAqsqxFX3U9kZHCrCWyp4nfH3JELDodGsFaP26FGArPDKZZxav7CmW614k5PPEP4fnnvNDtx5AJ5",
  "key24": "3QDDxEy5nux53cGkwEWtFFwjbGxEaZHKtXoDFGUiszHaCAjPGYWnHddHsvNqwEsnkRCHgnF1Lu8CPfDUdnKsc2PG"
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
