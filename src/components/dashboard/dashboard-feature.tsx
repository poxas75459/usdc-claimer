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
    "5mxommeRRCLkVxLD67PceXeATBwd4gjQwcFWDEim8KUM6ueFy4egaxcABwsZWACwXjZa5t8qgYFVLMdPBSEvHg3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PnY3ah9rhUVWeHScUofaoEEm2H8tqjAmbdwbTRpV6kqYT51NvGkr4ejK1uXVJoMdq5Lhq7RaUK78cYeAAuQroVP",
  "key1": "45Ltx2G25oEKNKrtYCaNq3jG22hxQZTx1yJA8zSCRvb5dxK7ndXYHYFMa3eTgBk5zcZUGXT4EhMuomE1CnYCumDX",
  "key2": "3LjNqAnQYvpB4ESQLHSyKmmS6tfVtuXFkduVA5szhSnTpZ4gyaSET7gc2TFHTWyVqGKDk4eLeroZ8m9BDx3GUDuE",
  "key3": "5YobDsrYPcWwX5xEgbkFbXp2gjL5NRYpNLbAboQphG4DmfDzjPUfMaeC8cipWUFcnhLxyUJqRX2FERELJK62KMco",
  "key4": "3geERhuwuDhs4zjvKV47YL5xSDtPmAwcUqUnJ1D5wdtco76G7jQhzia1TjurhFUeAQSBZSZPJom8QkKnkWCBbgWP",
  "key5": "53gr6vAGaKggKiDWLd4RbWrEbVCh3ghE6ukN595pHMUwwvhL2LyFFSRX94Fc8ap27VHaQTTbUVygJN7d9BJvyVGG",
  "key6": "4FbXYQXJV2SBUf4Y57hjMA5YWd6K969X2uZ3g9wGooZL8Ck8kQbS7Skzmk6ETngB9EWTMCfPXkptba4LyY9YXgxh",
  "key7": "43DZsvB8v55M3Vfu69Sp3KyqBqVHrwKjWZMKTZYdUSea7oxjvgj6gAjBPRBiSkjZbuEstK6SfpdkR1hjx2tbqHeo",
  "key8": "5dJ4PvCgzRSK2cnuJfuxCcnJthGCAzPdC4J7PTVappyr9tVayZ43ufQeHSHTYtQEVUNpJgLrHfwMiHdoHWBdGu94",
  "key9": "vWjzZSSWVhvJ4eM27eDxaNCGTbf9JbaHRyRz1ej1Qq52XJU5psiUnfFAqgABtArFb5kx1WXPE4z3fDzU1YRsV9P",
  "key10": "aKVX7gup1DCDsRvXbCXJzBHuPPQ8boP6yfQHKyHSWvfvop1MVQooZoeQrkTLLpGF1m4684nCkfzMNn3gQgKfuo2",
  "key11": "5qLiXQnmsQbATyTb1xvKxWLZQ3pUQ8AQeWsGm6fzPa4a89uPRSDF3dTCWu82vE75N3ZHCuEZ9FMdPsAKSYRRLcbz",
  "key12": "4va8Pu4e3CW7JWeZUYBrYcBypm9SQWbPb6vSKLDhwXpvct1uYAjxVnQoDH2KA2VJgkmfDRsxYKQJhJxXf2EGY1Lr",
  "key13": "ARSowgc8iXgxWUhNcyBJE5NKzBzPiyBFP2UTp5r9M3ngeY8G187HPWuvJ775RC7ZXKAfm38xjnAogLUzfTikax7",
  "key14": "4ueNcPz3AVADyN763X8P4LV3eghYGkJZHsB7HDZ3zkybJatpND89ycNq1ZLzA34qNy9btgsLxcXyTLzcwdTLFQUz",
  "key15": "52y9dmhkkeH6mgroG5CEXprhMtXRSqmnrahH4MBPSK9NEawfXtfBjT7GnbtmfFFcUBg7zndw8gHCdRdtQhJqCMKX",
  "key16": "5s16Z1W8zWhVR7ma8QdXQ5LLpBFdzHAGrzKmHf6pAFVJ3aDDoALwYESwRY2CZWu6ifCcMTXohpc6JS9Nj75mQxcc",
  "key17": "2KKrx8N8RYePGZ5hWpEu4vR5mmmbG2QUFS5sYrYEugo86QG3gjBHAzYnNzMY5iqoAg6sLoYjZPjXeDf3dDFVeDyV",
  "key18": "4VuWVraJfFaKRymHY3fbaG6AYYXEhTpJSVNc153Gskwd71F7NtwUqANnvpBR7Yp4WJcsk3JTZNmJZ8P4S4LPmRin",
  "key19": "2tSMjMkqYUBCmuqj7cAEjBjAjRgdF2G85EbWnytNTtbBP8Ng1g6upUAATfJhmagPWVXbkgRJSWqZd9wzdH3PqZ5A",
  "key20": "3UcBkqERFDrVvvskjwtWK5NBT7nsZAHvGRrM4EP14pKpjtrYtx2k3sjNyjU7WYXACSz436bLAZqxQkcEfTTQvubE",
  "key21": "5Qmji2NAJ2nbsted9D9jzW1S9VX4uENFgow9qD2yhForfU6akoF4wNTnRQ1UiQg48LemxmVAwkhV8uSFuF38hDma",
  "key22": "6ZsxE2GhpdUHitSgESDhtRiryk6hsrX1iMCFAYMb1uXew2BaYDHPnH5PJMSuRd9Rg8v3bzqa6hib4zh6HFevMcY",
  "key23": "2ukmkcsPDUuVWdBfaUzSuk23imdBEEK8M62ELXqaKLCwG4WzdYzzMskM7p16LaPdYWiaswXckMWRBfm45sdB2kx1",
  "key24": "4F6gVUtWAbEf8VBcZ1zjM3dhbcW9CaWYFGy6RXxnnvJ49fXe9hQAFtFESPQfctei8jXkKkVw4GWNLtByPkGvk4iA",
  "key25": "2JEvtfyAsQ5qx8pYsRZjZHScCMCeU8XM6BfY7sgzcift1VVq4yt5MjzcTvFCvGTdsDwKWTNrjixVvFMJr5LRw5oF",
  "key26": "3Xu91QPragNSV8zJNwCp7Gg6v1TLWHMXw99Qgz4sbgPz5zjSrBDUJheXmJzQGoPezLatCPimQ3aTjirwQRqxNLVz",
  "key27": "VpnhZeS4WsVYZo84PVkbvuRvgWPVtxu1EnmobtHN8SnYSQSUSn4z4GYmS3yQ8XJB7zYqPKQFcCzFofTGeFsTozQ"
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
