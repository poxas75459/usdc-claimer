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
    "LB5j5ePDGkswsXTFiPoas9uL5b4kFVBjHSnFCjGEybxafVrvNsAgqxMki7tbjdjrULWFF5TWGe3wHWXo7w5nnDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2opWcgv4AJYmb9PzXqPrY7WDSSHWCZBePFijxnT6iVvZ3gnq5RPos8VJbbWVNiJyhkEJxM63Xe35eAXQctvuLCuA",
  "key1": "4AD8iYKPpRyjw7SVZSSeuZzsufKmbXvfAhN3WFRMTPfUhB1m6tAshCWkCQV3xnwtg9JhUFmGeY1NcfBGue2p4faU",
  "key2": "pHyJ5fttzNwzYTryHPTYj6T835JqZzS4AQs25re9pc2j5S8GEk75aY7xVRdu7cNUiWH6ZpRiDX7hEoY4XxNqgYt",
  "key3": "3R5VFSqhUxsbW1YK2YSQuWX24WAxz2jFRphaeQ9evtMPPjyW2mcpwsxEdgpugxtusyRvXL9jt7u6WR62bjD9Bc8v",
  "key4": "2ekvF1MoTJdrgFnomku1TWzFTk9qbZjuSwM3UYngXXFRMJRWCmbSqygQN3YKskshYap2R5D64zhFp3T3fhdvEPKN",
  "key5": "2b1nD6hweDr6VKNPDM5AaCJTbNWURaW8sucC26omuG3sp3vJ6ThaX3Sfrhqo1H5uPFqT8rCUVTwYLAYCJQosytaf",
  "key6": "4ebFNV1PAsShJvLUWwryJto1BcwzyGzwti8FDMQdmV5Uu7Ke5GgKqB4XbRcByNLxDq6KLpoFMYPXsByqY9Jq69L3",
  "key7": "2iXKx3bp6Po4zJXrkRzXBUeqTr1HL9Er3G2CtRodh2u87trjatkBcgGtr31PqiF1e9MGQzvzEEaHpgnwT911Efdm",
  "key8": "4srdQ2KPzqUcVbQZrxhrdNMJMvsPtr2pmQ9bgwpjcX8fJ88b6vQBh2Uchtv4NGaZEC2oeY4QCzdQg1iMs4kbYgGf",
  "key9": "rwXWBVuqburMwFdUqNdJxDU8CNyX78rEMtccUXbmHUEzg5ib7ZRAXSnALEvVsiiLD6au4yj6vxfe9xzX9zC6xWy",
  "key10": "gpEEvP4ZceTqVxRcwVagBb3psc7AJJNWyMnWuRRcqnbsji4RRrZQQ7pqqAswX2Nz41bvPpADw8sjkznkeyKWtoN",
  "key11": "5sdMqBwwJwVz6pwJ8mcuzSB1EADYQTtxSJtsFEEsajzndrvqW7iVvAFVo9W3BirQA3THj3Pf5SuyykZ3QhUwiAu2",
  "key12": "4gHSFRVACJMq7F23jvxyoZuVygYfEa4LorUFTBDfYKkM9GhHNRmiVEw29pJgJ7d7sw44qZKPhTMxGaUse5UNF8o4",
  "key13": "45U9d5HwKHgLWcUWXdeHhqSe6nMmdL7bEovK1JWtMQT1BZqJAwMaiwAq78bDwiiK2wTHcBehVc8WcdRpGFHxetJD",
  "key14": "5TVBfkosmrTF62CSuGdLSSEDzbJovuADxDmEYT9r2fi9HvzGncQ7Aqeq1pEBB4Zs9KjGMpXzH7CFMbzAJMJdN7Ai",
  "key15": "3dmWxddjAe37gAdn3r2Yn2exanu5HuoQAZjSFbC9CmqMYg1nxJAtqQPvhCyp9pEnsTy81rdGze9NxcddtBRnz2vc",
  "key16": "58ahJyJ7CxfReZuRTTbva3n4PqfYHbHjxoo7ykGEzvCS3CrapAJJRsFZHSkdEgUayy6vMPS6jqF37ob15f9n5GMb",
  "key17": "3Cqt9sBxJHqQH7e5HdeeMWSEqumGDD1nLfY2gBDbu2HPHik3Dk3Nqr5aFQGT6BXeigiMevcN9rg1SbhwQB8U2JBB",
  "key18": "2GybZowg1pMZLbLnExxmR7C5tUq3mu1z7TicZprevoGkr1Dt9cvWdPqkcPyY6Ep4nSgj7Yx7ayK3xgA9qx5ojKDp",
  "key19": "4sCaRjgNAaRfBjDuvRoAMD4krEiriuracy2CyaCYUjVardu1GjB6niFn7KiJtMJkDuPVGPDJT559SeBVW4D8Eq2g",
  "key20": "5mHnuTH7PUVgWUQgeTuqVe8MuuC4K5m9zEeJkXT58kzHuAStxVBSATzSYvYqHRnvBH8nK65Lp43sGaGKLNywFd51",
  "key21": "5Q9dJBXHDJ9A1AreNA32p54VKmuJoruzYoiHMK318fvwUqM3BcV7hRb2G5S1uFx43gaiRTZG7TJiQ4mYGFrE4otP",
  "key22": "1257VXVEFQfkocQbjmzpBbC5UtdDcXoe3L7NUNkfsjagVpSVupphwbWWcqzJh2U9LJ9y9ii1VQCvNZU7gnNdVGbQ",
  "key23": "5FbtM27qbQBmwAy97EQnJxJahgQRaEEpcgcNJRVZ6Mu9xZA5Vpb3hEebGdbrXSCCeDeUg2WBoLLimVgokFpEmZNB",
  "key24": "S6inrPvypKVWSevK8of3aLxxJokpqs4et59rV2oGiPdRL4h1TWWNAEJbRXFVQRCNRTRUDsBCT9K9LMnsi9F5BjR",
  "key25": "2mFpDQfKV5hAqvf8RwGyWJRMKWRQ2to9jhRhMkJdgCVyc7V5gr6PBqnmDWbPvVxoPM3NocJLHCPonRhDCTR8hBWY",
  "key26": "5hrm5AcPiPCn6h1m1axT23Q1GwGwkQWoPqEiu7dPzutTkBp4TyZi1omxnM4nWBVqcw6Gd2pqKY9Y3QTpwnc5Xzps",
  "key27": "23hB62dfT6m8cYJq3KwqDBMHGzDNLN6kkpqtyj99FKpYurRnJri8SQ8jrue7AjUw976evTHodhhqBPPMe7WaohwC",
  "key28": "23kR4L4qKKa3usM3zw83DtfV7dAR3d45ibGUzKGQHYySFc7Uj7U9jqKsLZc5BGz6AFWAJBAgYaYJVmAnYgBfxAma",
  "key29": "4VpNko83xG21mzkm2d4hCrJNnQXA3CfiaAmcSvCasSyXDfh39ZoXe2UP8oFv4GLeEsj4io1gGtc1ChakB3Lj4oTd"
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
