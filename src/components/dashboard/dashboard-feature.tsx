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
    "4nDLdtiyAAYCaYfSLviBMa9Ug9MbaNPh2CfmLXQpAoYfcye4JxKCFGsprMHupxwXDZSDgmBdZwn7JWzEQgq3qsAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HjP8xudiJFrscovZkiXfsAHVtoyveiAzYkaTAc152W1DB1GJCFJepTQnEt3B2edKGj4XVDRxwKoszvgCoeofubc",
  "key1": "4ZvSzcQybumuS7gDdyhMtJYdSmZtwnRwNKmP89fTjFZxMPc9ECpMZYq5hX4gXBbSvYC9Qcw54CBkt8xiADQ7ezxi",
  "key2": "g6Edb7jNeuafBwdKMEU8pc1v34sByqbWzbs86JNzhkEQBZmjuETH78VrGu8QRJbzybbs43quaM4UHJ99aCaN8w4",
  "key3": "2k2CkxfUr6MWLzjJRtmcJr7wg8eqe5yvFmfwhywKLaZ2141241c6tTevrKihAgfkW2rvVeXuPr399epWvbJ1tH7h",
  "key4": "QRnNLhwCLsYT6KRNfFF2eDfWbQqp4PYn1cufEgPJ7FTfsXymMcdbWwsBmoN7bd491fbfrePsVxGr3qNPfjcw58b",
  "key5": "44WEpv5qncrtY76FCjfJEeRxszLk5ppwTwf1ysteTP3isecFmFA21UDcjxXKbuecutzHXA2sZ3JJg4DeaoaQVWan",
  "key6": "5weaKTp5g97sZXA5Ur5pWKqqcsiJRi6mXZwjavejyZ7H5pvKRj71n6GjtBjidBAAGnTXcq3KLRqTDCkvm65CqJai",
  "key7": "8X7LnLmJm89287ZTdRgsvLjTdmfD6VnhTwVoBhMQfgPACFDxzjgdKAnFvArRkGCZV7aGqvLZSutszBCRtQWbsvD",
  "key8": "5W3EBXrF9F536iwk4zs5A8TmR8M4mKWJkdGmexFD72nAwJ7Au8iKBRLvLg1Lw9oLxg3cne3ACoW1vN1ydeVK2PVg",
  "key9": "3NUjevLm5S3y6WhhDqFnfh4bVbfAVs2PYuurhZsHCCPd5QAWp3otTo2XvG47GBX5ssF3Ztj8UTiKz2tuBtdfZKD4",
  "key10": "3Ffaen4X3SsLx8tSSHCeDbJGWKX4FxwhvL9xo1xaUF4zEC3PHNZr2Bp2AFtanpXn28MmgbEaW8V4kk8Z4C6kXTNu",
  "key11": "yvwqb8x2xvQDgw3hdfji79KyFmYxskB6vCsSkWkiqB5aM3T9kYqEFVq6U6pDQwTXa74J4qsxf69moEorB6kgsN6",
  "key12": "5mGdKEk7JZEuZVEoAcJPoWEiwNeshFLiK1HCv1S9yPR3BbS5AVuKQ4t2KJ3PA6Q9i1F4sitesy5L3JdECrTzR4vr",
  "key13": "3GLfefMutwaSPxCvj19TDHQuUTd6MpCUzY3zstZVVmzpYrerkb4maw2yYx8VaZBFC5unmPqM8QniqpFPKj7BbcNR",
  "key14": "35HMAe3Y3w4Q77FvTSpA4L3dMDV3Z8qeM9EeTDZsDEmhVBMZRX4wwL1ND4oCyYxyvKhmbz5589tHxAR7ToH4KE9z",
  "key15": "4qYN5xQfFh8toT2a2oTFDtuZ2CmPtn5skxdcJSLPuhSgx3CNxP1aMNBMfXMW6ieBjD59Fc4MoGzx1qSnBgfk5rwq",
  "key16": "5f4QyDAj79EKB7fSVJWREb5yQjAYf16EdFiWiGQaV7HrMTZrsamdi13hGkM4X2PavhPsRasr5Ga5MwP1NkVg7gVF",
  "key17": "56gDBzCovwTMbD5Vb3iRQZ1oajiDdYvtFnScoGsf9jpXV86ycsAqEge6hgypo76rU9v2nB3PeCdKVUEWicrZBeFS",
  "key18": "97A4ANUT1X5TUMpC89sYi9eLQHn4RrtGZEawBvDG18Dxfood1dUHbasuTLTVep1aukhsBrQMz3wdekWnQ9f7hyo",
  "key19": "2ftLP7K2xmKbWqC7e7EZjwu2fNYf98oyDnxGkx1hRb6Pca2iy4tPVUgQiwWgAEorwsG6kLFRx6mT1WxSMghEeTuv",
  "key20": "57NUyozA8xFav63DjkLpP4f37PkxasHicZaoFLNuEJUCHhoDGAVSFgA5dKZDNc6Vi3ZJzpfdMskpSMbTuTSkcbL1",
  "key21": "3wFX9iU32h8L5L7bnyboe1LPzXhhsNehXXL5QbrpLzwLPWmxiBbddGdcHBt9bLm7UQp95AJYLqdSRPzv1NobavNh",
  "key22": "65Q5T13zuwbDxk7yHCH2aQzUx1fpqc5NR7nuiaxtfAwnozZZbAUuRQXevjgxk2XvmthqMkdgkuZvMqWaUJPxi9se",
  "key23": "2LTGRHzyHjAQJwcqyowwEFu7vaQUtPDeDS3mQnc8PoZG2y43tc8nuyJrmqUZENu1Tdz3dFu2ipp1qurR6tDQMEWX",
  "key24": "5ovsLQTPpYPAKEu2MbSxxP4iiww1vfwzd3F6fiNGDdLtfKF9u9tFut5cA931nPDy547tNa5Ayqdey1yPev12rbn2",
  "key25": "5tFiuLMKqRn6EBLe34VGw9UCzRgbbdjMRpqZtwg8NrvEpj4cmkuUoZY2s7qBRVCLcDThKfkGPpCgFmcqwXX5hpVj",
  "key26": "4h2gvpo8EWzxpUiAGgBUTEHfUA5PvADDqSY3J3hBCzZuFYB5fqyhUuiXsDk9itLea3CQEkiU3Ud7wT7T6GY6v7Vq",
  "key27": "5PWPzjvUEapY6wa9d7n43BaaqfLUpLCBjSZkAFM133Z95k2wU8A9HxK2U2yy7LDopC8S9x2J1NJr8AwgxS2mUZHT",
  "key28": "51qZT3xP1FchMyi6juo82Dm35iiMPqefyehp8p4RDsZZ9WvdsMadJu9dgE6fGDbwd8Fizz5M7rJAuZBydpYCEYSu",
  "key29": "45QkohDyvyhuFQDBPAR8kFBwM1JWDTV9GWrQBntueJxMBBjwf7NzhHNcVCuNqsaWP8bTwmFvyXFPZDK6ptt5Bzxk",
  "key30": "3CQLr2sFchEamou7rqoqSaywuTsasq7DVbYYi1cMtPrfnKB8CjPH79F9NUtrnTnQSvegoWZNqhwDzWBT7V3H34SQ",
  "key31": "Ta3hcPhA3dAEiYVyufsHnvqe9HiQPb9Dv8ugQ3BB3JnJwV3MXSU67rpXZxwnPSaEtanrU6wJNjNZ7ditZM4MN16",
  "key32": "2J5LNgPEu3rMxUyMYJ12zHYEvHn7CCnbt9QTjRvogm9zSi3A5biJRJ6eT1hLjXh1frxqq3DFYt6kYnnAXAup7VNH",
  "key33": "2nzeNYKtmySfkiTKY9ue326r7W8NxfnsFa4Ry4Ra2HSfp8Nnp73RFn8x15h6fhEogCa1Jinos871Q3q6rFgK9G4C",
  "key34": "3uBvor4xUYDzA9AwK1XpnbG5EjLKBfaR3zZgqnHSrHfjZST1Pc52EzscmfYAfomBYao4PE8s97A8vDwZaXMiuewo",
  "key35": "4sEBjAhU4rwMCTCZhbnQuNRk6mkSVDdJE31yYS55GV5vPiytwALetJehWNMj18n26jaBTYjo686DZib9AnFsih57",
  "key36": "2hifXjQCiRfwjs3t8QazxDT42B2o9ev9sgkiD5MDJDLxiegWd3ThNZ44wSsBxVKX5vPnhMG4SN2Q3PtaAD2HjTGq",
  "key37": "3JenVF9uDFmdFbw3PyTfhNeNYkznYsncQJiGFQG4gJAscDM7WHH2ZZhjiCSDKmmMwJYiEwt13Xj7PZ6SkoPbZdqH",
  "key38": "3YjS5CzunVsWQFQSEZcHX7oZFAHuU8WT9V9nvSaiGBXaQ3hiJGwcdLGpWv4gdJcgnY7hXxyQDQQkFmQrFi1JVs5n",
  "key39": "4naCrwAg2ioP81kdx7W1pj1goTCBK9YwUotD9vRGTSgMHeS7Qo4LfcNK5ASmcVVbYAuE4sNQf6auppC6LAM8EToj",
  "key40": "42ysMR3X8gXa7d7mVtgytSLMa8Zj1vtav7LFjGdk5QmUKbd5McWZ6fasCC6xhCLiQUxri4RMMrnWZnUL8oZiyDhB",
  "key41": "sBQJ46SCmgzCXp4LHvqojMUfK67BdBw9fAYj2N6BNmoW4tHNZTgfUZoBddnXoHyBKH1cpupWomgNP1J9D3kibJK",
  "key42": "KYZEN6CGahkCcpTY9cPjvQRMz7HDc4XpLmvpKMC1vnsjXdv1vU83Ch5jBYHzJUqcJLrfxZGQKsHxAFMebbPtwgL",
  "key43": "2Yk4xudzDiaZLPnG82LvDwzVuR6x9hqvjiLe53AeecbcXhhhUxQDbCwsiec1kMT537nwqi78kVyNvpUfMFdAbn9x",
  "key44": "2bNnAsdx4tUr9gKfdPse58ZWV4bSoE83STdrzNySXdnYRDm6krqr4xm5R9cEsDbHzvqF9ya7XToYtewnA7eaAsSP",
  "key45": "RuJ8ud2k8EWFDAcqgzw4MRoCvKs915sopTpu1T1i6JpJCJSAu2gcNWf8Hj72ZyMVF3HtrVDZZavyUceDSYHQ6Le"
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
