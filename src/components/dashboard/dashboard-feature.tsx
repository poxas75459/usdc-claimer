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
    "mDjzWicnBxV1NHJ28Qp1i8QuaDzVQmnevWco7jJy9WB6t2zwDxCh33kmv3jeqCp3rQQX5VR1awCsTD9nDLegmgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QtCWF3C5qffCFZwxjmN2D8hdasSVgondzPiV4n1KqrNPB5yPiPdunscQaF3fvumCdUxrcHxz5KCp97qjwBMqbVt",
  "key1": "2N33a5nxaaEQP7GoAfmNKmFcUCgN6o2CwZHscrsJ1MhQFmF5G6noQWAZP62CtHdXXZQhL7UNXKs9wEsAGJcS4iVf",
  "key2": "4VnuFHwfnRb1KyuDQTJjqvhQcWS1ugzV9gubsjFZuRsT6Jo71uMLrzBBAkNbFp9L1YnGj4WHpx7xkUR83vT7R9yx",
  "key3": "AVwmRC6kkuaT7wb3P4FrWsrEfMrh6gP8HLJTVMuj7EhuvMGzAZbKv1u6urbyfL6QTQB9gNbbFF5wbHdpAzvg8BK",
  "key4": "8skmqLNGrWtpTUQVjBhn6EZQzBtaC7NeLT465fgdyFJFfD9ssodETHe9HdfP2ustcHoJ3zgeFMpgqrBf2JJfyGp",
  "key5": "3ZUNfHR8KprvGogo3TGgqyiF9ySBzbyCrkqj2jHSJ2bUcR3o3GXvuBtdV2U8jqZDf63CxaquJzcTVNqE4TUWMJbp",
  "key6": "PdsXfPbA4aUSViMsBozCsWPTpqy1Vs33Y7dDpzcd1fmHC9LyfCoZqWTZ4i9UgtRaZShfBPBkPpSSZdjBmS211eQ",
  "key7": "4CXe5f9iooGTps2DfkDHP3TEc5rbVG7CwNx3NA4Q6FEhCZPLNRzheYprj6BUGuVjxXxaSmLpb8aUMKdZoBmFtmN4",
  "key8": "DoL631PPSXgnof6FycGJdmkVen9UugYtNciNYFtcLNKSxvmdbD1Btg43XoMMKfgcofB2iNggKgaTUA5UiMdPeRc",
  "key9": "Te25GWREwA4ymN5fnhcx7bw7YgEAaMXVcdR8vdnyw5rsCXaLNx4mj3eQjUX3Mpami1AJbcNDft2WAFfG9foKWit",
  "key10": "5uKafMbqKsvxJR4aP1j8FiV5bt2hUwSTYnw6v1rhwxmKmyagmUdmEDAPsnzsZxAv7ZpB3E5Sj7bXNeh1ahehFcPk",
  "key11": "3imoXiVmmYKtcgss4oJisSEKE5CJoP2vQmVeuTBHigkqsR7CPB9wVBcnuez1xpSpTKirmQxoSePDzWPF7mddTXCB",
  "key12": "3XqzKSNg2ww4pdoRzwLYnTVv5vAigU8ATJVWrsAopmrv4K4RVWF7n7Xks5N5wBuNEXaEmExkAavtLWpac73Lc1Xg",
  "key13": "3aYcGL7bmDbeSNnq1zjBwjMznUGYwf4ZwHA8iTxs5TKP74uA5DZ12k2HvYqLxtXgikDRZ6Y3oggoma16ZC3yNGpC",
  "key14": "5g3BpJwSkorh7iFwB4UogLLSUMYqzq9DP7JqUe3hHzASJS7NgWbxThzBjZDUk95DX7puXR7jGk7qas6423dz4hy4",
  "key15": "263fsMAMqCjNvcD7dELbbrd9Eybr3LnTbGHanh1mnneNSEEL2ZSA53M8NaxheLEezcSWaN1TAEL6XHY2Fv4JBaBY",
  "key16": "fYqTPrih56yySZFEDg3tQBfmn5o8EVEQeGPWuiNuy6Hrx5c2f8mrBw7KDEF6M3TM65oPMSGS4ACPr5KCSuFeLYV",
  "key17": "3akPhPSHMefjpjWTjJhXg5Hw4FwVLsFh9L6bLdDvpUvQLzQHi6mT65LEc7WyhJ4DL5aUJjMkQ2DCtc43H8AghycV",
  "key18": "KvgWag9BvREmiPNGgJ5y3yzaK3zHyhwKoPYRjA7bLdN5472FGpmGskcxKK7fzzaG4wAaKWgKexEy3RuMoSfvW2y",
  "key19": "5qFXumeWpugzpZthoEmVQSgG1o93Tbunh2JdJ1zjvjed51mBjGfqsTCSXfsGxVgWgw8PfF3Tz6bEAqbJb4DwU8id",
  "key20": "3XfRFzYSkZg3K3ybNt7R139gt7uWBPx6gTyyR51wFZ8xPuNr5aba1sPZ6rj7tKDN9Kf9tqTFrLUGNzXHLcCmviZq",
  "key21": "59GPuwHABR3GV4MHG2oH4VqChHn9URfWuVnj58ZSm1RhzrcSKyaJ49fWdiKHd1keAcJFySyzMXM9mUApC8izXiNg",
  "key22": "5DocNYvVSxPrL9u8EUebt9NuEVbj2ZNjqC3sWhrTroGdH8YfihxVoxG1gVWfR2qodT5X8fJcQJDX9yizfo69Qy3p",
  "key23": "QMYc4nEVeqgZ1AxpxxrUgATyS7jTBfCLWJFGAvPHvwJYYVyKvnXdwvtxvLEKQqXFVVvW9tQLr6PbnmZvaXByt5z",
  "key24": "35evibSbpgMFMxmYbWKBm1mcU24WJ9qzvjeCRh2EHnQBXXhWdtdj6kmJafyThWWDsRBBuMfvTnxZTRdzvTTuDb3g",
  "key25": "5tmijEJzdGFKmtmQXPHXY6ZZsVAkJsKavPfURZStLuZuWsiwcT8VTD3UR94PgYRBsCdZH8VjvwjgUz61oGaEQd5j",
  "key26": "611exELzkgwoji2SzZ7n55FbvkiPjomtv1KVb7qTs9AWR8KMPqPuG19Jyg3ohsL3VfbMi62hVVDmtg3bYEFbrmMv",
  "key27": "4obSprpS1wMWHtx49Smy6uqEMTKB4wi2XhUFnstZPPBdxCfEqC697X1xZ3MBcmCybQPu8nVLY1vosW4bnvy3y4oa",
  "key28": "2JGWZi8fA9gQ159wfXVFzjFLiEiivScZwUi1HPxaTtWJzi4ff3ufS2b35zAUMw6d6HXb6xHZ88xpGC1v1sqqk57B",
  "key29": "PaPrBpuyfuGsevrNDYoocmThAFjYgCzzf3ZuQ8kqLkkqHdyXjNfoauHyFjw1kmxTs24iGC3etUBwrcEEvLKaMwT",
  "key30": "2nPa2MSodrZMgVS4RUJ8k9cE3FPivf6Mw5HbSpdHzCyrc7z2z5hBKSmXiSvRdtsCzpa6aPF71VQUoyM8aQFxrYoc",
  "key31": "TY8j46GEY9ow9FFTqmGSZzsMSUQvR5GW2nK36eLyfPBmcGXRxQ6xPVfgBFkSE6r2y53u1PwoCoGC4N63ZyGuQEw",
  "key32": "53Mtoz4UcnEAC64NWw7NuniK4yGs4TFqVtmsTYZLtxzE2UY97PdXC2WRokvRQA7n11KBa1mQaKk5r8aBMEB5yg31",
  "key33": "3YthFyfgvbYxNXr3U77eBdKCsf7CtFN2ME6EMge1tDTaHpeRpQsbbbNtvsUAz2RSMUBgdfuUUPGRQ7bjEYrzgKwd",
  "key34": "4JXDL4pv8zqkuEgb5SPwnzpNkVpbuMgpd2uSvR9e9jDfnVzyY8KNPe3pm71161heQQXLwfX4ZuzkdfJvQEtGRE4K",
  "key35": "5pRJqxHt3tTU3977ceKkEqJvQ3UnwTqHyy8kDHJF4FtHXHpHzrxHyeckCeoxGh5kGdTDeysRhc2hHXmnkTBB6Urx",
  "key36": "3HFYXQbQdC4uaao5GgywJZPT59SStPJ8PpWc2G5dd1H5dqofbqagh6DWH3DV2gMkdtD7zvQwAgNNevFQzU9Frx4Y",
  "key37": "3LdeTwe2ucpfbhKmAuqu6Z8ikjMRbrcPNcW8SMkFUxuJTS7gDXXtcaaMRvynF9FPB1nEVeeeLtKEDPkmFNTUkqqJ",
  "key38": "4MrybkeLDJG4AeYfuj6zW5NqxRuPwR1KhCpAKUCcuYQnDGMjb8qgHKoBE2Dgju3SkNCXoDh4fkt3F8njmqqHogze",
  "key39": "42HdWnxUrCPeo73qcQUgp6ZmFaBL6DHQGmhcbfuJE3rFdBMBB9t7dQwpoxuHPmyt38J4y44STaUZX2Mtr9kA924v",
  "key40": "3FohFpqErz1ZyzD3SpvdVv7BnLpysG2WAzeq5cAgVWqR3Y419S6o5TnAZ4s9CGSMwpLuMuSdXVavNeaqwdgTntQU",
  "key41": "3FdGrcPnw2vJnC9B1pMi48Fi7EC57fQYVmEPwu4umvSFPckWEtVexF6SPm47hXkAz8AUQgTeifdFz2AgMAfPo7Mc"
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
