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
    "2D8ybJTGDouR51zcqKhQceoW5j6T5VjANzDu5PkWTYn5HutSgcuSN69ysy57m88dycDdoKezYQ9wvDvz8KFd59qt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DiajprEzHrQEpMwZvURiDTRPwdjvfTRLvV6sbeiRnUcAZWNMHfXPHCzLZKipzDbNCWRbw34qvTYA5HiWJr5YbXT",
  "key1": "23S2aYnibXM8pEMa7LYUxAoVTWCBqVr82GPVucf79s6jM5HxkXgVSDpbveEx1tEgGdHSoeF6WjeTPvhcFDmf9ANF",
  "key2": "3swBRyDbHtHMtV6CvNq1rzZyGSAEpWB3ei761k2TjgcXuSvHcA7Fwo8aaDC7RYKcy85dCUb46LKmwMEQ5nDmqWmN",
  "key3": "3XkiibmS3MuFYogbg89G2awbkpG7TisVpPimsDDxaFReAw4FwkvkdWq611mTR8B2dsEVwzJ5g726mfzjYCAnYVWc",
  "key4": "5vHNdDvCy79BDefqBqNbWAUW5rtK85kFKLvXEB1h281MzixKDzCvCdud4HZVPmL3cBQeG6yef7vP5UbrvAETN1hz",
  "key5": "2rhWcGXnVUs1hF9BjeWCwWxzGjRz5AqPzW2ob5Lxws1x9V7H1vyRUCLNqcH5wEMj2TPsFaF66uguwZ2BERmkGXZb",
  "key6": "2iRts2zetVGHYqoUhVFvpjf8mMKWRjwHTMVRNLXxaq1mz1SRr4PCJNBjdKi811tcoUC4XVTxTHWZXMWkmJ6Dt7ix",
  "key7": "5gVEWiEFJarDDjoNSSKQqY4aCqroRFoKHGVgE8u9PcyYCQt9CmdL1uNYkGZGQ6sk6i675EDtpQVSgHaR34kPhPVB",
  "key8": "599tdGcDe3RpeSwyDWCPb22UggU47YVbGaYG8b7Y9PERUMczgQVsHpefUd5oCgp5YTbtHk62tBGQtWzXxSztC39H",
  "key9": "47F9GykgnRphq9pJu5bmrGkQda7TYD14QewByiMHPehQcQLUDm7ScrHe6Cj3efds7ZqytvD2gQvsKWgnBwoknVgq",
  "key10": "5g6dVKPKjNHJkptTh2tZ2oUwvuXhSGN11C2n7JVqTGCYoM8V7LiLqFwzW7A3ZeeaoEJDNhh25bZjWXpHsktUUXMu",
  "key11": "671e76y1to6xmf9H9fedhxAzs8puWMUaJCzG3T6WKd2ivR9h7y3vVELHn7tT6Qn26gg7HRvLsdaGC5QeRKtRTZYC",
  "key12": "xZu6f8EUpZtC8M6BGGHeGpw5GthGvRSSQYfkpX3K7GnKCFwbw8SzyZLJYmxDAWPeMqjHxi9zmEugrZfybQD6Jfh",
  "key13": "2EKTz1QTyn6kTRnp1J4VPxhNH2ivGwZyrVnLWxxnRQ7ES6tvbUjY73SCwMXcMLzJszPWDV6Z4nXfTHFbsKLPDWZt",
  "key14": "2L7eBBdCwmJCDnfyfT2DunmEyhKVbpzHDBPDWbZrbnuGMAmFdqfd6ZWwuLycQc29kwknwF7atWSqSS3QyAreSNSE",
  "key15": "5E4y9iGMkkN7tcN2VMi4cymMs6Bq3RZheMr4UC2hV6zXvwfCuL9aGKeG7t4YYzxspheTGqwsbzVFDKtJDTJk5L8b",
  "key16": "2kME8rxTBqQ7qEGKVbV6KNNs96dTKgG1Rk9muBCEEEpAr9pmcQeMUMpLoiEwPMauqyznMs4VVxMiSDTCmm1iBj5J",
  "key17": "JXYjBrgpXe6yaE3EA5dN7aXCWtpH1bgJEYiF4KQAmJf2DXm2nPXCtzYe8F3z3MFy9dCZiGhfRjorD3htecSqTGg",
  "key18": "3s5NiJK2yzLyzMQUMFU1hkt6ZBWtLuVzwdthrJjcQcDR9BS42SHFbdPTRsp1B2tHNHjcds43CcTSQktLNV9dF5CD",
  "key19": "24VHRyr8Tb6qcuTuUtoJykS8XmBYT8LNXoSuVm6ZNtDi1PL3xzXTVFxdQ8RKqGGPye6DXeHGFCeGzzDMrSzmoGUK",
  "key20": "4dmg5viEQBH7HnGtMtGzT8TU7csk9dRM4sodCW8xBpCY5kTFbuxM6pV76GHrrkx3aEDXeT6vP2p3dXwLbm3txyAT",
  "key21": "4CBL8rHmWeAsjNZ6WfMe7BvFQWdg93iJXDYKMcUmsMrbxzSLMk8hF2yidoBXLaugXifndZJ2bKt2URu7dpWM27DU",
  "key22": "59LJjo5hEsoYDRvqBadDPnyyWqRyhYB3gv6uYb22KftFZMZwTyVvf2Zf5EdjXJMC7r4WyqXjEuFsjjQgqdXNGkzy",
  "key23": "2Rb4dvio42zJMdKiLFcBW62hgEFshrJpjLfXAHMjfD2dxYqyhF4nVqeBB9qLqsTcQ8DnXT4BtTHYtqdJabsNLQXS",
  "key24": "2cquk5PhueRCTVZuAFGqPceQSo6KdonrqhNNWQNetD18q8wASfcizx3v8rm3rCEGvEp6VHsENUrY6UvFoffpmrK",
  "key25": "3tDxJvEgHYtcDoyrFWVznVW3B7jDrnRWjk1qGV8pNWELmpM8NnkMchp9rxGh8NTTVG6M5BbfNLdtuGVDM7Yn16ow",
  "key26": "2AyUE63WTMY5xT23HvAckEVLp49m21oEpU2zftEBHR3SjpGdv8w4u8fwL3Aw1LrGqLCPg8MKZxVHFdF6vANDc9pm",
  "key27": "sWVgDiuc9pjQmVCMapseignfxpxrhY55KLSVryTMLpZYQPiydMWYTR1XTTMeC7gGqcNiZazisnXav1ng5ZYvq6S",
  "key28": "5JJjdcEDmsKEwcjXCdWFuRduTki6voj9bn81WwT6M9qu1uLTaQLjjjayaqgNTyQKSCDyPNfzJHoJmJ5fHvVN5fre",
  "key29": "54tDBRqbvFtSua6sK7CaTEtT93pxBPR7n1U7CzFZnZFDExGrqKqUDTxkNfWW9ETgxEGT2Vg1FSn84Rpw2U9qC3FQ",
  "key30": "4hrsd69FzxrnX5dVwAqaA1VzRSHF4N6KHG32RMqALGMnCCsMYgFKy7vqRxN1Hiiv924bfokKyrqzsoxu8wDEWfr4",
  "key31": "4KbSTu1wibPPETS5fgnhFpXefaVFBE8XXUAGpm1RCtVBwaH63xecTEUCmXJSH6xtXPvQjFXicuAjZNpASBpx6CTf",
  "key32": "5vLV5ss2NtayK1ikKHTnmNuRmhMZADPnhmsqgjvwBm7h3dBtamfM4a9EemoydZKCeEk8VuKygDhG2jYDefxSiapR",
  "key33": "3BPzPZ9aLWgjWixh4pFXRwf5PYbYueSSGn9J3ifCTFWPmXS92PUfRD4VpR198FmWD8yzGNvF38o81m2i6xP4oFcM",
  "key34": "34j9QUfWRjXaGvscHiJUKysNZH1vSynoDHtbDkJwM86YKuL2fiBvd3tS83Lv5B3T23xBXsxaZgXy4eFexTmvMGxF",
  "key35": "2GdVsw7GyjbGTwP5WyVxHvPCEy6wpiyuRPBKbx51tEZv5sDAi5g8qvv77aaPjKB1tZ5ST9v741Rbaj3S1baPugTM",
  "key36": "4StZ5WgMFCVEyspKkVay9boZHD2q9JehuidsPE6v7UaP55NP7EPpEwBWh985BMFwvBWLMDFesM9JDfAyTn4QdxFC",
  "key37": "4aBf26cawJR298Nh4AhKXPkP6wk4DJuWXTZiZPcT5A26XR5xx5zo6H3VFcTF8b1SFLYxXXjCYduZZCrWyfJpgzFz",
  "key38": "3ths7jk5k2S8Rjagv3SD8Y9JjdMR2XCPfYhaccgR7LEDE6P56oAxVvWZpp1peGqFypmVUBnVQCbSC7uDgHt7jM4k",
  "key39": "urbTdqsHkJMmvvZU6A7gso2Hee4pA28fka3oiEnbMdjRVKiwNVJiSKia2uvpgTQCMpfsJiWNp18Si153bi34H1R",
  "key40": "HwS3AE9UG1PAXHioe2b2Nf7V2vTYVyqb65bpNu8RQRUn2BzZxbP5YEgDRNX7QPT6UKVBMhT69uufvPGvQ1eLwbA",
  "key41": "2gtdr9UiT4KJEVT2RUgWUsEndp5kNcoiLS3pUhSSuxXgGJccrs3XAmLEEeoSA8KMtuSxKkBrZMD6x4pgop5Wo3Vv",
  "key42": "2MhjszUfZFY7Xsbuf36dr3xJw9zHuwNUosPZQXDdLkvpLFhsxCtYyHLgEns6RszCHhGPtRQW8wbntQRQopVTcT8N",
  "key43": "4EjMq9rguRQwbFfLZFRtWS9G1BgDZ7SKu16YjhQgCh4NVHeKF5UeRNoYHUYuB9AXgtUfrKD24MjCkPa2M6ib3Dad"
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
