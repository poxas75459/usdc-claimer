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
    "43q7AprYjswa6hEJNBDaTY6azU346UDtxmpSyos6GpLPHvaXvQkDFgbyoLNKqHyxfroLaeiBpSpuxDcuK1JwpvME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u5TFG9C53X1UkVaUeWVqUxDKQy9JmaPGavb9XLuMwNEkQ5CaXPiK5Xgo1fCfznL4K6gAZVZpTg5XFVYtc1bLnAV",
  "key1": "464C1FVi8oUGuxkLbKveC7oCHq4G5Y3iskrW8osez9NCMmHcdG3A2GoVf5E6gnU3G2J8DrBE5UZQ9tYuEH4G5Gvs",
  "key2": "58ZEEcZtMUVPt2182bAtz4g1bzfWfXaLtibYhFUP8nH6iLsARHwaBPxjZngw4ccKTUDmd6br5GqwcJmFG1f2z3xn",
  "key3": "3SHb7HPuXJM1GA7wvRKwFjcpmcLZx2bbmHu9ENgSMyWZz1U8DHxo6QYZdMkogtAgiiWuKtAeXtQ5MnvmKCrvuabR",
  "key4": "3hpV6FbnXgbuDLrrnRVb8trnmzagf55sMSoqgv7HE6WmLVsqkLHMA3WiQ3cUBUT3pLSR1dttQyTFRUkLzDTxA7yL",
  "key5": "5UVpsBLbjoagYhbJq6Fx6MQZUcSTNnhVMViJdFUYAWV4Bku43ErPY1Wnrq7GSPtiSxjHExm63XA16BWRY7D14Gpn",
  "key6": "3C2243NsSN15bKD41teXoak87NbSPibWTbMWrjPWt1UETPYrFHa9CTN4ka3bGPUTDjsPV2GhCvPso69g8J4x4crh",
  "key7": "589b34m3w9acPj6sdkGXJieqUeAccMQchuX7AuBVY38xS1FRgrzWukgeDu7fYEE7rZnkgk2LVn3A5xWsGphqNihM",
  "key8": "v21tWQJ1ZvinMJiXZsYMoHz2g7XPrU5a56fmdAvddiGGgDfoaJpDQnibY8phvFRzQ5MetWiWqvrAsJBRPKwAXVm",
  "key9": "4uBzqUtsTu2mBske1vr23MA6aEaaEDNMCyPDaENGfDAyG6oE4fEdYxMR8tnZp4QW6HM5bNuuREVFnFjBCW4ejcu",
  "key10": "5L7G9KTMVqvXXNSPX2GWUS25hix5cjfYtWhmhU5W4i5Z4Y7S2fKzCeLseJkYmK7a8suuoHQqydsuUp4W7n6WVMaQ",
  "key11": "59ttHVidi1jkVGhnLrrk9GoKoLquv75a4Bye8F1EmpfYezwCu9cZYPukNenGq39XHD4z7qWSTS637W4zn28U1DzS",
  "key12": "4eAgHpp8F6UkUQGfmvhJPKhpkozpCU116t7vG1rYKCKQGEruKWCBcQ8fvUHb4xyGmfxSffSVTrcJdjX9spQCjeWU",
  "key13": "55Avte328KbD3Zx1a16zHsCKs3AinjLZ27ivKvNhjqJisyDDhH6owbGbLFLt6uUsft7SRqrmrBQUcMELq4WMwtRX",
  "key14": "3wkBhcy2LhUpbexEkHjCYx13LkjXG8V69Xp3Acw8v4oZ2QgbM6MuXrbm1qRAq4dft1EnP7EtCu4gKWpseSp6MEMR",
  "key15": "5w6B9LDemBJxx7EjjduR4sfQMhT5wPZHTrvHKirrAyHZ5ZqvVC7f1YSsDgrF5URDTRXRby1zwY75TpChAfpkDV7d",
  "key16": "3yi1vCqMPjQBtKQLn3xFZvoP9qcJa88e3fShfr3uh3C98ih1d6qxop25pq8jrmWyJwsEqbs5j5xRG3qaPdLMnS6o",
  "key17": "44EEs2SRVNyMn8E428GagL7RqpKETz5X5DaGKAhGUmzFuvo1Hpxp9GfLjE7PKSF1B9Cmyna1nbvfW9WLUfQSiW73",
  "key18": "4dKXnkqgHWzUAJvcvajmn9ZcFR7NTcNs6p48YyFfat6GeBHNBaYfPGC2zwFFGwGMyEuJKh5PmYWB5wVz42n19XfL",
  "key19": "2UqExfgZURvV1goDxPrfj8mdd1cSzm58XbA4WMbsnHN27dnydi7eD1XfzRTdkapqiKc1qwpX4HP87nhPDK8LHzQR",
  "key20": "4MusS1pDThvL6kusuFGe4yLVeM5nEKypJmGXeDQRqv8Z1PmYowJNXxUgSiyg7uhypHz21aYLNzsKvsNN2HT7jCuK",
  "key21": "5DuXXgg2bmZLAJ1oGdN2rGR6HcrA8xZEuWWw99qVU1DaR1p4cjhaTfza6wCKuYJu3sTbUmeZEWUd4RHqfheWftCN",
  "key22": "5uqmZmgMhuNSayNMeJdTvzctehznBuLu9J4nFqwGSNbriDWK9tTe8kC7h74cJaoJCQYW4xbsyppUHU4hyMtAET4P",
  "key23": "5Hv4Eeb1e5Azdkk3Ce8MNikUjKsxhzo1GiwWpgvmKAs8gXKAWWCKWiWLF7nFLfCPqv4yKxa9LqfXVENo149ZewnF",
  "key24": "3yXT9ZmoXxfYRABrnnJ2SmMts5P4sQnePeYWCB1ruRXPf3Dytxtkx1VUxg4k5hrcvj9t5o6qMsRNjfQctQFYi4CS",
  "key25": "4p6DgpCdYiubjpsdbYgdjuK9h5y8pAspxMKsoA4bcFQSvMhGPMxcbhyMsCh9GQ34zDvtxKncWecQAWnHGvJqt8TJ",
  "key26": "3JFpiurGzCMKwXQW1gMBrCJHLfHekXFoket5pNduMfwVUTaMaUG65AC8LeRBwftFc7ykTdFsGG1Reho2CDrRkwCT",
  "key27": "YgVBrNXRF2GhSPSR1ajbaWsNn2Mn5zRkiQtfk6DFhqv3vGgjUcLtTEWoRmnhXoEvgiKLSgSrk3DzAQJ6EjbwmTX",
  "key28": "4e4QQVvgs19TDeGPrKpH7PVSYDWDcPBmjunto8Mw9pmQHFtkHhiyKVSoFLFp2fo17yBqbUBn84Tz1mNg8HY6T8gX",
  "key29": "4i2n3cUqTLBp4Kdxsh3F1oXSzRjLEQqK1zm5M5Qzh1PjkLcwVVWyALpwtbkQ7edV9pEdstvCeAtizCbpPQ9fMeDV",
  "key30": "2m54KSBXCMv14Bi7ZaKYjoJU9mWn1xqTXmViqBKgGi5whRfgE9X2S2n75cd9uHdt5eQfsZuGWbEiGFnigPhgdqtK",
  "key31": "2naj8KTQ8D6WC7WB8bdKjoNSBgaaNHwXtorcr6KLvniUD8ugSkdbq4ZjeZcyq5bmYzyCjReufdUidyAjDCTzav6X",
  "key32": "4BKs8VKNMwKH9Xohk9fhBPHdN9UHCW4HEqP6WezaSTTvuWP42CPWxQZhpCCMe3RHe9qrHB3a6LAix2VC9RMfxLEA"
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
