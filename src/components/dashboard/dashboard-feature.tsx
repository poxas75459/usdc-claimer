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
    "3m9R25SY4Ypc3RrMqfxrnVHpjkbamSAk7KMgrmMEoffRuEEdwSE8uaPjbcGupQGXLK4f2qmBSFoWS9b1peySkFi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qTC8Yh4tU34GS45LXmbioRe5q2RzFMKrvvqVLrHKBYE7mCYuGvEeHN5S8aVhkpfaoFjfppBKTpK61sNeV2YVFHL",
  "key1": "5Rdj6TXHqRQzFhTh59vE3ZyLfT9L3K2iiCpRLZVXnKPFbp6rqbLmYnZCkQcbsuZgg7DmKmUFudwvGiPLmQM2ERBJ",
  "key2": "voTT2xzBsBC9XAzyjsbJfeKADdbPBraFvMxUMvTFgHTvPHTRHKt75skJ8ScCrhN1A6r7VBEpL2SYdABybxYzVBb",
  "key3": "49VDofxoJo8629yKGULU3P964671SiAPq4BfYVMjRpC6FMYKLzK6L3iS3BCjAcQdLYeRNNUfQzh2UZP81B71ZfiT",
  "key4": "M5kBMZknSA8H76S6rNVS7XFjukv8uhtPbcsVpRPGK2ZMbsTuUcNAZgo8xXyCN2Sbuoafpt7whxU64W96rjsMseb",
  "key5": "MA1L64TJeT7wEgBRrhfwgW7db8evXwwQ2SuuPrZpQyMCmaaa648nfiGi347H1s1XH5EGt3iyc5NfDZV15mXxxMm",
  "key6": "2hjGQMJ1Hrqi7rjQHtoSTPfWiW5DuNR2ZmFg9GMKRB4NmfLnZXpteWwejCPSe6qQ43fR9efKpicdcgKE87aGj2yH",
  "key7": "46hZXqUR4ky8Eh5Y6o4j9uwSoa2j7d7G8QAPZsp8vj5bHrJ5zcijAdJ4Gnnn61g3kM4RNjfwdaskDp7DM1KFLX7G",
  "key8": "2XxpBdUK7yNfdyz4TcAF65qXvRAK4P9L6cRG23rkk63BbkS9MeNTA2tRoKRhVL4BwCxUSSArSm6yTEbJgMXiiak6",
  "key9": "3NGQDZ53gasaeXRoZWMd5boqswHLiLxfpqNrx3EsAgEpaFkP1VArm2sfopaCWv1hx7y5exDCTJx3FTwrXhvRaTkQ",
  "key10": "2XrB272sxGchWhSn6EGeopfQM4kQ3AHPUSpphgjpF4VU6aVG15NR9mRnf7zUpYkYPctwEM4TKrDdbpi9oAffqMWM",
  "key11": "2c11YJsSKQPA3HDJ2UKTxxxwkZ4G6tEWSACSV82H44dcCBm54L5QSzLHaaRXi6KbRkXc4UARYewp6NEyHPWyS5eV",
  "key12": "3YF5PtLDRjW4Q2x51ADKfG3FQmBMSJNNW9HYur78pzXGgZYuXhWAqE7TLwFPHpGEPia2GbPwpMKN4BAKTUFBa6iA",
  "key13": "56SCKS1XaqkxeKpQgpEpB8PzWvP1aiV6ZGzisUQnzLvKEgwTW7Zj3Amu4FjexndhgrJn7NL48mzocRG3QiNvbzGL",
  "key14": "59N9fnVdjXmeP2REsjvcREyieM5dpv3kVHjDdsJahYq6tUwQC1XSjjc5gEqCC591FiXWNoMDbmbZGRzUJwtM5K7n",
  "key15": "4Ds63hK5eZ6iUHjuQ8Gcvi1jASkAQfjLPXkAudEcLmfDLrCwTzfLo9mbWHCU5AZSHPXQHiqPs5HmGeDRVTj34V9o",
  "key16": "6EadBpnwWK5TY4KLaQzgPSzVWYbeWmLkgaaPv7UQL6a5H6aPgjXVJzXr9ga2LSurCPbS7H2WWxjDLyxpFfSp95g",
  "key17": "5yunARJwwazDkqS7KWby8nXLKwX48SdcaJrhv6LoVJyahVKqFo4RRQ1EsoPuuiNwn3MSao3aKfijbKcqeKWngdpb",
  "key18": "2cghMmKBjke53xV73isq7AzboRT2p7FgW4TmsVYwcKqKTgcyzWVS49CYqoA7HUFLxHGtcS5tpzhvp3kqef5haZBc",
  "key19": "613pN17JbvJrhuV1qKK3DTE2E5KfCXt43jLbxRQyHu3GnhEEM8iq9puSYsJSQYTGdQWdszrFs3uhAQ6SG6qhGJx",
  "key20": "jKBqBL5Fp4HEeCYV71jyBaeaNEPFRf9mZasuukB56B2XXbR8vKDpGasRdf6t4XatXJwccCcQc3MUcGUnkfw4KtM",
  "key21": "2sg1ACfqxfLrPC72uFoRmnxLmz86uBTxK6iXkQWCdugphXyC34sDMTv38UctvjYwgcAFu3f4uSZZDFm5tWFe9Tgm",
  "key22": "632QWLUumCXpr3wg4gR7baBmrPTt5cz2cmvg1yvEFgjAgbrCkL347xVj3jYtxkZZUwMkhqrxn37fcPNdKYkutxQu",
  "key23": "5QXvCegEMJNN7Z49kDrdnzNiAzpWKxDp7VFEeVg689pqVzuFUWgVwkivymCWqo6Rtcmw3SrdyM68UdaDswwb24zF",
  "key24": "5AS39bT9AJU1bNmLk5ujzdGN27aepEX6mNsRQRN5f2NwBVtw7HdkLhfgoZTU84W59f6vNUW9Zz1X8HNJfW46W51m",
  "key25": "5wqshRYr3NRnKJ8P8TTzcCq9tsmcQXmekAEQQMhN3A9FmVm8GBK9JuH8cbqPmh73QymuHuMbSNZ5HVTgxT1ZxdQ9",
  "key26": "5nkLecSWVwr2ij18CF2vzuVJUhXwSWXeRF4DEdn35JniqzotpmUA4Qnpg1mMK9LmZCKH8ZmbZgFRsy3NEYKJF1ug",
  "key27": "5KYrXUSG9jjJvqjMNn8NTJTb3ztQT4sfectah6mdiViFSSpXC9VRqggsAzVQMaiuxd5ncjGaMXob6RZBLEMt7Jdf",
  "key28": "2SiiG3jqYEU28oWMu1xA6W7zQeAD6vcQnLhkfwB8n2MKRiX3TsvEeeHmuQv6GaTm6FUYSAF1J2VT6G6MGSpdtMMQ",
  "key29": "3ZnmkP12meQZqBjxE6HegqhTgTi8zGRn7E7VUVHLraigdSfqiR7HaKMER88LVw4tbGzu5wUbUkbuEbZHjwhqKYAW",
  "key30": "2TFLvJr1vNPbj3m3ETKq9CxTSjBsPkZAiypxw1K9vuCYUyzFsKdbVmxViXPZWrZZ8BcxG8i8SuGzxWv7W7m5ado4",
  "key31": "3ACqEtEWjArsj8uU4Xvh7S3UYwWdfN3D1v7UrDEKrCRz6BZGW7qGRosKYXJRQ9wPhwXW4gT85L8JXYRU6sUvqVhq",
  "key32": "4C8kg5vccE4eujKuDPnXPZBHWg1GVKLvm3Yg7qUwZ1j9UFVGwGgHoPWGyfatrMA2Kq8VrYnSmKeCTxAqFNNY3HZs",
  "key33": "4ZsMgMDDryQaTAZKjmY91ba9jDC89NuN9a5V2V5HRK1nKqd5rHzchkPZhM63KgYEmo4haX2uqut7NSvJtP5VcjBn",
  "key34": "2r4Y5G6nAPswF1ZSrdghkdM2YosC4AsxbLj6e7PSvj9RtgYUpifvZsWJ4tvBArwDqXeUAGvaaL81eSLB3EZ14KHx"
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
