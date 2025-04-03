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
    "5B9ifV1SzgZ6DwUhAeRofv7V3Q4Cwkg25GuSRXvNxDsJzbzMmU12ECcooR8ETUoUVfXKu3oC98S1zq1zsbbaMxnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UnpDLfCB4nECNLpLo3eAz2GtSq3k6W4i8xdbKRjAbgGfNYBKz4z2MUDC184jNRhVAbiP4nPpRhmPpgsLBQeXdcK",
  "key1": "H85LAkqnb9kVk7m29SptAsoFge2Z3B7Ctm2VW5oAJEEfgRXsdp6ywKiiQZ3ykLJX9ceMMY4pzMoGc8kAJXB3HPP",
  "key2": "61DzhC7SGTfZx5V8nW9rzAyPWcWN2GJP2SVb7rk4zkGLqotBsAqXKZcfxucNmoQ3s5gXHAmDX3LhLgN1Jzxpb1EC",
  "key3": "4JpYNzQUfibpYauY8cDwxPr5s7sh1WRSfdm9zhL7f6xS8bGL27oCwRqhTHu5BCcc72jNgxxV1eM6cSXt27NuPbiZ",
  "key4": "2rKGU6dqoecrd1WQHkxqnDFoGc89kNZCPaSzZndo7zKVPX18w2ePzGMEnFBNgi5JEJDwC9VrPwWGXjmXq9AjBEFw",
  "key5": "456BZYiL75umSHWsCLALods8Mo3zCNxn2gJmDXZAMRveuRRWsrXQHfEZyGbbQgC4htDVegPJ1R5TFf3UuzZHahQF",
  "key6": "313VaWk9ML1aQDtr9hNWhP3oxgR3S5fQEczbMVauomD7C7CGZi77KCqGJ584AvHZddLtxpxzPQyL5inivCs2zC9U",
  "key7": "3MmFTbpsKQovpdZNXdnqJHXiXi4wwpjTGLwzVM2htXFMCh9vRnWu9Yvasvxc5LBhPQLTBLNxE53fdWyJpZrjqGqn",
  "key8": "2JNX9r5KyuwsmrrKFKUSfBHykRKrucyKCdfxTrie78WvhsJiKgiqiu9BfjVnkNg2r53dztLJdWoMEg55Z3kKL9fi",
  "key9": "3RZeYdu5kZVx4WYechX9U3AZybUukEd7c7EiP6m5DUctLzTGSKpcVkzzm2pyf5eod5JCcaegvch14qPQtZpcfJG2",
  "key10": "56boN7rZBLmZU5Zyd8qm9RtrY36GgCAG5uJUFe4KuiBn3r3wDk5WW7tBkyWwQz1LbPQLzcE4RyHE3doNC4Kh7xt8",
  "key11": "Z5HhFBVEsCmgmhEN3Ew77LXp9e2pFz6RNPXmVR17FNTyhoi17yrrGz2rCmhZAarggh8tabRJstrZhb15VfcazoT",
  "key12": "3YuErv6vab5cvnnGa35whPXb6HZHXMuArNFsuzY6uusoyFLPX49MPi2oiBKT4qXAcnwuq2H9DTYXbhbt1fyyVkSL",
  "key13": "2CS9nEXRfE3MYFwNjBW2tLxHK3vq8EJjNvStgYMCHFarag2QUVcvNRVBYyepCFK7ZHXc6Z8RR1Nqq9JxgmFsfBH",
  "key14": "58h3a7NF8gUtNUX7h1tKSaPgXXdPf1nDenZvKWYWxEhE1GdsuzjRX46vCUCpg2Y2xbjY9KXRvsYuwuaWWKhXxqqL",
  "key15": "ds1UVVmfUhxTgV4a2puSq6gsD4v6FTpTu6bHHtKKn3NkTJA6Z4xVa9GAdmjeDpMK79eADNnEgqmgeKe5fRkkx6z",
  "key16": "61iWefRvAhsS4qeei8yPkSfdo44Uxbg1Hb8Gycc7dbciTJHVA859LvZDRgsBybzZwCS6xcdTcQWtQsAGcZZbcq3N",
  "key17": "3LHQzjpzQw6YADWbkZE44aLEtAoxAqBaSy8UL9Q7Ks1eLXqjPX4N2uczQyfL6aHzKoZHAPnnhU2w6H7DyTMgbGQf",
  "key18": "2rSZzrCcfXr6N5CuvNHQbS43eB6HMGvjQRAsdwzQakQVJZAW4TWeGkEaHkNEC4dr25hbqFcHzSVD9ocV2GrsAUny",
  "key19": "3Fwpuz94tG1UYcZDjbg8L7Qqah9wd4yq7NuPKJtY7gPGsHQHqMZSFw2rJmcqXPwWA7v4NtuStAZJRzHAwjw5MdTW",
  "key20": "3AFkvberdTxDwmSi6MDQsEQgPbptDeNUd1ZHXjQYhUm1j1EhVeFBWWY5rt55pyQgoSC3sZQNrDrafWTjZtvNg5J1",
  "key21": "o96NMqNvLe1AEXKqqWpaykiES4nZUtuNKZakXT2kB9bGxUWAtncZhRj7UoEzYuyLx1uam2NAyKu3YB46WZoRkBo",
  "key22": "hVck9UuuLrE61xuRkP99smwFERdSbFVX1Vf3iC8vdqXsjmbHyVPNiwTqN33iyh2eN3ovopyXZeNZmBB1yxWh2ik",
  "key23": "3hRapszgFD3p814DiXBWWXruJvaUDSZRpqD24eYRUoemTKAyiQaV8XK4usCSRtssnsDECTKL2KULZ6th1sB3vHno",
  "key24": "5iMwxhEhae3ZWqgoCYinWFPKUQ9kRT8XuN7iKSwBZzu7jFqeMaJs8bmSMZrZegmankbe3aebyj8Viqc2KM6u1G1V",
  "key25": "4u4PzWTPMKfACheDkStxjgRhkag1q18mDqwS3BFsrewtFS8Th2cVLT6m6TgtJZyRZjtnJoasmnsTZosyW7FwVqdp",
  "key26": "eGMAMeRJYFc1M67GZ5tcgRdn6eaVKWVWTZdqyQtdLTaHyE9i8CyhFVQd5ECnVhq7ok9bG6yntZyztxoLkSwBVfX",
  "key27": "3W4rzwZaz6DYHMc2sdu859scWsh5oJg65ZuM2GHgRzKEvK4zBMtFuE3c12ji5BaxzcyjYYeUFaUcjz6TdRX4E5ob",
  "key28": "Fo3LTMkeFALzsmirt9yKoow5NgUMrnmLdhjTLagp15gqCibCV5zCpLJdSRNG3TRkqbJt9ar86xZKK1gAAmhGdqX",
  "key29": "3jmujmWLwjXUWzEnNGHWaxkdDEvTB9B3DKwRZ3nVvT9sZA5FM1ursrNkSDrdoZVTDoDW4Vwpj3tZHtoLBY1YWomd",
  "key30": "2Lrv5p2pgN3f1YEb58iBvaBpKfvBcmadPsj8CumVZBHfK27i5MkTHazVp7jt2EAD7RBSounp172RcXJAJEeMbiwS",
  "key31": "5wQSGU3iQPHRsb98fkoYMbNBKtjJYL3rXmoMC9aH5HosHz5CXvboUeTfHZDupRkRMCcBCUBCYq8vdKgjxh18T3y7",
  "key32": "5DMuKiCNPbEa4zogVZcT8bY5j23KuEyXCN1mv6aaQe11kHfD98W9KZbAmzJqZPYkJNoD62Fkwu3HPB1DfpSBxEjJ",
  "key33": "4XARjTDoBdcZa2H3DwTBrTHKPBJ6K1xWpG9YeaiKw6EisBKpK4nePASca9jE5ayfo8Yq6NLQhaFfKtswGCqpZaMt",
  "key34": "mRCX8YQB1AmjjqfJihkATCj9qCFhyC1dQz1uHRoC3aYdpwjKMTtcBSzx9hXAcMQYVf4CA5VSYmpcpvoYxK74bgW",
  "key35": "434Cdm56zVAmpTHHqV64gWJChYeKz44Bh7Kn36FgiYJ2P8QbLTNxcuHkFXHZ4YzcBYKRMap5xFwpKGV1jaW4YUca",
  "key36": "5iQv93F7X9XaNYADkneKSyQWeFj3crjdmBknFQbR5hHPhNXsCsYCGrhwi8oBtP3BPS2ryeWP8JexwEq7uj8tZR1H"
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
