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
    "3HU4YrwGajKRjyg7j1h3YJRaUR74cCCFVbLwUZF3153r4wuhjX4Xb8xQKdUpGK6FjcnJxy8pGVqXaXX4ygvgEnBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BcmnrCwAuSmp4rwircEWEHgK8weWY9NG7YqL1fqMspUa1pfGRvghHzcS4p3jMchaBgEyDXBtmxdhm12ssT7Fprg",
  "key1": "4ERorFphv5D9qwo6ZTmsQQFTDgWqPZFX7WouqZS9VJbimvnh1y7Kdos84XnZ13r4jEU1KoRicjjhckDm8rjK5VNp",
  "key2": "RwJcFNG1MuENq1hqFV8wUMgJwWh6oCq5FREbwuSBojpatsy8GoMYNaGE2VnKXfdSZgD8okmJTZwR36NAvk6yfsy",
  "key3": "3iH6vjNs5PCNNN9Va7xHqbdfZPoNtzLnqnRbqtdyT4Nghb7wYQzQx318iVrwMwDQqoJFPKpARUmmgNt3fCdHYJQS",
  "key4": "3gcxmD3kQDwUEiGuUVSx2Q49pH6cAe9aCuAQwDVfnxYVREcoScDNqna6mdKLP3JdzC364ATduwbiU4kVLuE4QZw6",
  "key5": "3kPbYXL1BN1FS4UNMSXvhLm1gLB3Eu9Gj5ENE1p5FXe1cm5vfXAjLarT2vSqcn78sCBXtfyNSrqb4mAuZLsnHuHm",
  "key6": "5zCAXUqax4PmFKFJkgZGxsz3LSQzf3xmb9w6TCgobvEZ9SptVxzn1hWZpGVPzajJ3NRDcXijwTW3ggwTPTAGqBL3",
  "key7": "4AHAoJ2BUst9cHx3YSNnZys9bXSFtJoYarbGR3u3iLj1whhvZ14zfu8chZtexom1R3evnGyAqZvqgvaX8ax1tRRd",
  "key8": "32wJyn3oC42V5unnvDyYfULpTjd1EDHHChfg9E9kfWTGfbNTKSpSqwARx9xczuNiU2t5oKwA7NRciokh6umaYWnA",
  "key9": "4tcjtFsaETf2gVngU2vJG4HscPDTP4rNQ39o4PEyUsYfD4iNBjan5c4WMod8e6SG9HjU8RF8NnX1PGeDjDvNURkV",
  "key10": "2nU96h6t8kur6CteY1UJjkeYiQnF25JvLGvkKc29g7EHKoLpDntB1KjKcRMbU491ZGR88sf6Gm1V5ZzwL1QUaBWn",
  "key11": "2okSBRCW9pjS8xKdF2AvRDceYjUGss6iS9GLVoFGycJ1noUigqEAPGBJkHG21AxbAh8Hdv99qZGpr6tS5QUjiZpk",
  "key12": "561QbmweNk9XJd3bU3aRdkjvZUp4Yut6NRHu7qMDHhyetxU6wSzeULJyP4eZ8UVgiP61Z5czH5pNGnyLSnFFBJwT",
  "key13": "2Gz41Nihz1g8r4qMP5DdEGaHRkw2QSR5Rjm5LvwFxourJWpoBLgQgzW235ZWvCNdFAEVujt3hLXTkpidv4eV692m",
  "key14": "HdSHJzjexYi3mh2qF5oXUPfg1MFbs8xBqm59ar7Wb5phXVMHBzJrjZxEz7FVCySm1hHQNcLh5RS4F6gP8ifvEpS",
  "key15": "5m2idgHwpSJva3gxmR6JSetLK9Fuq4UJLWytJrG7bwPdXuh4r2EgKEoVFDr3QAEMXafJJT2JzCXv8cUPhkKAmSoT",
  "key16": "49g7sz9RhR8ckeRqD4pbSc6ZWBuYphSCG8xZpZ4a1AYp9T2FvvHmZfcvKYrwKngCNGrZJyW5qUHGAaCs1QrFEEVG",
  "key17": "4Ese3nMnedoTZWxa6ytkjCFMFeHy5BtqbTnUcGpbPQzB9tHjAzbUrsXz7R9dqN3fjLTzDUacGa9nVE39seBBnrvZ",
  "key18": "25XGnty4DMMKSiwUC6Dgyw6nEXh9sApZy4aV1Eg1UkAEaPSLT6xmQCd1CD7Pz1Pyjw37VnQdyJzCiV5ZBZedk3iF",
  "key19": "BtdfJzrQizVqS7hGcwsve3FHJsVjw87ju6B9X8p1Uojgvd4y2KPKFbYwhREc9rKqHJTnHSujX9NkxGbTUJVmzCV",
  "key20": "2cX4NhUakPbk9eHY1R5sjyYJeupLJ43riYREwC7B9L4TQmTMb6rsRCYtCeanwKdEuzfk1e9zy5PPX4cuQtGsp59d",
  "key21": "2zSawex8nEbHBqZhJ1VE6Utigu2r8N6nvMVZaZ2EsWhP3H146xkApTchfNmqmWy1XLsPNb4ceR383zhuxsu7DXe",
  "key22": "5ocy7Qb9VKqwcfmyyKmYmih4c4LPyywBTBjBL4CRq95wFGGxviVozb3jkq11ABW29YzpaZibyA8mcxPtjM1xap2z",
  "key23": "21oMNenE7g99cGvon2TsVW2p8f2cZnUmoih4phMpRvpT6xs2txhQ6vc2eBfQFfkfMe3aj1W1hn9HC1aWcr7gdSZh",
  "key24": "25cEvHY6spy9PuTg9LeCtb4GqnYKD3CdDoazbZvaCfP3FnxKGHpCZiupMqREMWNDdyngz8KwK41ASG9XerNiDCq4",
  "key25": "5XDAotH63oYhZUhzuxa87PzHjtaJAercHosCXbZyfvJ8udjBKJe1qpzUQaz7RZqy8wJM4Aw93bwkwAhaoBHR948x",
  "key26": "4vtz5oJQiTrgn2TaGoWpCEzXYfwCj8Abf6DQ53MPpQS2Xtx17sXJCtacmTjsgBnGEHjZswZkSayqDNQDyCnhm2c6",
  "key27": "DxDfDkohq2Ctab17XQQS2YMo7h6SNJonetNhHSbw57BaSaiczW8cAqKCqffBjCotUToW95XnM4UsTugn3Rz4DMP",
  "key28": "2Lqcmkg66VdXmQHNPbTrEj244Kp1jbZSdUxsDy229Fwn36ymNpRkMKeSMHNXMVPX55PsBzhn8jzsa7WF3VNPvtLs",
  "key29": "3qB2hApWgjtnwviLLJzMMpQoYCt6JiVCCwBFjcC7Q4SwyXFgT8vgfSr5eHCqqsStPRzdxtF2UWjXHAoRMizPuxQW",
  "key30": "5QdhuJN6ckDGViyQ86CAAH6fhSLedjRPZTbqmcYrXyqGoE7wa8DHDhX9BaXnDopC7AvC5hkGAaMbVUduDh1ocsri",
  "key31": "58tMg1y2vMJLFmdLe2cRxd6jEZn5BsWU5wDrNKE8jpC7BAh8WgppGU83tinJrNVUswkj1nfxr8mKHLvUcyzv7JPS",
  "key32": "Dr3KzUzb2vywxspVmNsoGRdyYVrFBJ8pmnT8cKvUuJte2SdebyWSvMNNBmaDPTzAvQQLtYpg28nfSUdDrGwxKeZ",
  "key33": "44FJYWGCYwu3r2f194CRXzj24sDMRk7gsjY9MSGmvuvWCxMPXJjfkZiriTiZ7JoBhTcaZaq45nPPesB7gnRE5p7T",
  "key34": "3EEcUjAtoYazgSGxZjYF6yY2zdMnqzcaGT5x1NZMDx8XuX8jeW16d2b3iJCRvdwHX7i6UHSskZhyTMiKpPdPGPyA",
  "key35": "2m68WMaz2SkVM26HVT4GCja3j7s8gXa6sRjeF97FMUysHiTEBVCQFx1gEd2bZZavLUJQnCMZ5KKWtgnVnvUfqYX1",
  "key36": "4CDW9L3uHH5wQUgbbsuNN4M6x2fTnq5nwJV18a2CqwWca1GQ3pg7C4B6WhTgxyhjoTu9AXuFEyp5i4zHywxXzdTS",
  "key37": "51sQCcv9kfGxAZ7DWT7BBjh1org4UgT9VUSALRPM514VDW1p4WGwKc5trAcmRnnmf9rTRg6EGTGgRdHnjMQWKvk5",
  "key38": "3Tt5YBA3vrLWYNRhk1rCyxhYu5PUEAicfTzrzBfu1Kph3wDaiZ9LcQ2M1GPnw6K1gkxUFoQigNUbBpgUsFoN4C3o",
  "key39": "3uyKSWiuuLqmofFjVJv7zrtVkbMamKABMbQunds3w9vad5enET8GyMNB2HJ7CLvR67T6SzPyoj8W6iSJg2A3DMaN",
  "key40": "5fVHHj8JC2tEHZSsXtUCmm1iQEptZfUAuCLCNxH8ncQpB8jhR458uTMMUfEZNhARhV4mi57zvmnkvuBSfMVoYFx3"
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
