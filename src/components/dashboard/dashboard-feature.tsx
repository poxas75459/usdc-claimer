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
    "2HBnXu7r2RJawBSx671AevQTZJQbjAyaJyJNqUbLRVZN5nxMCbDMeTg1SLxb1aNWCeYgyNj8hrXHpinvQNYfCsjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wLCPRZDZDoLtnbrd4Sq2e5SRpntJqa1MTb5A9kQrsrzQjyjvayEdvAPGtVjGLwpySo75nL76DP3GxN4rXCrvi9W",
  "key1": "3mDupS8N6ESepFM1PkWevikSUqU5niqzaiaaCAwcPGBZpFmMw5yXaxzgVRX8EiaFXy6mWzkDTKXpkCVSJ1DLz1B3",
  "key2": "3gcUTMDjBfjMLX78vVQPgHxDKopHJMeawmEan71u6Z2TxxmD7L8g6hHAXJwhNQeNWQUc5X27KudGaPumZVMoRiCz",
  "key3": "3BhZbV1VxCELWSFsLZfJvidrimneNPCwMoxEBVGFTu9cVADzoiKNSEch5WMUUJWxX5qZa4YastNcbWhcct81L4Jr",
  "key4": "4xWLkADoNJuaYATp5m3ARk5pELe9Ndrv85DSwTvGcVhz3tdZtppcCehBpAV5LePMmtqWvv2CfWTSEyvFe3Y2o9JT",
  "key5": "4nRM9yzh5DtzniaLV3DQZUAmr26rmKLtaGGfx2S8v7aMzQ8krBcDWuKjBbgJVbGyUtufVFDhkr4XgB4NA8r7yEXY",
  "key6": "26fLGkAU6k1VE52fkt8tQwodQnxrKCSJw8ypzhRFiAwdaubaWVAQ59BvkZjKdt5zEWwuSBj4bGLMtSAQmkbPMy1h",
  "key7": "q2obm9CFw2ey3Z8pv9pt5WF6j2Zqu21AMoxN1MkcBKo9H4ueLBqCNnvXcBSzUTifmFaLqhECGW9ByYwuM4BugGQ",
  "key8": "5LRLhURuFrEUz4fTVX57KJYUFedXBqxq64DJpLmn22vTXzCEfksaU8nhnFfLyYdPRRADUdgGR8NmyRhMQZKj15vC",
  "key9": "4xpgqKH1moez6DWzN958gAuV89g4LPU1AF8nsL2kpFK5LbW367FurwpiX66GkSEKP1L4SgmdMnKwn4peMvdk92Wn",
  "key10": "4hDppJTtirGqjh5hta4sAbccXQ9UGfxuuiwiDqb2qR9oEoVPAAhnDYrNLr14vGcGNZN2a1xXBboDq5pvCvsYaZRi",
  "key11": "31bBBF73XGmo6TT6CGc6PTJ1E7UPyNMULPyLQRakD7HDaDAF5CuPQkvEVDBqr6Quy1gqRoqwHBaPvNXSButVAdM4",
  "key12": "24rYvd7amLHyAmVMEGQMMy2SZLUVjdVkvs5aVQQ9Dpi17a12eon7keMKVjxcJey5DRFkEoLxKNca1ZBKUftUyjWz",
  "key13": "5bDd6ZiawVQA5JxK967ywGanJ1XM9mZDY1qkg5oLs63gmfz5yLVEtN1ehbiccAx2ReEVzyNCpoe5vc7NdZQiU1Xy",
  "key14": "3Dcrv6AmwHminmJGqJr9xHCAzCt5afHEqawhG1mJU7wYRXXEEgsb2udmGxp6F9gD8fJWJ9Lm8xr1GKfLA45yXcZT",
  "key15": "5xKK8zgrSDAJYmcPxbL9azQZjmEyccn8r5fni1s5J6XnBenAoTJPfUr1mb4HVTD35KTmQCJn8m8oqdDjso2zDFiQ",
  "key16": "2HqVJxzDh3KJJfo9JhWmZP1fAxB2V54udezuMnRgxf2SBXysWzrye9pY1oNExr8MFs4GgEpitZs1adyRdsx14SA6",
  "key17": "5Mf7tfKRkiM7xGzyQB8RdV3UbvmnJJeRZAvn7DprmRhy6c6hEkKjU2Wzv9TWuNFxfYnFdcpTJekmqCvSTzPyF2Wi",
  "key18": "3UMc8PzZBe4ATnWC1SQDVaK4gMYK9YEtK5NLkgDVM6gkB3Si54TMaFKTsLX4ciagx2FNv9Yaxg1azZGqFoeV8GJ5",
  "key19": "3EbvKLo6enC2rmsJpU7zD6iCShZag8oT23gMCiNWhmha7UmJmLsWseWur13NXmcqyUxdKYXpUVodgFu1e5jjy7NG",
  "key20": "2Y123LUUXMr42E6AAf6JnSfXwJatoztGQ6Bf9yV1ZaTzeHLY7a6ARRhuPP8i2dwPvaBfPRY2rnt8yQd1TgRPrJJm",
  "key21": "3aLpVe215vbtdiy162zXM1qDuDBxTv9kB1SpsZgn7cSE2Def3Mo1x4juaohNg4zWqtoSa63if19APwzubPKwRipH",
  "key22": "65pVww3gaiy9Ad3UfkBQW1diFFmhkTDDZXCFqbRyQVwfsP7zKUPzRx8emRRuZeFuNRhDsgHc6NseeAv8hN8Uacbm",
  "key23": "4y5ikqGgPSebPgq96cEYfica2rESg3wriTx6hhfo8yX2uqicdMr3R5nFmuL3qnAj9sHC9SyTBNexM4owR157NWfQ",
  "key24": "CfK8XCcDkFCfx9daBW5sNZrKLfQoiS41RfhmDA952X4WArS52uiNmd9bH8JfFV7sn2eRBKRTx7CTgdzJrgCCTy2",
  "key25": "36NamiRScJB1RDGZfsiTS9V1hzEckjkmRz929M5EGpHB34jfATuo4ybtkKPs9WzspEnGHU8YdHTYyDZvy4iXLH8Q",
  "key26": "3s3N4iiLv3p2j3fhijfewT7NsSe5LfJPHUKa36CYFmuqju2jjNnH4izAA7Y9DdRxcjBRpEYa8LR1aovyDP1tFRpB",
  "key27": "51figVhBav46aEMv8M3nYP7TfLUJmUiL519jzw6fD2493Xj6X2MqP6nT5qBGMnzpg1CMUT2qFwYpWUtkbV6yYKyD",
  "key28": "3Nossd9grByf7ZydJnY1CAA99HcKcK5NqKQmdvT1JFe1k5mZTrXkbRmeGG981SW8o21i4iL6RukbSK7rJkS6TWpo",
  "key29": "2Dwa9FUYTpmy1gW5EDyVHuKyR8LYDdaZrbeDNnKmGXwicKjW9WZsQAbj7YvoWtUbGcrvR3kJp3zz8SosLE4AbGg6",
  "key30": "2sR7Pj4JPTJNbxbHByycEFEDtnRNdakroJUp5EQwKWh8KSvjtQLTbmBVjd2fUkukT51LWDPhmLDqop4RreKdxf2A",
  "key31": "3vM9hDUn5vGnUgXjcfzWyrUYVT3W6q8ueeUQNbbV9W2JErL2izS4CVDocALgbKiGgbUirTnLmFd4fvmA42NX6ST4",
  "key32": "qZBZYTQtZFnUNYJWtSq2uVQVGCaLtDQv5uX2ZmPgyn7NKKnrXNipJXtyK9fFhj2NDP4M74FCkb1BKeGJdUEcRrq"
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
