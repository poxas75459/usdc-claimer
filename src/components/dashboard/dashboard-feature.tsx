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
    "42L5GCDVmimjcqxTcspcsMu3AhjCr5ZWgav1y3njp9sMn8bwcDHuBaJMyWs2TydCeBwJBss9wViV1DtW3b27Ya9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cfdckz1SsMVECWSqubymWj4jLGYFhAwox8PexmffVJHUtPthWF5GWNME38GgviuBdPr4cGqhc5HTe7UcW7Krcbn",
  "key1": "2E99fBWiTJ6B18xnpZuHxJjtBK241QTQDo9QqcEe5YU8Gi9wDTWvWC3nz3dF3mvWujLwdcsqf83MFZiBust7yFbD",
  "key2": "2HrQ7BbFZQoaj5Dma5Mhck55acGDF282ngPpqaXr95E1xL7iJH1wRSmzW8kqKw7egd847gLGnbL3irgF3gVCjcHp",
  "key3": "3inXzdq297KmxCG1NSJ1SPnKMUvvhs1s4Z72Bye829y5ufx9NSCzF2NTmNea4aeNKeCNU9Y4dui3oW1ahNxkSiAW",
  "key4": "2r31m3kGDNjApsQULCmfi3V1L6j7JGweCzZLdGkX5vtQ1FHfVnrDpRSq9LWwHo7333QLY6Y5gBHxWpBuaiU9SbHV",
  "key5": "5QDRjkQ9c6tPjo73mY5n8iarTkExgB9QG6t3LCNJqwnE77CXkjT9zeqFz7snCmVpGwruzBjZaMKvZV85LjSYS3yV",
  "key6": "4H9NHrfiXHDDetqdakvzEqgtkVRMBZdec66saADhkX4wwDo1g4RpREJPcuVTbYCp6UW5ysMzq82uxDscMmDraTKy",
  "key7": "44iYrCebjvsHEg5Kvf2NzqTEWvwJuCNc3W9SfVhXRebhkjhkLHaWEP91cokyVuYq759di1VWVrGviN4rcYahtEAW",
  "key8": "42QpPn2mvzx4LfYFmD94684wFhdbfMP1BMaMuA8uRPThVxLknf2ze67whNk9fR8qGgwVBnKgdtftWkBCcfLZ9NSF",
  "key9": "3XV75ynNGQ3STwUeqwHgKVZshqk5qstaefzeF3MBYZKF2J5k9oJBwV9ZXB9ZTo2NjCxA4EMrLhAU3TPYtb7B5YMS",
  "key10": "5Dk4GjyfoQSs9MpgFXNt9t45DMePwPi1ADP64R5bJ3FGD7wNbKViuRdAy1wsf3kr4JR4vefZUuV9KmjqYQXtPM1J",
  "key11": "4Y3xrMsUshCDRyig3cbBTktSHCHREDsfTut8Ac9birMR3qyTVsHg6qKfxzCfRpnNRjxXQ5SVjvQ9sd7nrrJgHMqv",
  "key12": "4tSL5AycSuFk4sZEbtR54LJUptPYfV4eHyqg1nQzb9KuriXCZTSRofdbQRSDUi7Lui3ssakExKUnqqC1GmGsDkeS",
  "key13": "2AcrvcvETSJCFigPFHkjXDNhBLW3Tgj21ZEFej8p3z5hhQwcESdvRrrZRD9Ggb9hZaqQUaB5na1NZAnapqHyKwYV",
  "key14": "2KpeGifsmQmixdmF3XRvAwGoD4f6n4PSd6woJPQxnnzJP1y6RnRh3Q8v4bGukVkgTRCaNKCTDbLsZQ98BUwLpnuk",
  "key15": "2eH5jtw16Y4XfeLjqNNBFsXNuWGjtdk8faP9QJBDkYtgRsyeQk5PRa4xSaidcDP52aMki6Xh9bWqMhKWMQR2jD24",
  "key16": "2RBN1JsbM5D32rosU85aUgCPhpP6kxK7kd2Dh5PcgoBb85FiRGmEi9QPSNsBfT8HHfsMfScBUF6TWzajYZDkpKk1",
  "key17": "5NJdHpEexPEKCY6HF63X9ySZcJSSNKkp6nu3xP4ZPYtAugoMRmkwPavY65Em8uMJ4GGTmT5dwpAYFUGVY2GWzidT",
  "key18": "4awbBaeXag4cZFFxs4w78Qzne9Zm7Znq5rqP9MrgfBcs2xiPCdTsmzpVJizTndAFHUg3fKWcFgw5JraeE1WTVRZa",
  "key19": "eDqVGCyWuDDcq9N32tiQzuz7mtNjChDx87En8VcRUKLkEjEGbEM9DSWQLFyZpBdAoQcU9kwsCWq51uKwvw5DEFY",
  "key20": "2wNyE2MV1a15kJWArdryEzjHccid4BFJ3JCZWnvpL7yDYbbxZRaqpUau4jsYQA9eeqQPes2fe9zEXyBH97ntgAUC",
  "key21": "3NXUi9rfmKvS3Yadg2tKQgVCXuNzt18yoxceHT9H3DHao54dBcSKntMQLqhGMPWKjex7sPQ84AMWZzwW6gtM8N1B",
  "key22": "2EatP4mkWDyi98iXeFi9scptQFijuNKnt8EZQV15iZPAPjjVN6Q9BzZ7Az4kpfxjb8WM5YQy1DzLbiiLMUaEwNrJ",
  "key23": "3PDVZXqB2XwSySrg9hGzxYznZ4nHAdyPmizuPSqwY9tDUgicNA5cRabmBQ9ZQnxusEJ3pPodyRTFa1dgYyqkX4Lk",
  "key24": "4oQJ5g88DjvbA9fJizxxdPKEVw4is3gtNwt86ffqCgrz6gzoYQHbEBeaThVfgt5zKZwiyQW4uKhy1HYjXKJn1kzm",
  "key25": "2CbreLnpckkdYZdMEbdpc3mZN1vV3xsDNRTwULcTf5rfUzup4kc3MZfXfZsSw3irM5HacxMe73XVfzZ67PDft5Tc",
  "key26": "4o8QwhiTbiYUYATvtqy1vYWFypuqfwqPES4pg1EXA9CP7BQtP29r7KoneHdy4xntFX9yxZp1Nn3xgzewPBB9EZk1",
  "key27": "5zDEhsBUWP6uBFz1AcXcP32arrVM2MA8cVoe3cuoqeinZEzp2dGHoNpiFxjD75VFxEzxpecFzJ4zUe2u4V7qD2Uh",
  "key28": "3Gz3nR9KEXZfgi7LmYgA9RqSjGZNfxGaqHrRyC8eL8yYSjACcvNYpcPjXwwCRySLH7xdD54dib4A7pgVtvLKD7Hg",
  "key29": "2bde24axPdrJdV7o8m9DH6Zhj9baFCAfzTmpB41ps4LaBypbPbHDPUyVGf1qC51MeJ172FxwL8kiF6Aufz1PCcA9",
  "key30": "46S1Fo993EYockJ72JVHcgFehhEMULDbnwvkyiYgPBEpus179VgUnj7gYng1VL69QyFK9CfGjivVtM1TLndSpRyH"
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
