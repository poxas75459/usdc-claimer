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
    "3F8BBzWsyig12UPcdr5ZuXo2wtsvBtUd1BrBaG89e89JNjm3GqKChXgyGCBpvUqESyw2mM3fkxqfctKqS2oMZZv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48UwyYTMPY8y8Uvb5wvdh3GGquQALta5gVMJa7kWiMTgBzYgzhQQ3GommS7Q2xwSBVkYmCanz3z3y73Lfd3CdeMR",
  "key1": "3xgZN3qvcFzjnHSPcNtGn78k9AYTqDYpxQmLCShzDF3JgjmynpC3wjNngMCKNhaferYMmCYcjf11NUnVxMa773Ro",
  "key2": "fbHaAsRhxmg7gFnXQHsGEifR2rmaDyvuyAsjqRh2KHn3BDVV8wKQE7DgMukddRz1yuac6x3r1kyPzdarqJrDAiX",
  "key3": "fPsmCyfjNVUV52s4mMz7x5kyLYTv7wRWUcRRVmbftLHm1i4WeSLpoXmw9Hyb5PERWqmvjtWECQbgcYwkEAgc8W1",
  "key4": "3KKGW41SFQmHtAdbdw488Np1GLkKayFNZ5R72yF77VoGs3RFmNsZYLcCzBuPnMRqGbunYsi7o94QHEJXDfsEHSwu",
  "key5": "4G6bU1rDDdrxwbrTSD5L5J6pYuF9pg1NRugvUfVR3kUDQaDNtzSoPzozzSoEvTQ5S7rx4B2bjvAQzevQgJr6RcXu",
  "key6": "pknaiZazhgjdvdHn6pGZ3UBwEbNefGJJbWxjHXkoFXwqsxJGnawqgTNvEXbFw1QQ8LfKpjy22qtSJ1VMm7TGVFT",
  "key7": "3axPM9YBFNFChddrSUdYLTYn4J6B5NXWMsW7bAQFSy3NwXFGMDAx36JAXkBRkeMNi3P59pE8Pbk8pn4arieKMiTA",
  "key8": "63fC8KjqPB6Zb2B9iXNzuL5Rqzy4LDfeUTHDjPQ8pyrR5XdtpwMaQMCvnWdW3GRbnfUq32776sXtsREwAwVj83iy",
  "key9": "5TNxUVm2R8QwKP8bEwdbZf6gLSKNcAQjoQxc1pdDF1KYrLm3EgYTCQ5QXWSnWGjv1DkwATvhmY1pGZc3X2uuaN8v",
  "key10": "rXPsGbJdnd3VBm3Zds5FbgWYhuYYNDryAoxQv5mqAYL5ANr1LxTnfcH4ftyLGBjKg4sfyA9TNdYL6xNWhDHvNTF",
  "key11": "5z2vQj7CMkg4rSMfyPHy327n9iePVFbssMg72Qyz34ePzZq94jxLvHmSdMcC3gLFtiFSmEm8sMGWgdhZpnDBrDex",
  "key12": "5hgG5tXQGivtbd1FnctSJJwi4B6oX9w34Raa1UPyjUrgCqqFERnuceZ7bug8SVCLTuUSdVChwaBUX298ajMEvDq7",
  "key13": "4PosHduGv742uCEJx38TLUceqDL8h6e9BwtriNSHd7yjb7ASFzKt7Q9fF65DLTVxVqnxV7NrGCTvgtUTMMVwcfHz",
  "key14": "4Ue1aVYmfeGpNjKwSRRJwHs4rXFevufvDxkM4fqpBDTJxY39d1iXQjsMm8HqHg6rgr6mqM3JCgaTbiN9QtmtxmQn",
  "key15": "2VHFsffQwMaCAzyErAnUPxFKEYQwfjp6CUQNkZ2nk5MYsEPTuUm1NDzYonWoQ8ycJCjB5qwYHWUWCcF5eFT8U53W",
  "key16": "2T4FB6W6mmwpi24cHrK2vVLLo3riFENk1ZcLhJLPwtpBzVJ3DiTq3tSkBMEaEC51NNhBviXe63WebBhsYmbe7W8G",
  "key17": "D1YATmAwqnonk1QnLLruzk72uu3Ka5Mbgzn2qgmbehAV9SAjbPVJkwpteZXMsvmAgr6doEdhUimwErXNrFgtneP",
  "key18": "33YpKnEWjUyDWTvYxgWZ7ewF3YjbMwqwDVcAEJVSs1e2ikGNCWfUGmotDVxd8qsn4pXG9GvfNDvHNT28ivbScmwZ",
  "key19": "5b4PAtz9NN2h7ZMykZcHDNsTEYsfn4m99viCHjCnWaDkwzmhfCUhFtcAunyD3peJTiYyseNxtqrd2QdWBZ2U2sYE",
  "key20": "3ttZpUd1BjNb1zGTKHRVrAoJaFooRuuP3HM3nyDswWecacq3CQoMsxzerCw6FZnJbDbNFtjZTguw9jVEYgDGNGFV",
  "key21": "337bPQDkKKaMG7q8AnK1hsmvYWcy22SLR7HXb1TUiyqc15kf7yaWPXycG62rgKXuWiZZ2iSXduwhuAJnnXXVEyyQ",
  "key22": "4idFxxsQiSs3KjKfbMMwKb8m9iKYkVzNbGEUGF3naffEirUqbG32sD9hvCKJmhpP7AtxhZbUvZkgBDXvhtWD8bmX",
  "key23": "cqyFGzKKb9cx9LJsJEkCPrpukAUMCba47X4RXBgNpubjRavDJZZuMtCTpASyBJANTfJ5Gs3cUhNSJBf7mzqQosR",
  "key24": "5YWKGY2FSxth7BfUuzL8mh2n7YJa2TWeW7egwqcc4bNw6dJpJkmaNUJChb8EasaY9Atg2UDF7JwND8hZJSANPUNh",
  "key25": "2PxfxvW9JPSFiFmg4xYV6DVVgjfk33AsJgT7YJdgGwDokCnnHqcAakaJQWH6t7MymcgFACA3mXf5N6FNKjD1DyF7",
  "key26": "3ds7Jh8DpvQ1vf4eEKdQmwuLhLEtuYNLVxoc9aKy6SvS73wrZQANPc1KgMuLYzt16NbFQe9WSp8DrZ1JAU6EnfbN",
  "key27": "muUnqDdoPQJYEQiiELbjnbBqmHPr7znga4uJQmkp9SeRVk6ZTyDnQakXgUXCxd2sLG82UxATvpczG4cf8WfPGNN",
  "key28": "4m1J8JEiBpU43eHK9ReBmYTTyuRF7yr6Coj3915pxyAZWGwoLuuXMQ7rQCYMka2bVHz1z3KQw3FvLZVkUaLavdcA",
  "key29": "gGpAUd1hqhMMRRWWKRT2k2ezKUEtkNfN89Wqt64JMkGq8uM8yqgfjtCQBBZyyUXxYxefWo34dr1QFv6awqwkZz2",
  "key30": "3CkZN9hvmgxR6qGUNtLURWsCP4WvxHemKK4zfyf6vfhKsv9Xsex1CVdvM3QcM8rwkFzdCokZHnaMArA7HXsFsq1Q",
  "key31": "QdDXuQdbwDf5XeoyD4FidEwGCBvRZitroTAGtYfmrgN3T4bzoSqksPuoifsSZDxveu69PRNUD8ipobSWbeTPpj9",
  "key32": "4kqncAimxP62A86xsFV4wv1f2N8C3RryHdKE1DnK7cazYJ9TZh97h9hsXrxjnLdBoxP9HZyNdmPYfyHqCzF8tkwt",
  "key33": "26vPxj9V75MUrqrjkJVJoUnEG7eeFcUb5sHXrMWR7qdtdjABkaxWs7MSoW4wg8o4yXyXt6NHEov3ssVEngfKdoGK",
  "key34": "2sgdGfjbL6LzZBnzSG9c3KSgPoTMhAkNfUvWkQdHPGMYWaGLSfAixisQveHhHEa2vyci2FUBkRqXADEjP1oozYsw"
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
