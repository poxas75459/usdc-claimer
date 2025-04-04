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
    "Wbb4Qewb5iUfVcZQ3n9987bCvBtrV4na8CHVEp4Na8tebMS78KnTNyUF3ZfvS2MdyJEdwvA2zmGj35pFsTPigNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B42tUzEkLUtbtmajv8Z5WE4dCzaaX7cLUqKW7b34vjkz4TWs4k9RTRKxdoSt45WJk6ZncsdtGi1wRRZtbwedusF",
  "key1": "5JaPc9iQhrtSCpPUKYpbhGVfevvorMhR1WbfNEs7itDXj8jhtHXVC6z8rhiGNP9ihAuiMjs3mnxfTtAjqvdtNXkt",
  "key2": "5D1mmu8DmoVNKKeRyyVLRBuaUnTWd36s9eJ3tGXguyYJVFtj11eyvYFB5xHeYKRjyKp6yj45FptzMvCCbHQKxhsZ",
  "key3": "3SttMcbMHzEEDjo2DFSbc1hw97P6cZDj7mcfWd2QR3hV7FYCjmBEdsovv94cgDd9YTLnqK3LJaKiWzKKnGnQkcmp",
  "key4": "emD4SC7SWrWwJY9xkEBrdDnbHkeSNHFMiPSYRtB5ZVyrbkV3i88DSP5Q146HM1XtWjnJSt8BpNGa2qVmsG2ACmA",
  "key5": "2ZHp8UJm83NgGRXNXnynGm1XWgaa8i6qwD7wnQG84poQUSxndPju4uHetSfPt2WuasaG6aVRKuRKwFdaUVcrj7iS",
  "key6": "4WXC9FUpeif8k3sZmjzCTU6NGcuX811W7UFLYLvmRmrmtkfeXEuLLQu8voyP74CqPU7hiSC1eZdXeoYYLZWtaWdx",
  "key7": "5Zur3FGnWKhDVmqvKZLusdDNv4RcZjNZnxb1ZfzWRhjaeRc1A176973GVMCP9KRBWjaiipL2XW7Jbx821z7NUqhV",
  "key8": "5CYu6Tx6yueTQsCkKwnVjPV8aGK5aAbZetdLprG2inJqM4bzCgMwbQ6A5J7M5pLYhuZNmic1aHmfLFQHzRwqBUBn",
  "key9": "2ZzXRPv1NqsdWBkyihbHwpV8CDcDoJdMnkp2a9MYGimBwk7XgV5Xqx4tw6dVLsDSGaDQxruZZ9ssYhN7EXV9yPiS",
  "key10": "2rpDWLbz8hRFU5SQDkNa8AGLfAPUtvGLoYhE5Crbe9gfiFc6KPWSW5wPWRemtmCAZuzoGDKSBQ6LWfG7jrFzJdB7",
  "key11": "5FtYpzwvhFMcvdiCd89B9omTtgbn2WkEGHFEB4Fs3JYh34TgtPdt9TQL6oNTNCVkXD7NuAqtZWMLzskwtQortZnc",
  "key12": "4Qwa3pQxzJJYFHQGn3xrMN5cCjndZhYNtYYa5P85gwkavs37r5jVzLif2ydeyUNvv38qxY6eKxWzwikwbxWRY4cZ",
  "key13": "2zpDfD2FgLntMUGU9fZxjADpCq4x8U7jHFFHLreK6oBzJCQQs5i4sxrdQYi79cwvV6CAGyiVczKVmd6DTWYMkZrB",
  "key14": "5iH4taGZ2G7fUs5EVCSeoVJBhbRiw5ZebhL8uMEFgXA3fnxnpzYZTKEJZdAaFuwV4xQLUHtCLKfu1asSumVkYLrb",
  "key15": "2mcB8adkX2zdcffDjfoCsBiaNEwfzpdL2bPWwkMKgCzaiZGEsnWm7MRdca2M2fmBLCRRxRNzEDe4KYu5YjMBKbdr",
  "key16": "65syugzHUSf61AhZEC6Yi2K7ATMbx4u3DiebYXhhi3cpAnnGaD9ha8N9hXWWJ1FAi5aYVfMb3rV4zW7K2VJhfLws",
  "key17": "5pgFKGRoPLupHW9UfyZsQupv7neqnJ32biZeu46oMFyXgSsFkZnLs7Y8MASSQdDyXHzQk3e7u4VfbXqXw49eocx",
  "key18": "4C8KMMhBonByAif91E2FHAcZEYiLEEDKgTWfm9pWupNoQuhrL5vvgCbs7fgnX238haTdgfcmZG2QhwAM2VYsq3Fy",
  "key19": "4R8QE8B8m8d8ACWPD3utJuji22FqqLxw1Pw2iHDsaN7XgA4g2gP9skpgAJc3zGG1sAYTKQKVjbkVUcoAnxjBrg4k",
  "key20": "4WnEu86DWJt3MzAVbSuwquZWS2nXn2ARETzbT8TbWBfHc5fzwr9LopqHsi3tcfaUUGL69rchhkn1F4Wjemetakui",
  "key21": "sgPxPtXRFPXHzbXaSJLfzJjRMP8HEHWMof2RokTqLiBcwJg1tJtETUFzwc2nSebzpkWKdP5XoYFbzdttVcj63dV",
  "key22": "2r2XVL9ZuBUxy94eJ7oCBSHMNx2NHvFDj2LbeSxwRqhRvASV1iAr9pCsw4oQKy8bTxaWLL8MnNtDpumBs3gWQdzt",
  "key23": "YDBmxfPrNWVBwxEiAoaovbtztV17a7inoBiak6AHHuMWAD7uMwHp2Le7JVxLLyPKWDuMRyKnHtaAUSRTke4gBN1",
  "key24": "3rtPg3RsqHHJa8nkaMiVvYk6zEZus2nvMMVx76XuegLeULBPupBrQzkCEotyzJW8Bn81jvGzEJQtz7RmVyhP5Dd9",
  "key25": "4xtvHGYR87J8sy6Y67cccYDUpRaeNGTZDQSGBSgDoDwdGMshxRUfm6jfzJ7izTTk5UAAiCej848GbRxDGDEnfhwS",
  "key26": "2RPrXVKYmvZs2UyThwLjjAefyriLNcxyPEDZxX9EuwnA1uiTD6hVddHZ4JhEGwVK4hYGZEZCSBXAv8Gq7xShXmAv",
  "key27": "31vv5ARikWYx6LG2JL2GS9xDysRwznmhpzdh3QDbnwQ1Rz55ShDuZAEjVogNib6jRJWsJwHrPL3yGSXnB3abvjnk",
  "key28": "373EyaDt2JNvAs3EPSqpfVFHgJjXT8eZsrPu44Euvj8sxdzWyrHTm5UgoZjrxK6ByHziadfd2Q9qwfeQm3WBEpxq",
  "key29": "3CQRqNs5918B1QUL2VXsWTwcMA9JPhfUYp1nk7cCehh4jukPm6W5zeSWXa5jwAzxq3rqSnrcbpPq5LaAE3MCwiYe",
  "key30": "4so3m5uvVXVzNfTPbSfySc5BVSo1DrkZMtY98m4dBprj3b7Tq8LYxZUPpJRSRwkDLw7V8MbdvNqeTWDNoSR4F6s9",
  "key31": "VBDWMKro7EmqkGDDqw9AgK56YvCHxhQXahPMpqGxg2SJ3c7Gw3P4mKh6y6ca3wjzbxx4WtRaf6qstd3m1QegX37",
  "key32": "3csdqjPSMzhSwDzEFJ9WdKJkxgidDJGjkzdcRkU3beRV1G2Qw9JhxmJ6rWYg3DXy8MbcspWGugjTiS54dRptDd8Z",
  "key33": "4MJE4qDAGzyCuQCxPNHyEKGK1VPWnfrffUw84WJAFh7DNK7Z3zkWmGCqsW8acNqRvj3otJK1cU88CRiBw11quAb4",
  "key34": "4ABSN3BeXobgZu5nUWrsZokLameARLbJ33WjPGSpeJRjQrjFbztQjfSRoYFuSNLPTgTDb7X85EBXGcz9zhj8fE1U",
  "key35": "L2UjzUvrFKQuk8Dw9mooXvYyUzd6G1p383nxr8uv82cxG2cNVrCqGQZxxPaHfkyF13sXqSjLW9JW1NVTeaaPxEX",
  "key36": "qgZ8Pjn5pgdfU4ka4ZDfvGeWau7V1x8iAr3hTCGEsc6SB7AQn3PFv7WBhPeDgN879pjucc3T4ZJGV2Kfd32gS3j",
  "key37": "SxBYBg16F5Uwp2kr1RSTSCCxkiNwk8BgytyPS9pCRpWMHT7bvhVNvbiirMse7QxqJpGCT86vRct7xpwpKVJLnLh",
  "key38": "64pDK3c3XCWbzu5VmrhW9dqCQJrpX5kmWb4Vqkhk6jSxbyqYQDhsbcJfmrYjxyFayr7e7gbMSKFqNeXk9XzZ29NA",
  "key39": "32iZZEvNQfZwnk7Vr7eRVLYWhtYzBdf2iuLyF9UYCaGZxbisBsuoc4CYvT3M7hzLsgqnLs1GTTmWLD9sGMx7RdVm",
  "key40": "46VVsF4JrR25KZtiSYEnB6aAhyuXc1ACe7Y9KPavVgEZb5bhqXewGj65NjMu6ZLnGrm81JpfdsMdXgDMiAMr3fPD",
  "key41": "5LNSxFspaLRLoov7Mosb2waDyhBQTwUsLTL2pGTkHfmiaF4qLQouxPXvfoCybVe7eg85E1iN7aWsFfvA1JeKy5j4",
  "key42": "t3X6zDQZQAuSdCaRfDQVZKfSAYLDtt36mZZgdX4wruRkjSH949aFsRRKjjkuwpkKKHrHu4PUoGEasUfU3eUVueY",
  "key43": "2yuT9YhChQVdeS8L6ZDEvSzkKiZ9qy6vZPegcmXzwYFqbx8BbsEMjVYNxgbF6A5TfFbZJBfNriVp5N8WRBFCLFVj"
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
