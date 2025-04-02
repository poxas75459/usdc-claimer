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
    "PBhpAdEaPukz9XAjoGiZKJDkX6u2UQANkSEzZWY26sTaUMzRfG1e3ikZSRUSWetemYW8by7uPT98xfSxf27UYoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SpChrscuHJDh4gMjf7AXVfdgg5TQPNWizLo1BdQU8nQ8DSCW9fxaYhRVhZhYhPrnYz1HYS13LvLxzj7fMJTSEt3",
  "key1": "3bTiamYo64adFXDJwdVq4cTMA5eoPy7Jn2p3MXoxYuZ3NYyiq78yAHwwohmBEJkecDvpeFLo1NB5VeCnSPyXmXtA",
  "key2": "W5J2yN9ajjizzpisoRvPjzV7p5GADKGfPoqjFjtiik9GB3qBbwMtfouEgvKDGyY9kgVsnF4wRVu6UjuQNwo3egR",
  "key3": "3gDEqPpmpah27nS3HzWuTY7YzSkXHWrc1Fw2oicTGNXEeQyeXz2qsYyL5J43eVKGg1kFgfTnGDjiBZ5eJp7avmu4",
  "key4": "5rqUziVVY92zJjaep5mG6MfbDRULkcDW1oGbzGhVRJqpLUk7jpTwEfgGF8bATN3GxpswS8Z7xWMi8hjDe3f6UcHv",
  "key5": "2BhponKNbr8YHNtEC6DR3k4GtJ6j7ebhy8SX2cGt6BkioKf22fVkR6ZYCffwtatjRHGTkw2GKEseAgnp7AaSArRk",
  "key6": "5WSGqBYdq8qz4LXaFEZrVyhAKHrgRk1DUrTdXYa9hYbzeJ9b3eNfEPN5FPTH1er3VkHqjQT5SiMrmWFUzVqWY3hn",
  "key7": "5oTCnBG32htVJWHaCLEpwipPgyT8zW3cJzqnzcbWcWpLes3fETjavnSa5oRRMEUz5ZGvDzyghsBFNWD1aZotf2Bs",
  "key8": "5jwWePsGWhTszMT7hiWaeFJRUsgBfpdZM3xe9Rb67Zd8djMS5pJySPWA3kBYVKnfcCkBnMoo37RWGMMPKmgqEF78",
  "key9": "3fSdQtJVP56yMjiV2qX7i5V9zzqbCWzMxgKX4cvjvisS8mzeg7YyVbyY6GJb6jrNYeU9W2oFpf6xLJ79Zf4qHaGF",
  "key10": "3bpnDzZMQtAaxCoaCZCr8Ymf2ech7y2MmCdbbesCRHH7YGJKK1B6Q5nJmg42B1msJ5rvD86uWSxyJoEDiNgFwpKR",
  "key11": "2d6D3U3wuPLAJsR94E3Sb5RmAibTQHVJNWnGkpCT4cTrdpNxYVegeX7cKp9QpWGo4kfj6FUruzLMCPmsfkQUEEJs",
  "key12": "3GDBRiem5LgSc7mu1HE8ZJCARyA2gBM3QhJ1tqdf7iYxyB5JMDEKqDN8Eutvw2Pd1TiJpSMbdPF6vUv9FWChzqp9",
  "key13": "32Z62VXeSTtUJajE8i6CCDoznE4RDygWprL4WmNfnAVoXMQgsjfHV39ermJ6KwHhFfRnf5xDCoXFEikVysRA7Mu9",
  "key14": "5upzy8AVBgXmcuwkSnEejepjgq984pW4GFMpDyb6eHQNKNke42nn4SxKtZaGdj9tfFsfN7dP5Jb67xzvsFrQ6mvo",
  "key15": "k1n7vTaCC2qkRLxZs4qqWTJdQ9BLiAuuTcwtJXuDAacynLyzqFps6iQoNwuSb3zFQ3X6xPB5VCJJMcU2tYmEKJE",
  "key16": "2kKgJmNYXEQVphdyLvhyPV2QDejGraRVJbo9Dn2FssFKGQhWBrCQzNcephxwrPvYCwsUyMMXQBiWG6G1L8omKsLz",
  "key17": "3xs7HzbumaH6ApUiNvitQB4FSK1UDA7QuK7muURzmUVznQhZ4FvqbTtMMEi2Acz8J3mcrgiTeo1rxNSzPELWe63v",
  "key18": "5ySMaGawWYeGk1yWYZS3L1iUPH6M3ace5RXiGaEPrY5BZKFz9RGh6Qc4DbofZiHjF24vq6WfcpUELEwLDboEvALe",
  "key19": "5UMJJVAU8RZFdqQrRARNxa3UEZhvCbpy7Lm6X2B5NYD5yXg7AYfgUkHjrGHhaisDKhPbNBJqAKo7z3hWZJvpMnsB",
  "key20": "4LqQZWuDjmCB6C2tFsLLyBbTn8bHkEL3mtWQRpPPUvrecSFPYBDi1R8SuyB2tsBGmfdZ67D61EjrZpZBgDGVxQCd",
  "key21": "2ixtia4Na3HXGJqPmmVrs4CnuDV95UUvCeQdUf1GJsjMuR9NjrQQZn2JpNN6FxEgDHiH1XbcX3Cg1FJPB1kutyjc",
  "key22": "66GgDQ4W5k4Koc5ApAda1sYrRcixQfxu9i529p44EVGrwz2mGQ6td96UJp5tvKvnmtttKU76LL7f5jHtnFqS9Mck",
  "key23": "3syhXb2XJvHuveTuEQZBjHCc6evwEe3zHLueDn2GLi1vuSwyAy9oy44RvirbGmf46pGUuJnVqqDfTqw658jH7FB6",
  "key24": "29waXAMbuuxMzXGrNW3pf6TWpR9fNHX2nhQYYKU9HdqzUGhrPcMRSrAUBKDKyHcfPnCjRGod9WyAF68i31JT5Vcu",
  "key25": "4MzYrEMcrtGvZUrC599vSn97oZeDGjf92JqUJmi2JoSE84CbgHTMcJ4YCwzQG5t8UtD4Z78iSmsasSArii3pLARB",
  "key26": "4k5v82roRxr8GBD7aySjTHTfnjEgGcoc4Jt6sXNUGGGsPuDUPnPau78Z9VWqSDnWRJhTakYSf2xcS1FRkmqkWpwn",
  "key27": "3PZudR5eQJw7L68EB9PgQu6eKwzyCiiH7yLuctf9FEc6XTeYLkwrCG1p6tn5RF5DS2DotxjqVGchzSqpuSN7oT1b",
  "key28": "2SRD8rKN551Pat7bvM8GmCUwmxcxzVJaMc5JmeJFt8YTWCRwBDYRyisAtSaUBAXeZSc8JtfsTMfjQCRPJyJGjAD6",
  "key29": "5u3aFvAEPBTcNMWk3JsKKMaTwEr2P2HHAphXz7hDqNLnHc9RXStRQ3gUL3YrPHxf6qM4aaqArCWFoXDUZJaxene1",
  "key30": "28qojnJWkrZk82bHFPq6pSYJPBt6n33mfJndjrTQWq7QRcVqwZNzppBMkoCTgSwGxxsZgZUnfKQaxEoXNpkteBN2",
  "key31": "2ZzsHTTFsyNBsbmHqSFE2FCu2HZ2oYVcEmy5TGfoHMHPnGCeFTE3wPWzSKNEBXaddpb9ymxksA9QiF9w2ctJi7oR"
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
