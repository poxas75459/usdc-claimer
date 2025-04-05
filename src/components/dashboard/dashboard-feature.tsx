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
    "5XUoMS59aqWWRqeZLvwd7ngj9WxyH56FtoGfYWbQXDcLnuGmX75Rt9tb9TUjVeiZp8Uxf1axZBPf1AJTwu1LDGmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aXCi9muExnG5zNUavkpzFjzuK2B1VCfND3RhmBtECJwDRSFux1er19avSCNF7zAVTvMWdHntPMxKSggrGmwm74s",
  "key1": "29yPwAkRTNoERUykmXmsrEGmxXsxmTaQEUWwqUfeh8PFEFnkhho5QYeRRFrRZnArp29atYEfxFyTQzznP3hiWVry",
  "key2": "24WdM8byowFonwUeXs8b49wNz3TKJkEmQBfhBz92AJyALrfvicijUxhA1TTB2f2HJc4TdURe86ymd4gzVAUjBoph",
  "key3": "5f2rQAJx9Lt93w8eH6bdz3a1kmzUsnw17PxradxLJPZm36dyck2xN8J5oZfvnq2ihSiRbVJchbCx9pxmY4Je3Ucf",
  "key4": "5x3PAayCDzoKV8S2GStFKaUQPcXJk8BVKJVApBpJ2hHAabmzDvhAUpxKuzR1MvrRUyDagzJ3p7rAM12gw3HpiaUU",
  "key5": "5ELpZQyofMaktDn5RtycwAbpH4p3kHBuARnExC1RRwhr5EqPvchgNMWP6TEbj4Qc1J1SDXecxc93FYSiCxGTfeRA",
  "key6": "KGbb1f3iKoTXfSqgqfsFGx7rYnuTW7aeGVsaMCAy9fxkhm9sCmwNZG1f6BLPdHV8RmSHQEh4Bhy9y1KUJtky4Ka",
  "key7": "4YTYYpsZk1VrgoYHNr79UYHdB4hJ8bcryejd48rWqXvZpoprut8RYSN9MFJun5gBRmieYGzQVuJtzxwS2YSGGUX6",
  "key8": "2BBHF9UnveMPwyns3rsGaCHrCXiDDLbn7qd9YpLMn3p5Ywy7XThQdyi5B8kjTPJ3c1rwXkWjG1VNrs7wiA4C7NGS",
  "key9": "3Zk5n4ZKzriVyx3pThzPceB6qHXsAB1tEuJwRnNWbirDyB8XuPspfUXkyiRNAMavTK75to9XQoep9aExoimrd2jZ",
  "key10": "bsz8wGzZ5DVXKi8e87BZhzUUgauhfKZKxDGgXJGcdP6BQzvoCx2ZrLcceF1ApQkRevr8jmYGYxkFbVfXx4tQrsD",
  "key11": "5SoPkATiugVr5Wwgw65w7L13BUA5roFzmGC8DUGbvuK2AUJBMA1HyrJyq4jojD3M99n5Hbnth28P5Qo7aavNc5vp",
  "key12": "5P7XQFL5wAn5YpfinECRQVqmr8dGzLudMDCNycB1XD3hnnGFfEGwdwLfByfuwQx5JFX8xjjPgRWn1qoUHYsQYnC6",
  "key13": "4JJeFXKxWMmbBMg4yMXQ2h7hX6YmJhFRSXVQuJZkzN34CjeNZ37itg9zoaD7xGAf2tymxsJDFZ9wsnbUTCn8eGet",
  "key14": "2nXZLZc2Zv9dnTXb9HXLVh2i2s11ypHai34DHY55Gk4QKH3fKZPqw1XqAmwDAvqrvvsDu9ZYheFiHBH9MC2JkyQV",
  "key15": "MXFumgFncochfLegMiiYWU6u6HL3hmpGUaHLGzH6mBBMoTmNrPLj7NDyVXB5oGBn76iUypaLJasmsQTQwji6xce",
  "key16": "2qwUxZZy6tJFk7uNg7Aq4zBf4Y3fvUErnLpCuKxrkog5VCgLZR9xZKDc9hUoqDNLsqZPBgkQy7GbSdLT6WxGUdJH",
  "key17": "4wsWzAUhcdjzBv8wU9aCkCL3FtxoEVvS2KwxbD6rGN2smdykcvhUd6ULpa9GvLMpYL8ni9z9FnerEx8egbJhhK5t",
  "key18": "4ybFzdx1nPiETjZABDoEWM6LvBDQwNKGe1tvhxmZodScvQMSkAGgMQWXd5DXkhgTiqZzwGLvRm3csz1HKMqaDmCU",
  "key19": "55GrvW4NctNGKoeWqj3urCFWeCyiVXQ95XZt2Cy75DEqRR4LYLVNDZ7c8ZCmBo8PdvFDdnNBfLoptSWfvWCYFXDm",
  "key20": "4wTUPEUqbtmuLAGYgAhfe6BcTrFPNB874WMkfPLkYWUKSpUWZJj4qtx1tGpao779FwVS822otQSqcfdBHwFaHpgU",
  "key21": "81X3Df3ewHiVrUudMmZg5SbedffVr4n4ZZc3DRiNJ1nHBtWjzef5PA4BEMSyy67WVQ1Y4s7NFfZZ8RycPfKWSEC",
  "key22": "wDbYtoEoSm1KUmLURbPXZxT6CBSBuDPsvMXTvyR8KKTzEGbz2PcZyrpEMPpomeCn8nwtttrKwTpzCCpdhzAoECH",
  "key23": "3hi9WUVBcF5o6wox2JGRPrvVYZFBf7A9hKB3EMPFCehYHYpsi22bdr5p67QZhYc6YLjBS9JvqaHHEqhNXqSj4opA",
  "key24": "2iXX9qwCQeLyJCRD2eRRkzKQL23rzAyFSy2ePmj2fkWhukEYVi5tRJkeP8AeXS44Q23Rf3J9ZQmSVy1dJ5XwYtrT",
  "key25": "3Ery2ciTZgMzbbT3wRtWKTxu4rV6GtJ1gkzstyHf9D6jn2i9ZLeUG8cTei569X864RCf4kJthkNQ7DJpxkiw5Uoj",
  "key26": "57GL2vGbfyGgTbkgbHJacES5LCJu3djTexMnmhktVUv6RhZ9hRGLzqRq1evb8U98ePj6ZZtLKLLH9BujbVmabeSr",
  "key27": "2bEY2BCR4bYGqfmnqTqa3Cmphuap2gq2VBS7pke1cE64ssTc1MFP2kSE7nVAMJe6SE6Ngtsm74YdFL9PWFFDmjt5",
  "key28": "5Rtadx6LQDD9wWTbDRNxUHCMBTNLyHbmmTHPGCUZxE8gQ97eDqR3Eh917FTRKMAcAZ6UsSnjv94bGAzqPJTG5XNC",
  "key29": "4X1HSjb1xkcTgDPXdCd2xsrRXh2H75QSU8i3AF4kxfEwABMRjatbvC6dV4fbZQyTNk1jwdzcxbwrcsDQDGBfnZTx",
  "key30": "8AG2KznCsn5jd4Bo4KPfBk4MYHwz8mkXZ7UH58RSJH8DatpPtHUXmMciSQPZtWTVy1jDD3d5tUHa5ChuPaw3LPL",
  "key31": "4u2Tzrv4ucxAf91Vy7EcGjyDoBNPZh7ekiptRGJXV6E2TZ84qkG3554oumcmvvX7NEAYHywbpnwqSsiRGGwJjdKm",
  "key32": "62eRLEXCrapDHXgudCyjMV98cZVENuGy2qizAKSHYL9XeLfnKzDPhrVJHCM3SifhhtM7BGS1p28uQZvdrYdaiFBc",
  "key33": "3r8HG6zGzRa5MQrHBGqLc2tKuevy8GR3h1g6Xhby2tUUXcu1awPJMeoy1o8gqozCfML5JZ4sx6BnBZufx38JBAjK",
  "key34": "4JkV9iZLmTWY2wh4yuhX5YrSTQTJzFg3T2WkwDHJ9WJWWvFfxwtcXJDcWbpHG7qFGnJdCgpXLZNt1BiZyEbopnCa",
  "key35": "2DvKHJVw2ipCNQRWyWNMitDbGZBJjBvSR1gojhAjzrMyvYzsUcubtMXRdPKUrzqjNPqYsz7PrFDJpfmHfQGSH8A3",
  "key36": "TXZqgCevQeYoRnYur62HhRqbjszXfgZhDqYaxPV8iAMdqQNoWH5XZkWXzH8SvBjacP5egemYe6nnDcknDt4G3RB",
  "key37": "2fa9G71GgkxYiTjADsVas33zT9kLNAKytRmAVdbw3vuFMNYcNmGrYToeBoR62kBsdLYMUgauEyKBixhdGP8P8Ltw",
  "key38": "52No4BVsvbFm8U3Yg72Thn3cXyPtpGT5iMJLxQDvCak98q6ZTc4bpS4CjisF8ZecsropPsQNy8PAPsBUcaHZqE25",
  "key39": "5QxV5B2zGwfiigprTua6c1nQ2LgeWFZec47fvRe6yYkvMjqANSiDvjT7pKnacj9VrnyoJsN55MLtTag57SRQ6jMQ",
  "key40": "4UQVbbXGo48m3KJWs35BUv5e9shCU5X4ifhJtftEp6S6cEhqDDPjvEF1QYgUsB8UK8AXFaxnFtiFqjuU5py73oFr",
  "key41": "3GpU1bbK7VYHUuYYUkYcD4EXFmBcRbWJ1jNcJJEe6yTQ65AajgSDxd2QWFZk9MztzeEMbUJtrnc2hj1cHwNdUPPU",
  "key42": "5eVNSaDv9dzYubti2zRceK3hYJua21s6E2V81rrHXWzUm4Xu6bXMngr6yBM5gNaVBZeJEx62SF2Ja7D2DiRxVZpr",
  "key43": "2T1YV2Yez9QfRUsvmi3E2BSWoiKEgiJa1YcxiVwREVYjrRZV5jEDFLGYTjNahw7LzAAE7kx2ck3sk9vwLWHRArXs",
  "key44": "3JyzyCCfRcmk94hERnBNbnXpLjYRTmj2V4oDRJvmg3Vrs9qFMuU3WqXpcfjrpKBwhNNj98jsYoT1kNjGx2HMGFqf",
  "key45": "2DxzSmu78jZWDTu7EiCnFtBU6K8qHrA7CukwBoCxDErb1nbEdGGKBKhd5sbtAu6ronG1K5vTDoiLvc8Dw6xks25u",
  "key46": "4sV1dYNshZGqC6BYhNdpiempGAziWrywJLw3VDR3hcYkQNLLhy32oBKJ5L7oYQSqXgJJYS2cVLfRi46ZhBErxRrB",
  "key47": "5JmwxVcTfFFjEXiXzPsDgXacfx8W4tZLQ3JNHBXXmLt7NihqCEdEqgjcgPYtZMLkZ5kZDXB8qD8Bno38x1w5Q6Xf",
  "key48": "3mXT3h9GvLKmYp6RXpMBPaZBLXGW3mySCRKBpJiG3pWTv3mHhPShxHCR2cgad5tiDCQJ9VwUiEfjj6eUix3SyRR9"
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
