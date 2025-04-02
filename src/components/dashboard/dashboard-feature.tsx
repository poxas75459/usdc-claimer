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
    "5i9FyNhRNfuBeHWMYjs5ZPyypfTUSADz4EGb6nfC8ZAST7Jvms6BfWdWt4XVyKzSAP6Aa1sZp825oRLiwxDXb7wd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TyH5VWayfPdXPAvswpPMTkBRF9fzyRvKBNZPhzuxFGwz1yaNVZBtoK3VxYiwN8zQoyUfxx1ZX7oU26oWLj4qc1J",
  "key1": "2GHuHjy7PzvWD4hDryk4dpQEB7dnrbH4pdzinq6zYNy8PkKEvkmL1Jkx9dtn6QFbPEbivzi4bK3d1NzWr7QTQNVY",
  "key2": "3fEADrGf82jvAHazdRmzY7NGoJ3ABHAJpy4AcbAeRs3qh4ahU47wbVtSauzTtwwRumxL4tXTzcbWWTi3sD9UgAFi",
  "key3": "2HCUgbknbdqgTqWdy3KsLfPkVaWMv8oSkWpY66M6huP87YWgSQ4nAsj3FgWzn7jYTM41NuuZJsQJQLpYJ2oMHJCn",
  "key4": "2YkMu1ruBuRvEjMHVXUmW93CkDJX1azJD6BuCyNTMZ4CXynAd8ztGjWJW1FE8DWApdYnjjTyiwcwRPzeAsMYLAJC",
  "key5": "MAoUzB3SagXYvTLuESsQvavHU5n6c1vWsaiFAhb6nkGFNHnw8MfKHu1XespCHE9FVf4PMGCVn8nHdVgEuyVPTPt",
  "key6": "2JB62BapZakpQd3duGX2BqwUecuvsMKTzkY6Uht2Hv9wu6J3p9BMwoNcJDPaYk3nR9f9HUbC4CtkbPrvRD6HG4Z8",
  "key7": "FV4Er89Z8MGyF3J18m1SHtpet8pVXkoAffyHpkSRxi62c7C9VYg1UECpNWUiwisw8fmp4wrhmWWBu5rQUPKExpm",
  "key8": "5KgGiYkt9EbLo9MkpbZa96moiTSH9gmeS6dvJUdkg6JchnDeUqSA3dGL6NJqiokg43ikGXEov7WLd8E3Zp5Xb25X",
  "key9": "5zaqjQWZjNhkru8oYDVxstdDa1jmBq46sqh9Db4mhTgrFhuZYf43dwhmc8E1jDCeTTMNp6vyrKzPbzydr5uJK7dr",
  "key10": "3yp2PAgrnkccC7o1qoH7y7rmF5UQdi1M5Dmw7FxKpyoHyymMGgeQbopCn9AttLMxiJCe4BUZCUbfdwF8MqXXvUAW",
  "key11": "4pVA6bgcDVokeyqF18DSwwpzvidgi1P9y8nf4aUfNYVfyLDHy5Se4F728ErZLmX7kqBHpUMp3VcLc5nxotBx1HTM",
  "key12": "3QMnbmT9EToR8Gmca2Dz8aYs5oShABVi1qsLiecvgDPrsPod1fSAuw1dkn7Tt9tgWicpF6Yq6Zxvsb4ideK8pvk2",
  "key13": "63jbiH1fdJEvpTvZGfrFNCoHuxAKXMnABNX4i9xLPvAM2hosrJbB2BoB4RykQs19tssYxFxydMhGhno4dTFG4zDZ",
  "key14": "3vHdish5bTups9CTQCYppVynM8Qb6P9vU73bBpEVzNgq9Ztp96RNWMBxZ4p5cXCCuUU7ynkoKnVfDddzTDEWBAe5",
  "key15": "y6WYdLLpGNPGn4NFPstzHm4RGuM4nij38FjMQxKcVisgVEVfW1nsqERcfDac6cxtgC7fCH6CWCibQqNFLK58Ydx",
  "key16": "3NjD13rNV8gXVKRPP4fwiXy7FP8VXjFyLGot6SLKBixBEksifRbk6bbUa7VJqcBUsCbdM8ZRbs7KNFAPQHuzZG7U",
  "key17": "89SbPGSYjZvS2bhqu9aqTQwWtG1He1CnpFSXL2ZzjuiBtYnnfMHQLfLZx5SbM6zvVtrhMmUbrYU7SsWXi8ugroP",
  "key18": "3Ev6MBCQn4swa7Mk3XZF9J8SsjkB77YAyGJHQTHAsYFKVZr147ktxhW75krvYsq5dHscd94DFCWhRdGXmBr7W726",
  "key19": "2uRWBTmpSsMCaJLykhbbvyCsQN1e3jVFZdVio3DS4dsBF8byB23zZMkGDX63n6UVCcxof31mreq7YWGLABt2VAfw",
  "key20": "5CGLZ4bmTvfd2mh5kTYDS8hpxuLnHRZFUt228cH3tQBCQ8TGTuuK8ocaioQKjN16gDDei9qsZeZRAE6trTLY7YT2",
  "key21": "28WiFmko6v7hn2MCm7WLAMtDAEZdG7KAMWNKED9Y2ycRGqQqVU8k8eHA6yWVx3MuLUnNH8hdjLUdsuerJeesazfR",
  "key22": "4q5ybkTpcUxcqdddrRkkwzdPzJdizjkMW3ao5EiGurafovEDX5reQx4wruq9VY8Tu45TspQ7hzpJS7wKh2hf1Ny8",
  "key23": "xgwgjXsvEW2fzvQevrhvWVa1GkXYt56HBjWSoRXH9uDSrKpGdwyycTjztR3bjEiLXEgtoEmNL1hYX56h7E4iTjS",
  "key24": "4XCHxZtx5yrX6rSpKJuSDTHdJxQH32YyeiAaGeRgZcB2WVZBubViThAVapFXcggUhnt4SxomYjG14j3vWxRgBFwV",
  "key25": "2j2hLzQEM3vSPHjXwZcBJab7kYYrS1UQce3dKsw91GS9q5oviFHBDoMK5JSAfjRtyQ4MstHqZuJhFUZHUhWpQMic",
  "key26": "VRug3ARvptPfCDjk71LahW8RuGG3CVbPP9t592aemCUEgyw7YWKEGd1iWcrjfvPn5X7XejcvcL17SwCSM5A6CEQ",
  "key27": "5ggREXH8ZKRhsaALyPvpSkVZGZTiQ3m8ZimBJ6Xj5r4PABSA4AY5pFdKNJjHKD1291saB5MW46HTvUPpwer5vf3R",
  "key28": "3TcnpicvuEv9Ry7ghAzw2B8j9nuXbFHqXDYCHu9b5AifCwnnnJ4riqvbcMNegSQMB83vuGQiZqhqEeH71dHCmXE7",
  "key29": "F3E2GpEEXSZdPLv3Eaa9t6o5vpG4c5NoU59Znem3DPJiREywNR748gupq6Ufc5XjhKi9PSYJ9WMoNQ9tbTsQtrL"
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
