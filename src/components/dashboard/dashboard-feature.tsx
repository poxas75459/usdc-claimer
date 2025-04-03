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
    "yDkaduzYsAcGskVbJ8sFbPxd2DCxW2x8iLk2DkUTAewDKJMJZdjaMVw1zQxPnqvY8qjs7YJsEBFpHsL3ku9tiAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cLuF4s4vUUF2mZwyf1ABYVQZ3d1jp1P3n4xCfKXSpEyMvVaTB3ZjEvG1MwdHki62kmXfDQT2uMHVAgg1P5qzv2x",
  "key1": "4zjN3ekQi2MqaHvpWQ1zbDmuZBFbGs3JE6aPbE1RAbzGw9L4uSg2RPSn8GWLLc67jTdqwWwZpVcAm31TprcYqBEi",
  "key2": "RMGjxrSQSYhXP9SfyP8fp7z3aViQBCVoVE6E6neQBmFCFrRfPCdMy7wBFLcc5GdSNi5BSdFVCeRAL2iSQuxn5cT",
  "key3": "3z7hpPKxowGDvi1ZpCQb9YGPZbHt2QajMtUhMLD23CgjHRqnEj8cwRJNqpvohGcomC1w7nS9xgr1hsegbTM7G6Uh",
  "key4": "5pWKGzr7avx56fyqRXaAG8JR3P8wwDf6d4Z3BsA6zhk8p9x9Cyy19oeUbCx1HjRwMrPAvp927xJptopeKuwP3vpb",
  "key5": "5i225Kh2xrBn24KW912wjURt2jDsNA4TNDEWf8HeqPQudqkDTiz2SYjUvbwZUW7D4DpM3FAyNK8pZ7XwnT4EsZoG",
  "key6": "4hM1igHtRaJymBTgCwPynVmwwvA24dXxvAotSpMtUTpuVJdcuCcBem4kiWQHc76iDgodfYznM88Kvo5TEDexTxxm",
  "key7": "5WDHQVYavNLWrR3obLNDHXciK2jNtxSWuL2C5fyGXuEDaBMXR3nfhiv1NPfWYowvA1eYJphRtvAjGnhrFovVsx5j",
  "key8": "3v2RGvsmWPpZtFVoed8jiHCGY8ptitopQb1qenxa1gR12vuxxdUe3rAwWrqEYnsAiNbxJoo6VETMXMDVEpTPwMzm",
  "key9": "hQV9C5A4A68746LXiYnGEHgPZSK9oeep6eHxQRVmf2U2vtxzr6daRFi3cHqyrzo32386CrL6YowUtJXSxTX9VCL",
  "key10": "3HREA8XQ4D3hkumedymmVugcCt661ywnpSrbrhzuP41bm9f4Ah5Zduy173Y2rCmeagrByrRR9SkPBxWtvY2jHSJX",
  "key11": "4WJTFTz9V7dMXoC5pmBcMdwSx6LN8Xu4FsF18VcwWtM25Rm9EehFNhK31JtdUfNTB2N6pZp7gBs3bnztVdJM2SEC",
  "key12": "675HVFK7FwLCZ8SHKdYPUzHtLYP5zNRXs6HJy3dFkArvwAMKdNEtLG4fCRZutg6Aqp6yKWz3QVq2UbJH5ZqXbfmc",
  "key13": "36pJeo6iq42eGUXYfAGtA6FvqRGHxpkGrhze6819TXTCepCoJN34naiJbf2oVukqx27snY1v4PrBAc3jShXDCtnt",
  "key14": "5NQUqvTjHaDiEEiwHDyXZJhtrfQdt6xQAiS1XSMCoEBepPdwyFScKXyEkUgvaegE6Qo1CEM9Ldsb9okwHAMLr4QN",
  "key15": "2kqcUPN7eFPQUSKB5j5ABxjiVuoRiJQTV6ANzTKTbPSFqd9hHhoqeSGtmSnBajoasQXptEfwk55ET7Mdczc9BEpL",
  "key16": "5wAewJdudCyxxJTzDZE3p8wJRfqJ6ovMdRtAfZkKgzUW9TuCrvRc9yBJbKN8PbpXTn29wvky5Pj8C2GeW4orU7ZZ",
  "key17": "bBB3xETAVvkmcwzb12f93aihiQRm4NioNAv6DeW8ThpvrAuAPQ9evHqNSiPHf94cAiGRWSCsRSJMj1JJwG7oVU9",
  "key18": "4QfzRXvtiX619PZJ7cUTAL8MPX5rsRuV7hZb3xV54NDqToootk7fjv7u2VkPqr1ruYNKLdxccEoSBZWgCxPomAji",
  "key19": "3mXuKQFzMCViRSAHVgK1h1GT8YBU2siqha6vVmsJEXQXU3zh7G6Y7CjouDFoPxuYPCDS63eyK6zXRm9T8rMQYqm4",
  "key20": "5BVjKEeTARXW8SPPLDmWSTnp9NmYH3v98YWGysLURRSG4CCpj1JVSuZfxGnbCPWCfZgRMAvcihbVLETV6mQdWe5m",
  "key21": "45VjkGmJ1oirr9faLYjREV5Kg5Vf91h1Ax4Xw8Pq49fxJS5Sh6giFoPguZALcWDhZa9jGpKv1QJCCVxei4n9rWP1",
  "key22": "3M1H7vB7UjLv16iH9CiPntfb49odsfYWmvM7N6wPt68PzVUZHRe3uDvZkT1Efg2d4VVmzjmWgLdzC2qYVYR1RUct",
  "key23": "4jANDvq3PMFY2jFiBoG941QTJmRVujzovXhSYk4ZGwdrbXHTPdj4c9enjC4QRkGhX169GhQUBsjGL736HmoCdPNg",
  "key24": "31d1giU1xPfC18SYxPGv5azuNEmqPDPg5kHoXJYdqMiWsc33zXgDXheab7Cbi5VJNBqeWRFDgCZJVwrpPDb9jEav",
  "key25": "5DEjGyVKmWg2LuPxqwML92Q5GREJDKL5JgR1att9F7vT8zxVNgpVGYxWV9mSgL3PWcPYGfbiPG1sGHQXXnPo9xgZ",
  "key26": "3a126KM13L7ft2stvrbyKNVShHjatpNrzictZJb7MDkVvnidD5wHvKop48iHcjxv7ey8rEonErbWoMZSQCJgiw4G",
  "key27": "44Ebu5mcnwf667gEKUxb5ss1d5TTtRmzyeYncMEqbtqCArfLP3R9tzLNnRwN6LGmq8SeJYCSTvoVzzimqCB7i28g",
  "key28": "4n9qREqxPAcMwfDe41KNDH9Y4r4RDLKbShrBf5aKXhDvdN4nQjFVPyZWV3767USTFZdthNuAFPSFayLxMuddmVYA",
  "key29": "pVVBZXSVxTu81v5H8WyAnk6z63TCN17Ykgg16KhqBAsXbkBdhhmLkEpBq7wjtpYb3Jdtyw956z9QTT4rhiXoc52",
  "key30": "2JmTWBBWXWTeKJTVmHaRCm7qoDgfYr3GDC16oS4qCFzeAmphJjnQ7TmXdoPQCiqkpY9jvAs1f1SdJgRpcmyXY4T7"
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
