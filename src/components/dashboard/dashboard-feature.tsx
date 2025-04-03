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
    "4o7nQ5gNBxV1mipY6CdzYNsDMr1pfMJFDGD1MYo2dNB6EydMkxbYmdRxbhKw4o9a76dUs8rtmk8aE92pcUgnvf6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MoxUCdq3zCrATVqsRmiE7ioyxufqbNhmUGEXSAsNx6DYW1bBzpp41FbpAiAQdZSX8gRPtya1nqF26fCpnMQ4rPU",
  "key1": "3xZaFZn2xdVDHm1e8vzGQgGA2Jmpcr4ULxETnoaC7xJ93n38nAeM1G1SJmuvx9qJxc43LJd9vVaQEKk7dNcPHgyG",
  "key2": "6KjFft9KoHrgrqfSjMtz55FQ69D6LwP8hpVQ41Yf9X6ar2RK7eVZRPRTsRvjJk5kNzua7vEviPdb6KcPfxejpLN",
  "key3": "4Dtb6LhAKmuyNbRNBqweQG2KDr9MEnT35AzevrMnsYumGRcq8roBtTRdUvvpizPGjg9CKfCBcwBU8MFuD75H1AZ6",
  "key4": "3y1XHduoGrANrv1ANu2BatC5oUUivVLUewR6LBCSUVrjwtCbUpWGfHf37dexBcNzj1sZgmpPMCMr1ZJ8Whe8WFCZ",
  "key5": "tzaYbaghfNqQBsdH7QQNoTMYNWaYHWbZxYif512pVLohtX6L4sVuDMAzhhY5fBzTCopByB5atACBdWqiwteMAqW",
  "key6": "LsdbNJ6DuvoeqCSYpM1u6BKoEhvC967NsqtmpXFVdx3vJ1bvmPX5YeyALn4xsH8ca1bCs8ypnDXLhfqidhRs18E",
  "key7": "5dEbhWRkXequJ3uQXiws5uJwJRh39nwSnUBQ3p9cqATCzZSQLMJXkyeRDYtuQAPgX2tRTPBjho6fC4xo3r8w2VoR",
  "key8": "aQKd9cyvg13Lm5SsqsMNz2ThjDEaHJuZVnpTJTvdpCyCnpUbyYXtWjtEvCpC3CC8h7uY46TX7tPEKxhPHhf3bHH",
  "key9": "5J1goyYXszjzAbqpDXshTk1jFZuBQ9QKL8FfxQj8GrBFPqAER2ntjp8DsLGz8NzmPitPbY7etZBZW8SzipFKkVhN",
  "key10": "5eqFNWUBcTYDArjmekGqLsQiXF2g9ExqEieK3gh5kNUMSr6W5Aptz23NtrfvNDaj5wTL3WZRJtWJfGGL4tEvLpWQ",
  "key11": "4Xi1Z8CMsd1ew3Nf7i9KmcEYea6gLpuvc87NuiZKotm91NCWYo1VTqUZCrK9T5A53dijsWGuPvViSC5fDgLF2Pdu",
  "key12": "SJoBWhjseUekdDS8hyspAxMGYoei9SjU2ipDHTHm827enBqisbMWHcd7P5wnfA6Ys2YHAkQq5xU3VACE7xKAi8F",
  "key13": "2MKn35rEXs1DCrTbzU2vjd2Cyzd5wfo85Z7ZrdXH4XB3ZD995fq45mu8FCPodnF13UeJvfjncfXDer3gvo9CLg7s",
  "key14": "2BNeEtVF5GhNYKXJvF6ur2o5DKK4ir3k2DjuH9jv4dA2qp9gmetg7g7aH1PbyaHEZvLpv9voAvbdwT3B3yKbcmBT",
  "key15": "3Gv4oWd2GaWAoTYpsnLh9ip5ggctAL5nn9573FXc6DgMzgd5YZt1hGvNFuqmAnkozkrbiLx4AeAJF2AGCuVsCtPC",
  "key16": "5VBGnyJdbZANCdkKWxw2xy52TPMhxvmEgq6kwaTU9FNU9HKbq91xe6dcGSoq3maYL1sRq3JyTTQKY5MGZ4jK57BD",
  "key17": "5oiJQaaXp1YWCD2AWfKXckDRfwWYmyU4EoKgywjC375KUa5cS55srR1n2bifC6JC3MT8sdfYLmsJJS9hoEgVWu5c",
  "key18": "4LYsJE8dVWkK9mgBHoT5nmqCdYWpD3UA5qrpocB872dgGa83wAEs7cyLdQQEu8TpfXomdt8ZzN3ntXm7KHQYubco",
  "key19": "2pwnrr74spu5mQoaSTqh8GG9hxfLEmyfQRWxCug49mphgcyyPywg42AY3AUD3kPdUuXiomKm38qDRv4W8jB9wP2y",
  "key20": "C3zTN4YnNQzxjoX3vwtCdUsn4JFEPNFYRGhdghaDfukmkyJSHiMD8xdeXSzscbjGp4opdeEJQ1RZErkcmMdTJtd",
  "key21": "2SNzq1xwjRGdHGmgpYefTG127GgfTpTp8oeWYcZhpusWuX2R9MmgtexytNVC9G5b9wGQqftGLT8CNR2dKCGq86tP",
  "key22": "4YiZs34rZiumpjWh9WDJMLjYLwiHNrYdywedcBQb6WjSucJ1YB6G9HYpS1NAfuCkGD1QD5MQJGrqHpGKpfyC3UVi",
  "key23": "2xTjcd6uCqqb5qfXPuBBpo3nwDwF2Tefdmbx8V2pybAd2eDzkJ3nutjusLBvnuh7DBJZjc23RmbLJTBZ1MGfekkk",
  "key24": "4uCtnFDQei9hff3wbXPdSqqKGfgCZ3J1fo9NCSNUyFc5ReSfWaGDymDuJk3RUWXKW1e8rmpLGMnrvHQoNQ4K1d4Y",
  "key25": "596rWHQpRdfses44xiTwK2a7J9hMwhZ6C2eh4oo2Xm5oAipxUHi1cLnnBPGWGJBB8F2XLcAzaiJ9Rrom7kNbXLMg",
  "key26": "4H5Y7MWgANSsGDT7ahuLptKpkX6cuKaAe4ug9CjoDLWbruEkZ9Z45QqZmBkFyGQh16aqihiW7jKPzjZjnXiA68nx",
  "key27": "uaB7k2KTabbx3mFFRHGaAv8uuECjPEqcWozy3sENiYLvCVTqYY7QQRy51CHjme8c7PgSeZ3oW23cHMa2hoE1U5A",
  "key28": "4yxQN4fSMfQ44GqqffYc7d9Y43S2urZxqyeo7kMvDPdLQriPQkkUsA4h6tRPx3MyiX2JDN6GEseJDkC7GAZEeRpM",
  "key29": "5iNFdpsAYSofH3wMQYhdBFrfnYQNzEWD73CqAZZv3CRRFEjFkKKUKmheiyFZXQQcn6PbG8CxUaTD6RZdMWGmzXB4",
  "key30": "5rYpsS4stAqGaeKL2dbzfLau9YJLhMRQTA1YSKiEM2i8MPhMzqmK3KDkMfXhYDtKfiXWNU9y8cDzhzv4cEbni6uc",
  "key31": "3Z4dVpMbTcMrWJ6QZuCZStRFqPypnSchzHf9XCzCUbk6H19WwCFAbovX4Ls1xbbK8UWo2yoUcSaNgr3FHenfL8Kh",
  "key32": "PPvd7tziLFW2GypxddKfBhfXRSXNzyHpAK7sMhPSGhzWnJ73QN1mqRVndkP7zSkZwsfRX5DccpH9af96ixdoNXi",
  "key33": "4hd8faxRm5cf7SJ56ohiQ4QPp25RttXEDNgk3rPRZcDD7js99PxLx3i2wo6kCa9aPEvF4njP3n8q4ZGzbS6HZnFD",
  "key34": "4aCWLuFadnsVy2gNe7GwdX5gtfKLCmEefi2d4FBrCgWoNXT1Y6j9ifF6PyJbMp3oTii8vL8qmkKHGrapky9DgGkf"
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
