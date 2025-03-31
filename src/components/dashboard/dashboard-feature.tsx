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
    "2QHqwFATDWRsSLTAQujXwoXmPbUg9jF1ig2DnYDRWnQV35yWnQ4t1Gq7GxCxXkwEJqnugwwYZ4tqmyyF2raYbcno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cMMKvC5cASBkcRZpXm2tRyRpzr345o1MFc86svv9gfubo4fk3BMps7Mjo9j1CFzsZQDTkkT68kccsmzxrxMAUm7",
  "key1": "a1eWaRwRqot2ZCr1Pg6bAEkxBp7FpQXRg4hJTfvwdp9ruyo9FL2rPGKDKUHwszxUc1HYeuHm4RUzMYUPbSQFGEM",
  "key2": "5vbnS7zFEXX7qTQMwS3AktRWBpfFLAp91NTrZn2LPHB6EoafBrP4gYbXPPfs2wfoRRH5Xf72krd15V3zp5MvARUD",
  "key3": "3VysBV5VQJ3QXWEhru5eBcEeTJ6q4xNzakjZKxS3BAz4wfUt6Myhxr2XbvXu21e66j1wsuMBeiZtw561H947oaiu",
  "key4": "28N7ZZh6Aerwsi4oQt3iYct17AD1G4E1z9axa4a1nT82ZGuycNm17ZPK4SZEa1eGxAvXseDouzxhk45TPcfRYsHj",
  "key5": "2scqjqo3mWhcjSqBx5cdcgfnTxA89aH99FLMnkAnCK5YsM9nZzUyUH9EGs9kwfjoM5CYzpDzW1g6zAyALveAXNpw",
  "key6": "2DUc9Qv2R3qzNd3Wtve6rzUVdx4BVdnrg1YSddFHKCWAsJTtzQwbWsUn9RUjSYJfWsRAveu9Doe7RjfM868cWRHp",
  "key7": "3pyALpd6ZMvbwgBHK7P1goUNPYTVMkKXFfkBDVyz1CDpxxoQhsCLVm2W4SM6UsLLdHYdXtfDPaLVs6iFeyBTSbMa",
  "key8": "JFpmUZYqxa4haB6E25E8nizcRzCdtY3NVT4TL3ULxySd8142uCq6x8fiNvxQnPJKTtnxcBpPye5gG8kXD9NHfo9",
  "key9": "5Wq3DWAEVLLmDH4W1DWMVBBLfRv1aKzdxnEYQN9NGPQVibTcjVUQNUThWJr3NXVLk37wWbuf9DLcg3gM171acUKb",
  "key10": "2WrHNEPe6vWb1XkJbdJTm7FG1Gt8qmo3fp9MJqyWY9BvaY3t6GHRpdwSRc6m96ovCHwyiRMjSHGdFVZfunmFnsgQ",
  "key11": "24XTYZtzEg9c3wpHGk1iFkviN2WSWCLZjapZ27D8mWpsQAo282ANrZhdTqqADiPmLzCnsvBLjwamKARTZGzoRCcL",
  "key12": "3MGWuJVnk8PPD1MYw9rzTHBhMNoqhJpsv5JmeK1w9XiEd3Jx7Q3BkuHL6Lcmp2XGQdUB2qoFoLUTR7mnkt3qBG3H",
  "key13": "4Kn5sPbBs2nWqEZK5PUXvrAGZiagdTzcnPJPJTF49VuN9cVCjh6w2sAPsZAnB2hwRWXCqajHwZWjo1PXhzsxNBX1",
  "key14": "5B4RKDCLsEarwrnCUMGUk2Ks1axwdw8bscvib1PKBDcyB9eFWGuD2fcFngej6ExGHQ9D6qR7CN4JdKPwyCs6hh7f",
  "key15": "4fNqSs43hEcZQG1SQ2oqQHcZZkBnZ65YLBhQUq3JTFvjYGQqKZMVXQDUE7xN34S8bCYkfzMDgnrbSFoh8bEKK2x4",
  "key16": "2azNagYpx16hrp6h9EypY6GtUuL9QAG2Ry9EcBViBU42FMWe5rD9MJUsTiycWMikR31HhYqcY5YWZGtWn7aHT3a3",
  "key17": "2oCpPau1p4x7vCLbf28UReZzjzi1fqVvTAk67Uhikf6SF4ZgdqKH9uB5qhMY4t6jZRGRMogQtX2Z1eFshT24dsCd",
  "key18": "2RpAdJCLXsmdV6Y6BjiH5mzpEudopGXFzT96jYkDMWepvAuGjdG77zqTZLb59S1oM9XUTefLU63qh4XyCpK63HwR",
  "key19": "3MHPpJzQV8J2j5rKAcNWK6gfhgxXAraQmtiKodVxCkxKihSFsAKLeJyJL9hNooqfHuQ7afyaL21U6STiBmJEax4A",
  "key20": "1FdYTsRCgW1PESkyW3HYiyEVrnbmep5XQ3qLJZ6YjrvXByTH429f31DQJ19STVRRA9oL7Hd1V5vhsGdmTxnrx8y",
  "key21": "3CA7zXnnP1XTd56REsK9ZDTcMgH8VrSSZNcAsLgYAPXNFV99udfzs9KigkjDJsyECgmcsQ6BF4ysspnhbdx5wsTR",
  "key22": "f7hz3DLcPMVHHciEYSCfLFvuu4LyBmDq3pLQ6fxspWnPujAoqnqai5uoMK5LahFdHQxkJbMbW3sckgRsSNrshnC",
  "key23": "5Je6E7bngx4TNwxv55oNFfxpSq7D2cP8R2Q97uLSttQw3hSyu57jSfZFV5TM8Zj2eB9AiKGHwT9X2FpDVXGehhvs",
  "key24": "5E8jJtSvzRuWCHboQHti2biVvGJQGXaU581RuZ93Vy1gDeWHtDxQzmHnidVuTrRLudd6ZCVM2u9XuTGiR95AnEU6",
  "key25": "37izu3dzZZFyKpkhEY4vz5SwQsrgF63XzvbsocHBHybZ4UFsGFSdcUkva567yUT2u67GRWw4BU4Zzw9ysyjjPmpi",
  "key26": "2WSVCdiqP8dGdYgrayvncNkvZA6SxsJCs8aEs6SwYndmkwCmYUNq7yz6xSLh8b68KnLA9Z7trKV91GuU8piD6gPe",
  "key27": "RChVzRiuipsP7xYWbfVU6jAc2JpM3Q1oKTcm5rgbLb1keCtJREwoN9ZT5VGQYmB2P1tTAS2f2L1pBKgFGppAJ9e",
  "key28": "4wz59NikkqxCjDRHhZAxGvaKjQ7qVgkiHhg4WZK5ESXweG8pw1djNvmWXk8Gv9TPQHKcAobATRSfWTT7rjdh4oV2",
  "key29": "2uSJKHfDKJdP4P11f1Nk2jCDVSW6VFA7L1zasTf7tsdcYRYmoMFcuqitadEZh29rS43PWezBgBSRvcGcj53ZEbuV",
  "key30": "3LPm9eoXNriGHUw9t143eYa1SHXm8mruDakVHByeXEQrh35pioT429UVZr2Dnvqx5j4noZRQLa55CvUFTePNVcb6",
  "key31": "3EuKGwWyKoQ8dkKwj6fQd9y1VV6LJhX163g7CcsHuqc9YrMmdK8y335PLcDdzWBjHzwvLprBZ942fRPTHmAPKiRu",
  "key32": "3D5mSPJ4MAGWWDoMk7VWjvKLVo9sDsWaFiJhrcQF8obp9Uo7UkSdLe8jZwLqVn16PYU8tEX57gcBFLAt4e6iV1zv",
  "key33": "2CFxD5tTf8B1nzvXuytRk7fK4Wi4XYCQKZL3qd5cBDp3cofgJT5qpLGj3agR7Vrh3TT9awHknT2KUioDFoRL9GED",
  "key34": "5ghaWNPFy7bVfRmzf5Z8saFtzD7s5xj2MXiWzTKZzxTYRBDiV4rrSaAL2EycTcR1NXqh2MyJ4hBV1kmrGTAVp7v1",
  "key35": "oENEygW4qevSyBNRr63wPVgZoEny65BH1Mhsijb6sh5f1dma4CUwfByuYNPYGQzvaPJeHhEfyA7qRf6EB93DJp1",
  "key36": "3yk4Yq7w7ZLYhXyVCzVcbPgBFaFYbs58aZgktXik6xQ8uNYe1HpXCwcVaiKCUxQ32auRy7GNXjwitXTvv6SWdSWd"
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
