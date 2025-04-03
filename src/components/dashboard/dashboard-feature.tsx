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
    "2LXhj7ggy2dAkvUBq8MNa3wVpYiyN2XytSNzRdK7GxCj6dzZsMUkjBJi2mM5cc4kH2SRJm8Y2ZSdaRaJkKwbyMHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nB7CBdjK9w5HXdWoinpwsyrptyVQgpRDf6XCSaTMohpX9psphhmwUJjbEhJm5rA3EATNwFaTJ6QRf7rqRQprB3B",
  "key1": "Gc1XNKJGHvWMYa3JwNtb7uHvpZ3K1S815yHBhSktnYihTngWGusPVoN2C6mJQDSv2ZWC62fgyxKjgcEFbee75o9",
  "key2": "3MhNMSpE13rMmDAGKwykx2DmcruBDmASPgJfkQMdZyn9FehETUMeiQpwXpn2exKzWVsYymbPqaU3Puf2jxxdE56F",
  "key3": "5J5GGQwkarG2TmN4FdCDX8aAouw3XFpnhAnWkhLof7NBVT8p265U1cuAS8B5BRT36MtpQQ8opAxKtfS4LKfhw5AU",
  "key4": "3tTuHxsQE22rLAGMomreJj2D45MHzhqVYpZiKsSDE8hYkh1zdQ3jPtekq78kNHBken9iKkCBXb2vcjnWt9QGfJCg",
  "key5": "mBaSaZiTQ6WTE8DMYjGZjndNFhxSKyHtokFbKFwf7qz6xyivifniWgReYxHy8sSycszrNUebiSUDAHWRBQxsoFg",
  "key6": "3e8SEd96KTor46KKRQKvBYHSBPfjTSJfU7LYF4ePLdWvR7sVjvv29jpbdNP2trq3MHqg4xq6chj8pFbaP77wVteg",
  "key7": "XhF5AuxexgtHCJwEZEscWrKDTsHbf8dgQJaUqV2U7vxijHCNj9urdcUGDrZQ5goke4npGc9GvXoHMuY3wTpnzjS",
  "key8": "G3GanQEokSrGDeSJqnCCWeqPqGL313HZyg8ZJTa5FswapBSQjQ5rkTVvscHPdzDhU5TreLiCRuQJRPYKFYQXCNc",
  "key9": "5Z1qcSPEEp7tBnfdAcvkE2DQck5HQ8EdUpLPKCk3q23EiU94VJUwaWobmBJFehNugAeg1PwsoSd2ZQSQhFYv5bff",
  "key10": "3uGaMQwzRmuT9qKvV3mB61LhAHA9E2v85h9qvzbieMCao7u2pzkj4s3PAFcd5VrMPSse2Y451t3dEqFgV7FbnCEL",
  "key11": "2QQTiFRnYgCmTeLNp3qeHxfJogbZmbbLuBrn7EKqC1r9MsZohTbVgkfcGWBJAfrvTFZHe3sfSHiro4WqvenD7C8v",
  "key12": "66NZK6v4ArFKK9ZW2Qe6NZPhFCxp1MdAJ673xDsQbXN6B28wdWWdMKwj5wJyKNKbuJG46vs6FwC987n45kak2qrG",
  "key13": "t2unxN5cjr3EBp2rpASv5vCXhjzLpxdDnUh9PjKCnhmNwTcknyt1HjtGjyq6ZrHbzVxH6UKVBVHYheoKJJgETZT",
  "key14": "5pWGrmJCeBLLxUA5VJt6pRSydTU7rLdopPxBkFUwCY1MMN7An2Aocwfu4NSN7eN3aJ1ch9bjUGsNoXeCFTghA1SF",
  "key15": "rmvne7BE5WG32AY88rj7jcjpC5eC24ZVN9LEQQ7eoESNPhjTUcruLReU34o7yMphayF3vxGX5LVEQYRpsu3fA8E",
  "key16": "4JYJZSguoe5nf5L13uPWSAMDxPAgdwzAns3Q6bKTCffVXaCr43BgLgmqHqeGFggWAGmLs5B6n4wcoaPGz2UKh1tK",
  "key17": "53pLDCoLaAaBDoe4uCwC15Y4LvZphsm9ox1xNdGLMiAKLLt83ac2CzYZW2ovZ1F3CyUShn47WS8BFjhw6KztDZCc",
  "key18": "4tSjmiiJU1SqqZgo75tXDQ9XqZ3XTPebByyvKvajYZZ13BfYgQfwtRXfad57idZkWUti5wwWt8ERF2ioP7zs7wXh",
  "key19": "4zWhJfsAfw57eHqC8uBaD3Mgw3KkNQb2kXrRU1pXvKpnYKfEQtG4Z2T2b9BdW19V8UpwUqHEez76Z9z2S7NS3Pbs",
  "key20": "4KwECt9PAPGm8baMkZvPZYuNAxki2fDAY9hqH5SNuPwcsPDYQ3qbrNeJQncvSSs9QMM8eLDkztkYJoueDqRgjtn6",
  "key21": "Qnusby1n4uMnyWjgd1ZPdchqic3sVph4zkzow2cSPZT7mi11ERea9uuirYhafCLJKMyZ4L5JqCKsiMN4hvsea3V",
  "key22": "2zyzKMXTudDkBdpsvG6ifWuGGuNuk3rvsDJ4gwtZYBSodQ4n4LkJFssf4cia3pNTtApbjtgPbtWtDjC6nwB7BdsS",
  "key23": "qRXv6ZF6UF9ohQUUrf9Dj4FufKGhgykCiKaTEVYACu7dsXSynsigQSmrgs4iRBgHZh8hyPUHZmg3TGPXgCzKDuF",
  "key24": "3MHgH1WB1GHZc4euqPD9fcNDnmRqzSiwTuCCCpQpqG4Pu34nEYeECTJbuCZ2n5srVobAoQg6GBoq1EJbN1LV68dS",
  "key25": "2vTBrBCbv8cHjA6aKNu2oGzFMZBTkK7QzdEsGgrvJdiG6CNETnFM5iTdbb8ATatAieE7CHtLjuL15ze2MyMAc2PZ",
  "key26": "2rsWqKU9Vt3Axa7xxbSkarKy4E7YE3Miq1ujvHWifQEjtC36coZU3GF46xkJd8rUCgtREgudCmW4xuUsYK3oiasm",
  "key27": "nDCqcKxfqpPwfbAygJQvP4hLibehET3k7fU9hkpV8SaciSgVUuHD5Z6zioSwvy4Cqy3EiWNfsBT2qRVSaphQnzi",
  "key28": "5U2eC8NV5UeYm99pHZEN6w93KVzNH6LQbrCtwqEgxpGi54hWcWjqekpNewVorPRgWKjKjVpL1RsddUx7CJXdW5P4"
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
