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
    "DtkMaURbxKMiNpxFb7imETrwoEW4Apf7nnYr4zWdW8vD1wx3LF8qi91RAju7DdamrPs7JPkpAukxbfXRUUXefes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jYJBjVFm7ZNXzsqXncsJUkRHerGp39peHTfhXe3penBsePsVPTNFxpFocFcRY8rKgfjpzToBHaFJ2423jTbaQso",
  "key1": "5Ej6yQEQafuSR8kaxWUsPeJRXJKxyWc6othzpjvy3Q3pTSy2UFcc5brwbiHGfvtAsLQsrrtEu5kGcQT37LWx51Ki",
  "key2": "3cP2BpeTtRayxuKrsd6yFHZwTpqD8vaQgU2chex4VLQpUZKUJsH7b9EY3cEythtJTGZwaQfN5zTXo4dzhqFh7LhY",
  "key3": "2LcY3htje7HGb7gt1pjApFf5s5Bkb5RCNTQBFzXNTTkFbh99DbPL6GrsUmTjfJPmyhefpPSs5Q3cqxwADUj6ES4F",
  "key4": "2gppHcSFeGopgD7u2dzuD2CwLjMK4pur6B5CRUrNXU2dCGghc2ZZYv3NUFX95o2gAEuDzJf478RgrggBdhy2VFCo",
  "key5": "2ChPtXj9GqV7zwcv6hqNHDj8cxnpcNP2JikYkQ1NvxVcMngfd8PucfjfVqWcdEfKjnLSz3qF9Sxfkwq7BNbqFeZ8",
  "key6": "3ptdnPmZuy4BwWaiyFdkvXvBARbfYMA7fpRK3kRTfDkrhBzNz2mFCdvUBJwqsmZTGB76ntqpuZL3f8QxSTMAJdjJ",
  "key7": "5MengVmXPc2emfrU77NGfheypirk2azu8wb9XPpV2tZMEVM5CMdUrtGFGaF9uMHrbdYe2gM9zptnng4twaWfcVKt",
  "key8": "2bMZaQv4h8881NRdSxbCkik85wGpiqMfwCK3noRcZbKMSwQEdFaSf1ErX3JCGnMF7WhWu7T91Lfbx3RNUB53RGDf",
  "key9": "3vamSrpPVtYFQdiVDDpdW5XL5jGfQDh267DRvEie98xV5BouPEAtMTn2edyfxFXqeQP1C41iMnbiZkr9PW6wP1xQ",
  "key10": "5pc9Cxaa223eNQ2YPsZ2ia3WWKAPHDH7PBvWPqzFKUTRJZKr9CbegNKaH8Cgj48LMDT8T7yo8bbwS3CgDqrimLd6",
  "key11": "2Po22ccpXQNgMQshSSQQtQLYrBUSc7SXokDjK9BZYCe66yUzYwwkcHwJn1qRczxN6DHk4U9pwPtBZdXtLiXSwJjS",
  "key12": "474efvm1JUVcWmDLxZmXH45UmMMYLeJUHiHJFHSEnb4r2rEvUUx3B5xNhdC11QjroFWoodJsy3sdoxj9zH8w9sj6",
  "key13": "4ttnfCTQmdbb9jVcZqUnig9FhPdwKBh8PncacVCKbo8vtHZaL4GgryHhue3RRXK2x6SjwAS8rbonezodNsmovJTE",
  "key14": "4KcFZxZrpepV4mERccT7YW6Y3haNVMEgoTMrHKnYsEgLikBMfA6CrhZwMrE4Fk97oDFz56n47CWJA91PjBmtYgyT",
  "key15": "3gtouGhkNyPnvitwiHW97kFX1eCvjBH3RZZ8V4jjzxfBEaqoLnwRukmR7NNKeDn4UMqtyFVJ7sTVCTjTz8LFpEde",
  "key16": "2eoHW4eenjSHvtPK4VHtMwWaw3ETf3Hv6WxWHGUQkngErRyZTEXsNJxJdpJQVEizx77ETeqpnUwbkgq5BJgqoYe2",
  "key17": "21wsxg1HXkjY5mtpj3QriwAiNfpEKWgZ55B3zKY5ScQFMiS5WycKPKSQLrraZvFj1xbYffh5euxcuYpKqHx7t63o",
  "key18": "2gM7zDSNoho9x8NjJNstbggn7bx3njRYexmcSBWFRtaPD9QsLbGfwX48x6uDjvApdMiFv81esYsezBXR6GaXPjEW",
  "key19": "wzgzhfKNtR8gRHxVL3ayBFp2hNVTjExMDw9ZV4iZCeDvP5Vk7fbbc4g3Mq6aMeqXGnoMqSmJujeMpxPUuno1eXk",
  "key20": "357qkqdQxLAshYxyS2tz3zDXhgTFqitebYYK98RGW5WUbYVrVKJ4jcD3Cxg4QEh5zNmNaJbbi1R2bWMEXYyyRHmL",
  "key21": "31LWfGL49HHuNA4gnt46Xh61btuNgodhbDkNrqZFid6zBSW3wwjVfrt66VrWgUdkyDhptcoVzKJnVGaCYvaYRDbQ",
  "key22": "jmv2QVehz6K7948dC4xg52LCGc6i47umyBg3is6ARmkfTinNiHqJrAyawoM1VqbHDvmDeyC8yWv9LAgFkHvJEEG",
  "key23": "53uUBChiLypQGj4KiRrCiR8FqJuKZNHoDNDRM81cuZWDRq1A1LTkboi6oBRAbbGKyxiPKWUEF8JSTxZTfnEh252p",
  "key24": "3q9HdsoLvPX3y2kkMFZCKJ3ZNA6JkM7yzWwTP7C2vbsRZKzD1obmGDbMGGqZoFsSr3nDNFxAm7mvPs2nQc2KBHAM",
  "key25": "3JSJT2MEEebZKmuoPgiWU5FiSAaLuPY6Mz3UZcYQ5pe2eWy8VXHy3DNhpmyMt1FjADwbi5DQ71FjJMBbVNvMzMth",
  "key26": "4MqEtaC2BSVq7R2T8E62etQ3T9PYDHkSVPCXurF8MFZLR9Xz1mhYhr9hP4T9p85GF2DkYHmLFG8kXrNpV7r2YWYr",
  "key27": "5rhenj9WtjuwqBiuSh2rej9HCzzq6cBCeE2shhuoFy9icXD7j6JxT17Wv2KWxsh9qU8vgeZMZWyTuaAnRMxS2VKU",
  "key28": "2JgtY76yrZDWQSipEcnDtFpa7p2Dmcvs5yGpd5vQSndNrdscCJSz8qqK2PhJdwweMgfXsKncLHWM4TSMcn3sa4nw",
  "key29": "2fAmw9ppoMeVHnWkkXr4E7eq8zeXF9KZvkTfVgAo7gmh4x8W5AcCU2ycorKNwJuskbJkT4jgL9zyatZ4UQyVwaag",
  "key30": "2E1qXoDb8bfvhjrims7PrnW5YQGK8CGfWiJvekuLoGfFmWTXEvA6y76B5k2Wrofz6h9edpj7RPTcQWaz2jPd6BTk",
  "key31": "3nFTp5CpJGefVUmqqZjpygTykSxbwPKcGjYLfVHtsQD6YfQgZZLYAH8zbHSaDHCZLNbJrG2QhxHKhuWGYUU1cujV",
  "key32": "3YhRQYUFTWW9uc6EB5bR2V5y7gjJinRFX1wCAtNFHK3E4iCFg6mAkULH4MazhikrhWY1DFXmsERzwrvrzervJbUw"
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
