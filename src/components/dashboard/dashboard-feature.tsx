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
    "gtSJS3c2i9g2j7asZ3sRmRSxGiPap8FhqjRbZ7cGSCsqVxhJYBhWrmLubdSKvQdzSrPLuUgroVTANU8ftTRv3rB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uhRL2Xo26fTeTFouF14j7NzENW3Aduo6gVn5J3XFsEvrJJYt7wJMuXDAEmtWHYdcoR9UEjK3NfW9A9CLw5x2dmR",
  "key1": "5xVGLyNSjot1DckTT1VH2k7YbjrjhGMF4UimmRcqNzD2iQj9ncJq7EtNCKvF53Pc3XCWis7q7H9g9MQLEJhgVs9c",
  "key2": "3BUSVdra9RRnBifMkUFFCPQTfiW2K14CB4JmVhr7habLNLidDZuSigmH6GR5FUADbuVM5DmoQTcRrKTaR8Sn9Uio",
  "key3": "4Pa7esmiUfhFQrUUu61XyurrF81a6BYEUjgNoXTx9Zo9rV79u42iVWdXX4XXymLxvjdvzsat72ZZhRjV7tCQT97q",
  "key4": "2fiSgSmGQVLDCY4qp1UtXt7LRrT9sRvATSm5W2WdbLGmuzTnpXxbFKQdGXnBvuJHi2m6vFkSpgeBcU3beXVvnwhJ",
  "key5": "48DGW6ry51YJHyhwvkAQcFK3T3BcF4J3cLwNZq9xC44Bnrq4BXkCgL8cL3M1WX9XqvcmoBXN3zd7sY4gw74PoRG4",
  "key6": "wYa3zKWC4JEHoY83nyLV2auu47jdMU7inf6JZcccUpkBdJjzMAoZxskK2PyuMWbTgCkf9ewU68itXqW7XdwGwYS",
  "key7": "2CDjPqPbfsSGppeftCZkKcr6jG6oaAyKwFMAkosM7f8v52bMZeDUPBTiSL54UnxkW572L3o3uvDJ2CkPSTYUp5gc",
  "key8": "5ruNe3c58TKJ7DMTnnacWoiZoJVcZb1gVx4sRQbuTKos5icVbBDnmRFpGfnNWomM3VnRRsaH2hjDychnrtEaKJQy",
  "key9": "2MKYhTgkTxEmh1LvWZjYMYzTUWkeUvgKJ5uGZF62H5JAo3NXQfG8hpLQp9tSdSYh9NSGqMqLWQLQU2z591vJNGAM",
  "key10": "3ZaU4hMNKNxB1CgcpyothXgsYtrwPsgkCgviUJ6PthNQKnaMEDc5VD2CgxeUR2nV9cwah64Y8YzP4csjHdYdYkWe",
  "key11": "qryXCpvBxmND7jZYsxgPNi63tU15SkbND9sVVmfXTbJrwdKFmHwFqpgsF1uCFsKCRjh3uh7WdnA78VZVjFDsw8u",
  "key12": "2moLDPiHREzyTydRePYAqJuQMzEHpJST19EVhkobsQjio4Vt26PUkRHWQcj97fUaZPg6kepKKygnQB7o7kCLej2f",
  "key13": "2PPfwB4JZuYwN25EMXkGRpvArWm92HtHKjf3U21kx7cmWgo8fW18YuwhpRJvN4xtjSXTairtDLwg5w67Re3rPRnP",
  "key14": "3yge6bwRCTsuzucWdTW77pvF46VjVHzsNUfBnNfqkFuko25UskFJ7KkMS161QMnxZ4PTTxozeEh8CsE5z7jFRHbK",
  "key15": "SxPsSMkiR8i1qtMWA6JNXRYiMAe1aJ9PBnt1gE3P1jwrPefSkyeqzX19AEfWE1fgDXe9jwGxiTAWKYtKjKjSzio",
  "key16": "656cTVfmiX64KziwnVMDRB7jTMviDc3KWgLKLKdQARvJw5ZEqS3JDkdSig6dxT8YggRxhzRJmeitLiV852MZjKzx",
  "key17": "4vFB11xM97z9EC4HFNLGKKe5B5LwsdJqYsBQBuNx2ByaSnpqRruQM6t8ixgJvtyNyr9fMS4BngYkNWq3qdEmCQHY",
  "key18": "4h8EtWjhMWXDgdYh9P3pExH98qrH9wzXRyQsVD4ZrbvxhpDZPFms84AFqrHJfxEcrgNJiWTZ7f7Cq7XGQfUMU69F",
  "key19": "9WnTf3p63VY1Ba1UFoVMv8kHWYCDDVCYD6xQPXVwC3rmkRJgoyvsQbAY5YiY4Z7WNs7sRGrY9uA9H9V8DFy1rKq",
  "key20": "2BoQuPPLeFqqMGz9xfFykxKgretxvpLkPs3xV1EwuouDtE5FFiXYof5jNFkinokCaMUmU5Bi1jP6BWH2wrJCyZEt",
  "key21": "3e42W34SinDZe3W64vLGwbAWrXtuqFkBJpYPyzZ8ao69EsDNSeke2U19TfuJ9DbHRDer3JKTim6MXG17Yacu2kUc",
  "key22": "1UQFreS7v7nV4iDwrxWLxnx8bhww37jgXavLiBBV3NDcPNfA5DHqRhzLHsqSXQ6f7854kEZMq136tMdkfWdYAp3",
  "key23": "3KMkpSKHgsmx2RVf6nboweuDytUi5b2fnShnZ1Aisaex6FCpnUBQjN4GTnP9VPLymokhWKDTvQpA3ZApJTnw7pa3",
  "key24": "HmQhwgHyPpdyuoAr814ZUX2MtYyY42hjHZNoN2rSgcB8M7PZNiVyVeLn8quVnf2CJX2b1zK5firVM7WDJ4HkKcS",
  "key25": "5zzC3Ui9navJx8ComdRzeLWDvYSxJ5c2j2jLaHUQ53fWk1BVen1ZwNY4Q5fTZiMZBBNkJDZ9yK14jEUB7niHV7pv",
  "key26": "3cVh1GFeEsYkP4E54xyUyD1b3Tni1TgGkRMaL3TPL1e3MEGo1j3Y2XZ1BFF4WKaDTbFsCWMG978Vpd8YaJWhPKGE",
  "key27": "28bkvNTmyD5PVemv5jErANPeJjTRgfSeSqZuipXcXsCMA7FL3CxrPh1DC3mVpsMo481S5A2L5M1M5qUyv57h5hFC",
  "key28": "45JjZ3YjzYvczqKfBj7roENLF7vjwSTnEgU42G45bsvws4qi35RCtKGLu7ppCoBnJwEo1mFMDXtz9hkBewdGm4yA",
  "key29": "NbAYQeasBQtwKbA6QdyuzYdY48AQMkgADNkjLfELNsdJfWYZYeBWkVtjo1DQLFMD6zG5gQCoQBgvWLVjGYXqFbh",
  "key30": "3poVJXLovoTEcxmJeZNRL1DXtWYp76eCsW8ffA9arYcpgoDFdwgg6gP9G3fd9c61FCrT6AYqpoo43LN2vPjssq7U",
  "key31": "2M8ys2ywarqmDrJSrfBhe44HToEkETS2BG1gTXa9J7q433coPet6ZFV88mu12696nifDsATFdFRo9k2Jr7WejBob",
  "key32": "5PTHh7KzQfwNBLLvwqhrYGpia92tovrKdfxbYVmkEMYcWeZupR1Nsy6wwkJrPiJJTjbde45wdVaYqHjZw8JtteKZ",
  "key33": "4jbWHTZYJo65MifgH8zbghADHwq6eQuaAGdTPwEo1h4hwdbp4UPVVbRmuvDhBzD3XYrNCbxjVRXmx2tmQbsqRx36",
  "key34": "qGifr7q4rRH1wSkM9GuMG8FseMKc9B6VoNUmfLV2bRwhn4toLqddx3G3AvdzGrF7JccRYeF1C2h2t6h4mLbQnrQ",
  "key35": "5Ui7b1bCFUmhvegCMB5g73yfVFdMWdmZBfJ1ad6AGUgeKZNb6EJZP2zgv6AuikzjmmSMuJHgAYqqdaDyLD98nLc",
  "key36": "3L89WCYmqQLfixVcKzoS9vXs2uuSLXbeUGXJoVN2WEgNvgaj2wxmvYeTqAomrv7jjAYxwaHTXQhrj1tSvjDP2F1w",
  "key37": "5MLSAL9WtzhKUAUzrESkvSG6L5hHeZTz6qxRE2Wk26ebBSsfS4NECvensEV1A5qJ1SwVzj6v69nwhoxUy6iyfwdj",
  "key38": "5KuEX2Y7rtZCgDgW26wS3MQNP6Ekb4JutyppmZL8LQ6HK1w7cxg6LW7oA4F5JQCT4mNEMyhzpg6fpioVdwSBo8uT",
  "key39": "2SoSF2uXJACbDjStL7CWeRNZ1PzCd6sSFcFWFu5KNtfeK7jvqgFQQevWRcbhjpP9jFfEp9GXP8mmjRTjxkLczPfN",
  "key40": "5eJGJxagBrWAqPgSCfWjQQCSWnVecRYU5BFXTfi68ydPoYcxGecTHmPXJSy8KvtAwLQLHAnwG5egd426BFx4LFZM"
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
