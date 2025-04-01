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
    "5YFe3Nrjr84p4rr76Vh8iNrrnUuTLi6kqtzfcR92YcKXSmjfHQPsZ95rMmtyPrcLFea8z2tGYkX6oQZxkNEixzfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wDT3f12h5apGw2ytLgNoN34TPYRrp3iFSxhRhgscrLCZEcERoaaDLm9yTzx1Z7S3V6wH4FtrCrJ1hVFDTfW1LHd",
  "key1": "2aezuL95tgTUHij61TJehd3prVHJy2jCu9v83vz6m5iYVzZ9JB4SQgEZvkQhXB617F3CfsARFj9kMwVv7TE26CnQ",
  "key2": "2DVPeD3EMBhaUanq6SN7GNaftb9RSDWPd7BeR8oEmZ8qyov3HhSGk51jgws6wqywxvwThZFR1qeCJndmuccv1yHf",
  "key3": "4bEiW1qhSCWXb9u3J4tToANdQZ6e2cTPdYK6GaBMARdHh4JZ6nV7o5AqZRtoMFveSQL4N7KLc8hsUc2PrQ1qdnaC",
  "key4": "51Cpvz1AYU3BSyhmR7YRETQeEd3dWsnJvn4eahYQmHCZZ86BBFAjY2pDdvnmea6JGeSxPmKUDWSQdnUNZxCuHroF",
  "key5": "J6tjAaitcW1XrhhcdL5KCgseBjRua5epaWAVNsVzfNFhTs1Y6aM7mjxsaJ3QREGsZ2APHrzc7e5T2a2G7LjdYxs",
  "key6": "b8NtCmDMJT7ML4SbhotGQSz4T1Ux29JgrCMvaeV2A6UnqFsEgZWsqPWR3z8KtaYkWUJ3uBBqJeSb6hkT1QhKywS",
  "key7": "zjDEoByHz7TMwncXdp7MGSHxy1MMLCWrsmKuPkRw6qwtt64TTj8iVwsacxAGZwMT7jT4wFTPaZLYiFQWwDxX6LK",
  "key8": "9HSnrohWSxM8UVoJXYDrWLTnHqTmimmjVh5nReDeWfNSUfTtkX7om6XWwXPiwqCmRaHhRuVzV7WiEgHyESUXsaJ",
  "key9": "3b9XvngkdhM97kXkuMUVLYfd3SkBnLVY7AsKKguZLdp8j7DuPcBBunEKJEXfoiGMxLZiwc33xeocxF2S5gJ3WVkT",
  "key10": "Lp4p6oJUq4rEiwx8hrUpFcFx232iiL1wasxSabSwUCVR7iJQFEmDPtZ2c4f3GieJpJdwNZ5bgskC1gi3aP6x1NG",
  "key11": "cE8wtvBMd7T5yXY8rvkemyVGQHWhtBwZRL8kndLGxwwRtzVAM5gnXpPcgVbx6GXVq1jSt1ky9ytSrSNcypiiPD9",
  "key12": "RoXwnyPgcaMcTqCscn71Fb9NtdFY3rjR34MoQZiv6B7omgrRDEDwuEYDqLvZDiA7qC8zjzcLCXss585NNjDjBan",
  "key13": "3HVTNq5CLaFjz7ZwkLhjNZnPP1VtWy19b1P2D7bjWmqfCguneVpXBWFW4a7Vry6dce9aTSePPoaT9Z3RTG9nxJtk",
  "key14": "Bd3xLTLDKkRkRveumF3uthv99urfJVw2qCXnio3tXygsM6g9bzYs3d1ohn1JCvcRoHpp3StGhWhXYyHqRn8rWmF",
  "key15": "2TfFe1xAGrpvQxvTBsZa2LEnTi6G6gFg94ePS7xJZPxcDZojgFJM6XCLPKMXPRM7vYkxuHq3UXYdsAGLQpkLTkqC",
  "key16": "6Bx5Y48qbTFMz8hqYw7ycBqpL4fuaXfEgta9bN6pvu7WSPAZHrAqbNS6P7iJqssmfPE5TdynKQ2fUPeUioncqP4",
  "key17": "3GqnrumomgywXzrdX7yfEzjdqU3C77BNwpip9oXvxNnerr5y5js1KhqJeCKUGx2kAgZFiZ5bjh3uxDp7YoNE7Hby",
  "key18": "5EyATQC6gfqRJ8kk2SHYdKtNvuSxfsTaoa7idFBuhPv4iwEdi1izMyLBsRPuNmuNVxu1kuUYjWS8mVVNJTvx3fTu",
  "key19": "64SaRcNxXynNdftt2vDwHeDcQsLLNaDNNCMK6WZj7RYSnRoNjaqr4sxAdDwaZJR2XtbiKMECwKeTNTZ9MUxBkVeF",
  "key20": "sR7WtZaG4Lry5impaA28w7NmNdFjoeHepEj8ndLbWB4bjKmQikiDWS2gQV1dKWJbnbm73wPJuZBARc6sLmWPDrH",
  "key21": "zUMXv817kyv5rEzE8XPxznw2YiD2wVbxF9v1AeFhMsCDSdxL5NBmjKnWxgTo6fZtprKTodfDYw7cEqYZx2FiN8E",
  "key22": "3yEML7U6ZNRHAXccfVPSyWRKLFDBB83eFVaRRoX1fLtwyoKSXHw6KQDYezc5y4S4oRAULKka8TXiZ8wnstGSefRY",
  "key23": "43uMxwVjXdexFSFh4v4usYfTSSPpmmZ9aFfdd8asAVvrQ8SzsWLKqJmNdyX7bzeFxAEbzaepMGPCzhPSZmAmkYbX",
  "key24": "4god1wtYiFX388r1wPXrD5tDhe1upkhJuDQro24LTniSFn6Yv5HjeFbgLFHALEJREgvNeUCGEKng1Sea99zZDsQa",
  "key25": "3b55KNHrXMvi99XcwdVK6ixGfMmHiVhv11biVTTqX52fEzLLK27UA1CYkf59wLFCJhKohVZyL9NyGLJzy1rdq8Ag",
  "key26": "3cEKjHfaM87fa9XUF1qzHVEgCSMxczqoaorB7hBtxa5FS3tzbx11cMLop8pnNtADuaCVuUphiiquwNu6pZfodP88",
  "key27": "4FyyJWcdCybyGcruqtDRpgXmf94MCZjy1yz6Fk2oW7TMw2Hu3HMnuiNddF3jcVT1nVnz7n5N8q2Yas1x9uhDZp6c",
  "key28": "3YUMsu2E8u2h1gqEk43uijxg7TsZPwhuxfj4awnDuRu7BMmwWWxsHEn3Ddr2qpUGg764tQ5P2zu2D4DH6AssHfpU",
  "key29": "3frFcD1njKAgPg4pDUuJXUETRRWauhxsZ5dUnXVnxANnUJX4zP2U5w5xBQLs1jsCPDYh9R4GcwoxctMECgaSYNug",
  "key30": "VuMQbVECFvjvs8V2BB24M9xEEU49jyqrxY3Qjh264tWnY4cNBTWAUz7ThP4BsiqcgLVXR68s1k2qWmFb571rDYR",
  "key31": "MmdfxNLNvh9FWW7SRhNRC75WgyRGYGotZZTtiTM1yzfnpJXzLnp4dr4AM55AAb8CZ5uxTTp1U5QKN254KbqPQbR",
  "key32": "joRCU7U4zauFxbRVqZcJjMpHzLMbLt6KGrvmHNtbY2EnCGURxD6nmXXkTupo2m2viLaUeQmZPXLP5tKwsptwhwi",
  "key33": "4WBHPWDznNVyVGhqjTat7j85mA8cDvnZzfB7St8B4ySkytBdj43gdqPdMtdZcuanRxntLz318EVLrB8R9kmms4Ni",
  "key34": "2yeUdWDmGg7kxXupVWPQkRf3VJWqgQdFMtJH2oSREZedgqbqNXJfeFkmfZEQRaLfnUSnk6WK3z1Sga93A6k3nYJv"
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
