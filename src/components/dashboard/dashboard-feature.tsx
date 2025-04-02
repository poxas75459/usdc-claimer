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
    "45AwATHATCnAo4NzKTeVVTd4qiKWMiZUYEwt2JYqvhmENKdb4dLC6ssJRNRUkCvz7hPPLU6USADk3JdYwjNv3xq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61cmYKP3grYfjqF7fEmcurWFMrsuYjj4AENuE47aob2CUy8YK5YZpgtMA8zqV6LHw9bLxafx6BmNBkk2aWXDpUED",
  "key1": "zyw31CfN4SfYCHpMTgQycGriYxXGkSjRYkNHyDs6eoTAy9iBZudyZxTEWWx6H7o56BQCgusAktdcNVEPeJWFg3X",
  "key2": "3AssXK6aKEDZ62eWK82hUpA4KJ6UP28kkEJDqZ9ZTK5BvBWeJgVjZbFVA8oiatGuzDQF4ntHNfyYm3meMM1jN67S",
  "key3": "PoPuvsnQ98DnzwYBb6na5W9ao6mdGTdkFBPsN1HccQNHS8NXR64d6X712rdhwNFVysfiUR3kSQvZVkyuMrFmwWb",
  "key4": "5GKUT3QTFoEG1zZqRyz5vWB2FU7VWD3BpBoLJJRt4CvvbmoSidFVPsW67hxGiaULyJvvHE8GDJJs3mWyUn2BWT2T",
  "key5": "2J4sUQ6a3KWRa8h4z7rrSiRmF7z3pPcN4JoYWiA78S6bHEcScoKp1sEui8Ey5BXDnxt8MC4veJm3sYzRyPXcYjYw",
  "key6": "2u4zsE39uU3GxL2nWSV5bcMfgPbiiTqCXykXfodPvECzTp3HM2GxxXravtB7SjgAwXCH2mS4JXpvEuzPToTuCvz4",
  "key7": "76heao2x9epvNoFKf8x9jZ6mzAfbpwCtzLq6tHjA2Pb5g9cTkju3piRA3YKL1Aja8J7Fgpw6zR5g892qe5VwzBN",
  "key8": "8A5fsa1FzrwTxoJRxrRGmMNoUXnq1HcgdeBDsnei6bFZptY6D6ADsCJKvCd8efcpYhmuxrHCnitaf7zPiLPD7ME",
  "key9": "2sdt1pn7Dh8vGn8EazvxY5gMbygsND7J3hSzbbxcTeQSKi1N39hdHVknkiAcNSBM2jLDc5oJH87zynNxspKpANjB",
  "key10": "66NDWtXWoJeyH34GhvSBoqr6bekGoL23nMzxVZ4QWnmxckGsnDDU6Z1YtkUQAW6q5YBnn5pueDfj7VHnJGta1GNY",
  "key11": "5c1CvTRndyKXn2WZ69ecAfMRUsKRFcMjA4S1TvUXbXDAcRuzUJdTStagfSGkZh3bX23x1dZJ6zLnj2AhzG1ZEMj5",
  "key12": "5zpc2JquWMm5BDKCR7AGWV6DZSYwUKnQSTAqCnLZXMXVVudwhMgRXugh8uMJCuKQofJJULqfAYXXbJDKgSWbisdH",
  "key13": "tj52PMDYnUC9xrL1kxghLSztHFHLGBH4zAb4npHfymLtHFBe3vRESo7fxca1S52Aj2wqcUeaU4dfwLLFRnoqw95",
  "key14": "24LjqWXyq2Jr3b7hHkJieNMB2GcHevwwKhuJGS8aRu2xzzFTtZYuhq53bEyZJDDupsT37hxXaspCUSanPWqPx4Q7",
  "key15": "4tei8wLZJtsWSrZPkbR7hq3313EvmHhrGs9iA38F78QXrJrHF8XMok219bjheBSvus1qudsnBkRvDY3vFGhXWLmK",
  "key16": "4xVPrhXPfTXGcCjVAkcTdKi5BswyASWBwpc7LiNT9soduZiiarGHZvoYi83FCZVGMykzxRnwMxfjePbQ2pJuL2B4",
  "key17": "3AT3xJy7hwwbq5bgQywb6P9Rs1cpbmb7edwW75r6FbxwP3zKymv6W7SB4AYAtcQQN4uxV5C6oaSJK2D8dFdp7zzS",
  "key18": "TcveVHCKtv4h2Zb7vRgR6AGJXXvfZhsN7gRTU9fHYTHUS9kqEFgmPRcQ2NjSuwujfEBM6xLaM7V4vw9xn6LPZ3t",
  "key19": "3s6tvj1DqDYWvHeJti5YbDs4QLeQfxdohfRjb61KYBZPQK8uqHTop7HkTooXJRbwDwcM6BYDEPsGAL6qovbaTj9a",
  "key20": "5rkxzzXVnPXi9vegUfnPqZXUkz5w6qwU11sTqWXSgBR5GX1oKbwcw7M9AR3kTPHHT3HSYRscxx1xQmuM6JMu1r9k",
  "key21": "3GqpxHCGv9Ss8A72aKY9XpU8QK4xyQAfp6WaEGGMqG3T9HsJdhdYyfvnugbk5Btdnkf5HEvbuo5JWjty85uLJrMc",
  "key22": "44zaRLh1hf9XkFDqvHAERjEKh2CZkFVpTVNm7EUFMjchpWwaPSS8GGWmnFTxoVnUWbozYwCQYuBDcnva52ksBzYp",
  "key23": "4fh5AbXb5bX7FWmHLXAT6G2fpYpzg6JuVe1Z8EMuGeppazxfEy3MP7Lcff3NMNsFmkR2M1NMTGe8kSmdNwkqdTvP",
  "key24": "452hDuvrPV2TmbGYNz3gXbrWGH8j5PBKsgx4aPoHbVSDwTiWAoV38gQtos24cwtionNtR9gyPeDDZYFbfdY43NLx",
  "key25": "21PfLEnSEDH745DfLf9eCbbgjMTNf9Bj82em5HWkEr5E1zCdVLHWzrSWwu779n42PYL6zLxa9XwUsyKwjE5srvPJ",
  "key26": "5yTBuKmegRNrAtF4Ym7Dpg8fjoLfAB4abat9KJzao9xMR81tGAkWfAGjGHWpp8ZSajZyZ99h2bmvzBkVVqtH1Xg9",
  "key27": "2Qxpg6hbTY469P2G4fp13XQStqVaewgmXSzkRAKm53hMwCvZPjuAdxwwL3jabz8zSHVaQJpiJeEDXEYvnj9Th7wZ",
  "key28": "3HcGqXUx3PZ7e6jLsHJgJQG7s8Rh38EN35EaxBMJg5RGozJmMoqueZyE3izvweMrjnDELxZX8UBCqpJBXgLDxnMk",
  "key29": "3cHgoG9Mh4BkbByER5n6kF1sgWdQSu3QsxjDtb7vXZycPnSZN4iCftjHgKVtnJL5VuSRW778VVudPGk9VfWr2RJh",
  "key30": "4pRM94yM7xdfcuNjwo8CnXACBqWa3Ezk6xw2sCgnH1T9mxZVc5PFX1fasj6XRr9TQsWTvvSjyYnNEDjy3Z1cfmLt",
  "key31": "5FDgABW1rG4DGdCmyGsC32ZSbdPeK24hXEttFLT1ESmsJvGyA3Sw8ekE2bGLuy76bQcnyQ2o1Cob33SpgfqHthWe",
  "key32": "5DCDcbAVeAUqzzkokGQ71ZKBQj5QSbzKssjx4DFcVx3eZWdNgQPynxWPcyesfw36SKA6dauuefBzcX7TkXomXuCh",
  "key33": "3f22Eu1J7n12rGAEnBFykUshDZzNxSacxyBJm875J8Prc8hJLfE5z7dzfuyvm2rmwuiokcgcVs7A4Q6p1GPe8XUn",
  "key34": "GMCtdSm83WZgRKLU9rVjwhdzHn4uShKxPFZykoAPToMdmsEr6DWJnpJkBSR2LgniSVuzefsmj54vJdPeiapNDX9",
  "key35": "2GC7dtq44oPp8c8pBVBVs1Qw4Fwc2nQN1MshGA1yxe6qoyPQHUnsNwC6iVsdNWCzsdS5nFasoTpckz117k7rgUmW",
  "key36": "3vG1fdYGtXibsFV7Nsmw2N9Tgy3KzdPBASZ6WkpmVnx7LNQj827bktWAVJ5q5hfAhVuda489nnnxPzXGUa7G5trk",
  "key37": "4WcK4XayDK52nZPmqzuj4y1CpKFPmP88eEyvsJV2MfZVvigCLpmWX1TYszMUz7nsH2iCM7vwvzu7CwyTjn3YzFoU",
  "key38": "7rJupBb5HkDNm9RiZEdWgAZbLYZ4TUdJwSBSL9cjHkY4P3g3tVfrqZ6JD1Wq4d2EWEPeGXPrjGrBZvBXfC6oL7c",
  "key39": "2pNKsa6R6SK8KegmBGiy5fMRCtPWKcsWw2YWiL9XeSiBbYRN7b9z2eCoRNQmABXxdRvTDnndE87D6ZJ3xGndjB6n",
  "key40": "2VXSfXtBv1yyS1nvt2DSXtipyjg1tRqmAM9gmefW5rPHAZq1yuPqHBDu5sDxrhFfLwsPcw2BxC8Yb3Nnsnxw68uU",
  "key41": "4k55CUmhZa2fia2JVB1cLTnqzZEVeKfxyr5MjQrYX2LwkhrFKofK2eKa1mZS9H2ERSwueYKXSrWXKzyshXHNGWzb",
  "key42": "2qRv8KEE4NuK1MvV9ofsjSubLsaCtSKfjj5Wp6HtfoszmvubxjzZfvG8xDx4GQmucuBLAt9LkbLuwzoZN9Z6mDQm",
  "key43": "51xcJUn3Jzrtzn8B1q94A3MZU2meGV9GudhgTkr1vKVUhsQsi8RmzcZP9GqSWqUaSEdhZ3M2HiMGXF1QvcJNKqbN",
  "key44": "36gZA65eUyr3M5CM1fcaQ1MWKbPHtREx5Rm8vKcGYc7TB2vdeS9v8wrVcSxLpkhmrd8hKhSijRgviFbJrTQPbTB6",
  "key45": "4dZ7xqDxbwxhE9dNLTZ8QbrETQQAaF9NiTkbKScAkofTrdep9o9yh376readXK39aNzVXHv6RkoUxNwmz68X2uL3",
  "key46": "64rxkW9sQnk7RH5CThKg1KhG37Fc4NU9pd5gBBq4knuBrHC4jXUTrDf3Hywy9oCfiDMJAK2sKRVqjemLmBBgVnJG",
  "key47": "3PtQuP4PN2F66HEwr1PzNyvtBg8rECf1FkVmT47SdYkKoc96jjTipSQcuVKxbQH3wPqk2N64GVwXK7RZQSdipBF5",
  "key48": "4dKU9NbRWf9RtdeWht5Zjo3Mk2dqHUaq5b3c99EfHpo7J5oEsXxrZ3BBY1BYmYtBNKHtzNd2NpEubmrB8DH7F3AW",
  "key49": "4MjH9BvmA55ptST5p2PEYXBgLSup2QKhgJWBZHvV3XNFY6bPy2mXbxM6J73WEYcxTC8T6f49Z89zgp57rKRetvQN"
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
