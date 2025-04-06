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
    "2QfGoAzsMC9Zr9P93yxwdbJ16jfF9rTtFCGuZTfVSo4CLEpaMZfbRVvJh3kBoUy8AuXZ3v1g39CWXBBFrG39yZB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ln1Z8Q4hHLwvTcfhK2jBisXiacCrDnaEiFHDtWidxV7Q4nAdCsg9sPE4NKtLUiPararagRfG3M7ziFNDPjzzrfP",
  "key1": "5W5YzNuUbRrBAEkXsC1jXJS7xbRHqPJkfwQxgVGzvDzfNaNVJFs1Va25tNzZ7ohQV7pM5n4bzcLc84GZvZgP6aoh",
  "key2": "5Qw9RELTxppvuhnim5Ljj33QAAntxDKEUDLxWyR64an6BoEyhppwDBWfHHw5hc6xgofEDLXqUabUkY3XBJbCuNVQ",
  "key3": "5BncQhyeNXvoeSo2FYHnPJJG1L722FRWWibyryHvNwt8Y9qZEMCRFQmdzQnswNaSMMXsmPbxMSTCbYNSAZVjHcmJ",
  "key4": "469iQwP8mGAcouNkAxvdJLvtYBfT27ktAdmtu8eEj5PfFjTPTiCqHEZhsoaMRAxyqGvmwM2AunoWivWeJAWaDGBB",
  "key5": "kB7LTQXkfTUXjXSjdxC4ow9tVyES1TDDsgj1CaZubunptRTRj3KsCJ5ePt3umxbsy7Rwd4oFX5tSvhmSzsdvf5L",
  "key6": "2yHEbXk2w9dL2xRygx11JFThbRxPYf5Xa6hku76XVfFpTom8zh1UKH6UmhyjCGY6P9h3bs7pkbAmiWDrQAWrrETs",
  "key7": "2dELV9AVoWP1QzpSzRBV6ZWoP8RoukgABx4oddCdGb7h4bYrdVgnZuAGELVXiexQRcfFmztNCst9dwXY8nhTRh47",
  "key8": "zEJvPbFJyeTbcwm8Q2zvyiqEJzyHT5kP86MosVGsMPWD9Mq7ED3BU82HuLKnfr3wagf5sPLYWJL2P1WDV8zt34g",
  "key9": "Cq8soJqqPyhoZLc2eqXXujgrcki4CqDwguBSrdJ4jZVx3eJaJ4zsXwSHbRgLBesN5THrWEkuCfM4hujFkeN1N1Z",
  "key10": "3hko3F8TDTn1ANZRWLsx49Z5BQYfyUEuxkxiqmUdkAZmmji4fdzSd8H62pm3V7Cb5tgxkHkVQHqrACSNnh1Reui4",
  "key11": "39khkodDPUbZaHTjw4k8963HA4FPEMc4EuJ1wQfmWZQDBH1sNsrgenCDAYNbUnWVdA32qzXxgGCDg9TJdoZCDKEi",
  "key12": "4hZb44s486ra4efkzYac6B46gPzFhNjAJzYyKzdpxnAC24tfiuEHc8Htwy4QHni3Lw9DsRDpTWtxxUfgWL8HCRB9",
  "key13": "JKRGsQiWeyazeXrcVmF5cLQhPaWWnhaWxAFnL1bCS5rLhjxa2GzDobgbR4W4X8yxvmfHei9MNoucDqKMSnFGWkg",
  "key14": "2D8XrCSAGmCXfhemWFcnqeiex3m2RtkfkgNDjDG7nCM4MvrvUycwVCYL8xNxFYLZg5f15KX8uDousGRnUgkHdD4i",
  "key15": "4RXzX15KcMbvbL7xwRf2boJqstHw5XAyg6G11hrgvr5YeLU25WKoZ9CsuGsfNpYPstrN9G1uuUc18DJKjxYUjSQs",
  "key16": "37meLVUv2t9mDxrcp5WJ4W9VFBM4QSbj1hNaNaEpJR51FWGMUhjFSJGhAfZgZGkwC7u45aCh6HPJAU35fhyFTFKZ",
  "key17": "5YVVXvmJiyU5g2F4rvrkr9kyZjcVRyne57SE2WJLA4GDQ1VCNxxSU37uj4tTegZrT2T8RPiqxPsRZ7LyEfj7RixZ",
  "key18": "NYemxa5CReCPGrm2kDNdbFdNH82Vu9agthvWJmtLXxk7K7MreZwG5nPN2CP1HW6aUUfRYfUeZrNF5nN1uwzqLpm",
  "key19": "3w9pEN7LspV6BxkwyLnaoJhSb26AcpqZJMBcbdKSrQHtAXxCVoQt45ZMrmfJh4MAaftnChv1DmUGeeak92UjisPc",
  "key20": "4Ld8ZxDRUoZFqd1cu2Uz7zYQ1Yqqo5KAri9sbZiu2g5oW4Jkxx6nqmc3CnTsXByBaadNqmGpNm1BgphrEHMRhQiq",
  "key21": "u6jgPZHyFQnaUdNFexxJPNkTwuTjpujutcGwhbF48QWWr17su8zdZuaqb9x4wNM9nKYu636Qi766t33V6ZoNug7",
  "key22": "5AShC1ybghwWkAbMquHouEahEoiHDGV9R9NhsVA8wbkgihCeMCts9TfxBBgjmLnXnLGCNRsmqnxVgkpSsNgg6MNG",
  "key23": "5euvbDDG1vXhkEb56wmPQHFF3vsmgryBkNAbwai4LeBXTneRdUYLxz2bCgDr1kryAbpt8nQUThN1GFKi1fh16ReM",
  "key24": "5wgApwRFmKnGJBpUBaHtWXQvAJXQRqzXLRnTRWptYFEK1nY7bn8YFUHvGrf6oF7bkLspXkqvqg17nAgWB97akLFw",
  "key25": "4MKDxdZzGwQ5rneSoAJGgqQN85sEqpGQV6iMC2p8MHobpPQrYJzbiHcN34dofZ2UHmXpWgbLqV2DNRCz1aibn7Vy",
  "key26": "66WPxDAgGRbjxWDXPX9FXDA84tf4MpMqqZsACU7cdnYaPa5PNG79dboyLhqZoDAQcucx6GZLuoouDqdrruuQZXMd",
  "key27": "51PnurTQ7qS26N9nUxBUdMmXTRknfSTt4n9XVh6PuGasuUbSrHuzUbGiWXZYgBUvojaJaEirC4REkyH77HHbXE3v",
  "key28": "5kJqhdWJvzQaC3ZV8fsgXnusnTtLGTN2CFF6pSVmyRoNywxq3D7TZCTdjCgKSKVwftwZsUHCiXCgB19KviuyT1pH"
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
