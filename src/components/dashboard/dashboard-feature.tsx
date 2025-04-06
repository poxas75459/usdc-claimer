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
    "2N3PDN6s77xr99x8C27tXQ9ESYqeDKEJvsXstftLCLDGsp3mwVjim12XGMXscKGUhzZAvj4bYAXxoJLF7KWPCpoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "376zLQF5G5Ur2W4uW9bcZzgw7EWJYMvSX7xLN3f3ysr3W2ZyTdAxZJmW3SdaczA4AHPGscZogcYzKasnBCEMZQV",
  "key1": "6drrMdWeoFPESU1E33pZrR3iX6F1agRyqbiA3C8fBbxfGRUUoJxwy5nfzGx3Tqg47XMjp82Yy9JF18kgnDktK5x",
  "key2": "3m9SHSFMktAioEEKhTuidjAvR6nSq4nb4kRKzgyJL6okEZRruA6jk7iq8R5wLVbE3Sg8RksYABUW79WvZQgmnGLZ",
  "key3": "4dvtsiSuaDzvpTUxng6XrHLbzZ4EdhW2GsFFyt8ewWNKNpz759gfLMNnuj1yBdr7AU9bBFkYq8eLCy5uJsiFmv22",
  "key4": "UTZLxr442LKCiGW94ULT9kRj4pwKqjmKuJJxxkZwDLQyhYec9q52RMSiyqQt9Dy9Sya48PqGchihbsp9KLkUdUe",
  "key5": "2HPx8NjCHuaGtRfoxZ77vaidbZ629zDNuvQqmx1PMf9vAyTdGmyKqxk77JA8f7PbZN8DWQXRjj4ydXL4rWNDpVqR",
  "key6": "4z5F2Nbr1ugHJdc4TkMiFfZ9w34LspPWgLEANJkMHx9VsJEjughXt7CpwB4w5KCvPiKQc3uhpFH3LZTcfPsHGcud",
  "key7": "inaegA49p9XRu7dzycR4EJ5DcjCdYjV6uxfKe6G775XwVqrzaRgDdQvGZg5V3iXnzpHy6b7aWKAdfumggrkYPfD",
  "key8": "3qU8XmhBWcMauPmWMfp7YSAKAU3dAeYTaFikibsCu3bN3fegyZXdysYqMxQuynkSZhaRAmxxqe36VGpnsAgjwyqX",
  "key9": "3Na6MjUUN5Kg5AyvHvjeHjAdVVf3fZichwxQtCYsHopAqWeUwighCEBw49MzhhbAEKeRCdvPhKqmqXuQusRfDCtT",
  "key10": "4nkf7qh9Zx4g7jzSc8XQirNLUku9ztNxRmyowcaADr4pzTn1Ue94eikwfepu1rBcXiUKTADzkchnApscYmrTQRPq",
  "key11": "3SXysjTzYyMkwmTXACcmyH1ouqQf9mz1fWquSG6wrrqymGJn8sr4Z6CapoR1U2yi8K2V2CKNxyVT7PxGqaokKuYS",
  "key12": "2jWQmGVXSQseXjPKkKuntFQSje592z9Esdaiq4gwtAL34ZjshbMjhxnqWsx2qTc6pxJXT97uWXjtJ7NKntRqjfNk",
  "key13": "4d6jkoziAzR3CBLS7CdQqLKg3DXNJm5yNoabNz3VpHokv98RzUfWJpLm52ngqpaKwLsfDgZb2jAefaAnd89ehVsG",
  "key14": "1h1fyNppsAYpghcmdVGCf3WxWsS134bqpzEXqN29vaEJ2ZAMPT65tcGj4VYsi2LKmjcWrsAty1QiwSx18JktDcb",
  "key15": "kpUgF7fDY9jTAFaaCuqeshZyFba49QjoWubvxcX47ddDKPZF2iyxwKvp4J451mkQap6inZi59zE9ZhtR5ViFFcr",
  "key16": "3GcyNUbQwGer8wYfPG1TpwwCEjo9gZqnu9ZLHqJL1WBY8fKQ8z8utSVnWDzvh3n7Dy5MDhW6Fzri33YMeTbaijCV",
  "key17": "5BiP7paL3W6RbHg9GwxY7v2pijMWD9xodX6xrYgGrB1KbxdEPBW1ip48bWGuxRjSdwAcXmiFv77v5KtFnYdWqi5G",
  "key18": "3sEuE9Xs1NsGsvQNybm3Jwho6ErC1rXFuser2wuKaBGekvFB7bDhZvfBHoiajc8AtQ7NmCoqZegxQcoGZUYDKnmm",
  "key19": "uaWzuJ987W32nqct1m7s6k7RJBFVZRhLvU6d3BxgMtpDzevLtPpQP74MSdEhBpsWsojEDQvdtSxa6jwPACgauh4",
  "key20": "2wYbFumHqtDRi1F6KCJshi5qiF1CgrLoR9ghgRvMq8ZrayDHtK1zCdm4Q2XNPA9BxnQ51xwSnYFrvcKST9mSgNTn",
  "key21": "4EdpJMexk6awfLS6FBjakNMo7L5mqMpL4SkG8zAQYUMYkkp51miT8gLMkH7MeWH17NbCwuvfA5QfrDvqQPHZZWfo",
  "key22": "39hQhCcwaPNMBenyGFHVb5i1iNLRkH5EAVPP3qXreChw17to19qSD5miZQsQb3FkxUzvz1a9MVX6fq9wGHSk6tRA",
  "key23": "2RimPZPHXVtYkvDhPrT3dJfYvAoUUqKTxmx5tU2bJ1pTNXsqoBcFgK68XrdmMg2Fr2ZBYipfjEWefutaYUah6DyV",
  "key24": "u12MkDvx7jYH8xFBeM43PbbN92kA4YaBZQwRmptArAXL3z21YnftJbRhLXNcFm1RTKzLUWzJnP6ZVZmMmj1WnF8",
  "key25": "2CuyeWbpN1Jg2p8jMZujnCYsfazYoAnrW8vuRzycuiCvq6aEZiXUKDyeECh9wN7Gr4Zfkf48weimgTV2kxXZEzQD",
  "key26": "2o2z2izcLX4FzPfJGJtHKJBhfR7psa1jehcw1TmKkXeWesx2VCqkn8LAicp63Cp1yVLrAEHPEcqMHnt2BqvZscxi",
  "key27": "4hfNCqZ1zEEPTtQQY6oixja2XkoKEyH5j6P2REdwaKdbnf3JPP4RLe4X9RYP2wJs2Upkzr1oF1WBLUCBNA2yjEGp",
  "key28": "4REmzqKKzoWg74qiAnBRJWDKSj7p8BcFF5ZEM5XoeZEv3sCcFaMCSb7abcnGkPzhtdqR69jHK2n619xJbNk3t6k8",
  "key29": "3LxeUtpqKuocA8yX7cNkFh7NEYeKLWCp6DDyiMwGLrWE43mp643Y7KfK1CLmu32BP3Ckpjy6tcg5RiyL64SA8kx1",
  "key30": "436k4UNWbknvq5pZRTssnmrREV5mFKqTpbpL2Qhbqk3puDp8wjcai4rDNtmyPPYQTcHytowkJQtD9J8YDP51rVib",
  "key31": "26RWRViCKiGRwm2CVJm7fhwaAnsUBR2kUvCFBmbWYAmgfgMqBRQDcczUmLJgHNgBcSsHrQavi763ijkEmXE17VX2",
  "key32": "4LJ6AzG6Cn7HSBKXVPYFqD8FHbic9k5yfEzDsmdxPZCtN2dRDa8pAJ6YRHwAoZvZqCDN1gUZLKbtdfhAUTVM81zZ",
  "key33": "2NFwGyTaErf6TEia3Cr3AEeWkUDnYPRukABh8Cazbxs2LTijbYxHSnhSKrnU8RH94PFtpzHUXndUt95X4W4fz2dW",
  "key34": "3h4rVFiNPkUTe4zeRBA2MAjY9b5cCezwBp52Z6Zjvwngd9MfCCxxeyrqsCGga8NC5KNU2Cf4D3QNTusuXHKGD3xN",
  "key35": "3X9YJMZfU6htkzP8rAyBREGuRiVccSuuRhVQjaQLiVE5s1SfX8L3TGH5smDVMK9biRHnqv3TK1gEP6iKjpYxLWPY",
  "key36": "4imcFrZ8BjQfTPckLvY1U16q5hqGM5bAxfuhYVvebxHL7gWbgwmZQcfDtHFMs8ps5qzdEvc5vNqjfn8bGJn1DAAL",
  "key37": "4kPnzszuxJxEmBDj5xnLi6uWYP18aXmMxy4Fug3LT4ktdWBDwPGQpZaDfqW9cyRveAyDQdESfy7MBdppTAYYHo4C",
  "key38": "3dRrSBRBLdiwnxxhWrpoAw35SVa62ik5sH1rJeVHNxXqT66GDC645KG8VNYnrrGfDRL3swxzfDdegtazZu3zqcG9",
  "key39": "JrH357Kc4TeQK8Hn9it9cvKeHWveSuPsEuSdcgzt3oUZ66BxdVzrTVX3o7KfTiFjacBiEYmnAKgU82dqLN6UffA"
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
