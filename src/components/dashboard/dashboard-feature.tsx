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
    "2EeMTqBy1ynoR5EzZWFeFboBr686nxZhimPChi4zaHW5FXNoWdaKhSiRMx5ppzK4GUX2M35kFnWKoeYvfyD28AFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NLpKUddPNQTBwn88GJfAgERKit9QYZpk2sf84B4xkKcKwLEXsoBp6goQ9MsoH3va1qKhGgFfRAnfwJvmLX7LHfC",
  "key1": "4ZqSAgZd9UvWMZ27WuCpy813a366aW47x1aGL2pJp3WkdcWQENzbatb5X9txCq5yysm36stqTxpcxv36WpK1vdT2",
  "key2": "5bXFXwbkzzmVoJwziC7CCiAvaeiPDYkcgCQehhhKDtQeQG4yz6Yr9L9vJqoHP7BxjWatM92Yyaji16p5C3MBDj4k",
  "key3": "5xYjt4qZ23sA7KFVfWv54Dm2CeaRqrezzVuB2NZah5Sb4Wt2cXwntQ6wVnypQAdpfSRQDBvQbVnqCupPRZ5v6zkA",
  "key4": "4L3bGZ1DPwdhUF3surC9Dz8rcjArKdRmmRmYEh8jkoBtdXtWX8AeJjjJuAU36d8WgLo6CdANck8epSasXvBPLfPk",
  "key5": "3tm96pDZDpiySujs1zoDxw1rLeUnmaMQnaSYMis5amMBTRTwQNvaRknVUhBijpojZwYzGEPBT8ZNSwLrFeCz4HMC",
  "key6": "63bZaDCyXKDjnWTehYLuivKwkEPixTXy1WeBjpWpEoR5CftZ25qpYh5jfuqximYUFKXvXi2wzceL1XxxB1hsFwYk",
  "key7": "AYHDULfriC3PhPSPdGR6cLRQckTrtWoFEGtcHtr1i99ysqmw1Kz2tsuueWN3Mhmtm9bnnfhhqTb6uzePZ6kVF45",
  "key8": "4mAQsqY2fsJsv5CEr1ydwNWebKSedGFWjsZWnUrejn4Yrsk7XfTeQgJVxYeDW8zv4C7FpfVvZ7V1eYi92Ghrh4p2",
  "key9": "5QULHY4aQyGxr7SJSs1CrJm5CYdMkmbh3xeMVQt7mgY9hUZ6Mj5FjkCYBbvuAqN14sRMRva6qKw6Tu2iykMD6pfm",
  "key10": "6761ucxu8hSgt1DdCr2upcpmCSVbRFsHMgvKJAVbxosVC2PKJyv4yuKxGDycwEZ7GxfoYb119ZcHk6kaa9QUAHFh",
  "key11": "5Mg7gquiXehkq7mJN6Fmfd5FaDVmZFzo6X1CTEm4mFnnfKdtV74chBRf52xgjV4whv7eQur5Xo5axLaWtUkFeEgL",
  "key12": "4hJ2hrthsdUP5WQTzR18QgWzNwSocVHUVk6Nhq7Ek3AWvNcu8E7YNHeDFC5ycN2kSmiNgNgiMAHrBGptTjHfKFHG",
  "key13": "4SY7DTuq9skivFFDzc3QQUpZGNkcnpvNRh34NmbNDDrRqPyKie4iP3u7BoMeJ6hvbW4uWxoZy16xFe4MjpTfYwsf",
  "key14": "r4PXxX4qGs1kq9GPyvDGP43z7ZTuZ2x8CGL1yiQo6ftcnciqBM4uf8ptaKKzuqFCAZ2sEzsvUNmkZbBamhYd14E",
  "key15": "5UFw5Ki18KjNPCSfvP3dPbM4Hv2Euqvf8zKg3h2ePpa6EJ2EKjTcK1zequ2Wn3DDyWfk1czJh98Zv2vSnocJBw3U",
  "key16": "1p2HReo59PGGrUkrVr7pUP4LWxEBigUbd59f3ftyTWywTKtbL61mKFtmjSvfWyryNyMCrqVVxtxMhKbyyuiGGwY",
  "key17": "qx1oUoK3R1AZuk48eS6gFGRkSf6wkHc4VZMdu9LM2VxLfcwpurqndEuyjkQCVuACReH693bYYwTECxxmuQMEZRt",
  "key18": "5zbsUXtgxXnMuzWjcC6GyKmSE9PbJWT57E3FJsb8xLTvAT3QCPsmwi8Nu41LEY2js3Qq7esFPRv97QZeLSApCNax",
  "key19": "4xPbWCgKeWtHUDky9iodMPHVjZtL4PRfuMNAGiDgGpdXbeTLhGmbS8iMsR7CXjmntafUvWQQwqqFuYi2U54gPsZt",
  "key20": "4yL47nSiVRNJygwEkPoJLSk8wJgGDNJMqPgcKWvoYDeAwm6rJhjChQHQCmDaJSakheu4P7vWPoFnvkgfmvXGYG3W",
  "key21": "2Pg1SjCAA96zNRVPtm2WDRJtd49haQtCqv36EuTRUp8tEDMwpxXpzaTK3gbP8pHVWodnBKRPwe5qMTpVznLGWXtf",
  "key22": "4RwpYteL3Tq7wVDvjbwoTY2fibbFBAscCdTogNhhFVbt19VVFRadZwySJHomTXAtggTwyEeD1DtfmDoArJNwAn6V",
  "key23": "5vfEHNFQCC9fhFMrG2RHFqUTSaPus7JahRDem8U1r1zPkdaT16r3mxfh1xyqrDBgximjpKyCJovPhPhCzPfiPPE4",
  "key24": "2FC9Pbz38P4LYES8kyafQrn9Xw2PmLseQzeDYoeBRjRCWh34e7PXWYDFCSePMMGBnyPf5WWgb9UdxbMdKBSTWQW7",
  "key25": "2HpkmyF3FVpLjRjFEDs57WAXd6YgjoTeSBW7s5YvTgXdztfbFMzXRE9eRASmrykWFYC6KyKFVeNjwzMuDL3F7Vkr",
  "key26": "3LhFABcQ5hb8jTLzauVJyKVGEUpAdjzTK63qGmiuEHzECWKBKrTgcYL9xFp5kNmqaWDtW3kp1dd2avkEFEREZ2TV"
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
