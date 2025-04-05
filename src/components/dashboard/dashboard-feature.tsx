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
    "3VEqWppMZS8CKsGJpcV1dZmVcDEf6y4Av1HFX2dCE6RNbmf6En3V594nP7gtkCfyPuJasSEzKGc24zgwxPyvMDT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rs5QFuhsJW6JSt8TAa14EJvssvAaNayVGuJLS1EB4rfuDviALG9qUm5phu7rmVqi3CoZkJTwp3jo57cci7p7FP4",
  "key1": "3MSv7fqBMoYh52gW69CgEoTu1JZ22XuHJAohxszAuLoBqBuoGffKpPr7Ara31j5EM2ijMYWJEJSCyEEEyekCPjv3",
  "key2": "5ii4cKJ4UiDrtUwYYBbTBePQeKWAyhUpZ28sU86NdtTNUU3ptrS8woH835J7p48x4jqHhCR6B1pmsgxwEoyfwFuH",
  "key3": "4otE8kLf66xQzE2UqVgCGGh3uAdbjPdxwhUqMoH7GMpwaHNuRWYr9pBen6jFRxMbakYPTxDDoJCKRkX7B5cXt3j2",
  "key4": "2R8xAdYJ1FpabjcHjwC4t12sNGoPrH6TcsBDt6nhf3T8AR1nSGjoFSjchYhsB6xf3sF1PM3oGuM8eBAKymyEtbzx",
  "key5": "2Q6H5E6X2wvqVj4RUwMG7bZoNPYzvxMJRXQr6TXmMZU3P2tCrUNrJJQqUZPogPDeRh7f1GjutmdtTwLrFJoA7Fnp",
  "key6": "3WZ2wJmL6syev9bhy7kArQCcmYBYni7Jz6xsckEcLepvA9ZFeEBf6xfX6htaKr2GhpMeGkd3nd99thDc9a2uyTvi",
  "key7": "efE7sQRnNPFKgDEJNKbmeTXjpcJboxNBU9wjtCnoAQDK9F5EgynQtEtfB8k9RHTd18yUMAf4BdjAywywTu6yLUJ",
  "key8": "5VGLqzooZULB6BvjQQnSV8sjqnYNU94GqizxUqrKfzUaiCHSDveCsrTYgDoTjGQz9kCR3DcfqsFvssBScH1U9CVy",
  "key9": "2aCjy7XfmKTMbCn46sbkQXnybNGPfteEzSazjzyxLxi2AacyfuDxLDevVgWxmzbPp4vN45R8akJTShg631P7Reem",
  "key10": "4zRsGo6dgJpd2A5jGJtXiz228oQ63a2J2VLNXLwutfAYnMu58tHa5j71xp7qVQiei9ZE7Gd3nLY6rhQUKSaUPps8",
  "key11": "4AXSwzt58XebiAmK87Rk5NhAFghGrqF7DKyHNEMx9FVjhxiZSq6bdDE4D3RXNFASQCcZhz65ceTMcX71ejvzhpMV",
  "key12": "4s4RmfPBY7nrFxiGNHw6SNvmebQFLB4MMm94ZECST295FemYEY1ZatZVVo5Se4kevZSdh5jXA5m9p8F83nbV1fQR",
  "key13": "kpRoARuryLet4Agq2Hp2kqXGtkBv9qyodQ2gCFsPXTdLS1hLhV938iCwC41STjb8Wv315MQt74PRL2rUWzXYJRd",
  "key14": "4LKhu15zUpKXe6yRQ112Pf3VjPn149y9nGQixXE7rVUDQePzTaotW1JncvfoRptbCtBdzjyXjvk1NAiK22J88XfT",
  "key15": "5on1tbgDm14oyTKcoUeZdWzgb8Fup93kEEMK6pdNXQRiT5u2DPf3N2tPiu7nhJvYoupQraxioRedyL3CUiRE63Bm",
  "key16": "3sSufPUocrPNYBLGTmbRBaf5q4pgHjgcdie1kggxsgLDTy52Vw34DXCHTJxZNWEU3aLf2WajA2diNi1cU5zcoAwz",
  "key17": "fHUdibSC7MEQ2ReYUUCZ2XTXNdRFazsZXrdtG2Lv6eScQNsvFSGhGVg2XzSeQ4dkiECrVBBWEUZg1qVGzS8NeJ8",
  "key18": "hhYMCD1AA7H9deXzTPMB2TxaW5qJXYN3LHY8Tv7m9LMqkxU8SksrJ8eZtyybZL2GUnJsNtjJ1syKifUpiLkKoD7",
  "key19": "5qFTjy8djaK2xhBtp51YpDXatCX8bQMZ34M4SYNvMDDxrbGJc8grYx57tctoo6CVYmax2wh39ArHtWp3LjTQFFS6",
  "key20": "3KQUZqPM2MDwUaZuemGDUy3JAf6w4WMFjXxcmvfbdgtUyMymYJhj3JhKFbGwxU8Mdkxr5hxpc73S1Yxys1jgPHiR",
  "key21": "3Php2gsrNUkXh4iopBkYnn5pwHRnrVUubWFSPotHbCweGddQzg5bLwZEBXBhnuyGhba45haqg3idVuyYKbwJCN9H",
  "key22": "3XdFSK9f8xMTcjWgPHMznStimXBiMsB4evfSa9RPxviUYuH3FreUUMdoKWwgLw5sm95GS5gQKtwdgxNcEfsyLFuB",
  "key23": "4NoaXwH6SmYtYDsEAH3tYVZ55PrztCp5qytxwiS5TGQ2TmxTWysXhjn6Xa3hJC2UNSAGe4a4zZJDiMVQhbdZi5Ge",
  "key24": "4gefJMWi3MGBm4Zcs18s3TTLoaHxE8Xpy7rykW28QFNwk1k7UAJTRGWaHkHJSqbzeU3aFNQSW2x9Guz2EEzJbjFR",
  "key25": "2PcKi2z5wPHxTt1C2tzV8MBSQD3bVp7cyA5Vb5ePGiGdJb9fbCt6nKHW92dx5R8hMcLLS8C3nN4w3D7d6DfSFnBi"
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
