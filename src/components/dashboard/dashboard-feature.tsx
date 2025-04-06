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
    "51tBmquqdqf2z7AQbu8Kkhmh56nTA6rdo3bdK5ZSBXeTkaj7hjvZr4NFELMUWBuqPjHBqLYJwsCYQQhF6ufgePHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31fuVXPBfSG8wxkhBPoLKhzm65SmFyT2L2EpWBDLiUweJsF4kFPvqhjEs1vDyZbEdtJDRrKwswU8UN9Ni59WGz2c",
  "key1": "2LvmpQzZ558ybHq6hSQ8K2W64xeEdE8VREeXesTGbm4MKDMEQX1CPzMQCEfGNRjHH5G6vD1JqBA5CY2sQgyC6abe",
  "key2": "3ciwkX94EcFucpKQXvnBwJwNeTrLiBzWhpwjhi3KoAT49ovrRSzhd6RsU3xaKSwVGwF2uUecuqE33XGK9ZeWqjyu",
  "key3": "2EVRUZ3ZnBGqfphrB5vFP4XGie5KUFiCzZ9oXH2U71jhqDaoLFp7KM2WwJZiWfiXvifQPD4CpcsS9BrfGBXGiUga",
  "key4": "5kwUCLAfN4wsN9rjr8p4zy3zp5Ginkh4FeYsbcLsfCJfrvPcqK6WKx98woAvZuxqcrVni1Y2y1EF1UnDRqPC14Xo",
  "key5": "4Cby4SRNk3dR37rL3kev2G62z9gn3QBngwErUNF3jdotgnVmaUyDpamQe5D5tuB2xLAHZTEDaxoCKmxT3jx24FVj",
  "key6": "3FWn5rdTefVSmmhZBD3tHe1mPpn524iZ8bparXaZAPixjoEk6xNk8RGkcPBhPqvUzDyd2wnGnhdobTmwUm8s8jn6",
  "key7": "3z9sHAnYSDSceTYLwXHeurNm4FBn7rQCSE8UzifZzAAntvxXhVTD2LJzvNSZNNrrgQSJA3xAxR49qK8yyj31h6gu",
  "key8": "4PEJ2R3gR5R3gBuujdPRtoyihRcSRu57znEWJnYM8DKHmjvLZpVo75Fg7JSNYCYnNvPXSB38KLRs5XRMfY5TjjJ3",
  "key9": "5s3b26QFGmj8sEooPJNB79234RoHtQmd4Tei86NyigqchXsvLYx82vfZkZ9HXcsxKmr1xtFYM4YYB3e5qtvjExnw",
  "key10": "2eT9sm88LtrN29RHDb4GhWKTxmvxY22BvGvLBWCMC8zYnLPUAirHLa1eNjkzcH41q5genimyr8KfGk5YGoJoukG1",
  "key11": "2PJ2qC6otgHg6G1r5mjw9tGgxR6DYqyR5BY7nheHxMBZzPVka6ZW2QyqjHgwsgVj2GC6HT2yh1TPkzaH37LS8T28",
  "key12": "67NFrpVzcWeoURxeehq5NiFyLQPYhDsafUkCSX7hFFczwHb7aZ5MzrcxmYrUPRYVvptGhPL6U9DUct3DwR71HNYP",
  "key13": "wzERsAJcXtrb5avjidby93M7Ly7EzV5Szn4Wk44JcmfBTLkoKpxeSpH1LQDgZGeyYjirtLFcmwrMo7SvBqfEF9X",
  "key14": "3HqR3Ap2umchJr8ZGeeeGaBSPMDbskV6uDLWctxPweB8nEW3Fwz3tkpKFszptX7DNggadB4RSgTPcgrFKkPUnRSF",
  "key15": "49DuW6ebyjbKghFsV6RZub7HBkfvDKUs5LV7EqsCFxTX6fc2Ff3C2Pvq4dN3YURY34efQK136KYymsURsftTU2f6",
  "key16": "4sMbYQind6KiQ1a5kBMa92TFZNRdm3St5v4GEq8fztqFFLNNui3XcJcN8tdemFyVtxxMfLEPUZwuibrRFTjFX3QR",
  "key17": "3HquyLhwuFZGEjaJdQQyzFRbwHSCykxmQgbKpVthUKRsAukH7jBerVeAhoHi7F1uxetzEaJts2g9rcMxQ5hjZ3gb",
  "key18": "2fzvS6sCfYHnumS2d8cWqWP9C99S5WK9mnaR1TQTswFEfVEyQpayuSCzvDnYQXCcHUn8WVUHxqCJ5pStFbEHUFhB",
  "key19": "4CBNtJNr7peaFhwjrxBffyiuGHpTwoaaqvyv1xJJYJnzSt8JrWBzYEeHBPSdPqeH2NRTx4hCuLL15vJR8Wk1187T",
  "key20": "2vFBB9YinA1CNNEws9Mc5fuRFNeLQmBCoBLzxEjTH93A8twT6LtzNijLAec2cnBLtH3wqopymrcFQde6uM5ndNp7",
  "key21": "5tpYVc8LyYCpJHQfegVaK8tJvfEjWV4HzKGa8cbMugk5YxWbVtsKVqAhBTpJawfLdvmtK82dmAHZkSvFvTSMPJ8e",
  "key22": "5v3dnUfFoAVdgyRosXwu6zfZPPfb7d1gNWMwv7HrpXcaNruaY1YKvDZrNLovTsL8PKvbEgMCgmH35CixohAvGptr",
  "key23": "2RJWudD7pYgMim3oUKLJsKasoKqsSsyTrNdCAdiQqdPt72hZqA4JZMqvPkk87vp1quig1yCp3rC6V3xFSkFafCFJ",
  "key24": "5dfeAymoEFawvT7j7xUx7SvpH8mLHG23BeoqcYpGqfnfZyMh5317MWRa5QADKsQVTjWFvA3A9immu2ap9rmdfTU6",
  "key25": "5z9AbzSaPTyvfSb437TUDoZ4u3JtdLK2HAhneaestd34H1netfUq4L3Qqy8ENinjznioQWCgac1rihz7kd912V8Q",
  "key26": "3GTPHN175eTxKmjEdcfdyPiWKFRvAdmHN4sdm2CnrBb49eDtEdAN1xXhPh8LQCnGgj7yEKnVgpEdioBnvCyu65Wj",
  "key27": "3Vhu19z2gHMoeRSKqMXV3SRamUA9P579p9xwkGx2Et45hgzyep5cp8eg2V8sRGSMcDvsNKFgEfsBYntxBW647fCy",
  "key28": "3BpZVVgpzDxcKJXDgZ9MwthzTxVaKLDuXYHAmr1Phjkb2giNiKyYjQPDfS8xRQXK6iLJag6sbMRQGMhqtn7arE1j",
  "key29": "3B8kr35gWd11RL64xzzdZAASfWTn71YpM5v7Zusjztw8DMnWqMYXizZWu4ASBUmKrMg3dWh6qUQcJ5xJ7Bcx22jq",
  "key30": "4jNgy7oNBTS6T3UJ1kKNdRXhq1R3UB343rxCMg1woqmTeME67EUj3YqUsmijLf7HuqjvxmHrrdkieVMupcuDKSPv",
  "key31": "3536fF4G8p5M3WsN46A3yqCMvwZbMYXFpC84PhQgDNaXiVbLHDVM4wvAjK8yxJwTXNdjeKhi1dd5rbDTud14EnXo",
  "key32": "5qMhmTg5Cfuvh3jjgrxPLwocakunmGiN2MXqkKGsGauwCNxFDxiq7hukEHxAXJFF6cv6hzweiGEphVn7eDbumxp3",
  "key33": "LeZbD4g8im4RcFEXzCXVoLToGS5NSjhsQ1MYXE2kLk7Ao2zr6gBSyEG1tffrcwPLSrgYLm2gjDzKEUz6YJ4s2aE",
  "key34": "4vFWz1CZK9xGsKPJRCp5LW3BXLAn1c34BLeSGUwMc8kxMD1DpRe9dErZJ8oDXYfcpno8P34FskMfw7NfQemjrP3W",
  "key35": "mpu8SHsEGoStxjT475RGXuzDCqk1aetkyq2fRc8249p2UhoiZ1v2LLZxjEBjW5mNLyMq5Ywe9iKsb1WCo6Q9vJZ",
  "key36": "3riuN2mxyBDecpdtzAsZWDLb3hss4dGgHNrUgChtDj4Uo28CCnEnszdFP31EFzAxTojqHcP6GPJmUn9W3AMmevs4",
  "key37": "zJPpfcBuURvVUxmo2cCjHDRya6Hme6k8D1zRmALxzFTrcjH72nNLQ6HUXrZ32gU3ogUSpxc7JJ1NwaSF1F7NMLy",
  "key38": "5oZRbLw9m1oRQEs9PqtGTSrDe9d2W53awr4wXyFPwwFo8gDudWkbAFL3Kpg9oBu8mz5u8Qvp7WuSVxsn9R83k2Fk",
  "key39": "3etGPbAofTSNG3ZR9fRnLETjotqp8twxnc8wSfr9m6f6uwJQpqu4vb8PG7ntnnbb6PS5XCyp7Ryt3dZUkNi1VvWK",
  "key40": "82yiPHz4qhbZnr5RS4YZXsSQDH9Ju7fiHycoBezkVCMHyGPCpKhEMfvc16eytzgf4a57W1FaWQXmtEq7kZNiYLR",
  "key41": "4BqkYwheJpNELiFNUteipRQAsaZmuxwvkmhqTnaRkkpVu2A9dA85M1kCkDxApLYpWLPUSYMdSNChbUbwgYWSocB6",
  "key42": "4pttVZJXSzBEBWCUEZRLi55QREVTwnumE5yDRCZyvQdZ8FTTGE3DgQGy8PQqXMU4Ti97xj4JdLpPcYPQrzDq9Vb4",
  "key43": "54BkvfHVXFBDsLNvYWWDCdXSvPuoEyGvQHhJm3Y3fUrL6NBHLBaL89iHdcGSH1YW6svFKudmo5bUytPkC8eVPqzV",
  "key44": "45g6jUB6zQwcJ4qbhu1UN1qM3bxUc1V9g29z8D12wET6Qt1vnkDwXr8u54JHAJANHwf5w5T6VqHGevBHgFeuQJtC"
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
