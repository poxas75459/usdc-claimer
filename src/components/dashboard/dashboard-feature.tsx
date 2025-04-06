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
    "4McFxhCjbZ9PNr1RscRSvNe6UxP8GSphdW2SiVYLHfhE5wkZWZG5WvJT8iLpzWP14BoG5XfDkmgZyU4UyGpgxNfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24zuhitd9d9Q7hCLPKAxKMUgUEWJLGcRoLiaP44szoYGEZ8pfmouEEk4VvDGpPo5BkEEcrrzbsnD1xfVmeLNcLUD",
  "key1": "Kw6qVKCBudDw7dXGAmp9cYQ3M8PA81fkFKfdbnZDwPRvdH3v81JyGTA8p1iZso8pLCGoRFvscnv5wjuPA9WT6Li",
  "key2": "4gQMNtVoePQ7pKCkTuTsnt9xSNzfJLEDpTETy5bVCF3THSGpsyYBLgLU3aHRrtZHgijNrZ2Yk3aS3fHWWVD6WP8T",
  "key3": "5cCZJCPstVQyCVYSdvuEGoCNsHyHXpDD7r2ewXkJtC6ppKVyQ9Ez3Ck2t6dSbgjxgzBAkDPPB2XVQP25iLjFG3Qy",
  "key4": "5PAFjfBMAumqXzDud9m3Tk3bAP4GGkWK3FGEvbC1Jmz7hNfBWKk1Gu1oa76MSuzn1sPWQSAoePe26ZMzZuib8jP",
  "key5": "2DRHhXTv3yXWugsM7Bau5giWawU534mUDCDiC6byw7FXLCxNVTY3s2LwcVwaf222HgmBWN8VviFCFEh8cFpgEdSd",
  "key6": "pQtdtMafk9JKncm1RSHDwfRs8GgQXKeRxMYc7odeyC9JWr9hZ9LEeBdKf2un626YSdw794tCQoEu9fvhV2WCUCe",
  "key7": "2e8rNRA1EtRSwqmjaq3PgGp8itmMGAScx6GnFS6iSyb6hxdd61gNcwmSBzmyFpPdxjPEf2LU2CiZciuV7H4JVmES",
  "key8": "djtytDJZi48xug6R35cmDeagV3uXJXCu3oaPZn6E91n8ERTVUDkwfhzkDDpWTK9TZpcDXw2RgNBNJEYrQk3nmwy",
  "key9": "3uNT1HQtnyfngzuC5nhYi8JNLL6PkAsDmSDHaoutsMWAgXHNBk57wa2pVNUjcqJkvMstjSF7McMZ4a1hwoM4sAF5",
  "key10": "2KwkRoWXBt9LrbxqXfPvYHwDrQhHLyNH3jJXtpke6365Coz2byqtLEj8JsjpuvZzjcdz7DmZsgd4MNwNk6VUa9qf",
  "key11": "4AVYX2VEopaibBbGRNg6HkGPNv2YtKKmBghNwuQ8sdxWpcGPS3wmPKUYouHSK16HKb98DsHJBq5fT4mEfPJHQD3K",
  "key12": "48HADqhfFcUs3AobS397ZKcem52K1rtqFVkcKg51pFDpooFAaT9i4TtDCJBSNeoDYjMS752XHMXA1x5BaSeZti6u",
  "key13": "2BvnD5gCco4RgnWnVs8zHt7NPvdwsTc3gF3xW79Nt754Vm35VnT52wmjQz1JyXeNKYkrcW59Artb2WXQPA8PdumD",
  "key14": "59VMCjvcFx49Dr9NFm3Xmk5fA7CX33BUk5hVXwYPPXTu8USKhXTtVkQpAWzFoYXrbf2j94GnddQJZb6NDeYKxEtq",
  "key15": "4NMLMe5euEsbnxMypZ7UzEfBHuwDucrNpKgTUQtuAyxae6rFTHxWxTADgZKgu2dGXzFdW3K9CLtkaS5S8XTyHpcZ",
  "key16": "61BBbXR3TuDN3WRSQFcEZcw1Xn6QUmUBkhyHPiEcqsCS2cQVsgHmL4a35qgnQ9fcjx8xBg84rZHxJpgeqGm7E2ov",
  "key17": "5A7gA4r1H29xTbDJAKyB7Ghcm1NNhwa7oQ7Yjb859To1suYWqZHJkwVV8a9L16mGr3UdKXujcfzZ2qcf66qfeQZv",
  "key18": "5RjfZctPkg1RzXeXKvuZs73rLKdspx5QbTDiuJxzjAV5LRD5BghyfhYKdMqt85hfD6Mc7s9qnMDxUEzm3gww13zd",
  "key19": "3trqa83UztQJm8HcuRQCGPFswH19mD7SLpr9aiAzFWkwdA6gNT7XuobmA4rSw5MPoFucdsZ7ifTDHdDsdGNMoWin",
  "key20": "54vbmeHV9Un1WfegtZfr6avYiiaTzFjPLAnNffp27EgfuCDnUuwPMVrhMWEYmpkVaM9Ces7pjGeeD95YVGcqysPR",
  "key21": "5csnerXiVFxp7N1T72rcZzZc57vZikQUs5vxcnQnrsuwsKWBsz7vA8qFbjhmTEz7kCdoEQKrrW4k77PdbYz3fsxj",
  "key22": "2B1GpQMWV9JWtTH5VoTjk6ozAmFshrCEnc7PugkspF4kjUeE6QuEecP8cvG6iart6zUjeELfZNNRqXFZsm75ojcn",
  "key23": "5fzSZvr2dWLLVZ63zfEAjf5keEAFPihFSEzMApe3h5cxTpxWyAVgUwbLRahRWko4JvguPMuuJrnMexZmozCaWgYb",
  "key24": "2Z1zGeZvTYaGidBAtCMbfyERWD3khyK5aFpZ3ZZQh8P1uanAFb6BNgVv2K5wkBgtFpsP2Ywtcubb1jMCPhNgxnM7",
  "key25": "4C5SdHmz9biVSipwaNpMfTPck9cMMsN7aL6MJCbLZSchpZV3VvnD9PzGc8C4VdPQowLQXZihSSYJVsWyPbuvorsE",
  "key26": "4EzgUMrUYhhv8bo1VsThrTENWLv2yWx1nZ1GNCTiUPSjXL2PhjNXz1VGHQa7o51hTTXA4xDjftywEhQAhpKaqRHc",
  "key27": "3946VVHcKPtCFJLaj5mk1EaPB94MkduV3zx5iPLgXAiLHTd7GL8miHcYBabDKXiAmweamQndzj5cp7iMTw3gbyFT",
  "key28": "3Ek2ZChapFhWFreJtvsXMnAuigWgFWkfNkjuRBRYieNziy68dNdCXZBGnBaangvw7cfJ1NJZ8GdcB5DkWW64LhG3",
  "key29": "4M99nUgLA7kRXuwo1dq66ER9hD9qJGaPdMYP2kSyvCtdpgAKVgzSabnh2i8v9Xqcr4i1HMriPH5ZqA4LLW3UbR1Q",
  "key30": "bR4KSVtE2ipyZe4czBZDobULHbBVuHMMoGeBMGen9sCFAak6SsVuFttgE7RiKQnAqT4x5Ez8S6crBfGonju1Dt6",
  "key31": "3otKDTwf7SVo4xZnSDLz9JSAeaPrSphJHY1bowTxfKie2xGqoaYjgnTz5vWibMUJoS6gqensinJpHHwcwgm7cKSW",
  "key32": "3nX9zMYm7kMsYfzymbJLdjv5WnyQhhHnxMXvec19FtezjXhyR5Mp7wKjtAKVWUy8ZYon4zqDQmXF6fY9Jz6RRuXm",
  "key33": "61mebVr5ikVtziB2W1gU9vvmGWAy2peBhtjKyEKX5sYcWbVSDXAEstyG8TVQrUTAqM8zUACzZKJUmUdsaiQNfeAE",
  "key34": "5xoVv1ZFvRcN6cQkDhdka1xa5BeHBSjcufij3btkfw7Vg7RCxfZ7NjoFd6mZkDSeJktLchTwyuCepA2fVJDEynuT"
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
