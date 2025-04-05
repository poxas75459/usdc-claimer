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
    "65jjhav5yXJZ2tMvYiAtGkJr6rQ9KGX78mZuAxpzRzBegdDVy8CQxgQy3fzcBTUG5GsrQmb2Qnt7LsFuFmoCm2Vr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "266tDqbEAhgjudJa6HbALSoZiRwYaAXRhM54iDrRRePLxb9r8A6n5czTWow6V2PmnVsZw4btpeJKDT6zntYyJ3Dc",
  "key1": "4M4y5wXXDXdMMJes9cdpeaKYQPakG1dKuHbQi9edNZ55b1t8sW1yJg2iTU8uyPk5ceQmxKRQg7oQnsxtjko1S77m",
  "key2": "3XnY1jh6aob4aLjCkrSVUvDRpMdQTD28cShh4xMGSVDWzLCZJtAVenCL4J4NEkZYdVEs2JkuNmvhFv7vCui3fjKS",
  "key3": "3p8hS8LajxXJwa7QevRvKidMw76NPRZXGm5agRpZ55HYaFmMvaZ8e8V86f5ym4CCFMeaj98V9m841ax4SJhrQ9YE",
  "key4": "E5k3JNY4JWZakgPSa9dpvBsjXS3pZxSHonYic9Tj5B1Vzrn96SQePaVzLymLu2yWenNrXGwFW3DPk5BUXZnADFS",
  "key5": "Dka9q7qUtSRk98zBvKcq19mKnRuaKiRoFQ3nzSgCwCqhPdv6ycBjP6vXnV6JP9uxH9o9R1H11SURnEqnbUVwtTD",
  "key6": "41ubURQt4PAfRw2r4JiRC4boKq9YVPERfg9PqRVYyy7yZDnLRnX1bHC4wTffQYbrSG3ZzkXAwqqPYDf9z6rnzoFG",
  "key7": "2ED3C3Sri7ZgbkJ3hrL4CnaoE1McAx6eM2ShJtYvc4uNvfAsteWPMwqU5TftWDwaPUrLKR597okhdXN91BqK2bmm",
  "key8": "3Bf1L1DEWaL5fo25QA3hwwPkFmrCENZyJNqZ8JnDF9YKb8V34af6rYDtEEG9cd2bawDVW6SrrDhTZRoYB6n1APVi",
  "key9": "42Bu19JYtesr9jryq5Cu9LJzDFGnpKZFuukSRgAzVvS9qaA7nehRkNhteAmLbsbeNwQX5omvtAjbgtXjfy5y1Fsv",
  "key10": "23jNR9bSGJAjefZfTij8gwuBd19EkdJZhn5rznk2Dg17WcW9snianUkJxysqwXEfDaBPc744WLtrTZpDZwRfMhh1",
  "key11": "5pCEGynnXbH7DPXxxd9f9TUbBFdD2Z1UUzvdGzBMpRTZNPCeS7ByUyRwnem4MS5vahLu5tNgwWw8wHepJoTBVs4o",
  "key12": "5cYGAMUruWexMEJwTUYWiFsZLdAFn2q9VvhMKt5zLY3KWTLwK9S9zqckGwZoeXxcJMuhhw849yGk45LVfb48kLUm",
  "key13": "eUVLxMCz6rULVixr6h9n5zdEMH63Kpgkomz1LyUuuoPz5TbkFRAncMPd2LQ8DKBeuibmpJhUScPKNqwaHQhLwcx",
  "key14": "2ySHuYYNdtafLQY17qopvj8F8iFNYPJtAx8kvM4pbq397CciymoNpz1ATwBo5e4aAcFrsuEvfbkVmBcdCr2HZ6fk",
  "key15": "3v63By2ZMPoyAzb8jCn94KZZi3jXAeVANG2NJQHEQbmMmjx6uhYHAgzjHFVXBENyNBrerZTk3181XrXyof33Mees",
  "key16": "41QZsyrfQUd85dGNsQnyVzpVHVFLSe3JjZCT5bYz94GcStwFky8Q3vrE1sqJtEJuBk3GsuHgMzxo4MrUDwjgtHWX",
  "key17": "5H58LL7bBvTod3e4obRoSozgiYYCxTioPUgqVJe7Y8Re1ZFtKBeLK5sKZhW2RJbjoMsefa5urKpJfdTcZQYY9edG",
  "key18": "5jGx1eWCJPtJoqBdyQ2srdJueULfFeBp8KDqjvANgNHAH7J9wB1jYLVKEw1iJC2R2AMsnxSZ5Hszqi9EreghLMD5",
  "key19": "2xeBvpLMGZZ3LFs3BERoQwxEcWCcjptcF8qVw2KeUUC8eEZ6gtRCamadsCGfLK5JcnfhdsNsBmAduZtxsSweZnq9",
  "key20": "2WRbPgojeSjfZdM98LCLAKKKdM9KedamvYBNEYZz6Wxym4dmpDavWRzSz6YW56BAZWYBLneH25WfjeU7c6sm4VEf",
  "key21": "2DKbK4RwgprnLa7fyZdqTh8cmBk4jYh1PX4cL9sBYvNYfoWRtDf9TCSYwEGEZ1T6BDtNGffzPiFSJLgE3BavFPC7",
  "key22": "3B3ZTrqFvmK9H9UJ2rVorott4nRL43dBKwnmT5RicrzdManGkyuEt29bS3h534ueLxkxMUPQ4WgmY797cCPGM7pi",
  "key23": "3cpaThdMSkE8CGKRac2jpui2dveXKDum1VzfoPDTUmWqt5GPTE9UpNmeR4gMigtbR2FYapYLoBKSqEjuRa5CFJLD",
  "key24": "2kgzFdjXhCpCDov9HCaXrLMVpzM7e5p1RfovouxUNnVrL8Adh2Wgir8R9ukDMPCM3oDuYBDzy7LmVsEtPibCFmUU",
  "key25": "3jfXdpnfULogc9ktVMN6mtnEbNMPienyfvRQABcz19xuUzpSBFxGpT7Gwo9zBpoXsY9btKBiNzwZRsmC8LTsdBKv",
  "key26": "3NZN31n3WENNFgJb8PcMZjtzc1Kvcvx8BdDzKCksipaY9Fahw7nsDjSWYQKy6HZ6VUvcec6eiBM2ACe6sSNsBdh9",
  "key27": "5h8Px16WWNMVKhFHReGoYmEVP1DrNb1qgzHdMdYAKCDgybiEJoK938kxz83E9SEfcEdgs3TKdXSBdPRhusvzWJsL",
  "key28": "2vXmrS2a7Xn4U7LvP8BsY6c3b24BZktTwjfiBUnj7GgSjTsFUdD59vdSpqQuvDVGZj7VMj5NYC6ZUjCCaVQCAn1j",
  "key29": "4jsmtDPHaS3tJVpdHSDLSPJBT2a6VLxyggwfei8z7qKDcRYKC887SMPhdkJ5ZnHEiyzp4acP4z74YES5McMUAiGJ",
  "key30": "4ReeUN1HFNajU1PMujBof58xqESysnK3U9MfHnBjdMtck7bWy6o5KQPidv2pBqS4Ap9CGqNjRna2dRDWbTiQBx48",
  "key31": "5nkAwRt36qxxAJcFksQVAjHv2U2EoNhhMk92vAVRsoTu6df8qiHuatheQtUysUaqYdedJ87SRzqGNGBWqMnAgNmF",
  "key32": "2YrrGbT3eKvcVk1uhaPUnUMSXuiQBkn9s8FWT5sQpJrUknC7xfBzP9dp6SMCyG8M5nacAuAJzxagrcKMgs2UBCRP",
  "key33": "3CCk8cTLxSog3T9TUDWWwkdEvqZ9B1vgBNLjLT2sBVQJyByHWiYsZdYp87R2ioe9TGLgWdyYaPV5f3HgE9r8QL2U",
  "key34": "2NmcsKxjuWDAop96sDCgNZmD8Ndu1fh5kne2CXWX1CpDiwx4VVPy9RUhP7HKtRjycnjrA5nuAg1GYsUFDuBYrMkN",
  "key35": "vBaZH6WLBRkDgqXNxe88NfJcKYCB4fYScyNTHcduLDzPrUvYKzgD2ADAkgm1vWxgSb7ohKCQFYEnf9QGpt3nJRG",
  "key36": "Ezb1B8w8v9CFk7kC8ygh1am3wi1syqmEF4VdtRkds6AJT8jFFJiwT7r1nrMFk6ovQurKRT6no5JDs654n944Lic",
  "key37": "oNYDECWiKXxaCJ4RVyBXFogNHprErTPX8juSg7dB9r5yCWSDjYZrLCCTsZMEj8Zz6WpKsD6kXrqZmEZt4UjUvcK",
  "key38": "2uWTvuCgByUFNWGMLgwUXKqgbMXtEPyuaXL9EYxDThSovWwhXe24pN44zUDyGjGJ4wY5pwFoRwfpLcMxzjSXyn1L",
  "key39": "3ZHH7SQKsceXRZUqtArV6WTuDSH2ie3v8Z7BzYrDDRyio83yxrbmZuMGmn1sqTFkdpmeuJARhRL89gizaGu6Bn3H"
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
