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
    "4HhnyKCeNGE4px9FQx3LnVVubBbPqKireGmKnBSVuMwFwMBpf5N2a7ZLBbckH9AqumsmJ4pPjsJbRAFxBf1ZQxFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JBXpsSezvHi1MTCiD6axS7Sz4uik2bnNdFm2G4FVVj4ZUhPfq3V5afb76RUhxnoM7MwPpbJKzM5zhrSCg8vgt2W",
  "key1": "e5W8ebh5aACx3BFh6npEcrUcXEQ38dvLyS8zbbhTrEvu4KpnFZBDSLsf41shSeneqzqMMREu9m4mpMUTsW6biJP",
  "key2": "3KyqLVaZPcJRTSX2w3oD1uttsop9YzgY16fFFsvh4TEwoTq76nPpvM6odndyZgrUr86fztUvcj4hL1hi5F1hbBoi",
  "key3": "5bxmrEQifCVVGT6r2TQFGAphNaT9dgNxwQMQAseU83G4ShZopaxahW8dDncDUbZgnp52ahvfy1NgeXRSmpeedDgc",
  "key4": "5nmEA8AmyTuZh8ViQrvCcfhxBuQK6RdTLDb2rD4Qvnkq4c95MF8WYwKxbYcNAQ327c5osKewJyNaXkRsAwT28Uja",
  "key5": "67mFMtMWTUNtfHxCQgk5vyHXnHBXeaGzTd8Lxj1AKX4AigkrJy3navyytcEJrJFZDuWDFGnUrLivxp4tdio8P8U3",
  "key6": "2kbQJZ1FuZXt8dMSRBp97vddEcK7qbpNCecPNiAhh8EjjXKmDm9xXnsr3HNXCKRFnMPdWvBFY7z8Wocrw7BF7wh4",
  "key7": "3vPiCBAo9NWFFJJXrxCigPzTELQJv1ZrZEWmWuZLU34ohLqW9apcQqrrjQCyXC7RHJ6zni5tnkSJSCeYoQM5gM1X",
  "key8": "bbZaYRLE6LcTVMYC9HZ3urrDhNSMtQhnxPgHpvEEow2KGvMoxdzX1VB2uD9FGojyD9mmXs9jqL4WX39geRfduKa",
  "key9": "sVUdvh6X7PNygGKHs3pBVr9tGATCtLwiqY5krahRWFnCoyXrek2htj4Ac5pctsVU3JBFTHyB621ELsEA7KA5tPS",
  "key10": "JRXniVvJ5Ev23tkEaJXJAZ8dc635FGAUfaqxhRhAYa1ShbbYHemUngeFrncjKWLVaKWTdB6xQUzVtMMnJ2ckC9e",
  "key11": "4BUdEsow4HKTe7FKaCZatMpcM4Z6UjtPVD5FxSm1jHKv7pxm49bAZ2fb991okVS2wTGrZwgE2TeMPf6iL8UM9Lsi",
  "key12": "QkZkvtkjEXwtTpR9mwrxj3uLtvKz3sWMV2LKZcRYWAsRHLwmT88zcrnBzo5FFmYqj9D1F8DB5bYtR1c2A37b3by",
  "key13": "4Kmoy9oBLxETwTvAx6M5xSi5tgthPoqBRA5BPnGyJBYkRfYWT2q6ELsTyHBmQhdFSiYbeA8tx79ViNoK9KWFVe8t",
  "key14": "reT1LNJoBE9zx1fbcZfNHoLGgqLt6PxNe1i3wYTxAhCzEQ5mEeHpnAULoZECUsUdAmEeE1mzQPjecE7BsztfQsA",
  "key15": "439UPwtyZYDPyXXzNkPQj5BLErJqM3d35v7jQ7Pgpy38fGwhsH7JGt7Wwh3WJjhE3JbVGrC7mCzg6RQKTjsixYRx",
  "key16": "4bUDRBursRGnbqQjnGxqvbe7MTPjKPyHvHftSujYU4iuhSuwN3BJhTePbT8gKUi3TFqNk5hTYkfAJ17daoHCCfPv",
  "key17": "31EqMEYmTMChcxr9pp8hjSL1wvveb58KEUTJhmcqn2AGA27JQ3GT9VAPTFxKGGDpnyEkBMjZU71rh2PNahGvzphB",
  "key18": "5ahC6D6h84dpM4SMkpiqDpQqQfzikxnwjsJP8k4SiFns8HTSYJTxSc6pHErgfT1WKnmHhAxdVX5uNdCkJxNkKSMG",
  "key19": "2sRv3byBJwGWhjo1R9x7Hc8DLx5UVhTjyC1f4qB2K8yNpFYtEWjWZAnr51iMDaYkgJUhizzavku1JoxpnwZowfYj",
  "key20": "5SDxpzUAemeuf8HG6NYaBz8ZH4KFf8nqEEDEbGMgFvJLeYM42xfwXdLYm4DCZeAk6HvWSM65Fef6ruGyK6VidTVG",
  "key21": "5jrgnK1EiceHDgu7YnoBQotKqwV3sV5XMJR2P6jD34qaswv5G7FgRttwiJ3x8cGb3ubuXRDtaCHBr5dKNbZ7aei1",
  "key22": "5jFFt1woCtkrfS5nV4aL9oEPi32huow2MGYa7hYmnZcoNFhkyLeyNAzsNz2msBxG3Xjrjcm3NA6FTD78c86Q3zW",
  "key23": "3Ravffc6rmwkK6vvbvJY9qHr7goaaHTWjgCCHkhhZdHKCGmAAtPVG8zxKeFaCDibPnHpfTP5J6JSb9aj793EGtD",
  "key24": "4khLVuqKLxiPpSxjqhEFbNGQwh2yF9iZ5wewY9Wj5J3Sm9mX5YtvxdMsoXRA7HdmbuBs4vtonYySJX4g6JCNRxWQ",
  "key25": "5Su5omqtaMYjY3L5ccS9wbtdRXBo4YRAPZ5ZLoyPit33txXvG8tss6yzgfb58EgaK9p7EJBZWkTRAHqGbo5vDXYo",
  "key26": "3SBEgtXbZENVpPu2Ro6xtpmJZzLsL23PaEebPRy9vvytTkx3DnmxFpG68L663oamPEh4sf3KXEyLBMR4oB4KMNzj",
  "key27": "4LoPgztM4t7H7GBrDbZQYsUP28VkUijypEAosmwucVj7T9BVm3ECW64jKwzHJFcs8yeLD5fTY8VE5Xqct1CKPTmu",
  "key28": "23kFYfjP3o9GWMxeMXWhvJxnFD7F3U3PJLcxqt3BpVnYZp4dLng9DoZ1Md9m9W6vFpF5j3y7hr8MLUMBzTE9vBRu",
  "key29": "EtKeJB3TyAhFEESPyVzaJLaPre9D1TSfbnG9P8hymhoyby7prJrQj2i6bY1bsyWWTYH1TcQxnrK6HcEArPH11qt",
  "key30": "2NLimdaQXd8rfSf5Exqo9BRjWsVQ4rCPZfUsPcj7Q4GkDY2RDCMNKTA1ESFPsZftufk4roa3zCVz61MMJMHDYcfz",
  "key31": "MQ27FuQPS7EFAMgqvV7dAGCUoKmZ295Q3ir3ZCCx4EXbsHLUMpYVyhBWZE6sJdCt7WTMGtL3nLkG4BEquXKfHEe",
  "key32": "2FMw45ZtLegg7ah2Cx83K2zN4d2E5BVSKr6QUPvroSCecApMdz4Kx5ye2oux4ANcYpo4P2jemCWarAKvPHdJxumw",
  "key33": "5tfZ2bgC2LLnhPUEyGkM3k5giiGLH4UoGCr9h5g3hNVR1dYYo7m85CvGZLcurpu1QCm1iRtLKbddSJMv1GHJBmqZ",
  "key34": "2KFEPcoVJo7jRZDxVHmdBsuuYGAEdSHAfM7BcT45rRWcuWN9bzQPEjwwKXjqzCDsT8X1ZwESgfEqWogQuN7uyofr",
  "key35": "bNxEHdN8hiD7xdZnKNzUiTuQMaFmd8ZZHqYawbWwHp12xua1skzoRCfmPCeig2jV4DY7h4cyGV77HnsdYganF35",
  "key36": "2cVoomSq511hMGMiyMCsD6BLyZCkF2it7LfyEeZ96Q7gWkgWpKvbER5Ba49cZexxgf3VFhnVd8TaWT3QK1KsyDLT",
  "key37": "4XX99W4qJkDnDNQob9FDXQkyUQt255uupxEtXaJr3gmWaky5QGaNEh5ybdND8wiimLRfaofGPs5a7ShTSTzpZPjy",
  "key38": "3z2iFYtwCgZMSmohU1yRhkxAaswQc2mejp91uN4VDiwNPZ9ye32TFQ9dmShEHVKdY3sjYnhyXWvp67TeUjmkuW9C",
  "key39": "3NWcS7KsuAgcuDHsEmdLENGrEqVJfSKwG3S87B6vtaa94GnmJBW692UsuAod2ypyyMCB6DkFGnALNfrpEHmn5ZRv",
  "key40": "5w3vFQ5QDV2T6jrvcEFKjEmaS3hcJ6XFxbXrWdn1CL5XjjHBEZV91hsuCbJZkHPc3bQEmYDYAD5Rx2KGW5Bzn1wH",
  "key41": "6288AK39Y71VNt2j776oJqGGkGjXKkmto3YTQ1wQfuQMa9yr8nCoTsjC4WWaWRtTqNitiaSKjrouHV84QGCTdf7j",
  "key42": "2H4FiNSxPYbwXGqdksbzN3kGuJ3s4tWJonLdCyeiEmG6qKXGjk86j2Ak7nqwwC4cJ13CrjJkeHbbVoJ8iKa1wV9L"
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
