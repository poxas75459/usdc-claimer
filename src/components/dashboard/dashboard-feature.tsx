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
    "2dXHRhx6DkEMDCDe76QBXoLQKqk61APjzA7CyhSGC2wsrBDmibefVa2KxtWydHhNFSfb1TJLtDbweCusmLgkUEmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MTXV385NT5XrYWg6nBReRo5xiNrPwxUYne8VjaVZkHvoJnAWYijMT1aegyafwax3H2v3fh9gXBZxtAHGbum8n4f",
  "key1": "5ttEgf8kWwvcc1Hu2GB2V5sgAG3ijtoFGX2yqg7Ay97eRokbds2VsU6DT2ak9i9rgGSWfbdtc8Tp9w4hKybakzue",
  "key2": "4CG95SvBqMT61dKusz2CLviBn9NC6SVV4NZbE9J4EcBPBBixgWd2QRK6ZFjnJf99MFYWFKkUVcKDDyuTmUzCRt1j",
  "key3": "5aWR2Wz6WjqXpK7AyTPFxREEmnbNC9HNrTbnkxgPhwLqF1WhVqADYNkCpY1GvXYCy12B4XD5rmAXeVEH4Pa3x7tR",
  "key4": "kFqjrfsSYfDJoiwXGL6FtvqznxjVNYPHhr7Kw17DpFgYj7SrLd1FVEc6yBrz6LEZrLLL5ZVuKnUNVjRpuUZTkD7",
  "key5": "4vBC8g4BeMZjPrgTwupgKX7GbVYvX5BPMstpo5HxsmdV4vGYrSiCdPiGGsBW1t1H9Q42BSt7n25DVHG4aQgsX8Ut",
  "key6": "2eosaXwQqRdxe9jL5AfJcM33LioohPuQPRrczhAMg86h74noArkQPw7JZkLVXP4E4RNsNfUgqWKuf9YGCE3hUwXE",
  "key7": "5w9quM56xgvAdNSDWPbawQhr746oTg5dXLMetdBEvAA7Uop4QyLvqwtQAS5gkkDfTp2pWpmEETPXzUy8MYAb5VJR",
  "key8": "fjyDeokzqBiLp64DRys7uCz7eco6frv89hdK2iLWU6AhRV26z8xRkizEj5RNQyWry3qKEbG1T3WPnexm82KSASb",
  "key9": "AnDRLNBnF7Q7ny1pWPgmvQjE1DkzNzypwMGPfYkXGBrHGwTEDUg5QxoZMGuBgwEUNNT22LqxUM8E15hUNj1oz5W",
  "key10": "31smvBL3RkJsT9Gyd7CrKvnkjEYj9nZyG49nRSxr7nNyTfwa2kEfwur6w4mJ9dWUPfJ5R2n4KbtB9P6NHXYf75ZL",
  "key11": "4sjPg4bsNhxccVSWeRu72fV45opvsihQ7zsbqw2XDzv4HvFrDXBrEdfCucYMVDA2YLjNTm39PWzjEqMYqkUwkj9Q",
  "key12": "61cF3tMoE86winid7h6UGopgJ2LvwTo2FmWiMit9PNq1MJAjNLMEJ3bhaNHHrJM2vx4ko2SDo9JrLUeFpqQAsM47",
  "key13": "5n22QgQrhY5NbyZHbHSrVRih38sp8jNcXFX7xdmyhoB6SYKrn1YFzZ8nBMowo5aZyQJR1bCaxTFHBFJhj3q9iF27",
  "key14": "2PQF2YaNoYntzV7jvv5CDTJNumHzFGhHgocipm7r1yaTYomrZ9tZV66Gqt78ZmCJdib2gYR28C2B6ec39H3nN7nK",
  "key15": "b71utmhRRPL9CMtbZ3HRd7Hbr7ni2BxRWAHvcbi4bXu1g7m8VfaKGYcHmwv4xQf6P74zbb2SzEWC9sDYzSkNqko",
  "key16": "4AoF1yDbCdwCCVw71geTJnMEN4zztVw9v8Wn5e5S4dkpq4TzJkrQEXhvCkUNfSiW8eu4aXLX2XdHg3LyEapcxMcS",
  "key17": "55LoKPcQ795rA2r8xkD3TirArUQDnwHVcVFNEQNnofcbHnoYimrBiFeJJocXY9mA3tAxcyxVtJZp5ACuhA946Nx4",
  "key18": "uDRjN7DQ7fME1ubcqC9DfuVtSTPuqhE3vVqq3rDrP5oUjWUxSp5SLoLJR9WvfBEeoAvkUe8A4PK2xxdzzWhZBGX",
  "key19": "47K3XSmmyaqGHDeEi2vhQ5EySZcYF8EDbPf97ts8NaHpzioMMHQhjZPUQLHTg9UehJeV1Ye5wF9WmzYspZXpASF6",
  "key20": "4zENmPfqCk2cafuCJqfaFzb9k92RnWp2Nc7NczYuFaWGBT7ft7dny1d51NUCLjVnAgCeqL2XLR8jxGA5A2bsRaF3",
  "key21": "5wcxC27H4UubsmSfXRgKLrfueRwDAhkSv6RADNsxnDCQn5aDkoPtLeXKuAPuibhopevWkEhwj3oLe2n8Mymgrnoo",
  "key22": "2LjrVj7DodyGvEhxvxz5KsRn1HpFXLZjDm7oFYCX3LmvSiiYZ7oqgNhEqifSZA7eQ58gBJPWSsR7gWzEe5CNaJeH",
  "key23": "3eySSHjq8tfRHbYebWcLPY2zFnAMT8nKM7JBYE64gpbNdSroFkSsu6PSWuERkKmchkbmyzuKDqGaZS3ygjsraAUH",
  "key24": "LGgjxgnEgHxCHekcWuv1kksvDByJkSFrKDcPgLEmpHJGATTn2YjmEDXXLtdYv8kFLncj2q1ciC5XQkamjn1wYCM",
  "key25": "4AbsSVP5pog6QJDfqkcPywMwhTrPw4FXzGh8x9YbSuvGC2YUaVU7mw225rtsPj4ANXcZk7SJPj18Vteaj4BdfGxd",
  "key26": "2ddwam1Wkeryr2PwPEXct2JQ4v2FFQGgRN9i9CYrheQkcRoPYPgPJ1KLDmDeVYnuo2v4vGj7WREBv3P4maNEdRXy",
  "key27": "637jCUDYy6Aodo5TUL1kNPFZMxxr9WHMQKtn4LmFZCBashxL2trETWNd1cBbohJpmpNxsWjvhhpMoE8kmudYpKEp",
  "key28": "3zmMGeLKiJJg3dwDsGFr6yajJ2xxJYGkT7ERR5VT9rWmPrjjNPbT2ymyq2PR33jTA7nKPH4J1jrVDLHWaswHUfHh",
  "key29": "2S9ZWYBJov5bMfxADu782WD5D3ZRxxzxWviUe2ttZ3BtVJPWjVYY2LfDVu7gdT7d5SZYt7fdV5p2mg7JhAZGKwqg",
  "key30": "2b4CS4SbHLRuexpcr9v4wTWRHW28ANVtH3zNRXmLtu4t1pqW8RPtuCC4KchaycrnKLtfJHC4feM2KHAUnQwF3gdJ",
  "key31": "4SYSVcfufhFWPnSdqHdHpm6M7BaegPmbsyRkEdKQnfTgZ5dM1gvYvSiV3B1NBLhE8hCRibngYf9WjpwFdPbABG6M",
  "key32": "3WpXibJbnJ3HtMnuKjyTU7pb12QprUfEzb1Dvt7JAMWcp8C6ozhvve1TvD3woQa9jqiyPA5PFa7YZMdaj26zCNQC",
  "key33": "4zaAGDrNfjVH1zb653ninYSQtyd9dL8bzgryNbPEdna5TaGdY3VAh4o9yxfvyFiyoAV5VjPwcC4mK3Xfh7zjG8io",
  "key34": "3pzL2wJ9ZMtrTc6A3K9fsdBXxFkDf3XbhwovFzKpjMuKHG5eWoYeyu5usNfB4UYaeaTCuQzevDVxbcrFxsy6PfZZ",
  "key35": "2TZxVAiNNChjTSrrzGwaLmQaEuJXhp5EUSC6jpNEx74VAzsDJcfWueZVF1Xi4eHQvZ6UmJ7DTkKgHY84YREHPtnU",
  "key36": "2hFLzuFLpoWAnLnQt1BVFEerDFDRFM62xb9qHAHjj1V91SjdLifSVq99oaZRn8vEC7DgcRjwcfPLajMfCnZxfEbQ",
  "key37": "4xQe9Diu71eaishZryHvkmQMjPDp4Hu6pWyY81GMWjKRNRjBrJsnWPTW2xn1Rvz93omo2ZQMSKn6xWb2k8idWuDU",
  "key38": "Rgv8EVELAycrjKM8RQk395ga2n8aWh9vYKY6fLXVE51CF5jG8Mi8HRp4ioVoTsRdNKRyegNBrUeZJHutUtiUxir",
  "key39": "NZn5YewV3PQKn9sVWs769BSbPUBVn3bESepSsnEA8eUH5h8jNazpLHbPGDCzm5jGgbppaqdxA3x2xgcEf9Lipa6",
  "key40": "fv5L8JiugexcHsnGfrVKLSQpoGvPcPgLRRGtjjbFr1ENjdrHAz6YEDtNRK4v7KgkNfH2TVkxz3nWEwwbWmFQWCN",
  "key41": "aojxNeRugpW1WUBjdLwnxakkFmP1G5yficHgp2KNZkoWJ9NALjSQvejrZQEH2Kun2WkFvwfPVcnSc9ixEueNjVR",
  "key42": "3YhczJhZRXEmFUU7VHfk42wqT9pGP1MLabgP6dUSAaes6ARo9QpC6xG2bSbnkiNSPv7JyevNjQ3nY9CR9HFZRrBE",
  "key43": "43pgtcpYh7vRzLVgaT6nYDssSi3fyWwMoMJgN6e4Mp3XBaUoz7dvRqh2FX1ur86dRU2uMEKyJiCEkeXBY2mf7ttT",
  "key44": "W1rweRrbLBoNvP3bvSBdDcXFMmox3LjZSmezB1HgH3FuPKv3R7WhpjwJ4SHJARdvoi4isczo8p6x2KktT8B9G23",
  "key45": "49CHdTDxob9pWq4tbNnk9QeimnM5ZSsgsUTeHBU4VvCdUJe5kbrjyB8VePqJEw6bGiLwYqjQt1Timgyh8yoMdnjR",
  "key46": "5g6ygDjc8DXkegTht3QppyrEgKq9pm3bKo77yL68nQ9tu3H4KCv1g2EEiBg6gBUcxVoHkzFVGJm3sJTgnvR1kh3P",
  "key47": "8vXBGrHEUKbR67EBQEjE4AdGSqCTYWTSDc9rVMSMEg1tbwMWJjLFA2e7FZusiiamjXebjYykv5Kfbp7GwRptvU5"
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
