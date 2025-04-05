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
    "212zBb7hY6tqQkVqYFzZ6KzBLDXLEGqmRZC4uWZRRnAnQ6iszCbUAfA82WtdbQnXPV228BH8dW8iGqsxSmzeZnxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PsgsdY1Adn9qQ47SiBRiDjbtwrkJJ1VL3tKsoxV3xBv5LrA5WHwc2aeMeiLqCL4CpdZ3PVfpZ2TEtMNSx79uhfQ",
  "key1": "3gccFEyKLFaFUbfEfYgSdL1ziteSVBgqFpy6AHA3FLFvSxCZjWeorS2ZuVaXAgkUTy5DAYec5xfk4RN2Giic5FjM",
  "key2": "4Wi2DK1UxT3qqMXLddz99iMwx4YfbCNPwHpEAMde9D75cB49gVYYEFhwayCUa22zrKiVrQXZ6cnGht8tE7hVDsLq",
  "key3": "4m5WJNRX58LdiGCXvBKLj8UXJXSu2uaZ9ikrK44pahhGzenWegh2jBF7DJFKJdm5D61DcbVGVU13vb36QTTW3Si5",
  "key4": "9iTwVecWKB68iJwdhhN1vjE3tKh9fS2C5GAFQenB6j7M7BVAstrbMG2rPP4JiEnbCKeE9WRHHDKFpPwY2YWRBSS",
  "key5": "4uNdxPJcPWm1rW9tuebj7kUs88ncgQPMaDmYCkcJXrG6taUh9t9oVfxN9owSXatncQsrSEyULg66sddJJTBvJ3Ks",
  "key6": "5S7QBoxjbZAisuPcjd998QJYFYPZYeNijUQxBZbFoAYJkC7XBK1jmykkcGtoF2ZTJSQU3BhJfgHtZEkvLF79y5PC",
  "key7": "3xMKeB6UYb4xXtH7qaYiHkeJY2zKKosou7DtdR95woLMnEwHyMhf5L75UFMhM5BtpRu1WPuzob1GJnQSoSpm41yT",
  "key8": "51xWvCxqrq47XijgfsvLNiw73oGTE5J9JZfCRSpig4xKDBLtLYmmDkqs8a2CHpMp4KwKgdbSpQRH2ja6hn5Uf652",
  "key9": "4bNF3rHiNGzDjLzgx9g1C6mC6QZYL43fQpuGPWtYL4mVWFtbLo1m5WQcZQKqwTdCn2FkmdqNZKn8fDGupojhmLia",
  "key10": "3hD4zKMcPzRYSfjXDnsouqFR2jVNH8Wt3YggoDNAyKXQRXXZx89VKwFfmqoZMpnNwhRxmTdSwUxq8CeE4h8vnvE",
  "key11": "2ooB6v5GCziRp35K3n3p6TEUKQdZFpb16StNagPFx2FdnFJ5BQGeH9HFWQbvUNY4BVZwkZ8e4BnRfo6BURYAxLVw",
  "key12": "o4RT5krgK1ApBuzmAA91PPM29GSd1Xym5F5bBG5v4VzbfZ2UNZPEbSfKfTSjS4o4HaPJmEd59FZCcPxoqUCssEu",
  "key13": "5HCz1ZYoMzxNCB5di9K3E9ZzLgwHnomsYj2cUGdxgH13t7W3UQruN61roc58AaDaS3bYV4g7kQNoarx565BAa8eb",
  "key14": "3UUKkgjP146f4nS7FesWHKhd3AYBvT3YH1yAjvzfjyxDZNP73rQWTY3tdSYTMXgo1ks62XVrdWFJjc63iVrc9zqv",
  "key15": "3DT8cDU7fEWsSLFbLyRjUWUHWacvLFL13AqvSmgjJdF2z41fkKXE8QaY5ZT6zseKEkoFHMbJ7tPrb97UvJdL2F7",
  "key16": "eq6C75f6LNWV6TkGV3dnVLZQ7YjefhB4NEfitPp94jSEMKXRXwA3i54WatLCrJU6CdqesvCoHW8nFrf6PaQQKEf",
  "key17": "233tG6CWKCVQpuJYAvXKTiizSYojdFfh8HX5bMBqWKcbtcEhWZ7FGMHY69iQCeLb2KijgxdKbsETapCEbRkuDuWg",
  "key18": "33uMtATrf4pBXGTWTBxDb6idBPVHvjPFK1dA8Rs85EDM3gx36aGaA4vvigsBW5yrN4W6MethyUV5aDQCf88TD4WS",
  "key19": "2xgSgeDeU2nusFAetVVAuBsPgRM7cegaHME6PT3oACJboeY9j785AGvbwMuDoJZjCQtUgQVRj6rVBfoKAPgbEMNp",
  "key20": "5gstEKbYhWqFqe3oqDZoxsrqBKvxbuQ4nLkP2To79GFZMyQG35BxG2gQgyViVc5oboV9X7dqA8A57Py2UFZYhZKT",
  "key21": "2VwDrk46DgqiACEHVSJMzJZcB635k7s6YXZGEzKXmnwEJFJNhVTheVabnVhVes99mSNsVW6PYjD69eFMBnyXbqZq",
  "key22": "2Qevn87qNF68WoycqoV8SJfRA2gzyz8s7XVh85M9Jo8x1ZWpKyrUyDVE9iEoiFESj9xKni4LHQNExpei5AAoJaqc",
  "key23": "5k6NEsQVgkbVKC8dBHVtVCKD2woFyu4PcQdbGsyi5hqkpakqb5dJXZsYPakqY4DjNsQLWdBgfYaDoi94kGmnC4CP",
  "key24": "3397dNLfEe4uqiEkQCb7qcQ7xt2iSxerQgfR9516SKL6eM84xisDGkJL2ubrdFB5qw33GDAVMy4iivjX4RzAKAdx",
  "key25": "49jJ2ZsRCzDijSTjZYL2MRKQbwB3XrxzQ3btYZtb981gELLDaGL1GX5VG6oMd3jy3qjd1cvUiHrzZhFh3m9ztwBV",
  "key26": "2T2i25ujSFKx1zwfx3aRzddjEo1ZJCknr9bzsnyBxCpqpBnEfzth3PqWtYo94eGXjwiK1ngceyxVgF2zweJrWAqt",
  "key27": "3Y7uXgYNLd8BUX8ZctmoLCLJw6fjduw99s1rofjiPgiWW8veAi2MFL9uqh1QGFyNM7PJLQVq3gKgrDnKAbz6vh3s",
  "key28": "3uoqHLZKUZEXgG2aVnBYmCKxiGvph2eeZwgrWt69ELKPBLWNwLLTiidSAgvXg9mwtM35UJDHEp11ddgCkqSknc35",
  "key29": "3McoRwjGgQEuEJsXmdQhawiZmNVx1sBqSfSd1jLf7dbgYyHeqK6M9tzrdXEHucQNz4WiFS9EAQ5psMbmhSnDHcnk"
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
