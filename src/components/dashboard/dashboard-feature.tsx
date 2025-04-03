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
    "TGJUpXY9j2b3wbye6EpcxsBaYJFwMEtaYZ6SpkhARr4pbH5uzRjn2Cg95xLvCtZxf4WS1LkwaMNduCQDDgrPJfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cz6FckcSU9wU9SZwKKLPKUaHNFcSbxUaTJ4VAknpKT6oWnpDneMNoVoTuZoh6NvJZ9Bg1MTv279ZMNamHQnPiH5",
  "key1": "3pvSyU7tFTLAx3QTnrwubnbsbakv5xuTHu15ee8y7yVN9qhmghTeMB85yoZaaBDQiFSNZ4kKqsG8joCHxG1wdzA7",
  "key2": "3mYATueHDPjvuQDnFqpqRU4pKtnDiYHJ3Q1h62zmpxoyS3bJwAqUfRv6hiEdiKEeqtJauLtMkxKugnjoEZw6deW3",
  "key3": "4XPjnkoMm9iKGL4vgmTfRwc8QLr2uc62nyiJMw8BvwvaxpHt9PXXMikj5fQLbT5G35GFDfYxsfwDR6UUEtqZghL5",
  "key4": "2bKk7TQ3qBruAaVq1jMRSUNQ7E5y7qV3Ufu5jSLQLozRuBSJ8t9g7drd7Fvv2hdGYDaekcjiPbzgqaQJ68buvzJS",
  "key5": "5mpPHSMM9Qwm37cnG68b2NorLDX1AP37orPsefhqVZcY2bMUHSSY2yCagG61erpfju3BU7ENsLTZW4MhUhNKi78U",
  "key6": "3pEqrkreHgZ61BLwcKWd3cCDgkf5L7emRs3ED9w4BmnG8N7hDYegeuCobxrafXXf7tD7a3BVbLs1PBVjpD81cHJP",
  "key7": "5TH3Rktmuc6pzvUnQLxDRfzixm5KdxZaeL3D5jmCpYxU8sETnJ4od3t9B1HXv5MHHb23MGQ1Ko8oNgJDfjh1ncqq",
  "key8": "5WBB6tWC2hycmJHE6KyAa7qaeu2mHBVjMLAtWwkLv6nXY88VigqZg6STKrzmyE4kyamuu1V9J8TP5or3rLGR98jn",
  "key9": "4Z64UzbLhj3Gqo7ABuoWXyizgeaDXZHyfCqQ8T4oHMdMCGq6BXaDsoBe4aJq8TdWkAg4hJuq6yKkD3MK85tKu4cZ",
  "key10": "5TCVKDGqNh32nBHd6zvXEDRZAMdDTuGgcqUYA8ofzYViNGmbrsHetsRujP5o6QGqxMyFaEaiTQgetDhVkcViy3NH",
  "key11": "2BYG8fPTDxAKps4Qxjn3rhiHQerhMZMKXswo37U9hFtvRm8a1HeisJ2iSZkKyGQvw2DQWG3MA1tpNi26NV1LXa48",
  "key12": "26szMdcW9mScbeQaZVnDWmx6WGazStpMs2vS1b9s4YcQ577GdbKJNBcMiaz5aVWnHMr5vfZ6c71kHBuTK7sKtTJy",
  "key13": "g72iGE5mTVZk926GBGk5Db3nQEmj4bPtAeBmtV2yyhHjriWFAdw5QRkeRYY8cE23AZPWWTGH5VHDEScGjXogjr3",
  "key14": "4og3ZL6c1zv2B1wG6uCbu77WqsjjNdPpDh5iQKBn92ZGtbVgm4PRTq1F81XP3uEMsXEeRfWbvoVFdRhMctgrCHtx",
  "key15": "59bL3k6oEMHASzW46nvjkyuL46Gxecbnx3yXC1muBpR18KpVre8598Szt2k7GZRu4dCLzc6qwWqUdSGPkFHip4os",
  "key16": "4gBh9ukembXqTVsMNki9zPtiChP9R8Zpc8S9Rf9oiyyBnEQVrnF7uPGq5xvoa4kFRYHb2rAZ3RbjTUCfp4wafdem",
  "key17": "4AMYnuaAAdAzK6JRFevPihMSrzdMe9mSK9c6bHu7Wz4m8CJbtc3HEDGxmHGdYEfCQvGs9XwNooo5KGuJP91xmoBw",
  "key18": "4TtcvPv6KLGAbctsTHRXbSvkkMsRfNggJTwNRdaYZ6kMd2QTFQMwmarMzQbaS2hh7Gnhp5EnS14S3NW3WwSvRdfx",
  "key19": "2sMi9bACVo5e56di1navdxFEKXijA6g3tXLSoaje1Ethjdz3bMJwp1Gg9YXs8beujDT6LxhAPj5kCFemZXyUgvxw",
  "key20": "8EsTvpLZT5JiVZpx1eia9riPHe2LjKjApAuN1YysaxMTdXbZJG2Xb2CW2WPjcPoRnirCLVeUKk266BWAiNvYAAL",
  "key21": "g5mjBbNdbtVW6hiLgTRN99NRatuEdcEa3bk2hHdfAQZBGAwEnfGmcH935fcdeMZVjqZRpt1QUaACnKj6jFYmCnf",
  "key22": "3HUGgmj7qNDqbmo1jaUEkHaJraNXDR2uyGfNVysajZ5RiayzYkyMzcxfjpFitbJAGovSMUw65HgzGAN685mcpeTW",
  "key23": "z8ePabYKHZNx1oSrbi8N7qZjoEBBQXLw8F3QawyDv4UJSvihqe1CTHRDfR9sd2MCALAyE2KcRtXE52Jw5DNLPp4",
  "key24": "2bekBs7iNAo3fV1WLiAgq9KUt5xnuMa5y7Y15kmBEXuQCB8Bc8hTcKVjk3LoU8MtNt4fmCkpRAhDQH21JyT1ojQL",
  "key25": "5n4uNmcEWygdbw8i8cibftDZ4xnMpCuvBc97xhrskWKjEvS7rwhotftJCyzxGeV5UgujRBgXshny4UdSUbVZ7HGe",
  "key26": "5E79Y1ZeziWc6Aa2okQ8Lg9zAnRUDZUQBZUwPuPLaYiQrRCQ4dFDea1VyAeSm8idQ4GvXV61jhoEr9ke2N3nweay",
  "key27": "5HQHBXVh8BeV6YQVvJkdLrxzExW8zRsfg2m4EQGbiyuwtKE6BToQRaDWkHCbGJWjZjChGNxM5mwBBkHKN4fpUgSp",
  "key28": "2if1xpTkYUPAwNTqd6z4miahwDbm4SrB6J91Pb7RzwKdYYJi4ZaYBuZQtGBPq9ZJVJXj8z4Nguw16At6X4wYhkTK",
  "key29": "3cu2yDt8qQz74EAdxqjCTgy4cRajtrmbJU4Ckipbc1pr5fk8JFTdfYYyxsdywTtdmV1QxGqbjitYLQGp838ERaGk",
  "key30": "2PXxLq5BqXEkK8DShyh4r8qMR7mf3BimW27Mvv6EM3vjHkTsZTvgmqnp1epF6bksTUhDGnKWh61ScXEwe6gnJFad",
  "key31": "4f4hfPaSnkFVvhDcTpKxedBc6zvtXActBXmP5SF8CnzHVCp2Btq5uGzukwkEkVsqZhUiFcA1useBocESayP1iCL5",
  "key32": "ZrgxbRySpAs5wEW9oHazNgZHGYxtBXpKWcjHqrKQcRAeGUTnNxiSd6GWgQqdPvTLXYxzL3Tibf3mVVad5EG3mzJ",
  "key33": "2QsoVJoYaMyM7wv3AwB3vdGyUf4wUtyy3Y2qeVyDb9vsJ14J5bXxT1hHgJHyY9eV2BYWbDxoYw35cEVUqR4zYDwx",
  "key34": "3qHqejaqGAnoD6f259wfwUExgosxu6UuP2QUdoJs8CeLzJT9c1PTnckVbxDMx7JGxGGDrzAvK4w6FZdnM2kfTVip",
  "key35": "2pBC5p3vadWkZVNNoM3tHUCYdGmtZvQWbUwThyzGRf2vey1jsoNq1UpjTMeTZZaq1yFuwYwqFpKdpryM7oeV9zzz",
  "key36": "pTPAd8TCZDAKSgN29SKeMyZtGY2kyABE9u85PdWf6nYGnTqoUWbSp7v4i8LMAodTU3uQ3a6HUd3ebRG7sqySvpG",
  "key37": "47m6mWDULSn7ZwxfrtJ3kfR6qcswMPiuqUrHvEHKwsoUU2VLwfkMxwmTyAxz5D7vakGgsg1avC3xxpWoixq1KYci",
  "key38": "5n82UDRsj35PezPdwtX2Z3ZGbET8Ycr5MZZ2ijAoeiVbHFiwagfDBfB4WLNMrGRuZT9MXLnL9j9oPkkQNKAi2kb3",
  "key39": "58z9BSYryJKZqYvcVqmPahdEb4fWVwrZhh5tQpnyJ48PB7aSa8KhENqNLpMy97jixpK4Fx6NHGsRnHuKpcvCT9rb",
  "key40": "4Dsrp2TcprTvAVk4eF4zV8koGg6xMciyXYMR2WgknkmUG4ki3mYcxtTt29f3Tmha7XPC2q4Q5CwPowHiwgWc7ZXZ",
  "key41": "2UmN5chL2d6pPmech7AJpLrdL88HfXRBYsYyzMdm87USdtXYKQXBrwto6ZFe3mqkE4RPE7Kn9v3t3Pv3STLBgppJ",
  "key42": "2ZrMvZxtB952hN1hXNq9T2vRChKJgsoGGqZhXTHqTBQ5phrqVv4mMAMJ3vgZDWjNHyRESXqeTYYC6ubMtsavTN25"
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
