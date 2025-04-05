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
    "2s3pqfifxfWex5XrAUnCFtFMh8xDNtF9Mp4etM6w4vr3MjBWQ4FRRtpKyvSYE1FwisLvKLwx8xogBGZSh3QCsNc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bwdS1BZz1cKjRCFDFRRRgffpJE3uo3f88BNb3f1NiYia3dMLXeKAFX9nBrZdkYgoVQsp9p6anzyUGM6tkaLLBR2",
  "key1": "hA8PYX84EpJdRSgHDWapC1amf8aqiLn6c25eHWhkSZXeBSwnoNZihLP3nq3FqAcPzwApcaenQtodbWXe8Ljw5ji",
  "key2": "3atdTmq2hkNdddVRHAJET9PNoRWRehEHvGHJXccZNfv3Ho1riWwTNt7cZQQswAhBubhKyjR7G8RxRD8WMMezwG2B",
  "key3": "5fT26qZ6sZNwpG2pTRXaipxyWpesays3f8NounoY8umVWmdjn9r6szM2SVhEwKeErGa8AmJwzPErbwmbDsRigGSd",
  "key4": "25hiPSas6KnRAvvdkQFbjdgVZGUk8ZTnzkBZYgfrm5dERqDnFEkApL9ExqpYgviZ8Yt8G7NzT3DJsrXhPQW3nksL",
  "key5": "2ZLTJQb2KvPFn67n4NQYYLvpHPc7xk8sh7YhE5BFbyUTM39rofDSJuLTm52SwpDJ43nyFrfVG5h87hNits79PtFt",
  "key6": "5tj24VxQMTZxQ6QETRsBUebxyECjis8wFa49Bg3zQEGD1Le4qpeAvYynRbebdDMea5KHP36kgSSsoaFF6dpCDYzv",
  "key7": "KDmb7PVpp5u2wSjKzK1iHQ2ixG98mvYs3Hgcwtj2EHfvvAM3v9PYjBg98BiWiz3qUgvkiMSCCSJBpZ6ntkk8Wqy",
  "key8": "5bXLPi6ru1NoszC28ceRSLfrWzn81MB4hCyZmMsGD27sB1QRjJ378T74tidUCo5bEm1iviBfht4Cuph81v4kYpD5",
  "key9": "3pJvd5VvxSvKVDZCMf8ERfGhHQAkE3y3EHy6gDjcwHPD4CMD92c9LNyBLsExL1GMGfMywJq8ZosCeybkd65FaA77",
  "key10": "2sAs7TMpdy8FFwLDbYU2jDq79oPPPhfzPJ9XfCdppbqK2ybxGdNELfFgQZKPkPyRzvZYCtyXhoRnKFybxsAxmTGB",
  "key11": "3czngjfXvj49UAGyzzY3ihECsMrWHYgGn7SnMntFRpnHoe5EK7ecTdjkyBPy2ZHkhhwH8mEPMkxErZb8LHYi7hsq",
  "key12": "5qQ4VoXNPwB42t1HRZqHqrUyLJn3fF9bmGNQjqmttRFJjMJ9PxuGrqhN6FyZgE9HuGk72PnszS5hhmBKyZdudsHx",
  "key13": "aX5LyEchWDFzJ2duKd2QSkktLc7sW1duDWuV7YTNY5EMEgNgg9E7gzBntoCQqbUWKqpd3Ty3UkPLJoTALmtzrDr",
  "key14": "28wqXA6mb5H2jTeoRiP2ykMofToWyPFog1F9QSGSK3VL2okHzSBQsARfr6SWhnekQV8FD3ZQrPU7BL9ddKQXw2rX",
  "key15": "2vUk8hXPc95k82XNcdV3JRc9cNERbggX5sdvP8MEzDZjPZv1C9n2uGmHhiMiwNJKWzwiswXrD1EieRsSH8aaNLkx",
  "key16": "3GUgkGyXTzdf1HpjPq6fYcBBeUiwT2zJzP43xN3TSKq8XdYG588GCLoNhkLLUeH9bBJcaxhtu89iS35X4N42fW8h",
  "key17": "2k6KS16PsXcbKkMfVoX79J4Mzuwg8mzubEH2r7s6NFctwxoPEXe5xW7RWKtSvn1gsCg27ZsGFp2GQwakTynQ2VAp",
  "key18": "3pToq16guDX7ckxtvboBiC6Bt8LDfADw2VVcopFkvKbSESKoHimuUXiNjgve1W1hoP5KnaMBMTibigtXSpLsSwoo",
  "key19": "4pzqbENzHV2sKNuAMuS44SReKqySBAHWzmQdakSgLTPezNmSxbATDmCViGW48ZQiNTYSSwwudxnXsQst6EzpLLUu",
  "key20": "4UpNvmy8zMCoGLn6QSwJ8czStcNSD9HQwptQKkPVA6pZ8VPxUiiAy4r1JCeqT1ZsjFFdYdU1UqNdQFR9ZT5aD1qd",
  "key21": "2Frj5EYy7EwK2JwSJJQvoHrENWzguNqjXXx8rTSDEjTHh31Z4wByEhUKnS5FHpQWsfvvhbABenaT3n53eJQQWc4J",
  "key22": "5Wxsk9kT2g6BmuSsoqSdXCwvkgPXGMEtfPAQFhZBRrpnTdx9h7RfSdEZGasD1Gce6RUMe5T2FvScYShabZugJq4u",
  "key23": "3BLxB8enji23TvkUFbDfYn4cyZ1vcrm3eXQkYm3YqsNXasU4nUe1oQeTuoibWChzRxMnc8sM5ffnAPHumVtHaWhJ",
  "key24": "4QsRfGkeVsQydoSEyNw4EnNSGzVg6Rr1K6oaKfAUmLYErMiy6v6LpSgwYB1RPjPpfjGUnPjSRzS7iYLp4eUQGcsb",
  "key25": "3BujiaDg9mwR2tgqfA2KehtRBLw88d9fE9seLjYzKuYrHA19KemyFrA5jHmszn8ghB6uHg76L9HuLTPKDUq9ThSD",
  "key26": "2VkAPd6wqqE55aqfGxCXiBZSJtSthcaUJKXD7H16FLEJvrgXPBtmgb8xjx2RVk1popQj3B6CTGmdro8KNpgUGzS4",
  "key27": "3xK3isi9hbyfgZKhLQAicJPp1SzvsaW8z3cYLCSsm1dhku86GxrUrhA4KNCoxg1ujSms3MEx5gX9b9KPnud1xEkY",
  "key28": "5crkuuLEPBmhGanTzcmSKuD1d1YDs1gvA8F6vyHQ6GVLnPiW6KxbJLYUTYMAM6Yp4jLgx6xxmWFrfVEN9uRfvaxK",
  "key29": "4VFBL7WJ6AcbQJ6sy1RsQ5udrUHG5Li9T4kpKVVPNEH5dVmcQHTndPm78SUv5MBN5Km2aVutqh13DuosBkzpxUDW"
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
