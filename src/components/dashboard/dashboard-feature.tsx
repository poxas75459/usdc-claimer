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
    "2W7S95NqUqUoi25h4aa2L881pUJcobVf7b2nRY98NWTbo9DJJU2g1SHYci9xaojBiGEvy1EwcVPYBxKo5vefBytV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kNpNy8uXAJyUtmpV49s9Wi2PR8H4pK6jigdEPzZ5sDiJZd3Haxk9SaAz4QcqmDqjoFy5Vrn8mKKkhH7seaQz6RE",
  "key1": "oDBzbZ6UGBWEPcGmkZE4ES3H2DbHytkRxqJN748VmW8nic35CfwR1k87rc1KXPfNKaKtsS37RjoBuvyZaRziLW6",
  "key2": "2jUj3dAwVDeb1DRzuQSFGkmaZfKF2TxyneNqvZfp8xXTcsinyZGkSt7C3cPVg4JwGthc8Vsd7Jwj8VwNMto2Lt4n",
  "key3": "5bgHTXkGbx9nnkFePYLG5gw5kfyghkPB45PVFcpfpGwuhAzQoRkDsPeesqwQEsCWAP6NGgYu71ag2VoShmtiYAcM",
  "key4": "3G8hLsM9n7oSVEiFV5Dux1yy1bi7Z1bs7LZvASiuhioUVm4jfQtiH1XT3uePDBBYHGwXA8dz9nWuLqdffySCY9aQ",
  "key5": "4WLzUfNdZVKcAnD6c2Y9Wcc8ht8635WHuCrRHSf1nnKNAv65EBTaVB8PbZBmpBZxY9qdn2QwFgKtSjce94yfSV2k",
  "key6": "2Hh4Ky1WBPDfCXiHh96c6zPgYntnpD5pq6jf6CadAvT2zR94mmB5DhJYVus9Zd6kGmPCqvQtnjdoXDqvB2wqkZR8",
  "key7": "2CoxcmxWdauWcd3gBrN9zakJns3tdyFpKx53ieTyRE1MfSdpLqqzakqEwMEvqQwqKvhJ4BUVvPq5L2onGFudWGuw",
  "key8": "Fnnk7qjAcG6ezgBpuRTGfjpH4ReqnZAHQrvoG9ycXSu3Bkhx8gE9tRyFowjJKAjgWgDCBS9sE6XmtQVtbLWS4Pc",
  "key9": "3EZefznECo2mjKHzKkN2zyTkG3BQs7zcKQFY5LTvkW711Bs9n5pN6yDB96J5Nrwz4FdxScAMevcynH6EGQJBVVHD",
  "key10": "2cyEvkdDCWUpkGM7BdkZmN8SA97bpja9Vf4Jxgw5mTJjAvrba1pNAk8aUogansvCURTo4HojxwvU4x7UVvsTYtPu",
  "key11": "65XVbhZTdAEdgCepLrs9AgQkJzQ2YJWVttb6PvJm87EPFDifJh72cm97uiuLtanSB4dkvp5BoFavnL4nuL4p8zm5",
  "key12": "5fA8rPWPcFQCqMpw24f4GywQ71rkYt21e2cP9xDdtC1hcQWEg2Y1Hx5SDXdLPcx4xEd88Me9nfFHjv5hW9up2AA3",
  "key13": "T86gkYDpsc5mRBK1qwy4TFfzNXdTDUBvXbV6ft6PLnhRq9UNkBYc5Q1rpVgkXc4Fpi5Js3qiK8ME5DyZx6UCBsj",
  "key14": "4ohac7nnogyQUZP9pYSszdKm1d23JhkrnDEA9j1xfsNSDdAoeXT6Bnm2REQig3GT21Dg6Zxhn6Rcr74HcdZjR5iZ",
  "key15": "3TkU5BR5Aqe48MyyLhSNPRBzRcz3UJWGgjtK86t9RKH4VT3AptGJKGNFxtKEHCCWuUumjrAvLgyjpt1aKyjUGRqw",
  "key16": "2RXvUnFin7AoAE4SsKiNSHfGXH4PD25Rap2LQPCRVMAfGn5KXmjYUzRHZWsBR9R2yxzgrKgexKbN97Gx2hHuNJUM",
  "key17": "51iT28oyuNas9axipo1dD3Qg1UVYPuTt1xkmyAyXKwmyaofqFxg6xeXhX3JNGkzHkoc3vpZTnnvg9U6dRfedg23v",
  "key18": "2RRCR85hxhFuKEepKp9gmzA4AVeQBoGsoJn1f228KWxGE2ZC3bPDSELZwoYsjysSYGsAqhK3LRXAHJxLV3BNBRyh",
  "key19": "5ZkWs2D2Uzur9KA9coVKBJjoMRh9h4CPQ48srHmTc6DmzLrVRFCiFh1axQYxA7G4ZnEFFTBPRfwHWGqa7pV7kYtW",
  "key20": "3koVGTMv26LgMKWKBRycYMAp6mm7vPN2DiNJJYUXCxBdoeTL9TAvJdhiVgvWBLQgyyBJ4LMMP38ypC7sW61VhqBM",
  "key21": "2ouo72LjBi4ZEXZGa4E4GCLqsr2DHjqzgjurfnDHPthdZJFDjStpJNm4vNRwt5UimT5X6sr2Z31PP23c1SdStN6f",
  "key22": "39y69ksonNL2RMTuBJAGV6nbDqgRDRV5WUhJ1GkCwHTMPqLqKaZFFMhvRSkXR7TdprVYkXDsm7BhHwNEajeVniqc",
  "key23": "4kksVxhYGesXLtbYqGFK2he6KQFDgzrRtC4ADS8pLyDcpcu8rGiAVUPH3hz7ipVD1namJzQDMviTQqKQzsAXx8Zq",
  "key24": "2rNcxrg6FJpDFaSWAZkfTcdgDNpK7oJsMMrcKLw1rNkRvCZnNBJNN3s3ivGL63U8gNM5h4xy2g3p6oTSzurN3VdC",
  "key25": "4trFCN2KALQzg1DV6BdfcrhFiRp4sv4SEKuiQJd3Esfqvt434CcsXkN9Kt6rBntJWXkcDaWxh1mprYCtKS5ekHHa",
  "key26": "2Vg7EnEnAkvbxBEA8RNr1LYnFnUnZhpT5Hd69VGAd2uQQ4G32ckQMP2Vn5DqMi6YrbsbT5mmUruj3uKJ8tyRN6BJ",
  "key27": "3Gf4m31PdJwUGcHqspsZXHWdXUWKuWcLKg4dq6B6BSf8tW2FLMTEzirx5yAeHk3hNf7k4j6MKA8QuomEeh2m1LF5",
  "key28": "44HvKr3AS7vhsUekPje29hwjPSm4rKaAk2aDmwPRad3qTZVRAx44c3c3M4duQQiDWssrz3BUgJLekC9ywNHjbb7i",
  "key29": "4hWYR5YN4A6ujFmAsNkEAFvikbmfeWHX6zNLnfh4eCaVJP4vhy2xEy7eivLnXbxd1Sshj9ZkkwfWPksJ9yByhr6W",
  "key30": "2tcczJXYM36F6cJvmHKYFKuowautmD2v7bU4hwvvKQp48r5DYbi7dQfLNtMJfKsDuttZZ1AF2bHne8qXRtqcWyo1",
  "key31": "xn7MNn9QzK6nK5kwxmvS8VRxuKi1mD6DhUt8VYzHh9tuetCykAz8BA5APpfUQniUugpGMDRGAtE2re39z7Q6csv",
  "key32": "3hCjxx9s7u2KtGDsUH3vu3EmGsFnDRprr3PeVFu2k3FPE7s1EyagdwQXchwVYtqMYnRAmobpfcn7Se2HQPvYDTnG",
  "key33": "3HKiHPnQjSxh3pgdCHphRQ6nREzamR7jNFVa1wLXq8b2bbo8Yepqc6tDgB8Cs9HcdVgHgkMCfFJaSUh15C7nVDc7"
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
