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
    "4GWHQK5KYihaj99rwUMEB85A6zr9u5A3nL3t7GmZNj86kvBgH7xHGgRMLTKKtEgRBSUmvDS22CCDXCPh9VzSevxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49pFMYfSWMKpa54TWvLyY1XxszXYkvG6vuo3jNh2jgkT4dVNkqPXpvgrk8Uc33UAU4wzkbTXfsuFoUeArCLxWPTk",
  "key1": "4ULqpns7A5BckSFdbSZPnfLM9GC3LGtFwkK6iwmWiSCiEK5vkthiaX6FzSqz72VcTPuZ19Nrjdb6TLPHmeL5JZUQ",
  "key2": "5pEz7N7VfKAufZMy2P7RkuiSBBHLyuQY3rRAJoZCkAmjuFTLfnZENeHgp1Ya575yt4PqH1c2VuLwi6oQo7YyjNkf",
  "key3": "3YT5Tnnk7aiauEVQurNaMssD1ckAmYXxpTqLLxsDkjQps2EPx6ebvq9Gf5urYAPVCTMVcaFoKCqbLseNAZnKKsYd",
  "key4": "NmnFxeiqQp7HLQgpird2XtvG4aJM1LjSisvKGYQiLVCuFW7J79VjBxrm6VJjZzmhgjrzv94U5xXo9rZyCR4GKTy",
  "key5": "jkJq3zkyEwNhedPiW6h9b8AP1fGNNLDeXuhgKMkaYBMGotwqG1ds9jtXK7rjE2yPVhdPAvt4QQsr6i3TrjjoiQr",
  "key6": "2uNDK7KFQg6rd8rsEWxXeEoYmeBpGWbutkdbXm7PgKifSJivwzKc7d7wsmPiKS4oeEezJ3z92FEKL5i78M9tWEeP",
  "key7": "SvV84ozD7Kq9KZRD8ve1apXh6Tvv4iW8s7emTS5H4odCN5RcvwjPs7RevKhaz8iFH6arvxyCZTbzPTHx189nCHC",
  "key8": "4WRtoQwmQuUWFuxQ9S12rWQe1ga4gpmnjoFfHe6VTvW3JJF5ekUMFNPtYEnaKk5C7D72UVohnbV3ZambH83remdD",
  "key9": "61TNWXNu1Hz9NfVNPvsbiLTP5zgxmeDZ9ZYVK46dm6NpHUvNiq8yFzdm1eMYTViP39hMbZb4UxPBS3UXn8MkxVoM",
  "key10": "5sEiiFfdLoJFayGBJTPSmVKoFrVn4kWJzQ1uTsf5UNdduJehpzKxuDUSEkQQHYKMMtmoc4BAJYpPeDyfeqbfLJFQ",
  "key11": "3rVGwRyxJX5xb91CFNWA2bpd1GR6JXjL6r4cWTq83u6GBk1KjhTrMmCwrrdFx4QQjizRBjaXNkEbvx3EakoZXPuY",
  "key12": "5X97kMxDiZvBxbScQ6QQ15zzXZ6Q622F9RNRuq2zUiPQEkWxeReMKKaZPGoVi554GedqQWyA75XURp3wQBDQvifJ",
  "key13": "2gXrmK4wknYdEZYt4W6feLcYvnZUXoqxfjUAo3BjkM6AdovuPb48M7sGKSvbjsk9bRjhxCgsVCoZYDfkR8JU9hCV",
  "key14": "32QPdsnf6bL6gRCVf4HX9etKqgnSBCcr3whTnfDFP1Xpjy1vfrc2nYqS2CoHtHhVKVLweAzzCTVveqwfYjiJqjAw",
  "key15": "2DC9Sgp1SdKggZsVMsn5RcPnmTNP5SgjuypEN9YmY5u7FehdWRUg4wsRpnZRFCMXqQdJU7EDvRcisBLy7n6daDuA",
  "key16": "43ye3MtCw2xUoVtBsKAYk3rVi38Zoi71MacpQV5EjFNEmeshGXqqh12zABFzSXtYgj8F3ftHfq4veNenTNMAeW3L",
  "key17": "5Zr9gJvbh11tpy1LQwxNUfgaKYvGFWWgQPSksQNfSruBrM1rcNG7GFbLcBByiQMTXi1H1Zb1Mu28jkwFcG1noa9G",
  "key18": "2RtTXdcTYhePweLiHJZ6zCfxnVtUuqSyuiWokTXzrUtCigyFb7X2H5EP4ts9odjneFm1aQrKEek8MrAzK2N1Mec9",
  "key19": "3MdLhPsgnbVGL1BrAcmoJWDKgtkF3MRozWz2PZULvvGrqxw2HbwCPQnZpPKQfmGvMuPKjo719c1Ekv1Rm9bXngb5",
  "key20": "62idyJd47ap5v8n3EqVCPkjK1yx835nN4MRWCRjAvJPSsaZdm6PXRwZkhJksd1Y41pg2epApbR2tsL34n8dBKUv4",
  "key21": "4avbaxPhDMSoL3tqjPs42rDiq8JTXysdYZvpvU5CeovmcxTJVv2DNH9Hx3cus9U7DM3dnR8gdKvbY6w2JnifXgsG",
  "key22": "63ignDQftnjDB3gUGDuszWkHh4FPFZCBys4q1sNtxf7Fe7kwCBMi5qyHkcadyAyWe9Ryt1EzYhGWM7s9Acq28mbe",
  "key23": "uV5p1tit9a7u8cNNbtjkNQC7zYeTbqD8YC4ADwNeNBddcXKWR4RgfuqVBkBreqb4SzoWGHiQdt247uKEbd91fur",
  "key24": "3AYZjycpgxeFb7feNwnKPNEiPqyEiJ2ov4FaxAdM6b1yKCwy7L9xGV4ZmGMMjL9fnebzSegNFELfMbcC48P3KYJt",
  "key25": "3Jn9d2wDW3pgmeqUSnEmq6pZnoAamyrvK3fvZYoS2FYJy4LLuPcpY5sDjDHnV2TTXAGWEjepokr1GKACy6bvDCpV",
  "key26": "5W7XETQg9wsfyB151nWkdW9SziPro3x92cDSENWZyENhVnhBNYPB8ynJ3n2XkvYumLbA4F2L6cNgoLhM6NboQTqi",
  "key27": "2sk7AxQvnK4LYEx27P9zifRxogD3SvKpVf1PjLuEwLXKNVji5xU9QT3u8FL2BR4wbbJThbTWkzn2JqgqWGQX9vA1",
  "key28": "3DpHPScJozQdnKxrwS5k5UtbKjpmpbdw8yy61eKXcr1hR8Z6Z9B3PwCdCeLTv9o21rAbUUgEMNxnPV8ujepHP24m",
  "key29": "5PuXqvm5NH2HKkcTxcB7FaCbaD74AmyRz1nhnEKjQF61QJ963YL1Ao5yTbqYMUs9GyHraHLVXecVB93xfQQ4arBs",
  "key30": "29iVY3ngL6TVbdJ4c4v1ctC4tZFXnWBPVmGdLx7JBrjvdbsuHoHTXPnJFEonK6aweMgJGh2KG6XpkPiYRe4riKBU",
  "key31": "3nQ7xpTaQY6bGozgQ7bkzmn5woUTuqLprCerf3PbkbKK36U7ra13GQ1Xq6M9GaNbQ6YSRPaAiqLjUY3DpZ8fw6cw",
  "key32": "61nVBzB7cQWv3aV2aMMPBwRNj8SiFrRA2szZJreioNHwqP4qad3AwqcHRiexCpUKZoP2avC4fctzD8Bmv2a1ScMc",
  "key33": "2mewjoVbgjJgjEEGxcLh6GwmhdMLd3fZ9pJUTbCeCsW4Sev9KBiypV5ggohakrhxo2igKpz8jtKi9JDhPUdYHrzb",
  "key34": "3zD6KSzCWHbkEbyiKnDPXBkr25MTYRs7GRnKTNaB6vWgoUfzgfv4rqEtERR1M3HqrbdKPAAh1mEWt12bjqER4UKe",
  "key35": "2tvqwQJBL6zYCzRYx1JsFoJFYEwwkHjuPX2Eac95K3jYzYcXCBzVo5N47vUR9VWcuZNuoLh6DkeATJHTLX77uS61",
  "key36": "2VtJrfFbnaASTdn6e49u9cK5ijrmgquwhHW7xzVyfZCWjWpuVACqweoM3iQR8f25wrjYAmmtA3ELVAqo6aaiUHYE",
  "key37": "i1PVSZ5QEuykhAxkDmZFe5gqeuSrGv2hLs73cquc8vSMRMwK6zJFF8hk8Vt3LFBK9vdpLeBvnE2vtSxR2TvScP8",
  "key38": "5Jv4bMgTAyEhFFiZvVGPdu8eCJNd1VFawE1ohadEKKasQ4AYAWuMRXBLGqaZEAoQcnwsfXhBKBguEh2K2VcA4jJx",
  "key39": "4GrVdeYfkhvEu4LNWJffSup8grfNM2t7Va1BJ6q8FAEDrotoscstbeRiC7v49gKWnbZARndrV1juq1oq5JftFEDz",
  "key40": "46kYBX6P7S7ejugWi1K6b8UASykajszbvcFTpDKqnLwpdn1fnHeT3nrZmJVncR7V3H4efQMYRR5HtspjBfVLnRzS",
  "key41": "4vX22tZRbq9GNFUyUv1cvJaFLzuqNhq2VLo9TMpfeeQuY7Y7TjErrghSzvcVeu7mXcUE3tePejDDCqfWCDACxDMT",
  "key42": "33amErSdSHoCxSrVVTGhfjx5yiDpm2vxtCL23a7938LSTmAJ2BwmhJSH1jLMwWRbh2WwNBzR8RWZn13wih4bPj4k",
  "key43": "1eYtUUXN3yemssAknBWi4wK6ZMH24fXAex6X1RgEq5ruuhiytjX5NxZebwkeK13EHND2Q5Aam6fdvNxCnjRsoJU",
  "key44": "3jdmpcLjHxcotLMX6iNKRFuJUpUeaWt7SmtjvMtgM4jBVdc2pwbSwzHNKwuzWAP5JGN3Pe4yVKrbApHY7ybHkq5P"
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
