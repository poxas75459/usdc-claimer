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
    "4Mzo9ygtNwybwzg8dC2n5J5nsDHHoqEwr3MAqCEvdiY8ubQ1UmeEaiQK5xMvXadRcm683BgjjP7kEAC9WTMALXEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yRPYeGoRQx4tzSNPxutQQ9cxthJFFtfptxEpFhHrByc5Uuh5to22pGEqjHkGW1fbxd4deat2gGDTP2LCSHhnuZM",
  "key1": "47VqrhN15d1E3jx6M5aWKarwsEabb2pvsk4jEUG5aWUCURP9ZPN9yQBBSTYQfGV5XTxwpqvnuspDQeiEgNpkdWrj",
  "key2": "5qAkGFymQ13mzwoFKeYCzvbM14JZfHt1nbdeeAgk6SAGnZPuDXqmdw82RhvZrndVNoXSKAa9mT9a1HtpLWCTEZti",
  "key3": "4EFhzSeWY6U6WPC1fjqcNuVTq4WPqeg2o13MumiVL6YF4Ktd26aQWLw2y9Ux4ZA7gvdKjUgoFFTM95Wgzpkfmse2",
  "key4": "42ogHpyWZo3C3S2tMFhm87Qq8bA2HA56bnsrX4EC6qYanYUV7Tjp1uwbxGvNGS3zgxXRvuemnBnfrzWyiZ98EDPU",
  "key5": "4V3W5Rn443rsTcQi4xWneVq3vUUjYuknRj2SAXA2bcJN2eLysnPXqEtuHe7njxjKbbnTn6QA5dQAfZdbroqbiW9W",
  "key6": "2KKCqaxrYcQnZQrQLRHj9mkbYnwJedZZx9XsWhSqZaMubfiMv2Hxh988VZmpLDZb8u5DQ87aAZf1x8EuY6hLiH1a",
  "key7": "4sqxdmGeLRxu5n7bopD3qB2kG9936SkvG8r58MRZmtBm5CfHgKSx46ev6e4CnhD3LkUWUXzbzTzmvKYgmgdpbBF1",
  "key8": "3f7t1RhkFTrYuStydt4i5jpoM9sYQxHKgUAborANVUSodxZn5C9AGsXxPPp4F73FCkg8RbEPDLH9MYn8NMuDZg98",
  "key9": "3bA11RU7DGJepVKPX57GHS58iscDTsDQk9iPiGP7SsimSppTcd4d9D7PA1szAS6Anf5es2fAitVQAgWwr4gYWxTW",
  "key10": "2BDteoWRXjP3ZzGyYrMmopPjz6oRZ7fByHtuDAbevhGz64Y8wpNqWtkVAGRjawH8uE9aK5VcmQh9ZMJwb75myscs",
  "key11": "5z8QmRXDUWDzpjc9fUEUQDhVBXciEWcBtXvwc7K6WBtkYnsMEom7MqaeR7p62DEGhAsQHqvypRRHDoQXWy2Fct6L",
  "key12": "5wtgD9LcbrKspAFTpb41gBhTK3Xc48SZ9WQp7Nxs7sPkwPCejGKAudsmnHjcW7Dky3xcszdfj8DZAWnzdGrzStyb",
  "key13": "57m37SPySY2oY5DHYvFujp1odraQhZTvkaiB2vybcBiR9Suw85a4sTDhkRiHzN9NtNFaVErvq1df58rJkEA2xeB4",
  "key14": "4V1xmTL1t8ibSDp5YCjCqmKUM3JufUB97mxaeSuSMAB1SxXsA3JswAUNsWKffDxmX8P9yE7Zd8xTVpg4r2P1eLFa",
  "key15": "47haBALGgEF9L13T2aSwfHeY5jmUhdsbyJFwqaY63RrxhumSLSWFTFs1NBZLh56ErgndMcAGX5SGSVuMwdxA2KzX",
  "key16": "tmNGdJ1XHCPjccSivj6K4PWS4EMgTeqcEW95hpVftyPLENh547HWZbUMMkj8EiEJLhRweoggAinG5txsk9CcQbt",
  "key17": "5zeYFDtnP6UKK3vHXSLuRPEiDT82QmiYYLK62LMCSYYXuXWC1qHCD7VaTY7s3MfsH9CriHEHcjLgFjCiUwo38B5g",
  "key18": "3JfcZ15RhGw6PPhcCsD2AcxfsMW9YRTwQiAahBRoyZz9FANJVGSjo8J7doD4EXaYjnqAcHpfioKTRjMSoSusfDsq",
  "key19": "57NnF1KMaZDmwQSDgWfq6gLjZ1NiEWGW7E8Co72jWxGk98mSYgcoJft7MdFerBs5YKjZ9uF7rnitbneQMpf4q7NV",
  "key20": "5G9hpvW3DUojBhqmn3Btjy9CMkDEk2hP5jzsQZNEcAMjZLi6iAgyYXc3H4RRYk1fpqnAw2xMyKU84wWUVJkE335C",
  "key21": "3752y9SJv9AzALzKBwztdq6nxSnM1vgF4N9ZXjwL5hgik2kqNMCM1JduftCv9PSvZBMv51bhj1ij2RRYg79Kfxv7",
  "key22": "5HHJnTWp1jKNZoKy5KBAEf8MW76nYyXHjDMY9tkpVdyg4TjZVNkFFBhATanAPpyJCpDNEx4XXaniew8RKKj7HCgP",
  "key23": "2netVEepKqwGJL13d2CknhteAgB8KK2A21Jm7xcnrKxmAiAh44C6U4X5e9qtdc38B1QjybhD82NLg6EaLtCevANd",
  "key24": "3fv3chdjcssApnUVxfMMUah4HgWfou546zCX9go2Q9wRQrw7VxP6FQasgqRVcnBvGAUs4PbhZRvXDvg1JEGPMytR",
  "key25": "4dbjZ2jL65xaz5c2gqwpEFgmvHDVRito8jg7M2Z9gB8vZ7jw1CGBYwZtrnRPKsqgQXLLEpbPSUBXFco84Dz8qsRz",
  "key26": "3H4DwEYpGc2Z79xAH6Pbq1FeVtnKd8Evx4DxsPmcsYfDSQnZBL3QMdtyagW6DXbT4J1UqzbktTEtpRbPqDhJHjpJ",
  "key27": "5SfaCY2XHRAsHZ1UcVuHskHNgumEgpsRZKBcMpuPRiXr26DQjvdBTirTKhAVArDERPJKAtJG5RWaEYZ8VCTDaCBe",
  "key28": "Kcpon4k15NhQXxHy6s8AdGbmpcVsfJtNa3V7LZ9BET1J9BqgMh6EyKQP5TdGcwiy9LxvAzsU6ooUErnv4pdSbV2",
  "key29": "5xtuYLRwYQpCpHphvSHQktxspZgFTGFm4aSxz86ZFwzf9kGg57C1NhUT5h2x3eAMwpFEL2n5EZwzrt4pB2npkHZv",
  "key30": "579vtne5ioRp5bk9yMmuSQpPT4erYwZDwBrGQJQndGRTsRYS3tfoBjKeH8ShNcC2kqDg4Jnjf3vxWkJAAP74CyGx",
  "key31": "4mQkCtvyWG7Cc8cZbZW4H7kCyiGr2ChjMtqG9tg5KLPo6PJzVL1cnQbSKV3Vvcbrdz3G7pQuvnKTo2caYnU8Zxyo",
  "key32": "2ihKEE5BjYfZfanA5K1Wi3x8EJnGm7v1N1A83kmaFKVVJza2miS5g1hiGUwgRFFymS3bjaHGLBTRzimVxMwoXaLB",
  "key33": "4VTh2uNRaKLyXMnPUQ5JSwgQMo3GyiuyWxQzF6HHToeKFi38VZycaPdGte41AMQPu8mijwWB5dMtMQo5ktWB1mwe",
  "key34": "4UU7QdtVnAjsMv6JLSbnMq3Nb5tuJ5d3iWgZ3UW7cnY34Z4145TucFVt5yFYocWA8HWbneveaRstyCdkBP6SfkMV",
  "key35": "gmV2UrjWi7hzrHd7Ax3zE3z221zPFEJr9ak1rbRNYmWJoTsqtSfVDPrEfhf9ADj2ZWJL67LEcBGJqxhwKpH3mTe",
  "key36": "5D75nthNQLHjquwXPJpRzwf4N6SGuHfgwrjW9B2PqrLZay8r9Fjunn683gzrvvtzNHMYMLLjoioGzwP3QmJWQf4E",
  "key37": "4cz9jkonzC9SFDCJdyMpbRchy3aBsEFhhcA86Sumd4gJJEiGSU77V95V9iXx8RNdEC8MfjPK2WSqzYPLtSZqC4wg",
  "key38": "2XwaMVLQyBsbckCPUJEwcazNywB5R648MimWfeU7hafMfErRFtaxu5df9eoHKzdKYik3PE24NmGjc5ie8YW5eBnh",
  "key39": "2H6PyWYfmsheXdWoD96oC8hcSyJfqDadBBoSnA2Cu2Z13ahhZ9wvLu8WdYokFYmP6uw6J55ZN7tUKVduZYwBi8vy",
  "key40": "2FKGPeHtrUw5efPV8jrS43q4t4NnkDRmvTPNPsdocmWLLfTfzH4s9gxBuqh6Ar3VBwhsKhx5GD85EQf9FKP8kkrh",
  "key41": "5vKyh9WAqZFVTC65AephaLE193Mm2swTaGELCsuA9AVp2dnMsbdFPw4WBdFNCt4RkqQ3r3C6HkuEPB1BomAU5VBp",
  "key42": "2JQKudT1V2fzgo36BPfrUTsnLw5DYSKeCVTHb2D5Bvp7kxSrUKgb3uZoaaNHWV3uG2Wod25UmotDML6AQVxEcGfH",
  "key43": "3VuioZ4P4xczGePcSYhBAZsY5fUzGhwh7A12U9M9ZS5EyGLqWRUNr6XTSnto9CuDJ8wQNDsEAy1EvBtfBTyWJ1Qd",
  "key44": "tY4VLzSVaLQZhG2o6wnMN5wAgmYD3AFeryhCLf67UBieXL9PWQCg8kyDxSVf6WxXyQTAQKDLKJ7xaLyUqnnSY6V",
  "key45": "21wF973uHQiGc2RQmGGC9zY2jgHfKdaMY9stakoAfrAvRYuQ49ww77a6oiDnoZ4tkQcuhp6VLHG8zwUVtXYUSwHC",
  "key46": "Dq8uMGboLZiJEhGV2LHtjnoAin5ix8DC6CCBKvfhCGkB9kYHDuCtjcSqptiy4LVYJozw8tMmkeCVxjrBD7DUuvg",
  "key47": "5oAfqUVKXJhgVSwAoszqEdawb1yvY37yKMaQxMnPNaN8KYmMbqqnqz2rJQqq6ayFCS3u4FcjM16gs42HYMb7MxN6",
  "key48": "HRtTGeyj6iQ52wNqKqLdt62GeT56Gkdje4GXiiuapVDtKjNqV8m4veAbgU3sqPTq9hF9i8qP9z9wsi9dJms3DC3",
  "key49": "3BPpbtGosr98q3nbQoejCAjLxvKiw6UaiKoFAGwUaTbcBe7i4o5HTNyeHN14tvExYEmVubrLZpsUaQ9bzs6FD869"
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
