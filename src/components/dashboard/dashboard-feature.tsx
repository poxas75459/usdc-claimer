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
    "41zkhJx3pQegvCGBrcZj6Q5j76aqDDKW9bSjjGDXqdjUJTgET5BrMomf7eCtU9uU2n6kBh2URs3MxhpJ2uUU9qaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WRMyuoqNyWuVBCZLoefsBLwJE7CM24i95P2SxDa1UPf6pVyEC3VwbL8iX7pZCp6j9h9DjpEptTuz71Ce5T75F4D",
  "key1": "3gR7DYyJdmfGJwgCM4pAyYQjzfzM3eb298hhBLx6vGEL8hAJh76d8bpuT6EQpD3kmbqpqqj1ubz23TWLo9kuo5D8",
  "key2": "2Eah28VDK5x6KSW888wHz3YDNgc5fHcpNuE4hGLuZHYBzegeJmJDtcSb6MyeG9fY6FE5tvgxSxpNFjTtHFNcDp31",
  "key3": "4eL3BCep1YRFUR7FpkzH7nitUMtPs2Vt22QUq7pKEqT6pdc5Z3GX9JHskP7CAcjAAZA9mKp6SLPcrbssoBnKvw7b",
  "key4": "3oBZQr59ydAgZ4U6TSvhgDfACzPwajLqLKNTGvJVhs7Mze1tphGLMZREeL7LKqjtojkgzRr3YBxv4fCf7zuMZikJ",
  "key5": "2j3E5w6kv3rcMcZXVWfFnu9u9P14uo76QTsazywEac7vDYVB9TjRjCcPXdGCae8NJSpDoi9tzhpNGxfyJJh99doo",
  "key6": "2KgEQKPz4NbutwVZesACnT4DR6wu1LSWZpfngn4aiX1KW23TiKv8Mv1CZF8f4Y3nsoVDocLdtN1CspVWHrHe5gYT",
  "key7": "obEzhhoqzaXdTozVJAYWM18BTdwU2dKnj1LhLLoYPYjFPJ3wsBymr4aRLNDCY6Fz1rfAwfCL3gtjF2FRmqTt5q8",
  "key8": "4iDnEK7vo6UGQg6a4LdvHoVWNwefsrD8P2MCVKf1QsXHokrdvTv1U11Bq4C57bNzAB66i4CXARW2BXCBzpC2fPXW",
  "key9": "2z9UwQ28tB8paieqd1AaDr29FjnDK1qWtPPJ1qWuVKSL4hC98UGKAL4vudA25Fx3ggmn7j745xjik3xHNuDX2Ybj",
  "key10": "8xpJYS7JYS9H8zKXteL8tX5qYro6R7H9PJGVq4zYskA8f2dctHMYGK7HpJ3etfuvCcz5Sao8Gq8QtzT7C8ekPuT",
  "key11": "tVYA7cVU7FjEULKKkzv3jQ6jPwtPRyJHu6iRaAXiMLiDPfhHwiBk4eTfF3nghmHuUxLMVPYH98yf4C6XNrsKtUe",
  "key12": "3X8ysCdpbvGdZ3pJ5dyVYqWKwfja7p2mDUBAQbXczjgxpnQCQYNoYNAMb59tQfh85k5rZuvU3Ui3WtKYDVADxu9Z",
  "key13": "4BvGTM4JSaMvNEfiQZqWV2c4HtPqFt2uPXsBkaBNFgDLRddAhy4qzRZZh2dWSfpyk4QgDYgow4fJHDzu88fxT1AR",
  "key14": "9c1QYfZtzjgM2oRDvjD8C7VoYRBfu3DgmnXnn5cGxtFS283FHzRFEXMwDS1STJFrckxVzhxj1jCYznvFFYfkVHu",
  "key15": "LJEqcAUtNUQ6mpE1rjEVH7zSi35ijcYmeKjFdDePJMZ2U2rdvBe1C4GNqc2L38T57cL6JPQPiWfvJsZE6wEcUkm",
  "key16": "3bRHmjitnyXj8w42Pf4TmkpEPe3XKbzqS9fdhhsg2wvwNLBMRxN7pdF2Uo8yt6SjG994aQ6Z38FTMtm6t7RQ9VUJ",
  "key17": "5bA9y8C26FV69sEjRhcYNpVLbp2yXrcLsrCht4cJH7fZZa3yAfuPqhjh5uhTYRme4dnSU5YDNA4cWM6uUHTgukpt",
  "key18": "3aD1TFbenB9kLnUK7nwgSb5gfjBg8C66jaS3jtjx1gzDdMCc2wr68BRhZrm8UF5r8VzQ4RyrWchhjHZQecnDvTSt",
  "key19": "4jesAafUe5Pds8LY6RaHL41xrtnVkEEvzqeny4ydkhxJsrSSgAvgMynbzWsfMErn9WsrA1TbW1Kas3X6Bs7dqJPy",
  "key20": "2qHjbTNvfVLv8nHCzQdgQbT4eXnGqTkTbxNLBYctqgUJFZN3HkJcL5CnyJtEYtppVUjEJkATxPEem2gU2eLnmeVh",
  "key21": "32evRHb2v5Pg5erg39dmnYL1VrB66YeprE7P4y45ZK8gyWFnfNuKiwokgWuv28iGovV1fwGLaV53iF5PZ3uUhw5t",
  "key22": "5KQewG6Kw2DxuvoyAH67wiRbkXxjHTPA2kVRa2cWS4CcLVL269HHoZi5qHWdTVcfgV1P16cK1vYATheoBbgmChXd",
  "key23": "3wCEmBhmwqm496KXWwwEwhaUG6Nu9TqwhUL7fP98Ukt2aNRqi25QjQZT9xSgeTfu7EiA8VLiHJejvauF1MCb2AcD",
  "key24": "2mAZsBuipjFhRNvdkqizBNtLp2uGPqdTutG6fa5CdRL2G5uquGZTmkeWcUunKU2MEPJvpEpfykkVnvwH7U4F2AEA",
  "key25": "5ZPeUXWPrg2ve81NKE6v5Zq9cSJzbU5dBHBbEb7GvStJf9xQ8VoWVU6nbUDGZhXExppeVEHXGcbuZ9tpzHTMsNBL",
  "key26": "44gjMRsbz19LmKNSnmwzzFxb33GwVJ6VArJY3inifd2BzM5MRaA8vRkaYJAv7Aw8iswRiCMSE6heK3es6nJsjVuc",
  "key27": "Xm7jea1BmyvXStcZTtKBT28Raqy36bYUpR13pCrBFge7BMQRfisEcTjMBEmiHzJFjSfNhMmXmqPhy1kfxsTBH57"
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
