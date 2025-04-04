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
    "3aU3bBe68TYXoxvGvJL8sY2CwzL2Zfp148gZebCwJUXDJWm5siFd3j6pb2H5u8BLFsLpuXDNXSAnrPM3DgV7dnjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w8TKZoNmXG58Yy76vzrRoosvu7e169bFEysSwX7V7eUU4gvXwBfvNpgQ2TiC6XRwakrfVtJqDHPKWiAhFJmTxDx",
  "key1": "5i5puvSCUceiDdXLQzZbvX4Lmmh5wUfsCUKqDwdqZASeGqm7ZxFa8aGY2QUeNHFASVaSkvyHw1WowQzS7oybJFyk",
  "key2": "PDNCbsVVAk4vMJi8aMtcjWziJLStqras3uQCn2bDZcdu8t1dotzJF8jqou5uzDP67HvNTMMVfbEtGGeCLAisfXC",
  "key3": "571YQNMx2eZwAiiuPXq5N1UZXecR4fPH4EBv2pZxafaa5KaEJgHvzvYG9TqZQvSEgie2mtc9nToxF2ZVVhngoh5q",
  "key4": "4dN2rY3AB1XfSiZTkreC655k2mZcZUfXTPwCCCL1rERq5Lv8DmtEh4D9Yf3HXDXEsY9RPX5VgG2RqB7BMpms7wjM",
  "key5": "2zQcKKWezMFRZKUK8RYySscUthm8HhDUxiTpbgUY6RSx8hiFC5eKBR1eYqA77onfT6KQyvp1W2b3CCcUV7oQtkX",
  "key6": "3oWVP5TXjFgiMnWJBzdYDBQrGgnJNorzGdQ7reofw7HFafoSFG7urADRVjoujnZwB57SjHS8GWxU2xhSKBxRyeCd",
  "key7": "JNG9n8Ea777izsMr94ZsjKHDpQ4cFyh17Mmhve7nYnkeMyF7Ki7CQBrY1PXBGhUvL1q2eACGMzqaz8PB59XYMoa",
  "key8": "3cGcWyEcMeM8WJYMsX1vnHwEk5gfjELsJWLtifnsJNbhAXx8eGME2LYadsMzjcLaK6fkmrsA4bAAYBe5NEea9GqX",
  "key9": "5TW1qoWn79Wg2KkTWUAm7owvBT4W5Kaf1wAvewwz4reiEkUQ15FTwvLAnrjauWgdoQXqJQorSByfZhvCA8GinzJE",
  "key10": "4b6nfi8AdyUWHvg2VWi9tdeAdaVdXzhVcHoeswJwFogXm6kw63fcapkgvzL9D8196MWBtmujhMARLATni2yGYyap",
  "key11": "4iXqsqHtAdNXrFtvGAu5iNCvaaKPQJS5pZvECzRGhuc6BWgRM2vaiQm1jbBJKQRvYHQkpah1fpk126o7RLuiZ8BA",
  "key12": "5KPcsZoenijx34JG3QaVexNHsF3YWnWCTAVr8MditHeupZmZ1Qc2UJeKMtkStm71kV8Zc74bvbrQK5B9dNuNMukG",
  "key13": "48eqUrqTAEf1gXNYY5RNwFYudMpxwufvBQh6sk7V1JuGdnAHLYZiRH5yYTjC9PfJhiv93XWu2Q4EdXdTtT2UgeaV",
  "key14": "4RPy4Dkf3u5mi2EiBXo4ym17gSycrkKaVosecJUtqBqkXsLA7bE9Qc1cW2zaPiRZec1ocztbfHzetrhGay4nJgAj",
  "key15": "23fH3WP1G5L3shMVTuuvcZtNhNYzPtS36X7XVoXMyJbHvxkWqX8iKRNSdfsp3jSxm718r2JqCZ6bsmZWVxVydEZT",
  "key16": "44G79JnQs2hf672xSsXg9xrttcHGFkDf9qi3hanVnJi8WvG4dgeypQp5X9JRLZrHuc42HYTrKMwLv34GzY7YSyaF",
  "key17": "EaehKuwijFtf7HQf2tSoQ8qxXyF5D6ucAePdgeDoea1uuZRRca6P47DGDacsKUXHNacQiETPxGs5bQjLviuEg4V",
  "key18": "CMvH2BJe7pheNEvzH2JbyMZKhAMxscuWGRcD4WBSLvCjCFV9f74VSUEckk5kiDVFaDymZdHntaQREdcXEXu6PNE",
  "key19": "4TyeAs8rEcgVuBWdrGsAq88yjRE7HwkXRgbLaB7iDtCRkfhW8ehN7AkVCxt8yqR2de3XBHdZoozNFJqmb2HMCFUy",
  "key20": "EFmPwLhcj48WD527xxckZFtNhDaqn1d3sxAqTEJj5ZS77bjSSwqyeUfo8mx9dTZDErLRxsaC97JTR8fNfKqwMCR",
  "key21": "3a7Yyi7A2eTALWhjfCckWtEDLSrCU2dHyLdLaqGcMPjkrQzhvijrBcAGvqYKm4icTEYQ3PkDwff21kkYwL68GYLi",
  "key22": "55gPQUvgfdEyetH5GtjuHmYfWHfp9whzmx9UJkVYrtEbrMMyHn9sv4HpQNSDEwVjBNGmWGD1gPAqHYn8sRd1h44",
  "key23": "4qB4YEmUFYdzXwJ3gdDbYN6KuSHcSZnRbgn7QuSZSV46Zu1gDHcU6zqbSoyZf6q6MagefNTkrcR1URCTmTKDo7D7",
  "key24": "3kKjpE35yeqNMRBV3RrvsvN1NFgx9hN48CU4RrDDGKV6rdy5UouZhhdDtPiVVWXn1kiXZCZJANjXEoxPWFUwdUdu",
  "key25": "22evYWnUUUPV6YcWeohQQTeRgT9JAJXTqtJS34GH3CsSRhYWiMFkdvVPcFzGds4mxNicYyBpEVj2WP1MBfw7kqEo",
  "key26": "NMVLdszJTfBX9sEBLJfQEdC88eVz8iHBXpBbFSsnF8Zy6ALooEMBgguVrJLhZgcd72BETZvmNzC1WtvsmChRzYZ",
  "key27": "oceSAGydAQJ6RK5Eup9aehykCWFjtb5MGqpvRuKY1joSX1kUQQda8doNTPXRCvipjJwiY1JyBpZZJf2fCDsLxzs",
  "key28": "1m5SxsRnWBFuRRMKDuh7Juc97AmCp1PuQh1c6nyQVvdnCVT12nnm2wRCi6gzTjm9oXfDXvML89GxgCduwbbzy1T",
  "key29": "4GpSnCaMRy1zzjzB2YdnSJM1tdmfSVzymipKHQt4bugGn3Y9GaY1dLocEu16xGx9ADEieMZKgNqs8MU7sW6DAzHF",
  "key30": "4YJZweZaosA3pgWN2AFeKzw4r7LnpSDk35ayDTiWHfSyxBHuoqjKRmKJXN1YSpnPS2J2tSoxK1eUEvo54JMM3ssT"
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
