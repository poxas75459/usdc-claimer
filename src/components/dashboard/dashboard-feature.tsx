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
    "4YENVegXNmgj14EtdpZvAGCHo8u32aWf6w85wQNGHu8GKcE8x2Jy3UcpoPydHbeEd2iL7PwGRRp8iopMod1ykqag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mEuwEY5UMzUzHGsRcxjPA37ejFm4dUpnwhsVFuvwwNdrLAwEWmScr74BJtaSzVr8W8sNFwGPdgxsC91sE1zJYNK",
  "key1": "5E99uWdTSxcnikncgh6fyCcRB5qc3AuutZddGjEkgPRDqoKr2iTqmJJuhKP7VmMDioJmwH2gPb3HYdv4QsLL5PQr",
  "key2": "57mBYpNjmuNbNvwNUdMeuxSHNgY3Vs7mUw16WKvyayonnT4r2nCFT7hR4m432DVkKnppe7haAbvZDF8Nfc3XdU3B",
  "key3": "tCr2uWvQmUwJ8yUhQ4uDfpbAuRFsirwrZFM2pbpyZxA8PoP11UWuxPW7dxv2Zj6noxCE9Vc9727noeUBNGesfyA",
  "key4": "3hgGU9J1JfKRVQkuifeh762eN8hjYamuqu92feigir5DaRTybw6XtVarNWDHr64y7e6ZyM9yndRdJfpYwRsPVw8g",
  "key5": "Urjgx2QWmGiqrsZoXzfE4aGmNtP9Jien6QrvxBdCME1pSmza1TXEp82Z3HkcoKCK3XUJtc4Jro1teWZoVwbyC9p",
  "key6": "22fm75vN5oprRHHk88NLpv8waA5vMtHgFhcoiWmvpnBiqsZG2USWoDZbaEPxSxuDRzCmBo8gSTf8D4PTTkhu3A1s",
  "key7": "65BS5mjutvEB8wKb4bQdMroT3A43usD2oAcaWC7xuase7jy4yHwvQVWb4oa38yo6o2VjWAvHCZU8YPKvK8qAqByh",
  "key8": "BwCgurmtSWKvMahFkuKE9aYtxqVymstJDRKQGRK3aKWWYaPtcApnXAKtgN88W1mYZZx66LGTxNPAzFjsGVr21rj",
  "key9": "3RXNFEFBS4A2uZeQjKbh5c8CS7sZunfuef399rR5JSD6Fu6eqNHPm2whDNf2TrTpStGJpnZi1Tsc6njGiT6ZyY6N",
  "key10": "ncAf19Hvwcfc6EL8pyMjV9mSa9Fmesgu7QQF6fFcwSmMh1JgHRW9kDPQDZVRGKtdQR23F3b7KtRRFGrDmWEXrgM",
  "key11": "5tCKRJQf3dYsagu4gZRmUpzRoZRSRVt1bTBL6U1h767dw1GTjsGuFbrGewwFaRXrFKpfkhDt3S9SitbKGNEsqLFM",
  "key12": "52UE7Ls6Lo5VXJWjsgVdTCRMW6WvcueqiBkXWEZGotH2uYkBw6wRDt4CxQp2iJH9JzkMADmCZD92r44cMbg5wC5F",
  "key13": "4Jcy81Poh4BchRP1giCpzU1vayeUPLGxQJYRhFabbyREJ2URuMdSc1ZPVqMKdfbo41bkFkqwsmQ8U6Aya1KHU26B",
  "key14": "4BVsYBHPfwrccStpA1tFXn8AGQMYgiLdPgwVXgG8GSv1W2nSo7CxMfmLra7FJNzZyQaCp6eoyEcoZTDTErEMJBf3",
  "key15": "5RK8PsjCFqNJPoykxar4byy5V6Wm7Pi3tZfLd2j3HxamgWw97UZvv7L4hFsnGANoY1PMGJxag41wK8EZKV436yAd",
  "key16": "5c2w6gaVkZ6btfxLYYs5uYDavZ3Kue1KXcrKV5LuSvAWXnvvYqJ5w7iLp8u3SvqBj61seEEDffYQYvwEZ6nv8FhQ",
  "key17": "5C8pBCMXd63vK16PqFUcaBwXU3RiEpNNYu6mXzkNzoysMTHZaRKWR3TRkWtibtT43LXNMabMwPwMQugJ7JBr7ug2",
  "key18": "2DzZsq7wkrNFENPr59BMcQALeGJUKibYx869wYrTgd3xLfLdX4KWF9xQH9MXoH4ThTowvZwqCN8RwCvARHQxZett",
  "key19": "XjAVWf6Vk6fGFH9ZiESPius6t9BbGhTycGQPuzhSn927W4cpu6ButE6PXEiLE4BeXbmCaJypWzTrM7DUZ831rtm",
  "key20": "5GLzYMHz6WSN7GhiPF1RQEDemSrkUqNsxKiJfZNAAmpkpvgfGWopzEwq7HknnVdqC5fyX2eTn1ZJLXLpKSk9mN9t",
  "key21": "5VDZLQk4BzZ7sCLABuhZhgsJ6GtSaDBJmQUFppuS7kKDM8yqVwmQ8gHrmcGJ8EqCuZNhiAhMoQ6LGv7Tusy3EDYy",
  "key22": "SsQaD2D8MZ6K9zZWRLmt8Re2keLG1XNWaCtUPzXdABMbyqzQb9qoq9y9HUv6NTogUi4GBZ7H1U5u1R2mPXWT32B",
  "key23": "5YcbxARBpeue6i4nnu4bjSH64945Nhb87XTF2L7RKCLUqa6F68PqQSuNKUaqS3FnFK65wNfmZNYbGSNbKx2UfRo1",
  "key24": "9Ftxtf8jRfvpUYZEdMZhVMZ8LcPMUUVxdfpMDLzm6rca8Eb4oNa5PeDwLN9ZfBDdBDonpbeXchypbV8kPHnsgzv",
  "key25": "tkhuND2Adsurtvwwv8VTvWiK2J2xJXPLdSj2fpdeeS8xZxdSfieds1WE6rqPXNBaEKUmE2mCkkYtFySbW2SSkWt",
  "key26": "5eMtX8yvT17vw7LwuGrnE6DJtCwrtGsvmyN6GrExRE9hgKQM5LMYJCoMLXsW1AxCjkHF7AyJ3QUr1eikjPMYsBiy",
  "key27": "3trGcTxB5KJDC5UJbyei5GbveCeo4AjjokFj7ruigmh2iFXatufbBmohGxKRCadRyppQ3fAJ59ua1sTHRdCfMUbm",
  "key28": "PnMwFB8C2QAbqpDZmub5no6rPUxXwC4a5VMVXG5psY5cXeQkLNhw3XBpFunAPK985s7g3nR4dsEEgTUpVHgYQ6m",
  "key29": "3Av7yqLToBiyvfSVPTJB1jwuE9BkiN1auMzPsFXfS18JEo5q5vACv5rp36PkBpuTBNcVMzEKjGm1ANfveEJfoXY1",
  "key30": "nFPwhC1YjUagxZAw62LZhSM4hEP3FvEmCjDgdr9rKKTRHjYv9GNHWz2iSgMDCX4TaNDomxr5TVXnTeYRvLEzAnL",
  "key31": "5nYyEXj3pze6xJvY8dLgkVZKPcgMZGijohPd5hZsAycjyi3pe8ubfuBEfAUHdwN5F2tzdPVX3ARRK326ahNcPkgR"
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
