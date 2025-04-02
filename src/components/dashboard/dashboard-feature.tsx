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
    "1Yofx5aPj1yyukZQZ8MikNsfZS82jQqVPcjngL8JCwjUb79GjcnJ6YJS1bFxcrWEvUGYxkSkAsST6GfJumAn844"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dLiYrASMVmA2sXqqBBfF29CUdQMRMyR9PfdsqtCYir2z7jV3oocspse9NhvaJCAQXFH6R2mEzrmvTQKWvCb7bZG",
  "key1": "Q6hVvcL6Zv4Nb3g84YYdhBG8DkNwQLFsDceTzovadMFwpoTXGg31zbkCeATfnJH9ifpdRZm188FGYAw7t9fcL1J",
  "key2": "zoing23iMfs9StPysL5NkBXB5nMdGnRB8SRf3jYGKbrSGFBJti9YFkaWLmHG6qkDV3hTXLmz3A5Udu7tdk8tAkj",
  "key3": "4ufEpWLUzZ1p16zpc23gy8VSfXKjukzyrp8MamasG7UF6Zv2AYQ5wKTRyN9DpbW3JHjQy6Wd4E2muUjpYS48LRHp",
  "key4": "66n31YiD6A64tY9kA6rKZKoqUCzhnUzvR3N7jtVurCFJjePN3AjhQaXeXoZyR9cRDSUWDYC6fXZ3PqWZMZmEwzYi",
  "key5": "CZVMR1aVAxxbrWM9dAS5pXLzKXy6NQC1vygo48Vu4F7JHRBb4UfbavdUHMto3QdMrvkhDb96Q99v2nKrebTBJeC",
  "key6": "4CceDh3p41hKWH6ztuz1yHC6ReFd923Pmo9oZbvkAuJoP4A3w6AYmSsDZvLksS4owC5kXCXZEgPEnXHjQEnJuBC4",
  "key7": "5F2jCUAQ5ufN51UfVf9pnQiwShBAy6HoFdnSSVoJodEifuqrTuZdhmT4u9ggT18o7My9DgpmjcU3So5sJjkjzvQt",
  "key8": "5scFCWT7Q32VoY63nob9AZV8QZxTM9BFvkUGUhMLhaZHY8NzFA2oLFTTM8ywj1kqWiyNsRA8ka2H8qj31AdEzC6H",
  "key9": "3aRW5FmzQFMKzjzAPh3mh47i44RaQQfQXAymfEZjvocvgMkTJufT1Avb3KkWnWKzwDXQ6iibwkV1dC2iGM2k21LJ",
  "key10": "4UJh2i4B5Uthzg5YjBe87R72Ko3gAw7EHdNAd2gYC7SAxv3S4i7HQFcs8T9Damr69DN6hbwMMcpzmpCkD3vnHoZ1",
  "key11": "3GVhyiEgw9X2hLgKi7CmhgPNpMvGSnHgkcNGz3dfrTFyFkSD4zcPi2Uz3yzPEFhGoTfGKXnBTyz9o5Udqy7Mzg8Q",
  "key12": "EZqukq6dnt76sieLgGxpSn4b96gbx72bGnippNFy1cqt4P3ZR3URT1SVDw4dDVSBNQVd7TvDXfLsezFxqrjoJmv",
  "key13": "5U7oRdetWU6mY6Bwqj5PjudNDQ67YuRcV4xiSpGSbseS8TXPAsZtDu3AGtnEEfGRhmUByH2pf6F3B6edR4JUJUrp",
  "key14": "4Ytr4BDRjKnNT2TyttksMJzqdc4mM22neED3dpVvN78TtSC2nNwcq6TYHicb4DMobhKCEPQdiWjsxHiSSRxHF8fj",
  "key15": "caQvkExCoTa6fXrwB8qkoC5ut5bWYeto2Gv6AtVA8ZhEgWABFohQZUgpC2JpYF6fHMBmCfpwg2UZri2UeCwTMEo",
  "key16": "5xNW8dMhXjwCb11LkJL5GVhf8a8HmkfmSk1F8kiTrctUJdAjhTACLuhYDeKMHobBMT7FceHoMkfKBSWbc1kHh18D",
  "key17": "66PB6Libb2zNPZHdUgXJuMd5UJebY3DFhDfmWLnNCPpKCnKy2geKdw5xBRxE47KE4fbsbpK9BZ8CJs81mKqjiTky",
  "key18": "22dsnUESKXmc9gPBjZPwi3A14PcydkZGXyHgNHaPDSjvWCkLM8meY11McumD7p77gRdC6RMpDzJAm438PTuyHYU3",
  "key19": "3aTKZuTTpybfiKu95sMnU1iuDznEeRqn9ohs7gwKasLy2meDsQ1NdbvKjJeAZGzGCcbpeQMZre5mzM6cvjfBdC1f",
  "key20": "8LcxuSCpwSaEQSzSpfoUHBL4zXMcGBGuvR8NQwnL9kGhFEM1ChPuBzCmBydZnp92HDZKBPLdzLboLrpFMxFLdZZ",
  "key21": "n4abHAeC9NxJuVFGnQ5vje4hFMTV3f8djMdxZDYZavAncv5x5gCPferTZNuFLz4LUpDDbwGDTmuEvXp6ro5tUvR",
  "key22": "4rc7YedecCsTL3VjjmMCTGLL8oVnuT7NcZfQQTxqAPYn3qm55A9knz7wmkNN1jCuxJVQTQgcnWsyuBcK9Gpzvz71",
  "key23": "4kgJLBexDvjQg3mNQ4BQ478GGSEV4CrvToNitiSiytr4YeRLGLMhB2A9T7G7gnS8iFceL7K6P7i5JEMnAueqniVZ",
  "key24": "4JQaqC5ERoASEa7x4tzKPKN7ZHJnLa8ooZbF3oLvANHZosi5bG36UGGCc1AM8VCDxbyBXkyFHYs94MMpiGug8jsw",
  "key25": "54EhTNkXcHm82neDx2bjadR1Aa53EU4SFjBCVr6nk7v37FBR5hFSBSEt19siYEZySkoeTbp6Rcnp6rTLibSmTeoA"
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
