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
    "UCBdHBTfFJNho2i9YY7H8Jd96qW7vHDdBwQQCNxCANQYorju25JhmEN93HpmEoRPYE2E4hHgGeJXsGRKuWodSeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G9PCpV2fj1gQuQpBHpYpgkxdDg9UvPuZ8t7bkXut8bqmHnurmv3Ap2XwsSpyPhEedSJB9x2VpfK64cBxD2vdUGR",
  "key1": "R183dapwghcYx22s4pC8kkSvUYBYWpamjhZKsEZEaGHo7rMeM72QQNeGM12q6No9cNLcuFzg6zTAZE6dcVdtKjw",
  "key2": "2ekLv3pzzyprPykmuMQrs1u8KcJDT9rMNFJ4BtYRVqBGx6aK8mfzJrDGZBsA6LA47KszDCLu5Xk1jKxkyedSvizF",
  "key3": "4Z5ea4WAf14WZqzvZAadkbcueaNMGfLgp9NnrTYW6W1Agj5hDx8jye729kVj4VN8QtgURSZ5DSzjFKfLiMkHFXQB",
  "key4": "C92K5nU9QyC3mKupL7DLXdxR9vPFQrwVCXWxoE8xZBKdpELkQLVjUaioZwz5cvjvPTUNP6YfEDSUVWTryWHhmkm",
  "key5": "3PosaBKNcp5KLKkV4kRQyPcu5ZokHLDSRa4CiPvkKrmqKNNjJDrAEPGic9xx2rduvbTZnXSHrDHiKKKQoCeYLRnw",
  "key6": "5PjUVpTKFXQfSfeFNqGknuGm78a2Zp51DyKrGV4umpH1hHgPq7ZyWzRvDZNF7uzNTiPF5qMLG7jzMfJ1KUXUwv2F",
  "key7": "4u3nHpECUjnE7XcWBwFHD4ciyYQoiicJfdUVi6kPPJZQzKYbnVtfpuwdrMrLVpPtk2GoBX5vALJxKF4uYH8x1gVh",
  "key8": "5wi8EumEiBiUZcKQYNT9fRBBEDAUu9otPrjpQfwUa7KWUxorqXodQ3czu1Pa9zQMCZ3Ziey4otvY2HtDWENtxHgX",
  "key9": "2tjs7Q1oMPhuRkXPr3NChE8dARy1mcYBdKdqHtwp7TJKF4V1QCj99R4fsFvdLr45vf9e71fACfb8YEJjzKrk23Av",
  "key10": "4SLpU83XXGvQG8sQ6LpDCMo4xbyjddPGymUYzyuWvAa891xa3GpYgaB2Mvwd2HWsDcP4fgJWXgH9JUE9FEscJhn7",
  "key11": "4avrt13LkBf5jhsxTh7G18Cu7EdEQ8oRabHjYChuowCcKQ8uGJiFABoCsQ4QgLGMn1vpFtW5TVQLeQU9fdrKTwzf",
  "key12": "3sz9TaJGm95z4Ey7NwCMm23ukJFN1MusfPgwBiJUcwyH7XVJx9uoQY8wg3LVjGjwAKNFA6FVYSnSWqQ1NeJEM4ZV",
  "key13": "JhaDeWCe1mjKqQkdmvTY811TGpmHFUBoMJpNwmkxkX9n5WFG7HfwMKPzApqLjS4HBQMA4d2VPma2ZHxMF3PWD3V",
  "key14": "3gPB8Dy3KNMqcevGdvzbWLxVFiZgaoLq8PpEFCkTDMsFQKQVJRqiZ7XyhT8NXePfGk1a2t7ArEF8ZkjCyqNE8V25",
  "key15": "4587Dkdb6xEQRexcnwZD4kkCe4CHyEmy749EwAErGz3aJu7rpVUSn6DEGs2q9vxRhVmdDvWaTnZzQ3dZEAs8zGxu",
  "key16": "4MkbeqKUDrzgRfHbCAttvT52a26mD3ZcciirMwk8mfXrjSTNskUQ76RPuMJ8xfrAxvZJHFUWnLmGFKJzYB82y7Xj",
  "key17": "4J7fiUWuaPaJxD24qK68J9TtmAYqVJGkEqJJM1LiygVurnRhU45FdfqCyStQ9qRn9sq6cK1K9LHCnpoAC4rJ7iMW",
  "key18": "4xhnD27C3B4RKzxzx3s573WoMdxU52pHw4H2BWZSVCF5gPReyHtftrsLJGepfmYr6vJUWCPAVRtStdYBLXEmm5Y1",
  "key19": "5UrJM7U5g8LgLbBtSFsBk3XBZRtHkLc7rZtnW3fTVkPGzcYLnVBfkGkKDMCPx2UABwt3CR4uzjN5hu8D7Aq77bV8",
  "key20": "5PPbrVRdhLanWAbEnGLga74Ngf1wXnv4bYZmJ2XBUgZ6D4SiSx3bJn2vUTXRFoGLxmRanrk7VWESM5LJPtxeLZvt",
  "key21": "288CAtv3ZW2RmXKsYVkBZXvZnXGKCn4kauCbFo8WXPb1Vk8u28pCbK8vfHGBGdCXt7UGrsKK1Sw4kCdDfjCi2rWw",
  "key22": "vhrrHkpF63NAY68sUvvAVxmEw8s43DPYp3M2dEpUFFE4JcpCyJFribbjA7vT1HTUvjA9gK6Qqz4hHg3uqsTUdtV",
  "key23": "58ZRZu4YqMRcvnFLqSc4d2fNu7wkbWjx7qEEkAi22Lg6zRSJD8YitU5qbJ8t5tyLrrhhCPQqpBb3scWww2ySg1Ah",
  "key24": "22GxC2uF6nNXqaPiCWn2tXswvc2Xhimhf85jtcE2GsqKutBGrn1RbCvmHECbnqyNdV162NV98Ext8iDpSWFvoBRA",
  "key25": "2ZQEH6YjTNH5F2ER9YB2jtXx386kiFNVuG24sXsMVu8pzhA5k7Cew88Hdfbi1mf49MJzUyLb7rRVqbRwLMgdh4mn",
  "key26": "3y864NqQuCYbdgupax3BV3LLvvsLYPQzt7PQyN1sViNzHqtU6u3Dh6Xvjy8Rz4scFUKcxjSJWah9qJXteVRUSVpF",
  "key27": "48oSBTaFz4ndEvZeDkNyPdaEv3VGCNMNttLp9vTVRoP5RiPYokXo7ut8Jo5bevrZGURkTpPtD3eqqccwXHrarM7p",
  "key28": "5gKKCs3Js145WRnRgtrr4Bpw1uv1VdB3qERccrRYGuDDtFgEHMwj7VVfToCx39MSNwxH7XK81iPgK4VBKAs3bgkF",
  "key29": "3VpLfyzpdoarfNSRRvjJAEb5br7LRizNkBY8UTh5vpw63qfiUf2kKbiRGQi5CdQUPeHkFiuz66wiWCGcePFQ5fAq",
  "key30": "2u38CGCUyPYCsCWQMJXdNSKGYCraQpyritUFFHw91eEW4dyyqXSNhpqrhfG6RPKWegDtVoXZ6Za4iSXAGbFqAox4",
  "key31": "2BNG9Jv45uwhx7iUbutzc4uvoXRJCUT6sedvG1Ft9mhTYRtPZqfCbXr2gVzCbod6tNUzDc5WGNSBLkm6m4ydYojv",
  "key32": "ERFTfvNH5MSgcUVZQLPKXoa88KgiMP7ZmN9fVaKbqDqwiF2WYUw24vo7aXECEvfUDVR9q51nDXCvGUjeXnXUU9p",
  "key33": "487oRnZUwaqNLMXJEbGpV7x6WSrrmxrr2Ps8Ms7eSTVjjpjb4ueJddVgk2AJ84FJCBS3JR3CTo5PXUChw7sExKnr",
  "key34": "3mAAaaotdu7McZ77samqHn1WmGUBvo3CjrEJfRobmih7ABhPFn34rzRenT4TkAxiUhHE9VzEU29qNoTrP3VSTzyN",
  "key35": "2U8NWw7X1TXbhiwDCwX7vW9KgiMg4n2vwy8BmjUfebaFZAK5mx2XtYxtKDZAWauaig7d1gptecVhwEMQJhTwbZGh",
  "key36": "64bPefP139ftCts7Ss9V7ys2NDWmuBsf64zWpwejjwtVZvyoQ9WR2SydAE8GoEkVbKVnMT5xTS5vef2VdZhLWQ4U",
  "key37": "2DaNdVNYQ28avH68i1qDpP5rf3L9p6kZ8fWsihz5PtB146o2EuQceHYf6kJ2JxdyLLEqT6XZ1Nq9QVFK16wVyWvg",
  "key38": "anPG8NExgARJC7BgkRW4JgzXbJbFQB8QTPdek5GwdcWXaZ4ARSL6PHmXPMM2KNVjQLQG56Xotjzj5NG5prcrvMb"
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
