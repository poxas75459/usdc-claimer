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
    "5UomrbVd4qcLWJYxxobz7EsJZrnVW7Gc3TXCEg7CcNiKBJQkzAbx6Vu48tWHiZjx22L6bomrgtAiyURedFqL1MPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QNQMZvS15R39BUqV4wNrBiRLFqWjhhL7mhHVPPSYe4nMYYZ35eZwUg21MaTorhVmo1Y9YfPVnc3oAoCEbtXfdh6",
  "key1": "2TRuRWXdkmhXik51D2A9ptBomFnfXRcsBj5aqVB8mygKEkZ69x2PL96K1zQner3EZ4Y6zFDKiFbrbfbn97fYYxNS",
  "key2": "c2o4ugJ8AM2dnBZ5hXXrWTKTbcRo82SHxY7XfKydUcDxJkBhkcitaW2pchjiNHYZ21HJNK9o6eUHzK2PdTxeLr7",
  "key3": "4i6XxzR82hzSZKxYd8PTLkEBtrGMu5XDDqk9CZrUucj82NKtjDS7RQamJRGnwJ9w7vf1tqwXER1fMVqvEzCreZoy",
  "key4": "3xgeb9FWH7XcLx665xBrzz2uVVVs7pnpxBDbqrbsXLSEkEkcZ7vYymPUotJxKJjoQQ4efsyYRFdNzAEbg29xF2Vm",
  "key5": "Md2f49wJuxqb5qcGD48MdBsoGRGggWgbyNC8u5PHKkjtGKniGkgKiuugBhuZRtesXAxdF4rFcEaex2bQvmdsp9U",
  "key6": "4GyWHL5m3RoqjJaKsEno8LrrDWp8PTxtQxB6VbmaHtJdzb2JAqn54iNhRXHV729MkZaKVqtRYAWbsKT5w4KqjrFu",
  "key7": "3BKZdfbVFRSdxJEQHFzVyf245fQbKUr6ARLSWd9kNebWf5nBhYpH4yaWxdJHZqWThkyUmNSQCtFWR3fSXt5srjRf",
  "key8": "2omYy37cTeetFfd28SUqpeBSuNs5BNXaNRkZmm6pW9ArVffP3RmH4Ut8sgTkUDkq3QzkcEyfJwACWn5CJNkDiQby",
  "key9": "5uVwVaHj54VmXR1MuE5xm8ug6vTZmwWYY1Avf3W6hHAHNFDP7SMxsjycpCRMUNdv2ZsuZsjcve7tJjpaqE7iu78v",
  "key10": "eaiBjmKNYyCRUxPGSQpEiqkRtMZvZ5urtmB9XhFEj36xYpytbSVoAvLXVDqz2RAJHKAkje8CLgA8U8nzgunUgxW",
  "key11": "4CMuh1YbKz1keeYe3giVXURA4go6KDW4kf8ezKJPb7zGyLcUL8XDt1b8QdM23yAE2QW7ikp7wApUzdc6vjnYvraW",
  "key12": "2wGZCXW5poVCGBDUGA1kzpRhJCp19q8Wpk9exxM7niywqYNG97MuvR5M7SayZKL6n3yJJN9fvfsZKaEgzUt95rhD",
  "key13": "4Fhc9uCtUUziDmDA2XZ7qfSoVZtM3uLybkCeg9HQ3fytLm8u5UFopDP8odJBp5QnskPXSQtBYARu63SW8BMfJJv5",
  "key14": "LMsvQCR9SKNXcYCcjMRYcJ1qE8U1kTQ6YXuSRVXyJkTAvxfN6vVt6JwkjKJbCqDov1nEGX8fcBbTLkFKpChyGYQ",
  "key15": "4XCmW6RBvhcsiJ1FfoEwUTVJ8C8jWca6YmUd6g22zL71KwLq3YafsXh51U6eTHDq2ndaLvGXGwE3VB1B7vo2fJXT",
  "key16": "B7nhNSi1ZJxgdgrMQo72xpwnxYuDvv7idcxYQDgAkYyh95b7r7caKEJgzbTbNAvxVtLr1odLov5KGgozx9weiKV",
  "key17": "3BPDKwyzqsKtbGAGL1DsTMPwKyccDwE1hphha1ZvY9ux6anDGKNpvBuG2GzgUQeMjwjnCivyLags4pf1SbkgqBzH",
  "key18": "5y3HvgZX4GKArc2oXiFx4rVMLeMwBn3j21usE5ganFtvwNdiUp4nCcwrue9sTKxYe4rau6FNet9oCJYChiG3Bchk",
  "key19": "34sPapsuB5sX8ALB9jYd1uSe3oHC19ZGdLcUkuxyPtK8QPMRLo9NwPgdD2tTpjhVihAyvX9C5h6eJS7r4PH9rh1x",
  "key20": "4LDis8uBpR27cL8pvXsRJKWz7CVWvXx12j47E4S4RBXcuXNQRf84UxYGDXzN92yWaHrmrs77NvnWYCWBJ6DKZWBG",
  "key21": "XDuwZ4dvxMYawh12Rc5M89bPtGMiXnF7RgAr2KemoJPbzo1nha8jujubeQ1icJpkkhCHeDbP6GyLZQvpPhvae9v",
  "key22": "QwSuMj58DV9wpXCEmoVdyNu8KN9ZXcNEpLqkkMEZWBDM1kyY9ELZ88Z3uknjaQbXyTAzV6BDuAG5Ufh7szM9c5p",
  "key23": "4rSdvJt372EVRyL5wSu1Vr8TGoHNSuPLGgbnveaanMxBMdQZXUsPUsAzU8d9LvE97Uuxq9qcHnzhyodBrNVYZuyG",
  "key24": "3ESiLdf3B9CkN8mMgcdciaQN77K9oAWNXGWuCXL2PGaCLuHUWmZwbdK1hqxYgdnWeCJy4EWbdSm4jtsCmWL5szm6",
  "key25": "7oStYVANkjP2S43ujfCg2VbKwWksNy54z4e7XAYFyJV9vW7NYYZitGFR8Wuu4RqnrGeAWdJkJwCPMfpKc3oxmEW",
  "key26": "4SQgbM2ZRgdfPSFaaaDigm48JbPozWDAaW5u4xoPaoXMxuTW1oNf1YqpypUosvuPH967hyf7nHUtXLWwVminFGp6",
  "key27": "4p3ntmzVZSiC9g1FbRZocyTvf6asM6fQahX5rg1uysvNoJ8bYd5ktHtkTL1RN3E9bKevnGLiDsX62B7iTX9PjdS6",
  "key28": "62eGpjhpCtY9kwLxMKMDiu3CBRafxyzAi7Wrr9UWuwE36ace7HiR7643qcH7yt3poqy5ghEiQBer6A9MTKVPZ6Qu",
  "key29": "i9uyxCyNoAVtxEU4pNpsg1YeRWMZsWUFRAXyv3D2VjHEkmrm14NnvrNqTUPq8E2Wi2BzV2AWMwvuh1FXpnRGKSt",
  "key30": "4eyg4g73X1CKZb1V8hKQTD4nbDuZLJfo1nr67tS26JbCfzZHxjkUoKWpdm6jpSXsgRxWkJa7CYKYc3LJnG3zZQTL",
  "key31": "4EPWMhCcTGfiGNJYWXbiVbY5KBmzecvBWiaXnGvbzSPNQrxVzkhwfiaS6ZSnSyLLFYyTikyhBRmdgdy1C4Ay8sDr",
  "key32": "4mv6Tx9GmpBSdrau9bFagnwYnB81AjPNCf2xMQhwKX6ZynSxvcbMELGX5jzxfaJcrS4xyEUiMLtxASt54KQkJiwc",
  "key33": "3yBA5PHkZLMQQhvKLvZn6KDUGuiE6XBwv5B366C6gDaktoFXLeubqjYfSSkr6nQDoPBcqU3aaRKbPd2y4r4ZLfK3",
  "key34": "52W1PcnunF2RsUJHSMyoMg5p8xH3efhL3joCLiFKj5ZvTUcvqJspaJ867fnaeHNw6fNqJMC2HptZucgYPrNxfgjs",
  "key35": "3Fd5G2GB5qyvPAfG7c8Y355CsgucQDSzA5iWfrwVq7t9sP2jsbwWbi8uzXDmu9zfTxLJAd3jpUBPcWQdrJfty9wH",
  "key36": "2yNR6pZZk6rMCccgLJSijWNhN6pa7XbYqwdH1yEDfZ49LybFnxnZzfGEzSsz6qhqA5FEK5GR9zPvX8QHfqBkYoss",
  "key37": "4sNxdmKmb7cftzk1YqnvF7Bc5vpm4zCiyaYfaREinak5pzrqAsBk9kATURjY8SepqQ36Hbvo9JTPsvtpDj8fZxQG",
  "key38": "e3UBp3izfSHPoQGHXwwXTcFouHbU5MLNRCij9EgSBwCBm9MUyMosv8na92yJfWcACuimbXSEkERzWW67Pbp5WWg",
  "key39": "BYdyEwCnCv8HiW1oDCw7wm6Z5qsHY4VPjKpyFKy8cbVz2TQzHKvYi74BTJfpTF46W4E1yuKMzdnTTxgNY6hDa9j",
  "key40": "SmYnaS4u1FydFi1cEHikVGZT3cbCm6aHL4iqe6V3SawDJgvMW842hQCnPk9ua1RCNA7f3bBTNG6Q4L3S1KRCh4H"
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
