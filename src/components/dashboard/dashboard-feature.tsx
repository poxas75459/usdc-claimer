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
    "4ws51S39iwkC2hPqTAjH85DZwGBAr5myTAnpA1byD7Enp9PgTCa13pxctMvSgVNcMr9hwZyNP4joMP3tJiwCTnrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26XWRY4Fdi8DGnDqgLP9BRYSH2FKRxTwFjqFVh9K1UNJdMb4pWVfWv6ngen3nTzU2jHQsAHyaMk7UFys5nqtaQPa",
  "key1": "5UU2fB3LMBvsqamUDpGZ3EL6ktPnkjx44bnD6XJJCgJ4vheULaTrWv4drgk6ev6MJYZFPQ2dJFc3GNiuCnmVfV1Q",
  "key2": "2fqiTxYdTWHnmmEeiRZKzgFy8wqR6jwfVxQHJxwhpRR8puEk5jQRrgkws8e3DtYM54pVxqBiDfZqyd5YTFe3QePr",
  "key3": "45fTWcRFuCHBqC9pQcf5yat3obfCoGtiQSXLzkXRvykMu2oXBmJxG34BGcA7uKFbpVEkqbEpGSCBf1o8uB6BeAni",
  "key4": "3bgf8YYwbqdDjB9XwyCjg9PRp3jmRvLhuQKBV6DEz2tAH4dgaaUKQJ2JXy8NGED9DU9LYyNnBkuSyfXQdVEpW7i",
  "key5": "249sDxuaZ7TCk9nQVy7Pt7MehqyKetXWCQ89zzYgHLSUsYNtnUvtThAuhEEFAtqWNH7aUxx8WfPrLe6LPFNLKoim",
  "key6": "64znjJeqXF7UpZvqW5vauVnv4vgE9E3MqLvUNCqgL7Wf1CvpQiLr5TLW42Akcou4KYPcq2CDLvjfnrVxB4p3CxBJ",
  "key7": "BJDxarcSXuWDrSQLbT5FxJfNviMiT8FACqWHq4avB1jNGcJcSpXDYf7GAifd7zzhJ17Y3Weo8ME12bB666tHWoF",
  "key8": "3UTjFrkDqLm7zeD8A8QsRcAKtYtZYYsVPipBLBm13AjqDpPQ61TaSicRhGmTkdis39uKxL3xys54gMV9zLS6Z9sA",
  "key9": "2ebrUF4zebMn4BsVmf5oNHKrxLMmmu9S4oBgbkJhfGDmMXq2wZDAAZ585ctExj2NPhw4NybHmpCNAUH7RhBc9mDn",
  "key10": "5ax73TngcJgXazD3Z1XkgdfDSbnscppeaxVeCZyVXU7g6qZoABHYbtgjLU9YWkkup5sxnsEEMXgYLVkTJcCTfS8H",
  "key11": "37ZR3FTMTpz3xxURhhtgrRLooui8FLDU5c6f9owzCWkHHvLPiR85TwdVuD9VgVCug4kL4mkHuuSJb6iY9jN8LW5H",
  "key12": "3DjqHwPBo9nZEmLtfhaXZcxyv8tkB2sHsySxXeQqd61RhMnJErJVJYsUKkMSk3B1Xj1STw4BjFJscDjnuwhxmx69",
  "key13": "3rtKnWxJ5EWSedFZNZbwByLc27rGrVQt37RkvZiNH6i9JZmqXAHi6jTgKv4fEnwWbttEf4HQBwt1NxB1gajKJuQv",
  "key14": "4pkYr4yh7dE3aZY8wHPDBPJeuCXbknuFJ2rXx47WZmMD2WgyurXEpqXZJyujesi7apWeGaz6XNghyhiQBorFq2jG",
  "key15": "4x8DE5yQASYgDUra4VC9n6kvSGUGKx5NbzsvjRNdkPmtXNaF3J12aGE85HjQV3KSpBXzzET8cdrbBGZk2wuDZG6V",
  "key16": "4Cv4zDCWZnW9XEpucwbimY1fYLCAp63jctcA1m4RcEZeW5MiWCi7C3rgruK894nUirDuCdjAEswYUdtQUSErzK24",
  "key17": "5ttMdPBwNKaR2fvyLB3sAuRuRo7WuuTV85VFDGJfV8sAaLWEZnaw5YY89A4fTHr9MFk2PerWtLmCjRtcDGXYsLxR",
  "key18": "2GShaEMentKPcfBJ8wsmwiqpRGUrZZ1JnUvAnR62JB1mo2GUuD9t3wpbA9rTMXiHbJ63DjNF3YiRhp9uADu6RWCu",
  "key19": "2y3t9vU1pXKPCmt4pZxHd3iwgU67vAhpLPvxvyCvm8dYVjCLrYPLbQwicpKbAnEyZCPxBTS66LQorx6MTopFnFgX",
  "key20": "2LNrbWkX6FzZEr5S2uuZEx17NZGrbcnCNxLUEdgeC3YpcmJM8iAbRA4RmA74WHFw8SDbEztS757Usb3Mwqh7ZJGq",
  "key21": "4ReR5LhZmkkQqurCn4ko1dMneW7Fao7otWQ7qeps5J4aMQVxcK44nFfWhkdXfeUXTbpoSWiLqCR8LNK8G8QeNHhu",
  "key22": "dRvHUTGuJxgvXNXg63Quqv9RKoaFPBos6s97NF6CAg6gaFzMxCdemrrA9rV1T2D5szXkEzZF9AH9ijwCuwNC2a6",
  "key23": "3yDfH6hxy1CJKVvLquJcjpJJSrthCJmzHxdAm5XFczsV3MKCgi1rWqUiMvSdpqMhCYJUwk5PhFMZhrShX3wMQSWB",
  "key24": "4vjmPaTNruFFsTLYmGePCYXJsqmzrDbHNBzsvbYqogMTchbPhAL2hKfAVtzd6usfKfgrt2nKrcxNMXE676ZRcU4X",
  "key25": "2o1EwkBFEPPXto9i6SP2VSL8AdfYrjEdCSvoFQA6jW6KQbk7vQDG8acKUt8ejXkxD858sLuLwgiW5FpTugeiNDF9",
  "key26": "4KhiF8x8wzuV9LFFhVYnGk9M9TmNxPcWZBTSJUpheJyyUVccR6WakqN6sP9TGFKY2r1FCy44G3o3Bx756ZhY1jWK",
  "key27": "4V15tqEzvcAmF2W7mjDhxyszWidtXSVVCKn1dCxyq5gASPBY9UKeeqZuBrNmaMGuuex7c8ryztKm8ri8c2oPVFXb",
  "key28": "4tNhF1KM9rE7DF1VQsQW93HHycNgpn9S1EJRSdtrNKtvtkv1Fkc9qhjq8Puty9pHE5ETwXDfNSvrF3sYg7EetL3F",
  "key29": "A4v3LWwy7B72RvkhKiD57nTcSKDKupEfS6tFyF5Nq8v7AfAapLu99bY5RhHoGoeUfykJZJxxYtoMrtdpQ3RFhyE",
  "key30": "Mx4YKK6xDDh1wbEfduQBXTDypkSmPF454G9dn1WDv9gpv4M82KR9taQjpf1XeJwkfnE6y9gbBFzT937eeHQHUof",
  "key31": "3Z824LZDULJ2YdpBzQNrmMjfGdWTBft1WmKyqgDeTPWhPfJjD6tbcS3s2FxGzYYPgittXnaVwgpKgV2Do7HsMAqn",
  "key32": "2BhaNZdawDEQnGvRMmzrGnKdfJuShGP8AF5MDpQ8zbDDdVZTyLtSUwk4tsa86Vspqyqpm8XF9bHtLqfewwTweY4j",
  "key33": "49xTfeKUhPnRkPWdKd17d6YCsXKnBkkBVHK3rV1TukbYA5pqHYmz11Nap44XocFPKsSqHEftVjts2yzqLGx3Dfue",
  "key34": "2t5Yk9znN8cqAqjqimG6dNbHApnFpjUqR6MV2RU6nFGeDpVM94T2WVqwgkDJdcxa3nf6bVH1db9kUHhEijciz37k",
  "key35": "2vLMnPRZbEvjt3q4UGmcf8ZcDPqR3pudwoqz4VfTBGJ9Pn6J4suBu15ckGQSW9hAdUCwUx7V2XYt2EakL27CmfDi"
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
