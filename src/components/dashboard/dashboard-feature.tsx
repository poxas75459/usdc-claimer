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
    "4nJnJxreekihzoesqDeGCajQH7ifuNzXAK6vqeTdLCKP26GpnQjpW3PQFWsvUrCQ6dgqt3Kgns2djYVGiQgJT1CH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wXQPXQLDbwnQpdpVz57FRWG3sXaZb7p9ZiLJxLq1jYJ19Xb3e7sHuiV5DYFu1xawfznyhCD3QQQuQnYitMDL2mi",
  "key1": "5EDqdP4wD1EXKrgSvKYgXMX77QyiV2LxxPxeokQK354o56SWcHup1kzwo9MMGHpdttNg5UHs6aA91ixGjqkSiMBe",
  "key2": "2axxjNAdEGaHrU7mUR6qzt6rEktRVcKSbqx3MXwjDu3NSqUPiSmUCY1FxsF4YZKQDjANSu4fWX15EMCe5TKXAC8s",
  "key3": "5qjSbuFjd2gvH6iPGvFCnUapVZ1vVpNBxYWfAV6eWRtjzKuxC7fa6m4QWf6Fpx3gnYmYSNaRwrs2MzfqazkN6fZq",
  "key4": "3TEovqS7ffK9pURKxNYWsRBv8r7AbUJZGDfEr8NRBbmcjFtP9LRWaCumgQ65ESdf2BkdeHEEM5BqAnCNGFNTv3iu",
  "key5": "2q5ThYFXYctgTtvmZUo83YpU8rJAtZmMViQDhYnBkqNqEP6Z8Bui2WWqgV2HxDDHxvLuB7JAotFd8YuR192AKZWM",
  "key6": "dtZXzaaTDeoKzpouYaxV6p5sbcyyKwzsAhnR28A9gEpsyobKgjJQKR26139W5MWQGBMVPmpU2Wp4VHECxwUhKRE",
  "key7": "JvGvNWzRLXQxobZbvATXgQqbiAoJzAt9FQYJTuxy3oWhLDU9KhCc7gNLjrqQRFHzF5S8iqjDDpff2J2p5NZE15J",
  "key8": "76zyxmXatnuFejZTrucpqmCjwE1jFexPP1a3y9NvrqAmxkc254FVxvJn5fDFcV7bzvRHxUcoTF12HNxbETsEueF",
  "key9": "5kfvVckn8Mf7jZwaadTg3yPRr34wfgHsDy9z1N7n2Bq8xHB1wGnt6CtbEKR98ou7Ged6XEvZye5ydhgvqrkAWg8o",
  "key10": "5DZgsBniGhEh3GJkvQrjck11mXGCrHezbCXF3hxSYMgzNs5DFniYM3hScWFetGjZqKKuztjvgUH82wRRKQwMwrHJ",
  "key11": "3eFRQsaeaEUsgmNUjETQRaYMpGpKBEVWSQQojbgqSJnC4Ykmf3BzMKBjTsLrtv1jZeeZrmZCfihrBNYr86XUJNix",
  "key12": "4X9tVnVUgrrSVRQnMEu33wNUxLhuo4dm63YfwLvfRDqhC6h3WTzyVMbjFxErqxRSCV44FUPBZ5yNd4swpcmjej4S",
  "key13": "5o6Mh5qfE7pCkQQ7TfnTW4ToVipj89o18bRN4JBQKjk4PohhSQLAbkqcEWD7kUMaHBYUQaDirmVDtW4ikLjCh37i",
  "key14": "5hbD6bbi7FSQWNgB2pWRXdsveaYmjD7NwvC41Vsdxk7miGGANyxbFCGTz98KP42Y8ujRRVorcjTYzqkhC4wxcfgc",
  "key15": "EubLXFVnE2KryN9ZSNsoZ6WuKqpccAD6gzbsXphZ8v8U62bDNr81nG4ubSsNMDCnXhEQfmxj4McUrQPAHAQcjG4",
  "key16": "5J9mZgNuRZj8953Ta8D9toiAbSHuqLiduW1MyfceghVPikcheh6RWDMTpPJmQ8PgBsMZBywKXh2qgwmQqRSrFLVz",
  "key17": "5orBTMYQtMZwsiBKDFCucBquFpaMvaRXiUdVeF47dT15M1Z2HRXAaV5aLrvfFcztZY64LFTjXGQDsGFKymnrfzCd",
  "key18": "3GnsSS47gYwmZYcXNFYxF6SpBKrR1KVf2K8EWg2K2dq1U6aZPZMVanmujf41JUhdkKn6hpH8KTMqvjmdzebmyRi",
  "key19": "2mw2CHhAGvagQp35pAPFxvgUPwWzXeXjZKM25ATtAWpMsVnGqeVZtjyivcG8M7nKAtLLFjMjtqQvGmmVMGVbaBnX",
  "key20": "5PfdaP3o5rNnkEeyTE2h2mKkRrLoU2c8onqLK7iSxrdMLQ4tZPUxmtr6QGpKjsskYjrFoZvWdS1WQtfbFmPhC2bH",
  "key21": "wZFchjf9Z5Kek2auoTeL3YEDiVV7XgMTiR7EK9B5pggQybQ6Un3eBVHac2EB8u6FPkUq3yxZUWEy5tMimPXUr3A",
  "key22": "7d67XUcj1fhwdM1ZKL7mry8SURw4eR7jZbnauTbtDKEiXgBKYSJ8qvBvb5Kf33frjTmfSQoUitV6DN2Uk8NifUi",
  "key23": "2c2w4SWXULwipc9NmdgQP4fUcfHmq9iKH3nDaoJ3VrA8dcajYAHtv2A8VNxQbB5VnxcnQuU7SguApG8x1pWSjVAu",
  "key24": "5pPjkbgWmmiETHsgzp6BfGt3RbXgCVGZoopHejMitaf8CtT9H4AfRhqvPZyUxoWdeetc4EYhPrTTxWvK3ptegA7h",
  "key25": "5bNiW5Z3jt2PDEWoUFEaNhU42B1CRYnR5queyvv1uAqYTUN2Zdy92Z63dKsE9qySEwWhYrd1i3ohhUVVeDQmySSL",
  "key26": "4SVKuPu6r3KfieyRiMDCggGoU7zhu1jWfVc3X85duYr57KaFPuk76sdRz6YyWRqPVbCVTbhWpaNzJa8YDkaoxKPU",
  "key27": "5Rn2jfC6xXKyPtz8tCsGVs5GergMLDUL3Pu6qWMZNu37Vd1tvvCZV5TgB2jzFfKruhHPXA1hRPHVHrKDYLEMNZ8m",
  "key28": "3mgrKdw4ehDJtMQ25og9Fr5mBrQGEwtpjTimay9CreiY5reNREqVPh8FzUwAhnuBcr8YmoPGAWszc2w7W9WeCkP4",
  "key29": "42VKGyvdY5KdRW1SGFv6SGb7p1ZwdhuJHiKPzZbgCwGRbYNFaZC626otVPy9ZBmMNQ57W9xfhPcQyq2znpH5bsmG",
  "key30": "4SU8LCZLBXou7k5d2ZkAjPurBprkRdwFDaDWrBwwAritiXVSPisnScdKMaM53RSKz3oqbzKJUyNTLWWJTrCn4AJt",
  "key31": "5QPMcyfJ8Xb9SQ7hjxs7hwCAWsguaNsfdQmMznD6enUwxtw77pbKHCdiTEgQe3xJWYqUdNbhe1aSUfCPyLXycHt2",
  "key32": "67UgHR2LMH9QGaiSkFkK6pTC27UQVzgDQacdHm9jpyZCfxsFpEqVKY7h3Kmy16Y1tMv9mgwNApJrf2R9ukXHYpdZ",
  "key33": "3Qt6xEyUAsSBKb2v7KhSCkZWcbr7BnJsDDhBPnPqC9R5euu3dN3gfVCXWrcgaoxK12U7e1VWPoHrwFGiLCTRKCht",
  "key34": "LDycWgSaifsRB658KSz5zGU4cgLxr2e4thbsr4o4dPNmQzPyUNEJwxVmyKVayRB8qAcXVzckabQQe5xMxyJuy53",
  "key35": "2YPqT7XkPJdXc2HvsPsbvspWVBRFtrBqBt1c7ztFLnz9vjKyjokLeTQDjy4FURG58cXXKN4B1S4XooCRvcJEfP89",
  "key36": "2NwjyyYPWaqmofkRZXhQkbJnqVUHncCjtVdMT7wVRhog2f1YNQBMqYvcdRShLg3KcoGTWiP5K2MQpK8uM5f1VVpb",
  "key37": "5YFZgmTY3i32iuwXysFHNzUvB33Xz1GQvRNf7fmpVgDzkpA3D86ukbh6N43aR19N1hpYXF73jyMPTvQDETJyTgPX",
  "key38": "2UqvXNuJCedoVmis1JkrVFBdJhmnb4yZYk5fLXoGaEiYQWqT3L6iSZtNFv8yUrg3NTbnJyDU73SVMcHMa5odVz7D",
  "key39": "ppMjyNzJqoy49pzwXngPgLorC8NjTAFRRgrdmhYWF3qr84Bm2Hryr7MexSpg7xbdKRLQXArzSfFnyz9vpHZc8mC",
  "key40": "goGSRa9U9PQBFFXPBqyzZrTjpPyyxcJW7NjGDxqFX5oDRWoabB65k7kQc1vG52TXjFzFdut6PmuTbrqFizSB5GR"
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
