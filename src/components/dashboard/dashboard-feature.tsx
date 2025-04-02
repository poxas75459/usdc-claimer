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
    "qADHzfsTR6838gPGYj4zpC6Qoo56autvbjbvsiA9sWDKHe3tNDapSLADCgsRiy6DFsoZK9fkVnfKGxQThntLnLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NECnmgzQsrAJ3dYyVLuuGrbXPxwVgXom6LAHyPxXaZYQjfU7rEWY3GnE3DPenMtMdP3dzmKQng6ABnkGRMCmTg3",
  "key1": "3k8xSzneLjChWusirjcX2EWthbqzqmdWGrqXLMQzUSJRCM7sthrVVCXUGvw8Fm5UUb1y8ZyWMZpoW7Gr48BwWtdW",
  "key2": "JoGFEW46xw6WJKF8u4uunqzMJaTUxauCpaLkLJ2JtCk2nwmLYLEs6cDKFFbsZuD3By49BV989xK1zehMPjGknMk",
  "key3": "63BpMCNz2CFzTHQL3GvV34TkzivbSCYftcWXsrzbZnEgtjrLSyaa8QaMBaYMShEHXJirCN1bbW1URwGT2GczYUyz",
  "key4": "YSnqGVVgkP6fcfXy68boyhC7Vgv2AsJU5XvC7AVCqZpwjtVorhPRHyrD452E6hAB5UvtdijKH79izTB7gNunTXd",
  "key5": "SyJJL6H1jHp2qzbZ1ATUuwAA9GCKW9UTRiPFvRccQbjQN8pASQDKxPn22XEEBuJmziMNDYV1XUzk5quBvrprQfx",
  "key6": "5C62vhqryMX1gQZydu2GGfjQtctge1Z6CV6xCYdr9i2F1aE5FcUUQUA4V3y4AhEigboZ7kNjyWwbEK1p9rwpFEJL",
  "key7": "zbQFTxWmMiyQMJSs4TGnvXMCH5xfouQMQyH5PdYGvmf4UzqKrpq6oZmxdb2nDNXpX8sogH8ZY5DHK4droDvnpJK",
  "key8": "3vSdTAfgFhYabnus3i1FCuXXQ8cCNo9HPu6S83KViXL3kuCCUH2TRdqSVfDL1btzXRJmHwWppf1m3q3o8DxiELeV",
  "key9": "3syEHEdi1sKKw3hzD5iKSrtTv3BqBS1BQBBfbod6bFWj3Gzwdt9jJMgu6J6JuqyFbmjdkij9dLATCxnEsN2hzu1B",
  "key10": "74rk6UP5Ek91zD8w9MzmHJSxmFD6ihjFiYdWCP6eMRrSvXEjCN7E6e72bJqz5XrZcwSx1V6KCZhrod1odEhP9g5",
  "key11": "jTuMTJgVaDVtirxtERpmSAeDTtEdwPVRAAD3Ari9zz9MrXwrSrFLbWSZPdeWchVrQYxEujbBcvMqHPc2GooUDDX",
  "key12": "5ZJZpvk8TazH4r5yAE3wWmaaE2U783DqFPKxzDST82daBvmSNfuraLwgZJQGkhPKeUZzGPDprRr1StUkasMouJjM",
  "key13": "45N5o7Cdmhyeg8r7DgmN3krvek8JA7oUYbcUTHmak3ZbbeS4yv4isJt6Q36rEEKWBkBfHkvJBynFva9DQiTxNZ1d",
  "key14": "225DbMHEyNirub5aysXUWZPxncDGJdjtZpiXrNJmbMvuDNkCNktgvWdBicPFNcabM9m5JjQRj43fRd2NZmxBtpZy",
  "key15": "5WhF6nwJRQZgdzTqAnJpY6iBeeBzWp86HmGSMocHdb8mXXACwK1qWD19eC1TtGBQAGzEUbAvNuctW9w575UjMNeh",
  "key16": "t5jHMiVjHee8KqPPootjhGQVemQQ8tBAiMxSJCNeYUTqYkPgggMoUw4EJvtxwvqfiyiPX8mRVeZK41zwj1vBEg3",
  "key17": "2SfDaWMAHN9HLEu3Gmyzg6K5hXYHQr29gRiSGn14ab6vZiyDKTbBSzquQvrtufAUXJB58DNqbzo23RsCcntXVUSA",
  "key18": "5LLi5Xq8ZSqFXsWPJLPq2qXXnwtE18c9Rkkozfp3M1LKNravwA9SnUxEuB9EXSWu5ej347mgNfmFzAuzbUfvZhFg",
  "key19": "4og2yMa8cxQQ7GQG49w1M5o6CefPegyEh2BR8vdcm9Y7zY35phikczwo1kAXvwUKiYHkFgV381w7yPj8as5W81UY",
  "key20": "2C3K2kthUUk7zKMgJWiDbMjZxkD5n7TbSjkM2MfJjbFnsx2MjZRCUskuNs8eNfBBrDPqckEgZqaYPrxY2s6LwSWd",
  "key21": "2ySEmAKBCvSdmWxrob2BHQ9kkMsTDQ81rD8JN5VuCfLiBMWajXgicog7cVi1yVMj8rG7nVYzpX2FyEyCNitrQgXQ",
  "key22": "5w6oH259ABFJPonsqHbDPoG8Jax9FWwsLD85cTHCQCMvSH8ybzvDPbFd5MMj7nqNMUvv1txe9h5ajCrsWj3L1G57",
  "key23": "65txR7Se2DRLeP4wghNyGHBWaBrTJhhC5fuEVdUATqA1rRxw5VZyC34XaPyducirATULnJVF7QT4BPP7HKRBsB5K",
  "key24": "5EN5Zw8zQWZQcW26rrzxp2avFHeJUCh2VMrDTVYyLJr6nvgSX854bAZ6WhXHgBVqZu9mJC2z814UbnoAe2EXwV59",
  "key25": "4Bw7zfiB2PZuQYfGDmCpZ73ieRtVVoeNmLHfC4qyDcV7rAUFccPmcADYEu191MUxifbZ65fGdW13BdY3sSrrqM7P",
  "key26": "gwZohVHpoMBhAaMBVNnr1Cs1UuTmWg4xdUBJrKe8AZvfvDe4aSEzeztiy8Xg4MewzA3EenvCYkDMvf81nadkB5L",
  "key27": "5Drb5c8S99wTdAkNkJhcJGLBarqLWFjAXeZaTujTy3YCgGpEHuWPBMpokqTs2AeA8CkCs7M8cgPuXKwF16F7hcWG",
  "key28": "2VYPNGQFcwX2BJb7GuNwgrj4mGLzwxxtPrvccsp3LCJjHWVzUBvMSZCU7yJdKUr6ArNxPu5KVWMhXvBiboC6udYo",
  "key29": "3CBvBWmnW3vDa1M7z15JRxbm4Qi77moVpnd16MujEdt6TiNapcyCvhxzBmniHeHP5xppBF1qPhjnydnmgmcUC3LG",
  "key30": "2BMmYuNnWy9yenLz6fMA9k8rcThHfqEoS1zsrzDdpiS5sBcRA5TnQ1Ap2vsLwdArb1gE4o4mmgWb1DazcQarqZGx",
  "key31": "4pLRcRQ1fgk56a3W3YQixzMNao934TRbr7wvDzEvBcBS6qqMMPdnjnCJcwhNKVPbM3oWH4NMYFyPSCgQf1WWmamd",
  "key32": "439sVTfmQCyD1sdZT1Qah4uU99suKYUQvPNSQ2EJjTsfjE4eAvZogzZaM19D7ZhRv9LrhLXmxD936rv2bJewk9oA",
  "key33": "3NMjJzh5KE73mr3v4QLhYySYdd2y5sKYNgpLYnPKjf4LGHa2CuR4u8pUNmW8H6HMB3mM8wEJu76NRWHsVmapXHjB",
  "key34": "5ku1v8R86Gk2PdueQ1Q3HfkkdkNUpnULLggpQF9kBc4JTmua8B5jnDCyfPgUu48bJtub4enPjzkujrT4PFPBC5fd",
  "key35": "2YGsiejkDdWbbGcTiRY8DKidufufHM72Str4F5Sm7Vtifp5biJc2ExANqwZNK8ag1pCGCoXVUQQ12oJfX8u3Ryx2",
  "key36": "3UBcLzrrRmaoZEMshHQyCdmLtV6DF5sdxpdx8Y24VDhpbzevNdba2Sgs2cDbVpEaRR4eTXMw1aXbdV35TijKKSAZ",
  "key37": "47xUUjVBdZqwaf9o9RjAL7zCHubFoCMAyZrPCL9UZUbfCdYEeK4YcebTBeNLVsFB8LhmDzX5qKep3CGJABR2AJ5C",
  "key38": "Z2CM5pmch43B8MsWHd2pwdjd6n2jhy1ewJTKr6XKuQ4noQ25eG3FDXQyFx1bXtbyfTPdqBuU9HrELGX8acK7FVd",
  "key39": "4u7bZUwTRYHgSmUMiYS4YD7GnyzGgNWeoSyEPM8UWfGPXZtSA6gjoHSVkGBYtYXMJThbEKca7aynfb7y3bwdbxMJ"
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
