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
    "5NYpV7WBMRG6PgBrHMU6BjZHbDN2k4aGZaacfWTVRGKsWCAJ9a9MohgeGkj9gDKhG1UJdGKaaTybr5PRnkNjqVTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FYnKbqe8KPmyhfyvprAfjJtJimzKqX439ZCbm5MoKUssLiTufQzp7hjPUqxyqrA5Ued27osge7naVXX9jYMERc1",
  "key1": "4sXTHfsDGuAR1ookxm2aBVNaj3Vzp3DDxUTamvFb8ZEQPsLCJ6PRAjDck2YkxTSN3GJxfbRS68yLTAGqbk6Wp2xT",
  "key2": "5LSTwsT5Yu2ZjbZBqKNe79YA282A2hF1nVcwKqjZaRv5yFdgqu9bmCEXaq7brX8LuJnvS91g2gT19vE3u71zkv7Y",
  "key3": "nqELqNw74cDvc88EoZBHBrUg5RuiokavDnb8tNkQ8sghRLSNtQb63Yg4jEoYK5cc22SmaeHptgEVMmY3foX5uJd",
  "key4": "FaH9aw6aEQDnEVsHbvD4aDnjWimbqSnd9KHxi33nM83S1NSBwSkXd3vP5zVpEvikDY3j9zLcduWn8bjQYgyMVQm",
  "key5": "XZfeQJehc4B93LVnkE9jp49KyJG28Dza2hNkQQB3aQMPZao7Kf9MX5ygy5s4diVVLvnWmHWeDCGTh6wF1vAFWqW",
  "key6": "5w1YE2rYUgnZ7hSVSx89xao8LAM3TiwU99e7d12ab3WPW44aRXjWsawrzjve2urt5nsJrEyuAhKZjkLvtXC8eBTc",
  "key7": "4Yq56KZAq1bWePkAACVXKvB3JZvhGjchbozhsRJ5penRK8rTEcuqHpeXAP4uT9CPRxxtVSowtaHQcSu9kjhHKEXv",
  "key8": "4QASPgsXJSRNw2wM5KJE51X3ciPMptPDiEC8HqzR4VAtk8giNLbsGBJ7pV9d5DhgGb9ymJHF4Ew8XjmyHFzWdacp",
  "key9": "1VAfQzDHm1PKnrvecMdF1SAQ15DKGdaKYz1tw4sYX1niXcuadEcV3an9wAJNgD8eLo9ZGhM6Ux2PC2WpE1aEu4s",
  "key10": "4uJunN7KLu8pZHcSDmxUKS7yAVgrEMb9RmAwbSaZGd7vAH765oTKExkSsq8K76C2TMHnXgnQLk9MJ98Zfyv3fLbX",
  "key11": "fNsBtiUBGNQ7LuQaKxBnaMF6gkoDWSc9pWngB3hHUQQBHxiCg7ZLswexLWeeX8nrDFu2eFkqA5Hz1fA4CxqdrWx",
  "key12": "5c7zzHQUtJkTqnyL9zPJS6LMbyPJGeLcuu2tEvH5s1uBay6yGy8HNBUHKVVUsi888QNFDU8Ar1w6Sn9BhsiLxUE8",
  "key13": "NkoqdpL9TGQRxWJFMNvpghq3W2YP64WzFviRgZhEdf4TuAVMr1qSTjyH7yUFEzd8pSnpahoMHLh2nzuSL8TZcaY",
  "key14": "4YCyPhkFhksnM8mvTzNXnUQwatEPFdfC5DN9V6uj7qngSt7rCwkTKanQ4WUaC2fdzhvEZMkG8JJnhKmhGs6G86pj",
  "key15": "5XSeMoARdsxinazArUJdd2GnEs9mWH9fgfgfKgTApy4GMrVDwTchEmBK6sW7H3F1ToMYhFfoKTABUTHQ48TCENBS",
  "key16": "65BtB5DjthUKtdLrh5jnveuztAeL4kusndxyeddys4UDmTjuTvWbL6C1efM1651FLGK6bKhWZRUPTjdR1MgsBVP6",
  "key17": "2LjkBep9s1wL66JtT4WD8ZDPGfshPXDvv9QeDrQtBUxoFNsNdKYhg5tVexPbfXPrLMgpKej1y8E6woqofgbmaZpR",
  "key18": "2rQnM4CGMDnd7eCzg8MHBFmBqRWBuVXChZiu5FMy1mMCaNK16KgaWyiEAKwjR3ACMG3jvvq7VUnGnLK3deot5Ced",
  "key19": "5ynbGwTjGTuYJQ6HgoHxjobxcB2QESSKkcFL7czNghdwKxpKvBx6GPKGXGwcSa3sv9dKh8JV1ypPNYV8rXQGYcS4",
  "key20": "33Mk91YnEFyYxb1QJ2trE18S8KVRhUrfhPckPBUQm4uzkkpF5XrpLpr9avb3SqoG3A4in4mTK8xAaanWZKoP8Atv",
  "key21": "34HaTdCpGQh9CQEEzCEkTh4CxKecyhifdxwbnop38YMmMzKni5g5GkRgsAeVz8NJYNhbD9icqfYjqWJYxnonwfnJ",
  "key22": "3XXsgy7Xj7uABUWBjFMx915ixQ8hmn98YP5h2YPmioNFR5S6617JRwGjf8UND15XoFPzfJJ4zavL3juxfT6HpKif",
  "key23": "4TWk4LHrPNCv9t4ppt6RzGigN88QrctaR4ZopDQFoQqcwNvA8zbskBijiJe2oUgAJ33TzHzciYZBHPyt2VdwoPdf",
  "key24": "32boWLTSTPTtJ3aJSqNaL1VsxnAMCB7HYNfTLDPpPtP24v9PPcdwcq2oyLSDkdwhzTcxi9CGeikiFUnfozK7jxme",
  "key25": "3ptjKFChWpV6tMLVRxMaD9zSVor1qBsLAuZNsukzHnav6AtnAEfpDx8WbRqHSjCwBCqXRqF7xSRzEYu6ooegbZNe",
  "key26": "2pnHYfnpGdhhfRpsRrUURfY3jk7Vyf3mKsVeWxKj65Lk5WSp2XKfKhWpM3NMwZwwLwg5VKZMAEXRjUE2dFq82v4B",
  "key27": "4tiTT4q2HG5GdWd3icRkgpCoqZX5wZA5RgGdL4ENPQzAwgLhqxg5pgNQcT6Q725iCJDSFkBV5vBKZhHQ5EAg6Y1U",
  "key28": "GnMx8xcAtqfthw3r9zRrpXhTmxUgwtVmXQBhesqcA4e8eKjvU2qPwupSGNcGtY1zHX1qxgBGRPyKBoNMx7PsKy2",
  "key29": "4W52DuhxezzJ9C7kG7c4wAvnWuADhGuj88qswmFWJJZrdjRsPiQuuZtA8FQyxdCjqeNYeeGXJpgquP7ezS8aFtZv",
  "key30": "5bFL6r4jEL2ejbfW2aNCusNzAQQ9oDFWbPDYK1jp5NWngo5z3ezGAqr1VYsu1TGbgksiMiscsYFSP1KQexuF12p9",
  "key31": "58bs5Gpu7EWgcLfSvMmDrfJfdnzAtsidwrhoe1wPm72ytWHPAk4Wsmhx7WZVhyhikkbUWHC7UWAMMMjwXapzWTji",
  "key32": "3xNauF79X5km5QPdj1UQdGpNxv2EBhnQ3KeC2dDZ4rLVfgFzpAWZ5P1wY5t2ZzpwbKYA4FpTon849M4RvmnJktLw",
  "key33": "55pRksui6TKJJYe9qcNimMd2JiZJAMbvjV7LdqBpo5Tk8Q9he9AxrP2Bha2JCV2aBUVeR21h6yMVzp9rLTvKJCrL",
  "key34": "2gmp6XgzMrTHjZBvQFYTNogAYKqycU4fSD8jTVQTAJYjefmcuEy1SHeSZ41VQ74VoaxbyjuMtUKwrTQqMgnyw8Xi",
  "key35": "2mSA4dSznGyAruDGZ2HVXG6aSgftVn9EXLV8C6euaXYdk7embY13Ky9qDRsJQfVuM5jQSdMTiak7witzYx642vH1",
  "key36": "3JzT4mXzziyQgDmXJVR4mSJNE6MrDSZuanF6rhr9CR5gzjjuRvH9r64ZaqJuC2PQR5JSEpyWFzc3QZkQqjosaFC6",
  "key37": "3kZQ7uhuQjrgn1j1WiqG7PmKRTf9xqE3CMg96JDm2WCVK7wYTBxrPhVV7ipbYezzWSEy1xNSP5hwkD6HUcdr1gMY",
  "key38": "4JMQoHrAxkwNuyfjR1qbsRbGJLWMAx12B1AMcEMgrtHrCNcqYwyQYt74jAoQmMC4Sw75kvAVyUPCz4B5xb1yP6FQ",
  "key39": "5pQgyWwk3g6RSwyEKHu548ZJtDkXwqaxotze8C93VYhcaL1C3p9DrSGLZq9AsoCVbRHk6VhhakocBJjSYum4gnrZ",
  "key40": "PppjnChWUFd62qN18MHCW4rb5EPcCcZ2gSvzP2nBvGVeEC7kkiCQzYNvNpeqPavN2rUU3Dca95Z79jWamZ8dF7L",
  "key41": "ypzfSLxP58hWC2iAPAXxWKQEjrLH2ZrJkGrNGR29JkpRvkvVHiHS7L6rxyWHzUTtsXTa3Ryg6W6vHQY4URLq2A7",
  "key42": "3Wmsb7rtWpAvTjRQAn9YgZFxkC1U8tYN3T6fNCiMyT5QJEa7gasgndk8VtUj4UseXMPFKs4NHZiE8Puja1CHfN9b",
  "key43": "f58bdeYK5CF2uvY7VmSDbYfZ1z8ojndEFgrCPw1NVYx1SyowHvgkzc9A1uCZBq9pAhXmwdjNRAtUdXAVSJozGGW",
  "key44": "FjgpwLaVK1CykH4iGWYCP2bXDSkySSeMhqGynkxKTb7NEmpABL8mJaCLUjtZxKB1Fog3pBKfwTG7BHPKu7eBzrq",
  "key45": "2Ke2uS8YA7KxmWpyou14fqSJUgBf2Ue4FMdGc1bCrZusDwqHNANFDLZUQR4fgpLVZyT7xYuDNZXA2yF4evfrfKgW",
  "key46": "3doZ2EiEaw4dSYtANbwmvKvwWSKxWTy9u9xx48Bw9KtmhaEpvSL2DV2Ss2JkLAMgdAj6UPHdfq8n69ctyg4ygEUk",
  "key47": "2Cx4MbWbrMgXUggDhcS6N8biapQvAHU761xXQGAsY7WnBUtGrnH9LGBXQXQ3KCNqDJa1ZdzcjJReRTK9Xa6CttVF",
  "key48": "2LDZxU5kgh29iz9qoiyBKxrr4spbzaBb7UfVXE1t1cUwSV3tRTg9eAceJEdNjSFGsMowcv5BDvkYHyezrnHhPVv6",
  "key49": "5HrzyxYmKivYhDDVnYTaSu9yaJuunyBBvoRE7yWrAEkTbdTRncFx1NCeh8kFWFDGd9s2ZLK6t2dgM7SXTJPYq7v8"
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
