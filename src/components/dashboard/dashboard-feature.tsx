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
    "52o13Wozgu1j6tGyteTKNAwa7F3XfGapFj171EJBLf6CRN9QTzbeDDN7y6NJE7hMf5JLe5c39GLQkpyrQWWcPX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xk1paxf1ZFkYP5FACzk6S9nLEoBTDwXvi14FaiHsVs3ke2qpwp67ACZ8mX4ZQan8K67Ex1MDH2e6EfUFEiaQmqg",
  "key1": "5hYnv1Y73ChP3DsKutbDkvAP19m5jiSW3PPbEoc74wMnvvjepKePoQSYrVt5WY7yMwoF7Jt8YY2ymvxtSDbvp8S7",
  "key2": "5F9jeLJLxtPLCoGdBwGvLL57dnfx1GtGzXcJrajgxhPFdSRMzgk1VztRZbqkkfg8g91ooozvN8pYRxhyUreSUm4G",
  "key3": "3gizX6Ram2P5wYLbAhmX7vo8Vp3edbeP6Ppxh3N1zStGmLLrtJTd1y7S6aYu4DvSzkGrC2TwBFQ5mdjd1pWt9Nwt",
  "key4": "2XD6gKrnDFgxo8nzq7xW7ygsc6nejwJtpb4gCyNV8CBPRcCyjFE3gMugYBPPhzKRKXn2cWBLPb1YvqR8NMY3ekrW",
  "key5": "55RS3h1pG7H7VSwsMKQqiTECZGNg9Gc9cPZQ5dMtMW9kj11Wr2oGSQrLDFmLgy8nFjGzES5ejZUmxhKMJXKnUQGE",
  "key6": "4zJXbvsG5FBX8i9s8M39Ahz2eXqaczr2wHRABz5QwJPFVH892DUYhJAb2yhztbCy4WVgWY8Kvo5H7VaTy4CV2nbp",
  "key7": "woiAEGkKLt595o2GCWBoPAhHEKVUz6bKTFvUJZsEDS5DTDyZBQZhZCrxxL2PZ6VKqdtDLpawx8DDQwV7t9ntNsy",
  "key8": "4m3vib2ny2QiU452R1DZgmRtyP6nDZVCSbJAguFE58CkyzUnjUrcgtkEYbDixSMDcWMeiiyQdpcSpxVt5GkieXkd",
  "key9": "2vWx5E2d5wWjd6GeixT66GKnsJfxWcLuStYJ87uWYAwH6tcXsxuAi5dVHwYTu9sqN7B322WavYcuXbKsJUUf97Pn",
  "key10": "3CEgyhSV8EiJGktF2a9X8hHdUVtcGe2zywMdJgubPRZW5t3CpgShvRZgEK4FSDXT8KrbNhTVCvabEvwtUeS69LcQ",
  "key11": "3LHFSPpmwRDikd82Y7QN2ciQDKzMKvWqHHAcRGcgmohxWJc5Ysq4R9W1UuEkSRvewyHomqtkFrznNWixHgrtQMC3",
  "key12": "5uU9UuRFAYZXSxAACgZbEBss3rPkHqqKHYbbEubgSQFFkmTeau3ch3axiESMiHkwoEGYzH7neKeTZvbMeGCYRJGN",
  "key13": "41Gv5F7Vbzst2DcamebAudMiMLyvNP96J8g7NTSkTNzr9vFxhvpkSTECKBRG5mrDwVTLPUQ9kefHo3EnhZBtApx3",
  "key14": "4CKgWJ8rHCiwxQfAaiMaA1hpao9ivftZiQpuXGnrJVRLpAXXm1X7Fa3Dq6HUqHUHukfHezuUjyRBadrRQawSnLYC",
  "key15": "3dCyjbP7m7QUhJXRA6RqZHeLd2qt6axRewdK6EWGLMum41TyN2nFj1xxJx6ApUH3dNR1rECn1hCyT7JhpRRVHdKD",
  "key16": "2tGVnsUd3QKWXjRNE2ZrQnc268KUqJmeENU6BYhLd2cQsxBJcuEAckrHysfCHGqMdaJKaksnuGPNZApUdWBW4b5F",
  "key17": "2LsRPEcsHSP2h2t3rsfk9nifvngwsZz4TzkgpcRHWJar3vXM4SrxKPgZvaRCdS4jRjdP6ok6AuELVES95GGhhzjh",
  "key18": "5V6iJGx5e7nEReWCCvzpqGbGJKuEVpa768dF3jaK8iwRUuHKnX2aEXzggWjFaUpNBzaJM9cKkWzHWGtrnAqwKhuh",
  "key19": "5DC4uCqjv8JwkNKFTzjbEpQYigMNPpMS5kGksLjv8rZgFMN2BBL4hW5e1QErpxfHp6cfn48N89romtiWPmHwpb19",
  "key20": "3ADC7Uo5WLPEgMGVAqJsrff9BoeyxKcJHfZGyRs1XdDnYbiXKnoiE16tR8casWVRV5LaZpr3MyH6CEbVmiimuRvD",
  "key21": "4La87KSSNqTYAe672CvPuXYPcfKsDp5ps2PjxVcvfsrSkYF97M4iGgYLURQrjBRi2sMurvFs6MBystd9BzujAT4C",
  "key22": "2yMy4k7ajXrSJccswZtYF738jUjYzQmGT3SDUgpHtaij4BKL1y3P8QWf6ohyHoqARZYqsPh9X8W8TRkQQiFxURXC",
  "key23": "3JCH2TEsH917x7hqN1W4PLNvAZJa8xSowLcMPNZif26ApLNYExvxiXh7cNwQvMti1d4EHZoeniUquqXxAWsbooiq",
  "key24": "4tvLFy15XeUK5b1BZyZ9rWAzTKrAXTpErB4HHhAaZxHkJh8kfVhEJtb5r6i1wkVpQBxYXVfmDD3m65tqbp8kz52J",
  "key25": "yDVNwxBSdNSU9s7TSq8G8NLJgjbTXjycsCyVSV5332hvng3wPuojLhHhPDJV1vpkD49QfS5sbjaoDsDACCtAJEa",
  "key26": "5GeTXX6fx8d23QptFsNStywkbaw9cJtJpWKyoecL5gULrJftXzroZRMENVStA4Y3dsqoMZ359u8u8g9yzdtCph9h"
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
