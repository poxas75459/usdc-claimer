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
    "5KVM4Wa2exSCRn9iCZYMhNn9T3HsEMehyWFuaeZwAXhxbjoq31RodQXDnqZy9KCcWvsRg4N9abRHZEvPx8rNE4cu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gJwW4WjQVJZGCYLecTE8HTkHrRdXxxUYDL9Fin8h8Vr4FSKFxb7yi4Ledo68TwPgK4ghoQd4U74UikL5hrHbqpW",
  "key1": "gU97h9eDhv7kegWu9uXyG1LFmjwLKZ9gGypZkudoNjcXJKPUKjaVacgN1ZQHbQScsTNjcEfi2ACfr4YA5SVABHt",
  "key2": "4xunn1hsmKf78RLq9ujWc7DdeZec3AerGgHwS52Gnk1NiZRStPdVFDah9nRKG1jheFMnSvghMb3xKiSm1V57o3C2",
  "key3": "32HGczTATpw5V1AumvYHsGZGGcztwBTvvpyzKozyUamRXNGDBDMwY8XZogoWm9fDGjJc2tGmdQdRom1G6ubhmep",
  "key4": "5ZZJD8kMJydeCX2WAzwtqJ6S243hzdt1p6967Rujnq92gRe1huZPCWNkjYEzCV4CSR4FRkF1Jqw4rDPtmc92euYf",
  "key5": "MfgBZcSk9oeryqfNaEavKfVTEXkYNJCXttSUrtp3hd2BFj8cHkdNNL6kABKYiXe5yret1GYXW42VwMWpUxAExdj",
  "key6": "2iNy67MRZQe2vd6goPHNtepBTfc7AL9qQPof7CuD4PZhJugFakLw9mMZHV3ruT3bxnexy8PMoBcfzUmRmshWFTg1",
  "key7": "32NqQb2CeicKJbThE7Eogec69Xi89fPkaNoAtthwAWYnXK6h5XXQ3UDoANNGRAn5MqGMoSGfgAE9X1hYNjbWAFVM",
  "key8": "2AuZ6g46oZjVDDWn7cpwZENtgQLa8EDz4cvubZf4mXxNJReT6eJ4zA2Fy2xCEQ2rTieeJQ3zLCGv9s2SZfcS5j5u",
  "key9": "5ppxC1u7ezpb2773uF9SMMEyYNDN4SuqW6PnG4Bs6Ncwch9sPKjjG5G6xpziV3QTTLMnQFcViqRgww1jonsMpEvP",
  "key10": "dy6CAgtC8bFZn1tPMSHvCficq7SiNKCxK7QKKpupbCosu8HPSmZNkTMpHJcGDRDSpiBzAezPJkJ1TAon455wTES",
  "key11": "5XYZU9xpFRZmhQc1o15CBiGH7SdGPVD1aJCvvo3sUp5XNYbF2ZjPniuwjpScLEzxQhBEriFWF6Xvax3cuv78654Z",
  "key12": "5PqrM5BjynE1xY9sCaFXwpp4dYNq7yjAiwSBYTxGNfRAEaBEu8vJur32bBMQD376QUEmGDGMQP1r59VLSYh1jmN7",
  "key13": "62HdxtMWrZj3qs9AFLtyaEbGRLaBGm6gZFmjCNqh1cfbffRL5XQ38qHwWevZhhrUqJ62w1E3SQ2Jmy1X5kNqNT7B",
  "key14": "54G8VMAew8KKLhSeRvqKtNFLddsHFrfVKCczDg3naMh4XcEXAUtm32szNXRUSEHDFZsCW9iSJd5z7r1DcYyZVVK7",
  "key15": "2MpBBXxQyP2sffEy9nTEB7oLFGYRM9SAu7LtvMiwQaTNYAQCF6pkAERXTYm4PAMJEdKRVZrUUUBNbjL2kmpN2J4K",
  "key16": "29kgXpk9wbGJyLp6wJVYLCVhvYAWQoUadqr7gzk8YpGLk9sGVrbHe2bnGoXU13KinbYDSgtDsSDb24z8bcFjrVvh",
  "key17": "3HZhyGQpczT4q7zUu1yaNU1MiDUEM9bxpVVDKQtyVbaMb4A6asz9uYmNMC34okodCdNh4EQrExWSGahLs8r43KB2",
  "key18": "3Z5SdpWWKwTd8bsWxr1bVSVfgkvhTFPTnzmksWu6C8wFB3mAtAJfRFXxbLr9MF4EHrKaSisJYpyhbkHgGmYXzcCw",
  "key19": "5Aqm3UufZ8FH1181yXuG6nk33LZbzkG7B8iJT1F21tEcpGMxKntwkh32GriE53gzp9r73Wq6B5b8pYcaHygVAGce",
  "key20": "485G7qBWZLe1ekjYJjaUY2wuZm83nxmX8jQaErS4QgBtbCe8dvp53c78g32rFUWU4U8oSMWJWrUEVWf2JYVkot2T",
  "key21": "4FWT4N6dgB7GtXT4uzomYVf76cmhoUs4gsdEM2St397uKufvmr9ijAd7yQWPj4Qaj86X1M2PaNVkHBTVKpCXgRQB",
  "key22": "3S269DbfyZLZqP8R9n94u8Xo9BCnTYsJvokpvgwrckXgRW2zzUxh4Cb5cfhbkx1c7sFcMuv69rKjigGNnag4j4Md",
  "key23": "3wX6raZZ9ER4yU9BVZLJxTq9M58EQKNqxMfMkXUr963Et13FtPxE9DWLfGmkXEdMd4XF8H4qwVTh67ALJaBk8Smh",
  "key24": "3gKDvrPnJmRCVuYvviorFpar7wuMx2JqqUqgzJxi67Fh5nGmUdiATmejJY8JcBc94xCNHxfUDdw4fg3NjxChiK9n",
  "key25": "2rygPNk8tKQxjotc7yb14UkMe7WVNze8KVLmaSqVQKtHbNVoibNdcKsoYK6YttLqpH2fQqatZwdhZrmZniJtMgXy",
  "key26": "2ih3V7nsZMNSAGQfaovGL8bEL4VdDg91tsjEXAym7o7aPhcBbXdskqRkmfgRrSLHSvFD7hWXzXqvbD4jqSpFF9Rn",
  "key27": "4LHMtwtdxGzE6F641SFYJeEpYM3UAMLvP73P4v6pnRaYSrXeVnYka5dpNJd7T13Uiin3kXuEb73xYm5gCo2wJJqN",
  "key28": "5RSTRVWmna3hKQiWTijsZiqgbomgWtjTL62C7M2DXyuybcfgLg8wrFgUvbzbqKVMfHxgLqKR2Td4eMfc7js1fnR4",
  "key29": "57M8jx56mEkUjhBAaVNp37HWeYVh8qvPXYmRNXtCK3ziph3rpvjg6VMB5ZXHfGLZF2CBEgA7QSMTJP15KstiWFvB",
  "key30": "5XrjAhcbVcPAWKyXUdRu3MSJWRPuyeJg8JxNokG4hfY6UGPBNewemobmLpAJptKmiHWBDhBVn24cvjBcHvz4VN7T",
  "key31": "4xnJS35z95arTzHCo5KpoZDpD7eBdq9Ei2Es8cTS4zAj6B1ntDdUTF49nhCWumoTWBmGG8vcpTVHD8smdcBbDiuK",
  "key32": "3zCZRQ4AeySphuKU1dstLx1enDva8Afd9ivDf3LMYwVvMyuGf1SMBardtnU5aWYhSHviBfifFFuQHPigv6wnuMYZ",
  "key33": "44QyFzmCrdiwczmTqvaZe8frfzTUYpkD8zrRDLyJJijWHih82G7FmU7dLwGS5bf2mMEiCFEbnRbjgo81hZq4iKTQ",
  "key34": "3JWVVavQtwjmMepMWweszHFsgpZAeLxu1qH2ZUxkunV6n8BcGVWrnrJJb6cP6RVgiU7Ss3jrKFVRfPhncBmZ32mn",
  "key35": "66zr9Mj3gS3vkECRHzS2oFRKfpmW2jHvwY1YSYc5Vq9EHYrFxvs4hVQHadhjS2dA6exbnm6DHGsJ4CUffhJt2dtE"
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
