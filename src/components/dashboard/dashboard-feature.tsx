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
    "3jwggYVmXwmuZK9hCnaVfAhsWNei1NkuwLPRYDC8Ne8BtSMEPKzAbCDDu4pFqamaz78acJuzjfJgbQAPgBC3mMkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vTAdzS5uhutwF5CTTBxgjhQaXg3b8RQyD2XosWwjtZvbNYSGxmZoBjANporqxZFCM6PpGCyCbssg7wymTUcebvK",
  "key1": "4PB7aZZTpN4S1Ujjj6Lb4z6syPcDxDcjTiJ93J24vPGCTdCtxQMUyN79Fdn2ouedmRBLpuo5XXworA9vY5mfFw4A",
  "key2": "3QTqFHUbXg6KD4nM1hyWM3pZJuaxoqTmdpeggcHEKegxgjsYs8zjkQd5WVwwoHkk41FLgWkC7x7y5TgyqrHhKgV2",
  "key3": "2cPc7GR1MQh5JzWqFSjVHBk9qvwZSMHZrEvARPJP52FfCoG5Ptc5yNMb5oHi4iL346ebckx88NRwV6zDXXWDd9z",
  "key4": "5x4JA8qKr928MczwGdapaYnVAVjMUu5quWkDggQKEv33Kjgguo6vDLReWn4pu3NJyAfWhLuyytzdYdwHXL2QgT4X",
  "key5": "Ci2XtvQDKv6iyktxKLCrvKcJYE9edHrj1qVZ3Q1cc6vYSqypQFz69PFoSnd9D45cvEVASmFAw4B1BaAWMJ6N5Ag",
  "key6": "2eWzJGKDGWnKorZayNyKWRKgUMmV999wWFUjQkKjzotNLtWEcHohMVMz6REm4tjF5BkRHpPJhLPvxZKCLy15x1AG",
  "key7": "E7EPWBHyVzcPn3ypd1ucphbsaV34B8nmSEPHEDmTt8wnKtprpPbJjrHN98fBxBqjpxxWbAvBE51ce8WcTeQRJZX",
  "key8": "5aiyzcUmNBQbv3YUvqipZZCTZqrHUeiM13H8DnxtLMgsjPvcxkh3ULLuTXT3bukGSJfjLzAxaxt9PYqLE2q7HEyM",
  "key9": "5btFyCLuiajHLEbwRK9yiuWpsHANh2BKvELn3Ud4FMARyaLggaKXAa8EcLjzWZY7rK9bH1n5v854Kt8XQKFenia3",
  "key10": "4LZ85MC4iK9z3L1RQCRtERrPJyKrrhb1dxWRH5aQuLcVF49Prn1qKwrD5X1iFUSUqaxn2QNPaucf9PaxtFdsZsZz",
  "key11": "5pmytZAf2VrhK9CnQ9fe3J1eBbAcbMbrMZfN33BNvt1HQV6pAprvdGY2VfFoQG6PNMzdcVQChcBmKwE49gwcc4q8",
  "key12": "3fLqPG6YETEN8DdLSJe2aKYvDCYGJvN1xQgPGytLt5nvKyG9ZijQKHjiiUnNrdzspA4Av6cTfESeZnyuca2eioQN",
  "key13": "2JqoGeorqHUD388jg87dmjYoACUGkiJC74FuMDUX5kg5JFR18rNStBYtPdkVJXCYk3TWjBbAB7teG2Zc8quEMfgV",
  "key14": "3HjCt3fKrJyKuEVtoavDiEh5j363SDjhg3ZVYKqJH2KatRWWoYfGCK8xST56fe5ufJhD6iWkA4iXJEqdoPRBtgSq",
  "key15": "q5cJRbt7mEX1sNBWcLxVyyKZmL9Ao5V2qvGxsXcrqEAisfQ7YNx225UfJr1DawACvqWSUdMddyRKty25d1t2Wru",
  "key16": "4jj9R5iB5cFWh7kgaeGoYLf1SWg2KHKUCXi3f2p78WPiDWgwbUmWNAfh74WozyLn7R1WS73oAfqHXAeRZG7BXGcn",
  "key17": "5NHDfMBWCJFWfViCnbduBMtUv3bATt3BQ3KFowaQo4yV39xNUHWihCwAKe8rAJcfkn2LzMh4U9aevYh22N9JMiHP",
  "key18": "2hYgwFm371utmxvKxCn4nJivAe2nzA7knnTcRQZ88oQxYkMcpWSkmeZvBEJYWQkThgHjJsgqd7n5Fd9W8sxrC3BM",
  "key19": "4wxb8LAhmEHv1uqpZ5ZqfoKKZEz89jDet3bhAWigqAcaEbUfkbAVS4cuCuRZcE6WXELsL7HrsHHtMZRXPCGLpewu",
  "key20": "rBdyKsER7hMRFB6xNszZSJMCLbSwp5AtPrsVa2ageh9iFT7XEpe2B4v8fQUf1fjdcihm5YaC8yDnyorkez1AV9q",
  "key21": "5LuFJirf7jkE5zCmnyumzYCGHo2nKuzEec3yK6bsSTyE9ggiWHmmpSmxvqDQNSGT54wNsJh6uR1c1RoVPX24ou5U",
  "key22": "dq7tn3NJToj8ZhYbgG7kZVjZXepBCAPZ7WfqCdtqZhVxAk3JCk8tLcAvHB3mgeMpvJ1q4GkcYibFRDUi6h3X9Sy",
  "key23": "59KJEZgdVcmLjFSCwg2ejkjFrWsupv3pGG4dEc5HW729gzNpUzyp6nZPnab54H1tKSuSs9cg6NBZW3bCwWCHFqhA",
  "key24": "3jZnKFSWiTxpsHQFnNHBC2tsiQiZfkgwJn5XuFnfGoBrNac5dZh35EwgYQDDGeQqsyVfGvFxrtRgTorBa57Fg2sx",
  "key25": "27tx5N9jyyykcaL4HctAcJCpkNpVrgPSiDhmebCkaqhfiv11rqYt2b84LFzxS7UK1dY9z21Td1dpWowB8qTzBmEJ",
  "key26": "54zjJdWi2MmMW6sVEtcKrPZ8JaccZ1x9jAnfSEfMZSH6aWLAitBPpx4kDQXmbpRdAYnGqPt95bbFJLp1z2DZHxMN",
  "key27": "mkdZncJFgtw16gHpUsexZDjdaHBJntDJ2tRg7YdUbcfv7sZ8buKEVXGo6jq8kL5uhGvjYWQCSPaeLAPHYNi2CqZ",
  "key28": "3MYwaLeRRqiVpGHpGWGFxBEBSW69Pge6ZGvL4FrUToLe3eaibtzCN28qBsRzySCebukVLjhbiFFqbCMN9NvPXSKs",
  "key29": "29bpqSX4qV6xhXXVACKCtaxU9fpJC8aZFeacSMdfabTN4d793Hu6TGmwsUeoPuJ4WiHq19W6RrC7pd2XQTEmrhv3",
  "key30": "4aXo1FMYpT3B6GgG17ZSjoSfEYYNTidnFc861S7ZfEoC9XY3Mv9oRzXiD2bgnoYipQ6fivHH8q37bQLdS1PGskMX",
  "key31": "65hUvMuYgAmqUbCAoSjKLfWBV2ceMge8Vmbq2cuGXEduGMvYTMUvj7ZwvWXTLzFz1wuWgKQg7qDFFSy48DdJ1iFS",
  "key32": "2JTT5VJGVeysDu8av2nrPapU37kLkecaVZm6ACpsiznhgRyU5n7PAVUeh5ajGQuWQqZntcuSgaoq5R61fqY5MYpS",
  "key33": "4gKrHNXmhMddFpyHo3wcXzzHJQkBoyWJJbaspHRkgXGtb2HCwtugeAKTb8vFzwVcEbvmex1SinnRKKyfBnF59NUg",
  "key34": "2fkJR5f6sHTJEX8XmSiiKAPzm7F8vVxzrDiC3i8sjhVG2XfLpukRGydRp2ZYS9cBqpjwZ5htYDB449FCfAeomKdv",
  "key35": "3aRnBvmabi4yCeAquJfnTuesFtx9TeoXFZKmww3uDWgCnFnNhKcjWoBvuJ6QtqDsTQ9pVjRhNqFHxWMojNMjRSAc",
  "key36": "oxHUFMqsuGUYQ6rmZFANZY2mwaDmST4cPzBmdRhrnnQsDdSfcdbeX7SSP9yFenXeghqMHHnjjUFmrDbT34n7oQj",
  "key37": "3fkZMyzcE9RZfaAy3aauwkqSrjVwjoyUrZzFtXkatSiR17epvca9jXfQTteDY43TVAZ9aDTtUZkzxUReGJu4pbfs",
  "key38": "3waqZcyq8GonjWFAbXA74MHQ7uRu3epgBMCfLFuy6CLjrVm98DiE1Bjx2JhGgbyhMyg9gCxJ6bfw5MqHioUqKqLo",
  "key39": "5MUceqhPZ2iPpRMmx1Nf85jEXB3bFtDS3ZLMb2J1x7qaYfzc7gBYv3KvurzCjfZEyHguVBvsadswPe8EC6J8KDw1",
  "key40": "4CUhzmfnqHrJaRgztHrej1jQWJUJ5ZzQ1GKpQFFgbrd2b4iCvFgdaVjRLxmgMYXkW5e2MRLuTcukvEdCEeQngy4F"
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
