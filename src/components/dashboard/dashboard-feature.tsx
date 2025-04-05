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
    "5nH8B2oXpcyjeLVFK89AL4hoHgW48LzhcX2KaGgR8KHkZXFK4e6cpQu6GNPuNQ5AsTJybZ2MMwSWsQxrQEEkhLRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qWbKbo8Wz41MPxDUKWkpjrjbRAwTLBq4eSnW8sx8Aoeg1949Yz4JrarH1mmBuX3TdfB7aBkV7t9t93fw4QUkqfs",
  "key1": "3cCQksfYpYtqs7RZZQp32mH7mVJQ15UPyLjPXbkynAhxiRbAgdct5H8zkCAsbHWiU2FntcfTHyjUtw28HXfwNx5u",
  "key2": "3vegQoRJSmgoj2bw4Vmt3SZa4UT8Xwb48gddiRZbLy8xs4t2KUjHLt3eVuQMNckma6xAPcuP1LVx4kJG1DkN3J1a",
  "key3": "2PfTTbmoGMQsLQBXqfho16JYHBagLkrLkMuQTytxEyaARFYx31HNyQY1cezQnDuqbxEzBWPpju9fGQrnNwkpV86h",
  "key4": "NPUhtYJWvTyqCfkJ7pugDaM2CYcEWRW9N72JFk4fqJwb7Nk7pVr2FKBF1qW1pYePGnHBj6W8kx9qpMXZx8JPV3d",
  "key5": "3PtVMQCQd5qxPWQCsZNkdqUfyA3kcTMPgswwTcioVH7qqzYaQ5Qz1Bx9wviufP7V3gFErtWCkNyxCJX8RTQW2cL1",
  "key6": "2gv7GeJT7iZ9AHttxnHvsJR1Hnjgx5ahpCBADS9P8zZ7wAjemGCbzZz2ors12w7G25JdPujnFsAnCRPrsieCuT2X",
  "key7": "BPrMLwniKeqEEUTJWBUBaBGdjgsrJzUyS8UhTvw7bQQmajhLptia6W7P4atHwGm4uUzBeqo6waPDwej6yajxEaM",
  "key8": "hLSpNsH7w1uRgbXhSsYEo92qDJAGY7n1xqVv8WtUtF2DTfKQJmts2jmV38iixgR3syeWpgF7UwkuwgcmF2cKTDn",
  "key9": "5Yn884eH7gcGzhp7ZEn5eK8HR4YXzidxW3WVKnEPcE6nVPXjB9wsW5UnS9uDNDaasweNP5Qt5ULjAvscvwH3cYif",
  "key10": "3LL6RGUZpcSWAWfdN5ihwCYh7dBhmQS2ribrX1Qk45hfC1zC4ztBPPXPjAWuBYrKPfWpsJiPTQf3co5BVZFkDBXd",
  "key11": "2ShPyKvSzJrFh9fBa8mbg14KW1u1at5UQ4RcXtjyM4trrgDGY3oT1G1DX4wTGANSFNqnkRLjMDVRgpnW3NzwqP1j",
  "key12": "EHdg9kudniN395bSmdQmMsz3afH8NsMhC5EHLAC59vqqWjxCvYEQZyGk3nUSo3cctiXgP64z3d49CFLQaB5sJFg",
  "key13": "3RA64LjnRSB6RPxgo8Apa8nLaRirgnVkYjMHfrvERjQZq73Cf9qTN1CFG8YE2AgF14f3dZHHwKTK2U5fTfFFtmYE",
  "key14": "3tpSPx7srZWKUPVZ9mwpcueMQ76V84Ww3E7b7RyhoF5x1rcPXycodaTzU6QsAMSGKMVT5z1SMJSZGYM7NyUYgtvW",
  "key15": "HL7ECzi3hzokfvMHc1wi8xVqqVgwcbzgcqExoirzF7Z7gpiMtWSxqxnKQ8BoA4wgagt82S2YMuVYDswyJs5sGHk",
  "key16": "2aQyG6SWG1yTJfEPN9xEqNFwxhc9M3wdnhXa3hWQLMvXmBL1kRjyax46ksCHKeuh4rNJuJ3XB8oKTx79eFDNE1LR",
  "key17": "2rettHEPSfkAiXxzk6DiWYWXdk9fc5tZmMV2KTvPS6yhnyVJ4b7NqTSuZoDFKGBvs8qpgTmrn6PLRa5kam4WVMGt",
  "key18": "2mPf3a45fKGy1mf7qhbPco2Ch8Z6vneJnz2p6EvU3q1wchm3Kw91hVPSdnGwGaWnRuByju97H7hMebnW72kRv2vU",
  "key19": "5TP112tZ5mSg5FZ1wFReiZxMe8sVNrEkWtWMz2iXQukYxYpsf9j3Jo4JTFDVA85X95NyN5Aw3jno2AaUnSeYbLsu",
  "key20": "4HXcfwws2ufN1tKohj77KSDmWcUuwsvDVnnTXY6svYp7vgsjzKUfsNByZxUnfcP4a5Tx7ezW46vgZoshnRwwENGJ",
  "key21": "3P2vDk8uhFNno9KrpCr2sZPJG1sjdW5FUpaUvpfjksB7vi2waFqgEbYDGqaYjhJZfiddcf1XN2eEEDSBPFms1Qxy",
  "key22": "4KjbR5szsxV7aChZgH6gETsaTdvXiHK9w2dV8csdWeW4SHV88miGZJVy5RZzUcwmkVvcwntRAy2memDQftucz3vN",
  "key23": "2y4kosQxSoGbKpLm8yfrJYs3zTJBKVPwZ99359aSeLnd19qmSCU8DU6qUTx2GHq9qBYgC2Gh8cWpGDC57TdDj9n3",
  "key24": "2NDj4csLTzrvKftqRXnt7J1YM7MBTkBvtpC8Ze8bynx6YBhQtuYaMSE6bc9bmghniZnk98ehpwy7A8VSXQ1AXmnD",
  "key25": "55gi37AKAVA6Y7b6U32tPwEHRGwSDDrbnHmFSbbhxdUoHNvCyov2soncCN6cEbn4TsqsyFBmECbuNRa6mcwoZMJA",
  "key26": "R4MMUtdNZyWzgiCHtx9VFZue8PTAk6CetMCxo1iLfWuEZ6ZtwqfWaycEGoarXzEfptE23f7TUYPvYAos6p46Ukj",
  "key27": "2NPdHmiMmax8Gx3KV8KfVvFNfWsNuHvWyNHM4CKrgz9QbkDFPGCENMtqz8NJnQGaP4wZk26MRVHRbn3DNttUPfMu"
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
