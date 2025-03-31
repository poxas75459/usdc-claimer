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
    "Q8BAfDGfcD7MZUNxMZZAUNreykQJUbUnCY9yosZgyZnTj4LoWtuccdQyMuy356hGqcWMWD9wrTkoiW8BgFApgjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WX7ATeyjDf9grg1LzHtEg1ZFqXBUiX1dYtPv553YXKoKnufzcLKWuFuLdxiEQkBHM7CwzgxwnKK9ZDZPs8ePrXC",
  "key1": "3RqYCNGiM4QsR5ceAuWjzBEH1ri56U7EHfMMYvhGRGpdMdDjSvGCxnP2zZnJMEo3WGzBNwg2PLp2PSNMxz1pBwa3",
  "key2": "3rNwERC4hSmAVpcjHdkRFKCYe3wf15f7MWULRvVP61rhUf94Ks2MpLu2ge7fqzrQADBhuskTw4nTSEGYZVSF6Ke1",
  "key3": "4EbyvSz9hGSzxaepor7oku7cNJowVz2NrRBFy7iR3bVXB154bR1m4x2NGEWT9uLvo1wi11ALR6ysKsuTrZXMn6K",
  "key4": "3bQ2tt8rGVwCEJ52fDZNbfr38tNASuogSUawzejtntCaTeF3n3TguPzH8V8ZxYo4SK3w4H8Pc7cYXNPCBqqhnRL",
  "key5": "59xUYodkeTVYC3EykyT661GMfjeY26N7NhLk1vhRkcztbXpNsALkaR3bTrcDuqYnQQQGrqEcYfwmMAKsrhWPZQqP",
  "key6": "3UiuLhanQpwpYjgu14eYwq9cEZvbwK7GSHEvS31GniKaVZhfSUFxMCw3bJzSugh3dj33UjiWMstHNweAkUXapTAz",
  "key7": "4G1mrknLgjQYSqXS3bDaFZGpm67fj1HA6F5n6j24kfPAy37ewVZ3Zvy2abP9Vbrj4MMVfXXi54UnD6M17jEv7p9j",
  "key8": "3LUcZJ7Gd9tBnwzhYdB8yKMS9MjJDPx6TcSTeR63hPfTPDuPp9bpMxjJuVgQm2jexaxnkJxnYqLtWbFLcXz5teUq",
  "key9": "5UFX3DejFXpxkDmmSR1gJUzVEPzwJk6k33us3hKyK5zjM9s8261s8fv1nM56H44MQqQYhMSEPJwYEHTrAjVmbdLP",
  "key10": "4DPoCGzB9YMuxe7TYpyoCoansqcvNym9Ef7xCR5sPwVhUrrmR8VXSdBDHxpzc5HqT5epBinwc83v71FmHH2Ty64E",
  "key11": "Mwz5pcC4ayDNkoygtXa67KdVespB4U8TfjFScQ7jnxcDS3yTK9hLDiAUZ4cYAYw4FoJMYcwnMGxUTY1MbZxLHaL",
  "key12": "2XvUmw2KFsGHv4HCXKzmtb554PzkHMFPvsDj5ngrEhcjkcmrN5ZEgpxtBCmhnr7RCA16hg7rVBbDTKFyeEMq6Vua",
  "key13": "2fRPjDd6dyyj9kB2vVKS1iX9A3NiJV8da4Yp33kzNHQERYELrGr25GQQ9Norx3eba9jKCU4rEdRRd9A4G98d6bUC",
  "key14": "5T7dawhecQkiLXVzCdGkaFA7zAUokCZfbzCQ6ufv1oZa96xWTL6uLmra9gisGWyECj5Gk4xDBVUAJD2jNFvkiknf",
  "key15": "36HzZmoH6or6eq6Zh5sWa7yJxs3FPNBL5yQnpNC7eQFTW5Ka7Mzjez34EPBae2BuFCe8xecVwr1j9hHiRmdVbFHD",
  "key16": "61zRoV7T6FkgJJ1aVgox3HzjDzUfqkNM2ZY5tR1Rfn5xRfdGL6RPVQkpAh82gpVKpwKXneQtxwPEHxSdNWQtxKrw",
  "key17": "HtLVXcaibCuY3a3qnPHBZgNHhd7cbq5DfdFmvTV7ziRQYuEri3o7F9YXpqBY8XZvX1PYunawoKBvhXoe4Wdn6ja",
  "key18": "2kgz7gQ1Cx7p8wdMMoiJ4C5ZBEKxAXxQX82neyb5tzYGjVqC9jpBoUxyVjmPNZ3EhscVZTFCpfa7EecCJSGu4btE",
  "key19": "7CQsopQwgPSoswe2UanSBeuxUjz6LBaHf3dQ8Uk57hQqN9EQNDLprUjkR8EXpiZKRti7oLU75e4sgGVgNUxSpRx",
  "key20": "3tRboEntYmeSNobRt2bJR7ZjhY8DavXLrQXSnis7yX6UUHRpNPustEgzBFgEmmNcM5dZJsGFVisu52j9tFkwa5dz",
  "key21": "4rUeP8KkQDJhn95W5MTWeyj5VTE56LBk8q3E1SSyARHEmpStoNopYf1WTTV36LRGzkgqqaFjjbFwFxyVvvRdroE1",
  "key22": "5s57JDX6fsFzxHUGtTCV9pxzwCRDW1NS7mHZYPmG9mJEKUx3UdiSHi6aKBkvJ8fSTUzGSm6wZ6sqNUZn76SMRPKG",
  "key23": "4M7NSFiT9DsoPPJXFZqS471uksF9wW7XVYNmpAcQSffXG5zzc62i3YumzELnPYZq1mpurRYnV6ZzqK3dxrnfjVEF",
  "key24": "66yssaB3TbUtqVdm2fHCHbMnacgcQd7ymQqCqKnvc9RuBdK3JoAnukYerjiTAn7i1fmZFX97UPh5TnRcP6AGYvii",
  "key25": "5XwnimxSexudSUunk6ypdku5PMpe3XqKSBtpBSPxEufHoXMk9eWnuWB6SaBLzhgMyhTwKt5E2fDeS39LQpqGZNP",
  "key26": "4f9b4ENRA4aYJHsadwgVK4ZMFJEGdjGHnZPkMd2J69D2hBtWhjPGP21uodH8t43y5zcRVPD3vJEzEbdHDEz1Jx2o",
  "key27": "528jjKVcHJQQfjQwPH6TJQmHnLzxJXinX4fYabPTChP3fB47VKeV2pKQryV1TcLbRBaHuPWgcMiSYcNbBe35Ev71",
  "key28": "61qAVyRCYiWmr7weSYz7JUdjg5Wqyc9vHS88htJQN1ZfFqmtYa7WfABhrVAS8cJv1fGGVxPsqoJdGvy7pC6pP7td",
  "key29": "2NUqJaYG8sbnBwyB5zmUoaBp1sBrhdUzQnJ1i8K87WP5J32Cfgx66FnavsgU2E72NHD1Qw4cGPVR3Sp5qo6nSJH3",
  "key30": "2HvDXyNUeYGPzzMd6SSmLsccbGUiW23vD4RRZQ5YPbn86YnhCQ1qTg4zT3P7Nw3ZXim8Hzv9HAdSHFe4VoQjSHUj",
  "key31": "3r9MZUZNg39gT5iYMuasL5Sh23zLmNsERVMjQpKgu8x1cg27HVPT3rcMsPP3BAwwoMN1BwfGbxne6obqGk7UAR37",
  "key32": "pS4SpuJ4VTTxyCQs4TG8LFN4Pv5iAryob2FZq5CxLHasKFsdzbMG3KwShajRqi2Mh9dMHEUCTUJwHF48qtLhyGV",
  "key33": "311DvMYgE5zCqoPL4Tmk64bJbBe3w2L1nRGX6teF2saNZtdYi95zLK5RmHyMXRRdTNyGCpmxcawCsHHHnz6618Me",
  "key34": "5AGTppZn53KPMvG97M8nxhfytXr3gC1qDa93Fo8UXzSiuqXPtYMpBQcu6Swcc1o31couNAbj3XVLrC9NkBhqt8Pa",
  "key35": "2GsLiCUuG2zbNfKmg8X4H684dUsJ7rhqorA4kEb4nmfd41R1ja27oMEc5muMqk8gYHoLZ9DzPbXXiWvZy2wRN5R3",
  "key36": "54Hvm6f9wUYwN3KU1opmxL8GeoSxpNyufNA2A6Acyid16dDwy84vebFvvt9m4NMqiKtvEU4nJktUMPDwB1Ku7UQ4",
  "key37": "476eL9oYfKyat3qLp7ArpHg7MwoY3GGPkReHpTWzNHqdmZXGAkKFra3ohdvgxk4RgmNTVsPpJx4XVzHefX8m8sq5",
  "key38": "5uyfQYLDropS1ke5GzzqHdLnaU3m8hAvyfjXffe4K6a9T1pmhuJTZJ2NMXr75W5RVcS2uq3Fpc6rMWxhyAvPvK7L",
  "key39": "5gxNjCtq4c2a4mhAekxbfNvS9MhC5VwcmY4FgQodxhFqnF9F7qT2VhPLF4wRRzFvEpKDFVVyU8pWFJcjzMDqVUkB",
  "key40": "47DzeLe2TsWm6uzTFrupi6Nw7qQRreAtaxwh5gChngcukrU3dgpMCuaJsqbBmz8paWciEzJG6L1VsqyndpdSjtCi",
  "key41": "2bXycGUNtFG4agEPNqXnkWWhGDj8b7KvaMc7cFL72JPhHu65rM9iN9VqJSPxF9x8eufaNPEunkggc6Xim5oFqFD7",
  "key42": "5h2MRTA6hWAC1SRqmE7m5HaZSAWFJhds5fjQUEoFSH312fjx7MLLTk5oYQCJJ6eessNrooSoux1wkVJdDeThFvBA",
  "key43": "3FX6C27CQCZiKAq2PE2GAjNFVSfQnNq3QhNFf1TnV4cunSyidHLeEDAEHmP6QNvhyUy6bYPY2M1JkpYJBpCi6oeq",
  "key44": "2dGi1tbfEJgHZbWQQQPKixYDua7RSgan4BtinFiLu9MhGLGS9G6peGc8BvtsEZzfGnE3U6Df4PFbPVfPnc1tjoFE",
  "key45": "3gBh6htik6qqHvkw9MULT7h2RwUHNkRGZgtNxtAy7qXvriSGDZUtD3iaR9fsK27F8xk6dRW9nvPZPAQaGcTb1PAE",
  "key46": "r1dJv5uJBN4AujJcsdU2EzoCGer5hBSFAPpzc3ZZEC1aM93QMxphijPgSjokyhkyrNgi1dC4DFF78a87mGjj7BC"
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
