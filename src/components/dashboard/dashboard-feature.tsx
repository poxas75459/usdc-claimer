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
    "4C6HBmNeGNaT8No69UrP2wDoP84XJ2k6sVLSDGizaq7hbHyn4v11uDypjVe85kjaDzqaoEZXE1BNbj8sgs776oom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TwJLfxiDDu2n3pkswr6ZvmLjtsr5H7iajcNaAyToQBridbj6NjTrDjXsFvraRgVZyJu9wAqFLNXP6LSp1XW5EXR",
  "key1": "47ZRTstaH8MxMREZGfBdEdUZUFZHUymNrHC14khKDS3zAGjQP349RqnytEcZKcpvPub3vTyEYq6dQRAEnpSiJSiT",
  "key2": "3d3G7NQrM9dXaX7Eb9borXYcsrVhUusQ1h263NLEs8qG8VWKbHcmN2JBhrnoPnPFCRDCDPxa9H1NB5nWvJ6tGcoy",
  "key3": "4mJ1aDsjHQhPrFbNrHG5vzJFiYZuMf4C6WBgotsg73vTg9qdDYXebpXazgYFRViXoD9io25Q2MMuwAsciJ23LYo3",
  "key4": "2XeJz1MYiH4JLBz9q12UCUCcjcsw39iZwSTK9CoXCtLVNtsSrZ1Z8Fct2AHQqK8FY84fGB16wdKhNeSrN471kDQg",
  "key5": "2kFph1HsNXwD6nGdQeQ7aUPJEtLZbZU3eVrikfCS7hAiWELcbME82282NGPvx1Bg3x9QXUAka3muEU2qWBMk2JRk",
  "key6": "5x5uQNDXdF44rE8avXMShZqXiZzwgVCkKoXEEiYnz4KEMywPB1aebbJAE6sGmYnMzkp9fNwFTH8n7JaoUxzr7fyE",
  "key7": "2AafeEYkchYCENL5GyPMeBnUDPojuv2b525yoESREi8668MqwgGi6pGw9oMopw54pjB7dEeXJFUZDTZ34ckc4cow",
  "key8": "SaqVGrpfU2FDCr8t595tfPPdpq46W1uviV8QBq8FV3zCHsVaUighivrxGp8JtseavHzJ1HT1yYFyk7jqDUftzha",
  "key9": "52KThYJUCq5SwS1ZGW8FJaKm4UPupQJNsS8s8PNHUxiRVgq8r9Yx6eMqJyuw5ejYyAJbv3YGxwCfZ4Ptujogez4Y",
  "key10": "2ZFwpNAu9qWxzJ45XyyMfjhR9xQwknW9b12J1bGBCL7jCuFj5v7ohv2NyAEZFapfmKCwzbRR8dCnq192wtFZKPrK",
  "key11": "UAAfmsHfuThcp6WpdJqgERzs4ukdtiGE6QJYzJVNmHnfgwQsJwMePwxnEkBL7BEbdTRN7mu82pQkqZSpRYEuiHA",
  "key12": "64tYX9iJzNHGk8eUsKRyWHu4jW9eWs5jYzdnUPzvZCSHQHLbojFKRE7zamz7Z9Zaw3Zhq4dkjsFPeKuawFLsX9Cj",
  "key13": "45cktGVfYwe6DYttks8PxhNnjyKxJh76KvwBGCEiEzM4uWEkgsBUkRhQLS54xuhVzSdFyaCAA4dBVZkYX51LkNDD",
  "key14": "318Ls4PJgtDSntUpqr8XHbsrgv5eZnhiPcUqzghHDw8ZoULTNYwq7huMvcMpRVwvRjCWdLMThN9r6h8qKoEcqG96",
  "key15": "4KjBNDWVW7bdjjirmpxJnCyDhrCSKsWHMEa4tBzh6yZ5Cbh8eMnsfP8RJ3yNz9yjD1KZPDrgL9pyYsFxJT5UuNUN",
  "key16": "4GQL4J7xHFgNSBUUqbzeQELrbGLgZT6o86AuQT21R2eqE74JDeP64egCtDxrB1bUz1r5ZXv1ubkkJHJw4ihbdeUe",
  "key17": "2s1uLCmPRrkY1ZRaLcPFCgPKtXHFWGBcoWiVchj7erdi7ma6RTG1L46RBsBZvE3bdekvUWSwHPdrqkhyX1kfhLVF",
  "key18": "3AR8HQsLbXGM1dTdMPsJNZGAzexo7qgxCdSVEKXAHPhS24hG1epDcn1EYr6XWpcganXyimc4JZun6FysVS4qmGPR",
  "key19": "5ubPAsADgu2s5eUQrxSGoz3qUGGKmsKN8tJaXob6UcVBsVgr28amErN7bX2GbC11WUran7HKmHa6PnRTBRq85ukJ",
  "key20": "3ykF9jhhoviwgQynqvByCo9116V1RuYAsCCzPqdxLGHv8xGqWeZedmWxUX4kWob6bdWnJ1jB2KbfrMkT54QvKejb",
  "key21": "2kziBDyVkS6MMg8n5E9pb5xHrPHzhEMg7pXW9NAG1CJRxuzeXKhkJNHzDUB72fMQpngLRx9CheM9kWWSBpDUpd4h",
  "key22": "3hqGQNLFGfuymTV7kaTkgVBEQ3J7bSLeBmgznNhAHewnL4qUr3YWVAnnAWLtnZg1M33o6ZCanGWxnuyuaTUR5wvx",
  "key23": "4npQsLtKWYFXuvNQcbSMaTt2eMGiWdFPJE7yNVZFFAWHQTvDALwMhefKquwt5MQ5W2sBdMEDfiKjdBKRBZ4tZnzc",
  "key24": "5waXt5YwyhJUfVPLAoCNkZ88gmYYG2ruzh8oN4iAy3TLqBFsGsAM4F415TLybCrA7wh9vxn3iRqRbFgfgCdNvaCF",
  "key25": "3MFuL8o9YwiCBVEzXfSKpv2tPrVR2nBNire3KrLvHNkzY46n2nUBL4aW9euCoNbQLbDsQFnyJaYFSbuLd4yyPK2q",
  "key26": "2HtTa1ibyCVDE9PWLfoNcKJcHGwzSMjeFHBeUJ7dRa7coMowcsx49jBiENWH6CHNienYDgs9iVuHeFaaSeheuYFt",
  "key27": "hMFCi7giLeE8n81GeP6Do32G5qBb4hBkGq3ziV3eXzBQSRXJABqd6bEvKxnn5qZ8LXS7SdFfhmoDBQK4o5kHNuT",
  "key28": "43mhhg4cQzc7o8pwtPZ6XAhzcXotScR8yG9Sg5GFjTXJiMZ4tisS6A9otNvHWhYPE8w4FJy31B3ZmDTB468wHqn3",
  "key29": "GsAsos23TTfR1FzSnFixoEqiS7wJJBgEGiMV31pQ5tfwmQNQXMC4PWJrLv1HzUHxgiDtSNxRFeHzQLBmaXYLnrS",
  "key30": "2WmXPvLNgYSNk1D3USQdxq3UuDPstcv96EodS7JWu9xf7UrjassTMe5we9EyC5BEiXEU3eELJcwETyys2XxijKrq",
  "key31": "mTnXcYthdarp28QV7w7mpyHW9Mwf22o8bv3i3twGrsz8XPjCugBc5iV3xkRkmC2w4uhSF5rPrj85m3EmMjU4LUV"
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
