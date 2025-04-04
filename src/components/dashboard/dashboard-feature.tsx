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
    "3fzG6n9x4mbHrWEVsQ7k882GVVgtDkJNC3cwGgw57boviDiSszvEoNxzBmCcJF9AYqwFtddQVdqfEuj1LMKQfUPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A4PoTuu5bagzSNkuxhwrfhGnDJ3D6XaYtAaqtPYmAtVCVZzdAGfXYuAgZA5Tf37qvmatQtHCnE7mcnFAsrDh3kP",
  "key1": "2wgR1h6WdG1Mxog3cxNTWSNuSH9wijSizi31KFTxqJ8MbFvPs1j9JSSeUjSVzu4stggnmHZqrVTestFbq5fNuiNG",
  "key2": "2D41LcjuZgxUEG1hQZ7oia8fy45Pcod3soL4mXn4F9dagpPUotDcXkPLt4vfrfpyJvaHqMgrVorZbWk1peJ4wBHf",
  "key3": "5Wn7xn74ucLaSQjUJgFfNbJaoVJpXM8Y59xgcYX9CTU5NdAPHUhkFvuDbCbH4PkfwijmQBLMi2ewXtXe2LcvshHr",
  "key4": "4BfDgzQG9GmmyhL9uhmSzHUaW9pgqk8C46JXPnYHXxdCQJaCj6QWa2ndGpWdtDLjqtL82TEw1V7pm5BCbRTXQXP2",
  "key5": "3qX2LvD9XRN9Zjv1TLfoJGsX8B6AjCntBL7MJHebUtLbYzujZnFcpEfRbad9WyY2C73GSeM78wibsUD9iRbnj2Gp",
  "key6": "39PqttVXgUKprYhRpvGb1jJNRcv9d4wZYzYWcdJCBKjHr27zn2Fak2Y6b8RjCSSUZMQBXevas26cXGfHnE8SQx51",
  "key7": "4DZriSjJHpRFfpSDothZkcS48iPDjVVWeAdQ5yfkrQpveZ2XT4Kwr98VYuBE83dhMdaowuxjD2wdLphJaHWjuBPe",
  "key8": "4VvqrrToo7rVLy4JPJhnEph5GXNUqKJ76QQMAtr6nh4V3o3Kb5SUmpmonxvF6aAMHpbGQZdz323pGmKC16hntyrB",
  "key9": "NgR1U2fmSMwFroHZ9C9wSbXiMgkiQMBKciWV3qGBSuHjGodVAZSB8iRvGLyuBanUAfHVLhpkohuXXPZoFF3bnqm",
  "key10": "4vandynnuHqAsHkJY6zYfir1ZF3e5zbybhzZxpVvqNA1utHcxdJu6A6MrBgyvTZXQeLxDEHVhp4vMzsMrQYxqs8a",
  "key11": "3yYDmyK5UzrDGjEf57TooJkssFmKyS8HsKMrDsfjYdbo2VPuJbpGxyKxN1v96Q3ZcYgmTUeX5wwsc4WxSu64cXWA",
  "key12": "4ZVovp7zKNapa6v9AWnabnPHfp8HQ8xpsLxwM44cfZaaRbXFYaWSyU439hNaUTAVrxVyzcM1QNrafwKvz7ijTyA6",
  "key13": "5TS5Zay82kRt7fBcdZLkXKhZig2Ef9fYD6kaH6bnroCvYYa4RYSpKykCyHB8WTBscWkCkr5vpYdRUHFL9XVZuwXK",
  "key14": "2Bzhd6exNx6GdUoxppyo1vxCWCuHGL3Ls2zj6tro9y6D3K4QheNuxm3viXWCv6zQzTyqwBWhEsjnheu9TWorUxGD",
  "key15": "3u8ZEj84k84WzsNegNY2p9M1LHGh3vBRXGN2bdDZufpgtk8fKqd425icw1DmYciy7k34KQBojoT9fVM5a9cHiK6V",
  "key16": "3sJFLZvhVLWNmG1Nbb4VRcYPrmTDhSrERUgbRjX8PQK5m26oPT5UZY74cB5ZfZXKKf29jCpTfbis9qocm8JzVW8Y",
  "key17": "5sQP71qSxoPUU4ZEF8sQbv6zTK69XFs7XJaeSrcoFKuvwcyg5E2cv6QffaFoWjG5nNz6VqmTjgJY2doYQHe4A72e",
  "key18": "2eQoqiVnbHihr2YAU5gd5zdX8z223ffin6p7LfDXUumhiqPZc6wJU51JMi8iSk7Xo2Xce936gSfMMAL4mDk8cAhi",
  "key19": "2SSr3nMjJ3MZYxyWQC7ymbEaUx1B2qEvzA852vcMczPkgfoZQ68LDRUKaCRXNQzVBnWsnu1joFZmR6iHPBDNWWwA",
  "key20": "3XsMCkUXNGpDYgvvZNtUtac6AqUQ2zKhDGaYKRu6P55sCYidKBYvEseVmpqb9d5zsa95d2t1TA8HfuRsA47qWyyr",
  "key21": "5zgrLeChHvs3iShT4ngCvUnTREUi1UedzNZHWmidtpbcLFRmjXsjCwKpt7sjk2jrS3CQBUoSDGmUwo2YDPneT68v",
  "key22": "21w7ZjrbyPfW2DZWUffGdZticqdefQqejgC2nvgcwfWNHg3XVY7kzrrEnd75iqFohRxKxtWHDnnvcngDFXU54kmp",
  "key23": "3CGzf2BMqJwAiof9Gs66JZZntQAfEyFty6V9nro5TDuq9yYk3Xpdjw2DZVWxrNyA4nKSKasgF3AbjhMTaC19muNU",
  "key24": "2eZVekjs1Aqsfj7uVin44oBLw9DYqy5imfsR6eQ2J3DaYkcGRHdWxZHArEEWNdEpb6miDmPuQtsRcsyc3cNYDCRW",
  "key25": "4DmHqHf7vN2Xoao1a3nNx4LyGQ3ovHvwHSYb6jKEqWAfPYKtWCj2kHRuqraN4TGkcjD8HUy9J5PHThTS2ZFyzWFc",
  "key26": "4FjMx5QptSxavkjeeeCsRGuj2DWysGZKDwpHNt6H3AzfzWn3Jw1Bmqx6gVckTHXN8Jd3gY9SErrnsrzukL43UzTf",
  "key27": "2dVkLGnaVS7AswPuPXYxQUCnTyaqcFLLfDK92e36mq31v23HoCMs6Ho2MwrQjbVFPc4d4ZKwkaBPyk2meWsAqMxX",
  "key28": "2fpYsDDH2yjcczd4eQ3R8Pz9nSTZeKrQzawnkcXkGhyhRo7VB7ZVKUPkMBBzDidUgRjbkEj9YgHSKKQXy7q2PYMX",
  "key29": "5XCHfsqF6UDcKAhEYqhq3rQS4PfEnrHdVCeWx65fB5Z94qesqd7BWiCGj92phLTt7fjzpyB4jomgw5K2tPviPJBZ"
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
