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
    "2SfZQ3MP6k1Qvvumdx4aQ8VRozv1ktAc4gJXModdWM48sT45QdA6mNy8bqq4Zcd2ZDYELNGTWwTXuPdmQs9bA1Mh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HxheTHd4i9ijs5wbkHi598PETFUiLVx2r73gSYbeeuRsoVFEPvGiWprsNRnpAtZMu9BqZfA46qLhyhG4NsP2bVx",
  "key1": "FFn8DFYrD3KDw5KrLHLoYVyk1UmfQN8XjrMKTC589JAVpj4vZ3wnbPWMMbMpVRNBh9kuJPTEPGpZRoM4U8NJB8T",
  "key2": "3J3bcL2nXLpmTaXEd1UXLwwELMNkDZjqNhYHGhbfAy56oEkoxReuoKmnh4UcvVpkj4CajhNynfnm1QqSosppf7ac",
  "key3": "4hrh1KynQo6Cw2FTc4TS6eg8uC8NUW3wDWbjU4crWQtSpwtJVTcscERLswyqGsz9dHPqNjxaugfwUjmn3GU8VNmY",
  "key4": "25zZTYsswBU35SySRTcbsRXxEtVrdwXr7pvagjyJ6uSJ7QyzCVbWRGmAV3A61TsCRRTY1s5oLhh1AU39PkijtBgo",
  "key5": "2kGJseBKvvMVdmZYVoqAXhsD591HqDzpmfF3QjEcHxxED4rNPeZTpvEuCzv1waRUvvyCaz97LsXiRYDhU7suy4Jv",
  "key6": "4ay3zHsPWX6GU85c21wKmfjVsti6kuCSMMVdkBG3ncd8HwhQQygf7sRN2KWQLP7AA1NMG6r9ZCEgHanL1EYGmRyR",
  "key7": "3FzjUgKvd5MbAeUZ7Lm9B9RRLG1BHhHNAsToytBmoT8unUHoAdo7c6YuzDMqxy1kmhhVDGxcUTmAqe7PEatwJBN3",
  "key8": "M3B3gAtDRFt1i3RUb9cPaiSUcZX1d5XfhTybrz7KJfrvixkqtibAGvuJ4g1kYhfBsbJqwacQs2acRcajvXN4mGg",
  "key9": "4t59jtUTqbnCCTybufkAYxvJGwwCQSCg5rA3piFwPwoEpZvNmKM8PU9sLeqCKhKwYWV6HwuGe8XZgYyocwF9mxgq",
  "key10": "6136sDRbJCiE2bwNzBGcghS1ZocxG5s3fHRMcedMQpy9JNiduH7PMhE5XXAkVRHEJyjgH2SKtiXLhrL8GSopnf8S",
  "key11": "3ZpdGJsR6Ks1LhpTgPZHgtorTyYgKGMPhc9ri1asBPn978Vx6U6yEYjozsKcPBRzKBAUyXHeiSCr5jvoHhGnWHv8",
  "key12": "57RQF32ZK15e7BDVk66e73WGXjk33XYkXApcP9X9stGVg6HX2sNurKVMnNnPA95NnESMiRNJe13qNGScoabE2e8",
  "key13": "8T8xMfjyGjbJovL2WsmXiWvmTKMBTnnKi2WmHtWFctYDD49VwZBTv3yQSyNKLkL8SsNvAQWi9dz7iegcZhYViFc",
  "key14": "4NJjXQXQFrZMxUtC3ehDm4eohgxGeKAzBSxehz7ZeyzsfppbLe1QQsEYTSxzbp87PnWFbYYaRMkYmvU8UBV5mVGx",
  "key15": "3d9UhncVc1WohKgdbqdTSx3sDFWWxPkgs7kGUfmFQfJ8raNfa7eTVk8xiL7FVjEPJShwoms7YJQtc3dUEfiuKM1Z",
  "key16": "4gUoRRecm7nUPSctb3WZxfMyHeG2pHFD7ny1oiMSTV4EZnEYx8LuogUyyhJkem8uP61Wgu1EWUMa2hPywr8yVwg9",
  "key17": "3ECVtSmukdKWo4QXNiVskYM1eFEKFcYhr7XEbK5WXTJExGqQsVAvr2psk6hW1iVkX7uymrBD3KrwBywqwbz8QZH8",
  "key18": "4dBcaFVfJ6ci8cwaBV6AMM4JnMehdXw1NDwFDwen7NrojZt8C6juEnAFCadbx2xcfp3SRUTdvdu8Xgnky7K74Js4",
  "key19": "5sxNCTAmhHH31z5FNUof5wfsqdjSQZgk7EbJtsXdsFXvM8W6Kc5Gt2ngPKYMeu9rzVLZX4UCdxi5Grhm3ee42tQF",
  "key20": "4cusSFCrUnNLDkNWbhkMng4tdDrZcQM1gA8DCVTrkpkxjfr8vjuSM1A3wyBJ2HxBodrojSeUo5fiLhvVcF7X4DwH",
  "key21": "2GHmTHr2dA7dBnVcr8tjj5nicrsD6FT4PCjuMtoBiku6LdrqR4ETn3dFYCTv33i2V3dywD9tSP5fsGhW33AkDJuF",
  "key22": "tnQyDPCxk1Rvdp3jwmbZm1P89vLReM8r9vjMJ2RwhDSqNwUzg6kAKJ7FgQexFK3weTKjrniMwk4oVdkBHwVBESS",
  "key23": "4Ag3zYB6AThcY9S3NcqCwSjD31p2kQ3wFR6bTAqE68eeKJ8nobL2efatPxxasFWGdoasFs7mrmHQAd8fsqUiriWh",
  "key24": "5vyuvJuHjBq9kAfGJTR2Nz3oAXurbS3YXqRB9K8NaMC52f8m5nfUxeymoFyUAiHnhFR5LrkyGpqJ1mTaRkwWhPbv",
  "key25": "2R2C4zLAfwyUfU6AWH2Lib6bMQJFeFeSXSyVgzqxKCDostckcHyNbt1W7WxWYuVsSXZhmJ4UpykgunapKKwoCqsw",
  "key26": "5vDMj24ixFEXRqrnFmfpNwzZbnMqSKi6mxwzdV95AvLByv5JhqkayghiceeD2sjwhZ1tf5oDvBwxYZDQkJuqWeHa",
  "key27": "C9eKVBPfcZcbBXZCK8ta3tc64NL7PS2kE92tM2Ms539HCkQgupagWhbmcVjiqVpo9euE16XFmSbvXCbJia6bL7J",
  "key28": "MnQQYKGxG5PyJJVSa1zjkRorMnbwV45wAfiUASVtDVhNLianqcc7z9rgbWo7BEQLXZURfwXd2wLRZsLdgdYgbxQ",
  "key29": "5K4PL8aQatuptChxpAmtvD2v3omaZnAPK9yX8xHSF41q6TgJgVj8gHbmEoQHseaMdpCDAM6JBP49FRcfRE7WqzM4",
  "key30": "5RKkBvgV66RfHYqYv4vMeHmWpiFHe5QJS8VGL6BCdV3bAzMY71oCW4wTW3NKv1EJHoq9Wb5FSKEXya843oRRuLWh",
  "key31": "2nHsHxATGGZCW8oQsUrLkwnB59cXzxbhMCeL38PzndGXMRmZdzJsVA5kXKMK9738wTeZUWAgJoBMfK6Wrdbcn2D4"
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
