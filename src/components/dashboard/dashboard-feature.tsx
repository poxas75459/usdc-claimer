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
    "2bBaytfTmkJmFWE2QcfZogxyBpLa3BUtXe5de3HEQyAh352bLjwMJ5JZM3ibRtNXuZZHV1WQGxT3rM7TZrnbt6C5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d97hZeb6sSuhv5MpZNWzfVPygdz7dtCnWmJbRGkk5VTAvTmHFKvrgx53VirBd3Ns1A7CdnV8zbqWmLPe84u5DCb",
  "key1": "2tSKzLEPgSZm6yBCmyyEv5uqTQk5ieFXzZ5gyhNtUCmXir8fGHVwdooGGkMv9Gghgzvj5DjzjNGKJqGvakNbbfFg",
  "key2": "Y3SMKSDb42Y5KiSyTEwUVnWWkW1GzT726MuyphrcpNro89c4KWwr1CdFjkn6mq7XcPW6AcxvoQtTJrDgKeyVtno",
  "key3": "5ZC53bRWUgWpMrGBay23avhYouPrpB8R1YLZvDhtD9rY67bpEYFtpUyP1pAX6xVaLH5ihjzMbiYYJnibGMnugfNE",
  "key4": "u8uzLPmJTFJT5JjhBySvNYxk38Kh5y3UtQ2UsYZqB8Tvbo7zMpGEGpjYu26SgVPbpzUPXhmvidBPDotYDSwkjcL",
  "key5": "4GQeHHK7d5DB7QPtpftEiFowGBHUng2tByxmUiWEnHriQCguVRPvhQUGdP3kmdpcKLAjGwEA7DkJhDBQ5HMZMCCb",
  "key6": "26dKceVrWoE4azgQFJ8Vb1xto2nw3pX6omNnh6dwSdy1X2o4khxJjCa3Pz5JZp1hDqSZn2YipZzc2yPasWEyhZjF",
  "key7": "5bCTi1gJL135YU3MPXe9Nj6LDBvqYdkziL8BKdot86cWr8oNwPy28Nsr5E1UTjEvHWRcB3x19HRyuQwumsgBEtXL",
  "key8": "4cgv1EE4mxjW9Ah1G1tXo3YRDuuiXFEo426tVFde1uHahyEr5otu9PSPfBesEwHPvux1scfwFjtzaUtudGSyZ6kk",
  "key9": "5FQPXUnDtAcmLUTpALYHdrX1LKrLVmia8AH7r4tNgbtxboJBPNXbJUbosCfE9pAorXRoy2gF7sQt37eDRopBmLr7",
  "key10": "31yoiaMxntkG5WHcY6G3GwA5dC6ck9sRPaCRRZvjV5srPrBrRqXLTFkVNrUz9RuLttagWHeLR3Bcy7HV5e38N2AL",
  "key11": "5sY95jX2eyNmV3ostYag9WRHfcSntZ236iNRtjXvKWWs72oqC3fcP1gdJxjLaomzHVksyphPK8KtjXXzqg5YcVoR",
  "key12": "2BQotUiBFAZsmKb5Lm9LayFFr9Eob7gmSWqZsHDZPfDyEZFJ545pxRioJVkCfdD1bWwxBLi2boDs1CWJxEauTU1e",
  "key13": "2eTCQwLSGGUgE9FSoB8djYvTTNJj6D3wsVFbmN5NHYVg8G478txcoDNDMRDTMdLc5D3qziP8VBFx6gPNPMmrNBCQ",
  "key14": "3ixTiPZ5mEEtZiCGQK5qTC5Zd5zHSmp1twbCoDKiyijX461gong5mi3JPuQh5Vr8tBXn3iMg16rfnKBXE92Ywt9o",
  "key15": "3ZKrco5t8Y9LY6sPGiDiCafBtPf4DuoRcvFZsesskYbTBaepgdUHrh9XCrand9CQcha7Jps1DB5E7YJ8t4bwD1We",
  "key16": "34MWX1rMW5poUfi6HGE7UJegb6VPFYTxDcoThnZt4DNv6GPHnTyJCSR7S4Jz955FUzvosaA8Rxcwg7smrbVzAKZG",
  "key17": "2eSzVJ5ErEHaENKbDTXMUGVSLCXLASh3e6oU8ccyFC9QWsp4d8ELwxPtbB1FKS7S4aQDX5LmDswdbT7BfVhhCMvD",
  "key18": "2Xsw7xx1oBw6gswFDWq5aYx4ARqzbWph9LcmsPLojuSuCunQRcKkBd9Y9SxKsuPgCyQ6bqWcqg694TZD42vcP7cS",
  "key19": "4bmEGDwzpF9TYPkjoTfFvdBz1DAo4TtzzqSaznoc67CgkPh9tYLX2Becp2pAWXjx9hZuuesF4kA4ULJ24fSLFufq",
  "key20": "5exEot5UPaNaSc4SVuyTA16TUngE49Ri322vNDcdUa8NumnNgtadcifnqEK5swwafT4S8c44UMSf7k92PihV4RiX",
  "key21": "5JFRWfSjPj9ZA55ttD4ew9nuqnr3PxZSPnkYJn17GNEz8DzFx8gP4FAgfywt7NZ4ejGfncCTWJZ8SQ8eau8vh8Ki",
  "key22": "5tH5thbwnmKcPqKpUqn8Ro7NbXVdXLt1bKXVKXPcYdCxosKwFFpduASLe25naN98ydbDeFPvW4gxPGrTz8UbSM5H",
  "key23": "4Abwgq7yS7eEtQZxjGavdVY6RmK2754LBtmYESHqNEdZxKQbcUcd3ZhMo484dLAQ7Gstwzq3CXtVDurQk5PVJNtN",
  "key24": "2DSvqAu4YA3fBbMEkepqcAXcdDPs9ZWYAG7bMJsxo3TT9mYd4xXWTm3QPoM61ykszesQtLACHj3AxRn7Ryn1B79j",
  "key25": "kmP1fSDqoU5KyXp4ADruJTV693W1DLi1hj2Tzic7ukYxCKUBYjc8NVKPaXacrFdsnCKpazFdWc8yq2Qe2jARiT1",
  "key26": "2xyKAuHRv98JbJwcjDyNNYvona4KbTfxbGktAkXck3E9b8jzntThoEnTXir3bqfkpWGum7BZmKm1rK5rLkWkujRz",
  "key27": "4hai4WefMncbWY63bSinsXXHUETbQri1VQ8QUGvtTQxAb35H6HvQwhgVhS8sHT3A5paDU5QMWxJ8TFey7VdbBcwK",
  "key28": "kCGtbjGJCVTp65G2t6FLZo7PvvhGJ4RAWCuZPogWSXKRJugnmpcKHJ1CYthXe9TE8yVchDSgTEV7yzyfL7zJvY5",
  "key29": "2ktMZHkvHZosy2yyoAxKwNiKh6tb7S5jxYLza1X6CYF8pfgT4eT6y7WnRribYPt14dszS4CG15RchSGMLsBNNJXu",
  "key30": "4Ld5Z5SsJwkDYFJR3pquv3EsTecHrx5MDUxDNfNY5LawYkBGm8UEEP7rNCbwi26KocKvFYXhE2E4a82MoibJG68R",
  "key31": "2xrRdkqZCMBeZL98jUzQeqbLGZrxYDki3ZPiSiwFjGf13UNbnofykr84Nj9EPRipxLQ1n91iBLLEsC79WhS74YU8"
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
