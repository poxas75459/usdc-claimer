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
    "2G1e2YQtfDHAR9uKsbxqiQVMxqME8z6hi8i6k9M7guSdXAVzTn4mEUW2d6s5jAjp8w1KHmZNhN9sgSiMVLSbCZUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DDXw1vsKUs84WCPufAVvvdGi2iBAyofE34FZTaYnxthBidtHrRaqh2qB5yGrScuHH8zfXR3eAhJya6nHMbAtqdf",
  "key1": "5S5yb2CXHNqkCgTMGKVRoANgVWScSwA1LBgWmnMGHWPoWq9kVQFwByAn21iD4UHZxfEFp6fDwbytMH82brgU1tjR",
  "key2": "5n9iR2Rf8KjFUAHRpaNU3BAvf52unwsSsqc1uHayUCficwcFqenhLK2Q2EwVZupYt3MzE3wGVgFRVE9oTT6sLk4y",
  "key3": "3E7QkFaE58CA775DTS9zhbL4WEZJCdXsAPoFXVD7j6sBjRuE9HqcP5Rbqtve3tDUSVVPekAcjBTCFF4cC65zPdp3",
  "key4": "4XeheLxnq8C4CLFc7zmwhPmRumpTbcidfuTVGVArY8dAdpeMLNaDgdQjTe771hxB1FiC18C2PrXeqdgni3HMV3aA",
  "key5": "2ZRM9Nz5yDQcBQPBFTo472MYswdyd6UJ9eAUPkvezjTRwGSkRW32P3vWXWLPJ3F6pLSm7pedVJEPJ61jkfsLJN98",
  "key6": "22fBA9NuUuykvYZY8zmHDz5i6s4z2q8zGEVd7ApW3qiszi263hhiVUBq3ZKzUfque236sPQetiBkTmGg88LkZDow",
  "key7": "2mN9NcRSkmcz6nmaZ6sx3D9XPUq4P11ffQTxZQp9qmfSZLf8N6MR7vXKcQmJwPMfgqxjkbexxng9UEFZbpnGpRT6",
  "key8": "4ZPNXhLnJ3oAs377PqubpoSm7vpzQdinyVU3mayPCeLmRnYBy8gTK6HQ8WH3PQ32avpwMgFnCNeoGBeAMoSeyxWR",
  "key9": "3pFVR2NBxbYSzaW1Y9o1SeqGZAG2nSQwQpHLdDiE3zX6gpVX7FMGiTMsjSwm6sAg6vmUAQGa5WsBpwtd8gMqk4qg",
  "key10": "4aJ7SVYUZaT3ZYfmwAmjbmGXT44CxRTq2KZRBjdc7szEQqB5nE5C9fTm2VFTtV5se3fK7H2fDP7EZ2WGCMkJY3Gx",
  "key11": "iDdXH6FVybH9xV692mpjiCT8AXw3m8Go2xiNbwJPXaAsp5a3uocRk7PoecP4MT9931adjpNThiHUJbLTpEk2ZZe",
  "key12": "5Evg4JgCU3846Y7SDydqNNHmZa29mVwsVGHhMdjWS6LRVyBTcgm5HX6xeJGX1wUvQDzQdS8UCGEeFPJKqidVVDun",
  "key13": "3JE7mnGDEHrisqfH8hLh1ijy5ztEoGpA1vGmpTXYr3f2HnPynwo1X49WBL2H95jgUkADDw5K239YtocjfJPbuo6N",
  "key14": "4ZbkZGpeGeYYeGmK7zu3GFshyzBg6eexFdEGuiYbsSyszQaZ7L5m4ac9LtGEn9DTPBmM2ZZy5TwvPo8xgfoFViU4",
  "key15": "55VhmrLQW7iTHzoXzm3sixRZsrN85NQsv4f5bXTK6tt6CEQra3XK94geNMSeW2tWen1kLj4hcUwMemXn2MjaEeZR",
  "key16": "51P9wHYcwSbXu44bwPf5oHTQNstJWXhmPPHRaoQ3gPmtukAVbhwxLcecZF18XgxeWXaGujyoB4rBfma4d9EmwpC3",
  "key17": "TMyPpCiDq5ZSkNZaJMmnKdaTo9P1UovcLvCx3Tab2Q8AVgRDFz17YPMeBdzUkRo6bcFnVEN7gJHxACkwDC1f7av",
  "key18": "5onDyoAanqhkDYWZUdZfdSfv6zByuyE4mZyYKeH5GjhGhENdiFBvZcL2rzLypqqSUPciczvVK3y9eQkjqKB9Mhnz",
  "key19": "46tQNsdEnoXF3QdjDcfLEnJpUcTprz3pYrCo3BYxat9Q87V2gzqYKojZWpQp32pRRNS5FwRC9wAPMQEZZma1EXwL",
  "key20": "2tmJYFBaKkahy9hEHBBbkVF9N2odDhzKoRJMrN34JD7ZLNTE9DGfdCb7NJqxeUwyuqr8V5EmgjK5dSNeCEDzFety",
  "key21": "5Uepzq2MWH95QU4U5CVmRJRUdz5hq2rgG3xxsvQ57GHCKbPAv8qyjRLLjQrbNHuZ3headdnYcAQAW3SQZEU8R9Bi",
  "key22": "ypwaL7ri4BBAvp9JJFC3w7f6YHYYWgrirb5Ebi2EvqGk7mgRA8bvnLK2kur4tKB7Yk4JUqAxHHnTJaWCNrPPKnJ",
  "key23": "4JFWV1dtyW22x5NF6MU5sSEih3D9AVKW54mk1dqQhzLvjrJmeoHSBcUyjQGqpfGNmCLYbRo5VTryfdusZvCw1DBW",
  "key24": "3KZb98BqLnXs5MncjEnKgvXXV6NndoyXDDeWfzpWS2vx3ijkQ7tZRxMshNA8E77VSrsfxHF8UosyeT7buBr2edKe",
  "key25": "5WPYuifwq91BgLtpnjifZ6GKWswYdXD7S5ZupSdEYnCPzhmNwWi4tS8Ah5m8p9aWPJqNKZWZB9aXT8PLHLFKrDV2",
  "key26": "33BnLz3mR4dewyVC32Xt4vXs5p3QGHyqcgxioGY7J3zTZRGoas3JyRNHBp8AuFQnKDnhaF5JFrRJLHfhUMVdWC8a",
  "key27": "64Aesu6qa5LduWbgLZDkNh1GhNxtY87TUPMgKW9ZNN3TKr7xJMAXP9rC78vvNo6RRzgbDVCk2RJ6tEFv5tedJs2f",
  "key28": "j4yCRaVhUtDG6EoN4e7PmF1JHZ86kshStew1eyxL33NqXd3FrK5TnqDDQC2FfdJJrpFZEnDYjW2A1Q15kEQPuRv",
  "key29": "3QLRV5ZBZWa1VX8iebJUFB6pwqugXLQ2HMV9ZspNM7esycFzMDkaf687ZhZtasJbeaUfHBjCLHzMavZAd9DsasfP",
  "key30": "5kdHSKSdeBVT8tYVaUVCfXppq581eMTnZft4aLiqizDc83mLkdpakxD2KnTkzmdPuriphYFuhwaJ2bHxtjun4D8A",
  "key31": "2pCe3ieCR8QfkahkoXUtsCtphL6NNNjSo5cccLEDTGi59AXjCksMgS26ss5YxrZtcYhCs5DQDuv4hh1U6534ZQrR",
  "key32": "5tDCHUaFE1EbvbSdKuBFLW9oH9RSQEMuPvv8b89CXp9wkRoZW5UhALK9WvbNW61CLPkEUaJtx4TXyhGqfMWv4sn1",
  "key33": "2fEdyJpRrmHwBkmcT2cxmfGJWm3RGi9PCBisn185u1ENnvUBjz2AVBQ5MFhjauFiexXCinTP4doL5oD3KD76kzmH",
  "key34": "4nceuAVEBJrnkqNwEAtEztP7NwvbU43aysWSVDj1sXj6ymnRDF2rHWuh35yafUk4sLT7ssQSGnj6d2MaghVcyP5R",
  "key35": "5vkQMy99skCTQu7pHS9Q6fLCaJvuZjHR4CLhnVRy3UQYTefdVBaUGyawa7Ez6M2HGrSTm3SYQKM3PU94pzMH5vNw",
  "key36": "4bx4434ysVkos5i4MTZSgkCp4yrhBKT2BCqRtHUPLMAMJffTG7ky3r57zFsmFiAg1w7DJw8PiSC66RrPHmUxYxL3",
  "key37": "5hoSP7PXC3YTfeeefLLV9BPvcsCygssMDweWJb3SothzPcEbDXPspPUsHk8SHfPgB22cBHvnWixHUSMaKVhS6o3q",
  "key38": "3oVj3AjWGskuXYCC45EexYgbssUWvfNX6ZQbG8X6KG2trgZQu3DxXNYxTW95zwAq1zbbgtPhrqiXMkNott4G9Ga",
  "key39": "5ptHZErpyTuhHUMnJfxPx9RHyfD7MY8BqdBE4Yt8JGL8rwAn7HegjXd6qAfwQ89jWSdBhjv7GJRXTchENYvU7aLY",
  "key40": "4SdZcEAQQTbEFFxtnRRvoSSCCsk9VYff5FCvMi6ezUBi18NtsvnFeuTEJecJ83bt1ecwYDF2GrFJJamdwFbZs8Vk",
  "key41": "41havTPQqYxTMqa1U69MRGr4e9PtkKz2VmVNLHUKT9qaWYFsEZpK6TEcaVWbYkFgTQpM5X8yrF4Vk1fF5MYtrkU2",
  "key42": "3QsAyBEtFwsx4b4G7KfGNVghiF53V8WMVUyhGwBTxn6vinqW4UkATkKtX9iQznMkCmkk9z2S63NfJVq5H9FFKRrG",
  "key43": "bwFX7uL2fS61rWzbfxyeeUkvSzaj1dBmnGNgzhoCbNSMNisPg896BPhxpzNoErpaE7VAjDSxXLxUDL9j9fw5jeu",
  "key44": "4MgrQrmsvqAswkRN4EJFd8P3Qkz1NxvJUQNTQ7HTJu8r4Dov6W5Cya8k723JhLg3TRx9zrSz8ZX7tMSJLraqCGzU",
  "key45": "47MREfgLVNWNYvh3HWMgJf1tpWydBAfC2x2qAbPFyyd9VGVQrW1VmF5u8pNDMS7TjBFzL9kB5oo6yzhPbKRURFzB",
  "key46": "1251kS5N65rqDBf76BBpfRDghxwZx2MNqzajo8oX1qTD7edRNer4nsRC8a4UeBwQ2R4xbab8AtfMXjhCk9duR1ct"
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
