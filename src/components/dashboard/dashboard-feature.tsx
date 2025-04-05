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
    "24WAfn5HQFfQobtiaEreNxjXjiWR82xnbAb2FxiSkxHAAG2szYKemWGye9oemqdrfqnCRRt6gsY6EVVGuHN7KcWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5veJZqbfM1KjS3R4QRDwyCAdnqskktggvgNHYtu5nRaZKN6iquNf7ke8ZKkfw3f7WYgnqvXsS1poy7UVBpKFGLx",
  "key1": "usA38DX3r9eS7rmFdd9muBy5RivW8X8LGdenGojc1NUBD1ycD3ANRpJ4E2b8TFxpskhdMdbRubs7JP3XFGVZuV7",
  "key2": "SGxBVKYijEujfPzetwMKDXgZBD1c6Htoy4HgZbeSr662p2QqdqYxchSyfZy1qxFWmZGQi4YXTGKcx7TgQJRfiio",
  "key3": "4TMtsNYPW258YQ5mc7gc6uMiuNztuV2CF8EV4Xm72XfmTuVi1CgNyC2pZUXd8d3Mi9k49zFFN2GWVUMRyrhPVFZX",
  "key4": "2BFsXNDwqFACRnpKAx2KDcrLp8SJqrMv3jhX5QjmLNaNi1QQcUCx67CY1fxiH5BqfDQDuXVqBdJzSvzA6JBAnfo2",
  "key5": "4XQCyJcsQiCBa63nWAYzNAdzk6XxckB9jDWwCi5CpHaCfMzxp4fpDJH73phuFL2gsAi1CFVgHtfJgCcZqq8cDF8U",
  "key6": "2KP7GHGTynevvHRBYnXtuUZbEHsVWdY3UYimsVvD1QjzsXMarrL3MXTgBX16MfndLWfhGa2xs7vfN5ddM6jLkRU5",
  "key7": "HuTquACTbxXoe3G2WccGXmbu7eQqc2YEcWL4BJmpFWGp2Z2kEidSqF1txczFjaBf1zBSpBGAuvgwSY7ZqoQMfSD",
  "key8": "5dEh4mC9pYqJ8EjRRmvRR2VojPkToSLNENb2yZhgbdx83966FeCw1y5TxmU9ZatPVNCcaN6vhP488npokojeTfZP",
  "key9": "4YUHStFmFm3QRZAjh5T2hkLycdat5hQU9amooUTAuovwpTFFNaNVfE75NnbXF8SgqJBFmVK7rvVuZ3kyQemeFnrc",
  "key10": "3czSqUSYZovhhnUAwmY3KCmpnaWBZihCFy8XNia494T2NxjkxvWQnr4qeJAXTUoWybt2DjVjU1vuaCfAmx2gcboU",
  "key11": "5TYgWZarwroybzo9d5FE9DhpYw1ds1p7f77r4iZzgm4QfVBLo9PJCpQRHbbTsBZzWTwuBkUe5L9aVpAreGN6JgGL",
  "key12": "2EHW1yPkpdgQmey4BoYSnQFk92qmKd3c9xKSP9Yi6zmUJ2BmDTQxq6Nt1gSkUeHfGpeCJBxTfdJ8Lsf6FV4hiVVL",
  "key13": "3oR5WnoJDPWNgqSasMoPuaxUJ91w6rTDCTP36myqhPP1bgQGEoRZvJ96NyNGduXLF4ZfgwyNuBeGyaPdgM6hGGqN",
  "key14": "TmEyEbQWf9GSBmy1nLZ5XF3TWoJNyseDak35AVVntmHjz4bC5zQuLxsdeurMuDd8m38trLSSPSS6TT7rktXt2sL",
  "key15": "3NT6JjwzeLKqF3qFGxtFnqh26eMUXv1Cw46o4oPwRVqdUrdMY9Lfy2DZ87HZ8mkmdf65y2RB4xLCsqC8au11QoHu",
  "key16": "4jZGgJ5F4ABkLd72BhkGRVtdU4GDWEjpL8LJa25F7n9PxTafCR28pk4LafcxoXdn9Wg7xTrtmxqUsaFVdwNu8nox",
  "key17": "2i2Muc9CpyFbmpGKCLdZtFVfqnJFtSHSxqe7anBpDhz91FYhLjGT5vcidiE8y1WE1ssHHpLNpmUXdnpNMWswKJKM",
  "key18": "QTy9DKWypyB1G7ZYqAj2XXo7YmvTrtGVEL61FGRuA5bYXbWfvj6xLTEwDZGp7XjWBzZ2VPdyLHiYhw9JwkrbiWM",
  "key19": "3FRkj8UBTXojuyvWMF97Ds4WsmT9UZJUVB2Bq1pivWBbugjC7jBDMjjSp2QZWQQh64wjfLgVAJef84irtNa31BDH",
  "key20": "4k3eckfoj2aFUjhR9WG6K2Vago7t5kPGKgW5JtDsvu7XL8S2Jb8YgebQfne3DvQEfDpkYnXMkhzLza5nC3dibhZ4",
  "key21": "2yMaR2cUmdPzokHtwvTHCRP9DKhEqS9Y1E5EwKhE94jgq4o4aTTcER7vDnWHyK6Ym1JkARZMBaLg5rrJuXqpqXfC",
  "key22": "4UwPv4NxmJzoFXesy1BQCwpZC7YS52pyS8pkKpJ6uwJmEd6g9jP7Rn7fmoSPuVHYjTMFgrDvpPb9dRvphsb2FMSQ",
  "key23": "3zVPACnETSHfbizoezxYTbAvr1EmoMnXrGd4oAXYBAX5ttG93zfAiHhbFbhLE5ukg9mitLESSiZxXWtj3DjHYMy4",
  "key24": "3fVhFuPAmy9U42XLSoQTZXJjEZtMC6F4ZezUPgsSs67yziBvQ7RPw1GMJPLQvMMJ7KbGRxgEgrCabYyFouuAFin6",
  "key25": "3uV3wtA8hgqx4PrTAhkCUG1JistBKPgRnTDaaXiKQQRM866G4wHgWjDF3fUxG1TKe7rJKzpBL6ZzEy1z6JJDRCbM",
  "key26": "4eR4WXqTfM4KGsL7BaQTVHnmkGFyk9jPzPESDe63ZuBsxWB31y1pmYmxk4sVLj21yHC2KnfX6GAw5Ng62y6xwnkH",
  "key27": "5Z4MzSH5nzMkBJTmbxpwMqhRo8F3t7WaLa5TH5cgAp62H1cEA5MK4RxHCwhWitLrDccCUMMjbqynetseuXB1tvfP",
  "key28": "31QiPYUD1nEwiRt6AZe2C8K17Z9MnjnroE2onAdtF2ME6ibpc7JkXJNEtTJgHYERCgCDjm6RZFUPzxstNeo6HcqF",
  "key29": "5Eykmw4j6k7NNrhRBa24zDbmdW1CVuP2gasaUsmDBJKRHzStaLhdV2YcJuEGoHvGXYav8ZfAzSfX3BNrQSAhQpxk",
  "key30": "3bxPw8hmiTtMuM4QEsrv681AgdBGgnjG2T4S1mhJZFWru9D2u2DQLARM4xB1taQnbvwR7gYUozmCV1gBF3Cn8Sxf",
  "key31": "2vR9P86Bxw99xLTKsXtrdWmyhTqR4A3d161iKy68xSAaqKeD7Dgo1MsTLej7FV5afjRRbatUXQGcUB5fM3nuSpTM",
  "key32": "5YCCrsx9Rc4EgvyezmtN93xEYC5y3NMj3MAHH61aCESAa4dorggMqBppKgo2DBYJcipbrxEDcbjyjrx6BKmzQU28",
  "key33": "2jTjxRAHhTkAr7x8WiR6DZwRuhHssjyxEV7kFSaiXMhjH11ZRBakBWSLHdXrJj6HrtvSUWB5ip61Kpns1H6eh98o",
  "key34": "4qi6rfzbarer4WMhScAJvSxifeHvD6WqJNTCgRTKyUfh6rtF3QGdEVtQqWuKuzZCunUnnnUdf8wAzFQzUkXf8ogk",
  "key35": "5qhnMPXRhjy9iWA2yoYxJyatP7HM4DD8f3quGBTyd1C6zJTcWAdvuDcBeiZtRY6ABnz6f54KWnG5Ztq6p5gRdCni",
  "key36": "2NkmBP4SSr8XwxeKJzkfioVUeDPNA8GCpkNNzBbYhabmPjowzoyVPs3UzH5pT6NqdZ3WpJbEbeMorqrRN36Z4Tdd",
  "key37": "42ZzVWwBsMAbUcux1okR7gYjtnFvuA2MqGo7bRKXTarfFD7gg2zxAKymL7GAXGxKR8DLHpeocho689WbxV9dmbQh",
  "key38": "3MaPEvwcY4dDrv7Etqo3WV2Hw5UgeDigEaPFks6RMXJUeUAJRY88o6wpyxdvp5tvyCKMyGQ1dant5wdcXP5bcsGh",
  "key39": "2MtrwVP3wnu84WEuC6EY6zuZru3MKu4FtNtKtjq9U1X55Bk8MA62ggZm7zPxeUHG1pZHFCnsep9yWYvoMhyyTKx8"
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
