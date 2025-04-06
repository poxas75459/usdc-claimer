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
    "BFmWZ9WJyFA3eSj1A5tT88F755uFEkaQdgVmQSZxk1vZam1ctWWVXvJGrmgWcBZAUt9xp7F8Lzsirx1onXD3W5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3exeTdRCTtPmDuMLmiDdoxXFjjBGiSHVJQ7P2AqeNbd41soKWcAC4KYoKRXf93XhQemCRSy7CEcfykXfDRDeEhgL",
  "key1": "5zGz99WMaS3p1iKL97h8w2jMKzxf3DKXQ43b7tHEnGyFfUdSGLWd4SNXErNtPBmpWGgqmWgcJNWa8pgQdUChrxe3",
  "key2": "vpkicQYtogx3PmBPGxR3TvCB6XY4dL8c3per1phSjAWq1koELnEgxAe3LrfNQxet3izZPPc71fLTAcatsnq3m7c",
  "key3": "3nmPWjqh9QF4k7CCX4Xarepm98Hfk5M8VJd3oHTuF4yTCBUeZDeDV7snyQBSFrvM2wsM54rRaZqEQFQMbL3VmpYc",
  "key4": "5oR2LAVn4RNQC427pBCacNqf2RPBYygwJpU2snMkcwBqqY7oYz4Jx8p9Sy7kTxmDvg1jkPNQfqkFNYErtjxFscVJ",
  "key5": "3vSv9VhGWbguuChJz2bo692ezgE6AhXh8v4JsoT4sgaASk5unEaW769vU5ZsApq9K3EtiJm8pxA5SkVqF62Hzije",
  "key6": "aYQJpCpztPTTGZ6HrcKrQePnLVHdmQR6wXPLvQQhRY2uHEqEJQvkuxfkVFv3kGqrasDqaZowg65G4jHemZTNQ5b",
  "key7": "5RQXsS6Qy9RqLzMfQwsMt5wtt21vCdgZyZsWXoWAuyFptUr9Bw4vJSqPnNE5stUbo1dEXmxDUewGdrZHYg5RA2Uz",
  "key8": "5inkDz9PyEVQTyA3bTBpCk63f5W5ewvSBEgYN3VjGT7zQqkStYd6WCR1Rs3sHnnXDUhJ8WWxBSwD888RKBJrGjPC",
  "key9": "2fLKMGjNPVfHZcNRmjnrqZc2KqoBsmuMnMjWLqKPb9FYcyLdzRd6y2JyaNPaudiB3w3JbCjXH46pByxYrsjrDxoF",
  "key10": "4xArtXnfnfkCZjCFUGxXveo25GBdWJKQJ6GUuRQiQz4Spnu9Ehqmi4c6BAD153W2kjrZmm48zUDR1Qeh3tmb2dLf",
  "key11": "2ADUJThQ7GJFxrx9KZxeV4qqzmpHFv71raQX1ZJDsNZ2K5iq9d1H63gHwFKG9LcoWMkdvK3RSz6enbZLbbHSZSQY",
  "key12": "5FGEqJxZPs9W7pEFTX4dWKVbMDp6XFdGUEnPXSBjMKdxD2jxXhXGSmiDGWjNkEFVoxsFbGzJfifsZtEYxdqY14rH",
  "key13": "2jQQUKyQqK5BdDaECfi4kTBEVdWFgY16ERjNf9TjSXhzutp8JfmzJHswyFTRAi7GQ9JbHh4nbAanoFzVq2ttahFa",
  "key14": "x9fErwmypbetur9F59GGWnYS4hLcznNkguGDcpEY4g3isSHjkX2QAV7V88qFgewKdyCJPG1r3Z7vD2PjMZxZETp",
  "key15": "51nEVa34xPcWQZhWpPeJCYCx7rdbf8NUzNj71y94jWwTMWtZGSesf2ogP6HS12QxAv8KZmPkkbSG9gf5ggLBjsu2",
  "key16": "4xEELwoTcSjmaMXXL6ZwaAVzSkKMCZBQnfbubVvQtLL3mDsRnTgqZ5UQ6FK2eHxvJ1rx3sRY5JpYFDZP6NuMYBxa",
  "key17": "1LTzpjgerEshsaH5Qz4yatofDCN3xL9p178D28QGopjVyxjVNDijvBJNDy2BXbYWxCfNT42qKKNqSQ1u5k96kvb",
  "key18": "xyak38mCvjUTRYC99WMrES7MyU37WByvi14iXsz1X21PFZ853cGSpdd5gTU5y2KL3fDBwAtBtozKJK7TGxqYMrk",
  "key19": "4uY4qkARKnKTSQa5AD28ir579GfCkAFCSFL7NNvWN9mjfV9YXZMgMMaQNJYEVT8ZmpJtFRm2KqE838UmZiTsrWWy",
  "key20": "44cPneQHuWEVRocBx457ijjgx5sA2dLv1nFZJzpxnXBNziqRa7awNiC3qbEZutw9dvnM6haCGA5kQhZ6gtdkpkuJ",
  "key21": "3CeRCAvpubZkbxEz75QetPScwtxiJasEAfmHCAaQNRBD8pmo3J7ysw9qYuhNJgnr6HYXzdcwh3TV34QcFcLBh4gV",
  "key22": "5PaQxdHtZ6mnajFjc3rckgj54fQJwiwytPLPk3FNvcnf9ZDo8gHp3ofRuRa2GSky7LrVCQKptT6kZNEyp8ctJBxA",
  "key23": "63jhbt2NY3eHtNmQyi2BQx2Mj4DtnUHSSFgegmw3gcKNHLFv38xutwAhr1NaKENRL1whJQn7xnA23xp8cWb2ZKGZ",
  "key24": "3PLkXnMskwagy5Qt1Crbs4WSosHPwXt4aBHFjWSXFUjcyZjDSKDkMMd1duNMsER6QMCtB63VnU2XwUFRqzZTky9n",
  "key25": "iUncdAWtHhkybp8n9QJnHnSoSK73wKuCpwH7L8fCNrtv67nqHWXYSN2R5R4KVgEr3qKmsGEWqqDvBMtPUiknd2Q",
  "key26": "2bUjRR5mpGg2SaQ4wjHYvqTqEUEthFwnWrdawYLGKxvrDgS5K4JAg5krTyQi92DPmQH2qFzxMzutGmPeEupcgH1i"
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
