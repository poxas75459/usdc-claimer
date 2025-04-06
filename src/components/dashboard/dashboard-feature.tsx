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
    "2mqw1suGL1TxpLb5BkHy4kTFLC6p5kKpyrqZ5yERLxydJ5HhGPA7cJDXyRexcw3oZWJ48GP5xCmnDbP3E98aCSH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PMxK7ruzQGbmCfjXYuJy9q8PUHiYLoLkL2vFHuGiLkB5bZNRXJHtqW7GwazrRa3RRkKLWxvqvvCcNF2WQmZfLc4",
  "key1": "2fyiyLCimXd63kJyL9bsrEGwKPJ6yPJojJ8WjmJdeeZVxMaZKB1gkQAViYCx3sprqGKPGxKnYJbFhwZNkxCiazUS",
  "key2": "DFu8MCGm7axNUjb4JV65qfPt3VBRoxquusYwWFwqkeyjno5dn28QuPBH2DtydNMzgnEaFj8jL3MVrBbccDsJeop",
  "key3": "2qQdkXLFBvg2z2syHNzrYtwab6KDYJrEnMUDw4SWsxCWMuewCP82M8nUE3XXj7QF6XQr8hAjmkuuUZ3xK92nxrvC",
  "key4": "pPGpHMdck5V8kMqZMMJc339U75CLgVfh8jMVJAwGs8acgqycqKQBi2CjaCREE4a9etF8koteeR7DsABrZDRJ5nB",
  "key5": "3XRwTm9UssTgvx8pQBz1AfvkH9JCZ2XtUDTY17Aymj7aPkoXVPxfTTJRp6bKQrWs5rYAwsTmT6gkaeYvadSDTJ5X",
  "key6": "3Yfj1Y8eyB2eUKkdScxbnusuXVbze4JLcAdPohQWaQjzVLkHpVi2Uf5mCgPWRQi4ncpuC3hwmpAo9vgv9fqZaWUe",
  "key7": "4TDkJAUjCG5ueHV1P8K36EU4EJQf3e5Wfu6hbrBJBcJ4m7JM1ZetVT1jhur2JaCNR7H9FZaneeFPgvrqcmimbsm1",
  "key8": "2R6ppacbYJEKiZimrUX8FFSRx74t7rqD9RZS8qtr7nApef3wxaJrYErgxTqbNftdRmbHSYN8r4e2vmucLCD71G2v",
  "key9": "4HfXtfjtUaa44sGwZvJPPQEVaqBb1jFEaZrNov84ZdD84mUt8o7YVRKAcJzySkDwLCYBM71C37RKSKip1MC3rNaS",
  "key10": "2UZBfzCQ7vyb86yvDGD88qSELAfdN5fk7hUs31Giqz536rdeYDMasbGnMpMA6fv7rLSPufRYNFAzZMcysCj46ZM5",
  "key11": "2RhAYhwdXVbv6vEzyeXAzDLVGCHXinzjTjjLCbM77sZ7xJxLy1ymCW7M5V2fDDr2coGCiLUPDEfSBWcM1bPwid27",
  "key12": "a5Q7BLiRyNmu9MAceGjvwdo9Thttx4kNasNz9fgctztLZLKcfjXPW67MKYKBLyL8fiLyLrb9mXdJySyCZpDz3BY",
  "key13": "2zQRhCdiyLfvamB3a5RGZPwvjFoZL3u17YanYGzJnDLrfrRQ2rZtVy55nMDg8B7bcdCaWaP1vv13ajbLJs82wvrZ",
  "key14": "4gXQcGBcuYfaNJLumGv3wKBKSw6TbgMJrRofCpuwSzfSZmHeabJocRCkXh1U3A4owvB9heHEsnJubQJ3EBMHBfhm",
  "key15": "4bjb1CMU7fVMgfDWXQaKTFDiBEy9vQJaMX3X7ng8r6KjSu9NKK5idKFoccZf3GSjkaBC9jJZWCZjEa3HJWSHBsZJ",
  "key16": "43VTEctzcV45ETvneuS7vEfWp3k9ifMrQVP5wTBy8Thamabc5ad9c8yHZpyGv2dptSBGsx3Wehn3wvND7DS3sUFT",
  "key17": "65gL2pFv6ic5CXWC6PdnzV1MXbkjd37HrV7zSwEH24wpUopmX6P24sbkUTKdMMqyhLNffzNRynZdBM1dNgBJm5Px",
  "key18": "4oNUGqQYnb2pduDLYwsoMm1kY5e9b8KGBD8h7mci5X5BDR9bUa3yNDyhWd8sSfptsYnTwa1gH1AF1VpRRPTmmHFQ",
  "key19": "4hShxEQnkRQ96QxzQTAMgoDfBKtayo2r9VaPi9a1Hgbw9GeBNHzia7zEPKpYNoUs5AMsRiTyAbEanTK8qpb8jtAV",
  "key20": "3DQJmz82XH2M1nRm1wyRy9wfstqUj2BQC1rFV2cB5xou3jenotsehLnFLQC5vdTiK2TE4DHeGKemKvmeBufQfpEi",
  "key21": "4eJMKmuvjrhZMn5whH8THZiNyixTmqsvzyzj1ZhXjAYizRQZGtNDvL69pVhtJbNEDov8xMzcjXi2Nj7j7YWtUeLR",
  "key22": "4hq1RN5tBTKnxAGEyKSS8GLE3kEpCiUvrHjP8kV7bJoUFJrtB4Ee96yYJtHuf9VZzmpmvSYJJAS1s77J3EhX5grE",
  "key23": "4k5itSCs6xcx2sW9zyREjbmayXmb3fTkrtphQ7ToLGteLWZYfMsK6xL5TVTGWNMrQ5bbTHNLJPYzavgnDrNwSiUM",
  "key24": "4AoBtBvCL7UzPk1LX9PmkD2jNUQddwdp3fjQsK9oEVZUARJNwLaoBy3d4w5iXBQHuwVQuFgB14AjSwwhbmtnXk1G",
  "key25": "3BWVxwAe4fy6nYq1MJAJb4jWFQYeRDw2VuH1LRxWeD3Y8hrNFDVLUe4Ar7cwPAi7U1LMi74H4mq9FZuNhL8zJzD5",
  "key26": "48uBCnKawsF2xidEy87sEC4pGwTBRovhKbdUduDuv4YztGb3EEGSmq35nXQYzbcy8fM2jkVetsA4ArxVk89Dc9HW"
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
