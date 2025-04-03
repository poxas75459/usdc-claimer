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
    "5PAt3xa7CxtddRZmAwhHEuDToczEKGo7jMWhY86FDy8bdsquvw8kq5U46VwAizmGSrqXeX5d8r11kcTdHSFQU5Uk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GM73zR9a4x9x28rYvZJ9e1rnAcM5zCS8JTATrm92V5ZLDCzHuFRCnu3xm9UqeyeM1uYUVTAzyQo9bsLjEDxdWio",
  "key1": "37yA8uu1Mt4X4xvGfbKMDa7t5G5NuT3737TVhMWgDC6UvcACBhScZC9thPAaKHcFMMG3ovaKDs3makWXDwh9tDKb",
  "key2": "5RXaojNujTEDnp8CqEnKcTbyv6ucYFsoXqjRk9uDXgca1ddxoJoD1WBxPRh9fYjrfJWBPF86oiyuAf15fTBd5QLm",
  "key3": "4kHtD4rh1oBioiYyENvDYfypAMN6uX3Pmiw7xdVyuNTU1NDrXpjNQ26EVT1dvCHuBYLqQnUM3ukCYM19YBZTe9Ps",
  "key4": "o3HFBJYEs4yN3sVgzFWTKasACAyC3u5KaFC8gjQCMViXYAKNsLKkHKCXo97gUZVBrnoQSTWLBkTUxq2JZyKq752",
  "key5": "34VPEo2xSS93CrgDHDc1ELLiP8heCoQgSoRvU5SCbGto21PZTXFuFfvyQhKEG187cZBNKS7VXJn472wmsWiZMWep",
  "key6": "5P1f6qepqeQ8Xaao38wdcJ1Amf2ud8wMKziG64GahPz6CR96PjEJqbSWUtLgxdQvNtsZ9BvF6NoAvqCntYCBWxUN",
  "key7": "oGfaBr3sorwgj9GqFMZ58yPQcraLEJ1fxeupbRD5NqcvMJZjhuHjRWBV1cDZicsmwVC8JWXckTAMpvFySyWZxTF",
  "key8": "MFrqZANoj6967xqBURTJCnSxUbko1fM7vDKQtpD3EfYiqPMzpv6Lf1RLHGUph5cbZngdUE7amFn26iKLR68A5ML",
  "key9": "S9Zrnf7yeidXKnC9q6RevWYPtX4jttUP9mmZAq3LdhWTae9bHUWA9RtjPBWfisMzge9h8UePghffB95d471HF6s",
  "key10": "3xWG4orYXajtBhLGJddyRkZksrf83jxkg9fqDxwjXj82jLMB2yGwY3AeXiDejtb4XoVkafHC9gjbzxVkF4k78EGN",
  "key11": "4ZtvPGXiWTKB7GW4G34qsiUMsDUuUqCrRSuuipsZ68V8xP68JVGRmWaM4BGVQTfknbaKhwgzKYqyEaBfapCrpj2U",
  "key12": "396KibrAwQYGEWeTAJZvE6N7mHeDTXzCEBXSw8ky4dCVL9W4pRTSGVoCEDVfQ3TDEEocg636RzhNkDguh7mpq7sz",
  "key13": "2qu22y3xCVZUawJBFux2qMyctVSRx4MrsS5Av1bzxFgiDj5diEFUUD35MkReAteKmcFZhTJn8wjxyuDHCTWH68ov",
  "key14": "4A4FFXZovpqYDAuc7DnjqWMzUSpGc1f19a9A8w17BjxZGpKnQDwcdB6DLdmgCevrUq6ocVRpA9YBfAmFHMvDHZk5",
  "key15": "z9HYx7ykVL7tmd9wm4dWF8vZtLaH351Q172jnjA5NQe7VQUHwQC1wZFhrZUzfavPLX25D244iHrAEAzdPuFaAAU",
  "key16": "5W4tMf9AfLW9PbsQcHxSEA9Jn9VUZe3za7GZEHxRqjsbcv2v3Qpr9p2ZvyoC4WZr5Y6MTAsZhR6YafKanEQRw7HQ",
  "key17": "ETJQNdb3KBTEozNKUCSKv8vQG8LCL6CBSoCPrRKVxsnqA1MKeKNshaG7Dzwtn9T14vmeP2SeUNzYSdPzJMzGVQp",
  "key18": "4UsSHog94UdbQmepCTd251YJiptus1grHKeZLCpxp5ZTNGJF2A5xaGLLYydDUjXc78sAkNSoYrjiTzXfofoCbQ9F",
  "key19": "3utUhrgzXDgTmNbTyRKxAdRjKCgggrMuRXQqhdtZuGPLTxkz8cKnRwzTVyjrTfMpg1BwQktxovxgWdcFsKVuqcMa",
  "key20": "2hZwWg3dJrfWgW42VDVFZFhgjQpx3wP2ZPeU64vDJZvWnVaW4PrLk1KpDPEZtU2vM3ff9N8HgjDTf3kC9cmMY3u",
  "key21": "fVfnf4EZuq3B2typLB69igFF47wKSqx2zpfhs5JW63RMmHrzWWkoNveNZ366QtSuYsnzAiTmAqRdXpFMwLsdda9",
  "key22": "4GirWae41pQ9ud6L1hmigTC27bLcruUFB1cQU2LFAieao4GJhFnmcH4okAF4GFnzkB4FgMjE8nBb5mLjjnB34wJR",
  "key23": "4q5S3iovmTeFEUv59TTV7XAXdC373sGRyhWPmza7Dik5i7TCL5gwwhM7Qf1mJbGSTQwbRtarzwNyBipvPwZZDGkF",
  "key24": "2jr5MYq5EjZ5yJWjdJ9ZhDvZHpRj9Qj2Cy3zuz2dDZ8apES1dKHUs6vo94gBDyDThBeh91Mtb2eddorbC26ShmJ3",
  "key25": "5sUZKTyqad2pWHYarzRdv9bBdPz7MJNYDsCuGZMUqjTjaC4XBTqrgHZM8wNtm84ag1cDd2wY5stELcCkUoexyDRk",
  "key26": "2RtUjwYB4LMuWowU8nNUrzSedkUgkk2jWWJ2zrNABGHYxxmhWHjq5WWLMTHwTfk4oeHMLfRLnqSkpXVaAeJLWTci",
  "key27": "39kM8qtQQBYypbpmTfAaDYoW31w9wTqpw72riUqRizn9A83K914DKBgeyLp3Krq4WeXto75tuNRmYeiJwDHHbTR8",
  "key28": "H1tLjzoQs3nbMBZdnWpkew3JeQL2WYycVkgEBTuxt65SprRqcVM1wJWehrKbAdLBzqhtJYHuS9zdhPbWXSjn5Ey",
  "key29": "3RB1qXZTe7zvWBSy6bzQakrWu23KPsCVvSSW8zRYxBJJjDkpc2tB6Yc6cBgpMU5sm39ZtaQutqZobSWXjgX2KRkb",
  "key30": "3zZ61mZt58KoYWDrkVgwfxcgiPLCH8p4ErAK651pAQBRPpUUM1e9wBKjr481LvjngaNHrbb1j4gzXiQRVffmovnt",
  "key31": "2ptacomScBfnCM9zeZzx9vaAGQZG57LQ1m5EiWtmCt8eFxFLAmFTMM7ti4BbYoq7xzsrgpzgPemny4LMrhiKG5ci",
  "key32": "63rHisUKezuce8HeKFW8ac9PK9qwkVt8zeqm4ugr5g3wKjSSpZ3VbN39rCKnyfzA8y1uADucjcNsSm4yjPhkYxs1",
  "key33": "4NTJrvBufrndRMQ1SknfwV28RwT93csXBN9D3DmdKX18BR2M3Yn2iwkhSyqbEwbDiuQtXBK7A8PuSqru4X2xmDKb",
  "key34": "3CN2mWvGxSGKwXMC2fzUp48zL5ytW56PC4PWXGm5G89vjyifhY8m2Csuhidgm8bbe13aMXYVcf7vLZToP3u8fSfC"
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
