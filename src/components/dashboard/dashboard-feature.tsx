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
    "oDedxpWCdo8j7K4UKe9GDcXfs5rf56fTusZnQ8CN75i74Xodks7AgXxM9veaefHf4j8iT5R6M83s9AkTQ6oqgP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dnomop7uWuJqR6LggWarbGv9creeLJ9KkB5rZzpDVuoTAUYi1x3YYTkKABov36cQeHF1Ag7rxCQVDHH9YBCsrqB",
  "key1": "2HDMsF4CNkcLf58iQgbjWPMZa9ctwVNteTZsou9fpXAK7RgXBwECNDJDh2D1BVGHPNkw3FMyqoVpr2o9JshAY2MC",
  "key2": "TgpRQMMDRTnmYJnDuEkbM14WxFSss1buQJ3EGyEwMgG6UGGbgv2wiCLbevm2VSKDv7X9z18YaNrMQsHVZKEGzT4",
  "key3": "3KkMn2WbUZrAnvbNuqpNsakNbs8cbS4d5ezDvSWzZztvC7s5jiHf1nTgdfLELHNisFwfjE3EnsSMpLP4WcUXTi7y",
  "key4": "3kW8bwKoBNTVnUe6AAoC5dZ3szU1FhtQnMGNwAxP6iLax4dAkc4czWv1Rhi8wuhEYC4pyAPMsnBqzCn1i1YbUzCM",
  "key5": "5KEWNnDw3kTcBB8KSLQ4BJ2pw21VLAodcpRiEXKJtFW9LAiM2XdzkpxSwscfKqa3Y1mx6tUd6EnKWzoL1hKVhEkX",
  "key6": "2rm8pFi2ypZhV4WMLMcFd2q46yEhFJd66vuMyLQnJqAFGGwrPaSHdFdk5CN17eGJfFkpUrkouwsh2ki1xLu1p3PF",
  "key7": "5xuDQ6PVdNfQrNQtSEDbdsssvMpkpvuwvezE4dTSunPE5dbhvTt5Pcky3WBm8Vk62ej4gtccnNtrzDP2rfWzVv5R",
  "key8": "feP1MTzJkwLD1bAk8T1Vw8n2kPvE5o6hkVap5kS2DRGCBLJdGgeuL1WvjsxmQQprZDH2VuPmJ7fqZwjxukbckur",
  "key9": "2dueNorfeJsaAasej198f4dRQSPaa1T3rjdCsS1wbKnmXXrYDJ7yLDeJX4G4A2UuAGzC8dhMLZh3uDz4ejoz4tzM",
  "key10": "GcvkEDUvSuxb6eqHHMC5L6mrhBTLsTC8ReKyyVXToQ1UDokULA97yrko6ECycp8mWQuk5pifL2TgQ46727E9MXe",
  "key11": "4rsJisvmL63mXsEr2yVCRMctyfaPbUTf7xgmhEDvvPBPnQ9MgoTuAJBqYNgKWyxp1LPzVovkZLpZqFS1nAahG1Qg",
  "key12": "2haNCTES6qr2gCpo2daLyDt33nyzX83W3awEFzfsETTGXHain2uRpDDtLLW3Q3C1bSgoWbp6vYrd8MGhPm3PJH3q",
  "key13": "2VGpqgTRhkxY34duHTxVWbqWqZ1uS4idGMoPPjs7p8EHhswccjaYDb7VskuMTHp583i2rQwVrUVNbVwVfcqnuFyX",
  "key14": "3qoUsYFbPFfr5DtUAfrFF5uuiwDJVWUYjKEkYRZiwLcwAxqpKtQA3JnWcw46AnaKjxLRjL113LwbtdMBCnUFACQA",
  "key15": "Nia3wAjFH9qJN2ELurd2u5eh55TtSotvSbRrfm5S2JPghF6BKHopzLzrhmGQLXLbAVGSmF7K2nz4vL12wvyZQuB",
  "key16": "5TF73zgeJz8oSQC4bW3FYBbP1rPvaaPhEST4wokNdsn9VzEfPfAaeswoXbvu575NWyYsrcZvxJf6Pcz2TheETnxC",
  "key17": "3y2n5XZxjdE5fBSrssrUn2exroJ6GfWmKCfKzN8kYbv9ug7a12ztqWFL6WdheDEB2TwUciE76av4QvMguHZrj1Mv",
  "key18": "zx81EdXuNaPnRViTekWqC6dNVm5MyH33QkrJM71BFLHugWdeBvyV5BMsPFR11ijCz9PAmNuuGetSpd4s2V29AQf",
  "key19": "TkzcaqwZwfakehJsVw7deuLMy9o39GCsuEm9zn3AXonTsTtUNMGaUNbTzEZzgMY93Ybv258ZHEzLszLxS1muUxH",
  "key20": "RvsFCifPJqRCF8EgRip7NbK6MRwFv6TvfosNEdr9eYkLmznhPDAnTq9NNb7mLkcBKuCk31Mdp7RNzcU97ynzKXE",
  "key21": "3asfssg7vAqRuaAQX7WxgUfR3VQEEKCwstf1QVAqFkRrqtAxf9Yg2HWhiVXpvHod2opJ4asaef3PW8fLgEcYx1v3",
  "key22": "5VTR7nGjRoFrzmqjdNn3SkpdhoSWM7GZk8AMyZSVmYNE4w6iFYXhdoWWExnns397eiiPeJEn2LasCsyWeo3mAvBA",
  "key23": "3XZZRmfY4gciSS1Fiig574eRLxkByu9DpDR7yqE84i46cpY4nd72aongDvf9JazaSXLYgn3TzRbk5eauHbtPwKX",
  "key24": "2hhiNr1D5GHWCJzkQLSktWvmA7YZd3bfubmeHbFNeVqLbKtTfJBDzjT1jXjxBXi344BmfPKJEWxoKY7kVRi3dEpu",
  "key25": "4277H3khgdrQNPFoF2mB3yE1KS6y2twxAVs2BEdGFs7FF6SssB2yybLBAMo9iDLAxxtJP2ijPXaYKe1SdY31SrZf",
  "key26": "4pmYq1Ui1ChadkZWjogHHW4eh5HCb5tpzfRx3Dfudqgdh1cD1ieHtxLbH3kRZ87cyiKHYLS77ofeZXMkMNWsNsFp",
  "key27": "45R4L8gFLu8qU4yowSJvWki18C4P9ZRGxTVLQRyZM4HymxUUmfN27J42RwnVVqPhUxvMpgjPs4HycmNSC6i9pYoj",
  "key28": "3esJrLe5TQmXgaSQ4xHjPHZP7jvz76ovUw8uPnY5Venfv7hxYKrk5ukJuDjpVwRLB6dgsjuRLesN3FVXtJGRs2CN",
  "key29": "cSZhtgvdF3NVSr5GFGGQ8HeyGTWuYPsgeXrodbzmzwws2iCDpGExbr21MAV1d3SYWFuqqanhVjGARtfjhPSg3MQ",
  "key30": "5X9SusqaXZ6CTJX67FKEQ3WpuUJ1cERdeFNxXZ1KRh7Yhzanixp2GkLao8K6FL45DjRQYeFmeQt6qBPfLfYWuGZ3",
  "key31": "3FR6xztJ6cUeRMX8hLAc6qM4vTrTzaj4eWvPksCmmpdMii5A4Fuku2f6qjSVfRNjGAGjtyidrgjDr4wdapz6gsLP",
  "key32": "3ks6VPLc4MGNF4N6SRkG9oWXk7SKJeoNNXSu9fxCDPjjw3BDGn1feDesDcoNvLcAK3DUDKyXepAg9vHYLASiwaYx",
  "key33": "4zWyNcHirfwkvitLGX86x84FzZokfjjTPtvbDBg1BjovobHV3Xs49FuVKxekWCRwfuVqUEmvi9XAmCC23FX4WVbz",
  "key34": "3CkEPuLo4VrAQxy1GtyehiJjzqQRTDBsd6qiMNbDBsnsyNGugDCngvTCPcn8EPCRRZuuwEDkwvPmJ2hwfPKsZ1nv",
  "key35": "5Aej2VeXhuAoKrZNkCvyeNUFoz64UWuFdSd8YG4UbGizLScc3mPrYYwk6PANB1vLU5Rq8D7TT98aTLrnhZpbDEqM",
  "key36": "5CLG9ovuarpHu9xhUB2SUNFna3vyMeADVmgnmNPwj1nvKT1LptM2oLCAvAJ3ceTB88KWj7NKXT8Kczi29WurvToG",
  "key37": "L7zaQRp7XDcor5A5YjYqhBi9MuUZRPnETNVTebkagbkRG5UFveFWzeR73mbjCAep7y8mMbwpKDe3vrFK3EBuvVQ",
  "key38": "2EmFkCWZwgw8wyp3QpyMMibXPcpzFYJyy52eKt7UjUB3t1SgMrTDe1uy6wshEpzCnhQeWNp8zai5sNF5knFYonqk",
  "key39": "45hJU2t6SgYuvMVEVWv8cqLvRrGBaWXJmcp4a9eJf3JDJLHSfVVQbyK83iwhTB49KgwKQHKxFebMF5ohBLqZeR7i",
  "key40": "3dswWJraCqjSSiXQZByjYe8fQ3NGSmXgYpEB6wEJ2Ep27STs1RGcu7TmuNTYxjpXYnNje63GxZXtBFRH9fs1c8Gk",
  "key41": "5QKEDNmwmq7MyfqYL4uZmfy7CDrfKrr5MPqXuyniuMBQqaqphZdngjM9i8d6JLsQ4AtcTvmjtFxgYqKHbMHk4mYY",
  "key42": "ojfq5WDNCmkSEgztritcraUYgbXewWk9bnRNDTLuTfNSXX4PkVK7voALEr7X4UvUz7eqPZWBf5nksnoJESYjPrT",
  "key43": "JMuzqxwtNxe4TnamUGwhtLcLDbK4yCdrZJTuAhdufMwXiHQoarxiZ4h7zepBQ6FfpopRJG1GZUnqfRnYrTVjshr",
  "key44": "E1ciocyGVSfXdBHZd97wZd4XHvUaBUAxgAqKae5z44SxcKv5qm4N9PGZNtp1WQV4KmLCSu6Vbc2ToePinAh5ouh",
  "key45": "GHP3iTzsjghCrredKFSFwd1oHotbuksvaHLJWUj96TbQQ83djYBwP4GUFauxaceJ2hHE9p3TjgRyDxsWQEe8wnG",
  "key46": "2CiprcEoJDQh2aAFLLCcUHYphMXDKu7JTTC2qPv4VwcNgiQ2NjfFrFBjY8pCDPwmKuwhp2JmxpD4jPtukuQpSdTv",
  "key47": "2eXUfNCXRF3PFcUtUbtZD3A7bJWuVJNLSG8mJ2MKkYiMKoBQtWAe1G9WB9djVfexjZRCR2mVhicHz2mzwEAi1GAD",
  "key48": "41XKozpLTzHteDMGwFYKNhmBm2Xn9XYabCrGaJic3Fye12vKaBX1gqFNRt7bBTsFpPjHKXrjv8LBL1TSh8CZeNeM"
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
