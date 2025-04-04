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
    "2ApXLeczB47kWwNbZbyvWndSAtGD8FFKrknRhTPccepgpaNuNETUoRWNiMDipbRLuTtviWd9gLrHJv2WcPFUr88R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51pg6xdeuwZtAHKMtmtHGqoiUfvgfc54rFKz73T25eVqMnGLHGPfKnyWrmLwvfi4QSyfnLKj12NVUmZZgHyA71Fi",
  "key1": "4j7bP4HWzqNeDeAcC6jWZPZDvLS7Rjkib9vFSWTFNKD72N7qK8yocSUTEueSdjCfYSPX4mvYbSoY8bt4jhaR5Qi4",
  "key2": "5UCDGCBwJK7CfUFej1T6sCJKcP4oyzrxnyva73o9dY2xaEmTXtyjPkUkYphA4eB9mPzpvP6Cfh27PUsXz5P7ZUCe",
  "key3": "21Qs7o6Aiv2ES9tmhEv6fVYd8DW2PBfXK16bbHJ2jo3HqA8eQjDFudqiiv1HwNV3FonUin4GNuYrYBEnLMpgbds1",
  "key4": "4FvzcNu6m8SnSuQxT8vxSYh89HHGMsHe2CpcKgVXQiuhjF1f6zUtKL425UzXKApZM53oYjdv2Z4kJAwJeE8VWz1k",
  "key5": "23QxtBNXipmtbN22w1htJFHw2h4WybveKYz455TBz2qzXGvKVkDnU61yVpj3FW9ZM41vVgWtrCieFJ8wUyEzf3Mr",
  "key6": "5ZtiyXpuCSZy3Dx9ikMouTCiEPhAu7QHs4nhRZJP3uquqpQ1NA14SU2fP8bVRQXPpnubeUwJjTJr5iSNV5yfwqit",
  "key7": "4oaPAMQbAAfctUiC5jf5CUN97FMSxwBMGbi42xjdP4eDoVQ4aBV8wpmY5rEzg1nKLhwMGjTH9v1rW7f5Do2pvpnz",
  "key8": "4fRfP5wv27385gf214k9HRFJKHYyWiEQWbNw96vR1TxAYJiB3m9ZvEMPb86tDwrhpsdALErf9Z87KhC85Nt1rt8n",
  "key9": "31Sew6jzye5JoLvKMcXQtmQvNejDaT3YUw8DYrJAUqEPT8rq6aPyKV4B66Rh9pZZPy6NHhkzoaLh8vPjpbamnzos",
  "key10": "55JHCYA7CUXgCHHiFyfKjekp24VL4WhNvpboH5fte5HuvgaxeHgbai9767oPzsCV6DRbYjDeWQ4XWdDyGUXepyM9",
  "key11": "5UE8iTy13NevNDznkYt9UFxHqYPqBKUK6dobhEoPvAmUGysDNArRQUaxptaFNp1ELsD3Mo1L2s89ZtpNeuNbQjqU",
  "key12": "6SwBfN8EfSbPPjzW8BAquT3o3a1dkHRcH7DjMNuWnhkXkCKspVHE6CTQcH2mECBPCEs1VLXUX31gtFvo3o7dk2x",
  "key13": "qGGTFntytLmdVDyCNftswSacznCcUSnyKNkznnU6FWwL7j4iqV5oj9MtEHGakNcjNMhUJiomj48wCrhQKaobrhs",
  "key14": "4XUZ1nCH4pmWdeAts7LQ8oHBkWnd9kGdCc2FEjKBqFFRBxCBxJDEYEb8HExXUfGBNUB6Rg441KbppM1U8jcdFmbG",
  "key15": "2BwwHGJdGU1yPswFuzLAoMqyVr6irmqWmfN93qggV5feqRYsnZWcgibj6F9EYJYXzYt3hQ6aRgjHMRG7ALnqZxio",
  "key16": "jPwNZCvcbV1C3x5MGPbMdtvsbYfNz2ErM82ANiXimEsfgnoTLj3JJEvbgCSbieFDAL8DcVuAztRwj2HjnYZWiR6",
  "key17": "41M3Nw4gWy4tQqJwRKAYgyeydywAASWEsmymowC9F4r6MadkwcTrMmotqUxMf5qKAUR3fbTZNoaKwaiWUtXFgSrB",
  "key18": "2d8cbUgfrMJMnNnsqs4WY8DAj6BX5NzKxiomWEmtThhTj9ncrTJocak3MVA3he7mqp34Qb6Px9Mo1hfcSLqvFjhJ",
  "key19": "3CPvacQxiTjW9NvstksFLkqJ6kukUhL2zE7jXWBm5NGAMFS5dPCZSSbrGQhefcb2b9Y2ew2v5URhgaxmAd3CVMWu",
  "key20": "58FWERm7QroB96Ut7bpyFSyp2kjYkom67k3y4yqPuh4zuSJy1KEk3fqMU2QPFycY6XTXXAwNfiPvvTM8CRiyWZG",
  "key21": "4vAvXC4rWaKV5kKDVHS4dQsfneT3DCxYtiLfJrPZ1EmpEdo3UFpQ9eFjZnQDYa8o5fU6Sn19WZHQth6wnxeVbtpe",
  "key22": "3TS1AkdoyyzcuM2yPuotR1KgYGuhg4GAJuh84kQaZpCSHu4s6mLkckoKe8y8aXyo8fk14rGaxGyMj3Uafmx1bHbz",
  "key23": "3GdeNXavWrptt1UCU1yvJN2fEHdYgkvrgrbuL3fkEr15uqh62YXWbaRngdBMvCsm9rLT8tTkBF7TXJPtoQLjcSBt",
  "key24": "4amigVoRU1h4hZcgWC9FBfctV74gpoc6rxTVHkNCYQrmEBVKTDoR4pLHqTdgbRNR5ytNYQKRV5yn4LPrpSApW22E",
  "key25": "3wm4Y5ZFPuAZv5W7gG4bKKPabvohXmVoPoHVd6B1jTqXo5XUrjRvNtKCotx891csQGmTqHNbQnD9HhoSV8dZbNHA",
  "key26": "2LhFZGc79CzehWTJC39eM3rtMiUYbA8XtmFwAwFCa39jSEhg2LeSAPhKd7FsTDR2DYAqYcdUTTCV8LishacNoFn1",
  "key27": "4UxxbKpB1G8tN63t6ins5xogBpeF94hCYhrFS5bwsjaQ3ZcrJLksyD8dJwtshyLKcQucAWXQ2RDPK4VwReE7gitQ",
  "key28": "3zyRtdcrM6RUjDvxxjGmH1SrVpY8ET9jQCBEZvSH5c3umGMwqaHJahxmmo4tNjrJ6LEFpjn8rmH9gNoEcS99E1Bi"
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
