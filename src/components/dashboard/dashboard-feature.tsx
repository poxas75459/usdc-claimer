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
    "358DAGdePwDCCgM6D2uX1jJAEVHxU5Mr6YrtDqdHcnSpFFW3z9AKGGQDpckAmgG95L1hT7Vxje9eyMKzL8dYN5As"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sJvZ737D8e656cqz4A7s2MXkcxz1eDN27748kbT2Bb1RQFCHK2QgF2oTKJqpoZPxhDs3SnvPEeigXPoX5Xs2CdH",
  "key1": "5kWz31watS8mJR5A2pCdXuiZHoTqgjZsxhqTTmFBEmVVtUDcnLM3RTRB2RNciMwhzB5iXnMrdENjNkbMZYoSFZ5C",
  "key2": "3JWhS3TUD7EgBRw55Qhaz8jbbt3B5yFKazTWwWuCxxmD4rDD76dTknB3ZHjftBb5QCqn4oZcYibj8mPVvk4xU8Vw",
  "key3": "2VPs4qpnZf4rKVhK1kGBCfkJagMFMt38AWFwXjCUC5yiGc2Fi6RkZTxfdQTAUJRioL2Rp3ji49Vxam7PWmt5BYiA",
  "key4": "4TwEMZo7rvCDfHaRNGiLx9Le4UkjJa7k3nibiEBs6cK6u92mMPajpVxEW1XrLoy2M45VmZco6taBeGrDovefoN8Y",
  "key5": "32Nmk2XRvGYWHKVgngzFPevj962JR4m8tWe4Xpfr2QymyiLU1BKadr96TmLLMBVEhbTJNJuAzJwFKbCNFuUwmUwo",
  "key6": "3p7nT1CxQXtVJg4eCTj8YJFaA98tg48w47sQ1ksM1pzPDmWhmg1jgkX9Z3EuEr9S5jSWzwr2pg4i9ZiVqkxTjf6C",
  "key7": "J8vSv5c3QELyqbdyX6FMWJU5Dty87JiE9tmB23brxgARL1KqSuFvyit8eQZdNNewt4T1N6GLAhsC7sheXD5iYUW",
  "key8": "FA3RQhgyiA2jq4k28Mu6MUfFZUD6PxSUkDDXzw5VhkXbeoGYU3E43a99bLtojncsjUjvhDg5HE7s5ENAynQEtJo",
  "key9": "MCDkdTe1j6m6cMpMDhLVLPCtdxwtfrmVkn4ib5hEEBg89DsuZ27UTKJYHAgXZYyyQcxx3xd4zvHDk9vbWzWTnYa",
  "key10": "67LuG3rSf5Lbft86EDQRkMYJNyuHA1pS7ci8tQ9GpcgAqqe5VyRwBRSQzL7cvvh9aVfh4JrMXs2K3Tv4NEmnPSmS",
  "key11": "25ayeiWByRg3gbbxY8BVYtZhUvfcv6r5ZaJD3EjcDXKfGDhkRyrxmNcpsCSb6DRf9RjiCHgc1UdZUvvoChLxDVbf",
  "key12": "4tENikCg1FD58En5muMaxHPhwzyJMivjzEYWzVvmYz7yuktCY8xyFvRUyLp46Mw1a7wgqLGqnB1cjK4XRFdMsNww",
  "key13": "qqYpeu5sUVkqAtLAmPcFdi3qRyDPx65QyhyE2477efG3x9csAHThLVF2MGgaVpoUe5Ackn8Qbu7iP3FFTZ9jUJz",
  "key14": "276DsXJzRhm8u2Njo1QrjX7bLHwCsMqWzjbSRJeYD1xXBq8NtMPCLkNeQEG9gqJRbnXRhBD9qGtU7L1LapDGtN76",
  "key15": "2vcHV1CfpkeNjxeHPJh171gCbjrwETNkU2PXrDarii6MkcHge2WBkDMGjSGghdKb5AZWhgUBxsUbNKvcPgcFUiRN",
  "key16": "5kXfTXa5YD499k2hToYw7W5wpybjE4B1fJup2h7cGQtZNzD4xw4Lbkb3EnTfpku9Ygu8cbMSQiFCeUqJyrR4M9wV",
  "key17": "5EoHz7MjZbgvooMgZR5DH5FsZ3cQbQwZqCGvWuCXHqFrmehTS9oipek163tAnvWbqZALx6psMh5h3VLj3pvhumXk",
  "key18": "2m1HA9hx5uXu5r7s1ooi4vCvtUmcXSqw3UPRpZuRkhuwmec21LQU9AtHjFkxJBiGphCNz32nEQhQ1HTTpc1Frd4d",
  "key19": "Yxaiv9kmK7XFssR4HqcPEPVSp1y69cSCkgALXgTF65EBk4viNQGttN8AbFmu7VyEpwqQhHj52gGc1m5uWqBQFh1",
  "key20": "2ZGqUr1QQ11rBYx3ahj1LHUySwjX8gBbx6dzQnEuVjZm8ArQohkWFSWLmHidxGMdxccX69eqV8RQGihGyk1zfrmZ",
  "key21": "59bHLaP9aiD4Syn9peWWnSz9oU16bEJ6ux2UmqN4jTHohL5wX9MboZvsA2YcAjZfGKU3836hNrvNAC4Vo4GW6XkY",
  "key22": "2DA2BrRWReR63EbiMng4c3TZ8tjbPFozmFgZMmVA9ZHhXpZekRF9VvaKSWiTowtPLXwsYHVqzyAggnXCBeTYgRkX",
  "key23": "tX6i1VsySUMq1UUQmuDmgAsCns4gg5afT5FGdP36DMEMSiXDi1S9EQadzJjU1cnugjKAVbXcfuMCVixLXcnEkLo",
  "key24": "YNymscFEYtaqr9i8NwXcU4c12zjgXiRpnkbfxFLRFHv2Bscafd1MYqj4798NDf6fFUeyES5bJ89bz5tMRvXoPri",
  "key25": "2sr85UDaWMZmdfXrFxV2CoUX6YBktmTHjDApJBtc8tHztVN7cxnVhGxMUbxtkPjWM76SV4YR8rn58XwkGZ1v8kQD",
  "key26": "3nhpqR6B7EwiSgWEZRiENLWuUA5MuWhbfhYJwd362c386zNqKXZXo8UnmrmzpAqH1ATEkLEFuypq7maaVKAYwXeh",
  "key27": "59gZZczve1G66Jr46ygq94mJEKkKVfJgduvJkhPpoeNN9oyCCn9xFAdw8j7LtuXq1kpDf31SQtbjWQ3fGU1gAAGZ",
  "key28": "2V7TAbnj1ACv5Hv1vScQccBNNH5kYue6JVAL39sCstuqpk64XXshRB9bBr4WHu6YRkjsrkzNWsuqqeQFYwGRndfa",
  "key29": "2sJxJ5NGLFxmrsyw6CXHwsbjVfXHbJKpr9Hho3WpsgAb2YwQHokkejZo42o4D8udmD1iYPhvexEBSMqt3ZfUgH7o",
  "key30": "i897tgArvUmJbxKgjvfhv4tgNN6QTkLLwF25AiiGrstmXRAk8fYMXAJYPkcadQsNnduePmSrmFT6vY9Y9ee9XaM",
  "key31": "81xkMFQYmrFX3EZLQr4hPKSJrJCk3FKexD4ZfpL8zStMEjQVGnx5Asv7De24aitSZYwwFHu97aMHcDiwTQduWN2",
  "key32": "5vxDG7ATqtdCayfRAe48HdrqDNe1wNQJpxREXAH9X6t46XtQnhvPDafBi2YpBM5cPGFmimfzSnjBzn9QpaTaL6UN"
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
