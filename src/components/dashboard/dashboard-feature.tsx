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
    "4nJENmdUdnrD53BF2JtJgoaA1v1Z6sub6LF9mstV6T9aYe2ewUZsMXJ9mGqEzhc4yccPtfVtK6BwTfQbBVY1ufoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5veKx5xFYTeB7GvdVf1axgu9atb6QDeswaRw5qbZjVgpZRQgMt3XEhpfBsoMW6Y7maQ5z1rpGY9EkBXZKoEzaxyV",
  "key1": "326AX9eCqyhDbNjBR9SbAWNWzSGy5R81hDyEa2wkQk67T4qCSYmCUYWBze42PXXfymkCVCQXKKo6gq1WFWYkioKP",
  "key2": "43AFKtvKGELPJHRzLbBqe88enxLqMoBBXfxHbZkRhs1MppotVCyg9k8mTagBmwazWPhwuxUKevw7KZ49qe5hQhJs",
  "key3": "aR8PM6io1KUzoFrENHhh2mBDgBPiZ9iRKnNLZjvkUXwWGWnu6JeC6MCBUbpUtbHhPrNeoupdrJRWz4fNCXkK7JJ",
  "key4": "1eudQpz7DxdyrXDdqop3tAfzzbWNZjSZ7x4P26tQDgsH2dbG3FT2XU7RJnsxVcF5eFpd9JTJmMRUH4h7HFdEJ8j",
  "key5": "5tPcXcmh3ojnXfmi55Hf2qUN9mtAu9tV3baa6AFfmhtKVVHHTou4xC5ogFZjtpw8gHEiNidMzLTtBHPMuoPsypuL",
  "key6": "3BUn8eT9iamAabCVwhQpxLohvpLvQztLfAUE34J78vveDUouZDaWoy7nykAkaFfmaMw4pTJNSW4mhuyi6FbPbE4t",
  "key7": "4aF2wMnXAjnpKj7qzkqzYP6u5EUBDoXozYG4ZxgLWPwPuuX1PyyKMzTz7kQ8L2oL8qKnQzDHif1qP2Xi7gj6XGhR",
  "key8": "4RcFrPMfieT8a2muzmzbgmwzriGTy1oLu3XHCrwiQxrdzL297PmmETf6XKHSj1rWP6Yd9XAdgFQ2Um4KDWBWgNeg",
  "key9": "YHCibSSadqiBSRSH57HiJSfG6docSNdwr9nDQt3PM23FU8i6ZTamFkM7eLm9czBMGv4KHt1Fb14MNskbm471HvH",
  "key10": "2hiVmuMRV42vM7iZyfDKNMPUWGNDU11475uWJLGvwsWaJRVqgmgQHDBmeXpCrwgDSKt75YQmNHq8SG7BYu3Dg6FM",
  "key11": "2y9NiJAmrPc5kR5t8KoKpDFA7KtDzHLBhhNMFKBs5vGndHEsiPiRDq5T1zc9N3W5GFpNKwNaAYRR1SujMBFuNYGs",
  "key12": "5fV96TKESR4Z7uQ5EdSUYvYvLPTmM86QhdHmbx6e3PtV6uBna2DAaSDnosN695VMjBhPTWGJtJGSeBKgFRVfbiNs",
  "key13": "i2u6Yb2ZWQL5Jz1EJ9W8Bg3k2164eq6HHbX7dTBMANagiL6zWyBRADP84t69uXiLh2yoryfBrMsB8EHEL5KwTjv",
  "key14": "2M2yysGqrsgfwznKrzLHDMM3NNfiUbeCeoqYWFW62XJLMaqv28A2hsrJTcSd4iDwGHmodHTQv4n5bDqnKKsdf3Fy",
  "key15": "48ymuFyhLxfrVmdP9WEqgEh5maAw9qZbrLzyPNWNUgh8sRZXQ59t2nJkbQjybBxXf7ZHDfkeF9HhadmfuUbybyzG",
  "key16": "tMCnEE47jCmbSmy3XpK9cNhrJjD3wjaFA6VhVt3TuSjoUA6XuytqTtSc1Scj9c3vNmfqVbqS3GD6STAeZmcJc6b",
  "key17": "5TD6PYfJJDJHnBdoqF8bagVRVqXCPvE1CXG6nWU5RtkrpxJoUGS5Vg2MiftVVdKssqvigVF5RTssBCDigqptYsiG",
  "key18": "x5MFVXV3tQnr1Hp4DTZ1cZaYDYubFrG3pQ7aWfAmZHnbQNL4FtRwttVcSsMtT1T8vFTmgsvFHEt9BmJJtgt1iaT",
  "key19": "3ACeys3X26ko3aKVSfEA1fBYCB2XHF4bip9ZrSu4JPj5KZJXjRtuvu8GZ3cNSccjoiN18HZMWijFDguvUiRsYC32",
  "key20": "n8j1Crth3KQc8CooiCxfzbBTBjBh5YZDTxF51D5DXs1FZ7ssQTkY6sVFYsvku1XA61DjXNL9oMvYPXDpS85R3Vc",
  "key21": "5DHEeBMHn6JuDHfWB78nTw7CJ8L7GHiX1BpvL78DKZpNSJadLR8RNVXzpJ4xsAKt1hJGnXtRCFwmUP3nEgvWq6pF",
  "key22": "572QEPRqkFWJV8Gg9g2MUE2a3DNLEvZQY8ffQ24RYCRCV7kD3dZnajcrtJ7SCeKukp6Dn2DLqNDAdGCsDznQMoSv",
  "key23": "5cKkrp9Q4niys3vJazGjiT7hfTGWPca3pVwxbd1pkyHQzXmzWmLRDn19a8PZcLYgjLpdBBnc6yqxw1dtDTNNNQyD",
  "key24": "53nGgihroxk7znCevLTSMKoX6XbHqdAZ5uPbvdHu3CuSq37rJtPbNbearUUPH6VVFAWRAid3nxBxsV6W1DStvjYR",
  "key25": "5x2HfGFSnNjezhizt986sz4D3BjKcQr1iWcYQbe1Vda2fT5xRT1GwG33fFjaYkeHkQkEhDxMKgJscJgdXmZnDTBV",
  "key26": "575iLhW8F1fRXMaeZvBJnQasc6UsWdsWYLXZchAMgeYD7kEkEZdV6rgtk4T98FYvPE13Q3jZjf1HJqjka4DAD5nv",
  "key27": "2ACdAXmsXEimxdzV6dC2FenYJHuN9uaVc67fCZKgqKAUaEyhN3htUzwkAtiQVyaJXJmgtZDQG8EoNi1VuG8W2vbF",
  "key28": "4KEMDhRss12BwFv5QK8BzEXp1c6S3Z8wD2zPNfcZEnagxWUfTrmg3efxnn8Es5CeUtf4yFELnvirhRHDqDCvxX7a"
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
