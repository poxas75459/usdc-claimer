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
    "2i8QbvDMnNbfvzo8smgtVgbeZcc8mrWRy5jm1RdYaEdHsdGSrcTNikKWUPCBuMnTWvLJArgxJ5HQtLy63idpgQBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Vw874Ly3Gi7jPzE66zDvQviJsCXYWNjkrQqk1ghVP4K84ckFhiCNEYWLj7PWcJCpTubAjonDEDT1hMUCeUKA8i",
  "key1": "5PSNsD84k1283vWextUzMybxHhm6cXyLoqL3fegM67YfBh2gX9kYM8kry1fJKEj4o3rf56qQk86RF7u5sdYicLRH",
  "key2": "2Zki3CUu32S6YZuAfQb4pAUgqEkGBE1Cxjs1Gdi7WWrkvtd9JMjseibjrDtDfeBHJHShMMajHRZpiaZUDjCHoSwt",
  "key3": "4kg44gURfK7Msv9d6PgWNptwc3UyJKkPtmQU4Eato7rDcLXWK2dfk8xYy6Vuzu27DoqaBKi6P47i4kBhp8rBdGN4",
  "key4": "2crAZBdszCbDiWP13EbY6U3KEsRx1Pg4mWBUiesaeHkpf7uLRHaHSX2cn35R45Y2avAtnGY41aucMUMEA3B3imtF",
  "key5": "5eHRcNqbScKarNy1cQo3PaYj7DS1FXqg4gZgrURwysF4qmdTupbN4NGU3f26seYJLdH2ofbika9LgNJym8teVWn3",
  "key6": "2heVrZh5AsjNm9FoDLh7hHRRzrXsJojVeRotCe6SambuANUk31aqrWm7fk9vGPokeb5iFVNKw7JUb8E8KKWd3iWr",
  "key7": "2Qtei5PKBdZRH3QP4m8cwyD4GLNtCGREaV7u6KRMihPBfypbDjLcRHxt1NsC7nyM3t1BqnxGJqFaFx2HGRVBGhVk",
  "key8": "3epX3teXzJKvE9M9EP1384nxmEPnnuwPSndmtka3CSXwX8QNq8Bm4eoRaxqiWV83YF7gdjMCHtr5jesF1EL457K7",
  "key9": "N99wNTKAt7TKn9N8FDLbfYT6s2gjKEYKpX9imBwPacjFmu4kGciiFoDJVHtWHn8z4gwTYERjGwJe18u3ZjvjmZm",
  "key10": "8iAUQ8wdfGgcgVfGZUB5oTttkSJR86faFfimU5JofwUUSEHbt2XJE3MDHLWFV4GBKxf7owjizLHY7UGhkcBaRiT",
  "key11": "j4xKWa842F61tHqfHuzP1EFrM9ejrYBjNX7MVkDew478STCEXfShrm5NdH9o2xDFx7H8zKH1qJEB1aqNSDVo7zy",
  "key12": "4Wasy2njh7yrRFDdEh8ohUtEx6RfQt5wdqy1N2HLVpKCDpsehqeP6xLos1ACvU1aWMvfapc6nr52UofgqZcbgMGm",
  "key13": "3utqxUz2K7DAxFGWrgDkjFYJfZhdwH2Ldkm9RLJdZFHwjvKHwxw8SBKSadJJWUbWEXyQwem1UK2YBGQNe4e3zinc",
  "key14": "3hTqg2BDSPgB4VGWrFtwqqHFCeP4sy2tdsBvaDmdLmNe98UmUsAgPpdQY9NZUZMrF5ciFG2jpoTKitkPfMPume6N",
  "key15": "5hFWgruyP4G5ExctE6erQZBpwTYSSGFzZaw7xFv1743PDcPaHpnt818aVzgHS6SmXjtyPVkXUpJtwMXaGfufdsyw",
  "key16": "5m7CGR95MLpyuASADfTz6yqFAdihm6NxjEb3xUmvjyrPBE1ZU6PzcZv2CseRfc7ud6MAWA1NWgHbzHa63r3a4Gxp",
  "key17": "eoh4JwMZJh1NaKy1pXCZfRWQMpy93QEmCiDyx6o8pWsCtLwWuErGBrnmp6FftK4oaFAUzyPJvKNqDpyST8thCfT",
  "key18": "94BpNwAViSnoGRcGQyywxsN3TW9MFdH5qzQxB2tuYv1i61LcRnbzwpFpSMrVk5mdrQ3Vjk8wtnsBaoHUvuZjmJ1",
  "key19": "4CwBqdSDwRD5tiCG34E3F77zRtWTs1KBJZj9MB9CDZ35b2fh3LCfkS2QcRjzzvgHA34i4pkqJBPVw1SemEQuesV2",
  "key20": "3N6NH7tdYpXS1ymbLo3tRrx7UJhEbtRrqdLzBkm5s8kumtPhLy9d89VGbXZPdQPNkGHQmcLhNBfNZQLCdeiC69TE",
  "key21": "3c8DyDjyDE11xzXm6HZpjEbVgV6UiLvnxDbgMVLLRgphUY6Jk32V4Fau4tExZS4NiGyVFrownCKesHz72P7v5D1x",
  "key22": "dg3hkeqvnoHdfDssNCirui4Vcuut9RS1ieZJ35zMZh8SrRHdNPcMYkumRJFQR1QYUxH8ZLUR65f1yHoLwtC6mmB",
  "key23": "xRCiPBuShV24HNss55nktSfecVCk8WciFwhyUr5g2z4gPkSFpcRgFa2DaYqt34qvmbvkhz6gj9oKX2nmj86cnQQ",
  "key24": "3Mm8uqPDfJQ3iYdTE4sBAwh5GFFS8v5btvf6vLXswzZxEX7bj9QepTr8SjbsDJh5P7Pv7dpFf2NWQaJhQQ6uosR2",
  "key25": "3aXPpvvamMs7i8dZkveugwjNaTXappgjfHYVsRdbuMjdeAhkE1fmetaoAyGTGRDDQFhgBhrXTCPLwiX4xjSDKqQX",
  "key26": "4E1nsjU9TbYDtKhq7S5yBVYSp17ABFgevpjLAiMMeSvy37MZkUHkypZHEd8d9WHFF23KFWhYYoTSTedskpzkSdiN",
  "key27": "612q8Bv4n2GQhDZyZ3c3Q53unYM9Mkyqc4DoHcWzKpSkRiR6L6bme3H2FZ7WfwQEbF3BiFdtYMCiwnFm2rWBsM2c",
  "key28": "2XpCDKrWtVscJXeAHErWffJ1xnpVwkSahzpz9hbTCpN9a7s9FDPpBaUvLgjUa6wbBSu3C9gc9GE1qELyKvun9xVS",
  "key29": "ZArbURrRUiSEizYyaN7EamyWwnE9s25XRvtuSrE7oH3JpSgVMSLWdFKDW9e7DwV81CGu3KG77e9emhVAoinsy2a",
  "key30": "34Mqb6FGPdwhCm9vpwbeCmyj1Ux5WMxsufjN4N7Hc3H4vtmcmaHPH2AkF73L1GmrepA64j9AjShwg6WGrJm8DiLJ",
  "key31": "5opf4UAY5zaZeq7TBzninUamLFPxYUenDMUkHMF1sq669pVVkDnfAedKbAteVmpLXhcFphDLJzTh9sBPNApgn9rY",
  "key32": "3vfLJXnCK821V3DTULrrWXj5KPzyDmt9frjmoyuJsSszZE6DdzwZPzB94AHz4upnzKRxsQQP452Hm6KWUbwHaD97",
  "key33": "5JXY2WSduxNZkVL8Zwi12VLJvqfBaZRDTednzjK3i9ZcexqhVqPjsXtNLVXYhDp4V6YnkFoFxyaocwXaYKFABwZ1",
  "key34": "3qRtTbxTBLRjZMJT3BrFfvsnXwbU3KCUheDwiZY3ij93vMN1P4a6RXAenEu7xcfqdbTEnXTekxdi1anCYWVuaT2v",
  "key35": "4ehnpqfsMyN37KUBKCv784KszzNYtnh9RGkGdnsr4vjiTCTRwUZ7aSW3Jh7RT4rgb6zyyGynYNR2SFvRK75rKq2w",
  "key36": "5FXRmGLSDhP9zHn6jTRMkSuw19ti9BcvnVpq4g8MhQZ3TbrJnmJZ9A24YcanAyNhQ6zwmJ2jheFbnyJvJVLmU57H",
  "key37": "3akNL5ezV2zhfwYp7WscJKQK8Udu4hRdeV3JDcDu8uMtx4HaVY2vyGs5998wikkv1H6zMXYv3GuZxruX2VJuyhNs",
  "key38": "3ParoiwPnSVSqnzPRDnqxeba2gDHtwUDnN93Qn6udKuLYMtmFAH5VZp4YismkenwWBRQR8DwnjeX7ZfGxVeo68SD",
  "key39": "37EN7kKvFQi6kCvCrKn9zzDGVoEm5CRkuezU7MmTLxrz2LRXwMP1v6UeYdjsTF8J6euqeLEReYZJAh6goypMaZNz",
  "key40": "3FbYxnZ1dPsW6PdYCa3vTnApdaQTYtdNL49b9129soHTJ8oKNNWdfd8eF1sAWKdSpUg59kY5JmnJNED9X9MgoWPS",
  "key41": "25YwCAQ7ShYuSLrwFJCJWkWoe6HyR6VsGUoytiDVg5wXkpbHJ4UUgbD7tFaie3Gn6bc2bmkXSi1kHc9sUdY3SgWh",
  "key42": "2aGZovBjYY3mxaL9Hp5HAKQRSvyEJe7L3chwzhybW8KEB4NwBVMUxd9gQNRZvUq9ghyECPKrbnrLEqeKKymnujy",
  "key43": "5F8gwzYcHmG9mKF3jvgdqxNuED4R66sFX8SVd65sdpEWMJoUbCkB7SWh7K5ztkSVMx4LbSRWT5xdNX4MnKsLj6gQ",
  "key44": "4yY5Hg9A55aWxE46DC2HiQG5w53Zm8n3TQT6mMAoQjVsV1Qit2ExDrbd7XrzYEfA6Mt1KjiiBv6G2oSddHD6u68X",
  "key45": "3sMdT8bYRFAAuZbR8cHvXk1RqAbKw89oc1qKY1FJRoMLaBwg6BYQXRMYBaJbT17tqKeoa3P1Fv2UE7etyPk2n4fi",
  "key46": "h1Jy896sa8KN2ebmLSd7Z3awtC3CEdKMHyDdHnRe4qGKJeQAQToKaWXRvvbsbJgZ9Bx7wq5v1yqvCsRRQQDT5vf"
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
