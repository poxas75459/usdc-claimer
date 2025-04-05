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
    "2Di68t8XhM6N5WcA1BHJgcHBZJ2ZWsiCZBMiYYD3bX3ch5rXwuHLgpgHH9Xac1SVaJTN6RSkghTe7nh54LVvErUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s595ukeuUarhQWGjjeRhZpkDSMwK1XQLT3DPZ8UruVh9MKjj7F76uZ5uu8eSshYi1KUzo4tE12CAxr2c2zwGRGT",
  "key1": "koq2pKq8497Gf7puM9wGbv3GzrGh2QTfJTp5gx7mFZk7J1gGxBacESQGgWLT3QQBv91FADHM3FxNfd1aTRAT16E",
  "key2": "2UT7qUekLCo9ouztmNoryehJx2Ppmmj4Fea1Wf1QyfKMSvnnT7C1LHfizd7tFpugyLx8pvWV8GRWNR1n5cLr5xNa",
  "key3": "2UDPF3ZypGjhPcJYVWBLZbnFeCsLQ1osdPEb4jaaLjWpP4CfczkQYZ6B3PYxrr6V2pxaec41brYKarg8bcPr62xg",
  "key4": "2PNSTVyqBCFS89SWrVdWfe8ekiDnBNRLoNVYwxsgohmSzbMj7gj4NmQ3js2jACH8W1Z4BC2SExbywSG7Nn1yF1Kj",
  "key5": "3cqGMCg1E6411JjHSLem1YGbBo8eULc3SDb4fNojVdVBuzCV6gX9qoFJf5e943RQedfoazPMCZHYHoLek1ei2kc2",
  "key6": "36k1UkiUexaLmbqkmx9p9Ln7a7x3UMxdPpqVvKMiHadrdyE2kpnR8To7F1qzWS1mPJwnHHdoTiK4EoMR3mG3gZQb",
  "key7": "gd9uF1NSQqHrwygrGxfDjCKxXcdAT1nSPNwCx5LaYVJKGsu5EFmUmeymbVw8yKTqrnNWqBMhqnVQssWvZhZgffM",
  "key8": "5L8uQ4u4t7tFiWn3yyhkqtPSWvSgSDNm9xmsr8pbbE19bJgRRd2TvNMkCuMg1TaJa7D36SHaaniA4dx247rEmZev",
  "key9": "5ywqJvQsuM2VJohEgAVLcaNQs8NHQ5Pt1ryN2ygxCf63Qi1jbQTNxYRpVqDYPAXySyHwQzBfoq9tJ7SUxWGE3Jmp",
  "key10": "DezP2k5b6aKwUHKj6nH7qaGbFuDj2d2ovnCGVwg4Ao9Fm6jpAZz1PmFKT9Ms7rpZHqyG8bzF1f3G4yheSPc3yaU",
  "key11": "3XZ9d3jLy2LVF4QW33vSJMbGQvDSBt5ie9eQHsnj4m52YZmhqNa3LBUvhSNuzo49dRZX7azLXEffhVYVwozq7xF3",
  "key12": "5E3kRWUpiKLvDq1Ku1QbsAwLp2D6rbQtwBLxXFJFWjgKvW4LY8CSHFfPaF6sYKkqLSRUssXhGYThqUKRkqocqN26",
  "key13": "5RW33T7WQoqZ6RobBv6gueRwv2GomKScf62fAeEjhDgHohDsPSs7xmLn3JHzpg3RTcq36crEePUh95hjWCczzqpn",
  "key14": "Lace6mLTFWTuHqWFBT6tgZWY8KPVY5pqT5j7yWjFTtfCFjMFeZHAWVBC25KwTJ9zSXk2HmZToZp7T8BYkMK3wJy",
  "key15": "ZL4hTxFFKAsXSzi2SDaSxFP2wZCND8hDRtNAuNBQhKACnwgJsHUPJRcWbkyNYVPkNxD87SM2ahG4rg57TzbfWaM",
  "key16": "2cXggRd3uFJo49bjV4BUpFrsjJdLtrLUzhkFakkuNfVfZ7RdjArNzKbuiu35LcoyYPSfEjFnKxWEzgcNTF5Nwqz4",
  "key17": "2Pcac3yFR7gRYBDg2UAQ7bjAQTMRHnuxgT4WaiFfoFvTWQif2aVrngbhRrQCaFDWoe3nSVusjZKzDUB26gLzxX9Z",
  "key18": "2wSRnuvH3wiwufsVCdEuyr51eojL9oNbvgQdweBiRD6Laev6vPagj69PxpxLHEyB3Yycj6iiPZQUfxLKiZ1kMixQ",
  "key19": "5XNUFGKgczNUHZiUrjaxMyCKrBhnj4buARbdCZipLAW1f8b5TfPBCdhKT83aQ38JwuR7mzbAZAR5T5TYybm2WrK1",
  "key20": "2hdSYZXB6B6QS5ayWmCJyDupbYkSz8bYChBN2V1qiMDwSG6x9yTPADMDZs3XzPWKnuq52X6RQMwA1ApCbSKKvhm3",
  "key21": "5JVXnBSQ8oQQoA62h6SDzsFLYXA4DuM4gZXbddAJPmQX9GzYMXDZVMrKbza87KFM7fHWPgqDPhPuGnQpCd7yFHLC",
  "key22": "2A113gQwJvwW3Eo99uNQWSupBHHmbGAQEYzUgJ6nPjMdffH6LhfgVDiHzYayuYajif13PJkARXXHtR3DwMD8xowm",
  "key23": "5rYrYZoKoAQx4yL1ssVSQi3JceMzD9zYoXu5BvSJcNTmbXXWJrc5tzFKxiukhzPfomfN5MCMBVPHqmZdNAcNK8L2",
  "key24": "57ngspjPgXSJUxtgwCbReGCjLyWGZ5z63YgB9qj3mNQwD3QXFyriUbnzT28HBkFSswzSo6bJTzR7KzA51pjNuGMC",
  "key25": "2qAoVkB5X1VJKbhgjZPkhW6dXzeL3WKjETfPadyNLWeqYYxXXWx1fPNWhRvmZ5sVJZoirmijjBaFWfiHZEQ5q91X",
  "key26": "KSCMxxnL187P1Dxvb79XewhZ29uFhVWhawdLGKNQqKnGqZBFvWXCDV2k9ESGpXgeAsmsmX9rkL5mMZgNSBRM552",
  "key27": "27j5yco4mo2gXqYGKiW1UHtNGiiVh2MDY49BirXpTT4cjYgHEmkLxUeWfzy1iuGy6Ac7ubnU6oNr8CVzDacZYQ3c",
  "key28": "4sjB92A5tAtKXjAoKcYdc9BvtVDJShd2C7cxvSac84k9VZdHUS1qhtRomNHUBVf1E39j8Tmo8rquun9CMJCbkgns",
  "key29": "mT7X6zspFzDnKWho7vPfYuDM72SzwBsBky3AZj1bia92ExLT1kAtZCVLUc6N361zQw7LUNLsaUZnucndpjbiT9y",
  "key30": "qAp5p4LHYWTD1wRsVWid8RbpMyfKj3xEm9si6hQZEqE8VDQdoeUZWmuVMyykSDjc7K4DYZkLjgnhhdWe1csiwNR",
  "key31": "DZqfhFKmA1MiDoqhwfReNfscnMBUZyW3z37csto6uXHcoyMvScPEWiojbsdXT3fTPzjrj5eY3i78ohdKMk8t1CC",
  "key32": "4F85i2m9VoNMteFmiegSNn7fmjy2YScfPsWBF15VtrNjTDDhU8nsvnXZSNgBeeNfVGS8LcoYdiedU644uocQuS4k",
  "key33": "3o8GjyjuvmJFtTs1Xq8CuAeTZ98NJqEXVAiucRqte4KrKxV8bjqbK5HK8ELFmGXsp8RrEihS7Gc6yUxbtE5ZRhiU",
  "key34": "534brvXbBWMLXJyRgZhdkjvnQYeifAwem4vzkiqWa4FZk9jofdqB3Du6Su16HF6Te1mpR2ZMTAG5awpXBoCNhees",
  "key35": "3xTPHBoUDE5VqAkR55uzKER5AYKMYNii8ykdu5zQd9A8TmPqn6YjxF29ySGstvhL1dm7cCLZPdWkAGrDb9LQT5Dx",
  "key36": "2jSV3oHeDrXvoVvWkyo43CGW9FejSWTnPbRX4eqpCVyCUCCF88G7T81cd5sQfDJM6rgf2y84ug6KELY7Rcw3eYJP",
  "key37": "55c9M94fa4je7RFj9zWtyEwEmstRGGec5UKTKeJ2t9zcJy1ReQkTPWbxKntCi93gfWSt9WAkXvps7EDtBVz3uSFQ",
  "key38": "5jMUzgiqjDNqDmYJcUEZDLQN3LXturoP5NAj4uZu2d4cCxhYnhfiHfqPL7Si83v3DcieoP1YSCRMGeNc9aodMiY1",
  "key39": "3mzGxBk395gvHmkzn2S1K9FN58kjRncYsHBTE6hiiYMSfqJu2dWr5mKo27LeVmmaTNB34YJCYEBKzcbf7XV9P7p1",
  "key40": "g7ix2y2avv4Dwfa6UiX5u8jwtyVBjQCMUyR6qr71J7sYw1ztZmbuout4K6SPSq8pZo6rdK92oDeHS8tnZMcrzRV",
  "key41": "3kuhiHj8oXas2ZAhhprPW9hCSfTxuWQfyA6YcGBqsbiv8X2ZVxrF92QNScpnNU1umpwkW3oPbcVLfJbVCYBSgXQz",
  "key42": "56F8nBknbHLzQbvWcC6Z7VH2R6awJKZrEThtndM4XYzjS79R4CTXeLX6U2JSMwnxBbgy3ac4nkwzNL2bnMxzV7ZJ",
  "key43": "5GqjTgH2DCAbyHCQgKCgKGpjCjeiVx14aHKmdWbdtNAngApfMsvE53o76dLv64EfmgZpKBqfH2gN1YCTDvuzc2Vn",
  "key44": "WiL2vEYNumkk7iUeZAbY5DtrbvwWbPYLSvqFob8tSUZ2986t5baTsJDyQoqCkk7uiiHZyNe6r9ujrjaMJau6g7t"
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
