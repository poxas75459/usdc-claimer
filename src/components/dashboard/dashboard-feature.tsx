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
    "3PA3AAB5wiBdoCLt3M7ZicY7eeAQkrbotwBq4sxoX1hZrT8gibqftWgp7FVhLHm2EAz94x3EWQjRvPb6zAXqKBmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fxTbDJNQqR4vMURmfvNb2U4X9nP1WMEBDnPmabNzux7NrBqqi3825foKTtxq3WnaWYDdz2ygpDKCJ8P8epn7BmD",
  "key1": "5Tns8vE8MFXJcoiRrfzB8Sw8ehWue2GzY8MPDnaGCxPrdgffNKkLR9bT4hYdvBV5PC8n1m9bBaMnGGS3A85aXPpi",
  "key2": "2BxYNTW22dmZaHNkD6RYiu53a92du5YMZQPQnUuEAiBY7B4s6QNTB1eMq4wTT5TgTbCUbfDMCdhaqUhUWj1SR6s",
  "key3": "4G5jxJz1Hk7toRKjTLGSyqeQ8QkM3vUkeLPSWednvwDjyvb51cCRUsHt8cCBCohhHKrau3xGr6QENhyphwSGCVSk",
  "key4": "3pc4rNKbpYSosCzqjhBrd9j315chNgR5fxLjNdG1H9z8zVBHntFUfgbHa2XDK6jRaqCy4Dns6pBa7b7559ohw7xK",
  "key5": "2eanCwQCDckUyXpTk8k9S6JeVPUCgWjrg4zZ9goEaZysChC5XtJxV1uc4XzUJpUsM12ARKVHERaJHVB7stzuFgwv",
  "key6": "39tY73z67YpJsru1chqoERV6JDuV5dVrFJPVZav7YXXj5P7xoaJodDxZhySqrmA8U5JWGVBiRxp4qUKhVqfBrAc3",
  "key7": "2NYfazd73S4LoRNzExieULA8sgFxM1fAqS5REQdyLPFvzBcT6CGU44GCbnYYtzHbeagNb666YxfBqP5KppdfhpxW",
  "key8": "3UYAXk7uWcperioGdP47tPEMrPKmDkEMHR1BEmk7V3aMg3q549wQ49vdUJYrK8YXoJAFiUWu1vy4gBr9LN8stqzh",
  "key9": "3A1y3EAwJdHRXuH67nFpoXu3MUB8PhmwVLZorw8mjvhkpfvfaeVPEHLDvxepjGhRv2VEWMLezvDatr3Kk2FMxwLd",
  "key10": "2Whm3TTyXH78M2ZWtMTYCT5JnLu8dUTPB5mnXEUrwmQw2n3geALHJ3aa9bdepoGwMncsncbpEeY3iW1qKtKowfnH",
  "key11": "3Y4cVYoYZ3bSAyBLc5UhpQSfM8A713yGbCNMjtajXbi6CdYp95DDgcuVXuovrZXbFygydXD2ZUHVqtvHgJGT4kTg",
  "key12": "4V8zP7BVGDYGJv5eqJtyHCjdqRGG36x6hL4k8iHQkeuVdeeo79mGVcFMwq4EdnJRkNa5WkGjCJ5Yefr9THpykD4U",
  "key13": "3W5o37h1jQ3ZtSkGaiNfHWANVdtns6JKHaSWAmrWJncCV3dpbuBwQ456W3nxPnqSx7CKZTF9QHS4c7CZ8wvSuhyk",
  "key14": "4eqwDmn1BXa2Z5j4e2LHHiChwZfPPVBaGTznZVC7v2Lact5X79kMpyyrNgxV8rWMWtJ4BLpmERCmcVk8ZhPSDFMs",
  "key15": "fbrTN4U4UDi9wGoyaxyy45PR7RDGYQLdXySSv8RWNhRbCx5wNm7YwWZFGL9EkRZ5wyRdqwMrzERYtfvtxGaFQ6X",
  "key16": "79LpWGtaL1riBckUQqMj4vWLVcM9jbUHSEELjNkYTWiRbUGs7SfDfHzRCxGLDqt4PcN6DtqYZnPtwJRpkMXhkd7",
  "key17": "3UzTRzBL7XmTcuj31JZUX7fqZyt56NYYSNjzrrYnvPmYQKYjKWnUV9dCwqpghzoBFzA4VWfEyrG8vr7vf9Cbf3ZC",
  "key18": "3rMV34QQ2b2KDqAbwms3F6k1gxBAEnqvDr4TztbCXDPzEymAHfjoMXworXiTVmhpshtDuVJUuVKhThbuWezgkE2X",
  "key19": "23vqFb8NuWAkvGzUzwWhaApR5E14BsefqZXWqTWGhm45nRZ6ouy7qSDFKFWSWrt7vTFkNvgbe2y8UPnzMSjVSxw4",
  "key20": "2nXmXKL9exsxwqanJYNSUZs6u4VzByudt7jgmX3hPUqX2ojW45DfJxVtvYHoTxntuzuGc2kySp8uRDu74THF6gSM",
  "key21": "5tvKpwwnuiMgaPgNAz1AMA9rrLUnu1BzqSucLvszQ2f89MJxFSEf5uHwgtZ5GtJEWeuGzLHuJPw7en8ZQGyeCYEZ",
  "key22": "2nVc1mWDpjHWTcSbzXCATPquVK3zhEHqyrQPVHBqxezDfvWiHQDLSYU9HP4aL8wMjuebMCvnPuHbCim2bTeewP1U",
  "key23": "WkRxbzEfV8cAcA4M619fhgMZoKwKT5kdoe5RgJgv9UWPVdkuN9pnj8XRaR5rcgyRMrgEUP8uZDsTmHF6Gq22AHv",
  "key24": "Lh894pCxLDFao6yeBHNt6vbowcobtJsn23dmawMkZSUuCCCsqduMjJD3XbmKaFebUUGpUtnv9JSbydw16bb9k13",
  "key25": "JNJLMAY6PoS4yPj4T4UohJQDfy28jhjEEcqMHZAMdGbMJBBmdHiiKGGSHSxxydrGqaigWiFi5hgEuQbukRF4YNC",
  "key26": "P4RnoqK9gWeiLwUeFtkERC9YYojnB5iKhaaH6gSK6fbqxjAczfMb89Z7cSEGjNV7BxmZZ85uuc3uvTBSYhPerbG",
  "key27": "29N6k3e1BjXhrmVcfpo88ynVgnyDNLPFFvQcKPBBRwdeh4vaCH1tJ45AUsEVZf4SV2M1mHnXTeifaLAZ4AqSceZj",
  "key28": "3qjCr9pBNPCspeBeFJXH2H5i36BQP3qvNLrtaaeUpEcnmRsroQBtddbvK67PzrecfTmKLbW3yu96aYdCYeiDLiba",
  "key29": "hhh4k3gxZ8eAST5RMYS8J63SPLVK9q9VY9T6zoYWDnio1e8Uj2cuxoMvucBBBeAWvyMskEXAxftxaL7AxTXJDZ9",
  "key30": "56PvqXzeCRW8Be5hq22sicxgLo6yvChm74GBC1wqWU1EFfR7ohHZ3PPyChTy7VhQhrfhJsCPVKvLWwtRswf35DA2",
  "key31": "uu9Gng4DJteD2HuZ7xnYWdVaBk5SSdFiELAf1MmubNZnwHauQKjqhrcubKaZacW4ooKYyDnBwiecxMZH2S4DZJh",
  "key32": "44NU8a9X6js947atBd3W5i22jf3v1MTg4YYqP4iawZdL6wkQ2XgATNG2cs8cVorkBzNc4QNSvxvoNPenmBMrSg8U",
  "key33": "3yND1EDX1KsqRoMpLjdCwL9ARvJf8LejGNa5CQVHnXvwWKq77QtqwaC65jmBwBdG5PWsiJwrm2A8uTAtU4EpKjHX",
  "key34": "3M35iot4wbByZ2DpGSdMt3hayLUvYUi7QPDRKPg1LKPu54Fc9bmQb2dctWxZw5spr5vss7JoeGquCGaEQroHLbzG",
  "key35": "5neee7jmTpb6XvyrFRHzDvxTjsPbQSGH9DQ7NbV83onzHNLgQyWHrgnZ3GyZRo7TmVW3sLHtcb4pTMZC1iDJAx33",
  "key36": "4hpnek9eEGfZ9GT1WgidkELQZt8m5cYCTMrg5YuJaccVivUdiaRzFrSGzPwxJX4h2EkQsTtTmwbeipGAHmZZomUg",
  "key37": "etyjSnvgrqbBRZ6jH84pR7CDLiaRqZ5nk6sPxjyQ8auy91pV9gYX5k1vhf3KgPXMykdY3QC6nwzZAd3BgU49hoQ",
  "key38": "5SRkabJfaur47AyCCbVXwRxpaL7Dmwq2nrCyorugiQobZyLTaWB4eoRGApMb3wxQ4veFjzBGazdCQ6KwZqTgHfhC",
  "key39": "4hrPLCDv45rhxwaaKNb9nhQUfSH8ta38ZErw8BotwzFvuq1yQJL4wY13NEvmpBkP38oDukwfJW69VnkQLXd2taJJ",
  "key40": "aPiUoKUd8ht1zAQWqhUcozzxx3VTyCuJzHKvoQWASeh9DXEky1V7Fdxh1SAG8gFPtaVFv8nXdntM5YFU46ea7c7",
  "key41": "Qoqhks36KWRNkCB1wfenbhXgYEFb4jrhU85csjdRj3LryeJD9efUv4jNcmjjzzCixbMfkrg4t8vcZGerb4tGCFs",
  "key42": "N9QXwEEqZJ3oSUgfUztHaj5r1doSXZLyvWwqetpVAHhocn3iBE5QQ7qdWE4KpoMUVUTnTfbZ6GHmpPVfSsiQHyS",
  "key43": "2NDh9HveJdpAPZzrV5LfunpopgLKC2n1GFFjiQNH3YX6PfGcjjEa5NEpxQjAQzTUmEK1W3Teqg7vFvjeypMYKuWw",
  "key44": "7ec4LaagoZmJ8UUsKVQkbNsdPQZJQiLqc6WQxQADw2PgSK2Fe749X28U1DcmydzcJnjTsV8RNxxKedNmxhrJmvW",
  "key45": "2FA4oiqN9Nw9RGNkbp5WFiMjnaeQZ8Lz4QrPC5fVA9Ezhs6HfABDk3CgdtfrdPQmdtsQaoqqkoJ2RHsCiN31QCpr",
  "key46": "2uaesZnvfykq3mjAUx85gafSxWHumhjJJGb5Ya9Dw4G7aTGTECGDogVUgeFofquVHiCoqjVbxJTaLr97AjZV38Co",
  "key47": "3YEbcVy78FVxE2EXkpySZ4ZpaR6CmUcap2WxFvc9JifW6NWbznEdDndQ9DLQ9deVzAT1dBBqvU1XZQb7Whzq9DRS",
  "key48": "3MWMorxN7dSWcVvWfZc5z5rrLzGzfct9ZFjegkQd3KeY53oq8JKuEhCVHsyeabH6FdrrdhYof5ZMPAsnwEsG55GX"
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
