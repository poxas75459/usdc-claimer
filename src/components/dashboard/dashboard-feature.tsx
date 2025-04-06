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
    "2niUaJsh7e6Hq9eD4ZP4eyjivUExgJon1hZ8d7Em6MWar9EMJpZkm6wBQGeCLR9pwQ2GQzxeogtuSd6MY87Kkb19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1nGFmhAZrgcKXCQZCkZ1HSSg2hhpM9MgzpyvQ1CGgBZj4QM9XY2a8QpnfcWBgL3gRuRs9BNmhFKZHYGZGbKatcx",
  "key1": "P8RQA9Gjyidb9x8GrJi8aBwFyzmFbcoDNPfr6aMq5RzpPAz2g2raxkfDLKF8XvVtTcsqRTA3EWggQcgPLShfPKK",
  "key2": "bne8mMbXopsPQHUocsoRib57YkHVy6sMBWcECAihpD49Z9JUeFunG9GcTiHV3Fcp5SKY9aJ1FL1JUGDGKZZwfKM",
  "key3": "vPgxsyyqM71AxQoq7rS7cb6tLqpSVLmCXYo8Mx8WvrdCHRHF5XeMeddkcdt4poVzU5Y5fX6pZVwbA34E7XcNxx2",
  "key4": "2TSC1ubTukU81AWLJfS6bHtkyErTvrTJVqPbMf98rz5fcWq5Cu3MbpkFeyW5qZmiR8MTQve2JDX1PNMM5eDgwYjr",
  "key5": "p6ekCkHp8EkoMxbgt7Lz45C6YXA9g8kbhJ8VpRat3hyvAhRvfTyQEZWBkdsMJrXpYtv2N6ZETGFGoazkiweoUkP",
  "key6": "2ZoyL4gNXkN5Qbza97Bxx7fn8m3chScRpV5JpvNGrWCtMyKvWrWT13odjcVnk7yUHLD5ZTcv7TXNsfqC6d5aHSHP",
  "key7": "4YtRCBMwNUzfmu1sG1tQ9EFTUCGm2jtdvuh3SjoWCLWQQ78kz3CX3xVJ9njGma24Use2SZ7v7FdvcW14Q3ATfuqi",
  "key8": "4kTVTwTvm2prvKjsAsu6FwMfu67oTqMXUmXaUU5NJP7SpE6g8kYuHcnXky28Upebcwoi7d76xKrx6eiwLUzEgaM9",
  "key9": "3FSjKcBhxZU3aRrFnr4uWrywXqDorqriTjnwboEbQCVwfA6fintHRdYqAq82j9b3dwMn7zcM8KvRPYoEUYWPNpkC",
  "key10": "2piD62p4QzGcbA9cEPSkEAFtPDPHp5God1ZtY8YDxDTfmD3CHAYg2bqbPFQ98smq9yVQejmiYyEFQ8i5chorbNAF",
  "key11": "2tgCTgTcxAj2ZY5aJsQVf4k53KH6uqu4ATE3a91RVZjxmnSpyPCPAnGmkNGPQ1kL18Tfu3J73TWbqnzr34C9nQFM",
  "key12": "4DyTcE4uncQMbFwEDUhdKz62uzzjYhqq3xk5hgojAKT7ZxQx76cvk8JPn3a4zm1zkocuoAoG1JPdndNqkdgCYMd7",
  "key13": "4uhjXCXdCSRhPP7cMcvhhfCo97Fdbqhwrkbof1gDsdRyN4qXd4fMaGJV1zMBrotr6ohAbkyMbnkLGtwQ6HQNBTLn",
  "key14": "3hWVvyo76MueaPjNTTLuwqPBfrHDRtjKMqufV3Yg8AYXzBzUcDieznpwZpw9qAcqwZt6QmQc2BJwuJNVy91JaUro",
  "key15": "5akHfCb9xcHaBQMaYLoTVK9Yv9PzucLZAWmZBVpikkvGb7r5svwSZq6AtEFdoZ1FRaexvU1uJJ8EuMFBXnTQueub",
  "key16": "214w63TpcH17uf6dcNnBdJhcgWUjd6zueBRP4DArNQFdF5unmpZ78HUfRtaoe8bLNUhHkK3Jzy7gGNm5qatyuARY",
  "key17": "285tvFPR46qYQtkUs8L8z7cf3ZVyo8rhsqKpSb45tSj6DefFhNqJ6E8namfkAdNGRsiwtpLKq3iceUQCp5Yv1ZB4",
  "key18": "49zjdENt6pvWgdV7XRBbsQCuUEWpwrXdk8JUnKqFe6Lxi7Sc4gfZtNjbBEg8jtQSEwhnoKv7A367cTbKRkj2tvQU",
  "key19": "2MMmySHRQfpMSqGijwUJPKzMWsLPmLioaDg1cYW7h1dzGzb9GY2tNnRXPmGDS4gzTq7ioTJW4LiyuFHtU6yFF28G",
  "key20": "2ZznjaoSNiV4CKLB54g3VmCrPGM9M8SWz7qKhmozzfCLNidLehkmP5ALjGCvSQgrgphStFyJKWrivPJEuyVQqQfz",
  "key21": "5goZffrXu698uiZoH67TVodKGHoiDugjsw9Kdcs6ovzhDb4qyt7GMq2LisWWuWMtECT5yHNrkE69GyhkxZW72zPS",
  "key22": "1HgfVxJXp4GqrpPEQpadbgsc8wSdXoiSzwUpjDUTw1mtRrvk6y7fSw2aBN2dj4x5sGB8RYv8chZCKrm6sZKCa95",
  "key23": "5wg16BjRDiCB56M5wE7xcpt4cuF4wzbh5tNvgXsvBA6WmtaCJYc2w1e5u84bcYfaB5Rq6LyZUTGtRNzHJ5m229Rh",
  "key24": "35Ne8bmcQosUu8gnACdwgYybEnZWQKJNKzMbTjfX3XNaFU7hcyffyUBgxB1qCQxRneAn8nLu1MsewQvE4h8fRne8",
  "key25": "3hGPazukssHoWVRFV1n4vDVBStSySbztmDwJM8ncKgyKdVSjgnCWDTToSAEMXNsJYM1nxbAWS7vhxDWN7hs1kfW2",
  "key26": "2aXUdtghK7ngHTK8HmU41EKj6j4PJiQZno3spe91AiBECbRn9oNzLZEcssLk3Lr3Lbn4JgwgutnQprJLyF2ApFmS",
  "key27": "2kB77dkcFwYpLEB76hnmVYvLJX2Ry9CkT8h6DiRi74eWRe7wAnnwBg6Y9Te7MnFp7M1V49giJB97TxgD5tYobWXN",
  "key28": "m9g97TV1TaL74M9v2DRETC9Br8GDUbbejugGAvxLHz2srQKb1ggjfUZQQ27CKYU4K1JFo6Gyai88BUe4cEqtwfW",
  "key29": "5VcpXoKcxja3Keq7a8LRSs7nLF3YyvbUQ8PvipNwWx5xajcwA3rv7rZvN5MkCy1qbxJv9dN6PcS6h3AnYsLHAxE2",
  "key30": "4vYiKUQi4azrHAMLjBy4XhfhtqmrzLQzJoExKRAcEM42FpNoUUc8VH16gKshvJK3mYMoWQrfhHU8f88mvpnT17bV",
  "key31": "PN3t6zfkjKmTe5ZcMSESVa6QQxUjNwPEQqPrhg2EpSX5zCRG1HnMWWn38ysaxS6JCRZdmcmnA1YgtA9KqRA4x6L",
  "key32": "t7SHGXbmZv3uYz1M12AqUNdanC3kd9XHEWcvKmx8az9YVJo2d5JPAx7W4ghANvZtkU9ZcUC4m8pZDVQPBnjL78U"
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
