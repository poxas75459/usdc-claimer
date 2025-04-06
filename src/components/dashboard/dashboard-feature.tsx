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
    "39LFD3fvYYukYsjZoVZmNjcE7PVEzi3oWm8uuD4MSh3FXX5jkAJjWUvxRDWdteraeMZXSM4xGgeR9Je8QHriMS7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q3ZK8SiKtqbwvPvVHX6PzBnt57fsZiWj5aF9Q35AGWpd6KCT5ruiZcTDHtVTxTCtkrZEiY7nAsaT1njmqFmACxA",
  "key1": "348pcr63CPHdWZFPeY4bWejUivM9WQbFJ5RggkHnSUgeu4QtsCHasBz1hCEtVtinhpcP4d2WGFBoNDybwJZALRCk",
  "key2": "4JwG47M8bZm2Afn4ALHhAXJauR899iYbqdDjwM6cS8rp1RxKy8bmZWR64vjqcHioQqZPNviHYobrCrvCrjkRNQPi",
  "key3": "4FgpoR5UuqztQ82gdk5q8Sz9aYQEB71aGtP3dvrgJ1rEk5cpSZYqQTaSWKYeZbo1epCnSvniC8NAUov1L3juTVG3",
  "key4": "5JUjZnR6DnMB4Sj8JtwVXKPBEGrwtFVqm1L8yT3BruPoiV5NThdaMmgdDpjmBmvJWeQgAqhFdEmAYnEmZQw4uviz",
  "key5": "Ykr7XFWSkXDh7DUcQ1BnkEEJg9pncL4iyUdxZUYwioCfrJinaxp3nhd3mnHeHiAq6Ej4LQ5vY4Aqjb1GgaqjHFb",
  "key6": "3cqyiH9Th1pLuRYiK4Py6MTVRdXyHkWqgBSYZ8zeXFhW8DTfCBxze8CSPzFoyUuzZRFYGL1vA5HEddYqjhUQ2pYW",
  "key7": "4N3rzar8UThdmtkXfwhadeV8eHmW9i6s8rRVMmpDZge133nzgDuxbJiKJQCEWKb8aN8MKTXvU1LwrgMeHGfRdJB8",
  "key8": "RQnWLdmntiNJ2uaTnAXbuJhaHDxa8WBLj2bKCAM7Cm8UQAvyXy9nN8GTUucDbpVngA616QSGYzHXUQBPVvxiMmJ",
  "key9": "4PsaZUCznXRY5NivqpXiLBqr1boGxMhwPpd447f8jMn2WpKWNdNf9gxFeyzyy4wmq8rnUEzXJG96wiJhgFFpTdXm",
  "key10": "vfT7PBQXDn4bUDCAMhSiAcdkQrpAAe7mpoiUnaeVafjgpbCZMgYReSYePoBSxYh1yvX8TG8Ud9K37V6RuDPpF1W",
  "key11": "2FE8iJPzaxA2C3NC8SPSzDeQd45pFjod5fPsmTVk2P3vx2kagMhs5jAqY3n2HXYR5GqaaipzEUMsT1wSWPxuaSyC",
  "key12": "4vQCQ5DYb8pib7jBbjrfkp2cLna3ZUFBJxrjDB2BbMgLWDFDCXNt4BEYcdnJBht8VzBkrukwcZ11zGPqNQW4a68Q",
  "key13": "3w1iQo4JDTPY1yrTEGi23kFKaXDrLu594CVUfBQ1EX6CZ3TnegeUYKD5cvJMoTCzkUedeSoeDhJ7ZgFAaATpZ169",
  "key14": "UthZRoYYmAAREWwhb4GvnAvFw2wEUZsAors9kVuiQCCqrbzPh5GNF8pbQK7X9NuXhiPDMx2CE2VTMLmjvpFafR2",
  "key15": "3AAWBrheYt2AA28o9L6AmYpRWXro4BsSeLPXui9qYtJx8vfAPL2Y29AicyBzJaSfhiSNMty5aLPvmSDmLUPKvKRc",
  "key16": "5zXzUfEjsVqb3XbmxzurzfPR2HP6191QGWLdSY67Myw83QX4pD5fQuP8cscu6RAbqndriPRpSBdMY44ggrQBiSFE",
  "key17": "2yHXr184SUUS67ZgTy8zPR86rv96tx5qK26YFnKZ2M1iJMPzRfTts4iUZtidQwvQqPUV4Qi3GtuprCWN4rFxuQqm",
  "key18": "3sjZUDgWiqycCNzmMhbJLL6tqoGtTvkuwF8yttRv5UzFWux2gfhbzzHa5ZHMsq7LCNVWSkaJi71RL73YBBKBxzM8",
  "key19": "5dhx4eBWKDjd3TDAYzDNg31r4mVAi4N4sdPDfFWcpCwKjgw4NXCYjwQtKnEg3NAojvFLzSofYjsrXmL4pxo5JJZM",
  "key20": "5rv6LBodomhDumgTd16QXeoKqLfupLMsWY9aHukr5fTSciCmoPkCHTtHzx728pYkfjbuHvbWe6TGnEXiXzrMeUmP",
  "key21": "5SJxmRYJQtPUB7eb5ewR9giWujA2y6YQCqTHu9LvPYS1FQZkxoLA4Djja6RsVGwBZjVUya5TQoATVeyECmZhaXqF",
  "key22": "39JBK4xVk2btRZEVav6b9uL5epyrm7Xe6SHBogw6fTR1rt11jJFBxHyxzsSwEYGuuJyPsig2P6FzQm2C3mVzjhkF",
  "key23": "4TdEDXQUz6gzqub4wc4ywZtFomfZtC1bFgQUURDSb2PwnfRaAXwuFw4X8exz9JaGsqvthRU4FT2hu7AZJ4iQt98p",
  "key24": "2Bov3RPpPYEUR2pZUZRoC9jwDuL1TaVinxwqccRj4qBtVmEpxmgJtcv5mLTACus8fT9VaCAaTvPmJSNvTyKZuSac",
  "key25": "66t3wmhbpd45csPbyLre1a36zjtGscDpXeKvUtysEnFZvuzNu7WFuRB3Hth7TQhtxBkrCBBxxX53dPA9WbfswUHB",
  "key26": "4uR5ZbrUXdnDrVfFZovUy8QtQKEbvA8TtD3xeUmf5rTxLGmRwTqKikpe449TxQkHhFgeEM6wFxsGWnP7rpZ5KMk5",
  "key27": "4zMAhcD3X4HkdavQj65bB1qoDJLBqoLaQeCrTJSRvUzbTWE8c96Kscw9qcYnZVQAT69oC3Giu4tSVrT5kbD7vqMK",
  "key28": "56RBD2JvrXLdfUS3S9731kJUhpsraeZW5PLUYvZmFLWpAkSvuXKooJCEatMvpBBzjQpbdogHaJcpQZtUwUuBfn2x",
  "key29": "49G2ThPsC3gbw7dVJi3kLuJhzD1Q5KCfWHFem2ZgZafvTX4t3WsyD83FBKsYbEJtu4mXC9ik2z73WMfi8LjpPNgu",
  "key30": "5QBhUmKEf6PZmurP86rzKz4EVfMp4T6djC9eWwx9YwpnehEoQZC4jpkpfJpyLWLN453b6w7mUVSPnxb1FcD9WyDL",
  "key31": "4jm1jcEAQ2oTEu63fVqQkCntRYAaZZwNcnFdqxaxfMprJy2yfLCN1Mog8WfxsCP3osxw7LV1WXQqgiu5YhehrZfw",
  "key32": "4f7XrfCc3ooN59pwWam5UBe5qB6gLEU51X46JrJe6umqDu8sfWG73RxXT6ZA63BTMq8KrEgMY4oeHgg1vVkaZkpr"
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
