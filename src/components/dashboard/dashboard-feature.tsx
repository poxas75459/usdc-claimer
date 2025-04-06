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
    "Pe3iF3Z5h463g694hDwBrtEQe6zaX8RtgAKqxaxke9w3py5ivGZxbmiW54AznXCZUpRCTFB4GGP2t3Jx3AXb8Yj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KnVon3tmGu5JASoYVnxyoGt5rbi9S5Sv6d3ADLnLEzGjGkgApTVpwnPQPCa9DykAAhqWEd1bNcQnK1BufYUFrYf",
  "key1": "6Em7RjqpRXiCofB7fYtm96M32Pdi9Fm4Qa3YdDZAdEWUrfrq7DYwWnfN5WE96CDHcdD1giYSF8Yj1p4QhpDm3qg",
  "key2": "4eJSHszzR2fG4FiPFkpNVfYc8oXz9PTrbkp3nif5K63wjXCT3gKzQgU24siFCoZrsmUVcVj3DkhKuwg19XnqEi5s",
  "key3": "25ccqEay9CnrmKu9LksjhC7XpzuKb4MDwMfnSzd32ataNqAaK1mjoFBA16UQdJEYSomEpgdUt2vvvqrkZbfKppn8",
  "key4": "5eCoHQGsa6xMLJcwUGT1JfeNBXqQG4Z6oUbqzr4Q1BU3FACD8FJ5EYFtHVJbc5XptHZipR1Wssmc6zd6yaXgNg2p",
  "key5": "5ThWwTjsVD9SPpYXExH9h2NE7XEGE5Dg6mr5LqupRPMkRpHfrBuRiukM7wmXW5dbXYWsou2CeG81Bj5HwZcaKvsS",
  "key6": "129FNZ3zWkUK5ayzek2EpqLUQt5ryu4mfyggg9oSyDbkjyP53cVyMbpvpxWze4LYyJnVfPc7jozmhsFqBke5E8be",
  "key7": "2UEUMwgAKKQiY9nANF86PbBujd2anCDJmHcKhTWiwU6XYM7UGHRkdsemdhAV12CGedYfc2hTRyMteXLjfpL1efDz",
  "key8": "3RvcTLQhAMj7wSeDWFRZha8FV8erNmz3nQqk8aJfYorBo3TjTzSGBG23YsvmJyzUy59TExmH16L4ngFDjxFQoVtp",
  "key9": "5jmXXAtYZRXheW7BVouDeQUWuTnPMr8iNKAnemCRrTKmhEi8UnbYtQ22TdRjCiW1kRDJ1J2JGsbYUPahLYiZG3KB",
  "key10": "4xS9KpA8ituJPniZkWNVarpGw9uasCgo3gzJ8YajGG3KPNjUFFRjoCDSXW37wmXRRgqD9d84mqGM8x358nfyYGK3",
  "key11": "3i7XG8fz6qCUshE5fEJZLi3svzUjTWGWBWxedTHcjT4nViqZCkVk8u68aLSnAyx1SAbk3E7WrfxCev4NDDVr2uLk",
  "key12": "4WvSejx8y34f3Fnyz7hTArqVCxCMJvmLedGJuXBCK5RwMu3wDJccjRB2MaWxqip16SpYn5fMk3eH5mTg3Lih2g5S",
  "key13": "4UxZXMLvmuahuJQZiFpMAEJcsuMCczCp8uiopJwJjPJQpo2JhspLcteXX9knF2ZhqSdxLDRcrqgzboaTZG6KgN1e",
  "key14": "4KjReoEnxVRFYswNMukvx84xzgMBZPchnurJGJ2gAS4ZdstUTqS4AAFypJN3TKsNWBZWqkzjDgzEmyWhgGXkFiN1",
  "key15": "2USV9vMDCd5S5DRD9mEmphSfR9y7opLhpEJ4wtah5WKefMHBjEPosztx52zGayFBKWCKDAD4NQTr1tKhkZvnkb2x",
  "key16": "2Jg969WqYBLY5GqJQav3Ag8Sv12W4AtyJHD9yDnj7tqigyxzXxrsQcExYwv1bhtYJ7K3G58Q1AXoGv5M763fWsam",
  "key17": "5LubHNKkjLHDEhy5UqyRcVs59L9uVF5iF4PcESdWABpWJ8AZaAh7MbuKGFtF7ufvFPDvNLSQh5HgayXsgQwsQ3hu",
  "key18": "3EzBuvfPmyB9ocPumt2jKKXuYPLn3W7j6qnyRTbwjLcGpK61GmbuWzhrcJv9DaqW4scm5tvQmrzFM6q94BArtp7H",
  "key19": "buEPhFkYuQEAdwPMmHEzFXHfczyr5rrqzp73njwvqYRyMG8FHtDqbizcLUnYSWbidt9pcL17YSLJsSDr8nCXBKq",
  "key20": "37i8uvLakZGhy6AjXMUprgqADiYdYwXMF85qZturBW1EiW8pyii4vS4rDhxMJYg95guk8j282udvZHE7kyhVhX9g",
  "key21": "2fMmnX81184Ch5sd22Tg9u51VU68MVQrJxaJJzXLCun9af7zrbbL4QmPiPDeoRN9GPbjBYsRA6oshG7NBfGrcZZG",
  "key22": "49G99DCsCqVckLk2K45cCu3vV4FNiSMqBA6cFWPKksePrpK1fFMumiSnVjPSfPzd4WgU96mu34Dbo5JRHr6XBoYC",
  "key23": "1247vda1uAbfCLLQbRPEZEBPhsCjiydNZUycb527G7npqHWoTBkPJsdRWtXbuoXmUTwTRE8vpJ1p2um8yspsC6Wv",
  "key24": "2ti7esPh7zkD9E77fPzzT4f7FEcXhdixV3iYZWvyUVRCptKH3G86ynX5QZqEbhG4t77C4rmE8tuZNvfTVppww5YL",
  "key25": "61rFENjV37gBTBoMUM8L9WxZ2bQ8bVtqfkHFeb4KBn6DKtqLaZ7CA352mqKauVBeZeuUoTMRzzUCSuanBEnEw3LV",
  "key26": "QqwHG52oAdn7outjtKPaMgWjJ1jxQ8ArpRJFBMgAk5XZ6AA41Zut3P5qXtYezTfcGcbbsM1Qz6UU3zgehnJYzdJ",
  "key27": "3VRQejRR4BHyXARUCFnz38g9McmZyLmQXm3At3uSxzvLnkHUJh5t8c23ztFUqyHbtFoUMxYJbszqJQjLhbtSf8Vw",
  "key28": "3mPaciSvjuPFmkf9V86BHNfjojE4Ngh1VR4AauAS5QSEoAjm7hRRVHi7QRbjFJpPKoSGFHLaVmWHBY2RjXEd8nt7",
  "key29": "38GEN9Xt1bPKYVJQw5PVhg8XJicLavKi4TwWaiV56bASKpDhkZWkdc9vMrPebXX7ioSDJGQVWW8dkqUHD7Kd6o1i",
  "key30": "5VQHaaCKrNpNRj5zcU8NdbLqU13bTN9gQwqmaiDTt7vKQFAcUXgR54rmcSZ6UP6eZr65WtwDT41yCouTiKssZLZ4",
  "key31": "5Umbj5P59W4PeCQ8B5UW3866LBhCcedaibkvepjj4KKFt6eT2S5BEy5PjFDvVqXqsvydNwXWJy5JsgGvZqYBkxij",
  "key32": "jiGftjS4yW9qZZDd9VpnCcjhcQkxHiEriHGPeJ5EJLrhUWsPUUkXJdKqmcJAxq6LCpYGWaUtTmwZWQLNCTwdfHL",
  "key33": "389S6hMNHUoniP79sMpKpkxTkZCrv9nQ56tsKz4aFKGsMP9SLTH78VCLewJG7FqAcig6GRHWMc8YWMw9NzKhdYA8"
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
