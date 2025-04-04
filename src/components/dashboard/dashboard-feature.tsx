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
    "3fz8GAbf3zgJpJxavMKAPuJkrtzb7AA7sdB6SPhwNWh4DSQFo5V9uZ8UDxaQtL8Zmv7NN8rMRqtuspZeedsoDDj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Nd7pfA6AAbeAqRdPBHzjEsuuFJpTVGSPTxUD9PbMvWV6MFtQ62gJUnkH44hYdUDayCW2TFxdrmwZ7ZWzvgyuGi",
  "key1": "377JXY5Y8AU7WNm8APBRNWuu7kCL92fc5QFPbqUJ9vepx9fhLGV5ymDLuRfq8Fe7EBsz1izppbVSTxSCrCGD2wc9",
  "key2": "5Yc8S5AqjKc3LUejt1R8E4UfP3CPRL25bKTvukjZWwe9C2hh2jiGxJ2pjmNng3kWxHcuTJSNwzLkqHMCpFq7aKyL",
  "key3": "3mUsAABi4yVg9mcSyws7ygPSCzbCiGXsp1ZUL9YFoKSiq8Zd1v73nExZ6bBrhcjB8n4NxEc9uS5dbtf5NTcacMkv",
  "key4": "2nat5SBxwqeT58d1uhj7f61d4gjfvwVJLzvP1ipCyw1mRN4nHuM5WtpANZFX8nRKKXhAjFaDNheVLHf48b2Lgcyy",
  "key5": "4qCgK2YefdExMGKE7XX92ZMnJ8jrvAAAQDwdx8GiNRRxCSeTLMWUaxjexBKCZDNfdmTLaLkKf8ryMBFeeC1uKsH3",
  "key6": "3QUuCjC2YZUV322yJVJ8eUJvuKWmdD1qDV8NvpPVttWoXPa6g6ixB8TAdNSHyDMkfCXjVFD1scSGsWL8t422jtBa",
  "key7": "huNcxMe6Fz8Y5gVAY7kkbHGrWbq2fEfwVVfy7NkSrGcXMrqu11mJR3c9ZEiMyrcpQYMCN6eN8yhYDjYNNhi8sUL",
  "key8": "3SdMoXbvmjckNiYMR76TxQHca3kPCTggf8espgZ4SVTbLQtHjStjoMGyGdmGg4WbhUH2js91NNbnuXbY5KXE82Dz",
  "key9": "32rRC5xeZzAadqoUgivJCAoKCjNh2wWLEfd9WKSLiB7eh2zpnz7RR16FkiQV9a7aeCPf3CftBGxQqDPfBucoGvJf",
  "key10": "4Ga7u8HfZjDp8Dd1A5f539VobHghhwwp2f9ZJHFm6aPYCuse1winDhGZwtLBdRdp7n6HZqFvFGWqCuPxWKKEMnFY",
  "key11": "3GFFmGNSzowv9iYU8tDp2JRSDGXGTp2kAQeR7QNtMCtaK6oGuU3CH3mrtbVjfFaiyeQeswN8uK6n3rZtf6p6JHqu",
  "key12": "4xJsh8p4ghDYmd8ZKpDFkMqVrVYAY2jWWHH3R1QnAnu6jP3qahwEZxPBBysWnw6NBngddVCZWcy9HdPr3MvVtdxr",
  "key13": "4C2RNP498H6JhkZF2kMPYzGRGEqYCX6zkQrZJE4CCGM7Yg2FBUcGZJWGuTjdHb4fvJBZ7BPbK7AKhLTFLsFST319",
  "key14": "VVydfWRigyaoWZWyjoJadzEQJz8dnJdizvympsiXwKJWHVjWf5sPavUwbzd7g5GPmdM9HtFZsHr2ZJ7zvvCM21b",
  "key15": "R3fZRgkdRB4rbB6Fyt2xtTWecG9K7SJ7p2Jkx1RfTo1iwnq7jShaU77YxYDpua6JXC3j367xSLsXz68Fiocg52W",
  "key16": "5LTqPqRq7meEXFSqfHuBTyNpfb5oa8grimguozUJ2bY7nrVdzU8CkDBBwSeheNsP8ViHXNfjvcXP6hJFZhAwiMt",
  "key17": "2JenzQKZbkZXQroAaV7AXrFY6NuQEy1hwwLh9Ngjcfm3KbGwx4kQs5fAobb7cTj3BNzaYkVZtqbKkrNKNko1p5hH",
  "key18": "5Dx7Q8ZKJLzKBHqN6grzeXmxUD7nfTEinSmQQcsXEfCdTqEBgBfVfauSRkEhoCqaGY4vRVcXNqgfze4ZeRRNo4SA",
  "key19": "4D1yac8tdRth4n7xrr77uueuQHGiCYbzAdCUdMz8gnSetFmr3TSvdMiSJnR1bpL9hDPMR8UbxdDdEvfEQdnsQKwF",
  "key20": "5YFAXYaTPiJiY4gZZP6bEZDAWdzErrfVRkmnSSF3ViAB8zU6Ls4iV8QmBGCb8nH2dL6YqWnSNDatRRCUpsRuvXD8",
  "key21": "4zZ94muwRCwSEqEmAsSrFKMcRio1mhzjKWK6JKmSZbUDbVtQ4YfbkHPGh4h7RQ5xnezos3cMGV39X48FpdjMXUzT",
  "key22": "3e3Z39qQHCjDGtGHTjYBc3id5t9tLbVUhbecitnk26q7L5WHaUgJZPjLAtGBfhC6foEcLzKQxeSxznsdfFJ7Yb69",
  "key23": "5anvgtsGNpCED4ZCogNp5eoAvmbvucPfQ5EqSC7KsjauLqbyehUNXKx9egRLgK4oUdYdXXQuq6WHA6goDUDQaJDa",
  "key24": "KzVrrWkDeedv8Ftw1FTLcx38zpWRyizDbgSyQZuZ4atUS2XvgaeFsSY8wqmHPXHVJvcwZd5yjaPVru7Rd8BoVYN",
  "key25": "52gHVjVGhcXM2iGg6Qf6GU8jUu5CLi7HFire3LcWtu9fqJMPKboTtXyvrDXTgsdCED2EbEk5aQfzEwigSisDMeZP",
  "key26": "3hYYN5KEoetzjDiXfRBUXfnPvvZQK4JruXn9yLzzdDoYxLqJ11eY46RMnab5t87CprBJdqZ8yHqpHaWbitv5xENw",
  "key27": "4wgbCmGWCtXrFtDdcAs5MBwNRdSf2vr2h2by4Sw8USTf9RVcUbou9YxfDZxywcp244q6kjpacJBJs4EG2KDiBUx4",
  "key28": "K8zYiE3UrCVnb3Fue5nQJTtMMjDzAoUVaw2tEbqYnbGn8NQAfbeSjV69nq2aJ3ieaxryb4YpN9e61sDzoWq2kkx",
  "key29": "4GpQ2mR7HhuCwwvpXJWFFZpb53GG4ooPhGqBAtCvPy5EKFtWK8xaKPD9G4szZLhjtjuAar7MJAt7a7KoDeZSsc1C",
  "key30": "3JTig6KfgiEyBg2PoMN1rGs9Z2fgEsRwnYVwgHtTUTywoiZxk7kqAKrGG3wudhgAkEYqKTTtfMPQjB4F2Pau6xu1",
  "key31": "4Q9931hikRhvu1A74ykoAnB1gjqn51xUwB36YW8chWPWpy2jx2oNhrpsfD7bZwq1h224DVEE6pcKUrsKXwYf9UeK",
  "key32": "4kRnSPeBnxgk8SqHoM92Unn4yxr3tbmN8C32yJZThVGJBcKogStAbx6yBE1VZFjDzpMV8cA6HHohBRFmdRUED8dt",
  "key33": "2imkQfPT275KjCiin9B15T29xNWRi4cDPxPdFTWiA2bHYWYghdJaNZ1v7Qo99kupGHtrz5fr3uAM6TSjvVadtQX",
  "key34": "jHBFRPZcvJRcwezpHaNwpanCQhJodypapzouctagN2QQ7Yh5PySArqs556zKYnExntH7KiULeSUpASbLVujWX49",
  "key35": "FedYUXZzdTij2dGgkqeZivDTc4Fukdx4XU6t6khjNvAfVtfThw3mwoTNy4To2wdtQzAHqt68iZZx1DCoNeyvPVj",
  "key36": "4YioJeWmWosXs4cxFTHNvzxSxeLm9CrbHL8FdfjV8nPxXiEHALsGRDsoTWzCTr5dGAg4fdENarxQs9RaMd6cFMR",
  "key37": "2bDuXBq2gCGT7Fd1SLc6HrFroPL6qqBngQx4sFJaNPkhddC3tJpGKoDWToMWGbDd8mcA188F8BBKCW3DR4EpqMAz",
  "key38": "5B7z5yHMWohm7tA3LYiVUKe6QuC2JatUrHNRypHXk89Fb39SDUUV9psLRpTnEYji1TSSkaXVzUM39jqFmtwfbTnW",
  "key39": "22JELZSHMgeoyy1g6TFgeDq4R36yb8QEHv1fPivxGTRhqTPWzDyNiEJaUdpD4maNGKzAGFx9riq9Fc8TjC1KgyxR"
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
