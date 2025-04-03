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
    "5YRWusdyx19BaVuGUb86mM8eU7wtuzmasz1XBfye2MYJ9KK52AjWfy5M7AmrdzRbmWf7y9Vvdypd31fgGT9cQtCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FUms2FV6eaY2VTR7Nq3drBNRHMp1pQnN4YvTKZHnd55YhdMf68aVggbfDL9XcYgNUFJadsfxF4ER6XGLN9e2SMn",
  "key1": "5zCgaReiL3uarAqA8yQiZXeFChtpchE22GQPyt5HxHoAhK9B8vPw3ARm5t6a6r7a7WU39BEkYeWCdvNCjxR1RLXm",
  "key2": "RCCgigyY9DhR2sTuMfVBA8izTufJ537unJzXCsMTtEgaTGwEExgmpz8mfnAnFJwau2SuErUXyS78tbvBik7X2Hz",
  "key3": "2RPguWkkrznYhHU5KiYbMuxD1Qxhw5PfrdbFfShn7RMrKhFtNqteVhi85PHMcS49uUArUFwzgk1hcJUyrkthaBpr",
  "key4": "32uUj22KTvtvcDGMFmVnvcELjGuWr2Tb8Z4gko7zScWATJ9jqth55oYdVvXxghUXiBE6gXZSWYmgMgRNeYK7KXsK",
  "key5": "3zE1piXGK6CKQxZt5kFmNwojiGDK8Hapi6eAkK4bgXR6wWHAQEWSCaLNGooPd1xctrBGKTsYxihqpLKhuwFu6zU1",
  "key6": "52oN7cEDUuf9KScdA9gAjuKCS5g3Ha4pZdM9L28iAzuXYYVPEeZxctLNCJHpUbYmZod3i1EaGYaR1DT3qJVYscm3",
  "key7": "2AW2wEmmqB2oUwZ1rKuPHka7Tpa6HjTcddkK5cV8GQEETrVjXhZzkZi8FehCJL6veUEqwagyXVXSebn8tJdaGEVG",
  "key8": "2n7nW4zdYNhAwsyUbiVrqFve43szTGPCqLaHsCaFx7yJ6vRF3bKbEMzNSNn6rTnh3gXRjgrqRqKAGgDmstpyDuY7",
  "key9": "5UzFfzXpw3vdHkwJFzhPD93p3yfpVbzVzL8wdwtSuazjAQxirx1oUAgw3WAyvFDQESbHnQJB6aJ8Hym1MTqyUJXV",
  "key10": "3n7dCx8a6rnuRUDKpFziE4oFgkT9v5NXhHQk9Ey7CuavrCTnskY391uvx5aERGAymWuQWzj4dk98uc7sRJXL7a9u",
  "key11": "559c3jWmKcSo4oyxQARBeu7sDJ5GWqbEgWVwk5BKtYjg23Cr2gBcaha6CxPPsDENxBzDh7p79ScZ833KCMEGdcBo",
  "key12": "5hhVQQc4ENPeb32m388pVtstP1PrVJ9e6XULhgdA7pYm6qzSZDhxTNR1WcDxGzfhvpSFF7y1L91kzgkNEXHTf3fw",
  "key13": "2hk5p27TFbA3muMNUNcHy2zX6mbm55gKcxGe4kAYyfUnk3aLd4BAHUU6yXSTPAgG6AjEPe1cSvRWouK5gp5k9Qhj",
  "key14": "3ic9RBZUmfxaqv1Xx36HhN4ATYc8Zm6bdR2Pk5baZoshTwoXxcQLuUojxSqLGJhqCD3BEJdKDFf93MaDoJboTpHh",
  "key15": "8WbCvofrFLYqr6zGpZfGbQusyBLXhFPu18s4xaANvEPz4akK3LstYnEByZioZcswf1xhvudQg7CJSj7wWoz7onk",
  "key16": "421uT23S32xUD8q2gfbQvCV9z1bq775t4qJeaQMZrskoUCyWkUZ9eL1JTNDHVJgXQQvTNmq6bevidM6PgZu8mb6k",
  "key17": "5NwNa1VhQv8yeYDZriQc1y6zP1jD2zr9DCGkmGszY1P6GrF14kfwk9dCkADVpUFQrteivi2J7fYr6aWkJeg3zJp9",
  "key18": "jnMsNp26qrfcoDiLnLuVt5WRwAYZ89PEEEjNdk9sA5YeKNJG6C1Feex4zk6Yxe3kppZvtpu4ippBc6XNFqXnPJX",
  "key19": "wKBXvHkVtcQGH75AEBpZna5KYSMSEqoXWuoyADzm7cVWugMn3sD6Xnma1PU9Zic6ggHuVy9U4HdCbkLMFaPpPk6",
  "key20": "4zZwLiZ125rSfrBGMUTvrnzgEjCqxxa6wE9CD4zQN34m5WeqRMyoBx6dgYBudUJDZGkD3xTcCHhm4RPf3kAREfbi",
  "key21": "jThry5tCgAv2mYxLZKedpkhKUK5RbmQHukfh9RuNJTJX1qTWCa22CFFn2c79JEZrnPVNjcPf9FxuAQWSnXi4b1t",
  "key22": "4CTxgxjb5f839vgqRxLnJ6urBnjqPdW3LfQSUuDCuY1cLA9PwSgFUuGHYoXRqztD2Wrc1xUZRUXzQ6EiUv7kwd5J",
  "key23": "4UDAX5EX5cX3CZDNmmiyeR43vEveQnTJT4Rzk3CiVnphNfyRWSJMSnx6ewLRvx86ZZ6ugf7SsXWYE4k9hR6HFTug",
  "key24": "5mGkKUoEjp91GYRgkYiwxtkPNtrKRLJ9pk15T2XDvKmtPyK5Zdwdi7WGMPu2x95Ghds6Fa78U6x5o8zzAm5i6v1r",
  "key25": "2UAXL6QcFbzMFrV7jqpG9zyHjKuecFg5iPwuFx2uQDFUcZm5xb3SxBfSnJkcxEic4jMngKyP3D8Zj3SXnzaRBZB1",
  "key26": "3gR3Wb6BinzaLGXZVKfqojoaWRZC8wFmV5eBsXEKuoT7exJ4Y7PktQZDJuFAUiBvz6bn1hUJJuQj77VXjYny54Wr",
  "key27": "CS9JgEWgSwrXkfby6C4JMEiErLagaWNmznLsv1tjDLRF9PWLrqDSDiU1bTBZfvom2DvvEgmt27MTbGKP6JLfwip",
  "key28": "5BWE8623VTCFstrcjbCU12fcr1pC6AJitTGioow67nxhb1gcu2emcAdFn9MfAgMXT3rqFWmnamR5QK61Ezs8KVXV",
  "key29": "4h7bqkU4C2fRaB3WQxWpqXii23gyeeRQVmHY4ueJCcYgbQ4BrHr4mCmEJ5Vds5Z4RHxYwR21FgfCzuByJB7vJX7g",
  "key30": "5nmivfGu24M1j1cGaSWt8cpr97881adX6nhZDasX8EqtVWZQyPvwv9ESpdot5odEYoQBYDoGz8yabpnTFQEyMu4n",
  "key31": "646RyHBgKB4kMeecF3XEhQfihzKY86CPagrXuLW4QVeePn5UkkUiStWHjLodqduTFW6vLKG339qf6HU7wYXEFHws",
  "key32": "2vzbRPnNmgjXc35FsNJdcp1FUNFkLsKpwWsnp3ZbFpNE47fKZRfwxX4Q6YkQeKhSzvVBrKBUMRAcAnDufYN78nDe",
  "key33": "2yvmNwfiAeMeyDKAchtrzfBNaRkXfujfYsKkWSRp9c4tETF6pDHbMKoHY9aresaaBtDaeQVHCVmTY4DWokJbfKhz",
  "key34": "29gax2AQiwTiPKSEvGfc2Uin1HqJkbiqvHQzNKiEBQrtwJUaZygoaHZLPyjN9MoTww6WvxR9E5URXjuF5nJmnyEr",
  "key35": "4wUMiTsQr4FsavTYpW4CPQw9C4duMWyoXY8GSHYXsMZMvUbMLnzeQKX3ERyPEd4pZXTzJgeZF9dmuJov2Gcst5Yy",
  "key36": "fuQ8CEdPQ5NytbB5cTjyvgaKvqFCBmk7nZ8USZgvD43tHKn7k4ZExtAUpQXEw7YpHJnDhhE1cxmgjwN77GSvUyx",
  "key37": "3Eq8YMbaxEDqrwmfsqkG1kodVMY8LogoNvEH5HRewc7b1M3VWGgptkYRePWv5WVvTC9qk5ohJ3asmki3NFdwv5Hf",
  "key38": "4jhLfvhNX9bFeToT6gZy8xMXpistGmdfFzLvkdZBYFeTVanJE8nYsgmbmEntQRCfRTvVzw9RAax5zxLZueQpJRqF",
  "key39": "2qzmuMuTUUQNk4NDvmwweL9xboaQDUJ4jL3hza8S8WEM2qQvPoWavhoL3XW255gyyYEbjeKhyHDTNBr1gVGDia5V",
  "key40": "HSYDiwWzkaFdfd9EPj2ZyxjYdAGjyPcMBoaxAwfcNnihHbwechuMJHQCvpzFV9JXmrFBGFJ9xk8wkPLkwgsRCQU",
  "key41": "4NH392wZSggtJA5S7ekUddGaBz6dMSwpCmXBLd1jPjuL9T9YPSKdMXMWeSUdUQa4RQoyFzHJZ2hAYrbLP7j81oJp",
  "key42": "4n8mnvRJPakou3gwqiTirkcfsWAzk3K1BWj5izwVY76xPu4Y5UKud62XUDzbSAkNScj62Y2QHp1GbSGSDcBWL4Fk",
  "key43": "781frtMy5szTpEaygztrS7D8B1vSso9TCL2vMWYYQXgW5L6XwFAbMkCC1ow7kiJaks2GiXz3jFhvMyFNJhiW1h9",
  "key44": "5aW7Z3BNsZbboyjZbpURHnhNQFfBUgwCbQ4RTWSipSBQvD69xcaayttYNcN8CW2yMw5P1yzPnRJGxwnKsdCdih1a",
  "key45": "64yKhm5kTwhn6K8L4ZkFSFDqTdyZBBQmgQ5NHpc8zeYFwDyQizWcLkK8zDcQAQ7nB5f4rYGGBq5dgeYga51t3X1c",
  "key46": "5vnAqo6Pv9Tq29rrVQsaCgUPFTuHbb55H3ZP1S7A54SxkUKJTuEsSnASbqwNhzBdmKWo69eWKiHu79H9nc9rpweU",
  "key47": "4Nmh8v19AsiwSKmv8xUXiNxNTpNhfueuBCPPgpFxG7D6WqiZt7RyhxvsZCLnkzWcaxuQQmxnuroDAWj43DxfP38g",
  "key48": "36pgLBHyeBFoWzqc1e9KBGiEiN972aTRUjY5prPNhBcbomWkcid6Fm8NX8Y69JUVpYtWMH1f3bw3rV8yAbKXhUQ2",
  "key49": "tH3qWbmR5A5cLTYLmxhULYJJtXn3hQKeEDzDShLSu1wxuwUk8bk8GLTiNhgvsnhvTDZzH3rp5Vd2s5JPmq1YMou"
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
