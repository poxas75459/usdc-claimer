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
    "GtgLLLD4hQppooWNg5b6dpWWezya5EFebg9PbziHGCEjMr3NcanS5bQkvrjcUihLDfoqx6ebwnTezcWCL77qKsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26cL3ytFs7tK3ueyRrEoELtpHqALMingfj8r6aTyzDqG2qBb3tgPbPKy4VVwpqMFeYKn2NcCsT3nDLhAFQvkJMug",
  "key1": "VWPLXEeiCtbB1zD8DwSn64xSohkMnVbKcXu7hFTwNufcoi7NeLsYvmWm6AUfKEkUSyACYgsG6KSnKRYB1bhhLgC",
  "key2": "iLGaJ7m5LXG4j3yMKs41dYm1WxVhG3HpPiR3wgCAZLaXxKKtcHDyDxXv5Qxwu4pNrCfVzy1R8YZvPjDk9uE4YaH",
  "key3": "eEXTwNmia9cV6AYLqygG8FSFCSrubfEyseyVgrzJoBRqtpTgViQkXwxXQLD1pDaJkUNrLN8jUACpp3mzaKn4fpy",
  "key4": "3WMfoJLpYPGtCDUQGFv8BfiHJ13ZyYcQvbyizigfhRaZbgirXspQ1vNHnxsTAtLSSHiujoNUfKCfRiufCLDTB1Ha",
  "key5": "3kkkmCwERv6VsBAr9pzdmUjfxNDxgtf41n5S5sxkx7NWU83cJvCpyADFakmNgWt3krxJMaX4di2Y3tHGS8UNk1M4",
  "key6": "5XSrvxB24aMHRXeqgUS9fbx9Wn5TBYDhtm3g21YX2ZS2MaunxeY9xk7xqLhocB2hJH96uwGwbC94MXgrVRC588GX",
  "key7": "5UytdGWb67vG6KhbAYfNYKHiXrdB2R4Q6rYTaj9eqekwYF39rAKeLGZkRnWig7aG3xyvzg7wtMABworhUuMGnZzk",
  "key8": "dkrPuSP9pSeNqYjZ3yhctUCpNXV76eafeQkh9bREfPG9gBv9RdJ7FfkEWysXxtM3YK2QcajbVKFMkRXEm6DKohk",
  "key9": "4x4ziGog2m8LToBuKSSuNu3fpmCPqcXy3BsEb3UxsjPXw3UTR5f6b2SXnfXiKvygshxX13b9Zy4fYPx5kM6Yh5yr",
  "key10": "3gv2PX9n9JcuGFMAcynQqSGbmkQDn7o2SAGrVDxEzkf9czjKB7F3NZAEdr857WQygqsw8BfHX7siMqYEBsRbhBYi",
  "key11": "21epbmY21SochB4LejQjSDSomg5GrwMPKQ3gWMgHw6UnZdDjLAoEoaR7Su6mHkXniLZXEc8UvgB68emxHn78ZiZf",
  "key12": "2PDpVDJPTffP1Hsd5kAB27KM7dRQDD1NBm5RLW5WsL4KtvLcQs3YEZ6Mvbr8NZV4H699jpr3ZFxv1V8KiwweWvXs",
  "key13": "3TdYqiw4xyocXgg1LDBwKhaC9MLqwNpxHoud1TfSW7mrdjYyoQc2uFWEDP2n7hrGEQUGJpzQGzjNziA76untwcRA",
  "key14": "425urkXt9NQWTH99V8kHhp4BUPE1s8kbtCJcNRPQVnaKnba4J7PaLU8gFM2TMuVtsePqmEuHU4Bh7SuMSCfWbpJr",
  "key15": "4t5Nomi5m83NvG5EyHgVG1wJasrAn21pUvBg6PzPgFcLCtZBSYKwoZzep19944hAuDwJLkTAvbhEoynVcKxXWr6W",
  "key16": "4rxwFtLk2sFguR2DhRMhMAdyJj1fh6W6k5G5BYcCAgNjvUQZA4FpnM4E7oF4EaS7G7vnvThX1SKjmcdnroTBHSSh",
  "key17": "2TLaojie6mNmSpYBANvPKG9LHkCCD4U2A3f3L24KpnXxsUa7YxL5LAzAggZ52P1o11xAxfzLaKp4Lmp3AeQFUZL3",
  "key18": "2VWf39HVShU7apHXJcR5X4jdfkNVDdigcAWomxJvL9PZXtww13ToT9yePePmHzknwvy5v7NmrcsRXrmbU1b7KJvg",
  "key19": "26CWkDu5huCgTmuukKut5nFu7rcXkExdCERQ7GenS1FwhDxtMmgb6mtYfV7NqMkteRRHareWPJ3NCXpwMQcFsuhr",
  "key20": "2BZSouvYu6AtZsD7WjfEPBDwtXqAQMvqkbTQN7QjSYorq1XzhaD1HAED6EtwMubLqEu3NU5PPE5ByRGWiRrF47Sh",
  "key21": "641jgsxCivpy1f1CR77i2Ads6GXvww89b33ETujdv2GHsxsenH7Zq5rqSPeFot3A1Km3VUhW8e1w4ZSDQYqKmz7F",
  "key22": "62bSR2ALuBwepxToYT3YH7SxNfBbh9RatES6YEizHzkCNq8r4wHDQXp6uQoDJgKV46aKUDKYjWwfCgTVsn99mEsR",
  "key23": "5945AgSUGp1j2YfDLBSYDhMjUQEQY5pjtKaQeh4kREZqacCo6CXXCkAm1W4CWZArxWys8NZFRV2XdNRWMWtShnou",
  "key24": "5EEFLVZzcndX3UmNjGRRksVe68TWrUsFx62ALzk4oUWCVk1byjBcjjWHJNXHpxAMhKQ7QuCucAK3LreLGnvnh4Xj",
  "key25": "SH4JLDhZJNaswfRXG2gTsrc8KFAK1j5u6BEn7NsYnMdnYmGfE5cWw521ZnQBWYVsHo6RfgbtfVs33LRVt2zXMKR",
  "key26": "5i6Xxq2wtuYLABygv8RECYfmVrnDNDSsZRgM5w8FqUQKo3ahmHMB9amDMesDEA8JPTi5rvaFFm2SnenTMcEseZu3",
  "key27": "2yifQRNb8HPBGdg1J8HY18dm1BHaZPxorKAyptTmHpmLk8pqVV7eg8kvV5JQuX8TwCyrAyhEQvbGfJnzW6Dfau7E",
  "key28": "pmKXTKVRKGBagi443u9Ub5RuBSpiCMvH9HqCYF3EvRPNUs9rnJhRp1K52v1KjjZdxe3AjYVaxNovb2uHpEZPp4C",
  "key29": "25aURANh6gEr5wev8bVoUyyE92R7yKeK3XtZy5VUnizqoqC6NVXesSxNDSrF5gdcNs5ymtaKdLnsfxuyvmADGAoS",
  "key30": "2gzsyc14Uq1b6JhapKNTKPQgcpZNJiveXzPfpVwaEyLaPk9h7CFnXMXFNCv66JYwHhJyuWwtKsf3FVVk3AfNr4WF",
  "key31": "5aWotkNqAr2qDTbs8Ck3qw3LHg4PRW3eH6EiZrcZfvGondBNDozTwR21hnGY5x1oaUjnUSTNEvc4mPgSSw74AiMT",
  "key32": "2ivn9FNjPt6ty8HStjgsyeALTTejP2E1EqA1PTFb37Xf2q48SFdJ4BpYrUEZpkh5T639PVG5zLMw5zbYqURKeMiK",
  "key33": "3GscxpQVMXTynNXR7rMnnHyUbcAAtVG75UtJXhVNW6SkYnFPLEtMzdgzT3stXGJbp44Y5qFvWVEDZ4S6KEw2Rp7U",
  "key34": "eQ3WiSxDfFTvse78aWzoiNj9gBHx9Sg6mj27TKZAwjUxbNxdUHaQGW5T8v9w2yhXFKrbRgUo2qhbgarkfYwSH8C",
  "key35": "462jYipJLiR1grXQF2L9XecxKSAje9PBYqEQ7oxeBXgKMESNLQjYQjrjCvheQJu99JpD7GdrVqkdghdxpjL4thD5",
  "key36": "5pw8h3cjoRCrKxTSjzWUzY7JFzkqETCRfzDbMnNDBTJGpTZ9i3wCoKB2hn1L89dXExF1Wsc4AZoE1MwNCgAGdrmm",
  "key37": "3sFq24aaM7fMrGJcBwZWwf6txPvXEhptSF21ymQFfa3aU4ruFVTaY55XK6X9UHpDjAh4Q45ZWpVdzD1SN3JKQfGD",
  "key38": "5b9dnykqD2hJvtxLbRKDszt67XuZDAErU2TmvH2mYGVkHskyjihmuu4LwP5tN4XTmEwwj9dNLfBiA5nWWNBmEx2P",
  "key39": "26Miq2pnLCokrvLyJ7MkSY5eoVJ2UmeSakJVfGeYjieUeJUkqow5Zb3VDLdtJBLzYrYcTAXgvaQWAU25MqCjSwTk",
  "key40": "3FrPLSgf6RZQWL61Srq9BHkjBWT5vDRJuvB92PwpwtcwMvoKEGzGo2eAEeUnDM1nNuTfNN7Uj2LEQXohPfs2C6Aw",
  "key41": "2ShoQekJ9UhrriCLRxexaw1VX4ye3ocdvpF8LEBveemnY1WqkzGczBBZvATji3EXa385fU83gsyK8YzzLRSKBLVM",
  "key42": "2GxFqaC9yzCe6JoNKkFgLTgSasrfrfpG4pqX1pA68WvwUdeVLyeHRvRwR9B2Tycxkw8d6hDyjcR3wHhbsJuLbzzb",
  "key43": "5bX1UvxAhgiNvcZCBZR9x2G8zLNX2t4W59eFuzqeNzFborcFP19QeDBYvnbiRAjYV4J4d44rDtnapxBcUkvr6pMx",
  "key44": "kSaTxNTQEVHXP2KCXhJCTn3i8eJ8fsKmq2bi9gQdtfN124XYqtcMo58naB9g8XCsi4asKSB2vCSXUiXsUd4a11u",
  "key45": "3qSAP3DU7av7Lvh27Emi48oCQ17v19ZvSnobxh9ZDVR4iUJ1Mzsmm1gzDayv5bR5qPwxfNc1AXasTB7BCVs5uWe3",
  "key46": "2R2ESDtmbS5Z59F9bMJ98E4UMT3VG7d2XSXUVhU6uNsLPe5BsWYHriqQPwhy2xEcpkaPojbJHrwGESuRKDmuK5yr",
  "key47": "5zc3ihfVgntZqFCtEiY675xjy5iubG7UzniSWLPb8ze227UvkCkLdGumDm2L1Sr5ouJCJqDtDKoJ3QKAMm7BWLPg",
  "key48": "59TEgd4oWb8GxaNL1JvKAM5FJ8Tac1fQcf38cDvEkUYvAtEykmufm3pvnQ1yuAvkdqRzSSfdUA3PDuBqNfpTS582"
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
