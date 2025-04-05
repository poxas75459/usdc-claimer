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
    "2gbFYpDNSoZVhLWg8bXQmK9Mt3ztvdgeC8mTMHB5sZCsF9j86WuEoMKN7tRriUdKxf2iUr3bgUXGWHCXg9Co3Bxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aL2FMHaQ62fejYXr7yzPjfLuWfiWD4TqBRZM5XLuUfMiT9YvbcKqZ3yPM5RFZ3q52LBd9w6d6heHuaHMvmZYt7i",
  "key1": "2ku8kr1JfGGURRxCDZcznRonawJtVu9KH3UvVPRYpWsfgKvCUNeS6N1oMokErTs5yduGCRDK8FLBk5wf5sZ762Rj",
  "key2": "3F4vJgJc27ztT3vYTAMLojAYN4A6bjrSuKaoJk91v47xpSckTsyAcTvVVhT8Zr4AZ69x8eo21RaAoPfhvRcFH18K",
  "key3": "4K1wG8iaxmVgDXn6H1cedY8SRBbN4BQ9PRi7hQqkzsHvpF8Qho83xC6PYeu41WYFDq6XG7CmNE44qfBxVWmQYxLf",
  "key4": "T1iUgByS1joErw4Yn7udjxrcJS68aEjmjDkvyby5WADVwrgnGqYTd7BEFGdAsN3W9S9RTnpAcRq1s7qJwTLC6kS",
  "key5": "2u7AwaFvLS9xwM53E4ZD5caBmbTiQAi7m1JE7CoGc7bpEi2mJpqc6Vm6ieoDi2vh2DmKeztWhUWG4hNAiSCBiew8",
  "key6": "3ySkwXauzpCjCrCgtFRovx9A1Uoncx5Ju8NSQGSW7C8MxFNoYZqq2dqLaTceQ4XbEBt9nVVYsLaZsw37Cibu63F",
  "key7": "2y3Cm9shycZq15pig8oMkMCGpuTohanSXyrgy6LV5NbGaRhfwdZqQL92gCgoy4vevd3iCtkGKmuF8T9xT7srUhqi",
  "key8": "3GSJcBtJHwwTK2Crne398VYc1EFev5uTQzZNzE8cWE4KsjeRTqHJWAVKfXvUEhBS1jRu8UHPbnyVRUFHrKpDsRDm",
  "key9": "5WuRoFZMDdgB5TKRvZcRb6ZqFeQnT7KhC5TfVkxM7sjLNKGnCR15z7MXkmU87zUrZo1F5HBUsJFpcVFyES9PTnBc",
  "key10": "32Bdx4N9s9F78rk1Pu8aQXocnAuwQ3K1vpq7vguUKeBmCQLVR5hKMGuehP4zKyd4ZkiaXE73KcFeq9uX1finz5yq",
  "key11": "4x1Fj3Lgomqv8BmFk8YgiNESPHiG1Wj8mkaqqVK6siEb1awD8ubrhqjeJTABdiWX2CXckLUR7u1FHk81qxBu4jXA",
  "key12": "jrVPbtHkWwHa215CCJAS4oxuhUVfprG1YnBuNnBN9htdMoBZyESSkFPtSicyPRVDg3hFMHkXuG7y7HgPPMT28kV",
  "key13": "3ChfVukoPJGY4i3YYTKwy8TjQ6NdvxUj5rQw3RuoFkiqNiawsYL2xyjCk179iQZvyv3qc7etnc3gFiaWFjGZFwz5",
  "key14": "27fnDvKynEhD8fWyTjWvnsHpnDs7oie3mxXC9xBtLBvi2Us8cVsjPDc1KKRiCEuAtUPLYZvdo7icqimPNmR2bGVc",
  "key15": "5vJv95rJSGvVWtx65wB4Xm8M25rAx8xaSGFVL2fQuvs1bhLVm2Brec4D8tyxBU7pc7e3swZGhTYCzbYBr83zR11i",
  "key16": "4ZWwPdU8mrYA8t7rS6V7r2fQuEPrzFwB7ajYBxJZpCGmZ3TYtBRYf2b4Rx34NwXyLWR5QJfBvG9RKERnkJkiU34Y",
  "key17": "59TS5WHZW5pycWbUQDgNABYbKFEqfHGzyBJUtzYj6VoicNmHMnpfWN2z378FwcLWL4eSHnAVUDTyg94WKBCieN11",
  "key18": "Ue2nYshTcHp4o44e4UxFC3eSZmpSCWRNmjeGxPMSj3ND7vday1Bsh5DqaHVCyHsnzYuLjj4GC1Nd7jrzJghvKx2",
  "key19": "3ZKsveg2USM6zM42MdbCTgQ5GjiBRjL8CHfWqEddNTqJAoLabmHabM9Cmxkg6m7V51sGhEdRoEQ88Niu8Xq8Wer9",
  "key20": "2M9RtyzMeoQGU3uvvBqwK6rtvpP49T3SQ2dFJ7eEqUbZFNSwrWN9RsYAFg9qRJpieEfsgVuEy6PhfwZvWGTmccgS",
  "key21": "3eqXAFdrQzSEweiiVxL2auVjr6BoUSY8RTUzDkULss5ajHCKbwELGwyCVHcyPepufLix2u9So7Gm6M4CDK9g47Bj",
  "key22": "2Zy1HhtceviTb2XNk73vK6j5Dnys18ZdMq64gGqwkzwsN4P8d1CJk5wKK9G5o1RQyDQNspS2rMDRhiP1vqKftu3N",
  "key23": "cUVSPcGNqn4ZPMvssewrq8FdubET9LNJjn4phhcbiy7iXSXxDjKn6Gmr5NKrHyocRC3DWneHNFZx8UKC6gh7ica",
  "key24": "4uKGugmztg8VariTBibc2tEuHreFaoCZ4TUK3XQomFMpvyj73kevtVM4wSMbNffS6cr1qZnEaCgyTAJ4WD4nYnQK",
  "key25": "QQnwHxScfD4MFLtKCQZmJ4qUFD8BrP5pLSCqQUwUgwapHEJnuf5411JhewqhrPDAKAyKbcvcMT34UGfYumyAWEM",
  "key26": "2j8Uc3XCjM35ckVg9cvnCaihN8wEQdgQxSgCvX9ax45St64jksAW3Z4owVSTu5fDTuPzgjk8L1PeZCKwCVj6iDsQ",
  "key27": "282pt8UdURgJczYYzq4hKALybf9YKvZCrogTqwxvEY1QkHS9Zf9xmf7d29FeprcsJFK66jJRodd5Z9nQFYrZxQSz",
  "key28": "HJqFRsBFqH4F4fcp9xtUocFrv2NajFx5nevFbBPGFXvQPzZfMVwVtzYWmqNPXp46pCXkSozdHFZDRoQZJoXEfKP",
  "key29": "3CXiZ4N3X1vU4Fx3csUmuntirMhQHnzKBcYDZbyn3rc8yN4uuHoDUs3xmhnTsnJMgdQoErDjJtotdXKMjRBajBww",
  "key30": "5QC1254y2K55jbgU2bX7hsq1FQJHma4ABN4g1hohcykAnpQvV6UFeycAdzr4SGMXzXhdA17YsR5GaWsBtWQc8JJB",
  "key31": "rpURePSAyADS9jukteiYmbMYRRfqWQvFS6fPnpdMCiZCAY5JQK8FSEad7gNXFYzZyv9DxdNiTWF1s5v266eQgfz",
  "key32": "gVw7LCgg1aqsHML4aMoWFrSGRuznkZrk1b1Z7C3qRBszRU495rJ51AphzRssCyaErJBbieEHXxJ4wmYyNUGeU8G",
  "key33": "AL7AA8Wa9ZQY3aaEdo3dhRuYVYFztqYbJVnjsMqHK2gX9vx7yKqofhv71aZipi8KCbousap2djAS5hUDXeYJNPA"
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
