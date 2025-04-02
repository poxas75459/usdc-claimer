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
    "4EHfGqpoEC2JBRvr5pg3N2tmNn3vQnJ7iFs62Mi9gAqmum5sx39CAd7m4k3PQUdPoRCKjtfRL7AbaBCQXjC8kmVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RiBKVMWx3DWG3KKsr13VupdqG36mG8i9CfPuqx26g9HYh5EuyJTWkUn2LHsPHGEaWACtnT1k5p4fwTT9xhtViLP",
  "key1": "5Fe23CzMe27ghbBCjdUgYhbMgnEzw33X16k6MumqceWkdy5mW1D1AyJVEiZqqZYPimWYZVTNGeiPmQEie4sXSPQc",
  "key2": "2kGTppQGRB1utDL8omMCxN6zG37nok3t9eAur79b2cAsg8BmApqGk5xL5Xh8fkJLUXnDTKuFPR85NC116bKWRpSg",
  "key3": "5vJv9EWrZhtfiad1LAUi5o8dhKEr7KkaoJtMLfBycPyFNSxiHQBbt551WDajgNE4JEqS6sT6ozXfaLvBvr97YhDz",
  "key4": "4yWgGDVqJZfqaQx2WvbAdmX7mf6SVHTWDgiYfjDohKE4nykDYAYmuGsCSWYchaTFdM5wv4TVKZrhYxV5cgvu9Ey1",
  "key5": "4yJgotTJpuh3n8w72SMA6U8SrP94oQqKZ9HDqa31SdQLveBb4bs1wib3ARqvzgYwJAd3kinXYxXVzZjd7LBzFRkF",
  "key6": "2Wft3dr9yjU8hCBdi9YKVwe1BHXPo5nAfXpTQTJYr5oYZZGGDjMQHegowfWPYY5bZW1Udsjr2WrYmRrPof5n5FAU",
  "key7": "5yUJqKxKxUv9f1Zr3djYKfRpW4e5kD8M4bUJBu45iJHYq1EyMHuNeHXvYhs3xWDbmdzpy2RKnXeUayhP98zW2CXe",
  "key8": "FfbKNtH4km7DL4V1Bh8FYEoH3HTUvJj6LGZR8iPUSDMnHxQnCSDDdFDzz9GpEGrzMZvfYw2MSBRrzECwmQsmKgt",
  "key9": "59GEBR3ZBQja5Z8FzoJU2muuDXLxwsMZijQSTniZM8hDpJCJNvbDHwgdSXaSRWEpwk7VeaqVCM9Z7yv3JHUJGqFV",
  "key10": "5QmiyyBUBb4sVBs8BTL8ryHbcEseCoQDGeCf74AuqXkFSbqbh53Vo6gk7wj48AaTm3Eo1qGmE3E2MLGhf7e2fXw5",
  "key11": "2CS5dFmnMQ2ePZ6TWsZC8wDRj4DsBmRBrMuW4xFnheSNM5cD8iuKjwPkVaj4RUdX7Ak4F98TwXkzmJ7DqSamHs23",
  "key12": "p8SMQHuUJZKvggzHfTHzrqXdthAbKwV1etPnx42B2t5UJtqDk337eSiSevxHyo6vnWwXp99Wokffq96AmMYWLxr",
  "key13": "viV1gYcxhjz66P35tpQTPWbAFexrKooncTc5GfobYZjqoPgTRPeErR5KQVSvNG6V6u7fimwd2cnhjq9xGvpPEDn",
  "key14": "4YRfDHcGkZbgS3xkXVjMXWnJWUEB6GUgusHcZjch8ZTMPPb9rg5Y6MfqNC4M7exjsz2jTYRjbgZpeJjFMmvt8onu",
  "key15": "2hJmjdvVGAREcF1zsvDtUEcyveaEVKWMQWqgirorr2vBrgp9ymsyjMKbnFLCuZsWECT96d3Mgo8vNVRnCU8S7qgM",
  "key16": "2ykkhDUPtnHdL3EuvVzkJuVaThJ6cCDX1cCQ5uGU8AgaDNvGYBs2RHebdfJhzw2XDQ8MryGa2DfJfqre2Kt67KCq",
  "key17": "2Br9TsL9p1K4T8MUtE7Up27id5f3zzMK6BfpD9HznARc3MinESC54yoTTYAi8t4iYJyTioEjiEpdHsmKwuFwcE6K",
  "key18": "ABgz7J7ojK2bRKnm9EYdVLjPdfgdhX7pe1r8dfvvU2iqoVEdJBrLouayQg5zhUeRAjwZoAHgE7gKLr13dP5BvbM",
  "key19": "5dxAxufWo54HueLkHPazzFfobyTGYTkSZE7kCgH4JggCVmtWsMGDcawAECrXzXdubkbP48GASkeo1VgqKPMWCnPR",
  "key20": "YGo2EdyNv4quaSjmBHiWDRex7uK2zz1iiLDX1o6gLHBnjT9iZTuLV1X14fuBrSdyZtRhvLjpBrnQWxV7YsuNms7",
  "key21": "3wQirn9tFYQEdDv9yR3BGXduZnkvMpLEvJGzB5ZxjNoxK4rq4p3dh2MKDUoXFaam8uuPDnjnQNE9RaLxzXZATcmS",
  "key22": "5vRuYwjwmsg7n4cYviEyNEi4dThk9GgD4YcR22jB36UCraFms7rdAaYNa9Zd43uwJ5R13uJ8nbP96W9e2yxxkoig",
  "key23": "56rYrpW6LvzefEH8doFyt8NqQUUTBEaGNaLpiEbHYzUj41qzb5zCXHv7ewVvoAGUGr7vdPFRo65Hf2aPmxQ3Wt45",
  "key24": "zoemepJrhbvL9ygMyYKiVB38LDe67pbRAZaPnntB2kF8nGKguzXJiA6JrZ1KXkhbnquKX7Fggup2L9aHPhGsgUk",
  "key25": "5G2fURfr8m5zjTc4crbwrM7TV7UHNXTzsvKETDynsVTGd6Lc5BMpg2H8ZSJjXfTnzVWuaGtPKS2ucJXEdLjJyAEi"
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
