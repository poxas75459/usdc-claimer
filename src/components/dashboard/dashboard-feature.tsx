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
    "37mTCtJAPwLmcMPAU7FTGWZLd1buR7KD5UL7f2sAudPr6sAcWP6QHVHVp4QWFPFuDaR1QXeNkbnwYwp6bsHPrTMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pGHky8zutrqs2iMTiaobTYi1DQB5rVomWvf8XFdG2svnm59sSD9hpoXpYP65YtfVjRrodFaRzRoja9QhZWD5931",
  "key1": "5eBkjYewNHi8uLtKBVDRpZPA6dEqAngaG4tVjFEEgivRK5tbYru3RV2xF8r4TMNzKjzcAKje8nu3CepAC1Gqb5ZF",
  "key2": "21e74snPHULvJMhmsrkYegYjrznz7xGUJxrjKHVEfgZhGZaCd7R9ii5QvhTDNyBKYL7hm3cRjZBvSjEKovJuwCAn",
  "key3": "5anYyUPYisrmUhfRYcNCaG61SudNYZZLvPw3qs97KjutyReESe21qKBYR5KRmg2cPG2wY1CrXaMMkXRmAUyU4i8W",
  "key4": "2qpayKZ2or2vStDfGgWYyCDXnPmZhhsBAejb1xtKoJDqURc1aHVs7SV6uKaQSeVk2QVL6FHHj5TAyf51JHndvor6",
  "key5": "4MuwPALzUZoqJ9QzitXzfFSJvXpu9RXNX6RuV7dtRUVcZHE4U8PzSLvjNzUmNw2e1CnAMWfmnHZcooUaWHMZwq87",
  "key6": "3RA6Peq2qNeto2P5gunf9vYBAsezbcWPibcPQvuAUzBJ8bEwmY5zejfTZvWpM8EzazmMAXtWkT4dUnbNnURsADca",
  "key7": "5s7yBYFt1viaB1TEFssEPCy6dcfsSF6ps7Ec5om43aspSD9cqbdiPWafiYhs6rWTFVWEmmSqii19ectbbGwwPyUt",
  "key8": "yKKTMj65rMHzQM1fYRuaWi48aRWGMmzxoVb5oeggr8Td2Pz7XqShQoJJ9hGfkVtPVcxi4Sjp3PwALRYUiGYZ9mE",
  "key9": "2i9orvf6kSixEdiMcLt9DJMipbqMD2B2GzxEbNLZRn3Vfz4r3PkP7CiP4oRnj7dBvZfSX2Rf9grHmMfwQfD2SpZd",
  "key10": "sxdWN5SpQp2LsrruFZy44AoimHxXVSE7FcJYW7jsJCW4uVzidp1Pun5oXru3Hj7ZF2cJHCvp3xxZEgpDiAma3UH",
  "key11": "427zScp6WyimX9HeSAVytrfNMUyUHzrZ268bSVjYoqufC9MwT2mdPWRPZg3NBN3EPcvWSv74jsXqKAqoDfQocEUw",
  "key12": "3LDxUeZXUnJAPBX2n4miTBnVc4S5PXNPeyExhA3y3vZBW5PQgTMuaAUvZr6GNKHLQ5vKSXUQ3zcCKccpZrTgbsMY",
  "key13": "K379diKYddhzY7FwPRTfhMuZQYdcBkGFMM2qestUvSXZxWZ9KPx4zFXRPZsdcjfiLHnE6gWvqkBTxhvZaxDBiYD",
  "key14": "2McUGUS8QRQCUtyU4VNdLQ8VCpQx7ujLLnq6WhVBoYjDqMwop3eekjvfRGi2yj1sZFbjJH2sUcfVuEc3wNwym9UL",
  "key15": "whPV21V41oR6D7kDppZdcQmkbwyjuF91MoQuwDLyFpkrxkAKC2VXcnZEo3YR9ydanGYrbMXHtadcrMwiZZuU473",
  "key16": "5jgja83xgch3BSE6N4xX9edHpaWSATqSg6joRPUVJa4sbF2YVcrB7A54nqT7KqVN5NKrpf1btBP1EC1eqQQsvGsT",
  "key17": "2sGDkxD4i7bSe6vFVbhrmtwCpXr5yBFDZ83BJJ6fp5s9cyBQDxb6eMdi9wb6vTKX3NgUcdmbENxZEF9GSTEyQwqG",
  "key18": "2CSpSeLs7GnRtJDco3Q8Ae7uFbwKDSwYmAZiENcmTZ4WM5EPAKamtsqPFhFNhajcWJhd5W4nKA956mx6u8aeq7uD",
  "key19": "3r865pwyLgkPTxkd2usJvptuVjY1dsh4rVNuzDTVAK7cbfNhf17MNC4iRdPDVRUgG4wANFa3DP8oD5tjgh2nwm5g",
  "key20": "2ywXyUQMpA8YmyfAhCBjCrm5okDY2veUKkF6tQKApX2S8BxpuX5h6eNBj3QC9fXCuTCV1GBYQyXSJwUcLdUE1CD8",
  "key21": "5GpT6rxi7FxN9zUw8ME87tmFBqBorf8mN5DtWUERzWntWDUCUEaEXxDyPJBzXykdeKPNdfFxrNy8nTnVPxfG5W6A",
  "key22": "4goWdUy3HBpkEptQuByaTKZ4qkxP1GbXzw1rS8RPerc4SibNeXEkWCuEVfEWumXDuJDr4yjhBpT4DzmRWBSgeZQ6",
  "key23": "3gUW3tDTE6cwaDZKjxTsgf3D5V2fxWtwLQDaEoprZ9voeP7xy3mGjyfUp6EdnR8B51dLxUNM9BTURoPapLiPnfFP",
  "key24": "4n8FtjdHngAVmohAQVRRoZmtzpqCEDHASLtVUFLAZfQ681wyVehrwGJs7dar9jrgvSUW45xkARgdJNYDhPzEd8jB",
  "key25": "LMwTgAsVSfVwCvwCv6cLXJd44bie4oddBBWCb4EBFwyzhGmbGdmCFW6hvLVxPiwTvQ2P1rvHnRjjeZ52QKUSMu3"
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
