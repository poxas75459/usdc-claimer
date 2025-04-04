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
    "4cL94PaU44xMP35i5F47QPtT9cw7bX7smG2GYMtUgE9ZEKMTf2muGqZiFNdNqgKmd68B5Ms5NqaDjVkck4J9R4q4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zr1UUKFmKwL5FhviDquaw91Te2bUJxZc6XwnquV868DUwaAbhmtAgzXegbspFA58GdCjunzP1aoi9aBctWeZymC",
  "key1": "52KSoXv1yTXSozVhXt1yTNV8bJENNhgLPDJPropNhzpj17fL7hYPQdtaxRBcsDK489utptS1LyAhbqmtwbeyFAPT",
  "key2": "2o8NfpZCh5d5z4f4GT6HHt5e1u459GyeDGwGaXHR6NVpvDKMnuxK6Gb46x8pPbHMBy6TRicQJYBxLMYaXBKrj8wU",
  "key3": "3tMRgU2WJmMSCngdvpJ6FnU7teaB1RcLRX6i1M8b9j2knRT3rVZVrh2v8sm58iQJhpiXKnT1rEyTcokWWyHMtqiA",
  "key4": "3pDHbueyyMNzYUvjjPBCGrgRX3zWAAMGWRp5RAYUKYYeEpv7sw6WZ6SjXrnbedt3geJy17qU2G9yB7FEXU253SVu",
  "key5": "3EJ7Cef1HbbXyZSbMFGttqwcmiAfqwmjhzkR3gN4XKPi1SouExqQiEebx3Guqdrr9uVEpV1WmnuQEyVsfhMgUQnp",
  "key6": "5wSV9JXLoCSrJ15FFWSRenq4tX1PApW5khxdna2wX8NQ5h2xs3z2ejwDftP8U3ENB8ZoV1xC3K2oPSCGupEyTZX4",
  "key7": "5jS62DqvyLyWVws2HLimpkDauRkqwFqNTJJUa94qjVoawmXxvtWbFVuNYgavoB912woDjjewB7HgpvQBynYDNz48",
  "key8": "4qyQcezX7s1jdPnQU3Qpe1ENVSsJK6vc8hYC8FJvPAX5NZUsKs2jMhDkP1j8Q1Uiawpffw9ZbsEDHnQzCksJcKUv",
  "key9": "ebkB9mehUmLM8oDhPX31djY34bQmB52iL4jWTLi1JTHByoVNRqk28k2HToGa3E7uXEebdYXpyuZzVSZyxjL1vdr",
  "key10": "5va5yDJZy9Mqu5TRppz1Q5BffZptYbTxyJd7W3QGcy6GY9tp2PALn5ZenXLm2Mw2rjjzQEsm1RMFLiehzLfcbG7p",
  "key11": "29tMgjpzrNqjfQsTinYGTcTr1mzp7UFe8uLh1arTQe7jYkrLn7ubZdKjNHqTVya6x9WQkh8HQksiMDPBFQzwC4b8",
  "key12": "5bZBzKoJCLPsxRGAq6bvkb7rhCwTvdNLJmEF26LwsnXr4Ypnwc7UCPzisQ4Lrbx4CqCRtvUYEAeGW4XEKVxe8gaV",
  "key13": "58teTjWQgKNJuQaLFj76Z5AfTRbjQjweyMTnFMEygRfKkZARmujMcXKJZaoxG233GBNumWFktT3QqP4RETbC8Chu",
  "key14": "5hFKfGokoC6neBZQtbj1pFG8oXf1xrBZSvo9wQV8Y3GRicAch2YXcexqUFuqZP8JcW69LDTGxzaoTUPuy5yJKygg",
  "key15": "47xrZuJqTzffXyR8xQsVbyJp2DuafNP1B9e861LeZgUVYKjwr9LLu1agCSjqb2eovMQThC9ykrumpgPa6ejmYvuf",
  "key16": "2XBgT5oe53qudzU1abrystyb3LVUutLKezpau2kywAr8cSAFiBb6VaPNPh2wv4EexHyUjisVzj1xfUvgvmW1S91Q",
  "key17": "2WpWjG6fdau21embGQPZZJyD66ZGWGA9RrTb9CTNXqeV3CL881KYRyrBJFUopsdVmc5oumPojYBNHjSuGCVSxkPm",
  "key18": "5ustMJBW5k6BmdwjeRBuHVoYV4ek3F5FBTDj5h9YAyG24dN2GCSnM7xi8PwjT9e1t53jUPNs1NLEZ218eKLJ1jM2",
  "key19": "3pA6vSBHKrr1eaDLXvQz1qWcijCMtoiNbQrvWfj7Y1u4JxLAKVvhrTKKt4wXeWTtpbPNu68XF3bah5R1WLm8U1JV",
  "key20": "27fMtQT3JVifGXutf74NKUYmEbbYeoL11qrpp81Xy6ht1vd2u4tLou4JAagejSq9XMQfmKXpQhwMbsZBxTUSeBoN",
  "key21": "3kzvc9ZP7SsPhMdHXDoSWLVWBsMnrk3mbAzLWe23fHkUcGZGGh1SLMp56navP5sefGHSL1VnJsiLmgrGWBgsjF7M",
  "key22": "2cZCCFy8EqvL69aY5xLRUWbDYdWqiNG3EFveu5Jcn3ipNPhcLkS4t6Ped2Tv3RyPvod6hx9PF78kuBqJTr6jHg4G",
  "key23": "YHf2E7AusExBCg6XnKKkJGFjTanYmEvR93AqAPZy8TWmJVTxyg49mzNsNvUDxwxHLkHMV1A21M5xzk6jTThtoge",
  "key24": "3cAZUj2CmdxUvG3ae1UEyvSdriW6SG5oXVR5kE4UuRXNdzaM5PcEYNpz9qf6s3mqpD3e99XEPypCJbsn8qN6JeFA",
  "key25": "48MKkRdMEE5QvgPDFmBRLRkkyh6yAQe5mJnKYQaAjPxpQamVKoKtYKmbncnZ2TucDZJ7UPAQEN29vxCb3h11Kpvw",
  "key26": "2VjkrrojxjsLHTerQbFucD36XEiDPoGn9fjcnB5kcsAUXXmiLK8UKZE3hUZ1ahAbNJgwMsVVuLx3nAXaZWntR2PM",
  "key27": "3bUakU1R84LmgMj1P3Xxnc2bjGDKHwbjtVhoG32MXFuKDoCxv2JyGoY6MUKKHrzapyA948jD1pNLSqvEPxNQbmQp",
  "key28": "43tm6ezWwX5pJUiuzjGwjjVGcL7mVjQTqA94k7NScbm1pBaZFWX3RuksaV67XZYGVDHJGAe8Y97i4tBkBKY5pdPg",
  "key29": "4sQKpA4WGYJff9kKREP8HJUwLezTCTQXEoFTG41swcrzKddK167odxFTCiCm1Lzh6DumZqVuNEuR6wmgrvFFkWRo",
  "key30": "5nxkiAmys1D1QP6pKzmUtLmZeiyoaSu7Tpzb5tsDmReQQYpa4ewtsEENANMQRUAa2xNxVHeV8iZnb2Xo4wkUBUjX",
  "key31": "5nQgD1r1GP8qJSPgsKppXkAdJLizgXz2SKEHAJpu2RaeguHzCsZpccNbcRbrBDSvoUWWtodsbYjjrZYgZBzGDXoi",
  "key32": "3pK9SDvKG1i5nJRUm6NxxvbjtZ88dLi1ND7t3wBsgmiYFEfrSe1MP48vj8duBLM5Ditig7v6cXEj1ddqcEvCNNdn",
  "key33": "5LLCZbFpt5r7YGJg3gSsKAzZqKdTPmE8j5mJusBBnUu8kvfgmkwy95g8azbQD4SJFFA6L9mtukFirVAcyXM4YJiy",
  "key34": "5gE7DRDrGxph712BC8JxAfr2a1dTMVLYwNAE22PHZCSKnyW36BBqp9QcwF5oyQiP9cwevWzKAVPG54EFrG8ipXL7",
  "key35": "3kR1MQpKHw7gkJoKCd7bE39eCWyvkFwMJFM3skByFv22oFCB7fc76Gpkik9GRd2x5mJWosbSK49GbjuAPDfKGCqf",
  "key36": "4ULKm5gsCeABMwRuT8K5K2X4UAgdTiqQ3zMD6nmaveN95SjA4TctysHPdFVMsWdY8TM1yCmkDZe3hes4GAR4sBbU",
  "key37": "4CfPuD9cQMmG1H38DnKhorsZ6N3edavT7hCDGC1raKzUsRUxy5sGm3vFGq9VUWv8PzViMrUfM8zzMCccBANwprPp",
  "key38": "32yj9bW7AABwULcJBJ375YE1ZWkcjWRc2rEaUJBLFsYXW3GJJZy9bPWXsb4uKJZTk32rw3RoDBmNcR5ThD1AfzsV",
  "key39": "Yb9NPYqoHnvxGVSc1ce5yCM2XZRML3ZCpQ33qx2KFAcb7s7UmD7KjQRWrFpNxeaX97sKnEwZ4NWVPYsaRRSPHpa",
  "key40": "4kt1x4NqKH9xrNuvK8KwCryXgEa3U5xtSffk56v8KpdLihzYitLwSt84arjFzM6iTnV9HtXKvG88wdGDHAviTiTX",
  "key41": "5DYn5P7CMz3pXobaVT3Tcq2kg2zUp8TqbBEhV4bZzEYsYB7rmDAFdb1yfexr25ZBWsdcs9P26WLU9ywMVx5xtdBp",
  "key42": "4i1oDRXLqkgqhkN9wBUNTENZVPENoEQZXzARu3ggxeQyK5yVPwQwwrpXCTmPrq4KxRSFVZMf2w66QRnpqvcAVZ5G",
  "key43": "56pDRXbZo5srYMP2ShBv3FyErPkXQisQVWt6F3GhW7tCxsxu4ro5CKJMVe1cxeWx5S8e2owpLC7h2RNTUXZNu7AF",
  "key44": "22WGwhExAwSM9G86zEzHNtGdgSddbp9etDz4JUypd4eAKjC6f9wPnTBUGzJC55c7SUA93JBz3Ttijs5WWCJDUiLu",
  "key45": "3Pev89tBRGfecCWvuYXD7M1QqiZrVPTSkb8dDCDfGhR2zYNmC5XEgZNM9Y4uwuQU9q9idKywWnDdHZkBozSVfzNa",
  "key46": "3YcPc6CjgJAc9aus8MH35dJ8XeghEYfg1mZEB4Qdp8fLCpsCmAjVgbY9ZcfnGMgaCeBtVsstPrPvQAUVgVYJZ9uw",
  "key47": "4M5WLzNqRoaUtG8A8SUAnZ75uk4TYF1Z6sxWrqGJwXGTArxcW3KCPPEQom9W8gbdHBgvhNeFsGmHFrNSWwg1g8S8"
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
