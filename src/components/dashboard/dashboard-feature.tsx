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
    "3BcZu6W12WqLYmTcZWQxdhaXkjg7tBidAEfhfJ2a8bkerrFRYChEhAxJSHSzzcGu3syvSMKp7XTDdjM3nT78yRF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mGkfTHiJChR3Cp7WroW1NLcp3y5r8aYCq2Sg67DGV1D5vuDKzsgoNq7VefyM5MYZnqgaa5ACyNReyNHDjzUz7XZ",
  "key1": "3ige1H4u2PhrGUFgWEYkdfgDRcZtdf2MwcqECwRfm9Lort6Mp2XBJQp3YVgNdrvZL52rBscSrsACQUDkcma6rgav",
  "key2": "ENmv4SNMmj1CHp5CwCnu8cajVGEw4wq9GFhwo5RJ1iWC4cocmqfmK9DQZ6g7s1VrNPVvRz3gPQGRvi6hs1PXdgS",
  "key3": "225hg5g8fuV7jELBwA6Y3K3SNCKVJpR3P6mVsW644zsy2BC2Uwh2pW8G68Vrq1e7SB2c3h9SNZFcxKuZxWNEBWTd",
  "key4": "2znWqgRSx3LGfbEHppX8pxRvc7Jm2SZs8iUkhhEEGBByTeLHLk5EHuHnw9MyL7fVK8sDNQaQDcJDxN1XGTSaBZvN",
  "key5": "3w4ZEzxhxbqjXgfW4CQog35cbMXwNcSUS32SLeT48eQPC97QaycWRPfwJ51ggueKAVH9K6eABMQZfzhZBcfG5UzN",
  "key6": "3ugktRHmYChUgHD12KmTJJVKqgENgef1QVeRYqYzx9xXdxtcsr7bMcmc2rLZY7sNwsZ21fSNSAqC9WAiJaYPRUFt",
  "key7": "3Qyo68PDpbSrvNHFuaLmxeoi7UinMi1UkabfwP1Jy6Vq5VXfRuoNJdA66VjN5VTUxm13LAL1r9ovWehkvdPr6AZB",
  "key8": "JZ9GHA1PvrH4UCscReRCrw7HfgPb7CEfFjpGmbouRMuT1K51hs3Fe5W7keQTKSKSTvxD2XpLvqwbDUkb8TjNCgR",
  "key9": "2HKH9DuuiDPMxMAjbPUuWyutCcVqfEGvjU6jf2nBw51BymkhH6kUuZFCkykbuxwfVpwSVpmNZyvswstTp7buiuUQ",
  "key10": "5phizzq6X2bRojMmJdaUqJ3ioPT2YAWGRacHJPXVeAbFgfwyq5cr5yH3yNRedCUL95dRDe2j8DNxmcufmAuYUqCT",
  "key11": "4cgjCQkkK1ivB5QYj1ndHFq9BJudVkabfRuV94tJXkCpaqEdqFhNtnnD668vspeZsoxXnGvT7UWjZSkpHPfbrUoy",
  "key12": "3M4quCaM2R1M4vvxrLwd6Suarbkg4qv45QTmYXDsjwQFLJra4v3FNi8UuV2veYyhUboM42iLnRoJPobUvS6KgUQx",
  "key13": "4GRnWTkpUTYAFDPRCZi2EM8rVA1fKNJt9bGyuHPy7bzxJdj43PKRBBPvXWjqQZWRt4zBGCVf12nthkEzMk7oC6kC",
  "key14": "4SXP4bjkvwfpYB41qgBT6KB41264JgpRyN42v7VeAGWBjRTXqsK9WQw5TTuRrws2JRNEW3BmMQ3uGGfxWbQYJvNU",
  "key15": "5g88PDXwg1Bm5KjtWcMMS7etC3UQfPSs9TeMrdrW8ry4ZcCCQryFyYXy1qvySvjiT2QDJBDkS2Sx2XCAU28wbDUB",
  "key16": "3ejURxTPZown7ix4LrGiPktjpDSz5ttbZYyzpCHDQzRPruXuPdJ11yNNW9SZNgTdu6XUUnAooVKb5XaEr6pDwtUs",
  "key17": "4N2ERtY61aPoRXfnj934nt57qv3iLp3hcPANnzpMZyEsLAnRcJ531gdgFkkR4q22NNWjay5kBmjHk1JzwePYLNUX",
  "key18": "UF6BWtto1GWEmpmBneAQEqFXKHZEHfXLBw3z6kawAHN3VkJr38dCgUGASEMZqVhVmDinbUErdtoBQ1uXNEFCc9s",
  "key19": "22LFamMcfQ4NpXd1EUgst9utz2JjNeaTFGfzXQz9KhZbYWnimENR8iCNxNchEZLBioiGXZN3MWDDiQXEYr2HjCC1",
  "key20": "5zZxiHqcv9iDNFueCxSURWtXPZ9HoxzNUYt2onC2nnUFV9X8U1iuzkegAiADuXD9mZmUAqNK8zTYH17dvh8ngKwf",
  "key21": "5bFyq7q2nt7ktepmPwbWLUFP2eNNpNKqmEHKrmUwqMDuNneZqkpk3LEkogWqTVcD7PUQhBnvCdqgJf6Ret9ikEwW",
  "key22": "2cLtoBZKyvPS8vTkNf2a3LB9pTnMutAVLNkCNyP7aPSzQNmCVwkmB5CoeA6kBVXqwTFnk8Shi7wZkACWhd853mq9",
  "key23": "65wCxgfbVCPADw8XWxQP61jvBizNxQWG5M7REd3bSbsJavws3NBPdV4FppdThDncBGcHr3eScHn8fnuWxr5DQhRB",
  "key24": "xWjtxzv2azSB5nuQ7vG5mPMa6GiX4MipNMjfctrNFLhLjHSbzwJsVAS1pcAjJcDAm3NcpDH2orT2kwGb5TDkDM1",
  "key25": "5fgyXpdDTEKrzJPTDtLpv2mmLbFh7SZTpSs6r7bD6JQjitM2aSGujvJ2LN9GxKtExjXiVSSvTqovM6iKwuC1fRtu",
  "key26": "29mg33rmRpFvQETrX6FnvHcMhJSMk7Ne9xR9219cGeKX6D9XVvbiP3kB7dfdDFtEgWVsVmSyfwPTDDbfzfGPHo7X",
  "key27": "3FhEAdc4aG4wnQxDacu16ASH2HXMsTB3ewnyCwPy29o3efVYMAYXRLf19Gh2fKEmzGeYmSb3CcS9C3hT8b3dr71B"
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
