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
    "2bcRTPKLstn3bpcykjzoYPmsgwAr5kxiKdaQR2vnQ1x3s4HYExvy2CcAdW3a4QhfRMkFDxJbWVCF34zNnsuY74xR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2epFGS9Rdswx5PE2a98axe4wrRd9Zg4kagSAemjpryYVm64kB3bXh5WBUafeq19oX8dQoQC8QwuScn3F4XvGxJo2",
  "key1": "3kWNb6wJezWfR4t2RDim7nDKHqkNveGSNGGWBK5KijA1fMpPV4M33ZMDnZvQa5RXkx5HAWLXePB83nZQsgEAxXiU",
  "key2": "2f2T4K6nqLYpMa4VLntJ36N7YpLGKNYdwvbP4orKCJMDmpQadiVZ91Eg5uVwMeZEMkemQeETD5d1zofKoZz8TKVF",
  "key3": "5AfJQLH7u5Dfq5mD4WiToJ6bxJaGh9zKc5eNeXGTADrLpNNPE39tKEGyDX9JWfgUy58tnLfkduyzS6xKL43MKdNU",
  "key4": "4MWAeQQEcwBAC8dhngaUoeRrKmwgY45zHGFQAvpSdrj8QPEkR39VS1SJ2W5T7HJtZkuseTi1zbivF5twxGbkPkHo",
  "key5": "41uDyx179ZdSjeub9KXDTsz6cPHTaM7Ytf2RHZmRGxv67BT1KHwGTQQeDrfQsrCNM7NrCTDg4bxqoacZ6Y3JZBAV",
  "key6": "fhCvZ9APaE2FnynbZH11mDmuPZj51SwQmji2WDS2uFX7toUePVGWbNdLmvZKNvJiAA1x8fPNTfTQcLxdmujTxVT",
  "key7": "5nHAMPJ1cf5pgDQW81giNqYUQVSHcHHzLi3Q5jFzLtgTQJLv52QSZUjLU5kwUBwBWytyRJP7V4xfu1GFP9nWH7TW",
  "key8": "2xLbY7Lpo48uohANJzfe7nPBJRQik5LkYGzZLUkNwrozvbaiYj3bJAbFixnozZz5aaoWMiZ3KjFxJPR286gr1Bte",
  "key9": "25U8iXbzAUbW1PhuwqcuSpnMwVDRyNVtAuYmwfAbVqzBtAuPbJkHr3krYSDjCRpmy1Fh91Ne5wDNU5hKf3fr7HXB",
  "key10": "2azfQgCTJ9NitZuSaC2GUVDzHmdcwSNkAsva3rWRAgMMim6hoictyobWWHBaHxJnAHWqnmFj6vHSf7Tn2TyvSRr6",
  "key11": "e888uVQvt9c4Q6ai8cWA8BNJMTdUuzPxtQrjLXRnuzmNDVv6WEuFx4fWDFgszaKuoQD5H2AXHVHYBT48FP6rzg6",
  "key12": "5aH8Uk8dqLvcBGCLSUaoouvqxmDZgqBX9HqfxT554P1S811Xi3NS6JnaNyauhsQHM7FD6q8ayn96ysYm67Yc4WBK",
  "key13": "4V4gBTgGvGezpBfig1kiDpfFS9TKsnKvBU9FjK2Xz2Gj8TwpgmWhuNa5Xpv47dMrGWztPu4MskWP25NfAwzvakaq",
  "key14": "47kdRiunjzRjKm3KS3i5kc2fuFTR1izfUKpgwXuTXNV8YSnmMCzbp1SKi7oZmMvTRabq4BWymnWthh1TqFE82UXv",
  "key15": "4bQzBWoEj4HPYuUh5U8QLDzibxuXP8VxZuwhtyNu4271FDfGjiX2hSY4GAYoLR8SUzPQf8NPGfVztLG4QhYQJapM",
  "key16": "4dbFBmdbZu1YtMC3mszTGHAqL6FZAMyhpeGTEfn8bjfpU2uMCXCSzLg4gYTQ4Sajc1GdRFiVHj4nabvfjomXJcw4",
  "key17": "5YmohxEKCr6XqjvzdpUkyiMi6gXswSPyhwzUy7ZQWM5PstSoeeXnE2Mzxe98whEAKiMTStq5yQSMCeqKTLvR8Kph",
  "key18": "5FJijwDCjn7W9LujG3iupsThigotPAzzUdLCvnUVZsHf8WVMhKELBnC224z4UymJogGLfNYZcMQzemc9P5FD8V9E",
  "key19": "w68eBQMWVQ1Cs6bUvyohQq1zvFxu9wqQBS7b23EkGcTkGn2uvEtAhk6xLewxaypwc4keE1qDkE62iqDAtfRW47U",
  "key20": "5ghp7PXcYEi8HKsVnZpKGJeoAm1deeKDh6JZgcbYfeJLjFuQFzuiKk3QSwmGej1PeYyVJ4cwZkxXZQurv2WhVb6K",
  "key21": "2L4gzcnMSk1CL5jDV4dbYXx2xwjCyao4JCBcSzWTyiaq4xPh4E78xJNJRJDPmciSyNzmer5YzsobfRskKcFByGzh",
  "key22": "53h6crt828VFf9ViBhxRrU9vhtJuki7emHTtod6E5DB7KdB4dfcHxRzRy4vyu8tGxbU4sXMcYYTZGKBKEmbrMyDr",
  "key23": "46CnUCZwVST26u9Meb6yHX8K3CAcxKZtMTvxTdTwNfbQejbfvGvnm1bwY5ypr1RobLUB7BaCLfh6RbnSvqrpRXX2",
  "key24": "56SMfNvjcoWPUw7vTAD2d6xmqafxtPtiv9aQWdnjfx1kDEEUBkHQzvPrH2FA1nYAB2UgXGbFp1af7uqM5ieYj6Dd",
  "key25": "3SoJQXCdx19X2LwKmY6ry8DGAEG9vci8Tza5zzuJon1NwWrbA3YTKkmJTpVFLTtaGwP9q1XKYf2JszN4RdRhj43r",
  "key26": "28D29HR7knPuF9bXcXaDwWexWjZhz4U8aC4WRH4z5FTpMZ3xhtGCeDBy67bFbMQTYVxBKLF65F1p21x78ZP8u5Fh",
  "key27": "3qDtTXXudtSSozNoLmR6Lp2vpj2riJ1iW9RjzwBhD1tZ6ne1iiQHJNgLg8FFSY3pzpEFi1AZShD6W8qHDT6vY7rv",
  "key28": "6f6W6YPRvTU1SkFqqmVdofqQTbWd8AfYovQJseTmTQHWsVRN9FJgGjVidtusfqH2Ebh88gELQSpXJhnXTyg1WSH",
  "key29": "4ExrXwC38YPBiprScQaB9ZqKGrqZNnWvkasGzufdy6rB8iWB8cQ69Cx3qqNfBUymkyTWChqdaNG5JRHeMKJe8gGx"
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
