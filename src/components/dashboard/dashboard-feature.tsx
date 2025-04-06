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
    "4vyVoyWPy8KBo5zE44htqYmetRQZWNbKTWnTbPyH7iRmu2DWfkE8breJQXGvNEByoG1qPihWpGt13rkjAh3ihm1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uSdZ2fPFxH6kvbtNoyX743LjDBGahQt4kmeA24g1esbmi5XPv9qmD4smT7FJMZ5CUuV5FCH5bidrheMA11GALqw",
  "key1": "3Ub3LXWSRnadsdWrsPqxKuycywXJ8qbuEHMSzryGh7MMsQxdvKuFiMw1GKZNW6kT7EdB8LeEUYJNRNLVzChUbCFX",
  "key2": "3CeqxXA8BMv28qhqL4XodGpgGNeDS2fPUkp8odtrzBSj7YTSPE2253X6QHRXEdAmSQCXRHdGSV7YZ5jPcPdBHVSQ",
  "key3": "GFMfGHMAC8uxASysr8dQFuf3cxJWkuoecNMr1DvJAGCskvSPiZLk98KCe777LC2Ah6rUfsDfNTdfG7S9zVP4e2k",
  "key4": "hWSDUre4AeexmGrnW4pHTzwgNYSZ8Yiy7fUkcuN7i5NKx2fxAfU6fncRvzfUMP5WAAEwP3nrgqftGxWV1kq7Atd",
  "key5": "vxFrb25TXjcPYCkGAnMntUbDR555exH8fr3HdZ3pGKoXTewZ8FLtGsC8dM5sfmPNQnMAFBXeb6oV3fQokm38U62",
  "key6": "d7x2YH4QXoPGjyutSNEyStDSk8P8FwRjw5pNeSiodr995kcuBJhDhfggp7pD27AKiDPd6wrpnFwXsBbuzVFRwwe",
  "key7": "5fD4rxwLFNciKLo9WiWNLWgSFB8NMtBeLFgfhiS8wxmF3BRcD29aLMSn5n523byukYcHykwr74phbH48JZe3sgJt",
  "key8": "2BrM3SiHn7gUiv627jvmxPbxx6ziLadrDffgDdEzhxqnFaz5zAfUiJ4bZmPxEmEG8nh8HaeLX794LGQEsMizDFi4",
  "key9": "8fCs53Te8UHXpj3UicmJxg8nxjrNjNErnUVzrwDoCYBNXLacqSzbmwAZwEobrnTwE88LmbKbUvDwePE8Biep9om",
  "key10": "vqzJGiivoGJFk3RTqiwHc4KnuEkd1oaxcV9C6N8EyuDj7n11BbRBE4qBAxhRX9opogNRbxrs4siA4rfCUuyFWDR",
  "key11": "4n7JTcheKisjMMgdiuA9W3zDa7Ln8crGHaoJB13dkgAiWseUKaiFvnKQ85U4cxftnXWvKVuaarvyVpBaDqbKKQK9",
  "key12": "2rfp6hfeo6DxFZe6fGkSUM5yHPcE312YsZxmd9RS41hJuBp1qAA51pUuBBbRRfQq5DK1prkFAViMBWLACDXd8ZwY",
  "key13": "3o5XPgfRnfx3Jk55yKwosTzzHmHLPav4nocd9jaMmQ46TBAA5w4pVmrDZT2V18WoypUf5p4wf7vY1GsZSarA95KL",
  "key14": "5EYLGmT6NbtbpT1hRgASm3mhfUZpU11dF4cmkMEse1UhQGpSRY2AbigG91RGN7uBUZaG9s3jxJ4RoEUT7JtLWGAM",
  "key15": "6mpYJKzWJGEDqwtQvjhx8WnAwegLg2maH79bYJVx39sFBgAY2y3Pq1oaNSCjMEHBfK1nmHy1CcMJhG9Vg6coKV5",
  "key16": "5Z2v5YRFosGCa4ztopHimuxDK1thR2AttLMjgQVoDPt4fpiNYmxag7ZjJUr9puYikx84gFDH92q7N5g7LfgMBSeB",
  "key17": "61ctjXvgMw1vKsbvvXUgW5mkSoiC5pBLzMdCQBBofMXGvUwhLTq77V2YPJq48GS3Q5GKwWw6phgqgdxymUTXWWvq",
  "key18": "3jCiXAyDrY8DVUQgWuEPSYyyzqZLDfczNqnidhVVJwWmJJRvtHnGTHpsHCB4k4kJsZNK6fv5tjwZuSuhY74pUX42",
  "key19": "57o4ciYYg5UJs1zSAYdRsCDcW2oq4WbKt2sbMkCa2nxWWF5ARrGLpGpDtU9Wy5Em2e2ht4Zja8o9JwG36Mbco7Q",
  "key20": "3UGdgW3WEPaSk7fbsRLdPJy7K5a7NCypcnE5fo2nUdzDGe2vuF5nHrb6PFWRi7M7Hy7wwCjFB4GqNXDgCFHP9b7E",
  "key21": "221k3CqyVoqayzFghAunmerWqbAHQHvkPNsxEdat8oy46WwU11A7xgy8qp8vpMyJJbYZgwj7ae3aNnZG6dDp3Mzs",
  "key22": "37DZBkxhQpnEADQNtFxexK4GiNZLz9dwGfK1upSJqizkpY4C2CDBT12vz5LVSMAfC2nGHtMpN5VTAM46ozcjgybQ",
  "key23": "cUwHsu6iPwtWFjM2xmZymnBo3WSitd2RHaUf1rXudnKeeJraBZJ5b3puKSwoPufBJ1znzhjZHbRZEJkYwDmraqv",
  "key24": "MqvXZfC2uRDRm3LESvBq95CVWNvRWRe6KLTnvmtWghDWuaUXX7JxdtoEq9DDrd9EaVxiz8E9dKAmdSv4VGAwFni",
  "key25": "3ThJskcBghktWgs2hmpzwsJT5dgz7PdWds8nUDoousWfwcYWVNDudMh8NdaoiAcEV37qMbpaBQQHw2ipKgiZnxyW",
  "key26": "35abfsiBWNqLyF43AT6aQjGWGwx2HeJ4Ji5youZVSJJLVwU7b1Z52xFpKrpV6X6WjRLGTP6xtctjTBHnqVsAf6io",
  "key27": "63qWWZtEfZwdzvUVFoEDeTzKYpFmETtVvuyqhVMNtuf2idp8v8w7tuYZvQLCAEtffkBeT1WD6TKNJoAqMJUEraAj",
  "key28": "46MQguNnstG4pnqFGsqMayYSfnHRBPmXPMzyjWsykpJA7upuqWxapD521a8NQcx7ff5y66j8M9eNjMQWiysU7i8x"
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
