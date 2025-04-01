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
    "2qqKcCCt9LC2ydqgLMAeR9wVp3tYyidiYpPYrRpPZWw2s4c9a5w4WLpsPPkCAbWGPvE32ajArZn12WuiEPjErk4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TEXkbM27pJyS2yKJ8EGoWRXD3vVzRPA3bxj3CGtibRo7Qxgkr9shv8CEmFW8zk7njc2PB2WtmWFuTNHKRetaPq5",
  "key1": "5REUR6xD9BCAGnbQbCEuBa798WLWCozedVFREq7gnv1BkDrh7rzvdUw5iBUwcuoZ5bZveoUiME6fRhrfN1bBamiC",
  "key2": "5ubMa6dLS7yBAHuuroZLPQ3K7sUi82ozWEvjEZVQP7Aur9MtPECbmpmZSfAjkAac1TEwTw3GW1PaurcKyCBD1SAX",
  "key3": "4tej5U2SEAv58NobemPbkHscjauTUobk5kMozzhb76kq8E8vLELdUhR5KcMcQCDeJAK23YXD2YCrMuntNufzqdSi",
  "key4": "3n8bzXENkDeD6u2N7uReC2dxCin6NwwBiSAxmGYpJBGgrzgR9akToP61jm5H7F1FSbMenKSJHbnWjrMdaireWjRL",
  "key5": "wpoevBuX7SpxtFQirtFTrrY2e6Mp7aL9UZNavkwRJC3cSvvfZApJHF2Yee3HWSmAmEyci1ChVQfErEHDF341Cdk",
  "key6": "5SmoGSVKYcCTzyGx6URUKzu8gV2zCaPnZMdHx8TPv44ByCQATVLNgPzzTBwnyVZQLFxCvTXEhjZps3DmpLx7f4KG",
  "key7": "4SzqXBfkNBLD2By3kJWW7UrhEHr7SGBLgquaKztGe6MeauSUMC3FcTDZssDsW1bCG55qBBYczHvTY84QXTk4nNnc",
  "key8": "3UYWoz5yYDYBdLi9q3zTMRCbNFpEPVFu1iUQkwVVxsFJWTU9idHRuDWG6uiwg3EzLwhyouh3S2bFpEhN1YD4mh73",
  "key9": "4KCLoy6oTTks9x3LyjReRKFFNk7zuzPaB4xc3msLnoBCoZUXc2UZWWyW5SeX5uyaQcrUf7W3h3gzrCYMi5vmeE9Y",
  "key10": "2CDT7peWx3ou9FFKjsKk49QafBf1CQcA3ZQU5KpPL1YLFsmfaL6yBnPX2EhmamR7mQvfhb9D6aWMNq85if7Qavgi",
  "key11": "56sEmRgfkJHwpFAjVgPjUiRX4mseinzEUdGrSNt4dG6Lwp1zfHJVFRxrL9bNPntjWp7ci9JAq4Lh44991cnQEbqV",
  "key12": "5bsPtCEfqW9cXrMqADePg9Vr8eFj3tDbxPA3zFzhjWoh1LtfsGbWQmYQ2dG6pNXt6xHRGnNZ7M3XpywKUU2V3Qr6",
  "key13": "LB8guEfdaZ7sbwiXVYsei8N4NaTtj11N4tYWS7hRY51avRZzvg9z5ycZ36md134RKLo7B6piACeueBKMQ8HcD5r",
  "key14": "66oFLgpFeMWMaT4s9tretesFHbRL2VTCDonaqpK1BZk1K53gtTSseBDS2hfU9iKdKtJcav9mjdx5qpS2wSJg4WQi",
  "key15": "33wPik5UHmxRZt6L7jKaG3KGJr2KeFmcpnU4313tGYx2FjGFkJ9aKVfPjXNcqsLUsSuED8XdJztuTCVpDcJGBsE3",
  "key16": "2QfnE54M6MSwJHhb2g3rGWo6uV83CKSgWi3yxxyS3pZwmVnNdTdTYufHUUPtgYYeV5JP6A3YjUW4tm8bQYa4F5ZV",
  "key17": "5DmCof4emwNdta8op8LGDXevnHjZLzzzHCvvJpaCvfTJBNCCQhzAJdW3XVAGvySxysxPL63wHRNWN7gMo9GfVfSr",
  "key18": "ymTuZTKVWSv6GXgzvd8nNKzm9sz8sBWZco3KBnBJFdfw4iZjYmFc8vmEea3vcEnhzNCJ83uB9rFhDgWJAWWDqFJ",
  "key19": "wQBL6ktTYjLFFkgdTzK8BNPoVsQxSR6LGtdVwyReAMqyecLWBTd19nibo5UTZy95kZnf5DXE1dDbNYexmypf5wv",
  "key20": "UPq5B2qV4jt1LjZ9KZS1iX6URXkjJkdKcchiUJUn58LpyY3bqAGSCtSQiGBE8Mzs6rmjKWqiN8g9rkSF2uNdjoe",
  "key21": "RzrXXGYSS9QJHVb1FTfuPGisEKsE3zZbEZtFXGK1Fx2SDnayEuv1PxkmfUD5AvHjZ2gkA9qwZcNyWQrzv9pnNwM",
  "key22": "45WnZgRXvGVp8zfCECbYCRS1UDrMo7DprWqbjCtZaAGJH4KYC2oSRheQ29MKJRTaeFn4QVRNeuj9hdsMtYw8QW1D",
  "key23": "2Z3zHzrcFk1r7PzAtWuxS25AgHbstbgNjtM5ojn2Giu9ez41j5stTDjRGNhohdnHZCV93hxu5uFu2DEzj8NHVubR",
  "key24": "4gaABqe6btmH6dYzsy8j8jcdVLa2L2xYxACEDU1crueY8A2tJ5cGVmAKP2HUqfbXFyV8nmWRRi9eiqXy9ahMNn34",
  "key25": "52jRdePeRsw4VyEd32LoUMTvnBJ7t6AdXETwT7V3dNWTSNXA6bjakgeAFe2B1CtTNsTepHPs9VRPbPczv6URunDh",
  "key26": "3EirV1zPNU5xce9MsBAhmDih4xqCeC83iL6JsXMhtSwFjQdNc5zNUtPU5Zg2huWFecw1mXp9iG2A6sWNmHDB3VUA",
  "key27": "5ebRW7aiT1ToBSkEo3rbnXssnYmwA9FY3CYF9XvW1uFSSsikU4MkNwikS3kVV33HgdoeVN2ox9y9zgS1LFSb8MoQ",
  "key28": "3DWd6DQwvsEA1ZxZUpMdpGQqHQsu9wTApFcnEuSdbquUZkfj9t4ytYgSaimEYLYJf9NjRH3q8L5x1KHkLHQMWFUd",
  "key29": "Ze2e4FsPe7gfPkafJRrDDuYnSJxZVfo3xjL8qwwGR1q9QR5ijaKmKQAuLpkB2TERPBLcfLB739dUfyifaDaRPBu",
  "key30": "5F3cv5uEjLNXhWzp2NV9bGVZAcLwnwnqnReaPr4WA9TuZCdYc2X8fruDXbP4CYeBy9GGkwMRxozmKz1sW76caS2V",
  "key31": "mGLvJ39HuE5oAYLNe9A7C4fMnV5JtxA1G7oYyZeqwTss7h2eyqsHakLcpDKpy5d36i5J7xcjPJr3mAr3PCYrnEg",
  "key32": "2pVqkgaNMsNZEzqhJe1PpaxjRNSN1Ho8wDnUmxD834jusi2XAjK4U3W5CCrQTDqq5agyt6HcvYYDcJJYHTJZJAid",
  "key33": "4nfizQHusj5wtPXK61vMWp5mguxsyTaAUQfjsb4ya1x62jDgxgaWrenggM6TbKmZmVC7JTj9zTUZySUg6mBzw8u8",
  "key34": "64FL1BrTFpCRsbBLB2EnVTiSZwHhfXpn9c53Bm4YEPYYQcebJT8ApGzdgzwr7y3C9TnM4tuuuAvvNGUttTF57EFB",
  "key35": "5S1bgjFxet2UA9Pmw6Fe7Fv1fBQLrCxbufnAxb7rsTpGC2PTiB8kFrkw7xjxQkpu5aCKQ25ZAJzeZArE9H2jtBRr",
  "key36": "26XEdFsZUdabm7ac88aeQ47Wn2gF2Va8oKYiVTTE19HcmvfqLGw5qV2VwHk388SHvvqGx2Li3X5aeeKRECrASeJb",
  "key37": "38dWQ41k54Lrvgn9Jg3nPQ9GjdWneJE25QC79ninEF4AUotPCZRuFjigagUi9pweUKqQ7Y7D37ky2JaepDXPTiN9",
  "key38": "cyweHuhECPK7nW6BNgXjxobNw3T8NEvHf6djTF5tZ45kCd8NmrGV2VurpJmzbaXXP3ALznucx48Cy4FbpY5UgE9",
  "key39": "2WXTz5GZ3dAEvoC5VccsVDGU2WTNm7Nsb8KKC8tsoV9XJgwVCLN9CV5zVV2K5pv8VkCU4rdBKeEdiS87XPZrxHDK",
  "key40": "3dQbxd3e8bemPmjP9pSnPfQVPx57vN93aJCKfy1kouDHFNxCgjexmg7DfspvLQ5NZCxaKbmeVPzPHAtwXRRZHbb4",
  "key41": "2pzmuSdVNsBFptXdRLeJfewJ9zVrHc8wLZownQJVkiZDGRshXhZGqPGSZh5U6uE6SuqDMZcHdL8k3d6PWmNdxm57",
  "key42": "5VtqdRBFSi7PxgxCVMqpiQPqpQfVUYe3pqtn7hX6oECsURCJpXccZ9UGkJeCLv9P81odBXV1heEMEaAx1iJ9m7sm",
  "key43": "2fpQnPm9DNHWhHFdnUNWDicrd14GDriTwr8NPHjobxcHK1LCdVCS168ES7vtx9C9vKf7GrtpRyZzvWe6EHPqma9a",
  "key44": "dP5RdCEMMa6GEazzQsdys4yH4iSjxrBiks9XEhfqNgRuDwcAfAxjpdUnj6tteKuRznMB4He9ZsFKcqJdeat16BG",
  "key45": "3cteVxBbZ8zF83QAMytJwdedcjk86Cy1xeifWKvgZVBXdr3XXehYcTtSfxp1KAxNDH2eW6P6vZdZQowkRextVD5j",
  "key46": "3YeBcuNurAK5CnP6AmjcDhJcAES9byybxQccW4UDExzPHtQPWhSGCJ8mRFgXfWcuCHX5Q1uCvhv49RwYek6RBEy"
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
