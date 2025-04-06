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
    "4WdzGxvnk9gwWtTpjJ1awumKkh3zJjcJjHMdmtJCFoD8Q4HKcFAYoHdUzEx5ZkmFPZx1KHLNY6ded7SfQoUagxdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KMv4Hb6ch5CtoRQ9WNMDEgXMF9BNShsNJhr991fiTbr3YspRYENtNRqPUjkTwZxXUH937ns64iJ7H7bs6wi89xx",
  "key1": "4oJMVHpHcbB6y4DcVwzheUMe2TbSJQdD92jPqZrh9PxjJsBBrmuprndpjrMcytQuyV9NQefRcqdjbpvqmY1NDaTh",
  "key2": "5NKsX5FTNcHvhTY9RG3gke8kSkyPwLbdYRmGm7AGm4Rs6ULmfMVvBPhZN9zU8C5SuwscN3kLGTafHVS42NGJdWWw",
  "key3": "EGqvduLuQywAUwt9NMREgAHyFwAZHNFazeSz5JjcLESR8dgSQFHVKyzLZfvHYVwkJDDWNNbgiaKT3wCBjriD1B4",
  "key4": "5r3sqfE1uzCDqgQXDtvK6ex2QvMBjBCcUgKbf7mqt4mBK4uiPJfLFVosh5iGfJkdgGSjHCPWPjw8BCZfjiFWx35j",
  "key5": "5ctTRVGthsmcKw22jq52mPfNh3v6xCHxBdrChJ6ParFuJA83LWM3jEwGCxE6dkbaGHnjcxMLXMifx7ofTFprqwda",
  "key6": "4WNPJoJPwwHdv2WP5iboNz2cCVcemS3HqhFPd4zyJem49zXoRPK9YfEBL4AeGTa6RDJAj9htuZhRvbXHDhU1SV22",
  "key7": "28rVJgn7fqwf97pbyAPeyZLMydeY3gFpEuuRxfBuPXWCkFw1uxmQceE5pTKw5uXtqCfEFVdbGTs93pWgC4cLDv5x",
  "key8": "2wqwkRM7CA8kcRPTAAotZopycTBauiHQfKHLeTdacomfveXzhoCHrby7zcTCE3uUUsvndEVNR3RcWiz5eBzgsbkE",
  "key9": "5xhFfHDhzK4b8MubhXQkET7SjDZccjou7sRDaduJKstYp5dnX1773yjpfNnUwN9UfdNkCaTFfSNnNSNB5Pwt8qgG",
  "key10": "2Tp31fvvNowtHiitQtote4F7eYuPnHK7V7hTVgcz816xSXV9cjPi1FCWHcmqkrGNpc36s4THeJVaimMRriSn6Aom",
  "key11": "BDi5z4FZJZWCoFyrp5pZRKLzZDFSGXA62H5AHPFsc4UuycpuHTdUsMhyxzhNJvA9P83Cd164bFL4CMidDHQNdvX",
  "key12": "25sxUhVHTbwN3jXrxP2x1fLLKmyUX6uopeTvupSrGViK3RNLgjQvNShw3X3TS4G88rB27W1Xr889m93d3iGDZZzo",
  "key13": "3RkYShY7TrxeGXrahvM2XDGo1yNsCGTyz5RiD6YJH7jjRGhW2SJxguBwwX2Ze269hD4tBY4NhW3jMGDAvtHVE7Bm",
  "key14": "4xFCV9qq47t4diJyv6jgUjYEv5iXWQLHncmhi2u5RS7mFbhK5FACepARXbVrWkh3Lwm33GMTJebP5Y3T4Y5ouhKe",
  "key15": "3hGUVtg8zv9EowDr5FGGHAqefz5HzDCfRBzhcTxap7FnGCY9H3ey144anH5psZWdz9easWqJqvhND4drmAQZJjYs",
  "key16": "2P1iKaW29SBWvBcWAzyxMAuKmH5tQYiNWkAz1HV4XHC9q7ag3BskmEu3M85ntwbYNtutwn3wPqupQLSNzZSWtKhx",
  "key17": "2YtQPniSasHpmrCoKnj6ExwjzjedB6BNY1AKJ2VdKuu6XMP3pQbpFaNY27uD1mxQdnFg4Vh5rRth5ayXkRyWi1gf",
  "key18": "2NLmVJ4yi5NVHevkDfGzVPQfpvuPwnECdcrESmTjkxKrjvSRZ32ThGmCiXxQ3hmFtpkFe8wUoj9bYY7F5LhaGeL5",
  "key19": "5ZfcWsNWLjxiNtrUU7518pALaPT95K7UcBhAMVzdM4GKoxQXFGhYvp1hdQUQoZ75tTssAZvDYAmPYeNeGRdiFyhi",
  "key20": "WMDhs6GffFdmQm8Ka4VTYKGoiWuQwBkt2SDYm2kVdTwouGTHYLKoJTdYJrZQ2Cjj3akwqYzqz2y6TXuNPPBowZB",
  "key21": "5nKF4A2xi8HkX343ExUma14NLKmMdW3zKUgihuEXuDsZjPeC9SQFU2FkwwiFS4jCoNoHjqaPHPqENei1Zo6tb2kW",
  "key22": "xpfoAXAcsbizaobBjkjvJYJQoCc4B9PkLh3r49Gwfg5zcsG77VzTbN7icdzHVonBBn5Bt8PK9UaJmXTG8FAKGTM",
  "key23": "3NewvezBR2dkrzBe4LG4m3mmbBaepZJWFUVPw5BrrUFpKCYd1cTMd7nAdubqR2HS3pBwuPeoM1RYb3at2x1aLYBj",
  "key24": "4QiWRyuHf19MJZXx8JyjRpPHuRqrnUYkJu977uaQ5CCYAow7oFRhEFhSQd4SpZjQoNiT9VxpcPguMSetFBCe6XCH",
  "key25": "mDpqWNXnDZv1Ncasj4KNCJWV1eMCwBkHQosKfVwVo3DN3c1eWhx2wpVzoNs5E7rb7NWAXShdpsJVCWsyBpUSxq8",
  "key26": "3TnU4xQjkTL1ULm7Pzfj5EosMKRzzG3yJwjwRxqGeWPRgYxsfhpT8mmx4svjnPjZFa8HLmaY2Rs28ZzBq3jw2AW6",
  "key27": "46ARU2nrkTXomqWFqwu7M9SuyNy5DVazPRbFUVX8KgPBh56reAMvMsKp9KzCHdt3hkUJdMC9o4NPvqZFb9dQoPZE",
  "key28": "2ENMRBmJXEMFEz2GxUsDjLnxiZrAvAbncbScdrxZBXBXdBrwH9sQpiq9gPNiPjStScuJgAApj2ajse2rVaSVJoUh",
  "key29": "5XA3pxp6AavZX5W1gokcJRnzyVCxPqTr1whHYaxNS81YTGaUwDq5T8oAJBo21mXpmEijLc8fLYWHB3edJRWDDUiN",
  "key30": "3VtwY1kiuDBBVCR6dFGQUrY7if5shS7ZWh9S2LKSX5giFwZzHgoVTkU22EzqkzKwuwnMZkepEzWmasCCqRuTWKGe",
  "key31": "45sRZ4ZPJZ5gGidGQcxvHyTeJYJFkzssWimEJr4S7drr3g3VBKbjHoR9dhFmKAtG8FezCDj4ccoEZpDu45zRXsoo",
  "key32": "4oFpWvbQCBYpYP5j5Ubed5DF7hjPBV2zTNsz8UXscXEMpdJ1J58gjKuPyoG6VtcbS744k7VreRzgRKU7KeRLvk4c",
  "key33": "2xF6bU5vMkcK2aErtTacAM45RLeu6FBXhxWswmD1owUYDNC7r2tvkSxsTrSRWzPoRnXMnF4aHFxB4DgaUfrxVo5r",
  "key34": "4CJsMm8v4FFjjJWNgxKDJEwihr8euT3b6Ke7fVLoXErXaw3Budkxi2Ga2X1BoQK5Vi6uoQ15dXFGXq8jeDgihw7T",
  "key35": "YzhaP2X4S9cVFN4SaaswqYjB87ML1K4TKVy7RKQ41Yvo9fDozwq2uwdXQAskMVcdY8SPeogEyzPu5ogb3iDLHw8",
  "key36": "7JgazEpnBCc7aBXLJ9siCfwRGr9mX6eUtNo7UewEwDEoM1nSwAbvxDnXKBs57hZSYaMGRan8cLuQYkWTLdrDbop",
  "key37": "MEqZ3wcaYZ66QLHAzt2TYvv7a8cduLEYjvVojNaSDzW1xL6sJavb5aRp9LXUWhgFyMP39hMGf1tiMH9oyHRLydd",
  "key38": "xoWW28JPvcCG68UPgj8Yie6jH1s2WwVZcpf43tYMTSTjRgZ6RvEFawpBeiDMFBzEGzWgjsNqrkyKs28x5n3AdzH",
  "key39": "3EWtp8nEzVFqU1J72MVKrt4JCqmTUAKD8pyDWgStZHS78tRwcuuRJfjVDm1Dc8evXEJr7gL7FMgHdRkH3LFNJ2Pf",
  "key40": "42B7KZHZKesnxMtaUDHFiRfYgEpeiGHpKMekyq614gGNQUcsqPP8JzctU19BipsyWotzrpZ4djF4yhGaDcjQQWQt",
  "key41": "AQgp7GByBTpW9ggeDbHRhkDjqcdMyqc299EHvJ6wQDFdFzkFULKQVaWDcZkgFm18ETucnyt6XrVXnn1sq2NeZMv",
  "key42": "JW8A5BNhgNbmRSE1XMgyTtFCnefJya9Mya2xSVdqXbn9Z1478t3jb23xH4eDm9PqT4frTFvgSBaBmxMNgrsbh2Z",
  "key43": "2urTwjkmunLEB7NFwPxfJLtNjBNUiwJPEhMLC3E6HhvMbHmoJCmYLd2s8ZPXdX8u4eerBHY2vmXgjLGYDJVAncRU",
  "key44": "2hZJFYoUJnPrURSu1wtLNdQm2ujPBRSGdNGT8chWmNqfZEyTbwEPeM4K9KEVE36mJ4hgDRhtv9kBBXbuYmbE6VEw"
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
