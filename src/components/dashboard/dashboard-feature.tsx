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
    "2A46ECbvdPuDErrGqKxvPhtJTm7k8M2LPPJsuqfPBqT3wUJoF83EkA5pawKzPUYU4JBdDFMJ3on2wnX6UGnp4dD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9wtGioafVtPmBfwbJJtJ5QYDJ4QcCHs5yBpd1MC2BogGHWMaAoEiwgvHpasHexYJwk5ZBbKewSEu9TaMJVg12QW",
  "key1": "4d1h3dnDyMXX3bBHYahScKiAJ2YE3bB5rSH7HNHAhoLqPjM2mcmkUVk5rx7hY2BfZEd3D7N1FcRJN5ieNWsdKKGH",
  "key2": "TeZBmvBLvzUpS1vjRmCEXBnR8ty4XTdCz638pKT93RkjpVnNTGPGZvjE3i172HHMwzFwApQ9HPtKVbGpabjM4GN",
  "key3": "52nYMgpw1RUvKypNq8Pj751R3SFcagbCQENGkyqD3GazJHpsWnDop9aGKQWXiDVmRDfVQdrfcctnKFZCFG7thP3X",
  "key4": "4rwCDyV9R68jWA1aEifADSjaEMbX7KRhWGd35gCiKTGqyet9HXn7atQTdfWivs42hEatFUAQL3c4uAf3Hn7ta5cv",
  "key5": "SbRmH35Mxr82kuXYSkso4myJCQ4id5uLUWtYym4ADR3Y997W7Z16ADmhfzJYTJRLCtQNCpGjkwiioh4L6odE7mA",
  "key6": "4wzk8SFT23dHwGU8ekx8a91t9wBUgYbTKKgfAWzsvje7DRDRFhMe436FWG5CMd1eYE4RNvUEFZc3knH9iQKCP8Py",
  "key7": "2sj88sfPLXwsYMYZEX9mVbiKiVHU9fPYTNMSfGhK4w1cMnun6r8sqU395dKUJC6kWNqoxvtzaPqcNHnjKC4SZbmG",
  "key8": "2kbvMfx3yWm5RrHkL9xoUSKqdST3GaNn1ErjiPVG4x2ybdL9avFbTSfsv2BF3qYd7wcK4bfX8hTSSBp7iCRw1c1E",
  "key9": "2FPFXsPQn793PEYM4CHdNNesHvFcdJbtt8VCw3Cghvwe9xZ2dXNqh88Gsy9L9Xqj5bzLyaC2irESXG7GwJ6Ktvn1",
  "key10": "YqRYA9houAYmBP5Lt6J5i6KnAy4i4eEZ7QVfc91MgMBpgTbu37WaMALL8NxgoWTZh3V1MXmPPR43UqHWtF32Cpk",
  "key11": "2JScMrCtLw9sbJjQyHxTxc3Fvd5K2cbvqQYbuQwggd6pL9DjJY5vZQAhXipCNBoLJNPAtYWpGMwXgz846rgmKntq",
  "key12": "5TB3mtgS3oRL6ZEJ9LTiNUkfDhsNt6PNfWZzBbEKsLkrQsbJj8fH1Ug7AwMTaeTD8wgSaT2pDKM4MHoTucsPg1wK",
  "key13": "3nHTZRsQxVxUs5ajTwLrEDm9QHiWGndz5xUvbpcGMckTUsM824MSz1HxqouvkJuKWQDu6WZJVVQY8cT23SThKiVk",
  "key14": "4CxYb7579bhmYWbofaZsyyzjpz23dEkm2BWxkvjfUSznjEDuVs1ook22A9cfekh8jjCFScV5HCXMkg53GEMvAK86",
  "key15": "2r5Htu6NMRymtSMHS3PBvLwmtvR1mhe8o99EiCme6qtBc3Bz4v57d5dtKFBTpd1oupq4LBgqJ8bEMWUsi6XwtGdS",
  "key16": "FP2LTVLXtfNA8KKyubRemF5ZZj2DPMfWBnPBLHbUSfv558XEB9McA9KgYM6RYwXhy1ZtJD7AsbtuPedrCkhWJmc",
  "key17": "4zizqUs3FPB3vheLVdUqNk6fw48BBGRAdGQWeP1Mq9AdLSbrKCSsRDmkD5BDiah6Sj5FkDqt6ivQVprUTF1HExuh",
  "key18": "HJs73mpZxpxp5j2siX2a3uPGY1nknNu7smzaiLT364VZadeo1osfaL1wKqFuc7vtANFW41DPArB1PuiY1ctQMee",
  "key19": "5Lu1Pvdr73u4o55QBJKfRyjGehTcj4SSSPBbXYhkV6bjf4ebcSyPXoPhPfEAgXZG8CoSxqULBYZvB1xDY7iKLE4J",
  "key20": "9XdhubTm6h4dxeQSSeATiy5L4Su5YHYv4XDKu8JLSPhp5PKBiRqCM8L821g79uisr1seq2x4aBuWE1YvfD9GRke",
  "key21": "5AW1miFtEhppC9ShnyUjQ8wSoUs7SzY5FKjwa3htM5fxnYBtj4cjQyi2DyM9pwra7wbwCzTYp3LHCiHFA43akAmP",
  "key22": "67faFZaL4qqTTbmn5mH3yVt9Z8oTFAfGjWnt8yYqrmWtQv9g74yS3eZcV3gqMoT2Z9LfqYihazMAno7oDBHycSww",
  "key23": "4kDUn6uVGMvfB4LMzWMCoFrFXpT3mEuJ2CZe3r4J9TcxoLhEGxpyrYgMahqxPxuyrP8K8SptZRwzfYauTssRPW75",
  "key24": "5Z6VU8NTNYA5bzhsxKKHUT8Bb2HxtZ2jtk7EiAjGPD4G9mfD24eJykBSmNQLPxDS532834TWFQy2Hk5iFeTLV612",
  "key25": "2FQ14sMWoY6hEZj1sVLEh9qpabZZgUu87yzavEx4Jck6Km6QLXMtWcFTbH2b7VqikeWg3KKUV5bQ5fcTEDiYPRKz",
  "key26": "33jto65xF9VFgtX4BrnfgRXVoASkmrXfvy9ZAGvkGAmrDu6zMnkbHMnW6nRdgp7BqGggCJu7FBQKJdSSKsA9tqVx",
  "key27": "4zCqx2AtJcH9jyYbp2xgSfd9zqPCFYZ4uiNXVq3mVtUcHT9qep3E5Xt87fjioN2sDuqeS8mgvGvyKByKu9p9cVZj",
  "key28": "XYoAxsKz1heCnuQr3Wqu6gcrcsvBsdEM3ndZnrv8tsts5dGVB1bxWVrXzHGSkxSfAcLiQ3D3bJ62jo9ioszgxLt",
  "key29": "2i5hhq8JEsNm2ERTjYYa3Bqy8B5WC36yc6omjQWhSRcPKros2C2Gmofh4c73gssz9AyuBrcCDeGBsRs3chpdtNWJ",
  "key30": "3L2mmGwX7JV6uPsGDur8Nu8E43DbbQmkUZusyhEusvrxphYZXYaxqC6vGY7GczKuPGdztP2jK7vSVYFNPoomzMGy",
  "key31": "3Yn5KCWLJRQ1ZNijVbTixkvWMtZvHKdGtLzgVTjZhbHa1teykE2kTQm9Z65ZypnewXqrSxwFwoBeGQx1dWumohXK",
  "key32": "56rxAD4EBzawAfWpDU53wryHHqVdQUqUunHULouLnMBw4sBvkrzJJzEtY1cs6Xgm9g4jbZ3xqf23rYczTBn4RGDY",
  "key33": "29Brn3THzL1aRdWQiipvz39kctVHX7smw51LTQHZa9TPVQqy26QfnCCWoy34rcJ532hFQMj19EB6vpRSmmpv4U2P",
  "key34": "43FdV6ZNCKWABtDDyfXcJu7WU55URBNBtihQkPFAsm93wqxqBAHz1FmezgZYhHhu7E3VYVixCKdZMWeqFzygkX6h",
  "key35": "2USYkSEyHHjKLT8MrhPPiYt7ntwKD9E8nAdeJrSvnoNbCWZDK3p2NQ91D7MWgioqWvyFLEP3CAfQRPuAEu8X1tnz",
  "key36": "2CAt7s6HqCUVRJ3bkFwGGbRSjgHnpJptRJWMyXP5RSfrXBGV5aHLS75QwHtHcMwgA78Cp9aF3xiHjS4xMMhwdNmr",
  "key37": "GPt1ECo6STP6KDKsjja2BTCPviJqvXkruvReJzrCZB891kFxk25c7dLUGmpEiqRCEgM3a8emMwWVnNg3cSNMuSb",
  "key38": "5D7UWnoXbPLVL4TwSznRsXHUVkWTjDxzfAZc1G2iD25bCfVWC3DSvcpGNrosMGzYiCVLtcbXTDWxiy1ESsrMZce5",
  "key39": "YyscfLrsDWRzK6WMf69upCM84ykABaL6jLnPs8ALc8mBAtArxsNmnGpw7H5nZvsw9fZzgyU3hkZVqWsHAcerJpP",
  "key40": "2criaHASAhjN2LT2xYDqUN5zVxnid6bo8WkBrAsj3TzMaozHJ9tyBp1QppbfCpKLhaE3FUCiDzHqUFvN4TnmvHCB",
  "key41": "265TjR8Xd3SjhhJgomUVtqxsJ4AMrR264wsYixWbjnCRgmwhnfqggesTp5jeRqzPDSbcmsecE5btZqriEbtbvxMQ",
  "key42": "3CCsVgzMeWoqLCusFFEsQvxKgBQPopUL748GDeffQP272ihJ5a5QHaZUNjeNsTNguaHYEerfW9PpwwiKudvyVa1y"
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
