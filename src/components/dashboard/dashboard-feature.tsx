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
    "5vLA5ejxf854NwkGtEjSGKeAQBx81V5KjXJ132jA77VnnB1Y6rUMng9ntb2epN2bdV6gn2sCrysYBPy9GWmFYrrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sMoWe9dMyqrhwjmBvmhLD2MHYbavKd9AqNegZ9Gnb3oXFcSsGcrdxCfXXcB6dXdUYhnnVgBKnb7obqScL315yc2",
  "key1": "2nmaYAU7tcRWo6a7Tsxdv7YdXJiSMxyhznBnPwoLgUQWjYHSAoD7bXk5JBhErw77tgdNSps6PEu7yQVhrsFdnExG",
  "key2": "2qVaT44AU6nXTFgsMb1bayjxtVqQFMcn3FAiXLn1AMA5zrRtfe42hCbJCmVXwrnJFAUqpukx33mWs71tn48xtYQx",
  "key3": "s6gRkqyY7cVqtFXjYhivaUdTwDxte77K9Q4VuhVG6nPrZpoC1ePJZ9JsQNbGSTWTzJe9iroLCfNv6XZXfUFT13u",
  "key4": "cea3nK7TvMHZq41Ch6ZuEue81WCX7oR8Xabkr9nNMxrwGxMPiDW6WVqvphk9FvDXvhmbdsx47RcVGRKkCmpf75s",
  "key5": "5tMRnJtSPMnJqNzap3AbkjdijozDh56QvPNyEpkyBZ3bgmvQwM1qEMeDo5ETsNuQzGV97mHYzReLhUg5vyoTKpc3",
  "key6": "2JcZomroJFEW1eCNArmWND3BzzCyg8mjBupJ46iCMuDKSkfbZTM6H5bSSwqyUPRoUZ9Q8rWdxwaPiNbMaBLnxkiU",
  "key7": "3UAJAPrg3VfXzFuwjUYNBzjNFiheLb9p2hFcYznmmmdoCoWkKoLXTsSEeNj1xpngCdgJ5ni7gM4wFS6833GUixQR",
  "key8": "4nLnVe7BvErPCqdNbTYQCBxk5XA4yPMFZr8d2YknT4kY1g3egJUagHPBnen1dUYCEoohszyeMs9NT2PzF9gNaHiB",
  "key9": "265SQJ8vj46EPesDhHBJ4emwADAxGoiQf4vYfshmgUNSqfUXJAWqhPLpbXgwTMC76io3Zj2MpxJdq8dDkW5K1xNw",
  "key10": "4AGjGWK3uXjoB4CrRs6PaS1QbPq31HW9Ug7zc5R7wwJEDimFjn3PBinGk1AkDQHwaEvurxjKuupyVMRzpobmCHP1",
  "key11": "5bWw36yfsguSteW8pPFQSwjLVa3pUiD44YEGU5FyxxZuZeZ4uSjBUH35Y8D91r1VXfpjuYwijtPuvUvpABhzKJfP",
  "key12": "4S4as4LgyTi3ghtGXidGqSB2XZfwRsSJRZsT4m9WLk5B1yXGFrzqQGY7RJsUP6a82zkNSMNcT6PAs5vptTqE39Au",
  "key13": "28B1Y9vGtDxFMU43CDXdwDr6DZmVVBbq3e2kutkvrofJY4NX99xgpyZf4b9XmLd7Kgfxzji6smwf1pjrshs8XBWK",
  "key14": "pAd4vKgtjrZpbhituq54bJxhdd61nvRgUbSYLJaPRnpXafj7xudVEUS5uo82bxMMktTQqR1XFu3FbiCTS98yeXT",
  "key15": "2CLrpF38jxTaxiy5Q4EAxJiBAH8rheVWhcojtvop1ksCWa9kxkZwc7GQkjER71pYLgxpMWbxpmkbBLCb4C1zvdZZ",
  "key16": "kEsDfoyhgnwoZEXb9aJ7UQtFTtB5dkCEyMDAmznnVZgR86PMVEPkqhejKzjPeJZpnPxk4WhB6D9EZW5eGRu3uVi",
  "key17": "4bhrT67nZfcdDsyrqnwMbLsFk1Tqx4HPZNxHkMQiucmwKAqw1Nm8VL4Ah6EZj1VZ5XktcxTTTHSa5xh5k4SfqpwJ",
  "key18": "3syt7FUYThp7DRyw2PVSHxSCzBbj73jpWaZKPWYkXtnWafTo1CJA4ZmZxmaosN4kqnGjJe6Z6AGmA336wNmkUpfm",
  "key19": "4HoYvrVc6mNxLKM7uwarjqQ9EiVKvMeuJpF2r3LL1kUq1wawe2RipYmUH84ZHYKnU51vAkDgPQWsjmzt1SvNFGQR",
  "key20": "4EKDe1AXz2su3XaM68s2FtNa4wvqBNkFbJJrBi6mbKFDyn9ANy2ghRs6VfMx7PdWTbzG5NjU7EUoPR2C5CwYHhKc",
  "key21": "3fvJAJeaNAKo2b56ULviXKvDTYZebCH4zUM2T9ib6SdTT8tndtgS9r2kjEeTR1z4t1yDmnNvCCyyr1Wvn7MrVYtq",
  "key22": "2dvJBgaK6rSamswaDXSzxPyAMSjVYAVAEbVspwzYyMJSTn1HdajqBz3o8v617ARkuSP7Jch5bCBCtM66WwGAKfQJ",
  "key23": "3VL6nKF4Z7Q8F7E3cipja5LgG3A6e9DB99f6EkrfewNPehiQYnvDvrebQiy98ykwxWRq6Kihe2mEQ2wxkrM4JKSL",
  "key24": "2Dsp8h6m1TLN454fpRvARJHh74pkkVvgxVuKkBxYqPS6LrHPmNgSVLkze1TvVZ62w5oWo2MVbVgdYXVatHWCVUE4",
  "key25": "5K1RRbcd7VJfcg37HrEtxy9LGsXjpSQ8PanhnXH6EY3Vk8SWPByiwa2kEqj9yqFowtiKzRyUSQLs4QjnrUSv2gMf",
  "key26": "3qcerFoAumGdaed2anT64ogF7fL3KBuGhaRgfMq7Uv5nTdriZHsxXefWGDu5hm9wGHMYoV8TXpNeEQoQBy6wPQUD",
  "key27": "4mamB1iNoCGsWfPmcHYzpL8sK7vdTtmPi5Mts4YjtZBwCXS9znAh2qAaBJK8jWHdPNuEqDuZzPgWLo3SgyKG349R",
  "key28": "22N6FDu64iYAhBCJzpavJBfoUhGhB9gHg1m3z52vYfnK21ErxKcko4TC4pzXjLYnX7Zbz3BCWmqB5Vpi5RL8Cn52",
  "key29": "3APAa15YHd2wei6FAMSpUKnF8MUiAj7AvAhp34fkXYACuFh3C9PR7nE1YrTTSRHYnYkYKLGiZve8B8EbcxCajJxt",
  "key30": "24vUzZ38AG8vyrTf6FC847tVA5R4MzqPon8ZWp1cVJEZ4ZYLYVRNXiu2sWcB97q9vbx35Ph9gK9JUNnY42BuSKjA",
  "key31": "5Mfth4h9AstwpKAUYg9tEQczHbcFkCSay5gActqEZvUoxwuk3N6FJ59YZMqsrwnwmQHn4awLspSLbTGRbLTHF3zU",
  "key32": "2TEn6nRCpPZJCNBaks85Ghufp4SnY7ULHuXj6oqPdzfdaTXWFYbUisVusfHv1CR6kWCx9gM8qQ3ieYm9LSq3RYTq",
  "key33": "5Pg3aawuMBXmASH64c4e8kMEJWiap9bbqHwoQZhVyyV9DQUwNqVsvKR5ZnYGh3TLzDpQg7tpcSLk66UHGAqUF6TL",
  "key34": "4vVUasU9SUtBRs5qPoBZpTQeUa7BFKwnDtxQkgzjpmjbMTxXVzsyYvfuL3u3fYzcBHioccZwgU9Ka83Ko35qEuBs",
  "key35": "5Qu3TPgNATNtTsm3J17V6u1PLPLzM24dZceei6ZHAdAJFp1kLmEXMVh7x46z5BTwymzR4WdaFkzWvN1SZHAFjgKH",
  "key36": "3oPghzMRM1WLtJtJoXgE5BEWp4xFK4iMp6fRNNZnMrzgxXvg4qbm5Mgj4ox6MAeZ8c7zorJfZR92pZMvUBcEbcFm",
  "key37": "2vgfVhpzq3Jh4xMuTAFccSeiQ44Za2ZmntDYm7wc1TWSUGhY8qzDUVs6P2z4nvETrKMJFNX6TucP8Mhray2dyrj",
  "key38": "261hnAwGRm1WpLZKFj7mfRfLMtVpqHL1SWbP86ApnHXeadnBpWkmUjbQr2mFDofdUUcppSKCYc8F82uL1pfWY6gB",
  "key39": "5xN8ZzKr1AbTtwEV2J7GahhiSLeUEhswuyCHjfxUgwck2WLoAc2y3QrsNa3MUYg9LmZDCPGa927kV5f8V3jU9hk6",
  "key40": "4gtpD6fFJnNcrMWbUe9NUmV25Ka4ex6j65iaHqykWNer2Jc9VdE56nYofa9yXT8f5ZnJWyob7iU4ckWzW1AFMPAY",
  "key41": "5rHPd3fnaaoqRuBeYtYngfA5QEmM7PEa1QHQCL6wE2CTpBvRXxXuxRBzxKgict1YzP7jbvkuh8jP5xotP7WU9Dv5",
  "key42": "4NrjCPnG8nb9VA51kcCHcLG2pcxewEFRY5zE8AY7Xya7SyWeAMiTNmUqkJQVH5nfREiUcA7fgZPeC7ht1WJoYVeg",
  "key43": "2Dy6UHS5bkDXGcGUCYnqTafM9YH6qhN9LM9pWX4xR4tgQgTJGbY1AyXRouFGPEhkUGwBwTKE8n4m9KwevJ7Ezf8c",
  "key44": "4fN6iHdnGZjJjeytdL4QTfFpCUwAgsKqqFvNvJg1GCWvWiH6DcHkrrgYqy6Nk4Vq1sdUA4FsGFtJEALkyrqa22VH",
  "key45": "4hnxZR1h34b5EvwMx8XUMtUHQXKtQiTufkfk97PmZtFRgkJZiVjQ1U48V8m8nwYvQJNyiy5kzfgHxM5kiutaASR2",
  "key46": "2Vfji7hH5fxr8kzBjXKjNUAMDsmZcf83PVa4CE6dJo5efx6oDoEh4uBPZBd1mdreEhWjqVCeQJSAwkd9BSX163gP",
  "key47": "2Si1LTSDo7XWVdkpYo4qywL9aadin6HUEmsZEbavcSsXpmvHiLrkWPo2ugaTAfcJds2Wbx1aQ8m6wEeDdA1D1pcp",
  "key48": "42V93Mjikzpv6GznewSJY3BBYWjKUAmRrAuJPcCmMDZzmDjs9Pp6bW22qG86N61GwSHz3n5Gw7Nu6bPraki5izu1"
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
