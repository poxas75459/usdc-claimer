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
    "mHKVuNuAdYCPMC3XXwBqe8XfrXwX7JeoVXk1sjuCrisTHbJeovpqkXJN1MLjm6pCub7L4QJs3o5uEmmtakFzioy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fC2WVjWMSh6PnpoNYSdj5uQ9QDpaMcQv3Ht5Qz3iJyicUw9geeq6C5rBtrf9S9HNu97fp721G9QJRWk8gPPVvhC",
  "key1": "2QHF2JJn7Mpce2cakCWfwGT7hfNk5Mu9uwYMvZpKwhdY7Dx3WxreUL9pZX4PVQMU5kpQ6gDtTHTngT393s6rzrmE",
  "key2": "3WtSVC6puoHFzNsp2Uu44XLxErJZb8XuxH7W6MAzjiJRTSJ5AfXqnHHhQqUUBNGgM7qnWbM4QbWPViTTtfgeb6c3",
  "key3": "3BpLrecqoXoZxjH31Kw99ZKFX8dHY4Ru2vgbEcwwAzfcXYXbUKe6VZhcUDhH7pCtLhRYBfwWHnofgXxYkDn1XLXN",
  "key4": "63agm2prae1F7NaFRPFmLeSSUyvrETw9yWcau6GMVpqxHdHpp7B4aeTKdFbexWqTBB5r6ofqex67xiyzkY4X1Eug",
  "key5": "2mZfBp5tQNyXQVs2FfwSuSqxBRiipEFAq3HaEomD9mSBvR91V6TLhjNU5fnCPjFVvEypgpxeYoBboCPbNphNs8C1",
  "key6": "5MkpWaynGme6JU8utgy4CMLMNFtzWm6dsfjpB8LjiCfRSS58ymTt4xj8Xa5XUkTNyKn3QR6mzZ6RBHrg1VV2652p",
  "key7": "2taT73J4WpKcZowRHGTkNnYk5AGGBu31zm3nH15HF7MA9Zgn1AFFf61bCFBWHP5i7dq3x3ZuBUw78BpBV5rBzDzQ",
  "key8": "Ndb2dZZpF2Xm4PSreWkGUtC8x8ZcTYzuCusfbhLr7JphJTfRgbzGgcQgdSmQW1BWDnwbsT27WQR1MQ8oXR2Xxoo",
  "key9": "4g8C4KqC6aEH1P1A8FH33fZgBwmWChnDc2RwVEXcAL29sp9KbjYfzPmsfmFgsCc8pMc45nL5D7YgMo7qdBZqMv5p",
  "key10": "4i1NbARz9Pu3gvtabedukKCAn9tx3SbgtY7SWMP8FUnGwXKXNxUS7tnx2PND5haHzWSfLA4nTUc7ywRMDoazq9vS",
  "key11": "4f1v12tgUR3KhR3ouNdFGw5UZ3RBxfmgaXmMyJ1fb2TNTz2qjEQ525eDWQGuFKd6sRVM16q8AT7wQduskDYSyU4N",
  "key12": "vVkLzJBaJh81DkYipnNujvmND6g1YRxstwf4PvuE6EBYD54ji2L96GFZ1xN5RfQxoZCwHdiWTbysnykzts2aNU4",
  "key13": "2CPK3ffE3qvYHVZ3phNTrreFYFZ2YQ1UDAccvxd7UbkrKRoFAj1jKVQAcKMZpwQmr63vNWLjdHixEvB2Eav3PzWV",
  "key14": "5WsKvPdMWDhVWZEv1T8BRnabJpwVr3AomeuUdE7kY6sTybipgj8tGkyXb58ynmCsUiRTHpdCtKCEWK2pUPZDDPd9",
  "key15": "3UjR68Y76cfH3iGPAqEgS3yx134jzKhoLYVEghHLSWY2jEs9hfFSqGsYA6h6qRf9vRzviav9ZkWnYu5bmUL4DJgs",
  "key16": "4JuZnmQvY158BEo4dy7vYfQrg7bLKLbzumeG7zUs7Dib82bPrvZF1ZLcetC3644RchoZB3uRa469WiC82xn5oTsA",
  "key17": "4kif9Ew3zaS7bkbtU52sWrjwi8iRVCkfKi7z9xPt5gW7pSr74msQZWvgDiwuQKCH8nWKHiUBSastUYu83bAw4sMr",
  "key18": "46sTZGSc5UYXR9htWWmEL7Z4tCejYZjJ5gNQYLMDgWCwoipDxARQmEdc8kNF8gZS2j6B7Gv2LjTVxgNrnLAZdxCK",
  "key19": "4uoSXcPvZjY117U5aHqHwPbeCzamvVW952n5MDWukVHKNUMNGu3ri8jgVNbXLCASYs1crk6LdAQWZEWN7vdsu3FC",
  "key20": "5CXbMAzxqRsvK2yX6DFmUMHMTmrsMvbVT86EoQN7DDkTTZCuS2U7cFyDRRkfW3uJJ4MmPQD76yJ5bTe3rkWhM1jz",
  "key21": "3k4snpXRvLspiRSX4eHnpiX5w2XdHX6qqTRLvne1oHmr8gf6QGoLjcMuEEqRzssyAqTfhRB3WKzj8qpccBz33DNn",
  "key22": "FWJBQDwccpZSKhezyikxEFASaRnKwnLPo1ggZNKS3HcLjtUEawNc72x9xTrLridXdbwiGGLhoTTt4JKdq5KLiSy",
  "key23": "5Rdro2nnpWBC67ZFsvPNtykYoYxHCKNSnaje84qWZjkU3YapWhKrMvheChXL5qA7ZwtTTeQf6qnyH9gq2hF4crqY",
  "key24": "2xtC5b2Hyc4wzs5vLPjPWnJAaX14Byw3f8mDtbBjL1sdgzePiCKogarFTsJeseWN43xs3JKih4PoeHJ2e3pYMkr5",
  "key25": "64dgqoV7tesy56VZjxyTYvLj1ARHpXJup4mhpfKvp4Hay2K5aJbYsu9knZcLLHYkHLaP3C21XrXjpJi3JykT3M5Y",
  "key26": "E91QadMkrgPJXFAPQcfeDhFTT7T63djKUmKtAM81DFPUp7aaJ7htX7MNFeNfQDSwofkupoEhHiqhFAR1qQNueph",
  "key27": "CrCa923Jrw9Y1xCKpHGZ4YhigFDnoBqGRUnCfJ5YkHBTFCTAKg1sNVsKUovCsU1Y8W66YapYtxV8pEXEGRQwoJd",
  "key28": "5mmSxyUnshKwHCRkFyn2Uwm32Zca2QzoGx19d2AixgnoCQ5WGyc8vX3tZGN5i6e2Xcw2p4Brf6GpsdftWWqjFmS6",
  "key29": "et8djQcUAB1eshBZAbcq6UoLgXxcC5F1X2KCYiDVH7X4eRkSggCrUnErNuVxoWZ77qWeZCaQKTa89XpQmAXqNjb"
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
