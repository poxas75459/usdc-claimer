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
    "5j1q9tBtNFMocXNELdW9DqYBi9oNYPtV2ZQYvUVaQBLbp7zMrxeBK3cnUet8qCqWcjHr3S4VbAHii8ERLLygP8uY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iSGhee7kuZFug96paA9Rf3Ex55haoT38dJo87sNqVrBUiadBAfQ3MaNWthdy2FVaTvbmcRkzYMtdwsGZwCqjMUW",
  "key1": "5kuHCTEHeU6bo7Qjn8m49YxbMp9Z21332UyEYHaiaMowvuxKrCT2ZHuzamGwqbhSdPmRazbkTEXrp8cFpHGwmenB",
  "key2": "1ZqQou2SRC3UBpAFtyVK3s9BC68AvkmiYtHTyppenxyexGD31BgVQDucG9Nrk9VQucvAWan4Reeb2x2GWUPK9j",
  "key3": "qXntD77cRymWGNLQZdqFEdY1p7cemkPKyJAHGENKdYW11bGAGMvgtXRN6dpMgv32vcRmP9qBUcPfwcDy6o3V5J2",
  "key4": "4BvK6e3j6nhBb7cp3agUJ4YZWArKQ8nN3guN5TSm6Pmm86vJv3hcDKGNMfSo77j4KhfQHu4eb36Xw9QU9tGz69Pg",
  "key5": "34Y6DpRAL3z1EG7Xgmqb7rEsfarGce4xvXShiFPYtJK3nyiQHa7ndastX88ahjRpnzLwRLqc8cpnGazA18Px7RML",
  "key6": "26b39fui7Q97KvBhu5LnvWH2Ss5GNCDkMpUVUFxeVL8nARRcPJiDX6sYMCpwKUHte6k9hRaPSEWobTvi9F8Hsyvz",
  "key7": "4wMunAmD49znumnBLKXnwuKA4HJKjFzCNQq1Y7LzJysZ8JYDrRzYbDW7bw1bxQEhyFng9M9Q7nq1sL41NrP9GwMp",
  "key8": "4tXog6opgFTgebRq3TevA4Z27jb16zj4W8tDwYi4UtmQJRpVycLg7HyZwbBtaeNsTNMXacGsGub7dWqtJ83CS8ry",
  "key9": "5rvGV9nNqc2RNhv3LVnpSkaXvCHGv6CmQ44QTdtkAJkcFXG3EMj4vFX9NYnHRrEgVp6kNmEm5Ek98Ej4DpspWcKq",
  "key10": "5sK25p8dHa2WxMF9eaxHvZPQ99JCtxwSQhQ8KM9nUtLaikc6pJXqVXZxGXN4aojVevzKf9fkh4n2aZoR4Z9zhsUM",
  "key11": "CyAFUn2tHQG9jG5uR73RsbixM34ymLLCh2W3tHMNBMnZ3KGFcCGjga2kZvwLhvMA6LTY4Qr57mRvUttRomcYjvX",
  "key12": "Q9PQsvWKsx4V6uGzVGv3crVHTtiu7ngfeLDzHspi82REx1u29ns7r2gDvnXEofw3wnLrSmZbMDDU1ptf2bXTfS6",
  "key13": "2ziMadbAs1Tqr3o2aru6r8LovcydUzYTrThCpvt3E2cvsQwcV9XBWQwwCq2QxeeLtrmNzyL1iS6YkJBaU6VJM8sN",
  "key14": "2ypmuiGMU6jig9EkdxgS9MeYzH8xGv2e293q2iNzEm8KYieHqFNEy1DeDQxbhuJSuggMXRDyJUkXiKUjnjFg8XRp",
  "key15": "Kqs8UN5J4Aa3BmvjuJUDAxFyCfEJxnieT6KNSAsvsUBYdydB4NVkxTsDLXSpz3wgcJ64hCiGkCMFRRGFECp5G8u",
  "key16": "5n8tAojDg1Hq7Lahr7EmAKbTFshcrQoBFpXYTwdwwM7uUJkmMp2QsfgYEUMHcatxatrLTTqdJ1kvLK9ttzFdZ9Kx",
  "key17": "2hMxS5VUg56ZEi1JN28gvEtRcpf2M9wkbUfZWLjPA4Ehei9z3Z9QfC2xdCF8jTHwXbSNDujkh7impU9ybxu5MLAW",
  "key18": "12MC6K3ax9eMAAkr7qPHUYV2KGHEpnTa3T1H83Q3RcaAAoGWphGedrJTvNXuuCKDZ7F5evbRD5E3LcXcq682ndA",
  "key19": "5PQc4N8QxMEL9wkYJv5xZqcCTBy5h7Q2QDALd9P7pC5HN9uyjNkpNaktYgxa2pJzT73nySSXMsmvZXimBg2VPkBQ",
  "key20": "rwDWbvTNh1cGJ49w1LgBcgJS1Qp1h1nuQ8CFdGZgrhcTvSpb6drCeB4k4mBReMN57qL8RMrtLySccGZrwAfsbYz",
  "key21": "42ZfStpt5BddQWj3CDjLxPdsMuD9fLJ1StWhtdiQTZfUGYaS6qBGvZNMtn6TZB4ebtys1nsyeREeueGrG7bxhiPh",
  "key22": "2xGeHuDHUQyRNfx53PqF52k6vmVLgyyVkNscC6Vxyq1euWJdXFF1yyNMvN1He7exE2sZTyCRuH1V7nRDZfHodztd",
  "key23": "5VXVtS46kVUujLY2yrZDWfvMEXytfxyPztucTb8Jn4GkvGSeD7tXrAnJzN2u5yLTniS4fV1Cg3mcydE5cWdeCzdQ",
  "key24": "2oF5LPabwKYUpgKT75X5gx6nsS3uxpL6SvDWSVTeW6cYQDD9KCtPYyKRXg4LWfPg9ReW8jZSiFk6UticQvQBY5WE",
  "key25": "4G1U2NvFsWtYX4gaeMpKWi7QHwMvM4TMER1xRxjUmA9egk62FNVKKGAu3HK4GK7iXiXd8VByV16eHa8vSP1gTaRf",
  "key26": "4NxmjbsoxSFCDHRLnR6eyLdixcamo5gQoGbMWUEvSFeS5LKrsoUf9esL7rVupjJfQHW5LFCJZtnEDVbC56L9rUeq",
  "key27": "2cfj2FsjYvX4PTH5p6yKk7hYVjEWtJf3patLUodHuPZPwmVhSqHw48UVZ4ePQfxVWTCmRsEP6L4spf62hJ44q5Yp",
  "key28": "2M1sPfEjkPnBSVBaqNCiiGjAqAfq2PqGJNAbT9gULtiy2767hDjSNPj3K3A9yX374uNYqvpRKy2DceSERQQnk39p",
  "key29": "2BJtBML25czhgFtxs3wWBR2sj2p49UwRNMNBjKFN53CCfoS83ZrtbTkd2hLkQsXu4NxAbRkXAYjCExyqZkWjYET8",
  "key30": "NzAP7aB6NtDVp9LoiJhLZdCFSV4ZfPK3cNXBip1cK9A3veAYxiZoDH5SNvWav9JFR77bUsYfiS7yEMAhf9V6iVb",
  "key31": "3BsJYZsr6JJ3FuWkuKh8Qf2X7zb37QnbFYBAV1KMRrzbsxUgijVrqpJKuL6FEG2y4He7ku6fdCR3wEv6a9DfJAuZ",
  "key32": "53SWaSasSTbFuAg9iRn9JXZAgNvKz5P2UD1Ycz2CiQ1BLMaPAVpeHjpvjUqGnJz8maoFscJRiqDbWGWPbjWrpyYT",
  "key33": "3GCxixynGMXAAfoxKhGEKdrHKr46qDYYyeEDQtZHHoceUoaUcUaAWV3Cp7cqTLNC8TiDfkydGNr4yufdavFMLHjw",
  "key34": "2Kgggt7UXjvbAoKUK4ezLBbKEegSiHe7ujWjyHsTuQ8Qh6ATc3LAthmdeRzg6e2DfkPfFFPuPNm3FG7sCDGaGr9B",
  "key35": "2yEJU2YCmb2YQz7fZzSPtS9F4VdbJUviVW3qNgzTwzTkVQwpvjFdHvwviFf6cFoATtwRFKiUNuWeKX7mExyZD9eh",
  "key36": "3BKLQH9tv41RT5um76LZEM5XYfJM8saSPB5pdWxTmoLEB5nTeiudwJWt9UFUNWX8aEpRvTMx2F2PqSY73Kehw5eM",
  "key37": "HQ766JjCqqYGZZDyZXBQhdCpkZ7rFwmdP8NGbhE72LqgkLR3WLSwRGrqQfUxskWThgxESBHJXa8wZsNuSMBM9Sx",
  "key38": "5mTq8Hhha4tvpW6FUPCaCCufj9uwVDfJQTh3XVGLB1UxxYa3rw4QUMgrKcK8YJjPQtoLpbXFDQaPqrgutdNH7Lz9",
  "key39": "5DVaDLYjWg9XXPbxFTSHxLH779y7oMor1C1cjo5ynfcVCevuCTfDGJuKUEHMApWK7yF4zUKJFnWdEuAGvDeFyB5i",
  "key40": "3nikp3M2w3H4dpoC1mgG3B5vrQkfFf8vG6zFcx5bbRunBpkNeNj4bK2Qfq8bqmsSwPWKTPeB8GdGTWneofBC1hVW",
  "key41": "bN5Z7J1AuRZtXstBFhR1QcuMEwxMt8daiXbo7VksENXefnSvrdhMNadn166p1QUY3ciRsqZY4E6DUFjGLJiPQau",
  "key42": "xochQJ8F6xZjH9qe62TuzvQuXndU2WxA15PwK6X8tpn4Jatitn8iyry9UeArLA946wUWQhJHBVrDc5JXmHg1UXF",
  "key43": "4QVKRevqQTz4LbHpdh5rh5DLwNbhotijfgH97QiWcLZtuXcxvuyWSwP9sCDJh9wmBqcH4S7HGyYLnbf8Th28ccJy"
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
