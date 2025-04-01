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
    "SbkCc7E65xETcFDYtWwX54JMQdfG9dzjEWbg1sudSNWTZWDa3biBHyQ27hLVT8zo9BPSE9EjqR7XnjMwrS5wtzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sAKpzWo1wLft8WaS7BKQb9ietBGyByNcEJaPySAo3tC76STT12LQqSV2BXSgxXqsj17wxgd4NVo9g3XsrsGfsZ9",
  "key1": "2eA42GK3pAeQMFT1MW49rhUcHibafVoUxkftmmhnEbUehpRT2k8PBfFaykSeehDs3Fs1ETVA1hCdGhuNpQSz95Zo",
  "key2": "5USgm7K8tKhZSaNxvP1V4Qjgwpv34sB385crho1XWRqdFXNauAKU1Qpn3sh83mDRygE5qYuH3pskvEeNCFEcikjQ",
  "key3": "3nE3nZAxVwUv6QGu8j1mftc7gCTPSMjJudKbbMtPZaSWARWGxax2nhgb5aB5EFg5xU6TSyxD33wNMMWfjLekLQ4q",
  "key4": "4CdJNrhwE35jt1LfenHyU3LgnqSxoCpWq9Pib87Xu5CfQeRBiQZWBg18bmqgoH834iqy4fBidop6ZQXesZuCPRZW",
  "key5": "3nNkZWiAo92ba38jZKpkVKJc7Jv4yKLeFSvnBEsTQvKr8fqQLQdbmuSxmFdwneMpjHxoju8hx6AVhcoFA2G9s6Ta",
  "key6": "4UUhFh3jD7R2RdJXmqxoxNg3shdf9xYLqVdWZzn8h45bu64GLetdr3zSBugww11tZmHJ4N9a3eb4Uv2nwCEMQA3V",
  "key7": "4cAonwkbF7FuN14fvXq5qs3H96pYqKrxa4nW73afgZYQtcRtFHGzxzZh9VGRjmuNUnwXmMo1P2zKSWhwv5y2NS2b",
  "key8": "3bXiF8Cci24KPi327HRMGaTDTLbqKuj6ZP64u5WgpPkrpGybL8t5a9vNdzUCKu9wy7QpwrovFb778sqGPHnThacb",
  "key9": "4nGTQwvx4BShkHZTVxyEXWLkBmCCHhYauZ7GnEHRc4GfDvvTGeKQZijShfamKh2LkMcvFpBwiLY4qcGPRnCbApDc",
  "key10": "ERRp1yFhoKzh5wmvbut6dafJqiYRfh8vQtaCTCxMBhJarGvfAV1ZtPgQtRTZvCe3bau4ZXd4twqmwxDkJfqZGMb",
  "key11": "2WRzLGeWzVX2sRzGUEsYzZ69ZZ8aBmBhPs12nEaNAU1ZVpSsEUayi1KKZJVzotGsNuCTfVWPUC3BQtAaCZEyBGV4",
  "key12": "4UfdXpWBie5u6NcG6ymUWXZ7pDpMLWXUUKeJn1hVqe9bjFVS32kwq4XLAHsWnJarfE8eKr2kjBtv7dAdfxap3RT",
  "key13": "2ACovV5WNV3Y6CohJTYfcwimWtJAFdmuXu7Ji6uz6MRhfsiEDR8CuL55bEbm95D6Uo8i3aMTGhjEky7GLmkU3V8p",
  "key14": "4somYZamDuw3y8RZXMh16uCfrcAKTGtuG6KkXpJvLu1rL4cHb7Gj9Uu5kunhE9XMKGrxDMoQKXm1xkDS4ktdv7oP",
  "key15": "4KgsThBoHbBds8j5UCAeAcBasRqCu1j2Wqg1VmKEWTYdVq7iCXMbbwos5y2DVre9aDAwTQeiCzmsuYq8PF2NS4Sk",
  "key16": "5tQFjpuZ2dckzCCSsDpZSjyUaWT1ayTUNNPJnJmaF8yCx3dWrmVXXX9KEUU8uRAf1AtcGJjafWpwrDkEccFc1nMM",
  "key17": "2sVDxfToMJ1PU2ZmF1QJZ6nkpekSzLt5XEDAHSJsXb2FkBGhFKx2EqtPnQUDuj4MkxchkBG4SJqHnARQBYL7s5Pe",
  "key18": "VkxV1J6tjdkdQs7kFZxeV8iLGKC7QAjf3kYqrFZt9ka6fNTAVbHAGGJD6xbXsr5QHoDLQkzae8tnGUPKbiRBQ9B",
  "key19": "4q71ZAP6USLSuVcdkYateNHNUBPmRxeCCqfHa61oTFcM6GRnNuKSRQUSjgtm9w9xqqbVwWMqCMiMUoD1nwMKw9oS",
  "key20": "uYnYDjzzsR7P45Wp9s19wZb2CrHYddjEsnAJq74jqiskWbL57BoWADh5CyPskbVdWEnpX3tYBLEKRQJKxokgbiW",
  "key21": "2ocv9C3DsX4zgBe1mfk3JN5sxfEwdoNnvy5AtEeq4AsaJVthu4wH9ZrZvjhTeSqQRHZ6xjjAufC3iArMRUGqZBj1",
  "key22": "3h7oPmosnVgmcAvdT1AQ9U18Uy9y7Wr3fLTX4yyW5eHDRoMuMGBKtGyvg6qWDk2Rdge52imHFLfMHXCp31A1Eu14",
  "key23": "5nskzxTixzuCGscYKPqp7NVRcvNiuA7UJbRuJoYrfTJUvk8VvSACQ4KCube7HSNnr121fCfP1HtHX5gvaFtNiZdu",
  "key24": "38eKKf3jkVd2Zjby3GoSbW1M1j76RaX8BanXDinctnmBse6quhTbh28aMUSo24NbicmbCEYvYfG2JxejJ7SSPwVq",
  "key25": "mKAjw7Jb8makEqy3tWPrTxYCCPrdYvfQtNJ8Zenktq9KiBnwquKEfQk3xK4uiUhuhf6dx3Uv1CJ5MKXKcTfHrwR",
  "key26": "4kBtrUVkPdfUWbLJos9qzPN2w1tSULVWEtiasVFP6B8ux1jPm5qC8PaiyhpYLJhBBRp4W5Qn8NKdZYWow3cwRnw1",
  "key27": "362p3MFDMz7cHgZoRwUwgb5mN1mDEao7zLuMZ7LodabVsPicw3GJmqneVDykm2vTvD6nWxYGQ87Gox5crDKqYaq3",
  "key28": "4XN63dc8WK8kjVVSReLvvfktoEqVJ1kSVfqetcbEBioEpyAcDdJtM4AKoYpgQkzVaCQ8vEWXebqC3U28Xmnjfy3q",
  "key29": "5NJtJ7xkqb8zQeRrrrpprFNgLSDubypFCLrAvvxprZxYmNpU7VAVmuxmAMyQTLirkNHDdBqMgWqsUCMtPbiKcAS9",
  "key30": "2Aoane45xfjKuQ1T2in5ows4qCiBneTBweuJLHyJUrRN2QrVGrr2NzaGAn4QB62MKd15yWFtb1Hd4bHWTvdb1Ww4",
  "key31": "Az7jpwofYLhMsysfERij9SzhWV4Amhmyr7z2xEi5PneQ8GUBxTGUHAZ7c6mAsNAKQAGF8PbrsLvwPRgzfBJrQKq"
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
