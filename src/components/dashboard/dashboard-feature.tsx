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
    "3rid93mNvQmAtEU4tApRvQj3nK4qBuPXP8eK1vFTvEKqUk9XiK1nKLRxJvZFfJmWVKL2mi43Vkeki1NwkACq38Bq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o75BXWb1dvKSToTRbarTEypeo5wg2vcFRd4GccUfSBxGeqP7KN7MBMo3hPnW8W543CkL2AH9WvLjPPJexzWwDcd",
  "key1": "5xuLqAzbk1dxh4uLstGennAvbtkGR93vGD8VzLbHd7wkAQqaBMgt587ZnEV8gCpiNqDSmVH8pBFsMTte8TujvUma",
  "key2": "4wkCS9bpTeuCpS9qDh459Eu8JFD3vaR5MzTcEzr2cgqocfmp1MBoCcP1C8UQQuW7SM3k23hyVcezfmujzhzEUrUf",
  "key3": "4mMqh8LXVTkZL6Jepote38yKEXBAJdu2otq9NuFD6pcfQH23j3s588VL34jzY5gNLV3RtuscvH3TMJTS8jAU4jbv",
  "key4": "5tjRD3xoh9H52QQdib8fYGYspyjVSWmwSwZMXGVJEySSCBSu5kK5pKJX182dxbjVB77Q6UPf5CQ3i6AKD6WmDf38",
  "key5": "4YXthiSttEU6j1e6GgczN4VSYi1bwsS7hUCDJ9E3g1S4quvAnbw8CBNix1tdRY7FmHkYGw18DLxshwSxCBxJDNk7",
  "key6": "D39d14oeXMGk5YqNGkXUUaCYiNTvfb7Be5zDsQSKFQ3EktWE31rUhwynFEE3jBLKstsZ8MaiCdYivCG1N9Tq151",
  "key7": "5MV4SeLd67qxSorQa8WmnKSjsUisDvmucoCLpiKyoN3TBKyVyvSxPE45SAcBmeSsfp4Lub2mZgKNFoRYadkNdDJY",
  "key8": "2KhdEFZaHPuTDe4zAUB99aSGzzfpZiJSkTxwj7eetb2iP4vuX6UEALcuFQ3RRZ9dSCWxVt7wX85xBDXHQDDuCqs4",
  "key9": "4vpDebJiHUpTEttou3xuu2bMo4oz5MBkSSDMzMiPkxvNa3vBEtvvud16QnsgSSuN18iAvwSw1Mhx8rqAu8cMd1us",
  "key10": "3wSvNfJAd9XhPh3n2NqTjmjSSncPYdv1cpui4rMS7UBbsQqWEJutJuLV1TWuN9dq5S9SsyhJDrM2jRJigP42ffR3",
  "key11": "3n2MQfpvMUBfJT7B4gV5petDAkNoA2dKYNNp9ZiQYwD6tHeBH47SGwdPP3GDbVTrSX51SrrVJN2895q9LKEjEjQa",
  "key12": "21EfdgzjcwWkCPwisdok4D2BNEKNPzXHsAmbyjgB68Li8H6cHyNP776JvUmi5YuMa7o8g5FBqqed1oBujAzX6R6U",
  "key13": "X2MBn9g1ZL8ydN29cvyGuGXptK8CkZpfX1badVWKvUxammhn14WEYw1RpFzj4gx6AC7GqDSWZC4YsmipmdFBuWJ",
  "key14": "64jbAQg4baJmit7z1N1yzq1iX9BgUA4AQu8EgpAqQ7YK9P862PbF6aX7yLULG1AuZUeDgw2pJJb4F8Ys5MTqJfAx",
  "key15": "3Mis8uNVrJ8ZA8Yy21vMj4AZH5GtJDF8FZZaKhuNZWBTx1tyia7Hr1GQiDt1gJZbL8VsMavSErkyBZwEhaEQfcWt",
  "key16": "36hrgEp7azNb8PoWe4rwr93e9PFergmZ6chJ1Qykw149cqtmE5KEgsNjtSMDvXmy8k5ebwq6zJ2KHDv88giVcwTw",
  "key17": "5hFFQZoREZ9q8SteQ2pSPNUBHvsUt1NgMToZk9c67e6NWiTs6bnYe8fVh8AV8LLtPUC4zK7UK6Bpn9ErtNHyEw7D",
  "key18": "3jBL4nSUdygv4Gxt6cxfnikRVTzbSGK4byrHf25nnb8cthVog2CxYAU2hYGSvNwCWFbZn5TzFQWrcJzJsRwt2FUp",
  "key19": "5eF8zsRDR3ieXgi3dZjaVzjxeCxeVrv8qKBXKLYbs3qK8ja3LRsQvS8ru1fkSaJK74PeobqhmguWmedCVMipW6Wf",
  "key20": "aUF2KWsxZ5y5Qj3pzBkXR6dRZvPA9W2x5V2iBmbPeQP6sTEf27gXhcdHaN2VWSaD2Weg5x9nqDwsReTMExSpTnP",
  "key21": "5Dzt4txmXmKejxwfzVZ89u9EXv1yY5pTZGw8FLDjA3jYE4zfeQUVbGNQ5JG5DeWRSmfwYyqcF9nMuq4JUuB6HAmz",
  "key22": "SdykRnHZ572GLejyPd94iY4pmyq4iMcQ87Q1i8KaJd3qKnu5q6cJQgn1cLxa9BKyfJfT4T1tZ5pDXCV4K7PN6YC",
  "key23": "2pfn4qfDmPw37X8TsD6izVhEvyFt2VLMVKmZ3cYEGiGshGKfUbvfzc1mr7qjBbsUaqQ466VDPV711KZ6c2JcwXMC",
  "key24": "YXHcK9ditQophdqqtQXCJyKGzQACszPg4wPH1fLQtz8mojGMN9kdCwa2rLpEDFMZ6aqwezNqmDgFFP6usSKCErC",
  "key25": "5LxzgGPbUSxrFhdCzZas3Qz9g3bs4BEbqWPc2YKZVpB3uresj4zehjeeYHiFQZarZB5Vb673mLra48ZbnTcs2q4m",
  "key26": "55cjc4C3LEw2tHeapPeazhS4d8UsHXRcKVoge8YN17DUucW9usNFVACHAbw2Q9YosaWjbFwariS1wZXUyRKRJerG",
  "key27": "4odjKGsP8HV9MfecLEU53GAkxqxa95Tf2NLfHb68AtGJL3yZEEG4gHThEBaT5jacECtSwfAbeavPLkEuTvFS6nU9",
  "key28": "43LhUREmY2SdnikSS9NPz15Z4iLtWrW2MJM57qUkq5G9k66PHReFQ3q7xECQGVbmEDu2wmDUD1vtai2HZ72aCZm5",
  "key29": "3GbpoJCzvHM3UjxLUUtpFngovync6CnB4bTbqgxWFVfxMAqm1cDnH1N7HsCAgjEpibceJBkcZqM8UVDRwcVwcZUy",
  "key30": "Y9WPLkH5HtuNGAziPnuR5WMjU9Npq5yXBwWNxVQtBByass4FAMGZz3pNece3noVqb3GEja3gTrsKmbM7MVBnVUN",
  "key31": "z4NEpoz12kV8uaGh5Xp4RXrBgg2n9PWK9CeBqW3yJA7E5ZFXGWSp8o5CKxaNQCShkx1myh5PPrs2PxxRtStbCfe",
  "key32": "5YxcKiKAdSiT1QiNPeDAJKDmmiRCTD4qnUQcFMLWdSRxW1XBocVXg4BFnWY2jt2k7eKuqysuspYWJPP7yGPJfS2v",
  "key33": "2vPcjaMUdq8P5dsb2sLZTSTJrYqbHCDBnz9CcxuP7oBUCrGYrcZFuargjzk97UBkKiNituvi44KnnxKupssy1o5g",
  "key34": "4zpE8BMW6tPS4LdKNsqawZcZatMZsZWpqtGnYwYqZkXMWN7RHpCHPQFUDZZ1cQQiaXHyz3yuX3Mxf5VZwUwCAhE4",
  "key35": "nCCDgEZFiwLhKHHe6tuppe41M6q8qoC2ktX8XsRLahhQiHwGBnEFxUVHVzkk7y7T4zfa8NrNS59SuKiF1DQhq2c",
  "key36": "Vp16HSThS2U7fvk53uTXB8hdJGBnznTmAYEbocgLrSYKqyT7sk4viXdQxMuRR6p92BMrCPXAbRmJapxKr66XKAQ",
  "key37": "3hTG8zFyidWDGkrG5fcohSCw2jxyA6wavnzNBr6zeWTMc8wpJ99vByEKomH8Ym2qunJXZqE6X8ZCNBCg9UVW1xcm",
  "key38": "2PYKLgY8L4rVGALfpnMixm7XPWebH5B6pLsAmegHBYSujGuLC9EyextdKiagkaNsGgkuLVsGKoNHED1qci9Jzyoo"
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
