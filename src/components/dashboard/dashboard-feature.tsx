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
    "5CS4HpwHdBiKYKrrETEoMhicLwfCgohJcsfo663bCYdiyvkHZDH2aQjcvW5BJ7mWBdxLUzbTycMZgGfEYTaPQWEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pd76oUukUNMczYemxodwFQsDMdm4XLiRsFabFpts5Jqv5K6SMqNMGE81dNHcybSSDeREFQ8uMtsNaSZPCqs3qKj",
  "key1": "EmyZg7ErJ3z9yHQxKuYLEHdFdV2yNN7J4QaMq5nzVzgDJLzXjqZezC8GXFsPAH352ZNhogouZESAzPXteGeUaNH",
  "key2": "3jKN3h4fPdcdmeYJNH1fJLwsffwBvcCBYnuMUAnqpfVayLE6xW1bnDMHknmBg4JjrLdJNp7jF1XJxGh1ubAkK6Sc",
  "key3": "ZoWo2UErGg2xKRtAbtWagWcVjKu9s94zQGPqpJHEjkT8XokKF6dRLBeEVADwNFRzzwm6Jjn2He2YPLCezKq18G2",
  "key4": "21KTUh4zkEW8eoAMFGSAYWQCjotJrbpn1qau41zAFAP1xRBrc37kmc1iZDQwmQDCC67y9zzNk3tAuFc5a37iDFZX",
  "key5": "5PbPRZh2JWyFeYqgGbHNwCvcb2t2trfG58B1E8DM3Z7csu4TZoxAq1WgW412yRgoYqc3FxkWYBnMuKeBy9msH6tu",
  "key6": "29xJxh8UUZztNTd2i15FuyNKDtxCzWjUnxknieqQ3DaZ7yELamT4fQbAjh9oegwX7qvbp7rC8YaMxGQw6UJ4LUQD",
  "key7": "rHQ8Cvy8E9ZmYmLB3fk6WwTT3VFEBuCHBWBWqE15fMdib28GueNnCLprk7JihraKghNAWSmr4z3jx5ZUPkgnHir",
  "key8": "uXjCZQGF283xBvPhMfnj3aN1yTMXnLnbaygnnb2ktWpNLQ33sDDKJMSLs84FbDwiQveg5iduNvD2RzAsLAfy8zB",
  "key9": "2fSk9sdtk3SAu5b1QPmt8PHEjEzXa5kAoW6yUaeYHXr3JiknKDkgXGjnw97VsfH7XjPXvLrpSUWxK2ToBsjfKTYi",
  "key10": "2LdMNibjK6z1YRGkoHNYKaVUZnp5PQXNAtxPTCp69EJ4W1udZv83sSWmmXXmraEzyYaeHGipb4WGqJg3YR5Ftw7p",
  "key11": "5LnLgL3nBDLHiCFgyBXH5Gtrr6UAsv52EeJBQTqHHQ7FnkyHVbEhZxTqFFQrt5swPpy7rEgCcAk2sxgTPgmL9EHa",
  "key12": "osK7p3sFtpQm8zhhUgL28QcFwnFWdwxQv7b1xCd75a5fsHmm8aXVjUcuiDU75ezEkz7Ax5KT1fKhNATioJsABkM",
  "key13": "5itips2xSigNQLT3einNb5qoc9S2GNnMbtb4patbVWpCVy6uwCmiGVMHVX6NLs2gJf56rjVzFf4wpmHSQvneFZF5",
  "key14": "zGVs6AA8iRv4EfWhuHqtBwhP1XCMVQ4PGaf96Fqx6f3hR1nTJryUmHvWruwzcj3a6QTK9rYdDmAQqEgtLjrrDKT",
  "key15": "4J8nDBceBwjECke9QpFKVhbKAWX9hRDBAKmKT61niFCufcGSLYxgsREfxNNkg2W95giTGkKS1AhLZyuo7pV1f47J",
  "key16": "5gD7DhHzTgh6rwC3RBcxvQ5FqFio29tttfj512m2m6VfTKGrSAjfHeJc2oiMtSx52PiHnGNX2ygCdFpSvkyqauNb",
  "key17": "4F2apnFyoLnnwuvTsXXsNTDpgBvwSj66qXBMqw6kf47m4kD1fozHFKUy2RtT37fq3ZnoBBnBTx37x4sL8M916JYH",
  "key18": "5w2H8MG5Lv3oMqXhKuuyWfrb5bK5bGV82yQgKK6hD5AeGMwKZmQb9ukGsJD889K8EuJ1pixrFmwtJUevEqVELPKj",
  "key19": "51xetq1AMm4g1FbUzj43w4Qt1ZrJhWzYLjrdUc8i3EdJ8jtMgMzHZWALPzhXY8mexFnzsPoRYaU9GegeY6VJ1sve",
  "key20": "3BqsQfy3Ghuf7eumqs62gwiBCjskPVgmmwepWTGcc2T3dJz4r1RfUd77GvNrM5PHwvka7KqAdZT68NX1FQu55zD4",
  "key21": "4ewfR6x8DDc7wa4B6EhHSdMtaKVg7Mdm1si7VZTfg3T1dBfHj6Rf1u4b16SUyzJi9doZdpHQbFka4jBVi4eyWQWm",
  "key22": "AW3bZ6CPFLw6zvDcNdsEVqcG639H1B3gAFkVBGorUT4Vzt6iZvVTcbVGf2LrMqRTdWsfa3hu841eLRTTv1HNQ3o",
  "key23": "4rSKAh9pkELDH29ey5PWW8Ejh7chWjCvD9gAeNGQy5FEjUV9C8oahtWQAPMbrp8xyxYWsECW7ZBTRys4MhnR1S8X",
  "key24": "5hBxciYQjXTZiMR931P2Veo7LuVNUHBQV1W3gvTppn1u6txhUdhK4rbjAfkBm6gbSNMaYdX3DGJ93FjBsQ24kiPr",
  "key25": "2bMvB9NGm7ZRiFcsuzYgPEmTo5y5qq3G1P3xuDZm811gXbGr3UcqJhNA8x7VarymJ1DifUibRhbhmDzibL6gCbfg",
  "key26": "5DCJAPsekjiN7jQaE8qDk1rwHSKkz3tvKJdB8kBXFT98n8xiTS1sDMWPAUFxajMfmn6UNFE67sqrG6v63dsCLTkU",
  "key27": "BqaBTt4Ao7A4uKWyohR45u7coZPKb8tCavLc1JVFhCnqfbnM6yZedfKacBXBZAo3pwmqSUCRQNGoXS7Cj5oXSqc",
  "key28": "5z7S6UiG9dP9cRzmNem9pJVEKNjQ9LVun4WSvr7qgFgJuxVTq2i39ZoKJDJLVz8S2YgcSMeoNPaaEadCsSpHGR6q",
  "key29": "4fojLMGvuWsteDNo8apNXZUyc1oV1cjTsVtqkyetAHWpPr5qcZBpPizuRRHoNG5437hsWmmzixtrEnK1gtnX9xQ3",
  "key30": "2a46JFZqmKKBac9F5Ba6DyKBHDsc7VK6WCo3uPkRQsG7avGgmShZtDYmGBfFhqznCKkUzUPA9QNEkA8E56nhKdEb",
  "key31": "5omBSaBURfKa85eLHfK73vJeBvutxj4Hv7uFKY2kEbMyojpo6spksz8UfuecPKP1JmXuL5VvNBnGq3yYjh839Ri3",
  "key32": "4ui4X7WxdZxaFUimtSPDeWopT9heHSrv97jTC7apmoaqKeikhbJEsvAXoiGgXK4cNxceZ5xENfMJNbseJ8enEvw7",
  "key33": "2krvqSqofkAfkENLbbtYgnPD81qpEQLwGgtbuecoWvJ8T7KHhHu9FmDEqmAbrv4LK6NvzNsMgALz7jsthBWATGYU",
  "key34": "58x1CSMd96hsnPzou6w9XFnUEGmRd7TthxjyLUWMJPv8qDYWQc7Q4dRF4xESMUHPYSmvXjToppQEQYB5pKKYjkP2",
  "key35": "4sEpRiHYrvbw2DYTgWz2xVP8fXBDH9qh3FANNqRZquoCCyiiBjYJ7ACUmH9mFAgsZ7fxH7TXt9CseNUemTVq181c",
  "key36": "4PwwZimkn3MRrJQUYcaxaNbU6sdrSu3KjNXuBPkXeSoDsFLe829NxbKe9cE4EiJrrbDt395u2gnPhF1da1Ei3Pwd",
  "key37": "hfbf2KNMGqtko6RPRFPRTCgG6W99W9Jfbbmh2Fc2bfsYWnEoVjQzFi1WayhnsxHfsc8KQSbxrSiA5aA6MVRA6sr",
  "key38": "5239kWMqdHCKJQ6mbbMZaDf8tRfjcY4qAa3XsSGyLG6vDrHz1yupP7FbMSY69gRpFex77GqREAWY9khd1wVsaKEq",
  "key39": "qsZENRErGyCsRYC8NgwN1mdwJV8gjSGKeARQwg4zAQySQMGsEX2gJD3a467ntMznQB2N8yZJCQYfCPxp8YAbB3G",
  "key40": "3EiuL89ijJYwiGkU8EuhkF72U9QrU1XnHKmvEuNSwq75AuB7gmvgpCiscMpA4Be8hjdkR4gmVco21kbHkB1EV7nw",
  "key41": "2uzPoGFJn1wVCPyjVf6yA7nZ77vRp3yB46ZdMeBtvz7ewEne1j5TGJe1fok5nrAZQjA9JHfKreLijhmvaFypQg4m",
  "key42": "5wGeTuDj8FJn1VyfV4BFQbn7eVnVUvzAVyMnyoTrqaonPxs814v7cY9duz7X8sEdtJwqaBFmMcbdtpwsnWf4RkFg",
  "key43": "4MXU3jouZTBMuiBJYswjpe9CYDAe1AQi1o9CQus6HyDReHDAHxyJtNFhPv3CVcC987iCtZXw6LUCnznCe3iu7Dq8",
  "key44": "5nWHoDgnvtkTZkQP9d9pUDFyhHtzpPJoJszyS8cgKjVDobB3L1AhjorDWVsqKa2ARiJW98zA2V4twUm9XioZCG4",
  "key45": "qBY55o6yZfHTDumWzeMSVfN4e38gpgPWvfmkBQTPMhtiJJQorSr918YnwUCdQuefqqZrQB4vU6FxkFS8mr2cuh3",
  "key46": "46D73wVJy77DfvYtcHxicGvZVv6Zk8sViiNkGH4GqDgVSpaczpTb5whjAUp1RLZSJgS7agtrGVTvs6pfA4EN6ZhN",
  "key47": "e67Fsyzh7F9Xyxe2AXt6FAPn9kbXCtg566UArk2Vz6huJxbdWCn9Qpr1S66QPcDAKUgz57xxP5YE8pjVZvum5bE",
  "key48": "4KAssZJ4JC5kgFu7gCXuXkMMKBdLjNPWFcwNRapvDzqHqZGRsprgut58VJJDjakm4d51q21nNc2SkwB1NbJbKULu"
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
