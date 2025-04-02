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
    "31A7DwQ7CndrowQFdNETFbKrmJ4AyTjKqrrY5VCwHmNwVK7r86Z8BtWRvMnhefogtjoSGJmr83Kanw9r8fPdxx1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XrnFQ8imPPQ4LgYGSSbN5kZfpP2p3gx98zXuaCrTQECYsUSi2LxyE2xKGjq9Mo4VBBzKzqkGUajWsE7fd8aSky6",
  "key1": "nvbB4vREXWXNCgHaR44xKEXSNsiQFmNzAqmjwdK3gmo2E7wjX7EXB4BUxDmGTmprxgpcRn16oX3pcLExoRSRuHR",
  "key2": "4ZshbPBLgJtz7a51o6y4gNQpjJgtNJwvmzmKBMSDNf4oFhpoSxJdBFxtNYHLZty1cCogpJrMLgTiyTUkgTkZbKek",
  "key3": "2zFbxGk7DS6G6EbBiEMUr6nJ1DTKKtguY8nekuHj3FacV2xXDPHisyUZA1PwfLQNzVKxaR1MLxV5Lo3hwDvyfs12",
  "key4": "D6irZSsZPJUXaJZn4j6cSTA2q5pipAdnRaNc4S7jKKXTQxMPAnXHdfXQnRuZFnQAA6QFizeu3WZEtcGf1CkUKMC",
  "key5": "31o2x4EvGCjjAoFHb16244m9VEqWpUtBqqphgbiLLPbZF8cCHZdsr7Y7PcyGdgVDpycdXnqBJEe9Qxfg1JxG2Zuc",
  "key6": "5FUqcnAF3DQCRgubMBtcusrXTh7GcETtRk6ih4U6dBf4ZwhhAKpYVTVs2UhXvACfNE7masA4TVF1QN8jsszV8Mxz",
  "key7": "3cbMbjfKSaWyHQoqeaDWJEBbEXApiQSVkm2hbG9R6wcG2M5AkcgPs6cuVAXEmtMobEKfSVDCTpkAifHdSa7Gho4g",
  "key8": "3yk139U21AcJhUhAiGUG6oa8jLsQ6fQrwYwLeCWgYA9Ko6AeWS8u3KkGWEMGJ3igUaRTphyp84diH6Z6wLNPRHWr",
  "key9": "5HgWbj1rTjy74wt6NVNBgnFNFX4QLDvmw77ybzakkk8DtQDoXVAr61KwhDVTG4ZrJzevnsAmibJBugPk4P4VQocG",
  "key10": "4Mf7MFzCCK1NEM4EmZZTZ8rAHGVWG8f6Fdg9Waq2PKsybUyAoy1gKCvWb61wTWbNT99pj3ru2yRWkhiVnv2g9rak",
  "key11": "2JntcysCgidFFyywWGRjSLyEL8Pk1xN3PoYgEtxi1xMTaDkboJxMrXs3iEvg5af2um3Tg3eVSZaAyD58DMsw5Cen",
  "key12": "4WfFqAx9gJJF4pjJnL17EcrMj4LUw2guGHxyNbiGZB1d9jT6bVfxhFhwZxuu5zaCZZtYYd8v2ns5tHuML35n8ETn",
  "key13": "24MV4gj8NtTzXz2c6f5XopY71qnJSfPZuXn2t7577tci8GthSx61B1he6eofo3y5hMd1Pk7KYXix3gsgbvtUX5QM",
  "key14": "5brmKFAqScjVRaaMWziEkQczpqPdZxu9WVoVAAFW62Gpwo2n8tpDzF9mFukyE1CUZvayKXTigqBF9THNScGM3qyj",
  "key15": "25k9kWRJCL8o7pbXLZEaGcF4FjxgCB9vb3oToHaUgXVwvvhqnx732bMxJLgqVkMWxJGvPvsgxCgwqsv1Lfyw7y76",
  "key16": "4ccrFh4i4P8v9dgS6Kc413Q3PSGzwsDWLNmkGfW9VmEWqpWbX2euKEwYcY1VEkZH7tkWpfv1ePXj6iZby3wHXLxY",
  "key17": "v4d5gqr68cJ9eV8sPi7unhPaATqEFS2UwRs1wunp6cVuX1vwfDTZXcWMVq6H7DhMVyREiwHDETgqBHCB5qXv8dX",
  "key18": "5AeKsuGzmDaHKfx4pCQJHJhVFPo18Qjm7ow64rPrvRMXhGT8FfKZ4xrZxh17T9wAbfLcxqDq8jcoEvYJGuvWWzmR",
  "key19": "biaNDLRJ3hJ4ycPJ8NfAvQ8Z7CHGnj48J6fUNZ56yZBB6nyPQ6Pp3yCNYnLsRPUFGtdghcUkjH2nttJCbenD2MA",
  "key20": "5Dotj5dVeDxLyZ1F6cLZm3BUeVMRy2WtwZQLzuQYETfj9pJQBjvT2f7rsEBkmd49Vk66UBAexfW9R8QNLiJXc31m",
  "key21": "6262gtZrKu3cmi7UNzpvdhQ1wiEu6FX1EJBvLKLgt8GTAGtbU6W7Cb2EiJ1jRktxpjcbU1mhicHrnCfV5X8xRr4L",
  "key22": "4YJ9CfGEfk3kQp18pq347rcwrfGgtEADAYiy8jdLySUxoEE2jSmp24oN26bqM8zSDEMM2ARccPzqKfdAzZhbDCsP",
  "key23": "1MVw3huX4mXeFP8bLRkp1jZ16WWEtaRMs1KnAnxf2D2pd8boCghnzU49xQcmFoTxZZmgn8eUUuG2KjUyp4a2LXJ",
  "key24": "3X7BKC4bDGieSZsy8Jikr2mKzdkqJsz5dSTwLPam1VQ3NUTAgTXjz5t5Cf8FnWmpeP49LzE4CnKBL6je2hEzvGs8",
  "key25": "3HJwpVmnh4HCHMpiSLiv1FFgzH7PZ7ezUdqjWZT8zQ5pMoCChZALhFLAwamKmwxj4RA2JdRrMmEkeJ8tdt9R3q1s",
  "key26": "3ECcEdS1WeWYUHwcXV6EA4uvzoScQzG7KSGRU83ym3ovMYmMimTTnJAnJLW7kVCS7ouF4DJmkGs365JXKn8je3sy",
  "key27": "4xtgia5GfYsGUwsNYbDmnj8uY8SQSbR3VMET47NjevtJeGMULxjGK3MubJhBbf2wXnTsQ926fG1op7Q7sthMn5kw",
  "key28": "4SGMP6QZzfHB3fEL8b3X86EEeeQmqtBHDHzfhMwq83D7iw5wb36qpvv6Wsp71LnsRsP4imtJhHiBBXe8sse61yXf",
  "key29": "3V4TaHbnK8CJFqvgv4Pyfyv4kJjhuACxnzis6fJ4UJ811Kc6ErSozCLg5GBCResbYjjYqwg9cwjEW8pA8vQotMWB",
  "key30": "4LsRPkYEgqk68tfzwf1qexCzebQrQS2jPEsMSpJpEj4P3MsqzqSLt5a6tf4RXtZWj8gncAwzx3waAqXLvEFmZgcs",
  "key31": "3rYpdfKAJyKRS6p5uHguFZUXjzvQLPvfk4WqWGT6RSXoAFJQhoaY1WRvY1Hh6RSXWWf1VhaDudscvsyerx9VHmAF",
  "key32": "XUFoQcnkhuSRXdwVQjFrhf5R6XUTYpwnMR2B8gWbJueMmUrxcuB9af5GwVUmJCVuGDDkaj3tBVJBncLvqpJ6bq3",
  "key33": "5kPAAY1RzFh9ZaVZxARRe2yC6NF9YDk1GAmifmA9dE2wzmBw5wArHcwXu1xKQ7xvKJbwTvcuyEanrbWohFMrbZK9",
  "key34": "knxDZjareCsxHaJ3B8iUUjQMbCZJywfshamA3EANyFmv5Wmry4LFccRhqMFt6oNaXMSUMoLPgAYtZfUww65B9vq",
  "key35": "2ci8p68H7VCSKj4TL3QBvhAeWdw8BuGyEkorByvtrLamoxaxP16rGqeqzQJ2tgpPg8HgVoyV8hq9EPMe2yRaWSC8",
  "key36": "3Gvm1LKayQNJiKR9zsXxuexf4k4dHSc6dttQFhmrjpWcnX9kwpN8FXJYyJqT3qbP5FcBgqjWKKcZWXH3Bnar1GUf",
  "key37": "3q8kM89UweRXvJKC2Vq3usJBCH5KpGqF1JUL1uiPd1JE6ZmrMivtv31KhKK4B3VAvQFj3MGMLCHzcvytYtEW2RT5",
  "key38": "5rFTpefPNp6q5dDYWQXYNoWDHvA1vns7KXm5cuRMFFTiZGXz6gEcviiA4rkjLeESxJ5oiGTHkHPFqR4DSuiRQNNr",
  "key39": "2Wpt2DC8CpXGzcZv4di6UJpj1vgBj5vE2V5n2LYfb8YitGNcLdKmAjJLdLVv55rd2oMo7gDJsFmuxeXAxzW1BGTq",
  "key40": "1wExkSVuYS6ZsGxzffQ8QKWjoew6sb5hbRJo3mijBNVQG5KbGEMCRVM62Rs6fsHvp59J52haT6kjtBiueVSsf9b",
  "key41": "2tZDYtEiVrYudpymFGype2DL3cPappYknxbT3bk5KYaSG9PnNuAibPReahK1px9eS4vPt2iGxayBP8KYgott3JKc"
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
