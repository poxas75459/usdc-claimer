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
    "2Lt5HBPREHfVNCTMYyHUBfYovhuNGSacjNLRJh7Z4yRs4MmLinh7M94hRZoTw6roAhsX5yBykjnWPmRtcPSAHLKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jyCVDdr33M32XWZPbbiT37Gdc5hP6YwMJ4CVErzpMZj3UX4YYQSC475nkBJkZ72bkXCGUqEiDRhi9u6h5JagaSQ",
  "key1": "3Ppc3eMxkcFsA1Nr7TK5smwrhgDcjigJPJj2VAgcnTmrUQi7sEEGJpCCg1jwTrCkAoFvZSdVdfDK28JzuMao8Sg1",
  "key2": "4CjZ9KqtNxyUMfdxdmYsnCT4D4Aat9KKRKebUDe9aYfYmUTE9pah18ani3bdshjAqrTGiwdd45xyPqK1BMtVJCc2",
  "key3": "LFJWZV6X2njwJS3dGJo8YLFoTwi33BwkjciE5aNQYhrzAkq933gD7vxneEDg2sbuu75tE8tStCwhTury4AqQDNr",
  "key4": "5t52GfXPW4pib218Di3C89WLwWWu4ShoHeWSqHMRtYwC7SU3cz2ndUbSeiGdtbgpxU8GHMipJZcxLUy7uEiTz3sN",
  "key5": "YTaUo2Xx41AiUSe9AQNXD4J6NC4jDVdqn3VFhAjD1UdaRdPNWH61rc2z2MEojEJmYm8mL7PTpJQxB3WbFHs3nD9",
  "key6": "6gQLDwgT8ueZtH4uwjsJcGzZQqocVN72yP1LahoG7ossYQxpw4kKHyZ2NVdu87SYePoojaR6E8ZZ7MzYchufRQ3",
  "key7": "2xk1Fd3eHLFmqf6NhzHQJnShJENzPadutu2Lw2X5nqCkTp8UCxyGpd2v1FNMXXHuykLTdp7UXyNP27PpeUkXZLMZ",
  "key8": "3SMFjGmsFJYg8bgaLbsPKPsw1FD9MrERGEL8Gyy4KAZKRBSYVgUZD4Pw62fKcjSogHrX9xWeZS6Y3ANx5ohtZMc",
  "key9": "2Jvi2ToZ3Y4ZXjKj4Tku2RYvY2irUGHTuS92Z4AFgQbDR7aGGxuCVe6urgM3EdutiSSyGSWQ5b6XyYKrsP1Ym5qn",
  "key10": "4wcepEmhA8Kg2Z3usXi6cg7gFaSQ5Vvgq315cAyMA9dtenFB77xo1cFSWPHdWBNeK3MPBaw4aMW6uxGjC5GWS6Vh",
  "key11": "5adctKmXbmxdKMT3fUuSEA4bZLed6bj1ERrbdNmxQxQ2e4daanu4bh3V6oTrgS4Kqph2cKTJiysnCdpmBHyD8jWE",
  "key12": "4uEPqrZaKye1L6QAzXrdNxNdBhHF13NPF8yhSyQ7dhANZcWz8Eszd5oHswGdY2NnkWht2uxbqERMNomD9JMP3JWa",
  "key13": "3m2rf4s2PDYA1EYBpoADKJmQiz6ZybLfRWKW7vZJGkrdWUrvrFwmWHcfHVdM472x8Za2S1dehJaxiRRS9gYXnH2n",
  "key14": "644fRMNAKfjHrdfppUG65iCAKZDnAKd6A998isttm4ibuw1qqYmzA3cM1wytUo9RLEv4CrNDFteNdYJpPY8bvycw",
  "key15": "4Jyfc7XMnZjE3FQd49JHJoy3SqEScqKBbqPwvMCY84c1DHr6EnvQHTTDju1jVgbk4pxGSCaKgPpu93EKSFR1dSmG",
  "key16": "4MFQ3EiVqiyZNPq6yK2jzandyqRUVGieWc3421NwQHF21eLTXLwYjJbvkdDtNs3Fs2fQkLuxDJkeJp4NzhD5SpL2",
  "key17": "YDWsxq7KqSNr1B9tYB9J1Nvyhj92bzw1J92doFNxaQpPNCVHg49wtoeYkKVEuuuXe4YCW2fuRTSytfdQokvccLk",
  "key18": "2YYuZzmgRRZYcV6zi7oxXHj3PU9AxUVNjev1xARArZBNHK1B7iBmJxvvNUoxUxM1QH1emPuDq9x5F53wgxx6y9ej",
  "key19": "5gErE7mbH1PPUEvkoAgfLu6TM82G4zdsTSwqnRrMGopqfNJR9W1Vh7YrXz2e1EJxqbFWVC4y6pzxRFXrD1icymdK",
  "key20": "34PaYPwhUW22g6TVU7yDu7LKXZeXtDvkd8UkNH7yBcqyySc5sGKdhYq6whtC7tRHVRQtDABJss83AnAekxdoaCXz",
  "key21": "4KTrB5Ntzn57ZP8N7PztMT7hBvvLEZAekRTtVLsBw1hUT7cAzN3wTHLHhnWfMYvewECkVMZAdL37J3G5hjk7mE9M",
  "key22": "eBNXhsAWUzoGRyCqkHBhSSRy3DU5hFa4GtGRfFaW6rJxcHt2EomrzqnLZLDJBLqbSXXPRoWqrVFwSideSnWjKo4",
  "key23": "32mQ9TbLQWsFcDVx3Pwv6ofthug1kei7xpD6aw2vakqEP8rX1KC3UZcaxbz14hQivWE5AT51tmosCYyQmyqvtckU",
  "key24": "4NP2t2dTqN2ipa3kM8BroGBKpKKDaYf3KqzkMpAzQa7Tun2GTbSdNPkiXLz96Dmc5VUcYKVNwhWxrJqtfhNMwY5G",
  "key25": "9Qv7hXGzLpi4R2jYDEMX9rNRaRnxNU4QaLJAHGXWNbZNqYk9TPyeYNTXnab97qjNsXT7S5rkRU3xLJwEiyttdmB",
  "key26": "5r89Rrpnkz7Ps4qm6G5gMWGnZ4cP8x9hGmY7Zme3MSNcJjZT5Aa4fL5kjjb8PJhNsqLaZ83FXU9qd8p7wD5iA3oU",
  "key27": "5zCvSRac6MFdhVkAidiN8FL1DJuURcZvFGKKuXZ8Ds9xiVoCPSXCC1VKibcduzTGhXwQMUrJjhuw3oP495DmGv1P",
  "key28": "2rZ7KtVfodiN9V7piZJtm7AFch4hcSDzZHUi1yToJpHRhtZ45Qp1TW6GDZ64eVhH8rqQQaKkm6SkMGygBC1baEkW",
  "key29": "2jTor1csc6kwtvGBYGyC7MqQtvnnvcpr9myHcCScdAfKJWXpjqt7prJpvhsRNipzGW33yWHuKVJFRqccyv4XC54Z",
  "key30": "54iUNxHQ3fV6Z21k2waZaoYVK3g1eTYZ44y7T2boNSew29QYYtt3dmyuAtk4vo72nbYjesz3KmZQfz4XtXQzQfuL",
  "key31": "4Z4t9E4za4f2ycwFTqzqbFnnSfCwgXQ4K7yiEbFTzFbjkx3eVSvDHLJssGVzWL2xq3qKmoxctr5zq9dV96W45tqY",
  "key32": "3tQvtwWeqDX7psfMQZ2HL1AbMNLuGjFKxJrPDGc7sLypKCsGrjXULH9CwdZGAdme3brQU3i5Dsx6LoPoAMJ2BFrB",
  "key33": "4guP44Z6CsRT4ijD7ft4BY6ddPrdVVD8YmxTRha5P5vSwVbjuSPmLH9WyxtfE6B3q97GmNVKsaLF69KUgeXJGySP",
  "key34": "4SWRa3FGFhrwdSHpShAzymyPfNUMJGCZoH74vreNUvSZuxsmDy4RbomXwTdeD1ckmM3ktaZf4Yq9Y5Uinvv9LVC5",
  "key35": "32eURai7dMn4NzxNTUMAUqUZSzcZaNHLyY9Vq4dND4Sf93sCbYFygZFSNH5481LQNbUJDmGckLSHsxWscwsfKXHc",
  "key36": "Yc4AGKytFEN4xK5pYhR6wuL5AzBhqwpD7nYbasCEcgchMwYojKNQqx7D5ziibUwPiPRU4YFRPNbnA4chWEjWfRL",
  "key37": "4AbmENzUBHVdCSSKwuqhHDyDmm1xr2HUhnEsc5nadquqnXASkW6s6MWM8Farm9qrQe1FwJsrkH9o9tun9uV8S2Kk",
  "key38": "2eFoiZam3Pqg6dbbD1aPfXyPZSqYuqDvqBqrdALcbiLjTTpjz7AgDcQTc1NBHqdCpinjy8Sux4RcJ9KzkReAGi5x"
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
