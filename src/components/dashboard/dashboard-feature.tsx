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
    "5pzgsT3JwJmuqpwWepc4vmYozZvkR9uEwxuE5W9kNyzHWV4npXMF5EggbUD5GB3E21DQi28QYTzJBQ7zgiZw7fn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9tZjoRcBzJ16CXwo7GHp1NNugNJCfa8BqayDvuHqVEAq9qDPwBjorcn2cdMkKYe8YXpVP1gmqroYZf3x1ZhDsqX",
  "key1": "49vQy7g7qVEXVd9C1KETKUN5nZyPv63etHUiyCvgN8EW185bwq371dxZXoedDkQ5yYjYSTWa42eBvKB122ARFuzV",
  "key2": "3hNkjsMLBNyuLWh2pwMukgNei61Y2x2qUDpY541SVnHvet1Q9Mkf4gvEdKiWqy1YrkCGDfrMoV1kgDaUaFEb4FqE",
  "key3": "2mFLV7T1z8DHch8EbzLnxth5wFGQTQDzgtuihMgDajp6SeJktuDjcD746RCXPhMtBSwEGu5ChdzQ7NN3nod9XQ4c",
  "key4": "5nJ194v5R5b5yxkJrjRx2vSBch3DMrnJ2UaErvr86P7nCo2FpTNYtKiaPTeW8qgDLkoNVEt3Qen7yZPoSVervJev",
  "key5": "5qR6Vv42uhEy8Xtu9hseH2rCKKSuL9K6otkVEzUnmWULbLPGxw4H2DbvoA4umZQSsPtwAoQHsMmUYf5RGEkGej1h",
  "key6": "3WkoEpQbn1w7a5pLLE81yjkuPECzQHUBVGWJgfYR6xMcJGxuUvN6BSxCeqkR7gcj1AYiTWzNcqkyknErDdM2cctg",
  "key7": "fkS7b1mbMjbVhmjsGgB8W5fi2PQTbKe4xEfSNF5Xw9yJpaMzfX4aqVEboPcKTcXxYQ2B1o3y3Tx2PQfZz8MHLdM",
  "key8": "5zomjByXQrt5QBRHNxmq8DLzX7BVXn9FqnNwws25gBK4VeLS35j3HhL9yQ1kn3m3C7VBL6h3YhQPi5sxEQCiMBnn",
  "key9": "2D4apUyW32LnAcfhBvKWnfBCcSB3Y1Ve4vy9GwcHa84JenZMozpZ3jdBueqBQEMjPkzGz82HdpJdQk1PpkZAPNt",
  "key10": "3QLL7f2aY4XSRj8tiYUFLaAMGc3qgdu1M3NmnTiUMrMX35t5Yq6HRM1MaLPhjmWd3dkNEoMsDU2SEnb9gKwA3nwf",
  "key11": "5NkHYvAqqAZu8y5uj4kttLU2g78gv7PDTQM1cVaRcRv44bid3DmCPcsmTB9zo15yB4xA7FZu1oEhkt5UgLAEsjih",
  "key12": "W9AvWvijZkFj2G9rG2t7ZccMvCDY3H8TizYTKJgsVtS4bXUqQd65ET3YAfConyWcdSvBE97KeJ12T8pZVoHFD4F",
  "key13": "LD3m2EThCGoeHKAnNKsMkKNQUGLdni8K1ZDcBjnpzKioPuY7x6gpp8Udwqcupew8RtnYG5gSitG1hyp2dKRfkbB",
  "key14": "2hCHioh4emUZuY2zNci8rzUFxUCQYZvEXxFAeeRiJipybj8hLC2gxBr5XaqRT1wHiLDMTtBNgfEVpc2LZ2nRCaH6",
  "key15": "22ATK8vniRaWojLKxjmnDV4sQ24QjZv9ACpKpfZZrYjjx9fPmv9ZMoyxT4yvbbgqv3KLRZkZjzxg4wwcz9ETQ35U",
  "key16": "4Etq4LW53wGan6kjpbCXnmZAfFCu7sGBRjUfwLCRXwN7J2QoN4cYphn4c3YKiGAKJCJBnytPhe64ci5Cfgh7QiGZ",
  "key17": "5faitdiMDhUqrezyThbgVChNWruPGaJgauR9FaQ2V6ejrR3W8gP9uETcANvU3BnZjyku6XrRRqSBYQfPiEkNyaPM",
  "key18": "58RSJ913Ncjvj2rqEWocWqmycsZKDqb8T8aB84mzDDvejwuzkdPKoU81F9i8sdifcGpKDJw568yMrnaXHkdSyFyc",
  "key19": "2BFjtqLi2LikW7XVSS1xTWRtJrEhfF7tGFfjKkmXs96Z4EdSuGNNDuyTbGfxAPN4krdCcLLQNMGBEwkFgnjJMDE8",
  "key20": "4QKPgkHWeSKTveUB3tCypJLeM98dC8Ln4ReUn5cTUNFZVuiwB6FMZrF6V8zFcgWGEixUtuMs61tihwmLQfLbnPQ1",
  "key21": "47QSpiWMEJY5CwdsZkVo6WNzRVZiXQgJPb8dEtFwWCfGwVus5rhAoZxpq2UDt2EFVrgXbGXXjNfManDJtPGt3zgG",
  "key22": "2a9EpxMohrTFNk4KV9tkaZ3eMNM4ej6UNRAqY855tsxpfUi5zj5EFRD5NuVXrpPSJ8opsXANfYcTPo7qLE382kf2",
  "key23": "4eAT9XE7LXjCJJxjWXunHi7CnN7La7hzSDft8qt6eHdaWhtAUtbFhzMqPYddy4ukvLE7NzW1gqF1CGRAiD8k7PdW",
  "key24": "2nqwS9Dg4vyj5STitBHr89rBPE3YrJEQYd61qKACYDyJC3bzR9JzUCWdALck5FGSUqkkxZtVBPs8qbGdft1g61A7",
  "key25": "5R6RZkMkCVUcKyeSTVzy1x4jnYTPEGEYHePDQk9pPdw5KD6Bwj6uW1SMtBrbfgNyHpKAHGXdLknfhcQ1CLq6zXTf",
  "key26": "3fkLBs8FnTmiiKzieyrkP7rKE1arzQSniReaTAasxDndekt5PPmEHAYr95XU9AvZDh1WVC1Wt35qYJZQ1QL41QtM",
  "key27": "4XVPPt9oZ9xfbAoX9JF3kgCkh2M41W3PzUbd6tJwoERJMzSZzmDnH2dZcZKLT3VTj3dqhTq9mW5ZZ3XmDwxhhDv4",
  "key28": "66dbD2sNqLU3NGtFaw6WZrurobtioU6aQ8Le47pBzzVsgNr3F5vM88aWERsySbJJQJvgKd6YHdnMqEvXcWLFn1xb",
  "key29": "3oCXQthTAPnwb4gDf4z1WWZ5sEZzFR114jyUxgM74tb4Swp44W4KC7WKeGuxSsttLLR72adksG41e6cQu5KhVbQL",
  "key30": "5Qyy9p7irnMUdjQtc3xgkF2A83Qyq4cHkB9hE9UDPbB5ux9fABhs5WFKs18mtiVKZtCFSBMPrkxkkUfZ1Cn8aSSd",
  "key31": "4vfx5giAwvGWpoABjZ5h2DdCX2d2scc6S6euPY4EDKLFUvJS7nmhFhQZzwQisnNNzYJhaPnbeQRJHGBncUJs3Pfa",
  "key32": "4J68F5oE4y5vLFkGPffpwGe1ToPkJGqN25K1x2Kpuz47HtUcTmSPtgo8WwoGBetLgPBEEeXkBDkUSoeJ8DUg1vku",
  "key33": "2z3fMCvCTm3PFRFuUTJPzBetJJV9BN9jKdqejTLjVPaCFkvj3vAC9zY5MqcG1AyNdURjsRrVpbiyG3UJ7VzHqEXK",
  "key34": "5mMoXWSjJfxcfM9kfcmzcGMgG6LeADFQHvqzjBX7faUzKMWQrGAM1vwNzjG5jkHN491DWjSBTArLeweEDtEK2Wbq",
  "key35": "2nUhVAVnxvWJ2qE2CCc4LxAnAhwQ9rut6QcorwBuUBCvrpeCYrg2kWLGGRRRj7dbxzFNMN2HkjejN2YXkDvzbzbj",
  "key36": "4qsPDhRy8sPZpZPg4i99hHyKBaWPeTthPpzN5YTLyLg87XoQUQqzoAMbzUhkjEwtqXEvgS5R1mXAEg5ScdnyhG2R"
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
