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
    "4TvefS7LFai6aHuD2iy1UEoRHBNjpx3MKDC9eXzUXTthJiN4nhuiSjpQAE9WMp2GZ1hFw9MJQ9cTUFHJHpFidkG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vVfyPb3hiFjNka4KTJ1JXfvxzvBz5EmjsUgBFxVfGKWKG4zx1Tk7Nx3qbf13wpv88RGATWXmZeSe2esjKDmZiSJ",
  "key1": "5kjr4PpsTBTFjTnJ6Lm3U4qpe1PFUfZSJ8Eyjoe3byWbhnxRw499AKNM3vsX3bh3WGeGfdVwtTgHCe8vpLwnm8Dn",
  "key2": "2uCWEDthJ2xJrieVXnQH4iMRBSmfE9cLa4UJWmxPEzJcDyQpWMJd7Cb7bxAoXSqYHti1DyrszJMcW2YYjzvZnhs4",
  "key3": "4JyUpyfwcrrycU4PEyZ2Ffq2i9MugDQXAxsRRyFoMN1Ziytmy7dFVHqtHCcjmH26V2sGs724DxHUEcQV6gKgzqw5",
  "key4": "5tJsgufSaet29dUV6TXdqZtz6Fn6MKAtmSbipDwMsZdd4zjUz8q5KX3NhMJAie63J3jH2TKJQ5xDabKYL1c4UD2N",
  "key5": "2YPVw5t6AVWpCxCsW6T9iNg3yGBpXTvbyZMPm6zgtdmG38zdpagNxm4ZVV2vSkTHvqiUQraaqt3fvNfJ4wCzMNYT",
  "key6": "DL77kquFJTfDZHTGUeLaafQY4TwVTQV2SXoXEqFq9ERiS6P5XCsQk3WYz2DUGN8MjTqfmrSeXNrWTMHdSZX2bNH",
  "key7": "4nabr62b7D7sWunK2MgTYwSyDiQTsMRGfWZKHdvrxW6gdkZKWreAh1aFWUoZdkjx68Q3LTTXJAAHxcbX1SNPKCCr",
  "key8": "5uqv4PqsgxMcPtmsf6Skoymovehpu8fL5vcDYyqp8bXSzyU6kfDafue21JyS5vQ1XqF4Cs76sEf9LwfXHY6VmCyg",
  "key9": "XMmDVMQ3y8qB5vdtucJtNehWroFXdaM9gi5ZAaCXKATuWNz7YeKFVM1ZYkashQxHMvu6YTYLm9vhkjyNG7nVNA6",
  "key10": "3Dm6nekHRUC9J4bD3s7mKZ7KftJ5MdKoKQeD7oLgGYzModjHwtdpkjyXTuNdHdKGMaof2B9wrKabE6X598fLbzkr",
  "key11": "4TB7aigCDjeeL7rnd1CaNmESQ8cDLYr5WzmToPvXMjbE96NhaxcXkYSmgYCNosNnHRu4Cecr3wGcopP5GrxcHkaL",
  "key12": "hgrn5Bd6Gz19NiuyT5ka1H2t8gb3yiFyp1hA4MHwbsLhb33BLzefV4WKmSu72vtc8Sc6p8mTx4nr3i86RaHGjKG",
  "key13": "3XHNDcn3A88ad7tN6D8u6QtaNZf1UDBwqKCjAqWhwo8U9xzKxiMWoMx3JmvYvZQGy8noJwSx13yTQ9YDRvxMPu31",
  "key14": "2bAeEmVwXi4zM9p3v2XnWpNMfafoWBQDLgQrcMjrQZyWEtZWGjk4oVT94iy1STVpiuf2Y5XyZxuYFTJymDQ3gPQB",
  "key15": "647fEY5KMQVzMVcn63xnXyn8wRR2wpqdoy1eMw82bdas3FBJZ85e14VXvJc7ejC9STW796ppR96Z2egU2Q44oHr3",
  "key16": "dPC2gZ1Am9WLwsVbLYmKTLKJ8hLky8hUc5in2PAWkyBREBNday17bkuFzsYCgLocgGuzVpYgmG9JxoYPnZnKYW8",
  "key17": "26Mx3PtbEr4ycrZRkL5sRJVUToRGFDXyR5J9qsJnwQkXexpTFJrYs3PHnjCNH9SBYm8fYpSTS8buo4PUpyijsv9T",
  "key18": "X7E7RpnRMi8KtjWfnHdzqtjQh9UoaAocXX38NaCNdoCthdgR9sxs5dA9T39a2oyx65S6519wGBSJYVSfQRbWGaP",
  "key19": "245qb2dKETsgdMwnC21N6MPgCB4fUNbZ6myG7cJQGj4rQJEAf86GdyKWjCwEdoHRML6o95ZaJ1kumQFdbYjRDbbV",
  "key20": "EEhVjN8WK115fPgqtApr5UELf1xfs44WMRCgNeeiY9msKnkGrpS737WZ9HmV5kmSJ1VaBhMqzYENRm72CREpbfw",
  "key21": "3rZsx1mj8nu6FMnt1fmwVih1upJcHHTzCQxpjkbZFZ1MG1xFVqGbzN7MdouRj1AqsUZZZr781ZTYKgKGnd1as5mf",
  "key22": "YUXwZCZannJj34U8QfkbAut6cRUmG7i3XUeMhZxeHsX7odx4y8KDFs9pa1bRmZVoWezAo87nNQnDiy5mN7YmXg8",
  "key23": "65p2KsrmEZpwe2pa4nvXWK5HxBckuq3NjVuFwg1LcZouNZTXzyuSkXp9rwXuHnSAjTrV5z6xYNPfiQXx8Kvsur49",
  "key24": "41aXARTavrpczCYzoRfREaJr9PU8fBBBHdgernAbcXztpBzX3wjMv9wRfj4kGnXeKdWDbfRezFGeva6x81cdZ2j6",
  "key25": "3ZMBauoeg5rqCJJ4kPiKBTnfiCy58UicpFdMovFg2JRhJU95shHkb8q82zv2HkQod8sJLaDVPuPyGCDqnNJofpzF"
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
