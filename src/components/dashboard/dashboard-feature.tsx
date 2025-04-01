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
    "3hg5RDjPvoWAbEgRecDqCtPBL7W3PNEVjQ1C4yk4WjBiJ1sVGgL3NfPkQ3km1khu54HQ4HgWxCt9brWDBrv9jyJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5heYUwXyQ821KhVuWJ3FuzseXSSYj8Tj3A8L8wiZh45WxSnKMDRpzsh4pXykpLYx4dnHtTqzy3LtktAaRDiU36mm",
  "key1": "2jjedJ1DApPJ71LScHhZ4LqvKjVGC3ZJMSJ61FVg1ubP7nWUGB7vENsWnC6WW2tqiNFvXS3cM7fifvCeUJSg42AT",
  "key2": "2vsqpdpS4tkbER51wLqwc16LPv1cYhyDVeDmWK7EuXVyByB7YkS3T3qKMbtw3ke8qnBizqWPhVcffxwsAyoKx4h",
  "key3": "3GD4kTGs1LhVNVg1n3uSBFvuv9CyKYEiXkJrfZrFokkjDePKwCKu63WSeyasYgQrWPBmVqMN3ZxtRhPeWEMVdAag",
  "key4": "4XWMVC38afNyZPRxvGvADzrBwSwPHEX12YqJnQUSTogdSxBCauM73moX5MuDQbTdjkx53bA3doZnJXXhPAKLEW8e",
  "key5": "5FJHhfXxSvg8chDUADDyAbJtxzKAD8iDBHaBkyDVPEC7oCKiyXg4b8hZ91MRuHRkRYwcpv9pt6GK4fLXFWiTaY2K",
  "key6": "4tK9LDTYVhsGfyYHt1uSBewYuTuTJTJ5tyvKC4ApqYRUc3zFnp1nhUASKwiH8FS6qWyQwx9eQxSRy4uQ1ur7bohD",
  "key7": "4MFbBCQKKbJbfegoGPU2LPnqY5ciKbtG11eGMW2QmxKp9irCKRMLvma3kyojaiLqeFRknUWSBM7L5SSrs6Zkn46R",
  "key8": "34JBTsSzDYDYwdNEuXRHV1ydvpmPCsKbxRE4ekv9gsXLNNveWbEwCHwyQubiApZJFAbFHbzwgV8Ysmvdj4SKzePE",
  "key9": "uDh5Nufr2opioo7KyRLH7eB6TK3bF8HAXh5GnTGavPPmzxHdcXsXV77JjS6M1sE7msuTkyMUEcfn2aXY8SFv5jU",
  "key10": "4HHfmWMEa5obE5qNiyDXteDUYrL9zuUrA38Uhij9D6qL6GgxQ44y248cDohSPivo6Vpd2wwNyrsxfCQYiHYM9Ga3",
  "key11": "5XZkQB3EUPBYW5myg8SvxuUtF31arEP5N9a1RcM8y3NX8LAXxuRZrp84vkg8eJMpuUV6CPLFkjG3BtR2aYxPuRa6",
  "key12": "2BLhHzy7pwihfmPuoFse6d8cC4J2YJsGitFq5e1b2jWuAUtYYZhyCkMrpfPJeXBJmQ3zffEtVHiYzHrLA1jSYAqk",
  "key13": "g1TGedd8Jtae3V6CD4bgPeotRzQAEGZRg4rRgVVsNqm5U9UUStRpRJrb5d3vqct9uutsiPuD42BgE9Aq72gsgWh",
  "key14": "5iotonJiWwuwcPNsPy3spBQEtuvYa5kcfzPkPccvWTMeMf1ioYHvX1irDhQQGuC6bB5T9eRbXvCwMct8UjkuwTbY",
  "key15": "PwShCYCcQSLT4au9JpmZ1AhgxpT8So4T7AJJWig8TeTGozQE9zPHMCyfihdbr8pYG5nbwGEPfVGAh4ufSbJi6NZ",
  "key16": "387piYa4Uv7twU2BHK4FqELBMwi9HfC2DJHLhBVb6GVdKvUBBuzwVtUY8SqnjgxWhW7fCjHViVVe7MLpUyeGZaGU",
  "key17": "4aFAWVhF3RjhL4emQ8TmQQHq2pAj43Bxnz7sKSZU9H1QXi2QP4utXBEvhVr1jxdmxLGBhpvEKUyywdJRF4EdNqe6",
  "key18": "2LnFqtMQf1Krpv7RupHoa29XL54zPA2ttXFDg5jmoskEP68ijP47nwGKYS512ceFRLrasbNKyaZvJtwNpYGUvE9b",
  "key19": "45H46mvsZBS6EBxfiCGPHgUARbtFh8A7pe9sgLKUe1nYuZQMBhmwjFfCK81mdNyr61yS6Zcxv1rWpJmLZEtp3UbM",
  "key20": "4CKmP1v61L346L5vsrUmeuQMT8dg6PTa4appgjbPzUGFNt4iZ2BrUdvsTxbPJsCZg9vRVVfnezxTmXCrmeRMXz1h",
  "key21": "4PCjZs6yPq2MKtLKP2cLr25oS2NAobV37E9ZVCfSHaU1bxfsbFf5CpADHGTXMnn7hc9Lt6UuxUZVYjDzHmipTAfX",
  "key22": "2F45DWoPWWEom2z616FnwzS4gHAe82hRWPXEHiyVJWnzAFNY2rBkcSwcDXNubgV6GhWnnkC4JZUVijobpch5D44u",
  "key23": "2bWU6MR5ewX9rwnpUKiNRwqJTqwTViQM6fU2UfVhBitvZ5KqzmjXFP3kKuwLGiPphpqMqrtG3khAm4krtWyrAJnM",
  "key24": "5cB2ATG9G2R3FMarWnK4iyStpZAHZd1ojz2pMtcY6F4EAoiuzYPcFdX4ofVAXYWfDuzKHzNfjzrgUuYAiyygFrWt",
  "key25": "2K9YKgNXqYmgyLU1jZxU1WcRcmYVuu6eMp1Y75jAPjUtMi9fgwAtrtfq93bneTs4YBtLnuoAcB1VtycAYfxFVwcH",
  "key26": "5DcGrY5vEcpcyB3zByb53F7CZnAUxQZLiZx8DFZG4xUixH1ZfgLpAkrYfjZjPRgtWCokEsUxKswAQP6zmRj8pcU4",
  "key27": "2iADh5mts1Gmxf3Zv5LUkRtcoQ7NYR8AtZ9rbk9uAEYc7UHJxiLd6efcDaTGu2aT2d4FWB8HWKFjHRbfx78CpvMC",
  "key28": "jZA5drPsWv5LwoBw8pLsZXVGBNLqrADD9rK7sk9Wwwh9SvnaDh654ZeHApvUFbGFVGJWciTNs27vPDdvQwEqVGx",
  "key29": "3bsRfrT5PANeJRxHtf3ApUqjDU91hvUcfjRmFSK53epw4Q3akDTaKJcHFjuSzUkU9JinwMKuunVmEMW1cKNE3JVe",
  "key30": "2axLnouVnCT6maUR8bmvQ1LaLjPQ1xJrpTRxcFFpgCWWtcX7ZFBZ6A5CfcxQgXa98EwQTMdWECzny3DV66DDMk2B"
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
