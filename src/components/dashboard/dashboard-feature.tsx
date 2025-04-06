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
    "5RapDtZUFu6MynvDBj2GEzLrVxR2xj5zyCECFiXdA2kWGbWDEjpZZdQop5GLQa35kzc48tiHTwX5DsGsumpG7qD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r1UruUDmQAjLZXpkafrWhTaA1JWqXwQY4C6MJdzwgjHFwxXpnFWSjYmTCyUdAg6KGFRe4zDCk2z4aijvgReoRWq",
  "key1": "2BFkRXz5YecoqTURJxJcsXtZ2iPnVoybntW5zkcCrnbzCNKu2ns5PkYtSYBd3iFd1rthjfpGuSRLz24GQQWJT73q",
  "key2": "44aRXL27P1nESZEXMZxAJYgQc3jeonUj3uopgQPLBn34orJNnxquGgRSsT1wHki81GPPo3ytykLkstdsoyoHHjUQ",
  "key3": "5WP2mncyAU8j3qo1DKzGUdv5YgmrJKTZza2ZGEnqze93LZmNpTbJwSNWA16hwhL1C2Tf8CrVGHanBFvAa7tzb3J1",
  "key4": "nuiQKKmWkX2qRn1aY8U2T9weyCbwTQPkoUavmorDdRBj2zgZyyqUxoNQhMQzfRhigixk4q2rGYtuqczHvGHQCMD",
  "key5": "38EZZYCFJPHwTpjmyc6Fci1gqeMRBPDCyrLoBXz8Qmyfh1E3xrVeTZ1bqFa69jqB5RiTKzvPASX5wT6DrjVCERTx",
  "key6": "3xh3jNNL1BcgvsMr6H65zujK1L23PM9r8zCRh4QaTMkT9xZWzzsaSrZvg9HybF8AXSDrAwphaZM5n4TG13o44edd",
  "key7": "4s5JifUC2LQJrYJoz9QJdu7wA9woXDhdoFajJFZUftyuTbQf84V3ErpmU31Cs6Jn7kmAo2ksMSdP8bC2aWyKjpm5",
  "key8": "5Ww9dtUJQRpAJEtmDofYT9AtjJSE66uEnaC781EC7JAJnsbNSqMjz6YAyCYC9wRr2yNfRGKa6QRD7sa7zGKjQg6P",
  "key9": "5mP2Z2Bt52X8zmYasAfUhhk7Uuvmxtr5KFcirFSzZP34H9FqMWWG92PoVDYkSV7sPSsTZX3ni6G532B5L7nepbr8",
  "key10": "24ag4jNHo2JDdCd2FuA79vDW2eKRBomVBDxtbmhkhdfXfLf4dqsgS34zGUXSbpJSTp2YXB1w5VarmLd76Po41uYj",
  "key11": "NvvYwgMZbHTKKfqRWcCFAzDx3xusKy2e82iqq96SFL3jLYAT8mtfTeZAZpWjtuTxbMAxRXibGHA12CvmNGz1VBx",
  "key12": "iBpLzVXf11xefFYyYCwebrtNEr1h1ZSiRREuBBhpjrb5E7sgtaTJM9u18UKsLmVA6Z2T9n2wZHyMcRr3VCepLRA",
  "key13": "4kUvBDMk1jDAoEK4Bbv3ZZ4GHFNangh2rjBTd4mctm3AMk62GhvwJeyxgy5GCTqFYMpep3wwH2PyCnmMZzD5PLWp",
  "key14": "aJQtJ2kXLqGmT8YFS8egQcuCiEVvwRfXErZ2RBftk2tcBd1QGVTXqK9Ta8wUt7tVJuD99A8ric1KNoj9suNx9zQ",
  "key15": "4CxopYdMgtYXEDpmwjQntFahLRvE64WzWQJBRWTsF8FxBp3Qb3XpM2Yvm9gZx84netbJEkWCPHFmonZ7nACim5av",
  "key16": "2ibNBuP7G1SLXVjvbA6djX3PdefAb4hiUCE7H7MB6CjmyGNCVpQq1V8NN1Yq91qpKetD8SJPmAyCYWapfyFZFPRW",
  "key17": "3k3tGkoSxsZfR5mPrLr5WpPoRdRhMgX2Jdsm5D5e2EmFMnb4jtAEAV1sLNAjkThQE8427bFQ2KCDD5ckPyJ5b2gk",
  "key18": "3agUtTmh4rg13iQASwsF1XoKbwnn71RGuGQ3zLMR9yEiBswBMfsc7HcDXSN5pPaFPdaDjhXfGkW4t5ja5UKVipnZ",
  "key19": "3rTwvedLEBmZbbzgjFmXjHfzoLEEoc4V87J1jRX5kn3VtqTvKRuomuD6CQ1zcXYHGdEcUz2gu5xcUNbaLLowXW3m",
  "key20": "42D98ho5sRdGEM7kY2pQ2EPZbbKXBpc2mWJKZCYd7peEi4FtTTzURktQkVWTnVzkQP9mtuTnp7sy3Xm1yFPj3V86",
  "key21": "5vrM5DWvS1BaiWVL6jLSmWQ6yW2u3uZxQYSNDoaFopzVMaeohNVQ6SCNxPLM5THFz69b6pMpitqXBQ1GwabWCMsw",
  "key22": "3xAh93SEXV5y6ukT3jdBmaKouwP2YwSbVkcPm7FpnxhoWdKaMvRYV8TUqtX1jt3iNPSv7fbTXpyREnVNvHhLMsTk",
  "key23": "44ausTfouYrMHFufr91YYH64pN2N5tGjikxNkqCbbXqEMkNBc6y7QxJYmHauAKiV3xH395bnBpUxeVD21wxPpVET",
  "key24": "46dgANEuuDbBZh1SPGRMUgATxZvxR9EkGFp7o6rYSCYYJ1fWzcASewFbxXbhFpKrqY7ey3mAPRiqvMhdfjGKWtU4",
  "key25": "23iA4reSDAkTjhVB1SoWoXZETkczUksZUZaHPKK9VvNrtCrvUcwKTKSGumPXVqzwdXVehDLgc8brVn2Xnf9Y1zFd",
  "key26": "4kuVLKPA5yR7XToDnRwws4sZHJCtYHU1ehCFCx4scEMZWj9XUWFbrKS5bFDvVK5cCF8DTrn8AjL4KfKteHs76Lje",
  "key27": "2cCsgYVR6xsskSdWw7BtvKWzZxFxxX4ZLHPXsJFvdVERhuMqyGinDLW74SVXB3BzybvirA3YhvKVLRzK3dMRga9A",
  "key28": "2XRZTPqN7vdLU2NefXXhuYznJXx8b7oEySjffFUeunrKHTB4fXeEfGijxt6EL3QtQvaALJQnGuFwbXJcGrStXV8d",
  "key29": "4erwuH3HLYtzARoQ1Q6eSvRuk3wFEJPwAzypFFwQvxPRcNgdsHm63dbNkssLbYNJzQKnp2HRPb5LAaDZmfwCXFrg",
  "key30": "3Lk8ZyaG46MFDk9fPw5MUF8Gci6Nyqu8m1h3pX1v3VQdeTXXDhPwQkc8Uj8dzaLCpvs4ZSirCrCoMas9mFq5JNMB",
  "key31": "26WbgbsXqYCXG2dX1rXsXZtUeQR8rNGhpCd1KjNdbWfmeG9tuT9KB7zErxRbcHu57xfCmUcJzxpQQ59eEMYDubYe",
  "key32": "3ARGc4RFk2usSKAJThYNDsaP8UApBb567T4ysr94iu78K8ew2oBMUNJ9qzS6pAfPnh4vQ7LgsBHKiJGoBSthfRTZ"
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
