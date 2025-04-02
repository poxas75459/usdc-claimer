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
    "nyZMxHq1JSkBShZXB8UQmwGFBjv3KjbKUh8Fo9LG5evDzriRj8HL4WVLreMxbEs3hFTSd2sMBP4ndsjuMxiiLBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xxyr7DduwyjqphtyQam6hnhWTvMhJnNBSdHjUmGieiavCvx6BVhv6PTtnY2UVM73PYPkZVqAtwvig2ZZtQ7xZDP",
  "key1": "5wY3PiAfgphGQxV8pyjjKZ3nt9YHMXjK2fZq8vjQWTJY1XTPYTT8GFfJoYzUJKDwo82G8f65RiY93iZGbSRg2d7m",
  "key2": "2WWMQ8R7bZoJuDm2dCtdT8zwTfY2qyYUwAgbDQ4nXixLgN5zSLH5giZkdr4h32ML9imspz8s64ArJ17oNDwAcdrW",
  "key3": "618qXwsgVmE5qSc4CnPGECcgH6sytuf3h8XNEXtEbVQHexoz2jjuw7nwpXzwD4UPSBZ3uk9MmUdm68t9U7YEssy3",
  "key4": "5gCRvdDLfAkstgsLbEYeHdi9zBbTNZbmh1soHPiVvr6rCFc5sTbM7pWQ8bAuqGnrLiX458Prtyp2aXJTZmYaSgew",
  "key5": "5jpot4jXb3YbDcDVxej75Q5hKQVNigLaY2U3pd5yEJ2zFodRJBLQzJN9hq4QH3N7YCPix6cAggLE85fvz8ZrUChg",
  "key6": "2JXMi76JwvYaKFxJZaA4NjsSBdG5Zjyr32tUyb28kCMVcZ2EUaePGYySMHoaWwG5DCKLASBUbs6kK2KDt6uw7VnM",
  "key7": "2oEbk9cDwY1aNR8M1wsYCyGy8VLzyVEfK1HPeCag6bAKyG4x1ouih5WTJmy4ZYq8KhkTi8EVMGGyGxw3RnfmAyLo",
  "key8": "4aitPowzucpVQPqUf1wx4hkNAPjAVxeV8aejWfmarUxnasBpa23pGQsqkeYhTJ7pmQUVMYPxhQNQMCMA88Vk3Kh3",
  "key9": "5znBDUSnVg32YGSFzzKh6ViFdP43eqgSD6uLVM3At2jhoWwEnzNUBREavEgAct1weazE4BFsmAgrdJh5YYMarQ6z",
  "key10": "2uKyZpT5srh9bThWmH6sY82wTSwcD1PwetbuXW5yQeUVrJ7jqKKDrm5NEsiiCD3oQobtvCpXXcxmq4SaAosFJUb1",
  "key11": "5LyFBcK7YRS5SWc3ckxajq8GGaP9UcmVGX2VvMSQxuPcr5LDv4VpsAvgLXLm3mxfHSUu9Gpmn5Yhb5ijRq578SRL",
  "key12": "5fKotBH4kVdTn6fEpyfbMhyVKvsBbEUYXZceuh8ouvffSgJVCpQBDpcAcYghapPENj2WwjKAzExQWms26LuRuwPa",
  "key13": "3rXeiF2ZrhjsqDNVFWLtpX4WpwosBs2WHfmdpjwQvBQfzbJeYX1eekARuLRFQsLu2JdGtmVzhfjFxHPNrxiXMjk4",
  "key14": "3vidymXV3xcgwbnJEsf6WgJFh5Uphv8L3am3ebYEuSRmHKRMjZguFx9a7JMMrd4azGP1KZ2RE252QQQbPzmTW6K9",
  "key15": "GM5KHEfafRpVMQtrf3ZCXLzrkWaWTx6cue8Wk5TugtiT9MzHBubGQrcuvcEBkAGsNN8vxDq8DJSRzXefutr6bVv",
  "key16": "cs4SWYqvkZV8bMSXJjtcYnyVhzLgcc6tmtfnBy5uvRJVkYzRdwbAbjXHuvLAraJvyZXCB78ZPjmx4ZzRcqbEa3H",
  "key17": "dbHeGvJX1Ps2AGfsgTWcVvxhFu7Cj4akakKVZmaCE95qC7BF9ceGLLF5iK1hG9BEWsKdkTgdzTVCUk8B7egP2oU",
  "key18": "5T41UK5hHR6m72NZS1x6aS2ddcd62KszrxPgV9D3t4pAZ2eMcP2MJDNmsjQZ1Mv2m9RcknQmHXqPAmueRosLUmBL",
  "key19": "3Cv1yDfyz9Qmqdrz7eoCxkXHqaYHTSerzJP88gTST2QEyZ5doHCJJZUmofm6bRaKKan2FRXtwhBzpWpd4R8AfCc4",
  "key20": "4YGks1zrHxmMxBmYu3tFgCWT9BqvE5jhE1ZpnFhpzPUwXTqF8AgKLd3mxNACsw9rFT8sEDn8ABbvT4quE3aZpysg",
  "key21": "4yzde7JCLB52M2de5KgxqXvkz6VNUCU7HyGK2P5f1dB8goERgYS5v3Sao1McyTx6Ho1UwP5voSCGBX69NrDvdwhZ",
  "key22": "2RhJRuHgMoVxrUsi7onxV9ijg4sLhH1bjcMbVyyaAd7q6T3rXVrtPzuECwt7itw76HtT4WvM2ofqCttNpfHAx2gE",
  "key23": "59NPYEtfTsuQb2E8JCKSud64QH1Dbgrg3hHPsVHw2qMBnVB2ppHePMq9gcNa8aqhmiVNRFJiXwDcv9DB5HMk6nzt",
  "key24": "4xbscZhiWnZQotZdgQFqyJaUUC5QaSmXi4Ffhgo4YvFHsXuXyNAdnQfBKexUTA5CvjBiSruFs2R8wV75QWLsVxdN",
  "key25": "4b6RUxJAZ1Znrd3JjzE8AGrTpi7TndZkisgx4titpb4h3xyejt4rdG6gfBkezsHvhrH4wg8xz6sjLDWu8H8cqaRG",
  "key26": "2yyGfVTZTCxZLL8LNQhzAM3oefzDfo2eLGSXhPwkjgxdwa4N1aag3dzEwhgwt4UMBu8vk6iJYWiAckboDRM721CM",
  "key27": "5B7FgqdHKFA7gdTxgLUknUSXKiMGbKmrMAoe4FM2mW3AkHYdcvWUCYVouuXWMFjMzxaKfQ98ZSzZs8cDHjy2cYcc",
  "key28": "3zGfqJ3arYuQ4yBDyHjUe1kj4ar3Q6fJXHcT7PXxVPKviU8T7uri3ywgQU7YCfSq33Kr2NBgwXQHhcuNivtuhdxD",
  "key29": "2WcM5KHPFUM8Sjac28Va1f53yfRbvqtdCMgC8AhHgLv3hvDW3SgAmANUUUAV5s3mnSKGsBw4u7eZrqhm6NdqdqBp",
  "key30": "55bLHFmytoQRtHk4m8VTJiatpv7kD8YUwdc2PJgzFaDrcscV1PCsuP2YTJgQEzgdTBxuFc6t1nzijwbFHTVjP8J1",
  "key31": "5cRkz9T6PgA6PkdA6Fr3KQBdcsvGsF7r5BZguLxmKxo6E5j24KuWqH5CHV7EZYHqDGFGpscvFBpVd4gP7HEvvdKT",
  "key32": "3PSkE4kXczQrLQs1xmEFTG7fr715qJ7B7HMMojGUcwEh7PhJCLCZaYLc8F9A9XyYQFY4ZCHUyD29wKfkbnLZbd4A",
  "key33": "4XF1TyF4Y6M3GzE4pAhdSgxPLojrPyzENkjw6dEqmVduMHrndxHsKztCXkCtJg3KGkKUqEYyhYdG9gDaRJVZtccd",
  "key34": "5zzkAvdUD9Zwt6DY8RJCpd5LWzRuGi66v3sxqojWSiFB6htdx1QuLMfJSHZs99T8qY8KvG9EgSEVm2qtpchhbUBR",
  "key35": "4ngFF8sBE8hUT8BdYTpNoxBEFsmbMpBSbgeZicrSJnCS4WfT7CZgYxnUL9SDPdxqi7BbsFvWvRjsvERsoTQJemA",
  "key36": "2g9kLoPjyQSQ4fa7s2CHgo54WCimLCz5mDa2n8siBeBeu2njrMxoGHPVtd2A879LTCxPsCZocs1y8Mo9g2eYw9La",
  "key37": "2r4qPgyZM77LvVKAEseuyJYyNxx5QmC7hf4B7SU74KCRTx3PbiChMTkovCnm1x7EyNYMWS5b9daWeZZY4k2JvcX5",
  "key38": "1vrECmUupjo4ZDMaFfX5UyFaq8cPjmRA6LFmypjfBjoXfLaabfDcWeLmgUcanbunxiW3ueT9QsWjk92rMya5QeJ",
  "key39": "3JPsSRBn4Bu3g6Q2ifNGxzrbUGHjLRxQZCF6W5soTgikHkywuCarwfB1LmLxw9n99S7JWmHBaPr592kD3eUEHr4e",
  "key40": "2AhUqMywE6YugEuSiAX8q35jUHPkrxV5cPQWWGYjNEWuQgH1eNzLKwtixGStqAcvZBxU56C2ZcPPWLgEq4at45sP",
  "key41": "3nAz1nEdttCXFf9Q1bvy151amMQqpEoJW3iS935VjkRec2RtYiW71mGpMnnPhJ4uUUxubjz7KFfP8pUVEqRM2bPf",
  "key42": "4M86oZpHP1HwwrzPhWkojschZBhTQnz1LQz2uAwSYwtm3E8baasoFvCvb1CjHAi2SD1pe1ba3cjCA2WgSQfwRAMA",
  "key43": "33qv85BUp8vZfwFLQB1WdqoQGYpCkXHmt7Di5KRQ7WFgLQYB9kMvrrtSNq3w9JwHST5yMuCJMUoTZBj6idDQuSZb",
  "key44": "sBRKTyD41vJBJGawVcXW6oHk5Hs17Kx9gwafsJW5dmsvSFyguqaMNhW4Hu898vjwLPptiyVf131pysoGAWAFCim",
  "key45": "3LmJzfHuKQiJdRzhXMz8ZmqmqDuwvLTfKyMWM98aHEzsqi9JXWmpt5WgDiKgYHFkWutfFfjKqfaK7mJr19cKQowL"
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
