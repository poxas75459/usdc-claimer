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
    "2aAgqei3K2bQ8jYczXCLqGfRKwjwRFqrAE7v48hCSbAFFDMPiujhu7yCXJHMGfFimJzS9Si7SciEwdwSJU3eERsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CRtp3DfbQcBN2RY2xW11fA73kwUfWGFSFB5wpwoMrpAgHWmwVQHbaDvned1CfESvwg6gY1yxjf1YkMVVtaDsNrv",
  "key1": "5RHFj8jhuVzk8834p9KSirMCx8v1qZQmmdQNEqh4MKWZoTupYX7ZMVXdE91hhn1vKTa8pxmcunh1K2DeFXRksrAs",
  "key2": "5ok5mFgqjM56nrvzpYtD2HNwrcWZ2mHwwJ8jSaZesnJyw6Ly85DtFzj5sCdHZnFKVtASQgzSUaucyw8xUMaU3Cnm",
  "key3": "KA2MZM9dfSiM43RnbCnpcgQHfReyFtp5XujJCXBnUbJrCunqiQ4u8fyHEx56QSNHAEUrgEGGntR6SGuvBvH8tNR",
  "key4": "4TGA4a7DyAJnbrSg4PoJBQVwBtkaJh9p3W8HwSFcr7fJyuu28dbq8aBfNLq8psA93ovQUDs5GQvDVnQ7RZYMUKtF",
  "key5": "4tCPuaKbBmT8EUnkJqCFrzoZhZcCbTGWUHNnYfwVXtXwdZe65FJzy4w2DwC5xVJshcti6rjNcmmUeAgJwKt89oBm",
  "key6": "5FZzSprFUVCcsk7yJEpfh31C5hGgqGptQp83doUhzTT81Ce5orn1EUB6FimUpjRnJtkPC3rWmUiSTom2kakW2Aj1",
  "key7": "oK5omnkVuH3DUsXK3Hcb5hScaQX86DCANAHKUCbDUtaGZnBfeqURupXWiQHKLawLmi3DTcQpgnCVm81V2rjFQCF",
  "key8": "5FoMWkpEpRWvCSnhNLKPemUnWcmiesj8nTqPLFjfSH46WH4gZo45ELUizJPYaone1QA5sAnPY18YH9DQhsQTZ4v4",
  "key9": "4bJgRptZ859DqTFxubB5KFAupz32HunhYtxxtfQEiEE43NioJfVgrbkR2SKj32fBwzmhXxgXKkHHrhEePbwboRMF",
  "key10": "2Z9bUuBptELKhEYPUWjiDUSDXXcgQh7v4CXcEpyUgjVMq3pxHMDKoe8N8rMDPtQ5XwfsTceEMLMEaTKQV3LREDpm",
  "key11": "4TFUVnStXSipYcmXqv6UszbuwQ6e1UW4Y3HJXsunoBECLj2U3jPoKxDUbdwmouxvwJom3sddeEvAqDCNgsh2RkEH",
  "key12": "3tk3Ao5SSn4xvnHTm7yRZtr1xSSNMmjPcEGjHdDB2f9knfT9JfdwSKXnPo9FsdiRWFMyQjMJ4EgZni8J9K9PJhpa",
  "key13": "4pC7KFaDb79GEPHXDwCJKvnTnxUepP57mEqxmcyFZ3fmAmvkcvh9WvU8he2iwRM8Ff8jbbAdJDjr5KoWKTSqQCuz",
  "key14": "2Kx4JgbbwQQYjdGynkzR8zbVYpnYgwxurnzvSdZBSzk5cH7SBF77CF9jUUoeDPRUCzYugsZ9vNYwUu4gfZzo7JJW",
  "key15": "3VdJ64yRQQkvep2C3zBKVvJzbbcieTn8YUhY5sq3gn74s9UbjoB13ECQdtx1snjiB8eCxZ1hAqtdmrQMKJpJwXpL",
  "key16": "2X3th7i9qP4zaPHYXzqfWAZ72StjE5G4jNkuiFEVhy7KoMxp9W4sRWNRXjwwfrmJxWh7gunQT5bpxoUiXcAb6Kfq",
  "key17": "q3HJZUVECYjyDmY7RpxKgYxZKYKa79xwSW5gv2hP4WpwKsCRbuwWLhk5RRSW9hU7aLvmwrq1bYXvqJ3s6S7MUNk",
  "key18": "4iBwCpsTADpQGgd7GrFSCqjyn9G6NqR5JN31mH1gm4jgYwGvzuyPF52UpTyEz8YhyajoFmwhVY2oS7B5TH6fKTyp",
  "key19": "3GyLv1L7neXotrEgeVGXbDXT1ACRShFazuxAxTrySmfNAr8GZm6pEiW9mJYv9PNBqq2tkj6y3cL8bgQdffU3yzfm",
  "key20": "NbQy7hPd7jJgr4Zxt73AWrHGuvGT5LAGUiJ1opbRc2NXbyP2bYrjqa7EweEnhJ5G98UftbHFyV6N3QUsGtsyKhD",
  "key21": "65wcHM8N4yQCsCYBnu9EavhRGS8JSBeKPVXpX2JSdvKaPvyFB3XT1zBxPewKavUo7Tw9dyQwx5j31A7JncKiBYZD",
  "key22": "UWqFu8cZVx2TNG8Ayg9Uz9ptXceBy6G8f1gzmEvxbMaKHF272ZVmtkuerAMutTLGjUcPiEjak1Ejes15npkaqaq",
  "key23": "2FTQBCVERAQcfEUuFcDXQ7N7XWogLwpKcemJbQ1hSxCBEMt5xPU8rgLnVx8M6AbMU8ofX8CdByAHRBkDJQFbudFZ",
  "key24": "4E6vNW5JiVsFW6CgA7pCrAgj4frxWWRzN2ydAHwKpmU4EonbrVBNQRPKfexF7B2wtkKoYJu9aefa68Lj4vSMHvS1",
  "key25": "25YfmaHYicaw5eJ7VhLoVyp97AezbVMyxVNhM8kYM7pZyfbzjXQjZA5R6SoYosNeo22kiWdGgkM8bAucyNFn6pJ3",
  "key26": "5ukykcN3bLygFYeR8eppisAi3sneCcdwmfoSGeweX6t4ze8gKXPR83dHh7v9MPRzZ9ocpEcyp9A6tFwVNrLnZF4K",
  "key27": "5Sb9ytj73PiAK1FHVeN3f1i79k8dc9synsHPmz2k23J55L3WR7GjV9kcca3RPdicwH77ok5RhaESFF6TSyHaNmno",
  "key28": "322LWTeCqdzHWjDspxftpt4fC6drsEFMCcZu6iDkNcizS4cdKvCYuTac3V284MzmeTqyEiwCxDcrrhF2LHFeyYds",
  "key29": "Jc9r3SW2LuijSvsjgWVvtjexnEHAmcABCqhhrrxkkXMW5ZBxBZimkjrj5fzbsKAG6NcSkwWdN42U11n7n4mMvhu"
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
