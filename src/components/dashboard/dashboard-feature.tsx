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
    "5y3jCarThhnK97Bacf2K45h9YK3B5KyX6RFR7wL52vwYNifdCppreJ9vsbMeLSLWNNzkwJTmqeVdM79bUfSADVcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CKmpuGJFAKHeneAiUjeDaAYxjCXKNcNM7xHETmstnipJRBBV7nmik4JsrrMQskC1CVYCjifjdYBXRK6WhmnmPy5",
  "key1": "2VSiqZoLyqhS9ihWYmgJN3FXeidpfAvdJjFFGGr4Kq2mvCwYLCLXQsvdbjKTy8SpF3hfqVcDynKe8jZFF4gPsgQX",
  "key2": "3Taxms1FRbRRuchJ1w6cHZM4H7eLuQoAebSAkLWnCDA18mwRhTc9eZnvuEshLkVMimnVsALDptYqHq2hKPZgLM5y",
  "key3": "2esWcqHJ9wBDdYRwsVPVDh3Wk3uW44m5VeEi62UaugY9DvZUUmZyVGR2DNos7TR35afJufaifbxu8JtdNfon2f7W",
  "key4": "3TZDDaCf3jAP2bxMmpG2C1NgLwgLCKoaDaakN6CX37aSkFXoLKd7KyGXwxELcFoQ42aW4iz7JxUFXS4gQ7wnzHVS",
  "key5": "3xM3FQPuYmVvuEDgoJwZJg9hnRX2Gh5QsVFyXgYxCowaZSf2Sg8ABov1Q88TcW642rCQ1iJ9Dk5Zpn1FT8eZC9mT",
  "key6": "5GwsEwgqfqh2TRu96dn5KgvaDEYNraE9yDQ7fDXTRo1VvKttsksSraeTYE7tY5vH6CqZiWCcb65uf1L7ebUjfjA6",
  "key7": "4vCMUuVYgMif6VcA5oVFTMwF5V1GQvH1MDigTN3SqTXaFxh8ViX89DDXuWwacjJPacc9zc5x534LGxPEUQ9kxSSb",
  "key8": "3gKzJ8eDTtmucR84fEBN37YGBCaS4foSZNJas3eT99i1gnzRx1ZsJnjaDpUvUM45MnQ9Pj4MfDmEci1aLgJxynzL",
  "key9": "9wsCMz5oaRgWbgt34wsxNfL94UrWt9kjGtvrNBdW6tvoCx6bMAQTeqxh1vtAiDxEKiifJ7TYkuctSV65KvwJSFu",
  "key10": "2bxDn5hzaLEifX5pVnVkMDrcToa4qVNNARHJ46zzMRC4R1g6PAqrem7bcftYoY6niBGt9TcLEv15hRNfhUtYU629",
  "key11": "8RkjSmkvZv5iQSw66zgcuMffHDdEmDAwRPhu1JGCjVWyNpyZ5skCSfa24w6MYgeyqWDAAQTsSrV3qY9mzgch5mk",
  "key12": "VpMSNBfzsJ9JMxPjRzFAgcEx9MjyR22nbmFQ9bf2waEihGMEXMShDbafS1V9qZHoxdq5irToEoXeY1nEhhqjace",
  "key13": "mxWXaV4yUhH7pqbwV9ZrdMe1oDW9MUunoJaPKDCE9bg3uEADrv5rspjquVRdVDBNm6qSDuk6P1e623pCnUqAg5S",
  "key14": "vBi2r323jNQYzmrrj6Eo1kvUP8tvJxQXntngZEfBniepcgL8a7XxYHRN8Cf3cVAfS8XUM4KJTb934nYHEYde1xr",
  "key15": "fduiaYfKRLkH8CAb4zYPukVRJVJRTddxXnRzKG5jkeDrZ9pDu4tkgMvQUsKabAR9YNV4b1Dh4Q5i1UE9RTjLMfN",
  "key16": "Jjjpj1MDgKpnQ95724yWW6ECrrfTst2SAkZceY7y2L9MA8jHq9vhPDYNUodV9Y3aHYfJchRrMPTQdEhbNV1wozh",
  "key17": "2GUNdRFUnwqnUQZ41odHxPXuLfsTkxQUcU7d9sky8jzxNR32DHjTT2CoWuRcRVVSKsB6LH1WUefR7o6p6DUPxLGm",
  "key18": "4nPoFqMbBcouGmRWFY8LxR3ZvvYSrYVPk1JtaqSPsRZ1rAfP8egqpyxCvQM7YjU9V6NcnDH5aGMxZUoBudA5oKLU",
  "key19": "2jJB5sU417LwBENJWaYmyei5mus3vES4TJ7WhgY9wvJy2Yemvxhond9KEmKGEsr6y1BgjLkkoLMKBoodnXziM2Ga",
  "key20": "5CFAkJvAc938ZUv8FwMJE4TA7X9Qxtunhy7c6S8mVjXJNHpbd3Ewdduqb1VLGBa4R8ojxzcth12qiKaKsn5m4hxV",
  "key21": "4J7pMYeTpS1iDebS9pzcexW1a8grgVxGifijmF792t9pmDLFxmKwFLaVpsxY5Vz9qmG2uVoMAV5iQ1QpLgk6ADCH",
  "key22": "3LLaCELJQ7x4ePURKB4eybx4fQ8PJVkS68QvTje8q1WVhTQvLpavzCUT5HWzJBaFcBGXJSdm1jRSyjdtHr7HnT1Q",
  "key23": "d4rT69LLoFbNM5cX2uyQuYVLeiH2P8uDSAX2uQZAWUW2AiLXuZqgf2DAwjHujKc5ptgYbaALxqmY2WtaCUFcDDD",
  "key24": "ghGijtLRvqQMLLggwXb5WmfaV4Dy3jvQTqgNEE9mr3BvSuhfVfUbjrsfF8SiWzGAXRXzagobCNG6obMM9yNbtr7",
  "key25": "5zf4hwe9UyzfATxu8krR3o1a91gtTJ1nibRsWaqFxsXLmeuzvUooq2pv8Tff2uuFu2KyTuEzmawxFkbYxLqPt3Dv",
  "key26": "3qaCjYWKwkcJTTee78v97N15MsxJKKSDuCRVSyjRWC2s1wqaGssMC2v1nLsFxPtxQ3DmzEZCjg3iP2yUQJyKR2q5",
  "key27": "3UsYJ1rM4nuLvfUC2Gj8uMJFhXw9FDZgJYKAyga5KScVhZPDQVifpmvweLAgjhdgYAyLzoSkSe1DxvxvZktp5dQL",
  "key28": "3HkqHe73au9wBJS3fNr3CqMEjpktY7eiCHH6FVQm97FpqnvisBKAeriWDrPPMmxJiKiYGmVBzyH3LP1HJ8YA1j6T",
  "key29": "2BqEnineHf3LtJUJpWQ9u8hHxKUZY21XpJR1ZvnSpRBQfWhdVw8FVpthvj74Q3xV8bFHQKLCnu67wLL9umEzXYCq",
  "key30": "vHR8dkbpM4v5Pcd4Lvm5eBSSeLpRHsUWi11QjDdarscAYCGNuMgKvfT2vZMfq7g5dFMwVsubKxAqJNBxiWK9AE3",
  "key31": "3g4nQC4jhvGkNVxDDkvgt64rbpV4tdEfTBrDctmrqjE6mE5gqpQkAy26sTcXFj8HtAixr7a2yp7HHE63LqWGEtqG",
  "key32": "56TmjabmQDY9H2A3sz8mQGETxGHHpy9jcMw7VqFz193JGmAf8dz1BezAmLz2VCy2UX3FSaXz3NnJf3iZ6Zb9wyrr",
  "key33": "2YoXBpR57Skr9GGHug7KLNhqfnGfb5Yw5xy41kQEDMquXgDMXmUK86nQUDkLos7bAVVcLdN3eZ6DdKS8KMqdHpbt",
  "key34": "3HQaejG2WM3ArsEPktZ8tAEudRqJFB8MwqgpvdVsemGVnTVm3AFnSD94XhDCEpir7CSMeqxujFWnF1MuFAAJ8hBU",
  "key35": "3M7qpGkNtbW2kyi5MdP4MkyfKYRGG4BzYVWh7hsAo6ecRXxbwnv8ypDXet4DszA4TedWXfvu588A1BwgNKhG5Sf4",
  "key36": "2tPnYMPM3ScQEppRGZ1ZdMmbUx4oBqFhjqYHdLQyUmJcjdp3vsUXP5MwH6SQvhLxLsvQZJXRPJ1rgenkXSVm7xJw"
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
