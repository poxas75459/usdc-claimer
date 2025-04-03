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
    "2euByq1e95Y4FTS6RF3qH1AnLDC9q7ygS8gwm75x7ghVWXNGB8QEQFKpBkJkBFmR4YX38owxRSUXFAUeZnBNaaah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N9xjmesxBznUDWoNyPVfbfa41VjEhKNnKATkKgyMzozVgvVgxtMF2cSANPibgZp2w6pQe3zYxECueS6zoXjGTHw",
  "key1": "ZTSBEm5kBNzLQdUZZMjegq2erkbYyaq5CL8UHYdjxrxMzpJG59akF3JH1i2ZBdacyjqakoaY4d1Nf3KbLWL2ZPD",
  "key2": "4p64KJbyZTePYKR6QRvDQbJWBNbxXpSZUtbCT1Q5wB6YGmtvimYPdw1UxKRN6dW4kAVYvCGUyKVQ4bAczZnyYHU2",
  "key3": "4jY5WTo4p3Lct63etKdxX7s65Gc7wfQXDxGGNKXJN9z7paY8iGwiAgb9pkkqbWSEKujYEC8c49fegD5kP2BLVktw",
  "key4": "5QvD3j6jB3BnVMhZTBPnBXLzPcJUz3sB2kkbZAu4EWAkcim8rGX3vARwV1fMzkxgxSu5t8v8LQiu6Jo7p1pJ1QLn",
  "key5": "53zMEUhBQfnWEy5ejgELY7HotfTbycBVMVWPNCEyFwynxoUEapbWWWrHaUc7SG4mTrPhoRA5ZUXFq1qrz4kHa8qs",
  "key6": "5X2YkA4hCmTL2kJUh6kLxnKg8WhxU66whNnTKvaG7eiqGtiTrTJLzNkur6mUUF152PB8PoZp21iqGUttsBnrUTQe",
  "key7": "31LE8RdjXFDstTrrbXXttij9Fe8vS7jBeM7DnXCPQaF8SpPKs9BBuH2PrniMgzHHa75s82oUuMLzG2ZvVqVq25LW",
  "key8": "5JRWa6fatezX1YUq5byih2cpTTiyww9KmCVGsmwScmEH8XFT6zFGf8YoVMGUKij5RqtjTcdudifwWCB7dAt2rvwL",
  "key9": "sbGPLSUBHTy3ArsvgVukDv87Kfo1RXwpmdCrSgNCAmHDDqjYmkLrNUF7jvhrcqPSYkqC6EaKrXmpziSeCgX9mVB",
  "key10": "5DXD6DgbfANFZzJXMwDoAfL6gvsaLCvFodBa6YZbKSqLzFtfohheqz4qytuQ2Mg3R1hac79sKtqy4W3AEMPccns6",
  "key11": "4a6bxzHnD4LheBHKGea31B6WvkBoZXthsAoMAoyjwrKQQXUKbaQrTrwstrmFSU6E6FTHjh5vUjYJvqc7D1Lb1vd8",
  "key12": "5BCc77nHA3XfWLq1GHmP1mnXpMV8nfhFMHEn2pnjf77cLDQP4nwKXrCUxdYFVJ2PFTuKdpvP3VcieHNE3H3D271V",
  "key13": "4WrK3Drkm2UdhGPXe179MiPcWCqfxHUxmNN6higkPYZVw6LhjKxSDaPJpLMxuKFFfPh33qT8sK8KqtieaH2UYNe",
  "key14": "3jebzHP1dVVmGJurRD5Zsje8CKrds7MobP31NwenkVaKCkycEG3rut3NqmnawxBxYejNiLjCxup9XFffRpYdokzj",
  "key15": "5vPRMczXoECqKkYw5ZMYLjtHFx19Vjpf7haUK8deU6aApxXahK7j6LrEDShEABocj6WTiKRQ5qAbHyGQ1KPkWuYL",
  "key16": "652JbLyNefW17AsE9WGuMmuZ7XBQFovZD6pJoiGbqTiiLfszRfqi4Qb8RZtJkv1qc5nVH3TFVGpg4B7Yx8pw6a9L",
  "key17": "4wXxmqbwcaYmunJNNVVw7CsPFYgGYfbdYigbCHjfFAEU9idTFWU2BiR3EZPhc9gYkSGo1UrajpnaWtr5X7mvmM1z",
  "key18": "2L2vcZHVDQCi8Dp92eigQkiazAkJJ2UvpB56s7BD2Vfh3U5qDcZGV8B6C1DygMzJFyC4Pm5HJ5xTbABQULrUjBmS",
  "key19": "2epeuJz8N69T7f8VnTSfME5jHn4DQmTJB1ddj3zubvDddNERS6fWhUxRy724bv2LnrXirJTexzk3JdfZZ2eueeX2",
  "key20": "3muM3AKWyfTcrNR8L7WsBBKsn5CCKoVzhkXccf4abFZvv5uc1DArS7FaZSHZLrUJDgh4Zgz2rG82tani7gUfhqUk",
  "key21": "42a5BNJphnZeGsdFdtPfvbLzHAfL5p1qLWC77Vj2fXwxB41gGeNuVQfif93hRHN9F6GUteCwjRTdcsFXas2NupYP",
  "key22": "f59Aczj5oAPgtT43H8FWKokiic95A2SkhDKhQYbiXnZz17juNEECAEhfTAi2u41hUuA8bzLFW7UhPBWbYQ3Whki",
  "key23": "34v6gSkgDr1eSKiG3Uqqnjx3yMfdiTJviU3UWgXw4nU3po3GBnWhNxQHsMcRpNZpfaoTZr6uhbydBMjSEbS2j9on",
  "key24": "4yg5LAGDQtNZggttrmCaWvmmSoki5J3ETJsDw3zj6JnsafDDpRsTxNPfDHQPQznR3enRApwydPkn6tpaD1UZjfEE",
  "key25": "Y3LrEv4czYb7G2krVNgZkn9qbw2qVW2tXDcyCHnyiaiosD2nKsmGzW9SJcu4c2ZZacBHzF2pvDLC8BFsNoBvaQe",
  "key26": "4deH8WaAHFqGrzuvmtHu277phoWucExBgLV6dpXKyLsnytSWCTY7bx9fjJ1DFegyq66gcmWMLe8qnkrCYqrCdzA7",
  "key27": "5aMf5qhkiSchFEjmMJJuUt8RnAj7M5aM3uV6Ys7j47HVv723azsg7oJARsRE9JbGW4W5phLW89T6gjnXQvEKYYr7",
  "key28": "5iHaQiApXrJXUSatm2dj5kivHiBxGttHfvWefzakFKvWDQxds2uxhrXdcwpzvwK3yTcm2QL2KtV3MSiKxtcoPfkQ",
  "key29": "dbJUS6DLq1UPNeHn2agFZDj2s4j159wLohg3GxLmFRWRbPp1DyvjewXwfWzgMagTAaXDrbmssCJPAGqKqg1dBgG",
  "key30": "4weEREGNcVYrQQd1fQLtMaVsb1jU5bM26YJd2aW8LNSCen5RWStvJZMeH8BYFHF2pLgsbdb9GUbcgz7n5LnsnEsc",
  "key31": "HVENi84dSnWb1nUSM7FHMKXPkZKjfykSMMzg4s1Q96NEJgCCNJ1h8jsbaeuv7BUbAkRnJ2dV5nsP9i6jfXtPX9r",
  "key32": "3H3HnbZod1qsM8yfhJ4aUASLa5gEtKrSuF1KuSJbjjS4dAtzsU2CoFL2pB66xSHpaMRob6ryonoq99RJccq1me45",
  "key33": "2akAfjXsBeU67zWT6kGxZ472qrXJVjmEusuRvA45A6nqa5kQNPV2wovSbi7Lz6GfwYrfgJAabB6MNKTwvRaY81pz",
  "key34": "4kMpXvpY2i9H2WWoHvm8pxX1mr9FUQRYKL1jvj4H4jfd1AZHGbQR2JLLQZV1SUj4aLa6afz9cPGzBNRerQ5XF3Gu",
  "key35": "4LmkqF75sQPapHrec4gAShxXxjwuoTyoex15CpBfmu8y71THeuyfGyNh8jzxjK18BiNdpF5kQu3cgMAP4Dtfurcr",
  "key36": "rjRch2vmqmzgmfc4q62yFb9XezYFeypBevHbQ3yC6emHEgw2wuKspAL54GAJYfAf4q6kiFTGVhBM17SyL7R5ViW",
  "key37": "3jAzSEestc9DEq4yeDcLMH8GUCPFohjD7ARoN5zhAwSmbNf9Xia3jTxFQxbrWt4WFXc9KN9Dr1vnrjhq2AehHVwe",
  "key38": "4Yd2ZpmvN7H8rrqQP1kCcxjaYXzTvUpeow2WigaBx3nWWRccwyKmQMC2P7KM19DyGuWixU95MTJjfwyNuK3LVnYu",
  "key39": "5Uoy4DRGPmHn7q1VCGse5WPy6CDp2vJjp7azCqYPefn96oW98zdB3X52xicaSQnmyUnfy82Ykgi64Wfh4XxeVhpi",
  "key40": "4n26HCj7tLVYoP69g1k1hVgnnJUtDtPoAye3sh7MJP2SqisZZNkP3yav1jDDHwfL723A9hmjUmRYMqSkBPLEww9M",
  "key41": "4BPX4D6My5d2fwSrRX9SFjK5yNFcFdwFW2UgpgBo5LQ7w69YKwAREnZzeP5EiJ24PCdS6Ly9LSKbHePHoigyAaBq",
  "key42": "3QbUGvWwQu2PGNucGvwELvVCWZBBNpSknUPgNUPYooJ8ccztkbNbQmDKUKgfkYizf53AK4j6pYguhdPSEQxXjcSd"
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
