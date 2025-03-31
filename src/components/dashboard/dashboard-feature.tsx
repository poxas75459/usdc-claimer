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
    "5jWXgmTPQjvkzQqkGtFVzkoGkJtfaomgnd5eMbXbN1zxJ4BnSJMcYSJZk8KWp2W5PbHdpvipirxSm5iXej7at8jB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eULKTC6LDw7xd5LDw79fiKaA52QZ5QHUtZPbyGfSv3QX6641NoSZvBkhsRVEFyK3wQD35UANtw1c4fR2etNmbur",
  "key1": "r3UEAxXiShqbLMYDthwLwjX2b7RtKJ33AxB2yPz7oKZ43e394rUg7YfESqFFwr8u3k7wduT3NVHNE2MUWujWXhs",
  "key2": "3j4DWUrjvf4DeTYGCkLxsJU45GfpUd5cXSmgK5i9Q7UCPHyWcyLMSP5jgq9GpWZRzws8wUWTbpGY7Va9iWpNGPQ7",
  "key3": "4G7tZ6zR4HpQiQyQPYR3rSmErX21XTjT3jiWFV6kHSQExuNwQceKxk8P4XhREpQxF2NswYtgjGe2cRbFAvYk7sKX",
  "key4": "PvDNrninDZ2b16McGCGHe7CRQG92iVmnsfm9zeGQyyxu5NPv61f18Wwder67qdYfFcJVnTKXy7mUEFy2f49Nyig",
  "key5": "4mQPkBLR8sZuW9i5NuL94b8aKjEWffKzwC8CMjC26gJtCo4ywrYsLJ2fo18UYrDAzrLEs2hot34Mkj5eh8dpEn6D",
  "key6": "5TknzUHz5tEactKPZX6iEDhqqS4KezuGp6Xu386ynvDGfR4ayDMKbkXELrv94DBz6wWsGT46HXD9tU5Y7FZKvqeu",
  "key7": "4ezQawwFzAcSAMfopXuWHCeiGj8uNBgswsAgYu8CAgPzcQs2QygdzUFLovtqn1hBzkbvD3dVLuv956k7wrpNadbf",
  "key8": "3BbaGnKdu4hpWTLG1mkBtgNcvzVP4ByZFYT3QmeKi4BKT3uBzmj2FKaMJamQz33ogvnMu1MuPsU9LDSTX9kyC1wy",
  "key9": "5phtXdZ1qFBacmCt8685SZaCP64CYyQ5F7AV1KN3YRUNJzqM2XBHSmTVRVFDhy9GgTqEzWxZybs2Shx1FuvGtsL",
  "key10": "21zwP26pERDBixwnuSvvmGJdSJgUnBRdcgF9iRActkDb2SoASxVq6eWziocPv6srMgX144iTq2R3AppEVgyw3L2e",
  "key11": "2ixmTVkNnunS4T4Sq8pa7F8FFnSKrPDE61rycH1VqUSiQ6EbtXXvPSLxMWfzrcSErwuptWn7XkdovPbTvPCHUHe",
  "key12": "33iLv8ce1BiUFwcnamTR27X3v8uX43SkQUMdhMGDPdEGy1bcmTQBshfLHhzZN5UBLZKjV8iL5SB6ZU1sFNbfZgmK",
  "key13": "5QM6UYkLctX1FJp98m1nqVj2nMWisu5SQzaozDybq5qeuWrw9drGrKeHFiRHoBirScPvNFWwTCa4NPBJRoAXPP4p",
  "key14": "4PB6j9rxRCz3vpcvkj9JQbqwW8fTducJSqLEMrjRB4jdptAaU23yY6UKqVKtWVbHmvjrAD5Brv2mK6CrzhQ3jPW1",
  "key15": "3rfj1dCQjQAYZb3o5HMvXM3uzaA4zb7hY1ndwhjxJek6JNDp2bfSVGF2QoCrv6S3e2mpUSwNctyo7w7hJQraoocF",
  "key16": "3NybaYrNaSwBaCaqkmi7b9BjMRDRVFzhgi4ek8jgRizK3yWMCGnNZPrnKpkqmUAWZGyXm35MX6sjsWD282xx61QJ",
  "key17": "2snDvr2zdAuwVqJfFoiP2HUsrnXfKRHpJebekuHnNA1ah43nneug168uYTXQUmkDVqTG8vuufiKu9AhJUfxJGn5J",
  "key18": "44yxcgeKacS2tuydZtzez9AydCQR4ddxBBvdB2sBcqiVVEmKhf84aGgFzhgm1f1bf7ungiUtbYJEK1m4NyHGRTZ9",
  "key19": "jFa3aRd1wkaFCtz8ZNXXchTUCSyThFTdGRiPz8E6zmWXwN9xmAf4D3kxeDR9HzYr1tHokMKv1v9qYJWCXZCra3i",
  "key20": "yBiyeQifwQmgDAi5ushvS6J1RiN7Jc9CKDqcaKjMwEt7N7REKbcjH7zhbpuc4i6dTKfhnTJwKzHLg3JfoViZohY",
  "key21": "3rcEwse3DR71h8CJ8TuCCyQfdjb9dB9d2rtwoDepRwdvGDWNg3WCEL7M7rHZhCG96m4STyRGN7Ns31LSkoh6fJWK",
  "key22": "4T1aEK4PNPq3jkJvqzsYTg7DR1pj3u1Q6DbDbopcGKapNuT2nKqm49ojc1fEJU5orh2u7imWJ1L6qK2intdrRCPi",
  "key23": "2AZA1y3DtMyreJ82oPSzhtioLWUhheHLFXFuRGwdGpSuFFq65Qwa7h14gPNLG5NcvS6Dr7YHkxN1j1fAbqT1caJx",
  "key24": "3Q7pJjc8unHcCk8F3ieQ5mwgzVdLp59FWW74nFQxxvRBQUwbtgJ4yU2P167tQTHmm2JxbRifXWA1wfhaUbeyG8Y6",
  "key25": "5qfN37BLBSSX7VqYQ1fo5Z5HZAu3njBdaq74rffyRNnW9S9Fq7K5rh2rmcwmC4w3zTLQAxAArUiPZCUg4ZAqxKSU",
  "key26": "53BBr16P4NZazrrHbjyzQaWBpAXrWSp6bA99kJLgP3x7mhJTq31i2inPf4KTyUsenHH8t1jVqzac2Dn1hPAoELdS",
  "key27": "51cQPFRjJv6a5CZn5z9CEqtHxJqVK4UV9ohzVxPZqj4ZfiUuaAdNNw5btjoNFa57U8EZFFY4TmyGkto2fDSYNQnw",
  "key28": "3gamxPAHgQEQQzEXXF4A8XzLWCmREnF1MTMG8NUTKQuGQMecRBahYwtLVp1i8ymffUfkM2ZRyymWNYHnKxDpFWeT",
  "key29": "2BnXPaHfWmtReB1Ban9RJ9BAwV3rSep6dxSbodV98EqBHmxK4c361nLnPaaCcpk1z6wvAgpHQK2zvy7p6ym3GAoG",
  "key30": "3dsf3dipsuL9jFMuFZphE6UH718LD7hwTw78jFLoycD6kCpCGrSTLZDogPbApzbgC6B8pRDtid4MB2jaH7Xznope",
  "key31": "2DTnZSxZ7hRx12wKMcGnqREhaoC5qJz14BQfTQUjEzjoUp7jyXbVjxtfaJmfrJV1wnRbqsdgXNPDA8XPkHtaXXnK"
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
