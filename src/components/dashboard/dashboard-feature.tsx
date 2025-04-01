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
    "2p5Wg6Cfyu89aPr7WRkuZctTw8gHLmHJSqE4CgiFTZmREPDVZ9gmF2eYyXBk5DJazijdhE9b1XBiFKMex6ZJm5FB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VxYEqM3AUiwzYt5GMedZgtaU6YwSStaP5cx7K8eARiEEdFWC34txF8FLJpcCp6oH3Gg2y3CQy8k5DKqKS7aTgSL",
  "key1": "5y7dMWffoXf7tdFQDv9kDVsHjkjqwVsC3Qv8UBmL6EVYUVuFdxZ91But3KiEYNtWtLJzeD52WN7rKVkav7YofzSL",
  "key2": "3m8XguQTMiiGz2Soiw7MJZgaqVRUMck3DuhHNNRNjpCEx65maFrfNBwa4HayBtNTDXpvesSWhQ24wGwgS5iWgX7y",
  "key3": "nvkMhToDL4xNndd2Qvfxr5TosSnUyeUUHJAwdBGGa1swNdNH7mEoaiKq4W8YUsoDtH5hHZxTygRduHiXoNBNmMe",
  "key4": "5Gn3sinvAP5nKV9TxDuSuoFmMzdxJQ24kPGeZ895Yeo9HmAEJT3sQSxhi3QekSYtRzEHqi9xQhS7Ka8pwE1wVVrS",
  "key5": "1B1btCUbp5PgFnzCNuuPL4fxV4hS3corHt1DJUxz7RE5K4e87WVb9m3ECSrZa3SapKLRev53gE9EUL8ZM4JrWPm",
  "key6": "4Fs6UeLe1hzcxp3iwexa9jZvDkN1LrHFaAZNqjuLf9ENi2yGZBk4TKLMxGztLntj6Y2SGKtEUx1Cji3QAvdatFHw",
  "key7": "53MGU2Qfv7UPbg45ZftRPojY6dL7uPkZsanHoWjiTaAMTBXFQCn3tKbaRs8CvENUSSaY2MXRCmKEZdEX1pnbdcra",
  "key8": "4cAihHCfsN59mHusSiaUS4DoAzCruzrQzPJS9SfpPXNRHyFAi9X3R8EJ7iSJ1noxQXrgyR4wbzxdN4Z7NSWm7ws5",
  "key9": "FyC5VCBjGb5LRLbrEUeTQr8sYAA3B8pK833g3NhNxHdLDsuWioCR3cLTEw2jvNRQEPfZ5NE5VYTQYZuwegiHypD",
  "key10": "2defaMREeM27CxdfxFjgHHNQgERwAnimkvvrm1kHb4GmuhrTkv3w8cAgmQqojvyXkeKgDam543MMierG8VjXcNrw",
  "key11": "66pXHTnEGGA9Aejbhb6MqSpxaLYWX1NyuSnGFujMwSaqXfarkrDpod3woB5seA6McXS2WyhZsxf8VdZG6psmtV9g",
  "key12": "65Be7tvbTDYqMbkCCYnp8MTJRXY6MQCgV5wwhTjDqzy4hZKXRfSmAbtPaRMAxut7pzX2Mwm5MNNrt2zj378WWHn8",
  "key13": "3gAKCPMdDiyeDAxtHQvwhh2AdBPkN4b12P8kpR3TVeot8qp7cnT5xv8fGwj6J4d3eLmR1yVPirdkjoeiTLBttrSd",
  "key14": "2tAJ2RgjBC85VmvCzyYNiGNPfSdR7fSjUiEoA4gsYSnGTMmdnZD2zZyfAWFQwLjtB5aA1BDzSFrL4TWqE3EMi8Tp",
  "key15": "62oZKiCvet8MWaQsz2RUgmVss4iE9pKkTqSbUEHKeEwtzWfXX2CAp1aYdphykpUApMAwSKuWNq3swaTM4h4A29NS",
  "key16": "5CRby2yHNsFfofTH6uDG253HByyztRehKA7YUXfCSomTP31kVrHEds2M1AEgJe3uFHzpbrAdVsCDKLGdCYEJurfy",
  "key17": "3G6r6JBvbxDYQsW34VgLuaSYzZt74AKhcJeLL8ByG23rCUJ5nuQYijAs2WMGcwm9QqZcQeKPTGpcgjAxPnRM3Dad",
  "key18": "2zmZ6XPqszxGAaKqxyF49Q68q5jmZVqaKWS3Tk1ohJDQvTNRcwMzpteajWE1yLwEvxicVtEVWRLG3R3819mdyMuC",
  "key19": "3334PWjcsxJ9ZGXcMd2gxTnAmGjd3xpXLGW54uGEULNYRCh5jHfdeYXdVbok9fF517qCPNVPQY8rV3JuQwHEm6od",
  "key20": "3edi1XzvgeumCujWdfknuyn38jMjbhzLu5sXaAgVwMQtLqDAFzuUJitE4haTJsQVKhd52bMU1dEnDs98MGGH6d97",
  "key21": "dXP6n6kM26Putq94PkEHvKneYdRkmcVuDLZGxxD4VQi21FAdMJoSHfyZiSMUUuHu8Pr857YxDovraFrSHyTX42Z",
  "key22": "66Vh9DHaixvLZ8soo7HnKYbsHte7PtoWhtaeeFn7ERKme6Zomx36TNGi4VmbYLevSasNNQyiCZUVXiphyVPFk3Bb",
  "key23": "2G3S5bDRrUDU8WVoR8N27P1fyZAQoK8gRwmhoqiNWXvwkehang6kfzD5iZ5m8vPdTP3RNNc1xdxDaK5paKgaDKpS",
  "key24": "ub7pNUg6pU582j9EjniEAcAehfjCRTN8GhLUmF9fUZEPr8vin6KBGfPrrkBZdssDPXvGGUnzmXzNLWFwAxemRAZ",
  "key25": "5w67avfEqyEaMcSxAd2Usr2NkPjpmxgdHwErahWAwCpsTVAkJzKAz8ugn7M2f8ai6x1wgxH6bdVxmna5HERrgBzM",
  "key26": "35qkAh3hphJ9ukZizZNxoJ1JZheFYm5QxBDrb9cJo8SW8qeetjKRMLaBAsNt8BBwSuTf1UwL7o7cwFHQ8uWqECct"
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
