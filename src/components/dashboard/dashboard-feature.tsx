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
    "uQz29kaZTkzG5rFVR5ab1XsQhSgjn8pincRGW2UUJ2hSU4W3Fu223E9tSjXytqMkvammNaaqfNixpcChfBLWZja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46SrwX1WC44EU8LG8yLrwdvswD3DeBersMvjxNavFKo3XUDw9f5AXEQdo9hs9Eogg2d5MMfakMzUTomw8HDr4pR1",
  "key1": "pvKChvz1xYUqF3n8GQU7dff52gZHXu16WvqVEHpeURAFNLLeJynNzdbPqGZJEAJjkezyAVfnZYzcRF1GeWBcGqv",
  "key2": "479Q8neGHbarmWqZJVGrhThsk1dcMJB8jZq9MPUddsmEmyM7C2q2b2LpKcDtDVK3YmhygDTxas7L44nwt54G9ZGZ",
  "key3": "61g9swxWzFQXxbp79pSDowcGR1gHgwADE4aFbbob7Xv5VGWc2orhcNQA4fbBnErFSS2cmfVh1sBHp2PLd5KKegRf",
  "key4": "3xS65ssNTNWqxHvpKBsyEVe1YL7JxiGpX3Tztwu2pQx4WWGdtDkDts3H7SF3y8TTQ4coRAP7R1cMoBF7dDCzoxKT",
  "key5": "4k6nzLjhPwYA46BSQxehA2MwUvooV5Lo49w8GQ1tcqs8Yvy7KuUNDYcccoFWkjNC45rwtt3kZ1p44ZECxmH3tWRo",
  "key6": "4ZBMgnv5YkX2RtBudvNbWXv6BsXk6bxQWQhSZCgMgbVXotM5hk74ZhnfvpsfTFPDHw1jvMvhjwpTDuo3gHbzLRw1",
  "key7": "5H7ZYfUwqF8wWNRUdNacZ4GLCCpwxqLbtnwAD3eZJyi5R3aXryrxrkKLdKW87Ba6WQXYyGdko1ihzcU4MhY5WExm",
  "key8": "2CyzkWWBEZNJfEtxp58v3EfiRyjPY987rSDvX51f41PkfBUg3fVxzXSywB8ip56MnnA4eVe1g8yEE6Xrg2pFkixu",
  "key9": "2bwHjcKJCT4zJq4HFNkPSF4s3ULa8UnpDHi5YRhW9xoEFPntjjf9T4g5JP2fxcA7FjzmgAr1V75VwwZ2DCFnFcE2",
  "key10": "21yhCWRAfrUkMR4afnJJV9yhqo3ie5XTeJFfzqEzjxYUEi6H3ZSyHKiovesp3jdhCmMvSPCsr9qoJhBmWjQULksz",
  "key11": "5bhfDvPj6aGoqbB2eYXKToKd5E1kfU7cQyUxk62ttwYrcANW35eGNsQmYfrokkpMZckdz8DkLgW8ReK24UWLW3a",
  "key12": "2wWXHCdNVWcTLurqY1MY7FVUVYFfgcejM8LU2KcStuoijamU1u255DUiwuADnZbqZ8egkK79YecEPpfg1kqCKNfv",
  "key13": "3KhQXPqa42PLDDQcbvQSnpofVaxEBKkVPo43qHwKy4xFFPKSdSFL5ufK1Y91PV3xCjcAdUrPaGZGyBLeCL7kE151",
  "key14": "3z2gBGs5AXaAM4WzcD8ucFA3LXZWtBPfacEDuUp6GqjfehWktyGxB5sWW7PwQeBpVHpExCr1c9qbXWbUbeq7MZXk",
  "key15": "bCBYQe8gSv2MKGRehFXRbhB7u8vaWNgnYmin8bZkrFsguzrJs1wNZp2sXYjoZgJyF7kusC1aaKqhnFBeURS6dEk",
  "key16": "9idckQmSBcJ6YpxSebDMwyGhUQLrBreKPdFACQv5SgjzFwbyfYy3WEvGURirKRd2gMSovbK7HbPFmjErskyLKHp",
  "key17": "5GFUvYdw8uJhzvyXpu7B6CNnpgVNezZLH1EArXvqzftK2huLWHMqSWgNwfoBcBFVUXSbXNRvE7StGE7azSv9gX6s",
  "key18": "44S3jxkgZzc2RpyPnV2GTmuWufX836RtT2dxhifdAJEKZXwk7bQP9neu9p233pLqA9Vyf9kUy5fJPg4XuRm2mWFm",
  "key19": "2SQRdFdfaDoBrwNP2JMoBPFmbBFbUP5Eu2BTnNHKSTW3n3grJq5qF18eYEyXAKSKiYk2EfhgoYDt3RbcWyw2bZoi",
  "key20": "2uHNKV6YvUrDdPTjnw1dG8hDLN7bmC4AKPaQ2NeN8XDdpxb1U2kUkDujSTTqC31Eb2f8SHCze8vyFxdiNVLBzgsX",
  "key21": "2EjXGzBff9nEEu9Ejxf36V3rEvrVhyGuUr9SEL3trvPr49B2mZymzCNgrgZpLuCWbBbhYkktX2gffuFkBSY4TNtZ",
  "key22": "563QuB3pUSLLq1ifrrfkfx2DTiHrCbBp6A4hkpBD7Pw4wH4tjqAvH7ojQUsrLiXByBf8onQXFikT34f6nr5bfd1u",
  "key23": "5wLbNxef8GbTNRBF2kWaBfLbmvxtrdWZ8umyCNvNTF2FnAeQUYiZyNhoJSeSCzi9E1ZKzCp3JPFEeQAZ8gMCEPR8",
  "key24": "4nCCjpBjZUXe8F7BbL5ZfnQoxfrae1hMEbLV4ucrsgQdffgSwQH4kD17dxS86o8rvCogqrUaX9wjWS1YK4rB3b6M",
  "key25": "MPD1mxhz38uDoy3Xc1UaEgbvtxr7VbhPbLSn3BeeJP5nvgHuq9xPcuNLJWfy73RMG73aaEWiPrj8cxhg9uYAhje",
  "key26": "38kVTyG1cofe6zpmT2GBkFq8VdpeoXRZwk9qz2sqxCQkpdob8YrhCSkj2gCxtX6bYbH2bMSM3E2LcRfkqMRgjr9X",
  "key27": "2499qdR4xPk4hDPYYKWBht5gSnKsNTYXNfYbzDJTZAvogDHK4FR1b4NbjtDEW9rMMbJFHGK2SCgs9UEreFgFin4C",
  "key28": "5Sv9RiLVnmDWYTHvqn4TUDEBtQNHpeQH1SR8Kjm1EDvFMWezunYperuGGGjevCeE22bhXHYLSavcbZkKM6dDmEVM",
  "key29": "4iQQpFGtfJHjTFp29BLZ7ancq1k3EcudUdWCfYbfxgaaV2nC6Mj1NRGQ4R7oNyjyjsW6KeknJ8JLTyRhb9vADVpn",
  "key30": "4WFb3qcUcqQeQuenVDcxWgBwNmZa9sQfQRZpS3JJ1TwMw4G2Sq8BEaMk9aczgxtM9fnxM31ynfsp9KTQVS11RXLL",
  "key31": "2QyVnMFpGF8DVg2LiYYggde5cZZBSgkFHR35CNne4Sg1nBRuMMz83Mm1j2SzND84sCckmpsZhEZhzeu31soq8Fvf",
  "key32": "4Ke6g5mNEdPxFbaDZGFcwF68GhVrtE8vS2iopY2a44yJS4Yc4ApzfcUPs9Virq5wvtVGsUpvMoYB5RWFqB25HzM7",
  "key33": "3PQH6YiuEq4yC8wBTqVP7EnRFemS8sW1vH4nWJyxujdrdEfEhS25jBScV7wYhfWr1qHDDNPaGyqQm4QHm6BWixnH",
  "key34": "4t7C9JrBRUgBUj9mDrspLjpYnBw3GDD1xrKstVfWFCsgbzjyveT4gFbD1KSNLHSm8mvprCmNboN1krnx1RUV16xT",
  "key35": "4qJrqJqHcX35d1ymTwuovxDcp3FiCS5uVhVZdVgxwoc69nf9sjiL6mSy4aF8b9gWGzoUauXPrvuuYYCBnPmRskpT",
  "key36": "3JKitqN3hzuLaWdMhQ6YfnfxMZbZip4wFGbYNtu4ZeZugjCmWYGH5ZVSbEQ32rxjzn2naxMDrdpxskQXChxtZPVF",
  "key37": "3wPyBYMw6hUv7nbDtsS6UNaVrQR6Ve1zcqPHw9rC1SLaWeC6KBmLPZXNiQNQ51CW6DaMgSr6PQbAtymqpHZ1rdKr",
  "key38": "3nbicKhkPme39C66um8Cjk9gw2ciP2GnupY8f3w1j5VUgE3dKNRzQe5vHyd472AUKaJwPndUyycd24EWXqHjeK4W",
  "key39": "3eXmjZnC4mRVvJQ4gKS1r6145P1mo8LenkEXawKKp6B7Cwd1sa1tVELKAXhFzSrBGFK7QkUg88grdM2nkWVr5b4y"
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
