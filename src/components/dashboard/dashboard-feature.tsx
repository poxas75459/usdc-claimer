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
    "3CnUtj15tBoXdsWuszXC9Tbt8drSEA59wxrLm7uT6yH5ubkPH7BLchSLkFHdU4YYk9GFD8CahY39ScHgoWbPGXE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43G6YT33U7WvhczkteiwNxmpAAJCY7EymvhGmrjgjUto3gccfWLGfdtmRz83FFpXhzmAEKcaCr9GZhQFj2gc2q5S",
  "key1": "5un9DBoFramxsLD5EMzcY44Vwz4sjMD633S2U7Wbr2fysL664BCB4MwWwSAN5f7abNrMaa5kmqxTLj96yteh1mcN",
  "key2": "55kKWDdPwahsDXNdc6PDDtRBk2iLxZr8cNR1z8eHu6X2nJX8jyJaQtRNTxmBu92gx691kWBWhpprpmQ9gkhDtcFz",
  "key3": "62Z5DwEFVw961kCKs1Ezewh9Ef2mpDrhMSP8DXbjAm8uGJYnQMZLBSHqgrvQPL6V5waMj9df468gJbHqDxaTP7gc",
  "key4": "634iUzWW5pMydRAVSGVjpc13AsKPKaXW13xGYaAvZsiEhUt4rTxnrKpGDCUb9J6q9nZwGUbGsBAqSgAPQqoHSrhH",
  "key5": "qTbMosRK6986CmmhtLfQ6oRMUEp8JXzMSU49ZqDwvAkLiffG1Pr1E4R2MpiXtu7KrNs5dSHu9WiuLDPCBx4YJvp",
  "key6": "5awL2EUc9vPDouiJRFgWnkDdqZKV9PAWMtNxdq8YrbLuohwaRGCUH9kmLZqPUenno4ge4K8mVDsQ6GNGmGjLBxjU",
  "key7": "5dVQukPjdvyimfikF5TJaT7Zsy5RmLRPVqFmpZ5rUmaWbybde2LTY1MneGrWKrJ7pcYqdcvSJUufckKx6i7e7ZYU",
  "key8": "5Uwc6A8RtNB1uyKPVRQQJQ2NsnjPDF41xnHcAxau4zhY6TJeE61RvNw6zfm2ak7GpjBYUFw11P9WJpXEWF3m5BKk",
  "key9": "wKxyRafD121korp3Aogq3GhmYK5BtGYWmuwkWbvCpy2W2B72S3L2Hk5Kk2nCr3J1eefwdiXkNw9iEHqQjAUnch8",
  "key10": "5sLrv1WzDCECPaku13LoTvV1uzF5PqDPMjFPT5QBWhg6ttLF74LvywCdrTWp5MkbfobSaTqEm9CYDPorwqkZNFJm",
  "key11": "S5aVfCfFfmj8sP415N7CVbNydb9PTCFYVdiUYTHrZwvS5uC76Q6fw2AibYqSe4urXCsHjiK3xLS5JQrEJaRyxDj",
  "key12": "2CoD2DVgXqpAtXesqhC1KNU4dw1aTiqowLgCCkRGABHeyDqD3KKB3NhtLxasq7hVzQ23ZeEKx3mNgszrRgBEYCnV",
  "key13": "5sfgWsdjh7TPAJ2HAGQ5p1rMCgz1puag9AX1EzDQsVcz69FWwZEbibpHMXMoDNEm564knwBpRv8b8hcs1ZkgXGKF",
  "key14": "4cHQSSmW2WH5Yn65V5TPVJCY1T9zTgzg1Rmq36VKzengi8yb3VJ9huFD65pbHBb62TcezGqYTAd8pL6GauM6piUK",
  "key15": "H2ZZ9qvxJ3g8vFroHRCFaMcTo6SrasGtQno85uKPPcqYcoiuHT9EWaip1ix5sMJ2jW3TwjPNZAXkG2bFKXz7EGN",
  "key16": "2URaGxj7uZsZfFWgAGQ5Pc7Ci9ULjiScMnEsTyMGNLU3LdiYUBQnqjCoie1EoMGyti1DntzMGx8NFdKLFd8HX4bZ",
  "key17": "5TJSdEMk4uNt8AVwUJgbgPZxVyZSSqXgGUwKnS3Mzb6pjwUDadyckjruvu87QKjxCgZFQbhWcYkdV1cVkfv23M4E",
  "key18": "wSUMevJeeheQzrfH7uMVqznAd8Pwese2HtB4LsV81ZiTtJiQF9gNnpdsGd9cABMJhfVGhSTdfqTPc9VEXMPuziR",
  "key19": "RDtoYbdTnFannXpCkXRbZ9yoAkdt7XAU6NGMQVHSHYXW6CJ5ey16hbLf9wsjsu7jMoHXuK6a1zN9rFA25b2iyCo",
  "key20": "4t835T5ej6rNg3NRLCQVGpcqXZiCr7TtvUEiqBBWvhGGaBfrpjvYzK68yMiXPhsH2EGf6gqt2jNtjaX3RJ9vx5FZ",
  "key21": "4FtgdnqQMdtrvS4tztwDcxfT6tqjdbjAH34svcMKecyvcqjsy6vDRDTnd6qHHZ6tZ3jbrQMSkSXsruHxejgDfPJG",
  "key22": "3adfL7tHqhVyqbwYU5hajKRNfWVLAQBWWap3Xw1EstFhEkEDPeCaCsVBsCsetqLsx6oX7iatV2REF88Ti6sQSrv8",
  "key23": "Y5JGAEcfBfoxSemppF8CmmAcQ4c7ZtBCURaBZL53hsCwDQgNnk2Q5SwA5BjXV6i47UMf4Wumx91CHCAS4rGAyT2",
  "key24": "2hfUcNPjkhEyiEhiKiaWvNvjqekW2cGX4cKiXUMp5Qttu3e9vHb8GCYsrYskGRM6LRMinseyoSwB3ZDjPPRim5QV",
  "key25": "5XR9KLuh5ptqppTAxEXZK2uDiGpNZHcWB8vGuoqaRAeCnXtkmoTAdaXMAg43wwvt97B7r1U8kzikRJGxB2bDMMgr",
  "key26": "22JnxkTseNVM6RpX73CQcc9QsvTLVBAfqcTXrhDXSXieEaD3F98aJzz2sCoREMJY8bMTgc3p3MLsy2ajp6JCvoNQ",
  "key27": "38tuE1hKjB1AvpJygcPA93RF2Y4vzQmawT8x1opBZtRr9ezuzCX23f5VNmguJWBeYoNa1SU3rgg9xWJe3DyBGnyk",
  "key28": "YcSrgqbG7s1Zh5mS9duih5pgNjfbrd3M7MwEx1XaMg9ktr11qZRUNyTCoxQD3DrnxhMnReHwY38a9Fcya6DddiA",
  "key29": "2Bh5VZ1wv2QHRkmugaMfTWPRKTwKNPjEr4gYVGRZrea5NcBaUKq48ZqS8JTPVqTjwrnVWXhjCFpZv3wSuPNvtawk",
  "key30": "9V3U8hwmz4aKoveriz3bPRj2d3vD6kNNwAyUCVhV2ZoKcPxaKyCuQQLBNfMjveTryAoh5H2KCFREsyYbwNex7h8",
  "key31": "WbyaDv1hCVcv1p742UBDSE8PRBUjq6UAdEbAWFoGnxqc9wFvejBoXfctJSv9xWyrBmyMAWdDuNZiyXRUe2YrF1K",
  "key32": "3C18x4hopvJ8AT5rXDB93LsfAt7yzkPzPBh1BEpKbPbe72TGt2VrF3xaXxasdV1HEcGiaXEVTYZhwH45FHLfVNKD",
  "key33": "2mVyyEJAHoWnEjxmmWWfEXrHMzD93NrzADSJbJCmWkG1aZLFFpej4BvMK6jqoM3MynCeWfEFWcbX6wJ3FBeqA3iY",
  "key34": "5M2CMzSByUbEFNZKuWMXht4tqjZeFfk9g63i2KRu9Em6ThaQ4EQn7jdWVqisfbCzJbCMKtRzQ34VFNCmNG1o4MjT",
  "key35": "4PfdsmKwJenuNRJQzrsny8gwFYmFjPHa8Xb9wSEYxR4yLhwrGb1xdqy3FW8cMAmHmQN47EgubpUEhr2uG4Vz9TAQ",
  "key36": "29TiR6GRGrSeN69fqPUTWcm5gWw6Dbpk1mMgSEozHZASmPKvRkMq5niDbFt2Li5PzP4K3JUpCnRoEB96UY1SguCG",
  "key37": "3qMqwdCFAap8S5mnTcvSanYRvUBKnSTAGCp6dGguVv6VWBUZkueUWxUATS1h2um1ue2xEJcc6UbAYRdNr3jYRgoC",
  "key38": "5noQn9HHTEPKnQQiSaCoGfreLza8KcLRt1NrXjt3sqpMbGtXhiipivAHjneTPk4AuSDHHNoFgDLCdmBur6jE1miq",
  "key39": "s3TvPxSsZb42Zcznei2t672i2phzS8qBjfWRnPggbD5HMyx7WJ3QTXbkuaFxqGi9gfK9tkmt22KZ86Ay1WfGcTY",
  "key40": "2XfLkrmPGJTAMwhkiLj7MtzxnXaxFdWmJiucz4iDajh1DnS2QbZC8ZWAL8viFhHsnJ2euHpX4bLuga7bVLVre92Q",
  "key41": "2tpLNe2Ja7HRFadgCq6f27ogtWZp1GEf2ibo6qMuZKRYhYXxHDP71sEm5rLdARQFFeewXP5RzJx3CWNPPKPEQroF",
  "key42": "PpHmX4Sr3V6UgBcpNzd9wBsqLopxZK1owKTiNfyPptVkgMUGzwfx6wFffbErbnGfXgLmnofJJ2bEesFcJ9JBfu2",
  "key43": "5k9kXAVxVjyjZ33P1JmYnheYXcq7cwxvcTausLMKAkegevNk3ZmDNyKviDw5QqhSDcXTqyZY5JdKnRQTwMsa2pZa",
  "key44": "29R7JVXAZ8o2Gvd5tADcowWTVoWSJGCkuGcKb5r8GX81S323kQT4QuA6rxfaHeVc6EkM2Y2cC6pdDJp1aGoPUDmo",
  "key45": "ZAmFC4Jmf2AhzyEn9BnxubmVUBanSdHzeBjqAi7ivm3p1sEW9aT7cgScCG2av5mMZypPTpbmyti1urmqSp6evkm",
  "key46": "5aKTR5oL1NNzVJx52gfr7WZ9yhRpLMKHXweAY5iwtZBkoPdYVV19y9VhQF83pgDSx58HjTc6KT2qfUn9QNQGNE8y",
  "key47": "2Xt455gERqo7Y1r4TxKemdHmPUAZmZewmqdrtmHUC8KTCwmvqWQJcJm9U9RN6qGpy2bxLrgL3uK1USRCGBqai3g7"
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
