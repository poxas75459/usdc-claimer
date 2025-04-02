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
    "5zeuPZySoSY77sZuvNuuimAnTe6i1SBu27tf76fBujBz122moKYkCqiGXNB1NJ3WC6dNJCHGvKH8gaQkB5iJUUm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jwR9jrca1ra4bDcDRTnndXvWC9yVAwuxvM5Gje9wXvCGhvW84BYdXHe9LMPnW7mtnRee326pxwczkXiD7aeTv9f",
  "key1": "4zBnL8aBYiJVUxj4QVvkmKbSZPnuTimiXDVMdp2hPQyrjVeLWw9B1pmHmQwdvw99eQ94RgcN61SMga1pf1gJ3siU",
  "key2": "2b8H5CMXUKi7NeX9QvS41sBTrtoyTdiXPV4yBHw2eu1Jw5c7vhPA1esXeTZNZivJhX6LHShEwebBGFmPtG32k9Di",
  "key3": "3Mwa3oZawgg3kKhUjBYssc8WLJfjkdoHa8fCDDqRhdBNcwAnEgUK9pkTy73Hrb1MCvBVkF9pms1KyztBVPEyEwyV",
  "key4": "4Zkq62m4Z4UMEZTzMPo46p3pVg2Nxu2u1mz2zTkoywZDN6QPDnaWs8edNcqT7stibatEQ4XQQ4TVjKiRgEKu8MTh",
  "key5": "4nh4zfbtCkwEjjDEkkNFWogFCh754ZoZw2MFKzfpBPXqgSDub2T1pbXoiefHnyCi3Z2uhX4NHegnHWu4q3yqHZM6",
  "key6": "2knRE12xjM459LoUKdEMBJckCchmGsQrYPDF8KcoPtes9DLDfStSMewhV1xGehdivjcn5ihQ1ZA6L2wjF4uniNhr",
  "key7": "3HfAvsToGftzxAYtjJxSSCdgUfecXf4CnWytDuDkQdXb8d15jB7LDLpGTsdeG3uStEDnwrUQYQqbehLtJiCau8XN",
  "key8": "3Yz3fPYKp7z9H1agj6A8RE4Cz4nHBeFP6AurAtXb6V5qEXjBhqps54bJUc2ieiuQdXsTPHKnHxwTtgEJuPqxrfES",
  "key9": "2TmkjGgA4LqwjsRyis6yqduzNEj3yQ59jsLBYYn1cB9aDZm18MuidPuGnE37rXxkuhmph6hnKyoHKgvbN6JGfF6z",
  "key10": "45rzBXQiHWKUp7bLH55NCx8Gqz2vDJWJMjHpu3Bi8MSj7mDahu3TpC2Ubbus7qxA2Kn2TgXFDfA2y1iCzBrD5F66",
  "key11": "4hUv9QBGQvUmE6Lpy5Aiq7peZS9uk81iumCgGxLUiPGJiTRnaVC5niZAswqFe1SZtevKB24bFJdPgVnPvn2LFnwq",
  "key12": "S4xMnEzdxogx6FugskoFVD93dbiQTgn2oXNWrrYge5p1CdysFuYmxAaUvndLiRv97MyDkyhkRP677ZYZ8BPCn2x",
  "key13": "21H2E6iaUMdWJZjtRwAFq635yjbh8GPxmYa7eAmpJeyabHtNxgz9wozXAMW6iQJBYWWbXgPc2PHeJk935QSnD2yR",
  "key14": "JKYbRbXLxCRh9kr7awAKZUcB7haZPhdAxRPa4oGXr8kUCRdcsmLudt2ztWHcCuSBTvRKP4wpPaz7W3iVVpZ284X",
  "key15": "4VxTK8dz12Q9Xe1g2kHqFzNDWsjSihhdrt7XTAKFUXo5WooQEAN7df4a2yErqWreU5s8F3Pe9zg9duczbDWCEwY4",
  "key16": "q2D6rv994ccB4pxGAWzGJGWyCTcNo9UcPChSyVx7qawa3SygQ2yqy99uBsi6ZprgY8infpFMr2JLJs9VkoApHds",
  "key17": "2nggJPugCXmAGeh5ttWp7JvhUYt8PaiaB1MwFWhskMsusoYBbEaqanyDHRTgJoGJZJbbsTMpUDPpxpeoG5RrPi2C",
  "key18": "3ZDfdiz75fFMzM9PjucyeySqNf2EcCzoUHokDQcZPFbztPE5ZDjmjb8ttDCFsBDX2c9B838o8erUKwGNcPMGkukm",
  "key19": "27ucpPNTdEKJvGuQFFkQbdS7JuAMztEdXBXcFhCPyF2QrboRftUVzi9e7a9iS58b3H2iPkmwECFxuo7Ziiwi4HsZ",
  "key20": "35Z6bX1h1A6iLFV5pBHa7vdJxovE3bntnd9MsXAHXi8EwUJesDzV4GNu95Pq4B6nzWGfKrRyuhio9jc26qi7JmoB",
  "key21": "iu8hj25TVUfzok6Z7rgzqX41iFsQnRdJei6r9pZFbfghv2WMAQCi4t8k1Kw4WzuQUGA2rAEPECHqb78xFt4veci",
  "key22": "56cpbWHR6fm74ENfUwHYfQmnhL9K76YYfxC1axGWPBtxnmw5MtsWeiCXntXvjkGgGhBub251MnUWuT6i28JQnSYT",
  "key23": "5H1gzNCDSUFxXiunCdBRNHjPo7sVsv52Cg5LYrxCoT5L8m94VjaTZYS349HjpRpghMww7u3NKyudAoMfHD4fcznv",
  "key24": "3nqCdFv6ebcm4JJmG4XkS9KeK52FUxhbnqKTnDdeg1YD9CMs9gB6XzHY2JTLFb6iUNFJMiiCcxEmnUNbWjXYGmyM",
  "key25": "4AMkCyfTKheK2UqhzfF9TSi6nhG3mF7qkySjgRLkYubzAbyKu1oMUUaUu9rCmT7k1uxFE7pyytCP18kNQrNixA1v",
  "key26": "29d22Lokk5zppYWtdibhgVnkoAFWoipKgeCERmYz7otA5tWB9haFmj4sDHPmexnMxqSt5LjyUAnXFvMuRWSmKwcA",
  "key27": "5L7HnKfRRYTBHGonRRF7dGhrJRrH3tkRbxSofHJGe6hzGnGJDiTt6nUsDE81KNpH6eTTujSoAf9nAYrJd7ryXZLR",
  "key28": "3j7zBg8UxsvVkJ2WqtuuHELDrRrYYkAF1rrKeGbMhbwSrqoReh9G5xL3QggrCjGMfJbuyirmpXzVLnvWxcUT8w8Z"
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
