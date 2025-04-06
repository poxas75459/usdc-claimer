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
    "P8rE7gdrRfCdS3dBQpE32RDMS6YnL5qkje76dbQ9s2JM7u4VDTm1dXGGf92khhbagk2mQKvx7BJag8WPERzunmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DhCgEz26vkVCnD9dYPA9GxT4ct14Mh4BMDUWFcLSDagqD6H9gCnSbauyP2h3uWb21V4AHXW613AQWFZrq2MGJ3e",
  "key1": "55QimBMUq1oAsQVvCrUMmfZ8DamMtFHmyFSB1sV4FABiAmrc6FSYt8rQgrW6izv2KxmLZ3L2GjtTxQ6iG2kurSsc",
  "key2": "62AnnzD3KDEUdYvYd6L1sfXzrs6AR828MoGPkKBYhErkXU1sWXWyMsAbYX6Kdijg2qj7H4vsS7CNyGrEvUosuaoR",
  "key3": "2ymErYTKckwoAnQnk8Z7ggVs56GHyfEcjm6Ve9Wb9MFxBviEqbMwN1EEaoBQ8N1fdKTpkCr7i5Uo9bv7w1ZreR8w",
  "key4": "7mnLKHMhaVYtFmRJ1PBN8kxWtSeaGpwzw1y9G1nYWZ75mry1kGNUn71KioUTR41UNGn1P9gU6mibUeH4MhWTVer",
  "key5": "pXmZVQv5vN5bFhLAJobYyvcSvgPBrsmU6kBibK6kxWMKkF3jdCD7kwhCPhLUEQHgybUNQFkJkuGdCg6DUSHkmw2",
  "key6": "4AUkrD19VFWTLY7Jq8THNrt1z4VDRXSCedwpH2kdkDc65qYLkJbAn2gzS6wPxxDSJCKLy86t3baF8yXJ5eE639SP",
  "key7": "ztDMnN7WkDDdJjJaRjZYEGXUoVwisiYNuTq9zDN1aSbhn19Lqh8Qbhq5dvhHUPibDkRYQv7BMjiW4FLUAfQy3WL",
  "key8": "NmXBxDbRx7zHusR2G7PXnXSGoSMWRCra1a4UgsRo1UHa62TBK74abNZdEsUQsRvfWnQKNErk23xk6AsFoHU8zJF",
  "key9": "2ZvLHLWTc4sLGiE8WVFGKCXV7nzDYGSSa93ug9umRkcSSgGbQE7gpsaaGBDzqLVsVPSgZcVwLzLb5ZZnFXyssK2i",
  "key10": "3mVKdwKs5GaMW85ap5on64ZXibYvGU8mq9ZySHcB97QRb8GgZrN2A4VVF1EPTmXJRSewVbaPRZgFkU6WjCg1zWhD",
  "key11": "ky28KJQzFnEVjjSMzr1GyzjNdRLEyXTRH1R8AnmrvwWMu3YaGDkSCcazuL1Hg6bFPL4dvFiwXTihb5gC23nje5o",
  "key12": "kPrgY1u46nQvYabEJVPTgBDth9KNFQKYmkh3CP4wN7bPCFfj7Hz6zqEkfBrhCJn5btU9fHAxLuHw8j6MbSE6aps",
  "key13": "3PDHqDF2euNvfHoqpbAaeEhmKcRTPWa4mD6eZ8hf33V1tdxHENvMvAMCjaxvJtr38ATYbXvQc6zKems4chR4J44M",
  "key14": "2kRS4wJG8QXWcRxLAvycjtEpSF7f2J1F9fWLRvYsk5NCztg7t3nGP1ShcPF3oPxVvZR8iw3k9bLNVPVrMj6Q7jj1",
  "key15": "2jTjqn1qmvYtsYLAyoQk3mjo7A42o3R4LaZcUgcSyfVBDgZuMn5uHe7EPaDiYTMqv7SGKwpfVficdLfNhzjFPHMt",
  "key16": "3yNjuNVQXnCaxHtPwcHrGEWus23HuCHaXM1NzgU4GGw5XrZ3YDb1kcWxuhKg3u4Pt89Kk7AtDDRmpWKXm5cDLiVq",
  "key17": "2ED7iBcuvwW3NMLmwCpN6H5frfpQCEWfQ2nzsxB5BhLGLd6m9tTyY8QoswKhk8uCymeiz21nFxpR4bTYsAc9LdRg",
  "key18": "C3SQsHydxcCLGTGh9wVS4fQfrg5MnwjJQhN8ePpQRuaAXRJ3hKCkTxNo3DDjA6ZVXST4g4Zp2NvjbfgCBEbRcUd",
  "key19": "23EoRivGQEDyH2NRrzGvu5ZQBXgGWvYpDcFh69x7rwtxywS9sLN4KBddgGzvUroSHb3xwMnwr8JeDgVud5DgQxSv",
  "key20": "2Xwr97ad3m7JhztGpkPTBQorxC7edRg67Je3a4eD9Vew97EAgRziVNe3NQVvYVpYtzpqwYqYa7tpMAF2zTW3zn3G",
  "key21": "4r27uKZBFUmxBm7TqrLHBSzai3Lqf3LVXbKQqzfjxUxteQhhexcqi6jb1jEJv15mV9BMhj2PzeXyJtkHSYEU68v5",
  "key22": "3GfzUoF8V8edCW8CEH8VLFYUTGtWhXZUaPvRTZrTfnfMfB3ptmVGWc6VbMVeNocmfrZGeGTbjL42ABFhFLkuXaak",
  "key23": "3ueeRrSwaZi2wTRiQ3xMZhsvgtFcKivPLkkSHk1Tuxgy3wrBBF2nfrNWL3QgZTKA3LPP3DH2Qxb5XcWQ72EV2MNN",
  "key24": "41yf5NAQB6D4Ck63ji9mnAM56zLzrBbW8SfhVTjoDw7n28Rvw4xCme2cSf2Pvevz33wKADxioo2X15riN1RQKhzW",
  "key25": "4xZGmorNT6bXNCzQh2nTiqyi4pexXWUcFp6E815tMgKD2bdvP7PX4PM26F8FEiwQm6mQisKco2vLTDg1jHZnoLiB",
  "key26": "2tk6nszFNGwbpchtWP2fw1sUMb5xxyQtbUe3nvcqreyeKgzWLrBuBzEM42azJ4bTvJUaU7ZuiR82VJJEGoJNkQsr",
  "key27": "3hdYArgAVxDbPwYRdsMF238Pke4JbUXd6GdREGhigyp9of4RsAGWFKbzbi8twQU2VrBYU6idkN5LUuCn6ZTymnJ9",
  "key28": "942ai3cZH7eRdhzYfSWwg4jh4EPJ355ZWySbbfB1CoTgMdVkmjncj2YFoYggfosCaCnca4L9kD2yxNmWxspwdUt",
  "key29": "4gJPoat1XHKqg3shQ7btJ1VTr1QmSWFK44PbENwxN3yKBj5QLMcN5kcW2pa98WAGyHAeLWk9DJowddZGmeqpFGjK",
  "key30": "5wTJNLVP2GVgBKJ3Wud2jXeaSwewtJ9cf7ScmSVyX7a7YAsifxG9kjDfMmQaEoJbwV5mbqZQcD8ys6cHRsfm2ygV"
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
