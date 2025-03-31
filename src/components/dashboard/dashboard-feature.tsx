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
    "2JTRnt9GuEFFZPziyTH97TSCAkE1ucc8zmSxTfB1a5HmXRVkxuJ24k58ufkkEjgpqoqbdaHuLMDydNdCMaUKMh9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RFEMWXLvzihXof21UX3ZSD3ms5F8gdHjt2umxUDn4sLUAC8LRHfMHEzTAcpHoYtxTrDL5kVCjJcKehqJbRQvQq5",
  "key1": "48rpyok6KYEERoJy5UCwGYoHgy2Nr4Bogo7p4HbRTPWVUKb7aabrt3j3wz4gaFLyXx2Txs2CemjxBbyvgN7Lhxnr",
  "key2": "2uzqFF1755fZLhiAPB23KpLVGfBsVjXst7fb1216q5Mp8CCs5wYL1wPUgv44uLs4wT2duQCge7zQKNFutnR7zaGo",
  "key3": "44SjhmNnDUuNzZzbbrMQoEDu82ZCnCt2o2vg65VUQe82k9t4JRMQ78GWcZ8wg9Xx5EAV9piAudBZvVPj2GtECHaV",
  "key4": "4R3AjHWMi6ZzRb7p2c7jDmxRvXzTQbcnEwe3fNbJX297WUbqSLaheSvAt9uj9rMb9wnzHCGQo1yzSKPH9Vt4C1yL",
  "key5": "63WBTNnjj9EzmkrJEGNp1vCUDXGSz1Qx53dKzazExP3xqkqwbZyT72nCD6MwKZszRMEh9rnZB75mDZ3ps2z9m6MW",
  "key6": "36hEj34n6vWbyGQGKPZfW3bogSGQKUVT1Nx3MJ23L9CwgCcBwFcxB8UXXXQ3m1Hsi4vS4LKAbZX2JZkUaakkn287",
  "key7": "3BZAdLqftnFLERRGUDc7Wzturh2Kg82sk16JkSDfPCCFSRAsHEAVzN1y5z5AiPVrG2m3HAjrJGrAPJyc4RKe2h2v",
  "key8": "3mvXM7sWvmu9VBrbEPSvyyzzf7XQXmfckT3xzoBnKAraBKFH9mmgiMkSkZHexPiDih5dpqgztvLtTMmVgb7bPrnQ",
  "key9": "3ao68pLbZD1UrUj15RrEh3SPqANHKaRXPjx6hcZaqSoDErbWA6SXfx5WNsiisMuK9pJbUkjE7gUxNALD67JrPM2G",
  "key10": "4fRhDB4FFHqgcZ6HzSKbhQBamEZEsq19RTnBQtuwCNSVNvtPH5Mr4HqEjP4R1uSh5SYb1ZYS6C4j8ibqjsbrxYdd",
  "key11": "5e2fR65o2Zw4krWkKf26F3g6CuRNfR9TEHwMQnije1oBJBzyXX3cZH8KmNiPS2nz1Xiv8rQTDUGV6cKJXUB1gnyG",
  "key12": "5JBiZPLj28VzSpNkDwT8qnsgek6CJ9Ai58AKZWyXAS2msD5TAAU9RJQgTS2nAoCz11R1mjERUcYfVjAWemUqyudo",
  "key13": "4GkPVdagBGJF1ozdbXBgaUrv7AmjQZVV9DAWBxCzdnUmSFRnJMw9jbVKmtiEaSXv4vxBRQazTb2Dhbepgn7Ptrg",
  "key14": "3gUUHUaNqh4GM5BSSUCohPahak4LM2xbUYSdECD5f8iDURNQPdVr83vYBxqcQWP4pwthVxGX9Gw1AuQiC2q4gWCp",
  "key15": "Luykd1Kt3ajNmvboTECVpZSxCCDuCDTN3gBC9euJ2u4Qa4C4BcY4D4SLjWTKLHu7d9jFLqTJoRNk7WFomiA6pdQ",
  "key16": "27Z7aLhLoT2xqiPt464v3Ee4GiMLXwi7SNM5UkCPEnRQ5q2w8mvkzxms6H6vzNQqANB2H6UENKsnrovctZ3sqFeV",
  "key17": "2vqqwNe7eePvKpCpGiLFgw1caFXrSUkKJPq5hRQB44z5WAEPmQ6tfah9mNZHpSmfChsy4XV2663tPU3MjEWP7dzq",
  "key18": "5CMiiDdAyinwBQx7aAJnJ7R8aRMH6CEe2v73t77tyQtSq6axaNbLthJNYHEn5eKSqwEqFVLH4jMnPAtTZU6jiUhs",
  "key19": "mkNEMus6C73VKF1HtxURWgXFsGJaJMeu6WasreRAJH73YjKaW4R3sXBbTyMJCYCdFdyQYeY1rL82JYs7LcgFk79",
  "key20": "2eWeoSbDT1fi84nk9Moq1428p4sgnAieo8ihW9RbyUgwUC4aeWxGsEfGyziSBtRP8qXTNWZJwtRA6XMSq65GDLTe",
  "key21": "2nNqGVJe1fbTdNu1735ABPLFVVJJfih5Eri8d6MEtEpq1aM7N7KVu6mRfnmszURrwvHsKr8yuX7Fms3kbJ2AmW71",
  "key22": "zCvYXoSZ5oqSJzfegF2cncnV3Urq4XivBy3Amus5Sj3cbwaRJGezeV9vT7ZjLfM8EBwecbLaqmXAFJzWcVZbuSU",
  "key23": "27bdfUyYf2g4J5vASJ3XE8VPFxdsRDrnf58wGnPG1rt91Kwsq5Y7L1szu6XES9JWXnkQgcKirVeXDzjDaqEhJVp9",
  "key24": "4idxH9VeTmfd81PVvs1Zc2za4cs9efCkHPW1H3k6wrNbVg2E5kKRs6mY6jpnQUkr9hGBHPFSuUkPiGqKw88r6rZj",
  "key25": "3HvVnU1GhY3B7dEKvQXL1pcE3mou3dAN7wWZiUKx4xjTSKSaBiKjo641ViR1xxiBg5TYWiYzrRxeB2D54Qc4J1qS"
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
