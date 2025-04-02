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
    "2TXrVfFFK1c8J1uyv5xuqEZsgBihF3CqiS31fPVThtp1soHPrywMbaWhDy4FkZBjuidV3i4cDZ51jCgrRr8KKMSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vo1F4duKYL71huXPEGahTRi1y9mM5JdRSibQFWyrAHpvxV6SQgChFGhWxz5dx43y1ENRnoorma7f48VSqNU7VWp",
  "key1": "44VZa53XVjohsmsvM2oTg78WL7YDziQ7ps5H1ZWFYM2LUArQB6Ropqj3S661D8pFPsnc2XpSjCfbeD6ximGTAe1w",
  "key2": "3eFXvG9GQC8t45vTCSBAnPfpLVfiisqyEx2vNNyrztawRaY6DHmFRMMzCeGpbyBkuuP23FPdeAhRFA8RSAKaVmST",
  "key3": "3HeKAYJC2JKMrV47WZhVzpokYsFmJVaALUHyCriHryxX15rBSmJj1FtQ5jaZtPfCeG4JEXoqWz9EXkAREUNfKuFb",
  "key4": "5pwGveLRXZjHTveGNCAK5wKGhJZoUg3bYzaFMc6QLZJ6pNHAqqUc8rVUVMu8JKtQWhsXNz4YFvqbUJRVQfee4gS4",
  "key5": "4PMtuNsHQ3n6b4cVpjkPoyJ2GavSjiuw9VpuzAAFYeMrUaoUX7ESS4W8g7MavrL9FB555uSWvrJPPzhzLopihoid",
  "key6": "42fqwSVCFYgSeaLgn8gjz2CHn3FKhuVZvNGiHaRJYhSyzBE48vK2LKdQsonAumvWpjtV6iEpiiyiV7jyCDMEVSTv",
  "key7": "jbtLqLaZLLsut9uhLdkiVQkzM5UkxwHLqmHfSZnL5zYYCpxDq7zbQU8mpEfAR2zRTRiXz4WSK7RWVGuYMcYqJ1t",
  "key8": "4JRAe8kY5gfH98jB6PajinDY4q34VUz69Rjyo2meJBWcJcH5pLXKTgRTLpGoML9bfuis8vBKCcQoeTD2cUnMMyKW",
  "key9": "3b7HVHqis7ZMhhtrMGdgz3peYy1waAKbgKdthXdC6twaJ7fLEn8iR4ET18qWVnirnJsVj11u54Ao7AyF8xoB89aX",
  "key10": "4XWu51nEe29d1YU8NtQ9SKt7PkbqMbsKATHAzKSTLaPZgb7D5yJ8B1LQYTtzTTtUsirsZPGdnMv2ifG8RLhQEpKm",
  "key11": "31w3PrsT1nYSdbVcWkx7NyuXtJXYC4i89YswwSKuSnwWFFdkED5NK4dcPRWLmJvzPdtiAcR8qhYBZn1BdLgPC2Cp",
  "key12": "5PbWmavSTtxQbM5Lw5wSM1Nf2DBxMNKG3sRgWrcv8xjdcLgNhQbMj2tAJoQYMfCBURGVFeYSXHCBFvvxxkMLSyNr",
  "key13": "2wPYV2Do6f4yMFg8ygv6gGLN2CcqzKB6U2sZxTDxcnbZrYVN1d4FCfeyCKyAUwErQYHgwqguSa8FKwCpfYikWkC7",
  "key14": "4yzS7ttGBtN12zxspVcQJT2LAZY49va9PWFy55F3ZDRSt18cNCy6CQH8RLae2TgjQqHHx9vz46Dngxgye2uvgvCQ",
  "key15": "3Pzfi6szBGd2nob4dqFUFbu7EcEkfCgwK3YmpqcENTVYgykTbfXPBGXyK2LgB9JuyQ5JoSXnsRbKmcrWfHrjWkFW",
  "key16": "3kuorR9om3GToxCpznfRNqhVuJYPMj12qwX1TxVMUGwaM5HwrzhdbF9AmZrdomWf8vGVC3Gn1NTVSj7GVyZQgNaB",
  "key17": "5u9wMLhz3HrLVDAJkJb3C76dp7EmwgevLaSKc8w7fwLZbbbYr6wCBiAydjGhco55nnYLcCjaGtEbuHoU6v3vxa28",
  "key18": "4hM82Vsj8tGvcQtsFJCW763BSGEySgeZ49fgRWzUMWeqHTYw3puR4MpomxbgNWDVJBLdBdTHBNcWyxs3VxfT4Xgz",
  "key19": "3qSuPx59SLMq6tehBAktvodpn8iNuVzZmMDHLVTzddNkcjXkonfXd76s1dt6ongE9z6FWrjL1EfMJAHJ75ZpAq4k",
  "key20": "33ytRdn6gzgMkyXrsMrUuyEJcZLydYs1tTsRq2NBwsRNtELW4HZjUNyuUxK6zoEbJKkfb27bCzvJ1XWwZ517yc1T",
  "key21": "4hRkemtPGm8UTbnbFqTvopQhhY1jNviotd9MPaJUWCGc3iF3TKrDytwRwqkXuZj2fQdU8QZw9uRwT9W1uE1qjYGL",
  "key22": "2b4DP3WEButfwpkfcGciFwexZ5yxM7qWZjtdAgH9ZXpX1JkdY8FfBBR331uhitMKc9YHix34hx9HWA7eTZuLQWfh",
  "key23": "3oWza77X43Z2qDai4B4Tjf328fFJMuz3dyRoLfADbroRo2p5LTehFNvPkEBKB1Dcp1mj4LRj7z9vgHU4ds6BNTB2",
  "key24": "5KAPLQUf8yAbAiKPa4QCNoV8rL8gdKeJfMFxhtnGCEfy2Rx26PvKS3hPBCiUvNbeLQShasvmwySSmqxiti1d2v5s",
  "key25": "2HQQwwSD9gRiMVHUBNb238GsifJK8VMFUxHShQwx3hKHA69fDUfnSghDrP4s65pbFyouzo4ayXo4weNX77Fy8bAT",
  "key26": "adkqL7xazgZsVKtp77nFcrxjRFpCHneRM1h71Vxaoetg1moTpYiexWM7YyRECv1GL8jv9nTypFm9azUxrcEQimq",
  "key27": "2zcoFJV8Lk5biAsN3Li8GViyoAhKLwp5GmLuPN5Tzx6kXxBdcVw19VBS2r49SBp5ASPFtLFZEUSFyGLM6aj1UPNt",
  "key28": "4rQMVDwU6Qy6Rr2n2DihE3tr3AVEthTanAMpawa3ZZYpLNbPJVizUd6tEPvhW7NX716YGaV8bQvi12dq2BfYMnAE",
  "key29": "5LqypJX5AxYvGcuLG59GFpcU7xudrRZwKdp26j1Bv5RsgWjssSyn2b6KuNwFWMyj32NZjkA7H8B8xTogGDeSG7N5",
  "key30": "TdXLjDrGXf1aNsZnn25hMZSKNR6N7ZtiGmxjZ8WvhTtu9Wk2NUYW8MagBkd5EUxwuSybnPopMCiRbqmzeYjd7sS",
  "key31": "e46B8eDxexs9WtRZae9LtBZSux8rBWBuBU77FTM15LwpPQmXYgtcJQ5Z6pagTYhQj6PuvAJmQmZsFnfZPDnDR8b",
  "key32": "2dLESDNYfEAAeK31sVTW9iPgf4KgWqvk9MRSm3mKAp6mjxXnMbYu9YHmLUMe5AjNFzQsgbMRu2pUt1Csi7kSaWXv"
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
