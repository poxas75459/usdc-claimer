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
    "2Jn8YXARMyxKjVu2TZ6B54BzTw5JEFhEa3dm4VCDoFGuAXecdsv4LgnA5A1VwVzwrLv9JujhAghdHp3vx4j255Yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AuQ4TMEGU7oD1FEaX1eRo42CJiE94y4pZhMLhmhuYenADEv6UUPKbmZaRk6ExwDYyboxMwkD9DMHXSCbFrKEkAW",
  "key1": "5yA5CtdSogyFu4PQSzX64967StxWoCfkcpRvLRd8eQYL2kj9ee3fJ5jK2ds1nygmTAMpuofQzFh8RhwuQLZLXhBk",
  "key2": "3AxacC2kTirEQiDCwfUGuMWEWGq5TjNW2LvwWqAYMLhkdoBKXgbHxtWgmc8htHvHezMAgbRa8CPY4d5ncPES5k3s",
  "key3": "RxfhmuK5dNvVfBy23Fb2V7SQGHp6xSTAjmp451AJQLouxCcYhNBMY5wgaLNm2t4SMDHZ1111hYzy2ueZrymkfBL",
  "key4": "45JHXFDMpWCJPoQPGdS5zD8soJ8gwdpUvoWqHETekmFB6SVx1BJ4pTvyziv7pReNDPAaTw3VW5zXLzUTTaQeRXeK",
  "key5": "eXiKquD9kYZmwi1AN8cdAcfmSKsNECvTcNYVjG4qhvmW6gqMQ7nusKk5eptJnKMeMQutByomuMR3LUMt7uRXswX",
  "key6": "2FwSQ724JFAwaceP5Xq498DwyPuaqwDpTLta9DwJquAQD7xaRY1KuxkBTRWnSuJo56N7jFLdF8fFaPFgUMphTudT",
  "key7": "3FUM3VcuiDTojXiwhHzFtvn9QZYuzUi4fn64Z8WT2P62s5oRgXn7HTWAuAeyazTLeUisreEnC6eYsJCafFdJXPp",
  "key8": "3441mvDarCRfYJd7DT1rr5pKqaw11QvEEfhaxUgggiBYK3HSq2TQqR3LgnEXc5KMJSimAHsLHTLgv8NAzt4LS4Mr",
  "key9": "hfSeFm6bP1P8YQo3m26N4Xc76dDEAfr6r1jneA4EBZ61qzZaXEC5ugG5XbFSpFjUNNLed69giEcJsDZVzF6X2qh",
  "key10": "4u2CkVuGY2XxXp3ogXLSnSCAfQHRaZGHCHwHeakp2XW5WrXPFvAB6nYHwSNERbUMBhV3T3pJbpSZyuMbXsQcrVdo",
  "key11": "3LSpqpcWiRi3vbXYfH8a33znYLTBENRFiGEasb7Kym6jd438LbN2NVS3QZF5ZVcUVX1sR7eCqZzDLUKueZphtQMm",
  "key12": "3iKk4xuwtxNfNomAxVs3H2T2p9c38QG4kPYpY72Tomu2hynNHH4M7ZwCSs2ZQwgkqoKEKe3bzZ81NW3RgAdQnCB2",
  "key13": "3bPirg8N53WFWVxTUFaksf1xTxvump8mwdZqBFYd85QVL9UYFF78hnvyUJwoUyyoL1535VnRTRbefPvDLFtcaXbh",
  "key14": "2LibLhYnu2KSRxzXQKNkUscRHCuVnZRFYAPHWkP8Yh7sjxQyArtDWNQrY8r7za4LipDebnjzzTimCsBvhVuinQAQ",
  "key15": "5F6UjgMNdjMtQ2svXPejqHquKLcFCtgo5ra4Uw2HoTRnpFHhavb2cX5NVs8xSK63ApK2t3FWYNLwbPDQRj1hoY5",
  "key16": "3RiCLwSq53Csnk4VqBx5f6h7sj1eqmY71VnVFuqQ4kgtzrmPwdY2beGEC72MsTSFtHdCD3JJ5xkaFowi2sVmzbAM",
  "key17": "skPeNEZVVeJskQaMwF51Uwd1VB8KVVKiZ5285rjbJjg9xrmg36rPnyxupTyK8SNtzvZQjJUWZyyYaLDpfjG9DFt",
  "key18": "zwZ1daD7Lzs8UbtH8VSg8an6HaJC6wbK8JkibYtGsLsUdbgWC1MtDzJWM1g7Czn9dKcgaNVrXJCbzfnfBYenN7Y",
  "key19": "3TTiiaHX4pDiHkKn1woqwctw9KxKcsRbhYcUWD2xxJQCvgSxithHWfojY1k6jjVfMrwkDsb11GoA2m6C3ZMJcW6q",
  "key20": "3sn9dNmZh4WFofYBD3zsuwL61Qf2fT1ioJdWtCtuq63RZNp3kv5S55PrZAP7upZYeyHPfhnSm4inuGQRe7p3xqZj",
  "key21": "2rCi6zDdSZmLCqXnCMgyP61YBJCDkanAd1o2eyP6zntHwRfFeXdRwmabGCB5KPYeU4nz3Hm9fcxAf33fT8BFGEbT",
  "key22": "4uZnuPJ3LLerE7yRxCWKcrz3snZZakcDUXfmRakz1ruMYZbAcGz1BstbubM61cfvSkvxJbCDZ5x4H4NNLNPMpRsN",
  "key23": "3zY8VJzc5EC7Lrodg3aRYvSwGnh52pBgXNyWVUk5oM7AzRwh8AbFrBqQ8umqvfK7X4KLkFTF7X1AmDXyQraKHVUW",
  "key24": "4HYcoTCT95zFaDXPgxEFajEN8j5kyeCiaEPhXDgJk1rTN4LGQvrdm7nqvgk9zsGmy2jzGnkARWRZeXkdBwdiS7r6",
  "key25": "337Xy2JAeMhu9k5danAAikg6fDwN9QDpdu97fojnC6TcazACxsCpwX7Qb9yHDPSjtT8iMhM2Mw5RTf6v7tUT3dq2",
  "key26": "3j556KG2xHW5fkGaKMrKCaDPEvrRLcFP9sggESQuKjyKiHoUCcMhfrDCguu9EdH8MyXRXrhjfgUJD3tLG9Zz5QaB",
  "key27": "2bJ2i2Mm4VpzBjKuZN784hhzSEUhy8tGJ9hBrGNz99BYd4mRNiHo6LnVMAw3nvrH91rk8VVHwbyBWKqt8pJFe8YP",
  "key28": "4JXgY6pFvpvDfKT63Es5sa3Y21i3LTcnGbeqe6BCb8zNfxCSSFATi8t5P58N1A8RLDWhTRcuacwv5RRnzsFyGxn6",
  "key29": "GB5SK1EJ3FRtNAgwhsa7UYfhT25wJyJbpXNY4rNpzM37EWhpRJdBw9ZLsvL3nVoMwGLTCCZPw5wZcieRhj91iED",
  "key30": "4LcCm5t5RTcLzKZVxZKr6q62GdPZWRACKBHbbA2wvvyWSAjGJX3oqgr3FdppAMGsfev6HdrkJWzrXLF4KA1qVPV9"
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
