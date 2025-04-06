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
    "319B5fKb3tWtzkvV9yRjj4ESvyFTDSTm2evzgNLb4KWRvBQZWJHey2bSkywBifcsRxpd2qVrbVTj8YNNrqeKF7G9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "633EoZUq4c8LStLWgHbLrSddQspf9LKmmC5BTREUKSdSWgMXiwisisFJb7kMuTn153GTcrNL2h16qsYGRxaz6Cwv",
  "key1": "4WS2oPX1FyArUCm5ff3YcWxEnTr94Sad61McuB2BeKiKJpUMPtG9pwHDRcSt2m1iuwLdmksjVx4PV3B6AuEoxXuz",
  "key2": "35G7G4W9WwcK2PR24uZP9xGBk7hsAvexKbZSBhk7PbgvSw1n147hcbDyYrc2QWcKuD17pbeidJVBYw7QcDDniFd3",
  "key3": "izjYbsrPijFgoWNydxC4SydSWhtW8XamtDPzzCi7hkUY15ywXxXz1PAgigofZ6vFJbiAFS9ZWaEn67vpQqjM9v7",
  "key4": "45UKwq6w4AvkJqU5VPP6hSSaVBUXDCnYKffYeyhpNNWNA36c8ZqX33NbiZHRgzFKFGS1ZcKSB5h8XFw24SHYXQ5Y",
  "key5": "2opjy3H5xuF529yw2Bxc8hce6Zsfo48bRNvXgnhd3YhGYWyNpQC3qREpgR5HGUbEnBhSEfDXHEqPB84VtycMvvwf",
  "key6": "3WYrU4QjeBLL565gPRJA9p3Jt6PY8sFKRjHkzi9iuZ3nzWT59fvoJoxsocDcmgUvySVN6yGUk6qcn1BnYabZ1oCe",
  "key7": "6bNjUJzfbhtEhrxgBX9uQLzsZCEDtUbNL1DuYbZN1cPKmQXtaGDgWkqcA4xGPPtnhUuzk419uj8ePFN3ZX66kE4",
  "key8": "3WoQKozjgkdxSXSCmbV1rsyS2cn8mJg1njXe9543xX7VVrtaEjM1Hq5j2yHJwX42jBmdgdpmnqNktK1yaNZ7ineV",
  "key9": "23JTwXFDV2L3UVx5CCoo2XfFEEJGYeekSFC43WbWD4F3qcohzwC2LZe8XgMWCGrfWyavYun7kfZNsk3A8EhfkgKM",
  "key10": "5Qm8eSj6yVYdMzmYjwBCLjDG3vgmwh11vHJzRBvFLj8bJioZskuc738qFb8ES8NpuVX2rmPYZUNkxLbRNP1jn7EK",
  "key11": "2EPqfAiMWcFmRsuv37Yq2gELnmYzPXP9h7jWqEGtGpbnU7hvdeF494enu6RAdbBs5N4w1JntJ5phkLYUYbBS1AdX",
  "key12": "br9dDvCGUs4hchpHn8a4XRCBMHiqhP8rErPZ4mwSBq3LdUKVA472VkPu1JGjWYf7Hi7nxUSugTfXyY1eH5C8pg7",
  "key13": "3ZNMayN3iZBG98JWR53EJuJ1NNpPe4uHCqWQz51v9j6y9K6PdDu1CccWmxJjzzQTC9TpgMN6u2ghKLpnuiwRMci6",
  "key14": "dW7TpP3CByaq4APBwJQE7af8rrs1723Agdx6V4Kz4zctTqVYyde3NnVgu3aNuE3Zw7RcXPbgEDnfjpvUYm7MUFQ",
  "key15": "3jprF6HWPxbqayBtuwBxs4VUvgB8scApp5Xb5LuqFG6dJBJ9xDeVkJgyMCeJUARM2pXyU1erJUHsKjDiN5H2MpfS",
  "key16": "3RBgyydhCoWHR5rppZy9NYQ3pDUPu9SYevWCWZMKW3sukYqgnUNkwqf7K7wcYHswiy1r5v3rJxXjQTzrSsBqvZPi",
  "key17": "jB5qnGErbddj5F21XKZTADMVBScjkQ2pHU2sV7CpC4wN98EKEQD1BWjq5wRxWs8vrwR3iSceYnfBVhsUeUnRsnT",
  "key18": "3b6ikVVedZjhKtwHyHd6DMPeDeQesaDwMC4PhGx4LumnDbpE5RSzWLpYsYBVTmGMNbLiKa6RugfUUCLeBP6uNbVS",
  "key19": "2N4LchaxQt9cTSK2MosaCnR4YrChgBHPfPBaZsjJ7Wm3U6ABm2a4WTZsTGMxBCSvUFaZzkKvGCNzPiBwvqizWuAY",
  "key20": "5ixGgNBW4Ly9SiZRZFx8zRPDUcxQnLz9pDV2XteR5K61XjWYx2K6ZgRiRTuokYyqLP76K9iWiLwdZ4xuGeJXFR3P",
  "key21": "3Ut8AybosbeCE8Ne5eWm8Q9kavBEeojD1AUZq26rccMUhUNkSDwWbsdiQYojvFUyoaAXrk2z6PMPyFGES4UBTSPK",
  "key22": "2QdLYcnqPwj5bzG3K4EKZrMun2229rnArTgTUbayrT7T37SAZUrRrGoLzxGFA4FZS8qtSvWPSTM9ivWcHGbLNn61",
  "key23": "3aSpV8Ebjg6nhEWh3bSAdRSVDXF8YePvLn5rwrZMCzy55yqbxRSsCkiGCCHxu2byU6YkBeLAUXvx11qZyUPzJWLU",
  "key24": "3hTTp1xd5nZLgmRMDxXxN9KfiNkVkpRdB2Zux2jY3Yk7LBrPFRZ49MfZAnPRNjFC5pfk26noipzehfY75ZrgLtEF",
  "key25": "WteS5d26LZicXkZ3pHZzyziqGzRGtoei8cmfQKijPCPBbkeK3LUWv5Nut8TTWess3rqUXQYcXoENBmsEghYfgeX",
  "key26": "3JiJZ9fBZdS1eumAwwEUV9jukDe7egsisnxUm7FtSP4ziCUk2ie4KVHBq3FqUatBU9qY7ZcocAztLrn4mf39gM2B",
  "key27": "4TNi2snRGiERtLV1Jaw9tYAbcc7KBtiYYA6p85nZqAjr2q6XpQaRGqZjN9Lv72Vj9an3tzRiD9iaRu9WDsyGN4Qu",
  "key28": "52CraGZ45dwqSmt5ChtaJFFSxw8Cz3ELKT68mZwD4ueSxpuCJwsqx77QqGYNF9juD7fp2LfwBtATpE9TDmRbMdFZ",
  "key29": "29YgNcgUn5SFdbG1ZciXYh87sAkytZeP3dWAqDZBC22hya2iD6ccE1gh9BEcrxcuL6pn85bafGjdyQrPgxHdRSFR",
  "key30": "4uq9D9WWFsYfWpjip2tQSUtWiMRnih1zi9F9G6bQvyBVWg8TEiCLMT3tNPAAR1BMR4vuFoZbfdxurGe2vC7jcGP6",
  "key31": "3urPyi3soPoofnpwhUCuNPeMmP9aUTwLxfyfsk2gf2Hyq3KVvhJhK7SDVK1S86jiXqZ7GE5MpsTLNCqNWwjUukYa",
  "key32": "5BxFdQMCYy2zvQ5ZAHTSg5HKT6u2XKyAYgoKmzGLezvVT9ZZDaxEiutUUVrM19XDKBjkfrNPWudhTJ61nGtLfbqo",
  "key33": "4M3iykYAGSJnUZ7XKL6Kqpsvj1mzm9q8hgnzRYQ9Jr8USnp5shTG9fiQWWkS3CF3vswVJopizjEHP9H5UVu8emvo",
  "key34": "3XKrFtFFE4wmah7UXGcE86d7yheCV7JfstGipypHp8Yw9VkU5nfdcpHXjX7UR9iipiaQkjUbQZXGPdCRiPzBBgfK",
  "key35": "5ZbQYTrGp7cNRqKAoVUXmtBAe6jPpkGA2YAVLU7W1GNo9m24WUcCuKRmjmsRg1dorWFNfShzBsS7bJg6TVXJYqJn",
  "key36": "28n3ZHzvu9QrS9acQ4HrJtw1tajGD5smZzWiB87RwERbWEWzioCykB5UfwjYVk6sN8epZ5fXiUwpkxfH3sfYaUsk",
  "key37": "2rvx1Cz2hed93oVq7V88mbXw4yf1k8tfbxrTcyQApMsfuca1GxZmZxZGwUeP3mLMTUriR5VRCcyjBXzW7YP3S8ZT",
  "key38": "56sdZVaXBBTnyJ48xXeQVJhwFbYJzPuy9nACvpx45KQHDkNffrGfijLk4TLQaMHLNF2EvD1JebhbrtyFmj4d6PgB",
  "key39": "5hxPGArxC94suNc5zmbkHSSAG6ejPwM7LPqKWse2Yg4n47TupN2aTRpuW8kAT53rX2rfjq9rmbC7uZn3iJduGZFp",
  "key40": "2STFs2A5z375sPU2o1DQiEdN4SYLzDntcpdSdqj4mXQJyt6aMXu66GBBnpaHjCdsP7PeobSK67amthjxuT1ag3zY",
  "key41": "4fkLNZ44LaJs5fHyBoYsygAHvuhyQX4FY4kCgbZNfdSwfzx6A8KpB4H4ffADKej4pTNVWGGxt2bt7agCUdTAdrmA"
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
