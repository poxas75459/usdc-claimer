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
    "4DmHz1CoQ1BrrFiUFGtFkhjfjsgiRGV8v9ZUAGjq6qmEES44b7of4g3zzp7dZn7FUfYozJuqpaUgNcfduXhZdNqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CUcAzWSpiSqBGSvbRukCBdWDTTKQF3xTuxaBfn4XgxbahjR9EDDQz2E8vy5KJKHeNgjvBCC7KPpajnELi1PKhAH",
  "key1": "TopyS6BeNxfw2wgPkwuWtnEBCZzdoKUGGBf4biPu1ZCTDqC8CCuhtNcCdRfVuqu1HJ7RzTqGL6msHr7bVB7T3cT",
  "key2": "35EiCEmUQBe8soSuVxbc5wj269u9toCvYNhBPUYBCTmgmoum66gb9VNVgjRTZ1N2x7WpFFzsVzp2vJtDQ3y8hzW4",
  "key3": "5c1rWY4pJZ8WH1mDmeed3Bbv2kzzb8GyyyZdSjzhokqqfZv8AYFhYWPsJQyyqqHYVnWfdJ52WxgSW9wjx5r9oYkk",
  "key4": "Eh96dq25VuCyDdPpsZM4ccj7wRjmeR3hGVdjg1fwS1oUcYg4NNxUjvHsDRe9Fjak7E3pw6ZkG5yod2XXp5Vqh3r",
  "key5": "4swQsLJuBLFFxbKMzhmng9fZC5fdcDkH1FfwMMFGwS8WiitjH5QbhaCWUy67zGVepKvRvuUWvM2ULpJuKtkUnrmQ",
  "key6": "3BPwVEnxmiZgwXmdCKau61HS1YMLbEvsPA2PPv96cmPZLpBgfX4AKBr4LjPZr9rV1GoxuMx9qSn9xVGc4wAvawKu",
  "key7": "27bgL4nbi6zbbz7BbeeY8o8qwcXZY1NyB8gdgp6beZt7V9oLsd7dwthGus9eQtQ9h3A5ymMhtGqCBS8sUgC3tQGF",
  "key8": "za7EbDRxA47gSDAjZzDFQW3kLPRy1Us5GetANkLeeobLwEjmtDXxacGCzzcWN89PrLpkMMAbLYaUE9iyoFNZggy",
  "key9": "3TWa7SX5fff1x1GdBUPPVAgvP4BmoHVUE9SpUGYMUyceuSfuQe1xVeG1cdwvVu8R3LakmhdCWqiRM1tWSLZvcmuF",
  "key10": "jNE9gt7cs6nzp2hHK9cGG3cpJxtxecGRwR9kvXhXD2iigcWZbjc97eeLgA82MjeryCBtH6PFnuJd3x8NBHwuiRw",
  "key11": "4eLjHyTnDKNpocd7QosUePvc7NU3DCCKp1qh8JML8D6FVdH7XZiA5L9gCBcpnx9TcaKo15723EH3ojgQC7mY9rfA",
  "key12": "28yCwnapRdofk7qHv45UTspYw19av221vVChifgmSMuXHCMRujMfATtjPhG7dQLALBcziNEjAibGeYUCtMH4b6Y2",
  "key13": "4MqMK4STZDcWYjsFCLu5zLKuzfbF2R8HviqXYw8pMb8jb7F4mpMDQpnfXrFaoQAg4o9LaZ4Ti1oiZngk6RgrUBBj",
  "key14": "5oqwGKiD2G2M4mtbkTF6FqRNJchrhe8YVyFVbLffiAuzMPQuUAVR9iL4WKGipXRT97fR1czuNWS1y9EdshpobxeR",
  "key15": "622sAWTYX7jjHPfKeJ2qB8KGtoo6erwQ8PcKKUZg85WdCEeUr5RF7X2qoQpLgWo3USMaye9zFi1pCsx9giuEx8eC",
  "key16": "3Q9Rof3w3s6gN3STDMEforfavLQT4BJddVum3Q2WFmZ4Ma2idfCeyzreCQ4HwsF7LP6gGU1j3YNE96tCX47aoFPH",
  "key17": "2wkLpSmohWjsiwxw6mJJspzYTXgevJm9DYxLWyEUMviHZaFYWqsC8dKFpCzw5YmzXZfqcqoTbWU9nkpB9ZuHuHxX",
  "key18": "d8go8iAxG5JevMP8MfBZ9XAPU1x8DPWfwe6K78jR81jZZsLgb9AtLWoWo6xWrKJDyBFUAmj2mfpDZdj82XjcN7G",
  "key19": "4BY4UL4GXspM8Hq3xMgaaXHdU9ivGENF3gT485wY5mZjkxwoN4mfuWM9dsQTV6sitFaKTKgb7wHjk4zrv718GryS",
  "key20": "4o94vd5tRiLeSg8EYUUZTFgPwm8kPsdZAaRnLoBGvTDbJyB4ajV4oJr2fMTkBBNWMhHXxE7aYS1hRm8YpgwrMvhf",
  "key21": "5V6R5fhREbsWxVhJecpSZ5Lrs632vyicD7sUtZ6iHXa66ZvzGpR1mLfJov8rQSq5nkN5K7tTAWb1MdLEMuti8vWQ",
  "key22": "2ALzLi17mRZUXWRCxt5iMKBukKTMEzFzh8acPhQsKwn6WmY78erKXrURwpjmU3k5kutSxC6n45iqJ2Eqzs2kxVyM",
  "key23": "5hGWDQpLA8ANbAujX31PCSmYyfgJdiPQLu2QU9k1oqeYiKRDvdUPYLDRLczGejzxaoQYLDFRSMCUWB8RUMsLHo1p",
  "key24": "oNudCszn97D1Zb84mnDgWxAJsZkRNeMy3NzVLG8pzXKc1cWyuk9FpGGVs5v5ieJhxftp6KnPi3pyUD1Z1MQHmo8",
  "key25": "49yg22WHC2GQhE3vzErACxamk666FbQNX47ZqwnSRLbMYkBsRM1Vpc9LFneHiMNoztVggCpYYTusV2XbFy79zS2T",
  "key26": "249KHfeTnaXiULrWevPEnxfrczomr2eRiNshbhW1AzDedzAJDJpzPTu6VFBYASqjn7vCLg7vjHtsh6kMZGfHVj7s",
  "key27": "uYP1WmMZcuPyjdqkF6VVaC2aAvHukA9H1tAtHoZQRymCjpjTBKERjerZRqyxkmhTWUtNxYQ9cS3KQJdaiWN1mr1",
  "key28": "y3aPQ7CjtZZJk9DUFcP1Rzab8TWAk6yxMvVkEW4pmPMdoeYfpX5WmbJm9xYtBpd2mx4DyXkfrB1Ump3foYFfm32",
  "key29": "2P9Q5cs99EmQhA77o1Tq57wEbVBi3aA5tD7JvvQ9QoSbGhFPx78monEH1EeT5eSjTR1woH9EZCgiP6TgwGQ2ZfrB",
  "key30": "2TBvEr5jaxeF9HTpN45us48RUPd9qnhfWLC1zGXFkPK57xn8F6BHVqrQZ7BAxsH5bB7vZzuXp9XwXQzeA5A35kJN",
  "key31": "Cz9ydmBz8sNtzd3ksif3xB16oLjSuiUu1FiUkefjzFz8APjmhGHqCrZBX4Qh7kmGZULTp3yN3YyzNWiPqj9dfQp",
  "key32": "zbsWDMoihEXKMbuMLG2JGX9QxpiryJxwWcM3Hz4Z3vpf1HHUNJrCBFLtT18X5yE82Z31Pmkz7E1UKZTbgnqXa8G",
  "key33": "5uEYiZTwQ1xX6Xm68VdNkunW4rRuYNvwBpS3k76KhyVS7HwTcGdBvqGkfCJ2q5jTFNxCmZW9EBzzapBY7oGxyRou",
  "key34": "62bvRG2YxjySsXXanMnvdC7RRumT41JYVJLJLbEzo7ZBKhg3ThJktgPeCCen9CNTy1fubnfBYrucy2zzM8aw2A4p",
  "key35": "2VVxC69G8DSEwrWPUYLnMMYRhqt9tbjnH6URpS2XuQBYWVKTiPc5sSdL67dEofgSgiKyew38QSdVajfMgd6xoQ27",
  "key36": "4jHa93LWgqLG4823yt9gFUBCjapa6KihCKSPARrZbpMDMvbm2RcMidapnQNpSeqLMD9oRqyKHH9EAjzkA4VR7j9d",
  "key37": "3c9FsotxbbAnY8C4F2k2T1sfHzTRQy423Ls6RVttpi5tFrtkz8Gurv8wHawfkqK99uEFPq9q9MU82JU6513rK3wG",
  "key38": "nKd9jfVis5s6hWHpkVnd7G4nGSdVAMhFwj8cMACEVurnqK6ru8iTnovqWbhmWX5hDiuouXfzC7Yd5CMF6KiRd2u",
  "key39": "5zNabehoJd81rh3E3afrq7dMSug2yUxvAdodHyq63U4BPXvH7FjvKiZAvXVrLReMXwQPXzLa12y1DbsrMQQMSRj",
  "key40": "5pUp5k76vU7uwM4gNHyYJqFoKVf37wGs9keAdEuXDWZ4ietcKaT5GijcMcbA3fsD2caomasAtd9kSeHpWbvDmXoC",
  "key41": "47hyznoqmRvoDpaD3HGYA35au6Pj7T6gBt9Qxr5396AVeD3hkYumKvSAnoXS1SX57AGGZXVup2SNNGZ6qykhduq4",
  "key42": "5K2sYP7JViaSAPCnkUd27UTz3ksd5sMPUchCKJvshNE9voDJuTNNRC5eX3CSvNSNypEygwBZGEPajHe7Lp1iBroj",
  "key43": "T7JFCuaxBtsfUGzrfqZgjvTn1Cs3meYtqYMGuvUFkhsEi3thWyVWJtaTuFcaoXHkWmURrnHVMZgecBMgtcXGqmK",
  "key44": "2JJKjgR1rt6JtPPhHg9RqXFKjc6b7epz7F1Pjc296WkHtJzeP8pEohKaAHMC1GnTzzkaAUMw9pcbzXXatnEFSHJj",
  "key45": "3wvUwQwsWhoum8LckfqgVUAwLUwXgtGEXcLQhHZAfRnTr3QtL8VSW4rVnZC2uwtjbFaM34CPuRV54BGRXv5LaAcC"
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
