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
    "2Gwthwwtqf9UXcRra7UFxCywJAZHmkGXNjVuRr1zKdEFWUBiTycuUFixpxdxzptKYs6c7xa3nVvWU5YzjoSM5US2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uw5tX7NwRtJSF5PfVpz4q6BZRw7D379qYin5m7FUGWhMWjDDYgnRoBh6PWtbraFPVxVYtob6MvD6wzh1ddyus9J",
  "key1": "4coLz4CB6xgkde9y9pF1ySt9DE4fWvFNqzp3yShRXJ5ZHBWuCyaVxPNv4fj9eaAnSw4viEgmZnfof4mK2inHcCxY",
  "key2": "2QcK79g9tKJhmFCGhedCHHNoGWTeLW54ntZ3BF7TjsdQ2Ei3dTe5WzusFM3ghmPTxj5uBg6sH2PxU9STntJL7wef",
  "key3": "59cjYVZd6PAVk8LpZyqBBKNbi8W6Jjggfk91uB5o15nmVUVJJzZ6XRHDNTgCF3tdaEJbQqqZurGtG8abRR11HYkY",
  "key4": "65Gxf1R2z1i6aJmpLsjAfkRPL7nTMG3QqcJ82bKQ5Cih2K5xvZfwn5dtt69vAwSA6s8dEwTf7NZ1Rc3QEibgdZEm",
  "key5": "5zWH24W6QMd62ivHw4Gk2Zob2j8TNGvdk7Db8qbuJBTi6jUr6a7zo35Fuo9ZZrmxCetVjRx86Vd2qdimrwvhDKVP",
  "key6": "5NiQtEJDnPFk2r5XAUKVMU9jeMQhggHEbdsy5KdSRzMBz7hF3eighNx6GNWb9o4VJC2XviNSVKkfN6TA5B6c7q7B",
  "key7": "3Thu5X8Ud95WfxczhoCRQg1KMyMFsgMR264iDwyW59oML93bAYJpF4SctB3DPokJHayftpFEGLvVVHN9mfvUPUY4",
  "key8": "EtCCmFJWDE4qpNZLMpzixtk57ghXU3HVDj8s3td5ecYkBL3KGWDvwGZ7jxS1vWEGHwgWxDpg56QPBQBChM5Hdcc",
  "key9": "4bYR3BdfF9DQAqniJndy5aPdtkucnte7ohAxHwLTZFkeEJWN1moFqdDBnu6yUvLpTcNmKCRaT7ZJGq7edByj4aKk",
  "key10": "26fQ5pP7EDXJ7pkTd9KWMJLqvUJzVPB81ThN7fc6fWXQ39EZh58UHnpSsW89gUcCmVEvpAKcNyLpYWdVyq2u57ad",
  "key11": "2nY18vLwWSaRbShV64SxZ6oFfqCnpaCfCU45bYc9MMLEi2HhbozNHmGA9TVWQvM8DooriThWJh539hhjdn8v5ctE",
  "key12": "2EQ5eRB3bbmmP6rN9RrAod1VkP477T3mFDLRpukJdB6uL98uW5dPC1v8my9TRfZBZCGpuM1P34RPsJcrrsWkcCyu",
  "key13": "5hgtw2HrzSQFPKhF5SsfCh1MpPe7hpfHZevMBgS41NFM4nBrf1ATpPaKenQR3ys5uwJi95ZGbW1nZB7rpQHQDCJS",
  "key14": "4XTBHeBFxLCqLqdkdfcK2yV1o3EJSmunVqoV5vfQhtvzvNmQuEmEhYVdqus5n9vvpKz4ic446qiVrc7UtCNiGydn",
  "key15": "45YPHfavYrgPQfEn5tWT7EqQ9pmGQECBGmRtLpA9pq6fu8HtMDCUkMhvggrnQFUryVBUkzTJ1xbWYhyBAcBPJSN7",
  "key16": "2nsKiTFotsTy9PMtS9F3mLF4bXHUPwdFkXFUazkeapVqXPzc34GDeomJkirKRoFCSwAikK2hh7rZ6TZG7ZoWjgG5",
  "key17": "4jjEdvLVBQJCYsh5V3URoSW28M1tMgG6cJPQ6Ez3Cwobp4kWwumC1ymvZBzA3WRRAKoDg9qW2GvgMdXnjSPKr7eW",
  "key18": "54f1gffsGrDTmH55NsnTMmndd45TnrVJV3xFANeKBeV1ZGvuD125MGjKdhNsAA1iCpEw19j3qYVUEigTdQ48ihWc",
  "key19": "2d8HVyd6NUVJyoQ9fuUTY3gyFX6zoT3ZWWDesJ8GsKSUrC2FrCaSGzDnuDXuktMWWbtwCQUvm5mn2iJJ4Sez8Fxs",
  "key20": "2ZybJ9hGLvjUZE2GhNEq48w6CE96sSkcv92iceqV5tZ33nSsLCnpTNuZCLTJgG2oJUhkAZ2vGJj4kziQPsbGHRWn",
  "key21": "yjLW3FEXwj5m8XmMLqChqfuVSYF4rCyApgNZEYRsUnN6XQvfLWMbZYqTMme8CdXKMDSbD9gS4ocwAKKqvd5x45K",
  "key22": "381kyGvYzPzA1SE2mkE46tLgd2bnKbAWCvN9bKv1XiwPFXrTZHhgAVkXSioDpgFFpFaqm6oHykFFwYYpgkWv8i9e",
  "key23": "2T58CsfsQ81uXVovp54FhVXqSaESWxgx7eXaEQvCuhEFTJQFf4bpmqZxSTyZMFgJXF6b43UaS689N46CRTWRyuGF",
  "key24": "Y8bRYDDBXuKPnWX8ErdVwPbtcoXt3CAj7vCykbjmVEafh7KwxTGD5nMa5btvwJiqALtcnXuw2wytAz3CPKWdgwh",
  "key25": "WkszG5ao5ZJkWUDmbTLRtyQ5Ap7mRdVRkXHiam26EkbrW3qq3HK6JhUxoPPBJNyhN5tb9kbpZXfqFhwRvKHCvQy",
  "key26": "vnxXMUFfCd4CMkgaaFuGsykkrkPHZiBZHgV9rhu8aeQqqriBGg3Y8byJohb336zR6p24LiMk3XY2Mb9PEcRUN3H",
  "key27": "5nmhJUjV6yGNUce6zFyfZVvdNjtH4mpt16hc434ADoxHiZ2TJfxSvU3ugYNSq9fLgkvPhMq8Aafi2dYDoMg1rRxr",
  "key28": "MnYsVTApfhw2e8aFsYWm4uJVfArZhjai9ResZPibAChJHCBXYRyKLJuLCGttsYBdEargxhTL3K699SjirqK4RtT",
  "key29": "GomejECjGBXHBaNCb1cZ13Jqmo2WV77kWWYki1xK1LoxhuHGfGEzuRVTsHM999Eb46gNRprGaDU1DQgRV7CrL7h",
  "key30": "4ARNgiSFrxnVBJ3pGr7i6erPYAMmFQ23YxMLdNPmFYd3U3BDyeBUi3qrdypB7jrHJP1ks4ectuHKS8xHmmJKqQmv",
  "key31": "W8QuootmSwCUyNDnYstHwvBPsjGAe3DLiVHZXYXAXghboXXAYP6LUUnF4DNrsckJ19rakGsjApEQYbbMHzsTVSv",
  "key32": "3vyN45Mc1o7x3WuEVYBZbh78CKCafWccV1VEnAH1V2auQGNdRyeg8GVTbqQG9JpzKHxkykQsut9wW4ztCRrS77yb",
  "key33": "3mRuGcpipDxm1JvEDsKCNVmCKNgVioRCYDmxeNH9dE4Nu1rKk6nfMBKkwqV5eJWCABzeSpLuk8HkkPXpQFsFYiH9",
  "key34": "WPaajkjSoRvCaRtPGz6LkjootBGUdMxexdwRg5cMKTcz3U9VtZvJ2hAzf8u2dk7LnXrURW3ojmv5y6ELTVxxAh8",
  "key35": "3rmAfXS5hpRL5cwvBya8FYmoPcNhEWWQXBL95QdAaLwtAzeoFD14xgofT7biUbTMcMM4PWCwqDKYbJX1oaidJyHT",
  "key36": "2N1cqDZsFwTZMDCjZ1vNdpFdr4MJLpR8fkwPsLCgayppnLiJmiFajmDEyzRgU7XdJ1bhGVvmFmVoEcYpZJHrXPTe",
  "key37": "4u3XerK4UWrLmCMPieNWpeEYqTUkjMbjZshVDPP3jgKGNTrH8S1vUSvMNTPuHGff7vYfzgSurfS2Go35NB9aZi11",
  "key38": "3f495iPEx74jeDLKFAqNFgfKbp87nDZAuJR98KvELXHHCd8jsUhzdpJQhUybMPbkUyi2tRswo1tKfkqbpZ4gSzPP",
  "key39": "4reA2AbmRbmiXKLgdpvMbeoXpGDaTegUdjriwNCuJMZvhsDmvXENaeYRQLSWbj1VxqyjMqk7BtA1FtcwHgJ3sBzL",
  "key40": "4FJ2NCcJX9j1735FY3GnHzVkctKB1uw4hXtwKmGt2S5B7T8dWFmgersUXFeY5dcYyeiuHvv4uKhG4szcJrFBBryD",
  "key41": "2WBdEcdKkvtJegKq7ANDcevHtQ7D3h4Gj64MVvyDLSHQeyTLprYQR29BAmC8ek2LwWb9pyic2X8m59aLL5qyRU5S",
  "key42": "4NYqysKFYfLMWJT8GMW33vsevGvGuEStr6hEfr93YBxyQXRtKhKDwEhcwxukWtEdTmEoPkFjkMrpK7ENAaFuCAfu",
  "key43": "3tGTMMoJY2NhccAcZHbEXTRw6evLPefdnURntnj5PuX9QSJ4Nr9Wt3amtE471yQ1wu5S31qBagSFaGpvy378bTaq",
  "key44": "3suJ18RVsVZvK4pUdKErsytuFdBfcQq59vH3BsECYVcA3uMFBsTCF1wJbDBkiokFsdnvs6z6JsKrLSsGVVfqaguV",
  "key45": "3418FbpJCScCfLWuzfPp55B6RF4D5G5E3tN31gQZTmi9miT1NHPdGR1sdw5DWXtvRKA51NBZL1t3xsBuTFZWqqs1",
  "key46": "3JmPmE2oNbh2fvf5s71Dko4oHGRMAYyHkakbURsx1YZuNxU9AB43DUX7kaP8MUqyph2QzPqhqqchKqkS25HahiZa",
  "key47": "2BpD3oPRrpXVjTBhQe6x7r6xoRitrBmJu6nceNGyqqvePovXEFYyd9YJucWQaNumjkV1DGmAdb6G9qMYKyk7TPeX",
  "key48": "2jcixzKqNkYZ5Fr7APrv8H7M1DZWsa1RJLkGZD3A2RTZFkf7W6ih1yzWPyVKJkL266J6YzExvVDWPh8qcUMMdbvA",
  "key49": "3GpCuDFh1foCy3bTWXE4sXc1ppEjtu63hMZYqautAag8raPPXpgp6x7zyHpEANm6qModPWccXYP5XyMEZV5LjmSB"
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
