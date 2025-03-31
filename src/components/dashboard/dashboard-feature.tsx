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
    "Ry14cFapXN9MyxcCUHiicnu2rwu5tm7GEm4S1H5k8TbAGwgt9vmyDK5DfAhYW5FypDpsyyoFXWwerBHjpLGruN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pcZWDQyPY5rjX9d2NAbfwwF6tPsDPKfMjwf8MWSGCMZVqXTNM151HKsMKjLj3qmHnLjpwtkgu3N1JMjagPGMoQb",
  "key1": "56U6fBXbUTK2c92ysjGW17wugXkJvQJX2aCg6ywm1hQCNy8Z9Sap3xGYWZj2FxHVTm4nLtPrHbquB3suyzVzj38k",
  "key2": "5AHxjoCDkjVNZbjUrQWjMZ9T9kv6xNCbZqnRnd4RcpP8nzsGbpHz2LCRX679qad5PCR4vMSA74c8QJDfvQE4ZXV",
  "key3": "29eAJrCxY5okGvTn5qUHm9u2EQkjiahH1EV8y8ncHk6ywtRJ8ZCs9MgwUqb7remkXztzixwgMGbHzfqF5gMPTifu",
  "key4": "3T3MSCBo5VNQZZPmf1qExoc5fHoiXJDFNxmRsMED6saJKHof1LszVykvWLyFwowC9pcbJNC2a89A456KbwL943bD",
  "key5": "3RTweYGn5Mwphti2FxzLv4tc1t5EqaDTaoyPa6RKPKd8vmorgngFBMeqeTYgRgmoi67rK87UR81vZjiKy9P8mkH9",
  "key6": "3BoHsnmvL2ReUCo9J1Bs3fpqMMCoqHC3nhEVdDckPbAKPWGgud7Bj6pComH47DDZwAvntQmncK4e3p6VbCFETRZp",
  "key7": "2jt1rVevhHWYoaPbkBZBTab4duC6BJv2ggwu8V2kh1d6ejqZqdBsEdD6roptxVpVgFMmk3hd4YcaVJLuNjkhr64d",
  "key8": "41pQqHgXoBSgRxP3e1FWMd7SmBve7sGbYUbj12TZxvL6rbk6ipbpy9XKxNkjSijgFfWi5HagvEsLAX2QuxqGcwXX",
  "key9": "4tq4SJW1UgbFx4Y8XXj3CCJvEm9GiLEkHnjNvaj3UfuGwRGtcZapVLP83gKkCbxcr4JLooXDE2tNnG4yNWH2kizn",
  "key10": "5sBwC7e3W9Ppwq6etEiM71ty4RaPWbd2xth4xESG4dYG5nSfqRwXddp581qQpTrXKqMk5w5jmg5xf3Af2cdYN476",
  "key11": "2TE3Vzn4vREXatcsMfLEBGknZSS478aM8Srb1avxwMdjZAhiEp3AFA8VKyPCsH7eh7EuSzd6o5iQjgHTngqnKTPY",
  "key12": "2ErVT1k3jcW7Xxr84fgWrFXBCdcAp26J7e1dcPVJF5cFRDbtEZPDkLbHxesSk86PjWaQy8ojAx9hqKLopfq74Mn5",
  "key13": "4ogQLhwnRvpPd6QSGhykSRXN1WbAVYjPoLC1BA5uN7fywkiUCC86ji97PECGoUyQu352RqM3RzaTgDxQkprhjcBn",
  "key14": "4izFjkvX1orVgT7N8MmbxALwUkEvVSpdLNX5EkEae9oi4ozu2GPLwSysN3Fe17s9B7ZsW7BKd8rxEHgMM8w5EMHd",
  "key15": "4fwgHpV7y7EPDWbW7qmMrfg7NdLcLRgb3AmXfN8pknHjqZ6QwobSrt76kSDjX7KoiRo797gHWWdzwne8tVUSWZXd",
  "key16": "3e4vqEskKuYoD8vCJqvAzzfD3qdXCgJj4h6e7SHGVjR8U35MK4ysAHLph1Q399FgA78o4XaeJanMFNSVqvmRpUeD",
  "key17": "21p9BTJnqiznMt5U8AZRLhhC9PD2KpEeyKJyDr8zieGJWYHkmofVNZGBsk1ctCHXdLkbCu7GECFsPv1pSr6uxTVj",
  "key18": "5e21HJB2qw9yqP8EG1UbgS6Nwo8LjsoqqYonejb6KK6LoQKRt4yNWqBgcJYi8FUw1RHS6wow6nXJMpAx3PZH5CQk",
  "key19": "Gt7YL7hXy2YvnmCVBsXfCnsaCeHWij3upcGb2B38uwWwFoYXivjBJC6SKDi41c6EvCQTG7TuQE9coPA3BjGuUJo",
  "key20": "3JAP2FfwySMPqah4YtZodJXnszjUePxNQFQTPpGJoViRSdQU2j8sjqCjHaVoVENWxMnyd99wJ9nbMawtenQbGSzE",
  "key21": "4Cr1bXCYB38wchsGG9ngGbPiFN2FarxHfh9wFY6gM6dQbAXNXY5cBrhiwmAv3tDFtxaW2JKsmsTpMN1JfPtjc4K",
  "key22": "MECHEUWGfKszRMUBPcwvzseWvBxCpfqNBRksfXS9HipxTY6PqzRoi837cgKHrzxi336S4Nzb5VEdbbi8BY4Y1Lv",
  "key23": "4Cfhs4JjSvmkNkNjN9HkPCAXYmojHUs6kz67u7xeHt54f45GbNss6DqNusRceLmwhTjJZrVURPUcH5aEt9Qb2yvx",
  "key24": "5nE6LmsveyQY4X5sLPiBDYbajDxrQ7yZkfY5bMYteoMrqfWsfLkt1HL8j1oeVDqYf9BYRzMKaFrFKwLXJfyvpW7Z",
  "key25": "3h8R9twPestAcoKCYZCC3fst7yhfxA7HGU6QxRYJiGbpa5phcsCmR2svRwCtZpBTs65iZ6FzcnVVjEBVZBkEvdiE",
  "key26": "3u55NPVFyUsmDP3KYeDiiz9dTrrLnHRUHecBzNKfKv5uwVgf3vHBLPZt4NE6kdRDoUBEPPr7qoj415TotVupjk6Z",
  "key27": "3djo7gMxqufN422EhdAJ6GxgbsiZ9LXbG95dALaCNSAtGdAHitTgveJc7BBcAzyNMBESeFF8Z6gvvMSo9e3fjSPM",
  "key28": "27f4q8DsL4QpvyNTDT1Wfbe1zk281mPUZv5fzZDxa6nCJazB6i1kifmbk1GeX2ocBxjzZPGHfrPPbNMGDiQNMHeh",
  "key29": "65EmEMgp7MsHNmiFWaqXJkdP4Aep13Vz1D3GJDh6LZrEqGfz5oeycNGJRCARXJoiyixp5GVwj6g93ueMZFc43LZB",
  "key30": "2xshy7vjzGRhhTnjfV8cMnE3zunnKXUERh922WiLM9o7aavEFBDhkNoc6Bhz88T8awuzgzL7hAry4Nbuo6tUiiRe",
  "key31": "42i1bGtww8o4bGxogBzwHTdiv78LwNoiouBs2UzBuFMti4vLXS5tCJp37qcE8u9Advvwssbn3zfwcgoFDhyX2KTR",
  "key32": "51bBbuo5rw8EvGdY2CUBtuE1VqePFmy7T37jWzBQ1QERKMDPypWj3oUceZSFCgVQHpuC6KNmPi6b8YnmcGAMvW7a",
  "key33": "2yxkmvsGKLqdjqr3mGGSVAmCxwvuY8WwvyeRVQ7WWmhgEReuSKrs219M9yp6CVsUgkVwpTRwy6fqCMwBKCaKH33c",
  "key34": "4MPBR71qaXVMbftvUEojMbvUKnDJBVZMHZCak2XHob8rtEvR9VwqsuJSpYMDtGpcukWC6nxnm2LAokrMp5sV9fvY",
  "key35": "5cQBVo1i3qMm67cH5MRQji5Ld7kvG9guLebn4viQFmVvgv5sCdvrWaRPVVk72GqD1kumptgQNS8rYNpt2VZsMMUU",
  "key36": "4ekN2mXKi5KY1ukRm4gqseVYMi4FAtDndQvEjD1Jw8hTvbP5fCnFyBLaRyPHvbkui6pzk2kG6MRZqq31EmYLQBaj",
  "key37": "3PSRAbpWivc4BdQ8WF7LNtdAqqxy8SM3etQ2ZRKtfg1uF7dsSaya8EWD6psQAnsZnCKiRHcNFYJvbT771kpgifpa",
  "key38": "3aiyDUwqHC3DS5iTjL8h9Z3QBPcYCeNBZMPmgHtLMFP3bfB2dySi5uSdWezVavSBHNFoEtACrLtyengPHdE9cUKQ",
  "key39": "54Me3skZfw8JLr3ufPeguernfv6thjktT2fXP72ps63vaWW1PTMVK5MgMvmVvcJU93eagw9ChZ6BX8Gttzyv6AqL",
  "key40": "2D7ZwzSHAgtMgLDwYyeTXr5aD89DzqLBcdjz5aYzNY2w1eQ53eSPidtPag9uCLJGakoffNTXWTbjMuuaBFGquR29",
  "key41": "4dXgX4rHDTgoS9XE2LC6jP2yirAUiWsQX27dQHGCrer3NA6u8rtUEMLiWA7heUVcTcifnbforsGTXFoLLCRwNck6",
  "key42": "KKDFiYdW8qWjmUdkUzoDtgmVJASDHp3jJDizv48eQydNf47DQNinmX4zgvLfRMvJA7ALzdzoJ369WMudgHK4vtm",
  "key43": "4hXMt5wyFPCWg3sVU7a11xnHykhW7h3wRtusbd7EntVbDwF74SwLqttPcJGZZdWpzJ5RdMTU5Wo6SZ7nvDApu4VF",
  "key44": "b6r4PRA5pwgw5FDFuvXoDTftLcxdEgYRKWd2qjiSvBUjH3eBPWigbgBp6v3GjHQL5TyV3EvQZx6QCVakrW1niu1",
  "key45": "3gFzpekFMipKb1fKm6W8bLkey6XHLA3zXSb1FZ3jrjRu2YKTX9u4psB61hy8MZUzaY1BJ38SrdkSGd4jyPVXZsii",
  "key46": "5tQh6aENkp7t5jpoxHcoyZcQDb5pgnymZzGD2qQW4cx34gXhhSuCA1Pvq4ALjjM92uVDZmt9ZjxhZJQYBHnybVYE",
  "key47": "4WCx95UxqcA2psYnimXfGirwJg3mLg45kGaBHup35PBEQUvWEapGvcGk3f3AsnUBe5kJ3DwVh8H7dA4ydjH76m88",
  "key48": "5uHbBBziuu6pAA2RimVqZRL5w3yHfhujMJeRHekTJqbxtBWRJxKYek24kPUUpZKXdDUuuWCQZJTHrtrfrieLXkfx",
  "key49": "278EgC2BtVKTzDQ7yerUdXihpXSPueKiknqh6CCnVXQmGVN6ar7stxKD8YRwv67YghRhqHEq2NspkRCjZParA9s6"
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
