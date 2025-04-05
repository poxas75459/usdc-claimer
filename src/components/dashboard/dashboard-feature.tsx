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
    "2fkpKfNJmDnVZ1i3dx8N53ocm7WDb2rgmFUoPxzRJM6Qz7LLbqrM34LpUD1ZBrZ8wF1MBWkUUgiEEHeL3iNwjcvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YdbCZxHaUDbYPz3j9HNpG6R5Y5ERgo4e1ckDAzSvrzCV4hKRmanma4LU7mwCVByWrQgowdRtJq5cTcoS83wGhfZ",
  "key1": "B7XtZ14yDPFBj2sahT67izyW3NjrGy1RPyGeMejvmgN52YsYCCxfuF7uiisfJogmn3vpX96rU4uupF6HRSFP158",
  "key2": "47y2TSd9kv2J3BYz5hG5hAFQAXWuxgeWfk3WGLpfpdeHCWCss7deQzoKS6aXWvoESi5Zy7JKnaWU7pjkDADuSXZN",
  "key3": "37R97NjvGBjnnfGga2tybUMGAkJzMzsdVSW75XKZocHvr6d868fea2zcHo5Ahk9Xya5yTpYznSC2otBta8Z5JCnW",
  "key4": "4L8o9DPfjQCUkkn3nFRZna738QhWaRrxGnhUZUG6Dt7RjPfzrmgh56LZE8eJcUmwaiHzrw8ov2wbTJtrNHoj869H",
  "key5": "3Lv1ysdte3DjWrN9pEWQtF4BZuRRbf5AxbmMrzrrCHhGqpFAeMZG6SSkwtTLyoXQi4rWtEQVPyhmi3Heo6bcdATj",
  "key6": "4R97y5gjyokJTM9tL32vH99usKGm9gDFJZBQjiCg4FUQfW3i4Hg2dTtEL8N5Uug8ww6F6JUxvB29KoTmtDMWaXmp",
  "key7": "4P5GoznMYNsFX4WCZ39AmFaizoFBW3eawt7UTnbBD3MTLzU3hEvGKryeZp5GyzMyyPw5h4Lr27rDPWRa4zmLBVbH",
  "key8": "4muBgwXKznycWF3iKyvVnqyD21ysk3W55JUWG6nKfji84upf9dTaQcY1ndmUGGx5KDggfF4XtDpayYWy1D7o4GbZ",
  "key9": "kQZxM82VWvqfQHEzdGT7QujxNNWAkD3pJ9vgi7SBrzn67gyzjjovycoXjM1zF7yLz6AWQAwJPGBXEmR29xMxg2k",
  "key10": "51E9EGCFcK2VGCuSPnxXaN4QDKKFQAKYPmMSR1CtqYrZt6aLTj1KCCW8n9PigH6UFXPhnvsrNyKFVNameLQ3AW2n",
  "key11": "2E6ernjC2vhMkNLTDxweS7FHfXGk7o48ELfpK2XFbDuK24yM8XVc6GpgJrgKkKQ8QsAqMCM6B9qLDHa2AQQt2JTa",
  "key12": "3igYyykVnaDZpay4pXLzSNbq9SkowKKn47x812XL4hza6cn6zSbQwUk7qDMbRXAJUyrPkFsd8FyJdYNq4qjtTpMn",
  "key13": "4pbdHUoM6hJJFCqSRoNyHcDEg2UJcWQD2uKHaLDF1jXWbF5Vz6iziot2thvRUaGbJVLnBDcY5BVmZTrDQAPndXJ5",
  "key14": "uNFpo2Eaieserg8eEiPba9jaFXu5Je5jn1DBmCeoa2ftdPWCeTGbnDSoY28UMYQKt1EDXH4ZUWKii3yPoXUp3pF",
  "key15": "2Rt4gDk9UsjBNcH23tzWSAVmXibowKu6SymwYnRwS8vuKyaNiVhuPztiaKY6Fv9NxoDViw6B9zVokrzcHhgo9tv3",
  "key16": "3rj1NCtvYJWZsvirDcsWm5QgAVaWzrCMN5f6UNEicaZMKfUCaS7Y33dezRhGZ6Pi81vhifgLH985ZGa7gasfbMUV",
  "key17": "5SnLvfKMUDUr31gnEmjcGGHF44wTCMzswvuHK8Mj5ZfK7RMGkhhPPxmZeVbJjtL1ksnkrbHYZhSRk7guSR7zLbko",
  "key18": "3HgUZvPSsnuv6gaXKeG9FDiKJqwb6xY3dWRRjXPjzRJsy1wzj8byoTR1jAm9jVgPbHYo481KJL9XsxY61CZPZdKV",
  "key19": "4x82NFfU8qpDBUpyZhRpBEzigjz6A2vEjKabjbKQUYATYWq1UsaJwRFXMaTxbaYt3iGNnKszkUjQ96M4n29fR1FC",
  "key20": "3W2y4HDMhuXxbP73Ua1t8Xux37Nm84tSMMdxsAneWRVYAWZ9m6wxsCLB7GXZd7gZhdPRxwAorrCEf4j9XqFCkwN",
  "key21": "4TokASqqbX8X5Bg9rSXHhfMq7yHBKXycE6ZG2fzdS6aK3ZxiwSNbuSqo74mM2FCt6j7bxBt2vKrpxUL29oq1tq8w",
  "key22": "66JDWgoXKEPB6ftEQ712dXehufn3KUEaPu2gTWU71Qy9WEZpMxvRLJmPkvT9XepVAeaUYCCLKZyTXK6P8JZ8qGJp",
  "key23": "X8kziFeE2Q1CHtDrxmcddpzAAPvuxytzpepUnAaDa3P1LcZr8d6XJ7MnV36XLTZNDjaxPLPCH1auhvFBkt9utRM",
  "key24": "648xKguV1c3NGt9dxHwVpWMjCnmjqvmwiQDV8YWQKdaYfzQseehAk2FzzHJNVNZV14gKeKef6eZ7ThhR2AW8GvUL",
  "key25": "2kK2z5fyiospXvcGAEhPZMtgEmkPLuRw1WxiLoLQS7dUKk9kF7JPtPZ6Y8BPF896XBDUyK8gN3LLjS9DjFs1uQPT",
  "key26": "5fURFhng2ZMrP6xeUTGdczKhNLkA85efxMbxartVkhGJBPsvjbYmUtQ2iGQHA6SSPqZHtotJiMo2UDixRVSnUaFo",
  "key27": "4nhjewVhfNWYzDTBmpQudwq2xMM8se8sRdpENdXVNtUJrBCVjbnTzb4eX1ovGJfM1BSG3LZfgzigzgohx8fytY2r",
  "key28": "5oZdv1pC51knnmiFY1FbsR387qxcnu8ifBFr88WaNzFQKETZnSEuXbBBtmUYfmvz8779CnxPCaDcwrsEkGcqXUti",
  "key29": "kMqYuxJvxDEV7ub8oPLznRzf8BGuMhvd3Sov4RfRvpmFF3ysucHRawtdxovKBbTSZH4BT6CyL4wdmcQC3sCSFfN",
  "key30": "5NXMf4teM1XG1SHx768LPdwpJXUgtHZf2bQLqd2ZAZjbFxkLQ6v6EABqMJsE8dSiqtc7TZmrv5kkepuSjCfLvg3Y",
  "key31": "4xPdFv8JXtWV5ebrtzrnHtqeuLEdFGPpcFCE6w44YEdiytixoxx4ZokJBJgKiGhmQNR4VP9BQVEE8QdJ9KrbZL2e",
  "key32": "56FaXFawLAaGa8VifhyJW3kt6ZWgVYpYNMAAJgnyWu4njqSm65CDE5kJnwUtaUSn92VtjfnEuUSS4NxJQcbH4r8Y",
  "key33": "2zLBVhivF9n323yMW9jfxB3TwjBs4EPw1uPkinqiGzqi2adJGNRuCR4M9o4oDFB4vtPbvyyrGAmyDwmVD46b7qaU"
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
