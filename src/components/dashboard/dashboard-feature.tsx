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
    "kz35GFvwkbfNek3S6dAAe2MYqVHQNZP3PaJJB9DCx9aLfG8q2mRvTZwhKPg9LbDXnSP3S8m3LJT9ANFRRAMHq6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QJZCyMoKRqqDr4KCCTBL2WcbuBuez3weWKDvyWvLrraygRnizreaqvCM2dHZ7wNQk9Xb1xdnTDwLWQZw5m7Bq5g",
  "key1": "4cTwjFPAHkonocoJwouqWmijfXzxgY2cBhdgvak2moLBU2U9Fp1B9PkwPDeNM164dYao5HbBaHcNVrZsSmiLCaUd",
  "key2": "VAnbZbeYR5cYmxNZCTbg6Yu2FwMe3h6F4vhj1J8adW9TJfpv4tGVVhod8x4RFRcUegkHZq3uskKnFRYfXbUJatw",
  "key3": "5DhHWonMqhEMGMAmpCFe6E8fx4KTkui6PzUUiZ1Rn3DKrHYeutymGzvpsXnM15RcytP6ZGuM2ZF4MUpXkNN23N2s",
  "key4": "YSRHzs2EGzpp3aB5KPmFhC7kzJ6jvMFBYRq6LEzNrvJTe4YigHhib4AYTt6jLKW4d23fEo6pGrgi615R2kFzYhg",
  "key5": "eiSuNWyDoTj7uRSiJHZGcmyhgLYK6GM8AXWYC5Vf3hWvnNFZeggjhnKrGXRLhSULJJGEvTBXjvWRdQLz42eggzW",
  "key6": "kyrkbUzKoHLu15DrkuHjay6hBiamvHaqGacxCrPyrCUD4Pfnr7kvjC514pWKTsYkzSVJ6qPoJwzfcdkY81SKRLV",
  "key7": "4DgtqLeWwWgSobHstouv7CEbNDLJhKQ3kGMKSbCQNTpzwE5UDHT5anY5DWKj3kWGEZ25eMJhNoAQB79EEEhHRRi6",
  "key8": "4Xqd8xXV7mkP9xx2PaFL9fB2dAQJ7qnF92iQkewP7QU4rn6ZLwrjhGt2BGN7y1FtyZHEiJhBdbRVp6udzTZ88oZu",
  "key9": "5uSozM1YHNtKtdpDrTuo8X1UEBh7TdyeG1A8NYvqPCHznCfYfGdR9dLwnxreQvN6FGVUGAkjAju2UdnbetkXnHD7",
  "key10": "3wZwevWxa64ADAqkgd5jPhGt4wC26MM9haKhoWmc4D3JKqP6eJ4mTeRtvQmnVqY5BJSKF4YjTLbxHQjWamP81Uqu",
  "key11": "5bUVF2FCbDtXVPcp9UGNRG9M3HQeM6MAMtKQi243TFkPKreekNpPicKVTu63JG5muPe3PeUp76NoDy5RTqLvCrkb",
  "key12": "5daCJx9cpRMEAzJeeto2LC6WnuYaPnfnTwN87ZkAfoADhuw5p6TvXVqKkqr5yewYKHBDkGJLnvKzaDSVyytwxwHh",
  "key13": "41merNoYhiKMrXifEBgadhRSNKckUtULYnqg5StvtcVzAMKN7rnnAgbyX5duB4DF3twvb5xxhLiUqZx84tVV2GqJ",
  "key14": "XFX8cVsMEUs1UzCP1yWqzXMCxsweBMQtfaiTgQX6DbUj8ennmrLUe27NSHSopXrY8xdbrnG6qMVGZ2hQzpckfXG",
  "key15": "3ATpHRkyu1m9snELE6S3oG4K39ygdm6xVGF7ax3VGJHo8PXMet7utjRYHTch8N3L3vyhjNHPHvMdZUTDYbD6JAsM",
  "key16": "4B8wBmW9C2TSPWjMUj5r7hPmcmg24yvzv44sHurRdj887MUwfDc8R9NbVohE8KoLZ28FdWb1htrFxrdGoLr6Ffad",
  "key17": "3gQiFyQbKYFMv1e343vr2LMScNNR1Gtz6G5FF9Rsc6xYG5GyjgD4TGkpov9LrkTTJBRc5buezng6VmqGPhSwDjhg",
  "key18": "p4kf5uuyBo8mg6bNYw2Co9MS4PuagCMdHzMXeYPAZXRjWqyQZKmmmHkc5SrMJxcwkEJFstKMioNERwcC3F12Ms1",
  "key19": "2nb5piFTLigj9A4BTzL6WdV8uHfCgEvHTNdGarA3hrAcdsDkgb9J8Errxzum1RSGtvLUkHRheQzg6YbKptG7DiCM",
  "key20": "5GTfr9EKHXzXzWh727pXkGjUtvXun6qNJpet5t3QW163irk23NYyZHZ5XC7FsDDAKCMe9A9TGxUsr4YmdtWhiWA5",
  "key21": "4iZVfJG88mNXni6fjRWMo5Vjcj9YXYSR4G5EVuSWCfJtSW7B65Pyo75eg149nNyvHuAC36usw9AuanRwHxPkhZY",
  "key22": "D9hi7FNTxbzP1H9BosAGFZhRAtcMhkWPadWrNdsuEoG4CUoFU8gaLsSwEBpgrgNadzgXn6FEW86ERc28xMiYkv2",
  "key23": "59RUC1ugJyzM3JPE7Dem7KocKHhy852APomc67Hv7etp2jPbrve7GGzuVGvW1ssKZPAWDGhtSRecRafHWo6drfpQ",
  "key24": "2UGcASdnSGBUS7Rdgh7m9NbpYfYhzWzgA8kkYqj9a4ET7uheTR1ahzuEDsQqXoqfF3JtwsRMF9F1GpgAjm4ZqQQb"
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
