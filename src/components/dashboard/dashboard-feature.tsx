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
    "5b4gog9nV7a5tmw6YCLJxfGzCWoVgm5vDohxecucrvRYCsxKZuJZGTifU3BUjviLka1YJe6mtnTjgEj8SfXRwEze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5acCDt5VZyiXc6azmzmmhS9padBgimDyt5AmGSyn2NsUujE5WszkfUvMddPrVzjVLSUSjjCW5uMSaMFg2bBZq5Py",
  "key1": "4p6Pds34xGGWG1jKH7A7Wz7iJxu1EfUSJRBUirrBAo4JuY2k4EEAoDt8aqfktQHMA5As4D2gbWYpxgJXTE4fYuCa",
  "key2": "3xtuB1WifCEDv2vxgwT6uL4qesg4spZcjNqeRBN1wJAKzshKwc2sNhiapyGstoV77SiEctXtRfkqS4WRRjJAJNzP",
  "key3": "3JJAFTqx38XozfJdrLdT5aReEeKNavN1C6ze7ZKAeBFe8rDvnzeizEnWmo6d5MWYff1eDH18VVTuhUjsFSroXuqt",
  "key4": "5kyc7S2Kf3yqSz4AF96WmfjxknnneGMMSEp5PVRKwmtvqS4cusLGCD5w967JFvMiEwbCLGkXY31u5VkT4yj2GDjT",
  "key5": "tavrW11iijEfBsdPkKBb39jhCVVMyrKd1y5WJB376quNyDRUZWEQZihTVU35uE2diZfnncnkozVrEVMvAseGqHv",
  "key6": "3yhjniA51ZnF3GPoA3rKd5qwz2Sb3BK1Yz38MWxgu6jsKbY8n6zDGeQ5si6UpdCcAxHMunQh1VSgU7u6NrfQo2Cn",
  "key7": "2vubycoZHDEPu9zfmVVmif6vYr3YYFmq5PrHR2uZDFV6yEoC94bfQjudFnNBUTR44WPaF5s9HzvWMaxuVHYdbMym",
  "key8": "qTqwi4zZK9NcHe2jFuz2Rnkwm9wEZqJCTyBBhrdNzaVJvVyhWfLWxMjn6RQG41sQZAFgr1izaWtJiQ939RQHUo8",
  "key9": "4J9wZLWZD5iT8xQeRiNVmcAnguNKJwyGBRzjUoU3vVSePvtyjAsx33vdjdVjSvkSBEGXoAHcyNZSUbVSyDCfZ6DG",
  "key10": "qwfQccBxtJhVNymcqP2eXcPGoLbT235DBAGacGrBPgqByRuncJVmTvWdGi45uG8AQY4zjnbZw5S6E8wmvaGaXNu",
  "key11": "5y6qav1knN8v6jyGoc9F1tTdtkZbYWhJivH9yfa6TR5GpvFF89gd1uujRrZUCKySFgbMTuT9ePbS1oSA6FkzkSNZ",
  "key12": "3smiCagLiTAD1duPCzhMdcLDgRWEqz1fjxnq6PVQAUpA9oUvVPMibebNDvbXmSs9BWdmpfPZnvN3rFRXdiVJu7k6",
  "key13": "4E9we76JePSF17bCy1iH7ZrYAAywRoDNydHJpRLstnFn8kzsY1gydFEexwRmqm4H6n2Liv1zvFbWXBCkXP7s9Cu9",
  "key14": "34hPT1F9cQUjisKRVKM6gpJZctJYBXbY9ueBprX274xqZ3gT4bQkZR7Qtg4n7W8V3jXVcdhmKUjwGTjEoU5cwC6D",
  "key15": "5MiMpugE2qhNTna6283amVY23EfNuev67peCANsPDUFAz5hnMz7GCmAFeY8d19R7RfVVDRTDfYpNFsVQ13iPC4P1",
  "key16": "38tEjXEcqWTLB1Vtiy213UsMQD6UxHJyvX9SRxnRq5KK4jhF8Y3Nxd5BmPDcgZ5EN8qvYR6irUUeF9Fq78zgNsJT",
  "key17": "iE8K2WkjQccNyjU2AzKMQSWcNPWduFNZqzyYVqEYq5XdoWHopDeEcdyoW1YZ8XGUptozAW4rkaTS9qZH2a4bd17",
  "key18": "3cRpxd6g7psEc2NLfy6u63cQRWeSGfbcD5nkPpUBxhCvikmmUTdKWjikG6gy7GqfZy8fZzFneeegPSm9tNXyVac6",
  "key19": "3rxHdbyi6asn4vbBMVNowst9Ei7WuwzJdHdX8bjvwEPrTNcySTk3hmMBYeeudcjvEFPy3W3LDwvkCdoRwgVoqguq",
  "key20": "4UkCosAG8TvpGHWKbuw6X9u4KcfwP4SyR6voDKxbiuTbUgazHVAoWotvzUaXPfJwU4D6WezhHevtHEyZvzSgYqHY",
  "key21": "4CCKU2Grttzvruj3UzVuVULANb745h653pfqGvmPNqFGGcrpfh8F5LvZWFtKwH2egtU4qhRrv99rx3GJS37ezj3G",
  "key22": "2c8VeHfE93KfDUZKGAWc12HEADytDMXpmxUetgq3AEy844qcb3LU1jbFwC9xibBy3XCHtCcNjWMf2sqATKxK5MvM",
  "key23": "5MF7H1Phn8hcFuBDbZ3216EFrqviKCnSu9n2vSmF62ejhv9afkRCKtKSDLh6UkQLi5w9SwsHuy2YyKetF4uQCaJg",
  "key24": "ETgUXVxnNvRr1Wo2eKqsVTaji6b8YDDdpthGhTsc3yp6iVmasaYq1QDg5mh6KdnhGb8qrCXvefG9BNRBFaZQJUv",
  "key25": "4JSboLhaX8HZ6z2LyyvV7U7yfaAUp5Z6SWWa8h24o3WpxoeuRuvPpaBDpXnvWSxiPL4h6uGv96M5sAtQDoRzF3W5",
  "key26": "55Z556VpVyvetvrn9EwdrrY5ip7n4Hr7E9GWgzU3W7cbwxgPJS6fZi8Jb2bXL9jQts7UR5kJ2GY6uoqNcGCrh8wH",
  "key27": "3UUZxYmKm5RJ6omhMtruGjMumERZ2LZYAB4VVAdwgzDn9VQnX1KCV3bpqgiMmWvjsiSiYanNnbY7F6vjKBBu1gjE",
  "key28": "2Pgn1QiVALNVVUYnrkHNuW6bTRNjhEMfTq3MJWAmKrobk836frmZAULr4SQGJT7n8dCXqqoZwmHs93YLSwmSLci6",
  "key29": "4uLnPPCecNCtovDHPpcUMse9Lvg9vmBvSbPSeq7ZnKVqiU6CS72UMhZsPvQeZUUvLk6ZP6hkCijfjPPGmLwsZkmf",
  "key30": "JxZMLssfsHMvyU5L5Tb5BkqupfReELXuBiSfqLnaSFdEvjDSuKoGRggTa5Y2KEtYdBqXrSHxpfSwM3cATZxdKLq",
  "key31": "7ZeGnPK12NCJr2eugL3bP4VRiydMidLRHvauP7wUzqmLVbQF2FQsWDVdi6qT65J2nfJKUGWQ9qD1mQykPhd17q4",
  "key32": "5TfqLorAbuGGq4h6ok5CWAQoip2wibhNBfeSTGKHCKRFScftidjQMucJd25HBwu549ob4ZUKPcAd6trccwf6pSba",
  "key33": "3JA3Z3xPS5KiTMpkLrcXQPik42zHoyFjGtqCu1Dp6coFE16cZvksHUsFMFh4KwqbWv3WWFHTAvDTuSPUKkcKrA2x",
  "key34": "4ZaE4yWegKjooE4khN3b5Cvb1fEfUBhSTun3qUwfbQAgvzDZu6uQctauoxXbvZETcvrW4pa2ynj8oum4Kn32JP8n",
  "key35": "3XazE6AW6PWwgn346PjqZQRAf8aUweZG4qnczaUoygGnHUB3NjRwovn3RwUfLDzeNCsV4EeAPFK1rj55d7dnibLD",
  "key36": "4nwsJAn22cHPnb8GMZdMzfXpNQ6nRwUVQJFLD36caiSgr4JUw2NMq7BomMESYpzQUpUJrjr4ppNQ9nGZEhCDfRHe"
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
