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
    "5zfeM5BMuVnEfzENCwf2PK3ginLdegNwu7raqp92QLSfBrT4HaAgJBCCGKcBaKbR7VZj37ZBnJgBKN9QUo4qWVYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42r5w1tDfFTjgqhm565CuEu2nhhb2iMnUZ5HaHa72JGVtBEguQRbs9EX8WXRHQbHpQA3h4c9xoC7uPEHWbCWhbvL",
  "key1": "2r3mwC45vPb8wZhhEcTzG5FLogE2gc1wwPootsZWPWY9v4NXyeRr3neSBcvQhKcEsFwHQEn2gDWc3NVpg3MfxF4C",
  "key2": "2pdfb2wgUc5XJTvc9BNoigL4EqLRhpMVQ67L28TU5gFixBMBShw2MCeQSsTM5angAVJ1g1aSQEAojjELb32D59KH",
  "key3": "5yw14KHvPJtkYu2CTFs3xwDzLfi3Vxu3wrdAbbqokXcbjwQpLjJGU9T3Schn4DGcwdzGaKryHGwf63yfs6fwUfcJ",
  "key4": "2vyRjjTJGvzpcoeLCyob77sqWtoM1kZ4GX1xcmdwH244Px54WnWtYrBvkMDfFsY3cZ2xkYXHccLGJfWHVjQ3ybkY",
  "key5": "5usAH2qUgP6LeeUaL4kkvb2rLkwiWZWCiXHT2gFRJCgupvkifCPmAovpzN53A5eKN5aYyFS5JKY86RbEZsvormZ8",
  "key6": "disN6HNfVtDtppraGcoorPBx2vs92iFysAJSY93JeQqrvff4ryZxFvwcEty7cZt3UFczTVciAEhArFGmYXs6Pix",
  "key7": "58tY4yvd4686ZYzdYG3EetTwcdH5wHvA4gZRqkDwfmzWXMPtGLpwoE9SPeLuru6KpsFXy5jtjbkuoTWVV3bJq3KX",
  "key8": "4LLVgZk9VqXJAMarFcLkJmkdjw37Tyc12PgaaPhNJhCob4Md18dcV7w7QtefYyvAVDZtqLDGvh8mLiKqbpECPKLK",
  "key9": "n3K4AhRbP3MbUpDvFYxdE31FNX4VYJmyHQ1Xe7QUYLQFt18XNQtxgfcRvaZRYaVquGYbwgyqXueSmjFuAeHyjrs",
  "key10": "k1GFeNhvZaVtkW6CHBzePHhgdxC6Ya6R1UcVh31nf93ubEyDeS1XNDJjzNU9poAa6125RqgYNyFt6rt8n45hZHw",
  "key11": "3ftr2ZJD6tfoJ3BgQsGKciCv4BEvrhZQXPvvhoy4SJesNtGQLsEoe1fXmTG8JsJ3gMCPtTYvhoMb2Amoogj9R9hd",
  "key12": "2z4pAjA51UbsWKtcYQbTPn81oj3qapEQWgFTZbB4d3u3bsL9sDPx62RQ9AimzC3i3Nkg3WHjHpCFiuMYpg7u4QFg",
  "key13": "3SQvyiSJ1giRXy46wg3mY5ZqZALYjinp8AAY5zX9jSRH1Py7wdTo6xyYNYM2qK6C7syiNPivhR6R8mxYndjcT1HH",
  "key14": "5BgFirGce2xbQphKwwLQgPYmqfxpPWzJNxDkXtb8kjghpu9SGgE27WvDeJEaPudK92xqBT6BQ5btKq2LXMB5pmQm",
  "key15": "2FrXWbMZLyu4oHN7HqYprVgaqDNfCKpBt5rqo8NNWhP7Lxuxq2AZE3TWnPs4aPbLi4uUxzsD1i3FC8tRF5Hy5upA",
  "key16": "23pUCPwpKYG6crawgEzeuvr3cYcPJx4PoAz7qqEFqLeWmEgH9cGV9az2j37fp1ZyFvJT2LBiAoWq4726JYZ63tfF",
  "key17": "4ehzvjABXMQGJZpdvQ3N9tpZeaG4hK1m53xd2pwW2CURhTfbG2MZuch94Zp7UPZ9GajAzpf8PHoB5RgG768162jq",
  "key18": "3xrzqE54yq8ZW6qj3HXcR6a53SD6UD4owZzqLkqZMkzPP3LTMJ6BWYq3yVaLnRP6PENDh7f6q1Jp2YZrimGWFq3h",
  "key19": "2RH4pmXKxFd7z7tzp2BWWa8Gz22m2QxjjviLPLvBDBpq7Cnv4qH6C4epop5FPY42YdmhiGDWRvRSRxTQayGDGL6u",
  "key20": "2ywpYUiPBkvix1TYyufAANiJof3Zop7cCQVoLMRwfpkQq2bHT2Njo67C71HDM6Fygr6GuYs7aqhvMHKBsEBDGiiB",
  "key21": "kdbAYaDgu5C9TtKb11r9Sug3YU6q1iBw8oA4yvijwNFps7X1YwUjT2JsGKyYHiTkCRP77gedFHF3DrskS2cB36r",
  "key22": "55qfsNoNcUa7QdX1W7pWy2eXQSrBbPpLasf58s73N5JwJocjZjpMnuU2Kqo6Vgn6CBw1x2tFvB4pWhFRBpM9t5k5",
  "key23": "49mqC9YJNv3d6jiBsRH55PD4LWzuSvoFL5ytVLSfrCvuC2RSwy4SrUNvwimRUuh3CpD8oWtNJkos8JhHyyiDmmct",
  "key24": "2ktX1q6L4rerpb5Scm4xc5ubYq6tULYtd2GEshL4wm2eh2rqvNxWSDJnZaGNBpnsKijqCNgXg4xF13kKnvL1bDHD",
  "key25": "fphrpT6zraeoJuoXDFmwkdDaJ4LKgbp3e9a54LFejV78mLRCsFwhg4h1X8yPkUiYndQChih3on2f87VGzvy4Z9R",
  "key26": "357LqTa2jtCPBf2cUP3czoGzpa7FExC8wmmsG7b2hWSome8EDrfYHatp9nb1gTBGmw7a1MihcYpTs9NCPiBFmi3L",
  "key27": "3q1wxCE4AyEKbVHsc4WuP1bcHCBq23TqdCGtezHLWy88jqn8HKGEeKVG4dey9hRW8QWFBvRv4W6ETVqKZQ2oGijg",
  "key28": "3RJsU7VsZeWMXQjwwSnUMriGbZFPcs6ETD6E6hNX3cvbxvGWXW3ptEELK6zw229Peq24WpM6iXjWNp4cnVNSMsSx",
  "key29": "5tvp3fkZA5Cx6Hz8cmzVQXKZ4YRVfqsrVQyB6KytUNScksGAXRkJUfSX5HF8mEp1BXQ91r46conLEKrQX8uifzPQ",
  "key30": "4Vj9ANFz4dAAaXn91pw6ouKfbLG5sxRghrXKyyAek4wtuLrTM4xJG5Kb1Xt3u7akjRm6D9TtS6HNRnkWHrDcMujF",
  "key31": "5pGf8fymQkzEKrExK6vSVfuxf6xo6pmE57cfGp2BeXLYv4128RNkb2qEitFj2RCiEBLMhicXg5WKpdtY9EvPZCkg"
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
