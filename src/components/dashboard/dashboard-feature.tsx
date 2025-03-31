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
    "5zCmgAXsWvSG7WxDFdZsW38bDXC6Nf5tWLvrMw62vag1Qbdpin5sxDSRjHixHfAQeQ292pTgMfsTVeEtNC8Hqx8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1cNkDWneebRyaydGassCRsq6FR1KK74uTWBAryQF7VGhG8Tu3NTj2pFmaw1TCWY4KZVwNjNrHbuH1pzmGhixPRX",
  "key1": "4UPYZ5o36RBAnebSa7HijxJCm9YGaFeRTcMi86uJPbffGxP45vF9F9njoRVkPmehSSaKg9gzrfeypcmZCQuWb1Ht",
  "key2": "3iiA2MDrTE5EzzkTXpRseJu3CaeHxBtaXBC8uj545vnLgvjeM1Pn8kWWCadgn11RtiGQzUrjxnCihi6bagU4VUFc",
  "key3": "2FLjt8ax1VAvCqgHwh9ssNDUm1ehdEqDYwmb5zxXt6EBke5BPE8nMc66vEpEpU1VzCyZ5sPucHyecCfoGSzdEjxL",
  "key4": "nYXYpJLnVg2BFueGjBMufvVoWDfWmf5Az3DQxRvduPoLYAtkRb4ZjP5CxrzN4AVV8iL3Y3XkEWNH6ZcDo9TnZfq",
  "key5": "DaQd6kxXyLx9yUMtWef663f7k9FEjw5fo1rZMpLu3pjaQz1XzT3LrSYqt2MyTrNctY43gRJJgx2Z8e8Uk1manif",
  "key6": "4swSackKimSNkhCjKW5HEU1qedT7MoMzvE1AtPBxaRVZFv4XWKYptKijGRcBa2aHpj6oXJPTo1kVsVQ8qZR6buEt",
  "key7": "2QXXtTgDkqjK8YynEmAzhR1tV8Tn9EHumXMyZ7wT7HGD9ehDjwU58WSyMaxvbw6ozPoS5jzcGcKho7V221SVQc9T",
  "key8": "3hCZ1FdHXpBgPdY3NgdZe2TtRk2VDsQwMJrMZPc9Q5oFt1zgAaKXMuKFT2tuFbxWGAeahUng8tkmKrhKT5cNqFr6",
  "key9": "4edw9vKmjjn9GsNxucNU4usTJFUXHX31c6awSd6pqs2iyxmt13uoqpm7Ds7zeCLuTzphEmTjzuyXxgPFuHECUjvn",
  "key10": "4rjALXbNsgbyhaLYLvUxxiK58BZXzaLHdhXw9rm48kSDRscLwRoo3XcjWN1knZMdrF936EBtnjYvjEPaqqd3sffE",
  "key11": "2xr3i4typ3Xz72kK1hvhfx8CftEKYZ8Z6DTeQrD5jrs66M6YyDLuoKDiYU9pE232axVoVZwfbEoTkKTZ9tLPn1UN",
  "key12": "fAoRNXF6VEutRmMVNStzXjcN1DMWsm9t8msj1VfQb5ujDQnmC11FBGSy1HASjPvZbuoFN9hYRrn61NvYYaeKz2v",
  "key13": "4MMNkmw7DsY8BLaq71GzAmxVwnkRmtxSpm8TAASZcnm8qFL3B6GjmkWmqeykpJyw8iuM4fDiw45QCPc9xUdvoBgX",
  "key14": "VuezUHizpw27dkhV4YHfhQdu5bFozG9sVbrQCA6KHrorzYjEc8cBMzE8DL3RLMDxcoBtDU4jbbXZD5c7J2Ji8z2",
  "key15": "4eJ1U3n35ZADLfyie7hMU9pRZWemzCUcuymokPahyX3hHB4BT6SZiViJydDKNq3P2t6PVwWifPzTTgd6cF5yhXGX",
  "key16": "PYuDvk3VhrEG3ikp2kxqsUmZXMokXjAsWBvCF9akswRFBJZBNSVvNKdGzyuMZFxKLFJxxuYSfrxDWyyUppYuVXT",
  "key17": "3cfKmZpFrm7cZbsKdy3NnvavZA9r2wi2NV5fxdbF6Gxj4jNhnaDjZf1miQzmzz2n22f6t9DjioNxQLj2baa4pnZe",
  "key18": "2SgUfnDGdAj14zFuPT5SLApkgWYca8iVywUCbWDHxsPvfEM4TvpMabniZPkiFwY4ZCK224tGnv9TjGkYzgix2s7R",
  "key19": "5yCHQ99EwASbu35MZLQXi2Qyd8SWKjofiQUCTAoxjL2fvjCxJaUCv9TG87xBqSoa4LcHJpiCb5BkdN1cYSyoB1UZ",
  "key20": "21qkqHVHpfuyUr4MEDsZM4Qf5yHPPdYXBSYnbA7MGL6yvwFtZ1mm2qY6Ke1YoSJgExSGjsnXaHWPUW96ZnFcAFgv",
  "key21": "2gimAce7WybK6Lbn7qLmfuP21Kp9QHKbvnA7Bwy77aZfoCeet6UonUeRvzzwqve4KV2aTnWtk2CjGN88tHm6uBFK",
  "key22": "Rmm8Xm9kdvgZKjYbLuJGvKAusE5w9TS9ThYse1ff74cEfsksVeCoLjrbWbFaQprWau4LwQJAR8grRHTNMErctwV",
  "key23": "2tGxZpMN4bPK7uxDgLK4sCU6j3gQUwnvqbnfjiLtZSQ5TMubsEJfGvQZ9aV9LikBXTHjYEEfyudwzFHiKCYBwUaU",
  "key24": "46K1Diiarn3myRKRoFeJz7qWWncHDLxNyUQaBaJU64yGaeYfLek5DFrTknS7LgBsxBnEodRJiK5kpfc57PWat8vB",
  "key25": "5PGKxeRgnwAAW4EAN8k5eG7g32HxxFqhHCX9YqkiG5g2DowCcy8Ysf5s4CAcVRk6XhbwKcyKnXirpgqq2X4TgmFZ",
  "key26": "3VowHtdm1PidVEHHMTyypygrNnvcEtDvnrSau5CKHsvUxZ7D2pXFm7mCCY9eeRhqhWVftg57fLdo4WPczbcqVGaT",
  "key27": "4JMgYSCvyTyJqM2DQw5wDqAuHC2A52F5QYqckpJFoJk8evXF2ZUzA4pPVYMDVpA4MTgrCQT5betTmxz7rakzx1VL",
  "key28": "eH392NngEpgDEREjCcfR1AXNnmHDDxbpMm5teMAfcXddBZzSgoGHDTyWS5mKqzKZq1SX7q4KQHbCZeWfoW3eTHn",
  "key29": "58VoJYD7hc5vzXqp44ry3QphwzQXHtWwzhre97qXHQJpcYm8jECJgMqMC6WbM2N8t67A8JpNKmakPwQgZ9WbWA81",
  "key30": "4TDoNkZTuzvjQqy56fC3CGTHTfqKVEmdFVXEf1agYYsUDX1VNe9FcGLTjvgDMc8R1uQFoF2YDzJ9VM1tSRZadqyr",
  "key31": "rX85e9Kro8Y2pGiZtDcDv9XumN8Sb3CaJyCyHBzAZ6WLzQ8TrDDBe3VfyxXkyhEAcDRszNGkm9xK9gveFLnATEA",
  "key32": "5Y3kbMf1dUc6EFXHQJyk4o7jLhEAqVT5wTWwQeSHkAa7B3mESdjW86ks3rgra3AKBTc1XJPSmJDfbkCDf7m1CfFs",
  "key33": "3KtBbhqMsB1Xxkygd9x85XdUPjWFzzk7idbHSepPXiMGLKRWEy4e3ETwMBLMeZuJzKxAEK9shQRCnQZnWJqmZ3f9",
  "key34": "2VtRcr8DWyN4aHByXW9YfQRiEyANMveXzRZUkuJkoSF62s6Hxr69Ze6aLCuyQLwerSotmtdbatjDsBT1hnNwxXzE",
  "key35": "598P4rDrAUj7zmQtMBTL4hNfWxj1Yudwgaakg5UACWRDiq98Fre3a3QWv8GKHwdRXWxkvwWRQVKWbJvfPbr3EV9Z",
  "key36": "3dXHbBA3b7FSXt834ZoyC7rnU6Mbdmr11HBnMErWJFQbP44Nv3u7tNTT144WMiUjunvjiByAkLtykKeLTmFrrZv1",
  "key37": "m7SZeZCyLmWp4xfs8pxrpJFW4tkyTgPB1xPGYpsazAETZEH36PzCb9vrSB4U1BYhNxAj3ghXA1FAnSyXEfbGKWt",
  "key38": "22SdQWP5wcti5DEMSK6yFnB79SuwegyLCXGFLRpycu7CsL4sf7c9fL2AEBj4kKjoJnQuvYFRjAuB3KqYeNDcbtRR",
  "key39": "33xMesNesoZzDSKJGt7mRP9MSjNkduo9yvCCyFxWzNoZiG4ybHZaxzTLNMAcGgdWyUCdKKLH83uV9HkBnUdRPhnc",
  "key40": "EdscmA5R6FRfsuTJYHHRK4X5zu1au56iQt3HFSca5KigAJncKFQrMHRn7Lnrfwj4N4pSeAzwprc9eJcDbWRtVhw",
  "key41": "4hhPx4pf3BqCWJHAseStzRTy9Hv7CsNWkJV6Zp3LwErWf11ygCMnZdJCG3R8NjriyNJBpHtBfy3cYu3rx7ZECKb9",
  "key42": "66GDpkyeqa7JAZ6YfttAzNg5edtVDjiE37w1Ji53LKXRAfsRBaDx1hUKPbjV2jYHnuVPpFXx42rSwThJDDDYzfdw"
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
