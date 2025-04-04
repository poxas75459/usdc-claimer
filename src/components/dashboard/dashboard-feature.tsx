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
    "4EJiAgpu1RbMPLBL8ZyYRHba4ScxFc5PbwPRbPhbQrSvBgxHHGgQPqH9pFmRjChMVMbG97iVUA6uZtLN5nbv6EpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MM7HL9oZwVB12gwQMNBpFu6bmTBPwLs8wKLoujYunew63kSfnkEJQrmYHRpZSKAK3PZtm2FosNMpUshgUqWmuke",
  "key1": "3anzHTSzJ4gjiqE2KN8uScD848gb2PLhmBsVJLg96V31YgqDySw1sC5uiUJpTLdZnrMwPG5DXJUCxSrgHsuAkfMX",
  "key2": "3sWGsemWMXojdPLTtFBa4z89Q2Yaqtas9W5wgBqAHXWRfsxkJShnvyECUNAxC7oKrLPne5VkPsD36Lxf948G1heh",
  "key3": "crbCTWQpMGvincRHEJeY9pmTqo5WHtEsTwnABdeR1NcTY3VngoEgDvb1Mur24iWMUfVm2A71peZ4e7i57EfFSd6",
  "key4": "61ooMUXSdboqCYCtyEb2H9W92gTWEdMEmxq9kdKtHR5ekFM2QoAHg6dNQdtd7PH433sbovebWSSs7GbasdN6uVSo",
  "key5": "39RAZQWDWkWKRP48DokEvBjvgGogR8XsDc7pisHhmnFHoZTtTkAhUfPnti9DdHzKudsBbkG4AG9bE2K9hSuyRLGc",
  "key6": "5N39E5B8Z7RtyyKkXNrXgN1Bcge8mrpsP7Kfh73zGs6izVKhRPEmmS4nryh2spzZ9oJocfzWEL3Effh5mRkXcX2G",
  "key7": "357KkemJgMDipUr1sH29W3mbPH16za8Lg48fgoFbf2arDb3AW1taKWp2FLNcmQfMCck2Mnt1knPbXEeSiPVDbAVt",
  "key8": "5gH31rTu65nqbGAhPvYLpwSQ7Lx7cxxJfyoiYEDtM2p1tvnf2izkowinDSVVfxMdteHtTovawqwTKWDAbNymq8U",
  "key9": "TPKgYpQmovBezJ7KXahBfJfBpz3q1K4LdVsbNBN5HSpez9sys4bWJXmcdbtm7oybyRf1PoVvmS1QdkpyMcpnHyr",
  "key10": "2JZirBUYCFcgSaHjPKHyAHSbUAh98gDPF4a29iijw23WK6C6bXooaDFCarnWiiUvTyXvuJheatEQUMZdpVT6Lzsu",
  "key11": "vJjfT25jpcSKhhREgev2kHALsxUcFdDbUXH4qXf4HQkx8xvHbPDZdJbkwvbtXKdUqW91SfTjEGGYVgFiLgWjga3",
  "key12": "2o9sjuVBqX48ieU3VupAxjmAmUdoptKPHBYhjypDLqfvwhSLKkcXGStD5UDjFFrdNcB24efcWgMMqRPZac6oLGrC",
  "key13": "QVpFeXSBbCvCcqbGEdgK9BBCTLT438fT2jgLK3hTP1S7EhV6dqthGVJpBdNYouYMJVFK3MfVXTvXXaprhPgtWWF",
  "key14": "NiEu893pb1JDoEbngHMcDjSFL3Dwhyb5sMyJU3Wm6ukxhXFe6k6jhmVV4eptuXVGsMwgRoZEepEsb6osSsMnhXM",
  "key15": "42JvADCT8WWniyeubf28qT264Kmxv966NhMw177BXMt4KZDPfSt4diyFKdCXy6oYSVEZWMT5iz7U4M13Ei7N8n2L",
  "key16": "2FViPgszqu9aXZ7bMUdCFDMdYGBtJ4tNidBZQTbT5yhXcsd5T3kUH7Ar29eJz8WkZyqydwnp3Tyz1qGG2phCZ9yt",
  "key17": "Km1bpWB3dDu5Xb27vQToq7hMXv8wmMcBuCxx6WKnfEi8PW4QbnBQh6bGV9XVgfT69yw4SeFoEwxUfZ5yxFVk4Kc",
  "key18": "3o3npnZZGVWeHgrmUNKrravasaMKR7YjhbKXaCCu5p1GvEUvQ87m65Xjqcs9mGJUjvUz9gMpNAQRGa3BCMTXWZKB",
  "key19": "4b36wd6PovDWmxUx79pRpDUcqbezYpmeSiiNbQTSuhaMgzMpYWMkRmRzashYxACP91548eKHgDTuLDtznZP6mTce",
  "key20": "4eA42YYdaDmBM9BwNf3moxfoXGNK2FgKjkfvRVDRDkK11GhCchEa1rnGGR4V8URK9ZY9M24QynsepoCRUHVx8Wnx",
  "key21": "4qnV6mryBc257U4Ymzt6RTVVuTv1AGyE2xGDzeqvWdHtFj93A33M8w7DJzoYhvHpS3JAvzqg6grsoVLRQBHWSark",
  "key22": "3cZYqG3oWf7kyucTALsrWmdAnjtigN86g2Sa33mGPwpiW2g1nPZdEdpH3NRw93GNQAoHTufefSFuh7gQmZRwPa9r",
  "key23": "4fgKttngQQQx1nTz16FgXW9rYkYHi4VYNYoji1WpxA9cTVzc1CwQv652RWdUuiuLkKqmWUuf78saVS8D1YJB53Mf",
  "key24": "y1dq2KFG5gQWqjPEHTj3XqaFyjXabXRjspbjVHyT46GVgrRPq7dWC2pdC3EfpL4zwNgB11izNGBgcvVkrR13s1B",
  "key25": "5nGo84jSPvbmzmnj2p7sqpFNGCFmYBuGeMThUocNjsPetmybvdLKNf6Ju24uGVLL5J3LUp9LkUVsMwZpWKXjP4mN",
  "key26": "5PB1KwJafsr6jnyVbPqf8vdAm1Eqx3MeErqcs9qx32cszjZ1qwBM9HPzqhDfp3U4QLahkUdn1JRrPUWXEkyAxKyP",
  "key27": "5zGaBj5kMH3mUZwRXTnK5SkxHaAq16CcPrFqajeAfHf94fx89nSapYRFWAUtAdQoQJKkGiSkAVn9va75E6koUWy3",
  "key28": "3iTaewjKW7cyy9QSjVrEzZKF76y3tHU9MPZC7cjQygMmLMNVsCpTyPs5He44nq1f7xxEgeP23UUnRybgSGbMg17g",
  "key29": "4sQJqXWuK4Q5VfM16WZtoM33f5xgstQcxa9F9pMmoFKxgdK1G66scPpahL8m7FZ124bKCC4P4HMGMxHRzyYjygyp",
  "key30": "3qDF7ZrEZvE9siyuveuBXFwmSPHvZFqG7tDRXm9LBjvdvWagqpxbvnssisLKYht3LgYzXzkT3B1433pcCSYh3ACN",
  "key31": "wXaKNVYjpZPUUiiWJnWNMtxGJFvDXuw8bw8upJBCP8LY6L5W7b8udZKBuzANuw8RcW5AwYDyMC2RexNV3Bvsu3Y",
  "key32": "4xhNcQyccvTJo39FuKMRApZ8Jgqu83PEN8AW8wjWM3KiwzZKMypucq7fzsruq7ThRSCxVDBTq2GfFxiWaQ4briGj",
  "key33": "3vNn9tug3whiqbemmrVdbL7jT6fp5yjMAj31YyCPeLaYcbK4HLtyp58sBdRHVpToE8xxn1Ue2S8n3tyjx8VF5Ds5"
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
