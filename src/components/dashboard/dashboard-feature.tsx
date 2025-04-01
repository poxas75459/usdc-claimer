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
    "3zkaeE5xLe77NJetp4sxMAAfKMKfQSGbnoEseYWhDJoaMCPRXWqXAdShUb7cuYXHkZokiszKs5aEXhEzdJ6kxQzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CyFbSwYaTk4okWZd4t83gjegAuc8HsE51wWbmzeVuZWfUu3PPg3t3nTisoHRrARoj1r8okYVtASbL8maz6asLhp",
  "key1": "2cvjuf3Sij2n6m7zThcrquiM2epmn1A7h9JCfKUuuvURav61KuMuUcMCDPvkWLCRtcZFW5q7v2sjq4mRf3vudxju",
  "key2": "5iBLt3XVYBXp2j8Q5tQdoZZwLssYkZxo9H6A4LyJVyZFQSSSxZ2pFA1ao16yuzbkPYU1TNBDHX7JMXP5Xx1Ztx8g",
  "key3": "3RMbuAbZxon4yuxseiY5CpXXaZCnFrZCd6txpDBBaYAjs6dRBzsE1iVP2o49W4BUYdkFEt2unp9HuRa5Ct2j5g2X",
  "key4": "3oTyezjmZYYka1moqsZapAhffggyvhj2DtD47koJPYv2kE1NtYSgnaHnuh4TwG1N2ZfZxPNi1YDGezok8GewCyjU",
  "key5": "3DjQcYvqbPr3EujRWZfznv5dyCRYA1oF2UN4GxEfMg6o3U8jdC3goh7RtBWhCNmLcMPrQsPX6P6Rjfv4XJ9sRkz2",
  "key6": "4tbDkR62ccExyyL8ZmoECGoMkPKar3EhEDorhJNtrojKjhXKNBrpLyKSggkiSDwjwC9aRF7wE9v6r9L7p158dz1",
  "key7": "4nw5i9mZXRFGFYJQ1CirBAaaomy5CAgJKsCAxBPEqhPyynYzAveKAm7NZCpXaLK4fCvZSiGdRDSfaMwTsztryMtP",
  "key8": "2L4Gy1wxTkvaPxCWd7XVGV3NoMiXMAox2MqfYyCYkJUjYSj99qzgmYkUfRck5M9szqRaAsjPTpm8Fa4uM3fkenH8",
  "key9": "4AKECRVH9DzWkHbaYvR1Z5GAAMDhj4woJFPncDAdngnWa55FYUcWpvS7jZbo7fzrqv8UXpVc4ikZk19Yf7abzi1S",
  "key10": "3Q9c8smySccHHxvgP2H7UMhe28NWzYT5XtY7coimzx94JuLYA46dVmWpsmf2vLZqMo2HDL9BUiTNMHYfebA9w8q9",
  "key11": "3pmJihnHXZG5JwwC4tNU968UPLmCNw7utjprWHEZdRXC9fMLyELGrjvNfVupoRCzRCbx7o1GDSQ41nJF6vDFQUPD",
  "key12": "VdrEg8dxZWcVWidLfxMMfYng9vB6oSoyxbGpTySr8ykd7zfXmvkT7p7kiyz89oQP9pPZfE4wxon8WpqxCZNM6aB",
  "key13": "2hj2n8cq1MTfduJtd5MmrnSZryQ5FqjkDRpfegAQwNwZBbYpNGNzihtNApex8bn2dHAhVZJKCb1rkU8zqrMnmfYi",
  "key14": "4vr9cCLLiJcsn9WK2ERAyyD6mh71APxNyU9vGbxv9coZTT4SmbWXjZJVVDWEFEp4bHFAX1dRW3wgMYqXYU6g9F11",
  "key15": "4JTt1MFWVFzYSCxF8bMuQ56VFTJWfX4udvMuurVsABm7CdKszXYRikGZRuiizH6WdbTz8CZfhkxYpzfPGFLmYhfn",
  "key16": "5qCP36WzgGobyZBbyGfhSULWTJn15VEg8Jk8fVSKXfutVEnyXjkt2gojToZBJJcQDFWfPcXfLehc2rvhYettPwZr",
  "key17": "29Z5RTu141yxSWSdSix52xXRbTNUYDT7eJ2R11ry5HAk7piYiRFWFyxYQoCFfC34Fx9jyZ2Us7gBsuHbJoSDNFMv",
  "key18": "2wmBsJCcnGNcWssi8ehLYbvn61ru4r3EXQPeKwLQR7WXByk9y5DGQAycnzuTFKzkvZna1ZwSyLxPvTuiTyvzZt2Y",
  "key19": "5DibUdc4HVVch9JGP1RRdszGrhGK8fffZJojHxUfWZQK1Vw7A7MqxWSZy23421qPxWYC4EnTYmBwKEUZ5fjvxSb2",
  "key20": "2nBuhSDcUS7u4Lopr9jqigZ77poxybfH2hqVyDuTvKUmXx3UwbUKWnpn1FG78ERgn3LPy4fALWwULNJtJnVA3m38",
  "key21": "2eey9zfmEqZMdKhv2B6Ppud55chDmmysuzikpA2XXrZvJNrgPZkmFHjpGpQZC5xpLrhkyCZY9TRBgmjhDwT52prN",
  "key22": "NSLgY9P3tXEWjFF5gaeZhEnyhEywZ5a2rMwgQtNj9Ga2xyoKtsN1JM4f7maiQQ1rLSdy7GwxBtWv4jPB98SdbGi",
  "key23": "JH3Us5mHAaKJi7ujMpyr2VuZf8Sf8hhpfBPgrPvYv1Lyx1SQkiZvd9Gg39Eaz8RrnawBSvXu2kqramAgrmyEzdE",
  "key24": "5UykavMDTKUQuaMVtJjnU9Jgat6sr6rXE2LeH61k578jtKWEwyWXt2q52Qo1JdbqmbC8m84Xpauhxr45C7tF4i7N",
  "key25": "fMvNiVVYV8raS2KcuywV7pXMwwoeTCUteU5JTVUxYu8Viyi3JwnEiQSUQUB5ANUcW1nCdvG7VjWVgaU73oq8Xdn",
  "key26": "4iZEJP3Wf9XCkLxLLVYFE8TVYN5ifNW18GBbp2fi9MrSDChga9qEUcpGFzixtKJiuKc8sEgp7oTwEpHXdzmXDcXa",
  "key27": "56DRz18vmHpTbESsuSpfLCvoY2cDyoUXqHJXGhXUFyVAxjCyqZSngvhRmGn2YcYPj9HXU4JcFDNMTjow7tpPsE7D",
  "key28": "c9iEdB3qdohj7psgNSKr1TmvWEaNicMaKfLYPEPeLf5v7MAAensrjmetvSj49QhQLetGBWuy4ogGkqp7tTFmmga",
  "key29": "MsR1Anqr3pp2wZsmeXswqM9G5bqJebdtd8JvF553ZXNqkMNz5QBorVJtxLdxw7DWz62pTfFEqq2cAYHcgfWq4zb"
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
