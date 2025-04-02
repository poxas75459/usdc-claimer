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
    "25GdwrbxuVoBHDXzmUGQBfDmweYMiSWjCg2ZcDnhfLNTra5isLnSZEktgrmchfgJQBGiPeDTcGNbJCHNgVfFBBm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TqSfjLcgvixzk7KPUPezbpoCPr9HiZ7SpL6ZmHNWKqUNbnAHpdSHfvuQdF4drbJGBQ8XiYK49R2pFanaq9GWdxw",
  "key1": "4DNVtAaB7GBV2f7maKHsZk1SNn4gWPLQYc7sHp4fBqroUQpw5kvpiuY7adMvjmC1pgseUMutk1xje5EXngKXreDi",
  "key2": "5eWkhseHazmvNVD3q3hfKUx65z3CBqiQiFyQYWc3S4fTfJX5HqTRkpX7Zzs1aAQ2qjTxpiSizJa1WKhkevFasxhs",
  "key3": "41kFCGEJZukEkU67EvEjJXaZwFCVFXya7HVPDvoPBzMQGWzNqkmcxWuSEWMGTe32dEz3FaStS2zN19kw8U9CzFaP",
  "key4": "2jeacT4Hmy4Ji5F9D3jfzJoAZPgi8x4j3BF4xqCxet5gZG9ov59M3QcWMLx1MrXPHnwqTc25RYKD9mb1zLjrU4Y",
  "key5": "4pnkeieD3R2tTfNfq7SXNFv2xocdtJUicD7AVbtUWnMvigd5obTtDASpWpKwX8g7R2znT4yEZBiR8ohMsZHyXRDy",
  "key6": "5gLaZSbzecJgZK146kJyEqABFkUwMN6jXhhDwawDb3egjArxPduGc3rkhoF73pGJCFzAkBi6nZF6tPUDwibF7CaB",
  "key7": "5JBxk7kjDgVuHS8dUpCsrjDFTaNkksBHHQL8HuSyhoCpiXhytmFza9z2t1SoJrBzKgD5Mij5S5abnbCkbmSaijAW",
  "key8": "5TMBWsmfqitmdtHs2Tan1o2JFdZpf66hbwEWgZdkNWdUpfBrTLiN7KnUXtGwy2f7MrJGsRJGxQC8SeDQZuyPFcDm",
  "key9": "eo9qjKKphnBA9ofvBxHQ8Wi4u1PYsTNR8xFL3Wo6VNu3ntaU1TAk2k87prpv7zJuC7yCASzPiCz7ASSnnVH4phT",
  "key10": "xyEEh7yovdrXijPHgXh7Psoq7M7ykDC72beV4n7BwJ1GDuFsJt4raVnw7R2VjPifDFfyfKpz9QKYMwWvBejzvWM",
  "key11": "5crHTuDRWiJ7NtFTAxncyDCwKXoHzpZqui9G3UAc8JFZtit5Syb1SdsdPan6PWhTj3ztV4xJ5Dr3P3fHbn4wJwMA",
  "key12": "4pnyzaf4p9hyWQVvztbQQvppzS8e32ya2SNMWMBiYea4DVgv8puogVJx6sQAL98u1EUcsUZG1MPvDdxFBds5gkuV",
  "key13": "2szEeb4DhenrHB1HimJ8fqASXR43TAyYXUQxJKM7b7v3D4vxmcShEQr51F4upfTJrGL87EjH7BjwsiWR35XcHLM3",
  "key14": "5pUqCeN7NC4Ai6nModNa1y62aef6EaKLgnjGFvdhXp1eibmgmnfPPeRJuBEqLVG9tUnyqP8oUR1QNK6BvyqD6ZSt",
  "key15": "g3vfQJXrbEQwXnX9WFKoJ5RFeQh9tYzQCJYMZY3CnPQL4wgBbdn7WoEMPm8szhvGNSanAStfpUvRs1t5zwU3C3t",
  "key16": "3nmQt9nkHbGNeyUvDu3EUWfcmJHGiRTdL1o2ckEq4Xjh8DjeR6mZSM8jAQdvfP6KFHMfEhiBn4RzekXVuGbWg3Pt",
  "key17": "32TJiH2t5VUHDzWWMwWVPNj4GHd4Yb5buVswcKbEMr7JE6aJpqHjqT26mMLAL3mYSm1MXPn1PeWj7ZjX6DX41ZzG",
  "key18": "B5VWCSzZTfr8B2CYZyn6QRvAVufjaJUE7HyouzaBYy8R5gbRx8B6RAPA23n3jyQ5KSZyeRKXMkFEne7kaEqwocH",
  "key19": "4g1Td4oQjdTx9qSYRZreSvPNw4Ckcbs2kG4eRa5sm9MBiKsZusbfo1qFobiQLuF1Xyxs8qA32xgKaE8HGVAX2pjq",
  "key20": "3CahndLHhR7DvyJTajVvgCxBg3utz4XrQzgQ2FLm8X7XWVuy9awAEKntJw7jjmATVX8ZnZDQEAov7r1kckfHAPpx",
  "key21": "58fHh4GPMDv7L76tpyvzkcx63Ht2aSYRS94itgTKcjbscwf7EWfiGVuJNbyrd9NmwEKpuairWuJYdQabdw7fMThg",
  "key22": "2XHauAWsRRaJ4MQvsUiQjHff4hrKGpsPZYif66wZzi1wtG2bX157YbznkPuoGGdtvKGZ1ZFnukiL5V1QBEKEqV1c",
  "key23": "2CZkxvZZAP8V2RWxfL7KKL5xJD3TYxHSggc9HjYQro1jSrSmKGjhktzS12brU8zavoe5txShkvy1QVBj5AqzZQwM",
  "key24": "3tESfVoHUyrk6hm9gBWCvkyd8LFLNDHivG1Any8uxyBvjYnF6jve9nWe5TjoZuJH9ucMubWg4KEbDoDid47cPDFP",
  "key25": "5MRNPmFyMoieigswzwGR7Epac8bB4dsTbrPcTqfoEWf1SC8vX9RFedDuVUjuHCmWH7oozwNGHkVBCfB1bqhZXm8A",
  "key26": "3DX14DVQsvB3FTdRb46p1JySNmqnLZaA2eYuWtrBL3fDaZvkAFDpgjDCuTsbfXg4qN5soYaUpBxD46BFw5G7oA45"
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
