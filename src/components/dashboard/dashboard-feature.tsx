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
    "5PKUAG74aU52eay68yJjmYr85JhjquCtBhFqSLiMY1gB3ciiG6v6v85imQsCmRd6DBheR4NoaCMo3vLE86rwCe45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RTbyzRnKM5fQspEqaxb4i9U7ridEMve1De7DmC7bLKMGENG2r8KESzGDSuwgdcYuVv94JkJn75thB3QzEk1MDj2",
  "key1": "3iAY8J6vBHneeMx4XcV7J6YNscvAyw2rKfms5fMTtKBHYmBDQsagbTLiNYPhpLG8C5zW9zKta1VY6SbctZpHZr28",
  "key2": "3sc6JfFNSVyKSBDuqcrYev5nxpDs9ucbzVn4aop6Zy679KUu4LXnJkqfYHm4V7d1K1GpoLqujM22p7aFPbWzCRAt",
  "key3": "3JQQwWwBe6GCYhgj8exURZvywgermbiGFHaVPZGhaK81y7fcHuxzeUZsjoUQA6LbGKJU2UBY7xRVLBhSiuj9tx5Z",
  "key4": "5U81864CU3JhqiiPzE7Uyyf3v2as5sgowHnB8utsBz6TtYrYKWYFe3gUEdQWkyjKbCZpixEnqxdkBG3gFzZgTUbE",
  "key5": "aEo7kK3MCCH6jcqWjrgnLbzDY8Bb5CGDvm8HSmVUUYsKeKkW2vfGJZpFdwEL7Ckhx9MNxvxe836zh6m9PwdY8Xf",
  "key6": "EXeeebSopv77o1qsTLmiMZsGZoUYzoPU4B2dGWJkF2sPWzRsuXTbmw1XPYrkxiJJKghCzfjueK6grs9QwsggKvn",
  "key7": "3CU9f3yDvuKBsqgvyTUv4VA2NB3VTNX5XiSj2wc8oGVUrJv56UXPyNgrQY3L1d6WJrVmLpuCAyvcAC6wWe62TPgU",
  "key8": "4pUKzakN2mwZv4x1VRmhUXVb5rC1prdnTAhaKasaZv56waifMuA6Akj3f4Ee5XhQ8PpN4o1FQ44C6MQsu43f6Der",
  "key9": "3ABaQmQ7QELU5cVwT6zaczwi1RGVX7DC2HUtgpa9SBkPoNT5b9LZTgm621FdMFpvYFj2h1s7S9sxCLVBWKPxawia",
  "key10": "4ixdbiNEV7BZr33uzcavDFF8Ad6Yn4WW4siNzsggf9ppwR8ra2nXsr2r4xNABj2PTiXXn39SSTKLUiQfd6yeKVb8",
  "key11": "3q1zyqhkgZ5KUZ8ugG8LanUW4mJ6gWK9SAHRFBWeodNyxjCymEnNco1odZySVasnkMFKVV1s2NfmRKpJaY8XdtdE",
  "key12": "3bKH76wvZ1hcwDoYJTj2pTfB6YX3TqVQ73dCGgWf6TRiebaryXFNSbpSV2LyNuSr1ocGe4givquNZXsRui2cHqh6",
  "key13": "ZY3j2XJHRJ5Nr59ETD8xTHQeQqzcYvC2UZMkaMY8mFMqY9GXWN8bkGC4teg5qQhawywnXmNCFhGDEH63LfitKf8",
  "key14": "4Fs7idtZWskFuMs9pkfyXFXjfW6TTHCMwPD5Csp53jVhUSUiTPXARVcS8oNBSymsYW78yxN43qKSj5p1dCBH5oMh",
  "key15": "4DozubfKpoetccBmXw16CwaopUjcwAXB6Qmt3Yw1CKRDFB7am6LPb91BXSKLk78CFBRiRNEvrVrP4YaAgtRbedxx",
  "key16": "5eho17HHEZw3CQz6fXWf3M6xCgsiK42LfqKU423NwpmzjYkYvK2r3kkXnDesz7ofGhYzi7e4WtWqjGmUTbcQPLBX",
  "key17": "2ZiBAahtuzdeSZP4n8Pb8SgpLP85MKPvM63MDGPTv3bsXT49JhtfFVjEPdKgCCUvYPmsWHhpUfX63hoGyH3VAKbs",
  "key18": "3xuZKZA5cmENCFyuoU9PGQpD5KDGthUr34851fPpTAxqNXMnkQBN2PWqQhsaZU2nDGt9hFUzoctdCP1qt4cTxQJk",
  "key19": "XsAJh376pXHPpiTbeDdKVPCfa9jmUp9zq82EFxgSo45XeTtCpUEDQoBDA9eZgz1U18XCX4DgBBsm5c9QUj4ei6w",
  "key20": "4rBxSmruCvWnn9x3caCzsFRTMARJ11dDBbUsKVu56h2Wvp2sncjmXST3feHHh8QRSHX6qsKVXuhQUu5bELyG5FUP",
  "key21": "5fs85MwEgNV3FU4wjqKE3eR2fB3rExKFc8LNGvohgUv5g3yrvShiLSFUdf1TfoS126wJBfPmfQcK2tS8GZvfu8RR",
  "key22": "3Cduv6YyNbvw3pByHaL6Guo3GxtcwyTG4qMP5owbCzsT8jf55QAusRWX81itPWskqrsczqwgQoVnPw753TYfAgQJ",
  "key23": "3wkywca9o7n9Dka8Qap9AAUuL4xVXd3mdEFjbjiWjjFwrTkMStWtuYBYZfkNR8RSmwkmjbN7czapUN9d6cBVgMmF",
  "key24": "LHJtqPqgKteH8ACa96zib1eXn5zqvgk9J3MF8WrgxTf5WA7vHrAZnTt7jPXmUpBMezF8G8th2U47oqQq7Kr4eU6",
  "key25": "2hzxGXn8GH5oAG6PwkKVtyhzqiwERrrA6FcAZ8it2YBL2RDrjfWa91vbfWbHDG63SKdGyYhEKMXi4xeV4QhL6SP5",
  "key26": "4SPtofSURiR7dxq6vt1sCkzP8YumFKpRkJK4VAWc1sAAJZWkS9DELCkoEQ8vKtzwB48VaDN6jV6UjYq8NkptKh6k",
  "key27": "36XKa13v8Kkj9PXhRMjNoNWxUtdY9CjBqGqBNEK4TZz23Mv98PheMxQUjke9BeVzs2pvzqswra6nrxrAD3oNmSZP",
  "key28": "5ThBwMwhCZMutwNjjpB6UjzT9c4HikCTXYk1NceLrS72BDkbKae12ZMLm9ADq197hNwYQ9AsFhWNUpEEDH6hrWo6"
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
