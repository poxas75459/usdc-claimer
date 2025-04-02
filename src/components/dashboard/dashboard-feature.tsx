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
    "5E9KeuPuwxHqsDV6H8mkybRffsdxmmxLNf5fgE4SHNgoVHQNWQTzLX6S5MPVi8XZG6EyGzh9cXpnPt1qvfpMDPmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FNUTCK4GPk8PdGEDdqRp3YdjxU5k8wJhHd8kSBhbgKSFkF9pJ8upYLcuZbR9qFBw7SPCsDj72JAZPUeE92iN53N",
  "key1": "5p6ziDGPyAH3ZH1ybZKiA2oLeFdpTgTiCZuMpvfe2HFoiEieei2oLMaQRxxYfZLdpajF7f7CQbRnLVMeEG6MVDw1",
  "key2": "3wUXWFDAT2vQXAQem4JhE1mJdMb9RzRizPn44CcSS7TWEem8MaPt3h8MgGEFKSYxSd8sHMbZEZjapxpJcoieAP2J",
  "key3": "2Rko8w29XeouzA4r75duimwJkPPDYnAXQmZDzEiUnpDqvEr98ozu27JWfoQpZkiFeF3g8ihn8GbaJTLAhT9YX1pv",
  "key4": "2C2T1aY1p8BXAgFd3GhohqYtTcpcwaZahjtZNqZ9sJh8FCXxt5B3VvJpyUFE22Hn9gyC2iYoQ6HdPzA8CXEmdCDv",
  "key5": "3rxdPFE9ZER62N4Wgt3cHpYdCC4ji6DSKeBitTLkXfkUk2RKbsyJ9pg6AE1vxSz9L9yXeSDMJbLQepb9czYTXHLh",
  "key6": "hRi3PBMCs9wNs5FX4cAwHKsMyChwD9sb5zwgHSY2qAjmfKDvqERcBVPR1z3VYvfD4gZXoo2htykP5t68hUMsZMx",
  "key7": "3xHD5r273dPZJW7ASwNvLtGDXkBovmvAxPo9TB43gZHAqEHpGVm4fZoPoaPdFer5TeZYSvjw1kniAjcfygJCMP8r",
  "key8": "5A79ctbL5x21cTL3Er1nMvPKMyECfcYoqZxG3gxMVNy3JTLJfsZrD5SDcq3JWifj8CPr6ncZFGoapqm45hLJXyfU",
  "key9": "p23ML5ydqXXYzWcnaZmCKUhN3XMAmpfg7bq6fLEWmE4JBcGXrmSvWznzjPXoRE7xurCTfwYfazf6D26Lt6dwpx1",
  "key10": "rVVJ1VxHpy2YBhrGqAiFi5bPaX2srj4JbFQQETRvt3TSFAG5DSFmKTezYS1eT5BYCEf9iUrvD8RK282pQAoZj7r",
  "key11": "2TexgEPKE7K9NZg7StjdGDK6X3WMnK8NHdJ8c1J3LPVpjuoyTit5cZuR5sXDSQTqLqG3YUtR1wUDTTG6c2EgU4SV",
  "key12": "5UjArrUTki1X5GmkuzrC6jyR7mufizW4AMdeGwb3MsPJ8Rxq6ENfuJSAehBGwfFn7s6yFrrVQKoMVD4BXMfLQ3aW",
  "key13": "xYwfAfesx1dLuQLeHU81QGDehesrjZJMFgpwXu6RGiuywYDTXV2dvQUFoEM9RsB4xV8GGY8hDLrQLoK3VMMYFQt",
  "key14": "4QNZtujMrP7jdcdDLwXyLZcakLerHdkpNk55tDoHkt5c1S148ufUXyaH7kxWxj9KG6E9YpKNGi5C9QfaNAk114ow",
  "key15": "4uYiuoe7JyQMoe1spUDqvV76z9wGGvzxseoya2mfunbzvZRwHbdAkE6zA3JM8EfDBE5gzxixGHBF27F6yiiLiEfc",
  "key16": "574UJBTY2ogaMdosWSCwfgghrPsNB117weTShpP8ri947Ne6NZKQ4jYChTVr5s7La4RPDfJJvGUXcUKRNGD6fBjb",
  "key17": "3TPngdyi8GyAhhqVGrYxZgwr93HZ2p8Uipy3JvU47Q2CAEbupHUZ53436Wz2Y8c6X1j6Eek1nYqHekBdA2itUu7B",
  "key18": "2XcoN47a7GpaJQKwNW3CFf3UBKbQDsyfFiWgKHcB6FA21k5A8pZKruawA4p5HmGHHx39TS5VpiCeXETzkCqvfNVX",
  "key19": "RyjYvtVBR1gS4HdqNNxGRQKtzuWKZbDXcv1b39HoguPYcCWa7hYARGpbnavnx8j3ZsANWsA39qL93DMpzhW8KPh",
  "key20": "2wCpjTmnMo5yiN36jyx3vKNfC4P2TGyz4CyfLPkFgcpkYR7GbopaeVso9ErBYpe6Uv3h1upvFfgE6mznbWeSouoU",
  "key21": "n8cFyV5nqiNUKXiYBfPDiQLV7jFtde9ugZynWP728FwiWrD4wavV9d23BHpmPaEPpgbd9E6HjrAMbJAMVXiBc2f",
  "key22": "5wedcoqyjqj5xvJFzGRWPpH1CYwPnBhNoG1amQhCuANiizmAMk5S1enJeP9Hqc5iLPQD4PjLk2GDNdJ3CxSQznqj",
  "key23": "2GaB31yMdwTgx4xR8fAvNtbMbnr4g5jpdTEjjLyMTVytmp38x1tutg35fsJBFH8FHdSWBxYS68uLrEuDK5jGWtYe",
  "key24": "2Fxj9U1K2V7bL3GPVqfT2AEQ53REwZJLEuDttmRAoUZwUx3UVtZfMrp751eCFVGHdvRyZeSc1q8kEsxdjGzbNrBv"
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
