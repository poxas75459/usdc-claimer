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
    "2BfWyYR9v8GQ3YSi5tyyDocUBjiD9ybuVsDgYGbCQWsip7vPJiVeqLTyL65KYaGZGhEn61u535eZi8iDywuepLXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p7YHSapCRMw5NMgrtPF5qnoK7bUyMkqnrANy31QoZNqawomzcXpDpB5adtwFPcQq6KKwEvyKivpD6DUESp1KFAc",
  "key1": "2rbQBKwBR92FMkWWXVf6WtCCgn9iv4Q3XHJwpPjwTzw7NqrF246QJ9ndq9uC3UUJQYEy22JQ9b59oJhNCooAfmh3",
  "key2": "5bWRk3eBPrY1nHFAvdbWV3P4CmRjp2SwBnnjY1vrBstFxfYUjRYhjyTUb4Zq696dc8MPdmHxo7vt33azsPK4MGJG",
  "key3": "5MnHswR1h2zLPxsYBoHkmyYUDjt6CwqGQ481CpMdFoXjNdWZ8fExusNf3sqVbcEcbrHUzxF6R7SDn38gtUwhcDM6",
  "key4": "2chnwF58FY3cCUe6JuGWErQrf78YLLAkRTJ27fAy1nkzRJJ5Xa5rikEoaWNe6UgFLxcR2ZGKeLz3n8BmY9utFt2u",
  "key5": "5hUZ5vGoLDRw6Lywo5yiVqgp5f6sgiAULb67HoUxxnhPUhhkwzwuTiGGoDE5FMcFxxAfkHdf9kfgh5Sn5H5VeJUm",
  "key6": "2uMit58o7p2htgNv5o48ZJ2xXgsTgTrsQAZLyAAAJxpJoGydYWJUCw2qZ6kvCgDZKbVW14VpPSbPpnpTFpvHb1hi",
  "key7": "AynDD81Uszoweh46xYrLWrVTdc8VaWwLHdAWakRYy6gUznJqw7iB3h7uy6b5oUQ5he2HfxQ7vGGxSWbEfRdmqn6",
  "key8": "5FU9gFpo6utDLWCUQtDWh4FDLzMaKmy2Tt4uDRtr8cPGd5ym6CE1cf7Rew8sohf7ATXtnUBjNVcyNV9jhAsqCQ31",
  "key9": "4VRsCbmcYgwnwZNAZ7ekzPWBumS9jmK71c56uW1by18otXfJ1KsuG71EmMzuBDTCcTXgSHBzLrcf7roq7VC3HCTR",
  "key10": "36fTEvtVa5g6BazRGtNTUrNr1apfcBvt55cHvdybHCjdkEZ5wSLmSMTkbo8iBTNaMNmtMBB7aFX86Z41pfsvjCKu",
  "key11": "4kzXgSymTVKLHK8qyaE4fDXfbfBPAMi9eCTdarmLhqdZMKCJQmcFW9sphkmYzTDdupBiNGvmp7j23k2wAP2v7VAd",
  "key12": "5BGCQ8nDuJbZYUjJ87qXfeBtJdvkLGJXfexQLDzjqYNCxxAHXdstMVop82mc7Q11jTeGHHyJqYC4t8EeAL1QCv1o",
  "key13": "PesMNV985BfNNbv7L3H2oNQNdBEAy4B42x3yWt4B7TXRevn2xhpdF83c9cSx4sFeCYkFXHQvqkCDZcnzvsEMWkm",
  "key14": "59J6MwxcND86PqwyU3rPw9r1JHnYXuDZ4sR2Kk2fechAwhhNLqh1hnn9EzmaGze4iNu1rrVyGjsx6givmavTkqu1",
  "key15": "25mRt6PZbsVP2A7FqaaWir5wz79EiXEYrmoTumyRUBtawPDrF92eUKdbfFf93fjrbvg5o1YKNUDswxWycV2iiHDa",
  "key16": "4gaBDdY5EJyNyUrYKXXnMxJKb5joo5ivXcLSiwM1pLnAGJgnTxk9U4xtk7HNVMAEW9GJ3NfC1UL63tXV4SBVYeSF",
  "key17": "2bn1TuN6337UyXTmq3CL6K8ZuJSPMxLwhzSFZxBNXCWu4FzFYhha62BYcgsagXbyddvooRnapUrKN3D9frGfAoJ5",
  "key18": "5uwMKvdFvf3Z1CooZzfx5WbVRXgY3dFyXdNm4jZB5DHAXB8iTmP25CJ512ewo3ZJPyT4wdMSmiPiYo7h6yr7Pumf",
  "key19": "61ickjBokgLT7Si4CiYdb7Vyyk6uZzC1Wpa5jPmngihHT1qBgfp132rib5ozreqGTqMzRkvnCUUMLJKKp7MAtzvP",
  "key20": "4Em2SDLgMMSSczFzjwXzqwrvD9NxSy63b3dQx5KuSehuV1n1p6D692UKeAno2hLR98JSSE3gHQXAddpXhjm2auMn",
  "key21": "5q8vxctD4kpFmQYK5kzs88dLxqNHJHJ2Uaohcz2r4TsVzYtXjF32zd8JSNZ8Tb6ymKqnNLDYfRebpKtyhZzX4mK9",
  "key22": "PFoe5QhfYd8MgTgZsgAAq8JMWPYvtWVNqBUH3QDSFZCJHmCssSR4rALAUeCngM6rVHMV1ukvmgQD75smNvnowyd",
  "key23": "3NN2myawQrdz3yAzfTDSWaeAqHzKYdzvJxec5r9K5v8XQYKgbFcKoWs2kLRTEBLH5M3uCmA21cqXB9PbEqhXok19",
  "key24": "4aUXsxw6qhYocgp8eC3hXNsxwgwH5Bc9Nsfwmdya9EYXjUfKzuh2Uq3ko3FVmv14x7edeahQZnA3wj2So7R1sQwS",
  "key25": "eq9nLYbrJwyoaF7EiG1FTVKM18yZpvtFHvhhDQFT9Ec963meGztYxQqruMyKtyhpGeKTXrutfFVo2Qow5SB4d41",
  "key26": "2b4tqUWSh4nGF8EJhBvQTmUYBEkvN4Us7DeQK541jGhBkhaCDHdW8c1vmFASA19WhFRaxMmYUtoAyZvWrfW4vVxU",
  "key27": "es72DBCQgFgffWQwfSkEvyzbZts7p5budVnSrbJCYH6Jo8tM1wTLWW3AuCQNBFJQ5jmNuXKryzeZdYk9G8v6YcA",
  "key28": "59JXgVyYLrX5wjrTDZPwqSaF9Q253C4MiMqNs24m8F1md3jNkf4FdqGVaEJ1y5urrgQV5G39NAfXu6ZcZXTjFyan",
  "key29": "2vpUu2VbvWBBTPFGfDyGKxyUCLnRm6qT986TetoPRdnHy5bWYvr3q578WjBJFQcDZoNxoxk1UK3ixyPJpk1MxEL5",
  "key30": "525mKYvHAGDN9s2X2h95zw4y2RJnWoZGeBaSS8yPKZ7eJZJnNnFJyNchqUEfjDA5prcWbN7xCZeqQpGctvDeXrmN",
  "key31": "4G7GpLWK26YkZoGxvHPMqQzykvEjKtnx4K2svfpDiqv1KfxABK6LNwK83a2DcxWs9b6phdNQyk8e35qsjdww8SV8",
  "key32": "3SfUAZJHQiDECHdRNFTonqra2vcSDiqDL2tw3yikzaJAdFLxWXqsnGhCb7hox2noJq54K9x7RP4nc1thRjkG3b6e",
  "key33": "2unDvQrZq2NH8g7txo8rReVjh2NL234pzEzBEcv83BBbnwmEPsZ3j9kexs1BoCngRXNafRvguFm5k3j6ngzbHBP",
  "key34": "3cCJZL7RKyKBrj54BcEingBhH3U7QkJXMcAsBpVFDyfnPNENFBp4cBPZoUKLA3fSfKPwn79KSmrFJrhhr5uw5rKJ",
  "key35": "2PMAZmYXvwj2ivcPkCX49hHsGkoUriAeGVRWePcDHoS3P9Yb6rgg3yp5BujoLqk11R39p3A8nx3XsWUgZjTkq56g",
  "key36": "24hYfUV4JnPx3G9czE3i2meFXwQCELcnbfz1xhPvumFMxdgoLZS2maRgH6Dy8CHwBH6ZSUGSkFvtjNT3BJ9eYh8K",
  "key37": "4gpCy7adpBn7viYWwcCvUGLaAwTyA6bXm4t2uoDiygaYuA4S6QQ2R8zz96sNE3Wn29LdPu14Gphb2LwtUdQdbzcb"
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
