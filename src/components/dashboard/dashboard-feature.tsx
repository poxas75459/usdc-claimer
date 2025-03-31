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
    "45Dfr1TwKNWu9qYdq2xPJ2QXzZHfGscHUrat5L914JBT9aSfWWNWwPC5t2CuxXxZad6ihkRPzmVFCsMx2vCN531R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C8jFRPzUkdbJpF4HfsELtfrvXQv3iezMk5f59V2wNMbGaov77Twjw8XUZdPn1jb16gu7HhH6Whqsgdwkjj62FDB",
  "key1": "5tLQX8kVyFR7FVBf8VJox6ejWyg4CiL9qEC7dgeYKjQtGR2xwPshreXU6SjmWxVRhG9ZfWn5bH5FAi9b51XFbMXC",
  "key2": "3BNSpdiRbnbeC6wDnFxzjWUTWBMkVBXYBJpxNY37vBniXtGdu7JTE94y875CDKV875DLP5ZYTfTNfC4UXDcJnA2Y",
  "key3": "iGq5LJRkadVsLrXtk9MuGwd1kygjsUSyTNygDezV3yeDopqk1ybE4gvgzKsyEFSAKexdUpx85G2k2eLtt7ciqmq",
  "key4": "35Gz1NqUgd3DCKnwRZXCA53ppWagGxYrdBnz6EbAMxnMdFStKLB3zjrxWKFqxfhhbxTKGpMhQJQbc56ap5x1Se8i",
  "key5": "5oqzw7faeVywwByv8oruRKDP8My7XR7ar5DW3FzgBSqHiD3KYR7CDq7VH6naY3A5mQMVX1EqLpEniR9LRai8skT1",
  "key6": "3JwSrWbe8gSJeYrumR3pFL9sszxPmzco7QdoQh9sbxZyYToLFQn77Z7UAKm1nL956e2y3KbeuWXXUtt6GWwnbBQ8",
  "key7": "3jsC5PRfC3mnm4UVvVWptVZ7LHxQWB6gjCyCdya4Kp4fodJmjr5MwKmjBzfG1x2HvMVn1n2zwK5mCBTQ7hAb2jnX",
  "key8": "39XdfLd3U7R9gZCPRGAYATGC3cwSK7f9ShcFGMCpae9zMaNVhiZ1Zssv5N7eAKixHHj9sCFzaECjxfK2rJ7ULMLH",
  "key9": "4836ggsxqfNc5mESACMRXbTvLDG8BtT6xjtH9YZCYNypeudWf9ZxH2KjHBc7F3YmpUa97EyDQwmqxTejAX6rANc8",
  "key10": "5rihq7jV8Ej6EHppV1Tvq1Rh4PcZhTrKGL3gBN5gMQknwTb6bRUSJ8sRHvX5vGiF58cgutt14RfgZh35rm7zBTW6",
  "key11": "iosUhceLSZW483cABBVFNNoyaZikBM8CTBdcSazs4WtXFGr1xrrUPJC3YoQWtPGoweXYQyL92gUxUrCFs97ncDu",
  "key12": "62bBnssqBs2z9Y9DMKsyXyTfxdrLGLjRCivNmEZUXBei1kFJtU3L1yF4sHC3tbGDf3oJZ1K8uDeJZYy17Jy3qLzV",
  "key13": "5fEccx3hvx7kLppAXPcC71aPiCKR2TbTvtHYW22DSLbg8kW5YVprTD94SdgifxN8fka5wBy1UXgy7LV2yMMgsuEE",
  "key14": "66FG28m9n618QGH6VQpvJ31eEoRs3BDVv2pYJMuzmfFtMGcWZ9T7n9c7t9qkBmmQYDjiavkAAydwwAsFUqKTZP36",
  "key15": "2spJBbaeFX6a1iB2pVPvgCwc1fdg3wfKfPJJEgEh7EfZwf3pG2bGjj2GZAJeh8sriAt8817pNgbvpZ7ikqKUboJ2",
  "key16": "36RWam39D7Tej2JHnDC3a2iTa4F7YSkBxE4v1WAQFG7LzARMiWTxiRH5gLJt4bnjkLaNhzQr2G4Lm6XPiaoDZhem",
  "key17": "3ckPzUfzWYkqHS2tdmZyxQhacr84pB4ycVfrYoqMRz4HzcX8h5fXHFwo4Mg2NQKG87BAxKnxockXfcj5ymVVYhGe",
  "key18": "5uUTSnS7Zz9Rih38P1sf6285ozUMWmDQcbCgTzTzcmu3T9oAirjt9YKDRTmqmaznPZBztDvEw9azpai7MBLVBsvH",
  "key19": "5YYCZRMY6kjkLih92hvYiiJN235ZCTBsDkP3VAy9oS11c38rMNVWVaCRZTzeurp6swUqkpNYYw2eMNZy9PPZTHxX",
  "key20": "28pjKkJsfJPB6Jz23VGMBaxUFq9YdzDChLea4PxkamCMNSNjTGN4rhhaHyA6YPxkSuNF1WnGcptBDHLMSdvUPe4i",
  "key21": "4jCkzRqVWkDFM9bddc8yihbsi2QA3d9v1ga9bdP4JCEbwkEb5HDPzDnzXamPeckfKfB9gSJok3Rswwb7M9tw1RYX",
  "key22": "2fnDJWpmRbrProcB3WNNziE4ZToMDjukbhzz46kgwUTPAjiaaPoLTXgD4kWk8MSrD3ku6DsXzUWQaRx8SMgj7AaQ",
  "key23": "4fsBYw4gH5XQEAT4WsfPfjFyGwUViabooS9nctiYogsTidYHecqyTCB3magUoRnqHBkahivpDUnzWemDa4cG72hE",
  "key24": "2DmVDu7QQ4FeKWhDy4H21MsaAEfCuNFPMdxkjJrndeupuKE7a5CAfKRtkBknEuUfX9abGghDfWcXXfS1mFF8f95b",
  "key25": "2GAgpJRMgw477hWiavfqiyxeXNzkqwjYhY3nKA1UFPWyJ5nDX7jNJnDhGnP7cwmgYqSXgVYFf81rtFMPnTAxh3ZJ",
  "key26": "3Y4tTTCJsN5Pn6wtUTVDfdaLXZrjCAAUfG9tHyA5XfuzkSsrfJVuP5trnDfSpKo37xfMB7nfYS6v1nLKxAbgZQ63",
  "key27": "CMcRE9cNJXb32rLKE4kJ8uksa5E14wkZVJ5mkTYatfvUEMPqRXRCQ3bo88mjrzRTMc78h9fjY8Wsb9QLErQfzLx",
  "key28": "5ozp3BwyBVtV89auVvx5Tjti96KDY9ZeG61wxovFuvMkbkwDvzc8DoruxuZCd9cnwNpU9y5EJEBrtSYWNwezfaU6",
  "key29": "5ETHMeiXLk7jE9Noaks3UMz6ofEnTjrhKoYjRfd6EaEzntmiTzxY2H3fMoKAxxA2Jc1v5j1vruspr7TTxpU3x5pA",
  "key30": "2Jgj3RUhiCTDDfAVMiC3wzBhJMa6tT3YR2CZ9WCHDad6QMRxquuKJZ7wN6xp84RPbjFx7TVYChHN9mYZptMu1mPg",
  "key31": "3C33AXHTs89wLQVYbd2ceJjpetTtHbuJqfuXBmYF2CGZ5kEUAKdtrdtyvrRERQaZLbPHNsRBhieYP2BaiRq93RMu"
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
