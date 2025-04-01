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
    "5ekPgHURnaEMEHkr2y4iSbCj2YQ5Eqwf41UF5dF471cJqh1muRCU59ZHAT2hkmaQVrXdRg7KAPywPSPsSjoCPRAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nN4DNh98XKMYpFgS5Max8BsVsGzzMSkch4LRuaT4s2yT7PGypDtFaJzHgYn6pvDifpRWgYxUTFsat7VPPCeWtvw",
  "key1": "3bJxMQEPnf5CnoJ4RE6dT4uSkQsuDiLdxVV1zvT3XYXrjUmspWRJzm1Hkkk84pVgbwQLJf3NgSq8mJ4hqe2ZrVQJ",
  "key2": "48fkPAtzjw3sSdLosV4Nv5Pz3gdU4rwGLhAwsG5jWpoAoKHwNnVXXHN2SkwXf4SgBp4UAgJefVRG2X6pcqySEkGX",
  "key3": "QN6tQwd64cfqQ9g1rc2NNepEofJ4FfbdTFLcNzEGgmCGjaCBtHpNUPiUZt5fqrjwuDugYEBKNRZPXA5uoaxoJgq",
  "key4": "3C3x3aazsjv635XbbCX4YobYn2CW4E7xngWo7ohzeDk7cUbbDHaCSaqcrL2ztG4eaveA5Cia4RkTAnD8dsibbLYX",
  "key5": "61bQaonGHYe6J5vRW8UPRy81JFZP9q225HcCTLD9BLPNprDveqnLukFQrfaJwPwaCRn4Kj1u8M2UJKZvMiuzA65j",
  "key6": "2NG1WfU5HCrmfbGHKbEFdmTcuJ63c4MYAqWNWCbFrhLgFsaKyC6M4Fjs61jgPJ5D72KXXspkb3Y9YyP3nKzJQa5H",
  "key7": "3hgL9y2cwByBBHi8JD2JEdEzfJARAN5LW1NPSa3Se1HDsd8KywwrQg4gCp2pU1dMKtgHGrf4n9jEbD7hgvHJwv5J",
  "key8": "ZhFYwKUAakR9RpeAZZ5XpJCNoYiKm4TD2acFZmWmusFXVNYpy31fWrMbDxB6G3Unzh6DN8MTMNYwZgZ4cHrXT5U",
  "key9": "3Dj6Z23oq9rhCqzdeTap2ufF7d9psTwAot8AjvgcspGWJS8aLYe2Mkx44TsdHMf2DUeQ8ygQn4BoaC3BWXataPhz",
  "key10": "38UFkgE5m6Gazdbexnweb1xJxFWx8QDYKXJ9XoSsyHWe2w6TgbPdZYy5vQpyoZWR3oSrCjzTmPeTqKgK4PyZDWCP",
  "key11": "vyCUvL2DhTab1RZ3aLrf2U1V5zKjhhNCYXDinchQz3xkzK85fES9Uv4VYW2oSUzhuDq4i6QfKCNErqMH2wnFFKG",
  "key12": "2cC8MY2sWEUYeq8McqeEWdLwbUssApoPo6aUxdpM3o77VgVXuUpFU559V94icvp5gDJGAF9S27Z693GrUQePiATH",
  "key13": "2sjmJyWGPDTQPv5vf1r51t8om8PH8onJMtQaZfrcBDGN6MaGhWxFsRhFCzQ2gYLhLZaYBAdZHbGSCbfNrFTvdDHC",
  "key14": "21zES7MXv1oSw8gLWpQQFhRtwh8zjM2jFfkc8VjGofuZWeV5wRgC9kigJQt5rXx5Erm8xAgqAtSpb8zeMpB9uVPa",
  "key15": "28J12jJqaWqTr36HzTyDZBN2shXcWvVZj1ASxsmPs5RNJgkBb8osxtt6Efaid28TPArmty7Yg715StMKfpJLwwyz",
  "key16": "32PEWhbCHnEj9jgPaPZ8gcqrouBzSKicK9Hcznfzpc8DSEeavMU63MnNiqgKAbwxKJhD5frU8pKBaPkiahWPmsmx",
  "key17": "66ptLEA3CYvCuVx9pYSX6Qs3zb9gVk4rFccdcG4xdF9gQPNBSC2FM2H6k2RnrqhRAfJS7GH8SNeBKm8eRtUc52Pi",
  "key18": "YfMiPPmKFeXzLVTYZckFGbkvd6vSnccUnAtW7qGS6ggbuqMipAy52rjDMSpHww626jkiJaXmP53nuoDYsKY33oW",
  "key19": "4gUFwEWTHegY8X1M8gyNHKXbLpnj9H7p4AJUQHkd2xe4Dsuef6w3qShoVp6CEe3brBmkxXXkKrz2rpG4WYsDgWm8",
  "key20": "2dYQFqV3eZ5PKJhcUdR1jy97sKLTt78Gk5BqWBFx4v3Z1bNUNrN19mohvU3BcRCfHdA7zhs2Ypxc2tB2m8Mg9JXA",
  "key21": "2i5kCw9yrQEEDhd3Sv2LtG81Cbebgk9iLKHGBSq4P8gbMaK2zEMJhMJFP333BS7iGPnpXCjhNEsuxBjK7Pt7FycK",
  "key22": "na6uCG6bYsM7kbMUxs3vnjf4dhGyoJds7SzBYiCMs9nobfteqSTATgTzM9MECAY1qgjb4x68gcHNdfoHvQMphRV",
  "key23": "5Xq2NjQ4b91EwA3a6BHd5XLYrXrGD5dqsyHTy3VFpZ5Hf1rnFD8MBvuaeU1ZNb23xR5soHc2HLbExP4jbs7Wh3GC",
  "key24": "5Z4jfpHowfMjDeqZPdve5e9DWfyRJGMkfwey2EfmekwhoAw9VrLvU3Qb78XrsXGJTxnmumQ2hka4aP4bUkDW6Q6D",
  "key25": "4yQesD3ui2yd9jxHPwWXt5BSX2s1dCppdBa7FDZXkGNoBUNXXz1vZVqAzaarqDvd19fMAEXoP3gKDSf5WLBaYTuW",
  "key26": "5puwdxVr1xpKkjMwajpdwofa5CgjBd6uqG1LbZpSKXyuXWny1xu16pUJkmaE6BKpfJH6CAq7AfFeNPEmwaWH51tX",
  "key27": "4gAPhw8RG6DT22DJ1j8H2acpZzMzCAqj9xsiDEQgtjgZYZQUpBYUiRzctk7mFRY2d5Zmg8vuVF52SmBEqveuDvCj",
  "key28": "3hjT5QLJKVTW2Gj7vnLHbmRA2KbW8jYBtG3J8aZkxPrFkmpMbLT1i6YosZkZv4VxLSsduPyC1zjFykvJtqQUR89n",
  "key29": "husguwjqhXYRffRx35DUdygGjbHBwswtgT7ZdX8U3tyMPQUPQ2t2M6VhDufrh4Uc2CC4cbdP1UrpfhpDXRzwmiW",
  "key30": "5tbFHqxWQ3JQSXoxTK6kvoy7uuVuyTyYkyrWtGQXZMRT9VTUQb8aPQ8oxUJNLBCJmfut3uVnvh1qSSfbEFyPZNgF",
  "key31": "4DFUyyJ7NrPchQJeQvfzT2FGQWPycnbpN39RKBgWiCsU3cUBzs88yU7NEZKR3nSweAbqF7S6oG8d6RuimCMdyCvM",
  "key32": "5muvvyWaXSqW4boDp7hgYRoxLWysVGzt1cvfJR9gtZ1DmN44qpavSF59XymLC2KR3TyhmtryEh8JrCUMiVB4G5wF"
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
