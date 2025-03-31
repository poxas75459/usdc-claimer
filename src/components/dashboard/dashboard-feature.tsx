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
    "4vTRGbHVVEz4v5u7BfLDeALwemXfQALHLgdPCRUVR1bhRKhdENc1YoMMhFSvEiDFUybxU4oYcgD7zRhWxJosB7BK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qP3Tx69kgirp4guAbuPzX1qaqkdGd2doCUPDmNKRqnPCqS7fwgDp8roADw3FvufEEiU3A3uThwZkR1TRw2bTEsg",
  "key1": "3nLrZXfpRqsnZZvsUnEbSa4CysVjG96fTowoaBDcRsDJmjcFFrC9C17aavvBo1xrBxVoRAzcVWMHvACTN1CNkWL4",
  "key2": "2NFkjp27d2cCFXvv8zW3sUwr2jJ1U2vi2NX99vxW5oKKRC3fZFwD8YeX4wVfmuh9ZcJbfn7EmwxpnSLSpaXSxtAr",
  "key3": "JAcadRxzT7NoBdB6UAPoFFrbEAGGhrtsJPQ8dF7yoc36hK8e5tP1BKyFGJxykoq8eLGrzdUHPPp1x7HiUKjjxDr",
  "key4": "2tYgWhD995M91pHaoaM5CsvKhkngEgafwuSX6aN8NZMuTpsb5sDN8etm1eD854a6x6mjdyvrfAfe9TXxnfqSzBwc",
  "key5": "2rLa1Lr6jSnyHtdhf8gqtewauy4nxQdosP2kG9CJMpJd1Vfg9NGGoeEfPH64PjZu1iBJR9mjzb32JaRTxj8YhKeC",
  "key6": "4LhccAieCh5k9HZXrW6yRV8rmN399ggJxPgKWsCbkmDjjr7UHxai2skE4oG4j9vaXzpPWo66ixRjeng22Gx71mmj",
  "key7": "5dSEfofCLUNVTCWqyhGcN5DmSX7ojwuTLMzxYK6RvXPzynG9QcaPe9DfGffNzvuhV21LxMz6ygg6FDYMzYCrFz7y",
  "key8": "dotQC2emgCWVPiFh7SvsYBxMjLicv6un1N4JftAsLsdKqVme382YKtmf56UnnX6fVRFReJfXKnqkiXzDWcpjd8E",
  "key9": "5wxzTWpLqEH5Ur1LV4ziNBuZZr9M68qtRYY1Hb1pVqazUYPL8aEdVofC33EijVpf29VbzrWrCBQjiPgxWYKBzXMz",
  "key10": "3WanvCJC9aqarDsirqbKc5F3c7tn6nHsmSdUWcaesBTcGhvVmyruL2KH5H4W7Q9ntypYaeXkGM5jtrCBPwJiBaFW",
  "key11": "3ZtTjRuCMsdfS4NXU8Uf6PMij1h8PpRM7xgQ4S5SzMVP5i18tp7ywthBsawjZtCHpag18ycAaLcErP6EWKE3htfg",
  "key12": "od3KqyFSc3Hpm5RMAW28E3RmWtNSED6TrSot2mmUzMXQgSSa8DZAABqTRCYbYp4if7NiH9biiEvtgiXJ5ago6gt",
  "key13": "3LhnJNfwCFvBL2aHFnWUtfJiaLXgdqwhHX62J4yGHCC68HWMSB7RThq3H7bzjCkCPiSPRvLamFrCwxxFdEUHM4T9",
  "key14": "3yv6SMmrTToKKL5WYMCDieDA2MSTGrJyrBTxLea4cPTeR43KAdqq7rRDs7tA8y1ZrsyhkC5GBKgr4nFBucvHmaUX",
  "key15": "52hYDatq7JVu16YbWXjgybDvTkrX5bVnQmYVNsiKJUWsfZM95y3QShh9RUExKWpSDMHmVFa6NJdHSMYuiTfZzhs5",
  "key16": "2tN3JriAcRCjCVAAiQQ7vUz8bnojVAHYqGz8Vozp24KAq8RMv8WQ59b6U24ZxBE5SgZbR5B5AjigxibxajdewwcG",
  "key17": "5trzwtMeejngsUyrZGe9HZAYtcDvt1yeZuH123CFNbYWPFUDZF2EnhRngffrqgA5xeqXkJAiTEn1XnZqNqSvaezc",
  "key18": "461WcnGP3UX3jz3DXFarpeye2ZfZmRTdLjSrHZKY42b33s4BezpBZWizQA56e2NbLZJsmT6phDdNqDRDBLoDyexe",
  "key19": "2ykPrNYDFvx9P2URh6agbnwksX82xgWLR6k5xw6WwMyBoaLykvqv8yz4bPrg1S66rdXyYtu5YN5BUnpb9gfyoY6o",
  "key20": "5LHzSmLRPS77Goyv3XcAgdg2Xu6ZNeCzwg4WPmqbqcW1KqcrzhZQMaXfWsy1gyHvP8zPgN7xN7hZC7TCzsE5rxQE",
  "key21": "3SeaHUapqJuZef2Wk6MKqMzLLAMjoyBrqTm4M7dC37GdMqhqMfShHPqMnspRPupiqFic4dGeKHkzx8uR9ER5ezJc",
  "key22": "4rvquNcTxz4BaCwPU9kSwiKZnTTk5khHgRrwhL2KkGXJ81DKy5PgMPbM9REfKyu6iUGRraMCB6j8ogwcZhmqPwf2",
  "key23": "31kTiW41ro6swKpomJA3Ug8WYGmwGqx3zxyfxmD2Q1sq2oBpLtJ92ubNK2NbXRGeYZ7PdUnbotKF852burYoqU8",
  "key24": "54xqFTkfDjztqiCxrir7QLJBx6tqFkVAE1pffn3DJWRAYYNCwFcgYUiiPXjS2SzWkCd5TCGB4ZeYC8bTLzvTQETs",
  "key25": "3UkBEjRZwekSRvkh6zHhybAs9JcPZ23qVy17ei9i3ip4Mw1wFwLB5QNbnGro56yxWxoevMi8LNhBG9V2ueRjGK4C",
  "key26": "2mc4dCu4ciu6eU6dfGoXwQgAaRyw651y9q8TZyDJr13xGZYxAX5cEa1zhucnFZjmbSkJL9HvKKYvicxZXArMJ15A",
  "key27": "4fKHp18kXM95QbLTS48f8Ue3GXZEsBwAhBsgjqGAxXsGb5eKRSbAipCCwNFexSJsZnHvT7wMosh41GnKvthEZ5iw",
  "key28": "4vyDEv416DQpCZB4Q5Y43xY7dgjUpxVdznaoXda4g6gzsSJqzqLKhWqkh8xRVjXEzqhkrk2VcpGDveVndq9wvgiy",
  "key29": "5HNUQpmv8SpkamnbXbkUgp8C6nxe4ADHQj69Y4X7TvsJbKyAutjVLayxuLx8daZj2gT78mePKaJkXPEdgRikHuBg",
  "key30": "4MUmMnmGjoo7W4gkhow3jvmsKYtw6ZqKMtiTZKXwrfaaQcJfFLMve7vi44Pv1iGEHg3oR3N3wSRnXPbN3pkBtC23",
  "key31": "e4Hx6caVS8Ewo7QzEFiaCcLHv6GosPyK4vHS2qAZArmeciRRoGpEp4iD2EiadvJtiv1Y3Kx88eya5N1uL6DBsh5",
  "key32": "3wNquFdgydnB4pPPbxwZy6kq8wQjnaRtnSo73Ujm2YA6iqVupgdMPUGFbq1NonPegFrSQDhz5DNTeu3WoM2bk5Ro",
  "key33": "DzUEcZUR4H1WhrZRPQCTv5vvafUU9Awg4KAacrWx6nGq4JpAZYVmPNe34JTSGvsELuo5wa2BkYs2sAKbQGaUScT",
  "key34": "2vGdroc9YoZw3ZprC8fDegqP7GBxvbdb9mbYw5rHiABuizLJQBy1H6m4Qip9wpamP3tpxNzjkr2QEY6TsshH5qLy",
  "key35": "571kSJm76QBd9VB8XmJBy1QVNCNfU7TcAFs8mWZnYWjh4Z5GyerAG52bWnmM7y7HaA6ewJP4USphMeo7QxFzFzU2",
  "key36": "sfM2U5DepBGj8sCX3XcbpuPfT5Ad1rQ7jr1b5iASdEoM9ehSwFbQEDZKLwVjMBAD9nZMKoLc2c13ZeeYFHvu3ui",
  "key37": "2ow6KSZrpKFaHcnPEJUfEK8hRKwR8PQ3tLKejnURAEFGvVWcfLEXYMbe8yfYU9s2CqySRkscZ1m6rmB64uo5UggH",
  "key38": "3T7UmvNmme92SUPG34LMXnHcB2q2nNRZxxiUuDj1MSyLJ64qaz3iSWQWRV3gmUpM79mz4Zr2BYzJy6KDx1FVx8JN",
  "key39": "wJUPXBxB8eifhD7jinXDDioyE7iC3r4wDpv5AsBLGMmKUCP1jC7TrsnMpZPz442FXaxmu4bTnBCEcCs1SuPfsww",
  "key40": "upqHdcMaLwHPsBSN9zTjib7XCPJJGDiqoRo5rHnmAVaL34MhS4cZ2Lqdit9VYz8G9eftCsK7CEqwJwnozatqqcU",
  "key41": "5hrfDLa8XFpR1eRdQvAENZS3wx6dVMBJx9622yZP9zUqjjWV2UAXew534He6pLrYmFnrwjr4N45hf2TMirnGggMa",
  "key42": "3DK3eVLvrxoiK3LTfDp8fYtAmDKm6MdKX6BXbDXuBQZNNJ9F6itaN8rRc7xj5UpZZ81ht7A6seDGUUkPbYEfoKCC",
  "key43": "TdpR7wVGsDMYPt6As33N8aSPZzpd2kttT1Pec3hdYNxGAH71epNULsALmrQHXzrNpmzEX9nMyQQocSK338in53R"
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
