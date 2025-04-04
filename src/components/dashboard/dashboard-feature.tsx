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
    "xed2qDD9Li7yeCMZpi3vKCng9Vmzr29GQwiJcgvFGv9KeJc2NvyAtfZ4YEhHXGWLb1tbokUgFDWPE6eCZGsui6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "494GKrqFp7Cvd1d6FXADvY1GuHjWaQRdxNskxt7EqhAGZcFx4CzNyZ7FGNWjiMXGpywEdhNNyn1bvKBULHyMmAoK",
  "key1": "4cdSn1KJMbTdhRpBkFEgkJHVCMDyCSgQUPoTSrLG4wxwtrnYE5CJAqnpfXmtRf7fs4zqBCCPqqfgEaWjonR9Dhng",
  "key2": "34jG8hLfnLwyPXYU55kDS8BfeTmE4pr1XCj9CJi4neqHmrkWN6cZXwkGQEraDUE5bEbxbeF7HWXtUYJoVb3ZDnXs",
  "key3": "4i1APYBwABQuUfUa7ELsSNz5sm4fUXemVKgxxpxU8QLtkpq8Mzkw4Sv7qpASk7xcQR42rphr9P64ZHBLQyMjexKH",
  "key4": "5jnPGZBmrDhpH8MN8HRnT1bGoMsR4WR5KZrzsdsrzoWQ61rL7GAB1DyUDJ2LapSHuwtnuaQQTxz3DMsraQugTaAF",
  "key5": "5tHRL47aw4SkUghySeBuKKoTTKCWhCxPhVHShe1r8tEe5SvdNRrPWrc2hfKgq7MJ9AjnxrUdxv1VNWmLU9uqKXX5",
  "key6": "AeX9RBiboDVpKMqa9pemgCiwtZxvRBn9Tgenz3PeiQcRhwr4TCmVcpZL8bsfdzEbkcX9ccNAuLjDtML85y8RW1g",
  "key7": "3HkMbKgUzkCcM9Tecj9P7mePczSPLCR3hznatg4E4KNJD6Kw5HDMVZ5edf6DHd7yUHrScrEwF7ZXXgBvpXmRnDUC",
  "key8": "2HBq2g8m9pe73fDZRetE5g1aiMqXYe3VYfqzhZWsiKWBcgFvzTm56AKUPbY4WgEJUMuPDykkCnXFmxznDfDE3dkU",
  "key9": "4qC6CZsGLryJSJ9Kkwp1QMh7jx6WxA5eaUejx9NVuWivhBGHRUhrQv931Yx81zGXEwcah93GgeXP8xXKSJdRXdGP",
  "key10": "2mEdxoSYugFu795SDxMGUYDH9NmuhAZE62eb8wtxn8bpSLDKBD8swZ31SnyCt2QU5ay427MXX3RL2Ke8Dd1hW7qU",
  "key11": "2TyNMLnSyTTbJqtJmhm3NdjBZsEpJnKFr8BZebYXTonZUeuProxvcLVtFh3pBAk4Ny38qUZyay7hSopdN9h761zt",
  "key12": "28uBTnpXdxaLQsCrugw6kPzpuKqFXRBauV5emyfFeJMk2AbCH1C6sHYncwtX4xdjFWNuHN7gxZudbZEh1q1REyxW",
  "key13": "4HQr9cLBWLZV9N5n1fus8maysiXUgdQwHwAvxCqXnMutttNVeip4cNu7piLEYF1weG2MDm452XkLLgFbbFXYTAXB",
  "key14": "4bqjhsozwoy55DKSbALAUjnWUZxiwV6FVaterUwcbyj8dgWxX8bShy7gu2ViBDU9z8vwqvA93FPjEDQRmdLdytji",
  "key15": "32XJUmsBx9SrvTfFYCvvbPVHmHFPqWLgcTKFw74rs7B39MyGnQgdsUkLMYaFN1uDKLztPejjeFswsckoTzFt6xFx",
  "key16": "5zm3Xze5dR75VRaMrp49JkD9U8NitZKZmKjHSzD3V9DPKMdjJsMfDYRNCKKMVgGdQjvdWJSyoHngT22VqhBcbQAN",
  "key17": "45M1Yp9jQYEXKskvdnfov3hT6541kRCMXvvk1hbNGVVP94tMvfncfXCKAijXjjEmgnpXzDcpJLNGPfRps72rGYNR",
  "key18": "2MNLvY7X1xYkXcfn5tcWn1maETdi13dkWdm8kkMGn4hQcpD9vT1gLeU7jx491Tp87hH1hV28hKhX5NeQP8MQ5FF9",
  "key19": "4oNKiWCXnmXv4W742fBi4aLfJZXGfhcr3L2XWxd1eeBvMH7Po4U6TnpUTiVEzb2y2xF37jEfgs3Ksp9kW7JZr6cA",
  "key20": "22gebD8j3rURHBjHGYstSH2VJaZxkA6UDLKvxvnR8AfF6XthdYKEpmKGUp3y8j3XQDrP2ZbQufAJsEJ8UpKLxdYR",
  "key21": "5PY2vKMXeg9c3voadd9YQh9MXYH1jcx6GF6zGo5kixgYhwiZvMbkCrB4M7ZfxoDx6GE9o8nzV7x9rLsH8SGnNqQG",
  "key22": "cZXPnhS2jcndWmxZWtucPiWwVuapHYG7gi8G9Qrsq2qSAUtc8ZEaPziaxEkPvyptxUT12roopG99SUXRzFhfq1V",
  "key23": "5jBsTdtPf831Zh6fRD9S3a3iPBWayySK9QrYP2BHSXaJzhrWSt73NhHvBLaVhYhqnKyceLhxZUk4KRnzcWqLkSsR",
  "key24": "31NrNsftf49GhCxcKVd4x7t55yTS22todWLEiVCyuU72CBsLZKzp4WfzKBtGo1MwqwZwEpLtyx3KEvbQsUU8Abeo",
  "key25": "p1M8pudMaiXBiCMGFrJhAR8UA8PYh92s5J6qC2EziPwaAwDpTn6M2TDJdVbAPuhLtWNga7GwXSJ21Uv2iveMPCr",
  "key26": "55MgT9Gokvjh8F7AjDTudh5nuwuf1CgR6adRUJdp76bxrG8Pc2J5j35Jq5QgKccJatkTbL8c3unzyAstCBnaYZNt",
  "key27": "4dU1jPphWEZAENdS3fH9K5c6oRKUFBfD4cxKfb4Qsfc37x4dMjE8RBwy6JY1g3GpHdPMA8mYYosM9UEU9QgqgbBU",
  "key28": "4ic3U6U3pgycJ9qHk5u6y6zLbv4kuJUUwgFmg2kL2dKCGjLdmdvqyTJ51aPF21RC6fJYyXXnwuZ99oAyQBG4pBjz",
  "key29": "645ZQ78DByK1yVBZfjEAVtQYuHBcgFK5eDeimF4amwQoR4tM5y14DjJtbouyp8ZeBzCNK8NXQbTbNSjukB5epsBG",
  "key30": "LfkjZXDkyPoPobGVqRskX6aQoX3ibma8RVqorvh2DAg1cHe4dsHZEpBahe193MfASK6FBw2Gq5Y2q4wBDWzze4V",
  "key31": "2mBJzrPESABh9JhDGE41SFDNw6med7YDdBphTRokcesoHJQVSid6D223tUWD4dtHyeZRV2pZU9tLySfa6N28iin1",
  "key32": "22NxYy1c6EpM5Yjis8Amfu5NfKugkTyAMAsADwrL5FA2yP9qzrGb3nRDPVxhyumfseREJqc1sqH85gqB2DooNcQd",
  "key33": "4DQkUb7UimH5awhMVFn9GMY6iJvdnYjSKRywc6yk7FjYJGQEBsuaYdhWfrkm65dHMK8rsR6ZiwNoH97GnLkiyjjU",
  "key34": "Nw5FRShym1scsdsfrYysy8fAP36h7XbpmVPWbrBj2Ssy6QGKvq4o6SmZMDHmqQaTJ4DL5xpjzhMQMY1xS3uXZfj",
  "key35": "2ibw6b289HCCH57GApHJgrWcp2YBC7YHJUxDLNtAE5jsRnqmyKhFBEnrkkmu83HFbGxiWZAbDX54CBnfSyEk1htQ",
  "key36": "38GNMdPi7dQvcZRisxKhxY2TBbiJHyKPBfTXRVKm7UdmYmeomyJoE1PHoLgvDCVdkpXDAmqM7bWjocJ85nryA5fE"
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
