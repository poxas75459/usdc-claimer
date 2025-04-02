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
    "2NsB5Z7YXKMdouQZhGcEWKzM3dUo969rgQd8w2R5NqWaWe3YRW14iqkCqmwpL31Lkq6DDY6So4xueXEzoXqgFDNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2unwi4gAtkDwfFoh2VGYuRMDpmJDPdo5EANTuUno2M3SuZggYdtuFazM1CPU2GRQgZAsQPAaie1f33DRokU6NrCD",
  "key1": "3C87MyTpuA5TjpZdV7g9NoM8LdvCthcTLcuboVABU37GZpHbAVWNrTnwTSCvhj3b3Mt7gKaqePq9TuxkAbGBvBj4",
  "key2": "52CWbfhcz9MResvnBhGW62rHQtFmvo4SR6XgA7fX1rJiskAc2WdC94jMsRVahSchxSP28AV6GH65mPKpQq83y163",
  "key3": "5YvrvevuNg1gyF2oZhfXyjmjBNq5XrKSCxEeHzQmbBqew7jYU3qpnRAWazTSLDV2ACxSNvJhukVT1NzvRJArTiwt",
  "key4": "FEnKmoP65rYnEGW4A28zCRFHSsc3rtTjLJJQcCWZHebEwPxfi7btB8siVV5dDPDDJewd7eQ7H68FatiJ21Lxoo6",
  "key5": "5itzjFXtupZaNLEYsjo6UJmQDLKJg16CNpfRvAozyjAcLBx1ZgiVW3721mUMyB16328UdDuGh4fVxXampL67fgtf",
  "key6": "4JQ4PDhiMEVsN1AsjApp2x4ZcFu2mtmS5musb8cn62H3pgc17dBZfQmJuxMu88gSUHmB4uBssUWAUxwmWykKGfpd",
  "key7": "32WYoGLdgntDNtAaywePHXs3JFSjuGtWVmn4sDmUwd6Akzqgn29QXeTr4ZELjKe2V3Ly6H5gqPoNs9uWrH56mCTZ",
  "key8": "459YjfjsxgsVxfD5DHBrm4tEt2FyP9Ytypx636WMqduZ5jAp7ceXJaaemte5sM6G6ynxV5PCAfs1zKYAybkhMsWR",
  "key9": "3y3gNkZqvnqPGGdxFnVv16zEHxbDEoQTFtB2FbTwir4CBjLHBE9oWDFCWo3MEcpGkXBedgoFSJfPtWFiq8E68x2h",
  "key10": "5UbKRoi2kZH7DnDTyKkEyKryMFGjwNFYuPAuTRQNU9pQpUAchUaFaotHgQ6EFw9WqdrswtjaDE61sqHnfNs8hsS5",
  "key11": "wz2epRxZZ7Zn1gdowyny3ime9uNzsuJL2dmWm8q9mZdJjC8enQGeErE3x8r6LsVybdrLdfpEQS8ktFkLq629Dr5",
  "key12": "3hvQUFZjAV98teg3zhwXb8FJbFo4bRzE7PB2tuA9C1nqevt1eL9nP7pwyKAeU5RsWxAcE5qDaJtSJNMVatSyvsGh",
  "key13": "4x4M9zTZjEKr1JNLC2yu73XeL1bwmUW7ifqc9Mmcn6wjhNk8ME9Uu9hQRGDQGCX3CPFfWntDPsbnq3EVLF7CRWCk",
  "key14": "t2hVY83KoA1CjC4m5n53DhUxcq7Q6G4o6NaAKjwZuaLJJ8Y2P9spxcK5u7TPyZNJQ3LFpnSCpMnn1ViWDRpHBvz",
  "key15": "2bKbpHFcT5A8vrzsWVGxcvwtJyuigu4vjFTiEcCwXPKTF27JieQg9ik8DfpcDzgZ4ndFXwDQb7VWVQet2BKy7NCb",
  "key16": "2CsKNrzkMKuqimEAvYcWKR6CJGQEiXo5bSi7kQJN2LjUb4md2tJABxzbqMTmcDMNBinYvCUHLtRmN6R3nt4NeJ63",
  "key17": "44ZREeC4RBrdpoCf76q8DFAHe4t4Fn8HnQXBWca23Qyzc9zs9jZzZmUTSmyCRdZ6kWHA7mNx2iHwRvVe25h7NYbA",
  "key18": "4aoX45e5yLxKWJECTv5kjFBZik9YZAgmYnTF9apd5ZrZRZCE24GCNCrDCBhCC6B1nobSh8t8mmfYaxwVXu7cm3tX",
  "key19": "5YwKS5fn5W4gj8rRXYL1zyKrUFicGjtH84P6Ey1sM2oydTcqreFtFCLkWDALJYL9adHF2ivp8XC8YKBMN174ZygK",
  "key20": "3A3v6tqfnCLvCQTegKeywVHgpz7SBa8aREqvEsoMsXVwP92GEzHd1tjA4xaiXoSGdnjxnK2TZFjznV1zwDcWg46P",
  "key21": "25ALAFrV4KW1W28KmECHTFGPMwXb1ckezCrW6NAFEw3uvymTt3E1LszSKyDKAixcjSBHeacxXEvkGLLd6Xo8EBbH",
  "key22": "66SmYx3jSyKJyjcFSLZt4WJK9iNbFeLtsQhuknQE4ibWB8S2hS4dhaHGyon2uM7jUm2qCGghgRWwwpVzx9yVNKiV",
  "key23": "35V8pRqhLEDg3dTVyw2YTF5TBHvXvoJbhY7sUGknFQNCqQyBZKmdbvrPDAFjNcGqbTcHvEhuAGFxtmCkD2AVj5ri",
  "key24": "3kMxsZR1ACbLEBCY21L1ACZanKfzuWtno56VYE4DG12Btz9CP2p1FpJGZgWxGtftddXKD2KXzUfaF8XjGW7pB19M",
  "key25": "5oXSJCM3Q4X6nxboi2u1PHti9otTNFRAtvnUyGyKkBPR4tKhQSYNMCvrMxugC6LkRWpHRrzaLWHGfeTdmxugRWzo",
  "key26": "2CSPSCZnbGeMa742VwsCiJzcRduXTpFoGgoBAYnBbjFKxdB4WN5erdEx1FTz8b1sP9QKFFmDp3VXfZQ2BBGzXfWB",
  "key27": "n4DCKVTMP61fjSaeSHU7ahKYorzTw99JU1k9K1iut82cXndNqNBTaW54KYt1zhXccpYMhuRGgxxmUVtZGPkbHZL",
  "key28": "5S32T5YAUEgvW2wejTp28F8ssBp5MRYuWRd78BempTrh4Mrgk95bYtxdWZPpjkY82QhsH7hcfWcVYtWmFzkC8VAo",
  "key29": "pavGpx35YGkuTeCmZ49mTvvpxf7Ef4CEzkZDRWWVcJPP8bedNSnjn2XiY5enm8kBY5pVPxdW9e7CcmHJqietYca",
  "key30": "2WYg7komiADGSzEPoavYP6veXYATc6KhisXvtboKe4k675gVyj5uax7qZXt2zKQm6UPm4rtNwmr9xhqudHYFUTQW"
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
