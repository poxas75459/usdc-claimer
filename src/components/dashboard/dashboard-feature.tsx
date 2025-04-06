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
    "5upuv7CsfQHZfkXb9vXp7ovdKiQSWSrQxYG85SfG658QHhoEDzWVNFBDgcaZ53Ma9x846SzLGKkHbhSVHceD2pFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HyyE1rWUNoRs94szv8VHPaB4fszsi4sg1JV992Zoy5hkB9c36zMfNGLoV5frhwYNt8xwvZ1LjnoMrkBiEXzwMkB",
  "key1": "3R3oUwYq8gGhe6CRVJky578TQGiJo9t6Y8DfHbnb8zgGBS3eLCzGoXKnELCXJrp4xhdBz2CNmipXYBZmFyVHcJnq",
  "key2": "ZJjk4okBDg7TAfP2Mms4vW1TrmEv1YBQBJrMLPvqnSGN8aGRRZfxVtLYRAsYGaTbTzE95agbAMALBSMtCr1mMxv",
  "key3": "2dLJg8dgN1s1fFomEmghBSELPxSGTi6myE1YhJjLyYLEi4Ce7iNpW1jvrTgdfY3krRMfNN3WpiLYvgkAhwm96fAC",
  "key4": "ME9iixAQtd1HT9o9S3sGA2xNogPLvbp1gzjvict9gFctfYJ2zcsa8hLYFi8euprdc1PizLAU6YjmA5hChoRY8By",
  "key5": "27UKBKFCAqbGDJRzDU642bLKHC4nquCarTz2jKkwUPWqSBpQ1eijRVxCzgnnbA7KxNPNuNxiAq8xhGSkvQh8fVEa",
  "key6": "23V7TjPhsVsxVAD7QmjwZzJFJsn4josewpvWFkayRUFHid24mLK2fco2LvLyHmbuppWhJAz9vRzrmSeFQWrXs9aC",
  "key7": "5b1QbpPJYLaEd24LXAS7KtHcDLQffFW279twQYYmynA1sP3DNsTYCpFcPfzeS2W1xJ7dVRKnDe5gvcUHvvjLQUrJ",
  "key8": "2hbmTpXZURb44koAsrNU87iLzmAzTiq8M3yXwMQGEZMgrpgeY6dtGBPz3QfW9ZL3ApMufBBtVdTQQFtkjB3soPrw",
  "key9": "5vfHjRZRa77cNadpuQkXHP3ooFYPK4bQzDUp3awMXaAGMkF6UZbsqoRqTiL3QVcDLKnu83Nym8NLaUn9UjTxY323",
  "key10": "4kJvUuu95SUQPWbEcHbTLBaSK48coM35ZUdBXPkCCRkEmNJ99PectujHfkx6MZdJNRjt7VeTtpH2xRLFn4y8tdaU",
  "key11": "2amZ9t5HaQUvsW8Yg3yFAPmZfMGgh1nnsXRLaKdHUK3XF1tfBXiPcbqVhD2p8myNCobKAVQeqFFbLLP3zhmoRBkc",
  "key12": "4B432Fw5SGQcEoH43dwjNEZ6Tqg3ChmdFvCcSrxsUhdvJLezsgK1mDPCfvoSkRqYc253g4zG3FnvZ8EkQYBspjMt",
  "key13": "AzyJ1wSyciSeu15z7mU4ZrGB27y8bUSYoCihvQnXe5XuHEx6MVD8D46QeC83GWv5rR2VQDNRHtEr7HSommgqYRv",
  "key14": "DPMwL5BxoMVCr6JJXXFwTXS13Ue7K1VTPBU6yz2BwQ4pD4JAkoGVZ7NXgHUGyUD9YbdCb74Fam6R2z3xo1CWKaM",
  "key15": "4DBEbQCAcfTmXsj4aHXsqRU4LJDv1MpK1tG9HAwt3eJXp1wgThcGiF5fxA8bk6qjdA1XBANKRYQwMB2biCtZxzdF",
  "key16": "5YSKQvjf1hLYAjPRmVNzmjjHMac2AaanRw6hUTWGc8Ay1iHwjb6kWuNn55NayJ4h7oshfnNuKgZgzLcnmeq7rPaL",
  "key17": "2YJf8KJw7UcYSxrLifF2JzTyT8t278U9vnyASV9yh5DHnbLnsVLepJF2URemcdG9WVJQUvjdKcGaBRDbDxYW8YFc",
  "key18": "R3ZkuWVZwmHjSft4kqLUnvHWcxnHqP5Sta9MfiTvKapjJw2TMwZLtVbGZzVryJD6BQMcrRqviPhZvcL3EV7NG7h",
  "key19": "4sSYyJEPjNMcvR6swzfK9jx4zD4RyyCveXxy3xirD4NWLs7eZsQ8V78BzTGPm53MSt5XA6KvBpbVj4YGtB9H97EQ",
  "key20": "431zhHH4bFLkE2M2qBdCDSdyn6WSACSyMNpw9SnjaDJqKpDLS5iQyDodPwwAq17HKKUVKihvthbvR8NLK1SRVzHk",
  "key21": "nfB17joACUfKwxe4snkKnyj8r6om4Z2iNygdfCaUtxJVVy2jor1JczVZUYV3ycmYR7HoZML6LvYt8f93ARjqobr",
  "key22": "3wTFCQSkP52QTqLebZErwJCHBjuqC35KFHbAUFMNfMkKdGSyY8oWz7zyVhVVbXToRodHB1CJRtvPErAeUSJFB7Zj",
  "key23": "3cinBwfk69TZUmnqQsnwJUqP5hDXvcXvSD99vAALke2k6gyPjRh5aDdMWrxCvBSHMsSvqeXA74FtWqeECf8r2qn4",
  "key24": "WKaNQe4BkucmiCrzafhLtUKJPbPAxkZ6RAzvoTeZcToAy6RLAurAWQR2zeZH9XtFZcBTDLtzJM5B5HgNxQkV6am",
  "key25": "4rgQGZz1ULbsGc4TnmgXiqkvGw2G2jVfeuyF8jUAgr2DWVGZ9ksYBS1TpSzr9yMEL3Wx9bsNBun2Caxy8rnPz4p4",
  "key26": "3qA5ZDwc2ew7Mk9vtV7wx1KAHHahkLMsU9kXDjCH6qYkLLDEcDtqRmMqHK9gRYX7n7eHHpkkmWWyYrKHK48uWcyg",
  "key27": "2rhi8bQ59uwcaNQpeJRQ4CwhtjgNhmMtTvzKREGF6JrBRF4RuFA6PB88VE34FxgyvEkS6XFnQWWKevHFs4Et5t2L",
  "key28": "3LXXs8xd3UGQg2gWzQNddaBFdTFejqdydb8recSPTadep861PS79qfRdkyjnmtR1T6H9miwwaYbNfB86w7jcyReU",
  "key29": "5Qq88c63APwVcSpkjv1KDPVX2cVC3ApuTaEWozMS1Dra349hYxpzM3hL1Bf1KwwbjWJGwX66X91FjcDtWoiBP1bL",
  "key30": "5ZnQ6SVVpwreAQ5oWmho23XfZ9pUVsjX9RMdgrYhvEi1TRwngxSo1sNFGw6GCGQpfML4c4x2etUss7cDf2S3dhem",
  "key31": "2UCjwYE83XfGCDM1Y2mJg8YxvVjzndm9ewWX4zxd1EPNtQdh75JaJXmSqf9xMXwKFUztcaLDLUKB5mS5nSbnnvVQ",
  "key32": "2z1EhvS3k9zYKFhodXTwgeXk1XSDMxmK6Z5eNDBtYuiAUaks4A9Pqpp6T5i7APF5wwWCAxFyD3QzkYB1xaeagRDT",
  "key33": "3FwBFKztk9EzaKPGuUMq7ZG5AHhifWoeRxFkDkkYmt6Ngqcda9R4knX814i5kuJ4jm5UmbwDvx4kWdJb8Zx5Q4yp",
  "key34": "3jB4NLeT8KPmziatKRaC1YmP4VJRcP22jTcm6f54F5ruR2MQmSZfPgV9JfB1jnH7kdPiDzcTeX2dajPGdYv27w39",
  "key35": "5naaTxib1RG2m76EdRbHAMutL9KmByL4qMySDCnZJAUUqo1BBXhWjdpMCMhuatBj1PSnbpXmm5QVsQU4knDEwG5M"
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
