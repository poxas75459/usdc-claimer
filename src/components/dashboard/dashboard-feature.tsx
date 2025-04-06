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
    "2Acvh72RejjVJjUSEcsWEiemqafozVreiYeMthgeDr7wwpgqYS2MibXye8QzmHiChxtv8AXe1R3iJUypWbgX9oCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32rYPjgp9hHyCjz3HUZsL4ASxt2nxSCQ51xZCnwdr4u7AWgJuvFPBUumUyJuVEqShnSJeQjsj1xHsaqKFePosU4B",
  "key1": "vwSMPaJka8D6tQqpQrzsn2onL658ZeCQHt41gqkh5t4s5eVpeCzQhThyLymxAe9MUXzKEqTrykpC5LVeAX5n1V9",
  "key2": "3WSeByXarULQpdBDrUFcxh2K5PaTF8bZB77ir7eQmnWcPS1KRoWGSiR22MJhz51C1UcPuVKXuBfdvkXqL6j9MPLC",
  "key3": "2VupBmSv12knVNHqCXfmTyruhykH1UDu5fFf7t7V7CcidEyBNBX7pKZoBcsCdKTaQr6ns6rZfx77qsdeRS1NmVhy",
  "key4": "5VamX4vJtgxT1qJSPBxUwTpGotd3EWoy1QFXtuPyqnXaxAQkkRcsPNiD97PzyVfEoi31hfmEcw718CbhD5x6VYxM",
  "key5": "GCUNdeMjUjgjyhampqsRBmWVAbx8c96wGv72CjvxuZJ5bNAD7BUbgmyeHXxkS8W1D6HjkTNHru1Djd6AjTXbbEj",
  "key6": "37xHe9LbbgrBrUHycFjVGCUSoHoBj5Ap8oh8yxuZmVU8MQXU7fC5aowG9ikdzJoJxfSD2NHFAJgvMyLK1nEjcuU6",
  "key7": "rarSpyGroGouE5AcESUtYdTe3PALVbv6n6KcZ7CmTBPbEr1HLtGB2Nq6LK9ANcZmmwWzsnDBzpSjBmiecXfAooG",
  "key8": "5aGTwZj6s4y72GegvJKQ4QL8Wcrq7PwNtrnWisGDDSK7JhAnpQ3zTADfwtAkfs3HCN9QB6sNy9AQZwbikXCTxzS",
  "key9": "2GprVoQARinZfX3ZXAhVgV2RUSKarLGRRRebe4B8WiXe9PCt1Y3haWxYrfDVuXuGVRoh99kvMaZihxX4B856e1DY",
  "key10": "29vVKamoP2yENo1bz9dKWnVvSoZo1sjnN4Ka2TDqwEAYhicNv4ACSa46Y3A6bmmADo8sH4N68pjN3UksbpUjAoJw",
  "key11": "KPwbS9pddDVwrygqCC5CdVfUU3pvyU5KUKTjjLVrQjKhwe845Cy5tjQLzHMBsyMPLF5mH5gMbRy8Nf5PQcH5bP9",
  "key12": "2sEQUXQHTH17XZs8ogR6J25rjmqeKoDqHKxs48CK31EaNyPv3gVbc4BNtbzGYcT9BSiPQA7zW4uipNzvEgC15QDq",
  "key13": "DUskrSXMLYsmLmsNSxWUAveqxM9dR3sGoBq7Cu1GUkpHWuJuEeuiFD7Gw3pKXiApuqL3euL4GB7thKenCkHhgGv",
  "key14": "mjcYQKtUJZPcnzaNZKH88w5MjXaTiMoRCAFs7vDygprVpJWdPjBNXcHRCa17X3Zop7P1aui1RMKhb2iTsJVLU56",
  "key15": "2KXrQPn3WgpBmtq78itgMNRoM7YS3NS9qTVqrksN2XTH3AEdG4BgFQp9xLibgMaD2z5YrjkCRnZjUz9S7tq9VM2s",
  "key16": "siH1NWZrsyBTUGcN7UZa3eYDxCcrwMCrrhhyJoi9u4bc9VgVXjYSQta93kj5gJZQk5owGrQAMjXJSko7pjKx3KB",
  "key17": "5Eq5cudqQPdYYoXUP8c5h9Am14w9YyP1U5ic95N9uDZaHD6vSdgnmHDjREaEyQyRUQgUB1x1nvvLsfMg1rmt1V29",
  "key18": "5px5ugQ6hKWMUzfBw9itu6THXHESheKSvPe8UBJ9UKTiZPi8sRXCfDqcmfNDTV8pro3d9k6htBZRaZZ7n3TyWbTo",
  "key19": "3jiSLcn29kLrb8DC5hDjZWD8NjXkrkeEkXfc5hSskyk2tEdYW65DxgBCLeMsCG3nwhbzNVA2dxkG3WgLW2ZSN1Xy",
  "key20": "4SFxTT6j8wbDtXHh5mmjpBrg8Spah9vxtHnKDPWwvcHDhuQ8neFrVufq687wGWiqrZfzLQZammQP5YqsSxiDFBFc",
  "key21": "2AUyrvWPuZvR6AMYgehPcE96oyqgGsrgzuZ8e4z6grsXnEP83yiX7o7hxEQ5FwCTUvityr9i3nA1ViADTs3Zyj8k",
  "key22": "5o4gDPy4nCnFJGfphGWJzy9MKv5pP4Dsn18RNWrckhiGQQWt6R8BuDaN3CC7QXAparKBJAUS6Be5RuJXT1Q6YzCP",
  "key23": "5R39o9qiSWjMyP5yrGgLbXmkdNiKrPmJDAMyDPBzWRC5SDEopp4VLZ555sBEDjxa5B5W6AgBC81vzzCog7rjVeyJ",
  "key24": "5NCYrBDUANPNZUfSqXAUPNLY43fCVAwYsKAFeMtr3QMQK6SwCqFZW527yAv5UmBDzPotfqJn14sqCWvc7KiyY3wG"
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
