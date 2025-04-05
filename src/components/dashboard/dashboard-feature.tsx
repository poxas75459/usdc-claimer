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
    "XW6jcm16RhH6j3U6S3et41L2AQQFW7wdftxqhPK5XaB66cFRdeVyZW83s2Ln1YEcCzcLZEYudG2NP968j2KcnY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h4SkHJqG3WsnqyxkPbNPYQTj9FjQymPgHf7Awfe1TpV7onpT7dkNeeTe6P5DAWHHsqKSXsrok6qfaUmTC28mBEL",
  "key1": "48g6rDzqgy5LUysfFQq5PdH2Z8jyKGSrrRnZGdHr9TQFSWvkaxKQpoq4y5WhSsRc4zh6hqVCvDkRiGMr5wa8wM6M",
  "key2": "2yy4hTAnCiqNB155MFF5vyxuhKZ2AXvGf6vK2RBFtzsKQM4ZMW9HDxe5n79U7gpfxU7PWSQ94ULpVN7oLLTMTZTi",
  "key3": "5gEoCYEoSSV3EU8b3o3mcbksGc9YGF6QXNXmzTTkzJvb5uKUte89XkAD6iaLGgKLcNYz6g9DqBqhABGPG674GrgY",
  "key4": "3YKauETs6eYDuDDtpsG8Rq8x1TU16uSHgPRKo6LRoVBR3Sh1yZ3WAkoANqx8oqzWFW6xZEjXwCnMpP6rwW4taant",
  "key5": "4guSevwjj5wLi4RKwZcuauuGH2oQPXB7msJ9a8eFXGyE4RvomdqBUaohXV6CwiPxb9VhbEomts5zwf2RdLvDYtow",
  "key6": "2sKSgd4f647cfw6zJxfoRedyutMoUG1MuLU6imt6Xqspm9snHpx9icquEP9c5QrkiMbpFzQiLTUogjqyDc26mA1w",
  "key7": "4ruq3wc5pVexTSLZ6byJ3dkVYZj51kXsLMR9p3gbcYk9BwtxekSeUGpZiTR3QtawKL3Jb7msfgwkMfJTGpn8SDrg",
  "key8": "5nNFq2uyFgUmAZSF9QxCkZbTy4RzmtmBf81quH3uXwWDnvLxgKkpCWZmTAid4xwqbT2VbAtyXj69o5o61G5NV4f6",
  "key9": "3dGQcNLLngaRiPaEkAjNsCerXo1BFMxVMTAjFZvJoytP21UNFheB2EXoqoxGUxBdzDHjpnVUFMQcwh6yMRGsmecx",
  "key10": "iH9dE2ymQBpBi9jE7Xwm3yBC2KXut9aUz9qXiCbKMiUQ3n3LfsPbmXHFFDEYBv4eVbAK8bp5793kQhLdV2yeksG",
  "key11": "2UVY1dzc9G4KAsST6NvPHa9mgqZzrfgRGrY3s3aa3qEy88bse13DXzyj6mw5H9esvbNRwrNNHYMD3mnYWBfv2hPp",
  "key12": "3yHJ4y8CBGFzgmMxTBtXeHBTw4WHDh7qTZUgvPXNmd6cGwkcHunqUdpfSTnX1sQAJW69gVQzbPrDZppDU928dMbk",
  "key13": "4RkbeQ2UU3K5Y5yRzP6JhNgotbpvc4G3G85TbYNAweUddX6sYqeVpj4K1q5Mo6viZ9uQDkHvzfDEEqv8C4HnDVQ6",
  "key14": "2YYjZj6uyk1cJiErDi36bu1a3vWAVgwWc8evDAoS46Trn4L1qWEFsxuZvZvB84Ego2kKYPLo3aLCxdRugS92sxL4",
  "key15": "s3HFkwDRrMJn69EYgeSpeDwwosaG5sgSctZ8mbQPLr2GaevyANDsCLQrUkLgQ1hxBMXojszN9fAK979uKK6t3cL",
  "key16": "4EVdRh4RSsBz1uiNhXQJ9W4dSsCBYasJtmQ6vuQs5vYAmaSieysWUMR7kiLQJqzyA4EAcFPbJWVXoDAiXfXTLnc9",
  "key17": "4Pv8z7ihUi23krxXVEQHyCjh7HiPRJ3tATuzoBsu8TDLbMZ7v5bj4iLWwNq9DDTUg3cchTSXPDDGRsqDFt3Ec83s",
  "key18": "2Bv6Uh76eKAyRMkAVXqzgFecr5CQtSGaouvKtXkffM93J1KDTqwchMQgkPo69psimTKzPwdj5uB6ftK3WRPet17y",
  "key19": "49PW4oTXP49WoEwCmPQzXVDBE39S3ZZ8v5Au1irQnhxiDoxH93uBNj9CnrK2NVY9Xqvn2ESVD1d3NPN5H2YUc8TH",
  "key20": "2fB9a6hZ4omKa9FuttpY2Bpuc5YnB8uKAReQtk2LF2KSJwnqzkjcaUBxod1HD1LJwB7CFBnkUNpRtjzJTUUNkGvs",
  "key21": "d4C4AQVeU6sc4mwR4cCtyuWvhzyvxHNLjjmqQQA2v2kfuMeAsUFcUGjxPu5jvW33igL1sqj2rK8PyWjhVHcjBKD",
  "key22": "53H4pEVE66qZ1DfbYdZZ1Zv6d4TsoNLsquw8wSCVGpjAKBXGVF1M9n8yya8xwTNxxtVZSKmGM7m7MgP7eCmnnUvh",
  "key23": "5XimZXZJ3YiTRA6oxAs8TRh2yuxeYQGHSntdCNe77Vz891n79iAqFuParemiRjtKRsfK1ZGyN9wSqNvTSeE9a4Mn",
  "key24": "2Kr1fEyxFZCZqWmJpV8DNfG5BxkYcvqHkPULR6WstLsPKCLM7D3SM6HyTLALRMmzEg5izN99F2D955aokF7g3Xw8",
  "key25": "2tZ5n9ny4wiBTsPhLfxpqGvuvtKja9xbnAKH3u5hukCowKhT3DdJstjq6YuzYvh5QmSbTqCgDFzudCyC36LNC8Yy",
  "key26": "3nHtsdopXDd9ujFHPBDHKumLvi8hEPWqrvjA1bFomXrEXy4L92LigLGsUrXuzAr9hhELsQs5g8UGXZRed9U3Dws6",
  "key27": "5PR12eRi6GEFTdYR1nsbNT7FpSUfsnNt6X5iMecj5YeCN1XUuK8TjgvEUVPPBXJrV8KuSTansNamVsueDdmH1JLU",
  "key28": "4964tVMqXU8ep8F83fUHLoPgTxSdY984aPGFkQy9Cwy1HPVrYKwmBE36xzKEBZa2nd2DWNVMUyeJjnuoghPUA8re",
  "key29": "q49NvYuRyTnViwrt8UDS81qHbhATshEqh6wUhgPgwghzs3yD3AhFmXES8ZUhwWnw6aVdvhaTjDT3SpM9A65sUCN",
  "key30": "4RpugFcaHyjZcdqiTuTpR9VCq2NxF4suRktiWYPuzG4Y1NzobALxhmNSNGmbEbeMM9Hd7RTSmx1UWraTLHX7SYay",
  "key31": "4EF5H2RUGSfGD1jbLufCm6gGcWcf8cmHKLvPKpEMMCEf9ScQM3Zo4mBaayKbjdxDzF7sTRFy2cw2KUz2RHLdvcat",
  "key32": "2B4wRrUnhFQHwUc1Vrbzr1b6J7zJRnWFRAq7VMDcpYp6vSCyifrdnGvXANk8CZ2JXXHYAb7mapVD877q1AGBRyrZ",
  "key33": "2yhdfBPcq8pKkZJSH2CXLZnu4jUL4Hv9ePUUo7yEThPSQgkE3yvRNLtZm1hcpVZDBfxbcrcRBhTPUFfAgpke8AMj",
  "key34": "f1LfTJE2Uk1NeTYE2uEeREQJGWw6S5WxVwWqUnHfC1qq7MXbGibuceC3xXxnpv2vZgsGGF7LAseeU1aRC1XjBL3",
  "key35": "4XSsVVZwupGoFpeCqbh7DecAs1Hty9jjf2r7AsswuR3YcPxEzqCyMjpxg9BMx9Y4S4n2sWK6c8DzaJP4huosCHJm",
  "key36": "5NiDiQY9xZtCG7qWQKZ2kHYkYnavvNEfYT7yPSvNcpfnyKh7vyKuEjVPwryiK45hsNheAv12Ud8bQPLJNVKMbKt1",
  "key37": "5yg2TGFBJ1tGetsqbMrnZmvWBRuvb9SnUGxS4YZuRmhA5ctk3Dm8BJ2t1Q1zcq7t89dERMQ8WqeXkVbpojigEEm6",
  "key38": "4WLkV25ifMvci7ie8Ukwu9f69EUnfcRKcot4fndd22T8VzJ5nMiqHTqmYtvLxp2mmEGrsHFaneUeL6FPi4o42oMb",
  "key39": "3VyDTdAu2EfDZ3rAX5nZDfQiHQWPXMESkJFk2bS7rjMwJS9X6KGJx4EBQkpKBvjhYqPL4iepoh6rsopCcvC4WV91"
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
