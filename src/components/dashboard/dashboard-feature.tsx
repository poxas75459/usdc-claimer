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
    "3uA8v1goE7MAVBmrQ5J6GGt1NJqv6xfjhJibdtYbszB2a7aBVp2cpx7wrnJnryzu1M9vR6Jm7iqZnyEciVYfzGWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PSLHCgpr2SXoVtrXTrD8KNSMiMxkyjkzei5BZd8mCSsH2C2v42aCB1RAgfzGxVZDotwWPqveSS5je1fJ3jYPvf8",
  "key1": "3X5gcaGX4bV9oJGoZvM3gKLx8oDzKpe5vkuX1HrkpwM2pDjM5ZSe3ffWDrJCzh3UMKhVErNxu6DiJXii7kaVQ54t",
  "key2": "51xPazuFPzBumkVrUdeMz2hAxzoQWkQynf6uQqrgsnKQzbbAhb2ooDVyX3oqNFZsESn8UcZQkaDzD9BYPG5JWpuX",
  "key3": "MGX5qUJhq23eWCuUqgDvNDZMqJ3EB81cEHpheLKM5g3VSfJA6kmknajAYK71NhJL2xJ7qm2LCVfJp2eMMX22Tgm",
  "key4": "3apxSGdncMDNCheNKq3AHVcm5Y7PKAR86AbtBuPCnCj8DBYTFVDcrfni71TH4VnZY9uzrPd3YocwFCunsJwHEWXc",
  "key5": "2fbq9EAyg8iUDmZvr84VpBZa4tZQ5VzaB66ZfDcaGukuKfcP8kX1j8tPknb4tY1h5SnqwnNDud2znCyQqdJxFPkN",
  "key6": "2ZGsHrxQJ6ZAKQMgd7tfxWXH3U16NHu39yKisZ3e3y4r7ZkL8yRNEujWDwZDmJc6ynQpNqoXUpK4p5bcyxFGC2A1",
  "key7": "RAPadks2A2yz2T2163dconUTdjJksu96qFM9zuq1tpapAvFFavfBkDFLkPjoGVWuBKPdyBkKqGh2aZoebrcGEAY",
  "key8": "23svUrrPrLtSwzRgku1GyCYeL6a966vPY97f5Af4yfy8PzaEC96UZSo7QPdL2wnWbtvd56rkV6TEXQRr65h3Pf7c",
  "key9": "64oq4ZfB7MuvFSqMYZn6kxsgr51fXrXopsPYBh9n3DhczcZbsLCvC6yDCNPyg6ywkMWykzsNxctUAiTF5dWexUPb",
  "key10": "5FmL2vnPVVBKqrPd3fEjpkhx9qUErwj4XjxpM884mk6cv7eRsYFZMyB84q8WHyDg9b5EM3KY6RZcimoZEDqX3N4L",
  "key11": "2uHoWzwE4UXf2pCCTQ2jFZeHUa1K4Adjme8D3rby7TwRzcqYT4F6Xc3DJ9qicdWE9Fpdqfitz1Y1ds9H7nLTqTEq",
  "key12": "cmDVh9sPbWRCPTNXxHgX6uU2H4yFrjdupYBtsFWVNgwVe1WwM62R9g4feJWiHZem3acjucTfSPSNvmJpiNrojh4",
  "key13": "3Qycrci92QqZ5Cc3ZsswXKicv1XZR11CXpfX7cUCCdRZ4kNZGZpS7oqqpbqYC6qrDE2M7Hoovf9bo1DZgxiFyQFC",
  "key14": "2oBcHScEvjzMHd3zVKQAf47DqwpJ2rUW31vSMnqkgJWFBAH5vp5BL2ys8TjaY95WrbDNA5iAQomjm8yyLiFJkqkJ",
  "key15": "2HEUEN63EJhKatpe1UsB8cUWiHsBF8tKfvAaruYkFMQVebvcJt1SE14ykqtb4k78crLojYnxJmeRMySfT3n9wvj1",
  "key16": "5cM1GsEj3d93vvheXTazTiNqLhoxWTxBT9EVMuxFiaGq1BMdZoA8ehaFf8XEA3Xq5fBfJHSeakqxw8xQj7EyB88K",
  "key17": "2D4wcJqQ1hZRewdzEER2UMbZFjGJdw7j9ZXCAyTLuPcEx3kfH6KCuN3ggrf8WrrnDmqWHcGt52MnMGUix9KS8aYC",
  "key18": "27sBWVZdR91ovvHhDgrL3YP16AfMwjuAW6BPjXiVUJmpSZbMu892WRWTWynYG8cvYykPqasDyNCpiMqAwts1i1zH",
  "key19": "2aZbkCbXyZqhxDuVH5j9Jgrf75wYf57hUhAZqdQVc4VWQh3Pnzf1tG41AJwZiUWH8RSMxCXgeJRyUfnkYVbBzjAv",
  "key20": "X6ghf7qAfU5rARZw8iaMQE2NJzAE5pjSub2VBbcAS2khhKWhFMwBoUM6bw8JxLSJseiq8aSfMktbbazvEiSoSTu",
  "key21": "3DJU8trPSX4E3doJSWQpgsspE7NNURrUZQGfQ3Mh9znNDsrTaY9PGRaymBZcrXg9XMB3moUSukazcXzXdxidntyg",
  "key22": "G3tgqmYrvBFeZ8SR7NJMh27ipRimRh9Qw3PUm5axuFCst5kAvwnriZFobH2xXCyoMWMN97VjCNe3o9t9Nen5ijj",
  "key23": "5is6hqnesP1MntjoAxBAEtxbzT1zXNHqeSoCjQJ7ukyVJhML5THsAfoXBN3xmwz7t8FxvqVvbbwf62cppV36z5AB",
  "key24": "5afnaKioaRohu5xUE2LmCYuAtdxPsrvZgdCD9D8FVgPGh4thgbRFf6hUa7AQcBnFNqPH8yQK66KTMdTxRjKmqRuV",
  "key25": "4aeuBDsqCbnjaQ7bFPEYaXXCm2Bq51vr3Wef9CmTyGnPGhNkMiVPb2tC1fpKrdYT7uSjE5Gos41C8hvq1r8Cyvp2",
  "key26": "3mucrmRrh9ZyUSq51ZUY7rpfnvCkcvSwRbXa7Buh5uqEtsUqAyspr718tmTBWzf19EtwbHNF14BUd5FP6cVwgipJ",
  "key27": "5D34fj24aoNgUGrSyXjGpivcMGpt9NZmUFPbSWLt7VpPnB816avLFtVuS263Ma1yi4Ps7ai2C8B8T7JqN4pWFGE1",
  "key28": "5YgAtuGts8x3f5F3iSZfRC1iRmYfkKRdmfGBB5GKHMqsarY36RYqhiUwwJ7vJGx4cAgEzwCVAeBsEaiUarJKLSTi"
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
