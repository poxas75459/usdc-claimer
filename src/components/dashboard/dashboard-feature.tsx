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
    "5gqrqD9zf7tJcdhm4XCN8SP1n8rihQx833aurAxYHUHaBkYDcUapE8tnMHZjBiogVNyuPJQsNdJHX5te7WFUvckz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EscNEXccwXSrFtZrn287Vzzv3Gb6z8aUrDd2JzNcHiGrpezPUaS4UbsmqNknhWjajZwUgqPM6qmqkr8jrPeZ5Sb",
  "key1": "2FBdinuBHkz4H3e793QHNXpso4BNRyv9bjfe6PRKqvPs1dwLGQMhkk67D4KYLTWnbBaa7mLQabHqWKUAJRHioLaB",
  "key2": "5vBkVQkNP6mRX8VPGguJAbHmF7uXt3yC1fgsUN3jLeMgh7tn8dyZQXVNCHQunwvjmBcKxfF3PooktULNCdYbEvri",
  "key3": "48P46qVeAxMEkXHJHiCdn8Pe1Rsou3edkTDWw3S1r9HxHUitaR1Q9gmiySUJprvWwt3L4bRicZsRcjpTzeXCRBkD",
  "key4": "UYhf7VR96Mafha7KcTAWX2pBrZ5yNWEdkxtnw1Fwwnb4z11GR8fb1XCsje5rCo1qa8SzkEFK1sEcBxQMJ1QSE7H",
  "key5": "5kGATvwvxJ1HWTNwrLxQdHXvVNDegYG4ghUHDXf5GYVBbXt5BcbmEqnSTPq3sBivt2uFDA4Ez1M9raVeiDTTVSbJ",
  "key6": "3tA5rCfLBJRYWDuniTTpL1tKE9Nf2CiCw6aCzg8jCf4JrRRPxWivE9FqjUoa1ZwoK4f5n2UWET91EWtvpRzJJLpN",
  "key7": "3pz1fjBAz8nHw3UUNHMWw2Ea87ciitPrkvHuskjdheYMeRRNsaAdNHGvQDSMsS4GFqozc4x7tFJo4aSLSkkHotbb",
  "key8": "5uCqntjMiJ7pn9z1vwLp95b9eW8KQxjMFxfafuHthXddf51KgzpdZGZvQjoCyL3VvP3wPBQ92cq7AUaxC1xFLJFc",
  "key9": "5vL1R2BiNw9KabbMnF2PtLhkgiumucFc1PijewqywCWnzjdAmVgGNHSTPytxNyHUDbyAfTQUMGhUTZctc3vsbFVf",
  "key10": "5fisDYrFJDuCUCNtQ7xbjAsgMAedFZiau7hyDadozsa28Ni9iGUdZYHBrsor2i1TLwRHPBSaoR86SHGg1TRTrCTA",
  "key11": "Jyhg3yLs3RwwoPqXjoQZ56zoGfAqSv84C5re6jBxd9tREkboAGYWDjk3WwNvV3eLNexpNDWu2ey9tD8GG4ugo2K",
  "key12": "5r1GGKsAeEfUBhc8yjSz3ELAxnhLAWDe5vqvR95oQ6TGKQDmgPEfgYdqE9xD8dErA9pvz7EqNsQCFNZvFE8YGkUm",
  "key13": "5a4rv16HiYcxYoV4tUmzFUje5d22sG9myRZwDEQDyjZVTddCNqYyKR6x52u3Ne33zTUpiYmdssvEPyZRyH7e83sG",
  "key14": "tuqMFStsMRXgQp9tA5qNSBxtV9BcJVv16ihf294PHjzR6CNAHaNuAspLYjzfraiHhhs8b5Jp6P639SEBNwhqe1c",
  "key15": "aHm4RZPMLqJ9vYGXAMvxZMorCRFdcJKUoEHvroAWFoqcPLqxn7qax6hovxeWUnSRwB4q2ZNR4eUyC7ZAqaXjCBf",
  "key16": "2ieeJku1gqxtJWfbSBhkBJJ24MA746SHy4EGPMkaAoqZ3UJt749SRkyaXM4Zy7HT95sbKNJvVggrqVbyYy29X8RE",
  "key17": "CXenXuDerUD25Z3oPb9DEq3tAAciULXDJH1DWTxSD4A7riYQe2Qb2fhQiWxYtMUcm3pcU4esnS3ZCMHG7HwbNAK",
  "key18": "2pmHbfCDmJgMJQKg1xSWbTY6T76sDssxkcSm6AAZMj2Eisj8rXXActmStrU5hcsTbX6jntcQEmmCu5egc236vdEh",
  "key19": "PES4Psx9rNLWEgHqY15NLM6TbowPLbjjEgkiLH8rkxzGMSAGjN3nG4QzXR9ACjgjFdViLgbPQVuKHijkn1VdtCz",
  "key20": "5sQaTKy785XkBHpFSFJTPscpeXgU3pZmY7maseck9F9oStRwWsgNUaSPeeAy6X2tN4tGfCgubtVoc1rJAfPok4Ry",
  "key21": "4bjpq9gNcFdQdYE7U7XxMEdu3eATEnHfb5W9HMxw7o25sPjFQRZZRXeZR4CRjTZDffb7Bai8FaZeynh4zpTbZhEa",
  "key22": "4uEgSTXHXnf589VobVNwsx2mXJKvbvGQdqSCJGLeumTSYPyvzJ6tBJgpLczXpB2k8jdbqeLrLGqBp1BX9MwQxhxX",
  "key23": "5GPNXEeWUnnYjZmGhosSnMBaAuoRGSUsXYS1qcHCDXG41TaigoWvzHpmKnJNC4hiCoi4ityLLLZ8D1UefKNNL1im",
  "key24": "64aV2U32o28D8WySeWjcwj1i22L2wam2zJDGxe59skRuCiGi7utNsESZwUAvGPrVAbWAJxBGpEzaovSiTtH2BQY3",
  "key25": "h4FmPxcv55Se29Vcq4tRe8XLUuYgnYeQ1Mey8gzRjZyR8hmviWBWHmoZBA8wLKxVxjZLmfZwCAtoKggSutdVdbE",
  "key26": "4ZTkAv3p4pKbZsyujpTdVx1DHawGRnQVbNmJnJrJRw5W6miTJkVG7w8N6ZXgiebDmWduKMYWYxnWfT8uhAfJfEbL",
  "key27": "4EpbCzom18gx1b96bU6xXRuRBFb5QZB6mNQcDZYsTXDMEuDPSSpxhdtNyGfi4fGXVcp8Wo38CbM2WFG3JgGiqx48",
  "key28": "5xncR6Ro73Nv2jeta5NqoK3iaJ5KzCmZ8J1E7ALQxVAiy45QLbk7B6eg5qqyLA5VxYZ3JZA6JxUsNEofmL47S9aR",
  "key29": "TFXxX95EwKbzH5biTMf4TmPk2NDXoQrjGCpJ7uELrrVRWxwy2PDwumKyLrJPnJDDzf7GsB2LKybqecsTx7B6Gnj",
  "key30": "3Zxx3fimFDbXBxhjXrBC6C2MRjef9UAvK64Ry3gPzhJ81mL1pcoLcXD7LzJpLj4SMQpVZttC7yaUKXwDrxz4M5ez",
  "key31": "RuDbHitjqgRyntuZmkPBbu17PrLTRNZJe1nrCiNBKGEkkB5eWGciguzsWHdarZgh9MXSPYf2TNv17NMgfrPAbaC"
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
