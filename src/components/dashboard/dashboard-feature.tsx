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
    "61ifV29dmz2v2BQJzerwWt2mVZwqmJAYBuusuJtvUQ7D4KcQNsiSwWhvtTfq8wAMpgKJVZ4Nw9a9Y64fboBvZZ8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SoeCSJo18KUChmCsga7uM8gekryYgNkad4UderAkH7nSmjr98bweg6Tn5mG4aY5KWfX6V8KTKbRba5kb9NsWrNU",
  "key1": "2vDUErW3FWRW63iFvxZjvwtYBFoTFbDaZ82X1WAsWbsbPFtdvyvRgXyo8BYPW4913WN1hM7JGsQY6tkJqJu4SLY5",
  "key2": "2t7jjZYgLE7Mwo62r8EGwt56FRzqGaa987LSh2PhENMakWAZ6nQ5foqinGVbMjczWXsUrqTeJoDjekLQYc1HbiTH",
  "key3": "4jh6LoezbHUX41JJP23faQ71upoxpg5TEYYKhq2jbk8BhL4NQiNmxzsZQADvXBv1XwtCwxExPRSQo6G3NQcjf4uf",
  "key4": "3qh3KPji5npwAegiFfApnMgSKtNqXzTWFXBPtZ8f2HaM3Ags1RwhdM8GcG3dXB3prMFonhHwB4ce8LaMkokdAEw2",
  "key5": "4d7hgWq6QCCFJYVVVbmDzZUkeVnZxRh6QZobzxkE35UzUR9Rf25xZWa1V4vpDa4bVtBK82D4tMdSsyBvTFYERqFx",
  "key6": "5vi9NJJcRwQGCLFysMdRWiRLxFhoP1nEM7R87cJNKLeBRw5TZbStqVebVHxDadxkAjbuGPZg8bGY64TAU5rg44zX",
  "key7": "4YMr9ccEuRYvQ2SQQ13SL7QMC3ybWgRwj9uuZDRahVA3AySrxd1b5PUMH34nnfW1uwZ8q4Jr5jeCCpb8P7U29H7s",
  "key8": "4Va6evcM4DB6Mwp15Ep1FU3i6tNLyU8cHUwTSe7rndrWmSyAPaCjStAtB6gzAFkAXJM19ijfjwJ7tB4iC4KNxCug",
  "key9": "67avryXTYKk9gDQoDHfBY2nvrCyK3XHx2228S7v3GcPBNk1amHSJZn5hkUJBkiEZ6kd1FKXP3xr1EyhNB5jGH8re",
  "key10": "3PgwGxbDjvpjozGfAJ5DSEkryNK51ErD5sPxWNhM9Xqfynmj6uNngCth3msyrWZ9hWHEXL9W7TJZuxeBA37ZrFwY",
  "key11": "4jkzAdpM3QWtNu2a14rECqcjHRNXiDvUPWvdJSBfBE61qgamz9QzZQZ1SrqcXVAChngMDYunCAuEXL9veR6FvkWE",
  "key12": "5sPzZEDvn7vu8M19oyd23qzhqbkspaBbfYmVffEm7X8xpZLanmnjrFcoJmWWTwNunwYjaF7S5KqU6CgpfXQ5xWTJ",
  "key13": "3jsfCFxqi9u2XwqCUxJ2H47cn3wfybYEq6soNVVdHhodLdRoJEw9h6LoSfWoS8NM5G89ej658EJj3VZWAeBXP6mz",
  "key14": "2RdHTGSXWDaPk6CCcWodSEGoRXgtNeRA6gv7QaNHd3Z8nEEtgvY4dfgcFQydYRPe2MQwZd9g1twxSLXBuDgA1VM5",
  "key15": "LgCpnk42smyWbPQ95AW34qGjxW1fY8EqES1Ke3TpzvW7t2khxWVmYER3gtFcGq59rWjxCUi7kpv3crDbRSWNjMi",
  "key16": "47JZXmR3dokkyfDpgwg9Eue8bvgzMSwxncFWXiGFygY4jeAS5H1nK7vkJVGcHUZznVG2PSXPBaHQbpYoYQHaeLvM",
  "key17": "44JWRD5iiGU5hGj1x8auXf9dx9oi51YU2LWFkbcP1g2Xy15BniAqSY4GyaMvnVHkTxGh378ECbTYQb75SybCwzsW",
  "key18": "2n2e3HoS2k9bytxikKhWwP16m4wfrHJyiqKLADBzmJLqHy7sJQjE5twcGeA3y1DYNoc8M41EKSLT1KtxDHmkvQYi",
  "key19": "4KQEHCbzysjREi1U5bEH3y42iKPt1agnJFcXW5MjCpmu9VGWKdTTtZrZmcdvg3sYgWwaU1b5MmXabFLdDth67Nx9",
  "key20": "5vTrbGm6hmxiPjhTXaHeZ6bFcg7FmG6Z1J7cdotmgJ5N4UdQHsLzje3LK4MZ3ijbW1kyULschdHGQht4xTh3kmQ7",
  "key21": "3gmdTu13iqmaxcnfYEYQKv84DdNqpyihsG4hz2Jqbtedn9XGoAAVEPeewgfgNgegaqmBLCa5y6oebv1PJLPLBgwC",
  "key22": "5axuwGz9cVGuWBd6B8uQHCNJ1oPVbSqcXm6Zgcng51xCb5hKh8AywHLXcoLTkYx4iPiXSJfNchfm7gwJ8yhCG6dn",
  "key23": "pDbjJn4xufRLv9Fv9Uz77XggSdrmWxFEBeHatZhtZ36zDP5kxcL85gwFHb7QFVjC2sVfXkfjEd8VYtjEgseWSvr",
  "key24": "5XeoS9YPAudZVVvxfcKGkBmonMtdd9Md2xS5oDFkt5HjtwuEpVdtEA1z87UYanswcjyAyHRqbiUiicEnBSq2vzgH",
  "key25": "3EMnSE91hR3VK9bB4QfTQbSdcDkNYfZVBjr2o4QfP4UqB6DtXwMTC84GqcN62nnGYaGMfVzsiHUPSkrLgCgZrHof",
  "key26": "2t6U8xhc5CQRj2RmePAD3Ewo47Yubh6PXX2gKWkPKwBHAQRGesoTKvkLYuBMsiMmJ1Ra6zTMixXJ65uPzXRUSv6K",
  "key27": "3uVH14T3vnVXmXndcusVDJzTvBc3RoKhC7VHddphSmjcnpesMEpzLePscaLbRdaysREWo3ryzVxSE54YZ3QxQaDR",
  "key28": "21ss8rTyPiSip4kCFgFuLoyJb9NFbz3nr1HKmYyNV5LhmajQnaTAU6hMPXrkXL8AgH8npWRGURJLKLLyCwbCzW82",
  "key29": "8cTbF3W9B2VoE9xQhPf1qFCzVy25d47mT9jgWWXhcmtQCYmwy6BtMK4QawTFHCN2sgTPQb9nTUzqNy7YyBAFZK3",
  "key30": "4mw3Bn6KaLQJXoMva8QrD5an3Gs2Jw8GRpiwgZGYae9K6N8Gs8FtUpo1ikVJFWeNdTKGHR7DkcnAJnr52QabpM9L",
  "key31": "3D4NNSQXMXVfi4jxE1q7hSD2ygQmRiHPwY8a1EMSNtJ2V3m8k3Go21qVe5qVmBFahPzoSvDWShDMXirDsdJcAqYJ",
  "key32": "3P58EvSmBi2b45thFWQXvXGNm6enSpWkM3tuVSRVRichPxm6fE57SDpdFmsvfLdZeYQn4g1nuGyfLs9qpRqzSHNV",
  "key33": "5wJZ1LSMXDBtVkVkF8gepS4qgo3zSxgav6RSEJfMsWkBt2CfEuXdyUSfHuTKu9MY1iWro7adKZXSTJhhMYWTDtXq",
  "key34": "5y2gpJzS6ZCQDm35pvjLwWpdhiUZFXg3Ysq1brJ6ASNdKvpKMmi9vtuhnBz7YxDKycKL5icUtZS1vmcKNZPkeZF5",
  "key35": "3cM9VUfVeDM3b9H6pTRLgg5mYXJkRY26aMxLpEXZGLiG5m8c8c8m8wUGZiPq89GF9UgS1uY9iLQaW1bLbQWK55yY",
  "key36": "3tXKBDvnUquxSH76SWfGkYCqNAnA4E3Ex2c2pty84ujK7c2ufiWCeA8zXo23Avm89Q8cNuz2rkKnmMiuE337fxWQ",
  "key37": "5vnjwSLCT6ZMgyveX1CkaZJnvfjhVRk5hpiuFKstcYBEJYkxgSgoYJgd8j1xWe15ZowsYJSPnztTTTqeQa5PaQYJ",
  "key38": "3BL1tpuHjVDX5CTsVAwQhF77YKTZ2iQtLqsTa7inc2QYErc1QrEmDf9fvpPXHNfjPMEUhJu5UNChZdZMjLqPH9BA",
  "key39": "3RFn1yS6eaEs8KYah8ooABDqs1Lp5mNgXpAx7xAu82HC9phf2vg32xqSfBttKzQagALCw2xAd5PQRpTJUcSN942C",
  "key40": "2KRb3zvmnkjHVsdRz2N3G4y6e6wY3QFEbBjgMPygA4VzBQ3GGnR3Wjjtm79T978UMonkiqswz2vYEnx6X8fQhdvz",
  "key41": "5dUZfABfXXA8p4wUQFQQgBFD3LFzRQWpKBoYWHaSUTFrmwi1vzaDEa6mFLMcQKXU4pWtvK9fLcQqvLrY969y5KFZ",
  "key42": "3n22oBipLJUdFGbxGUAYeS1k9saF169Be4Nk9fppCYsw4eWKz3emCcx8kdtNBeLZag2oVPGmTQ6E8hJPaeUJzpMT",
  "key43": "55167yN8BNoGZvK5vKqxHwTSfhJqvTCWS1xNVc2mNHhuWTYkyrgojKVpW6Se5yc2TBxNSp966pDxZJr6E9UUkHyc",
  "key44": "3aB2jRCxUUpZXHbRCQ3C1s4rThup3EH6kvAaNmhc2tCAi6QPZKsRuWmcwFmaitKzoZG8kFCMb6EN7vesA8yrqskF",
  "key45": "5va1mB2bEEw1jvqEbKQPmD7wNCAwZonx6JHCbVw2hQ2UuLRFJrbDxav4kWHfDeTGrMBHzJUCYbuWzEHaNwAoUCSv",
  "key46": "4tjkERAD4YBzuajS65EBiPsZLR9yzFFrCzU2j2hwvZRKBUzhkVF5ykkJ6vsRYgtm4tv1cQQD9xumxmdVbD1jP287",
  "key47": "DyAsdokViyFqkS2NoE4bHrxxMgfH6kaQY1sCqV259fQDzTCrNfkSAE8wb34MbVps68YWMLGdY7Wn8S6CvtS4VpL",
  "key48": "53CntDtcgCpbGnVgRGiJaNHbNk6as1TXXidNgCKCFVN9L8kQaKT5jKCmfKtL96vKA7yG27iaYGHxA3v61sfMjHx8"
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
