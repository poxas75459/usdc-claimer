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
    "fd6tjeXrnE21rDq4iavnGWgMf21tRV5Tg9xVsoadXKC8gkcsKTfkVsLVc61nbKaRN461hBEgkLmoAfEXsDnp7j9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32yW9D9tYNQJkoqyMZphoM9kaAkSuz4YFswDPgww53hPjTQJo17rwvAjjxUZ29EZiXj5gWyDL1ppGeEcgYKdaRNa",
  "key1": "4DCLRjWpm8jzUJUUjZd99iKHpWKXLA5BpzwVgkAqfJcC8bPYZn838Y82MJxpQZFJtv3wjfVvvsCvFtHNsXqPsG6m",
  "key2": "BTzJVynjrrKCF3DSuvfEvPuSzsiWf8NvjFUXNWyJqbg7JS6aBcopuCEXcrGcqTJ65GmpPT2DagzUwFaqQfTCKD2",
  "key3": "3CdXQfR2CbuPeWR3WJFLAGQK7krrz3pkn5if9bbo69ip9jKfzPJjRiYC19aCGHXy3dzmKQAFuXZ8aCXz6mGcTWfi",
  "key4": "4XTWWamzEmbqBmhAKNMWmc5NHKWUvHva5NytuYTzvMQNBYQW7RAvWB8ncZ584rHDmWx6whKzTyomtQvteGLiqb87",
  "key5": "51A2QtYHExBP9GiUdT8uaRdc9m94s3C3CGoKVqjaYCNCr39V2wvwEn5sjEE74A2DWT9LgFueBRiFvEeZogrzPH1F",
  "key6": "4jspb6mXzXvHdtRfskBMWjfvLxb59coZqN9dFQkERm4pypWqHX71MTqv8QNxXxNvjFLvKgbzGT3CY2tmdJuuHjet",
  "key7": "rjmva5idUrG4MD4v7aLNJuzAtomZdWkipJkjcSa8CiEPwjeMurrGba5s49pnfTTiEJRX4qn88XggWCJgjgxJCoG",
  "key8": "2JZzobxjDBwQHppgXbqWErxECZrDTPrWpvDQmi28WiEYuuhUqSFaLPnfBg7rb9VEPZg6wMbmdhn4t83AGcYyqWU",
  "key9": "5UvWDWMXnb7YnHFE5J1Dtq9QY9VU7wWHSpdPhxTbsYn5JCKmu4NEwjgVKutewVehnqiybZ21DZYpVD4ZchvxPf95",
  "key10": "45eyCHpvsCdwamgVWAAo8qeytg3jT6NRpWxujiwCdXpi1MYN5Yi84F8hKxxGDs7YJT7nuDjy1B1b2Jhn245g8Bao",
  "key11": "4x7vgEKFSV6d57StU6iqzXcbtB5voXPAKpERPqitPnUaezz2dwsKa9bfkNk3PgmGxSxatVtNd2UL5x6DtBMy5SHW",
  "key12": "33Lny9HisY4LxntedFF1mx1GMRga74ijcXNh5PTBj6esTBrpu8u4QX6iyzmbCBCsjee5DApbczo59jmynNT7Pwqe",
  "key13": "23xrZ6F4anAnXRSghMdLVoRbcue9yyNeeaDzFaW1k1H5vMTEpFoeLCLpLEuAn8Q2hAQwv4hy1TWcmvwKjuLj32S1",
  "key14": "5ZcPYvq8DdTcQ42uDTtWJY47FPB5yEFVHNU4dt2X9zxWeUToKCe2bgZXoaEr81GLFryRZEteuiCs3nRgxvkEf4Tz",
  "key15": "pudFSnTKeJu48UuGLFTcLHYwd2zL9Kk9KxP1aEa6GZLbf8D7kN7ne62sTuNvZR6A8fKpZtMGEejALrY5s4ydZuc",
  "key16": "4KkwGwtnJwBNDNRmBeScZgRAsJM4Mj5mSRoVYKPgkgFVmHisba4nU7zSQZPgT61z65bTiZjSLmAGvu6YPrqo6pe3",
  "key17": "5mMXeMngbLJBMwgCYAnGZMYuZbPsp9oFKjTweYEJmwvGJqEtE7gkZ7ZLcKiBPKuAc5Np8pYhwvPwfv7NgU79whyv",
  "key18": "4jXq34TK3NWnNyNTa2s8qGFTHeWqPLW52istAqDVgkfFZyonkW8JoiotKwsGwFh1jogPNzZXaLV4Tk8MdNsrDQD",
  "key19": "2WQpFYCZrn9poaGjYS39AbsHTLPJrC6EwoAmfSRPFDEg8EjTDKEZX9AQnZJdoiabSaSnj5Ndx77GjQj2uTbWtC9x",
  "key20": "XvnEdQB8pLj3RU896WUtBGXCo7y3ELdg2poHku9ZAnnmRXVofznKsqozfNXVjNAXSUCsdGWUkRegeLnhJFC6dPs",
  "key21": "3ykKWjHP1zFxz8SgFrbCyKsL65KVjM31bUT5w48PPsn3ZpjZFejz5oti3rZ6XP4aLgaXyaCUMoY5XEFkHwAWMsGm",
  "key22": "2XCKwweTenVrY2kSutd1wrbdceAiH78Rg6qojDDrYBmMxhn8uEiQQsYh7ownFQ7T4YxkXveU8GoGafw5vNyzYU7L",
  "key23": "5bXA4ftukFoNRAZzEpSmNZRk5JWogvkfYBDKjonCeWKcQwz8QEr3cAHYPoxWwPJFZwypKTUwKndeD1UtmrRCD8Bm",
  "key24": "qW8b15oLsZLJXLugPvjHwqRcwYWkATwWqTVwzo9btuLJPjmnc6q1TH27wSDXupBgxqUWqQSiGP4HhJ2iqFApDR2",
  "key25": "4YfxxZmqn66PK9u7uzEX1DBF3b8Un4XuNNBcYxsLruRiSeNxW2tmtkNMsX6mwiNF8Yn2Xb9jyAkUbosoDqyapJCR",
  "key26": "34YrWGsh833yyhiuZZNk72iBXX97Uek4PyQ41WbAYanPmQTCd7RvThbGuS45Kk9NoV366Y4Etoray6EVSGYoQeuA",
  "key27": "423Ecbnz2j67p8JizKLzJQ2Vk2XEJnFXpF3AC7tN3nanygsRhJNhKRNXhjMfvPFzui3M4agqDRFZYTTdTaUKLR9Q",
  "key28": "3HBRVbCLgcnw6PKS9PiycsRvcw1DBpFojB4s62RSuYkviKgTjDT33RHVLQXWtdSEXVYWB5JZkTidX8ScR6rvoPeW",
  "key29": "b69XAEn8tnRAGVujhDTa3yzy43cP4giYaBTf7Fvn1ginf2ZunVBpJnC3BncqZYbJsJzYSVCski43nqWmhZ8oh1k",
  "key30": "B8HY6jkxfdGiMokeoHRgDEixqByv4vpomM9j24PQwCgfakSj6YzECsq5LFWWRJByVEKDcEovDpDraFQqv462vpT",
  "key31": "xmPNmbXRfxf3NUuzkeKwzcgnWjhFxXZXeqc85FJ33MgdRFu6s5ywJfdb8sDCEPY91zuwnuucV5kCQ5ba3Uuf1Ht",
  "key32": "5oR9tszLa8ELA5wYMDe9mNQHT2RoMHyGRLqC973xDGmfb3o1sCHUQZPj5vxLqB5ucYHvfovw6ZDnvCnWXrTYUTke",
  "key33": "5JSXSwz4wVSq39TUfVkHYzPhDgnTHfkufyans1xHEWnZoY3chKytLHUVSoTXhhqad86m67UyFbdpbwwsXHsq2rLf",
  "key34": "2pmUFZaY25Ho79eWoQnC1GwkxuCQW3TJCSeWZSy8ZbjQdkDU5kXNxEfXUpDjTsP8qNZM4SAGszUvDJAwmXapiMq7",
  "key35": "2YJD6Ktpjt8JtpdujMjKtgsDnEizzzZxMEjGrW4h6un1jadsVdAgQ3Q2vcDatkVrzG4tyvmtyq7Q9i6hUSSkmUf6",
  "key36": "34RC2BBM5H4XT8yZS1Pq4H2msBoK5enz4G8rC3Xt7cXjkGJqnhqba4YmQBpEAB5eFocCGE17XTp1FKUtPNNKafCn",
  "key37": "5ZE2KK33esDrRYBjxNoE1WwYV4D3CvrX5aKTusj3wwvAy7Sq6TRGDYzmb7s9tN2EVrPnhpwb4EnmTfwyZ5s6fvux",
  "key38": "3cQ37x4a48RrvFXsjcTGoXdA41xakgo3rpnCiRnKovbjt5a8AECRsL4CuF2TgMUVwJXxAHXDNCA5YeiLywwQMt6e",
  "key39": "4FFF38mnfiQzW755q3oQk3kzhgmUVKLaMKqyhnFunvekUukjcSevU71ASV1aLdh6FkTuJTBjM56an3Pk4eV2BQtL",
  "key40": "3vEqMsWp4VUw6qHazpAuJj3D4YBJsfkv3KAb5eX9gK4mCtxu962YG3937Ev348Ncsc2qPovtUTrh8imiJZmUQskR",
  "key41": "7FhceyMvihsGt6StxWcudj5aS9U1eaTQH5uGBmKkBv8CoH8Cd83b4YFipuAKDXj7yf3ACAojaACd69M2Ar86sjH",
  "key42": "4XTGnMXpQtBGkLsSUurq3jrPRSofHx6hGMy6vQM7Q7DmwoFKe5vwNfFsz5qxNFuqKtzYNetAtDXLwAzJ5HJ1ktNT",
  "key43": "2Xv42ve2P14cNKs3Gz32ZYehBmowdmpwbhmCa9fj8kozQHdFLfu3MSGRoBcPPF1nQ36zhAukhgBPL8EWFAtpifhh",
  "key44": "4RWqz6HasLr8y8JtbxWfvjHv7GAiJXH7kui9Dkc772HqH3sG28poqakqDbYwpabrt2QJhqhsKrBJ2pArwakewRKF"
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
