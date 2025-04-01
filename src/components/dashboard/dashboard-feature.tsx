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
    "29DLsiCJGU2iX5VYPFHZUazabjpxtNvpnXgbKYrdFfyrmwPWSk4PzwS6B5kfW51iGkmyHkbcqPSAdNFCwtR2Pb78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fjbVGbGSCaxRFzigUqtvoqdYKqvXGvcUD4ChJaM273iB6c3kakmHn8CjJLptAC8BrbFdAFrreSW3PcF4NL4wf5t",
  "key1": "4Lw9JcbiDWhJgVepmyecjDYMJT5epT8u5nmyiW3H4DmVFWsMGEJbBtTmbGx9hcH674r6HjijUnKpZPWt2k3voZ8F",
  "key2": "4x3hYVXiqmUQSsJK1XcMLD89Mb3rbDe9TkvEzn3NRN1r99XxUi5uoouK5nrJreo3rg7ZXwCr46fFmg5Aws4C2V3o",
  "key3": "Zw5nnF46iKnLzCej3AJHek3M8waSEhGLWLT7RgkfMPS3rM7JGfjyYwmpfQvS4mmAF1LoqhB6YkM5c9em99jEG42",
  "key4": "5jcx4yxe1QJozmGQM4ysaTrbdUzxvGuHaAHBzM1XyUbJuDPGnwd7cZ1ZxfZDTA85GPMBZFcUkFkyHYkUCKsRx4DW",
  "key5": "5bNxvuKoMwAvMFpispPDJ9m9XrdwPBZdVt8xFKXeJ3LFPDRp7gbKYs3TwYuA2UQVgCzUvqE3Fgb4dCSBeqx96xbb",
  "key6": "28tqLzMo8SUfiWYoxGENhtc2ZxcJe5CGTCYx9iVJ8FxVDBA34RUfNqW1fGvw6obk4cVVQw1erxv4SBzLKEwqCH5L",
  "key7": "4WzkvtmQLUH7op5r9pffGF3tq7bTFdZPdq332DFpuBbJnqJsg55Hatq5He79fvjj6mwjU6quswLY3EZUEMJRTuT3",
  "key8": "uZeTfgW6rPrKniXRprimqRKKRm8zu6xG8kPUmSsxniT9PwiQF8Y8A8pLwh62AZQS9kY6GQZnJ6DaYQd15wTRNpC",
  "key9": "HT5dNSZwxKFJXvs9DeuB4Rp7cR1oXR1TcVJ88VT95geQ7xfbutk3ffrwcCS4hDZTJvuzGnjTh9VVHm1YL8xUeNM",
  "key10": "4ibU227oRxeDjirpwJAEd67qwi5cqEYNdKAfmsmtLG1g9NAF9SCo2YcpPy1Y5rj1f2S32rNHqAL1gjRj49wX9XB7",
  "key11": "2sC1bea2n1f41fgWfEG3uNhgRMeLBcVXrRC7ogF9eFz28HQeABX8TpPWgaDiRUXSuNDThKeB7cZZW8Gz8fja8hWh",
  "key12": "71Ro5Ly4kRPHd4CaCZup1u5FgCZDihrnUcPEhSvn5U4DQLXVry1hfgwPCg6PFA3tj1rBjjWSE3EWhUsD2DAZxYQ",
  "key13": "56XsM24ysUt7qiDptspNtqo1Lr7KQK8H9Ya2TYP7VvczgLjU91R2nLsqCYfvN3111H33bxYGqBWwwTktgUXbshGi",
  "key14": "368Z9uM1Bzp1d83BCf6weyEzAYGnf1TEYhxqQncmAnBjyEUMs9g5ug5dXzqLHTsYuXhEKnBbAaVatWRRVvHNYM8a",
  "key15": "AUw7Gxz7nCPpSCCUqac3JogKXharRjnCe7186bTmh8GVz2ds3J648wjapeVoVZrRWa1gMBFXAeoAzpPL2ivPfPN",
  "key16": "53PMJjTpgkXsznNKeA7cxYvjdohX6Xf6ZxhMpQk5Ux4kmfAzcrXpkaKQktRkmQtskdFRtZoUVqXWV7JWKsRVkzL6",
  "key17": "4C5u9QW8QBdDnNXdFSmBT7qGr71ZRvSbehY5ePzwzV2inaz5xnSv2gdkUTVemwEK5WgCf7LJk1J4Fz6NhRhW5yXT",
  "key18": "4s2mg8AZHeJPiGNZRK32KRCBBwsUwiasetfRnzBGdDMFomvB9mr2nqw7XXoCfBmPY8J8oWWQ8z3w78MVykNLqP4Y",
  "key19": "4fkEgZABLPGq5MbtiTzftmgdSYu4FoHY3ZTf7wkzYEPERF6JZK2DuGwXNmSBXg4LD8pW5nbPFNSgELZXNEZ1maHx",
  "key20": "3r7Kn8D83NtkRq5HVpqgqKZtq3bUzZSuAzpDTxGLhgGjZdPgdtGwVA2MjBSNfineNbwGiMEnrztDeKo9R6fxoRvb",
  "key21": "38SWMBPw2wuEBvGPPwpyQ56Q6NoknGwVXUt2qNnPPoFdNSCPSen8JXywdUwZtdqzKYDbL8kHqNVDqcY56dhCqsDy",
  "key22": "2BHgdGWS7YpPZTdcZhq1mNVH5BBZVyEhMJ49wBTQ3cav7XA95iANqZYJLLymZqC7DqzP2Nu5kAYKG5QZb1Pihxrt",
  "key23": "2P6aq9garpAzHvgsM4qwUX1kTj72MivmirH2BnTB1JCBtyGvVByMKfNYyhs4GdoJ2ZBB3qof2Sht9GqAGzR5x9rz",
  "key24": "2dhGudGuoiKBk73PU4rwYM6vY7rdKR597tByHWktpZC2FpgRSFYHTudkKkNhtZsTvAvmR1D9xuEy4UJYLKf9dD7r",
  "key25": "35Xv7yeVhmTcFVHg1Uf7xyyHCyFDPvZuX6TpkQ8bFbBn8Fcs5Uj1gSaetaWLjArZSyS3LF8He8LWzA6eQtDv63Pr",
  "key26": "3ePgmCy4QQAcxQrgmvcquZ865XrdBY4XoHYYWiBAVpbEfkjYtKr5HkXgWKVakkEcV4m1mWPx4DW7WY97PMqVGNKs",
  "key27": "3wR6gZsDaaAcqBESLapuTe2rHgYn8gfyHeFrxHBicx4UFKFG59wsK4yqaDS2bVUCe3qvvnVzgjTSJ2jfBnnGE3JW",
  "key28": "2pYqs6d3ZLZ1muzMeDQ3c3ggA8ZpHyerwLtBkxRKiCQrmF1g944Qzk4X2PFi3pfEse6RPaRb11aWDaVpwfmUASPK",
  "key29": "2KnE7UY5Mp1zqckQwJXuq9fUpfzfSg4dg4JbafStC3tUSsmuvRsrriSynhDhsPsxq89MdxWXgawL28oJqhKxHTVA",
  "key30": "5jWh1wbY45NmgwMGoNZZiYTUZ5oDds3TDoPwqyAU5gt1CVToQNM255XWSP5ozsVE9cVWkeM6DBuNBVeH1gvohMvf",
  "key31": "2mFjKHFaZf5ErW6EQrS9S2zkJSJeaVxuRQoPUVo8EZsWnE6QS1HFPECSuEBQqVuQro7d6t2i1oPZw4UWWapRPD3a",
  "key32": "6EAEnL68VWs4K2RUcfmbYhxpVo11G1CcMo2PfXxwx8qxGeFxnUnj5M5wkCjQvXqH5QRhE261LP1FhMXLTvM8MUj",
  "key33": "NDGo1KathdZhEsY1Yk5i3Sjn78H747BPdmn7b3uDDgbP7qTNQtC7ooa412KRydyVZW4iEuxvkrEwmJ8F15o2jUQ",
  "key34": "36K8HBfAP7dMLkdjz12EaEQLjeazhDjCXYUxGhpgjTiaeoX1Ya9z1ahYKm5hQ5r3yFCUnpi2uxv42qkwgxoAryUi",
  "key35": "65vsQZQUoUbLWDxaU5u8CVjgE7e3yZs6YkCTyn6t5guvV6tdVURQNJRAowmEf2UVQmLyEvdosbW6V9ujRQEBynVZ",
  "key36": "2g39jtm89mYRRzcQBsiuGC9X5bNEGaY2z6BEdZocFmx1wkfhCCExHCUTK4m8YJawYGMvdm8Ft98Ju4smhm1QKGem",
  "key37": "2r24ac7s1H87GcTQ3StsaUf34TUg1u94L1YMbjedrvLu84a5pEbVhKWNZf9xmgohvUeJ2wK69hrDunYqVjrzkV3A"
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
