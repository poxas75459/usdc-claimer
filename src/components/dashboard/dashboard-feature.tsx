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
    "28HFJYLDNLUJJJPz76ej8Dbg9CFYWNgoT7gUVyNDiVAnA79zqBaN2ghjzEPFgUwqcyN4p9yBHzcUvgx4cp2U5pGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uRkDrZztfgoAkMixbCxH1JD16X4HCfGJNrwY7zJGLS7Kzmc4UJA66sDwkEfgqdbvicACSaMNL1PPji2Wf4T1dEG",
  "key1": "5iWyuaWW6orWM2Qwd24amXonXn3as7gcHWgoVN7GjqZwknHECywStjTthG5HZELKktXL2cMagXZGMkfQEXh9raP7",
  "key2": "Tws7Mod3YwGnZtTzpKX1XuU11HxNBAgEpEUycWu59rcFnmog4kbbjx2WWCWkCEn8c52Yh8bSbFHvkCfUhvS6o3m",
  "key3": "5gs8znnhHYGKBduHDPXNZ4A8N3Fv3FcZMuTrEhsq1Bv1LczEARQnETcGCfuKifaWhLvm5ktHjRXHXNbqRGpKE6HV",
  "key4": "TZT4KngWT2Wc9GEYrp668iEXKex4hVr6wdjvLMsWmm1DXePrpYHykF5K9pEsMQoToge5ZoSUH4MrSM8ztKP2Thx",
  "key5": "5iybu9uMqqEVDU1Mk6xLS1eKKR8yU5MVugCEz7B52EwLCyUCAY9t8iDooWVFVh4Trx2aAMDdqfJUHc7zXtkFam9i",
  "key6": "2oiBKCMjRhtTmu4mKsCQcZGu7P9AqQiVaZtz98fJkRnTBibuK9ChnAmi4yBDHasMbvNTH6jMoLDJn2pEcG3Nv7xv",
  "key7": "3tgyec3s5KDe7D142Nt9grWze5LVv1mBphR9z8rt3Nffa1GyaMubQUZqs7A2DvgtzRT5k4omDsUG3m3zCU94Pefa",
  "key8": "2Z35oPUpn8YqiVm4v9NbkE4Y6GwekpMW9dCwNCU4Mwdf9LzKDZPWSFq3DyGWDcfNqWw1hpzXhNZY8HgUdC53guaj",
  "key9": "2Y67BfaiZqdau6MMxoLCH3ybE9bkik9m2anwwtEVMcLhRgBjXs4VSHYzmhyG7VHESRH9cAb6e4obhgYTbeBTvRa",
  "key10": "ouH78oDC8BLN8dHTmKAx1XjzAWEYeYt3coWzboLCzLwEbHoYfJY4yg4B6eWg9eq4cRMXAYrVXkpPHUCAM8zPvxS",
  "key11": "5emAKry8ZajQK1omHKmrGHNRvt9qb2e3VP3JWgtMEhbrLmVFMHcWF8MgQBtELFsQvLtLFxMGJYHmdFKQ4LqRsbHt",
  "key12": "5yoge6MRZ2MNW6EL3kVUC5SpM2xSyLbM7FaJS8rkcbiS4WLipgTjzxSrTat5DVmjjDPdRsR6b9eURUrnGTUa7eN9",
  "key13": "gxaUTEURJC7eDffWZgKJXnmpYzCsxJQVUAJBY3tMqYdQh8ZG6q1NADsgjvBHHDo9eZa3wG4mYdLhd5JfnKaxFWx",
  "key14": "4PHsiQ5uXgX9HVU4v1YTqcL8k7Rhg5vTbdqGp2bLffitA42wi5PuJioXepCCsxCoxwFbdWcqWoTr1dnMs7XeSkhi",
  "key15": "4EGPScNNEHRX8JwaUxd8Qn74iNZqf5NGGqoD3tYoocJ8FYotNGjemebDHmJqLU3vUA3t9nt9bs5ZQbxMsU5E76rz",
  "key16": "5669UEhREXibVBbtimp3fVFm7nv6PJ11vUvHdi73DmBXG7WEP41ABwMzaf86WcT3BKdbd8sTpKTzrS6biiGgfEak",
  "key17": "4zHvs7Stc6mNzrx692pWAxRXZCKvcCouThcwRTpCw6NvXhQh7VwMCEdxuXCfKSSoaLsqA4SF86PtixJLXvzg1CY5",
  "key18": "37a2qyAFE6jXprxmKPeHQYmfDCpiLcC2V8y5X9iaWnmyJxf8Wqj7fXXMuYwozUsa7Q7Rb9gbja666fPDZE6ydLXT",
  "key19": "4U4YDPT3EKCR1fWWu92SsDtAm6BkRNbCNguS5VCKucu94BmvKJEJuGMsHCU3xpxcbHxfsEqcpGLXJ1NVcZnFpEYR",
  "key20": "4NVsgUuVVUG71BxU7LNvhQZCCrqJ1zKsQPnU19B3oHaJLd1maDjLySBkFK5viDyZUmPXeHDEkNBKreAkkiPGdt8s",
  "key21": "53MSNzySs7iNPcW3sCZRVmtyrph2SQUHYpMVtgxxpjQDci7oq1g5rTtXcDrswNndgPosu9BS266LFmAUio62Zgdr",
  "key22": "4XogUPgW9KhN2q9EDe5uUJTRRXNHAPFZRDMkB2CFnCTv73edRBigUCm9TdQAuTzGmvP7o5xNGGib24sPKpDK31zQ",
  "key23": "4dyi9dcrr8sMvU2nMianbNjCEsm8DJ13A2KwSFEnusUvtxVKNf4br7wtqT8bSPhd7LkgMzNjKrgysB6pq28bCrKH",
  "key24": "2c5ABeUWmkDUHLSnqzNSbWNd4ZpjzC32e6KPXXafQ1MUvBqxB38twy2ZMo9No83FcsLXNCJEmRtdnL2QfxNjnnmw",
  "key25": "47pkoeEnEdpAA9kafqy2JeHBJQYNXmeo5edioWPNs8BfoA8quQbtoascDTmwNSsKr1PN3dYUK2r3skYi2RN5RgZZ",
  "key26": "rF8Vh5hEY1EQHHgbHJHiX4hncdLSB16d5cn9RvWzyz2LmURvdQgthUYx7nPDkmrgN2gdkjAHCu3ixkbYpoVwK8A",
  "key27": "4RPhBMdcEsFMjVEAfeEpmKugeSoiMCTSP4bwC2xVu1m5THqH6Jq8z9w6zvtT2YbvcuSuPUJVoqFAhA5ANptLnhVb"
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
