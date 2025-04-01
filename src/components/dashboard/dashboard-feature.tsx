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
    "46RBk4Y4PDKtp1hYBjcMVqUrwus9RkG2WUjoeUeH5Ltz7LaTUypmgUbEVWVcat1btchcYZnP4djMa7PyHcTPLeB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RECDJn2grdQvKmXddV1HCvTmhGoQtAJLxq4MgTDtFAbBxBcHyPzhi6vSk7477aRw5oxSBoxebN1yZJCjb6XWrtw",
  "key1": "4ieUv7EL3D8A3pdgekHgnJxr7MC1WjvvKyUbGZRC9xJQAjvGiUWhBHSaYK7rwHBW3kBDqDhcnLtFdmfavrGF1d6M",
  "key2": "5anoJeAX1UVykWAsLsyvZV5ib5AARV42cyfqActsKLqR8wjHvhrJSgNxhHJeBKd3oxt1qbRgnas3P9pjXdnqTgor",
  "key3": "4BLaJ4ZH5gp4q7enrccHY6xEP3rrAfvQiLFCh4h3WFF8gjkiyS7okxkeUBjXbzAdY7ULRhvDyF1gvVzYnF3mifx7",
  "key4": "qhoGpEgRt3sBHxD61E3f9AKpXaPZRGSYZYrx11r36BcVYSi3yRJMz3p8nnXq7m2pYGxdS5QdJ4GHSQQouTM1e2x",
  "key5": "2H1fz5koYPz7H1rW8c4mg6ARVv5icvuk5rWqnhwnH7Br4VeSKUpFSW7vDcjmeLtEDPKHjwYfE6cFzzf9xAdwqXK6",
  "key6": "5ahbL9PpMbQcjHhkeP7sqZyxscR9hyM5ZdGhHvWz1mgMie6QGG7k9rY29kuV1Yr3zpadNexHfxxWMZTTwMq127es",
  "key7": "35zwWFqva3NcHFnbPMeSJFUqFEgriLNyNbHpzoduURxc8p3Yb249ph4e1vwi8NEDxN9FLwgJnJ3j4vPaeTyvmE76",
  "key8": "XSFH3jB3saAabKPhFCoefiUnG4mYVVKLRAngferFSVVrXoDZV4cNVkLKy4sdZRZHgmXBE4LzArTpMT18T3EAUg6",
  "key9": "2iHYDaumCNzqkYreMYDk8vzbMbtSEB1SSEZXgJf7TpNrEm5gnFdmnV8Mdmfvf9x1iBJ3TZdSbw31HrQo3EXnAAYX",
  "key10": "B9TbKhL5kRwkgoxMeCU8FVt8sD1znnvug4aUZC2iJ5MiwMknZ1GFuS1pR2DKN6kvmoZwRTz6q6vUvQTVncsmNQY",
  "key11": "4yqUt1GbTkybqJ28T3aoGXJMvb45vJznTF5bEURkXMjsoaSuUTGA4z4Ws9V1XwA3GX1zmtdimGfo2GNZVMW4kMzG",
  "key12": "ws2q4LRizbXDw3wbiAxtvmYDU1gR6HT9qBcqvrYXLrtcv2F9Td7HSwZoq43QpVhTJYP1pRCebTsEyUcWQLHfCkb",
  "key13": "2mBx2jYXHBXy1rQwmUDnZc5izMY4d1xtLjVjCKfNDN88xvkNz25TySq12FFyX7h2GYMaGooi5cBYPUkw1PHzujWV",
  "key14": "228RUWb8vYC3NeQpfmRNoy16nEfBWd2f7PBzVnE2LCJpMJjJPEVTuaAddA5LFUwc9aNCALG55zRKuWj5kSBfKzmx",
  "key15": "62BsRNX274MSBgx7Uo7PERbNr5suu5VQQymAPoVfGcQwxjmHx5Ce7xiJptTqM6oFpaM564ESRX8KjoHXeXY8drmR",
  "key16": "23XfAWNFyVDj35Atecb3vrXNUYAZ7Uc1KkDMmDLWyNrQrG5fdhXUrLziMqoKqvSMF33dSf94TTJT2E7t1mFQyQ3p",
  "key17": "5jRioi3YS98TXLeZh3pcECrXXWcHFhoqgvaN5NiqS6PNSKZ4h5vPP8QhSJVQdq9RhiRb3FHvob9HyopN8NPPcjLv",
  "key18": "5tN9DKQCbknYrQNzbvTWaC9SZnx4CqpEtNVFuzUYDv28NLwQz6imKrzRuKTXk5rbCqWL43cjLCTxznLSMVEKYr1G",
  "key19": "3q3xWek7mjwk5MksBrgRFs24pyzag3ZtCoXr1i4eVYZHkgwZuVNPX7AUY4vJ2TcLyJhvzim4hBAF8c58wMe2yQtL",
  "key20": "49CnatNvxVaZXtnVwRfv95b7vEDT18JpxyVPNYBDzs4FiFLN4Ys5xRnPxTWZUf3B5Ue7q9aXji13RwNKNy2afaP4",
  "key21": "5JQLSe3KHEU39s6VdT2JEX8kKokHZ1fPyq8zGa657wWdpZUDSLmWcpWrY4Gf5pY8ydoD7CwpQMNM9e5kon3auTWj",
  "key22": "B7F6uY5XGkh9VhwqBiryHg4DTLdN8R6w4eYhfdTWVgztMrNrYRL2vAc1iU8tHr6cnfbGGWUTz4FHR29jRXb26v2",
  "key23": "26X7NSn9G8fE1eBs4gULGWwbgEKyHrJAu9CP2U3VLWFG9ZwAo8n9bD561xY91PgPqmHN7FFGhfX7wy3c1BAovWfq",
  "key24": "s1xNQSAhmwozZm2tsNgjBAjj5wWCAqmrLTprznYmAsxWNyBLE1GBGz1WrRhoXG8592fgRyPt6sBoNponibp7Ljm",
  "key25": "5aRv63LtJ33PEHKKviWaBtroTwERZR8zMoGRLoDhCj3MVgD94CaY6bCKjzX377jEHCncj5z1hMVw4YZERFjXDbnV",
  "key26": "38mH8KkWuphANiqb1NtQno3Za1tTb9JduqKaWBzU4HcBKUg7s4qXs3yPxxUrcRs3QkpEPQn1tuZgMS9vuRhmmhVm",
  "key27": "51K3qGS2PrDs7wdGce6d7xUQqSBvRdrugNQvqn7w4igVne72h5eiPVLyEFfin7Z7JQH2yCbfWGk8cXdzxvnGqAb7",
  "key28": "9cF7SJdwZraGqavrCaMjFp6MH5h3zE5i7zAsr519uYLeBhGdYZm8MwQJ8GuHB2V3bzLznY3X5bzJYtXGCMTJcKc",
  "key29": "3RdLR2RBMj21iisE8XzAHrXrAa9NCNoYUmGQ3gjZv7WjV2mzFP1gyKB9o7dDcfe1qvKsPddJ4bNKgHVyXrkpZp8N",
  "key30": "T1sEv5cuophAM9mLm3NVTMfzdVwphpA1hBS9vzggGftnY4oUmEqYxLurdzK78oo44M1frkCHeNMdqmUCFrg4gdc",
  "key31": "46HWkzqJKCwzeJ3cZLVKbnhqbWzT6KhizFMxV4izNSSMUJZ6saLwUE1y7MKWfyDWQE1E9SdN2H7xtKxxtYE2BD9m"
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
