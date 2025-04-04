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
    "34G4bcDhP3cSEwxgUjhetsKhm6ChGbxBK4b5fBGbm9d9qkjKSjyadYncsAS2CuJu7VDjbp9Y431ATDwHG5RnmYW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56fhWrtGcia5hg81xG3Lj4A6MXCNpSFvN2Um98k34dY6a4i5gn269SigHxhP6jj9gNDFhSTvn5TEhXxn4fpmsVEo",
  "key1": "8fKR2YhU7tGkmiWUB4qJ5kBfxHZWzE5JphFJ2LcMZpUBsvyJte23M5eCSHVNe37NwteZtmdNC5RZTgeXqFH5NCj",
  "key2": "XhsMVC8gehZdRFBLSewVKqNfmnbbSwyD8wDC4fUpVcd1hUSFuUZy8dM4V7rPRAmwvKLXpbdkeFLFFM1kV6xU1fU",
  "key3": "5RqZXm3d6xAaf8y567GnBbu1K4zwtchutyVsqV2fQuvx4sNzotCnTDC1x8gDM6fX84QZB7GPWsERBXAnnxEzcdVb",
  "key4": "2VG72ureq62eE2fXUFEc5eS256Q7etDhfXMocHe5YAaAP1KQps7e1B3an3tFU1WRRiXbRL9V4jHL5inXZATY63QB",
  "key5": "4Jcu8njEXMZP926CTxQTCHu44s2mrj5ZM2XJGuYFxUhkeVNvT6NfgLDEaSexJXksYfXsaCQDBfTxPNgcMZR3Pc1J",
  "key6": "4MezHXnXceBbQFxHXxjGWbezeM8jtN1EQr68ecZt6qL6GFoE2XNhr3omdhF46dCieu3otCP6A9X1EKHjWRMG8nBP",
  "key7": "4KSiwTKzNm5UCZzNez1Kcp77rJBdUsteS4RTtwdh6txSbVooZyaQboNoM2SzF6PrFYR6Ersxu8C93mdDUbcJfGJu",
  "key8": "2feDqMSbmctDnuhTXMUa3nY76PLCjxUcyFowg4aAAUx5JELMTbFpVUMNtTGpcj19FHCnzi3XKpiUUjy1HBGk5ZTx",
  "key9": "2eVMn1VvirewQoaBiwJxrWsGKcwmJwiAv6oj4oD5v7t6MUQRQueCDio6qK3QUQ9LzhU8Ryp63UicR5Lc1BkE14CX",
  "key10": "4ssuvvfZoREQtodLi8tctyTPjHdyXmmtNAWkdKtcxEi7NS38uzEJ9XDgWr38HbUspoAEY1mDRxM2xqhTmvtoGxCz",
  "key11": "48ct79VZL3Ynoi72VoNJnUP3zQ7ttdzMfdRyjLkGXr4bpUpQvMbYjsDvt4nHaYNs15EqxJYKCtUUicigxapJ7Hqf",
  "key12": "5NPwaQ4jZFoBbTa2UBEShD56pgA9cWANYYyzLLdkEpGkHeeMNZKtmWmap1c8MXExHkHDCS14Gz9v6ZfRXgU7JA5v",
  "key13": "4M7gGiy4i282FBtPQCUdHcQMqP2hy4b7EF8eZpMTTqFy5pysH2wBDYi9wfr3B7VmN2iZRtFuuyBPwMsQCYSEfd4F",
  "key14": "2N3KuZDCoo86ycjYtxuCxGdNGoNAEfKrR5CQGCdwTT5ZwdKt6MyUTgKTH6xQHN5sfd9net3u4NmQdegA31UcN1p",
  "key15": "oFKnZoitkojsQT5DNokWdFr7DHYWWqUykaaUZJG6jac6FaoxkT9ojThAwQhGXY15oF4QdNgQ5UZpxy29BE91BWj",
  "key16": "HvtzVQVoha71ht19UzPX2RHXCHicxt3ee1jRbvWKf1osxMzKv8PZJXn6pLsdPVKu9JH9uG38CfQobnZbC79hzvX",
  "key17": "2Tw41vQQwukZxGruPbAUYGcqAUpHS5qwU9V2qc8UxwMb2xuGvtuoxEUKQghdycTwUFVgJUpf3M9awh41mVP9c987",
  "key18": "jSUn4hBg1oKUbS8eMGaN5vKk5TDMguHRCPgygahv7zJSEcBcqo9dLe7NNHdRv6rQ5BSSoWF3uooNqyjPcF3WfF5",
  "key19": "3eeSz6qE6KduhTeANmnAvNWqk45Tgnuim5Wbu19xnZRGgbNhEJ3hu9JWGjFDCyJ6YdLX651KDYmyCTfuR4Q55Rdp",
  "key20": "9fMKvhYTg1KAkfn22JtDnedu3vJakLTFB5HWXe4VDTGEsAg8PtkvouApDUL24EsPEW7pnNeUgpdcbfbFnpT1xbs",
  "key21": "2qSCdtDvv69PTbv6ewLhGPP1n4EXDWaz3pVTbGwpaQCD6CwQHFMmpMzfigGDPw5MwvwLnM2mdtn8NCrScS98tJew",
  "key22": "CfdXKgCYBeCn6Dq567nnZPNa2JAdFtKMAdWnWE8f7bNapxpf1FVjetNSXcJ45n35R7zSQsZu6apTCziehnjGopS",
  "key23": "Rag1614fo7NdzQHANasoH8QUhkJFBgzFeAnpk3g2AzMZAECRjUqS4uQxgha5G5TU6yDE9Gfz4WbrfKgUoyVSKBu",
  "key24": "2HvYFfB8TCzMYd7Ju6tTyrkPKs8qcbSyqb946ZoL6R7Rt5S2gEYqW9GPD1XMwnHBqT8gXFVRWEcgmkiefw2xxFmU",
  "key25": "5h9ks5igUygk33yWT197GWLtZAnf4GwgqFWnNucsBeAVVVrMNUa6gxjeJNCX9LkBwyRfg7wmJ8KRAvvDEdSmu2o8",
  "key26": "2RjyDofzU9dhpFqdow23Ba7DhuZcjXvTj6ojSVNNcu5s9bTLFJrZy8QT6pdDtLDdqmjtnRY8cHsCbRsGoxxvnSiS",
  "key27": "2YDtUckL8CFfkdXrLzpqXwu8DQ4BArWuWqu9ToEd9v8YZUivGtyv586sXv6AW27hfpeJa5fA28VN4s46ZtXZ7u4h",
  "key28": "4vt2ffBzWWFRDZPR8o5w6AGXVcDFHZcAfsSpmqY3zrQgnUC8pvMs5sxutQFet4iA16JJ7yVRAPPqHD2261atsLkY",
  "key29": "65QzVhb1HgxH1HinTkvx3bVyRY9W1bS12jVAfQMbj1Vt9cWM5e88ZheVpizT3yWVQN2ACiop11j8dbT44wbXd1Ct",
  "key30": "g8vN97KB1anoBTctzy3vc4rRb8rADCCyWtTNLqD12ADB5f6yGxDc8xamNY6HHTjUD1UReQLf1nhciKfktwcuqkA",
  "key31": "2cuWbfPMCmXdNjTWEvsTDDfgBwD5D4J734AHS65RcVT9QFZPj9BBcsV6zGNsS4LwqDX1Jjt2ZGvraf7kaFjtG99q",
  "key32": "23V2VBmybaRpKmDJGbVeKhodDftwgRo3HQEeYVGoc7wA35opz9qxCjRkC3JK9uhfJywFQFUnLr9hxjCbB2G2NLmp",
  "key33": "1j4tjXLHTXfVffsuMZuWxAAugpYNF8U9QZBrmaxYf9fZztnsn7V3VFPjG5dsaPAgD79LtAfJ9mxBo8yYQ52dVvN",
  "key34": "c9dhXu4UFGnqPhmoAFTMyQcLyuRNdDPF2qpAaPGG4xG4AHAtBdPZurVjsEcFZwYDycYisEd36VQfrHbsEPh28wU",
  "key35": "e3apxmNE7BNusxbR5dGoYgZVn1v9xcpzCCKXWyEatcBuoqTzevvp6yknBMWYZahCeugimiHK5WGxq9VYXV4evSU",
  "key36": "Gzfkw4CkPAQJsCzTAJMUWC8hxkc994AY4mJhpoaZMqHp66WRD388v4hgVsebQcwPiLYq4K83r2AeyxwM2yPNF68",
  "key37": "2pFdh5Ab6HyQPMDZh52EVUvTR6rRLtECZgzLyNNjY2dSnc2ei5CC5rdNany4qw38kLRrW6UYUzHqpmfVCMmsjGuw",
  "key38": "4241ctk6rUpHZqVjZcgmY86L7PLzwriCBMmaVcE5ZBMZv1w1HCHjr4nG5u2o3CHHcFNDoAceuFViMFqan2hi2noy",
  "key39": "2YJba6NRxzY6VJLKJ9GjVzMVyG1cJKRYNLninsdhuQEgKGpnpxthdJF6PnJsrHUJpHQURb4ucE2BuUaK9rgTPC2C",
  "key40": "5nTtKx1SSN6Y28FmvpoLxPZeMvZ9xNehxAG6AtSXq5ag8B9EWU7An6vhCxasyv5KLrACfgDkQcmKkz9NPL8RcDJY",
  "key41": "2nkc1vJnRUDs3pFBceszJEQUyJNHra2vJNPNVNcbS8JFVmjAqtjEtPf2YUASMnFPnqJk5AdTB99rmcs9kor1snVF",
  "key42": "2761VcMmQSDpuc5cRu5k6yMwDwnUqPwzRBH8L1SxcWFND2pR8S7zoH9r8YFKWnnifywzbBuMXH1j2BHiNKYXNCLJ"
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
