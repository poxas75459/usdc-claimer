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
    "3wtEaM2gzqFgRrpEACVqRtdSEx2weePTVBxqSHMvd7HKU6fHkXNSoobU8LSskpnRt9Scv3xY1xRCjSrGn8kP92UF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jyveh6asnavmEq3XwHU5PoBJLnGW1Bc8gggpLSYB97nwVfzguxwByjjqX6u1dBVdERXLHxMexZtUiC2UMheJWMP",
  "key1": "LthoUbLieMf1ynVDGgWybR3d6x7onH2G2dVcxYBz74t722eAxv8cnF3zCeHuiwnRsCTS9paEQSnL7aFBMYAhkEz",
  "key2": "5mUXC3yFgMv6KW2KsuRgpqgY5QGpanVULKf7q9cTCWNaWLyjDfHKyKwRWm9Ang84dbJUs5FrmqTYkHRyCsoSFnNV",
  "key3": "vJPq7xQ9731wwGHqnBnFN1XcSHXpUXHsq32s5q4qxVRF8vXq2mf7mzZY1s7cnrFACyEgBUwuduxrxht4VhwsCwD",
  "key4": "bGNt3ds2veVPNEToZDp1ei33gDpWwdaAFqjpCZmigtnm7VDPuWQwTCxaZ1LZ4A2uYqRLdrMcMaEEwUdHXoqST9Q",
  "key5": "2bz9uU56XvCafLSqT3vGanArmZgMKu29AjfVKQPoB9pCaoukM8j5Cw8RCMPtQHZd8JV5e2DrC4LreX3aE4mRBHQ",
  "key6": "57LbagFKf5hqYeAYG5HQY5q8zZfirQdYQZPHvUBhJht76YoFQrc1JBt96Wqfpibv2Ym877DJDkP5P2BtTJNshZy8",
  "key7": "3Htapgq7tNBFtfF9oWafJRy6TQhbjGkm8bs2QQhSPUmdRY1cWDw8UrGVVxJB7gwhxVYVWfmeLLD826texDeqtQrE",
  "key8": "4viLdPK1QDfnVjB9faGk3YdodSZhrGa8gnad9Go8t9R7Mtt9F5H2c61328KL8auM96VfxSezwDbaqeyjmMLyZXtz",
  "key9": "WU5mr27c5jKewf1rJZQ6RGoBNsgBP5phXcokcwrqXPHcK5vtK1MQPjBZdgTUVstoFHrGoCZrCXZdqdA2AK79BxM",
  "key10": "3HmKTwSXyC1f4bgbJtciK6sj652Wk6H1n8bVgXqDSLncYJH8u6ekTDLZhZSLJosRZ3yQbj7ZSHYY6XVvBQGPRKY5",
  "key11": "42BfxMpGk7gc3w4MtJefp9mXqXuyEX9MAzKNr19F6VvssDmwm4j6GEXWJfnEx4ivyBiQ9sGjo2tq6JCkyd8kNEqG",
  "key12": "Qg1Tu2eJheduvUX2eHn97vVPb1cSK3fnLrwWKxtHM5cG5BrSvFrut1XNabsWc3edS1qiq3oGwuvprA58zF6s16d",
  "key13": "3uUWhvERCfBVrUCtqtctg9q41wSq3KY3Psgix3Q5Yz8zo97s1zczkBCEXd1zsbjhx9FkvAxN1ARkJbcp97MZsNJ5",
  "key14": "5mTthinmN7uAEX6xHkQQZXq6HD2NNW8WiG1ZttwLNqy8gfYetkKQ26Y1rSawdCGRdY6emXugg2dU3vRipgMBLgjx",
  "key15": "3BbzcYPzkkseU4RZjFQoVbDpfNrvS1F7c2qm6qeJGTJGaxEzrwgueSoHrWTkVvGZkUubcdzSoSAbLSdkVt3rkzv1",
  "key16": "38nyjYvGrEzEKrWncQ8tq3NRMaXiw8A7RDygK9FLCBeuRai2dccR5FnZdsAnywC7WsA1JFsTyfa42eTEg9cdNq8D",
  "key17": "4LTkU6G3w3Bkp9cYXJ8eEBFcyCgYsB5LQae9FWYdzJiVTh5Ui7Mr6wuaKFqf5fd5kPj4k4uSRVKTPnPyyPYmz3Ju",
  "key18": "6RxKCjJoi4aUKy5517npQzi3ERhr5Rf14P4KG6SHoW5Qqmr1pxZABzmpLg5pXpWnPwaV8NWH2LQd5TGKcweHtPc",
  "key19": "4jFyZvBbcYTMJS4at76C8GAK36mpxdNvGhQmm2UkymsFPYxtGd73cwhBy9Gm5FPPc9ca26kAW7tv7cHcxpS3jYUy",
  "key20": "2aJhekEtxPDHmezoYn6dxKFZqrfmygGvqp1DZRNfokuG8yUaJpRKtZ78MmxCpXmNcjsvE71R6N3KiiW51aMK21r7",
  "key21": "5NkPxeQ3XpkHfCj8y4ztvR8kgRTLA7NpS6uvVuNCExad4agcNAZKREJu7Jg5c9if96Q1R9GNmJVTkVYtg6xDxUog",
  "key22": "32EdeHCZNuPZAMBqqUncJRzuj1NuG8qex4k97abst4wzMcpwXXJejgqbi4LLgemzDDc19CKW8guqKuMqGVJK4pLF",
  "key23": "ZWYr8TbF9ZJCKYUXdr4EyUFShmyBsKEvKFdePa5wfRzVX1DBfoEBK77m89ubb1RMGYHPVxVCgny2PWtuNf4Zzw3",
  "key24": "2LNynyXcdA17L89o1GzhaurZUSSL4ihUJTUVLRRn6pD5eVgucF5tZ1M55mz3sHWNQo56sXVBDDBxkaZvBvC9bhhG",
  "key25": "5CaDChAuvrafxufo9JnZsPKUHxyPhn7yTbo27Kuyrd945i6qbD1fSzzrtnhjCutZBMn89NyxDPuXameqEm67ZvSx",
  "key26": "32x1D1yMjLLQJe8dqR9718r3uDxcXP9XirthyFZKSAsSEZQ2gJAZXokjgWXT5YSTWtRCPiHbi3TG8oFn2eHiHz9L",
  "key27": "4Z9JEnM56kMMhptNPBmJipneoARMYeidGwvEH1SMSrbXGe7Z3peZCXYUHhKP3pxACShFxqWBfS1gDLDUG6174Zbx",
  "key28": "2mooN7HjG78fvLqZPDwmMQyoTxkPEFbqErLh4qTHHmK57zMm3vAcaYtSJBQh79i3FH5GfeL6ebUYcgPB81hQsG8z",
  "key29": "4ECEQT6KcH9KSox4QEEa4EL1JgHpgks49vampwBTtYmhB4vkbw6ijmJ4xtML9SKpjB996zayZG5S6CNdxnhypchy",
  "key30": "3Q2haCWpBMQWTrcdi9dGcC6p6dT9u4ecraomkvUsMxgrXw83PzDt3F3cosSNvJVuF7LpgvorYz9TYozp8rgAyFQn",
  "key31": "4qbsS2AwhV9TaTpz6NZ7j6APdbbE24diN5eiY4LhQ1WaxoudBU5N7PrZtChVVaoAa8JxvzKdD1sJsVepEds8gGRG",
  "key32": "2NWM4BXkx8SjyKByaegFGBabpzLMzXWM953W37DvCGmzTGxfj9jyNQtCcQmHa9ptgXLZfpseZKDhctsspDPPD3ve",
  "key33": "4EpHHw8N3AX673C36PJmrdEj9y21qBZbfzT3w8jFirHx8vT4ozmAqyftUVKAiYCRjGoAKdUQwgSxYHgSoKtmfMWc",
  "key34": "4pMocPeeZtjRxF94W6hLxvo669oF9QAUiiG89ovNE71J6DJBCt5KJWFQSyC4SojQTtZm8ZE3xLDjmegziSL4yXoQ",
  "key35": "598KoKmcGvF1vinsNn85XYnLbqq6hBFmKhX5e4Y3NS9aRvm6hnNLHmXwzSNjJgg11QqnG5GPeya4iLqbxHBB12iL",
  "key36": "4BcoLpeCj2X2vhM6jFC7j7rt11fDJTyzBqvY474nYaFeNdekeWtfJg8UbaDAY3Zy7ym4tbw2FAp1pYiHhdXPr4qc",
  "key37": "4Ki1moBmMBxtCFqXtM5Jj9QYBaerBfzunzY28GJcT7EXf4AkbuHoonLuKkQ4apvNvUs4MGQf1gc2hBkhjh8j8fUo",
  "key38": "3GBhvgzLfAzXEcCuqDcvL47Ko6CanoYyumxN1sX51TomyT7Tg9Qkc8kJBwUZhASnhxd3UJ9AdhEham9rRzGLgUrZ",
  "key39": "3Ksrwt4xSo74ygEYh7gircG6aWgwbZ3s4ntx9j3u1QTK1Y3o1b5KhnVYpcexgbc9cbetcf2fwQAA74KV9PceTTBq",
  "key40": "2t1hiDz1LrUY1uhgubHRes8nZ8sr58mMzugQFNQWD7boS5mbsWF6BstHXVMPV3WiBDuCpqA4WZetokbZ2Bm7Gkjw",
  "key41": "3tdAi5enWRgzqB3UPA7RvHZ6DKBqUuN9FgqMed2FKh7WuoP9XNcF4mhnxURHU76WjHKRgUZS2W6bKFFsntMwZUZr",
  "key42": "5FNgT5jmLH7BNbM5h7jgL9TaS1qqyrkd5v3Qm1zktEX34Zn8LHZHzyJAmu1RMeex1dz19uqorjSxXiCrrUUFzp2C",
  "key43": "3C544QDHZGjeJfAs1Sp2wv5jGT3Ktsd6YvsDgKu4HChS1QjhA3vGnGrL2bB7KkRQPURAUv3pNSL96L6HuaX98Qsh",
  "key44": "3rpjxawTLJZv1zQpzAnebqNGJn2GD8c1GENb19AU6y8uc2iPaEie38rbCqbSYQFV1itYvHCwCMCoAmW7TfSrvkRJ",
  "key45": "3FVyXVojDoURdm58KojXPCvgVsXPpYeorN3L3PMUUbXDwBVnN8GCTmqnr5YGmSTMDLBYehmtsrUBeRSQvGL8Yu3S",
  "key46": "47YYhzpygfzPXCGBekjD92f63EtWk2rBjvz182Vi9VEkrbVZ7Su9vByWD6JQZ5qmu6M3FGjUAsCQjUeZ7YkFdmzU",
  "key47": "phoM1z1usU4X8gkoDtZbfkmPmGjzH3WFxKHinG3837pMYWbqSCyMH8epHN3Hdjo7iJMLG4cq1fESABh4UgBwmMK",
  "key48": "2K6Bt1fdindMfJ82eCA6ikVD4DCuWbJUaiBmnkoeRHyuGwCqX3jkxERvUNsvxs4yLiHMSt3G7pDDKkMJZ4jSQnge"
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
