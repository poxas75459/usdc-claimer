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
    "3rdiHR6XhFytuX8aQrFLKRaAsoLWUXpVQofGHvDA7c9sJs31o8QZ6jVAJYQMidF5ebK9KXh54R25bxeyB7bFf7zj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wzWL44ZMPu5VS7K1EiGNiQ3njnMMJWRNyzQxdKr4Gh7YaEsbHsRJvJQwkMxrVn4zaGMgpAg4fR6jiggYh7abut2",
  "key1": "4Lh5pjwP2CTH7bbpPqpwJhDCEdjgFEZyM1gfNDiv6v8NzXsBMsJ6DfTyBNQX84uwoqS2EziNraRojuSjcF2cBqGt",
  "key2": "33Ek1THbN3gqA34tpF8W16TikaAFMGkbGeKPRrNJQprAdLM9K3CzTiyYmCXLsrFssFu2DvgEfUdTWoBrcuDWH68G",
  "key3": "A11se57XgWJsck5QDpWkDakfEgxZoejXUXi6LwEvecZJ4PaPruWQYrYzvvMtArx1ZRruGUX7hyV4CP9bBWe9xFV",
  "key4": "2izRLrxErR5eJ2V97hGYQcJQi2pP7DSMaAUi1GME1K2P7yjmXTzVYUPDvz6hbMb5BWw2MzceYBmrmYRN87cm1kex",
  "key5": "3KKSCzNY5uMXdYs7gCWXy2JacvYMrC6kZvfU8XmYAEweFFvTdg9cdzzsk6mCgZDfSjChT4HULumHBLuRRrKAyiYu",
  "key6": "AX8Wq3LjdrBBctdePLzNULJxFKAhkLS71VVM4vzsMNN5rZ4bgLy8MZGHYtRxdk95LW8WuUWm3qu4biumSZo3wr6",
  "key7": "5Gt7m7wjqWWaSEq65MD34vHR3V4yddxeeoBJnJiZB113KwLS2LvEhFcNaA3fNnssMFMEzJDxupMZRzrc6yQJUd9f",
  "key8": "5WNTsj6FUnjcSd935y6Erd7RxAuHa2qo6xBTorGkbWo7qsVwd8vCuHa3Np8orfpkQFj8XB2Rnj451zxbDLkJo8Mz",
  "key9": "3HpV1t9roj9dNuQx8si13yJhUww3LXGwMCuTCdRn2AnxMFwkDXbUpc5dozPRdVJXtMrbxh26Uj85doZucmDjNEiC",
  "key10": "3ngjmE2Z8SsJtP9UBYB91BPGV18RYUXMpV6GPrsjJBAso4TbeV764MiNAWnMi21Upouy3g8JhBpdF9vfBgEk7G4c",
  "key11": "VhK8S81nK3Mc7jTsu1LYpCmwbxbYcTSrP3BCfhyWHvBn2ZQiNa7vJBCCTH7Ue2BoCdkvbkzYPptLdyUqZVxfxPx",
  "key12": "5qti8pRc6STQhHD9yuyFA8iPGz5aYrZoUfLT4BtV5Lv9jejh3DuwGWRRpCL36rzw6b3M1oFTrK6wvMYkVz3GZTFR",
  "key13": "VEHBaiXaCubkAjQ11WBoQwXfFJ9Dyx8B1GuBEW6yyMk3MsYybxqyaxb8cK3EVDV3JtQvq1hod9zYFCGczHj32g6",
  "key14": "7zLAo3RE8ia1qVXADesxzXbLY8TmiZd7yFj1mZYQ8WZ5zbHZ6p976JgK6fxTVDqjThmTGBErk3y3G7BbwnGmexh",
  "key15": "2J4GPQjAyXgxTSeA11xH4hnMnDE4Uas7M2DDgqWmkz3DQFqTwo4snrVpj3UeAtaEXFBPGqWkkVKLdzojp5JikByD",
  "key16": "3mVWyrnosRXyuD1rgMCUjDuVbUdB6ApFtpBnCuMYZLJ4GNry6UjGgSdLRYXKzGicXAMaNt4WJ5P5prSb9pC7khum",
  "key17": "Gv3vzk6MVFKZhJvCrEsr4JUkawdAF6kWnvJQ9yqBwQhgW6zTieWw6ZLywXBqsC2y52tKpF3Mbvz3u77tFvg3opP",
  "key18": "AWkKNCFsZnapjuhTQvKVBktEWgXkESzfemqjp6VsTYQYyHVrgJiDPve7TyPnjYzGgReQArkHhbgb9e95PBMgwyi",
  "key19": "2cfS4Fo2Fk6tdd3ufaCFvvecoyYy4yDu7dyS66EQRiLF6REXVay6eMwHberNGdHY8VywEWGoGoHFuWFuKrS48gC4",
  "key20": "qC8eouJZsRV4dKjZafXkupq8rLMTwtCN7dMU7YZvFd4U8CWXRvgpAViqWhL9rg7QnCHbZF7aB7DVp31DgRL5FEh",
  "key21": "3Ri7fnUi6DH8km4kxkTPrvdnZr78VUJTEySZRVj26JRTMNptjCBetgZK1DHJvxsYh1rP8spAzWeLyk3hv8vPCrZ7",
  "key22": "h5jnuD6JHELLG4dsbSw3FXiqT4b6C8VXtWSjYhEwvud6vRB8XSe2mnutZL2RKfhcyWr5axErMZM8ZRAMw1ei8QW",
  "key23": "bAD3jb1BYC2v9Q5PVbyEMw7UzEbjLvfYyh34DBPnPZCxoCefUQTnLPjZUYYtRdqe7sWpdeG1PgKGXEowWPqVmPu",
  "key24": "47AawfbFBwNAEUwpynhq4qPE3Cy3fCzquXMasqLNxGukrhX12D7dJddwUdTzE7frRFiw7FbZJC5vrraZw7uARMKD",
  "key25": "CCZWv7xdWWVYCDnNjHZC4m1uQAD98ab62LFYrey7qbu8iDUtJ2jS4rHSQFFiN4rt5qrqqb6H3kgCMr44sikQCxn"
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
