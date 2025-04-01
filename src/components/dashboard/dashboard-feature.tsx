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
    "26pddMTYqorte4GohnWKfXb9e7kfghG4snfFkRCbHkL2R7JPvEsqwQpu5ptwrSwSMRJaDHyS3Ws8XwWEgbkw9GaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bW5skBCuZUa2927DkVpUBxeAsyJ1deFaKSRosDdv6j7fEx3ojwAVncmcfpUtSyc2nWqj8jb4N7STcrFc4MCoeKo",
  "key1": "3qUrRgeUydoBqxukdGqCphe9YmDQDhhWmBLEezPW6XU9vuckJwy1c7cNDoWqC5BQdkYcvEt1NwFeUWCzpgL7FRWf",
  "key2": "Hk3RWhvrAvQeDkp2enQVe9pQCFk4zhggwGWBhMUy5MkmRisaFiPtAw4MnhW5cosCBpgt5o2rejf4NRPP3BbcKzL",
  "key3": "36JAZXaZCJXpAYgggaf2TMawtZpreLRTzJJ8PKera5bUiWYQBRxkgNaKkjU5XXK7RcnDWHjpWEpJVp1u5dXtPPki",
  "key4": "57WvEAUNftXvnkYkygXtHKTRF3JPoxyovaFDGt91oDe1HkCQsgRuu3dkGsYE14jK7QKwUs9GxU8xAEaRxQVD31Au",
  "key5": "rfbDkhKqNioTr3Fsktjo6NmLbEJMZvt4sLywo7h2qP78U6dGMhsvgwyWKRSxiukSdXNwVFvHdKZwfm8anuXagjd",
  "key6": "2N85Ug7skB5hC3frHeGqEU4PkM4XJZjkVthyVj6Eqprx9L3bTgoXTARf6UA11PC5CwxbuWpvEd3yLaCGwSHtZnJr",
  "key7": "pEGUpPzFCySs3yWT9B76FtrVQ3TLtVAeamJNnJsHSN1u4JmkwrZKctQzGtAfAsCtMYPwe1nvovztmPGyGDeQDra",
  "key8": "5BReZHiu2X4kwvU52shitjcAnCRJEwBjA8TZwzatRdDa8qmnBgEYzMnGSCFbBFcArpic8Yt5cRceCVunPCx1SA7S",
  "key9": "32aJwuuVKzqfbKU9CgebwX3HfGAZh5R6aX1qZS6wdMmax7dc5Mn1feeeZe7eZ6eWVW2iSch1nfiuNNNg8vAkGpPw",
  "key10": "2Ex64gMRWmkhRyU91ua6LeQmDYsHFvxd3zV2UtKodcFBBFcrtcpKH9k7wf6wwfAc4yH5CDr2jLonKhTzpUDMfLV5",
  "key11": "4mpnZ51gM7r82HiMnLRpaqnQWuJwotW3gq2BjUwRp9sRuDekUayVVfgyz6Tj7YwuvZkFMP1Cx1dxWJGvyWHNLPVy",
  "key12": "2DNRx9AwEcRpSLDG7HdtQeUeNhC2dxz36AHrsd5nuxSwCv2DySMJZAiyWPLwNp1JQ4fgJuSvLrVNV9DnWtHLE6GY",
  "key13": "2JeTWFBwqjciPH1QdnrPyJnTBbk6SirVGG73DrXGwBfBGjBaiz9ZEX7XgFxhPvYcgXvHko4dbZk6SDoEymbuAn3g",
  "key14": "5Li2XZGhvq2g1oUDzqVyv9RA33cgrCc58So3qbJrVJgj94oJk7xYjJ69kxsJvJL3HAA2km6S6K1u75miVqaFnTa1",
  "key15": "4y6zzfvE1R67saRZzDiPUpsxqfhNikrXF5d5UyeQHhsMpgw8VP9GkceVGXvADKTvtcQTSRss2nM8oxxm1cJugHkq",
  "key16": "4UinQ17uVZir3LbwTDGFAz44Sawnw5EfgrxmvwVDM2mhK6d1pHhEufcG2pA39kvKhQxDZeAGbwQKQSS6rLgD3xEf",
  "key17": "bkJfpGpvPjGdsma5zkTN2gPBvqLZnw4apUMPfxpUVMzqB6GKdkpuR5b3kaHcqkGtBxWP2Ep7kGj5N5HkktX8mpj",
  "key18": "4rMuiBj9VEkiw6PeA36HNxdcTqN7LUK2NnDeX4txVLb4LzkRMaARvEmtUWEc7S2A5KNARDyqapyP8wo4kXoNaMbK",
  "key19": "4MUoLghTZYPrFDqkpwFGQEbhXaZSmwuVbLBihbXvKvyPZHD4rvNj5d99SDe3XaNkeziCRcp916Q68rbC3QHdHaVF",
  "key20": "3bPrAcGxtymjABmLdVV1NuojNwT7jcZUbZY2116ZQqddLo7bXaYwnnBXUBVDWotwhifm6XrKKEKQCDwcmwtdjoev",
  "key21": "5XD3rXvRUdoVxfwrG86m4kvQQ47gWq5WryxMcGsb4jZNpXMFtBa9JCbS8iXRGBb52hy91ceHahktVLiaLzmGbXEn",
  "key22": "2te2r54o6LQ1mYnxHpcEWFGPo2yabxpqewVCzUyaursf3XCR6dczh1jE65cuAKGfYGq7JgMmaFxF9DdPANrV9xow",
  "key23": "9Ndsm11AfT1qurRa2TiLQTqKHeXXiT4HhTfrtxbgwXx9AMDZHWpzwP1k4SEsQyvsYpdJZxfMGu2ZjJ3hHZKmnYX",
  "key24": "641BkYeULrRXzoL87ytNhvyWXVoyqrzVveMKRwicrokuqFTLPmXxLazfxmViDh3CTZ9W6iTQpZLMF9mpKWSQXbNF",
  "key25": "22t7gP28aqDcWxM1smbhstraVq92kGdgPvJAyi1aDn1g715meMgNAt3fEh4wTYoLd2aB9G3mApV9PCeCDXP8rbLp",
  "key26": "2zvzGd1SvupjByxYr9uB5cyaBPhY8vNFBWEyhN1MAwvo849gDyaypcdFQj5TXZ68ay7YEvbpoMbdfPPXAt1NCmRd",
  "key27": "5FppxLU8oH6HPWf5oyrYCjnmukScc6CiVx5NE3gxMvzoxDSi2WT3DhAqqY4GtVXs3eBpksQ91begmEYk3HmE3XWC",
  "key28": "2Xqbe7RT84MFLtDF8FU9UxofC4pZqa15ndg4nXdMMPFQpEMyjYo46umfyWdkDzg2xXcRFYncbHqAZveG6tN5Y5hi",
  "key29": "37PWaUCySzJumsh8Vct7nYCDJFtTML3ZU9AXYFojUdQrFZayLFC5xxqNFydcL8XXWr2TVR38n8uBLe5Bq6RttnmK",
  "key30": "5XQTNqqLY2TQmsiPosVexQ2zcQiJxVHTQKwuWD7dKmeMcqWVRJBm4u8VfSFSNbkiixGDWawgiy3BMqHrGnhGUwMa",
  "key31": "29zKUmu2DrbQk7ndLZZxXkcazbWGbvDjfjExGRmtTg3t45xVcPbr7C4wRQEQNiB7p61cXYUJKzaHh2tAJpX1zRya",
  "key32": "365x37muEcZKH19QyRYdQ4rkfCQCZtTnhYSPCcUHWYCFCXMTVQrCoYe9jG1YBAA2vhBiLw1wGsPPynbQeUKDV1ca",
  "key33": "5pF5qMbc3ayRqbKhp1q4jd5oqKqAC8SDVDGNSejE3piEo3ci1bZaUUFUaphsDnVsgMRcPk1Xepsm6GQRnM6RGv4g",
  "key34": "4Tcw7x3L4rzyqmqKQ53gSaK47hiYpFtkfasmziXwbRcwYdPTHP1eefAaqL7rRPdjQnxT5y1LxFoE8f5KfRV5Cqhv",
  "key35": "62W55D64HPW6UgEf5vHwLfykbfKUr6MiXTKcxFs4FhwJMNyydn6Zz7Henk6u2nU9XwAjKgK6S9yeEJNYWTc2YAm4",
  "key36": "58M5Vy6nZhPJU1rSnF4e5n29LqLDpRPJ9AQMHVJiMQ5wVUw2NTcKbbxuf9w2CTKbZxtTbVbBLovB9BeujuuNptZ2",
  "key37": "WBgtbcP6GUodRhf39FKnTn2EbZNV25oaXPXkLhDTVxK7FhKycLwLEH4XC2fmXUEZdJ9S8QbkB28CBArSw4LP4Fw",
  "key38": "6n7XoHbU7NboA5QVg2vn3WCenAoABoNR6S4f1WdyNZNCbg1VULxkmLXhfmttk79UuN8Ao1Vuxc3F6pspearqDLx",
  "key39": "3fmcvrjqJ1XQqtkfmDy5uucPyBAcg93Mya4Db1cuMw7W4r3E53Y39t9vPi3mG8abnbtGGQ6qrbYo83dEkdgAJW6e",
  "key40": "3eRCYRfjjzRMz51GWwhcfqCrcvJdtkBsgQz9JBVpJogUCSggDyHH1E1ht9qEhRz1QrfXXFGRhkiUg56hPJAHJvV3",
  "key41": "4ycbC5Hmx2ZvswgwzwNKFmsYEbQnuhVMGEVrgYjL7ZgKuSXRwWYSNDYee58Gd5Wu7NRUYUQtnZfFDguu5H1nA4Ar",
  "key42": "2B2imVJrY51ZGfoKy5hLojgTkaJ1vAQAGCHRyS81PMLfjhV1MzVnCEU4wU3nbp6nk1p1QznkSFBoVYkdLSL7AqY3",
  "key43": "2xQxT2EJRnCVYJrYQyfsnSMHhAodkqPDeDRdUwMNRiLibcFb8bAjaK4x6g6AHGCE9zu3aHSdkpiotG5E5hr8qVjj",
  "key44": "28ZBwLYxgnaHFGDEsxzabkCEoRg1TRxS3oWXMpNZ6kq1YgeywmPdjtFAH8srJ6Ar22BnTPZxYrn2JfaEvzrBr3oe",
  "key45": "2D6imETH4zHgVqdWLvWATKkB5CCJAmqsG3DtHdrWCB9BErtBrMFV6TaepFGHLPGp2fLv3u8RsrngM5UkUr57PqgS",
  "key46": "5YnitXNRcxVo7QNTupCGpDkPPRbmdv4AGv6CiSCC3PPRJUkMzuXY4vCkEALw5XKCrPfzKV13hvfmrr48ur2CDfju",
  "key47": "5K2SdD582xkKmQBpcSW391GfpXt15tEysmzbsPTh2TcqJnFXN8FFGmXMyMhVuyecdQGi7C3fPaVZDTZ3P4zaLTVQ"
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
