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
    "51p6RvqHxmL9Bz2KTH2B6EUNocjMRfWFeRsJQw2AgRn81MEgz4BQTpgbSswM8z97YHBHfeDpBf7BQ6k71mUkjfMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yzavbvpgDjysRBab87nA8U3yxB1qdTA2pHiPzApr5eJdv5xBWLCscwu9G996xniXfMBWDRpS8MayycxbBLz12bN",
  "key1": "4gMhQwRvmfYfvYJDsszDpBP9o6wAU1R7oNDomZBGPbhY4vBWUAGgvJJaTM4HNZ9uwBr6WwmRao95Dq3NV5RyiVz",
  "key2": "48xYxRE15QJtHBTkGViTgGQvYrZvJgJbMUr5PLr4F3DU7QeVn5LkrykJwpYWBNGfL4mpQfboYRHBbMgHFJC17ZV5",
  "key3": "4NC71gMDzQ6WbBfDPsziynuM21GK5hs4sPhEVvfbLATUimbnP1FWnwiEn1eNmBgeHnHCJT58Y3YaJXWywjAsvQeQ",
  "key4": "2ab1FXkfpzgQkBbvWARbWuTyzmB77RrizuxUwcmRYoKCHEZByRAWKDCaE2cvqXmbtxRontGMGLgudnTR3RzA2NSi",
  "key5": "2kwEZSqnntDyjRAYWjSrHuEpn1CGb6wMmp4XJoTNVGEUTQqrmsGzC79i4CEcxC6X61dzfgfRdc5x3WQqFs8Vkc3u",
  "key6": "3iaHSKbjYhrevqvnuG7WnGCKCSkdJ4hFpdEsbg3C9ir1iCem1aM8svUJeVRhK3ZVxcNxELKRdumeLpQ7Hjqb5BWi",
  "key7": "TQ8emyh3h7WoSuRnEJsvbUDDVXK6ZqC96FgbtXgvr1P8wHp6ZePcZKxjNL77s3tx2RBkBmrMPeJsCJDS1eiNtLM",
  "key8": "4rcnuKLuF2JXAKqLSPh1v4TqXSCSdWUEKf44vivxMXi8jvouusamz2HjLe44L1HF8kFnQYE2n4iLdXxU4RTZMBwk",
  "key9": "4yzGY15FWk2qvHe5CKWEHSSeaZ6pAk2ebMNiFW625JZiC1QVe66D3p3RaTxo3DDhyBcjnF4kN9mqvavJ87uhJCaX",
  "key10": "5nGpdLL1eLNh3ZDGkSDZMapKq25Qk9QoR7tduW2kLjbqpUC6bwL6LA7tR1StMrCT8ijaTCgQHv9u3Zv1Q6bWFwc2",
  "key11": "5icTf1FXTrn8JzpDMGWFMBXTWJB9MPJScPL5VXUxLM3WFfiMGFp9WVP2XMa16xfJuC4k9PWEYL5MMH18cwDyE2Cn",
  "key12": "3zLEQo96DnNqS8MZUbQjG3nw9kmx7XjC2omS2JrEvoU8RqJpPuvtSbXAxGuyrTtfDyDJVsC1LuMkykYp4occb815",
  "key13": "4z8MCQSpy32WCG3Uc3pSKUgqMycNziu3ZJ8UKBC48LyYf7RFjdRyL4Vn3aGvpiEryH5uwZhi52anWk9EMXBvzP3f",
  "key14": "3sopLSdKTC8HyCiK9N4SCn5erHTM12EqvJ9c6ik19yPRxs4bC6Z6MkRADZRFzLigBxQJER4QG5UF2Bx72edrtex4",
  "key15": "4GBGhDXrutQEDYLAT4TrTVEWSVUWtMHzUQ94ug1tGLdTULZYYms9LcanyzHYmwEZ8oFEb2JEeLahusfvaAPZdmwi",
  "key16": "3r1Zh1tXfUdP9MYmnu7L2yyYuHidz6gvdxWE2GaBMSkudkGa8hY3aoxYCzgjGobS4igsZdqADwSyxjTV9MrJ6FpX",
  "key17": "2WAfTADkNSX2w7cRYme3btRc8768j45t2oK8RhPaauWjSgwEwkDyE62Kob9sAFoSWgkSQ4GrBgMhVxpkTLQ2uXBR",
  "key18": "2nqBU3jY9xoeqJBLnwAdGusW28oJT8PN4EodBL2zGczBwYYjLhN1fNrniC6fb2447UsHnXHNhmAUjiUy6PDmbYsC",
  "key19": "3EdyJE3Qx985kBuJNEkJFmgsQ737zB9idTqVPqv5ijELqEk5VNyoRrD6TQ7Y8YFAnrwuXQ9pY6PgnTB8cyWirL3g",
  "key20": "2oCvyuP1X2VmRa6oYEBYpp7n1qb8AtT4dXTuWHYRJhGqBvEHTp8ig3XZVF6ZUUb7LrqQLqZbaDb5HzBspPAaPSbp",
  "key21": "3tnkAHS1sDVeAwX6z4DV1iPRXfCJSTvCARrV8t6SvUz3uVTeF14Mk9vti8tuKM4HovFXsXNf1XkLYfDxogyWKcWq",
  "key22": "2EaxtYoTz14GB2DKA9bd1e6o6cfCciDJxwhicTj4rk43hvxaednxM7N4f7GwE1aBUGwLrFfmNA4BY9jgiw1Ybyok",
  "key23": "4chBHw8ZFvAVt77SVn3Pt2pZvaTHgrGpgLuMHDYiYR47Zmyue9kUT7Xb5f7VvbnTq2Yxk3ZbHnYSPe11kXZN33M8",
  "key24": "2LygcschDbEzvaAtsh8iwGTF8F2yggF5kWpryVfXP73rY61ECSzSBmuUg45CKV6CrdnDWb4nxqPrXx4fMwy4j7bF",
  "key25": "5duxpkfW4Hyq1DjJAr1pE3vCqBbGg1cxKGc1jAxPyGQpvrUcyXPFBfhcviPiUCckA1L11VJueagtHXVTpSq4WYRr",
  "key26": "2wTS2KgqUBoCSrmhrDN3siwZZfGzBXbZeaY1j4pNPadsj29HjWmJ3BuhRsZ1YuGyguDXyo9Gq3gKAHfxrrVTwtL1",
  "key27": "3hQ3ayNynJdc4uxaNtPqQfJysht83QffzDVGJBsR9UgmRGtnnoyAgedhXdxqJu68bZ79n6Tj53k6zzBDK3gjteHF",
  "key28": "4WEbsgGWVLUmcBCviV1iTUfHuHHRJgAB6wP4EXN1x6vdr4RAiH1ZwQe1YvVEa85sJzgwbeZFhRYB4ydEiW6rycr5",
  "key29": "qa1A8M6n5JUuHnXAjbBmFJGuC6Eg4hfjL6D3ujANQNocWPWLBrJnjTNMXiQBsWSqzcx15Q8zb7s6vendioSCdSo",
  "key30": "3in1M3WnT6E4t5ZS6ZthArQLUMdk5nPGhsjw7jY6ZFLMzMNtpnrwDJnV3jaYpS6KwR7FBZqPpQ6QPDtmDQhVoTAd",
  "key31": "4SJEez6bBbDPAepqw5ofvzDSR4PZ3ABKWVZZnNBFChvnkL2dJN88USb8C4rQ8YGS9MfWdJQ79KQArRhQis92i9k1",
  "key32": "1Yhr1KziASX2T3YZvmDfa27cqc2brq2tLkhZC3TQxJ5jamzmdj3S6PaMq8Q6hxSFH7NoQxDGYEdEbfX8NV3pKvY",
  "key33": "3jPj5byMhPqJBsKLDkCfHSqx2huxnq2irjymTkzvMSchF1sZimvpY43DpMt626ewpdzo4SuNGk4KDSXD24aUHbRn",
  "key34": "3JohjRQEAukhYsAQAcb3tCQirDUy8ZvdqWhfdVHUz4ZUzgAc7wvGuQw82kiCM9n2zwjGDeuj6LTiuaLef7CPXGWF",
  "key35": "4z4VjxBXxcAtCFXC2q8cfRZW2R4ryjEc8BCrSUYTU28JrYz8GQMEHNGkRpXTZyxefrwn3Wm8XYaUB9vstqwtntzP",
  "key36": "37U5XyCZneo7a7TBwJKsRS1s3qv7L1ft1tTUoAjjAJut9N25RLXZQWqxB1qQmmyx9hdppGy2N1ncAFBa3ukpX2sn",
  "key37": "3y1exufXwQGWhxRLYdJL8hYGUnY1XtVYsDbio4QqFH4pHkYMVW51X8mXMa6RSwf6mx6YkT2gp7ehVjXVvkNDUFBy",
  "key38": "oeTfpXZ3qiMYwi4rKydcrJR51WxhomrzDgrnoSc4NEDA3YDVfFTZ9yU8RLY4aLncni26LBxkALaYbTsPdHmKTmc",
  "key39": "5rS39GJx2LrzMAUovBmqgtgbZdcucs8h1ueXbvxX2iP1e59pmZphGHYuwUvCcFDhaarkEHS5gM35ApNJfvoVh31",
  "key40": "5ZVnTCBUHoL5aU3tchVdSSjLaLWJvFtTFqGTFwo9jbbztr6PLSDkS9hENGe6T3o7arQHut5pesrHmy6qN2CGZUNe",
  "key41": "4Vmfo7BM3pYwnuU6FiQAxFotJRCpAxj1jpqHo1qgsGt7aEGGCWvSYdnrXvEsEggMNj84EAczUzdSrbErPxjMz6jB"
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
