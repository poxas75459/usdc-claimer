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
    "5zkkmxQz1MpV75jCbZEEsKbsTU8Ve7kRzpCaaDnqetpxYm1Q78PPXatvXXrmyDkaCW5hqKnFSG6A2CDnB3txCaeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F6rQuyC9dDJ6x5emHw1V9mjMW2SG8bYvx7pDvjZdvs7qTRnhAZ2XT3yG7MjwDy5kLBqnFE6NXXqfBXRVpB5cm2v",
  "key1": "5RrQwg9oVm5n4SPBfVMAvwN92dgfYa2hWuQdeNa3eqpKiYHzCnD3n7iZgWrME9SzjBwARPcuZ8ir6JJBoxFPGxGu",
  "key2": "4uuWL158pJxkCvxnaCoBiovr3ymnUPFJxv4BkCWpY3oGuN1JqmKpVwPHRNPfXpjDyfjvkF3LtQwmqTC7dg5gcpd6",
  "key3": "2KfRv7MofYjc5vjSb1ZjBRgToaDVXJubkCCM4WPdS3qrCwccenxHK69fj6mUTsKAQm6YPW1t6LeSDXMp1NxzLt3w",
  "key4": "3KrgRnEKZQAzc1EmfTE71UBdiocui8MM8th5ELLf97rN7kNEiHTL3P1K1of2qr8HSLi1Fu3idoWFrdvh7vqvRStM",
  "key5": "3zFo1YhyoEQuaPQfBJyTNSWgdkZwYVVAmCQydG1dEXJ2wu2Z5Uf9ePPg3jaFjuXqsgmyWFmS6CfUuBxUVPas6qc4",
  "key6": "69krr1MVDSZ4wJJAfy4iCtMeA1qamNkYcbX5Dwgt5We4Ny4ZMXhcy6ktva465nrKDF3udy8yLT9tSPfMRZ3HUbH",
  "key7": "2wiZxjjL2YzFU8hzSDxaJZksdmjYk4tEetYT1XqSxyNgZfjjXhZJbfeVXELtxDsGZ3xEvDY4Wxiuvzi4vKrimymT",
  "key8": "2dttJ1srQ1XjPKWGa6sAr31xfEnWRxejXkgDbm4oqPnnwSUDp1ckEm2k2DT3vNGdAXhbH7xJj8vRDY4ZN3H6ziVA",
  "key9": "CLD8nDXunnnK4r7Bj4Ro2vwZ14VeCS5sJZi5n8J1Xsm1mN2ebpWrEVMvfxVEnErbbceqKQav54JE7AfJVEppZmt",
  "key10": "22XBUthmVCfXNWkzMmxfTYn4db77GpY6XdXPBYtcs5EdUnTfbu6GTERDGHhnyRk8DzwNJLMv3yeDPXuTF2Z47Pvn",
  "key11": "4LaYx9MxHgTjMtPFf5Jvo77bWVpbvT9UjX3uxLANNR3rSReg81N62up2CDbcStzKGeRToYCmhqiLDKpa1MYacRF9",
  "key12": "3g49EkqDx4MNP1Wx8Zfh42PWMzCpDUJB9wzCwcqS4Y7GgKCjukhL8CFqSXgVcZfuGc9A3pkfd3wNSwSvihqRnZAx",
  "key13": "2Vu8qHG7hGFkuiyqR9Whih5YW6tBYm1UpLNDqJdqjcLtWgyiEXk1kY38CshGT4e2w8e3gLBFHLoB284my2htpcjh",
  "key14": "2p7YyoBJ3sb3sBPd1BJPLjcMUCB3HJLLXjEGzxYSJCHe2pgDE7hxjfFG5BEUjHr9cZnUBqMVjmJntHjnYvPi2w2J",
  "key15": "6ohU6LQr2Trjbpi8XP72CGWgqGQphivH1Zu315o9eJYLTpcwBi7RHo7LJMnNZgRhgGBw3HKXzvAi4a26hdqXNz7",
  "key16": "5Va8VuKAG1d1WyypitybZnsqUEYhtjEGQvGvRFvbTQnV5KS1sPqKk3WY8MrUrNLieH6zPjoz4mnrMN2gonngRtdL",
  "key17": "cqgPLJ5aUKyBJe4bCH4uPaKH6TPsPsQ9wnRLknNWG1cgN9bhuixx45s8Zv4egHqrcSo7RGMhtEPaxomdrcNfbNu",
  "key18": "2YJHnm98n6RTkgJUL8JVb85LaVJYkRiD8mSHDWUofLFhnqhTLSSoniDF8SPTvhzQrJbKaLWzLFmZiRo2qvSxCHAU",
  "key19": "4C7RXYdck8NMkWSy1QcESuAcGc64xQVnSBRrs3i9FpmxXDqu8HqKmUfFJc3qn6YLCwafMFNmgohQSuK2cdbhJPyd",
  "key20": "3AvqpvBhwpSF1UMsf9wB6qfnCWeucVg3WeNTRiZshboK63vWVgXWKcyAdK5DYref8XhgbhSKJbGTHQBUT71p1FH2",
  "key21": "4wffPHzG8YfVgwB6fkGrtN2JxkVhfaeXazKqexSuHTw7WgzrpAmE4gXvorFeCZQALR8XS5dFhwp8haWUQw8qh9s",
  "key22": "3edzSfk3EYK2B4eSxx7Z8qN5P7tFaU2h32KBWgHwVwduKpP9p5ZeAEdUUZCiyRFiw5ZGsx7p8LzMrzPK5bnKRZAS",
  "key23": "5QX4HreLhP2f2DemWY2tKXuRMbkpBfgZ1jTm8TVGw8GQf9zvjUos4LBoic8UsmZSoEp32MXiT7w9uNcjfE4BTp6a",
  "key24": "TUxKpoZusXvkQ8XrL1z4y6ynxk8Ue56qvbX6LdKUMhfwA7eaXx5X1do8L8XQDXRvBA7zDEeMJvheRWa6FoQWPPv",
  "key25": "5dCwXjGXPhPrzuN4zs7kjjPFvwsjinWP9vcMFuBm4c83XPTx92B8yvwsDxbJuELa8PDhkwb8B76ebdSnozNdif4t",
  "key26": "2GWeU7vGpiUckuzd94ow5QKN7whHoqL34Kag4DFcVwv3hxqZEMSrfRKLRHdpCGffKf6j3htZXv24SQnRuCHHEKVf",
  "key27": "5V316S2JhzDsaNz1wKSw7txwd4cHUUAEdaiqcxoj3HzRGV8WfKChbiMQhy142zbTpPH5JHx8gRvgLz5kyGQ4x44C",
  "key28": "2f3ov8WgU5t8qPDdDyBjgX7KXKSeNbSESXousg4AQknS8vAGvhDbZUnxW9xouxiP3HRdoS5ahxFgBR237QoqmgKA",
  "key29": "48wrwCfJvoTqKVKyB9nRvw7PDYAWqychZTusHm11b5ZMuQoy4w8f2P1G9QyjG2NT58jyzrnb3vz6nBELjkM4GABF",
  "key30": "FVjG8f8t9Ktn3iDGvdFcwWQf4HXGpPYodE8Q75fZ9TbbtwRqgBcWT751s5s8WfwWJ3eKThbUfHKKjGbDJKZLb2b",
  "key31": "2TVgU1ZYQoe4JJBKYQBc4rmwQAqCvMoYpD8RChw7RrB9izg3ASzpbG96aTm4pzATxmHNsxpZsfDNnd4YmUdjzwG8",
  "key32": "kUXP1EtF6aFvUCbCwfzRcGgnbfgB5226MCZALt8aDwkRphNFtytE7UzXKdqWiVTmwWVRFAhr2NCommaH9V5NQBo",
  "key33": "4avBytNxZ2sDmvxxLf7fHkocv5BcpkF97UPNFzdtFaxe95iUCajkGjYu2VNkfn6UAK3wC1dsHjcUYxXhcYq87SfR",
  "key34": "3S28V2B25QcFUiByeuSHwFzAnUL271KmS1RgaUkwVG4n5qpWKnxa2rSGb17CNq3iR1rCx7tKtU5Vii6gSMdkJjdU",
  "key35": "2wjaEaijJSJUTvQKRYgyoadcDq1Ni6GcWAXu695DaosaooR9YrcuDiJ562G2XG7CspdTY3511qm9c9x1cn4NEB5F",
  "key36": "5HW84pFQCuXzTHJf3bDNzW2UZ4T4wbFPehpDVG2BSzkfdDtabk5QekgLhv4cuZDLQEeYTrW4Q5dEWdSzSNUB3QEv",
  "key37": "Fk3XtwutPmVJRtxPzRfpZcZiaD8vxqmRZ3HLPe3RMyP8Lgwd7GJiEzPWVD7iZDvaicWDVmoVCsS7AmTTYTH8qpS",
  "key38": "2HUZfezUvqjmXSjU7tBAEBFpj3Zd8r6P3S9kjrXHdpRFDNetVCY1UdBfWE1i6wcxoebxBNZZb6qJra1mKvHysyLa",
  "key39": "jj9KGX3p6oxXye75n3EnwhWVAnaaCpWyDL28ibJxaDioGSLFwV9mTwv1ciXz5BsjD9ZxhnjEnHHNZeB2SNi3ExL",
  "key40": "3xModtazxTcNp6Dq43nAL1rxQM9NZFxPyR5tHHQbBQruoWsSno33F7h5E11Peu6FB5Jcw1XGcFxYZ5q8pKBom7wt",
  "key41": "4cF2tjejQAiar5YerE5zBJHTXCcieHH6f43hkRwanot7okgssbKsT8xLUPUA2CkjBWe8MiNab9Sr3kwaC4waya1e",
  "key42": "4Q77jnzcWgtRURNaXGp5oqbsrkenkCRtPGm1R2m1Lf5qvc6BHNjB17prGtMxR7q8YhkmsjAmtmnYY1ajGuuKVeQj",
  "key43": "2W8ecRtfo7ex99Kr7EZaMBA1ew2M3s4gJ634DfkWzMZSboQEALQok7b1vKtCxEdGLhE4heuJg8JHrj1gNCzAL969",
  "key44": "575vSfGSt4gUyHUjWdqSHhSkVsNHeE5ec411VgJgPMY9pvMLq4iuwZWpLncUh6EmL9gyidrERyKjAru2ZkuoTZzw"
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
