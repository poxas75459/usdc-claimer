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
    "5V37u9MCy6LFf4ps3zgNQkH4fkeCy61ep3koZSF34X2YxJ2LxRiAj6p2wkgwuW7APEPjALyC6CYmD12CaRQaPnsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "124yJQcrB9BY6oaZ72kbbvmH9NnvCiSS2W6r8NsMm6EuHTdNj9ZKsHSoLKTenPLvEcduPb6o3uVTR8hsSaBFux4D",
  "key1": "3eRHBiuwrqoXkMouepovfSEbUDohnHVBy3hfQUrx4jV7iAWSbHVqF4CTM9J2ufergrQm3tK9uZZsFfooAMGrZ9FH",
  "key2": "9fCqM4V1w5peAxYoMTq5FtSFUGiLEbB9fTMCvTstJ5NpPKftDon8XAC7EB8yCmaQNr4bx4cqcySk4PH6ok9YeM9",
  "key3": "64Lp6XLCZQimmjARc1NpDVVvJhf1VkMpnEuux7Vf6CsQgSfmL9G6FhrkGz8brxgLkLxUd4GyC7ycq1fGXGLgSZAE",
  "key4": "2U6Me5MGZSquWQSYgPsVkcGaBUQkuPmRn1TiMSLuakzvSwuY3D5XB4X6zoXYw4hFF577b8MQ2oLv6knMcwsAX4ru",
  "key5": "4GMykMPkxeKDS8zNaDaW2hTr2xH8qqXE5J1UuFMbts5pTR7QjKLxreuBWE2eMTxfkEaMLBseEnirgK1nF63d851k",
  "key6": "54ZMUB8Uph18wyuMyTK5VnURqusvSNpp8dJ8Z7JQEk24FuEFUsxTShd4zUfiJsd681y6ssui5U142oaeDz2r8WD",
  "key7": "4nCySm7hkQn71BAtFqwbmPpAu9vGPdpViPrfnvmHCj2jjvyBXxd1BKSnx2eHi3oZnoohfdQSKtuu3xfipq5hNXeL",
  "key8": "GGqySJF5N4W4CTuujgF6pZBiDogoB5aBLZ9VV5Apa3yAKqxw7KbXVVSUi8XB3VeJHqtCBKb2hRDAivHch7LVZLK",
  "key9": "2gZa2suU8UtbPke9mqC2ACDk5HMLfUnNChQX9kDKsdHv6fCLdfEJ1EAjYQkkd4sCM2x6v3i1FEpDYE7gWCAzC2jR",
  "key10": "3vwUMLZuRefBFUB5hnAUS4tJMnBUo2UXz78cn6UDj4miREGXXZau2C7KEF86za8xMwsCwXq1JdoheDBTDttRdeJs",
  "key11": "24Xe7T5P95dKBUx7BNQCb1rG1oiYVVJD6ZKKcDApD689XJgoLx9Ro8qgHoai3MMxvbe4YEQqn3P5RnpWmM5xfnUP",
  "key12": "4PuVioeLmAuj5uv6rTaeGRL7hEDvmvRxxbnyE6pAShfBcxcaF1JKqaPCExp5Y9BiCQaBn7dTWLzzxsYqPygFoLpw",
  "key13": "2TN1q8tzgogykzEpYV6fjRB8UJMcVpsmLtnP3AWroAKcKU1W3v39dPFWVaKpuWEanizMZwpz1AVbAsDLEQooYQZm",
  "key14": "27DupDT8AJMaxSQaHJwdVaAeptBnMuLzRTj64tZ17HoMaSqfXb5Q2GRFxhNPSdsi6UvCJhhRPngarRuKGjddPiwz",
  "key15": "4aqCHbhL1VHiE1FwUghAQuFMtY41vFBUYxMKa78EwhGZ1GTFieHpBG1aux1g1HcL6BwAWmGLqfANzjSuDSY2iZNp",
  "key16": "3ZwecJJNA2hbwC9eP5dqp5ZJma3jFErTWayXbXAejyEh8Mwb1ESJs1WbSYrCbyDtj5coJDwdSDS3umE6t86v9EEM",
  "key17": "tH2ygrX5KCPVeLvSAGXesTfsKFsMbT411LEhFVw6ZYgSu4qcxKiNvTnudgEWBXBty6q7yUnSce1LSgQfWTTN6Na",
  "key18": "2whEvQvkUNZ66xS4N6AqxVGnzX586GDCJAj9FXePg88yYSWB61qJ1j3qf6ynXYhJk6Uoej1981wMja4TUoV4mPdo",
  "key19": "5aMnUcSLHLd2qnKBqKVs7yxAMPkBGZXZRUPhk4RYcHLVZiTcE2TJVVGU15PVcW59F8DAwBkj1oCvNTW3yPKySWLk",
  "key20": "2tWd1WUqTsyc3bMePurzY2rmTFjNLz9BPaCix17M3HNcDFTicVmVNsPU7kQRwcfsA249fzuwBHFaqVyQH5M6boaB",
  "key21": "2keQg24cr9rXUdCJeZabdLhtUiYn3teDCprpamz6ezvq1qJ7j1BJ5iAJaVKqpofbmQQyJ1kQy593r394ZxNeyc3K",
  "key22": "YeBQpwWHMSmxJgdEqB3NajoqdWyzWEZfKLkpX3evAA7eNw591F34iNiMsGMGtNz76fRMnev21sY5uuG3V3oGE7a",
  "key23": "4quD3SsY9Y2hus58Xyw1adaApb6uXNauqrhF3fjsj1GWECy7pKUwq6iC6FmjL6K1y92hvAkDCXgxrt96f8DS35VL",
  "key24": "4rsvZzY3eiEAxu5hweJbYmWM3KFk9S6SfWRqXD2QKv5MqkgpxdB49TF51D9sWzP2jrEvPjftPmBn5ugYkmH8zvhf",
  "key25": "2N11Efcjmrr1mVzgFNZL2c3WZvzo9AizwqFRA7furQoUjf7hiTFpVy7X6X6p4XMLh3Zp5sQnfEgnozf26UUuGam8",
  "key26": "2Ehv7DxQ9eFRSWdpzicfiSzqysjt6p5VVytvYAsdmM9YcWiLseFQyasB2qgg6GsJcVthL2pJoH9dXhiBzMiecVj1",
  "key27": "qGcUn6zPEHEEMZHyxDmqJDUBq4CpZRWBeDoXAeKX8izeJCUferAJbeHcMvSrSHf3hEUJRFAaJuKxRESjb6fgSCq",
  "key28": "34L9gGwqKotfKNgc2ZGG29K3fcmBKbUVaceqjg3igcmxg4wKL14VLDptg1rdsEBTuG5VUjvJX4kE1o3qcGyF4aCx",
  "key29": "673drKdQxBqJEPsVxhPegpe4gzquJKaNjC2aVcYNtwgtdWthFcC6PEhrPyf7rmYxCFVJg5Jh1wcMzLyrf5CgtBj4",
  "key30": "2EyjLeKcYADJsTqgH6WriGBGu8APmX6bRCPCPdiEfmn5pVz8mzMp4oz6TBcLUZP29eDmonWLtXAhpXTEQ3KeEzh9",
  "key31": "FVDTcreYATFXMQJ78yafNTiStpoQct9SS9Y6txxwMJkqmpiWDPBLx4HU9KhkXH3doKE6KfWAfVGCLh7RSCWcJUK",
  "key32": "3QCH8CGbXG4M78sWkqcNKzynN3qnDNDgtJnrmU2eihEycongeGfxBe9w3F4B7R5ugVdqVix8baMypkjq1j4Dnzo7",
  "key33": "58xJB5zjvwPLSNGpadAbFkyJR7wXnyHh7RxoaGNwDyUUcASzbDGhToN42yuv7yzCcAbY664J6uV7XsSYB8bu5t8V",
  "key34": "2PQ8q33nqnjVbmo51SvKwggwMroL1G2AMMWFyYE1qhmjLJe2MwxYfuUKM6j7rhViqW1zX93ngKfif4QPPRtts9sy",
  "key35": "S82XoqiaPr9VA7ChsYd4ryigLbbxjVsB8BrsCDSdbDfB6F4KTH2UanA2SDV19w6N7JcsCGDxwjc41uTHu5CmzTt",
  "key36": "628NpJt4CnRewgkmGPpdkUCFVsciTTXszpAcxBSAHi768fjQhXTF2hixhBHFthQx4Aes5FStCYrKbVFgF82jT1Dr",
  "key37": "4qca82nJ91djrzQzJUoku8FVCJBkMtmQA9o1e3MA4qg2eAhxW9DP9ULmuBeJo6huSu3E5uFRbBGY33ctGPhbMANV"
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
