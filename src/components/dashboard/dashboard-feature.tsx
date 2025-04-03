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
    "5xY9FRdz2uw2eDfMjBLppjJSdnEko4Mxa456DEcCX547efjgfVKaJjms6HoPyAoGrYFJFJQx93RwitLLD5wmGXjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mRq5qAP28eNRP2CvELxnEqyf7ZDvnWNeTLGNFiCgVLczBvynGkFEGsyJacHbDzNUFmsr6J6a6fsBvwZif3SQnom",
  "key1": "4ETsfZzLZ8XseFqeDAA2KAfMKnRsUu4741x6CtPmsMUQ6bncmhummgivN9QbLAgsV6ApCeyc4rL4mUNPhScqerdk",
  "key2": "2qMSkPv8q9ohkhirxy7ezztBm9MBCw9CDrahECKNt446LSacU5ND9Ve4ah2t7pnnakZxPb74ide2mJftsVoo1oQk",
  "key3": "BmVBPdqZg8JNY59V8X8As7SYW5GNSSz2jjoo1QwGFC3wHGYqLPsVUrNtb57nkzBD2ifjUZW2AuEQ6quXAjDMa8f",
  "key4": "4EzyMUjDwDL8fGwTaptNvUcCbzbYSyw4DnZhCUyFNsoJUbYqS73YfZhNDx8fvYNjiQp63SmNcXSTpa4qcxdQeKtL",
  "key5": "2Xv99HSrnXhLgZuuoPVbtckFXYpYfA3nHfnnSbW3ZsZYoQYLHqLazhrsrXUk9MiTQhsWGFTnYwb5nHgV6T4oJFvm",
  "key6": "pTyhguyPZAauJS2Ckz87c8Rk4vPgkF9o3ShUD8iwHGotiyDZwBtTWf4ksbYDSu8DWwmFHTddA8L5nVxnCB87whq",
  "key7": "3rZdLYjq2qWGs2cBqc3KY14JucGt7h3BfebFDmGN4bnKJ13dyiUR5GcwdBdwwDPZ5LZqfN7Ef7YPchwMLPNPVujS",
  "key8": "2KkXhy6pHtQ5smGeZPnVgfbmzcG3a5m6eNJWpvBEJXyLAtxZSh6oPjuEtL4PDpmD2LPSksPE7vJMZv2r8dhdB1tQ",
  "key9": "5y1dVi9u8RFyd3HwWbevb15ka2bYpzZWojrsQbqzLjbFiCY4Rn8W2JNpnQCDtEjLKtYvqWkUiTpBGQhuwS2vcnm9",
  "key10": "4CXUawrxz5fmPBp5ECgDLUziRGQCKcUiuZvnWwF8kQE8q4eoqgkALu4YDmcWR4b2Yh2rGeh6krnDeRTVXMZRBmM",
  "key11": "5vyrug4d99ixicThmcjGbnjEBKGYyAuiTkHLkjrcUpdRtaUYWca94JGwqZ1asAb5zinoaqKhjdqjpbJ9Sm1pQCmi",
  "key12": "26hSo4sMUsdEabMtd9exmM7yPWzYv7m3gtsGM26NY3pzP1vREqtFC9NPr9GtY2ZtaDtW24MGn5iTENU3Q2KzVTVw",
  "key13": "4dbjaDC1bmgW2mJ9gW95vRf4M3iKTYgNiFfjuR9m7PbkYFvWTxyYZmegLdV71AvV7ZzAHWmyvNJHpAqvpqBKKyp2",
  "key14": "5gmJMXU547PysRnWE1cDbjqhH3aqcqvL6JEM6ET5BoBoxDitqvU9tG466sKTeUhDm9JuXdGVBqCizL2DkYHqhXbK",
  "key15": "3V3fzrHqACgiLmFBLvtJ7D2313mPBYCuDSmiNyeuYTx6GK21GBuNh2bVZF4gHkDWuYFpKnEZCArY9T9qDimFiceo",
  "key16": "4vDpbtDF3To6K3ZKGan5p1SRQdKN4BrEt2iCFYYidFvzXKJJqq8ZMyuoua2NvGeQMRoJUcQxJ626LYZkpA2zrj3",
  "key17": "t3QhcBt9BnQY33zMX4534B8pn3iA7Loufbx1dNfywWyRugoHxSUA6xmhteNPPbRXuz1c2tkjZiKmfKwUUmKQZwS",
  "key18": "3x7wjYNRGe5SswjX3FuqehgjsmcAKwmDQVGTMBVdnA8SxnScr8xJEUZodN6ftKpnaiKupvrSA64SmYpY6KNuGiJo",
  "key19": "24xqHkPeUkAzuv4TTqpiRNivaDmEFWAx9kxWYiXw4eSr6kGgNbUZZDiXRp7jwUr8R5Zzyn3DLq3JTFZkML9XpcAr",
  "key20": "2srE7ThsYae1yxGH1i1ZrtcAMgLGZqD2rLn5c83dktMTMUHLKoi8Njj4UB72Y9r3BkykMz2rmjWx3uDGJzZ8656Y",
  "key21": "4VpzGMJfSjaFSnWFYpDPexmcfAaP1LZbfAmVnjau92xh37mFNvvUf6eTGXykLGng7E4qb8kb3U6jPFz8wkJxJEnu",
  "key22": "2uJvjgsLQFGfAN3Wwo1FQ5dYwhAq9Ueftjo5pJHFHEVDrUMANaiiygrH4Ddnvv2dgr7xuKmaWpU12VCSZpDof3oC",
  "key23": "2sTB4aru7TDjQMUekKYQBfRaqEF5bV5qn7bwNkbyPx8ChUcy4VoRn3n9rPWCQj2N4cq1BfPhLXK5khtppwDZLQ2p",
  "key24": "51hcFbVHEzpyUHKo642sxVJ4ZMN5kiDUSh7xhuX3cERKfGxLaAKSQLEsRiVMwJ27tfWDKY2roxkt6ccdf9M5o5KR",
  "key25": "5hr4yQNiixLi8WShZhcUE7k3oJhyV18ycVKjnnnhszSaHWXbGgXjQCtE6tPtfN8hd8kjYj1SCE4AmxPytj1qywGN",
  "key26": "5UTFBmu7o9WrLPyRj1pQ41JyXArNMvLopfTrUjZrcWEKRu328JDEZMzuuBq5kLvpVLgp7gnvjAScZjzFMiJM6eKb",
  "key27": "65tDM2cGXTQ2PCBHxnwyGBY3uzSsEYKXzk91FLgtcd63rL2M1Q4q2GYcTufjhb276fqj1taE3ScNT9yh4ksVHZRs",
  "key28": "4RjdGWureWEmQ8hr3LvAB6B6zY8kyKkUDfrG14H5Zt1eJf2pJwjvB49hjJ2XGCwYhUFeoS81f1vb5xVfo9VdqKS4",
  "key29": "3QnP3qC4XC1Cj37KESvsT9eYkrytKUPshR7NyMKAGVYXk6ELkmZQkB9jwpg78P7tPw2nxKeTHhwyguhtYg2oShzg",
  "key30": "NaNu3meBvnA3K9mNLu9ABfTVUDkyANfXTYFT6XnxzRDTdPAd57gMXrtvZzkURn5DEq5WCKG3oTZssyYNojEcKZc",
  "key31": "2FUYECmMEsmbwgmLPidttkZDqFXcwwifuopwVrNzBn7w1nw8h7N4hVbnoaxm3HJ8g9fiTYoBqYc3k93sWSUTNr2e",
  "key32": "5KFUBjhLsCN6btRuE8an2ZDHTcJJnRU3cb7H75GRdNqHDXEy2SA1rJ9T2VN62yKBmEXNAdSiMNPLniKpTboDztdn"
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
