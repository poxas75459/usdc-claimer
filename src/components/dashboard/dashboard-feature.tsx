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
    "2UxT7Tz2dQGLn9ipvPLTYToEcnHmvsyowhL8RaCNwBTNX9UDQWuV4UuzPLZQ9pffCYw37m6wHioBHpWFvcJXMw4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mhtHZD2kUVKNWLSLUSUbMbq8ZeZyPh3NJ6A2drHyeFBFhyX7kc4BCcPKjLQR11wmJZHvLzED8XiPQiH45sR3JF6",
  "key1": "2kKU2JmGQTN6SRXHinn5Vbo6sN17PbyQLxd3ACuEBNQoCYhQG8hB6NWBi1c1DMUJaKdGzTYYmRxpHXpZRF8knDvY",
  "key2": "2xgcN39uaWFp1wEeos5qjzaHA1DLR5PxyLTwvAhnnLU9uKgK1GPaGHbGtCLgKhCXTKiBMqFia9dGtGMbVT18z9Ky",
  "key3": "1tbPeDwFTDqvWKLenvab6LDHoqja5e3XVP3JAsuLBFf2rm4fc4BV1xkmJQg13Nkbfe24V12sYyFdASspZzusqZ3",
  "key4": "5V5oTsYBVwqEkWjYVqzgWvtPH47GNzvctBVbaBTguDZPmEZHEqEdNhEPxKPYkba5H5V85eD8PhPxpux5uR4Msbx2",
  "key5": "3H4DTthWuGsR8Mom1ursQagnVaVb4atpHDC44YATrQYvao4yJkkwgnNwfFTPv65vpLf4JPbRgU6oZUVcCH83MKNc",
  "key6": "Y2A4A5iS3Y2oWRbSoxv23n1PAH3eMmHjogwMb3NHwwAMp1FSgXvKznP4K16L6DzNPUt1nygs5a9Lqgy5M8QPrgo",
  "key7": "6kMuQLry2qh1BKWY4SbHupghysrBb4sBKfwrQCysXo4wF8Ev1Qka7R7vU9bx3bS88tRiNQ7u9Hb929YLfs7CHDq",
  "key8": "AP4qj3TzJfFV3bFAQDshfS9R3ENYp99nZCDwEnmJgTYUyEabgrWVNUdPnyrhSAP1Gf5E5VLpKBSa1xLgUhnFPYE",
  "key9": "633KLzzg2PBDJDENcLhu47U75YFJUL75vhHGdCXijoPJ6keBJmjtZNc9Y7RGQKp2bMHrUbPhdiW3favZhdpVWcQr",
  "key10": "4PLjf2wLgeHLyewPqvcUXYuyTZcSq4CdB2Begr6Dkgn17nCS97eeJ2RonHwz8ZVrGGW5BXmgxVehwGYLU2ybEJxd",
  "key11": "e1RVj71pXVAsrXTb5MG9YCgLjV4qCxwdXHJYhURkJLST22bBVrC9XnGPpRzNokFvifBj9CntMCcD7fedajUg4qK",
  "key12": "3q4mof7XDSgLetCqwTJhPo7huXNM59v77F81TSCEdzxjjof2aZSRD3DUHGVuR5ej5ELvTtPcTA2P2sR5zZaz5Nw9",
  "key13": "56xroGKWG5s4cbwQE4hgAfAQncqWAdxd2Sgs7oTx6MetDELMmkbnPhNZ4Si9z6x1GJsffLBaSrydjSFG8m8fdnoQ",
  "key14": "2ejS5vBgvqwrmehoFgD1vxaVuGZgEZQHuybQeiJJEX6F6dD4zbQkrTJQDq1A1mUXNyhwWGvYDwTRMMnhfsVterqe",
  "key15": "2gpVeu3wJq526SmkLsie43foF7SxBEWQCE7TGjeuyGPeoY6P3EXcanAnQRQik7uTX1UrkTB68rM43myfwW5zv72s",
  "key16": "51za6FmipchbiW7mdTvShcYSnGyUVw4xSX7q8uUYt7vMRzFwm2ZUen2z8vja7hunY4qduVVNSKAmMM8in7AV6YrP",
  "key17": "2cTxGF6YFdR8HVCNTcpwDFnQP7iz4pwXfKtkA7BDQsWNkBUPb1Xzucdq4AyCMhPDMkH7CAuQgmmrRGbL1Qmq9xFH",
  "key18": "4r6CUTzhbHNAmQdfLB8MMA41B5qdM6hPHiRTTH2RWJSYkcDCq786ZxWcWAtk9H8vKdMqK2vkSv8aVwdU5qMPnPDF",
  "key19": "3wKYsQkt3G2A6yRM7MWPSvzGHDWQiH61aziAk5a3UgRoedcXEwrtefBY2EgoMuzgCgNQxpgPTgcc1inyoButcEe7",
  "key20": "4EXBP9D3LcabaRWLeYz7DYaCokty8PDbfLSYYBX7iaq8W29p46UVuiPgiBeC8BbapQAW5vaLFWosxGBpKCQjEAdq",
  "key21": "26MTcBNAUSpk22vvoeoXk7gDuj5kdnrnLJiT9UpKexpuvWcEf99eiKCLHcUQVBT7m1yWQ13sVzxNMRdmzAaUWexr",
  "key22": "5HyNtoBNPmGvzhPSrwdkHocP6jknanRV2sigJ9gVAm8orsqy4PqxhyPnj3WF1C1xgkgJXPiPBdddsKTue9hWcD3h",
  "key23": "4rVpGpCspAeJnete3GbyU1rSEao2jq8xFhJ7ssK7HDya4g9VKeL34W7W3rLZ43fwga6bLDQYEBkpxraNDnj6TWPN",
  "key24": "5HXm1DpmDtZgCXYcFUwZ7yEdzVzXXH7mVGHgfXESz9uk51ZzCJavrZZCX4fzd3SqMDcZgP7XED9drRurzSEnQKzn",
  "key25": "5a9zznc291J8J29mZGY5MSBxPCSxnX7qjmvqghCfPCXuBFds328aEG9jUhJtaF5jXxN1YCmkxTHDJ3LPMdizC9MM",
  "key26": "5ZMAkW2aCKoYHEQiiKqNB2XaESduDyXT4VYYg7Ziytk9wACfuGGrfpXCVtVGHSXiCTQssqkvUzET8NTFzU2jZ9pA",
  "key27": "5XJFveyfBJ2Q5unLv6PPoaBwD5oTMy3iujKS4zS5LksLLLyTkg3nyTLWkq6D3zA5ieNaKGipm9AtTT2RsQ1HKKY6",
  "key28": "64xQ6Hz4DDNhaEe7z2R24rhN1DTzgcE567icfUkP53TxwpdCr1C8kw84QX4ZkrpWsscsgjySX7wdMMYv9EmuiDvT",
  "key29": "5HsoFRL3JatRL5rEXysAff5xJCX5HxkEGgZvCsrpfkzkYC4SR5vN8cGZtmkaPbYT9tyQqbovB9wssfNmiRYKa1KM",
  "key30": "2moN1dbecHEQ1PRFQV1TCSCJDZQuPAii6685HhtGAXszrwHTKU7Rtvc1rfzCVy5xjkyUdhFWb9MgzBZmxnEtV5za",
  "key31": "3LS4FD6WBr3fN8HJXEH5zTTBGnUnzwNdTy9f2jhQZ2oHBrUSZcaiwkyjgGxBM1j12HWZQwEKFiPYFSWcBFhnxaop",
  "key32": "4FCwh9AV1w6i9etvmu5aQnYGXauPeY8MHnYGMPnj6H98jmVmQsF4Gt8ZZZbXF5nCXu3QQ92mctV4qGGzMc4c7Szx",
  "key33": "5povg4zL5aKTnZbioFyd9sa9H6cUt19fJ8qMUXrqLgVVXMgL9TH34BbJ7hjPNhvqd1W8cY75qLPDdyrSQB1gCoqC",
  "key34": "3aBgswtB9quPmDbLGBMEp9YhFwqbpP84UAceY5ekksiLXmdM7fuzNfuQtU3Sk42fUCZ8w7YNQKK27WLZMTBbbKDd",
  "key35": "5FGQsqZKGPahPmJo8iA8jv61b2NfEzCgjG9wUNPotQjoceZh7qtF2wdkyGmEtjBc4NpjxCSSgDKMsLTPNCTQA6vi",
  "key36": "2fcV24LWG5g3Fhv6vwnvnTtfWnQjvAbEWoX3SBjwExWQ3oHdSCbnBwjT5ZDJQxRg6kc2BRxbiHDG8QVD1vMUSHHa",
  "key37": "5W4bFSG2xeGtgbve4izkHzQYAX8GxiBaspxuNyDiZG1sCmbZFuw5NNieF1SBcAi9MgGupdnTchnxki8eFk4QNxQU",
  "key38": "5Q7yiL4rmp334bfuuqc5p5MoL5HwVMsA4TaykLXpudcdRWW5yE8gBeQDQHr8Kh4YLYNPURn7ibukse8KvHAYACj8",
  "key39": "4Ut7cvhSGbpuVYvkyhYszW98Zmq11uDrrPxwJXEV6kmmMNSuvzn2WDqUZxQTUB6bicbtbNqUPfCdtXqXrV1xhJXi",
  "key40": "3d6u7qDu2PgKNWRWsgdDz3vwyvDpoAwhUGaB5RzQJt9CZYkwjLWC88YHDu73mP6cUHLZqEjf2UtMg6sPZQRURZEW",
  "key41": "62rBN8BvzXMHv21GjMoxitCUozWj8bzwXo1obhtp93ikoCiNsHhfJLB6csKG5E1YS4879NTf2JwsKHUDETT5bEJJ",
  "key42": "3Zi1ssBdPmHPn9xHgodA67oT6Fs1XkeBtkHoyDwx4X6BdoDf5cWRmjXSVqcpnUR5w8QuBEjDvWgYB62zdA9AjMyj",
  "key43": "9ckDMk2bssf9hXyQezYn5DbQBWpAx8V9EzsfzA3dSCBFfj6cQTDiENZ3FNfuUmJoDBkBtPkndMuavFJCFrY6A8q",
  "key44": "3AsvpEB97Xwv7HJh9PZPYeXmCoxcP6YUrYSiPZgDkWo5DKgTP3bw3Xks1nV87GG8kuS7DxnrqRKgReRHiqhEpw43",
  "key45": "4jYPx5f2Jbv2BX6Bx7URnkBmue3QAE8YmdTXmMojSPvqKH6AzVnuwSZ24C65U9zqqeTvFHyW9fcfLwrhkRJn3FhY",
  "key46": "2dLvWqGUF5CfYS8zZmdNfdE8ofXXr25MFKzQyFwyNzZDhuKjMfxrRaRQamTeLUgUvk1EsPKU1s9pZvAqLEcrqhDH"
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
