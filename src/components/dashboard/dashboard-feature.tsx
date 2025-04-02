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
    "56LzPuBWsgEuobiBMHaG3ezEFWTHSHgyLtqa6z2b7kVYpQHHhjHhYTDnPftN73ZAnBJTk3fpzrX58LEQCQFW93cc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xwwY9x9rLsESYqMXP9Vnrid4ZY8vKhz7ANj5ta5Teqq6osYdhb1PzmC5ML2KtWSL8zxnp3Ty6hufD5N33HTnyHM",
  "key1": "4owibGM2daMQW3nmaXy4ALEnemABjYTxPfTb4DThr4fGAUfbbVBBbaCPwBqdp4nj8PwnuP4r34NUU3nPsqchAvuL",
  "key2": "2ChtcbEDgs9dCyKu8va1unTx8kM91R9AhM5pBn1FpV6SGMyezb756vrnymotkhQpLgey7zsCjxmUPFnYX5HZaz9P",
  "key3": "45qEfbRtUeS49HddwZLWZCxQYXFcU3cH2Li8iE3BSrxgdeWhuB17UdvinL9gw1PT4zpmPgKWEYYTwUEwzVhWiHQc",
  "key4": "3q685juChJFbezbjWR8z22kuQ55fFEMV3Yk11uyKKW8ocwykfyd74HQanSr5Zv3gbvcWxu2HrmMaD2FagrzFrriQ",
  "key5": "8Uqgukt5LY3NZGPQhjh6CnFc3GxHnEFXTyNJKE7US7LDaq528j4DRLuKrnUCHLSVRRoBV6NrfYehK5LZphShVFS",
  "key6": "ysDUtRmBL3gQpXBZ3NSWHPJhRVKXeMrVeKky3ccZWwkRPqBCUUWzFwd8x7QN3Xh1ptVigcDD5TvdVoQLnSwzBva",
  "key7": "Uq4LUn9AvV9K7Du9nD1PWYSwEKiLAiWkxGgK9SbPb1qh9NDWtLU3tW1cU6k3tUdVdyp3q96zZbedxAwq2TLUgkP",
  "key8": "2Rgr6BzpVJGDVWVXZZPc8EYiHrp5iyKyvhpGpZMauMoFMu3j2FgH1sqfuXHVkonMPyUfeoRiVAFULgqpHeHJpoaa",
  "key9": "2TK42ErXHega5FCScQcvZcPny1gpQ3TnpcA5Zu8kuauk4pYWCSXRCSj56GQQuwJKZiw3mGi6QcGyN674zUodLLRN",
  "key10": "3NwfoLwSufJw6J6D2u6TXwu7iAq882ff8rGhFyv1Bk1cRbuNiHCPrHXrLLYB3snk8hnRs842sixGBambggGiY3Ya",
  "key11": "4ieSoFfMLNoP5iQcEkjGMmvX6SMEgcLTTyT5oYH3kmoZ9d7YBvT561eWhqfqmTW3vbZhgJYtq2NYpaMFXm8GSFnC",
  "key12": "4soBpHgjSBtjcFDsrerSrkbngVwMeiKfsa7ThFkU6hiaB1hkbCW8k9CCwdp316Mh6JTCePcqmac3yL8tWts3DEcE",
  "key13": "2eNU5Ai21FfzCVyaRQbAPB1TxQdGbTSnP3emnCxXQTkuSHfce38ZN7oqWUuKy67VUS6JcxPZrXXkjAdja7AR3rji",
  "key14": "5fiKf4yijGVmqcmEMStF3Z6btynYw7Xg8PQ61waa5bzM5avhPSGhxhcy3VuZaycv8zJ8A3TrkhWZ7duDPHj7P4mw",
  "key15": "2GZmwJRnSdBjopy93s9EhZHCQLxDR4eQ6nJzVCfz9kWMHBoGoWzdhczh1k6B9HQGWn6y5VpkhgLcgJPuLGgUHCYX",
  "key16": "4RgD9d6J4vng3ZHfAhmUVyo4zHj7NarBV8bbNWKEvFVUd4dyHsvhvPsbVBEThbYNmUUdt3B2UvD1u86V6YN5uzGK",
  "key17": "2ZkajCgsdwfRb9i3zCd2Ys5PgUzFWWsc8FDY79Aze7mEUfdUSnWtuN1mBLCg139SU6zZhieLfS7Lp1VQvZ1JaGhm",
  "key18": "5Qvz7ora1EK6bm9WVsZEgqRFau8nGCVcDfwjLsb3SPFtDCaNenHXnc3br38qxy5tKNGUV3vCsCo2SBchk9gfCSvg",
  "key19": "2NwQYeik3CuhwZEprdskJGCpMNWdV26u7sPEtujdKM3o9iPDYyqNn7D2NCftMKcnb1oobhnZBGWYHPNi6yHW71B3",
  "key20": "427KtJZ1d7x2SuhAUAxGhz6mMB7GftvGomkcvhJsLaRam7SqNQ7NVQ3vNU89k6CCZkK2rJK6VG49qGaHfhxRxvrN",
  "key21": "5RPrstNKy2qMjuxDH7FcPX5ojYHqfQbiEJTG9mqRpVdL5Ci5F2Grd7eidHcVpVJAqyESCXz6wYLvcak9QXkXYoeq",
  "key22": "4LjhsET9TuoNnsocdYZi9Eerh15EFTS8CkR2NZrmzk3wCarFQv67AdgfDW8eJf7KLo2h8qvdMQK196QAMMGbfHAm",
  "key23": "hivzWk4KUNJvzjTW2MVS1jUzRskG3F7DfHUVnMGs3QTH33YktAihgrTgZMn5zDxDVXacKdRnqUkX3mm3aaSLgEs",
  "key24": "4RUcuGu7giv5tyWhAUF1mmE33NdD7uxir9BXNeUZzCGWFHdgGhvMTVZeUZXPxcgQtXesLruV8Cx4u8AWKoMGyh9w",
  "key25": "4oCQHKCb8bnRMStUYvJ5XWJidgQYQwFFSQDaA1RryxE8MvEmHBgdHwS4XpJruVf5diTVS5MqwW6yLjuqMBconPKz",
  "key26": "U53F2tdaDHcKaeswgTF2YZGVdKWjEz6dN3Jj2Xx4nojb4b95kHmT3ZJFZHKAawwNbdYVC4UZd2yc9TyEtU77B4L",
  "key27": "2ZTLd5zNz5Mx1mujdCaCQuhX5Jpcc36pDjjbVJYSA8pdXJ82kMJp7GH9cbniAoYt3Hf2quTRfQNhhRUyvQ49s9W5",
  "key28": "5DvcRnHhcMvmLasx5TAEn54vV9fHJ3gWTqZP4KwGYrCCteAq1ZXXFxwNF1KJLP4tHd8vvZ5UUdjgECBBe6qm2M4",
  "key29": "3qNps1qGdAaoq5xPivTvJwCrPGprh5h1HRuKPgYMT7qNYVeeK19Pcp3HqteKpQjRiUHiVwpNAPWgVcQo79iSZUPs",
  "key30": "3b6rwVMGZd2uDevPtkscKLKmwWRhxXHKpePoo5MWp6TXZ1vPgUpyfbhfZcVKdG4RUht4ZZnBYgFuBHNFu1ZKGahL",
  "key31": "3EFq6mVmtChviCdHymsMdRTePsJ35FaLE4d9HHauhbdi2eUAuqHU3injzDGDpofg1TG7rRagaXPPw8pF7A5Q9FxG",
  "key32": "2295Fp8fjVyfdRX16KFkvjxg9EvDp5KWnr57P5dyWidtqXZw3K2SEB7tnDqbgZojz4WWTRf854WSs3djnadbKJhs",
  "key33": "2a1mu7KmrCFWZssaVec5petoeQ7y5v56iP51KAKEvjxVtdpP6wbp9p4UgZJugph14doEu5MtwfnFSUvLTby8EgDu",
  "key34": "4GiS4vHjLzonjYq3wDWzUu1vV4rkX1gaUFt4hUcTsT4ye7ooH1k5sWQfhVtDefD3NpdPnStoow6gQoCgibMSUZA3",
  "key35": "5UJ3W6cP5zTag8qPJkvjB4MYLW3iNXemysyZqvT2mf5LefSLo1DM1ZixxxB2aFXWeqGRh2WXMHzZ7h4NQwehudBm",
  "key36": "4hukz6f82zmgn5oKf1v2NhkFjupJbwe7cS6XgasGVBok9uoyLX4D9uUrym6hJwakp1tYa9VK4LqkiMQ8WayAW8VW",
  "key37": "3zmgTAnCnoarBc1fygBVic5PEHPt6zHnso6PEqckF9vGqXJmUd8AZEFoox48ufdp9mT2nW6NdMaqgHF5Pa4enmmi",
  "key38": "5WJRoKYNhRmPUTTpe2VTR7bsvusvwiatWXDWerRmg3cMKrJQHZGp7CrhxJb3LSD3T7hfEML3S5AenisTZwPYJBc6",
  "key39": "4VH6F49MSWdQ81vu11TEev6MusCCVM1KDySUwiyRen8aLitDrENcRT36iCTvGef2uNxz3BUUX3yA9qm2K2gGN8Do",
  "key40": "3AtXNq1bC31FTddMaXc3osVoJR9WkWz6nHo2wmP5zLDePwTYTquvwCFg2F1ekRe5sVcreFKfbuDYBWuZYCgccHyi",
  "key41": "3nc1te4Qx5xqnQYAn3j7YWrEEV29fdjXR4Gdeqy5rPodpVbosKBgaFS6kjopyn9xBSJ8gAcZv8N4xzTFtnjsz6Eg",
  "key42": "5QT53CiGXinfz3DMQ8Ri8NCGgGBnyJ4CXQrUD3PC7iDLgk6117rpcdk7KGBmctyp3DzSzFkJEKDRpxQcKGuiKYyd",
  "key43": "5M3NFWWRGRXLwro7t9GQKu9irHQtm3Cf4idAQCfpvJpwaF4u5SsjcJm5AXmgQa4en7ye5vAMPRYtFcEzmp81dhY4",
  "key44": "5tAu3giUcWwBdCKJ2wLYGuZc38hHiGTFkzwx8MkUCYEmYPQM7KfGHbNNT5FinXWyoY5M1xmww95e5r4dTinVQV5",
  "key45": "5jBN8y4o7xytXQPEWMUpxkDnxbi4R2MH1aqwGZkR4sjJsD3gmzDtmYc1KxzsEuDVpiJPXwSroKowB5ZvWGSDKLjB"
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
