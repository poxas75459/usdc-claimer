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
    "3s4yTMTSnBFeAYQoZgH7a3sXx7q3wNRjy9dtqhdYP3vmwJnMd2X86GfJZ9eEMzRELnVgRSh3Hs3g3njr1eBo6qFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z2eRLcxxtHS1CFKrS2XpusaMDB52MvW99Y8wxhu4T2nuieKmjTTXiRjzk1XP1jLLaAQx9azYKe5xeU1jMMH3i5u",
  "key1": "8BSqGkwTn36FSzxk2AYTa8txvWRXwmJKh6ik5jKP5GxRghCgS5MS4FUauZv4iXUAESmRiBkcyGRJKeJxbibskEB",
  "key2": "bjoJUXMfqGUh2ruH8f5LtShccFF2cZ6yi5JHqGwmJ7ePrHRRC6iD7QEJ2b5DhWnK5KjHAvN9jrs6iB2g2geqySx",
  "key3": "38izgsnXq86dv5pkiaWmqQrpNXH8nCP12vLjpQWkeKx3HYZU2Qj59cP8QHhAHNpufHs2ZPuLmtyePRovgdhtAcsB",
  "key4": "pBfVd2biM5GfmWZHMhdgGL7Q8Ys7NsTZnhh4e87CPD1Z6UB9xK4C7UTpicgCFXr3mA22sJXiKCAnhgFY9pYu3nx",
  "key5": "5ybDeBmHnUhge8Gbi63p2SiRLYCMeAQ3U4uwTwynSzSzqyZ54iA7ERJwE8A7rNrJJruHPCh7Embw4DafGLyWweKx",
  "key6": "2ogCShLdrDLmgEzU1zyNn3gDMCU4JJvRa8GHHiUp9mk2yjx6cCoLbSjpHkknJwYQZrHPi2bwSdZ1TFoHpEEZ3RRu",
  "key7": "2ijjnbQ3hxgtqqjLqXXcBMNR3mPsEt1iWoFnP5f4cXTG1SKibrAL7diJU5GyoYVQnwAsBqRqhB2MbJvg45D9swYr",
  "key8": "5UioRVMW7vaUnuMHtDG2uXGhCVv7KAEQzZHjZM4ierCjLgstp9kxmCZrnoNHecNwkwmo6gYNAbW8wMvMQtq19N5y",
  "key9": "43Mw1gXUYSy4eHinAM2BdB2gdkveHbrEBd3KBr4dhaUWssBrUUi1BNaYuHJqk7NZBUm3VUw21SPLskJpKsma8m5A",
  "key10": "2WDMNuksMEQTGwAZGG9SLMfeuWEQG8GDkKtc7wgh36shvYFd8RCHXY8wQitXpLSHLdcLZvEfyam9h8FFb5DgJQ63",
  "key11": "2gs3rBimTteVwyBfbZbA3QHeBwGDfRHbN31DnYCWjAc26hv9kb9L8ywhYyY6b9vPsRbdBwuu97DwAGgDiss1YwTs",
  "key12": "5zKav7NBSPjyLBJpei8vsELD9fUR3fdENruVgFhMRPeVwfwZu7XYmP1EjfmSJCEifeYAoURYC25X6xjbx9Y7iMpJ",
  "key13": "65bKzBe136VLYE9MCpkC8mZzqMuAmujdWZ8s9frd5m8wPpoRFFLM99pqTu9of2t28y25zhwfwJKERoe7damdVzGJ",
  "key14": "4C23xxP7SEJAYtcHw8yWHLTe7V3y7wxj43QydrN2KnMgbp7uy1xNk7NNm2nGwS13qzAXd3e7g1emaBYAz2RRRwKg",
  "key15": "3hxixiRQXJAuoeHL1ooU1pg8XJjxNEd5AuDxH4Gx82gudeMCx8EWhy7EsJhMUjJAMuGs3vUt59JA5hdWnsV6C7Mx",
  "key16": "4bG54mYZPQ5sDd149kuRj8dnb8Z3Rf3F6eScKRBbDz3MADbYipzoAEgDH9qxnzvodmvo3BfDPEBf8tPYCgJm8YHR",
  "key17": "5T3YTh3ixjRdNGBkPUmTCDcqm5dwZzRxbdQu1jLsA5H5NSs6Ya9mwet48BpavLkd4kC4oVodKT85sYsFc9xDpoC1",
  "key18": "2tJW2NXCX3iN7SYxq5KEXUaRm4tLi2Y4WhHTnFKUdcm5b4UcacraPnvkf6ZXbYA82bqbxhgVdhEkoXFWWmg5QDVA",
  "key19": "3VCtSSShqRxnhPxURbQcdGhQGtBGP6fzSgsUHFdcsdzgzF4dtoACc1txWHcTwsxgAcyHZcnPDqHhVM4yNMS4qo8e",
  "key20": "5y4HqKvLmhzC5SGJbMf5tTMxugS8Uz745ZjMCnVAB92W5iXZuzV9FbGJnJ5LZNqj3T8GZCU4p5hBCFkvYUDzfRRR",
  "key21": "3Uzvw5PorBJZ8JkH9WapfUA1M2CZGHejVpsPm8vK2twvkqptfAmgk4oJDNrh6FTve5XeDJmatUVyWw3kSV6G8KJP",
  "key22": "5uN1qHRCSw26KHsUFd88SYiuq1ZJfjaZtnsC7CwtqtzdKp4mMERa8FKAHi5ohcAA1YoM8kmBi2hEx2QEtV9dZiyW",
  "key23": "3JC26D1z41soH8mjKB5VyKoaMEVxrAd7u46uMQmdn7EHiXRieHtrPMf65Vnm3dMs3fJ19FWgyM52J5Jtsq3yZk1v",
  "key24": "3xfPKDPVs2rTBvTNq2QhrscKLh1ZgeW5VLCzjKs16oRczyyYqK41DfH2niryxK5Kmn2kH9oNTT1Hn1akJNzGKHSe",
  "key25": "26r46FP9xqxboKFeQzrC7v2K9TPnEtKUxJ77z37R165DFu9AjqHei1Qg5gtcMc33KiPfTsjDxVE6uCBxndS5n8y9",
  "key26": "HQfHkfjEHaDqFPiXFYCfj8LDhZ9LmH1okuETT7LBgYEzSc6PepHmNHoV5yMvH5WKE1CYu5ARJwuiKkd38r47ocA",
  "key27": "5a4oidwWnQhhMjJzdANZcz4CoCp97eD2vb2ns7jQbapD4G88TA8qgRVzqeL8pz8jfuLVaajpJmMKJGr5j8qKK5LB",
  "key28": "VJeUZTJ7DuQ5bK9WqoHFNUDJGEeCo1vwFP8cNZAGVjwCvfSctcUmoD1bxV36a3FiQX6eSDLhzdycJ6j13ziW3Uw",
  "key29": "3xr7YRgacSBi3hvdbbVpY6LPL5MU5HhTYHRwthaZRK3mCi8CNLRmi4dxotV9Qgt6XL98TWsfFAeSPHjo7MKM4A7D",
  "key30": "4AGhAD2656NEtj9A4Lcmpgy838fDkKu3E6BpN8Hg2uxQnpBGpqoMU4x5np1cWz85XKb9s9HxLgAy7q8rjFsFMGcg",
  "key31": "2JUiarXbSgcACB2WL2x1emvfGSZxKcJqbFcnkecVmzBkhUeGy6pxMtLUJ4FpWJtkuWfMZJdAdnbevg4t81s4Xeqb",
  "key32": "25dNH6KJAQ8iBvFkqz4tB2xha84YfbHi5oTK4q2knRPmSQjjxpQigSS19qe36sGDtiQAnu8UNzoZUjfBoYX2jKtL",
  "key33": "2H5qUaQCQeJ4f5MAJrMyeWNafFarFBJPrBpW8sJvBjH189u2FAQ4Wpasx77fZ8cx7Gvi6XbTtFRfRY3eJqKAYVGD",
  "key34": "5neqDxgWrCqCrh5ScNUBcgm7yoDFjWCf8gWDiWTU4r54Kiwv29bJMwjMyVdPtjxbqpXfSuhSty8YC8EQySUs9WDR",
  "key35": "3DMk5Q8VErir7G1CKr4u2vqLgEBn4MBuNqm7DrNiaGFEHmm4B6fMoqzSVSvk9hYRZqsr8mWQkhYRDR5HdZJLTPTB",
  "key36": "5QV4t3oRB5qZJU2aJG5M13WjVqVeLagG3oRqjQwqp4mWN8KDDrx2237PvMuSE7kMovAHKyaLYzu7hgKeswukYgnd",
  "key37": "51NeBWoSiFuHG6nQVVRVx5X2DGdWHsZdHtdvjGbYmTEJEsfDTWG5EdcSmMXZCaQ46yAK9wbwt985MuPy96yngwVv",
  "key38": "4kbvoCQcF5nYj5PFTj2kst5YYaWBJSGSzxRV2UjGAgMro6VS9cyPJ3oinymRki8qzCjiEPMD3kQMxJmHb9Pv8M4u",
  "key39": "4rAYAkU4ocMVY5mWBXnAzSpmC91N6KB5GVpmSKaHokq5RsfDdwpr8bQov3TwRG31N5UdvKKbHHNNoGD8q22iHqAJ",
  "key40": "4uSqT81R7EGwWS7Hp3nznVifyAuqjfKQ74aBErFu95ePC2BGmnDtvu3We6m6EPXN3nWMc3A5JwC8s9MuUW81jVuz",
  "key41": "KiUXsmirrcoXmimzxgmjGQWTB2K2ES4dfkeT6GM6PEsEwaNpqSmhFVhWPPeoiSdbYXTq5qVJaXGugB12WGuBGRH",
  "key42": "3ekEGYECrD3G8LPPpF6mkZtaWERsELBD5inCUHsFR1zyhpaFMRF8QBYjbBi2td7e2ZayQWz8KdeafoAC9Ww16nrU",
  "key43": "4rc7YxZGo7RfsH8Hf6fBqNixEmTjh1QCTJzuXJGGqp8pJv17iGJUtZWAKCDfqu9wfmtVjTHuKZM9u2K5iwRZbtvu",
  "key44": "33a4qTL92mLiF9GzQDNNqT6znpRJTgcAzDu1tYRf9gf8Jr1wTPmsqfH36ubWvHRxd11o44tS6zRF5wYt9Zr9X221",
  "key45": "5W9oBTHHh1PQ3JHgMkE1FoMMMNV9jS8ntrrS8vrw4LTezD1B6TvKYzvYE6CSymjo7aSn5FZN7mgpoBVpHtksgT3f"
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
