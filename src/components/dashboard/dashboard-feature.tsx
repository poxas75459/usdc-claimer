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
    "3YdEhac98cnqYP9J79SEwugihYVysHPk7UKKFAb9mX2eXEJhxYVWBAsu4wwDyK5KzN5AULcsZrbpk95M5CVrKqd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q8cLJeRLn4Rz59PXcYusxnuLbk5Q25fYdZf3k3wJdiT8zEjZPq1KwQQyK6MZRRMCaVxN3W3uCD9d3aidxucsczG",
  "key1": "21rbPjm2EjbpfBjw1FPk66PPra4yep4fZdeSA5mp59ke7G3mEBXpmhPAUBwfmo2EGDn2cNhFxcLBy13EiGcJCUAy",
  "key2": "4V2iCHeMHxu6HmT5ndcft1Y5nHe3Ufx7LfMSKgKPj5VKS6FLN5dQRS8AGmvUjGSLtLD18eqqsGgqFe6SCuT9Fw1G",
  "key3": "61vmiqxrarRMGEaKX1w6Jfd7qBze9zagUfcpjLdG9js7PrwWjguTC1R5jH59PaHiGmhvBU4Ypg7R92CzeJGxAygp",
  "key4": "3i8NwwqgqeYgv5GpnEjsY7FNQgxQRubjSYVVf6m8naraVEUhzqq6ZcLmxgPiZPS8zNMHD5pniVc3wxSf2k48opAf",
  "key5": "rzkMwmafZV6Fcx3MYbbkTdyQXusmeY7SuFCAK7yD6J62k3zEifCXMYExizJMG22x54C3AFNcce9YPavcLqgiT2u",
  "key6": "9Z2iux8Eso8aoUmdwfAy1teHwaECPwHaQweeoRxVBKytt25xBWs1s1vvJp7tbWiQ6oDkRuAb14vS4jkAHtKtkuk",
  "key7": "3LnMzJHcrL4RQSw6u67xnQaXznxCeoU2636q8mAZKf4a4CDw1bZpcEV2kFF4i2JZxJQcxWJCfVfMNJh2zyMt9xkE",
  "key8": "42WXw8P6kNSTaHB5A9aH62BmsXSyeokEizcwkCzvCA8NLmEZLxSqcTX3fdncqzpc5iftai8yuLFsN3NbwRJUKQvj",
  "key9": "WVCXMog23THCK2MibLMeh3oVrYkN3jkaYGHBZS5XAs1vra8R91o3ePyPgFeQTK3FbMPfCDJpRuuRxzCe6oSBbn1",
  "key10": "3N8H2QAj2PSioGqpTnxxSHYipZSbrkn3St6TyuCTigWtjTeRUpCGAXvxQ9whGF84qeczn7C4Auryik7GBxNi3RRn",
  "key11": "AdDskaU7jCpgjzFL7zhheePEEJpGdsBuvSt4KEJXQRcACAXDS1knwvyKMMmPX5TJpPrewrVkxCzmNArh3uAQcbD",
  "key12": "3j1kM5YNQxqX1xm5RBstn3QcbMCV5yMnhtRqXMv5JXdDQD722hJj2Ua7gHoi83Lo46Nujt9afUkam6TeKwtngu6w",
  "key13": "4d4vyx5F2sx1Rn5ymMc2JCGQaZK8ZpCsRMXc8xRz8yy1dYjtNHinmM2fZnzsAoA64VsC8nh81agwRT1TYtYvfn4R",
  "key14": "3r2Yjdkrb7kpfu9cKmuSaXFn9Zr2DVNPddTA9gtoKch1LKPwZHpxY8BGbmQtSzPtoj8rNTM6HnZuAFiC3tQyG3VQ",
  "key15": "4P9VnCruBuPGxvcnDG8hdJaTBGSq4XdQgeRXDHTQHJB9WpSXLzKun1NqJip7f5geLA16TGRVBH3gJtkgEae9zAsW",
  "key16": "3ydfbbPX8x3GVc1BTt6stNARARK9GSjzaiu6fiMtBqN6xaeMY2N15zofAinYBKRmK8bvFkZ24APnN2jn9BrhW1DT",
  "key17": "3PGdBZ6Kff9diZvZp14RLwESpNuEU1hCn4k3TDrdqZrdc1TgJxeDYAPQdPkv7dmSyXDvWPggGY91vgbR9FVNjFb1",
  "key18": "53GXPrfWWJg6tg4vn48NfywuJMAA7X6MVfNihSgexzX1H2DRAjiS372VYCfpEN84MmBxN4MS317TQ9CJoyUsmXNF",
  "key19": "5oDpAEjLcPYhJ8V2f1tSeMqEpz7vW4xkSMogsjYkRdcnERj3g2sQXefgKMoPMDwN21FWtjcxrNsW9G3wTqUwBbHu",
  "key20": "3UT6DwVRts66AA3bLuDQUGRsoWAgRjfuGUGNitaN8ECtQPAS7CzW4hb5311uVxB8WVnuMrWbKt3SnQCvUg5QVG29",
  "key21": "4x35Pyj28qzQ6iUsvanNkQCNiNUXtaEPhZgi1wPCzR7caXuS8APXiPtGWt7ygq8UL6VeYPDsu1PsATNcuqEph8Qh",
  "key22": "MBHvgbCdfhnNYpz5WxTtPqZb13W6J1EbihV7NB7a3MoGCHvwBstNrQDKR9AXk1yA5tp5q134882XHEvFRTNdCff",
  "key23": "2X4sZp85PsBpz7TzU7sJQVsY1LmVPWvs4oJsN5vR38XakJU5drvgAHRowtHVeTSw8X2Pg4JGCnEg9fSWxcFbywa7",
  "key24": "4DGp4eB7og5K5DkEp4JNmHybyaQ3JZMcU7vN4mmu8keZgfma9nnhqJ9EkFzAqga8o8M8pnYbZ7qNm3kWcqX5HmC5"
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
