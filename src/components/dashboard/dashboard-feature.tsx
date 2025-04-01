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
    "5h8b3PZJc2D3UWqBwgNSra1hkbfcjHj8hGaUC6LHzusFouFSoz61kAbzkC5mNX1Ke3EErYzHQoc7DqsyRQ2uDTMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hb1VQQ4mQS9tKZnbRFiQzK4X4APrPtFHwj4VSZUidgGNvca5yPeyjFky8548nnkjVXJyz3W2YmVzuPBPixB2ynY",
  "key1": "2DfBKmbZRzygY9C2uRTgajJSmH8Vg8wPmMKsoMxQ8CUjNCn6261eoJFLpo3K12FwABVZcFHSXTfeKSHPYeUi4xhz",
  "key2": "gr1gfhazGx5b5zACaVyBKzRizYuqZduPM18bDsWgQshzugf4SUaNEpQ8ZsbR5p1xFi6ro3EBLGkv67mGxy3Rbfx",
  "key3": "5nbMGh7rvCpBB8PvA44k2Jq9pxkq2ttEVQ3PDTbvu6EgiQHfE3NLDZ34n6mpPdvvq8P8jvD1sCWEZZxgMXu31kLv",
  "key4": "Hy4qhTu9XDdai7QBDwuCRUrEBQX27bab7xabd2RiGp1jEngFwJyKTutovUFzVnECxbRJ6ht3LP8nJgUSerCoB9Y",
  "key5": "3CVXb8sSuACS4gsj7d9MzZ83AtfSoUSAEDvW5dNBWav8fJbFM1Fc5wcAEX8gbvTg22XuQ6HDFap4fBDmEicmB5Jn",
  "key6": "48EkSZ4PqDcp8zGcE29cQM2CXH6yQPRmhdo8ERYU3yQjosRoCNaMHdTPmguwWqn77Y93HAttCbHQv8nWeRTEmpHG",
  "key7": "5U57jFbz6Hm7aVewZPF2F72MxcwZKoHa564RPefz8T3qonGjmgS9c8auCXDTunHFJkJMrxq8TvSEiNBpqSTWGzp7",
  "key8": "2Q4SGvW9AdLsdfxzjAtzQaBhMTww1HjBWpN27n7goESUgMJdANBeZzq4mMoTB6rqzA3ScN6pedqNXbtkYFmFieCX",
  "key9": "2R2GvPXmR3qsWzkQQTfHL5XwXgTEXKtQ9PFu3JMjiV1gohtoEqRkPRaV269NVr2qVA661JEHbb8XFeJkMZuMeaxs",
  "key10": "5KQdnaFSit6cmZmRbwmBdMjXETX21Y8PuTUn4WSahkLC8d4C3ze2bcTAZWByW1yEjHtVGdqXNdt8P6GEWDRnkeyf",
  "key11": "3myysZ8zdtBo6USz366ZBJxmQcKN2YNpewwqy3vznfDMmcGDeyaZT7tXUdhSLkmJTnt6vdGJAVQ6Y8U5ThTc7jA3",
  "key12": "2FHJDyAao6Vga65a3HHd6a5kwUf2eU7MyqbvoDX725XVr3vk2PNDJAZGGCFc4ytXTe8E8vcYdnTo922efdVpMriZ",
  "key13": "4WFonFCNTiTtVri9sRYmRncBk5mVvjg39yKBXzLei1ao99PBmJ1EmAqqSzsjphmp9pGbnjfpPo6uD4YbU1uz4M4s",
  "key14": "hTMWMYLKjQ2vuci9SudhQdyksk7qHjYeo8iHXsBdGWUFCiKBk4WhnTGJrzcexmjzmLr2JvXGY4KHi5cbaoZMatq",
  "key15": "A5fksiB84XKrj9dsDukHftt6TWEUh2AmTfcRudi2r3gmf3LV8nJ79ktM51ubBMn6oSMFszkRGmu68xQbh3B3dfF",
  "key16": "3f4yFbeCTgicXeQvm5aE3Pi1r6ND29J64UAYRroS3xRS2mub9jKy7XSPrvKNmE1BSLTRQUZqGbnLJw8x7ke3cWmM",
  "key17": "2zyS8Uc4wQ5jfcYeqMQsjmaqFhDDftiaNB5x8Wb4dL6ErRxkzg7BCPmpvi9BHaNi8RkMLyMbC7Y6FadE3B2vns8G",
  "key18": "41d4vF3z6XW1SoJNajGdpmaxm1HLARmtNF3EMLUw44MbwQfG7zpiKnk18NGHhQ6YoyigUxAhgEf3Yp6WomGfMUx6",
  "key19": "2HHgXfBa16FjyCLRxL2a5AbD6RxcyJBZ6mVRVDt7HWGwxLhoaM9LmFtYt1o4franpmetRKHxX4oJCPtXjdPxAhSN",
  "key20": "4P7hcnbADpewjWnzZ447m3VFwMz35KkCiYofj5xNyBXKAHfQeFmTufPyWhHKnoLZfNiLAcAcniyK7jdAWMQJ9785",
  "key21": "55fBvZmYk8QL9bdJbp5tAkDqJCANSdGDaUiSjcfNmxeChaqaVtXqjoZeSGJTkU7mEcLxQ4rUsKiXoLd9vE4zS6yc",
  "key22": "2ypsDYznVbGE3gxBb1ty4YneW64VoydN1EeTm9cFEFXnE3M98qapbuXg2h8zNhMXSr7f3hCZZV9FuqAcpqsXBAEX",
  "key23": "4esqGLP84fpwHN3WWyvf28keFtXrqmAges9GrpnzAKXPzWyVbPYRoAyLzLksNERcm8P2NZFn521TwApYMTy3vrzs",
  "key24": "4XNEGXFNEM9RSWHPWDzoV1pSUwohFCTzo8kt7c1RXVC1DPU1wbXWV4GMAvXadvxu9s8VjFjAuvLphaGQczS3txKm",
  "key25": "44Q758HD9UikX14b8Nc1Zqw6cnbkBRzJeArCY4bsxmFxSpEspC6T2JUqRejfiMPzAM5SNmfz2Nd3pSAcnsGf1dxB",
  "key26": "ZZUn2pHgcdKthKq2Gv4CBoPntPN7aSbhR2hT24Phpo8pQyV4zLdMBNrWzsjLjtxtCHVxaj5ihyvWKSiQ5uvsQ6h",
  "key27": "jSvL3R5VwBu6kpqdumjqXwVfRWVKd4LszHC1Vfyrpt8XHv5Dzwrshe6MVGZTVGTQhBsUL7JYkmCPxefM7XDXeHB",
  "key28": "56Rq9uXuBZLBbuBvzKjDXn8cXbKyXuG3wthpRGbuUCoo64dow8ZAeHZ5yVNZX76baV5rrvnCyMJopHxmt3W5YtfV"
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
