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
    "222ZiBxTHdjochqKnoL4gGYMz6bhag8UeJuVb7RMXtgLNqtMicWzXWEVX63XvJaBbv9L57k8AMbD1Drk6GYfojqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26wf7hSNBAfqHNKYojMrANRyCcpZeZo1dV8w1wT44aikt3nhrMKJ6A7MPCiVLtnazE4E7dVdYQYEYSV1gyC3EJ2y",
  "key1": "5m3eE12xKc2WNdL8Z6vZgGJ3s3XnbJ6nyHjzqx9aF3DRGsCdYN3HLvWpZcLnkLjBCmDTCoF55dSZW3D8XeL6mx6d",
  "key2": "3nA7WuGvZBNCvtMmswcTntfMw8MfYGGj22D7Afu9j49tbS3Xq8hA9RJTwkaevwzoDn2CSn7tw6mx8AqFEbTF7pwb",
  "key3": "4mL5frqsrvaALUwuC636E4rN8JZK4nVVKTdc7yUShDwfxfNrN64h6HeAotvEzQBhDwkNrSS3TYp3nmMt7SEa46GZ",
  "key4": "1L2VCXPyLEAXnLEq247QyGgk4TsXvj54WDn1BZvnZdk5EEpvNq95xRVaxnesEATyMkQ339NDNoc2aAkE674bKJy",
  "key5": "5mjNBD77kdFhkdYa4bNzM3MpMvTEygdNPbSMZ3oMzXJYgpLCMRMorygGKGS1UGyPAdfrspv15QzSDXi1DdCE8iMb",
  "key6": "26iRdThaeV7ZLN3sNzhnCqq834KLLZhb4DnrJ85qLB9VDYxueP8cE9UBwYNM8N72bgQV5SRPu9oBH6B3RJ3tfVAc",
  "key7": "yuJ8VWWqkcNpEQ1i5Z3qtCEUocLv3WQTSusN17XbuYAee4XD1VmcuC8G29FdPMW66VGgn7ZhgkBvCgVrZkw24v1",
  "key8": "4neQGc4q8Qbxvo7i5G2tqXo2dKV5zykzp8PWK2ZNHwTcN89TwgxwpzEUpLK7SJjvmKWqg7NjKT6KiitHa9LnzsGS",
  "key9": "3RzPbdvKrpD6Z8e7TEeGnNuBjYTVsyjfXP9EqFJZVRdvP9kGovnrT7dGENETvrFvVXTRJmV2H3QCtxJtzmoGpcvm",
  "key10": "63B9WGwJtDdWxC9DZxHYKT7z3uoAgcWLhnGVH3FDWvGcXdeASuPQSa1BMtu8BP7g1Vbkr1B3gjVx9hPg1RAGnXcv",
  "key11": "5wrEGH2Q6C6NRnL8SP3ZqpobZ7SXtHD5yFx6X15BPveBJAQE9TSwe3dmer49xg96gCRmkuEidJhVpgrkG95kPgBZ",
  "key12": "2pkxptkp9uBMrCR24r6AhBuysgGqridVPXFcSRqYpTV5dGAYAyiV35RWMk2QMFGCATtv8JjvbU5PTH5QNdxXd6yz",
  "key13": "5XqBNkPVK4iuzyGBo1AgxUMpPGbNoYNA1Qw7tKEqme5TyRj41EBqw6VEVHWqLz824BnbDnBEf7STH7cHn9t5UnaM",
  "key14": "mnFz4Pc6JSsVnAQeQKYEHfk62TYYwzyeF6oHs4nd46NDtyrxu3U6qQK6zfXEdRmXFneCmMm4avpRc3Qa4onV1BA",
  "key15": "2YinqTLdiKEVrYA7HM6HKdjXaiVoi1HPVX3xhx3dfLjF51ynE4MdSJ2CGJa1WXdmjtfpwazWFUdfjJMswuLGXJdg",
  "key16": "422XmSo1Y85M182fjhqsDBGbb9hqRVvCgHf1ZRteu7KXz2G14Lct5LafqdmabsB3S2UxzBM7XE9Ypz2vcoist2RY",
  "key17": "4zyrjuPcg5sWsVpSK3hSQy6p7waG4EkaDkmqdUUWFrvgGeRFpbq4oWaJvDRx1v6Ni8n3miGhdqcvvjtZYFKHp7d6",
  "key18": "4TtPxskkCuMWQQcugWpETdCHrYvz4LR9U4j4KyDHKWuxocJL3BGT2jK5Fsc41uW5Mnm845xXM9kqFDg9rMbsguff",
  "key19": "3mdPqBzoW69kxA5RL6wmPbU99vm4LAfjYXzN26icNk6xPRVRkJAkjxHkoDvUF11UpSCu59fgK5Qajn5kSmh2Z8rn",
  "key20": "3uNMShBCwxYpY4vCMBCaP2DE98viqBMrq1AJ74Kk38Yn5cEbkSF94EhafFyKYmSQR2zyg8iWyTZMNmQAZKgXu3hY",
  "key21": "LADsqx4DE7jz7Lxq6h7gD5uNATccvwn3o4CUikWn85vK1ydyNkGkbNCLjgeUXwdN2aCu6YLeT6ygEDZoc4vqibi",
  "key22": "56hXUGyBxFgcqWmmiiNXJ3f5SZczfYiphaveCSSMuUCieLKLukxmMsYBLp5BEvrLkKeVG92tQGx944ELo8PAD2PR",
  "key23": "47pwRnYnwKif7YvuYHJee8xJxx8hYE8VFr5rZK6TD5Jyz1SvN1beWFU2kfMdYbAJMuKtrUKuVFLvp1n1FR7dhW11",
  "key24": "4iRP7yRwQNqweYvpUR9w1YGo24te5T6A9SmytE5jtQNrkziPDiEc8SzhqJCsdjjba35f31z4QXbDaGUtPh6AQnGd",
  "key25": "2dCRKeJCAThuXnu9oPNEnwXCQdVceFkTFGaKvwnNSvrh8M5sEkxogP2QRR4JhVS9A7J5U1kpr1nt4yYcUeoVMHTW",
  "key26": "283QtWt772hL7qnT5JwroguL6WdcoNLHZNwHMmr55S6678hjrTGR5LyzANGRYX5idBxRQAZb9YcVTTa65pwFbem7",
  "key27": "3J29RtngRU1nN2gUrN7vpsx4oXNjstVoUJXJJXzjtjRniDYNkNitv2jrfJBQ8AjCjHkez1FNY8LvurUXQj3JmC1v",
  "key28": "3sktrGwySABUVHqArkh8LprT9YHywaNZXfmQ64rdErbLTTuRYW5VCrFo7dwfF7H5MNVSuVyGRZmsv1eB7cuwL2T",
  "key29": "3Kk37MUT8Md7d14vYUYC8hWQrmWy9oPuAhBPQYsJXZYWotuceiaK6PmKt3XdtViYyToiNd5Wict1EXszMS7HZxhB",
  "key30": "rfvyTidNpcGPVKnEAsW4YfyhZuribPQ71oMdXLJr2RoEenkTt3iiB7qQVNri4D4PF93Loi3xdqX3WnikXv6owWL",
  "key31": "3rchvGhu4PRNp7uuQXRsmJcsLcFGDSyEFRJoaPQEvGMZAdezejpMWkomKiik4WFe2J6aNL4e6SsfzZuVZdL7gwZi",
  "key32": "3cJWNNDXPx2VSqA5Hfz1QU4xc9NotcQ4Xe3RqnJugT17tYeQkX8Dpqws7qtiJzRDPMTozzcsZobFNtBv4byVZ2Tb",
  "key33": "2QyQmTR6XCcVfuTe574KTUHLk52ZtNExbhQWhgJ8shF4K7GpKsFTF65nAZhnzx6K2iAgZnt1B7wDeK6u6JQ1vWaK",
  "key34": "4ARmiGXPTM8VxyzqAt8J4rYvWyUrLwLbvuQ9dQ5yydHJvXBsmUHJUypaqwkentLJsNPyvpuuXY35gEmJVa6gwrCN",
  "key35": "3tdpF5hza2w6mAsQhYfnM13rbLCZENU8pcSidZ9XbmC7icWTxtQfbYu58TUuy1VFBnSyS6Smzj5FkicQmFFMTq3y",
  "key36": "2BamXjRmxman6a3sbSKLrtwAhKnV3B7mMGUNbLkB8ZxNn6SXuUWgG3VJnXTNepvfT9wkWzoEpScGBSHPXHQFxcPT",
  "key37": "LneVSWHnQgfH3W5EbKjQuFNXbuXXYu7YZAzDp1mesagqPasB24jrNQEv7tazn5xvHwyLPxZhmU9wY6zZueqEhwp",
  "key38": "3xqz4TDY1adioDAquySHEeVa3e7feY5zDVQFGoj6fasHuBB3fN94mEMNzLYif4VGM6RPbHKipVp7ad7FEMyTrXtC",
  "key39": "3brgg1rgZLWFr71dC1Dx6dPCJDVEku6HqPLbPyDc1j6uQsFmvLt8CDvs3eV6fnUpxGjcyY2KwyFhcjsrjj9NSBtY",
  "key40": "2f5Xy1wmsMu54GeeEuHyA2bMtZwggT5YJBPoCX5Q5Gw3xwf61zzmbh47ZCoFLV6LF9PXmiG1AoM1YL8MarcjuBox",
  "key41": "55dCudKNSmT8Ue4n4SNNoMNFLPTSQsh2ErLJ1GHzAtoq8NyxnxUymSdmv9CyvBXYog7MyAM8rrtDJUJPmmSWKaDn",
  "key42": "5pATc3htg5e8QkZ6SjHUtb8vQyMEXDmpyGVyCZWrBhYMZE9cpMgxGi4V2c5iNie2p9UP8ZYEYuGoR8jBKUUjbuWf",
  "key43": "4XyE7gcukeBLZCfhJj4MVe2mXC9Eb4P5DDY9vr7ZhxCspZA1VBhYZMxQpuRbatpEQ5VRzBZrJT1BSsmiWkpVsdHH",
  "key44": "3Q9GnRmDEsHEEkKgbSqt5y8whec1Wp9zP931seTZoJ1oZ4pDBJ5o6AccUo3gtJBc4oaNRoMPnpmiYdkvZ1X8VKMf",
  "key45": "mgFJJWoosxPdV6gzrmoPVccZEeNonoqgj4DhX83SaG9Qi3SSBUd5DNPafgn9ohz3Td6EF8QrCyMvhayEiPtWPti",
  "key46": "2ZUiUqb4ryCJbHjSYxrA9BdT2xNmJ6pNuWeuiZjxLahPPQkRA2nAZSXCuNfZkeAGrvxsYcArD3KXmtJTkgijSc1J",
  "key47": "ge4wy3djyBkchV4Zdh7tEaDDzbFUtadjLMd6NbGtDMVs8LUKfbhsqh7tSe9K24HTLk6Vd2nxKHeQYauYPi5BwJF",
  "key48": "5H8Npt5iruxDb4QZ4uUPHrpKfegZrheggFr6g59HknPMn5ENGRfDaUZfifR2SMagkwDNJQoiapeYjUVVGVL7bFgu",
  "key49": "3sur6SztCReVGkynDEHnB2ykXAJss8TZrHe8P2rcgbtaNsjNXsH4AHoWTi3iNC6GRYiQx8Bmbi57LqpfGt3mNGpL"
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
