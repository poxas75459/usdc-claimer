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
    "5t7tY6VhD3isCfEr1XbgRMb3AJnbbAGg4xNe9q6ciyRyvYbbjVnLCumf1min9oTj9UE5qLHN1XVf6My3i3LuE7DV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C8v8yBGfcEWnfBUentkux6HSesfre2htiTYNSELDtWxRnGSRuZohFsMcGwiHgzQDy17BMv2jbkB5WGADcGCqFfA",
  "key1": "3NixMaL13CNJVoqDFSsK2bJbdAx27bSqgD3an5qzZa5eTyK1TPKfreuYuPXzPQXYmSHgye5ZkPnKLx4dtgrkeZk2",
  "key2": "35PbKuHDfCt9j56dBgomAxS4byF25QHGXzbA3QV2CXT6LdbWqY3vKNcoCZ7aKwAneitUZiVLLVz1F4C2ZvW4Hjz8",
  "key3": "3FRGZEsMDv6SvZBp7mTPRKQ6gmUgu5SRXkqowDsmD5Xo2yK7bfXkB5puRdLWPARMEnP5tkioBXZ5wNcyf9cRjq1a",
  "key4": "2SEyVarBH7iBLzbKmrSv6u5MDdFN9JauDc6JEhkFgzkQN9rkJBR59vxL8bqYeyUAwfXqetLpZSMXDuyJyKerYNVJ",
  "key5": "2NL6r5H3jmLokxgpxSAJqt9vEsRisagEY5AQuAws5SiLYMJYhBWcsKxuSKNs54Gbigv17iuuQK2y1RTQHWsZB5qp",
  "key6": "2RVMZgppRMBwvzHeNtKhDUQs9SU7X4yTXLAweKkxj34RtBcCDHbNDwdTmeUsYw1uWsaaMN8fvcbAjwnVbyTiEvYg",
  "key7": "3fjRDAWKdN1iLsnTsDYHkLoVUKndcfrHLcqrzxfsJ2uZH3awWNqGpZACKGkLgN6TWUzvdCKUPZMEe2XK5s4ggyYB",
  "key8": "5SbqAviiM4evzAozWdGdbQbAgFTVKtwfXGrkeXunH7jo1deSdEVUm7bsPZHCWMnijPUo4DPTCEgr3E8JbSjeTMbj",
  "key9": "3HQ23ZtuqsFDrqfuKBopA1jYwjZorekK5CUYKWiU8GHoKbzWkMjomiJtP1CBAX7akHDN8WT15gBtxW71VHs2WFJQ",
  "key10": "muDHeJ7JRTXvww7VJAt9u35zYFTsQieFeHsumS831smU2o6vE3ZFJhB5oB65dRJx8YNQN2LZHEASD87c4miihfK",
  "key11": "5SqtbpBHyZ8f9MYws8snam6rFBFB7e77nwTdaYGbNz7RFi6Aa3zjBgmue5vAEjrEg83fmZeAseJYUnNc1ZmHejxC",
  "key12": "YkpnfAQdUUhFLefSgdZRK8e2xA5zaR2hsj8CTCWiHrJYK4SDXgcp1uZMmxCLqXpbXkjAAFxG3vi6zTh32T9xQ1Z",
  "key13": "5ctA88EqxXAdxgnAxHxXY5zeHTyTrVFKDTm2Q4Z1soqNjSUnC1aaUqx7SDzXSZxaKKMraC47Gmh49qvHzyo63b4h",
  "key14": "36WGELfCrExLPGPnaAsrNXLvn5HWzu7EbtWkNFAbSMj9pmbnovvMybTo7FV9myPyGqftFxSS6V7Xmab1orZaYLYQ",
  "key15": "5AjaLmgfGHB639qp9tkma2ZAgPMDG7P9dTZm26S6X2vqSNEcEdqTiR3Dh6naK5a2c8ZhiGV3NVHF9APALErKzggN",
  "key16": "3BANbhwANugPoJm98ubMTGGkEzsfyz7qVcaPcj1Ga3mMcKUMqnKReqGi9JdEgqdN3z3UQctBs7BfjVcJQm8BrZuG",
  "key17": "41pn3aNpziQpbfthZZkRycRV1s1KYccv2GLE6hrq1aS7Sc67fo5QCUxTB81BituCVKHgGJqFsg5yumPKFgdY6jrA",
  "key18": "5wVVZfFbegpBzrCj748zX4dXab27vd58w8QNCvpkXHs8pDJ7dqMv7vznvV9kWMaoWXhroWucmnpdKPG45QZq9rpD",
  "key19": "49RppaNhs6qrzK4J58rRCdV9HNe9Zx1JAtofdiqKx6bF5u4yoE4X9DVHQinBKBbSB2czTZf979WVwpBv7NRCtWxb",
  "key20": "RtUnmQf9DWZK2iQAbiMMhYHWMnX4nBMKwrXMcUhkfjAyhBdLoxGDiUpG9GgovBa6YU5kJz64CNSj5U4wF8D7SxZ",
  "key21": "ao2eX7cZViwfoixfy2fe1EoKzYm1Aw65nWjeEZ9ZwRuWvv4REDQq8KcDpYbJQoz5wpZUKPPRPa7CurxE6xg135D",
  "key22": "4e1mpQehZkZTkvg79aDzxpXpWzuE8gQqeAUuUzEj7tFHCgXzp1UBiRhBJq9HkJFiGLUYder8NsFcZwVS1kJPGZJ7",
  "key23": "EMnjQk3LnKf4DX1Cutn45dWWvyHNpYcZwkxUtFz8U6r2RP2WLZ8xHKupUXiruAfXTPhkLnmpuUa4KXxCfRVQ1V9",
  "key24": "4SndWPyDzPiq6iQ27ZLVjj8eBVbM67YYoNLyJvctQduXFkgGsSEmJhVSfqp2P8sjeTSdFggUvnQ6wtWELSqanx12",
  "key25": "2oY9ZLm6bCkqqcMn6xcT9TuqqTAkc3AtvWhd1YP2EcwmYN19kJQUrQ4kAbPP5Y1qibjhijJknyxhKxUqDeaV5reP",
  "key26": "44os66oxVS1rRhXucFEv8z9jzqyKo5dDaSSrBuuqWvoGNbqt8nqaCtdovLtgE4TSTiefoXCDjQQ6G6BK3nWdEZfU",
  "key27": "3Q6nNaR9QJMewthnFV65rmArV4oM83BQSpnZmhpezXY12SVBFQ33XgKMVmAQYZFf9weFybTebY8rThmQfsfx8tXK",
  "key28": "3Lt3DKf8Dpr8oZB2k9SPXpeXEcMdDCjWHCSCei8HqREne4GbXqjr3swMWTPnSTjQf3eAQsqTw3wyaJa7gq6hZN4M",
  "key29": "5AW2ekfe6u8iKExoQiJ7CthtBFX1Peuj5h7MRHoukVhuYcXCarcWQtQxvmE8PDaTqMHNeRBSDujmY8j92QZ1DgK8",
  "key30": "5YTxXQWsLoJgHT8Sk6SkCVxxfB8Tv6ndVBBw3b1g5LHaKG3Lsj72goJvYh8mpXkzwLHMKhjtpyerTKkXjzdkD56r",
  "key31": "3EPWVvFq4ZbH7edhSPwfusouqkfzwVMEePweXNEKwDtMhssFbvhnQbDf6Bd6bg1PAmWXBUbNFvHcipxeCqm2kZ21",
  "key32": "ZN2iYGUAVSbm9PEVA3DtZtVybFM1JyAKaZSbfrq6pjzsSX1KCE5uK2tk8AKL9c7S9xDUF3wZnEeSwDV2LoSBbj2",
  "key33": "5qd6DKNWkwueRMsc4iLRzS6PA7EyPoWwAAS5MabiVCg127cfkhRrAnibKwUd2jGGq98Z8219wgAyxVQHxcEx63Xj",
  "key34": "2KG1Fit2cPnzPjZr5jCsJY5GkYmg52CUGHafRsuCyR4F1dVVmiTxq6s1BdtHxUEtDpzQDMocjHirBw5fCyezuT8W",
  "key35": "3r3dvUDLHKJV58HCRpHbr4SAhVnh4SLn7NGEunybst2o8g4LD5nMbp2b8vLPR1pApGL4TaKnj5qKwXBiEw9DMGBT",
  "key36": "5NqwXDdEdfyWzNEJiXoJ9vnfqf1m6yyCkYQSCFUuouvKWGTcGF9r7GDQDve7TSBFLt5eT3bZfdeBH2X4yPNDSPLo",
  "key37": "35vxJkZQNLLVSXQCkkSQLF7pc1Tfiqv5Lu99Rbdm6gESQiFPgTMD7i3jegx6qQyqR1rne7jAon2kTVLkR43wXK8",
  "key38": "66PNVWw3cmgukmzL4dWcZKNwTUNzUxXuzqoVad2vn4DZJrNUkxXtbpL4WVLSVgMyoEVffp4D4jNFt9Bzp4XxgQ9V",
  "key39": "2Q3jgMc8mhWZmhmojQ4wgCsmntMfchi2VHhkMBRhet6NHaFLPowDgcrShwnJkpZ3B5tKjxZuMPrLD27QwnLuyfUp"
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
