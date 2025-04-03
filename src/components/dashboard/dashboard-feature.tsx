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
    "2LR863zcKgK2JfEDCFb5PSmHQPFZ9yoapWJ2wYqV7AJzxXv5FnKsuKaMdUs7wkkK2kHi8ug3ofrZqdRNTsjxtEKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wMJqKzEtts1zoGJMm4ZAmi3TyPQ1WmTz2MF9zkTgw6pYgs5f42i7gbxQUAgsFjwRYk52bBaNnL9EdetiDKawA87",
  "key1": "33WUPWHtHhW5vJeVFRa1v5JvuaFYE8QrT3haamDvtkZgSjaYunMF6of3hPsLaBJZXP42BA4Nu4wD4BKtend1TLRy",
  "key2": "22fthFJgqVt7h55F9Jbc2Fcvv7h6sPE3xoPoNAY8vT1sggFtTaqv9fRHREswJFMpu7Atq8eQ8t5no7EQVfCY1gMT",
  "key3": "5fZcfqzNxJ2TyZ5SDb4449426UubAXHiv4N3WJgf37B1eHUPcrHfCkrc7w5C5oy9Dbc6hLVs9EZ9aj4JkDgKM8ui",
  "key4": "4QDSckTaSUbknqD2ZCDB5ktMAHf37Jw4nRrGrd61VYeBiiHKWsGjagvwpyiyqSx4vJGqhpJHuEdrkYDb11bNviWb",
  "key5": "G1DyNTTqwnsKDSkcYFga3y17ieTukuuENdeE9jXajeKaMeBhDR34sBJKP1xREHK7FBcZbQxQxQfWDBUC7yG1rj8",
  "key6": "vAQpL2Xc1ZGAhB4MG493C4tNvdwMTsnGueaL7ibAxwA282QWBJN5bioyDhWc5h9YStnLMgagEMkuGMiBHpScAjy",
  "key7": "2TSum6pC9sYG4A8j2BhFQBjcsWNcQZRA7gUpY4fbE3jriHYVa9je3Y5dXxniNZ7CYpgBdZUTec5GLvXGKwzMZJiv",
  "key8": "2nfKywQ14GzUxgKTfLJXtuTMhzYdXyFq5nrjjoY87HhP8CqkmDwZUhBcB89E2LkgqEka4sk71AYM3kcFESM4XcHb",
  "key9": "2Z1tyeapyycUjDo7cwzaAMwZyCbV2vj1tMEWm16atehn6QAn2z3SbRQFgBFTNSUFPbZcLXiCnFsAG7PXbRZ6MM4e",
  "key10": "4jH9KFhPRYjASDYtpqLGtoAjX6KTScAZJdmFa2Nm5BXvAQn9QFXZZsPyZWXTDre5vfUVAqsZdD41Kycu41fk5T9k",
  "key11": "2e9mPJqSysrn7gSpqa1Q5yRGczyGwW1kGn4sHzHqcVRD1uzR7RSWiUyQeCcKXAAXrvV1hyLEeUycY8YCEygoJ5Jy",
  "key12": "49voxxHPNUbkT3fmRrEWmuZdSHSVNh5iXZXdUjBzhxHH6VUz6Zk78WpuGM2rZAQxvfWDstuqdu7YaWpqofH51hJ5",
  "key13": "sEZUFYD9jgbVESvoCw65R7z63LjbhQAZYkBjTobR7ug3t4UnMUyDUehD4gMsMmLRBto8QkpU5HfuM3it89ndWiy",
  "key14": "5Y6Y2knGcoYHy71r6SMccVxvec1xk9oLxTUHg8an8v2u5RPYoW4hAqHToZ3v5Gaztx3GZ8FohPpuKvbqZvhGgvfR",
  "key15": "4gKoPzmJ1bcRMk5brvU8KuiUzvDdgrRXtJmzoREkFtHt8bnDQPi5psAizq4BFFXFJwFEk51C3jqDmhZkpGrsC68p",
  "key16": "2f3vdXFNwGKvR9zs4FYkxWFWFcCZn9MfnS8PZvHDGUjUvKSt7jsh9gbCtqTbVxsDoWWVHdPp81Dzy3w9S7uCpXWq",
  "key17": "41DZXEKXs5K96o42aVyfBejCWrCh8JwKs1fsRYrwXgSDByi5A8nsxQpn8HXtt26Kg55vGmQwcbsMgXi3SxM5fzHr",
  "key18": "4teEZemxpReDkdJiuwMLEpwLhWffk3dRWuF4eLBDouxJs4uaY2L84T35fqSgobHhEWefwCbejykS7QQu5YHsb2p3",
  "key19": "3ch2ivvNy9Wy5RTzTWdtq83B92KZ3oxUwnYwRbxUtYadfPkwPgZ195nVX2XQ8eUj2vMtmckqCtAxxz2TGRhLEJZy",
  "key20": "22ZYdtHcRyUGCisk7RbaPkq1igFzZg4wKwKmojLn51fsc4wbF5u89CYiw12nFy1jkKAdeVUyGfYqq5tyHLerDL9L",
  "key21": "3jhySxVfbahpKBwXA1M3wK2B1MEpS4kSQjTChifb8W4PZs3XehGDWrSBShuekKtws1WvmEXttAZvvfoDwZHfrzvR",
  "key22": "2E52r6omtGWYZhFc67EFucKFFaUiXYz2cqQAt7xrP2xEGXhdUid3gzzYM9rW6k9iqZrkisXDAL7T1tftLxf9rViq",
  "key23": "2Y7iJ23RqFg8vxRjBPnEsw4PHi3wLTNzFixg6pjLqHKRN31vp9xzMXS8b9MhRYWDP6mfWPucGrwQRD1jqRqnhTmk",
  "key24": "4RBy4PW83jCZwYjVk3M5eJU9Zpq2tcGoRqUoP4MYrybivxvU8YCv81c2Nh1fu13QLhHWrazcG29ycibhUKhwgza3",
  "key25": "3koj7L2bUxqEMZKFb4TGTXwLxMmwhBVFqC3nZSdjnDeFP3wBG6myPcd7fXXiD8rTHnpsjmuSVNdB8iKbBXUaXacL",
  "key26": "466Ak34P6DrwcE72WmBktRrCgrfn19fx7ZNdo6UKfHtZwY5eftmPJDuJ5xQ5m7CoEq7JWD48dJyy4pnhxfx8n2PP",
  "key27": "xsxs3Q3ppuR3PKh86eugfD9wQY4ExySpuZ8Xym6ZhcMujM5iwU35KFc3hcYw9cZb6mgUTvBGYCxjFhzWKg51RcC",
  "key28": "CVYSXCRcS5vz8PiBJAdGeRymDuaUi7xEVPVRRNU59nVChx4eERCDmKpNiYoxovc4xfa1R9B5ojJ2CdjhzyMX9F5",
  "key29": "21PCnjuo4PDMyKzaj7a1FLP6LLcMveYdsCm6VnmV4145JPgugxMp1CJK1AA6xk45KHQfJe5CQcBFCVDgt9YL6Fvw",
  "key30": "AEZezjV2HMLwEBTtZKoCUBKvbDiK96hJ7iUj2WHG2VqcAUWCsGbt18VbHcbfULxr3pmEKidhLhauFUvuBiLS6gc",
  "key31": "KXGueCCV6zFkCx7gED9feSrKUcVeECXpBBnSb4nuJyVwXiwykQ9EzX3W93HSkLFrmfQHyDy5UrEmk9FUg9dMjqX",
  "key32": "ANpw79Ldysy18QxQYPfK1SeWHU6bDc5dxcZPDfadhHWak6njsi95myfcsBbpfcZCQs9LZGqHKYKwc2RrGJttHZR",
  "key33": "4zYT3Pn2L3p8fmyPAvRkQFTNiJwPAMRq3sAtDDg365QWHfpGwot9dCgTZycygmSgU31fFeRK97bgNcw8rXxFj5Ty",
  "key34": "WX8N1yCC1G248FE7Cw1mMsexcMFBh6e7QR8F9hKehrfwcHo2BHVAKNBZJEQXHqc2RpydfHxHAE2h9LdrTnY2j5F",
  "key35": "2WfzxSpE6LVqAiGGFkCJD8fJoXxPjAzihdPqaFqxCALJWBvQ6csM19TqMd5By7qVc6qSNAerSbDZzbLZFoKeNiZH",
  "key36": "3kxjKvtnQ2svjko1KzUQ9ZFxTPDczgob8VL9K8xfbesQk4dUt5ZNQRppSdYZupKtG66vjUA7Pn1NAfhukUcoUezq",
  "key37": "2db8LHJWZVr11a6YHYvtLSGgCycXN2oxLTbVqADZJcrssFzZuEezBadSbku52wj7xWkYVErNVPtWrYHykhiNmeUR",
  "key38": "2pSsxSkt18bt9DYJpPx8aLkubGkKVXrGCGcXZXP5MZpbikyUj2VB2fTduRGjJnhk467bH5TLNUVAguY2J64uqS76"
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
