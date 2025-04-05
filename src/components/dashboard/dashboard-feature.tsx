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
    "668DwzbBUsw4FW3B6KtUpSj4ZFFcEjPLcSivsB1ijLjKMeqrsZWHQcQLnhkswAVc3sXcEsoBsRZy19qAGdGuF6aG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tdvQNMZBCmN5TcX8QqkyiTC8QHmZ231tDsGWHAtiFkVPhyob8vhaB6gBBQKp8nj79xUQpkXqm8VzzdkD6zeXzCY",
  "key1": "5fv5hQqTdLVLXBE8Tnh4XTPuEK6HuEEks8xRgViXq2PerMdhoovmhZAiVbZeSUVmSnjMQp6sCaHguZUWQ54KKJY4",
  "key2": "5rMijNzBu2nzf2K8GuUz5Y7Q4HtFE1ZWraSiZVZ45CDNFMsr7SBfnvKdcEBsW7nuuhm1fim9ed3AYfa6E4usKFpq",
  "key3": "4aG2XV23FqbmiTgwQLwabCofah6qFNvzr1cseWTcumAkSEAR34mjGgsSYx6S9scpBYBMfoAAJ8T1kzn86KLm5Ma5",
  "key4": "5rTb7xSiB2QZZXs6e6BtpoCexpbFQJM2423NyL6eqUERF2R8MLtAkR3HpYp54GVXTbst2s2FXagk5V9nLJyfu9nJ",
  "key5": "3ow9wMP8F7LNY2Y7hgYnWXHzSvXLiCsJVMJaGzmS7vFJjNEDSWYvM8uWFkcEDoBsajxfdyAPou6w6NnT5skoQe7N",
  "key6": "f1XPTY1YaihCnm5Dwbq1o2jNZo67B7d6gWPWf9ugZoE1rW2FXusvxCVxBdBXyuYg5QD78GdhgiP2fHPYSS4VeAG",
  "key7": "4W6GqUhvK4C7puBkFqiZkdJba3rfkqtMLNxJ66FBYDbdQtHsVd1YHfq4f1SBukncbQ1Lu8uZA9ixBS3LgPca14QY",
  "key8": "i5h9Go9bFXs7ZA3yaGnHBYEpc6qQ44cN9UjY3jxCD2dZeP5pEShKsm2qKKJ2LRU9PCTfAxuRZBn1iGJEmFxEJy1",
  "key9": "4bCxZXyP88RUzu9Yh7i2SHqUvHb8A2SdFHMEA8oB4VLMYVGYyDN45U39v5vtbsi7ySRRioUKbmB122BxE4ThqPec",
  "key10": "3VrJy6rmtj6ULxKRp9PfQj8Sf4bqohwy5hfsPuZZV8t8KdtbB1KdTTRemAWciKhHtReLm5ANvNLnwjvn4yrhW4VB",
  "key11": "4q9dqGVnfixYhCRrFCdB1V35FvPSJmG5hNXX3DPRi8jPAmkuZDVMtg7X8NtioKgPnVmhJby3prYbtYGiPaKf9t7r",
  "key12": "4oxqXc2SKUkwcRZMVDYtTfsfjsi8ut5uTKBmFXm3W6hXFqL4fG4hkqkbg8FyNS1S9Vei3mQu4JBxKg3aqp4khtKL",
  "key13": "4yMxj5jSS7oWeVQYRX2ZHHMjtigofp22b3MnCsBmb7HviJGJAHxgb3WxwbzvkEVHZ6MP4uoinhBgaS3ayLCrEut7",
  "key14": "53R5khcv2e4X2cZXjF7b53QSjUrAehxyGLHtu9ccUT2PHFBVLbjtA1gin5SXo1oQUo3DxC5ZwVz5SyvBv3nFpJKP",
  "key15": "5j7SFbuaXR6LpXMW5jSKVnTNQxchxBm8WUA4pfzuiSQ4hRUk1pHK6QvwxkX1jmAEvGsviKLWgRjPyZnpZfRAdhGE",
  "key16": "3scyQ2iRcTbcxkNKJd7J1ULuzJnAc65teAzVNAiLBe6SQZTZTGTfTyLkJbXFtQSX5vSN3RJ8noKRMY68ga8Au4MK",
  "key17": "6597T66oGtSjYMhAd7ZDak2EdpfXPtLiS5Hq5eN1FKQniB1VA8gdwLLv3uH5EUktwVS2phd5ijuyjjG2ZuzigFte",
  "key18": "344A4hGjT1FZx4Jm1jYdRFTCcCPfq7vnVVCKznQSkudrx4k1mmiTpMeDkYg8Sm39ZZjemrsPMPbqDZybiDD3T3aC",
  "key19": "5ypcfMVqnrSPuiB4XsRp1MTgmAVvgx1GM6kC1U1HMavZ1acxMMwW4vJZQLY6exo64RCyabrkeRa3Q5iFTM9a9BoS",
  "key20": "5kGo6Y1YsZpYwagw33HcvBrkQDRn1C6nkTUFcPGZeSajNYWQ97ez5tdpye9FEvhW9su2tBFGXjkrE5mG8X8GH1Dx",
  "key21": "X1y5fTc1csjATrYHRdPRmJQixhUxjAkBhsZSgQkya4PSa4Gw8dKf7rrpbrYEnSMXqoaSFA7m45kcR27J15cSHPF",
  "key22": "66TPeHz8nrp395Y44yXnjNrSHKtFXXD74LoYtw1WCbXyv1hkZbqxDSyo1YcWqRohYBHyJ5Abmt2JcuAQ7SkUSnvs",
  "key23": "4uWrP6LAKtFDeHCHgRuJHra5w6rcvoUcPpCyaNdDC4B6UZobFUYNLLtGw4b1q761bs2EJ4N1ZZ2ANsLNN13rJGaY",
  "key24": "3cyPeE3uj5HUEFgpaUD2pAudHkPiMo75kt9isPULZKP6cJxEGhfqU2aCDXxu6t2w7c9DA3reP7z18uydJqbRkACc",
  "key25": "4kLnXkDwS86wqrXHUWECEwB6hrsCSjR7yh2MVtmxuF2pLRcmekM8dGBkkEycMmmpaJA5CtnxqC4pHHHA4a6Vz3BH",
  "key26": "QbD6HoGV2RSiiNjwuh6aboJSMs8HpCpsepjGHdPpnkxp9wvfKoGqn6Feaj2NQf11dzgUotCJAVwtZdpaasVaEn8",
  "key27": "56Zbwkqk7ucEinTLKhAD6XWytEzoyHDF14XuosTXroPHiTueCZY3PQYnNfLY944HqhsFyXyoce18DrfLoWuJ3koy",
  "key28": "QawEDERLWwpKPaKYrXRtURA5Z5sFXpgG3p6SpMKTgXpcuv9fFCcRb5LdcJP9NrTSGgDt8BNXhF6Zth83aveq8KZ",
  "key29": "2VhNjqQBCgQCDeURh8ftkCFufyvhqzLytUMegD2PxvVvzbYDGnqjPvgMtBx4BJcFMaSFCTdK8haW81ovsQq5zzts",
  "key30": "3xt4iAuYCmtZ2eujEkeKPWy2Vd8MYt68915jNbcxohjwBZNFSGLDX7eftxzdPX6xZB3FXuTzgaqFiMWq8m9WpsRA",
  "key31": "Uqo79yX39m5RiyS9GQY3cJqyEUxWwrs3xUKuH1PxuAWjzJZaAs4L45yLnyxJsoHc3tSPSLydYabFfC1b3nHkPBM",
  "key32": "3P9FDeL1REkq8PUdYjskFWmr8D1oXrdv3eqfVjSLbxzg95Hu9mXnSBCG1QHDFkhMA9XqTofAmkyW8R3Wfr4MYrG9"
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
