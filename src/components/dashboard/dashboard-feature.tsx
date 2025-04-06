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
    "66aaaGxuSuXzdvb33YxssWAtdvX82oPW4D5VQcoQDRCzDGQEohNwcKQL1DE71WQHPEAWXJUHmCagSPKH5EmAikH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k7ReaWGxG974gAKizR27MGrX1hZX4bFWn5VHxRc2bkCKZmBkBNFTmHBAo27qwYPC8zj87x2TvtqXNsgJDknbj9n",
  "key1": "3Xa8Wc5qT46tVdEkDvefUKibq38qahKZBfqCkYCDkHDRchTfCZzcX8ew4VFTXFWSKQU1tCcccpSrebk1fz3v7vaV",
  "key2": "2Cpie2vNZ5NKVdj1PJwqiqUj47W56ePioJq5EpYAd24CCt25k6cstW7tjLnXku8ypWxCm9UPkTV5TwThkC4mcZ9w",
  "key3": "4nTvZKLzfP2Mypdwq6Hm1ugwfN89pxMc2rqKqYHYUBnfLFA5BFcWv1L7Ef2RsYdzxX5aW6tPEKuogmPd7kBarQ8r",
  "key4": "KxM9EcEZ4fMna6P5TZQM3XdyeKQ6GHk6vykLJv198wADZo8HzixDp7VbMit8cimVBi6PPtWThPMVdbS2b6zWSdC",
  "key5": "41nat6pbexxSk2u9ymkbKUr7j5ez7FZGZu8eKTFyVAJ4MNPPBmbShBgUDibCEJY25H49WN4AF7ZXVe73cpDK58Ti",
  "key6": "Qc7gYYEWktAfPxiMNXcTFUNgJWTag8P7sJvnRYgEDpJkSGBz81RRW3wPVskYMbmjTh3ceX7PS13obot4zADeYWp",
  "key7": "5kwFqziCtaMSFywGPzt7rzL5gHxNa7CrcrSZxgoVaEMaJQM1phHvPWRVmb2i6zt5aWX1CsTpLt4KJGpjfZkemY1b",
  "key8": "2M77B2n3inMS5pJbH3qCHbEte5QuX9kM84BQjDdgiGXMguXQpr1QFiUzDwzDmLQ5LE9YQ11aypi96b9YUSgc5VYA",
  "key9": "Eky45NE68MXYWCos9Qi4ScZv6TPZ3JTfuTVCWzprDMSZVe97T8LviadjatEna7S635jFaUkmDsWphuAW6HeEKUN",
  "key10": "473X8v5SGNyUnJD8FhFNnnSoJ69jSiNMPqXXsGN9cBx799SKDgwhn6v4yYi1DAKtXttirNnyEwjZG69yHoswqf1K",
  "key11": "5TqxJ1dcbkPD6bBYqWmXL7hYJib5GPZPUE9hjAnfVDJALZRyLJBA9wzAQuBLTxu5DM6NkfwitN1CkCBzkcaqtdfU",
  "key12": "58EqPyohGePNtc6iywCC9cE4oV7XJEgd52VAVTNp9HE1LA2wkqJHMEK6uLmMQ28gUbRk4R48vbYaEN3Er9ATtTxS",
  "key13": "5LykVSLmvaVceqtHBUyFLwmtuXPeY9NTtTEvvTRcDkJC6to65LRSnenc1ryLxDmD491BzPorNWiud82FA8YcYgFw",
  "key14": "4f3EizxJDTdDQxc28BrysFnpXyMZTiD1o2v68X987i743CXnzNyvpZ1zAAbB8r83VbSA2EL27q947vWdQ8EA5gkn",
  "key15": "6647bvFQFENLbeXAAiJxhwYofcKH9rJm1mbm7bLPaC55m8tVJzstjdQqJTt37rqR7b6pZmi8N4aAJsNUQfi89eHj",
  "key16": "2erA7Nm9GvGX2C526JcBPKyPPyhzhy2zsA9U8TwLYsFRrW5HqDJxa7ZvVfkkMzv1yuNPSE1iennSNJzghTQpWaMP",
  "key17": "2AcW3uUzXBQ8PUgJgPAZwkNcQD8JNToCL7nfcRPsuroZhr8fuvyAec2FvAXroENEuSUjEG9UFSKwtykZsJhuKp1b",
  "key18": "4ZEZ6Hos1dTeqZJzktnCbfvD4oJSjRWKFXytb7BbbxFaW5FA4HTJkwNajBLNifhzboFpGyBriXSNWgwghBoTcw1D",
  "key19": "2D4tWRDmR8eALfMCuCX7QTLhAizHj9HByuZgEAixMPEADSTnVwrUFenLgUPvTXzgyxnqqSbULUtQ9ydSAHpmR6jq",
  "key20": "3dv3CfAWSADNJmUeMzpzZpHz4eaQxB68ap72asaGLvQ92WiXFayvjueVXEVo4B7vuHDsUsCmXdXStPLh5de4V9ES",
  "key21": "51JwbfEXqdPwTK3Z1qdMtL6wRHDTQM1HDwTRnvJE5U59jnRiY2zoGspTC4H5WmL7W1SpYun9vfg3EgBvCNS8Piyo",
  "key22": "35TStP1bvDV2ySg6dch2m58RySHA2X2oE6TxYpkK2TcvQEGF3JrPpW898247JZmDzGpKMBBFFgzSCMrvbp2bopJe",
  "key23": "65gD3PhqDjwbn4E1LP6kMWVLMjdvDyZpLdZn5zanR3fpyuFRmmZRMVyTDesdqEvBerLFfWwBPfvvUE6XM4HpA2ZN",
  "key24": "bLP4uaJK37vhcetxVNwUAptgqSVAGBRgxcDFUZymG1ebTkCG8KRpNRzpHfozPT1DGfS8hnFK5pRr3p9ggHZTbg6",
  "key25": "2hGgMmUqkmTMDUHhMZP3EN7tkyxV6ty8h95H2ncZ6nFipXVi6gGamBJAJLMkCT58Nt4TGwr6MSs8cZSEn4ycBx5e",
  "key26": "55W1fDwBanYsz3NANrZjHvmq1GHWGJTpbeZfkzypqRckqGb77oVBptDN8BhCn1TXagNQMyV3scE8yNBuR1u7t9b8",
  "key27": "4RfQDYQ1eaRsByPzuraDzh89WRrQwpieg1VTaHGMASYM3uJbXRTGgFLAcMTJtfa7ffMBVSHBaYVuyodR5zt5rYUw"
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
