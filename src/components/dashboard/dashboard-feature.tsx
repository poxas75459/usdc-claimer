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
    "LzbsSCbTxcD9r2MGkW5PbS745YZWgvVZoxjucrKrzTed8pq757cWSioWzMQjN15MiQZsSUhF19vH7krBErNo8TJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43is71bpzVYUyn7X3hCfXxx99VVyQhxpPnCPYttwNp7PMidLRJmMLxXPm56fysgfmvausRqCqGq3TtfeKKg7VTpn",
  "key1": "46v7eBXyXsvDLEWszPMQu4gvG2htYtQsUZtdhAonfVrruwwZtVjYKbqxxHwn8hYCNNwwM71oKHvTQJBMuk26nyQc",
  "key2": "49ruJ5xfSP52YoBDgcuxxZ98LYx1YqHZKJgvZ63C25C4Kwey2x67njvkUr3Dc9c3T7d8w8zeNth8oSi9WdUK9Gc9",
  "key3": "3Tix3ne8wJfH7fjzJNSxVtmFAjmYVjEkJRnVYwbpBWbNtRP6VVMwmu8QDvTh3mE6xfbncjXEAT2v4RS3qZPasiKH",
  "key4": "3Rq7nL8PBbF7qCGEEMypzp1VNLU6Dd7g8LBwAnxnBAZugaQomtmMhc5GnMLwR5KLmzRaDA9M1kQxjZJhpfmXQuJq",
  "key5": "2Ws77zeArdyYbzDxY1ukWRJrQRqJv37Fb8xQh2AgSAvfHdmbqgpXkpbzaGq3z664r8RANneM6Z37SvnyjSMJF8Em",
  "key6": "5Wjvy2gGxiBBmmw4XNXPaQ7nJrzUQxTc4rFKrQ7A134MGjXsGAsBwZN2a7ToQNkX1GK1GR59ViTBwXmuMcJ53VEN",
  "key7": "h2URyLTAMam2gT5bbhcirTstDuPCsQVJ12jJ5LMU3aSeDshLZbcidHi1xyiQjS4h81VBtV9E4poVNvk8smqbxkL",
  "key8": "2mp7Mk6erxY4dSNqRxdMj2JdyivTt4KdpchAdQFRi7BifdBehMFU54EVDAvXbVgZyu46XNLYA58GSMzozSpD3sJc",
  "key9": "M3VzXR9pRAdZjkCneHxfJyzH9MFazWfSDEczAX32ksrhuAxdC58XhpjKmSFzzbf7WRZ6PKHRzzHzLMXuTtVcQLR",
  "key10": "2FB5g29oZbh8yGh1cMojvQuBR5wgMXtR6HFnENX2ty4NgapswyUavBpjTdt6jsezC7JCn7aqpsRes24GUQD9fCeH",
  "key11": "U6fmqurXvBjrKmsfZeo7LPB8BVNKeh2RN8S4EoTotJfs5VywNPS5pQxZmWDnm8TAeU74TLvkaGuprDP67kjD9V9",
  "key12": "31eJeUA9dYc3rGXKpppcrL8UhF7XQe4V2Jyi87VFPvZwBGU6unVsbS9y2rZfh2Zd9Esi8Mvb3FEjrjYDgdyvVHQt",
  "key13": "4c5zNb7EanWhnnpLBpVvv4xLhL3Y1fB26R8SvknyayL3U47NbRZ41fnVbgwtwGtpdnTodkBDwzpDcwuWgzNTZspq",
  "key14": "66tGQqRbXRcNt96yEVG4UCGGagvvPpMLgNiyTLdNCQRz6nZeiFnqBhSFz6eDPADTNsCiwZtieoQieNZhc5LTo1G2",
  "key15": "XCTnmLrmikyuHSXasR3biAKr6RfXbJGMD8ieB7wjrbLu7NT3wVzgb9VfWSC3TrJLHWfKas8miFAkxyxy1dpctYm",
  "key16": "3BPU9wiYAbdU47gs6uoQ7sGuEuGeZ9RUTtKhwGrjRxHzKKhA2aqwstyWGVfKVGsbKkeW47Xk76KjWciPtJfgnicp",
  "key17": "55ujxypHGHbEnEMLdoZDTGx3a6zE3wxGuSC3FgbGYhtSdn6tfukyoP63gqxXHexzNiEcf4R6R3AXXiQJcAz1wWFe",
  "key18": "aFM5oxn4yuYJ7fqfK7KPWxmNFgHJLvhGmVQ9vEWQ5iz51uHtojCYLa66aWwcEucfpVDVAJPZkjcjnXxGvPgRpqy",
  "key19": "31qkiK4u19UUzKN1Sfe2v1riv2YfYGD55DPYaqRm5tsZKst4foB9aszJsr9i5KsQBqeB9RBUbiSvScsQzjvMEBAr",
  "key20": "3DRpVtcjyCNXiUNGNd1Ch3GfQF5wumkpcpaGZZFNmxFyz6cRtSZ9rUgYBrJiHSdTzUK7eKCktLQLV85CYrdgLshY",
  "key21": "5cGTZyUcPQuNaDjEix8gzJGcWTJprV1kYZr2hsXsbkV1EJsb3arGLtGrh1a49M7CezyFGKC5DMg11H4zu11QSAPy",
  "key22": "64w5WMTzPUAbi3RYXH9gnfUxwaiYGfk6nD3V5UDTidPytE7M8YQVddaF2hPdrFwLDccVz775XKCFMgLrUmSeNdEZ",
  "key23": "67Wk1zofWBvmHffjWbA8YuByrLrJBowWHt2VySyVXUoMhThAw2PKSF6aTqt2oczzmsTfRgtHoZAXkhwrGgs3HkYe",
  "key24": "5Zeknt5RaRPJ6nJJNnJRBa9rzA4AgwKDjXj4mH5uCv3bvpYsqf9iCLyg2ip2hKjqQXvPqjG2qjC5e6pMPL7bhuWb",
  "key25": "5AcTGD3ewsSZ7LduNcgVWKyMAf7zJcP4BJ3oyZJscjtsA8R1BTnucd3s9f6tGmZnhfB9YjbcAaHjQVrXsF9TB9n3",
  "key26": "4bjEneYffJdzjCdA1GyYtdZKw2uG7x6SxQgTjpNfwJrRWVY3pKETTk7S9KAzuQ8zpgMX48D9iKVoBni6fHeC2BuX",
  "key27": "2HuxUYroCob22SHsxLXASkNWfEnMohkkeLqBU7tmBMDt2wNxMYJTbiu6t6RT5J2iHArxQfM5CchfxFuDHzykYGoh",
  "key28": "DnzTj8mcfqPEPq4172CpQoBe4WN1EsmirmrJ1er3p8LnGsLRHeEFbTqQ8dJsiZbxqnxNhgDe7UyerugKev8YyUE",
  "key29": "4KQXxwqmvidnn2Vehj8sMeTYMdHX9w1tPb7W5NA1FAz7LPJ6vtvZvpnk8jxTtEvrZ96j356D3vjwR49jjJktTvep",
  "key30": "3zSfiGLS6qBZpUG7X1XWuLFV9ekV8kZG3HZgxraWiSDHv2WT6hbZhbaTbaJ9ijV71at5Hf9ZcQY4p4DcPeKgbFQq",
  "key31": "4ojmdbJ56mTx5XPWEqJqoCbQghQ7zcWS3XZhQAZqKJ4qambjNhyVx6Tv41yzA8XFqqitkwhHpyU9Z5VPVCPuVSnT",
  "key32": "5GMnnkG2fk5jy7vzYUnvq9nDKd581z84rDbGTRBh8uQ9LVyydoQwTQij5gKvCb2GZSVxGhKX5K7Q3GLgZcMHkcfo",
  "key33": "5AxJcjh5woZgnViqxdCASn8iwRGX1Y2hpiJTYNorc3B4sihPnAoG1CcH3HqLsiHnB4DWu6ALBExkEYyhsop329jM",
  "key34": "5rJBwjjY6NvKejGCnu81QmrXXn1RsPa3CdYp9RNso39uG2YWpDFhkvBur3rE7TSCEaNrKdiB6bVg1DXq8umDLNXk",
  "key35": "2AnXFNFmtXtrP8e6QAaj56jGwWNGm2xtkZQo195o79iccLVT4bkeqZZz4ticwvd7u4wtPbf7wvMLCTjtmMQspmbg",
  "key36": "2iDM4pdvE5pQQBdyZGRp7kQERt4P27hdnG1k4XQDSJ82JbPc8QwSpiyEHdVRnsz3eEoQ6EabiECv6cE7VukRefTs"
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
