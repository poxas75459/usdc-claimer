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
    "4M2krfDjnT34KKmhBK5TtEQzpX8ZjfmqNarsZPsVTiJDEdaBAY8tHtKkRSuFtiFYc1XBXHzZ1jd7fovztZsMrmXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PcJuhWeQXyHrgvqiTog2uMGfjtGadchD3t2bLX5cHUeUGWWN6evUPtasKyXhdWz1QFfhyhfpwT382NCaWfq6Rc7",
  "key1": "2TfteLtWZguEDPs6r126Qxsxa3pUgFJEqCf2SLey1raPzTS35Wqpd6xkfRqsKkXWKxsQMX9FWrtUyo8LYjX2bcCG",
  "key2": "4LSGWiY82HzhhhydeSZnEzMAoB1RXZCSRtqyQMBxnpJWcMUm85927N6Z829U4Fvspve7bvGnN6SS8zr8ojqRd3YL",
  "key3": "3YLN39CVG8nDNRAsVpdRuqNfGPJjfC1PBvVXBUpchUDNJpk2zkVPw1oSBBGc4jB2Y6qn7VS5W9qZ64HzP9jpCqf4",
  "key4": "2VUFbRYweWcwGqV12yK76dauCeQU4SVYbDkLHVi3cq915zg5AtTLehqgey4DyHBpM44HVZi76gCDpk53VtgquMK",
  "key5": "3U6zJbeDayBhzVjCdTnHDZQeRNsdguCmReNtY6TCErpiNv2JB987winfmAZhzqo6TD1AFckGLtVDPDkxURJHXuTF",
  "key6": "KynJKwrkMZi4Z1SaEBrmYXMhVAQCx6guffEZfP36nv93voxcbwbC3CAwzK7o2zo1ZsaopqSRUKuyaqdeE8bJsbb",
  "key7": "3PtQ431i5Dzfcuc3i6k8nGH2rcKhbGfoBaHwmuzHkmz7G7aF3s9oyaA83jW3zSr2ZmctYjR713qbapDzHuGykZfm",
  "key8": "3JTdipeyfkfzAmRqxpRLrrW7vDWghvFaWGJGyqTpVoXhfWAyrYLSChNo4EwN1Virp7HkuBfzU1GHskS5gm4xFX2w",
  "key9": "SRTTsQmbWHcYgFQNjnsUromDfXFgtbbDjMGpcJ1r6qboTp2e6PW66Wa7vD1mirwRjvNrcC6ZwHCgyw1Ef919jK8",
  "key10": "2i1wwQUNxjj3BcDLgDPFDN2DvQpd2hZ8fmRisxJ3XRkXLbFRvQtFsPS3nAnxbjDi87nqkSKYEWxzf7jKgjRZycwq",
  "key11": "5pMfJMPf2HsdJ23rYWCf47uRktXbwDk3KTNCer7jPVzEgp82sGcKb2wDiuLHrFkKvkzT1UnCsdVhxGik2YQ7AY4U",
  "key12": "mzXi9GDGdrCrpRWj9u8W4qUJZp5VQFmrp12gZPiG9i6rsdLoLuVBw7EEbcEQhci1WST7Em8JgJWYjWVxR2TapkZ",
  "key13": "3d8wheCXVwH5GvAfGrxLHwyhbXz6zbhp3Vd4MPMonNGjikeEDnaqXQ5EAAVDtQ8PnRHV7FBnYyhmev6VcqUuzYMk",
  "key14": "izC4QR94wjvXJG4CrfkRCARf39867CscraitejvhynpgAW3P78MykVRAWd8B9YXnucNbaHwYcvUqokkSMZRkKzX",
  "key15": "sh59mQxJSr1c44pV8ridCWJHZKt4uqYoAhQGumnyZjR6siPq45FCEFxGFXXaAdg4LPStDorjdzwCee47kkf1ALf",
  "key16": "B9kFB5dtjcv8sj1vxx5TJvQJe4A3JTf9QhLm85AsNdMy2x1xZ1TPoHp8T5Z3zYJfLZ9gS3hMxQA4TVUrj8WBkbg",
  "key17": "2pNAVvkkUBgwHUBQvfvkjsFkWk6692Fhb5hSGQBpNCURk3iL7doqVQ9h6z6tPwaoefyhKvXTW7EupvQZXiqCTEUE",
  "key18": "5B1pV3C3DsD6nb9CX2UkZPSwsZthQkAJL3hJTwabpHuoAUAPifWsHn16mnf9yM8tEepYEUxYXQjKBuufWKfuUbQj",
  "key19": "zzEZKW8tZKWCZfWcC6KkCZ1YoNQc3xYdnFfGDR8hQhqQaW4UDfTKQDx43JmeKiD5TgkQ4W1Sagq1Jh5hCThb6ow",
  "key20": "4ci9We8UfKiMqki3hjjiY7bNyMdMaMTHsa5JFy3gT6QbqGhGVUSpDNWzhwCesDoa7f3GZvPfpypcH2QsiohK3b6j",
  "key21": "3nBzgxALKUuif4woLmAaJG6QL83VYh7ai8WoWJj2ZvYH5PipFFcnxX87qWzVacwL4gQamWhDfx1dWnP9C5FWCo7X",
  "key22": "DoiycishrqtbFd9tARFCUtKcTLM3Fx5yygCbnUX69h8KgKYPkYhmcY1qDNaDZ2puDuNPBmYcNrj6gHgVbvKcsK3",
  "key23": "Syo7tXD9XGh3Ar3BiwLuW4EvccPmoD92FRW5obJ6Ucafzr9j3efTzgfwBbKu5SuQ5Vztpeogk6FQ3ML3gxSEgRc",
  "key24": "3z7MeS3ZFE69uysRwg4vij8WA4r4UznpbZ1FRv2Xkwe2sZcSSMcySSoAcmsfC5XCMY5f4RgApQ5GwuZ9HGmEM7M4",
  "key25": "3EQDXP26fNm8z8wt7PFAnnwEetrKY21QTr7bXHx6ZLNbXFTatnoHCtudPRvaMBK7s2MJfwiUmWMS4KoXvbjsCpTd",
  "key26": "2iuJNibRg9TY7heQxc42r4yoTMz8bLTJkHX7YEswi4NFSnmbM5pStefLeoipnsNbxfJ8xgsF2yi6mDzYiXxhEU8R",
  "key27": "3cfhT1D4TLn3p6kJmHjaVHgChiaxRJuQ68VpteoowQdE2Tsv1nFVHFUMgYRRU5Thgbm6WJoF6G4ujy7JEpBdXJNN",
  "key28": "N7fEoEH2tVnxsda4FfU8SDHZXFgubsp2nAdkryHerz3LBTPZeYcTWYqscrhK5FzGH8k3Dp1L4H16anmqn9DspaC",
  "key29": "2jp4rQCjvzzdXiCiiBWwGGeGuRqWKjkYVno99zpS4zdF8CYaNfoyiu1jfRUbSfFqEJmSFZqtCp35s57qaQhL7QNs",
  "key30": "3jvv8PbigsMXTUco4TJYNcWddJZe14N8Jid7C7Gc6QWhqQMDibRPsBT8aNLVvexDPCkYGTvCX7Q3KsCv8AAjKbCn",
  "key31": "2KvmmBsANgeVhsh8bXPJqRMBCnaEYkpUS3YdztkkFZN7dapHx5DMuHZTRwge8q6uSUQNmkqR6pfEY8MHCGVUAn2Q",
  "key32": "67MyNRjTe1mkyf6hn6vc7RDaZGrbeFnubQkEgBnPeSvwkHCov1KuH5LJ3brrdxUVgnoUbjLFzdocdFb8XJ3tJC9M",
  "key33": "2Yu4zV7mUkoc6yp6WYV1XzFZykSoDotbNgENpU76fQjqQ24h4rWpxiKTCdZJNRvWLgQjV2in8BbtC9nGKznL6qzC",
  "key34": "3rsXkgTWGoCUFhR2TocUfo86BCtX5fuAu1MzCZUJiAxDoHqZS63BuMnKDwPsbLZ1RfTiHCZcyQrBhTkLiJtJLUk4",
  "key35": "4LVig5RcPQxb3CuoNCQ99rPmk2bxehVBWKX7JCfZWQyi57tPDYy21yihjNVakSxdiovaxRyxV6gpEwMHG64pRnHB",
  "key36": "3NJrr37sS6cYFJTpjjj3K3WTj5XrHaZ5waeBUaaXX1GGGWkhzgW1iFFS8GtanTcrGSz4fT58cLQjuRjVioCRCvX6",
  "key37": "i27wysYZ3H7ezjQRfM3QkeXmcPR7cqpta1NKhrmqc6aHSJJSVsyMkHJS91W7DABU7twWtBiSNQvCsow2FVwWwgE",
  "key38": "2fZYbTd9wV5WCV6AzE4hnNNZ67czsmidvgQrC3fiigyuo5k2KJC5R6MGhUWQL9uhiT8UNeLk7V7gozGj6cnWvo2L",
  "key39": "TJXxJ1PC5fSJBcv6yQzdTDmyAuMdWEcU6y45ajU2XgeJFE9zxxi5sBq6GeXY39K3ztFdyoRBfeR5AdG9Ry8tkRM",
  "key40": "2357GPygfmosQX4z7eSDcwJKAEzRz7LpqKyY6FhYCjXvsger7Qg5gcBTaJD6QKwGynzpDCkytgapg184SnzJeHjG",
  "key41": "GcbUsYFeaqY6C3TPZpAPhs8RooEbZ6DFjPaR5cqJaAoaExnH8bBBopwTMHkmpUNf4eZPKiB2FhLpcK9EAdkDe7E",
  "key42": "5AdNAqDdnqX2VsMHELwy8aPjArrDeiUPgTwWjPQznv7G8rKFSBGvVC9TqagaegAyM5MdcrkXQgfqfVmkgtVjqb8m"
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
