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
    "3CGb4SjEmtJCVWmjqcexTRwWUTDNmLwkkrBQzjKZYcX8sxxdJpnaKsLiRHyfYiAWAZ46fhQbRVJ9zKYWvQWcj8Yq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QEBuQYR9eNZ6EdfbTfsNpZ5PAfW7RUMarUbbfQ1Dwc8Dzsb4Tob8ipsGFwX2iAiu9GnQ65wRtXv2EZe5aqVzHDD",
  "key1": "2PUujqKNQsa3AdecJn5FkP6jH8CFGth2tjpvTP2hAeeFrJzwagNAWe1dadYtA2iyjJTSTgzLvbgWpKwnEsunLwWt",
  "key2": "3XYVYWiVZkEjW6ELHTDenagdbfPtNGqqzZQwVp2qMG5NqKD9aybRsFV7jMUz2USnpSHpjHe2Ta4eeWfZtGLuUwtr",
  "key3": "47WBrfRmKoMJL1BEjqQomEaKyMPj6ee9SsD54whzDNVAjRxLsHdVPkEhRGMAy3wxAsq3gaYXiKnLNCLGyumvCehH",
  "key4": "5XwdxgQqWWtP2ji3dxjeBBh3sAYdzoETDYLHhW76oVn7uViqtFJ1EpUff7L5fFktacHCKNkQZd6ZrF6b4QLAuZJf",
  "key5": "4mAE3biZxteaaNi7KYMirR7fuhtKAugcVa42UoNNj4dyctTYHPGLR9HbrCZzyvwzJHkhiUvAvChsMTn5gDf26EoF",
  "key6": "5Ajprxrdx1Le8VSXfvUkuENuc7Hm7h5sct6k1UCLFiBTznZRhxwKp1LgjpJsaEjNac7D8rGGxYBKH5Wte6Wg2s9Y",
  "key7": "3Hnwz5dkAAzPgTJb4zvivD8Yo5PcSBH7RtYcig55cFP5wgP8gNP49jjfrW65bkSSwU7Bct17JUS9UxjVmrNLWB2e",
  "key8": "3E1HBsfopEHLi6qNDu4snbNhqMFn5Hfz67LoraZ2GVTEQxEQ17gG86YPkFDWQEB4jnVia5tsxTeQiBtU6LHCQYzx",
  "key9": "3GUpGLL5mv4bx2HCiGvhDb4j8qDKp5dh6hrb6aKasDdhJyHB4cQHsGriV2Xkgqa1FphbaRvK7gU6982cboxYGgK1",
  "key10": "4TBrheUmdv99KUsTBmmzxkcZ7bW97vpJfqPx5ofMXmY4UFn5SVbeYvCxnbBSDENthbfkuQv72NJdHuDSTWYa12PS",
  "key11": "enQdnUVNY3Egy9dsH4xvxmsMCN7QL3BQv3hCyxZBddmbxb9Q4mhd7uNcfcqhuqBNT9QTXhc5At2tYdgBKyJHJ3v",
  "key12": "3iq35gczb7m7oXKgXChPv8CMujKMbDd2rn54rVfgcV2PjuHR1vknDfNmXe2fKBfd2cWgNzp2baac9dpVGVwMQrfr",
  "key13": "2fLXBe6FvyRgEmf2wiRj4vUvP9mn3sBDYyND1fu5r1vcTqfdPxscCM8QqrFbAePREoLStdUCxayubtkgdWGvUFX8",
  "key14": "35ZQqqdobQefGRnfMGMUBSo48NPmXthKxi8oLzbLSAFaVepYS1tVDU1hqBkTMhHQkgpRiNXdVcjr6qdrCk3XdeHC",
  "key15": "4zaabrTubHtc37p53Z5kLWE2Q7tyj4htBeN3DvQB5biVCAWmZV3tDJk5TA4WLbR4GJUSjyDzKvJ9GmTxaRxYKLtU",
  "key16": "2VoEQ51NsjxxwPouqEcbQPYjnePWkwfHCWds1ayXLhpP1cUKVUVT5icFS2iNih3TTR9NFej4BP96GBkptinKCqgv",
  "key17": "CDzFEstuiMpgoH3SpdH4vJ6WJpRt1B2K7usyYivmZNaCzxmkH2QUq6DsA92bUFybHksDxRdGhT3CKhe6roz7CDZ",
  "key18": "65DbT72eQMYAhxTfnEHjuNXZyEvUREkA2WJTEhkd5FLHWyHALDsLBZk4YNt5MusmuztrhV6rkinctZJSAHNZJZ3U",
  "key19": "57QTkect864dFrj61mgZ44oztXuySUaVKcWJ6mmE6jHEWX94Vb7U7BN2NcfKRSRgX1jmpr9WsCpoaEdk5gKwHNqA",
  "key20": "TFWH22JWYc3wk4LJp2H6781tPp3wtKNfPDgovdjHQQxQ4CB95Qjk9t1Wv54t1Cwh5QwBxVfd5LXywo1uYLsBp8i",
  "key21": "2RxSKDD6gFS6D5BgZLKQkvja38kzxFdrPCCiG9Mn3aQsixX9yfX4KL6BaHEzvUntRe68xGjFoHZqeH4wGfFZYjJ4",
  "key22": "3etjxgA8pVPvBKEBXesQPoS7xA61e95X2Nq9uEqJFLCr8vsMksX6EMbVE5d3KF9ath68cYZpKNYTs6VkoKCQhXHM",
  "key23": "4kbo6MndPegRbvynxF49Zp1Krh9WmRkcNMQec2WNo4MSYjzGXbR3uX5kFjCaXBjZx3zkZrTwcvVnSNsLELdQGkMi",
  "key24": "2DspkYHCGHpCp8q87nHCyJz5mKdJjzWKAsNtTXXeB1uhJAUiKspL7uZuqDdkHYNeq3zH6HCiFXKpVpQjk5wcoFCn",
  "key25": "5bj8fGiBXwEbgWuAi4uJAJupMaWVyt6bXck5pGk2KYw89JBbW4hq7cnhYcEKyEKBLzZcYBWchYjyTSCvB6dq7WAP",
  "key26": "46cXvNkxaruNzKj2SMES6RNx8JyWWesRKkUD2vWc6hbyJPSpXnDYyaEGjPWxxPrDoPdJZYgK1mjTLUGaFprTzrGc",
  "key27": "2HiWbV4SpynM534M72m4STJZQdAMBT3Hs5UyWCuzvSE2UFSbk8CSajnDNwfvRCvg2K7jJo9kQmzsSHktpeKsmf6S",
  "key28": "3TpgJrfPqp2Uo7kR39QWFFjyuyaoxhZ5cyhMPQ2wzq86Jd97F1yRH2AdKfrjLXTjzpL9FQgJRbKwiUwz36n2MoU4",
  "key29": "4r3ESvifTK5Jj3phrF6ya6Fm5Xpn6Qdtz5EkZyeeFiE7mLpqydtZ6fNo76qNYegsJgDGxqud916TduFG9Z2vhcgc",
  "key30": "32K6M7yB4NCD54fbeEWjoF2KXtsmsoheLRbESHNJ4nSgDrZ5DHEj32ZZqNKbEsFayWNrW78wWco5rFg7TnauTC7j",
  "key31": "Ct7TgNMRuRkNMhbreLPjzEVVXFUKnAYBgfxEthQ8ZcYikgwsKMs5tbwkVRyEXRTdDM1ejGrASpnxtubB1YjkLvC",
  "key32": "61ie6j3wj8HpvPmHw99GtWZvwaevSTez53yjcb6SLJRPP4gzxBrJ5Y8B78TMy9cAZkiMU4jScExuPrB2VVrn1T9c",
  "key33": "4EHGMRmPNqCYRucxaqPmzRUYbLvF1F9R2DssmypNtE7bUhcJD9HmL77w88jSSKbjGVXn2jLeFN3eoqrdm1LAByAX",
  "key34": "3YXCjxPNgtQfQYyB99jbuVvW3waMV97LVcx3xFpMUP5T5bXhxgF2i9eQUtE3uvHpn8R6RuZdqTVmZXUGb9KVkFxZ",
  "key35": "Kwun76D1S9rNfTZrabBmgSJE5EeZWDZj3zr6Wo9fMXVc9ksmajKyayjQpXRWEwbhdvugNpp6x9XQxQ4zmDexTzK",
  "key36": "5XribYkYXejPB9oxLN9bXX91E8cW3tDhcU2N2htgZbB4AipnDSByPDmdGR4vqu67bPDzN2pmuCprnkAa5amUJKcB",
  "key37": "5zCCPBSJRM8RPAMfvJZwqfJzwEwzHSTPuxcEsC1tQoFnfcg4SkvH9cJprFe46j7CM34HCZu6bxN9Uf878VZzHL3r",
  "key38": "3wbY4upjmnhD7d5uPebo1rLXQFTAmd4DYpm85xAzAgwvVpRd1cbVnfvrmtWs1AbbzhNVhNX44KZApZWVWmdzLxAk",
  "key39": "23y1swHUYcZao2xx82GxrvknfKK9RHEh3uxNZd7E1JxBoDpuzXd4gt4k56w2oGmFfy6g7NeDkQDmLWfPMjbKEbMg",
  "key40": "3vpqajNn6Cwnw9aQ7ETykyJ9SBVUT1P3N8YQWMbXrB95jDbuWRXAyDvRQfcNCUAJKqC3t6ueaVfssPT1cokiAyxd",
  "key41": "2YZSKhdVHiPENNpdbP94r5gTs4SZj4jMQXHoKPiXruTK5mQcYixg313ca8moYMWAQMLAH4AnA6VjHuJEAQuNhP3R",
  "key42": "ew5ADEBj2PKiFvQQjCVspoXBuFrJcV2mecy8Zkbq3eg3iGwAwvQCdAodY1bQ8JqvAL1nbhY2maSSyHDPQ6eTW9f",
  "key43": "uxQ9DgtpVTEMjvqGSg4vfWnx7gjBovUdxQyeo9tBgqgFaxdk2XEb3caWwD6et1Dk33bkNfMVq5u9yP7asor3Swj",
  "key44": "Kxe3XpKf4W4snRrYW6jgJaDC48rLnxzotrLbMbLVkipL7Z96LHxzNGADU9sYSM1rFQk3FyBXjcGkH6275CcSLt8",
  "key45": "5GaPHy92ysYvFodZ9Yg6QrtdD73SrppovwPV5mLbS8YwWFGp4j864NPj1uwCUbyRdWBMfZ7M7Eu1SxBCWMQPLHYy",
  "key46": "2bbtbABvKrtxoMeZddQCS63BA8aZCpTC1jY4jqJaa8TCBVoX7arjNYmbDXKJjrwHLPudsZpmZZnKSRXfVLcHLfBX",
  "key47": "32jSzvKfzePYWznM6917WdiT6hm9FdPYDpfdmtHAqEBF6mqUcBuQHSaCLvgX96oS7dDAS6Vs43yeijVapQK3ZgBc"
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
