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
    "9L59zNWrXQP9qzCF14em25YPxGwrgvQehqo69byobYCLdowRhb7rBJBT1b6UCyHSgSKyn5Z1g48bTCQ4VnhnQXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cb36w5MuMXUutDN6zw4F99ZDUJ1miGW33E4fsWQK6Gh1WvZXX5eadyYB2vDedtHM22Nh863qUMy6n2bfaKpa3Hi",
  "key1": "2HgNgdPpKHs8cjLn2W2SfKMex6RdhVkXXJaogfidMKUTKVicGwY3r9dSbBu51ms2WGvnwN4oJ73X18h6VR7SfXWm",
  "key2": "m34qtbCANdCzxJoktuDi6KtNP1GuhpoR4L8q3Sm4Gq9fcWLc8MW2JvxjDDSt62Df7fEC9AnsKkNe8HSRsw5gtpt",
  "key3": "3C1m1XDmFgZvTzNLGg3bjk8KbihgWNPhegE2kjeNtdMkoKEEfDEDPu9bex389D73cHkz1xMcPB9TcyigguvZdBho",
  "key4": "dqpzZcJsTeZQJHtcTHqEtqxrKTWKg4uWscSRxBNx3p39WNtRRZkjtGfe8a3bhRCT2Y4QW72NJ5ACZCxPYQMn3Z9",
  "key5": "3VjptL1rQtNtx8itAoZTQRTvNJiWDLyZikbfx4dSUbjvdHNXSpaWqG9XpNTUA8gJVqjC9HhLnCzP3RLZdDad5KQ",
  "key6": "5itLZKTw493QW1vuUKuUhNViuRzi5FLcNnRfy9SsT8Rxnnupvm1DwsjQeyqwCNs2dRNyvZQWo63cSDGTuZBeTg8W",
  "key7": "4v1Rm2tE9kVfSanbNkKXCcnsVgai7HemiycjWuHhzwdsBVs3U6bziY8NEowgKbK79mb3fuk3L5RrAU5CKNudyBuC",
  "key8": "2fctc6SEuj88xerjD7YGmzGd7K6No4q5XqNDGoTWGmh7mxU5YHg5JUp42TxpHfYKtViHuEugrjuawqUnPL5zXCdK",
  "key9": "2Ls7xDFRQZP6sgNPJRPEXqC2SDX5cBbyQLb2EZBWEHAYRBnjwPyY5CGy8d82KzhcgPw8971S6t7TbECfLk75DZWK",
  "key10": "5eWGfyuQjLG3oz9DY96guPjhcTrxMNmFcRWk8zD8kBNY6KzV9fkxbGVLpnE41pUe7jzg2XY64SoTQvtv1diJjeWD",
  "key11": "5bykV2WbMR3mQmCeqE8hdQVMwmuovGp6Jz2WUC2aLPVx5cHScUZbwxnJcd8tHJiHr3a4JbkcHjqmJjDjXFK4VcDM",
  "key12": "2EyPc5uX5m2Ztmmnu8hAx3vQHPYvthHbqX8c3yjnkPiobpfCnWFmSDBKNx61b8FGa4smjgu199G3S2mfVvNhJ42E",
  "key13": "374D3gzHcQzgwjwNGai6FEcHHmcwkuT2eECT3AjQCtvdPChEt9tGc5otQMPqCrRYupBDgzyWCz7UAkYYcWvWSUss",
  "key14": "4u5G1iJBTbzaoHLJWBZSzeDoZYzmd8nSsL4KjJA9RWb7YvhGHHLFwBMWUk83YKCDLTY7cLsaCfqCpRPv4AgCmjn4",
  "key15": "26ZTBpF5n6FLSxHYTuYrwHmntqQd8Li9SEcrG9jYTpZjHhC3Mhp4DG9HS5a12SnZeT3TgG7NvzaWWPhrx72Y2aQX",
  "key16": "2TJisNAJgH3HsjJWsdLwxaDmdjTEC9GgoNuF5gvis9HPdgZxiREazqhcxjKtc36qJq63NxpJasBB1DSPhb1mB2SM",
  "key17": "34X69ea5wGbEAUh4zkBJndcW4LqaBSyMeX5g3d6EKajRSSFNxh52mXbf6Nmm3waHnxLASTTWdcBnM4dtSQwJhica",
  "key18": "4aJCRbSUD65VCSwCfcsjtbL6LQwsBucGmupMUatD5FQ3csuacuEqX4QarucSR62iCWUK9eac7tMo6cPJxSLpRQBX",
  "key19": "3KqsZJunBufJrYaFBHKFNe1umzyaNmvKpe6hei6CoS42XLKP1DB77XeFqXD9vLg1o9BygfsZiYMaUkKJjdF9B8R2",
  "key20": "3cnBBZCvF7KrbU4gVKELtHe5UNGPs7BxnpbfQp77fszuN4LGQ2v14rYgrQ8pWDSCEeHAHAagor7ioHgiGY9rUPzD",
  "key21": "4dY9eBfkWGhd6xSrVEu1D2GzLgd7Bym1iX49ySpx2tpJxKcQE1oUag2wfXqWJKLWXt54KMthcPTyhiYhGPDRdWtQ",
  "key22": "2xJVkcS2SQV5QJ9PcB3kfuLGuWQSTo5HdcHAEo61WXSC4TLYFzfXTPgPwuBBchbvMmW7Y3AzuKHUxzCcsUDJg2Lp",
  "key23": "zx7JkBjLYGARci1o1joNdAJE4msqcDaX35wKz6tgdCUF4GSt4btVRoNBkhSqp6y2bYyuZJPpFtPZy9NjtuBrQFg",
  "key24": "5Rt2kVNvCWFoPpMx4BciJ3ooTTSvD29K5YSAcfqboye1VqGyfFXQY7pRFst2ghYZuBcynDMazs1mP16yd5xjsoH9",
  "key25": "2fH3t6ucCMhKE6MZsH4DRvuNkoF5YJnroF3VoR893X8829EgukmCuXXREgjDxjmVdAfmDxomnCPUP6zBKarwb8gm",
  "key26": "3rjDpJoViio3Xfh6j1HXuHLVvsVxpZUxDFFbPDCL6LUxjgGGmNqQd9S9SmkVtCerH5ZnPdmBA3MimosmPzKCff6k",
  "key27": "2mTcRZ4LBZHtbHRr7aDX77bGoB5zMPPWFgyiSnmC6pgU14XyoMjL2eD1HiqTrfkavFZXhtNht4DtmFXEyQqZE9ta",
  "key28": "2XE119qtVstFoJVhshAYT38TWeA7a42Q1GMbpZquCKyrrLzhMvqt8eBg4LCXFpGWzNT9CsKEe4WaDMU5Qje3PAy4",
  "key29": "3qipGwaUcDv5Tp5RECVgyrDQwkXaikZB3nGjXjq8rdtQgzDzdc6bBC4R17BGXH95daLga6uHqqztCTScsD8SvPBM",
  "key30": "3Xcha6MGAcusctJAGEAfKPXMrgdqUU5U8YuckV9tKRhQJ3bJNykaocZx7758DhVTZCYU3rZNVep56rPWBdyK6fNd",
  "key31": "2dGV5EvsNW4HxHdN4fhd9TH31bBt9FvSyLuWuLVuAwi4nqczPihDTYQTkT8fkP1Z6A3EV67XApKcZiiQ9oqQ3PYs",
  "key32": "35w7g2faXKtyreMXxAigskX6Hfx8nar6rpWsCDdTR3BpyJ8aB8FA84t9EU7mU6viDZ7sfAmRSDercC8FeWEE1DQ8",
  "key33": "3md4fXAopEtHFvZwHQxc298wiwPjqTXT7r29hWk9SaDKvGWMo4E7FNry8N8LMfqrHhWW4h65diF7r5vPBsUniUHA",
  "key34": "5QvPqdKCLi6sC4NFPk86hvtnCC36TXTyQMKr1SCwDQNnGhK1EXww3yHehM6eGZpHHXAmmGAmkCzquq1xsQ9YYQNL",
  "key35": "63rPvBgXcvUeD8F5Z9jzxraZL8btMX56RiHwrWYNDsRhQ6me5NeukBc94jhdHcfqKfsYZD185mLRHqT6AFy83zgd",
  "key36": "bpn6pEgRYRhF5dP6rWYJrA7YuWEmvWSmedEcHdCVcgdbgdzRWWkGqDQxx8XCgZkrWR2h9oSh1wqhn1ddVw72YJJ",
  "key37": "2SR91NDKo9EEPvf9y269zwzg2QnUM8n7mDHEkg5kfBNZTuxpu15NWeyj48BdkAA7gpDZM48FZTi4HBKGZRXbaJSH",
  "key38": "2tHT7wfHoz1KcPgNEVyX8qVfR9ajyGLYNEv4KSWH1AS4xMNDKhJZ25hrJhtSpTRYHgJdWPnawWmbWgfij8i7yTNi",
  "key39": "3PyRbVXTGxgdz2pyYY2Y7tAV8WewhTTUAgDUDAC6TwS1Dap2ij6RdHpN1o5CFMTUCVH5dwtiWqZPGFfhUzpzdzzg",
  "key40": "6vqXUr2bEBR7obLan9wgDhm6buxFuzd8iiN4Gxt49XxeEZtLXT2dHX1N1jqMLiv5wRK9YJ1AZnGP9CLrdRpJSdK",
  "key41": "5ZaEjHWkxB9ywrybbkmTcburuSyZhtLceXLmzoEjSrnAXFtpbvkCiqBWcJPzBFXFogedaozZhw5wLfcutBV2ZnvU",
  "key42": "38BMtAsbq7GrJEHuP4Ho6MqwqQtcHPdbn9mAE1mixZF4KBLyVDb5qmcSPnYJVoJ2cfW8MVsDabkfFKuqmh2JwE8b",
  "key43": "3P86eb747nXiuvHdztkWV6oa6Rq3im6z5GF35DceeCQMF6Tb1AfzhAfzVk5PH39LzDhAbLxSaS6epPvbLszAtsNN",
  "key44": "438TvWziooUbrBKrkDawzUzkSJ2rxtjmeXxeMVn3QC8PLvNdwivxB2fKksqiTX9wt8s2hbzRZVpxdV7vNjzDqNZP",
  "key45": "2ceFjFwLsdRhYDks9VdM2L14g3PigF3ze3JsQyW17GoPmvNJNmk2bEqFo236gGbqY6XjKLAhvui9nKYFV4sZ46mu"
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
