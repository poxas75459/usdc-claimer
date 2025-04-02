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
    "37Crq9mjry1sTd2arvNfkZryoZYLtT7U8dAZHjabqoqXuBHfXCjmnzkT1oWoWBiXLKmfm41UKBC7TW7ueSzsZmRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zfkb8KP4ovM5JsNtgpB3AgFkn25DXtfMovnyRGkudY1S42QknEqgWTGghZTTZFdbmduNAreexV2NKEuJKmUspSh",
  "key1": "2rZEgy9AGxqYePFTJJhH9q6r725WYsZPvSodhDBEVGd4nQKwpjLhhRzFjLtD12qpm8K8UKen3Ub5xGBxJ3Nvva1G",
  "key2": "3nC9ew4aarxVXy44HDJi4j1aZDpa93BpYmZ848qgsoZsUdJ1whpH2aNMPv7Yk7ZKKd1hdMvc5jiEjLQDQ4vjsMKg",
  "key3": "3uqKwmtVYB6i2v5127hNmpABJGgwUdadShhSSxRYLHgz4onA1oWvHKs2K66qvoFCJf6MyUQkiRGnwAVEKkvoDBxs",
  "key4": "jbbDPKzCPX4btKpyTQCqqPCLHroWXhJrAgbGduAvvJMoZmhmCCxjw7gRsavPngNtdyZdA5Xfm6MhrMAD5i8YQBG",
  "key5": "3kPs3DiPhnyB4eM88Mmgc4sMo6SuDQLgEyB5cR6zVmWtst3N4yiDaTQHfZrba92aJNyT7i7qF2zVF6TM5w2jvsEg",
  "key6": "4RVpGCotoxda45hgR3syqpQrJNjuE78CxBD6Fs6XkpkfcmNmwohPEXVCj4CfFUUV6cfGxN44ryuRGCuSrCUdNNNy",
  "key7": "5HVxmTdbsxFS6VZQifgRkBxXnwDW4YYjPiPMk2Dzrdvtu78bz5aokTLPAzTxgsPopSm4Kh6SmQ2q45ciHc8hSSv",
  "key8": "BALp3Ag56eNGSe8Jq1PxgVuyG4ku8koR4v5Yoxx8NWsS66HyHLMjSoSUrwMr48BmNdW6YreYvvyagzWowzLRXPx",
  "key9": "2BDbBbeKQ1ALKqfGVB136imCocVuB3P9D3AoABkaDcQnie4jpRCddbMGVFz7KuT5KGLJRwKRa39oZDNiCbSs7vbo",
  "key10": "kTBrfeX33rLjui5SjcgQPkiPT6Yc45AhDs2K1amMZw6XyCBVmPNapW3auSyujifjqg2fzQHwWiU8fgbuuSVYHTt",
  "key11": "4odsPqJWUFhbFz6tqJRzcAvPTL77emkNPZ355pBmd21KXSSyqtXFAP1nc4TqRYiBA1AP3Xdhuh61qDWbQ5UEQ7E",
  "key12": "2BgNzUfxdAvwFyXRVaihHgm2W7PA9JjiWYabU97wWyUhu9R6uTxVHDtBgR7R4mpMf7VFrTpSya1pCYPn6w6mHuBS",
  "key13": "5A17Gp5xpjinPvgz2ggsfnkNrRNhj6caEHdabCMXgo857TaTkwtWFvShh9hH6FCnwPaR3nBF4aU6zrNFPNwk3Tms",
  "key14": "2QHTsjG6oxpnNuvwgRx9eWGYAEzLQ9aoF4e3kwFyv77CeLSu6wf4dv47uuBE73oNEjBdb7NyipKkVdE5tdMMffj",
  "key15": "3JR1e1eeP9e2yAjb7YY3826qmjUVNmh2KwM7Lkp3azhTgZ5wvNS5eSWPwPBeqpcM2awQh3kt2cqcWYRtePQxckVi",
  "key16": "3RYFwV5WtqxTNVgpmjdv4pt7mHEAs6mD23YknGw7ifynCtzQzPoaFcAWta16TqkrBHgKE34Mwc5pFX3UbHCjgz8m",
  "key17": "3t35pyFdYRq95qzJvLei7fYfchGQUVPSfVyhp5BvW9bhYtJNnvrCbh72vpni645Te33jhUEKNA3kDo7fPRtSH2gq",
  "key18": "4yfsBWDLfbKjwBmMaa6MbuFg7nkTahPYJA7S5dMjUoVjWGCfoUCgZoWEEpcgwLifvHrDY9f1nLbqiTJ1qstFMEgA",
  "key19": "3VdPa8hWG2Rt2djUA7eoGWh8asY7cC6noKSpTNGde2jrb7pYzdiadBVncQT2T2cTyRFaasdXjyphQTrxE3hmm49j",
  "key20": "4S2R5xXfJzi5W4WPVytguWXM67dzp9SZ8QrJYTPNTu1hAWqe1ak7v6BgvThuNukAptNKyqFCK9ipUFYJWPHQykPs",
  "key21": "2Pj2ScVjoY8Xg3qvCUVFaXaShi88QaVPVVEqnZqyRDPWHab6ByAghjXhSD5Vqna68TF3K9ejUxdJjoBbhRYyMXkA",
  "key22": "3wMxhbGYSWwaZ8WeoYBkq2fJ8LoKDRCZ4kLFbWLGLTUgH4ERPTZqBdtVgRbzsNXbpfFB8dBBB8aWeLjcsjE6dejw",
  "key23": "51UJ8aYBiKua31h922MzgcaUwpfGjXBZA59DsCVrVgAtU9e3roLSWXaX5xmtHHoVVrFa5D25zipcCmB5iP4zPQ8q",
  "key24": "41eiW83RqVqV5dKjN9CZVErzhChfnpi9vhRhwbaZG2qQp9PJ9uZkqmkupyW5UKaXEsapoUkax9raadoC8pjAFSW1",
  "key25": "2MRgn2BBuwt4qQfCkXz5Bt2f5WhWrAXazmVeE9smYA58utE5rbRMhyAa9UftSgsupfSaKe9wiMNPDJLgtkVdFWUL",
  "key26": "3wz1S2zqgZXZQbo8QQu6xQAq5vyLSK8w22BPA8vpFNPuEFhLRAjqs92tvErrVMmDWZiwhE2DXqPpK3MHHRBWQWrE",
  "key27": "5xh6teFftNjExiTsgvcjSEbTMFWFmrMaDQuWxE81Zb96JYhKTVa9NgyKfaFCXpjjf1LM3BxpZQLR4hc8jpKYZpcK",
  "key28": "2zyWXbZme2FJCA7oEy2cJYwabiNN3K4CdxNqZUM4SHs4jQ9qEmM7rEbdeoUaTAbqSFoUQkxE5UKqoTrqT71u2Lfw",
  "key29": "36eShjh78RKqwj31K4H9qBaYs7R76qaQ78hkNa1B3Cg9Lz5FvHsjS3nBuKhikjikxyCVn6Ce48RQurdowgzwL214",
  "key30": "4BA7rufocWDRG6atL8X7dQSkqHrW84PHK3sVkM77LUprGaYgc7Vx49NAX9MT1YUNbvydrDEL4nU5mYeFz1abpNex"
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
