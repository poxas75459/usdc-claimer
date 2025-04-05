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
    "3WXXnXDwmQbpRgUhAyGdWQLLKtzSdyPQsjADHCZpcGDtUUmBGiVofXCCRgxEFHM2pupRDzpzucK3bzXavHfU67AR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DukQ2oP8qunZoXcX4eMfYcPGqsNY4oRXAF72zNSCuiJzewmvgWGEsHpNKPnFPMzyFRD8X7JweXocoTDXvVoK4Aj",
  "key1": "2S82MmFknzcNt8RwZYVLY2qTUVC2mLBbaSjiXErXVEtfX9XX4yFSE117TaHHrYBaGHoQgPdvSFogzSv4YzU6uu3Q",
  "key2": "2oX6joWzreqwXTgnToKc9QTTVZxqXJVE7Ui2rksXsCuxDWyVwXxsHX2KhM4FmiTqd8uxc5gfQwEXZj1XaBQeMdRY",
  "key3": "3ARnobJvDs8pDroAboQAAxxUNfKSNSzFKKZrGXpjoqevDjG6vYrJSufwj8MUgArzpAQxswLE3weKu9P4MdHaP4pR",
  "key4": "4VsS7FZZWeRjkidGvmxg9t3dWJCxSVA1PtdJZzfDzCXKweQG98Vu9EFYizmFxbAbc93UHyVoG1kp1wbEwD2d8uRq",
  "key5": "26Z2qAzBSt86mmfWTrA1kC4tn3M4p4U5Tb1Rhq7orUcTHPtumGmMKQFMJvR34bfxnhGY6o4NkKyCiFJdbVkpkzQh",
  "key6": "4tJGteWzvJcUE2ZxvmfPt3jnp434HL68AjoZo5Qz7nWMF2rhyQfhAeVddUGRtreKzVTd8uLEeMw5LFi2NFLKgm3v",
  "key7": "3WGWd2Gunt6Re1qsWsNM1c2D3d6KctLkrkKdb7ueYhqhxotMbQdLiMTHRof7vdAaN1VQpu4Uit6Ydn2kZqF9vN2b",
  "key8": "2MfQwExMkPWc3kY6ULmPeykfwsiEepESWJjcwwabPPcPHVe7t6Hmidux3sEQ549X4HHXohSi9bTfcR3njyTCsb9Y",
  "key9": "44nqsyo5VFuzt1LDMMDwKj9LFZGMWbXpTLvX6pufM4VujX3iHuvctjXCv22QBDk1nRa3LJWu2f5kwDv2vb4Lhy3V",
  "key10": "3fEAjfmJwiagzagAevkXT8AmjmTPWrdC6UDuE862turyBAUhtpKiQdYSBByGZpCkMEFZ2PjKvjy7QvcfNif2arHN",
  "key11": "w4i59xxf2mti4rjyUW6RWRuS3YZ5NbY43nGY4N7BPmyCRY59aS36ErywmpmssKmeJdZJASB9t9UAXcFc6Mvqezo",
  "key12": "3huEN7N54iKj63gpUJDR6Shf8epQSsHMnvS5pxg3qkx6McukMBcSjdYfMfxubCtSxDZc28HcbcbfXetLMYK9Po6u",
  "key13": "5Wew4PPTnBoVn12YKc5sgmWvxmknx5x6Acqfbbu7onXJCPzjfgwYSQYiLoZ9LzWWATBx85jWxEN1LbtnBcxbvkPd",
  "key14": "66LDu2bmgrSL5gRWvYXDGFhNPQbxubxmpr3krbDh8BCLUU3kYpDVL9uMX9NwDMUcV4NpjGQxbo8tRQPhLmbr8udR",
  "key15": "wDJ6epGLbDAEADTXVjouDzAbtkgfMMiRU5xFRWiBFs7rzCC5MnBNABR9w92HWYkny8nVM5yMsJV9mipVj9gnvqi",
  "key16": "3bCvrNJdVhWiTKDrek5KPbRHErC9Zt1nJVyYdiw5U7J1u4LBhWbDkW9y4KrEruKtrLjCLPhgMyF9RaEGtBwuPufJ",
  "key17": "2ZJFENv9FFkJfKSctVipzAnViXW2TrWgcRgRfD78ykDbDb5QESxEe8idSXnYNAaD3gc3JzcRRLZenGpfVaMta16w",
  "key18": "254wxWPtSeX8UVG4raPrRQHnS5teSnM6dwwjd58HLHgxbUwfNceGPxpJGgK7XQc4mEHqr3u8aL3fqM1RmMCoMwwv",
  "key19": "N2muJu4V4ZfFCRDeyQj1F4L1c8L24FxL9mQFV7pZCMThuTpStPYoMeWqDJ3cmJQmiN6NovLuyzAUXzLzmhyrsoa",
  "key20": "5GkthdvG4q2LbkYZWCfD6A8LR99uccNBjaaDXUXoa4u1XvFaZX44cBLQrX2QsfMLZKL67cs8xenW2eNdJMjSwTEv",
  "key21": "4sgRyXjcrdXGUbRwfTL6PyQtGy5CM15fvw8rnggp5RysJXd11sCEqP2Hr5Exyjp3XU4YEuQisHQMNvhu3vQBC4DZ",
  "key22": "FB2rB8bo6CbsHfQT58UNH5NAXg2UUoALLS3sQxdHMDVYDnMakbbvTw8FEbVCnHWEniTUH8pH6bBGfaiZ3inK9YZ",
  "key23": "zqbDewe53QhfcYoM97u6DoxokLKNZnxZeDZ4wYFVhGFeQiF5WoJNTpkpdwNcnTnyvXpo7kbYEZUMvAULJkUKgXe",
  "key24": "2NMJRT5RPwZkfz7pdwznaW8DcpvRk3TYa9g7Ppw1eXLiC2K5Wr89NuFVGZfsvoprbmeqKHypEBxWV3QBeE3BFs8v",
  "key25": "5h2uR8eS4WZY9DRHkCyVsqWT75JJpxG8nNMenJXQdZNT5LJmVarZhGZnjgvBsZqPgVYuR4DZuT7ZbyiVCNz7WuJ4",
  "key26": "3LRvxgpEKpW5M3mT91gHkTRcpc6ux95EKJhc3oVrWGgjeauPs7mf4GyHmekPrKM42urXsxkoRp1RW1xybetu85Ht",
  "key27": "2vbLx2Bw3uqvd8nrzVzwWa9kJD3K7hdPbduw8xZv9QPCUB4h7gDpFSQAjKq7R9Kb4xARnHYojrgJuQAzkUCxpYB5",
  "key28": "3WJiSbkSvqBH93QjrK5pzqnA3n3rkiYsrcbMEfMZ1p5sMsgvXANjSFwmbuuehoH6N4K5g9H7RnGKuZzK97BTKZby",
  "key29": "mDuKzvmKMxRBiU9rKLhy64qjNoKq6WmsF4S7GKfuJquC3Sb3uoVHgmerz67tZBitSgodgA6eyXMRD9CV78idM4t",
  "key30": "5qvSn1SFBktiKGQPHdUUQdQXZNrG1JL3EfMAffoUt5hs7qf1f98qs26DCePHbxCzS56uDSPozqyoS5B1XPuMbZQH",
  "key31": "4LyBMEkqzsdxuGTSprEKMBSdTVoTSHzFKJbijHx1Adsa1CtSnmYuuVcsi2au2m6TxRmoDXRRzRCsxs45hapxfLnk"
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
