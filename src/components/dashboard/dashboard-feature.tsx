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
    "4qDMMKraGLAXFY5uB1wQy4Zs355mv1DnGDAEtQi4AcVSJjSfSos7UdbuycStPt4MZc1G7xj474NmiZznkJ6WqztM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "284Lb64jdYHXdbQf9uqXRzGfkPv9kZAtWkLYv6MgdqZbnV4MtbQZDZq3ijQ8pGFueHhtyPGw8x9vmzZCCGtCBHwh",
  "key1": "3vodCc2eWddfKTuP8DjT9UR8oFMh3b9myZeoXgg7BPzWeovxWYQ3uDE6p44nikfq2UDgKHERPS15xuDnZCDaowAr",
  "key2": "26msWD31j61x1Yx94K6M3LX5LEGWsdyeE34vbTGGpZmLQQyMmRmEmwxg7DsUThvF1QDmVJue3o1vqGfn1HYQPDKw",
  "key3": "38bAnt4gLyxzJbUAC1mkpW9JyWps9gc9JzFMgSWhxk64JWCAc9JFxae1kBNPZcCem8Ry45KiYhQGrBrQ1amixbKG",
  "key4": "2c2GCTX77SHm7MCTVYbRBp9xUiQcSJnDTNPK4r9Fk6uTfFd5LGcdBQ7uktrXu1jTFWDN3Pp9k6vX5BL7quzgM7Yv",
  "key5": "4p2rZp2A3mTPABypzZzsfYrPebghk4GydARtboPHzigZag5PjG4mr7qwFFjcUoEZHFZ8vu2qZpApdCy591JCbLNX",
  "key6": "5eQ8rREebnC2cK8VEU23yfq6S7VPKgotRQnih8a3AcgR91tKqag5qiyMHgET5a8aHviE69dCbnZQPK7AnvGgMFmD",
  "key7": "5gjPZNGGVGw5r2sydPHT58BQNgm9yuPrzhiGwKca1Cs3cyFPskHznjwnkYG9dYNo1yzXWbX1fu1YqndQJGMpx1MY",
  "key8": "MYAz9TWyuYVqPmkryvFaGtctFrQ2A2EfZLvtTkTrGfyUuDRi2zGUv9QA4rqf8MR2bmy2YaJGmSKmtU7RyjXuqTB",
  "key9": "FvhHY2LkHDdjeMJ2n6jDvvaqfWdqkv22cgptAqedPvLSViwA666DNvNZuJnWzUdkCbbK5JB1aT1Scmc1McWV84a",
  "key10": "65yuC6Q7NyPVLnndWJZL2r4hyGrzDANaUPa4ZCEWp94Gxw9ZnXwBiw4Z1ew6Sm7v3dcufPSuYbRs8hvzPfMY4sbN",
  "key11": "9WTDmdnQKQRZPU9ZPNzZjjbHCbRQ3VPoHNcuiw3qnMWK4ryeGpbEtx8sfx3QTztNZCDFECfWDAQrZEiXKhdNYoS",
  "key12": "uTsyUgk79dugaRF9ArT5njhZfvQ9quAdUtAHHQi3eEuncR98yz3SeUbk6xBfm9vm7G4GcQohaYXNtikDD2jqKo8",
  "key13": "5s2ZgP8Ehnd7CUzRk6qaQJ5KQkxLH5xBXbyzH7tCBTcy2VtL4L9GsUdXHGFVjbYgerha31bpn7CXxqqtnBnzLxN2",
  "key14": "3YcT3jyzvwRajs9maAQ2Ecv7mMrXrvd46gjZRgKxDDU5UdgHQzJYc6KQHiUKDCsd2EqvEn3wNm9HakRukjd4TKBG",
  "key15": "s1T9uDBxSerZzBDLHGg8qXFj216hBZNeAMbZRKWhN2t8xRSeYMjFBWufu91VsnXiHA9rRUAX3J5x1LFSJbbQF7d",
  "key16": "3aGuwBGzYcJaXKsyBaduGJ1CSoUvFQp9auqU1XruzphiU517x57xsev88tpQ7ujZfJf5BwZMQU9m52dkGPbjgjXk",
  "key17": "6142roXgT7TrZyQ25CKSUE6UWMi3mhJccZsQ8PT52EAYmesqR7Jci5YU7KqvvX8hGpfT5Z5gUuVLpPn8ZdksZzgb",
  "key18": "tLrX3NvUqrZL7zLLehf5wk6Ey4aahhbK8DFrrssRCNAzaCmW8LPnfFKYArM62dkgkuUAarXkuGKWUGPRDmQaYDx",
  "key19": "5WTX8zEt5iYVVpkaVbHbtX7i4D3868RvQeLE8TkudR3f2NM5jtRFNTnhUsQoaByDyrZ4TimUXJRA4jBQJjxpXSFe",
  "key20": "3pCSq1WQmMkfBNRcPriDgwAqzgFyF3Lf8rPS6iYDb7se2ytnMojLHhreWu9GsuBNbZj6TAbdFx8UAeYGAVXWMrFi",
  "key21": "Qz8yuVHtAWSigDsBJfuekXiAwiKowogJAz8u5xxWRdFAbcVTzvZaQq1HsKx6TyV8PfHeZViH71dXHfE9EjEd5nT",
  "key22": "2BTiAzgYvroyNvnVx5sQfhr57Yxq3cUcKBxDncDAUhCAgWHsCpAL7Q26UQP9L9v2s2SuTJv5gVSp5qScDeKRGDEX",
  "key23": "5t9H9RnQWc9363hgrmEw13MfUFcpJtqhucZjn2WjLnBncxK7WXMT3Yq2HV2oyRT3opvdGJYkjBmK6MNXvanXWmXr",
  "key24": "USBW5SZjtULxy3YtGjQ84qwVSiinYS2psPtrkP19qoqF5xZuBTLKb6TYwU5LxbqALWGAkNbndC5H8ZXaHCEjWiz",
  "key25": "2obUbbZMTGhXSHVPapf3ia4BJsqJoyXfqmKfSWJwmJ7jasiNVJC1BqXBQbABQSwNLZg2MtsuiyUxFNzCzJ7TSvqB",
  "key26": "4HCHuNnSDtExuv4HnC4GVCofkt1HBJQN9QZtYfzi5kGnuLx8jqqoMCghCwwyetPnYZetuUXyjt8EEZ1SQERWzC9h",
  "key27": "2PHScz9wCf6LToJ4QZQvoBxeeiXFyU6fhamEo5A37B951unA4ZnD5ATUdXzoCXPvfHcHmjJEpup56rNcQbb9Yd2T",
  "key28": "4PxepPaL3YiazroJgM76bwCN62aviPjf3jcY3HF8vzTcfcDZeL65hzh7gL5C95ZKwd58P23jTfZJVEZakjdknmF4",
  "key29": "YbBWtEBBJkQQxsbC9DdjzneG2YsDCi7bU9kSTMURRrBT1a3U1BrbaMWBfPY4VyZw5UohmxBk2sxnCQQBMzVMxrW",
  "key30": "SvyTgwMVNCDbXLABnckGTVGUmpqM3t5m3atcovNBJE5cPuxLPaVirhHwU5zxoRXjkdXu4sAmdzaVLu6abJYNu8j",
  "key31": "3mLG6MG4LcDHPFGGDArqyLYs2pNi3yHd3HXkxdD4HgZYs59PbDBDU2i4GRPFxfBHNGLabBQARkrC3TnWdidNG8oC",
  "key32": "59iRBsoTMfZKZyxRaB7mdyt4cryBu7xFgcXj8t4KYZBcXokRBFB4sZRZnAiBdc2tn23fyDWEHKchpRe2fN6fVvYd",
  "key33": "gxKJwSns2aGzEsienWU1zWQLcCLCsFZJB8vPwJ464FQGH8QdU7Xdn83SRaaAEokTHWJutac2KynRtmfxWoFnSCW",
  "key34": "P77uRzcD2ZJuPfuYs1gU4XhYqTNmyse6zoVxh9EgzmTgaGbFmTA481feFSkd4LFueNg48BtCwMKjqLEzqUXmxtJ",
  "key35": "3vYRFKG7P7pjMEUuP9bpuGSBbcwCY1j3hhNrN8kkqKzKfHuNNQtrgxryhnqk7A2j7KXDDLSdNXnG4p1GvoEA1wKp",
  "key36": "4U5K8euoDadHk6mcZYRQSpa9Xi25bqUhnwaZayUtpLkSptxFtsmd4JaMM1414qoXKP6ANRyETLhVJtZ3AHutZ3Hg",
  "key37": "3wXMJuHXJc3TaBbuo527yTeLpBbvUXu1VSr86KJH4Ur2F42zcsNUNsjuzpQJ62je8ajvhN4DxaPBAKMir1jYe65W",
  "key38": "2q13whQZdrgvxHNoqyTBgzjb1atJiywSBkChGAuxYEGvuZfDCsKSu3fx7K12DnipPtw6CEwHUZdivoTewBewDJ5Y",
  "key39": "GouwNpZLAnfQkfn513zYAxhG5q6UHXoMFUfmAZvGZ8xKB2TYJzWpkwLopHLKnYxts7E3ozJC8qsyp7gmvJr6BTu",
  "key40": "2xeogTkxTyBTYcushkhm1CZvcFyjFDqN4Tut1oS6FaU813PDLvGqsLuqhNJxCpgn9R5LRYHwWuE5Qx3yuaxutkR7",
  "key41": "ZPr2dP2TGMMPsq1Rd3Gkah9hGtUh2SnEwVTi6VbDAhnkSw9AgpgHV2MTA8n1eNWPM19wTjjYfpgJp8YAvU4pFL7"
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
