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
    "2P8qVpn8B367FSc67sUhUk1SWNzvsWYP6u7H2Aw2QDwBead5qUtczHtrgbQe6U3GLLM1LR9xtCbWxntvG8bRY62o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vVaKuFX9yyAFUTSzZiB3PjKmifX4iGwosdwPMxcrbPYdj5d8GJQJXDCjaqdYMaqyieTCu4ZQE81uYG3xCtGgGYX",
  "key1": "msvhGR2YcfnpAuTX4xZhqZgFZ1eNKUuXpU4DXvDQjREBF7ZZQYwJPZWWfYiJdhk5D4QuA3woMmnWFnaDo3dd6nn",
  "key2": "CQMKcJ5PSnt9dr2Q3mpGm6RLTbPUuG8zfKhmov6y1ggy3AMUBpvM8rk6NuVpFjwt1RNFmGwcJPfwJqX6jzpnK2C",
  "key3": "4fShkHNPkTTNkbZeuWjSBnu9cuVhxsidjPw4CePkHxUn3n7g2SxCfbECNh7jbMXD25fAfHypR1Ne5cxwtLL6sPux",
  "key4": "5tFVh3Jhwk2x29Tir9pDdXeyegWL9brNX26LJCXFBygUFuhi5AZj14rWVAv6Sm99ZcatWHpwdLvbqZqi63d5nTp7",
  "key5": "51XdXhswjkGUwn8RCXToPzWVuqrLJcTYPZcGbHxqQzygZ2jGHHycNXTHAAVNvHE33iLx1ayNx9daJTAdzk2iXsHU",
  "key6": "vkDBqa2rfScYrrr1RhpNw3qL45HkRk6PPw3hJssbmgtPBvt7S4paVcs6dYAMnfuNrisk3GSLxTw3KsMsfeTbZem",
  "key7": "3wFsNFGzHdhLJQeNS6ZaFLGVhfSLCi7BdEfkRzwmjH7WBZKsQg386kLndKm8XWWYDXh3jcsFn6bz7qXGdTpQraML",
  "key8": "ii2uLM42kn48uFRTnL6W7z3xXx1GcJ8KuSAvJgXoHtKmLtQRsFJaeKP5i5Y2K1GiJcpP11gd5Ski4kx8vBkuByt",
  "key9": "2cyob3o3gdEDJE1cPbE59Y7kqP1yYFkSPcTnCNoNyYxghfrqvJMFabkDnsxJcTDVr2x9HBiiUsYrwfn5cjMyV9qh",
  "key10": "5gciZG1vBNwXnCQaJk3pAiGpWoHMcM7mTPtMbZnEudLgcopqDSCK7oPnMyYUpDR88iCwQvVcgj3bqEuHg4h2B5FE",
  "key11": "44Ce9vp4cuZMR16LUjP2MX4efxKYucjYjFms9wUPGtspd1hbYeGUbtnc1pUhpujHFsHPVJxoRFQbpUKLVzub2KTK",
  "key12": "4XS8XsVYCjraFbBV1FHnFrgi43afGuR6p3XZ4UqfK1P7ByztFT2Yx3YsjRktTvXzx2LbeVGKexT6Zfjmix7HZiT7",
  "key13": "5kN5JUcQZAxmxWdSQJg2KpJkrZpYBFotUmv6FVV4XLJfqrR2CncoqNrija8XYkN2acYdkjzFpkFLNYECpJJe1tai",
  "key14": "5MfdT9bMYXb8MYkCT6K1KR1PdFramEAZJsaqxZ7agbjJgzJz4ju5Dhc73p2W1q1QpGgS5z5AcmHkN6UsV659tEeT",
  "key15": "436jnowLZNbqVzZmVg2Bx18Uoeymf4PJB99tf1T7Ww5jc3hQ9UXvCcLoWh7yvkU5n7mpE89zznww4BqxEJJE4nyi",
  "key16": "5Az7jws6siNHbgCRy3zJu4JBHwA13W1Rg8xw4ii2ByxJagoxtDuiTD1hngJQHHj2HECsF5TNY6TSajSDZJxanqtS",
  "key17": "2om4UsKbi3gz5gyaGfadxzy9phKtKNh5Fvzd4xLq6CihZEu5HmVU4GkkLwd4VFa14VqpAgeSLqXBtH3XZhDsQwzC",
  "key18": "2NMJcH2iNey1Z4GrS25SFjdDK1zjFHLdaapg8xwN3oKnV4sSaVTwvhSpw7G4vwHD9Xa5tUmaWvc1XKXpquWH4MwZ",
  "key19": "63mm77jmLSG5xjFpJPQ7MsHaNDwKLDYQ2WmGDUnj13NhhNKtTZwTNbxzYRr86QHhKYodArdiAFnsAqJsQQPezfVj",
  "key20": "4Tj5mWvcNH4NEPkALk6NUeZnS9UPvnhPHqta3XxwAJ9sPP44CGgMp6FTmeYTFdWavGPwWEt88KkSnFs2iY5sw2E6",
  "key21": "3pAHDqPVjdJqkhJY15JR5Jnwaqki5judf4zVCgpHqE37WDWLk37zVFwVUuyWx57wFBpvZpCGfVQ8AwTWPJKRoJ3P",
  "key22": "5uMTHRSk5AFsKUfVTiN8N3jf9U8uirWZNqGmC1Ja14jos3orkSeAJHHJ2pHLdADM1SEb95a2smA2DrNhAs4hsnKo",
  "key23": "5AVKJzME9JiNgqqyakJcNLVDyTjTzNJwNY8VdPF8S61rAqCjcFHfcMCo1RinvGhVaw6uqPjX5GkUv5Xoqryc9kkA",
  "key24": "246gGm64YdXvqVta2HmUFCCW36HJjBvia7FCtr2LNu7vrNvCmsetnr7ydM2pLQpDrnQzYHsg5X1i9GUf527QaCaR",
  "key25": "5wLrW7HtJEP3gKmv7NMgCbqagmVqKTzN4bEGNQB4G1CABReecKDYqBhan97Qhb5zd4hWWwE9stmUCkFE6uCNGC5Q",
  "key26": "qpdV4PwwDwJZdrf3KFQ7WZ8M4L53p7BjcCTKMCw4Ys9bVsTuoNF8papCrchhxLmxGxFzryTNMZ8KsYahf3oCcFg",
  "key27": "MHM49QeX3d55b3HZoSkqyUH9Ymkzp6M6H1FB1hXrTMzmLcoVUXRYYoPNcgbaoh5qfLPqMeCdL8gEbrgonryxMMc",
  "key28": "3huCgGe9Ksj98xGHxPTdSVxuLm3uNR7QXtKkyycFNvcAPB2C6dB47o9cE3Rzukn2ffoAJ3z4CxjymyUTKvoGm9ab",
  "key29": "4Sky5mmCsTjtgfRYUoTLjeGUwNM6oiUwkdYQQDG8Q8xrLFiqrp8o29GSxHoL8uSSbYy1kjZbext2SieaEoCrzyCY",
  "key30": "3m5YrnXG96NRAj8gNbNY81jS4YrqcQ4Bm7zg218UXntrLW79K3ECXPLBrKhM7H5G9GSnypkCiAPHeywNkZ3QnrRB",
  "key31": "2qsyEsXEbw2N6VHoGQt3RtBx1bSmwHt1EwMevKBttB8axrrxruirGpdAHzWwkeMeZf4EGny98Gnm1DeLSMzuf9ka",
  "key32": "4DQUFSKcqTyznNpiscEpDvWFnPUxeGAhRUFdgUSWc1uVWE6bi4H5XTxBLZAKmMKCiULF1YQ9XV2Twp6h4tqNuRQj",
  "key33": "4hYMEJb5HEx6hshUJbGEAqcoj3g6ToL53kk97CeMAbLdZ36A7kzdeRMUCeVweCL9TPiN1x6DczS88anJs1XYqe9r",
  "key34": "4dnPHxvYAEFyCf7gwgnkyDRUxNVwfit6Dzumg2fdEyvmEboFaZy7vtuUqGaZNrRLLftx9pwGQ8EQ6o1A5pYn1XER",
  "key35": "3pscjiCRDJEYYui4KuYBRXAvXNyXwD55KQqvWSM5LD6cXDwfSZn1X3P6biw6Wbiph3arijozieNYduZQnhj8X7CA",
  "key36": "5HrfYsSkkQUKdcMae57CSF3B5kxYm93TMatLo553N39spGsRAkYPYHGj7uvByFjszuZoYhVNSVh3nkAdExHwxZny",
  "key37": "5VxWM5WYCNfwGx9PLT8KPS4hNXP37oWLv1FkjS2DRwbcwfMbwoXH1ZUqDZ2QrrD4uhAxEP6n4CgSqJxaxnssEi7K",
  "key38": "2vC2Lo7DRxTgAM6RBJomTZTnz5hninrmwbendhoxDdeUi4XAs88Q4HdXcN8YSwQqA6WDZH6AkhyT9yKzkmzVkFoX",
  "key39": "35vFvpv9q3kSgt9SmJckKJWKDFdMUn5SHRvH4aVYNN7m7WX531rmJkBXYjZBThYcic5h6ampodVNi8PPSzUVSxjF",
  "key40": "4sFckAy2Zs6vqQnFnUkvnRC8j8ffWRCe6F6ufNLnbD1XsUrhzQdaDcroK2zq5yeHQnV6ZJfo8FxtaBRNcCemquZL"
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
