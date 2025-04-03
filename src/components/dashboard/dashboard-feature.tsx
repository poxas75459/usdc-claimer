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
    "2SUVCjESAwpqttLoSFk7jmgSQnwwnQiLcuPMibk6N7YjCQ5Czw1pVfPjjnDsqNp9MbeWbwUXxyofgMQm9MuGqjFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q5BCo7hmvWJ2CpPPshDH1BtgWNdm9ZUQiM9xjoQyXEZNXe47hMmjmQRH5ZE1xa2CMJJE8hePvJvA86aorzDhkA1",
  "key1": "2vXid56y58XLXUjmfDWuoqpaapJBKqU6k9a3kYe1P3Z2XrikZysEEWNf4qrPUMmvecnEsdSggc3ApG979R2hBzYv",
  "key2": "2sLK6r6JDxXCmHku1NfaVEtA4JL8iXUSNejJXCuFPJocb5h63d5At3FFiG7T59U45tpR5rreQpiWsEgAJjbNovB8",
  "key3": "XN5CtrA3pUKUqsjdSPFxDdcxJ9Ghna6cG31Ut6b4pvnJ2z5MCoNobRkD5aEMWoHpJSqiKwe8mTrytwKgbPoPCeX",
  "key4": "3gckaFRjninWXj722qwdCXC5AzfW5WL68eeRA2YXsXJDmw3g7j4mb62WoP7d8UxPR3vfMUs5vnjGjQboYu5wpX4U",
  "key5": "5J6U4dijMaXiNdLvrdGUHZsB9Nj4959aTLujNoRs4Kg8zfWeZBTZ7zS5Rnhjzxuohh3VDRqkbDTvNMMj7iua2ufc",
  "key6": "3JA7P7mv387yr1Y9aGbdKUJ5JzCwQwUo7gwPWuUhgQVdM9hZcAvE9fC6wg3ckFGUKmFxu8im4hEEZTkEpreEqBbZ",
  "key7": "463hHngu7fsqcJnEN8826SkCQeg1wMLCRUxX88NVTsAMzxhrWTv6aoHy7iVMfm8HonYULMJK1p5CS1xrCsnfj8Lk",
  "key8": "XxSFeNB1o8Nku6dFJQgoXtzQWjJgX24k7BDPkAnYPFhzVVnG1Byk4sbabw8aWqeyppEJ2fn8zn6Z2hjpRXaH2Ug",
  "key9": "3L2vpGVitoEps46gJPGjDMeeKpfYFWtVCLp3ZLY9AKD11WwbbPamuHhLdKhVsNkVACGJMsvA9LqfSyXReUVxmdq4",
  "key10": "4LcMpNRcZSZxRhejJdijKQzU3GoaceDrtX1FWF7abTPE8pprgVJHvmws7pSMVoXscW9vkp92FkexCi2PK1eVHAwW",
  "key11": "5aBx9ty9SpUfm6RxyuRA2H2jfZbFr3GLX8J6yZnQegiABFUUuEfDwEQc97VUHPFgs6CXUWo7QPiAcmoUSd9Mi2yh",
  "key12": "2QfhvKoXsNd2zrXP9KuiJnMHr5qwNUvsrwM4LazW4vjT8BWec59WmhjFpDkJWTw1XrjrwdtoWriHkfVkoyzLyiSH",
  "key13": "2pHjDGmoMPv9GAEt4F1Wu3S6dndaEmesFZPgpNWWqp9uEvi6dJyLH2L8x88VodrN4RbxVWiMi3RkvbYEhvhv9vgw",
  "key14": "4Kez45Vm6yE1nJn1UFzGk3FPmxTQ63jsdJ4YDKkx8znxCLa3A2QRJtBRiSrqycntBpMix4Jj5BZvLVNAYTwxK6Pa",
  "key15": "4CZJfZaxRL7sso8VJey4Y6umP1M7w7SXLUgJ9CENzapx3sJqAN7pReSd2hZKys4Mvu3FhFQN1bocw1KmYgQTJFFw",
  "key16": "5RR2ULvFjWB5RYePEiDNmK3QQrGXd8hXAy9CeQzW51grYGb8njAhnNi8fevDFD7VrXrRDnS8jrhymry25gDeVnQe",
  "key17": "3BdHaE8jKGwkaCQXr227tb5bdmPCTmNszxhkPVhHuAyV7fVQYtDUvUTKVYa78zS6oY6rb5Hv11pVGNfbGZiswueo",
  "key18": "56wqgE8vL8Us98otnmPPcxNA2KViVSS93iZHaEPNj36W5DP52ysiAaqmVQibkTpmL8Eazp9VVw4hiBERLN4DSArm",
  "key19": "7FSKaPYHuuAH8tawBKsGt2Ab2AWEueo65s4hxAdYTqjEvrvyEZ4dicoRt3HteNMdeJE1PQ8ENW4P37JbMuuDJam",
  "key20": "iTH889kq3J7npSBMmCYtz2tefYBvuEFpSuTYoum4e4m66YMzixMxbdXnXGQgRefqgZAWCg2uczEDKz8FxPedXQ8",
  "key21": "4o5u5g7XAKyrjuxyJzVof9w6SYJkvcfS5y9c5NQLZhRNSkmJDRq65GSP1jNBFPBBgUYdkDBpdXgvSPPGtzMDXrvJ",
  "key22": "5BSyZwQdp3pzaSrPnAZijoDdXAu928Sos74LfqzvmtY6BcLkqT8p1vK1Xvgq97FXB5PFoPakafU4sarmwE2yF9AP",
  "key23": "5TeQDQjNXQt5GTkTYLjzdC95i1VHN5DqWP7rV3cSv9wecoNvQ3NPZuwDGNHdvMx9CWxeToaac9ouHYEU8ukgTiM9",
  "key24": "2ySKLF7qgY76JyC23FFbckrFJYk32bvSRhXwiwU4mBbZr3moBSZFRruWVoa6ZXyeBKDktEXXK8PWXM6DWnAMspAE",
  "key25": "37NKD157BhnX7LNSpMWZqmTAcZXcgBg3jkYvqDohDMFLTHB8DMfKEDEwW4AgfPfHJnMQTh3mxpBMFfR8Loyxmuy9",
  "key26": "5fB5Qqrw8G7vnN7noT1XcF8WuBdaFmmuhDg4DCcHnCPJ3n5tFFK6BoAbp6T1jXqQ6cYqhFTGWE7pjEcb3v5sUXWq",
  "key27": "4ceSFSWbsRbjAiFVCH23qmGPhbo7JfbH7TE7whUf4sgbZhQEqELcX8GRpQB2v1xjngg4ZCJsVh8r8r1iWfdxTdv7",
  "key28": "4Afq5X4f3QkDo5ZLKNZRJkjQQxwbBCD2oVhthSmQB8GtMsnBxZGuWnH5BSfUs2Hdf8dxJ5joyeKunek7P2wTGtqq",
  "key29": "5FWMfBsB1zjXd9c6KDAqZNyCTCj3PRyaf4DitNQbG4AMo5LwEkPmhQExLUq4wb81gwQtiTWbPwUxgamkYrjHRZy6",
  "key30": "3oLC9rq7mcs6AM33bPzMu92RBCdxvHuELLSjV9PfLyMk2VFmWtq5i4f2hh1otdWYrL1LV1AkcqxVtboQM7AjcG8X",
  "key31": "4cvkYwQZfPLLgHuLBdELYLM6rpB2S8Pcsai91BzPB1iHHpdX7w74shV3Fp4Yw2hNdQe5aoeGu3RSDtwJQXd2NnVF",
  "key32": "2guJxRgPHCs2J6vKzhXjECx9jA7mi4NvjZcyTcYTw6LgKeruRcZAkBZvdd9FSDY68a2hS7MYjmnnBTgnXoWQcAVi",
  "key33": "5Q3MeH1V6dBsmnMevf3QuxUowLfo3Za7sZGws29g5ieFKMtz5R2NmQqNahSBP9ssQ1kcnH8r46jbzySZfnAq6FGu",
  "key34": "2TKoJzgNwWRCnRkdsWBKzqu6KiqawS16SAkBDaCS5QsSZG4waZM9t5mrjHFc2KLHTJTMPt91UioASrFzhfmew669",
  "key35": "3W4e1RPUC7QFzY3aanTe1ggV3q1LBiVaUkg2zXczLFwYWBv93hADhMWintxPUJczShjyd1PFeivjcpgHmfBJuhme",
  "key36": "4925w3Kt6y6rXK1iWyjcMXfJ2jbYuhTxXxkMbAGY5Xk6FJB8B2v2rxLuAdVY71taydVGbWASjgkS95cVq5DCnDwq",
  "key37": "4jmoVQL2oLPiUySyRZNdFNsQAKJM1KaZcBVtY3D7SLHxpEhSgvXHNS5je3nL3TviNz7M24RjDsxB9oRc5UXsui46",
  "key38": "3RZzRGhRUJFBVcaepnVm68qfBbLmm2iBqoLYTkgUDMUbMTcAmyEa8eqbsJ7PUjjPUXqyUtrcaTWeUhSCpbxT9n2M",
  "key39": "3AsndZKtiB8bwTbNH5VEVmiESjbVVtpzCnsYjFY3yqAVxnarsNzAZPSx6Vzdev1G754qQUgbq9LAxmCK4Qe6XZMD",
  "key40": "33S4Vg1i38ZKsrBj1C14LPo4x1KC87juqKtnuC3h9W1bsV7KKv6vrFUTzpCHojST3vfJtYSi9vPENAHMj4aFwYjY",
  "key41": "4HBpdpeVJ7zxApov196gNtibDTG4pwahusLJsTuFSuZi6X7KBcXZffGTCXABhgVyHCkMMy73rdTPh7mAvEYWTamU",
  "key42": "2Pn29443HEPce4aeNyN9HLArBKREAb8AKP4jyyRsarKifMbDXtyMMhpLKvXKM4qk1LXguYS7c2gFGqdNnN7Rmn7N",
  "key43": "3yTZmzEvYR3s8aLPrk2pEYFBM6rN4GM7gjno7Xj9WZ4QgDucs79DfUTWhLdc3Z2qrBDP3mJKVsieDD7j3TxAeQYP",
  "key44": "3Qs8ExWiBQDXgyDNxLSAKVM48EqnC1nor3vPPUJ1MeH1iwK2sareDivx1aSBhP36d1HWxZisVNM6Hhkh2jjXmg1v",
  "key45": "2rVDns5mWP6LbhAWG3j83e2p52wAsdBqLgNdXMYBhmhTgfvcNJeHKaj2LZm9f5pH9Dbu1mnUbJ6dFjgrTrt9GcUc",
  "key46": "3AyeHXxCfJJDmfJPRvzES6mPBF4sYLWyxWD6KWETBao5S7oZZwKhaBAhCitHVZ7DtMkLhUWaG9f7jVaE7kuvR58H",
  "key47": "3gm1agE6KxvDYB8ByZaK5kaydPiuGXeDdQYSq8TGnmTVAaUYQd9EZ3snWWX2Siy6X63yQGQP9saCYt6t3c6huv55"
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
