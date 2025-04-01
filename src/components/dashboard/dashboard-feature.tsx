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
    "5d22mbxzTZCvFbpYhTV7w4bEZogePuFbBbnNsyuttZQSZVGhiT7rdMS6erHTvkeR1NA4oahW6m8gqv1KveRsqN61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xmf9LSEJqJMADac22xPceEiyytkSrupX7RqsVoweKCFw8Ae5XBMUGQxYGcftbEQyDcCQV3VPG8KaFk7TfZwmNwk",
  "key1": "4r5HT6nfYjg2K7XZBKcmNn3hFyixMu3mFztiwKuHkDbr4UCRFRxksD1oJYz98ebwgcZ8LhDrvaTV4MKDyT4g4whn",
  "key2": "2SRnhqdZNA24sPDvdB96rtbzeYy8v3CDaXao7pv4N3me8aZ9Nqe93RcEdm2fvCQqWHavoHf1FuFCMLCZB8VZN7cp",
  "key3": "5xjFiPWBdKC82oCuTy7AwoFZBeHt2tSuBY4PZepTyjjbVBKn6htV8AnaQQNJbnzP6As8RuJDaVCQeGJoaUdKuKJe",
  "key4": "25EeBQ94NvCPw1TKY69uDSjMyfaGsxFs7HXRCmuBriGmZrVRbAzuGh3cYXKj15CT5axGzgHUfqTkF8hJN4j6stHS",
  "key5": "34aUMBvPCvoKj5o8yW1qQcKv9YTifRpjkFS7Wpuu3EP2nG6hyjXcejkaztJtDdKcSZfkmYU9kGqycNNS2ydGftVe",
  "key6": "3rhnDJ1scH618BoGznUy1xcU7sHo4MKXsiweaH3CGg8tGvvusyAT6R2KfihoRguQbgs2nu9tkrZs7icmzvwGtq1F",
  "key7": "5qqWGPUfuXDC4o8Rs1RhPYf2Xe5LYMv2JEcCKa4MGVZtmwUVZcxHPRUHiwAXXd959XWayzTvLbmJZB224Rvtm992",
  "key8": "44uJ5sVPwqkgAzdPS83JrvoRU43Rfx8KxaW5xohdpPX4xuWyUFMxtexkGTk5ZuyAjEjgEgPTwkBGUebiLPbt1BGd",
  "key9": "2Bfh5PMhTZqEvrm1xr5kH6rfyanDmKCyTWWVLHYNAyJzu4V6EyEi6u1CqZmSiPvVrhR4dQ5cFENqy6DeetCkc8d4",
  "key10": "7KURZ1nwBpP6Di2s5zECC9SVjFW9abyWweWo4w635D43hfE9irgYWobWQrtSMfhm58Y5FdV7pejBBm8un67ks6t",
  "key11": "5SexmNCC43seesoipx7hRZ8cSUn9WovdtR7n7Ypcsnxg4EpFsmgyPwQWtUqsnnWzgX3UNDL88mzs959UsChiUQXe",
  "key12": "C83FN5QPUekSrZ9cCfkzM796pxDYZYqwwS2V3W5JpHkSdux1RYyMhjU7gbwqvcn2J2jUgveLAmjeF4DGEFYybdR",
  "key13": "NTLszGK68urwrqpnQSsK8nMs7HQDHeq1oyBTFEFE8eQ5QgnsPZamVXKipevExHkPiZA9MarEr3PCdsh9EsCVbbQ",
  "key14": "YafRMTcnC63KX7JPQt7ddUpnNciSiLvDRVRDKrYNZJVoNSeyxvTJ8ujJdLbtYXWeuKcpunz8eH9u4yM8nuWVE4Z",
  "key15": "HSEMW8hGsKHGpVQh4h5WYo3yvSEpHoQgMQsvjpKTYjdE5d3xWiU8EdBCJBo2BSVn2dKKAs5jxoe6LLYuwJvmazb",
  "key16": "2gpe589tXRatKkWmK5K7dC2SdU5u8qYuYxcv4Q7Ww6UWjHWHZgJbsJgGG7dMHVyxoivfigbf914Xck6Ls6cqG3iq",
  "key17": "4tgS9QSCQzLWTuNWhJVBwzWNW8LitbeJ3DZUKD16VoiG9P9jMVP3dATu3sQMwx7WAaa84ddkFHFQtmjBZczondP8",
  "key18": "xftwbqJHiFuMHr9yVz2Bx1PGoWHBz5WhEiNJdXvJBKBXgvrNUq4GFJQTenCLMJ1moMPUgLWKAr3kKsJWGvhgjDq",
  "key19": "5PjbNPC1q6o6Pq1T6h7qafMX9wPpACx9kzf9fTYpV1caosQVtrR2jxyFYkMsB29EwqU46QgiQ2PP2WGayLdywZCN",
  "key20": "4WcyAqtPTkkHs8TZg9sCSMJo3JcPB5u7Bt8Gh5au2oLFK6Wp1yYb93yW6i4Ka9aLbUvM57Ek1gEjcN18QbQGTW4U",
  "key21": "YBSrXh4nF8EYBmvcreddZrSkyfry4nBb7NKRuvataWyT59DtEHFn393EscBukwGUV7qd4nC2oZBxatkihJyn6P1",
  "key22": "4gsBdMQ5QWRxL2MS6rg3ZD2dvrft5Hdf8SKeWuWFMQmxavPAQXGYm1QQpSSmFjywDkfa6XKz9fZKtGkRat7aKHKz",
  "key23": "3KjB7M4vumEMAYA5E3yFkwsQjNLJZrAAiJVKVJbb6J4bJJkQa1A9mujxwvLmpp86AtVHHTeiLSpmAZeXeDmAWVMm",
  "key24": "qF5W3awRBesADkP6zwWZTRRHjRKE6h9hfjpCeqhrXmboTukJNFmpRDJtcsMwfx7mcNWwAFrNxmtV8QETNBBM1nu"
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
