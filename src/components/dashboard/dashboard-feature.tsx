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
    "2tatwhaTk44mqcFhi2YHjsvBktfw4AX7gSTADf5zCqRkjz1qH8MyY8AeiF3xKoG2b7kM3H5unnYBvPxBSRdZEaJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23nEFGxUDETKrLTLhKw2pEZfESF6Q7ST5qtQoapm6R2ne4Qj9Des8mfSLYf2RkNfrHjdpB3mw3zba5PnbgHQaQpy",
  "key1": "3kNb4YpXKQPAj27aiEDzmwF35uTTwaqo1rfD9xwSNaivWe5H54juoajcevDbaDGFHTxfJqcyn5xFppkuMw7BAuER",
  "key2": "5uf1SdiviDj8JZcMJA7whCepZt1p5jVTC3jM6B25s37Z8k1ds3ZZpvpDNZs83KLxW6zo1X5SEWubcXHt7efjWpu9",
  "key3": "31KMAnU4Hf8iAxN8SNGUWqVhp5TGhM7Unw2uftQ2BiqgCuA5oY38vUW47tmSf7XSQTTLexJcjSe5T9hwFUHUMsWZ",
  "key4": "qzSyy4u6au6ptuW6Z5qryK8PiwXQDz9hYctyj7jgAzdeUixVNnTQH15ZZzetb1LiwKmsQivR5j48KS9qvBKccZz",
  "key5": "5JVfTDn447gb1SarajsjjAqLAhMRhkWUcg4tey3UVTyv4imzZuq99S6frMRkc5z3RMHcRbjc3oaCwr1QuUt9Yg2K",
  "key6": "5Y8s6w6ravUwtErh7vG6KdS3fzgsCNA9qMQoEkKHPPeJYp9qyr85JgQZjreAFpZiXarnuoVPW7RJBY8zwSaqpi5D",
  "key7": "3j16kEt35qt15xvh3jMFZHU4u1RmbMj3zaMizK8U7XXMK1dmJnbu5xJr5D6Q7DMTg1PUZVvE3eRDnX38rCh1CrJc",
  "key8": "4h5bmrMJk1x5HWMKRvkmiHQY8WrcSRWUtnJ2DGLbdJEXyMBekn1wxu7HHBtEdJ84Wk78omK3bcoXebcz29km4tHX",
  "key9": "52oEnMeUU3uXLeuT4jCNFt4UBmY7wJ3exFmLM3MmcCJDpLP6kqTkEAiNPfxq3GirAyfVj56uFFHFx9J4bLAzAMtv",
  "key10": "2N3s4iwQ41dubsuVWqxXCYoAWzQPjKxTtRgQdrcgQDwUG6BXZXnb6g2PAwcSDWdanB2ajZm7UkDNpsff87uZVM3q",
  "key11": "3PbwppahkwRcVqr6nb4pErnrMbFBJLTu6RUMYNSg64ed3mUURh6GkNctCumzuwjHgaCk3TCtd8fYDjKqW6JjvPXf",
  "key12": "4Yv3xCUWVpvbuHVUx8FUfosEXMwCjgPfkRyfn4XoVJTd3pumTDpr9sdcDh812vP2Z5iEZkWBrnjwSsRfqaxe9hxp",
  "key13": "3zgXhnAxCPgTLbBkkcYVKjUiEpGJjBfd6DGdMhuD1gkBVBsLsB5aL5BBEawC7M3v6coBbhrHtReTGe9SuK2dUBnN",
  "key14": "2rfrgx8utJ5MCn2sQyxAhJVy74ZgH2XSc4JuCXjHaUkDW15cMg1W3RHSq6NJv8VWELsCyBQU64wcNWTuYcBoCrSw",
  "key15": "2iEPHxE1tKf13UhVfwF9SAyP6cdMkhNPpHGMgmc6H7Pfv5PKNsDFSnJr2nWD787iBUjT4mJBWeoLjecKoVh6k7dk",
  "key16": "2LFWhKPpkKKD74CYMAojLuDWFCZGrWYj979T6a9ADCBQCTaFFp64ChwmGEgVhjCKCM7qMTyqoN6BQrZuBpEDU2CX",
  "key17": "4gg1uht4vCzCvAG1KvsX2B31vntfmgVER68goMQkcrCXGcVewxn2KTsLhpvPyx98xbCmDcTrKTWTDSrFuPiTefL4",
  "key18": "2kzG9Y4Maop54eBH6xVDwukeP344CG16VkNiGdA8apNjQvrQEPfvkvCY8abG3C7mSoMo9JZszRY7kzmyv2Cky8mu",
  "key19": "4tveshk3JMTu3D9fjb1A7sS5t8wCa8bvsrUAa6YdgvX58QnmEoSrDsknRmAwUqmdGRvL5V2qh52xeLGBm7ELQj7k",
  "key20": "43TL7TGCJxutGpewHeY3YCWkoZUTdGsQFYcoJgPp5SUF8AUne9PHRvGV7Yj7vR3WknbyVXSRiaQ5EyQTVaKdhuZ7",
  "key21": "22QGzNkk97decYjcaAgzbaVPRMRS8kM6zesypqw7BKreswThw7rPk2w9cFZcQh3JrrJPyMfkyMpCXFmCUzrq722H",
  "key22": "LWCPtXnG7UBu1ktTtu5o1ASeEuTE4bfBVhSSircwLtpFwVUrrsTXT8SKWhaahJimRdVPbk73JaGVGKEMF8ttz6V",
  "key23": "3aFR1Mu6Nj7jSXDVqQJJ97b5Ks8QC9aFRSA5qABy8uHW45Q9ooskSpH8F7ghHEkXh8ynwCbWYwZRAXNmyh13PHku",
  "key24": "W3aJxW18o7cMabB55qp7Yj5mwhKAg44aJeu6j887voHV4vCAM5eEAJ128KUF4Y9PTtGXtQ855LYGajk7SmCrrxz",
  "key25": "8SioNnZxRB8nxeerf3GkfP6ZGbfi4m3yZMLSmceZx5mSYnEB51ojwwPms7y6Yz8NU7DArYorMpZkx7xPiuiLqAQ",
  "key26": "5CrN2aPNYhen51GJ7HnuMauEBe2ADfUT9pLs4eYDx4YU5pUYhZAx5kW9G22anrG2xgVmvF5hjp4Z6DcxKmPpTdEM",
  "key27": "4FEguZWQDkRpjw1qDUoSNze5PBeUEQLAY3pgCftFuHfRFAvPrnW9Z4S9oQ8bV7ig4WeBj1g2BmMrAWNFRmfAEoPz",
  "key28": "5f79NFumVyQSwhZJHPhnqEMLiDN6XPwXY9pdWprmaN5iXogHXZrU19B1xDU9dQ9Q6nbATcmv86ahpukEJq1rNJwr",
  "key29": "4g6Wmb57gS4v7RqXZoDnYhfhBcoj52XKBBVokgdFfaM1FnFgvKrNHQ75fJiTj2P6ZQffpuvyqyMB3QTEzDvN5pA4",
  "key30": "4sG3Pniy1fhhtrLCyma4Gpvewzw9BVXLLw7vKBbnexz5PYxaWQ31KG4WvRkCH3PWfM5nhRJWhSDfQVAVqSJEWwCF",
  "key31": "2kyKhJkUWJkVbB52YksJkwPXNqKfUJ3MKamZiaXmBvSR6kQPQd2DkeYfM1ZyxE8u2LPXusq9k6aNacq4xyF7XWHi"
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
