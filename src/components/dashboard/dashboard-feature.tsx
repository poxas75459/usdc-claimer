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
    "49dRvxRUP2fUNNKziwjV514CAEuct3mQSeDomGqY1FVdk6e8mWtReXf7zL2qcNzgkkuhQQA6gfPu98zBw6n3DW1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "236ycekmqnp4WyEwpM4beQYRp2vJoC8LBV3dzCnkJSfAR8LLearjeSqUewgjMAqtG7eZcjFSApAb3jMBgAA7c6DW",
  "key1": "3Nu75tGWKfDh7zLAMKmv8Hy3bJZGWUJERYyBkVPSHRoxp11D5dRRmeeQxMVJ73ivysrMjxTYq3UH8fd2JdYd61iP",
  "key2": "29EQXfQpoRtYHqGy1HRzLSARRbWfHxHpdPeRpHPnpQiNAUxKv16AD4MWjhLSkM4GFMbw1P6E194tjS9MAPRVmUsk",
  "key3": "NPgT76TpthM5YJFTDK5uZWduKM3R6zbN5Cny47wETMa9KkJnP8tN8zMV6NrmTpvEquwC5zDiq4fAybuA7onktyX",
  "key4": "3BFPaUUE3Qs6GywjhT7cbtqprv38cNeeMZEE8FFDx5ocKYyzt1gu2qRm1U9Fa768ni1xgLBsqMowLYJ5ya7KQnb6",
  "key5": "66CZPNkQ9rVRxL2Xuz7VdPx6ZRFGWXHb42joPQPvvtD2BoAtRkXtqdaeRJqfri6zyJBdcn7EDaB797YvGrzr6mZt",
  "key6": "5gNvb3cEA8D2szK1vmXsKKntLEZvA84p8uwr8apBKmL64h7w94HSvfyhdL8qesvxraePvrRz4wBTChhQdeVJYv5k",
  "key7": "frtKDmzV7oYoY1PsMtWVAbXnWYg6d2FK3hvzFhN2AwFvzemYbLxasJxRSZUpQWnLz3qFoPzoBykFGPBmodAKgTS",
  "key8": "2Y67mCKBnRUafLSiN1AA4mxGabURosL1aSo1DZM7i1pChoGorXZP3FqZsyj3nMR4Zs6kJ4dP9enCJDyuEEQWsU1t",
  "key9": "ERaHaeu2AVshrRaxGQh5uQQ4zsBqwQBP5ae6az1uMRicFuftEoi4L6MbhGGd6gfkgPz4jse4b51cmSjdFMyPsXb",
  "key10": "5s2DqMciJyN41TchNwStwcqCQXF5yBL5y9mA58au5ZFfvKeXMDcGtCDAvkSbPJF1r75oSM3sc4DHy16rxKYCe6NP",
  "key11": "5J67BRBWxfeGm9NPbfkCcPUT1FGEXt6FuciSTH78h5DiA8JrtRHRStT33M21Ri9QQY3DwkrC6vgPm7uG2Hq78aLZ",
  "key12": "5Ao5MXPGqEMNRbUaqLe7MM8jgfrUTVKFcr8wFLMKtegCDUjMcbU7vs7tZLC4YzWRReGbomZPitvuVv1NeFeNUHW7",
  "key13": "4QpZAaQJEceKpciLCPXhdDVvcEgtRNrDJiyB7aZVpWDr1wy1HD3s47U2TutuxF13YgJb5d6d95sqmFj4chGWYY3d",
  "key14": "5b3FDrRVrVXsGpnA6DaGqYDNJKmFBDrtiNPP7kPdnbFrRTeRcuntmy8WD3LL8nxC81zNN3mvyz8enr8ALrWq93Lj",
  "key15": "4Gm1r9yvtD9fnuajwxCRpugc7gA5NkuqTcxFCJXsJDtiUs3KEhQB11FGMEJ5Lau3ofx4g3rZKVUvnJfoicoP5esC",
  "key16": "2VABnVCLzpoqDaPGc8NK3Kf2FRobgLeHhJVor1B394eAVPwiH1fLMUT4vjCvcaoF5fRAnvF5EQBiAckj6ZE65KrX",
  "key17": "6MahHavWH56VoWpvfVZEkJjkBwBD4rW5y1Q9GiuiPpai676TPpa476BF4z2oiaHpHSDwFAwsmAkC3Uh3u4m3TAP",
  "key18": "3r4QK9zKk63BFgeDqi8asa3K6x3e1oWEHXifDNR9Ryttb5jiwTiGKg5XRXg18TNG37qqRZynNyMAa7H13CPZYKCZ",
  "key19": "5EZVhpUNu4pjUsGEpQB14GMqUCu9FSVEhBT8j2t3JJ7Mi9Y3FYXPGjVD88zNhjofBeMxDfnL33p5aLFwRU1PBknB",
  "key20": "4JtpYYZMN3SNsT8V1DEJRqwVdmKW94e6YAdx5AQzh9PGYjTGvtvMi9CnyBJLcCfYGen7gWd9y7kBac3vJCH2PpkL",
  "key21": "2xnonoD97T2QsJR8CqBYxQ6F6HoQ4Dm9iSFzQJ8UJpAsBKV2jvvkc4V9UsQ3iRgcBywemskgCoM6RUCJWogZ7wCT",
  "key22": "5dRKPKBLEAZCxhRQACPaCA7CGvi8xE6MJyc79diV37UXHYAHCWQJauJiK428HAoumVRDkMGWUJ8JA41rLu3MPr2D",
  "key23": "2DVyzK1cm3g84Jx8WNJwvWkMxokZNCimzTKUngETXkqVBc42mkQkW5zYa4gARRt1GSAjUmQ7VaqeRRRkPg5hw1my",
  "key24": "4RykcRHUefz82aVCxEWM5KbKP5f4rJ5kbxLT4rTD2xx74ZGwPRhRNot1cYmvYV11z5uDvFtwMnSyz75kLgWWTwU4",
  "key25": "mUKsurqSPL11D8X6B2n3m5wRp13VLGoHsqvcBmdj4s62jBipmUha2Z86VYBda5EF87Q6jaRbSeMpDpSkcqhnBPn",
  "key26": "jnTs24kKGPciG2Zwzsj6fqQUiRqUwaMdcCrAVyEdt5PdLP9ZcPuxEGcqByGvmffEJm6RP11Eg6UxceUHtsQ5yfa",
  "key27": "N8Evy7b8roLGUzGTxh2Na2QVqFPBAwzr6NEGqV23vEzyh9w8AcPWqrok37eTawSPVU66nQESTnLZPuCUpRS8EUP",
  "key28": "42AQ936c3Mj1kEfdzBPXxAU9BCzUb4o2toKmbhiKecTVW11w1fFvgY5e16gJ1Yy4rQr87cQRZStqkzBvicm6jwEC",
  "key29": "2ENbbbtu1YtbUf67uMCdtRGzwZky4GKhmPBgnZ9bWfQ1SMAAtUJeMcTsiFQvMT1nap8USaikzYnnpGDMN543TyUb",
  "key30": "2okzaqgVerpbNsZz2atprAMvdLNjsC5FbW8Hz3QRregWnS3dF1TKJrhvnR7CT8Ras9Yz5e8JWsqMUBc4ibHC7uhz",
  "key31": "3esBVyVgG7J21ifjdv1PCVf9ud4ZiaumxQZRvX7EArSNV3fA6bTa8JqwUhSYAC5SYcVtLosDwrmQUgy16wWrSuq",
  "key32": "2hd6ZHWuaE53yjEpo9UtTVTaxax57nricNf5HNRNaknayBB8eSYh84fhrfTQxZPkq9KgrtNYj4PWZM3YrNrFX5K3"
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
