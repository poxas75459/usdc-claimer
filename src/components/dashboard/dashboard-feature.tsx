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
    "vCe7eU4MHLw5wfsgcSPey3x4rnPs85ZjUfA6zsnVJayz4smBsCZy7fiXrro2kZMp799Dm39Z2T7uKEcwCrJ52mG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S9BT6xG8bDrKN3SS8trxGA7meFUw7RfnvwMDjxjQ6eZj2uuuNX3jj4neTzETasDSjYmPobk9K5Comq4ZK9nLuMP",
  "key1": "4UcaTC5Hb21ArvF86t8TUSdMACryB2A8BPCp6oAHVpgrRcsb38BqUCWdm1NLHV6rpKG2cmmbhpKDQK55to1WHfcp",
  "key2": "2KUxA7Ypg5s9nZoDJhT2XT5V4cvecK5A12Sdt6HZAPbL9KPnneMwfmVg2BuPkzuGxFK1ScJaXojSNqkcjrFwBaJq",
  "key3": "533JEVjsK2u4XvznV2wQ5R6F8tLr98rUNrf7Zrj2XVLKVXY6g2QxduS9BQJswCJMpyZmb6HMo5cENhmsLMfXoP9t",
  "key4": "4nbdsgkrmk4Dvq93M1Mi2kKF6Xi2X6iy1BdPpnn49cweCBqtbWrf1HfeSzhbN6MUYJic7ATaN9XsK1f2TmydZ3VJ",
  "key5": "WfC8FAZzenwbZ85rs88qttMQ41mM6oU5DFSRVCYhsCQA5JdaAbiHmeTcgwEzTbJ6pc3XmFqkaMRn51xXU9QxEU5",
  "key6": "5mjFquxzxA5qTW9bJCuBA1S6UZEKwf58HE5iyPQKKEp3jkrmqMA8zsrf1vqUWkQ1SrTL1Lc3ZFgHWuPt7K4VAQqV",
  "key7": "eoQKAKtZ39i9kxUYKHyiZsJjY4PtSXNymuWetULwoC6aMpfDWFhu5e3H5gKKx2iogLcFs4vbjQaEZiCAdcBLhGG",
  "key8": "4dCciGLzaAKvz8qAxXCGQC5krmTytfzhSw7W7q1vMMwnyMCeNM2N124yEFfYYh68NnRKGrm7qYKGafy1b1Fa9mvT",
  "key9": "6YpiGwajdHGHEAeaULGFSnzZyvL3VxvP7ojuMF8JkM51FMTNcBPBfVVxegqYtPxbYjQRiTFerb2zRCgi2be9cTt",
  "key10": "LG2b287JhFtQLoafuXxponDyZ7bA1T6hPSSHjLuW1dYGUPMC2JZPnMk1iL21rYRNhwjX8PzNE9i12rne1Wh4jAG",
  "key11": "2k8tceTcayGtdhrqD3dooJFTC7injZBkLEe94b8RBXPyZvcXf4948yLJcFH3ffxpxYrdSu4vsMdqRLCXaBAthkLm",
  "key12": "5gxEZP8axz3gHCnnSAXdAZkozGSVWkJfcwWaxuPFuzuptg8Tumxwqf5xmd7CQi6cYaQbD5aiL5bDWgsZnxBRMwt5",
  "key13": "t9N9Ytt16h8LTWo9u2KbVtZ7XVVeej2iEVcrxsbFXL8dx9VP6kRHhT1EQE8gYMYhuZexQ5NK1tXzGBk5eEetGDz",
  "key14": "54BYUrQPidRaESjXoUTmQM2LrMtaPyWzFEhCe9qz6feyE4sBeqcT2cerTrifANbvXC99NepQ2Y2imWPRbTERbWur",
  "key15": "2ocxeQ7PGMAPv7tz9ppo4gJm5U8K8JHBvEjwUb6CkPeWyrKKTWfGi9SVC3bFCPc31fqwP6tBbL6Wd35LqmG9yDEN",
  "key16": "4FxUA8q4rjiqVmH4iieQntZtP2cbaVrKZy4nV3Ddd3zrRe7zRCzDB7P9GPEEmhrqUgYkgGGas2phZnBPXXuEgjrk",
  "key17": "2vKQrJhgENMjNtZtnWDzVQbgmwmEF6DfZXvcTw8RrRdbC75K8T8576D6PHPyBM9WRRe16xbFiUs6CLjM2AWTufa1",
  "key18": "3boZ1UzdG6apWXYSGi77MAWroTUCRBsmt1238u6VG6uJ1cX5HyAKfzAZEdYkGM7ftdd7ueWK3yqRksNYY4sezZzp",
  "key19": "4ZAn3rnDztuF9TmaR7pAX83Fjauz7kgjqTLygLd2CLD7JJeizXEo6hU2ZBJ1rvPukBrEUeYVsVcMVCrFNiswdkM2",
  "key20": "5P7HLo5uf9pYujqaVYrRSPQNC6in12iJgsb4FKsoRdEqRtVNcQ1TE726QaDfkL1bHV5Wydu69vknc2kyzKWNSYf",
  "key21": "34krzHeytmpQGZFnnr8x5F3XXmvnvQrLXnmPqTwMJ2DGkW1xstSiCA1v5t8DLYGbv2Wk1nUQdYzUPJmQensYDPSF",
  "key22": "3sUrL9kiQUQSPV9uC9GjLnNAw91J5QjpoKah9v2aDAfNvZbN6EfnNdjRU4CjwCPmpkvjFnArAEVdByjk9se5WtUp",
  "key23": "2GS5CcwT61oCcSz3dpiksNEVAQhaAu8bCJmaCCV56CiA1UG22Uu5dprEUiLcG65ZUu1gswpMXaaeG9bocesLc6do",
  "key24": "2SJEVYqRiGqEkinqGKKFsgKL7c72iz4vWnTDrB8Rriq2vYJjUPpEyQJ4YkhLNo1E74JvWxkq1S5bti2p8ZNspn27",
  "key25": "WzCbPtMLn8CztaKahkLN3yaKNKNwE922ze3gZMujL81aopK9Soqs3W4UXBqy3YYwCTz4EMByMQFC6mMZ2MmyQjj",
  "key26": "3sPyZXHxEehqMnYPAm3hiE8EUEAvGQQvGQ5XTgqxBZegGCapjywctDNVmboEJByD6ge48UBC3dYiUvo5GPhLq6JG",
  "key27": "3ySkM8QejRqLBBP4j5eTYDkutNTNgWAwHHo42gcxmtMn6PkXaZsu78ozwatMs9KogSxvwYTLffTnDvAAiysnRk22"
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
