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
    "nCJA4S9mdfz4nFGtwQuKUKjrPyiEQ1hDnzTwoJFLjYiau8AsWw6HwADq9ize16xZ6VYjsM2TLPr9fJSRCMD6fVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bBztWQixa55CKFuM2dWWSkgtG1BAaoM9v3qeR94qJuaC5N8ME2Gwb4BjyahB3KaTyvxBLZjqT5z4aW2SCK66mZd",
  "key1": "4FMB4MnaQcRu4EjoWAiwxJaMu8esFKNvkzk2yN624PojTjarubr2xpscvnmJ28rLiebb69gFgmAw7H9DoBNGbmuL",
  "key2": "rjNNLAXqPbz2BEE9UWQq2w5Us7C1Q1BybPvfTBFA3Wq4YtD19FNEhZW8YM594EeoopDEwYFku2uBTZiyCwyBk55",
  "key3": "4DwEz2DuqwFkn9MNagC8yAU58YzRwLvoYJRLESetL61HX7pe3nhQhpneYXuWjDVv7V1Z97PBivBCXLwZ2T9GG7PD",
  "key4": "ZbbR9tqZSkvpkF9pDu71STTMoVCVbJkaqBfdsFW9NWMLKU8cpT5ZBSUUS5rSpxW8B3LR8gjutCWxRQpjNJdVLwZ",
  "key5": "2hxYY981c8t7GzmYCC6or2ATHf6TonPW7vKogLUuEVynCgPZRrc28Y5hdoCa1PEHPsB7B6VeJLbr9XCEXekiYKZQ",
  "key6": "59CCDobzsTPnVtGvpumJ6KiFCqjZiFJQFo7ReR4XKdLKWtoCkwsVc4BV1RxsNTMpVGRAogiSrEuBVLf8EhEYfGMT",
  "key7": "43nMLJpLFoXBq1YLi9AyxqDTR3YxAhU7TsoFZTFb4mcJHe3mma2qE7GAL6kj7ZEUTzbrfyv9mmpWgzEbQxxi3kYg",
  "key8": "NLTXjRQghqVdExHTESNa1ZcZPb1sf69cFcVTaBtE6NnBvY9wuezEdpdGRB5mDYAhNLqFYt1hXTnast6TLF5PRTg",
  "key9": "3jcc1yr3zvsrSu21YAB8Bp8qsgUwaXHr5sWdhkwDQGVD9TuqDqoTowqGM4SpapLJD6BZkaZvE3f5qwCDWSDJqFHy",
  "key10": "5PfdJqE4B5R7WtgbxCg4gcQpKCFe1weKEoAfLDx1DNafh2NkhCPs9ePFVoyNPzcy3GMAbt8V53hGku4VYLwRxvuy",
  "key11": "3xeHzt4UMJKktVphSvjBnpv2p6HMYMJPRidwmdcnUDC3Y3UjrDBbe6kmgQxRbBoLK6epDM6Q5HbRE5a2nxi1WnXb",
  "key12": "5gu93bF3oiJ3d1nvB2Fe7E4ydJwVn49Vnv4DmjENfKpXn7ku8sf3J7Q52YtXQQws3ytkToskhvt4nejVZpHQT5vQ",
  "key13": "5EfMPJug9tZEFRyRtj1fd2q6urGjeci8nfztukFHVDg23nhRHXYhdDMizsS5YYpSa6Ttr1ZNnDZVr5puNBsiAxzC",
  "key14": "2HMRis9pJPqTqozq9mtoKN8UiVVgRmDDCUXiAS81yvdq5QTZ6bo8y4R1xGAzsFMCJwWzhne4NTGfgUtaSScLY2xS",
  "key15": "5XyacAfbiR64LNb7ygHZiN4HFer2N6NUhVHpLfQLtTQ44odSCr4GSqUn92rfp2xLqiTK6UUqPFjJPPaKT4Df9sHv",
  "key16": "2YmoyauULo5Vouh6TBfhDQKPbk8iRUmvnoNvDq213WPSGBXeCbVad3AgEHULVnFvuHvfpggGxURuZRcRGBxGpETQ",
  "key17": "5bCRnFLfCndpduF6sPDN3xN44Gs8PEhA8fGD9fWJ5aZB4YcmjvqDiCbfTG8JRDuMN5yqzxkgDK831zvCNBeoADEQ",
  "key18": "2V8FuhVMby1sPTdNEzXnDmc3gKNR31R1LbwGQ1Z4smhgypPe59zhVJzSgWjx169PTT4E4XWXTaNWCpqAxiDNzoj3",
  "key19": "PymccNenHTN3zb229fXqQZm18uBdDqbsNMfCuiczoRaKNLXtziqFPQs57ijzDoQXbtpPQKijZifLVG5SMPhM3bv",
  "key20": "4wSM9U1xBttBgCNxwtfiEYh8JucMV17nPsvuRMHHgp2Vhxa27ii7WemKkioAfsG4ac9VCbU75C93Pe1QCg98CK3G",
  "key21": "X7VFTWjbHWdoPMbjmU3yLBcedusnE79NUmP2CBjye17boo4bvZHbRnrUQqhpPJvX4xKGc3bstQU5R17CcMbpuRs",
  "key22": "5E3oUmM2QSL89prTJZC95xos7eStk2tTErQG7BTFuso5nN7FhzbVT5XMCBsvzRojE8XDmFtpqFmghp7yZRUQugJX",
  "key23": "2PkNkYZULbMmQi6TWF8zhrg6zceuVpTJKDq2XdaKBVYdqkEVkrEvu9c5FvW4Bba93fFQ6p6uKv9b4xntH6WhxTi",
  "key24": "2HuUGU5xEuSP9sWvP1CCZomFcbf9CYzLB18jDhV61RwVAbWZUyMnN71DFnp8a8cYU5Qx4LwKB6xG7WRtN6cfFups",
  "key25": "2CY29SNZzyH1Hk3UMdTLrYLRZ5mimyxBoKPNM6oMAxM2xiPXxNLZSkWvMQ9gpogBauPxzenmvx57DpuhVgk9UiCQ",
  "key26": "2fHP1jfHmGWA9JbRNVa64mto9agz9c8rdQLvQgvTL6wefQeGx7hE6CS5ozTyoBk3fa8RwqAqYbY4KgKEoYn7HTWj"
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
