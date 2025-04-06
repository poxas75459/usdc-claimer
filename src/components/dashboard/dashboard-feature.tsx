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
    "3CogcvF2wiBEw5CYUQRBSLEtcPDa41utEFLiroXMAV1pZKE9XbX9JXyurGL6mipgJgZyhb36vrN4QLNDBfthprkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WPmnVBJ4cUc7aRQPAgFPeaEoQb9qEmePptnQ32DoUozm6RA8qDvBcmvfF7CHSoCgRF1HTfesrNFUsTyjWivkNV9",
  "key1": "pPFhi9Ui6YVGZxjqf4mEcjfZZbMxsFYBaXA1RZ6Gu9smBbWKxstFhzoLVmjrpSV8wfAar8wr4JSkiAdE3ZvaUmi",
  "key2": "4zcW4g3G6YkLsdghLzbRP45GwyMLJnqWuDtkHiCPDY9sJ22uJMQPCwSQZHXN4Xi1AnNpZGpbrFmvFGxujFrnn2e5",
  "key3": "5VZ3EzFMUXaXVGRMraVVto5B7edabocEHX42z49iVSmXCgU5gQiFvtqUYi1EHNvsek8F1iLZhno95DbEUU268XSt",
  "key4": "5UwkxCSZP5G38GtAUwYPFqnikCBAWHgegzLqXjoM5Vudf9GcFaUwkMNW2Dt9L6FWbHsuS5aJzGpZmHn7M7rPnKFy",
  "key5": "3KnS3HqsawVMq9HkFLGnZSy88QoBgKjHH4pewKE1Kg6BoNFLQGjVHawjp9Q4WZb7tgnDcaNXiZvevMVE2LKoU7nJ",
  "key6": "4TwbT2d4at9mYcsKXtKtNZrDLdBH93LYGUwhUcdKqvW2dPSQrrVawRSEyLfVxGopC3qNRTJA4wtyySKY92j6zKBe",
  "key7": "3758eMEYNSJQs8RW3u5662HP3nvEtWfJPzcxhnovubv1XaE7feLc5M78cAdKWBjVkwfd9UtJZ2D9Drw1BkuLrE3j",
  "key8": "3a4svFrmo4vo9z7fuu9L2J2Y6GYRfvwVpnr272uK6acdpW6UBJpNYsSuoPMZwUQH5wXBcZA2D8YAAR9sprkxfuS1",
  "key9": "4zFdxpwBuZB3poSpMcWdYPw2j9emQydqXbsz1MFxDVXnvDgekvPEFoC2cXKNaxJXBCnB3tJAzw7y4CW1MHjsbfsC",
  "key10": "3XjgkGRd8XQUdN2a8miNehHFhSWsisLC4LAMuB5XA4sNRwpVa1N7jT7a8nGF3R2oSVcf3ykd1v9w5o1NhDvTjfPX",
  "key11": "56AtwmhN45gHWmEWtBZ7rZNpbNpzk2PExyU23FZEeqDsCj6DMR7FVkmfPxXfSFVnpG6hGsqdbubMDkbPGeY28xCZ",
  "key12": "5RXhWp8yMzhzzDiaqnFUNwvNsgYsPkfmyfkC3bEypQpibKkVnJ1y1EN6Z4x3f3RRyyQ31doUEEyTzDGRfe8kCA2V",
  "key13": "578XgqtTRyPdg8GrsjfnKjXxrzamM978iFvF23dVmjdKGpJkPB7eP4A1VpLrTAf8q2mRA3xxRA9om8QkRYWVVdZL",
  "key14": "2qEc61TmKtMQMz9yy2YEbAqWReFhHYWiLfGGnhdaQaqdL7Zztt1Wdm2pGWqTapxadiygWtiXy39rXGJ2pWC97tzP",
  "key15": "2Bw5Qv9E2oNYRYcs8Eh9kGvuFcUHA1Qq2htkCJqT2EwuZhNURLsyK36yEv4dQTtEujXQu16Eiv6C81rGX42spRev",
  "key16": "34Q1ycnMsg1iiqUtu9uv5mN2hZ5Uvg43qSCan5MDu6eJTdarvsjHT5qJyxALYV8eW3DfxLM7D52vxmzmRD3TYE5c",
  "key17": "dZNYqVgKYyb1aTmWZ35vknAft7pUdJHwN6LQBRU4eM6tPTpMsedt46Rx2z71TMc5UZePU1crTb8zV9EqT6MrxcS",
  "key18": "4Dt2LNq81U7aRrxtY2WqSDjDopT2SCe1crxJ9LaFFNJwRG3SsFEiEkSxaEWsc9BwbKhQdPixdboA7yEKC1tthEEH",
  "key19": "5VAqcfxbaqYUfwvvhEyZSHAyuEsEueZ4DuN1yNtoGaLLPdVhRpUxAnr7npqq6oLoFYUBjhrW1WQPVKUPKZmtXGYL",
  "key20": "U3FyVVnSphnQR3eAgAubZw9aDf4jhh2Lct4jTqxkkooQCMvSgkmNJCkxixaZDFQUEDW3eXYni5Mdg43punUNPos",
  "key21": "3uK1PpS2wSUnPHe3AaBBFvQ5T3Uz9Dxgzuw4nGUrKEmZHFJ31N4MwTiM6Usn9WWLKXcXNRoFbKeheRB5zGtu3J3i",
  "key22": "2fUnuZgFWTK3ek7emh49xLmYB4TMxPwXYMUyGoCntSufPkUiNL41cB9CcpXbdyFHfWKjTZiwBXM5dME14M4Xr67a",
  "key23": "4hQwFH7mMLaHNZbEie29pAzrFicRoRpUBFR6YVXBqHSKndhJoFmxvmQrCars1nUYzMR6t6VmWLZMXrBVV8QvS7UD",
  "key24": "5RhjVoHAZHgwkdFYagu4JRgoRKxYDJFLpzP5aiRkVVDJQzdoXFPAjbiAhH7SKe3Qgmtm85UKxrhTRxo9CNYaFhqo",
  "key25": "3xYqvypXTZd1tFFjTxfot5kiGnJhh5imocEKpJLigZ1jN7ZcUNBLERdVMCoH4CKF2mFutQ6MMgNpgwvQo4NPE1YK",
  "key26": "238QwDsPzhFs38Cuoq1Tk81yzsBTBz7JrhV1uQte7FZ8L8vY4tpj3Q5npwKQYRxv4RQTxMqb8YhjuxYEKgbypN36",
  "key27": "3M3sfyg84NRXUBPpUudNhby5RMzkHQaz89yEWX4mpBnsY5D5rWp53rBYC39g3r5ZjyYXg1WPYhbu77GgcDgGLTYY",
  "key28": "57Zp96uvX4KzBjxWP1AcDURVP1R77hYD7Aj68AvtHPaXKcc2QVPApcQPshheKMCEyRKJBXwwAArYniHLobP7cSVW",
  "key29": "43XrmgzuqoGkGMYzqDHa1R45VjYysTwGuE79YU8o7S14siHxWs49jj1j1quXNZaZK6kQsxQ8B5nu1hkxze9BwMBD",
  "key30": "3RRMhW2y89UftvgHUceQ1F1touxtxoBvT4GYiBa2FkzmkfNwzT7L4tfdC59tsxXcs5itH1oNM533vWu7Sv4YuSsn",
  "key31": "3ZQ84ZSaQwrSjNFMPD2rvg1m2FFHTN5GRHLDDbmgo9Hgkwi4PtXUFuPdRkSv2NqHPyJj1GvkrSuuTr6yT84K7uBa",
  "key32": "24WAL7uTw7hfbk9tEg4Z9m4Aa1Cqc5N9HWhBh18vihRhAL2cABabiPzxiaY7zLJ44vGsrReJutJCwovWQL8UFaKP",
  "key33": "4XpsScc6vry8Kc2bEWaujFKWqM1SpMQaejNXUzAz2PwyGDpmAGDXkmKEK2tcN5KQaRWsRJJY5R2eo7EacN9LbSSU"
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
