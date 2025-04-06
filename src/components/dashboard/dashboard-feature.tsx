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
    "3eJiPs2MUH5vXnx9aPUNG3bUtuQVc7qWEv5Mt59mMHCBm1m31771yZCibs4uCwFSLdmoRQbfeEjhKPkj89aQL1VK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uaHLuDawqmUWCdVNDtNvAyauRLnU6ch1HiCQbL4XaNZJKRW1MM4M2NShU6EtFoR7868cvD8FEy5NDELqC2qv9gw",
  "key1": "51qtz7VJWfY7erzPhbtZxZcuSeUb1aor9HWeiM9o7zciJFuRcJ7BBgrsx5h7GNTXkixzGySfmVADGaTDjTFVAPVM",
  "key2": "5DZeFXzX4ntcH5VG9P2uURRb5rfBpvAw97yoNFi544vdmkksLUPoWMstTkmHsp9PznoxjZgUK1YqKXNBq29kYtkJ",
  "key3": "2vPsVe1wMr4dozq37yY2ZdETuigytbrExpDNH5ViVeqxUvHNoc4S81JTUwcwVt1izxNPcinVSKSxR7vQ7Nm9owT8",
  "key4": "4oqA5fcvH7wRAWs39EPUzT1CQwyfhfsHdgzu3JfQsdAfGg1tH5pXEqvV3Ze5kLfF7q6pG1Wi7JP17G9XpjLGH47v",
  "key5": "4NrgfhCEC1mXUydesEzEa9C2vpaed6opr8yUMsQgSiN7viY9ppVR4Uw9RK7G5kBNeYvM2kJ21jV7XWmXU4Hp5opw",
  "key6": "4528Ecaean6TtWgXqBSmsNWrajHkLuUQKVBvoujd83RU7nQSPqMjrJCXTPqDaB75dqapimvcFjzhi2UAVUPj6MYB",
  "key7": "3z4WqazQCge5MYpExffNSMv3bB4qgr4d2gidtiwJ3QyfocsxZBP5mzmMeY7JgPNXXCZU8mmmubAseVjgQN1GUqjq",
  "key8": "46wrd1q5sibEXPzW4t1k67abC61yFQoHd7HXSFuDsYxL3HFfwBju3aKcyyGo6XR1Y1wiC6hyyUhekD8aVzXLmh4K",
  "key9": "45e85iRRR6bNrJznLi7qS8uvWyG6omQ11SdpUTXZvFGW7ZQ3VeX9ErMVjhmHi9sXXftjLbXALwGFNcYxjzadUToU",
  "key10": "4cTYY1fbkDxdFJXitLtMAsrZRzzCqB2GMna1mz41zCw7waU5jiWSqMXFq11bQnX6xRijHewjzxRAHJiEPseSLXp5",
  "key11": "5eUhaWWq9f4bLLz11fZpEnKQdkTBLuUcpTM1WqDQ8ZYksj4mK46RCuYGygDTRrcg86THUo8o6X2u78cYTjwfQ62d",
  "key12": "3S3NujDta3Zae67C4jZDy9v7LuLJ9zmXcC8VvvzYJJrV3Sw8T34zFvPhiDSpcCjPNTE7mbomgQUpo92BxJnNxa9s",
  "key13": "e267vbRwd1S5w4tnwnnhNrvYek7yVAPczWCwu3f7A74uj9UX7WbAzotjj5JyzLPpEjS9EzCREMXvtJRAKvg6GMR",
  "key14": "GkjN2f95eiNceBzXHJtBtQqNdwayvvcoJqKQRZvLg4ST89Ucmk4K1dchhkCAzcP1HLB5WkyiooRZCoXKnCZs4Zg",
  "key15": "32TirZMT7VzkgaxNuVjsfSb232EcNne8PEPxNx8yvyZ5pdgAzZgQdtax9vVk336BFtACUZy3chjF63spzyE8zVMi",
  "key16": "nkdF9Z6mq1mNpLfgddoGaruCSvzH7zqnZ8Lk8KHS2U8p7mVbxMq4wt8E3rX6F71s9tLUbF5KF92gSwSDAx6zAdh",
  "key17": "5jxpV7vno7pD4W21qfqrjxE3eJoHzWTbNvokr6c97RWVRcZASPmFAVSyQXAnatDAE2b2XfXdYu9KhqEcyxoSHPr3",
  "key18": "2GZzwQxDnAdJZG83oByXbseoMAa7XxjfCxaGL2VuSwENfgvYSPJxY7XsmuTnF9xCsmxShet6oEiTPGgTLubnDU2f",
  "key19": "3AnXwAjvLCN5Dj5wxSdU47syzPEdx2XLn4R4LiGDeJD7Eda1yGAU6aTiMt83EmpHf4aC81VeuRSxA8gMwj5hWbUJ",
  "key20": "3mSCU3JvqF85JcoXoJtRP4mXNpruMXFyiuhqoHnqTHCw4BDLzw1UrVRW6jbdBa5dxF4EQULTwuVpmwkPTmsBHTKF",
  "key21": "2rYn37WgiAjPmiiVW5AGoZxg2XMctLLLpDV5GujyjevmSYww5EYnngYUDLxeNEqYG19jzQDhDkfMAuwqV4ryKxa5",
  "key22": "2XJDigskUP8gSKq39DndTFTUpL72LpReQus6spRRgivNmpshQRvevckkUyaqguUPHVkhdKe9MN9Tdq14NDbJRdo3",
  "key23": "4Ak9jmFi97HDcmphKG4bVhitAFCYEv3Eu2P23o86taNmCQivMRfio8yDXso5RHqJ8xZLFdrcanuZeUNE2sFy8asr",
  "key24": "4QxJa94Br6XAWArCq4SKwkXoPecq4rgBhZ4bN5FiC8U1x3q5PoUtc25Xba8TX2A1vFrK1aj6C2c2GJCiezGQsZ66",
  "key25": "d6BRujcKwUAopcyAoWr51AmgVVjfU4HBAfsJWcAYqZHgC4B1JPcjNUmhyCeZwemJFzJkXQfj9NYL4BVwWAE1Xh7",
  "key26": "62PDbQvDtabFxmYaoRxSx5m6pwmQsQUGEMzecP3hoY1ewaXpA2V9hrVfYrQdfaEcXsyNdoYcy4W5HuNZwRnWKYrR",
  "key27": "3rt8E4PdnYYtbs2cUt7haEhBGuqhby8CMXufYtPH2RfprbNLuuSHm139FW6RTBBd9kWxNnMYREAKNKaaXjmezZzR",
  "key28": "2aYzVTACyB8vseLm8Xjaqzqxe3kqDq3MGqXVvXHS9ThfctVBwF89HX4ifaGRWw7PTf1ZfkJx9CiPkVkcXk4kQoUM",
  "key29": "2Tbpf3NZFCtquZd6Zs2Ntsr52NB8qpYJZTSi2qHJB9YpFPoY2eC2mdAuuM5DdMecrHoF8DcsenQyQkubBrqXoiGG",
  "key30": "3VtRucCQuRTc9cT9AdYi5wLT18CkfA9uo8xRkvZUkpPiMBPLRczBE5Tk9rEocRzq42jnavbWN5PkC92RhxsCM1st",
  "key31": "2eyMMHodaLS8Zs424t2Ps8tmkfTqhUv5qgJRHbxfWo3Sr161kYsDgmUUAi3upmeW3nXHGpQW9gqQHCUZ2S7BEStj",
  "key32": "4bX8FmEtqUrsgHfD4HqiR9rJ4bXaQzkA3CkgP9eFu1Np1XkbE1BivtKUs56jKKuwJD8jVD6edda61H2aNhTyZeca"
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
