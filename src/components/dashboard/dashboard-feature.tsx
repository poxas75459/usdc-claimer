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
    "7quFyvYjQEFRUFVrw1coosD1ofrnGZppUxHutynCGsxX8gFG4B4kucdja4SJqKWADpeesDcJBRSeGq7KXGuMeMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64knb2hEjED3EkSdBy4SpVWSbxtDfmV9RGXC4eotd2WtZA2uHT5pLwKWLptHMyzAtD55Rv78j1dd87RFU1eqnHaf",
  "key1": "3QQk9WftwouU3ynacLbhi3VRmxVBkmYhpqEJag2tmKQ7MKjKhzPwbzDAh8riRvPhLf2YnPi2DmtcfvrB165ZUuS2",
  "key2": "5k1Tt6Vs4P8jbUuk45v2G353BWTS33cXEnbKkmXvUdDHA5zDWXTBgEW2RXuXvwJXwfhQ1uT6iicXZJ8Ce3YZ1mfg",
  "key3": "3Fj3oHcREoEdrESdKm8nxkahYvZT3Mo7tBgNkGsshL5359i5YoaifK3Rz6wUK8txFPGmY8AwwMBi8zQe2d6nc6vE",
  "key4": "4VYxGL5wskTu2cyfZ6b4dZvKcwgJoAHoZDiRiwDPE2XefaAs7fdFCs8iX18puE4RjsQWp48RFXhGkoJrY4j4RXqu",
  "key5": "4AQrufj8WPXZNvMvB6JCYwXHus57M5W769u5J3hNpZWCsPwzKEmV75A4CdK7bLCTFHA1yr5RG3PkENM2UqiecESm",
  "key6": "4dBR3aQJ96XmRbnWSbC5fiqYEbRv5CXsZrAk5CzGQCLTE4jr8vVn8DvJgNr5mXdxC8UgZAiW3UEh3qpzkKHGdDch",
  "key7": "5nGzSX9mu5gPp11kQXxL2YhqW7Fnce6jyeaMM4pCht94Xpq8fnpUT4P117DpjNRYopyuzfcSvmhdXasVDPR1Sujp",
  "key8": "2VfBdZFrYrPh4isnTFyMDDY4mCJpUHMUdE39dgfEb3nbD7ZwmMedAY9CoSQYuneBgNeUGEyvYjiuQErEqD4jqPfX",
  "key9": "mnJME8Rte3MccfMPfp6xRVp5JTvX43pQVNh4WaRAFrgDGqtDUQ7iFXVf1QANcdQYW2c4mivLP6rH5cPceeYEw2H",
  "key10": "3dmCYkTWpB2mPn8qQ1r8fJUcZMFw9e37GSoxrW9cPDMaNMGf1yvcKbgpxAquUPEy6DXxgzyMNPtampgUpWCMuSJv",
  "key11": "3oryfABHUDNWFMGHtqTLgL5CLLqSESz2MfDHgQMPLtDtiCUspNe1tbrDTytynjCyvUsuGewiz8WTcpLi9a2oY51r",
  "key12": "MVtWwTXLeHHSNpdMPm5apnJ1NGQFmiPLisiE5qDo1pcEJVJQjzeFGsfCyr7yYmxLW7HJruxzfYiTgwuU7B7REjh",
  "key13": "5Eaphj4QjaphA9B5MXft4vAbptrw95YgbNVGDnWkJ7e3yyRLGi5bRmLKUmbhNF1NcNbauYT9h4CvNx9pyvpVYSqi",
  "key14": "2bUmgsjxVTnPUfj4Kecn4nR8Th5eK7EUFU1XrbpPH3vh4P9L63P9HJCfnHQtXvLyQJ9X77w3TQPmG1ZzjoVAPka1",
  "key15": "5xshdLPRcgo8ZntuKY6foXDdGgxMPpXgaY75fk8jDHDZjkDPuNHkX1pyetHT7XSyCNs243uXpYxNrhwH5su8n355",
  "key16": "4voU6CAqUufZGoFY5C2xJ4oDrh6mdtPp2wgrYnosRuZC7nBT1JSqK1FLqsyKHsF7fkpASt1yZvUGd5sDjqTt3tHK",
  "key17": "5uFgwFEEACEaptd3dqm8QKHA1EGF52gYTLMCzTyJ2fajp98QHSt8BDMSNXz2rfqnFjhNf5SeY2uH5EcxZTLprqe3",
  "key18": "cc9YdoJrmiTu125jV4dmEhDCr1ubQdw6QTfAiGinDojQGZgt3Ghf2bNpa5KQSCaBqPPSXQLKbUKuY1Vk6ShAW3D",
  "key19": "3atAXwdo87NSn8hzbU9YQgjMCz8fqzsmai3NhTLWaUkfo5X258NQAugNKpwdRfFG3sDMKKnmSD7kVbPHaw1Jfgqi",
  "key20": "35RibfFwkHco8RpGfyg8uiLYJMDzB3iPDM9ruW59AZy72SVG1vUHR8V2SriCWzvffh9vvPCLuAgSJyd8UJuoXr9N",
  "key21": "32HiXaRwUwXYBxpYKanDRtqA59UT2D4ZLabWwpGNmFDDnYsFznbLLtRAMakkpqs6tqVLEYuF9RH2R2QLx7utSqh8",
  "key22": "65TGw8zAgnYhK9oSGLVgEp3BUHd6hGdDLMjAQAzmBkcqwKwT4HVv5w65wefzkETxeMyE4HmoxyvCTWmQqNV4YQ1L",
  "key23": "GHFMYTUy2JBwZcJGpVvmXdzer6KL1HgceqQHYvNoi37S8GVeuyX4ti4KpJ9Xu7uGidBqouj5r77qtYrcwLgD1FL",
  "key24": "4ZSDD6sbNq8frruRX4hwC74zNMDzNMMiugv1KDLhvNEMarUwpogpMiVoU4Tg2sLh6MGH1kUgQvXTALbYRk2fcngn",
  "key25": "3uho5R67vBYGXDJfnpEtjfoBeVZMkDNodPUy5PUDEe7ysTsHcSQtBLyyDJC4yLrzbj9EaSrTfm4mUUboZNF2bHt7",
  "key26": "ZN2vEu1zNRqEJfdZc4ETy4YvScLwzvqwcZGCBTCcXwLnTPTY4WG67umLUMXNJdXKWoV9qR4bgGwEY7VTmPxCzo4",
  "key27": "41e31W7PoZbMzDyzMmnGDhaX65PLpcCBji372Xmep437bdGzfVERL1YWJQSArcwYqKd1KEZL2wtbKsknrTVmQpD",
  "key28": "5GgzM3zu8GwqhZsufxmUYuK4jwntUj9W3xWZhEb21t4Ed1bnZYT2aTQD6LWGzzVvTodugQeKym86VAeUFcMxHwZE",
  "key29": "4x4t2xmxATMNdzggF7fDRfAVcB6u8BvDgbL7DvbFvfkAgic6M1L3mFc6ve28KFNGJFYF8dhBV9UrxjiJjhCkbqg6",
  "key30": "5utoSUjxdBVDD4KGJsNMQPQAFRpgZJDMkc5hbLHWzqTdrYfV7JJXivzKCcEbeewMS5Ey4SycfaU31YAGAPH4ro3H",
  "key31": "2mxBZ3i2YedFRJ2tqqXGeBfUX9vRCKD5cUWmdyVFJ1mf4N2hR1aBSGyXwaw9NrgTmdRyv6fyopd7xxzj1wHWKFiG",
  "key32": "3FaH4JhSqBeTJSE1WAqFKPy2m6EYbovFBTaea5wjtWgXkcFGvA8vzjrnFJnE7HX7huF5tnCAozFbQifh3r1VcxaF",
  "key33": "4MuqLCsuUrv4aMHS8ntCopE1xk26Hhif2fnrh511vUVmMv6DgTmFvu4s7JVRVqtM5meS74XeRg4HrqkgpLFCXC6D",
  "key34": "2xmHatAChTSsroArASFJo61SMWB2obhMiSfNUsjXKdd8eKNohxXxruXKsRiUhCAdbGLrpsCUH3A5JZGjGQQgfvVQ",
  "key35": "2tGLx1Eszc1XBrcngT5KzxNcS13DDPVLQcUyG15epXLRYRurCSJchiHZMZuVpr9S5CSZQg2L3YRCJkYGy9KQ6iuK",
  "key36": "2pkUMq1BAcak1aGsYvm1JraRfCNXkCk9ifXZEc4HX5BGiTaihpgF57Mdpy2Lwgw8eA3dNT8EhezPZp2bxjzArJYC",
  "key37": "2GFsZkncNSarfMVxeqhbXuxEkemwdN9ubj5yiMtrRWFJ5zUwZrRUAA9qxNP9rYPcNLGBxo666EyFxAx12nDpCmcW",
  "key38": "2EWt3WNR3tHkbEUsMUfEFg8iGf4nTRdQMDuqBnupmwq7S6dTq8visR6rKYxq3abbhfDdoaVMsLexyLTnWoy6N69Q",
  "key39": "2ZYQK2UmrxF7KX9rsV7y8wb5hvoyzaf9kdjoTx8QG9uUtLVt33KaBkXDWuJpSVuGiVUrH3G4byinSYeLpWtRm8PA",
  "key40": "5vYBEr9J147FyVvAeBx4dmra9EbVCpPjmgkrBnpcZ6SKqMvdAf6zybvtuygiiGC3u9A5vkETaLMczy16WBLYPJqW",
  "key41": "4UQ8uHNvApE6xBoGvFJnNF8uxPmcxYTCNhj8sE8Tmb4qdzqdLXMAYDc6SqxreXn2Wtm5zPCLChXLV5Ydd7bYYU6X"
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
