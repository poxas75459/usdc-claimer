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
    "37vKgYCWL9c1khGyxEwwKST9oHfDqpqDu9dKcRjkFfRe6qjPpCpS2skuZ7zXr8zjRMwzJCLkGxhyEGffc84FQL7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n3zjiRMAh6siNZdtvsvggCMTa45YMyArcp9AYqcNYJdkSnvmRwG9FjeYbgQFU6KRkcYbh9ZCjV5p7LuodiPqGYa",
  "key1": "4VSanXQAqkhY6GmMiZiqBjzpe5GMCb6GeEiQ622Xn2qxdrExGf9EE8ApyGLFs2QzCHGgmYSJLFHDYpUpa3J3Mf67",
  "key2": "WQKmDTpGzdxmQjAaRJANSd3DdTCDDHqQLoEso1KEgUyp1XQxGXepE5AtsgxwcJzZHuWVhMcTL8qDkuyEREyv2hc",
  "key3": "2CT46xqAEB6emNjpeKqaiBkSVLJ4v1mbQbNU85sCsoGduM4uUEBWpA6CNxf7DzR3Amn7RtV8DcpcWELQkDbj8ym3",
  "key4": "2P2ihDiW8HxTFQumb94ruvcWxRGDum98PxPBHNoMLF926WskeUpnygENXccZE8PkHxompjZrio3EehsZ5Sjc16CN",
  "key5": "54gL9BPgiePrpm386xwEAXzhjLbQTfEwYzdVi1BAnfm7oAoReQbhmCnSF3JA7jMSmHMu51rhfo2dijWiMH51E9Ki",
  "key6": "2oCV7HETDf8Z1vpWKLnvmnCJNkAgFSA9s6gfB7PRCAyus9VGG4p9GvbiGrrDvmjXGvHJyb82JVUNYedFsiP6e3rT",
  "key7": "sj51sTvTYBFqbbJSKDZqgHguB8hV2A2FuWEqeR6yo94eJp6X8D4oiL67yrwfEainqsvqSPXdhahThqmi5cVM37w",
  "key8": "3vQ5SyxjizXhqc27BtRMZNJbekBMcskf8eoyLGz3KHrZq84FzvSVqrngqfussXcFMRYR4ku2MVzNSZA8YAQTthvi",
  "key9": "CrYbgCLW1B5bFFmjn6mSDCBMeTyRSNzdrWYCmEw6LB2Vpx6Jo8ReMfB3DNJEW4izELixCRQYT3jPenY9Kf716ub",
  "key10": "KNzWUuy1Ekr3kFuGpz6vD42bwJ4MHEcCFeQXhEwxgNozCqqTQybpjYHYpQ2xEaLontzrtg8tfJU9MK7qVgMTJJg",
  "key11": "5ZcFYBnhNj25gkFer4aCnEpt2zUM4UBhx2eoVVu6kMN62SoBvETD7AMfGa7x8o4PxJQvXHWJ9fHgvWvyRoZxZssy",
  "key12": "26vWPzWccrzRB4RvfZMzASLzS1YE89eSz9T5HKDmqtcBaeMpkH2V73iqmbyCDhvREFpoCy21B5tFipWTxzfr6W4g",
  "key13": "FSgc3J65JTn5JH6mV3R71qqDDCmqt5Hhx8tRgU4AedYnMUPQergYB4tbG7bgiy7C1LvsZrwiqZUE1YdePN6jBnQ",
  "key14": "xKbue9TD9EZ3ZnoBNoG7vnY31caqdX5qTbMfpEdznWJbbQhdFVgRBcMpcoyqZ45Lp1yY1HK1DCWbKyiZRztT6Pb",
  "key15": "53ARGEQSGV2sp5tnD5cHCJ4CMew4R8XyER7iFyKDeYJtXcFpEACZkJnmrt5LRGf4C7nHi6kUawDmSBHUEt44w3Pu",
  "key16": "2HxLuTEsa7pDFmRm6txXz22KohDGr5f55Uag9KCNYvN2otDEcX3GhPXYfhdM9J6eFj84FYB2E45Dmnn4dDTE4geo",
  "key17": "4fCPTEBZzGou6F9b4jNG7s81ugNXcuBYTXZNwhsSay5LZreSLzgGtggWQSqw9QAsoWxCjStLfugJGesmHFyjWoeF",
  "key18": "3oFqxXbTAxcEocjykHRrAAvbdCxYkxCcuoApYLcs8siXNmJ6jYGLRbz2HhzRBGnwSJwpGB1Xz1HqsoME9VFrhqk6",
  "key19": "2TCPFYEkXgKFqbyKwD8kqbR6cLqo6fX6mAP5vHwraADAjEYRHqC3BcjyVjUJhkXuZc47puNFKNFAWbhWZwnWd7CE",
  "key20": "3WyRLvTB56Wgc92JtpxePTVucewv4ZQgkAom7trANUZLku8AsFDce3bMNb6g6fzLKY9a3tCSeVDkQgL4uok4vWAX",
  "key21": "5jQxPKVLEqrJRrm9TjgAr1BSFzbXo43hsLSPqNgfkkTDr8Hbyx3YRZca3gVx5s26Bo1juswCRCrtR1E3Zr8Dv17V",
  "key22": "4adbNeGeAFh972BFH1FqWc2muLg4aFWDW6e71TGZSuF7f34X93bEpHeT4GNfYfDqreo2mSshZHGRKY9yEvvsQC7Z",
  "key23": "KpnWQmS1znCgJxBmmq1TNZYrdkFcU1ZQWFaK3MsVBnWw2kgpr7x9pftQ2gdnZwF9zy8P9N3YGfJofYXoYdBa7PM",
  "key24": "2gxkNCyBecaRNodwDv3GRXMN2VGt6vBeWWupD7bFugCJ8okPbqB88Ut6uAUyerLQp1f4WLK5NNDgz3188Kx7JtdV",
  "key25": "4W9QTdNFVmLRq1AgSuey2ra9mKfGsaYWeqccLVXc8n7Yvgxc3G2rbJnAz9JQGLd1Xnz3M3kmsqkthqP9yhBGbjNM",
  "key26": "3N3yhCuL33qrkTkNx447v6qX2uH3VVQ9VQw5Uoc6EJvVn6t5SDQizWk5nG8aHGAa4RbCQXpuBb45VNLgnqpHG3wp",
  "key27": "5cTHVf3Dx2q72TFRoCyJUPVZHUe98oGEma5FkWV11msrCUFKjE9zRcN6X5pQw9tLkcyaZJpqbTGz68vAgn3srsxk",
  "key28": "2fH6UPEDjS8qviaUnwHH6vXV9DJFeTdawTNoGxAZporQoofZCKux5X3sYJJnKuCgEzFE9QBvaqwdw4DQS41MnTd1",
  "key29": "MXAp3qpufXKwQLcr37buDDKc6JbX9Att6saFLATDS7JJDdgi6Jeji3CMM3ksKBvU7q7S4mhPpkDn7bua7BdPTL1",
  "key30": "4ZMm37RPzeD6mwASDh27o7yNz5hJdksRTmBHP9EZZMysTes5T1Sv5jdgGuBtB1tj6Z6brf7XVcfmViknR2tuH9uX",
  "key31": "2JiLNfmchEdNyVxDbHsZPPkYf1YpHisZ1Wi3x4HzUSqFcJ1Uvo41AwU9pvyFcGiN68uidyCqcawDocksGfKeGXL9",
  "key32": "5KtNfsQtSCZd7vSGTeRDRVgGAqSv2Ktig4vPtoi2YEPSxDyHLe6j1tajAK3N8bzE6k6ZkjxPszsKZ66eMR64H3Lw",
  "key33": "22GPiw4qGoR6H3y7qTyEhjoSgiqebhYrjRaa2MhFJ8sXjQR45Nu4QyGhEjno14Psb1cpVohmkjwRNMh3H7QJ1SCK",
  "key34": "2L4f1tX9WK4hgFyNU7VBeF3XiZEQkxSX9qcoJssYAfdXUNoaTK85Kryqk6SV4s1K2m8qDyvrzsUYF92X5AGK3hpk",
  "key35": "2kDu5LgYC18XM1F9f7i8imAr4nqLEeG1ubtf27cwuH21oQUpVtmnj5trw7whDCVwuBPvhHNNastxXv1KRbUZTPnn",
  "key36": "TY3sUiWUqzUH8hpsbCPFku3YA6hAP6h8UFdwhMgi59P83f8MXrHmQeCfLtYVuHi5rNpNiBpzKCHbRCNFsPL7u8C",
  "key37": "3YKtpmKG3epmSEokfxXtoNBUYwsy5LvmguzMoDM7KM8FuYtTcXqDQ9Dwg8Mf2Y92AaRCEyrmqo1XhsQW7eBveLs1",
  "key38": "21nkjZAK9Sm5qcz6oSJPZG4rVr8xZSzJjxkS8cwdckHkg9ijNGtE9h9YN5ZhUcT5dM4RsJtTet65NGuP9tYR25a4",
  "key39": "5gMyMM6zBkT91kTLdpH57n2VCZ8ujQMS8NmiaCfw7ARQU5QtTzXueN26xw6ruaTxmTbL7Y5B8Mh1tdsha88rKkSt",
  "key40": "2298WnM9KtdEqUSyneWTAFSym7X1MsU8oCSZSQrN4fRVwHBCA3aD4NQTVdwogTBm7eQeWCp94FX5yhrxHkJg1Nvu",
  "key41": "2Sm98BgTNNFu5EgdkhJw5SNn1dxeoYQGZqkvd3YqCGz8T3gMMLJLCBC21SUeBHhYTCGgKPsTE36gtKW1cmbEDvx8",
  "key42": "zCEz7PGj8RnuThQ8yyJus75snMwaCKjoAurGwnFM6vEfgvHeDWzEc1pBuxgAzHrMRGbpHyYgHa6267zPyeQumSM",
  "key43": "3hWau4x3gtrxKfKhRcN2ivDSEZ7xj37V6KPL21H6Md2gWtWCxFv7F8aFLfdA34Yz4zRLZrZuXT4KkLFSiPkHDorY",
  "key44": "XAK19qZHYa1EtUzCBsEEp7ZCDFeiEji6quLnBu313SBecjvBTCeQgVFSnGwZBr9GuaDTCkRTMHQwk1DXNaAq13q",
  "key45": "5bQK1UUDAHMGjQNtQUb6SxX7YCRNA9PxrejAdhHsJSSMRTmQNRyxvkc2xwx6PzbgQiA3aKN4qx93d38MP1AjNPC9",
  "key46": "3KaRAi2ew789iTJfbykFAAEm7RfzwLuVmnMNn6xeUaofHveXJLSJ25F7SvLe8cUsQt1ApaGAC6pCwZ21vj8WAZx1",
  "key47": "5rEN3vaHHuiHcxpmJqzzTYoVuLiqHkzQFSMWJbjhC6utdK1YWhfq4RUPiVoTFkQuj62JgUCrqSZbpootAVk9EgSp",
  "key48": "Hhb89Rc2oYyJkXxdw9WSBu4J2gRg7f8FPrAHduKa5TokJX3RQ6JMQhYtKqYnqNENsWrJEvif6PQtBnTzUFaJMg7"
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
