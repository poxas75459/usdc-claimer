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
    "sSyJNhkK6YuNYTd8YJfgPJrgkep8PLUFB1otz6EK3RJ86UVMhkVFu6EPm1bcLsELYHr4RcQ5uVxN6GoQkXPCUZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KotYxxcq1nTCFudcth3sVwR5iGoXq6xeEx995LLMoWzvcsVsv7FqEJjKHGmqiSMscQz1WiS6tKHh4VQPNh85v7f",
  "key1": "4MCZCXRJwWHnckCvF75abhjkGE8jW9GBBbmFNLNuvQKGZ792gJkaeEPWw2upsSJhvpbZFNjhhsyVpwAu7mxBokDv",
  "key2": "5rMYtbWDEnBfDfthamjwNFn75mGorwsgUau4osgN9BFtMjhxNx4H8vf6uUjD12iNs81z2mWP7CkXUzXCn2TmpwY7",
  "key3": "2Eo2p3s9LpSgMmGA9NQfGmAPWWXojaqK2UotATfDCkgZv3T1oD5u8pjLb7cyEEEK5yYwfQkKWy6xM95SMCTNvh3E",
  "key4": "24va5iMykgZBNtJhQAokT1eghJHyDMU1DtaRE4nbNLxUuBzTAPv3nK2DKiDkBrtHHmPF88SBNiJW9Wabfm8qkWjz",
  "key5": "4tkVLMrh2mXcttCUk49Fasynf9ebUxC9KoLqgYTZRAU8McwQDojMgZMAMKnXJrSRLYBAm6nGP24Udm6cLMLmm2e",
  "key6": "2W6dXHCc4u1bzgJUag1euERQ12vKKCHMDQ2yn9UqBoLKweStSDL2HniLgFHmic43F32QYTJYLCigmQtA8qTEtE5p",
  "key7": "2Mfi9gmc8YPGxdHYBquauRwAKyB8HocCWkCsKEfo6gGPR8xj5sZGu4wFHmtxheJSV9B9PAiLrb4WURob5RXyZchK",
  "key8": "etXNszqHLzoz6YzmjXzjyUQt8gr2yqiHBQ1CenjxHeAUDjmQyovz2BgA8bNF2USKYNJ2M5UDu7w3ufAhRPrDjiY",
  "key9": "2SRLsQYwHE9zx8ZPZxW4gWFnpLEsPoSC9BBQrEwQqtp3Xpd16jsuCzc51qUqCkwSeJGrkLM2PsHkSFDGqScrNUoz",
  "key10": "4cdVSNX9xq1Sp1LJtqUU3er7joNzGAsfonKPG92KvRGVo6miCFeC4YT9w4ANG2bxbrKbzZPz6ivGxwQWhY9WrJAk",
  "key11": "3W7ojWSqqYWiwwxhPFtYPYpVJbmw9cZomdgM6H1sWp5MghA5we3H9XunjCD4b2vjPRXaP7jHRowTfcSTUtNehf9",
  "key12": "3PKrifQ6p1pRiMQWEMkASotA9eJ8JR7iLpxuStT1rX1eeGakJWmWzVSjRMdxGenzoegSDx1NTJ3e5TUdSMwWLX5j",
  "key13": "5MRtjSdjoPAQyvqjJy5Dx7Qzh3KKJVeRXa9XiYirBeiddsSaoi81wjjrWFhX3CNY22pXSdzFn2DkM3Bq6RWQxj9J",
  "key14": "2v3x44BHb625i5MFtjvSBEAUFRPj48cB9drpxGotXJ8JyXxoLHRZisPekBpU6DJdcJVNre8ZRZZAEpQqSmu3memn",
  "key15": "2kJmLm9NXeX7zuM7nGXeDfQM4v9GAe5KKHBxSbg95tfGoPqKHjdN34Zb54XurF7gdRvXi5EREFM8LaXJawqHvE6N",
  "key16": "4gVpu7KFusTd67nt2rboHjrY4fwTubSMjXc5ERtNcHDNNmoVbt8qXXHVVLTupSWpwidkv2iEDdRaMoqvm8wHbYbQ",
  "key17": "35dpdFaU7SncKfeRDZ3qFTc8si92woBG6U2ipCxrjNkYwCAKMkLndDKLXwXcmYuamMnCFKD72KAAXS2vLs8WyzxN",
  "key18": "37GgU1LwnQF64XSY1j4m4e5jQ7UZo64uf23mgiowqjaxjC8VpGy3Wrnr3HxoarbNyDoLJGPFAWHxyqBKgsjocAcY",
  "key19": "2B9jJQh9DsUE77DZjKR8CEh59UoXn1YSZSkUJCX42jxGcEBCxmopz7M1RmVVjbGFcRaXysm5FwLyxk7nQyUgGdnH",
  "key20": "3Fa89YXPKBMutgBBzFKTz5k6CHGdAogUy89thZNcQjdBvDqNCp1mceaZGSSds2TAwGAdUa4TW8rhZh9qPDCZNzxK",
  "key21": "32eT8pmxkPvUY1KHE4F1MqRDcsfuP9xEKDXTktD2yjg3i5WrRjNDBykN4UaXNeQMgvkRaxSk9asg1Mj4ZYRRpDUc",
  "key22": "5uoeFB255GJnzv1XMFkdzxSeg9tCcNnuF4NctzboZ2DQFUZGNpLiQ47bqFi715sGwGyHh6Dn5qVPeVC4yooUuCin",
  "key23": "3GxZadT9WDT5XrLxNHxXCVWKNj44zAXqScRWPBrJQzgUsHC7uWdcMcNKVk8jUAGcbCc6oeNoZd3qhcv1eWeJehX5",
  "key24": "qnfipwvcAu4AY9tMoHUkMfAFP2DCTmAScJnJLEPzPvoJ8NvJqpkdcV3Z9Uan7Uv1m1S2ZpuRUFWss4SVJYNSBEF",
  "key25": "6c4SxfjWigcYgqHg9ZXu9ebg1GT3MD7iiHNJ3vq6QKoBeXwoHwU6FXfT12D6QZ7oBAZb4XPxxnfwwnMaszs3Sp5",
  "key26": "2tBGpcVHCp84ZutrSRUFimB6qC7GwgYaeBoTowo5M9V87XeDSfyNX9WASgbjxNVZphH1mTD9anYFAk3JtkQWHTJa"
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
