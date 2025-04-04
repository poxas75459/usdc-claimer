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
    "3weaqqf3ZDvehzyrtmySevJuefZAv7FMU3UtcRAJzN71ZgiMZ16KEu7LEAgsidpb8gfQHbAaMW8ZvQH1tFMiezHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GgdmzQjMYHrqybPLwrmUmkWBAauWLYbRSwoV4q7RDaovsWXnR537fs9i4Ab9yXkXKGJNrsQH28KBcZnpzn7NwN7",
  "key1": "5SE9jeFmp5ZgskJ4ofenxUj8SKbGxyqJ9172m6MTqTegBBoqpAjqmTCDeMMZcUpy8VShf9yp1372sR1BH5971ckw",
  "key2": "5pjUF9fNrBK7fq2gEhCy8dKy4BHRbakDNjposa9WqrxJLnJA47mzWZ4YMTXm8of9JxfiUdFXreQDZwAYZbnDHowS",
  "key3": "2EVRRzNGrQFS5bhveYiNJ7msPbFod5LismvWqXNbj4dDHH5ysppAAzLwEZhq5RySMJLt8mWc1XMBmrqXiKFJdRMt",
  "key4": "62gRRe51bXgNWu7HaNhHEVLKum4GhRyUCnwikfjFzs6Yiwegh6nDJDq831jrWo2iEoEh58SMLidKfXw1tnekEq4Z",
  "key5": "5gujZ4iwLczKPHnd8FF9phf1pywn8Spqu2zQZ9MtH39o3nFU9FbJHpexCzkYw8bNbteN9J3yX5aYPLqV2Qd514HC",
  "key6": "YmmLfsqsZdGqTBqhAFjWERWFyxRdiE8NPFShn7GmX3ViUtkHeZ1F5dQxJ6iUG898mPNKrGjUbySN9n9bR5pVHvY",
  "key7": "5xas3WqzxKQBz6fD6gh5n972SckhXH2yRg9oiNfesUUPA8M7GtffL3x6uVryCLn9L2Y7nSeXaGyETUBUihhC6TGP",
  "key8": "23nKjKyG25ZfGrKLr99rdgowSNJeEpfX2NL4p4CVrs8UKM55MtfafA5WsQq3Y2buGsXnV6yDfgNUfSsy75bkkF9h",
  "key9": "55on8yF5TtBhCMjYtP71agLjjMYvYGZSc7A6SdqCpKKnzLauGDNS8pJtAEnKQ2vsEnJ8SHNG5X2sFpBy2eUVTHfZ",
  "key10": "2zj52Ak5CVs8dvt27CKUsinTVAy51jN8q56t6T7oB5fiPmLyJ8mgqG64xgcJeCAwy61yA9SPhGNLEWiRi8ynhVqZ",
  "key11": "2FxZzuT1kRj41ibhuAzkmnf9cNN5QWMATQbAJHaE5dSTqPwuSKwhGmQJUNPbQ1nFZijDSkZY9QL5qrgwQZsc7xXJ",
  "key12": "4aT1DVJjsx76BDuzKKzPsaTJhcVvXCR6jTTyeqk5xcAhcGU6SKNnt6NVFPRKC9k4NdEgExF9bkKEZpK6zUSWQeiM",
  "key13": "52aR1dETQf1FYikiGLTe7UUEQg9BkUiaFeynT35YSUebCxkKazv2LFi9qVtxpziu7URfS8Bd6GWUUGkbpHLJ5e7N",
  "key14": "2MtKRqGTQzCbuJzaiDWQuTuVmdtEoGxDYznXg1PMYhNEEidRJgQCdZEJBkGgTokpQP7tLbqCnYFJohTTYgeFVdvZ",
  "key15": "2ePQy34cEL5VTerv8hDDFQbvTn5MgDLKHeN8Ze2uveK3YsHD9FVjL8PLSdFNcZc6o7Pmv4q4U7a1sdYpthqCLoZi",
  "key16": "3Z8NL5popQYmuv9wQXFz4KA9Jwuhj7XzMtAXi5ewWRyTrSYp2yo2PfKdwfASH3FZXNeMuFmm2Y2mehFVxetSoLjp",
  "key17": "63ruq6U2MQrEqXxt155MvV8Q2adhK8a89tvxpo3Nn3fxJr3SnmMYmNPgUJsobmyKUnqAjgwi3kRrs8T3nvbiyJz1",
  "key18": "36hvBE6ygBt7aJJYQEbc4oE1dBzPT4haqT1XhC9t8DxkM25EDerYDA7mc1vwR7gRuKzhAjqZkkYgNCo4nsaAatPM",
  "key19": "2rbcsPfxYG9VGJx3JeW8jbVYs9aCCntZezwAdZkfWWQj4jxpbmESkD3w8UMzZF45VDaa1MfZGLH2jbVDBx9aTw6f",
  "key20": "5QomCGSW2FQJXaWNxspCxfFKkx8WLua2UF33TDQUsNFbEQMYoDdqx3LvcBR2Af2NRwJosPR39cn2B8ouR8432mJx",
  "key21": "GzT2mmLUTgQbvZeuCMSkJ34nyKz83Qncw3xPjKefNUuJ1uKbpieSvXikq5qSUL75ZP9mxupcYcumrQfa3zHzBaW",
  "key22": "Y11geCpBXJmLiHj38uchnhcoezzJnYVcEYVPw1NdCCbkqCyubn37JHEX3jnBmtrbkWgdDFjLdd8qyMf2tMemnNP",
  "key23": "JNgX8eSAjYsNPVLy1Hce8eA628ecC1Xd5AzLNF25rR1Nnwge5X6VbP75WKGmUKEdX1LrR632oLZHxxfB1N8jjX3",
  "key24": "2xfoFYZ74LnmPKjRRSCHKvHdtdW8KQsrgvMnk8VkPpMkvtBnX3TFUrCwcvAXfJVZFX9PHVZLQCCBKFsAn1WBNf77",
  "key25": "yUNqPjiD8SUcWUBpi17ZuLMCYAgU5769QVPx5WqhiDof1qXZgqQXUMe5czTk9n6PrnZ2AaWkrSmbLnz4h9LFmoT",
  "key26": "3VKeraeJGHMKgDPaYuQmxNvajsDVQBQRibM3VJvP7VKdAWiuZhMSppxgDwu5grZSeL8YJufe85c6Fa3D4GNWXpm3",
  "key27": "u7uLzgEHmdWHzC9dm8JVvshCb4r5TJhNJwPuKkxL5q7Pmh7kvHShZgFPjwpceh3DRvst3zZbxPqdM97BPW5MmjT",
  "key28": "2PicL95U8FmpAL5kqiEkccTgMTpYWDkYbnJSKVMH8sChvQajZVCVJmT6YwujkTS6UcX9ep6AhCz73xVdEfoYu7b9",
  "key29": "4ejhjB84K3AjZSoHQfD6kYipEvDFG8eWRVfJme7PA3MVp5eHxVwQjmtL2gnS26jMF3z12MWLnRqM7fXTu23yEdUf",
  "key30": "2caWfbD2XtSDHokWJzgMq62epkSobuwbTYdqbn9WtyBmp8jzRhrxwAxk9PLcWop4n2T92pXDZqhVfWwZUbBykXno",
  "key31": "4Wb3PxcxHJDAi2rPcepAUXdnd1ZnVsWQr1YHMsGPgus6jQVPi2PGVZjYn7f2Wsjc11aWPty2sYHCXt4NqkMi5QQ7",
  "key32": "TTc7RULHr2Q2v6VPN7ZrYmZafC8oMbV5GesJs1pm6WJ6CQmfG4fQSi7E3PAhPa9b3pC9YxifqAeF3MugTA5VgHk",
  "key33": "444TUegtxfXQtk1j2UKHyXRV7jpysCTdpM6MLiyxLGbS3NxYgbgD71qZ3SKBFKS3Men2rzYUEqZtNVAN4AHrFFu1",
  "key34": "45cw2Znno7FMvnKFFigkUQRcCEv9e7SugXcgeHYKmGaFAJRcVf2io4nPdS9XEhyuNS1HzsHU9Ks7PE5wZGYkWZeQ",
  "key35": "3FAjAiLN3F1BPSXqFir5QM3NkTrEocQc1G1Rr3UpVZheGkRYLjHj5HZ86BBvboARB59j5ryUakp6Me8N9Kw7Mbof",
  "key36": "zSVGLSRmR4NcunmptzpxwJJMCP5MuBkBwQWVukYShodD3pKR1GnHVHMXSx581WDQEr4e7gDsGL5u48W6mMEzgGz",
  "key37": "2ei8MzL1r1HMiQckxSbv6zK5N5auiFPsVeiQLoiDk1RAyUSMR6hoP96GWrdrcUUzaxwgXmRBuHfyGzAJjXzMUVTE",
  "key38": "3xRazVMBkzC664ao6dVbNXhDd36297P2x3do3gfWwY6k8AMUgJPTV167CjLbxMaH6hTRPuRgw5fDHauZyPAce2Va",
  "key39": "CCwLkCdjw7grwdHN1kHXGpLi2eVtg28CqoUCVoUXzY1kDJb1tkKMAt7Vs5T5kPiPHq7Y5e9cwWrPsPEqJgXswNj",
  "key40": "2WkUALPMMXCssAc6DjLyKVvMdcBXQESTyKfUahiNzr6MoxTqYf8BWC4zGvEGB6n2kJ2pspiqmszLd3WmbqHdkbuA",
  "key41": "3njYjBoEkbE8awQWq2EKQfDBAYqyscNZWY6XoRKzY7XR73fgDqifygjTKAxDegZ235XNPFwQUN7c8c7KAxkHScji",
  "key42": "51hcCqQRetcbxL7YeCEiJcA1B3TkUM4tbmEhQLQoJCm8PUi4Z6pVfxXC5nzjniJgFAaxPro45v8YTq7yVFWY19h1",
  "key43": "5oNBiHbdcG1HNgWz1Ww7DUvsNQDz4gdmJ1GsYJ5AZC55JE3M5DojkTfkE8myaXRGzUk7EbvNAhdckLvvGoa8w3zF",
  "key44": "3QDqbaaXe6sET9Xsi1hmdovySoiFLfAEfPbyvp7NGHbMQnGzXPySNsS6xHZtChDaJdHEE5VvvosFUyzimjspqGoA",
  "key45": "3TVmhd84CmNiRs8gwrDeCwAVoECesPvQrroY2QYKPkMvG33k1A3WchPTqNk5eT99jydbgxu8Z8rsqC9qqCH2eraB",
  "key46": "1957YGy6tG7qhFK3XceRPaMMGsq65XLdb9e2JgnsdUKW7kGjq2T51VM1qqj9aoDY2CZUvvGRvVUh71WuH8p3zBr",
  "key47": "4Hmt3jQYwDK7CMsUdSbqTXHaBYy3SLJBREw3hmAViBkPBSyHkpP9SKissgJhjU3wqhpVfWG5oT3Xq84U6TQLeJC1",
  "key48": "5XffAnjdWAq9BiMGr1BG6cw5tpV7Pu4BdMMvUNTq8w1oSu3YCucnRYW6AsKxhYhQJt2ntCbaGb5gz3iW8caxzj2K"
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
