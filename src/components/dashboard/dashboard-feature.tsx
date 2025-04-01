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
    "35862qAfnPp1DkrwNpxYhd8m4kDWZMneSigvbSpyxNrJiQAPbWUxhiRoBaRZG2EZZZZAzZHB9tbXZ3KguxB9knTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58QVs7nLPpiiDsoFGm2YbUaJcVmZbHS6knmqphd3WaKZCXVBvHHyMtwUKpC6mhyoUcsmvdEucqavdYHcHXTHZuhH",
  "key1": "23G4cXTkoruEvCfVFv951qcmdJNYYZZARMUZ1hLTrXBY6iArD1MmTJ1YQ3zCw6pnSahi1pXKrLBwf4naoeVwLkoH",
  "key2": "2aZ8K4VAtqFxJzZoxMvS6vaczS4xN3oJogZS5KcqqciLPRxJodTnH1w81PUunaVfhzNQ2G8F4t9FQWsSiV6au7BF",
  "key3": "63L3z4d9bxAma6uLYevdNDyDDHoddwBkTVwZvLUWKPTf8pPCtG4upQiyVUEy9xX4zfoLmyD4JS5vdhjLPX7CZPiy",
  "key4": "3nrVbouQTHUS5KXgE4w9x12mHFo91Bws9aLFEbaTwEhcEAhZWWFciHuKiSAyDCCYTx5N1R5ytG3QmY51PpjVY2a1",
  "key5": "YzyyqcwksNmpuL7p2WdXGzf6Zwx2sDaHdyyMgJNwA3zbSUnWzQYtv3SDrX4naYABt94SYRdVEKNPt4x9NNkmM39",
  "key6": "53Hma753Cmko9VQvzULjRc8vMAXg9FVFSz4S8yxRzJGmoj5RZqXxyTinqUDxjmsd3D2z1xwgqarjtaSosupvz3Fp",
  "key7": "56tYzZrjjhMS66AmXwZaECS3sEv7g5EfjzsArTJUv5QMGa9JMpStwBiaiJvD7H4LdxqiqQJyUTUFEWPbtEqyfQkG",
  "key8": "ZtHD6CewaqP1PbF2LhJiot1Wd1SRFrifFNuxogze1TBRJX4QnuWiEpTXDrmeiELY5dLAmF8ik1ueyoaCbeqEZ5Z",
  "key9": "3S5HV9pSAjou59vXiJd3DnnNZUhzttbR7Jq3fBvhVsXpE9jK8dBg6s9Vn5VBM4eJRc6dH5WA97NjpDPLmXtiGUg9",
  "key10": "5FawH9UH6kofrRoPhEguLg9m7fFUCFF84iiGwRs6YRv2Cd1QbQb5hvXiMUbtrc5RXp9Zmy4uwpYF64RWmD8F33Rv",
  "key11": "5Tz8n8vnrFyvbpryY4SWb9n4ubDkZoV6o2KLjceHAJocjeAdFU3RquvDaHqfWeC2wGZZE8QxMYVLPQhXR5wCtCRF",
  "key12": "4UxtfzBYzGX6HXySYvWjuDvuRdxMWyDjYTggCgtp1QzF3gwajGhkCPAb7jy5sbABuWnXfThy6rB1tC2DWmTQEqaT",
  "key13": "mov2XART88JBqrXKJxVSPiExj92Am1UL9KkF9zmGLSoTNCgTbARY1GQ36DVB5D4uiwiEJXHruBF3Vp2cWzUeB8P",
  "key14": "2casX5xAv5mFr2LNt6MZX4Fd91VfWw62ZXhPw1aX3K3any9cMEEYXs5Lqixo3BMF44bZnmq1xeYbN5mWpZGXkdHL",
  "key15": "334GjExyhTEHwyUy5iBYJs6c1P2rApCkv9yVbXYDiYFkpCHQVMZnQ4VHtDnABgFzpMm9RX1gFmjs8YmdgQC2o1hs",
  "key16": "2kAqKqfYVwtgmBfH2hLSrq9yRFqV831vnSAHHPue7VLB8FzyGccYi6t1QgjTHJbKad9VMergoDpqbjN8Kdui4a3x",
  "key17": "3J7w9Pc2GP4TGT7wokQpjXoRK9uYEDfg5Z62kzVXYgsEmJRKjbFsobM7c1JES9KqQXfbw4qWEr7ATL49RDXCxzoG",
  "key18": "5eyLQWe9tsfYhSVAnewSB5P12gqWqSzLjjrqHGboeFREZA8vssLDnFgp6dVxZ5AdZnqrFKCqxfJTNorgGHKJGLm5",
  "key19": "2VHshJ7RLtuwXuK2HXEpNQV5jhP2R3moTL6g2NPFGoTcHH5g51gQVAoog33cNjBHJG5Sjvmy8hJTXkv4nyEhPbj",
  "key20": "3DrMKFTUs3VS6nPbF9ddNxU77nWq72wD2qkfMUzWuHqScJNEwNv31rcwWhZwamWtMdhw5Y82VApQ92ftsYNWBX3o",
  "key21": "TehxXNeXULD56EBgu4aCoNibd4YoGeUuMKK5LaMgWUuxSTtQmWxNfjjEQBjZH6kVu5nSRTkRAVePMY3kugBGcuv",
  "key22": "4cR1yCFZCFEypu3QMmui1bdVdUBCy7FEG6tgG4xumGG4Cj831frbx5MLDhX7gEvNs8eD7MJb9vQcBrFuT9sGpKVZ",
  "key23": "2rfYfzBvYoHTGKG4wqiTVQ29XELZmVGbNCPb378y73pBaC7QdWXVzFUFys12xwE3EwhnmC8YcU9LsCard6JqS33v",
  "key24": "4ZuMXzfvgkAxWzGkPqexM4knsZkiqzWnSL9GtMPaxKXAXnLTZjrUedJka6byysa7swjtB6Yv1CcXRgpWosx11QvE",
  "key25": "21L19roo87C3XQ61sA1no2cUt3keDHVrUGcEF6wkinx5t196BwwGbc6nx99ZG9Er7afyL2gqpTNxNC3a5sjJogke",
  "key26": "63YuefstFPrZJAiSiZw1GojuruSybAwxUjjFrKzYTW6AQY7JBFsViao2GMSYpxutkRsWpxMx8zrHfPpi2ui58aHE",
  "key27": "3ijJ9vDavsQVLgQaszVwvwrBGbAejBTD6dbxoewNjX78jFbzxpW5ipGoHonocX2PGEgEk799Yk1WbP85zcCK4cfi",
  "key28": "DZXSNwArymmvqFPb4gdwTto8DJTYjYgzhcEEZpHrsZJ4MZzv3UkY5GzTuWwHYafib1WARf8sxmGEYDx6B27LS2W",
  "key29": "5gYd5M2i7Pry1rtReV3wW56ukP62nEW6k1bjoTYgUhUEr5ManrEGowBueEqL7hbk1ofGmPWNpy5phKWBKwVyQ5sW",
  "key30": "61GFDKU7vrERZJqM6i7ezWAKp5LznetTyt9yNvbniPPYvAS8VTkAKfa3892j5MHwKUQvCGwb9yAXLjtaMseDKciP",
  "key31": "4wLaA3CnbmNFjAYgMDSazVEm3ymePa8By5WrSMSR4ooe8P26BucdJhTnv4bBY5LZeHrhsnmiHtSvre5ynnLEW8V7",
  "key32": "3w2fRzpwq8hm5zKZELpFDg3zB94njHSxMuGHmsP71PQDwLQQ92tATdAfyvE1CkTfYtz8YqjjThJFmQEg8RYHRmPN",
  "key33": "23JFfwD2QTYGdirSn26fwNbN2j7W64fgofVTZY84twnFSEfLTebkrs886RX9Q2qF2JqHXabC6Gorf8HXnnj47hdb",
  "key34": "4jxheQbRVPBaZktTMMUiAzQQy5mxKEhKzPbej7BBs72wMwweEdhjD17rPzHTztsp7kjLD7jzAUZH9mWV9kTmnsan",
  "key35": "2bvu4ZKjQP3HZnrdPd1yW4hJytyFg7EqNJYEJGLsxdn6qNmg3kXC5Jqg1LgTNkcRyLsX611shzTcmVMRUyoUa5vK",
  "key36": "2TCcF9XPfdsXpioNPYRqxMc7mF7Rciqh8pgLjSFTu7a9UYY4VRn7yURyRGDa4E4aEWEjxxMiYKNWk5DfdLpFFpEV",
  "key37": "617x9JR1iB5v3bjsALv2aCnEomouS81PsBMEmyiYHRNYH2UbZMVw52L8myRxxYwJqQFKNRsYdGMos6U7UXDCpsir",
  "key38": "5H9JWSRmSM5Mj8n4oUj7cdrD6D999Nk1eSUVjDiPyg1Z5LH17yGLc4YZm6yJkzYh38yN8Q9sgBFaMasyAPEkzUz8",
  "key39": "47Bz97f3iyGGnHV9D3aDQUNdqKj35KwReFEix1em2mzwPfQY9LEeTsA5mYUYktTzYNfmTPgTmcHykoxbGEYucRby",
  "key40": "21NCWhqbAnKs52NgPMwxcta731o5gM76wHLjBgJfjjTUVxq9yE9gzyRAbWXL3mKmuVqfF4hiuEZCR4eirsGDNw1t",
  "key41": "2qDc8GWLC6NCTkzEUXZ5stXQRuH43zBbSgLh6X5NWALcZ3op33LvWnUhj2h4iqTMA4myatLeg3qdScPYU5Z3yMxH",
  "key42": "4JYD5tsF5Aa2TJZfahr8j75swyChrnUnETctZjfU2TGS4ebg1WpmNw4yftXk3rCfDdvfTMc5z4YN88xe1Mvvz85i",
  "key43": "3kBYk8LjPVTtPNGpLiZYQ9trN541RNRxmPxtgxrxrpWa77wHJKJJRoTkMmRcXwLfzERuxNsCDRzKBu4VHGs9tUpD",
  "key44": "5uoJ5ehYGt3LR8iQRBGtSkyiBrothKmc4wGeJDrouyL4pZS3YnWBewCuBJxD6t7Yrqo2vJsYNMuDFJ76EUxe4xgi",
  "key45": "ShUCsMZ1to6fpwuagEY6yFxmciXyM5UDrvVeGwi1SdmwSCTLuhn5m9rDGsxLoysXvqEKsuVCDiQzNUaX8tza6c9",
  "key46": "ZXU2Q4mpAsicsbmkysZj3ZEaW3nAUb8qiVHzn7rekRN5jaF9ArST5j7RpQk51qg69dyzWP7cZHoLokArGHcHDrF",
  "key47": "2prGPWnUBfT3LZUsAfJ6kwHYGLWwnAgnRByaGyin1TpziKpntuca4QbzS3EABPnV9YFcjDE375c3hmCDSNBrcRBp",
  "key48": "XRXZAi2gwKDorzeT3gB1kGmqyuALewKHk1gYW1Y63V2cMLE73CDgTNGSEmMbCAKSKqEXiEjcj6jMVC92kq7uRYF",
  "key49": "3dDPTqBueVqzJeq1vfyDqJ5uNSv7nvV437dj7r6aGFjQ87DNSYuB66RebRfnuzUvGi9Xeee4tKTeTfunCLEdA1gs"
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
