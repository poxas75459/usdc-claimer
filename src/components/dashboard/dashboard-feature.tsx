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
    "5F6fNgmkfbAW9kbEsRembx1LP7MJp68XA8NqMMxCKzsf3QcGZEBJ7sDCh3g3EtbCzMZhki3jizumfVLvGMqV3sUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PSoU35NrTkd2B63QSncJkJFRaCK6q8nvyK3WJziSaLn3vxHzFXooXbzPgjom85DzRP4xpXQdctVFdgiwkvWL4qG",
  "key1": "4mxyWkdwaTBDHshYfdfrFnKGZcDSMrhT4y9dKMnWtcAkPthfC9w9dw3wwyjRX1p4snUwUYQ89EiGPix7Jfk1fQab",
  "key2": "489F3eqtkne1JwQ9Fh4TTW9LmVrSnpLe8EH9zRf5SvvcLfjAyuNuActxdSmefHnEiQWUFAHdM9dAEsLxyc4MTh5n",
  "key3": "5mXHS9JLzjkZzSayTYMgnJfP7sNA48TgdzBDQMfBqamAqr5GVGo9YmamdBmBrMMZYF3XdLJz7oDdUia8QABdxW2j",
  "key4": "GAebePi4rsBSY8bVgrDFWG1WJ2o1tTy95tacRj8sQ2V77j6Bv9Tz7SvpEEEf9UCyVSkemT2taxyFdJ31D5ezfU7",
  "key5": "aXRBMjmNndLsAypj5M9B23UzPYFH15UNKoSeLc8WbbGGj1d5tMKbLw3YMcnUsniMyh8sKGo1C5XF2Qk2mUnD8JJ",
  "key6": "3yaLvQihNUJQzRcbSgrqwzioeqrChtZGz9Qti26PEMoZ7vGj3A7zJJVgUaD2pCp6RCJzvJENajueHDdnDnFB29YK",
  "key7": "U8gWe8atg93TJVJarSrPiV1mK5ib8NuuAgxsnXXyNR4V7gx7tyKu9F2CjxymGmZpDsm8GWmtaCAscQ7GbANJ38E",
  "key8": "3YasLvk3xKmfxrZegWEazrEfFij3vh3VPbn2T5VwAEDbUgBc4mVP8icVDCpRznaYGTSavRbwo7xWQQ93tBhQDfRq",
  "key9": "5jdd9tDwqNSgEHsYcfwGSpPF2qNBPHJ2N3HMV9v7MJt1zsoUehK1E4QT3GKsZKZDnvsKxe6fjkGiB1GpVQNvbiMz",
  "key10": "mxieDmkCCXmCXsuZHqCYoBHyWLRQmMytUKgsZJugSbuDA3qUySz8oDKyTKQgMJHFzPb9ytmUg72rDf9TKQx4Dx1",
  "key11": "5LeJSxmhf1zKPZnzsurh6dHNdaxHbAADoUnMiyKq8THxBPuUZK4h7BsNuTYYitFi2VzpFqXvcM6u2Jya2pdfuUuf",
  "key12": "2PTqoKdJYEwtXVdiPbBeBpaec3V8J1EzREAyPCDNBUZ6yJ7522KhkFnDTCngv3n6bhnqRsvU6MLHTZex7Ldef6JD",
  "key13": "65K77QGyY7JPu3d2CsKm2FWpX4XVa456dMPSfpptS2YdnctLSd4X17UcXxNEbGgqmMBev8FBC2nDQmbZDxMHHqqd",
  "key14": "5MnAQHtLjmB2eEUjoDEsGfwyYeENzoc8bsptkBuWVfXkrk7BpeNtGdgFKKxGjfbXgbH6v4xwfm1XHmGtwhdg3KBz",
  "key15": "3g9UZSam6b55o2Va9gDx795eVvDYf7vd4Mps9Di5tmD6nQZfXyKtcNAaep2vDZuxrsMZegyUAk416BZm2zDYmGnu",
  "key16": "QpkW3BijBWt752LqiZXevazDiXBoCG6oGLkFKGa9AN6k4Nsv9yXdaigamPd6kyLjQPsuxEeSDtPDmMXVUvmogCz",
  "key17": "KgTTtegdiPTUGwCKL2mWkGUPHzcKHqSDj6GWEa5siAHm3u5Z9uKvEUFwTmvCPJAoxL13HkUFpudEZQHtTX3wQ9h",
  "key18": "5yceTXqAqosTTAWLU4eZYQ5tG4nJkYGVshggRWJ4AjRNKJE4CeiqScdpnUfPp2vgAozoh6XNapNQZfUS44ZxcJhE",
  "key19": "5cAVEZ3CiovXAFNVwUKdge5vWoAQ7AAtMBz7sJPcAQCiAaMYfadW4np4jPkCpkDvDBnMB9PZUgEvBxUPtRDjXinX",
  "key20": "ZEWWjH3Q4LUhkDorxZd1b5FPfq4itqQqAp9zPjyR9QG2pWfkHVLRCoCLm3VFkQiGxQ4BUPcf3GvbH25ZgkWXG1k",
  "key21": "56Yzz6MnjwADaE5unHvmfd9pFRcMaBSAovWjFAiihKotUwpvLwPx2P53DsTDCJeB25KRwkjfWwUJoNNMWGHpaNpn",
  "key22": "NXiWCxj29qHTMiJhbAGSMqa5xAdH6RQgVZ3YnQRr772S9yeAtkEEEkEXeQfRupPH8tzEbG37QZCKneCyaDHK83Y",
  "key23": "4qyp1KHyJmL65cvGwvMVMrZBpVgVqPx7iWwGKzcvDAT5XS4AHtoU9wooQNEMtm6b338Uymt7tUAoAZjobmCRJyEM",
  "key24": "4xopJHe2FAHHqgehzZmN8p3GRShDrJmWiK5GEgmSGvJ55DoNYybwHHzjXBJVaghxLK6h2GvBrZBvbpMS1fLNtZs2",
  "key25": "5xigoKb6rTk3xD5HNLX4fLZtGCvtZZQzjwtumxViTQZkbTi7qtz1yjkAYTd2JcKdX2TX5Bi1v8ubxnMFqdNv7ajP"
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
