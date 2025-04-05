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
    "4iEXnjqYNEwSmivAjnQ3QNYhmwUnMaE7DCEEZjuA8WMVHsq6zmDaocDXeDeLcVYRNGLuSqn8o691q279kogrhgAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TncUjTzv4BBwoQpPsRe83RYGiC9DLorMnLMGZLpVSQvRna6jVGsDUZtL7dHcmrtU4JHJrCjHxhW73Jg7zUCin1w",
  "key1": "27p6msQsSCjgBgRGhK2Gke8kefdwSLX4cRwLEbhLVq1DNetuMoWf94LFyGps9N6Tvr1cAHHUG4KtYnzcjpHgLFhc",
  "key2": "5JcpFfFQ8bc6hp6NCQhVU53tSf3ZbZeoqvKHfn1sDyMscBizJXzP77qupgqAAfvAniArRPJB4P75BbDN5jiYYveS",
  "key3": "4Fa3FKXqSHEjuz8tv5rccsYeibimaN3CCGTTm5zkoYVpebgGbQJzbQEsQD2dBKX5UbJVvYWtZ4EkjvLTGFoKePX7",
  "key4": "3n4n9pvWiMksKt75XXfZUoDrmGikZ1CFtr7smd7cpfsKMCnFry3cjnTJpiPtrbwZTBMGWjHd3myfSNbQajcvMMcY",
  "key5": "3zCCW1HoYo7gZ6fmwjaDg33AzzijtDhrqbPzkTHSaMeHpwkXGQnhSVe5gnmBE9dRzJA7oeQemTsxUtPLMQyFvGc8",
  "key6": "LJwCsxiStHS1CCGVrj2q5TmW3gicjiwuNeWgojrzvegizKKF2jBg7DBqrwVTHf4KBYykehJdQf2L3TDErzipEo5",
  "key7": "4LNUP7VwhKYCfaNGQNcSwp3qiQ2YY2xVahw2LRnqZUTxuvMLGD4SFryywC1HataUGX1P3GNfgAr51j4PqTL7d6X",
  "key8": "2chfe3j89TZUXruWursDrKyEgzrD8BEYBPkzynxgb4oD6DWuRe1vGzoBtSLTPkPVVuuSjHoTyaaFP92NSuQA4sKt",
  "key9": "35q9hpFteBXq8vCJwXm7RA44sz96L1vRaN9qEuMh14xZCSvoQpnuENbtbuzBjf2SQMAiKBV6F5Ccwqs67gazuNkp",
  "key10": "WyFU7euckJUm6ogfgeGoPhZsHPTmUjc8WNhEtepY2mD2ynK2ZXzJ3KF1zWoP2WCTCVk5jhbo1pQGfDdzKP7dWu7",
  "key11": "xawj13raUKLFsUssckeUf7hub9AEyHdNYGTfKsY3c8g8jgs2BwUomkbzDqh12mPuJkyM1xDUkcdC7R7mnYBRq5g",
  "key12": "4MmCudRsXpmvMoZyNUvUj8xJCny1GgRFsbh36LdAq1EPHtgtEnd2MiR4ZD2SooFWh1pujfFB5DLD8feA5w4xkPqS",
  "key13": "5ZLkmnNKNprfgihKEjt5t6B5o6nXBUqAXkkhdCgQLm7DKwei4LsaxDiRWNoKxrNeqC9gmv4geKpV7Muxhhq6QaHo",
  "key14": "4ZHiX8CwcGwbVPndbAuP14E9GYjUY57W8JySwH3YpXEJJf7L6yQB5kJ2wkLEHPjpsUm6dkPMJ36TBfesQsckKgHg",
  "key15": "62rwuATLmXHiPSwopAJMLKCxmNnooEwXSPXZ6oDfQeEfpWpPXbz7S19sxRW51eQMbTe2Z1waUpTiby7GkhJxZ4td",
  "key16": "5FiBpvZAnST4UvsKSpRV6HysvXH32eKYgbQ9uF1nPtuxc8ttHBGqiGCazY67HAoFHsQjfZzDgysVrQPK8P2VVU25",
  "key17": "46ZmimJNDb1vW19huqxDRVZLJpJeReWcNZp1jcfC5VVdsegDm1L46kurpkLRhhhR6GqkphqvGodbhK22LVw1j9iv",
  "key18": "412cSG9WxNwbzZFmGmZLc2SmeYZ8mgjUkfz55T5rqCwrLcsSr9qLnTAGEXUUKK6L3MQKrAuLWAaqk4fsRDDQPGLJ",
  "key19": "2UhCH8JEHtwhudyxi4KnXmigJ41pwWg6QGRwAwwLTKec3mGZSZMD7u91dvBThvi7kFFdqbSuENe3foZLPZjp3gQP",
  "key20": "2NhKEmQysMBxYmjJUEiXTJboP5ruBRZUki8g7hVoaea1S4s7JWr51DQjZqZZEUih3eoMF6FiZBRT9kS5BqTdspXr",
  "key21": "2nyHuRfVdN2tpwm2dwa1ktpRKx4LQS7LhgXuPk3wZ4mjfTzqyr86YLAu36qXE2Re65mqYzKAmrcDU69YwbLjRjgv",
  "key22": "3dQUQQCdSqkXkGpd4qCTCRy9agErRE6Vf5h5noeqDXxjuKZ3wc5wMAyaw4f2byPykcpm5nUx3oZ9jNMf3GFZbg2z",
  "key23": "2v8oSmFFqav2cCZbEqemJs8Nhjjh8yGNBqQkZG1Cq2EZh4WgdKSYaZGVtrCKtxrMVK7FQTAnV423wxJaQWDSqvoS",
  "key24": "3f9VMbFYyFWtqdgdNBU28odRMsQuKqSYqdZuwQ8g8smYQQzEaVZh6VcSdyNF21hm97DhARDTaDiN2TxZJRukzcie",
  "key25": "5UhZYYWtRSaeamgKQbCYncSLjaLLjgPBoTTVRyM4ZLqWwdEzfcG2kfmchYNtbSQsigAtxzjof5UEKW4KgQbS3gy4",
  "key26": "2TdWAw46E5KpAXN569KsdQsf3MG6nQV59KRZPcm9dgAVLp4ppF6wZq8UFMB5f2p55WAZGspn7SHHTsyrwe6vfZPt",
  "key27": "H8TSkjhA8Z7W1XsiZfVhwe9Yksa8WbSK2w57aJGzbsaMihrgJeTA3SZAoBGk13Q1di7bJRKWbKHktjNHJk1rZkv",
  "key28": "5JzCKgBUV6RQ1BjDNrMAyrLDyVm7YcBm5Q4XKUVCvjA8rD26RLDde1wMi3r2KMJJqdJYWSyGuNqnnvKzEU89JyPu",
  "key29": "66aLcppusncPjxSLHnagaN1omqKxksD3wsfFSKGoLq5zm63qQYhc4acszGSPqLM9BCfsi82pX7ixoTkS9pS5z5K",
  "key30": "5PXytDkTR7wdbgpvDCFgL1u1ng9sLA5YzoPWKQLw4s3KbED1LspdH4QyzVMoMkf6cWeLcJDttHyWcUHsUcZkjTsX",
  "key31": "4wDbBUM14rzsGXKfcPuSToADZJ7YEgg6s6xyb7WjSybMC3S9VX75WZqP6pQH6yDziDzFZgt4wNfiNdBLLktgegUY",
  "key32": "4LNvMfcAr7mJ6jfVvhVSvqfUo3Jj4weB7iS9Zxsk9y8Py9jTQWPSVqP47Nazuv7xuzw2p8o9aMec4jiUXTgJTK3X",
  "key33": "4Th4fcjSg1vAEXEsRbppqjESgCH6uL5yY1p9qdSwbA52DfnKCDXEpCArBZk5t9Ccp1GVQuec1hXLevLYbaR2sKwu",
  "key34": "2eoTA7dhNfcQz1PCanQHnqrJ2GHReQkkXrDs9Kjd5VpVWoUbE4S777D7Qt3e4XpXqnkmuj8utNZJThiXXuFLjTem",
  "key35": "B5gHmNZjcL8yGQDVTPym51N1eePEXg1RDDrw5GzSRUtNoMVsJUAsLFpiYTFxQ8LpQHVBjJq5h1gzCFA5pNeeahW",
  "key36": "2DxuQ6VfUDbjFVur4m37AhZcXr8JxGYKKuKnF7t82nTdckw3JwvmnZnoDLPCF4JKYEd1xQC9UKecHhLJzoh1uzJ6"
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
