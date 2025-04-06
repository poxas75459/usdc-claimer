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
    "7S6wSZYfQs46BTsH3xvupU1DXVpCUQ4vquJ2ebuMYXCQF9T6yHABoW6xgBVB8wUpMt26zSyrzPZXQtxbFGaWBcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62zWS1i4kVoxLxrcA7qUaLKVrbc7bnbNJw64GdU7zS8BDsdoDJob2iYqgKhs4FAckEZWYcKFcS3urEMaQapsTNNi",
  "key1": "wPD69inwa6BT4dreZyEQFFStWGqnpr8oT32dqGup7VXVxyaikhTmuDxbmnyR9efrAKR5cBD8JLHPn7DkqRtN6Go",
  "key2": "BhNSJRQjYLg69hNEYyQ79oM3pProaoRCeUEou8nRhWBF8dvEa2XfTWm6XSFni1NJxiVsdH9rzSQyGG8MKr3JtCL",
  "key3": "2BSfAmcptRMsmUgyisEZCZb9nPDRANNMrQyBR2PLqNbQLfrVLCLRBCEvuGFtRcgXqsy9qpgBSmg4Uq5hyzrnbbxc",
  "key4": "52E253bfSwdPCVzCnW2nauvQJHXMx4JBxtTVVpqF3MVJxVhJAcJEAtdMojitV93JX1kDPtHAasusRBSmwpsy1BSs",
  "key5": "4Zy6zyG1ghgbZoFtJoy5w3p8d8AuCfbSRJt47ceuGJo39eZxwYbXRTyKBRcETnjxPUABrELRLvPK17N2PcGvfkmZ",
  "key6": "5UFE1561nbKCp6XE6r8B4vG7tyiwhbwUKgpxEwwAsbh4GpE5SLa222GJzRGtfLtiqqTFr8PLt6EYdFQptdf53Rhs",
  "key7": "4SEjcLj5KuAFkz6P4ptXa6RVkTAXpwKcw4iCjnQWovzG3cKE25RmjXrvFYeSLpkb9XFQM8sPKJvn8wkRVKoqthGk",
  "key8": "2vALF9aa7X5bwmCkn5YBfoRNh1d2xWzHYomp2PjpYguPQ3YtTyn45Bqx6ftGv4AZHmW8k7CBseSW66RWfCRMiJnW",
  "key9": "5YNPKnSRYRoVCtF2fiSRvd7fCbv4KDhpngz1XWjhDnzTJax6KigAEKNBUqXkbTpo8txVMymt7nWWey7a3r8efvs7",
  "key10": "2UQQFtZ6xXHFWmhwqdu4uoB8fL9Dj98DTMzsVTSojUjf4au3d5doxTLAVb1WY8XLupeTyvCMSsA4L8Loay66xNjJ",
  "key11": "3GP6V5EDg3ZXfXmvbziA2bgXwTqhvAr2gAp6UFLUKVNxMG9L3Gu6WS6L6AENVeCZJoVSWz7dxmRCwDkxaxPzThYk",
  "key12": "931UxxWuNbCyRgjtM7oR4jYVhWEq4pTjp8sdmpzHsHinWERt9PiKenMJAwZ7G72YttwL2r7Yg9dSSGxb4yUZ3ZW",
  "key13": "46rY9mBVizfBwTethqJHfAuv6k64LA2EhzQUFXr2YyNpUCKMS2MCvNjx197pTQhmJYdPVAgZQKLuc9WrGW2zQuaz",
  "key14": "Np2gTaGfHCpGSNeLmrUJR57EVvUnkyQMS9Lh5cMnvDL6x1sg7w29JndHVX6oeH1YUkJuzuEDKtobFbo8DrHeKyv",
  "key15": "42FDZoEufh47iGBNPaQcvyKdmUNiBSKEpziZeyJp8WrB4pnXqDAvxeYKmMda6H6wJf2EwaQMuuHYokwhEe3fDXzy",
  "key16": "3K5BYK3BMU8ve6s1J4osQkBAweUoFynTe1C5CKhyAfRygsyH4xBcsrpXJUMAuhjrnXVN6vjjDe7UErxo5WbhSkAv",
  "key17": "5Rz3vS1oHtai7wHa3WaaZVJFw8SycSjzFcJJkqbf5kdj8QpuGZr4VLJ3DurnHcoMCwg8a3JT9mzEMhMSjW8jkdsm",
  "key18": "fSjEmqMLT3HK8hFr6fsxsxE6GSSWem7eX8SSL4Yw6WdzJ7DQQ2LH183UAzayU4Yh1xL7M39WGSbsewEQspVXTBF",
  "key19": "59kEbTbSz18Ev5ySX3Uock1Gq7q1NgUFajUY8hyzFJGrHEnmrM3vDywKjJDZ4XxZoH1fDkWquF3iEhb74yTY5Tw",
  "key20": "2KgpKZQyQHppafrsB2Cy8oARaT19vMpQou5AsmSTWwRmiyUiMDbyWLSX2w3zz2z67J6NWARwWnEFSPWAPPYJFBXR",
  "key21": "3CYfcokoXerxZSBcxLKVzjT2kvPwnHTK2HxhqCPd8QpZB42EmNTrFuvq5B9C4JVZemank9GZWyyhrch7HBPeRaDJ",
  "key22": "kgwHLKLqUAYA6S5unMAUJ7Koem4Cwrr4KsGfpdJyczwgqnnnsTtJsscSuTEcujyf7kirrWUNuZA8YqCKcksNjLT",
  "key23": "5caLUnHJKzwBr1HuFBUpTATkqgdn2Bm9ae4y67Wq4Ug6tQ3xvhT2qteFRuzjZMjquW4Qok78omAHT72AwbpYqHgg",
  "key24": "26Hzxe4YK7jUCwoG2a4QxcEZDmU727ydyQUyKNbaLmU1XDheLMfQHGnPXLUz2ZPc9BSCCzjtqqYYxk4CPRTYtz9p",
  "key25": "3kfttxkJTez7EkhRSYcLLYYzEJQVo2ZACoXEjSH1DE3WUokmLqM1c8nFCJUpQZ5dH1F2xaue3WTitTC6DDso3RQ",
  "key26": "4ESRPWSeshoWy83W8NeWi9yDgH4nwm4fq5EttYbS57f9TjUuPYd2ekjVLQ5RHUNByM1ZaX3Q3fXFGDTQL64yWjMo",
  "key27": "4DJhUQ2tkHRFVbQJSimdC72ppqUSgwKrNhGXUKGn5UYYqXsov1FKi16vYiEqXvBRPE9o6qA5byg3dka4QREKf6mM",
  "key28": "5Ht1sWbCmM6bekELfCjUfeRH9BRqFqkPJDqMHhATX67fYZkqzqh6TA9ZZ2ykzkAtwdRYzgwBRy7E2oxXnQikxffX",
  "key29": "4ykALC6ihT3vx49CVVmdqAGtKH6a6zfkofdcbHVSWwVSNr8oNYfuqzFDUk1ARGDS3uUuUQ6QUWh4seEZG1oHDC1c",
  "key30": "26p39TDKe5E4mYwBPqbKZte5bZErcXqSDnaPCsKKD1vmQKfZhqTy4gcTBE22rHEmXTGjx48fohk5rj2zrbu6AQ7R",
  "key31": "Uo7gRqn2Vnac79SW4KbQ2FbF2fXiryPjGDH8NbXFSon3sFjuELgkojjbFCXQEc1zSfTWijH5iRqdymYfhydaqbA",
  "key32": "3NJZqne1UJuKEK1uHsQufh6t2SsrkmWjPVzVeNgNQv1he4quQkJBpdfXKPVfYYmfeKMPhwA7RtbA9DhqaNQFytww",
  "key33": "4ovfe3bUqL8q88RruTErQ1gEMsZDQcigYwbLCKuKfnVr1oTkNHMaeC2mrLKHd8UVQWKkME4atgmcRvefczA79LGu",
  "key34": "5ChTCHuHYPyBrvLy1UySdaRV1ysuwiqUCV7WrGQCKHQnhfRec4kSrQWbRHYgt8EE32EFmQMkF7jeuHgpy9UCgVoW",
  "key35": "2iRPdCLGMDNytmxfx1krHkDyKrxhhgnaa5QmVEmt7etAB5yEoUa9PLTKqw9EiWq6sF7gheVtXe9PNdBFkKtX5s7Q",
  "key36": "4yHx4Lb4eQgFLoiQQzFDjLgbvfpjNF7WXrUQ1MXLrWLZaUrT8nfKKeRM2CF4YhNQL14EhzeXjY4DzcrGkWvZKJcy",
  "key37": "2TTn6iGQ3mWgNAa6Y9jg6KkRkhGodGP6CheV1qVYAzT8RDnAAT8WTLY9nL7ax7bGHvUQz2RpnK3WZuDa3bHKYzHf",
  "key38": "5Y39vrPjbibwTb9Nmey6owVL3dkWAnydQej2SuFsb6w627Xrocbj8jigFZqojCWZR4ykyvtS7matf2wyoio6T7hV",
  "key39": "3U9yah39Ck4WjB5Pef3efFwhBwUv7w7y3e1y6hym5HvGD6w6Wzo136suJWsHGnYjfcY7YFfBhc6JPnNQkjyDTDTY",
  "key40": "47hdwBfsNR3sYjKgZcSW1w22i9GqhFtVrfFvuGcqj7ob8XgABTrcfvP8N1xVfzunU9rY7nZth5QCrJ6E5EaG9fE7",
  "key41": "3guKxZpBz3FUs4u5xv24ornTUm9J9Kkz1GdBgbcf3fzdCmgBixESnrHV6JwBa5XQ2yT22vHAXBpQ3hivn3pXkgiN",
  "key42": "h8ZGFweUjhRhhtg4rGqUT1GJyXDby1nZ5qKboSXPZTgGdeir1SJTfqKshcSd19MpXf4qM9M3z9EvPNDToLLuwYi",
  "key43": "579HB2PJ9JYVpoeHC268M1qpvnN7GoMADAn5wqgooZ7mrohY5Hfx98MM7jc2JQ8rQ3WzwpS81HfPUj4Z9qpPrT2i",
  "key44": "4D8WLkmsDh8X4oGSQyU1BGLigGik5967Ri9YUaxrhSKfGfjs7nya7f3NuVoMCbNMYBj45AfDSvto3zvXqYBA7tGz",
  "key45": "4r2ECp6ybh1DdRFus7G8yFRKus7NvKkEX532kokG8twvX3AbcYNaKLmdDeBZ9drSymqF2b8Pjd3gMQTbuYEJ42EC",
  "key46": "38n4NouXVMuieimprs5H9d2E1mHcWftayxADa9kPTEFbBsY7DZCbU88FwKx5WefzTxDGfMNfQPZreCxx1Enuv6KV"
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
