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
    "3S3jSAr4Wg5tijj5diY4s1HgFfGUaasaEeVyiJfj5R36mQgwQCgbdFLDNPFvHEu929Tet3BMJzHEZj2gkW7wwkJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ebDxG5R5rQLBxTdireHTcc7vYvD79RU4obw6wfYxWafUmsuKskXXThMyrb96aae6zVNnAu2NnJ1yg7RoTW6a4No",
  "key1": "4F2mCH9kwuR6cHrbdMvrkYwz2CaV1srZm9XfoiGSrdnjQcTcegpXAyLJsV174Jp4rZE7wdXECyJu5BxzVEAWHVBi",
  "key2": "5J2DCZg9jCLkvK8cDApWU7dybLDfaCbgu492UkaNeTgsvg4jBYCMm2LYuTjwSy4moP8EvfEkKubhCLjtmRyesVpr",
  "key3": "61rZm7QXEH4KLPxG9pMChZHorLGoeWwJVLwaMfffNtGrREoHaRX3rEmEPntKaQca1xdV4mnjjVaFWzcL7SUVitW2",
  "key4": "3fF8a3qRuXkwh9EmJfy5u1fUCFbwsFUjuPJcSwxuEijaTKiDGFFBxGR3Vq9xFgU9Q9BdpWKEFucFAmvDrUpn6tvZ",
  "key5": "5iPfgrdCAFAUAoBuGTGrrRreU67NuBYmnExJNVfWA9b1GDaZeBHW6qJ4y8NnPHQpSciKnY2VAXYWbuPaYAmAuNMH",
  "key6": "4tGopXXP9ddsvh2yRXfj1MptiXysVgEb6LctonbKqN7hUfU9TmQHm92f5WK5sNE6nBTsJgYFtWAcJ3tF8APfCgyX",
  "key7": "3JBdiajfLGgaLABNRkw7Z7569o6HomPwUp19bZfFFzpmi2JoS6xKCSj7jCGb8xFyNHxAGNenzAxSWwY1HWkEKbpY",
  "key8": "3aLk1dp1pDVU1PPpcRrQHThY5QkELFj8JangkpLmMd7RPy8DiqV3byeuSsD1Q6sn9h1zbfm1JQerD1HHP3GRzJ8i",
  "key9": "3vKYBSThwig9QWmBJJdvWqJRckccBDih4M1UUByjTAy8B1KVrDdajtQjzvrTTEz6eu8Cbxbj4bfCeXZGSTHXtFtF",
  "key10": "3HNCmkS4QzzFKGvqFrjuyMphjYPaSMUa4BSo7zHmypwgKhXYoLxWur7q9X38Bx99rCjtoGWZr3LDYVknCtG8vD1S",
  "key11": "2GsiTCrJiqskYmpm2dLgG9KgTN7UkTGMfR6Y1n1t3D3uckadB9hnumxAX6ucsxQ6Dgg7NNkUHBsMJS7kApcHZ7E8",
  "key12": "4hPNGU4uLdQkKhYjuoKA4shQH95y7s2ubsoer1wTEevhmPDvUJ6ZhTsyHQoiKHgjAuxMnAYwQUeSBS3PgwayNowi",
  "key13": "32noELaNeegGfG8yF6gKfhoBVmQphJgNJH1ngfU3NFZyU5u8Up639noWsXuSM5FcAu8th2GbhWtx26yxKtTBkEar",
  "key14": "2dFAU5CQdegU82faFtuivy7RAFbZQbzMgQdBwJJCLx4JUMz87gZbdQbhwzKd9ahQPmWmLJ1wbpfgd3az25JSmJJH",
  "key15": "47AZFnrvVgb6t6jR2GZcNuDah1xSHkKJTrZNjiXSPh7VRshCPfUzYp8MJyyH1wMCfTz8FaYbehLCkrTeJDoyaM2S",
  "key16": "4gJkoM1woM9Bqs98ZKN3ey9egAVVyPfEPYUGXERrtEgo7NGSQAqgvfLixmNMZ5quTZZ8Pk4G8YrqpTKVeLcKEvXH",
  "key17": "26Q1WgJKEaAkhXVtGNUneJswJoDowoDw3HgVA7NhJfUkR3SyMAQpsx6hpr2JmMrNCVgSdd8k1BogQNgWYHtoqbpA",
  "key18": "4JZZTNNP9ZUMjW4MnyRhZJPsoDavS1CBEPZfRpG5PxPyQpu9PeZk8ykzKR7A4MB4vMcvDs5Hme6bScjkZyzDruBq",
  "key19": "565vKmcV3TCLZc5ubWvs6VDUX5rzKuvbbtamaHSUqfSAz1Tdmrz5Ffy4rsyU12b8rAxL3mfd7w1mj8fGAaS84BmG",
  "key20": "61fcDrzjFgEpvdhF2hWVu7b7rgcTbMdMefdoAT6xwk1LHkRggHkStMZSELqMEVPBKzZGttAveBXzTxg7WYv3y96j",
  "key21": "2yTkPN3jLGHQ2PLd4SSgVhN66YmngkbzrL5nBYMV86xf9zNPBbwzExdnZ2pDk5fk4eFotnNj5u6ZXLogxchsXt6L",
  "key22": "3M8XtnsqQPAk4hCAXRemzdQkWRqnu9VRQzj3yMDScVqpHPaXnxD3A4vVEHwbq42TBiRaX3hscaCVhk2hPv1JFDQV",
  "key23": "wSrVNUki7a3mdptVBz4TpkGF5UuD4ne6ZsU7RZX2cp3PUaBpVE91cdSkWH1P9GHkUno1bfRDPaUWBUcdeWRjdJt",
  "key24": "319uCGpS655DhPGKNq57yCL4WYhBaEsvK5j7xA7ZME6VhXy4cKU75pZFJfQ9Ay6ZYyJctKDief5BNbzsU5G11psh",
  "key25": "2PJUnRx4aH355jcxniQDxmqmqgkmY6NA1yCn9AM2KXJrm1KAQtR9TbtubEnBCSc3NkYCHi5khgoVFEY93Pf1Fjqh",
  "key26": "4Jt6fr6Lm3YF3w3URrmAWBwqzUs7sQZiSZveqAFgckAT46kjTFpQbcnJipQ2ZNn87p9h92PgvUEE1kSmLhjHX34R",
  "key27": "3TqyNNs8rSSt3YieJo2ZAytSfManYAVvDrkGokAGz1YYuYWRZ6Lm2xxXgpVktJVvLxqyPkgv8FhQpMp1sRgvpBeB",
  "key28": "f6RYHaVFUNrmn1Ng6XFrpNmkWGQGoaTK8iUk7wDiPNeBg6FWpBH6CNz19MVKhQAeTSsKhCVBeZjqFuxVTnJK2JC",
  "key29": "5vWYNQFeVbKhf8FG6SgySM4qPE1WQpVaMHNL1CoBsNqxZxYgJEixS9RPT6wv2hj1pZEQZq4zCUHaCrBQBGP7yoDQ",
  "key30": "3SaT9c7D4VQVPaTwGNCtBWbCPTU4idKeYwKEwdSJHCMBXZkUcCfX2Hr2CzkQ9kG5sH4DVeJNcgTmAWAZHV775H2h",
  "key31": "Uuz7i3zN3v7N9z3crKpzaxDxpSahiJ2qEg9XcfD1PrNnU7SNEYBD5b87hoy7KXriv6b6mnaUkFGL85LZmoipVhj",
  "key32": "2zVrnvprkbP4hpeuvctxpbPEjYt2dPvS5i3FmuUVXiat5AWLHVDxtPvQsMkZ3XWo5XambNNTuAdA18WmCCJctAxH",
  "key33": "5Lv54i5RgRTvdd2154uAfhFarXJXDmuGzCvuPyPvsodyJneD4TEFLbuv1djx1b1HpAYwmYHsnAQuStkzSM8xLTo1",
  "key34": "TxopRM9Wt9yngHRTFXkZvsDUt2RfWF73BNiAzV23CCTPycr7E956AcYshVXCKzwcdDga9DFVRBvRGtYubnjqTNT",
  "key35": "3vmnxWePNKRCFApJtpDVpoeqd8pDH1zUHUnXv8zfmLXuS23NcV9E9Z7ixKUPY58GJhntR7RjUWeFM78ab3xMRyLz",
  "key36": "5UeawqqmrCB7nuMEPjcNv1fM83pYTXkZ31C5GZG1geLCF2pbLXFue4QR5DGVrrZQbEKiaX2Q7yq2eeKiThLWudE3",
  "key37": "5fMizSPwSZ8jceovDJ6yJ9iUeKtwverhJrHfxFtnmtgWmn2nAAhpKGom7B7DAQR2uhhRjCsaneRfJGWA65NXuuaD",
  "key38": "3jMcgUmwvxXS7DhheBELDENriiT3FCGc7rp9LZdfJ5doCTbpFMLs1V1E5QzWk4ywNPCs5Vd7HAzBmNBqGoRVHCC7",
  "key39": "4K1yBCVaMbnnyq11az65kYcUsEd9SbhGU4XqgBUBoqUnbcjSxo1SqhZ7TYGa8yJTXHbDywEPaEvPHJDCsGDoTiYD",
  "key40": "37Vv9jatetcDgcYCNEpLL5gQJzdL9KJrw7LGWSjsDDQGuS4VB9iwzs4MXquNbCjgZBu2FSVbK3UFvAucof91oeFA",
  "key41": "2LwoKrDvgYQRy7eatGcu8iw2zzwFY7hPSQkbGmri3pXncgRa9KF5ydNQXdVkanThkshJDngJ4PjyqWgV7SMBqdTi",
  "key42": "5eFeQq8V2fyq8bBc5bef7YTh6eQcCEimF8LAjGEvpiLFB1u61N1qSof7YvbKvaP5ZuY5N5BGbPvV1uRUMVGXYnkH",
  "key43": "4tb1i46ZCD9mcNUkeFGgf6P44j5s9KxDHiMQkAtabzYPJALQgv2yJ9yX3vGYatmhjw4Wqy16CsR9RgQoZK9A8tMX",
  "key44": "5D8tJ2butBHq89pbRFCVqZ8gaVFvcpjZQZ4h1zaB3qGbo9SgFru3qXYJbWopLUFTu48QwZ7DZWUGW59JDXB7mssk",
  "key45": "5LJVYtrSBiqhJVDcEwMcGYuwxUn5mMZaJm5VsCSsYUvmYXWMLhXC5X635gxCmm2GoPcHTf9qKmZeRbWeuSGYdfjR",
  "key46": "2TRPEGUGHdk9i3Z7bfHFCNdxE7qqk888EgTPmqkK1xj9GP7TSy6YkfhGxwJk3vw8qZNLt9sQWPVA5vJv4psY6br9",
  "key47": "2fx7wREc5SLZNAtNn2JMCL4rQpgph7N1pVDkoaF2yDYLyyF3T6R7goyjZzh54cxLD4YQDaYpFDJHpNJtbhEZgYUL",
  "key48": "24WoWFpYexeQzorAFwazcrgvtYw9bZYMQnJawvmAjdvBakua6mvc5SUCDzZPuXBZfFBL15nPXrqCXsN16MiJzPDT",
  "key49": "2PPbsiy5LNKSA3quqcsjuxyA2MrSnBwyS33f8kw6CaJtyVHSfnAgNjEF7pXhVQtjXi7WAjwx2VpnihTFSe16r4VR"
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
