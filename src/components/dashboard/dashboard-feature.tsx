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
    "4icZKBkeuYxRFoKnzkx3rS8EubgdjMATNZ1p8QVYPDBTLjxC8ZDzkJ3AN1AgwmJfPqZ7UF53rfn5UuJjBynNfL8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NMdSywpPSePZ9n2JhZL67AmtLhNMfEcekPf75GGet7ev6pFZtDKTwpggseRKX4JBA3XrnnDisZGMRgXQLjtSwQD",
  "key1": "a4V4ffyiqdZxosrMwzEs6KDVrGkSiSDn2GNFNUK6eGvtF9r6a51RxbeevdoguKvm8CUXxPbMafFYZW3qc2NTpgP",
  "key2": "2H2kNt6DkPLgti1HHVUHFd3VPZb2VbiLfL5GQKEFyKvxBdZP4CfJwJvfhiQHvKSLkfCsDC9aCyeZ7KizM3Wjxdxs",
  "key3": "5fWWcaCg9J1oL5Cs5zTiLX9gogZ8NipSaFV7dy7Ytm4rLAt3as6qnetLfZ5eiTUwLWoWtoUot9dZcrm1piGvZNvU",
  "key4": "45EtD8J4Uqb3J2oE2CNhQFJ2X29ouThiz2EfKLeDqQ7B32jzupN82rnZxudTL1AQceipYVXMKMMzBytfFnZDqoBW",
  "key5": "4V6EbkaJ63BeRZYPMPAQXrztPGj72GqQ46aFzUQe6M8k7bUzo7nvxHyW1YUUvHY6BXcb6cuLcwLhx5pZdaZVTnL",
  "key6": "126z3z6a5jy31mRLZtV1soasvqbYiwrLbmo8tfdGQo4tmYrEzvkPo24tcCmG3hDVWVo7htmTYismSur6MX5GVBax",
  "key7": "pCD6a1BuFkgPfUCD8CkFtLt85oLasc6ECpct8TyYEwfWC7XqwzShhzhQ2cgK2N19yQW6rnaTMP8dyES1foQU69r",
  "key8": "gdu6TNfMHRjA8ut6gb1vtqBNQsQ6RG7Ypfts3mUHkmj8N5GrjpXWKMSXEx3bbYyPFSYoVN9grSaBCqQgrspZ7bC",
  "key9": "44JCMow7FnPzJtWrTQjh1soTcYZe7dQdM5GPpthiAXjGNQxA8xh2krwyrFCX11qJSSq4PwAQjWDYWL19RtBRW44M",
  "key10": "4n7Xuje4o6csoeHWq1rP9U1vGhgxT3NjNLqtsRotMfA3YmogX66dKMoRRTi9SrxXYsv2fEnP8eWvUSmZW3c68vW4",
  "key11": "4j8kSQhMsdgCmPrHRounrbNUAh2wi1MuUK8ms4XDSMreCsRFn8CzCgWiTsB5VtKuxaDdFjKFTiEM4ZWQHdk3fSQn",
  "key12": "3BMJBvsuNumikCXcqXiQwmdqqcjin1xGqcH8Er5JtA3FVkrR8DexPecXfpp8f5seFvayzjzcwnfLJXroYGHCBG5P",
  "key13": "5tUmUfpVYn7osspEBy5Av71N3HwkwoPqLoA7ccvS29NwCKNh65jY94wDmY3pCcAaSLgdrb2HPn3rsnAUiK42ZFcC",
  "key14": "9JXhcmPAjcVq1mwATDEjJ4GkoVeMNwMm5xUTsBFNEvr7s58MEXZMqnSR9akuUe9GBP97H7rkEHg2ZuSxjkxoh2m",
  "key15": "4pQLZt5wF7Bag5XgSK9m2sMUedZuq1xeRXLuwcCXD8pmPz3Xn6xtRvkey5i5vwGk6A7PSauckRjssZvWYJNHiLKD",
  "key16": "2kBU5iTEkrcshbcpj6vPEqj2NoE4gNyTFxFEU5rmZnriisjbk3vGq1SXxrqikfUZt5Lrne5thUPa8ywei9dWpKC5",
  "key17": "9ZvrTzkMBS3ZrYpmAn6mAiaaRaZsMgqfoEQ8Y1g97BeszkKrcHKLxp4X52Gctm5WGk7orfp5JhxF4yHxw6HVamV",
  "key18": "46rpvndK7TaSiwsVvtX8jmFxWsXnjw8AmfJEV9KTSJgMpwMsa3icFeRExLvftZrPTmnAnn3KfaXEWHnXhXrRFS9e",
  "key19": "5YgoyHnNGxwobmbycwfe6jJybfLmj7F6HKriZxgedgfhd3AMEMs3uVqZuoY2ZSwXGGBqqfsM7gcSwTkhSA2fYCq7",
  "key20": "3YUZ5tko3KVp1vV5RuoAJN8VfcBDt8s24Nmy3kji6sp5FvQX6y1aquLyAzHVKiXZtW2qzd7aZqQLHw3Cfh1VU5qX",
  "key21": "4gYgMTW11a2FQVRSeEcFGNhe7HgVgCdnDD8znW3LcWUVzkYvMJYRjUh8ocEe4FDH3yia5ioHvg88xQFv2ciWv4AD",
  "key22": "29ThksocyaTZBeMUDwy68zeuw8G3a64afL4KCcpWq4bmbzYh3ev4JFno3uJyFA5pAV3GG9499yebMrxo4yaoEoJe",
  "key23": "2kPcF41fevjusnXjibpuwrCF8HwfMm2idV1fsFPquwG3AFnEwbAJTZUf7v4xtX6EDAmmwXRcN6YD3kxXq99o7u3i",
  "key24": "jngFT3engLSpuMFBof1yXaLMYriGuX2E6F8tGLoaEifXDimbovjcEbfCqoc3sMN3S5vjaq8sVpK8FKHWas2kJ8Q",
  "key25": "4VfAY26h1NDo3ukoDViCDsV4RGDD1YhdFTXarSyxYQqZLVLoargazkaXR41ECJHr1mje87Dr8fFWw5nsceMvL2yR",
  "key26": "4LkfZKJCeg9rL2yX58RH7LHHoKL2vUUk659Zy4zTggPMQHABtExWn2LnKUFQQeUJR9RHHDvstRrt799PXjtza9ef",
  "key27": "3npLJGyM5xdqpTQFsHMnjPZpTQt5wJH6a2VFwfWMTUDRjAYFN2uxEZkhNJ47FNhPBe9GR5QBNX5CpWLSBW6jKN4",
  "key28": "51vUAzi7978DWa1TJvQUy3GozHDZotMKVXCF145TKhB6g69L7ub7ZA7wCyWKjatjz2Nw6MLhxsWqvVuY13Ac6Raj",
  "key29": "4DqASTQLxGYTiQCC8XczZKdLCGpf47K2jo1exSeEaM43iZLbabebxNNFUYcNuWuD5rakWMxSk7bBtiHxA9RdCpfe",
  "key30": "QBfHtWhnvGpVbJNtFbWDsmo4Ei1vz22kLuWMaim5mfa2iwDBxXcinuWmxwdhMPNiG3zysQkkT1wUeT9mRc3fzFS"
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
