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
    "44dGKyz2Zcy87Nh8m4QVUP58dmsXhJRg5v2seNf8qSq4WpnHS7R8M6ChgpVQfzvKL5HxdGXaRmGRNwQ4e1XhPcE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3evcxAFTnRRosrC9qJyijJXcYARiKSZFYSZ8SzmwZdow6U91GpwekdypvU63uznUcVxDMLRRrkXRdQPksZRKkCzA",
  "key1": "McG2QGps2ec71JafaGMet8RZRYRXDXoDSDeYGGa989D2NTD1TZ8ai87zQ6ARY8L73ytg525Zkemu13kVQA3ZztR",
  "key2": "3HHsJMyijCnUAzkN4Ly8agW2W49A2xCTa74RQ8PZNV9W9D4cEekF5jCVvKHyNdMs5oaMuDQq8afWDRm5GWMzx2je",
  "key3": "CZLU1Cxs6nauqNsZ2DgFwykPBEJvPbt2Tz2kmAHLYVrh8tFbJpoBQyo5H3Lz5KeiKPbBxj6iN2h8tHB8NGg66uW",
  "key4": "5SntRSTgqJD1X7mDVhoQECL5DxA6kbT1som5moe6Ps5uzFGjzFmLwGcKcaeEzWqz7Zoh2VL2BbGM6Ewqi62myyL1",
  "key5": "5gncRP3LaL1DFM3QcLar1ZW559UDRp9a8e4qVPGBPBsZB59yUnPmYuVfnj7fyK56Z8YUvaMRUqRf5XBtMFkz4TXL",
  "key6": "3hoCD3ygEJF6mWH1HT5MwmAdG74zcqNzJhBByJQwyg6ehWG2rNWYySF2my4GfrQx3fgqpueb6ATBMfEFCpSXB3sP",
  "key7": "5nsDqSuj41syz7garm5oouM3BfLMFn7V9txqDDKTBPxSpVEceHMQxKbhfRJZb2Ywoxbfp7FGP76WVHtG8pLMMxiG",
  "key8": "4fJCVJbZekspX1S1abuavkpjHFMRZXHFzMtjV8GvwCaTsdkeNkmLML2U8BH1sgkTceTdaMfZR8SLbvdPSV96DST5",
  "key9": "5imvfnnskdH8SVbEJtZ9r171GLvZED5uM4RqwwATRLdbix3C7cPdcZFGVwuoEDF6ZBynjhDayWd3eusAdTgNg2sN",
  "key10": "4fEgvPx8WF5HUgFp2BhjXUSCKs85dmLvFNDtGUWA3kxz3xinRVR3gnvyJoZbHLeCmq1a1gqHZxyUzDZDJ333geuK",
  "key11": "4LNVBsQJT3CQksE9NSDKNusV7hG4L6Maf7ULbbHM9qpt8oxx9uJpEL7mCuuCsPFRckFTH2sBoQZdNtp7mkSxHezm",
  "key12": "gkkbZDGRpcwu9ABJ1ebedTNpyzzEpVPYB7N348WaqMQNeD3wQ6xqHnRpQfmaX9BHB3JUzQsQxtFjjWD3RcYJPcB",
  "key13": "4srd2ojYoMNcynrR2cY7Qk6RxFB4Ecd68MPRCDpMe2AdbjRLPN3s4YfMbuNHZDGk8KkxaL5eiC5t6kR4X7C5YmLU",
  "key14": "63Kz8fwnZqbDghHus7DjHdCN2nbAUu6ZFUfFfpHSvJMinTxqAnfNeKqsxUWvEqmBPXJFbH8bbb5zT3YGpr8FoWrw",
  "key15": "32vvHrCMTyxUcPd5igR8yN9BNdeWK7iD6m2CsSeDYDMrhLWsQ3rtqNsgTF2fKC7nshYEGcwZUVSGp9sVtGoL2173",
  "key16": "2aPHQfHEjWw6CovHwj2xcZM52RLhQsRx5T97CB8b1frkiReieS8werUSqswYFyKjjsmHNb6Mvi1kNjKZ2R6orhEB",
  "key17": "ZaFKyFRLLKsNvAzfxjDxG1YHMumUbNqtEdXS9et168rM2PnPcNnGFYKUdU3UMSHicDDNYo2F1ZUKkMTow6x341H",
  "key18": "2mJv5ejYqZ81kAsDDanTmjZgZpvoKvkz7vKBnaRXsFXhWQVvVjBWYuLRXuim4qHAHCM3bDB6gcKtwCNKcGRk5FH5",
  "key19": "4LWq3vtMS2y4qrKim3VqsS6hCRoYeR1Ato9rRPVroSyCHFjX6f6jX1Uw7UMZjk5p4UeSRQyqyokVokAnt4euZgqJ",
  "key20": "2qsEHLByA17YzPApMiEgfGc7cG7bCV52NQBKoRtnHPrrfmoRdTqgWpM3S9nWFZx2PcsyTbnWhFiGNazy6DyMf4FF",
  "key21": "zkVnoH5rsWTiZDnvGaKJpdjvKp2n7UbQHJLi2gUX19rC7fKwgkef6g6PgZSnfwAXpipfTVAyHdyWq6XcvBhBRe7",
  "key22": "5sYn9ieJTR35pdaCekdPhQUKU4knbx2jxuyvYTtSMjSTmsGkg6Ti24D7FoCVMYn6tc8uewydftaUgpQ68ij34hHR",
  "key23": "3iL2WBc84htJaTyb6aELvB8ytYePtLo6mMhKbGgBNWHhkzkR8ZVuAyDT42GpSoM7HHz2GDETuYH4Lbr76kKm76y",
  "key24": "2T1xkw53cGA5GNrdvvrUKsN66KCCGo7NTFmExhUryG26Vfm2KEvSrVQ3NSudxxACmYPQHqK5XoB5xrns3LAKGuCx",
  "key25": "57jDGH8G8ZSBiX8T9RHjr8496S9kVBUry34ZX1hDK5XeTeMdW8vYrE9z66Hvy8q1NqUzYRKNAhEd7KJpmFtSTnMg",
  "key26": "3qqbb2HUYqUUgT1THa1jZRoGgn1MgfHTHrCuLB5ahaPhYytgQ9hfRDC5ohbVyTnWx1NbphvtqdThbaaPEoXoTtFA",
  "key27": "sPXXYtbhSZW2icgm45N7mzvf4ach15pVZEXDz1HwhUTEHaoX72xPCTyp2155pH1m1z5FmduFJsH35w1XM2eiWhJ",
  "key28": "4s9XjDXbAzpVawKFqhC3nZa5zgjTnxLF2gNa6cL3Qk4ZWJe25QoqQRVGgsU7FcbwmWPS6nxg5dTqQYUp6hYxkVSg",
  "key29": "2j3Lo7o5mUBB7Nrh381kCvy3sPWWaYrJ7SFV1iF3KcRe2u81zr4LXz6tQ7yKDHpNgQMYkrngkK2s7dLn5xmcfnqX",
  "key30": "oHjm49amyAx4QZP86KYvZ7qrkyM2Z2KG1Hs7u3PnpYnYFJsQfkVYjPB4MTcrPN7egWUVEfBMsRaVMKmK3nYwYV6",
  "key31": "3R6ru17chwEEqzihMTJ8imgV82PtUuXvzmnPTz9Nf4YbhxhmAz6VgTyGE7zw5XNxqHmvQgPTuLXDyjD1vz3hyo56",
  "key32": "5BdazvdkB2BZXx6earvWwotEo3VwDk6bn4coafBC2VVjBngPGNyrtZHJfNHTg6GQhp34bKM6d2U5DfL4EYcZ6RxV",
  "key33": "5udktdYfzY6VkYqHesF8uy5fyfM1YSkD3rvQn1A86QkV7zMd2rSKk8u7Qv3Sua8Xxe1SwXd2bLM14PgPk3YZAbCy",
  "key34": "4u6JwAKfNtWrqaqHE9rvsjLncxMNvQpn2VcSCGC5bPrHeBS3ffWd6Jr1s7NS8Lj9ZczGBXx1Mr24rxixbDGhTQcN"
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
