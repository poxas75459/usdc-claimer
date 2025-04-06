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
    "vRqAzrgipzAQpeNN7Ag6ah4D8kuVNEEdwVxcAduAo1mchULMtgamENfsEG8eUKQP934d44ax1oaLGc1B4dENuQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FCb5D8gJqMEewagvdoF3xD4zw7hHNf1iXv67uSxq9cd82zNjnYA1v8yDXLET8qCiXS26Fz7GHcPqKDNxge4yadq",
  "key1": "zteHTFfMJ4QxSsVAGkcDNtfAvba525HYSm3mCpauPxGPc5wg2YJ7zJWFLoBRvpHPnVCjQQg2iTgmYqmXJVrTyd4",
  "key2": "2gR35b4y17V2nuktNm3yQeSUiV9EDdXosUwBw9XDSBeXAkuqzVxAfuJcmdL9KXxExARt7ZcsPqwrsG79xBC5M9UN",
  "key3": "25T9PBZyNJinvKi3pTDXEVV2QNzEVhKoBneoqtj71fapyAczjaVWpbV3m8aQMQiHDuRVNcP3bQQ5fZvv2emWyLjm",
  "key4": "33f45NBUZm3oHbzFtwM1PmaBPC2PxjYabB3FNyS8XiYY9ENQb4NAiuXXqJkUs5ZKhzS8LNJLPiBafofYi4ZgSnHF",
  "key5": "2F3WPRdbsjD6ke1APGfqFcSUNYdPD2XDu6r2WzEtnasQ4wbuFCcwbz29hp6Pyec93YLQHP9rQWj1JETocAPcpwXD",
  "key6": "3sBwubJLBTF7nEe7xTrzktdcYhSgign5jwW215H4zdwy7XckYa9UMDG5BL78AUZ8wouGbFJpio7CVR2hXTvD4fRt",
  "key7": "56g2Ta65LEXm4VjAwJGwvWVTPDGydxDtPYYyXGTixGvjQFNPQHQotsbwbBJ7bUpLZiPEEuG9r5CSKpSKmYJZqV28",
  "key8": "jU6d9PHsuz7QQHzUrJSu61zHTJn8vkVtNYqXDWiwTyh5jjHFAiYvz3Zj71EvAnQJpxYnJ8yJufNU74aSrrfa246",
  "key9": "4E6P9v82P6SNdEdLMAni8qBohSCEo6Q2hHW39Wk99waRon1KbURz9xxyEphdwoesXX1z8JQHgCCyjZpsNpaKd1cN",
  "key10": "3GRS8pR2mRbkZ3HeaG4gb116nB1YokGXaVecjyzK3behD5pR7o9LUzMEe8k7J7TmW2sBccrFVfEZCtphSFmSE6DR",
  "key11": "4HnhwksGL8SiBpa2dr3sy5MQwWjZd2D59tooLPYu8LfqbysiZJ4wty3AECQc8cFLTzcoNVefCyoPUugZKboU9aTb",
  "key12": "4e5ZFGD99YrHwNvCpeVNTMbQj8UQouJywYEM4or5otWgazkGSguG2h4VPo8uv3yk1wpmP5AJ9d3gogXNoMxfCbSe",
  "key13": "aTzttbxUdNFsXpxdjjpWEanvmyrEqKUeVnKYVJT8hvYzX28UHUUcMHkpZCchij9zqKFgwGsdBpnBed8txL5aFk1",
  "key14": "5x73KVCcywDsZnvt7HmVsAtpQAh4hjaGdBVVX6agx1PteXZhfYwofGi414vhpYudWhQfRJon9Mc6LGEa7NcLBXEG",
  "key15": "32HnoYQ8WASat1vo5u4c2Xt3f4HrD6RHeNSbycaRpDDKuqy6GDoHASjSDLfsZCj6pZzAcj3G9BaSEcpuYnj6tQ2c",
  "key16": "2KUvt3hFrNJj1WgPbVrrnaHvKi9Ta3jbv2RN1zhBHHfQBEsiPLriwwF9ycQgfy8Q35bzwU8LkG8CFhiZs2N7F2pu",
  "key17": "nTPqDjDuXDrGAQKWcLAgcECXNRfR4bu3jnEzyXS2s3VjUNprJwKoKgV939ThfJ7KWvx2RB1RrSvAk9haudDH2HQ",
  "key18": "2xH8br8tiN6vsFQ7GmVaCFGonbxKp2CMT5GTYwqVpTjxs24eWjfSq4kgGEe9cd1UbxUMscGLLoEMM8ZQ2CS7cjF7",
  "key19": "hZyB2vrdccMUhaF9Huowe8W7m1qgofshav3H5DKoPFGmGUKjoLtwQiFssSxbMsFgJUa445TXz3tnQuEo4qywY7E",
  "key20": "2WTXccP2b1Ya84w9FK24jJcYRhyuazao9DkDSDQ5uPL4NvhnZvkJ5Ri3izDNWVDZMXNQvLqnMMjcd98Fv3H1riL5",
  "key21": "5aPyp2suTBUJfVu7bJMBTkjtcKrgXrGf1p9y8ZShadGoTxsDdqkNZSqHhyZkS7vzJKxY1GkWT6sCwpXhuYYbK3gA",
  "key22": "4aKoSDPfMwLdytNcEMbWnGF9bggHkGtfKhvFRhcuBzaRAKtFngH6E9QsVctUD8fMowKvL5TNvS3JNwaJjF68hguq",
  "key23": "Vss6tk94GE8mSR2bXoRtXmrFwNqgH6wuFpW1gJkzaW8sHYT19fCQA3vjnqiQgRaojFx9Uie5NzrSpgYA3ALfwWY",
  "key24": "67PgbrXYDGY7CrXwkZ4HTKuKuJxibjrRxu8Deiqh2z8Jaj6hszKDNb7br1iaWrWEZkPa8s1Eipd654jrQmLZVPvu",
  "key25": "4x5wzjEt6Rm4rNRqG33SgyN35XLUDziDcMM1t3pYa1RJpGHt2pY53dNxb5Wj29eu27xc65FtxQ8iFzKbNsNMNinS",
  "key26": "VSVkAFiaYS6n3RxA8yMEVkdUQxHkk6KvjZYBTeBwvv53ofz2a7wtXSNHqv3qX9XrZWfN89vGvv7Pj1B43MipJNQ",
  "key27": "4Ap6eJdvPD7w71UUnfVgo2CxpV6xHinvNDdLURKeeqKr89vnNGbysgqeeuy8NBARpyJFjpbhYcLwKTKLBiwkjZKB",
  "key28": "61xrJkadfgfRrWboRUz29vLxAfBbA9WPqZZ4fZG5aeukMYaBTF4W5B4ebKZe4KS5SKKgiVCc8xeRxrR6gLS2A9Wm",
  "key29": "4BnXb8dYmePCMBT9wnNxyjp9K56kG3dj5ouWanVqiuMbsNdeExUs5rpn92nXNuPHaebkYLkioDbmpeUTLiou4iy3",
  "key30": "fEwuVgv4L4mK527qdocfoFYLo5qcdUhyMFZ4bsVFYzphXV3DutuNqZC29zvWKCfL2unL4czYqfQkdzZwp8qy5aL",
  "key31": "pp2dBZqQsrWUM8k66WQjq4UmT6WiERL7KB3YegCXsCYHxg5SE5J2RANm86T7njLg3QdaXYss8XoPfUSjJi3ZVJP",
  "key32": "3CuYLEDbC1BVxSqJEwZLRwEs54hvpPkAVN8sUBBMGJrmM7doqmWBsGw2kUKLSrVZeF4GNWqoSYbobV7xtjknC8SB",
  "key33": "3TztoiKxUyjHitxqmBkKdbAEpDit1Fbpg9FroeePYrMYWA6ysBgzMUGUJ3PaKbsUbULEZuE9jeXHnLUgYd3wz5GM",
  "key34": "5uNgy8Yy1umAmDmXEU6SzuKLMftBG7QQgFVDoHx3mizM8SEFihBcQLN7RkV75yR9ehC4DmYsXpXZPRk58NkBkK3c",
  "key35": "2LqZjVt1RjJiNm56iNobVEyvLyvTHgarH9dYiDLfCAZubYXZB3ehJ2Y95QsUtgJv8mfCechxC1NzfGS65VnWgW63",
  "key36": "DCVeb99kU7fU3LAzJx3rFvfKDx4LwG7A4r8fSSsSewBjxgtiT14LDiG6ExqSocttGqte8WYrjsWLBCNC6A2mvBP",
  "key37": "4FogvbJtSwEvZmkZFhjbi7xcsHjvc8a32Dw4VkbcUkH1m1QcWkDhp8hz88m7ZccmmRxfCXunaC1R6kPacCMEjhjJ",
  "key38": "5etym6m6jgN5ThgdK68XPpSjas4fXtyV2bVRmHB9bVsaNq2dB6fxWFThw8NzABEnpm2CJyxenLoygKwxtEjHJ1zr",
  "key39": "4L7NHXrVmyV3UTKWrjomQQp6NvxnWNypkcSnBhcUxqk7VpwDLFrV84jyYZkGWgXHMjGxKVhwugvHxGaUY9brYpsn",
  "key40": "vJtCr7cCpY8MzwrD1gk9k7KFDnTGc2rRrNDW1uRZ3cFzBzKkSyFe6SuG6hB4Z34yDaRMTFqgjZhPBycHgTUddJk",
  "key41": "4KReNiDrM6r5UDAHKuqbxcfzy5DZfcPka1DrAfFbx2D8Ew1yaNzRAf32Hq79mP2KBLTuUtKi2dt2QeyTGKipEtSc",
  "key42": "4KtFUEVvsQQxuxaSVBzSAkvnmFPgaUwrhqDt7MudBMaMK4bBqZPnyz6WDvcsCmY7rcaeLkiMo8tQxX8hyytviLAr",
  "key43": "4L6u3mwYZFFjJzmFDAykPTLi1LhrsoCcBGWqbw5N1Fx9eTLaTmqggBEMF6gfqagkgfBCa4cpZQQLchSnQ4CemhmR",
  "key44": "5c8Tpz2vr3D8hPz9GcvcQxzmWLvYud8kJ4LErNedjU34RMUaULNiWazrMLZUuPUiHnynDwQAPRQ2FGV5whQ7C2i6",
  "key45": "3WR3ECRX3bj9TfoXbKeojpJz8bv93ZWRKgu84FEU8vovruuPfKjzLnM74w4HBmdawTvbsTRW99p4m42pjgrapU1c",
  "key46": "5n5RXP9TazbL6pcJF13qjhiMpT6Wmh8PkuqWVaPkb6ABekEyNwwCbkwgtZfL27mozadsd3PwVcc2Km9t4bUuxLMu",
  "key47": "2yENvNZVhNULMK5E9FXXznCYuDGgw1oV3WXvQan2HnHw4YgzhHWzriq5swX6p5Jv2RLtwsDQGE9SgbZ1uu5ooDEf",
  "key48": "5MbuUnBPDo4tgpcrjNzJoq9zEBZdtKJLx4omsk44FETzoQGJyK317aWFmw41eEh1z1MM7QY7uYVNnnr2G2vpEhQZ",
  "key49": "62rkJFtLy4rx1LQU9WTEgUFnx451PJU19C3rGYzgAAdZrBMCQ5qRaWHSao8ZqeNiLg1MoQqt8PkJQBcjPcgg9Bdw"
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
