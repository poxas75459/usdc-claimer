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
    "hh5eiPGZbWgn742vtSkvU59GPRdsPGSbP2oAorHwqEFPwJY4wiU8eM8jUcLkiiQH3A3XBgNSBxVS5cxpBsyYxHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5evJyDNquoWzGnXuy7kiGCjE86FYhGJc3oB6QCFd8bm6Yfj8Vm1ybjxroHAeGaK89rjtoQJpHb8m5sWXAZT5UsYC",
  "key1": "2En1L7HdmKni6fHVwA8Fykyk89fqdLXRvM4jWwMoXrodTYtdu98mtgwVpHGcYPQot6VfrGN4D5xdchb9X2hGg7Sa",
  "key2": "41Aa3EEVTVabuEYoNCT4e9Ea2cn973GeuyLnJVPyhxTzWxpPKgUDiTrKvaW3Q43qUTdfyUFE3n1TBSFT8yt1eRUz",
  "key3": "5fhTbi1qE6NgDL2CfgJUfrGQnD4gdpQgqzEq4gnBkEyr6XYkonrrJwHRS1nA5jrHenmHTY7xgKUETjvUc8aaZ6UK",
  "key4": "49GoutdwWW6d2kjnjdaHSDSfPbekPzaFYCJb8V7VXXveRYRNMHPyQRvWim9EUSV1C5ZSZvwo4QndCjrzyfnKzhkN",
  "key5": "48tgkPhozBdU4htw6s3LrpNZCivDDJeu8d4RH9ifzsQoMZHUpyPBtyfX3KCeW5LrVc97LudPHmCPoSC7gQJJtbSX",
  "key6": "2Y6cCCUBQDE6YPY8qMQM75GP2RG9LZVBLfZzN1j84AmTgaxXdDv6TMMgxPCeajgyzHiFmRgPJf12fBqFyYPRTJHt",
  "key7": "3Vy2BtegpW15EAGVeXpRpxi5qaZCsFsHXf8j8cmATTKqGM4vBb23JAQwRPQxFyxkqohh4Nu2opeedA4GzKKP4ieR",
  "key8": "Ay5vqfaACncd1SaNFMiHrzNyYBsZVh9872YZPLpro2tW1XG22vDsY5fQRKEBNiqfYAVSjqSzxpo2Ea7g4A8UWzS",
  "key9": "zUbZJ6nNYAJQGMZiR2azNYNfb4UeHAytxjm4Zsko9KSTsV6Yyu98dxHykkVa6AviTnDCBVNSSdmSqG8YXYmMPJf",
  "key10": "4nPzF4YyAfUsKP53Yg9eC3Aq4Rr7MmLxBRBjgrdBGHh8qXsvgG1xXpx2iS6B4JfqYJ8uqYUotaFpgRuyNNHxvV3S",
  "key11": "4DM63fa8B8DWUKCKve27wxDdt4MgAgKkzjZV4FzGTAc8d1TH1zo3agEsSdsVcoksPyx7opy7N4UHP666wsVEkcmt",
  "key12": "32pn5VWC1ChVGoN1LwMFfXj7EKyJZeF3RuYZPPcDsdjHHWpHShNipwsLZW93cZdyTP35C5gGijDapTsJ9B9Y1ar8",
  "key13": "3PAnV4ZUjsb4EqN2SdYfiQz6a1ezBkNs1zg2Vu4GfRW5phmVnKzDRKo86RwqkqrTX4jsw4d7qncjUGFFjFdsH6HE",
  "key14": "zHQG8vmLrxxLP1F16i23dv1DnX7Ybw1PsNjWEGfmxTWARYZ99ZBQLigYCNVrD2JzS482ncKHSncwNMsBc6knyoG",
  "key15": "3mMMsStCMosg2wSBKB7SGcGw8qX7agNZzY58yV7pGmdkhfQrW9pj8YNK5SeN9dnPVv9GyL7i3ALBBerDht6M4PJo",
  "key16": "2Upd84eaZWbNkYJ21uX1nNLSuAphRnMs1oUdVq33Dp7sGn9xJiqC6yHxK4uHXyB2knvhcUs5HhRyjpHLRi2SEsq2",
  "key17": "32RcQsG1ZUBULAA9nGkJnRe52mHSHTgvikvXvmwgLGoe3JbUXhmDdHcziSiv16W48pKR9rVUHbzufcZViNzzqZ1N",
  "key18": "288zkEGBzfvmLpRmdxTDJR4GecgZ7UrUcc4h4UJ4dibHoUKKmfsZiiAAw5PmMWaE1i241813US5Hv8EkCgcwZxn7",
  "key19": "q75UtpVHiD63h5W1qxkAoyDht1mCD1VAoVEaniN6JVKLXzYs11BhF93QFBfSd1S9DPZJRt5fbyuDpcVNKrTtNu3",
  "key20": "54c7N8EyHQGLzsroC3mLrtKeeoUtDBR5oBZytBrBjAMh8sHU1ntexiK5B9nh5D8Ek73ezebCuRuBsTaLJf4FDoK",
  "key21": "3hNaYVSSfXDTDDd3oeCdqMWYitU3XzKmf4AtBhTdTsymRbpjnpYNUBiY1utgsbzJhbsJNcECFBvedptBJUvKwoLe",
  "key22": "3nZs3tCjwcyD15ryA5bkcBF43msQjxfyPYNLGW9VXVZmTihM2tXpNoHa19NGCCvirQvjATqgJgocgHVtadFF1y7Q",
  "key23": "4RFCSN7npKUcqTUThhhb58gMRq8LPkRBxrTbUpkpgByoVqfjACBzkf7diPHdG89B6FoeM38AUWpKmJ7oyGGwQg1q",
  "key24": "34NrQ6iNHgXuDv78b5pXc6NzwsdHbj1PLVZJWiffea4d9Tuc67eFDj1Lcp7UVRJeLSy2GTau7wQd4M341hLUMvRT",
  "key25": "5hkqE5JfD5SnHiXH3pbk6qWEMVodLjPY2Sm5jr41XZzekDkvaYS6qsa8oSTYDazt58uHLbYh1Zpq21t6vM2QCv5",
  "key26": "3kVyNVDFpeRYMujUjBWQdzSioQs7Mt8v9f8jFVspEkBZ1WnYHuaTR7uX1ranxtLVKJTVSZNPGx1KZP6bsV1WW1PR"
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
