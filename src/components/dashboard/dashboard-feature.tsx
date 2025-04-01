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
    "XQtksGorVvTPEbvSCdCV5JwzpqMKZJju4XQrnccM1CncjGAnscnnb8R3fsjp8NA8mzs7cyjMP2m6QEtnTYsxAkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aY6crphZUwENiG6di6zAv4wvavc9ZRKDT7XNvQKYWoLw65heQD5imKW4BxtuLZUktaULSnqYXLiVSRPsDcW2FVP",
  "key1": "2eTTr2ZqYZnWsCDyZy6zumHVoh4DrfLgUxQ4Pdjb22DUfbY3Jm2WKMygGE78952VrMPgRm758Ykquignxfhb763A",
  "key2": "4E6rKqiot6L23omoRbpbzfs7zUgfqf9yKLQ6AQENCexuhGC56Ttj9hwgDqPktVYQtE6uGie1z72bjJ9XSUr6nKcr",
  "key3": "257Kka1mWAqXkBdtg48qN156JQo9FyxJyUx119D1ZU4nUmm7Gba9GdKX9zwGZ31Q1ifqwyrrLH1v2owsQrm5NrH1",
  "key4": "2ceAJqgQkf3yXqtXAR5NTbiDuwNf6Z3esVPuwiT7yjhbq2GW3rgtZ8g2pqohsttkp5NzBsU3zTik9nkTph4eVt33",
  "key5": "2hoMVAAfg4YmuyjwtPu9Dx9fQcPNSQBpg7HcJj5kofQrLQJKWqifQWE8pCxx8Bow3FqysoZzqEkTfGMP34GP8d5v",
  "key6": "63REKVou2qzGXgSN4wF4Kfw1FkSGQTPUx1VFvEWujk5nfXKEV2bjd6whgVNKBsCmLH1hiPmeeJR1gBgCmubsu11H",
  "key7": "64X9uo7KnrV7KPWobecCVTbf3E6PYeM3SuNrXCfz6ewPPHDiJ2u4S6vYYBWjCCqBWUPxguscuqFzPizjGsN9jetV",
  "key8": "3YRrFptyvQ3WyuJmUzux5G6a2HzrtLaE2HGVRVogwhpygR9RQxK9rA68BvkHKFPe1XrfJbzsB2UkhLLD1SfCFwTq",
  "key9": "3Jztt47xHxQe9S45Tsz6ZfbYzk7AfQGsybE9aNND7LK134okMiqeBkmn7esAQLVmDGqDohDPsQQCNA8EJad6Xssn",
  "key10": "2eLPnopuejiBUwCuntL9xwymiYL5apupY7tYy97c2izXddTCn2QLpPxz53zLvgUEPLKbjHH7RLRejCE89zut7GZ3",
  "key11": "245HXEe6LyKnCD1em3p2xQ1UPf8d5o48JNSPPmijEy5eYvq3CR9rarr8K2gqfZoJgrfeJwhh3T2jVmeTXjyCgHQd",
  "key12": "23SnExn6kWtFWbuQENBYADyYXai62ts4sPYLPQVNDTz5Q8zetmECGCd3sVfareqYmzEhTUPwzVMWtwYzRCGyAQup",
  "key13": "394vGyRL89xXjHuW451TMi8gbbBVGtkPYZN6Mr3W8PSrs4wNj6xJ9AX1xXeeB2gA7HFHoNy9RGSp2eczqq3nh3EK",
  "key14": "38iyqLWrMSbycGVphixxNuzkju5MWAyNHa2gcyneX528bs1fR5aya4sw3QEuV7ie7kyPhaVEgLRJZSA9xmp8vV1",
  "key15": "4e94KPZV48iekhL7yVNnAR6vC8uEK3tAgiWAecmrbRPUjvBFVstFeeKvj5eMFCr5zyk5UXx5yPV4RbmUpjhgnDU7",
  "key16": "5iySRTU8XumxQxuGzw2F15FV4Q8PRm8e8XEpySrQ2kCfiA3UKd2uapq29pv14KUMNjG8MfmKZsC6fc5ubbqCGG2r",
  "key17": "3wzunwCwjVQf4Qgy5nYUFMuFcvNYeUUE5SjZyayT53dkHMb3oGDQ28r1CefZ2Vk2y992dQqx2gH6o2s53aRUpLsq",
  "key18": "3XewEnmERVzxi6DFJQPqyYyZjD4boowVF7rAPCsSSKZvFLQAhEGUBpp6RQazd5sWneJFVKCr5Tc9THFCyG7S7Mdp",
  "key19": "DCTuB6kuGLTypKfcUwhmbYHtGYEtQTYRp3DwpBafVAbcbfenLksWmbBdHitKy87zGWcreLgCRBkcbdrUGfzWgww",
  "key20": "3UKmoC17YENFsd8UsRvhzdrWTHdVkxGL42QYuW6dHEWKujKEBmAb7u8S1ESDSiKXmRmJ7hP3D5UrfWMWdjnkofo4",
  "key21": "KkJYJ7GMuHtD3EpufTrmP1BMJvtww8p2RDuCCEscp13HPNuanb9nDAVCbMJ9Y8vJM8zJdi9nNJKwkQZj4BF52KS",
  "key22": "2FC6LsZUWpGuzKw9teeWxgm2yUb4S9ha3DXeUcpEr5px8sJin4ktwwzpmKAXnUKsoMmZpSa7yK7BKUMcKbJ1QzYY",
  "key23": "4AxzdeuqvJBJTynQzAW31pRkQuHUXUDro4kGu5DQNHDTG4bKzprQhyHcSPFNxpjLo92kYNcJ3b9xdcRAPXr51bDB",
  "key24": "3BVhisgTPuyouhSoYjqXPZcchrNkc8bUJaQtmKpMNwWto4LL3fkRQDYNX8YPeC9NLPFKv5yWPYencfPZDpyYR8fs",
  "key25": "51HqKbmSCEgEDwTmAJZrNjRsDb1uWNcnGdf4AgxDVZXqXjc5jPbLjAgots2znXbQMyXhDhRfAoLWsfHWHhRtHsU8",
  "key26": "297Yu44nqrqs9BaqBfLvYHSvahrrQ67B8K6L2WVB3fmC1eU8hRibJ7omwhHnekM3SsU5YJm9hoVNGjPMNaLFtLpH",
  "key27": "5uTQE71dbwaPqKZviBHyysjRFRfPcXEoSFRqdYC3Zmu2JSoAFvyxm1DUQWPfMipjFQDNqo83rzLFUcE174F1kEEj",
  "key28": "5Evu5BFTE3LA8N19UbWdm1RLx6WxFk47dSbrL4dgkNxfLWeJhdPXeWZQU9FuRTbZsykarmc2kcZnFgYNihS8scmy",
  "key29": "4TdAygU5tMvgTFNiHNFTGRhZCg8RZU9ijh6WBpPZJv4VQMHMQ3TpHjbZmZPKsdqTqwPDr9F7M6MRNEXVCRVtVXAy",
  "key30": "4iHDYvcEc6mTxxYfAvfsz3i86SokTWanRd5SYhfu1t86DbDxVDYt2deAPXKsMaKquy1oskVEuLNNhTXNNcs3Rhom",
  "key31": "43JUjcda7MKgRbPyEupf3x6WVuUQKW26dZv7SfeWZnFvHEFSj7Pofo9VmbRVmhYdYREGUV7LTVCUmT5B8uRXENDE",
  "key32": "5Hietx1pPneukVnxnyeT4yXQmCBrxNC1po421bWTWgqeszKxK773RtigeG5BiMR4Bcbc4jyGgCm3pe7pmGZif7Pm",
  "key33": "5fGDGs8HENtnCvawk5DEVftNRofUv1tDZMx9q9EbxrMhj2X3NnNs7tbSGXVeA9xV7JarDWpbT5k5a5aT71gPhgPN",
  "key34": "648M5WztFybBne4zidtK7E7CwZKokKf6s6tqBkDREZ4dcE5WTFyTXs9d2NVsg2dXA1eScFzEFnYhXco4CxVWAJBW",
  "key35": "2oGPvN17ouPhnghQXZLDF9P9T1KnnqSBpKmb2j8x2xovUUZYTXYD16NeG34XU3THAzFHDjrLCHfnmnc5E6W2EtoD",
  "key36": "5Df4iD6XWUUHYnd945tn2hJMbc6qBe3yUEBkuf8GqdNDVDrDNqovwy46eLEV2npjQBzYJ8Re17nej84a4q9iYpdk",
  "key37": "5XYFdSRPyDhYNfpYE1tQ8V3TVn1b9ihj56ejcZZ7ThdBafZK4FCoh1CDNktkFaLPTurAe5cmNJB5m711Sp6LzHS6",
  "key38": "3oHeEijGUQ4fUU82H8BsPF2Z2uZ7BC57XaBo3Mmz21hpjMdRLsigmVN6sJMQij9Cnqt1tSYgzWCoB2RLJiRLJRcN",
  "key39": "4oVvKPa4bdN9oEhoSFbT3MrKRUtiZ4aWwMNcL2gmxQms8A6JDAKwWZVUZRPH8B8TXXSdwku1fkWWwKa52zwirYSC",
  "key40": "61SkZEz2FUoLnhGEYuNCyuMo7xcJ89LPsGcXuZ7Txdm9Zs1XsFst3iGPXgncKyL8XQXwoDwu5qbTD3zzGGVqNHNK",
  "key41": "34dqRofhqJEyioKkxa8TZVjiQb8mT1F8UtfXdEp9S1C869jMNtG2vJHAea5GrAccjkhjQhcVSwr7Q3CRtnrm8fWe",
  "key42": "3D8YHanGEyp5uMhpLhm7ctRRgweHDyqSaP2oQZk7kctwEQCMoLtuHnnFb2kTnWchnaQUcdTHpEsayXHbKz6Q3vqz"
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
