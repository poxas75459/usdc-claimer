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
    "5LyUySz63nHmDERARB5FEv78iWvSbwmfQeyoFyj2G5udgCxoEj7jDubfLttrCWk71hooAZYDboJJk1u86vc8r7Cn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FGuynXAFwXhwfsJhBVZn2pgAfDraNvyGkdci9aUqav322gesZtzzbuMyqUNyzJWw73QLDdB4Ekf9FD78o7vhA5c",
  "key1": "d4i4qCR8Kt1eoUB31BQsmnKRpfyfg2TNgG3KXPsRRcaNcWumo3UTy1jhcUFQAxKzovoSUvKqSMvjcf54PCKKQnr",
  "key2": "4mp6xDTSjG5HVReNiKDwANGHBLhfYAfvBkTV7zR6vEBs6CvcksA2oFFPtZG5S3CvYqx5e9UFCHUF142n9CspbvxS",
  "key3": "4TLVQHcyCZLAHTSSx2Qt6ng8aN68N8KEkeZDunwLnq1sNi7XmBPAtybCk2FmU72ezp8gKzyv5uajgB163AzEgVkw",
  "key4": "2dY2WQECThFSdqsckEmEYtSgBqNRtANcJi4HKMeKfLD1WRbzLMnYD6xtHD11Vjv4c8hXXPsxRwMLEPNpqaFHcZxh",
  "key5": "2s5szuDmvbnwaVSKFH4xY4HwNGxMKJgoK7NzQNLLvQQTmbfAMwgtPWRPYsmuojih99vnGVh5AWXNchcggRczT7JD",
  "key6": "2hz9HUrJC8T7DaMju9dRRN8mGGWPHjU6i93fVUgcMMaBWhcpCY5DsNh3gMy5EMqGGCA8jbwCPSngAE2TRamCbfyY",
  "key7": "45cZvhd8dmHE4ke5nUZTMxqr3oCupqr9dfqyAeRkzH1vrfjhpPLLWr6rZs9UiyMqjX3ReXMjfvFWsyyrPXDnVSw4",
  "key8": "5tRUjuY9kzsTufKmZiTeF2qzFQVPX39zQ6EZd9bdAiZkcp1E6vSxEmwjXQoyMRpnE2QNib4uD2ZwpE8H4XMy1NC5",
  "key9": "xxdFmmUKZXS6JdWv8jg3TNXmmQFEFNZwMS8SoCbZ2JUvkdDcEUpSLhnsBzpBxYXCGFGjSyr3vXbanugPenhsiMW",
  "key10": "3FTSYpFS3u4KTxG1EwDZ3hX6LJvtTHrE6hbvq7zUbcVjgpzvZWpW5Xc3gdmhJZuay5VSMKbHgw4mb2uj9fmxFo8a",
  "key11": "ShJKJ4rKvsC2DGVNKJph6E5oBc4sn6SNsoPmb7FjK8hXpMeS6FJeoFqmsx8DAAMAH3SSReg9BwkoMvkEZnGwP95",
  "key12": "279YSFCzRGkwZP6yCQzDgxfFeWFwR9hwPrsPChx9VxdqbGhPRy4KSzGd95v4FUHrhxzHUV6KPGqS6VFmFjC8MZhX",
  "key13": "62oGuFiN6e3fqAKJbNg1qV7yZn9gSRSR1ot3MpKyXrGdCvJE1ho9JgGEBTAjyGfDGeAWYceMW816V7RqPNdp1Qhy",
  "key14": "2Y4mHiTWsyDmNRaUFTfJ1HhgHqnfQSX1u7p71uoWbLuFXeFZ9zvR5rvY1wTuasrmFifAE736nRmMmGQQLVEKnCY5",
  "key15": "DXkEy31UP5yr1kSVM776iXYcDzTXnYnCatudcsoXy3ZACWyH6mGWgrTdBbAk4N41tAbZnEBNuC6dZ2q3rttWqbP",
  "key16": "5oAZhiwtwMFsZu2XRdb3aPgRAw914Mn2oi2FuMYdYbSytxV3KgWHsbN8Tgo3E3UdCSVvmP4WFgCAoxq1FLMAFcKb",
  "key17": "3br4hZKfqQUfmetYQFbxA7C14t4iF8o2kMCRF9YySxzK7iKChRZj5VebjjN2wRivx4E8SwC7wuWnnxD8nZXwrFTS",
  "key18": "3DJpCzVWexxvd6aZfpQyyZPMMu7hrVj6m1mQcAnRzhod13Zxrogzw4GnjGwmdGr1jQ6R25WegSCZrRdoEE1rydqH",
  "key19": "3voPBGDSUSZsL81SxVC4AEc8WrWcYP5T5JVpESLsmKG6VHwBA5z7pyDv76dc683h1Ai7TFoLGnR1RWV5uMyiXc95",
  "key20": "3mLisR3eXdJnNnPZuZN8VJyKbRMYGKgjSjUy8gRm8NmxsaxLZuAqR98E3bWxZxYWAaoc7BWp3tWWkVKsYjGhm5w1",
  "key21": "4CX7DEcZ2aqYnnGP6YMiHpC6BAWwcepUi6iXQVNy4xmwBTCF7Rhab8x9rvUPJfCeB6M5B3LijXfZmjhRMBNZmqrP",
  "key22": "QoHmmNLmzoZobbQBR1V1F72H1wUe7dUYeMmovkMf9LtrWEDXP1oEjoqGBjvd3W4xQDfEuuLqRebbKR96jhKegnZ",
  "key23": "5D58v81tgcrWxk7z6xZucMHyH2PpZKe2tah2ebdFbtsZNQP9kLnM7RiJzdjyznXHwk8ATxz5cov6tBUBphLkqWDw",
  "key24": "2VF8C2vgyHmCoKf28g8Uc6Gs6Wygz5wFS8kYKZvDtMKu9Dopk8qgok2WJmk4JwxMf98dCGgsZQo8jxAfp62ntfSJ",
  "key25": "5p6aQnkFfRZH9ExSRRE7ZHazkqie57QGnRin4iTU8Ebyqr5KWLz1zNM642gJcZnHJBYRzo9M1db8EHNNXyuvd8x9",
  "key26": "64Dsy6tvpggjaZSdvLuL94hCtqEQR1bBpC9BNqNhkmirEhA9uodUKtTi6xTdwkXecyBKKQ18tz3g85zCHRBCBqy7",
  "key27": "29Q7pjhGHNiEXfFEJ7WNaoZYB6EcoAym3e8da5f2tSNRUY4nio6nyGnbkmwhx2aAkMEuBZ9f59N5YFuphQ2Nv7fg",
  "key28": "3pGE8jNBstNRR5XjZ8B8C5pq13NrSkfC3tLXKcUuqXTaCjq6DNDRV5JbqSkwRA4LF8ZNN947KibeLz2YVPHN8xJ1",
  "key29": "23TJoh2x6b9kwDY8YwFUuwaAPuWCnLb1yPnujTPSEeTEitACH4Ui42acTCGCJUqwyiHsh8gdrJcXCqds69bw7dSL",
  "key30": "52Et6rFE8CSodVdVNp7h28fvhwzW2btpTcuwQcfmG2xuGHmAnoP6zro97tA7f5Ksb7nHAM9c4ezgs9MjN56V4KCN",
  "key31": "4CNVfcwDZqitjT822vyDNpnwqhuFGJ3Ui6jW6vuguayQVL9qWPEEQydx1C2hoSAk8r4cwvvkzw6koZNrxgju8K3K",
  "key32": "2WRyRBArNY7XmKTBVisEtZeFpUZg3f1ttxHgDCB6u6Pu73fXsHBk78Hbby3mo8UutDXcDjs5UFpcfUDjNT4bV5kf",
  "key33": "3AfF77wKQvFB7hdv9SrqrqBp7CB6y5bP4hMHPpio7hHxQ1Tgf4h9kjuEVuYpC6uGjs6Y5V2QfXFW557YvcdozLjE",
  "key34": "3Lj8UaQvQCLNVEVmghyptUzXXaduXgzxCpj76kbuYxaRAizLd3JBzMjXnKaVX3V8jMx4wLR8GSjseQQnPVfc91M1",
  "key35": "4pXvvtzVS8gyVGg5n74C2hmiC4eFtkG4XXrgXeXdE33EamLpRFBhWkCDeFVLHPx4TtB6jw8hDMX12X4mXUN23teE",
  "key36": "2dA8sPuskZdULNcwL5J1nT5nwWXddAx14JY3TSzZhm9c4TKe5xDtnshBZ4DuLYaG16LS7xbANhNEwTPDLJ9edbe3",
  "key37": "3czFpJbZGVJVQgk838L6Ce4eunUcxqsGZodiodRPBxWuVK28UozYKkENcje5ZXghwcENzPMb1ns6gzZxZEcBqLSa",
  "key38": "3EW41otPmsrmfPieHXmT4LEHcUQpCLGY7tepqhSE9aVuBXJJj2hFPhyRs11FXc58kgj1BMaYMCT1ag4NCWCkD6Xh",
  "key39": "2gRfUKeW3L61fDW3aFH8yUtS6Fxk4CwYpwcVhP4Voadkq9832J9JYfrS8c3u75dCBijBcm6TBx83Wexz5twf43eS",
  "key40": "5h1auj2TD68EDu1wH53YcoWzcciHopzbTFwT4E9R5DfC56qHMPYhHV3HrqV18xnTAm2ALG4pvbjMBrqxHzi6ze3h",
  "key41": "55zcFuHe1rh7udYDU3QNm2XBodQoQPw879YKv9awk6ti2zaabVtMqystmYAyxFhD6CbbTuCdPatL3DpHisTn3bMc",
  "key42": "4Xr6KzrtjN7XEoUFxvBbV6jZH7QPJocfgqvtqntR57GyZ9L28pR7gNQjAnxijub5RooiFZ1FjP4pQnuixHDee8fY",
  "key43": "1LS4u3pYPLJXZRBbBU95HDbDu84QM4CXEykokijmhbS7tiGYQFGcJyw1sH96YJetSEpQkybcb6GxnKoZGVLQQUV"
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
