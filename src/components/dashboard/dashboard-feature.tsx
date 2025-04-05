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
    "4CnapGa8XSpc8qfsZJey6HXaLtBnPiJV7zZWdPUPpHuzzMs5wji4Ls4aCwaYh29C7LhLHGR7pn63qoUasqrCzBQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rkrKZwPMWLZvzAyNktcGquAYvEP8ijXip67XcUtPAf8BE7PThznd6QsEVYAD5EMQKkj58tvaEkNarkbHvJPm31i",
  "key1": "2hPgmSbUs6zLa3qwjqTTk7AKaPYoSFoFDuBdHGpSywSASP43bjfnnuBJuYHgqtvYijYcR7kNDGSnjogdkBQPgRP7",
  "key2": "3NK9t9Ku6mef8qKBzJ6mBE2UVbF5v8Raw6qQaKVQXpUSf5bipMwdCpW9NYhfvCooWmUKaEYcQoYkkbZXR8xTAV8Z",
  "key3": "WyKvtqbma122dSdJ98MPz7ywiHxpvF7jMJCULPNaYcQN6QuLDhs4kDKikcXNc5wdcMk8Aye9LtuG4deZW2y16ta",
  "key4": "5w3iofbtCYCJFCb3aU5rNFguDhArWNXuHQ5tRiEXPk8CTiDbLKdcYAXAPTz3qCFpzPcRQFGLXyPhEXRW3rrtkyu8",
  "key5": "3MX59m2YWgNtGWpENrH4yfc6Q2Qp9pL3PKdBDQGj7qpdew7v6kAnRfcfZXP5Gy45RAEfz1PLsq7RvG1FoKcWZLqz",
  "key6": "2WaaseBWrBibdmDRHxiUjjkJHS863nm51d1Ggy2g7x5w5h8o9nX7BUbSjjfLUmAK3vhUzd2nqCPymvXvNCQpad2F",
  "key7": "4wGUL4apJ6Tc6xABze4o7pP1DPj9uX865FwX4b4MxPMMoPDweBjNNnRaN3Z72WKu3GeaRy91QgWBqN6WgMLXHFFr",
  "key8": "5PUNCy8MUrXwaw8wDwY17m4UBd83NusNQRYdkxVid3zYSqATJu6k2pQPXKRgT6J7thuuoM59KnFRWEB4TKhHGF5C",
  "key9": "5J7okiYvbLQkMXXePwHy7Z1EeKWTASjappDNTTJG3zjSdYYzxSZm1GPDUCv965zrGPEHeQkM1PMqFQgqMAHhA4C4",
  "key10": "5TWC768GstmuDEjSrBQxTZ24z8J29KtBMyNXhAdzF9ENhonw4wTEWSbbDHMReBqfrup8D6EZX4AZiauhMKdqMidP",
  "key11": "2ptm9ARaW4toTNA1FAuBR7Zu7qC6YuiyNYYoNudrB1SjTAe8f2ZEkUhu5xPxUkHk8pYBfJ6b74qQL4APxsU6j1EL",
  "key12": "2bHe67hrQ71evAzeRAbRQ6YGHnyk2jEukGcrrtRKHKfQiYjNNQHAnLQZFbAYE8DzQXKdhqpw28Xr7x8YaKpUvZbX",
  "key13": "4MRiq5yvgyp8DNXij6vH6cgqJXpDVxz84XNExR53RnVW32VFRLRLgzhCQNVFJzfYSUjPVbpaEdPvBSsJE1wf8Sbb",
  "key14": "4ZdwhWFV6Sn51gz3B7rPiRw5GUUEgGc6bGdqBeJ49gM8XMyBYx9FZ2UnRK9SoDfCjKvAj6y9cNbfJB4LTMz884iZ",
  "key15": "5S143UUvZqARGshzoPZVN8ydVPMLvwdYfjQk8EAzbudrUs7G3dTT8wYzFXWwZoc8XJX43Gy7DUARGuN1bvpF9LvY",
  "key16": "5iYj3iS4kosMgawAafzCgSgV8To2t4wpRYALzqwzzKaxr8NBuUniTyGiDXcJMXL1BKywyzLcxGt8zwGGKw8gmDLU",
  "key17": "477HzAXNV6FAnnBY4WZ4YvkjmSDcBmb3ZXD93fxDgkzpprSdbHzVsXiBbvAjccJyycf2WhkcKiYfZjcbgvX1Jssa",
  "key18": "yN8ZkL3RUBpFqGY3dVy4QSe6zthjW65iWvc3i15TLjqfFb7Ddn9PoR6h4A3XG2mXmmcAHBF9ZePMJtTuHdgvmc8",
  "key19": "YtzkczHFcL82qPPn8MwjjHvph2e6SfViVUkhUNQC67dbcpoLuyW1UxtpVc8nokQZwzLG1cKSBtJ1bRgyhpUZZev",
  "key20": "niXsZ4ddHPmthVPfgXbjy3N4EHoMGfShP59PuwCUXsqYgJgQEsCT3ztHCY7MdPdYZ2JLk6dWiw87YqgyzMDsdH4",
  "key21": "2aLv1o7u96EaNgAnuDXmd3FSLHQ6gS7dRWv2P7emMmg5rzdKBFTX1oQrHXSTSSNPQGhGggEMHbBesvZdZiYouAp2",
  "key22": "45iHCVG6uw7GX5WVqzoJzYNFn8viNb5uvNN1ppVncg4HJwRCwVKj1rUHGXeUgjSwP9vP6uDMaNA3UNfMdTk11xFH",
  "key23": "4pfXniCBx1NridfVsK7Gi4Ve2ShinieiD6TVDdZ5gHpYPxruvJFMwzntWesTiUvEnymrAVQMg7qRsU2NZzzAeg7T",
  "key24": "5Lxew4DeUsSFX5rMe57hKN5n8JbBCnd5YhG2qsDqkg5iWuwhcgMgPqzvhp5Av9VukgvzGLQs9Mb9R8HffgDmDPrE",
  "key25": "Uj2SfMgmT7EYiFmjyn4krWvGY2Psyyi6KkhKxkESUaNrS7dvGwTBNgPPcwbA5VGTaGmazhgfCyv8KEESVUEQ43t",
  "key26": "2t6ozPM6sjsJq4yZMAmochDCaDMkQyWiTG313DmLHJ7YQnRZmyX5xfQX4eHEHNcJtRfZfAMS4trSxGVPQEtWLBpi"
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
