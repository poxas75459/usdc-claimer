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
    "4DBgaTnxmv8NShKVJBcxEtzkBgTi8vipCKeWWUZcF8hxmN2gf1SmZFgMeKHpoVURwVZ1G68Nksy4Bbx7rdqiK9R8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CXd1BSzzze1RhBqJBZ83AcyPp7mkzLE4Jf5JLPYs8aRmTwgkXb5LsGLAZ154SeWeTxPQqv3focbg71GbTc2gpjC",
  "key1": "3Nti8B6XotGS6zTfDFUydikhUtKhLFte2MRG4GLqgWT4tmKi6kc72MKKskZpwdjJYmjtpX8BwZgLAbvSfBM7PJEy",
  "key2": "4VJobe4eeBHqDUfuVTHN4GAuvYaGeh6HopzD44P91tJvjKbaFYkrmbqZez6aqhDyq8auZaCdqEtM6HATgB3bK782",
  "key3": "2K6gD5rnJWwnZg1mouEZsSpwS2Mue4GumggTLMEj1VALPXhUXTnecNEezcrn1oUDqHfNcYKYZrpXWwD2dsibwuTv",
  "key4": "46CZzdeaFJ22VnohBkLXf2gcgUNvkdPjYJL2MgCtU8FcfDK642u9WYiFKEWeuXRvnmZJdV8NYbezC4obSmGg5U2s",
  "key5": "2e2wySFUfkXig2GEDDZKKWNW5ibrHx9xgreF5dJNyFZR9rQueMtDcwVrFyxTB6GdVBS8wgLty1ESrLZ2wkRLMnxx",
  "key6": "41Sdx7C4q3tew4G3311a9iRha3qsrRCJ8GgyYWbBZovw8V84uBXXkyWyzJ9cP1wEa6SK5uz6UM1uu4drme5JLpha",
  "key7": "2mo5kjYaGBCusc6Wj9A8r4kk3WTKbptHnAiu61eXUx76sZYHFosMk5cyb4pPAGfEUNaB94sUwEp6G3pRGzWAxv8b",
  "key8": "5gSH5NLE3cGgaJMfxke15NidLCH2Na1yPjNkjBKLCGQXJ2tuReeToBPSbdTWgHmiFg2zpxTLwMZWNUBm7VXG6eUu",
  "key9": "53BCbGUYP2tyjSmRHiuqRKcn3ewGSPHKKBPzwCKLtC3WpZuHcBR6spyZSoKrcGtfLhBzMKtv4ECcZcy5yfJnWBwo",
  "key10": "5vXjECuVpc68FAfS9S2nys9XZR49C3U9ch3FC7VoAf1AERi3FmjZLjJjDmdBSgw3YqEUfW1FnACmFdtTDmqcP9Ao",
  "key11": "qTQWV6x5fAjQWnTdG6j3Bv9prXcjcoYQhJrL5LB4FqTLf2P7N9Zrf7XyEoWiukVUe2M9a5YYBdELyybdJjgCCP9",
  "key12": "21S7Wq9rJKtQfUMNeVwoN74n3xhVJwGZRxhBNxx9zxV6xTVhQB9bBSWTLZdEaqoqCDVhWVn6wpMexXpBeagfRt47",
  "key13": "2x9FP1getXH3oqvFvQPCPkiXJ6UxXH4G6ttwk381rYtT2CjNQDQTf4CKQFQ2WcV4FNV5HGpkd3R2FBgpXurPCdMx",
  "key14": "JegVaeeCZy5U4GY5bg9gUZunoBA6Uw5QMdMTERnRs9rQqftfcLhf9r2Tsi6wGaqY18o5UJ3LeYnuveCkvYmNLUD",
  "key15": "2S1o45ismk6WzhjcoXSt1sBRzby5Fue2cDHJbNse7v2ki84yqAzBsTVxcTM26GmmY6KN8ySN66Y3GXFTU3A9gP77",
  "key16": "41MnKGwTTkx27ZsrBzWZrAXSGR9sG3w4grPr4j9LNpdNwMx3NvyRsxctsvdkQPDNuT2y69LmPu2XqQhT5DqQ7Vsa",
  "key17": "4yRE44kGR6oMmpdzcfiTGqPb47JZD3ynP3gsVroQHj1RFwqvvwoex8e138u7ZCwBFw1xYVqvqJwBnnzE98U2YeZg",
  "key18": "5NytRncQa6v6fXne8BHGFuSXZUA7Bpc55YfdsS5krzPVmBHHaY4u7bGz5ARnExkpW8EfTJ6CwC8gvPwyGo8tP2HL",
  "key19": "Huyae7ZdJprNZWnN9Asf1WKDvWhxFkadoDTJfK8yDja1h7Dcxrwdj2Z9yjtqeRPPrR8MAvt8vhVVWp7SFyZtEs3",
  "key20": "5nJCEFrbxod9f3f4tKQMHCQdjDLTV11rq76c5JrvAKnrZ3keHWebS3XNxcE3RakDSuDggKWcUBj4cHrxJJCjUWBr",
  "key21": "57tzDEvDLWSAbQiT5vH7ui2MxVqbAwArz51hvN2ZcjDvr8dAyqsjQcbHdapUeErLZv75WueSnfaBriAfuCjDU9N3",
  "key22": "4hdueiCCeWPKLv7dVuvge8Ldc3Yu7zpHhBB9Tndh1cZiLF43Tb7iEgRUh3XnhpcYZ3aNfghSiGaRSNxTweqZ2n3p",
  "key23": "2uTSSEEgfyL85LNuiDWQdCUqwPzwSa4GoUjRycuMX3PP9zpFX1jJPtU6ks2sXU6tghi23Dw29wgz8FtWoDu9NJm9",
  "key24": "4zAp9aKDxdTiSMYa9eFSWPQfPGeE2Gsgayuy9Ex9gfMmAVCcH8FSg42DiuihGDqZXfygXLvjWdhRfSsMeTLCk1cK",
  "key25": "34GEJuMLnNs7ni1WdvqXiU6bT9wtqth8zXafKxSBH2Lex4Pkna2SRaATB7kbRaEbTeHKfUe8eehEMLffGc8XgWGL",
  "key26": "3sAFtzyp63M7qVGCLXQ2uEMYrAzhaqit9qAJmfUHoqLJvD91UmSiu7yT3Yvqj4bTBmyhAfLLUijtPnc788s25MJa",
  "key27": "f1DSSC3fMMd9WhnmupEziZcNodav1PdpEi8YqmNQNqjQRPY9648btMA1R6ZbQe5FxMNW8UoBXag41qHDhAKuu1y",
  "key28": "4MqbkZ7TqzEvjotu4gbgW48CViLMLYp8M7GpwKX1PaoPXL6FkEGdBo7dFr6kLEShGviA1RgsJeJsMzv6w9deMDpB",
  "key29": "xqvhjuicuDEgTNhbKRuzfo6eCmkkoVNiS4Fnoi5RDQYoHXbaAyhtcmVw6rkAyvayusWzdBABLDjLbKgCZ8Ynjb9",
  "key30": "4uBgevbDpVp9JESuKrkffEq6HwkoMgnUqkQ1Wra7u1mF3MRCT5unkM7uQjJFFpuKTAsspt6AckEgdAypXJTFETD8",
  "key31": "CfFRDJsPn1LUj53ssH5vSMqFRF5GkAKdmNuVuRTQHBDMkJ3fQ3BbGBC3ESQ5uqHQm8BZaQbmCPX3FMFMet57iq4",
  "key32": "33G1Kc5WMqgJhbHnW9t57exiRpWX6K69CHRc9LP182ZLESFu4dYCabU82GuyFUtDfMruRi9mRF39EtSpyHCZ4rU2",
  "key33": "45Ece4ooEo8ShVMvussy9ehkFyCEj79TrAXJbfAKDr9m3PBPEPWC2qN3h8wynd13TYSyyCPL9fD5Fp5v25eep8fK"
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
