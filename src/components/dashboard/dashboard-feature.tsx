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
    "4E3Q4QizYqxDR1Gb1sPUzY3fwiHhxbUX1q5eMdSUDqUiNaKi98kbCNVPQoTiM3XenWMvjULB138jqq4K9QzCf3cX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DyVcZAW2tjfoEivf7xM7y54AkbpdS44RaAUEjvUJ6kV9qUzwfNVX9xBYtT1wgkqHoqRKrbxCKWEPmssVyohjeVp",
  "key1": "5LBtUiDDEB89jHCquojd3XPKikHB5RWy7wAz9G4sHYBCnoNxereZSPGNwGSwX1TkcH8ZwQJH3dqHbiQAikt46Bz5",
  "key2": "hRsEjcQH4Phf5wdq1D8cfecfFXboM6dsDsNgC7z2kDPQraM8mxaUJaNLdkiytJ9s5quTrbvGknxyYV17ufRqVuD",
  "key3": "2tSVaS78c8KHza6KnR3niYajWenVa1hCjNBTpSAULDAdmnurryEQpctXvwe17bMmQPasTakj5EortD6nBVCFXGXi",
  "key4": "4KU9ffTQrprqsCkAdRRySBmbHzRA1Tm6fKjq3SNswhhkgpZJBjqV18sM5tT5VHJ5zrynxMHphCdKoV9ftS6L2UCV",
  "key5": "4spHPnQtoVeAmcQ8EF3MgbNdBKsG65NGgZux7LTMQe1PvzW8mbqpHqSF88UczWuLmidpS7qRiz3SispxebLeifxw",
  "key6": "TMFGfKPuGeR9eMxUHz9AXSqwe4wFTWGcUebMak35q8Uz99BSD9ZgLZFaeXEqPu55GVxfgyRm9R12X3CxA4WqrYL",
  "key7": "2dxFAKTG5tTNLs6bgMa1kGBndNW1Wnn14qdb8sCfyGYHv9mnFbgdLJMW8Fzz7FsZPHg8v8Lv7T3DmwiuKr7hi2VK",
  "key8": "2EF7HwrEycwE9cUVkKtc6YecDxqz6sE7e7eDADhRYhrjpv8iPrhb4LdGXAQejzFjFrsGT1tLJyoqdS6oRBwTDAY6",
  "key9": "rFmg6iCSwPTZFWV1NZebjyk8v2VFPdT4zQo7N2zczGHWgMqsNAQyFeSJG88Ks9Fa6iDTmpqrrPu9aGaMY6XtgkZ",
  "key10": "5ouaaHjFmPN45xkBmuye2i1aKXLkR3TqD2ZVH8VvxtNHsdfva7QhHyXpwRLP7qf13Xh2g196vxqEPAP76ZreDDL",
  "key11": "67RmHbgS7fBhidcJ2XXhTMGVjPXGpbHNbXCkrvBV9fTEj2zWxAfACavmCWA3P6qbECMAaECjp3gHoeQUS2FmXnoC",
  "key12": "5U1stWCDfM71DRe8XwNn6CjchKFV7p6g6Nutw2SyAcJdrXnG2Awb4asWcw9DFAdJEFASU6aRJgrPQCMFSTcxfFz6",
  "key13": "tNsrDfk28egokVHPEqF4ux1CPK21AR8Jfp3Zkv9AKoF2fYT6nRWB9iuwxxbJswTQH89B6acgQE6bTcnpVhyzpzq",
  "key14": "2fnSXNtJG61iX81DQSiMTu1T8TrnLMVFN1Pt6ULfboEpaa5vZusfVbRzTMJRLC5LxaFjc7RmoqGg5qbiNgLpPyc2",
  "key15": "nou5NhuUbvZ6KMKnzjSfWm8eaUmPVuN1BJwkS8JJ4yoT9sPfLb6fQ6SzvxhfgrQT6GBCMZ8DNLD6aY4gaM83RmA",
  "key16": "2vpyC4Kuft93aAt8SJr8P6QUkPFsEXS5HFLgc6ykwojpHDz4N6zdec7PaJqqkvTfEvGu7Myeh2GzJYJMJsYcnWZu",
  "key17": "2bxn1jBKxHGMzDyRFqJZz1Gyz7F9bg5Vk2mi6J9CQKxGktTEjkQSMXr7PbnLKsifgSxAUYpcMQMaBZrV4MNLx9bC",
  "key18": "4ZnSNHPBerD5CCPs8zUoma4zmrKAEex6xSH9B5kk9J7HyQVb5sjpe3HaogmwjqzJ4ZjMirmzwkPYbL2obi1ZSuXp",
  "key19": "3oWnmaCXRK98iNb3f2EqDKMDDNSgqV8evjXwsWPKdPA6fowcWiTLgnhpZGrbed8hs4UCV5JUJPGW2Qq1PBhi9XJw",
  "key20": "64sTcW8XjmbqmxBS5w145td78AVshGryRcDBJ6rD8zJrC7ocNVoizqx5L7kXjUNSmzs9sE9wHtG5beofTdmNibYG",
  "key21": "4PurCyZwQ9E5Bnbv7QCk2G7wYvyehtb8LdeusokZM6CoGLDTXumLEFmpyRMnWGZpaBZ9rKrKWPMje3LvMWxP7XjJ",
  "key22": "4pvoQy4WbT57UVWAkEhWnpw28gUpg4KzsVyGYiyc4rugg8U3sqq8VvWwccZErtZBxXE81biHDDihfPdV9yB5MVkp",
  "key23": "4wcXnrJFFpQAeKQByyW6w5rbX5MgZBoqEBocmamQMx9nnqcMQrhGPR4M6PqcCeuG87Hg4zTDazgq3J9JYkAARqPm",
  "key24": "3CNrNWE8FGHc6kkPojx6UhTTpg9Jj3z5REZcq1U55WoCBt29tzDs8qjXLktKrHExroSp5UKYKPJmnDrKpugtZpGy",
  "key25": "2ndj8A95Qb54W3pcZ6kbUjvYCqegR6Qvd696eDhKNXMKVwkUpf8YPVBmX7SHJSEZnuStnSGkDkKJWTXvv17aq9yw",
  "key26": "2a7KeyjbufhM7BM5HE5JWfJSTs1exSSGRe7FF4pdgFs4AGn6fNN3d81vE7erhtpdSVNCcMEbUCMA72tUseqNxfNo"
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
