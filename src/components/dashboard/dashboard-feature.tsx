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
    "3hTHELPG5MmnZdP3wNbhPktnstijto7xgRKug2LASPZtHTevJm3dnSTw8VDVsRufHseQ2cyNX31wdURr2zMS154L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rucTQGBL4ZYjFyRJnimL7QzSPWSghxoVxNnwdA32WSHogbeQUC9zC531wynJGLGyRzXuCwaN2pYyJRHt7W4zMVq",
  "key1": "54zNxsumC5tNLGPyMps9HaJ1HYo3o3NqoS4qH7AZUbJ7ERHKWQuVADHmG2JMNFB2tnTcqVqZLTsDWYuvEYT7Ctzz",
  "key2": "4StSBiq9q4BniskRCEyo3xqsHkgX5ccoQ9342KpJ2u6BG3YJctV2RtihA2fgkWwyhkuam6e3b4feAf4bThDCtKjw",
  "key3": "3teJm6be8tKADBqeRHYynxz2B1xrg1VdAnWTjti7aeBt8aP6RirK1mo51s3wz73NRTkpohesJ4U5NDbJjW3f5gdq",
  "key4": "oC88TsrSzFnkTHdZZYbgrgbooT7PCFLpbFCwF7s3wQ5qKMqvrTue9iLBEts1riN3CHtvUZEkdgPqT6j64wKoies",
  "key5": "2zGsBJZvdrABAsdZRuv7CQzbYdSXVigHTC2FLcYWBzwZvfAJj5YSRiygjLKqj5UX8B2QoHmNe6su3LUDijBtakQ8",
  "key6": "uEshyQoicwgkqm7CSou4ERn8qrLk1w6ep9ESq4hQEioXBA3FxxXy1yLFLhSy9w8Aaj4zskUKfcnf9jFo3gp9jPC",
  "key7": "4ctnwtRjVLp2dPTampsW5bQE83ML6C1mKw4ouogNV4m6G1R4zBLHbU6ZQfkjmRtH5JoXhXvtbk1wBhP3U6HvogDR",
  "key8": "24KpXdiuu5vsK4EhnuVeiy2bJheZW1fEzJiJTc8yqXHiPuWZ9q9p6iuiXpJsrbQUMg9x9QYqidQ3sxAn4DPqt6vy",
  "key9": "4iPcWy9ZXcFnTKqXcP6APWu3mbwGa7RU9xZoBMehyfGoDJ4x9o9yniJ8ppg8iCmSX8m3T1z8PBfa9SB2n1Jgv5Bf",
  "key10": "5rV2ZfAeWQAKxgjFqQXZ31ys5FLXB1oL2waE57En8VimDpyHDAgSZGhR1zURUMx6MhNWZpwZAS5ZpS9tvfcfuRgi",
  "key11": "4y1XM7W1R1Std8Eb9Rz85sRBXSpk7vuD5Xg8VKDB5cP69VJyu72cXfrikthmC6VPNtUuYP9K9Yq7gVeUpWAYmvYL",
  "key12": "5U56F5Rn9MnHNrMRuN6tDthoeVTrBWeNvSRNPHqe9zRgvNjgnBnqasp9PjgE48yo7KAjwc49fyw5fR6NoPhQz7Sk",
  "key13": "4iXUCiv5oKecKjgbkRNpD2ajUAhT8HKxvnDJygUGyCjLvGkH6EXyfWzJbDLDwe7mD9nUHsoCY8hzkwSgHYwRPWmS",
  "key14": "4KovWrfora1HynMc23npZ24UX5xRaAkXFV6gJeT1oMG9BPL4USQYj2Tte3b4HvLJgNsMnQTMh2wgiYag6FUhMXUL",
  "key15": "2MpUiiXrau9dCJSBkkfc2Pc36xA1sU4984p5JPf4FCz3LFCDfWvKBCEQr47yXLS2KMqueBSHppF1FABt9aKQe2iN",
  "key16": "WZukALKNLAn2Fn1Xknt5geHBhTKhWcwXdH3ddiaysdk2c9QGz8RvLBUEdbh2Qzi37Hpe3YvpEWPBmdh2agBRBZ4",
  "key17": "49GZyZj1BmuXdn8WAZvLPWTyexhfoG8b3uqeFhe45TdGmJYv1ygsQqofnhj1HW16Fbjegf4631Ro7f3k57SjLkZ3",
  "key18": "3nprW2wK9U3ABEN4HEbSSFNYEDSFKn72TCTwBDocmnZe7nsRVQEnrjUQcZjDMTb9FUFkHMxPqi2ZAXKL6coXKScM",
  "key19": "5rKQ8ARPmBSMyJWM7e4qLXFkhRNoMTnjQVX7Ji2pkMESBHvx8dWWYfn3V3tX9TNMS5KVkqvKCbJRs97KDBaWyKwn",
  "key20": "4kCGGM5Z5DqYjWR7Xfo8ukCa9qcYSpBroYhWicxMoV3T9nkvCXwyztCV8o3JqreJBR9FQ7V5sA8EtPQWqVoKG5yK",
  "key21": "jEkYQRu25MvTJp6zqiKo8fybA9NvBP2hVmTsPQNNbjr841ncyZ4QWc6ptZNDnYuKsF8bhgUpJriBbNpqSpE96Lc",
  "key22": "5JeeuT4gUKKoRUJsi1ywR4RKct1ksmCuisx5Q6eNmV11MHvmjpbfhdmz3soB9JCGFtksY8dx94xbzt2giD5D4gzD",
  "key23": "2PpxNuV1jdEguDtKiGYVCRmfXEYzgTdJoTf1mBpjePY8m87F3Ue6XniFtwoTXaovVUDVjuiNwBEUyYkVGDD6PR6W",
  "key24": "4tjqgZXB2gZFTh3UZQ1TdQDuP8qBe9t8SdLuU77GuxD716aiXtYFUsifLaPG7tPcdfVN4Ew7S2Y79gsMzKwfYszE",
  "key25": "3vYpHfXfmxoMYye6sYwF3bKLWMZWEkhD4SgdjZYU69UakgRHj5xfB9RX2U7XSZQQZc8qHZQgfMsznYUnEtX5QS46",
  "key26": "5dd8Jbs2R6Z8CxEnBDedmQ74GhnVJgABKNXn48rYshqTfHHmYGtzBkttywXwv5QVdyRZg6p7H9u3AFxGtY1Fbtbh",
  "key27": "4sFijLtwe53nAE26RD7sPQuLBqRzkfVvzid7zbwP8wvqczoy9SJYAB9Xf3r8SXNLGNWDymgPRsYq9f8vVMWbhf1D",
  "key28": "4ovLFHNPejXUGwLMKmZuGE9e2sHjg3wZQ22cSzMzNs6xunhmAhY2sGdc2AzSTWYNothrapL4pC5ffDAPDQNw9Yvq",
  "key29": "5KdNLET1MPCMnUnxpynw9jW94vHry7xXUBoqiXY5gYViyWQtyZApAKKbdNCfYA3XyHU2QZJDbz1dvi5ymhQLXGnb",
  "key30": "4kwAq6cM1XXojHv5MW7S1egV5WAQyASkG8ExAJZBGun5k13WyLyN55fhXoUeZfpbpRdDP9s4ckKJM7KTUogwQKw7",
  "key31": "kcuxp1Y8BKqNrcf6c5R9dDs8DiVR4tpNpG5rcgbSgS9tTfSXbY31F5mc2NTNs637YCyGo8XxkeA2qVW36b5mA9P",
  "key32": "5mWPRPNrnwYBG96JMVSh5cmvPewyRbPj9wcKwdjMtBBRqPokpE95fgqBXooeWCMqA5LMQCVQbHngMLTyPuyWWU29",
  "key33": "3qAxsVEYoBRAd493WGVcKvaRQZfhcDtyFF8LHNVhCaHryDUpDv5kU9TP8dqcXfW5zqdcuReZTmtLZXqz1SrhFrgc",
  "key34": "4uWJ4HrLhr1ngBro74X36PuDwSEDuad62gBAyy6hkej4abZjsVRMfBxGvPWKpoDvXzapib1Q7gEV9KCJzhqGWaei",
  "key35": "4XLn61HUFXFi3CVmd7SP3WXYFsk4vQG1wT85TP2ruAyAbvrqdURUenAVmJPj61eoi7JN94WZwGZSCs5SkLFkXJ5",
  "key36": "57HaJYsGk9WtUPvYjkPusc9Ldhm9UGNxkw6Rv2F3akWZgr7XeVce2pjz9EePkGhpCwT8HqqKKbAiw3dSVFEKd55B",
  "key37": "5zmYU14mtBk23FwuaR14riu9NuwEh3kdtPpeL7fyo1v1a8boMNSPoizrMcV6Ne22kWdpR92NFCNW2fciBLD8LfKc",
  "key38": "3uygUb4bE8o8BoqM3dT1yyrZ1VkwvyLYv5NiJmBuo4z8ncpVLL5WEegNgaET81B6gyhSwaarXLR8p3UXNpidzReD",
  "key39": "4ACNHf3vH31J5pCP8evn9QfYPxtJ4U8tg4eupGMsNMPxmcf4rzc2PbPjxX61r1jwr5vmXhjdbx3aidpcjPpvXbxf",
  "key40": "5wXQH3g33dTSJmbJCD8r3k9NdCB8YUpYpxwBz8gzeKZV548MJqonYdXbthUAVGphaB3ShScF7qzgSWptafdWixkf",
  "key41": "34qDKmsuvW5XkZGaseWbtYYhNafpUAhFsGaNqr7ce1Bjs7kQVEQ3Kh8CEPrLPB1y7HTmGR3i4gjP9MZyy1B1stNE",
  "key42": "5DoBdvuS5zRbRjPeKzR3VUaVRCX7EgAG88FVp42CjmvXR3ZDneCM64XQYZW1ckmCEsSKkVC4jDgzPQA8hJa8dvPJ",
  "key43": "3oEepwycg8zKXeJ3LNYBfqL7Ng2xZkB79kLfm5MrXKpaCNTTvuQpPnJEtS6XS3y4ueqeuEvYcXN7doZg3ozaefUa",
  "key44": "4nD52poEsutL7UP38JsZyYPALRQnzCymMAYtkt8vdtubZRcbwYr3eRUL8zzKebN93PZcM2Q6AfnnkqgX8DJWJhXy",
  "key45": "3zgEovtCfWEbFMZhKoizVLEV4UmaUchSDkVGUCL1ZreAWC9igbJ3EQivynjcs6GqwySdvDwn8QThJR5VB1C8Edq2"
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
