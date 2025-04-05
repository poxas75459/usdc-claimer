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
    "5uMvxi2yNPDTSxdJ9soQFWjuNTxndEraufmzkVDbqnJPkZWB8HvGfWiXDuqVaxKWoGa6RomAZqviW6Xg5X5HQ57s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FmuSPF1Zg9Kwn5QifBjrkX4dFBSRPNCmZLeKrGPmyJA9EBxTwBNQKbANhPazW9hiz4mdwRSvcu6FDdCAbc2xRcj",
  "key1": "48pYJuoHW8VhQWZhERC2YkFMzKbf4ESCBmLJgVdSA9hGTzZw2XYvJUQQZdqPxxaHqoowLEhEoVsYSGd9ehoMd6ub",
  "key2": "fmJAuSana41z9QbrexX8BhYNvr1urRvmvz8DbVXsCWeyqs2fTGUCbaVFBPi4XXDEubUU4AyKAiychUTiRsBydLe",
  "key3": "26V1n7SCDZE87vfJQ2GtFDrA8b5Q33zGzak3uMTzyQHba3uEf3ZhnAF6HyE1eiMpYwMsJt856i3EJzZQES2DR1bW",
  "key4": "5kJNpNYHdp3YXqhxxAtq1UkXZmPUxYgG6QenD8VrEoe3aTRDDnY2qezvcMQBjLE1Yf1LQCimRyDN6aZu6e9GouDv",
  "key5": "XfwbWU9YcWABy4HkQ9txZJyHP2c7UiRh4T4f9t3zvBNZXQQyu4yoGx59kjEbAztMbuFSPuumQMwsJevqcuPQ3Hh",
  "key6": "3A9o4fyuc4iwYRvaPYNyBx25sQuY6fs86xAcqgghaf6f2fGRhTnqA7YekRTWY68MtGr4fSseJjtXyWGBhPrmGpRL",
  "key7": "3L41hLMgwzJVrzXFM2G7kYnvZo9ZocvUk6pZEoofCFXCSqnwxiQU2SmFvQ7it7KUp2KjyDeQYLNtAnVUzye9VvcT",
  "key8": "4qnEGpi1PswHP9BAMV9ZX7EoaEw3LkTQtyekfQHw2P65itAKbLkw1tUTTwqm7SzM8JfJxnYnGoxfidRUFaVpdVZA",
  "key9": "4zzq5pifYMJghnRouYM3Y3zKL7h5yX9LXE4xp4LdL1TPRhngqPLf34vpW4L4QR6VcTem4ViHHNDrAYcxehSqvspc",
  "key10": "5Gn6eCtMM1Q8GTt4yUPAtJucP1cievmiMFaF34CZkDXAEEkfgKrwBUMHm3Pgtw3ALnP3uLVsY3VUV4Xq4RNutmiS",
  "key11": "bwvFJGXEYDn1vEDSaXg5sazUu68RGcSFjsy8uoXNLBrHhddWXRfCrKyHNyjfEuHfTx2YMfoW9V5KxLrJ6yscxTh",
  "key12": "3SWo2W1gY6HrntS3qRmvUyyT6tFN5R6CR4kp2W4uvDjMQv6aX2Y8GXgDRBHkDZoRCSM3TPVogcun8Ci3187Ubygz",
  "key13": "5akTYy8m9DRdg8SLFikyLjiQvuSspYmtvchZE5om3V75r1UFQofAHFaXrWrtymQcrkfMAskYFNMYTZgV3oXQHuYE",
  "key14": "38TSqcgabR438RcMANXdT58FotiTicxg6A4et5dHTVdr7srNBRfybgSYCV18cdwrBU6CG4nLtne8xsm4ntiSQfDm",
  "key15": "2ySxXM9bJWx89UcPNpoqs1i4mmFQrGiSPKQnxpegJDW3TcC15fAebpvuSKmYzAo1KUUcWroTJmbuLdyeAMNTw2cX",
  "key16": "3bZkuUpceexqRJZWxeJTXzDFK88AeShfkioEN1LK4XaBSpmwLCwXc3orwuCxeQaGPgHjMHKKaLYv3WN6T1MVMtWe",
  "key17": "eos5DBw6ioZR6VUtVA9qHpnqagZb4pWH2hnQrARa8CyLqNmvDS7YqNANZqR8PXnC1ibYoVBgrwmj9PYYEvk8JZH",
  "key18": "67pdQazizaMwrZyVY4rWuv1uqnp9SntKbPBUt5kSrGhZR6vSDJzXUMNj1S77EeTMLnV7tq59TTCP8hmUJyCnMGRr",
  "key19": "2SWdxQqbcsPprsHRBDacwDqFnxiy3aZDmKcHbLbhtH6Lctoezmpa88BHPxbnvCFZCG7CBoDUcij81MBDBaY3A3F3",
  "key20": "M5rpoLhzcZbSBGpiRuDdiTq9msTAnJUpGsAR9MNbX8z5s1DnJH33Eg7VHLt8EAUj2dHF8ac6M2cGn7NfqScLyoQ",
  "key21": "38JP31jLuuLnzNMwekvhMpfjKzSmRozVqXGAdZthHggTPp6Y5Mnr1BsUgtyKojdbMtJNvLL8f4oSRtC72GGPqU1G",
  "key22": "5DCH3cUham5Hu4qqRrmeWJnt4F6bxLVYnfxurWyqbLRG5EgFfKigvDYc6BcVuRrJ21EkWKuUy8d2Ykkxe6hUQDeZ",
  "key23": "3VuiBruP25hkGa5gT3SKMLUrEBjMzFdtaS1Jes1jagcv49UcMuTH9jdNSTTS41wNnECcwq1cy6tFjwpfNtYWTvcx",
  "key24": "5zunXXvyxRDAPwgfQLJP4V749b4Mg1c8CPCMKeGNwGPhrqAK3MpowuSdQKLtKfXvqxMh44GTXegvBjtyorSG1GRG",
  "key25": "5WdFxc9oCPSxWKmMRuSQAVDYocN35GX12AkUsUmf894J6AhBsB8iTeGSeGJ7rozJJCAKtnttT8EvbqcpvKjbJNjF",
  "key26": "3YRkoihfPN3PSs2Vvu5yvzCx1BrVkixmFd5p1rEEFFMASYLi51pacqAVAPBaigqDwZ11LZEthhwhKYsp42KwCdTh"
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
