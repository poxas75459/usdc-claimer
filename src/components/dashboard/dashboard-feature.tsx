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
    "2aYDGDrk7GFSYP1j6yeFQ8mBMQULuLihQ2rKEm6BoJ1Rt3u3BeN3i3U3J5enuLzu6M1QTCA5apUMe7hH8LtFHWX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UKzp1shrHtQKrpMtyswmvceXFvEZ9QR1yWxeymRrPna3TYg3DgAbVNiimoY3h8y1tXcHcFruHrJaXY7ZP5mJDkg",
  "key1": "hitrZBhzDAuFEhmPbi5U7Ey4CJWnQyaQsB6J9WFqMMigTwWPpWzYH2hMNEtdS8NykB4rSebq9dicDuJsf5jmDvW",
  "key2": "5LYDVWgVfzfHpZgvcnDC1XBapKuz7K8PyqQhuCP3zD2JkhuT3BfnpCniS2ZErj4dpS8H8BSi4knbyf1sWEs5FwPA",
  "key3": "788JLvn1GZ6Ayn5CjuBbDWuwj8xFJp341DKF4jysh8eNiv282quBp6jX84aFCjzdVswmJt1HnfGHZ8nFnrEjFRw",
  "key4": "5oB74msYg9nQkiHYgUhdzNqRS45RtiyQVaigom2v77ziCbQUSQBgAmHhACx1ATZcrR4iLrHPXG74FSVrymEPHUXM",
  "key5": "5N9aUmfXYtm2M2fdJTfpmiH2L4eLsX1hnCrDq9FGy7MRfmqvvXxrECTJdPT85FMpa9n6HEswBAkZ7WR2qBB6oZs7",
  "key6": "PrfiJwVSq2PaD9aE2RXF8Xjudtr1z7nxzL8Zpq3PJBzMK2hHqRie7J8YijB1F9CJg7VjCCtQucXB4nPY2pFQvLH",
  "key7": "65FaKtDCLQeGtLTiXkqbSjQRm2ozXmhsfuonfAHS2GxUc1NucdQ6Xukf4pxndhmPCSNbBLREgtUky8tEgc1MPnHP",
  "key8": "58fhCv7ejPfGACXQkjfUDz3tjJ5L1PUyp9MGAesAoWU7EEdzZUuHxQ577f78jxzFaNh9BNHresUpQyUWSbzqVVUX",
  "key9": "49v2DWAk69XY8p4kZy2DmYhhd7RwBMRejsevZBHAwzVxHsuaBw2jew4ZqgEz46eRQm83B8sX667Hxgw2UrgUTZzh",
  "key10": "5uE83SEPSGZ983d6TpCZvxeYZQqPY6imF5LvkWzHdu3afuiRp3kjkqZD2hFe12AiMiqmyu3hgsAb7NmCnb4fdx1v",
  "key11": "5UwhxxSwXLoqmNLbVxBqd4eBhW2ousgzhx9f2sSRsNV68LvqWY21SutkNUmFv91GEcrxh1ayBwz8E6t9jFRFWrzq",
  "key12": "2CzpEp2r4yaEaT5z2oUV3GGJCTV1eHuuRyJWHFdCNUbkDmutuK6GnRtD3pmiAsapBrtNAUt6oZ9vBVcW1S4MaaCN",
  "key13": "5uioEJTW1wxf5fiTHUktKfuP9MBp6eADaoFKh6VNKcQNP3mU14sWxN4mv6rr5nWZdajpUTvBHme7tNXC612LAMCh",
  "key14": "3Evdtus52RyfT4tGBoQmQCxBYBVHwAtBCYTwSZ3npmGFK29E6bPTeSpVyckEBeAEr52HCTH2BtkEfgUYqbcsb42A",
  "key15": "2QjwrxcMh1AJW7vjn1fHReDmZqSDC93wLZHg5DDxZvg4qbBBCJTP3PvVPGeUwnzCfzo2kJPpm9AcCPWfpVfFm7Ew",
  "key16": "4jR1z87AZJbn6JSq7s3X3sANkHitFFRYPuMNhTdP43ev3H9fTShQHrc6AQD475MGFuBZcrzyh4qDDqD9qPZFKBnN",
  "key17": "2fJdKpdhhqurQGK318sEG2hFWAT9CSVLX6zQy8rLFtLe5J4uMXwxRSNqYC1iwARHD2bsuoFff9V3ZGga3Yxhh6xo",
  "key18": "x3fX2dBT2eC83t6rQAXoNwnFqt7ZM3iNgUPuANzf1vJHM7w1E7UDff5vT81cjJz8qNN2XU7Yzg9GoPRrtCULJZe",
  "key19": "V7ykWGeRxVVVBXSXSpXhkreoXXuyH4DX3H54sHB26QeE71GpQpKGwMqLv2EjqyG8PQMigYYQoEq8T5auiTFnK1o",
  "key20": "2U7cAvvEJ6dQdsknrAfSic5uLucTSDqN7Cuz7svidbn3e5NoJfhdzBoeEMtD99TxyUUctMkogBdLPcVcdhQ4aeFN",
  "key21": "3TSYhJ9hxXxhPqhWknXvPVsovFBxja1PtHnTS322XT5nQU1NRfdZKnjrwVNt5wXsqTH7tV57wN2gop2yHS5eF7s1",
  "key22": "3bUxR8JtAjGUGNWHxpCspapkhLiZsBBydXzYAGwxHQ5V5xvCiFFJUh9EjgEbcLrvTHLHFZjrYfHNUR2cRRuhNzoJ",
  "key23": "wZXeMZnpEgEMTEnG7NPi6eY8FHem14uiwvmWnUPhPhV3VxuJLdLwyDt8YxUk4GDMTHEXBugVysoiJLCLJ8Vno1W",
  "key24": "56zuHnNBDTWb2DvJahbRgcGMzPwKbjruvpuHnsyyKj3BjzhA7YW84Y76MyW1FxDkYcRXLkz72Zs2346mhtpPd9S8",
  "key25": "mkFhtiExQZfigH5kvvQsCh7GgUWAbsh719jhqWgojPWxfoZeooMLQfoTtq65zYtnxdXHmag1GFTG2uhHxJ1tZdV",
  "key26": "79QEojvPUoeVxRKP3QM2uiPX3fx5CDkHiPgEMLxLsES9VsZ9WnAWYzCGTuoLMCJ6xf98bg2Ffexy75BGzCvGtRM"
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
