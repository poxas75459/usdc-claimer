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
    "2s3aPb5e1VukYoHEVCaaBazLVSYUU1HEKVcawGa87b8iD7UQmVWiXrNBYCMTid5byUyL7bc3DgFNrDuCGREwYbUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g1J9MSvr9rPsutvPMJzmDv6PViZBa8p7g9fDZnmzm3syjd86dXRbtPDseL9BLZpzChG4YPeWQRPtZebfrsqECSz",
  "key1": "2tZkrusGsDDeNHg4TJ1d3xnV7JQGVFVtrW5D9qaTLE3aZBvwvi7vt6qoS5MjxpihQXmBUDZDkArgtGt5qouinuju",
  "key2": "5i8uw1gC4EVUg7WDNdmrzD3c71pQCUhY77qWXUNoxzEXCWncXEz4EcZsq2VrqDaxj7MBS6S69eqLbC3zvSrjg636",
  "key3": "621yQGq9ZToM5tTJR7mkLi3745RBUZf1JUHbhnzhhwcw3Wa3XYghA8LEpsnqxuxg9Zt4AiPP3Aec1kXKxEidgXSd",
  "key4": "31hLjAcVNMN3RTxnMTcKAX2GJS3aHqvrubuwKeDc4yGaaAbfZRtqFRRPCuJoAzBXENdB4cfBkuxq2BYApfbadS62",
  "key5": "5NnAYLuionht4NPj7mSLDoB3mjswJ9vskiqWip8vh91KtdfiMG11oBWwTLGyxncfBxXvjU97wFPZ1pdNLVU7gnjM",
  "key6": "24FBhH7tKsLuQPEE22mkrohXTe53h4idEmBMwRcjaujM2Vvc6SLqFHqThFnsq4VTTKyHg9NuKQVQb6r7zojUdUqz",
  "key7": "Sk98oLkjPqauvDtXPyYCfj3rkFMCCohYLJ4UYbcBbnRkGHTatetEUkB4iUiVAirL8d5Annx3FX6YGN1da4Rs4Eh",
  "key8": "z2P6Cm2V5w6EwieuC6NzqZsoT4v3nkQTzPJdoT2LBbkXiitPrBTSys6BS1UoLKjTDMj4eV6zXY9GNGcTPdVfvWc",
  "key9": "4QF1hW1ZgJdnNu8y9Ynr95NSTJbDSaUAXr7eSRw1SS3XcLM3UWTqUQ9J9YV9Qh1C2AUoJiKwf36uzjvu6wnN4zxp",
  "key10": "4DyHjipeXyPiwNz2FE1hZwvPPT97Qfg4gchjtHuCmE4pnGmkNjinPXqrKLPCmkBt67fd6AJ7ytoESfJjErSXD2uE",
  "key11": "5SSwo3jri2eSUwToXquh6Sf7QFPzcEzEr4zLjdBqvwhaAWKmZzJxWdpJkto2DYH23EwQZXamdYHXnJXcfqFQQ2mU",
  "key12": "oTUjkbYMmtT4khJKzpYzVAoxDNdFuGhkdHy9XVSUpeb4yy53nySU3R9cKbmmTVwjfjrbrg1qgCYvRhiEjvgTpms",
  "key13": "5qJfsgZ4LFizz1WSQVshpQmSpDA2W3qNdAhSBFidNKnjHKWqpqa65iGRrLkHNiC5fx48SaxKXTXj1f91pLaMZ48d",
  "key14": "aGerz1dWvQByazcgSn3reDTU6HxozqXSNfeNiAQwptFxPiWCLuvCDsahfMN816p7mmxg277SukQp2xtYh7ZUfNw",
  "key15": "KgNbDqAbqnLvweJ5N9hyr7DqLs8ThU9EYyE3CqL6jETaD5fKfVc6zXHy99XiojqW47DrEpYBJQXoihb7QYQx2LR",
  "key16": "533yi7BY41jcPmFWdpZHJMHW8EfLe8q8Ecm11Q1Drvum9FbqLqnLuEQPqFcvoaqzbsvVgmAfmfVFZgBbw1Jxc6Ed",
  "key17": "3yacXstfiZNREhZs1qNxH8JQ9z8nB3UX49LKTFA9ruohr2BPVX8hSS5TAfryH7N3Bdp8GXephvWEwuDq85HVo52y",
  "key18": "27Rgri8Np7NFvwQd6ovopM4F8vxgA5XqYPgiy82DN88Nba7Fp8LJZEASbnTVp2kg3nGkfPFyXjMDqpx2A8MKyCBY",
  "key19": "3Do8SgWrmuyQYMYgjoQk8xs56SACAtkUdCvY4iFy1pYYS3MTuLWAXcFe58QUjFe5Mb1Zh7vRKcW1TCDsZLVs3QXr",
  "key20": "32C2Ltf6DrSEdpF9AuumiXj8iJgHk4tysok98yppKxHN7P2qwe6jPepMFMc38xwPEiT5XELXwTRTgytXum1XqkbX",
  "key21": "2ug3RnEXCg53j1Rpti88272ZANKuVgRYcpTq7qrxxPPWzncbjZ3qHzeNxp2QBGvpMcqo8TpsPb8VJCcoKSoqw68C",
  "key22": "4fKkJ128MrKW27X4JzzGGTLojvD5mB6H35EpjZbXqPvFAFzXe3872TxQkQh4qk1fovFEpT6AQaYCtecNfkiJJndM",
  "key23": "5DE2t7DB1DPAWCGEgk1tPLNQXhFxmy6eZYrPwE7SzorK74MUAQBNrTSh82Hyg4VPvP9PAQ5Dr4HMuKwqBekonTT4",
  "key24": "5tY96vG8ZMiskU8459raEJ1YLSRNDqf2owoeSTsYzVUPucdiGqXfkNmz9Uywz2ibUH66HKH5wBBhB9vtirQ6SEX7",
  "key25": "4UAAHBayjdoQXyHRG6DGbvj46QD98jH7fQRr783vqSA1taHyboP37cekYnRLQX6reHjdF7ds7zoA976KFrBFXMdN",
  "key26": "zsLTQYHorRK2ZtQWTbsGFQNBxqQTkUQE2ffkfuzKr8FuKTCJPGi26NGbgL5C5i9z3DvGYFk6pAy38v6dBbiB1R5",
  "key27": "2LALxK64iq7Nzw69PSEeWvgJamaayGky3i1g74zpcvYzeTAeFSi5totckcz1ayGAxSvYhdRemEG6Nm4po6mjBMMg"
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
