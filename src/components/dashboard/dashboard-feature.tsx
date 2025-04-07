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
    "2jKv1NxS9pzMkAo2nmKkQHLPJyx371V3mo4oiJKF91biGCYYqQnDR2YvXC3McdUd9YfP22F53zxoj3HhUxQwsLWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WMZUssDLXoiHiNq19i2jMR7QTjTWivx68inMjLDioaAWuAoZejotxEZ2Ro199scoUWg8rxZwFRf7ZxCddN3wng2",
  "key1": "5xzrszSqbP29DTraCQW9qmTFachrhmFL1C9zxFB8NvbQ39HwTsp77a1wWCrnYEL1Df8vNTJ4eVFuaHZBRahDZUty",
  "key2": "2JfGqFqk7yzxWWSUrVNvB4m2xUbvLX84ouKRkZ4exY5dBeNdzcVQ8oAQhdymsdogMGRGY5RzAqWsbdwHm4oQbvgn",
  "key3": "2kLVyzEASbdSKjJ94ix3euCvHZZ1hX7RvEYWtP4eRzyG9zH1MNYHFCuba4EjfW7uwBEiJNossmbP7W7MjniGryr6",
  "key4": "557eAFNQe7KQQQMENdDGY4TEpaXqJ76y5gwWeArhFQa9NSd4kGaaoTjUHFqTc9uGUEcH713XB2U6aYSyhBht38Y1",
  "key5": "Vp4JHLoWbFuGG1GcNCXsRMnxXNhmfoYfuH383HA9DqPjJNqaFwJvdbviVFpdio23mnPBDKYP7tctR7a99Mcw8pi",
  "key6": "TLWUvs4UxYySgMHLWAspB2XjRdcUSoAH3yi6K1hDQdqZDyz6ALwW2WAdn2ARtreq3zFehcprfsR2vfy4embhgXs",
  "key7": "4LFLPcTx5nAiXrASD8E8hDYWJ3U4Hk86fq7XGz3yyoL2M1dc5ZMeLecQE5Qq3QQKuAT4LmxwNzfvNRDvF4y7TWH7",
  "key8": "46FxmEPBpqx6nR1Ht2X87MVm1oyupB2wVw64LTV21aufkP5Hzse2awdkLhZKPJHVr2D5jmfWui2sce7nLF4An5Sy",
  "key9": "24phY8d7ZyvJB6Pug3oYfMbuknLfLXuBQ6myR4opNWd9aKXjS1ZkCmhyDz3KrwkC9vocB8z3NkvnGeWWgfGZDF9f",
  "key10": "4pSYBK5mnwbqUFEXHgfQwevhxgKziCUmeynyGQnL6fhfG6eQj6CzuNKq87yzmM3zrVbvDKikUKpQMLYVfy7PUD1",
  "key11": "31JWcqsHcf7mb5SnCTtPMAJ7g6tSPyjYiezVwMJM9rMJkskZBws5aQ7iJxkz2w5QYq7y1vuFBUU225A7BWSPC4dV",
  "key12": "5qipzFzLm25SV1zut1JzHK3Hibh4EHNfHPgGYMtE88iHR2E4ocaJXECpAurgLjkWJmBuGLvUvuzyag52Nv6JbTLn",
  "key13": "YVdNP7s8VXL9s6eiVu3h6BUYMwaCWEHygKtq96zvFi6PKb4oKrDdJTpbEcHsjqm1Ah8ZmJ4CA23BAot1og5nsYv",
  "key14": "4SaAvQECmP4tA8Y2qijvf3bumHCgq1oSeso6QCzL4RyC9avnTnXJGdK4HHSFwmy8NiwVCSqR4H63mpHuaYWqgNxP",
  "key15": "4EiUDriYwqj4MhM5sG5TLs6H1JFhQ9XeqXZDKWsNFrunTLMtvTiofSuvcRmF33JyzZKtjp1kxGnehpTtHthoTfHE",
  "key16": "3pRs5TRKfyPco3xKVyaR3YRWfWv3ysFCag5q65CDtnhmZsrmjj16pQ4Cv5rpTR3xAPk11q8kBJkURNdnYy7M6gcd",
  "key17": "2qSzSdBtnNHTeTBuVDjJ8jrn7Di4sqHRo3zCfqNHwMFDRkECC9x5s3Rm3Gwo7F9Mg25h1BRzeyNMVRDFLBhPhEUU",
  "key18": "7whUZUPTFrjtp5JRo5hUCPmhBoAoJ1f7LfxfD1AbCtpqKhXiCdopkUWL8XAJx3MkTmyQ843y6XkHFRatPY7jarc",
  "key19": "58mhS2riTZyaErVcnzPbBTQ7jCfyevEQhHW4ajRELX3TtCUyzszqe9zRsQKvCvMq3Weku34RLHQT2JaZQPB5YQHc",
  "key20": "6CvyCech82YryxvAu448JveT47C5da2hvbdeqctrQGMEiUaP3Fd9Wj4FFwPUefXe2Uwwx5gsbticrV2B9ekmQLD",
  "key21": "FxJBTnPp13WAdaEJC1PRu7jP7A1hWXV8E5nCoqnf1LYwUEL8dJ9e1nfrmzT6qBA7mGVLGXayHF42Nfy9RupLKoB",
  "key22": "4kw87cRjjSf6RL4yb92QBFisnRdK38gKyxTgHjWRvwXonniPjJm3jcpskcv5aQt8poSBJN7zP1MNqzY2X2ncpZHh",
  "key23": "3PELb9yUkdHAxVLzkiLC8GFp8eF2GfBzJd4kUCtum5wDfXG3ug5LxXNqeRzDSnYjLnYztEee3A9TVSCZSJDPsg65",
  "key24": "5V7yXk1LwhDr4mc2RiCS4yVPkfv8FefHMjAuLZXDEJapNXngyd19MPpnmv5afmCEk1x9dUEfZ6fFs29wyNT7xdiv",
  "key25": "4Pp8jpkSWNpyjJeTzeLgk73xu7ukAQ1WtKYsg14unVs8wxvt119uyBb5YZmhzP7EHYfaPZLXbWsL1JMPQNfSbY2b",
  "key26": "4Z42zqHvUz4LKLeH1MXzdfNU8MBtPBFqqqzkENnoHqdnFDrTLPM6G9eD7LGpkB8wn6Buyxi4hsDku67drBJztBFt",
  "key27": "2PgfvJ77V7qaPxm1WYBdCvzLGXFGDQaTwnKeGWPhwVyQQqTbgVtS27r4SNhmEV59H1n7MLERGhipEEE7ouANXcpm",
  "key28": "5t2PXesLqP9X5eB235AWaaSr9vKV5aP1pedzgJpTT6nsfTk19suE9LmGpj62zzhEcsUpymezkTKUNEc1HxtumWCZ",
  "key29": "5414foK5cYHW2GBJFXs6Z48gnYRyCC4pDSTCkKzYrPkCc4WF1pJsL99HUPYWP7WRUQTCSAiAWjVjWzWmjrBbyagh",
  "key30": "3cGXgMvVqEsbaX9MHBk1cAZSCGbys186oGFCMs32tzQWEz3S2LM4xgENBJ5aQ4Ue7jWzJRvByTYZ3cTjpzYNa9J9",
  "key31": "4NSC5BCVSxa1Po3vzvRQqaLB5ND7cC5oKwiT4BHNd7kBjJfMGwvB1XyQKWJLVFrq4SpeF7fPVGsG7F9dSeb8gfbK",
  "key32": "45vpnDCi1ryTuU3ZFQ5d4AoLXvpQswUy3vhbmQchTAWKFj56nzZFP2aePbe9peq86TavwVKEueSw8CSPdKfpjkC4"
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
