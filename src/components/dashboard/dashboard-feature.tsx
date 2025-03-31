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
    "2uqZNy9oJ3AyDczVXJy5RpQQGCb8LApKtAP6gK7LNFCK86H7nr63Ay4e2FFinv6WUHX3YxhFCTqZRrG7b56SuRVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uRPmojaiPAyJkfcs2No6a2Vgi3iK3HqCwrfQKoW23ZNndN4UffZAgsTTdg4zLgeVLZgEjiqRcPcge9HpUvTX35h",
  "key1": "3tdLg9xnxt2rMdAYFtTQtUoJtmhFJc2ezDsCtTwQqAFwcgx1yK7Q8e9QECdDUdrPxMMiAC1szRcXCzscjZhuZitB",
  "key2": "jRsVCFGDCYUi5bym66WQuXg71RWWJQopMh5TPRtVrjxasMxUChSpi7DfRbFaA8WW8S3M5cPAt22NLGaWwYuBRUF",
  "key3": "2QdnpafXek2i6qFeXWuCPhxDujArsfK8nLPmcJz7C8vFp48riwSaFaVbvbsKNexNwtNQ6FDpnTfYHKMGA81hMyvv",
  "key4": "3rH3igG3KCmPokterUYDtvixjvZP15dvQjCb8D3zsY1Q8JaqPaE8eg43mTXEgTeiJ2Q8AuHNAYUuwHDuKBRLo7e3",
  "key5": "YFq9bkr1sqYueTr6MSLV2VYedcshT9Mn7zKS7hz1xYaaHqQycg25GqoY8ZtEfyCrp6hadEQhksRyC1cDvk3WT8M",
  "key6": "4P9ozMJAqiqBiicEDkexZPpjDd5Ay9igPvob9buszY8gZns9GkWrkopLgiXXVBjKk9ukk9nJgSsZJ4zH8yaygSap",
  "key7": "4adZptsdnrNPrpRKZYdnvtQau88YvNMhAH5x9Vo1AR62NCsCguUWiKnSWwz1Xnajv3BDjk7rBpp7N6jjQdofixFY",
  "key8": "3qCpFfsEzvDfANQtrBmKK2e3c98YpPFdVDKt7f3HFUq5TbKHZqWtgU9A2ybF58fJ6SS1PE11BWXQpm9iFE7irgnG",
  "key9": "vZgnJwCxa1mh79nVGYVMv5EZ58SkTqQSrgG6PxUPtAqvMHNLbzHxDUNbme7dpVMh9TcewGacyfn5vUyHMjEMAwh",
  "key10": "Wag4AYKQYjifdfdU3RCBMj58USVtyPjbWEAMo17gEPGmDibssBtVeFjZfDGhqMax5Td2tq2CN9Zs7cjRJ4HTW38",
  "key11": "4WAaiMHDGha4KFtrBs5Df4hvyanU2s5c47Nob71vrSTGZgccgk5ZufGmFvMF1t5JBXFaLvUZRdsqTSd6qkEDjf1o",
  "key12": "bvPqr46NDsxChqKEuvX5VfiYNScdFNZwXztPYhgEkA1PdxcLHgGJoa7L1QSZUqCST2hcezGSsHocYzm1LDN6hYg",
  "key13": "5hYL45kFQgq49DjLDcDHJg3Z6puRtqHqZLCYzCkrbx44kU96qSrBk6mv3idoB6sHHtJajciMgerpB9zLzviHPQwN",
  "key14": "4ze31Qz8gJxrZuEtnFB6K4oFbwsygJN1fh9eTYcSqZHpaN7nKzStiwZjVQAgrtJJmceb5JXTVC1rRTZCMMbweJuq",
  "key15": "2K1MgKeLMtLCzFSCKbxUvXDSV5ZYFn5i3NbMpfHmniT5xuqo5WiyhQfkKAVJYLGrCWxYygRsRqrBER8MQLeCnwZp",
  "key16": "5CaHFgUk74gtSVxhNFFjWCGJgGRMK1Vnqauh3ZYtoJoyjzmG4AbV4o6MmudeD3XxBE9vgbSxmZgfjZHqSaxRfcXf",
  "key17": "3JSGuRxXuSx5k5hZzF155xNzkyFcvk62pdU1hkG1Z62zJAteDq8tcet67eFNs1cAeZ3KmWaxw7N48qBykmJf3E6j",
  "key18": "2xjw6eexsz8XHA212YkqLXqrdqQdaBzHMSnSfgCqzDyzrrxJ4mXe9u8JSFo2G5TrYwaj31w8MfvDMpuoJFu4kwRC",
  "key19": "5q6jxExMcpWkBUmaPRs5bBd3mvhTRfaZnEnAWwx8EvKZPBjWUhKfndv9F2dGstQij5EC8eSH6WQxcT1f2S6HkA2V",
  "key20": "2LJopjNg24D7Q1NiAwxH4cK5acDT5tUMHqnJSz9GLG3bLXCb2Mp32Pxb2KYWpF7KFq43YfZuS7oiQpt9qNtqswNM",
  "key21": "67Vzm7Q2XSoxqQX9NxPWfTYiVCc57sQTeuqHCFzjGw8GTHUPN2MmEjJWJJCYUgjfakv1SHtKSPMoUVtVJBcxEtoD",
  "key22": "3jEMox74dXNpSc7LvemeB4RzBKx4gpggmjKFD4j4rtKUarU52PiVcN7idJceTe3BnxR4cc7X765SPzEEaSfRkzfC",
  "key23": "5hp44LPPxY9mZqwi95ZdDsFpFLLGm8pav8QUR6QeCzzu9qjvkVmQKa45J3pkrmba6wdhPguNDdLWnXtZ4xK9aFix",
  "key24": "4SR7BkKdVnFS9Sei1p5SAw685GgT49n7Zh5fbFJpZqvonfmvmCKFRfN5TfxXC2sXSHpfu8LmQY3MKX94NGBT3yMM",
  "key25": "j7ccrHfqyRR3ftiUAedJQbmXXDSB817aKrtVkXpBzADqsdnUvs2QBrtPkPkVUBwZthwejfGCWkv8ZQSyqMi3PGd"
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
