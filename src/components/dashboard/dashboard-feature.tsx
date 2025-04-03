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
    "33KM4yqzEZ6C6iaGCGTcWFZ1nPCQunvSbyQuwzFC3erLmd5kAzWNmbh4FQc6tkWAj7mw5xSjcxoygen9mFnGBqf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sRrcfWFpgg5MTX8977cQj7MzRfqoDN1jMUGuhXuESYxBabNKMYKVP736mFubACmMcT5KACia5Ei4FPWeUxoVvm4",
  "key1": "3cfEToeN8T2K1q4j42a8mQzygCMPocPZ2pZzHyAYZFh14WEBdFC6czEUm6Ys2c1ejDSD3rJikk6Vrw5ppVa1Cjvz",
  "key2": "3VX8sCEWFuWtxk6ZybihEStzYnrY1rPada9H15FfjsxTWCUTdX2vxx1cUCPzHpxqybuHjLDL4N81wsAu9fcZnpae",
  "key3": "3ptE7jyuRjFEnBbysRButtsPiJUqceeezsZMWgpTokmgvFh5sH4ksUQ2qDCEDWwrG7Xt5NdkyZYofXis43wr3HDB",
  "key4": "3WxBNfEuX3ALNwK8e7wkPKSj3sePixkL1EhdF1jQWcJ6DXMotC6NSewPmLypuGh5RK9JFGmDDSqSvt23EA9SUd6T",
  "key5": "b9FaUCeVyXNfKRSxUCvDbaPVMEBfJEiuLPTgM5D3UkyaFtHe9Athyf5F5jdKBxwF1KpodJ6LTScXoiGeD6hBm3G",
  "key6": "Wfc9DLGuo4njYVWAXQAVLPQnqLJGFUBfAe63rdvwJLo6opH439RvF6r3c3tXJP5eZTwTGTHhraK1Sw2MMe5WUBR",
  "key7": "3XpL61FSoyhGMK14QunHuoC6Ff7J2WsnaHw5XZxsm6ebSyzbNfmD1MccaQv2vvtHg8GNrP6StEJQpDqiJ7KZ7Ajg",
  "key8": "vqWVWiUGJ4vXEAwpHTXJvW7yJsjW4gXMPydG8tESkMP3QkeUDrYMu6vtAjQFRK4DvCdXKFNibMPjxDdSMrfamXV",
  "key9": "5bzvEARNWrHZvfE1gfqqw5CqHyFRVogGYFmgcgv581fvqEHrFNTXBNEsYUQ8Anqa4mpAVHaab8XcRkVgbedw3iJb",
  "key10": "2drtXFAFDGU3mBtosZdaypG52dEs5YyPySMUh2cNiq6xPTgYfTpU3ij4RTHdZubneybEouVV6NpDQTU6RfccAkDk",
  "key11": "2YU3oadRgbYP4x31jcUREmyKikbb8WpHGNdhqAPmTCTZy5ygiMGnW1qvnh3VPgSYqETqNEnm2ntdyiYXmwdpUWkt",
  "key12": "23pmQpjPiqDfGYVnDUqGW7jKDY9E2Thxmfdx6vX1rAp2MPsRAcQajJy4vHXDZZUzuj6ra8Pa81iw1gLtPQTR8n5c",
  "key13": "4ZzqGqPh7p6RQL8MFE6zWUkaBi3gLKa48Q9yYH2ebCzC3B7fyaFDLbb8psxKKgWmkmMctpZgNm8Yaexb15QCq5hx",
  "key14": "4dru8Wy9hHr9GzmD7HiByfgaG2yckrJk97iKcja4pzwA2ktJG3eKwXTVkABK19ZmDLgFut8Q4oNH2z66mk3tnumi",
  "key15": "5ZqoUR8DNG7U6Fe5eugTdDK9Mk8NwxZBKnpdMdA9G5hezc8ivenotTjm5FhHqs478PB7TYspozz5JWaRtbL68KWZ",
  "key16": "hKUGET1agDCvbTpziyLjVQXjo5pzJrhSZbGETdBk36Z3pT3vPJmVXXM8SvE2hbBSQARGL2zGzzRcnnr8fCgwJV6",
  "key17": "hKSemhBRRBX7asUT3q3RA3kjZDQrJQPkMdZLqsUqquVoUYnYAP4PwumTuHDf9RfizKr2uecbqL9HJ1YVEXGrSQv",
  "key18": "4RDavG2shHhybM1ewod568VyJb6zyqWCzeWHjX1vm7bgTo5SyMBxGGPj3M2tFaFcCga6NBxVxaBvXdpvAUBJYm5j",
  "key19": "2iGoRG13mGTFmVbvKvHGy7NYyHWukDmf6hs9Pufkvd4qzXAxwszu3cPNhLch8FfoH1XvKnBt6C1ksSgrz3qYdsET",
  "key20": "2kxUMZsqa9TAYmNXKgj5pxMLcjxX2naDpQJyZxaVReLGmPEQ3odivYnDwK6FuZgjsH6bmA1dtednpeK1BcNHXeB6",
  "key21": "251fNZRCN65yktGz1WHXRS8S8dBjUciyn3VGfmNo2uDAyuuxmUSSMEBrHEmASot3v6wv2P7o8gFeArRvMFgfZQ9M",
  "key22": "iAczkZTHNoFgfNwwR1vWMmzgFnmJtRpnGMrxfW54XHuZk4QyLXeNQWtz71nKY7zDhWCYGHFJZEYUrEKRUJTZKdD",
  "key23": "eeC1ybHipMGwh8UCLLSgmAjcueDmt57KX2NwRqFXFZbyTh5a6NvNb84w3vQLx8HM1z4yqmbhNXe6FFtxEKyksko",
  "key24": "5eP6cEF8weTUNHnzX8pFH4DoTThv7n4EeYfoymWPxFVu3TQTyrkUPtj8sHPDmeHZFTLdHLsA1Jnnf6WLhgMDP6rC"
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
