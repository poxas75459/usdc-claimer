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
    "4ypSym6EyctVBnsW3Qz6gafUrbnZgnrPL9gT7EGgjsLXtpgrx3ATRPLcmN3akkWs4GorUwPjkNfFGxxi6yNdwDFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XRY9uLy86kRvdU7Rq5eyjxjK8CtCkHRhHMWJG3cThhK8vND1Mc6fvSC123evMpjcnenDqbHJux9A85Ad7rcGcDP",
  "key1": "nNfwBWAApVJ3yecjCPskyhkr3ZFJZwYqQnEieDaWncgfyGQSkY8LqARZqATQA7ffnfQX4keWLCmo46KVbzJSML6",
  "key2": "2P9EpPtjE99HsF8gkRZuniwHAqGSTqxCUcDT3Y8xv2ksEfgpLKvyZNN7ozW8JvVNu1h6ezZCjUnBYCbhprLhJ2hr",
  "key3": "4VZ7cyJ6WCsPLMj6Disbgm7f82WdvfPReCmmEs4zVMezxhqhH7qbxAUWhniL3pxXF3YHr8GCtM4v8WSoyeZRswJm",
  "key4": "4ptj2C8LK8UbPKywx4LQ6AUM7d3MyxQBk9oUmVqTYw39QiZsfSA8oAqQnW7xTs9txD8S1RSqG18KtgZ3pPC4gmqt",
  "key5": "5gkVHahFpxHi6TsuxEXeLJZr6CrUnJmNoGmcFKeRMpRwoMuGsbNwapuMJY2ZF4F3D3LdHYScR45Lc83ySV7Xm7HG",
  "key6": "4KB51cPRwJMgA3cBqfsT1Ur4RbSt7pUjKtcDYAe2jnTZTbMJtEurs1ZmPYtewH9rpzZWX5U91qtzMGJxzkQCGHvu",
  "key7": "241JvJPZGkhZSPRQsmAAepoMgjHNV2K6kGRTGrmNBCb6TaVg4AZuniP8WuxXayutdSQ2oXzLd3Nx7L5dQCevEPz2",
  "key8": "WoxzWFr4ZuvRJ1G3K6n8heRc5rYpYx5Zj3oZzWqs4dSxY4onq51rd5bmH4vg33fJA2xNf2r2mkuqEHGiRzTqpBK",
  "key9": "5fPjqJmhPE9XcAERSHTxwAtjLQettcw7tpSdCECt8uj1WxtJ12q19oNZuREjNrq8B3keAvHjtQ9yWesYwEzHx4uT",
  "key10": "4FE5KzgsBTKw71EJoh6qrihmQKWBay7ouhuYKRmt8j4DNqCrNXtuogsSdbyo41HrAvYw8VDghELyu4tCsozfNX74",
  "key11": "3ryNJymErrdGo4abcW74sQEL5cHfAWoAERXjLQvBkBPuihnjBypvsm5983VJ9KTWRVdQghr2VsCbiKTJjqv6bpr4",
  "key12": "KBz87gVJmYwnEPf81EkDv6VnsAtS7Mgkk5v7VoPfj5cSMTdZCvsXpqrrbgifVgVL1XJdriea62CSHZvsyKQLTV3",
  "key13": "2jdmj4zbZj2y4tSunEEGsc2CDFW4k6WmCcD8myQmH8JyVB9NHdSdpACM23iJJABewCczyxooWsMBKJHLListjS7a",
  "key14": "iKpDLuHnsBobJZ6wEnquruWZwfHFgqy5gYyEChAzSY3NA4V8rv9GyEdsV6f5LSKkrwFbkvty32grSZZ1t3syz4n",
  "key15": "5GkLqnJD6Dk3kiTorapBQ5H746KtZZ9s1jEjLpCHA6oxf6VtVHNKjRRXUWC831mNBydUchwCbi6VW4pJ2DkmRLF3",
  "key16": "41eLjv1b7yXDVwWM1S7NSUk7NTYefHezkJWK6pQF6njQL1SjozLxxvs11jWhQAhGZz48cm56pBiWAVdnFpYpXuds",
  "key17": "2HoPCLLmjUFLZKh5j3T4Fnv9WPN1HQvk6D3ErdYA83wDrCgqnVgerH2oYt1jp9ETfvkjgn5UT2nhWPkhjCC7imLS",
  "key18": "2cBRG3RihE5s6HuP3VsMcV4cRipQikVTdXr7Ayfea9eXpSkfRAAapnNkgeCrsnaGGnrzh3zjTMtYWmEfRnLN7XJ",
  "key19": "2rfXkyUbSyW3FVEhHogS751Fq9hvWrUhtijbVDfw4qVJCHCb51JFYrpiNku7WMP2BgnQJUPRbhvCeQmfepJAjj8d",
  "key20": "5VJd1Hp2MGsfFJ3rPCgWP977Td8S7hS2sTjCuyBvpiTbDV1HJALUSv7MKoLGXEJigDfC6x4ujv2gKv2EkTSxbEVt",
  "key21": "5yiaUjHSj3zzyQVmpKanYvy2usnirmNLUVeSEXWiv3ewyDYktosUxijmRiD7nnB1coJcu5qszQCXy7ScorofQhA2",
  "key22": "3sxsvG11EbTkBohgfzLwDDhdTnkMJxMSiGUwTrrsWDcEkjPbFiB9TShJjarzVnWFsisXzG2hgZ1PCLyVgNZsy2jn",
  "key23": "3tSWGbpQDPWWYdNkuCyjjsoRkFFjo5xRBunMJr76BWied2y4c4Y17nvBHDQgQJUCvDEfzkmzj2uLdZicFwm6KQ1b",
  "key24": "2PP8KnMM8ZsvFXLfP3KEYt3AZ3Giacd867y8Nta6oQ81iZQhG3Uh149joDWXpTZiB2MAZBgBJ1Hien8kNAT41Whq",
  "key25": "2fDsrZbSk3GhkVMpco5NgnYkoAYinrTBPfRRPhmYGg98dnVZZAkpUonVyNKT6mX3Udt94SAoXc25hsAjXfqsiDc3",
  "key26": "2DcVydPvzTwVnA4V2hj9aL4KpwhKQ7zg5hg1uweJLCAKCLAkPZfgBbCoDrQnqW7gDomDEpqtb8zRrKBPbDf6f8St",
  "key27": "5eg4NJobvsq75S5PMsjoUYXbAPLFfBpfXR193gZrVj2ac32jhkVfUkUDtEzEeYXfNUnekYeMMeqzvEyPRdpQtYA",
  "key28": "21tXkhFbSizUgXQGzuE8JHBoKsKUo1r97nMwoLSbaP7j9zb5XR2usTjC1hRG9A7PBNSVFUJES8SvUqg6bGc8kuv8",
  "key29": "3QeicMzPb62KPXpfhyPkGcGFQtjZSwo8pU2zUVUM72F2eEyFfSCNqC2cJJSF27eHiyzTFtMTLwBZpEQjamM3E6K",
  "key30": "2KiFeTrZs9yEawivgEKiw1K35fChrdi7L1FLc1VAaLz8ACxCyNPvbJgUZHKJVPAD6PEu67zQmYT9CXRLJh9DzFep",
  "key31": "5vCyNuEV1jTiNonhZCUX2gPkwSAG7Wb8hY9StuigESd7Gk8ruF2FLZewAGJrmWjUSx5JsHYevUGkGHY2Zo1j3X74",
  "key32": "gt3ze1otkPngq5XNjgVYAxoSLZ7SAYpawVewFCsSMNpzBS1eB6MsjR9CM7d4zVPJg1waCyFv3AxFoNGMbmXJf4X",
  "key33": "3m54n84oUSYmGrUjjyk8qsSaVoG2nPSDozrjKuAm1SHqGdCugWxWZF3k7TKZfqgQPqbizdPEArxWAoVBfhrjdoYe",
  "key34": "4JSj9Db8nUZEfFUvHHj2d49HpkPmYoTwUDr3wnJ2HgMEeer7YEL7FbaxZZiMH8JGQR4iNudeAoQVrjTY7PPhz5YT",
  "key35": "3V5rC15wAB9YRbVkwVoafDaixKK1fT3ne89e3rZBcureX2Vqz7JYoeTuSNV8asXJY6cVa1WchnYawpoj8dvQqHwj",
  "key36": "289CmifsR1S2WdDUdfpZWD9RR7dDbQgcV9am6DN5qQm8YAYJeBKYk6uXdmJnALvZiVvYkkNcM86cYYopEXAE7V58",
  "key37": "5CE5cta1rZ2nZYpZg7FaBwe6N3H9chCGkGpgPFmc1Y9kV64JsZpVhAYDxfUUG6KhwH9eEufZUxCN1HTGDjWzSBWe",
  "key38": "2AkpdtcTt2tAwrKMDr7Yvdkhf5bTSRNQWj7hhXDDJ3pZS24rtsWbLPe4rBuaQgjdbfCzNp4LzyKfacUZSSmZ6qBj",
  "key39": "yB5BnW6rPcEWRRPvus2JF4VrCDg46K2BVisr2fq84DDjX5Bik78cfdrnTbgBNZoCtZBoPBirBLJusUdRRtUPXNc",
  "key40": "rzLMjbEoBEuUn9H5BQdspViggcvnUGhL7itLYjBqJqmFp6J4StpDHz9NV88aEysiebWxG8844J5e9eq2FekEaQf",
  "key41": "dW1sNddzwnGLY96VNNbWKAubKom31mKBz6mb4RKXVvMLcMmZqugaZ6bCzxtCJevdqSHi5ydqRe7of2MuKQwVde8",
  "key42": "5ufBwaXqy1KV6CnJP6G2vxrocdAjpmutJBUymQFihr87Cukt4mgDHH5TTskeqHfpANZ8HFfnuSkD2kjtDa9KhYYv",
  "key43": "Zoyo3NdtUSRR8bhdNUaARJM8EQnFE5uYYLoKtZP9MveSgBAo4rJKfHELLCFt8NyQm74gcfTdRjTTYjkYV5dkW18",
  "key44": "ht6Vd9pexphtTmYwQ9ZThW7h5jDwS95G2JNQPVYgtisN4ng2zm2ragC47hJQS9Uao32tmstzCtVegHN7iZiPet1",
  "key45": "53LkT4iRJwpfJhiJGudjFDDSmoztuiFh9pMtVsoYZVX4jL8QQxW3GjttjguCRpCwUFLJGrQfHgZaAdAWpwcE26vi"
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
