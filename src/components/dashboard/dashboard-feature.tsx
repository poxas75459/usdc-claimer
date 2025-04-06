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
    "hxcfZ1ndR5HBE6tAwmaywEr6dUHwesJGsHdfCeZnWfzXkDhTjHKDtEQbWU5LmMCyu9LzqFLiMdS81RMXK1T7YVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vn2h7jGQakk2UbnLG6jmThumHsWCZ58YkgknCCzT3YEPgCHRLWoiy3NCw8FxnpVLtA8knpwLP7bucT3iZYm8DXR",
  "key1": "3Wuyy9vucZirYofHMn218kRkDwUMZ7Bnzjsn6iBDiWtUMGEauhx9So9rmsRnNuqDjyqUbZE9JttxR7uinBJzoy57",
  "key2": "3F3PLt2BjPfH62XRbJ4X2gFDaSsBeTyc4qp7CuEan4CfAw8HkzT6QEcD5ap2ufh8SxT8zascfXxbYVFNCM4xkPjZ",
  "key3": "2LuuEXnAEges6MQSUT4andLLAP1rgnK89mtsdTnNSi4nmLasCAEyKjQp9EgrgEWwFzERqPUsEF3iV5vk6erT5uxY",
  "key4": "4PzepNNA4MUGUeZ9gN3wptaopUEnJwpRriF1PmLXMfUpSGG1qCMd1WSR3Jthug54yrupnAL8Nzy2ckh99wzvTkSG",
  "key5": "65yxybbdT9w7NaUMQ6JV3U38FtJpfv4XtKfTdADhhtStLavNRzZuSh32R2Hoc8XDGDZrzgRdYDb7ciRqahVbWKQf",
  "key6": "2v7cHW4zanRdWPrRuuutfq8Aw1KpnkxVPMZ4m2wJZiJ9WLQMTSAMHod66JbgnrqeymLmtvVBZDvwNKmDTpYcyd5C",
  "key7": "43TS83DdE5e4PCL9Mndavojv45vBYRo6rsVX1v7Sno6zfyrdd8To2EVXLDdpA684pwJFzCVvP35LvJanRe1tmcHT",
  "key8": "3AE9p9Jva1ExwbUiRr53d2YLFEjiFfhGmbeXxhB4fxtnss51GJrPjVZF1tG6hRYSdCEj8XNQ2fpmYsqc46f9Jg9x",
  "key9": "27sK6zXEP4J4urDNimcq1nJsbcHLCe4YqTX1rvPKqHSfBBhXWb6HuSrCEdA4mKbDTfrB9hmhXSZF4U3wUnXikaHV",
  "key10": "2maHHeeq7oqgUAqaEJcHFcvLdf2g1kWtBWNDUw1AZLWF38sB6KVSvaodtRZhDLxmJNtWEMYYwMYqKoHpEX2RNLCR",
  "key11": "5HJreSsz25s5bAwTTTvh17rDVADPzmiz6XymLDAYxp69mK1Ub6ads8ASYHs72eteg7JHyXCmrDSXdVf3entM2cnK",
  "key12": "pKN2oVV3Rreea3w3y9x2xwme8hdmZTKxGsYfM6mcpBzSL59QCPn9vSmWMvXZ4GQNsdP9Hro5G6hp9e8SrZQwGAx",
  "key13": "5nu9Px36UuU1yKDWAAvWnsdPTbtuvHE3zrpjVk2svkMERTxam7soMmTvTmBHQ8YRNP4N3Xp88c9C1CkNrKXiDCwj",
  "key14": "4RqRSZBALZiVBXjKtS8qxjdmvcp2eissDZHHCQVZ8NT7RHdikcAqzT5Lz92bm4iWXT9MEo4avBduSzuSQEoBVFnz",
  "key15": "3MSEodkTSRQ2Yz4wPq17FoFbjr3qxMm8Jj4ux7aiWWFX3u9tMHdqsrTkjcoivSqUqgWdGzJxX228rnjBuzoJMGTa",
  "key16": "2BeYfyhCWNb5y4C8tdM7Cr1ymyqRPcssPXwkhq2dK856AwZDZ7c1zRvyToRn53oNSvhtuSgtA6je5P6XPymVaC6r",
  "key17": "24N843rtdpTY66jc95zFgTyyURuAPfDaHpaRav8EJBiCPFZjaLPSuXcTxtQL89rEPTBBXfTetZcxDkk6HkG3eMJs",
  "key18": "3Mr5rWco6JgUfdnUuJcN8HUK8acnDZhdR2r18hhJKAL9dDpnhJJV6Yp6E2ywnmuCyBVKDZ7R3dQQYdtdterxrfCz",
  "key19": "EcfKnNtN3eCDghduJ7cstr3k8vLHxd2ommy7kip9uJzuFDpZwzE69LkiHVfCxCb5Z3KziYhKSsTCRJUDnumWfrG",
  "key20": "3kMusiTRXe92kHscp1nN5BR9Dzj8Uyx8GF4Zt8XDQzk5r7iTVYDz3Qssvq5FWrCNA3jnF52iP8iu7DXUneS1S3a7",
  "key21": "2dxygJYjDtPzisgKaqFC22feDLouLNPPpkLqMtfSGLh4XDoMuKTha1huTkQKCfZq77qREqsPEKdB4qeocxyeC3V4",
  "key22": "MFpKvMY2hJ1sySnk7RCdyhVBTPq7MJk3ThCKE1tnyDpe3dDqzUQyaDtPu5AY1xgtMBRYPEzBj4sj7gDwz2ffpQL",
  "key23": "51hMVjZyJispUYaVAtrArHswriQmsqjTwqV6iRTkiQyQuFD2q3oZ87gbgxbKumUBjuQEmch7e8aYF2JWMiDTkodv",
  "key24": "3aaNyj6HHpdZ9edU9XehtmiXWMgiWtymkEt5yZgvuTNo2DNv6xm1MU5FCr2fQqPonHxhhzcDfqhgEuiePg4RwQb2",
  "key25": "4VeQu32838oajjdUH3vy13FqR5u8Gnuqhn6oWmEJ3ddfcQPhRoZFJEYccbLoDo7fNpeAcv55ieyGQoFERv33CMzW",
  "key26": "4f5RYN5NF3PSRSkK29NmFas2mSW11BFMQey8jJ4SWxxinYzSzuy6rE1SZX8K5amygVZWkTC2LwLKBYYgUCHUcrRA",
  "key27": "5a7XBecRf7SiFMnjuN6QcNMTwW7DgzKJ7zrvYwM9AU2ysjvMiWo811yX7HehtS53xASt9AmqtZ5UDMQop57FKFDo",
  "key28": "2cosYQ6JXuuhBXbZyR6kK241mMbZjTjddGV9wQaDCMexEATwYfukdePMxZLHoMm15uH69d2Vo136Y52Lr32kp38i",
  "key29": "4fayS11qnZsidug5EsdUZFZ26gbgmbYrFsCUPQx71UvtuCWA7LMymbkJio5HxUShDgSNLUHoc7FecKGJVsk93ejb",
  "key30": "3d292wmg3jhmhAXs1mev5FTZdCDhqBaZ9UzHuyZwcyb93WoXzRjF4kRh3wbePFxHE7crqteYWbVeZNe8M8xY9dvf"
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
