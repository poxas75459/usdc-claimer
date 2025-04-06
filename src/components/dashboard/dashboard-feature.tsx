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
    "5jDXQsAE13YZHBy6TBBccFcXwHeasDJRrv4B36LWAK5Wy55fP6trwS8ArJbfYAT6ZTh2n1jELtxBj6MYw1UDWD2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QstQqaqKJdeJx4GW25FtzAwijiix42uM1QgqWTChHpf329zk3tVNBSyJMM3womE4Rk3HAPUP5NoMe6mFxx3aDLF",
  "key1": "2kb3bykujUTegjj8UcMwBL3UACSFGeax4L6PTxFijoX829PAwqDUfcn4oje2zSEhKZkzKo5vyqGY6UYtCXWX622k",
  "key2": "2tQfwxQuFmzSst4dLythbNNsnWw5D7R7mNyge7j522Rafc1itaurTeLcihcLbe9U1Pw1P5bdMgrDKVPxPQQECYwg",
  "key3": "4d93B2uEAC9g79FHMGnNu7gy8HZsbBUibVkFSiEb5cwU2D4unrLw5XLRezDVscx1K9XC128hVUU2RbMk4cUCYNhQ",
  "key4": "3NJWmMdFEpBRSxFmX4AprEeYm7nryxzgfuR1o9Y4rLVE4Gg2WHkqH36KWiyXAf7RNJRNdEmM5LZ9uCXx4FwtuWSr",
  "key5": "3CMVVMWRDbGfPQSao68GTaUNKndxLakQgVf7BUizspLeynhSzYtRdkqT4bQptGrGrXbgu8C2zmTyW3CCF91W56WT",
  "key6": "5NqigW7nbbQyPPbn3equy5S9C9FvvwhTSXcdoYrUHSFF1HhrDYdUCA3JaWSmKjyyypu52d2bY4rtjajNAak73vfp",
  "key7": "CqWu95b2Joby3TJt4wvdkucNLRAbRdtWeaVPoRcgsboiJLMFTWwx4WCqWxBbPCrPa6njPbFqyTaxZZTJf1eDiQp",
  "key8": "5przBkY9SbTeEKQsvN493JTzsZLVqhmvh4Yk8swTDf88xWXJbv398XFGuc6wdom1F1qjcyM7ALAZwKtJPh3wYHCg",
  "key9": "2caV7RdXQy7fPojqnnp6NSMjmo76RsHHu1aioApR24vNFiik3Pi9vhcXJnmLdJ29D5gG3SiksLbJMWBGRMVXY52M",
  "key10": "2EthfsMkx9fwtu97xkHxV9SEQkxESUjDswzPFC8oXXcHp1cTg1iMYUcL8pdNppSnUwXTyWY3rMTWWwRGEhAsPRmM",
  "key11": "izw4jKoLqdCAAeFd4AaoHxkjXWkmSidfLo8Axku66mknoPQVuFiQTcpUUMKVuoVLoaRbdVauPvtjUBTsJtmV1ff",
  "key12": "27UZCJ1WkDi7EctmhnnsMAyThYJjDPGfi9GwnEKLLEHbTAJ8USGk1Hff1nkhPJCoXawW2DxJbPYPYB54jZ177JWN",
  "key13": "55fYuaVYkW8XSUDU8NQsE9uXKpGPEYf9MibiDWMEyKzRZNPpNft4JC42nxVYLSyM3qAmdkEQpetyP3DPAyGdst6y",
  "key14": "2yrCmgz9dPQo6cWf86C493UhzKwqPPrfRGQb3X42L1cA8ah6fydz1QZH4t2UqTgiF37HH7Bjdg765pLkBEv7s18M",
  "key15": "5fgLYBQJ47givS7ehzfjtn8jRrLNzoYME7n7bVawek62ogJGxi3znjL77G7z3xwFK9yGUDFSaz5KLt8CpZ1QXo1",
  "key16": "5CHQgRriqd5kXHe5QWbVUNjDnQ7V9kHxwtCjBuaQLLr1cvdfEt43eEaonH3osuLHgzKDdFWZw7WgQQwE2AybAJXz",
  "key17": "3mtvc1UAutC454tyck9qNqj3hwZCA4sRCFcqf4pGweLUFLvs6L3GDop2cojK4MpZHNdobThiQEwHJH2N9qkz9PVB",
  "key18": "5KpHQpU4Q3xAxqDugPMB1eHrL2vGc4ajETt1tUDXnhXFTPauJPPn3GyXwSGCZVPZ9UsXNEZUn3pLgg3mWCcT2BW3",
  "key19": "GkER76S2fQtN6pT5SMa8xqAJoegaTLpPqhaQbTorSTxHfQGtwS8zFqm3DTtmoeL8qdgVbXtMeVcnPKFQk9eNQ9h",
  "key20": "3YXrrcW1yQe5FQqgv77taW6yNxLifVYsJqvkXSUX8ptjDuEG3rvL4fZqciPUaDHQyoZBYu4nVMb1MqEwoouaWhDa",
  "key21": "3ZrYgXQqGZ81uWdeqGkUadwWXm3cV8yYNBxdcjniu98cDvLfwPMxKD21vGNPyDCPSFyVsGK5pUCSTMj5JUxKDDRi",
  "key22": "4svH1KqH5cniYABtsaHaKo1dAo6Ug1m75R2DEY1NjuH31s5uCtUaDyiziRh9z8SSzVESfcFysUqEfNLEPGHcm3Ab",
  "key23": "oWrQseiNaezf8ApqPLiMW1Z4pCz1tYgEDPLuvjxtrMuzW1dZHemrXmB6BHzDEy96EWNrWoyuSPHubCsjU9aWrds",
  "key24": "2HacQWk1zNQk1wsgmcmYBSCMBc6aKR3HiSYvk77GSq7YXBieNVhi4c6S3q8YHwQ3PUbVDMgdrrkFBCe5HJahu6sp",
  "key25": "DbXbqujwj8frJWYKtj44vu6TwWpZz3AVHaPjyic8rnqVud3cAoXbs89TNnsYsixJ7shREDAYPJfb9Z9uV1hYyvU",
  "key26": "44tbxGFB6UWaKsq2scHgpScYAzV34ekCvdxoACWD9CAWFHawyvkEpBXv9sJEjDt5NVHd2EhLGTy9YMMYy2EaR9hR",
  "key27": "2WaW5i1rbohpPyPkvUghL893743aqEjkcHRvTdD2fWYt8sNFSwSG6TKgjYnfxf8eVy1zpD3dnmeiChXKz9TYWFx6",
  "key28": "2Y7YxWBdyijAsSRAf7z9CJhRS9un9quLrz7ar2Zzi7Nr7TTKsYRqbdhsXe859j6uvW2wuzhJkhcXLHiieTnavZx9",
  "key29": "4cPStA4gsmsa7DEwbTQZBMjeDiqWjrJtWr2oicLeDtUd1W2UzaST4ezhQCuUyzyc9NDHAhRdQ97YNbJ5u3HJBCax",
  "key30": "AFckvwtEbcoTKagDxteU3KdUcH5w7SgBcBvk9w86L779wAniiSHjXvST4hAPggVAGsPnmw4WhwvMyMgPBA1eNX3",
  "key31": "3vDLTxt1gHXT47PgzZJqtQaAGUEZaUmfyJDLYKrxPNLnNtmnWgjnXvF4SxPBSbEVSizgJLiNR832sPgUX4mEy5HE",
  "key32": "5A5p5aKJQVZfAo1823rEyN6BBmpfhbXAvT9FGwGkK9LQb7jSLTG6Pa79VzhiHHpR2JuS5wxnPV8Z7uBmzjH115qU",
  "key33": "4G367cSHpoPso4Wwmw3tvjNWMKVYccwhmh98cg9UKjZtWy5pQeibDF9jbZnUVRnZPKFMo4GNJLagVcinbYxk1b1K",
  "key34": "5qkgLoafXdkRdD7cHTXo9VorB6U75ZiHRQqcNXQ7AF3rKSTMtY6SxWzjHY2Y4GGSBnNW8PrwcESKJhwe7PWU3ojB",
  "key35": "4Dpmoi4A4nnB1yLs9qyXRpVHeZy3qM2ScyvWdDT9wmgLPakNtCdZQ6gQ9V5BgoTTdMGJqqqd8N12cYzfGmZwLEWs",
  "key36": "5cdxNWqodrR7115f9fhW5PkDV4o3zR68aMMVpKwzcMoGf9pDTBTrwjzKE65gqqx5dh2pfT2kwYneWXiEAo8FNLPv",
  "key37": "3fc7Jj9XNSa5F6FpGdQDyUWSU1iVEH5VF6wbQy6spcaZ935r5maNSP8mBudGnZdLGthuDoXiY6kyGjm1qahbaCpD",
  "key38": "4uwmQ3qewPhC6ojqJG1sPJYTJXCcht9QA6khi7QiH7nVKuuRd1gU5JXZ4kvygXsiHmSTCDfhCjUagCZGhg3veikE",
  "key39": "4rmKztvWzhUhjEJdvFycHnFhP3RUdHk3bXbxk6DraqCiqvh3rfzRwB6NEQx415nX2iNskEQwhzs3qYAJRniKzzJi",
  "key40": "6396aRsn7jmGdJYtJVN7iobLTUkgpVPyhURzERVwHHHRGT8JQ1nGT9aMhM2QucKRW6axSpJEF6pS1hhSXNDay8tR",
  "key41": "2Mux98yJ2f8hELHtY2X7eQn3fujSngHcuqXqDKugvz1v3Mc2MnoxD3bGJ7626c47gLH9jn7ZgjusMPCUGjsyHYPe",
  "key42": "4dAfcW1JgTXFadnXdhcAdMMdhGGMuEw1bP62dXLybThAo4ozob3wjsLjPsJnD4R5DR621D2Xhr2EtEsvA8pqg5Sg",
  "key43": "5gGJuwh1ZQyCuiHbixCxJ3a1g6XnTErhGSuig3ZMW4ZSbAD14AoeU4ytH7oERpopEMLWmN3F9w37eHhcCg8QD7tp",
  "key44": "2iXWYo3KjPJFmPq1AoVxsyKHgdKoyHJhnUZYYcj2bxqkaJVVfN56b83k5nudTWDZiELtJpoyskjuT42w2GowVEbu",
  "key45": "4f4XRVTxcPLHAsfn71No2CVKtdnF8VkDwQ28Wi51R7hs5FqMP5Yy9baMqyeiZK4BifSVERvooyEhQr7oMmeZiWeL",
  "key46": "3byFSocY5UgGTfdukNrodkRoGiR5a7XYpAns8tA3nhPvSpJ8vkionV66hMvGBzH8rGbnQaWjxcHNeybR53BppqFG",
  "key47": "zSbu7nDwsUpZfAsCsg7ueBeMPuCHWuQSLcXquJDpG59EZQN1Sve1Vddwq1sZ9oZjXzVqeLuvyLo7j4r7fK4DhxJ"
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
