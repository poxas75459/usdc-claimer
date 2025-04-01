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
    "3cHoyeqvjHbAugDEtAxr7AMqJ3K4QFkMhQx4DaVWu6aetLqeoZziRc6YKXkyrYP1c824RwX5K6BAgAUDB2rBmJgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MTLEscT8LCoATXnsbYHc9t1CvumonZtggkEAN4h2B23iPHLvvmKdD84LwBitugYj1heVXWHHnZLDZNLyaEYxiZB",
  "key1": "2HcdxhmJaknJ4J28oUpSs3uxLLuFUjgex56RcimcxqextZP47prGb6gNG4YNYfPnnQB1fFLxMBaj3Cqsz7ugxChr",
  "key2": "4fwpNH852PfRUDHvbkEfBC7RQpV7HJXMKSYfZLC2LeHhRWjupWFAV9UJpdcErckve8JZLxducrwuQJgpTeTDgDxy",
  "key3": "56VwDAGK1rrjYdqLY3xZPZAH7TpaCZyA753Q4JmzxLPm8by7kaRiqEZ9BbH2qFRkGrBsLi6xnJ2zZ7rBejarTWo1",
  "key4": "29WC1D3Pz7CEACSavMvs8mPZG3nwqAqs1fZmHZe7whnMM62aoDMEsmMvhonBsyDz7aqQUqMTGDsxTi4kh4JkZBfE",
  "key5": "4apL3tWke5Vz5hBA9SS8T5sqweQywFjX5bsUwvtPzJoKuejAVZSYewL23vgPHdgHGzKzLFAuZXKv1Rb37sNPCA7P",
  "key6": "4RS8JksKdgcezW6au8sW4rMX5B1KdnwncG3EiPnu6w5n9hFavVuQrKjxQf6kYfkFMbSgKBezjvVTc4PgR6irB2uX",
  "key7": "4YSVmVtnzJf4KrrsQd43x2ETdp3F2i8ACB2J1K6kmH6XC4tcNu7e2HZ7FUqJPVkfCWTciAJeUkpp4BF12BpjsicZ",
  "key8": "5dBUARxpWR6LAzfgQ36NgDRYAKYpkDXmeAkyzTcWS3xcYHhCDNy46VxBtciswmh4e6QLdp2EZKqaE3QU4uucEr8m",
  "key9": "5Uu5NUhUa6PMQ8Aivs5v2reDub9AcjTJMZfmXcQKCC4We288BEbRUgevGqUCbmQkkFF6EM5VP1YnMRRb3LWmJ6vr",
  "key10": "4D9bQBZYNCxVKnaScUpwPxsbvT6AYySZgbSdNxvCHLUvVCTGRzE5dUSD7dbXrGYqwR6qfu5Pf3rEVorS5FfnmZLM",
  "key11": "Hanf61A2ibRGU2KKTaSLcEUDJ1d7JaweHsaHTo6kHKEfLLhU4nJqhwC4jjS5B6aqU6ti3xpM8GwHizrjFtsVY97",
  "key12": "3JMkoTobqYxXFAfGknmKYTBqwKUcvQZsKA2zPFiy8Bdj2u2x8NoirdHCdZ4a5bikSbuRSXvzkQw8VZHhbDWkGKNx",
  "key13": "oR4px8mtw4vUYm9edfuj21U2Vh8nL6qvte2DSJePJt8BE77EtGXme9t3m1WiDbdzTCCZN2ugLTGmVHvKd1EAyE3",
  "key14": "4yjkcPEA9D9r7i1S8R5N4TAaFVWdhb3pPuawqG24nRApQKbZdtRWYZELhWKDBnCB6ChvHhzyxbBdo19VmLL3AxC3",
  "key15": "4zqWmvggEfXzueVZLyQVYaFqS8phPfXgM7EtWCY5pzeyFy2NWSK9pu9xBABkrEYSNhp8phJdwi2nTj89mc3RELq4",
  "key16": "2yUpNR18YEpsvDhyqWcd726EZyAtMoqowK4vrNYrvko37heXKvgjGD2y6B2z5ZSf2hdR7LqXhAGJZVyYBnYwGSvk",
  "key17": "25VZDvRsAQFKCdDLiPnFU8n6VHNQ1E6YkUm4sVYJMijapAjjmVCV1nbhSp9AwJau7NmjB2Db9tCMpqoBjvrgUDzi",
  "key18": "5Vcwik4hmcKfPqtpXqrfx1LimaGJw1pmCiK1DvRNPye7wNybT9zsoPj1MdpoSLzW4m3bS8xstJryEuRSLvEohyQe",
  "key19": "Uo3aDXV1gArg2KCc9ZQKVz4erdYHpgmTL1wwUE6UXGLAjfUp3MnNisthH2HCnTUcLrZEGWBe6KhT8kpNLNRKiNG",
  "key20": "2itisn1z7CVwjvX6zVYTpT7aEHQSVoNuzvRFaxCV1pekrNYkAC2Y3CzUYiLmBcup4X6vnywpAwaybCHnVoqA941T",
  "key21": "3dkdNogBEushGHB4reuwxDGJb5jWzru5VEDZLT4n6ivYSB5tjgYERXNKj3BibBLE6Vd2xEva4oGWmqjYd3AMdGYB",
  "key22": "LFH6ZQTUtb2RKbf1KqUMeb3otKwNm1DtZ4yBmSdeMTP9D7Zfr2VN5kx5nR3CHGEzzdvyQwSkKvzGi1DjHug18d1",
  "key23": "kzeyzQ7F35JMb5maQsS1fZqP2Es1qogio6rGywCPauUD7ZamhWD9DT2XHkhrEjMgAHpCYXd3ANaTJKQXNU1xYfT",
  "key24": "43Kx5nYhu1STYjYimZBEwTBF1EqYBiqvF1vxATu7n1Sq4kb1sFv685L6kZp7nvFHvasKGAuvamFPu4notzLCVnPw",
  "key25": "2zRDgeDWyRa3z65PdfzGYfRYQ8MRVuqAKb7iCFPi6bmfLL3pwxN1tYChvXLAajrH6FQHSXzkq8ZChPCEVaexo97g",
  "key26": "5cTNnU88nprDbjtFg69xZTA6sf76aLVsbmHJQLRwrtcfd61nJcBUDqnnEFLprJCwAA1e3YGrNS19GoRQWzHXehzW",
  "key27": "5uy7TmwpJET1Y222ZyLXvWPGD94Pxc1MYTwKGXvkexHhyetDefymU98RS7wTLWBAsA4V5ynAPwDybFhrLmdM4kS8"
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
