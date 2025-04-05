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
    "2y1q1L3dVMeBnEjuEipwq4XHyXoQsAr4aJZ6huBYPUJMMk9VNNaphAazTaPJN9phXy56sim51M49SXgR8GsgFciF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57R92ujykBFZKixsTTbUhVbQtyucofab2gsdM5QRBVz1e9y3n4Wic8etWTsbSXrMWbddX9dpzXSxPWo2Qs7QnsGs",
  "key1": "5TqKj3w2JGMJ37ZxV8LYYKWGMuZuTvceWudcpahfvBXQZgKasqMt6y6mYPPr9wyCxVb1mUkFSr1UXptd9bjZ24pj",
  "key2": "2qQRPSPivxziwSAh4jgkTp8uVkBCM9sAw3aiX3tXa3j7WtXbdNtvv6YdZtsJwXUzxFH5h6v7NWqhNdtteVw5B6qG",
  "key3": "aztY1UE9bfZp7qdV4zW9zW5vfWnAo5b7wdJN8YiLtPZP1pWwNHRKNhkbbashmSgVV1JsL2z3ry1cxCgpwjArBBk",
  "key4": "3zfzS6vgduTCc4d4f1aZZKW3JsdrioiNKYeN746Htj8ktNu1DMbbuLUkzdbmZv2XYeVbSSKSFHTEitdJMAZssmEa",
  "key5": "ZTzidaoF5vJ9GanmEEYonzSre1Z7raWD3PjSw4eMTsRMLHVNKpyei7D7gaJ8rNfAkkkRws3xFyJ5aNiZ3RyvdzB",
  "key6": "BGm6L6X3yJ4yqEZtGWqBrKtuHCWBE5ZakjJPmL9uUygX5T972U9fANc2p1uRWqusiah7EoXC22LT2ycRA1Dhyzr",
  "key7": "3krL8e3jZj2CwdbyhH1HKR9NRfnSnbR7Jou9K1qrnU5CWtAuSviU9CqTrMhnFK4criHKat2Pmgoaq5oM5bi4wyrb",
  "key8": "4HDUt92b2RKjFkoj9CHyAby4vmZWHy8ueeSYcBdySL6it9ASeroBru54wjf5Ub3ecMo56KnLyePT8JnC2wxiBmiT",
  "key9": "21kxBoqscUgoPPVZwGht4NfrKnviZKsRP32iT4YaKP4BkAgx6CVa7jg9fgjMovHGxyicHtAJgpJi3gVMpBThqHP3",
  "key10": "4twLyf7fP2Ru8dUu5FkY7ssByDotFx6Hbd98RXan5ihEHxq2hnhDrrFh2ADHwZ2YhfiGQq2W3AVRYMi1EgPf3uQJ",
  "key11": "67QisMMt8n35n2zjefoFPrELfAwdRgyNznfWKeX1u745hGLxvNVFzXQ9znXYieatRCYYqrYDmcLpAZhBcAbt9whC",
  "key12": "3rFBQN555HcjyEMtxYECcuUy8BK4q3zpDfSex2GRBaFLDQnqzsAS8JCFrEucbM1hFEbZh8MpSAj6TjSdvxVrGJZg",
  "key13": "4wj7De5tabmbigy7TWmzJu5LDwEd8b4xmerjthbgXVu4DJDaXid3UQkvJ45m34uTR7NQken5vhsKTPmwCKxUWqkC",
  "key14": "3jKfPXtSkaEBmYWbvPeR1QYSY6SnLT6LevyjjqwnyWALcRgDbv833T1QSpQZLLc6Pm1BYbbabs6wRH78pNTixDwh",
  "key15": "2TPdu8Pu2dwTdJeAFnqrGtcfERHxWjsEzHNbEprMxwqmUaMCZRdDX8Uq6bHbnYrPpCjPw7HCz8ohJQgo6E1ALMcL",
  "key16": "3jMetPKHHfJDoZ7KRsTVT8ca47GBZY519dsGA4tU8PceatJy9yVRJmJZtaXJ9AxgoHZhqo5za1hj1Hfqs3WEJAfY",
  "key17": "3WVgpfAe2GFM7HaT2pbSTyPqJi6RwiZBMtPsLfSNxiu3Vdxzhqu2ERE7hNbShY5FF9e9j9zx7q3WfwpXt4Bp1dmN",
  "key18": "43RE4RwCaFaoa47wmKHgVmZ1ti97urdFDSBbirHTp5MdFieY5TCSi2E4ucHDLYJ4iscRf26c2xRwwVaiiz6KDnhD",
  "key19": "3tRYbXKyZsWihgjdrHdvccbwh4W2SvGq1APH1Js2UhuxoVHoUKPyV3muG2i4nkjMu1SBt88Y2wDT1jK3Zwz7Gbid",
  "key20": "3unfKvSSYtgBbv1iBVVxX18umR6PnuBcaQoFwzuTmpVvvqqhFhsP85VLztUdEtuYVG2zazGadnpH84zGvmqW1LPL",
  "key21": "2RGxBz5eBFqEJGS36RuGBBzx62d3EzCbyYhatDtN27WeMTchAiF2LYrtyUBzP4U8jY3KvJqARGqgYrXocmaRre2e",
  "key22": "4exEzhuXmivsbU5qgUDNAAPF8SBx63JTnGaDxMyMjtj5jfuxiknCYVSFd9Q8VW3mLC6RhfbmUcHgBL4Mju1LwqfD",
  "key23": "5JgBZtsgzcDhHHkkT2Y7T9ifyQpWdjnYzRRpwXD2KwqWWjzX9FZkrg8kGQbYVK6ETR33WvoBjx8RVH1tL286Lysk",
  "key24": "5xAECzGq2C4PJGEaE5USvM6d8qdwu6dKNm5nhjp3R1NrmJbneUUUdoU7AN4vetrEEHnyz16VjQxtyoQTpT8P7gpL",
  "key25": "5vgTgFbN9nvgqBLDm44WjXaBSg7Z2bpPFF3W5tPjfioaT4XZKRmzcTnJiMhyFYFoUDrLpGu8yj1vAP7A5RrmHzxu",
  "key26": "4WvkFxoMVo9HeLav9N2HBQuyK1TQhhbGmyswur7oRGSKSfEsZFPBSh1huW4uDNJ5DDy1MT6BUFnqrr3oHbH6RCLs",
  "key27": "2o7syV2zrgJ8fCgbKTuUM2a4oomAFuUcb8BaM1HUr8q8GZZ2WM14yqjJcDxcsVxTaJkWU9jgtYeHVaiWTBjANTRf",
  "key28": "4X3H5zwMnRcLmoMNUZtFEFqfX55kmBNTP8V85xbpLaisD88eG6kGRgeucezxzwvLzPdwm6L6L1A2SopP1KdUD9fn",
  "key29": "4FMu9NNXuKX4oXueEWGyYvrsM4K2TR15R4esEsCubzUCryVbVEVWTpbmq6t1ir2jwuzV5av9kJywgjZkdGJsS71z",
  "key30": "3mQA4GWKn6x7aGicJwi7NLoLKTsKKKkQhwWXJoqXE3pBMoDQPSz8pp2m8YYciF16yTpsyb7emTtHe1kLom1n3GCK",
  "key31": "4DVfbrfZAQXxxtFAq1TfkGThrWumQjuH8TkQuoc88XeVK7NCqxAZT23AUMeZ9MA6xbwfktTPMV1J1deqUE4qANs3"
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
