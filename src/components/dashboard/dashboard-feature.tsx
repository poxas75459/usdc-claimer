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
    "57jndyRe7n9BbfsuKHwaMus1HDqt93qBv7hAvsPE5KHNkwUHiauUY3oFNm2r6zD5xLMD4cQSQpMdGQhqKjco76mp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ShCnH7iG3C4pLV3QBp2TqRoruAJbF6vgXpc5HZjPb2S4zzoEqFq5GJZA4TwUVDoeqYvWzvKoRZbphhd8FaVvZ1V",
  "key1": "3yjC2v64kwmmGoEg444as3R5ZJzF9KDcdk2XEsoUbizFgm1oL3QEMWyudqJXWEmP4RfkmsDyiZ33ndVkx7NZsA4Z",
  "key2": "qbN1ejGpLTzHSEvYoxfpJJtaBVqSzwY9dktEU9Liu58g9XbjRLqCYQ74qijScy7Z2JW1P73ua5WwjxTsqw9bbqC",
  "key3": "VxaRGjssrTxKuvSKzJWKTi2XyTkiY2KkwyiLH1YE1fPLYMTdH4s8rtDVbTzmavmyENANcoh1PXNUiKd7NurBZbQ",
  "key4": "2iAuqQefh6t7T9rS1v4bhAmLCt7EuVXVfzvMdZyMEtLtWFqQfsNQbcqNgqBeUrSbZYAi7r8nZFRK61Jta8c4fKJ9",
  "key5": "3eoEpFK7TRwSPL7oAuYYN4SzYHYord25sSfTGGrvfXrTfuyR385HvBRzfUjr8aTuK7wygZSGqFBgC8DAfR5QDstd",
  "key6": "3Mp5y3ZpyLyZ2GMXpnSqwcSi82YQoXipaMdGVN5VYLb5k8V9oobNVEdMZkczDeHKaJ9mmLvZjpcHN1yoyRv1Nw9P",
  "key7": "NQJ16z3sBaLoTamvSn97EgnLGGz6BRgy41r28EM7iDhgWpGEbnXvzJ4DFLYfPkMF7uUQxNfvPWfjZxjbpiJPb7y",
  "key8": "3KmWXMPB4o1EE3fRVxmETwu9AEPGQBaAEnhvLqCJ2F1pqG9yt9unoqYngtiNb1PcayWg4Pz7mSTyZtvzmaEHdtxt",
  "key9": "5aNw9a6SuaMAzBqrA5awWjz9rK14DsU2z1eJPVB78eYTJUdAhoC89QPjqSzSaKqtCpSzwC9KYQTHJvkEBsbBNS32",
  "key10": "3J4BoP7HXwv3gqkoVqfone3sh4VbAySyuw4eCLDo7PNvyX63oWX6oiPitn5iefFtahXn39qkiFpiVSNnEsRaYeMe",
  "key11": "5ngQh489tHJfCcrH4SbYKeNUAe6HwLGDMpzMDaATZCpfLj5tFGjaUt1cp6mtPAGLugvkq8Rt4ku2cgxoDTQGqmGn",
  "key12": "47BKqjn5cpHrmLMDctpRxagMPhyygE8tLsGcNiGFkL5pzKKMaiHVYrJMeRUe9TpMyqqj34DYjXYgE2Pyhtncmt2P",
  "key13": "4bCweiujLYGNAtZfd4uVcTd476AnWerVWz9YcrP1sZ6TX9LzQxQznFDHKgN19mE6qXm8QmK9wjB7dw4qAuZCGtz6",
  "key14": "iG9q6HWWFtdN2jyNupFW7Ykf2vLKyGhWdumGwNdV3dA8nhdiu7dD6yWtyM2eC2vegYStEr8UR9KEM2ZRYBTfYAE",
  "key15": "5gQX1c7XX2prccwHKkU6G5fSaFP6odfZ4QaH9rmrJiz5AtYueTtApHWV2TtL4e472YWa7Yr4Wxs5QKQeM4fd6o6z",
  "key16": "2nXG84okemK865L6FDe7fjKNozpJz8fNCDhTjEZabYNpiAVTK8czHinztXkB6RqLnHDaJUbYiGqLeGFydH4MoW1N",
  "key17": "4rWPmGQMnWFcBzZhnExGs54oVMmCqhGA6viSiU8UbNQQ5D5Rogy44onEXHz8w52ETsceDhrjpUJe2C33yJL7rVGn",
  "key18": "3Am626mzQmPKGer6J4AQcs4zebJdP8CUSqDPiAP3YNFt3RrVvSYpZsRPYnrjEbNvgWv8ppNBqpyVwnZo84KXXEo9",
  "key19": "2ATsz1CYgVNTQBnmWakCtVaupnoxXQXpPcYQfcNM21wW9piV95hEXodU5F9ecEp9SWVVJyBzQH4ewHjdMjKCnavo",
  "key20": "3dEw9rNaLPCmj4mt3midToJibvaeeTkT9WNBa7WtrCCYEaqVw5AHjJU5mRWGrh9WkRQG2CEBf1nnmMQCZ7tcKoKq",
  "key21": "3mcSKfuAst5wpvKayYNzrpvqimUCcB1AxvNEZApJc4kgk28W6PeF2H7ZgvU4uWXedEGrkQXQaTHPcoiqfwqeiCFL",
  "key22": "2StXLVTvnf3BRM1gofvsG4a7d8xvwejdmTGpHJZ28tJyZYPyyPtkFCLQD3epoUSonymShBqj3gzm32GZ4hnPTNrY",
  "key23": "2JB6kUtAb7WPBTMsoCx8pNSJRYjasr3KQSB5mgWaBRg5d8HXeNCp3MjnaEZAUQgSit6kckx8WvvVkGmUHy6sQDzc",
  "key24": "42zDnES3cQDBuxULuDezi98fbUvej4nsk1sUYTHk6P5q8DajXgDT8pY1dX5bniGDWMTUJSkpLzimxASRrCKRUc9e",
  "key25": "3pYnqQ1Rr2M3dt7JAogUbbXVDwEwhzFpsF1ZwQVLoJpZRdmPQp2J7mVaAUdGNdRDRXNToaH44ks43tKQ2iGpJJTX",
  "key26": "2GEnmoH2FAQp8ZRgwRE12dky6hQf4vbas2fCQv2obKDfHFFc9BA79Vp7JwihpJHceyspvWhcREDBT9ZkEQX1kuV1",
  "key27": "3BSp2dMtpGG3FRoa9NeRCZQx8xjM1mAWBTjj3NruMxvhHmASW3gf3pKTmCTkiAjK7Py5JqD7La7hkoFa1oqo6Jpb",
  "key28": "5bB2kkSYqsRQ5vMBEFY9tVUxa161j88V137QMgoS44HTzyRquwuPMVs42RoBMeDK4K2CtXG2dD2XmAv4WZHnmbCj",
  "key29": "2K6TqHB7gfzdNnMzGDM4tQXZTWrj76xrWn2v2QY8kfVPxJLRkn3YHvf2QLTgDCjbbXpDdbFAiZ27M1Y5nA6Emtj7",
  "key30": "5pniE2GfmbtoPZBfRNug63ARWTQjpAbHpdtRihL3wm8J4whrw9F5S4TZuTSk4BjHtgJqBXgYZdcvsaYkuZUvtAKV",
  "key31": "3ypngtfPqGzgNFTXaVidLjs8smbG1asKj1HLnxtz4r297D5UstKTDJ5Rw1Qcib6ACGzZ4wUGAn5CTDoyGNT2rG49",
  "key32": "4UQpQiopspkdS1iDUB9gNzbcoChxbZLZqfWndV2x6veunGtQGDRrC5CDZ7bNDc7bLiy1sXg1dBbrdGCPTpC7MAbc",
  "key33": "2FKzR2JuNkbZP24fBUquswASdnSZ6tAi7VqieK7Zxw5cU5WLVmXFXwFYe3VvvAtFYM9fwfE7wVSU3uZevtVBMt6J",
  "key34": "4eRBute6FSgsCfc4XBZE8iv8wPeoonJBW4zeyHX1YW5bws4EXtVHKieGMkjRJbFNYhhtmEEQMwuQcCsUJ5NcL5mn"
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
