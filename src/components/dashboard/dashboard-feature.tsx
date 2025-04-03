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
    "3eMWQukq7ZsACvRasxAjGBLgAEyaYaFeEVSmHfSXNnGcuJfJrGkJSZmxeVGKiTiiVMuw73SJiekWwZKS3LkYeEUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G47KGGxYfF6qdNbmrFN8xp6iAezZYnvMoHrD7ERAgjgagmvMkWnhA1JS9qwUKHA5e94fyVcTHd41o7A78JGHa2Z",
  "key1": "4WFpgd6gd4zfwuFWkUywZDgS6NsyjRu4vC31ujUn3wkLpGesbfFmALb3k54grUetBhPSeHAtTCqvQwWe5SscU2B6",
  "key2": "52nXomqDGiz6VNYBSmBsGTure3HjGfxnY1Rp9dkYpjgckajctbcgwTKtMf2pKqhTxd7ucVLBwVEmzU43t6TWhn8Y",
  "key3": "3BuKEKNbYo4cY2HkuUkNMtXXnfQKEFzm1ruNydNFN62ezyWpN7R53SEfGSxzTDQFiwcS9sdEjSWyeoQWQbXyfFef",
  "key4": "1bsyDp7QL1qFn2gb5upHmQJSob4oc7sy2BtptvWqmJYbyn57SP7Muf1znoHzXkNFj1baWj5Teuv8vpeutndNyyd",
  "key5": "2mbmZfs1JKq6z5Jxge1U8igdvkYixfComo8bjVcDZBoKX7zvzctM9WnYGK6zGEoNPLdtYMBw6jPDL6xRyb6D8HZL",
  "key6": "36EUGyCZGMBwyWNJpA8BGc9Gx1M5bRjq1KDbs8xy8RRVJ9H1BNu1aUVJ8SFWUJ5aNWtUupe83wKcjSgyH6ryo67M",
  "key7": "3RhJDRpuR19Aoyxu9VA8vYXfmSBZULQvhsQt1gHLidg77uJJtYo6Ah9USF19PBfyRLGKaxQphU4soWasabeDUCws",
  "key8": "tn6XSYxxASXTNAwSEmQwEoiDXGFndeo6FLRbhJpvFELQihmk82zbkC2w4uquU7482Xxk51GoJY4W67Lep8J7Rdi",
  "key9": "5dv6R2eKEXdnQ8fZqYLFeiKTUcVm8LyUy2iBEJVYQ3HXrRHio9NuEh2gz7guJnWP5mMS71HJJCPmwx1CJDcRoYY1",
  "key10": "5umqVP4KUFossZkhhxJrUatUNX3dQGfz3FRyiRLq3W724APnzqcBKWuQ2jjtixD5XAAhDQUGFGgnLnSipxcWhEdN",
  "key11": "4XUdvsaxZ5sCvUGPcWSPCxM8asMT4sufYFqQWf4ARUHRMPCWFsWfxerDam3qYtkbwBThiUGcwVJ7uRDoAFEwJQuj",
  "key12": "vjSnzqefAH9MRqzi2vgdkis75SaVDSQdTSgLMDP5RZJBfiY83KTVsA6YAT2RGK5sJiJCnJQziL5TBmWrxyntRf3",
  "key13": "ajcJNiyFEYtFXFJDFUStsNhsLQ8Wr4uokJz5QhfhtFStnyPiKV8NtgjMGpTFGY6zVsXTgepjS5UZNT8kLta2sm5",
  "key14": "XaGJPkzMFH972CwDb4jrcYcAJf58dPzZHZsKt1tTrVu1hZrvKwXee9QwpbcgTRMxtpohoy5W5eJNHW5Z6Zq6iQ6",
  "key15": "3Fd3Lg1NxX8oji9hTAgT3aUYqUexUExD9ReSeGWtVeUDbT6b4WBWnjCGzPompAiqC88WVNCV1Wth4zYfwV57m4nQ",
  "key16": "8EfBje4fpEGcbTtWWVQ54PpGEJoYM3dXK1PjRx6AnXjdsCjJrgVpZFkZCrQe9ffWGbcJxvE9zBUcA5VS6vgVmNH",
  "key17": "2yJsBRCktaLDQwHrXCQQiYGwSAHcUjwmzkQdWkqsmCyPiknPu69acU9LsBvqyD548WZnevU4Pd27EpLBS5c48Y3Y",
  "key18": "53J3ZZUcJZZAcVGQXsWRVMW17zsJ1tLBjyxfCiYedTizT15maX55iv71dXSUUWRmALSyEuZv9es6RFppY8YhmtjA",
  "key19": "4MTPGNRjBr1GVHqCSdnWCi63G5DKaCX7nYtSUAd4xVTrW19GpY29NfA72vPYr9C1UMJySLnEEkecnSxKES2Y4ysY",
  "key20": "4N7hDF1q7sx35ciTmrC2CYLQiXJsjZ6cCZk9tvGRpkJiu6ka7LcTs5o6bskfYVfey7s7ygoopqFtzDumHTNTi7YQ",
  "key21": "2eLwbi1zQH2TsEKBCABRx2H48bZKobXH1RgyPns6DxJWAGi9cqbtaLwad6wMLGc5KiQ5gvrYcQN2uGW7A1Svj2Ub",
  "key22": "36yWogKCcD8U3NfS8SNCAkocyS5M62RqJdicx4NhbKkc9A2dpov3f5KJhqRGQpLXYoV4ZqrrYEHpZSxgEzUopPPs",
  "key23": "r8ZcthzVCien6mwCPxBH5aURL9FUyvUVoXuxu6GUZdSBpyMKtTzFzAD9zprYgG9A9FZxxg2DWeG8X7Gx9uaHQEa",
  "key24": "w9Gy1KmcQ7wUhchGWc4qjQ8Gz2kUUcXXYUCJYn12hd5DiwEGKdqGES9ZLnAfQeV2XybzudXYAWcSBcqxv9CuRWs",
  "key25": "X4UxfJpozUMCR5G88JohjKzGdtypvfBfPcanHBKWBJzNjJJM9s6R7Du4roR9C3v8R4RCQ8DKYgV83qTnZRyHGPt",
  "key26": "XGYrx7uPELLpTBfht4x1hQXpwRuXwmhqvV9ucaCN2BawK2X4jK1ptbMiXy1FwnM4GfqydBAkSWy8xLC2APwd4Bk",
  "key27": "4q2QaFUc1kyKkneQN39syJyEm8dTPVb4WYDScCceBZvtahKp9uws1kHuzD5acb1ofqptzueRCQHLnA3g63FrfmRX",
  "key28": "CXt4gpQV3HpmMdvWhw3viPPXeMkYWSg3SS9PJwZd73m1YPDdjDi5SuNk5NmEJwCZSM3xBAdLFX821cJKUEvZjQB",
  "key29": "4kWD81Nq9LH4bgf7szViYpEGZDxgtGupGeT3mUDqDfNXVpC8uz5wxbkftFSQzQ4bW6XwbcoeVEtJfJPKf1LrkXi7"
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
