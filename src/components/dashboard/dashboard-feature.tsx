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
    "3LNWzVBWpPnoEoG82qLhFTuH3D1ssPw1RStrVQkrZCGbUzcS1Pzte5SFXyFXXk1W6oy2DC7HAr3GbpaitpLs8ATT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JiULEwswvSyMqJHjvXUWN6SXxE8EARitdedx1YgcKxd8vQmq1xtomFPoeyHJr2nfDXqojq3tkBN2Cx3T3oPKbBf",
  "key1": "YfCrdVEv2z7VvEsnmhoSguTQgH4XDLzSEbgrP2pcL1oV9286h52ofw36t6EvcsR2DuRS2NgGYQneLxwCP32doDm",
  "key2": "358xTUQ9uK1RvRaAejgXA7CpYXJyKP86K25RKEybaAkHnXNZKVsJc74hW1xDPCRNLt48ugvvFUBqsMFseJn2GJFk",
  "key3": "2p5s6pdvf5orhURQYxfqcFYJzooYCJyZ4GHdeBhL3dCfNCHypc43Bb2iYrwegk9PJ1RNEmAXc2VhEGmonuYwJWcw",
  "key4": "361Dx7xzPHLuivkyRQmsPHnYV8rbf4bWLsYE6tKN5MTLQUPppuExU87yDANqGTi2gsaXLKDKqRw1y2sW2j1aisZF",
  "key5": "3KbZn53LTG2D3EypEnRjaF4GegYqYX4utXzEgefdFvyw66xV2DakyQt27PuJ6zBJeb8oRNvKrM3m2xQqX3Vpk4Xe",
  "key6": "3RepuV2ciAUnkLB6WzwEtWUXcxKseWTDvCbgFfPm79F7Dc6VqjVZCrugshwb9aTyj27Nm29x1nr4yjTvw4nyf1mi",
  "key7": "3cgYHMpZpbLMUiBpjd5bLRzpQjqe22KNy7LbM9k39pjvEwNUB4dsEXrDJCqpFFj3x8LxcjJFXgm4t6GMS14S836w",
  "key8": "4e9hgMZEcWN3hMMq3B9GMJpi7jhjHKU4whCBzjyTzktuNki8i8Rbcde44QSLY2hSXEwYwnRsMF2D1e18tPTcvUzY",
  "key9": "2oes6kWHtqAxDGPMCHb4nUuGWAc2NkWdpF1VUPzFnHgYpbd6Bi2YhshKw386jSYWFuC4uG4Ke1uT7NUiT4yNRDMW",
  "key10": "3dKa5aGbwHncQnmmiJZKANbGwkVxqQY9fTr5ZKTpDQbHxon218Um7dV4n9DVXwmop6pky26DcQtz3CpLNnngad3W",
  "key11": "Yuh5PraFkuKFj8xYj56CB85zP5nXGRgG1yNFBXs9M1zJvuduGqTDmhmbmkW2cZ9oUTNqh1KXQNoseqiep3wVkdG",
  "key12": "2kUZUjnPqYt7pdpJVRKWG6TpBqAaAJAuAihRYJ6CS9bHJ9mXiW9TwAvhzaVQrsdZ4t5SRzGJqbiQ6UuDir1FdhTK",
  "key13": "3MF2rPC4Ee4p7a6jy8N3YLoxiK7UkyayiBPfQUjgayzd1CPmLXqnhZczVnwEVr1tXR8Yj27F52Ky46EzEMdujULV",
  "key14": "d73WV6ekuQUBuN9aRsAuvE3v9pYwEFLNBYtB5y3ASkeSFSgd7ncEhNJPisBw5MqX9Y567RFDv2BEMyG3uNJ6kMh",
  "key15": "45w34mpWHivdi26k1Ywb43AWFLx6yPWuZnn8kEY7cnYgwcySq6Bra6TttrJNBGbhCaodwKXNMkMy4mYiXHWeukk6",
  "key16": "4CuA139tjJpcxnUaToe8C4PhCYFJw9hk2KRdfnLbNgaALSEmjTy1okgPNvmpvz5SVbK9A4EBNrdt82QnzEvL1ohb",
  "key17": "4WEEDojrDPCc1SXG3vmMdndniFBQfgkWYUVSML2bwiE8bFDnrKfDrdeSFXNRnnHajTQoPzzSSYDPL4NM6tQSEFAW",
  "key18": "5KesU5CkoJy2vos6Dt7gpXxE4YeJrgrmp8cBvbBBLxSSYUv9FTAhkYVmTC15KbAWgfuBmq7zjyxswxudfAGpmbUK",
  "key19": "44EJ8tFMC7iyorVinqmo9gcCejBnvtdLbhjpmLwQccUhPbzaYEUyY9abkJshCHiHc9XNqLgQwQDUCYJRSZaL939N",
  "key20": "3b4P2BxfrfyPG4znfECncr3E27uY819922TB8ALZqbVhidQ41LEbofMKvjb3qpZKeiEGmDJzbDzKhJAWGG7KzzdM",
  "key21": "4XYB7XZneAtTJh3SR6PucEqSek4SGPMoSsjBpUX7qHB2oV18ZjcKriEuXuVL9fB3CjvGzHsSeZdqtJKkk3gsD1ZV",
  "key22": "3ukTWh8xEJPhnnbd2fGwuv31TUtB1Jnu8TzJ2R3URDTBsU7A9Uf21LskkCztG8b9eVUSGiVLy7FPftiNEGLXFQt9",
  "key23": "4rNWPsLnz2DuETDg1ZLsTgZNoDuZ1o4uunPZTwvUFfMuz9mHb2bSRjCra4UgwSzQoQY3Tm98merQUMegHp2YEAJL",
  "key24": "o4cmQGdLnG7wteNHjBjmiYLSqx2tYkbLSDwEMzLr1PWrh2JDmF6JdpWTiuYwgeAkN9EuCKKabUm28spZBsAD9uj",
  "key25": "t5z6w7edpWtHcx7NGkH1WLAyJYNNPfgjHwnBEY5xyL9bbog5s3dSz7SnWmCpKrYf11Xg7dtXmc6squNoJVCJytC",
  "key26": "5snGd7XCKkM9Zv2LBNsN3yJbxsBAqWVGLe5zTK9J5tp34mP7oNwAGuJSGPSjwAD1m6q4aY6eePxkerKSKdCcxJbu",
  "key27": "248oqok4YFiXb1HB7MEtZrktRAFTFqALciBfCXmUNzZQjED38YtQzVro1eXLupiq8FJkJaMpAHruTW5p4B19Zty8",
  "key28": "3WRUZa5VtBJYrA89SS5GcXuNjvKxET8f5oERh6tnr1ugdZdoRviaCzgQBKr8eK9xxeKhirM1JXwCqMo54DkFFeo1",
  "key29": "2Td4yUvicseaMimBwX5eLYqHJxkrVmG88HHFqpFkbWCzJ55LNzgShVkR4HRMNGaYMBfUt4oXFEKpuWUT5pscHTKr",
  "key30": "2e6ADoaLprCHLbGw3HefDcoCWjZDsgoXFeAKJYDUt8jaea58A63zXxLHQn1BRjdppxNS1rJNV4Dz3Ws5kspWwXag",
  "key31": "4NjDHJJMUVWuYZkwTnjLCpBMaZZkBMGeRLNfGsAKomJfjJYtXaaarQkGwVbia4ivA4TJ82Ta4NeZZ8QWDnz39tfP",
  "key32": "3C9TxMa48GnpEai6fxGFiQmMfaCRq2VLLqcC2nhNWbKhRQGpdNpjxpiaU8tQRFEp1oVfhku75Jxmj4V2Mr3EdSHU",
  "key33": "ZPzjXbC2CemJ4EQ8QLEBQZ9wma28Bmwizdeedat7zTnG5vQgb17mEqLbiXqP31UwKTMxQEb78w3jfWJsvmUp1si",
  "key34": "2yVZ4hmNccprjZSGhMKhBbcFpfoxwHcPJTrhSDE8NMGeWf8vebchE8ZxREZjgnMjtbVi1ESgzdYBiRuga6mV8KK4",
  "key35": "PxMp2QYLQY82wh6e33D3x27dgNWTiKap2nNsYcB7aQhadjVTvSPpEZoWTVR5XCtK1nT7Spr24H8boCCQFLjzx17",
  "key36": "5A73oJ5jYxb7HQ8LYTXEQdYH9kDB1Ettc6sL3C3KGQLuMNWDc2VwYaairWWkrqJ9b2Hr2U89i2GxtziWiGe2N6EF",
  "key37": "BbXKTa5EkZY1Hy6tGEXonDCmsWrhoCr8DYJjhpXPZ5NjLB5zPAsmSXS6dFPfmQcTBuRRVTmEYicbgraxgpWQqvS",
  "key38": "5bpnEFXAhBk1AzG76gh31VP327qUK9ke4xY1sSxzgn4eo9aSwBbir5pFxoEG7YLG43MjwgSNGMX8RxzkkLkRio3v",
  "key39": "4kku5JeNDPS75WxZ9pPqjGP3kh9WvPP2rnMysFSkAbd2kw3YDYVkDoS7SecW7qiqTooXKWrSRbW6kwhnPvjPCCrp",
  "key40": "23cydCq4Rkn2ZxEgNKoLKivTh6wcrjjRXRaXPbLaqTYR7C3VABAthxaAmb2NRp4XaXpZGLNKjbBxrwcphGq5z5dA",
  "key41": "5dLdknQARo9gfzGSh1w7MD7CQ2KhnF8Mm8iruFQ88QgHDhxXwkY8veq7v6NC6jNRP12mhqX1SSsziSknCYpQCijo"
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
