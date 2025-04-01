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
    "bo4KT9hiov8StP4fjFfZPZzmbnT6kUCiBTgjsx9sV6aNLUBAEZp1DEyJUFvgwtPEddkzUV2VSLhHkK2rY4HeoZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cWZ1qbsgGx4LvSdvmSmnfd8UAGHcVTUw9fqFoL3sapkk56dghExN3mMmt1Qg1uL35ssAJZkTRHWd7YUpNZ4yxK3",
  "key1": "3Trvha9zKm7ENyazr3GjEbg3T5USuT6jPmUKDwnQ3yVoxFExiUdpkDYbxw6E6gYWE9Q15Pc933okwRLB93R5z2Fp",
  "key2": "2cBpTpS7GHenGjvN1gEnCcZ3WuXKUZxAqMAaShoRetxuocoYA8wP2Xcx4oYBK1rDSHxrB7qaVEUJ7yapVXGdjTPH",
  "key3": "2YoapGYTS2dKJ2yc8KRKHEmypJReMqXuuhmUd8GLv4ZyYNEzMoHw9UcZttj9eWka6jeQPyHstyWE7LVTkdSyzwpo",
  "key4": "2tbpbkXBU59Wd8ArZ5gPvQaemjU4UBcZFZubQhUMt2UDi4iqLbxbhHXJwu35ux87ZEbupcns43wTd89SBQpp7qeh",
  "key5": "3FNz8shmUaBViNw4uGoYpoC4yvCVAvHX8Z74gjWDzk7RM9vZjvYSzvyGZVNQYXnGJnsyr8kXtmByeC138LTZovHw",
  "key6": "3wnBKUiCSCXm8mgAzUYke9hCVvsCNbp5gE5EYkuZ9xRnGQfUVsAsLyX5QRxoVfTA1aG5JQCNZkKUF6rzrVvNEzkz",
  "key7": "5PFdBgwpNB6wp1gdpqX2xX6Rw2DfrtbChWemMyLX6hAGWasggJwiaxcN56pgKTGAGSUJb3LxaAwKwUG7cGw7RXzH",
  "key8": "62xC5TH5itgPcVPT1wUgqSQRpDr7aS77vyHRyWHpQWq1ABSJaYBBACyftuuGb5SaG63WxFWe3d8dBpLzow1uCtRy",
  "key9": "5bpUmy2q2HXhDJkJX2FPwbqLn5CRfu4PoSATK6NaKZx1xizJqL7x7L91RqGFizAHdHKRV8D1hfXmrmVWmjpZnfdk",
  "key10": "7LmvMRbjH9UDqGDpMxJGjHjo7DP3Tw5vpd2fjp7B7H5bbrHQdZvVBed8NGtTFg4Eb824xX8YAs5MhS7E5z9qdwH",
  "key11": "5Y5rMV7TzXyfX3trsPyYAi5fVNGcdUdnjqWGcgkxtpUjdRScQB7QxyHy83dn5TKu56yM5GhX7qyaEgfycmixFevP",
  "key12": "4TXmuSyASQ94VYgPvK9dsdtFYmkpJqpitzPLiHppvaj1ULsAUoBWcoDyvX8Kswc7AiXFmCar8SJtJBZDkYoBtZC9",
  "key13": "fiMmTzZH1A5cJivhJTRj1gCttuvb2c29ZESzye5XPs2W2pjibZ9pEexYhCHYwtB48h1UVbXKNn7AnhPnpF43sJ6",
  "key14": "XG2ecun8tfnN42nCJj97YtoGFcVyXfmbP9qfCmnaUMrPmTmU5DetQLQx6U7Q9VYCRf6R44VvWa6rhQ3ixSAPMs9",
  "key15": "HzWduZtgn413UknvKeMNmHyubj1eWMcpoL6CaKJXsRxBrkJAuiWNFrUs7NRWqTzpe51qb778Wi7ZoBjdfstBGSE",
  "key16": "pxe6PF3x3bEG1BNbKYEsCZLgdC5BYPyShZ1UhsNmFj7Wa8HtGnuxcorGq67XRzCXg8W3wp5zcLDoEV4kTNbTkwD",
  "key17": "tzuxsR2BkUtSzG8YrYgAphnGgVzmkAsZo4k74CZguJGiiRbjmKRHJ56ZWWiPKMfZ5Y7rdmTAxuy1PCApCwx4gCD",
  "key18": "5VYhU46ccynToMHUWsLL65cK8K1mpJoWKPevtTWP45qxyo5XUWza9wP74c2qpzVRbKAJcJNoVuxuvm6SGxqccDB6",
  "key19": "28B61tFeg6VsZdMscq3EFQSWtZrgAgTsNQFFy1wBartTqwiofxTxUNCm1jNj1by55XN3xaM2hgsdfht97xRVWkPA",
  "key20": "23xdRALUB8PDuN9bCZLtu9hgK6QHjxeaVPMcNsqb6ffyFdHsP4nUxj26VJ94gCPa4GW9XRoryRgeGuVkBnyvP7Ut",
  "key21": "47tyWEFctHHBdhSh4M6aBytLpVjsEfj7u3CJ4gH56auz2jfFWe11Fpo5NF3q3xFfnmyyXCkmYTGLRq3ajm9N2E4k",
  "key22": "CoYNKvRgasUpSbzqa8ht9uzT6XKnikGmSRSUGwqXENWPW3nTjmXQV9iTGgAFq8sgzwt7Kq9ueu8Zq5y9FLGLshc",
  "key23": "3LTvuDHUPSKa7zoMiciyJVtKVxgUFoMj3C9CgBDuUEaJgNwga9zyXSLFuzDhtNQpARGHHAozgLcAvxsk5nev4Gsh",
  "key24": "4Z28LNsTwdS87D9YtLRrZqhqaPx64zve38jR3gogRejL99K6BJjsQ58d5ZHaKCgPch3K3ughZpUXFHY6r8h1NsH1",
  "key25": "uYJRR8uYYZV12vD2nENqaHFCfAB6ddUy1BChZz8exdTfjYsWVDdM8D3QLQEffV4m4EvJ3EM7xKLMKpX8Xb5Pfoy",
  "key26": "3q88qBq3PnNNYfqgQeRfTh45Xf7WhV32iLRKnQeS1tTZsYSVX3ZgRngthRprBLy1URwSiqPFCys6JC5NfnqPaxDF",
  "key27": "4i5ZbKqfGNH7su2871urYKuvFfDYW87PYAJbsJKKTpc3WqozaJ4nYPoKNpPiZ5inaKuEsVz7k7u8J3Y6BDQbc54r",
  "key28": "2sUxJtf5VJ1djRavSAjzFNXi95wvm4ev5hjbBfFYiqymkjBiMZZ9cXimxZvJEsvA8KfXZJV284CTuGijUFkKFY4A",
  "key29": "5CdbyA392Wt8FuA1MsZMbBmTLGdQjioYD4X7SjeNafcjio53WVK4AfdB8rGALXLwseTVmABsdpWgg1p6BntTYauN",
  "key30": "W8Mv5BYWcsNespbTmbnEQnypTEnUtw4YcdwSyttN8FJYuzYuT5aFNGCJvhv4XAX2V5ytMCABHzqnNhvP6b2ry6r",
  "key31": "5SXmysnhb84xy5p2wgyTqToZJcm9XURQdfGpSxNpDiSwmMexxeb8o5SzNRakGtw442A2MY53LNJHPpaR3j8jPN6T"
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
