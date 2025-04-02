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
    "3sAdEA3GbrLWcbLWuRsrygvSK7shphUHcvQw2TpN2nbZmFf6LeCU5Uf3jfxa9pDNPCHnvwpZeGSDJsHuEwpWP7HG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ByHH5CtE9kkM8on8xf6fiDwgKiZW9pvKLmPScLR58u6DbxLS9LBTn7My2w4zUUYfnFbLfHAVVYfAVoRMsV5Jzu8",
  "key1": "2Yzf755UWSB3T3VRKFjbvPShg1w9JN9QAFLAG3WdBWyqvxt4Kq43K3Jxz8Zxt3ymq3UmYa4mjEYrDAiPbtCqd1Ch",
  "key2": "4wy48FyPBX8Zn8Fj1Hbqpehi9Wa5BzgiFjGE6WTQWULu1PPpDefRRuoug2wAJ53VuAueZCweFXu563yGCkDi91RB",
  "key3": "46YfJFHW717bJFuaUz81TZueeJqHaDa7FahdEU7QFpGytfbMq8oNdRYT5RZ9KoGAmfZHh54YaA7LAjvCca4orRha",
  "key4": "3kyysKyfpNuGcvTXjJd1yybyJBrpGQNCMXNwh3KzeL6DmwfF4yJgiVHemeMfUFDJKCtK1k777exP83XvS1TQjCFR",
  "key5": "ArHZXPcZDAxUnqJAeu4zz2UAK6h1BjbcMRJUwBdkPA63fwmh97f7xgfta3TQybYMK1jpduoCTxZ5Pt5ZbzKdSZx",
  "key6": "4oc14Ka67WSLfMttd4tgjJkVaTVK9EdfDCRm8AcZyAJGVCUvN1qtiT2ctZsUixQutzdmwB47QqQxu83EQurL8poA",
  "key7": "4nX4p1mEC9K4XutnDQAqkQdYEFj4Kpn27WSwV9Zg3K47ygKrW6D1rvZsnY1c4NVicCpW2TjfPufXhqrziKchFgdZ",
  "key8": "2RbNBVy1ePU3USfWyAKU9icajBxLuwXBFBSvfeqm6FqLRwCcKYUmxaKke4533hPvwvthgy4BnYkMJmXTpehbGyZq",
  "key9": "3FU3DNGEhJSXiDUAxnTpfBnoWNXNCdyyp1LovEVQWdm6ZXGDR1rmcGY1j4HAfugSER2VbtGJMw1kxK2SiPmWE9uJ",
  "key10": "XsGSrxnjHapfWL94FtzTn3qvudEex2g3D8gQFuuFR96gqYbqbTr5X9rYDmB3n6ueeaRNiSXZQN4j8W2o9faXciA",
  "key11": "57yXbs2LLjdzX7C4WsKTgx9rxoCFuojha6vvG87shheWZJuQdeqYqPbxk4rTLeh5TKEYd1TQshmXGyCo3eTrxpG5",
  "key12": "5aSxPJMwU9wuokmBtZ6JihM4e9JnsrGCdvKcU2D93Guo9GJN1xJvVRLMWBtrDNhgKEjoWgh13rsNpqoHHuHy2X3W",
  "key13": "3wLaxYeKijPtxwQJR6xc7km8H6oVzHKWy28xoKepTkX6mqWaGL2Cb53MojY6uqZ4SGPABMPgbNzaLsN3N8bgPyFH",
  "key14": "3LHBR2tFdnEKZpjKckDasPM33TZS45XZXJCyMuQV3u8R1nCc9HPmrMpnt8pUNoidLWd7EpgsUghdq37mRf948xgN",
  "key15": "2MQhE4qiogixPXq52eoB21UkQ6JNxvHYtmHQzUqgTEstVRA2CVYR7CMXckdspffwWzXPgL4LJ2qZ8W6okwTpv5Q3",
  "key16": "3uVR4wGr5GmsEtK5ftSRA4GyV71KABGREXaTfkjp5sEPxJGnAdhnfPMfdwj5V5EJ36KYYwyjZo3xGawujsSeuUds",
  "key17": "3Ex2Ek1GMBZKLZvepnfetZasTgxHGUEnU8nKHXqmNcBT7Q1VsGSr9bAeHt4zUt7VECTKdZsiaDGmpnr21R31pxDp",
  "key18": "29krcNHHP7Nx7NgRTEffL4iy3GG5ouwjDyPBzQkAJbA2c6TQTbB3j7Xv2QYHjoU2A8wsfRRgWB2Z9r8osoj9hn4e",
  "key19": "2D8NtwgcTEUh8NrBgkyRjgGTyL9Rzw3gwk5cj6B6yCd75wHxeLtYhXjWkpJUwbibiAn4FtXhptyiksdigErDepCw",
  "key20": "4X1xtoTDBJX6U7NfFVxriUmkWA1qjKH7SA5C2PWP3DACcpiwjsfW7JBQFncv8Mp6afuYqu35q6MVwEmHZcH2Z2fc",
  "key21": "2sU8E63iEtxSPgTtHG8VTN7TBG8vAA1DWjK7r9NajEvwM673tpTSYgTnG1omtdp5ojW19zrN7ERJxu4a93tGsELn",
  "key22": "3K8aAp585cAo8F14sYSPKt1MLPpp8bbzE7HzADRLdcJMvCbay44yrwv4UNCCRGBTWC1N1soYCyAWhpKiH83Sm5n8",
  "key23": "2J3pGfcDnLN3xjkx7Rs8Mi2QRu3s2Es1SaxLRNACXTxobTLnFEZfE1oeaS3SqgzZj7c7ry95HQatfKYF1TMpEUHY",
  "key24": "3du5zNLduA6hvScqgt1YJ7NkUJbX3dNhKquXqVccpQnNBT2pfAw2UV2MU7dwG3hE5KgyXDcXexTh8p6Gtoqxs67H",
  "key25": "4jpgVesvG7sWsLpND97Gunfk5ceANFaAStPdX74nXDevTXx54t8WWc9BSKyyCPcGqUb4KKwkXcZLe4dxsgfA85NZ",
  "key26": "4XXbkGyVP8kmzricprZSBE3tX6zxMKcQPgfkVCScDwzMRVqsRGqFx2mncgYbAiwNwGemmj4m3pM9FMEEpdDJA6AV",
  "key27": "3dW9BKSPnEg1A873VAgrydv376XpizJbrMWYnGR7q8ChoCpoVCiZsMApmVqYdajFANunZ4HMEt3kCfugN5x6uv17",
  "key28": "2dLKXtpm8Wysj4nZrxaGVnTyvJxwixPQziGzE9nDYPXYRLvWaA5rg7BRenWNHdZid5CuBNu5kvoNhxZy4qm5Z7C2",
  "key29": "2oZa1xr6FrqwmXnSUQncDkoPWNZUR9N42pnAWCR9k8bpeUeT6umAYEm8QDVQddWjqWNFw2gZvwbQHoF6AkVgLcCi",
  "key30": "4oyNN8f2SRLHiL52aRgDGwShQWhxauNC9TCGs9YAYPdEuqX8poCau9YurjSgt2PvhPN45nN5Cp2qZvUVGBSeFAHr",
  "key31": "3vgjnEEa2skheXCmQxiT3YvsuaBWJzLsTMmbxqkzeLwPLy6D84FiWd9Mt22QNHe8w7e74qnUHicSy2ftd3eTFS3g",
  "key32": "4qh7Ggsrvm7yJ1CUhafctRUKP6aYQ4huqbbTEyJXgyyahqkKs8E7T729xifHAiPxwpQMS2ZaKqMpe8NZSd9zauZG",
  "key33": "4fmMqgkYDGrBfa4g8Uq7WZnqpWu2q9bCkeXMh3gEj7ajk8ampbMKajnfqkZAUuRMgggGnAzz6fZ7PrTyrruJTD1q",
  "key34": "JFewweLUi2Qhgz3rRqb8AJduzH33BkCvgHnidhCJvnavFNikJgSCsUVW8JUWEabVCrs3vPokHuERWSkCMUXtJAR",
  "key35": "SFNmaHYAhG98DjQGnALaFtjxfpfpdz5WRuXyvA5PrS33uA4fuouhjtbE5u1DZa9QyKw3PsiMc3U5K5vd1Ja1TEH",
  "key36": "4TvHgZcTcsMKxJahLnzB8WV4idEcoDf1zLg6YXg5KQjmaTu2dQ2y8M9ZBhr3aDvCVUZQKZahjqtxL2inuMjv9JS",
  "key37": "54bK6b9FBFkQ7gyb4wGY8qaC6uSxUaFR8JbyRV1Mq44Q148VxsY1iR7DkSKcYapYJgb8bp5jzsx8vQHFamnRJLw4",
  "key38": "3SvxJwGuuip37jBJvej5Ah6D7JqBQFZ1MGGHmqqVRxMFTWFTCdUSeKo4beGXgufDbh4NFTELEsSRJ5ZC3e1UNPgE",
  "key39": "3LJbjFCu1oqE2wymuVJMmxWHGbuqdydHEpYT7kK9LdBMs4AbNVhxB7XXFxWv1Jvt8jxcEHji3xDQQKGpLDYBBHVi",
  "key40": "3DsEo59KYRX2Jy3YNMaSD1YEirsQ3UVsdgSuFYktakyroTFAUFDEgUz7ogfGe1QCxfbQ6ZDB4a7JWeX1VLdk2Htj",
  "key41": "r7eU4Ac1K8xBiiEisrcgXYLTAepqFYWjfjD5JsZaRtuGKTTMmYycaV2k6dpAJr2WCCoAh6559JMqu5mtt5RjwG3",
  "key42": "2i7tuZdZayvuUpAiB9LitbvV9pRuKRpaBDrCmnQUrQJDsg5LtYYbdpJaGSinW9LvZenjmsaw6HQduR3gUSFEKwRp",
  "key43": "3f3RufZczNJEpTfddeNvFeLNBC9RLWaSg5kJLHXFhbPdpnPhG1FymmmKXhNaEboQuH488jMxBoiKjLwGMhJ72nwR",
  "key44": "2b3Tyf8Le5HCN9hWtexMdhHHHdWZNMMY9BtVkSdy3DkyVbKsebhutp2NSZoi7LGbZr19RDyY4EBwadNABRRcYuwD",
  "key45": "49pvXTymvUsHZEd3edFM9WRdVpbdnwwJ1F7phooAZkrbRRm6Tgc8xKM77HbEZbF1rHTK7iXbD3iQt9cCDGuokjra",
  "key46": "4952DWLNL2WGeRDuLLQoEnVnTUbadBJV53FhzVFHiisSVVEAoPGNitgmJcggtAiAo6VE3p5T3AhzEUJrVHNtPqat",
  "key47": "491w35ex8LhBhXRKbrpvTdPLYM7o3GtAZ7wVWzApxrFnAMoHsQK1kif1d61vNxxieZ7wbUMrC3EGedqPKmfRi4b8",
  "key48": "3dxJcpAKZxXBUHtyoT16oUjZrEmwwtrWxtGTi1akxdouMcZshbd4bMSirNC8Kh4ZRVnq19hodGcV8wtb6M7xZqzF",
  "key49": "483DkekoD95cTMt5q3izudAffbwdVshjo3qvaYhFBi59q38cttLs4BDaTFH5E1S7NZoehU5eWbA9CJ6Hh1UMZAJZ"
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
