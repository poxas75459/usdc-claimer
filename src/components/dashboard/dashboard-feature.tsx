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
    "2wrbar5KeSXx7HBLS4TeCFALs9YNuSB6d7y2vkbVdK5dA4KwUMHSdDFHm799jnus7cEQBh7BpNPRAmjTsyT3Dukc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bPqAz9g1LHmAZikN9SARLtG71n2eS63gVqrDeFWna1AiZ1mGRvscDPEYuZCXmnwfxWhyUrQjzDkMyFSfYnA9VRS",
  "key1": "Dch529U1kVrtCczFXAwjMnHp9zeJe3GyWyQabrvaCtYiV8aZCQ82xiNvmGGrFdLzusAj172nNPicUSBiBtfvkCs",
  "key2": "5ZPC17CrX4zxgjn36iebJnmB5GadmKny3xinyMD9TMFXF14McWTv6VJkwv11xj3yxjhaxs8dGCEAnxmCVacRbGPF",
  "key3": "51gsEVQ3sTdamqiGWLdrjPjMLpfmgB8AsbL7DLsg7SQLs6XKaoP83T7c1WUDVn9YMheDdsrLNxDyDjeRrxGQAGVk",
  "key4": "ZveU96LkyVcqq4yhTcchEJ872GKUoUAmahHjwYRTW5MRovyZJrwgQ74JZCn7FBMaQCYjhhmzwVMv84wzFqNBeNf",
  "key5": "3xZQdT2N1p19hWwBFrxjXZWcuy4LKU6ogbtM32p7gMxLLXFoA31RuhBzYAJQgZutrwQxpvbF1UnsNpBGsBBg92w3",
  "key6": "5XXhNww5cPhcVoX5EYzBv1pBEQBfgZCcahCRFhHXiySuEppsFxfB32vhJL5HWuhVa1j2QL4E1EkRavYMzYyTaw46",
  "key7": "43CJnwFRQqiaBVhpGS1j1EBL1fN7JDScAURXAaujiwzTBx3KzdxgiJtQSPVbkZfHZh1jgTgqdcv7C4AdWZCCGaMQ",
  "key8": "DuAQ59SFPBmwYX7obfs3u5vJM5rnyYXcAgg3qbMXPMYmRnBAseR9NmjjCaL3qWJeUtFKWKypsRHsSPiRea4qC4R",
  "key9": "2gDSM8xxmwan7ywcgdfaoBc2D75ffHdmxd7heZTz1swJjJSV5G3wnVkRRNGDSA3JRyxwMEjS742K1pLfFaSkpYTi",
  "key10": "fd1BTvo8wuq3HGvvc9564SZMgGRyJ1gHcucNNVLzr3c6TPVnqrHqdGZidaEaYz1qRc5BH1Z9iTc4K2mxLRCtoVm",
  "key11": "4WK9bci2sFmyRRThT1y6iP5FJyJbn119AqzSnoDzKxaqS3MQ5VCCPU4QuaZiEeuLfMzJ8wuFAC1ua7cJWG1iMpXC",
  "key12": "23THpnxmP28usCTHBUxV3askr6gS4XsnUkoQ6ZVqvxspoa1Kaaf9EN8NjKwv61pbShCj3nbNa9A8fooDi9Sc7YJN",
  "key13": "5gj2b1H6256gbJfvrcYthseQGNR32ckHXq9j4BdWZ6gSfMYnSAhq5oKQysq3Q2YdnvrBEDGJ1J1NBMGetLF83LoP",
  "key14": "4HVLArJg4m9HpE4LDttapH8rUUQ7uEGKMFGS2oJ97Yn73oNoNjiu6iA6WfD6kqtnMBjHsnFMvDUCRkysdkgDsfKm",
  "key15": "49wskwnLJjNgHAHJMv8S7Y1MXwYKSkXip5bALPtddSrqUykQUAkLMXWEqBBuV4vUbNLuNenDhBpSDA9ZFXF3idRL",
  "key16": "2qAMyFqctdV4SrpaY6ck164213AbjatqKprHQozQstcHdYXM5qmzQJvMyH9REg9wnGwhjh6vJJKP4cU4SAzb5yVn",
  "key17": "5qZkpkjM9XgVfHwMFZq2oW1HWedcWtWV7wvH4Dc7GUq82RCpKnbxSkaqHXfrnH5mxdw3WpmmxNZHwrKqdN5k4SeH",
  "key18": "fHgdrDkfLsZQccyjPSbthrUBxYb3qrpiKhAuesqJs8hoaLh86LD9fV1ga1n22WwmNQ1dQZayPFAwP7fUTWCHNGG",
  "key19": "5xFBsv6mnYS3iWK1nWagtPhH9Ho9pQkrRNqVzSjK2snT4TXtv5jgBbBBM832HSoFAzGVnTKGummpnsD56a3yaSZm",
  "key20": "3JkjJhfqY7uLsBmaaqdJTZ737udsMUrpTQQL97g2L6paTyaQaDATXBycYG7RksbBGyoq8M7Jz31wndQC17KpYRgB",
  "key21": "62uto8d7B9XCNnVKE9moN3nPHjZyU7MieiT5ktTxmQpcUqAbHf4Rz6e8sB4z936GHBdBWSi7qAfb7eqB35ATfMtF",
  "key22": "2z8wTB4c5jZCSmgxTpUzmQBfofZoP3kqB25WdDL8mmziqRznSz2bkbjHivvm3ikmntRpbs2dPM7u2Qn4RHr1Mwe9",
  "key23": "2B7jZxsDx4SXt9Cocom1n52LiUrVSmQ5CaNbA4rQwjdW8RPcGHsAaXXxC44wShKaAfknfreB8BW5xpgdpPNTez5s",
  "key24": "3zGCwkMQ6N5ZrEcyZyZimeqsS5qaaJS3LtaTxki5cjJpfzWjY4exUQ9hsD6PX2NKjWkr2vVomWYkaDWKEwjivADE",
  "key25": "1BACAgWS5jkwm3EExFPZ6jQ7c6enryo7gDoYQ4Gn72Ka6ZRZMwJ8SoTyN7MTgZYMTSwZ4Jr54w43jV8GZRpTM8Z",
  "key26": "62cGAC7G6BMHcXZdqbGVYMarje6yTbMUNQPdSQiMbN6f8aoMh77hMRwde6tWE97SyMvvAuKmc6nY2diG1a6RrCU3",
  "key27": "4wRfJ44njxQs5J9RrSeN7SrckvZHQsNbik8QTijy2QMMRiMw6aFprRVgSPejSeWcSJtD8jNM8eVRRvYapexgDzaX"
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
