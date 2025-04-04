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
    "58vNd471VWqsrscULDz8v1LzXAWhyKoAFv5Eb7VNGMtUJUQpzuRTuKNrTFcGkmTcbhBRyvujhAxB6fZo1LVjonSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zrvxLqwqN1max2YQ4UQTC8XT52Tan1CkNZBWQeNUnft9Z6V1KqUsHWaVgDVB9qVjipoGea35QDdm9waThCd8jT1",
  "key1": "2Pyrva7z6EDHYTScz2FBfaxCnnHVY3NGBQMznxsbhuVqpXerqg4D3LSrkoKv7y2CqaBGdYLsykV3MSedTUgPkb2V",
  "key2": "5Nkyjxjoty2vimApvqHot6PvQdmkVK6e5rUVS9LN1TPjSoRfnsXmLBGxLrEzKRRSfJnopfj9w6GnkWFsiuVt8YpV",
  "key3": "2miBX9dggFCMt7wf7shnoBiZG4gGfPPHfxkpwtvebQJdSR4EDbuyKKUSdM5BVPHAsWXwqqeWAxRiQzYLCJ3M4uy2",
  "key4": "5FDMet16PUiBKHUtXhd1s5HKYCCVYrax1yYthP7QehBbUaksgcQzAdFxEApMtBtrTeKBn1whgcUF17gR1cM8KksQ",
  "key5": "Db6aPzmgSryhmHcpev7B6oYw8axk9DM3pcBWEva5ehwZj49Z1zRNzXds6f7bCiCcyToUapjBDiua4yE63YvyFYe",
  "key6": "4rr4pmXCJ2ca6MponXAv42qb9BxSH7pH3j5tboWtvKf7roaejV7KPNFAC6kqvKBZmu4FUQHcbjy4sKmRRdqNYRhx",
  "key7": "33pTLGcUGPY6UgSCPAXYoiQoJngJ2jyCUeyoyV3wvNSc9HcvdY88JV76suEfeGpnFB6St1vQvwFV6S7ntW4UcWSX",
  "key8": "5nxJNA5AAQ5fhZn6TKpcGWZHxH8mqF26ru77GCsZhdiJixg2sUaXysbZ9km2Zwo1hpGtLp9iB4pfZN2c2pmdrwcg",
  "key9": "57vcWhgd9ftSXm8vAoSGi1kAqCZHRcSepgmG2aNUDb2adBXnmmTioHXHuU9r994Yb7Ki7f3EpUUNNrY4RXV4a2Lw",
  "key10": "4JEUJTUS9aMgGetKQef5nuSjKsohPcKie81hyQzBYLrmvHeWhL98gVU9RFxYMHPKw3QjYGkhbwLrdx6Nh5hrGuU7",
  "key11": "5WZXE7hkGiwS9wey6uhf45jHrje1fmtqmCkYnWVJmy8goniB89zU5JvUATS5TgFcXPjZBKuPe3wqkCvh6EEXPUTC",
  "key12": "4mbYAVE94R7LZiyJuZj7xyMiXvUaPERxPQTMPfizipFAWfEDmVPQgmZZgJoazxwmreWqCtbq2urmFHH3B51GbXyT",
  "key13": "4UWo61PjY5ojFnqKC6FBMX5vnnihpDeMxq9Lw1HPpG2cTGSQxwo923nk5MqqRo2kiZBYzkhh2fBfMPkrLXbMK8J4",
  "key14": "dS6Ks5qEHcDYtoJxfaUgJpSutTEYy1GeKwmd1pHumJ4k5MMvTiQvHEt6y4cda5gBaoczZ4gQYqfLBZdqRVafTXz",
  "key15": "5AoFJsz3Ric1oNkLkHS758naS6VUgvCEyETUUVcPBFKw1bnukyJTyNcx7cYKftZK7oCWcXh6Tv9Pm7p6YHKypkJP",
  "key16": "5RxGx2nKYZAKhaFAvwb2ruqp5odqTHKPd6Kjt3aouSpHtHLMPaEcJexMyJ7DvWikGWSBW49SNaQgg9N378X89AmQ",
  "key17": "HirjQwAZbxEEZbeTWy7qXtiEButo5MT68nHTixcMdwLr2KT238RL9Vd5fov6LtcrKSZVVtkS8FHmgffzp5dhsd5",
  "key18": "3VGJx311sJMLLbv7DpFDs9p5GbRFdpvLpW7QcURb6jraQzccRunQ7QiPMCFddwf2aGxSDvYSBMzewXDjF9X39axK",
  "key19": "3NjBvs7yfgSPEtfvuuTiJcWLCnHbVoerPcb7CNQtTgN78aC994Yg3vQs87MymeUbJJF2LXX8YjqKVmXBCEQqMsUM",
  "key20": "2p6K9aKhvbmZE3CrZqgRS6nv4CEUJZiXd9TpLm2spAnHic6gQpz2PfRrFqFBzuL4q3N15FHKznMLNbFUaRgTRAcB",
  "key21": "5N85L7nSfz99X1PoNTfA69akERzgPcNocygGWhwHsKTp7wbH7WkgHMfqxz8Y4Y5y1Zpn3sbkK4T5wtWfDh3kR5qx",
  "key22": "5EijJRiqqj1kH2yj4tX1cyrZbhz4ZTE8ehmxptbGqcjr4KY56MpVnB5e67ZWpw3chetasznFZDM7b4pWzxL3hrVw",
  "key23": "2MqvBmRT5Xj2c2QNJYrTWvMVhKsampiiK1RM8ioV6mueaCatJ7pGiTXsQNaAGBka73nHFDAS2eXjDRJVek1o1Dnk",
  "key24": "62o2bFqTAtS4tuV24D222DwBnWyqfc4BABFp3e45BBDYE7BSnGAhBHHRYv5Hu2VinyaFFVZGqsz8PRKUkm9GgfkD",
  "key25": "3QhcYPbsvzJ7sbGNkRsge4h7x7p99YR8YYqMF7jteG7WX3xbp2aUCFLW1cgyd6YkUvW8jAjnwRSUY9ZNPSLpcx2F",
  "key26": "5tA9jid8cqTZbnSc2pH6fPVZoFhH2SPizoeWYRJDsqXM99jbezGY8SSa76qigTKQnQ2agCEZ41QQos23tZEoQrFx",
  "key27": "3VrwaDU76MiJbvdSiWgsmyEUab6oRMQqsE5FfCN1SfwHAqQrWVq8ov4SzSik7CzZCb1UBQRqu7Z43XG2bsvttHQU",
  "key28": "4pW87PJqdVsD6Lrfnw9z8K127TyrxWHmJ9qyC26qCVSLSprGRgLeD8BtqAf1Ljc3QA6DL2BCB77qzaGWFxY6aFPU"
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
