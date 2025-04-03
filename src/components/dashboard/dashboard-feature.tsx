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
    "5PS2BpVABpFrkft7du51QBtSt1bk4L1qbfCNnGLDxdMTqbvtRLwXVbQf1BwPBYhUX5LFz4KecfzE5xNMqE6eotNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FguQ3SutqbXxZHS9kFU2aAAM1SmJA6Tn3PBwNbixdetkVeLtdUytGHubua5wdsJnEec9VFnZzWEmUjimCh6rUni",
  "key1": "5bAcmn83vekgJJdjpCX2fAyXeHJgnuJSBsDUhnKmKcoyAPMGQm8WgpuYb8U36WqS7PPCoJyZb5t7vH8nkuQuujnt",
  "key2": "3rdXKmBUocjXiCXi2hMFXNskHWuFqSgMSkwHr3mKXNakgU95dCvE8socptBghU8RBumkScZCFstrAS3fggqBUYgV",
  "key3": "WUjRyf9AekgZzyHaG43xe9W7JBLKpK9N5Mppc8vEiSY7efLTSxFc8gpskofQXBJwLmUDTowTESwwAK6YRVYj9Ym",
  "key4": "hQwkeBFSB7XQ1URLma1wr28dRoTk2kj4CXiKKbMstqwxXumdoC4husLRNUS84DLmnxvf56WUkLpceBKZ9oKn8mb",
  "key5": "5a7DLxz95x9uVF2D1AhwsgdFtPDuQEX5qNhC4uUYEsvymWRunx6KPy9gNMAgiLK7PZanEaFGuaZAfoZzFASudgPg",
  "key6": "4oZcHfxoaWxUfb3Mc7cXNHmUHncL5aE2TfpcUirQ2r5F4trBCxzRtxhxT41h2RQmg4sGRG2qKNWz8o17mJQvNnJf",
  "key7": "3DPY8qpAgxNoxEPkm1E2HKjiJBAHKUCRjKcRAoUvhDXLhaCRA2v7x1MfdqzUTmhMJ8nKYST3LfxYB2V14NnfEPmm",
  "key8": "4CmeW1v15GPbgYHviPWiUTViWerPoFBqVN5ZBjoB8f5Cc8WGW8UFfpMc9qFGHLsgonbLnjyf31tetH56J5Sfi6Nv",
  "key9": "3xRfbwtP4MKfp9YZ1gxkuCkRaA2gK4EcCmsyVshxQQVZDnzXGyfDkx3YnHEU9xD9SPh7SvWVnW6GF9LvFhV233pM",
  "key10": "4Shvv5jg127rL3bE4zKv2CpvdGiRzeYNGKDfiJWnVudtg9oqBJN83Gn6JnnikvAJ9WQMsJgRSpyAPdhcELfwGwRn",
  "key11": "3gsB4CzXWbKngMCpFkkJGqJ4a4hkYmryWai6TAncUNzhBXt2TsazC7P5z2RzMDNXC88MhbieDSeyPtCbzxw2Sr1T",
  "key12": "2Ux5jpWjkWyA9SL73cT3sa4wV3LczK4AmF3aUGgfoWBEqiudm72FJwiGR7RtGz2QsfUiqWLGQGSPbKBPGBZSaDwi",
  "key13": "5LTTH6G3Z2w7wQcJqWEmeR5ocMTEEngtis4vYbqvQ4Va4AP9CB5zHbDjLDQr3xggGXJLs9N7xP1dqBXKpekfoaJe",
  "key14": "2fLbC9DhDVNZVxnQZXLuNiZKWyd5GJBtPTDaRPS9DNb42YBS46o8J7xRR9WK1fiXFRHhzmxHA8GwRh2w67tVTNG8",
  "key15": "5fqfYEYYVCDfRzxCEWEQnjzPBQgsxMb7kwsiapf9Ji9G9KGNr39pRub8cyodwebqNurCVTXEux3qgUMXeShnnktN",
  "key16": "5MHWHWYJxRrEHdvhxCcbpbGVYoXXekkg62MvW9zPZzmA3JWbwLU5D6qU21n22E6KYYnbJ5FBBaZ8aCy3KmUN62pQ",
  "key17": "2Y6SxoibvrSjpTGqv4ZY4dMgAGR9nS4yMshvNiHVDUNapokysaKQHSLsuEeKGMy2Kxxv7aWyKLX6Yuigntt4HYbh",
  "key18": "21JwaqwfV3DqXFSGiaVWhTb2Ag133drtotACa1JtJAqBfRtszfseb6HTsaW6YjjczWq9gcRn5aY956QLVqoavNyg",
  "key19": "aawVJBsXayEijqHjRodKZF8ezGbrry3ZVHq4FEKphCmzH5BZzrnXMdFuGVP3y7F6smXaoQywBMxBrs8VU1RbMeA",
  "key20": "535yPiFFc68tJPVmkGWS4h7eTomcn44TatapwFXQ2jq7LY8r6ibYXdBxFsdwa7S6L5HrXkd9tUXsGBChtFvvyEXR",
  "key21": "4PpP3tQJyGsWiEhYGXPymMG1wicMLhmaSDFgtuujjU2pWLJ6doBcsuQLV3aA6wTnxWZJUwhYbFSjkqsjfev5PNih",
  "key22": "3JRKTaeJqUofgAGsdgBQ8KnZySDtmkHYHN4NLNPbRRVUaMAVs46C2rMF2jA9PRhQndwatej7Sh95cCnuVStsTKnY",
  "key23": "P2iYEdfyeQS7ej2Pc2dDYJhk5aqNCku4hXgkbWUR4efcQyCiSBEimaF456uWPh84N4kmPRgKhSgeT1vMiJjghU5",
  "key24": "2C9md1GfjKAygJTxAFrKBVdhR4kJpG31o3ztEns7HifmB486q9PJMfvEG5Pue5qLUM4nmwAZP9aBZRJutU1wdL7o",
  "key25": "21q2V1WpX9ddJEj8vsfkuD7tA1idKzXt2WQX8uUwNcVzYG8SEQCJ6tQzfMgXcDi9hTiGN4NoNYKG7kc7W2iwZsXf",
  "key26": "5ZLH5c1GKqUZgK3Ge7JRt68v6xX2oWx5aJqooBvEhPaErFeX2SvSM7TtHW8QJAS2dLUVspqKVLPDiE9dqVtSCv6W",
  "key27": "4Lb1cZXhiyMvhMAMiuM6m2DLDwLuMDXABKEmGa2PgpV7SqqEQWT5ubeR5LVv8WQSYZMpVrTWYFxP7cWptAw9um3Q",
  "key28": "5ZEPbsQ2UxYNiX1KoF9TRfWGKMZWvYUNTMMngVvRYS7M7D49cRiDL58YStVcgh8EkWEGBciUdfNFqGrUYEsVeyVt",
  "key29": "3imZ8EFTpPh4d8C1g8LwjRGQayXwmng9KMjXqU7GuXt95Dbnj1DcoYaBrKSQpmWMq129tKqktccDXhQcJhy4jwWk",
  "key30": "5LJafmNRsgjcY4ujRW8yQ1KYZPHiTar3kG5MvbbhMpPPk6Tv97jzUss7rzxRjturXcC3Aor3mUUmL67XqQkKusU3",
  "key31": "pwJzEaeaKpiGFuFKsN17yxdaL1ZPio3cdvYbJu5AzNAYj34MrQmdtdYuJrJKPg2upFoXZC8Ph9enbnYJTTCxwET",
  "key32": "4oPjDQzUqM7Hv4vo77hCvEnrk2NmW1deviFn9NU9ZDgvztiyjxeBn6bUzPNBYb3ptiLzj283wDdynmvJL9tCeAy8",
  "key33": "dQ8VL1KC8RoykVWZXjinaQATc6oGzHcMge8nK7BVy8yzPoGKFMqBiBb5Pb4p1g7LyrDiMetTC5Kj9fYWDFC5pYZ",
  "key34": "5VEU99xi2k74W63buHpHbGNC9NhM6uCB24cVpVcYivqeMDbXnAb845ruNkUL43vNd8RMm7V4cZVv5FJozjL9tBP1",
  "key35": "59DmWRnDNFRrFbuPpA4obnygjRUyGwki1DgQtA9fkLghFTzn7SBTPP3ZA8Myti1Upkxuqi6bdjtXQhF9Zyp2QW1B",
  "key36": "5dhczPgWbboqhc8PG6TW4qca9TZiYJ2WDdbhE4Ej3MDqBghTYh9fz7cxj5BVTBJySpobF3Y7gGu8pG3UXEBJym9z",
  "key37": "2XNRLJKo4PRvcasQndDqAg5WB7g3uEs9Mgrfyhq2BJLBF56bnRoMNZ4MuipSvxLSxqPh6fERACif8BA7QqJgrmAk",
  "key38": "xoBN7mxnzck2A8majb6c2n2UGGxFGrP7f3jku3wfDxZyeV9oHCPkoKTqH41JaqQe6NnHwhNZfyJXoBthDUb3117",
  "key39": "5gfWDsG4wX4paCJxiQ9EuAVbESqFXg89b6pjkypDEXw7LDeYA2SVbS7J6iCiyZy9JLk2XKhugeQ2jGVyC8a2GtKz",
  "key40": "4pTKkqH4WyTw6cX2tzEbRNxLVgk73YZj9k8G9QQNuk2upUyX48Rm9pyPCxnFfsufZJxDitb9aDAAU3e36bJaM2ju",
  "key41": "4DVZsLkiB5vyazP1p9vbiS3ve2G7gETv4RHt4F2VqKgk1hunphvUwL898Q5JrTJx6zXVmhF6S918FXXkPAZPZDJy",
  "key42": "fskdFh6n8siVbgpTnV1D61iBPaqDDGyxULDqr1zHntX775cPjpQr9hrssLVFJUgjFpuPeqBc7TtPj4aX2qXKLhQ",
  "key43": "3LWZyxdyubSXaPRvpspWsJMVtJWmNURK5spsWTpoNo8QMheMb7kTs6WMAFvwjG8FZw6ouQWjhjbdgF6ZpyTKbDKL"
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
