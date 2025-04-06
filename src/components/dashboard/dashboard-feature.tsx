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
    "4WTm8abb4MsgcMUtqo1x4A7G5GBTE3DKp39AdkRsuWdx7CDDHWRfbDxjZxee9SRMU2trr84cfTg7qiDSznsFfMaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eBBahxsfrk6BLqeojnhAmNJazXqXv9qXiKNiLu93RqH9nxbwM3PKXMnM85YC9kTWbwjyZgTbup5ntQQ4zaKk9UP",
  "key1": "4Fj7743nTef7ZxXVJwMMm7LHe9iycCArJi7pWxS74SEB3wSa3gtRwVEWZaST1tVQujhXnKM5PhF74VNcREKCu3P7",
  "key2": "4hnSPf2Jfe69SHoaupWgqM2L4DPS1e2vj6h24ywHAmLLe2aCVL8LxdcY7ht7i4msVGFQ5pwwVoZf43VswYKhDKW7",
  "key3": "5ZyVAp5g8YPJYWJDfJzzkCj3sjYbmKuPRs8rq5YbiaunRe4JFXVCRuDwFBYvLwzhWVsAJyaUL7oZhmQB76R9SUej",
  "key4": "6AZc161w6qYijzsqyvuBRo8X9sqD4HrHXRiixFe61TSYEf6KTzuh42RdVuNC8UZsYYMSjZs819rr5QonL4TH4GW",
  "key5": "4v535oPGZfQrW49N4oHoo5QxGDMPZTnHdLZ5gemJQtCA28r4jEGYEQeFMku28Xj2uMB2Ba6cevSPCfcbQXp3EYUN",
  "key6": "5eK2NhaCK747e13ML8sHxSq1rZJrbjhv9t5whbnDd2LAm48r66RLACLhczAEHH7H1tPR9xM6QYefFvQbNLrKfW3b",
  "key7": "4TZyy9xjnzv5BxMrAu7rQ2AgyYmZvwqX33a8yehxJAd3LetMVMpPAkKESm98R2tA1wz1yiDWT2wcbRRR23J7AoLq",
  "key8": "96BWTANavsGcXRf3RUb21Nk6FauxBB1frhvH6HL3DjpAFSc5cMBwVm3puG177XxKEsPcqvspWoz36zrrKAHQB9E",
  "key9": "2cb8W9bBQTbB56W4PzPaeY3aGsiJn1uA49kEZmn7x84MohnhEydpPTy3TLV87fAN2TARPLKEAVvCWGVrtBaVX5xA",
  "key10": "MYnmBG49RfimfeNS9kMmhLbPGqCDF3HtXKbB2qysQNqMkoXYBPNTR9DpJgMTpCJnqeEsrpFhfueGFteovY8z4Lp",
  "key11": "RS51tvU5PrhQaVH8wzKH4pVpaM6emqk9ijoGtzWNQXM9SxrDigLokVo3sTQEzkhoZTLr5y5EFJZxZvoFapP7Ebp",
  "key12": "WwA6MCsofA7JgRK41nat7inEvgKdcwKrX6a9232bLEo42Y4YggXiNJHn7AvPWBsi2uzY92W7epFU6htgegPzE8U",
  "key13": "4fMDjaCLzEQsisHQK1jwFHQGieiSxwirpMB5Smm3tDSCCnnzgFRwerWhJrb7mA7BsFxQEzVCXMApQkEBYbj5As8B",
  "key14": "4smB4erreixSDxQjRxNKQ2pQXsdrU1ugVxrAQ6qNwjSgB4tT2QgNcNAiBhxgXAHP58n5xY1in4DAjs399VBHosuu",
  "key15": "5x1k4WExSWYwQ8JL62HAtQWMAsDWG38HrzqsNwDvLAmCXuSrfEnemv2yz87otxXwxTHDVFQTKMG3EymAdTVUB2LW",
  "key16": "3gCLFEfNdiRqQsqzYPPSpruR1sV9jeM2gT9vrKDnVz2hjYYDuz6wB31a8YtHRRS36NxvdxEpmP9BxjHEbJzCjXSk",
  "key17": "3QEsavbfNiDsdDkNxsD3eK3v9Hy1VvbfUyJe4dotUo58hmgJuvabFczP63jo6ydb5zPW416MHmKXb135H1nQgW2F",
  "key18": "MWocxjgtBdV99erWdZGFxPxZRN1xC41Wq6pUE2NRDwpA446T5BGBcviJqzPhogNbr3XP1eDmNXxCin7nVh9rMXu",
  "key19": "3iqct7cm6aXE4r9GKnUbnjkSB7bu1pr2MWyMCR8QUtSd21hEynA2o8khUD8N3ZRD3UmUtbwtoGSwndUPw7Dhvu53",
  "key20": "M2W8qQFEiFNZEkSd2GXsnHpzUdt4aY6QZQmoMgv2TtZeGDxhN6M9xBsBRQDbjKXqx8P7kskaPCUFy8c3gZJEgxV",
  "key21": "NjExT2cjg69oMJpZvbWMLQngyRGQHZQDvRa56wsYGXWYHiNo496g2ZjbRXVzWHQYJBxgQNrwPeRcQjn8F9L8Zhn",
  "key22": "AE3vCw5XJhbvxWM88icu666wDaEUfsJEV91XiZKXtWgcaMtLQT2beiaBtoNHDWwgiqfXSwMepVomzwZjui1XRKG",
  "key23": "VUHLYp3PQRf7znLtQSPH7KYKtRgXF3FF69a32SCrpmmGeT2e1xZ4hqQfyqaZyk2giDMfrd1Y2xT8PkJ6vhPWmTd",
  "key24": "4EnXMGZ7Tb7YeWAzVTxtK1zsCX8UD2kSW8UB3EEUv358Ro221KbLunWxgeknTuhv8KpjJaQt3VHSs4wh6Z5xg92V",
  "key25": "gRVUQVuHRof1NZeYmjnhBLUXj3MxnyfESH9bHZZDedy18CecezX5wjdsARzL5tcPrHmdETe5FZDse2tNKFXKPyE",
  "key26": "23YzGRQwCuvVKFQzqGMtbctxMd7LQtFWvsDjXv4sL9QS4tFFoz3bDzfHdXEvxn2HZHyyhkti3Nzd9sg3ttu6sU6J",
  "key27": "V7Mh2YU8SyoWkke92kVuatVtFrdV7x2gRySDX8GFQDMQVKR9yf28TdSjXEC8NKPX7HYCS9GXehedjhZRSehcLad",
  "key28": "zRcxiudQNotpDLbcZxFLkQz84UhZW7w3Jb5KtmWkYDdahoyZK2vszYkU77rkdBQZNgqyQxkGEMPTE6LE31WTZ5K",
  "key29": "r44FiFCk96vSePTyvj2MM3nE6J2NULwsMyyc5cXhmetS1rg3VcMatjEuAnXpmJX3STpYUQtJpwMJoWq2pQZMsWb",
  "key30": "51EhkruceYfM6k6pQxPVUK9SP75ZbSQua51ngWuqKpdHoZKbdzpRJuF9bMfWkrPSS9Nc6DYXVhTdY9yCHpCxidUF",
  "key31": "2Q7iM4DvFrhqeGj37afoBCCM7VtKJneSPNhi9iLDaNNMnXQL2neJtQkCzfaKkXp56nCNqJZeeESRfKCvHDGo1chh",
  "key32": "bm7MN2zHdcuyvq8wdAZkyYGpwegapwaBDfwsZyqnvcBMRFELmV4kzytuybaUbaNgA5xWFG7vWXtaSQz14CwQVNp",
  "key33": "32WoF3sKQzsurKgrRxZ9DgcrLhJeeL2c3gMM6Sc1mRSt1UgkcchrJh3RYSnYAojs16GCPRHL2zUqxzeNMcdWdWBJ",
  "key34": "56wPfUE8jjBuztkox1j2BRG1FHox9sC6JeW96decpVJm4HAXGsmucEhYU1guX6ubsdnKm21NeM5aER53urQ498UH",
  "key35": "3BbEsqJgJuBjk7PoUs2jKFUen2hCZhgyLexhv9mZ3ugVRD1ypXUFE5eW9vRUP9t3qQ35H3ZDZY5mFDhQf2airHk9",
  "key36": "3U2X9yQg6iHMKbXU2UiMa4cw9NvJycxRLjujatPKzEj5PRqpjAnaNmXHH6LEKvSBF5Hrp6EETqok5NKhvmDRgU5x",
  "key37": "3QUgVT9d2QyWRHmsgTQuyreHVjEbhkYX9nyFWAuxMC5y6ak41T2aMChLTHJAueNxfNvnWKXqSohuxSe1SLXnuAwe",
  "key38": "3WBJE2biYS77Qu3pjBn8Jfb4Fy7BuNzAXgrpoVirHZXG83wYG6FhjDnST1dSNpLL3pHYw2nESF6eXX7CmFobrH5w",
  "key39": "2S26m5oe8tPv7EWDeSPryRZgbGxpnDgCzLavt4xpwAJeRWwjjj63hbVHMStBUDkCwtXwYvn5ZMr81YkKLjcEeuCD",
  "key40": "5qs8iWwvFDg4mbbzsjGkX9bLjiuDbte4kmztZznTc2TTEis4kqhJPfXRGETeaJN4UHVXowfhFv2w7kw2bKkhynDV",
  "key41": "5bcCX6UBJ5UNwGFPrFhbR2cRGwiiDoz3SbibyZXRRgqF3fzDk2pipZptnxCmq7N9t9jfVAxk2gHNpHJbB4zzS1YE",
  "key42": "2nR7Pw82PErrxdQNfFBwo1GUxWVCHQ18ibUP9aySxRrdYyq3iQPaUm8KjTLKXZViLMb6bwbxpKC9sqyuGmn9ZqqB",
  "key43": "34JpLKPpbTMijd5UYLdsN3a4cCMWapUWyad279y71T1KKcg7xkeFQHnRcRK5kgianzun1XcSgSUv96pP5n3DYskA",
  "key44": "2vs9f49CEozFq33jfRCiFZQ8yA1YDJBw1iCdDFCa1pck5j9RPtsbFSQEFLLWB9LhEUf6YrMHL8HveJ7oDeqwSuDn",
  "key45": "5QCTgJYqaYxCuD199hDV5wcdZRAVkvUn9NHWLrXBes3cPRwM162iC8RAoGFPRUNYYkDaqHzR9iCLcE5oM7TpZaXV",
  "key46": "2SogJRfbKsaCPy2Wvqf7SZmk4xvwe3W7MjpFLkFaBsKMP6KeXdRJbfsZzkXyhSWECs3La6i1WyLtbTtsgBupFLUL",
  "key47": "5jL8sWqLZMKzjQ3gerJJno8WNiJW43xBojrtFt66swC159gUASybZMFhkttYA4MF1ccBafHek3aBCG43mzHHsy1s",
  "key48": "5HgKgVfh82kZMDgRTYExqmdXsSfMAoHAzXsMQCC5HgoHC7wYNE9a8QR74TA3rDoYC8ZtJKx2UnSjzCYYNFF8oAXN"
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
