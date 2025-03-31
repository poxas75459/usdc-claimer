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
    "5BomKvDivNko4a5HPmeXnnvwRZniDRSA7WqMQjcPa72gMfN3RFmqDaSBW4JPHpa58NfsdPyq2argY6Sy2npXgqAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EQVDtByrocWNq9JoHGGVxwQyvznJjMq2hJNfwnyexJmgN4mJNJyVVgS66eVySXDBUwReLxaESdtv5SWAKHrBCQk",
  "key1": "2CfBfrszyQN9GjSbw76cNXYDrr2VQtvnHv1asvGAk5xyK7sko6hUCr46Exo5dxDLoytGdwu4mdZQjHhwmQSZEtGD",
  "key2": "4J1ZgWLxasQYXuK5dkTgJBxQH7QCEwQqb7cfzpVHDLaJmou5GvrBJuQu2nJdDAuUJxtCbkBbMzkboRTU4oN9yrRB",
  "key3": "4T4hGqC9rNsXbC6ui5ViML4mnWQfWr6Rbr26LRj17kwDvf2QkFMxNNGjQBghWm62AxSJdPGTz6TWAYNUdy9RWzKn",
  "key4": "2FmTRoYqzfEEA86ZYvxhCXRZVCLTmMTtmaJesbcoCWnvGBHibYr3vT2yq9bwMDd5uSV1yBwXkMKaxmVEoEZDxmzR",
  "key5": "2hCBuSR2CfMYRmqHp8wEJsfr7zPwz28g5QP4LcWxCYmXgekUy2bCkfkNrs1NgdxfZx6pHoNg3g1htisFwY6eLHpw",
  "key6": "ykFmh6MMpZ8xRsZbY2xjETFHx4jLE1ohaihBb2A98E3cL3oVYWNFwG7RW8fAkGQjFn9oDDKw8nqhc9GeCBfJ1Af",
  "key7": "5Zcr67wwU4kn93bToMQ5pPUDenUw2JY3n7TsQ2sYZP6wEcGvL4dTaAid3D46kAnabA8m7YF6rw1DuDw31SUtb4pR",
  "key8": "5pgxC5j1McsuZq8kUbsj3Le3jRFjYyWmmH8W7ejRdnsi3kdQ5uFFBavNS3pjdVJVSTGgLHobCMXtLWdx91kU6ML3",
  "key9": "2LbTkMUS2i2c2Ep8kRzXFmk3AcpW3KbmYJmZ2VrhKj2n4opgPfBpmxqT8zAWEAYyh77EuBCZA2DFqmUWqYtUWSgw",
  "key10": "2bEQ56F6kUSacPX6kHLJPVzUNDg1oo6vg3U5MbkuozcrShbUa7FmL9vogz2JrWi3PfKKzFPqA1ckWbsEdrZ8SPy9",
  "key11": "3E1CSUbs5dGq11QXWcSgpARUYJK9atFSDkJwdtx1KN8SaR35fo3HMLS6s8K7oemnvGbUTn5esgTvBwtSEqWnRyT8",
  "key12": "3RdUmpEnpikbeBAedh3efPvnFktcG7MXCcDsrXXaT8bwHayiLped81iVmJCVHiiRZFogkNVW6jpJvgitknjvCHF9",
  "key13": "46XstQp8qhyzdByevYvo4e1D94rPHbUGgGhrjACLnFhExLmiuDX2G3rskUwDk9KJtyio788RSFLqqxoSTWmGCfjj",
  "key14": "5mbUNpDfTy5jpNeVio8nmUKnckhiQFAJcDSA4fPxabbo54ARMRVSdQ6YEJc5svWwyhMkVxrSd56aWQS4Dysxp5La",
  "key15": "g23DaCRbScTb7NERcrkmEMRWb1iqD69mBCqs9XcySan8ErQLn5PuV7pdtuEwjqBx3gKk7iqLAC6U4wkayuehE12",
  "key16": "5h9ucYx57DyML35Ee7LsfWsBALVUVjdMnbMUMHm8ssTheL8cp3oSm2eMj3SN3EQUe4fudUJPvfaVGtFH7YqsCtHm",
  "key17": "5ii6xVympwfq2mcFmrqPGE6M9fV6Ju2YKkUnoRejfaL1L9nFyKvmDguedxrYzCBjfc3cumzjMmWv9BW2gZx9Ci4o",
  "key18": "PAz3rVsdSLe3hhdAmR6MuzRt89GVB4JngEuPKZdaNw1XtB86uBZK1hWtCRPzfr71a269Uw3fTp9VaUTpStwHsyT",
  "key19": "2GgEPNQrKHjAxwKe2D9dhNnf8JacidVy11FigFnYhLPCHfUFPQCppfdwLrnFdBZE3T9HwrzgA57LrbZftQoQf8Gc",
  "key20": "3Ydbu6mqqKWpxkkRtptgDvU7EqmoEFT4W6JHtwQUmYw5QdYSdNtevw1sWMVSrpehu83eEQzkvCqUsYT9fYc5gQnT",
  "key21": "2U3yCmWV94EeWwYEPEA9ohqPn5wX9xDWnQHyUENY37MdxdqGH2N2ctv2H2DySd4bFQT4ZYGUwGQvbKDBJXCGNGp9",
  "key22": "2yehqCNHBwXcYf6emQAD11h44pAgwHXqC3p1LxEfMncNwxtFPJ5vb78Agt916x4QVasMGiHKKZWaSDSZehUtCVC8",
  "key23": "5MfQzTvGXF5iB8k29mmxxnfFscUpEFuMtfTTWTNc5b2vUj3WFVmqUfSsy4B6JbLmqCL8ewyL7AiszsCk65xZuobM",
  "key24": "3rw3oPmqrEdQvZFpDqvETXZR6oxhrQuoU7ryXes99SmTQMsKBcRSZVhD6z5DniN5e9tXdepaRQLtvvj5i83gtbzs",
  "key25": "sT5ps4V483rFb5pF4oJkNVsVagAhEWBY5wRWQuxsvBa61XAvgtR642f6tT5PXx88qL2uwfHJMHbCtEG4f2ySn2W",
  "key26": "4xsrzr1gnNAmYx5uWF28zHJa6w3npaUntdhJMXDHVL1HNufc4NTUSuzuLMD8qtmwL9Wb5W8aoWPVfbj63Kagke3W",
  "key27": "2HgV9BZers4wwjbHWTSapcM3FChLqYnDXhe6VUnhRj5oS4FBB7J5UpsXqPX1TMyUJUTzbwFkeGCFVchgGHztv9QB",
  "key28": "2a9Aw3zmhX7Ajcgqo6ijJkgDMBMgg1obBzopCiM2Yibr3RSgrgzjwA1orptNjp97FnwFVovtUrUbVcc3uDVbWHGE"
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
