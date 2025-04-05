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
    "3fuPhVmC1jXm3aaGYAbPw4Das6bpYFheJijcy2xd9qccCKvwdFdWc6TLfF7ztCNr2V3N9jwrxH1A9tEsCKsdhYVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iBwrSghkL7zVSMSy7fNQrHvaxqRAwv2fdaUS81s5zbk8qdPSm4TP7PKcu6fxHJb6tmuV94fTVY9BY1PiBKh2R4q",
  "key1": "535y5bs2EdKNs6Fq4XA9cM8UokpNHLHoxnKQUc3dErsYjr3hss2Q1R57svHBjohtFUSmaPg1U4i7wu8sKKFjaiM5",
  "key2": "2BSdks63SnzZMxVBgnEC4DnNPnC11VWJYJTQeDrnrVW12PTEq3cbDqzoqBQtLv5jgEvV1NmHLPpSauEaxtKM7Y4W",
  "key3": "4koZNobbYYaLNrctuNoyPDn4vg82RF8BafjQvx6wsv22yGxVD7epnngDj6nHrSezXfWrVrR3dAZRpbkw5WRVJh1o",
  "key4": "32WgpuNnS7iKc8rKngsBhGSqd6cHjzQ6G8U8A2qZ4HS9Ldxe3ejnm9YPXVxpQq75ZL3mEtu2CySoCuvUg6JDSqiN",
  "key5": "E7T2j7gYXAn7Ekn3YKX3piKHaVXWGSHSzWLbmvLAtA2PGxmJJkFqRpdkq4wTYcbvwtRcpsqPdcKe5hLkfu6g7U6",
  "key6": "qKiJRah8fqCtLmeGdFBkTGw8oFyUxnuR5mMq1cZN585VpEs8KiFVkwRMBxgy1r3PC61nkeSRPFENPUKgKK4wQ2D",
  "key7": "5gBBYGXjMmndAzKx2eQCEhVnt961zGN1uxPjfQoK2eHQwfHLo6dpFvgLy6kjxxdGy8FaHTwUUYpAHs9xa3LS6g6M",
  "key8": "2zooqunTWJhrqzRv4fBsCsCsy4oLE2sawTjpNnJnUE6PerXfdq16Qnx1zmVT5kyUDfhTe42FzDZHeRBCij729Muw",
  "key9": "5CiijPq3jpk6U7XwiwhJ4R6J3BgNJ5t1tkoznLsU2ffWrnrBD5Eh1v5xrtP4b7FbUx6QQR4YK8wYXT3rH7z2uiYN",
  "key10": "2y3N1Eu3tW8kWFm52GGsWRB12DSURqGQkyJqqsdqZ1GSPdwisyCrW5WbMKB9boPgWjNUGxCfefsQ6NZGHoGxgqpa",
  "key11": "65xR69njH1NzeR5gw7GoDCdvoJkVCwWC1b7seE75nKaThsdqEEhK9zi6sPsdQYkHTbAaebtrrfUuWf57Ws3yhteY",
  "key12": "3Z58eoRBVQsq3dkgmoa9fxQBdN4Wg1H4hrkmb5WegRcoBpzyQNvuQYQ5nCWPgSeDTYdDKfSKwy6Eg19J6YjDZfZc",
  "key13": "5Z8dMCbaqrJ2bkHWEetKg38H9VTzKv33GJbypgVEbPkeKVZWLpJgsgWwDHGkHtEtr4Xz3BHbCsKBZiFfR5drTN6F",
  "key14": "5pCGnQU9GP2iKigxxdL7Wq6q9x2Kh6xp4NRjo8Eri2ee7yQzkzkFdRkDFBeJnxecYySohSjKDvP85JDoX2gREbQ5",
  "key15": "27MZ8CMMGkUPHPX6AmEQGerZYVogpTzFfgTGTSHdedJT5ppExqMSAmNyLSCSp5JhGPgvZbE81oo9KTQCqq65V9xk",
  "key16": "49utbPUZ5jqzkwkdJbLHca8LH3DJvG56J6p6rjYukK2BTzQvDvMyLxXtWBYoLeSAgumKpH5zqFtdGSPCBbnNPSmW",
  "key17": "5W3ecX9QQ4M11fxZrpZqpqEEYTUjeEmeEKRuEChzS7khMB6x5HdUrHUyzFALec9kzmnqa6i4TXs9JcKD6B6SP7T9",
  "key18": "4hFshSidfm6NdRZMtEEfQNSHVpNmSeqnZMTycnUhAikhCw9QZzK8y2BPbbVhdUm3XnPgE52aiwpHmqLcsCH1ds3k",
  "key19": "5QTw1LHs4L1Edyivqw4t4RysunaxGB2TiqTkzG7yDhP2U4mpCBSmhZcifb8nsNR5ycs59hV9Su5WXf9j8x6HGngF",
  "key20": "53TD2aWpQQZ9fTChtyjNDTiN9ojo5XrnLjcEVomc7g5E9SkRkrnSNbqhT85WWQYYy8reFr2drHhzNhYfTwur5KdB",
  "key21": "3cGm6WikUh6NM9sdkfBjdNPBexUBg7v3cEUxq1EoH9evdWcoWhF4CsiAtj7asy9y9m9dptHZViArGmrYH9tudp27",
  "key22": "nEYeFPTjzzLvfx28ScwzxGPMSXrSrCZPptgMo9iXL8kmV8oPrkaPmPyb1HA776CkEJ93G7jFUFXacyJJtmC2Lqo",
  "key23": "5FVgGh4EVWqnALL69wiETjLan6HbLELo8WHiwjhypPGdPTWvJ8tZbGNZTNjbZ4FHaVmH4aVNb3y5SSiLFGhne9gS",
  "key24": "2vx19cYkoUGaqKrERo9daJ9GAfohpN4NzBfG5fDN6WfDK38NsYczrJAEc8TtzyVYuAdWYzMdaQmQeAcLZrTucgEs",
  "key25": "3tS6SkCCWY2sFm7yRH6R3Lzvcwj4EFyYMbnBG5L8z1XpHTL7auyHsKjcaLa6LQSwE8Ejc7mENpgDqp4SbQDAxP4U",
  "key26": "5LFXBxuYhRjCkkUBf7Fmd3YVsyEgAJ68iWS7Ft2NoK3H9jujds2MugMCQTb3EL1VW9Th4V4nVxsTEZXXq5q5f8SA"
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
