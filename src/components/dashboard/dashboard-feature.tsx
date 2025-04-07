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
    "srvRREFUzUPAYhABKjZFkqdSSQiQocEmfawKG5i4DDBJh1Q19JAW4d7pF7GzTZXHK2McVAonB6Ld52trndTvEwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aybbTVfjGpUka3KX9Vr5uTDExVXK1tKzvcDyq84JyTqbZpb6AWQ1jnRSwxSsYwthkgyc39phcnoRD6C5ftmkTtS",
  "key1": "3CprzYfv3RksdQuwedxtJqHHydRwUi5FnD7hm4tQFk9pyDPW7hSZecfdKM8jsQQNPvVZ8JKEkBafMWMxakw8HhjK",
  "key2": "5KkA1azLccvMLgcJ2vWomdVCELbGhrpBEwQxyN66uFfsVaMWJ3pEZ43rVmzrtn1f4ttSi13o5m3gg56hwEH7n7J6",
  "key3": "3hKx6M24Dw8bB7oK4oAUse6hQzoB8EGf3gULxgHFEvsEYcFwH3id3X1VGfpmKMwidxXnSKSg2Ls4s47SWdT4Ga4m",
  "key4": "3uvtaJNgLJUasbjKA4jjocSXoBfBgmsru49kWdEjhvWzL4Trp4GTXbFLgbxd5fW9SxeiZLkGXpSDZi9J1qayk4bX",
  "key5": "UnWy2RLKAJYm1vvny5GWcjbwYXg2H5CiSuRmFHfjihr2B8G8ekqeWBwxDkvKAcHGDhMrZLBXVfwJYXu4zTtCqun",
  "key6": "3p62rQsEJLT3po6o8f4hwH9cn6tcT9TqZVbSRQuUi8C1LHddrzbK2qL7Lkd4de6HAEMQ9MZbjXkPKqpYyAckBA3m",
  "key7": "4dNRG9UwMMErrV2fjpCRazMgpUStwY6NSnY2roLcuhzuSdi2GpBuZAJTdPQnCtoofSsgZmCyNFG21qqqBjBE4Q4W",
  "key8": "cmtgStvKKbfb8Rik7mV2ZbnyYBtL66EWw9NjHMRSfDFPpi1qHy3ajsvXcA775iPe4ticJvDdJXpn5Sk6BxbgqKU",
  "key9": "5oYtBrLaraJYjiPvcw5GPTes5fXXDWCpMYtgTUXTqA5Y2YSKASgd2RtqbbxoWc97cfi2LqNEuxQAbgZGWdZMS7aY",
  "key10": "7KVqj7YM6P8MLMCAGWMR57kp4JFetKvc4w7zon7L5Atz7LS2GYVTHdAxwReyu8W82xZGJD7MTu9fEiXrP5ta4cM",
  "key11": "2HfRiKDcd8xnCWgEkYfJ3qF8TUJRQezYZEG55BsFfYVLsm67ZEVoR7A6FbMKnhjcT9f4FQ9XUiDNH6iTygzTgM1",
  "key12": "4uYSdy3oC2cs4bxV8VmSi9atzX7ym1HeMkuTZyA6tWDkCgADtgWpjMQUHEQSJtkmqbiRHuMGixDnGNtK4L8SwTf5",
  "key13": "4utR5rLDMZoQnZbx7zoqArbwBzmmnrCeyw7Xd6hXk3Spd9NmcRR6FhQQJZFP9fqzMJEvBrgqKJA5RZp5a81kHc7i",
  "key14": "5T8ENUSbvTqojd67BucfnmBbuXEwhvu55qTYkvjC5nc4i6uspq5WuE8V1eWiWKFLrmy7cs3D3ExJVCXdZF15fBqy",
  "key15": "3CEehUTsu8Sw9ttwn3cwATAqscG7w2Vuz8SBPJJVCLH6xckjSsqe26T3z7ZUhgv9FrxnMa8KEtk4t6sed9gLCzEQ",
  "key16": "2jW79pkeES6mgKYNDnXguq3rhMHs8PqSuCn86cWbPz3B9nZW1vJDyS2QvZpAV4x9Lg7Qxe4xcN4FbZZasHqq6Q36",
  "key17": "5TrH4UqC3pySuuq4ev5wuugCJU8UJm1tkQ5hqv4B3n29hn51GJ1c6bU5xLy8xGs7vx4Eyd1C47LQhx5tEFPZx8kG",
  "key18": "3YqCADi9DG7iPb6skFzyVnQRWgUn5zCPwKWYN8njZiZa47LR9Hx7Ln1H6vW8arJthfzKBaymTZyQNTUA6cE52nWW",
  "key19": "mgEexZAVwMg67h6yHYM8UB8JrSoAzeEA1p1R9w7zpfupVvQGZsnDr4SPM1Tw5xatCE8izH8KiWPHNbTfd45kN97",
  "key20": "3jtZUcmsDUdu2opQkvju7hMjf996JRQvPzvttX2Sb9CSu6wjT3VehuRwtwAj1hLKYCToGSaLLNs5PCLb3cFEoaxt",
  "key21": "314hY1ov1i8RYQyW4AGRdBe2NdqaeQmHC1SJc9SQRfA1oqp2orq7vkKiBncQQiqX1rbrH2jrMBywhHdXkQ84MxWh",
  "key22": "2AXqN5FwgFySvEVMtC74t38c8ALALp62yG9jzUEq1fUo19yTRYX4uSp3UR8zXVToH1Zc7knFtfD9mGp1XEtTQTgf",
  "key23": "4VyabRSx1jbqLxwzwBoBSPin7NDFB3jgKDpk5tjcXWpV9usSrBJUJsxGFQ1vi6dEogHFazbyQkC6fFyLas3aXePf",
  "key24": "4R5QmxfxPd6JtwHdo57xrGfc18bW127VRABRYVVeDL4e8wXqNmU9SbhnHRkZU81CuwxEh313N7JGqNqb5DQTtfHa",
  "key25": "H3sRm6HgKfUSe7W2MzTqCZntVaZYcQdbqj2XepNZzNxBg4N7PkVm16WMet3N4epWrd58Dqt6P5HzoUZWJL4msrz",
  "key26": "3jtRYQKWJh3LppEVuivX9W1FDit8PzXgrAaTQ3J6xb8fsjTnwbH7o5zf7cxtCNgwjy3633Ln3hWrXACDpXQnpJDj",
  "key27": "3xRbVDT6BnRKGqFBgoCf5YWEGEqt3iWoGe3JdrDJVVJTSmhFTPE7zpeHq3xqVU63EME5fULVQKW8ENBJ6hkN8eum",
  "key28": "5Q5KxZ1JyWjTNs5UbMAArdyknQx3Sg2eLsgc97RvBiWdYGDp9jsgcaCWFHH9AHEh1ou2QuaJAX3K1HeQe5b9snbq",
  "key29": "4AcYCrie1km1Y7jme6HPdqBh9dSLaV8M2YJtdNDvkzCYXszENGXjrumgyeFbAMAPBtmTNS6JRHgMzvxZXKwJ6gM6",
  "key30": "3tGYQ32tnNudz7t71eMTX9AGQJH2TKCQxZEg9fakPFemiY4Jp6dCYvthR3X28TTsMzuhPvGHYXraej6G1LakUAFY",
  "key31": "Ppk8jvDaScaUdE3srGFc9HrjcS2M1HTY1d5Uc5pdWyh6qgFd5TNoaExxdThXaizx1dsWhuBVpzXtHm17up7rnpa",
  "key32": "2Y4LD6dntxq84cRGGYJ6oPbV3DJh54zKB6ZiVs2UBcuGsQB8Rd9gZ9rcD6vGa5TqkFsjwojSeCeHVHkUK6xuqr5V",
  "key33": "4qMVDdWqhHMVPDtFf6dicpyx4kp18KYaQRJ8UVVVdiWpCJhrxeuEBQPAhH7B7ZfHNdhVqGyNPxffmPUs3vBh9Zy5",
  "key34": "4YGwVJSMfEFD7SbauHi72DkEoEWfGYRdWXhsdmkadAQEuJXxdqwkaVL9rxBKWPpn39WeXaDnGeDdNEcRzTEG6zXe",
  "key35": "5tKjsqNdqSbCDHK922vSMCQ7C9CKsrUD2uvaUa5wU5wKBuSHE78ZfdnzN9yPpQ6UPKqi6dVWquPsGAgZNm6h16Y2",
  "key36": "3hZwc2AYJ8Ga6KnE31R5WwvMB524KFehjgyw9gLRbfTPGohmZSUUbJpXFA8ywSgo1pP5mnfR1ufcfvvtV3jqU8Ye",
  "key37": "5XJnX3dE3U5LS8mWobPMqz4H4zWT7kpBgUfG9xzes82Y9Ss333cuHt97kKoKUwLQCqCiVZzkroWfU1QVrocFvJ7E",
  "key38": "3Uqw7723hXVdiJ2kpVQEiP8CzciSYnPW1rS2xCqi2EzEHwvWTsKDrw9pviYSdHuNUCd95XwiCspdn2WKQQJhmDWo",
  "key39": "36EZQT4apJMuXMnRcBCygWLoZ1CAQMTc6SttGbfgDuCCbUs8xJJRg965N2VC4a5dxmf7LwuDfSAcXpTdaECX7rUX",
  "key40": "65HJZEs5aJaTWnf7555uFbqQMmZZCbkefYydt8f9kbeUVuAHNDrTFbsMwmrazzSZM4UGiXaipMYxJh68PeKEXGnW",
  "key41": "c85NA3ZhvppJY9JfgyuR4rvQdVmUYgJD4zcwWBLL4xsy4irV5YynX1UobXMxxFdMU7w43WzLzqaKyu3Y8Ecs9zh",
  "key42": "2EMcPLQobp5ofd1P67Do9BqZc2E1y5X4KDe32r3RR2F1ifWLBo1dVqM9Eetf75yeXDJ7NCg3tMmvw7PsPwftTMPi",
  "key43": "59kvxr2VRq5G4oSDeSzB4cpGoCdufs4Jc4vhumk12iWVvx9Q14XT2kbnYWou8L3P8KGvdqQq5N1f3ZgS2uiEEx1z",
  "key44": "5JTkJddPDgqEQGAof5pPyCEFseXX9UrhVXduFXrAD8yEeCx5ge7qwewdpzNLAgQNcSMYJWXBNAxws2UrHzXTbyF5",
  "key45": "4NQiMNAujRPwmXCMed5Y1c9HRS9jXKKMyYEY5cDQ5K1nA8PJPvAHqqwkcUS5GaHqRpDhgK1rX5oHubiJo5mzteND",
  "key46": "5JEwUKbus8tRwH8wy4uaXhP35xukwRQxXDMen5SW6Wt1nWbEh2tdosAPH2CcZc7i15UyKQc3eHfr42SV9SFhwcSn",
  "key47": "4gNqrrwWhKTEC6NyTka7nfNBCT9XL2sUwbgtDXSLBS7f1sMqN9YBVkyqyjzRncjie4TP1cuXBDPJXLBstdjim6qU",
  "key48": "5Yt4x6wuPs1MHzJxtCJUSxhLHngLjqYN7HnKqM2WEUWteedvPTeEVBAFTg6ZLG42PvmhHkneK2uzfaSnNbTatpbf",
  "key49": "3Nx2y2JyNQiJUQknyPTG1nNtuKcwguPyswVAaeEoNYVFg7kNgThp5XrDNPXPEh88E7rt7vAXUpm8YaEcNDArtT2m"
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
