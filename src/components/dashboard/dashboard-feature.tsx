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
    "5Lv7kBCnbcBXuRzyKbfAofGXfkLKHpBUFsJAyihVrnVDWF3zXrkE9AeZJVHkDd9umBgcj5M6FBb7qXYhMvQFt44a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ebnZ3kYuA5D58MjhQAgJEuS34nmfuGuHkT8TTcbcyadX8RRdz5YaH8ajPvtYX99UbHTrfcTzJafpzVisaWPaNh2",
  "key1": "9eZWaif2v6UXJhdBepVpPMhH31iMwPyjVN7TjoAegEVZzUxrS85KHVFe7V9HTJC7iWDn7eDhTFwMCyz7Q6Dhop6",
  "key2": "5QXfFbRR61ntBQTyj7i2vg5Tf2mfGpog5QrwfjK6Ro7YAAYBBeAGkycniJjnLvFoXkT18pA3uDBTsFpAMMs1DnGa",
  "key3": "4JTdB1R8Sf32rFxYfAnhwFYhb1MMjdjxNkQXKWxRYGQWtDw8oyj5nLT5RHXMxsxtLd8jwYav4KXWRCbGEKiSsRyC",
  "key4": "4vQ4BK7dRtdUD8RjSMwKmuA5fTbtodK3oXyw8wH36rz2cj1nLnEbHcJn8aUxUT9UatiRrvaWcQrXAzpDu4efPoW6",
  "key5": "3SmJH2JZAUgjcWUjEjci8L71jpyn6q9k9dETcsrj18XLj8CHcq6qFAoPRMu8nJNu2uwUJxw7jpLgvWWNTZn912J9",
  "key6": "5wUPzdgsrvtEsv8eNFcJ4TSViL5Kdf8jRCMuezSSemFJNVh7nfzh1jUJXQaysYR7UfzwcE2p4cjt2EcPCz8y8y6p",
  "key7": "3wAzGEjo74ueWyCdoUGdaJ4DSqcD4q1Q2zKYwhVVP9vJoUb591WFGuDeVFkgjMEVvWS6jGB8aW5Sq2wkGc9szZG2",
  "key8": "3hc7HAU6BtJe3vGbz1xze6r3e46kLx5ZoPFRU18H9c4y3WAmCR3PKiWosLoMLmozPKnXxjwtADRrgzNGf7qrMJUt",
  "key9": "5myr6SsdnLVV5Ve1DY9EGHF5GR136fvWYrAmYKRRRo9J7iSgzKQNSh6fZrNuFoKkRJvCSmTjrUpiKz6kBRvcKvfR",
  "key10": "5TgoLSEF8cfyrdL9KXk6221ZS148HvdnnF6wX8hxntgqnZaiFqDr5S3n8irhsTvXCPr76wTJkpTz9DuYNThAFQxt",
  "key11": "4AcxbzuLPnUXKuXKyFbBgG3e5VVe2269ResV4dPQp6fJVk3XvmT4vdDPvuL1H7Pi3gDCn39rCQvpgJwZS7Lyxoy3",
  "key12": "5hw1t7pJpPCy3me17Vcs1qARksNwqwaLtchAVneA3DaNCrjzXVQcs24dokRB8Lm5Xw31VZqaFHUj5rjGez74wF5L",
  "key13": "4XuWerg1oftgFZtAx9FXK6bRhYDcKqPT4igPmhgQkg8Kkj3iaXkhe93qAWq8JQKAG2RmwABXbPsQCrg6KewZpnkX",
  "key14": "26FsA6AJysJ9VYgVpdKCsGJPpoRPBK9wWLRdZXiRQAnkjTcCoJEDvexvVG5mzKQurgkRWKQnsP7s4ZUHuqNGXrMj",
  "key15": "4UB4A7mUZs3LMzvkzF5AUeouf4Hy9NoFq2kEtbmnfnHYubhDcmiV3UrUZpggFSrKsqAx7BK64XgmVHyoPuJGdbQ4",
  "key16": "ykC4MznwCYVsYU2Dm61CgT7oUNbTPVpUa8w1gMTtdQYvFHD9Ac47MvzvrN5MkT9598ua5AFGvaG5gyMMrvwVrr2",
  "key17": "59VoCeAZRBRiFBjGpT84MH6vcfV5ijKe4Rir3TpUY4DSCKdQHoU2y8ftgg1Ji24iJMJBN2Cs9pzspN61sKJTMJxs",
  "key18": "2s7trnEvAGoPLABQS9kdu961WDM44tFHeHVjXJ6Amqtj2AWsK9XdrSjuAJKqMWBXFGdSMZht7No98SG6cm3CTJPT",
  "key19": "3HG58fdAPUj2vKVWuHJfkFwkqVSVxcoAxeP4L3jYDBhNtr75gkBHJN6MgE5c3Ffs4uPibruJYb3gqtDKjrzzm7oB",
  "key20": "Ma3WoDpCh4Kq4snLu3f9s4H8a4tenngTd69Wnzm2KSPumWsvAkruoHNzsYukiLSDufCNK6aRx7qx3xMgqPKdKa1",
  "key21": "5HgRARXbn1hPBDqcUsXDMqbQBWkVDEMMnRShTBewUHQFvgELufDcTzaMEiM2rbXmmUw93SVanVshL27vzgtxg6TH",
  "key22": "3PxFgnsNMUSvVGDGrAJAYNpDjtfA3j3X2ypua1JL3rZJm62bhauzZV6VVhDWBycga2CfUaLPkPeqCEstC4pApT5r",
  "key23": "cv6CYo6uZtji17voESLzs1MgFGntWJPA7nDdM2ptzdWSKcjn53sZgK9KyPM59nPtLyw4PLCebp1uajQeNUhpKPe",
  "key24": "66cpnP6BPEpxMuowo3jtKnMjeDBap75WnRgXmLnf4vpKJURTtXD7aqPesepxLswDPfWgbPPraejcTe8i1enHiSrL",
  "key25": "5dLCMZuLMH8DMkQ1m8Qs14h7hd62fUmBHEAiQ1ZjbjGce3zV7oVh9xqinpjBgR1EcwqqVsUcbbMgaxtWXwajwozw",
  "key26": "4Zt2EdRi4JDuv4VBzvSpKPNsN4ZWyHre8nQNXjQFDT163GthpCrSq1BSUdr8WyATwdrtv2y7nfNscSbAPyWh6RAS",
  "key27": "4uJdPnP3GjZrVopdt2c8ib1NqiU9F43NGGYwxupWFCbi9oGCCtpwvdbYmBJ83zqvVkiTfRmYrFTUGkDLYY8SvNVb",
  "key28": "3TBB3uetPJhhG7jUVgeTLQqXattGsXs6Q7APuThAN2CwQtWJDep3Xc9kE8KNBr28RZ7dvEVJQn6eaVUudgoDUk7b",
  "key29": "4BL4toRs7butkroWiVd4ixvbBH9yZAoeuKEWJYycyy1vHs3VZXJvLQhz3gXo7wST954aEuTNUaPXaj6L583zSazH",
  "key30": "3q58r85RurXfi2aq1Wi3WBHM3cjL7TfaBaSKcbgBjL1gEHtGHt8mynip5bbcRPkFkjmYxx4aTayBRaKxctMBtHwg",
  "key31": "2Y1xSPaCHsZypMM3VYgQbFC57WB94kyAexhxEWff1otPNw8BURVkoC8EeK4xa5YhtYbCNnkEaejgBhoQ9ZTz2DzJ",
  "key32": "3oTbfMUxduKKnwx7Y5Ke3v258r9hoHUrLrzVTYKDo6jQTVj2JNoqFX1UfCbCuGmRU6NsUXH4J3maijouaWN5Dzkx",
  "key33": "5AV21AnosoRdsxx2qDoUBj2zPasHZLfLSbynjunUYU5KYJNG6wns2fPGrfPmsFfe6T8RUeA1XQ94den2VWZPLibn",
  "key34": "nX1eFYC56L4ej5GiX2L8ZHYuZwAZiSbUggH7nma6vVhv1hPKH8i2uNCPUyg5c452N7PTN4v3GpJRf2PsLnN6reF",
  "key35": "3xanTF3wHWmELmhn35Mtvedfb45fdrX5Gn8FpsegqswV4auazr7igHQTrDG9TSsEhGeGvgqdats1Mbe1PHTZYJ9t"
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
