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
    "3LbZ4QLUAgCSihMvp3V6mRQh4PVxd27qfi2m7gBf8EvYEiDWrQF6vdW9X5NNsH3StTW4dJ54g2wEiTdLRBtDWjm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2627YnyWtXGWwNShp198AoVh4VvpU7cGkGNzhuC2VAfDLSxauQof4VGw5e19MB1XZirgSDJUpsWGob4vxAVbv2Ko",
  "key1": "4tJFSWM3KxuiGWxUTZSYeZHZ8KgjqgEfpCbTiyv3NZt6VaSiwkS2HqFo31r8YieSVQR6r8PiYTwjsUSYnq4qBJpY",
  "key2": "4aQ78o4SxwiBkBaBqh9NHdWRtMFYQuQzskwnw8zzzUctXKdyFnLas6N4gQAesDf5Vgf6bpc4yC7cGJPPz8RENufK",
  "key3": "3FU8YEfbhxCkY1gGHVCjh2zyET4AdYr96bHpJ9ZSToWass6NjQjBz6cmAPBZWQG7y18QEoHFymKHWgFvxnfsA8i9",
  "key4": "4ff8oBG7KHJp74DzWUDvE4PbaPL4CjkabmvZ6Mo29Cm7A9RQyu7jjmUYfYbGfoadfEf29SpcpNPcih2n5CqTpbdD",
  "key5": "2F4wpethnLCD2tGPMbwCANMLtpcs4o2KKTB93PXhkz6tgd2x6tXK2We1PBog3vmThMWm6WXe3FNppbUwAXAmsFdj",
  "key6": "3dS8Qo6s3cuYkuMZYBequKhHGus9MAb1AvQW1cYTDv5EK9BNRnFpHK84PHzwCrZ9iketbjJNS9fPH1uezmufzw24",
  "key7": "kBZLvvstn8y8iMCagBwBYcBmCMSbfRJLy4iGyVGXvdw8JkGCasqJUMda4XAVRmA4qf9JZMSD26YgeHWTM8ZNy1Q",
  "key8": "5TvJbaccvpVBuqY6T1uU54qT5Hhho4tAvbkLv2cMKFNEaWJokcBgn7KvUizMj52Ww74SRq3DnGj9o8jdq23CsqfX",
  "key9": "4uVgpZYBBfmj5Au2PpwPXdGv1sN2Zxp9VXw78rL1h9aMHBWDtoBntML5zmZW7CfkuuHfBXNgmup6aExk8XKHmeUs",
  "key10": "6ZpoJQhebWAsJmSvn8hs28f5otCFB8HzsE6HnDG8f71VLgZ3bjUBCtt9VheWTEPfJX4yq997WchHtcUyT4FWR1J",
  "key11": "56eue13k5K94vB7XUVm6Nq7BhmZuWEuJYTmpRGvs6czg6rNzThAbzcgsQgr2UPCV3kfTNn46GcBHpyZ56rJgg5SF",
  "key12": "VKu5mSHVqKVk2W91Vjd3R7ugsHxDxsFafMcd34ab7BxUynxasGejBrsUFXViZM7dqGLTNYQL2QxS4Bet2VyUPRG",
  "key13": "4HS2TNhiSTE1iSgTvcmTEnkeYdoAqTT5AAn15FVGfcjPaL4vyhLDJCiYm4wzs9r86SjBRTAyQ4rXJ3vaZUp4vd2f",
  "key14": "5U8yLxrgzBy3DnZiLqmSEaH9NCTcJL29gxFQS1F2rjtahABHf4wGRJ49SznZU7h8RgGjQMwjYwZ8gdWVWid9A3g1",
  "key15": "5XrrZmLNr98xC2UEwcJQdWRqbybiHYNt5dmHUE49iB85RbCdfbR9uRHkZLbF9PtZYtUT1iB9z4ffZXjy3BDr1R98",
  "key16": "3E5Eb6HdLvUw9BzUNVrzz4FnS6F47FwGa4dEpiD2irz5DmznELnkAXpJeeu9R8yxkypq42GpzinPWXu23d7vFXRq",
  "key17": "47C1hRAe6s64EfaMLC3WE7WPSx1tnRDNnHgbq8Qa63LLgP9Cy9CxeF2yzZA5ADSZQRTNWip8AFtZSES9Ra2rbuwK",
  "key18": "oqayyEuHPCkYcoGY7LWqKv8YjHmQjw1wpwPwxnni2eDxdjZHStFirGcurRWPR53ySFsjxf8ciCYkskxiXm62aNB",
  "key19": "4PcSmjmJSyP3z7nSpyAsNZDhaPSSnyP7v9f9ijMrQdLUktrqhR4UgTXochqgLNiSBDi4GnnsboNGMimGVkMZFkmy",
  "key20": "3AmQp77k4H2H9F345v9jp4vehgV4aQzYAna8W5HFB9ZvokLWw2UN2tjgdGXEoc6aeiJV5zXEWrMV39EPCXHus611",
  "key21": "5cmVK8HTJbp3VFk33tYokTnBHGoncjQ2mME8YNjtQ7wwAG9KUEj2USUWEPwodnqZVp6zyg5i8M2SVubRMwnH2uCB",
  "key22": "4kw7xy7kSBY64q5TQ4ur1DvJrfufTeMtiUzWYYTcBFvnN8y17ZTZRUjrsmUXewv9nsTC7q2mkeAoWiAXhexcmVL1",
  "key23": "6eBsKTZ5iQuuuBwX7YXXTga9zyEQ6T1rEG75ewf1KtQkhdZoeMdtMP9Jj8YK3RaKqo62xdbU7JSKNKiZkZ7dWKc",
  "key24": "BrqogwCn5bjS2b5oVWjb1fHjmHhb8cvPm38hryp6sTda4MC4bV5yPUwgt46mJCbpAfLZxiAmdhMJUEngefiUqKf",
  "key25": "vVgJkwuGZxoe35G1fJ1i2f5L1bVUWhurMQxDcLFv7N2x2bXZEcBDGMzpZLgL6iShFiWGE68wfZPbPtnVk5aiXCd",
  "key26": "3KcXz9a3yZ9unZcdV5HXLGQokjmANQTnBrW1jWTceViNSGTfKq7bz9WbW2chb2GTtj8fFW26JENwVHSFgX5UyLCe",
  "key27": "5V5roNaBcNfmrkqJX1kGUjkyb6wZqNmkA6CBRAK8ic931h8igqeuyUvj2jYz1F6eCvEMim6bDh1FqYW8CfmN2w4z",
  "key28": "vFEdEKsL2JyGokoK1QdToqbi1atUPekJHbokFkRaLtcRwxoaAkuXZcBpEDsEXLYyzRj64T2M1YUAnHCxk44avNT",
  "key29": "63C52Jr3obfKXzG7uaVKqNzap43319YPQuqhCnN6DRjqiuWTnPX2T1ycp8GjHMv8WMpcgtKYRjBEGFsAe6sowqPN",
  "key30": "2cLA8hinapydvDQarRnjnKw4o3MXaBCRqhydFp799L8Ya7VtVietUrcAi7AtQB35ethZMKQscn4y2Wue1FAejN4F",
  "key31": "3B87uiU3WbnJxSCL5apCdDjVJ8tPAeZSVUZPCV3cJzcxLaLbXPCXs65gB5N3XMzZLw9rrKzGTR6PX86WwSV76czD",
  "key32": "3uwsL7fbVZjCDRkvgzJapEmom9fj1pJz4cToDpx2ZVNxxbzcj9KZLgmEgLdTaTibsk3N1G1Ak8dTyFmqrbSu7aoi",
  "key33": "3MniC3Zxgkxf5UxBXXmjF1kjciUc6q3tY44ccDNP2ixcui4wJmqhwuKztsHKGyQMP1eTFsfp2aC73kCymnXYFQog",
  "key34": "3pQsCs2uzHdxU4EizTMQ6tCEYZ8h1278AcXYCNpMCRn7CSJ4yUhcMrfV1qYxDmtEjB8NV2t7WDi258BvpgkygtZb",
  "key35": "4uZCFS5AgeMz6TR3DKfHxRDgYswUwYhsMZsqDbWDxTLJqMJZWXzW67ZpzDqeQ4toHJXALSSV5pf3ANpVs6M2sWco",
  "key36": "PtuRetoFv8NES7s3YiCoTk9vPnGE2YfLCWtkb9F7nvk15iYqA44zzxEZoA6MBDTDxeeNPLhG96kHXFYND2Z93XK",
  "key37": "3XvwKxy8wwcfPFex5ZZvReSNGVr7DeVb6WMAsEr61SxfbgbfZodVqFsE1aw8FwEH4ZHBssJB8CySbqqvBTPTL9Rh",
  "key38": "2y1W2AGNuYjdamRKK5YLiLg22nVExV7zAAV8S95XgLcGhKi7Eo4PFqwNdTLopBWDSoLXztD2rcjbMpKcrKuuq2vB"
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
