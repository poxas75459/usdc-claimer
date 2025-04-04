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
    "mH3HvoAZP5Qdh3vBbhw3uSVNpU1EQWu1SuHZCZhgVofG4atn9Ht84jHfr4sx1HbHrRNMT9GGAAN7J66jJj5pRFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HzGgNY6kgRtT5z4Y3j9EoFoEWwts5SiNwXWZfy3srunpdDbiaw7JrwRWmgXWdLConSZZ7ZNAxc1RsTE4X2JTUG2",
  "key1": "2iMKjCUTR5MqVpVeqCWGHMRGrLtA77gWVyp72RSeUa77mDZzK4LoVhDvcU3gjJgUZsWHsR7hxsvg2JUEQJ77oYSD",
  "key2": "5373j4U7uJqoAYqMqBwLYTn1yLMF3UQ1phbSf8uUKemCmF6Q9tGDu5CnQor6ZcyyP2J41vgqduxbiAYKEC2hkTHq",
  "key3": "36qkoXYnhAmbqpHDtDPQy2QxLHCam37D5hvoUMQUujrBDvH5UDZ4ybVEbvAwzgm1bp4dvHnrr5c4BzH2FQXnaNSS",
  "key4": "4cYLAzM8zUTGEndbhVpJhTwcveBbZqVmijh3uZ1YkCptBjA7ut19z2eoDWGQ8C8Kkuxy9EAgjkpCv5HMhTqe9qZn",
  "key5": "5vS4xoLttw9V1f9d971gUZxUwb2x3JvTAv9tjdxyncuSKr2BV2dVYJc9GaG6PT97Q4XnHw1YmPacC3KrEVZiPkRy",
  "key6": "RJ9LkKertUFncPkpmPmvhbU2bPhEeVHt5fLJPzuLJQQoXjY6e5jMV4ritd21jtR5UjPbdLEoVuXJycQbFsW9Ptn",
  "key7": "3SX6eKAfYSPGtvgHcAmnPK3r6Fjrckm9W8FCeoWYHMc4kER7h4VFUHYq34J9NTXsQxhdyyuUzN8N2fpUmatZSfCT",
  "key8": "2uXriCH7MQvK2nkUP2shMhLAFDiH9bAEfKJag14VwsstH7Bn2NyKPhMaGAMAHzHEm8aGPRy4RPakZXJAaAPyASyJ",
  "key9": "3K3pXxGj2jSdDP3jJpW6AgSChekpUZsF28fkoagxcgsvhGPLnq2ouZhB2HoS9oREm4vuVRpFxc5DjoAqSD8wLaZ2",
  "key10": "5Zm7itCkXEgN25a7bH5TtDpjHPQ93qAGcGCkbdac4GG13BwRya8QqeXSDWeHrna8jVz4t7iL7Bu9zVgnej5Xxyj4",
  "key11": "5E9uobrYJ4CgDv1GQLDwFio73CNGsyPvRMm45KQb1Zy4t7fE9FFehPtvgmsLUmgd7iEV48erUAcev2uDtW6xb5L9",
  "key12": "3HbBfQhbeRNhk6uFJC3afYbiRLwFethq6mronAPN8FGnmQvF3HyPEhy5f3Zi2T6tefeHnmbvaaLB2if4LE8oVeUQ",
  "key13": "5ZTrQZdJB9Z1bL6i2JDSc1G6YwM3xwmdPVuYLdpgAosYzoAso4pjUBPZcHCRErYYaZHKCN76csZKZHz3duBpLEZE",
  "key14": "3svLUneJqTuvz2P9gJksQtCEVoKH3ZW4AGekHey6dqCoywwLiWAhsu5oDwpJMAgp1ADr93WTqyvzff3dbeExNtzs",
  "key15": "k9CTm4ukmNju6VSaXdtQPeSCcbTm4J3pWX7hNX7KNzJ7n2H9NPwMGsi2QAdCRnGcV9Vu2JUNG4cGzNUSjt44hra",
  "key16": "FUTsrDR2MbTUy3AmWi3xUnABU4mSSxQr5ZDjjnqJcxquFdL3y8BMw1it2MaCdyN3JaCAuEwaAxBgrRgJcMHJFaZ",
  "key17": "5PUprRDEMPt2AaRWGN7eQCK3WyWBGY8QPPtVTBCNKcwugxJF7MU5EKZjo1CC8P3oeXLYLgtedaGoE3ggmmVzSW8J",
  "key18": "5YLxgK37bfAv8UN7QuJ8Lh3j49uzyCPeKWurpvLhmi1a4YYoPhEFH9VxVS6MwUm6r9Herj4kgVwj3BT3NYXS6cnk",
  "key19": "UPvBJTF78qfJT3kF9nopbDGx388XYfBnDbyDhwXCZqytbULx7YQmLo7dXFpdACCFxoSjfjMh2uqXnVGsHxd9Adg",
  "key20": "5Q1qXRhrzRJen5a9VoErqARZZmBZso6uyKKeHPAtHC3LpgLsgAMLxTNZ7w93nN1VfUmauEM4TMGhDBUMaiGdjDLL",
  "key21": "4b7AvWgE83zip6HpfnqJCu5LsE6mzWENxqT8qGC3MyzjHN3LKz3wrZTEfP88xfiahVxT1cNveomTeuWMUzMvPuSU",
  "key22": "BdA7DbLyY7fUe9A2aaHUhYyqjYBFjyt2KdVq8URrkRxDBtTjLBFJy16aZXdwtFnGW7cHc5qn3ca2oeuNwxnYTq1",
  "key23": "3RSLWx1AHhLT9iMthpsaKbi92CT2FJy7UtfrWVK1iSZkiMsEttLNbeALRSeHVcED6iykBtTcyCqHKHGQenUDym1m",
  "key24": "4X1Ti3LQ4HKyDcYbAiyzYi8gzNnnEV4AVtwmozihxC6wcS8we8pUNCW9ytLJLwgvdg3Xt3zTynKz8UrsYR1erD3",
  "key25": "3Qm2bC9HL5a6xn61KB83dBQCfKP7wEZ8EbZvrUc5EW35jyoN4S5roGKA6ZXe2zZzLjn2JNsLoc9sy769G62w3YHy",
  "key26": "4qtvX8sNThKYfkbdrN3drvK6M9N6RTpeM2gFYcWe5pFXYnuDAChJok1huV2cpkqwFYU9JC9auMYCArBQrPTAZzgW",
  "key27": "2Q9TP8DBb4Xz8CQJgpkeNWs5JXzPux847mMacoZTJJgUGwu9ginSYJUWv8mrBctdvSE3pspqsxGQv7cYeovbMDTE"
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
