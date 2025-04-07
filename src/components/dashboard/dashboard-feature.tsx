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
    "hzfsTUzGUbrRn5vcJ1HkB2g49RdnQQd6h8kyrihDKAizWM1uVDMHxJvSvChPzivjeYfGapVt2mbJEWUevMtuSSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mSmyKxZxACPy92u6vqDvH2qwaqBQknqhCzGFxchhjbuKjA2u2RQodQnJYgXjoyEVqrzfgGaZLoZkLETppcFFZEw",
  "key1": "fUu675FH6SkvrnACdX2J26V97qQ8tyupa95Uj1E4ZJhE6UR1VveAsfnNn3oWXnnDZRtVyy1NYANxPY3bHWEwyuV",
  "key2": "23rxfCziYsaQEHYynXr91Hv4HwhyvWCWP8pqiuA1qcvvg6sJkaE4MVmjDwtp2EN1w3XXhiaWTetQqVEKiT9qgg49",
  "key3": "4fpYz2SNL68DaQC1bjnWDKwkAtRxEdNsoW9vnrA189Y1Vc9caTJgx4g3mjMxarqDqy2Dj8qMUyHmzboArHxG3umo",
  "key4": "4fNRxtgjCYAB9AqexSQqnowJ8tpjiAT7Qw26JKxMmF5b25Q8hyHL64gPYNBqinb9jnw2UwR5uRud4eo57QFnibq8",
  "key5": "4y5iyWWQR1DZ78BHRjSnoAjF7NtFNoVqTgptgyu9jQQt24fn6HpBhbDtYhvyBGTNEvj2gRF4MNAkdsRabjKdWBv8",
  "key6": "337ixoTS3M1y2GVKy8uq2pbqpAa6vSfNe1gQHgVR8HodTNR8ntRoPZkFbGF93Nop3z2R2RkZFXnFuh6qdqusV3G8",
  "key7": "fzhoT5P9oJ2dH5paGe5ghWceP1eGvF361QLVcQ8YPffC8p1QQnsM6iE31AViAYT1qEDiTShTXtrndjMFMiVThVs",
  "key8": "4rSVFfUezMoHEjsVMGa7urwNsKEpWs2PNDRQ4KtmaQevNzWUvTD4ENY58yad6Bh5u7qAHrkWYLTbnpTF271fTgGc",
  "key9": "4TYBHhnyeRKnSwzmA1Fq66tjVJNya7pQLKScMxq9778agNVsHJxzK5tFJtLemjrpsd7kpWcZ8fdigB75DJtDmCa3",
  "key10": "3z63bu8Qb1dDw3knwsi5mNdTGAP4D4s5yncbHLijRhMcEB4BWZeNj3ShL1sPAWetT8sFCFrYptzXMtcnm59Gv1Zh",
  "key11": "5Qvr441sSPKoxPNLEPk9UXPgaBq2MTe6UQoBk9Ucnw17yQ4PSxVq33sfioqeKRmcXdUZqyZZDSPvPNAzseT5u1mR",
  "key12": "2jzsDkHqVCtad2nPUkmKhEfRkrEVLZn9wFGCx9hMR3JK3g1s1ghVhdY3wC6hdmUw5fKKvMQGzeruNA752sKc2wzF",
  "key13": "3LMB1367HSmwfaLeaNFXBg75ZfJoajxgfy63fDvDicPxUJ1aP3gaDDEha7bAzmt7WzXTBBGZUKTUbfVa7LcUMENK",
  "key14": "5zFay2tbSS1Ba22rC84Joeugq3tuvBmmcrifNhUYzL97NNH3CbEJNGY9Wwysya4cWUMccQDtMMzQw4r6jyyS4avL",
  "key15": "3pz4XZoMX2n5vc2iMYxua4MtsjwnEzrqVMkbwJ4mR7HNNgPA4x12GPqgTomR5nZHP84izg3i3ycd6igZ7tvf4uzX",
  "key16": "2BMGCpfgKxgZx6KKiYG5cWmopjisiEbk8xKkNcBZMZAei56CgQLyuHP4T76hWmGgDcDD97KWqpJqW4mv3tMxbdsN",
  "key17": "3WVsp1ZM9iURETBd7TA4B33MeFoobULmpX5uxCGJk66BQQfWSXfbaNFvZaWjjCkbrmHMGnGCtE7wtcsCpvG8XiV2",
  "key18": "66UhKGSxLQzq23XaUGn82gkdZ9DafowqJyyhWTizHLGCkQFFDWDVAUeR7KLp1zprUyA3SRTfNLQVSdhm6wbYfnPE",
  "key19": "2LBaEprTTeZkYVPdB2VPzVMAnAYWTDYEyefPYnLQBmZ8zFFfDswCwNt2B9DXdxWj2A8FVgzS7V3L917geUxeAKC7",
  "key20": "4fEqa7YXvDAfm7PWDyriQs8CVxSXaetJhsnkiEEm1nou31Pm5vpKbeDaJxL6Fnv8iVZRkCQ3A5aRpgjny8CZNYU4",
  "key21": "4THMBhU91ZACe7Ybc9kKypeG4KKwqHjtSyErnBmpHBm6NsAHFNeudeT1L573Q8QLF6K3Eeu32CK1avtfhDhQUiiN",
  "key22": "vyEnzfTkEXxDtLXn61mv5Zju1C7gVPSUJhGMF6ESGWYUUCCws352CJP2xg93JLY66iiZdZG9bCfYNfsXeqJZXTT",
  "key23": "5tgX4aRWrBuseVbRX1Cwute7kHdwm4nmDSG4bd5qiG9SEEXhDnXg939mBSAYqbYzTDzgHfumsKMrz28L4eJZ7nmP",
  "key24": "2Qj2i83NrXAkciogQRwLzQTn4hDGLx6GCinv5pjBvmvHFStqNy1f7XceWjz8LJpQP5AtrVHeadRbvbcKNm2ux9sx",
  "key25": "5ZcaCKbZ3EGdTCyqUiB7EM4US2MmJae133De1QjvHEJHCniZmR3dJJMJHH86C6XbCNpxTcJuiaVpdPe1YQRkc37V",
  "key26": "61rsUMpUKcJeAvBXMurZ91o9oZncGCk7XAkN2c821ACEag6vaa632oup83ubfboxskiLtMjK8HVEVWX8TJpaQKTs",
  "key27": "4DM5mvJjEwFLsJu6GowH556ZMehpEsxjJwamK6R44c7X8NErTC8HeUAYRKhRAteVkHqWiGfUxqMK6UFrrYeR47zq",
  "key28": "g5BDswrze2cBmbuY8vuxKULUjyK2Xj8abysQ9dGDJsAuc8hxEjd4PE29Jt8xwLmBbog2uaTyA1WYCkiKnWtBBzy",
  "key29": "ZiZKnYN5BhZcuNeZGCA13vHE1ogHFEcYJ3hReWuGAhPNxUaDAtamTy6acGSmpTjKAw6WATaUFoxaajnG9Vx8AkZ",
  "key30": "UjgkK25h1SkHenbYDsz1jTdWBzGLq7iwDjiKn7C9gqhFQH2vE2FMyC8EfDV2qLnx5So5wH3ggDigTnicyUXvq11",
  "key31": "b3zMcxsfKaCmCr9zkT8rgT5gzaktByiGMgEEbyymijwBMQZPdgqr1uJoXfbC7dXxMUZwQDNb6ufg6p7cGVJe8ju",
  "key32": "tqv6a86SM3q2Pg7xQtZkr5zKruywec2yezzwcVgmfC7Avyj29eZc452BVEUQteNjfUftmBC7FksUZSSDqAcVjbU",
  "key33": "2zP22ccke1EJvmx9xQPAFX5cXwTf2sKMaaBWUqmdK5XVbPUkxn439cRHScdm9wBemVnMjkf8dAHK67pyWBt9jTMM",
  "key34": "3gTVL5DSr4GXDg4ecEoamibxyPjwvC52v9NAfdtv3g48zUZ3p81Gf8HJgy1AEYdcxfd7xzHA5tu7P1Zbn4ypqzF9",
  "key35": "2HMA2KiZ3Kev4zcoYNdhFDKfb3LLdmUMHmdeHGVfW9n6MZVenhHZeU6FHay1idL9Twyu4NxAk8Hz8oXWxW7YKnEj",
  "key36": "4VSL1tnPJCFbzpPj4Leranm9U8c68XD1pbEz3i4JofWB8yuywf3MmE86jeV7mZWReEJiF4116sDFMEEnwXLcnorE",
  "key37": "3kUPXTEzrRMLiPcTEfFUYZCrsvfEmtduMgo63hMgv2qADGrDhc6XK66PrWbgSGjME97VHbQDPb39ddnWBRehgkuS",
  "key38": "4RPeGcz2GgR9JE1aDxggL86Vhssg5Lj9jXcJmN1zQSQ4NdwBjUVQJq7SFqrcx8VA6R9TtZXpwU4zmXMCF1cabw5H",
  "key39": "7omKmNze3KKvctmiyGGC5pXAL6xXR3SML3dheb9XSeJZNcyyLcVfU87AiPhR6yAEurVqF5gqDnyYnAojRq9wzar",
  "key40": "4BmSQx3J6FHLnmAZg7u3EgB9KN9F5iMj1QkTj3oKw7h1K3HLFyZAesR9afdT5rSkDyZSszqAp3s1ySjmEzagfXHv",
  "key41": "2EakhDQT8eMG2mbGXfTULSPBwM9gTUHTarxoUP46BvjE1mXmQEozarJTr8rbnibnURTjFSNuxpaymsz4jAhYAxcm",
  "key42": "p2NCLLVJCnFBsZpg5Mi4of4WmjqZoNGW8mXPeAkBAwFmGL8r6WPqem6fNMoUmmEx7ay7DwDPgPqqbjZGv9z2HYQ"
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
