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
    "5S7HcBSfzYLsRPw2sPbiWkrZ2HknLJ7De6n73wZfp64gyn2AquGf2v32V8wdEJGQEtAkNtGLkoTPBMsTxVangxFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9eBLW7zzSry4KGPHchVgtQW459WGGya8Fs8wFpqjQPLpn4hxuoQAPQpPDb8EvdKvizC9HtQNQFPY9n91Y8155Rd",
  "key1": "3wBMuGjPdF5X3CjkeuS7mgKmkKCCPo9fNqTXNdhzmcvGnNdvAkYwfwsAyD4L8SHw7WZ9boqkXjiRWz1gEMgo4CGu",
  "key2": "3MQgX2aVFfVbZLiXqc2mtVBMsvF5wb64wTwanHy5SWDZwRr7MNwpvW5YGyBKrmfdJPnd5iVaCG6RizpxSwC5p4aj",
  "key3": "3XjGYRpJ4zZUFB14iuEXsHj36N9WqDHCJyNdctJvt5eXLfYd7YKW7cdzvtnL3JDrh3BrDXzihCQkvqG7N28GXDDB",
  "key4": "4pViuAfbNoNDmytmQ3ANC7Pxjnqc9DfPHHMGdVeFX5Sb6HHptXi79rnBs8a1ER1pCmcAqQkfH7pb9sM9zS6L6X3q",
  "key5": "tog2uf7KCy4T2kVpsNKX6ozzCXchMKhDmF57u2zDNq7jBYNgzEBXTNaq9jpLVKeFQqvXXzLznJU7eHmzP93nUKa",
  "key6": "2Zhi7Q9LoqJJafMc4bdqUaWwbxW5r37i4wu5tijkMV3yRMc7n7R3hoSfv9DJrswirGnDuS5xzaidKRjFAbseLAop",
  "key7": "fda4w4sDmi6tAAjvVkXxSFpjKpTRn9LH4hwuyd6W4rx3ufEPZm5KfFFafusk1BFGhRPXYjwyYL5AQAr8sUa6FZ3",
  "key8": "7wWcwo1eqcRcEvnneDfTrVRZka3E7ZKHjLRMEWghp8rCq9qmSaD9Z1a11My9WfKWjVmKAKQWDjCKUVPPmLD19ED",
  "key9": "5k4oPFhd2DdsfRH2dvQmicxTkm6bh4jZxtWhnDkkLQgKmt8qw4oUFgrTBeqRJjDR4tnVyvnTrD5FZcs22GBZnmMQ",
  "key10": "5C4BubeaebY5y2a2B6W3XEWSUyiBGyT4d8x2sppqjaiXuEmNNqh5u3vCMkV5Qf22Cj4m6G1YVYerpNwYP2Ang85f",
  "key11": "XutnDJqqAJkXevqENyxTt9iWbFTqHqz6e7NmRqsLN7UfjnmNBNtXHHAGevT9963BXGyEz1RYXwdASgRwt6Jeq5d",
  "key12": "xzbgTK3sWKjgXSGVRvWH9JF3BxD6kTd5xFkXeqmB6yMJqr6DypgAraF5GUTRt7fuMsFSo215dDoJX7nsetMu9n4",
  "key13": "2KriMh7nSBZkiRAu8AvNanoLFLB4WHAAsHNMLZyTEDQG9mc4rGhZqEHbwRTbokEaMDTwHxySajd7R4G9YcBWRNAD",
  "key14": "4p4hVgA6ioNeFCuZaMKqNvaqJgD7txLGN2xG6QPuEFqbEx7zf3XjrE9WZLC5Pw8u3ewkrMBcwFMRsQUmV8ub6ES4",
  "key15": "2UJnqD79aYwLixeLWMvNiAwN2LcXMNfqe7zY4YXSQ3e9CXXqaMY8kFzerJnZsrAgKATL2AifpQaSbY6LHfG6yhW5",
  "key16": "2ukQS6hbhm9fFmZSzLtdZuYbz4nDiRwUGQHSwXB7Q6EYVYJNT9gJfqQNZsFEbn4H8YQwcpwfX11PMwTMeYWR5yKM",
  "key17": "2nVxn4DYQDttBGbSAN9BkkJBPLRomw6v8nU5v3xNCVaHKHvS1hDcruE9EBaynEJxeUxjAqfX1bUyi63RvSWEvTLy",
  "key18": "4HGNco9RPo7wnz5KdQ5Pv2R54swdE3J2GD923pe8wYfikd876hLsKeFxDGM6pr1FgvEzAmbcXo2fyBaKX65qLBve",
  "key19": "5wYd2NcMSf1XEj9EGKMxvsC6y1iTm1ARntMGAnts1kqDxLMYCALx1KSqeypKPCDfbVDtMbs1wq3TTcaYTUdTERC9",
  "key20": "YmWBcrimonaekd63yfV47kVpk83NrPX5qUtSPPZfNRdnob13K7adfKhpbhjBDiFhdoB9G1yKEFeC5xhz5X4nB9o",
  "key21": "1qEPC8qXTbfkPaqJ9gnkGuN85JfSA9GyXvwhar92g6QEXVW1RGdrCWmRfBL7JjyRjnkwxvd43wx2NkEvpF1Xwwk",
  "key22": "2Mr7eHcqzWT6xKckweqvjwe9pWKaSKYemdodMaSM36C6tv9qVnmLdVpvSpZAWFsnTe2AwLFM7WE2L2zPd8LANNtp",
  "key23": "62MUiRyRACM9jfhirmg7qf32L86CTFBxExZ1oFbNMRCB51Uy14m2o4ERLQE6CJQcbEnzAxtcfFwjhPoYtnxkp3jV",
  "key24": "LSiHaa3HHusJR3HfcVox5xZkVA5Kjp5ixne2cjrWdbRtAKvEjKB1xT56SZ9npeHPoaw1mxn7dnvx5CSfBJqKws2",
  "key25": "4cYxLA1GanwPGy4EnadQSsaWEB75Pno37kt7wktV5Ze6K2ymWAkNxney8bo8eNxkBH966PJPmvqUUhK2zMCjoWuK",
  "key26": "JzFhXcvQLvxxkJntv3XSYv326KRmydfpUS5DzsHpnffsXG6ePQTFoYXfLdWEAfND8yTHaBypBAeut89PrNSCqS2",
  "key27": "4dXY21es4qS9YpsuV6KcRjyRWziReUTWdifq2cjFpbPbSYnvZgbs9opSHACHSmkwBuRAXFn8sZWAU239ZwmeuejR",
  "key28": "4BHhiEDkJLt9jsiBhaKiTnLMbdHsGLxj2dDmtpuGdXHcvQc5nRHzVB5KMhjpzGEUDKxUrHbesJy7UgHp4Q5K2RWP",
  "key29": "TTFEMqyC8fzRC6XGH4VKzv8NfqxmPaUEhkS1CsgBuHPisva6rGM1VrvbVmVnAi1irvWBstLEX7nsktxCtZgoaGY",
  "key30": "5GQFXELjpPNtFdq8N2mCu22y4Cvy6eutRgnu8AbZPN1KKnnZXGvdgnMFBeAX6BZb5LhoxeYrE5FT21VwLCcrTJQm",
  "key31": "2prnUnG5AwknP43PBuGFSoSVxgebk7rXeFtZvp6vrvZSdXxLQwK7wrL44PWRFA7yqHs1U5GGabYEEbJFc9Yy39cm",
  "key32": "31hvhHcadwqfHAypDG699KZcWX1bkzym5betFGzpPGMhmRbpTNYQvYGmfaRUmyFKRZGg4wzuS5TKUaVVmz6bMSFu",
  "key33": "3oK3zkaCihdWQtnncrG4EzmZz38pnj7Vwj5iMzr4xrUZutbAW5qaHR5fGMvkUYqEb32hziYKPVAtoeNUwD8QdEsY"
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
