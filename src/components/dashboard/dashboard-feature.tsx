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
    "2sRXnEMR6pvDMLSjEhRG8LZqDEBydKjmD6bryDd6mTFqWRAxLA4mpMnFETe4gov7PcQX4DDB3jBbVW89YvjyYfaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yK65FnxYRaA23eejDibFwTFPWH76ntxTEkYH4MyjN7qCTG1J7Hauc9utjkthFndMUvRfk9ZzPXgMswVX6gHzUxX",
  "key1": "5r7jKr2oCLeciPTukx76NwhQi18btMDLDbraUCeJ1t471MzXSxHsDaa19NjTuE7wd5CNzpUKTzJxZkyWv5t8juEd",
  "key2": "29hXWYu5jJ7hffEpvU82UtmDm6wAqC27nGrcfaJJq2PHVWK35T1JWsjtawrEDoTh6bTFzyBMYB5GdmYk3VsGqSg4",
  "key3": "4afaWswKgW6FtsZ9ajH8XcPbK278J8zNsVLJsFvcxqZeAkFsZJvjJ1Kdw3NvXfJgPpxLhYwycJyrpXnXUK19JTzu",
  "key4": "Ezi9mcG1QwZD83T97kAbQZZWAMLXW9NNx1P2VFSFv6LCv214kJWoNmAUa12CZH3tEDKiXS7EsRgumg19sq45tTE",
  "key5": "2K6QrHkpRZ9CtBveMucGjCvmM6XAb9jBSQimJhj5LqdR7MApFBNvxs2o12t4eEq95WumM2m2YiXFCQaUSiEfVuhg",
  "key6": "5JUgZcG3X1uuh4pPZtd3eFWfG7HE1NMLck8NE7ZgPSvVVc3rja29fXyCKNUEaAS6qYTZCDmzQcFwZmuVFUcKxKwb",
  "key7": "SGFqq4BvsvvJqTBLg9cZAPZJcqFbzVqZArfjQFPbwDvacyYHMnaCiahgRNGC3NPswMKjSLSgk3br8qwpFpbKZQ4",
  "key8": "48ZDeSWS5aAP5X3bmZcey4Jd4UpWB1BEpLv1qxiVHWrPcbGhCfNea6vA4kMeSfHZmqq9EdvG9tknMs7aFe8DFNpt",
  "key9": "2a13dv2cjJ7gLCmgW9iNEZspWEkP31T2w1SYcm6AU9XsGzkAqADpXBN7YYFs8PnimRstsYXoZjq54wv1JSiV8Bji",
  "key10": "3VyiWWgYG5PdmmYXinS6oFafcEhcohtc84CoJ15EErAgqEjCQguhHBtYGsNWXSdNDE5Q5DzQK7gg2he9BAkP6QTC",
  "key11": "4CMpjMXbSR9WY2EKEaZQvnKzyjmUToWWmHTyffjLBAapnV6XVvr9LUo5bJt9vaFeP4NP5nWbkxfADjWxQLS1jqE4",
  "key12": "2JuVhhn2vUq1eyWXApwCUZWDY4WYKbdoPihAgEa3fdeuAT6dUfRdfZexfkoin7zDNhoz7u83rCSANALnDWpq11w3",
  "key13": "5aL5G3hwUtSptKii1FY2BpcBehN9mcXFyr3Rej5vCyYi49hJ575PJUqmQKP6gKDuh1smUvC4TdvfXqsC3sREGdV2",
  "key14": "5pPrKA7Y5VURDtrtWUZe9wN1sMGFG1DzfoM8d4Z1yFjMo6KtHeoqApLocGgpkxndReiNxhzpvpC2jnaH7D37VqRh",
  "key15": "43NdaVDM6TkPaR5eyHvDwoWKWCEHKCQieHQyg5q6E5HAnndsr7MjzxbxHn8DKrW6gbFdyFrg839EFJ4y6kdffuFM",
  "key16": "4VLsJubcWV29xohwbV67YwmhzjTmPKozCLQvzuVEmSjbTFP29SjcA23MhhNgQ41bkyvdpX7Y2X8MQxPJBP2ELf9N",
  "key17": "3PHqVzEgooQqZCiR665NXFshUpKXNUG5gt4obK5gSgueyLgT61omJS5PcYwqawZLyP7c4uWT2BQpN8KiSU6icwVd",
  "key18": "yNn1u2LvQ61e9NLxSXTnN5cz14m473KwtDDkGFms9jDNFMx2GbDkgx9S2ZjJ6thH7XmH16MfEAMWKrcYVB4wiff",
  "key19": "4VhBsRaCLF2Hk9DjrFNYtSohgovBcyngBPWkCTFg6rnrszsb6M32P1KdTnypfUchgnAB3VDWxvgXQbYr32BNoFRo",
  "key20": "39yRhN4LDbnoHNPwQopee5G7Xr1Xz7zb8epWKZygDiJEeBYD7oYL1MEE2D6so5dHwk22t6sGenEJaA6MVQvR94df",
  "key21": "4JAXH65nHQhVY47Nrpji1qXLXaQRv7VJ8vdvTkS65jU42T5gdPDBcSi5bbfLeevPCyvmcgUTbDERCcFkKb3sW36x",
  "key22": "2DZRh83gt5XHWoNqRYhxgMkgG4GReytFFHQdZEX9H3YSgbzjtRt4WUEehK9p8KGuUZsR971wkXqLr54ohbG5MRDA",
  "key23": "2X3UHdshoAnwoi8bfrVpQeWJeAEv4RzVLb85UvdXHepE6JxYQKVuUeXbGJc6U8zyNE4VBdxFiTtDwLSrXr5S2A4L",
  "key24": "4dZxZZgY5j4qmw92EnKTUQQZNBvq5djZQarrtcMAWzDY5LRqLvPY3XSiNrtThCsjtA3i8uScMMxjQj4tdSvQ8Nyf",
  "key25": "4Th7epa52Vo93CJ4AiVmYkcvcY2kVqRGjzh4JU3CoyATDbBgWUghwkCJTJZUchsoewKFGP51GGD93rhVpDaBY1DW",
  "key26": "4vrA2z57oZGH22mmPzJfJqcnnRDjdjn1F9rcyqp2S43Kb3NKPPsB3XjtRvZQdzSej3Ai14Shib2oGpn7NTwFkFNh",
  "key27": "3LU8qbbVwdB3FZG5ueoVxSHCdAXNUNYDsGGLrcbuWLZ7a2Y36VF7oe29VEVsJ9BHff3ffBrpB9BjVJ9LaF5YVX12",
  "key28": "2utFQhkWXdvgKG6iKetCLqcWc64rTsCErh65t99XbXGZoKT1QmykSKrk8EtDjhzq3qSJHDoDQwgii2zdizLRsKbV",
  "key29": "vsyiFjdGVMkHp1pMu3zC83y6LBv2wQSGAR68iNTARjZWZQ5prFnSr9MR9LshGYmMBQJGQsm68nABxjCvZA5ZDY1",
  "key30": "25kcYxiKDY5BtqrVhZHPWzu7Db7Dizvd5gdpszzGcsA5BnByiWCoaKCJLhTe8JN2F328xaQpD6VPemAYBopp2hjn",
  "key31": "3agGDD1qu3yk3N8aM8mX4MfpFy5rLfoMUwN8JGXjNXUcUju2EjCyywqzZeWn11bcmR4dAufFvwHDhjqg6mnxPkHE"
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
