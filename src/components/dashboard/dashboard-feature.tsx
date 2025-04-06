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
    "bBPLtRVcyoFCPfgFrFXKy2TiNzH4r1NTQsXHDMDto1UJwz97KQnf8DD5hmYGj7nSyZjXPfEgBdgoD1rMZAFzF6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23P5LMpr2trbE77LaMj5wtrDe1syfX6zb7ZZ2B4Jt4bEgDP3eKR838Cro7NLXkBFj5PLJmCVmXSqUzWUhNcAXF2y",
  "key1": "5zK3t37PsrCdKFQK9NWAhKfqdZRffPVyNM4G6sFTTF4WvyYSQg26kuGx4FEWSQ6shWyVvVV8ZCJWbVe83ne7SV7L",
  "key2": "2YETcTzbg3jEdxUJws7B6W1tMzZjhciUc1wn56MBsuCcTu1roZYExiLiU4mQXjj53wvLjDJ7PqM7QRkgcx4HCjsL",
  "key3": "3FKMAd2Gr1nBqeQxuham4AkrPVxmunBfzJiwnw2uFe3fthMaQTKNboGkJVMX8EAu9UBGuFbPrMUysYZoZNUDiWd6",
  "key4": "3fZehj7KZh6T43khbwSH1VMhJ89XmuTMHTm6bPkF3BrD4XLE6At5mBtz1dhWP1MBaq3EmW5YAi2YZR1xcJDGknoz",
  "key5": "3uDE7AHsFXjYrS83wKAmTc9UkaD4EcJEYPZUHpW2k3d8yLkBD3h8ePme6PaLGHLDM2Pq7mqDMgzg5ZfA1xmGABVW",
  "key6": "271TPJBZ9tpZAAQ8cY6Ktzbjd82Xh7j6GCLRaowiUp1rj36z5UzAQKNoUaHtDCe6CXWN3BVzmrM3fMu34SfHEjoM",
  "key7": "3dRNKfkg4KdZMr4J1m7G14pqckoCevfLqyhSPRpUv1nsKd4dwuyD9TLcTm3UscKCXPsb4vkyuw7M7E94PSHHWDSW",
  "key8": "Y4WzX9J5ucSJqPdB32gir4bVkk4XCqf1uyaninEgNUP5pV6QbHvXWD6oDqai3rnaL34Gy7uxaos714LYBZxtjpM",
  "key9": "57SdZ4FrLkHi2uHHR7HLWLbNzA63UYK7aDPH7nKayauPNWkFgQjU86fW8Casp7nSQGkHhJkZMfhBVk5aMCxq8dj9",
  "key10": "2kL5n9d2B1a825Z2QUwv5U5dUVBGBxcntbkKzZNdzohKsdXdjNyyKs44MuXgpwfFVgkrD43C5twT9HYUoChhorH3",
  "key11": "5MqQwxBZCMBatwPpujZrBJwh6qzrLURxudR51p7kjaVfX6EvQLKY4CGT86vyD9wq1ct8R3Q1Li7EujTXpzNFywU8",
  "key12": "4PX3sVyCVXc7R9iNSTTwkcpC3s5bTKtLdrUHpMtypu5NiH7VSqvyT1bCGnwzvWeTE6hQ4EZvaMpA7QB4CMmmtQvt",
  "key13": "3VMMaNMRumdGxNk3Knxc2wmvYodice1k7VMgsqRWU9Sejbux2hMRk2xQWDBFmJGvNKHnDbUVpk68BxcCDLEPbZrU",
  "key14": "3pN1FoUUXaZpCDt2NjX3ixGPeVXjooZinDpqKW3HGqnAh7Cf7PgJj5SKCCUQhGfrCbiiHKFUTsAdrhUrZXfrXF46",
  "key15": "7tML4EUwkph8dmwYvZeeixkJTrBXfJUY6WpeZcnT67Ks46fwv2uPg2Mc3S81cE1xh9uNnQ67PMukvvmySLjtXmH",
  "key16": "4B7ZfFTBc6BHQSgpnRXPE6UrZhacw9S8DAvrZmZ3viqFpwcZrAcMEzNCYu9hXR2EbGyy7SZyaZkYbSFEdVvxjBoh",
  "key17": "28oGUCTJjnn9bU8wbjoQ2ZPzRWFkjn6jaya85b2mvxiBif9tX8YBvkGoNyR1FGRrNURcCsyEqdZLKtgt6Dc4efZd",
  "key18": "2gemi8NYnTTqG1MV6vGKkoxFkvsG3Lzb3yrd13QeAGcXsTxa3xidSMfgr5vMkZkuiHgLUQQPsy69fPPy9kZ49HMN",
  "key19": "347ymKbb3RRADWrceHBoNd4nwuTSBVLesyw2edPfUdYtWcJHKRRaQBZkWhD25XbgtQZAdwvTiqdk2KpFsCRnf44y",
  "key20": "2yBmwqNqBE4VpgkQeGaEjaueuy3TWaKEXtvMMfyiEK7Tkaa2WjMshaMGafVLKbvB7AHMXNN3g38HvMDRPbVzFUf8",
  "key21": "JTEK67RzVc37ufAnqGoba4vHyHR5gNQeeQQqq5s1ZFKpudWQspops4Tu3536yZApmyK2fecEhrTZ2FUmmu7Voso",
  "key22": "33oWDyhRU9Cj9Tgj3E3fWYqs6PkG2PEbcTkUqu85jrUkRmyVUyGtoiDtAwENgMToXXhtmaEDZpS8HBb36hQATCVr",
  "key23": "2QAGLKFk7S2SRUK27kdD22eA3TfB7W56iN6SnqFavxc1HoVYKWF2KxNSmHH62S1dMf1k6DfBDynwu3dPgECnjCoa",
  "key24": "4YHi7hGvqPTcq2oLgNhkJywTv4XyEeqpk6GAxfE74ybR2dpAf9xksgYwqRVPbsoJs7AvTAJhXby8T1cz4GNCrweD",
  "key25": "icsUoaT58Z8Jef8B48Xjx91gTnqKfgZtAitjgHqua7Hhy9LVqHjhZ7bGsvuTWYhQMWPamCtSy7G2XNVBb7W3FaL",
  "key26": "4WtE1zkj1nzuWwGj9Gz3qnq1fy4DNcMKChMUx8fQJJyjcQwaCin7CNbhdc7SYCoMV1pghw6EPPK5xmyWRMEs2AkT",
  "key27": "2DrUesJ3ikgKzfB1zLo9eR1LF7JyXpTLHc7MHNJ99fMonHNS7CLzoDdFDRFPWthAGR7NWCFP8KEGGa9CnMHJMTkh",
  "key28": "5hyeg4tFnU88JfQjbb61foELAeqwajCmveRm4qL7Xo4Ev1YzWggH3rTHFZMvkRcdi9xNfXbWkTQbNQyyqRAoNSt4"
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
