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
    "3XDz1djgSQEGhiemWZ3WWEV9ut8xuW27ABSGHkd38mB6q7mBQLxyX9VYQ8yUfReaP2vLP7SFBzQsyfCchyP39in7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FwpWXFvsHa9Y9eQ1KHmPVxiEuGtqdbVv35r4bRH1sbraonwAUbyUiKCuGXQKuM4QeixT3WLybEp11eUqVNBcVrq",
  "key1": "4QqwvjZ2ypMsEetUT9j6TzGbLjX8NPTykGYdLpAcjdf1Gd7Nzc96v6Z3eutYHv69WCgwRT3rS67Sz6V2wEFe9jXa",
  "key2": "3LSif1jn1zXX1DkjLTEyMiDjbxRc2WNJxo4hi9htALpWPyXX2vtZtvDYg1D1Goy3ymWmzGHz92BrzY1J6jZXkphi",
  "key3": "2qL9xzGJJxS2kAdog1GFaw7KtDNgJjyLw4QKYknfuUZ4HcDQVy7kcKeEMDtBs3U58xY8XPnaudyFwuQuXJkTLAL4",
  "key4": "5j8TSgCULGp4rSAJxREBr26At5h7tXuyD4URLDCBNW2oRioexGKW3oG6RMf7Dxi1EPwYvpa4p2AP1qjwo4pnaArL",
  "key5": "5hiqu99Gje378p5kpuKH6LQZuMdHekKNzAFA1rCK9xJhAgKJFxDvEUrVRHHsszzvgvF5dSeJaE4mDGYJGhjaW5uE",
  "key6": "61EDobch1pp7Hzey9TEpwAqRMMdYBefyiKk1HM52zL5oTppnPbf9HjoJnKLuJJhncVnyXhCgVB2eqAujsj5ut5RS",
  "key7": "5x3h19GCYhPD1KZHCzU74uMfvh56bhYMFr72PZCk3uc5yuwbiktenWAGucFBMTPrhaBd2xqxiczQPSNPuLG3q8t6",
  "key8": "4jPsCDyVSeKCJcrUQV7AwhDzF9MSSvfFE4jaJ2TrZPGkgHBcguhCNwLN3DinSMMdsCYFNL8qTAnpWi7r7k8mv3V",
  "key9": "2pShohTxJGLgGWre9h7aezkfGeJg7p1pGYAa3WgLpc7QM9sTamii2oA9Ke1Mtg2SgmpWNTPhgFRzg9ZUDZ9Nc3KE",
  "key10": "5vayMphM82XFHmwHfWjtXmxiQ46npA9itKBGDagqEjX6k9ch7WGLwvMCKEoqBd6Takvd7wcqM7JiSQeUFaTtbTht",
  "key11": "2P8gCMGek7oPcJvHFYWtpPMFr7swJ374wRwZWQWtjSGurCKPFtz5741pghnwbArbHGTYGJ5VXMqqHaHkG3rS6Q7F",
  "key12": "45FD6NYvni1NShYvw78ea7AtCxJgRRQNNtfaWNXA4QPGW7nFzXxLTb7JNeCeXAPPrJCiLitnZvBqBeuTkpaDBhmP",
  "key13": "5LUyWsXcx7i9d1Rts4N49F5mFZaejJ7h5nfrHJdWdQBTLv4WRHpegPqGoNbggom1mH3RuTkBSutV62xPKNjerBuX",
  "key14": "n6qK372Y4dyg4FEo6XwLjzPdfnoLE6BZnFd7hQCziyPbRKfNDk9Ly4tozo7Nzax1sshaQ5bfcrCfJ7777ZpQDZb",
  "key15": "4JSjUvGz7PQuoRUzxgKMDGuwbZPaoodekckNsCK5zyhZod9UqiTfr8f4MQLLr4nokJkyyrbQS7nMgGcmVLBZoEJg",
  "key16": "3DQyFapG6xm5zAfwzN88Eq3aFfGMtmnLzqadfuaXm4LVXMeWzojTRArA3pgx4Jt9dixvWtGKgqPsirPCC9d73ouS",
  "key17": "5pS5rgdiqitDPsL68CPWkozYi4kfUGzrQWAUdNxEJdfYcnyTRw3C3E9fR5xgsiPRSdj51uq4gwc6uMJMW4N8fRJa",
  "key18": "3hzkz3HKkTkKwkN4HJKTQ3pfw79ggmDUTd6czZsATH5KfhixqcuH3tXhk8ED87ZytKgdxJh5rZomdPyLv5uBcJJM",
  "key19": "5YZFw3zEd4CW1LakkvtVrTfu9bZqi9f342T8hLGDjbzabjepawaFN4tGuTkS67PbhGKvvCrcd9rSZceVmDSXtnoG",
  "key20": "XnsfXRi5NtuTGwJDbZAY6dGGLWMpwHJPifMop9uXagdUBqiA7F2hVCNWFTnU3zTXu93ZvVDtfVmxUoz1cQA1tFB",
  "key21": "5vEC2vFvrv1qVmHaaR3GQLG9dSgU4YR7ytT1U65NtGFKdxgm3V5LVqCRBvRkRK1G3C8YDfEo4CEki9PZrYBnR2Gp",
  "key22": "5aEXg8AKvG1paprDn5Qjck8EM5sF5eLM72p1oe76aBHq98kzuoNCDcx3FFcDSq7mjSkXP8FZgsUNtzXVYjomsusV",
  "key23": "3859cZJpQtxNFWRztNwPirCW1Ru6mtv3mri273Jg33uzHJVhNwcMnVWZNaK2AbFpw794GPEHf197pSjJGLuJB7jr",
  "key24": "5GubmwM2aeGdNDWf91kk5zBTnsgDbD4Q1fA13z5JoS5HdUAHv3HGWvQojexwQC93FaQVhVyp4DmkmRcuiwBWi3JH",
  "key25": "4AGbcYhtUNNHJr8XbyEQKfoMyjtqPC2PKJduZp4Amcjc1Wfz9a5dTLg5qttRfMShV6YrijAsnKhcbJJaaTxYsdGL",
  "key26": "3BWPP6hPzRvkr4f9JhEjFFV5jTwbdLyVtAQDpFBs27qAXtp31aAxDAVv8Ny68EkqmHL3HM36sFFrDDhYxiWKzes",
  "key27": "4tXw5g1pCC2X58kMXsCcxaBR99rCWnbvDaJUiCmWzUqj3X1pQvXfyGR4ee9e5YZnaPVfMyZUuvs7WBG3jMJYZs2b",
  "key28": "3x8j6YGcG6jteDUhcFLAVMos6KwcuH5ijyfub1ctdfn5ysswSN3S552vaUr8NCKLqAdwpBXVPQE7GdxDHUHNosTZ",
  "key29": "61eVAzajQVeyhyvABZKi7ThNjy4arZroBDx8e8wG6AGygvZ47JTkYAMMq6Ud3q8j4FAEqdM5UfpLBLSk9qRc7amm",
  "key30": "2d9RUDdbnWhYDjGeV9FUAt2LN2ez2GosVnJPhCooyE88MduUhLKgPRaMsRnsMLeWdyBBcy5NVXN79zPhnRzguBsZ",
  "key31": "3e5ygSvtT2P3d8nt8SCsfHhy22XGbn9Cxi2F3Kx37XbiDn87gVsXJMiXRCwyGXcWWyPebJH7fqUQbr1nwYJARE5D",
  "key32": "3G6G4pEAVyD1FeSiPKd2nuufdAcEoPdJE7CZHZtUfizUD1F2bn3gKSHp2jWW49TjGD22UtSLnnp6gDzaYptooJUw",
  "key33": "46vAg8X8uReLTKKngmVJM4xHoVCFQU8RzhZ66o2AcmzVUompHenX2awGxs3N6QehU9DZFqvXLFMYkJSLimy3nHeF",
  "key34": "51nXvZTvRKCR6D7PypsS4JgCf2UmehtuisXHKUE6rDKH32QcuN99AuUHrMtiBdMrhBhnbzQiMM33bH1MgPr5b9Uw",
  "key35": "2EQ7MdFWJ4oqJLJ7JS9tMo2ohCZZBXAUtYe6kptJ459mkQgu5rS6h7dFhufq9J4x9bRHjSmY7jqdY9TBoa3zLkrH",
  "key36": "2TujmP8U8YHwDLawF9qATTS7EXMD58Gaspv51td5VtRj86HCtwi5QHNfRrMQyUcR9UWAkJuF81CRRRVMvF2RA959",
  "key37": "5gHJJqbUiHhMvGViqtizs5nBBTjk64gx3Y1tew6HMhNoi73mNSY5X8WESSh8udccXHXTxBo7bkARpzB8ydsqmGWN",
  "key38": "2C6TRtHBEi1WPxhCr23TTWpn4mAnnzszbApzWQSMgtojy1JDavM7mUphoaZrL73mz5e3xFAiPnbytJAurLruNdiQ",
  "key39": "kAiSVKqztrZqtsyPoCzxKKizKsBr1osMcF5Fa56tg6LbxnS6hHhkn5yc5ZUWRvXXrbvF26U7fTMNTB7tYHEHgJ9",
  "key40": "2tbkGtfuicceDkmvFAEkhCjXyY6nvPL6iRyiZwBD9BqCX5Pb9kWZUHgo2pkquKBZqV6BXgqhLYCmxtCw74VRNZuP",
  "key41": "4XyPXPNQ6qNf3b9v11rmUb58oPDT7buBBwRHwAPZec7hV1pPEe7zEAHuNSDL6SMYyAdMAzTY9TXCgBmNAzSmKjNX",
  "key42": "3LGkYHVTafeswn1Gb3rwsCpbzY8i6H6i2fs15w5iJHj2HA7v35A2P7ckAC1wuBrhJJW1i9VZfBzVVfBKkAkVZrRM",
  "key43": "62wjwHmkXsdEDpAcMdTAJYNMzZArTHGb8KPovg2ek4VRiqnFXu7Dnzm7CrDVSra4mVCQrQSdEvVsydGRts7N8NeN",
  "key44": "9rZYLr6Ufz7ohzR1xHDrdWrUQWfZaVHUJMdDdwrxFYg49R4n727AdxJQCFHpTiPAo62jthHdu8hEHjqCZYisnXS"
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
