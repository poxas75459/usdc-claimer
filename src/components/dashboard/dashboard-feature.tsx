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
    "4B6SRGLeyF7dx53pxCM6AeViXeqq2aWiLKS5vsG9dwLUqMTccFYZbJiNq98pUMCoEtpW968XJp4QAc82mEWc22Kj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q6sw6Jc6KsBUNb7siakiwev3DiwRJ3fE1HPDDiXsvaaHbQf7ZMKpFMywZmDXinTigSDZ3EgKBTgEdvT1zHGRQi6",
  "key1": "RfCw9go9yzihZYgcao1xZ7eWWNTECRWwjzZLd8qz5QvWgQS3g4CThN9jSvwX5eJpKHfMzsuo2Ub4V2Y91AnBDd3",
  "key2": "4HQXqVUDsxjPP1eygK4K8aVAow2vqjgr7mTHm1R7vv9ahLTw41xxzUQ5FCScWFv3E5ZJUPe1DJSYTVc1Pz5eg573",
  "key3": "3atajXodQ85FbjS38GSzBAfk1ZxfihmXdtXWUf6LjbTHgHKurqejrqbrT38tmJn3hJSt1GAZZDrFthDVoAcfEaex",
  "key4": "4vxS6ytaSHkZqubma1LCKmfkMPPjxn9ogY2ahj6TKVvmfgeC5AMme7YjGgWLsAajL2x5u4YvJcuUeU8eLyDsXK98",
  "key5": "3wUYLZTvAmYpvVvqBqM7kBCidedxA73wFEDGpnLDHp3yTqKoyBNW6ULEPTiUby3ryaypWAD4Rxs1ognsLf4nnUMd",
  "key6": "zU22nw1hTh2hgy9CtvGVsKWDnaDCheuit1rPqW8om7eEExPpTWLLFdnvJj2RrTyb2m6itN9hqxyQvC7fJW9LYDS",
  "key7": "2mUfzMySHUDgTEnAufiCnrUgSvWVWJGhRia7Lvd6ohj5XRZmij95vtgao1qS1Ls9btFca372w57bXCRVbLyMsj4M",
  "key8": "3RDjoddnQ4HQb6EJ8etegVrFv17LWc9hzZ7Tu3RXH4AaG4LV5LgpQvxyLvHwsym3NDRv35SqKV18NcE976e9UhmM",
  "key9": "3qkTX9Y1PU6rYRcdcQTs6UEK6ZyZfG2ppuKnSQ3c1hUAyeyRquJLakxZ5oeniQSPRS6nEJN1pCEFpKfPTGCNEcYG",
  "key10": "3fB6aQ5uz1xXaB4CnCsVYgGmjEFKJFnn29eLLLrbjFHCD3j9rrgW9B6ZndVQVFXd3M33JN3eXXNF2Pmw88SYHY8x",
  "key11": "3Ukis9pWSmqpb96g5ix5WYk8bG9XqDJyLb8zGWrX94KTYgef48bpyqY63y2bLk5o5hd2t2nqYtyMeoPdwSi54XGa",
  "key12": "4Adb8cqLjaME2oxZJ69qb2LVF4UXjtmTNVsvrY7RgSCbw1yfvuDHT9qrRjVCKksfDkiyfjYXVfbpcjkYJDRLR7tR",
  "key13": "5SedxhENUeswsgWs6myjnAezMmKevo4UuX95auiffLTXP7xQUQNCGkuxrQPUCnvu2YT1cujr66atfKCBxWJUp5oM",
  "key14": "26459CNQdp8V3zh6uTwuEHczL2g3ZSZTYRS62DyuCPPtHZBaf1i74c21tXwc4guXjY4Y5AbZktgE46GvEE2h9fiN",
  "key15": "g85oLnuKgDNdPh9PCQw8vmg5DsL1VWpvXRB79y36VHECoDTVLpziS4fNSrSrrftrvGLFcAeYmqAwW1q1DkYwpwr",
  "key16": "vjNCVWVS3VLLyhHiGScuU5rPcxNXQuFnpYdWb5C98j9uVtwSzVLZ2BB4cft5ewTJeZ451wsCcyVGdZvJYSqNTiR",
  "key17": "2BtNmP3dAamyrfV2xBYQ2FzvBWLrhK2MsPzKT2AvNjXJ252t9VgQgVPY5Fh1t59d91Yu1jm8VdwVmcgJyBR2e486",
  "key18": "3Kom3PTsuKRxM7KpsgUco9KeDCNySQA5UxGuQgco7i9JApdVMeR4Yobmnb8snR8TKEuAUG5xrHJewQDQEvs539ug",
  "key19": "47i4wPj48B9tsrJiDpL7g5sk5peJUe8dDK1BD5TpVPa5C3siUNteib1baNn4vwSccx1DSuFM5wp5N9deXiEqf5Nt",
  "key20": "PD7vxSREREKikPbk5Cu9tx9f2aV4sP1Y6GG2vjsKDqg7ghtaxkGDNxS7Ek3NeWa6NpGXUpcQfaDmzab8bYGJo99",
  "key21": "5WHFKRB3uqKcJzAu5uhkYzgzyap8x143KZzMenvSZkoTaKeNrdUZLiBvRPAMEoV2KPT2VePD3ht2u8hGg48FLmSr",
  "key22": "4kk66renxuAKpH3F62KGcQoHYSzzrSKePnwBszcEPRm6vbHgP3eF8imacuBaU4ZwMwUE2eC5iQDPpB4hmXf8sdoS",
  "key23": "5Qu6FJXFKHWarSSA8pqktJ2GGawoNWc2UNwujinukjet3nWdGhpLi8P5UaH9baKJRDEFpPbAeK7ug95oteoZZvEw",
  "key24": "4u7ZwKLU6CXz7x1QwQFM5ZJwoS6WvcFuynuMv72oSMsvyWxF5K76X9eC5C1Desux5g8zkYf4kGKtDR3gVq1JtL7h",
  "key25": "2NK2dgk3BrtitTWQu9fUqNgL5UPg9qDhcN1J93txWtGN5fsTWSzk6wFirdWHavi1hWvfPSvM1ekx5bibWKABRNmg",
  "key26": "4YG9mpCXX2yWtuaZZFq1pDafndhov8Kg8Fc1u5KSstgvFg7fG2NJzhQRY4ikANdPYdC5Q8KogA8H692yoqRkDP1F",
  "key27": "2pVqWS7VXVxyADbVmfuxXoSdGUtYap9T72YEbkmZVJUe7H2SLfRybLJZ3mrYkg3p3yJ9yqKw5Xv24ETVaii4L9c5",
  "key28": "5ZaSvPEPewnVMKiQcnBgMWWZkgRU5hP62xBa1oP2Nf23LhESJz3c2ugwGdz9UsV1mzcBsQEhjHkQR4ejxrrEVBPo",
  "key29": "AhXGjM6AuejWUiW9U9vF9nkE7YGdLV3AQZLnwks5UYjtMRENzn6ypWUmeZHKhsEaFmJ13UhrjGqS3emL1C7UjxX",
  "key30": "3iNRJNZXtPNuUNVmRCgUhMTun32LoLhTzduzmYcStm1z9d5yfgXeF9uw4wTteVNVwtu1Dym3yceQz7n64GpEZGAT",
  "key31": "5RFWi54Zs82MTaqqyzxwQnSKMcerM9hvdxsCjC92f5rdp2PaHi7WL2ZMmvEvpbzyWwUe6w1Uzxa3sJkJKdit2rbm",
  "key32": "oDJwDhRLucs7PztFWoKdKHgFZg1zDEeZustHKzmsTUFML5Y3p2kFvzmGHFAJB9b9U64bWvL9BCFqrkW7dMejrhR",
  "key33": "4LzsWY4pGdkHTF7G9bm2PNSLfG1YNMBTjGD8gD7fQP8gNN69Q7hUkZXs9BesmCZPZABbp9odmqQQu7L7HkG9bmYq",
  "key34": "4cgQ16kvqpNFKr5iC4Dn7LBj4ME8M8JG7zVwXMphNhfbGpipHZ1oYCRinV1sZeArXp7qU7EkmSi8s8ZyWbx9kcaR",
  "key35": "2V3pAXQruYrWEqbxcEmjMPZA37AGXUxYCN7gHmda2cTrmDQvi9c9Lfj8oSLkbkbg5Qz15APK8ynpEPMCobypAJYb",
  "key36": "5VL6TUNWHjDxubeMqyH2behVJCWpmMxyTVKGr9A2jHJf65ktYVr7s49XhmeM1mdrzskiTCyVLjzfCauNS41N1GTG",
  "key37": "5k1GiRQkHzP9CZcPWXjoRHmaSSitersPtqyUiewCXmGQhydY5Z388g68bs3XFkturfYCaMFZka7AbWPSGq55zWQf",
  "key38": "4cg15XFAXApjdvsHaT7wroEuLWLKJcrqC3hN2BDtH3fyQaS4SrhPJgZUzakX2sxKVF6zP7iyP8erdbF9jfwqDrdP",
  "key39": "3YoSYFdX8kFA147T5Qzdb2spibuBvA5XPVpA176goBaV7XDoYF24UnQSmaYC213474oskWhirE4BG26hGNFZEmxi",
  "key40": "wjq9tTYMNS1dy3D3fNmtFR8rn66c7whdZbH1wY1VenRxQu6GuPfQoVYrdyhPWNJHkLTB1B4Smvy2gPFqVeWQnQ5",
  "key41": "26gVFpG9Pr2YqHHPVtpUoPcFYXJ2Vg1mLNFpRFqaoJkrzSBjwxTR4zYXVKffK5qenphABLSGrufRc2iNZyacvCfV"
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
