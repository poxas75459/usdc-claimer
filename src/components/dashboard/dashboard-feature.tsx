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
    "4PFBU6biWKg1u4YheWzhhDPK1ZwtgmymUyvfV7UbVA8KQJEgXQHSQjQ9xt88CcW8QziF4uVaSFFRUtd2Wcz49uwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2geffhAF78Eikq1U44q9dwaGAuQqHcN6GGrpUiEe7L9KNLm8Ym8qGmW3Z1ii2W6KDrEzWhWT5FQ8SnvsxThKxc52",
  "key1": "2NQ3QNZFv6nhwYnPG8Q6KpvmvR6E9SMRfojg7aHnUAZfrxdo6WJjBRRxcVoMCifBKbMM6iFDt4X71pZNDwtjrDcx",
  "key2": "31jwUvG4CuE84moAy3cNUrP1oWA3JonsuTgHArPvWpS2UYnWfKfxbEJiSJMRKUZ4GHCpEdBjVRZeptws6xDxgm9J",
  "key3": "5bWeQvNnpbbhrDkNH9HZYS95wNWci78JAMcEonZPX4aK7vHSX6sCGWQ7Wa31BjpMnJDkLviJ8xe4TvA8kert5yA5",
  "key4": "3W4anevNrEe2ng2rRDN9Y4WEww1pVF7vbXtWnu5UGSpDD1VQpPf1sSyD3RMCHfgb7fVeChJSGo4QWzhYCjuxHpim",
  "key5": "36dNYH3XWRtnSs4Pc7yRDEXjN4eCSmnCa4TM3nNmLsnSYAWaTSVVGMBanKXtrog416P6GG8xRuefWSizpAZSxt1a",
  "key6": "2Bd9rhCyxahW2JE5LJRBdfrYm4AmYTLor5V3dq7xHuSWDm3xXbfKPoyRKFnhNBtPgdbZ53yZ7AumadAUaRr2yKV8",
  "key7": "39Pe68snTkLsrGy6DyYsFp91yHp6ML3jHykDMoBtt9MPDTppW5oTef3MZo5y7Rgy7YFEPWKGUMdm8s5qEtrxw9HT",
  "key8": "3iqw2Bb2k785X3LQznk4atFsBuBA9343mavj3gw815XyHx9WBgwfzFSqsgEmgKHUUhH3geudeVp7r5brfxvVR8zb",
  "key9": "4Xoiv11fehke66uu3Y7Jr4gP2bSsbPxpcxptuRFUqwcHkU81vACHmq5cYLQgujMwTA9FnXMrLNNBQjWaixGtAtY1",
  "key10": "aRhcEj7JvmWbomC6Vu3JZm4FLqDtCpgL81bDj9aeRwjdrqGFxpgnKgmNTtY7TqmLRVRnqsV7jAMfFZgFK8kDAW7",
  "key11": "2GqQ5SXEqqYCWwRq9HAtfB1NjNVhCKzN4Ro1vPPjboH7cRiS5S5dvsoPrCPLstotXzHdVLWVQrsZNsHz7jF1ukzM",
  "key12": "4bBSfPG9sSCV1KHBTAc1fsZ9BTyqRk8Yt7EuDwtBnxv5WynoGtyt25xRtkzeJeoJtu32AjoTd4jrFu1Dor5KFpmV",
  "key13": "HdUiHeZybi5Q44U9nYoGxcFz18fXHz2A54BLxKaVN69z7ZhrRYDiWDK4cv2YUyrToepPFGogVyS4R8ggSouGgDh",
  "key14": "5fZGutQQmSGwSo8YrTo4D2M15RBQ618YkBKKZCUaBqDqVfW21fH7dDjR7HpUtZ8LHvQeTcXcso4BUN8V3jqKPyTE",
  "key15": "3vWu2t1NtLNu2gxVfYLNkBdXbqKrSjNcJJ7WMWQegHLJmJDPiuMesdFnSnRJn7rX3AGQywJkYFXpDRd5YMGWCyaD",
  "key16": "hU7ngff8nzLCqKxZs5oHLJKmmfi88NBrTgDjcsXgEHXsZYQKnsiLcjxETGU7ybjK9t5mvan9Tpcj428rba1SPZV",
  "key17": "66Dn1SzXKvQcgJuym1Q2qYyxnRn3QZ3LppKTJUDa23cRbPycjRSUN7ZZ7ERU8qb3d7pSYc3BKLCkMXRaykf9is8",
  "key18": "2E485kpPwT2dfbQj98Bm9Kf4McKmYkL78PFUuSpeLezP1a8sCcCrM9vGj3zfKoVALCN4tKFjiaS4abzubCnRaduL",
  "key19": "4pAZuP13SVX8iYgqU1EiZsz4Mjr6LeJJQwK93Cb4wizXSQUctBbWzrSoeqcVUjWEhpeEFHN4JATFMMZVJkz2ACYc",
  "key20": "rLnM9nwktxa1dLtzXpNtnKGcs2fGz2nASPRCHWD1peaSudjuGetFCRJ1rB7HPrwj1KJ3Uysb5jdAR4EzBpp6uu1",
  "key21": "G6HiaPXqHKob2uruYRtM5o4FhZiF4KmwQSV6kDX3KMvP6mq9GTQoXUckGTpCn2Mc4FdWS6kLKuvAfauBKYs9ZtT",
  "key22": "3JU2X7NvuLWzt31EPQNJtZTqmjuJKKKgbMbnF8yVHoVdybE3H1pdAWphuXr98cYJFRF5K19A2KXBVagz4giYhwJh",
  "key23": "g51SD5ymeukB4mjD75XRG6vFtE4ufmWyJVk7jppu3xSaVcQhnQhUWT1kEw34nkeZDJGrXESRkKBDdc3GqAYQbNK",
  "key24": "5D72jDkGiud9iz648Gk3z3TL3HVB4nP6zEe4cKCM5sqDHCmq9Atb6sByaN9prB1EbLbvKbh9vRWdJRdBcMRnRGwh",
  "key25": "38ggnPuoGYEFWRRy5PupgUiKGYM9BERYqdnBv99X6Uxrmt8xERkHYf3KNKBH2xVuFCYXTTf4uVqujDkJLnw2e5Mr",
  "key26": "5ih6zM1WhkBzo6Wgmd46ywadApMDrAXmEEytBiKxn2PjWwzVex7podgGLsN34RAAugjyDe8CeRksFocKESGYfSAg",
  "key27": "4iVMvQVWSkcChnhGNsdsPzTG528GR1VRMemej8fWLytz5odbfw8PN244mzt5wKEMUYzCCy3YZPczzkzuL7r6KC6p",
  "key28": "muck9hZPyarCUDdW1fqVd7kNYnxWkVpec2KCT9A9voMqWvYhkerHCT5J2DEZkZzH125hjxm62Rj1ckpdfrBdDEM",
  "key29": "oh7kq7EGkNvhqpyyyjfScqBW2NAbYStmVcmANJgTk3CFexDgCAG59XCByEdea7U9HGXwW5rERxo6PAkKBoZj1jY",
  "key30": "4v96rCqBQxMJnDewnffGLnMciHmvPRNoAjVp1AJ2WfUpoHRKTFN4vhnqmu3b6HsnRrgNPYLXvM7qQbAhHTBmEvY",
  "key31": "4dgrNMU62GG8t75nTCeuSoV21G4R7GNvFmojatijpXmqrcsPhL7vFgsjnWHyWpt2sZpX9T2Wt1ZmpSvPXfJMZUdk",
  "key32": "2QHhy3a73CT2Xf9xJ5AAEvxGpy6WTkDAkrb7ikT7ZHmaygYANHuNJEzDc5BZ2GbcXTHw6n9sUdJtXeV4mqB2FSin",
  "key33": "5ucPF7V3oftkZrk4AE8QZPGfdFhgp61U9C6DgHsmUGtrCK72o27nh3s3MXWEY7zDRvYH8dFgBek19SAFPdKLr6YG",
  "key34": "5c5VeU6rg4MaJdvnxCnM87Zq9Sb2z9PeaWARGX9WYAJtjE22pyizkVn7oB1ayqkYpWqaEMJQMjZUw4nN3qhx1gjx",
  "key35": "4YCsumTaFB8ZLqW33gseQ6dxPGjnHevjRuqEgDy8gGXABfEa3ctpDBNtAxhNoVHghiN6QVCeom6VDX9UhNWQFpZV",
  "key36": "5wqimfmyef2PzTkQ1q1qR1cG7ifoEzUv6JFw5DLgrgAW9Gsjx83TqKy2Q3cv5hEdBNJKaFgDdpxsmKXeLtRJzNXf",
  "key37": "4SaZ9SRAewwUXqZ9YjpLf2futfbXerhHyo1N5b568f6XCzc1KoTPeysU5ZvP7cpF7DjYphNDaa5nrvyVXzjnKvRv",
  "key38": "4wz8fQ7ky19x7odrCrRCMPrNB3ZwzfhSAADBp2eao5eGKX9oYhwTuCKQwFKWKapt3p3iS3JfdbZhGHb81pH2t5YN",
  "key39": "2gWLaUFxmutNLokKEPwcN2wREonYckurT1qpUawhaZ3ofSioE71sD72VHMXqFZ9dAnV5c94PregUSSAy4qhMw7es",
  "key40": "4fnNXZjRRWDKEG4eGbYX9ZhzKcEJEYpib4Gbkhxz3JVvVxFnomDuh8pqoPrB9kUb86fMBBNcjuxAx8GFLWLeZf6H",
  "key41": "5rddTgkHNK47QwcLwyrsCwsvZmrmd8dKvk3F6LX8SAieRwhB8HDkbt1HJ72fEk8FBsXXt7u7911BTAZigLiRVDXi",
  "key42": "5vXvLB3azFrKMZU4xa59f2MRCaXCMBc2qmiSUxfmBSrkkNdC3UH43j6NcaDy3ehW2J3VAY4aeGLZdmUwtuc3uom9",
  "key43": "jwXxjczgJCfNfpFnTgTXoMgzLoNrAdNVyNJsKGZ5bxaN1CkXPwDY3bj9jaqLydzLHz8AiDFRtM2gYyZTXCzpVkY",
  "key44": "cgs8WkDxK67S4cXDxk1mcE6Mh7ELH5j79JwTB1Wy6FWXTrFhEvZD1bNa8JY4urwumfxnCKAcNvaCNAT9saFbsMi",
  "key45": "5DD7EW3XCQSwGFNccfejn4tYAFisF4KwteMn3n9Hn4svXTb8KHDDjurZAfa5CfJBA8LnrFbVivjVX8PusGFkjX1z",
  "key46": "39AVGtnPbvvVtxGA9aerKyi8JSd5VrtvLi2JZXfa6kwEP7T1LkDuhz1cr6rE7XwNakKFeESR53t8X5nNtavpp5Gm",
  "key47": "3WDRMhjNXS43PGJe5xQPJ74ihLjdmrTGGXfAiWMNAmV1RE25VJcXY5Tb1efXHG2eyYqdPQWdtfBxy3jCcFDiPauL",
  "key48": "5gP37tYqX3UdBAWz8xp3teZpHGF7hds6qNea3BJUafJDfRRBTGKxibUdxKJ7AW1oxFrQK2mphvob4TnRPTaaWtYA"
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
