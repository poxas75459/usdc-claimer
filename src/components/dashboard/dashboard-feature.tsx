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
    "2Y1ZwdvgXH2Vc2oVDFnGy23wUDyMxqGANJs1ax8tyztS83ufKmWxVV71FosFGttRH7F1JHr1c31iYFGMWb7KcTGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y4XXg4zHnWWQNwzPu5uWpb2KqFm3h9Rnp8tZmgLmdZgD6JGi5PFh1bFngHa6ZsREr1xTjUcxYyPaDeux7FHuQRH",
  "key1": "2KfUZNGwBf6Wtfavy8gwpgfPmsZowUMRBGswbhsYS175FL6gUXEQf3KNctHYcg7R4kExuMYkCsitzpGKdKYjAgdz",
  "key2": "5iVAS4i4pd91zHneUWCDqaeW3iB8KFnfFqyK85ybwkZiPoursmMt3HZMsGKj8HNKxTHybNqtBwborxjaPoTdD8rc",
  "key3": "5KBg44VUm17Mcj6Tjc3xtU5pC5h9iNbErXBXGqkyjcAYeiUMBxFuyzjY7u2MBrjEbGp6oQAbdiQmLDEjBCAQqcCN",
  "key4": "2ERSY3WjVJYtgyzoZjFFF3jvACaJDtkDNMCkun9mLTtcrwKLDaAKkD1Zf7LgQH3y2y6x5wwreTRBHjRKVGVw6qNq",
  "key5": "rYVzQBwtYUApTQbFiMrqsEjNa5ztd5e1Q3aQWXNR9KFsYhjwnNwMFb7djNrkAGVTCzoqGn1hnR6ZLEUsJPhiqKa",
  "key6": "2Pcyi5XoMPHE9hwsw93dfCHNbTWmDL6BHgFQWUaUakUYqtwyg7Xm8XsDzjb82YJpBT2GLQ9hJmFo1Zjcyi6aW6Ho",
  "key7": "45apZYNsCRAsu8X1YzWSrzNZ54LSsuzsAghfMvfQCzc8XUWQsyUo9B87pef9RFbC39AoKkQ348kgGfnRJgtAiHhq",
  "key8": "45TJzeVNF6Fo7s4QvLcu3Z3FSHdk6RxzuZDSi2bhrLKE8KF9zwYbfhFLdCSz3ojouSWSfRumPaEwo7HXbWbgUdYt",
  "key9": "5TSmZbZmEwjyfkJhsQvFEkyTknqQCamunaX2bXKVu5fY8BDNHZ1BFoqhYQnA2uXDKeir4o49HNN3tTp5Dmwc1juF",
  "key10": "5m68BQRGGururQYCo5FJ1f6unpd3CjorfAApqUYWaRHUg4fNZLXFBcWoEbbiJ3Y2eZWCib2vj4uhpXFbmaV6Xh2U",
  "key11": "3py7SbBRJYvhPZzvWZ2aL3hvK32yBTHsn2Kb6BqjJ8idgshCqTHXzzZ13bMCJ2D3PwLv2e71dvR59AWwULZ58TSK",
  "key12": "24HsMWfsXHFDXZBzxeVqqHa2nnY8odiatmNXvLc2sMAuedKJbWqeG54HcUcAXQZVuXy8Jih7H1Z3T5nBCyqMXED4",
  "key13": "676MrQA39P7kvh9vpZmj5ssub5UHshGfN17qHHfgQ9erKapjQw3Yv7Eds3f3DKetxNpzQeEqYjEU4udmndRxrGKc",
  "key14": "3989YWZ7ZLYGmkqV2VPiGCfTvgpa42tj2RKYPGLtTXVJA42aXvNySveRLwWorpYrYrSrRNeQS9XjBJ4yj6xK25cA",
  "key15": "2h2yqfphG2DtRKvoUKp6ddt3KoXRvWsiauLV9BAeLkXVXB7gpJCVtvF4oPyDinmCUL2Vt7Hp9mx7ez2GqccEbxsT",
  "key16": "5qZp3rHCSvR1EyWshv5p8qS6sGxc2rtp6yuHhvnRMkAyMSfuuBSBSmWDCXqun83MUKDb56h4NNBzVuZuJiPvqgFQ",
  "key17": "2YKLkDfG2vGERYTLtyCqKHZDXNGDi4ayn7DVeWjw2DeCkA6XRbEKBjTTXBBkD4LbmeeoMzrcZ6QS7m3GXmMxmoW2",
  "key18": "4DaduZUffuwKtJx8CeZ5Ph52FbkRFPmEUMDZs4doHiUdci4EC9sB4Bvo3yAQHowkEsEMaTDKXoWkZd74zEpWMy5V",
  "key19": "pjitVFtaCRi3HRGWwsycrYE1XET2kG7ahpH5saiX41WCSMGLCC9FQ1YeNLdTxthkbjn8xaKJGgs4fBYKf9m5Uba",
  "key20": "62fGh227tq3kcW7nCrPHQBpFSJFHsFtHPGrVZVWLCbgaRfV2WqLTLC5c5yZg1nLvVpks9xoBVG4Zt1sWstYAF7WP",
  "key21": "5W8J1odV5zzjb91UVWSduWXfU2y4L9HDXXS19GwRyFoyGYfQ18TWU8cJkJsnnztxg7PvfqwmWYbpMD9NTSvY87HF",
  "key22": "5fYirf56eS1XQdZ1ygoXK73Ckhouv9tdpwdTT9MMZ1syktkw3kji6qHQ1DNy7UwkAkZVtL7ipKHE8HHYrYVSJe5m",
  "key23": "2AWGsCVLZzqvjMUBdxcTrCEsWcUmGuFEJb4xReWzWBoSxR123yhAs9w3FY6Dspa8EMbHtq5fWiKmHHLbLTVxThMS",
  "key24": "3H1DbjDXWKu8eLuFphnobu57raZreAKgSBzpK64dDJ3PgKDWwhL9UKdCBHx8oJLcwipAkcXYTP8s2eTKEj6bmBdq",
  "key25": "5ATSb6tJSn8F5cKDFX1zaWDNak9ncuaz5dd3vj7sJ3eiRUav1S8Qp35reRDWGz6Ut1og4rCg4JtTVx29iQNEEFfh",
  "key26": "3iAZSq5Pue4AcXBQPhMgap3TUeHveYzGQibmL7wGJfChAsydZePRZfQ2iedRuEo9EkbEFYaSKGQbbLhFdUtoSMK7"
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
