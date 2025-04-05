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
    "5pvwxuq6GoaTv7Sy5RGSXCnauCjsqU4sqiTWBeHZ9e21hBS9bZ7yKPpFJwYT6PEoh5khmdhPML9DEzpcQUKq6usL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ifCBA392Mo3mMxKbJVNL24Hdpf57sYb9vvmwzb6V7a7pj1oFFEoD85kEYQ3BdS4tD7jp3Ke5Yf9rjaKGXj9Ze9j",
  "key1": "5AQiN2fNYmnvbcUphAcpZaxnBEUmUwH5woQRiMNZyxju9eHBH9PiMTXrBjaNWnVZCssiriuJ4hvbED9SdLHxUesd",
  "key2": "2o8TnMdFQHCktfY9xGmggJmE4uT4eMaqekQZ9eZd4TuupyGZ3JPKhx1hmx6y3dvmQLUEm1z6FLT3hoiAYgt7MbLb",
  "key3": "53qGbZA4FqEmJCWaAYGQoDySdfjhzC7vTdMmtvXjbkTVPSJeWSrK93e5vrop5MyrJyds1nNL57pAPFXxzeykM2DK",
  "key4": "XULhnzAxrimzihUJinmcyUoHe84YucojScXxt191Aoaxiz3KJkAGSaUjpb9smhev4S5U1w3dUeFANW9tB6Pgrzy",
  "key5": "28mbY81zw5rUDo5dkMZfcpNRNWjmwyBWEzB4229eN18SdP29UpfsWhWTYUBPpmMgxo88pf6tB6d1Cb8nVurWaviZ",
  "key6": "5fCPp92kWCaEdYRKsj4DHLrTJosFE329hAkk2CDfgkZdoSHECMyF4WcM13mQzGP8jRfBz21t3jtyLC4EbKVQiSzQ",
  "key7": "4QBD6kqe6iMjtdSZsDnkkQYxe41i9yUXrEjP31bFh3BYqJkYwbELM1gRLziEh3hpHZP21XpNH6UGGRM62DvF8Hcn",
  "key8": "5ozJTQYyHHavRUqVGRJLh6axVsczKyszFME1vBqFyMWZKciPP9goRjwFz9bxSqYa5kSYNWApEFt5NHNDUQLVE3qV",
  "key9": "2LV337LPVgfoNbzTyMJtZqcg9kBH4vPEy63vc4sfpbujJkgRLfh4sdmAdiP5EC2fRdFR5xRGaZ1MzvedQt7RWYRd",
  "key10": "3qtcR5mmpQdxhg46ksXM5ueE3HD7XfRoi8uhEPghFdc13pkqUHZTefivNfvKdCusBRcks5pgn1J7KwWV6YGiCQoF",
  "key11": "2b1ABHtHGXa6PCxtS47bQ8zeXhP6z3EXXmVfBhfCjYRyeTDk2w3dsaMvbbi2qbjJjFqKkKiwvEDPwbWAtUk827vS",
  "key12": "3GoEyTpmeYtkmbBQeUkhJ1gptLiGnLFy4UfckJQZhD2HDkVVEwgUpXb7B78Xo7u5tGWPTE22iMT2N3K8WYZHzQWo",
  "key13": "hqXBpASv6hA48BJzw1SxqXY1oWT4s8XHcqSsimCf4m6eus9nfyKQAE2wKfoKPmfipEXVg3QizBJRzLnXyr7Td19",
  "key14": "3tVyyXjH5bn2sHop1N4ELFWHQzRz4Uw4G8JvUQeJETJhgJgF1pLvnF31WAiLyyn8uHk1kTfdMG5wKEMpn3cQpsvF",
  "key15": "3fT7ENTULbumFZCkgxKhqiggk35TtjMPSBFz66uMK9Vv6SbScXSEzoAc34BtNLCEFfDtVQtfcsyMnMqCNu8Q2tnh",
  "key16": "5Dd6vmDQa4euKTBPh7843Jdkph6as8fmR3xUEdwoemdkjVTJgfbnb47XHo64UqbcZ4Xva8C6XVbJKGEP87i61M8d",
  "key17": "79crxzuedeXMYgqpPeeuzdvAUQEaYgdCMo5cCg5Vkn1oUFMPxgyMndiECwtyoc4yTBq3LZAJEYs9fcjvZ8LwzKQ",
  "key18": "4cd77anrcQ5ENSfahWACWNAz7qRoWRNkw33yHkH2BAGZnDrTCz7HgRC3jSe4UCoGkX66KZM57dCdx6Cpfchr8Wda",
  "key19": "4EJXubPw6tRkfvy3TKm6jAYARnnTJiGWYkYjGoS7NAsSxMRZQGSLjwJa3Yf1vf4utcEAxyuStnDTyWGDbmaroubJ",
  "key20": "5yRQPF3pAFqHeQNLSVHQyqrp5QfNtFNhR88Mf6NUAbUfzHGV3tYMPrfxZH13Xo25vNMTUiGGUFVoYFAA8jRptf5h",
  "key21": "2SyynWcYfSybfRZ7GK7EgUeicrzLnepcLjhBgtsBLrCsEeopTkGA8dRn71c1spDBgfPeKWB7J3WtDcVPiGFiKtWF",
  "key22": "33KxdTpn9SkvAPmAL8nUHxWKwCVqjKc5BccKZcZCa3DpHhaeRNPerEEHvDyJ8BDxKACXppFhj35mjwQ7dZc7pznp",
  "key23": "395Lpscf45nmwuure9eGZzmXrX3BxC16w3PgBhddJDxMCutSRt6raBWsgGJE7XcGgTE18Sx17nTDf1p1ALyyZCae",
  "key24": "2H6gE1b7xWZN4QXP5b4mLc51Bdz3mGg8Edd4mdpVPofzTFPtGHHxZz3heCpjz2nNdJAAmVkEPRfMDGTNZvWZp1u8",
  "key25": "5qJzYsnM6tmjBgg1cfVe5vbegAxXwjHAdCfU6FPBAxxfPV51vGabvfVPXAjXR8t39txvjH25jiHbrzszUmbAjgGB",
  "key26": "5SXe941qH5nxgNMtnUAsGktiieAVygCpW27pKZXj7SF7eYTamvxLWkQdpZq57BT54M7SGD5zk1DAgfodpqtmmyS3",
  "key27": "wecwCr6nncGYzDfJh23GGowdp9FmhoFZotcCEa24fEWHgXmQFD4yx6icVMDefpqfsDZdotNB9HhkTzmknS6321n",
  "key28": "5gjb4rAW1jEztKVNXv2KQtd7Po7YSaJBfjsTRHZsidh8sj9aPuWUPjd5Y3BFmnhtuExodbYLPbdF3Y4HBqTmFQiE",
  "key29": "vTCMbR8RRgxDo68NVd2u6h92o5aerr8EzWxDJEduTxNNFjGcfppHN9tLrRvLySwW5HJSLaZeu7SDb9jSiwgSgUS",
  "key30": "28kdp242jr24AXtQjRBTpbSnpN1qxJujgaNR3jSDZKpMM42nkxNyH2DEsNvEJT8AWceH4vUZVU3owQbM78cNRCnL",
  "key31": "JkFLXNbh6nmjmHuKbmZ22hPnRJekf9xDkPFCQwkxi6uoMAg7qFvt3bQ5PWGfy5iiU7AkxLiutK4GGV8Q1YghLGp",
  "key32": "rZW9bL6CfXQh3vR8uxpZYEq5BSUGofKw9rKXa1u12zQFRuCp5PhmzgdRkD5jt6sVvCUFDDERRo6ojos72TmyW84",
  "key33": "gupW18SYyRf3boB3mqbr4dqi6eyrw1H385og3dkvKEo1eu4H2wph3BKbNeSvddzscmvAMVvBgnXYWiXxQVM9tBj"
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
