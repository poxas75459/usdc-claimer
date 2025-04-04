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
    "4Ac436Zaz71JG9gYBmfs4tpQoyKYKGkGDUtz6ZUEGYjruyMRVnMz1SLCby7eBJ2qoBtXqYXEPTc4KLZb9X2xMrTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H2SakFVp1sM7HSNQbSEJkbXTaZTPe2PKnau3UoEJvJ3W5Pfq4WSQwEzsrcpWGxjTnbmVdSh4CFqxV9xcQLHRfBS",
  "key1": "3X12XQkNyet6nwQwjzJDiYD23BUTmdNXBNNpZYpxroJwyrtMtwb2jk98K2j6W6YS7QRjqcTsirJy7gU9PLAyTpPM",
  "key2": "qKhhBAjbeeRQxuiuQbgppC1DF8szE8PLManKKuAHaSpX5AeVD2x9159hM2HizPgJAMGVFENuMaXmUhKGHd5EH7w",
  "key3": "3bUtsQn8mJTnrXHTbBtF2A1AfiuFqdXZ6z2mgsPcP2Cx7wscopE75ijdn9AAJHG2CKAfMwDF4PAGtF6zxDeH1CDm",
  "key4": "5EtDhhaJqTovQsAqP19h9swPDBG26KZ74ioryHqMGk5is2qrvYDJb2swWfmXQL7tACY8RA41jvT9HWwpG9ts5N5E",
  "key5": "t7SSKZS7C7cLcakvnB8PacLaTUav6jH6GU4PKRyECkg21QQEhQ75WDmfKSaxPqWZvFRUHhnaGD6P7U2Eh5Vdink",
  "key6": "mnWdXhy3kqUTS68h7eVhk7EvnwouR2D8SQbbdc6yvg4J9W2U3HRdyd55yJSwZiRmBM22cQ5G73LZV3viPQdZg8q",
  "key7": "32e4ehi1geS8qXJfAdvp14sabaag7XLfJywth5ez5UvHRSjYLzYvxz7dRHNkfXphwasGXijY6oaYcdcbRsyK3izS",
  "key8": "29AofjccmrtwsNJkDFSdcHn4YQx97uoZrEBF5i6BKBFtfAtzEkttpBPV1c25R7mVq5sYswKvY43vt41LxM6HV3zo",
  "key9": "cX7PE1GrvTc5HeMExtHDSNPvDQ1xsBM9hChH7f3gSignpuSJVZHupJBTwHafbUD8gGix4MR6QRwbdEsuAPsA6ZZ",
  "key10": "3PMiCD6eWZEiQXN5K7MHqWU4CQdmtcdjhoJ1pjEJq32XVeJpHjxXPE3op6929SW59DMuYaeWGs8BdHRJ4PySPJXr",
  "key11": "233i3PH5Ph6jwqPQBKepGUEZ3mEnmSr8MNWe8MMsgvu9zykoZoQfE1rQgNRmiavxoRMygWi1BTmuqQi6h5novsUQ",
  "key12": "67d6ydyhiQgok36gtK1gQvGTiAmnFsCwjdv9Azc3PKiBM7R5qKiE9g8sN2boEJFs8dLvrXvGAJ9USsmyWjHxdwE3",
  "key13": "tYaaugqLQCe9r9cXBFnsznkAQqpYez8G5AW51EhczMioty8dJdPUSgSF953gXRPS9ctXYirZZUVX8G84Kntqwm9",
  "key14": "4kSNb2Kc1rRqmHRRaNp2NAopBuJVJnS6pwCJbiVGensJshs7qUZE1HsVTt4BGwc3MriHUroczXaD3ytHkYmKK2DL",
  "key15": "4nMpkG9yRcaJmGhnCzk9mnWaoQ3Po9rrh2dxpcaNwCfGXh2jaVenT1G6iCh7HSL7Zqnb8UfCwM7uDBLcu9FcaoLv",
  "key16": "33bbb2zTy5cjzefwahgTXDhJQjvQroD4oTx5C9Wq9hAmWxmhe54UgnqqMTQLt65XY2dHbhCSxGYHqM17m1rNudFw",
  "key17": "5unP6Hk6C63kYEy3DS7qKsLnTZTVnuZhrTMnZW3bBFFrEwH2RA3HgtqQgmTRsyH5oc41v28xXdck51k13tqiG7pd",
  "key18": "5DzDKGjY8CCqocybmPUAbFsvoxZugFMaJqqGtDg4TwfsTe1H4xZ3s28LCZTCx6rSkKsVjTnZTRzuNYSETamNQ1dn",
  "key19": "EgvLZWyAbAiW2bFPXUW6ojwpEtjPKPtjobPGoJydZk8GRJVkT9Jbugfsa5bxARAnsHe3hqtHHSjXsj5zi3d3JKN",
  "key20": "fz8XLdG8unoEdz7oY6nosVCstGcxhUn3ma1scqmofKduF1RU8F91Sss1UjbRhvGETiJHryu5HHD1bZe3dPKu4Xm",
  "key21": "9N1y71nbgBGXtj58V98WCFTkzFvCPry6yUfQgmzvXKD4WTXHW91bNGVR2iaNfxnfRa2RmsHn1SbYfMJpyPdZNwJ",
  "key22": "2cGFoZmEGrcExuwSbouqFdSadxiKRd12tyQwHzd69u3HxiSYgVrhPkp1TsDiyWoJCMNHLc314bPkSTBwUsTXiFRR",
  "key23": "3XBqq9LSpdierM4i6TGFvAB33YQdAhdhybsuALcSRMuZbcRUzkinbBsuirDnUXZ1sQLLEMNfFx8FK71zWbPzBJ8u",
  "key24": "Kmk2PdHR61G21n2R4Qe8LorYwDMYNmot6gByfcnZX9S9tXSFzvJs2orUmXV3KyeNsARHGQrV1BU7DdRPu57tDDv",
  "key25": "4v65MXUH8XRDb2Mmo3RgqkQ41k2FLcwu79h1EmeSNSZpXaparU15oA6TkjLyeczW9JAYSS4NKJiGwESwQUBeTDg4",
  "key26": "5GsEFbTik6AsgDHVg7EGExk7CKaEExpmJeRgRkhthswkZTK1gLv4gfZ5K5SBhx5S3fQKZyRvKuZjrPFQ1eb8sj8q",
  "key27": "2UBMZzPsGswdNEk7ebwMin8iRmACjVPE88aG2bKV3aHWsVMBbfNrkNj6E1bacRXAQCuKjeT1kpnKkX2k2r9saHTh",
  "key28": "5V1uXVNWivBUHLck57kFCyQ4rFgrDffN2y96b1vJAjaXY9pDgZVrLoXFqL8dK96ACfgXtLnJ7z8DxzkCEMDHDBDm",
  "key29": "5Jp2LL5Kk2LJwqru5fLcMjToN7npr3ZzA9Q8tnPQP6b2Z4iypE2pE7EZm6R3vLthL44LW4h8dufmCb2GgVo8Yp8H",
  "key30": "3ZQTpmphTtYh4z7iY7i7wN6rVfq3ZmxezfEYjxvLmjjYDrQM4wWYDdDnCoVdrGDM5e96fauXj8FJBUAiEkrtwdnr",
  "key31": "24aTSwyYPnNdgkVXMTVBzSumJSRZ59csHGaem2zgoCi3HCKntUrdPQQXvAcGrQUuDGzcXLgBRe6mBju3cTQoaYPc",
  "key32": "uXpim5Su3RgZVArpRtCg5Ln5tX3jR5RhcWBkokqFRMqhAS2WDhZtMGXrUaY5D3oSumxnqY67Wvu9VCdGbYBtSW3",
  "key33": "5TDzPUnHK5BhjqbRc2hYqStPyx9sUC9gAJAFhuesN8ucsFMC1kcPvQc8c2keXegNMzds8nFjXsnwN6a29Pdh8U8c",
  "key34": "2wb46izLpAp4X3VXDkC8861DbT6VNUw94mY5WRQGhiHi9C4yR17ZGuYonJynzKfLPtST9S6UWBYdfd1G7XWHs7gn",
  "key35": "4VgLAHTD6QpcoMzqZNq9RHx9tKrgKBNaNCufo6DxWEciyzWrboqPqky5VnRqH95EeyP4xtAHDqYizyEAfE7Fbon5",
  "key36": "kR92iESridWfAAFNbYzeSdXWvNxhxkvTvtqkhYotvb71zxa4fovL7PrmctXmyrYsefSgVHXoLswaSDJzti6Le1f"
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
