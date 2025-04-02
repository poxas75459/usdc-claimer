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
    "5uJGmBrSqKhd42RAaTE7WwP93EH6kyhuCDLzTt1CAhCTwUQo8oVgLBL9NuvmpBJgvR6gEwz61GW1GgsJvyoE3aos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DpHYym7Ah3jCsMEeAn891SEJCj2WuN3HGw6fpH8xqfw8Cb9cwKgiASGjAmHKQ92aVimNvHYEnTNRyvkuVKZYBZr",
  "key1": "3yqvhVB2SFtCRc7FaBGHyB57xzoYDTJ3fjh7xXC7DzFRaRvZJVhR2RxFRNWj6rv9cucWLyG3LB8NFidykBD239j1",
  "key2": "2hs3zdm5pdhXfWE4hCUee2LzvqUh4yN3GiucR12g5c66dR5jgVd1WMDin1ZFGbTRRV4kMtQS39ai9Y63WDBgQiPv",
  "key3": "hubP7nMaXpJESiDNtRmNSz6JbYHooa6aHdrma3wjuLaCaZXvJBPLfeMpWySBA8c7wsM5mmbwH5M92BGFKkM8GJW",
  "key4": "5i2sYVaTcK7WSnDy8Z4wyehYVe5hdNEPQMn27Ldv72sEwqMo1huCistWtmkNB9YBnsMeu3pwykCgnAdeeac9x5Zi",
  "key5": "4tjFojo5DXCt5WWvLyDwde5tTtzkMoo25LAs8GzkXD9bSecAmWoGkM7P724sYfAFNN4nmuZ5w2uPed9Z3yzxaBZn",
  "key6": "3NWvLeTS4iDXNgDDyDRVo8cBcV2oYsZEWRAx4uycKFDghMnPWywruUsBJWkSUc7QRLrZgRdXKphsiqRpKiftSAUn",
  "key7": "29HJdxQjxGttefqjFTaSvrHmBYk6aYQWRZ219eJmZm2dCNVj9FUzQJ3cRf82FL3xbQd23bpSrNsjHztcWWiLQ5B9",
  "key8": "5vSDwkG8d1qPLUN9b6nSCXxxU259g2JkFp1H5f2cj2s6vRGhDNTYiaf6jrrVnQGaXfXGEYDzJ9Q5JGuJuio8HHhA",
  "key9": "2ynBxiXU8XS6Uo81K68kiH8kHPrQL1M8JC8z9RHNK4583PF51qQ8fz2JfD6CMSzP7WFshWjMuC5AzFRuhLiEM9Yo",
  "key10": "2HVRxnj8YHojZFnLke4VLQqynT6E5HzTBMw3EaNjcyagHXmqqFHGHziXjKbgjqy6CVDtwAeQYb3tXSC4rCnndtZc",
  "key11": "5yZZcynNUvVCxgaFwu5U1uzoe3gfH3jiCzbWXE7j15otWEeVTyQdE4yF3k1CVogNUimLqxvCDkJpiwEQcvJQEGMy",
  "key12": "5QRN1ouhuSWQcvPBJmBaG5gyZz42ungjcdpFkpNnkSUciHDjhvfiwiVZU7rLa3mcQ66YDM7SgpbZj5sHGLhAj5V2",
  "key13": "4qY1cZpoBEoYS5fSHqbXgmCzNmpfoJf2XcZhi3KM4NYMeFCqot7nVQv7otPEbLY7Y6yumyVkQY39CchVnSamavxL",
  "key14": "5S9JqgU168jB7xUoyLHcmsb4V8JQ2SrFtF6qpMx2g58vNWJ4ijfRivVhzKhzc3YSvtHPxRJ8tMdkHPHvWpp2qyFZ",
  "key15": "2wNRSLZey3HaJSDxkjALDDw45pELvDBqr1w3WvFQXVU95JgpgWYkFA61rr5CXs7izfFmx6yU6R55Vrhuc6NvQb9m",
  "key16": "5a6qVFKQbJZ2wXZkNgd5GJkzE7QM6zkm13ZAQnAGHTbFEovycazxS6at3GpCWafvDsYvaNGevCY3ZkFXnMUY9uN1",
  "key17": "4XVujBBaiB6nnZAsMson7w11GTkCanYSbExXVakG7hviNR9QrhjWM9zQrwJVhdorreBDijDC9ZJLkVcBrGF7mgjN",
  "key18": "21kf9xzLV8C8vWLzJr6KCQDY9MfFtkYewFBRXt9jDdBZzPeFj44n2Qp634Jjp2BicoFbNskjRAg7K7WRdw61Vtk3",
  "key19": "cbD8GipWnWJK9ZHKei1VzB37nm3QCU2TsVvfYpvYY1ubqk7FAxbMZ4f27uVjWHqnMscHD1ATYS2Y6ykzTZRw3tj",
  "key20": "3J4HGJhaoLvJFg1Q7i5Z8v4iPR2rNx9np4ZBS7CsRMbauwSHNfvqaqWrGbi2hbEYqFJDjcdXHxG6JemKHMCXvieX",
  "key21": "3eN2ktvhuqEnSp1hDUAkCJwtwLy5fNktxrVWMSybEjLDDW5x1exaABEo1CKfXwaqnm7SXR9Bgnfav34TQ1hi4cen",
  "key22": "5o3C143z9KLw5MHd4wR1H1EomFodCxBaFvbCT8xrzB5qG8sdrTnhquLKox4UkxHQ2qwSiVF3445oNqy4Bq147NC7",
  "key23": "4mBQkGJkoqMcdrjrpsn8YzNUZJyC8WGKDA9sVqfZg2HpfuapfLufP6VtFzPhuT5WcgFC58kyiScJncZ5ipDvfSpJ",
  "key24": "4cPt2U8bfCCDwDx3TQ91Y1Zf1braJj3Qre53rgDeAyL9ZMUsCmh8cBakGWnPkBRGerTbwpx4w9KHGkiqVj3KBCi6",
  "key25": "2kKpHNxMzWuJontCzMM4wcYX9XHSJs6sTgcLQ1V9TWraJHpqh1xssVjxHxP8DMmsyJJ6f4P3xVM8qUKDKAyoWUTE",
  "key26": "5xJgJ62Y7Hfhd1aPdC6nHSSAumRKHmJx42eVwz1c638UYeEg2rsBHquA7M25CKHyu5V3hnYPXg49aD19AiPVrqLq",
  "key27": "4D8zyf5PVUY1qGTrJUFHJVGfpQLSbPPZgV5ZfT6xwb5Et81xdcuRTfoBTY9Ng9LsjT1S1G5FyLERgg2uuKMB5fJh",
  "key28": "48GUTLxBRNuD7kSPGG3M1f7gYpeg4fRDT5hQCAGb2prhvBNr6NSMCUeBgUThT3xL8Uoft9Zqbrk6yqJGKaKMmQVu",
  "key29": "65vtpDJsm1FUZY1kJkdoV6mjtZb3vn5dQDCHPEbbvBA63GaDdSvPaUHeheWSssCdRk6aFRYoDgqXQPYYL2CC3jhv",
  "key30": "GjcrENmBzhvyX2uSVSUCXjw3bPH4a9toi112NJDSjfbrWQ3pqyqvzDk39v98wDKwwVcitYvwUjdc3VYNTKrDwvu",
  "key31": "4BnYU1P9HdFKupRveVmD9Lj4bj8v23H49wkjEFtywYitHxcZGDm8REbmQTzJCPNRNEGcGSMZCG8t6QMfvNTXKnnQ",
  "key32": "3Jq6wE172mHSVxVBSh8H6KmerdRc7dsPSxFSxDzKXGbs86c9cECvrFn5gSV8CtqtUkvvswDS8pQP2L1fELDNh12W",
  "key33": "3VSiGAciQYgAi8NdChdPuoYUmzRhD4efVZWvieXouvvkxah5ai6sXuzMGnpVLiFdq8GHEqLnriRoNvCdiSzK6Nso",
  "key34": "27b5RzXEVDAsGy7HzMzy2o5gZAiGSvih1hJh7QUpf39avUDFW1UfWjNsXXHQHvkCq1qbRDkWxcyJfrBqTizwM9Bf",
  "key35": "55Kqvtrppqhi2e2buM1JaFGQtHfRZa5fNMcBbMhAnCjxKqPDgu7i6RinEzmU5CSwPrXqkVbivrx8w5JJqMA1dpQV",
  "key36": "2MiWaQGWbGu89ozceBcTo9vxQLQJPd1MBsUDt46ueCrC6WSva1fxRYPYKBn5ubwRV4X7B7PGFre8cfcMd5SaxUAW",
  "key37": "4XNu55CE8U4Q6K74zuSAu66KsqV4WFF9QHSYrWbwDux7cDERzdyydKYJtu6NFrft4P9Kqzi3EyzZwHm8mxKhwwUx",
  "key38": "5xRReZXFz94ezH3t8dYzmEbXtdn2cnAvw3EN8UK5Gamg43CvFDoQhkkrurYXjdkd8EdaigdJxFFe2kn7zECXCC2k",
  "key39": "23CfFScyy1bMKmuGpvzzg4MC22wNa9BFVZC8Dg3A6b38dAkZCNJv34zTdHoHXK8KS61sFYcfD6f5Ncc76kdeMDnP",
  "key40": "dBgLYVmeyrCjFT5nD4PUfB2Ebcy9UudpXuYC2YHZ9go8xHtikrEqVeRPPTS5drKBbEzYYU93YhzUMgegZLYmqfY",
  "key41": "59HvuEeeG4NZcHkKQYbhxtyqfqRkhZx4rH1JbFsswfFb9zzHhtRatuoLXMjo6LEsrQby4dvTyTkjhFuscMppwbV5",
  "key42": "3qmZQWHeCqXYsEaji27pNgwskZEhCsQSvPwG4U7vjMnAXKL3Qpnmt6CRvY64JxxThW9Wjnxn9GAUD6Hnn7C4LKfi",
  "key43": "2kjpWvS6zmsoTy131D3isbfmWBxxeAFZJA7acvB2uMQCt1QnSDWVsXufuqYmB2SJawFYdRCEGPQpCwLkDiXYcUCF",
  "key44": "4RLus8Nydb8gkA6srMhvjXuVqEDShW5kd1WBTVrxQu33okcVpiHkDnQY6KNYKe4ahqxwQRdANhYcqGc7WBtxKCXd",
  "key45": "24Q3DPosf6cpR7QaBMGQUXDXq1K5oiP5brXZE4qgfPnvyTH1vdE4Kh8YWRZgb9wSTHiJtFYxWLLUXfb5gvvzx9am",
  "key46": "h9xvknbtwNA1TkgQVfhs2FQrv1Q6UF47YDrMFag2eCD1DPUSq9vBpXyUv7t36pZuSTAVqcmdCdswWyfzRELPzPK",
  "key47": "FSh5K6QvUEVxgwoyXFxNbhMmNYuEmXaU9VgscBpdr124kMnwA1ebtWt1Et1MDxa45Lj9T3xk6NTFwoDBaQoc6nN",
  "key48": "VRZTSMzUJ5ndKHjD5KwTdR1NKcfHqKxfMVH2V9LynhekvNycJy5fh6cHebgChHENk6P1tbegTbyei6YZZyFkaQm",
  "key49": "4XkftU9dPeCyhPLyA3SBAAtifWEYb7NmzfojkHDD1mWZH9SWMmxDbocXYGFqb7L8vKuyDib5vuHboS55JzzRu6r6"
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
