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
    "3bu1SMaHj2VpwUQGvKBfgifz58ev2YmyaifRwKuP4Jfqmeqca1ARieTaMpsaJaqGyWxXT6ihmzDSKCCGuKTd3SKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dunph4NDrUqSBWi4Ry9jfWkFSQsnrLdB3bfFMDHqHp8tfitXPhvNxFk6RKCqzwW9HVXeCgtcNo1DiLHDxPSEFmg",
  "key1": "4mBJQ2TGGCdDCuKXtVNjNnb2nkRGtFvzjTweB5FP2fiBe7qdHef8z27F1otBBh9sQsevCBqgQ9NQbcYsDK2ih9Lu",
  "key2": "4nAkbHjEixKccYakD9Zq3czBxZN5zMNNeX4ySHA1JBZ5NmvxHTzLSVmCLyH1Zpit7Jyh5omPD82LWtTXaLiEWvRV",
  "key3": "3Fi2VyHYC3c4Dxg8r9mwMRDwER5TkjwZUv2Swiij2AeVwTaUAakpLoG3t3xg9zszPpsppXpL1ToGsMLSEnaXu84b",
  "key4": "36vMV9BTVNocdhC8isVZcKXyE2j4F7TKMsxZzU9rcEYciGE6RGWDT5jWxHxP9DrJq8m9Bupqj7oYPyZtVuDY7pit",
  "key5": "5esYuqHDLGpwraq4DsjAavY98mKjsYSnBKNBGt6pthyQcMdG9eMDbEGGwqWQpVXQLUCwSLkcyZLKwRdqm9zvT2qa",
  "key6": "ftpGK1vEFizYfp3nzpPr3XuopYSrBgZ4JE6fCgxDRbFgN11sL9bYZN11bFV7WR31niXk3cJdayrfCeY9PhXfwB5",
  "key7": "5dypYtQnR6j2xzt2MGR1qNvhA3vnHck2YH9JBMbLPLgaTzzPW52zzDfmYbGhSFB2EN2oVJz75TXDU8HHHa3Ajuqw",
  "key8": "3CJojfvhMyFwcYpoR192Da8yTiRhrLSeJ5FjvaYCjuLsEWHNyWHoo6CYQ9wfniNfofBAr1y7y6dmv1e28xKMvNfo",
  "key9": "2VBUzBTnCwMQ16URE7RRpyEgUPw64hC4gz2MhUiAuVXd3LZ1Ca8zHWRR9bLTmDmJH6kDdW243vGyDB4fMesWaSaK",
  "key10": "4Tve2XGSpBy8LkegSe9SiwABJiaPSrj25nP7JsAxku6dorC3AoWLL9JaKn8NZpDRPf13rG6JmjJ4S52YTioTuUAe",
  "key11": "7xTsLF5X6hWVBwCvZcZVnHvsVfVPia8TN58ZVMdTiUkF1ZWmK9JSpwneMb6PvjMW5vxkjpU6sWfyQdHRRanmnxJ",
  "key12": "4LDXeVEojtSAbRxAULJtVf7WzHVeiv1SwXUranfb1MPCkAggrvPEYrt4D9ssQ5phHuizov56ScFowMqPcaZdfURk",
  "key13": "5ATBk6c1hhy1ZEKhg7L1n1aRCsG2wwE3CXZroubgcWmrpEYa9J8Ynvn6Uos5FtWo4yeQ6D9h5P9i1iqwXe1Sq6oV",
  "key14": "4LZoJX9pnqYXMThWYf4WM9bxCUQ5iWmrNDvfYS5cHATv3Ek3QK3vkbhzt1QYsDmrPuh8XjHwUD8SRvxPZzPqbYeS",
  "key15": "AFUJB2L2jts7meTfPFNBTu1PoyWH7w2MYFiUXTWpbaFZ6vowacHfw38V95ix8EUrM4pfwUdnBTxMVU7zZZ6GaNw",
  "key16": "2wjyc5CW6azLG5TMo7ockFDSVU9xMFcVDRtrvygvpVRLazFypuJeuKB7HbhLs1jfDQXGo2yqqwLTuejWfwCZ6AZW",
  "key17": "dpkBR7XQhXGE1gxhNr7HRzWiuXdue3ctM1ha7WEbpK3z2iWv3Y3GuAhkbdg9bX7BifCVRcJiBEoQvZcrwjgWGq5",
  "key18": "5BUGXCC6oALNv1xL3MQBw19JFfwj3893ahxAj1Vh3JMQfaehvtJoc5oeTpoSgXcXSKh8UJQNUKTf4uvMBwNqYep8",
  "key19": "4fx179J3j84Sv7UbRTXvbDstnBxsJFc97DjcoEKiDsUQETJiZ4eF42rBkFtV1UtY7A4rU3BQrN5WPeERY6UBiaZ1",
  "key20": "jmG9u8dQs4Vo4642TeugJcsWbddaKgNtv5FTsCdaaafhoDH6M3gJERux8dCj4WzuxqWhMeG1YCcJ6TfwEyvy84z",
  "key21": "3DiUpQY5fiRN482GV4iH7xhd5uEQMLCCSNQV5BswJaFfUrwrHdoZAPFcTVVXHqkpGyX5J2JnaGezpP7DMdJkeJvt",
  "key22": "22294mPEMMhwazFRmne9EMAYq9qvUJhu99fB6QjBVdRnJW4vg564yBi35nb5NvwiLHWzfRvdtuedU7kLFWoDdtgH",
  "key23": "2Zu8iiuRGkn2DeF2SyUZ8x87nts8Wq6x4YtWY6C5NiAU8toTd9KBgwcxmg8Fch9gMbk2NZJXvrsdbVTQc3ZqTw4",
  "key24": "2FrTJtqm6dSvrhk6z5YkJRW4mEXQa1en4SG4KJ5mZoMvQYAYEJtc1oPoscaGnDAoehvTwR43X4BCPqkwUcAMcL9E",
  "key25": "4T9CFj2qDtUXJBorNme18tMMVJBj5T5AtJX2spYMRU1n51Mh462cKE9vwSBwY1zpeFbUWB6cvTeeTmzvyPBuWwWU",
  "key26": "2JDBYRijonHFuCacMDT4JyoSVBWU2pg5VAwoA8njE5Sq9LUWGrhRf4BFubGRoQ9ga3VTYeSUgssiprMtBJ6srPma",
  "key27": "3RJSEpkmAkCEUyfXz2sJo1jRq4BWGvxjTPkPsyEUrxsB8qDHo1cBrcaCZaCk6GNaCreqV32LCsAyE9eXfAZG2gXY",
  "key28": "4Txw4DFYbrHjJeKLGWEeZ92xQfD2vuuZRd865RHAE8iKXeKsYsLuEWipqknd575UqCn49L43dzHGhd7GQhjQHR8k",
  "key29": "3KjHV1VcFUNBuqbnCWaKw3JU6RJ1G8bJCWMXrbkqV8wwYgb91CeDJGSW7AZU5dUWgA8h8Jq7krD65UcaYKJAB5EQ",
  "key30": "3runxzrZXb6UsNMC3FuALSQ152w2rNEMtcefqSp9aCfRbZK2toSx9pedQ6eESh7i3rP7LupyLSKV4DaXobeU9iGt",
  "key31": "3rNmMaEvw8ZYNUYZJw8nzuVJDtB4zEd7UUCGKocfTnHUeMtXe5s5ZYe5NjLqTr1h1e4Ej6ikTrBRFore1D7f4g5T",
  "key32": "3EjooMNqyG9fVmfohACLnzFh7PH9XxzBYfqWd9DY7X2hTevEQGxScwBkXc8UPgwgq7DaEAJ4UbzPhGqffNhEnuQi",
  "key33": "LukqPVB3dPewLStrJ51niSSVVZrD8FC9FqNRKF6GvTy81yuAUwdGGj2NNxKLTpLWhwzwCnBJUZqVvhcyHvfVtng",
  "key34": "5cucmgJD7DMMqr6XnxdFk6qBh5xqKZT7K5wLg6TpDrCxC18BN3t4tTaSAiVBPiFg2ZYNm3sdfhssu4sPUUA3bcde",
  "key35": "5UmfEyF8AhNqrzzcerkBSfKbrdezu2L4r3Z5HyhtcyHXoivYGPzQPWEBqNC7zsiGye3gUqUY8wzjXKPrx6X29cUA",
  "key36": "4Ec6HwZGiff7PUD58LmGBn2VPymKEV9eDiHMZYEwDmYQKaXyVPbM6TWecRr4StY6sKGctLHNLVFLwDs2DdFQba2V",
  "key37": "4SzNVAHevp17kuSyoaVHsHDP1Lew2eJABMmyiqKxXpoSbbDqE2hKSgQjt2WadGNZeoZ7zv8C4AMeFt1uqJ22GqfH",
  "key38": "5kZD5rqHRE2bLjyhYc89h7vUPHjWA9pcAPj5yHHbnRr2o3FPqUSW4mD7PjMi73K7EijmAinBkBXxZ3hD6vd3yTMN",
  "key39": "58zd8yFCgCD2RTgYbK2eSh7tf1p5hmD1Bx2Tpu8sfMeWLvxpthtYjGuUiU6rq4x3BG8rVFQoCxgjby3F11KfbpfF",
  "key40": "Mf8mVdu3eE4VRdC71G6horKTHKrva6LUcktHccho7Y2cJwTiKBTcQHUKFyUu1TpnXp5tQBWjeDn5dNqDJquUhaW"
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
