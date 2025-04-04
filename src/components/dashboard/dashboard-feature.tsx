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
    "48tdXCZuALLMd19LLW4YuypsRw5YM7d9RkRKXjpVjdyvYoWxU7wTTNygN5wR3GGf9FhSGESwxqYpQEfN8TjvgVUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MVF77RyBxdvW7jAybWYCH8i2UKbBeFMwJseGUwKoTM41pXeAyEGzLS3QCtj6HF3muvp3adx7xyvngNuFnQ8Hm53",
  "key1": "3T7WJwLrVhM4fdsGhVMCGWWZ774SP7NfNjifL7YfKaFDpVVG4bvmZDbqXofTjKJvxRCDZs8SGPAyps4Fu3wyXe5A",
  "key2": "3N4rVEcmZHZJQX6dazzxHZYieX2jqSS8r3E2F35VUoEentnAi9vnBxB2vSRvZFGnSd7oVcsyx3esyU1hqMdek2Ta",
  "key3": "4KT8PFeS58b6yaLh4bFQe3KRBTzQEjTvkzYYxxKTPoqnw47kejJ4mtwnxBu1oWox3SfyJdbu8boT4j3ZmuEbut24",
  "key4": "3ztv1DQBLWXkvnhH225ptoEvzyUjHNV1puJQ2vh3CmYsnEfAzC8uqcXJpTZRbsMGw3ockZCTpMkFLJQXs8aZukmD",
  "key5": "4U2UUBg1Rc74YqjRsvDhKwAbGvUrPBi6PE2THHUnguybJsCPKZiG7G47DnPsKtu14sdqJoMHs1LTJVbnBC2B6EQa",
  "key6": "3eTYG651fFNXdDr2r45Gg5SiUPy9bW1cvThoGrjexnZMTYxqXb17EnF7VJwVpmQdZMt5o6yode1cCPCL6xVZBy1p",
  "key7": "3LgnpKXGkwtUvsygqQtRbeLgFY6T1oygXtSKZiZiGFJuS5XRqauZnDsXFAbjLZw7cdKRCUvZBmrDHTZe99NMZ5La",
  "key8": "5SnbptqZZPjCVctHcvixEbx2a4JaDEbDFRjT7o6VDy8ounRs6UauXtgxGkCV5HB9ywpEyXbG5kvbFL2gxiGNSA1y",
  "key9": "3xW78WmbaKMw5gNacWdSxNFA3XbYyxPoofYDd7ygX8HugVWDY2XNpDpdLJzjV2qASv4uTHMpruAtRpnq8ffWLBrU",
  "key10": "5w6AFSDBUzfPioR4aWHwTnna7C4EFjmTsBki7uH1FFsj7UexkeL4UrcmqzbS4aHbqkp9msnQeM3YWstfPNXpnhcY",
  "key11": "5rpezVYHzc5hugPbBopTAJZR1gijHuKLGVTPmXpoZmTE4dZpv1bp5U4iy45R35VyPpueAHYvQb3N2hu5BQKM7BNC",
  "key12": "5Td9jRD5S6R2qx2Xb5mFXDVMPALQFp2ebgARJKJ6rSrnXDT8VcAZR3doxhftyR3U17m6rGiYjCRaJCjAKJ6h2fHh",
  "key13": "vHfJjEZSqzJ6aRLRA9nv2DTgUyQVHB9sAooMYdN1t8GC6V8SBwjWmEASmTregpNmvS3ATMYGxNdzc6CW2c9LMGN",
  "key14": "gJfMvoJWXMJ1jg3HQufJ5L17rJfn6fzRhdPaAdFQeMS5UZtM6hEoDtqHjKRNaEkpB4HAtt3c8XFbZsFdBe6DaWc",
  "key15": "3NM6Ea81eo5HncP4DtgRzuxspRQrDJXVhkh61vWjAttMEEMVctTNTB8vUPeMP2dd4K6DWyQhX6bEQvJQeYJdzzbS",
  "key16": "35U5VULVLPw1n3tn4UPdZVyDf8QbqGXfT7yqAi3gLNB463kcp6wvKXn5BG6J56CRvcmaaRSqAVBFLtkJTLtm4CMa",
  "key17": "2NnaUWLUhAxPoygRfWFZwFLAQPk3WNFwNJbTLErr5tosUVuPeV2MkZU3Qippqg8cHuoSenJC6qGcUz7BSu2TLiUz",
  "key18": "4VECDFa8fuomFE9MBjaM6DDxn8YLtkScLqM3YeP6L34Y6d33Ai6s6kr787EEng7kkgxDqRFEXqh69zpqeTdpMoq5",
  "key19": "2CHbzkWjEgt1o1Cm4tXq4bXRwJWsaNTbp8fzWqnAY2drYFx9AKasGMYLBchATZK8gR2uNwhqRpAhaHb85ZQVbu6x",
  "key20": "DUU2ioUZcNxWw9TF1rRw5K5d6xqE8DvXwcf85u2mdh7pP1wiHn91b2yfiLb6eXZSGH2CcnKMfNskMVRJ9sXhDUu",
  "key21": "YxyTX6nNwWqQQSbh1AybzhqFFHpyaFKhDa4arqAujy1gtzNPnenUg7aL1VMEPuZLq8X4S5cpBWeJ28QwNQ1ZSnG",
  "key22": "4TxoYseEG1ADPzPoBkB83ueGtsNxX9Ghg4NyDYXK9HdHMQN3o4YJEVUjGbes67pft5GvBzdy2QWjsKBt5KnALftd",
  "key23": "2yrndvR2qkJB7SG2tcTcUnt3HDUzktGZwgeshYBW5fvQZuGSM7oBrYasf6pHefJBQH9BaBszWZnrjEwDYcLLCjvL",
  "key24": "5huo8N8viLqZEq1Btjy8npMtXgLJtVLp98vrVME8T5t5oQCCzSXPD7nXCvamMTA197ZmJCuNbCLYaibP6W6Upf8H",
  "key25": "4hnRxiuU9HghiAUka2okWNDGeqYpj1zeZX7kTdWmpmYEM6rb6Rh3L8z1pUwsrQWAfPDxhwdy5ftQnWxWqperwLfM"
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
