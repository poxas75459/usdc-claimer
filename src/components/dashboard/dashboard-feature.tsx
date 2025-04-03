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
    "FkRkBaZtm13frTPvtVV6wgWwPGwEm9MsWhwxjsFCQ94RB5TiRXPVCTyUV7RVEk3dDRyoJG9e6eifPoYxB7H8HY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hDxR6P2Hk2twxFMsKeYpGZmJS3jJX8oM7dwaNrP7QywGWgV2LyrLZjZ1xz25MSqkBCNdQw4hVYcpywmXVXwmoVj",
  "key1": "54rekg9Q5AqMaFvTjZeGjo3bApraPaY4n3mw5cQ5RC4F591jnA9GWxfVMUhLgHnJh93voyBFiad9qE35ZtpgSwKX",
  "key2": "26X2NcVX1me47ahfoYQFk1GuRbaFX7pEfBRmaEhtDU7NVgz9n4QQ2DK3EyYxJkFEK9TFGtLtfSdj8eweaC6dSwhq",
  "key3": "LCrohKqyevmw6PenDTg9nvAqiUGPkn37zbigRkyrTnch8xk9L7brnc8UWu52G8BbDpJGMS48GKoTUkUBtEkDyfJ",
  "key4": "4Tk2yzYmakyb8CyumJFZqLuh1JSZFLPo3pAC1GFxyvCKazoCyLA8pi1WGMX2uNzuC6yDSuSgqekVVaqtaEYANkHr",
  "key5": "3h5RjBmcADJCvw5UZjYt8MaWBKfcNmKNUG8u7GT6WqamHHF8dUgeQjows6wWiBEyzeXgMbUso2d4gnTEvTWULzkH",
  "key6": "TUmiVDzVWSF6ykKZg87zyiLPdWPxNoWqq1GHfyqrzCNZrM3Saw3BWResEc9GyyikvJeJQZpJ7c8qbyX9osUywzU",
  "key7": "3qQrp7AP8MwpTxiwzuPkRenpTM7k5QNY4PNnKXtq7yJKwgKikYMKsod6AMrh4SyBWM5yBQDPMeRg2jEcYxdGPkB3",
  "key8": "3mpU7PRX2YjSYGU6bC6gur76oC1jF8Xb7YS6PQBKbgXSVJVx2kaBtR62whkGK4ULxRPL8iJgbzHnM2wBRGbQ623d",
  "key9": "rUNnQUVCuKxUexMHH1nQ6BqBR8tuKXtFYtFwYtKboTbSGUXrbFxqxkMLEbZGp15fvLksaUR9ynHXaVwFcFMGyJA",
  "key10": "5oqkimMFy3abYokp57TEVsP4RNDUko82dGfZoKfdtbQjKnLe86PFRZTKS9vrRQVEuzwhJE5Rj7PXxRpSzDcG2Y8C",
  "key11": "544MsbDSejApubXsUonp8xRzTv1Pt6ihQHm4GqU1KHzb2uUnVkBd5mRaWUVR36eWoZCxQSgpYDZUEjvBmxgauXo8",
  "key12": "4HeSF8e2ymxGMMQcckUmSPLceViSmPANej6TMVv3iMwCFUCUmREZKYa1BYGfmP5QHcSYNtXzoFvTY8BY2apffBxx",
  "key13": "62xZJr9jHt9dPUiC1T6wxWpC1kbbNju6htx8YEZcKyDk8QX9mZBxGybBNzn5JhKquASThN9xBYDV7LtJ3puJGwoC",
  "key14": "23f4sGsmkgq9eQhM1RWSqWU2Se1otCh97Ly3HseK9sqdNeDQoe7ZS4QY3HtYj9J4TLEucftMsv39X7rydcNoB3f3",
  "key15": "5xi6XHWfZevMB3fQugFKTUR2wkkYFfWZHSreZMGu6Wxfoo53QKJ9iYrXXX5MNwdyJ7xwiHzC2RhALatvQji62ANx",
  "key16": "3gvrFRsezQpED1xVPtVc5bDALDGmoE3yUfi1LKuBQSeimRAPZ4aPNrMKwUxCkTNYnB4e2kuPqyjaWFbgz1oC9t7X",
  "key17": "5ZVvZRoBPjYXdGTBFaaj5bsTaVCgXjvXw2HDCy6kTM5ReHRC5AWGZLF3wkvqF96tQRwrnin4sjAPiNaeWdiR8Wr8",
  "key18": "4pcfX8RWMFzszsFUAXHzhyu3J9Fsn6YdKiy27WdP2Lxx9j2ye8UChfnqZenPT26MAzHDQ76WfyA7iN5CyN131Y5E",
  "key19": "fPtqUQsdnEhpfgLA7poT6QacSZFLktcc5wNK9b9hgqzFhCZuGthgkHZyTZTt4xAJmSQJyTCGmR5toknavNp5bMX",
  "key20": "2r55cjcJVsRGkCFgFyXEM6GR2tzG3d1KNaES9H2EsZP48jsAirHg2hQyv76JtYfYTthdnE1x6HWoYVebVu5mdFCP",
  "key21": "2U8exnxpC4sw4mt1JxTb2hYLuuDeEzMZgsPmHYAUpvyxQsEEr3bRZspMtCizroqnhruFoSvHWt3QeXEBCwNnPrMx",
  "key22": "26TsHXXoaQf5xdAG2vqLGdkgSMzGpasjWGmhnjxTyYpV2rrmoiq6xGAHN2xi2tZmHbvr2Pm6NJuz4bFLDhj2S81o",
  "key23": "3Xrvas7YGMbQXAwtefugvtqerEGkPXuoyi9tw69Y7eWM1GMuuirmB6K5192DGL8kQJKckxyCLtH1BkNPC6KQwb2f",
  "key24": "5nPb112Xbhq3xQvZKa5xnKHmNcqQc2mUsDaz1AA5rp1BsiWAhTFfZSw9odLhdb45Qfppj5oQdEcNgPVrReszHZ7f",
  "key25": "8HD4Kty97PKTgGswRR52oXuQHYDBjXSsvcjEiTenkfKtGgL9RgHtvHWZJjdT9vvSnR4nLQDkP92yBiWpYduMiac",
  "key26": "4oqNEB1XhpqbQL3aSdzZZRkK3rPA8J1poN5WsXLeoTL9qzvJvoDCj5dugfEoszce1ikCTsNyfr7D8aWKJZi4sr34",
  "key27": "4w4zmuPkZYZpQkNb8tewDyMEp3VVyCkZYAkLtXUqYzenQU6rAeT9R6q28NyUsvsgSQA2zWuKurRvtGE8okfjnN8",
  "key28": "3TUjzH8Mjhuo2ChAUwtbV5Ldj6dpPzKiJuJSgiaSbYAMszLsJ6jScEKXGxFJH7zCd1PBGjmC3HdtNYXpvt35LHFe"
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
