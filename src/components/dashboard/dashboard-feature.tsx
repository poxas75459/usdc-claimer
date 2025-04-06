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
    "2FVqK1hBHzGG1sLwTC5fe9uSym5WJADKxiQSG82hpaHRfDgDWB5ouNGrzekvPh6sXe86osBa1X794AxhZ983QAVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qJaABfwTNZ4i7e9Q1vD2wSo2o5CQozeREHD7aWmarpEr3XBRdKBcVhpJ9nPGFazYRQuKmjaHPMhenMUzZkf9YvW",
  "key1": "3frC1K9ZAMztGwbw9ZbrDxbwx8y6XSxpQBDdjLaBM2k5oAa8ctSRhHEtS5kHNASxVcMSmW3VhURaW9iuGkFuhPw",
  "key2": "41yWf59CuXLNztL1Ui569ggqWfhKoxPB8ALjqmcisc41bqTK9NXyvzcwHuzqivKsA5RHX7mCSACXNTUCPyLiFBHL",
  "key3": "3byG1dMisCTEUtyXs3dZtoaLQ8qiXPCsL9tJVQ6ubDc1oiQJCajmDJ1j9ztpiBPSD7K8MfKHcfDm4jFzStZkqJ9s",
  "key4": "53uatR1S5N9Eb89BL77isaVtzJCqBUDJpLSmBRG4vYuRX4FRerWDDfVfqmHH8hjG2ApH6MNXV7Hiq1ftkiXMNvyE",
  "key5": "4kj1aDW4vG7Sa2CE41h2ZcZg8x9vbyBtPJhZVNtoMSyiqNoP7RQpQ6rsF99XD5nZdrFGM1bcR7qxNhLENGEj4wfk",
  "key6": "5ehKvFexLyrzpvxhF9jCUz7q6geaiPTFeiQ3B33kdRdRVm5tYa9jbLitaHcHQpdEmTUfEs5pW9ZGsr6f9mjnwc2F",
  "key7": "3nzzZvFsa984yt7KzMgkg67PYL3vJMxGVRYSMpADWCmuruCQTvdUk7d3fDhF5NdCCQdAUpac2XeGBGeptdMd92At",
  "key8": "3XyhvZbRQcLVFryZfpp75a4wrn3SPsWXkt5tpRqCVk2aBZ2qB9tFdKNRv2rtNXTwHXhx56rV5nssuJxQB9BtAWza",
  "key9": "4arWh98pe797sVZCcxCav14BAhmW6LpX96yh72fn5bGvwPH7hzpcSRpQMBU9djXZYBBGmu6URUNLV1wpycCLZUqT",
  "key10": "41Rgfo1GchUjFi3EbiaHnCKogE6hEjWsphRoF18v6c8LsD2vZvSFSGbbMARbHiabhYWwAjSVH3zCJuSEdvAJhThR",
  "key11": "Bj4okRnxisFqsxQci8c7wm8YYek7b3z6o54EiZVohUUWm2Uq6aGBD2pWRy2abZ6A3aP8aC5SqUKzQFZFUTWpn1E",
  "key12": "37CdTKWuUsLvZXRMkufwjZtfN7tkC6sF2WY4wLqYUmifzdhWoEHZBMNBKCeewXuiLZJ81uCSCuDczzStff3pGPcG",
  "key13": "4PQmGw12qsGecmhsmpC8nU3YuQoYXi8szTREyAF5TQhGohnRwY4bL1ncfkhhEeqxZnWoxGSbYj8xRdzZhEtvW7nP",
  "key14": "3pD15ucsGc72fSTJUUqsadpZdyeoU5ghcnt61mKPaJRvJAMvMTf3LaoDfR2nb1sUFWUcgfK8ioFEpo4kbw3PSnr2",
  "key15": "5E9LQ4mPmk1PeV3x7Q6xxEBxHR45zc1RBUt98hKdgwjzP9Zi2sgShJ1H61SMeQdZ7KwUoo1uzRsYSfXbMkJdg7sr",
  "key16": "41PWS9QeqTPscX4Daz1yLAuVWtMhNF82SJCgQUrjiXboMzhrLqAY9AdEr8Rk34NnsFGGCRNgtVzUN39o8bcr44WM",
  "key17": "4kcodotLeWuPzLwqjkwPUfZCcpP7THsTg4LEST5kCqTKFuQsHDCyqFKehFyuqm3LE5Ux7guUdXcYiAZFhnL8soi7",
  "key18": "4bncURVFD7dKu8a8XCwUpuFDXeGZfPFsM9kaou74KCSyLhp7pc6bZn2XUZLt8b5SLG4WmDTgdU61vEvvLPD2E8oP",
  "key19": "BzDDpuQJ1pyjwnJCb4xTR35DFHLsRbFbzNUoLUhUNxbWk42Zp3yRuGr5uTZFHiR6MZUJdSmeMFbKuyN37Va5APC",
  "key20": "Sp8d8YtPzKQx9aqtGGEFxPh7qNfqBzfrrjEJEqmmqmdU7MFM6ANg553sRp6nHVVixtSBDGjBZa858ggNobGyFGr",
  "key21": "Qz6VRF4nqLq4USoTxA54ozpGuC6KfHLo6aMADvBRzNaTxQmPPzCjgqBL7PtCrA97arB66Gi9HuT2hT8kkxb94AQ",
  "key22": "2PG3oume1er9487kGGkAm45Vtc1LAQL8uJBX8SR5pzvbiEM4gd86EHtdH4TizaGjH6q43zmMjzAA38TZbiq2h2K9",
  "key23": "4WkyA2peTLGJySH59VGkpEgS9bjcxE1PLmg3dCfctkvqd9KQL1NmGcqfeBFsSd8tx6g7CnEBc1gh3GUvnVzLAcTR",
  "key24": "2pECfKJ9fVXeytF71xgos3pfL5po1GXXVpwZcu745e6jpaLvhFf9nhR83pZAGoCDFk6SYjUznzkiAFdqBYRfeu1p",
  "key25": "4NDdrGyyJMtNqS4GQDHEnHjYEbM2jKYCkhiTzBvNUPA1F3nMdUKy7gfK88dF6111mcChHahJ2vJRDqvmQ6nrE5Fe",
  "key26": "5DTkLwMjFo8zboad2DqekxGujfHC6FLmXgZTYhCX7Ytqgbumermqr89Fjt77XeZkN8VXzwCVSv2N3GgELqWEE2VV",
  "key27": "NCD5ZFnWLrfrwvwvu2ADAFjCzXQBiv4fbBaFRZ4VTDAZPHECqx6r4mfyQ2KM2nRCTCWE8QcMChfzDkVxztRtSDk",
  "key28": "3TRxtGGS9zHAFxDYVeReumgcCZQFUrAnKfyFimVxgSDLNifZ8CWMUEc2kQTChA2CnXScx8wQyzpenjcoGtTqYSwQ",
  "key29": "63t9yc9ELYhy9JdmvXTCyLjn44Ns662tbp8dyVMzWWkKVNamkbaEqxhxMoUsU4QcopE2UmZCrmU52EVYcQhBVtuK",
  "key30": "5u12SZfHoDCUEdRG6gokBUk75fiYMtXjJ1tqqixRkBbsXfHW188dE92vdobcThMMxDpg2EPzDBKtiFWmdtqBXnKD",
  "key31": "2batNKobFFfcJZp7Xjz7hU6i5155CtVhsPJkzkzbd9UoW8HqS77BG5CZQbMJpr7m4RpFhaqUf5nzmAUZnCCvH3kr",
  "key32": "5uUxShFwfEUqfyuYw1PgzKkfHKuJDZuL37RELyy9qiJP7pSqiSpXZcprXiCV5Y5htA325UrRN5WLcZ5bG6SX3s4Q",
  "key33": "Ni3FTvCqH8yu1RQWDZ9cYV7BWVtv1W24BQtoauXjsWQbWUV9aRZepxFsC4FrE5ipfsq18GmqCUiLMnkKe4g3nSE",
  "key34": "3YFATDsNJ99avsYgvTocYXwMyxn2ayKoSEfwsAenEQ5LVEVCrDDhEXe1MTSyExH5U8Qf9aBrEhPgbRwQGjb4nMxU",
  "key35": "5TJ1zqS3ATWk3YntXXLeG4HfDGQo59r956WVtJqgWpz1Grn6YXjAdgLQwuxZxNsFrYztearg8co79CGUWWsJ4KfT",
  "key36": "26cMvjbFfqbzW8M18Rr3RocJqecZtKYd4gqnhD17t8a4LCDVzVpyQJce13n53r4CdiahzWEFDmTJskMk5PYJKvMP",
  "key37": "4jP5tcfaqfg7URWofseswEvYf3tZnxpWPPtZiCDACx5iAG7SS2wuUSVzKrd4bxabEu9N14FDeBA5sp7M8nBpZyTy",
  "key38": "4yRMC2b2JCsC3R2wN99fHNsVSQNfn1KWgLqBv1V5c38PqxTjLyAQuCLj5VJN7abkXeCDtxDzkdW4EkkuNteFnuCC",
  "key39": "nfFLMicb1gJHCJ32MTkBcwkbTAi93H4mFcmFBVPB5x5VU27gBJMvKMzcgZoyBKinqBsJSdC2GysidrEyNC6m3wv",
  "key40": "4LXSaLyW4FjBDjyE71hJLuAzQoJexwHagNabsaMQ6VBVmLeuP3r9uAKFbCrzoaWri9p7TRWGrwHpygKZoaPxBYSM",
  "key41": "Q1Z4KtKyXASfHKi4iPwWYoYukVmV7RzHZwSLDCVCjWy1KmCxVguAGNARr9ywMrLey7mSgmNjxwwAocyNEZtkM5C",
  "key42": "3rziyeGz8HnkjMpS9viVEochFT2VcREfEJshQHi5cPGKSXZv8v46e7RGJCRY7DMmnWVbLcHaPEnPMJEMZZdfEJVH",
  "key43": "5uBfhB7ZpgL17uDbxMmHXHUFnPyU9X5yPKpVEwVWa4HvotxXWhu2UikLYQhzaJxg6wgg13xYWadLKQjf5SUvKxbf",
  "key44": "2VsHiFFWpgZJebzemtt3wBq8u7Vsxj9tmSbTzyE4ReQTmAEdr18ViHpcQSJxJdWrYWFfi7WUQaZthLNwUam9VLCf",
  "key45": "2jyzyT7Z8RGzYaFeHtn2MxM8TBJXekv3F2BXfQPm5pF1HZ6nf8PTFWrXx4kJWjMmU3muat6N6afaXQz6zkwYzGQm",
  "key46": "45HpaJ5QSiGnhyyMm7tuiKQUvRwSkGYDiAvcpQ3S2idKP1rvjUb37dTErAjryqYyDnCBwC4MSWnf8WDqdHxbB2Fw",
  "key47": "4E3ceVayqn9ZKfK6gxyRscnE6jmkQruWAuVJEuVkAARuRizEoPmeUBeXc53wNxnbf5Qu51oxWZsv7R5hhEsoAY9R"
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
