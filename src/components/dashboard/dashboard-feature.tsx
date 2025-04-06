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
    "5XTk2EnTMDu2yFXFsHRPzNhUZTtFCJkL9pnyqcAmmRZbm4m2iCfxvLURomJf8J1XNT1iRytY5rfzYquppnwHjUPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RUoJG7Dfzqp8E758m1L1iMpU755LBij2AY9fbeBT3gruP2SKUTGh6fHQvn2VLrRbuATTUtceHF34Gkzoy2Aqdjq",
  "key1": "65scmHDqu2jvYGxAuDs4PqvppBDpVV9pn5znjq4fCYYDcYHaYfgk14q36Kv18WoH7RCWUnRk3oNA2JckLMUYT6Da",
  "key2": "46PQ9LBKWzgzuXHnwFjkEJR4iWoDTy7Aoy948XTw61C6LEe4XS9f3WLrMYYykJoGndCsNYyh5SoAKvhZQChHkJtF",
  "key3": "2o2toeDuAbAadFSLhVg71QDdLtSJvfU8ht6Rn1ihsbQe1aXabTRZtufociikavc2Vgr61H8y8rdNTm4PVeq2DukY",
  "key4": "37AckD3RtHjQDtZNNpahzCB8gemuMfPnk36gxQFMSkXbdsDVNbtdAXDpK4C4CHx2rh899aXrxPDo6MA6WLMDZPg2",
  "key5": "z3zA4tSA86FJjR9Ys1p9EGCitW67iYezGgQErqH1176CTGBSdRaN3f7Rdz2mDM1XLP3LWoWnjA5xMrbDJgnarRK",
  "key6": "CEBxwzLzb2LZkxo8vf2XSd34sKGccggqmr6yzQwEFrR76zhfPNKJwWFWvY96yogz6r3YwfHDZUYfHwzxkZFogEz",
  "key7": "2nZuEHhkmF8iTLp1L4QUFUxNw4wp2npdwY6scoHQRJxfZjyJrTHbaJVbLJA6pWimTGjpKVz6vNWMTZ2Z3QUo9ENN",
  "key8": "oNsD7BMEictzUKo6abiqf9ePcvGYjvRnVcsKJgZFW1ADzc47cDU71cf8AMuXHi7LkmMn42Lb2Jh7pJcQpzhiGcq",
  "key9": "46AnFmB6PVGvXja53d6hSE87o5coU86P27pwWiURYk8F4Ca1TsvEX4sDvtQ3r4xDMMXPk2R7fDanSGq9qJ1G9tgX",
  "key10": "38qGacoey9xq4uxJ1m4jtJd1PRpSEaNfWQDnyjCFP5TGkxG2HmE2Dyk7txKNUhZtpd91qpnfUB6NtRFHaXtcRon6",
  "key11": "2t3a3eUEJ1ydsDdrzMt3oxmv8WYroXiLDfbSnPqaHh5A9gC17bt9y8Ls9CvUw3n3cr4Y7AECYkzzYYDwNsZtSuVz",
  "key12": "5jorTCHtaQWhYGS895rWwFnojijtYJdjtLcxFq12PYFJe6DoStpck16hW4vtANDNB7MJyj6H9dMk3fpqqYCwoFbx",
  "key13": "3fzxPb78qJzGP6SwDMWw8gbvJNUsQ63hvNxwX9YKYA6JBRcQPd8eiwavxwddakyLkVbQRQRY6GjUgqgDbAcJSA8b",
  "key14": "Jt7YMMKNxAppHhiFYL2NKyRjFSYRA85iE8nXMgnCgL4MaP42kxkNtuCzEMeSmXAWoVAjRmzR4T97MLdShEnAmCc",
  "key15": "3TQWVqTZ5yAPx1384FWkMnCp8u6eLP4EU3DG2DHFqpe37GHjfMLkDtLNMnDMqVHXr2dd8RVnEdV6y6gBwCgKZhBp",
  "key16": "3FPeWzX2hEqru4ymJjEPaSMCnpjbB4hkygZgosMq8w2XkTCRNVUsjQK8DyQry5vZatADyfc7kRyTcrRRk7tNu9h8",
  "key17": "5NmqeWR3KG9xJk6jMaEE1zU2fnF6BTcXYcMN32yCDg2x67TzsSPEGTW27ctLKQY32boU5i7pZjxaVcmtT1p9jfSS",
  "key18": "48diy2e5TRv9wVYnmHEMYrkjgZdvWfjdP3rzq3euCUvZXe6dhA69CpHKRXAmH7dZU4M1hpXyNTNENPqRcPPg88gP",
  "key19": "5dyd8igSH6GC2RamB3GdXfGfxBJA5M8nSSfDiRqcn338BVmEGcHFfxcShkuAiFPFZgvpehuX5H9XdiBG5H5VC994",
  "key20": "4XsvF9tPo5LJVpyt6fy8MmwbpjSsBZ2hp6T1nnBPa9PX9Y4YdnMkpBaF5iJju7kHjgtzMMZby1Hu8e2R8RVJHJew",
  "key21": "2RQbMxJuvsegLbgvPmjRPMJKUv83SgCyhxxnf5vPceVPjgZTczGVbhe1DxGKztTmiWhsYkL97SVWGbKnZmsBywsu",
  "key22": "3UjcaBAbiGkkL6vpFp9EYTgHEVnriXu3APrwjLLQohJTwQGZNfDEAQXPJDMDou1NipuihEtMkHkYLDHdgm7aUjXJ",
  "key23": "4u1rjRRSr2xXyxfyrEA3sDjDzhVwucqTSvVuKi7NjaDzDWFXpCW4fSwfxbkqVuqEpxmRrhh3kbgfQYMusePTqnuk",
  "key24": "38fVZAcvrTmSnR5jexevPBPqkuUQpyQX6H3KkBsWR6S3eF1nu5qrX2NM8jEEDNBBQ2SF4wKHpSj3Drzw86T7u8V3",
  "key25": "2BfidPm6FCGrF5KDkpZWHu4x7T3oHQAvjrrScFmiJhTiJ45yjDNdh5nVJH1unNAUkzFPN2b5s1ibWCoozhyvD1fL",
  "key26": "249vzGmPTSXABm8MN5v4Xp7QYjJM4TXLyFDKhRDmyRszfFNJf6onDocxC9HND9NiWob1Z4C44ha67TuZ2EeF3FZ1",
  "key27": "Nxsd2THfHyqhjuA1QCXoVhwNK59BPkGFuNbwNn6vSKPANeiYaSnpJefG5Ct2U9jJtyH2HpdujXJVcnqHAiJbSiS",
  "key28": "29zNibnzsknKw1oJjUMRAFdkbbBifDxLV59xndDEit3NcdEyaN6znfjtoJ7JipvEpoqGXqZ4BHUo4zSmgyEVHhaj",
  "key29": "461nPzVpPVbBSiSKQxu4L8yTi37dsXKSiuDcsvqUqFFuwihmLbUtkN21iffGWpRuyPHREWoBzWnDW3Kc7VMQQcDu",
  "key30": "4aN7TTwpMiz7hFVJ59NKBBsFrGwqAFrBxkFoep9vSMf4WbjjKj9TiQXqpTj6dJM85te8HrrugCE5Ykkkt3xzSaWo",
  "key31": "sEyyQefeTZtmUY1iJN2JGDBQLACCfkbMLd9Ky6b61tt8h1FBu3vRZJqGq7oYLYTwUqqRxwPU3J7AA7sEKhWjWEA",
  "key32": "48kUTTDSGH8ECCYGGHpStC1gjzkNefmCg3JYqnr4DstaLEFppbgnQccG4aDS6pFLPHbzNLyegHjxTFQSa3LhuQ4C",
  "key33": "r8otBjDW5xuBo8jVQU1foK5G4PYCat8goFZeuBnESeehxfmbFMMvFmuMEKaR2RWtohLHMZPLxZZ4Vq7WmQHZzSQ",
  "key34": "3Lsz2iRMt7QMzKnsWNHBtUS8RzCgmgt6hPSp5wt11q99QnyXfXDXDZxAKZhekdc1Akf6N9fSfTX75c1Z1n6E9Ph2",
  "key35": "ofNcwyb8RHtkjyDVuv33ekB3YQJ1vfZ8KMnRsPnzJPt9Wwz7dScdnQe1zR5GpfHKQxXcRBaKNKGFx8CaG2TJCVR",
  "key36": "43fFKhRcSQWmdBkPA4kapTLCGKbYbvtEFuqop94SHQnrqFBsYEYv1ncDNdq8kP7Sc1TJL81Ku63qycg4waTrj1Lo"
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
