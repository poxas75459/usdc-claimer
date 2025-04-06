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
    "4MwKQCYZRJuD7DkeNTQEXfkByKr4ZLsS1XNs2hpxtWrS2KaRo3ySP5myKvgW9kCTYyeQpXfFyTzU7G4rnEahYs7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QaG8exrw8pJJWHKKynqzcVbpxLon2uoX3th4DtpCeuXH1Sa2jS1fqNzvvRxqPdpe2UPUG19VgEaqZ4iSdAk56Ks",
  "key1": "232TnfSwqX4acBzAqcXK7cxveMVgQ81ebBPcRaCdMrxX9SbJ7uUbhomkgVJyNomjywBTEa4nZLG4XiQJBnjaaN6E",
  "key2": "5tAfALgD8w2yKaxaZMXRwffTvaccUbHg76ESkTeB2j2SiTp21J49iqQAcwthqVkpgQhBGtNCABUpMtKbpnwGr79p",
  "key3": "48A23zdj9ykY1KqA3kLaKnhTx5ppYyekq7cETZUC1prM7wy76jq5quJiLc3jS7vYhkUoX5fJvJ9aXVHE6YZzD7Uw",
  "key4": "3YWHqp6GobWPDpbPymQRRnjSFwiVQ79KmURFx911A8D9kNtu3b2FZ2staiCGfibnNV3G9dvpLRrRRgVLXG8cJEfn",
  "key5": "3PuGw1RRPrjQ8b6fAAEzbXgfRbxcgURY4vqjGzU5VGwRxj6rAd4swLfYZuw9LW4YtmgAFqQg8RBRJ2k3XobLKMso",
  "key6": "263rrr4wYHgcsGbqngDazPXV8oMpjQ64gEuKBXLGPBUFcYKgJtGJzX9M7Fy9pj1jeJzg8uiBnkCrN67s8BnHxwgQ",
  "key7": "5F2rTB5eySAZsYGtFX7Ue46kjRjesBcDqcXPABTGLKi2ZjHZmSvsF1Fdxw6tHhQhVh7Bpu5caQvBQmQgY8xk6Ww9",
  "key8": "5wB5yf1XYktbKChPkkYKMfNaoQLKuCYE47sUnA1PkyzZKHjQKC4utrfpu9zse86GXz6XqPwPxh9WFG6miQr53kcn",
  "key9": "26HWT4dvtaj6dGFiiAzHNpbkPuC3m74J2KyqNsuWm7k55A5fjVHvMboBpi33TMgMx4rFkFEDQVTBmH44aH7V3Gv8",
  "key10": "h64xoHtQ9F9mREXJPCtcdca4a4dYMgoQGuq9wkoJud7LtUUkpiK4PT4CVYvG4k7qzh63TvWLuLAirZCTnVLvpoD",
  "key11": "56P4M2jsuFfjskjWufPd7dKR3aKNpqkDgG2gXLvdRuQQdzf3gnZEQvUZy8oiaA9dAAPaxBeFRrv7bVxuoU4wrF3w",
  "key12": "3M144TrMsLSTFbMpWA31kj5owpmwKvgc7KXdeVJMNwxHs5bQM4QikjhZU4VX5jYN8KnTBKsXHsdM9S4YpnwhBTnB",
  "key13": "5FrpQWb3apw3emBtP3eFuHrtvc7A4eaYizaVe1YAJ7hqpc6QmP7PX167eG31vXMAduMM2cLp36GBRvJGyK4tNNqD",
  "key14": "5kWSK24LJkYgpWQqvGiPFWCVwFTJw1uCrCNhHcAMTNVeSRfUwVo6GuZG3GyXfEeZT4xEFJi9bnWA8h7mdMN2qaXo",
  "key15": "5rfFgJXHweKwbikZ12HtmsR8qXTQGNFQHGDmJyCdf5uS2AZvMgXmjXGBMwRr3nznaj7xchSYxNnpCiihdbvFgjCB",
  "key16": "3w4MXzUmQe8gKEkasH4MLmWJAmfWoxD2ab1y8DjyPBi61oVGcF5ejt4xwyZarnXtkG798RKqgo6E4F77GHLRkBPN",
  "key17": "4BVQ22CVtGrm2NgqUKEJWdTW16G9oSRYbWekkaxt6DyhQPdyXgsZbBEahB8GsCxhUAru1qndgQV7faK8B5cg4ja8",
  "key18": "3nJVDmBYQ8zXNCnd8uptWnxs6K4eh4ZXcvDhD2fUCCcQz1gNvq2N6vnP6tMGZeocnZ2h81adtPJA181AL5FKyU9F",
  "key19": "3kPa25xPBrUc1EbD2ss9vAi4E5TYyAMdLVLguMXWpNYpKXyfLFQDYfyD9U2SDDHkWEgFTURk2HfRtT1M1StCSPJS",
  "key20": "37D6dc96BmWNSJbHMqjgxaCWr9PQ1EzFvFmuv79kmA23WdsHQbSuw6sEbnAZaUEAmSr4gN7K5Zu7L8H3sVCXyaDW",
  "key21": "5vQ5SRNgmQRfcUhwBz3jp71VdeBeV4Gj3sWzBs4gUBdASJdy3yZBGPk7N5PEzbnCPFAC5CLBKthqpGzMcLFibRv5",
  "key22": "4PnjqoJHKtsRiMnyPNpJTzbY3oo8MaocnA4uz3W899fWuxdL3WzNtsVfcnk8p7pLVFtQFZiox3MbqtHehuvU1SJR",
  "key23": "3BeQ9Sc3aXKTTM8u1QsFoyC77FUwvuVFTHSDJJh1TcW9cAp8SrWF2t8mNeq618Qr5DVAaEM3266jv2B1Yt44hDQR",
  "key24": "5poJEcrCEPAi5HP7ko78mQjrVNCSZHcdP9nMvAbZA8192RwRe3S44LWPcmrEwCc5u3iKTuhMHgnYd2K9ayiKPAAm",
  "key25": "3qrzviR6LgEtbRdx6kgVgGkRGkp3UtCE1QR95kgG3qmvxR6SutafGuZgt2kHZmRoxEzMmUUkcs7LZz1PK924xiJ9",
  "key26": "UZofQSxFXSLQg9qKPYUnt2yWsXGZJzzHZfJYwVV7s96b2vPz2GsJCAX6vq4WUR4URwEHguUqcTzE5cHHvZnfdjJ",
  "key27": "4urhWqBaUMXrchsqrsN9gCdmQiMjeQV6oXxdPodMV5AqA3dXq71Jyc4CrB9uXYmoR7Lj4RcrsZHKPePEQwp5Ab9r"
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
