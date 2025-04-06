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
    "NMPeFiMHkguxNj8fQTyc1CQkSSfBumC6QC1237GCyUDWea3sDFK4GPopsDY8wqd5QXtKUmkiL1XsmTwwZT4mH22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KciLN66XRUJo5QSQZjhn5d1xpXG3T5G14BkzikRMfos1CKcXUkZESAUvRvW7syR9migmgjb6oz8FygYjMd7muvN",
  "key1": "3nyCLNk119MYHJ2zZxA1Y6AhkfG78sbZR1mjH1SFfW9cuUPZbcrR4ybhmcYdZRmC9wshNeK3zSvsECvRkmkCDwMc",
  "key2": "4mCsk777g8zTizgFbaTxxnAweY7KiwropPyjyW4GfwY3dUteSeY8bAtjoM91rEYSMwzBBD1n2GjBZ9ZgVVibRMRe",
  "key3": "ruVqVCYVrvru43JdPcAsrzvKG6DYSfyvV9Ey9w7WkZzMoNRyZaSoTx5r2PNC6qqeYULVFa5J8oyrEca7Ws7NzrF",
  "key4": "fiEFRWV3DYZN1PYyvm9eupaMgf18PvWg7fV2aAAbnr7cmeFA6gQPrzeZWK64WEdrmLqM2PFK4XXt4f2bNrpCnh2",
  "key5": "59x9soJVY5TNbf7sz7XQFtSPgDXwfXChG93Rv4sk7Gxma5bKvpcoG8L1ZttjbBwpvhxJLtNTTfSc3vCqJUPPW6xK",
  "key6": "a5tYQhhW9ZiUDhYCpDKnhzKtr5aowFDdGX55xZrS411DJ2EZLCFn3tBtVfT4a96RW7XxDM6J5YZzbawX8YPyKza",
  "key7": "rJeBJcgQ74srF4jm3URTEjmnW5aFJ4VkVurTKAAZeUdkZ89mAtL44KkJMxMbT9afHP2HTJzmDgw58t81mTZMqfR",
  "key8": "3ZPWp1qiAu4FUJLxcetDd3vAmF7NwYsbWrWA6vSohfoV2L1m4iwDsxW6A3167tbiopjPtcX8ZGGMkkqqFWbAd5a4",
  "key9": "2bApvjYiw8LZv9r9D3pCnuZde9FqXo9LbGJiheScypYWge37k5cZpwNb7oSQjAFvg9f94xVU9bnYSf8GsK8KmHuJ",
  "key10": "5iYepXiWcYHEKatnvjPojf3dtgXxr5GqoUYarvPRkhhbSDZYfwB7s5KHAztCYNycyKkz5EpzHM1DZC3xCjT2PaRM",
  "key11": "3X95SWjT6HmVm7mydpjw9rTBBuMPzj2aaQYzCtb4tacBB5i3UdLQLXYocQZByVLATa9EMLjCjCXBZdDaymuUQ1hA",
  "key12": "2APzaBDhWnsspg1hsKBxRhxsbxBTForAhCo4Mj82vJ8wUuJJWt9NpAJpmQ8emY2wFmzwysnTQ81A8wGAgvnSrRmo",
  "key13": "4oLqFYJdmnsNYEU1gj1193K3tWSATpE47drRsPNrLLPgY55PE4mgPBZkZ4yiUHLf8TRE8cX9dNnUjTDtzSAeKUCC",
  "key14": "5RVPhExvzyidDgo7b99xh9bsa4YTWbq4sw2L25yH1KYHsK4Ykuqzrj9aoS9Ch7GqV29aTrwDwxJoZVdZkxSAop8b",
  "key15": "3YAHS5buWsFed1ht4kcbaNaLSL17DYVT97tQJzK3dygXhm9KCNTZbsPHmmx93wTM4kX7LS1hHgSpWcagp29dcSLh",
  "key16": "5JHjo5m9Sw9rhXkWDeTE1iw2ca2zoykGHZ8hBxw1kisHXzEE7xPE98kbJuyC7x4qcJCx16w65BUvkyuZ3DjSscLK",
  "key17": "4EsxrWgHr4XfbxPXmCiWA8U6oxqfvd7fwhBsSFJyzTKDQZnxfViAa91heVKKNjNPFFfRCot2meHvnXUPHRBgDExX",
  "key18": "4AyqRHdPTTP83CL1frfVrBpq28p7BToC1j9m55WtvqeUGKpS39FXBrKqQajj3nSNTfCdxp5ZCQTA6A7YJyeJJLHt",
  "key19": "5CF6hNEsp3oNKVdLBxFnodXp6wAa4W5ztkWQ3qdrBfPJsZCJbVKsD42AZdeHZ7mQtWiw3aqPmQkg21FmTb4hg2HJ",
  "key20": "3gmvFMFsv2Ae98ZxADCHZvoaL5E8gs5D7KAgN6Rk3oBzYFn1CKyv5PVXbAnP5JcbkREEKeR459ghgjGPpEp4KsHg",
  "key21": "2Gq6WQb2fnD3uw37RinYhfytZZUoiNasoeQ9BB3MECegsCR7dnfXXLYozfTB5FPhWofCaJp34sk1VkiGgidRZ3VX",
  "key22": "41Zozrqba9un1kEZCqMcpra3RNLXXpz3mYqoDNTRre3ZPo2r6HV6ybgZyBCV4WF7ccnSKdi7vN8Vqijoru3kj54Y",
  "key23": "4YeMdqFEUcKwCZhZUAvo3G9rVnh3EpxDr9QTZt3bvhLzuC1ZmkuEb31Esg1zh5yMEmft2ZtpMyWzv2Mzo1dAfUDU",
  "key24": "4PmQLGBUBvYR9i57MKTt1Qz4Mvh7tdFjFHCu28DahxeGxneke8o9zs2nrTN8kg4migf4wPK19xME9sBaXKXEjtwf",
  "key25": "XN4NQ4pnGDgEZPW6hr4zCfUT34qJgH3CSPWkGqkCaRCfmPKd8wCxqVM9ty6viuN75VPi84Sj8nnCPHSmDD1bGHc",
  "key26": "s6AWWypWTe44UhZ23vsBZuQDDM3fu2gJi7DP55tNvdq2yV21QPbWcNN3kcx1Xx3wDeBzD3ZeLA2a7BJjyTXU8cN",
  "key27": "3wJgC9AiPgnoMdwWBuyJs2Z4Hmx2vofedYvYfSBEUVbyWTpYiY7iBBjCoDS7YjugAdBttH3KMZmigH5zTiGTosC3"
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
