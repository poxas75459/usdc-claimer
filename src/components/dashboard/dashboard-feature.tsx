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
    "4xHUE1kBDV4doJfifNmupZSq3GLQDrJrk616pbEc1e4PaPN1fjNyMzZTwTQtVqELgvqALYPgGMTZJaHscacTZ8e2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vfpipRsiMS3wfUkJp8EjJ9BxNim3hQBqeCHG4BgGkeEwNZkAjPrfq2i2TQ1CjUY6LU359mcHRdKGeF5sRhyL3Fw",
  "key1": "3hFzFwGfViGJDqXj4buVRmdjHXzCcuNdUj7jgciFHkJpaKutwiK8kfFtGFTqfPDiETinaMWCCnH5WF63hyJAjTJn",
  "key2": "279VByjjhr31sd2Hr2AcNrcmmhd2Y4FCcLhQbbAE1UJcS2wh2QVPTD6RTbndiWzy72C1zvmsQL2rpMQX6kVJmepk",
  "key3": "twNJb2hjBKm1BtYniS6bCuXBa2HFqaJQdj4trmSfg9MLGYUgkMV551mGXTPK14VeZoJq5rh9oKWT6nXq721Y8Zr",
  "key4": "5anerf3E1BQhbo9uSMtiKezq21DVMrrDy35PXWZmShAhFrhQpR5DSfmkU7sipwDH9JPV2JJgfSHqxeoa4phNFz3G",
  "key5": "3dKeUr7yDZVdcAS36uAV9kumeZyoVKKApGZESvTEZaC4f4yjnDJauHU4Ge6ntWMjELzpxqQB3ejPngkE8RQ3wFf8",
  "key6": "32QhQHErFcNZLVZjEtkz3JfqHQEtR1YJaf5qEoK761NCvNMf3pSZLXonyYoSacrp6Z9uGwwfUJ51iZSMRvqx6cmM",
  "key7": "273NGrpBRtu9AcaA3AvGwcXHvAEVWv5BRb6NgB5CDX6RfPzfG8TarRF3unbtMyftNvRFENkr71zbVp85EDR1azrs",
  "key8": "4QEGZTRhmDyyAjgWA9YNyqmqsW5Hv8SL4ZBsZob5iE95fdPuEZKmDrVEYcjjorMccEYSZk745792wk7uah3gEdhx",
  "key9": "5ZWay3nptEETbAwqkrNCvDhzwN3pFhBtFxk4LvqQmhTuf8SQFwtfwH7b1dPXnJFFCUQpC5DygYJ6MFV4uVVTjdyi",
  "key10": "4MytbCBr9q4n13E6KTcijk7YXp6oQDd7XGgiwbuWfig1A7pFWGKMVZGjmZtc6YjU2ZqDdnVovkdN15dqGNobmoWW",
  "key11": "5HcyF1DjXbWDvHsCP8zVVYSjdLVrNaThMXHyvVa8BL7Ahps51jKovvbaZcyqPMQcvVCvywjPRap8BmYJLx7mzKku",
  "key12": "4wnW4XGsc2YNrBmWW6sqBvYqiJ6nCyn87aAqi5LZv8LHffcMGoeVGKDtojMCRm43v72A7cYYx6i5H1AKKjJ5HGDv",
  "key13": "5SJnkBHEehcAitH44jjrBankPEBRpekK7CJpbBZTqA6MXyZkLDH4zFDhKC1rhFUNohPYMRDoKmQAC8Y4Gtxuts72",
  "key14": "4t7vdTnTh2WopGs3DhqDpJUZT1VmAto4D7sL5avVJmu6MFjJg6dB1ZVUarbBQqW5mYtsiX1LetNoNgKMaGCEdg6C",
  "key15": "4dGsLz1aEWYFttzSbmmfBv74qrNYmssv7taeKxUp6cdxjBqXXijA2kT6fdzh5Kq3fMCjmS41LyfusRoyuDnK2TBY",
  "key16": "2xNXY914AB1kmjH6BBHn4QEewon1SB5G9mfvRn7REJLP32RyF9MY4EStcdZu7zjZeVkgVp4KPYsTizVPGJpTUhEF",
  "key17": "274VDH7EBKafyc8hH75xRZCeZQS7hBcTDc7uJLaNwEjDwgVvNPDCFbh7JAkRLmr8NkQJXTFYpNCQaZCZgxMpwV1T",
  "key18": "35wQD94UvwrL8PyZfPmrPoy7b3dZpi577fULNkvegSV8jK95btG8ey9muPXY8nxo9xaZXWht7SPqhrV5sitWBvgi",
  "key19": "joycdh4pbMZip4ct5eiGLLjYwcqiAgM7Miz98ij2eqtWMAAbJK1FkKg8fa9QYCL2yDkVh78QUdMsDjDNKMKzywd",
  "key20": "3RMgmHMStaozrNuxvJGq4FTvMbtLsGH3uut5QWWd8JGLEwxmNPqJ5GDpyJ4crErAwQRX1v8uGdzfRMSzGurf36Rp",
  "key21": "4NUJC7X2zdV97oiatdi1pZU7Fga9qdDQm6hgdWAaJJxsbNUsQ39PuBuXG9oM9prCSTnNCjsPb3DLPQTYddqFxWcz",
  "key22": "4vLhkvPWVbB744XMnii3oh1CWH4eCTmBYgpeb8rVRHMsKP4sWj1o7AuNF4o4MD3bWgUVr1xmcq1N1p858AAgQwP8",
  "key23": "3MEePZ5J5PrUNiFJKxS42c4tmeVWrq6P2Yarucjd3sJCF3a75MRxArSYnwUvyaWuJ7zU1xcfrUJRSUdRNrMbBXNi",
  "key24": "9ctvbVJY4sGHrfFkgo52nkTMDftnnx6ZjYY263qX3A31RtFv1W4wZxxpjBMmbdELQfpfHBozXT3aWqDXDibda3R",
  "key25": "4QtQjncRCUNMPBNisDER6SaieCyGJvDfnXaZKSUXzLbwPvY8oxDTyp5G15otYWUERMznKUqv91Nyr26RFcJJMCnj",
  "key26": "5KGrcoUC5cUuEQkcos7NYcjfDebRqD9YdeAKDeEj5YTMyNJFTe519fAEfBFh9PT2YZftJVbozeKkcd8gwb8piday",
  "key27": "3fkk2Ax7uyMAVfB7BbSiuX4mthcnHH4cAqsB1KBbsr3ZTKjr8A3LQhGbTZfXT7LyuHPDq66Py1rdDGGJj8uEbo11",
  "key28": "4NpBrAptHuSLgWFDam637QKt7tuCkECfg4JMyxGExuN41mpd67PcJB24ahcxwQoFzoDqXqGMRfzUERVJR7AikhB3",
  "key29": "5SBiiDUBivF27dL5bbCTVJrrAiCQ8XaNhoboAvVs5nvCk7LvFRZpQRUseDxRs3pfvbYjBbCdR8zFoHSrES9szCJJ",
  "key30": "5jkPRpGp1QRzBG2hc65dRXzU6UHxemLLKaaCXiai131t9bY7NjtFHpBWeq5MC1181taXiRT6Y55RREyw6372amGB"
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
