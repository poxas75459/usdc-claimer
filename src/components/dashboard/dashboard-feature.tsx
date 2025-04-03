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
    "Pf8KHwqtSpiKEbybhMesDJaHTSHTsCcGrxpJ5tx87UArELTP9wyo8Y8Mujwkhhjisunb7pX1uQDzc3kwVL3R9Ej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64MEUBMBUo7b4Bjd5DVKsgkmG5sWhoVXbLietNDqHknRfiWkGAvPTLkHg1XQi2YaBuVsuC8ZAQPtmwyuBrjJgfq7",
  "key1": "4yMhypmYSD5DdZ4pCvUyKkmq1Abm8bKdTweRKzdkJRuWdJsTL2RtRHN4uobQym65uvXrFi1ry1aUwAC9QTBdVQiy",
  "key2": "4naiNj7FsSvNihom8Cw3KcSbt9BLdEnt3ukUgVDd59NLrA8ASXJ84LTUS7xy5k52nhay3XKaJVtLVrk6sCypxqNb",
  "key3": "4ZanTcGGt8j2GhtVYfYV6xZo2vaptvJx9XiAP4EngSSxbkmb6813dVsbu1vTAnbMukUyy9DV6GwNbdwNn8en1AN4",
  "key4": "yyL2kYZfRCmTwN8eQFqFqmCDxaa6wgLt6BtCuihUWrfgjTS1MGr5JCc5mC3qQsr7WaufbpWAV7D6xcu84KRKAvC",
  "key5": "y4B2A1XWauRcrqzr7jamG6PVqZ6rdAX3Nw6J31y7U6EWjk7uRsVcQDMwJjaG4d5bLvwKvdwL5H8q97vQSqVJU3H",
  "key6": "3wozhwuuMesKjqAJKfKMz7vWHxDprcV5KkZrYt95H6kVdmK3SGab1s44EXgCTt97FPfXTYriSYaM7iHoH5Fjo7Gw",
  "key7": "WiTJNYEFrsJJhg9RiAPDjS4BtjWyTyU6NSSkJXAiwG3ELVyrjEwhPJ3dENwdudGpfsApDMgA6L5QFXUpQRaiiAn",
  "key8": "3xP5hMqxHGQ4YPxBUYtCtJ27wC6WDg7L2TgsdxTgRQEjwXnc2x6NYaaMdNzqAsmikr2cPxi9XKpW5HqrBfkm4XWA",
  "key9": "5sfEey5jhuYHF3wLnivAHhnULw5da4eT38ywJCkiJuc2pjMitaFPV4JqCmwwLeZAmPHBeW2uReesGz6fouHXiy4D",
  "key10": "455JjiQ9taAw6zpXFCBiA7dSKfTfkWNMji1mmn5NpZAQVT8bF2dcuq3RtTCEbhwpYsvJmX1dsrgx4g6eL6GxPbJQ",
  "key11": "5ySoLevJw9U2AcdyDhhWaHgCgZicFAzknmRwwMMx68jkrSHqKK9CSRY9rkmNF33LFsUNfHPQAbEp8C7n6E3uNv4p",
  "key12": "66za1evVZgTrvyDhgqfbimu4cYjv5UeGR3QsipZemJawEHbgdSESbXM9MVpumHgchExMjxw33jp5NkRJ5v795RdZ",
  "key13": "2997oaGH6BEernUfTgPSVg7YB3dy34Wk7APS62G1LsyWr923XY8LAG4WmBsFm646JdXp6AVNjTgJNgryrr5xj4yh",
  "key14": "2h1teAkFyP6WjwT6AkhKozkJpGrLbzr4DHgfS9dv2qFR72q3qq5aqTShrVE8kSPux1hNP765i4SbHvnaSAMU8Ksb",
  "key15": "48nfYjTL3iKbbBeT9oJYfEeEVWVUbHe8vwkF1gum17yJKCnSADDh7jp5BXixv6XoVcbitLLJSBSPbWUf83kU6K3S",
  "key16": "5drDeHRfuZGGfY1drWn2Bj6dMHCdnVNGt6pBYUsT5qVRkvEAn6v4MMtiQz4bW4acmovLhAGuWihkQdX2ZW4C3VgC",
  "key17": "2nL7AsXJrgdAZNCDgdjcY2JUnPD7w27NGrh5PDeRR9osPC1KL76jM8dGduxcHtr9PuHZDG6FhEESbdELaAjmoy1z",
  "key18": "2CEXiGP3AF9yXzPnpYoAqrKCTySZSKq3aQy2pQKRpT7ho1mX62JdVsJL2GikFfcug1kAWKqj7tfXcqCDP8NCYCHW",
  "key19": "4kUNa9evvN5ohR2q9nqVhQbjTUeH2b53dwKmtZFVSL9WSgLtoxWkjSEHuFm1soEKuX5LUYp49V11tFZQVJ3V75y8",
  "key20": "3WZGj6rUGr5BexSqeDAqkPDZTMoMM9jkKpC1RTkn3N6a193S622WtCWLCfw2DVPrTp5prqKNjrUAJZjZkjWFxqa1",
  "key21": "53qUn25TGpTKxDXLqJNta7HUtYxZHL9adjVKxabg8rKumh2REBMGJ52TXmj5h1XnrCdg2GBdPSnG41kn69TXmXgE",
  "key22": "S7TZ39zVouXz3jocxxc8xiZFYQuhwm3Wbpjkkkoqz3jyBCUMgkwmhtkoZXYyKdHL2BJSmKRMQD9EJcr4dvakN8y",
  "key23": "2sWmyQUjercZrvTKtGjjNcKfSV81o3UiZBoqSYLD7Edk8pegS2JmXNcqAUepUndqZBrnuMvgsE2jz24MM14pXXCv",
  "key24": "3kjojZVZezv51eFmD3FWzNgqXgaZiYEWLDX2YtTebvRepk5hRcR4AZrP7z1V3wbi42qvAca4SfMms27YBaQxPshZ",
  "key25": "2fmcrhg5mnHcmHAHquHFfJLQNwyMBfNvjJ4qyCBmRbHFcRMJQrvDyfk3sb2zeWMK8jRWkH9q7NqC2XM2L1oCk1KU",
  "key26": "5JZ9k733hpv5SvarZYaxb9uTUASPytkJiSw3XqH25iEswQcryZFViqsMpoHfNNQW2tZ657AdgvMitzPQ3Ws5yN3x",
  "key27": "59bb29ma7emMrwx5H58utUA5cEUWSSMVTjWrEwKMHaT4FzBJxM7w36MRERftZDybN6JW9ZCgReY3enSSbnHA7Ysn",
  "key28": "3ucPLZoHA8f4nryWdzg4e27gVe2vHLG4zqGiqkiaoFY7hUnj5mCqWTZPVgazVWnXFrYELYk27izQVi2QRRvr2Edg",
  "key29": "W55LiqBopSs8rwaULg3fseCKhmk7VcszJ1yEtRUJpb27r9m8SJXYU5RefBpi3vNKVUTTgjEvjYBw5WMT7tVgTWJ",
  "key30": "48jdFfVS83Gz4ryX9vDzVa2Zxy7avNiJjtdy1DdMzgyUTGjhsVsBZvucoMyf1NSgm2MqZoqQmVeNFy3qiQWCjW9j",
  "key31": "teGgYeC3Vgwq7FUXcPgJK8KcsvDVFYoqHG8SZxriyXTV4QPPAvvzfmpM66R6DsrwnY4vgbmNSKyVyTSqUTqgkE7"
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
