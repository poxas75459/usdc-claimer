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
    "37RpqkKyjyhx7ffKUyLCv5sCRbLxVcgAumVMKaJNgTDh9yQM8XpAJs6s8kjC6ie9p8vwPbpsavPSa1xtcPCidz1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RdJ78c75AJRzt95DgkX8sEGgrDFQPNQhzeB76rFq2mgtyXsRP9UJEuhZXXhodDsznugogFFBF4Kj4fA6bxCuXW4",
  "key1": "4xvfWpox8j5wXnUinbVLy6QnorXUtwZJXXVGfmoNUP9s1jpzVZRBkUC1a1HZE9X2pgK5tAPJyWbpLJKr6UHkKRBk",
  "key2": "5fNuWXKdqRYiv6bsewQJViyviKg9mgaTKYHAUg1Ftkfc7dkuFT55xnR5ywsR8TQrzcpXjU9bYATW1spQwmbobKr4",
  "key3": "2NwG3GCbs9znbuzXteDiuHmLFBEvfuSjSB6nTeEh3k8eeWMwitUg56SByrhiifVKUatPiqsZscMQNaJ3E629Rr3U",
  "key4": "4ce5J77NuMnSJZz2xmSYZMds6qhE9NwvBFsiaZBgs39SYzUYagSBN3iH1TYfwHZxK57ALpzELZ1Q2GMjdz3q3Tpz",
  "key5": "3gDQjTqgTsrReScvZsC4S7ZcnXC5f2BritgjmnZwjs54wmjrR9bDwrUByGah3C3fyWv3kDY3YworZCdLEWziGY8x",
  "key6": "6pBaZYmJbkyYuYSKqjBLf1MwZWw2rzTp4fR96YcstKfgREhCNy7H2GWSVfAbb6yH3aD1vsjfrfrkvTN3k3WDvhi",
  "key7": "2wbLvr6q9LfsQmTGjm7rzhyCDV8vdjk2xjPBLtnfV1m4D94JXfXdFkmLSUJ4L31gth1wPpb4TR7Ji7j6ffvW6Wfj",
  "key8": "5GiKFUEV1bo6acB5zZb9FRsfHJ1tRwiXUpwm7FB51RzNLhhETQpFARxoGXbVfuvYznwUtMyEQdf168TtGs6g5vH2",
  "key9": "4SFvbkmuuFBPYRZfYfFGGLYVA5RkdVm2tnhk5TizPLghf32ccAHr2bMS6oSqQKHsKxGc9R3R7fWxMVqr928G6cZP",
  "key10": "2fD2KWictGdBWLVXLaXE5bT5udUpkiV4TBau22G3Kjg95eamHrfPUgU81kNmMoRMf4cHBnCExt1VypQECN1r2KZV",
  "key11": "5cnaJoWPaNcUUaaEUxqDGAHh4GtK1p6XBJFMdVUiegbThXBSuGanU5Vpu9GXvoXnXP5T3EFAEPf9LVAKCtdd1mvx",
  "key12": "4c6fj6xEGLwqYPW1jyrBNqde4uyXcawrCB4CT1GxpvKGDyJqrWtvS6knx4hNArBe8HST3GbKp91fTnuEE4vEjQea",
  "key13": "4s7abJtGFY6mNnwCAtiLWXeDJWW7sG9MCcERcWazwA7Sq9Gei8R2dTVV672HdcaK1KFjmqNA2LhmTGjr31GhYFTV",
  "key14": "66x9Ggu8xHq4WMu7qCcnEJWjpc1aXDKZrpHd9qooJZBKoiC3KRc17g38cKtZRC38hSaefVUYp3oqZan1oj11YVJs",
  "key15": "26tEVb89kjNUsXdC2a4jMzAxYmV8a8KPDAyVt9HMMP33Aia12D5jXsF3w5bskXP9V5GP3HKCktiN74skVfGz1GCs",
  "key16": "3amwHiXkqhbdsXbdyHDkre1rJoF3cx2PBgBe9rJ76LzKrfKKK7jEprBebJZB1WRXGfVtZmxwFNyjkBs4QWUD5s4o",
  "key17": "ymP4X6j239EQNXzUz84nVdNsuTKnfN2A3e6nSdCMjyTnbMxPDvPYZsmR7rQyNRQutJqgt1SmGMfkhMSmUfHocLb",
  "key18": "23yLQSgLR7VHe33rVKJPExWok6U72q9eAUyf1hwFLd6LftxKc7ZrjnurisyvWcPJ1dXvjy9TBY6QFEsKQx7zuayG",
  "key19": "mAdWAHHyJxH7XuAw12WPXYaJR2LAksZwXtZXBsZFxEFMMkX4pggyNvQrCMP9QYakokEbW5zJWkemGtpSYsfugri",
  "key20": "5j8dYez9wD9QfjATNYi6JFxm6M6dRf6KwQM57GKZnyDq8fAujLCgbVHobXpoeLbU4xwj4k2F6BiHgDipDnwWc3ho",
  "key21": "bN4UJLYxkazMqyHdVCBknTRGHdC4UdM9iQNAo3k6nRNhc3nWADvu2ktqkZ2n6HeDxAA4KTPMA45QJ3jZnwDPseT",
  "key22": "2aDvQAJgaFDD2NvCq6YX7NsEFuaPAPkjFphqkqcfYhHWVWb34uF21jgqEKBMvkwoJ7cL4mbZAdNhGgrPWyT7j6pX",
  "key23": "3p2C3tBK8Pnw4SfTA6R68CKVfbQ7u9fuML7Wkdn5BbSL1CNHBxzqbgKCkaiEciveVnkkbg7pMtq6EYqeT6Gfxc4C",
  "key24": "646DXracXpibraGMjuA6C6gben1ru5VsFJMebUXvZ9uqnSsFrGZCYxciWxhYtGxxuSxgq5peYxQkAdqoMbvo17jy",
  "key25": "3EyJrUaHsPrvnCgnkBA2jTHVjthd7HkbVzQMmz2EeWgMjSZYpvgpAEGEhCKPGircWtnQ3sasgbSQaxJdUhHZ9zBt"
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
