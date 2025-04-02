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
    "JGXdHso18sfSphg5tETUuUbay9zmm5LR7w1Fh7QJdFbcNN7Mcoxizmw64nmzH8PrTyEKa6xSnozHiMDqeybwqFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rs4xGFZ9zAgoWnu2d1DPwHqFcoQoM94yFfXPEx4Ls6VhS2puJw6gniboWU68fbvbbvjnG3RjfA1tSntV4Pvkv9Z",
  "key1": "2Fr4JmBXtdo1HRrn86V6jjrcGjt3xBpkq4biCxnBwtAEGecrN7LiCFfWMPdgDUJL7DXgKUQkf6tnRhCMUbV5f68y",
  "key2": "2afpA9KFMKMAvDXzv3ZEznpACWUj1AA5Qv8SJ7URqXdLxw85mUXh2iFuHREqm34VoB8zHoQ7usYGQ2wwwa4qhAry",
  "key3": "3pidV7XyXfohJZkh6sVh4tXAXpSu6zjA5Qpa9pnfAmHE5hSzgPNKWCBBgyvi1QkommgUhbhQY8K7PbV7gdwqLaau",
  "key4": "3oBkyMUKcqwjA6UDwR6tGAoAQyyu6n6iihbECgSHAhHbiwvDt2XA4y55eBYLxXYEoseyMsz9NkageLXWVDDAEMvN",
  "key5": "42LtnSsvYRX35yiesyjFHMqt7GKRFHCuGyhEdQQo1D4f6hsi3b6GoFvzy8nqoScZyJz75racafnVGhpLLq3FagcF",
  "key6": "2sKArhD1SzABd1NCEtDN4JGDWKzxzWcMkt5p1vRFEHtEFsPGuY2PfGN3Zjx8CW7bdx4D26aTM6yMUiJdqxWiuBhR",
  "key7": "3eGoaS21M5rBNF17svWQdS8uxUynYq5gqAN8a7vtASezzC8fDZikqoFHqPEtsWkn5CYBNnF8RDjGhAtjDCQ8XjN7",
  "key8": "2rsrSa43nwxR1zi96bkTTHfo53G9UXUbNLanoR6fe3W12q9w81ueNP49ArRCeJePcbkxYnwixzKZ49QUyT4HsfNp",
  "key9": "5pkDc8mUtF4BTMsrkNMC1icLLsFMjcxmzxAYjMRw6twcJFTCVVTicRQxGuCKisAMsjn7FH3oJc5qMh9KFahYk9YF",
  "key10": "Vuu49rzesV9romborGrmTnYdfkAmKGgP7tMwRg6WoFDVYpP68X5kPLghK2e1MD72xf5KnFVqqg567RfYEpxbwGM",
  "key11": "3f95wsw4pgzUAYCKcf4jMNFPSayaceXSRmMhGuHKTcR4oUABYQFVm5UuNbr6z5UBma6mq6PtWhseYHPRb9FvJiTB",
  "key12": "gWQb2LKZZRv6ZCMfr5ib1GyyDEAESWqn9QXB8UcapfSwwsr9ZbPiJhW3T3ZBd2fFjPo8AwLrpgRMeKg6NVd1V1p",
  "key13": "5BRCHCspynEuRwrQAdR6zNESbxhMWtTcqGpecTcuUU4CsyGWLBMcA6ScmVeRP7RRcXgB6RGx7DG7FaiazfTZJBSR",
  "key14": "4d8M4H5vMfeFSeFpi96iXq4TfZWVP8PsWGHKVpVPh9acJ6YF6ehNdeAtmADw1Vcrj7B4UuvWK9d4Zwouss6g3KUk",
  "key15": "4eNDTbmSYSMYzQsWvBozRsJLYcwXNvQEDvTHuPw9iwnBeWUHAvi6wXP3W6yGQejnmMT5mipcfETckyAroe2Y8tbc",
  "key16": "JWqnudGSPjJFoux7iMdp6gqzRJXW8SbzNj82yxmxL33hF2YMDJUgjHzAn2ZqYA68nf856zXb5DHMTQ8STDSPyaw",
  "key17": "3gTbSgRwbHGvQyJjbdjntpNEhLyGrqe76tsG2VCVyhZ6omxMqi7mdBgnUQjQPgGwb4r7vDo8HKBbRrTZtDRXuixF",
  "key18": "27SLUjuCqgAzBV7PEqFSqZjhszueT4X3cZBZLbT4CHgsTZFHPrpiVyCHK9xk3dEWBRzKuwsaG7syn5bbHdxxwfsN",
  "key19": "348uvn1ts8Lsyp69WCEvU9GpFAyHqS6MZz1Bdrb4JBxKBLq2VVnMDs6uZgMncBzPsfVF9VrQw7BVi2XoZMLW6qXb",
  "key20": "3MLUkG9Mww4j3VZA52FsHttFVYhSZ2iTrczoUkM92f6guRMMGBXoxNo6HviBuUpBoBre8TYdjpaQ8qKfeq8zpWMu",
  "key21": "4NZA9TSyiSdqffR6By6dewGHUnvpMkGa679nrf5PXoa4Lp8YPUfBmuoZsFHZJUAaBwrur6GktHfYswWh7Uumt38o",
  "key22": "4iUKNbj4gLifa3kBXLqooRRgCLVPJ5FKsRh5SroVeX6GM4Sh961KowtFYZ3kC7EbBWNoSRidKdHmuGihY1HQfkeG",
  "key23": "5zuUuCRWvGcrWQgPBz54CzdWHBizWZKfSHbSodCpVVPX1erVHbAmKPzP1J9GY247jbKGXvvdhjtdvVGRqmQHPgus",
  "key24": "5HNUu7oQa1LFztMoYcygYT7fCF2ojN7PGwotVydAfVoD36SmJgNyZ1xwYVXzywR6ukx9NyhcbM4AB1AiWKRjCgkc",
  "key25": "4dNXVJHcgGFtcrdWriciode3Wn5DLBFz4MxYscwvdtj9LbK4i7xuvKphWG8SaUqYyr1Z4jGLicWkMP3mCLcyHn2K",
  "key26": "2h2ZhjmvRbVbEHZbbtQ7FeKHaCVkDeN5L92DKP7i3ezHYnTBLfKTifVY1FLh331gu7Z4E69uT5c8kvREzUoQMgDL",
  "key27": "4r6d1ZV7cLEzYCD9QmcuUKYoqkFmjas2kQQsQoEsYzFjA8kX4TQfmy7zyRe4awX46vzQN7tyb9uoUQAYgp1g9eDM",
  "key28": "1rnd3JUtCsjYRyeEyfSZf1VHkoENCikrepo6jGAiyqmcMzASPZ1CYrXRH3MF3DP82ZUcCajYCBgJ5g7Awojjo2Z",
  "key29": "5W2VdW3oHPhDngV96Evvjkb95mfh7grMyiR6F6QA3FSwwTcYju1PC3CzoghWqsh6kBeNsid4y5awPz1Y4BNzq1eB",
  "key30": "4qSrpcxtQMHEkkP9FHY5fTRQeJUT4msaEJNiog4Dp8KSS8jiLUFPCbYpA8K6or2aAy93ZFJ8cKh2hz75SUr5Ef4o",
  "key31": "RKLGDyRP3Rg5PVfSyukiRx3Mu2jRWekz827Ws9jWDBa1zDHhHaQ5bj1hCeYw5U7MV5RENqZcqr4wrziWcsvzSae",
  "key32": "2xApmNqktX3XadGcY8oZS57brwMxoM6VGgTqwzbb4gVCFrGfT9DRPYEuFRUrn7ehH265G31qxNes568ov2hjdU2R",
  "key33": "4wkgZs8A7HtAymCT5b23MagEddYaLSYXppQB9Yzjjvzs4YE61aN8bnB35yEwLv2C5aMs3PCWR9EQEUyDapwkqJse"
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
