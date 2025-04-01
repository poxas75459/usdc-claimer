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
    "4dkdqVwBqwnwp6NL38jCk3Ui2kBM3YM8fAa7HQ5dNexfCc7pbXNT5h3KfYoTGNnW5npuXwyrDpmmdrR7HfSv8ojN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uKzjX8EhzdGbvCyzZCbGGZYrMQSdA6pXyoG8WTmT3PGQ9ZQgssuovmk8YLiwLD4zFLKzjE6cto7ATHrMjZ3szZ9",
  "key1": "4jMayVvioA683MXcBQH9aMtdnHy2g53KrbDZybrBGTv8EHEEUCuk55B9ztPtxDZKMV1meGY6GAaAyrvwEhosEY4Z",
  "key2": "BYojtfxZ391xSVg92fh5eCYzzUWtBv8uUyh2ZA1R61U13DaQZHdz5ZWZhn967tjrXAMKNF1foTfo2Tbv6NqwsEc",
  "key3": "21HhKni73KXGREPg6ZuCzj44MYJH9EPeDdhcHPTEmjhWWRTxQFraSvVB9bwTosR9uy1Jmx5JDy9YLPcKFrFumRbh",
  "key4": "3b9VkJyB711xWBaBpbgfWpzotgyzsxqCghn6eoyd7iPGpZKABo6VBGnKgYNmCPckfcobfhaSMqykfjb6PYiLsJBm",
  "key5": "xm54Zvr1CyHrBw9mjkk9NwBhta7MjhiKBzPKVgRCMhAFpsUs4YBeLRvh4tTPmho8Po2KVjR2ugP5Z8iGcfNsRqX",
  "key6": "2YDtbcZw9Fp9fJCdUz5KHJuncjGB9JssKJynKfLAdnKxZJcimqTXaoLMWuFEmNMcYg8Gy9BduQgZfJd1g7NKCrME",
  "key7": "xUXTvtNUbnJt5xG5sPEMiMYyNmEhoZdRTBPPSuWEHXaJLJVzCcBCiEmDCUkz5jzWhXvu6y9R3pQAELQJ5mnfjji",
  "key8": "4ka5rdfN9BNFx97Dy3eDiTK3LFHSXeR4CyzLRXd67B4JCUZg2SRJ4ptgMC1GnBzWi5uscsDooojDBcfvkTyLnD1f",
  "key9": "H7qd5DAa4moGVsgAPMAKnsxPh4DcV57WDL9thzfUvmFssaYpX7nwj7FnbACu8Rkg3KrF4tte4uwpRVdmBfNugJv",
  "key10": "5VjEanuYs6NniRbK93dqHcXKrHW8oVyBFFsvzGzv39wMVU6SGVoVMtSupcxczcjwuiZXrHxR8gQogFU9DobiGj8a",
  "key11": "5N67ctHSEYxgwkYYp7F7ukYTWvEAK4wxPewybU3svyGgL9kbM79bHwwj4SydMEzKoaPSMEsCaG1wh3Hodky8UFpA",
  "key12": "5ywpu63WM27iezAnUZvTKkMu6GgNynRwjtX3fkvKDeWeA18XWg3sBEqGdCosN2XFpCzPeEx8ELdPjERc3Bfn5C5v",
  "key13": "5GK5QrZ4AhwGHjMawFSdtFMUSNbsMWeyhqdH1RaebK8WUqJuUsM71ddMAKzRjaBGdjS8ZnHkpdYhdqQa5RU9msoR",
  "key14": "3vM3rbm9HPZ3YFKRhYorNbUWVvdSkT3GSybfooK9vbNmBtgUtw4twghHMXFeuAbDjY4bgDYe5NKhoeGx84ukuqts",
  "key15": "4AKE9ikZYZ1SApNrbmmjJ86vv9iixtTZC6MynGoAhuMh41Hoo1KKZUS5xVFNUJ9hgqcaF8kykzLgaHxaV16M17Jd",
  "key16": "5ViyLo4Z5UUPoz3yFbzDG6QYv4d7LpH9BLKkVy668RSfmqYfNGqx9erexhD1Q693o6pkfZesPUw3ELuPrTGSbtiH",
  "key17": "5yaCXCU4ieMv1Z5Q2Rrjt5zBBALeojxL3aKTPh6Vg8aso5i435WuTA185gWtdvFkLiNe8sVbhfKoWjkPmTFmJyNS",
  "key18": "7v5gJdbASpZbQSGW33g39VrqxR1oQZqJkJay1KeZEApb7SpZLYoR7hfS6NBUStrearVG7zCQfyXsdCov6hYFdrJ",
  "key19": "27MMPt7H7CtJNqWnvFHRNmVWQ3NPDaK52iW2sNMBWPmfm3SGGKQQwi6kS4dLsWibS8mLKPtTBUJfM4VfLpCTiVXd",
  "key20": "2itfx2PQ2mVZLVRmnePFGTue8tMkeAntYPeUJ9axo9qaZJD6wotRymrVJ7HQyMmJcMe6Ziop3zJUEuS9q6941efy",
  "key21": "4pJiJ6bq78BpE1iqJPkN1AJzgV5D5Gbcdp8gwaXseob9tjsC6ANrKAok4GkrMWivi69WDvMahKR8mfmvhMjyqrrj",
  "key22": "2pjnWN1gFSQST3ytkeHenjEUtvWDNod5W94hzjE66RA6URJa6DW17KF8zS8mEnsajc2MYW8h9EgzF2eXjTt5Bnxh",
  "key23": "4wYLTJMkeSph2CES88ZiAptaLdE5FZp6et7pnCtERjs6kTudqYR23gxk3bq63D76YPQFeko1D9wuTd6wavi9fRTt",
  "key24": "3DaNKaNURMFZRn9Ujhp5ytQo7FhmfED7uCpTL2hjqssBbbERwxgp11j8RjRe2MXog3aZ3JMA5nzrafZQrFiBTUZV"
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
