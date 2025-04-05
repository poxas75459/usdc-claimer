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
    "2XHhCYdfdhsADYHspoyHxpv7SX4nCxyndRdUFBpvp7HVsrQhz56hTyoh5M2ALVpPG3swdon1f2HggnPPAvc9SfuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5317b1enAV779fGhcNMj354DRMVWVet1Q6p2jcqomhzX41hGYZFiJtjbUjC4cMupA7ffHW75mkJqniAndgiRJRbH",
  "key1": "23qoquXTp4u9H9ofHRGtWvrUdaoHhdbbpvi7URJngPCyBXdaoNiZccHqy4U38j2DHC5YftDXnUCBBxsDJBeGFZU2",
  "key2": "3kep69t34FAKYvTm3Bc9czd692EDF9mQoh6uCPP1bccnvSheEsWwitH8A1KHgMAR81fvgA7PJHf8KNxZxgd32WnR",
  "key3": "msit9vy8yywD7gdBM2C93w61Z6n1ox5kxc74cc9BjpMcZ885fmSqSAXs5v1V7dYRfXkNKc3SoiF5z5pkDQkBSJL",
  "key4": "5JkdYd4HRSywndRvZXF22CNeP5hTCLgMKNEArVHBaBQ1uih4EjhxiJH5LcW2JjTvohYppSqb5QMowsgSY6HBQnpM",
  "key5": "5PvbQEtGqZUmEcC4LvFRiXAX5KpbzWARLDKFsGdhjqHHedAsEfwYeq2KpJXdCEvrfeD5844QsPS1Ramja4T1tWpg",
  "key6": "5myZq6uc5CaxBw5a5byfHpg2edcpTknTtgsYm18SqJNnN9MMbCKj8J3km91BrE9oqi3SjzAoou7iavkFq6VAsL7u",
  "key7": "5HAujCpjUqrr9vDxYANfBssgwq3YpAL3YV3NqXhvzsiYnuy5LWZQcx5y9MrsxEpjP51ACtEd5EH9eeGaLv6LLAYv",
  "key8": "4DC7AEfB4rgmPXj4DMkxdd3aKT7ppxf1FqmYuwx12eKSVomSFYmQK2bVVhMPoy5aBisuhHQ6dmNRgXcU9BLiU51K",
  "key9": "4HLUUHAwEjZrqf6NX8VznauKmYrX5GGnbqjJ6rbSbgYhcrCsGnfCxhuUQQihQ4rS6DpqVpf3D4YNbfm1DxoQ1Wju",
  "key10": "5Juei1vfAwtLbmL5G3iwZ5edHme8HyHc9yTkPvAMsjZ34PoZPHCzq9okansFp9dSiJHxtf8URriEv2zdrs9W2CMp",
  "key11": "W3ZNUkBwPrbmAyvz8H3FL5ZHa8qjLKgCoW38c9wb5z3m8wtjBPdUMrzRxM69sY7khx2GN6bh9LYt8xxKSkkA7b6",
  "key12": "8sKS3o1mkdkH1rCtSifxMWfB5PJMRSF7YHZB8seeEdNPWvAsNioad4k2vnJfMVi2ByyFMrci3XprAeCShQNU5Ty",
  "key13": "3rPo42Muzg1TXcb58ENe8P7Vxk8u8q1x3QwNisH4V4ybes6G5iTVXtJDEspxVDwJ9U6koVEonnbcqtAZGkX45UAG",
  "key14": "4BtgZJVeF9G4BEjLFuNnvYBGVqNdsfbUKciEVxW7PzC5Yt6Bc8AAMg6Lp1MupCFa4weaVuMJ6jnfhcnX9LaDEsJ4",
  "key15": "37GPZXg9yZxL8KuJkPgdNqaF9B4irZxmUESsWzb3BhnxXt9KXu5jLFED1EwqUUw1y5gNt4hVu6nv7VEwgkWEATVC",
  "key16": "4vofG6VU6xUgRRKvAtaJqMyyo9FnMhTMwJJ8owNNzApwLyEj7orwE5YydzEE661v5y3Mnhg97dkiLoy9EoeK11vi",
  "key17": "rphwUxMx8UCGQJ4aCtXcreigTeq9kSuEUHcEGuE2HMDmNqEdeLVYD8UbxoRFFzNifcxSwHoEP3qcaLaLAKHBGMU",
  "key18": "665Dxh5915ShePuwzFWpfDT5UKHDcbsPGfsNEZ7wzZMddEFZJRymhbQVDqrnkBZLyYZ1dekTCmrFq9Zo5ZZwKSmD",
  "key19": "cQu8Nfah4ywTL2mbt4q9gNHjBoz4a5b4rNi8NrKXE1T94BDVNpkJjMMe8a2eARGeYECdPvXqfHBy8Lqefcyqo1F",
  "key20": "3X4djRfX6rcxvXsBMsak4KQM32jFXpYi8aweQcKMxUauhJ2GyeZj7Xr6nPWXH3hgYWVgnzGpoDjVReCrDNT9zXAR",
  "key21": "2m5heKJmEqExWw6uLibXbpS3Hi3nymHybJwhnxXYTPxSifvyQExq4QWkCNaxDYSsjknbQ8ZTsjZTt94pRgSdxZqK",
  "key22": "37U1z7Jm2oHQQoC7CdYqfZFpkLaVkEraixjEt9Nb7efvN51MqSDKZiFhBLRYTAceEM1cP4aRfyopNuRNcrCiiK7r",
  "key23": "E4oyAU2XLHr3xYqcjff4rLFMwHQ4uLQ2ndNH7eLnX4EBnCbZTdwahk48sdoDfLUnwZy1BLATEWLmBZKVBKASyNx",
  "key24": "2ARXUee2ifK6KiekhZEau8Skg1hqqCNwmrUf4v2MW2TTSuwS8yyQPBzW4po9xn88WyScFwHqTP9LpUJSJiJsi9G2",
  "key25": "F61U5dH73MsxYnPgstsDw9DSBdR2fp2xfEZmKZFkSi1aQPAZF1XUV1cH5uL7T7YLjN3dDVQ66pPGAbVTEjJx4En",
  "key26": "3HsqDYvYjHDj5eskqrHvzdGeCp11MJG8UxvABjGTcSW8KEaz2J7S7Re8JMj3ATmaFjrS3xm5bgeKJtvbwsQW8cxM",
  "key27": "bc4mro3ohLp7rsZ8LSp9FLYrahym91Jf5MBdGGJYcGz11xtMYj7N8JNb2SZj1N8JwgsZ4wCxRiYFwyRs9iAnY5u",
  "key28": "4rVRAhJGY55k9X2uekz3TJ9tnA57sKM8ehCHgDag2wL22rsga6AvCrKb54rXEXnxbC36gYSsx7DtVTShfmzUzAFg",
  "key29": "jqkd6thcveZEuxmuvEHo1HMgzxRRzmsguLh8NRPtqc3BRW8HsYvpqL3DMXU5Jf9wwgKMGjEr2qG645deXsm22xt",
  "key30": "jQwRJDEr8bobEYYyfH2EvZrCto6ActHMEoSaNUukuFLwLcduYE6CMGYkdvG7hcMWEnsoKexsRtr8XkQqaxvW7E4",
  "key31": "4iMLBzFE4ZAmj3CfVy6AK3n71Vz7rDU96FfnPrCt8crk9tQ87EJQmgEzEoPkfjtjkCr3vdvYv71dBH5zuMNwxneC",
  "key32": "2Jmcjm7rX6ctRhZf9dFuMYcaYUwz9G3iEDKBKtAA5FgMV3rPCLGA6AJncNE3t7vJye89BU64jxoZzy3ASgnHMJRX",
  "key33": "52LZyYcKu7gcYsQUSpsfN7HU6yoxrRbaJHrfSJ614LV9oxgVxVye1Tnu4L6zvpxTgExRgzbV1h3e75VHn5W5jLMi",
  "key34": "3fJGDUe3jkcZEdDtCohgBi6YXEXfxz7piTiy3d5eWJ1GLWTe6hQpMAB61GJVs85Xkgx6ngFNWSrhNZyLrfojd565",
  "key35": "6YA4UPFkRwuyjuWdoob2GYMWJyNCivpN1JTqPFVN2t4A4zgqnLe1mZjrjkccrUKiqwoC39z1w1DXZyzyMTD4wtF",
  "key36": "3DFCSf3dwS1rAHi2YVENTU3NV4aoqwbL67FocEXdNni3ngEBpiusNJ8oy8aM4PmfTPiJ83qhZBMzzyYSV37V2nm",
  "key37": "4nZDWncW3gEHWmVdX9Hy1gk42e9zZBJcGsobGzZdBq6YKFxvvouvCqmjnGm1urPBkRRx3KJLh3FR1QCneqThPZjw"
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
