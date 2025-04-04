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
    "5KstXwUVeeHB7PBd7rjKrMn5czkjcFUko4ueVuivX9TBXX5Umj5odDjZiuUBjes4sjMx4tLteqVD1n1EpKkVWGbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4joNar3QuZvxdGZHUTBZXSahAjvAwVLXrLhLsk4rGJs7niZZmpxhG1sZTE51PzpwRtseKsHaGjScfkQrQTLrGjoB",
  "key1": "2b9NKdHzGHqr1AnPcvGc32YjEYMzUaU3Q8fLLZsphyb4xs7Q4tmaRQ3HAXYkiuLCL6EeJgBn8G8WU4v5Va4PHS7f",
  "key2": "4x8tVDuwVrmSDAKsxf5h24b33cDmCu8Fr293r9GMJaGfdHgHXJsDhVKBFEw9jDSst8UGwf75xiD9TCzRcE22PXRe",
  "key3": "61gq4xU4Mmg34baneUmusnkdmYwJuknSpeFtciio16XT9R3XDMgjsb4YBUzr8hdyEU3u8ngGG5R7R2j794Ht3AMh",
  "key4": "3sh3D2psiMkLjJWosBhAhKRbBaQstt7CdGqLtfHgZbLiea6nSKx9dDueXkjuoDJaDDg4wHDvY1nM2vjobk2qqMuM",
  "key5": "3w9ifd8G7R77G6RCXPc3TvdGF8uH9TRWHY9oQKpsP7tJTrSPJZQcX955WM4YHrQdkBuSQfqhmPx3LXqbyv1dAQNT",
  "key6": "2Yo1ZveWM6pEJA7ydJzGcy6z6Rw9JCS9p2c6PqqkiFReMWvgvGRz4XUu6EokCUKsFmdaV48FrKFk7h2mHPJJbFvZ",
  "key7": "ddEWJbbwvmmoLhTyULiAgKEE3qz3xsJQhsVV8A3eeEqfMBFSGSjdWazh2EyXgobYKeQ5jnm4NPwGzqEJZxandfW",
  "key8": "UHSpLbA9BcdH9hicnWtetrcxVVxnYtmVdEPoKiKH1DD2hkbvuW6NvdjHAnTJC6VJBUBNszxdumzbdXR7qk8cRn5",
  "key9": "2f3gF16Hg8DMFzkGknghkQimMvYjzFhCArx2Nnv2YWfj4uvkhF4aF3oQqHnXDdKeJYoqyWnhD77poKeG8meuUjFi",
  "key10": "5TEgz5cypwansJD63dwU7SGfjVhVsd5E5i8d7PmWEyn6bhgxfDrcgJ1vmSdATERTioSDwwgDMHF9uj2XWLW257KJ",
  "key11": "4fAXEP7TLM5NJ9PdaoPfC1ZMZx9AsL9C9qTB3QxELc6ZuSVt8KCh2s4UcGVVp3TodLqk3JV4tzoopaV5RDDBNwZH",
  "key12": "5ZAsqcQoEqpRgyabq1cnJ7EQxkij2CqNA3dXYm1tijyrk6AiVMY7CsTU4QHihgNeLvWRKK9b8iBMYsa3AatBLy5",
  "key13": "2m3R1ZAUdfVKZXuBYsRW5KfKXXGgv6oGES8coBejUkkssey9fKYCkMYVzq2yqp9m3Me2NvyCUGRk8WkSvX61ERhT",
  "key14": "4QDtDMgeXMbnNi23v1XzNT4Np9udjhGYvmAGXcuwxVNdFTJ4sJWLJpKJy1t8TZnB59MLVTGJiXoyjG6DXefTpL6m",
  "key15": "2NqiW2c4HXRpiNbm2e2oepnYq3BmtvFGEpAzjG5Jj2HgXitGAk5chNDGeBYqLXJk4B15TLdsmFHH3rf1DTiQQNbA",
  "key16": "4KXuqPCCTpTkQVhUJSbfweexP6fNBKQ8Kuw48GniCTxrvtmfNJvi5QHightXpKtq5VpQztBfbFufQWR5yL2VBFd3",
  "key17": "3PpbLJ8qxBj1eVw88qwHeYjCp2efvDjxJqhQdyLz4ugoztfSPHNPhEqtLQKayLR9MiT8WG2mkrYm4gZvygRmeNSg",
  "key18": "39TswuMGL8MsVrUSrAqJz7XZ2yjp49rqoR9GjHQkVDafFCvJBVN3qPKqf3qwgHqAfwQuz5pmCSrfbjsyz3mMkT9n",
  "key19": "62pPKddPVN5K7Ma1JcaqHgXerodb7uyg26ZU7W8kWu9iyjME4YFpPrh4EnbKCeJ6sZZPEwoVBRtxFJ3D4QXMCBcp",
  "key20": "55FwQvoNp3UygRWHPchroYJvuKJ3ctkVDWZDuiA45BL3Y1aDCpHX9R4faJMmCD7nyzGic7eida19xkKRwuv93wk6",
  "key21": "5riqAyFGM9LxyxSGa1VFYPAHhPWWa9sdrmPkbLG8TNZCJBzFNPQoor3xxntvQDX2xK4npGzY7Xeg52f8ySBWamUA",
  "key22": "3P2oBd62UUBB5RRECcBC258LNnsNxFLBaN8vJzPbnMSVuQwttuwf96XQaS5m7arK4KwNM9UGd17kSbmXhiCw4SNh",
  "key23": "eqJKvfQtadaUbd7jTaYKmML6BM7o23DHj8UJ8gxK52NLwZ8gpyHXmP1LS7Y57pBr6CUqrY3qSh6egpnwnkR6Hh7",
  "key24": "2YBiMXw8eX6hLouEDwDw1Ui39JLu2YuwAjdaSTi6srLzpjRFP8ELJNUepjNdeQ1wgyhYtpxtpzDbTKLk3favF1q2",
  "key25": "4yMD8bVxzhAdNw6Myb1PdiNqntPnqhuEuUMd4GteFL9AaztKGptB4wXchDppEU24Yo23fxpvE86xA2tLxaB36swP",
  "key26": "3Zf7T5DMHP3FsVqqsF7u5GCnRwFwDJpkNW28buZ6eczf8zhgVYhNPnyCRGTvAUHAXMoiRLSiYspmB8cEoqowqphB"
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
