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
    "pMMq1CfbVYQQQPQPYWN4xCi9BVg3a6ajtDuLN9uLAi984tssYFk21AjdDSsFy4NYkLRAFCYqEt2ri8BhBYWN3BZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DHim2biirNgzxsGf1TxXRskvMq8fCNP6K2nGNV1YEG42dj64jUHQGnC3HeoYk65DZVSMCUjxeTD4avHwnodUf5m",
  "key1": "3qqWbMLRHzo9DFtYcseojwcrRTjkoWPEn1pTUBN3hFoxjsymh6kNFAU5b1iWKLmGnNoAj2saxmyJpkTeRoMX4Gy",
  "key2": "4bGGPFS9FsDQFegxhLJiK8qW2siBkvXUoK6pFQXWjKmAbRLfoeG4ngGPecZE4ts5LXwW9Tv3QSFmFwxX1CCriv2x",
  "key3": "2zLuCX8LWeA2weJUk5BkcRga6WUnapwJiyhyD2wAxkxjsfHWszENwzPjX5T738ETCQY325cAtb7E2FK6eRph3m6o",
  "key4": "38BQFdRwFrootsjeanuAgwVkVrx1n3wGjfBSWqyZuSwEp5LTS4RSgFVaDf9z93zTuo1ajo4VoSeFLzC5CADM6SXT",
  "key5": "5G5MytBJy6MLxt4SCm3vm7Ak7xnbgTqGVKnDGSSLxHrCMTW3ohbsPkHWZLwj7NxmPAGaB43ie8yJ9fECpuijMndV",
  "key6": "65LGufE2ccxwY6TDpvmNRAcyhnnB4wbpdD5ceRseD9p7BbsEP8hVchjR1LdQJf1oAufQHgGoyYZGWsH4HmPPGAxD",
  "key7": "3Q8UU2VAe2F1Z2BwhZT6DBgF48GTzQ6BxMmYCD8TekJ4xbF36Z44Jrvfboyzs2Nore3KJQXBDnoFGuNgd477vyA9",
  "key8": "3jba73ibCkz5kSMwvkgKWybfjsHYvP9SxfPGxB6keWuLnyd9fMM7LENcXaRMRNVC4yYDzuod3ZazQeATLuWvpYhk",
  "key9": "2uUaFUWnHb9skrQ9532rJykQwSQWuvensptMVdz4bnfu5avCnDK5U5NXHUn5nDubGEg6ELNFWJZpGPQmCvPW3SnY",
  "key10": "45niUMTczcbafXNs24UjtJF7qCQJ3eEo6gBr97GMpUt2nQwFdZesPE9jNtsFJRYVrn7R6qGjVtvAqWJdgHSgb6Qe",
  "key11": "3QSn2EpBz2xrrK23N4VgsyRPcJCpdCEjdWetSy1NKnBPpUARHe4kkmAyonU7g94DEqp43XYSBtoYgZXYimhLrkL5",
  "key12": "57Yg4jYNJsExYwZcbPdh1WxS8siAJJvLWQ2WMkQxS3DqVzPdYgYJqYueaN6m82yb4WssnxoeR1DDqepTbx27XESV",
  "key13": "4K1YuwcRr7wLreTWRhpUVqWPybn7FmYVRtWaJ5Q6QLUoz8y3DZNLaypKmwg9b9Gbh5k5U5PnrMshDwV2w1RVK2i6",
  "key14": "2Ka5VPKgjQsyShnGumtcXafbpHEXYKcWdGjWJc6zHSumzk3G4tjwJyuCWJC2ohmPvHc36Ai6CMoKNJmRrsPq7sxg",
  "key15": "5Ww1B2X3joppojJZp2U4cghAJXcXCdnfJwbBQAqFstCjhZqLwJQpY1PHRC2jLG8vBUb8rMaBaiAfEWPRKA3ZpBMc",
  "key16": "5mJ2rgypxDkupjskJKnh3fYZUnE3BdWZ3tZod33bmvARcQSuiDbzfbefaPh1Zr6ULwQ45rWxgsj9AoEtD4BhxeED",
  "key17": "2yL4fMiibZ4SZZgHSrSF7kLgCUakaB6gTn3xd9SdSfbHXUw3JUZpgi2Ln9PmLScANTtcEbRnP65JFSZUa3dL7rBM",
  "key18": "4qgU92WChhYHm5CbXjiA6xZugiSZ9jpWEffWS5nXdQQymLVAmaYvLuBU1tueF59L2C1WemqiqrzoTwT1M45pR8kK",
  "key19": "wSiHfrAuc5QgZRWFP7YeTEBjiJYZ4GFjEeFppeb1QMwYoEvPFPwv7qYmJxdJqPRbFjy3kkfP6vxk9wZxnp2NZnd",
  "key20": "4d61gXepne2PqU9jHPPvAw8LTVVppoazyeY4e71VF427HfZCAJWv5DFfqafhiFzHYYxGrhTWpoc87sawz6dgW6ag",
  "key21": "62i7LKfaNPCgfPppVkNifSunkH9pwGLHVeNxUDf2w3XjuSupBqzfAq1oRxfTBbMGf4sErLUZ9gLsiehe9z8iBrBF",
  "key22": "4hayxasFChondt7v3RqiuBqxAiKqGVR2mbfMstPUFvCDGPGQsL1rurJQ55ZGnv1e7yvvUprvdE3ewbBK6PsYFgyL",
  "key23": "5cftyeCtje4YN5eqY2saSjXb85CxRyCEgDTsdXqvJh7VfvFptAwzSV6a8Vc1sDQqvaueDRkG71S3zNzRWaEmLug7",
  "key24": "ghBeLiDRzPm4GWzDNAcKu9KEBBjHzytCBzsrFYttACVMW28uvWHQ3H4cfVVwwaow9YFxrk58MNK59mKNQMy8y4p",
  "key25": "dspzbwJf791gD24ZRfZT4fVjX3ZtbdAmKCEhxcCimyfmzevKE469YZ4TQ8EJ44xaKKUpbym2QRmY8BfJGSNQZqS",
  "key26": "4nTPZ99cWWpi65gHFUh3TqSaXXkqot7amdDZpxa2dbinjP6Ekmx4rD4Qk8wz6MpLRvnpDKxscApigWiT5cwEZeeq",
  "key27": "3hCygWq4zK2rST91wyUX1NRHCi9NSLuJVQvT3F8gU2tm5MKi68RJtizAwPaYCh7uyVnHicrVzT8NobunQDUy5MH8",
  "key28": "4rYrzGRnzkTv6XmR3iKQLRFmTj45uw8GMEG6Tne65rJfg5F9jtHWo5ZTK1QL1EVmyFuAJUY4PCSDLhxsm7t5LpiN",
  "key29": "46znaYv6m3sfp5MEMbhzReCZ7nSbLfFmQyJsP8pofYSNe51GYF88FxH1xZmTUQaap3tgfq8zttEUSrR6eAvkPVgY",
  "key30": "3VDBDY53ozKaQiJmqBjCAeCjy6myRWprKjq5GkNZKfqfnRphSZA64oRz4LSmbNTsha73NgJBtnAqCdCdJG6FgMoL",
  "key31": "3U2WaqTJEi3RUbaN63Mm2E8oumQ2ooZCg88PYMTBAmpzHswSJpR4FEKSWP1fkKMJtvQa9G7srnPvDmL6yo4CpAZU",
  "key32": "6i4gh8AEM9ycpt9Uxhpym3qWzWmiFyZH4ePPDHLdmya2HVB2w8HdX11rHpcUAndDZLcbjHwS4rp4G2FLp5UzkKy"
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
