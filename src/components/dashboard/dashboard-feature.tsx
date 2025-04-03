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
    "3AEU8ybr8q2bLu9G2ahY2FUdwSLMVbZCUsRjS9FVkdacq7G86WfZU7hbCpgQRy9HUhpQa2S7YwJv95jeGG3c2VNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KaRD5CXKREs3H1QyXbkXYMLdD1ngBNwvyKDgZn9ZHSZ1y3RB2Lpa9Zbzake57Zf9JsRa3gpP88SS2xWJgCUUt6j",
  "key1": "3YZhPDhBG83h3JkCuHAktAn3CReEXAY3Y24oo2PSe6tsGUV5SvptjrxnqRtgQUPLrYsURewYWx3nhShXssBhYkWF",
  "key2": "VrmiwVpaMpvTUpDshM4ot4nxPZEAtCadnLoiEhukDKogjxkyTu4toU6RjNXci2qDcKs4q25kTemaBD3natCeTVy",
  "key3": "4mYCSzEd9cLuZpsoAqrFXQ1WeUQ5dGBMjxexLD4EPya1ffUkwVX6EFn1mB6TTNzFW5v2XyVTxbZHKqa52AN3LyCN",
  "key4": "vLKNVmFodUGVTZjQt1VTLP2MjxTLGHanYozz5pg7tU215xi91mvx76ZK9umjqhCSL68fKLDP7qrfTCVBeSMtzsR",
  "key5": "58Lh6C5AbDTRr9edrYWk5GWm6gSgcVP9bdbVDXTm77XFCPGh4pfYyw3HpwqAMATaeCU6vqAFns8iQNxc3QSZg9Rm",
  "key6": "3TgxSdzCof7DQq9MmomFdyW8sCAowwPm7mCVDJv4zxKV4CTv3NHaXxkSizbNCnmX7yFXMEEbMmH3uTiptWpb9ru6",
  "key7": "3uLdJ1pkB5cqgFi7qP8T4uvoajoix6NKGajyheq1VKchMVzEiGyMw14wfgN82qGEQ2by25pA8htCXTmzHwAzQk7X",
  "key8": "5nm8iR7WCNBaCZtPR7222gN4yusm9jrvbrQoMxV8EVn4LFVG3LeEAVcNHB4kQmc5nzSS2YcSvYAdKXhyEQzBzMWM",
  "key9": "HTBBHxUENm39GN2wKzq8HhSey2pcsHTyCJUNKTyRJ2Aay5diyxymAU8U2TWgRazLJxqn4eE56cLjPfBkNTPKxzw",
  "key10": "5DnZHjKHqJC3ghw3FNNEE4ZVThk7oCRMAERixJTP9cC7Tw2q4hQcaqECswEpkfHhnFVnJH6sUmjGAfJckdnh5dSx",
  "key11": "2Um4rYYsNzaGTk4dktjfgd9WVHdCeRT9HUyUFcgYzJPLJnxJyN4KGTsaVz8fC54Vo39L4SX9PMzkyJeQjuQbwVNo",
  "key12": "3JV85N8Y7LoMUsNQ4N5F2vA1NBTC1LApjJKpURekPSBdVkhoyJkULT2inqCHHbQcXfmerQSNK24YFvdokFdUnkc1",
  "key13": "2QzXETrqBAH6oBeGmjxWHhC2cXWVctcVUSLLpzQdwv93YgZCjDKqBpEND2g6yHRsFURphnhyeBaubGSgcbrqv4cy",
  "key14": "3WE34Uno4ytpaFFSzZEnvj7m4k9oCTLL2PT1XrDgMpyBzetCBpiJMGLa9gCcvE6fnoDJjjb5tcipSWBKGVugGppo",
  "key15": "5STbEbHFJHz3dnierbMMZM4SqpQpZyFKPxDRNArFJwpBW5iUEucApkGhq7JvpGmmfSH7HtAuzEtTxQA6NsApRpPs",
  "key16": "5mYX1GkPfyyTrBz26J9qMq6D9q5xpnwMHBYPThpygXfvnL73LCSWnBLxh7og39NoVKcwE75fEYJrwrswuwvNFXYi",
  "key17": "35DygMBUGLPgSYWjUJE2ovEoeCsFDiZw9W5g1BqvLaLPNsBh2eYiTM4AL8X74rm5wBqDcEB6fEZc9pdVaiVHFnsp",
  "key18": "4RF93HRMvUV7Q4nNFvPPzDgxwCwCev5dGSL8YCKzmXtmvFiop9DDGmVu1g8br4pHE5qJvLWqqac4dJbJnVGRUekj",
  "key19": "4htjat2uPC5x4f6HWPoyFyM5GCCJC8ocNTNUzqtbWhEMyenxShk7dKGxouDTX8hbgp8gZZ3xWodBnfsJW6x2YbWn",
  "key20": "4k1KS4qfzcus6vdjMFiuRftTgzwjxtsHJubEBATrEgK7odswVKjpzkcGPnTgt4eCowXpFmmUJRBtDAJEB9Wc4jRz",
  "key21": "4eeMtYwSRvx6tWQBsKgUxa9TEWzgbquNqEf48tfqMFwzpXoYwGtsQXQtHZLpbLAqwMkn94RMpbHotNHS8CNZqM8p",
  "key22": "2Kwpjn4coTPqBSawSL5VdzS6tXSuqwp3UmDLz1fPVuA1uuK5WMUM6srDsFe41pzGJzu4Lnwb2fkyEe3xBqkh3V8J",
  "key23": "4egnRNkoCLpP2Myja2xJnvFkYWDTSkcheUP5UJjvdfJsYh2LAbPrux891U7hWmztbT72naSwn9mtjob8Y6PzpPKR",
  "key24": "3R5VQfbozih5S47JF65WHFVrn3DQPNyVz6AMir3or9xbQ5r6HYh35coH6WcLYfSRzrx8vLdopY9vTiaMTxSFfA5c",
  "key25": "82n3Z1kgjzUUXmi25RPPk2m6vYCqD5ukBGdkD5j9tmK73LPHkodv9EDb15n8eUDr1ff3wPqbRtcDmcWSCfrmrpR",
  "key26": "3CYch7ZNMZfxYPB5vDUdFGqqyeP7xxMKuuzNXkBj5GKYwm91WmKhiDNtzZzD878mb8Kbp6yrkzHqjXzLMHPGRonB",
  "key27": "4vAQmyGVofGZUi4tZGW4ba2WhYmjmsu9eVs4JrVfxNa3xnD6w1qA1QikNGTZUzCEME9w9cVtpc8ERCvPidZxQaeR",
  "key28": "63f6MkzgDc9A6XhKLyFdaMCWu2JkCKTD4MZ8BHHkL9AvsZKAVAy3zsfRUoNWRvcDEKGdu8KsfNJMPiyWmxbUJsDv",
  "key29": "SYLAJ96JvwHwCAyQdwt5nnDw66gTXQfckLZ2XLbi4tPo8Fy5AZfCEpHDYLMPUsyuSC6MPEwfaUJLE6ATHheW5UJ",
  "key30": "2U4YTBYju3ggE6pQ5C2JyJdAFNGcX2txBEs3hc65u42UhBVjP9v4Hx8MLY2UuVgiGRC5WwrB7bmdxATvK6zgKHFk",
  "key31": "3cM2uiC5FULjN4gNU83VQzRDp52e62dYHGZdHCwpqNuCUSjscuKcH7bexqrtHCAeWRNUnsjVxuhes3SrfFSqzozn",
  "key32": "scvRBJLQtY3YSBUxWxzj6JVVJFhfeBJwRHiSh6uxf6iqFyZrvymnEu9uoChSi8wg7gqSwAUKQ89TrtZtdVsVgr8",
  "key33": "4ZKq2k1xDqwx4GNyii273ZiB3Lwcyj9RLoiHpvHq5Vem9GMq8kJeCCvqpPkheZWBoWQdYsG22NfriPqEoghkrqCz",
  "key34": "5eWSBEJNizFWoZ2ySwnWKXNdQzoc6DNeeRHaeSu8KSmWSthS2MK9rDvMtd5Pec1e8qALaLqqEkx7cc2asbVuSieW",
  "key35": "4R8cBZxNbtUBoX4NRUZXNj84YH3FLBhfLf4j6saDmxEwKrTYjg7qwXLrkWonUKXiNX29D49SgHDnxHNRh9wPp5tT",
  "key36": "4iJaPEkaVY8f5rP3zr5trrCJ6XXycHo7ASEmnm71Dt8y4c8MGESS16nH2maSx24KZuT9iyiUk4uTpMZfG16pZuhT",
  "key37": "3h5JxpUTPD9J5MGjPcS9NyfscMRz2appMF2TnwpdACeDkvgx4u7mfknRSTem94BQsaR6MnqM4hmc7ESt71hzDn3Z",
  "key38": "52z1SDgZX7CDWimBurkwupbs1Eq6JXTUu6THPTon1A1cTLhRhds5QqV9MYEhJxvzKFKjbAnTjipQgrhMCq7etjdw",
  "key39": "2HUmjM1vhd3XTFHoG1AfeMonxkdDrHbcZsoEEbGdDiaV2dSyuLEZA93wgN2QKZCpYFYVVDeLMfMgTorJVKTwGeBw",
  "key40": "qFxS9w92yvx97xsszanf657PbozeJhoSDAFD5kYRpQm7vh7MNNj9CEpXitFwvZJNbtCfdFwpzsCPS6RZrAcrBSu",
  "key41": "3f5VoShy4aJKhQ5LUF4VQuQ64ZQxTwPkSnrodpKMd34QsSZzsE1kcQP5NveRffcKHywnUz8pRed34TxowDqgpVnA",
  "key42": "3Vqd7EZF3MpPxfkoaoo8cpzdxfRfNS8x1dsJqkE6ghdSyeLXYtHqAbu23BfA33nVCYEAm2RRWK8Qrsric5FYnNFm",
  "key43": "2RvU5tjLJnnMsHvHdexUfUQzGi3oF2YWRdeBTqFDdNuiSTn3k9boJ1CdEtpJhvdkNA67UJ1c4awoiLzTmuWHeZTH",
  "key44": "2qk3vrEr2xbqhZUSWPMpGAx14nJXUWAnX3dNiHyLaqpQ6bLeoCKxPKxQVi43juV5JSQppPxSM4yqDUTGGrdQWDcW",
  "key45": "4hdDNcupyRgBS5fmfBo4KTrRBmZ6pYTFFAchSLAa25EiXxzF4y8axytMSrSX7R5AyqMSnxSk2dw4eYr1RN4NfEQg",
  "key46": "3JodFcFYZAeREv3MNqzerVUZQ6DmbvkHrQcXkyiaqs49sV3SpQrG4tu47cnaesoohT6mzf24p1iRtGz232Lz5BeV",
  "key47": "4jBc6JwgKBSZntUum4ZtZJHz9zKjKLTjvVC1LhNt8zji5uDQt14isGqLymjNq928bMijsnKzQe9TdAijVu4LAwLJ"
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
