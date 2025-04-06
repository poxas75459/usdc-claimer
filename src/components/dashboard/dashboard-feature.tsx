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
    "3WfP7sSYe8fmfvVuyiJsTv7nNdPwYgUsND4jsCiX1KykpbDgBbjAxihkeD2m1cnQdciSg6PkESoV9qYMZ2VoxYF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4naZ5n95vShpmutHN5WQbJD5wcjam7foxTP3MgrfNR3TuuSLih8sr6xYKVtgzkrdP7S9shwJdyZrNJ2XPCqKxmxy",
  "key1": "4niRHSbiN9qAnr4hjEnBpK3x8NBGBYXR5B7Te21JU4ZFg3wqUybYwChrrFw5UbJ53xjfre4wpfdBu9dp6rRqESkH",
  "key2": "4PdJqhoFksR6Cefo3UfXRqQKvhDu7bZD34LEAoWY6qEicxFyvfBewtQ8KZt4VNiupjQYFAjSSmArFrZUEArsKVok",
  "key3": "4uX7vBui8ZtjajrqGAQwvBSgUoi5LNwW38B7LrFHDgvSZCw3MnF3Dr8Pef4XoFe29Q1vzGVEfN6RqNMMj4fwosJB",
  "key4": "1A7E4PEPWeB5w1a7DTthBcZAdz3a7NwhdRgEjx8SwFJeWYV4RvbMA7xVALmwwAV5kA4pNnCWksqdijKzxRvJWaQ",
  "key5": "8q6Bohx3obNLdPNR23JjJJSRTMUiEWHEVcAa1prLWVosadkKgmnZDSb4gAxXQJp9c6sWb3DiH8fvKT5UQ2hg4QS",
  "key6": "4qwkvGRHmrkWC96kTtMnfxXLpcvoZZb3Y2AGg4bW7HP7FGH67NAXz3XCkDdDcbT5o7Zi8j7kk3pcYRJJG3s1Mk4M",
  "key7": "5XcyrucGwjkxx2Vc5THcQMV8b4Vp2BdhK18ocfAi53K3C4CruBYEaTCEu65rWcERnzHtCVo9Etd4Sby7DWYC74vZ",
  "key8": "5SGhSZtcQkssjk4NFCcSs4meMe1BMGfuRpm9wQTewMnvbyvrdwUtsH9ecdyvEWXciZvhXb9qGenLTSHgqrk1bBYv",
  "key9": "3vkpz8hWQjPE3kADzTRmkmZm9npPFxhXKJTgSRP3aiPxBH4qP3eDxTsLkRi8iQCWQVZmFT7b13uShh5Gqro5c1UG",
  "key10": "3yKJutEXKKsbxs4iZoXLs4KUWnckJNaZmMScoDwgy3jzY2n4kxy3caxD4jYRDqSv3QnUk8VYA88AxRZJqZsRN1nm",
  "key11": "66XLhj1z3y4f1hDzPCwrkc2XTXaTPGh7WndrRnKvzeKZcJMqayA2DTrkLmX9zz4roWNpuhZnmnoFRLTrhCwg2oqT",
  "key12": "4vD3H8apLYTn12bYYtWzbf3D6PhX61Nd9h6m6LgCmko16XVFS62PSfcSkvTQre3xZigUWHrx3FvjP3L2dkVeJhZV",
  "key13": "4NGgkHyE3qWLnNMcQmfx3jZjX5c175HoFTR4wC9A3suUawncMYNm9TXXMJtG3ogz6DkfoZwPgJNQ9LVQ8dUDnVd4",
  "key14": "64Ug7qA3z3FaD5KhufDF4VBeCyJDSy1hhTLCf5ijkueTncQbN6DHuycuGLzund6BpSnjBi4hLiN7RMvthNAaC7kg",
  "key15": "2aURhZpRKast9pBzu53yx7bwKPoStvFQVHoNFAfXvkLTee5a6NvFxWDcfCBhbxs5jWiFFKN47Xc7u1SzaHv4dE9x",
  "key16": "2CEk5VrGD2sKZikXFZWqFtP51NCjuYy33sBpyZa2V118TgohYcskiQtfRKYojkfhAhpEd46uxNK3Xh2wTJN71vD6",
  "key17": "5t9jxPnwpcuq6MagKTX2tUTpzQbuZYmixVSQTavACrMDXVrnpAhseSmwCryHEdpnv1swKjWCtADpFnbEUd6UMQqj",
  "key18": "5ToAWcyTX3qX28uvjLizbRUMPv7y8ftcsc9sMyBH5DcxyuyPsJgU4bANm2w6DZq8Npv3gwRzaUj71t1kdm7t585d",
  "key19": "b9c272bivgjUtmqGEnJm3UVJ7FcGqZgsjmYaW8qCqS4Wy6GHw8rkJ1Yr8CdRS8J98BcfvNXVYH2LyrwpWKgeWaW",
  "key20": "3G2H6Z41MWbPEDJ84QbaUutqJfzpwQpFAL7r6Dv15HWJjZ2U2jTcyh1XobMCnYc2YtXmZF2CeeTM4K2wtBsYX9Zf",
  "key21": "52dpZ9o2aYJtsyoaSNn5zXfVURff39nkYaTJtHrX49GPP3utduVSJUgQZ9R25vNgbyfvgW5Sm5bjBBBDViPcdFqR",
  "key22": "3FSDu44gX3bm3JhxiMcA7J2YGzu1yfEBJ2XzGSw1m1vhk61k2GYbRssM1Diu6h3RdYUwUbQ9wdaUybTTFABmXoSh",
  "key23": "5rMekAz5CtwgJV9ybbPgofMdE67DhUdwkC3pPqhFF2LUhS1wcyQQPjVzLhQc1CxifRoGXPCbvGdDS47DyxtiSDR4",
  "key24": "4UVkPNgcTqZqdf5p3Krfy8QjqEtkmQ6hFxFK5nbbm8wFKEVcEmLtVQXSjw2TPLzYuM7urc15aFoWAXYZVBEGhkgw",
  "key25": "4AYhNrChL1x58UJ3ZFUSQH4sdVtcLjp5Cj4Nd31zKHqcY5opyxaEUPnDJfKpCrGZbn9Pypq9Mg8PdnKicgRhpwUN",
  "key26": "2gfjGizLaSDJmGhDiBRufpfcKtWjUxV6J7q3UPnyEfpLAukWbesXkzRHQixPmvesaqHe5nJktFJ81MFTReDhCvPu",
  "key27": "4QcdGrw316L2aVoeA4ji6KjQSYonAmsGfcYWH46e2DEvT5H66Wg5eEVXSvc6wP7QJoXbwKHpiLd6Y61A8J2cxpbx",
  "key28": "56uLL7xRkJq6LCWxguqThDvdL8cijhL2Xa6jeXSgzoKR7PGa6hB3hMk6Qt5XYbiwpcbebfcbKbka5a2Dbq6hLrt6",
  "key29": "4UFj7ojZenQreb9KZrfMftCUoYBLdpLUdKPbNCrHz8P8hUMR26wyi3n89jEH2xE4Htr36QHN6gxwKBtCXCv6veVr",
  "key30": "3vqDB95J1XuiUHZXzumDcmWdNAmeaTVT4Y4BdsiVcdhGX85vmU9WCHjD1id9YBL37hXRby3B14nm55nPwksXCMgd",
  "key31": "YLdm46qJKBXctUfoFWkzq1SfBPNVnJibU7s8VRum487VNVtCLqVPiBRA2NG1NGy1EmA9jzTKwbGYi3wQYs6Juks"
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
