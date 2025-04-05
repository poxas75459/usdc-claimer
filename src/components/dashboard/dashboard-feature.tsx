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
    "3N9gfAEfdBupzRVxX4tHrujwx9uhZsLmJ1xgV8Pmx1YmLviKNbGx7q9ASmbnZxUHZRko6iHDd65qZLXg9ydA4eu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eLgvHVbhCiwyQ3zUbR3a6DMnApK6erwngjz1wjppLgYPo2dDaZSRRUrn3VHQLj6hunMqo4NJFx8N8r6MpNgykS8",
  "key1": "Y7FokxBNgMuLQcxv5X8kMCwDJN77qW5un9sb3uhaMTHiaJ3w2GRbasNMyqMakA8yNbk15hsYJsgSFAmZVEJorpv",
  "key2": "3zG7KYW2XKj6v7Z6kg64gZDRwzGyhBYpawJ4E4vPfgsj3FuV8W26pPH29UCSH1JwaoF7XqKiv7F4hDBVhLHr97DX",
  "key3": "3YqtEWWv147N6Zc4bzoNLmQr7ssAeruEJVmk5KHTnRQ5Sp9oGk2Umi7zPdndWrdoR7eusnmLn1RkLnH9vvtmnMGk",
  "key4": "3BfgQ9HicamYXdcQ6kVoYNUSb42kJXM7abTnLziBSWZkr9wNYKjYRRijM4puPTeSRbhb1UcBCLigFKM3KRR2N9LK",
  "key5": "5jCQFPnBQeTm5aZavkc3gaNy7a5f5DLNpstnhrzgH5DRwoCHE28YcxH3sg7UDSg79EBymhFw1BFoXnU7iUrBay7G",
  "key6": "LNHDaCK9F1s6huazeUpaherpTnZkfdkJVB4W4UMKS6MTd8xWNTEQwcYADX3VozQdovobuP7zSpqCTYdXqa3GPDW",
  "key7": "5V7mywpyJfLWUYugsU86w4ZuzBWzCxJQVQUjnfveBMnJ5576hXta2cduz53WWBMU9Zfwit5BAStUhR7m8hC7G8Zu",
  "key8": "4ruyiUcaLp6guwaL9M9hHptYXpcaWkwwFeBaFsjBUaNN6YpkKzaYBGJmf5j3cpxVZDcj43HHxDgkPQCcxEczieLE",
  "key9": "2FLpsU3A6HgMgBaPBeB8RYBsQyKGTVbbiXGQmVDef6kBVBtSbEfBT5m955QK7K468Gn84sxgJruCECgDD4ofDLAH",
  "key10": "3jbfZf8mQTwDy3PY2akcQ9n9Hpe1gd1fCi6GAHrvQ8dVj86i82VpgvEhbazNvk22CgBepbXN5sxxusRgx2eRCtDg",
  "key11": "36ZyaEsJxurHhr8UyLVywUbgFavLeeoNTiusyLRmENZj8EjDckCjtR85jVxD3kKmYhLMEgdjeqDhonvNUx3KAKMg",
  "key12": "3HzyLvoCmxmV1YvVPcJ5d1to66XPvWTifs3VhmqtrF44qAsWRhEAPJJ3dUUEy2saCnSrUEQivbT1LhBS9YazU4cx",
  "key13": "2Vowbuxi6bq2XioY38xwgb2ixyspoNeCFYimiLeAiZaHubUXn6H1TYwZmsZfcM1H5NrVDWWpuBrTXgc3odskQBmt",
  "key14": "3yv8rEuMAc8zobUHU6HbnHDJV73LKHFeZaVzciJ2CHy9DgDiDnbP3oMUfux2Roqc3mT5LhkKKYJ1X1YSYJQGe32G",
  "key15": "3R8VrUp6tKjeG9Jo2exASFqD9cXoNZwvrCzjAdeJUi7arACSFutg37p9pJKfAychHG4qpoeMxEgvPFLbThESoTLo",
  "key16": "6VTZnW81SrRcsQ7jdD41FYN8Eao3rVXFmwnnNXCpjgV1usatSU3zpbF1xoRSQMqWohCWMi3BGE7sRes5kXVi58L",
  "key17": "5ga47RPjbqNEV92nBnw6gn53HHGernE2j32cAmroDwrL1BBh5nqCjMPAFV7K9R4K3YR5piPsgnbd5WFt4aXL7ByW",
  "key18": "5CesVrE1cgZjErqExjPMZafesALcWFAo3QVRySDfy6jhJLP6UGsFrTAmP6pPMM3MVaZSi6k7j7xfdWArhc4rq6wk",
  "key19": "213ZtkP2uUpztVaW7HM5ps2n9xvdab8CRVdibDFY2P2q4qx69ReEcZC48RWmZBAkZXuVvkHh7SkKmf44XCAnbrbE",
  "key20": "2BapzajNfz5sv9eQyJtFFA6qz5cEj1Y2QWxuw23ajaxRAcmXgp3Co1wYevG9MEhugdi8uQzttcyYKMioj4sQiivA",
  "key21": "3urghF5XxZKNRQmSqXfZAuxqyZBuE9Avu5vs9eHwm6gnkuQqTPSJg4uWGXp9G9HR5ufWpHAYNtg8Wj2P3L6hmwcp",
  "key22": "9YkY5oiwsE7JbqYm1M7smpKhDJQtgcqkqK6z1433U4YX2h2gbgkJmybqi2vsyDEU93WzZcRcsSNzscKkofXjWeY",
  "key23": "3SmBxNYHM4rUGp3pkFLWtBHtCYG5HPYj9vqUHzShBwebrqLPMkRCQU5M2a9uVzAKoba2U2kPU4xPMRtSYTrHzYzg",
  "key24": "CfVRFYqHTF4Pe6w8XhV4pd58Gf7cV3Xp2cK5wD2aChSHwCE4z91sDRUnGQv66Az6Q9ULJDPVcGj9EBHxckxNmR3",
  "key25": "4QZKH1SDwHevJpPaLuGQ2uqVBrCYM8AcXTpnQ3xHF5oKUhVPY9FCrPKpfLANPjKwvoFqSTgZnj7N1mpbfAcsvdY1",
  "key26": "2uhMHM5rf63k6vZhPVdH5JBjW6J8Ja12beLiicPV8vxjzD9YY78CXyUd2kfrgCzWdcehiTsFNAqPRWGwaawKALsB",
  "key27": "5GG9UtiQwLvWn7oEPeQaJYnozWtHPM8MyTGXFfnMDpMZHbE1YiwwkB5ixoVJUctjf8dsbAqaSw8QhyWn4kNxDCi5",
  "key28": "4h72ZUz4weERN4UitwopqxdsPu2qNk3MJ9QvjGPuyPTYbRWUWxmN2eaXb1PHnap5u8bqa5HR63HeTdU4D89Sa8DC",
  "key29": "31Gq9WGhENLJVWDNe9vDHz3WscnP2VsGVKFNny6jwWqGJDY45h7iYqJfdfgt1wU5TZ5J4fFv78urNxVzE7rdCHGP"
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
