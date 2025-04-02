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
    "3VRPy8VgMucFJTT2GcPTh5MYpnXtnHHCLP1dCs7EJxqs8yqx5rWDxYBh5rjKN18rk8PLsxuvtZQg1vfgYQHzgNM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MGExD7ESDDij28GsC6aoD3pw6huYbBMZS3fpt8xtnh5NFTFB63VyG8kawvKKBWKG8BECSkykAPXzFscCt2Lq6tX",
  "key1": "mv3DD875zpniF3GJKmcQVzr8niUwzPXAYuMASZqm1Xr9NTYUXJ2DDTThYLDuxvwqvkCgE5sB5guMWXfHVacTEq2",
  "key2": "FEEcWCLqytVgBipcAoszEAbb8FrNgR1oP7yNvDabc3kAvic1vEU2hByX8uUCgSY4wJ6uv9od1G3nxMCUW8ET2bB",
  "key3": "5ZhsVyCYvUo42Q5ZitNzGicCLAKFHTMpfPSwe5V2u9oZMSbiiRz2RXYqTyZAzNGHwFLfCsEEK2SzPkY7yMJyHqiC",
  "key4": "2YLcmmkiao2HrwKP9C2giL5ftcDb7kZSapmTNLUrXa2NqyCphgi2HkAjTP2KyiTenenzoRakFoRkBk265b4kzc7F",
  "key5": "5EFWcus98WE5PvoaAV1tHvGDryuErN16SVxtJLn4RhQWxoa5cnX6WbfgzbCPHUi9DbnrZtdo7aNfhbBrQhYCMvSv",
  "key6": "4fesvBec5HMsucvMgLdqAJSSs3DS9fhYb6V5RCn5JtoXTfsDM4X1CxW6cNYAJhuFocLt9uWwM3wDzYEPFK355Dc8",
  "key7": "2Kx4NzEiEGm6Ft7AXUCGzGb9PXmC4w4TR3cdRpEDKZwRQJEJLvywhtWjx22aTspJ8KysN17WjLa6CsWLNW8gBd4L",
  "key8": "5FAr1wJs67HuDroa5ejxLRTnBZtkj8p41NgESab2TPuepEhiG6EAACWTfBhmnY9Zjw8stvLjrhQhJ5Y7hra4RgW9",
  "key9": "4pjqHSxgwWSLW4mUV5YmA5qKzGizzpzRN5mPpMPUTdBSfH6vF29pzJckXTdUWfocmbX1PGfeejY8rH2hGq61fvgX",
  "key10": "4kByNST5VBWn9a1J3BVi1oeV4zVbufXViE7fh34TCjQ3B3T6CatYwQLrmAfZuGyfrdbtK6pkB8pxa5svRyjMo5LC",
  "key11": "5XxwRieXhSXFHCH1b3UQzXVEXyM5Vb8HWcho7mQxvMFiodgvEjCB4JJiVS1r9U9To3hxCi1iULfNxmSqqXovf1P7",
  "key12": "2H9XNiceUZyVzEAcX8Nko6SZaRyD39cNj3hG5b6Bz9hWuTKnmcAnoxaEh3R1t8DXog4aL6SQfRJCK3hnPYrZdsNo",
  "key13": "2gh2nCPux3XwdcB5WSFC8XyKUwcgUEw1GcFLxawCFSs4v8j4gquV1bq6keh4ELNHMUCcgXn4RMbF2NALi83CqrT",
  "key14": "5FWZkrsLtQyrANk8bwEXrdtnR4x9J8kUwYZktsNmFYpSL3SPkuk1MauxieMnUfMprFXXb287MoavBoX5arv2gwwv",
  "key15": "ZFNkGEzW27nQovhKhS3MP56WepioFwRXvzLs6dUrEQVNxqMowgBYZPPb77K63hGcXijLWUuDTn4gyg4oDjkVKB1",
  "key16": "57TkWGXhfVZLwz6DezEb3MVG81r2Pr1zAVn4282FM668hDY7U4Do7sj5gHMhWxaH9yjfSEsohCz6bHtzrWwshr1R",
  "key17": "LNZwtS1YFXLXyavwmZw9ZGMFyHwmaHA8vhxQ1vYujto2tvH2tR9DcpRygxrZ2a2pcoLYqYCZGgDW911S73A8pQ6",
  "key18": "2tgeTYCDfX6tMBh1PeGoEPfjcxJLYa7EKYx1WsWjg9c694uUj7mBAUNTiTJaARaNzXzjhugWX6XaCQXAfjskoBEt",
  "key19": "5cg5aYrrKkvwKE5824UBko7v8ZnkKchwB1EtKHUrRbiW2erTZnm3cXQv2e12kHnxj1s8ieCaYVfKtrrDqi5d8Be1",
  "key20": "4EVcM9SPFvtdqg7z1hCg9LqUCdM48bap56gM5WNbYwEjenbmfUjp96W94FAy8LtxktvEy2LZZnsk4G1Kip9umbXB",
  "key21": "5woqZW7A9nS3APLd6o7ckm1uoG5gFfVxY3GZfvnWnDPD63ZwCV1mmxQaAgdr8q8RYCjsaZteRaoHLeJsRpFkdTqK",
  "key22": "BwRer7ezYwgHLy4qzvQ4GH3Bh4KaMFRbkRpmr4ZsU8gb7FV1EeGa8EMxKB5JWTWjUa3ggnJFbBqZ7DuVYuPiCpm",
  "key23": "2nLjqkEnSnCBuvbm1wYsXavadSEPZ4QmAZzNJRxdXyoKER4EfhPVmWQeZxGJUdwz3Ftd6ho55zTkXEP7HLvBkbxc",
  "key24": "2PYfCzuaAX4TNgMnGpQUw5CxvXtLXf82PXJjGgk1HoNiptJz4F7DtkuBt8T43tWpE2XydkgHSxPRuf9j7tYFot4F",
  "key25": "5PRta5Vu24U3tFMS8piETvmXtvFa5nLW5b2GCK2XznuyGRXRHbjnrT4koXVZY6hKQkFb4Ld9jQjDWDfrJVbXorb3",
  "key26": "213b66dmYLJmBjqChJjEL8uNzpHEv7vdSY7zz3Qt1hpzHfa9kBdpczWtnZRwaANLFhrnP7QkxwybVS2DYjyxDjq2",
  "key27": "4cpfBDU6Q55VrK12M2yjTY8vuUFG7MtbutrHbx9tZbPjyCekwTforiRZgBUyKB8LUK1cWEkPbW6NjCpYRhQtNTKa",
  "key28": "2Hoj6akoemFJdrtWDig3tR7yzVf6a7BJRq1ar2FUaaKvxQiSGmQ3yEyWyVxz9f3A5EfX67zsQ6o4WSktDrumpuyK",
  "key29": "53DD1iWxUhjN55DBVxtYaABv81dqWzW2DXvx3TSy4dCfKu1NeFJMNBhRqruioGFjrcmNingZGXWqC99RL1BqFQPD",
  "key30": "zPyn5uQdX37Tdo5YbsgBiTt8S6BWqfqrwU2faBgyFmXWZ3ERE2ztjm6idFKE39VuksFX9x5AXBbf8Rj88z2jd1H",
  "key31": "3HgPSysYgGn5FYhMJ9Q4UYQzdMGsfA2iYBrwJug7mkJoGsj5oL1pS6Da9GMaQiqQDCrfv6zEJ6JqncL7kqkq3jhc",
  "key32": "4r9YRDofEmiXz7swPw4odYkew9CFL23vPvQX3eCMvr4hQ44fehSMxm6TiyTrB5f6HZCTCHrMPizx5yoXr9g3rcBY",
  "key33": "ynbF4Fo37od3AUJ2UQXDgT6H3HyBw66KZMePMnhkwCS5rPAQNax6hmrhnrntKkCRtX8FZ9JFqYGBzgA24i66La4",
  "key34": "5w6vyfZPJec9GrsjuPGXe7GnZTicGYqycFY1xnsEnRZ4SGvnHo5oKpDZHerptn12fUMSxjXoCdCCA12VfDZqHxSM",
  "key35": "3xbSszQZpsFcLF2jMv9teudDPXvR559tTfaooe8B4VD2ui2kJp4y7VCmZkdjwcUGdu1MKGRK6teVX6fEnHbfaE7N",
  "key36": "2EsFW1bVPPKHtoXywxx2kEd3oRWmBwoZFaNECwuWppAewsMH9MqBJBUmkX22H6oLjaz1nkQRWHD3FMs84N2jm4Ao",
  "key37": "bywQ3dLqtH9GSyCUXHs4FMCmQaqfMFCyUXLEUMC7HLUWvVxYXZCBayUeCuwDtokacwAZb49cADMLZz7TPTG7EzE",
  "key38": "3gVBkUMWgTcQnTnASGHxp6NQEqP6dDNN5sWwnEdvMgSWsYrMLEprK3QT6ZRuRrAmfQDgNTMiBBp9omTRe3DFYQoh",
  "key39": "27mz5uUL3cn8MBiTgddUMuza3bspXdmZYVzZDA4eFLfRyhgtdBLGcV7eAGQXLnyXGm38JKUxy1v6taWrTLn5LvD6"
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
