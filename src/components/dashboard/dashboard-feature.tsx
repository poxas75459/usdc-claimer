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
    "3XXGhkJSd8BhqUGk8oyU8hhStqkuAcr8d1AHPmyBeCTJZQW8NBZAr7ZtA4L2cYmQqiXz1JKEH4srw6oTsLop2NhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eYQ9DCpPhh55tA2iLv664Dxx6LJTHTzsRgVD47FmCkLqnCLn7LM5E1zjvXV8usx66iniZru2n1Ka1psnJwBCCA9",
  "key1": "4r312phNJDNx67U66eYcutk7pJJRBSbqMAu1UGeqn1fNT7mBwEahMM258KdH4UF2gruBJCqtX8zeQiczKGgV5fm",
  "key2": "4hoYn1jbC6w87bkGa97yYpzNmpiSbPXGdFiBTKoNPJLv4ujseTsXxydRCNyUqrxmWYPqdBPw5VcCnAXJD9d2GYfd",
  "key3": "YisTcf7rFCkGmhDyZCBF1wNvFZdS5LFiuMySK9KAxojoxsu5yLzprH9qXpTrGZK75vjJDMihopTZydGD16nbKB7",
  "key4": "xYWS7dmx4aszD3g9QtHvPmz6HVauqvaLd51tUB6ehK2ayS17jDGVGDvuA1H8Vb3VDHQyFV5VCrBZcefnoTZqkPW",
  "key5": "2a2JD1BYDnqtX6xspN4NvE8CEbeS2TLaCWkPvY1DvUm29nSg7dQprnaQEH86RDrC5LCMAUX8VoYKyWdab148eCwY",
  "key6": "3jY6HPHqyThvtZJaazVz2xVgXpoBD6EnuDPxPRaHGQ91MiAku1TnXssxappBbDG9FvPXafo4uqfXpcVFmd9s7BN2",
  "key7": "4SNCkwHgiudcdhuQz4G3UK3TcomzRdxfdE8eyuFeZWU4iCfBREYtqyyNeA7P3RtGM2jDCWjGwyc3cJYaa6zBsAYp",
  "key8": "4gdVXarA8Gydm9yJm3DMKiRLZidkFbBnQb9eqL5zsPG7G5kN26wcMJFUyT4Qe8AxLBTp3DFZecF4pr13bWugo6Cu",
  "key9": "5aa5TvkZEi5J8ZRvBaaMCRQB7LgCpwf6vKzsw5crwefYzrHH6onFzybz3t9TA6Uvn3UW8TcDKQiWWAXi5jV2Rfut",
  "key10": "N5fWqpHwfbmcybKN1e2CvctaAm4aW7hRT4XHEebeG8Twkhv38p4W9pzHmt8hjgWL6wWxdQNPsApVp8JZK7cBqSm",
  "key11": "5yKP2193rpzs9aoomgoK1cPzFnhaRM366H8k7bazQSWyYcySnmv7VcXobxofyNjBZRMsKXqQ1Bf3G7j4a9nrkV1n",
  "key12": "3YSFxmPLf8UhPD5g3jRfZjLiaKUomguKHaov2j3fAMH9ULGBv6j2rE888GgxHuTE3C1i729QP2CP7wScsiMpLzRT",
  "key13": "3Vmx4FyNMAh6C1nkFnhGJaNh8aSx894qKfJrHN5s5vwFEe2Y1juY9BMymyUKnNiJEXY5Fisz166Zj7LvkEy7iipj",
  "key14": "2hptKjdSXv3LUdzqR9i2i1xkhHERz3G8XoEc1HjqF4JoReMy3xpkDeDADB53fvdy57FkJQU2QcaowwDwLNQxRsAh",
  "key15": "39k2trEXcJuphai5tbaKENe7kki2mugFrWu5xu2Me78qG9EvP3uAB4k5RzWuL89vSL1gB5cwjcNB53L4gudK2LZU",
  "key16": "3BYzye2MW88jA1Xbog2UfAPWRLf2oJjHhLsAtLXV8MADHKPfEwcWkKExEAdXNK2dVYDpphtpQ5jWZTwpzPvXFL25",
  "key17": "U4eBNeZbn2hyxx7WZL19SNTnn2a7pMVfGjrJNx5Kk3RzMeCAbT8iVZhTnDDZwmxfShWVBMyHhTfUSJLapibkJdv",
  "key18": "3BbPQMJzKiNCAD9bP1wdbmyDCG5REtCUxuY7b8WZcXa91MLYCaaAXzHAjQ9yg4kGbrewXDCHGGn4prMC1nhv8ujf",
  "key19": "53LysNr1myW4HfnW416BjN5mh6x8qD3U7i6sJkJVJsC8SbiFhnLQcYHdvxCXmyo5wRBDhuS3L9Bd5gZurVX9Y2Ct",
  "key20": "zE9XGx1Xkdo47cybMPbTPLfSgH1RTLyBMdqVTMHznW9mseLBM9QDncixuJSDQ5CYzkhVKN7V1zaWxZzM9ijRaAg",
  "key21": "M5YzzdRMqWT4PusKNaJZa5jDPUa1guEKQkKPeDZBEuxdnfupUvLTy3J45SBPLSD88VfoDq5Wpets6xhbZ1J3uqk",
  "key22": "WjRZEouMJbAxPDaYJNofDoe7NSvvt5GznjgzCXgGFjfw7pmgLMaXjSntejENHEBjWAzck3m8Cpvw9TPxD5PRZEG",
  "key23": "44BZfreY4gmBuQ86iwvdR3vLmgM29eRZs6BCMLrUpiNW8wFvkJ1dt4oqBfUcYp5rqY2To8JfbSL4pM7RKXiMLZSe",
  "key24": "45zSFYqaryFqFwTLxhFHg2GrFgZowjfueKetM8H2HVyvuJzAanEyNuFnk6o9nYFYsGD9WjWpyYF34aiQ8B16ca9p",
  "key25": "3ecRcDnj14JtRQasKyZxMkea73diKNRJwJgLoAfPqJYBUGwnpFQysEihGeVn5FRQGeqNGSzaN4NRrHfgwcgrSRG1",
  "key26": "SpKrBFE9kGmVMivuzNCFwFo7Q4nJnhHctTaTRMhMcgnd5RzJhohxJyNcBHgzYZRpyeuHYXenrEb4U18umQR3URz",
  "key27": "4UmbY1HEHxPUK1wMo5s1Mk236KCBwsirzTxzMSV6XHWYAz9kAACLjHho19fMmmaqgc1WL7VjrXeMdChVTkX2pMJa"
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
