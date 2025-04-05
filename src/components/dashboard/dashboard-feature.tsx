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
    "4uf9936bVGEW5or41niLrhReq8Q1TjcigdiTfAMuDeMq3fFTboSfQ1rkKUT8MP5FxZ9LG8crcGVEC6QTAdhEgLJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gsjwDgFxuvvUHubvV4v1CUYN7k8UvmTArJ4m9rMmvBPDoLW6EJbU6rz6rn8HRTESqo6EYTtYDWQDsL52VLZwt1f",
  "key1": "icU5531sxPM7FeHF4LpiQQpSQ8iPezGdwGwSbJ12Pnug5eE72qRu6BgShaxxxhApQsmMbnPPdssC9LpSt2CjyMy",
  "key2": "5vZVASxvfEisw1rwwW9nPEMMyCRYT56NqxNUBXkbrdwP5t2cx7SeQ14bMnjmEneTMNQh7KEnA4nkUd1kQ1HJeSgr",
  "key3": "5xch5wHzTTmWdeqsUDxN7y3rV57mpnLjxZDGQ6Hxa46DMARkeMykySksNAvzvqSUo7envw66SdLyLXo3GRm6E4Mh",
  "key4": "3mH87nSnjZWaCZ1YPHL6CmmqPyHiRcQ8geWdkoQvhq83y9JrYFxVuBAhv3XDTSLuu8qXQgb1BiZ2CjJ1sXYBzmk1",
  "key5": "4HkJ9Q3g22iwrwZvXzuGSsieBZ8VrQwkr5eeWQssj1sYDWU4HXS4yNcNcZxLnD6LPB426bnCmhQhjAbgQXg4Vai6",
  "key6": "2Poma7BmD2Hw3hjp2DYzne1tUvUrAHwrVdZRw2c55RfYf2HMSyiyTGYnkCuDahhRaEBLRA336E7nqiXUQLSb2PsM",
  "key7": "gQF591YK2b5gdP2kqLwJkMZGpr8A5yvvD7Zx66qPq34QbXi7QFY7DCnpYhWLeFgFVcNvq3BCJoKRNu2sM6FZEtT",
  "key8": "5w2gmeSVa1mWbf148j1wgC9ox9AjEc4LHdv5aMuKPKAwB1faFB8iuzLG3B16o9qhw7UPzy3FuTVELKSuFNjJAPrq",
  "key9": "2jViyvFpP9YXwJDvsNrrK17NxuQGze4xtXRYEAMyFWoWWGidsx7RbjoyEVpRLeEzM27J6kXZTsGdeVPgiVJDFwmj",
  "key10": "3LqHkbCSmYtHUmfB3wahwnt2UecLAJACjCQkHCmxCbVPTqE3AT9M5sBXZSV8uYHshwZcwk6UFybM7h3yGQKnFUGg",
  "key11": "5TGsKCSdSqhjSyWfsvMf78ZtGrs8CxrnpLTtMrKPJSAL7YPi6uWL5vJEhBa2ojnbho3mhkuZfR7J5FC77bcT1ZP8",
  "key12": "5EEGU3X738zvUziU4qvpPeKvPwuWhHpK6HLNQedBfrbuW62i5AboDgY4MZDeHSwnZGthAeF8JA9F7kPBq1VYt4RW",
  "key13": "dNEaCsiLSCxxDUuisLyKy1uCRDpNm3tQYUgpu1ygB7kvM7WFh2UhCCqy4XUgi4RvVc9itoaydQch3v75EYYyQRz",
  "key14": "5By3nzbaWnFYj4dvV4brBymmY4Ws9pfasDSdq32Y42d6U1GMtXxUZvbWiMEDcQ3G2GnwW7V85xaMBQ8EzP28G42y",
  "key15": "572hr2HJxqSuwkZtGCmXP2fZiSuDJuhbcStMwVVeJNE2i29pe5FnbDew47y2kS8GCgxn1w8p1q8v3NR4LASnwkAS",
  "key16": "3NbdeLLV8nodVLNGLF9vV4sbxEgfMPzcPXZPrb7HkREiMmBdnuGAHhVN4Ptiuuora35CHbx2EX2TV5qDFLDzaTvf",
  "key17": "5L3MikMpzL1Zs8jLE5wYDZWFeQqsMrsjaEfLVYr5QwwZfq2eReKCW4jyG4hmFZsguUUkFyjzmAtSUziJkRDpAXd3",
  "key18": "tDcZWy3DvUQ9ic17F6ejPVerMdbVZQ2g4qGGhZPk4SN311j1ZbHx1hobqBsbJ1pcP5cX6ENgkXLU2xtpRhRphcV",
  "key19": "5yQL48WoVoLJuBy2EqrZv2HkVNhtBHzuzHXEYrqduF5CoLQey719rksy1W6gT2fawLUzecKsxaojiE9kur19C9FU",
  "key20": "5WC6wpaTQwPCnrhKVWjcj2RuY5GmCWX9LLaeMdDw1Mhz3AgRxCfJUWXaUbwv1umojfDFFACjwZLnjvBjc4jkeVZF",
  "key21": "7pMwKnRmjJAWwWUxi7inpDrEoAguPByxn2K89RuoMhSu9Z7f5SE8fAjZxriEcmZQXxZiP9ah2CZMFj4TuRYqGs5",
  "key22": "3Skr2v6nHpoJUqFYA6gmQcKXYiiGcCVAUy8VWbbqeVCStBDFtq9n5pGPcvTZG2LpUjbcDpGueTDqTpisiefVNxVq",
  "key23": "3AtpNwUt9mbk2eskgWtegsyaCTyNUTGot1x1ZeVXenro46pDBALDVYA9JEQWercLjHfX11aBEe3qw9aoEKyxyeUe",
  "key24": "3xTGhSp6mhBmK8cTTDJt5RDvjtutBwCFmCPuwideFh4NxSpmqR6K6pEcxYro25zAXih83jQre4gg3Y178LbQBaKc",
  "key25": "4ZTCLXX4FuKzZeaZ9EtCD6xWvaiFjWCZXqLz2uCvJuVmBN1T3c24yAEqVRBKCCWS855jCh4ybf3iPxyXp23quM4E",
  "key26": "4FoB3f17esUcuDtR2qyvGMqrgXrH2EDXgQbWzvRVkMrANx8GFa4wkdhjdZLq5dWcuzhea7ZoBCqS4rhBWsmMmKkJ",
  "key27": "123PmxEYwjfMJr34egYgZFnKfosZ8K6R5m96v6WYEucehXTbgE17T2tUw54nnwzezsuCMSL8F3FopvTALNqV5TLD",
  "key28": "5JVEoaPj4gn9HUJXTzK8DzZHdyFDkKZu5rfK29JRGegq4XbMziR9fjK2FdGxjdC3SRivBN25CdSfGxVNZU6gGcgt",
  "key29": "2KVU3efEUVXicnCMRWFBRxQXGBKbH4CXY93eSt56pVEpZGSDvxTiTi5aisyVLknPo47WHLTeGjDWoug8DzbEYwFQ",
  "key30": "4PtSxPSrsAWvFxLQAz5qL6NUgetfbiXu9eTGpNGyHG4p6S27AHK4XQ5B8xCy2uiPP2UUxDWQcyaHyftXgsxWrQae",
  "key31": "Qae5Bg2nhTg3UDtWCDPbx68iKqyRyq9E4dpUQ6bKnenZkhRLu2Hz8ypSavkHSfxdsUq7CW1vNUPfDJkm2UJvEJS",
  "key32": "3MaenU2hxc2xaCL6pmk8B7pztggH5q7qnqAUPDrmZ7YazFk3hquFXixp3JQkrQQ5ZSHUrhZe2GwJ5vEf8h4AhrJm",
  "key33": "39o1jyAkJMKoxchH7UYHwdT7gaj7LLfxYbinKskyK4aHXRjhM15HNXpJ45iq4H5QC8WJBhmo29zsdi4xKctyxZyn",
  "key34": "5o5c6ZT6HsCzFxf9w2riy8dHZ865MNV1jVdxU2Gf8RyXkuRntK9m9hirn9sQXbaGiRvZvVSYuEvttffGBHEuJ4FJ",
  "key35": "65V9YgeMEzPpE9XSK3CJEj5eBZiE6C2Af5a6XFJAaz8sJmY98gP91zsX74Guqb5Utfn3F2ynYfJ1KRLAJhf35k36",
  "key36": "2PykMkas626Zi14rmQYz6pACqD1P69sfdqdnLutSWJk61VFGRkav8euJh8S3mSKdMGmDCicRANkx6ZQuoQ2nu5vs",
  "key37": "4EABcxGUNcYnhDutonHq18dZW1iBiqT6YWa4mgG7wbDn2v3PF22RTm5yxuy23Dck8psGE11iD1wqfxtyJCkYWEJB",
  "key38": "KUrXdfGaK35RvfD4zbquvdBebPsey26DZPxr23rJGq6tFEi72whBVbS6TCSFPFyLbqvs8GNHkrD6tmxSUC7NiHC",
  "key39": "bCJx2K33NtRyX7McZ2H2jpTMuewVGvjGhK7sv9KjsDA6XWw1osB2fFSFwtYZ7m7zvrUbw7RtKYpQp7ebcGEzyKQ",
  "key40": "3QxdZ1xQcZHD96UpYXjBrgf1vyEbgzVoTrLkKKR4kJXTh8FKZMvrxPBEML8kbHWbYHMkUwrdbN8wikE91wK8yVkt",
  "key41": "t6ayzyLHbvoDaNcQDgx3UiL3QKqrZ7paTNJHShYbijgPCm3peQRvEKemffV7iW6rscXn8eCJ7no3rVfoxHC5iBS",
  "key42": "5LbC6faK1UrqdF74z7mWuzBsUuPv2UVEnDAxQJNB8Qs94hEiFdw2rP78GnhT7JqtWCFGkKAtYjpxJQRfiDBVJ5Ya",
  "key43": "26NjjaVCAJJR3VGQNuuCvV6Ls5W7uobPZB6mEntsUkwicU5SbPXHAqs162raLBwCCqbMThzvEZUkpu32wkiXtXF4",
  "key44": "9TSegGktLn6UgCGyx2DjhymqetPy1rXXc77VinyGVUAkawhxCCkEZ9u9WkczbTCuWoV4JzHSNwP6NCpbxNNa6dG",
  "key45": "2kVzHrpEkgKHEAa3sh5eBLMS9mESDxNBDKhvzeH6hMfrC15L2ibZXzmU6WEeaYZUkV12eUbGmjuGMDUG4Spo3PmD",
  "key46": "36xmbyQsJd8VtPMduFLCdpftH6rRS9dPFZiN4M4UFbPgUCvTM6iNrAmiSuUXk2BH5FixJvWug5osMpwLBGbDdSSA",
  "key47": "46tVR5RjpWQxPYjk9uzAgnDbdsuCHpntXQNU2jQ979bVS2kRm7oW6sa5aNSHCKiMzDqgdxfFH98HdT8n96foBv6K",
  "key48": "2fRViGza3yZyhjN2dew99oS6PYL9L68CmMkkwu2pwnR3ykYape1Sf8LkSreuUpQn2X7YievuD4LgDDHqss6CPaes",
  "key49": "2Gg24VM9JuvXqTom2CSEgyYkS6ozpqBHD76x3waAHtMSecKVpcYspCuBSJCthR51MK8REd3tqDXxpV678HNe7wfr"
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
