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
    "5FNyoV8AFMTjc2J5B4Vs7bPJXUfb9CWq3NUDZx2W8NnwvkxDJZnASUCr7YAuTfuNmA12oL924o8eEdNTvmd6WSN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qkyx7EBqTMnFMBkNdTPVskEhAjjSAULyiTzzWDn4QYPH2xi8JbN3ybzH82Rvr5PdRGLn3kNgKax8DN6RDQv6Ndz",
  "key1": "5fCkmi3pYrJyDSYvc479Wz9TpShC5tJrqerjF3cLy5Q11s1P7EsfWcYbafxvahC5XZW5VQ6jvaBBFGgNgkEbwPSP",
  "key2": "3F5kEHxtRDegr1LmJjVzBLQhWQk7sHyKaENFTGywrf4cwgfMzKT1bJAFzVUyPqb16wKmEGw2oKzVGVbuE9UVJLn9",
  "key3": "2A4UWTK334fRN39BBPBUe2xEq3Ws8N39vJapfu795UTEfEgFftn6spsa5Sez4C2Nw2SSwbfP3Htw8QLaJJpMm4oX",
  "key4": "2C61CeCQvs3kfRRp6aUco1VTYMatitvhrgNZFnkw76jaAKaAAu1YouB3anbU9n7yxPJn7cNVvD8Hmdoq5bcCnoUY",
  "key5": "3CXRjuHv3u4z84KjmjgGv4H87WY5pRarMNXGQ25nbiDnBbVWFwgsSmqT7CsyRoY9zr8CYH4htUmW8XNgQFJoZipw",
  "key6": "5w156qtQpDEQEcH4rbs9bqTbqdbguNGKjdpkt4BhaQW4SPmM2Yob3XikHLtdVMtncufysVut22SMWaT3rhRiCLXN",
  "key7": "5Q4YUoqTj3ZoJhyJ13XMaXUJGZjtXtxYFkGazGEKd9EGdM71fw5QeGThjfMutkV3T9WKnivoVGa4ziHnmZPjSFfm",
  "key8": "4TeJiXB3ccFBzTdQqF6Ve5pkZPG2V6x21cacZ7PD2bD3RVZqaH8wZ351uP2ktPPS4MrCpteABzicMcAdfDLy225Q",
  "key9": "5RkF5oLjZoAamkjvxAtVWtF5U2qTXREUR67EWX6MGA3KHmz6kTV89SjH2HyeJHVZWpw7pe7SxpgNJxSDc5wFYBo5",
  "key10": "3dyyEgefhRveCyzxmtDu1fPrkYtd7MA7rvjcGMuMuNr9HtVEsHqMUXzvdJGaELEFqkKLA9RyYpLYTZenSCBv4pxU",
  "key11": "57hZj73MfwZFzw6GTBt7r5TD3F4ZqM1S1DNMZ8xCMvvujmrKgibwsuDGRW2zMkDUj5esbhqAjdG1QeWDbbeEvtxZ",
  "key12": "5dJG1FY18Js7jKAdCKkTpFAsHZjQUPMgoEuGuxVRf5Z7ivzJSxqnUHaHtozNsxdBfA9KzM8GXjdaR21wgLx9cAYe",
  "key13": "2iHTfmW5BNqdru5pS12utRTPC2C9ot6nhfGsr11ZH2nToPKGLfDhvBCQVqRvCpZ4LB9hNKEZV2YvbSaaaLowsp6u",
  "key14": "63i839AmTQT65YVHHJB7ccSXd5dZrRmtZXUkviWQ1rhnAf4sfAh6pRHyJ6RYuSY2U1wAdWaVh22S5yrbGMNTUC58",
  "key15": "TsfYsrzXReAWtXAGPHaEYDXrfVAP5HhL3TYDQa1zsMzmHECmgteDAfEseuNrumj6tVNdrXuGKdqYHncQF83k9Za",
  "key16": "45acatpwt2uZMN2gpd4tZR7acUUzqEAevbmag4NumEEKL6bX3yAb9qBpy2hC9nwGED8DmG9f9qcpn7AYabxNUvTy",
  "key17": "5DbgZF6RUFotiBYWRjU9rCdMg6tF57efHnJqoSiFZkW83WYxfK96jgbmXgERDFKN67pMexM2pXFjwWc8VWNZiwVJ",
  "key18": "2rcc8A58fe6Jj932y4LBGDFRBJAqc9Xh1w4r2P7xTAe682bTWXAmCSnfdLwWWvKU3rq8YnxmWHWZYgVGF9dhtn1j",
  "key19": "4vSUookvEPnaQVRMHnRJtbBZgaoaRV54VpAC8GUaiboNRYYsRGJAKts2S4AFcTDb5La1BSv2ttsKNfYWg4BFDG9q",
  "key20": "2g4VnScEQz96E576QARFBiuk7Rd1T8LdANqCNz68Q9t7Y1yXWZypnMqk8fvM94XjSLFSjsJ5AsyxCniqkFvUDzsZ",
  "key21": "35K3ywoMTNN3mmKoh6KnAsnFS179xCr7X9ftVGuKVzY5rE7q16vJUcaKAJRpF8Y4u4bWtzac2yeLPfM6LHSP7URt",
  "key22": "4NiFEBR5gBt2WRKzCnorKdWTFS21nfHfFasvBtp5SwZ3JptPG6ehF3gw6SVFTX1Yxv3TJtha16abSPrgznoa6AmD",
  "key23": "gMrFh6QESdhzUyVS79SjG6sXrkC57ryah4JeNjJUn6iD9vo33knoTXRtVQS6SQgv9bXgobJVUaxoUhS6oGiZ1dL",
  "key24": "3WGcQACWKssK4VqdxHAJCfWbvYT54HL5yUkXYVACE7b8RALyN5xUa8aM36uzCYNzSLQg3gUAHpATJYQ9zTTih4cJ",
  "key25": "4xurM8psq1M78kS19b9oDuCQeP47BSC9txcuS6VUsptCJtRUMfoJCodgrnLNLgxTdnezLqoV7jFCGPxgDnEAUChx",
  "key26": "4KiBibefvkt1E3cuUzAT9gs8HAm1S9JuPKLpt9th7xMwBYr165m3gbSfDBQvgpZWboNZ39BVG4jFwztyC5SeP3Hy",
  "key27": "4NxDF95vHxzfHWFGsDhgB1aXjqG7rNAEmBRp8rLoBjYzEvv5jWydQ1fygxYpPBRvJDQtNFGGvAv6y4TQg9kC6CvZ",
  "key28": "5t9HDwxM5aho7yGQ4mmfEQhusQG1CF7d6WJfv3rdyXacBsnEmnCmNSt6vtGerGL9EyBeF4fpc4fyvddny66WvdNL",
  "key29": "5GsVXH4QRnPdspXqVoQKFERoDjNgqbviC6j7VeiZnXHz4PmKGNS62tAP5nUHPRbSE3Adk9oub9EthKZxtu44BKez",
  "key30": "5qTShBHcvZN98n9SBu2zppc8C621tgB8gsMj2cxz1n4oMHrF81biV4jqsSzxfG2CSjnFzP2kX4JrpZz6Kq1eMSk6",
  "key31": "4XiCvL9KbdPjAuQw7E7qL4KD9yj3bRgZvzR6zrpRbNnGaXoAotVQRgUBBqnQSrYeqxH73rXP4uKAUwKDLTgQDF37",
  "key32": "383JURwayhwEyP8TtQjssmVQNVgcpt9N26LbXobDMasB1pVsu3Xs8QthNXF1mEak7RyHA4MaDk9sU7DKoDm4Ezcn",
  "key33": "2Shy9AMKwBKpFAEEDSQ7AtCXS2bFpcZPDM2sqPTahMR3KdcpkJ3Uy2evjE4FzqEVdrey7GBm49HifgBoag9UpDLc",
  "key34": "HtstbBe7MjweYnfyahDPVZsMpQzHBvy6w1sM5VxpYbAgEuP3zqdtagBqFkURgN1xStmxvo5J4t6byNCoszRFWT9"
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
