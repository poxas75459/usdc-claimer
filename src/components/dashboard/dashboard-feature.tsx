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
    "5a7tMSWSjaedAHPR1fPSuvfVqdZ6SUQfDDsypTcCpusN6raGSkwEED7NpaUBxGu81DNiz87tDT3B4rwC8SeD2hk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rnViZx4wfX92jWwuiUvXhUfmHgu8kcq5HLzpop1sVJdmaxz7Gyo9nKm6bBirxe6nyuSjgf82yBpGcaYBUxJpEmp",
  "key1": "2Q4HftS1cTAoddzACwNuMTZrpy5pYoJFaAMA9d35NZGvikm5p6kEkgEUmt8fzPx6ZpUMAgeNR6FKGpoSkJe6eR7C",
  "key2": "3pAWA2p3TQTgi8LZrKFFh9iBkkJs3juUSxNnjsyN6gUsFK3Z43B11w23W75rTHC6rNGHJnynNfBzWTMm5HQXDGra",
  "key3": "QnLyADX9igexnDoLrbCBaKkrp4EsK1t9MNEBNXMxSB2QmW7bTyggK2n5NgngBy8H4Qt6fDMWuRojrTQjLGgGguG",
  "key4": "39MXRkzTcV86XDC7LiVYDKAEvb6CUQojjg1J1Dj7B6tptLdU53MyarryrcNYZiE4TipXez2puhFVTcfpp1J2ZX5D",
  "key5": "4QEmERRRb6YHWKzAbWi2YSPqDdNS8JfPaHFsbAtpPtPiVmnWMf8X7SV6vLdQyXTZKcacTfn6qrQDm4LaYdJyGeMN",
  "key6": "3Tg38yb3s5frQHsUxDsf1ZWRN7mkgQzneqbeQoVUyS22FhSKyt9kk2VZFYqiMBJinZiCorAbHEQniHqBApzMnpY3",
  "key7": "3Cnxa1qbFzupMRQ8MQFnyqcLattJHQ6eP2o6Az6BeJYjThXDcWS2cTAGCqmoXCVvpwtVQKro8Yr8MHctibyvWEEY",
  "key8": "5A7FpoepaA7J3B1rhfRDCjUcZyovKHpsNd9nWN3z3UcLiqJcKkVhXHRUjnbPLwi8h2swmTC4wfTt3bPzjy2EPfsW",
  "key9": "5aYxNc8QV6J8aTkhSJDSY4C2LFrCnpWEe25m8nRQtepEeRmV78EEHvDBR6V95zYHrStiDdwyBGHWxLL89ZZZPuXX",
  "key10": "34EZesmJt5yrZGMoHCMkWbKQQKiN6u5Y5idwYdcQXFj6L4n31Kr6tb1FUVv13V3sPXWqdNgyGV6VBPzZwUUwdVjs",
  "key11": "vSxoSpoLKMYHHPjaQsL1jvceKhsKRZqUVWFJ5FXdggmktih2UVFSkfD8Qc6oRnS2v9TX7Y6TYQnyqznVXfZpKVd",
  "key12": "5oRs7LZjNTMpmyGh77KhcUEYCddBfPgNzqhV6oAJ4LgYtRw7tiZBjkgTU3mPgLbWSUcyzYAg8wr3yi2XKWyPmCfM",
  "key13": "5QrKzXUQtKi3GWGpsQy432Bpypg2MuEPj4GdxRxzMngUnVyXVE2rdariN5s2SNApv21bBQ7wMwea2Q1uqFRjSSFr",
  "key14": "37Ggk8ETi3uGRgKHVUi3UqV8gaKcxVfp1yE6WtYTRAG18L87thKLZg7osw6YcaGmoaxcULZzbuaLcVovQRzNKVF6",
  "key15": "WScnZzMSMCPTtLi7Pr3Zg8gyHUE2kUS4fW4zjtL89EYLX3JSj3hQs7EeHm7m7E3bEfebQjMDcF3vEpzxLgaa1FF",
  "key16": "5jMAuzZbsyAfcTJ4t56dRE7JUdjrwgA187UTgkTX5ujhnykAdzK2NT1Jy2VBqUwH2Cgo3ShusPi1TieE8R6B6LfU",
  "key17": "57hbjgDxiBfhqZb1wTr6VFipYtCTRxAGgcdqUyGyw1LNcztyJKS5wB4aGFk541d2Hhq6BaCYg1rFKuhs2YKysHWU",
  "key18": "3xYXD51UBaZqPx9ZxVquQNZkuAr8y2FQocRbKUvi1AKcxodT7VtAcXcAWDfSETaVVWkADZy4WpoFaEyT7BUs4fvS",
  "key19": "nhVGx441UczUEqgpEpFaCBcWv4JQAnbBi8C9gJYPXVhdz3wq36qaFvrhrcqWH7hfZ1cz3csBfFXGASvzjWKs4MJ",
  "key20": "496W1CDUPPTBucKwa7F6dDNWHTxmJJJGLBcFghrWkaqbcFTqZshk67BnMrRrNKnVkd3xzrj2iQEXeggm5trjQMUT",
  "key21": "2KTP4dHpGXc6WvG8SBcE7Aoz1q1R8BTnp8VQYWeQjMsLscPcxYMyUYSEQhhTAHN72QKbtAnKpjJxYR7FFSy3fXD4",
  "key22": "35Le2cenCPzfN5y287rbtBa6KeJTM2Xh4XTynHVo5rF8WJYgszvFiYi2sj1QhjztaijHD8spwjDkDzSxDXaxHhcX",
  "key23": "3GafTJhZh1nwZRhdwhaSjd5jjpQcE2dYkf3sgdi9as9EpusMgJuk4mp7Z87RxPHnFcW5M7DV7QXZKnbR2gXFtjpX",
  "key24": "K7qYc2wmZnwxp9Ms4pc5sNmCAMuKiFBWmbxJz32ZxmUujdahyAqvJEiFW6E4VbqNYMP4E6RNneyuGPyEtGtP36u",
  "key25": "2EQEUxjta19GFX9SH1sn9hq1W6GZTjFCFRVgUHfyhRKeuLt7JDP6ZcqhEuKroLi1vEfhU95LhR7tCqjUPdoMkA2G",
  "key26": "47S7hzD328EWPUoFhnko1d2BGNFXtmF42huxaTqSGHztqeUAj81tgVA8SwbQ2j6Y4AJERfQoyLAWAVAN3v38Lx18",
  "key27": "51No2EoAXjRNVQHcTATHk8XSnudBfhJ7VrHM2WRvmrwgALKV3p3W6VQTUxcvmn8NDJFn4aKd4kZ4xJ46qQGmi3Pa",
  "key28": "htWBHetnraYFYRt1mzMRLNgfikywHD9fRHtHNWD4TRpdw325uaxUcJnPgwiYXy17bRy84nx7B63ann4q7Ka5fBm",
  "key29": "4D8kH4CCPqqYzyHZkBbVhLA5PUnMygo26kYirxzF8tag86if75ddxdJP9H2FpMxTHwmTU2o57dDHAomitXuc9YDs",
  "key30": "65K76bDjAD8uC8Dxj48rRL4d7BRnjRaXmFjJvh3LNkyt6wpjWExaCFKcrnKp3gr2csvqpTocVrLwzk8KxzJufaWC",
  "key31": "3jyKHWpHD37PsT9mbTsFQcy5537mgiFARXC72jsHoFF1FTuLRmSqTdMDjeD9L1PHcjZ7rPsdxsnGTRmvj1aFG2C2",
  "key32": "2KJz3Gtn1ix6yz2cgTFG3qBbELBHD2uVkDuDPeSytk8D8ud3zXoVZfoUyij9vNLuTmte7oSP5Xf3t3nfVrpSVhLd",
  "key33": "4vZBxAM3hb9jpyrYSBikULtHdzU7qZTrfPDjap6uXANQGtC6HnghSCXmwZWeg6oi76KqYnFvoHL61DpveSgvarhD",
  "key34": "3K1ojAVQHypTLWNypquWB9o6hrsJ4rfCv2S2QWDg6bSwnGs4FnQB8bTWevKYTvFAHwCGEne7E2N7m76baSjD4JG3",
  "key35": "5fCdXA35fjuFmeUgzVECPT42tAfNqXBVCjJdFFykEsTNaRa8fuqebHmPKWeoVxyGHehuem8cufxG3mGcfSsJwmKK",
  "key36": "M1HnN6nDyrr4jSeMwk7qXj7RXMsuGbUK6gNz9QKRg77n289yorm7vVqsY9iPnvYkb2jtjt2XMZ97pkUVQsSUcMz",
  "key37": "3SUDSDuYKsyyvmLFkQHVKfZvLajHdXrtMcu8rUnTGBpZa6iQVKiMcVhgfJqyBGDFUa4eqVzuwYyvEGJz8vmygS17",
  "key38": "4gxjtRS71q1EzKjjKQ6F1WPkhQLQmb9bYhDZZWkbvj1VWk7Bdzk3V1s7sGVJQLDgJTM8m3bCawTz8mmYtN7XtmJx",
  "key39": "2xSXqnZnNSYXsVW9oYRqNZbfW1twcLoZXMtn8UU4motT7t3czHYGpjQmFMgSSsDnsScp81J1VsHZzu6Qjpc6mCXv",
  "key40": "5vhEfcGbEqq4ihbpKTSLG2QjM9ytPa4GtF7snTo2dmUidSgKCdJNShGHA6pV7oai4g9R5SgQzNqGg6LRJ6PUhS1J",
  "key41": "4o7TxJ41AA23ybuMYJMrRtH8BejkVYitrAj4saFWdvkWa57Too35qcxcdtcyHApp4P1qJTu6u8Acg3ZGFZu41m2U",
  "key42": "3xaV4StjA7Qhrdzet9uoBuQFwK3qfRmeAn7LimhkaF4xsmss528wHYivRbcrYBSWtfzMUsLVfgvpx5FLWHQzcei8",
  "key43": "21XzVoW5emF1qrrCo3N7wTFhMhT46zdSm51xpER4bHV8Ziw4obBUfR5daEqGEtVMdoe5sqrt4uzT61kohk26KqLo",
  "key44": "3MWPLY4aa2kLEAXjoxB5Dwb9pEgou88fBnJTb45SkgVCFGQjxffZYA1tPEySL3LuNtVUNwhPVWMzZc94GY63vM8m",
  "key45": "33YmNTZReEC8uYQa9cGXJQTbetT6VNWQZkWmoykvyqLHi7eCqgVQDLdxxZXh2JrjH8YAkBRZgrPYDJ4VA8MCYiMN",
  "key46": "3WfWYbx8srvNhxM1N3KkW1u91p6XDizWuPhcqPqkDh7zMU5EQY653SuP33hfuVENDyM6oTrmZd43E3a2eddntuxC",
  "key47": "2sk1twyasPeoSsFGVSbfrFyTGwvkg8ceWWrRdSTcy8F9zfYx7MhacUxJVtm1nyKCWBLEei8P6q9dsSiFYzSsrxFe",
  "key48": "yDkiio3DNj7QJc9PT5r4fXpEnFRzLzyU9Q3GV9ca4QgMrs5MZVat193mfWLRfsynFS3wDEFVu6KN6P5yZyae35G",
  "key49": "2DuQoYduocqhvCeETXj86y14aXmfJcbCUHekNuobP727oTiBMDvppF7eb5CzYW1YAUsrCNGFGwa63ECx1znBxREj"
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
