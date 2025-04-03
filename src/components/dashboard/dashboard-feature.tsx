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
    "AVLGicJUaZcx3jcs2SBLvhnz4mxdPsLmVTZq6wYAzTobf39gzKW7XXotiMxgbgKRYpsHSmqieUPtMd51FrssZdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rjSFdMHGEVeLDwyHsZBapENRipqK1gCtecxvDFp8NmpcCoCBV7qseYPDFQwMgSLoWx1Z4qiQg7fDDqESbm9TVaP",
  "key1": "dmJ53mjjR2zNeu5JHcrTcBFYsCXkUeBeJVH3N8fzJiNiMYTGSeRZnqNBsrRER159jWYcLeo1W54wsuYApBDssun",
  "key2": "5LwNGj7TN11SEfkNr5XrJujfMcokLuALi4a5tbXVADuV949nUdBPkwbkT9gtTQSoQdVUwocE9AhXE7LFTwEgrc55",
  "key3": "3ZX3arXAyJNWY8ZxpzaD7xNPwdRFVoNsgNVPFu3SDo518xBZju3XhPszPEhHAFwnUAJPkUQSt3aAR19CEJtTn3VY",
  "key4": "66hLcj7FMBcQXyftU8CVyAtgjYpMDhjJtUpjx6rrdhCkkMXEimcNBgAVzu7vvkAtx45p8wba2VMT1MRRFGXFE9YN",
  "key5": "UjVBdegZfNoSHqN5nAZCzRhd6aZvt61LUCg9U97ceGXJqkhbapAFUjJM5ZX92BgtEpBZY9KAMCZGSToyit4z3of",
  "key6": "cKbKGJQMaumZWjda6ch7ewUH3yHznf5dunrRdeVVFx9YvNuV9QfUc9eC8WPtZmFdEhnAb9zNvTD1ZWiW6iXNkbz",
  "key7": "34FSu7zCS5NWcFZAzZ3dGcE1pUSva6ixNjivLmrN3SwYJko6b9K45Y1c5ZobSTy8rT3C1933zRSEcGMkwsYwzjMa",
  "key8": "5LdnCYXTm3xcRsDWMDySYoXnuvYBRELcVxKrCrdCd6b6Xp2kZFmScBaAq1kfbo9Wpys4XDZZF9wqVAdNDUPbzSjY",
  "key9": "2aaoCteCsKsFc7BwhRx5NpShZUwPHX9sAwEpYHLeKTRcciZgFXBa6Y225zHhHTgohvsQ4va8FB6ZeE6kbpVSZxbz",
  "key10": "5k637bWB2Y45kLVhdwtZkhFpc424cDUghqY74rXmFEQXTmAQMMch5GwAd9WvsKRzTpyYB7cQFN29pb1SsV5f8zM1",
  "key11": "4dsdv9HxjFjieLwNoBGhqqtNpdriJdpFtkUiF5uBFdga7cLZADtvPdb8BiGhcNgYinXVWX4PWgxMFwP3jjT4MNs7",
  "key12": "2KyiqkRJgx1GjDmALJEMq8k4TWkNAEZ8nZDeSyyvBpZCaXPGe5XsXr7UA7VDUrKuwsMcgHLC73u1WefQaHUoi3nD",
  "key13": "2RVKfybdyM4fwkeawxok7dFeDbuTQtxGnBgh5c1NdAqUtev1RAxRygbGeaM7DmErvdCRgeVTF3T25GmXhydUpXRK",
  "key14": "3rVmKFim8ZbF394ExG7eugVjWNqU2LrHWPGMczH7Nn7QBKCEUs1Y1RDi4prH18uyvq3YWbGJM8cKvoUoXrgX2GYV",
  "key15": "5daE5UdAmDBVo4g7Mcw2joaQ8LszDwt7TiHVV15cWm1YDc7dAD8jwipp9Pnk2sAZWxbdFsdhBeLUkYKY2HkciHcD",
  "key16": "2t22ssSR78xxnkDh52r4nmAMEVfJ6cHzCaxWSgfjrk2zGtgBqhTWW3f9feBgvvz6aHPqoiacYq8FJKiwiE3Jac32",
  "key17": "4QHcX5UUVRmhTPXFaXcvT1rDfCKB7FHXVvCBUDbs9oACtjX1okZCpVtfhX8mLrhDEay3ccA5tskHFXpJUZpsiaV3",
  "key18": "KRGWECABwM19dyY6ro6M2Psm14323aPNkdAC1uaEj3dXBNuW9puyBwNedNBJ8xhdoq7Td5nYEqaZMxKrLkoLunB",
  "key19": "5RAJmRWWuGPte9WYGmuNZ9LbpCJpQwo5AC9A5mm5kfP3KcvMCNvgUNkYDWtCr8Lnt7U71Zta9rcyV4qYAHyCeHYJ",
  "key20": "4Vzg53EfewepJ96h86LYjDkVy7mAjHfBzVWc5bm6vBTLwk3E5nJTJX2bfSAFDdyRmb3dzYAZLXbDdMWH6ois9t45",
  "key21": "3t9MXQNdbs9ok5HRS6KM3Kx72evrCBuTy1r2ntcrnwnqyxuzuXTcEibye2PYFKgx9g8vxXv7boPjFAN7Kb186wus",
  "key22": "4tKRe36YpzbayqkkFiqRcTfuGDpmfVcL7TQx5KdntUVwJcCF2Z1PHbW3kReFPiggT2RayP9DaEwrtkM6cmhERZ2s",
  "key23": "2347FEPkMYHQHFdAk76vxL9B2y3J9s45ZLLnxkKPMtvgXJG9w2L4Jx2HdHXzspGwqvNjGduE868kfo8DEbSDgKeJ",
  "key24": "2d8ArQZeNs1rz26FpcGWLvt4Haeh4ihZgsPV9SRTFnbZEcg6CamPuUD8pE25UunGYNLEU6qYF5uqdymJwjdGQUmy",
  "key25": "2LS8qB39EUF5aDyaF8oGfahE1KPey4rvXaZJvCL5n5gwomx7RTXVzFQSWUynuegRpLDJ3geKEJ4J3t1z6xDNeeUv",
  "key26": "bhAbRJn2rtNeHP89P1tFRnfrLf6NCyvT9nDUyKYL3YjbhoU7q7SQhmyesgWcixgPv42EkMaXSW4EGrp45VdR1gC",
  "key27": "3KpZ4xnkUCsUD6h99rqcWNUofFGv4t6h3Swqrz3hbbvjRwDsndtbFatsC7iwY5UiCHyL98NtfD7wxchzSznEqbJ8",
  "key28": "5nVeuwCJxR2rtNmvTiJqF3fcjaYBtTs6FkKC99pBmhffwaucx4VjJfsLCDaXT4nkSycyfLJcaAjSq3bYiJHqebUG",
  "key29": "YzHaLiWA1eC2zCbHRBN6hK7LjgrCVgj1dqBx9f49uDQQdmTrY2Pv18rPstEFFNRqeLaE2hLQsXg1bSyWL6KJrc5",
  "key30": "2b3UCiQuuxvKxVeirsLrkYAtRCuUXns4nMzhNkT8AAeodxVvGZQpjJ9DvHCsVWBKWVoEKzCVt8wEGYUod5E6YrFR",
  "key31": "2WVyP3jEx1y9LBCRmjQMFquP1CDCGHDUsFDRgQqdUxtoRoXoQjm9heZzWe5cmX2DYTSNwC5MdRxSM5HeR57HJSfH",
  "key32": "5eZYWukspWGvgYD9t7vsPgKWM8gYwLpFYRdyesmgxvgkBU4FSMpgGigTmaaUeFvN6M3KaYvPJi1iu5vUji19MWrX"
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
