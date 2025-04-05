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
    "yn1zjsYu3eUPchtXv24pj9bKzf87LfoPk6zc1iv5CgULBzULiSNC83xeT5RapdqPXT6r3ebaw68YGCmqTo2arMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g7okb8vtDxhfmQW7PZ5YTJ14XqCup7acW99kSwj52A7sak1rE8NHSRErNfD1qgwvjTnDRmrwM6ezPTQtYyKHMYz",
  "key1": "5xubU62ZXUkTcRBjXbkXmpAi93zxsKqkoc7KuRRYuFwdYpTs3jJR66HnsN8mu9tjS4x831ob4Be1j9acE1RM1iH7",
  "key2": "5RmU3NauM8w8PnoRqo5mGbkZQiR9wqND5STP4mkAqLP7Fqkj9xtpZV4Nfqzv6SEftJhfjHM6hWKVN8SkN5vXi84F",
  "key3": "5mCV2sUifWFDTa8s5BiBK1Uabrv2dhecmQdi2iHySeBqusmDy8zkXZsrzYMcF6gb6E1Jzvpz9NNj1WUctEYsGYBV",
  "key4": "4RatszTc7a2g7tB9AKfCGo8dkUsCTVUU4iAUnE35dcEzR7D6P8h2swRLHU3oMnKc1jbURg6nz26PF7FeWsZVehAa",
  "key5": "xLnCRgKifrR6LYKbYQtrbJy1ZotTUiGFp5e6z3VQrFmkcn6ot2EugedRRm8bL41RUnhYy73mHS1pSNQajZNGZMn",
  "key6": "2FAFU3MMJRCXucBfbAgpqs3ZA1ntYMyZVRzHH62hYQp26SfddCA2YYy9jSRWgprqZE24Bv3wdHX8ctvFa4zUW1yk",
  "key7": "2VbT9v3Rg9wAqneUeZbNZBNSJzZYTCBzqPHNAcoCvG54zEFNJpXWGAXN1q9geAA6rkGWN3Y2fyAJYcPCJDnDMmtP",
  "key8": "3zaJqQE1JMoK355MpAyzmXBnWU7rQgFqCRustiGXUJRTgfPDC93qbfeym2G5eJwxAKNRjjW9i4e678rvF9fVTirK",
  "key9": "5kwN8oquDJ5YitP5zS6DXzbu9AUDFLVPeNvoBkH66W3LBmRv3uetkF6QDdLVj8kuaKuTTdPw7v7C14tBcsyHUBdG",
  "key10": "4agrnm3NthxfvmELzEjEg6MQ43GfV1GMbzdd2Y52vnUH5JcmDqy9QhPNABDv2C5tAhBYGUtLyKPmt9N88MY3L1XJ",
  "key11": "tsUXdSeonDoKk1Q9G6deEXEhYx6UJmGrcXXypFNvmEw5fninSsnQ2G5AcNtqz7XPkVNardrY4BXrgW3H5bnT2Ux",
  "key12": "5ghWrLwRqA7EhsFrxs51uXkCQneNNmm7fZNgWJr1E5AzKadrSo2XZQDhXfFYUbFjSuSqpSY9nCtwfyNSQkY8gQdJ",
  "key13": "2pbnxG2bkhh2uJiiY2P1xrFXW4W31RQGQoL8MbDQVihG1wiWRpLHEXLzCGUoipC7TvdUzbhv7YwTiQRnc2w1Bpei",
  "key14": "4r3q6VwpcqCJTHQ5yC2djBj4tb26hTtHYPQzouGhWHbGjcftSXWvoTfB7bHsvgF2udycav2RuTH1P43PvdAwSPAx",
  "key15": "3chBffQw1Vw5yMDQjxX78hqknSk5WpZv2cFEtNvGm4yQLtYh3i2RGhCXWnzFp4XnYAioHiVnbe384HugpmQAanSs",
  "key16": "2XzTHs3ui1HxkvPtteQcQyBXKmKD1pAAcQ3szGiRRGMtgdntpuyLtehZ43qo41agmhm4VhswKisNGq6Q6qDsDDoH",
  "key17": "5on5Qk61bC88KHRT5Yz1VnVVTZEfUsQ2BjjDzDTAkwwyAF95MgwHcCRWR4T3rtjeg3bKQhsysGqSeXdUNjpdd82V",
  "key18": "41PienvfzkvF8det3JBAR2vdbt6XwyGb4T5woTyXFKbBqkXZtRmx1JsTXv6MhwdQZYNAkM3LCRxhcxd4cGU7RWox",
  "key19": "2aEYXCTk91dmhPhxmNqPkTTF9YNrAz2st6Go9u1KnJugeabkjLGMoEbMY6eDNaSnZ6ds83DNiKgJLUwZH3RnfgQt",
  "key20": "5JEbMfDG2qup3cknn9NuP46HPz9JAu63eXM7J63iy1StWJwfSv8mQ9EP7sLvqk5bRz4879PdybhMwNZWA5k4bXmR",
  "key21": "5YE2xyvPvx3FeJEkNjBzSWvedm1nfgXvVySHg8qbUj3PhYtyQSEcyXDRHSQUnSbcACuneEic8ajiYPhxwUBxEHvW",
  "key22": "3m7ZQC9NU9FdEQfx6ZzxaCsp7tj8a6MRNRNTawc7B5crqRqZJDUpCu8ingsLTFy8EpGyALZb9G3UZh1Ja9spaT4N",
  "key23": "31VMrWSLDfTCvypz9QeNySBSNy4geCoU6QbfBBU4pcvKSgMHY99YoNoWTk9xirDJPfB6225oG9TTvC5hpmhZfNPf",
  "key24": "5FZGNsoZHMMDgywnv3ppiGdMpDqnCG8wBTnRarxYvimunrNdRH2meHZRNXh3Rg8kSDqv4b91rohc3CaVWnSnwsUw",
  "key25": "2LueTXz6DztoU6gRXrnm1JEhTid7HhPyv1XZjq8RbBBi6acwvSShwWjHu9LqY7AoJceSh8HeA1rm1U96kSychbHj",
  "key26": "1hWyMVi6AwkiWRc7Kc1SAFxQ5T8xP5y9sFp7H7Hx5w6A7w2phHxdJpruByBJu6X7MpjB3XigGZ2Mp81L61had9P",
  "key27": "5RtjJayFvwcjW8kbevivysGm8Xgt7eQMJQ4tt4tHBqVcMvsFUw5LgM4XwkYafdBEYob1ugfEswYbN3YBP4wnJnGf",
  "key28": "56P1SpNmdeNmmFqKmfvEHbyocdDg2ZBcU6GX24Se92asGjojMp81wfLdBezimhsiYhp21fLqe65NwycVyzdTmML4",
  "key29": "66H9Zo8gqEcoKXW4DZGkKSxDZpe6df5BQw7DqzhHvw8eSMJXRRKUJMa5rWAkniK62idDPafTFWQrU8UiXFywnpeG",
  "key30": "22Rwc81Mf9Mktm3o4SPcAjvFUEQmDizcKy3v9qoQJDgxE9wFfukL65MubiUtdStWrkjwdDd8fpojfEz4mjC3navK",
  "key31": "5CPtfSnGcKrJTvxeLYRzP71pzcmBc4myM9Rcn6kpKZeUZuxNh4CnrxrDq1XdPJYUBcKp7oeFuANgV4K3yJRfvPi8",
  "key32": "5DWgr3HwGGpFyBqaRg3B4V1m1qhZ3qDju4Z4DFdz8KVS7vNraB14MvXvHJdcLc2RBUmj6b5jrH3gqkd5Pix2hYpW",
  "key33": "EHjaCGyURVzk4jbffJmURyaZrLLn42fFkYMXQ5SmeZeLi8gEJeTDAy38mHEmHFqenwdPRHCCp2sgg3ZTi3kZ1jq",
  "key34": "4fZ58xk6tu6pJHcJR2EQev4xZd6PcEbg6yeAtXKSUq3B9DAQghVUoTG8CYT7FL75MYrD8tmK2wj8Wx13WegWJAkR",
  "key35": "2TXBeHVW12iGW9azj7GZBnwEAMyJvM8gKtJwfkkrNDiBhJhByX6W7TtoFJoAvDuXtZQhKQKTVsab8ao7y4nYopVU",
  "key36": "4uWjDRTX9yChTtbZMwy29nG5tjStFjs5drK5MDS8bShCftA9xAPJJeSPL7S7cEnwvAFGe2CNA7AChbRPgWdvSkhM",
  "key37": "4K2nBuax3874gFwcF84RndTAHxZxAPNiB5ZvDR2SSJvTdWyqLcMQq6mGR3yHN9TZQ9JFt4GmQzrn8kCNk5kZxnwy",
  "key38": "5fiBWsztEAwpWXHziEBgVqWafmZc2iRVeHJk2rqcniiXW1MEVKfdf7wepno2JrhPxZxLvgizRvnHfLeKGbEQpKji",
  "key39": "5ypEdqWEmCBWL8x1b7ErZqtD7v9oLEPdjhjzJwLGAV1ntu6pDxbFjJFz6vSGZ7oiQBeF5Dsoj59aTHKCqYKARvYq",
  "key40": "4Ym2XTiMD7wAaQCVidJZYh7ay8AyjfuGg1PKnSviWygqRce4tTv1wpPrDaA5bJutsXq2RWmq65YXn7ehEDx3XcsL",
  "key41": "62eLsv1P5TmyeokCspgiF2xBrHYyiRdbiXYu2U5DDCgz47hTa61b44gzd71np4fjQZ37cgoLgXdtQh2Uddk5Jx9R",
  "key42": "4B1j3XyYurTfPWJMRs4FUPpjxguLS648T7xzQBfucWU4h3b4J27hk86bSSubNGwJevRMKXcihkT8xcFyU7rQQvUh",
  "key43": "3YzjofDE7qhwEbTxK4zVUt63UPmnNrP8ch7dxzTi9mZQ29P6PrkMif4Kf45f781dVAebUj5PXevQqGKzkWvESzpY",
  "key44": "H2uP5YjUEmxazEwq8dMhny1fcSrBcqyLpEGuH6otjpEJW2THvBWXdXWFPd7fYfQcvoDCd4SA18wAa8EbYxiHvcb",
  "key45": "3C8Mv3CjuiqWSbQp2DFbe84KSAjLU84wijajHBz5UPHWZAM8qLU4CQDYPuHKzneSRNPoh5rg32GtvQ8ijtH1PGEG"
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
