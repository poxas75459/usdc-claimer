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
    "5c3fbY56YdNhDvqqvTFky3GqQ59ozgHT5GsfhBowivXwx3grU66uysChbEUwqieL6aHGRav1pTFtUq2M7fUNyMAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fVMmuhmYrudFK8ssmQsnPmoMvddf3ZvxyS5RMwXtCJh7trbXsxAUFBJF5nvCBdMBa1hbQCdQf8bn2MSdPhrqjua",
  "key1": "3bhbcN8Gydonkuc7s4o1Uo7Wv1t4HKWi2HFmTqsRCyYz8xMfjYj4J1iqEgfy53XaBN2JawQ1AEva7eXyQDqKnWK4",
  "key2": "2VVnUSoVYaU6NLvcK63zQU1u61PqTLsHgzeDhePqD47PEdEYjaiUEmxDWaF8PZHtgdEempCVFTwjwTnDi1m7an2U",
  "key3": "27VqubuYtLcXWvWQXim8YfZGbE3nMF1RMrFF6DtjnyijrFTbZG6CYYzREu5PARajt974QT5PXuSYwFBTJTQBHRN6",
  "key4": "3tRDDCFyRiGyAbxHnWN9dnGAuGLVRXgPwhfiBoGzjgdAuUyc7BwThfh1UgJ94eWRzPfVsm7fXVoumvewzR6ksgxA",
  "key5": "2TmXCNLrvL8HnZTvedHDfH8ZxpFauKCdBaF8doj4M5DQ5ZQxCxi1AaSHMw215DtqLhiGYqsUcBTPAHhgtUfMo2FX",
  "key6": "2HLeC7CmVs6QiNL3kchj8t4EnRVQt7e6D75YLRuhDXKgjHLzHanLFQrmwCJH3PTt7kJTtdR2FQrKoyWXERmXWBxe",
  "key7": "3tP9U21Vmxghv4shHb97Z9VSkAFMZYdn1Hqh6JHmSbQ7URRCYAFf6fALaLL3dsyPtycraBK6xJE93nq8BgB9yLxe",
  "key8": "4di4KW1kgPnaCYU2vMiL6HHGxa6xPyYXBWBrokTuRa6U1ajhd6teZsRQe3cbNihqNmbyEvSJcHsmqMziqMP7rzBK",
  "key9": "5n8sptbuCzWGYkqpK63geZV6CZ6ACKBEiyURVCG52SHozTSUokRxybWwB1CaeYtJgxpBheLBqQkmiE46mhWZ1m1D",
  "key10": "3S4oYvrpAUycpZnZWTQEYu2rXTvEx9J7qw76ZatAabdbbcScJS2BtEKz7qsZ2suGzKwHpm2v6TmhUus75zsA3qNx",
  "key11": "5Ls6Ju8rXq7PZDBkZWvymovFqht19E4fwJBrXsVgq4Gp44c1vc3HxeDMsCmKPaFnPJugRTr9XGimkXmF3NMbjcFB",
  "key12": "4vonz2EzRNajxLXZBQTrtqVnNNqo4qnQBnN2hXNXEem8DWzoSow4t8dyasrnvtYyVFqKGGkS8tuhQJJLqQewZB4z",
  "key13": "4THxDV2n9hdijWkUjQ6W5fSwMo76VfdQy7BAZJMcArfxFbUAM7Cvt9cGwfJe7X7vnVfzYGyZR6n8xCavxVu53No4",
  "key14": "3DRM32BL1bDi9uMada3WPynFXDrxKSqptPjtQSoWwjj4MFWG9xPw8DStp48wh52SbHMATACtdtxBY9pBzvqT7qZJ",
  "key15": "3NRrGQwMRJLUVFPAhWLRrySzkgBsGtAjsVUY9cWC73zWUT3GEAPyhBBdFcHdZ8TLV1Tijyi4aakMNxaAPrhcWgqP",
  "key16": "48UkpE9UpqHcB5CsfthumSBJoy9hyd4mayHMVCz9r4Mbhu4ECchygwaSHC6PFy7m8gYnS6La6VAy921uokPiScL4",
  "key17": "4VJdFNWKPV1drBazChogmciEbd12PYtbcBu7P63VCfUBRDPtwRZyJR6EZiy48A9iRXraDPv9wSYkHPgNMYg4bBMP",
  "key18": "4AMkWu86yeUAV6pYLA8HsXosn9M1NxucV4BSwV9Czk6BhoxE8hqnvVDuFHayfX96TJvv1z31gzssfWKEVAbaeWZq",
  "key19": "EpF7CENh9LJNBuAnyoHP2uEUkBHVpkiAhWsKKifu9bjEGTVRiP53DwR1f8jvZZXVZFEWJX1Np9da8KGChUidhL4",
  "key20": "4DDKj5t5impbNJiRbCHuzHUkDQFcaEJDyqLkHf9mPfHuMbzZuzT7Zx167pRMQjHwTeXSLJDaNdrRDVyzrhAfvS3P",
  "key21": "XVEofqGJgEHnupuMhMgELXJrdKrontT3FmEoda71eFDR8DecYnx3YjTn6uM28GNYBBYCPWnYounFLMZGFJSE3iT",
  "key22": "1TSvAnSpgAZZuu2FXdRaK6RdXNsuBXxpRsQtx52s9avP49znDMB7rALTNty1FznqPQZC2Ri91v9YJYNuw1twpih",
  "key23": "4hwBVgVdvzKc6dv5iRnyaNNa4vUE4j92T2biLp7B4vZ8TFKmoHZkvQuunub7Egog6D3H3MSbDZkQNkUF84pqLevJ",
  "key24": "2k9GBL4LWE3zm3QzVCsSXS2ya9bKMa2FRkC8CWD4RhiUUVmEDqdw3damH581Kpb9fumcWvPnxBbXWgxysWWrL9Tn"
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
