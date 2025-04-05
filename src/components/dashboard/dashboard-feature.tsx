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
    "5tcQjR1w83YeAZy5kjDVf5gq9MgHx1L7GqT1gD2uqhrnHGcQ2YLvHVN8Yez33s58JUbQuutAJV5YRhNPRRt52VXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WhPQVZC1HkwCXqMafykV8JYnDwRpsYWuZF6ACcubMTyUFHpLH4xtLtmGB8qnKZTR4wfSScnbbdW67bmX675Kvuu",
  "key1": "3fQkWSxCwUGMqb5AXB9ppcPv2NsrBh6xzteh46d1c4LYNN7x8VDFD6uBu4JyeQVWSNt7J3haHmPMbYCTvAsnXMZV",
  "key2": "GCV5LsFcK1aqXbdxHjt6EYy5DUAEqxkFJXXhEf5agn7c3nSqdR2Quv6WVoJo9ZvkXuoECDUC2cmEArPvTRSJ8VJ",
  "key3": "61fb23Pv5kBygwjJ849HWbgLbBr5W82hJzcWy5CwpQRmtiADDgLzJumb2xH4SfKj7zj3b9NEofULNS5txcaRxAPf",
  "key4": "31iAHyfUCGqLMV53zG7EqbH5kTVLjDfGBEKd3assqMqn7kZFY1MSkhAz5DQ94uYJkuhzqfBtzCNFxC14mdzMJK1r",
  "key5": "5578VFzKAN1QEFvJ9DfwxHcHv7VpCW2VicVN1WSiZ73DScqyjSEVgp9NY7TYqt3eStrb7TKVuxYEfs2PRGRwtyQJ",
  "key6": "51grjXBxZf2xSTW3CiQwUB1M9j5R263ZnHCubVPkjSJsXY7KhZ4xYcXYM8jmiDb2toDzMbV95c7XYGus5MCXY3ny",
  "key7": "5JCtYbiYgwKayQjxfSSXSKnpt5uLcAfQsWJa31qcK5Pdj8vAJURngveRGXetoo8vDRZer2YuD8mFc894qJwipRCT",
  "key8": "4tYSFiH9L7D7VC1kkp5rMtEJC2eUmNR7HJYHHs1Nru9JEHr7SDmSpJjPjmVf6YrGoG1oo7MST5y6jVbev6N8ovbB",
  "key9": "o2hvSAn72s11fzs1vY2mthBa5mUzXcRuipft9hqvKSw54wgyLuPiddyPrTrrPJ4tmHcCWXW2pq9SAfY9JGAuBhP",
  "key10": "5YqMjwcdDDhDq7pvn6EgVWRKdkH4BRgAWWejdArHAqXg69m9NA6Y2F767MWnPyADusiVZFhCkZUHMQjhdby25yqC",
  "key11": "2F68NyUGUfQgvW7KrP5zk1vGXmz5nHEF5bnSpFckyMJwGkbuTczMcN7J2v8gHdhdGY4gS91SeCUPjJTJYEdWbxyB",
  "key12": "2NnaMcxR8LiyYYp24UGbs1bYvhh1m1dCtRciu5uqa5EYZAmxHkMCSz1tZXFi4g8iEuGi4A7Hb86Anb8WwkUHBHmj",
  "key13": "5wHHWvLYGqF6mvGrXbtvuTujF8d2akYPKgESCk9ME6JmRwZrtvqRXdXy43TsbznKpN8pj53G6uP1wJS7JLrrynhK",
  "key14": "Yx64E1RZdwRUzW1DyvcnjShCvBk2Yjzg4xiDFh7g7465fA1ceXdfgwa9YaZEUvPodAQ7JYNN86jFUYhg4kcX5Ec",
  "key15": "5se9tNde2f2guRcKq7acRnY7dKyb7Mp8gLtqA7wWe62LdSBmkMnCVCjSLKNcpR5pjLkLY3cfMkUw2kQ7UyBPVz9D",
  "key16": "3SxgwcBHy2zZmutdnaGQfKAYTmu2nQ4xS5Vi2f8wKNTVNQDX38vyRRG1bjT2dksnwp6VdkZHhxzphautVUeZ6TrB",
  "key17": "3XMgwK2CLs7mwNVFmZHys3rzcJN12ikrJdq318LaspVtzDnBFEH1P56kcpiK4tjcn1JH55YiU856jT5HKN7xyKhK",
  "key18": "5HwFHUdJeRZ6r1FwZEnQwsY4aH5Dmdea9uYrfvaFnp8YTR9UMHHE4KuZbhQGwpddS2Pc28nDZEbVCyGFj9W43tfz",
  "key19": "5SySfvD4EmE8zjVBnJniJKhbdpv1PjX9e3k7tjc5RBFYLuuXCm4PsAxDssV97tM6QPG6W6R8XGSjTVVBkwmbF6yj",
  "key20": "5ddYeoEAWe1E77wHxqm252w9GkP6WsaUdVbeegVWJ9jpxKBKYkvjMgzD31m2UWjXpZ5M7KKC4pw7NYQA8CWBwASu",
  "key21": "32ENq6BTjD6sbroacE5gHusuwoDMKYJdG9NhdyqPGUxkNXiQpoEWhUfyHdSyG51NhGXAnXoXX7EEk93xDAcZb9uA",
  "key22": "5RMKc6i4gj2xa2d3GYVKUbzRS8HfR8CunHB14TYAy8uYuK4VRwKYLmMVJ3D4wWensTJBsZMK2tkLgxevpbkE99PJ",
  "key23": "3TMrWbC7jAkudyhQ8fn8fLTmck7CLLS44eUQwYMp9vWWJboHVkWCavhvcU2Ado4a8kcoWrqbw3qHjyt5qC3Mbti2",
  "key24": "2QvereKhswZGnnPPr7HRtXZUBy4kySQCAbPnGtQnxFdHULXHtcXnRZnGyBWusoK2Q9TeKeYw2a9BHM4V5eYypGtk",
  "key25": "4gj3u3nCANTjSmRfX6YfijN3AyoVCgTHpjqg66pa9UEyCy5wCWihGQHEcW5jhvWdmwEwGCd6tCSyEAtQQnxPWBLM",
  "key26": "4Nao5u1ACX3YfDQGJXdtAJr2MUJWHpM4AYkT4vwtmxyReAsn7TCcFaoopQZhMkWV3WxeXS5ntmXnRZ5WzxqEArR1",
  "key27": "2VHCPR9zsRhFszYpscxzkznck9uNNxmUJYBrES69x5FSGWCuVj7GaiZHAgNY8BgRzwHZ5c3n8woT5xwniszy66NF",
  "key28": "3as6okGWKJ283mLaYguFKVRF52cJjXRb5UHcx2hk9SA9MHv9LC2Zq7kHT8QerA1M5juDtaLnqMBFgcbEe1GtdxR2",
  "key29": "xxKadUsjAWcreaGDZzRUe8752Q47Yn4Fu2dkq1knJcTfVeCTcgmuwdQZbk4TH7FWrxKB18VPMSdKvz7ukK7EqqH",
  "key30": "Z3m55hDRtQXSe71nKbTEfzkgy6nik5FYEZAn9m1XSqGYNYMeVLVNGki2hdENpyaAxbWL13LbY4gCuqP8K92oSbw",
  "key31": "3XwxBfgVYqp1Yomge3RwZNb3cdYykFcCt6Nse3vutsqZmjAS6KuimPWRKDaAgXPemMWwb5j55Q8apex41GJhVugS",
  "key32": "5LVM3gfXw2ufCuTWf818BqTbmcRngyn3JuST3HfvgZoQm3wep6GcFeSYGAJ7YYjUj5ME2KgiBSUWe6DmX9Ztcb65",
  "key33": "4FPV2Xw1hYyBVtvuT1aJCtB1F3hn7nYNpbS4LRBDMp3C8dpDABN8o26f98vhxLkzvk9Us8AgtD8uHRQLN3Lc7X8F",
  "key34": "5qaZMYLuFCV98LhhpoJErJXj5tgdewLb4tidWvXZBhLzJpRP6X55VVahGWgfWsSgioFQthtp27fmPC8rqwu9fvpj",
  "key35": "4UAmzygZx4rJgAoWNd2BTyVxRn2MbTTyWpXc2e6EJb7ZZBLeRnzzjrWnK816zZ6r91JjJYVM7Yes4G5j12JBN9eh",
  "key36": "2CsxScGYjkRDzACNAPJW4unGubVvTcHk3ePMmHWE8tTinm2psUS8ZwhLgiqHKKed5qTvMTRGzMnFUa5QJcnAkQs3"
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
