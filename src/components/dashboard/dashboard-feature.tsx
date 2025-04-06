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
    "DBQkn8S2MNYgEVQXUMxs3wpS3K1reDbjuym2yiq2SbVY8aMcx8KgPSgaYrbedGWyAW9btHrpUAqPCdEgENkW34X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CN6mgEn1Y3YcgDYcFtK8tyyCVgbUQJfZjREMgbqu3mmJih7YaNkyV4E3E6T54BDqK4Ku8NoaHDZN9ewXsgGUcVV",
  "key1": "5aX4b3CQKmeAJ6H6AMMRSvpMccdJhHFZfUu14fFwj77DSXEAJqZDdnSYYnW1MscW1x9y5aDRFxJtbiNn92qABJ5f",
  "key2": "54f3kCuhBe8jMa4UQ2YcKGwywyM2gNrGoSzwAycRVjccDeqkE3S5PoMxwSU3qzD8drrFhUSvSp5kr7LcVUNinvPW",
  "key3": "3QiFE7QDSYoLKJh4gvPvCzhw9DLwFULL6Frvxk2K9AQa9o42NMvLPp9yWF79ZF9sQMsf4uhv4XbQAHqViPBP27Sr",
  "key4": "5ZhUQgh3hUHKvVzbteNTFUueWgZox6bLEjy9AgXspMh8iCLdDTY7nN1UaHJHKbc3PxeB7NoJr69D73QdZzBts1LB",
  "key5": "5fordLsF99UwwD4VhVneePZ8SUT8os68VjyzSUEWCtQWNZtHN2GMFJoDgu2Eqd6CCixhaivwjwjPQHvX5qzPgyKn",
  "key6": "NEjkpHFUtSxDCHF7neGC75b6XALvjnTvnBKAZrnTts8hjduuwQ3GA46SDG3YhHsYr1FZYaFYDiVWMSyfXPN98Sf",
  "key7": "3Nem98eBpuexkw4vbGoLzPf8c1zkJpfH4VoMaBdm9ZdvTA7RC6j7AKQ7xuk7vaBMUXxGYbkotzNwL7tfaVFSzSFh",
  "key8": "2R8rFGpdmGGXngc6ethE4K5Zor5L6dAUWtyW5QHVhw8fq8eu7u8AKxkE65LvEiDbPUN5Mz4tdyDY4UoLZ6e1m1EB",
  "key9": "5tXuWH7uvPbETspM711bLAP4FGQfMirEvrHCgVdKKBKXTAScgFNRikhxbdSfAQNWwnCj66xe3PbjBp94K4vKBjh6",
  "key10": "3Kpf7k7WeqBFgnAQ6eSSxyrCEbbKk76UVEEieqthbgtu7mRrvnKtpjE7hYEEP2tmWfFzPtmSHLjtxVE7n1C4g9Hh",
  "key11": "gXTs5U5V8M8ySRh2EWAt6AUE9Rx5V7TCbE6Crypc9TKSqYDmu7Zn2kTkKutePst1B9R1fPGHGmf13rPW4qTPoYM",
  "key12": "2YFaEWbxytcqyrziw89FopL5y3mmXK72Nh2HMbEmqB9dJQg95xyjMsvMEJ4mpa4v499XbgBqsEcghSN1A4HBxP4o",
  "key13": "2JfZhpyMDtZa4KUrTm2j9cNpyNocukhcV1uqkEwmQgpfMXZWrMitubnVSJE7D2aw9mLanRErrmXqeoM5sU5EGBea",
  "key14": "4DrezgpYF8TsHGxrY8yWuZxmNCQUE6TvFHdGrcNtoFzaM2eGyWJrTFpjcEiC9G3ghmPpVmtkj7MgBnZ2mUdkNSaP",
  "key15": "4aGBp9KSggy1ExsD26wGd6mg2HpcXrS4h3cU3cawMNaNtnPGWFuhJLL2zgMyN6JqjXrnr8vGGT47GrKkt6VjS3sZ",
  "key16": "4ieD2KfUCcTrLZA6zu1jb9BSXmS8oxemJuRkCmptX6B7V6YpKN5FFFfUzR1k3PaJUYz399dieVwNYXcZKnpEqXhZ",
  "key17": "4Yy7HjUz4uyZMuodGZq2ZNHuyb772v2DFhJjBC79aMqfUDU9yUk9AZjMDYtbnb7WQi2UfhgU7xSYfZC4AYkZSU1r",
  "key18": "3USHZSC3uybBPQPD4p9gptKH35whi6wq6jBndi6TFapfV4ovR5RnpkC8BS2HjxnbZV2TpMykSjaicdMCfKM4uDM3",
  "key19": "58Un9UmLQkddXTKiVXoN7gCqc3oB3zFFr2Hyje6RWsYBVgU2eSfdK4qPGcgwrZga2HBmUqwDAVDeoKq3WqDby6rt",
  "key20": "4Es6NAkEPfp7TEYUJnxxPhBTGL2x4uiQkAyXuEbX1FJNeK2Xm7qqxij9WCE1dTuWkkSBLUoU8ndDnprz9zJXk4VD",
  "key21": "4pvYCTSHwMFknt3vi16jyLPywFBxYD3aoz5r7vfNM8u66pPFdML6nSxBAJ38Kcm5BaMdZFMHcBw82TrHRtkMngDn",
  "key22": "2KLSdGpcF3Zh3wpoSEJbEanqprc67SC2e6DaCv1rxXSgiyKZf3Q5tnYpmTr1mduvNMrZ36sJmfZKAbUPjwvSf1t",
  "key23": "5zNNUYTSJSaJ1hjvC9UQuGMocfWMft5wM8eoTxdqzPFX9nGg6gtaVYycuYngSeuPjZfuhnK7q6S8uXdTPYGrYs1G",
  "key24": "54BwxGAjX676MaF7dbozpSWtjqFYfZZcBSsWHkiLynPMkVcwVQbo6jaujUrwzHuHz4aCRHsWNqBDZtoHgw9a2e2W",
  "key25": "DMFfCH8FnQCgFCHB4mS8qYEVBBP1UPLZMuF7ZgMPXebmpSsec3kwF9ysb24PyDsrnM7MLZVHbiDB8D6E7EBXCLY",
  "key26": "5GsKxed3xedWE6UeTSDzVLKTs3rnUuj7WzJyyx98RFU5YuqaviHRdDd6XbqpLVBrDi8B1Ddy3KYtRWDpmfhfaGHd",
  "key27": "hoxj6GCWsADH1riwM4h47NYsHNkvguiNMy5wXcANCBL8SFs9MJZDRPTGSvSf3UGMYy5XYnxCqTXTDxME6ZTWWX9",
  "key28": "5mP1cBy5tTyiz4RDPoYb6kzDr7cywiARnEbVfyb8NscJBxozkWDMQjYBRtCDKGBz9w1wEmX217Pj5wDAgjp6B2GL",
  "key29": "4TXDb6C9EWsn4ijZj485ZnJykHRsRPRdzGrbAmgXTqvuU8d7u9sm3cmrrQg5pdgWPdMYEbty5x9mbucGQPMmBx1e",
  "key30": "5VbErFXZSYho66qxFuuVwgNJz6eNzPUbKDosJPTin9z7Q2qTRLLWttxbQEgjLDc1QsewQhYHWrVNzBSRXSg7o3mi",
  "key31": "3AdW36LZ31nyC74ZtwDCfmKvGZ1iNDeTpUb8ZwVRSCPyeVuL9LA6wLV2cDWJcZugrDZZBoDrkh371guvfy2My6LU",
  "key32": "5q9Z7hxEKVLnWxvMX2fTeWGPYHXfY2BjzJe51cVnX9sEhj4fUx3eQgQi4kmfDpQJXZfTXZ8z5pWMPWyGcCc5N7Ud",
  "key33": "nk3vjJqEQpip9r1sQRFAKWvLmGAixFRscJBFpENSurrpyVt2qQeNLf8imF7Jefbru4VajyabEutzD79zzNcTLRK"
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
