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
    "2DK7FRHprthcsnMvfCqj9hhLh5zFpd1ivuPpHaQCM5S7TeMuDqazPqBgSvGTQna5NWZcdvAzXwzJhPEZS2tChoHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "479U9gdtN92u81FBy6iN9ANE86xs6oPs7zhw2hkFVZk6wENwhSsDPLweev7tSWBmgm3VCd7fwHeSNYV2GYfHgghK",
  "key1": "9N12HZ9cH9kMPmP6Nvbj4V1N27EsGVCRdCsd7LdRRHE5BRbQjv6HUF3w9jGiq42u3ZtT92J1NiyDhsiM5J481n7",
  "key2": "56y5QEPnQ8ry86LDFNwpUX9EV7C88Rm8fHN7kP8JTxSBG2V2wwDYgjScjmmjpte3SiRdE5vStgNA4gjL65QmbCDD",
  "key3": "2hUn9ouUZM8QzmWZEo51aAULSEhvsu2RonzVZFdC4d2jmhmQYvdsbvKBECEP9oYZKNzRBU9CGTpvfk3DwqeyRwuL",
  "key4": "3k8phVvQYCzNBMBaDormXragJoPsRwCGdtCGufYKFnJKDf429rP5UtfbgEcCzD6zfJYhvVt9aoReEAbV3j8rgLrj",
  "key5": "5krL6mKMwAXBfy8MNVpSFuDqExzAiAk388wtgGNPQodgYWgabQHzksQzXtrSN9Ysvmy9RWpESbimoURSvRrUJZdo",
  "key6": "GfNZhQyrkPugCEfoPZU973EBDWK7ZKz5HLb5x7NJNE72VDyvNEQoUbxAZDvmppSKe3cZ1XMAqYVH4xciAkUAVH4",
  "key7": "jFgW7AFpXnxK7m82CqLiu1Q5u73YAxpNJCyUNPsdNFux4GeqnXkTkzz2XBB9yscUFuNZNgwYFR7FHfuFFWb7Kbr",
  "key8": "34toqtea41uEKVJZiXh8VvLF1NBPRM9KNykQfcV7VEibTdscooU3aZ5RhWkBMANALMvdYia6qbGu2U7xZ4deDBHk",
  "key9": "551mKVNKBkwmSmXdhWz8X5xGRCfpNFqwDi9MoLNn48Yf5RiKa2iXUNgY4N4R5bpd8Sq5dN2MoR8rri6bpEJTsZ6h",
  "key10": "47ceAephjygiyhoPMfwuHR3doQbWLokQtpssRKiHQJDzV5qhDMWJX34NAAKi699VS8UUzQZYuT8dLCG2xafJ3N97",
  "key11": "L1Zn2k7zpuNK17DUL4q4UufLzNm5LwqoegjajuN3f8EexjB3VP2DiBy44C6866jabxpQur8hXx7678pTCfZaMbd",
  "key12": "Ps4vdXkNJwQJ8Wjg84acFD1CBw63XQYUB89QWmSjhpL5658AZfyFz2NZp1JkckdA7DDTc2NAk3ahkRcFzis6fYh",
  "key13": "wxdZBMikxm7X5vo13jpzeZkpFncWdYWQXC2ufxDAxTV6MVhmUfDBFC9c1vmphkMi3MQYJ7ZifS5KAMsBnJs5ctq",
  "key14": "3XxbRvpkDmrqKnJmCRJTHbhvptNtzjKaFZVuoGxSkip53nRV2mBjf2fFQwNJCPePtMgfcZZGr4GBkajX8oP3FL1q",
  "key15": "3BZSgEETCLP8EFY4Jy5huFhABAh1fQY9LxaxccwcG8t4NoFggzvcEEf6S9M1D6Edk5YLpK4PdjDimNM8LFk7Ff27",
  "key16": "5rRJXLxYcrdTVq8Z2vm1Yxwj9fYMv9FCoRwcLJvBLcwzhgZy7krp2oD4ujvxsE4SwFa2i3S5R4Z31WiDxYfqfwg7",
  "key17": "5FjmE763w2yGfQvMMhowGBYD6a8y4tE8NwRzpTHoKnn2ccTAWwJTQSRrs4LvwH53AfYcgnXLAELnzVvhCc9cA5aD",
  "key18": "2asXrtkzxnJ7Enz64hBcsqXumH73i5XrCwwrCV8AioTS43njctN8CRTUxjYqp6jc9aeRMNaDsEHNMmQD9o4d9Ct9",
  "key19": "58o4kGiAPRmnhhLZhEdFyJCM6MFKgQn6pgYvJswbYKEuaBQZRgh7T3rT7w9W5D3WMu1kxA527S5Liwx9DF8yDgBt",
  "key20": "21A8HjiWgMVqdZ9mFLkuVx3ka4GtqeYWN1E1588eRxR4vQ6zejQpVDM3V51x9qvo2VDg6yANcagy4Ai59VvDBT9D",
  "key21": "2VBmUVp1JAPFqyduUv3Wcz6YW3rBGAQyLSVyexzpFS8f7vfVZrtavQT3u826WqFxEKCar65c8PNhEH9JfSRectKq",
  "key22": "3ExCUmB1sxiA1P7YXKnyqMYFJoDTfZASzmpsbgAyKfu4Fpo4Az5cVBYRpSNWBTAfmYhY36H6FZkBiCGRgv6bZ36Y",
  "key23": "3DAWziz5fZwhDkqbkwmv3PFbYwMBTLj6TbFSayXEtTyUm7QVEXNjE88XB4igQFPtLZxDEnjNcuGstX1M65q3tdi9",
  "key24": "4YhtPskWCJYSbguvfYmGRDRKtRefpGcZ9cosbE9VNEjcjaz3qt5LmbuTh3StvvLs3DRgogbLSvrJFUdpvNHNH6TC",
  "key25": "UV3g7W97vd3Lxi5a1ZyrJssZRgtEDZrptPwUFPpLNwY5UJ2Ss1yDHG32sEnSUSkPbV3u5oPZSQtYMHuLbPAzHJk",
  "key26": "4PvcEBjTn3ACVujqWLALCXz8QKCyqeRU79AQc3xopGCd1DCEtkTmQZX5g6gRFvgHT2SCU2PRTa4etZmcKQ6SssMe",
  "key27": "2iRjc5etRwK4GrEUUehA7EAYaUk9CnrHZf3qPdfLdDvW9f526VSVvffLPaN9yrY61oaUAKKyEBmDgwp6Xc5LS8me",
  "key28": "NebMKyq4ppbVXBHj9erBQ3Wz9diHaXqFBSqBptF8FCnpqC6vjRywPXGtm8c7xy2mGyG8VvwhmQmhaZAJGPJJEae",
  "key29": "2oEM54MBHJ21pPHj19wNpwT8suvpaHiLU2yS43k5ifCWxLbieC2CvL6xfbLe55AoTT4UbY2C6yYui3r3AKcYb239",
  "key30": "3xDwkNXPi2Q9ntVznVBAFvkiJRNybcbK133T8sRpAfx72ekjottzFrPTopLeanjHARkWvAni7X3HG1z6296LtucW",
  "key31": "2RhzrsCq8iW7GUjj1wm61vrXY39Vinuugy4kmz4u8WYBRpyjSSGFvmh2NPQ8fj7jZc12RJo4PmbYAF95gqRiJ6Dg",
  "key32": "cusgRyj4gXsE388Pcb4miXkUSMCRFwPWtNYhxr9BjTautsTnVQZeMgoWcbqpPQbJwTUKb9Bt1zdVsA3P2J1Uf34"
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
