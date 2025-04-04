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
    "5CD78tbFrArBRP8FYM2w7dCRKqFew4WL7MXbNGhG9MFBT93XVaPXxxkZRkpeHANuEwFppnKY6tQrDL17ASZTtejT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9QGYLA2Sp7vBgdqxpQESwA8p8WjFtEZNeVCxhYYg68KQbHcnjQrJ53NU8SujXuk3NS6JajYohg1qssUdC7BcCG8",
  "key1": "618m1juzyJHJqDyrLmLY7nJhfQrn2kRbRtv71HECDd1QWB4hgSQrTLJ26azAEt2kz7uP8XQyDqRDhNFXwsHn83XC",
  "key2": "4Uf3jpfSmRsY44B4VezbmrYrbJUu6pw89FAK84eVabLZJotp2owBUTqzFiZSFn68nS1WikhUserLvb1afqwALzMh",
  "key3": "5RMywNhG8btWJRfACC7NvKtswrG6kbH11SFFsikGFcfTnef879u8H9hLMdn7E12NCxFojm1QwKQrYERAiRwb6ttZ",
  "key4": "2v9tMjGVH5PV19ZQo2w6LKKpm2M73ZprNg8atTUB6PvKpqA4s7Ng1QHkBTtfsBYMj6TimVKJ9nvxCYonJ12KExY8",
  "key5": "2MkZSfpoTv7DtBrVezCnjybFJBe5MCtQ7s2WZsbhmLBfxt5PpgfRueJput1k5fKCzaHns5zHHT5qBUtwYefsNmdC",
  "key6": "5h1ELs1g5VetcD8hsS3qG73HgrmwgFpWFzdthWJCWG7koEoJo1VgYhw21uoLemem6oWaG4xDiQfhCLLdea9NMoTS",
  "key7": "3qw7QA7kvzABEaDb8MtbiqoSnMiAaypcSottf4HTpi7cLbbCiFHnKGsQPkYRh5Ex2Du9FWY7zEHswpqeFJrFv84Y",
  "key8": "5n4HB3AaNFSbWh1CtdTkZkp9YLYrAcZU6w7worAPPcJcQYNgGPKKMVYdCjEcnxZLJq9xifzvnqYRrS5oMa9MGdeY",
  "key9": "3DDXRs3KKTG8vExghHkSPePMjrAqcC13E4ofy7Vo9zWK2bwx7K6h6CXcNBxfzn58VRrtrUTW4MEnr1gwJtt5UroQ",
  "key10": "5ZyLxZ8vww71iXZXPAcRSxutmZvXtDrxQzKgA4X2tGG8U2uxxfYwfuWQ3nwM1vDAHy8kVJu6r2J8SDYhZqp6Yx8L",
  "key11": "2pRyPxvLP6gqB3HwCTyhEUnNf6mQs4wxSnc3fgCM4BnWzJ6kQbWcQrta9zSdyncertcnWZV8b6b8ubQKKffkohNc",
  "key12": "3YDg88DXwfunkdttfMmxigBRLb2fRWp3tJ2H2fYg38LHUNk77wxzSXguPZZ1YkcjHC7jnoFLHqg13bf5oz7McEKp",
  "key13": "5eQBPm4ZZRV8uu8YypSKVzefb3JLp3mb86bQqpNmPKoAmFDFs9FiZT1jZx3S1Fvr8q1UDfjtSkuHv3CBhdP4DpCp",
  "key14": "3hXJrxuLT5Kmxm8GAeuxWfW4KtrS39uqVuxc3exMJDwY6Qv2ghYeeSANm8ZndR9eAqSQJ7k1nh5opvKhSzDE3ow9",
  "key15": "2sB2kSpDaAweG2zZwhHCNgnmALzdWScugscbF8mKTX6dV1H6Y4jt4DNRBruisaA6F9m1VfzvG2mCJQ2fRLX5aXpA",
  "key16": "4QYAMuXK7wNuNBdDyCqFuYgsnh1PUo46enMZJc4ARzV6BCRrgixCfyNzRypTsiRSqaV9KfPTb2xsmGwiSdKfeqGK",
  "key17": "2Qshrmxt7doDqzMEkbqqXna8mEBa9XJtx6PGfJoWGuFAmdpj5U74JJ7fgvFP5wJxrwmtUL495YTnbdfH65tZ8jaA",
  "key18": "Xzt4Z8TG4oC2xFNccUY92PANQsDbkVrsgkfnhNFfmuMZWyZ1dYqX5b8gk4nBqq4aoNdstSJREU4fSntpZRrHxN4",
  "key19": "iDAkjFGReRWjrnrFX5fdQJLdtveCsEirrMNf19H6xySBBcbtoQLD4L1myLaTY3ZBerLiT1wVEvDr8k1vQcDhKvX",
  "key20": "3NqH5jh86Rdx52zrwmnUrymrWgz1EngmT6rNTCoKfZ4PbyoLRZbYULm5zd9CWLG4XZ71Mw1Pma2K8ageLMD2uhTd",
  "key21": "mgVLVsPDURozKEDoHGeLJsEtRfHN4jCbKTTrYx5mesYJ7Duj5n4PZGiLtNfkHn61y3FefdP18fQBu12Vu9s3BF7",
  "key22": "4Wh8QcuYHy768jFZqB9MCatd7ZCZsyd48ozKQb8Q412E98uxMnkbUWLtkbjxd8Kseh5B6Au3AQnQt5ganmMSJPHS",
  "key23": "44vyESgvBNRKUZRAqx2oNcwQkKRUFs4U8Bpop2zjAJXE65giFFM28jFsYGNNLtLbvCuMGgLQwJEZC5dpTyA9AsaT",
  "key24": "45Dsq14EZ7bYDWXhE69BsFpq89HPJV9UGqpGtE9p6im9SFGVP7deHgzXp4Bdpiz5PYdSYNdJ2NhkMn91eyDsPoSH",
  "key25": "4JpeVbpw5bbqhNFxGFMNAWN6u7mWs5R9jXdDqToziCRtwRioPTz6gHqRhZChra61KQocf4HnzcDPhc1Mt8QKnau8",
  "key26": "2fa4Sacozsaox6K3zgbDN9iZTnddKFBBcarxn7J7cjpNW67pEEH5Vw29aobm8bWTU55Jmjih19xSPRbpLdKC5oVA"
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
