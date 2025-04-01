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
    "2tzWicaxVuVQAej1GvhTBi1wXQtxPTm83Xb5CRKAkiuRH9CfuzRwcnxPGNyrhC1EEMDc4YpAoBUo9AtE8hsdsuh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yu6N2TqubTidAxbADQZuMc4FS994kzF8s5XXTiRjKyLDXo84YVYNhW2rcTybXJ3xYqG91KzzFdCV15HNrwMGSqH",
  "key1": "3sk2Lgr9YGCCvX9uwwD8j7rer8jzHnz39WhjVNgaPWG9pZiKWKVkckS15DGkY8PiuVcJNuAXJx9n3fCGR6bZfyD8",
  "key2": "Tg4HAvmhEdN8v2KLrRdxHG82ekMVTxFWQa7GWEXk5qkfQepkxAnAwKzri1gc9qeXS98Y4iusmurCzyQGAxQ3Tkp",
  "key3": "4kNz4NPHeWrvttfNwsCKWHX6JPJHuFin64Nswt1Gg6RsaGzp9Ko9fTVmV8PZ4x8r9DzC3fe4G7QhEaE3H6qQUGYg",
  "key4": "jNiEUZd2fTKGPsvHSTb4tsA7SmL1TFX1q5SWAFnYJUGCc8C7zWP9adUayMQgQpnRsUCNb2v2AyWkGZudsSZfnt8",
  "key5": "2HhqAKJYRdkP2FgHkWmVVxuP5jCScX4tPZachszx7TLv41jh7CbjYcC6q5EVYtodfGr5PxvnBYwzEuwaoPViyHUY",
  "key6": "6AcouCp183YQatxZRGqnVdM7Kc9nPhZpapBgu1hhLwJSfrHviUHb4KnbqxXvSPrSrgNHsauE9ejzgvdgPdFixtz",
  "key7": "3PhLTz79KkFapdEg2NBMRA5RMiuYMjGnJTPDneWj6fu3NYhkTukxjdZ5uBjP8aQxiTeCynk5BCwkY7gfbY4WxWF",
  "key8": "5mNWjacpyBeCJrTFm8dpeimJz4S3Hb88xViq5PoqX7f7DMuXdm49wzatm9JY274PvfcmrBogiDpLjR6GHxFVxBet",
  "key9": "vnSKp4fyXMTHA495CtZFhHoFq7d4j9v3nhQkhix2ZEz6W2NtzyovcwJrC7GbNpWGCKepGNgrAWirULD7EsXman8",
  "key10": "vHUt5auHBWWzns8xX6UxE5BGSXGkuVhPMuBA2jxtAdiLtwQ8waf23u4T4PaYfnaXQv6q2DUSKaALwFb7zTvuAAf",
  "key11": "aAumkADwDHpbYRGojP663GdiLBZxbL5YZfQLUd9UScQQWFBeZ9et8H1mfxyypwRYjhSb7D1dtyhsvDVRJ33xn8K",
  "key12": "22wYBJtCZb6i7B6yZ76kQCJC2i2PdMofQMsXSZoDnatmMkqNArfYFvBt8ZJw43iXt99fpoF5WokY3A7tSR64JZBS",
  "key13": "35qF1Ncr2CXxXEoapxorrfgJbr4ZjxpWH78QeZcW1vrwGqHpJEm9TnCK4HRK2rzDgXroMaXhBXVii8XLNHKuD3zf",
  "key14": "5nBFUCy8vLe7GAZTKa6qYLxo6VzYcDDtMdc3EYDkoCGTpsNogBFt2pMYkuugdq4e6pqJgAvdoco7vTsT9uop33NP",
  "key15": "pjbz7UhBDYVpxBWBJ59YErUCamhVYpGi8AT6ZbSscJygFy56C1FfvSkY1iDeSvTg1BiLCmC937pA2SQRoc2Y1HM",
  "key16": "4WQoCkQhGqcxSJnvJjU48r1eAX97aYL1zTFxn56Sk1Pqq6cf3NzYLLdfBP4tmVW38aoPL12gULRFTGF1CKcMRF3L",
  "key17": "3inS4gdQ8o6vjGyCvgnmWstSKUX8e8iCPwXdjcL1gwYPSS7UwmSsRocxLxHaYSyczNa4eDmZipw9RctdrXo4fRxC",
  "key18": "mswy72j3KDebEkCg135DehuDUQAPkRX7xFtmcUjzwvSzjeR73di5WoFdcPsRFBfYDgYCPtFeBSnmFUxvXVHx5qP",
  "key19": "4NYmGFD9gC2SN4VWnQogE6Eiq9WKYPkModRaEpUiHzt9if8Wei9zbpa6mkrGPJhF48TcB1oTQhrsRGxYbSnezYmR",
  "key20": "59UCk4piG2P2baoMQ7rdmJSiVeL7avewpgtLQBPZywB3VjyboEuczVBwhYWJaUbtswz7vzbKnhPWYoeZgLWauat3",
  "key21": "3SUM2uniLJxHNrpywit2Sd13d9BDTabLxo22myv9fZFEDKhY8JVWQrgE4cVCKfwcZjoBR8nGJALFawgFwBZCgyt",
  "key22": "5DzUrVTi4aNJEwaV76FPEdgtL8wADamkL8K9NzNGNQVxLM4dCcYHoNwz4x2W7P48ZbC1UViHVaV62JXdDZtfnTkS",
  "key23": "2bqeHMDM1WJXH58D1GzZ4PbmXaZdNaqoQa97GvjGfyXJoivdwR4fFwc34K2vuhSQorMgncvW9YS6tE4AyYp2NmHV",
  "key24": "4rvU5M6XW7vynVowNkwjmauUTcFyAt4928L8Hn8ZXipWgEDp1S1kGxqnRGdskiwusaG22CACVKJDhvHUCTuA6D1m",
  "key25": "212h8Ls4YcMAo8wXFn7P26ccTnKgcqpFjT1LC15Ntxe3JwupXbaFJGC7SCU1Am9biyLkcQzASWAHq3kLRHwBKPdU",
  "key26": "3QgoWreJR5R8Yf7TFX1Xd8U8fzThtb9W8tBqRDSMibffoLjcEtBYi4Bu1WP9FB3MhELVefSreiWWWaH4d6WwGBgU",
  "key27": "LGuwrMaVzXaymh4cbxw5isg3AMmygStHFbEwuzKjXYUD5HaopVyGQpNY5V6tqdHwYLqBAvpvnUufgY7AWjyyXj2",
  "key28": "3d4UMWceoRQzYkaDcuMTGf7iTPAMxdLYCVDUiGgkUmTpt1Uf321oF8r92LGTmsNgQzRM3ydTRnuKDQiKyF7HvPVB",
  "key29": "rGmgjBJQdjoz8wZpeYGQbK5jeJV6Sd3UM34szoHxWjgJkfUVkc3EBrR2kWU7BwsBFXx8w2QkvsR6ZMDFisn1Djs",
  "key30": "4d5q78r9aBUfKcyYb8N6tyUia9it5vdeHKLxTdyuC4QnE1pucjqDuYZSouDBaz8RVNkWgBmrvgJRGQed1xV1WZri",
  "key31": "2TEZVy6EaYFATdnb4NswGf7SXLTBWeEaDa5fwWTrdbktUw14AxXpBzfqcK6H3hWMyw8rWV1vzg28b2e16YTRXwgY",
  "key32": "4b7QQxkVjpBP1imdQfbszGKYzSRC4c3QzG9VN7cEzFxvsRsdoviFtransAgA8NKbAfCzwCmAVZwBNFE9rRY58mRx",
  "key33": "F3oGe8CqjFV2iRGECWhbk76arwT99NvB59GcqrNvZkbHngdoHQFq4hfyGGxgaRjPsTNrf29LAr96LkE9pfom37w",
  "key34": "3DonbptD6dVnDzRdS8XNnYYKfLN1BT8ZowPrUmmsAWdmSyCiM27hRu1yRzYXNSbmVbuE7EYWn1WmTBQTyp9pii3m",
  "key35": "iitNW1Skt31ng7wues7aQoSfyTdX33vDsCpdwkaV9R2EGVKmBdWN9zsgM1Snq3rwzEocqkxD7XLirXxrTSbtN5e",
  "key36": "5oKMiP2qFGRkDRoCwhzk3AEecANXz6WUs1ce3KTkwUiAtvkP43QxbEbWFwCSTcVQGkLAmWJeng66cSkjuoVBBfDA",
  "key37": "3Y4sELCmEvV4cTvmgUNaNmGwP6S8QyyzwBv4sDEeoTQzqKMA9G3BX4xc7cbX5LbVTC8jA9irKkqQ1VRwTFRKjwjz",
  "key38": "zMzPvohimNmmQZ58PRQ6nN8uXJFyV5RpyGf7FuYrV9HhafJMeGGsftFV4UWdKiHpyPk2hQGA3r5Nfmz3uaLjv4r",
  "key39": "KCsv3vfXtQp8L2onFCKkhxpptfaCA3sja8DjdJYxUUwFh7KApXX3iyvFpsLNznQUVMrEHmfj1EjVyFckxDiNSgf",
  "key40": "38UoaQyUJCDYXZsaa52oezwYasaubC3qbupFxe7i7hoeqEKs9PyUkQcu5V632AeuiGG9jBqm7GY7yT1t1tjWunWs",
  "key41": "42D5b7iZHNuNAS27oQgzryfFQkyXsh2MNaPhS4EutCag1M2hGTYkKFEwh2UXt8tv9AgzC6gGbNgukDG8ZPhZNE2e"
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
