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
    "5yNbhQLqSdckQGPSSCd1XzFMon6RTWHwVYWnZqsFawPyvAw7nS5n1fwe2sP8uqDbngafNyp5QpPMk569qLVDBDgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fHMHTFopv7wZDdfZxgp45RwAb3ZostNaWyyGch4Kspm4YWyquSrtWPNEnsGy6owxguPDiu1FTbgksUSqjWGxdB5",
  "key1": "5E4mJF7PugsjK9ByCtGYiKs3PShT6UeM2WKmTS5ELBDkvrvi5H3niu5rQCwDiDiNYy9XemKn5qhfFwo9rDXLoL9C",
  "key2": "pfkk3CBfVUz6W7f782b2zKfcysZKeFx6Mni71MszfkMwMYtNWyYYpqM84GfXdGJGqNvYCxUMFenG2fQ9A8ngTsJ",
  "key3": "5LiQ5CU1pH6pStjTygoA3NhppgVPojLhtvJZywfwcRekhmxQvmgBiT1tToXL6XaYmmaWB4sde1GQ9G4WNU6kCE1R",
  "key4": "4ugjAyaVcbiNZfhvwZM51GRgvaLoBUiK5snQBVTCCvtGq4ShfPtVobMBSgWbNPLjT7s6DWGpftgXYfNgjHAAjpTi",
  "key5": "4H4jZ4ZomwJRCXiwhLj5U7kJP9YEtFppXMKk9xHYz5sQXeHngioX3wPDuKeGUgfPT1dAk9swri7ZCjQejUaQQF1T",
  "key6": "UzAwadsjaaqg9tpJBJ8X5yoaeypS8psXg3zwYeMhAEGo3KewnqBGZ637wEs1m9YS5E6VBctU8XrfGEXmYJQMzqE",
  "key7": "4KRx9WQsF6xoMauPEbGz41kiwLeiXmfq3Z17te3YccLGxBDkspXpVsuTE9fxMzf8VF67KNLawCumm2bxqyTJh9i1",
  "key8": "41WFiUp2uaYzyah14yvv9xf8LpJmYzQZT464Vhje6kqMZmarChcDySdZ7XUqDohJX1pvmQzcceHnfQXof5G796ZU",
  "key9": "2CpSqnUdmQLpGHp26UB12HruQaPCRFbxdxtAtmpTnhS8sW75RbTVPQmMdgKpDcfeJhasGd6eDQNQKvvk8tUzE4vg",
  "key10": "4pGff1tgpZd5zwSh3HDu5szFnQni74yYQQawvT6rtBT2GJRLfQP8nWdNFFgCsefvENtgobU86Eazc9PD5i19ox4K",
  "key11": "5ZqN9nAnLtfkZcotySo81PKntgwMZ3rsyz2BbxfjU3pD5eMX6irZGMvkracbMeqTyEuM4mjwfKGbvrQjkSARbJeP",
  "key12": "5uRzqky93v6Qh9wCSv2h7LFGV8ZA8ebqLDA43ABk1sAtZ5P7QYje8urnrCGEkyHJddNk1YmPiKi8NGZtsHnwrgtN",
  "key13": "47Dhbk5SYsqBfUDEifNf37Zp4NWf1Yu9325viRZQfrDWi5DRhUpFDSBLUAxNnA9VH7HFQpgn97nCWvDFYNc94ggM",
  "key14": "4qLR3K6R2LX8JAzcBvjCQ9UTtiJ79tjLr8L6ozTvQm35czzBgPHJic94eqRixYkZWw14r7EzVN5LAMUSZThouBHF",
  "key15": "37PLVfhkhwMYYM3cgqw81X2GXY76BEbekn6bN43gwECW2iQCguTkdK1TqX3EnTDgyGfgfECCTkNeDsBZkGECBr28",
  "key16": "5NeANahx5oD9WaMiBY8B48wGtp6dPrfBnELyFpAjcPsc2fYjozjzzBErkAqQ9tgAVbdfpDVjpr8fLpebWGotpD8N",
  "key17": "47kV7wyKBp7NKqRNKqFeWcrxmUeN1V5f5ThZi4rgXMU5pUQcVLFZzA1URkGHef9z6eFgEYgBjytvweQ5Xvtrg9Kg",
  "key18": "5akmAZ69zVpwZVJ83AhwnS7CwWsmM6bYNycyDhVNJNpnWpmE8Z5xvAmnBK4Ao8TGpDiAdyfMMxXf4N3Z7fBVNeyS",
  "key19": "4Je2L6j3ki2kcJjN9QQkuRsvW52645DwHCpztwjNAKTDa4NjT4Mt3P33RqBkffNe6yJuyoivqCppd4ZXFy5EsqgS",
  "key20": "2AbwQ2obEvrXiqZzRwrk1q8Jhas3UkagC1yJbzpXTWPovh2PEZ8kgxgKJuQ8KDoBxF8TJSeTra9vta6MBzR9fcY1",
  "key21": "2pH9a2Vq1pFEQ6rt8JYMGqnNN8NaFzGZB8krYNpZZCYq1D8KBp25BqWw5UV1S9JWa7cUJ2C9Lvb3tApXwBrjzP2m",
  "key22": "5g4ywBVa6XG4eb488vGibri1WsqzhT7WjLv6taNAX52G9QgEjCj3CkPayonWD2zQq3UVB8MSQ5Thd51o3qLk1r3g",
  "key23": "4Nkx94H7Qcec87aTQKdmkrknJVGswy9vRfM6vsFBSASCzHTxnQVMKGFqFp3Ep2M9z7pcSHU8y6TqoK113MuvDQaR",
  "key24": "2WPfECjWa8nq6co6LbsinNFQRXxTVUtk3r4QfsxiNgJomeWXXViahfs7NUhJ5psadyHScoj9TQFR4FcYjoXWLTcj",
  "key25": "Nnrfa5CfNxq1ESuCw4H4DdB4kT5oX9xZWvnxJkE6zuJCYFMm2cn3ePa4DV9f8KEb3j8zYhpqWapddvu4pbtVaRj",
  "key26": "4GgXMS1biFg7t7LLFwisTtDg3QRTMPzwnGdD8yVG7hcFrGSHqe1R1TK8wBPffWxuEKNU9Ca9WY7ah6DPWXnaqWze",
  "key27": "4H4zcmVKTjE8f1S3QtXkAxURjKC2GtVkccfmujhrk8cfWmYYjqxsTz1kHmYiMab1TPotF6fGWmwu3drJ5t9DWGKY",
  "key28": "3bCNCBV6n692TN5jbWdszppQX4Gpz8FPrEtAvqq5ZAXn3bZ1AHR2LkQB81iamW1HE6NzpE1kyGGPtY38AURQxo1Q",
  "key29": "3GRbCAVfzD9z562A9ySsyrfZkmu9s1jAcB2pnqAPdxoQr9x3mFsAbb36t283ZDCfeXr17VpkQnUDrsrmFj944Hwk",
  "key30": "1eJktz8eK5XQEdZfkmbAVyqZdTBiJMn3cKNtTVw6cFm56Uvn9GYPBVvFY9hTBZFxMMigVkRPKvhUTbZSgCaLQxn",
  "key31": "5Ny3BA2PUQRr9MFbBwd4rViUTDZSf5Fy8W3ttC1Hd98NG6demz8VmDUuvz4oFp3q65bxt8huqh7S2GCbmE6pw4ve",
  "key32": "4cCSgUPhRpqDQfw4Mg521pU9w6vC1bcpzcekrzBjtV1Qpu4tWZmDmhf1npMR8Y1MwwdtdxHT8PtESe9YPdm1uWfK",
  "key33": "3rG2yCv8X222LHh4JgN9VEdpGhVF9o41gteTpwgwccUhmbs5UxyPmmEEAP2o4qBWZZrk66SefeFexvLxgiJKqg2r",
  "key34": "2MBZaQyqrERcHAAKE71ZwmzN8fzm1xNQ4zSGVrHmLXdU4usVow97s7eYHMCPPiBEvnTi1xBF3ERBdW6FEUxxpHHy",
  "key35": "56XY9RjEH5QdhB7FnQtWJ9fZs2XVdJRvKAy7QDxJa2XPg5zscSzcqPzsEtrVkX3pKQSjc32RKtC1J6f4A69Lb3g2",
  "key36": "38cYnZ7vJ4BCKYwy9ioEcEjjbGB3DoXTJ2dzv9esRjeRtxpfVJacXCQEdhyY24tWdMcEtesjzwyKUPJBmV4ry9Yr",
  "key37": "3ZSqb3WRuM4LTi7TEfZUNvMvwkcdFwg9dk1WJkNDvQkWFCasdYCpdGTzhqJ3CJJBqWqz4LuNsAcb9iRHtAtP3xmN",
  "key38": "57kvnTEFPTmJYb2B8Wj2UiA1e2WmAD2jyd9JBhbNDYDnzV95fqXgWY9RkipGEw46Z8dxDnvZAqubkU2VsvEMEfP4",
  "key39": "33XTkPpW9Z9fapNeSaUgVkECoHTyfDwcSX1fNetgvU3WMMkAf76cFpkAm5eUjWdprhcMuwkURWMMAJDUY367oosz",
  "key40": "4znQDfAJx18kNTQ4VbuvkMzY4XySdvp92gSczXxybGBp4nqZ3ogkVL4YGjEzLAaV7NiP7Ws4fsaLzgbn11QBHhxh",
  "key41": "3RBTfEDwWsFAJPHU18goJTuMtUiFHt4c7EWh5XMEnfChty1hWrNrKqYn94yfJBwibbfNcDnt8kCRGrNXBHDVt9y1",
  "key42": "4Z2Q7WMFDhViFpFYr8BSocVqJMwCXtmvqiyBnXXSuVvavtcHCEeoB816Fh37MX26VuLCYpnFtxpKMMERjChwkP8E",
  "key43": "44HCbrUkri7aSuheDHF5a7D9vUhz9S626g3a9Gc5JQpm49grfwJAHjsLFmRQQKyouAjiHSibrUf3w6YcyKzc28Xj"
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
