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
    "43wquDt12AysXPk2nRSEYpPHdkT4VGems3xGtw39ZpN6WDVrrTHoLBNNhiJ2vf5v5ewUbLXq3JAX5g1Dwdi9ZFRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2svWctDWDpSUYVgUFV8MtWJyumGT92V4Su17y7NCDbdgTFQvxxB7ebYWWPLZByY62vhfuSRgakiAoj4nxCAPgDQN",
  "key1": "2v6NDXzXBjarAvXgrtcN5yM6kaiwKv6riHd8TDRVzRWcxXENGXPhtCrzQWrHW1g6Kvex4jb1Cc15iYb7Tj2QfLvx",
  "key2": "4RAJEcKsCRsuEo5k1TvGAtXMMmSBXQ4VsGhJvrLfXpSRUzvPezWw1tNLtJk1aFdsRksYseq6PVag9uUR4uDXGxHW",
  "key3": "cKuHTbTC3nT2pWSrJ7Pcf5qNUgEeATTGDnPaxHYSHTVRzBCZdgo4fp2DinMHoDC8yJt6Gr1DTy5qwpXs5BysNe4",
  "key4": "4mnXakVjG8SGeAyehYysRtSmsAKwB7LE3XvxtYzHMt1c4X5jGox5hM5gPvR7Rke2Xfa6DPh7NzAwLYWEzZPzHemC",
  "key5": "2VcA3L1KeseCAJYPScM1EMZRMeP4NAANUTtP8Xro6pao8JvG3gmF47AGks5BMGGC2DxJYDexKGiz6PvPZbm1SCmY",
  "key6": "38eg6WHkeX93HBF6dZWkZEFVtZtbsgaDiVexCANVmnVbk8NK7dT4cvrce7jtzWEGT9DBHMp4ikejDnhk9MQBfbcg",
  "key7": "5ePtTT2EGgEAM35GbK2d4DJGjCZ2W5txnCWFMU9s1d3tCdmcYsNnmRHgpVpRkCrYs4W6pRdkco7JkE9t2tCN5c85",
  "key8": "V86Y5r1eCGFEMVupzzbsgKstTdsUwjotVLQy5MyjbTokLSPKqtcoysyjMmjggsGrPcNgg4XvNnY34MDot7HS6vf",
  "key9": "4dsxHXFoHPRxMQXG2VYBSi2iQ9ns5BMiR1doPxkgPzwo1Zo6BAoWN8XMCjzZ9NtQPqR5fDtT4YDvbWjN1m7x6Ae8",
  "key10": "613qknaPgCNxcnPMkkpPaGgTuxJxQeY5Wr4WFvUdmfnwZZYdwmjyfRUPU8uDhfA1BJFqF41bjpRjbLD5DHwQmf5C",
  "key11": "42Whe64Er2oV7jGhVBCf1Wp8B6cMcbn8HndrfTgoXvHo5pdxrecm3TbxrcyvC53o4VTbGKjqzSDpriFb3QXUnugR",
  "key12": "4nh5JHaB1FRwCFcG5vCfV4YtrwPhpTwVMxu5CoZmpLxAU5o2pcz7zLo9C35PpCdEtqx7e9zn5VEUrJ4aWjGoEQo1",
  "key13": "5yZDhnfx9TG9p8zCpM2GzPA7TkHBZ8aW3WMg4eUpz1pD1qt34XpHf6SEumozgNeitbEkA1tMPXx49R5d5fao3oMz",
  "key14": "GoLWrQnH9CQupbxR4wn8QGUZnHB6zCQNkR6QWKHvCtiXVma1Gh8AHJLxPtLoX7xZh6rjf1epbPSyhbiyUtywshg",
  "key15": "4SZBFDWqJeg9SGK5cQiZXCLRdPLrDYzZR4ioGED2hKtE4p1e82noapduggTptV2531pMx1W4a2i8XxX1iP3ArbVt",
  "key16": "5B3rWDZRx7qwLENPZDPyfXd9MZQ66WqmNkqY3V6A1cPjkixboakiPz6msyjbtgyUwoa9oma23PLTdWKofo8tM1dj",
  "key17": "2UdJfdL9yaVqnouWvXdczYZ1neMNHRa3f75C3YqCmdfMEoGBU5LCAmng9yVkETbqyTV9UmHsFWM96FeMnMidNvrf",
  "key18": "3QGEvVkNpqqutxUpgxwyYZBBLhbT9HQ1Bc6cnbD8yEDvAjmk3Xbs2F9pWwQH7eXf8RxKguVsmZQLeUEdMSTyifDw",
  "key19": "5VtP3vfsukNdggctUuLYSHZcov6yRypayek4eUq5isNKpPHmy8Jtoe7cw52yQvtPNCSVcr7vJg4PoHPdBxCLTCy6",
  "key20": "5MpsyaPdBcSq8b9wy5F1ZPBnvw8jGGTVic1ZNVEeYBUqfay44H11weea8xyfZvhYyCWV5AT7kZnGKVPEBFu9Y3fe",
  "key21": "2sSHxqjETUp6js8yaP3wynaNgm66GgczrAaiu2pBXCaCHTxyAJ1bVoXhMTsh6jSyWv1VYQKmMzU8ErvetfaRsWg7",
  "key22": "2HgDCCoJyLrKCs7RxgAcE9yRYJsvFRyMUKXZUe6zEdQqTZfk3ymWSag3kcdbfN9WRTx2iqcXKUoWNXsRYDkPwnoi",
  "key23": "3cgWfk8h1TeokgghW6UewbEha4asGYWnagM81wTun4J9zY57sd3nwsQKhW245zDE7MDJz3bCJHPP6sGFcshtdiSi",
  "key24": "65HMST8mFAAnAbwR6o7qiptXfcGfVsRjgGeXZGHChDvZpJFJPvABiiQ8km5YBFtnSpb1CYH8Tug8ogn2RVj9DLRu",
  "key25": "525MA2a2V3ZrKjKmHuUHfh9QmutHEWyQmH56xU1wzjCBz1mLdXBDu49uBEJ57YYEccrBDVb3YH2qgqUvv2wTFHLr",
  "key26": "YCADtoce8Gn2PTLviihpF5oLedkTr4nNNxzV3s59rw7ziC5KALDvp2dcsvaP6BYwYFDSxjzieV6AtxddLnYCE46",
  "key27": "b4QxKyDhc8TxmUc7KQdzge5qhUKsBihE9fLEiFR3MYUuJMpKyXgeUCfCFo5yHkUcxv4pKxAaFeoJbgU1wzUMPBj",
  "key28": "2qf2ioaFkphXPTsKQZU9ZJjh4dndDPXvyfL1r5CETpUo661f9bAxvM1XbrKXnyqe2MeyfLjjHeCZ4tptxpoCD6Ej",
  "key29": "2zJa6WwUjSGwvyoYkq4c7Jg4VmGx5V23rtaxaxVJYqGCWgVPqpC1PwaAjYsUAj5RwJNr4zzR2QiTUZ8edfRXMcxp",
  "key30": "yQTCYh3FVYPLCFzGeqoyX67xffZmQy5F6XGPuuFMckbqHoMXGc42APBRN8KgiPSQpjzSHkzrQxHw24qdwD1h8xe",
  "key31": "5qmqF2PSvwQXtS4yAMLFVC6D7qRgHjgkG958RQirCVr3E647eLhRm8Dw9cspBHJbf5Byu4tTHNKopr3sgEs5nbpg",
  "key32": "4Y6bY6Sr5Cg2z8vsLZcBZbJDFpUMe7LVmm4kqwP8JK41b3xKKQKcXnh5QKtrbgJ9GHGbHeUQUFvYEbuNisuJ9GAw",
  "key33": "3tZbM4i65Dnqm1SmdrpPVE7NyrnEgmHuJPJqEahgcqCUHPieyzKio7z9S9ZzqfnbQpnAGc6dpGMZX5UWkc7ZYe5y",
  "key34": "LC2P81eVq21fSgXhtJbC9ChqKmUNTDV5YyJKW1N8coY3aYS7rPrpgDe86DiBKSNstHA9TVCzTGTLk26EK4bQVtE",
  "key35": "4edPcRYWmF9WZ317W4rzBPKcPpXh5VNxpxqA4fhwQ6sqfvtk4QRtRbySTRUpPKec8PXHfqVfsbewCQAZyxx62eqA",
  "key36": "3FSgvYns4QYE1sZu4CfQ3tSqQ2NL6Arccfir1cxwC2irKxG2o8DniHVFSCqXHwZNzsd7GJq5fG3Svwt9XRZdF9i2",
  "key37": "MbRzD5v8HM1DrHUosESg56wwY6sT9isCwfgwoLfgmknMWZzv1weEz2n8PrWfWfHYpfEPjLfwhNTELmBTsUGMQ9B"
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
