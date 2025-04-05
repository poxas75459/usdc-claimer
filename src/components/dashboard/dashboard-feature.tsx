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
    "4xkYouwsE8KjzPwMkhkZXp44Winxpg2cHbKLkoKmyLqcpmsCd64mcjMdq6uC6mS4u43SkoyzBycaUTS3QXEukFEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GBvPTscZ1UDJeYnJipewutTzCLpA5hZXwCpwyuz2QxCAJ2jai1Qce2AEGxmpQZJX5WfjvCFpWwySf8U1vx2qhU1",
  "key1": "koEgL2gv4E2z8Bwq97G6dwnK4dvHGtkxJeKnFTpH1MWmm1x3o1J7MS968746ZHnPYrSDmuHfstRk5dkndJBbE6s",
  "key2": "svurF3EVVzTxba2KH6vr3uLYzFRHURXhRqfW6n9BC5scvmfPmcUARpVtndHvNPY4cnktgaoy7m6qUWE6pVEoVBw",
  "key3": "4fbDDtyG2kXYZMDvp1uCff4vMv9jwEm1M4kN4fQK9C9DsXq4v8wsi8XxQgwSVv69gmZuPE4kK9xZnuuBksZAFGe",
  "key4": "3QaH5gCUo5QAKH1h7mks5ycJXe4ewMX7TD6uzRz2U5YhH3CFJih4sW3Cni2FDGBRde7phLTT6TmSCTdBEQSR5Jvi",
  "key5": "36rVQH26qBG7Fij6pimfm64uHdLw9RBF7KR89ZfxckyPBYtjHpH7EWz8J7r7uLSjPG8ULBhidgYUgutHzVPVWkKd",
  "key6": "3LnsMneBzibruZnJ3mSPSwDvuTjJKmHdG5Rbw3ytyPAData3u42PTTToRexMBAK5B4um9udv7LkZsknCnXWYZVSV",
  "key7": "21tgFydagkfY92Qi87MSAG9WP52BcRJcmL24299pUjCcZe7yj372cPCQTPZURnCoxgyCQSXcsdXykcypacJTAEkG",
  "key8": "3PtooJHitvNSuxqwxqAQmLSQRy6JSnNRgpz84TS9fykDM1K6E84fPYCGQ98aKtv5XZGQeCeafdt2a1VQjhykPWMx",
  "key9": "3Ah3ioJEZBNmyef6JmJViKZ7s5TJTKHVUZeUbfuQx7SPhusnsU53F6Tucs4bT9DxYKbhRCDSCpeKVckdGs9DtgYS",
  "key10": "w7S3BVnt85DiEyDDxAdP3Ky5d1ZMvLGsPkKVUWseaGc58FQfmbuS7ss4XStU4G84wqDqd34tSFbQ2ZXBz5UCBsJ",
  "key11": "iE56WRJZHf3Aq7pVFDxA5tHHxNKuxwZp4XiMgh75imDuonKHo8RjargQyBVkFuxGkX9QfzSB4ThTXbB7mU6p9Pr",
  "key12": "iDXWpj9FhTauhsJnEwSCb9BNjdaVzuoJ6rugf5c3uJpw7iPZHnqYZp8Yk57LCNb71pWF58yhEKiJCQBHN2dJqfW",
  "key13": "4aMnPeHqRLqCmi9p8n9LqNdehBvuN96MR7Kt1PSwjtRa4CgwQFeKh3XoHWJsmBHmU9WhPoDE4iWGbL4bhxxE1bK7",
  "key14": "FuVh6VuHoVQ2KC3xJGf4EcNcMHzc87Uqgkn5c7sfHzBLXj1kTGroCXrSGs4EQqi1a1cSfNH5BQQUXN9SEkTVjML",
  "key15": "3mnjyMF2ccAWSeQLNZtD5auPbXTYPFUSfHMsBqmDCpgJeQDD9SkR5DBsgr7aJ31UTYH4eAhxiVqoefMA6Z4gQ8d9",
  "key16": "MSiaVTjWGbqwT4edWfTr4vmCUQ9jhqQyB6vjGNp2SEje17Kfq95yjn14tCmVTvEXH458YGoKRhvyiyqnyjqZrPa",
  "key17": "66YCZLqmvcJa9YZx1pBTLnQMzfK6yj7ts4qrPcNFi3rHU8FntiA31ZgHJ8yfv3hf5YJvua6Smx2vAtTrbi4s9TDf",
  "key18": "fPj7B6PVAfbkUEnKwKwX8KMFtGrsgejdrSA1JDaZPL3NFNpVDMkwrkVSroSUJfe4qHjbhrmHtKiy2u5wzJb8yXa",
  "key19": "2gWijaGVnLxrTjgVFWj3oLvyAukEkFXXSimDfjZyLGHkrVDF4zqbkmk23x2bzf9youhd1Dr9ndhF3yPPDUpwjAGi",
  "key20": "4fJdgPxWWJzEpUTJuzT1HPYutApMauLNKS3Me9okoBNvYMdefeqezR9ubxF14VihdC1WrRZuWsijFnm8jwAcTnjM",
  "key21": "5hmsiRxpz9VcqpxwnNoGMgBM1rShcv2XRUvMq8tXai7zXGdUcwUg881BBXPihjoT59nqQS49fQ8TGo35CXt7gFpY",
  "key22": "2xqQCtr8zwE3baQNV4Sn2LKwqt4MafpsSBcgAuvsyqmmSp7NiRb2aAtd7DXxFcAzJorKvNDgDumbYVCfuVTJ6EFc",
  "key23": "35cG26yqUwvCCCqdQ5N5pZvmrBJcHP5sfHhx8evmLCeSE1hvjN1gNFLNxm7FmmZGTkjEnPgJarb772LjhR4M584W",
  "key24": "4x28PEfjk9Mj7ZfQ4NWNrB2ZvfcRSuYSbRdhHAm5q64EddbQytCn7GhpXQdwoyMwcPmpinb8SRAyqppknq2Wbi2N",
  "key25": "iabtsA1mXz87aLMuFYkCgN6hwYGwid9Q2tNohTFDtBJ7keLFhVCVozxDtJjJ35e2J3EZFqDwzdjdAbWpn7CPArg",
  "key26": "3qxnWM5dQGb2HEyAvYqNsmJhvam3LGfj4XqyjbEAs7CRCL5tkYb4cgusMx42Qj3Us64UjR7XoJUfbFAXJWxAJNLq",
  "key27": "5ue8wYkLzkv3YKGnbNSrX2XYjAdjVYohaoC13nEsCKGqga7s1xxp7fGhsbEB6ajaXzDJQoaFgNFDgEmhWknoDYji",
  "key28": "5imdTkoWjgkdyPFeticompvmGo9Ns4otCQJXfgbwzFpjszznzYDGEXja7rrz2bRs2dFkBuNMifogowBkbbsFBBQb",
  "key29": "5YLESMBzUhBtyqqxQhyRcrxxeXMRYujPGvb8UzwD5qwcEm2FAPJvxfb44DBCGSQzCnCnNwsEhixmHPWhzMXrXG8Z",
  "key30": "5dSibx37fkhamPDD3NYis8iMadhzYB6kfbYqDJzCA4qAjrLCh2p66C52CbiMGZoK2qKbJP77jBXQggYjxAHBRnb",
  "key31": "46Zo4uLjHcwSULwGztYFxFr6yAWxw4ALoUQVfPrXLG1reZvuLHCGpF8wTPMkm9dqrm5bpqUuM7h7s3raSrJYyfkE",
  "key32": "3jVA56e6Ry1sFUWJDoixAoq1sKz91SCQ5mrdWeezKoZKQ6s2yAP2DxSewYfH7WkXNdTy4Jhs5dDDojaZhywoomnp",
  "key33": "55sQrTttaStnHq6F2MqPQQHQU2uJg8oTK845WXKpKRrorzaaPzM2wf4r3zVqmbD2qptEqpdcr9C4vB13ABkQegRv",
  "key34": "5e4aMYSAiRczfdotrwdzk2xvPCKfaHbo64UprWhazLvRYhK8XiTpJNPx5xhovVikXg4x7xVk2U9QfCdTRXKbMRTP",
  "key35": "4ckaoS8LPcwRUxVvyfGeUXwBzejkC4jcPm2gyAHsem1Q1RumrmBtuq4xqG8Qo7oCVptrQQ9g6pVrnJtJvAko7KHB"
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
