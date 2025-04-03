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
    "5dGLSttjfKs2HpMwXZ9A5Az62hyMS3ybgaB68WeeufMEiaHF1J6GsxaM95Xm8bpuJYvuhVbZLZnhSPGXL3doRE8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "326wpoX5ppkapL72ToLytNfA8MeYLqXFeHoMw4D7VQxcbqHnXghwggZHXVT5U1RRoEkD7Xfy3jn2S6tBA5RtUWWt",
  "key1": "j2TsdAAfMY3Uif8idXm7WHenbcXPp4yg18KAWCNKKh3ioof75ZWdjy2qm4sSvoWoJbHwDinekx1rskLynkNePCy",
  "key2": "PPgnDyPciUjXTLmP7mt2n4sgP2w2g4FjgWyepudFG5fcCtNAykMDNPUM5kz7ZpzcUzmh3WXr7we887cH4dQSDsh",
  "key3": "3SGwNQPHwwwepWyWAAQjZ3jyE6Ba4q5YFiE1Kg6DWrJDEeXZKtnb5cRUpxrogavL4NNdstA5ZMgXZQXunETRRTWf",
  "key4": "3iWTDKGdRRZEauzLEh1eQZz7sqNU2ser3LVWi8oUd7pxZQy7TzwBmjfRSxenBu7PkYtm3xfwehpXB8ozHRfV6New",
  "key5": "66Dgs766iWTARaV588AN6GJoRViDppmcerzvuVaWmGKgyqxUJXcWxd8DYxhcwMr6xTkUVXpupBcsN22qXGopSVfG",
  "key6": "5r1xtSZJah4XHqFoxuh7VzQyFgkRupMP2BVLxL5mkr8DuD1LuuXnXWkigF668rQY3u6wjpzv3BFfyGLVEHtsxiex",
  "key7": "wCRUhW83St2gbNyfTqAHDSgJXY758FiYyGT7xhDBwx22DQ9hkmTrLcRb3dRfYXPPTQP3G8Z1UroAmxxBXsoNaGF",
  "key8": "ZpUs1cKRDs4DCvM8PMQwsX6aK8g2vQcKNfNQ9QdW33vZUTyWPVwPw24azJHLu5BfxzP5aXs5GaZaCWFsDKQd6E5",
  "key9": "2M7Y2nYociThAZyz8Xa8EJsY67sBrpoaZ9ptdaucQzfYQEXsFM2bQYKW6xvB6iKEBkPoUchyvjCEmurKGYTVu9FH",
  "key10": "47sJWDya7MDwH7QKB3AB32DTx8pcLVH5pTtCDr7mYeDjrizFu7EPisSiQt869WkFfrua9GQsGmj9rdNQ3FYyNFtY",
  "key11": "YuqzMbVFJbr4puJ3XxmPkzttdCBqMyBs1pB8DmAgsWUJvZVqdSPxLAycSKDxM9dA4yYxmqjWW9Yo44i6ZhAMFHx",
  "key12": "TejtBNicj1DJF2CrP2mzhRp6hY7TXnzdecEMqfcpgYaqTHjqKH3gSFFRYsa366kVxbVB3pDbQZy1nW9TpqL7wx1",
  "key13": "33LipAnYCqLJk7rH9zMRfL4HE172CKPfVVcwGxxJXETTEPkperoJ1GuYJJZSURjHGt9sF2Z584v7GoREeAEBF9rX",
  "key14": "54QQ1tJJrA63ChW5qGEph73xnjam33UKgCGi51Vq8X31MtWEUHncJtJDHnxMh12Kk5JY7UWB9111wHkWU8s2q6Nm",
  "key15": "5bDP5rdMiLWVqXx6Xd1G9mzn73oLHZSeN731gvz9x4w6EeauHQZtynZybQgnszASnPVGuQnRfyrrbQbTDtVZSCWx",
  "key16": "2hVNTCCfdw62Q9aNLxoRR4SujMY6dgog1rA775pNL27gCWMc5hL5MBtEmbVToD783nceao4Q6XtNrBrhSEGKJiut",
  "key17": "5KqfG2JrPeM2tNsSNKaFJVRasZN2RBeCUfgqF5hj8DpKXiTb93D62w7XzynRTsJiDmEFnzegb7eiRZZqnWXKjfHP",
  "key18": "35W6xSwanqS1cgh8fNY1P85a3j92sSvpQsXfnCWRRWVJFmkdtjjJXEUChjbnxgs6uiuYjkbdE5rMxtzaXHd6zmZb",
  "key19": "YhcHvXKUXGzMmkypdZRKVk4HFaTxVHBWyEKauV4ZNtQbwqZRSEgzPbshfEu5EJzHcF8s6F9D7r5meXt5cg57RbH",
  "key20": "3XZ1mckxAoBG6FLYgh6ZxTeFRdFGVgYvdPQchLFRYYdtPVc1Hiuy9kpU2jZuP7mCJML97MW24GhVg3mP3zcccQdB",
  "key21": "3h8m8iPkQDALmiLGRo2Cg8MsG68QBQyiU4iXsvEUTyFuc111iE5kp5aP5WRdJUuCjuu99x8aj9osGMkqtZAjYdTm",
  "key22": "5QSD9Tp94VWhgmvyiY2oMTmrgR8jJPnTuCgQxfUr5W1QqFJLuyChVsS9ZvqUhKsRMeQ15xtstqreh9QgUMUqv6uk",
  "key23": "39WKa9DyRKJTogLg8T6cJvdDsjNAvsA8Uio4UA5KQPFpgG8UG7c6ksJUEMBQ3QwSeVakZsEDrwF1zbyRmVM5qX2y",
  "key24": "3irJzTteEeiHoTy4bUMDTfu6bjiDUE5gU9hHpat1kRCqSUoWW21QW4v8NGgfChH9b4D1voPpXE5Xp5SfUX4WVNrx",
  "key25": "uYyLU3YYK3daBCFtmPZe2ZivW7r5NAsDLfK3WuksvaJ36JvPjDaoDxbQJ4ATpa4K9H4BqW87FDL48CQ8qRJ6ozK",
  "key26": "2FZDP9MtpFuTW1KcZ4b49TJKAfJPTK9cQGVMRkLxs9rV9DCxe1pmCSFsczjfTWWRyBTSJfps9h3MBBJ6oquvV2pC",
  "key27": "SWNCZCRgmTc2fJgaLztuvN3hJbuVewuHKy9qTNW8szzjjKg4jRFm5RSMkXkGzxVwfUgsz8x1HDmhLGRsKNqjDyo",
  "key28": "2pusNXNyNePMe99dLhaFofUKQcsKrwavgaTqYLduTjzPsBeCknFY9u35CnJthCc1pp1MpDxV7SGTd9G3zBqmLW2r",
  "key29": "248acn7LnaWHXqDiNQvfmHzQy3mwURnsCPDX8zthP7kCQCMgMcSiCkm7cmGmc2XuPB9tJX7qNnhCmy26xV2dYDKg",
  "key30": "5aLnr2bHsJ7ui3SG8ubC2TcyaGL74tpZHj2xWRp31UP3ohsiezmwXeAXs62cHKk5PabRxuHRauQ425oDguQGgfmB"
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
