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
    "4uD3WzRknokXVEL6VD8jaPmGn1DvzVhDjrM37wjmeXzqdGtE3aZZMQgJYMVjUuByx2iqDEytLcELxD3DNPvoMgHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44TNmvPD3CiPw6phttDzGcqNbC12E52ubnnz6w2cWFwpfkGmmB8Yz2odfgsPgayVKzrAHje4X8Ts9eEBM4c4Mhqg",
  "key1": "4RsbfehHz2SJaPXby4qyzV5mWd2TotL624RgJeHze3WD8wcffRktfMBrZU22qXNmXLy7EbusBind8XUSUXbNGNxH",
  "key2": "4VjJvbm43cf99EaDz3idFnXB46xvpopzD8HBFYzvF3Xitkf5eTsrhhw7dHqXy2cDRL2u8g7fKHMXdHqP8bgEHDcH",
  "key3": "B8MRGwyrbfNX55emkP6nZ66WzuusKUuhJ25Bwiht86aC5sEVUBroVaKrzwNewCsazAATe3hgucatucZ5kLtGePn",
  "key4": "4hLUg3wusB64KiczUwDDE7MDtTyasctXW1zuPt6wrSYseYuFSKYdLJb4tqLGnCj5WAqusuhusVzoBUk9uBdB6JAp",
  "key5": "5qsb1hLpsGFDZsxgYrTYmL3LDm2VRUWnzTSrPjhQwgyqfEczciYzuD8RqWxNggB35WaKXPyN2osxyxTrr2MPdakV",
  "key6": "3GKPB9rocEPhAgfsCRRRJyHVMAvAh9BuJCdkCUHbWghvqvnpDM7Y4tPK3PFkTnAqrHpBw3TkDxp9B3TLixKbuSFH",
  "key7": "59JErTNZBVFSZySy7ZDqTuNq5h3ZnCxNGT6AcMaXYRxvWgYyUjT4dW1KTuounyWucJykCSfEJXMPWKaBQmZXZTvP",
  "key8": "63hQtMNEUj6MCr1hZM5ZS4sxCCzavq4vM6V5dHX1GhWfE7ZwvpsHbHpo1qx2R3A51oDtGixpucYdBSMMnt22Mods",
  "key9": "47K9bgGqgThf6SYrajbtjuE1CoSmHFJ4cgNvu18QyBgjAQNaXfh5UA9sTR8ozLwVcSDkxDTruuganYJKazqxXmtg",
  "key10": "3U47BeY6uCUZF74tLNuNrCb2uJkgoMYWbVF2eJ7AJhkEaz4g2rjXTYzvcAq3zVcqDeRtVsZhDCLe2ef2jH6t5Vcv",
  "key11": "3QNCLsJQxVZUyzwUdxNjRDJp7c93v6VfuqaEE4YbeiNLMPuiS4KP56ZjV9jFJA9M3pRsGrgBiXEgPwnMMuRRrTRe",
  "key12": "2qnLZiv17rRwqGYHXeihCdq7uDkWKJsfA3emMqXJqjD3FGKB6LsGdXk1RFDahMLaLPr6kmKgAy1hLE1NQ4azRzgc",
  "key13": "2XAcXTNQtx2QAyBMG1bV84kBy53ihkqPdCWyEhNK128Y9BfHGahtcxK97e9WVaANDGj2qkJn1PiooREpxfxLNce",
  "key14": "4EqdyGTkZuxFsxf5wCK6ewY4a3UR6yUwhVeZHBUqh17rncrV28RDDsxghzAKi2iEPmNm1cnEE3VC8eYJ8LZ5rA5V",
  "key15": "37qGqLVdvaHMSvSQuEfuqCM8WGP6n1wVCmJ1S6v8m4BTSiANT5raj316oaTt6JxnA6dN5rjpZJ2Ucm2Fm6pXe5wk",
  "key16": "575541TxnQjcELrGnqt4Qh2fjVQ45vLxosERGhZ5EadCVmKa7XHCs62Wt2Mjuwj65TkHzDWsBizxr98y2Sm9g3Xv",
  "key17": "28t6NoHSSHPPAgdLpvmsy7ov4QjaCNYYykZKecyxJ8xwvUTPnWuFbHXskSshHyEC3dAUJZYL8AKwLX9h4b6EiGNf",
  "key18": "T2EJG4c7sa3RHJaLJMFKMYBLByQbfaUKHfBUxcyMapPvLbagVKU63iNVBtxnVgXtRDnHYwRRcS59cSkCMF2mh5D",
  "key19": "exqrjerDe87vmVr59F6y9dKfq4XA9KfmSVH5yWCW7ZHYPJc4vfh6SaUouZscMZsKZs8J1sT5KDd3pK61FpxuUt6",
  "key20": "2ZzTNFnTvzRYpXfxvTmMTu9qBvxEBGEGviLVGJZDb2QWJTNa9QBQ2gri9AkF3ja8gMZn7Hat9Z6qdq5SYa7X5oqJ",
  "key21": "3R5rM1SeaAD9WVTrgXhkNhRjbew2HmdANfA4CgrQgjXZYR7v8KbLJCvxDJtWCymJQAhWYzdhYCg2hgqvGJovhHEM",
  "key22": "4hv6jkF55D7y3toRkvrQL833VQCQMaig92f9RBPgYc21MShC5X5CduZhEzzT455catmHmnmv4GzzKWqLJLwNkTNr",
  "key23": "2P4qj25TfZLVjaG2oQUe4CZp819K5Xy3Mqi4yibfVZkcxNHvN96PK2QgwuqVBJ63T4gGbxsFUWRnt4icXy9zeWwZ",
  "key24": "2rv3KcnuX6TMz46UY4FixwtTHtcfJqQpZYokaZ5ZYSEVV3nLh8bWQtNRKFQpzpdJVtA6x76auZRqbUvzc48AhvmB",
  "key25": "4ppVtTYtRzAapShYbAhFvL3tPL3QSHkb5Wg9NQDAuSTjhjjTzjyMHS72pDr75TKFMnkRJSbPYNAbzoGA1onUYyhC",
  "key26": "PqqmUwbcD7HmprrNNywC115FZ12vQSsmZRDwh5Hwr33wiWmxq9wfLh3L3sLnAC3xnfegduUKQuz77eq1jt6rMLe",
  "key27": "3TJiEQCeufoDUNfzdc3Y4CGhz64eSvusCkDYbsHA8UBKs73tm6ogwS33QCMdQQBbNnx13mNuMCdn8af7GbAeqUga",
  "key28": "4VBn1bGJ3FsQBZ3vEeTxGG7RQEb8CuEe9XFAT2X5xq5z65ndFHtiP1B8AcXmkeiDgTZmRHw6SqLL8PY8TRXb24Uy",
  "key29": "3yJH4ewMWPetYZqaRgvHpMt9NAUJz1Fm4o2ZvZJcVYnVPBG3oEct2RCS42CWbcomh1CmWXhuEzWG9W1rKhWHWoD9",
  "key30": "Ad9TVH3p6retFxQxZUz1tgfG9RUwczJbvuFWEs1jyRtB4NepMANVi35okwzGw1Z1wCWqZFuZchtex6UWXucRMYL",
  "key31": "3bhGsjGYgJweZAZ84JH9c8NiBirAuCsMzTvK31PYPShDQ8Kq9c5FXnjfSzpabP9cmdwjaivqpJybc92pBztRg6U6",
  "key32": "veMkLvjV4E4umhZTHfUbPwo7r4bmcV1jXQ9TrEpfkFTecnBV468xK2TASNKmY6QhGjwooJJJYAT1jAG7cTf1cJy",
  "key33": "2bgUDooQ1trHMcJVxJNaY5aVZEGBB8siMTbrmaCMhgxDZ184T1mNPqba3J9nUaepJcpNdYP7xxo68iXroLbSd2d6",
  "key34": "4JTqLkPNWwZP7Ntd5W5rfoab6aGWAYPUHpEt4f2g2DAmqqgmzvTBUfWTvmXspS6LgQcHbP2pKhU8J74e4NdswE42",
  "key35": "5Zuq39W8bytWqdDKvYgMVBeGkLBgVD1WDQkCCsCJ5grPaQMaHXsXUQgEDGzj9cWX3A6REPfsVDVDZQ2wLLaKWji4"
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
