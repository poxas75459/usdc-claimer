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
    "5GEpURrSXmo6iFD2PuB4MEAWW8K4q6NWyoF2Ch1LJTY4y6aXoovPfPgx8SBU8u5cGDGSiQkio8DHjLHRNvDpCxYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53WHxAtFEowdCePfi9nV81aZqqrrpHZNifLpkJHLPLPwUmxDzoKPnmQeMP94f34xDCd52YwJLviVuFsYaDbuZs77",
  "key1": "3D8NhK2ZeECB674qNznQ5EPeV7RP9LTGGRDKHdaRBh6P5E53dHDYcDD6LeRuyBoBVqjsjtkiHFVdVP57qKzViT6o",
  "key2": "2gzxC4hFtvViRYonzHnVhMqXYrhcXEh6adfgdMZU4p6pfq7q9Gpuo4nwZ3mxdiqZXwGoQVpsDMba7z7DuefTdeaD",
  "key3": "3wJFBGBbvJKxE4HhmhKUVPDGjHhpsw3KCkeQ4Cky4UeTCGfRaHZRJeVGmCgZ7EWsgGBgacVjtmXpmjh5B6NmvTLd",
  "key4": "4q2rhA8M8m733LYvLKufgiAXHAjBSFN2LxpFkQP4VE5bPAroVhnrpxAkQcdCMqQAycTSosEdpoKm8vaMiiihGFry",
  "key5": "4cn1xj9VMpbKsN9PpeKsxu3Q2wwEQvqQ5j1R1eeSiEdikfeJJa4RmciQXfx1una8BkzWHfqkm8bV4orcdE3mZUo9",
  "key6": "2TcbpVnPdMLP2u8JExWE86cyCyaKMGsY8GXrPzCZPHgHaZWyyRLtzHxJ4yFb1hFujmCnVVpAMPY9NReTvFmRBrNE",
  "key7": "4Rxrt2Zy42vQCAXY8Cv68JUotEj4xSTmb7GmvcyecuJeuz2mbgDZJZc3H6fiN98oYjBNStidQ6L9KnxXuT48LdNf",
  "key8": "MNJQmnxgiKevpp4gR34brNpNc1b3Lh1QU3JjTkAFrFU61UKHeBh9wB1piedQwTYowY86DACy3isGcBahvQmdirW",
  "key9": "3BVHxUwSLkDt9r82oDxeZeytV5ugrdqLzpX3zB7D7Eh2XjMYyY8ohngUh7jyv7FHMAmKsmt9j1jkQRaccfB5WGH3",
  "key10": "3npUoJ5tqsUgtP8vw8VxezJNNJuzLncaniTsSJCbRzxtz1zvvWMrxWHAn3QfLMcYDNxDBRt3Yq1Lt9PK59UZzJn5",
  "key11": "4g7Eo3xVQZzKjZjTvGmcquujLBx4UVEca9cdEZd2BSbdXmsmMupNA68uzzXf5HXT48Z6a7cW6a9MhBASZrR43toz",
  "key12": "WH1sHMjuWFGwqJjjDfpcKWZjyJUR8kZ7tMS4xGaYJgYLaDrxaUAgoppGS51hppeaS5EUCaQ88F8xjKLFZcCRATf",
  "key13": "chBCr3RckLeLCDsgGda5U2B2MMaaaPkzcVaYdtYc9j1S2FYBi1Mx3j2VEcQ2wktHtvMho2ZstvQ1UgZYbxFtVEq",
  "key14": "2UN7VKbXtZw65GgruNAk1nw4DJQacxAoehN71XZsBi4bjjJ84iArsASexxz8kuKYjbcdt1ZQ7WQDcvYxBa8vnNWr",
  "key15": "4Z83kmHb9Cj14Hrwjb81Z7TTyvNmtTiwxbxWHorYw6oJzVMuEWMqdv8RUz8RzQu1fbjCUmodUqxopWxHEA51RE9P",
  "key16": "4G5buvDsRbxh4fR4nz8Y2gUi2uvVF1Ektg2FPfSXtaJz2ygbpDJSfdD4fcDjGZpoz4evQP7WuEMaz5Us8Mvu2hwQ",
  "key17": "2B8ehMdgsFrAuHhtkRenHCP3Y37ksuMz4du8GtftakLoydtow11StHUTZsfKMpLDB71ZWxVzmb3MnuszcfS1qFzz",
  "key18": "5depTddNNHnRD9scfb6yg48ThP1G8y8irw5a9xMh5rF35hBacLvs3KK87sY8LV8gYpBCaFR3jyrUhqnyzcaEKSWt",
  "key19": "2S29F3i7kD1qGQzYKSqqNHTrRcNAMZT7L8a6TDWbdjQQPB5iqQ4AB9RyBMrzLKCuqWotSvhZmEeAMrj4mQ3HKAVV",
  "key20": "35b1gfQrP2XDCDvKhPxJGTd5dMscSu9J2y3sgw47sEFFhEJMh9oNTmSEJFCcqh3t8XESpVPaVj2GhQfK36kx5KVv",
  "key21": "5qLBECERNyurxh8ypmvhrQGEhZ5k7V5w94DfNGG3GCYgUaeLFd3ofdKLyKKnwdTjXQ9eVS5rt983NXh7o39M9q4h",
  "key22": "3abYMW6BgGTy1rYsSQDvGMMXKdewDXLxKPCn9evVpFrWKy94aCpdb9C3aLu3RrzC4T334v27mKzr8VW2HjQoBhcP",
  "key23": "5jRGypndaJSWBJD9rsXfVSU6jPBYg27U8miA3g6fNctWx4zUL6dmuWGwBJxVA72WzXByhLPUmbRkiWBKVAxxWGcN",
  "key24": "3VKBsTWVkyHR45KPYextHjQzEuLY6kLW8KqUV31CPCAxqHQX5Pw5mGd3zLF2mnxC29VmQgGSJ8HDSecdVtbcVC4x",
  "key25": "yZPjntjrUpGdymtacrrtZ916gg1FAmqGAP7yMVaC9Nn5bFjZFytwMBVp8LAkXLDCPYgC9LVUWSBuQx9J7J1Q5xK",
  "key26": "36Edvo5Dsmh3Mpc3K9iTthDe8aygbQdxZmPJmAHcweWMYxya4ob6Gu6qZYtBTFgXb7GY11yt7euuVUFyP4rQ9mTB",
  "key27": "5n1MqNvaiNGrh4nnKDhnR8MbQ7UpD8LbhXV5HbNf3tAZSNYgty295tk8JmZAwdVqspaAYK8m8mQeLpnh7Wa1Z7K1",
  "key28": "2aY54CR1unVPgaqFdagab4rcAtTBn64zz4Vzza3sU3QCsEuWJAQyBdrNdm7DgVZh6JB6rJ1aBiY6F8amtBRDeXbq",
  "key29": "5EAjrkCkapF34xW3o5YhH68AKsgjJRYmBRtfs6ANEv5z2j88QBfLWEnfEDbx51ttoMq7obsPYzzbiekGXLSA5ENY"
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
