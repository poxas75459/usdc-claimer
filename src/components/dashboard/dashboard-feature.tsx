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
    "38vTA4i82QtLHfpwt7ANs4xLcHAR9FLwhJjoEtmqAERpk6mPVD3H92xLVCrpWcTVNRPSsQEqf2nr35WSz7zxPukP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UGmWtiyEnm7E27jabt1hxUEkrSgUU1WnGyqVeftbBzyLH9SsiWBYpzJSP9EhXTN64CTFaPwCVni28AhhvBLKbo5",
  "key1": "RCJcrUzDVapAukX3B98TrhH82FuHy1M51ag3NcQW5cWtPngshn6xFHAYCg89Xx4vWYmb7URjxuFHTguschtzys4",
  "key2": "4uAd1Tt6AKaiXdPpcf6nptQYTV6ZPC5ZQHvjDCCdhsFixaVkiN5sWwmRhUy5W3unutndaoYkPxofBpwsRF9XZ7tX",
  "key3": "2AVEYUGM1C169W6KxsDqEi3XcJ752t5c4gazbyj3FKnWp44rxeJhQHPbPVAjLExFDFCNCKjaUzzQoz7FQfSkwq71",
  "key4": "5remZkvnoN8vhSRKgcSuARyPfDLaQ6WYxHbzuCzw9vbStrZaHsBmA6rKGcgHvdACuRbwzA74V7ETNCYefKotM7iV",
  "key5": "4tU6p5kLeooabchjfSHEbyRc7ZeA1Gic5Y5B9NhDpKkpTu6xZQzRvHA2NxXRFhmYpJ2f1VwcGRytB5esHABJhPZZ",
  "key6": "4zLFAEubafJkP1GrPhHppSMCRPv2YzfN9MsTzZggP7a7eUSFq5bnWAYwbrLRHYRtSd5z7237rDsCgDciqvM3iyCU",
  "key7": "35pYtutm9TXsxhYdtD3NuXTqFdF4qAKHvEKVUThMAM4Pazbs2CdPKxg3nYmH74JDv7G9pDkuEhhfuDuJAEgmixWb",
  "key8": "2P2MGtF7frkimiqMJDyDXjTpcNKpidNYdK3b5RK29VcQ9yHZtyTQta5RrYwky4s55rgm4KM1a7bAn3TRf8TzqbPn",
  "key9": "2Suh3LtRWecsrG3FTy7Ktw6G28WB9mdQB2VMyfdmQ8Ed3NhLzCWBfrB9wiaVfiAirKCojuadDqqPGEDhPuxeqjw7",
  "key10": "52qs4FV8StgE9oqrrH71RuHSqfyZFE7BoSVEHVcPeHFpbSUHHm6y68SXKDsgZTWFrq4NoJHZA73ePmQwSuD2qJV",
  "key11": "2q6hwpR8Q3D9LjgUACmWEufZdW3TJ9Bp7iWwpPMvt4d9muxxtFmsNnFksMCsrySmQfUCmNeMLsWcrzpv57GDhEWJ",
  "key12": "Hznwo2cQW5TaCx4MvNeeUhsUGN7Kpoj3Vpb87mESBMYzsK5uhbqEQ1YsrDfXwNta2AosStrg2saA2Qpb1nCKQGj",
  "key13": "4jQk1Pygx8aTFFEkjGTsxL3xb5pCTy1CWdL7GTFWR1c3DABcpGgTZUAgweM5DGxJiMNxq8cAktdCirBsam3CgX49",
  "key14": "5zGhnDigvMprEkCctgz9kzVWYh9r6scPgko21KysYfEhaohtfUwcvdTMBuBYEHq7Lp6m9wegdcPWTdvNgL36h4w5",
  "key15": "NqAAL15PymiYXZExFdHYTVyTW42VtjHtLmLcVbbB3Fkmr2M6tXVNhRd5zLmmhxpHNburEDr5Ja2XfgTasApm1kb",
  "key16": "jWzpiLawjjSZT5Ki7UNedT1j51RXEPVwvJS3nHpkofA16xHoKJn74X2TiPKAZ3Vxku1Lpw4WyYp3JeGH9tdbEoy",
  "key17": "2L7R775G7PCmAedb77ChQiqqjgyXvW6vqaFVJ4k9MQ1ZR1DZsnyPE14h73Y8QcpkUMZA525UhjR8AcfueCjSKdqa",
  "key18": "4xY8HEeYeLpTK8FRUJVWur79RdR7HhhWbwf6YkqUQw6wsJJZvYmVNcJD4kc2BzSwrWB8GMsErpeUEdG8xXMW1JgE",
  "key19": "4nW4oMrx3B9kx9zYgtjYLJT7kQyR2Mp9KDbQgKzwVXmA5TXFUABq9cY5gLaKHj7nfdTTUHKomEdTMMzELeDXf5DZ",
  "key20": "21myzC1AxiSPvroTBukLRFC5dm1wZRVWWiCZKe9PzZgvKP8o55qLgLUqm8e75G7srkX5npMeJerHE6iDc8dtuyJo",
  "key21": "4ZWFSaWxQk4E4Zbmmsxs6TkwQEb1tDPtFUw8gzFzSCdXzjWzAx4QpY5PgZLWvs7Dqmo9dMFVsBB8C2yw2Z9S8Tt6",
  "key22": "Pj2TibRcCpyGu726R4wJJpBKogDSGrGUKA32K5atUZpsfourEjAenXvcmacpVXfumrumUuJH4k4iyxawe9hgNTg",
  "key23": "5SjNKUExZYTeREYYhx7zL2SjWccqdnVPJfYWtQ5QoWEKYxzHyPWYNNmzxHtaEvhZTgU9hGtVexoGLP2VN7APQnVz",
  "key24": "4GoDuL2yLSX3c31purgvG5Cr5zpbaGESco4vJKtmfGoVr3sr89Gh7545YCSHaQq2fwTzbvsZ3Hz4JYd2t4KamYih",
  "key25": "2M13XJvVt2wj5LPuSUkFXyjy1boppwaFi9nx8519umbfHChRQN5RAf7rGzKCJ2DcoMX18i8R1XKgzs5s5sZmo7Uw",
  "key26": "4ymR5JRbtnAbwadJQ32pTvcozEbmF4UYVYmwSN7PUEinpniJ7KtwA815EsbxGbBGDRPDKAXSF1kjhZ8FkvtzX6vo"
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
