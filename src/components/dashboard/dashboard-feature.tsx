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
    "NLN1GJAD263JQLeKeE28AJRKTkUGfme6e8Wy5Kd4eAiTLpcQpXZYeghk2HbswNwgP1pTMf74MpFf17AAtnchdWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wqk1tR9BFMc7AL4XcjL6dn4K9F42HX2eDKLDLz3Mt7cRQpWBKnjp6TmUw9fbXb7v2VSgriEPAbR1QUutuNRE5X7",
  "key1": "6VfkSnTJxr13YbF7M8yqYVqQeRpuLecMiTBjjsKNPJBrwJDKnopWhP6Na7Mnv9DJh2mXx6UEk4mJar1V3XRqvvN",
  "key2": "3urrc37N8ZTeAvBC3T22mEuKCxHfgxieBnHeWzjHKDKbydP96ttKz3LyxJzv4sZBS3FNRqRujE3hA5CPLr3zNKF7",
  "key3": "2y1UouZ1oDtnbC1cvYkoztc4w8fVZEtRnxGC1DUvDZswMjBb6fDCSRxd19944dnLg1Sbf2orAgD861FP6e3N88da",
  "key4": "233Gd3pqmDg8i94AoM7XnJjBBGfYwqFLDvpc5MErQvd8KsbyJpYNcG4Er3kLhUWrt3Ku8M4cHqj1rDHa4p1eekdT",
  "key5": "54i9yrDKjAgWuFEn8N8AKfonLJMCEGt8kByGEwk9qHM2ePZKmz1uuqg11ifSLv3xJFCrez6DLk57WfdEbATsp2wR",
  "key6": "5Nv3PcLRtRtt4xGHNqhCRqe2ZtUWnibp9Yrqken1DA8ksc84a2aeiz7V6hoTxBUv8RrBVBtpBig4eExdFE4NJJBG",
  "key7": "LS3a1q2EN3is3cviPiUSuNFxPyg18kc9RjNWt75FbRDmNbZSqPbZvzyzUEuVpDbYALenANgxe6Tjvsxp1zvVX1Z",
  "key8": "jJ6q2KUW1NeY4tAcpqexhUXU7EuxVqDdXoSuUA2gizfs98zyPbmVFLeAxNFcfssfRe4tCYF5qrQJAZb5cKqB6TY",
  "key9": "2pEtFScrQzygTq7G2rHGQ5cnvUG9At7GoP7aZHrp5AmiHVMaFrs4ACnqar6NkLmhtBnaLjHpFEVPLZ8AdFHuBYh3",
  "key10": "35ozcLYUpGPmYc8rj7VgNLqUL8FE1fqFuVVY9hZX2u8nvv5iHhXuuGyfHnmn9jaBjVAhTHjwNNtGwY7GfVXzrGdR",
  "key11": "5KfurLSiJY2yaNcnfjuoKAHfa3ZTtqooYxLjQwwRUtER8afevsht6DRwuyFg9pXSSyBbjj2TL4QoGprp5aYP4huH",
  "key12": "McsKmxpgpAA2gDXxPW1iKDTCP8PKZTXqr7v4vqckqbmE5kzH3HrFhwhjbkoUpD3eNBDkFhaYH7T6qyhPoSiYYhG",
  "key13": "2bwZxQEUS1H5hv3b4CqCgquPUbeXcvVp2PWxWvTvLQ1mewevhgEo5sHKfc9LyicEhykTvUdC1moC2AERLD4Npnbz",
  "key14": "3eg3R4Jo6Ms76AKB5uzPt3zrVyLo6ZSjqyATd4CZV5KuNyK266ynoyGjNEX5D8VJFxZBhSn2r3JYyaHpgHLBFZYC",
  "key15": "5UdNBHvigv57sgoWn3tBdyGeqt8S7hhL8Roxs2DLzNu8t6MJLMsdRLLYobWg159LqaooG9F9WEcybYKr63rTC1BH",
  "key16": "2WXMhdPS2M34us7pZeMw75EZh9fPLRbxknWSfJqLPKbawaFeEi8KLXPhG4AJKCbzebhZG5ePjLsmWF2ctoyezkcW",
  "key17": "4a8CdZNm84JteoMrmCrkF6jv9EDdxgzTRMbWUjPkaCbFjSc1bL3gagB1JtM5uiCwPCb9Fd4bRfoY4eMA5RFG6CvA",
  "key18": "4WEVgLy6CxM3rEUYZNwk87T9jEdC8h298kuStStkTXHij8wmbZFMGkeVJc8ksfYYU3s476EN9RWM7zqQcwDvFRC8",
  "key19": "3wWt7LNPhWZs8civLSoURr3j1eWBefVJ5jmLVDAtVtDyvCj8aNXcbsCvuBjMHzAp8g5AMdgK2gTU6isALJq2Khws",
  "key20": "WjNSa3bYc9gnHhHPzHCcNwMGUpLNfkWkBLVsXZD2NXcwnUrj2SAooDfmepT7piZxaYqSXhZwBh8veewyEjMZqFw",
  "key21": "mTxkmFvYj5E35994nCLQiHz9UgCdAH2w3GteFefoK2XgKCW5nB7Cws9nrvf2si9pDJoWS2MaHfQLdppwCGwHsc1",
  "key22": "2khCEMJvH6DRRUST4v2yo2ELXfwwNYmC8zerQvR9Xm4Ft4Mad2SPaTGEMPEQsseY16tWwHUTuju25cWb6yQYgccm",
  "key23": "4Mxcm5dfBroXJpdhDydUrStvXHaoS3cRXvVgX3NreW8bum3baMoBu6BbPyeq9Wu11AAhDZ1VxCceoMcaSzLQCMvi",
  "key24": "63Poix9hnYv6XfR5HE8mXZVktCHbqfoJka7UvSCUD7WFVkENggkLc1jq7dGrCrC7Qguyzjrt4B1ukPBm6pw28fYU",
  "key25": "4fH44YmaABjCgVkGMSnZMgDVR3jKYKB4XazPFQjALx8qd6GftA4fAh8jLvNr4AB8V6dXozcswzvjDQnnsFLJtvht",
  "key26": "5pRW4KiPsuCwCPtz86pnZpdMaKUiiQZk2bQQhatMV5d7zLKGjTgGnmvpEUsBaR5TsktWaYpgAx9ewYvd28Tou9My",
  "key27": "3HbWu49AxG4wuprAG9E3XUrAu8x3UFH1thJrRsyz5ju9aghgH2i9TvhqSoMAhAfpt7yDaeBwhRcojUWktYdRmo32",
  "key28": "5diMZiVqZW3XtrkzXJxCK6GqqkqxY8wsEp6M88pKwMYmCD4j7LADy8iLFehtRRLh3mS6F7LbTZjFimCTuRTQYy8k",
  "key29": "2qFwin2Gyi2mbkSoFL7yWVDvbxMB2uQQnGJdvRDB1e4ivWyosHtbFYwuckt2kccnu8FJayXv4QKfBtcMxwHxJvuU",
  "key30": "4tsLFa4GGBgxbEv5tWjj4A79qZuCHwN38BtGh4TVrqVDfeUpvbY8HsVUHHQ6HGbWs7fpvXSL3DJc1rwF7YuHDiuH",
  "key31": "5gtfaAUHw1zCEypviF4zQzePDjZ12sqfAXyiGYZtmmz4XWDfh3bErLRPcM37DzpdJwwNsxgrpxhdVdzALUVQB8mG",
  "key32": "5TMFZauLYaFcYwdNy5uaDQkhPJaTdhC6dgZuvj8D6rPwFdydRrhqPpsQmgPyt2TxjjTZzEKKj84W1Qxp6nF2P51u",
  "key33": "4ULZjxfcDDJyA8DmBrMScxwo9kEgimWWoyupwQHLoL8ihyJsFsdWB4KzZD1N9t9JKuhjhW1kJrfyQA65YDcExzof",
  "key34": "4NJoPqmign146BedTtzwBModP3jUrzgVqBZ7rXYhwsZbUF9bmqKzbPsDjCu12uGtQGppu94dgR2CDMdXTcykXKZp",
  "key35": "4LmcpKWNUM2FCDALx9EeSF4ZZjdKfYhNXchooC3zLKGeR1vfUvmB2QA4uVKYqGXR9m74C7ueooNBemA5mWjfSBGc"
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
