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
    "Y3aH9MvWmmwkXn2yVhjKZqoSyvixhsK1oMpR3bXXXMsRVVgxk4UbhqbLya1J7TnVUomBY3ytG7nbCZFFKsMUXH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JxPs3SRcQC1Gwk9x5iS7R63hByREZbuEPgh4iFj8MJ1GnKa4w74nACTfVvVrfQT5eCKwZsMLaiWoQpimuAaRskQ",
  "key1": "5t8HyM4gZhyyXjaM8tqXjX3XqExMfCKDZ4nMutnTCftmFh2BjfQT9B4M9JZsEPsG2Y3zbLsixofqy3rHA1SqQupt",
  "key2": "45a6wrqAisDwBydf1dLJLFoj6SpvpyCTp6sZQpwTF1nj5wFJ3AyNvg8txNf7yhv4fK6c6BKkT5JxmAKikMAn5d4o",
  "key3": "2XCfgauDcmM8qTRXd4jLB41X58xuZ1vwbxnWautjoDzmBrRnRAx6ZwycMi5cvYaKj3XWERpyAuKFyQW1kZ82JmRq",
  "key4": "2aZjvvB4VXXHLA1SmWqUmsd9NKr9YSxmh9Fu66c7R1zwyzZmuL2vU3oEQcJB4JamrPaHmetACPMY9ubh2wMK6Zwp",
  "key5": "4tBvdFJGB7rutvkZNPJZqTEGs97NEc2EmZGMURQsuRZuRLiWwysyg4KH85wN8QJ1robxaT5qZCCgTV2ChVGQxFt1",
  "key6": "3LF3GAM17A89UnaEpsoctjq6JeEiFn8iMdNqGcVAemYo4Cs9H1zJ6pxb7nFDk7pb5JEmioWyLQ74dGk6r4z5VebH",
  "key7": "2zXAcFAg6unHPAxubrxGuR8j3T9Ska1m3eBhM2nKbhb1kip4sc2WYzjFBZaU9Nfazu84emihaGtDDyF5A5M244q",
  "key8": "2s9SnPv1vEpRzZayDmrM1wuA6BSDp1BmJtBp8xbuaYvLyjJ5MJVLGj88s5wjtr2mLnAYzjpzcUMBGzXiNtzp2oaU",
  "key9": "5Go2uTB897mWg8VG3eFq9ctQgLfNZtjnGRPSkkGwDcZzSMEq7u7asgbziaFEmZg5suANzwg3G1Q2FH4aCbkdXyYk",
  "key10": "5EnzYnXnY69Ud2gStS1mgH2rxLMrTzfFxF5zt9BDCXmxuSohJCnR2a89XnouJJdQpXyBpvouxxQF8N5xzNze8XBu",
  "key11": "RgqZ2TZ1XmgDcit33pQgQ4yUquT7fLZyzZCX4r8F7kks4fUytTRb88mzjptVagouw7ctmDUEzMVv5RKc8z2yz9o",
  "key12": "2T2ARHpztkQxfYV4JwpcJJaW3UL79WZAuWZQKJw7aEjtco5Cg1S1SwhAQcH39XhicEHicDSfMr7b8pTqMMwMw8eg",
  "key13": "3d7HB7xKbGJ3BRmcRb6us5FaiQ96nFoukF2xbJmckTT3fToSMEvbLhdkh1r4u3gRQVDstrtEbQ9sxq71zkS9MMkh",
  "key14": "3RZoXsbL37UBx7S5No596TAVnkEBLM8ji6aWFbfdvfqrBJbxG1BNhueoRtoYCtESQPNeqnWiyvLuxfAqC3MqcoqG",
  "key15": "5h7G5MuUj4ZpN2NJXubTvDh8XKXnDJeydChsNdGEGDfXcWEYSrVxdR4cPiLGSSxgVBxDawy1exchj9qpE6RsMUUS",
  "key16": "3SnddWixsWADphxat45H3A2vtD6cg3Am6zr5KCKVSWnAXgJvtrq56gBGRgNCkeKexUeD1PnpABRudAVqwcRPQh7G",
  "key17": "2YCMCAKxHB2ZwXE4fuFaxwL5WN5moCWHRXYD9167R9vjH62diEX9G6RJkGyaw4FPJTfs9khDjHPjhkAoHF8SfbvG",
  "key18": "2dJQZDZykZLaqCHtaFzu8bTnY4mvqaVtEduxaGzzwQuv3r1GCEvyeeUh4iNPGB3g7iQENnitave35SNUCVA6i7rG",
  "key19": "3FQY78CUU6AuLMvHrqZQYYKGjoDD6ifDTgGFFXbAmgnqk4GZaAuYNY3TUVnDcRHU9awpXhvLPj8RousGBKLepPKf",
  "key20": "2UWYTtVESaBpnT5btvGZQ2zgswSGAts3TTVKSFmo7EVCk3wneZSCtpXQzkn412bKnzEWs3TXvumHLHJfND9vLU4d",
  "key21": "3iYMuJ3ZxUX9pnU7UADZmDYm39MiyafzJDW8UjwcQSuAMBWaPnD4j2RGMPYXwT2bp3sNEWDgtTiQRf2TsxPrRZsT",
  "key22": "2T2yFgNADNJ6L5cMxEeVUxqtTgXD4yw4hdyUwpYN5gouHRCgZKXP52nrwFwSpK1VFxxAshEBZY54dZQwQ4nsqv7z",
  "key23": "5dvADfBhncpXYhPq8fFs3i319iX7EbniTFNfmVsATTvaPK2VEMfxRsmLpF3MXa6CzMbvsTeXGJnZN1xyCyQBYPXc",
  "key24": "3Mm9bFaoWxBnXJMZDwiJSwDhuctnaLJewk8ghKRLs3cgPbhUtfBwZaHTLBTy9TVn5BdhC5B4fSpmvoeYKtgehkYC",
  "key25": "3bfdeBu4NbnfdSX3QfnL28H91Fod1cuY7hyMLGeNDsz5nuyUHje8F7v9P7kJSWdHRTJ6DUWJd4fbJFxeefMG5Awo",
  "key26": "3iSzbh9KANfByrwSChZKkRDKA3Ebfhn56Yquy7zmDEqVGfqAD3dajdrDUpXuR5cxUvXojnTit2WMJFu8FmMxT1a5",
  "key27": "jktPRsBUtc8bjxBGCnopyYMtR8CCubuQ5PdapvXzHyhhCWLbP9Gjx8LiY6U5Yk5tAbTcTuJBcW4LmeXAKXhFHGY",
  "key28": "315bLNfdYDNkifkRssJVjscHAESP9TjeT3YKb3injiHpCtjtLTqxY66Kjcea8UNEjj6HydTVrSxfkxR8MrM6MNRd",
  "key29": "eJ5wjrbDvKu6Ns1WzNrFEUmN2ULzsu2DBqJy3auDpKwHCC2yp8Lb7GtXFGCGnByj58vv9JZSQdr89Bu4VsUDPRm",
  "key30": "4mdeBVWbt42gSLJxZfDHDHT43RBjy2Zeg9UgZ7FStxzvpY9mMdFivLpjPU2HeSkokYx5A99noL18vQW7Z4C9FbCC",
  "key31": "5PPb4QcqgWEdKAUZsBc9LoHpVL92ofMS2HXUVBBcF6sko7tiWrPA6vyVu1rwT7XFQBQajjpfEHpD3x38CsQZikaz",
  "key32": "dSCUZyr5WcYue1Rttr6MHXPyZSGymJv1jtrpvbd8kr1U2xNVPnN5ix2GhD7hftGknw5ithuXfNzywPe3SxNRCLs",
  "key33": "5kRb9S2BLYrQn9Kn6ucH1L9tn29n1Pn4ZXeHV1zmmExzxnFqeaYXDAvmeQ4XUFMjpkw7ibuTacHPn6TuAQmZciCQ",
  "key34": "5Dh2ZTkJexYWyDTb5cBjZsw93BiJrvb6Y83PdK89xknFxBHU3zzLkXTHARxgqBpEBPSJH332sEaxNQr7KNXUrFG9",
  "key35": "4nwsCLDmuoz27YBTyHbxSjVbtzomUb7aZciwA4iLe3Xu9YHKnsHsXCRVrrxNEXvqHmaJC78qLj775nwUCCoJpdYa",
  "key36": "5RDuRTHDskH9Pdnvk8VnaXcsprEXn5aGVA4AzzwBX36ojSE2B9AK6RznB3f99schtJJxAEznENGwGxWJCk3cNSCp",
  "key37": "2qFuh6ZCYniZQke2VeL79emA1z8TsuxiAcsx4C89P763chhzpqiC2FLVP1NvMqiRcB1eirtdGEYYsFusxzQsXXh1",
  "key38": "3XfN6UGpBLvCAHTfDVmCxNH4mof5xZtCziiz2VpFgrPJUvQogHBVYmsZ89mb2p1ECUugXwHewSyEvVdoZY33t9PH",
  "key39": "2NvmurMB7AKVYdivcbZRN4eEjF8ZwfiFRJAT71uZZQu57ntfGpKLPTKyaFj1vZvvwrt26un5AS7yederwUSoDa9f",
  "key40": "2rzDaJBWdHPoWkPcXuYDk3QgN73rERNyQ81JW1agqpD5zGvJDMrKJw81xHAaTxTLL9SFsVvW8aPd25nN7ugK3C55",
  "key41": "3mxPk23nB9HL8hC3WrGv3fsYuzbWJAt7FtcMfN2Z4h6kNhcGVNtnRBSh62bqR78ayZXNQfMy3EUiMWuV56W1SwJV",
  "key42": "4Drp5DmZxn5M6n2p1qoo8s6iK1a7s7XmgXTGneadda2h1PZYx32Ds6DcFYK9LrkZGeYaouWByFKkAqfMU9PoxZEP",
  "key43": "28ihRVhsnjZb6TvmtjHnMuyqJobixkzbHnrPbkVtp8EKLJeDG6jwspVR7BmQ4hWjxfxeTBqUhSRqUy7JmVHA3HT9",
  "key44": "2gLwxawTvnZ2cxr9u28re4UhP8ivpQtHmoubBx4BQEsE4uy3mrhGFrJxY6YbYpuDKyH5GikBu213dNGGb3pczV7u",
  "key45": "5qQyjyNeo57SSpuJ5wvXex3TxqXPtVYTBxzKvDSwxsi7nthuuYjzJyh4h4NvQft7GqnXLhNpdK4Gt3oRvH68cjao",
  "key46": "4iqp4nNi8aRHCVDzyxZasUztCE1urkwSu74Stss6PuBW14hpYaZvB4Mg9pxVZVGBx3uEw4npsMSa9E1dTDC5of5B",
  "key47": "D6mL8C9XvyEDU9UKqzkNLD4ozGHtTCsGUh4bQubtVxpALGwSYnfYMtTyhXb71Jh5U1TRYeo66MzJhPqWVqdxF8M"
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
