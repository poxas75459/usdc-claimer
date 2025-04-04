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
    "5FPP8ch4PDBvfELpiPnEezb2oAZ6m6KSRXBdSQda5i3rgF7oXtR84ixdAui8cEe8JsLVSvhZCzZVhvinJEECijdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NTUoFe5EVSDdt4Z33VgMq8GSuHUFkSyou2vHfKwDcaEVqPPjH8ja73jLfYs3AwisvfnxYsJd982bkKF22zvLpjW",
  "key1": "2WQAHAqDzLmurXSTZ2L6me6xStbEEm9smGggLvpPNmPg9vXYyfxjzKHYyjsM9dnckd6fA7242rXmYyuH3S6DQZVS",
  "key2": "587GiUgfxXdyNT8Y6dyHk9QFiEt553qisGvMEr4unKjoUPeT42sQYxNLjQ4a5te21sbMkkfAap72HkWH8wPsqTAT",
  "key3": "5twgw3vXCRfjfVnZX2SchrdYcuWEhHVF4UwpgHP5optrJUZxrsz1k8yknQBSkNuX7CxfQuwMMhNK7dHJcFVJFX6E",
  "key4": "5s4vaaRonNnK9NoKGKnLaemTpkphQxoUinTf8xKWdQ6u4PZ4pZKbjRuohCNL7iS6N3SgLy4tCTofzJLf1PhJ7WdX",
  "key5": "5D8LoK3iW4rKDwa8er3Ytj7W2YPVEToRctwXynKWB1GZ4wrHrz7BohYrn2noRbQRfcRa4pnr9ETvZQuveEQaJqQD",
  "key6": "3o2pSpe2H2oVgbKJC1H35bebjNx7k7XLXgGuvuHgv2sCMRRVKH8Cu2i9cGfvPu1U57sRCfk9M44xCHUf58FsJYQD",
  "key7": "2o4cwk6ioggd5euPYSwJENnz3DbYCuGzeMekFP1GrUQtBfm1vACrSyatyfmBLpHBXn3nxiXMLbBFHdBVi7xieKGy",
  "key8": "42A881eE2x6vQmSYUQ8pAsRWoXDBcY6ExD9T4An5r1pL5XdScAaUdhB8cTmBBwp18XqDVkg88DeyZ9SGamLAJVt3",
  "key9": "49qFSEgDQo2oLfPGENW3RonPRn6jsaRybZhsjTnYZPRo6U8Zy6x3nbu1XXyC61XLdH1otji68GPXeA1x2ZeD3Awz",
  "key10": "3r9n2fk17vtX5PDEcHim62ARGBv415kxEi4hNozX7L1JLaCf689xVXCSha8wobn7rCQUAduVhZaK5DQx5aYXX66e",
  "key11": "269fDDazh1FeCkr5gZDMavjiMd7ddnFnQwnTcMDkd9uR1EdjFqDU63BeZ9Nk1ZTHgzXsgW7UqN7kUJq71LPixBVu",
  "key12": "3Vy7DsWgxTkLqv61N7YYtMeecAThbAH9CHP7ayRJghbsWwv61SDTuHVoBvsh3KvMULQhqvTYrB9rxBpo6eoQ2Rfx",
  "key13": "FJN5CK2rv2UbGPWx4Y1b6hj24YcXh7LapUPbmqoEWJRnJd3QqFzM7jHb9YCRojszEVXL4oheAwNaRk6M7yGvuXY",
  "key14": "wL2Mw3gpDEcuUVqpLA8DCBbnLmAn1N9WWnYVaXHwUPR7828pcQsngHZweKqKEudYUMXfcggkQgS5uxkettosC76",
  "key15": "4eaAvms5rWj4KgMRn7y4DVYmE4wm9ToQWJuJ27paBhYNVWm8smjgapULmT64Yu3hqor8P7o7pT6L8A7AFhzyDQFt",
  "key16": "38mo8q7Bn1h5t52c746r2L4VDmYpNCANB2QQi6dQjwmjPSEPx3TFd9uuTaoAcEt8LSoyWCrfxUktTZMvtjiWC61r",
  "key17": "3X44iHBGcdFvQETie8nYCTwHc7SVQBCP7X1ARj28s9Lm1YsEoEG8Ca55TUy5FdkcruKo3QWyB7Gjjya1C8uDUbTV",
  "key18": "5s5ydyH14vidhA8LqicAWNHKkfL25AwU5VwfmKvhc2eYy1F4oenKWQgZQXnGfESYh91R8oZ8qryZtzzCmuP7hUQv",
  "key19": "3mZJ2EmotFPNbsarcGwLtbVBWd98MwEZHh5FhMD1CQnVPw4EfUCVAtXdhnqCJmAsh4kFsMGGrkjN8iWCJp5XEDrV",
  "key20": "3gbW2ZoTRydYDxyhDEWcGjKnfm5nvLKmJ5irnyCcg5bbFN94Xv3uC3KfreekJJ7Gm4PK9KeCitcFwCcLqUXf5Zz8",
  "key21": "4Sh7eK8Rm5KNzuA2NaDuS9bVNp2cLGm8b2tG8KnPxh5Nc6UBHrjVw4HZtBDEYcwcV9GvpfHu2D9tzVxpgW4cJRww",
  "key22": "4ignisqdZp6gHmQDJTZkRLpK6vn5LbpTwJUjYrShMqFjdeMFQyga1Y1yA66GhgH8uNBcLeptMDJwTYHyE5wJDfH1",
  "key23": "7gaXbwxThedBBNNn1f7aT7K3nj2WdjJVnSgMrpvGWH3qsTJXDY7DdY2VYuxiFD1SvqhKTudpqtK6kmsBwzfCMR3",
  "key24": "fMw5uGMTqnKxMq3KLFVLfiNo77bX3DTFrxhchpYvqd1rzPPS5vyB28T2fPd2C9MpFbc98eVkWQyBaAjeXJhUoJe",
  "key25": "3NC7fWtdNfSWExFDjzFm9VQkCHz8hzfYPxaa9kfQm4MCJuFBmAdfMod9BCLrv6kNK2D87HubjxUJmNKR6DkaNELZ",
  "key26": "2WureW2UGDXqgYGvBU7wkyijuaP8ZD6ym8tmUUzSYvqzAdZuLJLxi6HeQT55FnsDdUj55x8u95VJsXfFij8Ak98B",
  "key27": "2tjgTDrKQhg7WmXpd4k5nfpJUJxC9BxeTqxhopdQph3dYtVwfaC2gYSPxvovVnoXDerBN4WnpGWobuqnEz2V4dJE",
  "key28": "36E4kJkWG9f11vxq2LNz97ijuxeLSDXVRdjVcTuLMVaEFqG19KAAvLrrWvj5315p2aCC4L5RTSYGiaFzMLyDNEPo",
  "key29": "5ydeAehvhBTm7Sn6UpoCvoA6Ws6CN5eKwAn2Zvi5ngiKAiC8utRRUaefNVehYDuuqzE5c3VArW9V1tmDCby7KZaj",
  "key30": "4q7tNNCNF6KvZHXAtxSWfTeKANFSewyg2AQ94CT6G2CVaUVBTH3FpAxDqxvdEqzjPZbsMxEsNB5pJ8pv7uhtUjHq",
  "key31": "2xk2zfSpeEawXgG8R1PHwVSc7scS8kNZxNRk1LseEJ9xi6J2rYiHnsWqGvq1gtz8qwJskUrDcbCuD4RX5orNe7Pf",
  "key32": "2zQujAMQBFCJvtai3g7uNkXNrVPxPyrUwgJ98mWa2T2Unxocn3FrTbsJonLsFbbv69TRR6t6eg5i7SeCqDjoVE2",
  "key33": "84fCHSk5oSuenxTzP51R653vVeri69eHQR69iFeg5yv8y8xKFvGZW1PiQazjcMqCnKw5Uj67HFcndQBCc77cPZQ",
  "key34": "4gPdELNR3QG22phQ59kthXFTDWTVEt4oozSzPtnwWPed39U3yT5htgmcBokupq1p9h5GGQfbWgoR7vjnx8K1u8BZ",
  "key35": "jDMV47udxeMPq8F6sS2UqPx2jerGymY8hRjEAjchfaHppvAgB5eLzHTBhHuChfkpfgqsZGW5j8QCD6k9gwkhfkT",
  "key36": "4SwLiiYK16DCnwUoDm5Dy1qWXfa17SRmDAMHid17tPZopBErB3w9McYx7MRspBTsEWJaHuD3jey8o9QRV5HGfvA3"
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
