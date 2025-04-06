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
    "RpUYJchobY1MrYh77GCAJp7GiLcyLnsNUT1DemAe5jNtApNB8VDMC6mvMompf1bQZ1T9mZ8Bmj6c2nUKnhSMoDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "445F7cgo6obS26soMwzsaLVpPY9XSrc5m2oCUTt7WTFGqnus1kDehPZsyvTacSH8H2uussyoX3gz3ctWbryQ1XbZ",
  "key1": "4m1tT3mHF3jGikCs6eDuVYRyzXrDGxvi735keDMTkjmg8EUnwT7riMWgnNotajp7m9dvxKb2ssNbMcP2zBmm3GAt",
  "key2": "3oRQ4Vq8cfMcy7mYr5CFjmg54Mqxo7xJGqTNhsT1SBrkLGNbCJUKEuXCxuSeYoF1VgC436t15kt6kCtrtngEbJVR",
  "key3": "668cPmp5X7yS4cyzKqtEv5vFqtXfoLi6JL7XAW2QmKSLCuWbKuVi2hzc636RE5PjiaTwUVqRG1VMaXCa4amzJQEn",
  "key4": "2ShKLWrQuBdEK9iMejg4CH46dgHXiiyyHM5cR1WyrQN8aBb9ez8mnJuLf83sQQeMCHJMc5Ps9TkseJYSBRYPtCLG",
  "key5": "5sTsnEH8s42U4tBvy4Fr5A9u87WB8gFtz6ovH6KcbHSGjPpfUc321aQiTAJGcU8TWU2xepynQs6NYSsSc2H3cLtu",
  "key6": "31TFyVhiTQ9qvxYjhUujuT2mNpN9FnczYELvD38BumowrEZbmKKtjd77FnNBRegYkZUohFAWwkaEShLEGAMcYkTd",
  "key7": "x6j2hM3An18EvGa9A3kPVrQfkMGsSMAxwtYnxDztyrFXCXEXYpDr33S2MLCCa8fh75qAkvWnxcj6sVKA8FrQoW5",
  "key8": "TPFunFbVAGbbyZCi8RgkiYqEc5SFEsGWwqQUSDV2SeioPshrb5gJzg6t8WctH439LbDemZE5ayZgqJWYGfk8g1D",
  "key9": "2dFu3eFvbaMzynLLqrU5h25EKApPmGDR15xMRqA1yTbset5wbu1oYNCNNY1bKdhFP8ruKC9ChebDGVv6KhaN2VP2",
  "key10": "5xjaen8yYgFTucxZcq7kZfs3audhjdEfjrxb2SSQmNCZbWhKxfC74G2aJQgGoGJAacoKYx8rtQcdykgdbjEk8Jzm",
  "key11": "4YtuncpsdgaXnJpK8gEcE3zWN8LSNf42R5efMmtMXmC1QPjNbYbTmWEmCLJnU7EKu8SaKrobheknEQ82V9u1Piix",
  "key12": "44YXVdcCDWc3WLDvi5N5xHzvKkzQJSv2e9TJd5KP7YZMSaQRpwGzBCb2rgP9Exx3qCWmEvHQ2nvetKBToqpoWSnd",
  "key13": "5oSwoKVD85pjPLxKrc7LEoGFUmx4wURjUhzqH41wxoU44XsGe7SfhkXjAt5cofNrJDZ646np9GFHNd2RqAMtDtL9",
  "key14": "2Dti7nzsqfCLELnqoPgPYm8ye5rFLdo4n7TKCd5qjGq8JL66HQMf5p1qvNmB9sGqMzf9CQHxUZ6K4HN1dtYarwCw",
  "key15": "c9EZx6zx7nABN9HXTPHEuVTiiawSttWiBdxMbJPbY8n9hMZ59wLeRuEtWLFXSKsRtpHR3aPkuC1BiVP484cgbWU",
  "key16": "4NCwWVkVfsccHqeVHk3VtVkmUZxFtZYC16FwgYwEC5tvthE4yKJ1BLeQT12FsAta26gHF5HgGHA7ttyboZkUdxUZ",
  "key17": "2DowDdyzG4FB8HsUnEzzvXHeTb4uwab7FcCejjgxTV6ap7EKT8h1jtPPn8TQpsfuYD5CN98Ng3DtiDRoZzoEk7rM",
  "key18": "mRCVXfZRPKMUq9XNfNjTcWm2mAkLmzKeeZkNsxdggCaTrJMjnyzksKDHjDYSfXResmp7gGjS3WT4qmvnuFUfgAK",
  "key19": "2aaCt6LRhmhFCJEdQukVqjYX4iwgeAhjb5iCfAGZD3Q5wYnoULMLXJdubjyfTh7YMCHoAqsd1dF8AVaa5ionZoUi",
  "key20": "27bArPyi95zdKKyuKPHD2oRifuP5qCyvtxVPwwCpYubBwPxMS3UGaVmnGBNUDaYu5UGV5bNMnuoiFS9GkCGHk6sR",
  "key21": "4vWFfRAX7um6qKEvM6dYTCBiGGvqxGtyqYBsN1E3eSCybX6TpvwTkhKQoYt7XWsBUzapKSTWPPL7fJLSa8WbK9eJ",
  "key22": "qzGR26EjiSvDP7hbY37yVqVZ5XwwTa2nYGUcBF7hwmj4g1CppACUmuiB84fjG1MPqzihYU4N56w2MrGJs3a6CNB",
  "key23": "sc6EvVg6ya2EFBaeHAeYy7a3XjfsFvUTo8TNWUmX6ii8y4K4iDu9mnmi7v74Lkwxwk9F9LQabCq3Z4XhMfSfX4R",
  "key24": "4TZaEkaqzeKy5ySVmxHY5xjrmpaF4DxAarA8kHQqQpZ2qH1jnsmiNEyjnf1D8vQEfn6Qw1dqgHMDK7ixYrSfzDfD",
  "key25": "3U9QToXxkNuFV3hQaYUfXCGVV2K73sTHUPyBVq2KeGYX4LuVEJHn2LiXKBHFNdG5kdrTaewR7YQ7VNEax1GoCe28",
  "key26": "3WavVKEGKEW8pk2DCsjt5QKpbkAKQB7KQQ8to9zc1gL1JhBSA6NpG4eQFkBt47acgwmVAktqX5RcpnmS9eYtSNVQ"
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
