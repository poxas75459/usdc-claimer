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
    "2HTaLi534KkxKDc2Wk3bAj8cuauDRUbX6bt4kiUJ5TXDbcUjRvk5S5PM1hWT5khSHtTYjXAuPZSxxd3Di6TmSM56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oM6HV92hwiAbC6Xgc6DSHWVFQRad1MeShNd6EV7CbtgkoLcjejSisrCuJbZgz8uLqyfL52RvvGK8K69LnHhrDEV",
  "key1": "3bfzuaraMZjJLmi2cDjS4xLrs9iBm3y6S1aypzPh4dhQpSQnG7T8oibEEbcvu7Mf834qWs5oTmB4HFP8myDjgH1v",
  "key2": "5zCodHwHpNZNCCVnbYg4m5fgLmgSzw1Bgc9sR1MTmLRHuXskEFWaFR2BZb5a8zEFGV1qdFWWcWXaLkpp4JwwiTT8",
  "key3": "ffSa3Sk3VMkktbUmgA9kPGo6BcF46rEECVZTmZchfZ7wsxVSkMVXhgeR2HQCd7U3A48oUN87ShNoGNJQDwWALoW",
  "key4": "5W1SqWXgrhdyNPURSHZraBHZLxzeHXDucCveESiqnhcFq6xq4sDQQsrf7X5obxaXL45FMe5iC6sqBqg7tZ896qME",
  "key5": "2MHMTdzpV7AwGRwauqXrsGzjuCACJZ94XdkeobyUoq3WqAw7kg2rW8BBoDTpSympv74Nv1J1gnFmYoMSbnuAUmox",
  "key6": "Qmk5pNVbDTaejANC6JPS4oEybrer3DFZSSauPSYrWScP3j9jkSXLwG45WjBfsynxzCyMiN9xgcc9krFpszG1ytA",
  "key7": "2bTBGJP9N6VZj94zDJiCnLmEn286QP8P5dNcn54PZ3XrQjUnNLHbQCTTCoWRcGm7ZiTs44xoKUQ8nNaQRwLhe39p",
  "key8": "3cG8TTBeGytgZPxZPjKqpUcCj1XBEVRNSWMKCqPun9FBTYow1b4E4vJcxHMsVGqR48FQgdpfQMTc2Nzr5cuKyrh4",
  "key9": "4UjSx6L6fNxuBWdSp2i6SRKxToRTApTt7UjwME5mSHsQhbhobkzr7L8VDQzJSPPCEprCsQygNnXSdcmtWzJ7hSbw",
  "key10": "nJPyELdF7QpTjqR4BKs4XLwxQoL7L87AryLFbNkPVSLZog466GCFy3KbKVgFG4VQGnEctanYFfCQCg13Kr5VLEa",
  "key11": "5WYQ2WDBCzBc7Bm9XL3FPpVAcbn93FrcHaoppQ8DJpNvi32mvQwzF8cVJhDjEPQ96a7eCQ56Fm8GCfxHZzHP6cnJ",
  "key12": "5wQgCEuMkFffSetQs1Tm8RqvnY1Mm1VGdd52L2UQ3ws5vTs2jugnpZvHTH6bP7T7ac57cVZjceznzo41cvJeHSZr",
  "key13": "3RQFqNhdHui7QudP7vgux49hPxBpp3jwRSSi1AuAevdyS5tKYTa2oPqYqW3Ygk8NgdbbAhEfZ8G23mbkXSfMNgmM",
  "key14": "42JxNvDc6X3RscsebrEMXLk66x5PJVAbHuCBdBbzDXUWgf6mWz7GCpm48FQEuT3JHxanjmhuQJAjUTcapsnwbuaB",
  "key15": "2vNnjfqXULha8MsS3knkR3j32fqVTGqLd7AnBJzbixFuuGDsBscdtkMXD9ZTT395hrGrCy9Aih35poymjTByvrSJ",
  "key16": "5RUEWP1bLDj9FNydqictAmJ3HeGfYpCXJHyQAnBDViKYKwYfey87q4v5baJo63DeoqQzuX16VGcmRHC2qMZfPqQh",
  "key17": "2m3RCeFLsxbfjHW6y4YTxFfXtVD5KNzREDg2Y2xU1snS98rSNT79ytvv7zYJECm6RuFga96inmA9Z1fNnBAaC8K7",
  "key18": "39oSa4qFUUCV2xoEAR5vW6zXHdedgKBkThA6r8aw5DCRnDn6GUXYBiezqynjDUnX6MNsagqa4vjnA3iSs21uBYo6",
  "key19": "5G4Pff6h6WauYP9ujsY6E3TpZ1DxMvcooREUXEqNg1EhnjReC3SYknhxaxBBftMpWCm71gPFGM7Kfor3vhHEuisf",
  "key20": "21THKyXULqppXeFgPF3BGKEGLex1XzRQRf5QhhhWb81aJzW7XEfTnz5a39jfqbNGkuCrKCKPxeEQWScLQCo5hGmE",
  "key21": "61o7FyeTxGMGauJeKRurJ3vaqKp4CjfWndseoKTx9f2HCBC2w9kcWEU6HTWTMKzcwFBHCkdAih8rVXgvQTQB4o3H",
  "key22": "37bJd7jQtdozyjVB6p7QXHzfFWoBKcnxKxCxvrtYMpm6XPiiD94URsBUYQepBpwfzyZyjKcmrNdmkh5Bf3gV2a3z",
  "key23": "57GpbArDUBUXPauqK3dukQVCTdsK5rQGm8ZonRXgbBba1aLCJWK2HNjUD1v2uaRTJF3wZ22yY3tsx27Tw9Tkcqi4",
  "key24": "3ZuR3PpktgZTP5S94Puq9K9eUdP8iTzUDeidz5DjUK2DtU1bGiWdphYksYHUa1GSs9WyuHi2ECp9nDcSzzeLhpPe",
  "key25": "4ZYCW9pNetvz6H8zHnAJN5h35SCBCXAUcu2inNyrz3MEY1fCmpwWgKUQow8Fdj8j3EuNGnw6s4ViF94SJ3L3A9rm",
  "key26": "JXyB5UxRzGNzbbmUjPmSgymaRAaDraARw7qBhN6etA9QFCFDWtDKFwP9XhjPbrhWUAjha3SLLzGnVeihGDPXRLQ",
  "key27": "5UhcUiVc8aQfmooQYHBkbrchPhLQa7urK9EnPfQVfL3h7R3FCdsUnnixtcx71FuDRexHmru69L4NAQVdJejvoPzt",
  "key28": "4MPdCgSgtLTtq2CoPcrNVrYKTE2ahbscYHk94A3CXhvMUZoFX4ZSSfK1CFKALJ6v7N5V9dwKBSxkFcvWx8uWDMoK",
  "key29": "45L19dkzJZYnkP5gTET32TA68Lpb1GG8aFytUrrksSgP4pzJroGJmByXumXFoZ5NxSsoXbNp6hQVejBbicC4BjAC",
  "key30": "5v8BVFcoYMXincJxj2a1d75YGaqA9zFmHemwxHG877ep4HmgeZNrn3ZxJKyBgqRnXYCWdSwUZZ2nMk4nXV5CjkrK",
  "key31": "3xynK1mWTd9o5QguAdfGY2uWT8NmE9J76cTWsLTvotE3dmfQqYV3gYRcgyittikfwfh73YQp1U62ePeZJPKreut5",
  "key32": "31hfXNkcmr3HDkPhTCxDWBrYpCqUSs4QDhW46uZhgKXeZNX5buLQiKD7FwK2JiNCMd5MYt94yoFJTFAf82yHQ37x"
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
