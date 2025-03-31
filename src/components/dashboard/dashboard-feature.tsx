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
    "5RoF8hqTigWyumN4jd3ZTMmaZfyQzzf9vru9HMd99d3YGukmyC9ccqYEwjyPHQc1Pzg9BTFNpSdVjE8yCvhfvZo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ri652u1heBseu6ZrbtwG81hcvHxUh1vdGsxUwGy3U14UKV1cpPhWNqxGgH4JYQnevgA7Fk25XLAuU4fGcuyJ2K6",
  "key1": "5r6tiyqCEqZSbLZFuZnkMf1n518Ldoz3UdPRHPDqtdrnRJWajLhUmdrX5qxVDzciYyx3GoowyshnbvWsKsmRmRn4",
  "key2": "36U1AdufGADWps7xwUbwVkyxqAMtM6XqawN8hih7TmpYdKuSUWoXXMFrwUfgSRzMRFj3A9wMP2vdTUYZLPbJ4Apq",
  "key3": "64N6mgPEa6nD5RFyZfgp98MvjRu8BudFcFg3gHC3hU6mgH48xv6yWovLT9Jk6ZkEUAaWS7Xi45Zh4Wquhm7QSyCa",
  "key4": "4pBPyfrdj1d4Z8UHv6jQsz1U6TQ8D3VSR6BNnhksJam9oPv5E9orBcuarR73LqzqAzypHewLiAPV3FPbyiZr9cz9",
  "key5": "3EyP4dLSVjuhfkbGk515WQoXQGDMGNMFyTUaJUNC2b1iN1zWEb5vvYY1PKBaQYPZjJYNo1vVasWjsy2enTJmEMH9",
  "key6": "54MRwXJK1AdK1eVtTpK45bcDqya5MiszritoK7UR9tZJzXW8UjZUwkFDChTW6GYE1Jcpvo5KBwehUB8i4w28hk2B",
  "key7": "46F3cqEVaF8kxyfygGegcSYaiyF9ra13BUGuLccb9kTnHPo54b8oGP2EZbXoR15tHeqGSfRGjGkfMYwgpkKmRYp1",
  "key8": "4PuzQVFgKg7oHCDfka4qkGWvFWFdqbjxhZW9eeNV2UaL964qyFzto8e3bUW2QNgUBFvyH53ygEhr9PpF3qPYTcF1",
  "key9": "3eMdgrsuj7wYjQQkRfUd2jfM2d8bY1r5mZqGhhrW6DoMJak1cuacp2YWigaFxRj5hTnu7EnAx5eCLQqLVN225LPs",
  "key10": "4DGNCvPWpsRsRsbgSeRnvxKLQyb7uBZZcRJuQXiv5FVRrJZ186FMwYSX3AnYF653X7bK3qveLdQBdHw81fQiktBz",
  "key11": "3w1YqsgA582D8ovcG2aEfUU9yYBQMBs65F5Kki471EvsVkMTEnLrowRajEeFrThcdhnGc2kfvZgxuxyys3PEgCYJ",
  "key12": "53ScGzAUpjZaLCMQfDXvMksR1zh17u3HY4XwtPu2anVmaFb8v5GaoCuASnzNa9FJrL8LrFuTkexDQxSQ5zqLDbxp",
  "key13": "2LPcB8FHyxYtDMfwR5C3CBRxad2PHFGKTBp9XHfez4NSfVHdcR1CCGrgTEPALraMoWVkGGkP1pjyQLuxoqu1GqBK",
  "key14": "UpKWDJKU7QUqeS8LfkjRmdVdzzXcoBk16aLWY4X2D3gdbSdtZKNzmrFmQYNj2xRAFa6mtZq21MqCLnWXU3i6Tdu",
  "key15": "643HZFX2HfNZ4dedAxvSKzmZLz3U7nnoV3UoXtk4WjedpGDD1XpBFTznqrxoKP3WpQaUKWch1W7vWb9D27DdQwK8",
  "key16": "G19cXGm9u9Sg54gTvXFMJz46nnqHmeKtUknUTJ9LbXqYxKeUVvRXtyMpbvrap5wejtZqEoDxe3XYov5iJZsygow",
  "key17": "4nydj2wK3ePz3ki8GQW5DxFnfb5xzuZLNBLsTzgN7GWvnDvyNQWfcF3YezzfiEKKzNPygAMnSTnFUWgJoz9WFgnV",
  "key18": "Nr4YkJjG3moe5QQHnRhYzAyseNrUtkY8wutkv5cVb2HhfNYdLgWQYXMyZhyiKAgg9DPhDQVdpm9n6dgUsdyUobM",
  "key19": "2LssUtWvgR1FsC4CiwPh5Xek6SHMoZMfqtvhKbS9pYwSooz92iqLsc5wqxstP6cPfdbyd69XGpAE7NrB3mC8UWsE",
  "key20": "4S5C6AVBEwiH87AXPX5yLWCXFsRvefpb1G4TyyfuxsyFFFni4TZkq2yUqmvFKEgwEk5at8zerDyW9RbTGub7HdYW",
  "key21": "ChzK8dBx1HogKvpcdBTjW7zbaXNC9SJUBMbC5qxoiAbbjEwXjqQPDqo1P3xYEy5LS1Dyep171Ry8z7nBzxkafnE",
  "key22": "2zYC7j2B3xkricPL3sAstmxsurjBaNFqnuJd7S7xR3pBFLLzSyGaFUNoq1DxatcKisPPNgj57ger2MT2zA9w4e7p",
  "key23": "66t8pvwH9uK5oyLFiB27UCMiQfBZbKkoKwLcdjLjANfz7sAuTa4sm56a2pswDKa3GzEbqjWCifBqwVXDgrrFALNW",
  "key24": "2MCKWEmbFnaf95n3bYsuyj4Wmgdj6FoPQvGYhWe8zKZ76iDPoJd1oeU4adLs4N3xXfSYGzch2DpszV7egahCnSMe",
  "key25": "2jb8BeKhM9EyaVghMAFNnBDw8HGdQuobhrkPCTJpzpdh6bAoVGkKVgP19odeRK1WCJ5M1HMtfRybvV3BGbzi9Y92",
  "key26": "5ArriEB5SoL25EchKUPD1zbDPVHxNYgq896ThqPBKiRAxB1MP9qzyeX4GCSjrcGzhsKiZqyt8Z3ab9bZMLxXCaSz",
  "key27": "HVHptDnPgBoWJVtiqPaetGL7RqAigWL7iggX9PScaeQLH1Y9fNpVSrMma3Lwh3LZJnxgNso5Zf9W4BeR3uvpF5X",
  "key28": "5YsQcNN9oFUNu2XC5Bqa5KbfvRNrzcjzUL9PVwi7FihGKXqPGbwbatgAawzgHdGg7QQ2qpKGVBthJygknFmEbPUw",
  "key29": "4J9E6tZBiLmrtFEt9QQgJ7SPHNPBERKTZ5N5cpeLocDVbRJna7aY643GjugcDByt7Ewpzzm64hkFxhsDuRWc8xKy",
  "key30": "57igedaxcH4a3ZCckt4R9GhHzpPjCmgbxbtRtx6pPjoQg1TmiPDWpuMiTeXf5TYpMhCM9apwkwjsnVANAWSAuRN5",
  "key31": "4Ppd21ysAFPaRWSeFCJPPDBb72uSMTqMBweCiTLSoSpc2yMp75L1NvezkKPyNSmjZuiuRSUikRkbwwXwo6QP5T4W",
  "key32": "4MkZXHhSVnWP6yW5Ragk8zc51aSyKNjALwrrXAzNoCqwovGYJXWuqpfhrBZ37xfvAvgb22hW1tSzSEcSBeRNRzsN",
  "key33": "4tGi18UTJnEKxEuCbMPz6mTm8xFTndNmPPcyaHVPMhEeRYMDzKzYh87AkGXuNoHboZXyqS8Xi1FVVBinAUhHfer9",
  "key34": "4d1UpLmJGnFWmkS4DpNt1jesddRYCKTdAbU18boenZfriNFPLhuCec8SqX597L1h6ph3M8Zumttw6RqqYZdH6GPZ",
  "key35": "59iMvNf88nhKoe5XCrycs9iEWYkF17oytPnAQTFh6HQDKhkptL9nAJxCHurcoM97RTpFq7y3a36Bza2CfkrWJhNV",
  "key36": "4zF67dZwb2bTuvPXJVLseXPdPuzZETK8TsGpVCbXqma3kNyHFy1wvbQWdjm3TzcB6qh4mbxkpyqoGkxB5KMJk8wb",
  "key37": "4YCGQtfDFTGngzp3msYa6hvcFdmgXGByDSsbtTqHoW8mdod8waLU3cPF5B3LWKstRfYJZMbXJdQrnhnBaX1RN2Tt"
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
