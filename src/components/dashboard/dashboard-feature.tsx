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
    "2yvPYfBkzJnBQyNSz4uQYt2ZwjWSPSKbbhE964zFiCb17MFryQiWtDvM1QuAJZWLN9T5LUL8G5JWL5EQG5Zz6q2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UQCW4bXpbkD9J5MbM1hp566pfcFPCViRYk55cZwFDc65djwoEPQ4o1homSGMNJiRXizWUvAT7UEJg8KVLf7xMTN",
  "key1": "51RMPuJAEdkdhpVXR4RHUEa5Ypirmvf9CTWL16bTUr5gN3wA5aUUDYB98sFqFygWquqS9oEaZKns1dMigHPZi9PB",
  "key2": "3hoF5ezLLRChnQMfH5UTRpBCCPUbASQXcPSWmAcaJtDqeTtFoEXnfL1h7BYpuiMvFXeurcu1Uondr87e7WiwFSPx",
  "key3": "396y5W7WRLSGeUyhqxYAJkBGWHqR8KKU3QoiHDfAAT4KGuDHU4mKtZbgtNF1QpyzsG7tNs93W9MyrvbWJ3QxXG24",
  "key4": "2PonFnGXLdpgJu77verVWe8pRwoCd6gj7aY6ZYR7xPLtog2YCmZYnBNBoucTLhfsoQPfHP3v7bbXy2VdqD4a8P1m",
  "key5": "3fLMarBmbYoFatySCnWXqcLHVD9kj4BscZ8CkVfSWNnZtnaGgKSbCYgKEPDgBZfYzt1nJARg7BCseSqT2jHidyR3",
  "key6": "5TfVRhqkK5fXbRsgQgdqbJzdc2AZEu65cmAbX31ZKnnphZDF5LKKaLFDPesf6ozoWyeAehYyTDXWxENGEtFe6BkA",
  "key7": "41adWRhZJzgeD4Ze8pSJJMXYG1EEdaeJJiLBAxsT9kproJew9ecNmJRDibmWsK5bg3R783sAmWagY5KLrbKRho1w",
  "key8": "8FimQZEojTaZ6neCdQA66s1pBSVM2RLXcSj6FUf6qGaRovAAmtANLdgzG1oEZRo5Tm6Bm963VtVwPmrunM8g1iv",
  "key9": "5tVBJYxftPh7MpUkhTcZD43eUgUfdTn61Z5ocpsZpqyHuTBs3VSDpLDPWProVciqrf2j2czxx77D8MrHTnsWuXMH",
  "key10": "4QTtpmbyV3UY1WfaMbUYQq7TdabczwAmhYGNcQsvov8fC2shLy5fWaRf86Z7Dnc1oREKpe3kYJ79N8AASSZP2RF5",
  "key11": "2CfqcAXGVC62Z6rsJomHHbLdEENRNHQLhM3XCcUVotwfyBoBxacm8gbt63KPAfuvobo4k84ACY4Qeh6rVpnQ6UY2",
  "key12": "5FvNJ4PurfrRu1nHd38gDiHKo5zxxFHd1LarJXMeX1A1yTTkkNdHUpCNg4dxtsAW9wwqAWA6AZb9HgLXUDaQ72LJ",
  "key13": "2nokMa4ZyV8TRre6uVfujrU9vpuB24sEt6nsVPa3dEMybbjpYfKG586EqbgqXoHtEEw3Vjs5sKacWuSq1Hki4mdw",
  "key14": "5hbkJLvn3iCCP1SEmei825CLLDhbKHm1vCD4BK7o4DyK9wkB746G5uxnQYPoD6UFkQbzKUXTksreR6VcMexDXPQa",
  "key15": "3WSQDPgXJcLXyovGCEeea54mCsjoRTMHn5TMDxD7v1YTdcHsQitgYv7TBxjdDWuBKMWnmMP7KQ2SsLnzmdz178F4",
  "key16": "2eo5RpqHxaoXA9eN1QTi3Q5jzFwbeWK9suw95brctiGERE4oyn4PGeHeyRvuj34zDP3UdeW69wdosuu7uxfVHDPD",
  "key17": "BeDAHTCrwqaDPM6oay4CwUV9norHq65zf7vuLWttZUWgWNf9KVWMZXwBGieqkWRW37VyGHgYZ9yyJkGXy1RMAj1",
  "key18": "CaaFQswZd5Ta3fphPQxuNaAdHqGZBNVi7ZEnJbLYox8F1MeQFV29vrzb8JntKz2FxX4i5fTJU873FBTjgoZtrKU",
  "key19": "5FmvNfQ49vzpXi2HZVE91pAMKpmEa25kRns1Q67MYtvVkZQWK6Lj1qTuQB9iJFgYEdGKddUBW3peNCGUqkpcezBp",
  "key20": "22bBgxYzBgPqEH5MYUSCaeazncBRNMR4kkyAqTiGpKiWae5gcwiQqKy87uGUezbpJmtqyRH56bv4G5MmFYc7UD42",
  "key21": "3dvQuoxzgv1N4Bsza1KsRFFtzJpAzy52xmF5BiZn8F8xE7DESSFea4B6NQyRd2aarDqBABHRcQs3NvGdv8kTJF1T",
  "key22": "5cDyNcDXfe4i3fHUSLwjvG5aGUQea63rpXc6mCa2kVPxoWWAV1DQi3cRyFkpMJDHjDe3AUDAJZvsM9qdxqHDGaXz",
  "key23": "3wxCHo5kXPK31UdJzTNuYxNWxkGwvU2wn3YH5Uhf96UCBwfjAAjLb15whm9q4PnJrNrgbRjpATcFvrqSkCQYoS8p",
  "key24": "FAf4FVgLDoDEAYyzSYLs9gXtNZwBRGMwDnWM8oEP9xLad2sz9yg5UJkfoa7F1PyiWnFDC7NdJj7kpPDVVjWRaxz",
  "key25": "esVtDk8cHx1qpyGMUcix2aByty5jJ371KN4RWdFQb7H6mdYG63bnCjbQ9qMshfXoFF2PrAANknF1dbTsQgjtFD8",
  "key26": "roZBS9xBWGPUEmLkLVRSmoPbawvPRfbMUxgad1BdW4YBg4q1MueRHEPr9wZEiUftv2WUomPypk1p2TQmEPhoWr6",
  "key27": "2cBxC9fUQZzLcRMNNuCWsbpmRLMKoyHyttQgxzwwtBwTdF4fqitQxJCAwN6L2YbDjQfZ3b9guTkKxkDED77fuzmw",
  "key28": "2LtXKJKPmhAzRQmg3FsNfFP7t3KstF7LPurASmVujh2BLL1Y5m44vztGn1fF6aZVyfmxJesRvDu9yF8curyvZkp7",
  "key29": "4Ey2173BZspUVZqemkFJpMEQMQeQ3utuT9B7QNKUsweuST5bVMdbtjn8vJRV9rugMAzpHuSLY19PWBkp2CCeAKgk"
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
