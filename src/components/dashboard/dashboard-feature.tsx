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
    "2LvuMcYNVJozacxVAG81ytquJxxna7BfckPPLzpfvpQw8yaHYgEW9d4pAcU13sEBG5QLXS7ndnsjM3wTiCdow6Yc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cFJDWLeMyPZcbU9tWhfjBx97xC1kmWLyttfkS5m7Vv9XiiZyvBWnPSafvRLDGHvXaWbejNyGFpaxnLUusX4LycF",
  "key1": "33tsSNFdDxh5YiSVxtqXnCej3akTdP9dnzvNiVe1yMv4ox6GjpJR8oFfad8THfiqdy44p5njNDFodopUKE1KAMcA",
  "key2": "u2kMNBirsxWQDt8fyNfL3WxAYzNNp4c6So1XPN5Nngr13BsFLLSP2Zr115W1jZCJCUabdKAANk2pLmHUEjpAUXB",
  "key3": "4rxb4Xs7ndAM3Do46kprD4ekhFfbVDP5ThpxSnSw7phDaeR4zcbhAwPE7e8Gd4KEFkgcCkM75SVzBMMc5gTHiQYs",
  "key4": "GuHhSFN7atGxYRTCwpENYPMPc5buHShwRxEMbgEHigu3TEPWMqixcdXTDf1W68Yn8ptjKcecQi9uP65Yu6jLp6x",
  "key5": "3qq4AaKSNSNxmxm4BrktaBWpZKYiwYwzBsMGQwkP81uYhBQrdmDWMDWzZiyLACenjdjckLWePSLie3b6u23atyjZ",
  "key6": "Wt3qks9Lhmk8D8ztjur6123egQhkkHzPeZDop1BSdAdr99Wf627zcd9y1u7REp4uPGBHwekmvTXdMQQVk2BmXD4",
  "key7": "29otcbCeqDxraWRZL4hykwtVrCa8Ae2zWkYzHEq6stc3vd3Gid7RrHxjzsaTY9csgkcahFpkyKCVWx2UovxfVujy",
  "key8": "4jkJuY6NqkiKCJ6zeBfsXWovUT8ZYL7H3t2iMAyksSyRteMBnPZvP5Gw2LzSRVvNoESgT7pqbKJ9JdeRjWW2XQgt",
  "key9": "5onENt2FZJkn1AbEJge1Ch7amZzheKbGLa4bVRzytSDQf4i6dEEeR5jTe3poqvqmbjxjGPKGyvP2CbdPMuCynQuf",
  "key10": "5Npypie2rPFA4kc4hsBHeJazMyMM1NugpBuk9mkSgvwAWsdJhUEGryXWzvzwwheK84Em7PK6LyBVTr2ithU3DgyQ",
  "key11": "35187W6A2S8BwtvrtC36RTQorxvzisCy37zREiaMmRCAkoRpr1HZWK7jx4NZ4ZHZWjLBe1fmMnw1K5UEhHK8iLLH",
  "key12": "5gv7ncixCnaVepzcCLiJbFitKsQ1scNobgJEpBtWARgFGmEL7ymiiJWJPBPBreqbcBs7zvFHTpfW1aZpsGc3mfh1",
  "key13": "244nF5nFfpKTWYSMrvg3343e3ThXnYwyxFkwrY3isMo1JEM5YWFJYSH5uhwFPCZeNn7zN4b7YQrE6WGYP2TFwmLz",
  "key14": "2vw7D6QRE3UHP45muGzDA1mHkTu3uT77Ej2QnMo6dfWH2ZFqPg8zSUq5YQortexLB26rHnautjqpq5s2rWeUsyK1",
  "key15": "5i1vc5cAx8c2a9vh5GHioLjt7WG4JX8UBvt4PV2FkVxK9zGU37r7kR2CkaqpmSKoHumYZy4YHdfQHrtX84gxZwSU",
  "key16": "2rxXjh95FNnEmwZHPkxqzePqhdVsBtWBs56dR1ndJRx6MgnpU4H7w38ApZmxf94MRCeN5RynZzbo3Ph6rMfdkQVw",
  "key17": "2cL13LBNCWihmmzE88fhFUWnZnUzy3SjCzSHZ1xLMuY4g4R8dS1VfgvquujCRFvHsL2QfWGqxMyKH4NnTfpX6nbS",
  "key18": "5aRvYbdt8C9uZAGbjg8cSkaWJ2vyfgwx3knvGtbQhbiido2jGQzbTGF8BauD1XoYs8cnYJ5heBYMVzF9a7dZaAQJ",
  "key19": "2CktsWRuU8HdZ3bisDiTMsWL6XRhUTdnaApAPVNEmStsnEpHcwGv1h5DM8d3hZbnkDi2geB2EWfp9H3mRhP1kz6h",
  "key20": "5guoQVQiKGJg3iMESzw8f4ACUK6T5yDm7V7zqyw2FKL7mDqBSM26Y6xdykkUjPMyFoxx4ePRGUy32kyKSQecTKdF",
  "key21": "4oUqvky8gJKKwh99gXGub5fhP2Sd2GhZFeQFm4dtJhHxHm6U7SNh3Ni99aCKUwNn9FuyxzKXuaVCUV7Q5cT8NNjH",
  "key22": "GTQpr8B1tPWBteXPhfkqzajpmsQ81tjPfuVtacV13PmE7apdxXewdu9McEHRbwrbg4tQF8KDaTw8TiYYjNnb27V",
  "key23": "3HJAbS9c5Y1xMkiGNEfg4jyoYVfg9cSdGfPGv7qgYE8UQFFcFPjq8Cr8WedGjsWh3jFzPpxHvVWnhF3MLFx4vgeA",
  "key24": "5Ko25LSM893jDRqnE5SfKpoY9dQcjHfK8N46APy1MEB4vjgM3HJdoRMS9534Xh3pcD6JKZ4w9khzfENrVprhtQsg",
  "key25": "4w1NS8HrCyL1rMbJpKHoU16SwQnfHrxA5Kn3tfx37UP8yPjrHc2kCjvY5kCd9ofK9AoJLJoxqRGzDHgvJxwj825H",
  "key26": "BYVL2B4bhWQRE4yqtxoBLRPZwwSmXu3Jd2mGZQjREL7ir6nAryn6bPnEMZYkeDumga2wXNDxuxHJ8dUs6eazKUd",
  "key27": "Pd3FFoNPWUNrkAbK6axWba1hS9XcJLVoNW9Kx1KmYpF2PJCZDsabE6GNvXPHYfTyd3PmHH6MxLb487RFKTQMTES",
  "key28": "5tiK3YGxr18g9N89PSGKsBMgDtuiTaQXCZFTdUjgHvgb8NyHPMYuJ3vbwwAmnrT7vZRqKpx6QESMJPa8nquZZ8sK",
  "key29": "bwuvxskMwKwqnAQTaL56r3mLVLGwKteNrcWBK3qHQQDFC5qmdbamvs4XNdi2mGkxsCGnF78iZZmKjS8neYMMhsJ",
  "key30": "3QERdJLWL6fkj8epnHTS4tRohRkM6CEmcgUTr8ipR5e88HjuyJF6LDfJToaPWS7Pr9ivqw9bZyctDGnkSF3HyhfJ",
  "key31": "3LouPdecgLGbWqJzKPLP8B4FwrQi8CNKn7qWjYXk8ugVfh1bbqt5rAKKAoPydymBHgzkSfeVhjgftubFJaZRdsYb",
  "key32": "4v8ZBbEGXi4jMB8AhhoeGTPWdap6QQtUgGJJD4PBNuoomxG8tWDWbRtryKAihktz7C6ypPWJWzve68jwDsvD7AT5",
  "key33": "39NC9cH4g921wcsMQqEPv1z5UN9fFrA1byt5D5KSf47xqsgvcrqYmbVDRvr4AMMkBoy8pDpdkkQ4kZ5EBwoyyQeq",
  "key34": "5VpVBkqHJqSejhWPSJgWktuUqmZtwGu9uJ6TQ3p3Np4hPfcCLWsQPsmiFbXjESDsdEPgWjfQQGc2aw1BaAVzBz5n",
  "key35": "D85CUFyLJoWnz7WGqfD9R7FGm2CK9hZPPSAZNkNWwHbVhLUDKV752U5yTV1wuUU3Hoxn5PBp9CaU4RfBQHAgmwM",
  "key36": "4qxe8QvjX8m3tmQc9tVbenowvVmYyCpkVXVdtnqYMaGvybLtvhrdmLHkcizBKLAjmHTfWAXwjcHKPuoyw9dTvcPm",
  "key37": "4V2jFJyWXEaCf6taRbA9ceyUirekWmwH7yAQzvbDdKGghGvGG4aQgekSCLKr8M29sBmvcv1DHmybwN5SWeDPDA2S",
  "key38": "4YFrLDNfwh5ZEWtWHNKJQEHw3k7q7JUv88iYiu4g4ynarT8AvQZF4wJtLh9duBQYEbsbChwBdk9gNFgewJUYenhS",
  "key39": "3UD8sWgNu56YPopuZUwWtTssU19h5qQvX5JGbWype2R8HjaM6WRAc4FQvh9MRkHD4S9trz8XDx57NKn1oauCxGva"
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
