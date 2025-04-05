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
    "5GiKBT8qPyupfZgHEg1dPF4sWtyKJkQ5faQEyA75huLhTUoCtAmjnhqFRD72VHdKkrCcX3PfPmagQuCC4M9bD59p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PWmCYonmfmT8CoSQ4gYudJMGTPAf21imFs9DuyGyx1gAuqLc3LEfTTwTUgzMSYWzseNqJ3LiMXGiDcgHSm9vbC2",
  "key1": "43zQWwfziTRtWaGeUzzGgNmmy6wDuokGuUKqnMmRcwKLLkAwBfEWQ7o8NsoHKB9szp54Cnkf6MvRp57QYB5xEZsK",
  "key2": "5Z2gswMmETSe2fHdMJQhKNkLhaFU24aNdoMaYLKs23zvEDcYDjgFpG5Yk2AJGr8waym5roan4AP62d94odTd6W1p",
  "key3": "2jWgMqxyGiTpekM2EYsbPHBxKKYdQqzVHJP2ofD6ckoBkRyX43i574Lfdg4yFXtqfdmtxfnCd49aopxhnjeNbH9K",
  "key4": "4gBDFESrUE4RUDjzjhW644HrqvYJMwhUbV4mX8WkJYYrjTaZ2i2efP22B24Gx44ZuwBaj4Cffo4Cous1GfQ94jJS",
  "key5": "5xmn3uR3rvx6Mwhkz1EdW7z2TSucnv9R61WcmFkCUZSeMYhL2XEZCYvkGN5r8gjUCLNt73dnzbp5EfUJ1mgmLGs6",
  "key6": "64DxuCeT4iUiKb76zLqN7CBRRchVSuAiNehqLwjUBBmuLVKjRDFh75KKGwE7UbnXS6h77Wm3DmfqGrqoiA9YMTkW",
  "key7": "3qRybMKdkGvqayKW7NiwChrUwoMpyR1vaUqwZBV5s7MNmKhCXhxqsGeDo9KSCVhN2rcqW8aHkViXFRj3Mk3g73B2",
  "key8": "3cxHkoE6Jeq3nZ2UYmjj4TNBEjAA1K9T9sysqdvYM4VMcn2jbEWGNchMY6kkPvYncexGUoyTwqoYztCtbdBHdNAd",
  "key9": "UfwtvRbaZEkNvqMcv7BxjTNkdvXYgtvLnRhP6xzmZp8UJHoVbh8HcCWnjmpmT7qBGALrmSt3QxWqELQ5uN9UhES",
  "key10": "3AUQ5fkPTk9SFisVuinfZptaf8rtSKHMCWEzW4h9W7P91Cs5kkLbMUzAfWun2aR3xDTssZ4gyQ9gcUhzKx5qYndu",
  "key11": "2HmWcSJecNmQMWH2UWre1G4RTMKDY2rF3g5ga4eCgogWKTPhp6JEvjqZjL9kd2tib7e4f75rxtjRLdM6GdPtkjWB",
  "key12": "5oeaP6CYwZ92T4BCqKJghQwmk37RAHGAih9kJVvA1fRoCxCEc3iJqcnQo9VpXiuHUAqfm9N4GpKYzFXiprzhLH2B",
  "key13": "2JVgXir2h6ivWttZJZvFLHEYuSsBJeYW5xoW8RCSj9utcwDBiD24s2ivyfp9M1BEXSQX2aouDTgnwj3NrYiXnVn1",
  "key14": "5RVDwvM4xJjGEBgRt5uP2zS6dMdM4X1NV5J1EW81bGv2vkaRkf7LMQux7JWgQTNYrRaLYjEhgXKDYcKpvugg3cJP",
  "key15": "5pamuCnkHqgxfMMu452YdZyJ4hT35XbRdZKTCXcMBgubcQ1WPjwSUsTQdDkjyvtZPH1noxSxQSDmQxjKoj6Scn6b",
  "key16": "3NizZauxws9aCHQeMCgcN1HAARUyG81gh7m5M4cjZ8es4qtbGFNRNCCzShRbSDWFLnxtNHfgv2KAGBRMTDa7vSuf",
  "key17": "3zZnZZKmMv3gFE2B62fJ5SSJr5t18HcQCjHoXJEQZrFKy7J3yQZ8DsXUbm5fC7RBAxPeTP8Zk1FyusJB5m79ENY7",
  "key18": "3yiQoYshbQExiYD8YnrRmdBUYcHStv2c3XhEXrDPzfSGyMwV64gqyFtF8oz2MpNm4NXgEPtFjrzk8tkRt6AmEtSJ",
  "key19": "3tAnbQJYk8GvULMvev78Qu6cWjJgPAoWXj8KzXjMyFeTvHVnKywAnPw5r7hd6uyhxRuzigG2b9vhv6yQUa69Dcxb",
  "key20": "4tmHCkdepWLBpQgv4U6DMiqu7WR2Fp3gfiQXwmeBrto2dFCCpWVreB26xncSeWRQhLFasgWoBqpnR1gbsbxwrHMf",
  "key21": "25sxk68ErcWbLgpQHNTSWHtEHFn4QGLFHuXau5FP6PGU3U3kn6DwESzRkYWyGozgCyS3CCdBvumyipqbnc8qAiQW",
  "key22": "5RbR5wuCDiLuULdMogsx62E8rq1xPtmhsrm9J5wRf7XFUYusxCm4nnwgPF9AtoL1gzQJb3oVKa5wA28qKzJePug1",
  "key23": "2wnQJ3sfpn6hauLUZMvdfvtUdhAYtsJ5DXP2WG6ReHHdeHBdoSdPtxgFJASEtiydiHWZ4g4PwvniYt9ouVSnZZPN",
  "key24": "65wTd66sbFbMyzWzMaWD3NHcN7xsgDRP3sMKJDGcph8mRPhsMnoTcd6ruqYSMke2Jcd9MZmxwZxuNxoGB1ggnBtA",
  "key25": "22bkENCnNCy8MUzHoe1DhgTdHBTAEAzdEfGezgieeN8kTQh4Fv68x3LJwA9TzyLUgZy4a4M8WUzpPaRetLkXKt8T",
  "key26": "Udv3uCxz2AkxKUm2Kt2ebZpPpM3VN5MwvS4L3Fzp9gaFMVVWqchLZjKbttKGuEpFru2CH2yPqyqvU1irhH8HNnB"
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
