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
    "2hyhTNCcvGsr3HwGko2irgDcMB4ibyTBFEL8r11buYwxBQyAvuNrFJjStFsb47UEXh9a1wun1FYNmuUnx3pzVDwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ug9VWmTLS9aDK7Xe2BgeeN9kveL5LPoQhGFqM7NCm56gRi69riWUANSrB1XmkKHZRjHdGzebLKBnJmhK39ML3h5",
  "key1": "4qKMbdgY9aQknS9FbkQVsb9UmWRxiYXr8VFckgyeJVQgg1UpyHY2hmKqtU4reJpfbDcAPXebmPaVK8XfwPcTz2RY",
  "key2": "3y3uXNJhKLFXwP62WAybhAKWrsgDKYt25jFScqV1mxu5jwUULtY4K8L7fSPxfpQTE3Xq5X9j4gN19w5VBJPv84CA",
  "key3": "pGEejKHdcYydfbnh1ypRcM7vHMDrXoXC3wPvbQ6ynTj5etk4LRUATNNWCyiQKutSMKMoSnFfREGorqgpmNZWm8X",
  "key4": "3jKPLEdZuYovr4uHGwsfFWBVFPDL9ptpRzPJrjCRLJ7LZ9fTkqJ1oKr6xLXDQ8gukVB2BgRYPEhNpkzrTJzAnXgn",
  "key5": "4tQPTtu2CnWe1vCApCsv41AcSVzkWAnPZHKpfsTT3DPE7SeC9EhwBoeigWEVyA56qvAVCeve9afAQZxP9f9H9VS8",
  "key6": "3QPwp28qrgAd7JNfUeoU1xib7jDHGoaJhRAH23tnvMnsVgcRSEoZetveqwSo5Rd649MxU8Y9vxbdoHXAob41Wu5B",
  "key7": "3WsscdC6bqvGvUxhwzfmV6kkBNBTaziLoy3kVqUkjyTrsYE4ecRU72gkpLC33yBaJBdPmbUYKB6WZBoiRmruZ8Hj",
  "key8": "4g9YgimQu8MFBWBDfQpxt9Tq2mTRtcZdLiT9FS326oWptvzospDFQ2rsd42E8h7yfSfL2Vsh6yvbprG7sog7wm5R",
  "key9": "5kuMZYk5zRZ5hK53MoXgvnNKsRuzxNoyJGJooNYPESGFxHcSLupT76cKpzohZUBL4nq8hHLhW6CAYkuELawrjNg8",
  "key10": "3aJgwSqW4n4G41Sc92sJFtBsRn7VoiEucCQtcyDnATngyxVrhjUeBpp9DqbHr1oA6kgJyZsJvbrxtY134BC5tyAb",
  "key11": "2YQNxtDwcLAuxoboL6CTXfYnZPNb83odrWQ9FGgTdZcGH5gx8xzWbUd8dYTu5CkvW2seLhBAr8KxUo61UqKjnZMu",
  "key12": "2MWoKiS1am8F3TFL3wthjkKwduSEycfnNx6fL5yH5Uc5mMZ8JhvbPBRZkFB6vNsKGPfcj8tHCvtXuzES7XMnjwMo",
  "key13": "5fRoRmrjCsB3zgFMARFo33ZSwkYusdeLFMjMfbRNTwt5jzhvKCGrPpAoyzqrXt5okazZ2TMjYWXZ5pM6YeBGAvDh",
  "key14": "3GmJ7YWqzJsGctmKTkgCn4vqZv1e724HExWDn8etsf7wjt1ViU2NRG31L9SSoyzmpSth8KyjWPRdjWi1ngBEDrW",
  "key15": "2AUrYpVP8j16QZB8QRsSjXAPT1AmgYWap32jHhPtS4mFz7it3wHNfKcjBJqx6kkeWqC6VZ2fm9c4zU6bLUjzJAeC",
  "key16": "3bEdYnhrPKvNEd3ux52i6p1D83p16x7J9gXk3t1Jaz4HLESYJ4TuKSPnC7sNskfWeUU6Cy6BkJJvgE6svrfA1QYM",
  "key17": "41P28V6Uj3tLXsB2rbrtCd8exBEjyn6dLhUWexNmkK9DfnRXqzfQ3Vm6Y1bCM5hwo9TZdQm2GP9TYi4CcaSw8WdN",
  "key18": "5gKQn3J1MUQLfbxcsRADatGdvqQu37g485f2QfYx9RAcxAPRuFgJ2MF9jB29DZHdNH3W8RAXE3tDywyKdTzdWidX",
  "key19": "Nr7uR68roJ4Yy6x9caxmD7v9RVX7u2p4AnFJuQtRbDF2yML9EvzEUTCkxrhhj7PGBFoWorknU9c9rqwoxrEMT5N",
  "key20": "3GzrR8coTsDsueMyYBQCYMYKzM9Z3rEg9R2wz4Yrg5FtKfWi27R3g4jtBx6BGwwJcBUuttdUTU6bra3qMSSo4EC2",
  "key21": "37dgCddz9PRNsgK5joMy4ps8VRu51xN9VPP21d1CXfD2MTS9sLZqJvF82in95mARvZzBbXYR8wuSK9wycj2SdJDJ",
  "key22": "5i5PyfEAZEmAUqhYwDNUjDbvvKUqfx75EmupERDGCNvdZwYnRcxb83LpsB2whQxn7oowxa8CbMFiUC9sjgLXNhRg",
  "key23": "2awkqBZvhhuo2ZjhddXe85qTSqhJ9pAB8i5uxdZVueecRvzU8XtKUGPMRioC1t8SPjeeHFS82mfbivqMTVFbnxbX",
  "key24": "2x3gChz1WSiS5CtQ12ue1XM2yDER7Buwt3fXX2TyXXzMRYgVmvnRH31qnzPpypbvJqtqTHiLisbAP5X4XjCoHyHg",
  "key25": "2NfvMPhLRjHExJ2L5LBEaxTCbkrKsq5Afa2BemLJEgtcpEYZEs13DCWUfx8NDMgNR1wvuFFFriMszt6vTRdqvQ67",
  "key26": "3KMSBoHdirwBZoU4zgpU9D7zWwJifeWRAMycM9gFhKJnGUk4K4d2K1rVYfDN2rPKwAJ2GrNd8sR5tgCHBP6JH9Eb",
  "key27": "RbDmzxZ2vMYFHLxX25DnMVeRVCsbEsPRhrZLMCEfnFMckpiDo4mZemnU9VG4uKMXHYypBHLe4utkScWhwFfvZh6",
  "key28": "dHzthdqv4VWvuBpHxXgYNBuNpUF5pciST5th3fcp7Sq4gMn3UWmEkrBPKRtut57tpa3NuYBEp3ciXEUZRUcEBH4"
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
