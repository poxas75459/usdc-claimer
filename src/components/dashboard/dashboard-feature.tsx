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
    "EMHsVvh6SwVaL2UgjtwMJ3UJP7mXhN4zEECms8TMpCn8cBvVNSo7bbzGkWkj85G7uiGeiB4xQ31KoAaqdogcrta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pLjGb2d1ghRMMH59yxQYHpZcxdNzzxRUAcWk7z8b3TxoeesZijsAvwe219HwaGfrU2rJALeijT2K87GMWiCdb9B",
  "key1": "2bAQMgfbFdFtmP8XGLiCH5aSHi64KrMkmRJNAXQhjHnh9q59RZVWBhCBmSt11tz3vYpFABvfeqjRNYTRHgHnsEGR",
  "key2": "5xk82H2npmESdmQpE1MJmcACc7WRpaJ333CidqiSFhnJy7cCFt6Q7ZErcipNiKaiowf1Ka3sq26QQAq28SuuETgC",
  "key3": "5RE2RXdKBg6JFeyn49ZeqAD3Zcyu7rdxpegBq9sJmComo1QmY3FhTTRSuAuQMvdhRWWuFnMtP2Z6VBW4j4xyzSFM",
  "key4": "2DKphuA5GXPKj9BbkgYcnoXK2sDRAZkgV9CUGadz4qXdPpoE6k1rBvMxChr5h61mjZ9wZRnJU9Bxp4YkFL5aCqiS",
  "key5": "rszMW314pjsgpxGxpB2w9LwYtxZkrFiwQkLPXsjhuNvbpP366kE9NKg9ef7xR7z1my6fcSLTWUThp63VVpuMc5o",
  "key6": "3nqYEuB6Srju8iCjbUKwbGRfceycMDgTkk97y6C8jihKTStU2D3u513JBK34Xvyw7nRfUhcX72gMHRGWRVpANmYx",
  "key7": "591z6gJAqtTDGAeQUgVZ7wPBR1ZyB3tuHgKXtPRqWiUjnpCQp4R1fz86JemsEGTdEiARBKPm6vGFNr4UuBnD66B4",
  "key8": "3LNS8kmcSbvy85wVzUntoZfA3Qjqsek7dizS4JVp4mvQ6Ykbvy4787vg1bWENmL1ebSNWuRJ4njrTft4D574qUNx",
  "key9": "3gNFGJDe5XcV2sQfjtB6JF1ZtGvZnykp2QQDEVGU7bzpBfpgh8amK3KANKmUBgjZrKtuFwLdfZbvz57hzDvFaB9x",
  "key10": "7iPUy2b5zmw1pcmTEQvTxsr8Bc7uebdZVwqW6H5LGeh4WfgTyXBuwvquN4yGNyhHh8a6nQGV5gLYGVayLrHqzB5",
  "key11": "3JtkZRmktx3Ak4bgQ8Ka2YHY6FWJRJeCFaxPAaMM44LLJnYmT4vGZ7GWuegqLLsJTnLqyeyWW9kdJfSMMwQpan6J",
  "key12": "3KJijforQgepw5PZG4FPbgLJpBjnfyqQA3ixHkrEfP668K2MiZrnPXygZyJr6UCP88Hjui8xGAt37rYFQVMaTHHY",
  "key13": "4UqEhCjErFEnhnVKfmyGFKBJPm268T5DMe3CKqiovF7aipvGyKvcYeuS2SiVvprHNjajyNZ2KA7TQbStf4o6CN49",
  "key14": "4GzC5ggtGnq8mbEJVAborvX5C56X8WqC7qrCKNWytfdaRf9QsPvg35PkV5VpCj9w19kiTVBGsm1mJnevA4yafUFq",
  "key15": "VCiUadtgA19bt9fZiiqKpSQ3dLZdd9WSVxcromm8aZFmCiSfbb4v8VfMK4skaiQLXmKAcTyRW31QKMgUiLo4zmQ",
  "key16": "4Qpx9SG8iXEv24J2j3UZQNMUjVhjDeVedMRnKz5YAGwKRGbu9qRRbfdM3AhWHPS2em4WRBeqbx8GAdN1kvv6rCVe",
  "key17": "4RNC5JkueLMMdeKHZQUQzkHqJ8gVySxBBD8BQfRGy4f1ziWvsYjKhfxyb5m98G4Fyj5wbUThYSY6kn1SFU7HGY2K",
  "key18": "46WkLzF1tgugGsi1jSnS1baEQyWmcJQDham6DW2GEKWNrrtkSBaDS2tPHigrGZ6CJKvcWycp43v2H6gbnLZ6A2UX",
  "key19": "3AcWY4zhq1qhtZqPHZrXTE8EcUaQBg2Ko332Zav4eH2XEupzHQf3nsfqC7eA2YrbQaz894YW4fsWwHeGZ4efa3zM",
  "key20": "fttviaWR2tw5nUcVrmjUYy7cdyboNkr4V3uJP982SSSeAndPmRvoxnUGDGw44sS3ndzguboPva8Ny8p5WtWvuhS",
  "key21": "pDeL9rXAmVS2d4wvtNgVZ5D45rWxWpYwM9g1YC74eRoskdssYGWE8iubWKjFjFgdgwDJGHywZD2JpUZiV5gga26",
  "key22": "3PPEztvbG5WcRUG8nJrtUxYtdvoKmnv3DJyfwkYsxn2HvhjM2KxQDzDrjQcP1JR9FbaCRatvMUvSscL6VncBrjrz",
  "key23": "2L9R9QvosCnAKtM5L4m2xqYBfsvgaXupjxnY83y7U9qyBMN9SeGqA47RWqp2FKmy4zpmn7WrwgvQ59mfrnvY8FVr",
  "key24": "Ld1B21ZfMpCY9XZKjt71SbReauDSSCZCwTXcdkh6Vohs3rJV6u3km51rDtQz97hvAjcA7ZsHMA43n68UGRypVVS",
  "key25": "GckEGmDdiS4n6DNRefC7xFwf3cnGR9SqDqwwELKhkhMYBVyFAmAh1pDcD6GnUCqrnxok8JAQpqJyK582WvLb4Mk",
  "key26": "dZggznv9iNPULudfKKgGZsQ7A9ZynGt5bwTyMxaXhp9gfSBUZ2ZLpWpYyQavLCDS3bGLW2kjtpiQr56rDzrExSg",
  "key27": "z2JdvTSNTSxT6zELDDgpHDQubAUYL7cKkt5CkqHMud2PbJG9SCibRM9bpWLgQVUa5cbSegXGEPRvNGimA1eAZmi",
  "key28": "2vstcCVtBwFMXTkP5xRyAvds3FozXwFmnDCrkmxqa1mrsBHWw77TaSN9FxEKqvQ4y4BojbRCw7pBd2pmH32KSEPt",
  "key29": "HizLb7F5gG3vyFvxR92avdBQZsSqFn5WorxWk1Jqgx35HyrC5yGKjQXVXSFigL963zaBd8pzVkbbctCHFo33biG",
  "key30": "kb5yzs7tgqSZuHiuobmtWn4L2EXZhHiGUMxNC58JqoCWhD3AEEjDvEVg8nZDTUmpAt626a3siSQ4mmSeMfdGEwv",
  "key31": "344vnsSfghnTkKinqN5JTVKFWcpYw8zpAJ9W2E81K7VsYUN7UUfxhjiZdy8CcLub185wK4ggsw97YHLun8KYnUQR",
  "key32": "5Bt1BDkRW3QYtzeVEHzRpMu5PUyvPe4x3gT1zx4v8tAsDzhPmS11eR9qbqkPTK5r9wiHP2unyZUjWS6Da39kyC3L",
  "key33": "2ouoPvXFt69LFk3oLQDD3S2kgUNjrAS7mA7WwwTqfqdMZaVn95a6A639TXJaixgaBT4iJWEa1bEe5tVgLwLe6DE9",
  "key34": "4exTkcM2tMRiCVxRz5nzaLMLBAcK8uhRTob6o6DMcEb1cQquZgKAVTq2xeQZ6QQ67w3xr6xNirxErJnEmHM3ju7W",
  "key35": "5TMJjCPsynuASmdTkuKLmJsB35zMRmH8KGd2iUub2n4F5VyW5FLca5DyUu8FudaT1ZwCEejRoQoe6QMX4JVb193K",
  "key36": "2mHHqirbfcGtpH3d1Uxpcc4AyyMfEng7sCss2EH3YNhT4czNe4xuTmhvBongWwcjvrntrYay4k3XRxA5bGgjGV71",
  "key37": "5vWMsmDrmYeeFRZGfrncrPSKPw2SHaRqW6zQWPzJsDxhDfTURH3rktQoMp2w4DuRRebT9AqG6Qzcj9iy8YFB67Lp",
  "key38": "22vyDustE17CtLJPx5qQ5KckszMnmMkQjbDieEvRTAuJTaZ3EhWXJ8ucgCosEsAw7nDevJ7yGecVVJ1VK4atQq3X",
  "key39": "5gEVjtpkKxkcqoGJsVhPjNZkTnZgXiA5wFyyzt9NZyJYRWXDUTT6GytLEpbWB31TH6rDvD44U7KnPFUgKFbqbe5m",
  "key40": "5n5bGz32C1wT3d7Y6chjaQAYEdm2NidGJBiWNZay1yvKfGgHetjsaCZkDPNP4k26w3XT8J4GRG3b9g9CAcGcZC6y",
  "key41": "oPuevrUp5AgfE8VHpHZ2CWQqkjx3tQktTMQcjsHx5XSd2NJVNFh51daz7LPFsvLrd7ixARJqHda8Bb2gEYeZ7gi",
  "key42": "btbSrQDEMBGpZ9Rzi4Ms926h4ekgmLuUeXDC677W3AEK7WWLFHQNT9odFV421ZdXM8Qx6iKix2CUzjWccBkfRbV",
  "key43": "4RmbDhHvctepJ46Vx7RW3ACZ8QUk7ouwZ8HC5Yq9QcSuLVy9UP8ehmj4bZYjrR8cbHATSwGANw5Esth17FqYHBep",
  "key44": "3sxfKe9FXeUUGDwxc9fnQ3AZibeToaXhvfShe6sc3eYeGJEtf1n3d8v96YF4USTXGPxMT2a1s56x8UrvGGjnEzDt",
  "key45": "EnNTnNL4QtM3ZoXY29LhH8rLUS7gDtVSPgze9AhprqrdLAW1TbdCQYeVS735DXTbDPduemTowW48KBS5gtRzRQ7",
  "key46": "3ArePREASWX5pQfHpspqKPg2rMRYbPPSv4CVtpwgrM5dMQWQCSqM1ZY2pHL4j86JmuEgbpyLe7kdZpdoZB5kctbA",
  "key47": "qZ2w4hRw5nkvsnYUwGUwCkhzciZ9iyudBX9fX5GLMN9sdqSTVPQfBM8oXtxQYCBToTcWApnZHk5WnNfs2KkB9Gj"
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
