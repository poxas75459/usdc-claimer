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
    "YJyM2Yedp8u91t7SnkreQCLvWhC6YkLuxxSBz1hVLk2Gb5LBN7A94v5uCPfeJcqht8w2FnMhgUCbZxXoHt6QqHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yFAv581mNPg26rcnXZQ7c926S5ucxSTH5YfAZZKX3hpFyrRjyzNvwgnE2VrmLSwoFPdNrh51RHjsAwu2N9oKM4s",
  "key1": "5XkvFFCCm2xRNFrVSRKamLFyszZ76ZK7hmRjymzG2gooijDUueQA3osZnC9UvA1yzx8x3vryyD6AjsVFKALQWfZM",
  "key2": "5Xm3gJxh59NcDspsojK8BukTGjUrCc2PrC9rK31hPn1MgeNeHHMXDNH3L4idabxZbn4EybiYY2LV33XiDtMEZpsJ",
  "key3": "5hjswX1u2GbczCwHdpDngDULKxRGTUnnkh5uu1hk9tTzCHqzMce2WJrMtv8czBEP5shDzua4w3tf7QrdHk4J8XFz",
  "key4": "2EfGcnDMpDRDffMjBSKEc1bU86pQmtmwpmK2dPJbzbEGVtLCC3Bunq8JUA3bXTtTLSRYa2rU6UQ13E5Y3jdSjMVw",
  "key5": "47JY9at4PH67uFPw4XCZm44r6Q9xJtrABGc7sQHpoYSuoRTH4BJ8dG1NdyyDYseDLJ32Y2J26qUFuhKmsUaSGdx9",
  "key6": "3xUG1VEyGiDSiUayR4FuerEokoHPipkSwW8kQz1Hyr9G3EiugX3qT3J5vYqtHWsF6KQ9FFcgx3PeG2cJe9pHQesc",
  "key7": "2vkjSosQw5MnyjmVtYPGXxA43MqfxKh1xG3YxHmLwgVG936q5F5j2nEGQq1Eqm5FvJMX5pogz5LtxtWhaGR6PXEo",
  "key8": "eccEavfQhDFwgaRkZYt27MmSd45wsKyuCLEHtiji4LeQXm8z532X6hRd4SPPdzkYd8CtLupYmmkXcYfTiNM5cQa",
  "key9": "4tUDNZDrB6JekAPXKReD9qhExTTjQjP5aYJxJ1tLoyc3cphFDcfR8RtDhNmDjnhegNh3xEkN3V8iuvhNY834zzdB",
  "key10": "3HkioUDyJuHVYw6sp6eWmsCWjXkL7E9nfiBg5SzUa93nVJucT39s2eACfHDAtnM2eyNX8DFfW712m1N9AstRu2mp",
  "key11": "hKQpa9FxgkDEWQPLdguiPdCHTC9FjHrQLRu92p9whrPmUBdeMJUuCC8owv31LZAnvhkwKb8g1NzjbdtGtehHQNi",
  "key12": "22Wp7i1o9V5c3pvj1xcsqZnXdRW3kzD6TtkUUdtdeyePyWECnRg7AMEjw3mA45RW51BjSjxxdEQzMfW3ct5nh7DE",
  "key13": "5t3Hzkyb1688T1vMnNNuYpvTe5zfyJpEVQ3QwpkoPFN5ZG3c2gwrApQ2cf8yYy7wSTouHt4S29ka1wz3KgRA4JWM",
  "key14": "4qVv2kMfxXjwEEnZdxJESVHnshRTEmnVmugRAuKhXjGHjo3EwU9VTGb9GKoFp56Y1Z85mcSq8Vhpbkz3uDUhGxED",
  "key15": "5QQ6pCiVQ3UZhpL95B3huo2Yde4YrLwLz63mYQwDAT1aFa4UB3MpST9JJMJvs8SbSVdnfPMo12bkgwBYPxNoSopP",
  "key16": "2jyWKyixN2d1455C2dCaoMnvm4XK5RmH2eWpRDNnTwxMRrJkMomsf9KHQh8d2sD8UjC34xyabAbaPDQpZpbwgJ1Y",
  "key17": "3DwtLysbZRiaNP9YoSGFbWp21dweTacsMeGt1oRvikaqZsiyYhNwGwg5i1QY2c6ezbuA4ZY98gym4mxUhmfjpCKS",
  "key18": "4DuamH1SfYQDVdA7VkCEfBZP2Apksev2M1ZeVYdGujCVKPyWEJ2H5qdzx1RVYAhVnNnLXx8snFWsjQscqhhDHYQH",
  "key19": "3nrS55Syz6JFp3eehqadb5KZrComTsU5EFpJijtjaVt97vv1Vrgvf8DnHn5V9MkR8HDUrdw9WSjXoyCzaD3pTP24",
  "key20": "3p2piU4pJzFXE64qJpd3yFBybNRBrh3jgQvdYVJYsDECXmV5HA5jCwfDUiwFFuVycZXTa4jVCcdhWE7XV8pyqciZ",
  "key21": "3u2J6oEySyVFhS6b42TKfBEnWbQaqVfjwgo1yE7LTbmiuQAGATmY3JoFiSkhUMFsbRhuiBg5CmJ4qp12ApB7ZqGb",
  "key22": "cKgtXJBVi64BKwXM7chTUtqh1kNLDmijtPrgVk3z4hwJnFJDtMmnncUWmLVwsoJP8oYF1kf4GtTuGH8iGJkPoK7",
  "key23": "3PyTyeRKv4tv2fMvHzVKHW4Nnroks2mo6v2MkXahVe6e7fJaEvp3htNg3KbjwSnssLL4ByCyapncNTExTvJB6UoJ",
  "key24": "kxTSKmTwDm1W2n5iV6F9RgmGUVJ9FTkge9si3fc4XBWE1B45X7yCK95ziUm3vKdpq1TXx1qvDD2dHRvKBvo2AYm",
  "key25": "qsgqmx133XzBxRTSKPZJf4t6Ha5SkbacTCoryYH1yG2uRryHVbxQFdff4kojbM1CXPu5mZy9sfyqCpXQbnoiUkE",
  "key26": "44K3zrveocq3Q6ZGgk1svFGVKnybM7WTF9RDjE3vz3PnzCbeTLrZLFjdVk8e96URrj3hsk6tD5LTSKDQJC8k9Cp7",
  "key27": "49h36MzL4r5mT57u8RUB9wtyR5xD7jhEbcGwWBJY9LvkZcWx4PqVVjxL3LkCEkfsoES9B2JkGpCnmX8RKSuqinbE",
  "key28": "5dKGhWi6uVdDTTwAwipm83TzqxFvJ5TRTeGuw7Z8UkL7SUXu82yEq9Cm1Ggy8HpEPAeH6C97vWcnvjhTEPoJRoGB",
  "key29": "zStAEFSTPTo1VVmCbqV2pqYrFn5rXqzEipH8CUZ3vWKu7sDkaoJrWXPB7RCUPJpZ9CTWXodwtuX9Nsypo9RFXQj",
  "key30": "4U7rcnB6HHbr2duKwHQWwtz9fBqkTR7p7e1MjivEcuSWjphSnSeMzuEJA4PTM77zThfnMbxxxwqVS6EoBAvPfN3Y",
  "key31": "63huYsyP88k4r96JYqH2qrTEQ49mwpJidPFWnN6qCjYMdA7sTQaXfkqYgu4uZGyorNFdJVcfEC8cL48FoFrwqymf",
  "key32": "2xcpxGuraLWe63RUntoY83JQfF6vgWWTHF6mA9uBWR8yURoyGEn82cyCkZVXQXgT7K8CQGRbtJTP1V1UcRmM89Rc",
  "key33": "53SPNZmJLbb7uV9GpNwGLXbj9rzjFhJfAhmHhCbVXnQHujfreeunBYyCS6gCChSx1mFWRCqGVkkbWVSyxmwypxNw",
  "key34": "23cNEm6eNZk1TgVZWsusfLQEpL4woJWK6ecCcFMMXSfmMZcnMYcRMjj2JEcgzNN7EJEPefGHJ5JztrNHMLP5kv2P",
  "key35": "8Bncag7y7edLb2ueWGrLuBcYsixiSRGnFX9mG1m45qPcBKiya7zmKTYu6uQJobXYyGBhedrnvqHGGwZkct75p3y",
  "key36": "3hsTXRS5VjKmda6RzKpx1YVmVyyhJhLiDn9gfZwZP4TBpNgSWK5UeVv2u7wz6nhReesRNzUDPxFcwh1deMiDKZS8",
  "key37": "2ZhjskqSDvozmnyYypNMaPe64mABK6FsP1g5o1V8PNSoALJ1NZngM7XAKn2bugya1tZELVWfpwBsRQSidy7N8pe2",
  "key38": "4fT3zqZbvAZGAtmDf3LjubjNZKYjMWqzhm9JoZA8qYQUyvaRinj3vRPj1184DH9cMwNDBfaCHrYZKSnsbyHUb9Bj",
  "key39": "2Ua3eoTeyFwWJyxZutzbzcVCACLsJZoqEcTJ8mA25MrezLZ9mckqu4PCiWy4yyNa81soKSVc4o8issfSyuJh3QXk",
  "key40": "5wjryokgmCZUEKt3emy6RrRSAmhfXoyDtspvVKdR2qwRtMvN2ayFdLg1hVQgKYjcJ5jzpSXZ34xXtwgY8CU6hpDL",
  "key41": "3q9Yuu6kvfz3Sd7tCCngbQTE9ttkMn2Zr4nRjrpadS8oeEtuNSVvvRJuguW4F9ecsu38WeNct7T6CeDM5mYHDUHz",
  "key42": "3V8cdfvhEiXeHjWaCbmXFKv7QCKf5Q9MxnPA4YBS86pWcE62ea9m54Dog9whSJQJ5XFPPRX5NtujtBDeYz3B3x3S",
  "key43": "4NgHdPjwKT2J5MSrdQjmqQqHfYxBWxBdQVxgeYTBtyfaMbYm1Lyb8rZELuaARm8pGWBKMyi5j87y2vDD1D6gwUFQ",
  "key44": "3cmuSWYW3WHxw4hG6eyZbnmjhSCsvGyuQsVJu3qeWyNAmnmhQcT6LU2pQKgUWydB3PrnyKL6k9Z27gmC5fimCZDn",
  "key45": "2nchoSZW68cgtxvcM534MD9DsMFwg9ZXUguAXkXoRR1YLHGD7zUC1W1ZmK6dbfWTyrhbm3HS3HQRoKRhZ87q3u2Z",
  "key46": "5qc45hQP58mcVRZJ8qC8sqELzF4LKZ8D1xbgKUDyFsQDsKtsYAqa73SGoeQf2fw3TdqRGokUj7N5R1P7Xsj3WoGA"
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
