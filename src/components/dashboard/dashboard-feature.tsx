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
    "3r3F3bPCA58db5Zarb3sKPU6G5gxWVmLXqdBxDNvXaesBCPfDvBqVKLqFwaiWBrHwAJtdub6ozEQqR1y8yJXGq44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Zc1dyuzMPKH9CtTtXAmuaBgLxKxTYSRDzB8ME8vXPtEvwWA1kaPhevsuYdK46Vok5fusTXFKt68NK78LLgNEbJ",
  "key1": "4ZjgtJqPaQ6j53NmXDpk9NTeM1e2i1FfxF8mzqFiVF3wU2Tqg1HrPsQYHEEb2TZefz5rKUJc9YnzR4drek3siQMj",
  "key2": "4FBjKCi5rGTGNRhvpkR1AGaoH2FkNxwosHfrvrn3WXXuHUkEXKaNQkJ4Xmp4P3AqdDL4XBcAs52kdiYvTx6rPV8",
  "key3": "PMasDJjPcAJaaJQM5yxsrBGjPpLx1RNw1GDXr5NtnvS3vKR8fkxSGg7jRQZMCzvVo7bRPYfNeKLGmQWd6h7RzoD",
  "key4": "4qQmuptugJ9EppaGiTUVkTGey1tHxFDCJEgzy5boaP1F9BFVuWECvWdyqmrLD49BXam9mfYbNCMECMM7gMT2cW6Q",
  "key5": "5mByg25LciCN9Her3mS1fzYhMVVDKSLujC3Fz8n52mLQSvxkZr1m5GGQHsr4r7reGq8JM88cT354aanhqwcR12vD",
  "key6": "3y8irGq8qtpi72RLRRJhCFgFZwFVTePsSnELrgsabPSMoK6bcF9o5KZJPj89ea2inSdouRtZWAZ2xHkYhD8CxgEz",
  "key7": "3LiLYJUguEUHKbMzNMxmGtSBJc5Q2tybQfWEUpneuevBpCmfUdHzmcD4ejp3AwMaPVZJNJwLJZjeeGx8VZS3Dq8C",
  "key8": "5mcQnk5zn7qQRajDygBX8ALaqB7d8aCSDXc4RqXHpe4KAoBAKmhvVAwhVw7h3brLWt7vMVoVAS8M55d8VpbnXFdr",
  "key9": "4B4EYhh4qQ9Uqppd5aMUaisJ73fajNBV9rr76eFhoV4bV5Xq3KLG6Sf2xKPQNPsBUczYGbnUb1jA6pN9gkiJU6RY",
  "key10": "frkT9dkxcbL3MYk3Cgan5FEvS5vt9SoBvTGwFv3DPeMpkK7vknse2puzKp5gSWJ9s63cPQdmwPcC8mHn3uWycGN",
  "key11": "56ZhRNxcSbhA7pJBwevrBLFC7iSbDGQUovXVmVJtM5pSbva2np6bApXD4U9t339VUP5TPVTs4CY9erv4w7SMvFXU",
  "key12": "4yquYtitbVoSvgkRFjz1se64GBCYUgkYWRenwdD5u4Cp3FaHmxZ5W2d5stA3g8zEUZokTFm9gWxab7s6Ajej8zig",
  "key13": "wLmxDpQ9HAj69NrHqZQkqKiydsCYjzcWkXy8EbZtWFnv45LsDHvsVo9daBJV4tnWkRq5ZagM7okMYmP3Y484idP",
  "key14": "5zS72tqFNwfJ44eqfu8QvXWQQqTBzpXviAV8JDXem7ZrYGFuMUkxSN1ZTxkkFg3cqhnp3Wb6HtXDZUq5GQme63QQ",
  "key15": "GKuWdpbiJ2ryPwbfN8d9Ut5SG1uiMhE87RaC3TzU8hpBDWJApgjZQqsuDJsBMzoy2mnqbEcZ2GfzHeXtjH6x2SB",
  "key16": "4R31EXkUyEV6mT2RXkZ7JTFfDvkoPjoZxQBCkyqvB3VJLgMAuzqGkmNoY2FQY82n42JFQqoc2gkK6FXnovByZVqg",
  "key17": "48Niz7Yz1jHMyGHcNn2wWC8GXF4FNGW1zkenuZp3eUZGe2muayvDFf9wuiXyooNT3bZc3xU6ZcZSWSeUccxf5NWY",
  "key18": "PWrmyv1S9WKhGBVGF3XV21EXCyb9NkmymLvBxEGanyyK8G3it6dQoPwUYgmPzzeAxHfL4ggQgMs2QRrd5JN4g1A",
  "key19": "2dnp3EcfzJzMPZjcvz8WJFjbJVhsuTHjuxQmmhG4DMDfxC94Jeg93ZCapvXYdR1XY9uEYdXUGz54fEmYP2NJAb38",
  "key20": "DXq8oneA2QcB7ZW477G19pHWnHBbihcLPtzwDmvTDmxT1u1nxC8ZkUa7pZ8QEnRvYUPLvUs3RKKADZ2cx69iRUh",
  "key21": "2wu8PfuKvXY84WsAUVY8pNU3sWfvYAzLVhHwxhQhMyRXAeZzeYLctfDJuXQRymeKbUeFJauUxnJPcRUf4HPPXT2c",
  "key22": "3YrDxA4qwgoDHsL9rbo6kUzNqT12R4kQiksizy6MzvVTvhx91KrSC5MNEk9Ee5tmAezxA5QgYC9f6YcvcvpvSBaA",
  "key23": "3AXGXRKg49jA61sPP5R8bs7iEkdqsK2vi4KhBt2E7aekMYKEQNojtSQyWvTqeQWPTRhuJnCApJ8RAQP23XaHX28v",
  "key24": "46qTHHEoGZop2h5R5D4p8hgZhFovZ2Vd1W6C3EwBfWiY66FxFf1fLpEFEHykL6EG48rK3zvPpk8zVr4BEPzuDmqo"
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
