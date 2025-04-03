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
    "64Qcx8Nt8ortLhRNBpgECvGEczEKtuw9XpCnRQtYZvGhSZSTEJyZyGF6W1P4ucLggMAcBWaLXz4yeJ2BPoJqXRZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NxM2t3Efi79BmLH9S7j9NELRKzXWV3DdzXAtGCkC56nyicZCwnvxYfxruzBytgAphtYNXt8TcEiMENKkJrRFkKB",
  "key1": "3qPYEMBuM5aehXr5oCc6DpWprS5UMNgNE3Cv7dJ8k4vaQ94gkJNodyWnPXuByxaiaXLMCcTjw6a1kMiXEsHGD4pp",
  "key2": "5Z39jyVGPAuaLxfr6XJk5P1cCoogpwxHdnzry85N2uw3hno2syNFi8aK6GSghJFbHZgR53p3BNanCgPKTiFvSCWV",
  "key3": "31NirZFA3u8CyXhiuXuo7mxbrth47xwEF3utwgoDsUtwLrbxBTjnWfdPeg9dUkQepB1psq1JgoNEbJ1J4xJ3Loep",
  "key4": "5J9kqjNKNjjtx8hiDsP745KPQSQSeyLzcAdenSfsZ99Qqwc8mYhyrEpAvRF982qZMrXG97BTC6xGsshUYUhPeDwP",
  "key5": "5Q9h3Xmc8fjRDe5fYLLaTTns7uJcbnq4RVbwu66mbo5CQUsZbEyskgcCFkK61VuitDqaTJwhd89eDvWoNcqhoTNT",
  "key6": "315vvae9Wo2iTJh2fHzKes7Ct9pGDcfwjAg3ZXXFAgCFRNNgkQt5NDWUxwSvi3Q8U5AwPCh4ZZomW97jgWcSiCRr",
  "key7": "5L27ognZwt2y3dmbSoqKq1FgDipbMn2EUXvJXMGwQ5UXwGvUDFWwNPHKMqCPQmecZXBAw26F1fgEBQwBLBCtn77T",
  "key8": "3o9QeaqzwaV9aVutj8NAK5K5E6ZiPBvPSAmq8hMi3qSqrBdZQubzS4UCwg85rEr96WdhMPKNJFGCC9T25RmVddVm",
  "key9": "27VmoZ6pRfkHNawuz3JriYxR3UUVqAtis82cB8N99jyJogqD1GL2CEMGKc4BAYDMHQ5mDSyH5DfH6ijpoXGhWxZY",
  "key10": "J7JWwaQdhBBM85jnzqakzqhZfS5PHHGKN7Gqmi168RCZNtW4x5RxoMfFfmkorsEcHHh84u1F5HvvsSyd4bsQery",
  "key11": "H5hi1gcmbhQnrP2bDBGTZmNjJH4jcXKSLfnsk1EYC53K2Nde1gAwwtyQTg7Fwu1Pb5nUg6DGRCfKXu4kc6FwAd3",
  "key12": "2qojs4o9xuVM8cka8ucpNs7DhVZk4jzfbvfi454Nd5iYrY73pxBkc4aYrjG7XCaiyymdu6wTEKdyi6dqnf3tJ1fv",
  "key13": "3hnFsJoAvNGeCakoQxhBrpzBYLZEoVM6VmoLhU7xvCaEwrFGChrLHbhNWKVgFzp4Zb9WHi6vwr4xq6kaQxVmfDx3",
  "key14": "4NMYCGtohE6q84EDHiK3EMeK6ourRKxgx451nwk4m9N438zJvCLuUpweVVnVVQ6UhnoBvHs1UfRCLToyDim9rzX3",
  "key15": "361tS6SHLFM8mXyHMaiPHbj9ZrRM452S44XNwvgkN96qLHTzT1Ny97ydchCV21rifoTvMGb3rfb6VbGtrwUoFoaU",
  "key16": "42mKb3mz7euoZQd94QuW2vHRGgc1Sfv8bZwg5v6Z8g9czLj2HYRhEdFnD7k6k52FsysLw75dBKbdcGty72sUDkn8",
  "key17": "gkjWFr13f6RgFtV3JRrXMrN32iYVmkVTzrVWbKXg3tz7jKKEppXW6gXoxtx4ZdyxG6myY5NayanwNZhpevHV7cL",
  "key18": "3Mhq4G1DKvirXawoUV8kVvjXYsq1M4zUnQExaw1h3Aj4mEJg4vWe8kaTSP313jzpg12r91ELuYWSy6y2e6ZtpNLP",
  "key19": "R36UkDreppSYmU25TcSnUvBcbWrg1xgPrkoktGhns4KZNZqvcgx2NASLeiSgo1gcMeKJcsKxgd1H9ToSivbB8dF",
  "key20": "52CcDDtp8qBhdc2DSbjGkar6XDichto3MxrueSLgkCPWf8oqn8G1s8VoyjtvZw5tV4QBDM2S6HVmTH4RsMBuqUyU",
  "key21": "NWv9QZ9gBWKn3ud6rHgweW2Vvg6D1iRqGnufyQFBrc7RNm8pAcL97dY1KSzP2A2TNPqT8TF5LHy3LSdnkNf5wT9",
  "key22": "5nmBRbTaRJVAz7QiAKVfbh5QMudNGG8wCj2AVZcdx8UZwz72i5Ha4B23PR4jqhSs6ZE9oHWNEpjgxGPq4NTagjJr",
  "key23": "5pxQNNzm3bDzuALNVVSL791TUxEqte2Cyx1a4BNYnRVux8QWk4gp7HN7R8dZBe1U1DLE8bMiLp4JACxp5S51Nxd3",
  "key24": "33Sfz5pj1sLpmDb6MC62P2DU86b4xohE6Yidi364ri23SNTn8U829nRdLNuYYjdGLtSBmdq8NsHxifMp1K2qUYgz",
  "key25": "4CFfc1GamUkJzQVw2VooapToxHQNNaztA4KRUPZ2w6WjHhXvE6EsMDKGhVGfxAtrrqdZjRSQpK8pi7YoJdMjMKfR",
  "key26": "211XrCa6qgig7XbWPzqJxzXC3thxQPrYSTRAmGPo3hpyASzREoDHiR8ZmbscB1QyNSCDfGWYpheAGB2JrTiE6vwp",
  "key27": "4TjrkQNozbjiz46UjZQZGDakkF5jHGpLtFC39o8VkrTtmPQGiEfZ2ghJX4wASVMxhCesBmpJVde6fPPWF9GQqM77",
  "key28": "3R7t8nFSfGcuwsHPAt3d5LNW77gr81iR42NiyLMiMJuZ4gqZUVpz6zJp1wjwFqPunpENwfXJnsZcgjgRGNJ3CzHs",
  "key29": "2hgxNDjXJTNdq651WYEYyEophuhpX76Q8Rb7xhaRtenPQ8NuyjiMVVjDfyjHNqNPwHznTRyeqUEY9Rw7RUQBk5oa",
  "key30": "Wq9NcHQWGnT9KeVhZDpZwHKrAz4ftiSqev3dtGDy3hXJTszh5Gd2kkFBYMdrJDDVeE5dhPuZhEzi5eqGTD52urc",
  "key31": "3nJXBbx1HEWhaGa8W8V7Y73zaVTdSrhncySVs1PTDpBBXQ5Ueox26pfkn2BY96BntW4DfAED7S5PYYNqxHhyNvG3",
  "key32": "24zzxdK9hYmQXpygzLqpS3zn12L31QtgBCxp3F2q9DdYjU2w1VQVFGC2dHz3iJmgwuvzfez52mtsGew4kb38FAka",
  "key33": "2j8gSHgFcVD93rgSs6Ngd3pyvpJiG23vpTp59kr2tzEDXxhaaWFzanKY12C5apHSbBWw1i96iWe7iKjN2ZH4r6MW",
  "key34": "2dvvwT4gHDTNpU55gDZjiAitJAqJAZ6ssrUvVtNKgp11NuKiFSoAMSF3qQPnbvDkP8USRPgaaJaq8q6s5aVbBb9F"
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
