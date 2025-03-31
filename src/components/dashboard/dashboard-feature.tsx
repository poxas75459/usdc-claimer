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
    "39vnWhFajLqJgFLewihm8yVqD4azTm91ez7LGZJjaAS9HptMc1FJNF5coHcJ5u5CBZhYeLHZU6EVDfn1fLUkLQUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mYwWy8kbRGbs9pP6tqDiEJ6bazEUKAwUCQJ88JgVhBMCrjWJmfrS2pbzkwNiW1KMT6MT6AXdx6wb9jQcQnfZjck",
  "key1": "5SdPxVr9KkkSe8ijGs4azPi2kSBVKvLa1t6SvU4YFaSR1DSuByiYboMpH5QJUeA5eneQkWMHgKXNGre3Hw8xSDi2",
  "key2": "4NXX78BbGHxWsxpfJyuBpjGeRwanbJN4svDRus1RgnJXkqyPByTyttTce2pLy9nMfg9Cd8WRWt4afgnVsE58xdE2",
  "key3": "3jRvg9HqUtnRtFTZfsfytbSxTp2F8VKYJKkPXaYpY4KjyAZx1Di4LesUcArpy9fXk9FKcoYBdwtaejUBM1x8NXtQ",
  "key4": "5kBCBZvmb33viQUMK4k2bhJdW3ck16YpYDtAbRKNQfxq3kG9vZwkihUzEtkeoAAwcrQE2oEzhxd2pAGLurturYR7",
  "key5": "5cwvgN3Ejj3XbbnnbAb73PP4jDqysvHPYvH6hqde99e6f8EjPscx7UecLbpFoNoo8rP7uZJQDtc1Fi4E7rNKLfft",
  "key6": "HHGovD2WgWRkymVJYfQKR5rfrMH298LLEc4vBPCB979z8mbShWx6xZVVbQki9sov8SnbXYUUibTAVyXQYLvYyCp",
  "key7": "5cBs5zu94qEZ4fL6NQEwMCUz15XNiZri2HHRAQoUjvYxzZqh69vKp5LoJHjpuboBbJB9RN3eBMcqha6d7QiSPrsc",
  "key8": "5YxUk14rgdAeEe2f3XcohuqJihCVKgnpVSUa1HA3jGDzf86mQVCZoWDd9eMNaokcsYkWRC4ch4AyMZbrayw81XNs",
  "key9": "5fitkrqv4mSJFP3pxrXTXESw3jaBZx7ePsvkntgkwWPfnFPeGWJpfAXoiEVAidvnqfV56m3nSTj7ZMq53fskAT3e",
  "key10": "46pZx6tYiKrLEq9kTAfDq2J19ydZn6piY871n5dFftrBrTFNSrG5Fj4kN3gTm6Fm8U2hRHhZvYWfaHLLWttjomSv",
  "key11": "5rBP19ouQKAJwxwJ2kUgxKncjRFv4M4kpefZAaUfhNhcKSnUZQf5zwQZkkZ6BFqyEznPwHYBCJgxwtiqDHKP66uB",
  "key12": "eShJpNVoRu8Ao1iibwSdDQR49roEpRjZZ2hSLqyVEWwfMtqCD5HHRYszA7RsMRDnZTibpwTjX8owTQog42RDxrU",
  "key13": "5GkjdH2Ry2yLmWhMnHhfkTBhenpfF7XVp36X3CjNtm2t8BrpUNXfjgWKtbBhRseWqZGVfJwMYkCCVtLQpwJr3T7t",
  "key14": "4Bad9hJpRoArzubjQ6b6pGnBUC2zUFtNwcD7cZuPaBCyyqZaU4MhCmbqP7ZNjWJbiD9wBv7LxnG51WBFp1XwpSKH",
  "key15": "27T33QfGwupLRYvyQJZv6yj1VfDRNhDCTNwwxephpcdq2kWm38RB3YvGV6zh6DmUeWSueZdnCwXz583EGWrYsP2E",
  "key16": "M6K394KZkMSmwTH6t3LBRNQMxwXWBPK2zxnDLK9XAU8PYUeiQ7mJFBaLxMNf43aRs7eDLXSHobNPKBUDqP3baLt",
  "key17": "3kX1kABF2ASktphmcyQCuvD5MmS8GxcEwwyAhoSpZzAGLYFc8nRnqfdE8BRxNpqa93MwG7rTvt6wCAJ99zzJruCS",
  "key18": "57MrELqePXrfg2uUcbj2ZD9Aup44STQnsNQatvf4WTTHVatZo8fRmgTNP69PytFAeFXFqKBtYRgeAMsRpfRBwKCJ",
  "key19": "4qneLAzsaSLZCNbnFfkciHAy1H9bCGQEbqn2pz9jaXp2CpgyuayiyKyoijVvHqYiKV5dxxfx4Lr14dVTePrvv4pd",
  "key20": "4euCD2e358TVq6R4XibeKp3WXUBWTu22jr8Uxuj4XA9AcVsX3D8wNjEkgkTCN1dcof8n9dsj83UrefW9vePfiYGd",
  "key21": "59ZxgFQVTpchTZARysmPbifARYqZVTNYsByApgAFcUFQbeJz161cna4VKraGGL26NXMUCnC8ch3db2ePk7GKVjDF",
  "key22": "57o17QtjRUoAH74bLBBpLHYDMMM2tJrqTDNKBm1ZhJL1dN2Xq6hCUmYRSLLE9cztY8bTGfukxN2kMLnd98cQrkDU",
  "key23": "buj9vwnSyzFKDsRfBBadYMxrEtzHUhBCM57t2fMoMkGcQQnm2HVbLzzx6wqW9MUog6RiFnW5NovQz2pWFW5WSTo",
  "key24": "5rptADaNwK1nAEBT21Jte56bRoZupoPVVUS1TyZunUNJZxPs33dnBGeh12x5CeLxso6m8M3A4t3UHBqeAcmf75a8",
  "key25": "3KEPyvnkCj9zg3a1FhQWS1TuoSerR7R1bDx2YkLPgdEBNM8GXPBHYb2wfPmmkeMrKyMc77A7ioPcuZsud8Af2bgm",
  "key26": "22C4kZiVC9x5ppAAPx1bST3sCWYgSz7XYiwPbS4SPMUzNRxHNAAxdrvLtpKoGAzsuiEZrRYqY3E2DwqJwerSiikK",
  "key27": "FBDHmVMYNxyEJQaVrqqyLm3QJvjjyoRtdhy4oYjgaGfB5VsUp8nCoPhRrD32aC6zbW4TPux9Go4QWxEhisgX2cU",
  "key28": "4m7MbsKG9Phmh2Z2W74VMhMRpWrhQiEhWEsUwVW5qDfYYf11FDdtLG5oR16qKXLh9oUmJmWhhQaFe2hd15ZWiCTx",
  "key29": "3b4XSJ7kcXHQTYoWjDN4pTuDDJYzVXqSkXWuKizuZtjbFF1FKF2P2X6BrwJnS5hdetaFeihAzsC1e49Wfc1hAdRf",
  "key30": "v1uhV5icsaLP3HH3NdtAkTHLzScTBC8QpZNdH51RJCydTQC3jLTf54Vjr55DubAR3yDKFXHQjuLT5GqeGz2vRFe"
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
