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
    "Jgc2zX9S4Wt4NUB7QWGxmp8zHr64gTpgECe6G9z1ogMMFQuczoCj6fQzeLDovY92zkwQCvNRdnrTXTVQq3rM4s5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hS5zujK9LLC6rkg9v9ygU7j2HBpBHpgjAJ16rhn12MVMWgx1d4vFS3q8evz66fuN4ZUGWEErX7443JCAnYspdm9",
  "key1": "GVD3cdt2SC3nytWcd6KyczaGsftGer9FPCA5yDGUHggaYxC2Xhqxf8mqpUo9481psX7kt11H238JtZsnUdHRHN4",
  "key2": "3GytPguSudPxvUatKTSPMQNQYV7Ddmtj6zg8nkZ8DtTDFTdknnELdTBNY32AgLgvUkvz7rAtLbXToFywatz23LQ4",
  "key3": "487QyGJUHWjGjbN9nA9ne9LejfsKmDqkFe5b49XBsMNMnGpMu6TQQzefyqut4CTzFysnbv6ttzFAw3UpBRXjbtbC",
  "key4": "3aorbnMZs53tvbqUw535VEG94MUgEiUSxpvW2nymynqDNM4ByGfsVZAVFdQ7GpbzYRSrLgUgFoHU9pq2iB8YM9RR",
  "key5": "2eRgMgGc82tkU7GEAcoKV1QSCyT9TcpibTygzdc3N3wAjR83ZMZtsmCNQ39Qf6fCDewyP4ijahQVTb5vdRhb3Npg",
  "key6": "26vNCQAxiLRnWos2gMn2wDGPD7DDHx5MWs7AEfYvX5p3KmBNh9hrCNfy9LxJUGgrJcv6My82pVXwNmvrNtAD8kN5",
  "key7": "5uh2NLRscVJ8KkaPPn3hkK7WZX9d4oqzyhX2U7H2oDHWRriCSY5ypuEirNrrsMsKTwQpnzuF1tDTKFpfdueC1xwk",
  "key8": "5bAyeDD1t68o2pH5XAPGhx7kHQU6A99R9Z1MKi5iA2KMHyRVDU1XsiQXff3bktaqYFADqovqVbPNSUSfrCzvGW1v",
  "key9": "4QahLTjrp5Kz9zxaAexxL8EYYtjiEvYFdjp6vABYHEoMHNMe7FVtAcJxUYeSgeDygGXaLs14wvgGxXbna3akJR62",
  "key10": "4CDdGmuebdT3hZvTBLSpQm7jhyo1pKpDiPyYTrby4RgJvAPyhi3NuJRH6sSvufhmpDSAUCpxu42RuSqmSf7wgxky",
  "key11": "25k8MCRMWtjQz5uydUoDyXqEn2zQzaSJZbEyJbHp2PeGf4M4ACZwJ7TR815GShfP1m7QrwjJTcTYRuEeuRopj9BH",
  "key12": "4H8SGmrxwijUHhrbVXMFfVgq7iGaQxkTvJWd9prv8tEUgpWDW9woCw42AwkvW2BW8i7xciq5LDmzBUPHx3s6gQWx",
  "key13": "2kzja5TEGJVirSWshppbnLbMMuD7DcHh5dffe69pcf8BrsdNg9vcEv1TizATi3KKGH5z5iXFgSHi5nvCqj7Yq6aX",
  "key14": "29siWoCpqBw1Z4YNPsEczfd9KKAwUQrRY22coEpTPSisZCRHVo5N5LVAcDn1B8ijRvyJxERiDmdxbq68Z3Y7mBaE",
  "key15": "4UjH67G7F8JBtjj7bBsEyKr5vTqSjnFTYVBnakpnRoKTJwsA4sZ2LbjBaXqTVbeYD1Wwns1iQQ8yYjVksPXAyCao",
  "key16": "54HKWtH9oZZu3v1erH3cyUkj3oS6pvWDBPc6BKAKXAUi2sRdZFPnkW8RMYYpWwxjEffVooSyECyNxEFptgA4SazL",
  "key17": "38EifMnrw2vRSJSqqGXpXvSwG9rNL8WMNRmxCnpziEMEktgBe44S3MFoamHr4ZuwSC59mScmEdPp2p5d2t5aPg77",
  "key18": "2aHEJnWRKYAv7oxUiyUJdiXL7fcVyAWGXZ41jRsUTkzQwtyii5XTRV6LYrBcMNQwx3jvvoHZsZMUpmCMr4AqPHFz",
  "key19": "3bYcuwanGvV42BHSxMJddR8kXuHyR1ej1F9zTDp95jgxkbbV4AFy1Eq6g5pRPAbdLbG2bzYgV7hrjK7Cra2GoBQP",
  "key20": "4V3FgxThyTmkhwtnVsBWo7FqSax7chgfzGsubqqmkrdB7kTC63NU1HvJDQNqGphwiFeQNQhGTRUxoiW8eejaCAKQ",
  "key21": "2yvwieUHWkP1xrmfCGZ1d9jsYkk661XPQbMyVc3ueKyGDYiwtBHWi5w2DNmTVK3MXXeE4jSCVDwLux18qF3B4Q2Y",
  "key22": "4z73Sr4La788e94tAAQHqKpfyW9dWMhX8mDnEfYMYJieNKV9q1M2Bo981MUCdnEETpNqr2FXLXDxyDmkzYx8Sknm",
  "key23": "2EUjg1YpmXp2YQHab8mmWpf8auc7hTs1GDdhFsQ3kkayrp27RNTBoYvpe7drz7DuaTXx8sUErJ918Nj3QbwzjTfV",
  "key24": "2j1A58HqgtWB4umVjkEiEJXGQQwnToF3a6BkiQkdfSvtqnkZhff47GrDcUCJSugV771yMDNc96qBuFWirLqGryrA",
  "key25": "2CukHE78uYsrmJ4UihNtd6urjt7F2wixoWTuXVg9yyKVGDgeWuohvomjWsBcSP8PBREMsntZKbjRFJt3FyuWFLvN",
  "key26": "2rPMG5N96DU2VGfnEbWf3St9b9GaNYjvALwX9a2TMbxG72aMKMUTjK68pcuxekhED79yWqnu6ff1fALckgKNdkRz",
  "key27": "62tWN25W6iZzmSe6w9YBcNjfSwmLMEew2Hx6TeqNDvN7UuJTDra2CET9rPgCy8WB8WqAmhaKY2HsLyNDTbFJq52o",
  "key28": "2XV3DbDkN97ejypjzPXkNatWrYxFspSGDhRc4oTHMsJYQBEM5SUaQNbpK4nJoDz1hakMRzpahnF7mFuWDd1Dgdzp",
  "key29": "4Ja7h3kU5Th1zYdXTSrqjUQEUNtNZJ2GC5dN6e32MWSAqzUXRhB8TzBVWmjujVuhMd3ogteFaNVbfj5SuJnQpd5W",
  "key30": "3edJAEQB2jNQgQDmQU9mH3B7UPGYZ34bqdUgGU9kVaSiR2FYSfXSdbFDyDrMC9dqzBqLHbcecZgna3vNwQTzXhYV",
  "key31": "3T6SFroLE1axhtXLtfujjN86Jop3d24Gy9NQwjuq2QYwWdq4b46YBoN8KgZEgSa9ych8Dz91juagk8tzKqhRsuCY",
  "key32": "2bLo7egiFrKD5vQgipAdtaFvR9HZuifPAZhqEweAvrZ3ihH2dYuKprP1r2guz6hM3Pv8ANhBtX7hnisG8PnCc42",
  "key33": "3RVPdWe6oABvhdGTFzHDaTdTVQ1frc9WqFXDFmUvvoMxxqCP8UKNeygGtEzhF4dfqtgA1vPbGwcn9TiDT9JFnmb2",
  "key34": "2BZ4zgtjXsjuGh5k99fPcyUwG7WFW2y8R7Z6VtEW4MRpU94phzZqXxVdvrCkHP69cc2pd4kGrWSkjMYXki4KDd49",
  "key35": "2mCPQUfNktT6WHrnNXQjr4Z92RwTEDL6S6wcMu3j74yd2iK4FKDgirPRAYyWBsYALkoiRWe6PamkTHC4vRipkkHs"
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
