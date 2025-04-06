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
    "26Gqqt1WnSYBsJ5N3cq43hD8f58sRf2Hp6rZUBVMv8gbXSnSeL5pKZvCa476FtQj8jpgkNkAwp5uA4gZdZLG843A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zm24TpPvQBUQwNwCJBgL247j2kyhrqDhR9ytMxDBEuHcg8jvBRPwdnLcpR7dqX394o8v8nzU6ywSUQsjvwTs5zk",
  "key1": "8KugKQQg4zfAtUPTJJUTE22Nh6gtQjkEUML1L4d7YzKEgbmXVsinTPHASraU2SJHmFfSYJSxW4aLSBiMyQ2c789",
  "key2": "2ay7G7tKPXwFiZfCwLvc7NHsfonMPj37NRQY3YjM7DBcy5kAvc19ZTHx4hDmABKz1AKDasd3v1cSLVmziVoBQyov",
  "key3": "4535tASfgaxSf9frh625JYRPHQx8xJ9EKHkhvaG3CXddS5fcs4o4z93JtSWYyKUVG9qgcrxtN5bwgUhJaidXYcC9",
  "key4": "4V8HEHWH7kbvZCLRECTL46or5Z6KmTjcvBNmELgPdNNckgkLcuq4wF5t7tc4mFBRD7fDnT7YwARBxZiqfiVNpjkR",
  "key5": "vs8bQEAFc3zatQW2rpSGPVQiRYvyHccCfNBYxAYGttoPdQWXD1mgZthrB4kP9QpQYoqw4ekJ5RJq84F18Qj3Sny",
  "key6": "5782TNeXRL4ypEmeyAMHJAM6nNr2hAkLHrPFabbFpxs24Go4BvDYcQsPvJHo4V5CSXQS9fpRNLUKJtZ9eDSZPJQC",
  "key7": "4C1B59qayW5itUmbCRwKKypJNA4RYk3gGuzQcxPmEQkD4Typ1SLs5tcDLTdtjXw3K8Q2BuffxQMtothbCe75CCXM",
  "key8": "4HHpuhxf8cXsqBKHwjD63csH221VUDHKHk1U63EaUA4UYyZza3XWoGbizBDukL3wA8CYpLcFtZBWBumPe6rHdJ6k",
  "key9": "2ZzND3dabjZszZgHvHuvaGm13KpBQBCw2YL324LkcdSjTCknbVTU1p7o9YEzRAf1RGJ5JE548xmEFKbqzMqRMtqR",
  "key10": "374xXqS7hd9mrV9bwk3r9RtqQxj8g1Vy19nFsRMx6wrBYDX6gue9FT3sfRwydySiiTFWDWKZCbijtk7AHHN6yKfT",
  "key11": "3KjtfcEk2FMEScq2aA85NjMBNuRuepeYM9qJKUupFRXTUNi5VPoNgE8cmpF97TTGVErE6pVghKu1hKCPupp2rzN1",
  "key12": "SxmCSmKepM3tTBByH4Zt9DHZQTuuiv5VVaUUXkXKBm1PsJPGCw7kjZRN5E8jQaUjE4a9CqvX5nfny9sj5HMRVx7",
  "key13": "311mLf1gpE5YLzXRUYMpyvGrgtdx87KTdDdFGQU9DJtfbX6aqSwrCqcrwNVdPHQqerjiRReLQhCcrDbAXUGb5eUq",
  "key14": "3UyJNNjeddRSRPYnwLAUXV75tX9hjKQfcTn5vYAEatXui1GS3FPdzQ93uwDU53WRD2W429nFq3Dy64i7qxiaGtBa",
  "key15": "iBHWhLiGd7yGni73aEQavxV1d5gW16V4HZBhppsfR83xEBXT1bbAxmWQj6zxMysp8LGxLRZSa8WGyejCQXHSJ27",
  "key16": "5GKV96FW3YTdsn44LGGFmvRfLDSWQUQLMCSAq1mo7u4svQHBUn3Y5uiwEhMTZGirCdDTvTKksjyTmN4iwJkkYwMN",
  "key17": "3qHWtsSnLj16fv2sNJZDzsu96yufBE5HSJQNKKzYwi515zLVFejBD5s9LHg91dpC3XwWoB4yCVKNHEyBvAnSF5sm",
  "key18": "4Wzmuy7QrmupygKPgXvFzHL7s4PMT7bFCoLG61m7XjNrdLhCEvk1mLJWzTKP9bf7n28sghHATyZ3CqNosViQhLW3",
  "key19": "62CxUkGdfpzCDtkaL6zdNGVvbB1SQaDHnQUGtChNfouwTBjrz2AcucyFkAXoeid1G33RTGkbRppKDC6r28jVLAS4",
  "key20": "4tnWAApBVBpxhzhn7dxx8kTN15duYffnuLAvGetgHCCGp85giLXkWnWY2zYaQ6x5vTfaRHmTTEdh2UrnDRYSq8qp",
  "key21": "445HB5K5QmeP6rS44mpBUPhDAVtn6x1Bhx7CTFWAPEybgF3M8AN3dyMRf5MpgmSzFNpcW6iWnCM8rAB2LciZLBdd",
  "key22": "3KSDPUFUtRAEWG539pyMoxUZS868nvqVE2n8vqGa6o1u9o2BudhvDKn2sKNhT8PQsVtcAuu6FH5mvFN4wPyPL77Y",
  "key23": "33BWnKDeDztm81CRTgg3FpWAauhtSqhPsJRaWeNii3M7uNTkxNGuq2ELZabPcGvnTKDW1qhpUYbHHi75Vra16AZW",
  "key24": "56xbJ4zcZRVBkCWSiub1KHLMiAJFYfgKdTewBWMpj3Koqqge8BrvGSBGXGHXwHGGmvkpJXs1gwPpxMCHAzNk1By2",
  "key25": "KDKHJfX2xNDEamTph9bxkD2zfXNtq7h8D7oW7JH4SzxNN2h6QcnSSZdfaE89xDdXuGY6ynN5BTmGk4XQLXqg8Dz",
  "key26": "5q2ctcF3uu95Xw35KLjZAfhGcw6HhTzhuAWdtfrc9PotEXdPCuPswZm5tqpXgZm1tjhKAnQVwfduJGxjYQsm89jX",
  "key27": "3rqURv6x2YPQvPAHZtJgPVWmEkJikM5BPuQsxsVAoJPZWnJRfvES9RPMXvyPvQ48cmjEHPHg6QTw29XkkM8JuKq5",
  "key28": "Ea5LxrytyK5UDCqarN6D2K29oatN6mBmpDZVUFmrqU3sdNgbiPzApvRU1DQ49ofM9CdKu8vk848dGECo7ewnp7e",
  "key29": "z9hp2RTcNpogrRRkmmXpBnE89B72wASTsdTbhkxAKpEf3HJDH7NXv1qMcXedeWxcNjGBC1uTRE44QrDe2x1Qk5V",
  "key30": "3wX2bNzXXbMUdrzXDcKmaMHQ9pHMvtRypmJ5YxT7vhQEWLyTBNoRDC8iGfTh3LHJf2NSiHGitZDKMEUNRT3tkjBh",
  "key31": "3fJSBmhbUPXPAu1k7SD6cbmogAF7JLa82BGoLp5YsDzXhG4BQNF7CZgpnJHQ8o5ui7rMbeX5BS6fqa7pe7kQkfDt",
  "key32": "3ShVZaMwzX8qu5fguBmZpG73Uz7cj3tNCCMGVQj4wL7eb8m1fAoz3ZTNk72Ge1DJeahHkNx4fwPaokxRgbWyVkxM",
  "key33": "5QA46b5hW5jpwFiiA1mDnL6HCj1DsroMNxQNTShFTqyjaN4kQaxteHpFNCnb6pVG8fbD1oE9ZqxWjHEn5PWut8mX",
  "key34": "5d7twzame3GtXw5ey4RckjhcG4QR4GArKv4jY2SDwTPWRzNBHpmRiWRFh3HKsTne4bfjeKtsazemdPDfs1Xk8ku1",
  "key35": "2MFmVnBdSioE64vyESTojCnw79YTW3bCSfqz3jXuTMpavinUFwk4CNiUUnzj4qxaaWo7vX21G8mcNy6RAkqzzD5w",
  "key36": "5kBYuG2mpsAmmxS9PRNAPPbw3DXzgTGEMUDzuPTcfB8aAD2gMtfErc11meCzhiw1X2yYo4bazREEusanjT1NNR2z"
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
