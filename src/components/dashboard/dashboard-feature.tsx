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
    "64cvgMeBQDvmEdN5snBYgu9deUc5o3retQ7NQ2fvhTR4Yk3HcXdn1FKacfstvEYGuvgYWa1rpeGckih7YiQ7RR4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dLHS4cMWXTqeCUmJczoeWuG3juMr7jfZUxTR3VCmEjirTu2sNhAnrp8pD5dGhHgFfvXd8XRmmbEksunyqbMe4iw",
  "key1": "5Cp8VU4UWhENJLZhKnmSKWbuG4HbdSjwc58M1Hqpkn7HgH1KGPacaDDCcc9hdxfShsqms3CNFy79TpRBJ7SrkPMu",
  "key2": "3A1yFwhzWfHnkxb57p7HP4qC1AwWBE3AYmuLDjfSDzGKca8XH31G1xjNcqksRm1841Z3VAR9sVwURdbSMcwL3kXz",
  "key3": "ixPrcJvUt7HooKGD2CY41Kioa1U5eSLE7JkMwuiGqk9o43cUDNCFdqvEfS1WTCnkBFc5uQQUQW6tH67pNbodDMD",
  "key4": "4fvHWYwG1sLiA9MQ4a2QJQiiWVqJaNLennrdQ81geWn4msvwAEXb3zXv4NQzkivqWaLfSXcdHZCMdtR69eFm6gPd",
  "key5": "4bGxP4rHjPVAiyDbLrkNXcYtJEDPNgNauNs7SKaWQkE1KP8kYWx8AeLiNjPYK1xn13rP4rsVNQUUTiiiUVqqbXqi",
  "key6": "6nofY5zbQFVeiZTyiuAGSZXd9rCLJxE4dxwjc7ymWJcpoJCtiiSVyNu7684MkxwaVZrs9WBgSewupRFStg3yR1Q",
  "key7": "H1XYwFCaoNNGNspiQurp8wURjBd1BedftmRLPn7HtBDNop5kMzB3fXv8DE2ioT4vyebYMTkciie6dHe1jGNnaWx",
  "key8": "2tZxJN3oiDsPAPo54Em1AMW71qpDUQt7VtvDvSLZyhWHT1VHV3WCF6PFNDyUbwviePJHZEd5hvPS3BZeYfkriEB",
  "key9": "4xaJGjAKaTxMYaBB6euoaRQUJjMzaD5zjtRrq6QLHTEUZzj6QHjhgZE69H7gYEHoQLkndi8r4aniCsMsB4BmhMzR",
  "key10": "2PpzDkXkdbJgdyphESwemtMtEhj41X7z4BfxgF8dBmhHuGs4fFMdqtPptAX8VeLJzi6CGsgcRkXu3RgqU9Q5ZuZu",
  "key11": "2DasXeMZh2XQi2obtKCrgvhqu6ST1UnraD1jfHE9vEBJYjDV7fvMjZ5CJv68psEkA1g4FND1xYhQuXFV2ZZJsdh3",
  "key12": "5sePedQHe387NiJ7egufLrzaTtNy35GMz8dim5vrXTGHcV2nssLnRTmNv7fb6K7AkCxpQYcp6vCFdorjrg2aPWy7",
  "key13": "5AD6dacfLU8gd1aWMrAZG2Vq4wkryPhA9euXb37yBv1SZuKirbpW4qLjcEcwZTvciyh3pN6yXKh86ZnUE6fk8oSd",
  "key14": "3v1nromk9fehATrZJsbxG3rqKFj1KdXiSt1YXQi69ciAeRU4gZdrE1syUtQksgYpA1DcHBVT153syKgqJQDZ5szt",
  "key15": "591z3zNdmFG17n8LdcDBVuBUjEvB6xn5x2uGQgZXiknj8WcZtcnjNegTqd6Sew1WZyWMwveYpWMWaaMEPQ8WCdai",
  "key16": "3oYCBjWDXgKHd9niJHyXa7w1Z7eiiSsmSjiWYjg3fWXRhYNDc3mqw2qdWZuWYmA383sttAC35iXy9WvjMHGvJDcQ",
  "key17": "5UvjcMuc7VVj3HKEB9x5otKKeerKKG1gfa7r3HyV1djNUAP4J8UzgA2qfZTWrU9CHvrhhz8xi5tQkRWbce4yQZxD",
  "key18": "4QGN66qWgokY9fmyWgC9vZaC3yuQd2Xjwz5s7bRWdG98Xvk5qzSPiuYdyZZ6YBZtrVhThpU5qGFrC6izZjWL7mFo",
  "key19": "J6XorQ8zm4mNdbsQcQnr8rcWceKZV8LyAYnky3svFhtz9YWnFvS9mkwwwomMfpm6f7TXS47pUHyYuChfVSUpaMK",
  "key20": "34BiX6o4fwMwzaHCCNaKScF16mi4yJB5jZdiqFUZLFUmjwo1EyGNnFUtmkNA8ndMci7eiVbk4RoftMZ9FtnfQR6W",
  "key21": "2tgBtv9yXBzp43erTEXC9WhnTeaXpSN1aVYfXiTBAPW2axsjBNNrrk7Ehg35XQSCgWuSkGn3eFSXQvVGUgAP8cHN",
  "key22": "2oXqwfyXewJTnFf2d8ju5RaBtGd3jR8q8HBDoftYzrLNeKgkdWv6qyUZdNFtaLZopiS3Tg3AVTWVXQzX7LHhqkDW",
  "key23": "4AKKfKirHVxzuWE68UZcXcc47FparEkpsEU22w1hYsqWnqdaqveAr8YBh1FaQA2BBL51cWBFJr3KQwaNTcZX7qBX",
  "key24": "EeJH9a31mLbKQooqw8Nzxbn8NWzNVcnCT2qR75NwyB4igpgVpXNkptM3Jzm2Mb3xTzWUd9XbzuZtRTQTWSVBivv",
  "key25": "59qQ2fhKBUzJ3TF7xqG9BkuHmSvfYeZgJPGj8to34meXkEyyHW2FmL6eNQkWXCZRjh29AANr3EPeWnDT4MXCM3iM",
  "key26": "ePhsQp8UDAKjuxUko5zc5CjoV8HvyquhigeEkgk8wV7vRR67VABsq2aAW8ZTPXv6DUenJvoNVDUY7fCC7nAB42U",
  "key27": "4feFEGWZvcmrRjwFV5Pci8RbtrL5ddaXMSyCYAnNbAYvfEaaqm4EDLAEE4Q9YjFqoNCaQCNPTccsAM7HY8fARRK8",
  "key28": "5xfPnbf55ts6w4TSiBdJdLkFqNvjwUzhX62yF66mbNisLCKab85zZqNKaMUdx5oDtYJf3z9woz6M6P654q5nfwEX",
  "key29": "4fhdjmHd2LqxDCzrGkG2bei2oEkWeQx7gd3ZUcLdWMS74cd9oQEZPdE8jh66uZczh1evNzFtgpiiFnijwkWkvHu9",
  "key30": "EsPcjaLrfsxYQ5D2ygr348a7oeZ4GS86eg8ZHnoagtcPBMjer8UofuxCmmmaXSTukGPgfET7EMUigc618whqToQ",
  "key31": "4Aa7NqB7Nx4fq4qRxyRg7yB4GJok2XjeqsAXat37oYtGa4SbLBEjx4EQPBx7eDyHsbwfmRGV6h3QWgw4CxgEdgRH",
  "key32": "GspnpcY7tC4h1C8Bey9T2xotJTym2sdbfufCv2NxdHCdZiimc8nnYqfNJoEpWcomDGdE6yQnqdyMHGQN6e56uaS",
  "key33": "5s19wSFpdmw71gwUAzwXPAeiV1hDBHgQZfY91FF1iPKmu6jZSGKg5C7shRQMgkUToAsbiMJmtyYB7GTQcb8Jud9Y",
  "key34": "44vP9bXWnPHYkMUoQtyNSzqYYULsaeQas4yTgtHq6bJV5N1Qjep2KUQU7DnnSSYgpu2fCyz1vF6CsQrSy5nUzJwm",
  "key35": "CEeSRALxjR4baEwAYcJsu1dM9kQzGFJd6NReTujoZLkoJ4E99Txh2n9DUFNCJJNpXpbyLCeYfLiRCrdndfoYs5d",
  "key36": "392BuDq7U6rh2dxDPjt3ho5YtSYLcEAGu4LvCc7685nQX55gAfYaCg8JWhh2xfijP67mr5EkoNQZ998GEHZPw4zH",
  "key37": "2obNnvLkMF7BWvKo9h1HFuuKrAxpjgRCtMhbRo8e6uRXDyAEeRfb5MJHM93BZticohkKrkkrpRFpxBadkDwikTfW",
  "key38": "dckQDRiRFPHjdpeGeq661EykzaqaDD1XopyKyySjLRwv2yCJWqkudEfMqg1F6KSXQdTCYTfZh3jwXVMNBm63NCp",
  "key39": "2JAz3dzeakW5bGKXsQXrkDK6ASn32uF12cz7NABrE36HugQ35gahqQYvD8PrnR4KGi2im3RUBzKFqZya54TZz9nk",
  "key40": "3PRWsivftXbYjGqwW5B1XuGBw8FFWUHmmiF6ju3UU3YFutCoPnLTRudk9veBi8r6wy4dxym19ymJn1QJnJKfBo8F",
  "key41": "71Qm726oBmPh6mCLApW4DhdSaB2GxXsX8JtkU7jmBRHEKucXEe2bS7dhu3sVV1t2tku7AdmJaFmkKzYL4AuwjRR",
  "key42": "ZBUW2ondKhz9tJa4RzjY5muNQRCGYNQaCmmR5ejykRG8MrhLZXhqKbsehi3ic8tZrVnoD7kbN6WaZ9BrF95DNbZ",
  "key43": "56zV1DkLbSoGWVvHH3VzAh3HTiT52mZTz8C5i44U6DKpUT1kjWhMJu3FJYuaHSW3WcuLqgqrLM7f6Scvreb4UwpF"
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
