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
    "4ZdfhxjvFWCKojjaKGmMPKLsUdUpXsV85gAb7s7Zw1FhS4c6tWkYgnN8JyzscjHuE6mnt2j2BAzKCFWYLmgvjJfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Vwzahhi28RagCQt9Pm5NwrraXp9EBDsE6vFxuAPaPM9yQ4UnEPhc4KmSgVJQJznDKdfWhJNRVWYqAY4Vxb2jKj",
  "key1": "3nWy9VaphMoWsSHYrSxhwZPvpgSsdTp7FZmoS5DXmc8gp9Ra527ZUKdeSi2C8ojxb9gEThnWqEBojvvwmTv8iVXG",
  "key2": "3kGCy3zEz74ApyHn4jGnAkarWM8tHbT9u2bLRdA7FmTtuo82M4kZT5VywUFNzoFyujKeBHcxEEvdxYB63odoeSvL",
  "key3": "4sZSuLo91jpWbCVGNq2ztwCVXdu75d4C7kRi3wPY3NzcawVESjK578cHCGNtABasEqv8gDhsKVfJQkkxMVNR128G",
  "key4": "jq99TBHmVvLDZecSmA2bXrueUb6wW6dXut5UwDbyC8BmyozRqQiLgMQHoYenM5oaVTtjakWZXDtH489PNxCAiV4",
  "key5": "4r9qVouuMjPFp9oFsY89AJHoADWAn8PSD3e9XhzMpoQJ91CTZuC3xASAQYRcUfa3rkXqDKCMvmAabQ2ynPYjGBqw",
  "key6": "rvwtMc3Un8UQwDX2FT7nkPW7jwnV9qVmuJYvBd1bmWCChH7vGXxGrsoJaXdeVjKQq4sanfxTatKSyU5qJY76JVV",
  "key7": "Ys7BoaF1A3uX76roG72oNkx8v71nAE6WsxsdHB4LndzzUTjkqH9wb4sND68rjEkF5G6cWLRcBYNgqmBAGM5xeX6",
  "key8": "31mDRsUYBUwjR62ZaJJsNBy9LKWbPavr3hT8Gz9QqW9bZcwYSq2Zh1hsJwkgQwjWr7cqn98MSxjPaKrK3fd9fM74",
  "key9": "98bQNALGUcfCR14XPAMJXiAqGvjBvojowTSfFFDx1ck1uwf2qQeNHZPdjN25rC34b2jgniAe12bd23LvY4y1DEd",
  "key10": "4LVx4uqL5ummKKAmE9SjNCoi3V7Wk1EXCoyU5BJHjby3WSfmcTUjxosmPKDyCHAWYBD5JwYiq7Z71RzRbyTe81Bp",
  "key11": "3Z1SV1FX4ge1xTL3At31mtPFBHbHcoCLYyXt2d6VTn3U72nXS2Gh22FDEyYudXncvmiEfauCpN4C3SKqYKmuoVxQ",
  "key12": "2Vyu781T5GbFiS8mGpCbQaGNGUpK6uG6fNgJTcUh56PavN4imYHG8Jbdy6jP7ZF8BL1wm2LaW9cZLkx6KWtD7WR6",
  "key13": "2VLPfPQUYt9yYVEaqRV1aXLBS2tzBhNnrbsJB3vWkaaXX2zFZ2nBeoBjyyG38PRMMTpdWpa5ovBtY1v5NjgncmNt",
  "key14": "2FLyrMozaVBy7YDKKTDGu4gSsn9YXfVsRMY9Q5uc8W5b8NCTEDK4FTvU7TUBrWqiuSMqyXDiKCFr4njB5LiDbYvD",
  "key15": "2PD5UtutTrVfLoSeGLNECP66EfrR2yDJGcnUCBsw27T1pUvLa4z8yodzQQcSgFVt6oGVmMQEschRsyNQNPvyF1Fg",
  "key16": "5UnvbP2wGireB9QftkfDKg8RXoose6Cq5i81DhfDzmiZ178UWo9Qg7Cz1QbFYhWpdiptVrNUCPPehBp6dqixFsqv",
  "key17": "3G5vS6LvpV9DsHDjatFdW3xaHQTwNoujsEzuqdBTDMZRLmdicmhUm282ExZEuciyA1JgcyCiHwoWHZ71NYprHxi",
  "key18": "hcyAfi6HrsVsitKb4oZ2pNgvJJ1i466nagMDxSynMnZmzN7RX3phBRWgeRXeGxeDUjEFahsgJLVosbdGHTZ74QK",
  "key19": "55h1FtQNV3kT8GJDkzpoEwggLHeP9doXG7vhf3ieVdSJQ4EdvNcqYACSfHiSoMP8aBqyUYwYWrYTgXxd9WXzBxhh",
  "key20": "5RiyQZ8vdPPD6kjkFCMyKkSTE32tFmxyTExMhuitZGNBmr7pjsxrkb25zj7StPePQQN4XzLM2W7LRSVuS9kQjxo5",
  "key21": "33eSwNb7Nxfx1VtWjRizWCKSFKi2JW7miyirPVGXLkP9TEG9g7PrArK8NXd3w6wRea4cdzjoKAU4Y2x14pjkNjT9",
  "key22": "3gZsUPdt8Cu2nHjxRoLSKyPUYsnjwQ3JuYJNMoWuPQo6iVhZTCnwdYaa9KA34onLJUjRyPwZj9kHbhgqcsgS8oHX",
  "key23": "3imSpuuDPv7FWf8RNv39uyfBCVHYAkMFxDoZfqJxBzgWDFeyBqFyCQodzcanLWXSN2SwuPj77dqACrduCUSS7GLw",
  "key24": "2BWtGFceDEtBrCyy2fZAPRKdauy2JLNYUJtdmkA1Sxts49W9UMHJ4ZRtQAMmfAifiHjLyb7TshqwpGFX5kSfiU2q",
  "key25": "5NrWa6hTVjgConfSMokNVpMvsYvZ5Z9yGbmBW8MFxqxe3ChSZmgMAAHf3DxiHJRwXM7QyMByC6g11MXNjGVEwAdp",
  "key26": "5h8dxj8jFsrmcSahfaCPD4wZGjFqG663hXKd6opvyP6sYJYTCvgBycJvDK6kVfyvt8tyUZLb7QdUMpZQKAwkDR5y",
  "key27": "61YeoUCxwSoU47DRvBs16Z8gZgvUeCpcUpPn4MUCu9BM1tGb69pqT1i3vtZ8PHHRkx9JDrwo11dpCaSwQJEbCKi6",
  "key28": "3h9EecohzMN7HAQCJt9Z95bHQYLWnethyGsdXiMLVEEEDdmRdLtf3tuFPpS7DrdfhKh33S8Nq8YsqoxqB6kJnWR3",
  "key29": "rv6nY1Bj9QSP4L2Hus41PWYT3x79TEeF5tB2DFycwkwAmLAWjFdBRFBqKLWbBVBkvLPca9rL9G42cud4zwMQj5g",
  "key30": "54w62PNLuLGcBwCupBiXMCr6ixi5vx8QvzU5BuAU6vcvtynFca4FPCpj16TcRob7bRqJjWpMbt2BdLs3Qs5437du",
  "key31": "41gFxtptZNUU1CxwR22MokBuCKie7W2X1KqUUD6QvT9YUtAm2jzxx63zZCAYK6zAUQTYpB59NkjpGLRbvS44Frbr",
  "key32": "3rELvrETUUewvQier5YebxtcPQCpVbdQzst1PerfH4VydEtRmZ4nNDS3gZkx5WEVgEjT6LoFn4y6K7AEMAncHNAk",
  "key33": "4c9MH95AWZkK72Gv6GaqTMSnJ3SNfU1apNxoHifdANA6W5F3W5ebUD8NZCZAxhPV7z7Dcp4Vr7wA23dxp1EHgHTT",
  "key34": "2ind2ry8cjkNMcsekoNVt3iV8QQD6SdefabwwP56BGvJXpFzTVXUxwC65TCw7rAzSd8iSmcfP5dy939FdrmzKeCr",
  "key35": "53ha78bsiiiMFAJbacD8szouoWprSurRDqhGrXKKdQY9wVd9mWEGy76fwDf4qVqDNWjFxpbo99negVYjJkPrpYws",
  "key36": "5LiRg2qoKminxKG1dNGsxX3FLpGihR1krGjH5fqbmHZ5hUxme5F3GpDDUWzF8oEcrchLGqgF2ABi169Bi94G7kMU",
  "key37": "5QvNUW6xpLYM27aQCRgoJrcNftpsXA3EPtAimxo83DvEkD1qjkrxPgzaRyKzPWwGudPDHpYRnUVm8j8RLrRrRu49",
  "key38": "5pZa8etKRyDingefq6prMMEzrVKSYsh4KpuhAeLctAYUkbtkR9Gyw66nincFa2YYk3FGp2ZofhJNyPojvgeqCNur",
  "key39": "23zg3dn1vdx6EsUKHwqFSidnbtpAei6cjsGgNoJ43i43qkrdnKeUmTkw1Z5dVEM5fZqmpM3ubazVQQPfkRrwACWK",
  "key40": "5jV4YohVZ92GKUHVNWJ1YnrvJAgNLeMxPz2BNYaCSxUag2x6s9vTbM9BMVGKtbEPNHd47d3nadWKh5RyzZrJeskU",
  "key41": "32okxx2VZj5Tb8aarvx1Wc4H4bygtjuyf1WjstonC7HiKxyXkiCXKFnCURdAHLLGvGDdNQK2VtJuMiNSQZmZXXPa",
  "key42": "WHpt2EZNp1GmRpL69YnR6a9vWd4x7S6KUZm2qERTQzhyKDY6DhE3Zt8J9h5c2ZU1bPc8FdbBNKxkbsBS1sj8mCA",
  "key43": "KSEQct7n5qntu4GcyNzUkLRNnf4uxDD4tHrAyttiSEDmxK9SxVDVhSRXm3fSe6pu54dBFNjgNwZLrDG95duCMR8",
  "key44": "5YNUTM4PqMEv5xqzgGHQS9zy3GZCCZ3UhuWShorwSspWneGrXqeX2hsJGk7gKeYkj6XHwfqDfC6skGYFxFS1ReST",
  "key45": "4ruBcTWeYVisR5GRTj4obFH9UCEPhTUWgyM2NdLrGAPL4FtwKoZzJaYqTjxZFx91AukhQzBsExtydhwbjZBw2e7E",
  "key46": "55C4B8B1iY5A5Qo5RmFkybZ4akpTwYwx4TbEMgMTX5YfAoV9mNS3Gtt4b9b51jc1A45rwCvGSpTyQ3jv6JuoLm5i",
  "key47": "4XDiSydtwkZXXZhScPLgDPmfKz7gn76TSxm55fbB96Y3oXduZnt2FWqMCayRPwFctVXGEp5kLvh1sezcuYVb9F4G"
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
