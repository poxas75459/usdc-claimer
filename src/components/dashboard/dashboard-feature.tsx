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
    "h8fZCAYCQBTvUfB3EBt72GqFjrwC3g8upyAhpQtKSuW9rncCswz7enWt7SYAgH6B3LiVNHMrT9J2nvAKuT2f8oY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dwsLyEZrEGzYSMt68jm9ewoeBwn1CkivBZNVMh44ZvXRQsmP7ZRw4rVV5QYfv5BDpJEFj5ZgS28c8qV84Lj3BFz",
  "key1": "4pvu82y8wFGxqNEqDsva2GEdLcnUqq2KTLdfUtSN1j5jLcfAsQTyGYact5GfdxoPVj1XfQaUc7E5qCsd1M1V35JF",
  "key2": "4DtQSNaRnvS3sgESjiUf9HvGGgLgqoCdydiboo2JwToTNgfrUnYTEjPAtU1DV6BstdsV4Gibcwhbuev3shnFs9GL",
  "key3": "jEP4RvBQ3eJCdjnugi1Sxy8NkfUv4jra58XTXEghocmchc2X2xuXhkFvA5jaXm5NotCDagrmcrq9i4d6vTm5HKU",
  "key4": "46pG3yAWGSE3L6TkejKUNw2Pj6eeBbZF2ReFexQPv9E66YJKB7h9LtLg8THrhUMHPQQ8dv49W1wQESQ84DTzgGHi",
  "key5": "5RMoZ96LKbhAFXZeE8UtD91HQ4aLYMptmzk8aEb3aaVCnqp8ybzdVMDooDv7qdHCGkok6B2MhdQY2SE6kNbq93Uj",
  "key6": "4djVcUpk3ZN6HDemo52GbwmGZinfcUGQaJso5MkokTQVnmR7o4chkP3SKC55TUKTi2PTSHpW5YoWNybghAw5tP9Z",
  "key7": "suF8gP7PeT1Nvob1gDDnqbtn5oAMhJBLC4Js7M88SNkKaB1VRGf7j9pdR7u7me52BaecgpDcxU68FquPSkDtqsS",
  "key8": "5cPKRJqWWWS92cyQZjv1EuJaqM6TxkD9wgRytG8fiGuoi8TdpMLbLwhRLwTLaZFgoTsFXLxaKwjAjjfSDVUWYvXh",
  "key9": "4crExnXVMZgDLVhiEk8NN2sDHYah6WfKmhJ6XgtdppjExMRSJt5nJSPQz6P2S2CKWwoaFinCDRYouKUQBBStpmtm",
  "key10": "3EnChqQ3qK2r6CFjLkmHV3msh497mAcsGXSbHoTopPFgaTcmUm5Mp19LYYVKCGoHNSBbpnWSyHbYkPMse8mKoMDZ",
  "key11": "jYCLXyhELd3pRgcJLKhgURt9FSv6DuvU8YSg9W8nX7vTisSWeTijYgFNhP297Bd43wbTzfD2TTpnDppwdXzeLtP",
  "key12": "3PDAdJWQLPCBGMKJ3SjyRg7RtihHe6QGYxw9yZzRRB5km72DPBffSYxyUSN56uvy4DbM8y2kAuMiCLfiqQbARhqh",
  "key13": "3sfWzQoyX3XmG1jmRqKaTJQ9KbGQnhCPZ95SDDa4Xz9DduZxVez1EyTqMSNcWmBHgoWVUn5993qkxZwoUpKXRky3",
  "key14": "2VbBFhmSG9KhP9GWYZHzbjgQsb2jBYVVQc27kQnbgLJB551sKb5JTFvTdkDhdBpUU5rFaXTyZiyk2NhZ1iskWM7u",
  "key15": "5LrW4Qp6rq7jtSrhPL9AXCRTgXqtpPQp5cHxM3NwJkydnTWrDChBH4GEu3SMqgEvJczEsibVHtryBK6tz13ERJwh",
  "key16": "4NCWHzwy53EsATNsz1ikngdcS1CwQCHqbcUnmMFjjCq3GPzMXD6aKhXRBzVJpns81TRUL3t3ffrXQxdGUtFZfKcG",
  "key17": "2QxSCo2BCywjW469TaUJZ6Bbaw8rzDEQuMxBjNadGD4njdShsA6LXqMSNd8VicWZiBPmYr8WZ7qkHwWtWu1G6b2J",
  "key18": "m1qR54nhCtBA9pGeN4q2SDyqghwh22fzNyZFrPBcP9nQEuzi5LJBeTRs7PHwNn4p2gWQgTui9HK64BtLJzW7vMQ",
  "key19": "2HzejewZo2eSwgUgP5PyHAJUgxJwN3hRLaDLfaDk6dw8aFo85EXBQmv2PMLEa3CnLCstKWdFJByvE9E5hKt5bHaW",
  "key20": "7jDGCa2Z5pYUjjjtifGvtGffzmjiotn4VuPZfnNVFha8mjfqqjdwWgfgcFXUVGt5Jeyr8cJEespTCdUz51J1GD7",
  "key21": "5GXGHG2ds5r1k7Wah7Ymb4vA5vxmQKHybv1KoVeNnK8iWhy8HZ8LLrs98GRTBsuTsL7Sysj2rhJsMxruwPjem6YG",
  "key22": "2XTV8AhN9EbX6wgBC5e2aEKRutwagwp2GHLhqi4cgZnATMgwT2iDDMcHmzSx7oNFisCk5Yr1BHa4ppYPyJdZW8Uy",
  "key23": "3c4m1c4bXH3bsn9Y74rxPzVaZSJ9iPqBX27Dqw9eL7eVS4iq5D1e3S5UfKGP4ReikVaWFunyfdXsW5BkgfsXBjnH",
  "key24": "fUFXbnAfFomVpXfnRyyFFumNavThDECjXnpMwK25Zr1AZ9aphMhGDurN1c3yWUWxxfbvyAnLmdHxqZixDHYrMCb",
  "key25": "5Hh3haHdnqrbvZPAKyKYYpDvqWxCbdhBdV6rDo6AJRk3LSHtieUprEg2pe7wTCvnBAqvsBmrbQGvYFViQzVzoiHU",
  "key26": "UgqZVtmqzTNqwbc6YcR2c4hnsycgTWTXr4im9A1bbbTQGFfJM65L7jnB6mzHTeGT7nyyTK3xY7RScftQF1mqjFy",
  "key27": "2P1hM9tPbTVohjTwrcMxhQke52eXdpBMo5dieNwD8kx8x2ow9WhXCWzknafUEqYD3tkhnRTkk3Q9sM9TZaKL2sG9",
  "key28": "uj4yzDizAHZ8H45NAxchsougvq6ttGb63ovh8KLdwNrS1gY4aB9ghCyH7KugQbtnfEqh7B71bpqxedKRov3iVpE",
  "key29": "3P8k26cnpFVBYsUH96sfBecm9EEmcrGio546pMp62MLRHgdBynH4WcwHE3ykNubJeLXadQrenn74ab8TQ6TL9ZdK",
  "key30": "4VtbZhsujqfY3dJvicwGmXit3KGopjkgreycoaEMZDQfJqed1tk9r3FuWFn2qNgW6yZ4iReGi4saNc3ZVGuANr6Q",
  "key31": "5m1T4EXYz4QDM11aE3jdA8ZgLZbubp1sqF7fQ8hXdHghWdDPFGt3Jy57JmTMdNmFX8XUSENTS65tVj4vUwUghQMi",
  "key32": "4ArNMKpfvm4L7v7jqTBzF5n1B53HzyteMdzdPiYUS3on4TCj6kB6fJgCYV8fe9gosorZC39cpSEMoV1ASdAWYMbK",
  "key33": "5DmqheGJyWhzB6HbKaJ8h5GcQD1VfNidT8TyNSxVaxbzW2aDqJNAA4Gne1YWXFYmvXfbz1g1mQFEMc5wwhA7orNG",
  "key34": "4p5g11wr87HUAXeV8oTwWQ3H9C6Y7KmBSaRHqYsbCda3jS6TV6FHfvomiLjBHYYi6VtLYiGy7gf7kGsn6t2mD6Zj",
  "key35": "2fJLzUUpTShbU89VKtTRdiioEA3epWzgosGTWqh7vneYNjJQAc18NTwxmM9jnMrFZs2SsnBLAKTte6gNX2p4WTvE",
  "key36": "61iCfpJLUqQMHkopHuFKUBarZutsobfiUWmAZa9Sjh7bpefKNxoNHnyqVTxBKBmvojD4pTLWRn7fpJT6t5HMvw5m",
  "key37": "2a1a7EAdWRVxTNLfw4AWHnGRzGr35Cp3Tb7FX2Ltq63fGgkkNwi2r75ipaNvnVX8QvquwyMAAZTpWHYsExPAwqcg"
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
