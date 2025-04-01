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
    "UW5DFGDzvL2Jjeqp564PtNKBtWdgBARpnFtU9JeSSKS82RL94rm7tmupPJK8Zs4UuA71jP3SVrQG9K1t52ic4XF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qoc4fpRd7NLQhsQ55hKBdS54vGUW1Y8neQ22bFoU9wLKwTMS6uLo9SB6au8GVCpyi9B1azMKQf6ozeeukXakNbC",
  "key1": "3ZGLcBHXDACy9P7mP8wkLHm1S7wGK8dM1VboehoN5VFwUNVgbRW391mvCqD2orYE6ZKWG9x81VcmQKQ5dV1xsTAU",
  "key2": "5soZ5yj1TofzrZHuDfzghbArKJTG5uVNtT8wUVCEqxHjFuZdFzCoMy8PRj7QMiF8rAoMtFAyfkdAeDLpisMvVYu2",
  "key3": "4GiFdRqnQgnBXE57o4AWMi4MgUrzxY2Mbu2iWCZ5A5BzZdXT65K2urawpTZogYggaDFZyV4TnbrLEagfrmvbeihR",
  "key4": "suQbLDGbgK8JXKKhejUmKiTtbC86AH1v6KkwzcFeUxmnrErCNg5yYwmL2nJCDA642r7D8CLCAoEacVuAqqg2YjT",
  "key5": "PJcfWqUu5mEcz4RpYL9cXGVjEw4ZXBNa6FiscYuU6LDTSTtoAgwf8QrfHUXqVn7nkTQ3pKLXc5ac6kf8eNNKb3J",
  "key6": "2H8VqEMFQ4KPt8QKa3KpUiECNyUjH15uiwx7ZBGAR5XJjEq1Gm1ac7xuVyJoQ66FBWQj2SB7C8ae582jQiYDfi5h",
  "key7": "41hBi8MztppHaF1QXUaogbcWT6Fjg5Dv6zz81tRR3MZbz9FQSpaiKNHnUnBdCfUUcZNHFpJFE223GgFs9KT4MCyM",
  "key8": "21byF8sXfAYCYjQfHRboXg9yPyb7UdWhePq9hWk2Wy7jv6uQHf9MxZp6Z1uhBZy4SE2sVcPv31yDWEgbSHr3mLf1",
  "key9": "5kQePtUfqWUXT2KpHLBk1yjfDRrit227m2Ahak9itiZMdm1wn299HNPj7QbEpPwvccgoMMWCGodea1jyoSE3DX4Y",
  "key10": "N6Q6cDhMbNBu94QWNVLG5AA8fmFq8wLFxjoTzAWA3r8ERVivqaXB2XtZC5NQaNUdD2cypP1tqYau8W9fZV96TNJ",
  "key11": "3WkHfQjttFWZ8boXPYkEzpdiAeaBq4ZognWAsF1MNawffV4okQty9CVX8nMo2xhbd8NhvkYjXS59bFHmEoCKu3E",
  "key12": "5fRF9JUcfbpoKNz33uumUY5w1TdPnAFj4GtG8wXEo9eYtEV5QBAaUexvJDpb44dndMdP3U9EYkAyzYQKovGjHsMX",
  "key13": "3mUaDKNgnVvkq8c4Ju7vgbp5VPbttrKXNxEcdRzjuzwffi4tvdVoGSuyyF9r4hp5SN3pQCbvaEatY5GMb9rUMRAj",
  "key14": "3QHEAP5K7vgHebkwrhRq1LckxEGL4j1EjrFnuBHTLkrx8iusrHqmZNy8sakVmjS9XyFKSq2q1rysAjd69VS2wtow",
  "key15": "51wy6XSWnP2hMJy7h4GEvUUN2WYHSrh9ZcyqQ3voBgM5d56L9LoTdXZGKmd5Zu24bXAULZYHijtYBjARCFPG7VBf",
  "key16": "4vaH42P1BJbuawf55yuun3kXy7cjFAe2Kd1zp7GB33QXED2rbc2oL4scQciqmtBPkg1iC3ggkc7t1TdtDVAAFFhK",
  "key17": "3TTd36FCWeUJu94VQcdCvy5mNp77Bv5YQSFiDPN82T6sAJ8XpKvmvbhfGu9A5TLGfKcTkfxUBiTrhL3BDFx5hSaP",
  "key18": "5rMnmjNc72xipRpwGMG7RaTSPLqV8zfVWiivinejAgQcit1HuYJytnT7nGsymapYczCqbrrfU9bbS2MCRroxsWq7",
  "key19": "3URRwS6iSab9xSnJi2i65xxBSxBzgX3qsAWHUAbEL5QHdLgncn1zDwBzRgYFnWferqSf4ZScKGeVsr57eibbgop2",
  "key20": "4XhGKTPqt7ww4RFRDxrfwXg16AzGChqQPX87SfBbxEfDFHifsRMPQjQHqAYHpEKg3e6BzXUXoXp7G5D1oR8nxNU5",
  "key21": "3DKu3S9Uu3YVtRFXvkArT77MUJgLAqvGfiDkgGuzr8H6ksqnHmr9sDQkDAHZoEpS71KDRcsmM81J4CAw713Pg9ov",
  "key22": "34rzHs4ZBKMVNJyTkQkzG74r6MotrMzKyL17De8XPjQKJnqVyYeEFpBfpkdJgBKSLc8WWaTFrDZT9eqs1fEGBaq1",
  "key23": "5we6vMrgvdGVTrybGfxPpygX45bXpCanRsdmSJW74vGNCnAxn4yXozSKun3pdkaNRk4UQPTjqRD8dRveYUSBU13d",
  "key24": "4ErXRsPcEGtWSQv85WcF3vCBk5w1XryrhyuBCNvUhFE4AjixXHoj95TKuLSUVkHYXYYGRs7hknSrqxEyhmGjiRxr",
  "key25": "4PnvafDimgazvBTELpx7Rx6tNUuxbRCJb6tTGb7hvkX9Qv7BcSVV4hHAZHqsGA1pY93SpfmD633w4pQr4Wmzh2dK",
  "key26": "5vhEFTG4Ab1Mc6AnGArFYp1v6v3FicDi9yyyknLSXfqaorLvXwkAQppR1rgKPWVNdbquMLmZpmrKu5J5DuNoauA6",
  "key27": "21C8EfVdzbDURyodQDjcKav1WiciUQFP4P4BurQVH2wNakgJrjvug7XQTeSiq7x7FhsaW17vdHkTGxdjvedzWSMQ",
  "key28": "2rRUzA6gt7hA4JaHco6fNQECsDjF8JxZHLsnBfFNMM1zt7HxYuUdihEqVSmnPBoBd1sGqXcSdKtCgbZ3UU2dBGVd",
  "key29": "bdUqAxeso3FMR41J6ioXnCvXyvgWyFExiKRHB9qcKdHSVD8wPxAjaZh64i8avEj2kSuQsA3egNKfz3mcH5nL3Xk",
  "key30": "3TsFzj2AjvfamEx7AZkXufKV7bFkQ171godXV3anF5PjiUjzj1dvrDT2Ra6C8Fj8pFrhk4LsKWuPzbdNpmsz3d9m",
  "key31": "4f42czQNbaNSAUCmqsFUGuA3kkJwGdLADi1Rem4CTvLH8pygM3Xv4R7yTaeVMJtCFeLMfkJ4J5Tub8JpQuMrKjPY",
  "key32": "as78GJg3wG22n1qF9YSdYWvhtf1YPoM3HSy4nnBymRVyfrUtvGQdMk96LNEJXQH89oBHNrTQrCAcC8fvK1KpAMv",
  "key33": "2wMfF1B5iWsavUCfBziuqAmHASKStyskAMSQgWahVW49j7P1Y34vc2N9JJ6xx9w27PhbdhsrqoWxbK81uWm2zora",
  "key34": "uAvagco3yhRatn9oMMo8yKSszG15mbS8AxwbtejEBqMh5rKirYk3gHMHmPCbg8WVbA8fSg22uqvkKsVhXzrqc2t",
  "key35": "5WYgKLcxKj4oSnAuVDMaQuYZaSDTagPqHpXAcfg6PyxZYMxaYTVgv8o3vKeshNwyXNYajufiYgqynpC66U5FDx2f",
  "key36": "2cY7zKnm9osMB4kj3PRJPgxEUfQGxq7A7hdHrhuinJr4tMAc3Ub8xZEgVUNAi45vwzCxUdHn5xtQpdtG36BkAgZ2"
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
