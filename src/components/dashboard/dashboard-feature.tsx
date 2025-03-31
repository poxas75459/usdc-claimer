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
    "48Bxrov7t4T1PtCgHwYMnRzpKZ8ENvhbh9a4HCp8d3P9BiCjGLAxKDaVqo8KP8L9e9iCY8Bpuv3vneQBv3tNWks3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RBpW6SjjDZ7LiebnqfGrWmBNYwHdKF56T5EwqGpVY765pCrZ7mPwmkzAqECor6ZZkH3mvr9vMdGPUWnynWADJv2",
  "key1": "6oJd6Mhvw4T2hXVDKePvJabZ5DuZky8umEunMJdCzZA3DLioh3G473acjnVspF2wGfCFRWR1GT7u7aJNnmXxHty",
  "key2": "4fJomBLQBaTZvPr6FTVXgBCCySLLRLGLDvBoLvGCmZWcpQTXQ8c5FVD6T2VHNVWbaewewRyWpWGE6kt3CdML6Xm2",
  "key3": "2mkrf5szVpkkaNDbWL8oNpRHiq4uBESCAm6jyk9avVBSN35qmXN8RzV7opB4Auz8S9bePq7twosUpxLb3vAeWgYd",
  "key4": "MUwebRjuT8P3zxDor6dg7tWoxFoAxouMV9MWXjZ6d3ouJaCZF3Vr5aiaG8b4yDDoGjCJXbGjpLdSGNMCvSHoHQJ",
  "key5": "3JQgnsHgCxqe4kRDGGt1MH98tmx3R3Cn5EZ8hiCxv3ybYiHHy2X7Ly14uqYSqq3auVStZ7RFoUT1UvHiUybreWzc",
  "key6": "pHnowdxcv4jvjUU3GPH7zdtjm2LHnRhDCGUdeoMGKSgTqJERY5jXE9NafGD4xMZrLpqZDed4Lf5r33x22VxtanY",
  "key7": "2KLn4eYQGGQoGopHWkcLy9TYXzakAnwD1fXzTVrvByd3aL73n6MNYBQjKmhxftVMT3UgfGmLw15quh8TCz93E82t",
  "key8": "47uasmNJVVhvsHxDu55iL4JoFmJQEKysWp5xH2rFuPo1TXB56cmCmfYdd6kzU1KumcnuTRnsDvhgpr4ZnKqsm6Ze",
  "key9": "61JxWauRKMz2srTKRvrFphZSsjitBRzMTbrriZErKHunuGK1j3uD5mEsyqg93ZMCC6VUaLj8WKQPTsBBpnavysbJ",
  "key10": "zg2Nto4BUbEagHnp5qHRxN7wmqBtZLaw1C6b4Z2e6YmKELqincBzcN3pS6CboMkcoXMEwsbQ6L2sDYZVzzZtPN7",
  "key11": "48ZFMMfZs7rksL45zbohFueBhZkAbWEXjupngDie4qtHL9dMKcNXtmijvz8N5v7YYqsL84DKexL6FN15XqrmEMDi",
  "key12": "4dfWz8bf9ASKNPb85T9Fs4QgfaMmX8hfv6mDKnZUq1VVAvubGDgbxbYxKTQpt3KjvTyL2AGrQMbsLeXxvUaKXUgh",
  "key13": "5iJU4RpPaV1vYtHvVLz3jGE7Sk15GS8STFNsNQDZcj6XxKBHPkFCkNsYfcDaDZn3HN3W6gjnkRSwx5TJ2Bjtj218",
  "key14": "4hus9aLnMcNWQmMAqX2nbbh2nX5LszLgfXnTqxAsyN5zbra6An2M2J2BL15sUmPo7DUzK6JkkQe9fouJJ1SGtDGa",
  "key15": "2TQZa13Drc5AFWPePt2tKNmqngEoXVSzGtVL1ByQuvG9gi9XUzXwzAG8NPDM1D9EFak4G86t8EorZFXTZE4zHV4t",
  "key16": "4386ZabMumxBYjtzqQvFtFwvRWCLXHD41f1vPFoZjujoNCrWs7o9BK5kkpDa7akp4FPEXXfFK6J1CxsFFCJwULJK",
  "key17": "3r5rUC2QmKgtR8nkB44V3rhH7diGuJaGWKm6TQzScwGLdPepzmCHZrNebrX4fWRfUZQHL3ahMNm8A6rBB5j9YpmD",
  "key18": "4D5KU94gdzm4pfWT9UzmetxZDnWKD7Zq98UpiGvQuFpC8S2QSEMpk6wPBtjKgRUv5JfAkD3FdcrRmi9VQyzjbn2T",
  "key19": "2mmSKUdCh3SckanzpbDqDxHnX6qoQ9y8jHrq1ykw1qKkpcHadE3a4a3aPSbQ1PvHDUaDmAU5zGZYUZe4k855WVD",
  "key20": "PoRjqNn8jnVoUQBye34nWHRSRicdqRPPNH9ZgKZtzRtoXdv626L5nL7muGfC5MS7AMcRoHsGy5BhSvVUPDiffP1",
  "key21": "5TXsxSQCq8HTd6SwmMJa3Pxev2tnVEod3Zvce84G1oMsMc9kEYME1uzGbR3FEsyNhywu7EhZ7BA2pkreTfub7oe6",
  "key22": "3RFCaqjedhTYsipyTwxNMm9VehShmqfYLccTrr4WFNNpEkx6pF5LdrSRYnnLDGWZ5nLAd8gF1f9AJjxGWmzLq1gn",
  "key23": "2Gg5Cpt1Hs55xVPTe39cFU6zwVghMfgAN6qDSDVFMLEiJPTPKeD4JHn7FSGN5coq97irCrP3xWrT4Rxm3EcersEm",
  "key24": "4N9aNNownyDz1L4HT8xPSzp4zd3ErQ5UVXbXUrdmu1MM8QgaXAJC6gQMcyMwPbsVoxvW8RfTYeQPtJws5aLEcLFp",
  "key25": "2k44TPH3vy2HV6FLYsLSdRwF27FQL9LmqyxKUxLpBazcYynN3AzsSPBfDJPUYMnuFCL87LxWW2WtJWr3GcR9fTcM",
  "key26": "3WfvPq8mF5WCUxN4QcFzNVUZUZ2xxsNX1LgQA214AzMpcptnveaK2aLxRM7p5yH7CrgruSsjYMXqtDPG6bXAn9A4",
  "key27": "2WDJ1gukPYiLu9hgBzvpRUg7n8Kvn7JokuXNPHu6AxW91JtwH82r6ofdMFfHsRHTyduU9vNcr7ZXHu5HQXcPNczz",
  "key28": "29AEP7JvyLePw4HfEsC1Af4ketWs7YzeALMX1Xae6MVenmrQtUvvWfusHWE1WT9bW8Uo9Gfa74mpyWqc2BMDArqs",
  "key29": "2Ev8AMqnGL6NeUFSefF79oXC91xNhrBZcSwnSgQM1dDHGBqbRL5yDCs7vFW4YJE6QgYLQTqsuUBaWwFw2CEU1rhE",
  "key30": "4quzkShN4dXBifUGt522fin7KM71An26LKoTRywpqScTjs6uHwJsn4f3oQ1WbtnCqyYrMgULq47PhTdWLaxmTkv4",
  "key31": "H8od9iqsxn2wQjSbyoF5NUauviE6u29Ky9WVio4odc2LDmURSrN7Z9QZSiNREg47z5tqDiZMGCEyqZe8W3Dw8oi",
  "key32": "3VNwcjL116s6AWiEiYgkPJu6JC2btD8ohSm7fgkJ3f6kkEMQHhsTKZTKS2agh4mZkm49XSPU1Z96xzvXcgVNr9cs",
  "key33": "ESqpajvmK9q2Sk6jGL9N6fNfHSXoJm2hFVGzK9wyAnW3xkP5m37tsjQE2Cw5ZFnYv1XMEwHR548pDhkvJs2TmE3",
  "key34": "3xVUViSLyj1LP9CzWzPiHK53RzUPyS76YVHFf8gmdNGc5SJn1jrRpCyBKqroXQof7LnmoU78U3LjGraZnsRVXqyu",
  "key35": "5zjE17PjMhYnqMmaXrNyv28dbQQq8nnS5ygXtXM12HhQqdUEkgvSZDH2itMntACvgXTAkc7YaQuQRPLc4A2yFPJn"
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
