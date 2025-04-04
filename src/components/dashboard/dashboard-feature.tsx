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
    "jztYd6v9TZ6rFFWDQwjEMWBj6SqLYp7TMdbQmboAsAZoFJfFDvhDw1oZzvNSgp5CT1ZCGK5oST9FT8uw5AjsqRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4smMoQyi5gaEaxAfw6Gp81xpneRupBLdu8prEpDQevdVsebyNuS9XbCDyZUrwMdSDL7ZHZ6w59Kir3bPDiWnzPsX",
  "key1": "sUDjHGkm6q6oB9i9Sn7hy18gmBioxWKV7ayqnCTViBt1ZVQqinnBomEpKUsbZKzCy3A7DMwHLwXp8rn34zPbpzj",
  "key2": "5KA4HDhnzhchaQKXzVyQSXhffvrzLkUD2A5AiiXLTf5btQzx5SsgZ6GNkLTZzCFTZeUh8dkT5NffNjT6vZTXhCKZ",
  "key3": "5in65RaFM7hz9YzUa1stqn9AfkqhYMzyDRwA1fNCxcpMhtY447TdGwUPUGBP3sX6qdezi91CReTTrw4JXvQr7dNt",
  "key4": "2cWXWPoJNHJBpsJ4Cnx2iJeo8Uy4Dy48Jqw9ZRpPEL5rdBMfuebZq1RNiAdi7nK55yw1YJhQJfx1Um4f4REb1pkL",
  "key5": "5cnUfAoLdNvdKfKxFA7knDTtaG5KBFLSWaJJqUoY538HYkUMnMRTvtNMaRjmJbz3Gg1p73dPmqYMYD3dMioyrDts",
  "key6": "4dNUFbi9nYXUcNixAsNqyQA8pmjkM6MnZFH8EMqerG62xcwkWmTqt6rDx9pWb6dehyshcG1obsKoNq38TAEjcZxW",
  "key7": "5DDA3iGvqZ62nQwUXACHoU59rFhcF3uB8mKmpxMiZZtMVcZtCocSnGsXXEdwpyHdAYewrApUbdTKij22KpvW2GxC",
  "key8": "21NhFP2NRxqFWKHkhQwSj97v2kB4knEtqAqK7sgkfXanx6skTX5yyWT2nQ4LNJA3GErTHdWyHtKWxTXhGhmZ4grx",
  "key9": "3p3pr4ABaC2ekpxBxUUKBKF3vgdinwmHhTGa84ji7abpLvHHDZzVq7tmnEELiroSeHM2kktu9bHNbxuceHQ84hyP",
  "key10": "3PEfjBX2aL91HmGY7REYxtBZnASbwm3NWwTKjvTskCi6gNpwfPG7LERrd1gF5J14mxsziA4ZueKHS8NZZsP1KPcH",
  "key11": "2Kfg6oVJfN7ghSvvMQQg3E38pQo5GN5hC641HJkZXWd4oQ2TgZPgNUKgufd3wWRRsWnm1dRaBQjGurezMLee5MxB",
  "key12": "4ZKorZE5oEBYR61dDSQpzojepzv7vHzrNjdBMDRzvKmidrSJDsNpSbvP2G7uZCAhMqvRBkDFE5PMECDW9YrR9EkA",
  "key13": "3Cw1TFg6Y8FM3sNCMtoHbHRwk5KgjcEJD2cyBiKEwv1qefodScBqYyorHtdE46LzTsAgwrJnixXwphWLHtxLTdfX",
  "key14": "67MscTgYACCiR2qegHBZapg9PZwxD9H6pAtnzkQHUSyGBQBBkvA1Z9vAzUtHrTr9mAWxD4VJ4K3ybLagcFmNidVe",
  "key15": "zTgkBjTBxBpGzfstQqm8dhcDQB3rNgAJ4GHBij5BiEGRxPx8y3ANWH9remsx4swng66wAApumqJTco9mUxStZHv",
  "key16": "NHzXVFxqDr34u6NUJjCqb5CCBBNX1LETWV2U7AQ8UGSP9povELy7sMZxz8SwyK9i3FZjV3fGRnUVmcftoy1LJJq",
  "key17": "3grMeBcx4mNm9U3CQ7Et2rqLR6Z9KUgk1KWRMk5WWAPYWo1H6m6MwuXaRSyTMyJjfTsG4xoJK74bkdW3dPiTxyJu",
  "key18": "4SLR5DaNdZX91RuDNoradrn9cJnN7LjCdJ9wfEoqH7jdACbixUYKdH3XLdATKWZcRsYPcswbCUB8wcBA212MvQHq",
  "key19": "4TnBbnLXbFsjY2QaMBA2NUpfkVfEZ9RtauEcmgs9EWcWSytUPiss5Fq9L9D7EA7bWuDrtX2V7TBpcEvgBvuQAjyD",
  "key20": "tjDwUyCzbvMvubu3YtkzfxZ4CCJBUaV8jz5dUWfF7agqaw3ckXfSP5fHcsZxg1WT4BJk9wgBA2VNSEBWXVsKNFF",
  "key21": "5VKTnqZpdRDz4TJ5jPk8YKnu5AR9ntERhWoo4SJHJZqg3vi7Nri8D77qV4eKmetC5sL2XmciB5yNZ9ZZqHMJC7hm",
  "key22": "4to6qev4YEPDGcTUjR6s4CmCkv4SLEZprPreFnS5zDae5bzTbt2c3jYiAxq61pF2j9A3vpxEXnVWts6MYMm1zfZh",
  "key23": "9VLH1E9kLXd9CnG8hoby4NKgSHGBA6jyprU3nNKVwPcBQpe9NTXxWkk4LNpz7Mt37MYNsEZrjaMtxNrEHcJBxqX",
  "key24": "5Wf219hdCJtpkhgsL5bHSpJhEizMDM7rjTQmoRrz6NaE9R8CSzTimUZZFjVuWrXP37mTfzrEjaJsyhL3ntgUftqm",
  "key25": "3raUbVrb3pVjsFtuQH3HoABVgocAb5rccwcpXDAcFnkPcBvFeH4SNojArS1hg9z9iDDCr39NLYorwvVV5DjYtoWo",
  "key26": "2HjAD3HbzXq3d3JQo6VTjX5foF8g3boKZRdrcQ6fBviNtAMwWyk2YcRj3aWGuzZN3PnZ7UbzFxy4yRtRttXJy9b5",
  "key27": "5xjrEFoLDhZUCEk1UL1yvmyyHJmKaWu73X2uP8GG83TwsZz3Xeocd2FkBLpC6FCiDGNBtavzEKguJjTX5X7XieS6",
  "key28": "5RLJZmxjdXR4hFjuB3WAkrcsFvTKqKhKZhns91nKzN22mZBRpKgqR4xr653vhLbzvVcsCkecn7A2xytWHFptSDK6",
  "key29": "3JUtQWHV37HgCTM3Pi62WSKA1qkxXJyyypKE3Lj7sd7KVLJAnNuK7md5QRswpBg4J9CyX2PQaMHWj4bjAuuHnsVC",
  "key30": "N6H92uj3WsdFF7cBcLUoLdUwYJS27SryAny4DvNDV5QmyydH5TX4EqR2kT4SnCWKSLqLvBefdZKPGwLzB8cRMbt",
  "key31": "KbirSRd3cr3ai3yPNabo4nvt5z9Z9RcqxTxpKQKKpLnr66MwvSN9WiSLossVaaYQonREiQxyFWQso7vkRXscDvZ",
  "key32": "4psXWi9LLG8DWkQqe5wixybaefvDhyjDYyigbfXbbGQk7z99UyeGt3xmU3h5M861xBJSJvxxshUr32keGk76hLxC",
  "key33": "LLtAnQUet4E22ACv6w9hEPfLGZ3cW1mTPVBBAaqqJJqKYrkJPAHvqe9GGZCMnmySuVfUK19ftjWfvgepZh7671J",
  "key34": "4wT54s94vPrb8ToKdGJbHHanxgt1RLTFeEF3jusLwSpxuS5bETJmxVSiaGc43VkRqWnwiU4CJgCdoRjq8Vkbx8hx",
  "key35": "3qwzxZ88TCNDyuH8iQgo8vt2ofTQN8RpTcHYrBMJzAmgk6CLR9haQNEdRz6eJ4MdbdfvwuFUG9RHr22VAYsje4Yn",
  "key36": "2oJUNSJvUV9ECyNq3mTQCNv1MVeirWjMSKvVf4r3rTcGKMAryf7H3yweBMg2hXg1oTVfWAxyZy8bTJmjrDb3NcjC",
  "key37": "5jHxnyNGRbQATFofLgADtCm8i6osPbpnZmMyPxVg3Y3PBAiqwHoCqBgknwyD8imw9mVSEWeWNcZd5R1TbH7uRenQ",
  "key38": "5tsYwYJW61iHCZPssnECmqvPXTE37Q5zTSN3vbKE5TxyFxFkCwLYQmkFNWHA4Spqiu2cBTChs7N1Hkiw6NHj5WvW",
  "key39": "3H9pNwFjwD9pFMMkz7gr7hKbMZhT3adY1MBNFhKVvch5VUD1of4dSRMx1UBaVcHmaJc2z5picSEw35X18oZaZLv9",
  "key40": "D1gvgMuo7tHR5HqrUSJZ6C6BzKH5hinGpzwwf6NQYNsGGRzTWUCaY7zDpd2Eka7oB2NjcxVA5UQstbiS649qqhB",
  "key41": "5SxFi6Pks75tpmHnoQ95DT8TjyQ5AHasczQRR5XHwzkUArTPa4wPBvU3fsctsr3HfcsYv5YkgWYHor8R2bNiwdzP"
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
