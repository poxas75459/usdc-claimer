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
    "2cxyg89Hq5SeMZo4bMWFoPaFb9UK9m8NXHTPYYiwZSHEXbYbdQyu3KoGhXrG8ZPno8ZMbSA1QKfPpQXv2p9koAC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31qbBRXHsWUXYfpns5Ww9i1FR3bK6qU7W6GAWdVZtDrjY6ePGmgvDLCjraGiS1W2wXgDyJdxpZQ1dPWRKtuv19Zt",
  "key1": "2joAEf3CtKb1aeFM4zfGUrWUqWdJDDEtcHAuGScVC9eM9idG6ByL38woUTpgtRDp6fb6912VJg8cbHnrzbG45w1D",
  "key2": "eS8DidfBFenXinRi1AsStSMyP58orN8iHt6Dg7dahqM2ptWosjWmaTehNC4FPRFHwG6UJ1ckkgygHnPBVFjBxvq",
  "key3": "4ivNrLvGHnv9aBakSqQewMp8y2jHSJzhVzb4E4r45EGEqdpFCMYMWqc6pms7qCYqFYWsuQ8xz4cU7KagejneFyrM",
  "key4": "FxNg2Bjeh4hjjihtdaNXqTsqMHPRiPXC7MCkn2LPcG8b8vm438V3ooTNhTtn946rg8sNz6K2V3SLpWkFeYs9tmS",
  "key5": "2WFUmsf9BhQSaPDvHnaJRPmvT9DcDbdiqRtdbEyNyaoLmM5fM3d8S929Wjb3qDjN67vvTUHE1rt3yAah67p9FdRV",
  "key6": "3YpY55BfLp3wmzxVQCo529cBmx7C8mS6uD3YWLgR6qgWCZ3dUPzW7iABwbkNqmsCBc6WXRPfXTmRurrigT6ZD9SK",
  "key7": "rcaQL3HqTVmeWPgWRYhjHMcV5ntB3V1FiMTgPVu5pngrzez19iByxsC9fjf4MpDaz1a8VoqZ4SGHdBLyjqJtNiy",
  "key8": "2actnMEWYfrGppQE9aQ9kk2VvZwr71565wfJQFobMLHdP8Ebzu8sG6AcKf5hbZypGQBoteLSVtbycyvBnDJof6K7",
  "key9": "4zhdewvuDBPxvDUpnPpjci3h1BsTUEuEJyva4qy1wqh2sajBgxMiGgjbexBiLLyBjoA4bgjFhLPtjfATtXL8Rqk8",
  "key10": "5U6gsqmzgSuFFD7DssZJaV7LELHiCT2hsSQ5srvVSMykC9DNSjBE3B5eu3hudAtRx5YQ3FMTeeFCSM9tLyDdxWZS",
  "key11": "2iN13VdczjGEvr1VM7w7wnqyxRoggXym2c2ELQzoq96tBr8XLwVXAbbMwHGroz2ndNPboqeNPYwGRJhRMQzJwETj",
  "key12": "2tTiMgW9nseHNnjeUGJM69CnHae861QHJvxVkCZRNLcZhYpGDth7wNteC6JRcatfCP4WvvhvpV2uuCkMJhfzrRhq",
  "key13": "4x4rWpwd6gVDVGudExcELugbK1qeVY7V8dohLM41VDG2LnT31nCveNGzjLq68afXxbaHnqadpVwoo2tuc6GUFSMy",
  "key14": "4QQ3SUztnkrR9pZ5MzTDmvFa1kv52BkaoAfJ5QEx9eL26t1WveiHZnNFuedkNEaGTJqyKtCmkrFTW5uYjceBTmzR",
  "key15": "5pK96DtKsJr7R5ULhRuXb6yXSji5FAWnQjDcQZvRb7cUkUbXpcomkhVNiqnUez9ufhrcRE8RpUiVwMy2aGKd6aus",
  "key16": "3JjYQSzZFtTxfZ6gjvRHQ1fZqwhJuvVTcztrZxW6abtKppteBsGGS8s91EHQLLR4GB7enMJQ9MRj6hJCfqg2WkEj",
  "key17": "32XUZfrTbmubt5keLcj51mGr52RgVnc3htTeivboQ4yVYUVgrZpNZvZG5k5us3o31MTEjeMRQkJKW1eCAzuQXoYG",
  "key18": "2WnCxzbNJ5yfB1GS2F5KZRv2JGP9FukGc7eQGssTARFrLtnbVyso5toeUxSpUkycCqUCS9MkewkLFSrkHgsUToVx",
  "key19": "2JtFvxiq3zujhFYnBSmV2UEfQMitEfsmjzVXGSdTzmC9hX1jtbAgpzdrNd25hBMkc8UaJTTnkpPyyixSbpMsRzZ1",
  "key20": "5VSUpa84VYHRtrpg3SNDndxuqtnsBT2tZ4TmteiYgmvFvuP49B4RVo2k17ByCom9qntJaMfF6rRiF189tST7cMTE",
  "key21": "bS5R4dpyBo8ytXorUEJ73vL6BXkMikbg59kEsorf3ZpyaKJJ8aNug69rArahH31dDCWtgHZwgJzdyRzvdm3XhMa",
  "key22": "3dqfTGrvjqiB8asTKZHkzvxtne89DV6arLqJsw6FhbfvD6ZQj4guwQ3zPSmwtUmCimaAk4PVY332JUjKYr46k4Y3",
  "key23": "58H6wEDS7Bg9ehw7Ec6otmxz9eVehngex6gcA5ubiNwGPCpvXh7Lr5Qxkf8ToQKLnnP3vbySPbCWAswe3be5FEme",
  "key24": "4UjTWamUgwpf92YKvXWYzCFqRh2TtDzyXHAfvsNR3yXX7NwNFP1J6V7Azgeyq52znvFRzdRsB4eLQvnwAuW1NbFf",
  "key25": "AsnznqEPipM4tgiyzb8nf2pNAd7LpJCBsbpi711gAjJpjn6XGXR8wxfQgsnPteNPNkCo8sFo5oMsyBgSv9ydQbe",
  "key26": "2tACYeCYjm2xg5nUyXQ1PgV12aJaSqqJLdbWdq5zzMULvkTkRckKUF6WLRzhM3h6q5pq1Btch7inFyvzWFSRy25z",
  "key27": "5jd3VD3HtXifdi6X1yQiZ1N2RznF6jSePwWrJCVW5gwnxAQaUu54McuVbnDmZHpGVvhWCSTKpg15shWLowhe9xXF",
  "key28": "5aKUDsZrgRTBbSsXis9mmyNpu6UbN4ztAgsumDPQzecZqKqGRSB2impMyRf7wspcWCjriaHqwbE28iXFdcBe2Trr",
  "key29": "2rQRMFKGhHPYf5xYfazdtARLGpgXm3NsadaX8jBAcfePPspABXpNWgLP9N2xg3g2JYZ95NnrViy4qZvHEtHSSrsn",
  "key30": "4dx4bJXRSf3CcobxdGqxE5j7F61dFo3giUUvW61Tn5c3Y84apVKErX1EbMJ6XErqNV1rjmCVALSZPPAoyuQZrQwc",
  "key31": "3YvkrVu4wN1PQHZFKNcoMN2RUQA5xnBcPAqUxUb7a64jG7GP1dVFu9sRKFN3ZB2GHi8KUe1D8pDNaKcSCXLkZTRv",
  "key32": "4bSDPh9mAfPUrDvSyG14aue4SXuCF6QMNAKMUhm6yVk4ndSJn3jUo4rxNuPyo4tCTe5B3dnSgyjkFffzrsMgErab",
  "key33": "4AUATPNbj7tiRxxah6YDREcGxAXo36dvUVASAMj3vXb1GPx1kE3F7XbiQpnock6yjZi59PbXEZzC3S59NdmnJgQF",
  "key34": "4rJ9rLeytvTWFi3v4TcoUbofU7NZM5gNx6BCkBMJ4ezDM77PEmHfiCpE3Fc5j5BUbSSE7yWJ3zjMLxNo9V5kAV9H",
  "key35": "3rWmrYa9eR1Ek7DDZUZZEFL6gabHM5UgSSg3TW5gDp1xtVqBEPpxMsErNkWbF6VsjXvVChscJwmP6NviHbhXFV21",
  "key36": "4yfZyjNJ4vtju5ToH3WuAhv7usx1deqES87FCbybtN7zFy3VWy276nWiut7MFANcZPWc1dbctFNQdEMDCQbtXB8e"
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
