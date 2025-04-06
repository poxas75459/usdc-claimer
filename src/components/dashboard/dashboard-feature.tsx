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
    "3DePqdRRg9T6AptZGGsUReBBd67HNcTVUNkiHtpdvkQYbf5SKnLYhNR2gEmAfEgFG4j7Rtxz7jEx2wXPku4Zt6Fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4picYaPJD1hpGNm9bqrThAzDgg4TySFxwSafRiwYfGmgEW3CNGp7SUqzeC526vVdqBFyyxRGsNbjNszt3TUjhXYB",
  "key1": "3npXQ2oXJSFWxLNkHazfAesZtUBSmy1JvRGtvK2s4Hm2axxdAznbUdVMHoxUH4tpTcuH7cSmpLHA7NSU5x49ffkn",
  "key2": "2qd7muVSfM5CC747Uz6ZXe8dvcWzzwGDvsZ9qJTMKJQmPxCKYSFF6QnW5ksyjKLqEjA3LVCVdfpbWaWxAL2pd9om",
  "key3": "3ais5Donn7emBGQbWgfXLxv8s6Z7bagkVzo3zY2pWYMUQ8c1UKvhApiTwm3m4nUriLCDHvrq65SzFhNXK3ukYdy7",
  "key4": "2pPXtVjLMYsnTXrieSRCmx7VYCUNSAPKrATTae6wrcPJtFyR71srqsuf1nTCCVVKV3GiwDsgFNUQLTByaikSP2m2",
  "key5": "zKFcUUQF46HpsLW7FGxwYdsTvnAKvX2mcnLam8i7sR5m6KE55r17tWDBeKYLq821VivRPFnuzY76DDBj7bwLXNk",
  "key6": "458ywLf7xLXeLYrMMCoH34LQTsJp7nzCpYtZTTBdjKmoiUBZvmqaYBcnQYC61aAwVjnm8bEFVQfa9wUv5ooRVsbD",
  "key7": "3RkUDvNAAZMNxMSfzzNnhEuKuw2swVvLsVjUGHPd7tzmfQMKZSMRgH6SYMw5mN5zW7A3WXZ7eWvVTyEtQ9bS6C7g",
  "key8": "43WQibMVBUEGrCkuinKPP5o5GgPqSb5G2JrBbsrfBHMgArmJ2QUJErRocE4obEzkdyNaNPKXbroFdFy9v83vTGi7",
  "key9": "66ukp3qYKX213mupACDjKJdLrh1WQFSeUshMGfJeuBQZTZo2rGmxnrCJNdfmXjeEQopKKNTJGivzaLMuiAJwkjz2",
  "key10": "4dw3EzysZBBXPn1JhJ7hGGE2zfYtUqfGk8xGbUywFnpLzBEn9puFVbYQAPqwUeR3AvgKywUEApa15kPygEEYNr94",
  "key11": "57MnNNrUZck4p5pph9xQv6KavCT8GC3ZiWNUNkUQkQDAHdtFNhrhtn3qaaRvdxFMKNA3KJDUQJZ5iCPGLJk3cRbh",
  "key12": "5wNUUhN5CiGj1PeJL6oHNYtsU7xUrrofCRBLE1gE1QLE39duzeKDX3i6Jmjz1j39f3RoXkhdDu9HN4C99J9X9FdM",
  "key13": "2Qs6ppmfTnWu7rpcFtApo4SStPeTdMN7MLPgz83NMYVLPF23ytDFUFx8qB1rnv2rYuEdrWRsnVgs6XhQJLRof6TF",
  "key14": "5ieU44HGsPgbpttCGgUfUFtcFgjySUftjFtrhRN6gJmWr8YZTpmpfSj3TvntRtEaVmjWqDJ3i1qZxpSJEg7q5t1Z",
  "key15": "4WkbukxA32WTQ6R9Xy9hNK6YC4z2boFY8Djd2YxU5U6i2RBFUiYQWJn6uPnWeReEzc6EkmQhKX2N21UtuJe2L8UG",
  "key16": "3YJMyLobq5xfH8LFNYKipFAoH7PmEMXWSfpjQ3pSwaW9Fp5xRBiUGPZ5Pdaq9tF9kaVtj2NBh4aFDn8dCEJNGKjr",
  "key17": "jeQcbgD1tRs1AfLqY38A5DrbiJciyn9X1kPEnALTJPNJLMMwvnyycTCvM5ZcwLspfNQuA2uyTDfrCUnc8evj1si",
  "key18": "PxMjMthguyVCQM4UyMGdV213MxW9cVuvbavCZUyY51CjNVAFyJNcszNeLfneVTiodLBndDPMg9vCT5qoYTvbzdn",
  "key19": "41dTsoPFzeyurndMzpx79iqFE2vfpaKL25NdZhzBRATN96cJZEvUR4gNuzMe7xJc55gxzbvDfgWkRu66aqcUCfZb",
  "key20": "34G7nMmdVwBib4EydwZ4VuuSj74oMCo5urjkyjHYbq9aYBxqULUqbvkgMSYHyNRU4hdddDkUUhbLBpP1GzsmnDvi",
  "key21": "4FVebWTH1q5EfUkjfVirM7QEA1E2mxZA9HtRZNK8rJqoYEyk7xCM9YAoC9FBnhhqzYZFnEXPTbdNEri6SYGpqPst",
  "key22": "2kkh1DR9tqwyZM6i2fhUKAiwgaaVpNQtKExgCHe7V6atMkqWNfQw9hmCufrLxaPzYqYvYcXVS4aT2MunFxxwKrFE",
  "key23": "4Jz89SDcXD5ha7FyH5NgvJuv25VeD1vwvdaBLsH6wp6RcvX5a6wgiYy3JxGufgrMPiiMhNbHSdvGVCiNRGg6dSLD",
  "key24": "5RovgNwKUcosPKiVqRF5ccDMv8mejADa2YhQQ1tdBEbrMfyJa9siC19jn5dpFQ9jTwazQnXFPmir9F6dwUtKxDVH",
  "key25": "33Sh8LDp64WJReJDDZbkiWtqP2s9Lt2txCG8zP73Rgh58pJjt7EiFUPRjq6SsNaoiJU9kUYV9YtPZo51W2A8ozog",
  "key26": "2D4gox1hKVAw91WQZginb21Ta4QBk9cVQiP4s7rxuwvUFe1C1QfFHdbbRVvoS3m66jKuk7cxFUptZMVhZ7V9ZrWd",
  "key27": "nLbmEP4JHNM55i1e2g1NoVuFDYrzehi1e33S2PDGe2XbacDhPhiUMX1jZsTTKJe1uPqK7CLLWYoMJuKenZusVuY",
  "key28": "3Jf4JpRSYCM2yd1zNQQGs3XdF5nrK8xkJTT3JBeqm8Vq2R6ufzrmMNZDR3vti9rAoHtgT4HpgC4611dgUQr9isxa",
  "key29": "2iaY4ZfZkGrxAj1u5EjbQd3CgTwR2Ca8NhUWfMvPdC9xqaNrNjZi1Qgk6jCWNj331eVg2EUuQqCpQSGBkxeC58Vc",
  "key30": "3fUzLFChwLam1RoG2SEXuSpZpxoUh3tUDySx45J3bqCdmQYZ4UAwVZqjccfSMYFks4aSNYjrjLEr8PaLTwLDMrV",
  "key31": "3MxQrBtNqExip5nyy3khtgFbyDNjEtUa9yYEzegM7ErGsBbwkUq4nbtmzaxZKbxdKi6PmxFYKbA4Kerjwh6gAfft",
  "key32": "4qDYDRNZsNvtroUnjJHjiSgJoUPKPtcd6P6QczPHtpPBHixTfgRs3aVL9hzGRAX1L9MHTSGWsVb79GwBxWsUHuWw",
  "key33": "2cyYfzbiHqx67d4fvdgC6hkj2zdr1usT6jSG5dk1X5gpainAH61gvyMVS46hiLXF4bPUcchcYjJqjAAMbPn7rXEk"
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
