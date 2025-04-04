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
    "39kxx5pvLk6NkWauENjfNvnDNrpRQdMX271JNcywgfBLHTvmrrmeyYLuraacjXhXQ8vshK2PudUhLFSu8GuXt7XJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6my5BhKyaKW9Tf1vq2jAuxaSRGcmGRpm2iKCLdgVCdrpjbJQK8M5pCT9riSgLPFQsWqN3YzoEAJZzchgY6yEyLL",
  "key1": "Y51Gm5JUJCQnwFTz21MSQBT8hbC6maRHtgRyn5bt222Z7rbtw6TdQGYN9uimpzzBc3UaQf3L1pwW9CbUyvidWpy",
  "key2": "3tEcs1rhd7y5JKzPWkhkfTSGdy8sDDS96T9grEPp6pbaWeVVzZ4Em3N7L84GNmKMWkXjNHz6yrkSxrXa6WHzNvDv",
  "key3": "4AXDE9qSBwfeT13tg2mGDzGWmysqRqq2epFZNXyQCAo8VwSVu1pPJgLLTQ9rGYkMAgKLdHa19WdWLff2x5W8Eurd",
  "key4": "4CLB6LREtGap9DcG3q5hWf7xLPgnAGx5kHcYTiQo4BkucxSiv6wToMmizqFh7exJjdPtA6Z5v73QUa9cTZiyPc61",
  "key5": "4dsfyA4ddUSfHc3c8veGdhRH3SFkvceL9txjrQ39pXCyVRN1HFSEamzEBApDwHY9EfmFZFmpWipuahP1pbrG8GCf",
  "key6": "3q3zDQs6BRAitXXmXjGm7f8htsTYTff8vVmLJB9kotKERC18S6EyEeRJwhvMq4YKiR82MJDFFD5FuD5iATiEgMiX",
  "key7": "2jDGmmEUBKP3128aHTG3zBFLxyuj4r4sFKUawtCcsJneZLiG1uxfvkkZMvnWZCd584NPgzaYwdaxRdwWP1LzBXsc",
  "key8": "4ZDxNCVQMQzzyaa9n8yFZBqyLRfqFx34UdCiN5dTNjjMCiH1DmbU9BFWWQPwv5LfEidJVHG1JphCNgzyMBo1j9VU",
  "key9": "WLQ4FF26iTW9iXsreT582hQ4rBkkgPjAVZkCATjTggVmjmBJkwJbEBNqhKJuSBmk7S8PcQEtsqkgb1ZA4MZ6dmP",
  "key10": "LBVsGEpVTTchJPtmkxpiCnUfzqZBmuuz2bgDdoCrXM3AwyZnBXPPxoMeeGULpmQvE25XZQgUGW4d6Z4wYX7UYrK",
  "key11": "3n2YJJPLbxHgxjLjt9NLYxdbYWySGnD7PGdMmzz17P1JQvp1tKLAgDF7DQX4u8uhyZWxGdzj1kw9eHLTDZSmbcGB",
  "key12": "jdRuesq6TMCt9sWATxJ5icY11qA8diSK8GiwZhy8dD3Xn5wrzN4iLDL9dbmjFmuobGTbc1WpeAw5YaAQZRdBjkB",
  "key13": "2q3iL94QpSviBUr5RrcZroBx6zzMf1umgv4MfYZKtbana5oGNU8eHugX7mCUtc8B9JbX8KnC62qUAYpKHZoFMj6B",
  "key14": "2pw2HgEy7hFMLkd7vfmTx5Dew4ng3vLscSoG3dLzxARtZhfwwscaSpKfsPb1G678imy1x9LJGKk9Ss31Chvfs1RD",
  "key15": "5B5fjdJaGMxU69Mmmbhf9ZexoYxGFHrSZJVzGr4zdHDYcBMciYFDVGZYzGEZFM7VPYrhBAqCKJURUBbhmTpj7Qoi",
  "key16": "4cn8HJrpjNi82NMht626xUfidomv67vTJAEVVmBNQhsr94JZBYcDT8W9H9yVFTAd7kZjDoKYiTGg1nVnQjPubLzG",
  "key17": "4fHq6m3bS3DXDygXV4kXTxweN6gTr5kYtRLz9n5pvjF6Jjgs2ck9LUCNM2FB11MTFE9GHNrjtZJHPfBA9SKx9Ei7",
  "key18": "4vbFzmk8rNoDZQoAN231NbyW5nVdxtLue8VbFJtVZ7SR2KcAaJTziqom9JsUh4XMDYvYew4aM5CAXf5U4rRJArHQ",
  "key19": "2stKeNk75xCVcLo3wT2ceZqWUftd1zXdBX17ViqJFgwVTpqJLh1zgzHme9ysjwyY3z3KqDxTdarei1U24TTGfYiZ",
  "key20": "SEzyJxDcka2USV2BGiC6Ayx5WtRWx2buA9SLyBEusDLPeN4ggBU6MKpQ7e9dU2zUBKFP73GBXPtMQfRvGBJ3spb",
  "key21": "x5vqgbPLJyCRwDDsNzhLekxKRYCavqAFBAUAorfTg5BbSnRmbNtzEmbM56G6KTUv2rqLcUMrk8Bt5XGwm7UDguG",
  "key22": "562zv5fUBXh6bcW3DVsGbrg9jET55f1rxwageFbFqi6uVwxCvFfuvF79QR4hh9vbfi3anY3HYHoq8P87potMNffM",
  "key23": "3gSDCXZ6d6vecP73q3FQ6NwMuRe1aGWzfewCEynRmCxHpektPiBPq2hkm4nS6ad9A7teTuJfj11YNm9D9TRw7x2N",
  "key24": "BYFC5rs9t3W5BpemNENhVAni1kfPz9ZPT4R2Y1uL1iJqFEnNz7txth23vWPdcmCyefWwE556zdU7N4NWPpV9455",
  "key25": "4D91jXttUdfCbc95kAYRZGpPXo2uWSagvdiziiyjfHZgfByzLHqZHgDwiySzqAqUxyJXWCKBiNNnsGPh5KbDSbHs",
  "key26": "5twkt6kWWuo48VWhPpgGNM4yH5Cn2UHNJzkxGdruRc8d3M7EuGLEtRCLSrMsVCQqCof7Pxv9PSjh1Xrhap6cDp5w",
  "key27": "RbR6zaGeLfNAG6y7reiR8DdB8g8vn3WAgQ3LXL6JeTdhG3nLYd2srVVdszg6jpGNFsJDFXm4x3f43WxFaw72fpi",
  "key28": "678dKzqyMPYgW5PSsr78qKWrHiw9JhCUeBATKVbDeKC6ybPV2KVFCm6D5yXsCFXGNz8DnK73dvKoKVPGcQaWysMx",
  "key29": "ZHhLr4q9xKmNrxYFG6L5RYCouH8GkzpmngYC1HEtWwkbk9PCZKc1Ami1ZaSRaWpbYBBdrtbGSy9AAzQ5vYYxuG8",
  "key30": "4y18Q2iyNVoifoxHSDFcvUUoBgn1n2J9N9esnZCRedWeLiTv636vsgDZGxJ2CYJewzJiTV9jP27W1nqmsoQAA9QE",
  "key31": "362iuvRCcSxnmFUmWm6NsqxVXqmYStvtnqNhPzksQRptVk5xrNKMk1hvCgm9udJJRxHyAZqAEfSpY8dpmoPRA5tY",
  "key32": "4Pdbwwtr4XJZyPTCB5hFw6k2NMqriAXQi4vNHHwfdWWDuXXQS2aScUTumgBFdoFmpAPNx9zm7CNUMzwdmyqNiwDn",
  "key33": "2FeEpwqVh6GvZP8gKmA7dhJqX6ou9TLuW7wgYHhAcQeBQR5vQBsVnZdWFicRsTrkLeNpM5YhrCYvT7qmvjFDeBpe",
  "key34": "eqLUBN75thK85w85eZd8P7eSh5awcygGiDFFKdW97gtSbyQuPhEu3r5BQ5u8AQzkYX2qDnm4EscoSn2FhGwgbbH",
  "key35": "4wgncgxYTmgqVjJW2Jd99Sua4t9aKYDtCJ45UtzAqpvvVXNEmRAwFBGPy1oymVmWATtbmXEM7rVSCf8uoSM7D2v3",
  "key36": "4GYqbmXm9kmX6RKCtFKEXP2xrnDGe5o9B2hyN8yWUYA2V97UZvsuhonbXeEsR4tU47YrVRWiKvHCe5QFhTd7KG5X"
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
