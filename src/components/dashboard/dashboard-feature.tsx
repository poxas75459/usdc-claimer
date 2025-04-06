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
    "3uMXCZi1Ye2H9y9fuTnTUnbQWu7ziHj5i4886q5HgRHkUVqi61XeHgKo3SM4SB6gn3jusvqL8r1T1sduox7t5fTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ckK6d8QEamhLJJMV76cMYBsN3aYJ9BoAha29UtSPJwk5NH3iReTkBQu4FHGRTMg9RoH5kiz5gLH6PH2TifSGnpo",
  "key1": "57qasJm98atR9dZgfmxFxFqtadHhqP6dMyNMeyRxNk5QTWNY6nrvX4AVCGdN6gaouTTPMk9VrESiJVDheGewC44B",
  "key2": "2TBDbLn3xAyHVCHrGQrzdG2KhoC5duyi8u5nmTYBTrvmZ3dzZwtz1RukC6wwv3sgwFdApkEXEbspSosEibNB1oJJ",
  "key3": "4TcuvQabK9pjM86jhVLPqbit1AFGQTXyr7YQ3RhaKmai1nxkmeJyyaZfYwXcNtoXijoGGR7QwiKckSoSrTWxr6iB",
  "key4": "sQxQSb4qFV7E2iKJJBNP2yJmoBAui27h12ALYyJtznU2AAriUF79k1DSJzmhcWa1bYaQ9Y3Jjw5ZrNKy7dZUZmx",
  "key5": "4REX4BKCDpNmoRiYBJanZ1Pfonxqo59kYbEifQHg3s9FmNTBCsfcJtVVkEgRAjJ9E5jJv5qw8WrRipG7qrsFP577",
  "key6": "2MtF41mbeK3LMBEgHkr1CB7EGoJ3kY8dPbM8LXuGxF771D3zBQfzpVmkupQ6Q8wT5j8Buibqi7iKLyAKW7CqLexD",
  "key7": "5UiF44yUfN5gjfvh5T89DFE2wE52b9DAeNRRVvJUWhkcBXCqUTaXNDoT7cnQfSyWivF3ku9u35zebxbqdaXWqmQM",
  "key8": "ck4t9kJAPxZKCRV4LVhNtVvvaGBiMsFibiDcN7zdFsocbK4t4hEueVLTVHkDW8WxEPzzBJ6V1sv9pc7sM264E5C",
  "key9": "g4jpMJnf2SMTLUrfQ7mTerPoWxFoVfGDo9vZDhG1HhuEXWk731fRN5DGLnxPt8BSCHfgW6ut3WKYhagvwjLy8HT",
  "key10": "3jab4L1EUhxwqhJXXxfxrpkj7obYyuCStFXxHsYbgrLChnn1a4Nw4Db3P71uQb5NXr4tzMkFjHPReuLTsqQVBXDU",
  "key11": "5m8PMTR6Bpe2RpZVWo5jndGMoVusxwGagQgEMmnYghNFU6UZ6KRYRpAsxR3bGwsgvxbku5ynLqtDLZJWxZMxw5uc",
  "key12": "4fpGqnQaVidHu3tAjk9qqg4wjNf24Bfj6vjcQGniS5S9uJ1SQVRcpBUxNgATJhQ65zp2DC8anYJBLMBzi9CNiY8V",
  "key13": "3LTsa7E4e9axDWvkL41Y7Z1gJHu8U3cM5AUetW11GDugzu51EzeCcdmbFNSfShhtkJNCUYjD6uKN1ei1Ft7wk7kF",
  "key14": "4FSnV5pqbzMF5ADSFN4YVPR29SYqFNk9knFfn7G5UqjjdaKzzKURo9b2k7N5Wrf5KLPQXrBbo8UkGLt4ornLTpKb",
  "key15": "25xEVYkKSebAfGFoLW483uYt44MSQSkxJcxcjRHG5YW1vY1C31QKsBT5Ho9GNeHspmMqZzv8YfRUxqoWbWxiBJYo",
  "key16": "4T4PLeSSC8kQvX6zovxogBVUeszc3B7zcJJsF4DdUMwov79seusFsKD288RDsJyhMioX8aDXjXkRAyAWYEA2me5e",
  "key17": "26LFwisXyYtcuUwdrTomzH6yXCiABVDsyUCXqPfraq4BryjEEH2u867UsD88d4djRRdNhWcSDFHE1QZA5m6Rwwkh",
  "key18": "2UmjKhb1tG4NbLeyP34N8ey9R2b8cvwt988dE791uNoco3eES4onK3BxeWLDbGqNy8GU3mN2y4DAQnVfRBFBscAc",
  "key19": "awueXuKK3TG4FmrMdfemqiYxeYYprpkmNhhvKAcMnxsaHFJ4eh43SPfM7AEUFLyCnqXxX7KNAmU18W9PcawsCVH",
  "key20": "5tgJPzdXGZ6CKC3i3KHuNsbUiNmiAftjgH4vEhX8QoX4ApfjuaUX3HrXc3R16udqWvYk9PQM5BTKPtuPAK3s6F7v",
  "key21": "4DRxRnLALaw7eMZvqtYRjbGpHx468xzHwQTLRTDNLLdrxkv6E98VRYy29QVtDY1Hjv9nJVrTLToF5ztDmu4y9nRQ",
  "key22": "5ajktBemKv44zYadJbASyZ5VrTMFiyRH7hyarHnbY9wZm561zysS7XoVjpQ8VXnFhqHXcbga56saccoVAvwn1e3R",
  "key23": "26jNMfXxTKdhL2RHrPsGnCaCgmJt1mfXuMALVvouTHLnxS4U23Ynex1Rim7hjBkf6WTm4uwT5Pw6krNmUdcoCrvx",
  "key24": "4PwiogsqX4nWdvLtvLdtnZeEpDBZmp7F1B14HNwTBC5Bf8p8Sesn6GQzJQv9jpbmG2tB9SKnHAhSECPt7KXPMHeF",
  "key25": "3dDvNfq7q23mME7om7eFqYGoY3oVe2kfjdTVZ4L8z3Aero4v35xEzRmgXA9MyY1JjC1oTchGiajxWTLoj2UdThZk",
  "key26": "4KAkPQAjE5XE67oQZ6BwXR5TdWYQ5J5FTk2jCSQ8FBVmb9TmZ5kx4PGFCsXBNPH9WdYbmhGNsHePTWnBuUA6ydAc",
  "key27": "66nbTts4EFXnARvj1sR5KXgxjmHLtgGzkmTu3eaMmyzrgFebfNHZkAwVHjZVgWTLeSDiopnpCY2ymsfvj7Zewwzf",
  "key28": "5mowncvSND5twD11NUEU8g9KD163eacLr3h7Thu9v6yZPy46bTTjsNwXsJCmLcQTZXKAzgNdAfpvbFStUrE8HQcZ",
  "key29": "3P7oD7kVmj2chEuJTm4s2H5j979ctC1aMy8KUEdTaNaSAujcwJBmfwQM9hafMzAzL4gbXhoDRQREz2MMUan9LcUw",
  "key30": "2wRtnPkXwwL4UAYpmxa4Frumz1CCiy4jmseXWqkXmjPwEAdbgNwhBqfRqbeZ5fPNJEdTiXdoy4LKv6VwQUkpZU5Z",
  "key31": "3FiFvaMFgHtR3xv9e7YAJChUanTH8AYwgiaS7scp9XNr1xwAENto6x9FCu5WLFHomkpBSr1yajFGnMRwNjafZagu",
  "key32": "3QqJLnLsXuhAf6RnedNqiuCDfM1sdtnyUwBQLAe5nAPsC3vcdPzxDti5Ksn4RZmxAW4PkyoSa83kM7URKa4XedHq",
  "key33": "4khLVDukxedNfqwVetFbv1haw4QXuS4UCiZHVV2haYStHEpvYif2wQu4utzsHoNfxyoQcCfXdKWTQEEdVa3LRFTc",
  "key34": "2UfvYdzAuznXT3R8icuKV2e56wXSM7fMutfxFRpVzmbqqDj34zLRQfzVAzvF48WAQXfqo34uVzREFNXjvQ2zqTFA",
  "key35": "66TRVroazcTzJg9iWr4QJbjTKgWyKyFC7meYsbtYfzUdWDU8hUvxQfDzAJkJ383wDWx7UkRQkabpJgAH65TDiqA7",
  "key36": "2uhDxhn7Gre4nCmQ4pqmq54QexxuFDf4Q3tNo75jnH4xEeNvSQaFibYZxnA2AWib2uS4eJJEd6e3Tcpqe8S9AHQx",
  "key37": "5jMgDD9WeMeviirSGvbrnHnbbVxfJpNxkrPAL2nsAf3D2DoQNEqHjMMWvzXS2hGUL34tZKoxi85xoKtQGER2XsRS",
  "key38": "5Vqs5gxUzZyxVV28o2mfJ3WhZvMKmJpyWt5ANmhoZuLMphJNQRcf96t3ASSie6VBdN1A3kmSp2mceH3iL55FxEsB",
  "key39": "4V4JDAxC2KSqNoqZpzsNk4X1mZXP14ExYpYunmGMxmw3ba9LtZewvo87E6PBRE5B4GMfeq8cXFpsoAZnnbhDTyT5",
  "key40": "3TP5CjGdd21678s5FZSvuzTus5aChF5noVJrKAnLPRSqYGRRX6HmKmyh453FQXcX13L4VRGmvqkX3TMTbWuU2xpK",
  "key41": "LwtTvxu6iNMzjdP5Tqk3FJ4N3WbZktAN2q9uUZR3KtCbhcR6oUJZVJZ4omV8mdJ9v8U6Kc1ZUGN1mpCeAVru3UR",
  "key42": "5Sw7oaTJ9rNx6615xLSqSokGsDDKAfmrrdsUpM5DPVDrMKy5XMdSt8dM8PV9VgG6LWvreNFk9LppyhWWz5ouBpNw",
  "key43": "4T3vSXq9wYMeG5Qrmvv5gCrqfYRyvMetJkNaLyJQ9ayw6apuHni3fzAEsGBBEJ9mWFgerkHpQDCBEY2djvPnKMxi",
  "key44": "5V47X3NFKANXssyiggR6hDNVsTgNZ3BaDrQYSrn2t7zkdon7U5V1q8ve6dTdatmGN8mDzh8HFqgeWv2t9tCTWdEW",
  "key45": "5HLGFhm3X3FEmjxUc9i5VuXcn3XqGTWy6YGxYQeSFZd1HbxiAj7rTyhgSnNtaxHJgaBSeipS5FcEmf6WrCzsGuMk",
  "key46": "2EBWKEBABSPXzigXBgKWt3DTBeCYJNttCaHLCsjGc2HVQyj7BPFTMowpzqT8mshBzNCr9J7oj3T82b6Ep9QbLyCG",
  "key47": "4PDf7ass78XA13YqN1ZhBSGaW83DeM363YXJse62xjeczmKtdmpu3yXdmcHD5bstFKgzdFUM91G26j5BFbvLKFZn",
  "key48": "2hp5sFWLreyk2jreN77arh64E8yt4ms43NUMHj3dWfwx7cYfho72SLfTAtocr1nNhU6T9Fpwn3NdPjHdvXRzK6jq"
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
