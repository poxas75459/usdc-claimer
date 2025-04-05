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
    "CkMcaN4kAbr44NjfRuSLUcCffGnyR5AgDHU4SfDPSmGtHbqPAmK2EszumvUEiydHfUoBBUEw4Z2QXA27ZMYAMhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gAMWb6yCRyB5WqcMrTvGsBZkk5GgpX2WhBikdn4cEbdHbnmJCxHLt9aAoANMGn6aWmL9WBy8JZiRA1VSjctFhno",
  "key1": "2GzsMtPzvQEtpsL2BGqUyhj1e9kDNmfFJj6DoyuV38eBMnqYEX1NUpcTzJRrinvUTsNSWNFxWyjjKto3HrbVEjpr",
  "key2": "CN4pb4ma1gZMMuA5dhrSPnMR31vsqbdi4agZkUnxrrfHhB7VinBabsbVMtMVbftJvJvsZdMERjJHn9RE7aPJGCa",
  "key3": "RvseGcYVvhi3KKyAcuafsMG8Y5JkRRc1THgfxUFHQ1DFUNP15d4jv6jZVNrv6vVhdBPPcnWRX7zZPEPDFV2Xa6h",
  "key4": "4jCK6NQhKJJECTagwZThcfCX8mjrQ73rPrqTdbbVxqrVL31KUkD5dvmMwKNbmNkwc5Y6p5zQQRxTCLKsGhHcMGCB",
  "key5": "KbtBiXnzZ6RWjNX6DwsAFMASiBHMxUSghCfncdGWEJGQW4tpYR5fcuHKwsWVvKS3ePGA3zKkF7hVP3P9cY72bzo",
  "key6": "54WaZ4qtbSE4Z1MME2G6LsNy4MgWLGSMqmSpdwwQx2WW1QJ13P4fQYvUy8S8QenWSN4rDrCFxwom5Q7oNzWaZaNH",
  "key7": "c2aiZBAHZAe38cyUSgE6BtUdtomiNw5X81TPPEgV1P8YZt5ukAKAdfNwLdZPE8CHqpjuRJqVXUdmoAsXT4Gnt5P",
  "key8": "2fWXfnGtDwLaBmbvDpEd7LrUhiVnNBEDzMQzojMjTjTFNCmmUndEpuXqptHEM6BCkg4uq4jVxoJhUWK7rhirMGDK",
  "key9": "53eE2b4TRyEUaDL2EN2YkcS5JEjEg2KBMHrLrjSNhtnK3huaCYKaV1byax3nb3Z4nqd7bY4dwABkab9MhEi7r7f2",
  "key10": "5AiQcAfgYqxyoN2Y3YeZS6dLuioZD7Pt2dRRvenFdH9DFdCiDm6FNPPrv13jc1vj16jw44yqXYJe8c1w7VEr9cH1",
  "key11": "2x5rKuXwnhhsWHdY1J7bc1aX2qngEMRB7BUCaQwPYh1urW4PBNYA764DFQifWnyBVfh2nXG73LdxpVSasjkYaqEf",
  "key12": "5MGfuaLysvL1yRLfydkPt64CGgyGRLGCgVDvzWRkdQkeGangkA5nzUTycwQEcHNhrfmwU14Wx7inzT6LPi5c8897",
  "key13": "29JDzKvzHZL1EbMg9MzRXKCLzKmHyyQe75w93Zts6a4z4KF7vJnr9G6sneredLU5mAahbVbfxSu4rXttzAKQ9FC1",
  "key14": "2PE62TwxQ7EdhYJ3CGCU8bEbGgUUNs5uE8erGdXfV2m1ogWybGZdKxbEaK693r7zEzakqkputzvJYBzDcYVirbrq",
  "key15": "3W2wRFa2fS5rKY2udr5g7X9Zr5wmAWzNfAY5ChaiX2eriEgfrp74SigdxivYj9gGYnCeJSLRjGtbmULaCCW1sMxx",
  "key16": "3vmCiXXb3cJgedyNHjmkRYFPxnbLzksv1J9mrNAg3JSnvH7H1fZVudMw9Ajfr4yaWd3BTxKpGtnK6Cqc5LKPHW27",
  "key17": "3SXoRwgsGzS7uR1evmgyPsota1DKKqLxCfwVwAQ7oNRCJcFD1iCA45vFkq6e7hygzoNGBA48ieVDotZLQYoEGmrS",
  "key18": "5pRCokKqTJzukcYBpd7ZzamCjFXdiCB6Ky3aQ2xYrf8AebCW1yKuhMKPyim4HVy1GVFfFQLMvcFisUq4vee5HpfJ",
  "key19": "23UM2cHKnErLUSFRvDncteovbDT45E561nyY5ouBq33MEstzuEvbjCFRTs2u899k9eaEKmp4WFjj5HxsAHoRxxgr",
  "key20": "jVTWohPwW6AbJAaLpkTuX2jAToyRi2bDCiZcWcnncGoregiSA8BW3A8gkQSfQojcxsvXXTioRjLnZA9DEpaJUAd",
  "key21": "36MAxfTy7En9rBAVwdQ13A8rXDjPbW65cXbXLNLHSBsuMBq5CLb7M3bZz5UETiviWcnYm61q1PS1TLDFsr7og59",
  "key22": "3R4YEidbRNZ41NNRyWMZLS7Qbo1WLwVf7oA25abW31drPKxp73j1LzAGn2qHMsL3RzLM9s26vZtPGnwNvFAcnukX",
  "key23": "4rMXhEsYV7xhPSUDFmxG12mBG1GdmFhdc7tTxBWRw4anBqWwS7vSzumwtq7YLhU5mBkPDkUizD2pTfQFdACDhGFQ",
  "key24": "4LZJ5mWwQn7HCVCNGzUj6yX9bUkwtvdb2WzH2DrfDUpwSVTs6AUpHGBu9JNAJoUCSUd1whQ2wx51s1KAyPQESCmT",
  "key25": "5B3HfMAmKZxwifqWup4bYuNMwqXkuKJDbeZux6oAxu2FthnYMbnzL6Wtz7jaj55GhvQzfviehKpi7FcZnpvM1L7N",
  "key26": "2nXd2Bs162twz1AvDRcV9Cdh8xbWt5FeRjW2Vo5aajXnw1QUkLiA7RXgJiV5kjNpzwhYuuyQdFhSJ1VdfDoPLmRD",
  "key27": "3NDVvR58m7EGXSvxmzVv4Qgwm5x1F8DMWQvju5AJvsmqC7vTd9VdxRD1bLiRgj5gigswbJCxKfyPwckYxZyREszz",
  "key28": "57jPryHfoKCCSXGtMUjbD3zXQ5oLkLB8t7t9HQgW5Ek8ZFMf3hT3cNinK1JWP5DuyWNPhs3yXQPDLfEbsDiawgRM",
  "key29": "BB47kt9kRNnsWpiAxzsNpeQF9zigDfLr9zwK7aHbkLEnNAYE3fp6j7HkJqefDnhqa883VrGNkvq3FmytgDin92c",
  "key30": "4nYPmLXRcPg2nfosbLibwZi7nEEbTu37AqcUKCYXhopxjNMGd8fB8msY4c3AeugJb6zJWG1DyVd4ox7khVK8gjnr",
  "key31": "3Ht727mRSaBdcKw5SBnExvfztjXb5cFtTaWTsncdCud15ewYLy15YRe52jTTs91EX41HwAxQuYGR4qQ4ytXL8Qed",
  "key32": "54fzQKrSTn5rLpXMXCLo5ABB4CsPdcWye51V3X4V5pSQuWfMdNbNcfgC9o7TRnJWvzXtwzBvxYpMJrukSh2Mcwj1",
  "key33": "aFmEa3hqqANYtVF5n7aNgK7UYNcEb68YwJFYnSYAHk7kG8P1kuNFheVnDdnYNJ4GkgxuiCb7WZZUWezKyUaVPtN",
  "key34": "3BvdPGg3frkrL3qG8g7DvNn2ibQgvKjnu564bSjkBXheTU4UDouGdp7QsEkC2j2Js5HgdK53DvWJbxz3dYYzEFx7",
  "key35": "CjtrpqTeFW2YELmKmzDuVmxiVPzmPj7mVsmrMtdGzggXwGsotQJPy9gQNQfttBTfvFiPrKHWqXv16h7bSNcAczG",
  "key36": "3WnmDdXsqqPPRaXZ6zH55XeTj4koKE65WqvKoLAyQLEsVxt9vVf2yV88BkzCSM4hqhd9ACo33QhHGTLVE8BAQmuT",
  "key37": "Uju39B34dvRoMCL5n9LrtDyeRhxcFULXtfaXtkSgSK3S8rjcx8RXajtj97HVLQgPPAC6dF9kPQRmdiyMA5VtKb2",
  "key38": "46adhyZZNTKvDcFaqBWdMkAYAXfT6q4m5rD45277FWEG377XKdedrrH5N4dPCg6BTGEL8YjLDWRAh9QKZrRvf5Tb",
  "key39": "5GjNry8APqLqtnND8sCpA3wRd2uaWfVRYgZMmn4y8rPUwLzDFr7rTTqjrkMzep8ifAJyR1RyQUBJPou7MKUBV6gZ",
  "key40": "2VZagetuutrsbJiiTapDuWdjgcfbBmNBixLAxxRiDJy5ctUuYtaeYb9HsfEeJazna9ZDRjrqJwRVrcY3dysvS1HC",
  "key41": "3MrEv4BgNCiCHzEdEBm6UkSXTVpkV9mkbC3Giy9rhBpEjJaCJUP791HjFQ5dwxK1tY7iQWkMEznUbvPTAKhjv9VN",
  "key42": "5Bmz63XwUfJPKrZaUSYhHdyykTZQjSEfstGrgMfbQ6Ex9gSDu7T7bes7YqF5Xkbn65ekr3e3Q82CFvGwcJSiJHGq",
  "key43": "3vGef4FscZcwW5Nf9dDXb27nv8kK3furdhzGRokRxsaj3zmucWxitQLdT18zoCB15M8sD33ofsX3sKrrAUJeW7nG",
  "key44": "5PqMCsQykSSJTJyb6vFmF6nf8BnSBgFRxmCMCfa8bn3XegisAhBoUnE1yfKppCdLe5iA19JMy8MiEs2KoFkhah5f",
  "key45": "4f6UuJEbXk4F9dsK5teiG5A7TojpPyakuMXnhyxpFFHDqV6zMCE19EJ9MBxAsPdbBbMuntdPsxzPTi2gkBRZM1Zm",
  "key46": "2cYoiS7UYpZH2xSji5qGEMiBSFxbPToMthi98U66ptMXNvor7powFXqDVWSPMxqwYpThzZjyKpLr2Vp9darRbdpa"
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
