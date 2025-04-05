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
    "3EeoMfwDYRmDjTavHPjLNkS7sSLQCJiwY8NGxjGfEh4ZSEG7yLgHTHmNS24UDxgET98DHLuuQWjsG25pZApSegY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eahq1saJBF7cU9Bqegb5yzFqp13ATf2PFzyYtLWXz7ctXTieqboPDNWELp3Ze8TGXNNvUYChx7yYCRJ28JSV8G4",
  "key1": "jXfh9DVNeAihE2DnEQNGyqscYqpMb2CKzZV7FHYm11Na9dcvXGKUWVe6g9GhYn1k9qKZTyGnSadATyH1t3iJcbH",
  "key2": "55L4dKtPPPDtd9c2UBnFedjvTsetwoyK8W8SuSLz2z2JgxZHziNJTDk1KRAdK3CjEcQ9adzHKCrg1LzkptTiqZu8",
  "key3": "KDFVt3KuUdPtq4vYQARwqTHbYNMQZMshWaPE5JdSfTeNUYNM2pRYLGXMh72hhW6o1pfzqM6fJV7Wegzu5oPbje5",
  "key4": "2jeV7wnV7cWWEYJVe3rGNjt2yasvxzpFjm3bjcVQQG8as9nq2uN6UrZGxrgpaFNMtWonHxoUZ84WvKjoGCHEmAct",
  "key5": "2J1H9Nxt6dzWPgSAFLrbjmBSoemfFACcPa43b1keGh8WPemRqQsN2mXBXZo5oYc82RAAtziaCRYJj3ZnopPcNSGh",
  "key6": "2PP4BnKbbSxdo9WqosKnFJoRYbrro9CYkqsZjdzZHAVT63SKohx8Mvxc5rY7xnMZGPY49cnVjqYPxtXiMSBkqXHa",
  "key7": "HWFZBtuLHcBhAGn3fVCLwCFEkhL8ZU466KetTajuRZQntgxa825mocmyFT5z94a2W7b1EUkCFdgkMZMBH7A6yEN",
  "key8": "2ZZ4gS8YmC9go8Zg43opVq9Lr9TELAZoosGSo7WXw7mG8AJmho3coN6YkVb2Lcp4DkrEmrZWVtQSGhkyKFB4KqBq",
  "key9": "4FKyShbBtLexjjCwD4urNjYvcUVaoTBFNoEFRekkbV3S5Xn3hKyUhuB9xnHTKXjYCufq7CqDTGytr7oGm5n593YW",
  "key10": "61Nutrx9NxL6VTD784u9rmaTm4MxRNSeWoKNmENRMDCSwFqcNLtfvpHtMsBJ1FSB7qpiMsQAjX2sPVhYGEweWFTL",
  "key11": "5Sk59hW29C2d3V1i3UsWwKLWtLGGVsSepaKm8jG4RCjZPBdh8Xqcwt9sxysAsGCpr3BNRBFjxJVtVqNRKUMwpbtq",
  "key12": "3yzsfNQebcCUkPUZJJB4gBfZMgdqD78FxRV1uU9kKNnsLYR4DaPBcoD9hAX9sKnyJkEjxQxAna7UcqvUsWHNDdFe",
  "key13": "5xmBnCThxGzB3VzRL8hEiFNYpyEw7jM87wTitn4BzHsDQGUCCjP8Ck5HdhmCypRnCwsAJX3UwYnVnoHGrRCmMjci",
  "key14": "s61mVsqu4FcrCppjhM9jnRcn8eBfeRspaSJQpcVTivq3rn7wiQt6wsNXgQZghD9vZ8BDEnhdH8EJtq5TetZmmHp",
  "key15": "5Ms4CuLFSufu2UxcVxPdCLMBfE66XpsSA6SbA2F5Q11Y99pLLvVpzM1ptE46qYkdEGsH8g6r4px4nrWpHojcCz9q",
  "key16": "4A5tcnwACsU23rv5QSyp8N6rdjeZHefBEEVwkSUuCayHVV1zm4o5Ek95BUoLKmZ5rYGmpDJD5h9PHiiGBXKM5pEG",
  "key17": "2H4pzHM1Een4iwjBxQocvwrve2zH1CZDCNhmETFppaRctLGcoEMY63u3ndoh2wFNSatxefpRhDY7ZKcmmjEpciMg",
  "key18": "koX8gFWquBLiv4XDgHMC9VvHGdGFTytV6NLVcBa3N9ELXJA8dWJPhBSu4Au1kUNJScKWaU7V7wLtZt94gUX7BKG",
  "key19": "3aYSCWT9nAsrYFHhfiDBrs25RkKpxcfs56Rka4oxwKU73nZ8py7QWJCeBKQtChC6Fe6ioiA7WipTGQmwzEhg6ir1",
  "key20": "5XVtpXi9rSjDsSUK8hkHghznUfmiU4hV7vBDsUcpTho2wsFyQXBhGHRfm6TznENzZTJHGEqA1Qt6dtwTAhghS4By",
  "key21": "2TL1wFoYWefkV7npLdwWNodhwc6Wy1JUVZZJQKxR7RE1v7gshyHtx5MUVVwtR65x2YcsWrKCLbnno5XA1PsE9Yfp",
  "key22": "48d3wnPJ4ETfvohv3BTWY1t6y15ou7B6VJBhBEiw4RNCpcm3HY63Y7KsAQtKynVsu9AVSDTk8sKUjddDAsKdMy8Y",
  "key23": "4GEqjG4tzEnYcJwXnhm3kPeA6XFYFmRN9mqEUFzHJqkizVokCyXxXgtmA3b4FjMud3JQHvjnXoXTx7oiVimXa6bJ",
  "key24": "3S7FGUqGYB5yzYjmWW7t2cWk5zSY2amJ3UNaufM6D3UfvmC2RYNwoL4hMniNF77sPJaLZNQrExpZuXiLR9ArLXdU",
  "key25": "K4nDyByCge5TbPvtC9kUpzxHLWvW8mqYQiafuWxyJLFLwqi86rmKGm9jWyzvFzrbwLcynGquFapacC3CshHb16r",
  "key26": "u1o1fKaXrQUpGo3UngEXBcryAo7TBYDxyR9rr1My6KbyjzB9T2sndr1hev7CGZXZwPh28y9rtajWPQZvcYowKDq",
  "key27": "4F5fs6NadmUq52Lg6jn1YzqSxda1oRyarWMAiRZUi4Rp6xCBMb4fYAGjCPBv8q9R8VuW4kUPnZy5C6rohRKuZRPM",
  "key28": "4sxkL4AMYWYc4rfpv1c6M979LdsoaKUWPhQGebYqLubTC2sCLpcwveW3EGSzopubkirKJXMrzFj9wypVg5uvQgbM",
  "key29": "3rq6dz5kw3uVoczDmYqzt2BRXWZ7yySh9CCBs9rKsr4vyo81DYFa1z1FXimh9YNsek7bF4fWCajKfoMeTyxwmEib",
  "key30": "3WJT9KuYmiMk64CYfcHq2mQFkTBpa6NkaApT116BRFt7EMT5LjgVMXqV1DrVnzywu4W5zev1Ru5E5Wub4Vq1MfSs",
  "key31": "2WBV7z3feRzKNWv7dQbajFsPPtd9ZdDtDvmwCRC9dwzYxSxLvrpDXjTxAQdNuzG4ALKh6VuE2UHz7P5pT3wmRPRp",
  "key32": "3gz7FJcjLZsTYRQTeyE7z4hVaktNWBbDTFCk1cUXYjSwhmvDr3SqCCpzkXBpvUvAJG4iWkVZALB3cWe5XSQtWJto",
  "key33": "3fpSvNZ516nWR7mujQuFsaZPjkLcPCKdxfYjy2Kx4TVdphdqT1FdhVTDs2Rnz5VESVRq9BCXydHv5ehoS5QTJHNj",
  "key34": "4CFgr4aTVuSVRopt28ZTMzh4QrMyufhwWvXeBH5SLvBAy8FDtb1hLpzppycdgFpxCHVGi9dSkQ54VGc2T8x3c1hn",
  "key35": "3JL23gg7TDXQixJ9tS2DGsZ6KyaDQmNgKHBusrDYLmerUqSzMq44Svou7G9Q4YD4F3rgNr9LniiMD94TovbDCQXq",
  "key36": "4JoUiS6VKN792WNrzm2tfhN7UByMDQV3Vm9WNAiLxJ2ty2Z9SAvfRBKQgpUEh9utebooht4Mvc5kBrRPUku4MeM1",
  "key37": "212KGiybU7PX62okToEXqFBpsEGokQ8dYnTw4jLpGDg52P655VYJohoehnCr5D9TepjA8axJhABLYKs8Ca45rdoq",
  "key38": "3ZF2C7NTt6rL8RLK9jreBjNnd3Cnozz1maD2A2CJ3NMf2Nex7Y1jXet4T43uwvJtVqEpJLibyhyzYjKsAoBeD4cK",
  "key39": "BTvdfGs5sxxqiY24n9972VT179FzwNF8aRetdEYLBszDe6T1oeiRArZH634UDRZvWeVazmcthXEHMiCW6cp8vL5",
  "key40": "w1Porx5w3tC7LHjsW6itDXi4un1ibevk5JgS13xY3ATUDXZ6AA1tA7kE16M9S2YcxFxkNRAkQ9uVZaTAp9ipQu6",
  "key41": "31RQtTLRf4ygzPBh1T13gkbHSK1zrjuCBcfiA8ku8QKAuHD2uXhVqCy3nWpFGamU8ViMUbDYRwjvsGKnRR27skmM",
  "key42": "2X6SD2UMd7oZHBo7pW63LMwDwp9WSYcT8LpTEVzNxtzVy7YNHv4jiG9tEtffhfBveYgLQKKGq71D3mYBPP9b3Lxz",
  "key43": "GMXfgivAV7wSMGvrgePez9CQJpvQVVb8jrfJ4cmApanbob5DmNDMn9w6ES1gs5k4tAFDPDiRnpsWWx18qeirqri",
  "key44": "47UjgEzwh4GMDpqQ14kWsJKMBdSbWDa9NspuXzXdgNahLSucpNHCBdC37AFUL618cf4vpMPpad9W85M3DXan9Mwi",
  "key45": "2D9ewUCQ4EuawXfcqUEGgVqCnc6nx9fzwdNnCL2kqhvt4GVVCKMVepoPe8c58ckcueUnbkMLYXr4fnAniDGDB4aQ",
  "key46": "4z3Qs5DS5V3G3pwH57yGEZUALVFSDSRGDHEcNGkn4hWdWTs4MxQaBoANCz98Q68eJow2E2mZEMWNWgFLLs52NCZV",
  "key47": "3ugLT7qrPTWrdUMSKmnRvMhNtNA4JvMP1oQUCGwgXkbCcbyvTHd1cgzFpiAtRnpG4UyuCNaka9fLg7TBE8PrVhSB",
  "key48": "3RJmynde3aaKkY3dE6f3mDQKnBqb6LzrdHBehnyExPxixpqDucPsu2kNJwVS7jBLBbrKRkLaqszkbKaAU2FM21yG",
  "key49": "5WzTfc7TaAxkUCGPBisqwHQukyPvrVQzRb8CLXEnrW5P7wzuSEKVG65MUaGyRwZzgW2uYdY72zjekF4dnre1wN7t"
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
