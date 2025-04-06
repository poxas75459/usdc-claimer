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
    "iQTpzmMMmocyQJFdFc8iUdaTDg5pjSwNjriLKWLgwUey8R8T6nUE5u3cZ2rbgqHZYW2BmqUejisHK4nuujRk83x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aeGpKVnmqUzeNYLmgNgkyoYi5mTXRsBkaYgY2Wwh3S3ocfiVLJ1Vi1rX1LTYJq2JSfAojKcDySP1aKjLyACvWNi",
  "key1": "XemssFw29RpDJ7yYqXW5RESPTRq482isj58qsZC6o74xt9uhEESDAC9kPgWRWw7EJq1V3kveC6cKKsj44K8zFoH",
  "key2": "3DNkCC2XZtACL6PDZigndvMXxr5EaKtiLKL46FLFpLTfDPcg7DKVnpUzqC9KvF8ai6oJyrctM4wKPRrcJh1aVjPa",
  "key3": "31zk77rFFAQrp2LUhWfDNyV1PJVUun7fzLa6uzEyVdWottrQVCjVBEAUMhDc6CKR97fBHDMY5pS26TpdumgXfYUH",
  "key4": "2HFvTCkauyoiGTL7bj1Vwf3gspi6FyGsnN71mBGoUn68XYUzBTpkgNEu414qrwjNHcUbFPGy3sprHCugFPWdHQpp",
  "key5": "5fGT7HoC7SVMkxp9yJaWh7k6uhncDfrLzPrMgiasxLUEmkguZbjv4CtGxyGZv4a9FVxrUPiPTnEeGYDyHozkN9Lq",
  "key6": "394rp87pmSrPovX6vGqVKn1D9PgJbGQgxGcVne2cCPRD4gyBYnTAaZJcDv5hrX9QHRfopT2P9hZ4d2j32dAVE9u6",
  "key7": "4aWoeHHQXwMEERPAsuqn6b1kkgdahhYdE81q9sGnrMWKsADo3dpkiLNpS7GogyLf5TbSSA48UqHJqQCJ5BfSAjGy",
  "key8": "5H61PkpNz9aWwRBu3RKDrtSw95X5BobgDuMFYeb5bVGVjLqHkk6dFMeR2RA6r34biJAM2sHNmGccwe327WVjdBw8",
  "key9": "3iZSsEaHYye3nx7r83f16uoZu7AqsgY91Vg7p6ULdGFcUpZmP4x9679E2y1QWwcCNmqLiS98D6VCCjNBu6r7JTao",
  "key10": "3GvjFnSLfaq7iSDsrnU1bDajCRfkVit6wdXSuXBFypcuMiNCRz7an9zBXaoXR1dygBjq2KkS75KM5e8dxeGaAm1V",
  "key11": "4UQLkg63ByfkZZ6kJbojgmzGxZt4osJufD3i4HpvYVhFZAPt8okMmp23LCoqHySbbsDifNCEtA52txcBV33QtdEi",
  "key12": "3yDGxSJS5QdkXiWV5fEQ5P3MesyVKe6jvv4h4eMcjjKsd9psYBDEo4dA5hEjeuPY8Ej4dKpiZnCaMbNbVAkDh9pg",
  "key13": "72wZJ5kAKmzzCsg4oA6oyk6WMkke5HoZrcWRknW5WqoLRTvwzH21qw2nTNv7rPiYchRBynEHHbwyD3Vb45L4KWb",
  "key14": "2ACbzkVAWgi4iviLpq4eCxLXzqimbZgs3TXrnVgrZKkStaRJVp5yJDagGyYFFxbFnnfBprKH4KtKp9Ktxakevp9f",
  "key15": "3RQbBAHmV6XWsbXp6vMaagy5b36CzGFvXpT6UeNSXDU1xxcuD14QsN3CbLg2rVA2Sfa4qhTZM1M9VMXdkdS5yCFJ",
  "key16": "5cEyurFS7fPN1LJDJCL7E9HBmT21JgsE7QA4AyLisq5whJmGDHiouVKcbBm25G3pDeQBeteLvTzDL63AuBKcfRR9",
  "key17": "5y4MskfUmPTTAUVie53pZ3qaXSCWCXUBndZ8TfAvqSPWbvm95Dzw8J52BspL5pgxMdmnAUmdbWevEUmRYK1qVzgs",
  "key18": "3wBQTMeywYSvutR1wAaE3vx7iduKD1xA6qWnWWUVJPH8borrpQPZyirKjPFw7rZyNzwVTzXTBRkZByVVLc7kMuFj",
  "key19": "4J31Y8XBYTnquZemefbnQghkmVYgTKmoEk5EM26tfeQ93SWnMfxGwDgwWcdQ7zRXx4DqrVWR8gkJjJYFWv7uY1sV",
  "key20": "DiP5q825yjgTxgHv7Zy8NfZ2ggPSYQGwAy8vUu1vUx8c4Jsad2Puye7nRSHfs19wWUJZP1WgdkMnKQNmiyMHWHD",
  "key21": "2ss9S5rt8Sck4pqcQmsCD7tbMdX7u3QefJKjw8ooUMKVc7zB6JWBu17CZyXp82NfinoczBu5jeSyDRYGU7CPKEft",
  "key22": "4fgUdKgQt8z1pPcYrendnzZhSU3QKBnvZ4C9BLcmmduxw3dBPnqfdxvXwLZbZTFL22AmKeQBfmtNiNaYGEpEToEm",
  "key23": "2etyyLKUz6cupnnTv5AzrNr5XxnXMcrbB4HNtTZt7BR6y9pFbARpfj2g8FJUXPBsKesTM4F3TMQEKmR1jWAENeos",
  "key24": "5wzGZZyJm3oGkFqheT1Qq9i9QCFqqih8fK6DQVZgJdjVSpt5W7q2D3KMnGZaxhXUgLWhQETwLRiEfsN697yWQy1z",
  "key25": "oaxcZUPsShZkW72SgMmTYtaNGyizKguzcQgzwieN9Q4jXmfSwf8rHK37EhU5BXcfBe1JLUHq5tnm4HJTth3TPEA",
  "key26": "4UuTj5xs2veWyoBSspixBt3ND1BeaoDS72FhWmELZQs13qYy38NULXBy96Poci2DX55SSaBsnZajSquc7nbdNGAF"
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
