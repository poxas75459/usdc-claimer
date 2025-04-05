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
    "2C56kBtzzomNPyoExQCSqTzbsCkKdfsPWETsmFCEPnDbqQwcEKMmpyCi923V7fpKgELgL1ABcJ7tdDyDeigNHcRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nV7VCHkrpqNjR9oCiU1u94wSbTVRrdJUGTzKaN7jJ3R7UKmugcDq3DfNPVyP9UJKp2Nrr4z48gZs1g7D5Z5sk67",
  "key1": "2twqtabzXZjF7fNhmUndzTLozeX3DQDPaPA319X7ncrw3WegSPU4PsmbKrCsXG7TDBHDkLMzv6CMmeXVYBxVhrgN",
  "key2": "4Jq8pNWnG6L2sFZTQA7dHSKSy9Wk9Uzt92dXFGYsvZAncNBKTqLgatsNmkrzWTDydyNPDbWrN7W8k1JKwwBCDAgp",
  "key3": "2VFD5iXnhQzkV2PHBXNuVxV3ggYhCVuyhao5q34PXxS6o5xLwnXjotnthH6Won1ZwcAmZXYnRqzmBe6BWHxwU2WK",
  "key4": "2pnGHcsxZAnvenC1sTm2QwLvcHyTQWReyH8U9m7MHoNKoFzchLXfKdpb9ELa5AokF72FPrXT97poBn14gjVjDnpR",
  "key5": "GtNknZoxVW3eaova5ueq2QiNqAoqHgbRs6SCgztFVPtWPUKqRPiLXYyhHAHtk3E9zGg6v5RuaJGCPVFLCKTu2nQ",
  "key6": "yBi765PoFHPmDecT2kLDSmpJUrmrE5MDSg1Rz2uwtumAaTCm3U4N4MENSKWyYoHTe1My1kawZs3JnnkpsbRdCYa",
  "key7": "4Doi3PUScXxfdLD1mqdbqEAwNesfKwHqQWT2ak3o3RDz1FiPXoYMG4KGXGiem5btK3wgu8Uuw4FiEhpZ6SwBa1Nu",
  "key8": "3EEh7QfUNcbCGJfRNbr7DbfZrhHgX6fgE7JhWw6N2AXaVnnNX4FdnvYFjFFj24TxsAmj2hW6xq7AJ2s6kP9CjKmb",
  "key9": "3mCuR3G8PiK4A1rXsXqK5KiHQgFYbvXFMYxP94TSqhFwpRqa83XykEHYDxgbHu5cDhMhqy7baViTuRExuS9vfwzB",
  "key10": "5XmVSUGhugKNKdySzyDP2B35N3yCRJj9GxZMcb7Q8n2s2WUm9EqzSrGCj2c1bScJEfMYxUbXM1oBaEt6oNZE7HTF",
  "key11": "2B6zvwqibur94xkNQcHiHAGV1BHcFvFKbV9NuJFgvukQ2cFqG9E4FB7eNrJjCbHXNDf3gPTg9oGR9qrNjraodocf",
  "key12": "3Cout1Uao8LFHQt4WyKesxWWGvR6qCAj2WTQqG17ktDwfmYhUVwzRVDcsWdjQjYNXuLnufqwdLbNv6QqGGSboCj1",
  "key13": "5RMfcVc7bKsosEhQ8eixpVCmd15TMpyzCYqW7PDypXBxzJXP42c5HG3Dhe5yz78o8SEagKLaK5EcWepGMizxfj41",
  "key14": "LQYTJfqCzgp94soD4E6TT2PQPgiVD9Rm1UCA45vSrCjNAeqMr2Koc1TLvSrQACQKKzhTW6AYbgrUnub94YP1mx7",
  "key15": "5uzjZ8x15qyGKzveUUDAr3CUQWfkQJ4qbvUBzzqfqUu2uHLfVFCjm7Mq5BAvy8RdWGeVp9afeQ2JkSYHsVegaR78",
  "key16": "4GtW4nEqgVY83FfcEMLXGxVvHssi5cbkbgdSVJb1R8xgmfxB4meLnScUxGK4bzHJd4WYy2TxJTbPXniCDSfnmckb",
  "key17": "JsqhLgBL2J1wHjaEYMKm3qDGyFfZM479LFowFgzYHBEGAhANNDQY2kB2viopR4Jr4rs8XgiNZZcAFRRF5LuZevX",
  "key18": "2eSxrCAQdWnewzMoNVD7SzjUrhsp5okfcFRMuzEtsFDU9cHM7ijyooN2QbcUusEpFD1yu3Z97C8h2uxNwM9nFMtM",
  "key19": "5U52hZ5eFroBMjQQY8gqceh6QB9gSEYQqPacSQJ963FZvHpcvUWXkrkTnX1y5PcAhATSLfijCagGpW81Le6fDbAg",
  "key20": "2U5K54L97j5Be71VGbhWBRMnRngUrpXzQBWAq8ELn5nxveTjtdLb9vNRoScgpvRKZyyHbGVU3AX2MkecCgH8Vszd",
  "key21": "3ML63UGeinMzThYxTCMRYwn9kH46vFi35sUNdoZ5gwE88o4t9mKrfoRUZEBzasZo9dJoYwcaAbDeFfLqkM7gxHLy",
  "key22": "4iQbG35V1JTyNpKLMH4kbtpyRaQULgRkA9zCsShMDfvoy6yA2mLiBzJdYSLcU6xReJqquixmgf5gdnuSzFSWUsRN",
  "key23": "2hUYLHpSYJbDXx3HVNnDmKJif5ALUt7QNVZZcCJGMKMn6Yg4RSYBW1jXDSEj83KXsmLJ4SBSYcnzJrMwPzMDcmZS",
  "key24": "ZfVQ4CQBDBeyegvNBxP6F1QqkTqVgdTpShHyQqSLTp6n5Z6DqMDxE5sfhjJXUbJBH1H11mbenVa2VdU9xae2Bnd",
  "key25": "gojeP3nG9zeqMDFNK4qZ2ytWfg71uKs7UkKut7JHR6qxkMwb9ch6E2U7ADaGUx9xTzZSJK2CWfS7Jacxvq5DLq3",
  "key26": "5g98JhzLMcrE8kvLmmYDtk4VipUnBwJvwwa7EfwpDXtLR8XrrGpFoXvLGwSxkgHxMFTFmy2jiCx33CK9vHnbgKeY",
  "key27": "5CD39gazpSv2BJWmq7tfTQbezmE2JcMyWkHTjUetoVxEajPFbMLE2Wud2UEHi2XhFwsLSFDDdHs4gHSsegJscb7x"
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
