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
    "3MoZ7rCAgu9u5zsj19CV1NZmZMRFEyNxPoMBx2WNpQ24qWWhJX7L3fD1j3sUHeVK5yWRPgXhRctgR5XsioS1DStZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NohHnzrnQPYeYXTYsGckfxGreAyvrMgFsNpMhmp7ywYeBe4zyqYqcQVTfrQBUFREaMEgBdPmfAtZqkKvLe7UhLr",
  "key1": "4jp5Y3PVnFHyVEqdDwh8phE8nptqQYN29XvLzM3A3YXhYhYAsAYD1Nw7YiXDCpnpcxNLCk24oTKzp9Nm6c3Ehwok",
  "key2": "CYtFHfFeufZgSy1Dgkc8Ny77qL9MB9uc2J91Bci454mxTrgwQiNsheZfe2TkW4d82BpPgrGnjvk1o1WUCuSGeis",
  "key3": "Qi95NtVbS7qFR4dsARYnsUAC9KYki7ekoieondWBwosXDaxZz9tmXX8ym8bGLCQJDrux2wShH4fpiNPRJ5BmU7F",
  "key4": "4dGhyabxWfkkr96MuxoWrigTctuHSZkU27xTKUaXYEzcm8FULqBnv3jFzg4HoFBFJfSKUYUutHdfYgAWcTJiWwEi",
  "key5": "H3nabGm38u52zPkmQNNjJauMBQjyqCz7it9WNLtgQphbBcK8yZh3EbgqWdaN4USTXgMpc8THhKvTGdgZYEoF8Cx",
  "key6": "3gkywQf6895MJavsB3YcirXCsCT9xF6QNYGA4gDeL2naBmJJGRnENQSxaB3vVDXdedVQKohDKQzjun1WcydQ6yYB",
  "key7": "2niM99jpmoDTPDR7htALQ1U6kb1bur11fGhRU3sJHJYAkS3zWDbQWPwX5F26zTtwTZHBFCpk48Qj6jVS8qDAYmFD",
  "key8": "na5fRkCpt2rdwJh5KK7gYeS725padNRphkedVtNxKymADuHmbuP227qPBfwTts3fhSJVDEFqUzbaXKZjSUMDPik",
  "key9": "4BzTW6HVvGXq7wBsf362d5voWteovdoybKWi5S9g1UqMvmugP36VscuvAr3B6V9giQasE4BkRvzsp4sudEC4M9hH",
  "key10": "8MP6xnknqrANmpdooVtSSqyFpz2XvP6WTfQByFfEShYRxowXw2JfwUKgg3NDEUkjPpjghqjZ69gfNdgt3K3bftU",
  "key11": "5UsyAZ5Eh5YLWUCYPikM7pQAw2R64zQq9cr9NbCFBcDvGHkCPvovPq3pus5enjMCQRbfYsRHrwwTop19MyA9sTTW",
  "key12": "66qXNiQwCPe73uWZdfojqLzahEpBEToY5sxPs7S8k7GPM2ZQNFjY3wcBRGyxej4k364GqRD9r1dK2zRt4vhoxrpM",
  "key13": "5HoZfF2gWVL5T3yDv5bvZT9TD3Hjz9TrRmxmJP4ibqrMnWGQ94KZpP8GjU1LHcV8rY1SYpa64c3u9DMqMzkC78XC",
  "key14": "h3j7XaWEkYhBaDwXyNeDDp2UXsxQkvn8UuzpauMURNAM9pxeTKgJU28gBH3PoHsT9pXcg7GGiQUbxNC5xc3KeAh",
  "key15": "5a8H2Tf4RNkfbK7JRgjEhScYMtgKdqXnJGwG5jNqwz23B2u4c83dFryk85NqK8oAJEQAwpybHv8o2SubGqQWvtrF",
  "key16": "5NQbToEyiEyfe2nr5Umm97JwiXYuVF5tKGBk6btJSB7pim18iQaf46Xfow6WbTLrW4wYKSxvhViZucSkRXdtwCGL",
  "key17": "38pFew5CM3pZQDEnp9y3asgDiz6pteTM625Mb8LjCsNitq21cgAak4uREHZfbZ9XRv2Uagb1R11WS1N72kei1xwN",
  "key18": "3WrGPYnvNi3HBLruV8ngi2L6J55yNs4iQRJerBPhzHmGFYXzRgW6vENYaksrnjF5zFsFcANxboqdxFmmd8SfpGhR",
  "key19": "eLL3yjBmaeJgdkoi6S6CA4hSs2m3KEGiWdbfrzobf1uTc7PZsrXfb4uYDo3wvKSPmpibtPQGgfw2hRPJoMELg1g",
  "key20": "2wZjtQvsq7S1wQMPFk3LWYhJ644unwqoL21Md8B6hV4JRx27cMdM5VHcGnp1oapy7CkNiDSuzXMWpUrkkUWz3jxn",
  "key21": "2Lf4bEPR6fpYBinW3x16KEoiFJM8wjF78jGmPqyPBeZsZMLrTJrdd4iPQ999yfZYoV98rUiDV8y833ebrQAUbfta",
  "key22": "5zV6uoqwHYHGaJ8adAheq8FQv2JwJDSZsuhLuKsyu7bMWro2j6kLzhWuFsWyDYpKYkPbDAVo9Jxgwt2aX3X55edd",
  "key23": "56HkS8FnePctMN3wffWmGimei8wx89F8svsop5Evw9eqSPpNqUf2m61h29tqgTn51YYgHGawZVw8dqEvDFK9Erfk",
  "key24": "3cNZ7Fat7rBzygvSQa4wDjnSsGxyyzdbq4EeU21YJUgfXPEkDbgJD6YbWfD7bpWpTzk5fsfwVzhuUToshGvWQ5ko",
  "key25": "47H2NmNhzkBMGhXyvBm9F4t39bkqEpgsQ7PJroXWQsZjHDDSKx5D4vEJYXAmXXygWhnyoA7PemDScdU2zbcpMQnF",
  "key26": "52ZNDNCjysoD5pc75WN7vaUS2PHCiovgBH7TdkpbBPQa1Bn3aaieDDMivaVcrehipf8QcyDMqdst3u6amAX8bE3b",
  "key27": "4AY3nb4UW4khb1sgieNzXPkr5wjDJ3skCw4Z7STPmgqj955NAW3tucwD6TrMmEmEP26RpCkQJ9paG3oDi4DW8W1E",
  "key28": "2uPAuQvXXCTJiqwx4FFJ8GRxq1xo7831WUVsS74nmJVbmz7VtL4DjYvjkxpWs9v5QghBKsiSkme91thzRuPsxz4A",
  "key29": "4BK2DcNtvfJbH1cLuQUZDbDu9bYbJRoZg7DmkvBDz9xV12eUzHmg2nQuHutEmV1ZNaRybe7bHv5MCrTPUWJBKXJu",
  "key30": "5xR4snW51Rot98oMnodSr72q7XPEz9L4vzvtBzz3PxXQW9Q25DUo6fcFCEXMiigawWf35c3Ls1fUgRhtpgpDzs7f",
  "key31": "2HXmNQRK8XFqTx7gUoVJyagB6r3hmxPpL4Jf8o9XzX5uuHn5mJzApeuz5CcuPPtYg49ngEXuWeaDnTzE1j4kAKqm",
  "key32": "5rzbvyCvpCvvaxioA2dfsytS41h8X9eoKW93mwpHsDgEqUVEQTeMhsAuFsHQBZGs5JBEz4nH7Wfeupkc7g2aqxK4",
  "key33": "BVSMt1xiV5Ds2XWafkRpD9bCGn11LXCvF44pBHVwzEs5Bso9fE7pbYBihiWRZx3LJ35gbM2NTgTRFSou28gW3sB",
  "key34": "51B5cx4f6TQz8G3fcyA7rmvue8drwhC1YppYTjzzKNqMk8Gnzh4zNVrQ5WK7xgiWLT64dFUXbcNzLHzNgTCb379E",
  "key35": "38vXabuwnDco9u1og3XxitFLJrwGfTFktF8zMV3kwJKuhuYQ4RPcKWwEbUaTTYWaBX6ufgSY9sMps9kz3v1FmwPe",
  "key36": "44UmZ1fgRRiXVBpdwGMGHxCXUVSdqmfh4mUojetkMd3oqKU65HxPdfiZkk1FZRfEiBimz9BQTAKXfxK31nzEGcMd"
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
