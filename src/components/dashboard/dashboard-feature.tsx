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
    "2jT8GUAvbUzW3MAGk2iVL65U1fFBb4Ro4ThBUGRSvaC5sL7i7bjfSi61ZXNndb25c8oWEJK1WSuYNFPFDfeWcR6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e8KxQiLBrqQ64KhgnwRFXqtbH5rKTL7acXLcYmwvW5BYJWoeEbCfaGttgiGz8NR38Mmt9WexfWdbuyKfqk9eUgm",
  "key1": "21Z8196NUZUDXzC1BBVkSfk3JGgaYzBnmNMJYHWCxQrgNfgH8WB3n4i3cpEWZFkQ6HqwjpLPRFG7rLyS5gUTa9MV",
  "key2": "5zscvLnGoNQe3L2hZZQpCGtBWecTGPxGxedSsW613N3UDnWR9ZkfMrvJgXNho7EhoL8xfmLhdphBGSJN16qAooSe",
  "key3": "478eekoVMM1TV8PBe3yyNGY6xTe5rzEcstRN2SXY1KpxTVrNoMJtN3b2H92EW7Yj75j8qJjEYiQBp43S5Wevf2ST",
  "key4": "4fsiS6urSPcZJSP9zfFGLAZMwU4ia9sf6ZND5WDuEL6a7pserjPRwd8ePc3R6LhtVmiaF7491kE8rc76zhqoiUuy",
  "key5": "2YATMs5CMuxL44s8y5XtTjb3k7Kt89xxJinPMQL4uKxZJeSwBoPVcCXcS2z92MnVgtb5EXEPjgDd1t7HHkTHiwhb",
  "key6": "4fqQAMjivSQoAwA1fEVZvZPEz9kfWDmJDVatSWZ4ZWRu3SKizLjKsrsyjjWS98LyarEuYmbc4WZKtcop9ed4ye7E",
  "key7": "2tZ5TFByz5g6Z3noRrZaGG9x9eh4aEcwq9JUYx3cBUdoCv3RVXBYvCGmyiZU8A5BE9pfry2NzZLRCSNcvRwaGqLN",
  "key8": "5uAXgVpeHRh9FjsVWfoAs6ZSkMgHNSG3sV5CwugP7S68xkUEb61gDqdhyHZokWidAAip4nzR754g2ex9UHJQR6Zf",
  "key9": "SbcAvn36apfETkU8D688yKm1GxZWnSZ5Vas7kc3rg2c2Nin94BVqP1Uhm7ssXEc3s1hpGmdzxrt5DKn6zgm9YKG",
  "key10": "2MfamgNEyUUGbCx9As15JfCifWuRLgQydSSUGw2dPYrp5mAxQfhhagAEna97c3ZFowY7pvSsZzrci8oyCPTc1iXQ",
  "key11": "57wDqByWAtfTwa7JLe7ST4hH3da6z6ezTa5o6UdBdRi3R1SzKU3fpb6LsFFwnqL1iJZZXfjM5sa8fpFHMtWZsdmP",
  "key12": "5sLKLjsc4okLhJs4nCLYtr4KC2LkWoCAHVenioeoPWauxXvAaWXZRkVqJUEdbz9ypHoDRG7sCcgbq2bJMghf32TV",
  "key13": "2e8L9aJ3dR8qdwHJnpYCgvLEs8gn3R5GSEtiX6LnCDAADvx97ka3jJwMeNeV7SNRMMbP9PBYagXM6dyUYf8D6dfU",
  "key14": "43bscW2VKg5DtDN8BPQQps5J14LMMFB2LuArSbHWe9PLMnnEPkBaCartcog4CZ9FHHxBJojjuVuD3S4CiSvEPiTu",
  "key15": "2tYtfns1J3dkwLQEgsvAMsE4FLfUufgqfdo5qSbyS4CHsqHqe46Be7oVc7MouvzuFh42TP8BhQPjhQLdHsRg32Qy",
  "key16": "2L2tMgMsyWM7v5JBxVcFegoeSfuYPkC62dxU8GpRgR2CAnnS2SbKX5ExvAoHaruNuSp7J4miBsqieR5qxnZUYXNg",
  "key17": "4CMtho7VQi2uXMRzEHQfGeWpVwQ18or7yUaQ3LMSf3CTEFVBbV61wcp4gDnRneWp79ArbPpG92qQA1QUN1bTQy4x",
  "key18": "5cuNbSX2iYmBDHyZDpJpzhCccG3meBAEVVMRzde1aKJcczizHvZnWbSKzhUfAs5gxGrrF2pERe7QLMGztkDzscik",
  "key19": "3eCWUVFshPKmmmMaudAGcXBwZ4ESnJgDDh2qMyHFoYuyEj9siCaGt6SgkkM79oxHo1dwDJ9MZwubLHvRdhqWZ7Ci",
  "key20": "u3iosXbvU8JwyfZaSTUWwiN9Mv77ocHUsuAP7x65c6y3XdggGqjH4utux4fSmZm8GUnWYZLjhyEiSNMiFyq4oUE",
  "key21": "4skoDqHDt4xmbfgczhFqZaoNNWPMRHXCHHQENUdD2iQ6PMiNBhM5eK48H6b71rf3WY5QnjWLcjSujj5E3AWdmrdr",
  "key22": "59bwPAMYPFicrn4wYgj3eV1wnoCZUpWy8d3h8Wi75Bm422EVVt3yQUnhNA3eFKxjKJsrL9eDBxstaGjq1N65Qj2A",
  "key23": "313Cwtn56Z38V6qrWf4W3RbzfM6EucPS9HPoonvTJkA7VNuSj26JmkssvwPQRwLeaSpDyhc6eG8u8nzKi8MrPc3D",
  "key24": "5yAzsyCboTCmaNgM7neG93jwmcfSzkUwsGCUVggFqC1wdfJxWhK1hVbPuDhcxRTkn9Ap1aWrFfregg1oprGuocGP",
  "key25": "3shy5feZMnW8bBCan1daVF1GWiRr28vPBM78ANfHwf4Mmj9R3RuuEGNRvudmkZVvuAD1QwDk8cFYotkDKqnfabRb",
  "key26": "5FzzndEDM38EAcXYWUUL6rN7iFrZEEEFrdMdkaLGuR2JFBqP7cdCi6jWk5Nzs9UAkxtFcYT4A87vGoPLyM7z5dVB",
  "key27": "2GHiywxnVSZquQB6577pULKVHZcYNEgVyuYQA62qP4ojA9XgajakG52xepDfy72Yj2RaWJckztTw4Kv93dRR3gj7",
  "key28": "4yKFLfpdsLuerTDSUNHPA2T2GiB5x4axt8gEUvZQmjJpP7vF4gqvteuXTBUD7zPGiMh3zMVnYAs1NvPPSmrrfvLB",
  "key29": "J6VvWSGDhrsFLTpweDGEEHephi7soc2jhcP9WFDriMxK8ecaNdkNZjrx1Rs8wJTJNxF341TZghSJL861xC9uG8W",
  "key30": "4iZrpYWy1vxMDum6AoXZh74cebr4F5JYyPhs35omYuq13CJsN43zwZLpj8QWFe5jEnGLS9Z616fu7Erv9tnCKTUY",
  "key31": "4fc17xkyGBRgwwrxbr6ApZtZXJkjoP6KNRZvCSEd7DU5t4SvsjzYwxoSfsU55yV5LDZmUqu32arsXi1BqZ7Jz5rp",
  "key32": "5jayBTUogk4wzmhD9PhWMJY7DGzQPkMY6PF8FcJBtmiNCxzejzZH4m2P62C179bM5YKX3Q3vtepLaeyjFUN415cb",
  "key33": "5nxCdRPgbK7QvC7FBtLk2fGBkV39XJFLu7c53tR1tReT6zz41XF4D8ZYKmeXtG2Cw2jVeULkLyQ8BQ1Yi5bXW4ke",
  "key34": "3we5DYQ1dZ7jXQuJGoTWRrXNPAby1yqmcUxEBSBEUhpzy58gGG251hgX22MoLbgrKhmWQSfaaV9fhfeHxccpHBA6",
  "key35": "6jVZMNf8v1w86cRnuAFcBgHCPS7r9EGsT52dk28NibNtBJKrVENo1NyRU3pc6ASfgaYY6tQw11im158ESn6FMhc",
  "key36": "44fqo713s9xnNAnu6noaME3Lhp4k81xxegZougw7EKpifnDhuZeZtnMNL2YvXzGXUuNkGaQT3da5G1sBDuaJvk8M",
  "key37": "5Yf3GZciBuGc4otzWZv1WZd3tZowm665M37MNKvB8dMhaFb11wTBAfnHHWVVy8dEZAnySntoAmsPPR8g6JTsFoNZ",
  "key38": "3c2HrvdyzaA5hMFjEU6ZcLtibA8W1SVWnW9bEiJYkUoBCtweEWuc3yhm3H9YZbwxhBNoapPmXCwg5xsGhaZgQXj1",
  "key39": "eRUBzgNLrUaRk5q6xHNWLQMxTzUCRoZFJQUpcRwue51tcXpTmWsUa44xtjsiSjpuVNxvxQbyrmMfZAi1subQYqc",
  "key40": "jfmbrBRQefkPhpdjKrXzgVQwkoFfM5XopW8HPdPF22h5rbtrUExZWiGfb92m1so6jqScgQVYtiYB5GMTmE5pfop",
  "key41": "3RM5qUpdeKxozeXabNiW12FngoqJN5g2UzaiuZuVt9kvnjU4LWMmms6RN5RVsQsmF3ue9dHh5rmZggPiu7xab4zv",
  "key42": "64VU8onNLVFx9uEPb7p2BDajmN5bVyMn4RD1opepiqwfxuEXM8PMcZsxUBM2uEozaqWfCMbHkepeQM7uarinfdv2",
  "key43": "ANLkXsK3UR42mUavA5uzA928u1iTJjxXCSqdJeQbB54fbgMjyKbybD9X6iCXofgw5ha45vieY7Ro61UuzqCrPa5",
  "key44": "ncKXpD2MaFdssoi2YfNAQM3wfneDZMhG2Cys1921gnFqdDeTDpx6TCNUK3XJSDuDhUXWGNdAGojcbj73QUifbk3",
  "key45": "5hLSFnB5K7ku4z3HwmMX2KGkAF8L34m97vKGxANy217gMHogYNQpMs1Yu6REfRWKs8LCjLnE5eexwCnyGQ8MdmfU",
  "key46": "2TqhLJTPxyb63URD4W5E7GoYipeJirx5hRxBGWTNftB8XYaWL5Z9qrRhvPz98Lj2jmncBp7snfhmTU9pyNZzkoVz",
  "key47": "5oPUgL3ieTA1Cxq7Cgb5ptDp2uYzAZk4gy4ShXD7dCZePTJLBJPdZGgfw271Q95769E7wSkAAPwe6AVNqrgAHdVa",
  "key48": "4PBtt1WQmjE2AKGB4nF6zaYvKbhQGRrbtkAZFarcRsPgtqDNAhnSS6U8o6SiSdKUjBkwZCJxNGfhburW93uGZyBL"
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
