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
    "4TfrwZDEKaW7xocBZx7WMa6jy33u26hhJbn11acxRK7Vyhh1ureG8e2XFjSV28bjytgUFJeomWuKZoHuaG5Yao1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dZnKTC38HXmZkbjB4hSuKLNRkauKGUnVcJMzs6iTGtBsDnpBcd4qQXWQkdwdPD1m7AFeT3abDUQxaLEHJqfz4hh",
  "key1": "57azgs1t8buXJeHBqVCXfUHNsGg7wjQmfDeVbjoZ2XqZSTaiKpob5VeZbxZduvDEcxmkkdJM4RJgNwUXPWwzJSpA",
  "key2": "qTWUJpsSNvw5LDCRXW8mNMxCkCbQ7pN5vHFiaXoEUuRswaac8xrCbTdfwg1JzdWsz4zY4hNQQmxcs5JNLhM1JZu",
  "key3": "38H78RzLmbYdssyoX3PNKq1a2DKu4pAyCRGLZYuMn89bKUv4ma4FucrwaifqSHp7pn2yHCWeiaTGnYq5CmzbRn58",
  "key4": "3DqMpvdwue4dbCj8pvBjMuvwtB2PYpDPSXRDFM8EiAWFmyA3nkpqQNCnSP4ZZ73YGiyUWThBn6nqTdXK3gbVLCQK",
  "key5": "SRFSqyzpsnVF4MUdDxYuouqgG8z1tRefJLZvdCrZZBGRCu5Nicd6oCQmLGnAxZbxhmHbXHdrZyzMvkk7MtN4sTc",
  "key6": "4TRRzU5m4R3JLhrjrWbKFArniKZfGk2Xwbc9MmMp6gtgBupgSXFh4gxSDvzWmmXotnoXJwdZoRiU8vCNkcrS38hb",
  "key7": "L5SyEKiFwMWE1J7GVRKTMN8Gfo3mXSWuiXZXqQ1cMUswrRiKGwBND5dALokYLmCqWZnQk2Sy5JER3LYFLSQ8Vkd",
  "key8": "5W1iLtJe8my9H9YxvZYKz6Bim2mFvWdLnz5xG7Ph8yN8QT2oEXabMFu94JkX4NvaAcCGoSDircs5uwwrtBAKvKoC",
  "key9": "2ikSxrteAJf1KHdkuvz3PM2r5U9f8yJw32bUFGfXzmbDPE9H4JdLPGAGuHtqMjjNCWc429jSJrEo86SE6Kt4ycvp",
  "key10": "2sXVdpfwQtWzNbr6LAGULgx3SMn2Fx49QAG12kM1NYLuvMeFpDLcoUvGdagxz6xWKdMKrvD6VTseMccsUvce56ni",
  "key11": "PJHRGnxLVCdQ2G1XnSZVJs9EaTGW2TaHMV8GrvBb5Wik4GSM7d95K8nWTXzM9pEwxdttHGQ6HisXhGrU1EM6H5i",
  "key12": "4ZW5VpFxEGkmhDoHoa5vDHgQf6hkRTBt5Ftrxt6jpntNrPbkJP8BSfDZ3zKis5FTKHyAzgrRdFSG5s6eHMKa6qCz",
  "key13": "Qy23eMMK84bmksswbu2abnmbYJioTEQjQCJMK17e7DChyXzMv8pwrNnKwAR66ocphT4PrwExohU5bz8J55V3nm2",
  "key14": "438cQKfrVFnV8txQ9CvNYvnMawwWcZuQBbXYFmwMypCBLWiFi434bzGbXA1B73frVXYsNsWXsvACS4HqDMqiJeJH",
  "key15": "5puaeciNwbeNfmBbuqqFvsu54owduZcB4sQxjGLHZ2t6XvoDPT8Zz9UVz2Ls1r9naVHZc4n3KGX496gfC5ooHJ9d",
  "key16": "2SmD3SQFtB26qgG453gHCRvXjqp2Z4TMCtKCBWz1q9db2s87dtYUCzK3yCFsQZoTs3ahEMaHEoW99j8KUAL4zWE9",
  "key17": "32namwCNBPC8NCjUW1GjK72R3tdBsbibes7fh3ANvD5dVkxB4mEmKoTgzLWyDApLG271EMW4aHznhcMHf4nGgdZp",
  "key18": "zu66TGH5q8chhFvjcz3FGeYYjTZTSL4PwGSpoB36yV4PhdLUPhWSBn1pqWT2Z9pTRx7GgEqB2suSTAfpjosvqdW",
  "key19": "3uY64dYCDCRCtuXMiaUiENAdHJ6sTByFuPBF9fHHXtjN41r5poDETErgJEtch4ZCgTPZHdSXAL3r5xyQaqHMCw6o",
  "key20": "4rh88PGzMW21FvpfBpDHxCChjrRnR6x5XHo5KuRjzLCCWJvUQdLXSGWrzJoLCTiVX9TgPt6Lor6Ney3SSXmo6AAU",
  "key21": "5eHUhsHPR6BVaqCGrYPM5v8KMAvpi3iBfjz68W2QZZi9kxZZFouPbEKB343UU9TRWc5afoiHJWgrfSGEJ5F61XQU",
  "key22": "4G1RaDqY5jALJqf29v1MnUFPCQUPFzXR8PrFBGXT6dUh2x5CdXvTsrP1zRKMTPXqNKZLXbDUrrexXK2ebFKeipc1",
  "key23": "4ietM1678R4Zfy91w4wi8GTumCWTwb1khVu7LnThGx69DoSg9UDfTobH387TGWbTtuGa5bh5e2SPsiiKDYM5xKPB",
  "key24": "3nTEj9tphFmJ55D7GY8mhSXm97jjMGpMHr5rEgNC8kqinmYQX1adPcebCAPmmpcJkz3tRL5XsRKLzozbNR4swJD8",
  "key25": "3FtWvE15fGU84W9HHNjyUk8vfc7t45XcSEFYJLvR3FxvMCGgg9YqFsoYgB6r5C53u79JDRzuugVkEa2dDvpxyb7e"
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
