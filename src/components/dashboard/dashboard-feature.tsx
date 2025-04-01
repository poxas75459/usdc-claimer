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
    "gA7yUHnY8BLuLP7Z6afoFePLKYNqY3dFS4KMk1Mnj9iHCPgZ6uQdpF1eJhFfKhHTAFUdfi1pAbkQizcFK3ndfdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25xPzjCCuYQ6uZdntQk2vXTWzGRzRQJPUBQ4r7R7PbqBNxUpBw4eCMgaRe9xmwBeB2eC1kyXp32Ps6VhkTPbvtk2",
  "key1": "wUp8QjmzTZ1Rpy4JNLgM4rhPTAp8qkxQcTUakX6D6pC8javKpBfHXPRsPFbnksFu1RB7N1LY424UonBMkafnVbL",
  "key2": "5LPR73HDY7xYTckDFwmbRXfJr39vBYKZGqDjopV7Qp5rB2A1TntSFGsU6gj51poMkkdbkSkRwtuVjSgKAnbwj1P2",
  "key3": "3VPHeZn4xu4YLb3mRF49U2QPmq4ePdn97YBaRwA5oFHAvcRkuPf7R9TKW9MeAZAgk671ADNWFmPpSEz6tMkpmVUR",
  "key4": "25K2CnatXRArgeHyj6CWomaCLFuhSBHgknVVA7hQJfvD2QXAaLENkqvDdud79vTQsbN2MRQ4asU44dXooQsj4kUe",
  "key5": "HDyfBWmtRRanpfkfPJcHTkbikWgYbdfJkvrNRDrjWxG1CQWBmVxYadhcK7bYvdBqVNxkKNDmXcbFjAadVudhLPs",
  "key6": "s3ioMurJRBjoWcQAwe56WxTvjxmFRP9nxtKpKrsEfSg92mzMez7pxFpNGUrWuNDFSMYATn22Ezuz4YSb2eXDcKa",
  "key7": "23admasQrFcycHAZkx3o1XJ7ccA8KgwD6jCsK4hbPUedgrWrohXCR6nZAxeB6Jaia1graY9c1omVbg2zMiKK6d2V",
  "key8": "3NiUypi7d6ngn71vaE52ey4AxbYYRwRdi7KbNhNTGWYMHGfiHoNWdz1LpoHahsTvXB7wXSvy8yGEE1V5Yaqjt23Q",
  "key9": "25Bdy8hU9CPv4yyevvwc1j762CFJ1AD91p1BjFU4aft6VePCZSEs2bGYLLbqZYNgfvRPyKwrm7LC8ozjRQR6MCGp",
  "key10": "5x2Jya6AtY3woBvJ57VSdQzsawWG9rRPQhQZ7iBTysahh3qS5WDj5mCdmkQdBCuk53rBuBtWThtL9iqNNbkyZBti",
  "key11": "2ot6MhnrZMV2k9BFtrYZjGVNA4HqB4K1NMirCH624R27KkjrV6yJHrXCBBCq9b3A3mRr7hrWcAP4WZSmprFgy1Zf",
  "key12": "42snYMkVf5EC5BQN3j2QnmTYXcWbCWZC7AyhuX9m1ohnH5rb6SfkwLrPZ3aHQLwn8fjZ84EChcH9Nc2kUWxHcFxz",
  "key13": "4UY2QUyZUbnfNoRYKzeCeWvs8roYtaQZsCmTLwdXa3zWWdT8yFMugMHVvCA7Ato1K97fWdTTkpJKsnonGCvRjiCJ",
  "key14": "Wr1AUhrv1KaS5HZiiY3PEDkiYtHXGf9gVWpWrB9hXCHaWQNk65BpBBt9wYkExNyodec1uGanGUnHaokyFoFvZ16",
  "key15": "5LgEFjJfU7UpJqE6AVin81PaQZssaswGHKTitDrg2DTpc1RXAqi6RatGuMb8FGqAR75kX4gr75Y5vy9eM1dfpBmr",
  "key16": "41Sn2PJxdePBMjrTCRZFKsMFXe3tgdFhd24xYFBhAEXSwEVmrK42BiFN4KNawTnM1W84R2LEnAexp2HzwXT8DGna",
  "key17": "4oyeRvbRUXXznoGuhDXVSe61Efzv72aeesZJJWdejbMxq9HcLbG4X3F2qG37jfVyD6NFdv8zroa1ELcruwtZdo5n",
  "key18": "4qq3CZTsT2fHEQweaxg1n1sMp3V5KMyMz5saAkLhH7LFFReqZ9mPR4EhpseV6yeYcNV3Se9BiWVxa2Bass2hUv4c",
  "key19": "6ePdtzpAbqU5mrMEwNF5qLjAUzjt94ZKDePW9KtZc8nwucGa7iJpNTVY4539ENXhoMti1UuYzgFicAL69aSHULe",
  "key20": "2o8tYErKYEpqXib3f4u2d3TpxHWy9GGoC7aedLAvZBhYp6AAA9syC1jbufkyBkGu1iYSdp7tVYEMvkzLxYiY5nVC",
  "key21": "5E9Lu2nxYJTjknKwtYapGDnQjNYVYQr53fjvecMbBimuEge2LHYpAcT8YDbvUJ2XVaQb66gPFGuYNtjUt15BPHF9",
  "key22": "3uTBuH7uTLFvXTVxg9Ck48vVLLJVV4AGAqsb52DTFHM7MEBVBz8yV1fDetGVBXrLKyLtNngiU1C82TubdZJw2jx2",
  "key23": "2k339n6o4wwJQ46wiM3R6nFqKAcpchNzEw4Koyy5nFd2KTA2z9e2Y88NTARwwFSNMt8dSsCQbrKZ6QQWzTYQiceX",
  "key24": "qmgcn9m3oJXHaGRJaa2EzwL1S48EpHJu1KGti8q8NCbyP5fy8joPYtMggfztX6yW6K4WjHHDKM173v6sJyKaR82",
  "key25": "NSW6DurZxQ1vkuDxAxrkgjDBF4duRqpEh9aRrtGDhXpv5PfxUq4vcN7ZgVMtE7qsXrUFsaM5vn3irxVTbErM3Lb",
  "key26": "58AchePT6R9uxesGPyC5kwnecRYYC1VvG7ffwVmbPYghp91Gqtq5hzL2zttCEYJpRhvcke1KNxq7oRw5LFnuzsGg",
  "key27": "53xKaPQLbkaLVuvMCvp8wMjrAy7wMtTdAwScybKPQb6jp1xJomoUoQbzn4cLem7WtMLg8cxvjfreGS1QGdhvXZBy",
  "key28": "28UzuPTwnEfBe3mWcfBnqeApDrNhAGLf56TUy82f5QZEwRkrCyrcem2QnVRhyqoMRqRp8ebgcoHNkJm6HWjE94y3",
  "key29": "3Erzy5V7MHqhLqYiv7j9TSFRz2tJDSgr2D328jUUrrBV5VeJZnyi1mWMrZQ4KHuyCCp3eM9hbcaT2vz635yDDyXV",
  "key30": "5ZSeTGT2PKqJf6Qq5eHfTZwZjZJnMnZhDUBVa8eGTrChLRMRWFq8F1CwTWmXNLortvfoCK4sZ8eWM87bvM6vzVKa",
  "key31": "4JWDR4iYSQS4Epq5jJPqyFSkH3KAKb6REYb7aKWez9pzTedyofUNZoXKcidqeTjToKaDueJ9F22ao87B5oJoYqZw",
  "key32": "218Jb2cD5NXXkV4ybkPQfSmzgCkrQcYfCCE19tp7S4oHi6qG4oxkDco2yN2tPYefvxvDzoPbqx4dJLgR2iDtWhZ3",
  "key33": "5p1uDEWHQndMnvopceL4CBbA92EEStfZX7Z5JfbTsUAVmsnJ3qXN9uC1EtedSLYr6YoJH9KCqM2ruojraYdbxNpq",
  "key34": "59svcdzwcKtrPyFoyQPXqd3jEvRaS5R5EhDhQutStm97qndNNCpczkz6VFrGqCT9BwmJDrkqK999KfZJTcFFMedS",
  "key35": "46W5baQk9NCWiEr8AfVG4wLuSQqpY8tdYhgNRVnrcEcakCuBWLJDgNYxHQZg7Qxn5N9xGG6FhDd35z3MdrFrJado",
  "key36": "CRwLHnVeqoFHyve8vqcsqmc3267Pcn7qZGCTcTWWVF81uSy53gydcChRUeGHT3Ye95aRQun8Z3ccScJLVL5Wcru",
  "key37": "3CNrrHc392Uf2B2sTrWuGS44jRvRFZYRJCxXF8EN1MVessNBryZyDubBPRzmENhfp6bdNouAkVks6o7PVKidhH5T",
  "key38": "58FDF4rcpLwUt27GcPu3UXreuZaERjuJG3G5iS1Lu32qqapVoyYc5eWRtcx9BqCaXV3Kgs8ofc6SDP1bTW8ieXry",
  "key39": "3H73iszJdx2swnFoznx38QHFQvJCG6GicFJRnQNfSxjjS9U8tbNTkjM24KWqE1MJakaQDhuMe54hKWbg674mpH3H",
  "key40": "tuzztkLttA657UcXvbwjSmBM1BWk21GV9q2uAroa9tSGRQVFLbffG4dKCVZXyP37qJ4nPxX4d6a6sgthFcr82Mz",
  "key41": "NLiJPwVyYKKvaK9ztVJ3wzDuGrmxs75eGnCj6PLXud7EqX69E6XV5VtAoyP4hpiqNbYs73EhecED4dUuiamyDBy",
  "key42": "3Nrgv3UwNughYydT34VDcj5PdnYLAAVmxPyBDjJSpLv95MCaBG2ukPmBhdPwDtSW8GAYY7YoazunWL2E1GKqdP1G",
  "key43": "5i2FJbQwKAKTHqi5W1PLH1BEhpytXfGCm5FZBiPMqKn8EDUETf6q5dENWLkw3CDSSyFcHbWnVcr21tDydDmVn8fA",
  "key44": "5UjXRtiV5e91AgxBiTmoCi9UCpcSFeypea1eg1hSfMRCKiCBnPWzmZ9N96BVmyQ5p1qgi9sMQZ7qwqeKHFVriYei",
  "key45": "5BU98o7jt9PVgZAUnRKfTYL8yCWZwGcBpsG8WvfAEnzGykTE9zTvkfeGU2if52cHk5S7cqJt6wbXjRoTMMJCfTQe"
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
