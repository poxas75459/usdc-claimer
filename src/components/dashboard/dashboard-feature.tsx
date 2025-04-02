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
    "4169YFj8tMpPUYgQkzQjchNYVfez5TXnbpCKqwwWH8Pf7n4xhHjmpy8FoRqsTzYN199aHo8fRadjRKhveGPyy6bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nsus2z3e4BE7HNSg2CnbGcHUd4aoJmFkZm8wkP7dp1G9P5xfBVBizYqdfsFkSsPuZ8xtbUUhmKnzh3Qjk2kYESX",
  "key1": "4uEmNihfKYuPxaAttCShhbnLuxMakUJeaV8KGNA1jTCKi7xbYbB8MPwzb2139qxqdEPKYiu8vn5fept6xygyPxCa",
  "key2": "3TXTQgmwXpzMecxvVFkRrfY15Y9nFWdSU8PLD9ST2USuj5vmmGshSedvMC1YqTMJZZUiiym2JQQ8VmmXnS6RYWxW",
  "key3": "53ggE7TJnAhAoNhJyxdGopmW6pKqy5znkNnqjWqUeZtUqwahMpAdXBNM1EXHBWzm81vheFT56XqF8gGSpzuzjHKT",
  "key4": "4twwMUJMkGf57W7XaD23U6kWj7qcFteMzxXzh6eDnV4WZ4TpywKw9kGB5mcVJvWSmdE2VQNbpiaYsuk63qr65JET",
  "key5": "DgVvrfWFzHWU7m8KY8rtYqR8oFDsccQvHnP5CAAbXaagUfDnyhatn2ng8ufuCQoGZLtTQkftWn1NZ21sA9xSCHM",
  "key6": "qxGpumbFM9BaShrrP3BmcrfLhDJbiGM3dLZTYb8zGts3KJ2TcwcabJTJ9tC7pcEWtAJe39T8Tc2UydWon6gnP44",
  "key7": "22rZWV3J87ubBUdSQ45A9eiJUddavKyXKkfsMM5d5tAQgcMxG2Xr1Exq1zQvhFFLSqmUu5ZoN37681UKhyG1bgmE",
  "key8": "HuZf2qeGR2JJDUpUfvfknV5WpXDzbGCgZDJ22n3ABfKSjeQFHyU77yeH457spUQL15SgbT3JvHh82HopMoivxNe",
  "key9": "2Z9NPstGYhPasMZCcJU4buAAeYTomHXZX1HRLymks3BkLbfde6Aj1aNSv9qMkdUTrBaZ29TkjF146gPNBPUzzmac",
  "key10": "5SE1SzQyzvhvRssQtrdCPswMZCFQVetXXZLZL5waJ4pLHaswYkob52RxjZPaW8TYeDZWSx6Q5yVbAyWLfzxyid5U",
  "key11": "51Hsmf4ssricay7YWeQSum7F94YEFjq9cV2h2ZebjhRjFvwvkHh2fbQKW57ow6BeLTzwaRyPN2VFc8xSXvEGwHvb",
  "key12": "3jseSDJCAuq1TzxDZQ2XXUFyJYQzk1g9Q59JnQUzNdSmWBkrBF8krzGnb8YGFezeiQxs62dkatf8vnzWDoEKXfJT",
  "key13": "5j3wh4gMu8MpcxSxnmAByvnXz644K44C14MMsAF17XXVJapfviJA8exa4V2iCDmzfjtT85H3zJ1guCHFD5KK61TF",
  "key14": "vkCo1Q9mqLTzLjEm6uhd9remSRF4j4sMbM6txif676QQht27Bm3Ze6u1SbY2Nb4Yn4GPTZeKh9EBqUDost44Kra",
  "key15": "5164eM1BJvwVRue2MguXJFdGG25SYVyZsYsCigXwD8kCoJcTuLrgZHSYU82737L5FCjurjfBB94LQeMadHaRTq32",
  "key16": "Rn8povgZXVhVECpTMVPK2W39ouJijQsV4Terwhpv5feC1qLhUYhEwbfSh3LFUPAgLU5vX427HkxBjdnoYCVGUEj",
  "key17": "3d5L7b3arUrzrjK7wXA7Qkt7xDeipoCUgFjuv92cQcz5H92oyPRqMvQ89zqCwTTB2ABkXRSF7ZiTk5mvjEaMkVD4",
  "key18": "4rYdwCQCPiiWHRki5gxvDhZRkbBZd6DCVbvUUMP1PSXZABA8stVAUPUf5Qw4fbMUaUHVRwTBEsLXuxJG2wZTS85k",
  "key19": "v4QuNyVKmBpkNtKwt1cXdu3dpJtSdPmh261AFWbTPt8oYBt3csa7nLcYDySx92YKQu9MmifnLUpkrfSWWpDXCMC",
  "key20": "3Pwq89nb8Sg7FtKiH4C45YFF5DbTeEWNcms2JyxynfnnB7pbzmVojZpuvJifDBePQaJD7iuAwvPiF6CAy4PbfboL",
  "key21": "2RLdxhrt4n5LsRNkb6ma2tNhYaYSE1pTPqdaQr1k5U9xEzPcvbuqG5N5PEXjT5oXMYhzw1cnv8M7EpKtPUmqJmX6",
  "key22": "2g2oGWc3cz5Ft93sb1MxrEVmQ2nHmb2iLRLSQU8XsFDsKGdVGV3jtNxiW3NnCaLK7z6inufLeJwEgyEp7FHWt5t9",
  "key23": "29KpfYKkqjjQp2Njt6s6GWxiUPdHJUtS3i27PQ44wcezaicLnSRVrHBhcuBEmx7gqwjR9FAEJqyShpFdgDZw2n2D",
  "key24": "36Sg9M9YMQkrBqSptCrvLP5fnaYdpzEpMfdNs5fKAk8pxqyycza6ftWqKSxqmJykgF8TWTs8adWJhbdGsHwSJUNo",
  "key25": "jTuHYjFizP6aG9ioxhDrpwML7U48qHBjYd9WSnTdWXDkwxUHmNFyubxjDaU55yTdqytrTR2s33CTo1Ckgv3zhAE",
  "key26": "49k1YPmcRrwzhdeA3VSLKied6NbTcAnViDi8CytJYhCt72vgn7GYibGFVNLSPctEwU7BwPzb73s3ZUjWPGn6MsP1",
  "key27": "4b2noaGhd8imRst7dtinpjiDs8UJsD8LWX7fW218yayqNmP6befXnyE1bXLRy7DE1H2AgjKeSzdRq7n4yygkfcta",
  "key28": "4n56NjPagXjEP9er3H3AasMJJJrmTuQFv9Edwig9dNF5Xz51pDqgyo9hQZDT3KXaJJNfrjTtgpPxhMv4nJ8Yx5yj",
  "key29": "25nh9UPewdQ5a2rACkeuR1PjmuU1XKEG9SrmXjAX51nyswoTVYzY3P1pAkd5kvG2GhrbNN9QQi3cH4uTG1GwYCUN",
  "key30": "29xik7NhVGtxbTxrDTesG3XZQ37raFi5HUr6sNTBsvxiXnUGKXaTQHKgfdXdN8JCpy2Bk3wAuAfUMUPGhtf3eU4n",
  "key31": "2L1CNR1wrKDCpscwdBjNxvxWLCzWfPiU1NTVSNVLgEwpS92s4f9fxmm3ztMsvYSLDK8TyNCY7vpL1FrwZvGtuMsV",
  "key32": "2oag2Ya9xPGrkppMa2fA1BLeQAxTaxV9pWGzRKhn7iNdUWR34S8D9U3Lcf87itdpso3kJmVoGGWKqvvwUwiFow98",
  "key33": "2KSnEd5khnfL1zGfNqRbSW9kyTP2vovsGXNMDmJyEXBp1VQfaqVffvuMqjtpy1U9LRpUWEH2xT98Lobf2pB59vfk"
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
