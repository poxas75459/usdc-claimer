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
    "2uhd4MarXnLWfPp7MoeF9oiGyxZsWmNh21zvQDS7DpcPQkjf4fzcZ6YFWgm2R8jw1D573VsJayjKXbcy86eBL3QV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UAs6AMEmr42bjMhivRfJJbqx3KpwyFyuQW3siGdL5N9MU9uoHT5Q3NACEhnk32mgbbYbaWgr3BKPK6zGXrPw8bA",
  "key1": "eXHGAjuYcvvfbqZTmpwLfDeDuQ5zmQBmWBZvxHGzepPFpJex8KZiN2y9TJEQuV4Rudtd69i4oCxnLDFfcvw9jpU",
  "key2": "4GiXaPzVLK2VLznxhpx1zVqdrisPULi7toaHG357wQ1C4bicE8RxWFEqpKvxaRwPZKN8mqyueNma6Z5ZGc9cHPT3",
  "key3": "3eHhicePp51dkxHo6SzLNwju25jqhmP2DHHmpP7FHFkWMs7hfHixWT5LdPtyvPgwC95eY1YUwyEbAhLha6g1b7NU",
  "key4": "3DP7zijSivbGaqxNzVMsVfaw2oGCoE2TXPUnJUD5jfMcgtAdUj3jE4YFazZzJeDMBkb9nXQkr4q2yNPqtwL62ZjW",
  "key5": "2zNbh3Y3TTW6q9G1ExYncjr9BpajoaRN4wTczG5t79pDU7PTtTauZQgkJZbKWFQESBnVthjMqcwLwZh1TPcGjQYo",
  "key6": "383x11vtSEiqr5PnfeD7GWq7zkUUU5iK4zjuPiJNDCY4XoEUGbfp3ZdGJCgUs5sxCXomtWztST3tr7nQxPUmmrKX",
  "key7": "2iM4ahZCk9oq8uei2z5fKnwJgW8xmMjrwQSHMt5MQUaG4wvCpnPj6qWwnKwB2aTpeM1UqeCh5tDXPv91LCC41SdG",
  "key8": "4mU81fE6UaiYbwmNNCDoqtxETT3rCw7pLi8DaAv9qrsbcy7J13cPvutdehBLYmxDz47fDoBwbhAXDEXm8LPKTcpJ",
  "key9": "3856ncycBTi9UHwZnm3rYUpHGVdWzaFXSRtb6NvjEEKxvboLM2CaH32k2LdSJXhSvTPbQki9NpZVS4kNsDp6ggmw",
  "key10": "2GXcSE7hbmPwzLiDSY7hLFJQGrg7ZtRAors5kdkUiTMHNcM2YvnkAeFjES2hN2tNRoJyfBf6ufsuTqAmdSXeZ1mY",
  "key11": "4eAMLBK8xG1nJvxgyvoq5EjsMARkXtJHKfGzYb4qDavXBgEyCvG9n8kiRkMN6TM8qcYbRdh1o7HFF17ZhxYH5agC",
  "key12": "5r2X5ey1fjvgLbsfB253GALxmPrJsuCGhskVE66uYNsKRLXVvPhfd4sSYLuSS9cNmLw84fvJmKkLjbnevb3dEJby",
  "key13": "2hDAJsB22bav4dMefTYVJ4oEADobbaqo93G6aPVYX5i7cD6hV5cMfAVLL4TgjURipg6i7gsUbz1WyDHNPHbznNzd",
  "key14": "3yv1EAB5nvRVS5ZuPVAmQ8BwS5sAHp8yVHJv4Q23dQKYkBdkFAxZ39ruMo4oqkbrsixeAUSs2NkroSFM1qpeYCQp",
  "key15": "326BGNeXxjXp81yhaTseeTKGb76rmxGoskPj42LZaD6MGfRAiFFL2GTX7fVzFCHoRgN3avwJ3FgrH7Ty2p2VQ37G",
  "key16": "4hjLLA6qtz3dUocQm6Bo7mGzuGWuEPeP2S5LVeVoKrFnf8nLVQQ5KmHba94RKYYa4uLgQnZ1udPqwPCYubdbdEuk",
  "key17": "4t9SqLNuQqHLqbEUZT4VikXcY4sSTYLCuqUvWcFMYboUPBfXtpRZj3CABZxsJvKbKP9xkhDzqGvcjSNWWK3yqwnV",
  "key18": "pfdJHzC97Ee55seoqqQvr2gDSR3HJ6hzBdp845psktesQc1YbBaLP5dUfmvnqsGZtrQrKCFDcUbBeA1pbabhHwn",
  "key19": "YxCi3GhYHgSrBURA1yJ5MJAiWNPFzDTMuT6arShYTZ2mPqQzMmrX1m9oXcACTGLBxuvTKuhzVtiTQq6MF91cEJ1",
  "key20": "3EYSHVAwu8SzJ3pnnzgR27ir2qV9jp8hYvjpE11h85Uc1GuH7pe1LnY8sgYceSSR1NyXuBa8TyM46FH1g4SJtUk1",
  "key21": "9E7z2LPodcRAsR6VEjmfsNn3idV47UGUjuAP4inngsAfiVBhbtMf6v1qPNwzdBnxabazgKsoheg17LXFc8BSTGV",
  "key22": "3ECBtfxU8YC2jNXuTAiWehgoPurKkFncwiSFHF2nbpiqLGVBLVRzNJWNPRMSMZ65gtK4QxFEJjLj7H8irrQvNhUX",
  "key23": "4VYoEKgXsQnQ5FedPo9tNLNCke5kT9qkobLisHgk66e9rFWoWLnW9Eogm29nuCREkehjU4AoWJabPbNEkXVWWa8F",
  "key24": "34oB8EUV5NYKvGQQwqwaopzjhjChraam3cAMYxZk5BFyfZk461osffqjUaHYLbj6QYkh8ZnR43i3c1wfqNGmhNom",
  "key25": "4KrrBZD8t4naGdNqN86pWbZyDpx393kcPw5WhSnioysyKAD7YzbxftgToQ33zhuWLXzqDNkSSXjmZN3q4bDxRyL4"
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
