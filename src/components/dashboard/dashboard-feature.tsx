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
    "35qfbjq5ap76wjjKZm4M6NS5dmSaQR9gNduCeKKBRZNEL9VbtC1KBUnf9V9zob3fYcuBpGL1bPf2kLdTMp1LaTQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UNCa3oT3gQLbfft5iqLavErnFHgWDvZHDxYdRCVzhqjEz83ZxJdBzameXhrqzmA7gJYQNucZaM535iqNisT4Gnc",
  "key1": "3eX9WZEPvP42xhcqVAZKoESiDSr2WrXNScP3BttdDASc3PrYNpVJYHL3uKBK1dCqbYBsvMJmMH9CJtKagB9RZkXr",
  "key2": "5qY79bxw6RPuokWqM1itgMwkL4E9MZfKVa9wFZaq6VsfeuMbP2f7KN3FAgs1ftfVHQ217ugNWJ7Jw5GnxmW6e9qt",
  "key3": "63GcQda5pTeCDg7b3EhyueVmJF9pjLuRfzjkYYcZZeQB4uyBsygqaZNrD2VbY6QYs5qqvFErVJWKVMMLqA6cFnCA",
  "key4": "aKv23iroGNFFbCMdSdwdEJU3Ze1pwNqMPCw5W6NHoyFipkLAQBdn8BUMaAjsenctmfH2qDwDk6kfXm62PgQtEv2",
  "key5": "3SfemcQsn5vFQ4JsiLjBxtt4f4GxaKqRmf3X4EtVrTnfpSoitkb7Q4drwMs67xaJiTFUrkRQLGnoA4nTd4z7LrUj",
  "key6": "4LTC5PF4jccm35a2brh8HoNJthYJkx7SRHTVphufQ4QJpcsKGyGF4pDEPKfowLF2TyNXJoqt9QCrhNhpXQ3pDSpt",
  "key7": "GjZ9PprevQPg9cP9YsXmX2c3c52z6sU1AzCbhivFPGguxCG9N4F42pfbsfD4x77LKzWC7eob5LJZn1G5V1cSzRo",
  "key8": "2DSBwg6BZ5maNKGegABXwkqNc8fGF3CKSfGygJYYb4vrbitSW8RV2kDfXnzWZpHTAzpV3UbznBbUd3pCXTE6CPZi",
  "key9": "3gFypmCEpRCsnT4gCqdTivQ4vgPe74asmHfNGFCN83ur6r7mMuD7L8modjMYKKsBaHbVRJr4C6QwRL1wNYCmcXab",
  "key10": "2EPM1YqQ2M7j7WuGsHk1pYJY3ZELvfwU2p7HCKTWLPbYVDZPNJGpbopUAzjZhsaJAtkDRLBrdmefYYThxo7fuFjR",
  "key11": "4QtLWgcNCHCzDqFVT1N4fjepsGKGhV8ZTEt5Kn7rGwp1KgXpHZCwVdVYteem2xPuf6mY2zEaxD9ztt3uPSPnMQ5B",
  "key12": "XSskd8q1gGbiJuPc5cPoPd7mBoz9xn9eC7eQRFdX1ZvEWognmLRPR6Yg9t62qZ68PFHPhjs4UEBukKqdFnctAYH",
  "key13": "4PSPGQGMro78LsHjQ5xXKSXrzvG6mZ61tPXa9mnVtKvoPS7JdguixSnGDASU7s5KcmQ8ejjpPVjBxDGNWvTYMSiQ",
  "key14": "65KvaJi8sgrjjyFaUnoeYGKyRr3zDHZMjVLdbPnJbrevVanWX8vp4Beg9Wd9rUYxYsDcBSNPssrRDaMFEM8GY2wm",
  "key15": "3tKLARdxBNRAwxHuHoY3xg95nAmUfXEVRPHeydTnP2WtrV3xi76jjR1EtpHcsuJSnmDh9Ag2DnZSysFqkESBSRin",
  "key16": "2QKvAtcDoDEFkPbWTzfDm8AF348vVdnkyPZHqqAm45HMbp8ZxjfPRi7xwiSFrrfDa6J95etovsg7uFbcc3FnH8QM",
  "key17": "2bamvtxw6cXmDsUNyiQZPWy8g1HDiRG1Uhp1RYfa1iqjncMkRsCurGQb7KTrCaqoA8FV1ddrhwQ2kNTYyNxajGph",
  "key18": "xzby9DZYEosdrHFFkM84ccZXeSJLRCnsu3Dzv2aNPkA7af26xH2SVUNiUZRDF9SfUWEExLhevxLaACuaiCvNVVL",
  "key19": "3GhTCangHF4qhjKNdNqjcMRTLy68udsLn5YjxxLKHCpxxZSDvUAb33fXZXFDWbasxHeUvNnGpVifapCey6MrLxpP",
  "key20": "3rmhmsFpNULwUFccUZsekdZTXVf8rNa9wXpfYh12dpqKHyHyPcNnFivLKx3eEz8Q8hA2LnUMShnBgMrnEMknQ8Xw",
  "key21": "8MxkCecso16qbGR1kyxeLQMLRC71JenenUgb3GBgN2S7pxonDtkD2WAsaDKFQ41fJ5Atp85CtseNpYpKcWmEqwx",
  "key22": "4vuTtHroKyt2aH16JGXrvsmShFaLXeay1f2FsUmsoTKonWvYihtdZwP4evjm3RwsAxy99mJSaghVSYSsVv9gNsMm",
  "key23": "56p4VZWAit6FivM65ZhDjYNyZN1A8cVrJDHWtGTEA37wMHwp63RrygMLUqKDa8Sz7KPEauxFbBsh8EJuaegWYBHE",
  "key24": "9BcZWQAWaDEbkyk68EvfJSvB2YMwugjPBzfKCZUFBarneoTzSQhUH8MNXkqAVD7jkoppSe38fHCoHSDu8CQ1u7w",
  "key25": "5x4t6CbhiTrjpVZoTBSz3BkpDyzG6go8jHj44JSuErRim5jazgBdUDdyiyfhJxwpYd5GiYsqs9iScq5nP4oP8ASZ",
  "key26": "3MBT1XwWvNU8jcnRGd6iprDkDgZqgkCH11aRbiSWPaJvzgcHvgnAPtJKZwjxnWCB9NHaNG3vVs4p6BDtSHoMGNmT",
  "key27": "5TBGm9Nrk2Av568vBYj3xjZRShJXx5MuYCsco2Z9ej1T832CBroMAVckJqeE4XuLYsWZYEWB2jSTL8qY29cgNvi8",
  "key28": "33N7Z7V9dFgKqXTUP816u8EoJZ2Rypw7wMYwb7devy9wJeDcpuaDnSFYsdgh6f5uHY8QZjycQxwgu11cWA34QmaK",
  "key29": "M7vGJKA9r9P9XjPJRYY9MUQ6qXVGzSSrQMoQ2fLAAijNctbe2sDSTkmrNAuF6KGjkaN7CD7kRcNAaQAa2XPg2wf",
  "key30": "34m4ErMg2d9X3rbpUvonPodv8hx3grC4izNsrLVUgtoLL8Jfuc1aD5enDkgWiGfff6JBx1bP7yUvDppCo8SgsG9V",
  "key31": "3z3277HXk71EpXx8Na25nVmMg2UjawC9hbUYG9WEcBHarxFWmA6mDm3FiXETcpofGLeoREm2kiiwyxGTQpRjgEyk",
  "key32": "BRom1C4JayGhzqiGZeoAMnDDXaUsgtFfEi9VSxTvakMwjcwehsLKBkvmkmdQ5Xsgdzqak7X2pirSLEjtZd3uSic",
  "key33": "3esKNRAT3SF5qJ4QNWnuP6RmY16A6vxv1YkXfEDwZoJJ1GK6HD7qpgQAQQFCNrzNzwFGcUKXrQ7NhM9xz6uX1KmK",
  "key34": "42M6MA5dmGmcqbnazXgxk9SvV8or5HAKXQzt39nbidWbTpDJ1kWnRF4WWgc2qztMpsAnRVthcbvEPjNaFnwp1RCt"
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
