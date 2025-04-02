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
    "5B4mdc6Rvb3LceAYXnr1VhdUJ9wwuYiyjwcgsGCFpY5Wv3JSLsSAq56BbW4XbgJaXzmLbDC3nXcagXC9TQdqzwQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZGm5xoGB24TVw1Rp9fP5FXFvT7WHLwfCAjKy5njDN7GpgbbefeCVDVx1A4YDqHavb8FFMXqd2mPTghdZzxNRMMe",
  "key1": "653gGXnhnYaVfzMsx6ge5XcMougHwmh35YriUTGWBsPP292zxPgUfTuh5Y2kv8yzb7RB8DP48YecxE4PmGEvJLPK",
  "key2": "5zc3U2tkhh6dgR6taUPuz9GZ6JtX15piCvesL6oKquypCLbxCUN3rG6dxzxz1JVYQsPjheZVzZV2zsMJYtTe3CZi",
  "key3": "Ltx8eifk3LPqW3ejpZrpvEVWAtfJx6FFrzXWzDvf5TctYujRtExKzX83PJjhUzKkPafyTdDg1yb97suGFzo9tb7",
  "key4": "THKeJgWDTAqnmZD5drwDqiYZx21YXk4nDw3Sg9emnjJVitFvTjanrjpS78btjt9zqVEnHLxvPzCtmj5SqzUi7A2",
  "key5": "32hg4tXZoj75ucEGpe2MGTvHAPCEL4ydn11iDbojxLegYudQU5jnJNGvv2zLLB9dTeX1QavT1ELSDz3xjLpJYp6T",
  "key6": "5VpRsBc7dmkKtK8SAqyM15mkCvmSPUn42otcmECtwfvCpP197oo8qNHcBLDKwKdYD1n16yLW5c5YnN59jiXMXSrY",
  "key7": "RLGqzQYrq5MxdE2rmd1LGdenNsGgGvQpnmzP5zS4QqiGQE8tHbnwiKzbGRzZ7woHdkKM2AWDZLeQBFef4FDcZEh",
  "key8": "2pYjcDTGQEpffV1CkfZ8izoysqwEryBsDNgMVML4pR8nv6APFtqdfRvT6QKc2r65JPWzaZjptLdiqCTeZ287AQSw",
  "key9": "4KVNEwnnvpBKzjRpqYtUKfW5kU1R69VFGZ2K4PKwGxzCPcw9wo6sstZHTZmrB51dTqQzCd4PUV7v8EpgBtrCUR9K",
  "key10": "yxrcbAsAqDHbroEFuJaZXXbDHJGnNmQJ7cXNH85EFBGuxvqZA31hHVfLSSz4q3KVrndvTWPxxvgR34LrhGwTqyE",
  "key11": "679pJHkcpqfmLSj66vfkijbMnqJe7WFkGa87sreFQoXjYDhpD1xLj5q1yGMLBxaauTiG16ar7znr299JKiUtaMbV",
  "key12": "33iBRiwYEzyLedcBAnKUZW2TD2UJuwNuCcjnhZ6m5TNaGK1bhDzKTCuPuDh4UuEkR7GZX3YrSdpi7eGyyAWJZzps",
  "key13": "4THqDST6aDHhQo1qT7P3NeGvTgnEXRDFocFZ3LjQsgeYuverS94VUoJoCUu92WumiE2kj37ChmJdEcBoZ7fZH8xW",
  "key14": "buHafNsvXivLPJ48P8v7V97asnJ9beqtrDtmGo2DuDx6Z91E2tVX92fxP6xMpA1LcepoPPeo6c1KNkeww86NkJK",
  "key15": "37PtqsR7FignsRndVccV6fBhn1NJpNMMSKGVozGyVRzWE7f5m9EaksyxhmU2bCDzuZq8PxNrdwm9mKaUUPTJ57T9",
  "key16": "UrcdiRnZLWQo79jvGDUeLiUxokYkRM2ddZ52qAxf2rp3Lp5ec2vuSZyafZkG37JwWskitedB3xe4XvvRqpJNnq3",
  "key17": "5oAfpH8vVoGLMZCvLtfxmBobXYfyneqv6YR8sGuAcCRHub61H44XWVtcYhKoKLHfzeHmVCdvJjxHGxbN3pNc3EvV",
  "key18": "ENkAjKF2cQyJYdghasD2EFG1Mo4SGkH87GADAmEcHBVUE1ihKvRCPAanxSuZ2VbgE2c7DK2SMNmUaYggxt7hoGB",
  "key19": "4UTaAtz6AAk9UCedsZNMgvpG17jqibhoy35LJSEX1aHbY7a6JHTGSY7EmwNfhrVPVqKpCmSpHGTXBFaXF1aaUvuc",
  "key20": "3w7ujw3YRCmifpmmPNb6yXMANLPayn28bKtQ2BjagBr3XzjxL4SjUPe4uqqdecGPYXAecV2VCpFV42twgDYfcUWY",
  "key21": "5DsMSRjCPghQjRp3FowMzVDhUe6fP8TS3whsJdvtb2hcW4h4foc8WAsZknw72kgwKZnmTpck7AoiVqHbCyCrS4Pp",
  "key22": "2NKTTTuNKcR8yQ7wBTWwPfqdBXTmrCpsAwSLQpda6nVHg3buoRnVoQzEHHGUQK7SDHZTT9xeArkF5rqKPssDeokU",
  "key23": "3XXR7t8HcufxKq8iBpomZjNc7MA7oxVnUa2o8pe6Vgz3B4SjWDoygzEaeM8pbTNFS4nAzDc3xUe4bsfuDVWeagTu",
  "key24": "31oQ75eXPLSAvLV4LMt1YTcvqStqbAUEf4TBRusYgBLijSrNULQK9aREvWRr6wcaXw7aY1GWtDBiWpaLZrguf8Ug",
  "key25": "PNQaGDoeoU68qWJnq9RZ7vQjqouru8iPsM4P8cb7LrnFGrnVk8qcNNHT3b7hpzakqNDB1bhhaGG2YjkPx6BPdNG",
  "key26": "53G1ky66gmiNir2Sx8ksPduw2ZFzZXk9rhoWgVH3NaRhRS8ELBB61vUhH3sEMZsxfL8oZQJQmZWbzVVdvfuaT6ao",
  "key27": "4pxfbWuCZouzLZu8TDMXnsLgbR8bMUKZtY3fPS6rahuqEkqvVjVGXN1Jb7partz48qJM4zYsFeK7uk9LiCLLEttm",
  "key28": "gECJF5D9csmyWLRzdQnsTmfTYkSmG8hGYjqEeYvMV3PVj1PibzUBFDJqraES8CmJRaMroEn2u8BcXixLDX81UKn",
  "key29": "4vjoE58Ta49fSXL2dmi7LBYMRbkyNmePnmu6ujbD81fWjy1v6AnA1eq62tCX1YvqKBvuMus6tdx57H2eMwuwZRxd",
  "key30": "3uHCbqBpdiPnJ6HLGBg9EZpXdE634NkcUEybhT4xbAN3pAsX8si7gof8PvhtkMgn5LZNaVKPKpYfKRyjErh1xd7m",
  "key31": "3HznZoYxQjgwE7RzWQNxZbCaoWBXDv1Ziiq591vt4okPz6yJEK4hHRu8oVDt2KTewQYh75p8Y9aU2vcwSbH6iTcW",
  "key32": "2593LkPiu9wZ6f7azULL9BjJ9jG6Shi5f2znF5vygGELFjwhB1PZgrSh8ZhTPt1prfFQFqKiKBpy4qmGmzzycz2p",
  "key33": "3oyzF8GXMQNekkVDfWhRmYESoCQJGY5xzeGQSw3Rcsiy9coYBPedkFT4VGTq1C1oMmJMgrwZELc6ShbbmUeMWBdu",
  "key34": "XuehBtaPvpFbBiGN42G75PWeLfKVL2D7eMsGHY2a6ZKGUVUB8BADWh6DtpMP6tbWGmHKjc62cv18FJBjkyAQ7KM",
  "key35": "5N7McttDRJX2gTdcQnENUB8mpvCjsfz8ZCynivuCeo2mBD2ZGzqoQGcQCoYygaAFqMbVecKdMBnGCrx47mcEUoRK",
  "key36": "65KUxJ1DgBWPxdyBCpySXPEUEotjYkFGSeziNRWgnHy6mmXKBV8d9A3HW4zcBuGNrWADJpD7UoiajKj4dBNddhJT",
  "key37": "4miNQF26b4DPP2PkH6P5r5sQHPu55ZVM8ijVA3ArXa27Yze3gE6FeRcx8U5xPj61USpMb3EjkbRnEuxQyD8fMwx8"
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
