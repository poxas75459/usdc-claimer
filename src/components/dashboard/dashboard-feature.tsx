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
    "5Q4nmoLiaVnuqordakQnq5HyNwyvaKHwMSeH6ZgmqxwXZyMfDAxgvauWkn1ofwMMKUH4YZK79GwfCwqgcqMTprCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M7abuCyvgCQLpFqDBgT7rqxn6eTARiJNTRiK2LcRcoG78AmB6DRccLFAcUsppkKUtJxxzkxu9pCptoSUE1Qabsc",
  "key1": "4zoiSnubQPsPRBZZoAhxdLxYjVBdqtkCfgBwVALQqDD5GJfSNukak3emY8eRA5j4xMo2DhZvEpzxRZXv74vr9TCj",
  "key2": "5QJQB6zV91m4coL9PHy9XXLe4THK2b457CyjTEPAF3rBCmT9cxgk9QJuMMASNkJP2dKTKLP5ajJa6frBNt3cnXBr",
  "key3": "5XVj9Vw6qUgFgmJuhroqf8GvseSjJxewskrwwcwRLwVbeqoAFs9X6Qdk5BCe4wihgGhUCipqNm7mWywEF6FAMY9q",
  "key4": "2fBGJLDNKpt6zufJLhaVSH2u6WKgAs9Bnrdb9ds5HtQEmbJvw4YHPMuW4ETpCVBqAertuPpfu3XEwtfDsY7J5w5T",
  "key5": "2HhkvAx7BrxWu9R3ZAGHywtSAhURERiGqTBeipAVumHj7rQe3E6gXSa4oQVN1UtsKd6oXkb2keXVgKmvyEVAxbmu",
  "key6": "4G6EfdDg9LXdCJ3p2QbDy9NrJGLiQFpx8qcniBJwW1Bv941uZdE4EYX343CEeP6R1HYdsts89ygj8FZv9PqbVaeY",
  "key7": "3TKfQYKfBxim4sgXRfDHFvKetVNRZTttPbEFzCZBapUGshV9DTxryEpusLVxmmvSvp5oYzdrs4xnuyFkGHVAYBT6",
  "key8": "wTrvAfCssq7Qn62n7en7gp6rmkCJfz61hqZGKSAWdbiaQw4UFYcFHSdcGNmtSN5hYpJE6GLKdq1SYTLQXZyki7a",
  "key9": "3ERecNm1TgdDojEYS4bvMgMyo6jd62Ra3Jro1M1CitzNNTgSa2JaURApDvANuXCRE4QwWfAw93XdUgPg1gA5Dfk8",
  "key10": "3ycDDDp1z4EQHSPLZ6YG5yMiDbH22BEj1y27pwZPe8V85aoL6KZQmVzT5HmurETnNaFeKZ8oQbVYYva9FdfpZ3ji",
  "key11": "3yqg6Vam1QDKgUe2N9VG7nSahp24MZNP4HFUvs9n4BD13xsHhboWzwzwYT2i76b1vumyRy8ykrPUgzWT2eY1LhBu",
  "key12": "4KreJp9CwqB3k1A2HgjR5SVroRXfu3TZUEytSwsynaQ6EATibjBPTAy83cse2oAuXCx6kyW8SXzfrLWgGnaTvfPt",
  "key13": "2LsxCRoKVbXKXVQ32K7V9SEJrv548h9ZzSbFtCwST45UTkLT7tQqsHr7ffgdLSkyGtcVnannUwxDKWbeVpFrVcPZ",
  "key14": "3sN1LbExvNFCxLffwuimHRPqquPzPGc6grALbbAxdrEWjtYG3anqi53VHW46Xkn7LvX7eKAobYQcTsAwRxTwUBJM",
  "key15": "62FfoeMAx5nH3bw4vZAMH3rs6H3f6Pb5zAFUrxjGqu6hptyZxiusuqc65A1esTqhrA6q6Bzp9ggtA8pKz3R1rDCy",
  "key16": "3F9WHSP63s5UooCjwaNStvsPzGLQzUntDSes8F5eUHsbWkfecrScn6kpTegrD725uRJMkAsYGYELJHnwkTmV9qeD",
  "key17": "2ERpNNex2vc6Vh8QGqCixW5agLj3GdQrTVJrBpAC1MY4CDvS9q8eNBPFxhWZvAn5RHfbzXEwCTmTpwwrfWnbqjve",
  "key18": "5uKfPjxG884ebdR8x9wodK2242iHQUJd68oQ1E2aMn7HgAPHbRmV7eBXFdjR6kJxxgWwVe4T88ZnnMc1rgiH6z4q",
  "key19": "CZZAYmgSawwQjqKPofsBNXEj2oHQKgkY5u2L9XGqgAUfZyUDCTBM9BGJXKPWWrbwarYwgpshdKXPoU6Z1XvXgA3",
  "key20": "5jsap5bMZvxHqdd8E8WiJtS7DFqjZMT3Pux5WUZRsH2KXbfWHSTGmDuNp3nHU7MqYGB2SHJQyaPU1haSYABxTjfu",
  "key21": "2FFxbstSPPpr3Cay7go1Rpg1CDRhZqubcVRF6HjVB1gxbGjVoAogq9WRZoRzxF615Qg3RTAkTSNrnN2E5RnWVosk",
  "key22": "5MP4i1gKTguGyjYu9bLSPy2YWu81Qib3NNnodsAdfnBMUohoLQZuSn6XRMuELAvobmC5arz3PADbjXC9pWs4eXsE",
  "key23": "2gQPkB4roc6UREFpkUiHpr9bFEzTFem2vgvYWQHiDJC71Cw9bSGZUydjhvv7nyi5NhnKwfAJanfNmyM5zKSV9eKq",
  "key24": "93cFQUuTGM5peZ7Svrm6pVCBmXMCxzudQm9pw7kgogzkp1yHmSnoRvgk14UVyvabEPJRyTP1dRZDfKXbcHrB7kJ",
  "key25": "3wbC6yEuxJHyK4KRfAvbFJCgRbuKM8taCUr5n3BGXeKJ8Yu6EHeUpdWJrL74cgQrniLgyrDPGqvVUJ7R79zNKM3p",
  "key26": "63hJp73ZzpaEfCKVK6vkznLUp1VxP12bqfrkDnUPohdxo4tkxpJG1KrmkysUXBhZgT3Uraa2n9VLSZwNkoW4PCJU",
  "key27": "5zWxixF9VADKjXYV9YJVzXR9RoWVYk7CxQr96HcbxTq8CgYZDbbpKzXBvqj2uSaf3XQEB8hNwNUpVJBwt54eMrE2",
  "key28": "5TKWEZ61R6JgWWZd9y9z8vfVHJAZ83g97Jw8GN8uJvoHHAQwt1USLAJYau2vRgvNYE2WGZHr6nztQMCoyF81uEei",
  "key29": "54e7qeQmbR91E8qRFdAmES3e86utHB6uDy1PGisE18MdXGABQYr2qBqNoJvgy5FxjG1orHiepmmPdY5vh32QS1vS",
  "key30": "66vA86MXB1B3Bg5a7YxQyNv7UTTuAmwPhg3J96Fu2V1z7K1ahgkNmS4aSM5YNcxtz7DXuNqHeLRdwtssJC2ouHSZ",
  "key31": "FWdG5YXrcgEzRpUMc6CGixQhEKBJ8ZMssW9cPnCt7j6amtGELBLhczmcyNv7i1pZMi3ZFVHLMnoio7AoX67jQXo",
  "key32": "5k3B44Cq7KZWKZ3jimBd4bZhF9h4nzKJtwKv5puwCLmUKfNymXtyCvmTivye1YkFo5yJoJo4Rkh65ooEvXSukEg6",
  "key33": "bp8kQgSKZgPKTacyMETcf9cKAyExgrACcgPcu8RYyMtxkFVq2ytvvp7dBewdJBNiQymifuXyHdnjZDp8i4qutTh",
  "key34": "5gqWnNhLgGm1Q5V3xT6ykiH9VxgQesAo6ukxufyQ6MC2ZvU3k99fWwYHZUPc4YVJgsB9E2iExxxKPgBvwPqCCyoA",
  "key35": "3jjNoBdA6Yjn7FURy6B26j88Knn5J1iy9FRJjknNjhFtYivbjdmESTTdMaSGYfNriwgB4Ud7Kva4vwXag8dLuQ3D",
  "key36": "5oV8QBANMUvbRd4nh3s6W8kU5eBp8fU3VsP3sni7hCasEcQDTVqYVWwL1D5TNSeSoyC9VaFBkvgUvUmnarvGYH7w",
  "key37": "48zQDF7RmGj2a6K8WrdCjDfK8JmieRphmiwfxp8a5PhbKmTskcY9sXVDNeUHiY4MQzT9e3cUQ4wUaLTVQZnpyvnA"
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
