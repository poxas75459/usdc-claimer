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
    "5KhfYfsaTADTYPPgZS9nEZCoVuZX2nGSzQ5wxzeXJ1R9mxFL6a24M6PzYmUZBdMScEvwciPreSKpfH8MMP2UXJBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dG7kPdbUekq7r1QsqfWEZwZiMkq7XkU5pB831NQYVN28SRqqxDDPKSiN6YmzhY6FbTDPhXDj8d5JiHz6nwwPYp1",
  "key1": "3i26xXyLSSSKVUixkdQTf9HamUPBYWUtp5rfVGRWvv8mSxMrQUdurH1W2pEqDHB2Ny67yTV3fUZYRy7p8fypquUr",
  "key2": "5YsX6C1FdYKyKZpv3TCWdot1yEQqDQ6vpNaKvZgYMgRpjkDHEzRqPhMQw4FR6Y3n4dYBQFHsAkp2MyDs3dcMrgNU",
  "key3": "22i7SBARvQSmyF7xXVPWnBxPgKRA9pZtxsY7Hstuj3yyohLDC22NPfPva7TQYrAow62uKbSugePCjSwf1qAAyxqZ",
  "key4": "2dfvhLgESNz2zQKXdQ6XgyEn96e5bs3DJtYy3BErJc2ssLa9qpbKVMCEBuq9emt7zx2HovjHQqst866gzFGQxTuH",
  "key5": "5axPZTTQdFLtt9z9yo5ezwQrfsbzxity5g8cfD3P7M4hySCCXkeAQZurARvSiyx4chqWfK5P1SpjT1xfZ4Z55w53",
  "key6": "5czbmk8ZqgQqzaDin7JZDxPxSRehEVMUSKK69TCT1XKPGAq1dkptqgod7q9CDjF7hULJxtfi8ZSYfvargfmj5Xi1",
  "key7": "VNQyySaRc6hW7HyU2jDx1H9eT96BPwwewo9ZAFGmEidehz9AzLb5NuCWB6r4ccDU6UVQmHKr6CULnyenrJja92x",
  "key8": "3TUKovLAU74n1UjTwx6SCY7p7CXvocvNNBPgDvEsm9LnM6cLCDsvUcTGEFQgQwGryJkMBctUtewTGE2TGVDzXWMs",
  "key9": "3yZu9CBTiH25X3sdRRcct5tWUZDwdy4XPvYVz5imoovirg4iyyHzfwYopKUZxPrnhc8x7ToFrB3q4pC8nrkAKY6u",
  "key10": "21xKKBGQ4wosZjBV2WHCzvKh7Y15nkYFpY2HJFvFaWxHe4X2g5ZBJS2SQ5xhre5j7aoBMTs6xAg7coHg8Tphf6Ne",
  "key11": "3ELnoKHrXx6gc2BPCeML5qSDBiBsk57dNhPu1Cjw1RmDzEBnBW68iUPxPPhooFMi6JYknP5VZXhkL9hGJ4ooS9Bi",
  "key12": "4nzMN3VvxPcFjuLsxwW8c1QFXpph1NLaAEBWPaiLs2zUFV3u7JRthztSBsfCxcaPT8u4Mmhj8ePVaDb8NNKoKwb6",
  "key13": "2rHL5bwT4MDguHxoarn4H1KmakRwRbkSkFW2pw9jAe41FepEfBLVekaVXuN33HXsRwh79aXvjErntWDCKKPf3DJD",
  "key14": "5c1ZeSVfQx16JeyEv6BHYXnEtVyvAkaocbCBZKwyvEVSPFwKwPGMK8LktY5xVA4aAtaHzZ2hDifRM4uh5o1fQKVg",
  "key15": "sKSo2ntX4ZqrpAnb9asDxXHzykA1T99irGK7Cs88aumNcpcGoMzbb8zvYkcdwC1wgxGtWCNnnNRDpTxe8yvaLk3",
  "key16": "87AAL55dpgt6Aq6KaZ5ZqEj4LxYeSduUVgArSjwn3zQuKSpMGaNMfuG4vMqK3UcqqS24AQNiYDsVvWRYN81C44W",
  "key17": "5DatGvniwsdoZhoB9eqZF5F4ov7ry1kP1gpWkM4ooKW2tt9mwEEHyepJa9iH1Rzws1VL72q7SEYvKB82SetXM37W",
  "key18": "ESRkWSuj8EMaE5Q1sSF8Jr92J8NfL3Euauyu2aM4Ky5LZj74Vh4Lwv7dUJH2nTxJSHBTt9SEeupXxCQKKeqPmyR",
  "key19": "51s3LJF8ZwpkTbMiEscKykz3Czj3PiUhXtz9HRRVQABYkNZmzwquFKkBmrbDmNSx99rqhMFZkmErdFyYh1kpcz6o",
  "key20": "faCJXWFybdzRde1YC7rmATthvai8YCzdutRdSvCYhTtt29UCA7GZcDVixW6NcRp4QWk6JssrjcFknGyTjqWwB7y",
  "key21": "5grY1UTKyygPYbCUdXuvs9R1AQfeZdj6waBGrQSGY4WGrvBdNojVt6ecQ9jSPZcbfjksCwiYGzy73XU249cN7F72",
  "key22": "3FzndgEEga1FTrPY2opdp2LhD3fkGk12UYMzSqk3jNT8RcP9qwwQ44GSDsLskU3SMjf5M1nKMPWdr5rTu7X8KgUW",
  "key23": "21CbRPq5YXzeTj6f8Zpc8dE7iVXVGtjQScKtcyJScAucpStrwN3UpVFSYUXdAcWPBVRvouxTXfcpnFcSbomDJrBW",
  "key24": "52ANUj6C5sqNA2dCfkjcEFSWrha5VJNeoWtGdX69Pj9n5TJ2xpQq3X64t2uhAwcX9SD87rb1XTbMavSuTetxpbMd",
  "key25": "3ESdpvNKzHmHEur8P8UatygSTqEDdraiHpRDrMHuG7CLVFVyjFhd17KbbLnfMmVBD39B7JBS6JqCX5LFo1MAR1yq",
  "key26": "Lj8tGBgf9gf1f8xTGGsq5LjywQopPcXJdSk9FaaeZGNg1o246AzBT6FJmTK9ntuy4mPWZPk8fYvRNFEWo2WG9bu",
  "key27": "2owKXNWutQq9b5yJhSCjMmY8i3EYFR57ZPX2NTKcohPy9tKqpVzbzozBEcTdq7Ah3Da5CgKPMp6kiRMxwBbUPTcM",
  "key28": "TfH3sirxi2BCLBUpoo1T5srr8xtoSmzLSGXKUNdJzGsqqLvpAspnsgGqC3Kmea33Uoa2n2c1HAguCtugXXCF9T1",
  "key29": "3PcX2Db98gYniKfRxoNhHAAqRko5Rk49tJoRrGzxoc5opas8CQG6rJ5Hx4FnRfq9EspEyNVBpbcmWU77F6FG3fHq",
  "key30": "3UQ1ja1RB1cWWoFwNdBT5aTrMxhSXxeqD2ZZ3DwaM6hg2xovszrX45f6RR6SRUwozzpM3x79ho4nrPnEtdvueYrL",
  "key31": "4TwZ254EUTnmMZy4V5kB3WoREiKAob7vcCTfHnGVEdvGah7k829GgMCWGWPiGY36G5HmDU6mVMcGzgLoVjUJ5wsu",
  "key32": "42DYtWreavNjzgjAr4cL8nk3V6SPbkuoi7cgxmopV3xoFSvEvv1soNNfq4xQSV6QpCjXpaoyLZtRyoD4YA6RuP3H",
  "key33": "4JPYPaSyX3U83mLAFYwSyTUkSzsVbHUZ68fJGeSkgTQRj4W1XQjV6o6hFPyDxUKxCUXAJB6CsXLURvZbwFdxaeLT",
  "key34": "2RP4Zs6sbRRtqDB17wQrJDD9stzVbcwuyQLnif23uUwQiN7TiaxrnCoD6vxeHjfmcSGT6pcs2fSUYWsUZLVSwkXv",
  "key35": "5oB9Bk3HZfbtTHQihPDcZy75ovrnBeZdmSatjMahrdmDfCFsUfmR77LD1fPLTdEcyqrfBczw8dJ42vFp9ypcMx4Y",
  "key36": "5JwwxgT3KiWbLwSdcwhhAwV6YNBgiNbhwH8LA7yLwG4VpNu6vQrXcu6EpmGd71YW6eDcmXU1kNX7L39B9nLrBsbX",
  "key37": "SgcEt8D6QtRK2DwYfsea3YB5n6J1CPHQivXFKZFnzJzNnpV5DJv3JdZszdviRC2G5rTYD3MPbegwMf3sQ4DNX9G",
  "key38": "Hxu6vTZCWonmGJqCbB57SBCFQjtbsRP6wAhmvkz7ftZjvQnbCejNb57ksZKg9UgfgEafsgo4z3YU59dCCQHhWnA",
  "key39": "2bXuxP2jQo7qDpDDpQuikCnnB496cRNUxhyuA4XPoobNLHSTK6dymUDg5QLf4HikZuNEA4yzYP7o1ZGuXwnPriXM",
  "key40": "5zffivPzhqWMcD2pgvoi3f2kR73CAPPPN176cmsryowbASTbCg65bSsC1GQ4r3y8pLP8avC6fYLLnsTFA5WjiCqZ",
  "key41": "2xS24np8thD22geNN32M96fx5BqjFZBU5gFGAn4PH4y1PoeFdhbbogVFX81mfQzY6GQokdnMvRyXShvdo4nhQJku",
  "key42": "3RSCejcS4Kiv4THeFFxZmoLswN7HSL7qEh72KeVz3NBSV59pPXJN2qXPcLYvT2Ur6PhFDMD95g1TWdZxtnvyBiyV",
  "key43": "57wEEKaAjAa2HUDSZ54grSw3Mgp8JqkixBwHcuRmLiWPDphmkwP5Kk3n8jEbFo5LyGr6Pw6wJdQ7tbvzP7CkdQKa",
  "key44": "2noWQL5SK2ihH7LwfepEcdgBNbvmP8gMsqQswNXMjEPzxgSJWkquGs4tMHhQYUebQUrQXx1zQ5JHHsQo5QsdXMYE",
  "key45": "4oTZ6obEjp38o192H2x6FtcFQm4eJ2szvApt18dMQFmcRihHodAYLgvbb3MJz51D7xCsRSjkVajgaUEve1E2J2AD",
  "key46": "4bn8sPVBeAZRi9Nse5M6aZq18UnSKaJcUg4YFsMhqLwZQDiBTzRoCi8CiEvi4WNidMVN5HZFkgQHe6HRhwLvEU59",
  "key47": "2qPnPGnd4AeCmfnaFjsQSQcgfXFGLTmsGeN3m9nr4a4s3hXGP83FHJqbxh2qaUctRVPGXAqcEwmNKQLxnqAyBuoy"
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
