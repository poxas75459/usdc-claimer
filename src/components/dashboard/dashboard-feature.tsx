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
    "2eoBkdeSEEjHB9zZPcwvGih1UUnJoqeFavE3JtRvNcH15FZVxGf5fTbjvUXzmaPmkMP46RizyP775w7h6ysspHNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gUV7QyUb1BZNd1GJEBnPhaPSzEyUmdHhyxguJ6mMQ2aFPxps3Jp324eeyDejG1ALP942tRPctSSG8jzPPC64n24",
  "key1": "EetWLKN9NJFqBXHZFNq8knwqH2m8UeiPVWTG575HrXeHB9son4j7eUAKwqrUfxVF46mfHrkrGNLgiKLjwT1VmP9",
  "key2": "4WyrQLTm846bVF8coPGzSaPR6zBLqyUPEQE5BzmovBEhFetBqYRoMnWVZLGcMR1DNynLF8DpQMGwXPLj34JVUqcw",
  "key3": "4M7egBbyS1QnyW5JD6MUR4axoyj8Gni1AUhW5bsm2t6nYf4Cn7ddn7YDucVCpFMxukFvhLCWhh4WBVPhRAFafRAQ",
  "key4": "65cZEFyZRFUtJUaa3NYQXJ3crz9nmhHGZ3qgNC7kDzBfE7bH49z9a9ca7rFXENoftcvLPYQYgCqNQV8hTuZij3wL",
  "key5": "2fCdaVDpu7sfAxcUTTiDxvZLY9uLn4mFxpM35A9PAd1RinyCZazg99WMJjWeYTkeF42u5iFEb3YTumyBdrvcaik3",
  "key6": "2JNAevheGjL7TSzdwxwU2nXUQNknQ2cuDKSFV5VgzKG3448RQfZg96BVxHzgbUgwZzHRK2iCarpj87FjuWUTWBGN",
  "key7": "4u7DSbFeTaXcFn2Ysokn6LaWKhk6pVibCw5S2sE1ejJ2ex13YtrTn8pnx3PVmi3UPwD57hkCvRiREjCtJJjygxsq",
  "key8": "4v4BMHxPwKuMRrbXZyzXtXnwoBjtnSNpBgF8ShgABM61je8T8dF459dseAzxMW9t5Mg1rcaoSNo3rLh84B74DZ2c",
  "key9": "3HGqxwhx1w6t1LQgbtwU1L5TRqwT9FoZ6itUhFBqa6V7D89ikqkrpKX2XhXZMsZtZWbSxuD2jgtQcUHWLHPNFEXC",
  "key10": "4x32t6dpwRfzZPJ2gUfAkJew5j73peLf8ZoaKP6i83rFr2YeyDDQi68mogpwqpmfwguGzededHLGX1M9mmQCr1kR",
  "key11": "yuDHRik1MCWBx9pwBivSqWZCRzNWi11Ekngkfw9sPXAxRcy4p7A4FUTTxaSwabeg4Mk3ZPKW8YkBCmSf23c8dPy",
  "key12": "56qJF29MjsQhsqn4BYt7aYZ1ogBB85S6ZJA4GawT8bMA9K8i437shnXdtX2LkdTd4Q4khnxz3nK3e1UbAiBXPX2n",
  "key13": "zw55Mstp7YAo8trWk4Kq7MxGLstaUsUqLS2pmsEU7hdsc5Ft4RUuEHHnfKkjGjdCFDesB4BhWPX23de2QJ2z7iK",
  "key14": "3PLZKqu8nmDzd17KPZQ1gS1VJ1omNH1yLpW7mi1nLGWbm6HUbm8vm6pNdPJdjFUjDjaW4sf2PbRGqtqYnrGeaWM6",
  "key15": "8JoxRoegNozcERHoXcpqUcFx4FemdyaFFy4iRqnmYjbxYd8P8cq5MuC2SfpHbfm2jaMBLTChHpLuMbdUtq1AitM",
  "key16": "5mZffNKhjau5MyGzNmjWVitcVTP5tdRmTFHZRmK2SCmddPuAiAARpJE2mbADzVsFDnYz35RFirKzutsEgMstp71L",
  "key17": "XLspNmbe7yw9ZedCv3HWSYTfVFdrqRoLyGHRkpD1RVsc5NR3jsxqKFPAQkzwYUaSRi59wFnuFPuJwHUWzmyR7yk",
  "key18": "61Y6BWCHBaJTFELRkEn5TUTJUjC2GzU5ZnUJ7G5bRhbVhyH3r1SR4bkDEKNV63tgJrUXxQwe3qehCwuHqii5mDLh",
  "key19": "2wfieHTgqgspUZ8EZUceSDH65fxmwbiY73MQiUWjTjEa6BYsWmkBtGfwh67y8Ur6Bis9c27dU41qtHmRGdkm1RZA",
  "key20": "3zQgtHNXDRjFbECuLukXatWdLhFB1fsHAbCY1nJggCDSNJZcJ5ZpQhf6oEA9EEQC6acGJXiwAZq5QoDRtmowzt7s",
  "key21": "35TN6mm3xAzNB4mV4tC8Mj4iivRtFgM7FpLotquuHN3hNHNefoAUnDUEYDGqLut6ZQwtkQNb3ppNMf2N4MyrX7Z6",
  "key22": "4FqVepiVsXC9Cu125GkYJATJTCqu69ZAEafvF41k8i8C6jLrRzCbmyZvUsMLUebB2bweVEXcsZGgqjAqrCYEpRuW",
  "key23": "4si2osX3foju4mhJB4j7sP9t6CafNFVuJge9yWts5ZDBZkgq2ZKg6bDpHZh24SgTocLabPFjKVTXPpcK4131zTaa",
  "key24": "362LWqZ4hLRE8Bcj9xWtzs6dGmiZ9TqMYznb7vvV5SrXpr8SgVGMgjPLY3Bqx1EUZ12SbmkVnckz53j4gGp2oXbP",
  "key25": "53DMF3EQ1Z71bLn3rpgqP5yHbPeHKEXvM2LVz9jEvzhGx4vm9AgrRUp6XL8Ec6ggzQc68xWBzga8EkwUYxgsKUKK",
  "key26": "4Xwp8PvGK7vJwob7scbpFB36FdxDZwXnQc9R8xZ4455amyk6k4YvCjWwUX8DuF3neKq3M4donwTWM52SRekpWU2b",
  "key27": "8EgENnc3S66bX8JEWrBrRJNmtiNPUEFPvXDDapVxPRV7AuMStxjYid21WMetjepZGDy59sXZr2jFJsVYqw2K3QS",
  "key28": "TVTGpmtDGv6hCtWTRpADvXkDFQkS8Hn6gEU7tuxcaXh46X1RLqUwdxYfiVQviqvpU4n2VqB6PHgcpp7gyooKc72"
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
