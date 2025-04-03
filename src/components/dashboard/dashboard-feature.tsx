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
    "4S2aeigE75bCXYU562b2YwGPxWBkZyfCrt67VGCkAyFwVXsqDtebWRYQSjz5UFXj9y6uQaPzPg9U8rr6YcZCiw1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kkZWt7aRdAPBWqMNpqMwi6DNu19BhC5jJysSG4ECXQTBVeGLH1QdqnfWE7ZMBdEt16BpwZnGAYQX42Hhfx5Fi8s",
  "key1": "3RgQyJnZmzKudwjuhHsK69ayKsTViLmVcuQvjgU6cxGPUXReiDCTRtdw4pJEjqbwywz4odmHfvxZRmjq7JjuvB77",
  "key2": "BVpjvY7FhYZ29Ksx4XBjM92ESAs5bKMQCekVqTJrRgDTUkU43BSy9ozBvWadbtNCTybqpMAHKXZKTXeh6BYk2mY",
  "key3": "4bMpnaTyeqdBrE2CieAU8HZq5yNbD46SndVHFut9keLvyB9eiE8Hg7QFYrsCrSEg9NDbJoN5yC9pTYinctnWggAA",
  "key4": "5pe5B2kbiyhJhWC8BCZrSoTSKXQttgL6Gjy4tSD32Lqcd5NZxQBA4rP1GaMCFBD1Vxr6e3jkJHhdZD3DcWacKfMJ",
  "key5": "PowSKFHxKjZgN3Ab416NHZcCC677fvgACA1p6WxzzVKWKnrLBPPtzib1LyKWUb9G1Hhc496VKgeEA8MLVYAorP9",
  "key6": "beeCyjyH8k5u9tXMftSsnPp9cc91Dfi5rL1oXyo62hiRSSuEYuX4J2SQpgzmnKCqrbXwS5CPLkxSaJB1WVWFfXw",
  "key7": "21zae3hV852XsCQo2i55ELdZs5vHSFoGxU1a6Pw63NyEeYP1LyhSo2nETaxka5ktAh24NhrAz54H4CG7zULKZ9bG",
  "key8": "2i1iC8qUTBefo7AF6TQ8JUXEhz3TGUwCjW55GD59hWYn5a66oZ5QavDEQMmtq2CGvyeSyANPEFSHc9A25rrnMhMe",
  "key9": "3K5RDV8JuzZwCfCdg5CmKwFQ4JN4cQGKq8HLYS7bdznz6QBp8chy7Rvv4rfaJhZzYpiSJqCnB4YpzBoDbDRyDiSL",
  "key10": "3Kw8C4B3wipfpMJtFR7qXdKFYShCSNc57qJxutWRTpaGyrSrnorQo3hHBhjiEDjts8mSXUPuXqUJGVtBXjwg6B8W",
  "key11": "4b1psSKKiDeV33ZKpKRCptiTvqWD2xvXmJ8XqayNAYGSu6M9XvgjMbrAp2U45LfGEixQn3JsFjaSJ7wB6335QeBL",
  "key12": "RudpNjnGudUbFCfXAhAihDvapPKcpz5gHTvMf3qTNB8ciJ9G7ZqoWo3KnRWiUyWQWxpu8fGfBcSPjszKkcjftpA",
  "key13": "3MHkcdtfEoFAkrdYLF6P7vYNgtXdJa7v72xk6ARxnwVehFMBJcsDModL1xDYZnUxiTs6CnnqwqkCPXN2ax4CxCZi",
  "key14": "3wEzPeF1VNW1mCfqYba2T18GFQ2h53yZXzerfBLtBUVbcShLzaKPTLbQadx9rQ8zPatNtzryr4oxV7vQTPuUVwXs",
  "key15": "vuJHnPZsmAcJydfuvzWtuD3rGgwAvPSw2arjzFE5AYLXwc1T488HTfGRzhaSvHVkBFRQAsBVG2wGhfdMzCJL1eh",
  "key16": "Xr9K4YdtUrHC4i6g3aTgo4bDPfdrucWjbDqvjH6pnXj5wgCDJGEkSRHmotCba7xPv5FrRz7XmbG2jHbVKiNk9mv",
  "key17": "21KbNTGgkAKfj7rcTK1afvcBJRtsk8AeWyrjhUVU59jcRGJp8vD7RkRF6k4CyT6zWUFyQdUCjyDv414EnNSZp9U4",
  "key18": "3ftA6HvBj4WANrBHXVTadhUXGVCRRqGaDhbabH4w1wKqwnAGToAWCby9perSPyUWwVJHudQk4gKWLDBFbwdwp2cg",
  "key19": "2KxVLw9bzqFoZUCja8oQ7dLKy6qEwa1KfUabo4PHRWwYbN8kVPcdkN1Ug73UDSRXACvYBBHcLq2ai8NA2AAsLwfi",
  "key20": "29hgPYRh9zhfTeqCBTL64N3FExCdq9MbfudCq9Jd5KYHcZJ7EHuYDDC1XqPDJtQN2KK1Ad2aTGpN4VWnnwkS7U88",
  "key21": "5PRsQZoBBt99U4cJBbQmBCX1q4JkummtQAkSSDva5nswbcxFMo9fhUS83Z1W3XeHY7fLTvY4fd6o5XUkbQeLMbBz",
  "key22": "2HsXtPUXFmKieXkYFhYwKVbUHnQhSdwmiTgG2b9Rjeqe2V9uA4XWQckkv1sFp11djqbGf3itnBUTUbQUoQCrtmmR",
  "key23": "XB2xzey9SgPoPxXPsvPULb8dQgC7fqzMaZuktw125r3aDra8WgFMkxpghit4sQpSw7Vr3ftUYuYWtKfHtMX95Qx",
  "key24": "29QiksEYHgfRmL9ZU1P8XEmvRP3EGkPuAo9ixMntYFiR9LEhHnW3nhFcVkkhrvRYFDtNj1LKBiywPRVTwNPahwiF",
  "key25": "5HxHb9GLZuEtMHGgjFJHx9p8Pu1a9W1AKZPHmxqF3CH3GW8GXNyTm3PZvEFdhs2GBoVH4A8NcKd44ZNvo6dv7Qji",
  "key26": "ECt5L1oMpbRTLnj7GhN6i8K8au5SHXZLFherK5VuEpwnAode5orHGtv5fjQwU925yPrCDsUqQ1NVz2beprMAasw",
  "key27": "2CoxfRYm8eQywW2AWRUpuCA7Qp3w9W6y78zcCuVkHqmhHmzpcafXPvzLXZSh6AFyNdqKP95gwYhNKSbLSPBq7bn",
  "key28": "gp5rHYx4p485YzZPmcpDiHMPQo6kJCmYfjsLgcXc5Nkoc48DwCXea18i9A4dBoU8NBAYrg2FUuPMRjvB3p87Wwv",
  "key29": "58sd4N6Z57UAhHckrCyTMkxK6RenQmMbS2LzM5H19wVvEDut2FTghAk9d9w19g1QkwQpJEPoqp8hysSjKpFBrm5K",
  "key30": "5pQ94ArVxFnZKQjVws4NcRb51fCGdcvm8FPjKtSN59WTdmvu4BB9zzxjwega3z8Nys159mGrDaRpiLHC2fkfYQ55",
  "key31": "237DjZhq9UbcGy8MT2iYwT7AVPFTfssS4stFLCDok5UeVHsGxbxCBuMVoGxJewf776iNdzdcGqSWkjTBd9TD3sVx",
  "key32": "33fsistmwXvayefdEUQcxo4Fc6MJrNcRdCqGkGXgD48tqoyWs3S9ZBN5L2viwUVh7S7CLcnogcNwYCnWoGdnkk7P",
  "key33": "678Kg9sQpYPAjabe3y6nW3HiEaSX1tQQ8H4whbJM51VEqg5doDoYhjTxitGFzZNjmMHGRUuouNmZFaQjJmjLkpX",
  "key34": "3jmHpXLWkbCiBMqLWotUSrit3AbEuMFJ91jmkDJiteG92C2tKpxTDQSqjPNZXffmLQuRvRE6br1uwBTCN4QW25Fe",
  "key35": "3uqADGvCWCyDt1aFidgHjZZcbVscLKTZZHWgbz1uc3sBVKjWVWhXYBqf16rfKBqXd34xkUwuywWG4kKGzNJUsDWx",
  "key36": "Lpfv96Aah41tPaRRXPogF2ywdPEeEUaq8EtfwN5Pmc7UotPi7B2KWBwhWS4y6EvUNyawLKqoTgTARtYm2EJQ3Fn",
  "key37": "pbVQ1xjLwgSoq7pCc2nj4PujNiqW8WBCxbRNiVAUnXHH3XEwm1sJZX3nX3Zk1nnknnzw4E8Pa6MVwhq6Fqciony",
  "key38": "4iMupeCNttw2Dio5SnXvmaL9fJtP9k4DTyeYcJPnrjKZZLrtm8DQ7daDDYnGDz2UpjzNTU5NRuNBJmx3xxZHDndr",
  "key39": "3hGqke3BuDZxJuPZ8MdgZv3q5T2AkDJZMUJ7ScdKDA9WVNHgkgk2btzu5S39996ZN7V7jszj83jviSR4VXU4jxoU",
  "key40": "3MdNn61zZWiA32Wj9T3X9GjAnpbBj2NYr6ApqPfEdXQAcRefZ1YFo34LHdsrtehGHdD13grCWkoMg7Hpv7kSioQP",
  "key41": "5ATcc9bpkyLqm1iVVhcKdyLJuKqUniEQpbc9v8dHdCuoazt9dthtCKg3YPEo9MF8DqVcButVrkhkn322ZgUiYZN1",
  "key42": "53LCqHfRERKp5WPfhhNmPE9BZWFL1yNbeZ6Qu5we6eNF16Y6R33fd1haAkDGHXDG7r6ynrxHGKDbk9SANeG8a96s",
  "key43": "4DnUwoGad2pednQkepFkZThSARK2hfJYrK4unm45BB9xpBrF7vL9KvkEDJNpcDHtZMmdVsVaRf6nDkbRYYgRnrYK",
  "key44": "35fkP5y8BAxiPbyZMuL5uAjTiDpQEWLAHsjWKmgFxWcgdJfsbXFobZaysP2Bu2d2V4veDPjZyXEEewWLFHXQEcah",
  "key45": "5HMr5gCAMWyipi1S4Dbxr4Yvn3GnLWVaAYHq6QeBMPXpFDE2epwFESjasEitMZV3j9QMKwnLTHLxd8BTLQfe1hdb",
  "key46": "uG6oW7ubLKi8impEdZpXxirFGdVGS9BM3XXSbm1oCJcPraN4JCt8d8mcVrX3r1xqvYB77sakBkcxrcaCnPLNAbM",
  "key47": "5beBpRcU4TeuuUH81RzjWBznEnWPsr62dMMiV9N3wz3HqPKJdoUVuMbWEiRmeBW6LZvnPHfSYsJReauTH7ARk24Y"
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
