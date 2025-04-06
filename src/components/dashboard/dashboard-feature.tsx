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
    "3LUogyYyyGxLX5zk7VhhctFzTPrfgxDiyRg3sFiz6jYPZk41V6UjgQ7qU5xeP3K4Rk7eT3JqSX88MtG4USGQxkYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KhzJeeecWdsCMkRSj2DKx7XTh4R1KMMMuW4zif55dU62155N6B3EBf2cwaMVFLxkesMhoSvbSkYYYBSMFsD295E",
  "key1": "5p2grRHf7Pe9NSAsirD2sMUJ1M2f7Z9edeF2ZPrVWswuHxW4zz1Zn9HHB3ZFRppdJUT1YhVPrnLSVXUyLkfHQqUm",
  "key2": "3oqv4CGK8wZvWRM4tE6x1SSUwDkdXvf6GSLpXHhTro16jgia2XSMPQ28AELRvCqjyAb1s66M8TwxpTBhAa4JYxae",
  "key3": "4Vy28w9apAiCsyoCUxi6gbjahLYSywhMjkANbr7EsSeTkLgMD2XFqJNLBQBs2G3fPK14pHaAjqZoxKxRaZ1QrKGq",
  "key4": "66qTZ96oCpb6WpNzFvuiv1WNS7FLThkWbTBm7Qe2886wehFYaJY4pkLcBMP9ejk1JhtF649cwAPXFSLHkUKpDBAJ",
  "key5": "2Abf5erTCU2rmPHjA8a7QWicNjYD9SBrvSmXHsch7gtc7Kf69gu9rD32H93EMGTnrpVhNSuoepMogUeUjz4c1Jes",
  "key6": "3vr5biPEZpdth9mf562tFhV6yqjRf21MWzkoPuiNJQNV4swYJYou6fBjeEGjjNuJQcjbKkEUHcoEQUTDrNwAzGFJ",
  "key7": "esxvvncqxW8ATWJ5e7TbETZuXDeV3HFNAbwiw8A8u9DRn1V6r7EzUoWbtUmNZ1KyQ2twjKBBvypyRYetDutYdm3",
  "key8": "zDTdmnZKgWNdYKaizdGaSrGXNA6vg7VnVDp27YKBGAPeZ2cGEBtennzuVwbRapEV2NyD8SM1vTo7YMM6ZgfvBCk",
  "key9": "5M4JZdvtb7j3iJwnXUKV4xubGqNmg51bG5zH9E8ui1UDV3uMf8dz9V9UZgpEX636DaYvWP89BJR9PuGUxvbSoE9A",
  "key10": "5Kp9daZjDts3z8c7qHMNQh4ktFbLWhv4dNtXB5iaSq2myoZDpncrkKxrgNQypH2YNCQ33HDHB8toU8HZWy8CPPDq",
  "key11": "4X97Zy499bdsnoyXx2rSyyz2jSHasK2LuKbRsho5iheW85pbrMsg6GxEcYzRXewnXntZCG5Y9D5jhbBBt6pyDTRc",
  "key12": "2gv1pzi4A8ToDLGj5FiVETTT8huwK2VU5zeqEmsmk8m8my4b9QeEX97YGVrkVnuX7ZyvYDRKJq7K6PfFvj6ePT3a",
  "key13": "ogch1HbmhNEVhwPxsATSAXCdAKbKjpfUvfNHEwFvX2f6xKeUULXCiWtuZbMG1KqnA7hRBoM7EpTLvhSSbFY7s72",
  "key14": "4j7igA9RPpBqAtBQAn8ejeFFooVEuvaaziKEqgtvyuA4AXGxLMq6VuLdwtkzyyoVr82AgpXERSXHsbtbLwYbxe1x",
  "key15": "2ejxpBZJtQ6JXDmBHZ3S3kbMBpJeznD4u1ddHfkii6e1nJ865124jxX42cbYYJKJcXKZ86FMw3vbE1FYK4EV6YtY",
  "key16": "4SFwhz6gQQjmttgQR2FC2npH7DWwtYykNpFFRDZd1u6i36QNVEACV5GLAd6fA4X7AH4S1N9Jyj4Fi3JE2QAJwA4z",
  "key17": "4saVRfrqSsnB2KU1KM5qNjMhgGDjVCr2rgWNTbpSH6suZ21f7js6NLfa4eiu16v2pL3FNqbWraDFkzc8cAwvyU3x",
  "key18": "Ukq1LN6UJszUatEHfgCHed8epVr1m6RWn3kGLuwAv94RpWkBLmEKz86nzbNKwz81rpJVfgyj4wwe6cQaTTXAyUt",
  "key19": "4ZrezxVzPvPHNNeXYqoGcLXJXJeKUHWqnBhzteURjjboQ3jfB2v69dHBxywZHCwVUiq6vdL6ygadMGxd1tAHu5H5",
  "key20": "4QQ1YZKG7gNNuV3RRU9BckdLECRRJyKEFred8M9y2aJnGHwvnrt6JFxLS9NUFW2SA4V8bvgMryPEhu1U8icV7xGb",
  "key21": "2z9J7MhkUwUR1TXZSMJn2GGdPJU2KWkuxbSTryBv4H11TGk8D5n71wZiYqBEaTsGsrjCQZ2SvUBoP1R4eTZrBK3Y",
  "key22": "2kfwveXSyB8dr5N4xA4kfS5ovRTnpbiepFdJgwx8kxG1JThh9iYxRf3LnvHBikBTDSaDP3rxCz19iQhMkwUmS2eJ",
  "key23": "52mB3fdd14L6YaseL9uLK67NRpyYuDvbqNKDDxn7HEEL6223D71cm4xmGGFmyZC3hbVziTJGaZPiejAR3NjMK3nD",
  "key24": "2CFKxmiCnLSepLpNhGKpJnvM2LZRH9KUL72PCtvQLMHbkKmSqtDv4x1kA9u1NWYZyaKcisGVRASJHRNggKfnGcbg",
  "key25": "4Ykq6vNTQvVBrusLDCL69hpkSE5erZ6gaNVuWhmzRNgmfg9b6dANzWXB9T8W1FFwPezDTdnfJSwTaNZ2moaNZXyV",
  "key26": "SLShDKMVeXdjmtFi9bJEvEHXpDz35tZGkdJXvCvx8navusn2wa4ePD3EaUiGKJ1XTgmPyEHFqESwZeQKdTofz4D",
  "key27": "67n6Fc8AcdXnYXEs1oJRGcZqq8CAcJVSEYbZhqdTmse8ZZSfqf869AS8QmdjAgkQvi5PkT6jVks9JqiMubv7z2HW",
  "key28": "LvFtfAETZ2yKKR4jie7HKFT74pd4qrjXsWQdXvZDu3xhP75c7tMvdzM3YmxvHwM8yPWWefg3SqgVRxbhH6PakWq",
  "key29": "5h4zkMxuoNkL7qQb6e71kvcfXsBNhqaDyUtRr1LvUDD6PBpa9esUiYDZD4Lr66j21jNpUAQq54E5vWvu9mrn9Bct",
  "key30": "3ZBEDMmJmoLz5PGWzDqU8sJQ8SD6ZHUeCksD8EFayA3RfBmUniwLW1vVnbjM4XY2zbmTgwDzek1xmCv2Parkf1Rj",
  "key31": "5VXJD6cfGy6zocAxgUFEXKv9pV1wRNBrXvrLYgfzjHz2nhM7UEBzoyqrX9HuxhBSHX8FyQVzTt77WhpdDMaGtw9w",
  "key32": "23m96zFGhXT47fukeYFLPH5sjCkBvDQ1MaaLg17jkEEzfbXPPu1amAFNe14GeLA6ikPS64QkkTSKLZjG4LYBQzUc",
  "key33": "3pjVTGFsethWrRRXxpoomnh4PYE1zcmDBtdbDkQU3BzdWFac3SraNBzJXdre8Ah38C8Ak7xugkmD6Vzm16obtZVf",
  "key34": "3eGqoP21DjmL6SQpqhDxuPENuWagd9quZqc2LqjAr9SYCfCLjqHQvE6Yy5oYqRSy3ju7zKh4Tmoh9w4VXAgazi85",
  "key35": "45vHo4aevuAVUf5ko9WkL5PiJpSJ43ZubiLLna1GcvUUbpergfXjZZdLu8NpmbZSbQLXeADK51j9Hi1GaahqLTk2"
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
