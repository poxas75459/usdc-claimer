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
    "31uTSyxewmpMBtUaW1x9BiLZdiZV6n9Ex9e8LgHicjS7vx7ywkvfH7FZt7FJxqtemquzFBzRHBmSSUPPTsxhFm35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BWQeh98zouKTh2uxKivLYJxCq1AXHWh5HbzAFpoa4XMF8sLWeMfVJqrHHiabrFchvdjLxfuKy5LQ3VzG6pKZKTT",
  "key1": "3ujEXx6vBGagwd4M4RxLNdJDG6XkSzJskG8sd8U5FAngLZcX8qjjqKYT5649KUYNpzRrg5zLnSW9emonk5AaaqKJ",
  "key2": "4rpk95ZqLUsgJRPGGnmhsR3W121vP1Dx6p8zm4vgceM66PJUQ2xuymRFQjrPNb15ZA8ukQ4zoo7iiQF71VzpK1Rw",
  "key3": "4zg13vCNXjsYuNyZCyfp4JJXrQoaxchfVqsFJkDbtCzJ5wVqYmFo6Uj2oMhTn7v5D7HQdaTAhpQPRi8ZYUvmZtno",
  "key4": "Qzvf8M5Bxx421KjLmoYYmtcEozBuqNgxHYQe9BFajpfJj3eyZwg812uNpBadvR4zQ8zVgkMX9sFhwNsQCTVuPMp",
  "key5": "5KEiLuokefW3k84DjBXD5tK1r1z58D36Wohfm7YvgDQx4U6CbXzikdZmrAebKbW7rtA4CFTFUipPQCKJyvzy74Ax",
  "key6": "3nhrcJ8BvmRkXRLGWASWe3qnyYqbUVxnrVxTL7V5ximaiktDNahUzE3w8zPfpKjQndwmQCz9YtUwP7cdNxuoFqgE",
  "key7": "5kFuRSHphgDPtemEkXhfchNfu9yZQ2FdmrjTmyC2X2QWwG9czUf6hZRP3Ysu9yWJaarD3zCgfD3Zcyno1gPv2wsU",
  "key8": "3a23M2x754mXReJeLCz2s29z7eYkoGCRfMSwhaBsdLUhM3XnJhm9FAzZGNL9XjM4ZUkLCVDALQSEN1tbjGr3jmYg",
  "key9": "27AJwcpbcEkFndhU6HGZpP7fz9fH5fZ3vxKNyaAqGskXMdV4mwDwaqLa9ocsSi25sLkA8HKKoovD3Vi2p5oZ95tE",
  "key10": "4a2Uq286xL97SnH7AMxC3DL91JYR7keEdgx7hWYyRs8PfdiCLRRHVvjk9ZXK7YNUGrakgrNMrdm4WhwcutzQMsL1",
  "key11": "5n6TKJFwNumNHNQBjVVpm9eG4mrMPS3mgAdSs5pcY5NWcCB2cVERoFXpyJ3pwwCXJSr7XfffAcHoMNC4Gq1DKrLg",
  "key12": "2fCkbordADpASJ3xafSN2UprrTsvYFtfwqkTEm94t2zEFBdW8U2CWrHnnBMc4yNh8hAvYD4FmSNvEvpreSKxGx4H",
  "key13": "3xK7g7ggxHWMFN1WYBEsp2TSAGNtFJKPZELvcFmA62ex9jvr1xFvjkaD72ajSdGDje4XxUcCcUobMGeYrGyqmMBW",
  "key14": "4RUf4g9XJexrnqtyLXRDW9ixVH7XXqP5St5DomvxLbSyUeWF5nNpH7pwAU7y3EJDZUevmrVUDfssuCHzqev5C5iD",
  "key15": "3uCPxrkkQcPrjRnSbnp8thZx2NFUr92XQk2WodachFAD1LkfK34PgrbLLLDTk4GXi4w6kAWj78bbKTBer87sm63M",
  "key16": "4ofwY9ke82CKizEDC4ND3f1jwoTpHfTe56nuoXxNbukA91j9Sk8gZnej6C4hHgExGvz2Hiz7LykpVNnkS23msa9P",
  "key17": "4McmyhBu4Fuf9obZJsT4NJSwptyTcdjpCTKDSQrrV7bAbHpLMNTZZVdWjXLSg7FrGPdkeXDYLfjovJRv76BgPj4R",
  "key18": "m9441Z8uvnrUZVPwJpMJJCCgGH3ATvGfNqhcECHJuWzopjtHntFGYoWBkKGXESESzkeDkstoNGze22aKrJ1US7y",
  "key19": "4uofYBhRwDWLWHCCjTWqLXqL1gxiW2hLGu7e1bZPJcFcKojS5rPXftKNatPNk4KeqG1DYzxLRjY1YqhKqTfDCqXP",
  "key20": "3MLmZRDrDnhUUdQDmujXS4AFx84pgXFjuh1TG5p84qvfdPLowetjNYxMiYB7LiCXR7dSxZmhAT1w6DXUypMgfAWr",
  "key21": "2szFFrAZGNPy3PRP43KZybyrXmYCBzz7EKJ9Dks7uHi4Knxv8MQeWTvtMJLzVAajL6jZkrgi9DYDqRNsb8wU66c8",
  "key22": "SSBd84VTbKL9gxfcrTcQ68EekK4oKt33NdS7rbKaB2n6g5yHU2APRGPyjD7ivTjxXEW87KAnHP6yfDFyHdpZzeG",
  "key23": "67TnpjWaRU4N9oJqkWeD4u7yWSc68jaR8L4SAwENWHD1FYBDuYs5zkyAKG7epASbYjVskmjZSVVb5hvtp3Rr4ENS",
  "key24": "4q4VKsRcEAY1JA8WKf7Wh2yED1dTYzgJfnkLqeRExBRWGMcccM7sDo12vYZyoBYEsHHyVUiLLhZu8VupfhsX3sCC",
  "key25": "NazaSbAKXu2KoA4ua62SPfbivSRLVYtbWDrV5Yg1WLb5KtdTB6mpH69bKwJ7RRgxaMqib4em1CxEv5XMC4NNWmX",
  "key26": "rnbuUcdcrF1bNEwcJdViJ1mGLv9eDCEGvwXGeUPZKfZw1U86VBe94xGjxEGgNxvVCHZcjZAKhH4UEF3dCBZ5fb3",
  "key27": "Q3MpVCysdPMCpfecc1n2DUdG5xEBmkW95Jj77SoMo8dkiZS3AVdYEMourCkmtt7fhBbVddvjM3kwbtmjNY5GWqt",
  "key28": "4j2HyVSoJF72TUxsNjZtqz8ri1S4VP68wZsAVCE3Ai99dzQBASMgo1ufAxA8xCGsAQzS1vMqraHoXefiX6UzcdZ1",
  "key29": "4ZJaVUovZqqgMrotmZcChcFieZk6dpuALABj75o5ZSGE4afzaNov7DUcDrapDP7ePw66FWcNpdeRH1DJm8pRNP3e",
  "key30": "4ApGYVh3MNcu7iBfveZJSq6uBAVpXvzn5A1fEy4wgxPoWAXNqwZJbrrDxvkebxPaAB4zbfg6NB9ry5a3i58fn7iv",
  "key31": "2pfR7u4Rzg1QCotcQTDjdKsK4L3xBB8B2CJjXK9kZ5PT9dbnrYm4n5uYnVr3YQKNEMd4QjNivbNDbZ6s27KhhVzz",
  "key32": "4PaRvDm9nqh1KDf171BkiMS9rpAHAAxfsBXTpBkThte5GL2Hva3imWizSKTbYDJu17a1i8nbpHLcgCCnAA3qfxc6",
  "key33": "5nZ3jYCMGqq8XRBKgavYhrLZsXzbRD9ihNe1yQPdJ82JosfAbYxd6KRbS6Lb6wmd31RG1ui3kYTGZUuTurfjwgBQ",
  "key34": "2k5QXkWnHrPdT3JoeDaEfiuymUbNJZ8nULeZrhqiqPDbDaCey8THnpR4PuSuUqHRHEGNh2iwHHoxmMMQmSdvx8XT",
  "key35": "2gGs3a3SSzFSjH1BpheqtPvUtPDuf7SgXqiByazAxvsd2Arh7SPvMQk2X74M17U1o6p4EeE66HqDLLCJ6ERWz7To",
  "key36": "5GtDu6uie8omav7nhWecNVZd5vZqS7LmocGiuqdSVKdYkxRhveu6DxccNCnRpu6aomqbSathz4yhJ3hHxxhsBVJy",
  "key37": "4wYpfiEtUUGiesYaphkndhTL8R85DB2insTe2hoS5SjyoydggeGjLQfZ7LdKfpqcMNVroruq5q3F9TteEQtK4wkY",
  "key38": "5es9eC73b8FFsFxE7QLmRxvYsa9876bSPqgi9iBHhVKhbWzB7zyscYdQQcd225yMd5kXakcf5n4DPNGvdfCZBk1F",
  "key39": "4vKgnqD3bdJH9N4HUeyMXizw3LBBcnt53hth4JrH5oBLtfPT7XnSywKrrzmBNyFYt99daaLtaY1fMT9R5itRu3Sv",
  "key40": "2TJpJHUruWCuRskGUwnshDv1kz7hyEctvCLWP5JG9JjvP3QGjeGPUEgAwo9yZEHKGyK46h3h6FerbTSUe7XhivTa",
  "key41": "5Qy1skw2oYu7FwNpDKPTnWyKAP6vbG8ETRasBCLD7vZqpUfoZ5iP1ug26ZQnCUH5SdfaGA6ez63qVuZjAktSwNk7",
  "key42": "n7Zia8HVCG5cR9fTea12zsr1KbtLfxiBoULJBXKdjJvY8BxRXWzAynSh1gyLrgJnPU1YQCQmyZThcwaBJBpK279",
  "key43": "2v1EQYJFjCtRjqKFYxtCVT47sUJ292wsmdLMKVXHGwgK8wVNrheHPsPvmCf9JKBKMvzpdqSc4wN4zC5kXEmJeVRV",
  "key44": "sWX6TEEa1Mwqdhovn5n3ZJfzNuB1G6CYNQGQRZ6Kn33RBj2ThJkF7Dg1mwEjVAp5RKbEKPDwyd6uvfXs9EGHn9w",
  "key45": "23C3mKVeFhmq9S8JaVxrzGBKwowgGNUemV6XKvQjX8GPpP9cqdn2d3sQ2erzEJEmigaGJz3A96cFd1Wcgk5ep7hm",
  "key46": "5HcQihVekm1vAC9VcRDP218TcRoB91sb7KqByepZRCWwDSoryCGz6xkrQoNCTbi3o56iwnnaQxywGRRKisuVhfS2"
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
