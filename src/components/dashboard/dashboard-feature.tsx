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
    "56bTMR3E4EaFi4M3WeoRzd8v7T8p5ZXaKEsBpNEazTMVPJ8QC87jNmXmyt3GejYNzZf66vp75QZPygty5iuCFWM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nmCPyfzZ34aGPAWD9xXwCQVpepAjsy6FiVWRhAjhE6H9kbYkv2kwvX3V1Hvip4ebNiZ2Bur7XyAqJDUzkAXpRWo",
  "key1": "5NYcd2jUNsAUXBX3wyMXijDnGhqBVp2yt1h6UFreJqkD8wuhxuP53bGshAjz86dqYbqEmaAtMMC8jTayW7KH9Aou",
  "key2": "yTAw2iKBk28sMx5eT8SjLyGQT1rLDE6kE3Ca216t3dgWr4Y9xkPNAwx8thdZVjgd2QG3WNZNaNphQJMJYVG9qg2",
  "key3": "5jAgoixNcfocpewkpUhCpD6itUxAsEZP8aTtm5dUzUYtXQsuMSZpgNg7ZpU3SNwFZjRdVa6HmB41vZTpNfYkQM4n",
  "key4": "4ugtZNMTrMRFjzVzVxU3NkAx3QmspBwjBhUVng11AxwNQogdiQYqVNpUc6Z5McLLpGTam2J8gSfeD2xFC8Q4CCAi",
  "key5": "dDQ6zF7M1JpQGsnSPsNJmT2fn4QTb3wioi3PNt1DyEjzdQMpZLQWogybQconsP1TU6ZFapTDKWGVsTC1L2Q5RR8",
  "key6": "3BCCzMULvwGoaMn6FddRecuHCVW9qwDMKxHeJvTezWPEnvjwgeZJGsKtHJrRhA6GoYuG4NYDz2s2gdAC2xFJYt6t",
  "key7": "HYMDbP4gNEMWHMjRUG8WDNQJWKBoXrY3p7iwb2Tq7Sacx9pQeTV91feezf7bGmrSHPa5n79SdoTnc3mrs83ojoR",
  "key8": "2Jyx2iU7PAqSFtu4eRX3t9veH3H9LhzdNgQZeQDmweRyDWdsNkjSkPJLdoRtRvXDsqKoFmvtyUpQL4GpxahuLSiu",
  "key9": "4T7MzHKHMmAQivQksz1SexPnst484zMTEypEXLuJPs1qyi5nMzr6ZmqXzfyvLcZUvgYBCG5fcjTze3nsCfLTUFkS",
  "key10": "5phYzcrmB2N3Y42S7SASAeHh6hYWD3frrTm2Egdomj89LnMc8F8NVQrLskELJyxajeV5RDkgQbWmg2e1dKo2evTS",
  "key11": "Jr6eCciGvWSD6W7Z55yo8Bc28RYxc9CVZTwMBLEqRykEzbc691JY294JkNbCcf2SjoM88i5HqVPMaCnvHhhATd8",
  "key12": "3jjKW9HSfYjAjR28G3kaFp2u1Mpx6UjpkRk77hF9isVRUbMKpHLW6RJoiYxwPxLdkYWrEupmXUtsuNuWBXT7ynrE",
  "key13": "5SBfQMyzpzfb56S4tU2ErtFTzA724zx56soqXqt4ofwRagKe65csQKwWK4kLnJoiX22vUr6tFZmjnajembFa59Bf",
  "key14": "3Gkmry2LSX1y8jf4uYNVMGTUiUzSSg3Qb5soSHDW5No329Jj7cSAaN5rNw7X8BRXXutmxh8Pvof4Bt39MuMGXofd",
  "key15": "5pGL8rk4gi9MVBh4VeR1PWH7qqR6Ggr91E92qbJUM8AsLv3kx3nzuQxUvisC3mbWeMaEi1tkd5tb5NZYEFPjsWTU",
  "key16": "5GUtDCHbXpsLHvXjfX9emBPQUnRt5RfSrXTJSH8CpFh9mSBFikPJ7YaLy2VEsYRpjySqyhjrh4frGw1mK3idopAU",
  "key17": "2in81VchCynpyCR5T7mPQXVW7BXDFzkSfNSsvX5rMFyva2cofZfmmmREkEGGT6wtyQDLCTfcHbk7rNC2C9FGEtiW",
  "key18": "5FXaEk6QT2u788Hh4eUyJeob2uC7ELRqDFYAee9wino8C4aoRBw42WqkSUEJofXHQPwPoi54E9NhFEvvkFZtpLoT",
  "key19": "293kt83joEeY4DrsD97puyhLVDWSvsKcJddFhtTr9Ksy9ULFPswojuB5dFnwny3z3PtUj3MxCnfVZ1mzUQorvtt4",
  "key20": "2MRcbskTt5F9zGDaZFjtQM3FGXmumku99rHg8eZrftmq5c6HZwPLHY62mtCAjw66ndmWuLMkrv1kk5LfNVaVzUKN",
  "key21": "2RcfZ9myykoWHvZ2CkECW5hMQy6GRRXBEjKezUq6y7PAMkApSV8LA6KBbAajS3QnwAaDvEZodAEtRtq7MywpmM2X",
  "key22": "5tdZ2eSjRPisiYqip9bQ6eD52VLvaytwnRMf9n7zoGXw66ffVWZZy9t2XBPJg6i35ifNyAxfJAhMaZRzkDESfkog",
  "key23": "47AcmD1prtFAMmY3Becs4ksr5KLT9WxbnCdyYFY3KkguZ3rhbNijcCeR3yN1trTY6yU6Th5YDVjsvqPrNeXy9Eyw",
  "key24": "5so3qVLUuX5sPwFjjDG5GAqcfMrr6SYeeKYNBAE6DWjDWiSTr828pzjN1kjQZVxs4XZXNeYhCdtvnoz3YRBbfXDP",
  "key25": "3VafEEG1mA5uNt7p4Nb2tS6HGymYbghBoECsE9gFYK34eb4UiMENSSLMPECPbB2ccDd2VASUEiVRdKULrbxiFWys",
  "key26": "4i2ZRBLKCPdyZr4MuceXtjTkGS4yWxEf6WA2ECwsSqU9LnTATH8EetHYaah4sLoeBV9p9mD4BgwnMzjQbtGxWRkd",
  "key27": "3dVeKyqNiUVWMvwBuo9PsY9Dbp5d57wbyextEXkz9twaw83EjCi5Y1JG3utwthJZ7CigBcWwZVD5N3wFwQ2s4Hom",
  "key28": "5iGZfu3fjAejFNwL8YhfYqnVTYRdTmHB7KpRDV7fn4gthJwK3V4iGoZq3DXTzQ18AZenyWuaz1ueSPLwaemZJ1XD",
  "key29": "U6BNtPF2UfgpLD1QuDjW9iNYKoQb6qJz34Lpxi2KW4w2cjM8bL5s6u9MM28P9fryjgsmt9RKm27TiawyLq8tpdN",
  "key30": "2Cy6Vq5ZQu1p17aokJ99C2Sd4odjg3UVgdn9f29KSp1DyJ48JUNZwc68N8NFPYL2qrCNXV7F3mxCTLhox4PS7CSv",
  "key31": "3HihjiZ3bSNrpL9Q3zWyh6avQCNbmEFx3fGcHDp3Q3XjzzdzkkWGGUkrkPTzd46JfEJMcYnXDYzsjbgJ747Unjw",
  "key32": "Rm4RqbGiwCyzbmwoQDe18KPeKRK4fd4X4N7PV2coLGQhkLbnGnkYJ7QuKMGBHqid4Nj6TN1PDFdKCmMNajje3Dg",
  "key33": "fEHLg7kSZhku9kkYgjMVd25ewVeGzSLT9X6gQh2V5jsTSZLTjWSy29amo9NRbmTFzhdi6ypByeTwP7K8bKMN32q",
  "key34": "4HW3SLeWFKJEPy3fo9URdjZunZBP3ipcH3yFaxBH1GE776Jt1yxigUE9ws9DZxE6wAB9HKd2yjikT2ddnxDXsVwo",
  "key35": "58F2QNTwYTDFPcbXziC9TeNgYQ7f5Qi4ByarvEYArM9V7fgk2Z5dEtiE3giPqL2MZe5pChYm11JJ11qNtDSXe4Cy"
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
