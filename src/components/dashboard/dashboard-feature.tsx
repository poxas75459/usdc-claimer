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
    "4xzPaZdnRQ8SRUHhFbf7Wq5i9X2KGHu3asSMRYQPLymx7F8sSqwBnQk4KcodWJzjsV57Usyg82wxSG26CHvGi4yM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21oZNrAkCjqYm31dd2uU1XD9eo9eTgYrnBoCfm2Cdrq3X3NSZwZr3baTz7S527zHP897W88DmXT58QFmmaxeETCN",
  "key1": "3z3G8E8yimKMbK3yCghySFw2nqhwrehRcYKQKn2YBFHJn4vSoD8WHDkoFvKTtsPpjm28Fn8v6paAD8MZTPW3L6P2",
  "key2": "63rmiAkLmwrBGW4o8FsWrPCrnwhofSvvqFjn1cCidh41EouFLTQ8f9sZ9UjTEdSuzmw7zLmdv81b3vNZUiiV3gZa",
  "key3": "2aYVivjVhJKFFHt9AJPK2G49ppVRsKRBQwN64aPGwVeZD6jx7XwP2oc2HiSRfAM8NABBE7MeSHThMwCcMsyexy8z",
  "key4": "2iqxjFDdidsu2NP74Qco3rWERgCMQZh2Jr3HahRBnMjHAvkFfVcBzoJ8zUet8V9nrUf16JExjrEV65g18fKzZ8HR",
  "key5": "5Yv16qyApsVvqR8eRBM2ZVqbsAeA6FRsZAmdW3oYQwxWnUvGRkhXsc6GuTyE7dgraqjiwb2XUxpH3yyiHsXb9tRE",
  "key6": "D6b7VSvncDDd5JENSHTiqwR1BoNhqJVvt7yr3y3j93avNzaU6hizKYkcrSUwi4coRdNzAbSpdZVNywCcH8i5ywz",
  "key7": "5PgYMX2R4AD3tbUYG22EghGu1x2ehgcF9rJDY2A4Wp4QCGX6LaoVEbukGZ9w73CdGBUKegpKg4zBd1E7agRC8SY4",
  "key8": "2S9CN9w6PCWDsL5gzr4PG1X46JU5riPSHbmqeBwkeEZyc6tdPjdbfEod7STb2GyXTuZTZ2fCquWmMkZyDhKdaNiy",
  "key9": "5yziDFezaTa7SC7PmyPcYDWz6xPgD6GXvS3ayVN7VGdVUizsY99co16ztvtAdzkC1FYJ5tcMXe96BUpmKNAAYezK",
  "key10": "Bf6BeJiYgUE1F5n3yPXWRMq5n2Pdk3PTvtiSRyTpf4kFYB75VK94CP8t8vgRAnXCUxDNi2Ey6MBtH2qyW5gycBn",
  "key11": "ZvWeRKv5f38MaevsiESFMsnJvmD18EZKMcv2Nabhe3ZHMrTP1TbeaZKFqTndEoFQ4hAcDaLjb3P7yzkeX6Bn7KH",
  "key12": "4Nf7GyywyTtrek2icpdiuMWzojr8kzU9gJgGrryNKyBHk4rDgUPHAkHFi36n8SF9tDdKgchrco3EjzHSbZ1oSzqf",
  "key13": "DXe44sjxKUEkkiiJawcHXF77iKN6txucN4ib97BFRGhJJYkGUy7tUwxXUZSmqVWbx2yhnfDUDSQCWWgAtaSUUvN",
  "key14": "4HJXXqPbjXmNwWVQVTWTs4iJsGHZ9hAY8fPjuLnkRwQxoJDeRTAvH1hwGBcgQ6ua6sM3CBCLTEhFNuEGRtP8VgjJ",
  "key15": "2Wot8Kc3fRui59Jqkey3Y8frut46TbuwPS4iaipKhTzqkx1usAYVmr6KggS5F2JfXUEuPTBqy5C8NjXsSuYCS5nL",
  "key16": "5hBqAdaUfju431D7j9uh4LThwPXkmymkdfKTQSBfwWwrFCeFLC7ZFdo4xyoHDtMifmFXsvskWTmKECnzWSFUBpmX",
  "key17": "4nE1d6ngLWrfYonH6cB2kt1M7BJ9ts2Rs1EfJy7enwAaQKqCRdRXmwvcRdCcboyrdvRAw9s3tiVbLNmsEbYPogr6",
  "key18": "66hD3dron6pRjZT9DzLgeu9z9gsr1nKAAWvqehSWfgD6YNt7eZdEfu4iq7oGcDmPQGxx5VDeYhnmEu4FoWJ6Swtb",
  "key19": "5nn3guqfa7SVD8i153CgY4MwERtpDGjLGbBXgGe3U82BYt55tUJRqmzEo8D1p8ukySnxpjHpHj66uZCRjMDRA9R2",
  "key20": "4EWL3ihaoqELH5fLj1hL3u2b8WwtKRfjPfFwm4y5yZ1nYzkcLGEx9B6C9D397P2sTPGTQdnhu6AnnQ2UQ221YryP",
  "key21": "3pngKtRkRCtn5KmJ8Ch4ewbb92Q4Dt1x3vGWJGqg36xCNNF1myk5bKrqmyyAv4ZBc41ifY1A8AvarZGw3bYpKrCM",
  "key22": "4m7tK6YZU4pw6KKPfWEUq4KC66DkyPjtcjdZHiSa1XgTEDCNJj9dYDT8es3PA9hb1yiFFhwjLyf5MuGEaqukPjgi",
  "key23": "4wZEatjZvtgEtbaPMjihBWmP58oUWghLnqhUVrAH9zEopkea4EiVAYZKAUuq9GWi9NzCrTykwqNnZkS92bZ6HWXx",
  "key24": "3YypeDxZn6CmoTofmeCJNLEfjwk1jn3BgUsDfbWWDAegysKgtd6v713MeiWLBpCFFYQMtg1WL2fpsv5oGaAci6MH",
  "key25": "ctv5PCapHMaXgQwnLunn7k4uwZT4ocrJ59Fgpv7KDL5X2276KbAdcwSk381GRicqCCjkjjkvka1x6zicmMUfR2s",
  "key26": "4mddzAHcr5RrMCQZuUDX1XUwpqmscczsFBjMZzeSqnp9DeGnqcqoUB2eZqFHRANJ3LWpHVLX4aQxjv8V7wYpz54M",
  "key27": "38pNVriNiE65V9R52g1S4S18Y2gNRvBXR4cPWfjiHNP96RCCF827EY8fobw3b1NRH6niWsKMqBeFdfY2MGtZUZWv",
  "key28": "RZb93cUykE3mWsoktwpmcaKPdeGMkxvXR8pC2azK3JoqmGi2CEiGQZXi3brCrajUh25qjt7RorLr7BwHAR9KT6B",
  "key29": "3JBPnwjwQhUPibPHkZFzLkGUqBDxvk8CVBHcjTmgBN4pbhgiko3kfxKYXxr8XNAcHdQkCwyfFhCMXJU5tQGAbzyW",
  "key30": "45Cwb4qSg5ptW9jACd6paYpgMQU6ajacnUBmaHf1rMjZFDb2nDaLNvThZkgRhUaZh5wPbL8BnU3CvrBy3DURvhBX",
  "key31": "39wg8jcUAm6mFmxBsVucz6faWRuJGL88TURBVEUCD9XgncavCCAdMR4vf6ADUBwVpAM9V6RvqrQnXDhwPpxw6euL",
  "key32": "36cq7HgBjb2hnGR5rzhDVsHmFg5oDxfggF6XamGjTdRE8U1VtDzoaqumvVuMZT4mmeJn4UeHJqEHMys66fDWSduy",
  "key33": "5YWxEsiCWtPtzZEeGmjmBPivtYfmnRUeDQhfczv8vS4svWUmKKcBodx1Uzq2ypHyU2vEcBV2bdpvApYHTZcsE7vT",
  "key34": "3ipZckoH1akmceToSwiApBgHQ6mYmQpMKWHUQJzDhCfee58dsgM3Nybvi8L2UEfmF3Tend88zY8SG3PhtJXDJJKM",
  "key35": "51imMSfQfrq6Zbdwf7GRA2zU1peJHp5L4SAuqRMmWDTuryWwsqHA3EKPrxhg2weWZVxajvLf3JXxnJG2wRPU7823",
  "key36": "q6nwCDvnywL1PbQMf5Bi1Pq9RwvG9sbcpH4W1G4CTeiVbeFmQH1ogaBYWXFP5opyTMZs1SUBApiivjUmcvuzVqo",
  "key37": "3bahbF3X4gJYVuKoQQLSLhfC9Bc99prF7XrmZzk5npCgK5HSANbbAA79QZXZhhygxXXzZDmnvQWnx4x5uMnt3ahn",
  "key38": "B8KKvBCXdrurJ5S6VNWRHbzJ9PXsUtGh3h5NjyCJovNrwfviFFcwtZMTZg9B6Zfkoeh2AL8beRDv9PhbspZaxzP",
  "key39": "5E2iEjMo6XEm69sARBt9A8JGvc4LGfz6yV8DhAV9GkDBmFnCDSeR71XE3S4e4ySs7T8NcubnfvBTcdBaZmRYBi3e",
  "key40": "kFEx67685dtFsVJAow3kPMYHyARrZ3tErukmksCum915fqZQTMuQ3pQmjeJuykwoSztcVzCBnRAmnDkK8TgUVtV"
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
