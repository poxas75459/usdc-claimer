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
    "3LhKZW7tjzXLHWx9yjmT9CcBoC9MN3KRXU1sXU59HbBNrFAETBQ4dTG4DuhLRmBzrw41H3eE74SF6ZXQGubKHDJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hP3dgWcJxuMEAepn9n429jQ2STmW4ASWUuQibvMV8NaK8VCMfs9W8ppbPYAHgSrGczZiAme2oAe1aeZDf1HrQNY",
  "key1": "3jMWw8WWziyRZHqWcwskhQskMxffNJKsemUxngiT9FUbdr9YRqSv1rmCnyBVKGRkqiF5RNAusL9oKcrKb166zBSK",
  "key2": "3Aj95acBoaHgifPdFNPdDnitFwko2sbwCP3wy6chxAGFimCM2nvy3a55ihCKkoeSwfwBc8TMYmArneG4LDh5E8Ey",
  "key3": "3qv6eZ1ZUEPySg9FhwVirhauoqKrV8Sv6VVZk1X3GvWsENRGb8bmVuSBLr5dGCejvpaHCJnJ7eRmGCLoZpjmkjTM",
  "key4": "mSvcMsSFrJu4Jiyky2MFD8fp8CFuZvPGG74SDC4QywAivK9hDQqGyKxwB8Q6MATLeD8tUcTSH1Kw3YdX5gXBe9P",
  "key5": "3soMiz8bs8s8iiX6pWLzYKepAfAMcAWdveu2SG4rv1U3uXCo9J8L2o3eJ9rz2VGzUYu1c3fxPTH71uv5AkY3pyeY",
  "key6": "UQ8uHdgptu79R8KxYsFUNnDsQAmtpNAJ3dWbi3ZWo7LTgMJQauA7i44ynQgapmPpSoE695CjU2KsEFQDYRkT9nC",
  "key7": "3LUdN9xQCwTQP3VHXYkRXF7XpqpTVkRJamzxGBy3AQpWePC46owqEsxJWqvu4ZyjWqiyJy4tUwdRUn8jrWGSXsio",
  "key8": "3MWego3wrUvdRF1iE3grP3UQBSyCABzwjKx3WWRQERYHrxqSwHMtuWeojn9DA2iTg4zYv73qbqdzAzjLmVMKa8vj",
  "key9": "3GwsiX1RJbHQJBXuFRthexpmSVikw17wLARWeSeCdiWyvYrTJVHBGSnEE2zwVv8SZc48xZC8ioNDvEvRwRseYjq1",
  "key10": "5MBb2kPGJmdkSPYY7c21bRqAvvGZg5YCSty6m6GoC4qNRxndEKT5y5tB4B3e1gZbvnNNaPBWGuFiF9DYBTFf72cZ",
  "key11": "1TdMdx2H5jpLqpcwYnFvSczZwdRtp5gfJdhoRMR7GkiKRX6HUQUmeifF6j45Pttqq7uvamc4Ssg7aTM4HcdJfa",
  "key12": "MFZyRvNFcWgjSkkeWS3oNCowNQ66WiQUyBkeRWyHxqmuZw3ADYNbnGs9tAUCRvmuZaYBTH8TtZBhvRz8pRXGnZx",
  "key13": "PNBjrLgbPTixGVDusAwRP9m8QA5kYVjkS4b9wZDbDp48qwkVtpujZUrmKwiBAQrpdcW4jQ9hzktrbtVyAZWkK6Q",
  "key14": "2bdNipgSKPSBKF2ZnkoboBBKBsUQTwSBj8AU542qpCKVukGVJj4zhZyTRTvaHRh1j4CkrSV4KvThasPYENvNJvZ7",
  "key15": "urK4NrK6ZxWLMVwe4AiDwaa99JeWu5xWXQYSfbd9vwzTWisc8C72HZn36WAGwwXtK3FL32QtWZcS9q3kWouww3Y",
  "key16": "52XBVoHvwhKnnvgNmpc7u8xfsXYVysXZRh2kkfpVbzeHhVFFK8hPV6e3DqSRsNVoUGhRMjpYadmpoZLjoXu45g46",
  "key17": "62dKTG7iqnrkRbYevoAbxhJb9MavQ4otRyFhXHJ58o5Awap2MRRDvtmaHft1UYydSo4JA4TYRfpuQJD96A37dAYY",
  "key18": "zMfgm7D2WPy77JxyQa59CsVF5SMaaWcqKje5rib4cEvxTQi5w47udqXHiumdzDrbx3tynTNy1oFBvwRm76VDXHQ",
  "key19": "s2o7ZDrWLpcSoHhHgLLYqLiuYuetKYR3MyMksmt9u8NCW4B5k3JEstTTdqjDMfF1Fna8o7gyi4qJNA7btVGJZCT",
  "key20": "2fY16btfNnDnXPdYAvT7cp13s7QiCVMzzrA8zEWxjnSUbFLA4KDnNEgqZZgxYJo2R7irp7nh6oYG1NuSLW5FJ8hY",
  "key21": "3K18AgmSihWf3v6eepAuYnC6hyZyFqSTKbJo7p94w8AsjEvsrXxUEEAJMqUNUYFgCiVK1iFMZhkNtQuepED17dZu",
  "key22": "2VsVKW9gTUwPMkfUWyqARfsZkSA46d7QV1cL97h9aTpVxpcBAHXTAQy67d2ox4DfpFrjL8gjJZbvCQciYbrJGPXy",
  "key23": "58AhPeGBdoU8urxDUUK1uYoqDqqZ6XPhRpifQ8MxeorN64RSQCTs1BwJF61DUtHh6kZyLLsLy8yJpUBewk646NCT",
  "key24": "35dkcsq8SmqtRUcTZ4nsdt9j3MrADr54eoAkNogTj9JuHgWKM5WAqXdrzSrtdD7VRfZFxdgvnpzckbcohVJGY2J2",
  "key25": "3MJQJKtxK9Pb7JLB1ApUeDXjvFFUX6yNMqSmXC8iakBLsemcf1VfXsGsrzHPVP6PQceyta3zWMynMZJcT7pprGva",
  "key26": "t8zDUFJzzGeRdQNbwsMaMLpGMphv7vw4Pem7bE2dmQzHw7Xp8DWjmLU2idYUAZUqqUF8a3yKZybSoe3y4o47nK5",
  "key27": "5p1nVepN588DipT4m1YyAEHTkMGHB1qzv1DjPD9iNrKVxMR92Esf6RLyoZYgwuoPEJewQiEjd2zsYCEpa7savjyR",
  "key28": "TUgSEf7wD97CeMz3D141jRPoyrbqmvok9WQzP2H83wdKeCvAznYTQouYtbCuGDz129YeR8QFbBVqJrKGxA1Prmt",
  "key29": "5YdkzBgkZCUUv3tB9UjWvnChpBmPkbEFDXMrZYwm3W1c5r865Zatjy9NjJ7RPJVFAYYSZ4EeVSGG48eYuEcbTj8c",
  "key30": "4UFu4KDXTZJecALMYbQQ2KydoZ8XfJ1CvETEnwjVRQQ7EzUjESTfJQhSKkifZMgAeSyFB1a9GJLgiyg8hri5Y4Gy",
  "key31": "24PjTVgb4yWnMCJwbeSQZwWRm1veUhbhapvoPfBugsBoWVcBTnGDgrRSXMvtmUbh84ra4VxYPHUfhkkjfRwvuwXt",
  "key32": "4TP5spaCd2JtptVf2LxM3ofRmuVK2dyrXPaM6u8q54ELE73CTUpkMjT1FAG5MZrxTTWGAodNemCxbr5cdzuHavZn",
  "key33": "3C85ciU5UUVC5uk3WgYfQ4rnoDAyypwJwGn3YWG3cLmLUnaKAqV1q7fnBhoBdX6qb6xzjNVqrmdG4Kwk1NE9wLkP",
  "key34": "57Lag2afmdHrjfBYb26DACyjqSxNU4cxFNBcrWkXNWbvDkivkexY1dQ4QMSwbgmgy7796GcoBhVmkk2Nce8v4SnN",
  "key35": "4o5w3oiEdJQsmRfsPw98Ba1YvUZwvMTiXvKRMFb7qHYgWTcuTMDL4J3UKK1L8g2k2nPHw89WvLMh66wNy77iZguz",
  "key36": "4eBrGJF483goqZZGNFkWPonNygEgBRuZpDZ18T5usbi1PBusAifHxBNpgxeE9BUDky7kvRfqKJfwZJZ3hgHnchGA",
  "key37": "3F2gMaLw29EcHjMMGm67yLSsgDphQouc56JP8eLJwjKqCqsTR22im9G7oG1sRPVJbWap5jcU87kPS8NH8hJR49do",
  "key38": "cMaVHuDrYbUQnVx9WGh6gnUxbm3AGtbxtt7JXZzoqMAjXdFMSSrbtLF4XpNDtjaXE4zVcSDudMwSk1g7oPxCtcv",
  "key39": "5o9P6uLGSmYdJM2p2yFxogdyTfMgobiBkENJcErc3xUmSP6L4m8mR1PmV8qciLs6TYjkqYqCjnowZaXfKfQH6s6Z",
  "key40": "5nUwPw6sRR7Hv7DMsf34ZZduW1AVvMbtDFwyzuaJxFnQcnR6swXXnZraCWPusfspnPrn5sQjPeM1cVas3VzquqDD",
  "key41": "4pUxFyYYSquwFj2vgfngnupkzdagortnEmYiu6CpdrFWndDPEQpJerYZos5VHkSBHWev3eGeQG5TKRjDt2rRaRGB",
  "key42": "2DxQ7QxciykvHM1ou4dX4BfqFpELkGnvZQs2pfcTDtpQru67hoQetp3jAi6q5rYfPvUwPfjfLx6H4daktGdoGp4q",
  "key43": "4y16PN7b9MGtQsxMVbPjVihDEMu5ZAJWJ4iPkpAcMPJTPn9tKFcAt41C5Zhs5UNJPDCh4VdiTbu192q63nvNaZeK"
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
