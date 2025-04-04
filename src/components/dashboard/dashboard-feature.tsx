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
    "2sKPWuPQvn9bw7WXPUeCFFXuRkP3G1TwRRSgYxnBRxViRLYMfdusHZZTyg3gs5r2o2cMndeGsGZYA85Bf1RwGsJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GWjS9J5ABNiAKPPjFeQQbqsS4QDHmbToaoR6shT4H6UCfV4b2jrQswdivLrda1k8VRVdSsyrR148mf9kaRRkszw",
  "key1": "5djh4cStHRiAJMqKtXB7sKPTUpegMF5hoybrG2vAjAmRTYRvbqwhx9NsfNyWZw8jECZRfPRUpvr3Y9djTqY2ens2",
  "key2": "38B23i1B6KgAbwZK33LPvbaCYYcKJtDig8VKq7e2Wu6UsXuYugUVwpSZmdatNZqAefc95ybFYZ3Q2z3kucXBEsnk",
  "key3": "4SR46Bec1nhGK9CVKJ2MfAn8NdnVW4SahgPNtekrQFjDTZErAHWL9tifKfqbYp17K8kdu9TaRJhXGUY2TAsdtYV5",
  "key4": "5bEPCi1mtycXBVYGNzZeYHRS6jw4YZEAz3vZFvAUioWf5HZNHvg9qF5vDNXLwyGkbsCCq1T6hpBTKNxpaC8KFB2T",
  "key5": "438xKPbdNLiWNkm5xPJbLGL5MzWKf3Fv4vGnsqf69dNGm4XzMw59TB2hBHFZu46bgHU3Eaum6cJA8KHLSKGRRsrW",
  "key6": "4MU4kKfbwxu6Gakr3smtqa8jUKvSzhsGX1MM5Z5WrSN6txXKvNvhRJ4yve98SwZH4U9Xcs9QqGWgtmESL4uGevPw",
  "key7": "2F6raFaYapcq6kY7ahKPhddsSNgk2KDHvaqEhZ3KCdYXBYfKXXcXTrc6ep2VWwBBtnn2fYmtRHgh4G5ZPtvZnZ4q",
  "key8": "3y8o9FGpidnNSgQsNrCJyvzsuVw82Dzj3vXjkWo4ysd2s5pJpbje63ZH8j4mx4nWn5fL8uyMx9Dqjk8TiWKtTNHv",
  "key9": "3aL5twf2JNti3xmJSEn2muoK4aog5hjtgRRbBDV4tCxGUTRKZmTckjyLAABRMur7Np5G1zQG1emGxZ3EQarpzrC6",
  "key10": "4EHV6C1hMZuwaLveg2dbWECcFsAN3y4rmLjT7faPDvZDdPHv1sFMV89Q2EcCeugyxMHW14p87nmf5pT99zxwhz9e",
  "key11": "optUi2eGp8X3pSyzdRdkmQPe2q5NDuXSvWvTVz8JX5qio8PoJ7Cfx1HdWZAx4pyi733CkdhF5eoJ3X2GpkCv3We",
  "key12": "3QhoGnDMhrtXcy5K7sPUTsS2KLrXKnB2j4pW7HftTP7R5Es9FTioe1Ck9cZ5d1vLs5Gqn1hn1pZG6LJRNTB75dLo",
  "key13": "5uc4eBewz6PehWjW39wzgzBBshs4aCDkuYovmcCT5WQp2GHpAwrCVuP3tnYT2LBPn9SsfS2n7KqEnwwFm5FReBZX",
  "key14": "3SUG2j4fq8d6qmhcc9UtdEc5x45HSLVGWCjJHkT9D7rqBcRDNBmWYCcxu1HjpaQqkzuWHr3utepV6qpVC4JRWy98",
  "key15": "2y52WbJhk45Pq8XgstgMitF5jDPFWpXQL5jqiza9BTQNwxciq2PGMxKEBtmgZG9YE3tXRW3D9ZuzfMFsrNo49GTe",
  "key16": "4fyYf4ry5zVjFUxhFHXs1c6tN3Sfq8jJxRmfzJNhjC43NfPH4cRn8tScewPVW8r2mcZTne48dSHrgHcDNcbS9pJa",
  "key17": "34tdu5feKU7M6pvNtBMrv7YPb9wJVRaLQhX65YdmHuMdxQ6hdtcnsXNMk2m1h6fZJokyvrGMhXy97cgBLizthsvi",
  "key18": "RXautPMv4nGfJqoYkwniBxu5sq4ndNThgncrueGiqU95Q3VNbfKQJMDPFTiYMncRvKLNWnFgQLWyfzTFNxBBBMW",
  "key19": "jvycPchnJm5nwqHKdoZt6jpiiERJ8xp4h4Y5EyCLe2jVwACBiBo7xsfd9MFNehhBZeKtLru37iUvShV6vRXkjCB",
  "key20": "qXct4TX7Mmyv5EYSocoMRakLYbuQUMXLAoy98hmELHLRW9wdSUNNawfkH6TMipwgAEhdBJVC6JiqHftvGG2WqPH",
  "key21": "24G2N8Lxb71iaWHnVWZfAMdu2XaN4gky7yVRTwoyzHZmXwU4UJ5gBc7EYWRwBmKDe7qWLF9t3D9UwW7dN5CpqEdc",
  "key22": "2ZEbKPYDJp6Z5oNRmryLJXrebgQ5BGHYxqgkbdh4Hhok3o7LNTP9VFiq4SXdu1jjtysneYcs5QPecrj2ZgPky6nP",
  "key23": "W3kAJsYcxUXy4KU4UTTTgVFGSsgxRvKmrMKagjEGDGmYHfDbcZPh6H8mdA4ARdqmWzHPspffh5YUUzRM1quUHzq",
  "key24": "3Y4okyBkvvWdAWAnXkVNhiey3SiibzixymB2b7Aho57q1yH3kctToddSF6HJcygCuspfPUwrr9wkLNXUELggUj4v",
  "key25": "4zqDDG4AXYXNTu7tLdynJDHMmNvGRSoebUgdBqromJ7y4mpERiSzEncjuhdM1xnXGPAxQo9vmv6vxXMbr6mo2RBU",
  "key26": "3cZJmUXqpk6kYwJSmkCzTn9kmotW7g7J6JUPrrtububN3Cc88Wck5qWmPaenPmgXuShzarNmJfxACrr88DHQNr1E",
  "key27": "4rwpnZ4MwZVpTSqYd1eaopoaooXFsAGx76NAPA9gVLNUJc8gqtjKDEa8pkD2GFfKiTEwQVKYajjcq7QMoRUtW55u",
  "key28": "7UHK5vVJugTJs2aF4yjq5SsngY9AwCEw6Qj34NcuusJhjxcXXE9mEotRoJyARhigeyJspWref5tZv1MBUJNfGun",
  "key29": "48Kkq3WkBrezR5QY8yRUX4wmEduKmYftGma92cz6Y1yQ5NGexevKTBQmSeaXNNRhVWDiG2PfAkZ6gg1XJZRsh2xp",
  "key30": "S3qrLqzJSCFf1uU4q2S4E2kv76j4kqsmaAoByCTdR4CsR5hha1ABTydbkJfLupXVNwR3xEXqSbGyd8inJNuHJZm",
  "key31": "AxAGpi5DvwRjYD4Cw6iucNwEyo45a6XZr2f4mqXCFueXs67E1GKsgBG5XAX3rmwDAYDG6ZfLBSjrfWoS9TsgoKE",
  "key32": "5UaLo9Lzw9fMc4URNZa2C9ifDZCdhyg5fmb8jyaCHT3TLkfU8QQyXHNm5jr1ePMguYwWCW7eWrm584NX2jmtDfhB",
  "key33": "34uodMbndbqEtxaddMt9Dt26YxAMpB9spaMdC6bAGUYEpSu5bbQ95w4daQkQswgCkgY8v4HtC78X7CNPLCWkWJkV",
  "key34": "3jBFPXu35TictJBczguhL8BTaVBg5fpPp3cDadKhyiiWKep4spnxmqXmvdDheRiTj2GPqsHnVtJACRHiVLagDNPq",
  "key35": "2iqVotyqLHZeSvuiT7igRpQc24YvhV4jUXgGUoqwFXbJZt2mjmyAnucA8KpoYR1JF4dJvxirgoLdsN5Ab4Lfb7KG",
  "key36": "3z4mLkBteqVFk8HWpJEkMsVmjbw5upBvgop8rAoBSMVsDPp8Rgnr74N8fTH3aMTSSBtv8EAj2MyhPKAByFV9a2TL",
  "key37": "5cYKaWZWxT1egS1mU6cTLWbfR8ZPLFxGVd8Gsdb8k9GS31x7Myb7CAtFKAxEPDHq8Qgzwqq7SfohVzNRHipCd6Wj",
  "key38": "5eM9Wr39Y28vtsiykqAFxd8AE6ZW97MgqQuj5qqg2652hTy2w3KiGJ42TfxmwZWzQj55hHcowwBcgWQnF3eCrTXC",
  "key39": "4a9dRVkzBAvVb1c9odzMCT5fNgo55PKsWqksfV6XCe8Y79GtKcPn1GBimzG2LHpFNgW5PGQRK63F7Pb8dQPhkM2J",
  "key40": "2s9ekS4AmEhqa7pGjU4ZxqYGiS8rBuMCh8SutFrG41sCjM5LDj9qbqUGVeQFgp8C2v9SeQyrUJcoRMnabh8Fk9Ny",
  "key41": "67BfTDWTdAEjvxhUFY7hsLkYRcZXSiv4HSoeRzq3phAZbwHzq6kUsHvKLUFyyMKXxZ2eE4v54XsPRDmSzTgS545N",
  "key42": "3Jcmxsmg1PTfozpJovo4W1keWdWQ4p3EFPxu8tzD33v2PWU7L5AoP5xGhLmpycM7SC4h5ryiPcSRE6RXSdCn7dGV",
  "key43": "5U4rjTGgBBdxri17XHdG8cZXmkzJXwBU2B9SKiX9UaaszyNgzskSbHqiTpN8wnVSzjDSBqQBwVCfQui6gkADwVHF",
  "key44": "2WL8taLnKaj9qqJV4ZRADkUKs7SvJfpnCdp4ZZ7BTVhRKVNRE8UceiJgfLjyqpybdXfD9cWeQqcFXJyAdPPKfEHt",
  "key45": "5NdLiXipXEDvF1SRoGj72UXwWgn4L47GkeHndrJtqS4wwW7c2yt9tcfufrXJesRP1o1G9bH3aqRoBDSFdiyDLr4o",
  "key46": "5jaA4EiY5519aFoL52EpoocvsCJyJHVjdGsetTqnzinMQbCQGd9GPES5xCqsZCN4fvEJnEmz1o8x9Dtpsgh2Zjqr",
  "key47": "5Z3NjeyuZnbbyzvZF5b17DiFgozwGVEBhLhTzNSrG9M3LZyNgMfWYnNkBRU8fdWvHF46Fdc7zp4eKvrpXkfujxM8"
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
