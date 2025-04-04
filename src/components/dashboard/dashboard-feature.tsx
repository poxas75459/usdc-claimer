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
    "64b9KnRdtUDekrsjCrtWWQPEM6sPGp5ELBHv1ryRw1vuCnuuoGavQPENL9ST28anNkDSArmgnwkSQDZpaxp2UqfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L3LwSnczz74mDYdcZKUbLkjd8XR6fRDNvDGXgvrQe35qRZgXngTjoep8YxTY6y9tWQPMhEyQDuBBEqDQR7TLnWk",
  "key1": "5U4RrCEGUp3wpLnd1uBnmbGiJFgHVBdgPEtppDQT69nywiEnsRafXqYV4zPxNGwEzHMv1APQb9jDtd5gWahs54ws",
  "key2": "zWZYKE92AcxMZhHnN2UpgEVun3ZbxfHKB1sLiS28UqGsMN3oV9toBUVA6BXsqztJZBFTVaagrjBfmxwbXcuNpRf",
  "key3": "5Skn14hyNsMAfhC2gt4fnmEaarkiMoaZw18Devn8NuBCuu9AsJbtGsvr2Q9oiB3bWmnhrK1UU9rsYxeP1aNqTTBD",
  "key4": "2Upu4witN6ozcwCAzfJMwMeXHv5tzf1yBVk1EuWxyqstuCg6Hyhi3yGEFXFHY4bj8y8HCXG721SeoQnijdQsWivU",
  "key5": "W3m7JwKF7ztVWQgopqHB2o1rWyLWMxCDTih5ZS3tpJ2hDjF3csadwNgi8hNhUsHNNfPeGFGHsSZxXLda4TUhUJW",
  "key6": "4Crg2AyoGDrhL3fMaWrrzonfv37sJFi382UGEbHh2dEzQ1iRxwLckuYFPAFsp12yfm5sHddvjnbgfAGMCxxv2now",
  "key7": "3t9CGAHm4x98N3eLfT9YJ5U3yRd9kSXebrwSsxetC2zHvoMh67zyRFw6BU7PTGkn43KoCx3hGNoV4z3k36Dtqobe",
  "key8": "3JDvwnGcfpVopE4aThriJ3pqEE7oox7AmEySEUMxsMJrHBcNUYte765DdRayaVsTHZGy19Z2u16tvs6znyw4BnTT",
  "key9": "3cK8M4zritoDiu88sP864TwkW8uzsKSCMNSbXAM6s5xREeWVvR3PRZM9s926dczwJ8bb7GrCZ4XtmLuYYni4qoK8",
  "key10": "QfbiStYw9YzE2N93XjUna1SFmLKBXev6LVdbCRN5yowVw5bGSFTvWdmjjKoSXjJTNoA1KkjYVyeiVHt5LVeu3N3",
  "key11": "VhWrP8Xsbvv9W5PDb4fQgGfBffvWupkF21mQczg4fGMUQw4fF5jbwyspxPRZZSRjpdgaCmRpJvY88MBZT9SRcrd",
  "key12": "4MVpeNJFgSHZhx6jP5e7YEthuWPMWcNJERsPd5tj7f9wD4K6T9dHZ2kq9zJ7BWmRDGQbucPVhpha6QZovv2d3Q2P",
  "key13": "sTuLqgZkk1hw4hsva114GQttmCFeDYARG5LYnNBRPjXBFD1ouNrtvfhvk4wox4J3bXs9cqhhp3GVBkho4GB1Kok",
  "key14": "FixBoYwqo8Eg36TuBkZgAtAM1Zs3Mr8hvEV9H5jozqfC6YYqWAAgjrcNdMCimbrg8Yjp9ncdP1NrMugFb99XD2f",
  "key15": "4g8sQzgXwkDL8t4mzDG38oD7UpR1UStR24c5Bws95rPKN8jz1i16rMwnU5JitXyyLtCa9qqhMf54JSke25Q6WZs6",
  "key16": "ixoY35CS7YMxUyx9i5Fk5gaTu2er5eEmm5FU5dGrkyGb2hF75BvDCZDus7TdDshBCVNYGvSLZwiPjKsBrdsn3by",
  "key17": "2aFA4zJQhiv8R4ZsMojCjcJjE8Vi6gxhqo9NxAY53dvuWrXRxFRg5nwxscNFcEdwhGtsEu7YpYq4HadymgxwcEaq",
  "key18": "BYxmFfrne9sEp8TMctdwkFeqbFJicHAsuTgPYvZya3htsHk3qezvw5S1YPfFCgpDRhT3bbzSJ4o5wMQcCTyr86K",
  "key19": "6PbuYe1MCqfByL9zZZzq2pURQcq8JR5DP2bbMrdbx1WWUghY75nAgMooTUM2RkAPENfyeyRWE42RVYwAfgN3XnR",
  "key20": "4ynSEfd24R4LFS78ogvPdM2aQZkHZVkY8Mcm27WSiAnoU13kZQrGdRkC2LyzH2TdfPjP1zGBQeTfUn5YzkFVE9ie",
  "key21": "2JS5bUCjSw32kov2RoYUm4zDR1BRRoHaJWXm1S7ZTiHspr2p3xPT5uBzQR8ZRBWQ8M3T5XxqfYcanZKMr8iQHb5y",
  "key22": "5bvngjVAU2Kg8oBBFNtxxQq47gtNzE1dn425sYd1xYQY9hqNnmK1gvAkr5jqdNQKHm9hZ1Li2E8mBWBzJJYvALmu",
  "key23": "5hLzkKjneCdxDRTEzY2Dy8sn2f1qNg4DP6AY8NZQyz8YXrmTKyaoDDc4DoTYkGBzk7hqhUHjZ7Vwvj3tZq132ciy",
  "key24": "3uevrSN8te8rbpQHZWqepdPtrbzgHh9448wMdTynavPRcoEybNXwrcwcDVbLDys33A9XMbPXZwYaYisRpA5dZBna",
  "key25": "xtLtvDbuF3V4HJD4ywMguNXxi3M6h3CmcbqRpYPcmGMTxG92CmRqiBJcfk3zD1iPku3LNPGVLQrDQCNqce5GmHf",
  "key26": "5RBtLuDFiEy6a3dLnxbhCvxF6i7SkM4cYEJriz8AH6KYYyBxbgKacGCXd26eJ6rCdqmJLMdhEdVNhkjr74iRnyEn",
  "key27": "5fDctacP7ADxd42YrjoQiXc3GXpHd4jGWprJapqNzZ2FohzaFitU1Gfauuoh9GhAgfMsph548QdX3YDMmELaim4B",
  "key28": "HkFaYLWhKQtXMX82AKzeojzPTndx9z5fUwUwbfcdLTiHLVe3rKhi4ERpUCZ3wi9gLNax2i3upJwNVU1jhunLnNT",
  "key29": "5Xcs4ayuELJr8PB8KZ3Y8FqhAA6mWJEbcUgHG6nVQ5mxtzoKZUTUNQ1omJM6YDtRU4ALn4T8ogfM3byFvzJGJBKZ",
  "key30": "5x96wmNHzXzPQLTEQcd7ZNotPSewKUFJejYBYgY7sfvybFgQKXmwa6rGo38R6En58aDzXf9saBwh99qX3rQWvUQc",
  "key31": "3nipBQmQJ2wSi2pZLnEyAyJUrKmFnhog3UHA58pWzMvVKJcjihAwXj8SoPpxkoagaMPAAcWdJQhuTr895KAMM71K",
  "key32": "4LZwX8EMwPKqAMQzQ22XiDZGCZUuvukbZGd6hEh5MzVZwr5VvnHgJB6T9h5r6eGnAEwDEXAVdinsHNr7y8ygMMo",
  "key33": "mvBshd4BJ7knPaMnaUrniWKJhW5i7xwaye63GoNhzB3g2cnPc4HsazToaWYCwHum1CJFPLtR9ppn7RjvQWtpNnZ",
  "key34": "5kmqSYiesHyKAtFi3Dg9G9eG42FxFYE8g1BAfU543ozJgA4LPLg4DzJFsNr3mHUTWfCWqmZmuTuyXy39uymqKhnJ",
  "key35": "2pHu1bKnAU9oRRX62SebB7CsotJJsA1opgAFejCru85A5C2yQeSHFc39sz347L3HbyaLqMB98FRiECqY6JMD64cJ",
  "key36": "2utZDLo9zFT4GKYmcYmZcjfTRnBhc2mSzTwmfX3sa53caq2h2yk2ErJfZAWsDZSmWwDyfGrT4M1wf6aNjwd8FhYE",
  "key37": "24VnujdtyJCtudt7te46eoojscdhrtw5pXfQmDrW5qfABso4sfNBBMaTqC4j6qLKhD6jhm9pTPGnKLLi37GCeSf6",
  "key38": "4dGpZCNapCnEGUPYPyUjSXQ7gb53vTajumPD9BkTxcWhBRUR83dpdMVnAxz64giy2yGfKwJ2Aqs7LswBL7Tosz7y",
  "key39": "66RxxgAxbRWXh5AogE8EytD3D3QqmVBXifBwtavSSuochfQ5MUHENU6wxe6wkQSrmZCrVSM7EuMMpDNADpoHmsxh",
  "key40": "4qgLH9G2yQ6vcUt3h4EBv43FpLvf6YJGQXWbZQ9XWwscx1GQApu3ve44kv1pUnxp7VMKnKwdhbYCsiKYZETQz9ws",
  "key41": "5U4agbKbip4x5chuoRSf1PcBvPEWqpH7m1PBxvg2qVW6mpRceV4U69hUZyHDeKjx5Lpkz9a4vqouh1uVg53BHs5U",
  "key42": "38DsNGWJySZeFWrirtvDDceo69geVQEKyPwbhA9NG1pqQxZkWNg7UE9BMAwAiNPUFhPoWkBQ9niSthH68f874CHH"
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
