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
    "2sByJqaHZPUkc9iRBuihXXdcF3BfxLddh2pLvf561VwFQL7NDSmAQZB9VppCewh2pf1VpTTyeceBp4uTgJxB94H7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P3UVGn9Zda2jTAbZCADhTXbqHVFGyv9wAfwPJjaDQUVaaJVBG67hN5QvvP96yN4EDvWs7icRBrxLJV3jj5XqtYd",
  "key1": "2yQPMC9XhkrVN2ZbQ31Xr7Umt6RKDdjJ59oqU1Di8hMt8f21txYRtrCcpdwuzQKHa3YifMsf9aBb5QpxNAhdkLof",
  "key2": "39RfAySLNPBjasDMXeXPKU18eecoC84374QCRmmCftaBsgrycjizEAKoFQ4ybddwzfFNDP9rBnaj3a7PeNbumGpK",
  "key3": "5gZAZMrGaSC4dH3vrD5LWfqHp8B5rFFQcxddLA7WLao6QrxbzPNRk1MDvGMwGYpsjoqhM7TfXFotAWQwGUsUeQ2J",
  "key4": "2W2t9G433n2N5v1aCfT1BySbV8wvMmEgR1QV7hVov6PjPRRugNLHARug2URG1iSY8KKG97zKN1ZYaKy8bPNUBBT7",
  "key5": "5eg7YDBKyr4gtN4FYtUKw6n6ofjDibBCXJxKEjmDMvKRhp6YxkWgcVuADSdDZWN6nMGzcG7uwrqTTD6x8kSN5aCH",
  "key6": "2HrmDixWd9dYNDXtYiYz7fvUMnqL35QFHLv4zscn1LK1mEi5DfVmFS7ggvZN5eLyokQpk787MbR3XL611Aw2Ekzc",
  "key7": "3FNhgudQm2pNQqFfN27TgaC7tZuP7zGtuf32LASufqmxAPAVmTkCxoU792aDizks4zBB9DPAiCffuqEHxs9pLBFD",
  "key8": "4jA2nRPSdUUoPkHkVQUFcaCRk64btBuJVNqeRUYQNhWo7ATn3o373uGThZBzHbWCSNxhKcUe4cQbk9Z29D92uRK8",
  "key9": "zPeZPs2XSRkBezH8Qv92NU2S2B7metbqyGr84cK6w8CqYnAxC3G7uymRP9uekdHEwdr9iD8XLyZB8uWhSwmJ6K5",
  "key10": "TuncsQ1BqFRrLykfSfT51Gt5dDgZCcoNViv6HcYjTBH1bT2A44ZzK7aLWXTFV6G3dd48mSHoUJCQsA2iEL1N7tN",
  "key11": "4acRu2qXKrFVCeCgUyYW8NCfra5twSfhieGw1jgQNfFeemHgoyvhsyxDsC7ruzA2FzijWtdzrQxZEKXR7YQJFKYZ",
  "key12": "4hB2AMcsEsaGqFrL4MexgjyRidt9JZjkHwr7wDrTFBQgmfBKLCXTLoA9FP8vYm5Nsg53LtntSH5SmYCT5BcQsjMN",
  "key13": "54PEPwmGNwEVAq5zPZfX6WUSMzQk1Y97VRmykU1zhnb9FpqQumBveeeZBALFRCRowiL54pUC9xiEicJ98xDW6cA2",
  "key14": "38aHEqJiwFFxGhiYXVcjazDja6NXR9dwrUJtn7q375MwubzGpmfqVsZdygwVwkpUEK4kx8euUAWRu4LucmKgcBM1",
  "key15": "2d4GWLm24nEd51MjFhrU6bvacuyaSa6rRHyzvJYJ6sHSr8sxcQZrtr21FHy86ruWLdGQ8efV9E64VoBigXdz2ugF",
  "key16": "2JEwYKArHd91tE386viGT3WqRu1GqTnRZccp59jL4Q8sPRty74PZav9Aa3AkutWVmySEzqpnW8vCUdJGD1yF3zQ5",
  "key17": "2K2eVDq7hK3WBbPjxG95MeKM2asvmcyTg84ZXprtduaV3mwf4QUq2jm54zkUdj364iEcat7Mu4RZH6Z1n3buqy1A",
  "key18": "2DQUitTzxiQviRn5TD4VNE3ZKehwuH3iVo5M5f3mZwR8K1Qntf4PHSLMUSt7qjeGKvduQJrt3RMmJCEuEjWLax9r",
  "key19": "4iXBMDXTVroXsFW3W22Gk762TuFEKzqcDhSUBD2G5kVadu5adNKqfRDtQhmZ6WrWivBCeyv9CVxGYSKVCZc2RE7H",
  "key20": "3nU3VMfZxPJSk3Mg7LPL4rLPoPjxiNf87hYfTf7caTCqVVZfdtR2fMXccCDwxRrVAdxJn6rhjTbR5NVKFxMS5HCL",
  "key21": "4MuCF8Fpbva56Ln5ypAsKrMHsj41NZASZ9riPwxW9BNNijXBYVa4Nrf99XGL4v1G7STJuDPJxeiHzYqExj6DKqK1",
  "key22": "4Rm3VxNiJB6sFV2E4LHZoGHVYxoVwwsbznDMkBE6Mk78PHq8bUGHiGo4AVvXw5RM2sYdZ3BJLeBwydAgJUHjoL4B",
  "key23": "5y7C2pPWFHQHUsLACJfRjEuVg7m55BxYfj9iXNSv66qEwdusKcnpdSfbw8vnvX1vXTuPYF41yNeCLzZfneAzb2hg",
  "key24": "iRNAcVFpMoRHt7BfzwoMf4qVarbBQrFS5KFNfCzua68qJeMZ53LAnTD9NwAArrkhMomvhZiDqqa3GqLtjTKdLGd",
  "key25": "96AQGV1symXkgnizaoVvE4Nta1cHyS8Cuc7VuChTERumwk1wNXnAwfLngxH4GCoQfZsC8jbYu93mvRK1spB2Ry4",
  "key26": "32EgyFi8jvkkcSc4BzGkgMrrFhzJSbzpLffzkrSGesznLrPKZ46Zjf2hgeg6KtmQuug7Rk4FA3ny9PzzqgjLGda7",
  "key27": "2bcCGQc6Spcq3VPMYojNqQHa1vchUHj7E2vzpPKpeEStxGaJFqDLS4g9EhwsgDmvZpZdjqaRxWK98pxnex8vbVJU",
  "key28": "5yvEo5eMwLYRVLJGBtwsM8AeZniQFoE5ws7kPMKNnB37iv3HacXDir3JETAMVxcRcH9tE8VSRgDW3AC93kmDL989",
  "key29": "5PNkPEfoURSXfYVcr6k2XTwTB4wxQ5bZNBiGkVtyEEA5qkheqqxRQnupPdbUSNV352KbwwnFcLSDjLs2xCtG5oEV",
  "key30": "66Wtyj15sCFupANBidNV9nyJ2ACYw24qvMB49VHcs44PXTGgYivEXwPgUzx8yAf1tLzJfoTiocwpubuur4zsqLB3",
  "key31": "2b5PkadCFFiA9GtKXp5DhsNFtRQX7udaMazcePMxkuXcoqQyBHWcNb83todbiGdzGvCNRzXrRLB4je99yxrULTFA",
  "key32": "3Zm78WhWPymFek4uyVtbNu9vmszRd42MagFSw1FkKBW3Ak5LfUYxWvSyLbrUTrwagc5qrD1Qbt7YR7cjbeRVfikB",
  "key33": "2piZdMvif81bN7hSc6iZPeF3HKB532pUtNRdPduEAaYXqD5ZuWkSuXLFM4dKKjes3ApZQBuzAS33WchnJqpp47H4",
  "key34": "4KiuJshjXnjYaRKCtJf7QNVUWP82X5XmMwNLgrMbo5KiM6obXxrAr6BADsaWGmJh3yqrvGibiRKRkuGySBTnEMzG",
  "key35": "4A8pFFL9qVZrJL7ogDCDz6htiaZwieU1C3pV4h1ujTQCsv6PZVHuWFEMJR5kYuQGq3PKhjXYqPZit1M3gU9oGb1Y",
  "key36": "3WT65NCpgcFZGipPcnCfurbuE52nXrdETtFEQHt7ajKK2tfLCX3xVQzdGif8oQfmdQaHxHeGkm71eL2wnmFybYoT",
  "key37": "2ThXf2kmNQH7d6Mt3Vt2PkV1ELhnUTKNe2L9GoEmNTQRWoZ9ASQFsgHE9XGheF8WogJMP7B3QzdmFMCY4rHLMAdQ",
  "key38": "3s7NhWeNiX9v7RwtPwfXSxRoY4XKceEx54CaA2gkr8iigXQ6Q4K7SQBz9ALG2JsyxsCg7CAseyedUFmKm1QnyRKR",
  "key39": "55vvAWtnB3iqH97CMHF5BjsfKCnBdiRcuJ47oKBCtXjQuCPdDkyGSsrzpETQV7N7q3st9H9AmZVxH98GLQPW6jm4",
  "key40": "5mJmznkMZk4ToxxYn5t1iKCS2qbwNwga3n9shmLXY7NPsHU4tPFLiCxdPo8VkYV8as334KMY1DjWsFPcofS1FRwW",
  "key41": "3qQpEzQaa32k17UoshejgzoAxbXHNVtK1mSBHDb9vUUJsZRwDKp4ySnx2qy23Gmn3NtCRk9f4XDshzurpHDPNPjR"
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
