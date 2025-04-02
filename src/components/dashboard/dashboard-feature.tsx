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
    "2oN4nDri6yhUL9bssnv9CAuspyzrP31CKT4nxthHiBAsFX8xxaHndFUCEAVsDrowGS35mTcGX2tQACGCemiNsY71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5To3rEtRMnh3MoLDhWGuanZ3HKybfvfMtwk3u5nifSi3h7JRH1ZYCYm51ynyLNM4y8q7VJQ8c9T3Eyv7PmapM6a3",
  "key1": "4MrpEopiAdHyYEqyAPZxZZ1SuEa5V9GNCVTzrUTeEvXLubYChPxhnnziqKwn2XW8zBKupJVuVtR3rzqQ7QxVuzc6",
  "key2": "66jUNwvChVGRqogSJyzTKh23fK55QRWm88KsdTkQSKYFU3iMo4ghCWisWePc1x9g5GXXaubVfLuoh43HwFB65FHf",
  "key3": "3GahHr8ykRx1iH5poZ1rDz1EqmAjc9ocfhaMrrGutPvroa6kuw8yKtG6FviT7TY1GqUyBECr72CAKHxULTRCMqow",
  "key4": "5qsjSUhDjbTn8sWpgQsGyFRPKSZPC1ravwQLb42QgcA45ze7M5SdasLY92J6WBpHiHiigF2c87fikttz9g1jmr9m",
  "key5": "4Z4vYziHffcBMCuAXe6Wnzg4XLjqCzwSxX8PweqPMx9KAsqfs4z9Ey5cfiE5QtTZoTku8TJS4zs8dQeNY7WEtteK",
  "key6": "3vQzu2fwucuBAD4uXPwYKwSU8ji1GSNQKd1qLzJvBVHDRrxdQHcE1kTApNhZMDS2zUXsXH347TP2UyNa867MXYpM",
  "key7": "qcVAArPybBASgj3Y3jaZS8h5Wq8qNQbTHk94dSZyS8VFtvC1ru2h6i4XNkqpcZosUb3jQNwbGWZTrvsQ8azGWVx",
  "key8": "4HkZde8MfU8FxUSrEK13PLvTvawGzfJVpL9igYogf57TwfEcMwBDhHhUYZ4QzvD3JutiHwLtezfX5CtrcCmeMU2A",
  "key9": "43dWjAwrJYnx6qfSG7zAm2tzQkpcqzcFtBY1T4PRgGVdpZbLCrtvfA26N7LpvdTZXw7Yt28TaWEK2AxcvdDwG9Jq",
  "key10": "4TVU17Hf9Wca8UTgWxB84JthoaA1gTnXJZ7jt45LzZWu2cbxsQCYp9SMbLetbwCnJXTybrCmuyxRSiae9tyh5thW",
  "key11": "2Yz91NfuvxRSnfC6nXzR4TmFDi9R8ociu8UUxTfdMTaeKVNWucubVtiW3D4cqQ7P66LdyWMzBqdW5muy7V2GQBZP",
  "key12": "C1pjfNfsfCcGnUGVakY4RhYGbRijP7wTqQ6s8gvot836g7L37SRtASxW7dxnfxB7PjLCgWLGoZq6e8Le3w3DhJA",
  "key13": "3XP7grXCcAMrxqoTu6LmkyVfX62io7FABKhwh3uyRKVVGEGYwTBGFHhJ6ZWSadibCWy4FfTRoUh273vbb4fjFAaj",
  "key14": "31ASB2FVx4ySaLDaiZzYcu4U3YjqTMsUXddqHtgjg3VXubRk5MKS6LayxSe47U3SiYs35QexQXx862oRvJJET2ob",
  "key15": "a7HBFu7E2LwzygMHMzPK7KvZgfEcGYPY5XzE4cHS9XUcPnxfJtJojGVRq6wGFL28yF2mAt7h8YmSQVFHGfaRyVk",
  "key16": "hLaEWUgdG3nVkCthukj6Wku4VM2VRxHHjqYxZVbkezMxpP4boRuW12wb9u46NMDHx9FLCUkGPBa2BGpoyQBgic8",
  "key17": "22ZsGK22LygmdcYnAtLG3XL2jpR8idyeNBofN6HM3y3L8ADuXe7dHQKVcaygWvPZAv8gtLwxnwYX4o4aoNC9YR9M",
  "key18": "2ztqnC2zobmUCWpEhme6vNZZZaFdSLwszUwDzpGkq3T2J2RpMGDGVi7CgDdxpGXFSAV9B8vxKyo5RMhGZS95GwPJ",
  "key19": "3eF32APCDoyn63wYbNkmLnnacJdSBJVTG7j5aQQeeMZtuYK4oPvZTaxKdxqMRvCMSN7BPvJJjmvnaCYC6WJMcHUe",
  "key20": "5cF5yBj4omTGmWcWyHJuTH47eUX4bLWMGzhjmDBLBK2TQt4MwdokQjE2v5jvre845itCJLc3wXVY5UjuB7bHzVo1",
  "key21": "2VZW2pKt5Ui4gEfB9uFXVQ2URjr9QutXXrAkjvD4V7Ev7Ci8abhK4BCaGojF7BGyov5fSFg4SctfRgfoeZKAC5Pe",
  "key22": "2YbTSB2mQqufPNiZh8WAjELVhNzrCMCDCFc2SZ2ZDYEDmx9rxhgiAzBHu1CmhTyQrF15i99x5A5JKqPq3cYN5hku",
  "key23": "5EEWb8XLRcd6njzXweC6n3tVgkEcMJpEYo9WXiF8kC2pQGwHj8Rb3mfkxzPRtEphtjXs4NuY9MXrXAdHsDHweEdY",
  "key24": "2rMFKQLJXtSj9SyCEYV48kQyo8rbqFAjj46QQL9xXtDc1ARxnT4bHzLzKRCRjMynxjJh95ftVicrzxb5LH8Psy7B",
  "key25": "3E4XXrLMSr1LCy3NaBid8zpDShDmh2AyPyRzpuYNmXX5qNdPqUNpT2roD1WfUYHo9xQUwysrcbmazJo4uxmja3EN",
  "key26": "5rMgNJhXFPPV3modNFdUW9p2N55iGx26DQ53CPeDkL2xAES2nGnvWVjEw5EbSf5AkVLSjYwqoTiL1jYqTceALktj",
  "key27": "4rd7QCioxtwoebLU83wSdgpkK8qHvvqcJmMyMpWPmsuruBE48ivymEbsfxFGem8kbLDy88ZvnhxzsshUQPWAqMYU",
  "key28": "L7qCziCphR1JRXysHyuiFjUcZAsEokUgZoDxACfdJWBrRekPchz53Bjfpde1fGReEQUhoMHWMBttwu6pFd7WdHU",
  "key29": "2M4cbFCYF14TPRBJhzntWzx4XD2GaH9Vciqm6rLpdYCT6hxLvnjYVz1RKfNeH1Ka2ciyh3DWxNh2cWNR6sDyP13E",
  "key30": "3MdtfXdmMqwHgudPDLLpLhEE8YjnQQRcYq5Gu44Xi45NbUvuTKnQkZRExtr9RszpdUQYVeeCn2FRkE4xbGFKYZTS",
  "key31": "3pP69yyZE8BiGp9gdVtsxAvV55kR5QmeVULZYrs96uLRwPMd1YNhbc5QBFektjGVgBhxpFobykbeYFTHEWBgPHZN",
  "key32": "8xdJXKAHaLQUma2q188tGQoJEksjrWiNcXSBXt1gWDuNr12EVvujaKYLbwG9okL6G2ZqZn1jG1BX6JGPhnD5dfV",
  "key33": "4UN2RT8swU65xTJPC8pDu3mtrcYZk9HFbi4ztbCwgXrKrUg72DWHcUo9mRpTc5G84nM6hKqnXm3Ni66BmvNGSRTF",
  "key34": "3L16yUaQbmMuKd1Yb7e5v7fu3XKLzwB1YLu3rErfMbC4VmqHm31QgJrzt9CfRG4uXKrSVY8Z26XXm1AzkrVDSWmf",
  "key35": "2HWm1GocCjPjppwkiE7HpAP5xVWgK2CuVSBM6qXE7qXEGYEJKcHJUKV2uwy5Z3URNHGgVvNC5S7m5idebEeUzRRr",
  "key36": "4nkomkLhuE4WSymrXAHTRsavCfPpfSupyqA38G4FsPH5X8Af85CCRL2LJvCmAiPq7KWFvjCdxjV82TA3wytQU3ia",
  "key37": "3QCaonFSzBTseq8UquJnCXxk2YxYmKQNTnurWoTTQEBKqLmioHFbWmzCHc9UUeEnfqUeJaXgGCKi3pxZhezB3fzL",
  "key38": "5KXKPy8JCZZ1i6HhzE2BcjVH9SsCMm1eYohak6YtwseBXcps1PNJCbcrbcxhuKimZB7ZWJPxWV5L8VbJb5DFLUUE",
  "key39": "43y2Q7J5jx7m29fMX9h2kNPCKnpRUpXPpe4qHGh1bhpKjUMJQfUQXW6CmAPgX1BQu9ez8NWpsRpzMNNMmT6HX1k1",
  "key40": "678QxhSXzMovpfioF9w69xETEhSYSdasRaJzx95WoHTbkZ66bztYcXJqXTdzJ17tfFyixttD9dnmevAyX2nHoR1Z",
  "key41": "4R5tvAHTsXPSDiZQF5Tw69ewya7urKy8w8HFAA9UZn6pbfFUo47qrczsXfxq4QRQSj8ykpDc1QhFCeFQ56UcABmD",
  "key42": "tGhD67ppkLzGmeKyjDXnXxsMrWkn2dftRXcYPJCGYnpBeJjb3E2Dudx8ubiKB9y8uqa4wQdyzPYScM1p59E8pDj"
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
