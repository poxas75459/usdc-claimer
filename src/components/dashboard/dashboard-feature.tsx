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
    "4D4emwZxKwinGZbpYER4B6fRppLDLWvBPao7jdfG2UbcK1JC33vEHEhyfZcEdcPTxFZeofCVeErN1T31W138WGtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zXevBPGHHA28J48U4CH7nUUiJh73ByEubDoMWhtuqnjpovQaN9cTd2hBJYEjyn7qyFb3eYcdw8mXYofMCjQeh5G",
  "key1": "3tmHQNHQE7UX2SZkwsZnFrUdD7eE9DZxpV8zmUzfXdVLYxr6aNz9PpNzHmugMqJ7sPy1PWGQDKa3z4XLtL5CpcFP",
  "key2": "w5sbd6eoryUSyaDgUCcDnrJbyXttq3u8tvoJ7y7ydJmoz17CE51Yp4DyrZ5Si2vN5y68Kd1XTwnrRQQdhmeUXrA",
  "key3": "3sCpRTPKVk9r2TynDk9HE5KBJBKmKUDNzfNPcHQzftfK6BYudBFKbBmMsPH6YrcsmCgMEuog7ijQBED4UH4uuKjH",
  "key4": "4beC48QVepqEr5houGDsvzHCNfDUcbS3ExzcfeRnNuphWVDPPvNwH6BWozDn7FTrjyGei9R6yS2TzoNTanUevYWc",
  "key5": "2iVb4JxSN2Lj2QWm29MkTrSArNirNjE3sVrLTkYn8pcWJNb5rHCwzRwk3H6DbFEGMdGR9qoiy39CjSzx2HwxT9X8",
  "key6": "2PYkek9mBbQGQV2QQTGoA18UyEAcQH4GbKn7JAc4256c2Dy4WMw8fuVgUpfCoBY3pehJz5TQGr7ZrQmf2mQacT6T",
  "key7": "4xkBQ4jRQ9m578bfa7pHkwtV7cRhLcbzoE2C8oiF9ER8H1GSag15bMHRp3BnhHfKwGKKrXYZ2UGy6KSEfs62Eb4v",
  "key8": "4X567yzY8LfnAbbPV8zsrgDaVbAYDggh7KMQmiGdxCNA5BkS41eXPJ1wtonNgnBPLvcP8ZoZbYhf3FyH3AoxJbND",
  "key9": "66EhGaiWkp1zrhj7BFfvZSKhs6L3fryXoTNPbnq3pboXAskZy2H9WmzMby1SUtAXGzXRZA7tGvuKG84KhGZP9ysP",
  "key10": "2cDXWL84HQ1xP5VWXUuxG1XE4GUcC7ePRc8TwPg9QMPH7zQJg1UtJCc5wKe9FePDEPmdtZSBsqeJfSXG2zMjfZhF",
  "key11": "4X9RsnGhHvxwPPHuZMhKzjAtGnsJ45WAyJ37Bfh9WC2pjvJXB2ovhdbPT8VyEzNVFQ4piDUP8J6sMHjYsxTLnDG4",
  "key12": "2SjJLUyfu3tb9HfNwRb9mbPew5F2UctbqaMTUX8CP62ckSvmPeiBePH1q3yEzAqK2iJNPP3nowNRzJqJsfQH3wXq",
  "key13": "5dMwRdgWg63j9NRdjzYnS8SMyC6YKtpB3Bm5aNsQfT7s7xaUC2YUZJ1fiQ8mG9ng4Qqv4dLXkAykLnvFDNVhj9NY",
  "key14": "3LCvTMgwERSMMwfdKAvkvwzwCm8QXJMBfXMgDnNsZGESsLBbRC36Nr9ecqFDbtuP3pNWKkiSqLaHDFZJRgVmtbZC",
  "key15": "3qZKbpaqE2gjfPUCHoiqG8gtxJPPp3J6rwqcwZda2We5LPwssc1XacjY7z8equJTEwWaeqnaN9CbKVkXFQC7pHt4",
  "key16": "5fNaCT3d1nMsDtP8CYxPVZnvhUkjqd3ZEoZvnsLhhakH5V1FAcx35vGfW7Gz4BZ63myUpmDU4oPxqcJKELSH1cfQ",
  "key17": "25sqnP3P169LDQsfiFQ5rLrVEAHewhfA8BK9QQausj9aF2WTDQkau3jwA5pyNtAis2QLg9yHitqLbE1Fd7x2h4nL",
  "key18": "4rUTgtzdLa1WS8qLrPN8QesTFabQAgJ3Td4LoyG9i3KrTDF8aD3etp32thBajX2nhAyohHTWdZWRQc1QyW4CTnQ5",
  "key19": "NdZfMPkb11atCa7uKTXczhuCXBmsjCQffKMG9C49UkpACU81vyHetvWFZhBPD3G1xxXGXemQszUn7ww66vwmzaB",
  "key20": "2jimpYdFP4uVE18f9rrci12EbcrxJXb6n4jRMmQD1M3B6D1jtsVCmzZq6mup5ZFj3GvatnzqfHmFzGmcpHXJoPvu",
  "key21": "2v8qrgqYnxiQnSfZoZJCjL3EcWJwvVMpLNKa5GhoPxAnqEiQPaKV4ShTzoCnPA5ZEU435jLWTAbCFKkJcPhTpXeV",
  "key22": "3ffjVYhRVds8FHePFTcM5SrQRhce8eQy7ktoMT5rR15dqyPKZxMEY63Yv6vbJAVWTtjsUwrAGnSfDJkZ3oifMKEh",
  "key23": "3fqJtwcdfMzYJVkZrCNShpE26LDgY53drrUUaf17EJVWRBSe7uFtx7KLXQMZbM3BWYAB2QriCt8gj5hPDvsNVipL",
  "key24": "3yaQaazyDCd2GJs4GAq2PtLZ85pygadJkVwA4WefvavWSPe3XgDbt6J7v56GfvwLXMAREdEmcd3VsMCpRVGFTZDY",
  "key25": "59vmBXNbzRWcFtmDk3ogzS1gZFv1mjMKVry86xE6ZBZP7XUECi1n3shyxiR38jbxPpwkrrVNLrdUJAqoaHnNGs7w",
  "key26": "5tfamcoyay8xjJCYAU5Kgj4Kj9RBq4Kgxt3HSKPKe8jud4Qr59ip88tV8cs1MSXQo2ZXuqh6FZfUUWFxxwiMkFUv",
  "key27": "3ohgT52a3hULysvcEPwwpK6xdTVHL333Z6DgXATT7k8Au7gqXoMF4LkVoWyHSzkpobxYah2u6aXnoomen7sM5SBZ",
  "key28": "5zUs9mQARKFwP5GBRFpa2LB5xa1J4wZrNnZbWKkBXjFHEFLE6YSLKpctd3nnXxid8X7EnRxBKFDJEMEvZDKqrTX6",
  "key29": "2nxeH7CJ788FPCR7zbDSKhML6CnDyfL2b8p1F7Bfv7sLftjEDsHV7YMkWgP4NgSwnY3msHrh3Afs2UKYHT7Qp7u4",
  "key30": "6pTzEmqAQmR7nqtG1To6nQoViSWD6xHuVZk3b9DqZReVKwjiNFsqNbJb41iwjtvFFH6uGgFD7rnuVWz1mP4Uyp5",
  "key31": "4ZtgndeTCBVx3TwyTovgsupZAonhkkxp85NeUNV3b2WkxrdSJTTDm6sQ8W4v3oVC14HgnABhDnbauDmBDFZ13RTm",
  "key32": "5rotmHheeo5LQq1yLi24k6a2JxQSPiVwKRRJypmCde4KFdUH5NBHKT43CJ5UbQLgcWKaHZxvAqMcgPWR9rQqxJ6T",
  "key33": "3UCTA1ZDHjF68CKiEYAL2cBavUZn3yUWGQAMpq1vWZ7PXxArCjqpAD8BPYzFpzPMaSVHE2fitxZfH8u7DuZDPXpj",
  "key34": "1vL5pisiWawjGuAhf8heN4rGy6rtPm9bR6txQZqEnxhK2pGUXokgxxKqux5UMtAqpHtuLY4Bds8epyH3Xbtdqg9",
  "key35": "5JzVFHShrnGLZS7DzhL1ritdU43CdZXZhLVVjRoEbgYvCUdUE2DtttDvmJeex8AX8EQjgt81QYt2YWnQhrdtzxtQ",
  "key36": "34pGnBeLZKmcfeuFLiSMvP6ZoPpPrFWog5Sf3hDsqK8WbQamF2oLhfubU44HREwRDGFv8KcJHn2HMYHwZwtFEDsY",
  "key37": "5xbxj9KqwqhS4rVD8ssLSgfWWbT4binks3b4Ujcuey9n4CoG3TQ9siS1MyCwrfPg7ctL7LRwCQbvDKyiVT4K2mB3"
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
