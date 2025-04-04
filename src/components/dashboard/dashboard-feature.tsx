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
    "5tRc1ShYRG3CXUujbbt7UDv7rrhuKMdpbcZAhVhL3Ei3bwynGRNDLZsadEGRjHXy38FZfAifwYr9qoCEjRdy33rX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TiBTL49yjoUXNGBJQFrSbtFFJndGrqYo1j3R2ZQDNHPGMqXX4GCiapF4XmJiqTYr6MWycyvNWq2oX4EL3tTmACQ",
  "key1": "v8TwLRPM78cNeBvcGVZrENz6V9JdroqyoCDQetLhSmN5yEqrmSiXn9S3Q2U8J9j32BhbRpE8RkwMSmXTLzop3yA",
  "key2": "4tzt8XfEP8riEPgPQgkvTQdP2avreB6wLv24RBfHdCX9ALPF6UjH5NaKyhM4G6XG6es6ShZn619rRZXhLTYZtat7",
  "key3": "3n6c8SJPgdhocGtmh5Aqd6BY6rP6gCLVPqfHeE8suyUKoFBE7qaieAvSS8A53uFmRBbzLRjSw8EMm9AnUfPnK5r8",
  "key4": "5j9rZuQnrH156p5vsbhKteT5XZ8DyovKj4akwm6XjEpXwWdpWBHHnbBWVBGwqMseSWRkaoeZGUA45iF7M73oeAAB",
  "key5": "WM8xvuCJtd259TgpncqkgR3AoMdSg2XaVT9p4QJ9zxiNp87heo2hfXoFCMKsQDAgJ9sx5JWDJAenjNweLNze8wV",
  "key6": "5uoGC3fwD4HpiqgdtF33pQrX5hfwWYNTmBPtWrhQ4gukuMJZpLNyU2rqyL1TR1qdreUZ4wN651SPP8tSXqXfbnrB",
  "key7": "5rQQraGTTUyEzdZ6ZdMtTtits9QnTk7Prtg2omaePMFAkqPgYmwgEGU8QQYGMsdU9qa2VmrUbLk63USL3jQqo9Mg",
  "key8": "4UsoGwY4EmHCt1t1kq3yZXLG66zsati1LnVK4VbTT4u918dvGvHSbGnuyStW9FbJnQNn8muG4NT9HCwKxDbZJoW3",
  "key9": "bzNRZwuPoky7pF6dntP8VMFsu96jegyZugK6eDJ3b3KdW8VXPphZw2sLT7VTqwdeQ89bZz58WJSfwPFCN2oYCRn",
  "key10": "3XwvLRuEMdKizgHDVYCyHC3DhwzdNBg2ThpMVdGZLFfF26YSeaAtXEc7dap1gUekFGunFuhpc96df8bnPS1C1DCo",
  "key11": "2ff4popa4rFLPEu1Ysnz97BonRa8WvQkWBTCqKxwocyhHrd2BKRSohxa5qBGDQt2ZtosLAkVjsQDF26AYQczw6Gq",
  "key12": "5CMASR2eB4FJ1qVa4pvPiKBXWFty3oPCeTTV5m6Qv1JhD49gA97W49LreDSuDsbkn8QZXwzT2HpG6DioEp6Cbzmc",
  "key13": "yDupXnDB9moGnoPxv4QBpcf6Vet3SRELo5ZL6v1mpvd9g8jVNQHhn34cm1D8FGMgupdBq3sCd2yvRsWpP19aPmE",
  "key14": "dwT4SQGeNfd2WEHR5sT8XYcWfgAX2Gjtm6SM8C63SzAMKrtjevf8orRc4qzasPWiQS7sHg8EVpxgS2dS99Vk84P",
  "key15": "5w23HhrC2E7z5wShq66pUMo52WEop8boq11wabKUGbpPsajjboJrLBcRT1hHEAuzyEndBXJwS7vT44HxWaaHvmNh",
  "key16": "4VFBE9fiBTF3UBcyeoMhQ62DV8igXRhhtVLtPuf4xdFYsFcaJRiWcQNrvuKuNP7HGYEUaAue4FSZQpFSH8Ls2Y4Z",
  "key17": "2oCqnT8xjRRNakVkZDCeWuwfz74KQLvNNXhHyHZWFeGgTNfosAhRwCb1BXbmx8R9APYBe8C88WCsV1CanaUUGkR",
  "key18": "2oGNzSGrS5w2ogQvET3QwSwyiD4XFmyTW91gUdg3XSNdLUYnjef6ezQEj3Nf3raxSXpxHDhft3snaPWtnDomfCYm",
  "key19": "2qWh8yVcaV7BdfPB5WnTyC6xbdo2DXsXJWVZsk6Z9jVRodHsjK6GgVQMz4ygurKcbg2rNRC8kVryjNdfyZXPdaMH",
  "key20": "5szZ9pFMXNTdmyQzT4dgB7pEV27QeRzTCioxLT4TKzBcKaB1TNcSQryEnEXPgcZp5GSdycAB4th5orjA1YCX6VEs",
  "key21": "3znqpN9GsWvvzc66xQS3RvFat44WnsioSGoExrZFTLe85Ehph2534rTBh2xd8NKgmK5tciN9hzPquK2w6GphcTRf",
  "key22": "3pUt71TyvySX8473AFA49HTXLpqweQciN6yge9oQmmfnLCj5ytjPdvFbdX7zRQMCmxTf2qjuDUU31rrgf4n5wBjF",
  "key23": "5v5y7UFUPnWuMEjZidQ7QDXTWWGPp3uzaNYNz3dxgS9Z9cBe4ZHMenWmoDaNVikxLcvAdkZwUjc8MyVeZXWdK132",
  "key24": "28zfXNr2Cp3UTC8y7pd3PgFXTpNtSgFKEPXKm5Fesj6sKm4eKCfq2QeN8iiFvSyHP9h9LM4AjekkKCYXSV1qvAYg",
  "key25": "wJcZUHaVQ7HSnJHFVE4Qa4enJT9DseFKy2VpFoB7XyhN8DoqE1dFQDm5hSh1sdosHc4b9Ehy5JRYPcTUhTsJoFt",
  "key26": "4h2h33C1w4yeUmVF6zgSgWLLJN2DfTNVyqD9T4GABaYmLrS3gnrMyRsRx87cHjTA23f15FS2wAP2pkTTyttCD32D",
  "key27": "PSVuPk8GQHAS1qMccSf5ihxDtjGrXHgq8mVhCUqDttja1uJZhuKxtRUrWaiZ29EZ6mM5NeFxnabk6p14o4jj2T8",
  "key28": "3DrCiAWHmfjnQ6gPnD9jCfpCpM5VaC7qvDCsxZ3j7reXXtCLvY94j9cKPYpSJuq7gHQgbTvseneFs7UHvGy1Xg22",
  "key29": "LEQPGW26KR5ZrWtFQnub7aYDHjSkVrCqfAL8xnbAQcCD4nYJM1bcpPnz7dKvEdQzoxJYBdz8kev2bJnmJSGhTMQ",
  "key30": "3WpvHsu42VLQZyj6QFqxhnnbVS87CkcjRRcxU8a7MkNDCehuv4wjFk6sKQKMswYiiJXi1XPSFNqZn5zE5hWRtXbF",
  "key31": "5qymNVtffN7HoMUiuPBXWd1bBBHzQ4EhtAB5sbHHAWnFfqjy7yUpFHLa5ivfV1GbmL2MXnAyERtmFZaYJGWwX8nR",
  "key32": "2vGDoXD47Yw4y8o32ji85bZQvwW91Lpvwb6UF6pN6YWxMFsHCVmPFyNgnnsWzoLnVoTNBUXpLBBZRY7frbjVetxF",
  "key33": "2MHkDaryT4Q6yRcDAAKo3cBiVLk6aCpAT2Le5HxMQhpNg2Sgzaj1SBk5159rXkwoxB8MWzmaFGxuLgDA9ahVtAhb",
  "key34": "xkKdBnYZcJmC9kBZWAmKihBzQK31TZe9wQkr4baurC8nkRu3w51BFT85nHWssCcatpRHWjiV6tuLDkNhFXQwpvS",
  "key35": "LYVTn9qg1SWykD3BBZAu1t9a7LrjajjrJyjXQ7qUAPSw9Ak1xpE42KsLoGySxX2rdMEFJ2WcVpjFxsA3gBGQuwf",
  "key36": "2mnfzkUDKSzZCpv1dTcbsZm3G63rXGWHySSqD2hSPrpgZLUeW9sNWpYxr8yr5R74huecqA4wGSeP4jeFCK8LbbPP",
  "key37": "3qQXHDMe2h98NeJVDfYhFghutsvF3LeScm8L1aDot26Ni4r41sKMsYcYEKMM7MDnxrLS8WSTGZ86XKkEX4MsRN5D",
  "key38": "5jJm3mmppWeBHFAFY8YXtpiVNxRvz127gSPhXyBY76jp3MssVdA2V927uvLosrMZioUW3WjEer4yydG2EVECZMr1",
  "key39": "3LDe571wrKWgHF7TQZSvmBCQaSBbf1Q3H79dKvDn7DWiuFq4sEKdP4Vj6FYZ1sfHN6sYPhAjk3zdRvaL97KBP7yR",
  "key40": "3P8YrxydkDWqqUNGk1fPkTcqUZEYMJaPQHrgVjXh9HgyrTCBCmpVLCH25L6Xa16K8T6f1k5YdqzWFduijFJ4LNWL",
  "key41": "5oEcwRWSZaurpXu8HwX7QD4dAY9bwKuXxM4RnxMnJMfCKdPs653xuHiUV8NbPwZf6mbF6Haxk7Fbh6NmpNLnuPQa",
  "key42": "3ivfRuX5axfegioKT3gHFi4aYJtfzWMp5B4TcsHMJXhiv8y6RmFCzHNJeNZYjZRmWr6pZ7nYgkdbVWkFRbNHXsKF",
  "key43": "4RpLtCLu88Gt7Ey2PEYTVKmUDB29quReYmRedz2oupG48Wm9QmMZKF2WHDYzbL5f8oHBdaMRwhG6TgW3CwCmJVow",
  "key44": "2i95g4wAxkZkqVgVM9smXMYLXrNJrpNunx75jHkTmcpngZy8jZygepK9PpaSuevFEVnCn3H6FiXy4AeJ1hQzjDVZ",
  "key45": "319Hfq9wm8buHat6gQZyCzrjETgZqhP7PnXRL17cvzufVnc9qwdJfYDU5iWbPHsrYGMugmnVtoPe2iax6WNhPbU5",
  "key46": "2NEDCfJj5q3ai33yDXDEoqkyDxqbwN6dGFFsx1bgGeXwqQxrHPkqSbQDQ1QEKK7ksQHycE9T6zetQRWiae37Gh5q",
  "key47": "5Sgtpp9xUFWGH4bufGmDzk6bCtpyHHz7ZgHq697vNUctja5W6dYE6JENJqDXz9wrV5mS7baKNsbZuGLwPQ5a53Hv"
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
