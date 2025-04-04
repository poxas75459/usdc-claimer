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
    "ntGcMY9nqf8vVufpWdS4pBEzXFkZyaamTm69NEzkXAhjZWEDoPDP6ovgT6LFw12e9QSCwmpW9eFJYoWXKH6SqZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EHKZxD1wnkGhJeHDmfc7iUJm1fi3gBoMgsuM5gxHgYYRUne6PuA88wjeZ1KLWyTMCCLo2dAPuqXKmbnx3swNngY",
  "key1": "5sh4RbtqTZB3wxa25gdiQZM4J9DKHunssGAkZzSbC2ZbK1xfiX8wo1RsUwatW7D8gcFHdAqjDUAeapwXVPH3NUtJ",
  "key2": "4WF41LKSki3dDMqHgmgqtE6qwWHdYzs1Gy15NQbiqfpusnzhtaCsgniWupJCJmKA2CqZh8JcgtmBeuvxKTHRnceD",
  "key3": "biCqk3McR9GH3CS32n7AugTWAiqgqYbw2yatyokVJHpe967mHpP7LxstGdMbiKX6S8ZCR9tCN4pcUWnY2JVXfxZ",
  "key4": "XEMhjEkW34z4ELLUS1UvV9WmqBgxVK69Pk7eQDNtx7cV84jDTySRMA7Kjyqmf7fRnPyNdSpnCnxRkNUGBRxmcPA",
  "key5": "okobNtmi7jZVJEvgfru6ErAxPnRauGAeAohNB11pwbBDLp9SWaxiTYfAfbsBbvxs31GM3FTDtUJsLjb2pQDE1GV",
  "key6": "i3xiEvP2DR2e7xDyQdxUVxzNDxqP5JgXhPFaEdS3uymFWJqQMHEUWZ192mdUkmSix8bGHmwuY3TxeRxJFrVZy2V",
  "key7": "2itUuXddj4wJGNpmbQzwGGg6yCb6SQmAPU1BoMcbHoz4JAWrB813kgo1dcnLuAAc8a1eZMSWYquhoKWhMqWJ7Dsa",
  "key8": "33NPkgTSRvAoPUJwz2h2hD69PrHNYy9CdF5M4oyfZv3vybtBqm2gbPc3d4rnLWL4EAmaWYzgKqiuEd3xFcvC4wY2",
  "key9": "4MKm5qmX3hHKKWmu9P5JhtHh5hSDKoAZEgL9wbrY9dMuTyxT2uUxRhRq7fv6jU59ZBFacaWpfjJZ9fbLHy7yACwK",
  "key10": "4dNgcDhtDnaMhj2FWcScztpP7dm961uUTzU3URzrqksEKHCxStqtD6grcX9b4PB6dGvGgPVXwQduvyg2PtmkGrd1",
  "key11": "42Wkz5vUc786dLXtdYU5FH3ZzPsTx2ps2Qz6gDAEbpCnbmKHRXXe13pmvgLfCTHgruXo1qCWz7cKMaTQoq88Y24u",
  "key12": "287vdZuoz54Yfkt5d6aHvnzQCjkPSnjd5gy3Tw4vnBL35NJKrGHGEvkEgmPCZS94i6Prxp2mPmNVbLSSLVukgbkz",
  "key13": "3kXsqD5t5QBfmJAi5Tu2fFRAsgAobQ3cVS4FuuDUPZMXi3ZTxcTM89yfGGRctSMLmsbzCduvLgJxr7gQ1TwyppQk",
  "key14": "4Eqw2wLH1EqhyAeKuFi15aV3Qvt8MQpS4xih4PsSUm84ec9oJTKSUhrRkezC6LaSN5SzofMERWbmrLywMFoWNxuX",
  "key15": "3De5qikevTXoMmhUfU6At4Qt5koMa6UgiiAj1UacC9cRkBSXdgPqgAFMWcVD5tJcnBCVQj5KdeMYU7v3GKESSSYN",
  "key16": "5bNMcciATeevPRWnmzFks5PWpjto7K8rXVTePdLBmzp3T1ZHT7bUrxLtBfzk4B7kqz1TiMBExd8eTL81h41wQ5fc",
  "key17": "33yp7F7yX4FHDsynTDGnc82YEcsUZczKkEYNkmzJtwf2whyciTWwxcevtfFXwNrd7kcJng43WkJuAyokN5BezZkq",
  "key18": "5S2moZZHejYSmP79sX8TwCQuopcxtuXmf1Bj9ecBCgmrX9xSbiiqxCJa6vncbc5SXKVxZP3SE3gAJgZJnv7r2b6x",
  "key19": "4qe3Co3L1ZZPx6m39VVrzULGwBzHdahybtsFxNQkXTu8xHQhGMRh3RMkBo5A2nyN8iQQWceAjswDXjWNAJsyos3Z",
  "key20": "4ve78AhNvZahPyk2DTvaKszDZmN4ob9sE9nmp785RVJ9qdFPv5DUDe5FyHRwzcrQNkuY8n9kohGXEbBWDXajvL86",
  "key21": "3vKRa7rKfsWjkwiM2gpJ4ea1XxSc4stPnudmrDmTimANh4T8FGwVVBx777ipKeMg17FWNn4rCuUNqS2QSw1mBAdJ",
  "key22": "3Nrr5NFKtrW1yekb38jeN4vND4KCtnnEH1aXtqZuqFNdzi7afBcRkM2bvJRuovvWSQHfXu1npQaDBz8fy6gXtuxS",
  "key23": "37gYEg1VNpuzETup27cbBWkMFU5NuxWcjEHhRt5WXgFw8UossnYmeyymqqGveXCinoJjXEwep3RU9WaMf1JewB1R",
  "key24": "639tEBPzHfbzNa3cEjzRCFfByTC9umFVN8RqKsGEWFHZmGyYX5gCLW6R4RBLm86o2hBwrNR1keNbXPigACw8Qw7F",
  "key25": "5yjKi3iBeVXaqdiYHiB1QEvtLfeCfA3dQVRxmuidehi2UCfr39KeHiZQRuK73bDJ9EzbyoNmK2QaSqSozMS5MWZ9",
  "key26": "31kum2e47hSabDf3vPXmG3XakmjqataAwurX36XrRDAGf1nNc3yPY8ZwKo7hf5cY592JxuXabBpxqiet4tFt3caJ"
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
