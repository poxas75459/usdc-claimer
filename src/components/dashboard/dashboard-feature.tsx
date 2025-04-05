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
    "RJpipN8GB7jHsZ567LGRg7iik66P9T5hVQ5f7bkNVPBXhGQeE8dvhAqzW2GKFJuBKbheCYp9tQYd2oHjAP5ofgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fdCjmQ5jgf3UgdGZBEJMfzVKKvrvvcBrAqmDe16RPoU6D79A7RHKFVyG5SDttcLgDCK5APTR788kYonWzzJZnnU",
  "key1": "PDv4FLSrjcSKKpe3U9iCeMUEdiQaCGex2sKEUkqof3SwRkkxYaFnBHJdR3CamhcKWnHHmK385ZapY9Keh7oyCyX",
  "key2": "5cJ9AXidPWTtdpSwi4EtNui3AEQTerUurzWKttzpYD1phQyCAESPBykgqsENR12baM48efLZMTdZGqzSAXELxdra",
  "key3": "47bVgvK3JbcuDNSyWTzE7hbUvTgESN494Pr3QFGCmHpsGSSG7WW4dgiiDh8uJhYYndPDXJxUrC9As99qsPGqHan3",
  "key4": "64WvJR9x6omU7D8im28hhH6zmATViGqdS9vLdMhcpq3hryRsKi5Kp9GqiBAo3dG7XWpjw33TP1un8CrpPZMGCfQE",
  "key5": "3EPZ3nrBqwfCMYsMprGAMy6brbr25rBPs2mAaGzLDJwv1zAgY8NMLu4qp7Q7V4CdFRpgYqMDXKnEHhAt4pQTzDqS",
  "key6": "4BBdRQTxy92hd5eC6qdzBTzt25YUVfB3WAr7HhWFVnSo1RUBkbwzgaEii1KvkD2PB1zw1bz1JboYcEgA8N9BvkZo",
  "key7": "51eX6Hd7okxuPNErbej1MRTpS5TLhDHbyCeRjzkAhAnRr7HFQYPMAfYtMne3dJLzgzfrMyCPMLGk45Y4iSKyUCqx",
  "key8": "61kbL8ubcjz1cnuD6Kpg71yUPc55sn2CHyiPTMAkoLDjSbXCpryfBPchp7MAUWwKaV43BLZxay2ARgP8txnQ245H",
  "key9": "2pN8iuuBnxzDE7vfSDeRCj545XDF4qCMrBErEDFDK9BxstMdaRvy2TFM4y4viYoPfXWUvMvtMqBgFkmZx3aWGvHy",
  "key10": "3pZ1357dsQc4Ta47U2noq3xpesk76mdVf95GG91x9y5XTtpMeHzRakQuvAph3zDMjX9z26NhFAoNe2axWrHC2kdz",
  "key11": "vTqkoendLeSnk4z9yox7cGDPEvQvD5toJQnCbPnynw9ckXvkRbYpbpLHRGrx9WrHNDvWpi1QWd883oHrpusAM4u",
  "key12": "qcf6vBue7xtu1c53dJMKspxy1zV6m6W8BHMZvXpwqo58unE6xLoSnXujNPewL5GaWfEXAK57K5fnesRwRoSyBme",
  "key13": "2APLQUy1bfxJ77Z44BoPS8kiazrBNkkQ8TC7U4Vf1Xm8qVvwdEMzLazYDtFw4bQkr7NxppqUjNPUVKySP4s2NvFq",
  "key14": "2qzrNMznYBDnhYLiafzbuTRad5vnanf1a2wAhKNbc6g3grFAfzkxJj7wxgj2N3ZwB61b1RAQ4V66gzmvvTwJCvws",
  "key15": "5MMoYqZUNSDDzbQjhdRkfmmuWyAGYyScKDVceurxxBHz9SkvfPzsmuuVdh47UADvVqVZPJ1kURdteuvyEAh2pv8c",
  "key16": "5QQ2QWdxGsT5enfuB4mgugzURzk3u5izhSFTjSNACaAkHZzS4ysbUWmS8diYRz8ByE76wWzC8CG47PXi4VG4J4MY",
  "key17": "58NvgorQeLiqe5492BeDMYW4NL3BQFFGs6yTv9gv2kxLH9nyPZNV9sxEtkmRLfR9RgiNqke65TLuD7qaGKrpm6J6",
  "key18": "2bvhERh1GkHucxphCD2Nmww9C35HugcJoExaTXy8z1DFzeMuR4VWXmfKeHWwFuRt8LqmjH1iwYZHNNijM48ZGbF9",
  "key19": "4kx1FZ52Ywhc5tWoscoqx91G6yzSNPX6QKGFKRv6oQefWNmm7ngeWf7NUrimRYv18Yu98uH43X6eEVGcX7WCLPhU",
  "key20": "3f68js1UfxgrMAmTNNinwU6WmnXZqc4sFjwTXoyvt3F5Xj8wCxeQdaS6fbLHhFT3sTNDQusw6f46cLGSL9LVe4ZR",
  "key21": "bNDFXVsHCPNymBzJsPPMVJ9xKEwRt4UCfHPmzWcgCJ6fp6mWJht6jYjgR39DHmxDbTnP3gg8SKfmwmpdD29iiqk",
  "key22": "4nCN6WPA86Cb5cdMPoYTF76DMtVEsFFSFZvrD5WZb72c1NJXBc1vQxoy1RgpPBp9E4cRNvV4424q7K9RKjARGchA",
  "key23": "3VuuvZDMEqR5saBKbzA7o5dVHbqt3svutwfrTTn6LfCLPdo3sRncziG5odFZsthW9CFQVPWSVsiZFHsfbGv6TmCf",
  "key24": "3Fp74Humg5cM2nvJuZiwdSfd4HAd54E7BktxGou74RAtun7WeKemuGxfhgRCZSYvDVNLNf9ymyTfDBchZmsmktY4",
  "key25": "rb5uRkyNh4gYLK7qYJM5dS9g2um1ZBkj5ctxEuDdKRLCWxW8rgNJQw3JxWFxfeWoRk91ZmGAnNTgudmSZiPTXHm",
  "key26": "3YCnZkm6MqrxPVGTfVUqVF2a9Eaq5W1Cnehf1byHv45WzD4sMmcvVEm3P5jyrML9baFptjWZxuUN31RgKYD1warC",
  "key27": "3GBsTWC9JRphqudxtvZV4oBCnC4ijwLWcet7qfTH931NsJTr7FrWVgLLBiyufnU4o5PKTx9vJT7UuSo34DyBgfuD",
  "key28": "4Gtbdd3Wh9tDJG63HCG89k9KqhgMA6Jp2aPKTFpffSYe6ySf2eeqdE9Wr9epUFKwxCcSgJm5rZStdk92odLdqnYp",
  "key29": "3xEMUT3W9ZvGmJscqgGVc15Z7iZbE1raogfr9GWjK8mB2iVxxXTUQaNkrbKpdjTMUJgCH3Pk3yRuWKSfQ7zEbBJK",
  "key30": "4yBj8YHJ1juzQYAaHG78tpwSQ9CynBdvDrMEJd77hBSWbU8MJPEEZBap3EKQzVogCyAKV4Pq6PhvLcxCdDgRsx2g",
  "key31": "451vd8BZiQnkBp4rKY8ch6uPe8VqroEH2nCyWTfL2CDKtMRTSTKRfKdJPLJG11gHaDmi2PDBYHwPQdLAZ3W7e82p",
  "key32": "3UYTCBbLJyKCMGvmd2RuvnW6z6XCHC1iqyXHSbjfp5yJaq5g5UVGQ7LUpFGzuXVnR9jVSDrn1B8Kj2aEGjuXuAi9",
  "key33": "3hy5KP1TwTqkDkawh2gjGJqMogFKubFy8Bch1z3vMWUTGSvvmktkvcJEUsDJ5p2KCaSRoN3GySWEXJMav59mSu6r",
  "key34": "5vUjgaEAsWtL32v7XPJKeSCngjMn93oWYLY8f9qMcc2kb4wbkAgTAtkt61GbHb88z2Y1yT1aj7HfMJHsjYa6nxST",
  "key35": "2fhxgnVog3ymWZW3CE1QGADDitpc4UCLu9Ke8Pyt7KGApcXxGVDEgbr1X1nBMgc28zEnVLirWRRsdbq5UWmaXohX",
  "key36": "33iFyo69e3uAtyWSGJUGFMMDvJnvCCTsEKD1BNwQGS4nW2XrnKk81nk25SmQA1LHoLDKr4s6EF1AUPCyVxsgoK28",
  "key37": "2y56KH81JuuXic5NmWahMPPGq5vSKVZy6gepg3dcLaVH3CL36WWidLwukSyDW5XbogjxJcXpCRtwMC6rNWNizL1V",
  "key38": "2Emvf52KLKKbPqCHv9v9AfFbcv2NYBduHrg7N6qap6hrFdKp6t4qBeEqWTFSoqo6uXJnQNyYzBLwz6rg4as2JkX3",
  "key39": "34GsX6imFMUKA9CgSFPmpSyPEX2JHvqJs6StmrhBPbizvag7wfFXjWKdpTfi54deD4breWrDfKjsGh2zRrCWWDxX",
  "key40": "m5zGpYrLxgYMvNB9gaj1qjWLpqmNU1MSJ92dyeKWe6xQnMU9ztNiNcL3XHNnsJYBehfqaqpSNzwfJpMcFUu2HSX"
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
