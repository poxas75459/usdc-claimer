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
    "3gTUGN6sytG15nbQU8Cb3ruVxyrDzuN5i5W3Lfj588yJq8MoWSJA7xhe44E8h6SWjKneb4gctm2bzPxPTq29r8hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RMT1Gv1PyqokCepwaNuayB6Mghm1yiN4YtBJs2ZDWngkf9qWVuD4yfSVuEaLTGAT8ewFxVaY3mGBWYxyh5RKP4a",
  "key1": "5GZKXWTLeJRkUqydwGPtBxU67hvhWeqxD21oAhmPraeBC1DGpQDF1a13kup8p3KFaeLsJAH8NUibueWiboZnRdKD",
  "key2": "3stYFBsUB2Zpo6uLWxa1cXraU8M4oJbVKXgQZRxVEmBfakGURZsUfHoAeprRgz72tEwgBzj2mjx9UM9piT53cRWp",
  "key3": "PmErmWJJGTVbgJJTityg99NyeSA4fEGedsXLP3aANTtT9WRJBu1QceXdmxaxQW64CjVCTEg2gnnfHgzbConqAyc",
  "key4": "5oAV1yPpEyUCfM2K4FQjrdj4bpz9RdhEAKdRnxxMFFt6BxpFf579vZHmox93pEaVY25YMRTpmHPXutwtiUaNrwCu",
  "key5": "5nU96HjvKBp8rCL8PWUSDKapARp9iEiRQ7oEkhxt7N1yFHC3Y3SNsNbSp35j1q7yaWNNqcqtTX5179eMhoZoifBn",
  "key6": "hk5KsGoyMhT7LA74kwo4igfPzd1vanmV6SyJkikTrU33F4PgKip9Qv5Npe6G6G6wqyGG9FUGAG9RdWKdrebxnDq",
  "key7": "22gZHP4cY7ZTuut3STdQYvWDQHxsfzB1UEPggCheLWkQTXzRJNKFCiPPd8En4dc85eA6uuJS5AR5z1sgZ3hKdjQc",
  "key8": "1JV9Z5sUErAFyXZtv6LtzPXPYbry287JfFeo2qT8wT4nNaJZSyBb84sDF6uC59yVnxKUdWKFGJKSCFeztedEkDr",
  "key9": "5EzHaufM5SrhP6H3ZpvGoM4nSyojvMhygkucaaqoTkBzKFGuMVmHdtfS9vZtMfzZKjwRSGB93wYQMXe2xUbAp17q",
  "key10": "4UctWgVh2NzdRoQuEbhQhNSKJBeMLBM5VCs4Kxi33keBjJ694tdgNBDvCVmaDZ42P7xTnxxPRKw1CZ2KEBVE6mKo",
  "key11": "3Ag4CmZ5DKJnyg6gRzVqbTbBseZtXMBmgWf84wHBB4v5At5L9SiHswvPxg7zMsnZL7VPU7wraPo4oRRktKZsy1dy",
  "key12": "2gMNyCRDuFRDDTe9ay9r5ykpmpptgRNTCiuw6x9Kk4SqbeqCNK5p8JQCP6TP7tiB9ssLixWKMYdS7uDhJs9vMY7L",
  "key13": "5VyQNvsKQjfEtXByvqVRE9aWrWYy4z9eGaEtewHnR8KRm2ZymeRDTEz4tgmmLibvKPk6JeuMUViUYmYVqjrfXnrm",
  "key14": "5LWFDwS6To4NYRp5DJUGuA1LhZAzX2CyCiUtCru5veEhqQhiJvDnRunqvf4tn2Y6Kg6u5CSv2onafCLoz9nVHDGN",
  "key15": "2T6gLjPaCqpmBDVkdRyVPGwmKjkpfbQFiPKobiEsAox5enJ7Xz46twBTTncXWrhAwCdnHTncQyWy8wFFFzr2JxRL",
  "key16": "5HK6HZV5VbC9GAQvWYYmVLuChYQke1qBpgg1jjwtgbXnfYtjtydkS7Rir682PZeP9aYHya9Amk89PevbkvqzZKQP",
  "key17": "4hm7io2J7QqTjcvZ9qY5qpBj3rGzRY6C8ZGvzpAZ5yg5ioBrqS5AMmYYHsEjKGAUvfCKeB7KNQgdwedfx7n3jG9A",
  "key18": "MTMpabuc1JHXRvn3CbBCHFzUpp2MDEhbKGhwZqGJyTC6A4Uh1bUh2isQqX2o5KwVoD9MDizvc9DQkYTFpKAfYHv",
  "key19": "2Z2iiLyZffTtkxg71nTqGfKkQgiqFDJA4z6Xp6wdkhNUf5BHQqZwjGBA4pvuW5oGRYypBcXr6sttWsu5zQb2GMW3",
  "key20": "GHC76XDEvbShD2FwYfx8qECXQ38hi4q8tBrqiZQZgK5Y3AZHVtC9AF49Zk2dxA4H578nm1usJprR46sdutzg1K7",
  "key21": "mZg5svPsKvKaeuaW2no2LMvvdPXTTL4V5UdmhNWrNhAwoCn9DYLbT61W7ZFXUwaqy1xkvS1rEf78SWWY2xVeGYQ",
  "key22": "7i2rq2RKVKVkouUgG7yfv2ojZrVr2ECEF6RrifDoXEF1cv9Y1var8iHhQDwUHYCcfm5XUH634cj87UFZhVWvD8W",
  "key23": "5F75jTNjmrXVunrbtQffMhpa6gLsaDdextL9xhefvmCBKPnkp13Zg9q9tA45TDzYyDNBpNG9jJ7n7xibkSuT89Ek",
  "key24": "5SJCesHhzeYJzcaaH9Ke5dE5XffkyUai9g8CgyAhX5R92dCPFjykqUi2fpchqWM8Ny7iXtWi6PqFeFzb8pyJN3Xs"
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
