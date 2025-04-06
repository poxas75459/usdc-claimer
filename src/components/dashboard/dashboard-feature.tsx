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
    "4w34deXxaKbT5Gfv8XKDYNvEksaKuzzPxqNAM45nqr35wWQkYcKNyMsjbcWSpb8mszrzbhigzN4CodeCUbk3tuNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iYbUFTqfnRRr2yK5qZhMXeFSWjd341WGhDs3vPGEH57J9Dm6SrtkXfnuPNwcA4if9w2bHtLwrGsd35vZoZh8nfU",
  "key1": "2sPCe6HW4y6Uj1XWiH736UMxQL5TWaXb2mFX4yWivdvMssCZTEMywbVf5chHiWXxP4e146ugxbnbMCPvh6NcVKS9",
  "key2": "cm2GHxUNT2hGifVrTqj6oYDBw8okVKdryQWrvvTcyqiSD1L442XQRJNYeQHypeZwH3o4qq2yRextwc7Hbo2cRyr",
  "key3": "2WDbNvMDxnBfvcwrx3YnYkd148sbryWQPQ7Auke3pbEYViwZPXd4rPqsmyi9nGCt3Sd8wZUT96CgZ7iXkzA4uhV",
  "key4": "266grSyoiKZ7R3MpqkDvJwZRYaQ2srC8Hnti65tpGdP5SmSynxDoihf2e37FCskrKSHWy5UKvDcf4Jaxa9KwMQQi",
  "key5": "zx8Tf5JnGUbf5Sim4nFLjTpC6AgoJJpPfQA5yqTiLoDSHZ1Lf1uA2bPqY4PzgTazxam2nQf6X2uUg8xbLDP8bPK",
  "key6": "5a2hhFypJR3sLzV4WwGFQRrb5369U6zf391BsyG7E5dhwT2Gi9MzLiSHYcWrCtgm695n3eZbQtoogqXQegj1haXP",
  "key7": "5yNdo1QhdF8N2ghzYKdkAs7covLwdLBUnu2ygUbCeyVe3eW3FEPnuVaLauU3SULkgUcb1QGd4TSVQP8M28EDqbtc",
  "key8": "5X8QCXLaJfvUrQpf7QmGwjSpeNhZ75DaE5Bs6cjx1BrmLgGCbbmH81pvgjZdXMm9miVgHmvMhduMdLAMAjaYL7cn",
  "key9": "4u6oz5NW7vRKu3mW2xBcwrQTJLzCKJMRweWBdknpiaPVsFCKJaTMZppscZJj9VEMYgU7HNfKxDMxbCLsaFizAtVP",
  "key10": "4UoePvpmS2bk1nPsqkM7zxY1V4dmmURfXvD5BnnrFtsTxtE3j2v2SDxcajwyTNxMfiZ58dbV1mumEaYU4xMRUAci",
  "key11": "3UZjB3GB6sUweDuvhwKWLW8psp7e6q4WzmH8rjCgf9xL5iwZVgnYRNZJh9un3M6pwcCaKxX39huSApLh8ZDoavjw",
  "key12": "3WaAgiNT81MbcyYTNGQWdpuwGXwTUYchLMwj3cbBP59hXVSDyJipFWgtYtghGVwNWFt75uqmm5fSr59MNJ4jKaot",
  "key13": "2gqz4iZD8R8mMCp4ucVrMxpSpAQiDNpmbtQVhMzmM7rwo7Bc4r5BeH55Prkgx3vN6jr2uW1DQ8ADq8mTaqcQgcCA",
  "key14": "3TEh3h491jRsLGcpXB6ampN2NBQBTDpVt5sxSADrph8bqXdnCnAekuv3YMs2aF2nUetDYDMp1yRLN6xac5ZZUJgK",
  "key15": "649nB3rE2D3NmTW7YhH9PAHWpM4SfFoaVfbKgojTQexyY6WU5eBb8scmtFrMKBZUUAgq3ASrCvJuTf7BUiTAk2aN",
  "key16": "4tjWbamqRdrCVkE8zKWgSRLcftKcsHfWYT7U4UbxPrt9hEhRK6DP1tvjc4rYrEW2bs62ZW4ivN8BopFdy6RApRS9",
  "key17": "4DKvbWwFGQmC15NsCmJJsqR2JKG87zaQ4NPE2prVUaHg39mmL7zwmpRqd7cqjqSwXNBhHswwyaqpTLAbPRVRXexL",
  "key18": "4z43zC9F1WK7xWGDBfEziwJWfyBueAvu46u1ZZMi5VvuwubAStzXu6hNEoJtRk5MWXa6yq7ES95uBQyr7Bh9FBrq",
  "key19": "27VKT35nkrUzDhvyUQ2aub1GRPNSQ81DmP3jL2xaFFMA1KyrzUCfqLoLbRSFD4hhn9wbMATCp3h6ryCLqdpmj77L",
  "key20": "Vc4kojHoZ47WYuuk172p82vQQWHYKUmuSejo19oewiHpvmN6pynCnZ7q2Hmvv6yCK8dH8k56j6PapW9TDdeux1M",
  "key21": "5ncKnCjY6KmwfUxuQUJkECY89s3m9vhSPs9dboRzdr195zvBJGc3DBvDjiiX5PG2zVr9DpJBHns9Savfb12DfR2K",
  "key22": "5gEQao9uTuGovGQxeCW51KnbbZe5k1Q9rQKZwPGZRyZVehwKGSFTrSdLjJrzwcANTVWhC13FY3dQjDrCVhrLmkhs",
  "key23": "2q3jSC2cKS8WJa7YPZQcjs9jhkZj2THs33jjg73nVqwmZELcvhek9rcEABmtw6f3jsEMDiB6h4jXuzHYKSboiaEu",
  "key24": "2UJa7YasEBFRBSBwZQNM2mYKKB7A86kHMhBLWDWBUyeWGnuXr6ppjbBaK33MzjWzoLrorkKEayqWVJ4AbWZaP5zh",
  "key25": "3F1ayUj8cGEnXnD4iKhXrcUjb8wvMUqrtNkLMEiUvEh9NwMyXjevhRLfHgj1X337Q12X8y4o5uKXKoenaFhxf9M5",
  "key26": "3Kutrz15qC3nkYyKSzs9181Q8NjYr3ua41rkVN1FeLmYRboRdrHJ7HMHU4gZFf5oSvwJncoLBGovjoyM189V1Tz6",
  "key27": "3njSBPE1LxCDbzLLkrXbfMTtwzSqfGuyYdyLErWEW9aJG2EjmPyn3NjEEe6hUFb3wdjaDYwHwnFX1s6iL6uDPgmF",
  "key28": "2ViehjmNkEMRSpv3ApFiGcmaStK18yBNgLZ2ydN7BFDuEzA6xYXbKkFYD3RqhmMLKpbma1MFQTx31H7BfQ1o93Mt",
  "key29": "dsCjVzP3R6yLCZoH8vbtojoEwj9X1CcBWVA8BoN117nzAiWnM2vH8z22gp2bHcS9vZaceNZVxDYEbBj36RX78Nk",
  "key30": "5d2pj7G9YskqQsmQvEp3maJz23TWTzmkPiMym26YoSFgzMevjsWJY9maCuUN1m5fj8LsA3ZWAK78mdif7zNZV5pN",
  "key31": "2BV8nra4fV3sVfiu9y1gu2pVU4QGskLV9xrsTS5UScr1nRAhuEvnUMVGmDxeN1qkvPYg21LoG8EgSZMoHs7tq6hr",
  "key32": "4qVq73Dc4Ui1HSLc7i86x5SKyoRmYVpsXyHzcMMEBh7xqJGDxtg5eM1S6nWdgRkMiCAmJvpEp89CMfjWbJL6ZZiB",
  "key33": "5g8d3jnbE5SoW2HibkD2oq3WPzrpQK6bpdA6v9vTpVPNbAtJGXyFtwZriwwWJw17Ki1juesz8uJjusJu4zyzvwSg",
  "key34": "25xDr6NfkvSdgcY974gkY1YSbFgf7bDEzyqHPWm8CWLSDk9qmPCmU8yU1pYTuAwvAipC6bPUJbhuATNSKuVC48p7"
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
