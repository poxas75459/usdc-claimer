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
    "4jG2vpnoyXB8kMjHfVFzws97243HZoTg7yqRXQGc5n7TnsAhhkHS5wDRF3idmvbox8wic5BjCoAjbjjiB2Ky6CrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wEbocudvmz5GDnUKmhTMo9Zeqx9e1oauz2QHkx1vtgiR6BMdCSf26kbGyr4jcSHJktBhwqfFN6D3xt1CSNocSTC",
  "key1": "5VZGvwXmV55hAGEHyq6THUCZffHKfXZyp6sp2cqmgqNNkhgAXMgFjjBVhfvMbLbFfTEh9nSm37zWs8i4izDg9yRU",
  "key2": "43AJvvoFSM7SCeq3ByaNc7yToko3UCMQ51u6WzTjZdKAzDc7wjEWrTP12DkS784s59QpoB3Xi6uRZ57byoX2ctq2",
  "key3": "2pxEZV6XjCXnBnqv1dBE6P166J7ceY8SVmRBMAkQYYfTQWCMnARyLPcUiNmMYcFUDvRcY379ZSKjqS4unLe2Sm66",
  "key4": "xkjeUYNkEV7H8BVNGK9E21fpg94WWKYz1v9yzyFhX8xJM4jZ9pVx7tczuyU4LCh9WdMPtdpfwd1nDKz6X84K2pz",
  "key5": "5NdGP2zMTWzKGqac7QjBz9JRpkTPtf9e8LhccEt9Q1988snPh7KLh4qLXJjNz11cuVYaUKmGB7JNUeqGQA7E4FaE",
  "key6": "61Dw2zzjR2zEx2YUhgum8F2jnjcdHg97SJFcxtQ4JXN95T9dkGZZHPYDfqBG3ZbvDJwrLP7rKagj8KjJMh7tb6wF",
  "key7": "3faxMCLdMGfnDi5Bv14Pg8XwNuWK4tfAK467kvDLUXTyAuTLRjXcoVHYRiKn7KJFEHuptA65CBtywkKygh9pCcMu",
  "key8": "4aTabMuLZMAMxbQezDEHpMhmViwpiKN57Jz4cyxvLVsE6ep9gcLfWHTgoBSZ69q2xJeYT3oVUdUFEubTuxEKShaY",
  "key9": "L8V8KZ826r3hYsmH2hbRacrmeMDTd2xeFSxWhDWZqeSxx16j2S1B27qXwUkejvTQXAsG5YVsCwm3fQMPqEp7niQ",
  "key10": "4quJkxMXQu4RXtoUmyFgHFEFsfhwGurhDUU6tnFztKRyjnUfb4YwvgaZKQ2gfRL88ReM9owSiXCdYYZATruMs1St",
  "key11": "2Cwz8KhUXMoxhHAiPTt4nQrKHVbpwgscC2U71BEDtxCjQ3Yz1ZWESb8vDFuR59BeVPMrqZvr7YvvwmjALY68sGRL",
  "key12": "5oxgBckNhdL3G7XPPV4ZdrP37d4iWQsnmxNvhbkB6TxCHqrsdndiFFWiNbvJVKoC99v4AciYg4dhKLwdAVQdYJd3",
  "key13": "4MTPSCKWAAiPWZV67NJfvqHoWaRRfYY355FJWNCMYsC1abDpyV5KTFXh1PscwK7SfUp2D2tai3RH2MeRADBrrP5V",
  "key14": "3YN44v97J637kSXLLNvGK46kPSeB3ZMyMqmcN1GzvN4TkqgHJ1vSBMwjkPoDSoeyb1Bo8c5xdwDYF7R7bsUpFdFW",
  "key15": "62qFxVAHBN6de9vNCrjLYMjsjDs3zk4JprPQ9wnBLQ3RTgbFqiKjYwsF79T6387cocFiG93VDspfLyBhUyCxNMe6",
  "key16": "4VLhZwaxU5TyRhqZD1EtAKj6kA1Xb29mUqieKZgZd9KJTam9kPkjyUExgYY9atDtzD7DAr8pmCNkLWcm5rmjNJgL",
  "key17": "2C6kc8JTcPnJqeEN7dRscKspTzV7RKBXd8T7YcTLkxnbgY5VWW47oitXrBkABWLUEnSMd2gYcEHMU7u7x5F7pEYQ",
  "key18": "5vwQMAfMvHptzk83Kpxg3vXsnFmaeBGVWTPSFTesnL5qG5i3xPb5THNdvhZe5SLJ7jfNFfNegTxbAdLNiBe9C1sS",
  "key19": "3zoRa1sbeQvx7EeAV4iaPgpctR2WXnrDwZkTEhXfvp9CZZmxhFjT2t97pZgAwa3D5B5Vhn9he999etENiwSJme7r",
  "key20": "5jjpUmfe8Nc7mb2Ksz1KebdoKMr4k1iYtGmxuAWGNSx3cnQ6TJ93y5cEs1c8tUxWYg1VQQ3KcjnQ39Y1ScrXMv4h",
  "key21": "4cNVCgqR7bimoad3e7qMeDAxwwHfADvnRf2HbVMcK7wsi5c1VVkiC7aGuhm2GFhi63xf4qTZzuNVuc4U1FDrFSis",
  "key22": "477DcGc8Z7yzJDjLPscBYntvm1YySH6XUzfzUagPq8oC7e39pMXJbswFsE3CV6TVLa4rMoWwRrSGr7MpX7yhnj7e",
  "key23": "4czzTDGMcepWMQcuYihYYDwv8qjJezVXz68R3STRnHfSqiu4iVo4MaqNALLfvCKyTpVcXEy1VtvrGnPPoVMCvrcN",
  "key24": "3bS8GqDEdx8xjuPP3JafRzphaGJcnrfGUrUgDC6ucrUTasAA8V348K2y4fkK4LAvtcQMaY2g6noWtAsJMWVw81wA",
  "key25": "2aHY3a8pVCzfDbC8ETfn5WWAyDyT6jZwj9DMChc9Qsp3awH5Z2VYjTwTuBNeyTWMKNBcnBw33UmeeNeyBZ8MLXne",
  "key26": "2pX8jWXx6g58horC5W3p7ZnoYF25LPnHGejy7U1Fiun6wAbVChxszsocWjdkMpUCKEdHmMEdbuAScUsB2SHBw8fb",
  "key27": "CPJucqPT4De79JxVREii2ZaXPKR9ZPp7MY6iB1hLhZZ166HUZpt9qVSRjQCBhn65v2Z54qnr77gwWAD8wsUHHsC",
  "key28": "3ghc8eZhe5V1atcGiXPqukrLthpHyB56xHWq5zF6AD9n3i9xRWgXEfKKCk6vk8trihAsUf2Fdpd1sso22bXYqNwg",
  "key29": "3ASCNU1HWdTETqsCR7jiDJ1FWaMA5waovMfzEKWRH7JpJpDHeTykEsHYWLvTZ2Hjj5DuDLgqxEfJXqTqwocDCpCN",
  "key30": "5ULR1CcrvWfw9c8hfBHDJs1CHgudGpBTbcSaxkM3JUHKreb9ayhsnPsr6WbSMTududtPQ19jCuDTED2Ak3SvEKaA",
  "key31": "3beYpRpGqMZvYko2Wt3naeGz3Binm2sfHbrVRGjdH2LNStGR11qrG21JjZpfjXPs2NfuKD9j7ACyvu6ZKhU7gGFT",
  "key32": "5qY6XG4uFZb9utwYbh1nF5bPDpmu6pJdi1Zzdv8vrf78hp65fioxVLhksZg9qXR8WJPBoMCbKt63cXffH1V3ZcLk",
  "key33": "c428sY8FPrRn4aV97rzMQrX7vQQLBqpG2NZEhL5AkxfFVEi7vxJKcg3xn6ZZCJZuYBF6X44wrtAKfjCUGVoz7M8",
  "key34": "4BWBnDE2hbeFqc9XHVNJHsnCjxPcCUASJaigrUP2F1qNDeknRKCA6g5iCEKPfy6F12koSg4w31PVEZ1D77Eahw3T",
  "key35": "Ms957FocEGTsph3ELmhRNGsdAZW9WX8hr4u67WFosGQV3ntZ3ha2bDoxXtpsN31nfWuVZyGX6vWGXPc8JhMn2Dc",
  "key36": "4dbanUK7rYUYzPt2FEqBXiiW3toRYAg3gGFWTHg5upU79JDrwvbo7rizcBWo4cng89BtMrBkYsKUHFS4Riw85thk",
  "key37": "2CnFi6trEgychvAWe4eVp96BkxK4mjDP6kkV541FjFUhu1voGDDBZy3cVH6gHP9rj6h6sBYLaYNp5xaQbwTDrB7T",
  "key38": "4N6pRvd8uZtXHV1kpSgY3X79TKdExpDBJdLcAMfES9NEnxtrHXCWm4UJh4jirKaMEDCC9PM9qzL545oqrpDwuv7w",
  "key39": "rq92TQbH3ZzCi7SQoLgjH6ivsdJm9dBRvbsQ1EN8eRPd4WiULhxcEXcKTCsFWhZG82d3Y8BBZp4omAvVYAaE8Ma",
  "key40": "2EcegyjYSSkSCcaxjcbgaoc5iRgRqQquDVCXAjwe9FsdfmcCmq59MgddJL8Mep7UJEvAddpMzhp1aY7A3ZFA9pds",
  "key41": "2zgkrLL7kwswUCyBiWvcc3JjcKEN4JHGoUzopvs6RXyXHS7S4hbRtQgYoF7NJ8aaTNcfUEb18Q2FoEz1cwiqbHji"
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
