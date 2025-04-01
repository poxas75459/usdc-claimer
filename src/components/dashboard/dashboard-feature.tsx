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
    "2rGMYC19cwRKePAueG2TnZEkm97qYA4s4HtLWms8VkG6o7oSpeUpgsWv2dJfU8QKfeh8RQ2osHyzXAJGHrrwoG2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jNdM3g9BsmHPaWXAyQxDS7LRxtPVQf9NvYJRfGeytBGqyXkQdyC5XHjzKoqBCtDKNM8p7TEmUMsVdRkMKrb7pK9",
  "key1": "3Awb34vjbDrCf3osRrFzt1Znj723bbhdX3gkJgujaVoDgS7warE4jAkUHvacywL4TzYRB3kqnfDx72Tg3P8UCFeu",
  "key2": "5km1T7Pio4bJ3YH8qG96XLwQu7mutu3LizQSV9yKeGZD81yYpb8irq6nnYVLx5ZG2TvWux55QX3gLBpyKwGfswCG",
  "key3": "4ebxScDo1yXq8VzHxG27LBeNocu6moJEUuFXnTx7AWtsj18txdWKqRq4B9fPD3M55ASPqvtyBCrARcMAk9A68hzs",
  "key4": "3e1wDDTVUiSSdjCdn6xqrAMbSPnQnwDm7zdsHh6CNzk3RqcHowvigkmrTW7HhLWaUSo8b7ZZ6bq1cUY49CUBW4qT",
  "key5": "2vMTxjy5oG28Wa9rXMJijKoZBuA9UVundTUHsGiGX52ymo7Dyg5sAgYEkn58f437NAGmatkhsL3VtCqEiS718f9D",
  "key6": "5BdomfCKCdduigaWP8jhvxjz5EYJgxVTZoS9VfabvyuYaW1PzmJWNa1CFbL36eLYSfFc7niGbgzKN4vPn9o2TMxD",
  "key7": "3Y7LUj5zRPui11RKSMEsieWNb6eoFbRe2bbmhNjfKPooXprEudrpYCNm7qMxGH9eTQvZ7mvf6YCPuAZqT83k5K9X",
  "key8": "36JmaLRBSA5c7iM6Sbrc7eANyot3kY9Je8Cs6eBWAo9UQcEW5ubXs97YQV3WV379iWzFgpzBXEiMxqgo45JE3K5j",
  "key9": "3s4SFuft5sxTYqgpkiMDGRkX5USMGwV5KgFwzUjpSiqXUh2ihU63rcUyDJv3hmCke1hJe5doSRUdDmr7Qq5sVBV9",
  "key10": "X6RQQYoPmdqHnECtrgSpb9BVPGXe2j6Fk6qQCvqQdCoiRi8YnMVbsgRLeftZ5bxEeRtfjBuhq2fNzf64YSqzBfh",
  "key11": "2Xsjg6xQQRyz12dio3ChunaLLpbYfrZSWxpnKKR11o9DLNgG3Gdy1SFoDLBCR5w32y6NBCpUkNyaJP9j6mABKdVx",
  "key12": "5V5VvGE5wzc55umokMUU7E9zMNo4gEf4dPDV68HiuTVNFwKbgu5Vh2aBawYt2u8WUiNtjPhfiyf5GmBTVUXtRR1z",
  "key13": "4CS3CKf1zxxT879SLmz8SUiGjxEzsP1p5FQDi1RNCGpbV6TLtsyYK7WuFG6avmH13djASY5fvv2NJhwXDW9xVYQQ",
  "key14": "3R3PWcuPMTkhSnnFFgjH1sDcpTbYE4sLxxxbXwfzFrhCF88Jj7V3NdyfpDsTdjhkNnAQzqZKzyUmA6KF2r3NzEwF",
  "key15": "ibdvh1xq7UPiHQWPDD1FSAQHV4np1JdcyMLArdWsAAwDMnAKJnxjeQbEPncaBGc9bueDkzaBCiAU7JAsD3L9s8E",
  "key16": "5BNHBk3mX7hGmLiWY6ayMQH31XuVKSEjAAn2UoSQzHd5SSgVGHp18LRGM7QRSmMaNdMAbyY1foqyBto4jLzR7f58",
  "key17": "5vLBhCR5SgpNFxqi2csxYSgYZG4ZJpdvU7UwsrrvEswDLq182watfdUFJSzUTATw9jdNF1J18JWGqjXbb5sK3AYG",
  "key18": "4CJp47yFiLntntxR1VfMUN1nD21QhYURTrfEmLcjEyTgRixe9HLeHig6ZiXwYrVVydHXUYnbhfRKShnSu8bQ2hUE",
  "key19": "52UA2QZhBQC6hBD9ZtKEjBLohmTMJVH232Qiu4HFCiBLFvs7RtvUfHMDxtajhJSZqBV72Qjcn6he3LxhVSuqhEor",
  "key20": "2yRTysPm6Pbm3eqic8NdgDBy1prhzVfFuowkTSeSa6oC7Q7py5fsgUMGzmha42rWByuwBHD9uHH6iGBoF8uRAWBP",
  "key21": "5RUhccNfYEccauhjUWuFDWVvE34JDDraPUZYNpTzf8JR8sowHQCKWUpQFWGhMxRq4VTaA7QRUqd65LHeRJcw6pYP",
  "key22": "3SQ5v7otFWRmyruFD1nUpiZUrCTBorr86BpyW4roQMr869mqKWuoiXnoHNnRY9vc8Dn1GCJgkPLtuh68372wLU1g",
  "key23": "DwmFi7ccHSAhnWZMpzVP9NVyZJZcqvNrqq77DkRSPTPfGsbtBPuiFJU71vJxVHPP2eU19jSshR1nPhzXNkEZbuW",
  "key24": "ZZ7e9hvRZpmZ7BrYkRyghZG9A4Vo6npU7yAuqhdDQwo3o5PdoWTbFv2BiNLaWeJ4iqLKXDjqzpzwbJKL5C2TMEm",
  "key25": "5nAXYE2Ljooi6nEm62nDopG91g1as2AgG6pLaqy3ZtVirPstoQtPWdmFC153uDdYnufvg1XSQzz16GPovHJpXUfT",
  "key26": "sXTsr17VJBAMgRQWXdjMdf5UapL7KU7UhtLeQPtiep9JgXuURLQXmdRJBRudLWPJxF2zvXXmXfr2aH8KwYCfJGp",
  "key27": "4B6q81mZAoCgC7EYamZEPJRJmnmCw9foS4ftiUrEA3WYdu6xAQ25rJGrnjwYFa8kBGDKxcusssMgT5ZmgJiHUrGV",
  "key28": "45AWtpzhPTw9rJhD1WkysPaPLtrtRgSUsAkfeRZ74xkDeXU8bfcCdcbmemQTgXLGF9QgJkTs5A6Z5yTc3HVa1Jys",
  "key29": "2d4DJFRYViUCJed7pXHq9f58grULW7dZn8DGYEAp3DBemb4y9pB2R9a14ZfHd4d5mU9LR6nbYeYu2Qw4erFB6oHJ",
  "key30": "k7SwR1vYGF8kPSwymGMsBDzhPR621edHQBSZpaJ7qo9Q4cdrJWGec1hieY1PnkHLH4GwnLbMNHqxZRPyKCpBBvF",
  "key31": "2B1sgp1LU5K8cf3VUDnGABQiLpKYqq7eTAGfeyC42Qa9W7xuuCvsTvv4Auk7hzQi5KkoqVK8T56hkV3YVhYM2oPE",
  "key32": "B5jmmc2eRGjZUhi8CotY4nQVc6Ud4F7wLq75R5UckmWjiLon3iS9XyiivcTfNwZueVGgztD5ij3cCJoF5NT9s8D",
  "key33": "sxEKmdqEmJ6ms4e3qm9KrYBVveQFzoV6FqmDBHEZsscUEGzuLawzTCtnY7fuxPyHos7ht3y8NpnvxnHq5swTsni",
  "key34": "3ALMHdDDL1EYgeEqRf3fGHsasVFdSvykNEwCmtA5T7JBQQ2kDngNgi22b4oSrGX8YnhTSGg67HVNGw51Bx71ansy",
  "key35": "2QM4qjX9yfafGPH3RAxChHhgfpvpGHafuHPfKVSTx925oAfFFfqBzJQXbbHK6oT5eYFAPWPx5pjSUF9XmSJDnE5L",
  "key36": "57V4pc8TtKhBZSexiXQxKGNkT1ssKKZi5V6WoJU5wcQ7Sopv7R9Mu5233mBLy9Fg2axr8Cj9rrhCnTk4faRR1wV",
  "key37": "566NP7jEYhkF25kYSFnK7PBLMefgiTw837xUnoDM2sLp7qJLiZ7cguFvXtsH6Ty6i3VZMtoCp2Ffo3nTZSZjaGzN",
  "key38": "4mpzsEFZVThyzvjE911gM6NvbeQZy8qY9THxdRkCcMVSsMZ8HzVdbozD3PxAGgxfwnZE4BK8b8kbJsU4PCEBkTE2",
  "key39": "2284FKUhGTxVdtswcCAYDwqWftHJ35ahbRWJ5GNeMcpsTqcF16GeNhjxrnbggzKwm2dG38oz2Kc2EKSeAxPsB56x",
  "key40": "4cPCzdch9f334oSJuT982fmRDGdoYFTVdbeFihtcAuayHMzMTzDd2zzCcSmM9cWUVnCdLWGpjRLhH6KS85uyqnvP",
  "key41": "2aGNiNLnSRLHrd6YY2CRvxeny3UWUp3XE5xtcijv12X2fWnSZX34YGeDjBKdghjEgoHgKetCu8NBeAiwbihUVg4E",
  "key42": "3zdCxCbRUWiqH7PNfc6XrqnNrUgVFdC15VVkcAY6cX3i645t484kR1Gjdd1Yupo3Qaj78g6nvLSsFLD2j5W2VZaR",
  "key43": "4ziX16FCLnHzvuDswN9J852GbVdg6bpTcpG7vaCuiawwj3mPiKfu91PbnTJu1yyyUJcubEdTAHoMuhnVxqdoRdFL",
  "key44": "28KfnK18NfqDG6f8zuRCQSf2tx19RBgwFimm8TpLa32sknt6Sm44eBRm3mbsJbsseV5KjaoNjgMXTzKErhNagZhM",
  "key45": "bputgGZ2oUEmd8Ef2AqB6imRMYP4vj8gABXUWatkF7YEMrgkutdgfDou6cJ1mxXSFemtmqDmHs38DiNyDu9BwxE",
  "key46": "3rGrzdkQTLdWCSaBy8Ko5XXmgBZqxrV6DAUtY5Z8oa6DXcZxKzA897LpRafbp8hZstKWGVMRJU1EFcJENkCSDU5z",
  "key47": "3gLJKae7Mh5AZWZcdURPuUxY2Y2Ms8MeF77TrUSYGrvXQ4eS3m76wQrhCVrjBFVcwThxyZwM1DsJFjYRXRpwtYx9",
  "key48": "guztDrV1mwsHXmzVSTWZAGH9mrUsbUzx3Fwhj6vpe9trtdwFoCB7CatR61S43JkqSMbuaRPddjT5fjmmnQrFPLe"
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
