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
    "vtkrnTPjRpWuJkSqzBqKQ5wpgStcKBiGLVGUPhyLZT4xNHgZsrkJ5LLmzfDE5vbWJVFjkEXSFd5Kbtj7ZXZGJSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wSbMDgQzLoMjRFV5a1683u1khypmDZV4eQztDjzneb9UtGpJK9Gz1p3QqNHPJfLyYQbrYYTN1EKCKemAQVDyNDp",
  "key1": "5Vjm79HeZMXRcVwCf6PsvLaYJqsNqLbRi5fpw734VnqTDwGgGgxet9SXMFxfekWLvLamoC1RLE5EcXt2TgEKeyz4",
  "key2": "5FSPnhJPHqyh4ZqJkbvoPGHkeNbbEYD8vUAZ2No7PJoqkSDiNF83Tko8s73wK2w3m8gJFh2YLHpJEcRwtiLZFL2H",
  "key3": "wNZLqnQbEpDTyuS9cmVm9xHznN83KFLmEEnSNwH7ex7H4ccmFihizR56nnFHjN6C45hYj17oTTQ4KsY5vGsH6fM",
  "key4": "VbYN3SwkhBG9wkC6E29cwMvsZZqYf6aPkWhpag67iMd3GUsCWb18L68KFD9fe6T9oK2GY2qmfpg1CC1fWZ83X1t",
  "key5": "2nRiYXrpjEsM6RuiptsAsn295DLGLJ6tULWtLFgGdfzzfDYChPphmne62R1mbKkvsbP7EUpscDSKATdwcKqqBVmj",
  "key6": "4AMX3VLNoYw1KV4d1smFRFgVSWMWGGcfnQ3QQjhwVZvNDVocZ57vMRyHEdxfULU9QuuvHAW1oPbRxTZqfTgGWKmY",
  "key7": "2oT6fBeyEQKNM7MAjTaHJyTSiudsggFz9hJeYWwyLiHwAPGTCieVJNmwGXMudSrDKdoTi6yWDEnPucWufhiwgxXV",
  "key8": "5yFGSReFDbPLMzbD17UDVS8aW9uUFhBMiAa7cus4fNawsNmHQXu1hNEVLaeWzPQdHwKFyLHWrRJZYXVwc74ZsLgW",
  "key9": "2FWqHsaYTYUnFeFPajD9PxVfvGjwU1z3oxaDbx2X2AviVzYggX3auqV3jBoYU4tkwh36rbC1pnCCRdNF9Hee6ufg",
  "key10": "44YSsHkvUmkSkfUM8snvoND7MFj5prQKBWc2iPHJzohHy7v3zgKqZVZQnKE4wYYEPM4tJKYz9mXs3pnx3iUysmd4",
  "key11": "4i8XuDmvWiWdXNAj1o37J2rJe8MNeSoXaoD4ymVHnFhtTug6CBRxWAz5csya8WPFAVZwAgEv6mMygRehoQxkAZaq",
  "key12": "51szR8q6TX8ysvn3saN91g2Yz3LCEYRsemBt6knbf2nrppXkdy6QR6nk1AVERZkAfhT2GjXhvcFbbBaNVT7Yk31g",
  "key13": "4ciGVirt4Q1mYSJsjFeKoL1mjdvTF5r3YriXY5jJbESY4TakWMofFHfm5ruLVDKiPatzsi68udDaHNLeeVSRLGJL",
  "key14": "37j6ZUVuUpuGpTEeGTHXxAZfcQrF6oS4VXapYrXcZSCZQJoZpuWRnUxSH22AfWJZayeCNNCczYXtiYZkwTA8HApc",
  "key15": "4DWZ4Jiucy2V82AgMMJ3bMxPeKjvYocLMzj6ZxXuBGkcurc7ukUXLbCFsLBbxKrSzBduLBzZxnqJpg47KYdFSvLA",
  "key16": "3jJfjDBDtDHjBaWd3NBWpjKaBCV1bho22qsY4FnJzDJRCHM3WM6G4Dz4iT9kETcKiS1KCEZfsL6JgfuNqnDxuygX",
  "key17": "5tiYYEdA5ANLbKTgPj1ve1GHmuTRmP1VCoAwsnCMzknWMDuHNFu6t77A8varrnJHAw7hBn7Pfgc5Y1nKnoXP6Cdb",
  "key18": "5BCUfoPz3mPPfgqrc9aKtbf61Wt3LmqFgvC7BQFkbgTZXeR7AGB15m2Jgk4XBZTfwCg4Z3kYFcnKUX9hPpvXhf5w",
  "key19": "qDMTBXa5gtrZmqNrHnHKmiWtpogx8R2MgzvPJkkJjsN14KscEqrvCk2Uuc99bodrXTyDtsy8EzgkoLM2nU9CTZ7",
  "key20": "5cd2DWoEc4TLS4QTLTG2dA3jkg2CgAn4w3vP9edSU88bU1HySuMAmJVTknbfThf28JFL1DANpxmSvGyoCaBG6XFM",
  "key21": "4JLcqKBtK3xepedL9HJDueUyimXXkADjjdXpkRbHEqagfttQ2Dxcu2Fa17c77RX9pgGufUTfeY911ZYUMrKwJcZ4",
  "key22": "n8sGSdAfQxaY2Nu8BSr4nm8iEPouXMXmQdCp5ttL6QyX7MFqp66U67w7MFGiJdgNopx9nbFzj6jo1DmtSX4jaYB",
  "key23": "3Y24zX2omq49dmzcfojCWBS5KVTz1kujtszfBrbPVTK6tXbDsExWw2E4AgoYY9oXR3hhn812WKoJCjBBGYQDC64N",
  "key24": "3NoxhkrFo3ax225y8J79EQLeB2N6trXuBp5U5kxyJsBRphoYTqMRzmKJRURU9izjgavpL47K4TK5GYmpjXkpD3ct",
  "key25": "53NnkmnCc1AbvJLSNnYMjsJSuXHW4F2DaGdTs43p4CfMYvnNzE1vKoT87AV6cTzm2Wvkfmj18h3fmqdB719HvVVa"
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
