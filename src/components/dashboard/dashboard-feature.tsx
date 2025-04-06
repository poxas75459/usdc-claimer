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
    "4ZmS6Uo2G5h8hQDYzC1zoCvbTsFsFwT3f8uHdu8ikuxNobR7K6W2pKsbe8rfS3aLBp6CMD4FWLzX72Xt7gn3CwNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JTqHrHieAcwoMcQgL9vMpNWf3sTt1grgpvxbwqWsU7uc4ypF8Q2gDKmsZsCHpT3Utnj3ZtsWmuswu45KpizZP1W",
  "key1": "L98NyW2aKefxVwHeM4U7UFLjQXWBfso7LpLLb2pqR8fksNCUamCjCFgEynBeWh645mfU17npviTA7BcDZ7vBbxk",
  "key2": "4Wk7HgRqbNBtpuLB3nTXR2Vjp5ehpQtrRH9YGPPzunqNaH5oVpwMZm7PQLGhaUGMoUSmY2Pppn2yWk4aySmGBpow",
  "key3": "5jYzbdB5amBZpTGQKMcwbtyVT41yYxy1w2esuvfjfDc9JrFdTzDgEbYizEj4HFTfuDERPpigK1gbadS2BDtCw4Jh",
  "key4": "3nognaH1YjDXQeLbUNrjgB2RF8iLiVM7gZEiZu3HX1W6T1BGedapH4oEDbyYeoYQmE1PPJpHPqTTx2LDT1XRBJZU",
  "key5": "MdKrr42RbLoFskpKMrS6zvpSUGpgFqXtL2V9STYid5KDa1PTZzR2r9SSpyz5M6THQzAUMexAQqodkcfQNY2Usns",
  "key6": "24qqBChUWeK5tECVjxHVnBBRTL53XW3Ke5TxpS2htkCHpusGSy7jmFej8hizny3BKzTKdk4P3fXS6CbbHp1kjX3E",
  "key7": "52bn6afrdkrXhFoNE5xAcMjQatb54Pu19NDPeGhKJahSfhSBc3sEhHqDQsera3sA97JvVbW7dsr8ce7hUfMuhCkE",
  "key8": "3H99jAzEuowGh9ohzTDZu6VJbP5DoyTHimzVTCemmfJoqfwzLtiXBZc91JPYs9ztdnb8yD3SXERWMRoGh4GLeEf",
  "key9": "4rzxmm4L6hqja9BY62QDpmyp7vfDXAV65udg2WiySvNV5DtnmiVkw8wTKjSKyJ9FpnmRNNTnSxmGTt7F3kKZhB6r",
  "key10": "3fpcQPGcoSG4dMVZWqw5cFRSvneu5eDJmd1UDCkrRDJi9UN3iv52HS7V2Zyymz6HwnUrKWWXNkehkXLY7Zk7t34S",
  "key11": "UiLBHySxMannC9vF2RcBUd6SXCap8ctXXbeaM3jvbj8wgDvuUDjow5bPGoUCDMKkHMaHEFopyn8cTfDMsMELwxd",
  "key12": "4khhiWyKxhPfMQP7Vy1fsuvwMDfaaY7cucXjS84mYopFXhQ1EaafXFrWpUrV2CxoYCdx2bCYB7npKUQdQLvCLVmq",
  "key13": "5bphbUAHH1Z2hPAgnwCxZ9uhZeJuMNgtgqw83KeEwHV1vgmHv8jorGReLb6xMAyYLBAMnd73VHbwJHC6Nuvs2moN",
  "key14": "5iXjZTZscoCWsF7UbqWY743JWGphmZxxnTzBA97oUroLzHZdpWgGXaJBRgzRmfoXPAXMtTuFJk7V4pBHicRuCHzk",
  "key15": "qWpEV1pN9ABuhGYBxMwY8r5MgVvuqhbmdiMNpo8r4BfcZbGrAe9TK3sJqnvs54ZrLzjwMaCDzf1jcoi8VUwC7BQ",
  "key16": "5tieebJCcLvt1RzW8uxF2m6WxuNDGKySMMANk2DsyNziykjohyfryAa76Aw5bvY449faDjvMjsTVtPSB8KKq3aad",
  "key17": "5r1w3NPJMJy4JyThqekHQAgFdnUUV2ZwHGvHeQY7kgtYC3NghSq4AvKYns15KnJa3FEqSYzK7hww1FLT5pa93jDZ",
  "key18": "2ybR91VctEvhw38ea6wNXTstDmwmn1JYX7as3WFvo32vaeEHez7u2P6rYaA5DjZdF4Ax32cQ1ePZZ2ESawW52TtM",
  "key19": "4F4QHaq4BFvS52ZLr5mePYDfpWbQVuVSZgfrDgUdCRmx4hRPyz1HjnRLdxjM1ioWrzXXE5qJW5uD1jn3xTpPsGqh",
  "key20": "HoKNPwaDo3kg5mVKfM8Khbv9AmU1RcGZqS3y9vSRYNENnHP27PjzaqGHF3hzeuQ8W6xrVVPXFWwEaJyuwHP36tZ",
  "key21": "t7KiW8sYvWg8GAABLL5f3faPXJ812fX1kJoqX8Vh8d55Xi6ZjCTmB24Dn1rC1mUy9pWcFzc48mR9WRS1hfLH9da",
  "key22": "4MTfeEMnsyvq1k68wWyZVyDBbmMrFXT3hnwHPt19d48jC9yA6hpvftP5M267VXb4q7fkFKKqHkVUEh2FSVakvgqH",
  "key23": "5c8zur79i1iD1i4CZUX7bcMFohiozyGwF9XaSDAgKH6B4Gm9JSkgQLxkgybXSLNhhpTq39ZGBaBTp4LpPwKvBMuW",
  "key24": "5snhPeyytkTxqqRb1SAjxDR73MotzF9RTDsrey1G4ktFas6Poe68FDRGpqNeHHiDBo2X5LdUTC1MpVp5CwCLfEix",
  "key25": "3D1Z1Uik2TrHfRs6XaewaA9oP2LwSewgGzpdrW9GsMeXhPq2n6g7HivG2EMvebj97K6FrV84tEaRgvVNq42EbGqX",
  "key26": "LVBWziTV4XUQJHu94cbLrHtumjckndhGGwRTS6oVX7n1vmQstfCbGogzRk4txx42c2TG1KRQMsGgKvjJWbgy841",
  "key27": "4C41xwL9Q9pW7mNgyviMfUiw45U6N6XYstXnEA3trRAUKYceh6sjHiBQaspfoatq58xXKtunY6gkKNnsDZp32a8y",
  "key28": "4Q844tptgQsGdAzksevEXqZJEgemMEk9MphWCHG9aMrWDojwqbGCZ1CHdyyewHgGJA4Y2G3K3nwDfPfytpAiHoQz",
  "key29": "MQ7gtRwZqNogAaBKceWmjWT4G4tGquYHfEYUzqPnPmnkgXBuyyRPuj2TXi3gpCvuVScePq2tUYDFGL5aBRY1BAv"
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
