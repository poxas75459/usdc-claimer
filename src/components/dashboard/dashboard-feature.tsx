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
    "2633xUwpgfYNifY1yrmGgEQ1QuYU7jxJTuzLZ3SRcxq3pu59zypi6MUXqwo9yGJAPwXCa6s157SWhmsHHmo1W3xF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aqggeiUdRc1QhBmpbXatdiQSdHqMS39nZLQoYC6HA9p5SrzQqDZfikcx1Py7orh1Ev2BWakducS7g392JzagvCw",
  "key1": "3qctdYpzm8AyWjh1AzXEkWxqA66AckhsdBpNk3qXuTTEk5ETda5F2buPMi4Q2mHbZGdg32385XZmAt5PRur4swtu",
  "key2": "4oSjf1qrBEem6obxeD9uSR1X9ZbjvX1aXxhygPJakqESwFnz871qfim2GUmQTaHmEfpompDwgrDgCSuA8HCkZbV9",
  "key3": "3G9B5tccyMJrCGNgu6fnrQEsRJ1g8hvWKbw6uyyNXTDK5aYwJeEGR8WpkRpX8iPAHQbvaPjujaCZbCYkKFC8hSYx",
  "key4": "3jVdH1yEYbPjwHGQHCpxsZs5JKUG4cB9bUTRn7cPxexU8ymmWEHVDnGpqr6enLoW2ypsX3Y6NxBhoEKeeBL7MJMQ",
  "key5": "4ny2HLdJYpyozSh37DMb5gRZsCyuSrvmuFXwFKvTjqX7F3Q4y7hHi3gEHqcdvtXojTfZBqYFyc5TMxADxYppnux8",
  "key6": "fxopPEBVzbdVuN9cV1Sxz6iz69G1v8bLnY4VVZsnwZ2jFH21rDAJB4uuebpDsP5NTXM1WxZHwgy3iEMuBvUhLaL",
  "key7": "2uwvxBpZwv8f6oVu9vxdqcvhyTFWpxpAhCd3rgiVeiz3QCa2oHEtnozf7Z8xuubg5wsEgJawwvtqnszZaGWCkgCu",
  "key8": "4TSG34TokSWp4xD5kN7rnjZKdhGmxY4FxXxHaRfRraZJ9ZrwAnNAa2fhibZsrRWzesgNUnG3gMBaosNwbENAo2tT",
  "key9": "2KVE3RMpetFDSoRKN6Lr7k3XLXLWT7Hq76BoPua5SZ9EoSomA8Dj4WYQ76o2R6qCZHBWmcv9fTZHQPyLV3fQsshx",
  "key10": "3M8EqUTVC1TKuTS3Kn2K57dQzdDPRwaekfEwpw5T9Gb548j34g7vVWCW1cL28KEcP8EKZYuUavfRQe7yFBpajS5Q",
  "key11": "4HhqpghBqJcywFkuhnLwA7SJ8KerpaBBkABZ6NynHjryyXpnN3T17oqJMbFNgJijDT97dPHMjNDaeyWtsSUMymPp",
  "key12": "3kNkrnjEo7rYbrtNVBsNw3LDCJsDyKqajGZFibKdhkNmNiZM1ac97GJdK5Hrxoc5j9BY2NczoVeVyFFiGyi8r5i4",
  "key13": "4MTiZPNncRMwfZsQocqALNr9APnpBXW5o6XJSAMoCba8rosfiq7mEBhqb7MaW8U9BSosEcEAwDvk54fNqndiWz9J",
  "key14": "R2gsiLc4ds2udopfp25Aq6ZWEtkK4UH8QRFTh9MAfkn96hoMi4kUonszZ5LzudUsBK7apVRB2X2UPuyRt65SAW3",
  "key15": "2NWi4HYuEByXzwYT2ct474xxXBqmgHMraVPaH2Ai6JUEMqunjRv9KiKnf3AQ7cdd26RaEZTB8RNXHVETK1k4GDEq",
  "key16": "3aNyaPW33rfMzgeKFXQnrQSWdoubGqhi9mJWswNNKDwSKX8rWWK2SUjPn4qEGn2iQSc1JbyKiwdasFtNnwAUsKPV",
  "key17": "2m4YAzmFBLHpcS26V9SiYqBvRFnvYkExHp8o3ZWBSDwsXGjDvojEscw4MpG8DdzmC8nMXfGB5VE9GwMSzBXFLV8h",
  "key18": "2ioQrHjkJdNLBoa1tyVnaRswAG586Uwhggs8nH2NNSgYqpRsHFR4pjENKVspqaDHY5CN5TRR9QnqzYUVU5HNnrTL",
  "key19": "5KX2rpgVu8wXYkMBnQgqK8uDhX3tGN1pxt6UHBoBzekMEMLiDC2TMSH68vxSrcDeTaszAymWdvcVj9fpyhw8GxR5",
  "key20": "3ztbEEy2DuugkYwzy49vKnrRyFGXRTaXhLE426SAuoxk8WZ6uTLQyJXvVvNqF1SU7yjotHkJmGZFeCm5TQbLoEnf",
  "key21": "BsUJcmqs9FzLTqgvxoCzHF9Z4xLi56JXNZKXfVQk6bKAF4zt1e5N3frwmKF1NCzVMM6m4EFTy3g9VEDgz5iB7UL",
  "key22": "1hqGy8GG5nNqGvPcaqdjhecMARTxk8EMo1yVGJ4wePiccnPSDeDQU4YxSTp3mAGL3HGkn7kpHtwwVZZSdd34qD6",
  "key23": "c79FvGjXHqRy8cneSDw5EDMCAFKCJQUYqUQdtDfyfjEtkELXaCiMp54sJh4JoP8EwwkruVtWXxQUJNj2rxDPdxQ",
  "key24": "245z76iFE2ZWRZttUwGwHxWDoQLdsDtn45u3aAH1jue8oKDFz2ugAo8T1Ruc7p17cbZgCeRaESLY1qAhjBswNYcE",
  "key25": "en5AUA8tCVprSJZU8PoHLdpBhfAhLirhRgQ1NAJPrASfvd7X1PvED2bqspax26KBonrNCD2MSnySdHxTiviPdki",
  "key26": "xCE64zhBLmjp5F62i6gXE5kDBhi5TFZaVeFuJCSQfMCxAUhTYFn1PqVoWY3xqd56tVs42giF5DvxnEEGLAgWAve",
  "key27": "4FF4gs349VATcXnvKAuRDYn16hbQhmhRQPhAYb8ksC4e1x1hAdCB6Q34xz6jXJ6Tjxxk1HSqjqA7fVQuo94nVNiS",
  "key28": "276SCabuHyBEKVH8Q4KmKVEZfn6AkoYADkyeHJnoWDAj86augxetkrcVDyuTFYCF5NsSL4ysJYprCsDdTzbGp9Zy",
  "key29": "4EfvCZZ9raHdH88kAnenx1NwbF7fH3p4bybWe46bNm6mJmDWhzgMZ4oKaJ7aWMmFxWkjeVKmucFtvwLkkNGAmArF",
  "key30": "2YYsGjDziL3xgB53PeCwgwQ9pyNXh9rsoPiFBmfXuEXvvfGGpyUknBc1rGB1BAeggmok8USpPnkbtFPj4QkLnaGU",
  "key31": "2g5rakge5jC7BmTStFJoLQgYS1Dk7HRERvE2321tCzQtM3uRakFTBCh8S3Vibpg2mMApaNP78qHLAxfhtDLv5f8S",
  "key32": "4z3J54hoFxMPYHvukNocCC6zqAY2kQM9oqj8JJ9R9NRYJsQrE8xx3d95YmqzPijKqDYkTZU7sSsP6ecqwdCDt6o1",
  "key33": "2XisT8gLyZQfuvpAWoxhLHVv6JtfS1xHdPP7Y58Atj1AyVN4BSLdJkvt7c8b5GrifSWLMpS88AitrCcYb7UAN9EG",
  "key34": "52kbf1SiJWAWBYbWQGHQqfr3CT3D8Wv31E5scFd1i4RPBwD1j96KvxqNnwaMWopicFXmc7YcGzAXv88fyokLUuYW",
  "key35": "5M6wCJ5nJGsDSuSBBJzH6AYgG6xJgEFV1ppHjL5aBdPu1koTncXdzGM3N5FtB8SxE8ehUioyjwSp9ZDbmiuzAprL",
  "key36": "2JRGQBf4XuVcb3mtUuh1ZA2Z6HivyZHfRCvoFqJvH6XJ9fgxLKM1JGyX4in9PC8FpfGfoK814gzmr1ZnJzg9ARvR"
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
