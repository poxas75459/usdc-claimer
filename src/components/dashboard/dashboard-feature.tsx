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
    "4FpSL4Bwbx1qZh48wYDoHZcsHQcvyiG59Qzd33y3gKyjwUf4MDrDR15yjzQHBEwZ4hM8usjjSABt8ysvioU29A3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hc4Vho5gqhmX63cdF32iyrQWvxouxgQduSiZjerHVXNrEHvbTsmnhZPzgHWxcUnUwBjy2jHqLWD8SgpxE4S14Ns",
  "key1": "5DBwFBnV3r7GVJvzKqimGWqEW1mKJcMpYXJ4AHcaHTowg7rJGB4MqkZsi6Gq8q2bqx2oGah1J68d9wSes7nRN5n5",
  "key2": "ubXMWjzoz675fTt8cD2EEm1pyH1YepyuGajNUS8eFRyEAMFbXpVwPUrtGH5NwrXGCMA3ecv2A9946TMkvE56DPy",
  "key3": "og6H1rV7PgPbRUQnD6CchVc5Wye96ytxfSqZfzEQQWrTzFKZThPTMikpmehaHF53sivhDVVWFLyGCtqReL1qiuB",
  "key4": "4LyEmed1sk6HaxeWkHpFQ3wVjb6pL1tr1tTxmrUFCKiE8vuEx8sprz3dLxFNggPmPgvxcBZrZVWVqdJyjEd5UA5E",
  "key5": "3Gg3MnSkfAKT9jLnrMMQEUouYafowgCLFsx6UcZ8DtzUbM2WPbpdymHAovM8kXsZCh2srwg3Khsp8yEtvyZsxNPH",
  "key6": "5Ro25xxXf4UVCVxR9PtFUzKfRczm5jZXPeQsJNKkgyvzTXcUBxyEo93jJmPnhY24vY6aHvmzekAvWjs7GLdgdkRo",
  "key7": "WLhe8iExBnCDcnhnHxxEnTHJDphSBZRyxH2ecZefeLL7Zn8t6VHXerHFvq3ZGa7ZeS79J4mLKxAUV2vZ7MSQios",
  "key8": "4ZWwvSgRFiXvVZSrQ6PTZ8TY1BrhDqgkTtgWXJ24G1xBtpRmE1MrRwNkzxkBNLFv85b82YN6dk5jwRSg9ddAVe89",
  "key9": "4mqgWB7n9C9Mv4LPKLGZxrAJfkyECcBdjkBAvq7WBkfA2zxJhtinteb6usRvnHpKfKzPcBc8t9MUifB4LUFRzVtv",
  "key10": "5dSnMToe4i2aicMP7QkNmFNZFM14KdGxBXtyPpb6hbmv6xzqQza4bxjJTXuFaCB3icM71FJKonALr9MsPVN6TFon",
  "key11": "5ASbhKsRadg1GidGvEEMKtibZE8Grb6gbgSFM9VzRa9oywTedAQML5kmmNTPb1sjVbpjatETcx4SQDT2SPxh8A8Y",
  "key12": "3AkmNS4oAtgsA1vtybkkTtDjpLh6rcZTwA2fDpqjZw8yu9vbPZLsyKhFMw52SoKN7rCrf2XN4i217RCzc54HarV6",
  "key13": "5ms6yqFTLyLtQjz8Nws4nGo4u2Su1UKBCvqAn85AW3QoafKbSnYWwkWLdNV8dbeyjbEjkRG1pRE944Z5u2ZTxv8w",
  "key14": "4jtVee1zeMbe4kow6QwAkZGhg4XtBYhYwvmAc8zVLBA4aNPgcd8pqfKdjk7HUmaEZiZbGHBH9T8nG8JVVCJSDJau",
  "key15": "3y6W8PkU7opQ7RsQRAWwbkB3doUJvqJXrkFz9PHooRyyqbqjgVRpdSgrXiHo1buxcfQ4yhWUJDxv1XhSqGZTneNe",
  "key16": "3jAYSobJfMJR6g3EaTezzz5ku9FKueWizFZTEg2ZhR1aW5fxRaUtDkagqaovb5bukoRdJjW6i3ZrD6ZVehKmbCsr",
  "key17": "5ey6XecoCvYNpLpbzt3o8Wq5WV8Lafy2LuxHHo5ZvcrkNYCsmdebpuXoPmabmBz5RAhfv3xe7Mm2pmTfcrdqQnaa",
  "key18": "4mda3yKTkA1up4xvzvhrmbdKYGMBFV3FwsZZnZnqMvSJa1JM8rBfu6fr6MThNjb9wAeD2FTbPK2AD7PF2EJL6Skk",
  "key19": "454y33TAU7qn6LmLQhJ8YqqBfNLzZBXU5XRubsSnxc48TeZkU7rKRe9Hbkf4Kd2vV4YjbsHzzT7EjRtLyPcS7yEF",
  "key20": "3jGugZxu3aNYCVZNGp31YH8oV3k1p4srb2kgmwhDmFKeFcCbknyqovvNFTLsFyYD7PgQr1hwe3eos5wSw4TmQu8h",
  "key21": "4D9ePJaJeG5ce36jcDvR8v9f9tTKapiR9CvuVikQdaL1nwtNVMznbcHHwcYhrWsgPn8nYHaC6X2Ry5HYiBLN2dw9",
  "key22": "zyQ7kEMjxoGFM2smVNt9sfzS96KBTEbtbuwKDQURmDWMhpsjK7C1gwd438AcvgPLST5B92GtXATYgVG4hiGEfwp",
  "key23": "rHTKyL6Z4r6xTEtEHxZ4Ls7oPngLpJtB7Sb2mgTuiXtXNGzGaMjob488dwKYVxE9LLo9fGhqgq6nsbTNR2uXFpj",
  "key24": "2ZqVjtkqj6T6eTA9MMk3PweTPi9SafWzPLy3VyFh4CZTxqazDX8K3DJnZ1vUWNCyrX2byPHX2R25KWkhvqv2t8fr",
  "key25": "PudACAw2Bwut7zCn987V7kTDpKZuunzMqEuhH5ShdP7G5L5t7BNUjQMd6hZzmVkjwJDKpXDRDxf516M9PTd8je4",
  "key26": "4AAps3w3Qm3UrtFJdxwcewNV75EdRd1eaJHS4h49CwmyEwT91La1zsaAWwHibWZegF5hh3gG2PCU9td3okBQbHh2",
  "key27": "woyCm64f7bW3tfY6gmfPRv1umow7X5GcDyERx8VGD2tofDjyFBGt1hSpUZCNguWz6gJH783xLQ5JL14Bh11trSk",
  "key28": "65dSAUT3jJHoqqYQGptt2Qzf7Kesg2w4STG1iHAoJLumKssK5jDJjWvWQwLYRNvNRX28Lnp15myTXM59ZesJUecj",
  "key29": "2ncQAp5wzHzngT2kue4VJvw2rwnkpmyzPTV7g6n7Q31QDMBNpxpCku2JLEPTFrYq8UxM8bC6AprX5WZJd1iaP5NM",
  "key30": "5oHefio6t39T2UKpZaYHY76bNNGYbRBxcJVkBhPBE7vQXomc1ianyyEoGfcZxMN5PzMFutEMsEKM6h7CrbRUykPE",
  "key31": "4MbrxX9BQqemgyv9pqKxbgSiAZisH7wotjUgSAJYznFZhUQjbedouf4EeHkMetTA56VHHWZfTQPY3jyvavkPG6Uk",
  "key32": "55mC9ZpP3yWwdofo4DtJckoJurzcMJ5WjVVdpwmo5bdp3wRPZ9UfEuhw4YvhzBPYB2Xmi6Dc9uNBNUUBZRvZzFSJ",
  "key33": "YnkvQTpitkUeyyK4W3i27EkFbN5HyQpKv9VfP353tKjvjiPSV34hdUCsNQTuTpiFBojvDgwzZtDtggMuoQXUpBN",
  "key34": "3LLBDFGxCR7QLokWBPW538k79rzvaCqA73L4RPSJYtYGH6EqWqA1N5WiLvkhCbxke3FP3db2rFN7JgcbAV8dd3z8",
  "key35": "5TcmBZFt2TQ9UUBwvQnstgYzVbvPuoMoxHX1T4qSuwCdVYZMnfzR4auBzVbmdSMawkZM9pyGuRpTvhWPadKPhgkN",
  "key36": "4AKrmLgrPSxGfoVtz7fCBNYj3veVtS2jqhiaJ95Syr3pbf6BUNXbeUf266ZkQWgeeR9H67XjyN9E9pD9xJoGbqMp",
  "key37": "3dcvZmijip5JDBHaBq6KGZEChxC4RgMGowvRTdnsxoiXDkCsPjFHJHymAj5wrv3YGWw8ECXGLaHoPhxjjkVRqEEw",
  "key38": "5uNEgoevzQczmcezXNSwoZuyUGDvjo2A4ZLaCRznyuF5wVL3xExCc9UvuJtWWtJqGW3ZMqHdQZ2EF35Dm6e5xBBZ",
  "key39": "3zn2bTLWn18yTBW7h5e3yzCneEm7XVsjRusCuxmEaeRC5ftGRy7vE9S6QBGx5FTZW1xCSTNW7UJLM3vcZBmdpzc1",
  "key40": "e944Jp5NskvNsdHM1EwdkoCt3ULK8ey3k5s2GhdXLtrwstKorGqsbSMJ1PCRe4Y7DvcgKx67d2KNGuCzidzPGFf",
  "key41": "4cciNPub3LAYiD24X8cqL25VD6pw9NHSGxiMHftK7N2c4rgV3yf4yF5bdiJ2eg71ecWWEqmf8Q7jHwqH3p1kw9f7",
  "key42": "31AQ6NL8CBpAL48v1gdDMtm4JzcVGFFJgtfteXbshZRFxfz8bY4SyANANwW1gg8LHvbMoHVu17xpTTdhwoePQqFr",
  "key43": "4tbHYH6LpLEY4hLGRnAqHL2AyHWZQrdqJLMvYCcoELztN3EToVC1SVtUykxPJhRu8a8mq6dJopUzfZEdjmNrR9p4"
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
