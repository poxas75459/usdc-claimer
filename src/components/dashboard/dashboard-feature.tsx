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
    "2m34KPjTsQV9yd8Rf5YVgkH2f2aHTTg5Km7Tyy6tW42WN7tj6oonLRdMFqkuqDJTLDtWu4of8G5pmn8MpumBBTPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dveJ33Cq5H6oGnyeoVA89Y46ifkTZ14RbwxGxS4GUxEe5wGWdHCrhuGKszitccxFgxWwGpvenAU1sBmQA6PbAku",
  "key1": "3rFYV3aSchKb9zfL3W1RVqYmDrisVg4M2Q5uZgvudz74CLVfW4g6z1ekycZqozHKfjyM2opzkc2LSHiNW2Z8V1R3",
  "key2": "3e5b1dq91rhSoTe6MtPHXhtUaKBWuUmAE72ji9hJ69XTW92J3Sa3MKEG3xuVqwQZQ3ete1Dk9d3a7v1yABFvR1qc",
  "key3": "34BE1DckYzuKZAP791xxntyBMz7L1pCKcXVqjJHSqfVBtkjtQdnmj1NdGGZZjNfqAyugK4oP1UtpCMBfaE6sG9UU",
  "key4": "2TnuAcuc15xWGBJ6t8NrcFEpnncUjTHvnM4qevbqSyGceYjfDRzLahkWKhGXKzNQu9GsQczckSG4S6USEzWyoqF9",
  "key5": "vguDHqKF4sWjahZkKUBTTwEqYMA61pi25s2HrcHk3aS17jc91jBcj25FU2ETiVsyTW6Gz4Yo7dhGerc1MTLxYSA",
  "key6": "45GFSvdwLgpKT4H2ZAXoZsLgFs2ibuZvYbcZnmuki6veDuA2wPtuqNJ8BeUb83AdzcZQF4nxpov2mz8NVJ9KDoxy",
  "key7": "5etCemuEhy5pibp73HHk4NHssaXpmvfUgE6gjWuPqZiwtgyJo86hQ65UC6xeAzfpjH4VWHCLZC7xSQG3zeJQmRw7",
  "key8": "4EH2iWKESTYLVry5xxDJCDN8QuoLbp5qcRqQFJZUmNybSkP25WLismFr2DSwPFQCTjBsu6v4aNVrfdJTdxHJnVMT",
  "key9": "3S2svn4tMpFFS442zLQmBGCPF3LM2cU7ivNczDahsJeE3VvsJBUqWA7rQH5hWiJ5XG3yX3PbzNxxWLkEUbSQn3kX",
  "key10": "3wAmGyQmftRzQtcyhefhfgZJFChVSBup6LJhyy6k9VpEo76QhsAWsRvgmFh5SgBWnoQBBVLpFm5VzrT1hbSa6Eav",
  "key11": "2kpsDmmThMAcpumXY3JriQHrMCsTtkeB4jP32kPoakUW5jhkLcKsy8zUrDUom5N7sG6Q7w8KeTTFDdWuuaJV4FWk",
  "key12": "5aXNYabSANerPHBDvRH6YBTAbgVGwgpbujKzNbyv3hVLRNiepj8rgypcWbusYE3L4W6bFtRyFbF6zaHyNeScwHLi",
  "key13": "58sCZJBUysb4Ge6Jd5X38suztaK5cZVpuc5AESaHmiouooytaeQGwFkjNmMzWRBKURwbrkVpcLrQ152EtEbTqijZ",
  "key14": "3PkfZahFw5Gg9JmScdqzqEUJy68bv9SH1Yahy45cEEpnVho74UPrHohj9ySGoUkjxqBECShJbR6nu8XBYAtBZoQh",
  "key15": "ft6xcdATirNTkADYAZR7cEaQ4yN53XM8PMWhzkDGxhsCHUSgeKLZp251AYDypy5FeYB6zE1xqKyMrw3pMwLHhN3",
  "key16": "cooFJ8FThtqGZF3HhLLmkoxDqZJZ1gjvjPvpK4u6i7DkJj1HPcXxdogaxBoM3mi5LUjqCubAjZf2MwK2ZCj49jp",
  "key17": "22Hcdj4eVkEf8BHFyp9DytC9j4vW4HWjqkhmVkKLZwomJ5EBDJWjama2eTP7pX5RAq789P8Wc1h2nscPq5f8ta3v",
  "key18": "2nWfCvJHZh8HyJzQFzTh4GZn28t2S6UpnKhQX6XMd8n79Mhwj7gLgH9eLDRBFdVgMCM2TCEaYuswFXouzkv6RFKa",
  "key19": "2M9QuSKnUT5HGaN8aRbTrz7iweBk7kgEK8VPgJAFgfJPqW9B8EPqxNUXkf2W7gGwAHL9deJS2XKpeoqd3Ga8rUSs",
  "key20": "2w5b1uqJMhoUD7PEyM232CP1jPuhBzfc8xjeoR5e77xojS59Qg4nuwfa2JDA7iKfCKfsG9v5wB3CJ96piicf7MmC",
  "key21": "tHtDMiMw34Ejdts6yk9sTJtnzKSqXQwZDYaQoZFqHyLpqgaLjf3MvWcEE23a2iB5rqi7Rhr7AApZSGUWxneh1to",
  "key22": "35PnoezFdqwgQJLmzy6WiGzjHkPBGd13LMFL5itKnpdjnnCi1DDBJPT7pgaP6mA5AbeitTRNVtmpf8sALDr5kH7L",
  "key23": "67AY7crXvXhFijqRH8xiGBCME2Av95Rq8LMuW9SkAtpj4WXGVvUniBN2fC8vKNdYMLTC6Us3t3s7qXS4uL9i3SRD",
  "key24": "4xR1ZxAtZykT9hCBWGsmqfEABVa7UfPj9x9H9ACd3eH1dMGjN5op68RhVoeFXpDUsfwidApdhL7iZgMBpvTF1dr4",
  "key25": "4DgSwuRUgcms7L4rSXs8pfYBgcqsUWDeNL5W2ox7uWrkqzZFE2eAvQuXnJCnP2zUmXnxfj5xdfWmKzmkF4PMSTy7",
  "key26": "22d4EQ1hA2Mrus5U5nVG2bobkMNZMqkridHUUD3zAHXQuf4MHTv5V3dPR84uPokmRQyWjEYwGAKyz9LSXx2KCeCC",
  "key27": "5xoftdjFZU343YS2YBEH5RVEurAMUoEiSrjrovkk8E8BHhm6LXWvLPrHCfUvvacQXeCkNFkkvrkB5hcuY8A9vrQT",
  "key28": "s71Pj88hpfTWTmye5HssPxKaAsKUx71AYkYB4hqUmEC1rwb3kamZuTdWJFvq2mSQPhgvAN4zF4TKKDXsNtKJ4NZ",
  "key29": "5EWMy4DgZHbibKad5ufiz5noS3cHcfQaz8M9DRUC7gwXUhDuE9AH5mF2GRasqb1HUKP6dDXee4xNQsuJRMu4G27z",
  "key30": "3dHCu9TWqFbAsjhVmGGqzwCLosG6GJVR4RU9GuSYNDBLYsysXME6pJ9eeQgAmcEDA7yT5dmtNCKHvuPD6a266UvB",
  "key31": "3TbPVYGweRB5opCcxc8Kg3rPmWNEV61zTfScVPMJXLUckcgAd6G1tXXwFHp8bmjDWdEX3B1jYy5arKyNpHstvEjc",
  "key32": "BrBvusHLiHFZ2LoxUSNDLN4Kof484fqq3XsCPc4xmzeVysqR3QMMVPgaZHVxQan3J4QY3oUx5qduYFc4a5qnRvi",
  "key33": "3qV35SYwfTAo2N1xDSXjTFWe2kHkrGurf16rwwJZFA2hB1PTE7id4oLt7LzT3Bv5EruSQ72eZtYpwxVni9KTS4iE",
  "key34": "3Qt7mzMPetfjpNcyqY7cd5zF2SramK2kuhwt5rBqhhP7Pc5LTvP6rDff8DgyM44mfYp9k2XMfCYGeiJURQZ1qxU1",
  "key35": "5GfuxcwG9gD7VUxTVCgT4rsnWpoMaFbem14LUPjrEvGipkwqhFeehHA93SpMgRojmFNfstsCgPethot82hdknoAE",
  "key36": "3gspQEi3AaxsqH2rJ7Dy71P5s5s5kEQcuVqfXvX4ZQW49MsiJPkN5W4CSgo13mp4S3AUBU31CqE4FU3T7yY8b7is",
  "key37": "5CPskZX6f5Chtpd8a3Gh48yiX4KKGNagidD99VrYFehMumrwJjTduwCnxBB3WbXyEUAyPb5rbWyAtYgbEWyNKPmk",
  "key38": "3PSfjPtdttzzP5S4mu4mXG3rWZvrHYXFhAYGrJd36sWtN7Nhj1NdpLXCuHug9uJw9hGJkFuMYBsAioWBjwMXYM3M",
  "key39": "2K9qjknFjRvg4WTUYi2t5FgS1T5y2RGE2dgeaPoMKyj4PMaHb6n1hsQddiWrzjLjSWwK2JPvAWkcxtu4cqaqeqo9",
  "key40": "26Bpu64M9t1271Vrs9MHyBtakxbS1f4peyF5f7sFQooUQZHArriaWPyfyBKn3HckdSJQockFUyMcr3Fwvt1AZ4G3",
  "key41": "54EWkxn8P9iMPGFVMG6RWqxCd6xymKnTwqbj2cE5BkvTAeq9QMPGotHGCfMcq6Eh37LLpmvyEDUk3K8mdGpkchaA",
  "key42": "61Kz3zKe52f4UpHGnLy1xm5tZna8t9wTnmuq2FrViX18Pyn7uMRfqYXosgyQLVD2j6TGWtmPkqxeZ1rf1vKtHyu6",
  "key43": "5uAub1i1w8YfEG71bMxAWGGdMGMNxJW9YD5JSinoRUhFHKha6equWapJRufpofJMdGdEAnPQJQHmvXFPpLqiGVN8",
  "key44": "4KgBhVxTbdUvNh57DAc7qUKqMo4id6RtVYRhpx4T7phgJLHD8HSQioAM5PjEU4u6Z1QmWtuiHnKG8RLkdP9GK8go",
  "key45": "4AoQiCnsosctemkr4giAEsLvPi7qVZv82JF5PaPDYWnsZBE5eQrQuSL6P5KvYNapsv9pdzkJxE4rMqtyyY5XYPYb",
  "key46": "3uaucNgSjXPZHZYmXHdpjmCcri9jiGTiwg1tjGy8nBsiQQp4vztQFHqquy3ipF1s7ux1ozwwwvN5SUdXwhAcvCw1",
  "key47": "2Eu7qKX5pxyXnKx8fcCifJK1o7JNqVpQT4zXRnnJXxwLeVJjHSFMCcV7NPET1GKVXnbEM6QREwTB52ShiEzxfP8D",
  "key48": "3xfMVNLdne6qL9rfA1J8ng5zFp5G21wEtcBM9wheqYWjJKykvP4z2Q7n2NrotMxDGfmf7hZ2Kh4RZnbFRvdWydTk"
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
