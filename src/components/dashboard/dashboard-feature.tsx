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
    "5VLcnjFrovfgABWU6RCnuh2JDsADvHGKnwjJrVU7vLcqY746eV3pnDhmsd6MjhVYYzvTwL33edsppVb3FtGN1NPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32gtmD7hSRhqM2BFC9ivPvyVKKCDAa1FWuPsrP7iJK1LoBnWYLz4eEpUxaEQ2LMXcKUUctmNwJ6o4DAuQNTFK4bi",
  "key1": "P6onJ9HntcCjMYUiHSuPPjnQZveY17bEki3ewx6JnhwMZBJck9TnhKPndp7KKswG4x5ZALDw35SFfvgwYzo13Sa",
  "key2": "5qiGaVwtuTTC8BpyW3ANw65FC7EU7rGgtHMVgenV2Wc39Jo5kSEsdZWvnWqmG2GFiDSCXYpCT1CB8oh8qcPh4VxT",
  "key3": "mX9w7rzGuCeWVMeRhoY7fXcLpTENjvAxasfZb83hxFCT9CiMxHUyCaJouknKLUzyPqoQQuzTeJa1VHjYjShwDhv",
  "key4": "3xvoALtaEdvH2wmxkA6ngnNwAH15qWzA3iGm1vLBAQco7akLgWNGgQHCjxs5e9sTXtJg6hyXH6VbBjWx8NdzD9jN",
  "key5": "5NcFXdFYHKEhY9wzgw2zi4Uv4iwBGuYw4SVJvuAdGS8YFt6yUoDoDfYyojwmwHGPtN9WK8pSJ311xmVTTcpdRAfA",
  "key6": "4XPEGtuBBQwpqLCTTtrZgE665yPRHRe5bg7a1sHkQWTtpi4eJg1bSoMF6krZX6ciccHHZu5tTbUh8o44g2L7A7ov",
  "key7": "T2DhpYK8JNjbJjhYTKFk938sBDcCRxjUNMVy2qfd9ZahruWWekgGGNtQ73ArBWVtpNFgM5nvuKXQhszjKNZs9hd",
  "key8": "3ppFrD3FYW23MdfUJcGU9DV3Rb4PFxGLHpJACCg8ytSfFNXvVmFNogz1Q5LW57PbPad4FkHEDRSbYsZdZt8J2fnH",
  "key9": "3wvwssAf3Uzh3hd2SyAnrqBoW7j9CEiHgzKYLbgyX3txRocC9Gns47cbm142pqWx34W5XKFJRtwWYfdCfwEkiunE",
  "key10": "4rooyYEZpF2exz34QCf1NhoDzjd1rpVJbuWJb7PAeR7RsSgQj2yjJvFYnK1uU1Dp5oJWdkKL7YAk1zV1CkqFRP1s",
  "key11": "5bVPeji9g1rXXtNoULH5iQsjLFUvs1UJxhATBZKUfRBnMdmTULZ26DgoCVhvh3BbW66Y7WvMwLB9QsbeCcR69KbD",
  "key12": "3wyK9e3SXs2hZmnH36d7KycJR8QRNhykNt3doJ6P6QmYqJLXjtsNyw7x1KC9KBaYKYbAoVYJVZRohNQioUHsPunD",
  "key13": "iTGTsMk2MB7y2sAG2xpCKPyaNoEujPFxUVHMzwXdSDAkLHkDSb9azdizspUAbBi22LaLS866wEL1HYWQvDacxaj",
  "key14": "2wpEAi1Lum5zgiHe2mT7zJuBhQeYJRNtPXi2uHR8eNzuV54FRYGBLfhaZfx1knFShRrcRZrz2mzoEJGFY9JaJaSD",
  "key15": "2RxZAJ7Ys9PaM7ZwDzKqR5BBfRqpX2kap48BAayNVRFgyvm1gMdNVXv8h4qAAgbuqMAYqsk8HpPdWAECWGhmqr1n",
  "key16": "4gjZUCrqg66QPYFxQWiHH71huGnPBd855Jtd9JedFXrK2c7xhDn7MegiS7mRVGmzFCv2wX3oTsnFmwufDT6s8npZ",
  "key17": "28n2LToTRSrULwwWNkkVNjVxwyoiUPLbXDdUHd4Rs2dTLD1fxxnxiMYzuStST68rHBuD5hr3QsXFiFziB55WnVtT",
  "key18": "5rkcopEAtcRb8WNPVxuEoGWLvrrr7kgS1bsd7G3DL4u7GDUF7kNpKQzNUw9g4c9zNq5pYJhGvENZmQyR4ip43XyY",
  "key19": "QiQsGcsLPkQ2c7xiBhd4TcRVJK5tQSguRkT4aXYLPKgZ67AcUt8M9RSNqPJcFEwEMCGscYh3HkU6MmVFygFhMr4",
  "key20": "2ZLSR3vxZjwAXaz4cMkQYe587GeSiPLgUMBdW36VEuJiPWwErouvcH6o6VyzC9rBz1Qc8CQ2cJEod3xbxzjWW1yq",
  "key21": "5sWY1FNg6sCAF6A34swcYLkqhhg4CrMvQmpwY15pmEcwXF4VAqm6pBNUWr7K6TE2sbbYwmFaxn6ZfeG1RfptFUjf",
  "key22": "4jEXxvLdUsn7EhHLdPeTzkCQaGzo4AhrRd9P6aKXU739DVwijte4jtQk4srz4Ata7pqcNtbVDBnCkTCJyACvfnr4",
  "key23": "5uvifuJWxdfW73JFBGLj4f94XD4RPNyKKvKEzNoeszNhBymACVji7ZzTgGzyjdaT2H1PwKniXBuaZYxsQLUb1aUc",
  "key24": "5yxasB2XDKpoxn8yzjRNSjD1eNRc3fJuaSuA6UGCV747CGhzN1Nubc36s6grXuSH6AWDuPVgLYeySuKR7WzSt12V",
  "key25": "4wzhpUWZNghi7fErG8PqVqHdTTvpy8fqANQ2D4xqwuAjP2ReVEghrZgEnop4VALfsxehiTcLVXJ6oj8DFSvrzUGE",
  "key26": "3seFFFoMGXBc1zMEEt26C1UiNfioJUUNhTA37pDREQG2pVC2nc3gdrdd5HVR1Hq9nU2UTJqvUna6sncuLqArFA93",
  "key27": "368yj2s7zA1prQBH77HnmXEnR3WnjmqpWtZx7wsVwGbhCtywRQVAQCpkEwaUNt91TQETsjh1yCDDVgpJXXNMuUMJ",
  "key28": "4MkSCXTtZyX8vuGt7vwa5xCv1DBZZqCujFcrHUaYuAHkEUntcX3yF7GVMwu4udSszXr9DuVts8R79VKjMfoQdJNR",
  "key29": "3Gj5Mug5GzCiLwjDHYh6ZMFgKnyuVHgJFihjk887nAMDJTqSmb86QF8ofFZ3K8sSC66tSnu5RRsVU7iaUdA3v9RH",
  "key30": "2QdEGYNdLDXq49mqtwTmVF6QxmrHVGrZrjVFzm9i3i9WkMd4NBUcguFEgdvbt6HvQ8AgFWRWmYZsrPhPpKhvz2Uh",
  "key31": "MhTqQ6KjajK6SdcnHWLVkWMx2XEMTkurwE3YLzz7AYCuE3thSy8cH4mc2sS4HoD69WN7ppsNBNz7iiPhmtC2aXP",
  "key32": "5z2jwSScK9N3qwdsnmVQXZgrDKAzB6ru9CuWBiFrnjAeYsvMzWi7J1zeSveMFBfVcevzAfGtQ1E2pufmDH65dAJc",
  "key33": "5rczZJVpHiSW1GxNTjFyoFQtYjp5KYphQ28bVYSRkaymkJnJriTsLp7JES8q9uZKMm9vNyLmAj7XKJXz2U2qz1Ss",
  "key34": "5mJsJjM9zNK3ZUbbHkKAUtmH4xWmVYMPdyM3oTn7vqukkTVt837RsyZWztywgZf3HM6ngqVT8PRR2iP5x7LBD64S",
  "key35": "5wYeKDvs9PKdE4KSdseEn3UiHx1fjMTTG7VpKFpLZ9r8pDeQCpcYD9E2ibVu4Qahxu9hhkmNAZspKj3SXv5UmVyd",
  "key36": "2Vr1zuvRTqFrxzvQWRpaN51GHnAw9ze5JXRtMxS6p6fcsT81jibQtDzwFyTuRWD12hT7xDhfDuZQVRzcfxzQrP3R",
  "key37": "4g86nqhYU9sStrJjbCuriWbihtbH8TSEwyb1wVkwEtXLCXCUyYLXJ1kk4Vje7ADZGWYagZ1r6S4CEYZsMAyupQQ8"
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
