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
    "BHqfEmSKHEKx1uycx3Zmx44JYJ8oXiXBk6gGnaXhzmYBqaFFXEvAjngmX5WA2xYfnaYRJSw6mzcdrUX4PdMD1p1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36UYWbY4NQafcKS6rL4twpSNbxHnRZFiFciBjbYH9YMwDczt7AepSuNSvn34mz9i9KXWxqzULqNRWRgvaue7nsxa",
  "key1": "L948XNLupaYLPCQ21DcE4CRGKmyUdgocG9nxgfqVtVyWk6znaqTcBxDYWMh2YQvWvUoj1bJAB41oZhpiAT3ZyPw",
  "key2": "MEP6yzXEXjfEsHK14rqS1jdexMu4AAhaADguZ5ao7BtYZ9eteY7L468qirC8Z6rAG9RUTR9nPEsJKNr3hZV6DXs",
  "key3": "45uQmiFHNZXK5fACmuGjXyZ4sW2hjWXj6mxGDjndMRiyEKPhnR3BtohC6vMZS58XA9gGTLn32KBtYNXngrCbHmZV",
  "key4": "4EFzraiFzWhDxXY3H9YMCXbhVk7WwBeo7RfwZbDsWWizN8HqcjRhhDNBsdAe27Xt7NJfeck4rMmqm3f4LeGQRtu2",
  "key5": "2LdMAo6pXp31VhebvzHGU7xKKVGxzVMPiSQ7KZjfJCJhoCLkAoyzdBzVq56xngUCLTEaAJUzinp2YyXYKmdhd5hc",
  "key6": "2u3ftLhnXXfciqjh3bHXMXmZiPzMvGMGQv4f4XpuCHtwht9mpQsdz6KebTncUYX18nfMHi37gzoeGRDvRjxKoLeU",
  "key7": "3MBh9KYNSPD2PuJ4wMJCkyKUAYVrZYhiidz6bSCuxFf19TLy37RftQmduKWLj2HrRMakqM2iCKCsrsPjxjN9vn8X",
  "key8": "4YGN6yifQoN6VxWg3KF3sSUWxwZsQUjpfqrj2Fh8iyrMpvAoAyufRGfbD5WBWweBBhYWikpKwWbGh3tmxBynW5Me",
  "key9": "4c7TStzMwHHo4dszgTiDLgC2rui3MXRnc2vZWpPkE2tDrKRjQKa4WdEzMQxTVVZbefhRUaVRdhKAHSbsKeoUk9Hp",
  "key10": "5Hg6EemqF5r7KnDQAHipvh9SAdVaaVuWnfuFqVLr8jR3eXrwXmYBWtL5bG1W6YMUiqpgu17SQqDrc9haS7eh9nbX",
  "key11": "4ZrtW3jARUU7rACDKm4VBWxuCkLarLCJQosRM14T1bhKY243aJnQyUskc43B8TP34LdAjtXVeKumAru2RzYsDk7p",
  "key12": "4Hoq7zpKKQe5gdX6q8Zh6SxAWqZULXjfATSDJLc1P4y3sZuZxNZo5X83a9pNPPUnWTwzhvyhsuF1tPGYS3Vx33mk",
  "key13": "2fnyawPmHka6UYTZiVrVqEPXmVcGqAn1XXCPKFMXBd4Brr66U139pv8VtCk4J3xZH8n6xGnQh8b6vuaj1umWZxJq",
  "key14": "3ax9tzpP2Rs2qtYPEFD37oDxVuPoCG4sSbssCxKJPgQaVJ5JVRBLBmpVB5JJX62ukzAS1TUEDoQBnVHU3yEtyMsc",
  "key15": "GjqW8FNfj5d4vd6EoUL1HqVUngUXLkJmDydLTq4mN1EEFrkLiWqNovS97aHZRPJ7kFs4yRy682DgYS1DqY9KR3f",
  "key16": "66obkwyue1sXgQeXSMPyK1fFVggqfD8ouNGDwbrW9HKEdCrzr2WPjH7JLyqF3ER13hs3BW6SZF8u1CTPWaNLiwMW",
  "key17": "4os2tikGqBoZp7Wp3b2uKD4HjqfsMufN4LZrr3vAqRxwbzGDYfFgtUM95HHhqAFfLB6SPpRuTVBnw8YH7pjB4ka",
  "key18": "34FZnQJN8VZCdQSrSk96w1j3qzk9uTucMPSvFu4pYiWPiUPGNTid8S1jmZ4KEfKB7qymZmfTfzu7kenXFhRE7K4B",
  "key19": "22JCYZo22GnbFMunSdtP2hwCaShz3ptESuP2GbJkCEHFQMKNup66uPFoaJUSjYTZULAt7xqqKxGerKKXStXEshVn",
  "key20": "2gWNsa4cKhfmGa8QjhHpqCXFqtMdypjGzYDkbveD8A5iJrFN9rQpekPqNiGVdLkZwHPk5VmDvXuMuJzS4fDU7gwQ",
  "key21": "5QCL8u6xZD8pqTQAf7iKxVjL5V9gaMLmTizYnzqmNQPxxhMTq5AdQRXLRyvok11pgZG7EsLEPqhYwnV9AaXKmEWA",
  "key22": "qG28cHofScozamghKsHQQbFBRNqSumukaDcfQ2DzauL9UwFUZN56P17fmtjrZP3VL92CcEHj5JnAo17SEdsaQpv",
  "key23": "3ymm4AbV9U7oRUVeuoQBWbBtwgdVWC9GFtaW8Rr5RPphmaBYemJ9YLpWvSKqausybT5cT9R6YmJSZNf54siZ3JzG",
  "key24": "3rPHMeycf8sF8JfpJKVnX3fovoqkgjfxuoP7yzZfaohnwRL77soGEReUTitYcyXoq7sydjHhAFTimuhzsHUuyr89",
  "key25": "uGy7ekT8qdRi5BDr88XmfkTNPZPw9FsvkiMTNCdTd9uJnhz6Ebg5sAgt4hT4qPH28sbBV9NMBbpskcKvjPaPDrQ",
  "key26": "4hBzJSR1pm8kVmeVcM4F1caf2yb4DAQ4jEwtKJTx2UFb5pr8tHw1ymZg11usTSqfpiV2UgbZGQrtTTpdw1CH3YxC",
  "key27": "42UieRqryPaMT1BRiBwFnYTSC8uz48tNXXTawpFEUiwq1FQjBshSfVHoHwB3y7hjPvgfBDrhvCU3rmMYKDvt3pxW",
  "key28": "4Pcr7ek9JnnxYFJCJdUNcaLBK5MsMBrByYrLWYHz83XPiFCDrs1YaTxXuXCnoqSaUziBXm65ebLnAkkdcPQgrk5e",
  "key29": "5DkqnAMRxDsf9b2DuY5E8doSYD6wr3ipe7D4tBjiBLXFQgWsthNKs3BpUwBtRkSmK89w548Kw6BUg55V7NdyUzFF",
  "key30": "UgGLWWk5smfm8qu2XtK8P49jRVcMiyncsVAmMTsiF4H6fsvaUbnuUEsuVWTQgLRHauNsDXTVY1nfMw4SFPnjWzC",
  "key31": "5KgcTx7SvTwdddic7jQ4RfgFo8XrhD2V7hrHp8t3rt8sVGmG1hpoVLE4EoJFskYgatuSoEdRcvN5zQ5G3oMU12BY",
  "key32": "2bP9FowwsauZpReExoYHu6w5CeDk7YLGhWYTsJD63m8HEKaycqbRi3Hosz5RrunQbm6zzCkbpdnDPTsdHk2j9jnD"
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
