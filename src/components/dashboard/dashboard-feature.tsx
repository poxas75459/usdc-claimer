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
    "2nwxM1ZgcZDz6tQ9sjQ443wAfEtYcH5gsgafS7maGP5gZ5ze6FTtn4f4h8iYasj7i2QkHxWgPU9NUmpkPXQnERFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zMKtA2VeAftCJXF6xzYp7JJL7Du8mqRuiWACw7U8aPCWCa9GqYujzZtYfHS7JfGRtyczsNMN4jMhwhkckGJeeZa",
  "key1": "61r3U2u34RkhzbExwGGFJfgsuc54HQReZf5JGnYAAyFcLMKvFsy5GrVMEuh26yhA9jHVv8uuf8quqMT9VaeZwCPv",
  "key2": "3Vn961wWJWPuSsNsAszZd1Fg6xgNGaLfyukynp2VRCMbQZ7uZXasiM7sT4ovS7V1TEMm9tko6mFWTXiG2FDbYsTx",
  "key3": "2CMBtBhL2Posp7qjCmTVin71bkzeg6xR2AsH3G7tQvFdnQXCvKJpYscawxeTWEeAibZ6mkmB5EbVnj7bdKk2gbVL",
  "key4": "5VEzAAZorzHf5E3JUCfiDWSJYKs4Xg4d2gJWkcDbgTeNK9wfdYux8nYaXEwRcG7RKhccNBpxVvbviZ7dK15zVx5T",
  "key5": "4pRaT8YxUVDmrmvUXMsmkUab8aEXGAx9zUxj1iuhb4G5GTfBE3uavVVyi6FVMhCfN53FVwnBHSGtKW8WEdEggerT",
  "key6": "4aYtxeBEDMJQP18mq9EjNTkSfTRV1SioPN1nZeh2JKF8MG6ezvQQa4tCZi6f4h48oUxdGxhTnWpnBTbNDV7LFQ51",
  "key7": "4Xss97HjdZhBzSX6ZcLic4gWb7Qs2jK6V1joY47Jbcgp8DN7PzdfTC9NEd9Jm9tnmJtvxBfDteQ3EsWoU7PauMRT",
  "key8": "4r2KxcsdTVGCeLzzNYfUKAq69nv5rVspLmg5LBxqxwg7roxm4nCmR6xmLHxz7PQFFBdD7HAsVoQtvr6xBS7kGhpP",
  "key9": "4Bq3HrGazynFpWsuaPoTMzAQZejK6BG8ZRw9iErT8KaffcSnGcKrthu2ttjXPZm3NCPs4iyWJWBMRPWnZTcQ1LW2",
  "key10": "5hJV8z9WDX63iA2LeFgzaRWB5CkNoW9cK322tT57kn8XY1i62y28HqATs61gBKCb2UyTazi68QE6PP4fwAMGgaKA",
  "key11": "2WqNbQm96rrcZt84EkmPYdfhgeZEZDSFzxiWMmCJQ3TN7gScm6z6a3MpaRc3RDRNadv6S2YP1fFkFSFkNaDUBfn2",
  "key12": "26zb4CY2TBAEBBUcz88VgF3tJTmDjMQofno8bkd7oK9fVRbtiJHkmMq2WKqofJatgMQhZafXjXz6oWoXZrbepWXm",
  "key13": "4wNAn2EuJADbQX3fuTnnQD7wRywGiNQ5URXAr3gekZecuGWh987V91ov9UztQi885TWjcg9HLBBZqwaLiGcoGWhi",
  "key14": "54bJ9DNakNK5Z5NQLWQXuCQLs9owtRMVi1hPn34UC63gMDfTTHSvwr1MiFKA32jUSdP8pLrKGpNoMjRTbgx7hYDr",
  "key15": "xwZSDh8L29YjUgLZya5wZfw8tKhmPaMNGRNXMTMs9ri7jovBCuTP1QUJJ2CvTmn7BkAeZVR8NLg6f4ogqM8PkxU",
  "key16": "5WZmWrTMu6FhBsqE1JkhXJAvCTC3d3V59FNBoDYXenfu35VZKKuHF5Hnwgcma2u52mi6WW26Hp3Wko5vPKFHHL98",
  "key17": "VrB23pMJSD3pZuo5Uf3iqKbk81GB3HeRJ4gPpmpvQTVLCczcsfQhDoJxip6WZZWBWiMZjHvfmjQY5DadHFodiE5",
  "key18": "16EGibmLVU2BoL8EgXkMiGKSvXo4Usfk614M7pjhtWUAqMVqGmV81VNSi6LauxM5FgnXf3fXhns5RsTdYnSFjHu",
  "key19": "dSEkDh3ZWqdZGzFHQeocaVXQ9ui8BWpX1ua1GaGQWTVdLNzdGodFjXYvijq4LHqSdihGNixeUkFBWFNsnUpshF8",
  "key20": "BMAboTDmwVgbb6DabDcHW5VYdtGcMe3fAaGc7yc9t5w6ZvjTT58iMLYR87HJkap9WRn6zG8hzcyT13Rz869PWLJ",
  "key21": "2A9WNKNfZJCcK4TqmZxq2KeQtmgZN9zcxDbMNbmRwTJ2iqkRWnLSwGoW5ermmZjmpk7q1gJUZ8RLBv41DyDtbAzB",
  "key22": "2u3yZ1UtgmEcaxWA5X1KefuYfdHS3T5KKAgQRe1gQJZp3Pjm55QUT97uEU5EvGX9n2j35fS8nbYA5pRUAeHSrWAR",
  "key23": "2rVb4pk2ZujFtrzzsq4EsKoZG7RwDt2omtB19TP53jXv6iSCUgaNe6TmXaHKPoCtPV7Zm9LbXttDB5156fEvJrve",
  "key24": "EAiYH3JyKRL1283xeXDRcuNfPjjhu3qdWdi6wFvf82r2KJGSW4kz5WtpTcx4EavccsXWqvgWTLpNkvdyWtmCzgX",
  "key25": "3UPuHdcnMtVLBgiouruKTLzHxS16HXBw2g936fVXF9PzGjEks3KFuaAAdyV1QKxn6a65cbaPyMhs8RLGyp3as7fV",
  "key26": "5T2QXLd64kGsPATyEz693Eye4qC6ySmCR6uRX7rg2b7AVZe2q3XcvfaqwX5ooLcKLywb1ot7wrCXcr3JW55Q3LBC",
  "key27": "XA1X2Jc34hrHwjH7BndTLupNxEaiTUFccZ6fdWUEZr8LkbmQTzay6UGAFBQQVEGS15e2iMmdJdHs5E7qb7q9vgd",
  "key28": "484sFb2uo2yqRMzxB23hq3RTtr28fDFQTt5Tm1XWiEYDQj8a9E8cJNjZA1DN3mzexqraTgDhtBw5nor3CE1ztaYn",
  "key29": "ryGFpcB7stvbrSev7tLgEvEjWmtgrHLsTwAUXZXDjTEXUvQzjeCcNFkoZoD1C8bw7i76ju1rfwehMKzNNGiTFto",
  "key30": "4Npe123uJagka1p1c6nYVBkBMBnb4c3n7emS4uoAb24T9KQvgpXS2ZzccuNny4HXuGwMbikC1MTSPKzpH94qG4kM"
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
