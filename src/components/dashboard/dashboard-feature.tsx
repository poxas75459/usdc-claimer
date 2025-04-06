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
    "2dLq44U1cQbGWLFo3LnHHoK8WSm5FggSBxtg3ohU7tBD4C7wud75bcofbH2kRhNQRqHLL8mK5vvTdv6NqF3rek4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "212HnWQXs3nK63JiWhHGdBzrqHA45pUu56JLPyzVzVTYaqVFZzxCYes4aZsHPDhAshBfreYaWcxVghMLnt95pMCB",
  "key1": "4CPWqWN2nbugsQKGvgCzPTGViBaoGU6tktmX4ALC7YxhEABsaYQqcKj5DW5BjEVV94iZDSVaAyReGrHAUkP9fNZi",
  "key2": "3REU1cgpDt5xggpzGsC2bpeXs9V8THSddfgVBi65ZixPFQ51adFerbxjHH4E477vsjZJw9kYgMjbSRxEoAQf7wmj",
  "key3": "3fyBMGJ2jY92Bf9rpY2m3ZHbKUyTSuKACkE7siLSQ7L4oSjCz1P9cv3f9UDn8yVBkCD6K8qjzHbU6CGtc6n3PShp",
  "key4": "39nrQzzQtNeorNF7jkyu8fAVkaucfTHMq5ToamrmMobZnjnNDPRFdQ1hv1ZRvPMuvJHD9zMSHt8SGgds3aqUwy3y",
  "key5": "3X9AyUdD57zA9jnefvP8Wgk7NX2fbKB8zfk1iP1rYKt7BSJ2Z1V9knzx5d3xvZCGiukUy1s1shNJWHn4N8dZSgSp",
  "key6": "5571axQMdEK8w6b6okX6GUjKr6bqEYRTWviNZZLsHxTWadchgZLdPGzMdrSQQed5pxaegbakR6RpvktF2DQ15mx",
  "key7": "LsbFLmR4dbi5z5y2ZGvSiAC8LP9xprDJC7BukfgkWee1JeqHxLJQMJZjwjGDVPkzjXYs3NPNVYU4nKJTcUsegye",
  "key8": "5rZraPNU4J657zjPZybQ7qt2AKN9GLJgbWskdZi2e1i43nEXzxFSbryftiQqjjwatffyzdaFzhebX9RbYxBf7qDC",
  "key9": "4K7AZVN2ZgsjjhTArqhK2LLaWab2UFLmb2KqQgVuwFWU3gHY16piNHjUM9U1xAXdBXR5kBWaiBbaPhsLWcRRKpRn",
  "key10": "5K2ooSWUNCDqRxh3qrRHQk9rtK583fAXFPdYxVPXQPLMAeWmp4i14ewDf4nVEavRsiuhxXYAq2PaaXdXkJrsqKfQ",
  "key11": "6325DsCHzD5gSNoSMSpxbgLWH9r1KY2DeF3r7NkdCpQ4LKgZpfYVXryzUv9VcjgHRwF2DkaCh6co9ePbVdSdKMQM",
  "key12": "2MVaXjeMKZ9x9sQNhYVYZAQo79YANJen5DiDft4tZw74mbYpEJmGFFdstEG7DLgePJVHW7Yd7Y4Yi39S9b4BnUSc",
  "key13": "2YGb3eoBECYQt6SqUmCQvzcgfVsHbZBkZTknMNGbz59nzwyy1kcGNUmqaUU58Frqe5nmF2XpMzMfDXyzfohm23aE",
  "key14": "28zyU2nEcCsZsqA6fVUVDhxCbKQYTwF5n33tSNd5tERwXimDqxXdnoUUutftn8Cb7ubTvdti87E9SF9VLN6AZbXE",
  "key15": "5dmDFJneotE73gtfr3PhbJ7suTHhGKvXqCZa3aRSJ1catKvJ4Pg8NmokkeY89uWNdiS7w4egofjzFtaM5Fi7LgPp",
  "key16": "3ze5Lr2YFMFvVmACtYWxEgqNYxFCkqE68KHLKpjFxTcXZerm22vXQrEMmjghdZvZbrsxJ5QciVvY9Yo5CTwKoLnD",
  "key17": "4vn6Zc7EbYaGTZpvvz5anAd6awoxxVovzp6FKrWR6QDNDyuzdd2QVxC6s22AsfWFi8dLxx72NdQLXNDd1rMGLeCT",
  "key18": "x9uUCuhSB3vwQP3JNgEHeeH2qBz9DXBcMg9kErTh7wZ4kGcfs8FETnwKbuMj1M1PJadDk2WWzkFugrAbHjKwqoW",
  "key19": "4DGekWfp6krv5CmXvMMYvjoemoUodqjxRkdBS3UwP7kJUSeGowoSwxqBHJ7sphyNyJPa3jjiusmmY149HyRUWtkW",
  "key20": "64HgmFHmYpnQ9LAhLvew192peMbCPujcg7s8ofRKEKk3Nz6CS52dqXvnf4jABw9gKhAZtF9bdJFNCsHEyRh9fJ9h",
  "key21": "2xMPEw9KJ6c1RtwSX2BWZLnc3s7LGHBf1YwTVp54FncNf9VzykyuossyjwVZxoC3B1iY5W5UuatfgqCnZQV8axqf",
  "key22": "oMuswp9a2LyA3Vh5jVNEXrooeN9zVgLhG7epiu7gNeNpbcATACbG6HSrkGbejHwQaucqq6PhybL53wrnTA15twx",
  "key23": "4iLahjzwGituig4Bturghn3wBY7fK9XSeYm3vMpdb6vR8Cnm9xNWH6Lg6NxZZhnfL3q4q8zdn7DqqCjyzpdtNe5s",
  "key24": "3FFZttJcR4MoZ3NxJ4tqS8WsrGYzLiBu9os5r2bRvCMayD2ostyaxMGrfG5VBiUaGUZSAtbsuxr6tshNYb1dXuxr",
  "key25": "5SXUDfwCoa57jjoFdWZJjaKnp3Wyp8MwD6wZ5Wc545AF4pJAUFZ94eepdeEMXzh1vgUXnVjfV766M1jGcm7VcvQa",
  "key26": "5KyVnmSmxJFCP6FJFgdSYEnkvD8YTCunPK4HY8HtLSMhTJ1Da2JpKNLHe6Hf1rCDDL2BuZM5prrXAZ24p7dwNEMT",
  "key27": "65NBoL1AHQ1Gv52jeuJvqMx25By4LLUGmvz8NDF8wn6BHSPe5DhVrhRbShFv5kMRJSUmG6X8AJwDR3DQ8PAGtGd",
  "key28": "5cYXd3JeLPz4MTua4rzjNyjJJ1Q6qdAWSWbbZW7KwWMhfL871AwFU2wMGzBMzi2kjNsZmtLHgNyMJHN2sH97oCgn",
  "key29": "5PpRNide46Q5f8dkCCTSpGJkHgp7b2L2BngceR3dcS5E7tPq2ang8jCyV5E6AmZ5qNunV2mXjvkCsuAB6ciqsJo1",
  "key30": "625voZXADF9VZ3PaiAqkd3ioCQMqrS6BnDS1icRfNXVM3bDLygXJDwnVCuV5uQcwr3LoYsvnTNbg9pjX6Ti8kGKf",
  "key31": "5hvx682u7e64z6qYuy9Kn1Xk4s7ojrLcYrAkTAFe6yt5ZKRwLm5jbfkcTrmNGQvwvAA1WowqMqFrRmPm6WaMM23y",
  "key32": "5r4g2hbmTSQGEyaw9WU4oARPYtXaubrXiyMMfrnQdU5FHeMohDmLU7pTMPfZ9YZjxomLEaMe26k6AiHef9oAjRW9",
  "key33": "okeVozT51dFW4tHg43uyMNMd4f9GCfnu4QMZAyx7AvS9fTLTFSFSsoS8Za2z8skEz5gTNMoC3QP4mD354gi1Sp4",
  "key34": "66snw8nJ25kHLdAwUHZzGi4fU3ywKVZuydEcrEnwr9UxJwuRDVfeP9PNba5PAzwSZtL32fzGgEUmTjTjWQRE9nz5",
  "key35": "27QYa81zB33ZdZvMVMXEpR8yXSt8q4qVy3vZBB5noFshhWGbwragjnYkNhRMqdWv1if6ywFSGkRyvZ1S5djaXgQo",
  "key36": "67Gu3YJu9TiUw2MbstSP4ympFQLqSxSNyVUxa7cYd4Rg57ZMawUsisHSPYqvgREQFkqwyWVnksHkMtMssaGxc46T",
  "key37": "2u13EG7ef9tskJXdbFWm6QNyLZivzZds91FrapQtFAs85HNBvo2f7ofeH78xXibkjomzVQgXqBqahonUghdRnnAW",
  "key38": "FFWkXyQ73MoudLJJ63EWJTM44P3RBHwP38zMphrU7pLjRQksANWis2fWvWVwhsRPzHPdP8K1CANr5QDVhrW88do",
  "key39": "Aeri7WUYEFvJsC6EgT9Roa5Yc4MmAKupjaxq7fcfi8jvHcskvyiyo67HfS3oHAAfEqeGGz9sHNqxVPUHQdK4uC8",
  "key40": "C3BaKQPNKtHarCiURDVHZSTcwFae2i7MkDD9S54nG6d3dBvmTnDBrWQmRk8qe7pgmsGwLpZXP9486QRFYJRU4e6",
  "key41": "5s2r4PwLbB4QfyCahFZtuGeYshmRDFdCKbvVAu2aExg23VmGoSqX4CYKgm3gexYzVGww8qnKHSjhdKeBUpMVdCbo",
  "key42": "5iNsJpwyTkysLyZW6svMAfoALk7zF45Ed1z2vyeWSJXWanGrZ3esAFwAjzPnYekum4hfptxuoGjLDa3Dhv5DktXP"
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
