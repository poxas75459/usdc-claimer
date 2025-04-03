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
    "24fLh7bbEwXAbE4kKH6Ftrst9xYpzvTTo7JhBuEeMRbQ6ucMxFVHvVkVacZriXEqxG9ozdfwwjeDCsph2iajgpEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZPU31yLvmaMZUcYf98oJq3ZJH5ho8A6Ss7feJgy7L9VXsM6QwJ7VUYGwrS3YDTvuKyTB3KYV9ZBaq1LHjrJeswg",
  "key1": "3x5WLkRC54U1oGJYUZUkUWH2HYjrq6AHG1C5QFR5bWhk45Jde1Twmnm87Und6NWkabdTufixk5zB4FpKvU85iehn",
  "key2": "3UrFivBVcCr4gZTp8UstRMsNkUmwjJh1Tv1ewwNk2M7Lzpux7QTNzHcB3awQbePzz7qTwEuKufvmsWtXsjWWKedS",
  "key3": "55sk9ovfsx1sFkCRVGviqxrNHsXv54b25cFA3NQ2wMyqyNVGASLrUutFZkMcLfe1WdSqnvEqMuhfmdkMJyU8YzaC",
  "key4": "235cbu7R8KNSbjYjcPwsQqJugZ4PziQ2aHNbtoCSXYutmH3rqMbBvyFLFZBn8Gt5ZaWk6H14mbwaaYwmpe6XX3cS",
  "key5": "35u94DmdELwWGbAaWAuweToW7QNPksjfmNrReXupFEqJZfBUvzbaAsEYPNo2NTpE5qom7LwBb4TMUN7MbEqpMzWF",
  "key6": "4VC4EUuErTA1XfN9MyhazeuxvRY934HtKvpFUSuU3QarcuM7bTprarLyEbJ68PNUkkadF53r93pdpQakBpXkoYHT",
  "key7": "QzHay58kDnPHykuACkFirr8MnZ7CFfRS3Fj7gC3N2uusM2amwTqtMNYnvRsanS1LBe5iy46uyXmEJPNcQtyLefu",
  "key8": "5gfbWBHQgWBgC1oQ4cBDW4xaPHjVUAoi7VrErPsVRabpVxApYRcSB1QsKBr9PDcdmLw7ddjZB9GapuzsuFWeR6h5",
  "key9": "5qU4HRJKwMPH2uviXFN2sygJ7QjAPYuYGXvLBjni6TcBD43EouoBAAphA8j5FUsLVT2nia18VMSVKpWnu8Aa8Bkr",
  "key10": "5GTUzi9TQMxN3a2hg7u2steohKEyV49SLxPrCU2yjVcoi76CYSe1uGxnKke5Cxhb9XUktamTik36Gd4V2s8ErZQM",
  "key11": "5rG3TNDbNNLzRqLWrTyWMHX8WEVWD5FbjkBqwhHuAtvCSzrteptwzwptQmkTd6pQSP7Ff2MdW4i9LEihKAG375qx",
  "key12": "3xG2vs1Z4tze5r6EBoDJXqFUobwucdNekdvq2ka9SMjDLRMBDRKD4kmh7RcJpPU4LmxABF295PLnoL2ajPABdTav",
  "key13": "XcSCqzY5icGcJsHwy63FbeLnWpRoKAyxTfVbivG3zVPTrDRFuT6BfDgFXinWghNdGPPcqjTmtC7yvuyuhMtbmQv",
  "key14": "4fbxXEGCgyvEhBNLC3ai55mSXtAKKkMdaMf1WCCDb6EjDryjdkhH9L9bMaHyGQn9iRBiEk4SZ32in8LErYQVhtkN",
  "key15": "9Qd94zixE7nCzwyFrerQhVqui3JKxJJHUgrhuDkgwtvWLy8NvJA7EaGUrYS5T9W3Y972vEVVQ4gw7DXVqBpdjhu",
  "key16": "2PbyA6DU28GDBrjofWetDezNnVaEqqqoDxhhVjqcVNC2wsQbSLuoekEfwTmU2KLGQs4huS4CMR99VjzXYjvSrizr",
  "key17": "ZjGrEKgV78hpEuECJYBHNaD5ZecQ2VVPLi2kVo6ik3rnxjWTr5XPP1u15Vyr5Anh4hTfvYkSKZcWHG422sfFCLs",
  "key18": "34uynQN9DYZYMXsRZYXQo4D3UgR1RLtsDCMR1ySLsNp7QboEtxZGjbiG4v1uWdqigcubeiMDDaVk79vJENT31bph",
  "key19": "3WVGmxhVT9cNeHVmqbEVDa6D2qCKr4J6f4sf4kH7Enz6wEZe5dTZwQeRN52UHfoTRG4MeEZ3M8eY34udBj4G1Vdf",
  "key20": "5otAbcyygpL2iZwxkGPLyaDtDrmMTD1NhqhHZ53kLYpAfsbBVxDUEx9fRRg8oQijuiAHSnh52Ko7bJ6xCHChV5w1",
  "key21": "2ECJrmQDCxVRohtV5J6fuJgGV7vwrVSgvzb2DWsz7ofDYh6mQxfBhriuA6aU1pCDChRPEbPzGN23giKHuvQ5MYLN",
  "key22": "3rvQxhBB722U1bDgao47qeCf4mQKTQ1hrD2427HL12JN31XUEms9y6PTnx96xr9awUssMUujzVeA4oo65ugT6ezS",
  "key23": "3vMs94NFVcLjoFXWzo1hugzvmQjJkdeQ9dm8Emmo6aCY1Z38jV9AjCpKSVQ26sMtGFRiC7Fpwhwixjmfhqes1JAi",
  "key24": "QoLsxJVub7rW3RTgfdhS7RGoNVHcspnfMQJo4fzshmDKycroK7PuFXLQLPd1bTjq6D5yiZJ4HTMnkkQHQQgEYJA",
  "key25": "66ikwL25FYrMDTjSP3uX9PS9BEdk6QcUQ9syTTiXrJMViS8xGDUocxdQpBaN8LYpJutbKZeCFjQ5iSu3vFkjRQe1",
  "key26": "5sHfNqMnsARZbXsYYXenF8EAJNLjxnzEnHnjNThAkDSQ8sFxw2P1rzKvC4bnNSpEYsjPLeoGPA8nXDxPxRT69UYt",
  "key27": "34nfmDJAE36YffcjqtvMF24YHRyLNhzXonKQRRGWoe6pfimp2uFnmYJwXnYr1MZrZcWt7sNmu88aUNM6AJf55t8T",
  "key28": "3VdQdvKD6wF7WiGJFd1GU9oGmnNxg5Czf6VKesE8mSHzzFv96gkPPzMqHAcqgCoyrryZkp7H3gFAm42Qi75GGXD7",
  "key29": "4LxuxkGjGxzc9UQRbeqo4SYrX18v6mTvsa6LG4qyfYqrUbpyawijmiawFRBpsDJ4y8ivnNNhccABvT188b3hEKdt",
  "key30": "2xST8wVModS7ZP23aL5pGCSgMVxRNNDYGsjqQKiYjDzXERghXqoFFEPsWM6xcALQfMdBuHWuC7kWA3EbYVhKg6Lq",
  "key31": "25d5y9pFfkdw379ne13oF6GwznE7iaJmeLbD3gfGDhciniJVn31cASgytdk2BpS1Nq2tZ5zBzNEbbJM7eN8EAZMx",
  "key32": "3DjD6dCE6HWREfpuXf67GWmTvTTNfZDX8T5q2wtxojFbuydQpTSerxEM5YDLHNbb1qXFc5snTVJWRHjSY6VNR5PS"
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
