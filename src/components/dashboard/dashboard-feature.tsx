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
    "QKqiH8pCzDmUZEYRi8aDsjq5dEQzHddNRHqJvuKCvv6Wwp3fbwCd4RWTFQfDPfNNYMapKbUsK5TQrbYcx6Mq1kK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3emqBraCCoHKZE1BooSoTm6B12LtbLDQhn4FGxZbfTP3zMvBUXnaA8pA11kZZnM6LKED1qxZwSARF2qxVh6eoJgy",
  "key1": "5WY4eh3L5LES1UKhPuqmUpnDBiVJmLJSQ9vEXGrC7qWfr6kuxEjsb5JEtNvP7kGGiKwASNAdUc5Cagx62yjzHeKf",
  "key2": "sa8cK29W33RGMNG69T3ddRaoHoLEjso2Fne1CbmjFP1cuVN5WAUgrjuNmyMoJKoySGEzBt8gBmEeSvazsgo2whW",
  "key3": "2bagzTnaggVUQ2iJw6s227g2fsUh76aZE29YzRxm4Bidgg9XzP5BRwYTmgy89KSYSezj82G6pDd85RiYqa3GTmvy",
  "key4": "CEacpwJjZGDy4mNKxDg8bXwZLD8FQEvW5nKdxKB2KGaGu6BwVFEBak9v9zg7CQfHLGM8LZSmYqYYzBEUCLfGztx",
  "key5": "3U9KpK2QjusC8RwE2xaQ8sU7ZEA14apoXCfas4aqZWJ2T54jDkhL1nNvVGEqE974h8hxpVxKxudWDGZCEJbkfzrz",
  "key6": "55FB5yCn8vH6Lk4kt3Zg9LCjg8KDVxY6uLVKzt5MAPd8YVFskxURuD3WjmJ1swBrjfbxPHGmfJkiDiXJEy2jYzTv",
  "key7": "2DgTLXDE4kpFcdADbGh7HDiCRSpAnCwxjm2ghG8hkjVJ6ufzTBHWg8Fz5eUwFFHsKhwryQ1VFPiyPvWkRb5Vrzph",
  "key8": "5vsd4APfhUrBCEvr3QirRt3ZQ4ZrbYPXLCCMrXgSoTADjx56mXFbbUmxVUyiiamVyfoP8EW3QMuUcnuVvgm3bW9J",
  "key9": "j8Jfesj3TWxQV5oiyaJAfuVQj4RmEeQv9qh96BJWPNt46WvoDAZmQh56FbepUR9n6K8XnhFK6UwzMQ4YLnG6uuv",
  "key10": "2wtGNLinTt9HdvjVxnsCXKjFQ67dao5WR7YiuJoi98ksq2opu17d7Gr8MvYpCimLzKYBCDtLeDca1C8nHNtLvw1K",
  "key11": "3DozXT3zsB7FK6mk3Ar2efYLDm1Kfs49mqjcWDy9qWfprRY24aoEx6ruSLe3cztT4VewpVAffbHrm5yEBN7Pfyru",
  "key12": "4gLk9LEXvS6PSWe4oz5rRTBJDiMkoXAeTnywyjxRHSSN5P61saiMbpmYzvCMBs21SgXqWszrod559wEE8LY7zUUY",
  "key13": "5HVKSmC2QVU8YUSRgXA38tdu6uHivhm2yUgdXYrkMzf76sSiiyGJtSNbCWwALTRBmSjkyEvAwZR8wAC3g5M45nRU",
  "key14": "kQeLU8a7s5CR1CmSojfQJrCN6ztCxzRewdC9E5MyH4Ly6efgob5u8D8K9k8H5dEN54hnesViPH5YivFwMfHD2M5",
  "key15": "5urrKjzrW9wShjJgNhSJMb95enzzbjbqKi62n8JQ1ZFN6p8QFRc2u5N3HRfWTANVMnTFNQ5JneMs38SasENX5ySh",
  "key16": "4pge6KGoznkyngPevw5EHHmGBqcdiQt2MRqq2LSoejHUksYahfYj2Qg1mTEB1cGNnPwc8kyczXasf1tWp8J7dxos",
  "key17": "4rAAWysqvhLrwByM8BWTiyPhbPxP9d3RCkgCn6UMweBK4Q4MXjav4hmjnGVyNqXVBfVnA5HbXPz1Y1Dcuwbw1qCe",
  "key18": "5SAiQzqwJnsuRiC5o1SzDNwGVUPPJZuvi5m7MACf6nmL5rh7SWUrY9rLZZEW8H8Q8T6MHaJ8EPgCP78iyK72yJFM",
  "key19": "4dL4vxz951VVhNuJEHtYVUtvw9onMpJQg4jH3U8ycdvkVvNQ2RYXnikVtmW7ZXeWTPhbccwxdGagpgYSMFopXcnW",
  "key20": "3LBrqV112Xus6XXS4XukL4eFd87jAaauGdav2QAmLuFrqepyjAqkPCZq9AZpNDFZtSgorrtoaBGBDXLjNpyE5ufx",
  "key21": "2vU1BwuwtGMFtoCvrb93zZLTf5DthQqbMq7EzhdotvQo5XDeKTHFu7vbrLbbfMriBKN2f5UHoCkcyRcJLtErWwc7",
  "key22": "5sXNSNrUpyGS96g6RbVHWdDZ6dMWQhWjXagNyf98AngbYBj3DmMo9o1XWGATqkV4GHazmtzeSeQ7sZAwa1LtK9dM",
  "key23": "2yJ4sH3CJrz6BRR8vcAd4nv6BokYGVQ3vvUd65MpvWY5TZiVTbreJ64Ccq3vNBUCTi3X3b3UzCXY4zcJhZeSvUJY",
  "key24": "4AVVHHUzBeA2Dij5BfyTayWyn8itpyYjrQLxdeMhBmjqGehw8RBMnskDpzar44Dco21TqXLTWe6aHaESf7DWwDWu",
  "key25": "2BCx8PYTfX4RdHgaotFigEB8eKDLv7A34neUjLsm6VhubwiJMmR9Xfd4rgnLXH3ApeMVqPePW15X37xHYC6j5Bpf",
  "key26": "4RT9Zdis7gZUaw24jWqufbd1LQ2sEPPeF1NBV1XS3VgaUzx2U8rwBsRhtM3rqVoucN2fkK7HWEhMCY8MHo14qor",
  "key27": "U6gPXHudUx1wt3cVSp3ec5o3cc1A4LHS7QrrbFKLMa79pQy762cfVQBEKDxJK5NYkdF5s3dRyJUi9WGnGjTSUaK",
  "key28": "5RM2PvmDUQ1qfWdeW5eEmBody4vnNWjTcB9PEJLSc7JX4MAFDvkAQPshkB2WMNqT9KbRiNCXhrrXGULaQuZThGJU",
  "key29": "3VA4pzH3qcYTQLAwXqSn1yqcLdR2JzWMpi8sGn7q9cHGnkmCVntZG4bRKoZiQsgVbwnK7jK7oVJPvH5uzVzTqkKG",
  "key30": "3Xxu4EPjc2QncCpHXPWnsvY2ZSBNemre7kTrkDEwUFJ1MXpeQmXHdomVKHgQfoQ5uWr1aHqmsjRrrBHP6VrAzZhF",
  "key31": "2djtdLP3wRcLzCRzUSNvw9s7kyNAvtWqCT4GHetdB86SUbJjvbWRjqQogPHYHjAwDscpkwGg63yKUwFN8oxu142j",
  "key32": "2mSnBcotA4Ju7HjRck2qpy4TZX4vkasRqedXzFpvP5emy8KRtiA1JMFsovvsqvmBNn19SA1ahAi3WN1yvcWqBRWS",
  "key33": "4iJrc46iTWSp2fzp4zkUk3tpQJzcfU9nrT8mp4efBSPhBakXhd1YEdGaYhWGkCnE4Mj2UXiaYgMzZrMgRLaC7riz",
  "key34": "3uWJaGvDtGAtzFZLv4w4MPRAsxwey7E42ez7ghNciZt4JYmHxpcsXGPeAopPyYYXHCiS3QBjN7XkUwsEFqd2VsFi",
  "key35": "3JfrcDsHnMZRvYeTS62Dpj6FgGLoighHmh88PhiDA1DNTfSTxgYGW76YsBk2dAPfZd7aSzBVBWoCEjfcnT78weFV",
  "key36": "5m1hcyEXfKghCNSsEs17yZtNT7wuoEe3SSBytPAdKNDm8HMxiaAp95eRiRTKQ5swF9DJiAjbRdW6CvhmuEpdTpwu",
  "key37": "4RNJJwuP5UZpqEeZZZHf5sSWnxLSw3HVmxqMN1yjiJaCQTqTdcg7NVSaPSB9BEcyrML2kUb7CuZPvzrBiSKY927U"
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
