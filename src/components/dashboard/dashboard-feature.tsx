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
    "5oAbpqVfPF2iBUTEjceXH2AcjJoX8EbpWvWefVxnz5RWbd3pNLNsg4TKbHrUXwsLBPmQaDvx53o3dQKaBnGnq1ZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R5beMfoNE6Jxez7jEbHwhzBpoXfLmSRCcFjmi4KH9UqtL4zA3TTKZhbd2GMjFGa3vUDF8QbAbEoinbY4qSrYGRH",
  "key1": "4RjBxk9hiHiQbdAwvi5wJqSBfEv9zZNAFtSYJmZCezLdqxge5MP2yavU4CnbBZPDGmT2YmHL9J2eQzeZMwnDuoUT",
  "key2": "3DV9nMtWzVp5TJhcbgj8EgDrN1cMF4Qm4eW8YxPwC8awru4tCgedhwSpiMpT9h5hajj9VVUppuXJwW7HM46HutqH",
  "key3": "vPzSBUmp68qH8aPwmN8PddgsQhta7NGFYWrrCn9dtUZ3czuHso5DwvZd1erxpexNNMLahueUiVR9GV1CU56rsNE",
  "key4": "2dATjgBdy3PKSeyEYfbhTA9tbQb9XP7h1zM2ieS6tcsXfvsFKzBCTcDDCrcFcYwM9ocohwmDKBe2MzFkUFhZbuW8",
  "key5": "2JuBmhGN6wMYi4d9jTSoPctoEbQBnsWv5BAVP9HArtaiHiLmySurf5VtaPyHoQDVHXP7596NA55LCFYtLcsyECUu",
  "key6": "58a9z2gxmb1FuKECavaHRPvZaE8N2tHqRHr3pnEGAqxLN8oYbfFCExGAWbMwqUp2HeTBNwa5gFNSwY4XA4ScZeWs",
  "key7": "5VzEjA8t6vUw4iH7yf87Uc35FBTixm4yBfPvw9WuxQVmBLyLcFUkLpUm44bboEXyL5Fe29d4gMZBfnjcmiy6ZgQx",
  "key8": "5UJbeoJN4RPMGgr6NvymzoHDmRnXrEhs2LR8Q4MVreCeXr1xmjnpVT2HgxQSWi4a1Y1HvNZP2mrDfQDzPLEAyDAg",
  "key9": "5KQLASJj8dt6qwGx8zBvr4wCYJaoYuuv1unmq41t7qmQi5VVSjKfzwaRWXMtFQnk95wPVsSMSDr3qTfwBV3RoQuo",
  "key10": "5tpMN7u69keevMouKHnvyoNA3te1gHEjmPEFbJ2DPktGBF1gE9RywDrnzkLg6stTgWyyuKvXFYc3JgNvypxbspPw",
  "key11": "6qdkniKghUDBUJcUA1RSRQUBvVWkBr3PRW9d3yAMn6Ytbr7iSLVCmNKRxCZj77oS5DVQ7GDdtVyZ7LpHRYhrpyM",
  "key12": "3hGEiTSFLhidq2oVAFL7xevpNLx8J3Rpr7NdhCpWk7pYrynW1EcSFgaqYcQSVejoXbZLnkoKaxNzYYnQLdQedcdz",
  "key13": "5WfVWTPiyijcNi33rGV84STishjRAx3bHsj15PubPQCosqS7M5xKCtC6oe4uxa1MQfogrPBGLnoPobhQd79zPnT3",
  "key14": "3zCfXb2uuwZaAWB8jcxbLRJ7FFt1xFF35EDJkMaA3EaE8mePoUwyoNMHnkW6FzEtE6EFDzR6234Eb7xWbB2taHWA",
  "key15": "3iiXJ4KuKiToVnnHsCaZ7Aiq9XJHUAGUDe88HMFrgkSCWaX5cLYB4GBAk8ktNi5H9ZfDfZVBkgaNeaZwqrxcqLJj",
  "key16": "5gHxfRRMojxnSdzv8WhkPYdhK8Tn4RfTmXuCeqmm5tJVHQDJKQRy2EiGgY5MR1rXyCs195kpZzqAVdnNYpgrKDye",
  "key17": "VCAY4zjA8u2eqURFjLoJLbxrgsT5y4iNzGEF3zwPfXXNP6fW2AGPfSDg2SrdvsWjtEmyCN3hKpCYShcbHBCRP2d",
  "key18": "4MQtTWGwm3Cbym29p1zPz122gUNEUJxJXD3qdxEJyF3QkJ1fFT3jFL6VLqRrJBPWnms5iLrhou2nhNNexq27icvo",
  "key19": "ukdU3L74ijqd2ET2BYe87kqG5C2fL1EbWdVhzzFmrqjdhzPZFKu2SxNrMiPa2Kvqorerp4Yb3SfAidzKAtNpiQG",
  "key20": "4kjiYqm3L6w1YGpmxG1AZjm1afDuiaFjnTSivvev3VPwCQ1AiokQYQEkuRok23uTVXc9fip9EcfYLWVfrEYZdNdL",
  "key21": "5SUtBtbjmMhLiJefq15zGyVTA2SVHMigYXy6mVQkbQeDGEyAzaPR33tA7hpjQzufeTFTz5W48pYgtge6iMZiaQn9",
  "key22": "5eWyWwtM4th3FKBChTRjdjtrMrTD6GAdHZMF7GjHZRgZKFjT7e6idwm6TMM6R7VBDNU2jUhB6UHr6WFwv88wR4Pz",
  "key23": "qrnf2tuhBm6KvYDiC5f5wPMdk5cDTZLgZQZBrNCSXWfT1Q6xVqXZEqXMHsLkrct1nj4WWC3tjSvyNC7AdwQAkZ5",
  "key24": "3h5N4WwmqAKGy61Qj7UrEf6mvX2aimtTAo2wpfie7t8VfkaeNoSXE4C5xQ3xrgAmeYtz1AzgK17rL9WiFpYPxta5",
  "key25": "4ExBj9ovidJxmMHgQdympnEzXL3jYrzYZbdruCHnLhsbLJ6XccYtsbbWwo2t8XGGCtkbqcMofVQdwFcY3td2fHPZ",
  "key26": "2JZDHpmQrm7CQnB38kbmyhNTLwHxf2QFw4PRN9Ax1LEGKDJ6Rfyewq6WFysmyNYNZd2PEmXdxWigEoDsX8FBV4uY",
  "key27": "4xofmm2jeniHgN6MPCfBFq6zvi5pcpa9uuZonM6MWtiB7SJRwpV9wZTRR9tcUBQ6HYK1deiiMArQNndJky4Ga8uJ",
  "key28": "XoZUWvLpeh2VcxNEEiEehuCNwmrw7oUccn6gkC2Fzc2J6mpoDZPTwW4hYGjqABDPipNuquUqiYzHbqpVA1HvHyJ",
  "key29": "5f22Lb4kXt9tW3bpZMZQZf82iGGssvqjPouFx36tNxfqE2rthC2VGxke15F5B9Jp3CobJy4zpHicimRECDz4UEBt",
  "key30": "VM3G9AU9V2CF8EugtDC46NAgAjTMHg4K6nuSbBDwH5hgsTdJPNS4vp7RjYkwSsn8H7Ap4aGURxLb7NJvUbLecPn",
  "key31": "5nPjSRXFGugpzcMMgCs33ZLagvxUuwMAUsCXprEfpaHRDRrtuCkFEYy5NEH2E3eJYmang7f3fKHi2yzJTtCPG7Bg",
  "key32": "5MLafKJqBHqV3uoQDSxFhTiCRAE5zbTAviqUMg6pSnyvNLXNFZqR3XGY9UuQ53AwGoFNEbmQgiScZZxjyYJ6tKd3",
  "key33": "5VRK2KaQBe5ierNADCAmzxQX9kxcT5Z3mtSyJCqKAwcbzqp4oVBZreSULdiH4xiUgNkjwtbQMSUed2AFJP4TWhkx",
  "key34": "4uGf29Sowyqhf1N2mzFCUG3h6sApT6PLH3QrHU6CZX7wPBCirVJMhkKoDhpgHw7L1CcKovJs1PkMrqrNGaZEJi1v",
  "key35": "64v4YZeV3Ua3Me7VHZCTd8cVGb1ru8ip9seoSztcCLgQ3jj5EaVN5uL6anLtW9MSiV6Qrh9n59U6u5EoUqC6isd1",
  "key36": "5rGy4ED8N2ycoegVUYf34qSdUk8H7uh3XgrCGw3sGrow1bgssRBS4yYNHAN9uCzjnw5zB9cm3wQJgwFjaGuqu3Jr",
  "key37": "5ZkSRFCx1A6krAJyV7obcCsjRKfBnvnn6cWt2FwpNce6FWFeevdLb1M6KuGPBsRC4UiAVzpEm8UunJ2FtVADWH7A",
  "key38": "4vE5rGbwp2V7c9nFQqiUhDbhwNGueyiDTYpNCRHSF6ZM9JxCAwwGg8RtWtTRUgVc8bXhjpGdwUfHkagjq4gUWCsu",
  "key39": "5LZwZVmxB3Aacwe86xzTdpaupXyCftfTUHWTdn3dcuz6nVe8v4EpLea3cKrftWJZDM7virF3VSSCvAgq7ayRtZAT",
  "key40": "ZcSx3koQuzTamPj1yKk9qSiJeCXr4hKb6vRCjDneM2webPrEdvFHwKqTu1RcBbM3pG5b5eARWQsrMd8Lv764c5z",
  "key41": "2DTLwj4DoPquJ9htmUxs8XVGQG54B4dZqU2ZCgDfVVxctXYKPctSPTk6NfUcLoqjHnmKVFoTgEuzmECeTBBAZydm",
  "key42": "582noXBZw7JTharggxqVeTmbB2fqZjhhss91DZKYCo6TRFzEfoMMj1b7gRpCSpWqjyL8dg7iSqafVTps9sBpZjTg",
  "key43": "J9B6XYHEdvBMNce2oc1yxqVCPfREQaVdLN1g4DDg6U4HnFLnRQQAzwbACJHiyW8CJYHsZWdWsQ5bvTRpXhbzLMa",
  "key44": "4DnaSpJJxCcyG7ZrisBqMctNA2asET7GoPsmKkPMRfvo1VMTC2MoHy3oBErAbjT5GaZKTvampJt23CDhLTWcr5XL",
  "key45": "DjLdJXmys3U8m7Cjk6AbnhUG69VgKN2uqYQfxSaXYKpjF1Y6EQ2MYsWx5KdrxmY7r4La7Q4h5R2zAPDLTkNiTS7",
  "key46": "5Az5thoKZxCmegv6v9SbDpK8MqFdj2AnNJqDVeBzZ1h4rnNkKSTBysfPvYro5sKwRWEx58nANHDdtbWWhPqe1eLS",
  "key47": "4zY8PeMytWsvBaiTDXJobmWgmDkUKoLWKXHeq4o8m69d6dmmGUGmuowjgU3L5L4nnouQtDJh4toQ9EriKxrXU8Vy",
  "key48": "3piN5VoHWHrv8iT3HspNz15yLhPn5KC8btiWtBNvEAmwf79MiQ1zxLKMFCnnSBo5EocJHVdBPgeTN2pkymYtPhmZ",
  "key49": "4npMRuPrZuRfbWicPFzutCiaFpvU5AAmcmAmk1ECzMBtTLL37uQPihNU1VgAAwLCYfwntLtchEz8k5AeXBUed2sN"
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
