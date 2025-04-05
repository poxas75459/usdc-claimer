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
    "HsBmkgLYWm3U2WMJMtAQiQLLU9rTu7CvSUKTNTZS7A5CQSudXxaPiCP8n5wv8MDBqWk1VSNrad7CMFJCN99XLde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hLAvMA2rbpBtBGdY58Q1uJh6goiiSAQebJZRSh1tr93UEXQHq3NiT4ig4FDc4wNfvMAL3MsjW23u6iuS8CivmvH",
  "key1": "4nZ9aiUkviPJak8ZiCY2yMxGdBUo9sy3bmXey146hKjKWm742pDfNUD33poKWpVH3zo37hCgfnBwfLiHKk2pVpMX",
  "key2": "4UmAqcqfQkcQaaeJ4MXcSVQLF49qhtXkbFtKcDMaKQSPJ98TP58KLEvAJEJ31Aop25FSsC2FPfoPT1FY4hFbcKE8",
  "key3": "WBgwnV6cHQH5ytDUvHk7vXNuDzS4BBu4YLdt4H9DmfuXfqYWxoJe294sc9Pm9x1FaMS7MR12pTz2jV7KHGA1izb",
  "key4": "3MnZVNBMVRifcxN7UNcAdzWLXoWqStRRAtC3kujrgproAB2pFnp1piZKncuYNV8Ugyuj1zuBjtraePaPGFU5siRt",
  "key5": "3ubC4zVJi2H7pHdPjRVdx9bE5nyaCNVVFq3f424LCQCfiemgNiNVMd7RPBREvTgkb8FS5VgabgdFuPS454njkC8i",
  "key6": "gMiSX3jGwbRxwHNnRotBQW1a3aczJZzEeqdDZRuypKLGxB47uQFHZpxuExCfu4X8obkQdjY4REcdTe3yE9R7a6j",
  "key7": "eCyWFzjrZTBuUaNPQnYtZhshgxzqhtythefQtchpYBFszhvvrRcGuBBf9pVZM7XHXHqGaqjgrPxf6BaCmDcA3Ym",
  "key8": "4K9tVJcWkteXjxY9ezaoVDQbyZjm97UWB7eMcSZkX9kArKZwHGizcRHz1mBfZ1fMnhYCK3D37KDqQdisF6Uz4wo3",
  "key9": "2rGkTGSy7VdCHnFWUpwT2iH63zSE7bA7gbXF2Ve3UajSoHff8qeSSNtZGMx6bAVpas4GTfGA5rwza4h1A1ee8Dst",
  "key10": "21bs7fj2k478cGwtZmJD1L1JnifQvMymgBPDuzeUMSMbongzMj1GA4G3nJWBeU8EUeA23t3SZpQAZ1asQ61uakTe",
  "key11": "4ZPdQvpdnXuoEdjK4pwhpYej1S1pp7MRCWEdvJge1WYqrj6esLqmJkWD2whmt9cRy4eQ3JH1JH4dk9zbJjypX2Nk",
  "key12": "3YYmunVdpgj9WXHnxNJgPpwRhp8Q46UaZf15keTbqPvKiq2YF65STuu98Wti2qc3iCAmSVRmSbPZkjivRXy4aB1S",
  "key13": "4TB9QSdAfiEanr3o5hciYPc5jhEpJaYppo21T9XnqoNNEya6Me2zFvHWQshyHmrViyXk8ijf5nKC5LEinSmH6y2k",
  "key14": "5gvfcGTmde2gVrqCaJ6EKRcvdVPRgKkA5fS4HbBHZs8VCNUP2qyiYWLqFoUqvqTA7krmuEaSZH8fTQuaSvuD2SFx",
  "key15": "2EyWTX51FDqMfAzyDGCJ3zKGZfuwGBUmYjJm2r2grvD7LWJdoSrAhSEAmFMTHRzntfCarb3P4HhUaN4huce3GnwA",
  "key16": "5jdRuDb6QioRCMcddTzeFbQD5BikCRSqcrobhVKSnQjzRvPYW9FoEEsizCoxTym2meqm1UHxd1qHKFNvzUh6bkDV",
  "key17": "3DtFoEg8TNFXtyyiLRdKddtxVS1nnZqkp8tcjKm1iX3gEzgrGrbAWTyNn4zzb6ThgwYRg1pv8tQrwhjxHuTaoK6j",
  "key18": "62aGW2CChGWHU6X5LgP2FgRaQp7nhU65ckAywFWXGUZ63N8xQKEMcTpYyDqh6YirpryL4FHnZFGC9GJqeiLCpJpj",
  "key19": "5bHv2YASMiGRkaE3bFJmZkhVCQjGzfSS4b5eqWCEZbeB3Vk45DZwNwkUy1UfPYHqGiSZBbct5hxkTCV4KAD7me5f",
  "key20": "SRMmYhyw5Dym77d5GNaHfpeNYtqc5bSCJ9arDzBYrFKZn4MYofm3NGbm7J5a75i4wucEYX7Z7dQHStqtSZHy5rU",
  "key21": "5VziQ7C1eRLkmLkgJxZxBW32nDK9wfKsEs73UoUzQAomKdrMGnNgVTTBhLxxhGcDXFx6edYZjC9r7AiZGB8zL4nr",
  "key22": "2w7yeJhsH3vfkfxx1smXmtyTpKtAU1dkxeQ5e2qCnHKajopQFbQpbKCNjyDjAnh8egCCfZHnespczvjEfz6EKBr9",
  "key23": "4kVmteWDr2ZmeuNkKNggRzzQZsxZpX7pMKyQFjhCtxB7CSsnbMLCmd2GJB9wvudtmL3c58HanU7SXNUkxjvjrtDu",
  "key24": "3LybrvFErv8RsvqqYnyER2E5R8s1g4XnevnSRr5tv8TEuPja6mgijkxLQ1nYmG4NRix2ULRnr9ZEdUnhMg8eT2mz",
  "key25": "3SnqNJU4HcRaxX7cfyA5BrbXhFyyMA4BE7CXta8Xn2XF1s1w3Qg7WpDZrbSXpLKMbDLV5iESwvL7DYyxvS1uqc1H",
  "key26": "5rxrXhwH4zRiW5vMjDMVXC3Vmuhu9A11fiVJMqGDpq8m1KKaQjLS5P1U3oJf3HYAP1VdUFhzN1BuQU5HSqrdEyg6",
  "key27": "3UrSfBys1YBQKrR3aAa3wdDqfBppfZEyV8A6hvYVSKJQtaX9TV8eMUNSUgBfFHoqGygViq8zaiRr9mkxcS3hS64j",
  "key28": "5Mf1aBuH5FPvpTCzRrtaruVWG96KsHLKiPNaXeTh8PTi7FPY9H647cuMpy6j85Z5xJ2imvAD4emioicqXGeRDHwc",
  "key29": "4QKMhWM3ozJcvsMN8t5uWhLiLJ3gVwqcXWFtpJXHJK7t28s9UR3zt6FZT8jbxbvux1fcZc56HoHDohPm5KYcvVy",
  "key30": "5arwTvFrf6Um1fgMtwahLmZgH4JeCQ8bNaSyLnYNKTpDyviphwgbPj3t3E68Tn6UrkTmwAisxFqP3zVcTV1W3XFy",
  "key31": "3X8YwBriFRcSdciGoqJN4BF9K4i6yySbRESkf1tkq699vkStR1RNQzov8txRWMedjziwbkgHpTrsRmqFGbKBABSy",
  "key32": "5cmgjpJH18frrw4zQJr9xtSZ73KTnQuZ9m9X1A77nfCwZ2KU2fGNfaRrXimHfdXmpuicCsMXgHWCG4GRQPnDrz6t",
  "key33": "5UtmqYWJNhkaJsRmLSrnBXQar1ePUt75VV7fiAkUTF67HQVAwWFz2cJLKtfLC5hSa64weq8bDJVxwAwuGkL7pStN"
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
