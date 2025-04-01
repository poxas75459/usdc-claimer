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
    "3p6a5yw8X87Qx6QWN5Sesp4QScn4qerti92e6EeVmP4hWQKaMe4NwCPqYQV1i8Bu2Wzx4L3KYVKEAighkvK4q4iG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uFhozmxQhagX9Z5c6t6Fhf4dj4RsVo28GaCU7fhoqUaLKVYU9bEMPMnxRYU5q2WpXwRfxmdA3aFWZrCtP2F5KEQ",
  "key1": "FNivwYcBQRiew1vKpvMsruzxTuaoF7BtwB9Z1BJuRwxK1KTKwCWF52DnSGLvSE7PWMbcWzWsdMKhXCsUEVTtRpz",
  "key2": "avxGBJbLtEE2SDxB7Ye21wwQQzcruZs2etQugToTpjPuTzjuGPAurTGqrQqRScuPhGRN1PNPER2fsKrNEUVcuMq",
  "key3": "27wfTiK9y6Qdo3CRRsJ3KJ8j9uve8PKiUNxPrq5VKMprjsbVEPv4ZiuNyyRumX44dGpMS1iGjhEvMgC1LFDvGy1J",
  "key4": "cqBBNSTCcaZVotRnfkmfk4uV2k89d4StewoL8DDeGjApDeayuz8GNr4mDSBxdWNQ6uB5v4yqMxHZXzgMwSrZmhW",
  "key5": "4eCsjNutyyEmQNCZ4jed3Dn6KuajaWCqJyiFS2oySSBQ71P7yuUSoWUE6shvwGs1LWtQkdpYCLF25huNvqxafmQw",
  "key6": "VsWkX1dCmJzwNU3zRiBwhrZpqeetvkSKzNvcXgqMQX2AjB6sT8Z9k4SdqNXHHarvSNhprYLBHkCBeUPdEX8VPVV",
  "key7": "3fRT5PRiLzi4LwwuNrS9cQ6PjxYhz6fKyevX7HjLqibFJ3Pn4m6hdGkRXsWUCgtywzsyuHxwWNYmgzrTKqTB1bb5",
  "key8": "Tn2RqLVB3T5iunaSdToKPdsxLdxMFRYS1qYbRCvMmZ2U8cskaKSSvgSBNU2qi3c86kxQN2chZJCYBA2SJP3nz3H",
  "key9": "517Gzi6sAANnTL8zpSE2wchV3WWhp9RgXrT5MZSQY3whHUCWrrdadRPCXEBFXHUoCBUjw6v23ZNKXSE3RwEAp6SB",
  "key10": "4UMp6Nsdkhdpbhp4KxeRiZuGDqkQ9evqTFfpLWAyBL1r9Cge9ec316boouwdZSHHiA6QFBW6J9Hc7YEMioMGSJ3",
  "key11": "4b2aPy9m8KnfcyWo8G78gz99mdv1pMVvdpRhQskLgHE1AsEgnKnrAyaCPaMtjBZdETH3GAeXi3SLAADn736bSvuh",
  "key12": "4vak7rWimWt3E9ABUstP5psvN2xYC2wS5zDBmXvDbM69CKY9gVqhitu89yzrgf2rHLwqiBhNvxWTVqRiLC4h8c44",
  "key13": "3L2mCVTwNQKrpMQPkxYw6S6Cy4rH5d5FvTdMMA7Awu7sy5oYvApUNgpF8Hi6Y7tRzuWU2rW9JhLNDftnsddNiRLx",
  "key14": "2k5UWH1CYCnGUPZ4miomqdeD7nQ9wZSevKohw17eg981jmcRUy2Vx6H3zx9H8Wo1m7WUjnsKQNJ4tis38Z9XZMPH",
  "key15": "4vYM3W6Lv3D9xVpYdU9uf5ByGvB8PS5TkkhLUydW456Nib88xscKRusvXcgenFNkyQpaKShy2SS17ZrSyAFrjoVb",
  "key16": "2sVYXVZPvEX3v3gXSeF5iZ2Zt4bTrUEhQQDk3rQNTAmjYVWE1z1GYV4bqXvNu5q9JV5rGShBPDcJYuWiyS1ycT6A",
  "key17": "e6RDdFsQmSYxosbBfDhREdkZuP6vEm16Cd2zKfBczHoFrM2BM8aqP1omexfNmB9ry4nXSMfMPYqoi8rbsYwbT66",
  "key18": "5SY2pjn76xsLiMQgzk6JZi3HyGJWh4Jd4MvYx678ED1B4AUdwAzqXk8bSVjhcoNVQjNoKhgVGrXGKdKKewxHjJvL",
  "key19": "52KNGyKweFe4ELRtSwQYmhDxnHFDp2CunyvvY9YQ8EAfvni8q6e5rfWaFz8Cu8yyHb2Q14grUkUVJtSNAy41pbHK",
  "key20": "61wmGmBoP39t6ymrQTEuXJ34MicAnmedvqq5cXE9wh7epVeYRoFDS5DBq2B65nVaoxGKNnF3zXJVo12qN9EZrnYD",
  "key21": "5To612wPjD23Wvb6rMtEtdXL92hvnyvJP2ArHhxujBMb6DBJVMqi59wmJzo8bp4vAdoeS5XD1bkoMygX89LAiPc2",
  "key22": "4mpfKrMgETf9M5tWuxUAwHyYzDFDHTwo98KVcdX1s8QZMPSWStiSxu24pHofsYZyGxhuE9UQG7ZgbVZcvQUXkyoF",
  "key23": "4vEi5VuKcUG7UEnNEsDTMGYMmJfzDpDWdhMSoFbsqDtiQpvApQpXZfHb8icJVxnoSZkYUGfz9YaFccptYxVh9Avj",
  "key24": "qnJkWPDbZEsvCsf7Nhgb7NH5Z5MY62fXMDxgMH3rzyQ8wdosBCiPLU98qrJuTwuMDBCZo42qrNEU5aoMvURGmvz"
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
