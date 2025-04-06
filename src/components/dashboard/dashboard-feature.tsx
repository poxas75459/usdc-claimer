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
    "6w537sKe92NZYdtpmwaRdCtmtJB7GsTgvSe1dKoBrQPXcperFj9tAMKwmVemnsmmbzDSyiRgLgYdhUveSoYHeH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MddDhXEFoQBCVLpJj1rHuePfw9dwTcEwwFkFGviyps3ZV6JtGGwheWbLH8oVrj63U6pxpjE7cbbRnWNJuewFEL9",
  "key1": "4W8iz3EZZRCUwSkwKBdB8uc2ESXPssG6qQ4GbWFVHmXHXpwS7aiJq4P4PwYqBkNNHFpQa1De42PzxWz9kuKanS5Y",
  "key2": "3KZCbhvqMGCoQHgXj6TsTwdskz2doJgFfHdR7UtwMVEdzJ88XcCiLgsFS9p7Df6tn67RXPgS1dd8w8rWXWeYu6eg",
  "key3": "R67NpshjXbHJkqN5x1z3BjjvS7mWUYdRtm8FqTQ2SncfdRJ39ahhbhX4o2iY3zeWsGaF7Q542f3HzGUSrcFycsd",
  "key4": "3gbqgtNr3LpVeThuDBKrMeKM5XzxKpszSQXPwaiVxdAUUbYkLv5Lq9gBsPawYc4xzdULfzMmrwS7ptC4SdmxCo6C",
  "key5": "2jGUDJrwt3oxRZ8cqyBxt3ZZz2jJ9TZF79GaYXaPfwqd37tq9oNjmAUgxScXHUwXn34HDxb7c6yDTjw8KBC6ViZ7",
  "key6": "2EaYMW4fWhV6tDhVh1kEH1Xfvt6Mdx9foK7cUhtwEh9qAHjgAUPX1Lbq9aMLwfjsf8T5bBmmFXmJJUffEp3RJFca",
  "key7": "2P1ktTWGz65Faxd1a1rjjZd4jTHwY9MgyghVtyGQiUoar39KUoUd6FdebR6i9ZfWYEzcZA4aEzzAfXDAaVUXAkFg",
  "key8": "2fUFaTk32qooictcHqh6ccqjZhw4btCKcCX48pL9Peesv5HdgYusJLcJrrbhMtnpvFjWDFvGzNrUWmj3xdXq96Lw",
  "key9": "4dz6n1UHXS9WYeCgYrt1MphnMiR4wsMVc2cgvdbWmDH8V1b6FGT76zo46juSpo5kKLB2JEbVZ6mzXW4uDTanESj6",
  "key10": "21QD1U8JYnq7ciKvNMygkGDpf4AJmoDLKexqHuEv58oy9Cv6Kei2Rcn8ZrSebomZ4af9WXuRZRC8xbZMj9CSvCV3",
  "key11": "28TPtoxDKj67hxnvy37Ez9MxoARSzsY6boaLSHUH6rYH95hX5HZX3JnNpfPX37jqdvxh74cytRszwxVW7iU4EeKd",
  "key12": "4c69FSezsfXV85qDBEkKVf5ToiSxgfLtqq4nMkJ1L8v5oN4WLJChDmDDf1jcPZsEBgUHW9AVH6q4HxGhKJK6NdGQ",
  "key13": "5B72vQ7r3C8KVF2fUERqcpjCpi1bssa7ds2u7rvqRbjovsUhStUZ1pCxkzyuTy4r5aixbTMLa4LPeDnf2bYdoVDM",
  "key14": "29y76oCpbLEh8VC6BhcWA2NA8gMDCjYALQN7wtr3k2X1GCtSStyuRiL29RrbGmr2Fzz6TZpKjazWHd68mrM2Mpt1",
  "key15": "2CHNvFHYjvyzdRshuL4KcWUxWPUTjQNCEPgL6TujhSc2k9JoefuLTUW7uc31QiTSS8eXUt4DKsCM8o3JR95MGY7C",
  "key16": "HWpEPDtWLkC2PwXGcPbxFkQLHG2hdZiKyMskEMVu6Vc5gCqyUMoGfmujCaAQT8s3hXauw1t9j9qThj3HfSjBVLh",
  "key17": "qBukM88Ktd8rqS8Rh683HkR22zztYQU2erjkeuzdStXAUR7yH6QXVQbhoSHRMpvJHgAXMnJnKP6H97Qze8jmcjJ",
  "key18": "3eAJFyufsJ6t3TR1A4aZkB7xdzxJq6Aqo7jMHA5dExvvtTcSVwjpjSV3vPgxhSU6Q77J4QDEiEaXv2TR1TpcJkjQ",
  "key19": "3YDnKecq7L5S4p9jqhdo2iEuShH1xBt4zdykqd2oNs9jUY5tK6k4tKVAbZzygVCEpScDxqKMapbxVXYTDtEME8a5",
  "key20": "4ooYNycoeQinKRLKBZ2nutUM8XYrrVM9wVu84PP429hrLLKeFA1Xo2Xqwu8soqv5chxTh4BabgFd7MjJmrPL8wt",
  "key21": "3q4BSds5MNbt8rAkmfHo5NFdiLoMogwMTsmDLjKSf35ZH1Sj4Gt8XCz8WTLhJpbmjngrKz4qG8k4Nb95giMCweqt",
  "key22": "Nwo3r7SFX6uChzqukNTV8rPCLvJbbfdT8HdiDvhhkQVEXDiJc9E6Hcu5dARR8WPBKj4ysmqcAecgTU75HUQAMim",
  "key23": "2uJVbbZmZ5RosLgoXQeEK8Pb5BFXjneUdLyhbw4pC3JE6oSKcSd4mdfbE9vRBKp2WtFth859VG93nmDekR9sfvxG",
  "key24": "5AgHC5MtZPmHUSwaJKXq7BfrCHL2PD5Jx9s124u7favTPpm3UL4QJ4pR2dNczBWRGmcfSFK7P2XsQPj1SPjQwkaX",
  "key25": "4LaJ82nB5uh38ModPCM3EoufgqbQ4DnyfiEnN5fwHtpRrj3oMzRigNgdBaEume6uVzNfPQV4ucR7cSztaURzjVRL",
  "key26": "47L82DFHg7nrv2k6A8ph8V1wUFNcsFmkYu17BTK2voUReFqjKfxeAMd5DnBYav8UmxQCxz1mbWCNZfdWsG5G7BVL",
  "key27": "29s7Ry7E53J7NgJdxRCupUBnQZK1cW8KTgeYyj6MC7bsiCmxYw6JaAzD7TJEu9gLnRPg14jALY5XDMryBMTgKP1S",
  "key28": "5QUyqq15zQ56whdfg45X6cvaRgmD21sgogh7dDqUBC9KL2icAcFTx47dK9cwP57r5ChB1L5vkQFz9WmL2ZXfWNXS",
  "key29": "21sfhqGCYTa33EnGGr2p9TZbCQfeDsoi2MyY8FuzwP2iQmoPCtMje863kEmtpr7ngtG6Etn36UKVBHVK4S29PPDf",
  "key30": "2g1bZ7wPafqeUkXXPxWK1qNNxgykHPoCaj4gHW76NMWB7NoUBvVC6se9i6uAHnZkzZPa9t8AM2LNb1mozeTQcpcm",
  "key31": "3npSzMK7VPd9dUZmZSb6qW1jG16barjkfd3BfFsc2eadq3SGUJR2wTAFV7YPxgvLvuRvdz9oT9DmC4kf9P8UjQ8N",
  "key32": "5q4QAJJhLEULAb4SXiAugqzRDjF2EtFPpYpnCiNs9KFJWSsBkKquDKmxXT2NNTaa29mQxBwxsPzzigus42EKLkez",
  "key33": "WQHkP5bHMmMbQ3AQx2kvBYtTsDxyS53fu53MZt2jfo8jRVpLnyRDvJzHo1tA6zrzE4UXm4pjryeqK1vuDs5fNMN",
  "key34": "5am4wdxkDnjqodzTKAhYySW3q1EM4JThNqrvTUdTKGP5bhiX6ptGEeJ9VC6tTYpNHBaYd4AGrkyGaEGNfsbuR2wn",
  "key35": "2t8hj5eiN1MS6JkvdvtnkZWGN4fCXD1sewLVuJ3VZ9E1sGC9kd7sGvnrn379QZU7X8ypLfCKTmGqowEMgphiWqw4",
  "key36": "357549ZPCL6tNWUhBbWe1tWkUa5k9gXd97i2Sd6dFskRQLkPJxcbTrj67oqQH4ABFdYHYBbhtHWfL8LgjjFrPy8S",
  "key37": "4UPLPrbsfG7qA99rgbGKmqnqLXCvmetGfB5Z2Ns4MCSJeQDpgFpzPPcRRNUJeGvANgdAvRZSEtFgpGHS8xGCLZUe",
  "key38": "yBXKmK8TXQoZ81jPuqgYCDuxcojpPqqP9FxoLg1Sq1o3ULS87ftfcLbgHRga9SFX9N4PLckfMNWzqUMhAKTfkcP",
  "key39": "5dvnAKrkZdbDs1brZdyGNgBuJ8gYEKjN6Vfbf6dGsrkALL1RXETn2CBiHTXDAsxJf9u3eVqWqjvXNRjTbYJJ6GuL",
  "key40": "XeyjY1Bzy1HMkWf5t8eAH2DPSjeMrqrb46mJ8FwYMSBBKJFLgQxpLfUJj18dVNjmS7i3EqiC5LZxBSmwHoRoTjB",
  "key41": "5AD6tBuPgQeD3xVjiyNzRBWjPRsJxPjzbsztvYDQtFc3zanL6wFmudw4KNFeyNSFMtUrg4voRFz8RzTMvPqfoEa9"
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
