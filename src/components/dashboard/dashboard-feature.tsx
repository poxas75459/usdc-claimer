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
    "actnL5b3tLXYQZfVN3DsLKFogtnrj7WRGYf2TqdzXGvtAv94uVWb3LvTu5bFSRkQvo5r7gTJCuC2iatUvn7CeWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U1FoFBeG8juMtHfdge9o4PtHByCz1bBgVXSSYqSoJxen7sb6LGqyRN7jnqRNzisQCz4SFxB6oYBns2qcDzCrXeM",
  "key1": "3xnPmkwfBDHfPAjUoeU3S1FbPNo82ZihgQoMxBR5sqJHvSXysv9WQd2cFtTcrCybPADxwc9LRZ5etnfYtDNE8esv",
  "key2": "29gUZcSdyVrew2o7c8qqTz8qu6F6Mkwn7QS4WEMi3uferhm318PFz9Hs3VihS5YnyZJdpAByhKvf5S5ozFD3t7ML",
  "key3": "2ndsawD26NHpZfsU597YR6F1Sqwz6mabMsmtSn1N1fiy3n9RjHuRA7msqir7HgL362Jz344ZgVk1y5ynegf4bEPD",
  "key4": "aWsgxTC9tdpmUe9fxzXRThuD9vb4QSwVgxKjbmBxKuSXagnDysaChNaYghD9UTTrYagZHV72XwPX7mebKpdqa46",
  "key5": "4AnJYzB7bmdnHEdwnKnuowVSPgakqhMdpmHmNWVapnFS6261S6DRpRbjcpm4EqV68WW2LdthJif3RG5SJ8xgrrRV",
  "key6": "4oLz8uj6t6ZkzpCjwU3bdMruHfU5Poix56i7MvkH6LHv6yP7Th2JmGhDKXPFhMeMkcHqf4667pCG82jsJY8j19mh",
  "key7": "5kysntv2oPGqiiFsa3NDCgR5D4UuwYqumfUPUoHRTJv5QPfyokkB5HkMjWYHPMHB6J4jcB5wszBxtroRWo3ThySs",
  "key8": "2uCFzBPEvxH4HaYUAfQTWKTuWZ4nYFwERzvJBBNBTXPpC3zEGQ7u4PJLF5bB6X3JBuhuhjJBnF1YtzJfo4owzbKM",
  "key9": "4FLeoRbHu8Pow4UpNiPkpfXnnWDvcM3NoHJDsGXkE72cF6hpVfpS6GqWdGAawfaLuKruBBAz1tLV6LuW3bsiFTCJ",
  "key10": "34oYXj5D9t1tecDa1JFNhWURCrKHheaJtFCHWLRf8vx3pSxhs7bPUBoXPfcphjkE2fgoPGnCZouDvGY4Uotf3A2c",
  "key11": "4iPLfDnhpXv2CvMNu5D76ipsxgqB5k7mK1v8hMRz9FBbXqRWQUeZLnkedD49afo1affmja15KpHyDyQs5XNkNrvu",
  "key12": "3Mn1Tuy6aJYA8RCky5vZQK25q6PasUv9w2Gjw9QniExdM5Fn9qjD3Sjfvet9LoFYb2dKfoHXA5bbFFZxgq52vrTv",
  "key13": "643RqkgUqYbe7FEkMZxPJvu85RRnyecodsUYJgtrzxGwjYu1cPxyRaPR7NgNLkJv2honv46ZQBZKjicAfvdvPgWc",
  "key14": "5dhnspP7aJhe8jypuJjiAoyD38e4kTw7mBS3gbAwns8NCbWSMsQN85qZLTF7AHdGXiB6rEj9E3N93QABfZE63sij",
  "key15": "49tuVLdoEWg8AC3pnSvHUKTERT3j2hTMUvDnKnG7w1BURmyiNuzbBHe8UdrUp15HwytwBv2HzZ8j2r7mkCBysjwz",
  "key16": "4UBtes3WZ8KkZxEoydgacX7rUtFWz5PK875wcguLVKX1SedaGtCd465mxbAm6rWk2KCqb2YeCLWjgBSDqohncF2B",
  "key17": "VqTwzpP15EXkqup5qm6AMGcaohZPd8G2UazzRzuTU11YwGU2vDAEHzw9NkUz1hqyM2u7aUuP3hyQixah6u1nY59",
  "key18": "2duUX1StHQdLMScKBm8DaJzDTVLNzY6AgrL1LHkCPqCBxD7DLLQboJaf15hf7oskkWP8TSM1KxhKP5bWBkrn5Fba",
  "key19": "4cWDwEpAHdjf2VEQLSRDs9vFvHg956qjhcWEczNs4tksCx76i8uqYTEAj34aY6ob9m5L9c68mbA6ZJVxtfF9y1ZJ",
  "key20": "3ezt7umQ8jyPw1ifAgteeRpZvdBryYParFZQ7evJSM4bzpjbqBqSNFeQuqj5qTHsDWwwdxwsLQAYtZ5xCw38SEXu",
  "key21": "5AhtPji7vHcVe6onv65NAQP5ZnrpuJKpgmEzXmqNrCEaT9LBpRYwaw9obfwwME7XuWASHLq4bFv97aFYRV3sqXV2",
  "key22": "4uUuTA8i63NZGvs2b8vHk4Js2hxvT1QVJaR14c58RoEaj9MZqKbRkTjJt1N76cEut4YvgxMk4SMBhXH7WDvKXbYP",
  "key23": "S2yTr43d7ipjx5AKtwpimVE6peJSmZ79scsttSjGKqfmHfCsqV2YDg1PZq9McsWDhay4rZ1MRLNmpyspFipFYCa",
  "key24": "42wcPcvTJZXGe6xy2UrNepXbr6fzcPaqotmuGU3b2Xwb6QE66RAypyEJnnDNYByChcuzXaUYppBjPGRPWbnLWLGC",
  "key25": "bP89ZBkCVEsWmN9Z4Ln1Z4aj5gKHKrJV6DkHM45zdb96jqnGeuxSFa3woqwhobQkJ6KK5ALTU9nt6UiF24rwrJ5",
  "key26": "65kAr4KGgWeieAZKksqYbwmbiwwfZBuapWGm7BQvjWKgi4kjEbpVkX7hbRFpZRn7mZCTDriaUr3u7PbR6oSRt5xE",
  "key27": "BaWMoq42D7n5matKSv48fc38EMosqWWcTCCN1No5DUDJSJmcNVQq9xb6PNjibbT7FRPgG767AfCcSFL7SWb4NTx",
  "key28": "C1B6hFmBKsFJWnNpCREkENnbs4nfxM82FJxerw9aWe8UMdTFJgqR41Tv2zv34Vx78yMzC1WiGRcsrgeRRW1jFjH",
  "key29": "578TUC2mBqmRsfZuYnsm4FvqZwawgzDhZV2q1ruBeo3k6NfFEtGzkXxbgjoWUtZ3RhQZix4tskRTcSSQ1ZdntnU",
  "key30": "2v3vCzRY2E6W1EHZfud8RCNuTK7CwE66FnBfKcVVpi3BNWJfaq5xHkJc6A9UKJr62KNjicrjBhNydo9pkPtBEjdW",
  "key31": "51qQqarJ8vyqJccaZaxuu6TSNKuDNpecXa5PufyMYEtmAzc37rcgW29zrH8iL9a1Yzacoppz38N4fuoi7Q7XPdtP"
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
