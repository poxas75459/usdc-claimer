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
    "4VPJr3MDK9WgwvCUpGJBgqAZFanSXnkimP49qXwMT5hjkZEQgzZ8CmLZBRU9khwpqKNwpMS6FvQKbmVj6uzUJsGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7nCBBBcSdnqGH63GmtQnuCeErRyGJwQAueoCJAEhW3UV2CzpnWZP2q4tD7ivBykAtJTW1o115orRRhAgbdPm82e",
  "key1": "a68A4d8gPSeqn3D8a3FNRJPe1BvfwMXEYAd9mBCSBEKmNpA74PGJhoe5dAszNFjoBPAFFurBycfhSXYM6YaypWT",
  "key2": "j1kBQKyTKEi1up9GxviKZuu7616iygmJM4b9mWefZT55nVMGJ9fPaTkJqDcaUgvjF9J9SMDwy4gaH1my3HVoq58",
  "key3": "5cB72UjdfoKKghubMYksbiLWz86X3Lhfdq2dWatbmTnho3xGuDxmCj3CPqQyTcD17e8Tugczk2BgwTy6Scqi45mo",
  "key4": "5iMs9KjqqzduFCh9ERak6gEhVSnRZzuwfYniZJrqubhaj5sPoR9EphanxFseusyfvKncjRkvyt9UNtMPAxEXiXA",
  "key5": "5WZtVZ9r8zhi4aCF2Vgu4qgobRn8CJhxXmKZm4M1XZFcv4HHRxabuy9eCJJGTPNtuKpT4GaYc3wFotYq1BD7WP7X",
  "key6": "2svz5FrneWHvkZKXnVxrrsn4Fp2wFd6pvJdjy7f9RRWJZKtAkfwugQGy9taGqrogfiYvY8qARvGbnH11YjZR6aJq",
  "key7": "3fQXE53QCuwezw1SoR1tXnFEtArimh1DmMYgbobteUrZRWvQM4Y94F1sKZbjPyrfNVDF72YHPeQvCfUYCSfLkykM",
  "key8": "2X1Bk3yySKo8cXBfXR1VUJnj453roNqPAVSqeYcDL6GwcAr7xgU5zEkeAXg4ptVN8zYiedWcCPPHYdpW5x7azwhU",
  "key9": "26RHh82QzF7V6rGQP2EHHum7oE4gRcLn42TyMv98dcG3RC9HUN1Wh3KNoxqbmX7nzxmtJL15k8FVGJWyCHQ7vZiS",
  "key10": "3wajmLhHLgLnE8gETrvqtmZVoeMb1rZHfsmZKN93CicpPPGi6sNEvny7FbYG1nBdzxBQ2DL9GKTVi8hiHTYTbrMq",
  "key11": "AVSEKZv7YBya1UMZYXkvaoigJZ91E6pyGjhiufWxe24KuKC4KcAPkHdpj2uHrTwoAUdu66YSeQKvxJMhSU61axz",
  "key12": "zjvBKNtohvGha6YUW4aud39rDfX7wivKF3jTMPfiiDMAUaf4qSYrbptL21yYfKXxAKE2e4Zz1enU6UxkdU4qKis",
  "key13": "2QBJ87V8MSc234kf8V3eMmzpuvpGPeJcBrweG2gN3sMxSKwhN18teULZbN6RpzgguPnw2S41MeLih3dTNovVNrY6",
  "key14": "h7Hpe5XiwoTc659gB7eA3u6qYU9XHV5PPQJHh5WCUxFkPzj6QagkSeHqB4xjCXLJ1Kw4NwyuVrbcbn4ddNr5LHN",
  "key15": "4oqNjMEE8tGaDnd7pGii7z3hex2iE2SkZ28gkwMhXZz8iqVPLbvEk9JpL19dp4iHEL1ST9TgYwffMfK7UQq1omYM",
  "key16": "2hfTH3rBtBMs98HEYNkvHwmePu3rWBDUS6JCY947uE75VvrCwLRwMgpmjL3zJMy51TLmj2C9cGdbrG8JXMbwPWUP",
  "key17": "5jARkxZCcseYRGf4DJSZRruojqNv6bDoo4hRKm5ec1d4LWUmfimqdM1EDymRVQTSCqotdPvPrKi7BWJCZ5zsjTU1",
  "key18": "43nftXJ5Rx4yEWV29Vf4esFf21of8pnCwPLk5f5gpScckyTbSGWvwApvnNwNKEg8rvkXySyTKauhjGjfeY7mkrDV",
  "key19": "z8nZLLZHYHdqj7o3kyRnfyvqvNjG5jbDMS6wUB9aHZyYN6TspGkqYd4Wegc91MYNHWb2VfKJ5hrHLAtxJchDw1b",
  "key20": "212Sv3Am1diEZudoYNEFQGYStc9mov1WD6xawgyjrPihsQmHCCf18SAiG4D61FRKkKHRsYm38Pjy5bF3T3E95mVW",
  "key21": "3S6uaRvYL5G4bqxu8m1XtcpR4hHVir8crg2UG5oQ58zr8j319Ry4urYQE3X4C5UGJRtkis1hwMA6CuD33zhHyM7i",
  "key22": "4TXNcBVceMiMoikdgkBKkUr5Gmragzy8YCMjQgKYNqvUT8Q2DFHEcFufEby7chphXLKqzHEVqV7juMjdBCuce3gB",
  "key23": "32wYKoHEL3CFwSXQ4T8XUVn57119wMyFijFNZ7rwd5ursLn3BsmD6sWbEh4EMERwaV3mrZ8agHh53i1nRmNRBciM",
  "key24": "HFJE9AqdBc2tiKmfqYvNmMnRv9sGmi8qjzVppZcJnwAeJaKDGrcgVubDDgJkXcKDDZoCWPuS6buZMedWiKFpP86",
  "key25": "3974v1NMm1R1LewTsL3DH2rBn9ncDzhXdcU8tVFw7vE1yWjr95B3y48t1iphJuscDr6fvo3wpawdSy2LGPTQkcb",
  "key26": "31dAPAoU5ZS49Tz5cPsxbVhcmKhpTHLra7kvCvL6TfPBB2sdD7qfSJvhj82xDHjMiPgRhg3gpA4vWGZxVTqap6Kz",
  "key27": "5DhHEkjfpsRpGFWvRBWLjZCYEDBBDVLiPaiZTfD13Gx5Tss3SzKCeZj5JgSfdbkx8g111dHGdm5YE1hrvuYjty9L",
  "key28": "45zwqYKYqnudSTWdKstjyVBv93e4cH8cJRiWPVnV1WDTtvYaV7CYN9MnyfDnaADgSu6LDrub6kUDgVjLFsghYMAZ",
  "key29": "5Ek7Vv4SH5M9d2fpR4hSmLattkfec6EhDtVN16aQRkxG7RrFn5nJj431iXatAvAUTtWTYmvL49KGjc2qSjKgK9rz"
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
