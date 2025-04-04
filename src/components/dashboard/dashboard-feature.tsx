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
    "4XUFugaDEt2zPL5bKcH3RdmvKFCmQ9KCQv7SvAbJ1knoeN1jsL3U9GzEJszH5vUh9Q8sucTr8ESQs18wmvM98g38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5erzf84Ecq8Utcae6KktJUvD1JsiAM96tKZ2vvztgEt2XiwHmrStjut1VFFHSKZcYtCzurWDCc9fD4YXDFhNgYeg",
  "key1": "4Tb12UwdYvFPc4bPPfyLk7FGYfWuncQq3rqvCvKELk6B5eLKfPzwaVLjuaGd8owJtuUnZ61KkFvVYtV5bCkdfVXh",
  "key2": "3gngmcLCRoNMcQ84uJoackeMax8ic8R7JLkroxAyA8Rdb8D8XN6Z3FPUcA8SBHSmFhQHv8rjSrWTcZi6RVQoyMHp",
  "key3": "2ErVMeZkZjzkfuzERPXScr9euy4qrnhAyhDqA4S3q8Qh2cXdGLCUYfeFLD3mchtzx5R9cYDX2y7KVitnjzBMrG5u",
  "key4": "3UTEJvjqLcHTQnmQ1S3jEirKnZLeiS1TwFjmyUCnN3ZYuee61tJRovTDrorQwfReC2bgAKUY36EQLoamx3Vo2PDq",
  "key5": "31VbtzRieJSzeJRPw1VSktvGVxAqbfZ3jDtJcx6sNkRP3mzoRfDyCvrRpkzMcqHkG3JwRwAaeYRe7cje9CLgSVNF",
  "key6": "5mUtDjcg4pgUkofiYeoyXJiZhJraHcpfnSZP3Z9WuuGSJF9jdNg81h1CdEvRS9Psv5krLcibARz9eXGBCaM6epgu",
  "key7": "5nyZweU9x6WYAxVdMjJw5p2c4KEx4VU4MWK7rXy6oDXotvd9dN3NCh2gk4dVuRyR8UAJLLgTaYjRSTi1eazpZrnK",
  "key8": "3VNptovmoG39ZPHp9sRr5eVzcJNq4a31Nax9cLtei1gE42m8VocS6t5jDKpH9K4ukWmbeqyHWg89FtKgZntKWABH",
  "key9": "5ivhRv8q2pcHWtq5GakcEVfNftU2tPNFpeeCo1DHHGnZ2dPrBiaMNeLky6XKsSb3cAuntsrkQe3cfc57ba4WKDLq",
  "key10": "5fLNT5Ni3HHSox4bjUPQEgua3PPXbPwJZCHDWdPgLKU5AhVxY3XohVME3CgLSYcRAWa3KotbEfwkK4J75Gtjs6G9",
  "key11": "4f2rdjvsEoCDnSDJJgns3QCz8hHXBvJAC6jS19MtpUuGX9U52HZJoStWh5sscRaGRZX4gCFWxsb8MLuHhPGgSwfH",
  "key12": "611cP7ToKiAPwrMRrUMdJqbXJLPdQQAecCTBm4e84ASNmX3GTeHcpPoHeYWxERTFo6ssaiMbTrfoX9V1SDiV8cp8",
  "key13": "2yUvnSzTZSF1wuxEdwsjbnigX9NNsBWqaDXt7jeoSAbJAzP1NDuX9M9N7CLNNAKJk1TqY7WW3ZzEx9tCsXwbJGGC",
  "key14": "im9cz6xbVoqVr68dDXzfVBd2ySnWq2VnAxcZ6mxvjhSwjq7j8Vi2QaJdtH7L2KgSxy6vAvaCTMZ6ThAYQFp1DPN",
  "key15": "CK8vF2ZYrg8aS1hT3wmaUFVb6HxkG25XuBeHNM5kSWBJiaH52QJA9JaZGYaNJPLGhcYM1RW8pEU5mvQo8WLu1rf",
  "key16": "5kRRdeMSrCTpUxiHkBR8KNxVXdjvWPaWqFioz2uThyg6d1reAAPUp9Ct2aTJa7KtteGJjVad4pFLMh11YigNuZhU",
  "key17": "56mhHbsqDXGSKgnCdBsEvCCvpzXy24cCKCNKsBL9fhkkaMcXomffeXSUs8QVrEypuECrJedcX6NTX651n2uvGE3A",
  "key18": "4CuuBjTw9HEQVqsZMrCr675XPvu4XtLTUEvWjoTTSpkzXU617mu2ZrVmxJy4XeZQMWohF5mXzTj7mGbKj8XTSXb1",
  "key19": "4WY21MTnfsi2HxqoSFESss8WsCLUeDqVJXJ7yziYzunJayD7JAKd9zYuZsPX45a8jBBp8dgnYteU1RJWb8vAKZvn",
  "key20": "2A7WE1798j58r1k1LuzUcGFZEpgK9Gps6Tr5zZpaBtvCpGEWzZzks2eibWLo8feYmAm2XBzy4GpPZtb4t19n7R58",
  "key21": "ACdFaF31GkWMwvmkPGYYL4JezerzTX2AHqsqn3aHP8woVGfxPe5cFYzDqMF1giCKEks3gbdJX1eDJnsRvknLZ8R",
  "key22": "2sLfT27zMJwPNpad75hXELVkq1xDmrjTC7nwJ31ErmXSwtmEhobD3y62xwZ7z3PAUmajjHRCn7gF4yqUwx4NYFJK",
  "key23": "5scXnouiCwKhQMoFy4oESwFD1CUHoc7qPaWFscLFBwFf29VmzhZhvmiSj425vPRi3vPkemhuZgcrgLt3WSM8BVqV",
  "key24": "5AMcqPXMoLK5nNGvHG7o5rQSoYSdWxkike6Yy7GjHMHuTmFrfeVK4PTwByr1ayaT2r1WhjDuc2nvZffPW6gMSZke",
  "key25": "5AJKP34kcTHfgwMpo7UquKrV2KU1Y2mUPun1hJzLNSN5qDGoNA4PgfhpCT3xBNxFWpKY52Hc5cSVoX7cajx2fae3",
  "key26": "3dshtfNdiyrPDqePaFruicCN5cz2Pysx7TWzmcTPzb6d6fmYmG6aQ23DSfmKYMiEqdV6cmheponWLAZJS4wLGfak",
  "key27": "5469bAVzPK9YuCvV2WD4XPzKr1N5Uz8rh8mZZo3tUD2QDpCja7GTYN83F4JipR8ufTJpup7J4ozrSaEPPssQPebG",
  "key28": "4zHc55ZmHEyxnHpSzTDBqgFmisLQ9n9opMpF6R3vCn4EVVvzsNSvozZAQs4DjK3knQMrJGwG4KRUdsMX3efKbC7U",
  "key29": "Hd7XgTTAmVCJjoV1KHcLvm3ewJ256toWReqcDGMVS7rkh9sWtLfaaL5tpiPoeLzEcJRE49qzWQYxT3DcCx99EPd",
  "key30": "4wVZJb6ww39N5iUUNhvPgkXpd3Xm5KT2pyDv6hPoL6ATiJzk9G2MmDRnqDw6jrj8A1xRx4MuogvCojrTzeP2JHWe"
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
