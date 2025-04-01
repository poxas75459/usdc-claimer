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
    "4xGZafEngLhTc38g7TFyHeXhjrXMJwJNcUN3N5h6pp4FHKoDmMm9hsWS2aHpmr1eqe1T5bWia5cbbArCqLcG38wJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38EYRLKM3gpLa1tAuBPU5wehanYQrdSwM8TWGD9o5z4XE5Qdd7nLCaU2Nvo68zcBGBBCay9Ts9EHpxdKpCQaDvaN",
  "key1": "3NRdWgNhcAos1QAVv7ePV6PedjUrnVLNnbVrET63bHxcFwkk4nfjencwFuDZgoJLy5W9XjNDjgty15RvM5Vmx3LZ",
  "key2": "4bHYQgViGZ2rxqsQMB4wkQenHzjaCeG5YoCPwok1TyiLiUsrF39mM2S2VnyCfro5sASLQX9NxcxQsvsbrFzWMAg5",
  "key3": "5wph4rBiRAfEDP9URjt2vjAE7ZWkqPxXsPuXHZajiLKDonmJ8RVs5JasoyF7wbnFnw6ENkGmEuVTBKRKtr2oQoV5",
  "key4": "18S5gLxTv6MFVs4cnEHxhThJD9wfnfta9nLpbpkpCdRMuVK7B7vHX1Hr8e6SETtfxxFrFdpajy5AFNW9eLbxw6j",
  "key5": "2AJrhJZupxNTbsKuJWZ5511HvjVAoNZTxhAy8cVx3J9raGL2CQq4dYJzr7WmVjTJExKEPaGT92KnDupmrupBVMRQ",
  "key6": "2DguoUP9a8g1bWDyqbPFx9XJbc4knmXbahWBc1MTMbx6zzB5fau6VaQbZNY6XrneSHDR5x4YShdu7mnG9t95sxPF",
  "key7": "2TicWkDVRQ77VFtoYvFqJzuFpse3HdkzC5jJ9Un7TvSwrJCPyzyzYsQ6gvdsw6R4QSCXkiErDzZzMyhPPRLvvfsA",
  "key8": "3DaeTwEKmra2YKDRYY794eBuPBTvhng6iKsbbf4vNGy7kkbt9kaJjgvFXGuxTMY7Jza9cWB4VqVLoxmtT6Zakded",
  "key9": "5dGopXhFmGFMrGPTkTcy5kr1VN96AnRALHWvndpXC67rFmrFtiy9TXajHAcVFHjCqmfWcpc8gLiUWkHjEakgZ7Gy",
  "key10": "3qzBUXGbhovJSSPSmLLgJSF4HLHjzaKYrrPpn6pfMpi2n33a6n2QUHfneSPd4wJWyuW5U9BLZrkoKeHENFXBQj1f",
  "key11": "5wSTY2bafGroCAw8vvdcPUZJzwNTSTVB4ywjbanevM4B9SH28QVNcFt9YY4RzJGQbX3hkYiropbn2cUE1UdK958A",
  "key12": "V2eLcnpEAMxepGbCcA3kxfFz1sEao7XxorhJq63GtT1qTNVKe2DwtBrMXQweZ9Cu3pzZ82gdN9xys5VLPppACTg",
  "key13": "4Hochv3gye7XedrnuQc5auvjtRibt1cubuLhu5pkCVsNTKtmGCxKwqjcaTVKo17CgRdTvtVNJxoLvS3JdNL5oW5P",
  "key14": "4qQq79seicAD98u7EYxrJAgmSvSVu6vFtCtrSeXXSLyiXQa19XFgJfVmYnPuY9NQJdREEBxY3MGzT1jTQ1wghPLL",
  "key15": "4AKgUjqG2qasJvngq4MuwmAn2H1b5Dm1pKsxdkTdBHDxubQF4akLDeoYAeZRf6gKYsdsjfz7ByU8bz1uZKekWBum",
  "key16": "6CmVcf4GozHafCSBeXxDJ3wSiuAZVZMyhVAdMcC94H7dkr5AdR2h9CWvL1R1hHCF2hjimEkePa1Yig8hXAEf4oK",
  "key17": "24xwzLgRrJRPF7K9QdGEvVEy5XDGS9JvgSeyn5RJyipX9r6M2V1MTRARBwd6g37J3DsJZuhvEbwcgxHmP1BdTp9w",
  "key18": "4fPjzf4AJvgaEbNVqKKUGyyMSDXeT8NeDp1Maa4puEPRuXua3bJ4Nyb9CyChHC1oSq17sh4Jkme5JpAmH1iW1Sd",
  "key19": "2cbbevVtAXwoNDQhdZLecy5Cskm9zybXZzXkAMRvRYzGXnDjSy8q5YPkE4rG7Vp24HKTTBKAB5HfQfK3uD1rzxpT",
  "key20": "pJMfuensYwKmq2TEHt5A7B3msTJyy9ZHj6vLFBPGN5AmHoJxRNsW9xTjeTPznJK9Vv5kuneaV33iZwsoe8tkc4b",
  "key21": "55KAGfCJkYYXTLcvKKJmUcYwZLvCPDvEshLcuxje2SzsbNkUKmch3sHwwAFyyeAm5LKZKnHeGWdGdpKRwi5GkZs2",
  "key22": "4SNwxovYvcyaYpDNAqMydcm5wg2ai9Dh2k2EQox8yi43bjFhHg1fLpVmNaZeMSLQzGH7tpHJteCNnsQQnEU5srKJ",
  "key23": "24PcrJnmGmJcBbN8KWrVQLfXuXfiPpt3diNGYmvrQR9TwcTPjgWQ75zhu5b1JmqHXbTdmpQh3yQNhDzSgxciWBps",
  "key24": "3xzKz9iMMww5jRMsgeL94gqQnmEbiMe988gJVJvf2HiRhx76Dpg9pXMAoNY89XAES5TkhQ9rAT8QBndSxT1zYf4T",
  "key25": "59zJsU8KayzJEveohj5Ek3Bud2TeC3KzFtGmbuwtbe6gkWTwAMM4uTiLuC1RWpKQvwXmTyyvSmPnReUsaaxEQVXW",
  "key26": "4497SrhVA588nQ5GtvZKHeHaQr6pcUe3zsJxZew596FaDfxZwpyq35oYjF2W1wKTwaTeyEFNP6orviamkaWgqV7p",
  "key27": "66V4CrygYRGwR1UuKQkvjztRKMQFtZznZtnkhUJFitF87zCk7BkAx83aFAvEruZqEyrThsGQsUx4cXaKr2hVMRyq",
  "key28": "5Bo1faM7LUB3nRqP6jokURfCEjQyinY9RGwjeCCwWRi5Bc7WQ5JmQ3JKMxxY4cjBxj2CnHDaP3b3zEK7Xo8Vto6w",
  "key29": "3bpbqHA7S4fL1XFWf55dkCdNZ9aEi6S6dt7YYShTMEVC79szxRMXVa5dSiA1zTXdNFRBpXKSVSrAMd1ryvyYFQQ1",
  "key30": "3Fk3YiHJ9KZm7cExoXnNXjpsUJf94eA8BwHKN3T1AaCgV6EprPBe7yuAvpRRoVVVkYyqmUPGEF4hPxz2taNbc5Cu",
  "key31": "5sh8j5MuC4xvwiqGCqEPuSaHS65zfyPNcfeyKShYDUviWY2BmkPzfxtd4m4p2J6Hrds51ahZJBUbuuZBhTwSPd2B"
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
