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
    "3rfLWRpGK6YAyPCGwdM8VWweTJzLeZiR2WzSwygvaBXqsRaTUceuvS5K5cmawKeoC4wDyRT41RN7vxXn7cCKVLyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AkpMT6xjeJUX6QajtwLN4wJZDqT2YdHBG5tEprUH6MWaXVZMcBSv5AcEzxBczatPLF57sdrtz3iAikmiXBBrUEx",
  "key1": "FYK4njSPCTzj5jWszUvvtN4Li6fTiZtbLNNqUQqHWCcLHSAmBxsUfx6vvKjFeyk1C4m3uvLzuV1PHF3JzSQ4bBw",
  "key2": "3VUtBP2dDdWhsxGvQH97sXf9K7diaJvk9Pv1SZNcKMcGEhYrPdwXy1hqyNyxxMgwECS3kr5bmZUjrhUbvmpBonZu",
  "key3": "4yufkBPYYqxVeQkPM9HKMyoBG5rpXtq96dv3kAgFzxP1BxQ9rt6UbHxL8c3MfufjY1Qz7L6gXpnBrXbMTZGFx27k",
  "key4": "24uS3E5T9NMN5G6Dpdz3Mfq33CYV6XqmtRCRpM78FmJ7KdFgRubmCFBHbRxKMGNrMJnnZVjjGfanroyrv8ZhpYST",
  "key5": "4QE7NVd9CZtYHkyqaPyHsN3kKf6JEAVcDCgvrqCKtB6hqUFJfTPPCT29zMdMfXsiwqTvfrxVxWEitWt7EK5rK9Jv",
  "key6": "2djXvfxbhWHW7awFagbn71G9ajmPCcaS9v95Luwyy3XGhHFeHCTwfdsURFqLjwUBirScseX2ivXVxA9Pbi3o1kKG",
  "key7": "3t2UKUpur3933qQSH9JNNU7KuhshejyiKPABL5mxrrJp9D4ygzcyFNy7VwWK68L8rL86YSrzyNy1bHuF6krm4NUT",
  "key8": "44ZCAUCASNHnQMrVKy9Agdc46PNSc1ajHt1jWCmz7gn7fwoYQwRR6WCYpXwpVDjNAP29D79viYHF5qFP1nJnJCkb",
  "key9": "3MdyRqxvt5p9FDoy469f4ccAshGsDx9CMnZw5Ai1eq3YpPaCndPFhWz94H7s6APbCRExp5XgFBvA2sGFgyrdbeqy",
  "key10": "4oAqj1c2aMG7j8gGMyyga9dRRdcfpZKG5ZSoNn2XN1WXncHBNnwJwk7y252vfHV9Et1bhQnB9EhUbVrosjdjLTih",
  "key11": "3qzDKVnsv3W4NC6dgYomLpiU41MtFhQ18kFEC1s7AyreBGEPPSiTELjcZ8VKRHbjXNFakZsx6nxBiooqAsGMe6Si",
  "key12": "21ZvSpAyCNN7Nurg6f3m8LERRA752QFVx38B1xMaVaeu3qmr95cYDTA9srECG28UCvQ372oU7tr4mpj6FVoCwQTD",
  "key13": "2dQ6otb6y7frUxEr2chRsLj9VoBQuBqc4ShPt5U12SPiVuxs3Y4Erf1ezVoZC6xGM9kYHm8DycbBu31PyCcCAnfz",
  "key14": "5YjFoEgLhVdChjVXWRdsnGydMLKgpA4yWnpHoFwiosdaHn2gPcHdhJEVAE9DW6pMMdv8gnnhjNaSFAHoqJivsq7d",
  "key15": "3pj5KkUEPsK3Lys3MS5fPbsNzi7jjcd5FXr6a52oxxMpjitiQfwR9AEwtLh4dTEy1h5X2UJ68AuAPsQWhJcZPcpE",
  "key16": "3YVY6Py39N573vDXPrhDJC36ehqWsaK53VmeBgVBXGWWuxBGttyW3gkmRyYF6y1air4QW3xDvowpZL2YBN1Vd2Zn",
  "key17": "3Fayj7UfPwkrhEkXENdRCjxug7pWtesaVNgcsvcfpr9qwbcgjrGHTT1vd7x3owmi7Vc3MfjDj6YMgD7L66qT5vBS",
  "key18": "3fJhR2kPFWmnaXSAe6Hw3TFFYtyjpxfrzeAjbVEASacCQXiDExtCxqYEUHMU8nzF7fihX3xEVEGDcPbb87jqazyt",
  "key19": "5QHUVcsHB7WzQjYh7mj8QzDSsauGKhJXtfTwKtwvDW8U3Gwv3GcDH67ArvGN1thRd7CmTTchx9ULaAgN1vFsKZWe",
  "key20": "JpeNmsGhuSxSyypYWbLxg87bXUYWp9shG45ojakcHeBFCof8ccspmEQJ8fzbrNibXwnyjEhCYP4giem6Nyinifw",
  "key21": "3g3gvpbpts9rh9edKm485Xcuap8CDmPfta1h5pNsD1RT3QDKp3McEYZhcWb22qCA57f4okQyqkhbv6v76XKCWASf",
  "key22": "3Yy7sPSycES3udQZ8m6kJoHu3TzFsks2cUrQLgZCFdVcRbyzBHFs1dYAErJsg3UPtQv5bBwfXiiXrNDNWzS9TcpN",
  "key23": "5zAGL53Vd9ZyexmrTtXthLLT7vdVfcPkYuq874CTWy478CmDWkSdPzGW5p8muWv57fp4ooQym5ogMktrgqZnM7o5",
  "key24": "2kWMGu2GnTo55DFiht41qCuCtPmEYWpeYTuN5v43ZA3xfPtEHH86CzFCegSiQC4o4Wmfi57B3athHDSFt7K1PM2b",
  "key25": "vVhskZoNnFqXwduqvEF5DFBJPsJeqzVPgY2fSAUVuuoiVGZWdPSP1tBBeyB1fW3Sv6Ni2Bwgvpqxt9QPBBT16AJ",
  "key26": "2ZCBh3JroemWrrViBV8pTG9nHpZ4Z9bEjpo2vQkeA5XfBFG2FfXHXW35KFGv5bvJKM7DRMacpZF5w8Y7mKHyDxrL",
  "key27": "5eJTHVLYNrSTeRMFFQxHdyZsxfQZwDxf5cYpSYF94n8odXUNefZhFXbzeE2m8EXZFvmPCFpkbZ53f9uUXSZiMNXc",
  "key28": "32DGcjYDuavN7WLkPecHUYaB6hvt7frqbZgNh87VG4nFuTshgRG6Q61J2PeKXahmjDUrcG5DhSDyaU3sk3A8Mdtv",
  "key29": "4mYjjfevV5GwvsdaecYCK4aWo1qvArdm7QvbgLNmr3xz8EdLZLUzMBiEygiYdkUmYVn5zjb5JWHg7yktyX1bajeU",
  "key30": "4Tjv9SYw27ZdYarnMFyzxdJxHcqSba9WkPQU5EbuwYFAmbxsEoHWpbG7jaCdz5RF2harJRiTgLQvyzn9j9f1Fm5f",
  "key31": "2znCGpTpbDseEjabgsAPX5nKm3XWLxFCZkDSb7fZMz4N6wME2NXEFhHJ9piYRGe3RskghJVu14cUSY7SS8fSKXRg",
  "key32": "41rsZgbP9FC6uBMf5SLGYBTASdhFW1ddNq3Wb4R9gU2cRYDqfgR5sPQDjoTXYctaWYLf35zhF3ywWUWbNJ4NdvtF",
  "key33": "5dzFQMj3o45kyV7XqrF1wkjjr5uu4dDgjoUCYLBNDr1YFArfDMH5m77R3p12uJQ3S5WpkHzL1JXfhiEahrWEiS4g",
  "key34": "51RgHbxzT2zHocgWK6zSEMq6tGBiuJ4WTeiscA9371P1XDfR2pNy8VHobjwWgKearQqCUvdgFr1wvVX2qsqjrT1S"
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
