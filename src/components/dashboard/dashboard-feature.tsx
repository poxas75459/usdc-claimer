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
    "2PVZSnqkdKJWFzyvF9EeGvYD2pQ16i5KNcETrajaMeMvtYtmoc1VTdEAyf4bxHpSbhjfiuzPKqm5mrc9JJJYmekR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mjcoxKMnk1dCQwU5JtJhNVBLsyF3co1ysCB11dFfWT3DgFoQg6AyzkEoDspYDkvPnoeAQw9PzRvfmMYgC6HB8QL",
  "key1": "4eGBZT15wvjXMrycEicGhkm7FzHfjQtEG1MQGDw3xP1CtDk7jJMHF9315hc1YenMx5XBjvADNR737KQeCADwmnXd",
  "key2": "5aAWsWyNDerQs5vv6vpXVjoAihvH2gEqsY3nZ3JA2b9zJAgNQFYfM595WuEhYEbSWBsai6c4C8VkU4bxbJxFCMDP",
  "key3": "tnXFeU3AuNPanKo6B6FnmmX9B7XqmaKYN7eFspft2jqnReMByAD1VhYrwVwhVJUEtv9Z5HEfdECvDe4W7EPCs9j",
  "key4": "2HDrDpPrE126hmrrA6hJCgEuUKvN9YAQaaUdjxGEDYxpufsdjtkAVaKMKNsPujes1avDgAotthL3V1taBBUFTkK",
  "key5": "33aDcEsE2SRikGjmt3Tob9ktPZpMpRxCF4RgB4p6GU3CnjnaYDRnJfEvwgQUGdTkWzbChrLpE8MSRn5Vy72GwenJ",
  "key6": "3baApt7BzvZV5JZCgT8agZAkoYSHMpYYfYTbvoppioD6cTYedc7VZXVbVL8Ws17RCp12USuj7EkZCigX44axHgRo",
  "key7": "3JbePiXCbLNaVJymjpprx63Lkr6y4Qpi8t9S1wq52FXvUvMmbGp8w6LvjjDxtGXXXcig5yFCgqeeMehbKWqZkBiQ",
  "key8": "3V8KUWvbZ9aJrE4fGdBjqsQNWaTKn8Yc6DYiNBH4QrraRZheiZeXY39i7ACzYc84gt2hN4rb3DLGKoy6jj5KzyH5",
  "key9": "3G8bTcaoVG3oQpPkEqgo3U6FQnYXnKdpTj7kAMq6R2dLFofkNRQrefgKWmACNJo4u29eiEdJZP9DRk9wBJrHiySB",
  "key10": "26QuKhdS7J19BcpPqbnufRAwavYck3BRQuur1dwYaf6mzivoTStiQQAkQsuCTCdFFxSyf5VYkZcHTRY9mjbM94MZ",
  "key11": "4Cr6CQFbm7LWNKwfQZrwDKWbqaorUReFTSKWWBC6tVDVmjGr9AexdgXYDTTc4wB2pLaXW13HjVN81rjtoKAcs6jL",
  "key12": "3Ya4TpbnMZhGPbRJTFrAwAoEqMC1cAdcFe8FVdAbCk6zpZqgG8jas9yGMjQP92CCYD7EiD9L7uiFVw2tijX9LMUx",
  "key13": "4HdSgtHptJyXX2eVSnVcydvqFP1qiWBtfrVUgXBNS1jNrxBBhr8fZmNDt9D2abYrgVeGx1v22urLafizhUvPNyT6",
  "key14": "43k9DrufY15aYikw6QLVe9iR35SZqskSNV5zoWUnqGwjfnjMz5pLBPLb29mpuSgkxCGZa2CnRWr2LtSHWJw6ZVZj",
  "key15": "2YTyaagLybRwRKW3YQws45bQVXxrTnNaRW6gvhf9XMZ1oZLJSB2PvtAU5HNAdFxZ8jLhLD9dyodYdPfNhYy3TjVJ",
  "key16": "2h7yjHf2aP27mTyrE2npx6D3eyyGbzvHs5zon1Xa5ksLdBrTRuo25j1XSvPxBi59TxhPmmFHgPZAevEU1zC8pyBV",
  "key17": "5NqBA6R8M8nTrqyMC3tFCmSP9vQEp9i6CFnn3DZGE5PoY1HaNEdnsUDx9xpHSzukeMirYuriX9tN9NEz8xZkUN4H",
  "key18": "2kXHgdLFgHKDoVi9WLcMn2oTDWho69QLsJC6ZAqSGGBXtThzLdzc94QK9je8wqmgmRDZ6ReTkvx8goU5pBmPjrVH",
  "key19": "4xUY6SyPLQJa1GUuKhXpbh1iss7338P5W5sm62EbxM6rgWfq4UdontkG1Af5yo8hbuL9UJCfj3tP8h6zz3H5dPvv",
  "key20": "3keDcMevqV26PxkubwBrKGs7guz98KPYs1kWikngwZugWXNqaHbjHfVDxJsibqhG8gsJq9811PX5EcnQyG7qSrSY",
  "key21": "5W4QcSKCXmQoRxvcCyLDQML3u6pBrcRYkcZfmLNZMEdLMALXE6CfWwAqjeupdpghCrPtXkAghgnkST62jSttDPT4",
  "key22": "3GncoNTVMmXCTStm8aiqtCf51hsmXg3aWtdWtg7u3LE8zCz3J7gHrYxPHZw944NyB9WfuKXCJogVZyrWRLVov2WB",
  "key23": "UFwqkcGsZAanuBTU6bvbA6Yzq5vUFtZG26xFdeyVFWa5xpd6W1HVyAB9Xe6tAyGXixHpzT9aYSWYnivVaDS5MKh",
  "key24": "67q1WrbPs1okaFrDdh6M5x8wSnZscGV8NxNydT2vP3X6wqcWmKWE1mHQNR6SCb9sNLdwXr56cFh9Aj4AJX4xWYt",
  "key25": "KHAbwKuQYEyT1RfeAdd5Vgni266LbvqmaKBxRwNMqoim76VpAV896GQGXFhZhVsZi1LM2KNdfwe9gEj1PiTY2Lu"
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
