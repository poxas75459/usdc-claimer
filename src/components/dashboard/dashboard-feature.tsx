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
    "2QS99W91rJK2tFn9nBaApQX2w5vnuxGzc7yzCcY1Ybhuy9iCVExBZXD4freTXEwvKXkeM78R3ivQyoJXCahfCDvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4affsZiZpdxHVwE5c59QKiYX7JgdTvRq8KA9gUcfgCMSUfsPaDrmz1ATQyjRmkR6uA8zc8PgDwFZp72fRF4Mdj2E",
  "key1": "2PaD5kQR3xkRPE2FWTbS7Ab8tw8SghgVLVkHTGSnXTbFtFaPkPFqgY1YsAjCxETZd2L8g3YPMDQfPBQBREh9T6hF",
  "key2": "4XqH1u71Pj95zqGcwkwojyEBgXYVzx3vAPz5FzeY9cdt31gX5psQwAq87nn4em8ewUsc9QqcjwuDjxSJDUUbMsPF",
  "key3": "5RiC6qTk9Q8JDFNV3eXACTnMTG4GCQpqvSPQvnjQJ9Wu2z6zSfFPxj6mXVBwtfdhpnnpzR9iZtqwDXHwhnKMa5r3",
  "key4": "5JwSXtVLA17FHeJZT9QN4VdQWkLFNU1LnjZXN3jMEtU4McS4C74hoBF7ibTKDDBqBcs7GK3ch2Mk1jVqrG9e4UiB",
  "key5": "5ApspWWMPhUWken3rXVPYbC1rbTHFamKswitjxB1yDYHQHoMynbDU36U2QVNXekVyqJUpwuajKw7JRGFfz1qjGcb",
  "key6": "2ufrxg7uz5w7oATUkk1WR2DjD1LfJZeHdhurTsDXb162AqJfibwoAcNTcngukh65heAoCF6jaU8xMnfEufe2d5aT",
  "key7": "5bury2RVbvurYdp1oG98iBcDWUMYcz54Hwtw8G2BDdNCEzdmQ57knGSHYYnDu2odn2Qb4MECQMxHYduUFSSkUCKc",
  "key8": "3xAu6Xn3UN7dL6Mf4KvCK9feN8n3SPTwpndvgWo5b6XTaJzuYSy4ZR3vMPFircdacfPpSaWYQMBbmY3rTZ6e5xtN",
  "key9": "3GSqnDPBveNNgf2GzpuJ1xg7hgBJ4VRBtc1QPaHp9mHnDAeyF5L4dvekimwkd4hJnw5PVaMuMK6txNRnNfi3gMVb",
  "key10": "UNBSkft6aFhueH3BV8VUfPzGkxYP5tvF32sLQddn3Ypjkkdx2PSbhm8E6S2Z8Xutdq5JwcwvJx84rFbAdA9GUBF",
  "key11": "4JXm5c2rgvEWfQ8VQpCB16ApivfBPVPApNPvokkspdB8NmFkzpzpX7iEjWJQpcgcbVCU2Bru81vHFAprmrs5378g",
  "key12": "2F2BNgvMAC5ZgchbAzZcgLn54JcaWMwHXSYWPHhQdTmKYh5jJxj78QJuewUbKzs4pyYann87QDnjaxDQxqdr6HCQ",
  "key13": "648PYstXRCgwcoyvxMXzzvYrW8ZkVf12PsSg9aNR4hqVsc6dQAXhvDAfSuX4Bu99nSeVRrGC9QxcGCp8noz7qfyX",
  "key14": "2XL2z9xHrYpn5xdFGQPU4Q8r9451LuxMvSYmdTkoLLbQmrpNvkyYjxxYzTBKeq1upuMULNEXy5Wj3Y6T5bCihcRN",
  "key15": "43FKtij15KMEEJZf1n2bKSkVjVc1YHNhqKPEhSrMaFkyt4aku3Hdd7K9i3BKRr3dAqcP1EMPYTi4smkBS82DMCky",
  "key16": "34Cz5D5eQz2uyVkEhZK18cBfkZxdsGCtPHxJKZCStZj6d3BikNNt5C2BSnUMWiH53P3bqoqauzREgX1BmRAfPGnu",
  "key17": "3qoeBCq4NodkECxLrqoHvh8mXizYvkxCP7L1LoVw62pKage8J12QFtqXmRkBRVgUVxLBRD2KEmttwAUh7HD7SZi3",
  "key18": "5wPN63v8SaFMZsMZDu9SHAuT9fWTAxX8tKQqZAekwLPFthtFVBo6HXQsMuRJMXcNyuuDkvMiyF3rhtea4Rhp1BML",
  "key19": "5nwRdCi8g4NhjXvrjtfaYYYYhHxiq7M1PiTQzquYpVyfi4FkvKt8tx9Dye3Tk2ZMeBMx3GqWCLziABFgQAJfxf3s",
  "key20": "4tL3yBGdoMAbCpbwj5tLm18dTwEBdRn9EtjYFsD5RiyBpDoNTHDFMtmpFmztsoW3AV5dt4sm9BDUxyi9EuferJZM",
  "key21": "2wWxSMn8E8KCf1RedVFksGVXPsxfPwGNq875K1w8He2C3eqFdeWv2ikLhL8NJP58hqVnCoGXRdrZjZPDnDAsS831",
  "key22": "zYGHhS3MrZZYvyHs8vPaAa7iTE5om7ggHkVBGgtePVMe9HpB3UyV35MAXbwJBQxeeR3fNkWsqNqmmGMSo96xrRn",
  "key23": "WckXuwdcFUj2KSBvTr8aEHLsYwfYJapCT95jRhKKwWRwGnHKhP87wM53NyqtS6LEnprVKbmYVuqt45hiZLgcK7i",
  "key24": "4QD3DjufV81SUsKBEBo1n6HVF78ueaxb9ZeodANxUUN7Qcm2hscC6x7hoHJj8gKnC1qq6REaroNoo4FadvLx6s5D",
  "key25": "3m1mB9hBMuj3ZpbuH6imYhqAUW29jF54hWX2cXa9ZTkp8zqFpdFHd1JQcah7SwTWNkrbVvmdAPW8khGcnyGSx21a"
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
