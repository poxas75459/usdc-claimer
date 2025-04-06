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
    "4RPbgW4UeW6ZF5UUzxApbwF4roGQuWYGDwn4oChSQeVY5JReAobXyfmWNDGZ94AuMDXRBATaPs8kYRjuaNFAad77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dg3VrBbxmMpjXFEDUDDzz6vWsCkmvV6fzULSfP8aDfiXvx1n7xrpVoxJCCZXCbmpsaRisSVSRWKAyX1q3XNGcYL",
  "key1": "2zNz2bzScHm5C6fn8nUrytr79KpVGNVs2vMGQkNExn9mUbErZC6TnNPqQAFJyvUbv3fqFYwqSTxJfHjRWeqpVmnX",
  "key2": "4UPbBXwxLKb4cmcM5qzSoK6oxWoWcvb2ut32hSoFbJ9ew355zbni11UF2g3DkjN1v7ediC1gXSn47j7yB44ngUrJ",
  "key3": "2JFKNQ2nQ7vtgRhVLcvGPpbC89LnfZA9HgREd3tcVFwv3B5H35p31SyZjBbMYkZm4KGsUtADk7tt1eknpP7D3FEp",
  "key4": "5sj8xMixwhYLixGAGdUdi6shrmCSy2GxSNza2xRCAVJEE8NHyUbNTfTtrkMEHjcdEVfYiYUUC52uBsB5a5JX7fWj",
  "key5": "2gMrajybiU2cpHzX9Mr8jnnyRw5iu5dqQeSzYTsmBf92bcyuQXgWfGBvziPtrY3YU22TkFEZWV2A56JJAdgDZvt2",
  "key6": "5P2g18nU627hCbMxp8Z5Pkyi9gVTLdsdsMd2gMLUmZKk1asp4ffAqK6jNhk1m4hiKiZt1yPJs7nZUPV2vGc1Jsox",
  "key7": "2Kxw6GnufiYT14VyiinC6EGwy27PiktTMgb7zqyEbgvfxJbqgNkdq2hSj8SzmpCjpjVg7naY5eayQMXmVGruimkq",
  "key8": "3P81BDQHQX8UsxhqP1ygVs3Zs62ydEEydqTnQygFjeZrg6k5ynXeGpjr2yCnneXxv9HxgQpxWGDKNzX85Ju5PCXX",
  "key9": "4KAniNYpSj1jWLVabRrjnrzpZwGdsd1xjbf8HoXCMTVGzFwkFGq7XFa88292PDQVxxWbz8kiDhaJ3tKk7DUbybRK",
  "key10": "3F6EzzQAdC31PXfSn5MR9NfSHbD7mFatw3WfnGM1RBR6N37ZQGWBprtJjmgn4vbJSN23Z7jYpa94i2NcsU7BuHXt",
  "key11": "D29wVvJbXx47vJWKdG1owteXvaZpuDVrfJUcR1AcJX94FVoW5ga6Ku2ua8xapisStwhReL1wZVs8yxNWBVLWdps",
  "key12": "4L521k3Q34KM4oCVQaar7VzJsRJdDzQZjKoP2midQgitGGmUmcQEDgsQGpATPUqZhNazRiEynZ17RkYTtCAgdccn",
  "key13": "5pjp4gA4dS6soVzwRLKHJf7k7nxQuzbHRkFikv3d2PuhcXPDVjBZEMF3FGmW2hnfxH4oHZYPYfmnV5ctuMhaskDW",
  "key14": "34ZN9qopUn827t4V4m5a35J1DEqCF33jrhkUyDsaheJbnBnBy4nFEoZZ54qQwBRs1ycUMUH5SKid2c3DXTZDPwba",
  "key15": "4gtekRbucvNR4VPALgiwBzYpc2ehL4JjDZgWmjwiTmSvRMQtj7JYW9DAsGDa4iWkWMDT7CQCz5dtQsACT6juTnxx",
  "key16": "HDhJUqGpobEts2kiw6wZN43MfnZCxFS5d98UvBJUYWs3h99UC1ZMPAZe1M6m8tH6kjm41rpV77Lnv2haRZ74bvE",
  "key17": "3VYKBW5xGdAPBA4TnUeu3sKoVXLzQHgEGBQegysdqJuZU8XQRxPW2zrGE3aTqExhX741WPLoMnixcxVTS3YizoE4",
  "key18": "5nqJEn3cuvkAwEmK4678qH5Dn1wyWGc4trRJCbPQnjpoCo52XYmGkb1uzH5zXHs5Q63zyWdrDpxAFTzVg2NrSKxS",
  "key19": "3uGGitRtNUNJ9mEUtpS7Xi3Kydhcj8WienNN46wvb2kvMMMwdWLh9NRC5XW9qBaFofaySGsGfRpaGA63p7Fus5sA",
  "key20": "4MVMujG7uUo4f5psXzGmHB25kRFWEMQCcCpx7pcYTDtKMPHYZAqkawXDHhBJjSECJiXxecFr6sg2XQ3EnhVfmAnk",
  "key21": "3CDdqgV4Jxr51K2TW8iC1NEhtECrX6nbgurXqV7QXzEE3KVRKR2SvAyZro4T58n3Da5XNDN8xhLSs2fCiDuudQ1C",
  "key22": "4ZGLzUg3F4Q2wvKnoz9nQpeHut5PfjCwfY7xeUonxVXyZsrT354M3KUzagMxYt4LtaFXVDBbo3DBm3taCMpKouTH",
  "key23": "5L1QhWznJKtPNB65MrDsNyyPgL8PfzVwMCDrDGCqWapQPLhbUYejQEm5NEKbxut5wrqe5CAUCAEYrX7BBuSrKMhZ",
  "key24": "4dAsCU36UpR7PYc4yMtKmSrZy3c7B82BJhodEeTEJtDGn6usyPpumehU2nxaE8QqsLjXXG75vg4EbgH6g7Tw6g3V",
  "key25": "4H6qEWjfBkkmG8Kw2z1dcVxXXjjbbszE5P4mK8HhSXGbXzx9PfPQL9v23wNvPFUkuiCxNymJjh17WAWfzWRz5SsA",
  "key26": "5588e1HrDvR6GUpQ1rZVdUgHHQ1KwhZSd7hwsunAsSAw9hbfge7Jf1rySHHc1eqacjNoo9Eipv9obn9CduDBayTc"
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
