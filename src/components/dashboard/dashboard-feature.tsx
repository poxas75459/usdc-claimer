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
    "5GwQVyLS4MuXAuu3fQqSVQ32a2j8UkeEaYyVDt6HfF3QpA4LUqefobezdFwJam2YZ9676nUFpeZwjMrkcDVCWa4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L76RY8RZifedeDdDuth4LhBeVGoDkrvHiAP4L7MV8K1sCPBTTJ6rvz2tHCejWqR9YybZHNLgyB7vzan6yRVQWqB",
  "key1": "PSU5hxGGKm1ySqbiep9QbmX9Q7HLNYPnFieUQP92sk6SjQ7s6HcjkGXiaf3Pch1sdQ7BqkXD32Qpno3Fafqg5CT",
  "key2": "4vtPBzs48qfjus3QrZrqLvgY6bk56qniq2HGh9SK4GfCUNnvty1UDZ4HDnR1BA5xqjTmMCMWQD7dftin4T2fTQUv",
  "key3": "3G5JMbn1jHnTRFfMxpjFFZLsro8GCCFxvrEB3K3TjXD6hMGc91e2oBesdfBkDyMa99BX46bWXTywsuUPrQp1X72e",
  "key4": "u3qSupKRVDKoBzsmxoXakmiGL5ab6Pu3SUvBJJoxdYfRxdCpPBnGFggSxuw78oTwpaaqKtcbekr7Y1LRkexCvfE",
  "key5": "4b5mUdjWhN8B7m4zcVKu7GXAqhh1GeR1YPJsZxP3usezfzYEVguJg1akGEVPDwyy1kXgBodRQh34fV1CGF46ck5d",
  "key6": "PquPrdr6VpDSG3mUBUQiGT7gFkbGWtg3Mhs3hgqqHmEMymabdqHmkgpndA4Uw8VAWWqWWZuAVGNVGeTPvuv9FHK",
  "key7": "53eEDsx2vDm81hNbLjFWe6cmwZqPEoB3KRsPBhhEK15kcBAqyB8F8D9ioZJVLi91NVYBcwFd3mZ7JJ2zF96QNpVZ",
  "key8": "44s8tGFNjhtjnQ63RijoMFLkXZdmxQ71fBc1XKUBEkH3VsLyMDq4wREgWdACdUCxHtCoKdJUrvW6tLkCbPfoWAp4",
  "key9": "3RvZg95YC7cgMxVkAVb5xBFUAJRY64FQGBrHQ5P8h3MhTQ5iSRjhuBCgSk84Ritf3YNpw2KKYPpdmAnQsEbD6fNb",
  "key10": "2F7cKJ3xU1Z2omNLnp7ejox4NG6qJ9B8q96YoGppHpAZC4nCARuWz2q6o5DMs86pCvztEHPDRTMha6jSXis3i1df",
  "key11": "5FzaKJyCwBjPKrR1dotnFX4PJdJYKGLsAqpF8eCcSE3h5wiRSsFVBSSGbf4Szhe1ZFbWLKXEBtAXMhZ92gLkdXcJ",
  "key12": "4t8mXq2KqfC1dv3kLUSPG1ntQaLTocCahp9ErG8zoKbgmDPH3THuP2d73S7EkJxW9Gf29Ld8Q7EzPSJXcDY1nqWa",
  "key13": "5Fn6wiZFRfUATt5k8uHJv65aBV1YWQvoWFGZVKv6ywqn9zwELoidd3A55YYDCJ8dns12MiJFQkHqXbVtwcZtURim",
  "key14": "4uXkvzPDix8QuRNFArA7oYACngdD8Guxg9uwjGPgAcf7AWkuTBRZCyKyoeZsmjHGA4vNrJBdW4tN4ijC2o6VNDNb",
  "key15": "3F7oSQHeXuYq8fYqmZmCA5t6CJGrfV3tgbjvv42iZzKjeH6P7CeNotBpRYEkPjFxJyH12C33zyEvt4h82ZgpEohf",
  "key16": "2uigkTBQD1QGjrLBETnQ2eBxgJjTHNWwu1E8dycCLVxEQW29YK5Rzd3Cndt7UTZzaaXm58bQgzDWYA95D3x295mx",
  "key17": "4sgqRSx7QaBPqint7zyLKSfJidiw945LmPSutQcZvsRNTb4eRLZWUcnAd53DtWZtuMBA5k3A6ekgYed4jmhox3e7",
  "key18": "1SxQn4YrJGqbU7SWz2fyXXK3nqLyZwcRUkQWkGD2WoY2xMoWJam1MX6mFYhbi8o4aJyVBxAptLiMtMsj1wRZkGq",
  "key19": "4cynco5NnQsL13F5xUbwfFB2PXMq1yGr4szTfEXTSLujgCXhUiSQyyn1YZSuFyvW4Zr8y1mNijUwq3j4bJ8ERxhc",
  "key20": "66XVcD6k2L5E9w7HjJ4MFFpnZxvSpMLAdxqxBqZQtpJX9f9FKCrQ92n3CAgJBgQaGqPrYkAofrRLMzAv9kEZjfcD",
  "key21": "2nNHJcJMJUazkDoMhKwKHm1fdD9urNJ7DebYRqBqTNpwEre5tMhWML82ZfkLASV2vcL4LsTaa68KYaFuNxdFhqyZ",
  "key22": "4QyZcYC4md1XR67mupNMh8s7SqisLw4YXXpjmB5m9pgZ7SSzZ2d8twAfPAh9NTWqA7TsUKepotBtEBEJmcNRm27Z",
  "key23": "3Ujjroe6jgUFzVac3qPxupr8pwZExhV1HDj1Qbm6fyiXJUKeMggPywBGKH384nFHSQtgAYsZSYgszzxZPsnNUiqb",
  "key24": "4SSACjSKxvNx5nXsP2A4cuhqAAkUkqqX2WvjfPsYzWyfBHzfuPL3CCHB79MZYRGshpE3s6XT2n8F6VU4rsuDNkuf",
  "key25": "KbFN4z6TqWNMpd6V9oeSupAY48JiJgGB74tYTYVfgpny5K3d9p5ZYnVkgi3KTeqXyWkuiZjRpR2DSxBmsZ9VUiG",
  "key26": "5HLgtPapCubh3TtpkaRgcxJuiNjefnUDQC5z9DM5oaZrTbdv6UaAbAz1xmsYkiz22YAK5URJL6XBp9sHV3sdgsbF",
  "key27": "3EUgBdFjNVsEbWiva9gdfcN2XXkshs74VbfBDs57D7WWX4LQfxsrjowJTevHwd7GSxu4jk1FimBEXc23BdozeNC5",
  "key28": "47TLq4M325C4RBT1NxKeLKG7hRLG1PAKbCcgQ8jDuVDbJm7CKxAFTvQp4MG27nZMvEcVBCfh1GmMQPRKw5XbuztS",
  "key29": "56YxoJe4MEx38qTD1zE3ypqDTTZhnqbyuZ4wUrZ1Hh3obpAoJPPp3EXUZTt3kR55wWVduWWxneyChUo5Dfx6EHUo",
  "key30": "gYhCRG814u6tKi1Rndi1SoEsMPFYsqjj9kGCPYUZzqFWxKnzmBkQsRAr6wyFpjMMBYYC88gtnQcuUQEArciy6vM",
  "key31": "3SHu2U9jeGv2r2J83osUnGqFsZ1f52xfX6pbkYVnnZF93nBMwJPfRT1pUsn5huS99eVj3shMq6h52b427BgBnuVF",
  "key32": "4eo72Xyih63i2dragJTBdZKDTRPVtJEo7fEG6ca1rkvXMNqqTH65jnoasUhwgsnwdWpM1vLDFner2v113Enm8uys",
  "key33": "5Y82Di4hLXxbUrsCmA2vL24ARhHTYggLXTLqe25ofp1Z1s9Kbk193ksQJ3J3UtJwz3hfAQbssGLeskGMb7AYyBJU",
  "key34": "3z69UmcmfHpm2v3sM1vULs5NPkf64ktspxjmRvHnA4LV2iNZ96tWFvvfJFqHj8Fteek8VUF5BENuUaaFqHPf9QCq",
  "key35": "3DTgZbVF41txTe6zAzLxPa7n33g8zw3fFCdzQiebRtkAZwyfGC2oETWGnYJ53SYafaDHvy5gPfBdoJD7LfEwvEtt",
  "key36": "4b1mFVDnTj1xf5quwVUTkRU6Avs7dKLpR3EaG8VVmHGMa6kAHVfoqvepWUNeCbCBZYJ64bPUR84pFSyuAxZsJHm6",
  "key37": "2PbJioBRSTwszAoa3FcS8ffhmtgwCw3bMymhndxLDS9hu2AgtrEGmWdN6E6nbmTTeysXj9TmigJYpZA41BDvFVnt",
  "key38": "2M72Lm4x18wZMERVcvq3V8pvvLh2xBKhgFDrPgLMNVUApH1ZD6CcZ5icLJ3q7L6zaoPdVNK15vu5vt6V6p8vhqrt",
  "key39": "3V5Jxv1mo6RN8sDGB8PxBanR7Z1PFX1p4MTpMCgEdtvHZpSMUCAzch4cqTeZTP19SBHq3g94gcqoujVGr9rnmtVz",
  "key40": "2WHW51V2njn9VSA6PpiRxycg4agYyxJNGenHCYiTeZwcVRpd5YWVVeZZbR3iQSaJ5pHdTx9gjFHX8VwPAfKjTaFn",
  "key41": "gwn9wef4fdj4zzd9vYiUFiKKd6r1N1fUhx2e17YEpqFqdsy4sSvMuiy9xL2bWuiLG8sW6GHZowo1ZRQFJpBNrAv"
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
