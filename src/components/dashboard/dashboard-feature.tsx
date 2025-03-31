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
    "YcuaP3jiaEuvAoUdDyaPEcA6JAFNvtM3e1ekCCvHc2QsmXu5xNX7oyV6f8NrYb73UBqnEuJDxbE22Ci2KnT1DPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AcrTsjNhiopPMQkWAn3NHTVZHxemWT8GxM3xJjeaxnTVGdoLCA8sWbt7iR1L71f3WKoXnXSBLSh3qeAmBUS5qBb",
  "key1": "vgDxUWSUBRanum2V23EUPTNR5wGLQapYmEuUzZG7spmz2LpXW1uodvQ5wwE8b2KZsJTE2qmbQjv7JkpQ21EmjVD",
  "key2": "5Hqr6gyi3Jg9BaTY5UuB6w98T6aexNxCcmggXhhySnkdwLrEEkVdByWNUQAB1LC1ybf29if6nw4HAAmguTdNrpHR",
  "key3": "meenQCBnBLYXFaBBMJU7Z8j59Db5pqEnfoS1YSZojZmFsyVWTFFhps7WCVdAa96f1Z5kyM3ws78YTS2fxk5b97U",
  "key4": "2CbRGyiFJUKJfCdudLVCFGWPHCizxGzgsn7Zbgm14B4J7RWbb9THbfYokb1KdzALy3jDEXyQK1HMaepNmaH2Mwnr",
  "key5": "KrYNnu9J5fXrPv7r4DRejfRm13fqeApUnMLF4HZbZ1AKg2KEFdifFWCc5nqTuxUg9NYUXMoCscwax27RMqNPUF6",
  "key6": "fGwC8Fi8w61rhNkZK1EPjU9qXuSUQRSbzND16KZcLKHgGAQeizgozQEDAiaxgJ8eF51X1qKauAyYj5Ln8udr7YY",
  "key7": "2mSS39sfoy9tsEQeyP4XgcNXKAFUp7Nv1Vp4FgHeTUgN4anFhdxUmS1cbvHYQW8XNSsxRc553dLy6tRPSxhCGbgt",
  "key8": "34XmygaEGonou8kQnuX9QsU5LyGJ7uAyD3onyZdAinR5Fm8hy7ryAvVtyLyyebPaBvsqnkLY8vogYTH2BaMPpnev",
  "key9": "3qWYqa7rqCtddddweCisBJasbmBiGjt9GsuKwVLjaXDvdzbeZq71wMTsEPdmxweTf1Cg4HiRPjznHjz9pSafXQF6",
  "key10": "88KrRgr4z9d4bLvNaoapgi7MKRCwP2iB2gZwJQCreA6AQ46k2Fvn6EAx8T7x17Uad35xT5SU2x3WjDdzV7PJs7s",
  "key11": "3iuFCauaGgvvR6D7dV8T5rs4K9zsVKLCgnungyYwmtokTKgXbpfgbimTAHqh6K2JZrjYsFoBcd3UHnYLn3AeSc4T",
  "key12": "3szBKntnbvNMSNJbGdF1Dz2emsozkSKF784T6YEYnAAveHNjqmreiExruT4qMzki7X9mgmWdbxLFYz9feV1qioKJ",
  "key13": "33ZhD3cjUQrLYJkDUFSS2DcMzCXWZbNySRYN6ujNGrYhreGwj2kMsY7uBB5LtyheoFCcjQxLstCEiWTfQfrR7jF4",
  "key14": "2WzmvQo8m5uuSVoxddr45kNbrJVUYWs16oKCJrpoqhBPPKeaNwZGR7c1ofx7ipbyA66WxdjBVCbzPpk6Czej2gsC",
  "key15": "YyGgKCTXjYm1HNaBNC3z75uQRCK3HVaBKzcyeXMrPyBBaViKCD2SgGskvn33x5X57GCqE7yv8Va14aLJJcvvFJF",
  "key16": "4bD1f3RFawrZAuFnQjXxtyHnJQUaen6EauBJDTP31kVd4TRLbk1ocv1BDRhKA1bvAV2rsSaSVAJH6nj2UGW8D2uo",
  "key17": "4TD4L3wk8M6Na3rmtGKutHUDFyNksrpb1F8gwJBbawAVptZrvqXanR6ikHSa5UKCvWssQ41a3ejWCSVo19mqiqFZ",
  "key18": "WNN65hRya7Nab3t9hs2L8CTLXJBLuqd8R8QjZGJEbdPbEBqGso66Hx7FZ7zASNWfQSpokXeX8WWC4tPGVo17yMP",
  "key19": "4eSuxSLXkDaaWkmiLCEnRND7nHX8A5bbaY4wkAsppGHx9ouCMS5y1R3WeSWHKGfmhSA1LbhntgeASJMLYhDZQKqB",
  "key20": "4E6DUyZz9RWd1spwwdQLbG1szDYh4cfpCk4oiJ71h974ey9D97HFLNgF7ixemaqycLW6eL5t6WzNsDYUxkXBEoyH",
  "key21": "Fw4JD6hB4S4tKXh2Nxw5CSzcvFbJawZnhYEQkbeWajBTigQW62yFfxvDLvCeiqkZ5QUkEReLKmdDzjsHD96ZAGA",
  "key22": "2m9L2AigTchncxJ6QKca4JBMVLLUT6hVVccmjuLqdfa6f9E2KdepnLfaUBkDHnQJt3m9tWwpJpiMqJVcgH15RP15",
  "key23": "4BV6ES9EKfdxHdx8AJXWonRLJ6rBDt3S2Sm3n9pp3KZX2J4Z8okfmFsFkWAasDUoAUJkcJKm69wsq7yRXUfcScRv",
  "key24": "3HgrcecGhgUeJNrjVhhqESDGufgpKP6PFQuZmGsbQkepMgStLYyrSVA8o25JGVs1jHErTTkvpjNf3Ccyhr11yMEU",
  "key25": "WUHxqKaAmAh45xhjRemGZzeMkhSoEs9Q5MKHfgbiweARB6qcXk2dMhvNGBXcavKFK5zjcGWsWzaD4TevD8Tu4zU",
  "key26": "5VVXfVjZw1r8duekAd3dV2KpNmFrNKn9PDsjGpwQdj2VjFqJDZmSffPCHL4r73kqSoxg2r3PgUs4p9b6LHxqAxdT",
  "key27": "SwZG6p46VfqqDuw5cFgLWSUMFTRnN9GqtzNQ94S3etpnCemPrcr9pkHpfzifaGt6iMzwEydSwY5x6ixdJnhgv2P",
  "key28": "64Xxu3tH8kQ2eC7QB4J82TyE5WY9YM3cmLKymGVzAkg2WsmWLXk5e1Q7xQkwtaH3Vbs3TUuCuHi7QDKtceGwuiDe",
  "key29": "4pmekUKTTNYdw7RV1rcBe4NUT1WGgq3PSUajAJyzyuNWS67nbSngFqma2ad89qAXTQMwJEMMg8DsoTTe7Xm87iu5",
  "key30": "grUsTRPizFaU3i3G4HhesWzUhtnx6rNKwSWXBciGEdTdusuR7VMMS55HapccQfcVXm75N9FqWVeVBt1oYY1N9B8",
  "key31": "3GnSNUNAcxDPQjkWhJPzpHuKZeMC1xMRNzMWtkstFw4iDBv9ZT9SiUdN5UtKVpErbaf4Fxkfun2qM3FvbRkgAwct",
  "key32": "2CNFpssw5Q3k14XU9RSBRzUucEnt4QjT4mEqFRrJNnxyZw44txntq51D7qoLrUrPPtPTEqUsyb9dsSnqe6mEHHrj",
  "key33": "4LZt42mngFMQNoKDvV8gHCHReDvXYUEav3Jsz6P1Mj2QvC8sNW9YPqW77Xv5BDASz7w93o3c6SV68udhLZsyMEeL",
  "key34": "4G6LSQjYTUW7rXWa5kEAVceZ1mZzk9tPVjZqNY1PNnJRkN7SvavH6oQ9VoKtpFsYedCUc7FCxKLDTGNeofExw4C1",
  "key35": "2rDfmpLdkKynBS1zvLfNbcijzFZM9QrEZD9V2KwKF6dYzSQ39QPbyCTE51rLbMhdyEdd3EFJbnmkWSFSsSTQwCNN",
  "key36": "FWq2ombdFRhxUE42FQkZQ8fCkR38HspTt4QNQxiSDN7uHkfYM3wUdo1pYCtpit2dtgJGLWNn2PEgN95VCGSxZH6",
  "key37": "4QECNBCh2yCUKeiEpQqVbadU1p5Mvy1y7vYjRwCEd3i41D15sebzFcDqhn9WUEB7oyduRvSmKVFkrXHa521vU9yQ",
  "key38": "ZBH99aP3miyBcb388sw9Lh3NgLFnV4Hn9jGY5MCBpVTfqfpbavpRK91hCe4X3CAA1dtY38tHNvP5WuUVUaQ4WTo",
  "key39": "2yDioMwqnNiCJmPtXK6B78vmEaGEkVrbqdVWLLSnWAv46sKNtXXrNe1eZEJTiqvsubg668i5ei2C1rgRmGQJ8eD2",
  "key40": "5THoEEgRfk3DnLS5a5kqqQ16KmZ4rbXc27cH5fpAWEkMLEatuFD7BMREjqBbeVyTWjWGQN6gBBUyyauzdLww66Vw",
  "key41": "yXWgYu2Cd4TrsfgpVhGmrzcvaGHWm3FBwd7EM9Jb193dPRYyaps6xfT4GJM4a4tnNaqqzzXvzL5JmHesQZWhmWC",
  "key42": "28qRkAtme7543ATgbV6o5edGWYT1xjPQC4pCbHRUBEx3AEN2VHmTKfGVRftFNtwrR9nuADDtY3969ACm7owZMYJn"
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
