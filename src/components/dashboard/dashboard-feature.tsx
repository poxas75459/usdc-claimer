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
    "xivhwxVAgXoXmfPQxvgfLmM6hK7HeqhFqYGZHhBJHwpcYjLhUPigMTH67Q5bQpqgtZS3vuwVEManzvx9HVjmNEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z3VBsK54pkYWs71cnrhgukFAZxhpkrC8QXPH74eKCZgKF3JMymu5qfzps4qkBqNzVfJe1FK7Ch1t5yNtLnfQPAz",
  "key1": "28yY4ygvYQfN81CdZ3qN7Xsth7J6LEt31WMTzKXDUdWMxkbfLn4TZN4wkRWu5myE6txHyztFDQKh8jb1pKpYzSCJ",
  "key2": "p73QvH9fvfiasZuqB2oPRyss81wARXK8iYrDXk8NJBpVfX895S49kykZoTakKdieqB3RWeNaoKRPwDWre6FMKFW",
  "key3": "5WZTNhGVapMeqx3A65n2sJ2UgGAub4wxgw5QUNDpHQPDAvfTMd1qUomz5sq4aetstZiAy75xtP2Rzz4ZWwj78rzv",
  "key4": "2sVXCDG6r4ZcunfFjZoSzrJE2LSPT6pTRG3URoSzjoJY4xbtWgvUcfBJgfnhiesuc2B25HkeaZs7mYWd4GGq2ijV",
  "key5": "3mkdjgGB8mnAp99VNqgqRjfbid5SNAuW1JcoXyG2622mGUDhVmhUenmsyKtJEP8fsKpGNxU1v9JSqPXxNMdduFM9",
  "key6": "4pKFCy4AHZ7GUWGpEVpswHZM7mFtL41Hff2h6zWpDZkSEibPBQx6YKYTD1q45beDyQkVxxGdwgCxUzmQgZHX9SwU",
  "key7": "3knVWwfNcXizku8uZ9nxRmJQW6u8wF125cQWgLNas6YEN9EzmzjsLsnoLvZxboST3TpBBgbDLEjfxs7vtLSz3htt",
  "key8": "4MDni781XZqV6hrs6f634XhWS5C7EPbNYj8o3d1LKKSy5XTqphsRYKLYLCxS2wBcJmdjmcrpYoehL2jm8pYSGCTX",
  "key9": "4Psa1K1UGoZXMq726zBRMbQRaX5boDNhSJvUHhodsAQ6g7wqPj97aGFvVFesZdhGCSpjnQ44VdqZ5WaWWJBYgUPs",
  "key10": "63S5SKjHwY49ssB6hg8y3gAb46cesC1JZAF9XtFKbd1F9NBWZhZYH1e2tBcrTLDo56JdagFuYrvCjaJ4bgsDKJ2m",
  "key11": "5t1594vYu3Xa5Ak2zwHYc7woLHKQ8fpLsz2msDpmp1QWCT1yFNYgMoto7LkShYE77qhUdKC7s9pqVa28crYPhNVB",
  "key12": "2eRvWcpEaGu6qw3WLJfAxZ1tudycr5KVFepVCF2VJVJ38ihyyfmHpnNw5yfhaU819TD3PMTmY9DrF2puEAk86Vhd",
  "key13": "BWwXyRoMkR5Ppg1zTyTbfYJGsxsW3buNhaickPT82NM3LJ9dNZLmaYh9mmk4UQjSbP5vpXtoYg8zXLzScjsKPJX",
  "key14": "5JLgayUDiSxQYufK3pckNYenFyrVNbWQTK9mmVjq6M2ah7MkiySSPJPRWL1yvD6TA68Q4L4qHY425q8AfG7eGGiW",
  "key15": "2kiSbMNokxrmydtfpdfcZB7bApH3oiPm7vJgN4CPH5qAFCyofJ4oUcdeYqDG9tpfrCp5o79m6JgTn31n8ZSvVNMQ",
  "key16": "4bUdsmEwaK8HNH91sn5EGXpRkeRU5vkkum2uWYJUM3DngF9vT25Bd2Vb7QcoFuFPotKkQRWxxoibriQdAWhsJaHj",
  "key17": "33bTABQALFrtUJbUeQF7ze1tsjSSdRH2o3w8XRPPskaik2ebuH6GrdkSx1zFwNbPiZHx6Y2Jw73h4ADdiuzAVdvR",
  "key18": "2tD6pf49VM3H24AggAWFBvk6b2Jn36wJKhurPt64t6PvLj9boK9bo3nPcFUjpWuYifeyDFwihWpMs5qP3oPposBh",
  "key19": "5QjLCy6VQMfrdoZCi8PKvr7RWZ4TnDcr2w5SX9ZptiLEpMN5WGrsrdYRKLMEQYpVqTKEisPQQ4uyHBmQk2zhdMPM",
  "key20": "36u8RfCTYzFi2ebXKNrk2GJfJmYzuMpGgUqwe1HP7ZLg4EDRPxPfT5cN59NzJY4Gf45TTzBDpEjBRX23TM5AQKFs",
  "key21": "29AJWHL2TnTXCwczTGnHDszz2SJHTySNSHUgdDBwdg11ac2rvg5YJKRUr8W584DchvPZXfT3cDkyNHpsNU1kjaom",
  "key22": "5NPXjDbA4oeqRdPCnX1JSfY4d5UWXyfSoGh3XQiy63jF8VeSZEFx6o4fueaepBAE9N7igre4uEzbXZQ3N1bgmakf",
  "key23": "54fL7jYbMVtW8FTRqYkZMBMNhsqzKQhJQBveNbPKTZz3vCVjHWtYHG9N46XJFDgaYzPY2SQkq6uHdpco77n6bArW",
  "key24": "42kUbQ68iUXqFxNhrMD2moVgZYSojtJ3hr5WztvQhZYEG3br1GuPgMvdTfAYdXRBd252BmYmJ9Avn6CZdyY46VQw",
  "key25": "2BP9xhxKiCP6Gt3Ftd6b1hmjT4h8EKReedErJryj3JEBLp8mQoqrHmZAt4Wp2kWWV8RwSmkArHKbaAXH6qoVpVm9",
  "key26": "4hpez5cRZJMPQNpKm1NVZrmKrhn9EGfyBiq46ZGw7r9116SsMXEpDcd538adTJVh58HdfXKNhVGpmxDcceXsn5oE",
  "key27": "5PLdnGimAeE73mW6S5MR4LTzf5NXg66SBgQfmiUt1LtsNGo5asNYGqx36rhkTkBYUv5yi1F37PwWSa7NtKF1inxu",
  "key28": "2xKENXFJNzxyGGQrFc8x81osgFthbkFVzpJSYJY41rnmpfmzA4vW4RBn1PYwdhLbdUEdViqTJhFVmACedcoJEkSK",
  "key29": "3biQZnWEtvCoSj9Q1nmEKviDbLJXRESwf3pDHBZipgkAMLJLtbGgcMxbkGKQj8yjT1niskXJZ8r92RNa6Hzv8b2j",
  "key30": "4VbzugoprF8RTFri2wQhRwCqt6sQJqmbqoWYrEaoWmSv8yas6qqzorBbqQhLxC84E2s7peD9vCJh371w9CwVhWoC",
  "key31": "3N5ifUkB8Fb15BK2TAPoVdYfCRRNPxiyJVc3CM8KgdB4Eseo5g7Rn8oNAV4QE1S96mFeCFTUpSuzE1Fijnpecv7G",
  "key32": "4K7ubUURJdZTDoGL1aQdUAeMG1bYTeCtGnX27jkPS5vhnBMBeBJrrb5ncvpH6RM8NsLbHqbRzWh9VnnzDpd2mKXp",
  "key33": "oG7XehUtFA6DAijjbkSgCBBeWZWxdY1Kt4pJbTwoQ1rDrGyjHvnG8xaNEVKYgKhGBREN6ZaeLsWLJF31jrqujLv",
  "key34": "4Qi6GZydHo6rz3FhvDnTCMqozQ8WT3JbtHYRNdv1Jn3BeoEEBug9QrAzKWfturDnNbHdWzNbSEoxtc1agxm8KpFF",
  "key35": "2az7GPNg3vFNTcxm5v2fS6N58PHawtDFvqjqzPMg6iRFfcoUy3BtGmBgSoxt3UhEYRLWZnqCaDYbfzc8gS8zragV",
  "key36": "57tyStqWjGJFHLWvwD5qRrKYUBkHFXAy7EmQjqQT2PJaRXdiiJix7jHLyiHuedGst7tBH3dTivRnWv2eodovG62g",
  "key37": "2rwUGEnCC5RwYaMbDKLNSg1BRBkXtNUL11D5FEJVQPsfvoEtX2uBcVTXhc8aAGnTvUbtE49VChfVW14PbkCy3tWr",
  "key38": "5Q31Bui4WgQfTwonTYWPWxP59eQKVdDz4UV6QxX1GRWMdoKdrWrCahDYGmUwipSAjrvzPqPynFgjFoRQJSuYbpc1",
  "key39": "4zg673r2r2baP2X4Nzd7H9r2rqxUdQhDKpcxFEU2vqNZPsfaBanLKgXiMHsrAmRra9LNajSpC9A8mYPpTByyHQna",
  "key40": "2H7ghpySSabwq48nZ9Xa6mcXULKkKP7bGyd71CfXqMsUaxqM3ebcnGYnszYy9K8Gw2LUY3ciHjrmGokmqW4h75z7",
  "key41": "67NxKJXsG5P8Wcbu4ZdHaiqbtEwPV7bzBgbXnvzgoTKDi7hBKG5g2eTYr7xrTuwc9xPAX9ZDXKfQc7MPUVam2EYz",
  "key42": "4gqMFqRo4Tmys6ZgemxzGxYQsTJ92NeqoHR8EhxKZC7L5B2XXxGSLoeapQEDCHP3wCCkP3kzFG2h7Dm48UHnAxne",
  "key43": "5b9Q4tVHrdMVtfaCc2xHS7LkK6k7KmuHpPijDJqhYpqzkXbUqv5FJFKBWDGj7fhVgarTtj6MQpHbHusXUHGVTnz7"
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
