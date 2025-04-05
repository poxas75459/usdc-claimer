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
    "3ZBj6NgPCqvEnNi5WGmicEGr5SF9dfQzUFzNWNLzJPA89uLrhMiA77zLAD7EE2wSwcCJV3utsHB3snwYES3ke92E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ifUvxMaKXn7u671L2zQN6NRPSuwin39pN3boD3DFpCBtxAVKdjTUAgduZMFpMabseU6vpTcB8qEjecktQ25pMBi",
  "key1": "3ou5asBeabZubCRApiY7DEER3DXex7N5EnFYq8sNvLVfzYQH5B254rUAiQVssvnuWW3NMabTH3L8NbCsWfkCGtGL",
  "key2": "2jnfGtUu9tXV5FjTauUjnexznuVTNi2jZFphbVPZPPSNGGcSqpzfPjhRZzZFGrKFjbEFmZmnwANyBPg8QMmh5JRH",
  "key3": "3aFYHBnmSYZw29BZGDTnTp65U3zCrmuYBLo2ASNNULA8nS62oHnHSpDqWMnPAo85PmjGAxUP9Tm1YFdAFtZ3jY5Q",
  "key4": "5oNiX2dP6rRiPyK16rDWtExYeWaYyxB9k9UJUVMNzcfNL7hd5wNcS4hTTNSoxzq6b7EWgdAzgcqtjAh9GagAS1cC",
  "key5": "io5KaiTKFq1vMaPimPNDeRJeQ3CzcTPqLuNBqaFk7xZY2TXcF8dzySgLnivU6mHqFp4kVcmWZTAKsgsSVPciwmJ",
  "key6": "3PK9GFmGcXLrX2HFFSh62XCDRMReHkdW8aknsjJ6L69nB1hRLnjZnQBd1BfB1MmaQXvoVK6u9NMbEPiwetvX5oN1",
  "key7": "qgVmxBz3uzqjSq66g7UPyvZJAkdTxCrKMoNWbUSNYZ87JBonZbAAweh9MfrJUFRZT4kmebA2ApZG6zBQCzKbJg6",
  "key8": "2vVo2Ku48bNFbw57hxHwgPj6MwtgbzDNayboKcwDtn8bN9sg2spnHXFbDE9C6U2eWv5BJ7imfXeSu7cCj7y3PsaW",
  "key9": "4fyzFRgEtjdK9KLzEMHned3SRHWALoXtaADwvJC5bb6PZFY7VJKb9XTjfmM7JrKgj9GiqWhpdWA35bnCeF9ZM2jp",
  "key10": "2NeuHqiRe7EFrnqC78uyjwToiA6oUB9BM6fMPBAtFL8zm6i2vHkmDHBUxkcWjugakGgB7w7UT9LHBVFCqyibwTwL",
  "key11": "4gvjaz3WWEeg6CjLku3ve14RpTTFCxewEb9YWQ9WmNMHJ5QFwWRyJVNPES17TUcy2xhrG7Q8VxG9JdfhHmmNC4WE",
  "key12": "39NAf1teU4EVicApNpU2LdPwg7rWaem5cJWpjyKcvWFMezgeGcdxSp4hkWF3CNmtYxSAm4sW21T9GGVqTRaBRdUf",
  "key13": "2QiRHZybzjPVifeq13qZQnvqVMq8kcFnQdQ42amXLum81HN63CbCLq6nU4vCgx3R1Mvxe7Ux4rxWYk7CPNYmbpvj",
  "key14": "2rm3Q6A8UawX297yMERpSx6ZxZnamiYNuX5FRahVtsf2NMfHqhtPdwFGvz7BfGEyBBmR1hgzSoGCYccD5ugSK9V",
  "key15": "2RqqMSsKTH5M3eWaz8Wfqru8TvcegR6ytsyreaS8pMZuX8yEx3apQ5QMfhFMGBuwwmqUGzNByJu9qo4HCyAFKgwH",
  "key16": "Z1vvEzk6CCq9UkDai3SFgZsR82ZQduJWWWZ1NwXJRKi99RJct2mFkmrr5uL3RREZAUYikRqkedGeL39u4cgau3c",
  "key17": "tGVY2EKtUkeNYbKxV4KcTVmbUCdNe8VfqSgCDkCiEZBM3CbFxq9YN95GUTVre25ogR9zVGHHXUDZrbDKJQHDZdU",
  "key18": "2m2cLtQ1ZRT6GsDtFgUitd9hnDXkVW9yoccbLv3pkCHoDGK9oTTHVoMXFdx9gz596f9UQDSdQKp2cKnePvuqkKPp",
  "key19": "yPmqibNqrECzcY6YAbZzcFVETcwwRdeHx43UG6qrcnLjKcexEv2Houh3Ydv7g9dz1MPpcdgk2HJU69BqGVjnwwq",
  "key20": "5zAQXkShSqwjU5pr2x3JibfqBmkTzSiDH2uVs7ihWE7rvwSiZkmGNG21iqCNb8D43a4xbrLTFDimHrfsZ4uyimSJ",
  "key21": "5GfRyfJowXcCkZxdGQo4VbGdXKLigymkdDPHNBE1m8N5XCBzas72YoQBwj3xtaS7zx2tsUNXEEimk1CDuBivP4hj",
  "key22": "3i53HkER4H4Z8rE5zE3575ZQknPvcw1BswLhV48SmeNbzrG8fCV9qUTzifGPtfCbeHSWUvP5oShZYgKRDwH4FFmS",
  "key23": "4vztXEZeE2NrdXHemy9uD5jVzHMM5GvqaMkcjydYQJMU6YaHa6cU3eazqPUyCB1TEmwMQ3fjwatCshaGKzupzo7h",
  "key24": "5M6Q4WfjnFTD8c5xdowZgUDf51jFjNqdmYiV98ukcWWVqM3sFa99ZVXUPn7umQfXJgh4EQ7ybRpbzqSgpoBnQCTW",
  "key25": "4ukVC4SmTaNtFBkHRGz6aLwh3iuB9uhJxpkoxWXM5BRPeip73B7fFTpP6kWLQ5mGdndHcmyw4vLdonkorztG7EQi",
  "key26": "5uB9BQd6waWWs5geHbv3vAqvxY5R1UrS8MfRW3v87QmqfSGSknmJJy5HgeABDiAr5XQBE3nCmwurosmatLjdZshK",
  "key27": "441YTRTyiLGwTqWcFQD6tDhQ1LviNpaCr2MzQWGRpFVdqfBMtuG3AGnMkkGEidpnMw6xGc4a2rNkJhLCuFahxG4E"
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
