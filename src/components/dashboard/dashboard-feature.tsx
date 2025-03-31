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
    "5EeWRW1u37WVxT3pkTnEBvXUr3WT1C1UJVMVTt37kfM2j4XqV9QM4DZUMRHhbsCADCRbUBDZKBQFQLvfUJ4DaiKp"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3kjuPhgeY1YzgKyWVyQukU7QGagLmBCWS1SLhCQt11U2UN6bj7jA8E4SZ4kGP2f4ULjYoCoyDA58qZ2No4QS3my5",
  "decoyKey1": "3oYwy1XyNX36YEePVPLz7dMTb6YpzicnGqnZn4p8F8XFwuBqYFsB4y4QiKjMZpW4vDoxvrnHtqnYL3mL9WehJhGP",
  "decoyKey2": "3djEjRZQCaAdUTJgYbaZXPyVhdUhUCrsDTxb3tq9jjXPNvQgtCtyYsDwjakjmfnsc6hDFmNnhKDbgjeQZunUYPuH",
  "decoyKey3": "2AgE4mLBQnqY77mdnstcaoYY7sPeh5PgxUTMLoq668tJBMERnKtZbqNfc2JxC3AhH5EhBBR7b8H93y8NDbTzquDa",
  "decoyKey4": "2ydY1JXtB1eiEoUaLgEoKpkeuXVppZqGBJgX847xsURm8uM5ht4BQ4aM4xZKKvvhAhEpLNxQWvPz7V7fp1aTD4YV",
  "decoyKey5": "5GgHwkjgxi75KQdKJsyYLuPUd64UGN8P1cJ8PLWVD6dCoTwDXatysb4AJWDfLjvsyBLTysitk9aevwmFRbnjNZZS",
  "decoyKey6": "hsGuSiTu8z5feSLnWwFJ99J2anktQkPQ4bx6tnRg3PWZrnPMMZ4T2F7qgHSLhEgn8simUZ7Vt82qjM2PQ9VVB1c",
  "decoyKey7": "eFC2e6onY2j542xMiJ4jFjjJNBh7h8eJ7Zs1QB66VacFtwtne1rWQSczLH1DPmsW1MuHn31dG4w5NMmzgB1vpPV",
  "decoyKey8": "48AxtMZdnzJwBpt6XA13fxv4BbfViytZTS7QGvkPHFL2U5H4epZDt49Kno42C59aQAZscV8zcVvHghzj7Z8Ze3i1",
  "decoyKey9": "2hD9ecZC9MngUjctbG6qGdTA9bgAtVMTUyLuJgEs9SZaB1poF9RgXzTHuhHuNHj23QWQndWnrqPFyUR315xpAo1i",
  "decoyKey10": "xm7wzFLzgn4tgkv316sx221AqGEAnsPZk7ppoE8ebetQo7aWenzuDG23iFBcrS9tuqqnz14tqAVyM5PpLuDk4kM",
  "decoyKey11": "455L6hLATqA4vZmKXaU5zY5e11VMV4y194yaymtySJirbXqh9XKaegbApRaotnB4eSEkGLNw3axuKFuN7wbQtbUp",
  "decoyKey12": "2ABgVgx9MsZcYZcMsf3Pd55NQ6XPDr9pLpZUvV73HaZsitcnkgbuZpN6mwiKnd8zDiiVLuYWHGsW4mYiWWheYnom",
  "decoyKey13": "4iTeMW6sHxNJ8db1eKQeYfvTApRjv1gje1V8br269V7nu91Qj5Stgch9eitt46fZ6m6LrrJV3iH1uRSUX8tZz9ww",
  "decoyKey14": "3jKjoLkoj4jTeEVbLeuR26pJZkWjzBXiDhPfe6q9WAJ7nRXsGzWRBFE4eYAaz32pUDKjvbuB499y75jc3FFABoAM",
  "decoyKey15": "3kB5F4qwje3H5Spk2npGBbR4PNzj37Xxqx4RuyufTtdFDAaXmybeUZaeXvfpohmUFHFV2t67PAP9mpzakcbyu6th",
  "decoyKey16": "381RtGVxhnfXMmEsKZUZuvfAt6AoXQQAzgkNGUdVLugFDUFRs3dtRYCbXVFBUs6pSrHsKURwHVEFYduNhtiwgJkD",
  "decoyKey17": "3eX1Umzf56LPsy7qyJk72kEnSCUhESf3yFKT7JbPpXa7pns63zyMszqabtqajMCKtd88yMG84B21JUNmgc2aNRVB",
  "decoyKey18": "3Dp16ZQk1Y7SedPAxSX1vjV7bNrw2Th4Z6unUHB4Z5VgKNMimKnJCKXp5zN5W3HtkczZN2sMsPetn26fNWPqEj9s",
  "decoyKey19": "4Ar2A2Q7VuiFDdLM2QvG4s4yUkF78Dygos4HLkTrA9gKus7x9K1WZ53uUZcGixhMrMDZmGoi3KdzKU8Wrqdrxfaf",
  "decoyKey20": "2b8mPmveppMVfmjfVkM3JuuQLQRhJmH6sorueHuC9XAtjzPomRxMAsLzxHj8xiXanN8SYthMwKPEsS4UGvwsvRAu",
  "decoyKey21": "5amSUChfWton4eUKbe68FEQ7fVkR5ButeDKHxAgpfmic4Ae8gEV5yJ95oDPss3PPffcLi7U9vWUePfSz482vMQjD",
  "decoyKey22": "2S6HoYWPeRzFA6rbz2gYiPMLxmvMP5TA3JMaCZkRSEjK9Uzc791omvzZoXD6Mof4bpsHNpCzVZ47YJTRXyJVFUgF",
  "decoyKey23": "56PEigApxQFuoA4P4z5vEkh7L45MAmyCEsAbv9PDfLGtvGLF8vM6fhsR1PxWXoYibj8wdq3X1JpWZza7GN8wrLx5",
  "decoyKey24": "uC1Rvwxw4F8f76ndNAZcBFxod5RMutbcqF3AtBeKV1k92aWt7JDZRgC6MLB7kwugXHWfQ3URhHTNM39fCQyvQJk",
  "decoyKey25": "ou3H2f9wNy33VL7e3h86NGrMypGaA5ggNJ9CECKP2frdVMSiEhmvqYRJGncFqd7CYJpnhKvoerfxNEHuH3DzGhs",
  "decoyKey26": "4xbuAkC4HN9ZDay66XdFbUvh1fXzD4HRxgKNnNd3GHciK5KEogQxdRdnxwWWUWgnH5BrCFPw1gqHaVvj7Xg6KGZq",
  "decoyKey27": "4dH6UfVREfkVGqmuadss6CuFu1QVW2jKefmqL1e2MB7sbwaRg1CZ4537BT96SRcDLQNDP4NEVNMAq9wR3VEKLH65",
  "decoyKey28": "3Q2AZ7MLVtqTUmXVLpQPLZGTZbfLUe7CeF2ZGkyDeKmr59HTkh7DpdZFwkMgtLBa6Xuzyt8y7mnRg6iu8hfKMQRL",
  "decoyKey29": "288im71cLtznWDFnBjynWupX899kcMorPECD2ek7N5YqVmr6ZLWPzq57vaGrC1K1xTiH6buinyQifP6zYFm2M1vG",
  "decoyKey30": "4CqMrwghRYuw1LE9RJ1SG6YButypthypo3SjS7wZJZp1cx2KEskuUKfvE54erqBLKKezTWQtXqezDquum3XZfPVa",
  "decoyKey31": "3EGsf4KN4vptPwEMaPeS9G2iRwx62Ji8ZMMVTuTGVXYob6EaiWcw3dvcqfexAE9Sg8W4eu1jyPxDUD7jRf5AESYW",
  "decoyKey32": "3g1hhmymV9WUrCUvKKEaeWpyZY9jFJ1cYJeuwKVnG8qQTDk1kRigD5x9BRaRx792gHNANrp9RobEszkcZTBr1RSY",
  "decoyKey33": "3KAhMtWneh86UgtJMzYweAhiD1mrSWB8z3QmE82MgedwxYiijbKtsbNVKo1YeRcSN5C1EwtVFJDwyb9h9nK9BpzA",
  "decoyKey34": "2BipRi5JVygK1qU188oEpcgz4hYAgwpcMC8YyfsYNTUfx6TmT39tqos4PJdyVBLXdi449dZdEx7U9f4ZJVTFB3Dr",
  "decoyKey35": "52Q8KejmUusicouQfJDxqP4kTEeMTg1QPfmtij3ZncBxgZ35ah8XPjWHzr7bH53ai8poVs43uAM3xLJ43zthsMEx",
  "decoyKey36": "33bnBRhM5X9BPW29dLXxMnousYDP3dHsVNyfXAmuiKGx95p1vbPoYSosWX3Vjga9HxaCtP4c8jkRJ7AkTtjx136j",
  "decoyKey37": "1B4EpM9rFP4Ea85EbPbN2zFi82DzyTdubCAh4z5ZVwddPqYoTXh8WCqx7wX4LnyeKb3XjExM134yvKTkk6X5vGf",
  "decoyKey38": "3cjbv2srPCnt1k42cgE46FVevvv4WQfQ1ogFAr4Z9YrNJrAYEUqLtK63ioXTV5wfHUaJwJdN2eU8S7WaqyeTW9qa",
  "decoyKey39": "Qei3Hmde4if8pKZwX946ppy4UNAym596stWFGm5HpqgQa4oREch4md3gmksK3SXBDkXw7ScLJCg1FVohxjfLR5o",
  "decoyKey40": "2p74FgahH2fDitTTRgzn6z4UPkaTYr28SQZAoH7DuowCvBsJK9agYFvhtENyKh4TiuhjHUkCVPx8y29ngs37ts62",
  "decoyKey41": "3hmr2tvcJeaM2Wr1GrLSP1bEcBabNr2BcxKnupjo29wuN68CvFwbjAQwHcAi6Tf7D6E76andR7NnbRWy1CnTEbJ9",
  "decoyKey42": "3cwPs2wNEovbBdG3dY53S73jRXtxjwPEBE3UPjJxykNTxvCp5D1wgHXTB4f283zn6VkW8r9hexpgSxzxeTpfZfSv",
  "decoyKey43": "2omLzQfPv3SBArJGEpQn7HC9uxVyaJsaiZ4Pix5qFc3CQhh7NNPAUq2jcY3kM8C2VjbHiTis5QuVG8tU9PVJR9Bx",
  "decoyKey44": "5BXeZjXE8fWcSjNNUnxP7XTuSgXP3MxF1roTMoSwn6iMk6mazuPieaksrDGVBYhN5wcLgkrZb6HR5qgKnts2gEh2",
  "decoyKey45": "2YbYz1GfgjK2m77DXCwJsZ3ifFMrXTph3wXdrLHcUChfoGQVQmHsV1GYjRWmaptzhqB8akxA8AgByqypDayB5U46",
  "decoyKey46": "5gCfgzUi2eDwB8ux5bn9VGk9kSphzv1LhS3gWq4FiUABwomUY3sqnQCmKPcPGkMG7D1TMnPCBhVY1KRHqY7z7PJ9",
  "decoyKey47": "2DTFZauNkqMFQbMi2HNSsR7PfEGjStyXw4aL5SqPsJyX9Jr4kHPr8MAaab1doeXWfg6fEZa2LnCbpVMQeaYLxvLd",
  "decoyKey48": "2yteEa44BxmtxcfLimp2PC3fFojm3LdHCfBzQk8GaTvhZgK8XDXt2EFJbgQALFyo9KCw4kS1a5DSLzpXU5QiPt2J",
  "decoyKey49": "3XnPWaxui8H8BYPS3HiLzV3Wk8jLSoDA9KicHpwtt6GQyDG5cCZDHAcYB4xta5qFEYP1dnzxo4dN9d6g2Wbdx4MZ"
};
// DECOY_KEYS_END
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