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
    "TNLiqnQ83mVm34oEob7QDusqYRzvH4iog1seLJ63Du6omURFszoAdb4XZkxspSNn6vNofPioD6akiP5umJbxQNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dAGYfJnswKwwcZ9HCMckNTkTyMMKqzJdjhNFGVwPZroQQSGewdTPcPBq2iLL9kQkTgoDbi6MGAPjo9aHDsma1CN",
  "key1": "2bWqXLgRadpEkFvSA1CCXLxHh6dcYZCt7M2YDa8mkGGzC43uyUHiGDKP5mu6Ei1mxQHrE7FWnYBk54LsYhdRr3Re",
  "key2": "2EgJKTbJDkV3hZQXmunynPrCxTgv1qUwyAD3j8cjUUmCLYSQQ9PwQL4d32n4o8VWMN6za495XQ4yczYMtittwfoL",
  "key3": "4spcPYyBmZSQ2Dfif7j1gXu6xaABz9wzNuTgSNvLT6oHFV8Mdv5Jq6zmmnnhMNd2TRCE2pZNoPziwCj4zp9GChVE",
  "key4": "2LcHrHTFmYngKnX6avBrvACmguCpgTWMT8HJaxiPjaAjTmHj9GTukq6f52uKGDVyRh8KUxLRDE48kYpcGxuUGovs",
  "key5": "5jnQtpRij5oAnzJAHt1WgbmuiJck4A5MpK1uBcF4zipsksLMedB9mB4aAWKxGnfZvV1hEeNvgMSy7bfj7XueZAcf",
  "key6": "2i5LbDxaWXvyu1Rk45qKK2WjQsEkLcBrA8Ud466oiWsvFkx8G66fk3t9SDpMQTfVsuCNPDK22ypwwS4yNnTwUxZ5",
  "key7": "3DUy17jyW7EpmD1nYK5dUVtPYaTZjufdWgMm2Aw9EncdF31ywsqQi5XHEr94WCCXerdWtibhUdwAgPbcMdQiyroQ",
  "key8": "34fK3sqqFg7W1o2fLv2RzxhHSP3344xdHeqjz5uaR4DcG323toCB9DGiLmdwMzssuUkGPb2DdisEvC2sWt4cnWDG",
  "key9": "rSqjGYE3VxQKiTgVZPUY1XCGQfUdweCTELJL1hbFcZGJHewF2xyHSV6upDo3K8RayWS7tjzia8oEVoiivZXDzgF",
  "key10": "2WUxWtYXtc7FroxBQWuaDXu1Ya2yF22N2vvgfdketMHdJVWpPsFNDu3Uxdu4c2gS6LBHv5b7v1mcenTseGfWAHUh",
  "key11": "YvNbP1xDgoUuy4spLkDVXC3GmMwnHPTL31YSH4AMNDq2JUes4EKAEqSDh4Ri1Gcu5VhuvCL9DCbZpiR8M9qUqiG",
  "key12": "2ebhft5y3pWc14punzBFhupRug5RuV3nLweVnn4HMVNfVwiYi1ch3xydGp4fYXP6zWUhBGXUFuKKzeAEMPGKhcKC",
  "key13": "2uf24qYBDnBZeXeGpETud9sMVSn5hf45hJspMNsfsqk9N16mVcgA11J8eFwboxvw8LAHTt3c6dW4BoyECpb6hmB4",
  "key14": "3n8e7LxEL1fmaDSyh6cp7ZiLjQediGwWce8WcbpgiwhRhrV6nTLdoqMAh2ssnjg9qHMLPNyT68qLNND6BaU8qhMx",
  "key15": "3MDrkq6Kcz1jhE67wDcti2LevbdhrEzYhwn6ygxi5gXwuDZ2FPadf6HQaE7kRHWZv5ANu2tijEgktJVGHwamh178",
  "key16": "5i8k3as4cPcEjzoeumhRnsaTm1tePACLdqDjbq8haxJ1HRXmPiVEzNEiGvxgBmWGaTN8YFKm2odEo8Q6mMRxBnTh",
  "key17": "5yGcsLLdvmYzoHe8BssVfCFoW8Ev1J5BgTMMQXuEnsCMMBQp9MS7HqoS6VrUzEoaV2Jpbv6xpk5bGmBR1jpr54gr",
  "key18": "EweNCfs8vDQX7mpT77z7zWpw5BrpjHn6WCnw11HqfaZtySJwoFXhKPvDMNmvMjLh2WT5T4422oDzbVPdkrUhTYM",
  "key19": "dsbqvSezMvpmmBu2h3UK1ifoqqgHWcD4y9H62osi4FkCUj3o1JUWpKdpHQbV81twVGDozdvq6PYbPc59TnqvQXA",
  "key20": "4NJVHEHvj3HF8vM2aTW4CaV8uPSba4vJ5GAH1LUtRQUWiqi2UnkYTxXqLp2HvPKBFvQhcgURdfoLLc1VF36jYqXH",
  "key21": "2eXEfewwGaxb4Z5HUxHGGYHq3iMrdAdi8vQXUZ2v6foQsBAvAikNTL3rmPwsJuaYD5baExDg64Wp1sEzSSJ3FABH",
  "key22": "3m4RfnnsCtoJyqWdbPbXbwzUeDWfbnQ4ZAcUeoKkabSsz5ErWQvDZBnKcgCazE2po9n85YeKDiNraAK94LmUBMbj",
  "key23": "4CxobW3qfb2vtBqLk5HdzGXS3Co2Y2K8Yd1DaR2kwrywwEYdaXhR51VmNxBc4ZVmnYeMheChkNBQR6Y7vjbaFfoV",
  "key24": "4XCxWYibBKib5zkj3ih3DyXSQe2KczNqk7shg62ExUWpVFWr5hq4bhqXGVhxv5FnJwrNYWyPatUQPjZMsjAcgzXm",
  "key25": "5ko5oKCKDbjkvtiXwjoD7CMCb3NmoY6YpasDugqd6saq19USgPCNGuunYpHCvkkMZWWaGUcp8Xq58C3i9Agbm7Qd",
  "key26": "4gMfiXHp5qS7Y7XX3z9Wqd8RFQ8mBAhoaBqQumjY9rZhYmDZHTMKSD7Qmzp2yu17RQbPyWexLCeB2Q5TxAirP8k4",
  "key27": "2dpVE7qdEAHuVnGJ9o25J4Gm4DheKvW12UfudcYboHN84m45awSMbMnNMrEzGePC7eLYsufNDikt74349gyWkuwH",
  "key28": "4UEa2ZBToTUqPXuofCs8US7PmYRjZbG79H4tgbj2Szn557KyYB1idwcugcZxrSBbsSudkSGNF9FXYqkYaoZhnDsm",
  "key29": "4CVTy1kt3tV5t6xh8m52mCbAsgdmMwj9gJcuPWHh77VECZjpccwSmeAn6yoUuVgVsBW8H7EunvXWVR5pttuPVV67",
  "key30": "3wieSU82QLRCZNxUxAXbTVMSUWpxyVYB1BC65vdvfHvACjLuFbwFvSAxvg9HxCmLeugzUeryWYXFsdjqZh1sZQe8",
  "key31": "4EKxF9t6rLdzU2dq8XFTqsGpwAFDjvF47ojGvaWawovU7FerD8JZMRM6x4s1cGwxEDjsrVKks5eX6vjY15oVTesP",
  "key32": "5yHy5GQuXWrAjU5Nw4WwfAnCaFZyTdSfhmeaGBdBFamFG9N6fpwDGSg5cDL8vgybGn4VuvFjDrmHJ8mmvoNf8ro5",
  "key33": "X5qxNAAxXvqPM3t4oQFtzBePUn2aVUJD7h5qp3Pi3eqC2MGy9r3aK15tJTiddbzDwThqw7Y5yxfUjtcnXKFcH3r",
  "key34": "8QN5Tj3obKwiowz8T2ig3hzqFnn2Ys4atE8rNwDUYYXGnHNae48tvLfTjtYKTtrdHkvcF6WDS1NeLKfpu9HQV4g"
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
