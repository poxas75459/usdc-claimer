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
    "4ZENufYTN1nyDM7a5f59s3FkYqt2eCnGCjsmjdrpBnECntdwkyQA4vQvhJUbaBRaMx7tkioELmcUYdWyvyjNcT7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LP9iJusZfuj4mPAu9FcFN18xEyAMM2t1rQmjPkrJTmCwKYUaSsD9jtUcEZnjnGUJfNRS3ZQbGFVpm3BDFSLBsq",
  "key1": "2GFHB8CLyRpp382TwhtNBJQ6gJEhRuZwGpnQQ6TSWbp3dUffAwpGFyJ4En5VoJRrtfRhtRHwKXzSv9QFtsFJTUm5",
  "key2": "2yWWVwmCJiA6GLngDR6DcFVU43oceoQq8PLhJ5DhuJSX2nYE4K4gxYLTvmnaczwVQvjAHaF5fnUbWsWAPfgBRLNR",
  "key3": "5QJdLrYGfisNhfKiywRvh1hGf9s6ngSBSVfYYM3qrFFv7H8J6Kj9ZV72JQU3rMfXWBabiG87FecedscfNoyRz336",
  "key4": "2b9QUkugiWBNGGK8bWAwgbAJ4FcBNbYXbFzaCPcXTwhBT77ju4PYZn8pCrHZg7khdQKrn3GS8yqfnoff4xHGwSkq",
  "key5": "3zWJjs4afmt9Rd3pG57eNt4LWVZavav4N14vcHUkqWHhtazq4pxXVmbVJR6ko1KqJDCR44g4syLhhnNFJhbRB1gh",
  "key6": "5JTrnAXASovBez31BUjPbzbDSrofBMhDBkgE1AfSV5d57fphvHWCYJFcU4BX9dcB4kbJt7tRdxpmRz58txRXFSei",
  "key7": "2inQhcAEVz4zYAnKvc9dw2fM1KwBuCn2h9YDU7wGbJMgje8J9H24SuTz1thB9J1Z4caBHH5SYR6Xez4a2zzaay5K",
  "key8": "5q3sS8eepfP251NKyu9PVsyrBM3YVobXqoJVhwXqEtXTmqFFstyRMRGwMUY2VeRjdrhVSvcM7JhN4qQh6phZanis",
  "key9": "zPAdGkAxwf1ooERuzEBfLZ58753GPQrPdKTL35BsWQnTruakpQ58dMYpVaDCgeT9e6Jdn4bdVfu2VQQA7numVjG",
  "key10": "4H7cwixv9rm4wFyPCgf8xXM7dMpzczrdjFkHiajja8Z5gQt9uAvt7uarrF1BYkc6HhRzGYsdTyV1giwy9ndo3zR9",
  "key11": "5zc6SWjHeETBe2kf1Hh1BqvnMJFrrL51DaDaMgAwvffxPw6JpVWzdCBhhs416u1dVcRHLTypsmvvxe8gmv3DLDSS",
  "key12": "5Jj2vCy6HuMcDXbGZKGeThuRrjfvguaApjcNpQi2MAZGyfvB5VdsvtbKqZ7mESK3b4HBMrGgoHjuwNmMH6XXLECs",
  "key13": "4QREKTYaecTUVDnhnpvb49G4HDeV7eoYvEaqVbAGPb3XjjyR2pBUa3pr21sj3CV4g9HJ1xj3qdk2Y5pSRY3uwHYy",
  "key14": "53AzyTnA1Mdagw1FwNUH1Cx2zDvrNa6WFMFhEm4FVdMnEd71HvRQu6qJ3VmwRwFjFVX8DuCUmvQbXTVvqLt6ijGs",
  "key15": "2vZU9p7RMQih6aMwFKTSn5hAezbq29kJy1NXbWmaAPJQmgFFDJBpp7FM9bfFixXYfBXoTvsHM64NgtE1zjqFSBPc",
  "key16": "5HPt5MrK1Dqti2jAd5PHN6fz57NhMJLJCTtZ714wjraaZudbceqZCW3gPD47s618ztm2EJsx4HPYY6YjccNvnTbT",
  "key17": "3HrJRcgNuoBogtpM9ukm1FxcUrhiyXYrjL3pdGa83zr7CetW4A9kxGgKrwhCWWTcS5M3UhTuBYdsDdtv2wY9mRWf",
  "key18": "35akNLT68qrvS9GGhccbRaczunkZpgHz36pERmVuWovf578jEHFWkogP7rvn3nAjkPpV8HqNw7fwvjV7ZkPZ4QqC",
  "key19": "3MSCbZaEG8KQzKzFuTPvWuAZcmB7xSaCbtH8T6uPnwmfqYrxzs57bvmeBpKwRsBnBAL7LQSfJZ86n89VcEGTVBpc",
  "key20": "2yuA4Fbef7mpmTpxhgXGZeBMQ47csrqh1sNWnpLBHzf1vyBRnsoU5jgZ1ooYhMLy3vPxwduL93NrEXZkBSrakXBE",
  "key21": "mDvT9potjCM1SivQ96ELD1ZkGKMMBd64uvKhSZHNu3boCGDQm48jFDWNrFoLhF3rbJWqwso6tf7xtBHZDuXA5qQ",
  "key22": "213hYrYuikBqUkedkgyUcXw6VzLonAZYJzFE9aMEcNvJ2Gb8iLGuexdhFkeguaFgNwBW8hv6xX4eNTV4pkPkjQ2K",
  "key23": "75WWHDFYNUYavqsB7Wg34YE819NjNswkT95JhPDv6A5Bavmnbi9DfXm8H819FcDukqBPMZudBcv5dKfEVqha3SJ",
  "key24": "5pQek2AW8PnjUrbkWojMUNcBErJcUkiBoyvpiqWxCDdZcuv6HfH2GXj6uJsB3i3p4rgnjUhqdpi3oSdswJ8kswWS",
  "key25": "4e5mkQ2StBnr5WzKoWR3HYxUcwcZY4pH6Ymow5bSv11uXEKMSMmoQTbWcbnd8QatjYA2Upf8G7SUZVpfpS85d9qn"
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
