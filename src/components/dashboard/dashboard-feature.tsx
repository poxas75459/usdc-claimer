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
    "5ipQ7gUzjb1hSMQRvU7v86NDPkagjiZu8Qp2ybptRgp4MRKpc4hHNG4webUfDMpffgwcnsMhChpdDMgw2bakobQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RUq4XiekMXXfuxXwpcYmjRksJAxN7RHfCWmCv3gsJT4SctaaKA2eD2m2qkrwCwDuxp1m619wAsfysyrr13dLM4V",
  "key1": "27air1uSCmQb1t7WebCh5AwsRFm3GTtAJhzWuXjrztDiCkeGL1AKiVKgyArSrk5NwBSV4zHXyjA355HdwgsJqN6s",
  "key2": "2GuimULsXHEBHDYfefZxs4GKnZG3whCYBd9GAxLkenLBEp4am1FtCoyiXEMaLenruj8ua1MKGVghK69YQBzYZBNB",
  "key3": "2f9PLwvZ3fhUazbpjbSRwPKjB54grFD4LGWg7P68QedpM1Rnjjx297C1Ltn8wwwx7HtNErAFpEqS8W65toHqcgij",
  "key4": "4mk9vPvFZW5dLcrj4mYC45wFppq6s7PsBLPT84WGG9Sbq5dQT3aLdzUksLDo5BJBd3WHjuegwWUTXaWrttBXb3QG",
  "key5": "5H8BmXj4c9mcKtvx8YqF7N4vun2CSSRAXiu7PjeoPMh7bPxWbhbckkPhQ4UAhvydz5AiKdrk6R9ayDMmcsgDZZ5Y",
  "key6": "3joKSGhL4cYiAKrquHgHKb3cb1CC5drkfB6ZfRgiQuAyB5wVHP4rWt49RBmBNC5jgVnzbaBRauzAKBzqPzUWGArB",
  "key7": "4XWwHcbC2EqyXgdU3UCAMu8ktMqJLEtRynHyvZFy6d2ySFzjCDt2LSSCoTe2dgv7KPwVyERCEk198VdCjLFPi8WD",
  "key8": "3VNmA35oDF81zS9j8iYskJrH1a4Ra9czbCqaDGoVpu9z436Z3zdC4jNE71pqkFBBsd5pUPT4EPLf4zaHLquQeCfg",
  "key9": "25UfNG8TcZpfwm5dhY7j178uEnXJx3KUYRhUZjSnQ2QqKix4gjnmNc4iv6LojXHVgdkAP9YN1hrGmNjaBjJowdj8",
  "key10": "4bgPpqZmhZYtUYFSagWR24MUY86dZbPXwjZH4kd3DRcRWEpb8taVUJ7LStMNVpvNFktM2BeS2Gh8fcXapJFiHFDE",
  "key11": "5EqL8zRQ7VAApjybn2Yoy7EH5hrijF8JYseTrw1ypQWZDUmxiuDRoLJNZLxcSKHRRnHnfDBYZYX5kSL7sPdiax73",
  "key12": "3uoJ8mVHscC5S93UfdVNtLBqgk66RSuhpLjBwAc38VgfCFYZmsBiU575FFmaCN49Kaz935BEKCwouuPVcPxo8x4X",
  "key13": "Z99XAHS6jZCvuNyejtk2ucn8376VnuttKP3LnPeheKEc8QCKAzd8oEjwSuF9BVb76Xy3fHundLUy9ZCWCK3i4tW",
  "key14": "5rnpy9EBNDTPKHz7Dvc9W2bsoKWvY5chSLthApozC73rB6FP5mRQuvLUr4FR1YuwbDkvHrQAtWtMpfJ9T7JJNiFH",
  "key15": "5tRTjyBHjddbcVhk646NqtGQYysw9xWB9oVADtUzwD9EKsV3HhNdpC77ni6CwVBPEYnimy4jKj8fGaPdfAch28GC",
  "key16": "yB6D8eSmDR5cDu83rThPMwN8gcH5nFi7Z5Zc17XaiZm3w2H9H4S3RMR5g6nFGuBTqpcitYcmyqaV83XBiLGXqgA",
  "key17": "2i9Ni3Bsg4BdaRSYD4yWrRhEQjPYvndeRCHx8XRRDVLzSZzM63izWctVx9rRhobaFdq2V3iThEK71rtwL5u8fTrG",
  "key18": "4srkFPMb7StW4RPfH9i443WkFctNcZAUfgxPJarthtNPVCGfWpNPqpFKJxEQXWsQ3spzpcZbJ1SyNTuuxvCoSinS",
  "key19": "3dfhnUsKHNMpFYuzUAMNE6f9VRcAaNSVkSRMWG1Vz2RuyznocpzpUquYUsTEijRXAFj9Z65R9YZHZXMmfS9nFH89",
  "key20": "3jYofF5ZQNLuZrSnfafXrLEqxbe41ktNhn39yjDuwyLC83BRDivBdKNW2GtMnTbW12FquFCDxPh7soby6dQM4UHc",
  "key21": "4qHBxb9nez7Hj5MWcJiKBgrPhPtvLxSXhH7E9VUk1fbRKArp7c94GFeL3te7rK7vdrK2NMyNN6mj7MAMFzQdegN4",
  "key22": "3bCUqZPacB6SuPFspdJzy7hcRL9538iZDNC4GxphK7oypRAYY3dcoBxuxDPvSbtFMwHRWxMAUtLGok6W3hWrR5g3",
  "key23": "4GahC95nJZcvgGtSSagafEsTcj15Gfb2f86zuy9qXueLjh8wfTomh4st29K9op8n5FjnVB54kExhTaR87mTZVbuV",
  "key24": "5acAWgyYpZw83Zat9pjobnjCjwhruyqreBKHnDkmct1SSdDyJHtVHMmnetHdcthysuHvyoorna7cmZK55iRHwotX",
  "key25": "26YAgCYv3TgPnxVfqBjHtuhgGwVE3bPUvdpcHnmhxH1CGUtJfA1CH8wfEnX7YdydhAB7soNX5vpcVnEMcikJau2f",
  "key26": "38Fg4WivLAw65iA3iiibjmVBCNbj4CAmTxS236amJswTzQuWEZJs2XhTomQni71VgpF3iA4B7ABzyKCZhiBRHowQ",
  "key27": "64xqk1ErFTzBb7h8ynMTceD2MPtioYngoqxPRWPX3acr8xQ2QmMhD5KxJvwDZsbdGA7RWPzp9eCqmyWqXSyxQHr7",
  "key28": "RVLzrsDQFt9LhHjP5J1BwNxb3iHqxVXUpEbXQ4Ue9brcRfQ9PMxD6BYD9ooSLSLoc6dq7XQbXjAt2p2BTERF5qs",
  "key29": "TMqRgpPU5jXuPYXvUV9b2Bi4YK5k7QAnT5pRu5H3U2asUBFsZYE2JxrwBxBkfEbgVjyyiYjjWJGX2yhBpgbYj5V",
  "key30": "4arB7D7GqSm4NqgF54yHg9pMkxjeK8MLe4siVmHWJELWVrvDxuXFwALxZyFfjpdB84Ag212UCPHtxnp4hyQPrpuS",
  "key31": "upmvzXn8rQPvhLqPKu3LUijUcNUBW9AQpBhDYrfWzJxvn65fwn42mvr3V7VunquvdDjBwCk7d2NF5SxyrKBVdVv",
  "key32": "41uvNqHn4igAvZgvicjhw7VUbWRXEZR8YpUa3qbMrN3LAQdB2m794QtX1vqUHp1gtgeETPnUo6zkP5T9wZFhALof",
  "key33": "2eFxpYJrG2zDM8KaRodcXDYHj6YdHyNk1HVqAcUngbKPVQe2ZnrWeP5hqBxY2NySfVN12dPCGZPXZcuhckkSgxm9",
  "key34": "Ftsjvv6KJDcEFcWRf6AtTNBKYMuDmegVKjVbior5CEU7Uyj7AoJCNzxSa9VbAXY5pkDyUzP511vWVPKje1GnHCN",
  "key35": "5PbaRw6w7VqXUUxNBCkkPqJYrAF1sqfLMpunjQNwytCxsvnbMKf2ZV4S2DLtvaFbd6TN3CRPJcHDa6nG3JWswAfp",
  "key36": "MThxjUhcyTLrp8PtdUoM4mbnNMNrcbyhejZ7Ht9eJkFS5i1zueigR8YYNfpn9KruoDHNXxubPnRRZAvvkwzbGap",
  "key37": "xnFa8hHXJK2USbtPcStv8yLUM9bi4wrX2q3wEXNxXGxn7J1rxx4ZTE61BrG3cn4k8eXu1c25DAYZjMXMCQ2RP53",
  "key38": "2E7f5ZDb6R584tJ98w96wUtPi6aXscGWgEYRh1CoStpcM1WkDwaeTzowU8Um1zQPuzcwP2ahobsBFtbTm9MXb5nb",
  "key39": "2a5qNfwnePsurSfn42e9rXjF8vwJmtoKHMtCjbjBxM1dxv7RiZm3jRScSVyaA3ktGRHQoc58QwjTRQq2WyjBgG8C",
  "key40": "4CVG1H2jBMK9zBH14jBtPtUq47u8uXFhbT8n7Zph1FP5g2C4KzfJLXGzvXhKg9nEpEpPpdtevWA2cFMo5PvLXaqP",
  "key41": "67VMTMGD8rY3z5XRfnxxCj4GkP4NrTrZqwTjStkZPBrA837eQtCwvULexavpjsCKcJ4kmTKKsP77cBHm4SsjmM9p",
  "key42": "4h4AzLoshj8jWg4FkKcvDWTDVpLk4rsnauquHSCtVQJvCgpRARogNaGnpohQyuW8yR7D9C6w3JcSn2dD579xaV9h",
  "key43": "4FNJcmUig5NcYJFX7RnrEHg6DEe39PS1pXVCr4cvrBVkQfpjxum7kjMeuBkFBCPFfBPVSV5ZsuogwqgXUSFpFcDq",
  "key44": "V8P6tCFzyHEiNFJh1ruqHwR4SDuZoJLhJJd63s1B3HzHqLbsT3UZgHb36erN6dFz8TGKvz8P1gQ9pQZShXbAyio",
  "key45": "47mFcWCgtaFLosq8QuCwUZ3XSbnBxcwbb8HMJWta3atB1VX7ZcUVZssKAHL7KGHH5T9KwhPZc4v2dVzRdcFEUMWj",
  "key46": "4TAtg63tkeE7iJED6CQYKCqpD8aKbC2cvQ3N9aEH7WSvWcf56CbgU7HpD42j6qNW5NgTmiJ8HEtYQhrvMh8UzcSZ"
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
