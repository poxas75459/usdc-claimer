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
    "4JmM71FP8TEGQf8pB1Lvw37H7qWRsDZjHts49kPiQwZSwM3gDSmxLLZsfMhQvdD1yjV9ocktL4gGkUWXt6znuCo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JNTYQNKsDm4K3aaaFoZAo8dHSJJR9qyfxZFQ6rnyi6hu5eTGqA2T4Cc8x4tVcExoACCEAJ7pRKnyr9x3svSSkoh",
  "key1": "3BpPKqm28Uy2QqdjzES3cYdy1Lpu3WfUCZDpkFo6F54kjKm997xuXQn1YnEA46JteJjkw8gg35uoBqSbeRgKBJAe",
  "key2": "2aLRne8LhDFZjE9oeTWdEQ54xPHJwA1nsHQBGqg33ap53A4VyyPsW6WcERBpGQzXBC5vKorAx1szezZX4AbXZdif",
  "key3": "2f7s7sDSPEy5qzUtUkppifnqXkvJ1D5n92fKzRJ99BXAbCBLZLHk8ShptomVMpG3KHKGZVxADqGL7BPLcfgjPbst",
  "key4": "59t8oQAhTV7TtfRhezqNLJydq3ibVnWNLGgR2dtvkiPKvh9oNXxdGLKKYWZwEYQmVbpZodnJTWo2susPcJ6VSGgG",
  "key5": "2f5LW997EpEp7DNayTAKyYrYjaiX5MZeR3EGmo6YXkFMFpgq4cajnsvBr4h2ammRiteaiN1ap89MKHM3mdYtKPW4",
  "key6": "2rRbAofTEkr5PXSGDQhfmLzqrM7jw1wHKfK6dfVDL8pqGzdZrds64HoTei2cbVWw7E9144P79sMdkXtxhRUC6yf",
  "key7": "3EeY6kLZt6nGu3x1FdfYGA4HimtTVQApDbTRZMSCRzm2iCYdxvmhcv436GCfJB1L5U3c1Ng9QAiS325KV7LF8ZGW",
  "key8": "3KGfNTuDpdjkPj9DUFN9LgKHeyPhHTCzu1AWUtJyqf5UX9e43BJfiVrsfvjVX8r2RueKx9XRNuE7BZ6vVq9ZCKUX",
  "key9": "3voQscnxMEL1wMyV9oBzujLfSU8GwwGLokV6vswUgBDiKV4nNcYsmM5LmEqoLKAZtDJPoBybXMPmTo3fYTPrZDpB",
  "key10": "5y3BXdoB1KuGHHbnGJHqimpuyZF4t3yiWEEpyDFqebtPEom4r5Hs4UoKTw3JEfDb8nFJ6Q3zGvmiztfaQ4e98oJ",
  "key11": "5FCncmLbUEcbMmLptaLjb1Ums2T5jdPQF3rEshCacLX78VmC463DbG1WNbfwkJgi2hE9c2FXQoFf9ec6jjR5NJRH",
  "key12": "4f8vGgLpyVC4oaRM7N3t71yBkoweF7UW7BxyW74PA8vqvaZF4ygYobn6DLBViWBCweAWucq7U6muXGTryoQgjrGs",
  "key13": "41asPVNtAGHRpd8Q8omV95QTikb5e9deFeABRt9QbRbNJRw9wzL4xZEcQJJLS3WmfaMU2WbzxZjeb4GL8WNivysk",
  "key14": "eBkmPeeocFwtjtfWkTv6PGCARAHAuD7V9fsWk9VX9aGcdQvW6S9zc33RUvKeBAquBgsQ82bWiS5TpGnQ6qTNv3w",
  "key15": "2GGsPvrKHBHtSSmJF3ytsHEFvRGEARcfbjMtwKU62Ayut4gGuBnft3xmpkfVjhLXmpNHPscGrGr9SRg8Tz4kZFfL",
  "key16": "22FaFWkZyRHKGhTgy1Ngu3dKktXN3zxPW5JfPeJKFAGYHtZyPdzkDBF5kB4J29PuaHFqSZ1vCcvkNdn68szhVZVs",
  "key17": "27yC9KsDbKafzAZ3F7yi1j2witoJmVWPZvnBnxk5ExdxNNWkme4D9p3Jaz3YAuyySmBPgFad4Rqk6Y7wnjMqrjtR",
  "key18": "4KSAFXF8DnVuZqZXs5nMxUCfpjwS7gN3oMUqYZtetnaB5Nw2VUTq1VJtNszVzF6eeqKBwyKn3TQXXAmXdYC67mmw",
  "key19": "dTVNiMizCFqHZT63ugQgBgcSYhmSYiicz9pekLeFKeG7mNrnyAyPXhnn6zWvf9DdAjqGHp2umNrc6ZyAiiPF986",
  "key20": "3g289GvCgsVVHJJGY8ATRdUGGrWbwN6nsixwe9dWpKqjbpyHfmndsUUgcyUyTUtzUVFaRkEsdRuj6MUJAcBG44jD",
  "key21": "HsApS9X5DJuuvYnUMcKEy7TknW7uRSbWJXrvtjGvHFTMXPSzNwkbeVhXj567Uv3YuAFMN42zMqPX5XFihfcKTky",
  "key22": "5poPoMpQdGtDDNR1Lo3Qm1mvaX14ufRiPsZ8jgoJfDTKS5tP8meonxViy1hiH3av6vWhfjHGTE4h93ABoPz1thVe",
  "key23": "NkKGYLhp4oRtY892FHnenAggmz5grQpQ3uGiAvngrkoBQREAy54CXKuDFCh1zHfuGrhCSX8bynMgVJRZosDLM1j",
  "key24": "4PaY4CJr8gyGm6nij6aAajg5i3MKuuTkMXH8m8iZDaHXx6tadZ3boeKc9M3kjDfdcQaAdoVFLS9MjmPDSaqZVfKi",
  "key25": "QKcEou1GfXCpiAvAa8n6ZGXvrdNxbDqbJXTC2U7MwaQiExcDA3xDgrnBbrN6tuN4Ququn1EJm1xSAU3Ewi5pmpH",
  "key26": "3yf2m7kbMNP7bxpJ2YEDxM7eN6SZ7mAhaEk6Zj7caHzyYPRk9JR6KYqYqbmWZ8ZF7zKeDwTD2UEWgANQhoHi7sJ4",
  "key27": "2xRncmQh69Wo8NfiD6wYW8uoLR3rxPnM5xXxYs8dKXDjaumc4r3Qfmp4hT6mb1ma6o5jS9tqAnE8dQn6xHKNws44",
  "key28": "2osEoUovCN18ji4VcWk7vemLe41PTxEw5GZ2Yde3yz4WNh5wYX2GbdLn2TDXEBY3bCcG7zSksSvtScEHpqhuXWAM",
  "key29": "5BtWjfPb29m8DFkbpQqVJUf8uCA3v5DfmUCdUDSkMUCXdPhEHfxsXUcj9xAFDyMSFXhZrWERzdjKiz1qBQgLJYpb",
  "key30": "oBESukTmxYYTUpSK8R9sgZVK8AzdNHfoq4MCWY1kp3dtExNm6j3Bxchv83J7cwKRLcCV1UprmJupod4Qo9dUbXc",
  "key31": "2k6wcvJEJTe8DLnZFcQQifsqDm3WkhBwsxKRxSVw8grLNSMX3MDyUGKTRXxzxZ6a7p7yvMj2j6UqkPMkHBkm4Cxb",
  "key32": "4oSLZKiQzXRUZH2KL794fL3B2uLQbsyAG5pkbVc63eBwviggrL1BgBqhzKcUBbJggFxmUTZRbv2xzP9bUk7hi4uz",
  "key33": "31a6f71k4FqgViuLRkB5YYi7r4CVEiq9xu3HvgwJUQnzSiWyecPP4J7nsL1HRL9Z21ZM2rpxPHFidYz7deZHnKRb",
  "key34": "1duM58rSKR3wv1PtY37a2SDJPLYi982LQQprq699yYGRCjAGgU8RsnNVbfEj42Z5fJbQHPvnGGuMXEVkfo9otqM",
  "key35": "23gBner1ibhvNGvHgYgjBHvWahTrwU8QW1snApufCx1nAnkmqcmLBWKmGgYshiE19NZCNwBcZJcR6NtReZPXAPkz",
  "key36": "5GtUT2U2bvouYsmAA75nLa7hUwdUdEr7BgZXYsMJNS6VD2Kh3yC11dVYkY767XqGzbvtV3UYdASFJHiGsjGDcvd7",
  "key37": "5kLvUmmrCGVQZFts3BLGo85FGNwL1oxT1gRoDbE8jb19nLwkr6q5kDZvqwo9L7TnG6ymwYYweJgj26dPtNptFKNX",
  "key38": "3Cm9duWLYF6NQ7KR6UwMBjf2rTDyFwCnMiiL2FBjBvVe24ENB74ZNzqPqFUUjsKRrAcZUbApKu6B7RwP4PR7D1vi",
  "key39": "3mcUmrMrNwFuehCMTbq6gwoU7uGY1pVBDbWtz4BpW9t8f2hSt3CCdVdbkFP8bnnmEEvq7o1eWyEhdEYCCM2gnMPg",
  "key40": "2zNAtTnWtgTV1mtDEBGyCDCrWLdfVNXy9DcaHxuWHwFPcdxs3mAJumiKyu7oEmeuVgeFkPewzaiLcUBYJdRtCKJQ",
  "key41": "gaZDZ9xvjyRYynJEjkXEfxMq5fShjmWD6Pjht3TU5ryDRHpcQbjaRcvCAg8MjHxMbW7THFTioC4iGG9XQWsTEag",
  "key42": "3M3rmwKAWttqVert44LkQyrCcsWFDKB456fHAqsf6zS2Cgs6auKgsDqdCbccHfptMtoJD7EyA7BnkRie3GbxEqhz",
  "key43": "47fij829MHysaex2KLN7aWyUyaR43LY94deRVYmRqZ4rbBcJfwuRHBdNsLPVouduZBVwzNCzp2Gcae2dsjgL5Qrx",
  "key44": "31Efk8mvUkL7z4LRr3SqqUh7h7NV535q7Hgec7qjTEXWKgzM8MkgBFgA29GCLFiY3ULfn6a6BuwhCVpikDAJzbth",
  "key45": "64e8YVxrmQUWqLCH2nhXP5UHhA1a21avyUmEWJ4mrYqPoQRcjZCCDqCcFq4RU19K32trEpUUUiXpvy29HMEYnq6z"
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
