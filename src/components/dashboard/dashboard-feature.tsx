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
    "2szVcfaBdgVqysFSouGjKc6NzMHvxh8HMSGoUC1uF7MJJjdUFFU3xNRghMnhRgf3XtW46cHwPpsfsVHBxMhAkfqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZH78bpjjZcprDaP4xxPPd1LYMcEJpC4BxHGiGMMgrfQuyh5FdWCxypc6LzpJGGAPsLWLDorNghdAQFKpq8rcPPZ",
  "key1": "2SWKozKorejzS9Gz8t3DB48CfrsSagZPDBsDdWuopnQ6JNcgpRrNrEfvMbgW7A2tCH2uvdiUmUGq6oLyYm3srHq4",
  "key2": "3paaSmt2tZVbNmY96TCEsvsN8Ar5LssEHZBKYnZzdQNKMMephmm14NzpP3XtxTBChFHjRfUkPztqjfXPJw5X6AgD",
  "key3": "2psWQmjkfpRNoJUWFQuXBCfvykuGt6NTjZKPTupiaMvkM75ujBjGevf7EWBZbxmMxkvc3owpXsS9BeKkyvmJkP2",
  "key4": "5M47HLTN5QXUUYi4MRpPH8ULncGbgchigvQCrwKTFVaaKVR2nPRftbmTBzDa4DJXJjTt4cqgpvormAtGHkwHJXZj",
  "key5": "4LRzamPk5BRMGGE9Yi5G94A9FdGo7txLPnJjRYFJ8ywtaDQWhixLTWhDuGYua5aW4yBurJc5FvZyp5ecFM3zDsT3",
  "key6": "4GeW6iyJGcBMViWFqxEX11FS4T7yxgrMALhMJ6kFaC9ih4xdZuVcd7srVGpC4L1X2N37uVpZpLvTJiyENXwkseHs",
  "key7": "4DXkZL4ZWxsGxX4ixTtPKCcpZEwS59fKZqev1RN9r9XAVW4nSQkVDxmb8cfuaEG52QZZuarHoU94RGKAH5qgsajZ",
  "key8": "4xxMPrXa5aC2C55U4rfhdqWiW8kKJbsQtHPAzwZoz3RNaPxoBHgpQYuBiuu3p4TvAd6hEN849VkCvqsaBSjjf9yH",
  "key9": "3Puujq3tW2XieQNLvjU5WDgx1pTnuBj4WtMJ62UkzpoJQzr2Avj6gzqQdFdrB1LaJN4vxGe4AMb3AhLTDTLhuqxi",
  "key10": "3jTZBWcN2X2AmyoogcQh2seRRDSQbpecf2v8VepNiq5BB7zA9YmP1YVLQiCHJxRmXT1a6zWK7EFz6xgYo4N5SWis",
  "key11": "iuFMAWCRcc9GuVguiKiMYRyHA6F26bBnMJFkkjyxv2BPYiTPyMUg2xaicdgvCKPT6PG2FfgSYD9cWhDYwWCQnrK",
  "key12": "4tYCckpVDHSEQfWoAdeK9uaeG2g9332C1ThZvQ8ZrRgeLB2cLJwYiC7vtsLYBhYxmE3GWhJeQDoYLJ4BiiGvBwjV",
  "key13": "5NsQf74BiX2BCj4yXVJQXpmnma512j2U9GxL7mKFwLXTPahuesXvEAmjzoQWmPfRB7VzMkqTx65jA2tS7Nsa1gTF",
  "key14": "31jXra9Ze8BuK52FX2zfa8ERRrgG8dD79cNPqEtwbd8UzgMsD76E9LGTqrXGnzQLdPu1Rm2BvXBWuRuUgoiYbv8R",
  "key15": "t622JnCLVfcE2dyt4rmMJ1iUaQeCxAxLy3DrGCGFR2wQfYE3uLgLuyX3Zu84w4pA58TGRUebN1Zs1qwfw2UdARk",
  "key16": "2a3bBdq4N6ihfVn897zVhwTzH1uh2DxPbkyRQZB9YjaQrGjKgNvyeXbBg3tLyuxKoJUj9onaffRS1dNvyJZJZEum",
  "key17": "omToG9HwyS7Gvz5zWpErwoRGniuidgRjmsrEt3L8BnZ76BG946JZYBgKsSRynXcqf81dMF18R3z4ep4JKULHUQm",
  "key18": "4nPVS9uvAdckpbdoyYwo7mgqsp2Q3pS4rtWAHodPEaUd9WEHrdxhQ62zPF9uMGMznVGhbQrrzLiTn8xbta14VfeT",
  "key19": "5x9QdCqtJn9sRkBJudF8Kbz7WbQkfn85MTKX1nhNnjcALPzRQEBR524Ly2CTCkiXdtLp8JqvriU6NizecRzamsnW",
  "key20": "2M6pUUAyDJCq37mnae4tgijCq3jr182cDgPWW6uGxY7EVuDKx4fCDrsmyrYxnPWa53cMKyt2ao75DMP1WS2yd5b6",
  "key21": "btoh3s5BGR1dyNyAUL9FcnLnMqz437oTrbdUqRAVceN4R5LsLLsa9dJ9WHHoqfoEBYk9nD6kxvinsTYzjZrCj5c",
  "key22": "4fRXmaCiW64GisT7NxppYRZeYg3Y98GrDeJ8seK5Ffx94sg3xXdFp48tsLPbKkjz795EUBB8jr52TkcPzakQmz3A",
  "key23": "5m1e9PV838Yb1uiWLaSAPPzQ3yNbNYSeiAkxQLqWaVXEc6a3x7dXRQgtgQtjaGjLpkAM7ftrTdhwquYVZvjjX3Qs",
  "key24": "4vCrMzpA1JSkoWimP61WPoij6G4Ctaxfo9NwMLSQNLmao1VhVJnbZacUXtRTchXWcrZHHSSZdn5QiM53ZxKDJbyU",
  "key25": "2QdQQFbxPbM8VHEqLUCjmxRF2W5HrRbRbTmdAqM2HLYKMZEFh5RDZnxdgGvWPzHfTtqsWgMUfpgqCEm8BqdR5Rxh",
  "key26": "4SGjSHjn6Vy9oMTDne83LmjqBJ7ZhCfpbuy9PXKwYLSzCikpuJxRy1tyuwpU53Vm81Y7BNX8h2QntNDymsqChZWN",
  "key27": "4xQjxNtxhe7vBCecB6jhJ4JCHoo5H2uEqkfHbjJSSnxcZFzegn98rxd7o4JfG2xijpxzXUc7d2j4PnKC6avGJxuY"
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
