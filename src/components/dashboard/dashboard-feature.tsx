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
    "5B7QJRAbcN3DJBatATXRAWuZSWEdYTTQK9y6UnyRKiorfgDgA2ZfhYz698vqu1UB3B2kzXZi1kKwJCuF1ukSH2h5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "381P5bckWpkT6uZCDVNPCQT85XtjCbcBsmPWJp6Vmk4G2hXK4uxTxeTSayYfs2iDq7saiXTS3EvU34UqHsTA2mU7",
  "key1": "2ugpLrDMPiJ5tQFtjNUTxN2GeYwB8xEHhEngsD9Y15CPP1YZwx3rqtUCGnqbdJeh2jzD2LZYLfx1QNCXBSJWW7vr",
  "key2": "32kcXKarejnKoMsbqAWQCJhNHPKM76G85zsuGP1iSCWRYRTdhtjkxRpsjML1fSJFaJJ8xtHKzap344GznAv36vu",
  "key3": "qsEi76CdHSNf5kQT54Q1EfiB7UuuXxeopxWA4AYnvRE1y2RHRc9SS69VrewQF1Wz7NH2fgBaJUPevV5MNkARbPH",
  "key4": "5mM2TDDoxJJuP9qVQ4XpSfmxpQdnE7MvZThPQABzFTukWBwqh8WhEPMazz7pNTCgworvP54jVMXKgW92FYR8H668",
  "key5": "61KghmVRFmrgYG6DNTG5VEf8yBrG3di733xkazEB1aAsBdqcUT9noqK2koC3vSFBuwAgKFt3YLo8PaqHA6mLALBv",
  "key6": "4vnCAjKceETEZrS1qszZzLqPNLk7Nn17ytKTtJEZMER6ntakkKV9wBoNafc2yeXTbpMMDKq9XfNgac7sUhBN59qt",
  "key7": "uZ2Q8QHUxuRRZrPntRC9qGLYuAgH3hWkBSjPQeexKb4fSYJSJMbJeByB6tdkeoC67ymdtd7fZYQiNiQsf6G1y6N",
  "key8": "3ePF5rKuFxbWaL9wLE4T9iF4zRv5QerKTPcbidCavQRiSudSxbbZhHuomWhzBf1dkFhsGHfYeUmDXBkMZ7Eu5QAU",
  "key9": "DbtpYUMZgafAQ4kpGsnqdjfoHhdDcFTnTSgNshtpaS9xHgaPQp22E7qMrPRhh5yBMsqCqwbjUj88dAdHe7EGVm2",
  "key10": "3pgLS1UsG299sowGSRxSW6i5z7kCDd91HFPfyhAZR9tunY4y9w9yA3gcBsauudsmSRz5399DKxNt9DWp6eLUBWnS",
  "key11": "2gJGTTzge6dDHwK9n3Kpc6B2fvhWs6nRHSHXHvh2cTWyFoAcU3EmiwG1ewyN5eoz8sn5sehiJLjBye5vuMZZ5ka1",
  "key12": "3B9UJFYHnQBYDR2ZhqXax94ecgoRW5TDpy5LNCoMa3ihEuuJTaUCE1DyPRKi9wLeLacvAfgzj2eouuAXuQcXkUoU",
  "key13": "UiRQU6pC7v84XQCfC3b9aHDrU48YJAL5PZDoeFnMVJKWfbtuM9XQvM5td1vk929pJsUNfPkCfuQJV6nrRMot6rW",
  "key14": "ECMbapjxFryo4QaEs32u9nbGBuU6WZwk3G5ZnJ6ohHMgzCp3e1imTHMtzcSq6HUh7EfdPF5EKJZ2S8u7jcoRgvH",
  "key15": "5g6gBUibWiL1rLNaE1guGU8JqhiFhybemZFTtUgXvS4RLPKTmRFd8VEUKy4xnorMfb7FwPtuodakFCQjQuDSEPKh",
  "key16": "33n5Zkin4BSoDYFKgGsMns59efTBPc4KFugava4ioXcTtFvo4B7CaJEp3v2S5XiKtuHBnvc4FLRTJ3xFmHDiQpPL",
  "key17": "3EpTncm3V9waY5kqsJpXby8MLrHAH8FTeAcsYssj4KqSKJtz18RYkAuuUR2SMuKqumtj69adiAQJnWqm8n5576GT",
  "key18": "26Ks8qsphRNt6cmS8tcN12sTmoAT2je3bMMtZ6MS8mkAeww1bnMBzHA1jMxwNPMNS5Qu8f7pyyNZ2EfEBTwbUru1",
  "key19": "4vx3wEpwmAzTMYzwqWKDBeji8crHw2TnrXdzq1pbK9yzHpRKsUKbtnCuZ4kM9NHzb3Hb1HWWv8VJMXnPFCWEthuB",
  "key20": "3BkiBjp63xQs9im82m8pYfgsvCySHetNCji6bQcrj4AkWZSJZ1EUN5AtnreVq8E2iSLzg9FHzFSzLVu5z8GUzQh9",
  "key21": "3kSy3VqV24c3yk7Cfd5EggQ7hpHovvvGH5PEHbbe1YWWk9F26R96UX6RGRvau99HfSTcW1msdWACecpWvi5Yw6oA",
  "key22": "3Z5oBNdBHh425iejWbnveMw8DCpa6Kp63Nett18Pxk5YnVSim5WR7Gf5yyaNyASCKzUAVzfAfWdnZKdGgehUUiFB",
  "key23": "3XaSJnKvTB6XLxnbo59cfYu1YPFA6Vb5wSW7eQzuZjwVGcZxnZ3XkxP4h1FwKB4uQPQ93w6p6sWAgbdJRhv6t7gw",
  "key24": "GVe7FxXTHDXxZ2NmnPZsKxkRWevpWG214GwXFnKDPvctwabAjUehEkPwBKdmPVvGKqntZXhJ7Q7naYHmMwePwJq",
  "key25": "5DMHQVzprtAJ1gkybMLLNZrcMBsZXm71rr9z6wwb4jDZ3SXqCSMS5w2v62rwaQTTAtfApC6ANWod8Dt2i3dXgdB1",
  "key26": "HghsE4yhhtE2MqEGsk1hHpbhQZmexMU1agCoMFafK2KHYkUZAqyH57yLtTF9C49PgyUh3A5isq35uV4CRLKJqwj",
  "key27": "cBWqQ2uxPX4UX6NLL5svXsPQYPpmfXnLafs7tSXnYuHaN5GkWyiqvPvnm1GgMPgcVYjEqaDJg52yCNDvJ83nH3o",
  "key28": "4smNAS6TuFQmtvMNFnKoxF96C53JQ1xejjH8xTzmRz4QzyayhHtsrZ5BYobvpvPh95NXDfBqwFrTsW5oFYR4Auqy",
  "key29": "2GzghpdQAF1DZ2zPLyaNTukTijgpbjkgDLVjqzZRrEF1fsXcpWhUw6vza1hHhnu2xsQK6yLUPweg5aubhcr7xJZk",
  "key30": "5UBpzH5izqGft81xhiPK4hM5ni3PNRwvVCoXtfTUNs2geqJzchvJk3s1DzMoRA1kig9VKwMBLVTf3Pcz9h7AsoUU",
  "key31": "2q2LMjiprjsEvuoc52v47rHYshZvkLdJyjiHKZRbjuKGEohr4XJ5GF37LPDwMS8H8wvnfRxFXsweeHuwNuGfhp1f",
  "key32": "5BCXyvK8fRebvi5DocWey4UEdcbbSD4pJAGB82KxY4wA5AFeZ99QNbneooHXgXfML2dDQpTADmxksqR7ka9nJhCy",
  "key33": "4ftyWHdDdvgB6xvL3yMTmFH8G88EBC6qZaKohwBT1DCrSXmJcEhS7bhv7k53AsBBRAV5otLA5ohX2SZe5DBJ66KZ",
  "key34": "5kpytUSuQWNUtEH5QArGbrNrTrBPZ6a7YDVL6gLKEsxbiTPkZM8qUuBeK6QrZB2RYxHEfi4fS89VHdz7aeUnkggo",
  "key35": "55QBtZ7FzuTYDjdzhcyTY7trbuTJ9iCtxaVRP2b5tEfuAmxkGksoZQdDfLrjRbWxmkHM1cP7prVUCrDUdDYM5grq",
  "key36": "5KRSUeDj4d8qHgxoyigPaVZRYQAmTgF7P8U6qgP8BiMpyja2A9dnw6VhVqi1R8KQzHrDXmDVgAvB6Aj4hymDubnM",
  "key37": "24i6QVdBVaKsZtiLRq48Z69n7Zuk6E8i6PaBt8ZCpjLgViowHDvuK9vq2CV8DSCckNGBV5ajtQQtyB3waCEZBteZ",
  "key38": "5MGnesuraJ2p4yRWMgDiRLQqVnMpaEz8NvTeGWYhBaKkJrPXfV1mPinuT5JwRrDEmEZU39Uidrx2JFZJHKtSTsyz",
  "key39": "5DUK3LKKnyF7AQmpAo5xA39yDx3y8Jc5EG3ipVbsvL6V2ondy6TBDNxxRKjvTBJf5fr9UQLwvWRaG2QR5Qa45Jna",
  "key40": "WjxHAM5Krvs8gX6DrteSYKLUTZ7qW9zNEAMj3yEsEU2qvkJr6A4FbX54vx3fqbT5QToxd6Da9nPBEmGsCXzwHts",
  "key41": "4ydRQockE1HPbQbopQQs6ik4EBwK9zLkUoD1CuHrYmKNJ7oZJBDnMW2hXBukLLeJv61Rsvs6ufESPJ78zVfSEtb5",
  "key42": "4LJexZthFmYCWwWawyNcDGbCb9kLPxw6bjMWQEVjtsvT7qn58Uz9waaCzMZw13F5QuDzRCQcRY93oLH9HFjTz2Ad",
  "key43": "4ZdMYCHafXBKueKLEfNxUkcEHdAGQFQhwvL9QjdUQGshVq8qzHAiLpfP2ye2hXirXMywkkGDGvguEXjbFEKGMTh5",
  "key44": "5X4BfcB3tec1WXS7urzZydmQktZrhdFzFGTGiZePXWXw6jqRHWif6ZiWAXGZQrw3QfMy5QkYLL11q47QUPaktkp9",
  "key45": "24Wv9xgotLMX31wC8EiYFmfXErY2kQAzdrEkWL67mB7EuzidDN9FVps8YkXktjMcmzXDmtkVA9hCLUZV1P3XzLMg",
  "key46": "3r5C6Pqs8bGZvfiBAZuHzRdMngca3nZpRRkPgXdHa5463dFhBsBVZaQRyFw1vWdoq4reHvtKCLcf3qnfBx2HLoWT",
  "key47": "4ZUmfXWUZY6PQKMgoPwmqNa9q8ZpG1LTQ8HCMTt5AFFGCDbZxqSRq39Qk8yJgnvXPj9vd7BtmT63sofNSbbApTRc",
  "key48": "3hxrg4BDHwsChsKETfbiS1bmw7ZHdshj9cv7ET6DKq78g1yH2evkn4LXQ2JCewHvtPH8Jgw6g6YeaU9Ex89GceZP"
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
