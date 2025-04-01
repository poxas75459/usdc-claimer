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
    "2hhBQB9Gv1gJdK7dJsmKidYGZrz8MkSis9SuBJabjq5XzCz5pyayyDdkQmS8pYsJgQzt984peNrmZ7833HXg3d76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Lj4MY6HRg51WciWRT6ov6mz17y62kuJWheJvMh5MhmWzNb3AvJcMJ2dyMSmXmAf8rsKiugbfeQsNwPsk8pDQkH",
  "key1": "2BuwqztPyAbaA2xe7i2iHrrM5nPNKv31peA5Yqr7CNkL9nU1fNoHmURBWpBujJpGKLu2bNFCx7mzEMzydvuwaMKw",
  "key2": "3wFUvPPgN2DSkaVFEiyvFGY6we1cBFisNUdtxAYSpASm4EAz9GAssSUzNhDgCHoBKC3ukoiL95BREV9ey19d3HTP",
  "key3": "Yyu5iyMKaoPC6Dehu5MYasNFRYvBoH9zMiEMhQn34BTymfCBmFw3D6831rz7YDk2mescNqU1PWYydn4iRFhsfnV",
  "key4": "55LxYPDrz1zL5YFbxbPkF9PY1v7WzKL7MqaTbV8rVyQU7xqnGqud4PuNPmwBew7wd5UtnVRpbH559SE8Z4M8Rmk4",
  "key5": "4YmseMk4zA1rTf9HpiHz9UQUAoFUBcCrXtcH9KMSge2Epp7oqqKDEKXfQD2jtUvWE5J6oaxEUckGZ2unkGHBnpRc",
  "key6": "54k8h9N1sK7XSSUj66USK2w7Xzz6KxPCCEEuTVV3Lhu1gQbXabMEYpCcfiCnLC7c6Pvfx47cPUWdTnf5DBPYEK15",
  "key7": "41jLbfVnzMcLK5ouhKagTPZDSFXiXKXPinpHHVhrS4Usjk3uEBX4M9SHbLM8dp26vvX4GCnV55N4qsX5zMYvfidv",
  "key8": "38FXBfEiruk13zSTerzpx3rJv5JUrFtEdAxqthGFnj9pU8KnbA2aXLYydSHftdLUSvNbaUuvX72szGBB3hXeCJKY",
  "key9": "3Ysii1WWGHJxKwcPgeK6Dj1vPc6pMRJeFMbvx2onP7v5nDejsXv8E6jL9u3uvwyVXcQ5ybBBYrcM8MtmUgYiRSvq",
  "key10": "4bE1hzANMDQQ4whPp53JGZbBU8sxEk9L4tWeUHc5W1btuKvx8vkLKBCoXKz3LQcu6SSPfuii2UfmWhdMYKKo97S3",
  "key11": "acXFUoSgjb2ykHXDhH9HL647VqZQL9b8qBX59zDxs1p848HMVQjR4Lb7TH3MgbVZWd2AVZW2BLZmn1o73ptPcCt",
  "key12": "5XnK5cGpKjQLefHyXY8CeA3cT13jwizdhjbMpbvGU6m4YztndTTKSXRhm9hYLBSf2mtTPDjHwowMFuA7Ri8Qg5to",
  "key13": "3oeX7kFEcP6u92edaAhtcnGChJ3AaQkPT7cshWKhWyhDhyTQFoWwGBhB9zv15Cjm2wTVBFanuMeWpwJMvqqBJSgK",
  "key14": "4viCMyPaw8dfyS55HsCDF78XVHrNTLEbmTg8DvqAAsELcYwXU4HjXQ1SLjbJGgqazSLYwer98bNYQtXrn4ms2dho",
  "key15": "4Z49HzjDCDHfkwDTpMUcVPntCsFBdXMNvrvcckoKx8F9Cq5Y7TnbMcU4ebkQGZbEkSqFSaF15jzQQ4dpHiLM7Xb1",
  "key16": "4NnkBUuGVGXx176NDsY5oW1AFq35GMjp1icCU42K11q4U9Q3Ayi63ueKQb6hZKmrYCXL6X7ZNAA6DZBNkmbTEK3U",
  "key17": "5xozLWrcnCJyGYqbhQKQfjiugfSc5CTZYJZhZ8mf3LCcAh1Cjpo9N1C8q14DroUNLZo3Ni1RYZynw57q6kxhTV36",
  "key18": "44V6rcgaJ3sqMwhgVsbN3WmpvzhMiPsjzXP9rubEcBAeXwVbowksRD3YJ2DWrHfjPtW2UVD5Ddw5B8kXWRMhusnW",
  "key19": "3bowszTj5SXn3GhFN2qG5r7Qdixed4MUkFefrU6xSTr3D64L3Yh3fV6K1GDz6JbG1pwQVQ5shNc8CHpScaWDqT6y",
  "key20": "4EDx8DWsLErYrfatdCHuaAGsZosdkPu6Gx5sgTD5exDYfpLSdWYeCaYyytHz67XBHA9FwtvuvguYCGcFrUy7r3Fr",
  "key21": "jU6Ec8DJorj2GrPQ6pgVMVsqVtUxUhDiFR4K8uQv31Y3a6CKckqYEwHUi2RNX4J87f19XAJnix8Dnftux2qvEPf",
  "key22": "ps8b44WTHwXdWhw34KsNJitwCANfmVQLtMYnzQbGrPZKX6apowNc6qgaVmFJJiGH6VPQDwWtW2Hzjof9vQniiUa",
  "key23": "23YRXvLvV4QwuQ3wZHy2PAaE2ZTqnf3ZSqP4p2oqVCuq6yxLc98ycaPrfdgWUdqMqD4djaKUyKufHi4tDQUwLQGa",
  "key24": "5c2Ja41gSuBs9brn8HJ1cXR1EYthEbQdcvxmxtrX1QbdnQSmdZdcfJYG5C78P6KuqkcdLUewFLoh9cqMNQoxJGbD",
  "key25": "3YTRGbezb5X4hZKymzpdzbvKZe4aveeEwRp8yBJn7fgZMTmHrBqUBzs5vf8RYcqcf2hQS9jg4PMPw65xLHrSqwa3",
  "key26": "4v3h8ECFFqLbsGPopgYdvVSyvJjLTFUL55yAppo6PmyzDpPX4VSc5Y9eXktqo9CVk8YSQ7eM7dQ2Spm7dYrZqmzT",
  "key27": "c36zwRgu7GDvahBn9BbzRL6mE72VEJxnev1GDZPPiE6Ezuie6zGKH8u89sU2mRywpRm2ks8i4RLxdHSVugTpN2V",
  "key28": "39F9rotZQWSKj5K9pNDKPawvBNkCy3CUH24cfjCgfDauceUC6HqUw7AsSGMefm6eoUBzCYiPY8iaTdsSihsJz3Lv",
  "key29": "4aSAhHBeZ7fXN3uCLjCPy2FcArDwtFRii1MeBtbaFGQuP48n614XMsKrXsieg5BZ8HUDHyTiHmG3JX5asKbZZdvA",
  "key30": "2tRci6uubB5557nzcWsu8E3JvfT4iaXTvnb5kvnprsgCxt21z7WfVn1DCNJmCagq2c57soZY6XmL4r7m88TiCnnV",
  "key31": "4UqPQKN2AvqJmoCKHF8SviqH6E9Wn2ErVhnYNGYM1bb19L2xXgLJYAL3xYBANfxVMBpAYoLa7LxxA5DxENycF2vT",
  "key32": "652JpUWog2TwjiXVhSgiyB2fnXo6Tuxt2fjsizMyTyVU3Zehi5Ur32mMLR5scnz2hx39mYp7wC7vJqyXn2zMLBuC",
  "key33": "3NAeFNr4midmb3SpNor6Gfgo5PBvHjgPA35DZ741CWzubJnyJvXxQCGDB1ki8TahFwsWmUg5jtzLYSNhJWNkoZ8J",
  "key34": "4wT6ZiziMKcqTHcztEpuKPTJtYkGJHGjcoTtuqmtj3z3PuWsdUh1KFTvdAYJS1UCQPzpk9MH2nnsX46Cw5dayKm3",
  "key35": "62dRgWCSvxayW5g1FWNZg5RrCMNhDuc16Fn2tgiv6Yudm6UkifKPQYw9AvJU59B8atB3pPd2tBn8Z7UrdmXNMR1g"
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
