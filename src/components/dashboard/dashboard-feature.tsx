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
    "5jTdCDHs5J3GGcwCGVySpRG74Z68kj14AaWxXTpKfXWJGg24xtiNtGNGUFcXBNNTr4NBUvm5Ze9tnuyBhnkNgsjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SKKJtgKxYepZKp9BzRaH5nEQFykJzyoRAfwnNcSZzk7o1fjjBgpuCAakYeAYQZmHA8PpRdaNeV2rogSyfWKbcoy",
  "key1": "4FKzaVrkxtz8yTcF41u1oMSVcTywTg7EBpNfuydgGvQtgQkwKDZQ1eoFHJ9nC9JXSfwaZs6rtVUmNtia7yZg8TQt",
  "key2": "3BgrXBg6A3kXUyvCsXmyU1f2oVBgEKaVmLaEYegzzraxxV9HQoCgHdTpQAV63Uo6UsDgoa5hyUDFLSTsJ8xQUoun",
  "key3": "5qzsxFmE98cwuBWQsB6jbaVQ88Jg7PifKSPDZ7FcEJQLQaDJJW6FeQ2cTYG3uwNshMYpuHVqRxSqkXuDe9gkTvTz",
  "key4": "yBbvPREqKvwZuz4beHrbpG8M8j6yTRVsuCQShyZUwGHvtgonPfX8vCczkSsmEmNzMTs6rjvEcHYXNwdSVdTrG1v",
  "key5": "3itCRmii8bNGaJx9xFBdQ97QucTYKgM2gsAC2NrXsKipBPtYuqWhgNStWEEetFts9THpL4Puv8iqdbxVbW3da1Jd",
  "key6": "D7JhEaQDEk2E4UinfdwTDQGuyGyx2nGKi7RV2hxnYeZHfZfcdKVagGDg991h7MK3J6XNocRXhnCcwarcDrjCjRC",
  "key7": "5wVZ3eWFHaKQ6P7uFrqUExditmrUVVkFn1pVLZducGRjnMQeQwxKsZ3ZqoXmiFoFptWrp1BgGyxVQ83oiCgbdSvu",
  "key8": "3Fhy2nvEp3UpAyjGRJrdb4UUVc6wk31GLQ9oa9DaVZ4UwU6fZbAaHad153gqiX28MGrKFTxaufXLaKaHsg9QZ36S",
  "key9": "5WDRTgusNViiWpXiF9EgoJUfVCNXKNQ8SZNtDAXh2VWd6nzvv9PHitypt32WUt6obVror7MNrwz5do1UR4R1541F",
  "key10": "4MBcfyvLjoHqMrC5zbyB6Mok63MCoHYoouKk3agThwrNCToP4Yv4dp3MPCftnNpJjhrqxUr3Qy1AmLLRywG4czqj",
  "key11": "3a1ewqcgNF1EPWijcdbwyUcV8qpcyTcNEBwwkiARC1mSpYP4ygXVv9LBByTxU9NQ5Fm3BY1WFG2rXMyid7CcW1a3",
  "key12": "3m3hsJXQSkrxtb5SZAeyVmyTWAhz8eev1m8wGfesj83rLX5gKb6BkewW8KqcfFUxcw99CepR4eJkMQFZAic6kgtW",
  "key13": "5CEXnP5pMy31nL9RYdwT9L6z5agduZFEYFdX2RKcN3U7iDZ9fqmoxufZXEpqrz4PXJvNKfCBBf6iSE7GEeWBKaRu",
  "key14": "3ZoibpAjpy4tqfM2QMfZbbPBvu1EgiSoTioVpkWhVKpUQzrnLswB1QXEJHCZgi6qvFbCYYJa4KB5oSafs8G1RB69",
  "key15": "kJYuy95Z4WD3abCrJxxvqikP2ZBFRFSbKULqRGZXgr4rfG74QQrFph5MvzuN35wbomVjpxNPQCeDRpwo4PF1mp1",
  "key16": "4ghFJTJj7dBGwYp4aJeNe6UQn6MsofT5HF9KxhUburM4Cdc9ZnkmP3DRDScQ1iyDNA8io8nArRGcrYg6MG2Lx6MR",
  "key17": "uWgJ4E811engy3Wbs4PrPV5KWtYwjPBGycEUec9qUTYS65zvYguGctVZpEH1hRDPGNBhGa2HwN2WJ9MRc5MxrLa",
  "key18": "2kJNL86rqTtBRhp8VhTBG87KJhcYyeuNi5ciQXkwus4jxT17N3HW3zc673MBANDKihAVyBTF73mNW1B7hjDBvZRU",
  "key19": "b8TRuHdvJHWmmPWyW4AtQ11g1on8Pa7GKfNBdumkusXpCjNVhgekGEjyaDGtEJ219v1Ja9Wwvu6VB8PkJpKF8t5",
  "key20": "5VxnrMmrRfUmbYthUTeP9kt36T2nYhtWiixyvjc8Zromq4J1jquWZ8PxMZ1BECzwZqXueQvjHMRXfWSkAXLUNmGG",
  "key21": "YbRXQp8EahXAixB3JuFvqtkW5NGiaJhXsVDuqEEj9TyJoqZR3VjXE8ZMUykE2Hyy4toEZQbPPeVBZ6Bbvipn68c",
  "key22": "4Dfg67ipZxxxbLWgUVjqcRZuB4xuxAxikkqLZBgoFhRSpA2ZbSZZzLx46KJgeMG2APBNZfUEjpde7SpddurzVmJr",
  "key23": "2BUqRLSgw4Ch5cFLV1FJ2gpWHUgp6zbdGjC8cu6Gae2mhTJKHjq42kFzm4Bkycg8XspfwXqftzgSwZ6n9vcMaXmm",
  "key24": "AujDNCz2YsYhrgUE98cZL1Vt98cnRytkFSqbkF5yYfQ7TJSCo2kGB4Jqxvqrt6hYG7vMJgP6i5CDf5MnR9EVqip",
  "key25": "EiUFQYX53XtzwnSCiFM3moe7oxF322cC9r6qNADGpzNUaENWcqBoLRU4ccLDZGwc2dUQ4Qe6vRyy4TVM1vkPxsw",
  "key26": "54pY187W7TzYQzxcLkEg68ZHJuPzFJvnyw28B3mekZqHwdC9DCjHNBrECSq4xrra4cVXhfSKRZAZT1umKBFxsFm2",
  "key27": "TL8CbbHLNWYxzAYujGHGsGBg5Jg6UNAuaK5nQqawMZT5Dr4kFMV2DRQb56neZohVexeWgZXivJuCVJLw7RajFmk",
  "key28": "4Wq7jdSMxdZP33nYtKttF1J18bhB8DGYBb15PNvxTKjFFdpTCQav2SWY7J1ry4xV81yjufNuybJd9GJD6kzHSKY4",
  "key29": "36FBrS2ocBJyHNrMun2HV8Nn8EZn1uK8uKgHmiUXZobkr2UzPNiiA5Hg5uoAsy1hA4PzroBscFkBkW5xkjMQKB31",
  "key30": "52kMR7PdnERoBo5A7GiMMWjcK6ZF1Gj3hQ1LcnMn15wVRc3R8JRTSUFPNiW1WmYkkVz2dUEDzzPoxvnqWBdwtjfp",
  "key31": "ySZCZjpHhyAUyKN18PB6a8yMGETCCaBVsXeMD5WZC3LQ71VYgJ8Tcj4ZsndLCWgDSJ5GiCqnK5r4jY4kkhCgqHB",
  "key32": "2CYiiNE8vFjKrq157hHhrWMnWGrpXXX69RCsbyREjE26hhJSUGcJrWuqqa3oFqH3MKpfipLAbpwokq4MzwrNB3k7",
  "key33": "4gCS4ShnP5cy5eXqwbGP2MBrFT87Ch3UbrKePKAmGKtxMe9TGkHkafXXudgpqgqaQ3YQKELdFe4nZ7kYbWhjwe2t",
  "key34": "cnqPiNk3RLUAgZaD1LpMgcgXANKet8cLC3gRVkrNouaKqTnmtj8gByTmD6oLNGPpjeVKUESwDi6PmVNPcUvW4VQ",
  "key35": "5ndxLXtLKH1NTVsCsE7PHfPBna9gXRpYJEDj8vgEKpviJhvQaRVESHVvH2M76TBMBKzusYRmS2NfF2G5979HfjLH"
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
