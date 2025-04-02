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
    "4AD9Fqed5oaz7nMekp6xkoGkEtJnjy4G4bA5pQaT56w61RqYYdpGZ3aFTyHN35ExMa4QUduSCVUWpqCGFEnue9gm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EJjESLGrxifmYGy9G3TBzgEexK3CJ5qGHsQUfBAvRfJ2KQWTrr7cvutd3kF36EzqLjpkNgfuJnGmuWpomGd1NXq",
  "key1": "5Cf2FoiMF6gc6jL8QNjWnd5baAXadVoBa5KGukjWUKafmE5mA6zvtgmzcVwTiFAxcGLYkh791EmimgWGDPKUihiy",
  "key2": "53THEWdohr7eShx7wipdfaL9BaCARyGVhnbqCLBTBqo8t4N4pX1M3dEyAPKuKrkSLZv82NrprYpRKVKg5Gb3ssfj",
  "key3": "5iDrYy2bPYom5MJFho22tHyRATXQhawUmKbF2wsvLCjcRLX5x1eMN5nsdwca3VPaSWCxEuwT1Y5cPVfvEWaxNFdz",
  "key4": "w77M883BzSQFZBhmSGxKjeQJksjxKTe4cvpsf7J95SFP6DZLmz4k6b88ThznqecvKoPsBoWJRUepVDwY1YLckVB",
  "key5": "3FG1wWzvc1EMySot1ZMqm6sXTGPq6FukFS8pVn3M6HjhwgxVEc1aoAQ96NrG8BYhKcyamDeVmPcHDpTrS4Vwdk8W",
  "key6": "JZsSV6zp9h4dns3Wr4JGpy31E7CkK5o6mHqD335oGjxas3Dxbh3ofWaDEniXt9UxE7mXqS8hCFyHuvdxbPrzMUb",
  "key7": "2HruSRs87gut8dfZT1strEFCqwsyw5C8bQWpF5abKp5L2Lb3BD8Vj852b2aojQxTqstzP8rWuqy4EJJiRX5WgzuV",
  "key8": "44jrzzQ6MPsgHMjRCYzTH1Rw9A5JNxTNhm25nG26iCmSUisa4wjoU4r2DV2Uf7gwSQx6vQ7T6TygSJMi2ACNxS9S",
  "key9": "2ExANwTUgMUFKwuszc2u4HiodA94QCHvwpjEuCcAgERySn7pmdRQTiJBXtA9xYzDUEMCcZiuTQphQVtfuyuUtt7z",
  "key10": "5zuySEXoXeW6PByqFSwAJvvLmWLBSTrssd7P7CRwiCYPfNbKA8VWbgmSY6RwV8nnYvpzTXo5UXUHuvUx93B3MgQ3",
  "key11": "4o5ZppYxBiRDrgMhjgCLWBMKxMexZk8uXd6ch6VP32o57x2mE1EQiKY6QMh1Df9MErZnfCjP8GS3kdzbj7BeHvie",
  "key12": "123rzuCLa63nCF1ryPrHk5pT9cyjRG6igw7A4tZ8En5CcxXXoNFn5CsrrUbS4rH2yrUqNNw4h1DXtwEXF7fL1aoA",
  "key13": "47wUzsURNUunP9X2HdCVunHzGsk28jkzmH4nJ834arE83MSq64gYGvUYJAZiSKNwzyfpv8s2LfZL8xcyLK97VfVo",
  "key14": "3mYJ6XUqRuBd323tGG8HZYN3rX3FrRUMFkSnxbcDzZfhnwTd63T8bbuKbTxrLWVRJj41yk9ny8MMphEN17i2Avh9",
  "key15": "5bZ2jrdt37DVhb9QhszJrMv433gGp5ZxcqVbCdZ824FZyjQvv1Po2mom1N3F4RtXHo5w3GvDy7Y65GavpXvfPRCE",
  "key16": "4Njxwf7tVHsAxVoPBponbJkcAfuoboRV6jGieFEgnMNGoAJBAkEK3JD8h6bR4DT117ou3jhU9ZRpJeuwPPtUsphX",
  "key17": "3iH6LaXRkfNLoTKeU48ivZaZ7VfHooUxzMAvsCiPxEyBJoUYGmZHh6u3qWah91nmwKckhJADUQqhVUNhZcaWoqu9",
  "key18": "5moejBhb7SbPBsG4fGzugSaYEW12ANfhuA1QTEtyTYjPdLZURD3Q8myQiTVWsLFnQmsZnaktvzgF7zWtbuNUmV43",
  "key19": "2Y3mAHLCkTc7efxaizTWiEx7W4hjb7UxCLULCrnkdgYoGBuHLW8xMdHXM1WjZsaPTfakVuYBGkMznDtCRzygUmNf",
  "key20": "63pcZmyWzQR5u9qJ72ouNVvmc23abezXAZSHZ4FSFZh9ydumM2NPkV3rRUG51CYzfKQtLBh1UDhSGKKKrteK47DG",
  "key21": "29pKJsLKonVHRzbSwchyJeoGQe6gB8J4iXXJbdonCWv5Vkj4vzeNTrnGTTggYqjRSaJv89aMHo6XNSzvhLotrnd9",
  "key22": "ZgwjjT3D3GUUczGuvzpoZJehCMuqmifjeT8ZtArQtwJAioX6R6a3N9eH4fRXRTG7g12hJHfdQa1LRBAWubgLrcu",
  "key23": "4Wqu5BiEzD7GQ1MHb1nqZnJof63VtD1Rwh3wy8f2fGdqcYJzEDb5DKF2eVQG3S97EkWEEtihYKbsRon1Xg6GJUcw",
  "key24": "3yXjqqFA2NDhRrj65GaivUTopdpgTcqKQ86vY1oz1Q69UdJWg6jh9TAKUMiCoV8WFdSGv9nzKu2R2RZbXfCbRnh2",
  "key25": "3udeuMhSB9HMbC6Y9LHriQduxBkV6cUhCKAzsnSZGHGnpSg1Xzh6MjL6rGBLffLFhetyDVLhNzv5rYFZ759N83LW",
  "key26": "4JjUEi4Dq3Y8iUrStqAZrHg6QgVntQqejXjaRSoJu6paDvGko62KiZ3V1c6GJ237PjgEPTznPpvoNzZwqVNtTHHc",
  "key27": "5kG4nRtfPCcAdyk1KmB3sHm28Tkqh7ho1PSuXatMD9baFeybHqtgzvQ7bDnYPF9pdq38rQD1SwMFuwmood6PtDBj",
  "key28": "5D2HDBQYZ4jKU8zJHvR4gxTQPc3mv8GmD77zjnHTTEQv3wmyKtzAiMp6SVw2f2K76a8ko2aS5G7UcMo8NRLyAygB",
  "key29": "3qWoTL4CepHymvqnSqnXnEfGKGCQaEqp781S9yrEWYq97HZ7xcyhHs5SvfZ9q3PHaGEo9ApmzVRzuoRvVH2CTZjS",
  "key30": "5cUG4W4V3AaJKnkJBLJ7A8TYwr9XD7ayspMV4dJRRaqDnFh3CBadg1ZS1xLDYmeeZ6rucJ6tx92t7bemkV68MSyZ"
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
