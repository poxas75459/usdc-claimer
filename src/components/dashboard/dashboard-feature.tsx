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
    "59pb8pau9FZVXq16PpxPJDbDEvgmU8eYY4Tcukb9QncJgVgoceDJD8X74PXbEYkALgwwhXVgGmZQq9RCBapFibMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gxpnzNBXiFdGdC61r8r2qzUaAofz65no8dSw7UAVB5Q4ZYxjYMrpiKJ41P7nZcNdno9GNNzbvShjEcKCbWWhioZ",
  "key1": "1KUxMbCZ8Gzq5ZQNVHBQDCweQWxqk2e6jDEj2fnwRHdMRzGvqtykXGfTATpJPADF2xCT1cHSfBYGAafyJiu21cp",
  "key2": "DpTiM3rquN4oqtcr4qsRWstSSRM28FwV1mCQLsA2DC1824hyXzUaxQB6fe31DXnBBYCDo9SrXqbkXX57qV1EFrW",
  "key3": "3bQRJjCvJvoUuDUDe5EK9emU85SH4BuE9xGkbrGNz6eCDD47hxZ3DYDdpoVR9f2VPNRuhwuYUVpudyUfnwozV63v",
  "key4": "3AApXMwEHWdbLDCk2ndA1mAM8godVu7uuHHGBW59LvKHwASYQiRR2mSxxAQVGDjcAns8fimF9NVeiqumFaH7f83f",
  "key5": "JFFnnZsbwcLAVGs7K81Ncbk4nmZPajYGNFjH1XVcBYx4g5iuXG4tcDSZV5UWwTvfjnQ1pxQ2qSg2izrMcqeC4Rz",
  "key6": "6kXbzTd4QmTYj7xKmkoQj5LzarPyH4FejjyVwHF1AjdL22ubDQSURULZ52aPu8UVjNP9KNycNfgDR94XjNwTxk3",
  "key7": "5Th3DBs9vg3Mcn1JdKZqJLPS3qJ6qSxyc9EuuKAYKceV9DZBGsKv6o5YZCGTESTVR5rn5AEK4g4d2uib4G3s2KDR",
  "key8": "28Wv2jnGTSpWsdx4iy9maq2GG4JgzdtSeD1L8zGfJikksRYVZAAQZxmyTcaAGk8YrCgtGiNVRifrGyHHa5Zq8NPb",
  "key9": "51kfkwSrbHHzYBkwWcegA7MV83LJW87TKpgZKVrLt2tdcuNH58UUjyKGAFkJ6SXzcnsAS7cyM6GYxn7c2ZPLck28",
  "key10": "5P2vCnxM1XMTdvrw17eA3krZcUscHv3K3HsT5Xs7zEfFgvWKNZiZZh2Mt99P5QajHZCPJ2MiadJkmZWswQMHkXHs",
  "key11": "2cyutwVrbCm1GZ2YsvAn77oGcZuWcpprTQvFSwugvNqCLgHtFF39xSQ4kxCzgJ7u7CgJqf38pQrFunM1CQTx7Lee",
  "key12": "65S8276DugZxte6uj4PDoWPvNTmUXHLGH2A2fAiqJpu6KxRBf1wjcJffBqrfEygBafqh1gbpCzwVVHmLrrtVJaMK",
  "key13": "fRhFVseg9ukVG2GvSW9bLniVp3pM3wTWDCnPAe7MGC2PWi1HEZkKEASKCJ4k6jNYvZ8cmdvjhYVq5eKUPKmvx4o",
  "key14": "2Yfn2xshhGaiowaUEr5E6E8sDr6NT7zuk16Ag9NbMdRSiSif39K5SbvoAnEoCx1HkbyibkKpNV8jC4rT5LVFDQwb",
  "key15": "3H6n9w43LJrWrBKyuZHpYcGqHrn6k5XR9P48JGgm6nQ3bmq5kh3QeQ7i3wtSwuqUbL4CFVbxrGYbtYS5YvfAtGAo",
  "key16": "5sP2dyRbPZqqmybutA1Hduq81SK76hjSm119pEgsDJWfhYYhdiPxfAqwhegTzmjfrj7QSwuJFGuaYC9RdhmZdbfD",
  "key17": "oqG4QCob4jzpRMi8G5Us2FL2EkUsuDRmtwKgGa9gqA2WR2BMLENPk9R1DtwN14qFZsZrRNdU5xfmX8hrR2eTbp3",
  "key18": "5QfArqZ9TChuaoYdizBbD43VqKMctWt6B8KGBJKYqj5qAGnE3ePkGmv5yeZpwd3Hh5m7mLz9riGDF38H5hZ41HxR",
  "key19": "MVZyrbLK4gqKzLUoyZ66FgTrSdMpF3RfK1H6c2Gq8ouhJy9QSoh1vRPyCGcA2PMNr5n3tvzVqExBJ4kE7CwyP1Z",
  "key20": "kutpgY2BgPUwXKtp3G8GVUZYXbZXEgNQQPhafj5bjxZNS7yjEeww5267msGGGM5e3K7nfLoLbTfuxkdLJkyGDva",
  "key21": "3TciL17T6aUTwXHuQmHmdP5L3KHgiGp99Bdxn8pBDk3s7sYGWzEF3FVi8y1yQGf4yD59MrdzzkSVEPcquGHdPB9D",
  "key22": "2efrabqSSsmqRCkqyNTZwX13om9mw8dyaajVP6KvzwBL2MmbDQCdxT8jXjHF4ddZg5GXinYJgHDBrnbsYJfgrKyR",
  "key23": "5MY87Tw4neAiUpY63Z6KgheDT6nbc7np4UgGRsq64GWzpzPErXHYAv8GsAXHds5Ro9NxdLL77enMca5FyohZd4yj",
  "key24": "umTyn3aanPKFFx7X6hB3kgbVDEjf7rzoGgeX1Pw8gMZaJjJz66kNkjWzuosRXhtjkfu3BMtsNvVXWgN7BWPsbaR"
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
