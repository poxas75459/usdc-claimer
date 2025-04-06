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
    "4M4QvhY2eTkCbRhQTnvfrPPHvqKkbbcoJMWedqhqiEWKRp3CTskdEEimkxJ65uYYpf84ntx6a1kU2GqnoE5jAeBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kRJgt9ZszYEumxRsrVxp3WpQvrT4CSycwH3BbKFhQ9xaswxqDRVtYA265Cj4mrdh6JoSsnNWxP1XbbWpjZbosQ6",
  "key1": "LYy1FQBv8j432SM6rSifRrUgXiHR3YYrKYkAdDUz3FnKbYs9d65SnL6De9yZUGssjLDcm3Y1SV3iGg7fWoatLDb",
  "key2": "5hX9r3vdJQbLtnDrX9Q2KbmBmQoSFnVwo5nXSLyiNNC4LNLqEeJvg9QdQh34z4xMnov1jCJ3PSWyACEo5r7tpw5L",
  "key3": "b13ru14yrGj9py1mUzNcgrBW7hrU4zQNMW6gTYYaTupMucVfSE3iMLoiafVH8zTxbsBcb6iYXde7NfecQ9zi4Fp",
  "key4": "2RkgrPCMDiL9RENmynESa9VFYVERPEPQHGZzoUzpzVPNCzeHa783s2pros43o7GdpNm82vxocwcNZyVhFHu5VFQY",
  "key5": "5cwfrZxNruXDUZm4h3D8VZL4thDv9PSEtirVmt8Fcn4GCT3zc3XvQTtGyLHZaifHVNAt3PFKg8yL1BzSRZokqo5Q",
  "key6": "2V6E2wKwamS9Q7joEMc7L1zd9fxL9PTx2uVT3S2vcEPTWFSNPQEebxtdfyRYWDfVfroy2PqZosJbewhRL1A5BDH1",
  "key7": "2g74RmerRZ2X7HpZf5CRSsKuN24gnv1rGEk1uipRwQ9tUSExRuoeqqfajZMqQfNPHiE4zXFuDia7vv57KwzLUSyx",
  "key8": "iYpGQM6YkvyWj7Bf66j8es1wsdXFDbjXk2UGznLAkbXry437FMAEz1TxBtqEraZRzapSXZevg6Ym8bRAicoMJy7",
  "key9": "3fx6gjh473Zt6sguAiU6SRc9Zc4b6RAxFw4jSN5mRtX67P4nWQ4iYdNRzD5kLJFvyyBa2KnhNedZn9KVd4viMftT",
  "key10": "2Lah6uCG4dNRjSuMF7RD4A7LuzA5oqk6TBxztada25vTUDNBLLQ1T4e9zf2RCcsqWuXYE5yN9BZxPLXNd2TDfDUj",
  "key11": "HGUNhZk5ikuDN1mLtBowgSeYqHjTAt1X1x62vegb98hpS8QBpzTvjXxEKnwyTT4pSDVeUkLgFQBb9V5PMNyqGs5",
  "key12": "3mJrPoQTZt2ZEBfnkcRSAkK6zFo8KQEVTci9KHL95bJvniw3WzQ3C34WNwLw5gFzQo3ioTEMjG4e3L9xez86n8Yj",
  "key13": "5bd3LtHzyZC6CyUJWVKYrWmpG3qCh3dSFsFXCpQkBht6hWVH2BRFNuttE46RN8LPTsvG4hpxnZNQJcgHLsC67Jb5",
  "key14": "2r3wtUSp6jAceeqYtAsSGJBx4HNyHiR3VaEPpZrK6Vjz2i6RR6ng1pc4hvqrvFvU9pV2wve8cc22AvyruZHVqzk5",
  "key15": "CpBQPT8p6nLPbjggobMmViGfZVpebXBYeJRL8L7ipWTi3X73Sa8cr6jWDDatqZiTuUWZ1HYLPWeoQVJRGxd95C4",
  "key16": "adTYQk3e4oMZCkMqZawsSuD4XU27CkaLzMd6SssRB3kuDWYKAJFkCA9u7LBmwMNekzAkU9M2mf9vHZFzeuZKC5E",
  "key17": "47byTSeRB73MpvxdXkbFavHHu1m99SvjywWqwSAJKiCor2Vsgg57M2q9z8c4j87ZtCt4vzhoTg9ipx9E5gYfRbyn",
  "key18": "5WBXfusvj4Ym9X4arazwB2hbxfE52nQxENx6uwv1pJKfnuzhRKYu76jZgQpjrFDm9CdJMhyJ7SZFzAd9R3oaDVNc",
  "key19": "3JQJQnWY2Cej1krxteeEUV9uaFkwzmG8scqMitJtQLEHMbYTX9JZBE8JnofbVvWRUvQakZPDhTssz88AsGcZwe9b",
  "key20": "2827KV3pfgyANpC5F6xPy51q4JS7G4jY8iCsLT17oeZKNTKLJbXWtYKnmFjddzB1Hv8sWDKK1149eh8z8pPpPKXq",
  "key21": "4xEhW8gCkgkwb6Qn3aADuLmkyizuqG7evPRxf8LHtg9QssjznhC2Q7k7ntmdye52PquDx7HQjXHEeWCAznpQfLp5",
  "key22": "3V6RDUwCTXzbGq5fTf3Ck7BKmuAunSJEdEyLGmVou9DVVW2X1CpvB71PLUAztcrxULbfXqcjcF73meBh7haeiBUB",
  "key23": "Km7wiTP5sVeVxaEWvUSVCNMkRwuMtqn7hQUtZyDnUKKAu3U1n1x1YSBX8Mn1NME2chE7tzn5Nck4VGZ1LMHb5jd",
  "key24": "37Mt7eHpHhaV5mPYH3qqaqSeb6UHcpirkgvoSWZUUsoTwmLEQWfcSPMXe3YhwX6CoTairxSeWWDXMpr59jiWuYHa",
  "key25": "cBXZsPf635mmi9bj2Ftx3sio2DbVWaDmahGAEFPjzu2C3yzK3cNFC2VbzNWi9ZmGMQkZ3LF6kjneAEEK95MYBvo",
  "key26": "3AY9SbhRPPnfQgktkNMmN4aKFhR82TfCmVUoPNx83K6RMLTsjtP8twMyuWCeg7WaMq5Ns6KFG693RTvp7cUj51xS",
  "key27": "5YAJWC5VZy7wgdDHGLfj1UPNGEMzSJXbgwhBTcHhnsKUJeR7eCG5MnwZMHtsbNJqzGQjbQdKhVgRpvFP7mWyBsXT",
  "key28": "5JfM66WNuoVCzirJVf5Cn1b7eHvk4REBHHAG3TY8dx7nNDMN49muSqvoE5RcB8Pw9Eot8foW8zkHgb6y4yA8BeLz",
  "key29": "uhCgpH2ydxoKpNeqD3aDyxeDZqkKVpwa6q3c5GMhfbKk1BxuAvv1zduXsF3mUc1kawYpMnJz6me4vZvNj9iUHXZ",
  "key30": "5PVYJTZRhGiJp539cfXTxt8BxCDtMXyJDoDXaXda6LeGSn3BkRMf8XMkXw6wd8D6AK5rQZsLmdR1x51NP6iGa7vM"
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
