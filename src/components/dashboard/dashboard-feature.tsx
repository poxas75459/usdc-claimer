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
    "3BbKyWHJb8wq8DAt3TGeWp6v6ypPGBZGn44FufxTFBLGvEY9UvZTfzFZdGiJKLiGFPPBZASoigps8ZFYu3GeMFbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nd66CwLUebb9JwETawdQUj3HVX47fkjKZZ7hPmcaG6yqFkB1Wv2D251bZpfc2Fm37m6RF2gQai42reSYLqGu3bA",
  "key1": "6eWT4jW4vQvvca9vHsGfsDi5DGfFF97gj3mLU68Qrw5w9NytUApz7Y56Ur4UpWYa8ixooxT12ApEb3EG8B4epnE",
  "key2": "4fmQWiBkgLF166sf9X854TRG5Sp2VjPwtjY1NEBj24AoQ3CkWH7yuKg58wHzGxLHSaYUc9zDCZPR13nNXMadYMu8",
  "key3": "3QjQD2F7VRF4tRVvpD9iMGxvgkFSezEBwASSHuyaq1xo3DqkK6vm3dXgSiKDUNs17aNPDuhCLy7XB9RFUKHLTzmC",
  "key4": "3TNGsm6snSxPAunWxSgLJdharbWnxdt5bvWgNAuJP9WHzUtxwtGYv3jBtuVXfN48sTpiEsYCFaxX67masXxRrnHr",
  "key5": "2i5dSYuAShJRWsGqfLNZuBtpn8qNapGaUqTPbEkJmAV6S36hCKxJKz6diYmG2VS1YowuWAqPMRFrZL8kzDREA8u6",
  "key6": "4fDEuLbEbNNbhMUvkmVQ3BrWktwZvA4zToPxjDAgbsd5wfYmn4nYWwEF6FikmF38gcoRPuaryvGys6VjiKTzJVE3",
  "key7": "4APCgYcjiubfsUNjzSKDLj4cW2in14aYpZXcw4vKdHdSMMJaASsJjWnC9dTXhA9dMn88VDuVX5K5mnevUtxzPrDm",
  "key8": "QD2oMrt9z75ctwaKKkQPTjQihgvPDp9NBx5Y7Lb62bd2G8S7fwvAVEL2e8dLp5auRLPHdTcWtTnN6bEpxykoJ5M",
  "key9": "KLT7Fnfj8FAUhW2nJwHQF97sGH3x4knyDwmzD3MecMHJwEk5iZyU9Agc2HCexfcDiujt32LDYW4XmnPMeDxJznX",
  "key10": "2m4TYkXkh7wsgui4S4TGsRvx74xE6U4wMSaWYs6PvCbgNyxZE5PEVjg8u5dz62DUHfm4GCiFmqJKPpiwB8JEm22f",
  "key11": "55sJLFVnVxdvV4uAXaJqMetm4qRGSw3V6P6ov9vm55qwgayqU1jutTC9bsf6DYMZCy3euCKHMtk28Jux6bADvruB",
  "key12": "3iV7E9uS7Zu96bVU5ZyqwJBqLDk3Gpow7hEAnGQTY1t92qpGoWw2EtgTBYHZDY72heFyDtaurvGshX4GHUi6YyWL",
  "key13": "5X71YxKvtdq2tVn9SAXYxJyQtkJ6XPvJ6ieea64gmu4aFGdDDCbm4yA5vgJSiYnofEQPWrafHzdSPESptH1bkBy7",
  "key14": "5pHevJpyLPXUNDUQ1EHTmaBSaUXFE6d4Mkha47Y1LFAuw42EDbAWpRbUfQC2z238XQCHJFYVzcc7Gn5rPWhrLmMq",
  "key15": "42P51DGhRFegZg57APAeC5fgYgDLQH3X3agz2T14Szt2g3M1ZZgeXpbUuhYNjPztmbzeHxDjHhAW6QsqevvZ6Gbu",
  "key16": "yHABPEAnsQ6xw8dUvNMz2VqjnjyS1RC2kbWZfXMSp6HbJyRKrR77uqQ33acgdpQ86vbmDp3ApcreQH3nRgtxutt",
  "key17": "5mvm7fdaJoZGtY8ShZTqtszkoCK2EfGxKiKt7DSswPbbzs5YL8ferXBm1QT9RLNdz3WG1gfhGRCR3fnx8uRgW5dq",
  "key18": "nEycmM1NVX82gT9za68JQyc8z2QUUsK9WUSoKLGPQCWXx7uKmoVbZ1zGEfKVoiS7BBDoNh8PjMHMpuXKkGid1th",
  "key19": "5XB4toWTDiNcx4GknMCHQpH9wn1Kv54naUgkaDNYu8oRG7XwzGG1rJ9ScjXKDY5GGrNAyo7GxNWzEpLbm6HtKSCs",
  "key20": "Kzpzoc98jMVgadp3qWJrZK5GGNp56nPB8VGenQvQGZVTBRWCP1Z4nkd1Ht8CEniihisAioVFBwnt54JDoZPCndA",
  "key21": "45Qi68XHAPRW7XkAaqL2nMDbtv1vn1qCn2SWG6GwHgNXN4iPQtbcPYDDAEkS28Gij4qTeoHH1iQGEBPcQSCK2h3J",
  "key22": "5JzDQ8fMvqoshi94E6wz64zkm6qXBtNoYmPN8fjpL2x1oNYgRJEULpqR1zJ7FPTqs6ZPKvYehHzHqzFUuzDSctyC",
  "key23": "5hFMKyUXXgJh5zEsiA46g2QKGyWwFJdehi11x4RpkTZv5kfoS4ryk3ndWHnVgLdvW7VeWGRqASKWAjBK5hNxAMvo",
  "key24": "2UwMRX3tahs3KtN8fvtEpaRHpVuKBzJAk1vejPLk7UR7KfGEdx2UZz3Az8ygX4pfkt5EBceLBDWDPFGxcDyMw7Wg",
  "key25": "4hRQWtFXeh6xPWcj6k2D1ZiugAo2Rk2sFC6DgpWdWMKbtLPBZxCSihGBY8MW5iMjT6t7yyA43ko966guPmEMcgcf"
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
