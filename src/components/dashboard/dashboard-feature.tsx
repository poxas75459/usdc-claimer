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
    "59sx4xsMBYSN8B1crTYh2XEMU19Lw1NhDNjsCnSXVmqPLohQ1QNfHS4Njxq6LvodQAfR58nqozxpodJZZuDBa9X6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37sp69boAD3rg456K21nsSqKbdtVnkiHj5Jff24cQ2HCCfJ2rrTCC68Fv8teYCuTT7owZ6DnT2muThfcibr8U8fP",
  "key1": "swH5CER8zSNaFSV2akTHF7ZyGS8A7WhissoRn6VWNhsNMWcgnBu3TdJbprTgxCzi6NDu8JKYXmLeGBDXE2puzrz",
  "key2": "db8vxUpqCoNNnzMFEU1wurx8YKGg7aDxNGGF7QdQbs4Jh9yGgk1aGk1eDpcBx9hpRotghGLovGfSgVoFoMMDsMX",
  "key3": "4Rke9HwzJEQaYnFfx8TMgmFvAsCKQNaQg7yS9Bn7tK47oQwVGvmZLrA4nu4DQzHejd3w8JJrYAnufgWBRTB2ZwCJ",
  "key4": "53CuuURheJuSvR3Ty62zj6RVfdzwDvgkudxGbyVQS4eeWhoo3j2UNrMJMF673916u6LcoixFhyTg3mfm5g9VdYux",
  "key5": "44i2z2dbdfDmP5baoT6i24jDH7LC3hfwXhovLPCXp4cfh5Tm3iESfbE48h1R6UBfKshCfQp7QeuNPxjoCBGqVUsY",
  "key6": "58aYduJxz9f3wQfsJJ1g81E6sCHqy7aEyGAADhkraYZM5dVPgkEs4mvBtEpe9VRYqoVUt4ujFHgLNo1naJhZn8Y7",
  "key7": "4Ax5eVd4NVSFwk6LRYTB6CoP5sjb2iuiUT1yYJhsHb6yiAgskyvS4BCJ2W2Wuh8hYxHK9By59LZcKLc7AXocYTJB",
  "key8": "3bqmRR8whoy3D3aJZR9h8s79gUqRf6ooQonsHXKY56kfrfhfGFtC4jQsuEGAHLK41wEQpw9mR5c9YGVreGB6bkdh",
  "key9": "2fy57w18vEZ7rEzEconXRw3AcCrHi63oL7h9G7pBw6qH98uFMpkSPTuKhJfHSRDvLPWoVBh59nHRUu7Z3qZ76pLi",
  "key10": "3FnaHff1d1So2zC1E8kzwQNDE4nBigVvMWZkJNcnriTT54CQzWmDQpzbD48Zwye74yfpEeBvSG2yyBd3PCss3t5Y",
  "key11": "2vamW3Pm5zggYm6HpFSGjQsh9VgLoj8kz7R5ixfFP7fuB4pqcVy58447K8zYikxvMwD1TxidzDQw3uEhDYPw72di",
  "key12": "MNCBhUsnfGaNt5VwK81GUrk2UfBzUch5EzGUwBsVKjYd8nHJYZAbWGUAKSrYPvRs8efS4VXHjzYB8Qci3MH5v84",
  "key13": "5zRsCpaRKzY9goH4x4pk3jRATHFM2PJh9V2j7ngf8MsxrQWJXWzK91TTYtsxpL3nC7EH84yK65EFR856JsagQej6",
  "key14": "3oQHnPqq9r3fXRNj54JVTAj4aygCevvy5XoyK4uveGA12yvD6pPekLAUEQpPJ2MQzcNKoLHS4fpEpynsX98Yb6CL",
  "key15": "52ZRkLrWfzzxMiVpVckVzuJBe79ajRycJ6YnsJYMCbzYWRMcT4Mt8Z5g1VvC9P7FiJrsphe9uFaYKetrZqKv3tZR",
  "key16": "4euMQdRQKDPrcdfhtCWcpdSBWhasGyocT5jTPPgsAQhfnvdZaUTghH7wDUAKqmwxCuGErHtsdPqU832HTTsKJ3GN",
  "key17": "3QnHxm1JumozmdHwv4T9ifvZLeoaaeRZPd3uaNhwKnqxduG2zDkLNmaTMpeNgeTnzrs7inULvqr88cXkJvThh1gM",
  "key18": "2sNbcMt4kLzxfbJ3qXxe3e3AWEnntokCY7vexzz2hM9qMaJ8vMY38ihDv4vhguiWEnMFm5jUGwp2QACBqb9nSgtT",
  "key19": "4zkVgzHekGA3Ce4k6BGjPMc3ncbRpjmwd2GZPzGkACZDffWNwDRrkK6jXJRsHqAfcwwN5cFb4epteuYaBDvZ2icz",
  "key20": "rQXw21nMvTtH1PLV5k8Z5tTfNgxCQy9ihakKRHdUD2o2euPFCwTrwBdg5xLv36D4t3s9rv6qsCVqTEZjyBJB3Zs",
  "key21": "5bg8oZbEDHUyF26GLRrTZ8jWnwQzhAkRHGiJ3D8DBaGLykSyuKxXQZHR4QfS33erqXvibYEwHVQYF8J6EgiirKkk",
  "key22": "2EQfjFUL7A7y1niunwuavPLg3HLx4SHoNEMabnsBfk45gJCYC8pGUnPM6GjkLPqoJ8xq26gPY7hzyLqeCtjjF34T",
  "key23": "pk6tTtQzEjckz5cHUNt4bDkX8BiiFmsmDETTGF9YFw9LSgR55SJKMCtYCt3DMdGodegRy4BXFqraJ6HFBeZz2jR",
  "key24": "JKPD6sg4omtX6zvaUakvEWAcRxSQ9dTF5HZirhgUXWXb8QP7BPar4B72guLDyi4bhugWo1cHLMrad7S4b3ZXGp5"
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
