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
    "32PpCwX3xNrEQhZEJxJRenT7nvAiQFpsoha9qYVroWntVfEnh9TcfEmAHtcbFczStAwUNKn7ipq4nCdXD8u4PhTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6oBDnqYXfNMnG7kxuCpMHXHYB6daU2NBhj5Rxnx1x5cv8TmFg9JzyethXwYXcGNjYmREHAvRiqWHGsEEcCBrhwU",
  "key1": "2oniciWkg3KnSHYBa6Y9WtiAuwdp5QoXscU51NCQNFTytokmJGuSpdNqZLqoSUed7wopyEYtM6NrVofpLzS6pvvQ",
  "key2": "w52VDRL1SZvqh5q2JUu6zPGuUWsqbgPrBd84q82RUc8Yeodcte28NVXjE31cN6NMG2VCj3A9W22rF8ARXs3uvHQ",
  "key3": "ZnMqHF3okfwjGAH2S4kVbyqEzKUT8CAGXjxMA47hAvAxPZRP6bfCXPD5WMhxjcqjknst7gqPQZMaUp2n7NnaMLr",
  "key4": "ETsjbBgknsFAnJmbL6GTLnqWBuEeCXEX9puQusygqf1iTKpzL3irvGC3UofrbVLrxADK24TGurb2MYBgxu9aAvy",
  "key5": "3Ygi7YSMfNNKZRjRgRAV46qzeBB6HDXGfCnvdgN6VVvDBa1DUsBHLEBv1oT9Qt5wskAKWRB7yb34e4EJi6GtmyZ8",
  "key6": "FJFk9JRDUt3YgKU9xPP4y4PVkEAvjXAnx4LmBTdbEGj8f3ABThKa76NDCa1wSN2zDiSpWYrAX5U17urd6B67fP2",
  "key7": "5yycDX2P1HcWrmBfjRmS9jYgscHaXpZoQJCwcXNRS8WHuK2ZrjnyDoGZ5whXvmFK1tEJ747zAGapEEjxfiELG4fJ",
  "key8": "eveN2zdPUoFbXAH3sNLCp838EAMeHEsZqkBHKnN1FswR4Ph2e7LgNsFx1bMt5Z1PZy96UV9h79pddNS9eQWhisd",
  "key9": "RFRaK3SE8865XRt84Qf8AsyyVNpfbK5dZ9uYrTzfqdDypTmUjCAcLjMi6B7QxydtdkW6wcSkFknnEknY9hxeKiD",
  "key10": "2K3nLNpS3QBwVkQp96bn4zEbaK4qr8sranjbMbxADE3tLurMc6AF5GSP2yTEGryzbkG9vEujF9WsB4BLshSMk7cr",
  "key11": "5VPH3yBhuAPM6bxbgWdEwGXXYNqJqBva1kjKXDu342zV5VYP4nLqbZdbB1YP42YbBeDeYwKfDJPreyCnwL6YRv14",
  "key12": "2hsnrS7mEQDqDs73NHpBRUpVrCEWCbtBTcuqBxTArK8QmeXUcVYpCxokv3SkAhuMNCeFvLDcRWoebbYR7iKXZZ8v",
  "key13": "2KP7FVc8Xsscg9VP4F525acHYqVK3vgjXuBtSEfzw4f3bMk2caDLTVD88YDt36Lmkne5eKBMHpo1ZZtJREGPhxSF",
  "key14": "5Uxvj9YnGMpR4kFC1d222XUMdoGfAdiBiff96fSr1XriX6NMFLZdFwXtKmbZc9tEqQp4imPdQ99wQGDcWZf7Gtqr",
  "key15": "Svv5JAq2o2oZa6RvR8AAS2KvtCRWK7cE5Xh3chXzakbsGYdYbve8Z7riEMkKBr3V1hM327KmQ9fd4frWFbrEo9A",
  "key16": "2phaAFixX8DkbGeggKkcXJQMoMLU6t3xop2Sk5FKqLCpEuvr8ixh2XPsyqqaethhAGa8qzCHcgT37cvS7yatorf4",
  "key17": "3CfpWsUBVzjTPiVdMdz3vXt2apbg6uwD25ZGHJo45NX1duhg5qmud3NxiGvLg9Mu75oApPhp8rfsKxVGqXwY4yz1",
  "key18": "5HDnAbvQYJhnp4vLbatJ5ynp7d71XGTnzva1ggmUrLPUoRZTF4ekctKvsZUQWok7Bueks2c2BnAkwEGzSL7oUgLG",
  "key19": "3HJPPrYqKprp4gB6zgc7XX6uioq74x1GezHvGAJDWLSmpG6jF9t7XxysuHvCBF6yfL8thPmFkLRB5feuQX65SrJA",
  "key20": "4inHxVKZmAkFPtfQugAt5XsdbXyHmkWAQRpEGo6HUyhW4SQJyaHt7uYNizGfsgsSK1tyFoLMtKqJDLiUt55z8DYQ",
  "key21": "24NqjfqufBXbpXJahiF1SH57A8NMTVJvtBRukbMghmXkJFh2invXq3BDLMtXCSzxpAyUCDtenENWYVuiJyY1Jcn2",
  "key22": "5qsuGcJ45PUqorfYsR5VgFpYPzvEhQaUMzdgBfnEnrEpkWKKvBRC8Dy49wwE5dYLJvKFBA4rY3wrSikFCAAAfdkG",
  "key23": "3p7DqERi1vpm5BSNRQwnpuVttaQBNcX1VJqYejskgoN2eM7c9jNJPtqcMiSCFU5Yrj3Cfm7qegfjrujAUzoUpHcr",
  "key24": "2PNGd9dFUaUcAD2uUR8rS4Lc7zYoQarAB55DJjNwJoFAUFnVETtP8tm2mrdwArBDb94knmoz5FnXfNrCkyHokpZ1",
  "key25": "4ej17JvQ9KnExtuZRws6hqrw3hMQ5WYMUyzGo21PxnE4Ncuui7TnKbEd3UNrWCEaaqauSB1RwDrpzHSonpGVJZLX",
  "key26": "4Zbz2N7J1TkE9oJ8hNcefi9Dyi62dUFzhqfcBo8voMRdfzS3KdoNBFrtfJBqpFogeVnqbnzr3YeQ2dYemLmXbvAG",
  "key27": "2m72Yz9mBKURjzEk7e1zzc2y3CX6bA7V2CpswQfxJmSH8qnNs9DL8YQFmuLxX7Vf1chAuCsFkt1LzDfd5EwVaZHM",
  "key28": "2YRRnZ25YRcFdqgZMZ4mQJhKxncg4jnj99Aix7FUGF5sQq3d6bn4ivV4msRkdKrNhNihQ93JjVVWLoQdrYPhGpg",
  "key29": "WfjFZyWMNpuCT9UGPnU9sYz86QTnmzDdnu9aFcDMfHCyqfyVZaaKDjJ7SgnBheSVvp2HyYrqGdY1cWNTozsfq4e"
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
