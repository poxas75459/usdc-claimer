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
    "5ofXkdsNkPDoCbWVUL5Xh5isEmwY1dEkr1sidGuUnJVAnu9SGtASF1LeFdsep3aTrz7t9w46FJcqHvApK59LGC3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UQLAR8FfZDaq3LXPUefENmw1u6hu7PGw88AwSqgKQk6zY4bwUUiqrvvUnEe1oNc4j7fhGxpLS9848nwpcGvNSZQ",
  "key1": "gmyMUXnEoWztCRFbppiPKP5rtnja43aVMJMPGPgpQFCnpNxho2Kn2Sj9AjUtAsA73G3kQPxa3UawYbFBdbwHpBK",
  "key2": "3khhvB8rpuz8g9AFJdpB5nmbtuxhTkvVsxjoeaNUBuLT9fCgnzEK7oPXbny2mAihcRH5C81NGivt1patPS3y2rSs",
  "key3": "3wYPJYfHCnLZmPAR1ktYXWYaLY5XKVaAaCpQmu4QWWxseqnrhQ2bN63U7Aq6qocLaDiboWzFNK6airgzFvCqAcGX",
  "key4": "3NwKNNgF4TUoiQVPFV3MakzAeULHd78nVfBYf6g1UYCNKgWpXTw7cex2dfs9VXY9KrA9m2uZf6Mo7uSrgFWvUyFe",
  "key5": "9ddfmdnWsNAjJGyCX5KCmSqwpB8a27V9jBQSJUn9JXmriZ7yA2VkQgK941s8Hsgf3mpQAxMBL2WxMuhxaiFLqKX",
  "key6": "48j9stswMowtoTR9nFHW3FMkbpGrbREHHgEwDkXMBsLefWWrtY7YAiSQyvuhwnnMoJpX1CUqEXBumFqvabcAwpbG",
  "key7": "4n4C4avEn2qk2ZBDTFZ698iKRNfonJm4K5EsPzzC1zdcML9wym8mQAuGEG3YiPewR7KgLYE1E3zodXKYxhQJLV1M",
  "key8": "31hBhi2ZcUpQV9F3mxRVFmZTnkuDQ5NY8dGQoKtJor3JnKQRvLnSWLCKzauJRvSVfzCa6yJevpi4WoFBQGNj8Vns",
  "key9": "63QJDfHcNGkswTvLvrYFVsMY3mTyFtUJPf1zs8pdXAWkD4B2horL4bNL8CMEZQ6R2JiwTRKx8hY7unwFuor9t6pB",
  "key10": "5LTWxDjrPs3aXNmXZcpb7L9UMhbgT5F6rqNtA8BUwioeHDYwqppgX1nBnJWbcLXZ8eVB6G6jvHxM4mz1CyAQD2hi",
  "key11": "5p3kcTNEsNnYVQkQZryZ4VTqeEverPPFYPBHZgYJe6peL6RF8t7PYsDgHYkDQAtfoLFbV2rkvgCd1k3dprX6FFrz",
  "key12": "btA2i4DhtoP13SMopHhJQVVeFg939iCnkqWgQKpVfw8bvDjsbqQ5U3sdYM8DJ3agwcxtsnJ1DXuzLA5vtYhHWxy",
  "key13": "CEuqpewb1XXF9rrsz1DCUQfRRt51k3JhdgWHiGUGLiys5nmEd7eRYHD1vGf2mugXAWKrbPWbHg9Ud5XLLMLW8si",
  "key14": "5hpHnMXapjMN42rb91boLrKUoHNYvUkQRrWHSigGGF7bPSnN7VwrUf6FnRxW5bmS5NQyXKLv1cvAbnHZJ6ZWBMDw",
  "key15": "4qDSiwXFoo4RuzDuRJRtth1JLJtB25CDfEtyMz1kauX3gqf5Cbxwo41nvHWCWHraZCtxccv2sxaALzXoLuqwGZYe",
  "key16": "4mtTAaY6XusCEkJTNZppdS1czvgsjGX5rZr2BgRn9cngxh65Sbo48XRJvu4uDF3uCQNQeqhvFj21Ut4NUJTYfBY4",
  "key17": "5vKaPQeNSUH8j5kHoT94sxDQN6aNLSbK3duBJKXxs6u6MzKmAk3ogN2j1k6TFjxMnfi42D5p4L7QVEMptZDPkwCT",
  "key18": "3JBPezHtEwzMXNyz3RuaiR5vEeCFAqhdzk1nZ922rdjSLsqmEektmdgo392ApdBWN68Mt5rFq6izV7QbHSexLgVi",
  "key19": "2rYi5tZasZnd9zyeJ9nyptQE6gJ99ryBz8JV66xPFrgvxJLoXYirFhqumEnGWUGDcM2ECUGoyZVqYMGroNVUmyLT",
  "key20": "4eUNuEsXTvvVs9XvG8qrTjfYrv1EhbuVmBRnXbfKb7oXXya73opeFPm9L6eDA2Pjz7v46d5TZiDoS9HA6ZBQCHKG",
  "key21": "Bd6Jg4t6JpjKdFfsej7NBadt2v5a68H2WBqUeyoahxArykfkRYfy2NFkoXMyE4GqPXSBJ5SXsFeaNWcCNUZxpJK",
  "key22": "2MWMLw4v8dzCZYuQSJWMWWJ1A8QVJJVqoPbk86qeJjreJXRGKqgnKq1gaUW6DeGaneMR4LcVyjsvhWdkgay1sBsC",
  "key23": "3M4jWRnvjNuLdzBtKQeK6bGEpCFu8BCkSK2htf9JrUiB7ScZuhbo3T9snT6wHdKMvmnf4L7rMUUh8kL4o4eorwAZ",
  "key24": "5TtVZ8P4jX8yAsnqfwSe6quWgdv3R9awN6y8JU8qhWNYNwrWVHpR2mFWTTXDM9Dtju2FHoytCPz5zutJBU7nAXFy",
  "key25": "5VJ6GB5iMph51oUFXbUXaepsAgmUywBh9rSNN9TzaVcVdL1wJEGQ9rfQVhgDJs9skcYiQHZWpshvd3Phts2kFRBZ",
  "key26": "HQ4DrmGGzK6VjsmdkVATfAswydrWXvPeAFw4D4DzsBdr9RjPLjhgpc4JBfmcuPx2fnCSUwPQZXmYaARkATR2KU1",
  "key27": "5Xm2b5h6YKaYrksbuaKqnBDQfAhhSLrhkWW1SVj9qcLVRnPXcqitRnpy5NfkPn2X5KbTbQjMdzkmM1sC2KhpTjtQ",
  "key28": "58rzJhiR8y9bAKKVPDDcEtPp6au9qqiE2cGjVZicGkbmjgVWJ1waDFNhcvcKXqGSKu5meagk4VmSwpTtZG7bPprP"
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
