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
    "4abUNWEeARzM2n4fZSZCU2eQHYksSAhV9qBquCGyCoWbSXPLoSo4PMko8yFfXQiBgUS9mcr7zcwigd3JSA9fwzGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61R2B2N9pYj5V7wiWWJveAiVNpnxvWqkMoS64XqZA7zrPSycKptAB9116yBA4SdQ676QYrm8n4Rc3A45XAYLkBQC",
  "key1": "fwL2AxmYUzVnLJwYQ7s6SSjnzscSRgHdhz6c6MgSZTQQndei2jnWicSHAH3Q86fMBZoXdQNJUxBugzd2fazs7eh",
  "key2": "3B66B1WEv7zQmQSmpPnUReYwadbVxEqMRZJCVFuaCoQxCWKGZYnTNK43AvReiu8P5Enax59HJ4P22ZhQDkbjcCHH",
  "key3": "2MbYp1EPnad2SjHYxej99KLryJa3T6Xu6RY5Ms1bbnsk6zDviv7SWcysZkQ6F3Svn7WNScAaMDcXjywMcK9S9k1K",
  "key4": "4hToEw2Fx2EaPtdPt95FJX1NRj8vhUCzNz8i3wnqQf7miAuNGepdyBChbB31oKp5kvCbhoAXQKVnsiVSfMrcQrTU",
  "key5": "4BrfM1w7VV7tUTRqdtsujihwbXxC9DmhAk7dZNbKA4CgWRZ3Wn27HCpM3qwCxVR1kbaiqsDjV15dRMcev7dNANfx",
  "key6": "41Eqd2ZFR3FSF7gNe4YNiyAK9nBS7Y4UrnXwjyUUi57nKwL1sAvc3Rcc2oW2dSV4HLzkcGdYSLFRKqneHSTz6VNf",
  "key7": "4DzwZ3dYnyG32neidjCeUWajVzZqa36aMiamBBkJTn4m2XekNJZXr7hHWjdij81LyrEfF7ijeGwtbEiZA1BaTsGE",
  "key8": "2XwCh73qDHXdJ5ARv9KB1EaNF6c7NKU6SS9MizL1aQCVmphcrQEiQGhX7V8CvX5hxcJNVRsDvrAzZ5wrNs5y3pcH",
  "key9": "5B6NBebYrrhBMee3R7zuNjZ6S7HG7Xc8tF4HDRf8ic5vDnWriu9qjf7hTKwpYmsKsg4ocAJsXNSM3pg29hf4Nmtv",
  "key10": "2NzYEnWdQjaNeVPifqGN12XH87qYVVTzCivA7JbjQZ67HR1ukwfyA2G4bWm6NBWiP6JRjwCuCqc9h8CaXXiFXyAq",
  "key11": "3BdvPGdjKjScUjw78jw5vMvNtmkiaUyAUYKfJWys4j3ywhwMMhXycbodyp1Ci2NEjZohF2uPoziN27B9ojfAAA6P",
  "key12": "3ZLSXH39L7NunxZSpSFe7iAy9XXxbdwW3Bo1BGS3sEMTZTGo3cArTGyrNAdXGABR7X3hs8iwfXgAiiaSEFJsmzVp",
  "key13": "2AHJDdJHdW3taYyuvPmBmnGXssn3MrMcJ46FKEMfUeetc26hXy7ZFX9jKkFVPGgdVhnGCKGcaGA9FYf6aghr22i5",
  "key14": "67YVJV6kYRm1YyAJNj5UUdrs1W68hjdhXsvCDQDhYYWVDWMd8AQzKJveiCzGALJwDBrBw57t8jYxT7Lv3xw7uJAq",
  "key15": "6Hcf6vT9BqYDRoU1DEpy8vEBEhPpB3HhpeFNkUaL3gEz5PoKshws99udX1Y2GdENwXir56WLx3kWddwjU5PCrje",
  "key16": "vqtk1K23MFrUkC58eMK7NcFdEFV3MKUa76perQJMvw68DWBayo9nYDT3Z8vYN6m6DDC8ocEQbQd5HJzRtuRV85b",
  "key17": "5xJ8kkVpghPaXm1zpViACWn2pTu2g4tMarUbnr6YYwF3knDCVT5XKhhBKhhCR72w6HJtbCaRHsvnM3voFyYfBCnu",
  "key18": "2xfNYzjZvQRDr1JEcyDNHW1UtYdVMF4nfxdwSEZUU9U5nJyPwk3ADJuEwgkkHkDDzk6ADUaA45K9y6ySp5dDFHdx",
  "key19": "2pSeB9QFVMPJup2iB6ghfF9EFXsCDtuqco2kFiRLsmCZ5QT7HoG8NWWhJuKphiAExFWnmBBXRyuiW4rMPR6ZEibr",
  "key20": "2m4ibE9JpUppaZpinYMzWA82Jtr47N84LsLPzs5c8htETqdAhxcMxtg4TxwUNCGDdm4cVXCkQRgn5muoft4DdjSV",
  "key21": "3fpQ4N3J6AS2gPY2ZfhW7ghSAAuoAUMmho9KAAJmQmhmh359unLw4G6S4WrE92hvLsNhaqcgPzPsd7nN9JKYDaPj",
  "key22": "2T6TVheyu84npy9tmb76vvyJKXk55jjN461GhoUf56XiB6drKieK6qL1vM3cDdZN4ht5d4mF7vYLTNoYxf9rBvof",
  "key23": "3zX8wmm8Pev6XLsEaXEjMv93PtUKq33kRdXKnhwEpdaVm7n3T4sPUoAsYPsh6qgXbBhXN6n5fM2TFawrbbMJabNY",
  "key24": "3gZ7fnyfufoKwKh1J51CGe5WNFK9TKfx3NabywXf6nw2cEcS8NCFkaihQqieJ3Fby5HUFKgenzYjmi1A1sxAaHQb",
  "key25": "52Z88a8vH9VTwt7UC5ptgN7ijPKpaUP41YKZf1k4ti3ALe6ZRKyCscSVWUy4ZueC1NphS9tmg25x3G6xFNXC5w8N",
  "key26": "2vKjE1NdibgG5PUoxq5EatCpAK77g1duJYxqByNrvgWMTerrXUhjiaycbJ4KNC4A1mrLgKBhtqJuVxGHSA8RYtn2",
  "key27": "67JjNcEcXE5rDNiCK1ZmmWmQYgZSFp4KtCo52AhGE4ebFtKgcwyZdG6FGae1m5egSaB6JLhqmb7fUxBvDGP3ts7m",
  "key28": "55YGiQhTd9ugV6Mp3We49MpFHDzPCnYsCfQ7uqYHaDAx9amTUmNJJAwgLvyGsyVBKi17tG8M3T4CX74dEz7dFvbU",
  "key29": "5E6kyZJndQTxaPmq91bAwWzWZ3rruhwieT2Es8kqGguGix9rupuigzHkFbEuv6EVpH5vwbX8gi1Z3Uqiq5bat7Xk",
  "key30": "497J1eukWsSy3KVffaJQRPurjNceA3tBoHPgpaPAjmH4NxMAhvzx298HeobCg3nYA6hqi8C1isYQPDv6pgufjB4q",
  "key31": "mPM84pfuys97nhxYERPcqzBDDpGVQTni8h8EMWxH1RM8S3JSTKQ7jEwtQ1jPVbd9NrWHoNzqcscsEqcJ64WJAeY",
  "key32": "53PCtfRX1uJiiSF28jzDtxKpPKFKNHuKHdRu9ULL7aoozgCWs2xNz8YgZFTB7wfGPrJ96oymTfe46ypcjpru2ejg",
  "key33": "8vkuFeD8M4yik8RvZm3ARbnkebiiubwdSnYPG9gW21N9xubFGYvMgEd1mao8tuupgwzyxqZPgbARa8e5nYitWPh",
  "key34": "2zNPvQxjVQ1pAaxfv31AnARQjuq3pKqBag14jXRL673E5YtacvosPtVCzrYoYbKy9LkPvHyfe5fWzBUxbLDbsdNj"
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
