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
    "3xAfzaWenveN4Rb1Did3ksVLhXcLuoqC3EBafBDVusgFYYe67BvhDhsaSRen7zNwfP2ppeVjpUihx9xNWW46JWuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LytsgxKmQUqn3u21VUFKHexaHMNCG2LARapkEp9cd8xHnnJcRnL7cj8mNvMgmu6motJJVhttSW7zsLm8KuknugT",
  "key1": "29rsLSJvfDTWo1eLY5K5qsYsFgsDEdjnaaG5fYLKQhd6uZrFCALw4P7mnumYTh4w4J4Xmmiq4AmWPJd6L4pxSdak",
  "key2": "5vYQT4d53UzmQzrWaWSChRHZsbwt3hHzZbMFPZ54owmJwn3fpn2PQNLaf2DeXGkHUZWfd8hi5s4vHBfNkyoYFGaE",
  "key3": "48J33HBiqAZJ6rY5w3HPgKCSMqwSdSyt9WLVUEVtwDAgShVP7M33j22eHwvjYtbFcSUAYC1LJN4Znj8jozBXY8mZ",
  "key4": "3tEu13EcfMf285m8YXBbk7n15mJqYLrWsveCXWfFCVyWT9Fy4oAfQpm28rRenRT79HCf5bHjUUd53eLNG5KVb4PS",
  "key5": "4hva3VCkwtNH9jHjeQuZtLidywkXzafEuC3ydVxzb4Ntsn9Dh1xpYBMA4B4jwVqsFALWBv1JSi4KSYva2Mx8M3Gz",
  "key6": "5gFxpP7RmHS6MpeJ2UwUyRSmkAUb762zjZaGoA2myiGinkFTmue1Np5cpWNQuKVc2xiHZWps2t3Lqz2vJ7ZXKsXQ",
  "key7": "2ia5GiVpbxwL1Q76L6t74piDyLnGXn6mmoS6EfezWBUtHuiiWduzT9dSXWzNx9otKsUGCCgA1AQ19SL9jNa9gmFp",
  "key8": "2BG6Z1US162ivjcrEvMTbsUVMvUTjJis7ZPBaxza2BKCkZFg9DtMfzBdtnuqKFLfD6oHY11U7ib9gCVyidEoFmGe",
  "key9": "2TPcuzM9S1gP8NEUNGeFn7grinAohEmepJmntEf5Vry3aFR7PSfB47TwMij2vjbpqRVGetsoauGtSQpzEH8bTY2v",
  "key10": "2Hkwbs3Kt9iTUdb1hyCqvySuzSKUQhGf5nP2nL3HUuqkM9o5umshXuCtbhPPTJMfAautuYa7Pt5xbFCi6Dmeqi9h",
  "key11": "4DweKSBhzMPHiWwu8vEbr7XuEiAuESC4vWKK7Me1NbXw9QQW6nhRb89zPxh5t7JVzZhzoMFMUWT4WbNAuVzdJdHb",
  "key12": "2ELinUQpnc7LxrB7PiiKZkno55Cy34A8zGni4yRQMdMBaWZz1TgFFoCLb4dtDNntK3d3MvxZRnn2pifEE1dnzoK5",
  "key13": "CSSLhEQPHo7A16yhAAxApTD78Wjubtz2BEMiKmJcjLzPZnG5m3gNqhoM7kAJ9MbZRzz4zS6PSS87ZBdAfhg1CRT",
  "key14": "mRpcAh5G8d4Gvky591VGivc1NvfryvgkceRZWDiNXPehfydeaN375s5UDV2zAFeeYdvqnCHJauPstk6QiL76ARY",
  "key15": "61GkFWoZyarzHLGrABaLjh6LCNaL1KLQ38mLshH7skusWaKssHdtunLCCha7s29CuEejCbvCFW3w5jFjtzAo1kRc",
  "key16": "EqxpaRzJMHENKLGtKjRC9abz3yjnBvarancxoUokmEMpFZQozNjcykkeEva6uKzXPwnZzei46zCr93WBFyAJFAX",
  "key17": "5aoVxxGgJjwmTnRLXAv9aPonSeHugULW73fn2chqX5CMbDLWYyWgsgmRij1pYinCD4FBPkdHbiSQaFBhLSyUVNP6",
  "key18": "bfvCKDw2Y1cixbFwdfRJvnmQiG7yYs177GFcPMiPxnTVovjVUAoVZnPHXqCwsvuzHvea4xRHVc6Fr5th6k1P1SC",
  "key19": "5UsE3iAQeR1CZKPzJSyGgXn5HF9TVnWAkh7i5kQAJAUnDRaWpwXFsLR6v67591EeYJwkuv6rLHEzUKY7reGZQNQ2",
  "key20": "tvAmRFnvojPWAGKnyvCHDXy2tdK98rGRSJpnhxsUDGKDLW4KfeaeC6nQP4zhfAEpQgNyhkA19BMBTkwJUaqBECS",
  "key21": "3upQGNcLj6jjxGKcFGssmr7F3vjaFpWCB78JjK1iMemkkWx4jRC88swDBdqnH9316ozG2HMSmJA7Vr65LqWufwAc",
  "key22": "3AYnsKahQbVvCWupTqysgAAen7ZA1BDQfS44VvXq1Fo8YfmYgSSkLXvqoXESx7gQHtMvqknzHsab3Gmo5EdwgDZH",
  "key23": "4YZrsawXYCjbgZH9pnWLXoWtu6V8BhUuWJYiYS9e4eXxt2yJN5Zy1ZGHmGW9MiLpB2HAZrNwoskeEbMUXdPLJrro",
  "key24": "41JUUTn5bBGd4fCrnDLNVy9WK3Tf6637BQ9YpNoA2kYVqd5QbRV38PdnaDBggHEQKGMnp1stxE2DTBc113wWQZVD",
  "key25": "5wQXocUMjZnWFaGZXHa58x7YcSTeGeaH6JR9NSfu2jnE3EsP34mrotP25aNHGn4SHkmS8haa5usyGBwYjQGbzAY3",
  "key26": "3DhXGDVpNiGqpFLx4C8RxfPrb3EveEpga1wqkczGrnjE7U29xcmj6uBqZZvdmV9xzbCvbCLfywFmYi8cKg7Crvs5",
  "key27": "4muDemRfWF6bht5WYA3wrFCobdBZ4x5fFYkRT2jCnz5SFjyunxX9RuXVyYWJgfwgXsEe4Uraeu7qxCZxH6vDQf6",
  "key28": "3xxihGs6JHUvrs4uQH8GKZFPoRvzhBTafPfKejc6TWL3yGEM27TutavhYua3scUUuMVRsjnvNZiqB3RNwiBMyPyr",
  "key29": "5EVm6KwbBgznaWMQaRFs97HCxWbZVyt4gPu1SzPBAghEacF39smVwSv3NCddqzsT5pCscs7vKdcPSpGk4BFmCVkr",
  "key30": "GSNyGcvhG5DLYJVCy3UX6Q4oh2X13Xo4GYRtRfDUbTd6C8bxCEJzSaFGez18Xe3EQstov11CYAVMyuuJ5Tbct1L",
  "key31": "4sw5oZrrqzBnor7VmoyvoiiupuUtSZQCZo7HoiXmuenBtWZMGn86pWVeMUrxRsb7pGX47kc5m8NtXyjyM33TfCpP",
  "key32": "5j6DFe1cmYYLQPQeGNK86v4Fc4PNyVGrdgRHsY7XdAEeG31znWmAkGasD1NLAxwqpgxsF8L7xdkiMo1Kr7rzDvyF",
  "key33": "4yC2fBhjj5PAHXrmB9GFo61D9Pu92gLNUiBAaRKWSqwEyvtrpt41TagQmfqEZ33LpV8FvJCKiLJLqwCPzpuxfn91",
  "key34": "5xDApJ66RTgD9hWKLaB3uX1XCRKt3qRJS3rnybpKvRkSmk4PVsFeyvkb1pmoT8ywrkspS9huDpR2Z87kkBnJ3tS2",
  "key35": "5L42MZm4QF5PzTRDRoCkP3j1BWg4VN15my9JBWTRW7zaaD2Q7PqVixBN1SEWuJHHCyjwmwzGeJQ3BvgLH5XWMSqW",
  "key36": "2tAK65AMz9KT3UMp95WZWC9FVPZ2A5CxYCDRGFYRn1CLM5VnEAcgHno9vgB3wx5fhzPM9VFNG9cLFvw5f8RbSsz8",
  "key37": "9m6XXvzYJKBnDkLv58UgxttbaBfUq6cdFnHcUJX5orsWy6mbC1uRRZeRvPpXsJcuXh4SHxcfm9zV4hMvYcucA3T",
  "key38": "2RiRENKLLhfafduPwDpoCC43R16FbsoaFy13aRoHUKT2kyNddnWyUzd9zYNTjZAAhMBkcCx3aasvF7GemJuJFRQJ",
  "key39": "3b3PybUQxN2dRSonsL5JndPzoCaHeeDvSiKN5oG6N24VtVf5d3QALUhSEz7cpueB2zzzqh1rFstqVdv7qYNj96qF",
  "key40": "4a7gh8VE8z5XFTxjjR9esZaT1icRUxh5LLXnbfM5giVdf4JEMa2S2rxnXfknZQFRd1nJhKi2MUDah1Fg5NjuXVps",
  "key41": "dhRsedhvjStpbbmEbpgPpuMUiLLJbw34AxnSvDBvAsgJkHoeLGkT8C8PCSLPJfCSYG1ALmaSUazC57jtT674TCw",
  "key42": "4bCMsnroqtKM9mU1LF8UFqSjuG66rB2Jh9p8Qgm7Mh3e9z73To1aSydEW2upjXXGYMUj6d2NZPm6G3ajsY5QA3Dv",
  "key43": "XvKK6mh6g8ysZkJCyWYD46YoWc7wjDqdLtKyLzaHs8TXLJwiDHbohtz4GftnF1By8pZWmk64RHqXKC6UGr1Zjnc",
  "key44": "4sH42dD69KTomNV1ccSPmbZcDDZiJuJeCeX8AJE2aP1EaFCDf2hCeymmfXRYRCFNYZf6N5fPFLz1uXb2apKvn4DU",
  "key45": "NUFpfs3KcHtgJ7W6PnsQPHUjwrg496dbtAPmNCGH9FYuGCwiDi8gLB71QZt7jAfgSPWBDWEW2gxrw2V4AsytJWm",
  "key46": "4QDad15AgySXzS6oP7h2C9y9SQSjxPwiEp7pj9SRGJ6rAHvbwKXpJVMaUbgzhc6us5CNbeMDxkNaVsw7JaqZ54TW",
  "key47": "5zhBfEVv2imcyZKP2zj8WaP1EPHCGrN9C9dFyJRDDfRjzKGqnYtVu5mY9hwxDKh7pEL9xihEuat1oUjUBUnxfxSa",
  "key48": "51Wqkp2omMcdU79pKyRZLrkDQT4wbvHH1QmbxzHL7u96x9jy7rVNeYGmzNC8GAA3dzuTf2qTH8dJznFTFFJG4XZF",
  "key49": "3ogwA93ED9sx6MgQUfLoofhNBYoBPXXhk4swf4jVpaR9oqgMntS8vwZhg7VrmJA8p5oGRcJuag76R1g6hpviNsTk"
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
