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
    "3YCsnbSyiHrmdPysibLkAdm8kfTCbiKfex325iEDJKW7PsxkgnyNxBbS8TsW8256NJZF8afJuX3hbiTpvt5wr16Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QyyP8emqDMSJSTRaWSA7Nzaj5iEbrHWMzvunofmgw4wrnLYRUKqkiLYLWEXpdTGd3KKEaVbe2kpJuEXiL5TeuhE",
  "key1": "5sX7NL2yxsApkuHpMbGSgu1Em8Zh51d9678cufqo9nWYLC13UKURT2dusq7VcpDY8fZL85sT5HMW8p2tKfR1A26B",
  "key2": "BzBoiJ7JLnxcZY3X4ckPxRMQ4Y1uyLs21htWESQxYbdpRfnZ9Pchtox8fga37yzSupfaVKxKpYZhXh2vpuSZSjT",
  "key3": "Jc6PEyHYwVG8NvKs5GpwkqNm1ACgnpqQpFum9voU5kHWWFAevcQSbgWkSrEcGSPXzT6N4RywdXFoT6E4HMpiwFF",
  "key4": "3Nqz1ix5P1cAR21ieKgcrkhDNyCCNPqv3xXYGsXRfdMwJeDnRSVvFotkhLa2pzT4gmAM5VdP2djLqT4DVTbgFAGh",
  "key5": "53tKxA49CiVnJPXZU5xmcLE3dFGcLJxKQBaEJMH97LoR7VkwJgJTg7FZYf5dtR2xBzRt8PZNt1MEGVPU83gdsFfh",
  "key6": "cU62PiubCpwf7doYS4A7fQVmcvF55qje31C4kzqe5cazHiQCCiDa6W9HqNTTdQRP5FyS9DV8UGoNLq31g1EHwE1",
  "key7": "5JU5e53N78KnxiBGLxsXdNks7abp3KaULHqmeMwVjh3MwVh5RUdyX985TmWsRGX4SoAhTu4zTAeTWPbUyv4ZgJ1W",
  "key8": "4efQ6Ve6Go8CMYhgWfHLwzns2PsGnarbENYZCd3zzRNcMZNr2UAAVzygcxDgdiDciDGoVCPBu4Q4h8RRUZKBwshr",
  "key9": "23QhHyqjBupe6Lw3dJEAA7pXHEBpDss1zUS8UtTbMD12SrHT4q7NaHuP7uzSNkwVAM8kPm9568NgwijaeThaowDd",
  "key10": "6598FBCZtZTiRifxtPzegyFRhCALxEXRgR9yPDnXsEpg6FKPJ7kP3bpzeFKPkaHYqpYK86r6s9yTEECnTr5r7urN",
  "key11": "itD5FontW37ScAj6cg6FAtRmx9VCeCYt77Lk5waLmiLrbRST5XbDD3C2zrHGthpm81kCHynBBCE2aNzFvcFyYQE",
  "key12": "5YqDaTwf6b4anEt4ibZrFHmWBMP5x73PHpzwbukJZ78e6nd8VRBYmCBTss887DXpQ82ULtJQGiJVA1NivNHZyBrY",
  "key13": "4H8XYmWCNsJLxiQMsHDVCY3jUKUsFo8J4fYgv5ekL7BLvPEUP3kKai1kKD7h2mZ79T8wabJjumPQygLbUh3Rd3uy",
  "key14": "35YxC2EbYeBR5k1V9LJje7wryn1iyvmNGugdEmjqDmLQzJBQN6n7V2naF9p7uP1ddN9Nf8CkFTh44TX6QVNKZy8j",
  "key15": "2EjrLoHp2NCgyyxFKAhNXeyes1Sw5N6U2Yr2HQ2NL4jJkv9dFNMaSuPV22iQioufxsFPNQpxbfPNspZ9jnAb5dD6",
  "key16": "3NM2MwNQBsDU34D67QpUH67VogtrmDLFxt3hzB7mLx5njm4juZztLFch569h7tWzir2CBPxGXXdL7gWkPv27sbhv",
  "key17": "3atZanEcQRwiyn18efaX87DRmKhD7qkAYXgL9iRckmUCvzZFFtpuEM6TvEPUxf25YPEyYWQHZv4ZU9vxkesh3rhq",
  "key18": "cZE43BtzHj2XYEEEty4veTH2vyZQwW73DoXfi2adf1bwhY7PHuM2zXLgVGaAEQjZwz2zK8td5Ybhsg4keJ2PTuq",
  "key19": "44GoHN49k1o1at2eQTQBPQgGBypfgKHMkemPtgfmf79cgGD89z2yv1wTEjydZxm4x8hjXJpF99iNATfA2hBQNnhe",
  "key20": "3ncudhgPvWWyjJbiUwuEcwyD85TeBbJT1YeDnr9oU4cvr8f1YiZLtAY2xeWpifJqcKGE6Faok74puqP1YWL2PXiX",
  "key21": "1282HH6ytp5MgtR7E9CWkg5myfUGA935TQCfpp5TAxu7VLBh9BLyK7GYjJokAu922jkSFVcJf5hn3LT4wm6fAVr2",
  "key22": "zAbmBPG7iK1Sc4s2RrVyY1TUDF6mHtqstS1yvXQe1Vj7gzAL3DY4pxNEBLQsVaxDP6PL2qkdv9HYXBoCjKrWpzU",
  "key23": "2nk7UXATYxikF85ZNYU6ajushSMjNeeeBapHnJKdALb1AoxVxS1JMpcsP5DaSvx5djngshCS7PMdqWvHJkq3Er5L",
  "key24": "isKTkryADRkmAYRSGeiuoYMVvffaLX3kQ912LHtDK5v1f6NpUe4MitDAuzSXfvYXSreZS9i9nsg1fE3NXhi5C2N",
  "key25": "4pz6BfY1nUMiuhNEov3AhPkGom1DMq3ztHPSuTU1fNmjy1qNfvGmVyd9xq59CPv1iTcDKnVcT7Ze1i76rtxis3Lf",
  "key26": "4VMPkMiXmtzgTJX5kAWws2pCuemDMkePhxvJZjpzU7ggZJw7qE2gRTfhrPhUipM28sTBE1f7WZbZnx2VvDNmxjo5",
  "key27": "2dj8VKkEKphkPudahm277QbERMD6MkJQRCfFXGkLELTLHR2EoCsR2KYUgh1cQz9LSHV1m4j5THUY7NBX2T1opVtC",
  "key28": "2KE9H2zN9Tgt7ZNPt387gkkNjGAfoLX8FXdnoBtfC4mswRTNikgjjDH7z1PXtfkgVVFTqBbjSkyvfbY7joHyejDm",
  "key29": "59jKMP1kNgxoTos9oanCDWnhwQLG5ZFghZnbkeaggQSh74MRdoawuD7v2L74BoVWzNazuSobtZ2LdPUGCx9a62bi",
  "key30": "4Eu3m1n3C6YU6jzhkKKCPddswEgJBxFJaFJDg8fPmgUhUi1jGQX9TqauSsyd6iWsrsWqQaxpfrUSK5uLkuzdMAyr"
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
