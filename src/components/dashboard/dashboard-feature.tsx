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
    "3U48wGAi3skngkzkFH6obZr8ReLKLZhLFbbNvpxZSm91S6YxFZGVtt8yBjStyVJAziVVyZ1BBm1FZiFdGp2ep5z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D5Yk2abDsmaNoiHKRVCZRQ3rbPonW7ycvwjwt8nccND7Aq1gaD12CV4viCqEaRyE7wD92mwACT4PMp8ZCr9YUaH",
  "key1": "4SH4NHQK11g3erK783RXczzEQtPpvzXbXbqkVimnBf7iJXx4pchyqtFVzg8b4r9z6Mn8QR3XE6P9zED7pepBsPpQ",
  "key2": "5JpvBc71eTirjzMA53cBh5SFzRhz4H38A1pmXpoQah9YHYjuHbRmEjDz21KsiuedzFAMVDtzmxoUSp8LQkj66AeS",
  "key3": "2dgP3yppfeBf7HXJWPBtXr7gdFBH6n8ySgurdwWRGfdYsKfzgXrX6YybSneSJY1uyJa2FoHb2igvgpUwQgXvTdoa",
  "key4": "2R5xcbJKvKykDjZU5vxfdAbkvXUWBWP3PHeCz1xVJxntWWMLX6Mee1BnmHjyfE53P73oKTEg668zoKCqUe6ZiSYD",
  "key5": "5UxTFXEovCw5Kh4fUZt3aiVmcquaxRJhGRZ93AawnWGdk1Apnv2snM7SFXyniDWnW95hoZzFcG3JoBgYqxAaccYu",
  "key6": "F4ZuqbXN56B9GFbmvxwsDnf1VL28TwzAqudSfdZun1s1TPdiNMpXXnvhVP7u1E1v9Pb2C9GkPs1fFN613RciAeC",
  "key7": "3uNAkzLaQXT5PYXnmPxFQkP2m3b4frZbjms94nkwHdys1svkBTE1FNM8sWNWubmG8jZBZhnFabqbjBM6xf8AV86Z",
  "key8": "35FsojmkhzUnxexPrnan75F32ZkF2kVigcVa5H2WRVCJBL1Tezep43JTUg19y1d9tUvncYyDGnzGPx8rD3YfVv7R",
  "key9": "4KPQd5US5Bav4FijMkgdqQLtxrXpWcUabYBnFKf5441S9AfFQjKJmFXATG21QHerNyPQ7cjbPi1ByxKLXbno9irB",
  "key10": "4zjC6LTQutFgrqL7ZW4XyisEc2iXQmKzDemhVULy6mcFrPmqgEEzTU4ssECMSga7kb8rfxWgwTkeaXne2yZch733",
  "key11": "5xxzmYVTCMk59ehciu5HgaCGGQA5bf9ecWzxKUDTMaR2mB5fHAKsJYwuF7yYxxDMVeFgDLCmicYV4evPgyU8hjpQ",
  "key12": "gKDEBs78Jwyv3CGgMEYB5NhKfCAUz1qd3pP8BTTzErmRKKnXREtrnvVD287PSC7NZwSkkZghqAmaTtDKF5i79ms",
  "key13": "511Nr4uQ6YiZ7vaNGjSZKtbqVXCZoVdZoJNBVzGgfH3JD8AUU6Uey1rMvhCF597wJsTgDBUF1YeTUqzi9Nr5vjeN",
  "key14": "4WqzMwAPjWThQtBxqrDWMgMY335jgqdMYoC5J747g6hqz2BKF47Exyug6DQruaro6eocMCbUt4oKvbMCaNsoUYA1",
  "key15": "4qVpLmN4yqC16WDWfLFzgb2S2R3V79uHe7i4xTkATNAy2VZWX58kwZHQjgShZ37YCWihH4fUSgBu4DJGmPpENqUa",
  "key16": "52Db6ci11YLEcs12t9vJtLcnLHwspUgM47umSFi1QgGjJkyQZ8QXGE39rTeKwfBfhK64fR7o4DS1JxiPW85rp1dt",
  "key17": "4RoMGHodhWXJV2ELoLCokkxoBDXeewDwMrC47pMdzViMHBrbYjdswipMEcXa9prPqKvUPn9r656MToPMDKxEtWBG",
  "key18": "519oqMhkE9eEuq3DE6DFg9BR9UyHKE61W7hdAFK4zx1N27mkU8qz4LjYC2Sbpi8hra3VpeaQmbTZxx2rg5DGXWx1",
  "key19": "enLWoJKR9oeT8XpLo6gPTfNaP8iD9MXRF7ibQyK2guP4Eo4155x2ACANwcgY1iCjgNwSWxNbeynbsRFFNcrnfSu",
  "key20": "QYMjmPVngS9dMcEAf6nqCtxY6fg68mdozF7bSBeaj4HhZ9TFUg8k8SWTBhh4Z2am8rneUS6gmp43dgiLBG2jZrY",
  "key21": "5kQ32oL11sn12gweqWPq5UsGvHj82PEGnQ68QSYEUWjBiviUjeYTQqEUtLn5WoLaaAT4BZnjVnVGAQGXuJoiCg1K",
  "key22": "3B973vmxs1DehEEv9XRospZcKouS1uth4WKMbJceQM5UpmzMo4E2jbSXfDBJqffsU5ZtscDa83ZRHaFRbWAc8F6J",
  "key23": "22V9NjYKxn7VNmwj1undquDojzn2XCVrtVWfBsem17z5gwRSse9w9ZgC4r4LFgoqPMEa2EarYAxMZreX7fyCLadL",
  "key24": "3Pba3dNJY8K1b6nBAH5NWdcmNgVz2APZj22h97vVSbE6MMPrLe99oDKWFD8Hdohv3xPVcKPGGHCgs4GrVoxuNaGq",
  "key25": "3Mw9kYjHfLi5diGvwD9eVEShZh2yftrJGmdwzqNcTn3ybkMSWmM9J2rm2JHJcDfPhV83pyQrkrHsSYJ2vvveFA38",
  "key26": "3BCDvPMmPvmSVgDzd21SF8vZjVMK2cVzk6xVnT5pLr3TJs7oaJjciaR6JR7Lj3xyrZaKgVkwX4c3bmJqcpwKAhNw"
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
