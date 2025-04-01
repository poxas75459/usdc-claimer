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
    "2HxufuUHriPhDVpfH2SXMYq6VUHYAqCravgkdf8vr32hiDAaJGeiTYHw7nQaFYTx1uuChhRqNTSD1buCcsgTPwxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4faDSHytdwNWLcWTgL88h3f2JvwHM9ENWx4sZFiBUXsYt945XdWzwy81mHDTzRUoJ2WfokTqBKdkhtovBvRYWqzz",
  "key1": "3n4XnhdA9fRHgk3yRjvPARWurXTevRmnd4Xen8BehJHCBu9GgiLR7wEaXNNCXwJmfSvU9iXwK6awD2YsiKzFVxJK",
  "key2": "3TuDxY2nUJcFzyHB2KkTQwtXT6nJhKDCMKFWzwoyJvyjizV2wPgCP7c4qiFHpC2xej3UcqFjMEv1AoC7bZkh2nwY",
  "key3": "5sFHUGm7zQBVSUvwK4AcLiihzcwsVRMbh6S31KFvciYtwRNKVJftCZbVV4aHbkbzsaZSFxupMyM1J6YHu1bXd8f5",
  "key4": "61M6HGrKwSzfurHzurL94DRZ7abeJJBc6tnbUPx3ESbJKrrUmwGb7jGxocTFdM5rVD2Ypr1GTzBjbQjHiD5yYWPM",
  "key5": "3rRcPUkjbmTwbx2ncaQEp9rfgBEfYpJBNA74So2patf3zxYjnpktmNPmU7bzHSq8wUcjJQMviuiZrsSb85msqjnw",
  "key6": "L4k1BLTUCKTShGQToKG75an5JBW3GM1swNC7yAcBZmiboPTPdoMG8usL9KBEe3iVeWStgu2nanenF83h5a7yprh",
  "key7": "4PB9ZoGxq3VBgfyZ6We5pFXgFm323kVubVW7otYm1ybDXhK4qp5wtR6chJ2KkUJ1uvALRvhqWTRdtNi926NTCWKu",
  "key8": "225MuLhRzk9ToSmRrJm5aQJRfTUd3ZwEEZ2vaNzS3Ar66wVAsPc3k5MGfDMEgbCZFuytkz1mmStFhZZw3aSbG3ag",
  "key9": "5hdKxdTANysiDKGprKKQHD5zbnMGfybkxq72HsiUrkGYLwBmZ47iisJQMSSfXRuH7u7Mh54TmuKv9tWpxAR7uEpd",
  "key10": "4rAaVnyk6gTFXa7EG1uepswYEwAfAcNdpULkk9mbZgLCk4gPfFnLTczU83cifUaYySx58w412yWYQaUfT43ZhpkW",
  "key11": "3So9M77MNC7p49BzRBbH7pNB7kVZPwrm6cjrSLjDN98RrD8iFX1rhz69ZfWhfNr1zjtN4po7Zv7b1EN1iZY8oF8j",
  "key12": "rRkVC1fnigLunAaWF3az4tBCX44JzX527uyCCnWveCsVSbyhxyPnuVs1LRHgQEp3g3bwwmPeXTpkmwz8ZQ9YkrX",
  "key13": "3JfeL1yJJr3pPLXSiJydppNyRuuwqC4CG9N6YverPSn8QMRxa9j9CqzUw2LjA4fs2cJeCux2uZJoGhv9v3UgLZ2n",
  "key14": "3ZmW6MbEmgDfuE2r2JScTY9zXrVWYekEVpjz2AHcFTDdMU4ZqoQkPKKQV5X2v3psVo9ET2NW4FtQyE6pF1sa2AX3",
  "key15": "4ngKgtHmnsD4ZAoWnfw8ep2PLC1nWGRjNKrcqNjo9ZmC3tH26iiLqNSAFZPSXtGvefP7kf53skMNSyaepQ9NuDEX",
  "key16": "4zXrqdC7hE15cSR8yZifMi16pEnejgLmxGskpFUSqnifhDyG5oPhacidXtery9To6167JHh2sfXxqxSEjzAfAMRk",
  "key17": "3k6i27ZRJk21axWZqSMnv614hpbgJLDxixd4BSgChhoz5zhtDXaoVt7FYncViYEMqsktzTRpQZq4986Eo8XQDmfC",
  "key18": "4gS8xXCRRQhioMd6KoKGVjUbowqccEriCWZS52mSptkwbTzchV7PAt115vaitw1t2ooXJaBDNZS8BWSMqffSrJTN",
  "key19": "DDVssB4u11R4mxj96ZQTjxHx7j1BbVoHNhUhoqNy6wMCewbuTJYfmnjgW8iV51FnZeu8W8if3TeWKyrCKc15XbS",
  "key20": "2Vpb2dLUb9fAa24BtQGTbAsQjeAasNKZt7N12wRtkm8pRHaz75rrWWdKbEbkoUEVqR5RW3ytc63uePK6Vop7NjXy",
  "key21": "4X7rnTSMKz8KMcgLDyYNdoKjfDwD4xvwGhryV71813hszyRUjdVicQG1U8nrfBFouyyiCwaXXSXLyxV2so3C9oEa",
  "key22": "3FbLAiqcULaPgyNihdbdsEiRCtmLAsTdqKEH48xB6BGc9gWBM73bW35Sxe5DRsmPXrUpJFtSoyiTLmf1m63kdDEg",
  "key23": "5yz9XpMvE8LUghSzWkZvrqMwELU7PNpMK2MCTr944pfWn3QYrC8eNhTsbz6H6Ynf6CZvDzEcAM7uGmWYiFoh8GbX",
  "key24": "5UmZHf8XMB89KorqHn4PkZ5AJwZqsh2YntC2eYq4qb12utMo5LwbLkCXxiQaZVHf3u9yyEqtjU7Jk1hzfiTT2LAr",
  "key25": "RFSVmocPdCKFf9uj3J5NGomtucnc9m3tXEpdgyJgx8NUvrg6Fr7dht1ZBssXbwGhqUVcpPvr3G4sMZGxx7GuCKZ",
  "key26": "2iZgUthy2awpPT7ZQ4BY1j9Y7UKrhLRAXTGPJLPGqkb9KRo2gT9Hk677ZbeGmoQgdHGC5GTYBTT2HJkr91LSV8AS",
  "key27": "34v9kCVTQ2EpJ41cCmn77UK8vTv6Lw2hTXMQ3waJUej6PX3ztSwUzXs4ZoTwKryPBGU2fGsAUBKfKgddc4dC3tNY",
  "key28": "4nn4VpqSFYmsanzx6pfHVzkCCUQyXiCwYaMecB2e1TyrrDwWmgZVvMcfPH9mXAxiKEiECsvcTknBEbChKZ8aUieX",
  "key29": "437ydDFGturxh52zgMrYNiLWjdjJRjXTUqbmx8tXs9Kgmb58eSpsrj3hid23AwRnkdYHeaBUAUuQ9ys3W1gk3WLv",
  "key30": "4d9x82G2psaNAXnRSNqzpHKeDh4VRBbfsqWRHwHcTBGkgcX3GpJBas1XbdHCAuYtTiZ2rmjGsk2FP7mFnZdvwYjR",
  "key31": "3uahWJhps3bQRY1wnLnTHnPPGqWJTBUhLKcqCDYp9JztbxaESa69yBPiSbHw6pmtxE3wpoMUvRXgzPNgVwR8R8U",
  "key32": "Ka3WTCpmCVxJs3N21Tgn3Dm4PR9ZmNfjrSnpciTGgpzKmAaaWKkFp1uFVGNG1UVdTn38m7JEJoyrvj8m5RgqfbK",
  "key33": "4sb3eVF4DVE1iZ4HK9PK5ERikebWWBde6DUdReck9tegd5xQ7AmzgQTfhic4G4mGHTEDUZAeytu7T3T6hCcvYMqg",
  "key34": "2hgXpaxt4teazttip4teiGahZzb8eV8ryopCcpKPhqZz5hfTLjjtj6sNhCENKPtHzpvDGWdDUx2CZpozhzNL8VsY",
  "key35": "4U7ceabFkZ1hN7ERFCSfQ7TqPU83Gry24VV3fvGseG7stWuLxFX5waJ3KQXjpSo7XRvkcJ5TezgKAQgfWGe3Tz84",
  "key36": "54zW4DvA2HzHChKrNLmjHcBbkfZWqS7hABGhQQVAGo39aoXsu67LYMCHzKThGH8fKb8A7U8EzuQLU45wZMC3zzzE",
  "key37": "5sQUTpnZeiVT9WKBn1491L1M65tTG58FPsJBHxvS7upHbTzX8p1rT3LngbcNcm9gNK55zRB1fG2CGTmDbqHtCw7D",
  "key38": "2q6XNo8cHRR91sZgcFGfLJ3HAbJuMBa9tH8x1R7UXBDyLuWZEykF2t6dr7K9bzjRtuA4gjagqLTftfXcYtwym3uQ",
  "key39": "5r3zWLPUga1DTY9f13JzFZ4HVFiYzz7xfDyQrEBt3wC3U9rFLXQXAXbqt4fkzFhKkUaFgoNrjJK2AumecUv3JcDo",
  "key40": "2yWQQEnphmGx3eCGhR4UBhzzbyGysHRMSWRVU8x3idvn3MTPhFWBki9e4vBc7FBjuXdrRP6T4jNoCqsUWkdZJb9B"
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
