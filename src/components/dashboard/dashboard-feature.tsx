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
    "5hkSS1QXmf3tSbg1cqBcWKoMJYBwcR92SdWPtwBMwi8uYyBEJeqy2mCw4ZuQ56ZF8YA8MGpYLuK2oMCbLJRKa4mb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BAW74ME3dJmpgNQDWTFK16FjFjLtjtW3WwHpra4CLteGA1Fs7sF53xTpPRdsz9DqFtx5zMPieDF1JVYLXgs5GhJ",
  "key1": "5egWRTB74arirAjojB1rPNw2DN56ak1soUZpyKmHwjUcQnJ6bp5M9CmZmht9uCpZueJzEYHhd3WNbgcqpM9cCo6R",
  "key2": "Exn2wDZ6WhFXSnD4rmhVEzUcBxfqkm1VWEmGkEVtWvc97e7rdayx63ykiPXBRT5KDdLCjQdRjJyPU5S1RRQHiWc",
  "key3": "333LvxdadCYDF73cWeVsqAbz6UWY3H9GU7dWBdNnZ1qCt8UPGa3d9StkC5JPxqByZupXH5z7jk2PJc2q78dmxker",
  "key4": "2YoHP2jhNASZtTAq5bh7RvncZT6Tb5Mgr89zcZ149fo7q5BCkSd1MUZX7PXvss1tzXeAQ7Uw1VPNYngUAZW7EPWr",
  "key5": "3dxGTYL6d6nbFvNeZVaUTRp6E6SuJpEy26TAyZhrkVa1WH4dnPMq2qDfMQncv9WAjkLLdEBdyDbzNg7zWinEz72D",
  "key6": "5eUkgmUPoskoDH7kxwhnCcf2f4ht2VTGiDt3MXbsoyt2wiT6hodZW4BRUv8Vn7YoC1MHD4j8nXKc2Ryrb7px34Mh",
  "key7": "4qCkmRoj57jVdAweGyhpwYqvyGw8NGQRLUGqCmVvU9m5bppUFXcCzCAihEr76U1eB9CW6dkTUH58Avki2E5DR2da",
  "key8": "5a2ar9TibWE6Hnd7CB8qQTnKptJ7JXFdPhWYL4xUVtx2haqkYmdmPTaLieV3KDAYP4emDmn8Xf8ch92EvLD5Yeox",
  "key9": "2P2Yi1YYKjksPDmuzyiNzpMxPxSPC7wKJ1GEhGLjf3N54HBQrBiZj9y5d7YHnWEBo4KjK1KkKm32YvxFoyibAZe7",
  "key10": "2C6g6QbvH34SbRNMdDqf5P249SouZyP2S7vKufyAHFY7KHbbkeJva5s83brzRMXodup8nJd1pfRBJn519V9edUZf",
  "key11": "mSHC1UMGWhV9uNtwyzVxAsuCVp4fGLdfXDCdPe7kqyFUor98DiM5QYSHyVfUMwUV6nzCiDQ9Xfq8k6pjyevc4bc",
  "key12": "52znvfsHnoqu4J1Zchzw71NMArXnBRd1uwt2Cdwb3mEmh95PPt7GAo8QQgakiieWHRi6dkVGVXtEHxC5GQ4RC3mm",
  "key13": "4tbVSKDwE7dHSS295RB85tgvecQpMHqjsCxJbV7HJgurFh9Pt7kBReyxPirEak7Ncddgaforhkeu2XrSJyaD3gHZ",
  "key14": "3RJ6H1jV5eq3g4ZryTaohoxQKNSNM3as9yMzpd14aasvTBwvZFAUVwgo8PhK6m54cAPTmirncon44xJNMGV7anXL",
  "key15": "28BsHnJnXGj7GMgMUkQdMCDrJe4WL5tsyfDVmbZMH9FDjmosytcEBTq4oZR8BnWM8a85qdtkWCmiBzjevhegRGvU",
  "key16": "4gayJKo11Jr59W1H4bbsuxa7YJQwTgiTFrY1w3a3tgZdxD6KuArhTFxYqEqEjZMbQrdEGkUwwtjuwowVuz2Zyau4",
  "key17": "5tgsmesybGC3gBgum6uNnHftgoeLkVkoYoxaEvwHGU7RmkvUDQp25E9sCzkPR7xt1piUAo1PDvQeECF6FhAtoidU",
  "key18": "33m9MQhXPa9u49ZZvcDF3i1t9cPoTpGWWYWJ7uwQESSidGpNxWcP5SgswUWouEWza8gEVyV5QjWUHh6GEQFgiiQf",
  "key19": "5s5AnHn5Mg4qEDsXnx5m8VtS1d578TUzkdFp5F4ystBXoUo16Tw7RyXK1HxkVToppWfpSRP2xF5BCvMnFXqUQSCH",
  "key20": "rrdNLsUD9Dw812AUbjRoz1YgaT96i3eSHp5CcLNa3hfNXg7BGeZcuYtFta53YJZYMA86jxDtdEstX8WoxCLCbLY",
  "key21": "9ZkKYiFWDT5BqWs8LDuGXjpskjoPAUJQQ6c9419qXcC1JDnQEEfyirUe6nc5E8EHtefh3b4j2mV8te3Dre4gtju",
  "key22": "4zhqiSLMu7TBePou3px3VVAuNtv9andMqpc2qobWx7CzwFwAShUjtAZoC6DX6ZrnwLRYi8p2i9GFQmETAmh7vR5G",
  "key23": "PCUoXwUdJMnZpCMyN9UiNQk5iw33Ue8J9VF9HqMDtGheC5T6GJccvLyrspSs7U949FEQ9tBsfLgUX8wrNsvcZT5",
  "key24": "3ZKt2ZzKiLvJeLwmS5K47dxVzdEXfJG9YUPXtBJ2B9woF1zamsEwy71trXbHVWX95Eo3TVvnhzh1dduNFSsJ1Lrg",
  "key25": "2bcQmVpYgqvpdruzmm3rM6TomF5usG7b77eFwmiiwgMZuKReAfDo4srGZCQnXzzo6hrDdJk5A5Pqm4bNkS4WqXmX",
  "key26": "4uRt3q1RWA96eBHMjz6x59YufthRawxfTD6GbRvW7TzUiyonoCvNAaCTeuWPC9XN7vqKP6FE3QCmHmiu3eVcthDm",
  "key27": "2mKsHmRrtFQV2s2swZQLpd4UEF5TF5bnsU9mRNmXBnJKScUmdj7B5k7N89UAGnCxVE8jm9GBqcuhKh184nxQAYMp",
  "key28": "5Ghdm9fLyFGHkp6GrJLegqMS3kT7hWMkUJn93qLFrF7vM6JitSEDhwEGqQvsmo9iVjtgqxyxpfWLEteiM97hJsz9",
  "key29": "5MoiQcJRiynQZJyqMMAsJpRqm9xk5bJKremFmciF2DQAJaxYqHwmFtPkZDAtcqQwyzeaAeHAsUDUEzaWEdk1CUqd",
  "key30": "5ShNKbK6MQmW6w89ZiBR9tvDPpiQH3XsLa2k9GeDN2cZNwPJiyasQTabpm45vWnW9DvD3UvyHadDmhufhuAcQo6U",
  "key31": "5oLFGazBEm1yQHPVzAz4NPUrSc3hEkJnhiqt3NA5zvsDKjFye21htvGSpKhmugfk4ADerZ98jXMVKuALH5Q9tWm2",
  "key32": "6QXYTSaXzs1q68efCKe8ED5nPCnbT7SooeRjMHhwgGkR38uJtAiavmk9L4hdwsu9tkbroBRz8GQ6Tt5wNsZ7517",
  "key33": "BqWfRPWNq2MrwEDatjGsmm9YsQaCZVqntHNR1jRNu7YmcFTDnCqv2r9ncqGMctSp4vXHWrHryuAUznX6hpRvAZy",
  "key34": "ubUt4Xn6oeBeUgCAt3yn7BMWz6hz4oR4zvV4SoeZ7K41Hpw5Zk4geaEBJ1DF4wUp94QmWcvET2DY1MybmDmwE5b",
  "key35": "45EEgJrK3AwxsMrMq69QV8yMdzqBaV3HiYCLL2Wqc6SoDZmQWVtH6Gg1oLHjiuY2qZWYEZChsVhk2VHZmL91YQNG",
  "key36": "R7iC83uL1161EzP79Ssn1pppFaWzkzWmwvh9WgpjdAudq7MvuNrxyLnrfHLEY3ituPEcs8b4zw8Yq3s8SLUXsEj",
  "key37": "2fhufBicsTGDu7cbvLzPtKNknYj4wG8LaprjUzam5xyBsvWh3WcKDP1JRoxkopnFodJo7RTX1q817APjYhsZY5zT"
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
