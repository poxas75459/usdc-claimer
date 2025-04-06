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
    "5o1PuE28itpwFAGzQbYwFG5bHNe4DzXsgETiRY1i66ZfssD54jtGcq3mH6p99Sn1nrfo1wjRaPmpVijDbbJK95BZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vR8E662AHZubD1iA63n7LVG4hPSxTNj69jsvbSQWu9hhWnsmr4yLJQQJgHz7e8DdkRfPsdqNKb1j9rMKrdNVacd",
  "key1": "YzfyDgA2tjACwokmoNa5EQN1RaxzNm9M6jJDs5ptSWrxxjzoZjjugwqHmpzrtGu5NtRt3FgV6uN8AxkA5hSXc73",
  "key2": "4bJXecSMfE9Q5gcA1Cuk2rg8dAqkkBmoCpXKPFWCCmPe12DTokJFrgCsxX6JxNRezpF3JCANR7EP6LNeH9XkNmNk",
  "key3": "3vH9hY9LePEaKUvWd5hZJpT5YhFnkkCX3zaA5tu77Len71JRp9xMhLiUtP9mi7KEVBcPcXy6HE5VMrJxqad8vPhi",
  "key4": "2SHzTJKLnQLoNKjgBJtMgL6f1XFAXgjrxUVQQVc29zCf8JQcTN4HVb5jt2gz6bCot9mTAZkBrKGK4nQC8EdNTmbz",
  "key5": "bhUaNnc3FBAhinGCDCzExMvaA64itaCkiS2uwJkkkxp8iwUScZcVuQSZ3MRmyNEHAmE35eU9Sb6G93kNkDGFeAV",
  "key6": "5csuprTEF12k5AQVtn2H5aiVxCpYm6wT8acx89v93kucGXkdaAitCppvnUVfFTri1s3YDY7gD8k6UwqkhYeNcWJM",
  "key7": "23r5FQwPdJUjfEdkpn5nD2n1mvQxYvQJS63VrNvbr7BEWknMfXtYRkhpVBdGQwMi5WJBgGz58JdmayWuuvmGEp4k",
  "key8": "jdvFzNFKse9otsZ9Vn7DCP6hgUtdX5idk5zSvobGd3Ste1QzcbbwLeXggRif3CPGuAm2ybNUxASvPkfgAQTu1WJ",
  "key9": "5a6U8AZiWUEMbWQaEzRXVw1FrtSK91Ag7id6TRm5JErgAckbV2DBt4sQt3hDGD66etsH6HXgWkvV8sPNdEgqCT84",
  "key10": "54HdsjsBFsN5RwgwYwoHwv9b8aACpEiPSWnMf5WYn9ZU4xGNtN2rY3R7zCe62qtP5JnqzmYc1ZWYZmDySn2DUqeb",
  "key11": "65eMPP79GP4Bp4i7i3uRpbYhQgazbquvDQPNmYXGRJcyiHxUVhDw3fLEs4konvfPGXDp8e41M6FsDUsMmmccUPwt",
  "key12": "32DcWiw4H9opGHXBWHcKFxUWaUthrxBfeKYhjy9cak1w5V5WwWcbN7z6S97WMUZVRaga1QxMF8Xs3fs5s8ZX2ogW",
  "key13": "22YY3y6iMGsQYEoZDqk179DqMT1UMv9QyG5o6RZN8RSw4K16B8twZesqJN3UuMjakvapZaCo9BvYP2XuEPpucUne",
  "key14": "hgzmf96iTW48mMqXBbwbnwiZ6KJW6MyHsC3TDvzMj12x47j9NWcfuKaLf95TNd6V93fwUcBrUVqEMrT7Q8aMo7h",
  "key15": "5dXdnheH1U1L3z1SEKwcppB5M6cdGi2kzMuMxfvEKS61hDUdcgwEYHPGp2TujJUsf7MEU6SDM4UfWQcpMBhAX9n5",
  "key16": "38UPxfg5ZDkoWfW91RjhvrhRybmwsFmy5nmGdhH9rhC9BApTYD6tjKkf88Gm14d3nPqXM69e4HDiQpSDHMjnjNFB",
  "key17": "5zeovVff5jJ1D4a6SEHyU4WoZvqBxsDopZyfFetJs7SXPomHBcydC1jECNuGRtQKGwhrArsAEjyhXruAFkv2tXEs",
  "key18": "wfW6CPTTGhvBmiTnwqKSuboA7BdPZZJHf75LfVXxsrX57hDMjGFyYfU1Lmwwfd31Nk4eCNp94t9HxubeEnoVfDx",
  "key19": "5S9Fbv6X32FDxBi3r6wE8EDLCKNW7SR9dmeSMXpD9Nenn8TR5eKcUMGkxMnvRn2oH5smMX3eRKYKHvPkxUa7MAkq",
  "key20": "592H8yaPsNrZLL8XG9aNF7vNvPr37FJKun3WBz1cKXj6zcSX1qcydgDMftT7DgF8M56H6dxJncgp1dDfq9dWMyGq",
  "key21": "3nkhVEZ3vXKBeyc3nF3TX4sNvXZPKnubi8NP7fyV1RC99iJBJT3ds1CPpp2Ja3sL4nzDK7GBJZ9QTPWyGymNjkP5",
  "key22": "2NkUArWwFBFwiTvP7PHrqFat8PCKomKAEhJ2UU1VYY7WyH5UA6abdSfJgpNyEMK2jXEafNmrMbHHxzDwnDcixGTf",
  "key23": "47h7BAkvPnZgfvYv2S7iaJbW2HXBr3BTton7X1QToDnydThczChPvev5QAvbgR2FV6yCGSUPpSDs4fdivfJoPZVD",
  "key24": "2EofatpYjFZU1pxYVP6ZsQBn4mgyke9dXefR2eAEdmgQJUm82uavGN8Gpu4uuaGWy6WU6Q8Ancr3rmBwc9FBtkR1",
  "key25": "3kLWfChkxorc9Gv4v65wiAuAuVvGf2GYmSRQZBEjhpb6avsn9vWbAEpXK7sQGkazYgGMeD1VX8JtZp999VC24Gk7",
  "key26": "4Qk9abWnfmqt6hWqzkUymf52TySRo9zMwFyYYCUsxVwV52ZRJQ8jqfTwG62Pp9He8CMTHUW2gnxckQxxL5RX5X9H",
  "key27": "2zHeEM7LpRVQgu5uoo2a6bPNevM7NYATmHgmvuK9rZ3XjmDKyu62tgPYmhimVVSoV93EcbZA8REjza5nVHuVqynr",
  "key28": "5t9jspTe1EdTX3L9SjMdmkLo6KVGt2hUuyWWFzA2QUem63APFtCshktE1KmK7mDxvK2WPGniu1aMkHTxB93u3Xgp",
  "key29": "4R8xAfiQzGgyjgNrYdPsAich3VxMvqhWei24YgnecfcYWbEeR151eyV5Tm5JDsvFjmWjvpda56pR87K6GwaLFqdZ",
  "key30": "4GvN2jPmkJXZytsqehQMWUXn3sX7JTsN2QAXEmdAxppBtAvogmMAMYtteKTiTCzRyZtKUrA8n961rcDUpyxZuTps",
  "key31": "xynJu4qRg77uPJkdYVdzSBAC5QycwSACX3aHfVZdcVDT7UjHhZxFvi99opFvFUbRL2jVAgMNYjMXEX38tyokK1Q",
  "key32": "5dpGVr7Sbp7Cai3tz2V2b5zTiZr4ihStpDYN2hUuBX4m5xHeQTqUwGQ65YW7qbfa4U598gPwiBCdoothy3cCC2xe",
  "key33": "2hG4HG1VDrobkakdNVvbBHtaqquLdsH3z3ttBBNinQ5gLtkQT3UnxQPoUTnxQLE36n1nka92rxrvdXa6VCWnvBv1"
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
