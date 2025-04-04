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
    "2AW2SupJ5pHNCBLkYNYudno2TAFcAFGKCoVrVeQUv73pC6enxymZBQtwTQQsoufK98siTBo2ijAD8KkZNofaAFCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TWAhQgS7nZkCK11gYJZb2v6ASNJoLgQsBedNTuQjQuxRaRkmNBFu7fEiM2wg2SzXJaX6ccVVNPyqJpa4KcTzHhs",
  "key1": "5osSz6gmca5PykV2BspyLQbp916XQBmep7D2131bhXPXnK5mTgCAfxkQhPidydPFFw9jcGcbxyAhiuyJXzPuRZz9",
  "key2": "Fs38A5ess59ygDmewNmnfDZgEmM5byM1zzBSvfkn9YUHbDMhyw2T8TsUZLMdsLi8fJYiuXHtiS8ooQvEVfJCY4b",
  "key3": "Mn1SenMw4xFjNsto4cNyxF9EqM3w6AAUBNha4dZc5MFD3GmdUCSEX1Lo2DM5AAinCmaMoT69Q4FBT3wSFHXC1WG",
  "key4": "4xc34aUrsqkUrppasJLntwGPqdiWRWW6JWzx69eyrNhad8pukKM865jSaRQAmaxZNmFi3uUroq972ojV1V1Ly5Ak",
  "key5": "5QTnHE9ZePAhTc4rki2LH7vv1GPbdvS4RkGYwD7JhY2QvLvsxAagM7SeP7ZQBu7mjzNZb8qHhxQj9MU7KRhgmzJ1",
  "key6": "4aWuM3D8jjtqFFNoVHNDxr4QL9FD5bnG7gEtYxRJeNyT4Zi8epRuYojt5HxF2kyrTgH2BBRgJHNpMdUTEmovwaVH",
  "key7": "4yJwiKyMaC7UqbaERwhVxrXJhcBVaF2mSVoUwt7Z2bsjqxXs8uTXTqg3mUojXq39wqdfXCbBeQK1YnvSGg55KTnD",
  "key8": "21dp6PcVtNTVgDiuaHLsvxsVnhPUuFtGdjYpXMWXTSg9rguz7Pm1maZgWdfPgVo9uTrd1g19UiU8G9vFQHGSqDAQ",
  "key9": "5v59fXU2dXKQtGzqXDrD2hNzqSZV4pu9axyteuLhY8LQAUXr39FmuEY8zC1VTzz4bpkBppBveg5KzNB6pkCZXum8",
  "key10": "4xP4yccVDANLDYFMAppsPcMvjKTzPUbtEb1YH5tYQVuihXtxRKjNmEoPEBRpHqhtyCuyJXVpnt259pBCqjNjaT2X",
  "key11": "3XbsMnHDN8ha3spPFnutZxLYpfdQic83LDXkX96T3V2b7e6YcjMkboGiT1zp2qyDUs6niC3E1Ypn7StmUtY7wjho",
  "key12": "2b8PkFxmLWpT9KtecikEWBrGyURQjaBWzSzKasiJRTwmUHELF3FmM4MDi2vdj2h7XQbwPwtLEfpU8nAe3qDjWmmP",
  "key13": "3TizijBpepVsPcJAawKpb9iyrU89GpLVDHN4M88xF6RKRqut9fZCYt5JyG2Wue4qB9jUdaj61BcPo9ZJJQpKzst4",
  "key14": "2tBULUEto66MasFKkKZwXb5XLmRS2ebw1dALGBLQC7zkJhY8cvKkF2yVAsRaEqJevm4z1coTWMN9cDFGJ8cpbXQ2",
  "key15": "2TS7r1mVGqYaWrjL4fPSwki4cWUAptAZXAgKKks8XMczacHBGmUif3yA5WyF5apvpE4ChpdQQkEoy2smzyvWXGTH",
  "key16": "3VBgQ7GQhKo5oFnY9CoXCJQEAqHJytnD2GX9C8BxkP6prMwRPuCABGGrV7s5dNWr2Z6DGg7r8FYnqopUAzfdhZE2",
  "key17": "4aweGmez1U4Wgr7mgFyCTobCmrEf4u39sQ6ZuomGstbygJPhFjNj25e6CqLtReWxbUscMqsZrWspcKKLYNHbRJBa",
  "key18": "7GLTXFjiJgT1hA8PXkY6JXKADVcSeaeDfeD15PZyxnVonFzEa3LS9he586SErTKaGZSh3gMRc5H77ejnjpy5Xvz",
  "key19": "4RXrYebvZuhcvf67FtcyUeK82Bxh8cuLkPhRBGnBAJLY3hSMmXFLXTCVJa8mY5U4V6eY859Hy4ASt8QK1nBkLBKF",
  "key20": "D2g2yYUKxCnKGEyXXjgmn2bCqdiZApyGYgfJd1XJKg2tVb7A15bJio1xNtfQSA7KBuaeLbheUyj7HU8aaeWU6rH",
  "key21": "2oJXM9P1ozELdGJLbLA22hPf8GcqcmLq2hynysTXATRnBgZQ4uJgBW4TxnGPubp6LGSMSDGvry6G2XsjSo9qkHKT",
  "key22": "31VnzTjRbvbWkqxf6Zn2UZxRXkdbxdzkGossw9n8ESTvJUxPwiYwZYeE93QkDyz1s6RkcCtahccQojHzyqDnZr8S",
  "key23": "5VhqVaJPhs93iLpaY3gVeNtWqtH5uT3As3eAmvR6oQ5XiA3gwzLCbQ1ZoR1JKoM5z8zFHgS5od94TkXLAjff7unQ",
  "key24": "5EJTpm9nQ8qUc7dCxtW8BKSDHhgQmFajEZe9Rz4fskV5MyzmNyEXTTgSVjQ7ch8RNKheCwFdbieuiJ8enqVGKtbY",
  "key25": "gss1dStm8AZrf2hgMRT58x3G86uoK9rHuN3RF2RGCFA5uYZroeGWgbr1oYkvSWipUcNsGEnUV29yuAnW6FRv66P",
  "key26": "5AgsZE9Ni5XhNKxVAhUyvr6JZVe8wgVmdMhuFD8B7B8AUSMDZANCFxKD81Y3DAgRQ7sUhiqZcsxxkAnjZbpj3dpg",
  "key27": "23Np5Y3Xe8d63FipWyJiDw2oZ3vs2Fqgdb8BFiCCb9ouo8D54MT8thNfjD5dCtowbB9TsrVYTFaCwTgFjCWTHFem",
  "key28": "3MAXsp4LxN4T8ko3uqFCyTU7HFgTBL72z3buMZxjf7NhRSo76GWbbijv1DQixZt65X4ueuYXd4p93po5WpgEFKpT",
  "key29": "3h9a3N95gbRQvvJsCr1K3LykxE2oL4te6u6izHLPfmAs5jhNptD6pscyKcf37LdMVMWnVSGwRyaakvmYoYK4ir24",
  "key30": "4waGfQt4oVNNHBcn5U2kcLZp3s8B4MWDHmbW5D5uf9WFrXkFg3ecTG1Pp9e9J6S45KE6XrSb48WP2tQG9XNGvS9C",
  "key31": "2QScH5Dnfq6K6rPNdedecERRfFwdVWvL7a2ChBasKmaXCtP6P82yZMQwczMZpxvzXmXwKfj5ZmKREQs6qStQnZ7c",
  "key32": "3VTh3pKRxRep7E5Ytcs2G229ZMQ5d3n9Tg4S14xGJdrci6MsMAYfpGefDqmWoeY2mSFTXLoXBojbwRzrqPXdmgLx",
  "key33": "5WWTDJEYkc8fvz4MLBuQcdB9M41JBF8GFgVXV9Dw7XtiYW4xsDgDNM8pbzNWXnsyWrLbUgBZTXwBXPiZ8BfFMpGg",
  "key34": "oJ9r4udxfE5XnukNq2BMrXBsUcu1myBqvDTTrPWDrsJQcovZaafCkoy29hu7NCNKSYpFt64pGsr7jr7jP6YbjCx",
  "key35": "3E9qKwpZDk4KB2X591sSWhArroaaeetzCaty8u27ZECDJCKVHMB4nCYmaFFwRiyWiUYwwVv7CyPNcycQ2e1yEMxu",
  "key36": "25PXH3YNkpNF6axoPKuPb7ew2Y3Tu5rBD1vPpQEFALS9wycMfvktrFmQi1hjgQ7FMask25dqu2K8vZJZ8iHbv8iP",
  "key37": "2FsQbQFFPF73Z7nVpCrr5xGTyaxZL8EdAFdLpALS2Fmg5LHTTxTKuQ74ce2TTuDF8oved7qttpkrocYXigG6xcBz",
  "key38": "4ryxJdLdK7TcEc8AjvfRF3nTzNFcc9HLC17Sayjaherq8bXrdzqt5GXq3fAtyLjN4EyWzkoDHQ4VoHHbUpB1LQEB",
  "key39": "3aQ6mvRspp8FmVNcUYimM9MygqRv8YbofxL4Q6CMwaQRKRVRpA1GHX3UbYNg5o1pBQB8HsGVtnS9K7uHCNB4S8Yy",
  "key40": "59a2XFib7GFgnzhtkaLBi4SWnEJnocvAu63HqbcmoWrCFARm1gMPDVPy9cNEoj264ceGcmc9SvMrSSvUSFj3SVhj",
  "key41": "2nvGNia2fYRxgWdAyAj2GtLL4rk6cbd6FynB8LEyiAdKNoTFh6BvYeWWNGFYMafaamKRZxzKgR7UyHN6iZcHCqmL",
  "key42": "wVFqzHnhC7d1NwmVyTpaf1o4XYdnsum42Lz1pA6FQfeexhCkWtSJSquUfrNctx3x7Lb1EV2ApdEw9CV5UqWodsQ"
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
