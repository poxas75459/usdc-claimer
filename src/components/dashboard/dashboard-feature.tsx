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
    "4xQWnrFck9RAFVkEpepHYefr1tjY2fCqbfa1wiRFiUnhEVXsSdrnazBF6G3rMQKpT1WiE6aRqFbf5YhFntGTmQeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xBPcodUshFbbswVbTx7peWQcy7iRfLgtpgpnKwDc1nhTPq7P3nTB4kUuc3ypTGDMKBGX3hPMUJptzobcKgECBXZ",
  "key1": "oTFVhkvybPcfrEbkTT3qshodoZZj5ks7tNLxBFyyMPrPy8h5dUfDkpc7K3FsU6ARLoqym3PrJzQBiNaozHuzFXg",
  "key2": "3NdWvhRtoUGsViWvBZfudD1hCUrJg43ZZTkhCzF4nPUPDE5YhjSdcjKMnHYEk9DEm42CLCEqs55g1URCqnv8N5K8",
  "key3": "5MLFhEnyiLaRPAQrSoHou2hs4fS7oErMCfeRS7csZw4wXkCfRDzKDjeB8Mb6iiPif3HVtt1s9wRUF9VGDMvRThbB",
  "key4": "2o7f7ipPJYABo3A9qjHu2N6QtJZkVRV9W7ms2bfXJQXLxaR2bsBxqTGJgfcdyzHiCCzPUWMVkmAWeXuxzR88ftYk",
  "key5": "2UkWYs1i9wB3Quc6CMZUawnbWPaK1ahs14wQyzWyo1GQkLyrPhwJSXzENmud39uHVcw731VeLf1pxD5Ccw6jMFLc",
  "key6": "5Cp1PaiFyUi5EHDKJtVdJukmXGhY5SgYqtw6sx8PqXZAud6WERViRYz65HV8foMuZHrY83uVwJytUd1EPk2zStS2",
  "key7": "NHwHfpWBgFaH5AVpcwWWjoGjQ22PLEp5fPoYePscYDDMikrAqcgt9XzCvfyxRLpacNSgC4QYYumCWutxymStewh",
  "key8": "rNNqNaBjPuKNcuyTodjXRXZrcMapLpufDtmdMnXnpBcJCenENvSgnowjvTbud1FWnm4aQyyxPo7kwnQNcCoXeN7",
  "key9": "4KGSHTkKD985ZEo1n3TWKbwKTiG4zjzDWJGQkxerG46ftBX7nyqSsNNKTfjCcTLp1D6vsTU6XgnBJccrU3BoPYiB",
  "key10": "xqyXLDd6V7AinCrVDcznRNgnyfz367hbQKEMp2tk1rL18dNgqHZmWJwBdXa5R4hvBd7AH5FJMPPELJfAwQ6FQXG",
  "key11": "4qiY3cvxrtaMWtYY9QJJ8ZLTL1PiknZqoReFQW3pFRtFjSdPWRoypo7HUCmUiDLgPbwbcdHPKo8kw8fnhNh4dc8k",
  "key12": "4UeWZTYHNjQP1BauLDn9578iUaZCmFMDeo3Li7JHqCN5b9N41gDHsWxTja4bwAE2kUDcdDxpHGeF4rcGTM9QBrJQ",
  "key13": "3izT1NQxqxS7GN45qtTFbnNVKPYJQU4bQ9kKDWAzy2ingousM3gkFAURabdpzY9WAsHfy1U6S2u3mGA2rcQf48GT",
  "key14": "2mUsFm9LULEUb1uDfgVVadWhHEF3UrnDdYj1ybzSeMUC5hp14XNiXseYEeTswPFuDu9Bta4KZP4bTkB9SVUktve9",
  "key15": "45gSvbe7ZueGqGvaptF19qSQ7cfQHXsfTHDV7b3sTLkhcFNNWUBx1TjRG8nF3QX6wiGyw8L7m66JjqHrQWn7pCx1",
  "key16": "29xogGk8rbM4qKnRRrUVZ8rRcdhEEmp9hq8EkrYn2MNkesycieVD11Av9ucFMPgLd2ebVd5k6zMQW6dF2hvRus5b",
  "key17": "412akLLum3GXxwoqyYHeyPJDEhCM2Lsyxb6LrXkVbNadXH6Ejk392imQxgFS9TjpwfYWEVqJCnVpcMhrpPLeDcfQ",
  "key18": "4nUUXkPnRok7k8EDQbF6KKdYki4SDoyc5yGTg8GYNVv8De5jjmL2CW1fKnFiaGEoovUg4N2Ds4tMAmjcb8KeJnGD",
  "key19": "aJuWAqJsjGBLuX76fvcNVQXkpgwTrwk9oQHwKhX8cRsGEFMWJ9htKHqzjPsMFdt86UZMeGRAHULaGNy6jv7eZwm",
  "key20": "2XsSh3EykfnCqrGNMds9mmV3EGzcLrfqDMgFwT5TWEta7GNPn2bP9c15aRRUXAcbF5y6XLoaj9ohmDvNBUttoKyV",
  "key21": "4sHFNcnBLNg6FeAq7M9PeSXez5VX1RDGmmgVaJLxC6ofDbNJWoZ4EtDzNdogUQ8sXowaS45rv9yRQd4nLXiikJMD",
  "key22": "2YDfqRYX4VQNaoyYRvvPnfVWVgSKnZJxgnq71HKthxD7E2dnGS9bcQxsc8MZvqRBPvdqB3TVdBwJW9AMujAFP13x",
  "key23": "4y4iW6rNDNxqkkVRdXNz5CXoeXTQEjeJ3G3q4BK56CfULp5FovKzChw1pBVcSiyxXTyExF74YG8CwuzL3LiA6mhK",
  "key24": "99L1KtqA5T9DTfVKJsoFqM11QXgUYFJ6bBYF4iZ7PZ3NsAwtjvjYrN1J7p9ShQnAg9AJVQMUopAA73SYB6yuUTH",
  "key25": "2MLNUosRip4T1cWGHitXAL7L94E2r6AjUazMUKMvM9k3PP43rSM3mw3tJbBzvq9CpCbiCKwPgFXZHamZakEa3fqj",
  "key26": "bCBZsmPbjMPQSjGYD38LUKLrmmMBL2JoPMxbhhTiPqGrvzNGX7KmH2diVa5y8hB45TEHq9A2YrspFirtVgYHnhw",
  "key27": "MQpUD1yE6heCFgzCjxxTaUbW5r6xMw2xnb3pTLnVaESYHSrwVMP54BFApag6cHgsiepwnPs4MRRgJUk1HiLhgoD",
  "key28": "5mUdxXvaVKnrNrXxBeTW4qQVPd6SA9cEKt2M651bKX21ugmj1fWhCympwkkvMPpSw6nWKZEQbHmT7Rg2ve5jNt6V",
  "key29": "661MxbMnhEPaZhuiHte6Nh4jX6sbRwauW73t1N6H5y6p9DV7zvEQK2aAz6oQpeyFPFqPxpsMTkGw3N1LnzDyYHAR",
  "key30": "2HCXR1qBXxxqSX2gFxFhz5SRnp968KqFzHgiZudRk3GnvPcuftFcNvvwvdPVe9BNmo7xjcF64F8SCsSgqa4fVuqS",
  "key31": "4AiJqXC668TQ15EQm34ohwubw36jAVdko9ZW2iC6gCKBHhYeVV2A5RbhU2JDZCTL9jctTp4rXpdEnFwb1p8xNkgp",
  "key32": "9AZaHRsKqa5Z8jSchrZkcWfjxXrNR9mEcdteZkDoEqxfdcPZmwrKQTJEqjA7yeht47jBEJWaAP4tawDF6NaMLQB",
  "key33": "WjGw23kTpxJsuSebcv4CPG3mtBv37F7Kh5oshdY1uCAGxk9qsy5FFABBwbigLnRFRMdKGaXonVNPLCam3RrFLFe",
  "key34": "5T6UHxjN339gg5iYFQ1qCdrM7MCd2nvyDS3r8VHVpDxNTRnusJj2SwufmBcvWcNCXtgbBkJ4qesdkww9gqzjuCD2",
  "key35": "CxkJYcQXxneQoB9ZFaWBT7zdFcwarwjoCKKZvn8bvVrizc7FcQStJn5DTTputXcUkioit9NFdR814U3YoRh75EB",
  "key36": "33CocttSdtDDpyxBafkEigdTxZzN3iceCQd7nARvCbkQjkUrejVf8H2WUNNfFk52HjqFjyWmD214FQ9coEkWA85c",
  "key37": "3QYCnas27Z8hE8uz9Jm2y27u1PEEq49x5w8CeF7FX6aLpb63KY722RE9vScCJAivJMLvA49DxyLMCfQVwP44z1az",
  "key38": "LjAvCptXwgnTkT4uGZgeLY17NyF8WxUpRLDsc4LHES2QtEmqzALYFEqnVqKiXQ8aSRgwADT3zhJii5PEWJq6jVD",
  "key39": "4vK729BFoXtHhLDpe1dG65PCAswQweAXy4LSraePAKnEtpNHbiKiiPweKMho5uRbQDvXpyrxYggmj6gg29DSDUhy",
  "key40": "4faEDUAY7UtSPTPaujHF2sFyQe91ygYJCpyUQ9KxomfDsH7y7Y55bXLuuVxjt322gUhCBz83AffAhfMmnJjyiQe2",
  "key41": "4VD7WeUUCnUoFoyxpHc7xUShLopw2Y85jaLF18opHsQwRGVLsn2ES6oPXszQjnU2ooZUtmDvJqpCQYwP5QoB82Z8",
  "key42": "ruAB291wW4CEhUdDD7yo449KPpohf3Fyw1AgQKTp7ro27FTr3kk9PC3V3wQDeaoUrqRGHcE4srD7WygcaQnYr1F"
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
