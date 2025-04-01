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
    "4oDogzavV5tMA6sfoHqwuzeHMMoLpmjM16kDXyKDQ63HMcjih7uLAmeMye6qzvCkXQsP5K5jvSvioDeqFHUASRZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SLd2RMVLKSutXXvDAxSWY6Y9cGHEJu2TJ9u8KyqGqt18rtNAqrKn5GEurBuHraaTTeCFgba2PsnZJ6iJcT4oA8Y",
  "key1": "2eU2c7Lykf4YkvwxCRgy1SVc6sWYgttpCksJjyhLnzYYp75G3unJX9tCoq4y2HUDZLHaDmNB9freFY88tgztWAKE",
  "key2": "42mUCePZ8ujWsCzgQXjwAUiU9jvTUT3C6agpsuoZjXzYiMphP3M4ZvUn4LZ4rVttMPQuQoDdBdXichBcRMUPH3KW",
  "key3": "3ih6Rx4vhZwh9vJUNvSFZoLf3ceVG4aLu54iEbds4DMFf4NH25YwhnybfWzrszBbroTG3sKotQdfLDxSeaGfTfdi",
  "key4": "qkzRLY7F8AKrZY4meYxsy9gTgZDiZ46t6A6rmvD2ogVFi948kZf3P3iqxwFo4sfdM7KKUKu6HY2iWHuFc7Nsq9c",
  "key5": "62DyxBQStoMhVXMonc6e3KbFBULUVXvCiTY9icoRxj15kWijyeb2HUNVDisoZ8GsT7xXFfESKnMfyYgdspJjx62o",
  "key6": "5qVFpMXhnKfm6FrEcdVykh4s4wtXNkqNzQSRz1dhvWM4esayaMKcD4nifU4BGvaWtE7ryxtEsKbbuvbQDAavNY9v",
  "key7": "3QpNcHAKDU6jRhmjz5MpJxCHJoRJmtzzEEGQEfJeZF9FG42kbjEvtueUHnuwSisr5iBX6tivRUB3gGvEQEwA1c2m",
  "key8": "2h33kmjbZLeePWZfxTjmyRFook3AbCTds6EkqqowNUF89LMCfT6HgjwDsEf9soGRFMr3fLMCcyUaVACGGyR6UEgn",
  "key9": "3qhiSBch83Rpxa3qerYGFZBkWbo4Q4ddQuBE7DfipF69dmf4XMFVkEJbV9QwxZCsXxjgQoNAr1YxFQPCTZwogMpy",
  "key10": "2QTrGKaXnrxGTquSeWUvG9v645C73WEQrX6km98Yeqx1Eeg2Q44bRipJhbL56n8oQH9vRvR18ruaaZ5k7hug95zC",
  "key11": "4c6TWaeQngTLWdKQk3Ne13TDwPv2EGGBfkUvVNWR67Pcbc4wvqVrKaHkrRZ174auyFXL1s8JF4isqKPaquGSjvL7",
  "key12": "5nnWsczuBBXmhWci6ixy9WEHKcFe5RAwXC9pf7CuYkw1KSLcvwsuLXSYekt3kr8LpQCXDcyy3THLVW9GALXSxNAA",
  "key13": "4ngMU6pkSuddXR26C2gdb1Bdofp7h5guLwvK1WbQ821DWgGMaVtaSphtCKeDKKZRuK9uqMdchWSyEShWJp3vMLEe",
  "key14": "4SMX2UfNun3E3P1VdVu7m8ZtuG8FZMURc8cPcGbozfJJnrR37XBkZh91c9CS1eaG5EkcnqTzmpH5bCcvfEoVN6Ts",
  "key15": "5yUKrV2e4TjW6exqKSy31d3nmhvsyyqutdpfXvq5fHRYP7A2gYch6b5PTUWBGR1ZqUjQ3YXzKvJ17F4kofhzH4Ut",
  "key16": "3dEnbyvq2NBXdxPWTULsJSiHqv4GMmqexpgvXahVHFMUuxwmeKfKnSYSMWdY9mfHBXhaEf2VV2yYpUf9xeXMPM4M",
  "key17": "3oQjtXLFCaxuvYnyGYQ4nqKnLDX2CyeqtBeFKz1uPYvfNVGEPN7VQFKtTkGPdL5a6oXSV63t7xNdrq2CDqNesAmd",
  "key18": "5NahxNMMc7b3Ma8qvXQXfcsEtqB5a2xpGiXmWADpmVCEzZAEyz75NPpLg6bZ7EWvoPJM3Twr4hEbgPMMJvtCsFpy",
  "key19": "22VUDDP6A1CWrmdBbhan12HMyBZEkHiF82gs1tKUyJ4AFCSRLafyChQjjwUqaAWmQ9q5Y2WEYLES5bYS17pjx6by",
  "key20": "5pUcmmT7cbHuMdQ5WYyx7PHsKY5Hr8jNM15o1d9tzdbNB3T3Y8HiLp5AgPeP2VcGayzxihnbU5miBNYqQqwsQvNF",
  "key21": "5sZ4H8unTx8udqTo1SWNTgHSRZD7u6dQRe8tAh9GPcF3BLWeXjApEEBkbxzc6UwUMr23mpkS3eExJGcVRc4Lc7YA",
  "key22": "5ZA1cQqWw27c3LT94TTtVDx3Y45fC2nb521MyUN3uRmWKFCGEWscZ92d5Pz1KPVWwYchCpeGM8LyhJaSYco8fzFo",
  "key23": "vhvPi6RqVBdxNw47enxLQns8QTarnjyfZBwuFAQ55LTANijMUpHcTWs6Qoah3Xs2fzSV1RApRg6tWwu96hQyxP5",
  "key24": "23qMvWBYd1uCp9GGHYJFf4yVuJXa6i9cp6XFUQNoAgJqtY36ipjMmc4YiMqzETiaenhiHTRThmMom3p6vtroyH7g",
  "key25": "5KspTt3YHRj8aFgUaWDrk1Hgn7X68kngUyG3a6YCZ6PrXfXPizGCh6ApVy7n4aLAVfiPqEhkm3LtHEGUSgiXxKyd",
  "key26": "3Ng7bVVNVXh3VSdR4Uie8o1Qc6RC84kU5Aqkm5iH233Rx4ugQQJgr7EeT2WGvdQzxk2UuhiEjp3ffDpAC2g49DRU",
  "key27": "5gSgke1wBYTj6qu8K3ni352WSFiGx6UcRQxMYqfDR2AMj87YeDb9qkTfRUju7RKV215nAnzEFpCJqF2AkUcxSrif",
  "key28": "3Td8ZSDwsrtuAo5McDzje1igVcifYaCzy5o7jUX3VWGs5H9cQ9PNBU22cMCfFDUvVhHsMdoRSZvREkaSj7TKsBhi"
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
