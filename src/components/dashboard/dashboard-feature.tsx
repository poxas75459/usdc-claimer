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
    "4yivu3LVwfP54DVGaXaNqkMDts3P6nccBrHgwgGRrKNkRs5NPTzdAAm5AQTbNSCRVKWWwtzbfZ72mniWhBWfGyTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55xGyHpaC4hzKSAv3Urt4tfMC2VfSRkHzgq3X6a9wiHDJEYXbSmp4v5cV7btUNhKSoXZ7TXxAzMiDaQkLM4cj87J",
  "key1": "2UK7zKd3sxaw4rmuFPgEMcsfHjq2r98fzyGS2p9TafDiwmiWjRBv4rn2SSCbLwvm4wLmrBj4AdMYac9yKGqLoFPj",
  "key2": "4rtXfGZVnCzJdxNgfVeETAs9EuHQxUZune3a8oSRdhQFWPhyqNaoLPnpms4kpXNQUPJqE9e8bVYsBtWPtruM7Nov",
  "key3": "cFpp5iZa9XB7P9vNcyvsmW4M5Pv2Ro8AELUptgBJGexnGKhkZMJw3gc7A7waNRCfXvCviX6YdMr7MVXJmKQL496",
  "key4": "2AeWYT6dtocaxwLs3crvyVt8ZV9ib1h99NpzY5Nv1VixZgAPYcwQ4pWpgtyBKNNbqQyHTRvQb1YYQuALKXp6PNjU",
  "key5": "iaRHVHBkP1YoAgJ7frrvHak3jgW2TT7XmSWsZbWvJBucJJVcoGvNX2HD9G2By9CSnXwAGbh1cHFGH1N6qut2V7B",
  "key6": "3T6kD64AbjpxcA6KL3iZKKobvC9e3dUHW6omdutH8qNtXFJyave73D9SDbn3jxFwU8tYsLCv9rjH2yEAjiywVbGa",
  "key7": "5h86gNYm9wFJRWTxD9PoGni4pckX82YdUhrnyzExicyoU9JPbpo8ZKYS5iMkHREy753nuBXF9T2W7fYhkGadF8pu",
  "key8": "5SwMcJbatQcfqxPaTTwhYf3TNaTgdEBgDr2fRJ48zJKpDPQYyWjQwzmiFvXLZbNJW4UvdVeFb1pLcXm5jdNhBM77",
  "key9": "2fVzTX2ad3TZXpzNTLS9Gm3GyzZCBsFJRqADXaEwsjFHGcKzi7LPqVGrgR8iNuAKT8zKUQh6aLDfUnnfYTGjZqYm",
  "key10": "SG2zT46J1u2s4RB1Kk7HYZkUYfjMFp31ZbmhkmT2Y6uDyzR3k3kZfyB8NoFLkW2wARC1UVHSDUZ36jNBEUaGVtK",
  "key11": "5bwpmSGgZrnyC3fLDenKy6mVVVBjF1PJnjr11PbdGpEfP4DNTkurmEicqGvNVWe4corc1zDgBe2SpDvYu1Ff5CrC",
  "key12": "45HuhqorhdneEG7mGitciXGCFME3aWx4JQoyGazXZGvBeqrEfESAp8JgTF1XTswHr2C5HpS1ucZ6Qds9sRa2Rug2",
  "key13": "4nDipfFiP2sTrgQq8cGDoVd8Ew84JSMrsy5Qxuo84nQXFUJPxwpjhhyGFcxrG3zga5J6fdD3iik6oh1mn8sLzEab",
  "key14": "5sLWduKUHSfz7Wsk4izNoHvhHnuUf3VAAEmi2UG7RLhFaEMDe4LvRDdqFbP7T5fqsxNirdzGdFcVZNbWZjojTDmk",
  "key15": "3GQagSAK28faE3xv2CQYikBmPVzFqupeH59c7gaS1Z1FtoBLQZ4zptTEWHTN3Z6bk7pgPDSy9qpceLQuqqznCPBs",
  "key16": "5ezjJGhQ3Pv8sADt5nF4GceoNz8FxW2fuGAU3RkapD15b1VrgibXnzuNMk3bJucLmiHTryuAj65ArGsYB5excYB3",
  "key17": "HK18aTWeae1bkKtJKA4tsz2rWFQM29skvKiU4GvzFYDYSHj62eujiRxh392tErhDokgsXUfSmnkGFxtEoDzauZV",
  "key18": "3HPj8MyLqJVbNZwqYuuzLeL1pexwsKhMdz2pY32tnXLXY5kFtLyUZeP55t19ZzTRumSrEmRQcu6BpRwdDXvK4vGT",
  "key19": "3UDxfnvjbCedwq5NqNhku5TrUPz4PAMbsK4uwrLo8fshkcikMpvgGQqqLZxzJkYeEgp3KRt6uZzhsd36PArVGYJN",
  "key20": "5CS2qPgxYa1CXGGJ9WDHZMYAW4ADk7P6UtyDZgnPkhTrK5vL1VCU3Wt3o5ECGXq5Bf1173Jb61LFk2Wt1oKqtjP5",
  "key21": "21wzcZDRWroPN8FTwtf4ieroXmmfBRgUNVueP2dQd5F4XuZDHmGtp713nY52GFqicqVgACwbpYbGy3g45Xh1KPo3",
  "key22": "2xK5FG31TDPhikVQACXk1N4ssXBiaEVFPoNzMBSddchgto3MywiruHhmYKJYiLKkWw6op5v1iwL4iZfWP2xgnXVP",
  "key23": "23HTCNqXAvHLttBMUvkudssgk6XKznbZ9eKMDk88aeFLYZTAJGG1g6CNuyPurdP4DcK9FJNmPoBf3vTvMHSkQAPp",
  "key24": "5ADqB2rfSq6qLhewFAby8dd85szxJ5foxpQcNpa32UhaQWRTUpXSB4eMxabkapV53FE4YtadYw2sd5RhiM17uYht",
  "key25": "3ekMAkpJgMSBkEj1Ccu8BfpW35Pa5q2fgqC9K6Qq9JFZ4SAPaZsBjyDpujs38pTUdMb6FJ6tTMHh4fZ7UfzMNqsK",
  "key26": "4n31s9yWxyD56sTWzwnHNp18wfMJYRTc6kfJUvMqSaXuhrfCn2c2JZtw3zSTWeUwj79kvnewWEWWHKpJjHp2JSuN",
  "key27": "fsucTBgyB3dwRz4deav8AVqB321kVyKayJVPj6RGXfvMsFPMcVFfxp3zGKqYX8bxQ4dJVetz5BwrsTKsi6wieyE",
  "key28": "4RXs9D4yZRNDTcZfo1jEgo8ASS6mib3VqieEXZhXenfSszvf4ddurqQC5VGKQ1Qtw4d3b4y9SpZGftAtTcUsUzfL",
  "key29": "5UGzepRCkNgZtR8hp79SkZaHW9xpZMrQQoiCmGSTmJpF7NQ7rvwsaxtAYfxetUUYMhhn6mMtZtUULS4fN3hDaZJm",
  "key30": "5NhTjeHQ9gSK8aQygbtovG8YoY6bDzWSPoKEhBxH8hkWeNPxbb6dWPyvfGr1RyRDDPHkVK5p51hJ9pfAoVeDV8pk",
  "key31": "3m2VPBoDJmw8X7H78hLvivzb2wa4kfwPbx5VFq6729gZtRay1rp6v1BDaF4BpWcAT97uz1AYixicFfgk6867Xbw8",
  "key32": "252ja3DV88orMQBgPng4Gcbn9xuhp2655e3GBMFxUFsN1UGTmDhGnWsoeFJPMZo6z3XBaKJLDC2ukrv2MhL9hBMM",
  "key33": "62kfhnHcT8h1R74wbqq1vCdVD7tZQ7f8v94RiBH4d5Lt6DT995y6gPTSVx1KJcB8cbwJdGPSdjPCkD6DdCbkz2WQ",
  "key34": "3stPGYexyopPDA3drpkzyLC6EsENKfgTwYq1htfLD2sJkWNneLcizev2ZMfh5e4VNHT7JZQXoQ1KRgwGrfx8NfWJ",
  "key35": "3VmhyfhebVPY3sxd1YJQ9t3h6xoY9sxYKvqNzASFtFdQXjzM2GuK56XKW2uPNiph4LTLfN2EkkgbbhQGW8L9pi6H"
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
