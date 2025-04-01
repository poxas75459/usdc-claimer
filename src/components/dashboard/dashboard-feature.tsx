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
    "4K7iL5UPNTf21QPhgPgaJj5qAdtzJpkWPDWjpUsTXSn2E2M8FNLUk5LeWi8oLfnCCaL36pXbYQkhy2fxL14EeekW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xcUtw8mMHfwQ8AJX4UBGxAzGuVcVBmWhTJ4BkGjswCVcczo8c7nVU1wTBAiJnuh7ZHWVu38dSqigEju6q4yNv4D",
  "key1": "3rwJpNpX7jXXYFhhV8ociAnkvbwPMYF6HoQbyxUkynqawkmL8stk4ngk3oKqcMFdRzkgtqvzvCNV4ArVhYhEqNGY",
  "key2": "1Y63miTsGHtPY1d5GFV9KwZQTfhBnoFbHbrwgMReqhhF8Wrnk1JQBz8jyPBRrY9mbQwAVM8g3rRgN1noAyVpJNi",
  "key3": "51K2QDcLJx3b6GBMdoQgiCXQUzudXNe1ZzEEUnXyebApoFNbKTNm9vGJQASs9o4wSqw1KycP6qEoBTUKFzSxzrt1",
  "key4": "76DXgKPaUX6FE1FpGSyPH9sZKcYG72BR2ESJBddD7EjMC2oC42QNsHTPtzZD88oaXkUnoRNrmSVf4fu5QgrUaZn",
  "key5": "4fpj5ChaD4PMrtR4cGstcQqFv1x4TpeRUDQPFN9Lo29KwXjyQofsGNc3qZYCR6rahX2KenvQcspUHmW6n4apUehf",
  "key6": "4gp2qZzFXJRf5KoWApUqnku3NRDbSBBjvGFm32buke6dcsRmUT7xAfssbiZ7d9QDqzCYPTkTJPB2JUvUBqxY6RWB",
  "key7": "5ihLhNdKpHxn7e1VdRaaDZVJjdiGGPX5w4w1YsBjbhiWYRpW1ws8WXgTETZ3ZsgW8e3T6EJ1XptyVh6PduDHLaMc",
  "key8": "Lo2HGxRDaSHd5czS97YisWQAaWGPT7dPvVWQbeT8dGyCCxzfUb2iTWEdmHwgLB6QcNJjJp3eV3DpV3HpEPwSfeu",
  "key9": "4tFkedTG4nxmFFQFbmtr9T7SBFSfSW9DA9ywtqJpB8QJanEvxCpoJ5A92CHLpQKtfwYS2EY9GNYwdTDK8DX8emSw",
  "key10": "3XGuMgBRG7q91ZQPC44DXTpfqU6TrfebBqTx3v9SzMXCNeH4Ek5UAsPdcVS8xDazGF6Z64q2DSVSxYThMrpn6Dfp",
  "key11": "5ine4WC8iBbt5GDfQmZSyTbD5LRvga1EL4njCwHo29633Pbok1Sb8xF3Lh1G4R9vv9xtcqT3Dx78gqcXhny4758x",
  "key12": "5GgyCh4Xu8MBzSs1GQo8pzsJQArDMPSsdNEYxG51mvYxNVcmV2zMChTGbebihBJB9nWNhEbf2djxkkqmik8LYuMb",
  "key13": "4YPskdevh55FZWLg6HUEUdKLGEPKxLYb52hUn9QhN3az3xvMPFPsDvybJEhyzeChxC6CPEPqwrQWwaDfqRiwQUM3",
  "key14": "3e9xwyRsTPUCRECBTGBWKnrPUsAH6qiHKimoMwBUknyqFBQ2fGP9pPwv4HPtdYsf1hEJq1MUTwCBd4rQtAm3nvQR",
  "key15": "4wBASbtu5BbiDApizPCDnmxeqTB6JcxoYcfkB1PmDjxpvbHnkKwA2KdiSPDLS7LFmxHdL8ew3s6oKdsJrQTXzxa1",
  "key16": "1egEHb6stz9PL1LsCrYdW2ANdhCUKihXRgiJfDRKFuk3LfNHiNvt7oj2bmATXyrwTyVVr24Je8KWDADKTCh7UDP",
  "key17": "3iy82LBLFEEBz3L7vV1LkvHPQCd7symSajnePJm5q1xzeyC4Zi55BALCdEkw2mnvw7bCqgvhfkww3reYWMNp3ivX",
  "key18": "5o8uQet24P9NXqi6dv3WTFGMMNVH8ywLyZs8oKTcARwfY4iDuDzdeYyMKJSd2GTZ85nZwCFjPGjBvUJSRdPCiJW2",
  "key19": "471Une5NQuHjh5idhvNyM8YHonHnBygyG9mdvxPR4SYTtxoYdJfKzt3PxBMFToerZueKtDy7xwWQuHGFuyCAEg6d",
  "key20": "LXNvyRpozQ5S6anorMhCTLcyjiJie6ctuMJe5bH52Zt2MiSKBMVAKHdYBmqArGMZPxEbwax9vLM8RBQDKyfLXoF",
  "key21": "39ZPc2c6ki3JL3ThEhdYEeU17KCajtj1AZsj4kbpx1yLJmXftbHGepxRfp2DGBSw84zPBAduB2CXgxqqGFFQ5fTR",
  "key22": "5M7WQ7Sn3UJHXdGEHsbQW93KRscygaLdHZRoVPgD81BfZjnJgv2EYM56ZLZLv2kFSRBydXPdKXvKmDSfhThkjghm",
  "key23": "5k7Qrnv99Fbv5nsS67Pvg2W8MA6sNrss4epLKw7zSsJqx7nE8umuGAtSA5gSjZ691TY7Ns8XASZ7dHgPhS67yTc1",
  "key24": "iexnaAimAUbHJshaTwWxahLte5dCrdJk78jWsj93KqBsFN4V1szDb9fzUJDEDoi6hFSoF6SND4jQBZiQbT58hXH",
  "key25": "UtrkdTL8GwY1UUzMpZFBVoyBio6Eq63Civre3BcBc8s9nNTDYtySXv9swaMW4PBjwLKJeH6VZjSeSU4nW6yu1TA",
  "key26": "2MXMMC3MCwDLhRaHZkoHwfEWTqHBCoaj1rvZ3ZzHkqSCwDJocWXMxfWTry96wmD7QZc19Lc8m9uTG5E7smSgysMr",
  "key27": "28LY8eSaZERuKS4gifvPuZW7cdy9vNDPKCECjTK7XZYePvTbNh26uXNcEMXBn8bRfnSvb9Agynouu1voEj5Q351e",
  "key28": "4z1Q6zkDMehYPN2bjg2iRvas7iixUd2F2P2abVRnWTruZta3pbfMkq4sKXvpfPncNJwB8s2jAj2d6HC9GNYydUTq",
  "key29": "2fxv6NgYkXzPYr4rqB5T3psDZqA6VCmiHN5hmN2qY4V9urz8CgQFXrs8ueBB5RV5PqvqWmusSegS8kRCaUcNrToY",
  "key30": "2Q3irng5xEPWisChCjbY1w4kvAu7QNnABeuT4t5rU8XmVNozWRVTEgmzbNzjPNUCZe43oPQYq7oeKDsz1PdhS9JT",
  "key31": "4WBz7SRfW8e4oS6uT2U9dbf1n6D2wgmr5wjYhimAbFjTCApF6M7q6UiTV81vb33B97d2xwiEgY5SnCxyrEWyuTKq",
  "key32": "5uAeLaoEi8UpzhnKSk4AWVWUsTUuPksHwPb2jm1h8hNyr7pP9XzAhRDNPEHNpQwajjNgEqw7t7fhZjLR97CgqHuJ",
  "key33": "4QxFiQGev8zrBqJ9yLc4KAJmaiSUfGwXZKVrqw2nnNYZG5paxUbjf82e1PDHUY1FWWeNRPbTCmNLCcr5XSmkzcsk",
  "key34": "2h1c8a2jnks18bJKj9JwqV6EuJq36SCdT1sDNVw59tyAg2fy92CtHBmmqzbd1Wsdg6zxsrpPgoWP8A9ybhjNFFqz",
  "key35": "3DENzCTcFca1Fx3EhW56HohBowGwxvfjDX2doi7YiDGs3kTbnxrkpbCb6PhunqnCG7FjPdrEFCHvWLvwHoKNzBw9",
  "key36": "5sUJeSK7iGwCN2C4ZeRqQphaFGCWdJaVeS34S9f8WJgCTSZLdyNEoTjpx3EsG81ziyyPFLhLXf7R6Bjc2YMqN9UH",
  "key37": "h4qkG5ZtUqjWgJJUGntT1quLHbVctzrkjcvkCxx34H2XtWw5KKSbBJJhK2MeUtVVZiQohw2GWVcRbyiraJUJb53"
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
