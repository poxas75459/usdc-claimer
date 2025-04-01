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
    "4ZBfjf539LrnKKcLNoyccdbcoNGiAYGmS3y1h7awNWwnss4c8matQn8bM9qa6Nhbaeent3xnthHkwCp9QWUVMqjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h6qd9ewLU6BrdXAkVMBJy8wEerK84uQqZYHd2jsqc1VDw47ADvPAnAQmfxHQMG9HbbUrpTH8GaJ2NvgdkksCCoT",
  "key1": "wLdzbiG6Etu2QsDEAMUodcy5sFrCR6f3LfQfYCyMHd9fWM5Fcrg2GZ6CR9KTaqrvQeSSR7KAfPZjLok1bWKaChC",
  "key2": "3GpLW6eQBcmtNh91FWbsYCnshECqwiZECQ53ZKZeDwo8RLWLWrZFU65ggCae3bX64ScuPBMvdjoifxzL9tozoaZW",
  "key3": "39NaTsnC6LMWyUcHEeemHjNUmnhc1q4CxQDpuChcCuTJwcb1P1bSW9w6weQdd5MLXMyeKsa8i1fa6bWi3DiQSm5Y",
  "key4": "2oYRqYjbFkdWD7hWNC1i4MSSy3cPnvq3VxLZ2MvUFAcAXsRkMxsWDKm5uB8mnUE6WGQLWQntWTdWapWpSsF7Whch",
  "key5": "5zxjHTjXFY6jJcfxVobrKEHWETvu3pMGZmmqaREUz1YKBJcickSj8E3sXrWDPqEBQWPwaRyMC2485afDdEpeNHLm",
  "key6": "2zeHpe7YaVWuFE3a9KaPmTZszM55T6YU38iYLW3fXRe2HDWK63dCC54UCQZsucw82JS6kxLX82ivtVL7raQUin9k",
  "key7": "3aTPWTEVg1QtfsjBGgTvADTe8zHnU7SiYurRdsJRdNFS9TP4okZyX9bJjRGBkgRZGPirfKhuhYH6zEXneFjq4kq3",
  "key8": "3gLZBoaKHrECEnf71FfBgNShVc7BCNrYDMkAeF7igTRQcaj3SeCUMS7BzyHHJVGwvrKG22qnLWDLNgAfyx2S9r7s",
  "key9": "2D1gUX7abYrQMWSRa6obrXTdEiWpL4wa1jNv8QYbS3EMScD2GWzMyehp8kZ2YfhGqQs2DvBA21ZDZAdZq6Mi7p8G",
  "key10": "2NuFCgYX313qx1gwmSabjyzmBshsuvLEzS4sLb1FA8Cg2LGj7AgUwy1F7u3iof3sgSrduM9JnaGxuoEA7nvGjkWx",
  "key11": "25spf7wGriisA8qXpyFNoZQj9xPZarhfV5i61D8TyPRhqfmR2UA8c8QeZuWVWho5yuSZxF2HtWMGFuxEyXn82F2j",
  "key12": "5kDfKf2Cg7b6cpT5DNqnTCiN32WfuJZguSpoofiepRupem6hMLUuqMcsKwJVScSFDB155cggxdPPtfEHM5vnXbSA",
  "key13": "59qu14jmRoaazFdpqtpLQuaAtQXicc7btweizz8NHDfP6uWRPjvABeSoPCGQN4zi1VVDZwqaxh6B9dWrv9KpNA43",
  "key14": "2mqvgAuLVW4pvqEB4U226qTZXyMdRYUBt2u3WWpVk961JacKjcELh12FdVnEATJURMLegvr4Nu6A9VM2i5D1XzYa",
  "key15": "3phMBdA2QVYiFRjYECwFLjnQg4YEmbxDE57THtHZqpze6ZJpAWEGCinUYJMLn2uwTaJrrGieDC4gLo9PjhnYpCPE",
  "key16": "3so1PDGBGq7XiCseyN9v57PkEwV4EmaJVT9MAmLp9rL18fdq3xxnhAwbjd6ephC3UkmvEtDSc5c28AqnV72T2mJC",
  "key17": "5X5rKvBFpGiCBFDmV48jg7NNNUWcmGJcBoiXez2SZBran7mQtZeAjEBqqmbVFbNg4DXfSZfykJLAXfY2hb9QYjk5",
  "key18": "2akwFnxzYnRMGpUTefLqgbRn1NWCNRCwtnYLMCWsapewLeJHmPgfEvHoWq97qo9R7gGPYfoMrmz4bA7ocktXXNuy",
  "key19": "3HwbaShgwrMZMqj3uRLewJtRQm2Taksa2kHqkw8ic7GSBdqAwRpieHoiNYHrHQZmvrRSm6ucwZkjgVL7MorJagKs",
  "key20": "5WWjpKyXKQks6zzswoN66YCjBVoH5eZ3wVu134DeccSQF86vgQemZuZThpSyTeRmx4Tnmpi9WeJbNzUnnikCF8ru",
  "key21": "5JCCgPJenrZSajnWh9W4RxqXEGzLY4EM3hBfQWUubBsKuBJxNAans1Uh5hX4Qy8ewUF6fMpUfpx8ZKSpQ8uMuUu",
  "key22": "4umJJE98zocvvTgJdsMVTQ8aWbmpjadXC13A6S2s6FNYtFpmQ58LmojadXjweqsthRxtX9PUvm8SMkqPrhbzZnvB",
  "key23": "4f9gDEqYrrqXQTwrgYLUNzxLkcUwYNugkKVCpT6qiz2PyoQ3nkthMHNGZxtmt51zPjkuDgb2kGCfikK8H7LpmBRQ",
  "key24": "ZgXUUGRCxogThwcJGLRksqCkT9XUqJjTe71BN5tUV8WUhWiF8xuoxwqqvXyobhZBR26p7eSVYJVUBrS7jqCcUmE",
  "key25": "46RY8BDnCQVwjBDHgug2rdhyGD3o1noumHEx8GjqPjjyMdPMf7vGxEHyfNSKyiTER6FKv2KyTguH6RrUuDZd5Xps",
  "key26": "VwuBoZsaGaTuMfA6cCBs6f76CTcJfj1rJUsg4mXDPDBZdnJNAoTQYVRxn1nsEViXTkJfhm58svMzBPYhioWVg1j",
  "key27": "67hnn47T1DS6qKTSYS8TdBEvhvDaoBmspDzE2Bc7RCrkfCiQ471yxr4stY48BQcw734gjjYojWuKhtzmsvigAhgB",
  "key28": "54odtzkJdiQmhu8oyiwbjgfFcdg45PeerffW8Q1YjLN9mv7FJsrGQAQ2jmAtAetg2xoY6mWtJ4KJfwaGYS5a8G43",
  "key29": "3oYvYkqySgsDVLZihackcLt8tvF8wgnmMfEK24wGa3XdrZUrrpUiJQqfBFDWEgrMfpgi5dWcty7PzEqE75hEKJft",
  "key30": "yFhs6Um1hPm3cRqYGxgTrNQb2v3j24akrGndXpqwZbWssFbjfdq62BwFVQ7HCK7NVtihHEyzXWbvhbbe5Gbk4pi",
  "key31": "5dfAaFaPAHKpN1pbP9D2D6TEeDZiTCXthZV8DU7VNtyqBT2GZFF5N1Diq9G7PwojGz1MZmWMge62iS57fXiiREMn",
  "key32": "3PtkY96vRcaDxu8KCuAjeuLA1S2Fub9M11maAcr7SaJacoRhn559v8s1CSisycKL4ZUFxrEepToWGeqV3ZBdE2t8",
  "key33": "2C9SHjNrLy9ES44HFbQTijr22aaSbaGcDdpF7YxB3dRhUCReKuKLf3mX9wBzZdsH8tCehjtgQnF1hrQNGgaScr1W",
  "key34": "5ztpAtS53QzuxhMc3QYtZeDAP2NT3nDNbM1S6gDzQ2vZ1ptMb8VA77uiuroKVYEE7L5UTM4FpDigiLEfA2G5dQhx",
  "key35": "65HyPHXSzFQBpRHvcCixRU1yEG7jCvLmWL6qKFC4EFeVxXa1JEEAb6YLEpXmdyvb6zCK7DGSG3Py4yo72XmuAnHp",
  "key36": "2hd8NdBAk4FzotJ458ATpAVNnxZwwQzMcaN2kqqXi7U2CND56Ptxn76HgKLAj8uyxxp76JuPStzqdGX2zpbcLkLH",
  "key37": "FfkEMmXjtmF5ANtaUYqYnVUPEaQcSmtc97YJUKWtX5mxUvhJFFU4dYqiNjDwsYuq8VHxixqCZ2MbTzAoVCKtBvA",
  "key38": "38veh5U6nAbYujXwpRYtGz5QUTKKUGpnYRmNHaBdj13fpLXnkQHshPyHHxVfthJuyS4SVZbCHkS7oPpeXUXTCboL",
  "key39": "24NxbxchtjfJS2EVfJxxwkaC2LcW45kdo4dnSdXygVmkdgSwe8Kz7yG2nV5rmZFcCKPx9cbei3ErYZFYbnKG4Cmj",
  "key40": "2R8kzxqxSUi3xbvfA9cFqsV7tUSit7ksS9LpuYRqw399KHZxHcNvVS8h8xxJTaiCPMTXnnSmNBg8Rez6caEt46eu",
  "key41": "3sXd4RX2DopSpZQ9GqBUPd5hx17j4nuZ13ap15BUYWD9HHCGGfQtoaXKDok5R9Bv4dSfLpDWC52u5dG9jVurXD9Y",
  "key42": "2iWAVJX4x2BaEZz4iyAnS7Lt3o7L6LpoP6gNX42Eo61oirGyxSFnnzYponHvQJANQ5tTQvBFpW74u1Rrs1mLRzz2",
  "key43": "3J3VXX8e837T33nyj37urw1cTbr1hwH7nBgEzAKju7HZme8FxPqBpAtAD5Chwt1rb2JCVdxh87VzvGmcHtUJa4rW",
  "key44": "3nbyV2rjpigFKQtszZeaEZs12yrWDsDbE4kWi6T8HL3Uao45QQuSdhsXbv5gwYdVjMFfZjUSpf5iiBwPPuEJuhcV"
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
