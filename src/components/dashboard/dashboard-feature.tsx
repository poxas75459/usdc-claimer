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
    "2tyhqqTjPNWJCU9DjwjJ7EJ47m9aUUiPf2z6g5KLNELjEFkb58gZYETCYo7AvnToKQUmVESQydCxPmoewSxfhTJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eU3Xdsja5UdJFkabK9M8zD8u7n5FGDZ3WJTTqDKPUEaoLLrTRX1GM5nwPekqFZgBh2cUygPbBdm6A7q3MZKjV6o",
  "key1": "34U4AT5f4Ri1g6GpHFkK7oqe9gJE7qfw7GZZQZh9Wcq6cVRY2Em4GFKWudtmYPE7S1g6UmmuP4hdwdRTCWfEMgtu",
  "key2": "21JvUAdo7TvuVryxNwBfZ4aoJFwYZpW3SdXG5urhxY94KJ9jwEHyWBzSPuzN8dfoxXBrN6Ca5fRC2YuhHtqpUtR8",
  "key3": "CgWKDR71vgfkrKLwNBE4oPwHLunkQGnpjbQ9MYbBLUTEtGQhTCeFrp5GLEcuVUdmiJnoCDQNjBQm3BM8uuUo9fa",
  "key4": "4JK9qJiEbxhZbqrvFetXGbKg5RAAXZBgQesqc1GCkVZfXkLA3e2fmyyCK5eT2ZzBMWU6ndqpEGpLRWSxfpr6gsJk",
  "key5": "fjvfxg52V6dxNapXvVd1V3Qqw2XSgUJVK6y9Rpy6XTjJbNPGMBpaaK2mqAGFdmCQ2svRcRWEkcpJFZbksSUAGge",
  "key6": "42HVS5fdUTWWzVVFE6bXNeZLKqWWRpizJmdNMKHuZXLrja2ZbgGdnbA78XTeqdLLUCMFxpNSgSn2Q926P46LXe7H",
  "key7": "5tjJjzdsDxBdD55sLBrhuH5RTxUqP89ATF8ucgmApuEZEzszfmsH8rFx6KxPpEUtHeXnYR1BAxDjnVRdgfpty4Ve",
  "key8": "5dBnFA8mYEGEoMnkYxnuScuepTe24Sekbvw5R4b3zvwvEzBqpFwdqradzenKfTnrbfRyqWrg9UK1AwmGK4zFYQH2",
  "key9": "4NUnb1Qkm9diwH2qNYGhCGdZTAZHebxKmE7DQTCiFSBS56E6GKVaTxJgM6ojDP44XRcAhaNC3NMb8WAroFMdYdeL",
  "key10": "zoCp1y2vYVwxJxbG2R9eMWkLqEYS3vbLmCTi1bzecGZo3FrMKvD24rTvS6YYZB9BZEKngyxM7LT3VWkxW2wFVuS",
  "key11": "58jDeyiWDeus35XEZcNPydsYcVeSvL57Jhu9wxVLrtxb1iVpVhkceLkPFCu1vKCjof7vYEcb8bxjaZTVNZWvYoU9",
  "key12": "5N7G8rhLYz7Z72vzav3dG6MnYkKFGmrsD9TdTZa2GrfAhiQ3TeM6tgtgvuK3yQKQw9kTGnn92WStgk3pPvwFqvp",
  "key13": "34EL18bD2u9TRd8X9bAYTba7kZZo7mvkAdWMox7SzDwnAo7vKv2bgjDxrmzx3obA4xU3jozEdg9aAD9Rw7XVCC22",
  "key14": "2gcivMuXW7gNmZRdNRSsNhRZg1nm4rZVk8QHMzeBVrbUN3Z4yKxFzp7Ta3EtYMBYPvFaiQbWTRGmjWxmHjitUdia",
  "key15": "3ydtYUkjfwmtN2QPQ3BsVciaTVqev4bSz1euR7zTojMMh4xoVD9ughpFqD5FMzyYwXzvqdN4hb97qWxXswJFTTxp",
  "key16": "tiW4KyhmAZ6rFE5EM2pUft4QMvsXPNwyEhyxBEEdKQ7DsZv4ink857P5JT1TDtKyaUKGD9fhpm5uBY9SEw3DXyo",
  "key17": "4mknnQBEssW6iHUWPZDCWx5oVDGTAz9Yj9uHeKpuy2ib7pYkj6Em6EqeAD2opB2nsnZ9po4XM1vYkhMnhEQaEMJm",
  "key18": "4qaDnfLMuKVnNcAM9g8s3qJKo41N35dSPQBy8VRbah1UrMxGAoMCQuS8zJjQBFcb7x9YKiwAxum1KSwuq3C4dcdF",
  "key19": "2VzUjnZ2yY3cUkqoVoCK7W4XpnVdvUY8vMWQ6DC7v9cCXsFCLmDiYsUUabmSSbbRPNiYQXTsCAt1VgqcsWuoAdFu",
  "key20": "58D8ad79KFf9x7XG4nuxEEas3DkXSG4n2PN9zCrgCjjn4JPB8QWHBq6zGwkCHThDTG85nDZTnEbUzdwDCQGizFTm",
  "key21": "5xmR19ieGoVaEPX3NC4vVoTA7NSaYEyayedkZVge8ztvgGGyZfZWp6Ti67bnj4ZViuhvkczgyehtZgnAbBghJmKx",
  "key22": "2Qg81Ly39TAiaXYQJLByfbWEzF2FkuDXqToNfMG7AtozvkRuApkJ53gCymxYisEbnGMrJ5hwa8pCUkxw9tmuAEHe",
  "key23": "kH5WdViay3jKozhCii1wWuoYGE1hzdgwMt86ssDtbCsNXm3z2r5WAAoYKxhA9pJkY2c55DA3AMw7rDjyhXxbSFu",
  "key24": "4cr8J9mzayi6aNTaqexqsRF555zkY53SVrcRn1WjCodKBuVRhN6tUgyW4TfFRWb4BJ5LrzprRJkb6fLXpfCohC36",
  "key25": "2YN52mqLCa48XKSnBMNQZBVLZctLFb7yiWzAXBZP2rQis3Uwotdfm9DWYGeD7DTXPVAL4Js5JKgjjWb3Y6rwG4tS",
  "key26": "4hkJkgtvD33DZkTCP16nhi1BP7czpUHAaa29YmtzHdBDECZY4LE5nuhDHXxXK6P4Dv8aXjbgkAyuSfRgc65LtdBG",
  "key27": "4zDnotwTfh3c6AZ3y3VJi1f2W78yZmBt3S6mdeCmrL6p59qxKnUjjGurrCiYhjiHZRRxNSnb53hYodEkUwPi2Kcp",
  "key28": "675zbSYxHwtyaSCY1hoxK4vnZYevVMnrz48h1jpjRsuUb2haoPWNgZotAs7HRv95AiUVSApiu7cBMgp1kFUa3ybz",
  "key29": "5yPeG6DctGg14cJipmXeSbLLUmjPr7qBAYT8ofyJzJQHAg5KJwvGzsFgCDNtZ1Cs8GpBmwc4fe5i17rUaTXSvgva",
  "key30": "CxYG7btZxHNBTnVj5cgjSMgNqx5MKmEYq7WV1QDctr2aKXEm79qmouSC3BKbBaZhHGGH5JPsqHZaZC3siBpLDTc",
  "key31": "eSmDxymFG28YQXfWTGA8dGL7s5p1urLRVWPUJn43dcNZdjEaGDdm9mCmYZ6vgXqA2w1THfKDQAGmimbbiRW1AUt",
  "key32": "129tUrG38D4MyRQsXyVikoYiydnqB6k3Nc1ZMjUw4ZyMFk8Ab2ZNnbEDNVhjKMNPuuyTchaWSnFG6J8AuPi2V9Eh",
  "key33": "42YF4foaLyeYtMrRYRuRmstydJ7BY4aJBzrFoc1u7vURgYn5gwJzjKZHAdp7tQuxT8CnSd9Ppb8yhePqjqtats3i",
  "key34": "4Ae69CaA7JtZY8CFFcPdvi1p3X2vQ9UM4RxZN9EWQgK4JV5ebHcLth1Q4WBwvp4wFHq9skvfkeb86if6KSnku48D",
  "key35": "55pfwCXWVc3ua4GAuX6kd7CwRTCRkD9p3ztQorNYGMLKz5cpuTouHg3BXSypXZCrk75YhYqTRdTZoqFRXYWmcNti",
  "key36": "3braaySpE8nKcvtGszRKKHkLtRRHiuWkJhezg8LRcJSdEyn254cwPKnFS5oVRd3MzhwzBD23hCdWGC6XJtGN6t4K",
  "key37": "3tKWftzb5vHsjHRrw8g2CU21bb189hafSdNWiyjMUn9LSPYapHg54yQmoV2kzLrqJ3CgkaXD1yhUS6uobz28zRpL",
  "key38": "caw7eAP2ijmj4wqz7DyJovAsnJNCu8acVVKYa9MfAbSefQunVnu2umKrHf9oU3wnhH6aknK8iR7dWKYiGfNFYyP",
  "key39": "3ddUpDNM1QAqJAjBsTuZFPwqsQ8k7XWEL4M7tWGyStRWmbyva6WdQBVPYh3HgdLQAG6accXzhAXbtYpUohM3oQWk",
  "key40": "6639cUQjzJC31GuzMJJ67zQgiKfUAhU3Y7nhi1PSD3qSpT55AE8LX78B7aZyQnFM3eeinDSLtSRry2DSZGedKbMJ",
  "key41": "4cig3q5LFvfRx2AQRZXyA7vyu9184DcU7sd5BmoXkLwYPbBRAjpDDHuoGeJxFjDe7aPq1yUdXxPBeaBVj8GcQ5eL",
  "key42": "5VZ7En7JKSeCsG2XrvF7JdJFG8oXY6a93Dh5fAi4PjyaDxfkMxJt8kL1VPD1MtKCmNXmueVWaiJ92tdNJdaoNh9g",
  "key43": "zfpiL8H7WtS4LSG3jcjDdvCwB6idvqaWF1jtH79H4RKWSeoZdCekbcF9dxjyahGYSx1ZiT8sRHuCpiudPAHSg1T",
  "key44": "31DXaCg1giktUUwXM9xr2LwHWapg3Ang4iShSp1iSiyUV2reZmmp4JMQKEgEzdpCKco62awb8rS23jSD8yHTy9Vb",
  "key45": "48sb5r1iV2ATfq1B2bZAQLYPdTuVQhm4qQTRsc9A33TcNNMyeKqhQXkPet6JaXX7mmkU2Pz5dpkqnGBXoHgv6oTF",
  "key46": "3qBRyiwdiib8UGP2mTK3ZdmcRSFBVaQrzEXQ3rEYFpHfk2yUYyjtjMh8t1LLjS4Ra194VCLyWctPKZkkvHpzRv5m",
  "key47": "2hY7jgwJDbhC2CdxfZPtVL8vSQVQ5Gh3JpJ9RBgqScy5JbNcgMq4WQrRNo31LFuzaLg9CajSc31Tgn9k6Q7YvHnx"
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
