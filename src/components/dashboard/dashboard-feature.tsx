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
    "26FLSLGYovuQgqDw5HjDPFD1yiTpKNbecuGzpmuvQENRUA7Wgco4JNRHZeivCVnxNPSRw9FhmDQMgVK9xH9UMFL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aeUVwTshAFDyQnzgcjcBnaTAKCsv2nj1VXfBaB9BcUtLig8rmQQyYPruchiRRf33vF4QjdXJLv26widXLbg4AD2",
  "key1": "2L7og8tzNv8vs6gcYYXpyayRz6FFpo9ED5ZabfTfyFadgQ5MpmXjRZteBRz6iQZYbaRMEMsCxVx8V6coAAVdCQzC",
  "key2": "S1mK32Had6r6fukEPCyZJhCj7hPwyPxaSigSoZeKcLMuoZBvr4AXL8F1JDg4TmGPAww9E21s7fhKK6BZ3jZ68hK",
  "key3": "41hZycbKATmfoY82NJbNL21Ah66KV8uUCpuV7dhwfshpYPPYJzzp2QzCpT4cQtsyqNJJQb8BsJ6f7GeJU6ZTNead",
  "key4": "3UEt41qcr9qArbS2SKbsy4Pzdr9hVj8srZBNFX6pomUwGpU4YFj2FqSPRzbbBJagZJ9NMnX4o4WPqThcQCtYb5RX",
  "key5": "3oXZc28NWpN2oZdscnSkCimPsgcUv3WJDzAugzez7qoV7NSyEeEnJyRsyTKoUc2tCsZueMJuov8gEycBLWBGujYU",
  "key6": "3NF1WNgycJjWbGydVD5ToXtXzpjvaJ3ANE9r2SaE6vMNqemBhagim96cbHBUTxGWDsTs9kU6XeW5NirnTCqu97iA",
  "key7": "2zNvuc1Cx7wbCuuv9xVobEMtLfqM6jCHExFRyGnfv7q1V9kjz9Z23ucL77EFBgKaaiM2YAr3ivSjsbyR6vUudVE4",
  "key8": "4uAg9ZbuDPnohGFvvyEWYbfKTxqHDm419KNStznqeCdRsnNxLwKHMLoseDG9HHoVmDeTmNqHuBFJhjJ99zYQUkky",
  "key9": "2eQLYmNULM73vcbK84poTPGh1Ras5yHaW3iAuP32QuGE3wXKgvj2nsJx6iRtTPaTqaEhwLXqoPB7Gm2kf7GXvXNm",
  "key10": "2XkoviCHSQyzzWPk3WGYqE25yz7yN42h6Sivp6vi25ZEGK35QSgPWGje9PyKXr3Arvh9q8mshMJA8PP1uXsUmpsQ",
  "key11": "53DkcnhN1Rby8rtkX1L8Pxw5GcGKHQJZauHksfD4isDJXnPh1HooPLNV8ippdYvQtz4pMewDTGx4bUR4v4i81RBQ",
  "key12": "w5AGwjFoAiaP4aSBEbsB1SnFKrD25p4ZnHsYUfbdX7v4h88ZDimpe5tqxa56DNTnH8EDE5d16dYFwbkfRJEUASC",
  "key13": "2oWz2UGya4zJzvpR5UF8eVP8CKN7mGXxq4FgMFztmXRk6rGgz1XK44pR3DRFut5Lje91UkUxAtkVZJ4QjxSAPHGo",
  "key14": "3jiZ3bjS2dHkF9oH7RmcPWRh6mj2Bk8i1Fq3MProwcLsE7oJ7xPyGDXbmKVXoU9xFxRfX5b6ReHAX648B7SxQh54",
  "key15": "FawFH5SxE2XxeftfH2ibhcymPS7wU32UdPY5sR8FNX1D5koV4HhKrGEoferAbiEbotaP7ZVo7wowRHbFvRXFBdc",
  "key16": "3KRNfwhTnUDT9dfgJEaKcsni3iuLHdsevuKurXMzTHEEuJ1NaPrGBys9DUCChYfwLHwjFrEwZqMqz8fQtR6AcvTy",
  "key17": "oHLMvzxvsxyEvA2ujWe9HUMmewgwBPc1gqv5A41iuXEe68CL9PV5yaGvCx29ZbY5XFQsY2D22KAHdfxvtdvWtR2",
  "key18": "3xpbYJ8vnu5ec8D7zWpJGFGJCuqNKznMBvdpucWsJyQJQhkZhuQ1Z1EaLykvNLeJkME6cPPfipiJyQ4PuRh9EK6r",
  "key19": "4XHEBhhudxaDt7pKKxHZrg93dAYe6cJ113NYAfuqCZam6UhmkuzKD37abRLVq9pr64wTHMBXTUHW5JLXDNyVkyf1",
  "key20": "5nkV9Hbg7h3JRseXCX7H2SNU6iaBGmesHKWKnCQoYEcyxdacGWynuKSzk5hJ17fdtaeDVwsBuAAwGYGqNG81jNUj",
  "key21": "2ECb8BFUhmhM2sx5sGAMpPc17BtnEUvWXLZuK8NoAmyWboFS3bksMYnuGUZBrKUdswr4h3fqQJrB99cxyszCFXVH",
  "key22": "5FqDjj62TNRP41XXdbhLthkf3QFmxPFiEMk7NrwWuYKHKrqkYbp585scxjDcwnTN95LQwWgR6as8oH5wscmSYoat",
  "key23": "3Awknuw7fV9fQp3NAboqrzWQj14LuD7DGpGpXeuFc7wKxzV986HVhdyLjJR5HEXjYM9d97BBr5nfTovZxBNqGaT3",
  "key24": "4Yykz7LAuouL1HBLYxY5rhTymcx55JeAsUygH1Ue8nS2Rh37jXSjqTVm3zGxbhzsaX9A8NNwFTMyQ8fVgHyc4LKw",
  "key25": "fDwtZx4PkVLGRyWaw7tA85sdt2dyhNyKMe6pj6L96NQLe6sFBQGMU8TAyNLNduPNDKatghgwFgdXepQLhcEKqrE",
  "key26": "5rvvTfRXmP6rwfZTiD8ZL5pqj8cZHHRFkMNiDq1dq6FtjNbxHERRikgTVbhG5on2WsTw5Dt8CX9JULWr3Xsrkfmr",
  "key27": "5pvmiv95bdmHPH6fSJ4FyB6r9FMUPNnVouE1nDVuGhSoH2LC9gmhcmzF5PTR7noZGqmcGKNzbcwsYuzFq3zy2iEk",
  "key28": "265zgU9TimDC14YsLkLAFdhruyUToyd8NiD9RbNG3ZzEc71ck2n3etaMeXzkAQBcacMyzTrg29B73G8hcv3DmgJs",
  "key29": "3PKDfAo7UVasb7zYos9mrmadoof8o3YyNMdVKP5VUP6kZAkWYoktt6JAamCMak2fgmTmzxxaUeCFx47NzzwzTPYv",
  "key30": "4UXGt8yczPpxt7awrXY1nQp5NmSnfuazvjZNsb7G7C5JcVcxhujTPZRciENPhcRB8JUEmEuVPMmqnM2MQUy1PDE4",
  "key31": "3RKUuUTaB3E9x7ZtFvSeJKWMsvRkhwKHwgPGkA9BvcSv13uPJMBcvAgPpbpWKHkMmNmEoDyeueMZQjpwTA2qJTy3",
  "key32": "5yjC5swkeFXGAsYVwk8iwMRNn3BTmv1MB6jcG21gPokt98i1xXKtECw9jXuzaTzz8uPP2fAR5zf9CtgAxSyKbigA",
  "key33": "2XyHNiKKwXJLX6zdQvMfcetZJTaJeztJvVeWZVoC9yoMSFkpbxmw7u5wrdUMSCDZMFDzutPDzJu8iHoygMhVzHtt",
  "key34": "5jguT8WJWJ5EFEeSVUx414tz62zCR277caHnz9oe6oPUMsa9R97pYc6nuJbrJRMQTWUzEpY99AoGenAMFDEatrNg",
  "key35": "5GfqM2ThWCyQ1t5Dq2iqfDFqgTzNSfkvuoEH3krZJ6AMPfG3cSWqhRydxE1Gf21eqNAu7haqozBSwNsMrTMhHkpX",
  "key36": "2VRT4JFpyYShXo5MwfBRLHdFwCTbass2nNPGtCL4QsuwfCddSW28RWJ4GPzLnKMwEamYr1j32V4qLC1VjLyQ3jNJ",
  "key37": "WbJTRWdqFWXXRNZx9vBTdoQmjqsnWBi4j5U8QWZRvhMZ9dhfzTLPoB17WWsXrnJrmR8TTm42G9ah4rw5bShX3nd",
  "key38": "27JVyhk8mTdEbuBoyjbHNqAPfBp3LZ8gLjotBHo9Vs6nBhrDZDhrU5XCDr1NJHCvyejDq885LHkTgVCR88zUde5j",
  "key39": "5okpbT84Vk6iiCRimUdWSbZeGjyMUmPVBetoTb5vs3Bupc2tVxdxAMZtKATVYjD8iPF8aiPHNrhaDXrtEBZ6HzXX",
  "key40": "2i4An8s79oBZorLNGXqgcVf4VZX9GSgZ2sFo6ce3RbHAQsVkKYqCjhpioM84n8YTWjVtcMyM18ANnMSw1ZKqt7ZR",
  "key41": "4MgRQQv8pHMoHW12YzPv9ZBvYvgefZqcbwwHuHDadmNbdduziPwm52BLgqZaTvMVpKRJyWVcUEP4R74LBzex4qfM",
  "key42": "2QaZd2jzNA9DmEikdZsE5yCwkM3zJxbs7Pzybd4EFkfKve6HNGTQ2tTcwmiFE1ah4biCaBh9Q4wycTisnFDDUk2p",
  "key43": "45YXJUJjQV2ZMqj7MLGYyVf5KzHUGBxi3mF6swWnzMeb1zyqAEtpxvkNPiHL3mr2x6NfPztDuPouELKQ91JKR82L",
  "key44": "2czd6pxoz7iMhAgtUMMuhC58pvrQEPy72qhWq2bY5PeZAx6ii4QhawLda3X1NntBUQaPi4etp9tNn5pAf1FRtpvy",
  "key45": "KLwjhv9envm7Ks89Ug3RLCoMrwFsRB31HbVHjzFC6rESPFoCmq8FzXSDy9eZV5bUoWeMNNUBgYRou2trf28y1Jm",
  "key46": "5MAppFUY6fmJ28unowzdwrdsGB5TDcdankHHhNk5s35Vi4RgfHD6CBen1rqsjTHKhRGV2J5zt4amWcSKN6YMGabi",
  "key47": "8VQLpJiHepetHvwZHpeooaECpxTNhcstQKPAqWpSxxtZK8ALA1kVymhpp8PJuXndbyNfUeMdQ462ZRr7nL4zsH8"
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
