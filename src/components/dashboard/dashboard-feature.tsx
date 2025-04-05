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
    "4KautBxP8cfK9EAKotiSSqtDn5ywpfijdmxRpgoQfkEHa2rQFJ7caHiVU6SQL7asweSnWG7Lcd7GsNTVPoiwJ3cm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n1ikCdzXx4NVa1Kq1cWFMcTCEUkUmdVuFcyj4KUwGrpaYSRzPyKnPgTMBWNx7d6qX693n2PNiPMt5AEtKYujKWZ",
  "key1": "3voXTpd2uKU4u3qFwY5vWUVyLoRuvSfkT7wAq3UFcaBxP84i7czxQanpFCzPqG9guH7aNxkExHZkyR1MYtP9evv5",
  "key2": "ZWFc73sWtg77EaKBkU4jG3ajVjxbvURQgTSdFdsD4ZuPsotrsgXFCfDq3m7q6XkcjLjmbZPd1FrDbdeALb8acPe",
  "key3": "WaSUrgVoPJrwjYLfFHH6iZz5wyeUkkhwq92yMhZmGw3xze5BUtaB8jJkKEtZZp1J7QacVNec4n1ewwPkB1faUKk",
  "key4": "qs2zNUF9dEMsQVYYKkC8a7cRNNVSp5kz3934q4Zh2E6UYqgHZuDneUR3sjz1TJFwEYGQJJTbMmUuGEUkuX4ggwx",
  "key5": "66woYEGVFQYji8u4MenwyoFVdKnMahYtiib4DDq1MKJ43wDxvKyciXg8RSZcHwNnBPg1UhdbvafWH2nShUbawtG8",
  "key6": "5WjQMhARYLQDDC7jnntf8Lgf8yJcR926AUybawq6ka1BecTZVRW1fo4XS7VRaecMiD7BzNp5uGz4JJKymfcyQbBG",
  "key7": "JauvvMDGxdGrT7pET9MuW7XqUy15FeBpjHeL2WxTurfBtXPXdVyV92wjjhewQuyG1iSyjAveboAmcRBox7u4KJy",
  "key8": "StmSc8KB7k4oAcBKvXWDa45iwv46pxmFPsdjrevVCMPbs1qitqyUy39DrB5yfFNuifSNW1nNx27BAcCUHnTBRpf",
  "key9": "gG7Pq8xPXWUT1tW3h9Bxt8xisUAHxJuCyJnQ4AuGvqwyLa6QVLnuf7keDWEztts4cEHvdQixcTV48kNdtFsDEt8",
  "key10": "4L4gRv32g5vgfnqfT6rXTi6yaJdPS9FxCX7BjANkuMUdG1aVgxpDLVtnnCdTu51YgrZQ3icY3FUdUDfH3ZvVZuvC",
  "key11": "3nvpB936pgfXWzEXMoThcBGmwa4oeMdo1dsjLFSnB7e8mZgPf84jM6yTYtDbBrdbdwcfHHaWJoL4ja6nzgdvhdb5",
  "key12": "51CpsPegCF3Pr5PuCgtd8jWMAusAQmaGgkemWYDP13yV2Rym49RFVGRr7tRNr8tyJP2hewGs6R6cHi3rbxGorTxX",
  "key13": "59MGeDKcWCqvMUmAN5zXvpT6HjcSEgKrM6yLhoNN42CRSTGYqheAd6Vqc3Z4kobwcYEq4WSfCf1JJfzBsYVYfa8C",
  "key14": "5yk7PTcGaDB5tzb22KMuua1ry4CZRRE9y7wowWZ6y4FuXJSwGTPfmUd3CfwgAyURXcpj7ZJwK1s94g3Qhmdhr6gt",
  "key15": "5XhTPHZ6DqCuNMixPNeCDodRdsmfCQjFksCTQ3VjF5Pf1atEn1AC1feNWbqATex9pvukvhxqefzirtos9uG9DPoE",
  "key16": "E7GAc7Q8kqidk78ovQrXyL67Wbqh9SdWUoNYubjWiyUTeqHN3ZNAto8qffGGVVqsYg3PNfWTz972jFqdycWm9tB",
  "key17": "4oizs1vvbv6vWtPxnJL1bYrgZLniGDmTHG1B71VuWiyGMf6LGvgZsBFLG9dGYhoNPHaDYkgEFx3vMcmqzeCcq1nV",
  "key18": "2dHHYkVWJ8k3KjWwqmVYzt4uesNeypqrk61Bur4m4nrmi8oSLtStRkHGbEch2y5qAJ6XPBhnVyNoJaGBYsnHpftD",
  "key19": "5DnN2mm98wNeiZm5jroeCbLqeTaJxZVhWsFzwY8vaS1CTpariUxvLakkd9fTH2FX3mtH5TqVKokZ7RtQF98oF4oN",
  "key20": "3xk52fvpUty5LdWNYgjX9j8whCHAHb5M5Tv8tE3XQiaGxsQwK9YjJQaeikJ4UAUzMZSSVxfCwXR4vpZfiYA9ffj1",
  "key21": "5szBzRKyeLBForDqZ3ykkpCXTkgEJUY2jCLctjwr8cxP6Qg4orScVx1vk8CsD1qRArnizneHLWv6AuWKTAZX9uBM",
  "key22": "49KS1ig5QnN421W8SaKx25pyTKA2PSmnD712QWqpjXwpPsZJf6V5W7rn5SMe5b12791LfT4YYuz7VXhYAT6ccFzW",
  "key23": "ExyTAwYim3aZeDrTPXnPWUewtPdVEC3H5e4oGqF5eH9rQNf3dMa6xRnusKjbrzhyFUewz48FZesHe4gWyjhWvHk",
  "key24": "2JADFgWFTzYXJ7WyY3Z2LTJK9YmmAGHw5XkvnAp2JADXPSUgHVWYFEBqs2T9aQFnTPUJm856qyzugduizVZBjCvG",
  "key25": "3qMbticjm4SdhQPsqNknty4SVukd4XBqFCv2T31kjWWsyzSESwcxh8tuRkgzXmcs77cjiXknRs6cddk3DUdMX76Z",
  "key26": "2EURUe6ehfVdfvShPkNgFUdv3Pase3sk3JrzjVD1MNPuPH5vaaKyg4gKViqZdoCGCDhjNN8YX1wF9phJQUXjXdy1",
  "key27": "NSKS7BUeMgraYti67YtoagyopDhAhoP5k2ky97ZgQM92LsPiy4C7kpunSYtNGdiaktAqTTht1JkVSZZ8oGpDb6d",
  "key28": "2A4XiECQexZuGmqfTvY8HgXx2K86rqsbHuesLNdtp2fcW5RZLmFLZJXEa3LKxaCryF8RHNagDgNRRassbNtx9ZkF",
  "key29": "5m7HJrMbCDzmdZCFiNVfCZ7JrtaoV5ZRPKsag4vdPZxqsxp8WbwCrtSsvn29W45cvYHRcUEBsGPfUKY4BCPeJUte",
  "key30": "4nfuzvYXW1rJE5uAqt1JXfKzsVPRyQ2FhQZGYfpSX6veAt95BrjvU7rRyGGoQk2FhRsWT3dxW6HYHY7kCbmUcBmL",
  "key31": "5ULMoWJks8LTvBkaEeHCtHkhN9vH3MCTDQqrf76di9Cp3zNL7K7QHqXUBAycubV5jEeY623FXkgYtfhrvYgxobUm",
  "key32": "4e8BacZ8hYJ6eyTsojzogZ36uppoj8X3jKYxZzbHPpEiVGK8xzjGz9CnWimxqeQ5xTfd5wpLebfqzPf8tCYWabCY",
  "key33": "2tMfKh5dZHzxzkz111dkpJFMSvW933ExPVKFCj9TYB73x8p3MTy2kwycTA1myMcYBb5J5zgRZH2W8UzitTjyEMm",
  "key34": "5275ibm7hMfAvJ7zcY3TyqM3EqCBKLfQuxEuXhsjThreyrs5GPH7ZP8RrNPdZwiUjmm2e6ug2qL9b7NvCYat83A5",
  "key35": "4GfcdMSTgnTbQQXh2oxYLsg8eAtpPxqEANG3ApCGT5bg1eWjgKMAN9UzznFkAjeNoAEXZWYNLgJfTNptraQsrVWm",
  "key36": "ricv7GHcDKXbyU7UkugMDX2KbZ8bLXgWj4KyzRoZvuVDaVbqRrPUn2JUv67B724hAzfRm23NDNN67obrR2bi2se",
  "key37": "3vsiGD73hJfkTADbSb8de15zfG9esYPian82wLn1e2RLDZwiw14GYPQqJYvR51wwXUt45n7BboXct9SHn7g7pH9C",
  "key38": "4YSj5VyTyD3fvGheAbgWprpxBwpyWjHpmerx4ksHUzpBn84hdH3R74yL4ycBRRhzwnZTMr4q4QoPQv3tEEcMaYmi",
  "key39": "4JMNtgyDyut2j2ELHN7EfXbHYkfZPBjCw4RPSX4wMhiQYibRc8CSa8gNqZtUZ91PUoiZbqhHSmY6oK9FDFWnYx7H",
  "key40": "4UR3skhZ74tZfoXuyUUwiFj3JbWxQLd6RtjHRXQZH28HVZSj6um5nDbkowxBXgdHCu9QBpvnF2pjhXDfHXb6E55P",
  "key41": "3GL27Uk4kEb3YSRMK6bXUbCyRhsyYRsaK9NB4VtWzxwCyuR8u8FZ8ufiVaaxnd1yqV5ndPpDJCjghvtqVWad8uhQ",
  "key42": "5MxpkMJr5JRcdjLerjAP3ADZYmaNVT927dxdsj7pSr3NyragGpkM6LerJrQLHy72oYEGe5tagkzXLDfU2MeXzUQC",
  "key43": "2am6EcL4aXK5yNmwTprV4j6LpzPbQnbhs19zssrQAQ1Dgkz6HYtFWj7juZtxsq5ASc7UahbJQ5CrFWacSbLW6YJq",
  "key44": "3bnMiJBKeWTohTfxhiDHSNvKjgzncwmowgo2ZNsHFkDi2GLPYaYPCXWu1fUSLwv5xKTdArABxvSLzLc6wcD7L5Lk",
  "key45": "27Zkkh5sbRCPVc3J5LgaG2LWsPzQR9v2xG9kgXuBhRmBYpoqpznC3ai7cSQPYviDoowkqTiNfVzoD65kC8vW4h9m",
  "key46": "dApUAr37m9CD9hYFZequmZXSVd7v3UzhwiLUxNSoPi38oYTUA3im2ms4MdDSSKjCRZQCCHKa2Hj3CPwSiGJ39rJ",
  "key47": "4u3FR3LCEM4UYEJ1pDfkPddRJPL4fsPaCe798bAJ2zDucRYjx1F4YxKHgBx9hMbhqfQCGEJxNt8aekna1xyntjH7",
  "key48": "3v5Raj1N4BDxTgm5rSDxobzEXnE33Asf6FNW6LXrXo1p9a5XYPjLEr8k5uj2pS4Z73ZwcsrjRCD52aFBW41Sh328",
  "key49": "2GtvyBSeqvsDqWp2LWh75rX4WXufU2kKt7uwcEwWnEyDfSfEHeKMvNFqEMpZHPVb9GeSFuckPVp8tx45p7Dwtjqh"
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
