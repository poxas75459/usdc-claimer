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
    "4X3ooEkPFKy6cCZ2SsxoqvYXfBV5PP3BUnNMU4xUEqv3XWTW6KqHvoPQQ89rRketz3vkXZLt9ETDdoy4wqovMsdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fs4tTrsc42UsP1pTpdZQ6jxbjiuGjYnuNn9xpsfUZ7H6GGUcZQpVGviGHxxJLWC7N9FAt4LtT5AtgmJG6fp52d9",
  "key1": "uwGvzcYMzzz9vgLLjHaf5xGswSt5p8v6VNm5PszFd2ZsvhYJzGNMYsFSbgMQReNvJevnQW4GWHbUndrMpn4GUUW",
  "key2": "yM72G2SfonRoJ4CJNMUABqVKj8XUKhAD4syVADkNNDmeQq7vWyoxRmfxTgjAsVFBBsjV3bxBfCVaTnidmMCn2cX",
  "key3": "21iCGpNU1Jn8B9MKb1gyXdvSyMzEA5c9bCbs2g8MEaTEqMdtZmr7uRwNdzBb23kGXgXNi4PuaoWB1E4wSKYgH1ac",
  "key4": "4bGxW1PNuv76265roz1GEKMv4cB3prjNnhXvg5Co6EByx2CmggcrALVBqTG6XHwddGquJyTAcDW4Cner3apMBPo3",
  "key5": "4w8SLcgJms2gxeFDqnfADDmfqCzuiVkYnhmSgPy666uo75BtpGHVvf8CVBMERnCSUEuyRrtsAGUzQ4ZWR1kNBWu8",
  "key6": "5icVCKUBv33UkYiCAojYP7xk79L3u9cSdZERjxCBghhyaTSrBzjWzYG9sPPafbqP4ugdzgJYTNnDchs7cVQJvW8R",
  "key7": "5Ma1xaU8quPRRHJK5h9xhUCUjJ4cghFcjLbuc16Vg2faquvqCa6qZLPA52xnTob8BgtxpWZMBqJ6S5RiJRRPMdr9",
  "key8": "5ZUScoJ1t4AwnhkmfJ8gUCzpznLfLoxKfrTKqjx8WyDp7G13nTDy7UVAVZ2w4bDvUPRTsXyA39SbJRs33R2yDwC4",
  "key9": "5LBAe4bgq2UCSLhaM6CczZpLxrjj1KS7B5oasgHrP6PdspFADvCentKAVjezrMBP2APn5eFVBCLX5deZEd21UG73",
  "key10": "4sDzdbJtoQoiX52JvrB4hMzMn7HAbSAjdmEVWNzhweTZU4NyBtJ2LvXy5mYAjx4beMVRW42RuSygg6GWS1x5fHre",
  "key11": "5JqEyeECWeJhWFWR7Sg1C9yiuFDSuemU1ibrup6kogMoqZhtxmk19nAfDsPicCCygLApdNsMM3pzca1xPjF64aGb",
  "key12": "4vq3VU7HUXUib3tCAAidbGyggQsAVjhVucytXsiCvrApJ2z7PBHnYr91UvkcNkj7jqoQYgmG78EhnP345M8M8a7o",
  "key13": "3tGaT31wcH7rfASfKqcfe3mQmzieGMNvV15t6MV774VTBCrLCtWzQsKNSKxFMuwrDVG9HyYew9Ve6PdSv9z5qo3D",
  "key14": "2JAag9FJLzanoChzDh4pp9rGoayAws23JaFRfM96f9Sq9dtBFcCHqnVxApNWYR2hy5NTNa5d3d2HVsXNGAq2eRX3",
  "key15": "2jc2Hc1m3QPFHfk24679yiJXrzd3oVcmvbKbHnuuy5esdBDrkQY6NFDLte14ExDg5b3UHcdHtvxj6cBk1sY4DKmo",
  "key16": "5PQBEz6PtPi8knr5srvLLgVYA3s4e5UzMiiyvPrT3kncxGGkZAmccuhCMhM2b76RGFp1fpLdtcG4iYHZLHtGd1o7",
  "key17": "41hwVDLo5S6D499zDHtVmYNmjgXHnEzYthQZbaiDhQA6MnNTMmcroaZXp2hZP1MUW7qqyt1UzkYU2vEuv86poAvM",
  "key18": "4asjdDzKGmdTMBeCCe1Ci95xMXKw1e8NagUvKog27fsWwmksDWz8pBPtWot5y49YpHAuoyLS4928xpEVsia3pMx5",
  "key19": "31ccgxQqx4w9DPph9gfbPcoByQA7cLHQTGmN4EaUfKsaAkCoKKUvRfSiyqNGBVbqaVsVnTDpbQXtQGH33mixtyMW",
  "key20": "5gpsTVavM8S1TwNHUss7MkVj41gJWAcWgv3y1xKksTw3iptuDrBrKDkSyeYVruLqeufg38of31AuC3j3zaxd7HdL",
  "key21": "4sJRdnjZt24g6rRzAXcRQ72AsrBZrsvcGfbVKPvr9BqhX2MgkK5TvTHFd6MfP2dLV2qV3HZacKmkrHu8xmBBRw2S",
  "key22": "4mixTr5QUnANSnzKGNAoq6WNGQ7bj4mStMZSgScwtV3BVSFkLKWR22JYF4J9vCVbzMrT93n1yvGopM73C2235nBQ",
  "key23": "2PUCXc1zgbxBxHUoCB4B3PPi639JU2D92yctyFiyRR7u9njXFwHeB84yMuiYLF3EyXAzbASNiat5QiZaUorfYSEk",
  "key24": "3i9keY24ShKiyj9pcbPrfVGZhPCAdJhDZ43SC6MURnVWGAUQhR56nHJktGixNatpRyGL3JWXpPyToZhu831V9B6X",
  "key25": "3Kngk6K8akYn5P2ThhbbEkLCkZVpKKoiB8voJi4miK9KLbYn8dpinPFwd4R2PcTjMRsVnhxTLwA9wZK4AsGXvmcF",
  "key26": "4FYLCrmgvNABbyry7zhFeaHpPRoQ9B46R4eK7dHUg3XAKZFUUj9d4ANS2meB8myquLMhVRY1m7TqFCStacJQ38f5",
  "key27": "4LAFEzuz77A1wAgqF9ugiuuK12u42CRzyT7qFmoZhY2wExaKvMLUY4A8doNYVoW7krS91zYDcUgdKvqJvDtpaUdG",
  "key28": "4jhesB52XAS26oqKC3RCTdAESeiXtzXj6wtopSdwdBLYbXQXNbv8pAw8tadp7PjpeJGW4ZPLq8iH1Ez8E3roGSnZ",
  "key29": "2ZwikxVcbE74KhprXBtc1e7UZwebpimRfYtB81gU5yk1iPgGp1wueUABCi3vGnfs7g3UaJdt3n3m9GAKbnAEi442",
  "key30": "3Qbv2ZgBDSqpot4i2Cgba11W6oCCNwK4DG7CtVqqkUedJmfkEx14eG4B8oM7pUASNhWGFT8vmJtvHzFdd7DXrKLS",
  "key31": "2LrRXy2MYFnMAdXEYeSSCHbrHyN2BwjdQ6w59ZuCwtxixAEc49Uv1VXgSjdhmU2NXwGtzgzaBe2oDt28BkYw2AoK",
  "key32": "4hoL8XkwV7XCKwBWcjgzTaDguj8fZQLRZNAwBb57gmQKbzYYH9J7nE7D3auXz2ykUGjp5Lw1xNw3WKhiKm3Cav9g",
  "key33": "Eepn1dwkLmY6LbosMRxPRVzgGbGZYESQA436m2FQYgKGpmYgth72p6XL7vhMba3Q2kBGN7rLPziVvtfYq1mHhNh",
  "key34": "47znc4nsfUhN5y2sUk76E7MRktHKPhibA3U3TrJTMVe1Q5aa2ZiajkKMZepSGQ9obUzr9KU6wBjqMS4S1efSfJq8",
  "key35": "JYNTDUaJUtNDQxkJR4WLLdqYJx2ZMEjshdUFy6QcK47RrwiwUFajsYUCWyFuUA37DXhU4wm84QwqEut5GXRjbgT"
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
