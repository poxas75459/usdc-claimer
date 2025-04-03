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
    "53YyGEtnMcvV3YYKnkgMqJDZWazsomHshT2d9GbVHCV3M9HJx5oiU4YGLtrfuNCxjhJqHbe7yRx1YkpkBTcKLjSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vMT9Hq6yJEyiUW6TkHJRo1mQoEQPcCy93oGnxmCsyrg1PtUzVadydKn13nTTbjETJsABH7TMfBpasGa61DwK9qH",
  "key1": "3GQ6qQqV2x1M7m2F6sCsfwEzibK54UC4ciMoiJTagE2W8rkFkGBCAewAoQzbisrddeiVFW3hELZsi4Cbot5b9omR",
  "key2": "3gNNSBTBQdSd2tkMyXiHdDxoMSmY9FQ1S2E2CY7kfTR8Chie2P4DRidSAY2Td8LYo7AE8xuzg1fCEfsVJbd4b742",
  "key3": "2UZKMp4B3JoamVqBPYdKHMZ4zMPHnm8NgqPqZoFFcs71PbJSr5oyG1ZasaTrCyZwffPnzzck3x41s6JagC2LqFRs",
  "key4": "3WZmtRFaK9ZU6v4dtsmkJAMJCgwZFm8NP6dygR9vuWBaBbMxtBGoEcLkrthPCTTd3DxAmxsFX81yohQhoLwExGP8",
  "key5": "3cetUtUVo4NojX62NdhNEGMrSUEG9pPvRmdcWrnaiAsHD5ohmofU488tJUXQRg8S7W6daBx7rT5imq6VA89tYpc3",
  "key6": "4N3zXT3JebEP6Mf7qtyEULNZQTBzmmaU3GygvfKTPUMdusePJoMQa5Su1TGBC91RzwbWV8ewJfvwrwHsj4HbUXeY",
  "key7": "4nsVD5TjjGByi67RXUieeT3Mk2G89rpj1xfFZn8rycAvNyNwge2gsD6KV44YCjDoYEZB7oB6herf6T366KEr2DiF",
  "key8": "26pLxsjq3jFMyDwFiTA8QgENTwAnt4Ag8MCQNcofXFyx1n5bSitaAHjYxfGGgbmQYZvx1GENn8Y2Ps3kBBfi4Zof",
  "key9": "hT2m5Zcqne4mMJ5aCAurRRw42qtw9Gg5jp5gNi9uwV4w8rBf9zA8hYdF3X72LdrELT7QMVgEo5ug97Poxy4vxkC",
  "key10": "3SpHDyMw5jJWG32Dmr9TP6Tm3qVcDoYuHUMcGZ8hbnzYozQyz1TcoFBLRqy33AAjRG8p7XoiJSEUtevGEAgMEjqg",
  "key11": "33ayjDsW6zg17YBV8yK6zQzzZnh6jhJwKKQs8WAQMJf3DZP94ZbPm2Tag53GRy5GM13D832Xe2NPjUB8natbZMTG",
  "key12": "2Tz5yVx38EWoyiTeXsq9vniixYZVGzdocHZ6eNZTstjfiGyv9abLHcEMESdhyspFZAgAzAViwQLdWzZ5TddzCZHb",
  "key13": "4oyNUyLmk8xGtQgpYw3wwapwnWMJTtZAYDgjC72vDjYS8DBsUmrCzWX19snc7CcU9ovCWgvHM6WPyto4XYSX7Xbv",
  "key14": "eyK9rMkztGsZhgphfwFPBxjMhvGvKQ61RMsK1aCexJ6H24qP1pjzmemsoMFPvUjhAXcMtRr2w7hieECeNba65aH",
  "key15": "4LvTH9XtY3WpJWhc6bnNVGvMeSDfFnqSFnnC9XUzryj5D2UcECt7GKr3udPJYnz4XjrYMwNwEx2fuDet8tKz5oSx",
  "key16": "LDWdFkwthF1FhqdLp96mB2KKJRhVLtiDJFfgMebAnVJjuXtyUYFxvxVDaMk6Tu8FkRAbMvfULQzbdDT2jch4FFi",
  "key17": "43fnDA6XfyhYzsiet5DwZf17NvxhvnEBWjTx6FtKQwEc7WnRGn9ZZU8GWTZ1UkUPn767LvY2HT6LmJNTDzNuhWXe",
  "key18": "5GP7KpB3Gn2q8MFCV7XsLtb4wjSHr8mZBKVQAsogPgLXyk5Xp4qEWKqhpsnfkZcDw2UkX8kEPXJGVLdRGw56xxvV",
  "key19": "5b14MovYQWQxxU7F5XpQhCoDQSzGgvtnGtDhwKTDwaSmTUHAQjsJ5rRMWbcJFBhU1JZns3AnTFTyBCkWaoHXJ2L6",
  "key20": "x7KZeHNR2dhFQvW7YjavjHKZGAfrg2jzJpWNZpnogvmgqEoD5hsa4R8Pom8ANhMX9nxyKPZm8WmFjdmPPV1zKvm",
  "key21": "5TPTJLAiK6bH195fJc3dbMEd7ywFdhYb4jZKCJAwTJGaBvR15ZKUJQXzZyFaGSfqSzdbB1U6jgy7YWvTVcSGKFEB",
  "key22": "5JVNhEEvnPctYv96ge9kHanjy19TWCRkYJeZr8H3tQGGCoe5xQa4sdLcX4UCSTCdSirivdXn3GDfVmPqvSavGGKD",
  "key23": "86TyYX6WFrjGXkeid3ZWFB8fnEDauhMK36w71draq6Mk3xEs7KoUVb2EoydtQt45tUCAdguMogDcXkz8mgi2vcs",
  "key24": "368JrFCw33v57xUt6w1yiBuUGqEtmujUdzY9mnEPYkg9eoorVxcbqCKYT1Fo9FKH5gZNZ7TfMQoxy7jFWfZD5iKh",
  "key25": "2V7utPUkwtHYJ3edoFK696R1kF5x3PiNj76cJ3TwcfxD4naVUA4syE3m4sjEWKscEMpmT24jNn9u2gArX8gumAst",
  "key26": "2jVe7iYPXFShjHSFsPT8qsXoNoN9zQjDVFNUsbSX4LhL4xtnNRwjBR8f7Z7EqfQvsjJNGM9gDcSSRHNKTGmxS5CA",
  "key27": "552N6EzR4U8Uf23yY2N2h5fWgtAm5rTkuxrYd2oF2ay8yhgJihNm5va8KVFGyFLnuS2u5kf4ZBG5PT9nAysShwK8",
  "key28": "5rriWsmsQfuvkGv4vPePCmQnnwJMR4CvrFkzgbgmkWAWzYuicZgnBnityYcPcwUfLeyBQ525zWpbkVQkX3L1KDVW",
  "key29": "4d6pbNQq9KJzwZBBurqDmZqfJoUKorgCSv6VoHzTPd1GNS8eDy11r9fwkc7CsEEKvuoHc9X9VdNWec3y5ovDjgJK",
  "key30": "5THqbvUdAQb5QUvHaZMKuZLJsvNiuw3R5wSof9DPkzk4tjSJParLHCPcq8T189v8vnZYsHKRDucKAzz4iChp1mvt",
  "key31": "33fXHZymMjomF53dxY5Jhg23ZzTVFD8zMdusX5nTTSi8tKboN4WscWJcpGJhXm2uxLDpyMhftUVmiBL7kdYrPu2P",
  "key32": "3VZtRR2cy6KneLEsefkniG9Y7DpB7Dvy7hy7x5akTaEAeAUdAU4WNN7cS7rmU4z699mCGia1v7kasjbMafSWQ1qL",
  "key33": "5Cc2ZwbfAFr5E3LRa69KycM4Q63eYPBu2FeNT3Cx2hw2bu3NsYCXf98Lok8XLd6vNZ7qVXkgoSs8FP8fcFv24ecE",
  "key34": "juhVvUdECDUifReKhHas94CdtJ77uTmpJuMkxLEMmdACbds63kU95KJJPZrtkKRbkWAzQJieaZVhUQt7wR1ptAS",
  "key35": "3Hir1i6jfmDzDA5sMwbiKzXfNAoJU867AFbMWPTZu4YMj4QuakuB1YcdBinveGUCtxGSBZ5S9vyjqrAVh2snMvjL",
  "key36": "5tLxdWRHU4NRdii4DCFsB2kchYpeEGbrSZGeSVmW1QfAfkP2rRHKwLpfYvSk5NSW6WbtJpaDLtmL7aThi7U9fc73",
  "key37": "2KEJCeYBdPEoVi9ZjKQvtBG3qMBuqDK4FgDvfGLA6Hsy1B5uK24YrsRpH8MBpvkxsB59fKLPJJLu5MJivHxEwCy6",
  "key38": "Gr9mMkjw5c3g4in6qW2nrbbUec5em4S9dDXnmoFB3Y1xEmXLQAKtd3cdqGuWdTBBJferk7WMBCEftVA2mS36Fy6",
  "key39": "3k4AjNUxk3DjNhipMwWSBrBeGtxg1ZWF3GAF17eKTU5xTd3rFwQsomMamq1FDQfpKVyNgmWUtdcZKkSC4PbNnbhz",
  "key40": "4WsMwrHgtiHpefP5TCFjWfDyFUXBek3nWcFjLNAbokuS5iqYew2k8y13dwCsTZCtDNX6LTkz3vyzj997SmnnFHa5",
  "key41": "5keaqtsv28DVvvQT9xGGGuc3kL3YKCdAbBzFHEdu1zjt6v85griTosjHRYxtqr1AUDh9Q9RmZfw8rXxuF63CwEGj",
  "key42": "2B27JCZcoNwiN7AXzhyLAitBM9hEPCagwQAkgca44qKYwxZthVhnzxc78KR894eY6hfKkPGwSNgqFayZEiEAivee",
  "key43": "36XMXnkGFGC38iurHmFhrbnaEgHrwessWrr6XxfDkcztCBX1S4vRSxJXiXF5S6BhtqkBnoSMFpgKbNestCkA3qjz"
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
