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
    "2huTp5vXerJVRLcNX8iJBXC3fnyqYmzYcHf6SXHoHBMMYSdUD1m5EwByEyeQBE64PCfqpPYBzszc95EhzWTyjPPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hSK2dqaKF4KheiBLVfcTE1HzQBCheLU65xKuVUfMNvSM2KXRbmEpzUnH2WRCMDoUVqcJqDxkRGfw5JcFKQpQmjz",
  "key1": "fmoYx9ny8f8nJ62xhiTzagbR1VGjDv4yXYxpmsqejyBCcpSTFaVY6Hi63PBukv7tzKsfv9ZMusKL9yu11xsEw67",
  "key2": "f8B4q9Cz6hXeaKGNdwB25gZv3XjZJgUGkixS2DtT3ifP43R9j3Q5FYJh5H8SaPZx4m7curd72SUUBWP9GDpvohe",
  "key3": "VQiZ2fVe1Swhig37fG38tngwK2PGGAeCbH2etGiFMQgPayJM3FLfVXmqqrtjL56Lo2qeDopiAUT2y5nrruxbpeA",
  "key4": "4gThjgu51JRAaKQX2m963npoFkRrbnrzLwtmKsKeTMFcLwuN9ejVDp4vzDX8huUBDui5yb4spDzvYHMcy31oBUJe",
  "key5": "5KEhVeJzZhQAUWeK5gHQ1GSyELGC1UnFe4XMEC2TUDs3U285K574LBoMP7ereMqVVVw7nMgPwf1v2iK1NKx8KZt8",
  "key6": "5EFbAJhrxvyVi4R7q5XtzPkEuXmzgt3usopyS3ZqoUeZkYFenFqjZWyvxK6HF8ngXZQMWtujuzeDB5Eq6Fc35TYD",
  "key7": "2KqtfGhLfgsWPMBWEYDn33AoLU3SGYiUWJ9sW5Aczz15rbyiuSDy5yu1eyfzx6BmYSWHoZF38S8BqqgEAC4VGuZe",
  "key8": "45qf55k9Mbuf17DjBc1fsmERVQHv9nQBNczy5PWpvaSW2xgVHvpdKt2qnTFatnLNQGgfTd6fNXjBoM4xVwa36UUN",
  "key9": "4TydrfgwHoEgP6NTcdAUYmxEg5sSzsGVRG11YbLScmTNvutSNqk2FjkN349mj9zKhUjW9Jc8VzNbgifq9s87mD7v",
  "key10": "5becXhaS6jSWBw4rsdG6yboJAquFPeubkAyHQUe5wV8UY8Yvxaxgb6ssDmeoKxgUzR9N5CFq1tSpkTmQQaQdr2Ss",
  "key11": "2J7vqwT3EfUVy8sWJ2KaJvGVLpxjqp9qrzcD1aZqduKyXDXVx3XdbgT5GpYEJjzWS4vDEr9ATDCGKWtN11WZ28E",
  "key12": "CAkBk8ns1NmBhD5VpLKtfC3JYEfJKAamJDAMwQKqVx5LUHAjXmYq5jaVjKsnQTTu9MdgQCWKpoxCTCWh2BUVGMk",
  "key13": "2sENbV3Vy8pSB2cLgkBzRBaeB72gcDGjH3Rvktponz2bpSKDoB7LAUu56QhK6aCoW7fMfrfSwTAzEsThKV1g29pW",
  "key14": "7dQBzHmYSSCFDTQm3qAXJPihYLNHRLAiE2GtbCULEBiNeqg2DsDAjmpvtAJiY2LNKKNbx2ujxqyjQjUqiSbieKe",
  "key15": "4dbnjTanY9LCVSzRYyj6Niqm3SGo9XgiB7K1d2EZfdhvsftPMV6xmbcLmy5c1S5CsnapdTQMvVjKyXQ7UVRXGzTn",
  "key16": "4QKiZWWXZroTh9HchBWpfp26meKoVa7BZHnqPrr9r3HBSZtiwgjshk65F9CrbU33otSkLuU43CDH5Ez7jbrRtmoW",
  "key17": "NL1abfY4UTiTNMmaFYMa34AKq12AvaLjcwzUhLEHhCdxyswpHybe6v82DqeXcVMimekbzThyPEwoVpJwMG3xNXy",
  "key18": "3HtFbMwKbPeha5JZcG27k8ANWLxStHKexEhMhZT82WAuWKpVUR7wD31i9ZaEkbNWLTVqvFSuXZtDdtv3S4GX7cak",
  "key19": "2WAZYBkHNjpzCXPcoyYzK4RA4sDc4qpWRtt8ATJV87gUCdiE56exLzin4uHxhuCFHbBMh3mBkwKwkwmbD8xHw2tk",
  "key20": "31RJynk8RqUweB6rQqaE5C3WUN2wUu7yRNQgJm9CyV49z76kmjdDquhHau5Lc3SBhavskS2JpLbfcBd8DuY7GLqE",
  "key21": "4KiSVRWXqjYGziymWXqvTCSVRnSZD3yyuV7UmiToe1hYetHHvtGwbFdbAbUyS4WPEznWqRFd49X3wPZRBnuQEh8R",
  "key22": "3RRanCB8WhrYgPvEt4Fqni2azw3uijfG4Ke66ojLoEoME6cNbJjqA2SeSYMW54QxXQyxCqGvco7YVFVj3ijSRA21",
  "key23": "35GFgnvdHhrukEDjJpfyQ95TccwCqrmoSydDNjwj1Wp8t3CW3Na1BeAwKTKWjtxB8aKYPMgVGyjCBGW93UX4Lfo2",
  "key24": "5ta5ArNuXAAj7NLLCWdbCLSBh86aXWMjhgNaK9F8GhBPiirAcjUtR6jyWnJ5rVcncBjtRUgCXqu6Utj2ECUGRtfz",
  "key25": "LAwVLv1BuNVY98BgTrk947dBWzqidvBCHCRpF7682hr7JQLE7FHYEpAC4jwDNXeeVatdiGTEXXgqSPknN9W4mhB",
  "key26": "2Jpf7zgkcxRiDcTWWEaeSpVVkyNy5NeFZyJ9jcspDSBDqqQYhtWmDpQT4j75sSLK4TkZsVbJJS49SgksLbFMpPU1",
  "key27": "4ATre22gR2mbMcp6Fccn3CSKt4iEq1VWE3xeXxN21b7ES1G8u2LZo7NRXEQKnH88MRi3NBiTjjJsrp5moo9LtSkJ"
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
