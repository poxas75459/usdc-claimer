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
    "4hb4BydFhTfLsFCaKvhCeRkZibJQScQSpCS3zMmBtufRStTFr5WEdPwwyJRhNDf84t1huLZdnmFjd7WLxL7jwn4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a6TT6ghY4RNkGa4LGMbWUT3NaT75KuEY7P8VKC2gu2zwPv5AqbAYi98dgSxf8Y4rP1yvStaXPkYQbq8spiCjnv",
  "key1": "4hUotMeq9hiGvdRNb7q56PMJeF1vjSCz7rTwKdLTgqHpKHjGQiJHbnF3bGC8U1nD2g3uwXgoxWTBv7qD9siczwsW",
  "key2": "2pqJjYJMFuZJodMz38LPeKVb3UbGBxiF8jCswvsPHSiT3bzJuSyp77P4RRivvgq8KneAmRf1RLv1SpWVyZaYoFuF",
  "key3": "2vR3hCNN1c6mjLhFDsrJSz1Bz1krSLfBdZcduYAExqvLGRHWs4PhvAmZrEMhMcEQiXVZjV82GtEkkrKZfgZPPLCX",
  "key4": "4KD24crAyMbxhA3MTVj18Fj4N6bpBCCbLDsqWt58wurUyjeaUo492MsZm1emzNanazA9LN4ys65XLtjyr85bf4fR",
  "key5": "4wAZMZwAARibY59TkK7VrqrJ5aNhkQ72f5dRfvstgRs8ZUw7iKhjE9pAQbqFD5uXz8sXvZRpjFqhfTvscpJoSCpM",
  "key6": "4hi1YtjcxeUCBUDgTenR4HhX8UxsR67sf54GnWkFMzJysN3yhXmzfy9E1ZJ8y9RaWtPCCN8dLfPJck48pTM4w6pp",
  "key7": "NKiHssqy16MmUG7EXNKHddYw5s2UenQxGvvbT9VqV7FMGZ59FnZTtZdbbYbA9834KCRNhAryyT94CKZFEHjdcod",
  "key8": "5SbssW7oQZrZuKhgVLVBd5tPchbqxMAWWLREaaZJkuChizER27Zz4ka4DZAR3bLwMAPhyt5nmR9s3uCLBv7Bn7sC",
  "key9": "4Dqyi1LQKMf1nSJG2F9TmfyfyG1insBm4CLn7mwyoECnpKyFEkmh5R6yBLNfNBT895hjosfBVUQqEt49Ru2WTXN4",
  "key10": "4yKjR1ZXtkMkpGdZaLfsPwFeqkvpwAk2p3bH5vUaypkSx5ucdPJJVHj1EK2gfFxUNwY9JGCWYbi7VMHxVk5SEqKv",
  "key11": "5eVrqBWFwmmf5qYse4RFmXUmGf3EJsfKshzbGhNLXcjUNWxATpa7SPL4mZJDYjiTS63ig88uPuZ9vfRBWbP4TGdv",
  "key12": "3Cex26Xbr3LMTjREctkzNVYMiLJ6f8tEh31He2kM84okTq77BEUSWGG5ey5H5BMqQVErfWWFp39rjG5We596fGjb",
  "key13": "4mzExvTBM6ZDpRjCb4JjTJ8BCds4zfeChzAQdetLE7NNUxiyXsZhahDe4gEq6Bgdex7vHHSoKRmYq5rMqNhZgRaG",
  "key14": "BXZA2Bi4HWaFa9jQzyzkpcAU8sztAot9TuuHYSkBdkCKkyKsLPc1kRbjRU2A7n6PCPYLm1qUyb8Ja4fLWJg8qWT",
  "key15": "2SiSyBK5uskJEBBdHKcHoRXSCCWNeq57WfrkXz5nopFT13Xd2ZZ1zrU7HdVhAF4UmP4Xj3NkxXiEjA6DRrgG43Wm",
  "key16": "4UGhsDoxhatd8eB2FWfiFVPmdS7zfTvDKP5wQaB5z6guyWGp6YfpuGMSohNirYrEs2mRApcfyf3iXdQmx2G5Kn11",
  "key17": "2p77UuNF2Dy3VNcq2mM2sCdd1S1GegC7RJ3aonVGNgwWoh8XPmZai67TpeQthpLc8tYPFpZaQQNBSVv5f46QK756",
  "key18": "3LB3ptFidSRc5AAt7ydYYrnxpxwTPwMo7RVQUaVHJsBACTC2QtrtP9jzKG821QdBPRHqY56eiS6TZRXiYMSSS9t7",
  "key19": "493tEmVTkaptjNHEwB9ZdusrNVSok3L5HvsZMkpgaRPV5rzkATLRhLwsXZK3kwW3kdsss49EYcEmqg9hDSbYjraf",
  "key20": "2Jhnq9AkqN74UvNrm1Fr3m1T3r3jrixkq49YQd58vWq51fFzd5UmgfNLgEJDUTmDwR49eQ3se4zVgih3JX4VDKth",
  "key21": "4PLuYKqDgCXvY6YK7dTPvUykmkViihTnYBuGgCrmft4b4R39KvhsEYfB7Fjzp82tJ4beRHrFAhnhNr8sSazTYt1V",
  "key22": "3ucWtkNeQJc4UjkbJhwDC73SyQuj8ibJ8jzEK56YCGBgiW7Y6YAuKm2AzHembJ8N5iU6YMdvPVtR9d5qaQxesbfy",
  "key23": "cuNJpS16yqzoudDJ2TeTzqrxgvb42o5aBge3sMghsr928UEoRcp9z59uF54Nnw4JG6TEeSqJx2XHCEA7YVSeDCa",
  "key24": "5URxwrKPwXKUo4t4ps4uL7PakyiE6U4SoHmRuNErmGbuAJ33oYYRjdoCLbtP3eC7SkrxqRA6mQfeDpxfXYpTVdha",
  "key25": "LpZv8mHcWcQAQpc5eHANXtM3g1SpCxSrMshGWzLgapTubMCvkVZ8zuM8PoxZ9KRwVVcLssiY6Hsnbr1YMSsW6YG",
  "key26": "2A6itRYrfMPk5ajm1XiFbYx5o7pbr3T8BPKhqv1xWrcGQjpUKt8X9Lo8SzQ3H5RZeWqLuPKDq6cKkYTDNc8zQrRT",
  "key27": "AaNiFx7VcMWLh9azQYfcUkViLD7EtH18UFPuce7KiuvX7g7oQQwwexo7Gzcyox7XdTcRSBxk4CEdpmegoZx8HxA",
  "key28": "jconBobxfDJm7uUzzPrLhBo3mnmCB3zkMuFzkGUiJrw2kFvpLg7dzPrfFUnL1fbxvC5RoTxyXvnXG2LbzzymcWA",
  "key29": "4hypF6fwgDRH5ZUJzD8jveejpCTZLh6WasqnwurPJquxxv5qS1UGaeaVzxnQxuUfW7caotFwaXN78Pav1JNjKuB5",
  "key30": "49acWQgcehHjmz6iyVNXaV9Q7vLQZPyT1pzV7hYRkaDBbb5uH7oXC62w1QgF2kzNUoCdEwUiPumBPgpjPmgp6wMr",
  "key31": "4JdrFRAWAarx2MxH1oKZvuq91CjL4RTxEK4rqRaB9zSzSA8ThfPzVGJcyGtfhqFgiDS7wZgXkenpFLED1XNo63n4",
  "key32": "2F8PUbLiC5T5cu1Xh63b1ij2bg5wF3DewPu4orGS5y6UHVBv8fbWYYuuhedSZ1k8i4TW9KDRCDF9dGts82ppTgEb",
  "key33": "5A4QYAXSYn3P7q24LGQVv8woEh7ifoYBPnBW4CAr2NWe4CgrsvQ8fyVcRvquoNB8JqnmNXr75nGvQmH8ADSyiPzZ",
  "key34": "5CVSHGyv4MzMaJYEjCRABdE6vC9bxBHtRZ5eBYL3kLpmLMY3T96x13vnKUXzb8b8AofhDLpbuk2dgtzbjRTmruwJ",
  "key35": "fWTc2TvAzJuWg4Xaoqazqwq7Ar8T38UhPsbg6oKy7gBZMnmLpoP675KsdXzTsyjUWyzJv47RU15MUQ44GTGXV3S",
  "key36": "vukPHhsDrJVqZbLPre7sET56WFWfjUpQzr6SRm9zeZ8vQMNZJA2NDfeC1X2pShutvBP91jwkJGhNUCbQmupxegP",
  "key37": "5EbsqxrvtgnZSKE1dHpWgVsmhuRfkaZLGJ1th1yrUFrFxh4aQ7CRM771LmMTdatjPynYxYNJ7njBX1UDEPdgQyPK",
  "key38": "5W4FQJMGvKxhoJg44DJfC85jH66MiTyP9KHDAAMk1PKhnj6ZBGNmfhgWHNe2uyLQ3LPHNQFZv76Ur7J44HgJ4p7a",
  "key39": "423gDiES4KuCY5E8eNvrM3dzwoc2gPTiDYSiMHKTaCA2ZwUTunGWECyoaV7iC53k3pADkRsbsCeSCMz8iXUnLAGR",
  "key40": "52KsRVn6CW6KzMwK6X5pamSzwRTKtGRx7EUrJs5WPx48G6RaRYT9iLeE3EUw2JFSDAKcGb1WjLLobF97Mj6SbDWv",
  "key41": "5f51QcVSo2EaLfftQXViDnjMHUAUrfz1Tk2iej1upGtE18LVoqeEvzmjKw6TRnE2qH2fZPcWPAe3UTjRDssgyDcY",
  "key42": "58L6F6HJMTxMD4jBkzC47eUwX4P6KyDxZUQQBTUKhAGZhLtUgb9XSEVji5sTCqYeAyQXuCDKPFWuckMt5MCJZ3py",
  "key43": "4dNYv6UceJeufFYo39Yxw4E3mXaVj7By6kxY4a6gqhYzWqaJfmD5WbLwfgy4SAuSeyYF2hqQrz77zp5AKmRZhKNC",
  "key44": "4jd21sSfsNsFb2Ev7YuasTpqYSY34HrW8mvtFdr729mhxi1EjCB1aZsNLPq9MF3YjLd1Gnk5nXRTeFCAdyUs9Roo",
  "key45": "2mbwQGhfGe9boaYaEXU8bcmhXUbCRryjqXQGYCeeDc7mfqsQb6Lv2ZB3KXb79RYrYtpEnayLoDVrpLbnprVqE26s",
  "key46": "ikFdtzv63oxp8Kim9tusq1jYEJ376mdD88s9x6gsewgw3aG7biboFG3VCyPiUrfWvHLfURHbPMfd8ofg4T7JhXs",
  "key47": "4X7GhBFXPPvgMUKTBnZFpUahVtaBvWzsZgZkttGxFvnWt2v3mWWdPCMPttPtiiUNeY6PyRmbiCkZnMpVCNMWiZ17"
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
