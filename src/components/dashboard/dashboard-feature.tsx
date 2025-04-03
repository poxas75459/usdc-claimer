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
    "31EixE4v4tjVUkyu2m5mNcLQWkRGd2wDDSZQeUahN73vfLKUvfxQ1ZjV1DiLhkq3ScsAki9xqdREfaeVKHd3kunu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pb7H9q9ESQzhBthsTSWBtkCVsdTQwYPCdq7HjvTBLJLDoekJVxX3GQmWNg4KgShiQUhgz41LD18EhtcyfdWL6eK",
  "key1": "4CixSNNemYYuJE64m4iAhLbwN76k5bfnKeWuPc92YkFjUZnGwmVpCtMWVdPW3JxWHt9RqUrSV8UNS2g5MibcDGsM",
  "key2": "54FPTzi7KUaoKNd82bTVCKz1pRnLB6yPhB5N2hZcPybdEaTpsmkzqKeCbRviDSsGRCceH6r5kFC6xs9wN9VWHB3g",
  "key3": "27bkbGzRLuqexty1ewtosmN2aMZYX7pchqBciMkHNhGGUA29rrq3MjnNTmPvbstAJSBKmRtdH5gDR1CUD5fNzS4R",
  "key4": "3KWVSckkGrmGY3tNrprZruzy1HDDUAyZh2JJGGy1SrBXYa91hLzcyuttmYE719gQUXN2DTDc6TMMMNdiCAfyZAYQ",
  "key5": "65ajTv1qY6yLX26Qudk9Do8W4rJ53RubToZC9iaV3FTjcxPFfr6KtH27FJzXWUgNUGbRuZmjPokA1nPjE3HAUXYA",
  "key6": "32t8iM3uFeBum2zposEFSrFMkPfCQLWe2XWeBoM1haao99jf1FwTwwXnJH6LtzbntY33SLjgK51YcAxdLqfi43a6",
  "key7": "5DHbPRHv4uMsLgShxHxVF91ePznXfUJ5tMQGUFEFAvFTFnbeaojHoTWZwyG5wLUjUxaGaKPrwokR1C3HCoyr1U6b",
  "key8": "2t4YgHeqB7V26fCaLs1J1JtrcxDL5zJti85e1a9pt8oviV4H67y3oeHxFRyh4etDT91RkWcL1AyoDGRemycnbi7A",
  "key9": "4X7XVZjvp3H8oQVqvUEdQNx2fW1n1Kjj1Q46tTDreAvYNMiDmgF7qV4UvL5nFTthaVm1dXdU6TxzAZ6sL5WwLdkR",
  "key10": "2LxRe1RATrzh94sjLUTgrEXe3ymESvxhBCmf85T9ex9STMq662atQafDP8Jj8YqahiZCMq863LkwFrUowRVxRqRZ",
  "key11": "51o9DDLzvAw4kA5eWoSwv5oxLuSWuGqicTyrKJrwm9W7G6FsL3QqXCuVSc27RmmbjR6ZbFmC1kwaikfz3smB8Tn4",
  "key12": "5BVadj37TisrcK3LobFpspqxt1iHcRDtvbct5jFTPDpJVW3Gfw7Ax8bkEK9gzyACXhtpAfshKT41PzgvS1vsN8nv",
  "key13": "2TZeqN2gFknj9sCmbVDz57ZkeR1BBCSRXZGUmsQwVePsPxBTfjbWcLSJ8275rn58FPosPLhkaWZz2hss5wdV91i1",
  "key14": "5NsAYHfVdcGuWq5FH7knt4jkyakZ6Q1vw9WfYM4PNXWCMYdyC2BNELzUAEDoXXfsyQnc5orbbW615ejNEfu3Xv3L",
  "key15": "3HwHAoHzfKeVeGNLayXkKao3VQzxBMEB3iUcqdpXGQtQJc4F3YjW4qzJ5SvR3BmnXoT5Ak4eJAkb8m7K5Kzekogh",
  "key16": "HZ5L6VBPA5prae5HPQDkKmonzWpZ71zmkLqS17dUKHGitPFyG1P3vA6wFT3zcJmNnoksdo8hoMm23fnNcwESyiC",
  "key17": "5UgD3UqK6LDWK5eKQVCtoYewLynPiLSvknWbLgNUd6PpZBXdNgDdHUHgAHbJEJaggYdgiReeqAN8ZPZMkmM8bQz9",
  "key18": "56UHAxswg5FrUQprQ6kg1Mqg9nrGaDytFF4ZAFRjqTbqds2Ap5zYHk4shiTZ4PCTVcnesL8crrTQ4e1gSzo8tYP9",
  "key19": "4bHHCTqrRwzfzSgw7DuMNH3i97PBLiDYnA92qXuCAaqL1FsXeXo3UrckPtQHiqaP6qZ2EkXCHpYMtrgks4vPMTPo",
  "key20": "3UVrLJAH8RhBoqM5EWxFXy6KFJqpVui1paf8ysvHj1AtK6pWBYCuZpL7r9tyLmCYoKkXVtgtzbSG1buHkvC6evzx",
  "key21": "6Drfi9gworGpA7sDKYeSegXjfCBXKra4moR3fzY2P5bZ1yMkPwthKxG8Lh9CvAwKNybXXw4VKzd7FzQJC5BGc3e",
  "key22": "3wuSBg42YK7RAfSGhTUNNWY9Fwk6DACydZsrpWCX5YpNmtYpa2eQQTcsAoxFwANbihDvXYVL9yPHPwHWgfBvBr7L",
  "key23": "5zM4XXUwgPedfePFDtMTWXeuKmpQBUrHfRBrjzMpnuhKbTg487zvCZWKwqW87jnFrEQYHa8JFR6zvFLJ58wLTbtg",
  "key24": "2P6hsGJsnhfWJNfXyCaj8xwv1CeNRze3ZkhNsGQ4bdgHDsRqDJU65Cqdtg5Pef1MKRuXeTTbVQJhkNXCNzLsp4N",
  "key25": "3LgMj1yoctVi1jzxbzPnughm3fXZk7tZYmuyg7DJTEWPm4PR1Jg2e3B5tsovQrN5fAipQ1Rs33QxRab7b612gDku",
  "key26": "3aUAh4mKf9b8UdbL1bvurLnKMAKNCbgxUf2mdC3zxfMooXTP6Mc8zPaY2rQY7dJ6KCCT1WqcXMm3fJzYawJGWNYF",
  "key27": "5PYfAi1YFFfQpmpN9nG3UVfwoX13NkFcKEEC73KbLvz2fy4nNK66Hdn4kkGTjVtjZ9CQTb8qexTJPig6QhMkxEaj",
  "key28": "3V87LvpxEcWTa9c6vdgVHSW79VSu3DV4n6poPXDUsNQYLam6W9EmaKMtWRwkGnC6V734SFv1VwfdVLW4SBENDQA8",
  "key29": "23uoNt1XYTnhTwKpCRJdc7rK9exm1nDiqA9pXwaaurV5D2TPVSusztCd5pKbqZ7R6PUArQMmZECrLfvNnBMntMZG",
  "key30": "3Vzyd3WyT3eR2XzGtR1CUcBXHD7cZnTcaXuHNHwvXjuNPX9AvqepKc8ZzUpY4H8ZaLpp3PRHVtvkLH6Av67DeTQs",
  "key31": "4QYyTajGkQWt9z6nNzt9BxPXGWpiqkntGo8X2S2myYUXj6QaAiiAy4AsifeaTybHsEc1zHwXdEa88dZFYL5fU5B3",
  "key32": "nj6uUbcRxobM11npRSkz51eXdFYH2g3gCwCxdMxXL5C2gCueNNccLB8Lgvg8T1VDHmUXR25JaKioN2Ks8h2aeXM",
  "key33": "4utCSH1phN3sMJZ6hKXJ1bJfppHvMFQfkQm2R4krhcnoLG9tktsHxc4oxgMwPnSthQ4jS4LsLwiK2zeni845V5LB",
  "key34": "2xaDhzpQkzfUd6aBpXD2q5db2sxr4vfx8SzKq2yc5hFGbzGH7Zei7Q97DQ2WH8BLXSQjCcGZGMUGymaRkV6T1MVn",
  "key35": "3WFWspasNU7e7ZPrRx7gbmann6Bpm4vxDha3dv4uH2o29KJeijpiTT3Mv3pqxETzLXSSDCNSvzqk4w85yEfFokH8",
  "key36": "sMEiNwE8UaDmt7JdpfGnkgpDgDAev4TrnZZpeGPXFqyayRWF67vApbb9JbY1x6dtrrLCKDrLv3wnZftMfDBpwPf",
  "key37": "5MUk41EUj1EoN7MGXg7iEUb7EPL3ZvsrTTctrF25ZFEmTQNVaYzMBHhAPMP12DjLFrUuD5dobzaE7jvNTwc5iw6K",
  "key38": "2tdHcfAaijnTCoHvameeQV36iWVaJ76yofgwwHGBDRf8Lioef5ZEpwy1AN6H1b47AsJgcEBD6oHzbdH63Ti7MevE",
  "key39": "4RJoMeAw4Rw95LQdng3hbRZV3c5Nd7niEahpw3kx32wBGDo5oW48k2ebsEKwhGPAnVkHPbHo7rtz9JkMJFvk9CBo",
  "key40": "4fErHGsjumWTSbB66vKn13tp2gPSLMxj7TyYBLosEQCbLuU94Fvq3Nuc5L6xj82ddfQPjQ42E8DVDP7Ta84VPyiH",
  "key41": "2De75hNH1cn9dhMMAn7EGtzDL23fMXVb8QPCZ55cZs52c4uTfNDRaqao976pP7scf9kJ4BXiGjFoaKPTd8Nme6ju",
  "key42": "3vbAdhL8K8MkwY4J44KcBfFQLv3FDPN4schL2A3g2LCNYL7CmRanAN1zSCEwyQf3JJC7mm4Lm25hydk62Sd5PnWK",
  "key43": "2ywR5W6zTLZiUXrYetHTwJPYfBbJsfH9chpAtP9y4v2ys6zBZquz7cFJivfh9mUVdEz4HpJF398f4uWe5aEBZmQp",
  "key44": "QsGx3qEu9Ww3Ysso1aPahtWaYCo7U4PbLe9obJyZoGH3wZBjDPEveykPvJqznmBnzXA3opLSLDuV3J7Ybp1EVy6",
  "key45": "5ZQoWyPyYBaNAVKS6jAvhsdM2zEGAwPQUrVX22H3N9u3PRpGDCKGZvYVa4rb2bddswfqybKrvHWyBJfRYF5ywDng",
  "key46": "5Dti5huAjNXF2iytUEWQ9quX4vpPcrPMSBdz9wsMc6CUBfGwGzz6yNZ85fr1ndYLFWnHS86bU8e9C8sT3MGhxMJH",
  "key47": "2YbVWRajh8SYEaJaLasDrTphXLUAeZWC3rmZDg7a6HKN9xRTxoNqrit8RAmENwUpk7CXVE8jzeNCccJUzB6Gy7PL",
  "key48": "2a5tdjXE3vvxcozVQHyCZJ3caH1bUKkcmW1HevoxM9NjN2Zt7FUfGGLVm6iLMoEFuUtHnRa18ozuPJj1Ai9otRgH"
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
