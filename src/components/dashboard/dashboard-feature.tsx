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
    "5zy94cWVnmwPPc917NCEBQDTtZHDsZzWJPzQpsaHZVBAoCVmgNrKTHGfUKAxXLrxwwPEkYPKgq8tyE2Y3qyMvWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jEkY1chjaZkDDA21eQtP9jCwxWApGWS64whR7Ah4EVuAafvfZk9QdMB5RyeuuawXQp3z7DQGaR72nAvaHqPuoPG",
  "key1": "4seov9pGUjBRp5yoWZusZhfgDFAyxZ4AKc2q2Kmpau6GnDojSkWmv7S4x5kQTAK17RdQC2pk9arw8MmUvXVRmFrV",
  "key2": "3y9P6ufzfH4bwnhgRURyR7DKjmAcmmprJuZozQHYDoQ1FzBvVnuntXZuwWVFn7AswUjvnGWovefNAqCkxkxu1Y7J",
  "key3": "2XXDCf2GJHMkR7QcQ6phUW6yFM356TMpuiddJt9f2feQViXoJZin7LtzJi1Zddr1Q15aKnT6bkthQ8Xr4KjY919F",
  "key4": "352AbDqJK1rdb6kSY84HK14ennbQNgg96Z89JK87tvZ2P6Jatn5djVGeb1hjG38NXnhrf9hsp5xj2fHTVBkyooyW",
  "key5": "2mvXDi5qY77bB2ppSqHyYNGbER4tNuV5CjmvgqcxNFt23fAWTt3HsUSbSWK2m5pb1C4JEcF2tiiNYpdMBsKfgzHg",
  "key6": "2Fk8rqenHDZ5trcvDZuYuYKPwjFTKi7oy8tfX48eGEVZvFBagcP3Qsks2Eu9yNwBePJpwquRydNqdZEfrSk6dsMa",
  "key7": "2t45wLVgAanqpezeS2zJcFB7yEFBVwrZnrMrYn4Gv3B5yMsaSnb8SoCSbg9wd1GowPKjs7e37XEu7Kb62fdRd4bP",
  "key8": "kdburAnc1kQRucdk1xYLZiLSUhYdwQp4qfa14Nn2Yaj692Lt1gfXc5HdV6wrE9rhD9MmupE8xSgYENyLoPiJez1",
  "key9": "51quocPGmsNx5XtMSkkvtjmdbpSRY6RrpG3PCpafZDrRfWC5umz6b9Fd5tm4tSEeYrG9MgfjgcvkkmbtSPcZVHJT",
  "key10": "2z7ZDhV1UDp5731XxRSysnMuRSokG6M25EFhrbKLQVH8KHVpPd4g2BB1p1oo4i7aUbLZF3SqMnZFWyXBBfFJTz2H",
  "key11": "YnjSctL6RxNC86JrX6Wuyn274Ppfd4u8YirMdhMevRaD7SBfYA6mWwXVb9vm8DXyPV1vYmyaACmypGNu7wJfpQo",
  "key12": "53Jx7icbhVQt8CcCWLEtLwtQeXLtsEKNWbH1PaMjSkWtnozALQEe4FiKczPWbPtJjMqT9PpoU3Zj7RCBJH7y251A",
  "key13": "48HQYzyVpdXMDiMjv1uK3VS5c4dM7GhyFszzdVX2cDJ1MU7ge5AqtsYpkUxDsSXJxj6S5vxk1TiiyPzXpSFEqiwV",
  "key14": "3UUfK9twTqzkUr1a5771Q48czDhBuxzTqZZEfn6sCCqk8Qoi6LUsdoDWS7jvPRceKHhCyMtkqBT8gzw2RyJBdDzQ",
  "key15": "2i9rKyeydZVKZ576ZLAuJJ1FoysMQXRAXc59zpti3idRiav1sim175qMQVrzEScw2PMWC5Hd2wx28b6BAKzNeAxH",
  "key16": "SrY58ZMro9PcjpK4gR3Sxzg9qDX93oJbYQxwvPhjdMic8F76sMAtQL5dFfwymrCstf4WwxTDb1BFZcT5ibQPFDN",
  "key17": "4h37hcQNDKSYJjcdyxCYXvfNx8UcweSrNAYbM3f2nWSb8Gihz9kdBZiSq9wB8C8Tzdm2U47yFyG5PiGru12mCqvH",
  "key18": "2og4uL9zuL7RtYfVMYxyPGDz98EGj6JgYj6XDZn4UxgHUkj5TT4tjRod1G7Dv2Z58jC5sd7j6y3KfBJ8nD4wXV3i",
  "key19": "26uCvhgExsL1M1oTWxJTcMCDkmwi8ZaLTc2twH6kmKxgZKLmqvWf8vvj3ZQxvtZ8XErFD1o1xm6FWaJbW1NGQyPw",
  "key20": "4QqNyWVqCzKajJZERktJbWGXeHBUCwvX7UBzhZBbrsDZtfqbSYU3xc5wVMZD4AU3j6vseeYPGs7RspBoF6RGDicm",
  "key21": "yAi9muTgbPzTahjSXaZ1bteoBynFh7kk8STSnp4MUU5rP916T5G6hv4Ep2sYYFswCvNaNZhVzFqiwotDbTqgXCq",
  "key22": "5oTzftVPkV5UhY1xC51yVE3mSdAfLigx9AfjgkG84SWL2e8bNap1TA9L2HV31RLshhggT81d17YnpbwhE1aSsCCv",
  "key23": "2PdkCD9ner1tXx4HNL2LNSWLaNsyB6U6hvWNoLcUCoAxdJgNiZAhVsYPB3dRjQnD7b8vHSy2pnKEGuXy6amWzneL",
  "key24": "3s4cwCQyeFNtxPwPiK3gWZFGAoi8py7J3ENzKtN8zFKUXnVx9pfUcZoWmrtsHsXqBh7zr86wmVx3t9rfrLHwE4uW",
  "key25": "4qyaAgBEfAdXbuSLsx5vfDeJHQtHNwSMHbxDLaAC1ncToG7QqqLBKYnXue5ftFK5qC6cJohsoNRRqYoysDWqFnYX",
  "key26": "2ovdLPYW4xDd4B1EMFjgL9qfYLbfe666nqTcjNnSCKTU1gPnAGWHFkny12whRcQ7x5cQ5Dts7oVFaEDHiqW4Ay1e",
  "key27": "48CmoigT9Fs6saXvasUvNHeP6EQL4wR6h5FM5TVUWuueocXUhcGPWUFCTKRrGMfPmCY4UNGa3arjYvBf6MkufoqW",
  "key28": "42smv3bs8QAgAzTSCDXQ2niUgSsTc84rauj7WtBwzmTRntqYsUE4KAsSFuXt9FpYR5dJAc7QLA5ASKRfpJmwerrq",
  "key29": "4RFZVfVpsrNsiZnsCX8LU7or4GCenHEZ9zaq4M57ttjeUvCSXBHpfAyk8kqorP4X3G4BsCdjGH6Etx98uQMwhCba",
  "key30": "4W1wNM2JcMbJyrabUEcZhoswbqBifxPZwSi6vBFXtVD4twAMPKAvj4mgx2FvWqfRbZPvMWwnB1BPtXTm6jK2hSvE",
  "key31": "3rNA7doPrn577c4SjZDweYxdDK7s4VrQAMxVH6Hnz2CbeXRrG4TEESuvErzws7yAjhDg4dkMJ8cJ8sFrVHbVnnuN",
  "key32": "4URarQwPMHrp8JM2gZvowsZRU8iGxobXpzCwPPLt7sEjL7z8jRquEPF4ffWF3P4zLUr45H3NEBXFFLfs4aY7rrJn",
  "key33": "wnfDYwTYhZECSETMcDFpzuuE1upA72wj4FEnAMhu25cfhANnyc5tS6tcddT2tKiEAL8pVh9jiaMZKMwrV9DRDA1",
  "key34": "3YejqNzC9CmQtKhZAxv3kJrPD4rstHWtciSvHgaj4VSTQ2h6X5Fw7uqn1KsyaL2mmLXofVCWgouD8vsbH3a5pL9p"
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
