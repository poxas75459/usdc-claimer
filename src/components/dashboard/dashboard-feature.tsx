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
    "5vMgVYFrgWkXb4SGAUk5b59J29vF2VYQnE5rzpc6C78RFejCHJuipnxJzFk71iufY3GX6vsqCEZo7cqv1voXht9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YSH6fhzf2sUCBxyLpRupZtfshAvWgbxr5u38sKRxsX8JzzXt68hjEhs5MzVYuvfmngPKh6ci9nyHwRi2pkunZi",
  "key1": "3Wi9QBcMmCpSxaCCnk6YKUm7tz17MPuwBfTkBsUFtqv6df34ejzkj2piwtCF3GMcdQfp9ePMArRJftW1UW6kET66",
  "key2": "WRxta8kMhFRe4qQbnbWsfc7LeRmVkZHSG1Gbj2KbA3bHcShoSKiaLktcxw3boRTutxFMtk9mi9XmXrSu6quBQS4",
  "key3": "3uo6WkdH9SzgWdEc7G2sNrMpTAUyNmwvzEa7DtJq51AJLVj9hwzbFczdbLvbtzoYXn5S1ZFcL6vtoR4VDaGxJb5u",
  "key4": "62KEs5ePzPwcK9m4kvBRJmJTRz4jKnVfaqbeJNUfoBGGF1RDJuRTZjvurTRwnJy45NmZgAXxNitRcU2J9L3YLui3",
  "key5": "53EJncjp9MXNjj54raYN8SnKDuXmtCyhgXmjVdhgaD4WaUkfN7V5MjWYmDDXbZv6tP8qtnKRxYdkYVRBYBK5C3Dw",
  "key6": "3PMPkDVB41pk9n1NqKre2gMyDc1SPNgWBsF9kLXTSjKMF3j3QciLVLg5zzY7Eo12TZchrHCBVKFFLZ4mAcWz3Kq8",
  "key7": "62DBmaqwBEAHqSxsdz4rPe4K68Q9rhRLhK65kkC9Z87XEhK5EyLaaZWCPuJ4LrerCnNQqBQxLqxbuKLyhsUCF1dV",
  "key8": "2obaErs74pZBTjmS9stG5VvWd7Fi1w16qPRja8PRqqatfArYiXwuHdqXjFvkBy7NN49NC4qTtM4vMEGFi5z5QJV5",
  "key9": "xq24rTY7AdhabD7fnpiQFZaAhVKDW9zZjCbSWZuj7tB9L87FTPn9kjbCDZBRcJqddgjgeMXPLWV88rrx6Fph7Zu",
  "key10": "5EfyS4VCvjff1QcZ1F5H1KVNmE2VqNoQtGQcGNDJeYSeeMH1Ue1gDjzdNVvL7F1QX6KuTADVUBmZYehMG8EwqTbd",
  "key11": "tsG3Uez9TPRiybpoZrj8duZvdQLe9bTfey5hhauGSiDUFHKGiXj3QPQEXe9pwhmQxgvmjfCtmoePnEsptL5tdRj",
  "key12": "2gABgbK79BxFXQi47nRiZt6uaqfLhsppzCPZt9iEn5EG4BMGSqhgazXyVAFFVXV6xuBuQ1xW5PiZap6pL11E8TaB",
  "key13": "4kBx75sHfMuJ2KQeK5xmaZZxeeKCHYJosXb1W6Rh7W6qND7U6Sz75RRn3qcLBA9KdUYPxrtMTRMmH3fDvCThbajB",
  "key14": "T7gTVw1eiqcrDd6tkyhTdJeDXoX8wbLXnxe67ue4PYQTqH76TxpY7UKuvqwaC7NJoC5r5og8TVWx47hmwDQY3cB",
  "key15": "n2mNaDrP2RHQ638miokZka1Be2AmEiesY59R6BDdxm8Gd59T2AxpQsU26ts8LZkVHyfCKHZAh4spRX4FE5645ve",
  "key16": "5cCYvdwYAit2xFXrmZ97prFQDfvKmzyXfhP92BaNDuNm891CY6qxJTJdMEDkEpgMvfybLuqfCxAbJdXKZ1MUhsRk",
  "key17": "2HzVxXYnp25yhujbGeLHKRXGthnUWvAVcSQYK8TwDSPCMnPW7L3fVa9fcjGJ2Eg1xDo9J5Q7b2vAdKmarFnFm2gB",
  "key18": "QkHbRn1AkHCRrKUVx5CLUJQqGPPoiXfWL24G1TQGrDcPk9RP2i9Dz6f82AnAh3ezvutPEdqtEnPdLDR4dFekqTt",
  "key19": "4ykKL4aYqndLYNoQ1FdnwoqpNcUhKykXJhxqVpkKPacpt7ac5JdtZLBrguumvyDmvRYTsTE7UrmiRvaPKnmPTqNM",
  "key20": "45Ze9rPX8xFSC9NYGQZoFS2BpT89i6FZgCQM5MQxGjtM4oL48RXX4xEHYu4cNoSd9PddQfAsLQb7SSgatynEA6qZ",
  "key21": "2vWt3D7oZDhLssasHsmCZWxCE5NwYyFMGMjM5ghfgNS98VvdY5CpAcSwL3hGVUwHRmsPYUwMpoNvgodRaWzfpvUa",
  "key22": "5vQScC2ySSx8CWRRyfT1XZXyn1SxVDbBFmeJpP8MSeodP2tCVoV15hxEPjDn6TXQB3xurKJ2mVAdQxdyusrLLApM",
  "key23": "2nMNno4ix42WQtGmCDH6L4rzyhV1Rm5fxybihZXq9fuNSDDk1WBZSGh3sz7MDFNnA6MDJ9zUx4AsYNwGy6zpFaN1",
  "key24": "3pRQget9n49NBfaT2XABYZbjNyigvZ9VMvNG6trojjvsX9NjKSSx8vS2DauENZ2HumHUn2acwGduxbyMCwDVSm4o",
  "key25": "4pJn3SRL6hWsrK33FK4Dgc64rk56SR4XHLH2Kzsf8XMVQR7GwcjMFFc2QJUnN22p2FC9f4aPcdnJ1jdpg5NsBP16",
  "key26": "45sUKvqdUx9zHf4sV45kfGiLNsLAZtRHagR2ExDoH7NQ75z4HMmMmM75BRq1dNiGkcrrbMWnd3TxjECJ5r7ULd1W",
  "key27": "2cw6YKcaMhSzndUAx5S4ncpYk2g7cedGvKv6ggY8sYrErTfkqAJcSfbU5mGm5dsoYcSsTyu1JmX41FZKF1smKJP4",
  "key28": "RMLfJLxkuDaP7gQm18wyrzzpFEN2DncUa4SVnyNS3TZvCcA5fyVgptjJNFUfKaZj1wLCtLSguWx5Af6uWLD2ABd",
  "key29": "4SDPmAoV4MGkh4TeWqkx3NUa3EBKs1y6B7pekS4tPBKbq78YUCLj6C9e2gVsaZLv2fWzPowZY8x2oC7FdRm2gBm",
  "key30": "cpoqXJ1YYYhoo8FEQE6wNjH9VjtdnKrbUzeiavvKjqgPgrW2UuMbJaag1vvqqyYmAZKd2JLg19jQgDqeRYz27nc",
  "key31": "5JvXVm2oE9JGaQHeptygVyuZCJKUHTjcEqnurU8SJeJViWvPKv9i3jv44ah1fbonyQyUtgVYrzgw3qqQBfTvphWB",
  "key32": "KWkk3xt5bhyGBeFAf7Fgmu1qVPH5TappjiSuuTJj7XdrLpe4WuL7o8ohotW7LGzN6pSkq4ToCfteDTot1o3bMo1",
  "key33": "8aDtUtuxumCkfL9igAp9mmUN3Bf2652FsDoqi3CfTiZYtFPagNNvsKsx1ssZTNTgAV6PXcXVYKiHvjaDWJFKDro",
  "key34": "4nAQ7YYczcHW1Pns3pQdDKfhYp6KCbUhYxZMz2BN3eydVjdG4BkUm831cnAuFWuGupkvKTL52EJK5ez8sabXTfai",
  "key35": "4tKYvCjt5Wjp1GXkWjRH5LBsu9Abm8zEztM3MstUTZbTKVD2am7wu9AVPLf75QQBNg3vvHuYsF28DecynWLVdvK1",
  "key36": "3c7Y1fMxiQoSkM7szj5eFt9ZxEC6q6TCnnqkpQ534Skw6UQHcedKsV7k9czRpMaUd3322g641N3WQpKaozVCuxSe",
  "key37": "5eR34q9t5eLRqsC5m326KQeAdeEh8fS7VFN5uhEY2Luzs1Nx6kwceH5QgUrsd1wHDnDdB5k5vT6sSBQxhAAU5Rw5",
  "key38": "4VGmQMeuiFgQcJyM3Wztznea8LdKG3za2rzaJdYb6NUYUy58NWE31MqmBCzWa8RywHE5zwf7xFBNRWqk3pzcriya",
  "key39": "5wRi1mebWojkKimbWf4JEkUG34dUTZVr3LyN1uKoFPDxXFc3Ys1TM1igLY24dRKgXgg5j12WD1J2LmAun1bzvqd3",
  "key40": "53P3kkgfK1BGEDaMNpn6KrE7u6DesQuCHxV1p7H79cjyXQx2Ts5eum6DcCRDBoYw757Jc6EsCgFYSMUhEEonhjSa",
  "key41": "5enW2dnZpCU3V4oY45j6C2rKELeGL5NZeDFjSfo5zdNXdrdzdUeWbaAAuCyihancxhtS9FGjNDQMgTQ1LwksYU7S",
  "key42": "2qVcyAPqK6o9DCPoVWf5fLs8mfSqhBZHtWmJUBCazg2i2rN973ujfLKdFbBFXi1U7GeU4YMzjK2SEAbKYmfqLttu",
  "key43": "crGiy8ciZE8FT2SgSqjtY6pt3GJEi2cQxRvZqhjfPhbKC2m25nFcYFpjBDwnBtC4xwLawNbk5s4teZsckxiFXMZ",
  "key44": "fSRJcN9vdD3boaG32KUFzTy22g1VbMuuZPujBPCQbtc5EWjCWCf3iWaVELkkBD3sRwdoaMeh2dGsXxGwYzhQK7M",
  "key45": "5YwBD72MCmggE77WvdAMWz7EowQpbhfCLQ5HhChjorHhHMXCy3Kdw7dJew45oWCvAdLNB9FGr6f7igsegKYTGbqX"
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
