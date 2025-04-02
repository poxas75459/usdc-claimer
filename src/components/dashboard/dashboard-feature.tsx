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
    "zU9YeKYoXsR8MUJxfszwWrSdEd9sRoH1prhxTS6QbEPy97aixxzbA6nJcdhbWZQzixXd3CCSYeVgoHfp3vr6F9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gamkYYtdwe69ZgyC2uFvxKJwmtYcLN47VUHWDxpoZRF12NXaEvfD15LLzfSWHJFJ6RT39c7f1xam32fLDwKg3rk",
  "key1": "4nDEiwTnFWnzezayHw3qADMsCMJ6sVcUMmY7oHytFZ6tMnUpRh187YUv4HtURNy5pNmwL5uxFZHr7SRJqGTLQXc2",
  "key2": "42mk7Aon3QcowfyTQrv8A7RPP6Fc3t4gvvUgTYipqhrW1yJmuv98oygcKpYm2huqVLBZnkW9UbcQJs6YAVbJXWdC",
  "key3": "2VcdwgypDoH9DK8kuwcbJNNeGu5nZRfCV117HftpCqTvq94gBf4LecTSNbHXPQ6b69XRgkkjbhw9d9mTdNw3Fqtm",
  "key4": "5aaYKmnNvCTKKmhrAWW6wpMqVf238wFwG2VqJmpsr3HJ8pECZfstsc62iqrmG3vC3LtaU1PBbGZ8s6twv86VVSfx",
  "key5": "4aN4RTiFVpLiNUQkszZqiuML9sDhYdi5bNfmRzumBjNxnfHE3ScoKad29uWyaDipgVwLXnZVNutyp83U8Ec6Nqb9",
  "key6": "Et3GP2M46Rqvm3HvtuFTNjbzbQtsgLv51ekCWwoJw4HPeAmtgY2pDF4LpiE7xsyuYCfhQw6PkaRAjTBogx7DrgM",
  "key7": "QQGepmTv2mcep5iAMx31ECLKs8VqTHEZ2duxbsRCAuYp2MJ23QwJ1iLHBWPbgsQ86yPrcU6dnHoCDjQCihzJj29",
  "key8": "2tnvpMgJTTWeQaaBsoEAsofKTeJdMsN8QYN94RT4cWHnHa6z7AMFDXfgaMGBkPq7P7XThxCmWCxivSLyFFrRe2wK",
  "key9": "5hSryoNh82382v5SjDB6rCfzAYnyPcdoLV7j6sj8bTVQkW7QhBMbtHYTFGz3y7zevzaCVy87udYWgD77wpTgu2gw",
  "key10": "2KhcBgBcw51WAKowzrM148jKtDEXh88UckYJCJdfEz6vgtLkEgEpdPataLSU7A8HNsys9Bwr7xSz4akUBGgPxK6K",
  "key11": "4G1AXkau2GNN3rtXKUypAnX2MbvjXDk6a1BrstD1whbyCqemWFceYk9CD7UPipYRKt4q9qH7cxZ69Ju6AFrfupjM",
  "key12": "5JpeYWPJb76fE13N8xYXTUVDQpjjkjaU4T6inpgf6UnRiNaaAWVSZA2JNFaa1GSo49bBuiEt7SC2kZTTa4EMYigg",
  "key13": "jxnvs9dZ4CnwWanYd8t4jqzbj1g1jzuKPTxSKFnsAKyiDCZ1C9vHPiy8TueDBiP9jnZeqmLiakPKW8gfXd9hFRZ",
  "key14": "5pfBXza2K2doD1W43aRdpStWaL5dt6NjbrEjMJqpJd3guErsHMzkJHLfAa1t4yxiPUEoepBqQTrQT8HpgRrdYhpL",
  "key15": "5Aq9g5DTocYxRmDL8UxfF4gPCQkuLLNdgSZGsdHSTaUcENAY8pi4ev2NKmqHMZ1wzMBbmLEgz1sfAjx4WeH7NBSz",
  "key16": "QhHgZHLMP5aWw3Mh2hhUbi6cFsGHB9MMULzJuDgkwwg5LWg541gktRztkDvYpPUJwv2Dm8btsP86Juhyb4ij7kr",
  "key17": "3Jy9FGLNoW4zAQnXgs3tRC7EThHBmi2VXimFnLfaymobdhoTAB1ECcpFHq9KejAqcVko48rnq1s6kHrCZAQegZz7",
  "key18": "4pY2MVuxNQqmEnLdH1k1nXPoWJk9s5RbiAm3rtYH22r6gNaSyqp3k7fuGxWsBTUA3SFz8JQfrSKdiLmDegnNmWvs",
  "key19": "21LWyq37BXajsWPfvgSP9xByqQ5siu7aYEn6aNBQBVxtZXY64oAugz4yLJqvbckAeL2GVxTVXzwQYMidcRyuD3fU",
  "key20": "4pXLwRxs1npasewYQnSo82jwnFf1DjVDkhVREZ8sC4aDnxPm8UnLfCqNbH9ije8dCG4AfWZHyv3Vron1sSe4ANCQ",
  "key21": "3vuocr3qdmpvG77kq67CWmM2xE4UdpfUGF8sLFqkT48FHBC9x1huca6g4LUxm9uXwrpF1wLYLPCnnJMuEEPq3YtZ",
  "key22": "533yhiRLrFgYjoSiSQcavYzCdTkLE9gZuVNsNVZTgHTDA9szWdqxmdrd4dVBHLGMSCvMNQNVjozDnad28rMwb9ms",
  "key23": "3jhyc5NZ1m2dmzKJ9uqHRJ6PfHNCVKtdjBS8SSwF68NSFBkresZaYad84dZbuwF7UpfqiwvmppPn5sCXQYH6U7Lz",
  "key24": "5mWuphCdjewLiQA8fba1fMfbWvBa88gEofkmiTxpwQEWDFSMurUrsoKgthvwvUKnhDBoH2KtsYPs5NRW1aM3K3bX",
  "key25": "2DvmLoNyfL32mpPyeDpwSNnBp3s3pUBaWZhrXbLRnKsvmVSnwG5WXmak7FXvmxuqpTuz37G9NbGsgKhv7RGXZEbq",
  "key26": "54EUhQuFcXmg5TphXPRXVy1ff9M2PbuQQfLofu1Jx5jBcFY1g5ygQz37RBbD7dRwE46CaGcQeS1FRoXshBkXjV63",
  "key27": "32rjn53PiPBa6qp1oRNYzWqDU2pcyo43EnXwJ2RFxwc6BFqZPA8nqVWDgBbG1JHQxuup8uPejrCCzBtfbJSFtGqt",
  "key28": "2zok3nPq2cQeyf8L1TcUAcZUREEYRGfbWdWk191tUAgQ43Zc19wtsE8RZAcYiHPd42H7nKUZ1VWF422omtH74ViH",
  "key29": "4foJx8pb1EPMGyJPBEtAL3hF9MQ6a27pHTEmCMCTAnmWCkfJ1nPiYC3Bt61eFxJgx2Jenw42k6N4PY2xBT4RU6on",
  "key30": "63LbfdRT9b4wLDz44XrwH7WYgYoHrQ4vmDB7srJ9Bp8BzcAvNpKeauZS4Hnb8YH32WpLqRGDXBnYaQG7UM3thEm",
  "key31": "4t1i5k8wG22TLctRTexZwAJs2oRKRGXd9wNc82u9cSpaje6GTwU9zvcSSTPtasUY5Lr1oymPFYpxQG3TWmi2CHtk",
  "key32": "2x2zhQ3xrA5xSQ9nVARmVP8cWu8E32wB2zWursFDsg2VkV8fF4UdiYdmufenHx6xTtt9KysicjRH8jTvvZ2ib82Y",
  "key33": "89P1g7sEoiGT7Dk6YqbSU9eDdtkC1VPCUSNGxtCvu1M2JiBtcF3dCAbLWPaR6nNZxT1r9SQ5aAcEdaN9jPCP1Vn",
  "key34": "2bfhnL9rt8Srwh65axJVdAQSNkMjRMwD56p3T3t7LVtd9UW3zahGXuxG59sqYiVkGACcjx8q6DjgRHGP7hdA2ceQ",
  "key35": "5Exov8Z1RDa3SvAnEHdrCEmExonDkbsEGDVfAsvr7JK1QDMHRUfTnUynPZv7ud6wXsjJo5N9ACuJvBKp673w3fZq",
  "key36": "3gXgazTLkdq8QRk1tkKzdRGusuu9KdnVs9WyGtwb3BjqyVqD9f1acpci8dXT5ZNTjso7f388CF9GcbNSBfgF4P7t",
  "key37": "oWzRayCJip7Kkmc9hDiViuY2kn169Fuw8QAeRyGHBrRScquCFmtPvyn5Xwzbxs8VUyugNGM1zeDjguF4SManw54",
  "key38": "5XL2g6bfcjPeYJA5zVrKe9uHNqeZxWsTh3ifJB2s5TadJNF6Rzz1XEXkWK1kxB77DUyoMBusq8dnp44u3PAHzkmb",
  "key39": "5Wgu9jwJWwohnNSFagdkZeyDhp7nRA6rBnPTTW9KvA6mBPwQqXYGZVEeb6VXNaQibxAhq3aXefuWRMy2FNouKYGP",
  "key40": "w3agxgQWSKTFiKhtJa5Rq6UephzDfjTVMGeaHv7Aq9TUpL71dP8Kx6Hj18beZFcRZh41G1x3et1aKHozRJdSfnY",
  "key41": "5qrSSZvezAFVWkoUxASfTHX3jHGkzKNZ73TXUCoanzDFRsCiUgTj7cuJbvhn1ktMafLNmmE77yX3Tb8jWpu3ksBR",
  "key42": "2UVADhhVrvYbmTn1abx5ntmweHEQ7QsTaEpAjtrVnDDiMKSRqeTkcEqm2Q1iafYGAywFeBK4U46hCXuNrCRSi3PR",
  "key43": "iDEFt6zXrhZaruJdeMKpsiY5dKHThbkrhkMTufthVX9dTFAcnM69HE3ntAybQdUpiRhxC19C8LmvkBRA4USs58Z",
  "key44": "5jLkvyDLg2hq9JWPVQVQ6n5qzDn8WNko96eo2cU9FKJwWX1GZFdnKLzDgjyRAZgFhCGEmU8JGG6tEaiaB5dg61Wo",
  "key45": "3yNrsW6FvfZxAV1fXXHFMXsGJKtbqngCUwqcaDHXviveX2g7L2Bk4GWMQb9sJTg4ituf9RvvNaqzgAUpHEDR3jnu",
  "key46": "2xVZBgnm7uFAFgVCW2ypqsQu9M7H4nCZJDtjaotMmErt6kAo9TfDZaeGRN9gDcjyCeFM6Zbjzy29cAaUE3r62vhY",
  "key47": "24XoveDiXccTm4i2eKxT9s2NkFRZQ344Dsb7TWnBHrGv2TTVZrKD6SYGfWaVrqHwUPsPJVThUGZJUnUcF2qHovpP",
  "key48": "5LGbp71vxar3zBWL3dmpPQNYSeCaFzBgkJtQVqSfQid5AteD7GRTQC44J9hJh5NJqpww16g2wdjRtGLvNtJQ8NNw"
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
