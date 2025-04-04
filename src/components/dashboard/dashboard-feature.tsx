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
    "5k2GzaXUtrDJ5UGcyyC5NWCg4gT9DdKRvnwy18937zNVWsmWojRePMoJewor5HaWMyDk3HwHY9skwjT1K3nZJ5E6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tW8ZvetReZHTsHWN3o2DgS8vhRAmotCH4tDKA2wdNUSkfUJQ95u8GBKfgpdoWJYrmZiHPdAsvUViVn9yC3RwecE",
  "key1": "3Lgr9hrreBYVgJLyqN2FK68PWeGNxdvu61aKkDssaCLkRaH7p9SFrAqE82YayqcTpF7SYYm8MAVMgiprTqCxmpvq",
  "key2": "4HuM6G8UKR1ZgD9y964beW3AAovKboPdbb3FNhkPQNdek7SD2q6SCgP8dcsthyLFH3DJpYo8j64tddqphRByuEWY",
  "key3": "4QFMd5eXizTUNWqzLukBj5dNgaPAHTmfD5jYpQbLqp8QrUMZkgUaXFWbtxLz9hEpsCSuaq48hYCTohXrcFnMeqcr",
  "key4": "4Aop1udwmChQQQNGJubGETVnTE1Zqyg5Naa9PHNjCv26QaAGfc4TEXnjLHnhvbBR2EsGmJazfryf1pzxW9vnpEeC",
  "key5": "5EcSUxhoa2sNur2GUYwJyPVdg1NVeUVN6nU7XmUGb3eer9MgYZ5hjXCZYCoFdLgFEM87m6zX3BJ7E33QRsK7D6Ym",
  "key6": "4WW3y4zydXEb33MEWgZfYx9FLBybtyoER9UxLnDGMRVLGvyS4TCLu3rVjuXQvLvUCTLeJYqmxA6jHWVLSypYL1Mv",
  "key7": "3qVAgVkfedmyhQeuao859KiqnRu7YBMgUBnMXn77Dn9GwXhSDP9idqwj8RN7VZCrEodDWFd7uuo7MNHX6PTNv8uM",
  "key8": "46cDXfGBLYhVNVCtdxj8Rv5yb74tm4gUzDFNJzn21vbuJJyv3xd2dpHAazvkHiHhXX7RNkkKdGcErJzHo9VenGy8",
  "key9": "2abri2Z9EniqWZA15knPdNciXeEujzdFUsZetp3gMc1B2dxDb3NWw3V1ADqnBH8vceHopuiGG1Cz5sHZr1intQDK",
  "key10": "2HsRXrtBJgiV2Hjh7mSmxuib2L4TJtwLo4U9E9wctcgS8AN3BXaTyazv4Fjp6LtuCtT2BdmT72cuqMypGbrYtDkf",
  "key11": "33EgPbCA9KELXGNu6dYfWH4eDXzfzu9LTNyf5VUNWuwxREnB9Qm8iGvU7s7hif9r6pEBDprvahA6suAsGcvDPb3j",
  "key12": "zJELoHmmrjc5kWtmtMiXeCjKUcCvpoNvoAETgWxohvSyxs8TTNTkmjGwSK3eaHFUBfkKKN9DECvwqtkMCt9JQNM",
  "key13": "4gSCo6VRZgsVN7H6udkSMDmAxxiS5pjsV2i9Z6NJqPTgxLpHmKR9Rag7B6Hd86uxHt6HjaLHZeyp5MX64CCG4iXZ",
  "key14": "5AnxrdB2KegFFMYcrwZZSiDYmJ7UMn9pzc74dpkifFAG2jtC7NLduE9cjkPRS2iURLZ7XquXAAsZYBQbdxG1jtkP",
  "key15": "5vqq9hRCmgrZzGjC9AsjdtQSM8kXtEzmybqAUhRbxdTdFpko29xGhkhQWT68XVkfHfwczr3kL8wDNiymQfuKVW24",
  "key16": "547q9TxiVHB2BJkqXxWpTs1aPo7YCpVB13YUBWNwPNSHDkxfCQZ4bTdUvDkgKyL2y3FDqdgkpVvNg5Y25pfE4Hjo",
  "key17": "2aGnF2kxbTC8XGafnnXBiYKe3xbTXPwV6ijghaHjDFaoQhFf7P9x2soPFxVUP6JTuRaZJaaoEVyYkP9b8dLBzHs8",
  "key18": "vmuST2uP9nYTHs4jrwdSi5TLyKM9cswTjxBeEJ9iV7KEmG6gV8yqHP9Eon1UYjTXXAhirtNt95yaqZPSVNgCvNf",
  "key19": "2J6BDAnM8k6gGzhXCeMZoEVUi51rP6NFgiKVngjkLaMvs8KYdodVZjnmR48LLk8Hmt5B1oBiv9dG8nWgqQrPp2sk",
  "key20": "3WzjHGmNQxssj6t49d9JgvBo3JXARTHEqBxpa6we2kUyQr7orEntxy2vNA8EpJz5HoZn2JrMGBigaEnweD8GwMwj",
  "key21": "2KTEnATV3B4J8Bot9W5mzudC9PaFNzfzGPpn7QzBM9a4VpVPgtwYFTzecWRrkEGkuzYksAJq2ktc2iYY8SGa5dao",
  "key22": "3upW2nspNeCrH5rpGgsYjKYC2u37kKZ5NJMuFXjNNTu96SVu9BCFfKT9ZMBSdNoyRu2V4Jc9HMQCqhjq8zBmewtG",
  "key23": "2m5wGTr16AX6sALizqQbgcAuFbgBto9UaY49Cp2kRWa7mnqJnUcGfHXGjAH2yA7JhYzp5cn6xgbue3HumCJMjJG",
  "key24": "5zsaSsuNKM5mnCfzh7EAhTcT517QiaPAfdZvH3U668vUgyWeqgQY3yZcyXKfzMxqFv2w7oRNpPuUDmoroPa2R41C",
  "key25": "4T8v743EV2jwYMiVHx9aBNyyMEi4CjqUsTjy2bw3D9qep1oeZ9w99ssJPxdcpBoc39gjY17d2qyv1Q844FnY5yjb",
  "key26": "2zUFmoSKhpCgnmHEPfEjGBUiQriRenwdoTj5yDTbTa1EtJ9NjDquCusnWgXZYRGMaKzVcFdEDMzVTRD9eASaypPY",
  "key27": "3nhMDxSyUjoNGGKgb75m3B75HxRBEdRcnTL8gyCxJ9mkL7f1BXoWADKgeJQ135Ckoz9dfTQbaVvNGLRwfxwUkLaQ",
  "key28": "oaF9HSEEt8JXvjuDYhnQq44in8nscQucCU8P1Z8Q7Qat47iGKS231Ns7GcJ4H4LLWwT5ri3cFQhx2ZRqTQcm2KU",
  "key29": "5ySVTRuVc1iXY1t7y2rbBuveZRGAW2nAEJezzpVmDVL52aDvZyT9SdWqh2sH44tMEjru4PgkRHytvdCCBCiukof9",
  "key30": "FrXyiQngZwW3vY1aZsdsFayC4Z7rsxfSj7X8GCEwNcH6H64wsswYXBYfSEmGjjP2vvUhyA8vsBUhhPFMNSNiCNH",
  "key31": "2BHHxJs1Q54jHUyERNwFmh69zdWsnbfzWRtKJ22xqCvmKf5kH2Y2C4eFpd3CTVb24oNEpqLzkpBJ6s5uSMDNQpbb",
  "key32": "125KZSCxDq1LBSJm4Qggyja3NbqBdZwW6wtsN7c3NFCoLLyYMcdKH6uuYZsUaybmuPADANid3mG92trsCfawvEtd",
  "key33": "36QC98sVu8yMfRZ1GQsCT7cUVzALnEnCSfxTEsX8TD1qkkq5md8rnzws8xB93ZRWfgWjKuXb3yoLQYtq7NRiNrBt",
  "key34": "652sQx94ZHzuGydQRQgvKovEYnP1R6hDemKmLsh6Ke6ByQdejtfNpJm6FbmPRSaGDTuSogVQqLp31vZv9RVcyPv6",
  "key35": "3Ys3UaH6CFKpXgWrQntVuQPpsg5eGa9pEAu8Yxiy2j8agx7phFmwEdFuo2f3ncvEaYdAH8y3pUYPrycMnciheH6a"
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
