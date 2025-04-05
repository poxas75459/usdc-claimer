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
    "5ZEbi7SMPeLkbzYeMuBWZnuUVUmde6NhoGriMJfNjivp3vR7aEy9caBqvbzuLihcyQFcvVLrf1tw8zd4RVrhADiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "494PfPKpojUvTWiGnUKoFx84Hrh9UaCti2i158hqPBZHyMcjrmWGDRuYKgpUjS53XtFYL3oiZBXoTXUYbW7mdwjd",
  "key1": "5QbxjzuShoAWh92TBdU8Z6PQxsfvuev4WZhnPHQuMcAf5HSPupd8ai5H8TJEAfEPb7mzSUpWd4FXjt6mvWRdX7RY",
  "key2": "3quKS5cv9DtyeMMbPz2T5ncZHkwfQExqTzsJgXXmh3ujnJqV1jadaEvrKooH8fBgd3VYGMiuP9ess7oDp1TXER9m",
  "key3": "cdsDWvm4NvLevNPgeCfa65aUVnRMxfnkTBgcKXdFNaHhef39vp4pjdwG5jrjWwWpQeqTord8NoSBowpEo41aFRm",
  "key4": "L58NbxyVX8cd6koxBYvzRh2RasMpAB8feJAPH7bVn24ZsqRbb3CDV4KmNq89aDK51jn3AyZ93owzwpN3H2chPP7",
  "key5": "sbLFuCt9xpHt1Cq6MmFduZzsbVs6tWoda8JHZudo9cekUQMishWHdpD1xXW9yspue3mWE6oHaMtNu1L2oARCf1g",
  "key6": "3nB7LzTtoxjPo92pwoydPoqTiK1GDpTmT72nywEwwSqoCU33jrZoJpp4KHU5UwmQ4VBfUy2cQWfAG7cSfcom6ujk",
  "key7": "2T45qGJ8EwVDcqqAzNhLbTqU3kdU5SZqRdJ2Whz3wNHH8EyapezL6WTLyHkJD2iFGpNuZqYm6rtvFYMaREsuhui4",
  "key8": "3CHFKJ4MoFugHFcT6gcqT9CEzSCCEr3vXWCUPWM5uK6fv3AEytEDTBCA51QtVHheXAcbqxWcB8nVtMpsDcB385uD",
  "key9": "4ayxZHkcY3rWdj9j9zneiBBsstaa3csXpTsJJQGjKrXndBmSKCbz4fGijJ35DrJYM6dAzhn7AbqHA6LMNRGA5myV",
  "key10": "3BMvx5huoDimxDYpdueZT8BBaCu2Bge2CZ382KHBuNeFNGHdbrGYH1fn8umZ4MHE5KzLqzpw1KPM5ppdVnQD2MTj",
  "key11": "3YgRAyHEjC3dNmkrA853VcS7tNACBXq15PsoQediduXQ9SUEZA6jk86Q3hZBCkEnQE8xuNp2sQFiGPX1MV2RD7Ae",
  "key12": "4ccgCALHEc1pbqisLZA4dufcrthtVkRvtdD8huM3Zvrt3ysmSTrqBRACfcz9tfWpu9g5CokzFAg8ahcJiVDrnT4p",
  "key13": "5W5QWrgGoBBKHwwor8v3b9acjQchc8MGB8hLPLKHfKE8j2WDaURGYPbcN7LyEaMkrBpm753RU9KhPJqTxekVqZTa",
  "key14": "3LydkFGQnvgtNAcKMgNKPPu9AYacuyoooF3kVPpHh75SzncAKYN69mWpvSes9ctNjBQTWzKGm94keV5CTGjF2nh8",
  "key15": "4DKhLzYB3piUALYAUykjuxJcfrAWa9WTeoZTcQTSjPzQKUNJkA5UGArv6kytUvgygiTSpA6D2pkM4suLR24T755x",
  "key16": "4mafp8rprpTymt7sRK8QRNh1U5vfFsRK2qhxH2BLHNqp3MrpL6HKhiZoRB74vZATtq1SR2yPFTHZZh1vsLKx3PY8",
  "key17": "3Hon2zSJLbe7DBWjXyxANEd1oSFAPzMVVq8XKBmuGrxqqSsCaXaTDpovkLhCXAfxdiyCwBNf67DMU4koBR2Mg3Vo",
  "key18": "3HVEawRyDuxKLTwzKsyzM3vMdgWs8AiuhEiWW26GCGCKPxiHA4wSfJZpUbykvojs4TjvBFAGCpS3KJGwo7PLUk2U",
  "key19": "3bx99SpuuZNjor3JcCeCiS8tWGr9dub33ALsNLcg14mxjSqP2x9nvp67BvhZSnJfxEwjGQrbKz7sGho7yfGD5JAG",
  "key20": "5B8abikCWK6JdPpSMsgQYduKCP6sHi1HNw57CJKUvZ1uZKo31K4wKrWr8SqqNzqtU37QbRMA6udAF8tWwc57hT42",
  "key21": "39qZ3K2fMvbWqW9RwNuiCppkobcnYnNVBBSQyy4pc9zYfRD5udiHyN8va1ECoJFBf4u8BkPqEkxZMYswzyT8CNMs",
  "key22": "3yZGb5VtejXmRdgks8gcooned9iprLxidKGNB6npffKc8gN6fN4syLCWsSxizAtczTQnynFu6k56n3wApz2oRRtS",
  "key23": "5L6Y2VptyejZYB6Cdu6uoEqDTrbUFqwNxjWGZ4j3D3mYrcoDXVgMGMcp94siNLqi61PmsKTdhVSfkTuXXbPorbDj",
  "key24": "2yjnqn22yPBeeymgL3keLN6AL43HTvBHHDZUrdJQNG6m5xUdgnRoAVfs3krYMuzCr1sNidcN39Si34qgwVeQjsJ9",
  "key25": "2pCqoseGv3zppTASVgfWPQFqVKtuavz6TusFrL7MRk4qdauGUBeDctmpMGnYL8TrCi4b7TiYnk7SDd1mXV6CFukh",
  "key26": "2GNKP2gLUR3TK2gzXP3ifTqTSPvN6scd9omipuvcetJ5e9jVWdFFLJhTA2FDLRwT2Pwk8kEAqdUB59HFqHMipVKm",
  "key27": "ME54sWbp4p1kcrKS9N8HaxJjWK9dszLgFHvyYQvoehgWaubshBbdQjxPuEZFFtg9zydfmqF1RsPQMKybA4YWxku"
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
