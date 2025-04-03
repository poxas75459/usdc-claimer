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
    "DW1wunb5NPJgcY9KiXgTGhiQWVuTJ827K5cihZS35udyFkUh8nAc52h8yqSMq7xBYWpbHaFRtzMoQnJKTKS9hR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "394bUGvFdaTUXLN97tJb2aRtTY13aJsbCPLbC8uqbyVWCUY4SKtZSw6ge53Y9SDDMGuxcaXXE65EfiFCEsdLaRgs",
  "key1": "5zwnEYXEosCF1HLEx8cCnws5p5Lq1CAn7D1Sy4ZTCkeawerTKuM6d7tQkCLHDB7VNqa8ruuYCQcDibtpjHsKnka3",
  "key2": "2GJP4yAxsT6Av9KfKe2HcycNrBEbJSSDHS7VxkCZPjUfRN81ndMC9ATA5SKPw6uGAHp4rcRn2AExGp2SJuDwgWvG",
  "key3": "23f8H9u31LvD1eD8gktA5Bd7Wt6jAKxii1vajcmW9Ck17s6QxyqmQsZsuiuWMZ7jKPNC1VbfQdrwKrroaMvx3MAb",
  "key4": "LuRxbxGBGBFAFUYokUJpwcQAfvwUgHCxBVjhKSuhRS9vSuWtsbPSmtprmvi6Ry437BND7Lzc8Rq8xiiR89A1Txn",
  "key5": "5Ak5nKc2NnVvbXFm9xGhWDXiYdm8FwaM62SRTBYGWhvTAxvBsjWwjX5w6WtpxbEekd7T4hKrRXYvoRVqjCepyzRd",
  "key6": "5CXykwWSDVtrmn9EqjwUPwgHSsDM7Trt1mz9ywzB8rpYH4aRKSsjymUxczFiA9Q5ZFuuXnsk8yZDkvvKYaZN9t5H",
  "key7": "3vFAXvcy5rrwpcxP73bbVugVZSBCK31CLLyUrkevfZKTMbfYiTRAtzRAUjvxXHtcjD5KwDR2JSPbBYC3fYRqq6z2",
  "key8": "ENKujjZUpMjbAHH9bUpkR5omqjbDnqaq5uTqCCH751JZup9NpQZ1oXPXFMaxdbfBKYkACiRn6riKEL8QaHdQ55t",
  "key9": "xQzzXhzMzmatdhgnveqx6qKNV9CteEe3FUKt3SnBqh8f5ymDvzFW4ivbgFcJtgsEMyytSJYwCwhayktjUwvD2jE",
  "key10": "2CuhBR7n3V6Y5ZttML1FfXxpxcFQRDCAS3p3AMkULZ64SjWbnam7DZkjyM9y5EPfSSRbhBadLKuLxNZ4espKnjCW",
  "key11": "64vDCeebdCF2RqBMJx2QbAe4nrW4RTApH1xxVECpJCL5uo94zoWtA6od1mvUHAZUV19hEsBqroaFexuPVeStCJph",
  "key12": "3w7ZjJe55BFbnTRQj438fJB1oYpkFZ8gsEZANwk41irCig8MW5BjNJk5PjeuwdmKA8qeXuPZcbS8NKNvAtFwa8nU",
  "key13": "56KXZoVMh8DtujTyRypTiNsgDNLJMgvZbiNC3xmskV2cLQxiD3QpK35MnnRFujGzrieDXyaMYeeTNTFDcFZPXkYy",
  "key14": "5SKjaGUU9rWroAVBT2FVsgH8eLgEumFGEvAtRH1RWcQAdpQHXrT5VrwTJU2zGkwiF4Ef3248e2EDBsrBfKj1A33M",
  "key15": "eiHRGdHPR9jUanbSxskvbVbMYgm5NtUE84PZgQABb3eiSs37SpqVr2QRtKoksGeyADhe5ed3zzmSypvoFctjv1t",
  "key16": "51rK7fZBw3Rw1mvdbM3wGpqPWSQaS8cqSp6an4pFCaX2xNzfy5eCPyYnCZazbqqXaGm9Lzegz4io7KK9fayRa2Z",
  "key17": "5Fdh7JyBnNWUNKkhRfPYAB2qSBntC18o4nKo6PttdE7zohAxmKbj62mKS3CCHehJNaK1VoNX6BweCzkWjs2CfU8A",
  "key18": "gnKmyCk9XNYojbDRR71XuRocfz2aXXrJhPjow6pmHcp7nVt9XVw6NQioCRbd4LahaDa9TnjRDGhJ3nr1dgdL7GC",
  "key19": "2sZ9usY5CRSV1Hfx37xvJ1mzBX99rZN78LQhUTpXUoUYpXW1wQGRWgdrixaJQhxz9aAbQqeyHgnUmEFMZnkzdZcU",
  "key20": "LR2fXL3LtZdbHSpDpEbsRgedm5L3FHCbiQywQ5xyqTReKc32JagerCYYm44cwtcTw7svUYamsVyGHR7rESjgh5T",
  "key21": "66Q3fBYPEpyQmFWbYWY1WL5vWYRREjd6NvJAagDWzuNdsqJPK3VpsKs2TpwhJtxvjN5KmtKFNohZfAhzUPGvqNHb",
  "key22": "59ZKZGKadnxuzyAkTg4dZaFtMW6vboytdwALJ15mGeQVxMEBgfk5t3HZPw3KFoH18FfFKLx2BmmUsYWynxQ5AS4z",
  "key23": "27qUmGWC7CvWhUkGCfWPvxzQiVrGjHFfqdkuZSr7LL1ndNvYUcxyGA7WuBoBjgSx7XN1wTMgb5914NczK83LRJuB",
  "key24": "4Ekv1LQzv32pMBgEAYy7dR5iAjYEWLXeHJJiS9LEGXKc6p6Z1U7mw8N45YsBNYse5QJ11EXzs1YiTkrqiTmWBe6w",
  "key25": "4wqB4JVZEpphuuNqfXFXjdaYiyKRKNEvqPakrSXnBYf8d2wAmr34fyuF7DnGxHQwcqxtu5eeJJEMsYr8TPrZPzLL",
  "key26": "34vA4tZjDs19XKyLEwMhqFL8uUnbaNMstRvzA9p6p4F7fPS8fQ9podQpNG21S64Rryv2HfM3bW7mVUByeLy89ufP",
  "key27": "2whEZx71yFu511LL1VbQefBeEiAxFa7sDVh2DwpPSvSBbJa1ob9JPVACBdCudu882GiJXvS8hZgNeSj6RN5M8tte",
  "key28": "4yVahvK5ftNz7EknxMBcinhrWjyu6sjBNDNQtSEoTGrYxwMSRLUPqDREhbBkZUEZutUKBKWmpGQfsUXK9UE6fVev",
  "key29": "BNMJg83wicwg4TMoTuVoc9E5FzR7xQGQmkwayeqSoM54pXYKRoKwcb8aDbHVddv6qGaygGLnWbDjuVY4uKWoz8x",
  "key30": "dRe9nPDwHxqTJD9tD6fU8KJpzANycjxkEtg8sW3nek8Na5tgQPw1Dvtm78ZSXtzXCwzRZjihpnnAuSNaYbLVwiP",
  "key31": "3yVH63dtNgiqBX6NPYpKWSVTEGAxBVyarMxax1mANMi9oE9DFsCWdJCmaU2K99kQ7tPDdZ8VKsYShd1Cbgj6GABi",
  "key32": "Z6kjaWyqEDApNPoJze13yxwjjJyU1m4g8EJ3Eh1mmxsUAQNrnVE1CofZurvXGCxSQBZReoD3tQQFScdJyfdf9Kv",
  "key33": "27638twJ8Wmz8Wez6xJa4NCRwzuYqJC1pNYyNiZdLG2J41orT3DEM2ig2A1RmnEPnTu9LUSo4D47VxNEhMoQ8KFd",
  "key34": "5MFcQahJYRnAqjwYygbgRws3PqdLpYGUszsX5daitJQzHxyGAuufYog3dc2rSpvWwodfCcueW5MZy8LGheYEodo2",
  "key35": "q6FksYepSaKcz5spZ86DdAX8UJUecLVcXviR37mAq1L48HCyWWef3L35ZTTdxfWSfyKuJ5GPSmEEeuymYd1uvqq",
  "key36": "3MViZoA1m3ikgSVR3zaVs7SqWAha7TWrSBZs7VpVVKdheyeBfqZo6zkrCoxgSfHXncRoU8thtLteEQ7t5ejeYreU",
  "key37": "5XQ8Q5YBmPTeMcikeKt6FQP9mGzW2NmGunjgvndzqLHoRxrvfUkyRdMNKcWdPJEcg22S7LHKjaUFFPKvcerZ4qs9",
  "key38": "22hcBaTBV3HYxE7LDJ5F4vttYwqDZqWNtjc3NuFchR6XZ1MhUDCw6U8eDRfwJo1DQUexJ6HXsRC1S7tC8FcVpYM1",
  "key39": "4iQM4qQRAS6gQUn1zYaJiAYixcehjfQggct1Yr3HW18nPBiiaHDuxNtuDmeFXGpWaQjqNUBjqggcEo9wg3TUjbif",
  "key40": "4P2g7STXJnnXDp5vPPt2eujdT5AgojAYs95MAeQYNZsUwzaBLWRJ3XUHfNTduWP28Ud8qE3MtgH42Em2yDBxGdbR",
  "key41": "5M5eA8mdxJZMPDNn5sjPbf42j7aACSDHTYBa8fTdeJuKP4dk7ZRe8qCRBgphNdw7tWGqRdsVwE3zcvHnVEGoJAfy",
  "key42": "36ujGYk5yNuDaqcnYWHBFq4GcYBLkETMogsxaFADaepRVVVmXZ3wyFNfNtgvpYRDhXXU5HVUaomQj6b1SvsUYPSB",
  "key43": "2Bjy2bXKEhZuNbxQ9QMVcJhbVjGn1UR9kDNPjk3CASaSAP9paXo71ysg89ZpoPVyzv5V2WEjnPYbEx6neRntTYVp"
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
