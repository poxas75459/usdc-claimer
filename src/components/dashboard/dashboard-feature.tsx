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
    "Nxs1Es59j9n9EUBWH8m5AcSSBs5bS6QQhnaN1MTg6RCQPVboDpML1iZ1uuya6L6ynp7XDMBdXHWDDt8J1L8u4Ky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SRZ6AJwDALBMTVNsjBsXaPdNmfJm7UgzCzZtT32ufvfrYSgNrweZ2kKz257Ee1MW8VMF8RdrUnFrPhiXjjp6Q8j",
  "key1": "29pfrMXdfET91VsJNhggohdWXKjLbKmvXBjsmNjVkcmvFLdjZtELYYscnNY3fwTvQoJ2GLuVrbCPX61y6xJeeMuB",
  "key2": "43njv1dthWumNRjtJcx1oLFLBpmBxcrSSYoGbxP16kWGqXRb2WSYGdbSvuEJcY8AtXwtmy3yaGZqC2Gb2iYHJDnc",
  "key3": "24pAamgoGtnU1U83YGmRmReHv1v7dgCfm1MtXYW34h8yQWsqrDGr5TtYv1CzR7KSNUxPHFyduhFK86Sn6PbFQtMY",
  "key4": "3o86r7ricycctwDn35Nbu8ovYUYvKfHj6gf4hW5uAsymck4hScWUWfSSXpmF6ewockG5jhnd3avfa9rb22FLpCch",
  "key5": "5ipBBQoXdznw4aNVBbyAjEFqknzFBd8jaTuyGdKnw67picc91VhLGP4rXExEz2sZsJqEsxgavf4X1f5V2oVmrtsQ",
  "key6": "3gUDTUXoKPLooHfkEJgLiRgeiEzqSJNcy8ZUeGac1fW8eRbpj4a6XegTVyb87Pu6HwkGjzJrCyKuaYZ3tdXVhMzb",
  "key7": "4K2aa7HNBJafVKWYyoFpcvYa1Brry5MUKR9GqAQxq5Y4oBcEh2wSDrtcHxMrezeis6pFbaVqEMNKMa9Ta4EWFpq3",
  "key8": "5mHc29ZyFYqoGAckKdDEaCL4qAEMMopjgwU7rEcwrTcDbFqxnskkueP1AzB5NfjQgtCkL3cYQ6iidCXEouL1JXkS",
  "key9": "3VQT5CZYHCMetz1ZzKGPU7EVun9XBXpCP2dueVMZnsW5xbtr7xMe9LBcC64NuVqq5Cy3nSQHnKvPxqwbAu3wWxxi",
  "key10": "55VUvuj3tqTSacxi7vbsP9QbpbpSCVbHxNQR1y9AhStTexeCvSzR1NPMWykxTBE2zRiySycReTcV2QJsmp9Dx4k6",
  "key11": "3DpX1DDW669MdR31nxBqAx4yeBAb44QMJKp3ZCLWbxvjREFVHtpNVnHoizsnP6GC8oFKoC3Ct8TtZyAhPQ1cUpfC",
  "key12": "4gEjpvGTZiYKW8F8m6obHkpf2sUf68ewiSHghHnN5p683oM2tMnUQbhVN2iy4JkGfu5hz6DsygFDfK9XHEYJsRYE",
  "key13": "ubGGKL7ueEMBFn7sR4pArwZ8fiZ3yqLwTF57vZmbKkWB6HjxeLW3DQejk4kuW294ZJZMcBJ8A37vHTTHa35sQqj",
  "key14": "tJ4BrevBexnV9rT6SGB4RnY1gECkma5K3411NzsJDg4ZzoqLGAVw3VGDsNqP59mtLZVFHURkj2LH4uJ1uVEFCVz",
  "key15": "5aMxfkPYYv16QgnrFsrM8jvVjspp4NKWGBunatVzkhcHmnwcUbkHt5sUN72mzbnpd1SYGoGM8pfgnG7ApPeZoeZe",
  "key16": "38XCowPk3MN9LdiDxavekCHrsDGEASmdx3f6DXLZ5fiXYREBhsd4UK1RyTLzJx9K47iUwQABfDzjT24ujY3P642P",
  "key17": "5LrAmLRFhti3yNEvYtRRZNRCjAqCx4unrV3kVb2H3WssVnVVnu4r7uAvjU5BfWASBKZb9FH5BPnNGMKBjZgnhQ6B",
  "key18": "4jjavgzVnRsXNnMQBmvtsgBKgAUNChYN2rEMZ4i6YmH7JFKo962cV3E5Zk5o13ZaaZG8ub6okKatsAeytFF5dq5V",
  "key19": "3g1PYidMTTrubAe8VWoeU8PDEqdasccmsFA7wPdPFw9fUUczHzYTRhUEUBXdHTHo6XQA7gmr4xkXJvysHnWbUJop",
  "key20": "4LE7SywMeneDprvNXNHtnLdq7rJXFV99NMh5uQVrc8T87PKq7zbXzy53EA8VnoipjJkeF4c4eNyt3c9S72wyVyWq",
  "key21": "Et6E3eXqimMJBZdcP1Y1gkYzzfcobDGqC1qjE32hhEQkpmDz11iTgx2Xi6iAEwB19gdR7f5uBaidJkp3gmpVu9v",
  "key22": "528UBH5wgWktTJESJ2cM2WHScBkY8WC8ifq2kHu1pfdaENqtFUgGsvYLv262yZVVsDACbGjiwwb38HdbdWZ2bwzR",
  "key23": "epeC2kZtCCpF1KV19eEVZ8T2pWgb91eaR44ofgEgaePBPTnYMznDzytebhHejvNTz9eM7EgJ8CD7vzxN7G6q8XM",
  "key24": "4Rc2mUZ1nk6yMSmpYCTpibekWfJAm5jAdwNbH5C4NGz96yYN1NbjP8PHHMQB5KoKQaWcnGbFaZvK4zKqjYJqUPBB",
  "key25": "5geVVN42iiSMehS1L6EQWWQj8vLoJF6ZHbyQRcqRDWLrVqv4zPRG1teBFKgsPTsu1o5Dp6aYeJTddRF8JjJgnM1o",
  "key26": "4QckgRAmWt2t6pzYxnTSRmtR3agzsijtfT7i8gjQyWmEJvAY7nMLZF7n5kqShqS1WUwSCLxAFE5SbA8iZQmMh3En",
  "key27": "2T5GcDSqasyCpguAsuRFPrWCqG3zuLU4sDppdopmADuV231G29MPUPv591TDaymUSkbjHNfcbbVGZMyZaJPw2Yf",
  "key28": "SR6e2Lz9j54bg9X4nJoqExT8iGv8fEwBXHAZ91uT4APQKwiBwhoTmDsj6hDjou64NUadpYKb9SwBQi1ZsYofaaB",
  "key29": "4x2MxUtG78TYdBJVBKWiarVxrTq5BieqpQKx6TRC4a4z9BNyTCiyzsmjEdVyqADYV2H3fpkr4z51pcHYyK4WYkhn",
  "key30": "5DjABDhz8HDFxHv9LXJPc1GPPo3B7EczUWMcEjJUFicPDthHmM4smS2QGvdUaq5LsHVNhuCeqA78Xjvdnw8wNBmb",
  "key31": "2KneA7hTpLmVWJ1KnJrNcKgxXbmoto9hCALFg1hQKJn4ouR3mw42SntByeqT6FonmHZU6T3S9e6x6CcaUkjassqL",
  "key32": "3hWY7N8JoisuacoDe2979PFTLnu3uuZGf7Qr8qqzwFgUN68PNG6s51BubVtXqpjGgCcU8xfQ6n5qQatL1geDRaPd",
  "key33": "39EtWBzPLXMh18uLe5CpMemi4J5TtuTBJz4yLipN9t47qF7h4ihEHNwHih3G5Y5Q4DWA7sKKxjPSvrYhuy19rUHj",
  "key34": "66s31sXZA32Y1xC2gv4k6G8TyazxykhBciTt9pZiagDLoSzPNzjaTbzdzR55v8suPtqD27oV6g1oypFewvAAWCVd",
  "key35": "4EYjnAj5xWSXFKUX6oGodP5uQ9RJwx2YABTDvWxtCVBm9HNqoMdB7gCLr6rGDph8UsoLCjLQsAaFefH4tnwQB9Ee",
  "key36": "NrHHLR7iXZnjdGnJ3G2YkjECETe35JPLen39enCR2DQCPLiSd4tofGFyPWKfSHzhMxErJXmiipU2jxWUVd6z1rh",
  "key37": "3voHDNy5djEFx1ZhXBgjhkcCNF6ZH6yJyXLDeAx6dcpUZmW6mM8gdFHP1HVxKPGX1CrDXjTN2BwBgKcLKmcjWx5R",
  "key38": "3bpfHHdMyxYjNF5jhWsw9LLy3Vdihho7PPTMUAajDbexKsdJLkhTjYhbnbMUdki8iPWTYBWqYL4qLwNjk2ssR8A1",
  "key39": "Rip9i6efK8FwPYW1NreEQwHRSyvekFTBgrAirciW46gRoQFsKP7ptPheuaAHumAVpUVTgh8GZ1qWCbvgaUvPvE6",
  "key40": "391u7AAxTRV39Jdnm5KaRJHntopnC4aG1JL2FebmDS6RM6WHZPiN1dXdQpjX12vnVqSLYGuNYMa9N5STb3ojKdnu",
  "key41": "5SSaAxdLQ4Ccaabgi2wRVJQKSHrC91k9BxiCFwoh5uW8XHAd9aw9YFJZX5a264xsz2rn5eup4PNKeJ1QncymfQfk",
  "key42": "5PPbPc5dt7P79t62mMoTvVDAX4SQxnPjaE1DPecWWEopAbKRG83136N34brsyWGbgYCQxmmR7VyWHz3DNa5F7Gy",
  "key43": "3FMVdMt3k6dKgiiCX5toXpJ2MewBNLAjF6mxsYekUP1WXapqbNekCSkugqJni91BwYRSoNeyXsqvgCQ2NmYFZS5i",
  "key44": "5Pv9zs6L3rnf1KPPUFVLrjkyjTDs7gnZXNjMwC79NFk2AZ9S6WKNpYfBRKd2qsetxWNfmdhcU2StmsCUnbTmWE4g",
  "key45": "3ifogPwiF8ioVzYjhGAYVCHVz4k4wsJFySpiGaBhHkyUaX559XjE4BNp3eoxRjY8CuGPAoxRN3VfAitarwh6an2u",
  "key46": "2eXDxEnMWLGjWCHQVWRB9nBtprZXf8TjXePgVPiVriuvP513WArmaa6GdoDwUbnRAsDzqHu53s4WnD68m1SrmwUK",
  "key47": "ytnj2nUQmDpeHqmeBN3W6QbnabyNLnoR44GNg8LtQVt6Rj5r1wah8Maf8a84jTeLjgJ8BaQRY2nzEcTxxYKCuRM"
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
