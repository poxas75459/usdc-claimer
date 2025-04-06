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
    "FtydVjDgSGi5bySE7xfPFAEeyKV7TiedAxttmo7UbYLbFsifbJ75bUgoaBjD7wmg2ryK6jZ2xQvdqaMxNaccKzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wPXumpcc7ur1kJzKBFu1VXU567kr3F9ejpdeGS2t6jABsbyqyDmsWLu4z1crrcfFwSGP4PA4A55pJmoGUZdJdUW",
  "key1": "61kj9duQ7irxMnixFfL7ms8pN13dXdvM22MqmvDPPyDNtcqZAcnptFvvcZn5U4cs5mrHvrzyRJetYP4SQJuQpRpV",
  "key2": "42FEDJB7UttmuSs4VcX8JRaCz6BdQEsHoecmVDPE1FtAfGy2ebaWHmG1C7aqqarJMXcTe7whkKiPpXZP3ERS29nW",
  "key3": "TQ7Ufxt3rhXGdCQFefCj2wWD9xCMdLjtNUsmiVE2n8twFhGvkbYtRfNi3b11mys51P2ME578FhdbLC28zW4SVhK",
  "key4": "21JRQT4q31BYCR1xZbUHi4BthK9csHHk3K951i5sBEWjgYLk76XaNAE7yG1TW6qpXy9mKSu14zJrpadN625UBm7W",
  "key5": "3oJiLTQmWbc22wCtBMjLD6q9GpbD2zfekCH3fZCmA3gPFMtkAB8vWmhrHXyZWevCxG22vZP39T8ALaEZadU2DFcM",
  "key6": "eHoKmK3xkFvs4rHkxmkXT8ZjTMygt6kBnq4vtqr7MNAHFxygyvep3fdPMqBS1b1bBLSq3RbB4443XrbE3rBkLeN",
  "key7": "3ayUXyBXs7XTDtYwWVbARnbt8QiGCMKyRpPaYkpiErdaF1Vujj1nMQ8LYc52HtkYxpMWfx8mJcXg4EEm2jLn8FxQ",
  "key8": "VAdkfwCTu7BuV2XBP9tnHSGsY8pdVa25LDhjBd4VUFWMVGPmw2rdqSM3Sy45CxXf4TRrt53cpj5Q9jEjVR72nRV",
  "key9": "3FbGAFFkKpZSBKmk1CH1yuCyFBA8Zk2fjKT4SVR233DA2fAxxmExGyxfujWZFGg32uxzR6gu9BCrDT6cgWtpAWYM",
  "key10": "4oEeXSNqDnb81sZ5nhMPE6aQwXZ9ng2XUkBv7k3nkxSMGhN2fSUb7eT5UmRt9BSQTdpCq7A48WXz7NDPq4cRvhcH",
  "key11": "3uxnmuVgcoB62uE7z1Fqs5BKp996SMyrGpwz9s7dhkoZxPtSVU3FCE2kWRJwPH78rRYY7Vwfmyat5sXCCQJNWpFz",
  "key12": "h84pxNmgkksTf4wWiXbN1hi2xzip8dwht2i5wbVPpVBV7qh3A3Z1YzNsBh4EC4Q45KtudbGVV4w3GJkZdW8T5MU",
  "key13": "4VwtbJb5cYTtcGNQAa4KMV7413hHRU8mzD1a6wqtbRs9eA73CtzZ3sgJH3xAB9eY7gaUCpGzdTHur8Rzfhgo2HV8",
  "key14": "5umxwc82BzwEQgPZgQjT13Gny1CpHavMRSsijrGNE7gjj5KuaD5jwFdxGeHZcCDGvd67UoZRfPxT8KszYiDWr3qP",
  "key15": "64FR25fbLdzfmRoQwtVdQR2crWvh7UQvSTgWSCHhqkSf3WTaZDMs2JjeZFiaB2f6WkwJyUZv5j1L8eTJncUhEtVC",
  "key16": "8TbUVZY3u78qjtaBifU5mB1MnpwXyuCfWLwKpheozNaqBUa33NvEbuUCpD2cUZQm5ypZ8TkaRGZXfQEAmyqq6KK",
  "key17": "3tzsinXdddnLUjtCBwTA1KWMqz99LDWQrXpF6sbz6KfW71ZkCHVSdXLCWudLeXh2QRE4QjMokDb9cLn2NU9hPtnp",
  "key18": "4YUZX2fbkFKt8nCgG6sPaUgpjGL9oYHWDKX2fsZdmeyxL31cdobxX8ckNN3Dw5G3ZpUfB7XDrZpayEzue5WttbN2",
  "key19": "5UwAt6TWn2oyvHEVRuFykYVZwuxDXEmdUVEkJvaYmPHrwhHRkS4qcedL4apGTrU5bbHGEEozLzvKtKBn3XbPV35a",
  "key20": "EBHRPtALPPtGdiNA8DBR7bYqXN75M98nQ9SCcmAJ8zakzfMqByMquP6gSwmaJUs41t59NyHzrebUMg1AaSXZM8K",
  "key21": "7NjJeXGLnE4VerKgByUWjorwFjM69JQSvK2dn2UudE2wMZKAE6DN9P3T3xpK4iqyCkwvAR9RE2W2imDvipG31n8",
  "key22": "3y473dYNM4jWADahQD43kG7xmSCcv9VxVPDyPD6udJ5r6VqZBENx3bV7Qdf5BeFF7urFFmBKsRxge7bdpGLnz4qT",
  "key23": "4HUCWtbAZAgNMz6m6NiYCuT1jiUTGkXMzoT54zcLXrYV5XzDKEmfL45aUbVtpHscGx3a6JzEWacYmcY3Ryi6ozUD",
  "key24": "2erDvaPSgvbRgDBvCyiCyTA6xsVv3QqAEQuxCnUYcVTKRVzZtV4B1672nUEtV6pA6ZUxEWo34mXkX8EroCUUxgnq",
  "key25": "5uyfKrFXGvvuchyy1ysSoreypj57PLoxnr7S7vbn3wdzvi91ujM2mSS8ufStYEtCGmfL4W3akaKwkkjrcfmdWZm6",
  "key26": "2qYFCV3d5SWbV7p6JCRrcby26xzmMdnux9qhGayid7hAUje5DaikJdrJnTTX2pV74K82LDjB1vW4eREjcRv1eph",
  "key27": "V5dYgBBmpVcwx4sRNuJhJm9hr6uDHNGi2n7hKKxU6xW4g2MT2vGoe2iE8AKW3FG5TgLdRzAaGnqZduVC5fWFioT",
  "key28": "NDpJ7Vg7KLGEfrFfWi4kPM3NSok9YbnoGXfi1UDsWHUySqP34FPbTXP4VZRCxcRdGQRadvwAiGSK1jZcFDtTC2u",
  "key29": "2kEcj13sSL9pdo6VNxLddAMJk9khF8cGJV1j9PyqRaMBR4qqEFnAK25425Hamhto16pc2t6Qy7kgAfZZHKQRRRiu",
  "key30": "24raYkVjfUioeApgLFhD8tECBs7xbA4eUG9SzabQWWyixo5DF6cCEYkEa2jYrckb5XSgv9dxS9BFuiaWhKPWFj5w",
  "key31": "4f5hpGq1vMaizuii3nHcskp2D8VyxiW2HCaE15sSNWAPx8qLtYLpf7CPKMexeVuFscnWNLZF1NfTi7rekniz9imA",
  "key32": "3wNETFzSPdWAp3gfSWx7augk3CRX4EkGHr8BfwmjexBCNn55WtLMX9X5phaeyeHGc8z8Tj9m66s1jp11kp1434cq",
  "key33": "3RCNaH2Qk9Wk8V6jugckhQ6PaepnCGEhiZPRJQwoxDqDR7UchdLvxgjYfatH8vnsUicfTFP7F2NyzEBACTWUdFmo",
  "key34": "2xmdg3zjMCMrw374o8nTnBJdX1xgaLTJwbJrAwvvVZqAEoh8463hLNq3ojcMuXgXZi9Zg2AJcyftFjFPisjoqNsf",
  "key35": "65zpGijV39kZxxyj8PyTSS3srfByha7mgVdTxeiPvoW6qneLUaKLSKqqGsQv9459dmx31hvypBM311QMCmPJ6Ccc",
  "key36": "61oXrWhSp3zXqV6aqbUXZ6Bt3dah5X8AGnwpiNW1c2X4rxzJG1G9oRtT7NbNZLGKk3d11LuQWJbX61eZzjYczebz",
  "key37": "49Kbhw3uqbUWtkGeJ5dfpT5b7MTyYyqUdaYt4zqJKNmSpPb1MP5ue2LyRDdSdKvVEhg485RJzL3WZRTngWnLSRQW",
  "key38": "4DoiVKATmFTD2Ycb8K4qP86PNhH2zrJBhoTFib2AdDriw7uc1RLEMmVKK4Tce39FBpfskQhdrZY2vYEiJw6m2zaY",
  "key39": "272PeDL4Z4vPuDyt1ztjeMQHdkWeSEqjk8vRAgxMtYcSAZHMTZ76fbH3T4uAGHwFEtJJdiNjaYA6LLWD9QHAnuKh",
  "key40": "5NCxMNCAXVyMAEcMutFwAfsuaqo4MRUC3tVMXTZoMpQo3saq67T1nK9fLam7kEd5ZNsa4eQqNs9NTyAVNqXytSNj",
  "key41": "3Mjz4n7hmYTX8Ho57HmMY2b28c5ZGJvAGH7KcKwNdEGQ6jPpGmTWUeFqFJ2ii6uCix3JCcvu36Zo679PqpDKQ5pT",
  "key42": "sqkxBF5zeTGFwV3ThZow7zcrAu3K8ME4ENPbpzqrsHPozhPaQJnuPoXRaBKPerBY9wX5B6m1vLPESJFimhr6Ua9",
  "key43": "45exgWsCfAxMwk2B6p859t6VcXuCkAqPmVb5PFN8NgjVzDjeyCezkwg4RAVzThBvoEM23wFJTboqXs3QM2WHSPDn",
  "key44": "4dcWvfUumjcxFhow6d8zApL3tkT1r7DWZCRi6f1qcjNKk5Mv5KX5d6TGCjD4wkheiZi7TdFuUrmacoKBd78q71PW",
  "key45": "3qHSr6VFhme86iQjYAuQSfxnnHG7ATKAEE6Xqu6P8Zhve698eaEiACHRF5AfUAeCvAJiX1FsJE8MyHkEnogdJP7q",
  "key46": "3XEPtXt14XpZMqJ4d9RhiGUWUwnKizN5PdQvBwJASDdQcY1vmo8GWVNPWaU4THvj9oCTXe3MJAGGFpJKCRKG4UuV",
  "key47": "UKXyv6xTbUhfFNcD43qj2VUZjNU8MCA4ZJQQZz4pvQPQyLCdrxLh6SZwf5a3Mq9zXgd2kLQ1vKi41KZ3gFuEMMd"
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
