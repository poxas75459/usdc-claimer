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
    "41QUHSJ554xLRXgj8wWu7ijTT198GaZuau9pX3w5yCssGnThRdCrydx93qYuvMV94oFJYD3UyQgDxyJXmBvL1ASF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "664y5aAwTB2QRntdVqLXEc9jZJ97jqtHAQTHHgeKQTSWp47vXq2jg2TKRo3uL4co7xJm4cZVr9PpUGaYvgF1ye2Z",
  "key1": "3uqcjiBfPggAJkaxvLqs31VtXU22nSy681DfscU7AjGCX9M2vdG3zC5xjan8TEBKBMocaVoeuef2s13Mkveyvgbn",
  "key2": "4k3rcTPX58F9Ku7AVxshPXEFBfDKicRAzVCGku87mebuP81swKkJ39PpvW55r6hF58J2KpQkyfEqnzMrNKhzpA6b",
  "key3": "1dB9t4zAkMUELjbHBb9ywyVoWxNFBuv8DDvcNHyC5AwV2qqqaMVEJ2U3epdbuZkoujYzRDTEquRM9T7UjdgWcRN",
  "key4": "5kvyxW2k6jX6RL6Rb2jzauqvpFjwWpsAGxmPxLdiNxBCADZBTaxRrB83aZQNsxXNHxCK9a3RkbbLcu1XsjzNgapa",
  "key5": "3Qut4V14eMfQRdj9LvqnVLbA4EZvanJhWrmQ25mg7C2ssGUzG4R5niLXGuUGAZvDTsdHLBT1Zv6hC6Y2CLMPkaxR",
  "key6": "2REuHnrrQENmBdYkL4EwGhMpDUD3HZfuRoLqr3AXauKMgmPBo65Zb1ze7jk61aCdhu7WASQwgXHSth9wiLJbUAqE",
  "key7": "5PSQFvdk5fFKy2qrVaw3y6RWkZFtPj8JrsWfWdknSuwJ9T1ygK97StBUirgQuW4cAXHMvEsWNrKe6oLmj3ZmhuHv",
  "key8": "2v6iMLMz8PANAzL5neSNqnPK6MWvoG2MZkdTQwhHpE1TuUVFLneemS5JHP6huntt97G8XG61M8GUCGevoNSTLPFi",
  "key9": "hhxUU1XH7wypUxL6sSE8wRP29ihJXryfNX44xd9owvcZsmQQLbQ747D6iyy3N1gj332H8C31rcvDKx4FhmcP8MQ",
  "key10": "2HPfJeprJsGq97SXX8wa4ryy8MSaBP6eF6ifLvShojVHfR3uxwCUUzZXSjKcaALYvTHfyzJQCfDqLktgwrRG7ZV2",
  "key11": "481YijqTmfnmrdyxLGvGJdkXyyu2CcsYNQhCprErk1FgZnAcygduCyxzBdeTPz2LBmGThPwMk6474q9i33JHoaST",
  "key12": "2Nq9phQnu1JsQhtkTHUxupW336ZR6ruJ6knGi1QyzsvnDT8eo8GB7yAV65pVJYHgoigAPr6HAPv1ZzCfznGicG35",
  "key13": "5tACUTvbd143GzvAWBFY1EXzjZPqVwEtpiF97VX5NHEY1wUVnR968aVohBD48EgAoNV4GUqyouZcuP1b2Q7JmYEV",
  "key14": "Yzg2sGn9gyeK7Jbnq9XUsu8zQzqkrcxzQvzgNoFYvejYQbtdXqbNHcJaBhNNVFWMc8djyjFid7GKaFYLwWEB4xk",
  "key15": "4MvGaNDvS3a9n545Dvo4Zp7czEr8GgGp9BwiiZQTv9yoEb2CsUL6dnrDdBfxkyJDLZB71CtSasDwWAsrLSqn6Cvu",
  "key16": "2rX8W1SDtvcpPAwxYecVxcoRA8CFm6zML9BoMvMCWzHgGfQMhqE5D6vtiHkThFYU8iHpRM3CanQes89C9GYWohhY",
  "key17": "3WKtTyac29CvqrEj1eLWpdfPZTcqMHsEpguKVUq3KyaJd2b4rn8tdoR7JETxtk7MVgWwHGJ4C1Ge3z74m8aHA4yS",
  "key18": "44Pc4oLRednaSuSax52BFJHpsaGzajVeeAMdWyqoc4sTHPdLBkiiMLmwZWjD2Fz7hr7nWMU9in9NJrZchRkYxxWF",
  "key19": "4kziiMjkhYURtTyFuUhb1iUgCt95sRbzzmQVQU7iaEitC2978JZqYFL25PswQFgfdmiEYtwJxvWZweBMJU2K5WNu",
  "key20": "26V6dBZipfhLVCT5w9q6P7r9mhB74oFAewTjps6LzXhJTaDtQptmLTX34Bq22TJxb8Z17vV2PUipt31iwsFou1Mg",
  "key21": "3xgAs1ZaKv35xD8SBpSWdVJGPhBZ5VbkDLg2FU2inmFSphhbRQ1Xh1ifJmNud4NbjbuRBpGFiDAY4DnRbUifKHa3",
  "key22": "5MyS7Z9f6UNXmEbdPXXFtHqedEtcK51VWUZh75D8Sh4w9uQPBbSVvue9bpxdLRtuuk9vcBfxXVU5SgeeHZwbJCRi",
  "key23": "4Hu9yxWzjvKGfdF4wUGJDfzb44qWCFswv7Gy6DaCPgwQx15cbT8ADpW9tH7pox79vMY7davWGZUWGERgyPCH1RmQ",
  "key24": "2XCSAYtSrCLXXnGer9XTHCYBahYrYTbqTE2EFoRCzpN2xFYjmpmi6CHRd23QUnfJsrgdC6hF7Zy9MZnbydCs55sN",
  "key25": "2hwfwomxRBUTRqYYi5R2SS1rvQkSxHUmbN7RFnRTxS6xc9U8ZMwZ8eFoSje7ULU8oDfafpLApeMo4y13p9B8Xw5D",
  "key26": "4jnuRRoFTS3Bd7UUkkr8XoBMKuvGuAUNpzbDdHQ8YmXywzt2B5tb6tina6r2n7DN7czgEFP1Lo9sbtw2n41JMHaF",
  "key27": "5GXctVreQZV2PWmkfiP1d6FVCZpVgWghX7VqNfdEYSdCaFhd3677V5BaksuviEfQ5wNaJfNz7X4K716jc19Ez7s8",
  "key28": "2s23wGRS6aDQQszRsz93ReULd6kLQ9hQiyESbtGv3avjfYVN9oe7U9hoNnbSjCpzKu8zrCxJdPxruYRkGzWGuJN7",
  "key29": "3qhEzug4PuMxpMdpBo2pubD1KUuwEnGMrNdpPkCUV4wb8gMcnAWmghkbm6R88DTaJaSja9RajiwGAkEbwTReHevv",
  "key30": "3jvBvxggcS4QTSUr8fyTtR2J3iH7vd9d6Nz5jpLACwt2uBSKjFUrCMXgLB3v2yfa85oALH7ANAfUmormmgH1tbvb",
  "key31": "4jNJZ6Lj5xhnMz2Bigum352dgp9wgCdgMoW8kw3paoUyRJUdHFPsSK8R35uA1khwBnESKozZVLqTUAU7sjxPMCVo",
  "key32": "21TAudToKhruTdHstnJ69tiVkx4DsJHHqCwysNt8tKf2q7jyCboGJz4MBBqJkhZuHy8vPBWs4LFNe6MxhJEB2AKC",
  "key33": "2ZYBSgerGafqdcaFNAURJUvsihZUmY6mC3agY1rqZ4x8ypaor5PDUqqDoMVCafL3ap6qzJkvzZwFnJPvPTaBLJz6",
  "key34": "2ejpGXYaw2rduy2ek3rKMzoRmAs6Wd5UwvKonp6Qd6m1c81MqRUTQ6ceaShFt3QG12kGodkPff9tgQUh5ieKmgKC",
  "key35": "52vvFnaZ9VB9c8FujWYjVfVstvWTZeoTCMkqEZmEohFURkGz5nFVVBr728jTTqkrnbo9EtS9c2rHVmyWQz2y7XZ2",
  "key36": "iRDVebdUtiLkYZThAUB5evt2rLiqkufBqGXRWc6531uAqshGXKRo4JmDW4otd9M5X2MbaXTTSc7C6tVEeBdNx6T",
  "key37": "2tXrDVYVyS3SzCiAWfsbc4WEWb4Jki1nS4PaNuaNxe9X3qpSUHWErVNLaaRDMXb3AM5HZGAe3ocyMGYHw7M2KQfE",
  "key38": "36joA215QBkNQkbb19pnwp5GkVf5bMgbW716GxyTx2DxMH8rn5NHfDQZW3bEPCMssMwD918C1jY8FAHjtwRUvo2w",
  "key39": "tusWvwE7s7b6uhqjzWLqVbY2r7hEVjbzYd3YdHdfAXwWEgVA9KoL2K1662maFR8Xyd7cSazq8ANVn5hZ9mpLusC",
  "key40": "HStJretz4zS5ciSPBQPrtHttVhkUtGC2ofzsqaak7nkvn8AVhtgkqskmCQ1yaEykNmprVEEf4iPcTJd8YcHuo4P",
  "key41": "52kXF2cvxs6cSC9uQ8rZaB5krWNLBLDu4jdFxYuirmQ7r5YymDCnrun74i2n1UYngc6iPgbRY1F2SLdG871Qmi9H",
  "key42": "2qUW7bJxNu7TCSwpbMM4jQbNg9P4Z3eTFGmtDdmMM39sWK2HwwKrZkfcHfEuMPCYYEAU9AHadmnANmnQaNdbkDu5",
  "key43": "5NsVi2hBWZsMHWMkd1m1Cwk9TYE5DajM3ojfRCEZgksn7PAdwCnXQuhE5qnpDHsaiE9MhoFAe3gvuNMmxk8Z8wBH",
  "key44": "2RBz7SoZUWYEL4pcSeAqJqUsDuN3LhoCvvi8jRGZdHwxteEBjmDXdeNMFTxLzP6itpcSiQREbGtj3ozhaBToQkra",
  "key45": "77iH3YYwFU1v4rY9eDMFDWndLbwSS563danWRB9aciVdcRhugfMciyz3QtbN1DP3YGVehemt9N1xUcjPGsJWvYK",
  "key46": "5yPL8FE8HNkCK2CBisnUev4vGz2A78dtpfqxRd4DJkbWcobWxGPrEAB9R3qCENLcRVE5oPM4DhrVdLoyA2tFJCii",
  "key47": "4op8PTH9zjYncKpQeJfgfsVEd31bdp1L5wKPoZRGa9p76kQArvZwpNmxyGDyqh4Z9VsQqviz4qtpgDDbQtfdSLtA",
  "key48": "3KhZkeH41hzWWSyAF7GzSjATxBhZsQhp2WLArBom5X8f2pXGUReDrw2ZnHpJnX91mkpmsqLEfiLNN3pY9dE8Fouf",
  "key49": "45iKpAQ3xKFdmam9WG79xAb7xFGfDntqY2FMdLuHZPobVz95FhvGMiggyJoPgrHxycq9hic4dmhKCqJRAUX62o88"
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
