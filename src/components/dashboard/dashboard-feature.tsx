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
    "J9cL1yugWQbb5qe42SngSPk8KSRM8gACN9KkhpLskCfyaZFWeKtYVfqiezzEP5qbcJKi1E8FDPug2hqZHbfqBNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vrdr3epTN3kedXyUVx8JXBzD8cB2mFh985U3p7tCLLo9M3ymK4ncPuPseqqF7uSLsT6YyPtEP5dCTtgWbRWg2c7",
  "key1": "TW2unCxZkvNuvLYWKULpAvJ5T6KREgLLvgLT2RibQuKLBAupS6XeGUUmmCXqrRxPBQCpSp2xraaz2xt1rz3xqYP",
  "key2": "5d6sYqYdrvZwSER7ggAYsokQLya5AJRfuBkfMrZ7BjEA6hWfGsHpsZu4bWJ78TRNiF2uVk31BJV55W9Wcb1k7ouK",
  "key3": "5ntADax9umh21gN2KewRsbwPdyBkuorecEataa2e6thApRy3qVsSgaZa1EgNzQQ1v6kTH1yHTfNRJ2ftAFTQWJMA",
  "key4": "VmGFCom7BTubFMfusGjEjN8QU2ReBhsJS2AWFB4m3UmpHZq11yh7eDuhmpcXWr9qnVP58UXh9Sd633RpfWjbMzX",
  "key5": "4CK779qn2u2K68MiVx6TX4wMaDsYuioqqH8kEmuE62wQsyH38p7eTEw7JhjPZ4MvCU4rvMmtrYzRDuCuWUEKMQWH",
  "key6": "2qCKEGZGjhHnigYTaYBPnafBdvYHPL2D5HNfXfa4vCJoZMthytzQ4VxfAvc2ViBoRsGKS7TEF1sfpyoTqsRk4rRv",
  "key7": "4zw86uvebrdF7urkJLgr4y11VgkiAT6fy9ksxRXyoacNwqPTHsE8HhENKhaX7vXn6m5NZ91ZJENnmJV43Kz46pS",
  "key8": "5aCB23LDYwowxb7FKqaWUBEDbDX6mvifeKhv2FruJ7eacPVb4s8Dncwde8ab1wB6Wsdi3AqVGZVuRDoTyvjtRQSA",
  "key9": "5tKTk38uPJCC5eCc1wpv6hDKNQTjefbQxg766ZcDGJ1AM1T8r4shJfosdKxHF1cg5y5RJwZzUGfh3GJBmpGZneTC",
  "key10": "4EHu41S699gZLmxKJKYLhcWBW3MjLTfi9fjzssmWu7236Ny6Grg3in9MDZvQ5hd55zRUv3FTvUMRE6CQbnTjsKu2",
  "key11": "3Y3rqkfABHd3mvUGcdcHEjRet19X2qQDTzQ5upBKS2TYPog7z9gAYLpQLdaLpxW9U9RcQoq27knrgmH7EiP4Seq9",
  "key12": "59k3CTkbRqoFVMjvvUZn8WEjY4tjswBKpoE9Yz1VyEuHKV3SneCR7u3XNAY71ExXRAdJNDLiw7GKW5XrRB1uY8x8",
  "key13": "5HuUiSmNib1WVPeWyjLALt1dTehZA8bJaKMuDWEZQtubN2oP9biFWXufJ5uMerwees7P6NfiU1fyR4Tp8D1PtXKB",
  "key14": "RGQJ1v3s2JceKpCgiwb8MMV5jpkkXoxNQrySDKw14R1tQy3CHpW5jhZz9F1eo73paBiLRnma4jpi8eaxTziwXLQ",
  "key15": "3GhkPiQB9FUfx1pnsdBnz1A6ehfpKAFAspYZUA4rrZmQuBhivd5v9FQ9Qhidc9H2Mc2gTSGTPHMsady1xFE2jESv",
  "key16": "5PKRTuKxFVyvhSu3LAEYRHq47UvvZVa14WUg56oSNyVnu4GCXcQorXAUzBnmQo7M1bkLgJSbBjJ3UcK3SePxfrVX",
  "key17": "5M9T7Unij3AkdTsdGd9Q4yTNHYQ9ZQhLzfhMZDFSf54YrZik1LG4REqbeDrewCEV4MXu7EsSi3rrKJm95DwPpGqf",
  "key18": "2Emx5dYseogC58NryvFSzrn5fRyxniFtkexSsELAKRDGAwDS45LBhLMpcnwLvMyZTXT8BXqpCBxxZaaoZ6ca6L38",
  "key19": "nJVXRsFc3sxwQqeDmKW9wSyJkUX7twHj9Ck2Hzjk73Z7RVUdQxT4VRBakjANg7PtTDbqDSrUhQUkxT6vnKG9F8T",
  "key20": "2ZaCF2w8x4LSVyTWBuCnHRp3dREiRFyegZH9yTbycJ9gY8K4B93Gqwhiga6cSja5TMRbH8nNwAJNH3DjvUX6qsvN",
  "key21": "rwxtbHNyUZoUwFnnVsGTc5QvwNC2QLwnMnnYsnBTJW3Un8a363LtMHBi8vq5ciZkE8QfL64E3i5bt1wov2cnk8x",
  "key22": "52XLvRpeHYiXYoMoKRvuzTaC5Z8n113JEaX8GrnCWu4s1JxP5cTJWrD5rFyzkY5Qzt6vMxE7SxCxcung4TvUaTPA",
  "key23": "2GGgMpJmZxiBSMf9XZKus6ftFNnV1mZzbz2U8uY9RSkWtS1DAzzNZbnsuXwouNxYdHTaqmPWbzJzhDhXVW7tRHfq",
  "key24": "3wkvqtfgv8fFa2HAvvX5TyXWpSw9VGbaGGWcVpkPLDGc2gz7Sz97Nhc1g3vDNzLTc5L6G866aUwhX1q1HR354PGk",
  "key25": "2vTU8x912RyCFfv4zq3juX3rejsgaTLbBeZYACdPuU3H7cPxDH6j4ZD9cnufPqc5ipT9eyR3yYq49EV4CmUrd3B",
  "key26": "4YCWr1ib95cs7bwnyguDrtnro5Ks1AE9kNPzuYnuhNLnePXyFfDHSpXmQzdeErq1HyJ5NTxsbjAMb1uKBZmF4mLv",
  "key27": "2MrrzKmsXZMB7oEoBEPoURa2vLHR31UTKvRD51Y3NKj5n3LM6spo8HcxsQ22SyKTfBYCrJKg1bJoFN4FThMCA9iA",
  "key28": "3sBTkL45C7a5JGQxCeyZ5zM4iJdGX1e9btYY4frA9Yh3VQL4WpZSXiDAapD797GF79qiUaMkevGrQ1K8DCEcztKU",
  "key29": "PcUi8JYU5988rWQrjj6SJ1SxZjhvdWrfVGJEkga6n2c8oKp53DNQLUCAELbZhoizGGUin5bRn2oXkNG5XcfhHb4",
  "key30": "26Dar45pBCfBHeXup6xwhSjCPuNzNA6iD2jbCfNYis1B1eAJMqGTTrmY5CRXX6gN1XqM5E2BES1y537XF38Rrg77",
  "key31": "4zX4bJcx91D1YJemq3yymtvJDCc32kVVsR5PQCCcvQ8Cdypqjr2DyS6oyczPUpWj3sXeC2agHHT5Wi4nE77XkwNy",
  "key32": "5K9dbxTJHoEQCmxUiXyy2JGQeHJbwFSQGm2ujF4X1kHmMAxnqZ5gvPtxFctA7BZqFRWYEaN3kaqQwe9sbmpuKgy7",
  "key33": "2e2WwMGStTR2TEJmxMW2T4zTnhRoFR1r3Yg9aevTXSAgG2356GNoMe8DDarX7ErpqSwipjqBA7PShr4e96JBDQVX",
  "key34": "3ErKF7HT8cVEcUWsrqbJkphrDDZbhZ59XyTGmojTdpVWAJTydDnx7xMG7BRzaYgbjD7ADczKeR8Q74EnZKcKMRAp",
  "key35": "4mWYvh4eVn85LHdyKVgTNRi1dekE8bVoug95QtnjEF1XCX8fMckDKFbpazDJnzySVpL9qzk1XvKfBxf2m7V1AdT3",
  "key36": "7ufwBQzzboBX21Dr4VfHTNn7jPAYbLTfdjdhvj3Bz65J3XrMwijFB2vneri4rtQGZNB6aukjhUrRQgjSirVSF77"
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
