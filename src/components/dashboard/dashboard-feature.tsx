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
    "2KTg5xJcnkPHd8XtbqCbiEsw23WrAVqc4F8TrBKyWw9hmfCvsGGSPtLkfs38mENM6qRMrHFZENELSuJpYzXrdmzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uvHxfiJ3QbLPwNbwvP3rxPievqPbeqYPvNvrKxDaKk94YUEGDCyFtwLJgD3VUZxa72epg5DSrG9ShopBshPnUAu",
  "key1": "4cUga7uMcE8f9gyg6CPHXv2G9N5VqfTyEPXnEtDspLPs9obQvL9tzV3kBoyzv1cC53Ui4oBE67WLNK6W2xgFhYgG",
  "key2": "4PjkMoJbUTeQ6U3cscvXN6kBFUdaUmDwDJtSSvCPN6Xs76eEn8y6nsMY8Muzry1hE8gLv5SBjZHwKsVjL4xSVs1x",
  "key3": "5xxTKEggovbu13uTPfX39BP7J81wKan2idRbWHpTyMbB37R1DVRUGaV47A7VP7urzXs4Zk6txg4jpp8Lb5K97VWv",
  "key4": "2DXifmz8K49A5Xg6LEYRVrk1PSHFfXc2pDsAgyaniN6UrQuegP179q8H7xdfgeHUtC2EUEbe7E9SBaEbJnbHQrQr",
  "key5": "3iKwqzFZVEtk6VcJFao2n9bSkq3c5NqYXzqsVi7C2D4YJBs4s4ivEWiqKMXQos2gBgjnenrt6c6R4oFRDkeRytU5",
  "key6": "2CeV4UQL4aN6LAR83y8zJ5cER9RjZyutt4pTTAZRQGkMWTAJUHhbdnqheVD57QfDPcPnY9MwmphZ2tn7dge6pyo5",
  "key7": "5cHNiDUoPJCHix1y2VHNS9c3tkFE3skXtLfvjSbJtksi5pyRZGH8YGUHwZjGumdVbiUTd9DaSpEEKWeZ1C72uZM2",
  "key8": "3viarpfbWia5udr4BCUwKKq8Y8ahj6FRRXV2ys2wTegDrf3x3my2FJ7y8M1YYXTnGA2Hy36bHzj2kLTTguwvheT",
  "key9": "RXuDVJnmnv7qHvV7YDxbmscq5xsJjEtWyq2Z4KhS6k8Ymtk3YnqemMhA1hBHjtajdi7TquxFJRyrXme7ysAwQqh",
  "key10": "Fp9HnCGs3Dt6uTVcLRN5PkBeYD9RfCs9W4MKE1RP8KNFktr5yfKvfh4ibBR92283jbZeXwT7iVSbJJYQLDJo693",
  "key11": "4TKMpJJXyQ6kBDnGyBZ9imek9GxZxNxQUHTpqgcjRKYXc42jXn3btAraAqayQrp3E73DnBZEmTnJMvBWX9GvcbzJ",
  "key12": "5vrztD9YaegDu577QkQBzMRFh685P9b62vAKAL4WSnQqjoekAGDh3apj3CkSiHZssSb7hMaqxiNwby6LqtBGQZiA",
  "key13": "7PQG8FreNUTvxWPVBEuEhJHUeA4yQhUdiFZ3i2SAkj7SJUVndz4pZP97WxNYCLVCEYNLpvuqjFcVopZZG3GAqdZ",
  "key14": "4rELUqm6kq7YCjZjmawEeuxVrvPqjk6JjyUaw7MbrJBrRnGbCrjwNQguXPF12br1g1PcL46MgTbhGRKBm7bbBfuj",
  "key15": "26qjPsXzxudSExuYdhXgE4c69EEU8rTZHWSc6obw2u8p9AeXP62yP3zgmrkSGUWfqYPQxncesod6udyJBy5PwCzK",
  "key16": "QQxnTzDE7PaC3jSeD6vxcFp6g6yveGh9RfvHCeh494cRmVEqJPiwcdzbZyazJ6UVzjdhWSjV3C1Rcan2tiB7UdY",
  "key17": "TjvdBzPJ5nysticbem5C3zh9iaQtpsoDti2bNaaqiuNGXh6mVgY1X3EsDxm6zWh5uWhmTcmaGJsdNkeGPJ5Hf9Y",
  "key18": "3Nd8whrzsHNHgH99uD9cdyxJYuC1fKiTJ93cjekXAS92ZPKGj5guJnbXykQTwTsMooDUy4bzqqtY1FWBMwjq6Vzh",
  "key19": "3cPm4MmeietDv14GAPTLBXyHfpRkbfNdRXehYFkv526SmETB3gNz4vA8hq41kjYwsRLRDDmJkWG7Y9MfEGbD781f",
  "key20": "5yenmwMnPdcPARsT2y8CzWdcSokgb6ezpJ2y5PL6MXK4FGrSUjMzsw9NvtVbFG4eWSrKB5Fvrn2uwoeLDjtRiYcV",
  "key21": "4PxkvMXDnUTJbxKHhLM4Dkwt6xTPohEwTNGafmZXS8AeK5du8cmVQ6MMKf3WtqaoP6knbyyhi41i7RVvrVLAMTBa",
  "key22": "2nNgknfCzKHMXX6N6pcMdV31aEecc3DMEBbqiZjKLnGZxt1k2tAoRkSevehxoAJraQUzcrSpodMjvSFZ9yH3CsJQ",
  "key23": "2HVH9kXFmWZc1zbcjsEr21kCThUziwSZSMhpvuc1oWfMijKW6YhT19WY1kcuRqwGvb8QnufHo1L22K18p5FHvXmx",
  "key24": "3xqSuXnjVC65BCnnTGaZaAYcwwPYSCm5CMsmUqgAwfm4ppyv78QLJ9c9aGj6AVUE4ufXtJfTBetQRjLUTQRfjoS8",
  "key25": "2GfSFDa94pAh4Dif3foNZrbJWWNhnF89sArFW2cYuMtVsto2B1q55NFaLYtAssqhULiNVxY8EJgZuEbfTBCjtQXB",
  "key26": "n6W3mZRVzcPfdvjik7mHZYkbYxNMZD6ue92im7ikLLBYkqSEhdqpDTXwWj3yFwJU4phey7q6G75pnejd2x2VHkw",
  "key27": "M2cwu3X6PLzKtBh9bs6zV15sueZbvSv4w26CWkefUXXJvhqJVykKoemP3fnsiyNWy3vWXJgdzG9AteabzxUQdih",
  "key28": "3vHoB4nYUZLnFeYohuyY84srcVUGZvq52X4bQ1HhcaA9FNV35r2TWBeBJ4pURraG69E5rWuG4Xug4qp65fv938uf",
  "key29": "2iktFpFvJiagJr7zmfkdetLM2k7MJDPzphdrpeveuTcpk6JPiudZ2HxybH1v8qVbzLy8GogRgazMYjc5j7Jt5PvP",
  "key30": "4p7WqjNwvwdH2i5FJR2xkdVgkrwqASFzdxKN9h5cE23zqJHxyPKaYhuK547rxjMz3tPwrMGerDDAmRNTAPAdUBLm",
  "key31": "23VYcBcfuXbnUjdYtsbbZCtT5sWPKkX4RV7JkPTSi7gcytnbN1Fow6BRyCo8Anx3bKFfsPJkVQcMFYGfvUiHC6N2",
  "key32": "EjpKQai9wQrYkQTE9fjs554s2HHYpxjoGKywgaJ1FoRXm2KfiVqYCh6ZKo275V75A8pPNQRjVDwPiJSMX3eMScP",
  "key33": "2H8z7xSBMM3m1AY4myA9aRRU1vAcFuT4zUKKghZS1dVGM43doJyYjX2H53GyKexPgvoZvSm9TAW7nB6yX5bszApv",
  "key34": "ZDk74FkJF8EKtN8web6SExzfZNdd67MkK6EaZBcvQdV7wc6mbZr4tZgop8ucL6AxXUnssyR9pTcDQSEacjWLVnw",
  "key35": "Ro3YT7doNonx8vpEi78duo2LMYZPvq6ZbdfrLiFev3kc94w9yXSm3w8b8NNznHP6tPVF3vZeCSH2yf9YQP4nR9y",
  "key36": "273zJUF3SbwQYoKa4oUWUby528g7j893T8GcueU5CYnNSPyDLDY3TK2Dv2YsXcdpRb7n6h9vvPKUbqoWebmjrXZt",
  "key37": "2YXwSyHygAqZamR68Bq7WW5owWsCdtkT9hbJH6HPvqdzm7kvzengkoG2MqauHRcqNwiUK2HUjKGedxcuPwBMfcSZ",
  "key38": "4KxUGYf3YjsV3Jtk8AkGFGm9tPfkyhEC6VyYKcm32b9jJkcZPFi8EtJL3LPeBpMDmRM2ZFLneW78FimqYqbnsqYQ",
  "key39": "3ksAzhKB28bSQ9eu466TcdZbqbPo59nSLRiHiFTGoHNvuCd6Yb7HM65j2gfnqkbHhG3Gdako7R9SXLg4igW77VXx",
  "key40": "4N1CiwbY3xi66bp7EVh5UUgVtogjTCUVHMhysxZY72fVEETbNf89dd7U52YCemPoykGxu4Kv7aofBuDKKKikZeow",
  "key41": "QmkCAhKaiGsuKBpL2H3DueYK8p77Fp7xWawaWhTQ73cCyyGBgHyr2EAmmkSj1f3TwiH39pDYzwudyid1hL1KnFi",
  "key42": "2hKAow2o7e6sKwFinutvzDjP7pEZsZ1Hen4b6PhZTuts4qcYUB61eELggL5JHvNTWMD1dEWCnqTqxQmT3wNubqyX",
  "key43": "4J4sZUhd17oZ5tR2dF9bAoLMk2RW6YCqo12NGHEZBXvyXxbzJJMG438MKNbLrK2CfGgUPnXFpw9SX38iij5jC5G5",
  "key44": "3w7jz2vFiz37ymxWRvNQtjrmGwvUJn6umj16GS8pRKNSeAt8GZUAvhDQbKe4vRq8v5mHKGf5korpyBk2ebZ5Djnf",
  "key45": "48xdB1PLcdsyA2ERf7THw7vUq9LH8SySb5WSCj2weChCUyMH58VbW9EM7yrWWiDGA11XFr24xTsBEHfrfhSJWMue",
  "key46": "3n3RQ35BwyYkqsS3N5i3aBUm7ySnquxfVxtUcAGUEu9xvCs1tnRJHiA5HQPcdNU7dzpJV67mSgJksSm5bte9oCfQ",
  "key47": "369mFRMQpP2hmHVimunXAo25UBqCu7uA6A7ver8KSCNg3TkZjxBnJYVoKEWjKf2TjLSjqY6Sr5RtNaqvcLkMwQve",
  "key48": "4aaDLQhjJf2PcsCRN9PWHAEkQR2WWkJDPD7QNfLtdZ9F5KURw8Mv4uW95T8TtKHAjDb6Q8VUrVC4XqNnn2JTfeJR",
  "key49": "3jNDCUcCyn8LiKvu8m4HoVmDAnaHHHrSKBjdXYkz4o9LfKaTZTkHS4sKveL41epkjVtVv7MTgJSAE6mbhu2E3kQ3"
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
