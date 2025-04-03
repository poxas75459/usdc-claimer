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
    "2AWXCSVUbBdLt9XpdZEVZiezChAjEj3K5tQ6sgp2ptPgbfM5AYQarcjowdqiMLsALeQD4624YoaPddRMRAL4Cir4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vj5K4XEJesrK38jidfD4yP2gTMjjgYRVvVPJ1T2w4Eanu21zLEzJzPrCAY5aXhpjuDBicArBSihTchvJxvpQffN",
  "key1": "PVktGa9VgQyUD8k5NKBrdVevtAymiZmkVsCZdvroCJd7LWXnRYHU5eA5y494eaHvEqzZfS1TmAkWd94RYtyjCQh",
  "key2": "5ygZLT3XchHzD34XhcKr1CN74yrhm3rU6FGBkQ69yEryBAoHx56ofPc25iLiyetHChXzFZkda3B9oHiceDsEwBii",
  "key3": "qgSdJBmowArjhGZbmeN66nHDHW9CV7vs3nKP7u2fPa7ZC4aeoNTBdgxhdfonQYEiLAJRQ6hxCSLPYNrjVXULnFU",
  "key4": "4BNJ2hjLKKvzatHX5PZX5KnSqCoCjypXnBgoB6t5kmy5KRjTxC7bZDkbrqVde1gJFbsajx4CgWdzm1LWhTH34Dmo",
  "key5": "42gNgmJvPH7o9u6JVfCuzCc2qtcCREgv9rBKEXx9aiuDq3LpwS9BTJPJr97TQZdBXXgEQV8Vvd2ph83oEAB5eR8f",
  "key6": "3ZNDNfNJK9BBkBgiPyJYXbksCELTTxHfwqwMbrWLuNr9gpeQLq4Q85F9gwu4zmoYGVjBjyTLsDwiHCL5xX6CdNAo",
  "key7": "4e6gUTjmbR6WuJFFRW5he8U8sEj8FHqR2cXTtGJF3dHjCn9uzXb7dKY9p4fCN3H21v9gXuH9A33m2iWhH4uqDEq4",
  "key8": "2sEt2T33LqZPSE1kJPjVnn2qD9KZAWqMnx68AgtzGKebmJ13v7FzRxiuS2W3NDgARUWNW3Kz36cBjEdFvvrxAJvZ",
  "key9": "2msGHUbNx5w2yzMrr4K1EekJZ8ykmt7WVtxun8ij4Snf13TQs4n2jcAM3NKtiPPz2ot4KyNTdP3Q1KHQbLmD4bdV",
  "key10": "2M2mktEpfc2FrmKCxjET5XvaAsEfCMb75prQXcfTSUzZ6jtaYZS8cwYigdVNQLbiHuAd7oAorRpVa9jUTZbB5Ljo",
  "key11": "4sao1MYG5XvTW26HWh6Q7T8TDBoBuWdAEYE7GyJRi1fhQ6KFWD4crbMCPvJnfSh7XoaCcyADkZWGnVrD6K76nVwi",
  "key12": "35EF6xxmkgbzPNWf2oqhVVdwkAFg2iY7SdtcYewZEYrg9jKSWP4Ds4unwUoztK4EChucCdBry5PsfB4AgGGwGpUA",
  "key13": "2AyAorixX1JXhaVSmXQNNcxPeBXbrQ5gB5ronzRExggSgxD3caQke77A1CVpUS3zXDrEZkH465yt4gsaFhXG9VMF",
  "key14": "5JhKag297qkkxSFVrz3HZwk45PmAfzQdAf8dXv74ERyBuLCL9zkDNhQvcvdpGvJG9x4vgua2sVAzjovau4YMH7NB",
  "key15": "25n5MwbLYnxPe9kuVaiVGRhJwRCyjXbb7FtcsgSwgipMuxYNvNcRgUABWaVdkY1DtnJv8LFVT6xVEU1GgrRFqZRT",
  "key16": "2YNfGvBQHeQCrUKSphj7d8z9313EcMLgYqj9yKjyfQPxfeg4qcWHqt1qaGXCZTeNuMJfyHz4MUpgqV6cktwRtvGV",
  "key17": "2zvHeEhp25F2NvqSsBrETTAk4SbsEhKRxsp1G9ksgQSoEUaW9J3YRgDjrfEddN2RSC4TTHoGBtAcVP364LsrBCye",
  "key18": "S9cHFDnYASm9oU4yVTWEQ9hEmLg34mSoy6fj8kaTXkJVYnpe4Y8XMWvsnmrnLbKAPTbNRUCehLCy6oxGKvTci2w",
  "key19": "u5YTXZkUG2Z7E4ksGQHvzYM1QZD8De9gLXSzDDNktutweqgTjEi9UZvAYgkNBs1D2juLfJGiZtnahTztUcSj4wj",
  "key20": "2SoiySDmBG2HHHsBT91MmCg76em9EDCsWy9b4XWUPSE5wPeq3rZXWroHNyDMtqj5vpFv9rgTzsL7kjoLg5XBy16P",
  "key21": "3AD6UTZB3475fUh2PbyzgXvLPg9WAmRkaLyzPM4p2Q1r6baNmWLnh9zCLbmHn9RsKhb1QjJtPTzDXTwjCTYNfnVU",
  "key22": "3P7KdYwA1aUL4oCpgMFqXYUjwapnjvJ71pxgPf8wALoeUcgoW6vP7rVV4mHpgFyHk7ekP7gteU9Sjbfw8FnPQoFm",
  "key23": "4t74Ex4Hzh1AmLSy1ngXaeX2syHD3AY2ByKDED8SUhnFMw1vYuu8XUxgcM5vy9BV5devnBFWUbLyQB7No8ABgEYC",
  "key24": "2meVp3XH32Qn7yvzwDBZzsAF4R1iswXCTFFXsHGaUPXDhmAWbPUgURSkjKLTgtDCufH2ESysyvRioqtKaSkRrEwd"
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
