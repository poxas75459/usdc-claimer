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
    "3y8dT9A31ESLXqYqVed2jY7xbzxRSjbswSAYadyDDtK5FaKy8NvsT64SiTvHvdrKtAuv9aHPJzg65U6KhGWs3xaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X4rfisM36qKUzCRcMKSummgFbcAe4pgQMzwrBsJ63Y7ZDP8q658ffpy7cuUoRCFhr1BCCngShNrkncUGE9nj4DZ",
  "key1": "eeJdsLzcA6YoSm9ikrenH3ywwDuzKvdXpP5RxVEAvJa6NDwtDpa49sUAzVeySQD2QyQ8sgJz8Kbzbi8zih3unym",
  "key2": "aCTkTdU6xsvVaXmKkQRiVnr4stwzW598YMVfVEX4vNDwf45xCqEczMszUMgQ5oJqkpEpskpEHr17vfJvQvjgdPH",
  "key3": "5HPT8ZhRmv1BcqY35qTxWmpZdPhRzRHXjuDoUEveMpgm9yoV34RtCpQw66L91nobcRMKNHLLWdWKTxxFrmuEf3vj",
  "key4": "xkVdCDhFQohT1DTAmHtgQ6oeaSX4uQHmozMK2JAMtuB2iK47u2pmK912PUegWe2dJYpeAuNNz92kz1QoyLGwZ3W",
  "key5": "4gQhP4ULcgRf115N9w4aGnLsnaf2zFVvGq5jS7W3FDD3VBB49zAviuUKAuzyUMD3tsNKqTk6CK2YY9gBk3QrjAjb",
  "key6": "w981aKWFd25inZQfpoFKbyq7LKdBUipNUq46wBEu2pA3UtYaGgkpP7vPckxbTjCtDcBkjYUkQkb2j6BBrHJ9emH",
  "key7": "5czF7CysYoQmK5hT2t5ScwcL433XSNWudWtUnw573ftRiZT2vQBwyh1wr7e1viYtCGzo1pGu2iaDK7GS9sS4Jftf",
  "key8": "5TQGYoXTarSFFJbdDMrv4QDVT4XdLEBQmLRHWra4M1TzW1oE2Be3osoYddora3ozWGa6DjcwWjtGPcxJao9xACGU",
  "key9": "41dKmfxSk2xN3ghohiYw585Lx3eky1w47Dizaw6m8HwW1nQpUzjnG3sfhQLPwpEE9y3D64fkT68Bnv4nfJyciBij",
  "key10": "3yKFetz1VNLugWftk3iSYo7baRxeLJR5yGdw2HM3UCorfpAuKUzcR8zo4KTvybA8spX6LmAPcgM8cGLf1KzTDeMR",
  "key11": "2Mz2fy892V6cMJEa1az7CTeFqgqfpPQJVvtQ2XotU6vQNXxgUcFxY2mBfyDAJPGxp6LmspZbsQEb6Pg1tGhkLFnc",
  "key12": "3Y1oJwkhWf6SGGgPa5oPmjfCbSZwaco8gwvwUwenjLsR9QUQfn9ckucS6bPaQfykoNETqAQU4ZznhDHSLtZs4ga1",
  "key13": "4tKbPNFUUuM5QxBE3NSWcesVnfgN2N2zYTx2H5783Qsgnt7eDPzy3CGXBf4aMfzYwVMNav14U3odMCJTfYFbE31p",
  "key14": "35sRUUPNsfngNP1UqnARxSS1rP6Q6AVkdvy5Q8wTVmkS2F9TrYPbRT2SBikkixysVLkn9kd1itYBLKBwJXGrp1ev",
  "key15": "2R3TXn41Y9GbAxqFwXXaT27w8PTWd1CPTDTXYQ4Zc1DwtaGBjzdugMJDb3b7FJSAdvM1S8hcBvU93Aw7Ptj2CFf3",
  "key16": "5ktouBrWiycBia9AVhuKqYZZXTFX3wZ3va5LuWc5kiLCrr6bEqbt1731tkNJ7DorcvNMg6UtYWsS9xhkbmHutDZV",
  "key17": "3TNq8n2h3KyBLFjuwYStqYMjrFEEketz8eoeMFwBo4YozfU1aKMY66nhmbS2uZfG5JUd4dvZ62F2trmP78KG2Sbi",
  "key18": "5GLHxFk7ZbnHEbGuJgoJHM6gYchcmZxJuSGajjWxvGX8mvw5YpArV668rMi1WeHPDXrwzyXocACUpXEubqiNBJcy",
  "key19": "3jwH9rf8GYazXMnmN44cPuzqqvqMdhMAcgejRZXbPnXAE9KHxvye3V5is9JJAZNA1mxa6hiUBdgtCzNUmsPZW9AC",
  "key20": "5nsLbvGiFLX7o5eGvwf73ZAN7orwbdi79SWmb6Bj8t53kcsr9jr4sjp34iEUuFhR9yj5KsjV6oXckqACp7AnPtJU",
  "key21": "46mde8ED24ZrDmDuanjaPSX9puNd3boknJqf6npfdSWjVbQbzAM4uTJc1MfQ7pwHeSWUVnTFwYUpkUHx3BbrB7tC",
  "key22": "4yd6FdjEZQJQrjyGwwbCocvokNywMuyC8B7bGG1kGM9bqpr6okQcvasHrW8wcNMKdr8sYcwT3VrSucQ9r1DohDrf",
  "key23": "DZSN5iKRtFvUNeYLdaDrSFmnTSx3GprZ6VZLrU9zpRHZmLawU2q8FftHJg2M8CRai1aiCU6crP8HMzNUAL2eKt9",
  "key24": "2VEcP4T8efR4u1hJhrN7khuHaHZEBMPDKtHvQyUaFX8MY8sFqXExgpVCrjamYcSVEr2RpsXn69BrTjoNdYhp95Uy",
  "key25": "2rSres7W7YYqFX7CDFL6hrBMQo2Q98oa3o6pRvxJHWone89KBhTKX6NiEzuikDBhHAvtetzta5vDbRk6iKNhhjEN",
  "key26": "22HrcQ7AiDPZujUuvmDY1fHHiWBzcHSiFCB4sSg8JmncGTDiaY8tdjxH48M3WS1xWATVqUpzKtxQAtfWHaPmpBCr",
  "key27": "3RyRReJf2jJ4ka7XwfRhQS6ViZPVi8Ve6ybPuQZRnxj8uL8aThfBVh34hfgj4gBtpoDZ4QUWW5dMUpHxMj983WW6",
  "key28": "ouppQUmtpxD5DHLFRKFccnMxqTSamH4jaHzbzd9Qbtqpp5Gdux71bBxQaD21Y8eXZJnCytMpcrf9u7XmVefu72u",
  "key29": "4cgtkPPDvU3vNxdVne7u5W5DVyZpHNkLijnobdQbE6VRThYfjmwaaTXrtCBf9raEx6pSEHHt5wwtPAoBYSAedv5t",
  "key30": "5EzXqFajYiSE4gfTJW1WncXncwop3WGmPwp1GDU6FEk58iMXZetbjGKmoGLbeiTyVtrCagdTGjhiegj9xUp2fwU8",
  "key31": "3aZb8jgTGMxcHqDVwhuc4yfP7Xqrf7Yz3zMZvqwwSf3XenZcp9fuXPGUwzmtNfYMaoFeiNZxrutraa9rvyTAfPDa",
  "key32": "gQdswo3KDyRjcsk8oEgocL1ZymkdQLUx5p3CFakhgJuvktZMvHwNBuxRECcFQrFFBZghabpEsT8AewrpzGQ7w9t",
  "key33": "5Kj2n5WPrd35G3kY427HUjgJEpJdSdi7EAuZwCoxd5pcxFb43qGhGF11g3T8T5gD4Tz9JxHVpCJLy3mSbzFo9nbK",
  "key34": "5RdALjtLNqyb4A4QGuscbu4rsoj4AKrqAdNbws9Q6j9iTyohFm9MkWmunDkLsSGmyAkC6YSBUeXdjMELM92dzGnT",
  "key35": "34vUMXP6imPp6KfdoYj73s2wWCfrR763kGvJz8uUC9HE5kbcq19CdfgKn3KBXAQ6DmKfaAZ7EPN2ondtt3nDeb2g",
  "key36": "5DYD5CsTsiX8NcgrkjokuizmeqJyxyXVYevMiMRmVbdbb7qZ1kKYZDY7ZJd4qDC3ctMKNWmp6WDo5ogP61B8EBm5",
  "key37": "5Lh9osUKYwWx97csot2fd2hJu3iE8yd4WgQAoF9gKajamSCA2fEKXkkQiy2eQyFTxBHUiwQLz6FLkJ2kftKHS1zk",
  "key38": "4GTanCMWKLyzcdQ8jmFZL4mez7TFwKn8H3ktYEZ8r6VvcM9y5V6jWSG6uYqV7rkvFDjsEu7ReurhTKPV7y1taRsJ",
  "key39": "28daH3CPckftqUgBhaJM3pRH15BqxaWjgh2Bh2aWLJVyZZpCd9LqnHBQxivVcVMeowsjydVnV6m4wsWcH5EyRv5K",
  "key40": "2s9DZPxSb6KaXMYCNyVTBhaEK5eZ3N3TThkgjNdgoGQVgTVSMZ37EMPcRY7MAXBEVcUZQEWa8fwmqdYVo2fJS1Re",
  "key41": "3qkTfypFhxiTMafjXsGQYxQnfEFnq38t6K7F5HVxsoCukPEK7MNLZPnfZacyJ88n8V65YfF2n176B15FRXUHYzYh",
  "key42": "4i1Tsv6K1hxjkMPqgn1XKguWkcFm1KD8WN9np9SMSRBH4vRWEWYDmufqQreDWgnGg6TvudHEyPL6gtoheLfB5XBU"
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
