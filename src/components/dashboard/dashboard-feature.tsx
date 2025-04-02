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
    "35C8v7bsLH71YG7iWFs1wPA2L3rHfMgdGWk5P19qiPnfAAnCpqqCg4QqpjtrZehsmkkTycXyLwLeUCdABc5P9yzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FrK4wa2QCBPmvbuetAmAX55KJMZxkrtCDZniUL3WY96APsHSERxyK9XHeaZdPX33w538yXgwjpTrt3CvyfD5uHA",
  "key1": "2H2B87SGACVLYpwgmxvxgVL32qBoowrHW37kmdsuJrPiXci1kTSvXUYRkimq1deDTNLuH1qjSURdgsneqjj3DU2C",
  "key2": "2gR86EtvU8jspQKa8Ky56kibFnvx2Yh9DPVeAfvEFx1nG9ugCVrshS4R3krHbPK1mRzoJxqRA5HSMUZgZM55Ry2z",
  "key3": "2oAVqQvou2wRKjnGEPqrWZU4upHgsWhv2NwXZnt198wqq1j5iBXENSyU9Pa6XBwxMkugFJ6MqpPVpKf2UHxKVRSp",
  "key4": "QhNA57rkE4Skb3PNGTbfjHp84Uvy8FMyTxuDoajKqj93t3QijHz9Nz4bNjZ7r4ysmKFQvJqBn7DbdfwTskBexyw",
  "key5": "2JzcgE6XXGLkijSbRSDWKgstKkEgmQBJuRXDAJYx8jdo94HBGX5RSsaYUGGPAEW5dE9MAtWfpZV2HMthQnysA9jt",
  "key6": "4w3T2SfbxRq7AS5p5BsMRuuGzRGZAV3sSHVT5BdHvxpBXttGnyitEFiK4x718F2QKNR7qsbAhgWk3kzWYbCfxxwr",
  "key7": "4854qDA82FaQgqbW9o6Vw2DsEWAk5D2yCU8xeiYE9UHnBbuUqjw63vQvtAjkkxsvkU7dvu44R84LvsN3L7kJXqRw",
  "key8": "4xTf2yWQZEtPrrLnj3mVDss32xrss2KCsPR6TKNrvHHgzJV4NRcXNWKxwipGwdPu3KrftPNovU5L7zz24dkwDgM4",
  "key9": "3yh84S4oNwhTvPwYyWkEo6qLiRytuuegFEHcvkp12tHSY6XxPGP5QSjkzhFJcGmngbRNWebwz8MMZRBG14uMHGbc",
  "key10": "42MeeahabxTSMaYCoZxErhPAhhPTPCS94JE7Ed7cu8BNfjNFoS5w27RgseYb6Gw8HuFexf41Syvfvk56kzEv22zx",
  "key11": "2uNqKJXrzq8KXkVqLEu1YajFHBHWrs3d4vts3ACscpb9ZwfcC4SUovrGsckz3kRMyBn2zQx9TRqpZ8RSNESQXCwM",
  "key12": "4u5Hkd1siKJXfcrxHLaB1Kifme916NsDdaWwobVfELmmJ25SpJuWfg8MWVVKSMzjuaAVA9Wygc5rYAEjtVgmWJzR",
  "key13": "5bZuVFooZoNf16GZWTkKHhu8HMYdMLXJRmA182BjaRda9E678J7JNEyZ5H3VFV4xvGRUP68obgNZs2K4dJToUSg",
  "key14": "4RHyqUxnueTwYQRTYTqT2aDZQJi6GMpknqCjERUGku261EEiUHnkBr8WfA5oCS7boHGSVnPtgDTk3u6bKhNPRHBC",
  "key15": "2FMcRdht7apYHYLeJCe3CAZUHAWpy3dusGv2jYPaLcGKmrzWJXxqbEJWdPdDjhoSgc1i3fs3XZ8oUbBu5a3mrfWU",
  "key16": "5heREoT9yTG53fYi1ATshbbtD7t73akgtYoUHYLNdYGv4R2X9aNwVN3t1TxmgqncN69TF1rsuUws66qHpXDJgLEh",
  "key17": "4393y7wsgGphvv2WpxTnHny8X8GFdMUdntx7Bx1pop8ogpZVN8B1LooJ8nb9arcUxWriLsTR9wRumCxmvEFavvDD",
  "key18": "UVT7RucJ4wXC14VwLrSubC4HGK7zYKmUrFJdaBQrQPWabfThEkFQVtsxMQALB5tbYr5q5xKB9uwxbHFLnkiz3JZ",
  "key19": "3CQTz8tNeNscozCdpYJePofNCtaT8bRsZf8yeEL1o3HzCDpoDhzqEEhLuutjskXaMbgMdzXeqnQxB6hjptofE5JB",
  "key20": "61aqjuQw6cT2SiRuuL9Jfdxs2tHDLEJGxpav8v2uoaqYmrvwAGNUZqxuERk1Gh2HgTdgromkh8foFFikYonqepdD",
  "key21": "4TLVPg8LLnK32nkKgc4eQHS4U8b1tFhwFBwwNUmGYBNEGyqGuoRUSsTb13hvTxzqsCshAXATAcH1MPkTKx7FjF4h",
  "key22": "EZCsdUE92nnP13pQ1gnNvHw3KMVFszZw7p4dAdXPuPQDJiwhdf8wJnBsFf5EDmZt7dpHToF2JwZBM35SJLD6GJj",
  "key23": "4fw9wN8BcGs8U9omxoGURhUYmbSWEBNCjxNK2QVATQPrSvHBafuhbGn9nddPJdS7TdbQ8CuALhtsYvxCB2zJ87fa",
  "key24": "4nd6xcLyyXwPEv21KdVqDDPH8a5iRHMo69trEcADwxoPmN58eCkQnvE51vFDdpaAG7VatrKEjqHFddtDK3yaKd1h",
  "key25": "HTQtidxPBi8WP2hqvAaqeeFxeUnsHkkXgVCpG378W2mVFaoydUHWg4nwocsZ7Bqo81GnYkU4dQzNbkZYaKcTy8S",
  "key26": "2miHhCTowikWxBSXYt3bEp5uNNNzXudZ5Ga6jQvTEbjW74UHSvtDQE2GmPaME8rcUX3TEmnrmmXjsQf6ZBexDoYB"
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
