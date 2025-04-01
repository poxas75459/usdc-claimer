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
    "QZszYrK7cXbP9Dee8ZARw7owsjMVE8ox4Qbs5eiLJPDSnFZcSQTHmWdZfDoVJxm8m5Ywjc13fngjG3FxK3wVanx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qhZtrNoTp7nToFZ39tRsYbCTtu9eP3tjbdGhGT39daozYBmnP2DtGwZDsHmnYXHgChb7uE3FnWC9Z8f8RuMJeYy",
  "key1": "3XKRfJdGJxAFt68isTYM3UXHRM5Pndb4YXv9nEUFYH7PFBiavA8FBh81HMYNJFxVDdbWSH86TcHPWFJEc7qMNivz",
  "key2": "4EYo9GFHcccmNC16hjKBEbkGWW1v78YWroHAxtPeNkS3x75FJ8fXgxtAJ184omqwgt4NM2i6AoVjMt8eYbQrCTEc",
  "key3": "5e2FRi7HLhgZ3DX1R8ycCxDNTLKt9cuZxNEFmTjHuZRz5qij8kSDy1i1tpAkDKoVfB9BrjsCFcSXT2ozVNwqeaYJ",
  "key4": "3xbunCLa6CurB11D3ucQR1PtVUuEgvSoESaidRwL7TE5jacsh7yXG1tZ2ThicNDffPsBDrW1aFvsissXLk6RhdT",
  "key5": "4BrcAwgtLz7hsUfFGaVtejgGzNte1PKLMc7RvnP5GByDht1JVNMAA4tH7svaoiUSUWfh9JQpG6fGLVoGcrGZNVBW",
  "key6": "4zYGJpZuRgb4F8LSGKjE4KnFTtFdd86PowvYqxmH4grizaFkBjs3N8jvqbrkxjamNRUy6XVdVVYMZm2WA9QZEyac",
  "key7": "44iWxyuGxRh2GNdK9qKLbCExfDVx3U7M7MTgbfWeG4i1Xkexzi1A4YDi9YpbiMrDNXQgBbsMNFWTBJ8rP7WZCdK9",
  "key8": "52WULDvGgy7i34DTYUR2PbdYF82yXqA6A57WTRJGrwQbAEmjfKH31XisHrhzXZxExBHHLNQGnQ8BsXAy2wqyTsqd",
  "key9": "4WYCnWpQdRuek6nmboWtnjqVoSsWGsgo8FPuPZsFqToYPxAbzWm5gTr6kz33ekpt5GqeLByYDSCJ2gUj3Hvbo7Kw",
  "key10": "4ChdbN5rYAfFAmBQLge7ykwhJbL2wr7nvg4B6gJ2ixpZepXGUMLRe1p2Z4a1rVWjqWFSB2sRWsoRCZJJYG62H1uJ",
  "key11": "4VVYcXBC6dLeRnpAWxBfYjoFo4wZfRAy77ZeREHA8zwXbQegm9DzExhKzZviAMfCiPNoVaigZnokiu2PgrhDatZo",
  "key12": "5LoSVpCE9gxB3e2VF2PxUiHhx4yisr85w4QnUjTfxygVc3dKXue6EMgdoLwgr7QckE2RUoiDWTnVCa25GmQcBhTN",
  "key13": "ZDwbbUmKcG3bVFmVR6nwe4Tnxy11fcvUQiAdw5M5keFKTJt4XRtMN7A6gYQCPpW1AR4G7CvTib4jzMijnk4eCxQ",
  "key14": "2Tg3UutRMivbztevYjJy7zPzTRYMvxxHsyjQ9aNgRzfXEkURJF9hJi7be4xk8KvciTwNyicHzKXuAgqhU1YWYZaE",
  "key15": "31giY1f1WEnhD1E6WTX3CBqtyGRHwBeD7uzihSxScHC8Exopb6cPaFMsBvVgMdfJj2tJYUztoVYjUEtZKbhuSmL4",
  "key16": "2MpEsJmWKChQYmoYu7S7siiV6yCQAFSJdMMDsP3pMFq5fdKspeEpRCpKu2k8p2BzE2xrdkC6QnNiV5W3ryYzbHZk",
  "key17": "3oxAHK4LfZ4aFVW5hQhLo624E8BwDBas4PcrwTEtEN4TqUMpvZNAC5G5WbPfCVTwsKoRe2sQDgtdcsBfsidg15qx",
  "key18": "4KyifGGi5u9Zdn8BhUt4kyZwzzgBCyh9njVofWLrJZ1p8yNbCMMkEhqUicKzPvivDWMFspLCVaRtGgsrpwGekPV8",
  "key19": "5fFjaTCeNarD4GKEKVfvMAtnjnwZpKURvaRJ8GCcSzpzZfr4mp9xBZNoVwLbrRKvJv74cAWnJFsHy5cKoFerknTp",
  "key20": "PYreRpfkSrL16UASmAFzny6GHyebV7BxDVfUJXoRhrRCE7hQC7PoaVie8mHPMMpwasUDiCqWE7G44dzgmhiwdgi",
  "key21": "kjLpTwphwVT68pefCPR573YA7c1ijNAkqHe5GkzZtcAmiVa1N8Pvwn57zTeoWezogbQjQ97CxReWhmAuCesm8UH",
  "key22": "2HPpJTtTF3WtxNwx6PArwekptPDXTcBsgK98MFhEqBSjCFFczA1pxYhytjvP9yF7etWCXktCUM1cJyCUVG8VLcUQ",
  "key23": "22o7bqPjy8xCb8FnLeSq5MDV34vLEY3WZEb8M1u3n6hZpf75s2MKsJhzYdFKjMrxxLy3NH2i5jF42EekaGSFRCyZ",
  "key24": "ikZ5GmXpefxF4RLwJXP9TbAcKZmgUxg9osn5UQHcTzS2jw6xycRoGnTXTFxCgWVkZLC9X7kU4Jyj5d2wJGqdM7i",
  "key25": "2s4nbbHPBx2MUvL599ThSrKkSf5DZojcEneg3zEAZHD5cp29vmhKGp8zoTSWjhjLZMVofEAEch4gSURVGKeny1TE",
  "key26": "5zX6vtjYwnqqxM7dFvewALWb16mLEcJNStrZtW2NY4YnBDtD75LP8fk9rpLJvfuHKpWtGK2bscC3xRp5YMcVA7uZ",
  "key27": "5BSkh2qRa7vmvvUrs2LsF6BMv5Gfb3BP742V1X9zPjjW5uCymawjZ4C7z6BmTWWzEHKhqRf7sAsoNz69cb2AZ2Kk"
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
