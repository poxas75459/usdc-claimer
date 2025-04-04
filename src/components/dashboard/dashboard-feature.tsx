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
    "3B3n2d6vTQQa5QdYgoXHATN6xy6hmAsg3cf9aAd3AqmMX2DitQA3MR2DLDEteMkM5LXkhThDHmYDtMRjLvnMuH4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aghjGP9iGoFnFMevNfQomhWuDwYUVjvugfw4P3WJKzgCbQHpoFmcV6mP76c4CtYJAJ25dfAMrLW9NUri83wTPdv",
  "key1": "8b5dLy8r3fFnKRPsrV1xkKuQnszW11rGbUADsP6QTdDdN31frddvn1qXJ8u3fzT2JYXZZMJbZKGMV8b3cDMHDBe",
  "key2": "2GRWKe7UiwULq4JWPeSLtng6N1AreAAPLs5HwXKMm1TxUtsGQBfjwLGmKxTdVeY5frTo3NyqFhC45x5v2qvHyhPg",
  "key3": "5chLqSTdZAdvoihrrxJMHUYkZphuYmxnypaEtcr628jAWa97Gdjs3eE4z7wrBKr6eCA3LypVmpVJ8P3zSr9DcgZT",
  "key4": "49qk16ixpCexn8TPuVzyHL9bq3oZ99eZsqA6rYuPih7Piwf33i2tbvgu4UXj9T7TeQGq6WGdhqWWK1b4Xx2kbMKP",
  "key5": "4Gw1WFVWUjnF1mZgpUS1FpgXAPipcgRF6rJSi8raX7RnXiRt8zpQGkwuQprhmUANQX1JVhivU3Ep12khD8NK2AUL",
  "key6": "qnL7We8L17r42iJ5shJmUkJmkpsb6d9dwoA5DMLEVPYFd4vLo7EJ3j5wfHLjAZt2Ts5KDSNNgo9vYvYiRzoWu1e",
  "key7": "5pbQzTdqst9A1k6aqTGKi5SDQC7gCYeUwt5CRWPB8ZM4VA9EzkRzsUDpGfjNvfmYFAd28af2HRbxguwZiHd787Cy",
  "key8": "5neJFt9cGsjP6pC4kKzjHdUK99SSyHFp87Lcqk4Rdc8VywLM8VuxVg9RqjshvzNMqtVSoe72XqprzCTKvuiUM5z4",
  "key9": "4fZLr8cTSzhELu7Rx91Ci3SurBS58V6XB2zH98k7qPC4N5n2dKcSPh6sH7v1vv42ya8DAXGJ9fyGGUXRB92jZgqv",
  "key10": "51pvsheHcApNLu841B7C4MnnLgrosEeweNHzRt1J8G5cFmtBeAXFDpkhp3cEfAsH5j5JB75AfDvmBzKoPUP4r7ay",
  "key11": "41VLAaZT5x4A8Sgk79h9ziQXfheGT7raU8qUkvcx8BnAD7hCF6GS7hNUrPaPV1R1TnESKHUcxXPT56kaz2XKBueR",
  "key12": "AfEnfCzdSqStxUyvUqxGyqcohngtX1G7UjF9PQPHR8YZbJ3azvzvhJXry1an4cLhc9c3rLMhhvxJpzXhhSAWgkw",
  "key13": "52ZjoKkHsv9Fo4jTJnp4yT86gRZbDKcxhwERg2p87bNrYCBHLQypYYdKNoUgSAD985e6ajRX1kDf3HstuHTN2TPr",
  "key14": "3g2QwFTN2ykgrfnRC4B6XtN5WXd5s9ehMQL7MQrL9k89XFE78zRpfhswxdLsgTpEt4cSMqShg6o9znZwGHwhbTLQ",
  "key15": "4RmmeKMvXpw51jY56esafLsQix86NZNtMxy44UwcVN5zn7eqxUjrZ6ZofWd8hmz9rYHMXx8gPanqZJyAgtwJXtT9",
  "key16": "4hpso25VgfjaL2mViW7yT2Lq38vziWENiwtiX6dK9XZ1TCqfBLGcSxDUuusoFzeg3gyRRYMWeswjWwgqt1nUfViU",
  "key17": "URzV9RU3cJxY3ZbCb5TJ6Ff9a54p4tttRQCeyfvg5SEaH9uz1F8XJffL6kK84uGzNz66m7HDDTNnssnJP94HCbi",
  "key18": "4xdGLT7HTP7QgYMCiZAfpBtYZgtN4J35P7GAvhftZK837BjkNgqwshrHzZcHEr9YGcqJrtrV1BavtwpZWFsp7vrF",
  "key19": "3EBWCVMGKRp4uMuMjmqMfLAkvL1VHuWcX2wH6zeEoyEHQhb71ACC3H2gcH1jUg8KXZGqyrRDi3FR2x1KZhz1Tfnm",
  "key20": "4iC2ZeUBmLspojpPusu97L29hbWooEGt6TN7nNUTEjSKumEdtLaVLjBqso2qh7UmiDMqUae7W2phKGYhTV7g9d8m",
  "key21": "4TgfA8Gs8tpjnDW7CXvAqkUms1DPC9dSYHhPu4gTmWg73QHjk9DeCpDeK1AWiCDSFj4duKHcjzksY58fHEqz7AYx",
  "key22": "44aSPArHjcXc1pkhzzTPYY64UpLN1UUzH8imZWxwgFZ4yZgU1UiyoVJj3C3Ut1V1e1QozM8brZ3uDPGaVP8Yp76N",
  "key23": "5rS9mtNfu9t27gezgt4Zby9aKPvW5yBN21kxrQ26DJzgJCWu87FGeyb4SXXLRcJ43W23ndTfd4csfK2De1Fx1ZP4",
  "key24": "5zw67aMZdLkEaSbvq9JKuuyU1B7Z7MpiwMfBZkyZzxGMN5xWxywDzYJN1Xq4Y8Bj3rEvjXWJWoeqmSK6zZo4f1Q2",
  "key25": "47uCJHXjGCuPekCpWNr88zvotQxXEeNfoM4pXQ3GWUC6R4zmwxv9DXZGh78rwG9wD5D8YBop4C6eHcwcYcepAB9e",
  "key26": "33rqBxAz6xVubnwYghM2UqAxqgrAnyac7iaVJEjvbR6gwx72KYYaj9g8BNrZgLDfSBcfHMXjdqQ6j5orZamBUV3b",
  "key27": "4ses6S5b58bU7EAwrP3oc8R4xKbcbPAosegqdMpmisbEzGrrore5CzxtuAR8gwG9CjfaQKgeo4ML6SPpfJcunPAR",
  "key28": "JbG5bo8uEtzBzGeJwAQuvTRMkMvfcoXpxk5ivFqXswmagmQLPrMZ1PcXpLmH3mgwHFG1ctSwV2SqLVyHezFsLwg",
  "key29": "4tiW4f3kvJ7ZpczQNpGQfjQRkBo5ur4eoqfyP8rZiy8pEgWqG65X1BkcmcSWRax8QdQj7DKqifyp1DCLtY1b2UQx",
  "key30": "54V2tq9vC4tP34kaDD4qf8nucLaezLLgwXE1him9m6mNJ3LLiD2vUePpYiWYgihVHDQbFx44Bq2KvaVm4hr7RRtx",
  "key31": "3DU912au21DRdz1T8JRK7Utsp8tA37dBoMP2B33VQnbPahYu9SCQ93bCzYFqCPUZYcfCeQXJYgTfQ9D4xYXsbtgd",
  "key32": "37QRYgmB7t1HGieWPMGi6Cyoc3qFuboBpEdXPMKZLGvvrN9W44oebDqU3a2dFJMdwpJmPGeDzU4tR4He6B6Trv2q",
  "key33": "4t8BYBcPScANmHgwZpD76NSTdaqqkPAKZAjvsGyQ7wvnRQNxB4RCcbK5XyS6BapBeKFhKo5Kee4dMBsMX8ySrkAZ",
  "key34": "4PXCEa6cY7idAvZAGJ62wwJ6q4wx8rrKeL3pmoCLukX9RGkSwxJLg9bfQoxFhMzBwoi6ozQsTKHyKSYEmR1faD2p",
  "key35": "2fAWTyNhKokAoELNNEym5b75iENJipavkQJ1WMpYP5Pm2tSiyQo9bVv9CquruKcceoYXrB35xaXvWzRpV9Gvb9cY",
  "key36": "4zCpRkQmeV3sFCN9rBoxau6ESVH7yXhfaXscKwfaSQp2XaibwaxMSYXfAuPSyA5tuViJMX37hA8j1xZVqkfbdzEf",
  "key37": "xwWdWJdjPrrB25HxYynK2Y2ZKuQh2CG6SDCYReJnmneX1CZsXF31YuQwsnEe8DGF1u4HXUt92FMha6BzqReApvF",
  "key38": "2reZNU3MxCLVs4vKax47s6xnwLZkBNAA6uLFyEEthJ93HLEGcQHwzXufStSwmnmn5JrtnLPbdwm3CaJj16yTF2Na",
  "key39": "5CVoVsWnfTu4JSKPMqAuKvCFrKLckxfvBGPPshq53Mced5nMbUVdbQBPC9ps4Ta5Kj8dMNQUCPntoY5fWfCSKuHH",
  "key40": "8XW9ipApsEJdvozvD8zsqQW73R36EEHDwz7DTz6FvmpAGvXmfjseJmQJswQrUULvW4LizQvdgzzGCk8P57wpJWp",
  "key41": "4GQZrxwU9rCx6CRAQFR4R5SosFbfVZaYn7uKT8T6qkZYqTZVHvS15ZbkHnqdoWDsGUgM1eTkcFme3Yp6ptyGwTMR",
  "key42": "2SaQBN9x7owaXQBAHU46zrEazQq4UxZRuZeVgbMTJRX1jxF8w8zPJyAW51YnAuxdAZdog3fP87uNYzWo1xJd8q8D",
  "key43": "bs9H7LTLDMTd8VBCa1SvfmYJt92MQpQEXU8SS1zH9NLZn82CYDjnguToVGE25dAW9XDMkmPoXEA5KoX4Nwvekvy",
  "key44": "5F4FBxqqbSJFH2iiZZEv4h5DNPgs4jXXjzXvgueEMkER6XFMuoqZo7XseW46a7th5c5ApwEt9JczX1QkvVozZx7R",
  "key45": "3nD27APgntt6vhxviBfCgqGa69WvUViVVKGvAKoU27cD6imKwNakB59rr68bnoeDbeSwFGqWbz9vTA7LniWudPr4",
  "key46": "2bp1ASziUBdKTwSqSPiqaELU3D4v1Wo73avZsyJ7dBdkEJfEPTZ2pjZsFCnvnnFB2hLh3cUzGWhigWDUZLnaRiLz",
  "key47": "5nbxrpeEenSXR4aqhVpch9NgF8j1oATwP5jmQZqSxhs1N5bn9Hy4TVwkW9Qa9fT34dsQwQj1P3mc5JYeu77Yf1aA"
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
