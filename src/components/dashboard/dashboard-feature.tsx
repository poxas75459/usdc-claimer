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
    "2pUnXUrt6cv9Se7zsR8wHBjdbgRpLwGYeNu1d721B7FWNtHLXvUZeThM7UQLNNvtPMr843Xy2fA93YCGbSC4cgxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eFFMVuQsGbWsgYikSowsEdT5S1A5C5BZu62JhDKWLdC1rphzeaqCxTJHTVvi8kmrtHmoRATUimLXpGrbKcWwSSv",
  "key1": "4abahd2G2XfpE7WCTjF3tduVZstN1xyLWy4JksNv87AXXCB61CDRdbjwRo9U5EJxvs8VUuS6kAP8Us24fiQi1Gnw",
  "key2": "3gbsy1NLnnrEqmdUWgBZniGL9VmEUbQS9fnDKrsa4GpQMVaV1QK4tJ6jpwcoRh5XAZFXEXA6K6bYjheakd4GwQV9",
  "key3": "5asBYXU4a8KwhEpaucD9FqZ2o3MhmSPFBDCDfCuSTGj7hL6nqtY52Twy1wVES1sSJQLvkZ4dPrLcA4bfbBfnoHDf",
  "key4": "3ndkjSn1a3sXiwAMqBuLCj1ME4TGQW6vsL7xbQKntpUyJBwNR6EBDuhrJtwn32n6vTUUcJDtTnEj4gEwP8K4uwF8",
  "key5": "2w1dnrVR3DvGLZmAZKaPPp2kEGVUdz325PX9VmqNfWjgBMvDn64iSesC7oiHbBruut6jWYGE5dkPprCPEjhmrJWf",
  "key6": "24Y8R6oZCtadFUQx35ikkZV3CW3yjGz3NWY1qVAA6BDrrErTzgnPT3taiU9bLz61ZKvjv5K5bE3E46WtcqABMe7X",
  "key7": "59f1XNwZemK1xTPzeMzFWbMbx2W4XZvSjKiQ13B986mw1yvRjkBLCi5KvT1vkQh5AxiNAkFXQ5kubMSakFfKZJbn",
  "key8": "2bpesWVY8S42TCpU85KBTy11f7ENMsaF9BuXjQiKxPFZQ5ct47m3DAEL8nmNkCKdZdbgKbByTLKn9dDA192Zhim2",
  "key9": "2hGmARxzEoH8f2pmJP14pYDWAtB6eXkKD2nvhvYBEX1hSFTwPrrRDayruLCQgoKcLtvUQtBSuixX612cvRxjCTk7",
  "key10": "2cbnooEAoW93oX9yVMA3GdLRMPuHZobYgegx2ocz4fKKVpaZJdZDfCALcaFvti9kh2mEGgiNdKGRu2CVLqNLLK1p",
  "key11": "2dCttPKgEaJVjPuk3TDYwVAEK32GRH293PyAwWjH7DtiP3eS9C3bzYLrwe5dnR4y8USqSahJPhGh4pksbUF24eDE",
  "key12": "27GEyuRdWPGdwUa2BoSxRZANxzkhF33aDoeGopiTYmGXV7T3rXWUX9dzS3XmzXsA4Ke3pAeu1UEGH8u4itxEEe2W",
  "key13": "4EtaCufEPxdvV284nDav1JcTyhJSbEMRgihth6DDsCRisMeZen8GaGPpEAuZEZ58iXFmaTguTVSFZEtuYnf8ieFh",
  "key14": "3pKXQyH6wEn97mbkPJsscntg3dMNJi13TYWzUSynBeqoJ3dSwtFPmqYEQjb6CkQBpBJgJgJ9nf9RBMQEz5mxrjEg",
  "key15": "4jqJ12bGGn64yh8jn5UioCH29cCdnnj5d62Xi4uqbLZ8YyLu2XwVqpadxxnfaRtzN2KNACZovCkwMhHeAVK9Nf4o",
  "key16": "4HpxWSCNUn4nnJ4ZD8MG8R1ry9VmJBUQ9A8yZ5sFuT7SxKbSm1gMg6xEAnUVLY9ofzewva9ZSFGn9R1tbXmyv5Ye",
  "key17": "2iLe1ZSBDEAcHjRxWbqYJLTejabcHEYQTMida1pKweLWNNJe1ooGV9x3K9aUzj29qn3bdaXsDZmuj8SPzHRBUuP2",
  "key18": "3g39NtMcpuxYrKdqtyUWeX693G4M68dzTHbbaFfiFqu1eK739Y4aZ1oGxhrYAJSLKmbyncw5oH9jv8NKQX4ZkdPJ",
  "key19": "LcBnaUr9gUeXDiF8AVTr2Cd3T7HaTXaPmxhcu2jNGsAZZRD27qB6STSn5xYnc4LQCR3o37sFqteoANQEV6m9GAH",
  "key20": "2r9s9gtbMu9EmesHyVpCY8dEpf3i5Zbo5twwfqt5V5ng2S7pZ7dJLUYZv3mmipvNaN3tz59tJ4WuP2oD7nJGjyq1",
  "key21": "4phgfPJa6xTe7dmSRjZyfNC9zK8bzQBoGKJEFRFRA6LWo9M5dTgbJJeoMU8jvxNSMqRK8tqZo79Z7o2j6LSn7HkQ",
  "key22": "2WUwAHtXPuqyaYjTdCHVh7P9CuqDZDZ8dZUh8WBDFP6ieCu9gFyLuWP7tfGv6n8RFnKQjAMCVKpes9DAo6jPTGJG",
  "key23": "5o2GrUEnpiuybTPxKy9Jpk9i64bT8SZx8GMa6phfbM74GhNYBy6DVm4qXcBqAq48Z56fhpGxpnwh8A1m3d7GDsra",
  "key24": "62AysTq7qQLUF7AgY7EkFnCmfd3mkKCWnjWPtyghiwuZPQ4dhfjSAxxDFsHVaL5GVJVgWv73opkd4JNSBXJPvYPy",
  "key25": "2rzRf6GXEFxaYrDa3S8vAP6NaKchHh3vE5GLNpVTF16Ds1qmL9TFiqCb5AJRFC66p3nQHkiTpYnvPkQfA846Jz8J",
  "key26": "4LXySAmCkm53KvEJZkdgFcpmmn7UhrgdMddr6FCJqwugZ5pckQXrq9tzLrmDy2M2jW1FVTEzxqPuL5ohGVV4Q2KU",
  "key27": "4E7eHYRL877yva3Z63KA2xxJLaReVgLSitV4nP3z9uvgKN1MG9QGyLyFCaw6q2cs8Q2nJj9ni2y29zb35yfwwZa6",
  "key28": "mK2Vmt1BS7A1VKGg5o3gzQniC3XeTWMRPGASPAkmZbPrAVzReV2yBkuHsFbzco977rzyWmmxb1n3fxBLvij2rqr",
  "key29": "2LyjBGQHVAv9u6VWEuj6vYDSoWd25Rgsb4CTFzQoFhimAdBi3SMCCHFMdxr3FDJhot3xuKC6Gr4EbWLbWCVcRvDL",
  "key30": "3Atypik2W9S27K5NSg8QA76xBvJNwyMPf9V7WTTZJKyxbkfRJP1SbLVAU8vyfxPJ2xGfEzybhtjgmPLpAr4p4uHV",
  "key31": "2tkhoxkGjEKh3hhwmUe3WqK7xYGCtDCumXv9THzv2kwv8yUcBoSKY4i3Br3C6j9miLPKF7f6Ne3WJPvKiNsD3Fzi",
  "key32": "34J9twXX32i8M63XsBqTkuc5qBMTFztxUSUZWFNv74DnteqymRLeKGbveGd1ucBp2QVooxsj4MdBmgADJaRmStqC",
  "key33": "5pSm2new5VtvhQ8YaQo9rYjV8UgxHBxRtvhsHqXzHdzqubD7Pr1otezdFBWecN5Xywb44Nxtj64FjQGc3UeCu66o",
  "key34": "5dhdA3gbzrvYy46Fnen1rVFdziPe678V95rmHHHgXfFTuHxy643noMk6LCA6xHnHE7BQp9w9NVAeAg1E5tD5VnNn",
  "key35": "3huPK5hwc1z6KTRWbGiAwGFZaMhHKTmcchLi6qVEJXwr4WwP4Vy51HGiHrya6Vw61FPfKPyRWtfD4X6LAADFLJ5B",
  "key36": "564dm45VNP4PCBh7LKBEFP8ybFRVsTXZc1zyynCNKbnwH4gQzbwnbQC3ECKewCqNFsoaGQmVfJ4M3nv6AZzRXBF7",
  "key37": "57aczPfeanxQX5paKRmureZnyux2A5FeHCUvkrQPP2DFycFhgS31kinQ2brnM16XS6PRtTiJmmPQ3CsU2Au6gcLw",
  "key38": "5dkYS3QNWV5KTvNxRPJf57XnuXfYYePeuUYsxErVBp5PrKRQotdewtYG2YRhv99RUHpCJXJkhichmWqaaxrKYk3J"
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
