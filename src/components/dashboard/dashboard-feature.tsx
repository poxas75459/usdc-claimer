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
    "3A7g6DNqCXY7hoKoN86S1xEZk8JPtCDtr6GhunWYZEAgU85qkBCazpQN4fRka7CVzR1x3mQh1KVpUjhgtkMtcDpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gTVsTHhSomg2r7V2sJ6MgejfQX9SL8cbVLDDLbTbwE7N8MsRba8kwZ1XFedKfxiDSEKzMCzyXQjwaL4NeoRu47U",
  "key1": "4zoZaTkch6fBwGKvCmSW2dTgt9TEneMHz5zqRjNXd5mT4Qu7mdnPzy6VXNAaEY7U3EsUYcBXBWEHa5wxAScDC6N5",
  "key2": "5SzahZRbZb2doa6HSadNghNygnExo93aB1Ve1WFRQYQJ8G8C2L9H8ot67nzTSXE3TNDsTBbJ7kkvhw35JFPtCd8r",
  "key3": "51XSFvpFCgo9e9GxyrgKREPZxSNVmVkjyKq5Nev3xzm69yfA7EJSfeHtJRhb7AZpZpKhiEhVAtA8pjFggkqds8i4",
  "key4": "3MA2ZShnHV3kMMxW5gRZHMzjB8tvb6UgYo7AFg5QBwkgNpqH1aMovGeXUA1mEqsxQj7wrggQYFjt7arzcAUfhNs2",
  "key5": "5YenUUiYA7i63umtsEywHqWXkFJQLwVNYAKpypqq6favaANUezorY8t6xA8aQZ9sVRkLfq9tFAHCnPyQim15wgT6",
  "key6": "2sPyyuTuXJsPjvBamd2Nuoq6mKxQySCNfW6qRJvqKSdKLT2X3dVAtdfGLzCC88vUcQnChPcQ2GYdu3pos9yiSi4a",
  "key7": "fQq2L7WZKFZ3KyHWpaR5MuevZF7pAXoJcgXotaPtstmJwWWALSATHwuJEeMt64r3aT1rsVsdCJ8t13dDnPg4k1h",
  "key8": "4yA8e4uYGzjWhYrgpmNGxAoTSAwSNY8EVakrczGbhauNU8vcPLCT1kmeegufTwehQuZmK4ebqi9xhZRyz4BS19wX",
  "key9": "3KqZPNepbb7cN3AkFZ7fKauTskQwxMiwYDjCzAmJSS7NbLDWeuZPLrtVQLZMDGBBUaJ3fN3113z4ZdKshUFRL3UY",
  "key10": "5DfM9AqTX257hbFNFsRwmF8wYi4eVqELnnMArnKrhdzjF7HQxJx9kQbnLbcB7gQ2S8hxxFz86eDgtsxskwUkb3ix",
  "key11": "3nxvYUypNDeV98CfpgC3HeoV1GCNHYygmx7Ci1G4PEhcJZJFcrsGCrjvHgXVu9jAxdugZRhPQVhfpnwHgYWA7CFu",
  "key12": "7sXiRo4i2j5Yej7BtRdEtLWi7gcnQjsxiESBAoeytaPUCcHk79t6mFVSuT6tcCxWN2JVXgH4yjcUUFm3eM6juct",
  "key13": "2EPG1n5BMDinHsHBJ5v6sVcPuYi4JgtSaaSUJvFWVYsJ3J89DSkW4xXJXx9hEKKnjkS8Lz9A33qyqzp6EGtbjx2B",
  "key14": "2jm67QGTs1PKNZkJc7CNr3Y32yCcBQy2mfrGivGaobVhv1FjgWdnxNJ7kNW6Cgx1Pb2sJyomVeeiAiG79hoMqery",
  "key15": "2NrLrxPa1hJzU73y1RRs8CtxqEhqC39NiBjt3KBEMTuxT1PuD7w2hkQHrTeLGeKhbXY2c8SDpySRxbx3VXSgc93q",
  "key16": "4Dex9hbCwQQcnxjywHT1F2E89YJW6iULEs41Bha8mfsGW4omscN4KiumH3Eyz4rJB4JtXMjaHzjPhdEC9Fu4Ao5n",
  "key17": "3bRs63Cs8moMkatBsVCFMGkFD4bpJLAusZtd2dSWMfLzqLdiHGuA5KeBLgmQzYgtjcH7ABLtCg8KSyKxa9S4T3M9",
  "key18": "4Y9kkms1gb8iAEHPjyzVnWtvCzQqRhao9KBZhaQqpWWAu5ZfL4ivJSNh6N9DiZYdRYfSXtFFg8ohbn5ZxLeWTmm9",
  "key19": "5fw4hrx66Xg6DjdtMNouFV28fxqUAHJv3eVRPcfDuBN3rids3m3Ehz2XDQcGjkDyQmYH7JxvRrKnvksFU6MJvzTs",
  "key20": "3J2LPb6uE37nLcE8xnn4A8czYZ6NQqHBCrKqW7J9tHwywBdgQ3KQsBrNxTs3kNtNwyJE4Tdw1hujDb2oe8LSLAfn",
  "key21": "3okaMcPsEU6GXajsNCQuFAXxDM745jJktAYoSHCQ11Wjcie8CReW4az8ep9KKjKR35MrzW9395ZEFWBQF4seVvuJ",
  "key22": "2FroaiEFCKSF6hmdyXUuLgW7nNCRw7F2bUYtqCUgLtCWSkSVJFAaU9GxZ5gBDzniimzBr1b3ceFxVm4fZFNUJ7eW",
  "key23": "2DJP3LdPv4FNuhgin51VMB6jND1uDt3x4HmtFdSdrZUZbCk4knkiAQkjMYsZcUg5ASuz7nmyQW9mxrpCKQTrDPyN",
  "key24": "5oL1C7fDfXhSyVUPtxHRdUU69rN1uHPXkmdVMbXg6R4HuuWPiaxGELc8jdFPsr4pNiXhTbjGoenFxSPGastpMbh3",
  "key25": "dU7KGfU32zio46DpdjWgCZFKw3MuEoND9bkCL2QVFgV646XJKue3zhw28FzJthkW2nFQYn2CVihm6HBMeyTZvPu",
  "key26": "4xNUv56GzPmbQ2h9hkLvjB1kafJK23biwSQHLdUw17o91YTy3bmnarPdHr71H3TMovGZ7DdgsKswq9LKK5ytDjAa",
  "key27": "4GkqUwV2CpJJXbVmjMpN48Hf687onsLVxzmAc8jKcG12NULRqsjQZwmuXuzP7Ad2uhcLHmbPuTrwjZmGWGYB9viQ"
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
