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
    "2g7XXTnGgE7SBZYPzLc1NEcEWQdmdA4xy5FZaM1jysf81BDvZYsGP8iLmf4nvFfqSReCepX3Ukep87R9TD3FceJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UUQrvwBLNNqMjKdMiKkXbaUbnVwB45aeGDrojqZdshXdRiEsivF1sEeaZE6CBxmTNLMNuX45DAnxisFWRow9VHb",
  "key1": "7bTthis55FVo7uPRi6Xq76Du61XaLAZqFg9ihjG52ywQ2KbZLe7LcLCEXg318u21zhLbow1r4kh5ck2qxqjxXDn",
  "key2": "vLXa1vDCitCBTY4wygoXyokwuvcHRJ8QUmMryV6yFzG81Mzw5MCszmxWTz8efeFTford37TDjE3ba8FfVshwUUd",
  "key3": "3FqjmLoSgDnE61VDJ9C3eAg5gRZTHj4cgAWxCUdi5pqWRJzPjHQgs8GARMUXtomaUJDJGFszyfbAAVT3vBG3ynrc",
  "key4": "5znmCgav4JWyQYJmj4SmRhYd8b3RmbEWPUUnhu1g8EEWsuGgXhQK6oPNbifQSyFnsyPMAACicniL9CVx1EaGpQ1X",
  "key5": "nD5X5k6SaAxKVtq6vCCBstx9hUQ2Rpeu3DjY3CkfACpKGXga18tGF94ZGDRnG22xprp5BEkgHatVposWoQUaXW9",
  "key6": "dp79hmBaQCQ2SxLsNY2qoLu86iAY2WjwAgQutR6djUeY8p8DxJES8p8BtydJY1DiC4K6wKzNSxsRXY18SGFvevC",
  "key7": "4AYmLaEyjuuQLfYcQpQyQ2b4orkfeXu4nWJTTNUz7eQTcaXfczAhbDV3JD7vwcoXs6HhG7evU2Hirx1caeYaWEpg",
  "key8": "3HG1wrioefh8wyPWDuuDzxFhbYR4Y53dBfk1XTqyLBAiVi9RnhQ5pMfThErtLqBcHwXhS6a44eCq2P2m1nWSMHe4",
  "key9": "2KXGBfjoBqyvdCQnz3YNviKjk9Xk9qSsUs5A7XcpANR9Z5aCb8U1khrWvE3RHyXN7Yzyhnm5hCNQhpwTwaGgF9UZ",
  "key10": "eSGdcYyVcfcsnurqw85coWPpKoytBvHjJYKuJ5vExANYaHe3YvEM6C2P15uFangPTCkVHgLHoiZTEzFEwDt2EKX",
  "key11": "3TAHcFqNe9d2iB7jaCFEb9TujCK1wHxFYB1AVHdnzeddNavnTcEQ7dud5esTSRTH4thMYfPuwRkr3rLzfaQjfKAz",
  "key12": "3aDykNXXhPcxg4kuqUfXmozjcC8DdX231oapcQNjrphXiZNeHfgHznagpDhsNy6mgsn3wS232BukEnCp5RdMEkoN",
  "key13": "aS7uJFVrpgopxc7LCzPSEoQKVksD9uQWjAcpLSuvxKSH5exDiqbok536kFcnMJVpdkatQs84GZapsiXrj24nDSi",
  "key14": "RaV3nNeop5x8zBrTY6UdDxrsPvZWt6X5G1ZPV6GQ4QMCoPShDnm1tRP9dgWtNFZ72VLXaPYXL4UDWMFdki5zjPm",
  "key15": "5MEMxieZBejk7fXiRhDHyM5XBjbc78VUQrrUAJdpVwwxF7jcJRWC1BG79jFRmKtsZdMNJuQCGDczWP26L1pYzoAN",
  "key16": "25TQxyGF6DiuTwb5qbcQsyb7qSt3K79rEBJ2geE8akBVxewi4BUbbmkhpv9TafHDVSn61AhpGJhCTsLppVhBDmcg",
  "key17": "5a4EycaLT974rcdr1UGQM4kWmFWxgcxAR4jhAYt6pnM4taJffPTPotwRoVc75sff9f9oyYYfcUU4thuMs37m4A95",
  "key18": "3izAaxvguvXG85JRaNf1EQiCeQkkCi1GLcZpmuC5vvh4s2EcCLFWN15J1aQ8X512XiYSCp6r6ThxMyxc57fjceHw",
  "key19": "kyWXj8besWVQRcAtFCof1Sk1EQ2i6ZhRmxHQSAbtqe6FBrhz27ZYQxXu7GMPNRrYpXDW2yVhHgYixzQmM9z2SXi",
  "key20": "5zZL8k2BMKtUCMWoW1u6H3CYJ4gkATRRfE2qBfFYt7F2cx9fGG7F71DHyJJzpHndhk9e9eqX1E4RKcf6sYgba6qN",
  "key21": "2w4WemQyERyhm2yzVLK8Z8nWECELkavFX6BTiibFjk5R5babvwaUq1qwHonauFphbikiNGfxPXVoMwpkw3wmhfi2",
  "key22": "8CtZBM4qssEkvq5mXiPfb6oxAptzBNZahDr56MfVWUQE7HcCJeVv8buXJP8z3M3stQ9ni8ZjKAjpPSS6YwXTjg1",
  "key23": "4o9gxKMx94bi5LcqAzehpEGNXVyE3aMwPZWWR1RE1K42kWimFGTjcCKLZwjdFrPV4EvGAbgyAz38sEe8pcj9tiB9",
  "key24": "5cGcoJUMdLCN551S2sGFS1VSRt4VMUZtyRgy8mTowynsqDJGcxeq21y8xV2sPx1vLPGktAprxUnrhKLSTHayWDqh",
  "key25": "3mSGNFawqRN5G7Jkbx78So8b6DtyVytX5RpT9YyhXbwjVHcjVHkYwYoNwB6x99rT8FcUpZM3cEG145StJhhzRE68",
  "key26": "2tmSr7oSHdcKeeLRzvShh4oVTn444wr8ENX33QJwe4VE1cWiNEH1pHoPUPkqrRgCEeBTF6wn4WUHzim1nvJVYhH4",
  "key27": "4Ld9MNqSMzmmVYzkDFSrt1B4VP1EFWJ6Higsj8UY675kMH9rw5tmWA3WEWiRhMSfvJ6gbmqZ9R9HJvudfgjDWoKk",
  "key28": "4YmtapaXudmy7Wb1V7fSw8T4NmrXSLWZFo57vFPNMxkWh1vKjgnovXztZAWV97W2if7n1UgbdJYUNKTP3Ko5ts3y",
  "key29": "5yQvN6etgtEqaHc5P1WgdBQ5xQJehKYJDQRdtkfNctdkibeJG6BX3xJw3HweJbTUonE9udxUiJM5Rh1w13wZzMvp"
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
