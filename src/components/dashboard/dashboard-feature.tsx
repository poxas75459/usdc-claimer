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
    "5q5pcLnUgbcE6Roqifh75BALEUGyxLpfbAzYdKSrbV7EAujCSyyAqtSa8nTUVWW8V8R2XwjtUSo2ddUVU55JFdxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kNAEqgEoECnQ7KTeeT3yK3apqBdAwnKd3RqD3aUg1k5R5ahJfeg6XZccex3cvDF5ChKgsR4xvXWpgphqgfWUGqU",
  "key1": "3DN2dWovgrwSAQGfTEgzrTxb7N4bjE5yLMch5VN1C6qaZEwo9izmhMvpBygxtyEpsMi2hxUNz82bnk4pQWthjXma",
  "key2": "5UgxEFXVyYqLTpnETdSxZF7ezfkn77FB1UYMEv1hEy7RtiAUZ4o4sw27bLNwQSg6gZCH6gshWGdGDEBMQZDB1KUR",
  "key3": "4XJrXqDm21zZreFsxVjFKTL9RM5eLufaxWffxYGs9VBMtkSwHWvpdHd22DaayhzzqNpnWqWJ4suRdQevdvDo5uqZ",
  "key4": "3b3mHkeKM6UkhzpjtXm9vkPsqG75zjjNtjiT4Qyru95wUiR3KrMVFHiFA2xMfRMLxcTaxuRw3E86nxe7ejmp66WT",
  "key5": "22ph2h9STrvVWZWrMPsPdwPzfiywGEwNk6EdJkckDQVEzcH4pu2gULjpN2tpu98FrBd3SHHyxB6M1BHg8YQWJbvX",
  "key6": "GRWzeFmiHZrPUuBVrx2qobJratZKn15S8uprgHmBPyvDb1KyeSmu521pQYEyyk3A2fRr6zTVpz3gV6rgJSRv9Lm",
  "key7": "AAz1auGzXM3WN24FxYjshufWNcmnwQyEpECFHjC7SXuydup23yxsUVjYRa3ZCp2WpBxykwyyRMry51bzSCfdcqs",
  "key8": "4fRTFrz8R9GkXMJ2MeTXPqsewAUh28Xp1gzPiwa8SRHCyw7UXEi6AAEQjNv55TyXjB2t5Fgd51LXzvZ1UZGfRGAH",
  "key9": "3jSL5Wxs43VJa4nk7aGfEh6vxmwNpnjDYVwFK44emf6vigL7juvgXYkaPc4USBHpZMF5VdE4PNaC14UVCtKBpHT",
  "key10": "2Fpra6MqdwvYy5cbF8Fyn1LiDHNGNt8Ju673ZwnNC2Z6Gbco2TFKmrv7ht2a4qEMZUHnyiW7vKtRRYTW966ndQ3U",
  "key11": "3bMLerjm27eXoykV1bBMaHKUDrHzaPqyZduE3Goo81u58PWGRWFPKX9znyEXen3UMArBzvjZ1BBcG7ohWotfHD6L",
  "key12": "Hm3NQWmoswh9aUvcTX6TuTsXuZEKyW7VzicYew23a9PE9bd6hHLfXxWN7gd1t9a65yX8JdGy5SAX4tE4bDycq9R",
  "key13": "4868swJjm2hZDFyFB9HzMQ5qfeXJdwm5SKDrHqeWdu6Cx9dBM8oFaynvMLimhbmjP8PVWmK5cX4Zg93VshKXwDzg",
  "key14": "2ZpWfWrBsPowRqi6Pp6nMmE6c9fY5RobmtfHa1iBaZJPursuSjY8SwrMrMi32fDVMqzfTZfGZPHWjXa6sArWYQCx",
  "key15": "51DqYVYsu9ugVqRE5oYX1e1xWf9D9U5nUx3jZpQrgbHgJi4CtDkhXji4iBYQ9HqK6Rj17ia2vEBZhRSgXiqb4syu",
  "key16": "2n6PiuLEGqdemyy3MC9xdsDsqoMG5LSfdtbu2rSV12P1ZLTMPYrRtE7H5PKqbmyn4ppX8KCqKqjFW17X4wTMHNh3",
  "key17": "sufmyxQoE84u8bXNNxwPTAKJqcWyPqkGNH2oEdfQoet1psnUfNFhjZbkx7eWLinWWPKArw2FPSaKwZHYywazkov",
  "key18": "2UQmubfk6k74vSBcPiDGwPEF6VJxafgwxLTKHDUpTR66hJ1Bh5HCMcjTTCYi5j5Jx5fdBHQJPbMHMpb8kh7XSgNu",
  "key19": "2S4hEazsn5aUaW1a7JBB1rJDBTdZyLtBRWmgVU5ud7QGEAV6F2dX6q2nt4ypXcT1pP8xTiZ9AqMFYULHhNZiNgza",
  "key20": "FKGGzPN4CPKVwMwg69r4LBqRBumjZM4H3A2cebTHnihjraE6LaoMtRJ3dCC3DSPW3PtS9oho3svrq9VYi6HY3MZ",
  "key21": "5hmXKdywbeCStiiWnoqfy3UbjkhKct7dvUcDT5GuowNdZwAaZJvZRuY7npZw3D5FRrspLpbjgeSNwiCJQ9RhpKno",
  "key22": "5P9nnnBRYb3f3bUEeu9TTZasZnt2bnzqs45KYiWUhV24iK2e443mWKivVmjjSkDVaBPv3CALQ9KbhbxsmcRJ2cL",
  "key23": "kYsxQpymj88FrWMsPGHeeaXnmfMtCZxDknUCP1KGSeWqa7EN94Z12YjJHwkspTeZoCmZUbQu49g63z67wEkbHeR",
  "key24": "354MoxdYtSK3MAPFkpaW93PxQZE1dFT8p67UQ24r9DoqRpjfh9WxuKtqiqijzGAzjeSeVjMLtmyr3FaadPgYrHbn",
  "key25": "5LwGV7HnvuZuMvj6v8b328KnZpZGLxVwY8GprqhT9FniNJYvgpFhptpZzPqwx9XdwvuyTpi1xmXL1yT9H4t4CUaS",
  "key26": "5xwdGrnSHPXaGYXDV2gYMaELiBUiQCvHuZH2PWcvHHXRpnMcc4AjtPZ3NFmg4V2xNPjNPpN3cgrHCZGYx3fbSRmC",
  "key27": "2HyuLSeizpcDF6yVfQcg82n1UUUtXoWbkNmFAsornqthdP7Y9gZDg5kBW8x94x4Kr3zhmxigZSqjnu23qZ6KDqiv",
  "key28": "3LWieW8RHh6QZwUgMck8rV2s48kmDMJcMzhLEqFZvPcqr4jWXqVTGSCp384m4P2iCKxXzxP38DotvT8w3ntFTief",
  "key29": "5HoQ9FRGDMvW7ZnHnwHAMXdX7KYEDPdgKsorjTBvC1FBiCR5XtCGc3LE3sAtj99Xd4M9o5HYmKag7K9AqTvs6kJt",
  "key30": "2t9PAPXA4ia6VUXBVFdi8i9TGSxXe2m6FvHtR8bmBDDHUqYUAYeo5rdLqewMabcQ8MYxj31PdETqiw9svgHvr3o",
  "key31": "2kLVfxabU1odCouqXZwn2yU6fxcdLQoTFnUGgbg5zTC12Lk6hiLiVCTjXkhEW7naHg6sedaZqDqNXQ1nyX4zfaFB",
  "key32": "3yHQtuYUqaRS8zVNbsKmEigiqtA9vqqGkrd3zAEdUYumpk71nnKsZrt6oWytYgCMPfedkMgSmyVAfRNsZ3UHAXfz",
  "key33": "k4zcCvF6hGpfJnjJurdi8MKx13odvw5NmK8nouGvP7H555T4cXqKNyeQKiMAob4TD55xAVN4HMc6PSNgJGnV2py",
  "key34": "TQNeg9SLq1nm1tAfBvXtp9G3KDaFXTKfWFQD5fRJUXmQHMUcposGA3nAE24dECzg9MjaoM55yXPmDVXidHdsVac",
  "key35": "5merD8UCPMmz5c2Cqp34SAAcu6RoJ5G9dgpT9UYBuN4J39LM8emmZFq7H4sH6ezyC5keT6EqBaECRTMbHAbCyEFH",
  "key36": "2LiLk4QoJTXVhSYaCwLqSBNmREBu4ma9anKDBpP5EpCMeEzwUQQzPtTpxY2zPYG9y9R8xysHu6yedbkvZiUmr2C2",
  "key37": "3gNqtymPkk7CVCvhMhrzZ9MvwxBspmnz8r16ygTNskNssy9CQ5roTPeX5pfmRwYq3ZxfGQP7MphhtewMTrRFEPjh",
  "key38": "7RcXjCbb9TEGtRESLrchedi2b4wdK6dEcSb626ExXWpTLpe6DoHAsVaedB5nKuTGMBk6sZaNDaTQE8Wwjn8TXAB",
  "key39": "Kg3gkTNej1asKVcPMZR7g2mWLb8P9QmDEAfJwpSMtWXN2Hdc4Ey8BRNefWvoqeYVqrTAxJDVuNhcATg3c82QbJ8",
  "key40": "5oTX39vgG2Yr2tRnK4yDDKgN44gfK4CT9863NZ4BtcVNnfDauvrU92ug9DN6T8nxPNgbsWTHfivJvuEt4BmMcnNP",
  "key41": "644wLrYVCrPNhd45a77GrU5DWKYgJc5VD8KGxfFAJbNbz4h6uM1mGkWMCvEzcHwwvibW7njkeNUN5QaMzrPaQ3RP",
  "key42": "4FeihCG2mX1DHcFmyMRkqbyUdghoWfEcFeDqLd65b1mxwsLBFwMVqWGqeF7UvUXzexb8Ux22mBu3et54eh2UAuUP",
  "key43": "55KqJqXUxCuLrh3NFCwgCAwExqrCz79wudGAhJtHmY1y3j82kS1VPquBtowxHCiamhiwj57ngcgLp9snE8qCSpXT",
  "key44": "3wsDYGhM5xMVi7G8GetVcQK5ZWKmPDEp3Y8FVFBgPSXwRpkTrQicrsn3rhRQckeoddQYX8HMvvEu4JK64m4VzCSc",
  "key45": "3CxEYsAcuCLMs7yytd2HZgQfcsJNH39H5gUYfKAN229QZkJCFP6wJBPHTuh5nuZ5gSSckQ9hq73Tb8zdagYaivCq",
  "key46": "3iu8AEWnR9fQbjtQFeGojDt1exnxsUVqtURKPbQerW8fVhu5GyBrBsKaXvRsN7yeAsx7J4XGEk3x3VoAYbFnxHcn",
  "key47": "4GukYEUZuhvLQ7yUXn4me58nyKm8kdbDRPyu3AAmcdfBxpEHSTaPg7Z5znCa5fntBHwwQYDcMaiAPrCwFxcPkuv5",
  "key48": "n6PdjS7mCTYGKqKqB3rUnMb3uZqvXBi6gTXDNxPE2viDe21DMrLwT8aP31Z97ko17s7HGDCtqrGcPPpTPfdoNVs"
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
