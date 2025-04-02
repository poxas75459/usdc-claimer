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
    "91wFJXkwsHDPZvBEERXASufxh6eC5KvCNjcddCAgr3hGAfAcCbqRR5VcJD9GXDU5qbYqouY4CjCg6CQf18XgbXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4feZ4fTESr3eLf9vdZyQmu5DGfcRijNDBS5b7FCgyPLkShoJtTguZP8Zrd7xJMr4VhpaTU5p54eTs7UejMDiV2tE",
  "key1": "3XvKuGLhfUqYuELoGEL1TEnD8nsijA24N6tnGquC2VWEm7RAfJDw4brux9oFrSakbg5Cf6wd96oUVwtzb2MUcQDW",
  "key2": "5G1jfMEnx8G1W1c8AvmxVUWnMPAvCKVaY91PmSXWXJgdgqjcEH3DUkZkVwMhqf19GRtHqCeggVRx6s9ZP4KKcsf9",
  "key3": "UGa85LZAcG69BCGN9UcWZ4DcjvQr8XYudzmJSSStHxCfZgnhYjHXU1C3LT15yaGxwnNREHc6VDwwx6JdwN6NoYW",
  "key4": "5SdKeGPncCPpjk9ajN5jDHoo9cGzw9D1pewzCimcmCZdzGtCAEg6uwHSE3QCxei1Dcm391EuYCFPvm81guzNJbZo",
  "key5": "rG6t3RGYZ8nkgqaGEY45BxfkPMosbdsLZNPmz1qktHknSa7z1G8TQ95S83Nd1ZxqMiVgjyfV3CHAChpEELNfjK5",
  "key6": "4wiVUw3cckgPaie1MBKxazWAJWUgunb3ECQkV6zsQwpoQ9vYa3ShTxpwGdazkKBMHtEHK7YMahC5VhrYKf7MeeY1",
  "key7": "3agybqXsWqNWBHSKE9rV6UFuN8MyXo8jvw68MuXQWqdTW93TBCsR5djVxg5C2ev4e7uD8dvJTn4VgNB7A9T4vDhu",
  "key8": "5CkxHsmhpFBF7w5akt5vvdJiFbvxyNLmreLmo5AnNJUfuqAtBapX7jRE5r8nHEM2yKb1Dmom1Jq3wy4G4YZ4PYQU",
  "key9": "2e2hQoitUMyf8g2hLwbNtRPRxC98HTm9whj2A3B1r7J4HG77bbV17MAdWeQaW6CH41ocbzcgwbRbPfAxLLKzRHhw",
  "key10": "5X9ZpxnWxSt5UCNYEEyiYSoMfRg16bfkokT8XmTRPRRZNNJRqDfs795iKviBCHZBLCn1eTcM1K2k16QzkH6nYfKD",
  "key11": "bThQbfB5L8EoQeLQyJrBwzjYQEiFcrDRE6pTv1NCbh3bH7kTdRHaZ5AvfAwMLxikuZhTLRGjhqkcAGCnT3LpEQH",
  "key12": "4KtHQmzk9ZmM2GChQfQUtzALBwPkcV1SawcyfimgpHrRvnM6dbAqgpg395qLupocCpvenWoZszByU38NaJiKjZHD",
  "key13": "5oLZJhWuWtbyiyCGb5xoTKG4JFoE9WVjzkChmPsDYmdsbJJJvoNoGX1M7oYjkgjP4us1Yr38eX13tVvL5aVVuJqd",
  "key14": "5qT3ctogMrHvqrNVdXuTYSyhfazD5RXPpN69roFaLtjfZabiqn22DNpmGknLdMc4pfZuh59GFX6criVDfvNBRx4H",
  "key15": "4fUAziEqqFjtGHFBysNoLU5zzz683Xfk5ixaTajdfNX96C2ypPX2h1xXTaL5hPunH6p1q3uKM1YuVSX5qxUZdb1w",
  "key16": "5mF6ZzaV38kkC6UDu3tfYp9mFjRAvVLQGd77oTjMvZNETQAEobv63TJvAvAyo4t7DVvgQUiVPVFGvQ1hyxdN6GS2",
  "key17": "3e2hZSp3qPvPFb6N8d2Rb4ao8zdWrWou7fUvkUxTFh2E8JcVswrzBrgWHBMS72AXC2fgnmTwBGc9Gd37YYrcf3HQ",
  "key18": "3hKq27Fm8eH6RuJScrUXCnnDJju9PVxFqpw6ZjGL8t2YLpvzYraMRfG1SUoCU37zrxYNAnrbb6rHVcJx79M2VcrG",
  "key19": "3pXwmJpPgoVuRgxgfU3HR84aR4JGXDpPTDoXJwZbiTASXY6aTnRvhichrGeiFui8zDTsw37WrQiks23rahAEbJg8",
  "key20": "JU3MN9XuGZiutTFz8a8t1TmmwQU9fodTkgkQeAcZpJjNtee1m2gb2V1XL39t1mi4CUQ6f1u8TzHXsVC6bnSjaJM",
  "key21": "49DQCRp3GxsFnJfvm4PqdSY8kcasWqZMT44J46EvBm9JtZupHs4swEAvuqHyjr67A9BsZcioWk9ChJGhW4cbEeiR",
  "key22": "4S2QYEvWHyuVaYJ7Kvd3MQyYGKRYDvbEpD7iJmT7VP33Gyr6xM1doBLHVNZxkERofrAf3pPmKvUr7J2xxrq6tp5z",
  "key23": "4SkJU69zNAvE8Pf5q77Fm5JxW8TGnRs8MqvvLeKfe5DBMvcihk4ZFNkoohJZL4KavJqGuQhvVSzFJFhWNjqu7sa9",
  "key24": "5LXPSyoSBjVdaqiNzz9xPLXNhAMGTtToUV4Tegzc8bAvhwhV9GuqGSDyFYkSshpAh1sjSctbq2h6AP4gYL9jdhGm",
  "key25": "jkuwht7unCDa8JTgCeESGVVhpYxeJmm8hVKzuF6iMRZ5ZFTZMuYJttM5gvcCCr6oQ1DkyK6V6sXLntmmECxYbyP",
  "key26": "37bZnkwaM8uPoaVq3oG9qiS5xxPyKfXnxpq4k5Rua3KUnzbbVtPgAo63xx9uQZN1GkuZe9RW7vT8sXdV8qfV9emk",
  "key27": "2iCQFBhepTrPtXSvUZhKs25Fg4kdHa6tAwmP4JxBMmV7BHpoNtNwtJUXj5rkbwWQrmc27yzwJnGSFMiuTfMmkYYA",
  "key28": "4driEvQHPdtn8sRoCq33nkCRJvU9jmWwWgAQ2P8YJ2WizHxcesk7HXL5yYeoRPVmzZou87d5F8W22gdR3TGqjasP",
  "key29": "yD1DiRias6XWxVWU8fWbVuWu7sgFuKEsUjsNqQYTgP3g7empMp5pYsztLHw21egsowvcXNC8Fvn3NY23sNUNAaZ",
  "key30": "4qUjfxXmhGoPacx1KYsSsbu4bA4PBmocPrUe34b2VwLKfSnS6EFDWwxqpN4ifrdGXaaJxWPQKsjFAJosPVYqgukz",
  "key31": "5tJQm27NZq65PH1ZzMrf8EfPKb9qzRwSLyPZCxPrRFxoqL32YeXapF7JTuFTBLKkQxURm3E1uirpefbT4PEYHzxA",
  "key32": "5Usr1CS2haHRg4USoMDArGR89bg8iKkhxF9jXhkDHbbUy14hF4mTEi7bt2Zj2PVcTj1LdfVML1UCrr3ciW5qSBHe",
  "key33": "3MTnxJpXao9xeXL7Vb4RYfJ919YQWcbcoVkmuPkX4e4cND1LPcU6kf9qVfgxyQiFkv6iUu35K5McM6aPt62McBfD",
  "key34": "4GvZGKZTyB71xNzGBhYPPWt87gizNC4nFU7C5ok2uhpWvNGhJcozDbmSB9fPQnoVDsE7D2QAM4UWQgsrNiL2XDPb",
  "key35": "3Uez1g8KSLTtYBLQW1bpPT2nHdovv8BtqMxyeMiZGXfPz5zBQZbV4ut8aESPGGpDPsncgKCojQG2Ar3Yas2on3VM",
  "key36": "5rnyR7Keg6WtpGsN14xRwPT4ep9P8oaTiAqYUohCbXqMkiPe9KcKoShMpAu4DU2DQ9rdogKzuCV73HkCEvmmP678",
  "key37": "4pKwHTFSrPGeusPb1L2i79Cfc8UPxBEoG1dFbn9TSMr5wfp7oTwQp1EA4dkThkvLiPaWqtRp8JmyxgAJVn4hUv93",
  "key38": "4QN5aBiGQEN8j3Voq9VyKNXPTirB6rRHR1seSucpqDp7ZtpgJHFFEZduePCHHLkqy2Pt7M9iC93f24yEEd9AbUN",
  "key39": "3QWFagk2Rw12BfCvKXbKRLtSQJkzQ754U29xj31yGVpKo7cF5rcYXXMD5wvVeVXL9YMjuKPTRi95MUFNyjCrCbUL",
  "key40": "3vsHugX9KJ3jnL3Kr75YNAJkVBNZ5cgn1HMP9sAqtnvAuAfxF6bnPsS7DoUY2vjV18eLKKWbzvbQ2fDrH8HJh8p2",
  "key41": "bdnS8DdjM6ssm9u3c3d8RGsr5MGob18Yh8rx82seiWN3YmaWRm7W4gEYAStNSoBPhUUNx4p7fJjZDWWMEJtqMMN",
  "key42": "37z827rmAn42VKopAT2csLQj3t7JgNavp2F4kAzjdQigWrEUQWh8hV8EhWraABakWoxHvjsuy2XUF4DQ6x7AswdG",
  "key43": "X2rpRbtpi2hVHC8Ey3nW4NoskG4QoBuepHL7T2rk5jd49jG3CHPXdChqD1FjsJNX13x4aHQ3KtK65bNzfhBzm9W"
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
