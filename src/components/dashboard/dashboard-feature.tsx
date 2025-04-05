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
    "B3QiVbYbbMT9rWxDYippLowqXdCe28v7jc78rUtat2pqpbG7VwWYSkkdjzLKf47M5PN3mRG3TQb7oW7ZxRPoomh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vUkLE3CzwXWsmWdC1kGUvsMkRyExPBh4CHAMMQFeZepBCibjgxPwBpYTTeFqtkraAda79ZxfDSTHyQ6U2R5whFM",
  "key1": "BaFeYBbbyiUpQpHUnfSCP3jCGbvDXxhnw3yRhECiiSohjiutQ1QVW5rjmMDDoc5Sd8xoTAUgrbdrEL9AfEFZMnz",
  "key2": "5A2Cx1oMCyhpasztiS9uLYWCFCfaxx22BC3pvGjNwrFeDN7csrAFeWkkUFNZKUZ4onHkC1E1ue6x41zY4tdjsxdc",
  "key3": "QpNGKCVnyd9KbERjbzuDhGS6Uno8Vf9CBjSCEUvTRQS9jyj4RZXxbgNAw84drkvfkvT4UFVq4NGAiWq1frGGnVb",
  "key4": "4Htcsra8CBrWZA5E7Lw5WcdPXqf4sZeP1T11xA6oLZjFM4QCkNCKJgrQfXRwTWU4qCw76RJppdGrYNorpZo223Aj",
  "key5": "5L77BsLM2cbzPEnMNA8BmKj5jVTuSxsxvNgMvJ2kqYWBxQfut37UtdB4j2159f7yZ8MUordio6Chn2coj919KifZ",
  "key6": "5upBdgvW4JPbqrp91YaUq3cN4ATK5EBd6g8Kc6rE2SCodPsZopEKS518ziSu8haJc1zz7zBmEr7fQCpXiH5vNSQk",
  "key7": "2mKyAk9dtxR3ogqQUdyw9PKY9QpY76fBLA9zmBAdjkVR8cpS4ormp5hN1QFctg9kJQNhDWYFxpTWHm9RKNMdzPBv",
  "key8": "7ii1i3EFs16oRohTBvadGiWFrt9nnNLvqTnKHwbdcb4hh79kxX43xJbMvmxzKa7Ngp6suiwgTjbjmB6AzqyF8hy",
  "key9": "5PFZDfGtS5Dx9S2T5RM3aszpeNfJFY9Ehy53F54YujPsXPKwbCZPkqriv63day2Lmq8pFszewJrP2sCi7VWM6nx2",
  "key10": "5SrPaiJMnzbkV2mYuhpQwYYFPeERBGNvy4VpRUWmh4BW5GHLSFQ9e7VYCRMsyP18h7SaWgoLZbpaGWd5C8do8SJU",
  "key11": "3A7tYLAQbshtPUjcHwiohtJLXAVQeWtWYTbyQeFLUnpYbUF7tzbjQRVybUdNjVtfhMwn8eLDTGepNq4rYoys7ztj",
  "key12": "22mPi7m2GQ71erDAHy58GAQqRngYkH7J9Yzw2F7DvXya8WB5LL1pEiMmDpRtjTbDdwqDuFxp94opaXL45qjYSXQr",
  "key13": "38TSmDaNEMZEyexYET3UESMDHsWt1NqECguRwbL9o61nakfjYkeVvEXjM7CXjmkP4qYruMALfvsfMHh8dqSkuaN4",
  "key14": "5wK3KJCC1dAPcRouepxABu6RAVWouHNVFoe9Bm1nJuUooeTtMrGuinxs79GpTansJNEt9q5x4wagQAo8mo7Sdd4A",
  "key15": "2siE74w8PeX1vWMW48gpsJtMuvbrqNXda4LGVsSwNmk26X4VXX1Fby5Z6gzsEiwmnGtXiWQ9pESfzkdWPaBR2CNN",
  "key16": "3MUfRbDwn1HU3S5eue3RwGbmoqSA6tRisyuv79KFsWNNZUy8su4R21REDEP4ZCwSV8Nqb5N2uQshfBavHcZWFut4",
  "key17": "46osRDo8TvxktcwT6HytSh3BGx8eD3vkPCQyyVTCYHSWbceu7crt2jkpHqamjBYYUdWGGwqNNVhV86z5yEKd1gAb",
  "key18": "4QRaVBBn5BshvkJHzqKDNRJbpTT8cSQtaQLRH3PWPWBWRNvM9Ywt5oEKw9q6ybtcTn9r9UPH1L3ydiYzsbbo6xAZ",
  "key19": "4nJtUSJEJvSBfycHZ8uJHBu8oc8rKWLVSVV7MmDWhedCFzQWRQnkGd5TfK6KLeyrUj1iNzD7QYzVVExqRjN8DeSU",
  "key20": "3fpFxd2ckKktkMueX58vxtQv8Z3LUt9Cguft8FcbCxi4MuaGARv6Xx2zpYHSDztuaM6Hs6rbnLSRtRPn3sgUxSZ8",
  "key21": "5uucjjS5eFTNzaLaZ6PNNuC53hPrZJGC9FHYHpaJE4piEh98YMnhQx8CTupjpswsdJ2p3K1XAntFiWZzLbv4VJvA",
  "key22": "33CCWiLN9debW1HYkcYMNACR4RtcuX4W6u4v7R8Kz5HykpDY2EWr2ramf6hXNhpKirjrB7JaKYmEj2ATb61TeLGs",
  "key23": "5oPAtBrDXr4hN38hCHDrAahKtodEhkzM14W6qMR94VpsVF3SrTM1ZoQT8kR19QpvM6ezbZ4wvKNVGaNy8doLo7ca",
  "key24": "phHAeTyvFazZNWCkw6qjsNYNNZvGMPdFc2Eysb9uVEYyDqYZaQH3HuTHcr5DSgG5xCQqCP9LSAUjsyyTZp7xaaX",
  "key25": "74YGYS9Lhq4N74vhMu9FmMuVrmH1XPr6o3YD3GLPCEvpjj6BKMG5GkDDSjSjuUnkH9U9nHBkmxLCQhScdwvx47A",
  "key26": "2T79CRkRLry74taQNYeuFpHoxpkTguw6N7uvoAHfj67aSCTaMdNvZJNrw6LRcZW68tPLdnjZtmqZSCKzSyBByt1B",
  "key27": "3r429sTXKPWpop2KhGwqr2A7ujrnug31Y4pTTyrNKbfAzUz1CVLzWLbXxwXX5wBuhN6vF2fCQkP49tPHHyn4Z1PH",
  "key28": "SpApZr78sABkTEQAFYzyzzG2gz97xsJhyVs7T6jQowqtc5LjbemteYdmFadfXNB2kk4DkJSUhYMjXZbxAYcgGdq",
  "key29": "457NRmsmBbmUPrewZUNr9Tk4PotiVzYsqmgcDiVceFkZvkMSzQqEuuviRTtnbji3HPE5qwWaLmoN7szTwpetaH5H",
  "key30": "C3sgvopdCV3gnLAQqnfdrSuaw9TEKjytEhDrv76siGNmmnTXWE225buN6Qdpji2RyRTC9nxvco3tQFsKvbdK3wS",
  "key31": "67M2s3CUQC8rmtFaRh1aF5gm4jAFwRUMyYGFjni5NN8d7eua8Vy4dcRFJPLMLorL5DqAq6m2g3T8ShesezEZf6kE",
  "key32": "2s9bVSwAex4eWoTuGsdfPVHCVExo3TzkBLzNrXRV961CXpNFTMo5GdVWksiTz54pFuRw26kTjoZ8k7k9XcJm7hKX",
  "key33": "2rqHHBe8NBHXLBbWQaEbEQ5QYQNiR4GrxVHhqgbPpT3tgmKM7oYyuqpaSbpivz38mFj59YHxuNnj1jYtYGwvnox5",
  "key34": "4kjT7zrP4ME8SYWjrQoy8j8GmcKTip9ACxqcNDbJRoz5eMiTHKzcG7WcUUXQwiyPaWD5KvoqZfgHzQ2hLuAiGtu"
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
