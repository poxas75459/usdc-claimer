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
    "FBCVTDG3zUjvcSp12iMVnK8CVGde8xeqpck8kkf4vYznmvcey8wVcsNYMjAjsusE6SHdUzDxhtUm7SUQh68iSD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f6v6UoTKsNJYRp6oYyDwv3f6rP7rxVMr9RpHXm1kA6sqTN1mdZX4MTRuC4TT1WmVbqupKQ8diEVonn3PbvuQZNh",
  "key1": "2Ti7n3zHRuErdMa3ubuWQrBakPXWfBL2v42u78ZtfyUEhPLsS5pBXrEpTMXZPSLHafLGd5WCB98aP6tCYVdxAqJ2",
  "key2": "XNUSY7j6EPDcp6CGRdCUufKXaD43spZQQXLM2eu38cbUjBLuCffkg21Kro9i95PFtxNA1UZJGEuh9sSwnQ66fMk",
  "key3": "4ZfUVsfVEPWZyhgGFdatvo7TvtnSPcxfTAg5KbzYAj4QwZ6vruihfgTKkD11gHnvqMEmcUCGS93zt6QaXbSyRL7N",
  "key4": "2vsFMAhzz7QpPgcXqB1UsEz3EuLcSrxnAe5Kd8EHe39cuE9sUns2hoa3pan2mL6X3KTXvyUvDqCK7FwkiteFrQuV",
  "key5": "DPB6qXnnaohWFaKGnJ3kx8pntp6bGAGSXySGEhCe88y4bwjquvXof9G8LuDDs7oosKRqNqoEYks9CD8wyJFLi8w",
  "key6": "5VLewitJYsKbEByPSyAaX1JwujKfpRZQAPWkvJ3NgwpDbqHARAZdno6YnZmjLSkDKnDZDaY2Qa7kXVUejUuvMWMz",
  "key7": "RHqa9rqEkbT5s8UGGdsUwzUUE4586A1UunLtgyoCbHX3ZQUC1UKuP3QVqo2AtrrVwpZBSohtQowM1jwYmUj7NTU",
  "key8": "4VHh1vErW3AQ9KtqVfYyHKhaCk2sBXFwj8vjRv42ApYMd8kTG1TJ96zoNErX5jNF2KTADGkU4mSY3J7FR4dr9agJ",
  "key9": "5n398eTLUG61braeVDLGLaKzWH8esPxzcQAnbo5sCkSd8tHehx3YU5Wo5tRg2QVMtSb7m1Ae1MypH3hTTGEZsX89",
  "key10": "4ZZJFVdLFEkfWwzsrRJG5wsLsb7AhsbbUg4fXebQykmyZA9YFDMUiVxX32JxXECLuGtY5PZ3PegoaL3kvZLgk22x",
  "key11": "5Qa2FsU71cntYngKkgxQ5iuHS3CexhPCcS4ZXroSBFyrhDCE2JzRPWzQESTaVp24tMM6wCYfcDSGTjpKiSxVAbKe",
  "key12": "5wKMBvBXm9BkE17RWzoM9iTMtTW2SXwtxXuJBqTWCuXZBh3twcWjrmryKy5DYqT2WuAk4zjiGfvwi6djTNiagRTz",
  "key13": "2guGprqYRojUNE6aceqiuTpgKtrJoQqTMiYtDHcYKq8XFomt92VmeqoiSY8mfeoBmjK6zDmhbJPL9QJ3fkmrjbZC",
  "key14": "3G8TLzgYVEABHX7J5ANYvNNBTTcKXmohbx7TkV9y9L3ZjoKNGWtP28oohPNP6DWVvD2bqiZHPoTuGe6rtJ2WDo24",
  "key15": "5v5nEREWKEA56Pb6TFVAAPmEV97poC8ENJbpv1L3rs2VCiTqDx9TziaAzxG3xdnKZwKYty6ERAvwkV6jFbP9YBt4",
  "key16": "5683GLPx3gUfTEL6E6oAjkm9Ff3TY8VARw89eQFS181SvSnpGY5kykhVKwCZRiyJeW42koHTxmRzM8PMUa6Rq6XV",
  "key17": "52sQc63jPH9diCNdhSzps6MvByWNnUA88W3kW7NzFsXjSvpj7WuzyApFyC92GERC2BJkN941ZhK7A3sheTAhApcA",
  "key18": "ezqR12pnoeC9VWjVbHzmjZ5VoMTunMBEuoagNCJ4cKXPRRwpPQccSDQutpzvwTE8GNdXi6LqQ9R6R6GVwYXHW2A",
  "key19": "78vtvVyGVJxpiPTYqtjDm2Ee8BiJhMu6HW6jmD937nN5gTMBvgUMbdAgXtHrgh1VLvQ3zcoctCeQXr1RNE9uf1D",
  "key20": "4pr4HavWdxKcvzWaqpkd69GwKfS9BRZhGXhYY8a3iXb4ZQGftFsJypYVccndTSU6nfFJtTB8v87j66iR8MBhGhXb",
  "key21": "4BCJwcCg65M8j7YT117zboeG4pEgFiwCkpWcsxS6zKhK7PpVxqE9uiAh879xaXMdNvY6BzHQakp9GkiJkrzMMQ6B",
  "key22": "3zm1DYpJugnMsSF6gi6w3iv64J7y3xN9MdSkL6b2CrMkDMGyRXXCBNW1Bj3TJMc7HxVEY2XFsQLx6gxtF3Qkpmgs",
  "key23": "4rsXjDout7TFrYFdeHGkfT1V3aaTbGbGcsLDdLbHhBjKL9BjQnEahpqmwxT9W6TkAwGww2UqHeQ6PFNAXazT2eaU",
  "key24": "tvGbow26yZyxdCxriZroS1k2kiDhuMwAizUMiwoutiY6iHAaU9bwZKNfG7WpcmHZ96bzfREdEYRabQr4yuVZEZ7",
  "key25": "a2A4VEuWmA3kuepYe34Mfr8h4QmQ9FCGrPwwMcFYdSpASxVsEsfFAArNojfpPcwdL342QFZHJKgsAQsaujN4Piw",
  "key26": "Cc36CQ7JmJbFa23SLp4UU43LsZAnXooFZtjXnD7ZUbUAjr9R6gz7scwBY6cpmo8JcWeSGCSkhB7NPA3ieb3dQrB",
  "key27": "3fLPfTkcFfG9MG2MgoBGsdkPJPAzFmGb6rqmWkGAaoytLNiNGVjvbFdmKojNGqiNkdDT5TDsmtr91npUiu7y5Jaj",
  "key28": "Bew9YQaLA4KE8kUgFzyEg8oiMaWh9Ef8XgrHkL5YFtwsNVTz622dbAeJheLrBiFuKxkEV1A1PuwXkhecproZEhC",
  "key29": "45awjF2F68DB4ohEAKoRLdd6QPqL6Hn321ac2gpLAPKA1foUBmVMdMEGBGdmyZDv9BzqQMSi5zBNsJ7THLiKLscr",
  "key30": "2gkbxG9VaYtPunQc73pMSnFBCgebCYGgY3ZEBfGGgrPndjUMsoH5p6D84LtRiBxHohkEWwfAV1G6zp8YvAkKGQ37"
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
