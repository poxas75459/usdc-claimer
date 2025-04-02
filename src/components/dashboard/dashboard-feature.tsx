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
    "4vq3uper2KLA9AGtQyXKDkSv8cFDwGrPExeckE76C5u918H222oPr2psnKmbu3tW9Do9tnXUxYPRtizewSjz3d2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EETMzzx1oTWQXVtyqLQu7dku4KxDwHHW92k1VHJEEEUvbDRKGdtY6M5WfjHng9uVHnjtvaRyXKqbNhjFTcd4Woa",
  "key1": "3hVx6eVctbAeqAjBhMHhfgqiSkA9qH959K1aVikuvMQ2HYYYo7diA5VbLuk1ehUZCYMaWnrfuHEu6QaUDXwPDFNm",
  "key2": "5McMnGk7BMwrtU4jQDyGNC7KbPFkXjwuPQosdpsJhJ9eRPneWbKVaQzp8jSThV2X47zSNV1f7ndRetiTtNvGxCxK",
  "key3": "5tFEuVCg337N1tL9XWsCo4gYUR8pb1QBkufZ5LmZHyU7g2yaE8sGQWqpqnC5aGHuhnp7L2gAiL9de2DTsx71pSEU",
  "key4": "2wmUenfsSWL6vdaf9UssC86BNvcH9KrqeLwS4ehMJHw3wrGJjKX2gz7qvQLTVq2xSm2NtjzHHx66maxzkc1goPRY",
  "key5": "46EJo1JzRRvufscpjvMRHTepnevyKj1PBygZ6W72F8477MyhdQfdM9DepAt7zzejzi7EWvSCG1heQMgR2TvJoHkX",
  "key6": "5qyVQoX43a4CmNMHdefczrVSNWMVma64QqtfWyLWPRnKmjevsPtvSsBmizoVuM929nEy7JF4s8sgu2ZrvQKe1K3p",
  "key7": "3fEfgTTYsEbuF5s9SvxvMcEA9CYQbMPDwBZkdrz9RWMYKZ9LbEohQmVdpmcuDo99VjdwJnrz8y7Y6kJe6XhDKnkQ",
  "key8": "47pao4kpy7y4CEVMjpCzMJsqFY3u6AbJmi14aMmrPD1EaUr58tpwpeFaXX9J3ZAoKqD5edNsernn7mamS49PnRhK",
  "key9": "UU8iA61sEg6MCXc1obKG6Es36LzNEScdeyxqQWj492d2PnG9RUxDhUtHnkYMMf3Qi1WRdY5rxSHetJFZzHwXmon",
  "key10": "23SNE7bN23XUpJg7vtki1xsYJRdgU7CAny1CnkMhAeYbrStJJsUKHn5jJawMyvntSrv6tLvH2bPLESchNsk32fEY",
  "key11": "W1dj2NJkThBy85Lpr133VkR78r9nanA5tmhSGv7crgSxQcjzYpQ8LDP1mphJPdsELXL5PHFX4QiLoLyZuyqPqdc",
  "key12": "4Ta3QwoCbwo9YCakhbWhknpqdLGaYdaDtcCiyvMWy7KzMgAZu5x4scS5QQezvNH948GpoFFs6viWcdGP96CPt85g",
  "key13": "sYqdnpUGe6KwqRvFutpitWTrcYhCqPhG4ikjekxmQKrPoCDXNuLUJGoNauA5qQTuXo3bTshSDpLZckr2dGh8DTn",
  "key14": "kfSqhFcMUZrLYCg6Y6ZPGGzY3RDvr39eaTnRSkjBKrxDce7YFVFFMjefv8J6ZBJ1V1yKWYcLrdzAg8kQXY8JP94",
  "key15": "2eQR9DYNgB7if9NuCZ5rTsCb29FGzrHDFXtyxynJL3PtK8f7Fd2kTHCXKfxcRt5zTSgCjnoDoG4HySxDKvJbEhRL",
  "key16": "2k69wZc8bYuAh4fFWzGLWMp4zZPXPwtqSVF2y9pxoBMZWcSY8n1KzAKz3PgHnpczcSDa8SBnQeroru75r85Banjw",
  "key17": "WuR5io3Q9oEKjs19oLEy8R32xAUoW9MphdYMeDHjguP3637V3fNZ39wn6ZzXDyWw1mRiUyNhd2bZ9JYsTitFE7k",
  "key18": "5RhrUwGdrpNt8r4XqNDKv3JVR9aMdU51PoXGvDigC26hwfMLvbMZkaMUz4CpJHXhXxDZYWuqE6Gmg79oTtK25Vu2",
  "key19": "5CQV33mkfMoG5dtGdCKoMYEnFcLzhJ2kJEwdggh1jHGmXP6rjXxEhrDzfpQAW7NiyxNNBBuYRt7vu4dxU16J16rp",
  "key20": "5iVsiXYEnLepvpugKczVdr5gtHb8ZpTNK3g8kyfnCgLU6mCwvnMPSNxpZPMuvZA9W237j32aSQS4CsJ6B2bShP4f",
  "key21": "5SBMjLq5UGjmmE8EQJGPCYiz8LucLs1K1vMgGSrHcjyVxeqW7SuZEoF2tdh4MsqDYNJUBaZU4nQ963hg5K1D5MM1",
  "key22": "TDQJyB7bVGWNSzd2X9KhS6BEpYYkZ65DXyEMNFtsmYqCtA8X6hEtAwTycPcBGgSaDP84UMLDR82qmCijhZePAd7",
  "key23": "RTnJK8N6P9ftA12e6Nj1eTDx4RAmqWDUH8gemHBhKU35Naf1z6T4im3Q7ns588R25T3i7GNLCRPex7ShNmj5k8U",
  "key24": "gGUXc7nHM6MmYsD3ZtFGenYVEynaLqCjG4jZnBxGpWUEFJWBaH11xngAPjVShG59zuJvFbDvXSCG65Pu4PCsDm6",
  "key25": "4GuTeWJGntXSLdFfUydtbzWhJYMJEmqWGMrPTYPrZibro4DpusXhZBDu91UQHSiQALgmk3PqfxPdhQRkcKyoq2za",
  "key26": "2jTpuiBit9P2Y2qC4zWUyuVXLWkoYRXVRUxV11Y86278U2pJZC6hiK9wxR4GeaGhH4yTECePReZsF21bE8TrTPhB",
  "key27": "3JrBor8a4f6MXd195u82mrPgDnty1aYxnK69niYAXfp5yU7mc47Sdzf1cmLUoH9JR1dtiiZZ1ZCkjNiF3yi3vXWj",
  "key28": "2hTDpj9Rmbn9NuXBXUPZFos1PFSXfxmCX8hzN7uZQTTT5d6LijpLxCBJfQxu9dnC4AYXJem1qUVqgiudZwV8JqKq",
  "key29": "Dygk3Ch8LCwrzaa7mn7uJ8b1AUEmcjgoUoJikWtcyknTKXefbufRutn6NwERW5ZfewEJDzHeJDWwVqHXsHFTAza",
  "key30": "3JmQEcUJAXyUnmKoBbdE2ArSgrZyuZjMvxna5Kyd3KSsvCJehgSMsd2zFiVwzQszYCM3keRbD3kiWqnZTT8PtDHz",
  "key31": "5YBfJhnxREPa2E7JfY1s9zjPJHziKPobzyQnumKbht9XCD8DiXLXaJrPxs9HSKBsQCqtuPBtFmuh2xKczLQH8uZ8",
  "key32": "59uk48A7gvr7fERG2JxrX4NF7QxhE7GHL8zbJjPAMysPTGrxvdpLbTvr7kEeXLFbsAXFeTyPJquta84DAnRTDprx",
  "key33": "5EnZQnrvjupz4aJtK84mYLp9upD1yqWhuFGMA2xaZi4QdvD1RSAAfs35vCxLbZTTeFsQrjg43yqRRtHdffLhga4n"
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
