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
    "5s3K6WVvbBU7j9QRunFjvF4jvH39rUD6GDnomMc553m9Drua5uCJzdhDu94wvx5esjABPqqRu1EC4nSa2QHNqW6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3akrJYZpoZXzLeg4pDzdWHDnBcRmKYnzzwJvajB4ryBUfKbEqPZNdd7ULPzByFCNCJXnAYK2ju4W5mqUy5cj9XjF",
  "key1": "2LaobNmKRmniokSGwBKhoCtW52zn4La9SmRF3Y4BdiYXXEd9D7PLjUYoMHTUtcQ7JoBnmUy6iqTkRsTDpm8ywd2S",
  "key2": "5nmjUdppovN2U9XNgTvKYcoQgewNHAgoxbgc9iaGvRVFvNFNQHDWmZka7na8T7iZ7wUSNidrbiCqraSE4LqaVEvJ",
  "key3": "5eSY56Xuju7473EWZgvnUegte1rUxCMByW2KDrdYNdAXTLpXgX8rdj5Xzfa7YkrMrQbVR9r6CySSM1u4r2u5xAtE",
  "key4": "3nmGkucVfBS6munVTPAYhtWkb61JBmoRJrge8SwGgmC4hQfWo7QcTBzpX7T9qzzckKsjWgzNuaPZ7JWBLw1LSMCT",
  "key5": "3bpTVX8Rnsqx8LYYatzXdhkoctST1eHVK7Yk5meu3pMB81uvSpKeDbB4riZzqWF8fFoGZB2ezmdQFSznxdEbBkU9",
  "key6": "5AL8NvR5SBbkLWuou1X5yBbXSuL1kkCXHft7W3cYhoy6TWEet9ZnPVXj8mmFo8GMSY8ZvPvzuMU7G553iCGj6yhe",
  "key7": "65wfcyiJpDPryyNygcGUVifLZPeBibKha1x5NZFaqn2RVzKKuGuGvHMnAcdGy6UHmUTJGpxbVdvaGPZw7uubNYtf",
  "key8": "2QhgZKnUwsJBFZVsUrN5Bg9cnLm3HYWbHVMZBKPhonGsG2Avhf8EatdTmtqbhw5gYoW6aS7UmMU6oweAfEReaJQE",
  "key9": "3PD2YxbkZejtoKGbPq225ojWbuzpJV6Thhv4KKgYRkVb98MkPDnjutrPVFwyfLmut4dWxtbCJoGZa1XJ84YVfQ9b",
  "key10": "QrkC13fnP38ythhux5aqFRRK4mFEdRRak79e8ffGmDe97hUbvJfsAERfjBrDASxJT8CqHQwAtK6aCCYGAFZpH7q",
  "key11": "2fmY3hedtERhe8GhDaoeotUNDKMMWdGYNki2LAhze7gMbXfuHeoiFBXAGtBBvZPwWmZ1cLtaHP5MfRx7KfifG6mt",
  "key12": "2Fn2JVg1XmPrVroFPUmaaGtWAbALUrKtr4KhU2WLf6qBytgpjLJzGZreGfPfDZsWmWP4mxGnyw8XbTuqSgnGbTWT",
  "key13": "2gNk3pGW6KPpgPw2syAyK3QcYsSznhJQMKxLENS3Q3saoJaWmjhpQiu2tkFqHkYa6FdDL7FYUZ1e2pSFLtdbpuGL",
  "key14": "3XTu4DMdc8eePk5rTfHhxuaBb2ndEdzA7bvEX1KGefMdLH5yNhaTc6uV4W7gRBBhWcyNLzpjSit2tBLy77Xndbk1",
  "key15": "4tjzopQHwpiHC9CL7NCX14X1XNoKb19JT9SNU1Dd2sanL4Fe4JZJVwyRaPEgisQwLKzUntCy31egiZxu8u5TA756",
  "key16": "2Nar2ZrKLpyEHDT3ziNbXojyjbZM6LBB4Yn2QW77rY5veGTbYPmn2FnmbJNoKXjtyfY6fxAgtUkDtfwWAKqTApXs",
  "key17": "HZYboNPRpKMu6skakPSEpPPWAvHmu3RmrKJnS6zdx6BqbwA2uTwTQt4p9KLfDBn4P2xHWTHLKo6mbzjALXuDe1i",
  "key18": "5iZ1ovJpKHwfEZJi6CnkPwvBjuedBMzaT1AsEuAibeKoAZXF9ZTSiCjP9fVxcrV7o14jK898qsetQZYRaymcqor1",
  "key19": "5vH8jYG5tMSkyL6gMsboihakJsHX5XUzZNZ5Ls5SUZuHC28CPmG6TCpPjtvuHJ11uWJYb652KVDnEHHn4MQgcMu3",
  "key20": "3n2oVKynwev6YjBu71EEUpAFNzH8md1kHnsSZxtZYbc63c9dvdWxeLw6798ZhNkXKM4Bg2aUpFqSMRiGhRmd5RJ7",
  "key21": "2CdRLpTfmbW1ELx75rY8gFEdZe1MBNsyyVHZ2Cj5sKmH1spYEL86CBof4FPNfRg94Hsz3uS2b4jNbV48NEgHasgT",
  "key22": "3cjUVU2r8fMzHV4M1SQTZF1jDKT1gAtT3tyoj3UuVjWZyHCzm5CupAm3HjEmw6EjpTZcWAvk1R8URtVi6YnKPujd",
  "key23": "48BkQo4y19fGKx4eemZ8ShGf6KT72wRpwyywGbDHreDRVhf6KEpCXAKYYoaYMYUWvFac6dCybhVCpfmyDy9UiQ6g",
  "key24": "3DjoDPQTuGodjGatw6AKaQm8iUGbiBTgdr7ZTiVpboAWWwyKfi7szgVh3pUF82qxWvzfvP7gTM92FNBJEphDiVpw",
  "key25": "39MiaFprCigR54CgXooyndR9Zb285fvf6pPkskt8J2M1kKVNjsGE1Ba5QNwz1ExsBMuREzhaPTeRcLvr5fpw6rZa",
  "key26": "5FVCQjhCCb3Cksp8ueV9FPbKwPSvsT9tjsG2xGBvLfNk2kbV1fGtF5tHiL9Lf5DgwSoGzXawGX2Zkff9WZzXA9M7",
  "key27": "4HTjkFzB6CM4N5EcK92Z7aMmSB85KPafbVj6AcRMpGVFtvboPPo48x7tzaLreGmBnGyiht4PaqgidhFgTpm5b5i9",
  "key28": "4DLCZvVBtAbnQYEgtiMuwR1h7LffdE1TYoSusaPR9aGsmTvRqqUjnQne99ajsxXWzsj1FzyygFzSqw7tvyVXX6wj",
  "key29": "27s4pcSsbYw4PS5Utd3bnoTRS9kQi6yke1tXrpifSyjgSV5dbaJ8PRLS31PbLeVVmm4PTGthxqqw9GCmPCiPQfYE",
  "key30": "5XToC9LE1V4rTTNxygGYeESAkRmWRrYxamcSG6SBJa3XdUvEGbgGXmAZqGEKuK8pPXZiUfQEWxdZ3jWBs7SSS566",
  "key31": "59LMhEW9mRAeEP5VrtjhhcaXn1S31nAiXRyJMdgRwoybzwbZtZdNKSvw5TbVbUzUNzjguMHetPyv9YFTxECvmtui",
  "key32": "eTnWMXwE79DoEX9SyRBTaHypg1XYyJzXWAX5v9uyLSHM4QXKnpRXgexYtQmY2ozJUcZ37SyErqei9ZLt4zd3BFM",
  "key33": "5exsFzKBvK7epF7v4MLwggiyQUNsrZ6X7Kjjf2uavba52w2FK8iuXP4S2sdhf24ohhu6PU548tsN3WsM9Hi4FWVd",
  "key34": "5RtfYvFxqCmvm2ubDRCD1psbiPkjHLabBPiTY1HWFiTxx4U8W77gppdDAAKLESkdcUaYAqF5Lwpf2Ayb6npvVkFu",
  "key35": "5abpXp5K79h3KdFNS4XwLbVtSEoiEb8Ln7WHtnjwMZ7K7eF94nWE1xZvAXqmA5GfcY29auKyUsR81kavEmoMXBhS",
  "key36": "4cdMuZXaKXChSSZEYskKC8jvTMMtM6o5pZ1kT1kAvArx66BJF1kpQ78bSyygeoCzaGpLBQYEG98xbchJpq2g3CDV",
  "key37": "HEVpwsNJhLVkye1ai7PiQ4q12AKTac3Aso4DmU3SHXyeESqrVPao7AVgvi4MqCgwmAp7GP9sJ9n81XPTyFk6rvg",
  "key38": "4nCxNWazCJgGofJk8Cdmx2uj7ifEFJJnS3mifejJo2Ggs532JLay36XteJeUhkqLaVQSbfGig1Mk5xY6HrcGi3x2",
  "key39": "3XphTrsHeKn4vcjFouRM33qZ6z2eYCapE5SQVGT1mvcrpLuTVeNP3X83Kse2MrpAaQpFXbWS8mCZmEvVFTxh1EFE",
  "key40": "4c43RhBHrpUExPfpRg572mEf93TjHZB32bh4JsumVoudruTBt94kZjhWFpuRg13i4BpUQUtLt6YXAcc1H7LC6dsU",
  "key41": "5S8qjFyxSQVgaEWekpUjNP1vn6uzZRsKajVRM4YuTHYBYuD8dbXVSiGeDwsowzVQMRZH7GTqymyUyMGBuTqPRhpP",
  "key42": "5kcxy8KSF7mTsm8Kvt9BgVU52tBtpbZeQXYLd83wV4JK5ueiaAsbwDs1avoNfNvJJfaDFRNvoiM6U4snojedvJtt",
  "key43": "iFgk53pDddwUSZSmTJMmhJnnuc4eg7DrdQgLZwQCc6PDBMq2VNtMNdrA7RT99Pd8BVd6GXrFmNH3Wx9uQSNXQ3w",
  "key44": "2nTe5AepBktiwenLhGCr15HNf2Hyya8VosaNxpjz5iXnFTQGnDrxe82KpohWr896NSvs6zS2nTMyBmnRmF95zLs3",
  "key45": "5sG5KXQ7VLUxPZcdvG8eS2KrwtBG49CUPsQPKA9k15bh1AcDAF1Wn1eLLrqqqj3qZFcfXRLq8qMPNYmGgJRvRAt4",
  "key46": "2xQUPNYyKZSbhpC2jTT3QPjdZS6HryWt6tzKfiPmdGquAjcrFqLfqeHxmE7xWk1AbfHa6ouxDnygqWdYQgMEE9j6",
  "key47": "423LuRPnyFxtRfF5odDttfGSzqwB3zmxVBo7pZdudvgZRq4TBd5pKXZ8wwGqMxh2HLvQW2jRcKEmHtXvBk1UuRUq",
  "key48": "3Qnp38AcHGbhApxNv9JBwKxrheFogKFJ8vNr88Nz1EJUib1oJXzwWHEbmr1GGhbKcRMtyEmkDcSQErQproXprWYF",
  "key49": "4J8f9Mgx4wwtUMNoXUDVGtCd9UvpW5gnmjNRgJgh4HdTRdCcBQ9P3A8GC1Uquekb2gBteWS3H1VqccbvYQ93A6im"
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
