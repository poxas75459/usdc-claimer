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
    "opwefEj8N3eSA2GSxoNqBiJjhEhUAXJuiRu61nNiNeQA7c4NMAx2jmntczz2yaSCExJCBtetDXFZFpZCQdbygY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y6m5bmwoKEqDsPjkNUEzGoRn1vHX8UwY7vsu1iVbN8XDMvidZU2Eei3dPTp62Z67xPS5ZqnJeBJCRXmWAdR3LHj",
  "key1": "2ZXC4vXn4qB8KVnVBC2WjVNXRPG1u6afTNueEdeiw694xTRLBeFmfTZNngta47bkwR9oiatnqkvJ7L12o33Rs6yC",
  "key2": "3Em46sXxumKKu6tCSMnPNFXqfunH9vVQnGjwfY7FT98uJNbJgKzqXd9fhNjZ1xDWYwZ7m1dRxVegFE3Y87zPd1Jr",
  "key3": "5wQVuaWfgK3goC8PDaH5apJTZoW2KkTmXJGsGu3micEXF4boGbRtB5hqZ74eartSqauN3itT4eGAdD5bYdz6NirE",
  "key4": "5fttbvxhG7dFT7Q9NYy69DsbZT4jVnkSfBxqUp4kKWerEQqH9mxmHK2BgMeFQHxE4m8pAZ4KVixoVJQTsC5FtGrr",
  "key5": "4U7f85g1DG6DKZvXoBtyYqPDpAxTYnpz7Qir6JXYmvzRkB6vbAWfEtNzP7wh49Yiz7DE4DAhBktMYkMsy8f7VGp2",
  "key6": "2VsZmuF67B5QqmnTpCyfcJAJ4uZ8K2cECz6HEW2hCp4gAkKRKvnAGgNYw5ZTT2t1nfxJiFu5vRkNpELEjvwuP5uA",
  "key7": "5JMrQMaCWyyvvohuJzbmRR5e95tQeR4P33ByKXV4c48hsfHuv3sKkD9DMgQcr6t2zj2RV4P3Yj855LCEtL7kWFnk",
  "key8": "3CgvJVUoiw6NmPwRysFTGeL6STnfgtrye4MCPZdCtBt5UxMNjquzjZKMPguAgwF3AycJ2oXAgB1zxTrTfNQK8TBy",
  "key9": "4komvKgxrLf23aCPrWtPd4r8PBVbSzDkYcFJSrEL8MzhLbcvY36a5MZYxxev7TzeEim6nUfDkmVFUwvCgp2va3D8",
  "key10": "3EQKAhFDQTWy1JaR1jt3RdpPp9CUA6D1uayNsr46FkPCXDW4iHBj2i3f1nEaRq85Nb3UG9vcNUjPVoRE7Rn1Dkjp",
  "key11": "mDeEvpTJfCa8id9XgC42BfYM12NSCrozZxZWGaoT2EhcAReKyqhJje9sX8S58JFx86zgji39motX68thKPqMtJ5",
  "key12": "5UzcZA2AwxBW7MPid84BpofuPGU84129zMp8mKxUD58aPhcYmW8gpmeJPjyN5RbnDTi6qPBXESuEcbVsPohPHnpd",
  "key13": "5akhR9UXieej23fDCepAeiGJHspH68ZAhKRPYMiUJMQt417yrCdJ8WLmrepE5122W9xd8B8SUSzFuiBEK2zMkFEe",
  "key14": "2jyY3JRQCzPPMzL2Zi426jzCMnBh63dfuct8GjhuwR3hfagcjWHcWyYfsSea57LedNJdrgWZw5F1gyq6pBTuR2Nx",
  "key15": "5a2Ztw1MoEDtBDuacMBCMYHTUvjhk82KKYKf3EetHbMsuztLa35PLy9N34gVdwdYq9NvewaiJD2CbEHrZRCkvm3B",
  "key16": "2x69zdf3PUkRDWwphW1MZKKPUesGrFFjZ1bNrFK9iLukUQ6PjdqxxcD1QDHntnyYYs85EkmwDfHqobRMqR75ESYP",
  "key17": "Un6JaPwEs6qxC3xPj6zuHx7nzWmU7Xe3UzzaTsBUXqH2Lfnpo7GAW5HZeW8bvLdov92rmERmxi9XtXVDWpJuq1W",
  "key18": "2krxXqsfzSREF9AtAeCvThBsjaf9c6fDXwovJxM7XZtfXNLuSPoaN7abZUte1ngWspqih7GBxaXfrLfcnkcagYcq",
  "key19": "5FDTWKU6pECC9y3aKxD65E3Ztbagrt5d9uPurVJrAyD1Cmj2d4ssfoRcye7fh8iR8vkRJXbvDtRa6cV2bCX2cQLY",
  "key20": "UYSJyFKbreijvqXgVJWiizPZyK2Za9qrvyJ5xofqu5ZoxzVhwzik7rWiFoYHDgmoy7hW1TwMtTi2cbf11FHaQaA",
  "key21": "3yVGoFb8Kbkg73uJyg7cfK9BYCnY6CZ4dtHC8QufdKHd1Mh52NfNbrfD7Mu1orbzwVZVe7JdU3ALaQc6EGDETWa",
  "key22": "2xEj8vSvoexG6UAqDpZPFxJF3SLtXsjap91HDw5Wk1gGevcmKdu9phGLpj7aticiEtJsYsGmbBTvx8g1pezzXE4",
  "key23": "roHNqaB2a7o7kF72emaoGDuDTYNpKA1dKUGAECRaSgK8oZkSm5xaGEbcZ5QGaqmyCKnP4SmLahgV1hdjqRB1UbH",
  "key24": "2cfBJGVnzTr4ELaqeFg2h2sPysmMWpYvRMt2AbKug9X12oPdutjk9BFLZPui8vbKsVAGNePvmAggjs5GLQiaVB1k",
  "key25": "2CskynaqtLGwcQ9htK36W2oRb2ubbcX6xuovDc3WeHTDiBAFCSkxwtajCE6X6RByspN5663jGoyyRDpgcsXr2FGA",
  "key26": "5wMyaw9B5iD49dwC88YSxskiQb6f3AfaEegbLBASCiB9LKZ3aBt1xJFg4A1deWApo3WkhtiEP8g9ZimQz4rMcooh",
  "key27": "5Ai1kpWiMvTTLXAw2d8142epwXRNmty8mMEDsPDmFGWeX24b6a3FghG3tN3aUuMU34U6c13UUiCy55Eo33eMuzHT"
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
