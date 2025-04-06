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
    "2cLccznnVwgzzhBSmL3Q26VsK5en9ugrHSEfZTHchJbzWGNtpQgxa4Mhw7zoLC4MSi6wDhkM58NvpK8sCsuY3Nn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KNxEopJmCev7FDjGSmMWvYLHg7pnbLodZVCjvNdHvjc2wb7ZwRg4r956a9BYisn3ErUaVTjhn6gvQjjVZGbC4qL",
  "key1": "57AUC1bRhLayyJmNRToFeG7CV647NBzYJWRYXUXrDvJ1Pg8mRQggzDDebycTaAQmqkYSgACLi93pxmwDHsy71gNa",
  "key2": "5uZngDLe9hLvDAPbxRFWuj8ZX3HQd8tUrsrRAbpTWDv4Vy5bSyjrcAf3hxcS6rYDdbqdP5RZetMA8oJmY8Fh4Cqs",
  "key3": "5YzWkLjrekbhF1pfuto52jSkLiG6pXF5vfL7YchV4aFXor6tL4w3kKAXtbUsGev5Ydfu4TCHV7tzwrSWg6rVy5oo",
  "key4": "4mFnL44iZFZssricCtEPVjxWSSdYh8QEv4h6BJ3TFCJfe9DEPztVLLvzK1ZskaachfGBcmK79mSDXqMD9HbWagLR",
  "key5": "RL7Z15KTDYH1JpqLUSWAXA5QtxeMKsACnuRVB4CM41XEqj9poK5WySnsgatpXgcQFcNxxmxBo2V2vwEm4LnT3u4",
  "key6": "5RRnd7CHSy3o9ZoC4msxFU79Uu3Zq2Hpuc6LUrRqZYoEBcmR3A7ZX2HabtPeKWVcmsHGvZoW5G5yjWY9pqov487L",
  "key7": "3Rom43Tpi1oQ6EsgGbBtuCNAHga9nuXkraVMYKATLvSyoKcjmsf5QvCwsfdZbLar3U9rSQ5aK89AguSi47R977Bs",
  "key8": "5mG1TzgMXEz6uVZAbwCejkrxS8VMjb8cZGMjU7Moc87EFFkcgbHyjHt5k53G3mfNfzbjYJqWbLeoRMmEZo4vuahn",
  "key9": "2jnLJJ1s1u3nFAdNAftNHcCr1QqDFwWAaq1S88wLhhAc9V62oLaq5gD5DhYXhxBA4SfxhkNXnjeqZTU9mCZ9ah7e",
  "key10": "4kXxZHQ3ctkqiu1TWUcna6nBuYhzWHSAQodhEFUbDc5sk2uBMDmCuBrZLyFPmj1hmC5tWmTr4Ev5wm3bRJdCsYPy",
  "key11": "4wYLvR4Dg1K9Dx1Pj4Xpge9CUBTfW4sUr8BN9LHpK5arzkeZ4NuWoDBrUZaDcZzGPDL789RFgn1vTR3YsyPCxGiu",
  "key12": "2xNiPKdf8dzmBhMrFB6zjpftiUEj6PtPovakLf8GFGHQ15CBxNjCSioj16eX3QdU4yjWbyowGUypesDp4AfsTMXr",
  "key13": "2F4uqzm1vEHp9Hz83WdJJ2JS6DQrVMDMWSVkx5mejS6oUgoonYzJ3sTdpwhU5k8FY9Kd3Ei6fJFcu1kicfjn24od",
  "key14": "66sGgEUCBs1qF5BgS5pB8EA8cest4DfBziwkQdG9DWfZ3BudzvhARyKsuNaGZyfXbsrCcMQzkyz3CVM8V8qwqz7t",
  "key15": "47pc9MxBcgLibDZUyX7mZLpggYTTzhbEicWrE8nqRS6MAaTH7KzGUxYDMfD35LaHajp4M9padhoi7SaJVFVyUSzY",
  "key16": "4C21hyKseJFujDHkpBch2dJeMQdMBs2K3teC1DPRtCBjaQiAgqgpepT2Uy4HPGtcvSFMWE99boJfmApA79CTj4UL",
  "key17": "3VBFNPYXhCUzm8r61C3KN1YMVvavtfo9fuiDneFQysdnBXWDu5Ls5Q4vZAipRarEHYxB8hmh7yehyw1HkjdL2oJ3",
  "key18": "5RXAmTZXuVqXF2TjUEYaDMnTE6jTvM9gjTWeRiSFzEPK6etEHbUpLuVob1ETm4htF9DUD9TEdcJJic7Qb3E8AaiV",
  "key19": "334uu9GABxDF4Tc9mcwB8hXqhTUu7CTu3J2K4iFY67RzWwc2E3Tk8SBLhYJz2gix5ihPPxciELAhUPJ3jibk86A",
  "key20": "5uqCxyXf9VN738rAwuw6oQbG2T1wg4N1moEkY7Nv15oBkzoz3fEaV98HXHg3x1QNTkTSryBu9iBJYS4zrvpUTJwQ",
  "key21": "5KG4NUjoGKRbXwt2ZNGQ54NT2Kw8HBvVQaoLhRQoCD8y7E8A1RdgpPnPhekoN2Wia1KhYpYqbML9EPR5wcdRQp8v",
  "key22": "3dt7sk4m3LECEwxGYFc3MbEaLciksywWVM11a9KNEvbXaF263aDcYcxuZNnE6pjHNC1Ew58NHZSdMgDAukNJmjqo",
  "key23": "5tpSmMhv5WbHHKmL6eZa1EHbr4jRYCRBx26rTrMXXcka6PTPu4AFFuJfhnGQFZVJZVDSwfmuZbLBwgqWHkJAW88X",
  "key24": "n8mqmLSQCWKicYwy89UZdPE49JZjt5GifKDNFZVboYe2qjqpFs6fuGtc2jQaJsSCnEms1c6mBaxqNFRBWW4E8LL",
  "key25": "VAWapYnGjo3kgxCdd3kZf2f3x7sumKBXxAaJS4XLjS3G1sXdwtDHGJt3UqNeA1Zz6rYq8q4R1jy2cGcLiVrVyKh",
  "key26": "2Quik8Vtk7MucxpKpkFD2yu99rzWQHNKzjJLP2CAiJfaiDbAuV8ZrWc7hycpLCKLJd7uXnNaahBQR8GDqftYgKnr",
  "key27": "qXURCwznM2HGFYyNumBL6LptyDan47V39TNMh6hSbenYdK6SCEBmR9DwA7GmxJfMZk9T5J3vF66NJ7ZtCokaqNh",
  "key28": "dUqZ61GgCshhW4z7mjDY6pZ39SLkeCeMaDoaPQykQnscRkPLYJsCY6Nup5drasXDpZk17hamfghGPX2Bc2XEtqM",
  "key29": "4tSLdYNnjsuRpyrq72jEn2CyQEBN6nue6EoRjnn9cvoDMW47NE2dNTvstvTVRHuhfV1i8fVUyAj3AQN8fPTW8P7x",
  "key30": "45RzuFfSpxz7jtcisL66ea9y5ncNrwMhbXPQuQZpqPsTUS2Lcrjzy4CmHEkw6CWonsvmf4TJPuJygToWNt1nTgbL",
  "key31": "5eUtnNBz5BkRwKqP23kTiMRoAxaDTbAMvK9iFjThNYiSrW3XziUDeo1HZ965vkXEPJGBhnTZjGQLt9BheoW9D3rD"
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
