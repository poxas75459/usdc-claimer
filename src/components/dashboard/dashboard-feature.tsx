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
    "5A7TSimZDU4ktvdTPKzZgcjS6JPxjLLEKkykFtzjgL1j6mjYtQ1mp1LJkUPh9GzBjmcK31vLiPxZJvRiAdJ57zmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61QEe9sZCDqKKN25MUnq66WVTJ15RNVgLHKEPrGyZVchhdMQ9TRNn6egSke5oqM1uwknBZToNJbj7MG4tdS3cFaZ",
  "key1": "3t66rD7Bkfhu79Fbo53CEZeH25VwNKQDYi4UZkhpBx1xmNJj3jnN1ooXxzBsQXDnKYzqiaBxApH4dzLWqPkUn9qG",
  "key2": "286QZCfoHRNagtVZrvjERQRQq4fooEB1qN39UcwdhJ2vhkas1B2Xwa8qPpxuqE8ydx7p8qQzG3FpQHXvgbeGNoBT",
  "key3": "3q2e7d5DTv25EPB5tUDCwHmyaWeJyGCVAg6U97yvE5pR21EB9RVHWjMuGAixV5vZbqU6mP4fJf47LGGCoaQfNjjM",
  "key4": "5VbUReqMrMPih9rdSPrmdNGJMYYpksdLyTNGbCcsyDkC7GjsBvyZyDgNHnyrYVsdQZeGAkQLqbiFPjRiTyocDGL4",
  "key5": "43SuxYhAxuwzMertYAzdxX4p1fGAm8NJTA8JA4Rhtq9qUcExCC7APm9Md4KPthNXhU9SvZnxvF2WLUdXzhXWRgzQ",
  "key6": "4C1C4RE6Fkxp3KbAedJGLX2dBc1fyV8Ab22JQjnBQuxhrE7DfkyWYHgqX1sez1vrJZrMZKNpmrZWUU322XmbF5u7",
  "key7": "2zQEboGgQgqwqbP7BBDFcSEn3Yv6zE2cDj1dCoPzXiguojb9UmbuouuPp71rKviCwSGqRu9BYyrqMvpet4w4xCcS",
  "key8": "2yxTS48ietaSxeDW8kE6MGALoqVZHYkVkNY8giiuPXGTeZ6voj27MyLCvvmTswojWw5h7oeeFbVP3N5Wz7y6wwJM",
  "key9": "SyzJxijFp43Z1XnvcCQ3PPZXWZXPWnaYCmA7dSMygbZiug6UQiDud6fUPRUBsFwnzJk2eQHUwcWbU8rbK9Djyok",
  "key10": "4o8NxXAASoCd1oPXRvramQ5fPbUwGgsTuoxDtAiFfq2VsNtFHL4RU3S2T9i6Vyg1iSfY81RVLB4MomyWhMoCKb9D",
  "key11": "4cMpr4ywVHREa3pNZR7ZVDGGwbinLgjGw1FdK97VSnDC6E8Tb6ZeWWwHxWEdEKew8SzVehca3NV8JqNNs4veKqSx",
  "key12": "XJJXEwSfiU6RkzUknkeUeS1ZCJZSaGbFqCqvFtZi6toLXrxLbdGh9nS7ymRspS5wuYMBuBRSNEr6QdM4RXcnhDj",
  "key13": "442WyzX18j9qHWUr3QMFo8SdVS2Z2UF3Rytzo9LeBK2UWJmaiddDDMAnqz6SPvGamkfFRXFqxGjVTW8DzZFZaXL4",
  "key14": "4xUvYCD9QRZaRLEdV8ohBz5EJxny5f4qgDjqpNE7HCrD9xZWxJob4nTyCXRai6oCkb4zz5JoCMjHHvSJr9e3bH9b",
  "key15": "3xiFmUBWzv7VExHhu24QEipb6vTRJc1SpAiUhGQ4eTSfQyaC2iwFV45Nwoz8Gbna5TbujbZJWqstEeKSdiZmpkSh",
  "key16": "3dwyDPsxJuWYSyGCcrc8negETwuT16KPLJmCM7y9dJRu4jP4ugMA74Jpf4KpRARQZDyGsDe1v33SrrXtFznZamfV",
  "key17": "51jsgzVoEwjX7ATk2UZHTkXeQVHsGuDYKWTjbgUVm6GL6R2L5Jjkty1GsngBHwn98Ru6CUdsC6VHinz5tbjZ2wqe",
  "key18": "4viVPCRnAbDwS25PsgnH8Utv2UomFwUZE4VLfdjBu4YXGwJQBj67vEaoQ9R6PEkfeM6sNCspe9dkXWNsemMUS1QL",
  "key19": "bTU2rQLkTMFGh3k5Jm9xivi6FotbyskN4Mm39TYZKkp9gqh48f67Pt11tJRjfj34XqXYMGhdNaVPYNiYaQYaWJA",
  "key20": "3bnjtCnPTjecu4oLAUXik7qLDYxr2yz416wHaBpYu1CmVDiSKX9gtt4TnnK5DNpaTmaLwe7QTsLDpcathSojcCfC",
  "key21": "3FTHRWYWrKZUsxhJZyfJWDKA3HwJhjWSmBbhZyEsV9iS8pQiHsskGRvxHpZHMwkVeWf8W2GyLWcntcWLpHD4ux7C",
  "key22": "EwSHRXvchd9hYQodK7hZQF9uGgnnuMS5eVTA8GRwGvwhJdTXZY7JPSzhSUW33wN3XaYFADh9YjRFa79hTqT1pC7",
  "key23": "5D3RwCA9pf78emkG1wqHx2NdYDaaAioX5dCRx8Dbs9uM8QP4BJBvitNd8PUgYSmjBZSFxMDJJYh1FcQbsav8Wt1",
  "key24": "2NacaicvRNCoUriUfEnu4vuemRTyPc7SXPHkRu8WoosmLFNfR9wfDqf3wNEbre6L98fzvfCN7ixGaXVBkgvRFqbu",
  "key25": "EiAGDr7owKxWhSLpzXXD6d6nkNF3NSgQQf2ERUQT2KUms1PmNYgJY8AjrQ5yokJ7okFtNPsiM7QTmCQ89N13xW3",
  "key26": "3xtXiRGxrrj1Srwb1DLXAUJNE3CQ8rmUUMYWaLzdK32pLj3G3evDmUpZ927ezAHXpycpCKAGRzLHMXGfkm6kwqBY",
  "key27": "w4aETnzZ34rb5pFSN4cMvuom8G55zL3Ucai2iEzptZ8ofMx8WnqAYWfmNPvqj8xHCfRuvjwry3ZzjSCvp5HykCM",
  "key28": "Zng2cXsNn8LUTCdFExtqWJXQCksPN5HPTbpi9yS6boc23U5EAMKSjTfc1m9AwHqJwGk2JrzQnsWFGNCmAtdwiy5",
  "key29": "4eK7bDzPMWgNx2nekquMDhunS5hUQBsGgzfuh9L46g4t1J8ftCW3nYY41MjftMzZH2GiusJi8KGJ34tH96GbwXMo",
  "key30": "3zcjG2iuxr1YJkUzLcoeWPXY42Y3WVaCHouFvvWoABzU6Pv8CNSvz5vYv6PStq4prswFUTcmVcLWo78EPqiju8a4",
  "key31": "n3eAn2UoDcdFG8xXuu2pGP4jQD8pEXCHATF64pabSK8U5YCXRLpbWb9TXc88HpP59cWG3DX5kA8fjVuFcTCnsMP",
  "key32": "58YRiXBmVJPWNxpQdu7UTPmTGk2tTyZmgXL4Yje7f7R3fiyuQyvzaBpJgfgX8ttT3zTr9ZMAKWGHserdZoN9qZCX",
  "key33": "Lk2P7iwHcdg5fMUAm7WAio26LAo1txuuyUhKSfvbEzxAuxjgApyeguQxuFaV7t71aTEJwMowPea8iDc8p1XAX7J",
  "key34": "4u6PYL1V6RuxdtoE45nvZEbfbt9pGrBcgFUzLjaRnFiL54d667XjpW377BGwJw894DbHyZMVzjhCLyp2VY5wxXnz",
  "key35": "4nrtnKhtpAT5ZceQC1GB4aaj7oSLA9q9vKM5HS1ZpVnhY8Mkm1VwvpmHFvVBQZQkyknqjwVrD1BjtpnmXRsRGj1A",
  "key36": "5AHFTWG2HvYgmiMcf6qgieYD2g9oMVZQLCvHbszozCrRKttjfxhRvm6b323eeWGuEjdGbZG3y3ogTA1MH7vHnnMs",
  "key37": "3evsHLp977og3AMVRJS7WQ6TBeYHHZNd37SypgSYoM2n6xQbX6rmRyCSdrUvLHLjUZokmia2YLGktv337Tmmu9NV",
  "key38": "5MjwohzfuuncwhA9V3W9yE6kkMiRCRoddzG2cMeVkGxktxbME52Gm5gXYeRqGntJu12LZB9Sdr6SakhLkDaobW4W",
  "key39": "49EaLbR3BDeKwc6HVjweUpgGezBccmkbsjz6spjEcNfNg8E6sHrSzHFPRouCyWiS9vnqEFDpPhtknRPNE1vGgvE2",
  "key40": "KWxa54xnVFHnPmVoLbxct5u2isZmpSjqJRB5EDVvr23rVpnWS3TzNti6YWj2BVCNnbATt4M4nraLcRkQJ5RVcE7",
  "key41": "3qPgVmNorz5jynts2qRehf8etcD9eHU75DfSNffB6CcMdSkxURWJpYmTgizNyxciPhcyb4kWGC9brqY6ctovJKtu",
  "key42": "3tFTVhL148H31DMHVzaf5jksZePxtvpfXtvKHrWXxeuYqwMb9oKeFK9JzTziE8gVqPoSrF7sxt7wJyWUDUC2xQVC"
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
