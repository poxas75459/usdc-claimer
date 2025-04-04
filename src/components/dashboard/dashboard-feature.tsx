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
    "4J8LiZsR1wdLycASCNtZzf3mnepCD3W92rnitKopcZdPYBu1B34Y1y2nxxsFb4JhgVaiJ278b8XhbkDgPwEJM4q6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MJks77RpBYMZHe6p2oTUm4yPW8ikz7ELYn2r9shiD1E4mjWDaobmjEidtZVFw6BuBRtxy2oQ2f3h5JgaqK2Logd",
  "key1": "52VbuJFgUyH5jDGGbf64ths78tH4bv6VQ2NR5maYup9SBYc9UJDBAguCCzThT9yVHx8jLgAB6zi6hxT9GyRAZ6B5",
  "key2": "2dDKUZwLpHgwZ6GtnrgkAZAUgNHxKQj3oZqKRzoDzTaRHvjaKjHMt8Xk3kGVcrKe4LTJTkhYoBpJsQgjnS3WuaWg",
  "key3": "5UYLRSFbt1u4EP4P7UNwAfSXHmVm2S2PhQmMaciufCjLLVJa9W16aeSgoGF8tt1FooWjWRC5hRfnqj8a7jGQDGAc",
  "key4": "3k4cBjQ9Dnz1SNurbo3TAV6iBsZN5bSUDM9k1jAwYh3ZDYZrppDAyVxpVTDLbv1JG6ZwZ5FVX1ZbsbnSPCqRoyNt",
  "key5": "58YfbU2adkTGZCFWMz2Sp5t8vUvRqKAcvshV9zHPDjipsjNgKm6iGCvfG1FNQvHt89zW7mRy39tSdTjawuyMqUTn",
  "key6": "4EMdjFo57U4b1eaAa2xPbUu6kpNAhZfUEiBn75FdULQRxgPTsyRTdGXCfmRHn1ZQwzELbVda7k3VAMLPFoDVJXun",
  "key7": "yaMrNqpDVURsNxJt4BbcmuVcLC5fSQvyYHRgjD2Z2uMdo8wKfTXTjn6R5okpvER3bSow4Pbh1eXc7TVmodhU5eu",
  "key8": "47sfnT8EZu9BmgqqehUt9SBmB3FTDKZoED78cHqMPNw3HDYfbnEwh1Y375ujyG82dZgPygJENnaKY7N2osXgUnpU",
  "key9": "Dkc2YYeyrb6fgTwQuxJG2ZdDqn13JZfnVkJTuBhhWNruKHs3sQKfcx9awARWydQgWAiSgUtsg3sfhxj9NEvQxku",
  "key10": "5gzbA7ZKz49Q6UuuqPHbgE4uJw4SKGNqkfDDXWT9MUBTRU1FDJRXdYxfJjPv83eGgqqzfaD7LHric4sHoJfTd9Hg",
  "key11": "38LqD6StBR7gY62Wwofn9yHBwQrX1HMrjrpxLD8fNDRpUgWCa17jYy5y9CeZkrVwKpVioRFeK8aDkVbYjE7UZ86M",
  "key12": "2JNC9jKYJgZdyYeps87EpBXFLrc5bweGBaXQhDJ3iV3G6F5EMqJ5N3TYZT2PW26AdTczRr14MT5VdLzkGPmcLndQ",
  "key13": "3tKhh9Q8gPME1UtjuAon8Fh6y1P34GUhBmifaZGZ5RNB12tgorNaYc4eGs79JnxsMk2DgSQX7P2oT2sd4PWo5LmW",
  "key14": "oAMxN15WYgiBKu6t6gUaG4L8PzpdEBcdH86NqPnooFDhixmHnd8oZRYY826ecT5ENvKSBEmCzobSWiFczY3GkMC",
  "key15": "5fTzo2mpG86HrWxsuH9p5kfTwizpSCiAuh8xzcDxaXPEcyRHKD8rp66jTKLAL1HRiFjsdaVpB194pC51jH8j8SZ6",
  "key16": "47PSWFLDgYpGwY3sFnLqaJPkWTDMcfyvSMvY11mEZ4869URcznhdynEfnNe9VpFBhxACKQrxSKw5nVz4bZLJynjf",
  "key17": "ichifVwyaME65LiDoauG833teVqAZeM7bForeHrrMWPWQGZDP5ZpA2m8JKbcEPnmvBnQ8yCYrg2YNAmotYLdFX7",
  "key18": "vx54NmMqMKLtm9QuJ3zECcMjqzW1M6e6LUA9Eedxs5yin78RyuYkjh7CNbM4EAsqSnecSk92Q2Q5a3itmkxgakG",
  "key19": "2SWR7awPrtfCHg7xcU6RikSVTLiFdpHvxAVXkT3gCgpLpRaRufhoXw8LcfbXhx3J3ANnussZK8X56wRj9pPKQ4GJ",
  "key20": "3FsvMtzEaA2K8mDjLRN9V1GNpuDSnpmizJ9jPzR5GfoprSqXLQteHwXYBGcLLXKY5KRCkuQNK9RJ5d6ihqD1dEgi",
  "key21": "266qWHmb37xYX8vgjvGW1byX3dT5NWBfZsMxiYzwKhifqQJtsyrAU86DY97fzeg6ENU2wxA5tkK9WWtqKYunkfks",
  "key22": "35EWejjc9U9AYrnaVjyYLKE19qgkYJNe886DXKLDXyFVhiZdtWSoxwA32hdDGv5nMdrWBf36JAGxSh3JBDbQ24K3",
  "key23": "4HBLccK6v2cgaT5TQoEkTtqKEtHFktbkm3CwSfBzk8kTRe1SzR3Hknv6PKnFrxNuc5yngVyyhwQpuaNTeUbxAvcY",
  "key24": "5FiDLdS1UCRzY82cDB3dti3ueU8TNGdJqDJxQdW9GuRAH4oJjGGQ14X86BoC7an9PV7m5KyrzUYjJBSNBo8oDjic",
  "key25": "4ybCeDpAkHkCnPMYr5B9j5oxf1BbnovgG8dbWsSqzRFd8ZEk3t7QF4d22et9p3jLGsSiN8nF6NKghAtiyxmchxK5"
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
