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
    "2BW8FLS1K1dvg4Gzjs799fJCC7wam9WsUtvBpTreV3D4aKrR9DURehZR2ALb7xUUPD4jWpfingP3ke2GKWMtw76L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e4ufam7SWsc5GE39UyebMitAoXN3bjagWnULbrqK4owsL3huqKy8ijSTXM9GECuX4cEHYLxbQszSSHUCHfE9wvx",
  "key1": "33J6VN3NQLi6iGDVn411U5cxQYhbDDBy8Ym3eWzJAuFf1fDNvmcAXRwjzWepACQSvuB4FZHgzFSXXTfUDzfovDCp",
  "key2": "eBfPzW3SvA5hJno4uDP9XKFxzQ82npzZRacPRJQS6w8HbFyD6DAyvbxwaMnyZt5gRkDGWRjVkDHAhZvByCp2vuu",
  "key3": "2gBh5uD4bw6maAEoMnq8mwxHgS5vRkMbjzoxzAtzRx56ZZgXvBibindodyw4TX2xJ1QycD4GXr3eGD4H8VJEZ4D9",
  "key4": "2guMQBzXvibSFtv6f45guBLbkzmZ8UajYiWH4LoTbbyQrcrtkZAWz2Xb3ffx7awb4XNa6s9QkdFSF5GHA23HMocJ",
  "key5": "WzaUbpWmrhjh9kZGCE3w1SxnyCBrFfh9JAp4qtbg3NYraXooh4rDnJpLsd1Yj9JuH82d1WzkN6iqDptF9685vMv",
  "key6": "zJxZjN5aPwh7LRA2bwzurWo26wvecN9ME1MX1xHTArkXuJXz84BsVrN9qCEM1d4k4aUGEhHgbtXayxtDEWG7Pg7",
  "key7": "2ga2huFBcZ1JCirH6rnQ6EDAfooEsWRo6LzudG9okZ7hyJN29Ludsd3RcpJ7u5DxNoNQAKoq6htRqtYKcXaLBVEP",
  "key8": "SLB4Y2ziGwDvvjSBZBagG9cD4jqdZqRFksYnvcVvvX7cY5FtE7Fo2U4hXTJ7APYeXxeptvPveizhbrD9cU4gPNu",
  "key9": "dNX1voifcPEV83JkWde8eWbfggriK1SeF6BnMJ9Zqw9w2Xk3EttpcE8pqvADgy49s1AS58EbUoFDYpU1wA4W8BP",
  "key10": "36J82i3w16dJ5kpvaKSBTuEmG1RNEsAvnhbRAaK1iWLs2xU8qScbGAeVFbu5sEL456CmTHLEt4QP3xbSqFnfyKKL",
  "key11": "2uwbkjANFeoRTsRWtTdQxTRYiSCse8VoRfaBETQE48GSdMsSpGaBGBPZbh82v8FwVf7FDoPag6XxSMVGJhruT2ih",
  "key12": "2uDdxXpUNx4av5XJdN6AxnH2SqVg9gi9Qiqx6VFucXaA6arHYDbxBjXWzu32TabcsGxkjX5Zf8FxF2fZRDS3r4P7",
  "key13": "35XZfyNtdFSBUNKxdFoRZnTDuvJVYMctDFzhGWvuavfARDs8ghHGLwtzq4GMk9zj2x6ocDp5nZySsKZVpzpJvNPC",
  "key14": "3cQ2G8hiLxp7nfU8Voge9y38TDV9tZjnNG5kKYRYxT7M2F3WzyMkCA8rxRjRFUMHapbyMb3LfRnjbewcTEzBgsDV",
  "key15": "3o5Fmnb2imCnPdaUoNrTZMj7KLeBsoNApgxSrgADK5usQENp4k6p5zdAFosn2VgHrDyqSUVA3SDCk9yuRDjdRAkg",
  "key16": "MnsERnu6w5Hys6hk3tbM3DwtQbBNzBDsqWycN1TXrX59A8TsQrTEnLDyqv1ayM1BoKyD98vaHnuMoxomc1pcDwd",
  "key17": "GsQ9UkqvnyJq5bYJYAsyUTmtkSD47mq6N4b64Wbu3B5WRZsZQPdYNPj29uGgwZTzYhkaXJLEP9koHQyZ9Ag8zWk",
  "key18": "32gDMXj588hmBhwFb1PPvJBTcfec1XDa65rmDHhWaWLi7J8G36KbhxCibvvFafhb2y3tm3DftknyiK1xHArSx4Jy",
  "key19": "PSQfhRE7andaM6QR36mJqnWgFAPuhFeNv3rEzbM27SdGrVadecoFBb7tBBz5mDNcVzXAt5hH4kw55NQtkCLQZi1",
  "key20": "29qtu2gpLqk89juQQb4cq8EST4ErZ6jUrtfdDECUACUmgMRwsyxQbe2hxh6EG2Jy9twwCJr8koBLuwDyZ6sKU5He",
  "key21": "eeZwAvijc4jMrrHXzAEde5WuScnutj6jXgj3fz9Yt6jNxYB1UexvTrkAEHdVH4DZ7zJCmX9oryGDu3NTvexMDSR",
  "key22": "4NwUBqqeEbsZbgc5GWD9Tqu9jMniu1vLbKPiA9FTN7vDixi67A18Qeqa2uFLyinRrSTbLddXuCrv6hxzpPLjuf4X",
  "key23": "2P8Ao7pKpb6fAxsR55gV59RxcuEq3ihe1q84MwpqVMyaEvVrSd7DuE1vdL5tvp6Lr8WSwCD5W7VbjKanUYeydy7k",
  "key24": "4kekGDAVsg3imwjKntmoHcgfAkm6JR3NqkhqiomjjZJ3JCGWZhVBfLmvGuqZC5XVRVLfMudMPNqzW1AWrdobYHZA",
  "key25": "4WADP1ujsdCSXScmnB9w3vQGuzbY5zSGynN6fpv4fsM9JGMAEyw1ZZL4Jfj47APYcFLxE7RE2dH7QKcBMK6xPuN2",
  "key26": "3GymjGDMesT5Kg3bLkDqoN7ZaXYdZVcCmPpVwXDSSuVHN3PWUKiZHThh5zMpQautW3TF1i9UGkpMRQJ2HwZhwtga",
  "key27": "2cKt5SQRaUvfGWpUXjQyue3q2QzwDXTpSn8kVQyKxntuLCF4wx8J3z3eRWgpwZUVbjUi6x7iLwL9StTxEqusEza4",
  "key28": "2eUMEzg3sBPGQCAUGG7pUQfGaBiXK7TUyEeoQj4TbRQ5sdGZ9gxYBUYtXK5tjkWEowHdFrDY4nAvHcN8pkHhNAPc",
  "key29": "kS7w9yh1CdzHmt3wfHxQQRsjeK6m1WQ7L1TvhBhagJc9NFPwy8rh5VUu1dpsiLMB9RLXrG68xiiwYGAnC46dXwp",
  "key30": "R1SXruCTuD4VQ2zxetpsCSNibLAcanAZUFXwtevsnATC4R81hRX1TJPzPTJ9ih1dFdLo5rk4MErwhfjtJ4sKJGQ",
  "key31": "29YFBZbTtBqqn9sSAWUo8BkJdBszDK4jUREb5iJLciR2YXMDktiEsGRohWgK5tweV71Nx3vPBqEEdnEt7nPYZAj1",
  "key32": "22RzS2xtKzBHAb9BRvZXSq3HTJHDpTQEq5LvVKU44cnyK1Dxbx7cPkewXW2DevM4dMqvo8d7NfQPJZxQWHYw5Pdy"
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
