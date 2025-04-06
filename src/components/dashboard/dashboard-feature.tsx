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
    "63aUdWY18wSJJmndUAdYYotGpLhai1UDkXiF5Xyk9ETVh14UsDXjsJgbwvsfSFm92SM2BLxiDHJJAuMSEuGxkoYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LmPxBgDz187zB1Mmx7KWNCRSqV9FMcxFtjLX5ravX25ybxgHNke88mf6efPFWQoGzCbVXe6hw1Geai9i3s8AEKY",
  "key1": "5LWeHjHuRBqDxFgfJ8fe21BWHtt8ZUa2yRAkFHPeaSGaPwDXZA6oLVzEhxakdHXsx726vZ561f9njQFT66rqF3To",
  "key2": "5LBk13dq5NyuiWtsd8UvK47cnAA9YA4zsAE169QhnV2zt63rYKDQULeJ4mNJCRJvY3ChvoSnZ4ik4G3Cp9vBJQ1p",
  "key3": "53bKBdJjKEJkBMBb66Q5FinxZKAb3uR34PAFfJi7amgPK4833PoTiDx81xjVaSgoBwsix2Vg43h78z7PAfMgxGhy",
  "key4": "5CzozZYwbzHXuhetyADsw2uMGSj8Ct93ZF4TeDzdfXckV5PJfqpWj7j5b3dDVeaqAFSZ8KShqKBuLizxLf9cmdFL",
  "key5": "Ej8rEQjkyi5vSYfte9uHp9PTQHcaKVgokiBs242G7YGAkKmXtxkqW5aJafxRCbeTvQroF3iLbcunbp4U2mvHNrU",
  "key6": "gJKwjAUD1JPp7ThL7TVbn3RcpSnS2CRxwKSo3zmFVV3Nt7sMJ5MyWzQP9oegpzbdVM5n3BraRywmGhb41vFbmpv",
  "key7": "m8dz3vzoUGrXR7yGZdSXsRGB7DZWD7ZhwKp6tRk6hUBVqZK4EHhFzsQcoz6zbMiLMGFbnFm9vWiff7zdn61tVs5",
  "key8": "4kp46uyf1wWMCPHFfFeicB8DB9zAGEQTv7UxHwYVA8nRw71sfntCC11rcjBpYabAeC7MqdxX2iBejqjKGHUkQVSX",
  "key9": "2zD58k1VcsXGdytgExjzA3QiFVba8QEudiUNxkDkVHK2rF8EJYkgYy4Dk3Xo6pJ9vmn55PC7d5mSfqgLkoerZ1Wm",
  "key10": "5cMqCGdoKPMDj9ERT6cQKaTLVsLsyq9ExHkMeY3YroAw6cLcDuaxLeRnrCrHVQ2bkheR5pUAoRgXnEDEuLQGHPj3",
  "key11": "4Wh7gLJZsTXNQpsJHtcEdwoY4eHyg9KdENxgjQdoXtMWW1pWChb88t4asJqQhuqATpcAaSZ2mNGC525eFAj5zuFq",
  "key12": "3PhhASuHfWSEP4BNRAXu6YLhPMftv6XdPJc2aPeAW7n4RrNtzV7eroRgy26v2xCM2rDoDiH7KZKoJWHQkjY9ixgd",
  "key13": "324ic62i2mKusFizxXiPa5BvpAJtNyFRgXGhQAUqws6WnGvqxkGN4SMrtppvCTnwtQUrKaWq1pP7FfrfATDx4kVc",
  "key14": "3LRe3KWQdDWsbRcr33KDpXx82NjFhx5qRmv49Uu9qtLgvi9b2X6axiTsZ3hupRu8ssuRkx1vWZ2QxnWGarCFwNBP",
  "key15": "5B2fgQpDJJENvznpcjoP5RexC2JWhyHquJKtKFpbefen4b1WCFYUL9fM1RxyaWMGH4y3LVhL7ToJgGfRmqn3XTsD",
  "key16": "4HuZUL1nSkPqG26gzo4cGYAQd8VE8KLgyYwez8DPGpgoAT5WNw7FSryi1qq3pHj5576qxVwuXo5LKd6QJB4CqQ41",
  "key17": "kL6F4EPnYKYfGRGV1S6vKnNWb268utvEaezqVEzYZaHjz34Zif7ZGk5JafzJnacLQLn6zsDoJrVeUc13L96QVbw",
  "key18": "5tTzr99EPxA8MmRJKCfLKbXEe5dp6GGoNVLTfN3oLbCxqaPLjR5mLeB9tgBkAgTuAYjkc91um9JpD362KKzjBHNm",
  "key19": "4G8ggtcBriq1bMqzyGiNRKPdSbGX5dCNEtUuHKCUTJg6cvBTPHzBs8gxoiyZVLG2o2Q1Zz1PiYwL9r28GyfMu1Et",
  "key20": "6nbqVSVvPGwXqyNCT8i5ZUt5Azvrto5E3cKoy5MVV4GoiVejSsd2V424bvDxnbr8oUgrH7s8MPr3sEX6zCNWvrA",
  "key21": "5HZUcPujgcLbUtNrMWDdBBrBurXTdikD4G8Br5uFQJyZhTQfnn5mq7842EqEkEtDDZsJXykRWEMzMdJAW3LULsYv",
  "key22": "44dgWxBi9Djn3rosbrNdpYYimh1R1chHVpe8Jtj62ypZbX1H89DWYWBPDVdtMpX1QL2qpKHkFrFkr26sAAWFPjoe",
  "key23": "3DN5NnBEQ9pyY3qWthjjrsgcqr8nv3Pu1fCiHXvaQZkwuxwYGiNdPdudEpKJeGrg1boLpfzXCDF1NXWyFj6Agd2c",
  "key24": "66jqZf4P4hmEhAPNvQcLk3qkQuFare9A9XdtFZpDZ33UJNMCbrrSd1DVwFaZeVsk4VHBh1Z1LAxzMbPnyZH2imCJ",
  "key25": "46R16JCiQu7LGqJZoNvYUGZusNrsgvaRvpbwF8HNZCkJKmfatdwLSL2JisxkxRHXMKf6Xvyv1by2PAYYHVHG45c9",
  "key26": "6eUeQttTDRma9jNKKNppAwvzQpa8u1vpGYF3NcxZAASzePScCRndh3aapWCevECcHZmVRx7qFNApLrJQNGBwSXw",
  "key27": "yKihMU1gPd4FQH5foLfMQR78ziviBgVEt1A4DDrhGP4q4TZWWtJNsJbjLFieohK8eiKNyy4KqhpDyAYY2N42zkr",
  "key28": "5TZxfTuoUxoBdbMPGmLSfHURdTCo7Pmafkg74AwQ8RQiescMzTNpVu1PhACixw3A4Wq5A3GujPuzUMiRBx7djzYa",
  "key29": "4Fs8Bn2cuptFtMpeTWRGyxHd7UShDSqxnDLx76EXATsWjxECNFN26jyV9ZBU9gauWEhNc1u1gfSTJozo7AV8dXY5",
  "key30": "4KNyJ7WZq8t2FzZ8Q2zrp5G6XcCZRLPgy6goRT9hudFjN6B33ygrU9q1XkpiGn1gnMJz4BjZFTJEQTSMhfJe3uJN",
  "key31": "4HVaWbdqP3LG9USk68KZiBr5dFKro2Ne6cyRAMbHSrbrdBw2JekbpKH78YiTKHunpdAanpGbXiVZpJ4uNoK8KcAx",
  "key32": "4ziW36SMyunQLXRuiJDRo2mw7VyXpxzMZaXEUva74ueguqXJ4RLmGuWBoE31J3YsLuzH8urGvNQ1vMTyxc44u2E9",
  "key33": "3gy1NEAH9tirqCWKurGNqcQVXksaBipwRfxmEKisfdVD4niYDz1LaMHZEzsKeuRWvrk3k9g37fa6zoSQ7Tztp4Ma",
  "key34": "3SCoedgfrre2kX6nW7c7AnvjAZCd9vqsgyS1VRa22SRtMwVuNpp3zuYXc6PMCZyTiGJ44WSNwsy163AHczJSyQGB",
  "key35": "2458AgYqFPBUSf1PrFZ5WZypWnm2jzSMnTwmqQXwBBQZioBoTvvBShFuVRgUgqfgUzdnJLU6gA7ppD9SkTbUdSbb",
  "key36": "5HgSuCpAHLib2HD1fRgqQn4txGKm41jEGrnP5iggUYyWvfrPZ4JPJssbbPfiruT6XyWR23vhPQN5S65RvJtfFBud",
  "key37": "sPcuCRsKdendtdtGbBi4HzVPypVb85TJm6kEWnEZmJDxUckxPZp2XuLDSgGrvTAoZpDTt4AsU4jLHNzJMc4zmLw",
  "key38": "jHieZiTJ2V8C7GVvXuCqW4mvW6m7zn6yWhHj1kPUAP1VAt4XU61PdJ3DGdBVxktgLCBQC6YRddKyh9KWQqw9jdJ",
  "key39": "q8E6HP9Jd8ABSCn9YrK6jLoraPKwvAWFqMkH8VAK6cHXCxMQPUQxSADxfwoBzSNXPp7SYwNt9XS2YpXUgpJqksC",
  "key40": "5Zd2bjr4tRczve2SqFCbTDLL5SuZqqC2z5jDX2kjhiD872uPHoCtu8bbaHVzqRacjUhuNhRtVBLV7ocfADhKMCLr",
  "key41": "24mG3E9UAyfZ2FLxgUyqfkeRt8cEwcdvsNX6E2bVneTT2CNSFgyiXu8A2EE3tP12xpJ6KpPPkRq5E6pWYuFXvMXP",
  "key42": "5vfKb6QiVWeKqCDgVC3nmyUEYda6sXUkQrL8a829J3sJVurVvBou5uC7BYHUvcsMX6ApmgrhEpK78viCjKuaAyWR",
  "key43": "2Jyp644GsdBtZ6CjFSuooMyEbxgC4m8Mug34rwEgah91kBRxLfgnepUb9M9LeseA1NV3d2or1Ht5pV3uA2NJ4M2w",
  "key44": "5Cbs5xcHSPqRgw5FCS9myfNFVNGg7ssPfRKmYhbsgfRzYXTqD5QtvjVaiA2wRBd4H6yxvaY2MWGFnkwGn8HLkr62"
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
