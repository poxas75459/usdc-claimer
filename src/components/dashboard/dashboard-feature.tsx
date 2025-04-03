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
    "61SYjRCR31QZy762ypRc42j8TPZhZTPwSgKzdDVeuR7gz3SQqFBWbzDVAdtB6FR3YzZWg4sSkiEhdHHn4YupsWok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h42j4VZAjWByDxtqsjcWNWqWBLHn6mQfuua3aMEeFTU7U32V8YXzjrd1c8Gnb8SBpFhK72HXCjr1iioBofTdQS2",
  "key1": "5NicWP4uJCRauop926fNHSVWn6fbeE5nTy6iL1zB4bs1UEYUUWMChFxWdf16cSy3ikaHUGK8p8TAnT2jBUibd86t",
  "key2": "5FcyUW3GjMLrffApmtBs6vB9jeVGyD4D5SRkxvzAo2jCAM8SEfAdcwoedjP2mUJzc5okghio6Djc7tCK6ZTrCfc1",
  "key3": "5Tw9tgr6kMNaqAh3P1K6eTawv8hgqesRWQaBFWTeJtza9EdqZw9dV4feShZKa1x8isHWSm3b8o61cL7nSkYQoug",
  "key4": "5rNWy6y2gnrfvJwjDBGZFoQPZJZP3hxhuwLNEa6UeXSt6qAYVzgXAgSsXUZ2tgccJLakdo2P7zb5wHi9VMgWRgtZ",
  "key5": "3zttm8F673W5wH7gMVV9GaYNgPAF3EZWmpzJWuMYfDv7bihzr9zSrRtBYm8QMvvjHfPyQE44yXmgSQxRkJ3qCrDu",
  "key6": "4osnPaVofr2PGjkH77RPy7wUaswM678sQFLCq23XCD91nLZzhwL3zw3HpEb7brtxVxw3UJNJ8tpjMHUHR3uGda95",
  "key7": "26y1ynnJeDv9XkepMeRHdkQFbiYB6mUSuC6UTcrTCxi8dWYrjTtBWCvjfFcwbXVYfAfyMaJG1nvNM7NbTyfa9YoF",
  "key8": "5he6bbXSu2Rdt2eSQ8wohczksjZpjoj4MxtoSnMZcqEJzas4nYmpwXVpDx2Jbhfb7yXjbLKZhzdFuEL3iwtm3nBq",
  "key9": "2SAP8YxXUy3kU53h3PG94SfwU3bsTNhbwmwYYsfn4gz2xxEiN1TAHvdHqBGjcSYmA7aft8o6yAH4TbnDq9eDvaYP",
  "key10": "2iC6NU5Sfauxo4gMFC1W4XtDQbSFWhCi7UPQJ7Yvn93rjsNNdVYHtrfb6xpYLYLu7hx2V3ir7GMVqK8iwaQkvVgA",
  "key11": "5i4KrqriWDzyhLLKr5MU2YfcLBCXhbUP4QjpuCB8qu1fAjewMBpj6UhXmyHVXoMcRRBE453nGmtPx1bigi5tNW53",
  "key12": "2Q6n4VkJPGGvTAfnMiCKKEUMc8sbE22wBjvuDHuE9qYayJYGLNUNwSfCJbk6yMYGaiTya1xKFtz5EP2Tmbb3SkvU",
  "key13": "vXKgQxDX1h9pFmCvUmVMsKhZ7drbf2kEU352qJcFPmgqwQjhBE5u2gswWuAkKHpMBGEd7ryaC2wzF5ZatXvzppY",
  "key14": "HqewsyL5RXkwBwR9ESm2XFL7g5gezu3NsrpE9eFhGXyBgcAZPJmHDyk8pxUf1rLf4FE3U2HmNvfbfnySQqRq2Wt",
  "key15": "3XEEHWjjwCmGNycFbnqN9JsuXrzynZtm1uJkLVTrqbUsvQJta7jwVWRG8dB2CqPiGsdW1yG9Nej8d8rJbre1i8xS",
  "key16": "5APyJPajAnD7QV28A3xZ4Ev96NroXqReQF6XVBW8ee6srKF6y9BDhG1PptezKf2jXtgG6MLci3QsAvW31QvwqEtm",
  "key17": "4LkRUjdYJKsEexirGz8hdaWqCByqSqhnUbcHjGzhwuqnoKnWzTpFGvLr1Fx2szQ5JwmfpP9GxdMWUqHecd76N2Jt",
  "key18": "5G4NPk3Fg8mXZ4L9W4kRuBQdimwMTsA56xhfemHhm6EWtzGurxANAzC6Cgdf82ugLznKro1STiwpcgNAbaTTWVXm",
  "key19": "4NvjEDyrxvYQkBhpDCPSRSC4U749BGV1yjX8HkyzpgeVpFtWo7syhvxE6g2gR6BCVDoYgCyigwzzDepeGhMbrdh3",
  "key20": "3dGhpZVpdcrrvgG2e9pZg5kCSUYou71iPwEfscnogJt3ojya6MYPhYUCJ4yB3NCXQKw3g7RARZwwjYwmco8HSWjx",
  "key21": "4WNNgU2BjJfpRfzHdzgtXiejdCZzLwxzwQ6bdY5HBojuba2PQGfbtnqh2SDj4iiFMn4uTQk5HfzkafexiVCzL56r",
  "key22": "4r9MS9AJqzAugJ5pT8ATRsRH15EsY7LJgysRPBBqCj5ZRdeyjBBVbT9RZcQgXSdnWZXjNoN5n4nDLNBYzEy2LGgn",
  "key23": "3wHcEe5EJY2wGswdrGpMLCFjE2SoUuPL3MztzcadTC48n7GEDxCqfntHfJ6m3wivns19paYdeeBbp6Pom72s5D8j",
  "key24": "4iobbVdzofx9p3WFRFnGrCCu5w7rk6TzSVY7k1uyVAGp9wE1Xi3xCyaoVa6oRwfkd6hrq1KWyMmkwXPFLuGzMHhD",
  "key25": "5fLhMJgvUiddXRPZLGexEP96hY8UZe2TCY6GjhtztZCe9Nn8yhKob6G8mKJxUcEeWzVDT4Pm5kFJ5RZdnptHFrT3",
  "key26": "59H5eYu2HvgQ4qXGXuwy1MQomyCmbAf5BTwxziacH1p9CStP2KHEAR7Xzd2e26ZmBsPuJxBnRdcb94rVD7zv5ZiQ"
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
