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
    "3M8kRmc71ipwWvbvvDQbnYYzUrUYJafF3FAtHbWrHRA4JBdLBgQBd8YkShBAAvXVUFsGXm5PZ4kaCvPUoahSvPFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BJ7WYFEfpWwiLdEdw4kRFPZ9uC7QoKa1Q6LpAzA22HWM1hstYs1TjbkvKwbTDsTrLYEa2Uh1hB9SBzvtm2fihKV",
  "key1": "2DLVazsx3zQ7Zg7YdAk45FBVY8rhWVST8kan67a3UVnWik8Dz8TJgQJ3s3eUYhHiAGG8PAcmLfc5G1T2Mi8mjZc7",
  "key2": "4oPKM8kEe2dPWPgZkjQ6PA71UPGatAHMXWJmSAZNzWde4VTNtAZGoMY6DJbP1ZJhMkRbDu7PeGQbhmEmreW6GZc4",
  "key3": "4mDFHzXRC2mhpSKHVSc3CM9NpQ9D2EWxnPoYYozKSzMW14yL4ehALRiaKoW6SDq6esyVwPnyBDf9knEvkrH989Kc",
  "key4": "3YabhEjWA7bq4R8pL72aY6SGAxbaRE4WxeiR56atUQooXoFMMViygGF63Hqm8PVSVDVxjHediVnRmk1oiHcswGs9",
  "key5": "4dpkcrqriqzhC2tMms8a694FcQDn8GCENwNsNH84PmusMYg1UnNyjzg46GeCJoddWFjDGKQEDc9dTUgi3fsbi2dc",
  "key6": "4JCykQyFHgVm13vqth4KwVSFNyD56FqcYkbvJcB9MYDtmTK2sQqWDNDqn7vePb885ApAhRMqnnQbAKEs1gYniRhd",
  "key7": "Yx43jsqS3gZxpCiQGud7MzfhdVniJrmspyLNv5H5Az9MV6DErGyvLS2wQiS1WRf3Ps9AMAJctAYDDU6yQKmdMQZ",
  "key8": "4n3TZeudmXtzN1ooFqf5ChdMZDHQFhDUQv3t9N1j2Zp35pr56iXLXcGC23uWug4eNdLkSUfkxrpbPcDLvS3q5kgp",
  "key9": "5BLdYqgPWE5BCVPxMz96nwP1YEFJGwgvUTDztednKgKjzWTHZwhTTUKx5iaiE5yL5GgmycaFFL78ijViSi1TbK7z",
  "key10": "38Zg293Dat8579vv7jpJXy4tuoiT5EiToEmBKKm7g4eaaXF7NJd54efFdFnfRVe4Cp5BzyERAcHFSM9e76j3CDWe",
  "key11": "3mq5edWskiZhXo3fLXb8a2EKwZmmmYvkEewfMv4WC2sp8SYc8E7bqDHBt9RvtkGjjDq9XfwWcPpFMmHYAyL4wLJf",
  "key12": "9KrvsHZALHZYQa6KL5vhhTeTHoLmsEkyFkB6bQeNoiixafwyURkfgH7m53nHMAdSpsp22A912bTrrqbAkSCS8T5",
  "key13": "46XkHPnt7iLJzyrnswyd8ifu5VdhZVZ9k2M4davi3MzwddBL9FffdsCZd89KJo6oyBhaT2okRsGPvofDr1zLZYKk",
  "key14": "57rNPduftELAdo2UHrfsa7Y241HvEcSFQn5hqvEetPFaz4nr3smx5p5n3ZF71ctFZMC9kzJGVBoiw7q1chZZcKCb",
  "key15": "5vqLyEZDUHzfDrkZo7YSPsnxuSavusn34BYA1XTcY2TVqSTkAhhZ5QgfmUbQ759Lk6FEmHdTjz51PsDUhrRTbMRW",
  "key16": "2DEK16T8tnEgQWygd951Xr7WVp7PSc74q1ANDt25gC6jmZcM2mnGmSwnaP8cdpM7dtMvve7NaymW2bii4gkVSWfe",
  "key17": "51HueVYUfs9rjJzmfkNEfvrmixgjx67wDXiaJZzU6r1VahRyuk93S7RdWnLttLWPYis4NwFrd3ngGe4V3g482wdE",
  "key18": "5Ss9tw6Qessxs8wTru7Lkd5LZyyfYHjwPxLkP2c7NpNN2F2bMFoNjgod7DhBhaHSEyRn1zc28Zc4qckKW1ARMtxX",
  "key19": "56A8Z4SgckbwXtbXHWZqpBR4bA4967Lx2vXyCX4q3zWz2Cfkt354D1cgYzkn8QNmwFNRruo7quQhQTywTMXhc3uF",
  "key20": "2RYFX2WqmSHdohZHJEQcSUVwid2cCr9YUuvRmfCBNC61e4CGF9ijZ1uDjmb23YKnxgTBCJdrXhvmEfyNgiW59SVG",
  "key21": "3TLRnefyfvcVstTJzmEwtiL2JiKMQ5jJtA7b2CrQCj45eGT6bugYP3VmuBVRFTJHc9wAGKKEJbTDJgXYZfHb6fMu",
  "key22": "zeupJTb5Z64fh9yqoNrNWFjgiPU1G3ELLg1WvAByKFKvhm3qBzownNtxSdbozsLGqtECA2gxyfiVGUeFJucFwjf",
  "key23": "2E6YxsRLz89tSdzJ82ZQ6oASDLJw1mX3qBwMUM6wfFem757gEKYRenayuLCahhJefNCv7fkRiC5GhTpaxBbVsKcF",
  "key24": "4UWoWUiEFk58Fi74KAD3AVMD8Xko3Nzzs4gigGAatFxUsJU6HBTcvJatbnVXy7kq1RE2E2TXrHveWxxX6N7kR4RK",
  "key25": "2Vj87uxTw5uzUetbgg6iS4xo4qeSLL9bpxfmQs5NXTuC6qwUPFDsEbFEh7JGEqcoT374MLjtZGAw2NewtAQLRFQN",
  "key26": "4sKgeMuCE1yaiTP2Uop2HJMnacKywgfzqNKuR85MAs8hzm7PjHdpuveH4ssT65YYFeS2dV2TYwEqVaV3Li5SL4TX",
  "key27": "3eVgan9LXhdgnWK5NtThY48nTpJ8mFbd8HcwRiygopE85ykoRFwdJVrZsuBnoneNcQuqNbHccQ9NR2BcSZWWT2mo",
  "key28": "5rLkoXZFSAetpvdkcpcFU9E6n6FUyba1XCAHsigNpg1oNXfV786WKM3afmmy5vgEp5c4NUqNYibpxMwMicfvxT5N",
  "key29": "4Qkt2KTzCqmZt1ghTo7vgMudqveAuMdDPVU3vTtNMK9Yz1Gfc3rFFvXDHcnyKq3TH1rL9sxnKGRZFTSME7N1nn1G",
  "key30": "NkHVzg4eyRMabcDaQ7WrSgYk9ih7ZxYk9uqw5r4eXW782v1uaPFccoFkbZNQQ8sY5NVN2ymATkY4yXin4sCpzUm"
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
