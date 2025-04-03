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
    "4xYhiZpPxwqXShM8Sz3NhaL3t48RPtLMgQnFUirgxnhVL6oRvr2VF6LBUEEaACSdpqJrMiUGqBPt1xs5XnormATh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J69WL4aX44CBQowvAFxzSjSQuVVot8JJSXgLL8Dz5aGRnfYQnZYzqv6xpTS9Cb8i5NyPYjzCWn1ZC1fk5Uv5W3F",
  "key1": "3uKVPeDAEvq876rPHMveSM9x21YGhnCX5B4mAzr14Rhp1ei1241Hu7kutpvo6ZndHvqfx5b2ros51pFjZtPDUZLP",
  "key2": "24gQ2Zi1ST1SjAzcfPGciQi2N3fn1b7RK5MJ9QnqHmH6fa5grWLRtMFAGCe3VcAasQxbn9XXp1VdvTE7hdUBiTqs",
  "key3": "4KkZ6V4VqYdqKw9s5TPx6SB71vVoXHDVgwEn57HCnRkj1F6fYdiu3pabXj96GFgLMaibWJ7yhVWpmVQCV3VNHqnE",
  "key4": "3YRNzVrs1CjqJkm7FRtCMRRhx1yzQ3Z2TKEHGxoFnEcDAnVDMgxyFFoz1QzTwJWDPszHUGW6GnsBSQzHDgrg1Yeq",
  "key5": "26ghiGaBMZDa9AufLPFLHbJC9hbuK7gwKu22HRa7y9PdJwHtujz4yMWHzg7aZtm5BJgocx1LquQo59ao5C16TviE",
  "key6": "DXau7U5PM95xwWXVMsNeDyUvFeeLorhGFgFjmHZA4VNp7KGH6ANTotwdYKrfaexijVY6KFN6ecykeLrKve2BEXB",
  "key7": "Y8cPpGPnDSS63jyPhvim8sb5UZoeRoNCTHMh5JC8MLgLZSkLpT574oScVDy5YHrxWXyFRvyBXPCjyaQu3b48zmY",
  "key8": "4rYTtucnPaLsPdty1xKuc5dFKeYmTwRJTKxSUjApi7R44mUQN1YJtDs3acMPetYEKLKx8Jx8XCTRpW8Ur3L49xej",
  "key9": "5F4gkn88X1hi6N1F4f445QUyV78pkuFYwDrqc7CRxBNQXgmQJVAP3C7eknHLYTWF7wT2SVTqEzwaQMFmzRzRNdvG",
  "key10": "2aKAKorV6omo8UTArYuAG2wwpGf7bitkg2KZT6EKieDpoBe9PiJSqnvtpgH8NZz3y9t75EaUGGYBit5L1M3iZ3p7",
  "key11": "YLBLUNY651W4ff7BUkhqDLJYQqW6Cmkv3oivjVM1dN5yzpV8hR6WqiAo9eDdL4UuG5C3GtnBSjAeL2zkT79WxCv",
  "key12": "xQD8KdXp5dkqdX3vyiaAhCBrk4Ai3LgYDyGDX9i77prE3vKa5goJRqGw9A1eKvftxmCGRE8JLdJm5BeaTpAmKye",
  "key13": "3Jh7BrSdJoKxmoFwDaFLQQzgA66o29omAYHbicENDE8gPUxxdsGYU4nHFQe3yrYqGDFmawwuhdDHfFpAFE6NZXvp",
  "key14": "3A28QSy6JU9FJRADuyTVo2QRy7SfvbkJP1fEgwg5axFkPQSGEGFJSkg46ercS4Ef28nsGSrNydspuiYrbUFyKSHK",
  "key15": "1qz1iNFBxrJuJD1Vc2Sre1hmZ32baRjXrNAURuuNDqdS5XPxJf5XUMSAkvaeVU34vDHf5mDS9XRVsASs1d5vjey",
  "key16": "5vxZoamp61ATA2nhgzQk575H8Qg8oizQs3pH1MvVaEo8pUDR4dNvfPLwXBxqqHoMCaAzNtMX5vCn6tX3MywTbgnN",
  "key17": "3aLQrs2aiYdqw7XnX39CfuZWzXB74wpRDsUU9ow3VEDuKrfR5UA5KwoTdaW9Vwh5A8VTPgMBRucdXoyuJAq4tFmq",
  "key18": "aKxA6HWrbZ5KysAW8xAQLjqktvJ75hFyGRmNYkacCpYE3ytKhoEs9Kx91LXdY2qJsxBZxGp4hSD8U7aYzwMEt74",
  "key19": "jwSjdz8LRrtAZJVYsQY5owXGk9XcUFjreavbhWVApa4iX2hMNurudXx6FtAt2wZs2nvuBBb1CiBW9kADD978VWt",
  "key20": "4VEvCcZDv7D7niP7xpKX8TL9nJoPQ6ApBGALLs3aqjeFM2SSnu5Hy7uaT2am2FUqV2xdHQw2Yhgj2ZqsuaMaRY8z",
  "key21": "22cfAHE8pkGTiYv8Riv9gRmcEQV5DhMyAEQwE1Mc8ntCwYdf5BscwDsXNU6RCMEBVpoCNKQv6FeHBxBCuqVxYcUH",
  "key22": "2HSZr157J2ysmD2pccbScjXr9vAp6dyB5UH4fG3udwJJbA1qJU6T6kYhJnSJBcqVTnRZcM663VcvsZ8f3r8xnLCt",
  "key23": "2Z39t3QMVyuHC4pwj8GDjXTi7gpjcDdFLHD1QvwDiRPkKmQxeY9qZ91TfearMsPdEsdvGarJztJadaAYXYb67AeF",
  "key24": "39mhkWhtswzcKBjE6e5edBLfMNfrepVRqBX22qp5BqZhd7UyZMg42nwAhXDBL7ELitG22tAa3LbRLYDpeF3U9Vfv",
  "key25": "4tiwAHvszGi2wFtzv5mwySGyMWbac1AdVkAbwnGPw8JoEP19ZoymtariDr7Y4gXgWTQCBySycz93QgYcQbhRWKrM",
  "key26": "4P7TC7ZpotvRriR7chxk9BCVbn8W6MNPs2JAGR5XgZihnSY3Lt5pXTnZ4qhvc63Z9x8q6315EtpKXUUaHfKFbDKZ",
  "key27": "phUANKkW8o8xLXWtCE2mKXGLpUioGbmU6xezt1dVz5VUxCWn1wMR1tKhzJTdRTxCRMucVQsEAnFSv8svz2WDZGn",
  "key28": "53jvyuB1haXudD7LuRjpmV2Vqbq6DSgCShVafDyw3MB3D44LtJFH7gXFo5fuWDQEcB1pi1Zn8WEsNv7NxDje1ZKs",
  "key29": "2eCMTQo6uVd8SFWYgxfTbjtQCxA7fXxNrQcmLWKPsFHQ4iLVhvzjXRq53eriRoSggrsubVJtpFbx2YptVPQKcvb4"
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
