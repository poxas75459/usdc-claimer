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
    "5nSJQ57GBCWeAzyqN3HG9CiTUVdxP4RojSADtwGLWFYk5YUpnqS1vJVVPJuCS69FeWD9xLCJ1PUC2f9CAgz98SGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7UMmrFLHGCQqtT1sp2vAtDgXYN4DHjy8yJfJ3LarjYGmquZ6wvc96u1kpzx5r1w542czV1v9rfU6sLGnK6qA7Eh",
  "key1": "5BfGqnKhpbbm6iDakPCLFZNMcz5BWb93q2PNxpELcJpHdtfTyGYodv1ZgW9dv4KJmaHSHn7HWEASxC3n1wBz2Vi1",
  "key2": "YnmUQVsqyJf9wVZtncbdiRZXWgLvqpVBoBtuTsjYSLbmZee9wBZUuffcTdQuakBSKt99QLE2RsdqzquNc7aEKJr",
  "key3": "4sKMdzFqc8VMRovAr5LwKCVDMpeKAbv9VCf92x714tupjnvmtDusBJYLTEJtqmi2rdu9bk7fpqUZaM6qjebWj7za",
  "key4": "4Fd3BqArzsuLbxDUJyoiC2z2qnQS17uRnoEKNV3RNiVs3wqtGtwuL6LAtaZA58VADR1m6DM46VeaDAdn7ghzTQRR",
  "key5": "4Sdz7DaR91KrAw2ZBjFpFq6XUdE8Lg3pCqwoAU6qhLUeyQm38kwgKW49vjz6H73WoYta5HLe2kkAx4QbbjMZWKRF",
  "key6": "3yzW1zf96WkNJdjmJsmntVr1NLgL4CgzVMSyqQaSTmzm5PXkFckfeCjms32WdHojzh7A3Hf7yr57jiH2dcKKtcMt",
  "key7": "4dPosYkCMKNzjhLBSpDwkvxSNUrygoswipBfFcz84fF4YSX2a9xnmMmRxY6x9pLeqo3cAKjXjbaLP6uVdu8A5iQ3",
  "key8": "3ivGx32YnE9pL6bAwRD6QYXjXJYZoAbmZ1g41hiS6C2GzpRsAvgBmPy9FBy1Y7ktPFB1vtr1kQeHxoTtKwh5nei7",
  "key9": "3oWKarsgfCyXbk5fqF4tjEz7bD4iidbJ8FvPuBTsmWpc5KdxZG2dXKnuHU9suKSY2ZYNBLcuX93Qa5QxG3wxj3J2",
  "key10": "2VvEbUxVQeDfu3tg2SGz18DzReSzhJJmhNGvwnvcSkQrVEVGaxUStQ93cEy8APJxe5Mt8PuoDzzGxK73Fzbfv23z",
  "key11": "5ALzWc7ErXgEUf7oWPXovsXVr8n7nH2E8BU6Ttq4VJELF17t3kA7594MoeTiuj8YHC5qWP1PEFE7vfpa68Kqc3re",
  "key12": "5K3aqPZbfCrSYPCTc5HhRAuEf1cLXURgFEfsWtzgCMe5EySiDMdcDNWp9TGWpyND8v1FjCcbKg6vijvX7qCS4L7Q",
  "key13": "4s1Ft4vw53tXupauM4EDYNsiC3vCVNRnB7fzfCiRTxK5ggQLeDxeFSynyT41wkfDkMRjuuRmG9rN3pEkjEgy8R4E",
  "key14": "bGZ48f37uGrXiwtu1HTVTHVuAeBSqWXzsWMAPRAwtWrQQYuA9rmAzV3yuZhNJK3MT8uKSPgmMCKALcw3FVf6bG6",
  "key15": "5pscrnfLr38ZjreDRtjzbvuXuiiTEamKdpXb2AP9cyNE2rCGYbD7EzdwQhLrYFUW4LvzhYWeFGQqzk7otVJu61Nc",
  "key16": "3QEwHjiGWDB6X9VtbXrqEcadUtoddnLXS4YZDuGhEW6TDtm1xZXFbsv5BTyDDm8otwKEc382kdBxnbUQf3fcVJYz",
  "key17": "2eEW33nQFxx4sGJ5KiRLn8cotC9JhM1PxPUDF5oEUHYjVzM2LG5bqoBV9EfThGy2LW27V2i3f2k9QkPeaEMft4DF",
  "key18": "onkDKnYnwCtgpC1vjYoiW5RNSwd2nTX2DEz8DBpBCs395ktTYzbZzmaCAVfCJKE3GzxQmJXH5ZMHeKD8AXEHBhG",
  "key19": "xSZU4Ur4XSMjV53rNUCWiRG7KjaMKw72EXhvZ6zcQC8a89hYgRKDZhyCdm3BKPBKSRFFVkgPwNi59FmBUGtqHRp",
  "key20": "mVyftczXoenB68yJo9TGgugvsWUpHhczwukMf8TaPVGcmVnerrBdh5rfBDrNDYR3N5iwSa6KsFN8LRL6vBTcELh",
  "key21": "2dDzhtXAoHgRrJsm5siGhzNRnHXc757sWisuzALotSrz94nkaTyQujAN7G2hhzAiuPipYWxiH8v1XzrEdbZK5Ys7",
  "key22": "58gcCW1Mkkke7MHRgGMUrLQsZrEHkL82mRoM1BuS8g2VMdsHeLkaEQckopXCjFsBwkBuzMcAWwqAcfK7aq2AHM91",
  "key23": "4VZ1dD1Vdi3zPoopsdqneQqFNRxJZhodPmzhV8zo5qJKAFRpk2vCC9wG9FZZqDPiJNY1QDaq16ZgoTF7qs2GzzFJ",
  "key24": "2NjdSS82KEpPoEDvPnyS2LJDpsLWcDzKAjjkcAssjgfDBrREYeDKyjshz65zjWmgU1AXTLSFmEXYvpH7VwJEVKdK",
  "key25": "212kZzbiD6s7taxRopBZ5VcR42wDagxHjKyriq5o6XdhRanM8j9mNkBAMvxrPMeEaWDtE8tAWz8xpDDp2pvbafVS",
  "key26": "22TupNPop6VhPTTVzJoBGna9FvQehT2ex8rvEm8YWpx26QZP9FxQCSHNbU6mfKmvwqXbE4Pa2KZWr76ytu82KPh6",
  "key27": "224HoiMBj55NvhfL5WVCjSyQSUDGyhpWv6YSDFPQneAtkcFDnu9hJ3eEs5BZmQJ82GNgz2ziJcitpa4bRo1Dn22g",
  "key28": "31RWHSvEf2zGrRYXaTmh9GjX2fuKdmQtJH2PwMw7iieUQY4P7D8BUjQovcgHhKiscWywTvo5zvSiD8kJTvT3916R",
  "key29": "2n4HaLGcJpSBN5yxSE4JbsJ38iEyGRkv3xpRNabKddRSUPXwmSmTbNVPQaF4sKDBcPGEQSmK7L5UhQzVvmDz5UHB",
  "key30": "srBC9qYRLkf2wFBgQXVimXDbXG3foRzfYJFdjLyAiyM6M3WvPVF3mcFEcDmAGqrJPJmiVsYsT1XoTEF3LzQPXz4",
  "key31": "24Hw44qmnwnEr8bnjgCgpbhMd8aMFKvJW3zfjYkbFCCv9S4p39hjsiSdYyAy1QFwXQY9SsU3MpvWAtpxMVtwRcAe",
  "key32": "466GmnKn6oeMevZ4uyNZXwGwMYaZLxZ2wfSnEagdC9Zo4vP1GdmhSFFuvagWMVTtFBmysKWjy7hW3pGUeAz1PXXU",
  "key33": "95ujwpVZY9zQMtU3EDCutDsg7G761d8XdRYQbeTu1gYGmNsE74gjqtjfyUsnswAEuEHbSKRk3NNWA4Fv6fgo7Xr",
  "key34": "dLkSJxXkCN48QMfihhC58pZu9gPScKP3WB2vyZRekrdg4DxVGaV4pdYMgSnS4bwG5v1HokckBo7Sha7ArfLQ3FL",
  "key35": "59oKrgmCgQLjLQety1orpJHMUHmALbsrXeJMx1KVjznmQTXTDbZj4uTH38qBQpsvur2fH9N5oBnuKQgq5pAcJS4E",
  "key36": "x7cR8HpD4XVusuk21bRV1j6tphLNvuL6tD9JiYNrgVAyNDexiq52z7VhYNUaCKEwVZBaozNsZs3pSw4MesDKdno",
  "key37": "2ufxPZPtNKBmcHJYP2q2j3WGLhELzbWz9zarQauTWqm46YCNZ2HE2YXNNh3VnqRANr9cNR8jcHMJ9q5nx296WNiL",
  "key38": "2ardRjKsQRR4pW9ZiRVcEE1yF2c3LfSo9JgWbaxpTi1AFPEc2QqBcmzL9Ga5iX25CvjkQWSYs5H15XLRJcmRV4JU",
  "key39": "nDNjbcQmj7LRZ6XdbaL4da9QBuozeAncN5LQTEeSFsz2GekG6UoBw3pNvmRQoxam61SeXf2Gxjd4ShyypZ8VB4n",
  "key40": "4PYY7EuiUviXqYAob9uMj2Tz1XKH47xu9F6MaXEqtfYXp1AqyavMYsbCF7591gafMNMm3a5Bep6b7K5BnyU6aGo7",
  "key41": "3hSAYGT7oSV9J6AHYuEH8UaqdGLfEvSizNwTUkoSuBWwe3K8c5JDZEK18EJe9SekhNWYtGs5wQZ9XcKoAkZTkfjg",
  "key42": "5HDqaRSWAMoupzGVRePJzDLAMTE5Gd5NzkDsJL6a614Loi9tp2uqFiVyGPKyFiutjRokVJxni7kgJf7NMSPaaEd4",
  "key43": "3d26C7HG5jxkZaEtV2ATiUoCWWsvxi5kcrfiDhJwrdSfFeekYJTxpDSqkH6NMiBDkMo2nD1ST9KobGQWtXifPcYJ",
  "key44": "2HyAtrn2H233ovxcGUGW7vH6XMeokkNo4sGWg4bcSWHRT3oQEmqfsPH3MhBcu1etAaoptKQVQ4pbkTzqRwUsPo8x"
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
