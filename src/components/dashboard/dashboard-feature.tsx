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
    "3jYQ4tYNiNppzWZLuLgqUQ9taxszNAYzkt7GSNjfcoaFVwp6r54Eo7UZeYW2brsW3WQCRC2UPdoFASH7bLanWmhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V79cyhYb5JBiTFvn9koUpKxT9Wyj8m8fheSGVWvXM8CPpazusYUmsRFh3pHadc5wHqTNqAoqMvLyP5TVnzLWx44",
  "key1": "52nhWmQ9BopgdYir2yDpWz51QFVJq7V1znvPjawR7G8tcVtaRwUeiFtSe1o5MSNYiV6pP8HtnbH52sNLdD5fxFLr",
  "key2": "5494j92bKqN7LEE7oMeumTZ6wucbBeU1xg77zyVRQh6wNRnnRjaWq2nha7MTxvfQmb2MXrg6tG4kgWLTq1VydGmE",
  "key3": "5KFYv9rEHCSNwkzKDMuYnmDVYJ8Nh5oCGeDZFJCud2ET5P1qnWJMBt8qtbWSpFTwgaK3v7twqZHWrhb4kPXesU2G",
  "key4": "233neFKhhqNcaMxwTLegZGGskPPBb1pdAEM1Y9d5wzXy2L711efGKaqWC3sbzt2zCWjZevYAMyfeYT1mpnoF771v",
  "key5": "5eQr739R1SEvH8x9AkyurAhmfJhinKBmgAvHRHm9erBjqR9uTksWPkoGHu4f2TdVVX24UVXsutPYiYV27SsfjZP5",
  "key6": "4W8EmghnxaEZx2ApaR2ywJ8MK7TTY6ci6bzpsyqEzBAaXJ2YDcpGdq6A2fDVmWX9cLyX48aYmjgLSPAFyEMyydHv",
  "key7": "25NSDuY2kEhUpfPWTBhxdtPrfJHn3sB71WdmUwD4UtVC5qt5HqbQbm1ve9iDRD1KteYz7UT1HJboxd2gB2dJP6BZ",
  "key8": "5Vs8niLh2xsuQhBukfKN7RsQn8ei1tKCe2krNkY4HHafdxTRRpDSiTETjkaUxVugBuxnPcyybDA14JycTEH5ECRm",
  "key9": "5Pd6uVtiPER3UZqVT98RmpMFqFG6CJNsSraDD9JKT8LMj4mxGqwitqVPxa34qh8RvyWLaouQ6GXtukguFNTPZyBR",
  "key10": "ZZVXmCTZQ8aBpvXYESt18wP27dwhBB3szPFdfbJLSTDfShoMzcoQJXgyDTx72FohdXNjyR9jrbQoUVdH2mwQFeE",
  "key11": "29Z8DVcNdhncPERMujG5TcDyBYA9wwWkUY4PjgY8gXawS9YJjjDteLVW1hccAZeKU8s4q7uVi3tLDTG1NrfWvYRT",
  "key12": "4JxyuvZdcafcc3NDCmsYLKmzDcjKxkWwKrjw2JPouNT8eCoxsEgcdT1bewHBmDCXN8pdwq5aDR8mS92yQxSQejrk",
  "key13": "JWinXMgyTzjvvdaghu5bP16AfnVKZjhGMCb8mrUkj3DaYpCLuCfvPgwznToqg282AmxTp2PZ3cCPRjKmYyGAGB2",
  "key14": "abdKoUa3awYsMiNsPSFd9exc4ywetcB7eSXen8VtmohDr5f6AYqc1ad67F5RAifLSQpsh1KGvAvbwPpBU3RVkSw",
  "key15": "2LXu4Go22XGEPigpJQsY3L4iqr9sv39Mq5eTUw4p9TQjUra2dfhNNN7ZMJdgQGbVrxhGz6Yof8gMPgTmx43em7wi",
  "key16": "2s6XTJW2ZC6p28X1LTT87U8dANLGwKBYyRkRfCkayDu1PDXHNCzVxBGNxzNJrANqxJpqHMKGzYcurAFMTMWU6uB5",
  "key17": "5rdABd6wXE2sPFnjqDv6FgHEZhvk9frcEVZtPHJDyoCC5GBZuStmJ3HAsf4iQnqGW7WjxLh7Dsoc97twQJTqJufw",
  "key18": "4VXmcRaAkj4nTUdivtDRz1HtkuSrx5hznSrWEPeEEPJ7UK39vV9kD3bDecUXVnL5YAbKdKUwTQsDn99qAkdpbVzi",
  "key19": "vE88VGGKcCsQ4eahzeVR9jXL2NUEXKX1dEHj7tbSHHn5kJZgGstmooWcAvsWMXmRfkpCvs5RrKgHFjPYxJR1Mgm",
  "key20": "4SkqZAeR9T68LtTvMM8Ddo9QiQnL4DfP8arpN8A8nTiYa31udEVAuUc3Yee684sVRssypDHWFeHACafoLdzKigLV",
  "key21": "NKiLnaNaWHJinQRifKkUf8LuEHE93KmDtrVCiF6Gm3WD1uWvNySvjeEYvGEupxRgT5x5X3nPLPv7ns2U7FZG8cj",
  "key22": "5udnjT9DZfKNDDBQAxwJF5NDbMj7PLBREuUUJWxcXdPfReKvdYhaddRKxKDt4ZWvALtYdkrLAkkwV7d2xT5fa8Y6",
  "key23": "qG519m2kB5XLSTGpSrD25DzqWL2SAVf6cSxEsdxCvmcu5PcWTGi87G1KR7pQGvGjkUpP5JnHkB46cyp15r5ozAa",
  "key24": "TT5Sq8e9oMd7ZpSadTE3Lb5omM1UMMrDz2nSMmFdV2DhLn5NZZeg32AB8TFtqjMbp5gGoF4PwLSXBSmtNnWmg3C",
  "key25": "3DmqwFLjfFnFrNDZfM3r9KUzkmggW3ETczhioNbmPrSsMy6FQtV4nEcXuwg7tUQUyXr3vCQJqLc3oCjWwTuQ6ePG",
  "key26": "UwWTikcuRs1Co7pFWk3QV2XK2DjjGRmpZUrVoSQw5rhk154uzJpDkNkbAKcauMbAkoux295P4uqbv9Z4Fu78JPN",
  "key27": "24iTdzFiSdGkD3Khyb5X6MZFL9cf2oiykQe3uWoqij83CKdvsfJYAnTVg5VjZqopEjQ7dbQzS8g87UCY1gD6pnjJ",
  "key28": "5PVNg2q32JBgmboAqoPshzDp18NAYR4S2axGFXGinBc6YA4xezMLrm6uic1cXPCfYGAmAq6sWsRBSxw3K8dBepGB",
  "key29": "5Wsu3yR1FrB7eTGon4VAE6A7WfHPk8wvWw2JeoAL9bcHqTfoFu52J171BCAiWwYnSwMPEFE6aaWskHrEmrDYBrM4",
  "key30": "4PgG8fCkmdjZ5o5mweNfo5PYZWrXwtgRaCTCQjvrn3HpDNbirNpBjHLUPwGNnLd79JntyJmhctx8m6Y4ZpHm1vyi",
  "key31": "5Vm1EuxNgxLTqGiJM7y6GE5KjBKKaGuxnRYZJZYxhYvCzPnksZeYVPmRCSViDJB2vd4eii8aLB4qUjgCLN3xHY4K",
  "key32": "3B1y3xym8us9Ac1e7My3P2zMxt4RJ58L4ZSwV1XWew7VgLBLRtGB9r2sMnuTiajQ6Cb4rxKrB4wT9puTTsKPMpnM",
  "key33": "RfmGhvx4w81C19JcDAuDvh1qLig5aQi1kazxvW7VyWLFRrQAoPKjVYuVVDF7NJoL8fbG4X8qtr4i791Z4SN83iT",
  "key34": "W9VnoM1yHduKBTXbdhBxTdwdFs3wV52JqrsFoLHcp5WV6HPZZw1DyhY52YY3TxafyM2TWX7Yn2LBWkvdRQ7Cosf",
  "key35": "3e4suUV3MtPvodAKjSQbqNYhWA91ebELDjaMcabyV2R8JHhz5KzYeu1xxid2TYdhfqhx1TGkjBZxxW8dfYnhucdB",
  "key36": "21zxHVrH65NA473bFj2sEKA5so1xJr3qt5rV34WrqfceBdcEkgzvfCMpYPH5L2c8gdNyuihNHJCSeQZR3NjYTC7Z",
  "key37": "4UVXmt66WJ9TCedPPFXYwvzHrE9VKCmzG26aCNc2a4JXZRcADPQez2j8BPSF7Jr56r1fgZj9Ui4ETLKWy8cWckcu",
  "key38": "2CDBbUebG7c7F1dC6i9f6aTHBeDGFpnAxWqKUZBL4ZPnTAEpn1yru8SqUMsab4oXib4qBJsokThs6LQp3CtfQX8A",
  "key39": "2mjb6dacjM9YsSwgf9GZUD6NPyjPkUKgpxgbRZyPLSzor8Dga27nuuDcHxFJsen7ALdmRProN2wyxgL9rFSbEjhb",
  "key40": "32D3zPjkzgCPAPxQBA5B7XXgYg495W9wGNWTgn58oAGoTgohZ2C9WstW3iF1mxbk3FvjAezEDDMAXYJ91gSeBbte",
  "key41": "3Yx7Vh6WySQRgpQBF1st7g9NMPGMRyhyNmLpfNvDMqSaAwtFQQBvUG5YfDAQP7vQTFhBdMtcbFXYCqXQT9p5emiy",
  "key42": "WxWLtS6u7bE4L7gBcmnZjfyzFYXxCfH6KaPtJa8RapXsNRzb7BF9xitYZcwf8bZxzr8jUzSBnvMNcHanU2wYa52",
  "key43": "2JhnuNvWK1ynx2oEFAkbWqL5qDdWepRHJJDdPwPKCXVQD6UiEsFcaa8LgnL5GPyNku1AZkpByZVbaTAGLwvmCHqs",
  "key44": "3oCgGz9EwSsMESAmeqm7YF5KrVN47gcgR9nFM9sMVKLuqZJ4Dp1swvFDSzPQcxR7xutiPQeP8bRRDgmkd63k3GrH",
  "key45": "8F2Hupw12HKMgqFofAZh3dKbHuqgaWEXDK4cy73Rb39Yke1w8VPZbXzLP8fHMyeNCgCpndLFKcaTFWh8harP6NR",
  "key46": "3ThA4zsxUZ2hJZmASNdcyGPKA1q2bNwkq2yYdxWhGG2QvpMGhCrD6K7etPNLkqUcffmTGMTYxARtVKn9fhH4mKTV",
  "key47": "25P2XS1GqjFdkv57tDqcNjTcAmBJcFJYz2dpegpgfaHjxprgzAgB9cPmKPoLbRgdRnnLF4bAsczbhQyXCTy2NK3M",
  "key48": "2vNkQPk6kp1fhKumqtcL4P19oY1FZGASuNiuW5utLH83TDoqkZw41aheNZoHP5QGCjZgh4QrBpq9JVQaumd7Wxr7"
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
