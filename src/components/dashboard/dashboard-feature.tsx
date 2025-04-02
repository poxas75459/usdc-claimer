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
    "2CkTjDXgCpnDLQboZN2KWtNfSFFRgTNsc6KpTBDdnQkoqa8dktDwiz6iqu1abNFKyL2d22fXNMqQVaTmF5wagnkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gJbK2rRETkTTefonrrRSygNn63WecYT9QzEKfC6J8EmfVYh9hajFqxb6g3FWPKNbGzpwSXyGTApUesA9mfyTdDN",
  "key1": "37whe4u5oQQqgvANvChENiYzZKhm91a33kbg4FGUMgmR8cvPropkocKjk9siPEzsnzbUXZ2XpSNpddY2Vy4QWQEe",
  "key2": "5PDnkxjsdNs2PbAB52x24cKTMHfS9QLgAYyGT23VYFZDbF8NJmEDA29jog6ViCoyGXjqcjiK6SFB1ZPbhEQ3R9ZX",
  "key3": "26pfB8W738WdTdVdgbedp4qHFKABsxpTemRpKhY3sQJVfpAeBEMjd9raQmTzTeWNnTBoaCHf28eVJJM7fkUiLABZ",
  "key4": "4d7dbjCDfVUA5NgxLWonrEDs18zrF2vHoAtag7S4MpdAcDuzJeJ1ztjgPKwLUofDyb9xrRm7qj9cEABbAeUy6RUF",
  "key5": "uwfg4HydXKn3itMVPi5Np8GuLMnfXXo1vSmMbWcNYbGGe5V96oKzDKBsYc8bTLkigVyVxhQPkQwk2L1w88mJLgN",
  "key6": "37JJcDWYBkWooXu854sTSj185WyavtVcaf7PVCiDijQotQD7WYFYzjt7rLJJNg6HNUu5exY9TKuSQFiF7wiCRJhy",
  "key7": "4yTPQXbTrMsgqXzGhT55vYctKQuisPJuuiTMeUY4CWc3Xsgiypa54e3sCqncM45UtmUDZ9tega5Qfhvg2CVVDq9A",
  "key8": "37gegNkFHYqmK3GqMFf4RYUvep8eeoeY17Z8TgCj72AUgCsBAD22mRqsU4uRt2gm6WwjkBdZsPftAGio5PgWfgbX",
  "key9": "2tEWXKHFWLe98r3iHwsziWsdwgjVWJLESswLUDbgFG8mjM6NWHh6L45QikNDLBg7CKwomKw2eiHcbucJTuVqBjQ2",
  "key10": "2ADmTZ86bjzxtQ8P6yh1heErm5kshqtDeepBnh2gc2qocZD8gfAdqHB9UQLrrCkSScgwHvN4LosQcgHUd5VPaaEU",
  "key11": "5jbcGv4eJMEpZ2JRuoRdgySB1VHnCgM1TtMTYCY7PWvD1h82bVTvdtGQpJuUhaxLhfEXfEpuNFjRnX2hE6P4UjF",
  "key12": "6BVsNAvy5WfcoSovQwxiq2AQdGC4RYFzTdpU3jgXM95UnpfVJPeuxcVXEKWc6SW9XUGVwHSt9GmtMPXKHJmgjPn",
  "key13": "3ziKmd3FZdif8HAx8fLkGND2XWHpB9McyHDUhhKeHnb7pc4raNwhE4GTZJHB1PduGNJYoawdEHATFbrTSd7C6QQ3",
  "key14": "2qwrqEbvQktJbqRdwLXEB1yERAX81UUavojLq1qS8vdGMPKVdvPkGsHvaUu2h1sk2EEvGj1aZ6q6DKwVaaGfdHnG",
  "key15": "47oLnEBgkavpoe5Y956WAeq53jgyyKAJKZhXC5z9LLy8G1x6wsYUzFZzkoXsWCyUH8CfphK3wq68MswQVHT8SxRe",
  "key16": "5xQ5httttsa1SNJXjQWqyc87HQpkvFTLQd6NjfhW62cNAoNqbjRyv4sWks8XkTPEjHvUKLgAaoJmRJ6t6fJYoQvB",
  "key17": "3XcrNLNsG9mz1RyFBniZwhxu4xTTRihZ4Qcyp53J48aV8rdyj8ugY34JxfU8UULPqHCjC8qV81t7Qs3xf8ovj51B",
  "key18": "2fe3ZX895gwvb2u8UHFaic7KtUggLUwKqU5vB7nh3tb9YwnxhQAi3K43Z5Ai7LcmkgmhMp8TiPwyEhqmBokJpK85",
  "key19": "5MqWaHMbquKXXi4UMknLJp2KLSAxwRQQ438T7K3v6eh6raYAYrprK2zui6vB9NXjYgKQ4kjxh9McDAbzPDjsmgN6",
  "key20": "4dgXLittwjd8K8U9bX2KMynRwxyXktmCku85HLPgWX8rw8B7TePCRVCEgDnn7TcrE9YwYApPNDVWCLjge8WFLq4A",
  "key21": "3GhUEYqxH9Tx88oJbsRWgpaJwmRoq2U4UFYkzWHjnBm3as9jcRb8krJDoZSLXBvkNbAfpeKN8EnoXoAGcA1eFJrB",
  "key22": "2JtKgBauCK1q5TKa7t4GnMXsoXifbpju9YycW742jhBDSetqjbts9hYi4p1RS8xSGQJBRVb1p77enE2SBAedEE4p",
  "key23": "2X1HaxNYzgCfaMtT6CXwP5FXNCEWdAmn7dotXBRnWaAQGQDCFj7tB2pcWMgXe1WstqX5cCPG7VYh3Wz2w6SvwQMX",
  "key24": "69w6LKA4781UEmRVGC4jbPZ6d2orxszNDfXf9Y9GHpnJH7AQmfAkkBGd6uZAWKUnjxecMBjEq1b9aP56vNhrkJD",
  "key25": "2JqFaq4hG4EQQz4cwsEqdUzD4entBoaugkeREMUpH8fAqJfpmFA97wRifEoVbx9biSkpqcv3vCxAzUuee6tE7X1w",
  "key26": "5Erc47kM9G7QcYymT71U1i6kU6S45MqPnQrtHcUEqc123nTHmST4VuiSwkq5sojXmRv7ebki7cjUxE4onnV2UjBD",
  "key27": "2rTXjXF8J6CU9DGBTYtGnfMccbT9zmGZhyGDUXzLnLuthxGoibQhyNDwoV13DYa78NHB2WNmakCLyYjTQskpnnGg"
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
