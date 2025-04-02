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
    "59EtcL3mSv8pZUEJxtyW9Lqwjp7My9BTKpv3CtLvKkc7CnefFXXefF5DS34fwMsAkoKcf3cznv8fjA7HabCBVb9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HRRrh7jZJBmjqUU8gEQxrXGM5P1qZ6eYCAbYHyr6HhaJrfaZga33oRr3b2ociAN2T8cGtzVGhAujbZs2ZjrQ9bf",
  "key1": "eSEENyfqtBjhCsQEa3Q3QbiUqHryGpK1cRh3kNdsdgKCpdrrqvHem45MtwsNR8ozD2maQJCVC8ndrsJiBLc8j69",
  "key2": "2fqe8wRpjDupcpDRtitT1Ua4j4AF4YqUMaf5h5y5RFdxjCtzMgeWNg1sgg9bXoBwVXHNqkREanB7UYhDyVMzJ73z",
  "key3": "5L9LWQy71EaSRHs1h7i3JzECiB4HZeQnACQCuLzk7GoNadTAvtBfuPuD63so9LwsXtSdJtzzuZhAChcYSe8j8BN5",
  "key4": "5S32jhoLsW79Ydhye7MmGHDkkXwNTc8JVbwMZ7CCPVwPkh2u4oc7UG7BZakfq8FbR7YHvVJYboGtKdTvSs1X8nfE",
  "key5": "CXNngD8832nxNw8VLDXp9h4fuRGBgDabCjkj6veLCgz88VHqP6nbRmEjFgnvM996qB6msAcu25i9YGCMc1Rjv6Z",
  "key6": "4Bt1tuv7spNDfnkcA78iT9AjUr92WP4mv9pgg6wnsp8NU8LEwm6Yq4eRwqA4DcEc71rPCYY6tJN9C55239FxZ8eS",
  "key7": "2PnzVGxACCmizCkskVvaNbs5vExf16hySC7skDbaBc6iAZtH9BogJbrC5wD8oNS3yNQxW1aZ55e8peWBnXYGKPcx",
  "key8": "35RmV4vxV4g3aV6wcHhtcVKMtDofCjvwdNBWCBypR3j8XRxtUw5mqPTzRyCLj5TBKSNkxkwvv652tmt8t48M6w6e",
  "key9": "tycAszfEjTHvw1gGpWC4XPfxwZBszJ1reVAJTjw1CBj1huDwp7GHxNC6Rd1ftTqjhpnRgXjyWKtfAt4xranLXLt",
  "key10": "4LWJTfubNAGpCG5j4FY8iTEyJngv2h3aAFVLuc4Jf8K1BFCRjWSFMYrH2nZ1gJTk282XWMFu69dJaoyV74HrYjxS",
  "key11": "4DTad46dsSi6TeMtEQz4NagLsW8FTcyVfygc3XC7seZFvnoEG816HRCPbD7ca3e4SrkbAtsrcHJRYDe152Rk7ucW",
  "key12": "2szoNQrwFtiadVUBy13rHdjY5kbw9MumwXcYkoa3aeZCTZhiHwzKR3grZ3pn8BrrNDsgB64NGnub5AxNBSQF1fYj",
  "key13": "5xES8AULVQtAaxrBRKweGBvaEhhG6RduqsL13WA9KF3XMAsLSWAxjevDcrP4w4W1C12PJ7su1sZA7rLUe5ogY1PW",
  "key14": "2wNT2sgCBYCrQRNb5wCtosxsoht5MsxWi8jEYWuMrthtrn4iM4gyw7ZmFSDDDV9SwdkpYDCR4QjZWG6shbzFHv2U",
  "key15": "2rhVTtSFzkcspn2BZCfCytRPu5uYpTXBSP8QTb22CTKi38WpHN2WhPFBxXxL2zDDU18gZzUvgtDUgULHtEP7cgUQ",
  "key16": "ZuyDF5zpAZi9FA7mfhp6Mbm9qGz2R21qAz6NusVyVsFH3dbdze4h4FjEBNerqxLAQVD8kxVTivBnzLfbe5bhTC4",
  "key17": "9dM9vAvZQ2SkEVyC8YviTnob5F8pYqq5fYEtfAnePJ12TVqm8vN97etEJARvsoRt65rMATebwonwkJ3upFsKUsk",
  "key18": "37Ph1ujc8rUMF6oWwpe24MtxsdYd4XxciT7d5k1HoUm7SqhhcTxByMk56KQg63grGKUR2akSeQywFcCa5SGobfi8",
  "key19": "eaX451S1hobcCyKj1pyTs7uNzyTERvQ5AQFFbea2aB5kzvPPEof9iCmg58akFPGmjkUL4g6kNixnJqjQT5fTgqw",
  "key20": "4zLwsSgqFN2rvyZmm4et2Hx16CZErYdwgTxCN4xQEuhSRHD3mQmiaJvLviRNzCWx27BDFRaq3Ay5oSKYFJRUjU6s",
  "key21": "3Rznge6YuAJ8m7aDH1LYKubV6tUDJ1HY6Qvq7coZ1tm7xKK6GzkUoTAtSiwhHxX5aaRqJsHqxoym8BMww5juv78J",
  "key22": "zZYwrEnPnF7n3tNHcsUkkVQmE3mCBDohCCoremewCLT1HJGEKNYvJiQt1TrCmpcTtGg1xcYyR2ycoEAV5Pny5Sq",
  "key23": "5VkS8YQtJ4AWkupWP24xXMFqe3Yk7Kf3f6ywGcSS8yQErMAECFGkicnY2emZgFoTgreJkYfd8qVhgaNAHdtyZffv",
  "key24": "271g2eHCCdyFzFm5AV1maAhy3xbiMWmBZkb9fMEXdktP8qBxg4BdAdHavn6BHw5ftaMMqS2yRJkmgzzHuWynj4hR",
  "key25": "2S6Wx6aoVZfUZpCEFjWamFH1itySc9W7As4Fbfh18Juvy75s8s2KpRMkB8UyrpJeExr5vX8MVvvAgAz322wdLHmT",
  "key26": "5Haw3MeYFxf35jCVnkWXY23P4XuMjyNNP2uT5x1MENjhshWYVAUPuaYV9gy6Q7EgNTvM5YrFPbxFATMRYtrEDxpe",
  "key27": "5zQbEWkNUMoaCqpWxkb21JpUJPNaDqRXtcPtV7hLpiTsZ54gb2X2ivF3VAv3jAYGEHbucSF2WpuhXDEzKdRKP5E8",
  "key28": "4D3R1wPpzDqKdsWRgP7tQQzvJfBx39nyb1nF52o8wzq8paN7upQquSbML2pUrmPHm5FbDYDALBLpHXe6QcJJD4dq",
  "key29": "AW4HzV29SVwFFw39qyRw4FsJpwPLc4Ydj8DHSFRaaP3Mi2Dm7B5G76AJCTaFJ3qc4yGD7BcVUaNoVZKB5uXAn2L",
  "key30": "32urKPiEb3G9vyLkpcPLNjW4WQX5RW6FXWiPPue5dhNXNbRyiqmB62gW5bZ9XCTm1LEym5KZ5fksTnfWAnC3mQvj",
  "key31": "5N8MQBvExJvhXcQAi4ey6z1Nb3f4PPpREL8QC8mBj6q57xGhWhJi4XWZ7jef9GN1XUzwSZryUg2yJLS7eB2tia7c",
  "key32": "3oL5tcyuvggTu3jaytD6CbaSLW33NdnjSaTiuYBxejfn8AEnr7nDV2tPNrsAGZrCXZzhHcHcwNWHQSmZ8MgKypBi",
  "key33": "5BTjYJYUojEvJrAeTzYGGTXwUC2yAqXoi7KhdpSMEhtXhKZb3j1xcgiY1F9tKt3QeqNCK1AeGF6GJtjooiZ9ELDa"
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
