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
    "XfTx8v5AFK3QJkwsCck7niJEn8RiVMQ6jrro6H8br7hrFNGQj7LTVo2p8DSECfJH2pqcQ1WXNBqXj5Sg74mxPgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rtsfh8ABrwKuNmH96tf2ZHFng9Jdvg6EsXic9vybn5yCySH15BpEngVCnQPsMQPeJ8iw5R5cLBpGUjFyc4szSEN",
  "key1": "9bX9TXCmUiSX9gCD79zdQLffb3YLUtBpxjyACE2qZou4Ks6PQfmY2DsZMj4MH7SsftUdexuiQYQE5rwFTZai8xT",
  "key2": "66PBKiE58PR25NX881feysD7Fq1pECGxVrtHds27PwrLYABt67V3LjiuxCYPyvwKwnqXxbTNrvNNN9RJ8cZSV1AY",
  "key3": "41BNFcrosduQHbzKNknqH6onfZE1JYoFVTsAt1zNBBQakUBRj3LHjz4Yj6FTQmJD9ur1yc9SauFoWvKZMLshAjyD",
  "key4": "5aNCkrzaaryqyDRAYaBQGcsacm23595JCdzNJU9jyxwMVwvb4HbA2GHaLAFyCNp6pxsxTEgWvpEM8bcp6bea8FhK",
  "key5": "3VdFtcRhwubCw3WvuxfqQBAJ31LJDuZiu6N5xUpKxtBEu2Ap7rer3v8VddJcGH5Fg9Z29rq6pTRSHCy3scfBsB8J",
  "key6": "4V1wQgzKbaCifcuHSTHKw2i9dJfwTB6adPUbQPfUAx9xAtMBnqcD4JnCvn62z6ve5fGgBACyWkENF9GpEXPkJpp7",
  "key7": "552G5fYAbfJUig77aBoBuVf5V9YMkLkqnewLaZfFFKB3B4gZgWnaKrp2Vn5hDLbs8dVuZBFiuYvYtxS7vMTT5p8G",
  "key8": "2b8ViYxGAySZENkQHXHrVtY3nzLz63icei681m3XTBUvZfLXMc99bUrqrzpo9fY8PZHCffSNf2xYmYqLa6mqjSU5",
  "key9": "2sWimRcdwGQTjURg9BN8BsaA2W8gZHY4N6mweWjx3VUptKcaDDtP2v5sQ5NywX1QiGaq71FwYKokSddqxQ1rWeMr",
  "key10": "2Gk2v2sWCfsqMbgoK7wCtnmMvf9qnfHwaV9Fy7R6AwExeCkDDpxhVCx9dUruY6ThoHriZvvp8JwF2wkzUx2cobrZ",
  "key11": "5w1TU2a8joEjkCR6ZC5KAN8RZDrHmuA39LVFHytcmByPQ14HootzD6y6veBTXBRFeusSHwHmkgwcy9Vyff6drSye",
  "key12": "57iy37UCs1hAfS3mgLd9tP2PHfp5sCJjs8EgRaiykZeBNkrgqmgGm4CqR599AvsmCYBfhvaKTRnCufvgmJgohM9T",
  "key13": "46hr1gGR7EBtUwyhyw14A1ccWi9zMVE5UEjHwK2DxpkAT5s1QqQKaLtUvMjKMe44tZStbtj45ae8KTG3jYj4Ko9x",
  "key14": "EYYeTLHNsft8MGftZCZjtM3tKnDWv2pTbHnnb8ZJrPu7yrHRHptLhhWL3RUMSyVq1QHDjn4tQv8YHbxxUmXQsUH",
  "key15": "2oHqHQUeg7FnxjKo2xTHT3U1NS8ofVJRMFtGeSEtbe1oiN3NGG445sPqLfSpZ4RWvujFrwgzdipwdAvgUkCVE6sa",
  "key16": "33abUPBiRsNjGkdBaAARgAQMpyNqtbQhauERbs69HP9nrDiq1TcEDL8RW3ZFof2WrFptuJiPf9Nxj6nrJXHnKxw7",
  "key17": "zZ5aikkevSnFkm9z2WyC8hodFf2EGdcgaZRJsKRCyHzJto8EsSYBcb5R3qufnokFHYn24SbyLwk8hnDyozhHRky",
  "key18": "49HvbCpPBKSoTE26aBH5UXxRwta4zH86oSTVLGgiS4Mb6PdJ3A5ZeKhvHneYiGUMyHRbTrt7kwvcda1vx6gRuhtP",
  "key19": "5VAMzMt4v2T9pYJnYScV8m6ZoUhSWUZYAT1XZmg69o8aTFYcnBm6fbppaYjyTZZuyVDnyaesTHPJLy4EtgPcrQua",
  "key20": "5C1R2M6axXUckTocqguy1YBFuFehVSkJQq7eYcFDyJj82id13UwNcVEoq7CC2jP4Pp5k8nhBP5rH7Kn1jJ2bsUzo",
  "key21": "5Ld51XxRFNoXZ7y2jeAUTUVMYHacr5vziGMcCLMBT5NG4LnnfZm5yyZyGowzdmeMK78kg95xHaycrV5zUJ2tzCcT",
  "key22": "24txuGxAwzfNDtEUXDUAHxJg6gtJLDT5nC8hAv7LxTMFG5GrQ7wE9VQ8N6zAeTuBNcf6ti4enqV4iABGaaDv85gT",
  "key23": "ByNCRDmArAUfyxqz4jFKSzFDZjbTZhnAQBB3HX1BrJ9pNvnP8KrhmHCi6Sxo2d5gf2cJkiQfjRjxbC44bMUSvyE",
  "key24": "4fqBqhfJvya6AypPBnue7y3ByLPBoCRFQmitHaiJxqWaBJjKb9kLE4zzN3ybDT14FsoVno9zL1fXFWdAk1yNNqQh",
  "key25": "5RrFzo4xQ2aBoJBQYANspBsyBoM3ckC1HcHTCMWQyZErw9hg8gJztWZspJMm6Ymf9TWq9ZVreNa7DWpxNS8DbyFo",
  "key26": "5W57XFbAgGeuSK1jhLQHNbVYgtFE68s5sXCLCpzTGDgzS6eBN2e1JcSUxgX4xyse2Y1GRJL4mQTGRS33g1Xiynhe",
  "key27": "2D1HcqwkXL8epDS34B69LP6RhJZHesNAeATyHiL9ETwnfUdXh3cKHhhdZcipTzkchVo3miExUiamHmr8y9R9T3zs",
  "key28": "2cpQexCxCDPb6vFLSxxjQpp6Cd2WLSdDh1BoqdLPAdNNDfp7vYZtQqYTpJp3HtaGAbm5ep5Xomh3uAkpTRXtUobc",
  "key29": "2WL4129qJ11LXCtVxZAm38rXMzUPTp188kjCKggFTtKZSNVeiMxZotR3wyzS8fKi6CSwg79hNrB3Px7bz2owABYw",
  "key30": "if8WEQQKiT5tNVk2rXHgvpKuY57zP1QkFDh7rTaxNSRbyc4b9zm5iYpwM4TYkoPzLR4JUmQBgXoh7jAqTr6Vmts",
  "key31": "448kkhUVJxxHDUyGiqGReTsJHfLc8bqbqDEyjT6vHmRs664Z76quyxUVNekGxPcW9LDy1aCPfTDz51NwxwVyRfkf",
  "key32": "2qQjTschHq8iW7Y5c47Gvg1VQ8tjyiRLUSJ31f8hmspVCYdspULy3oZ93CFeDSkQEsBUf5aygS6Bq9Vx3TADqm2Z",
  "key33": "47o8VqZNaX8YpKypte9c3iktBkEFAC1rED6Ax4iULyJagJmfcNE2LP2EJVEQfCaFLEbMLF75Be8EfMV84bBuQrsr",
  "key34": "qucvSA8cSiErffR5sWTcQzh9Nr2CN8W5eFNNRhcB2xSy3YL7JDvpUjhUYKvtQKW7xbXBAyXPQeLGUCTqaXtRyfp",
  "key35": "4baCmAJvzYyS2yKsG5CzJQJbEcDX2rJV8ovrFuU9fHhFYC9cSdjw7dmQSU53CUsBj9uPZAxyZt3wBLFnKt5GrJko",
  "key36": "Ntp9WSct8MK9ZvdypXRpQVNHbEY2B6Du3ErrBpt5NPEcsGra9iW6ojtTWvpRVqBw6TNvwZBvp5Kav5wy365qbG2",
  "key37": "42H8hQ8zHTKJeURNijuyhBef9fMEjf3rDx7JW7ueR9izmjwo9odkfPvH1j5WuYYQi1aksSkXZMnqnv9a3yeRBoQH",
  "key38": "BTsRBZgHbj5dRZmDoDV78FLJBAKCyKVFU8nw43MNL7z1GNj7oFhJfngAFS3wij4v12iR6w98Y4jCRan5vvhQmJa",
  "key39": "39F3tfowGh9tNobcJvSNFYwTiJxfjiYtwnjf59jx3PMcFS64jRtcux6R1oz3b4tj7LK5thv2uQgTMaXaB74NAE7U",
  "key40": "47LySeNYs4RgkirouMPyLxNiUDQcYcwAyd8StV7gEv7GbgGkKDgQkvqNtu2P1N1NbPW91d6KkJG3g7ohc9obcL9p",
  "key41": "3gUdo5mLVbL611WzLyFWhMstUSSC1Ws2bZ23X2WyyuuDFizYNjPKL6QLmAMmLVvBSYeVNqTsWrn35Fgipkhg7N87",
  "key42": "jp9adES2kasbj3TCuLGgsynaYzNhbtkErtYimaAWsJ2QirE3dvzbdYUXgoQgC6HZjmpqBSVoEaCprqbNysighbW",
  "key43": "4w2fjM4t4W1avZGBAZkZEzWJKvTFbHVqpouam6s3S2Mo5ZjyiMi6MmxzgXtGWwKfwfHx1uyinDsEcRgJemGhzspa",
  "key44": "3gR9PQCweUf9mzzQVqVwUMWSgAVrKbGCYGPaxNhWBYRAz8si5cv75RZ9dGVeYuqUE2fq7MfdtSnYNCp7gLfWFH7q",
  "key45": "5m9z4AMHh2bp44oVJd3bTWHnnPovthRMYzZJik2kiWTxwbw5txaUPYASKpfH3TdQR1uJiUWFRUv9vgfJZ5NTwBjH",
  "key46": "636TgDgndFYXqP6jUdfxTcXS1269A2xvaB8zGJDswrLYWCbQWfUtmseZdMWfQtZChByiN8wa7kvowxj2ZCjokPUz",
  "key47": "LphwzgvCMHjagM3V4BjqkWrkdDXrUSbSmqzoU9EPHD7auJPP4685WtM73x3GavCstCpK3MuNjRKzcGL7jQ6TwBC"
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
