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
    "mDsDgLhCXozbi1v3DTxYQf4RwhGygDicxxw7Tqq7JYnsHSddUUSHNVZWqvtsbr6NeG96bAJTSNQqFCR5Uh8nrvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RgyL7E1muNpKvJ59Uh2AJAqE9hi4RAKn3UNMdVzsfL35aztBNWJyK9qhuioDY1KXLqqZTomQQkFzdME7XhzajF6",
  "key1": "62uszjffSx4nq7tQ6X3hhuap3X3Rro1Ys2fY7hnoV1Y8caqqNdSduMRnVj9JUD1isB5K6eYAPpmmDw5kvaZ7e6fT",
  "key2": "rbXAbKobxqvJrStw5yvhEttcuetsMGfyERFf1xmi4Km3ehadLoY4eGoepDvTGvgUkekpXsCAGbCmuc2YhbdGN72",
  "key3": "4mMtBeVp1BdGyXaP574LtjZNvHQSumfddCb3aADZUZzAarKm9Ynm35fqiVtvJFTjbyJTGCii67pa5sf6ozxn26xd",
  "key4": "3KKiu3uCBR22sEoeKhvDRz4jNKYosNfq4V639kHN4gv1Ahu9ccFrWy2Lbxy4XnKUxKdUQAnvVVNrWrnBmjoZQERQ",
  "key5": "57w5x8enPAPpRdad5FZhqtyLMpbJ3fH9X4C1maNVaC6JLG8pozE1Y4q9btCm2hecGfwxHfXLQR9ni2SmJtttGBVH",
  "key6": "5GEKEovVj6N89Dow4EmDSKmimG51LpqYDq8xZRGxHYtNqoHAhE23yDwiSbEWKUXreafKPL7LKHFtCJYFG4miSC7c",
  "key7": "5bTBeL8WsXpgtf8AJjtGRdvdZNzAXauEKgdH6GmLpqk5UCMhjdesXoepV64rXDTAejZBBaRS3XkEoytoLbWeBDQR",
  "key8": "3U9UWGQaUzCMj2jo8V7bqw5KWaayu6HLFJQXh5QWuTdo3RY4NrzixEy6zq73u9mM4tBb1D7C4ekeuDB5oNgVULs2",
  "key9": "53fPowCX7dDjmcz2b1Y4ttgi6Y9MoNvaVpmWBayA3p5BXqyvExjYY3kWewxGG3jUg1kwmFG3EFfM9HvP52UiLaxv",
  "key10": "4hjPRpUXYzCtseD9MqgAzQB99ujtGnoo8QGSVjuH2TShVoaDjbZFSeMTdaqqYY7yfnsb34VSZuej9zdsbgwKL9Vs",
  "key11": "5gV4PEn3HAkqvFi2wQjjxDbH2Yu81czdVYMactmxUQTpC9s9kTKKfuHkFHfHi5YygNdS8q2VEo1RthwoFR2LCfzT",
  "key12": "3LnWZbQbKxoDQ8Gy35gDNpbrtr5ywM6j4aUDWNcpVXA2E3gXA4CceNsrK2fRwngc7cvwdmMiJDHEA46LSKSP6FPg",
  "key13": "4kqrhnnG6cc1mY8GYvG4XBgYmgKB2udTi7sSHpcouh1qwPmnfqA1v2ZfzVmQJgMyN2WBgZctaxoxxqojSbGVE2bm",
  "key14": "2enndAFtGEZCmDnoZTcepGzzascqA4Gfkt1y77hnVfWDtBYZEuX8jXCvqHqMty6deA3U8417Md4SCRuFnr7kAe5G",
  "key15": "32q4U49zYsL5pyowihKGMgZS6j2WDPXpkMYB7bp45dznydx6rVYX6jC7xzBHK7Z18hP567m7fwB4mFDwXcY16HD1",
  "key16": "4VNgq4tc59p3S4UE6RWpBEtWS91q8dP239EvcSBhhgkoBXWE4C7fYXGrDDhFDCf8ksUGpERMbKzPueyczWoTn5fR",
  "key17": "2vocGDSauf3QLHem5DRHShuBhdb6A6YWoWuS69PsBUiHnQFCk3j67z5t8G9fUZDxzkKVoqrMcva3PF4n7xegXEuB",
  "key18": "4V874E5vJ4jTjMEcAk3T7SMxBPJU6cZpKKMitNUsztww72UnEAXje1S9BDXZdBdgomxaxx2ChgFegm4ysfNkDyuq",
  "key19": "5UAT7SvY1PLS4qVoK3csqUdbRGqSz9pZ3GjLbSy3AgpeZ5JFRBmTWWJdVhaCXWNtnM8kodHizh3rbJomgdfxGRwr",
  "key20": "4EHBtaXbMYtxwmLQE3Vo6oQdEwBgP6DJvWMfpE8DCVRUE1ShtqgtcSH8aytEMYAzfeJVmuz1CV2FzNQgPGaXE1Fb",
  "key21": "5UQXyoNnf2c1VEERhzjFCa8kRkEnXRXxSDhJZhgzbpcT1n5jS38UVkzGwFYehMieLAyc4B78osmRHfHUiHhvyreJ",
  "key22": "4brzCqmCQLMfX5AZg75h86Q5AMZodrMVPKR4vj4yaxGXWTQwFdCokFDBH6WMTMnA3F7XDD56eALuEXwYC43HgV7m",
  "key23": "2ZVQcTTBJDsEa4xCgFZyZDro4NyWY2RgtdxwnFeDQe9UWau3Nyk6FCJ51mCeKk5r9Yun8rqsZ1Kdhm9QpUKHUMdz",
  "key24": "4gTJvm4MmnRNvFdiVSSVqLd5Jx6cH1tSjAxebzSE2wNZF6hG24Z1NtaDu7NDnfA8zqYJR1Pd8175txWfMASxeBAA"
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
