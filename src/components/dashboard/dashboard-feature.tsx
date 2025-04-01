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
    "zdiys6sEXwRPNV8vUXnRHy1yKCSZLDpGLiQptibFhciNPqGMW64dLu6hMCuUB8uE7Bg3DY7bTMY8q5vFFencesa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZTzhFQEeFiHgnYKkeWmh1U41saEDaRwySzK16ziz9Dsd5RnYKnGHS9sY75KKrJDiwAt4t4MEkWfMPzkAvSQXj61",
  "key1": "3UUN1yF4hfFTKmEHwf8T6zHQdZP1msuoEJqGVUzxHz7Yarkbvudq8J3ttbK8BRxa8K3UGNWoAiwGVN6KQDNC4DEJ",
  "key2": "d38fUzeFXZWxGoRxsciyiXKTQx5bKqpdw2zybcZYEReeBJbwX56h7WdAbEcrTYJQVFLxvmUMup9oAPasHvi9uPg",
  "key3": "37ZjykTDj7kmSFgCmzRAhoigFS9TRTq8AXfQ54jNqLZQYeimFee3PMuk4Szwp5u5FABWjA2q7S1DyCa3NSCKDgYP",
  "key4": "2SMCHQL8kKKsucHDAxPyjz5v5D6etTwgHE9qQGWF2L5ScmJpc4Mprt1Gn5fxpkEQ3VdZAd7CQq6ZfWxYSHWhyJpK",
  "key5": "4rYS4nA7k8DCNeUTKgjBxe15N4X1By28hsWM1cUFR3xhjALRAjwMM4XJS5LZQ1YZ5WJNPciPvC7TLN9wPERjaQDk",
  "key6": "57uCr8Rhp82WaLDTNJMpYcMLiSeaWEDYZWmMSLL3VNT93jawT6kusTPKBcvYRvscXDc1qrq6PgKuWQmSi6bmk9N2",
  "key7": "5MHhAW7uSJnWLTctGsyPAH8WodoDLtaTFVf24vr5j8h5SwV2ry8VMuFDS8brgZt1sY3wDynMcweYVYWJ5Ee61WtJ",
  "key8": "QRkDAMbEEEkNXCqKyESbKYJrm1jEYKpmj82zRUqehAXqK232UwjYq9MtkMBrzNHCgWwLDHSHr5o6kYcetdFywz1",
  "key9": "2DV5jTpTLi4sFxETTGVQCW2eCudyUCZmaMnfM6kGkp1iEk7uNyHHqic851wkf4VHsNRX1KQUzgVEHzrMHXkXbF9R",
  "key10": "5TE4UorQbfE9hJ6pQqMPxqbuDekUWXjWp4QN9wneawcQ6XeuHHJ3ThPve38GZvx4miR1XaawKwaT475sBJHPP2bP",
  "key11": "2azk3vKRQydZiw3pfC8vMQZNr2kUWM4KGkch4xMwWBU9BGfGfTW2FH1HF43739DwexioE9P8hEKBqYCgbmyS8mMC",
  "key12": "G5KTFSqJJoXuZUbaTZsq6sEeFHqX52ULoiYTfqpKBRsDWHNyzFNPt5q6yMfugVdsk6sSvab3Rd82bzYpPSAUoUW",
  "key13": "2MMSuytqhyeubqKGY4JKL2uoNkzdRRNDUthcCZZ7eVEEkfGD6xrsVVQXwS6Wg6RsiiNDxdPqZw6JQPxa42CJ813y",
  "key14": "5fMhwL6WeSrUzmnxB6vP31Fc8M1atnoVyNSefh8JXhVwLuqCNTMthdYJgLaY99XiGiitdT8aCbQk4coYguL8UnXU",
  "key15": "3auaexJ5qmE5hzJwyJkGCnnnCsMDvLqiXRERvYMtuP4Fbo8PNctG454ncQ91ou33zYbvrVNqFxyLoHtNqDi3o1Bw",
  "key16": "xbtUEaWSiLukxznJdwH6zvmjjc381xrCjSPFUuMxQyi7utPBdk3Va8AmrZFnmrufiA13UuYNmPdnZFX2DwJ1u8U",
  "key17": "42BFYxaEdMTSNkALGChmJZqL43RmTZJPwZgjytr82hFZYsaSo7PKFUGVuNfKkhju9KsqBimGk71TBkyNU3vfq5AR",
  "key18": "2PQhsXffyJEHQGab9qJBe5bcCzxekUQ9uGcu4FxFBQ6vLCoLwa8xrbDg46NSye3PDn2ac1hhq4LsTHM27W4VZaBE",
  "key19": "2QXJbpEuwGMbGxiuDKzokLCapihGQNAcohJjZ6EErZ39TaA8JJESzxpnzeG9a9AoSAoESKtM5DgbScjueykWA9Xa",
  "key20": "31SYv79Fr6k1HFQroCCN3eKSsK1F9RZTbcFD6cGYZKqdqNeSehzrCmDp2tn3mgrJsDK3Y5AD3pA7D7etkheAz7rF",
  "key21": "2U41Z5aoNYxm5jKdGMR8qkc3BQ2WU9qByCAiAztjJfWGnAS6EjLV6jCyuyRGixzPgnK3YWQsitxF6siXSHf96rp8",
  "key22": "2Q6ZUjWpk3MDSi8NiMaEag3QvyJrMdjx7F7B399hLGKm3sqPsgvHiTVd5MSqhi6QXWouW2hnFyDD24TJk9eYVpq6",
  "key23": "5TpXTP2hbdpSJXEzJycAVQstSy69hp2pYCSuDAQiR6ERCGGeMjTAQeewQRaCbgstyQAsvUXZTpg28k28iqMxsH7i",
  "key24": "58w4xJWrskfJLc25AXCUoqrnZbJJdPZ3zK2si8UXZnqfedDyzgioEfcAvGvRwjTYunAm9cnQjRP2HN7MT6zRZ2XX",
  "key25": "xJCdmqHqLoKtTHnTNUs1AMCB9jwcAPp7J4jBAMtcGfCAA8zP7ECfS1ryjPpXAZiWXBVBePWeQ6z8fHB5kEqiZkd",
  "key26": "aptVQqq6dz44VfrLWWtFGaMZHbgL2GiJSxGhZCnzNdjm8UKWMtDrqF2mcmhjNLmahCmCrkvwgQctX6whGNEmuuc",
  "key27": "whdNNvgnNqvJyfFWhqvo5fugu1bn7KPvAQv5KM91hENJdYXRppqZVUdNnoUb8HnBCSF1akHbhr2PQyfUJrYYqeK",
  "key28": "38Uz2Kj18GjCiNEtTjTbQsgu5HoQnheM1FuZttZDRNBwuyZprAjDoBZ1tVDGvK1tHcuCF2Xo6FsdPFDDEB9mM8fi",
  "key29": "657ANn4uut3XcDaKGeGG6eWitW4gQg9FmnjRPLYUB26MxXVA9a3Tm8EDF1ihXVrZFLQfktaM5jayoiRkCWvcDxCT",
  "key30": "JCq41kEi6QhZFhiXzKed11EkyjWh9ec7h92PXDcgrLw6WiXKZVqSesTrudyVXU1VF2DjTpve9rALQBWtYGT6U1c",
  "key31": "5dDTPGagvy7cEw9cE4QXkbL11dfdHfAZuJWJBYESVQpXC4sTfXGhWmXdMKMtr2SEsrQgiTKpcQyFikFeQifQtHBn",
  "key32": "4r9MrDKAPxQJJK5xwAzuHA8ejUDgoecC3JgXp3RT4wD4iRLNs6Q8yaJf6teUzTdgU6gDe4MSk4wyS47orGVMfVKr",
  "key33": "U4oaXzj4jeAByYXim96keRXrfv1Prmycgm3N6UDcyAUXDtWLw171oPh7b6h3hmnxvkQLK3CSuci6hveCbkrJBeJ",
  "key34": "cQEzj5AxM45FhcAdVbGdoPMGEgrrp5FNuRviyzeHv9tZucfS5gBvFz6vKNW8qod7NP8Uaggtz1Y15y7RAEPvuMi",
  "key35": "3XjNHmxj5t5BYW1JWBNjfYoeQKThJMJjugNschVfRWCPTjma4d6RBDofKbBAqXn7CWzNwfiFKPqJpU54F4Zr3RS9",
  "key36": "61QufTXXqhVxYiUGTdNBZT9AQixuYXxkgbJtxW74NWjzHX8UaeUGf37w9NBS6kfAR2yh9MfVrLrpWWABzWRtV9fN",
  "key37": "5kd4MdU4hKyWGzCuBnrEHBwpuquWfxm1QYoG4sPQxDs4zCXZCpJw5LUU3PBuH8FAADXyaFQnSQx2dojTK5xbgcff",
  "key38": "5VynomRF9mMnFNznqBBwayAdc1GamRx931j9Xco7SMsGBZ4ndSaH5p4ustxaZnZDExCN14Uz8AQ5MTJ8zvjV5Txr",
  "key39": "5D8NxibBt4o4ZWFpBqu1QH7qi1S11f8LzhxEiCai9xFhtvhxAA4oELH6uV7MfP3En1M5dxkWMCfFbU5JCqjGZZez",
  "key40": "4eDKmsHvpn2AvpW8vQiYLTXEHodgyuaiFCFv2qECzkXHjRyQncWUHzKRrTwFT3WoVq28Pay69a4ox3phYFgMo9aE",
  "key41": "4fYkET2nzJi7uSns7dKSoyBcyfLMbHbn8Zn8wjrTMed4GKmGjfJvuqR2QN1kjdc4WB78mqgxwaK6UXdatx1ZCYqV",
  "key42": "54QQfRixHviu8dqXiUs8iLqd5bVJ6n8CFQsbTgQZY7QQ74LG9JrzPR5XKB8Dj1VEdtKznvro2RXfznQ3zfXsVmoN"
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
