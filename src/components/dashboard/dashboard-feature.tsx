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
    "5j1eoa8CuQeQKFdEXyitJqugj7rPkW3tZpLvVvoSqwuTYbD6k16gTEnX5adPbfiGhozP4LE1SGRNndo1tU8Qbm8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s4RxfHL96qssQNY1QVr8huUvAqB9aKMEu9bywuV1V33rHvZVPf8fz38DVxdaGeGxy9oMzwyBwz2dZU4goyJtuDS",
  "key1": "43CB3j3oS7q32H1wquSkRCThBUzsY1miigkSFLPSZ23iyuc7NRg47MZmyimGgfWAcSiUrcLRWswu71CMmuMV8TLx",
  "key2": "2WG46kMM8SwbpJ4sa3DbbWPq29UqEBGXJAPkyynVNFCQJNtz7Hc9ZfwhLG97DdeeC5Q2F6PSzqpZWX6gqf49C3n5",
  "key3": "51jLQrgFGyQv7RdiL6c19dTNMn5dX3pnzd4iFtZ2uC2Ax9UDXrbbMrK4A3q5bEGz3S9oMD7DXo7PWXqn3wsAYySY",
  "key4": "37vUSMAohPbE868suJ1FWVmRwAn8fuE6iTuPNFGBs4xCHwaguryBV7GwgNtqmVgks9PurYNH9FNgr2bdZp4aWe3c",
  "key5": "2QqntPthuxrXDWZbEhVFugKYVTmj9hyZDUFEyvjSJzqX1pVuer7U3JURh3CRUpvcz9CmLZaGEVZPM92uEvaDuvwY",
  "key6": "676YhJGncs5Qx8AwVUg77KFpD3Dx7kuiEKMqiF6SyCg9BBQ5jK2vivjFeyEJc819uuhSqrhvhDrrkXyJ9XYPDuKn",
  "key7": "2C76kPGU2BNhETbi6TY8aLHHMiZVSqaTsrrvCYobfLtxHTdMZyuqUKCqmqXYKVgWjjqcWGmQCZ7LoqdWbwxYgoVF",
  "key8": "2iK4epFWJiBtaFPQqiWcgwQ253RcQd156ZnAZtHNMjAH9GaUQxyQxFPFsXMAxfrAXHVX1uQJ4pf5W8jS8XXdPeRP",
  "key9": "3VVGLsEqhPHe2tWsgCS3ZSyhEios23AXYp5YgF43mnq6yj7NFKKwtStfYwwTtrSZ3yn84AkC4xNsN6xNzfbDJwsa",
  "key10": "5vtVJrMY8Z1KwdXGhZgrnCZy3oLEVizPppUcCfFDjHQD2dim5mj1VvYoXYLnxRcBqBhUjkwxPG7XsCBsmMi4fsR4",
  "key11": "61i2ksyY8BqgpTupb2CBCciLjWNg8bdVCyVF5dSZ6iSPjzPrHuXsvUqrfLbMXf3EvaCrSJ6Yv4SUUUdU43K5UK5v",
  "key12": "RhzZ1aWGGxDAU7CVMmQQ78aiwjXZDV5WLmiXp7jVYcZugbtMrTVqquWuzKGmaCx4TbA6DcN6qGHsW7voK7GfMX8",
  "key13": "3AXydQm49dfuaKARNsGLbwFBvBRgQRwAdTf5UHLZawyLPJARtzqyTpbzcm7wrKa4nPf3T6bgM4hpHCWAzcpSfz2z",
  "key14": "4sNzmuyHugrJ3XntxsKATXYSTWTWd1pK2jhFK9x1KNuaWXzq4VNYpuWdDvF7K28NAtDRHgqNiuBgbHYfsM5eaZ8y",
  "key15": "3PQu5mvFYzpzFr6ndC5SRqJKHnHKMT1bTFKPkiSHe21Wdv5Dcmm7AbpdNk6abkvwsUZfrts2nEv7i9hTY3Edq4vJ",
  "key16": "21NPYf1k4yPxRzBjuzWEF8fhkYRQ8nKCwCgRrNvRVZAJtJo1nHj3wa5D7qJCYfkfaEMjob9ybjqiDzSUjSLKcuVK",
  "key17": "Z2cnwmETkSMiw3uxztxgej85vE1XF5pJLwXMi3EP3yPFaLLJLeTg6mY73WviK9bPZnhNtb5cZKqPbhxYT7YyGBq",
  "key18": "5aUAMbgG7vCVYDoyd5aWp6oQjvvhq7kh3YuHXWdkhLSX4Nsmp8GjHnZDCa2xqQQTxojkVhNTiAA6CaR5X3KuTTjw",
  "key19": "3DM5AnL8fYDGQGFnUvkktYW5SSZJuEHdvu3hYLrTrSckDKytcgWZtovRrnJKvPoaDsTAXhYRcBCAtHyhw2gUqWLN",
  "key20": "3r4wEK7KEj97vRa1wWChMCTF5U5HovvBmwTypbNug5iiArBXAtHSz7gAKctbzjH85RYiTx5s5M5X8Afr3XYa2Xk2",
  "key21": "5utEKZoWyzFWgfC7RGVXyUaFfiN9FEwbTQ4QQvNwq5LSX64LQ5FoVi242F6TLuP3UGidSgNKYNGMgsehvK1CC3a6",
  "key22": "5VSHJn3CWtx4A8YWG9c38H5xXSHn5Ty6eAtVK8GdwavhoqWSsTRKdyHVappDtnezFhUwvmHPsJ1mRsqQiJ6D1JXP",
  "key23": "2quSB7HHbZgffk5NiKWJEKBrzwSvY5amG1Dikxfuzx39zvqnDtdeWcTJU8u1oQEwPAisxXSfmAKVtiA3q2EKjHnZ",
  "key24": "4dNmkX8oMTsDk5gATENsPSi51CKqn4AB1Bat925ADZZTgccdFMqF5eV4WHptPG5FKQN8D2wvLJAYfoBdSqZtNcxU",
  "key25": "2vmV8TeSB9WE6ZqJg3kFHywWgnKTzK1sikye7CWnVzCZZTa9JQzpp2MaouWtvWmWYUnpaMdu9VvsY8eVBfjNmfRt",
  "key26": "5C1U4swaukenUUrMdotaHenHdaWRriSrjmrXuCfjCv7AtFrBqeeudag5XapatbicymYXdYjF26q9Fj6oFxRi97Fo"
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
