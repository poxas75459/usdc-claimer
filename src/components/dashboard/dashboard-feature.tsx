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
    "5FBjvj243jZpmRKgKqzcYQLST8ufrQn5wzEqUfc1kr6p51CNthjzmKtuJWq7ySmq6HWPwLeHR8ne9fzyUTsb7dfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55a2Na7CMEhxFmZnSWge3drqTBj9zpGAdj3y4t4hSCw21ZZG2b2fenPsTC2v53fDKDwmLQa8FrHwYq6USDg6w1cy",
  "key1": "3hcuE2ybGCZBoYUnSHZ938ZGYevB45jXW6dRzDvVW2rZ2kX9Ha2aVeUGaqpk1YqhSZnTQBGJQsHEwXFXdA8DLy9R",
  "key2": "4BmJCuwEf2q2KmPeyHqntyKm8q8WTviaLjvsQJurLViZocHopxrKZVBc9kdHkEfiqRkkLHKzM5cVZSxqT4Z43Gea",
  "key3": "35CwNUmfpeEREFGhpfrND2arW6kUKXuCk6d9FLASSM63jpeSU2AFLaYXnoK8Arnc8XQvwCfgn4onPzMSk8fgYzn2",
  "key4": "2P2VAVPFieGe7J2Aj6AmnF1FcvPGEG24SeLEgh1Tb8j364upw25MKf5fqjpQV2hsgf9rFxeYHCFuLTBMa5YjKG94",
  "key5": "2GkcZXFRXpuhXxbrC3LpxXmcqTausLr8THn4P2B8FtdrahtkyVAAQ5LmAi38uKDZHZm2VS25Q4TUptgig2RZ1pR5",
  "key6": "MJbtMgSv98rDgzR8e951GHpyat41U9vXpL75JqaFhSZiwUG85FA75PHY5Gq7kWZ61Ga2ccP5yaTXUW9ZnqYYtCF",
  "key7": "oTizaQzV2h8NKkrR9PU1gszJVxrppxBHanZp2aVz5MGvT8LqRWfqTJupy65jUifFkYqJ2BonYgVrFXGF4zNqwi5",
  "key8": "4ws54T1SJTKcf1QnKGQcC9MCpSaRcGeFW436KVaf3Kq88YVjbFTNCRec7irU2AC7c2gemNLxguQikVb3FiSXschg",
  "key9": "56CbC6GuqS9Kfyk3gnwTBx5be1LfujzQsGZPoka9tWYLpFcj7Mv9TwCSW8ZuHduuddnr3hYGHnXxZmadeJb4JGzR",
  "key10": "AWLTvQ7mDZq7QPBHoE8ij5sEd5sq5AeANZxiyew5vaCzh4LBro5s1fdQo1CATw919frmtRR7kWNTowBRrY9o7No",
  "key11": "5CWMkUhwmsrcaJZptqXFjz9XJwJ7oH57tNrEgvneGVFGjMhJbDFaRXU35wacYNTRRJxadyBQGRk2kB2bM2UNLW9P",
  "key12": "Ytz3ssZ9F1TbZbnHmxMVDjSVQPrfdSaBjUyXZ2XwtwMhcUi96FdAJXnDvJMyX21rYHKTgJcqdE8FRX8WKzsmYwu",
  "key13": "529GrPzfU4MxWyTmkwBVtZwTWBdnTUaFPMYA3Wk3Qnp9qcbSbEyBUgevajY7yxoy3SEsiJBUSP17Am4V1LmMtSyt",
  "key14": "2YFcLg9wS9bC4y7QdT4bcyHD5BGPg7Wp1d1HBof38wwzPA78wDQyNcRvPte3PykZJnGUgQA5ewXTN6gCYRqZ3BSt",
  "key15": "56PXzuTSiWenz7PkMC4AchYT8zuwDmi8TZdDfrZsfs3mfWhP97BsBDUrYiS4eGvJtC57R2Us13SzXWc2PUxgGivk",
  "key16": "2ZW7KSVUCJKERxAn61bHthWq21ZKECkeMoidSMNugWXU1DyrrKbuoYd62vkDtr1QkLWiCWBtcQwm5Nw2tLvjQyME",
  "key17": "EPoD1eaYv47Ud7raJnnQPW2EKnEmEcCajtWj4BnuDShaSvJ1Fub2MsJnDr2Kv8viiKMBLSqahuRHPMy5qUjUe7f",
  "key18": "2mmPmNuwRWCQvwe1oSbPshk7E9MAXMy6zYUURyyFvfAcZFNMjcr5qsByy783BR4hnAmAJPgeHtRDjpbKLrUaMCho",
  "key19": "3QtHeCVqghkzHsLHyQBRSjErycStDVrzQu5pezqrXQWoeNoXBRhwSyCJf7LAnqkGmNGjtXSvt3w5KbjoLFC4eBye",
  "key20": "4DqZXqsN5w7vabb4DBhu7qBWB4kjNo3iJnTp59dZid1oevxohKs6eChJGMjkBNKfBzbJpcpKmqHLSy8RsErn1LKZ",
  "key21": "5bBzfjW3PCpq67qqJMyjpiSwozpk4gFaHBvfoV1GuaVm7AKSaxLZec297eoAyLFue4ys6t79uKU36a1HWuTB6bjk",
  "key22": "2ycJTQUx5VhouP7Nmnytuxj2w6YnsPP8XLBHUWGXSJ1dJBR9LwASHqCrqLTH8NJKWy3WM1oydRAHMACKV93icwoY",
  "key23": "23pDcsaBuMHD1asRkEw2cteMdTb3RxPqaeEWYFV6Wiv8Wmr6rJUCRkp5aE12Weh4vvTLxaVDRDgFw51FTb7wffha",
  "key24": "5RLA3QsfnXF9DvLRKfTWiBAMub3hunrNeaCznkYdeSe7ZZyUfsQaFRanC3EqEvfoLqaphR6e7KKFo8HH7EKw9jdN",
  "key25": "3NQSgJE25f39MFmS6oh4TnDRxqYXf4eF5cjjwUpANCUigWjPqHojwKMMLHYnEENAz1bpp6wpCsY543LsFRERjCd",
  "key26": "dizn8sxKW4H4rChiviRw4m7KNKzQohK188hVUaG1d9JH26vrt9P1jwsWYT3DmQgM3tPC3yNiSJLLAa4xW2sj86q",
  "key27": "4Y5VRZ5LPP9fsb7nN4xw3uBKJczDkK59UmfyPKsRsENFm4MDPmiohQGmY8BseGxzZmxY8E8PTFEN51QJ9EsajbhG",
  "key28": "2sjadUDksRJBi9gEFmMwS5JAdwRBQGceXKe4QZTXs9VLHbGhCya2jD9Wv4zLmeVuuHrxhZV6MqKyinXHVWHkodMo",
  "key29": "52LkcJvFoJmrV1eMdcpN9JxEcifza2jw1tW2Fzb7Wcjn8zuTRsqgf22oS4xw997KVEjY9D7Ad8vqLSrxbhRqyk54",
  "key30": "2xScyz9iK9acMSjy4WY25qEqwRukvbWzWmURPBnN6cCH1WKT9MxvCkrwFLFVjBzobfSwmqJbJ6HLJoTWUsjwpYEb",
  "key31": "5pKu9bBSzq37nbDPgynW4s3QnZ4Q18bqz3n5fmePBFJAiPVHJUoA98xPhb8bSyDNYZ6T6FSYFjmGZiy1Lsh4vdz4",
  "key32": "zgRSncTJgW4B27HdYSPXnZGdWUmccakxJTp8nCzyCfYfnBS1HwiRD7wUMYoSua5wG76HBhjwEC7qqtZyDmidP81",
  "key33": "twhnZQg9AVYNJ4XDCcPxURTyuUb9ChgqGrxLBbhBLNJ2bPzXB1C32eGbCKSTFqxPcRTrQHMBBjhBwLa7P1exUZ5",
  "key34": "5DWcPaJAQVo5BpvfRkEX4uBsRp1uNdhDtAdw7u7Y5XvmJQ1hprmb2XE2QnTPgw8FsnQi6BB8FFZrMRjpj9bhoRFR",
  "key35": "dJZTkEBFnh8xK7YYLQM4FWPmuFzxWH7ujWniEhaGwVX6y9BdcDvqZCXmcR7VtBgx9ZK2m1eeohCY8EjV4FwcsED",
  "key36": "2Euri9uyByFoKgJdHjtA412YPZqTS1VgH7w8aoeUfy1uXSq2v5KvEAULvBHLsRRmJzjVZviSmkGUAwQ3N972GqyT",
  "key37": "Y5nm2Qg4WmxTxjMVJe3MfNUPg3FHyEfXojL8fTpCHppzbAZgLXMpCaKsJXHvY61WFcQY8DqoHuJ54FA5g14Bqm4"
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
