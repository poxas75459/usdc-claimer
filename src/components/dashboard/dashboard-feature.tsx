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
    "56Pdy9rq8Kxu4ciSc5nUhAJkmHEabF6uuj3viLvqEFkWRuAeGMqrXvC93CHvPBLcybRa9BQoXKEs6i4HfUfFU6CK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bWk8682VSNPEoBwU1AH8MYzs5zAVmQTEFU9wDR34zgp1Szjj9SCr7h7NtigUNB8yFDnEH6tb3pfZRjFrsFdFVR3",
  "key1": "2s28tc3ZydjPWi3HbHXtvnMCJxiTqdTJ458Sb4p3SrGsqmWVZfVzmH1oWkigLJNXziDsMiqd6Q8sJkfuKWvP2TBY",
  "key2": "5C4jsC8b1GU7dLNjDB2AZuAYANPrEhVYb4DGMJrn1e9pT4vVEp8HRN12YPTcADepsAkNGHZdE7w3gTpxcNeEyEhH",
  "key3": "cww5V1YHtskFSbEdV8PTmVUkAjHH88p2yDzu5K1cDpFA8naSKin5ZN9dqjf19ZLjCc6eT1XnL4GB59PNsuJ7QAa",
  "key4": "4QbfHzuzpir4ndECQQvBKpxgv2b4ifPnAE653AWXDAcrXEdh28EHMpwtKC4FZKUN4KAiGeDJCLYoJJxvNpPdWpYj",
  "key5": "2Ltpp4VaHVoUQR8PcPjxaH5qbErDWYGKAuqkS6SiuJQcY4tLD168DHgzkx6s3uCzSKK6mQEB5U7WhmQwVH23A3zm",
  "key6": "21zeB6prdTBDDkTaYQ2GAfo3kfGEpqqz8893mjz5iJtVPXu5d6jJ58QqqQEGkcGR2r4iNekijNJDhHsdCceuDR1Y",
  "key7": "67QDRPQzR3VgozHxw2xNy2fHFstjbkmD1ZzNEgN2mnZUM9pidSidDaEdzUVhHbbtcFdJPQhzkLCqxFmv4VpVt66W",
  "key8": "2CeMXoNTKFgTM5eXoSUCwxyEiCPPwrttnC2wFQxyNHZ6HHtVq5pDGdvPzjNPUdnC4M9PKF2ekfKSxgSHBWZ7561B",
  "key9": "4pMvMbm5W5xcqnBzGBpk9mAfwjGwe2o79Nr7JfbZtdR9vyrsvuhJV2ejM7oiEres2w7bdCC6cz4uk1CYVGY94Rdk",
  "key10": "52EzQBDx4mjgoxzg8m4Yvph7aGGb7XGAxH44xDqGwkgCJviJVJ6Lt1hdzhf5ERjo7unvdUaaA4y24LqyZ7dnPmQM",
  "key11": "57ePuzP79pGs8jxdUA8bukURLFzCtSMuAHsv3L4VivjRVoBhWwEKtWS84phAnTwdYu25Vyig9hVy6cpX2GL8gqpz",
  "key12": "2UCuPun2mMDfNEebwt3wzKTnBH7dQ3UrmBtBxpZN7kyc2TXMsrsjs17ngfcx3kuPEYr59PnjmUQoW4DvFX7sHxYq",
  "key13": "4JLxRWKyU9hgK656u7c43WxqqVTXVMSE1818BrFXNtbxXpmZ4Z6AzdvsihafpBY7znRHLh6AFQuLgVzo7fWbR8iB",
  "key14": "3yMdu9w5KFTXNTUPxpYQR9cHDBAMM6FeTQ1k2dj2h7A4sjZTk8mZzp6iakJQGbexz7re2919t5Mm384xcvukr4ut",
  "key15": "4n7YoSrDDSqBYRPmQs3w979hiUZYs7LCiSwonHKkNFkWNB5VAJhR2Ro9K4UvkBLEPtdHidj3agrELP6e35vmd8fQ",
  "key16": "5eVza4xz6BbXFJhNsh5DsJsBou5bXCkUscTLGtAi9iZ6cQASbNznfCdEQBDChfPiEG6ykmZ7yNVECxEqHhujjfRo",
  "key17": "4GE1UfxNtmcR3UENi5pkssjF4kHccn19ZzxWnDP2JNAyALh9EAKgnjPndXsw16vU87BskDTEAj9sSupjxwozpcBo",
  "key18": "3Pnc5di3Mqs5x9AxWrt2UUQF9TwTqBK1URntWcMXCqXUVB8bcWLzb2ybrhkiMNrphT5RbSXrRe2azQhfzhEijRvV",
  "key19": "2Po6MTNFDPqWART8Rh1XLKPzk8WwkYozM9Pz3qwZiSv8pNGFstodnMiLSLKjMAk153DSa6pYPSFrwW9gBdAufQHK",
  "key20": "4ZDnncixczQbsavXTR55n6a3VQWKasAKyj92QuWNFkjaFkgkvSh3RhS5zeHJDpjo8h9SmLLJBgACwcL9xrxWDZ4q",
  "key21": "h76b6qXmYVVtrrb6WkdxrdM8b4x1Hmuu6bP7tL9H48nonH9rG9YtymzD4ce11GFYzeFhSHa1BfUQicqkEVMaPe8",
  "key22": "5U4KqrACnJbfJBt1nojFfphVrWe77EUvfF8Yhjb6KrBKUsnfPjKFSZtsZ1C9yRvPfG53QbybCM4AhnoW6EGTydtG",
  "key23": "3sy8csKeHCys4c6MEm92fbAMUXb6zPCXESzLxtJwSvfWxq9YN9p8xSQVUK6pKH9xqJ3Wx1yEtS2rJakJzcMX7SC3",
  "key24": "4F6PawSChXkufU6wNLR8F8SmzskhLYEsX5sf6dQbBb9GhUGJsg1HvTVaQGr3AvVEGjnpGbN3U2pZqSdFw5t4zowq",
  "key25": "2m7zGRRJ4zFCh6TeeRcrqF9hfgNf6w8sWsBbegkwbUh1Mj4f5jhZZb4gDXNe6u6jo9ZwuARRekoqind6RFd2peMq",
  "key26": "4bXfUorDWWkojPb8WZ5ixkdsxgQx6WkGynxR5RiYShWd8PVWnn7pGFq7AvMfo6STNNrNt88YzhprHYhCZxGVw6cG",
  "key27": "3pooeQy83cDT3GS2gaJfmijaButu2un2vBpxRgR4o5kfxjibEEd6C9w9ChBW3qN6sz7kGajQAWBVmDhsFXksGRnK",
  "key28": "3oWHJmxgQgMERCU6DHMSoZhMW1xEqPkNH6HY4S9yUUUMiYyRdCgTzL4cxNkamhZjYY4opHe7rgVR8r3hJbpbdePj",
  "key29": "4iQXeYJDcPdCFhSYKTS5fy2WTzMm84f6J8jacs5oEzuRvGXgrYkjQWogFLTLPzapJcnJ2cgTtbAXVBTgAt2E6mtM",
  "key30": "yNzxBQ6CXyfZ2Dob52vcSaWqvWA8QUAsfJzJ2XbJEWrR6hH7r2auCJcVzijtQFTL9jQsaVkzqXNUrDVrokEMHhp",
  "key31": "45CfwYkQ8R1AM9uDs6h3wB5NKhkPYxzy7fH4PFKrtVf3UW21f5RoaPpArjcH3pVGyaNU55JyvDTruLM3ocroWWsR",
  "key32": "2i35u1owz4EWb86z9cghJG9QVHCyne4ZbeJxj8EUdDcPLxiozpfWj83YgSn4on8QAHHCT7n7AqzpQPdJqPWegEcQ",
  "key33": "4GmNFbmgVAs52WA8g7Htgh5gxJES8F83kvZ9FBbtAmNVH1kbuTVnUoxNAVrUPm3m4XSAfHY79DZNsYBmxSLyGgpB",
  "key34": "2Cd3y4vaGddpxddEd4mgpX87K2vwqZ2QHmeJc5CTXezhjancmXntzFxgUm5zRnT1wLHtAX7z9vBfXZA5WVuLNRAh",
  "key35": "32fSGagh1nqPLBUASKeAg2SsPy1SsJsJhNhiWFuHDa2BvCGjVb4j6QG9UKUSWCxPdENbxdMva2nr6vg2geBmUaes",
  "key36": "F8EBnZKrS2opXbHrH2W3ED9ywueYTNkVAE9yssjUAn23JjU3v4XSAkBuEwWe2XV7v6JYxTzPxA2XcBhWMGDn1tQ",
  "key37": "5D9ov51dGHhAZSJkpXZLDDhT986QEBRnypzh2uKhPyavcCxYfATTQXyMwVTScSxZpVdVC9JyTu6pyGt3fEkiProu",
  "key38": "92NxR9Pstbu2kW4dySjWujwzdkvU65R9pc8V1ENUabrtSFaLoZqQyYB1uxHvsPRqPAeXotJsSDvKxCYQSR3Nyoy",
  "key39": "ebfUcPbrS188Xzush9af2KoJj7XBJBbVS9xShYh9oFwQAHRGfup7A4AhiMUH3ZAyfpt9sAEogX9puggXDHjbABZ",
  "key40": "3dW6EQ9SzT19TFxpHoAcueQm9Db8BZBjXxFNBkWSPdbY2CFaBbs2CtXaQUJtqbqVvCKp94VYS1aXkiXF6J4vyvLG",
  "key41": "2msmgNLViuyimPve66JshGmUr3uAeLJapftxiq7KAxnSvLtMgR1szMGAChdD2jdSo2oS7hUFknFHWLV7hKddXMMS",
  "key42": "5F5zxRCK2c8Z8hLRRkzxkrfi68242kbL5bLmYhzqcsUFmAsjRJiYAQD1bMzgoxo2pyKZo3zWD2GqbxoBFbTJTZvL",
  "key43": "4Zpbqh319ZALX6YfPF79cmMy4RvU4aLwqXQLA8p5e8wGXYCPzMwg63CE3tw712tQubezy3XNm1jwgJ6ysmbE5pC6",
  "key44": "2xH4p4iMfU2CV7HeWcfiWY5B24FcZvchbeQGhAhvypEdwxBxRSZkUVL4x9nEQTyfCvsAcwRKiWERU1KuuqSmUmVP",
  "key45": "28J8gor5X1MRmaCDNnSbTrdbCdfNcLCWhW96M8ZWSGZ9o4sUjWGFZ3aJRPo8cp1khfMBGUZ32TXY2kZrmKFeAZJq"
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
