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
    "3ojpM2781GRcon4p76A2vdp89G4gUL4jCGy9GQy8ABjCCuhwg6EVTVzE4QSjfsaU5duqyu2ar9G4cMBKJyMhops1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A9Ed3iqM8bnEkhc83qUKG6bmGBEnhDBMqRyu3c8H5Biifm2qsnxnHYKbqjYfSKirjLFKPmtNio4VhuBfJGv9oTJ",
  "key1": "2ZRU1oMnx1XfQnfBBjRSWgKbDLBLC1eRVRVt9rNZFRdjPwEPAH8DQVzX4jf9Wgnip96nGZ67UTjghrBKJbKQ4MCg",
  "key2": "5fvvu3zjSNDNnCWXDPdT5Qx5ZYChCjxqQB42detY8PLxWjJHmD1HBBdh2iSRETAJM7rew76yWthoehzNL2hyfMCy",
  "key3": "q4M2HBdHMLqphcWGmoLTTGcBvUQHtBrnDVtafj5LGDGQd16FLwF272bSyMWdk7hDNhLT5t3Sw3tdWyNBUmcznGP",
  "key4": "2AqubDsc8QUk5oUpDKFEJUuwunKUy5ZavYa6YjgNQ6QkxhhcT8abkRDqvkYfU6jjqEMEtaftCT9cLe62oW98nR3H",
  "key5": "459WYWQsi9ogSTD6y2FQz67ZJkWkyLUyUbQnBa7gFXVm9dtmADwGNSzpFEWmCPuopvEWsVgviKsFjAFLAQmSGKPv",
  "key6": "4ZNPPBYrBSHohcnk5D2HFdUs9h9sypWuRPBihdjC6wQBAp3xQJMMt2qW8fmwcAJYjWK1unq5gRsmG2Jm5fWxXM15",
  "key7": "47r199AMpvMjPRfYErgMvYqKgGDezrt8FNCKNEh19nQJKio7f5UQRyNvfrJ93Vh1CQKEvWMd4fHzYZ3kjMT6nagr",
  "key8": "2c8BzNHzsvBQeBvyC6qa7w4BZdSNS2rEmkKMWKqUnsEvpG8Yw9rjd1njcHKNSsvkuFw4QNRJqWe2TW5gfNXcNQPJ",
  "key9": "3VFSEAweFM7ahnrCMWp35pR3huAaczAJNjd2Y9u9BKXnasBgMQCrFmEJYY9JC771fQH4yEHNxb4kfziGGzzgwh5t",
  "key10": "3ZsPN2i3BmvtUy65u2ZMUJVJGD7j2cLZzW3J4gHUDfpLyCtEMpFiujWtMvo65MhtqVyEq9hhdx6BEadatHMpiy1x",
  "key11": "4fYkG9vF79pPKVDAMNndoBxWXdZoFK8tCrKvTSuwY62bbba1JQ2dbk2YazaiTwusrpkUuLVyLsrgLpWB88Br3PB9",
  "key12": "4DbTj5E3Rxd4VwqZXvxNjrubjuHvMMktUkGSwpoQNeQhCSDH7VxSZkmW4t6tnMeoBgnTf2X6TjUT84qrTgCrTLxp",
  "key13": "4xpxTmyjwfwzw1uuix1adu15p35fdnn65vxu31azc3bLWeNkhPpy6QVa195JpYkFc5y4J21KcKDGuZGKCSXVWaAT",
  "key14": "3D5RmdZXSz96NDuEfULvjVzg4wdxPNRJ7nfCVcUaYS1a91JsQrFp3e3iZBR7ZVm2YUpj9CYBHtjBVDxxYrbALoQr",
  "key15": "2y3Npmrqok9C1EiKGe2vR4KhH13Lnw9sFCB6kwJKtYDcHHmPLfAETiwbLvEFXFJP7VRLmRDJa5uJw39HDqCP3ECb",
  "key16": "5cyxrFBFkqjASPj2gPyAK5UnQv6rQ79tzBLmc26uWdGK9nxUbKKpVKsXB1TJSxDiDdGeQ76nRUcYsh1kUNahYPnf",
  "key17": "3Cs3eAhDJQYtDu3Bsf2QHd8vFDkPtGGcmirxVThuRnDT7KFuuPfNdadQrnuiNUk9PCbtJYmLqHyLRv9jwSnwT9Ar",
  "key18": "4ingw6i4W3sLAX2R7Zv7itbZJYPfs1vmxTemJL2ipz49kQRVnwdu2ZcFVq8ZuhmTqwSYhWpRrNxURXs14Xryh4Nd",
  "key19": "3saudknEyBvVTc3LUeBQcvNFpTXTe9XKJmkuNRA4dvdA1F4LVf2HtueeYjpReEriZBTYvenGhRofoeDtKGbD47Dh",
  "key20": "45S8yRyg5RkbpcaxK3VXDiv8RCsyWKahEjKA9B84UjD9Jao2gztnmyVMDwkkJCuPm641D4Hxkg4g5PTmwQ7yhQfm",
  "key21": "51g7TA8gNMdua3SzASN3VhCyWU8z25tapB56seb37VTBAGL4zBC26beFNtcgzxkoWCze3Y1xj4GqqjP4DWqXR8ah",
  "key22": "5ZHtpiP4j9swd95bgen1z7Zp3LUg5SerxaYEchxJ2YKbEXZnx88kHtwETfRQ2eAnBzFiqpGRsPMuPosJY4epqYv6",
  "key23": "3ywBWNocjeJDV7hwWjZ62b7v7ZbDSgNMmByLGawpUZWW6n9Sq7G8oQAithhY4F7dZiDmFypHrj8k6UF7tSMtiEJQ",
  "key24": "2648j61f42Z79EkAJK4sPWbRYnLm9qzFdM96p5tTbKvDnGSiQ9fQwKpntciHPAf8bWGv9AJsyzr84FnuK2ZG2DdF",
  "key25": "5Y6xU1Pj8f5rr7es5yMLqvA2r9Rj4MJMrcYXAfbPmvKbjSeHX8G7p6RGre6ydSfxXGALU7KKqPQymd7K19Wjj3KE",
  "key26": "3AKknFGNPCF54ZqBqhRyEdyLchVfTS7PLV64L7Y9AyGD5chApvVgFyBDA15rfi8MwqP69v1o4kshtmxYHXwSgjBN",
  "key27": "2WsdpWT5tdjYQgE2vmmK1sv7N44jVAtBa7nn2dLhntYe7F39vjH6hDUtke39SuNRnbWEDowRxYyDu26UaWApoCJ7",
  "key28": "2vGhGBBdewKyBZXnToxAVdg82g47LzoqVv1eiJSwioofMzX7Lar16bzzH52rwDgf9g3y47sKxACK78VABjo5qQoE",
  "key29": "3h6ofFuq6NQZzdBjBzvUbfdvRzEGYLcXTCHBvSWeNaGZcoYg9G3fPsAGeApeyKYmMuUv6FXw7tZPhvkDszECLTX3",
  "key30": "qHXuvdjpibVWBPEcUuuKJc371C3gxcwz6ZXmXhq4GDQnhhpJG6mcDXdmgqkWPxpBjDt6Ns9kxahJUgkP4q7bGuC",
  "key31": "3AvpaDGXD44yQyQBD5Y22TQFmRA7u6MdomWVAe9Fq3S2XSC1VoC8hSjUweYPYYH1az3hYuXFgqqBujfUa9twEaN6",
  "key32": "5x5SSCLvV8KUpuTBH3T2EF3MZBv2T7Bk8mdPPS2Wo1b7JfWdDoC213Snvumt1X16UpNrPtef7bq6fTW28ioC9swh",
  "key33": "EBQ3XTnYjv2Gp78JEwyiHDnCFaMEQedB4V6zaAVgnvjHGoFgSph3t8bxNtb1oEYSBcvGs3ZYGT8csTSYRL2G91F",
  "key34": "5ocDj23zoC1rqZdgfhiKamSiVuyukaeJDydJi1zLTNvT9SpuLUsp9ebMpP7cbdDDXU54YNMS6i58x3wKMwgAcgaF",
  "key35": "4xiQjVTpQ6wipBnWrd7B9wQo2KNQyq1dCPmS6oifuCExY25b67ToYSqGDweYGvMdMdHLEHKqbw7fGTUUZwms6DZ2",
  "key36": "Wq1TYm7exvdYS69SjBddXXFydUefdieLwbcASPHVuTCMCcDntnC5LLX5B2GRRRDP5smXLHXrEWqa116FArMLVvg",
  "key37": "5Ng4etFM9nWSqiZaVWRaR3XrjbMzYj27pkN2z6Vxrwfsn4QmXd8TpYkSVL1oMKDZQdPkLagu7yzokiJatBKGDeMm",
  "key38": "2BWFR8M6nuCh63Zyi1QDbXPkD1smEnmw7LrLzstwkz9TnkwivyWEaUjLtAd5vuHbkJwvoVYnbKbUbtA92bU7n9zA",
  "key39": "4WrBnbrvBfSf8RmM8NjY1NZHtGGEQtcFKUHJMPABFhURzTcvGmYHFk85pMya6pVhiZcmDj6z5KFGmkAbHCqtoB3e",
  "key40": "2n8RM8CrEhmukAc5bPwRPQ74wnP6kruPR4rZ549F2rsLn3k8oWyatfyvrw6NKzZTs6DMtD9XSsy1LoZ3KPuLbh3w",
  "key41": "3UGkuVxDTHGGt3WtCTb3pLUJy6hYM6nBYHuhJGqqNK9ExZhYxMPpLa5tvtFs3NkeZi1hVMXFuWN9ixrjBk3gqvXn",
  "key42": "43W7LtyqZQ1YKHiKzmhgpSXRwYiqw5oRL6NU9ebQ6uhz3mDuAHBZnKXhGStqBJC1Ri6248kKFqiNJDX4Z4EdnaLQ",
  "key43": "4X7vKpMNsBWDVFg9XsmtHRgrZYtS2dXPv1MHWnRpmJhQN3gqaoqEX4kSsAuXSFLkiBYHTGE1V4rbDgcXALRbSUKP",
  "key44": "3kfu6sLvpt95fn7oNTJreoRwoWYavJY8ma9fmmngEYhHipKCpA3vuAxWAiAqwHKVatZoGKwJRoXxhNL4mi3Qrr3X",
  "key45": "48t5UspYRj8rgS3SUphcPiVepyJFPfDTeq2micE2uaNV9wn6HHhwT3MZP6D6DrnyAqGdExgkmFriYKRxxZweVDbs",
  "key46": "3QBaJpNQGzzPJh9cqquseKQSo2b58bgYDDqgmRESRZbf7uQ3cw4n76auasgNShjVVPDi4VrRTtmDQbzUeWxFkqzD",
  "key47": "SHBfWuQ6Dhc8AZcLtmrN9j5Xz7DWCgy7QVtLFm5Euqu8JreMKZmvh2BsoNif3CgCRQnTcRY6ZWuwt8cNEjijBqh",
  "key48": "5NjPvsSzucPyPPo4JitaczL8d2uMfaABWhGxrMqZ1ykgFygSfU9cpPzWF7H1qCFiK41XqX6j3x81hEk14rkThzfe"
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
