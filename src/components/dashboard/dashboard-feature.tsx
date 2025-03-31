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
    "5KzNhqB3Rx1qBxwJoRQqC2QfTLik2xJaQLX6Fd4Thz7b6yudq6W8km5HyWThigxnjheMaxhEASLUAopuj12x4qv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NYH9VUD3BWXrc22eeSJgfNPGxvHNPkt8qE9r2h8uZtJ9v4L146EjHECB8XY4gAom2XDwezqTsfTSWqAsuKPUmzh",
  "key1": "22mGZPaPUM5A5NxVKLgXykmXLqrA8sJyk2mdPMgWLXxw2ZRhCSKkQiCfGsHxozhNCLu2YSrPH1MC9QLzQjXeYU3C",
  "key2": "5qFTYA3gsbF69WJGzafQ122y8q1dYmXGFpVakaGdaCDCEMrKXg8fyi4Z8T7PYLkK3hLfKUBLp18QUWza3dPdMWA2",
  "key3": "4gcMhtgtCBQEqNm8qDnucUtNDt7kig1QNYzupbzRX6TvC8UN6iYV9yoC8rLyD3Z1V5AF5wLukquLCkM6ETA1RJhE",
  "key4": "SGK89zarHjH9H33TxCFQrmBjPEXvVdyeFGEDuTAQn6ViPDt6K3GXcvEqUCjKG1q8Z4FakexAN7Y9YX9LATKJ4UV",
  "key5": "5c6b5GgbdWw1vS6pAP1DK7zDqNVzoFkmGHNHoGjSu1yi4jz4PJGpntJsMqi7dRGsLK4oNrxx74kyREn658283Q6V",
  "key6": "3BKAgW2oNkGTJp1fpGyJqrtkC8MCUL6M4UWhe3ANmXBPJDnYpcTWsCmL22kmcuGKw2aZmZXeHR2ARF83Ew8VnPru",
  "key7": "5UqLEZAxVqCWNn1WptCViKdgW2q4P4wcsR8AReSpvZGmuzRWZ3Dchq6gRhZ4mpCNKtgQhLDiGgtqAPat2T888hZr",
  "key8": "312BXvjXrmmKqTKxVTny6S7NEHPWo6GuAvt86EBey5jR8wNJvV6pnd9d1mHqM5j4WeRPPfHEK7E6fwcWChh58tsZ",
  "key9": "2Us6GefDKnRyxCyPY4ZHmyJk6zVhFFAJZpUsmPRJsmTz3igy47yg13HEkVvTj1d5RLmejLczmA7usySLHu4BwPnx",
  "key10": "5jjGe1K72KTWskSe34GfHscfTrrfgHRp2sdo4eeDvsXQAFp4k6NEp2zHe7cqWy2Co2VJJXZGaogj4sfE7FuqaF6P",
  "key11": "4qUrekTRZGkfhFN85EHGusqefG7VRB3qFVx2LEPv7ywLF3JhKJ7hSs5iFqHKEKSjsyR8y1Kg45GqiH3YjMxfHusF",
  "key12": "3KE9TRF5TrP8n2q44zcBDVsTUiaM857aVirk3YSYmj7y67RrQk7WSBwqAAnj8sRqkPdktTNrxoNKPyj6LbptrABQ",
  "key13": "298Gw83aL926o8Q8uyQtKx6h6QyXfNjRU3fe3PzaKprKcV1m7BtG4r2H7NqiWp6RuUGzqJ58eVa5YngtMp4EMCgX",
  "key14": "36wzg3DZ6S85bdPFyLfPkZYddHgSnEsY84jwBfg8mKeXhR5VMNh2PJaJbrDutLXgGpVXSoUt9PyS1zZbNDwiuQLG",
  "key15": "2E6bNRmvpk37SGSSd7hbXLaTCk1rfaNVgwpTEfu9sExz3CYc1SQBY2AAK3G5rTHcgATuDTsNG69Sk6e6huQGU7qh",
  "key16": "2zgrSbuKhHQafhBMLqNGVLxdhkD1HcPfpEhwFJW5QmJnzmrD8h2PhSdwDUDVDuVorNTPQx9qAcHPccSAEHe94xTm",
  "key17": "3o77XwwMgygyKxJd8nUqV3v2qXTT4SjwtHCMnuvAr8xp8bv1p6PmCigmLbxu2aoino4ketxrR6BpZLBLwr3WCPkP",
  "key18": "38oFqXDULhWC6KayE7N5u9YaYwbVp4idGKL1SHcL6LccKM16MYjPLHTZwfLFbowe1gPRib3Q2UjJsM5eTUK4SkWY",
  "key19": "2XQoBDbkxjDkY2cUtKrTKFDTwCngFya2HctxijSvyPA4fpHCwrrZWucCgdea3dgE8VNPMXhSiXDJSRGnjdxrNXeF",
  "key20": "3dwKs1MrXm6i9w2n4NT4TRdtnWU6mwCUjGUN7YP62hXsSFrW7ino64Wd4eMj6LiUVgVy5dpxJ345c75t2iCTKfm7",
  "key21": "2Ji3x9s3D8nity8JysBV16WDaT7n1ULm437HCjPhNiczdfR2EYCFR1Rzz3tGyWHusLuB5xsN8JMhjfU5w1i1EcRP",
  "key22": "ofrC3isW3AvFBxaUKiaD9DDw7GJaMPMSuxV56rvmeedwSzmzm8gwQQT1CpFjKSD64RGh89NF8k6ccFVANbVHFBf",
  "key23": "mu4gcAfhfiw3KJpDcjCGXtWDrfYCa484mQf2pNxtfUt3nHZLXq9YB8HNbutP2cdBJgELZX2DQ3CSpvtX3ssYh5t",
  "key24": "NUrFp2eLG3WwmEhpa7LcBBUA26FqwEtFPkfvpZ4PUEn723MuwXqKBGbkiF3RaoTMBy6FaHTjTCk24sWR9LhPnmj",
  "key25": "4FR27rjHpTM4rEWDWH3qqfFq6t41RRtj6G3Nedz4T7rKUULdkmPuaZCZV7xYnxMFv61wMFBCvuj6G9gcf3AjiMci",
  "key26": "5ibDRok6G4MhfavXW9u8oTB2KXQjWhJuAfxBP6LLt8Gwh79tC4efAADHkBCaQb3ARiXwzQkixJfkngZHsfuUMV9L",
  "key27": "4hehdwvYS9ZdrA9rZrLV2Hbh3HW3hjgLHQkVjimSUjhL7gQAJN3dvdznjg7V5nQFXEUkz4roVCE1AK2beDrqfRzU",
  "key28": "3zv5tKFfk68RiqaEk1rGEVQApJnqTjZ4pNZsTzkUfGLTDLovxZTfzxjQyrp3uF8wwHCjvjBopXZa9PsNyxZa9qta",
  "key29": "TVRP26SPtogd3LqABeZhH23hZrws65NVrB3PSfa8w9kL1A8Ls3uYjbQ2DEadXQnJX8PD7a5J5TAQTBmfqwVovjq",
  "key30": "3bZunKEziCiSEBAQnqPWnSCbBhJGT8AGbN4RfBDkR7sKw1JSSPY99cJwPkpgMmA1go5TFmB8g7QBmauHo2NjgfY5",
  "key31": "2ycZiEkTvJjUaUsrFUUXfPh62ha3sfU3iSLgSfx1PSD4ivtQqohY14f7c2bRakfuXN6wy4FHNJR7aoqkJkZhbnrm",
  "key32": "4ZYcToavm2kwxD36fY82NsF4YjTyVzperudLuVWa7qW9YkNwgqLwottZW151gSwQXnSXAkbsY6zvmziTMvCmaxH5",
  "key33": "V8QFfbGb9Q67rDjo9GXdqut6h1EKjwrqiv2VPNGysFNvTRgEQTa8AtnMsSD2Tw6xTvDYgZpUm4roUL5HUZ4iDkK",
  "key34": "4Ke4mi7nC8vTKxEUdCkfBhuFeWYQmYsmwxrWyMs2t8ebhsphX7xtTx2zcDAtNgPkz5ZvWXurR2orKFdof9ZDWGmZ",
  "key35": "2Zy2QRgfQg6tmGKNa1RVayXtBPw8MQaRr6zc6v1qzDe8PFVv4AryGMWtYz2oGtPSXHGHZJwWMJvwbn3Yqkw6SZBt",
  "key36": "2CsW1QxEEtEzfZbm771PPP4n8qep5Pwza76WZJ6FXrUEmyvM6RCNR8aETwK9xBomvSyqyDtc383AoqGWSiX8V3rG",
  "key37": "3mfzKXXCfxqBtN9c8tRkCAL8NEY86FoQA3LKgXdAa7xWUuChr3xLHMKESpqYFoZv3DofUnMYToPjDnh8b7n3gose",
  "key38": "3bzE6LV56F2jR9B41Ub286LBM7DaGPQ4t7Ezwg1CTLCYY2EEsW89GLHfZo2UppMZghNdFg3h1C6eCpeo8PRLFHm9",
  "key39": "5nkEqqCZo4zfYFJWz5fG2dbheScxEcFz1pv2EUyDYU9NK4r6Bkj4Z1kuaCdNN4caFgG5AeTLec1ruJFzobAmuJ8m",
  "key40": "4rCMP1i1iFDmYmE6H5zmrs9f4arRKyiBLjE2L9o15FmXEC1MTaKpCeSy7QfyHQ4uZfQ1EGuHJvv11jZQijL6gaSp",
  "key41": "2hMUEUMUwsi5ZEchPZU7vUBJ7YqB6DmPUY5eDCJgBooyhGmfwdZbq78KUDkNJhE1nbpXrSMkZCdvqo3khCCfWU9W",
  "key42": "3SEVoyddQmFANuDkPEWCcEaperkFgTvm9z1WqapLThZL77EGq4dLR3YC6XHXwDTSJ8Eo33YJhETAAQ35sX9ChK4c",
  "key43": "2HyNfni1UzxhpNK4eWG85JnPuWzvoisTBuTtcdwZWk6Vuesq5sgX42Lda3fh1M8XpaGtvY7tJ5tfdeuYGBfb9V1i",
  "key44": "2xSv42dtPoDxqHSQeYn9Cda87nTXnthdMCHa3zHAmVpAh6638dEcWXd8bjaXAitoUi5cV5vLhTjivfo3JHbYfA8V"
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
