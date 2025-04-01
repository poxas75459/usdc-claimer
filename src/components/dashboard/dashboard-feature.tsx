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
    "58ggED6M2WsTjZwR5EiEw8DhxviLbDVmUxpuzQpvcgweQLLDoySQ475ZFC1rJzYMpZoeRK8PhgvWuFsFoWAS5i1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dVsVCD8fZZEdBrP32BdATMdoUqQivqs7fPJAeD86bUv3Pfpdn5SbAUyJqvfczFqDZHQfW13tuNH7RWbBPNb7zAN",
  "key1": "2s14QRjxNXz9ww2t9kq5ePf2Vh6V88mzeFPgEX66gxvMuVjqnPzVmDbCHk5qGSrbvLiJrcVbQaBhKFQpGcjuUpz",
  "key2": "3xPJtPdUpAVmuP3J6YwiUrke6q2MfhHn2iYj3wJZZ7iMN7GWweggCxXJnofGEsed9pG2jwEPtoEFNy5NaFwz9mh4",
  "key3": "cVtqpGTDZutswu26h7uhGevh8oyj3VdjM9x4AVSrHV8dHtD5q3vFRTQDoejPNdUgRT7gTXdrvZgEQTcdNedzr8o",
  "key4": "4SpnVMEPHSzTBrHcidXMqZ23CcheHddUskKgM2AUw3NvCR3uuYqsRWJ2Q6qm9f3LCSMwVfXJeGp4ozaeSBdRuNbu",
  "key5": "65Gjjmfsduwt9Ae36PqEGeT5tuAJBtYtNrNwfS4nr4VqUE9RYGbZhUQbAoQ8tghjxRv5RnKWmkmS8SA3cCn8x6kq",
  "key6": "49wfEFqL7z5d631YB18F75Ke1Hshbxs3dDThUPgf75MakCjSbbfeHG8b6E5mNngtdm6ucxQ14K7bS1FDwSkzkfVL",
  "key7": "5dWxgX8gz4my2vmkzrHHGGcm2cYN8oFm9Y4hHeo8zGe2xzFvjdKsJuQwv6gRYjGCWSk4BvuX9tQiiUeZCqn3RFpN",
  "key8": "hphTPNsdsiwnLjHBFHM9K81rg3AjWs68t2rjutSakpuZa4FcKX7XQt93AAQtgtKZWE92fPzLznzibtrhckySiPE",
  "key9": "3Pp2kbyAJYaBRKvavGx4hPRM1HeGVosuzkiEMVFF6ac4kYxLprhrA5btrEy17r51fiom6jRyuyastnind6hebY8m",
  "key10": "5uqJaqCYhqHh1TKioGPxs6Mn33QiBSrbonFVrWCuoZjR3GTEo3vLWq71RU3yzLuph5JcuwLf2beBhNxVnpV4NWR2",
  "key11": "4GfAHhuGQQazjUbBZEvFKqeGE6gj5KMFKkreGjCCjjUNA25BJM1vQivMxPPEhcqUh6sAx29uMEei9ZoY89nkBMaq",
  "key12": "525FnAtV25YAinCQYHod9unv24D8XN7StZukfDYj7QTxt3CCkQbfRCh33iqNAu44iK8xG2888HVqTHkXnebadsF7",
  "key13": "2Gtp15hyrdezgPwBQDwR6U9WoZbdzY33LBcyKaosyiQRM5dryJKXyj7C1auNDnxK32AiwQWgVi3z4iiZgz7eEp2N",
  "key14": "4xscUjnHQkivutnCTHghg1zjsxKfGdTNEBjyofKuWKJ6PYZ2xwhF7D42L9JUnQPyF5jykJBf6kCj5As6QG48fe3V",
  "key15": "E5uh6x2Dhao8ZdQqQxhU1D9FC2CbVMw9y7syL81KUbf5i4JMgHMUoVeHJsvdkUzWuaf78vZkmF5ndbhNWNteYcc",
  "key16": "3QjZH7nG8q7289MsGrt3NbEnEa1XfdzXHrfjgVFQdqdc3CcbnoUaRh48fT5HvRSmgxUhZfVRY8dx8hpPc4eXaFAy",
  "key17": "5vx3p8ehEU3Etc3jemnhxDQQ1RboHzubWcTPK6RQAtERPMq2Qupf4K9jtbAveWPAm98q7FiYffaDJfg6U4BZRUX8",
  "key18": "2YvQNgfgRo9V2CCXDSymc8mKPTQ7j2wr3uHu3v6v4ySafKLdyPWeAUkZrwBtvL3ScsfEL8gbS6cxPtW4d7vq1UiU",
  "key19": "4EAkHDrME57Hi2TWgyR5NS3WY6huQbdnfN5SZxVdqMYgi4vf75bKawfxXmhUzjrT4bv3h3Qr5m7RaAvVypDmCRDQ",
  "key20": "425Yek5w384E7pGUegiJpbAZGK6NrUMuPvxtxrJHhP8ZkFNrUtJX7WyDfDLd5B6WWf8ZAME2xiTqtYZNBZdFKqYT",
  "key21": "yAidxTXS3TANDwJCys4M5kz96nRPWpGTgpsyES1Wazajobhwk1f6tLwEooDnH1WLgXGyn3GpGgYkdm7JTTLvnZA",
  "key22": "5sSe5c4KxJWWpkwc83avwTJwPyzMXuWLzo86fRw5suLTaM8qtv2Uep5i7jWqbtg8mCkog6evkKA365D1HerN8ixJ",
  "key23": "5garTVzxj35bYg2Cz75JWapN6xDKGH7wUfHYBfLN43A9FpwEg2upSPWbe9nA8wghjyFy6icT9yzKRrBvjemD8UES",
  "key24": "fQqVUYrHLctVNGLwLKbyeuV82LPxrHCCEu54cGzQsQQHeb1V7Nh22TftmQYDEEAh76HHPaUG8FuXAUcY5pXfCFX",
  "key25": "Eq56jc2HF8xbsAXHAqfA2saLHBA7E4TBJpSUZMhpsMxyJ4Tngm69Bx5h1rxmNtWtbv9oqW4nLN3vCAvNXkQgzBq",
  "key26": "587bLHD6Jtx6QM7J736WcUSFyio7DEhRSPpWjWQAbvauKPw4RdAmjCvhsSiFDnbZcqFmM9oScv5Bh5L3N68cBr6W",
  "key27": "64xc1rAAh1KzPbNCfzG5myvd2isPn2oayMzbBFq37oJS8E29wjP1twyCeDVbcTywK2tkggeBLG42risZExdePnAS",
  "key28": "27qUMZV64koVuPgeYFtrK5n4voDbwhfFzfYCLdNMVtehZLt2GGkC6aGad1UVeDeLFubt4DdxSVC2qbTLxq5ijoSZ"
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
