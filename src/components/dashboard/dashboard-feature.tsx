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
    "4YeYr59ypRai1VapG3E8AEBTJvJ7YyHPMUYQpshVR1Ec5aHxrmkvsVKF6bJTyDTYjdYkP4APDqM6dQtSDyKhUvXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xd3rNseaMXjMYD6FoewPwovuxEm8CEe4uawRnv6aryAMq8SabEDv1vskmtWimnhFcqhwHfwnrToRXhmdSaJDcvz",
  "key1": "51dcc9tcDPSXQP1nWPhH5ToWcb2JzAR6wtZpHGNCpepejH4LjZjofDmPbpnGYKvyZo99RqaEEox7jD5pA3DGkhks",
  "key2": "5cSqmgvf1qQyJLMUv2uAsLTCffGXyixQZnYHQMFMVpiw8buuhmRn4tYiKvyxg3fwnwb8MgCMJBTsE8JJdbaVypgZ",
  "key3": "tPckyBL1ziasV4ecLpE3qk6tdtPVsu85d7w8PG2YRKuTyCXGX1FgT5seGR3GpS4yDR8VifTcGvwsa9iK6eGaxH4",
  "key4": "5oUzCRiBkDQ48CtbefBbQ7cVNcJBgGzDu2evwu2YB6RNaitABSUx45Eg2BgT67xsMHrzQ29uctJX4CB89SdwjL31",
  "key5": "3XBC6Gt7F8Gv2vi3psWAS24ANGWYUuqjWfGRXNUorHpSbXL2P8HSwEavdfngfj5gN9My9pUWX2pzmZtbB1yVNXLU",
  "key6": "5ysPtxHxP5sn5oL5qyjf7xxJwohHu6nM4W5i9VhZPjjiWRtmyjFQTEHStETLJVmj1wdJ6QMBZDTtDP43PMwTt5z2",
  "key7": "2nQhvG8PZ1Jw4yhRDXTcW8SPngHbW2w4PRNRYRXZJUQtAjjxEgdFfmdf8zZc1zQMmqsZVgKom2DrAmT1Q1gKGjZP",
  "key8": "4jEW8DW4mRd3eMdrR68DvrmAKGtTPSdPvShgBtH9g5fcrMmWDwmPuh9cmbpxGobYiXm8rwK4zcgJ74GEmZQye3rp",
  "key9": "3F3RbuAxPNgemtd3qMUWbRamJSB53RLTB8m5SizPH1CG48RceAGuqxRNVLDnuah8vzY7wE53XnKgLrdY6PfxQxFo",
  "key10": "5nvrQkzoHaG6k13fXuEyPpj6QqeXYrdZzCkRWnXF9tEwGmYVzgFrSoANyEL7648NySGKTL8u6ZeWHczzAYWmBchR",
  "key11": "4Et2UQaw2gCWVy5XrDmyLTyP2AjgzZbJYK4X1VmTxev2euKe5Dcj4TAAGnJyhw81gAu8DFWBFHK1TJJZS9fT9viA",
  "key12": "51SY9yyvysGxRBWXuMZVEZmqpXXev2We1JwvbbQHyzJcY6VTp2CPHTHPfxabJnfJJgULbBLcD4auak4b2YhJmLmB",
  "key13": "4XvreUAR6zwBTvbJ594R5FZY2QgSDJqy98oiVphZCvuTiHJU7EgpiiP7rn734oNQ1tqeyRwSd4PViz519TWHdo6D",
  "key14": "Qe18diyHJ1GWWDBxtzGqUpMyYdoeyDmHc3e5xRriKAru28jwDq9ynmYhfzUcjYQqTDJdRf5rR6AEsd6pJdYrvuY",
  "key15": "3rtz4Tve3moEqdnCnBQjW56J7WXtC4a3N3UqYUm3PmnH48zw1xwXESXw2YopzsAWPbZucGxQgidc7BMge2v6NQWy",
  "key16": "3aCKgFX3QF4d4L6ufj1WWuAPjRYZpUz8gLZw4kCTK8yxS6pVjkbQ3uh4csMDH2T4NenS9HLupW5fonGXUJufy6jt",
  "key17": "3U8BoPJd1a7UAoyWZYPhpckoKqpDqBS7FbaZEPYu2V8igLBhkfXtrx762MTXkT5uDTUeau7fe2QaehMFpHRcwDLP",
  "key18": "2URfFiPZeLj1iN1YZBBgFKCKHL356oHb55BktR2vFSEzRjYF3vGpV8Eji7sCPmdFFRgbh6HokV8SG8wkYJKARiFt",
  "key19": "2KAHNxZDcsx9nS97B32PbRfBgaN3qA8DacVwSzXJfTgT8mVojnYtTy88bXEqoixWrCVbfH1gsM6WTdEfvTfV1rVk",
  "key20": "517h3tgde4bXm7y5apHP7gfvksib8N7QubCfvKHLdF45s8rSCihpvPu5MUjEpNLYUd32W71CT7jBA1aPEsdx4xS4",
  "key21": "2vcgZRuCZG8WcNFGqfozjzvvAko9oJCRkoYHu4BzqV5kDcpKELaPMBXMi3SyyPVSkrD8tWAx8rAzSagzMs4XXB5G",
  "key22": "2KotRD6XQsirn3h2qWH2s1sMx7VBX3S2oxJVftHB5fwUSGjLQytwZ7KaoxSHRuckEdAqpQ4RWDZP8XbtJZHN1p74",
  "key23": "38tDZe3KDFvgTdr4usrnys5yCGrsQgXmxd1uWUnpyz5TeYaP3xxbk1zM4NLCjCXwCUhm5t6zJm3ypwjXaer4QWV3",
  "key24": "RiFhjiy3n3gCVGJWLqgeqV8eJocHp1rWTw6RyaXi83KaP3jUvGxhPp4f2DHH4ntdauDWR9WtDZjoa8CHsx1ofXW",
  "key25": "3FCXmpZCWcpDBtdv5w7oLSiRcBZHLwySm7eewwEXpH4kLyciwDE4fgGEVcaKMH66nw1aUQPPgaZY4kn8CUNKU8dN",
  "key26": "3MpEdJMTqXukJM6gmg8gr93nP2wMxvFkaeGWYCEKor6e5DzoYRvLQK4ews2jYH3UEnjzhgqvskoDH39kS7k9geUT",
  "key27": "g5zUtMz7yFoCUexCy7zPERE1n3bHs4XRCsifJkLPJr3vutvriMZTeQy9eRPEvfGag9XGbiwHvjrj9S6AmjvctRP",
  "key28": "3ss9JR7Mt94D3aqSctVFDGDQziyVKHUJqYN4SXzzhxC5ZT2FMu7fNKF58WsUzioUBsrMYar86p2eE7oBvJq342Nz",
  "key29": "2sQFEoWdyPzWiAYDStXuw3sgNnthD5TYoDcEuZ8VMZCB3h6Khnon6xmztCoktLz1mm7NLQ7UZ5Qh1rUWrkkxY8Qe",
  "key30": "6vuXUbLNXiHsmoLhaZiJmzT7SZg92zoEi2azNB8uHyvv58DxZsBzB1FMtakafGchpd9ifGTQMunrPJxoMozA3cb",
  "key31": "62QwvRw42Jr1fePgFVKX7xTJfs23VFLdDJXUNHZQE8vpx1dUgoPgMEv31RjXBdbke1yQ6j12aWE9TVe5qdaGW4tA",
  "key32": "gP1uvBRvb7wmpqY3Pq7Sbehzi5vyEivJq8exraLS5SJBc2hhmskTZuLKXFVr2rLTxse18yk61FzKL5SGaX6p3ae",
  "key33": "3aXYtzQUYurYZWJod9NVaZ8hnDSB3VoBYTdJ4RhLjTgpZXoWWw4DUzxTs3qiqDDm1UsaMfJsdNFGDALhebbHubjj",
  "key34": "2WVTjVySHLAc3MqRKNcVKNnF2bjBDVhRUGLg3Jyz4z6xL3joiheixrxcCthPCUqmy4FXarpicrwpJCSkwhQgKPeU",
  "key35": "5KnWJtY8GsUjEPBufduReZZHsYQZQctYHmisE1dVqjAZYBMxTLyPc1bAzfAFY1Z5nDgqGxsGeRbCLsiX3Jtcpy2J",
  "key36": "5CDSHUd52R3Jda7eoBwXXuP2H9xmSJ64QMAbCLpet6qieRXH4pfckksVN1NRby56a8Quv5twATX2KKQb6Mx6JeRB",
  "key37": "4xXSQe9QDp6PYCAZCk2AU5wZQHdZkT2ab8MczDY2rzBxWkg3GZWhfQLKutRDvEYNW9TpXFaScZAhZhVXcLjb8Wf1",
  "key38": "5YxEdcfmVBfMtWmt2CYaXjJY38gn7kVXfJ1Rk9xJ3cDGCumPa6yBCmj8u3xQ5qkA2CnmCcQ4248NtRGr3qBXkbaP",
  "key39": "Z7wzjgTiCy18sC749YMfrRR237GB6whDp8tHYrrYZbq9VVuPZEYzfna4Nd8ZbiEgjTUbCp2fUD2cd5nEfHTDzC7",
  "key40": "3sWvYh3KcwZQJBoNsaG8YsrffKsJRkPpsKwLKsnB738C3DPyGqFb7jqThacoHt4jzwzVH1JJBeyoTEuYAGhkNMMS"
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
