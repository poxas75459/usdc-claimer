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
    "ekpEgkgEjM9LbM2vmdMkx9awfGqAcXA5fkmNbf5zPUugTSUoNcA2VxQ76gpYA1k7J2tHc77jVcofY3pvCie5p7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ymSCdx2Zb9Q8xJZpNXSGfR4iu9vG4TyAtAEuT4D2tWWBVPmcN3V3BoyjP7zwqLGHX4JJDCL8rmbqgu3uojSi8i",
  "key1": "4LWVcgAUba7PbS6Ey2Ypzmi1j66ZotMa2wdCWEMsdyai6szwFJTsvrharpKv9aged7amWrPLJJmMM6LS8aYEoYa1",
  "key2": "5fB5t49pEd8weZq1c4JhwtFU768J1sDUrH8s3pVkHBAEynkBBZMkK5mjpybGmyY8LuRD3Lmc9feuKrEdRgpb2oAw",
  "key3": "T1FXXcWjNHzvhmsKD66q9bbEVj9Gwwwywgi6xq1q6aYZY6Xg2md4vxkeX374iq2U1GRZ8Ytn5NjRhTF91aYVGwe",
  "key4": "4i1Z6KXGBiBTYeFJoJGGfPfHJLFmmoHwG8LWkhikZUtzMg8URWcLJcmvb6H8wqSrFepFiiVGeupJZLKKi6fJBNCq",
  "key5": "45NMiLwPW3sNuLxejr7yRX9PRQve4MeE7XGTd7q395C3Pnq1tYCrKuB2EAvtPvYbFiL7UBNWGCeucPuv7wCPahJA",
  "key6": "5Rq6TGQSaWtweK87kHiyXEhrgh9Zm4bxzmShgLae5dWMxeR45ZnyPGVuLshTdvc4QaVdwyhD5MqTT3i272TKrK4K",
  "key7": "3fwtk49vSUvzTChZWAX5gA8e28QzyfX82SJWxdvcyr9dJovFKqYPp1Yk1mk99giXaYqPTgEFEGdWdxasiWoPMh7J",
  "key8": "5riPDCe2oitRxecJQwP4pmrhaVinAUuuFsSjk9BXqbg2UHU19D4ReqLPsfmrNt33ujWxY6921L7bEYWDegJPBiC4",
  "key9": "4MXXHAK8izgj779jkehzesMpazmaaieqvk8AXnSzuTcFtNabk6Uzix6Zuuo8VEGDkLrAksoTuZbQZinjkCfPbQZu",
  "key10": "2uWPY4Wwt8WwawiWMprvNBbgE7N9UayK7PYAq2dbDkWY6GtJPRdZ8u8HpafBcmqM9gwKUgufmaevgGgH23vEhgVP",
  "key11": "3G3rR2H3R8AdB6hcYEBQ2eE1Z4vmG6BtnQE7Xj3fy8S3AUxmhWgAtWqbkWzm1PwsWZLgfW9Nb7d2e7cv9NZhfCXi",
  "key12": "3W6Pbab35QQvgLKkK9fjtaRCpUwC5PjW7YbC7G3JcG1b5ZZH2qtTHUmU48QpzLLpM8tu3s4ZVU7KDixnmGo1FKnp",
  "key13": "3eAGgSTbMpDAi4zLNQYSWn97tG46owjVitc4FC1rvQhd5HhtT52nns2JqJC3s5rqLLhTdBuxY3R3kb6UMMQCnWk4",
  "key14": "5sskk4vBcCKeCmZMi9Jwhpos5u2WstUFZx3RkHUwwYhmUPNhpkb23bjsjeBadSd3aFAQYKhHQmLkSDDt9PSYX3hh",
  "key15": "2gnjTkbKjxcLwaLDq42LTzTuJhyV17axgb88kXhAc4Voyowm2afhw95vx5UKQuEvaR1oGP3E74kEoMcFBv36MXq9",
  "key16": "3p39AFkpt7CjShsfGzmzdMvc6CnzJYaLHWke35YHh8dbFmSLWxhQk6HKRUeKTxcwhkyxi57cKrS23wmywfohUnNp",
  "key17": "aQWNf2yV9BkQE53fSYyGy3MNqf5dn8GqCXZJFXmdKUiiUkgBKUuSSzvc22iT6qAYjndAkZ49jvGM19kFChfrNHp",
  "key18": "58L2DQPtAMhkJrR9QEaMJDApfxuL7rthZwDSCm2S8JYTuCWwForam8cTq2KFZrkTsp17X2HDnjhvhR4eZ31WcD7j",
  "key19": "4CA3KX37LcEVQuwxLgWTbQz3Vafpps7JMRhfEg4dvfoeE5EWwzVyjqboXeHMWPDqkcJu5gTFyCtdTGiNh9E5qAbo",
  "key20": "25Vc1swzV5XtzwxxG8RktZNjRT2KS2Ho1EH6pmFjQgsLd9WkKpQFB85kGeiwvEYiktDef7zPeazJLcjGRMvp8CPT",
  "key21": "5AipVKurUN9vTQfpq5pPwb2t65gtCPJ3zNxsgBJPTQp339Xzooa2LYSYuF86zuTf34127DcJzdgvX2y78vnfZheB",
  "key22": "aRntXrDgsp1Frr4yRcowAeTHVVMvhxQByNxmvg5arCanmiydRM67yENc6cPPkyeYoXumoM213sQQafHMS9BYrsF",
  "key23": "2yQiXPpd7rbAQYdmneCosDTDwhZBo9bR1ZqK6xZy9h4k3gymYRsWuTqdJrG8DGBFUMkkPpzKPVVdaR6qjdHQ7Tmi",
  "key24": "5TBHZiHa8eaLnFBiJE44Y9NsvKqXjAcBr8uob7Xvpc4fcJwZg1XcS4iHdvcpDjpPZSWmH216bDDXYzHpdtDGkSsD",
  "key25": "3SSd93jjBXsrR4uA1KnVLuHDUvQX7o1eHpP5o1XdwczYkKeFXadKnFGj4miSwrmcTZjgh7LNR4aupgCt4hXAjVDN",
  "key26": "36PAm5116DE37iWwp53jHfepvjouHKYBQdFcZ8vLZWNKXxSfxjrLp2CYYcXt7PwSsb1qKU7ouG7DXFEBTLrnQB8D",
  "key27": "653RV4F6k3ve7pDJbohavSSayUGHme4PpDf7jcXaSyC5871UZdfHVwpBjhL98CfDj9dQCtb8QFMR3b8BtT6SWVZy",
  "key28": "4XbewzBk8VgkZcu5UTCdfjzVtJK2jzos5EiZBz1CJUjYshAqC6uVpuyy42sR8mp3V6CnmSTJtagZED3HL4Jwwif1",
  "key29": "ANJp3DHtTf2J8QZxgVwk7rkE4kWM3RMPch76t9bnVbNK2n7fzNL4pxjbgB3jXJgpkWhEZZr1tTYvfLRbAQgMoPp",
  "key30": "42imWkJcCfMRheFRhzDEYHJhKwGyAhbkQSzHMVSKYcz1EeaazanPPKkLzGN11AVVKCKVU3yVTMP64Kk1MqpnXqZr",
  "key31": "4uRKVngHHoiia5biKzQxxeZXw2jbgiA1nFoAGapgagRfFboCFkvrVv7i6rVKWWFfvcRw3PefvVDXnf6oirVKCckk",
  "key32": "3mfWMCWEs7GXZyyv1f3kJhALhjtbJ77U7AbmXGg7i1eqxubyCUuWuGyZVmSXDbEvw5e9GJCsdxrG4rPJDtEoSzKJ",
  "key33": "2sVnaGMTvDHSgVZDjd1dKAYA5X5qZDb8CKXpUnc5WwDQCHCUgL51D8geL4BhQVnU5XxBdFnf7ontdNK1Yjs76Ch8",
  "key34": "2XEDgFhv6dkhxYKGzraoyMvJMGWdscbAdwJYYZ845jYqyyuwu5NT7u5y2AHGCmsJo4fBb1WHutzKYj7So8LWVSQ",
  "key35": "28jzADEeAiLqzCXaTwGwtEF1QwGAwpXdcfg5r7Wkz2A7bkGCWBymxq9cYcoGCmR9m6fqUQC6W2RgmNw6eBChUxvF",
  "key36": "3nii1HCUz2dEFho1ZyQ9NBk2cY5DSG84C6YouLtUAwBwqLr8jTvLSfaBeWERjoaemubMvp1GxdddNEKWBqMSTBBc",
  "key37": "59ouqxDQPagetBenvnr1AKZu9DUjFepAhDhCGEfF2y6FWGQNkogA74ur7W9kKQw65sUfvBUh71v1sEsAwbMk4m1k",
  "key38": "g6yp6QkyimRmPh2HaMvfemK8GZEhbELu2SWdyt4rJYX5JyCttegQY86gKYiDLAL9jSG86Qe2KhCEnAT2r5ef6wj",
  "key39": "2QTmy6EfJM8sRRisX2jwrLTXh87L4rNS2NF9YhwYVb83qNEXWqaF1uzVkwqJHcTdXpe4rc9k9uSyZHUF9z2SBSaG",
  "key40": "56DypiDE5hmBA87jEaVMfRfKT2v5bw8e8oXXoYjzqt5K4z2tByAehnTrft2DS6icimCgJaH7givoMWM7HrWmTXuK",
  "key41": "mSEXqm5xaP1qCfHJLZfgyDxuzM7pqkd7AVLbg9Mqy75aUys1ZR8iidFuUP9bHdcQHKbt63veZyATqPJeJcbH8fz",
  "key42": "3697RNHQ6HwXqFsoYozpmh13nX4ssb6hvnd2XENmeCtiupWQP1tCcv5eZjoziGFj3vkCe6Kzgwu8GE444tGeirQV"
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
