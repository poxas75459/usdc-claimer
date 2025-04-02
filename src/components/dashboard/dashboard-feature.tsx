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
    "2QcVfyJiMny7YjKDezYWJqAq89vUGH7W7bfLD952N5JjgY59KC8EetqbfA6zK6dWxEtAahAsUDTUApG53UCxi6WP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TU6D5SAjsr1jF3Lxhhfny2xSc7zcd4y5ziMvWMVC13TAq1omSD5MTVTAWRS7iXQVfX1tB8AZEhQRznby2RyXeJB",
  "key1": "4pYUk62tp4ZiYwWg6PKpUiH14FniBE4kqTWh27chMmSmWG1FdihFqRpc4emyYVA2Qavgfu94ravQYrU3B7mJgcie",
  "key2": "3nb6aaZFNnBw9xo5B3p7e9gAtAh55UTNge3gBjbrDsJHbMH7RR1od5m5qynHsBE11zk36zBJHeH6nGNJEhUDH3H6",
  "key3": "5dFCkxZnC9NN3hukNZfthdYuHDTE9kFe4gUJpgS8afrU2usJ3xGwXi6gEFkWj1WjM1JXyPnUvfCnfoAgfpXUb5SC",
  "key4": "2wsZ23tMg78iPA1K3grHgNb8KVosE9nSXnZAWt87E66jtdUDw3xPUfmHq3d4ijYcrncUCwgREuCNDDWARVTxMMze",
  "key5": "3zJ5nvVhVXjvYCCE9vuGE4YEm6wBBj8VK8quke8WpNS1sizG73jQXGJtSFP22sLMYcknejkGUPWTLmCMWq16kFy",
  "key6": "asooztY4ATWXNn7RQzoAgFPQXysLyg9NPjRQbEjeeb2STtCDY4AbGjxY3ttJhpPqc86sBThkjxDNuyR2v9Nqhvr",
  "key7": "kHKMzTpVahCrQmeQQU5JSQ5N4Rf6t7pwdERf5ymDwvsraCaC7B168jaHS3EJLAhZPMc1Ev9fsdA6bo5wzeXLSYm",
  "key8": "dKsRraswsdpSuRy6hmL7osij5oLFRSwm5QjnVYeksjNwqysZA2A2dCPQc1QRyRaxf5RsWwkmNypH1MnoGWb3ZbE",
  "key9": "4EDV4rvfYMWGsx2rpVoJ4miGNWAYnohRy8Vbazv57qijZBktEq9C2Fy3MaF4ZqsGfwG8NAvFdDu4X1T8tt15VGPE",
  "key10": "MbUdGRFzKWvZkNwcsr2HhqSxeGoEtPvuHmerQUoYgaDsHh3Wp6oUAU3pnzc1yQJASMSoJH3MMXeBvZET6BveR4e",
  "key11": "556oxuDzprimDT55WBwQ7CBLstkuDkxs3vr9y33evVSJgf52WGUtdwKHLJD7Cbd8WAtsTvqVFeuMcSQw99BCyVMj",
  "key12": "4AEgWrJfh2eGJ68383sE9kEyK6GDvhQgaiEzq17yGVmbBsA31d4FLykJB6cgg7jwV4dSGfVojhfhdH9GRHsiWSAS",
  "key13": "5mWzmMxS6ZpNzzdnm7ar9mZydtjbdAAetAd8PXTnodKDSwain6RBEw2yiWFmG1yv4VwHrWWhr4cHUpEY5nrRgR6z",
  "key14": "2pwfpYBwZUG3aiuwcUFexx5cCZihEKQK9JZU23RF7A8N9aEHZWL3VgXKsw3JJsgUSiMS45ReMZxXooGXQbT3sip",
  "key15": "4tZjKHZ74k2LoViE3CdrTUD1ST4Hrke6C8i8i2PeKEvfCUUzQJYDXCLw79y6EjnEcXJhCp863pahJWAagYm2xLtr",
  "key16": "2NkmogC5KDaXtPijj8JE1XWig8MpZBvNsxAMHZa7K7wFgfEU7b3cJDe31QrxodfHfyyetnGySkCt1PYE8ZZCwBNQ",
  "key17": "59QeReBpacYs8TmtkctsgkVnvxdznduWgHL8KLLef9gJ4isVkg186KCGwg3bWnLqz1GgBRmh9cwv1dr9yE7tVzxR",
  "key18": "5XFtjfBDxv3UMEayEhS1ubjAMJfvhrjEnmVGpLwUML6K3dDFYgEVMvKEmAZLnaD2V2L7PwTAf84fFJMVx96bfw8Z",
  "key19": "5MrUDDcavv8Py3Yj9RLS7RrrCXKop9rn7KdaF2buyxbUgdA3iiprEvSj9dZ4PhCiUCgjbfwi3DurcCsUjEZayGPi",
  "key20": "4goKqy8BbHSFTtAorcfYDoEzVcgLSLyxA41Fe3jrna4yKsnyXTupvGqtg5dDiBD6MrWKrCddLsGmLLbVGXUYjFEn",
  "key21": "5ATdATyyNatunRY6XA5auZEotwE2yL14ZegTJL7z3KNTFNEuuKX7B4jTyCENQrpt1DAC4Fz99DvPfx3pAKfD28Fg",
  "key22": "wUMp5PMTtkH4Vo8KXCErPw1C9NLvT3oeY9D1vWhjszh5tsENswe8db5WeGjNDHNjo6LASgKG3P3Zzxmi1t2Q6eA",
  "key23": "3S8htyAsP2K7Ca32Hng2GdUgwWGUppsDQjHW7VSgySeY9hQQam86JPvdBetSoVQ4aazw1Kbvjnf2n7rBWY3NMF5H",
  "key24": "44B2tWnAWQxLLJzZNMs73wr3tbGMugJWkBuwUBX6k5ZeFazBKRuv8TtBUi3ws6tirww3dH9aVbNaWcraU1yjYkfR"
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
