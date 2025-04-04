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
    "t3EF2i8STeM8TkUxB4stD9xpwML6jdLHLfSPp1SuBf9TM16pkzfEm7HYBSGfDgGXAZMKUkCg7xaw3qtB2wiTbYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Aym9YjeogMHrAFd2Ne7Ngqr53bt88VHdT8RdE21DCMquuFi3GMtgdpZTgsFoj2Se1cotNmZ44eqVi4CUWXLrAK1",
  "key1": "2ssLBa2HBoveHnuzc899ugLfyuRMq9wP5JsmKdpwTE7erem3r23f71EG5EL29wheiJMSe13WeyubQFv4ihDdccsh",
  "key2": "5YUc9LpjesNDjqcUhJWFf9nJaDKpMzkF36BFDo1zVYfLosCeKfWsJu9nPwBJ2wfSvMe7hqddYpmvAp8Bx4ghaYWU",
  "key3": "vZrKJqZVMxE4yevvL4DrXPjiTwC57UU96jYYwebkMtJVrhoamqBMSGrGsZjYbGnV9GTRE2cxpUtFVEZtPzMopZK",
  "key4": "63c1CJBtngwUypKpByDHz4S8TDrQ25LGmwnpJjaXaZFavKQhpYnGugSKURnFrv1voFfjkEHNjZPJREvi7G7qyfVL",
  "key5": "4ZggzXef3nhnnzmN4znbTxDW6Xrru9vsESFbsXbwsoxfuutw4sqwptoc7rDEbnNc6gcbcX2VFo3tnTPjuYKYcYZ3",
  "key6": "5mzv84zcyAfbJ4eFCf9ikT9HyDWwoVDgUBs3eqXf68F6z9xgrHV3y9yHqkeVDFASaxqA5BNQZLquZWfhmggEcuQu",
  "key7": "65MqL1aXCbKzdpvXpQrDoMwjHS4NEXhahCBsfmL3MvLvP9m8XqHUWX1CB8Bx1TTt9N7AVnCpKcmjkqMseGCcp2us",
  "key8": "2C6zEiiXdcwzbzvpECQbANr36PWg7rXw6KYLNL63e9VsukxyWkhgHyM6ecevV8adQ7F3Kiras2FrHJov4r8pitv7",
  "key9": "5QL9QdGDZXYEKQdgAdVyUFkkq4CW5QPLNzDB2FoEDm3fH8PSeTcgSL7ygZfYvFGdPrWUjjsKvDCFY7Ra47yFBWZq",
  "key10": "LEXzpdeDoaeUr84g69HbVVJf3SE5WD8tdQyJWshoBKZL1sQswagi3S2j8W3UxcvDSAjMuqLq14xSMJzJ8WWoKKD",
  "key11": "4hpURQvN3FMSpLv1d3xP1bWTeeK6mRNS5LNjSN8U2PC8z9nAXtrnMWfxkzLJQW593TtosFEn64B7a5Tdq5NMWF81",
  "key12": "2Ka2x25PgCH5Yg7Zu5a23QtiNGDVt8XeWTU7Rb1awquDggMyZozWbjsdMHHXcVxctdkRXVS9LS9eK4WdpwiFZsXL",
  "key13": "2xkwwnkof2qd1TqNFx9Lr7xjpsA41fWiFSAAWdEsXZW6RRJ6MVrw7CoAX57dyw1bfpbTuiSG8JajtXGhySjhW8Sp",
  "key14": "3aAfmtVJpTbCPCmBfKvjKc5S3FtPh5jVjv3wiE54UQa17hD8835aSezhAKsg9xn1Qj5ZwATVuacSyRrgLYbcS9BF",
  "key15": "5ZcAe3dh3xBH6pMpA2oHZdLLaL5dRnxEbFaqoQ1oEiuJoobwjgEQQaMW3YSEGuuQBVHMBqymMTKpCRbgg772zbg6",
  "key16": "27W5ekJcoaMKVVMQDxAh3R2rny7Xc2Q7qG7WZknjVzCuscgRRPBg5do4wdwyMVDShKpXb3bkQnJjxniMQnpwNLBn",
  "key17": "4Vd9H4oHPArbL6RnuxHmxqQoEK1UTi7sgWUf5vZkEgyu7WhxAf4BxaQVHEStkzV82tNftNC9rB4QmfYJ79oc7y9J",
  "key18": "54XJzLo7RgCsdv1gmBHeS1Ns5t6f2ECmpUCSMbmya5ds1cgwmQR7F17ioVEBy726VD2ZgWCJZh3ZSoeoaQpLqwXE",
  "key19": "3GEsbs6pwys1sEEb4cegbNZDt7HbZy4wA2ec7cRDmPRX11TFn6fS7xpVvvJW6wXviFp3q85HK1iL1jSDLasBLUCm",
  "key20": "5VkwJPz4sY49wruWmJr9ti36Aoasi6NQvjcxqicCqdVQZEs1LADXmF8QLrHF3kXv8KYkxidXqSWYj2d9FsgWSr5V",
  "key21": "Ei4mEwCwRyt9U4FYj67CPo49iZEuHFaMRiAqMh1SXPVGMaUitXtkfGhJC253WuAN6QeYYS1gtJTX2dxj2SfaE2b",
  "key22": "5urz8YGuFfCxqyHrVnHNssJeFVzEcAWCm7ezqaKNHqmtLcyuXVyX68mDKr58gb7JtGSLZv5VL3fUULs5GpZuZaod",
  "key23": "5KGpA8dwa94dfFugr6gEm76sHzaz4P9a8ucHdqevcSUgUm5E3HkKzHPDo7GKyZgZtDPA3zKuCzPsFZYCQ4VjSGDV",
  "key24": "7h2fjEGGE8ao79H7HdFbUgZ3Xvjkayq8UrcMR2GGZsTDf8MBwwpq8V9kKibxypNi2z7RUoacsfPVACSdmNf9xRW",
  "key25": "8g5EYASqtwxWESiQiWHo2KWy3z7dwx6GzRrWV94SzBULhuf1eFG98h6fJgnYLhe4tnsAbZxHD8FznHgUJ5YqASp",
  "key26": "5pdoRAjERvcoxEGEVvixMhkQWjaba35Ns1HPZEFsqeWTJPSUSU8yY6HmD1KiBpB8VhApmV4svh93bTdzCvrP7iYC",
  "key27": "2ZCNLxMGhZjnLRgp8mit2wtBbAjg99MTtxc3uVfCvoitDELk1G1kWcbGfxgBB1BBdtq2vsnCDrNCeGDUfpykT1BH",
  "key28": "5ggTwXAVfTAMSVqKyErV6BE6sMRBrP32Thubirs7USgmREVegZES34tziuQdDwQTe4QeXd721Tv7mtw95T3CNth3",
  "key29": "FY9o9HoABExftrcB3uoDnWQtnT1R4tmxMm16m3NreMXP6Bvkij7Cf1Fq7xYDwehZSB7WvYoMh5NXBbKRN5QvMWC",
  "key30": "PMJrcfXhpAHVBUZ2wZgnRRCh1PPjw5SWyZzNjSezxkfPZgRCt5w7ReCTufsn2nefWVFPgdcSE7hNySyaU6HuFHj",
  "key31": "3Rfj6ndQRpEtWEZnoCx4abAUDvwYK7iUy6SMdq1Tdr9Y6F61X31fVANzQbAdNxcNpfuLJyJnUAVvTMetu6Qm4Zph",
  "key32": "64MyvstMLkuXbZ4grUGw7o6yBHPex8vNFRLxWBjWfr555btnC8uRUrjSSmSZ2j97uJWdvddrmDDk5dESpNvy9d82",
  "key33": "2tz12H3RoRzfpDV5ahzfs2iwrqn1yH2abTer7AMKRFpsjLcN9cWJAD7jfWLMXC9DkgntWMAxcDN1c8sJtx4EYRiZ",
  "key34": "iiid53ZoopVNPT9rm3HTodeHiJ1M6D22kQyybQC8unfNH8xiHn4rNNjFEaHumdSUogC6sUP3tmNyrLeqK9LUfw4",
  "key35": "5HLUX8yCJdSYv8pfUqRfCcxhdwtTLMAsAq7VjAhKJmRPF7o84yoiuzxM4ytofAAUiswBHmsBrkfghbekzYkUsJ9h",
  "key36": "5dHZ2iGHUWBrKZszvfBAqKcQv49vnKfoEAWAm2hYozgUumYiMUjczBHkFezSdq6Cxge2H3FaCd6ccriaVoRHR9GK",
  "key37": "4Qr5AFxo8zKUDGaDxQCcfpUsQPGqXRGUqny7L1Mh8N1Q4bf6BP3t6KeMskfQq4r5efAgdVY4dSqk3F7puZdNwNzr",
  "key38": "3LEt6365DJHWt962w4m1NYbV29h3iU6hswb3RmKkKmms9C1fbkLXUo7AxE3kKeoE919TCzUX1SA7E9D1DMuEx7Fp",
  "key39": "3fqXDhfHVsLoDiBLfGaihkNFbnhrBGeQQf2fWZBi7L8MiXpgYN1ALDFYDqdYnaP8Hg7g9AJtwVquUz3mtE2BExSg",
  "key40": "52LvVRkvKnMBLnWSE15WrZMKBdR4Cg84GriWc7uXyRABfPg1QWnfLa6wGfwM7NooJHug83BT3GaqErYzF9cBs1z3",
  "key41": "ZZhyjN9A4svJXYxQEe64FBAAp6D9J1GoGpRCS9RPYRPkqXAp2MDq2KrumdyN7zqCBomb185XVGkmFKiFqVYat2P",
  "key42": "5vBNsysTvAAV32gnZZwztfVr9raAGNHjEsiVA5rD9ejtrNEW6PUn8dZCWjJiuwpU3Xisx5Q7FxsWmjLfLtPANgLs"
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
