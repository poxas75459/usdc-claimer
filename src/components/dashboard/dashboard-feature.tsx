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
    "3YoHhLyzBvSKxFCXCC5CRj8BsZz4gtDcaaeBZfVizvDXmYcuigWb2VypiM3tdFYrpAGUqKAfRoxXgUwyhLWxmiRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cLqHywfJskANP2ghm6WoFMPZJxaVSvofCtjiJJmgENFGm5fk829nQ1RbuvSYorynxgi8j4h5VtJzo7rvBn6Q4r3",
  "key1": "252XvvGXjtcYRJdKVGRckW8vCzW4XnRtvZwxKfrPy4ReXkQC7A7onizSXS6LsSitB7KyYd7wH7xRvcnUV5rNmLd7",
  "key2": "5BRbn2JWBLiqvFVJqtkYKFShHGqPtngxjNA5UAciiSTAbR6GcjVukmxG3U7xFDx33EbX6sn8g6ffsgKkEaM3suoD",
  "key3": "3VcKuQaRfnen35QAE2SzhmvBqecpM4RKRMtmgJ8DKMQN75pTZ6M16TfLy2AWVN2UqHfSqcW7aEXiZX2WzokNepXC",
  "key4": "6iZCJQaETcGFNYE4TQB6csUVzjxMHuTkDGbS9m4dRDqqdPFmDTfvUhtcrTT9sGvnr9xyVx9dUHo8yR2P3pssVCP",
  "key5": "4s17aBMYXAbdtVkH7Hk4ajWngamVaFkraW47cBmsHLqG9tFJkEDXk9NMLgz7e2CvrPmx7gQ1tV5h7VNnv26vRJon",
  "key6": "4x3Cff5ywzbZ6mv9vGhr1wLGUaeEhH5Mi4AWn2Jue9MnY8DjZUqGLib7YBFXRiXzzSiLjgD6KZNBgtP2Bk8zh3ZF",
  "key7": "3WeLv8QXsTFzATJfXC7JA8qs6A45g58NpB7ERCVTEL8MoEeA69N7mMzFQWG9HuveVnphjWEunYksiXZQ8TZuK8DA",
  "key8": "3ocXkdKL1VDPYKzVkCH6ujzVJTeiiyWK61yqYZoARYH6RFtdzPwnDJAXtEckBnw35azbmjJ5Sb6m3xcwaARxcRTK",
  "key9": "3x2dW8qZ8vQ571587DRupJ59BYmGVzj4GyhgSWrUTNgM6KX6xxSmS2tEBwfwMW2jfgmAAyKj1igtfAgin24ARcDc",
  "key10": "4NvfGC8JuCCc82qgRXouokTsr8rF8daj2NHsPn8iRVkBmsupDhkdhbRrZwhPK52ir5j2stgioJXUVU3s34vx8Y98",
  "key11": "3LonRxhcskbtuLB7YdFVzACCVZrgPGDSnkhPJ1zGkP77PDAjGnT3bxwb8VzHtFaUfSs8BBkjuYnbv4C4xS876dK9",
  "key12": "2k2cuEz93R7kmQ1SQf2Pd5VSV4cS9HZGf1DX9iBfSKMjBpxnpoyf2QT28efcL6v4yQJRNX5N47gj4jr7rTDD6D9y",
  "key13": "HMBW9ngxJFNroe8hTCrEH7eNtkXfdhz4QcuSpRqtjLScy3YpoV6XxUaomNG2hzmp9WQP9Pja2cRV1c5LAr9V5FU",
  "key14": "25Y2FZJ2nuVvMUZhfZkFNib73cwoVsHsti3X1Q2JUP1qfZmm91tdQgEMKYju1adSgeRpvqmSqido7PmuvBXJ63MF",
  "key15": "5Q4HVJq6DgnfAbKxQzS2JXHPpeYxAHNsCy3wXEBfzLpzbndxeC44j4TTdqF7vWwkGtxoA35FumttfRziGXjJ2wtf",
  "key16": "2zhjwtgTu5vqKr6Fdb3QgyhsEkU7ygsefmSNUCRzW2xGAomG9J6gyB8sJ8Bf6HFKPEqXsfhvmLZzqqMDmpPC5SeS",
  "key17": "2yyzMq6MTyuJSK1mzbwTppHeQrwJMubRYLKCmU5WjkQX8TQFvZKiJsqSnVLozHnVvwc3RHsxtMdv8f6rpEM1wT58",
  "key18": "3d46h4hkZwsDAREeYzr42pVAkxAgidYj9ECcUHfXJ1hryXsr9pxupQXptCpkQ4EH38HfhyED8Fzoy1vmZFCuuYuQ",
  "key19": "5gmC73TfrGPjzsewmJMdejJJ4DS6bnCjWU3FU73rnDAe6KBjFoVE4pSWQZZtyymq2Q9BLd7eyHwvgnSZYhviuyGc",
  "key20": "2KPnwQeoXACD7iLiNvoyn3TkW2cktSrFNtcwapgAVH21aa1YReQyQEshgXw5N5hyqUhMSENiYj2vr7us5KXsSZSo",
  "key21": "3FG48aFpsNFe51hCso4gF9vegFx4tfuuuuXmcQpPBZUt1jWWxBTq2MAwBPJG8SVa9By3f5LS8Af97e6bUsoM8HF3",
  "key22": "nPkeMnvpnzkq1e5MuoLqnbBuKbw1omAUKmw62V2ZqaWGvNZRKW3jEPd5iJeLF6Q5Jpan86K6zGXLYh7y9HKfuAo",
  "key23": "nSZf2r8Gv9pWN63a3irEARQ79eroun8ucEcYnXMjaLNfUHnmxuiKh8pmwt7XCK4jCahCPMjbMv4sbWnUHMWKkor",
  "key24": "wRJaFWvuLXeJdDzgkDPcV185WuXi38qESe1c9eiNqkyKQKBQ3aJByQkoXtDPteqUfYMJkxoLS9Gg64RxY5UN9bJ",
  "key25": "22dTx5n7JpN1YQbSt9naxan7ykHexMq6qyAdgeC4ua2EzZ2X97E4pCChMZdKprweQBQJZk3dbGbEgvnKnrJeuHxH",
  "key26": "4dCz7w9mbiWa1BW6cPg1EfAFuoxopS3evFRDMEm2uFtjmm6EdWQaRh6pKQ7mjiayuVC4WYNzPachNFdNiwqERELh",
  "key27": "62i6E7Y5uUCM9pMfNiZ3wJ8aKLrhSkSeHW74SmfiTzkvwybpz8YnoMSvyDqjeUTsWjMtGz4zGQ4seW9HosnyhPcb",
  "key28": "5BS3nw26UAiTLcM39atVxxw32U2ebuUUmaMTv4hazrPxyrB3GBTk9ZhMZjEYMfBARGtBsq7VNvdoGkWujJczqavi",
  "key29": "4NWgmw7deD2ACSi6ZJ3pyKKoaSnEWL95yELNexpRCsfDn1opj7j8wCnoG9CdrxVHtPWF1BqjXvF3CX7GPvjV3aeL",
  "key30": "3BMLKKEa67tMgTPhfyogbRffCq5Po25raMJMhXgTBSrxvT6Ku1vTKUeELRL7tQPqGjg5ukKy3sLbuRJvHB7eoEjU",
  "key31": "vgf5cEV2ctvG6VR3JjTYUcGUc19LAEgGkD89jksuLAsv1LzSthcJvF6w1ujDgXHnu9ba8BMBPYVNsP5K5wDKAUt",
  "key32": "4oSoVRrpnqoDRttiAUFTqgca3QFXcm28FLYUutJ2m35gv22gp4c7mLBWeRyCa1jLVfN5noDphp2n1i1By9tkTTfJ",
  "key33": "48JNLSRxUsPpvVStGVpxA7G5Ez3FzdLEjPj2FpdPTuARC2EvB9bpCnYS4qviyzQBtUz4tH955jkpWDf3PSmXVis5",
  "key34": "655CLbnGbnEcv5p7yh92ZqjzHbX4HWxYJT7uCzTVn4WizpyxzwiFZao2todfMY8S5brLhmz9kNrA4jfHjELH97f2",
  "key35": "rVYgkmJjQxrr9s7ekke9jdBaofAPkcdRy8gC9WDVk5GJgXZquVUraocCd2YBKVdUpgQucmzaaGgTKGNcWwi5mQP",
  "key36": "4g5WP8nMLVi9dnoYEaE275RVoCFzhNJHRJrZMFbwZS7VJWahtc8A4WKkePUcc6CeguJZCFYuWYZhcj6TwNPYgYdy",
  "key37": "5DPjVCa8Vbn1rTuUprdaoLDYXFDE4aQzyhS7yxeXHBJaHPdQgJmaKV5PxE8HqfLjZNHxSprZc74PToE8DHZ31E3e",
  "key38": "2BjXMu8n6bQKqUibHV1cJjKTMtqD8MVJ9KuRxBWUBxWsfLy5G9cW78fnqwUVzzaJXKgsvPrPuprfW8PcUGArRmB8",
  "key39": "31YmVZQFgkud9nY78hEPaUzPNTFLw1NsjTQVt3smPfuQhakaSSbmCRdDMGqiq6tXcewKiTzS39vC6s7xb8qmKyPL",
  "key40": "56E4X5UWZ71Ze3zXB21Ads5u1mJ49PDbB5ARzDrcrWEMy1hNCmnVF4mWJLC5pTdj8r2mr9iwHNipFCj62MmgGdMH",
  "key41": "4PNmTCoE3gZBRukh7u4c9ozYok6RUjwoUsSa63d4biZxwF6HzYT2xzA87srmwWDzfdXSXNqr26UmhgoU3tkkEmH3",
  "key42": "2ZVNGcWrWRZafx3Gr6qZKSGdCqUfem2hnwKvHCiRLQCuc8z2WSnnBcdBXkiDaozbP4TdHyQxDW3Mrq2Zp2iKS5KE",
  "key43": "36qvKFbGgrSnEcrUxejcc7SLDhWVGe7LBiATNLymtVdt4FxLRcNqZpzq12erwCTGVts8igV6HkuVSyJnKjwRzLvp",
  "key44": "YsLeFMxgBm6En2MxPokSFdeqnyqwgBHbjQE2q5dmsvBHJKHNuH6P8VCdUqMKRzRZytaHA9SdQHJD3X9PBzxmQrz",
  "key45": "3sqwkor1ZwijKn7auneJ6V76nwKaAHqg5vu1xNSZykNNxefT8SYJWivbqwXESGFLXZgQkBBirqDeNchku5EAGmF8"
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
